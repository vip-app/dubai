/* =====================================================
   DUBAI DELIVERY — SERVICE WORKER v4
   - App shell (HTML/JS/CSS): stale-while-revalidate
     → мгновенный запуск PWA даже с VPN
   - Images: cache-first + FIFO
   - Precache 12 популярных блюд
   ===================================================== */

const CACHE_NAME   = 'dubai-delivery-v4';
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

// ⚡ Первые ~12 блюд — самые ходовые. Имена должны точно совпадать с файлами в images/.
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

/* ---------- install ---------- */
self.addEventListener('install', (event) => {
  event.waitUntil(
    (async () => {
      const appCache = await caches.open(CACHE_NAME);
      await appCache.addAll(ASSETS).catch(err => console.log('Cache addAll:', err));

      const imgCache = await caches.open(IMAGE_CACHE);
      await Promise.all(
        PRECACHE_IMAGES.map(url =>
          imgCache.add(url).catch(() => console.log('Precache miss:', url))
        )
      );
    })()
  );
  self.skipWaiting();
});

/* ---------- activate ---------- */
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

/* ---------- image cache prune (FIFO) ---------- */
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

  const url = new URL(event.request.url);

  const isImage =
    event.request.destination === 'image' ||
    /\.(jpe?g|png|webp|gif|avif|svg)(\?.*)?$/i.test(url.pathname);

  // App shell: HTML/JS/CSS/JSON/manifest и любые навигационные запросы
  const isAppShell =
    event.request.mode === 'navigate' ||
    /\.(html|js|css|json|webmanifest)(\?.*)?$/i.test(url.pathname) ||
    url.pathname === '/' ||
    url.pathname.endsWith('/');

  /* ----- КАРТИНКИ: cache-first ----- */
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

  /* ----- APP SHELL: stale-while-revalidate ----- */
  // Отдаём из кэша МГНОВЕННО (PWA запускается за ~0.2с),
  // параллельно обновляем кэш в фоне для следующего запуска.
  if (isAppShell) {
    event.respondWith(
      caches.open(CACHE_NAME).then(async (cache) => {
        const cached = await cache.match(event.request);

        const networkPromise = fetch(event.request)
          .then((response) => {
            if (response && response.status === 200) {
              cache.put(event.request, response.clone()).catch(() => {});
            }
            return response;
          })
          .catch(() =>
            cached ||
            caches.match('./index.html') ||
            caches.match('./')
          );

        return cached || networkPromise;
      })
    );
    return;
  }

  /* ----- ОСТАЛЬНОЕ: network-first ----- */
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
