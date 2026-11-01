/* =====================================================
   DUBAI DELIVERY — SERVICE WORKER
   v2: cache-first для картинок + долгоживущий кэш изображений
   ===================================================== */

const CACHE_NAME   = 'dubai-delivery-v2';   // app-shell, версия = сброс при обновлении
const IMAGE_CACHE  = 'dubai-images-v1';     // отдельный долгоживущий кэш картинок
const IMAGE_LIMIT  = 250;                   // максимум картинок в кэше (FIFO)

const ASSETS = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './products.js',
  './manifest.json',
  'https://cdn.jsdelivr.net/npm/vue@2.7.16/dist/vue.min.js'
];

/* ---------- установка ---------- */
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache =>
      cache.addAll(ASSETS).catch(err => console.log('Cache addAll:', err))
    )
  );
  self.skipWaiting();
});

/* ---------- активация ---------- */
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          // Удаляем только устаревшие app-shell кэши; кэш картинок живёт отдельно
          .filter(k => k !== CACHE_NAME && k !== IMAGE_CACHE)
          .map(k => caches.delete(k))
      )
    )
  );
  self.clients.claim();
});

/* ---------- чистка кэша картинок (FIFO) ---------- */
async function pruneImageCache() {
  const cache = await caches.open(IMAGE_CACHE);
  const keys  = await cache.keys();
  if (keys.length <= IMAGE_LIMIT) return;
  const toDelete = keys.slice(0, keys.length - IMAGE_LIMIT);
  await Promise.all(toDelete.map(k => cache.delete(k)));
}

/* ---------- fetch ---------- */
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  if (!event.request.url.startsWith('http')) return;

  const isImage =
    event.request.destination === 'image' ||
    /\.(jpe?g|png|webp|gif|avif|svg)(\?.*)?$/i.test(event.request.url);

  /* ----- КАРТИНКИ: cache-first (мгновенно после первого визита) ----- */
  if (isImage) {
    event.respondWith(
      caches.open(IMAGE_CACHE).then(async (cache) => {
        const cached = await cache.match(event.request);
        if (cached) return cached;

        try {
          const response = await fetch(event.request);
          if (response && response.status === 200) {
            cache.put(event.request, response.clone())
                 .then(pruneImageCache)
                 .catch(() => {});
          }
          return response;
        } catch (e) {
          return cached || Response.error();
        }
      })
    );
    return;
  }

  /* ----- ОСТАЛЬНОЕ: network-first с fallback в кэш ----- */
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        if (response && response.status === 200) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, clone).catch(() => {});
          });
        }
        return response;
      })
      .catch(() =>
        caches.match(event.request).then(cached => {
          if (cached) return cached;
          if (event.request.mode === 'navigate') {
            return caches.match('./index.html');
          }
        })
      )
  );
});
