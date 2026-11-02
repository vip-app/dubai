/* =====================================================
   DUBAI DELIVERY — SERVICE WORKER v3
   - precache критичных картинок (первые 12 блюд)
   - cache-first для изображений
   - FIFO-чистка image-кэша
   ===================================================== */

const CACHE_NAME   = 'dubai-delivery-v3';
const IMAGE_CACHE  = 'dubai-images-v2';
const IMAGE_LIMIT  = 300;

const ASSETS = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './products.js',
  './manifest.json',
];

// ⚡ Первые ~12 блюд — самые ходовые. Меняйте список под себя.
// Имена должны точно совпадать с файлами в images/.
const PRECACHE_IMAGES = [
  './imageswebp/vach3000.webp',
  './imageswebp/ag3100.webp',
  './imageswebp/mp2900.webp',
  './imageswebp/ma2500.webp',
  './imageswebp/st800sk700sb830stv2000.webp',
  './imageswebp/ssh1950.webp',
  './imageswebp/shtv1400.webp',
  './imageswebp/mr890.webp',
  './imageswebp/sl950.webp',
  './imageswebp/sfk650.webp',
  './imageswebp/sa400.webp',
  './imageswebp/sg350.webp',
];

/* ---------- установка ---------- */
self.addEventListener('install', (event) => {
  event.waitUntil(
    (async () => {
      // app-shell
      const appCache = await caches.open(CACHE_NAME);
      await appCache.addAll(ASSETS).catch(err => console.log('Cache addAll:', err));

      // критичные картинки — в отдельный долгоживущий кэш
      const imgCache = await caches.open(IMAGE_CACHE);
      // качаем параллельно, но не падаем, если какая-то не скачалась
      await Promise.all(
        PRECACHE_IMAGES.map(url =>
          imgCache.add(url).catch(() => console.log('Precache miss:', url))
        )
      );
    })()
  );
  self.skipWaiting();
});

/* ---------- активация ---------- */
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(k => k !== CACHE_NAME && k !== IMAGE_CACHE)
          .map(k => caches.delete(k))
      )
    )
  );
  self.clients.claim();
});

/* ---------- чистка image-кэша ---------- */
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

  // КАРТИНКИ — cache-first (мгновенно после установки SW)
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

  // ОСТАЛЬНОЕ — network-first с fallback в кэш
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
