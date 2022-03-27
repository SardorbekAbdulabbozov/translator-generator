'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "f5e5989918b84993f3275604aa484274",
"index.html": "fab5a1661331f49c6e0847da02ea931e",
"/": "fab5a1661331f49c6e0847da02ea931e",
"main.dart.js": "b71c4fc83d1c93de97a5efc19bdd26d3",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "b19ff2dfa8204d994593edd2c47eac2b",
".git/config": "eb768f9999cd83351eb2b5d35dda0bbf",
".git/objects/61/b6c4de17c96863d24279f06b85e01b6ebbdb34": "5486bd6a506a32f8c081890c2befb8eb",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/3b/789bef1f4243ab3a1a9ee9793b7e632fae0e0a": "87aba70a0314ebc8779924bf88960449",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/9b/c00bcdf7e53b0a08e411e1bfe1593898e8889f": "db57e58d3d97314cebb30497de2cd6d8",
".git/objects/9b/78c9bcf09516aabfa617aa1a3f4a8078f68624": "19d5ebf5065ee1cf4b9b3446695f18b1",
".git/objects/69/4dd37039599198211cd7c02220bd63d57d1f99": "f02d876d542ed7d168efde23714be542",
".git/objects/3c/303a0f511ff7bf45e368c13eab784046cf02bc": "f9740bf06d55ebc73116bcb62c963ee4",
".git/objects/56/20fb4bb5a00e551d7eeda1c24ea5e0a4cfaf1a": "bc7b030759f36cd2ea375a1f18758def",
".git/objects/33/5e0de0e9984ece042246a3ac920bb886c8acef": "d7bed1b26ff5e6245d735069f35b1821",
".git/objects/05/f4d5d4f31a8abda53cf07cfd833327fe53b668": "0ee6db8cea950ebad744ba3d1f3f8f26",
".git/objects/df/283d1d2ac1cde12e031f2d78d3e99e03fe851e": "72088738c2a48ae416956b86e7ef2603",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f4/036701bf46d71c97a8774ce3072db8602acce4": "206614eb382d83ca25aef3cbd3fcb1ad",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/cf/e29027fd9ba42221521429f99021f827873e56": "2f152661382744f4ad5e61f970223208",
".git/objects/fe/f6292a32478991e3f89f61250f64e0a982fb46": "2308399d28cb590c0936d368791f5834",
".git/objects/ed/6560989944c8f27401e086dce6bc6ebf5b4a4a": "d6380076ea14d6af2881de6bc38db99a",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/7c/9aa167cb831c919be0b676ee2f85aeb350f136": "83de717660ce0f5beebc6e5e7022a969",
".git/objects/74/f0e6e26c701fb7aac62d75d48d87bc3cc10dff": "1264005b00352737db350c599094547b",
".git/objects/74/848befd7205a0964aeb93ffc41111ed17fafea": "1cde61d1d9b753ccaf96eebb5bfc8cca",
".git/objects/8a/8bd99b0431ab0c44de93cf1b51266a824a8295": "0107bdf2a4d349872e6a6a149f5cd178",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4c/db83a6879cee923a68558fec9d9a79ce420dd6": "c257fa3bb9250265fc0bbd9c25700346",
".git/objects/26/979ee2661b0c90c06727b3ef5602f78b403b15": "0a3b3f12bceaa5db646534cfcea8ef45",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/38/8dab4ba7da501166f46334abb3bc83058de7e4": "f8dfa56e25796b6c725705eb1aa25434",
".git/objects/3f/54a2b7d52735344b47c82cf87cd342734e2cca": "e49f8972e92863d0e1d38c19a4132de1",
".git/objects/06/bc5b7ba590821a7e93b4542446e147e302158d": "e3f9b8c8ac9b9d2f054a75f7a1e45e6a",
".git/objects/6c/c83c788707ff2c9bf9a8953ed2a6b4265d1f65": "348d50f76d9480be93de85992203ad8d",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/55/718cc3effea2f37323be7cd1007b87d2cc20e1": "2bfb43bad7dacf4c3929e5c7b85286b7",
".git/objects/55/03428622b1d12fde13add7aa8b80a29f5bd86c": "f82f229c73e8ba0b3be60b7b617d5ef6",
".git/objects/0f/a6b675c0a52be9242fc68269eefce46828ad43": "3732df75a452960f40377486a7eb2955",
".git/objects/0a/a09c72044bcecbf4215ba8f11abd81d9b2a02e": "0ff303289847e4874faa0cf2d552ec5d",
".git/objects/0a/45dbaf9ef59eada462fbd568c7680013b41093": "25110b1b965e2b0554ee516cc79a6986",
".git/objects/90/7684d1534039ab84a9559d4c39b9530819b3c1": "5ffbfbe88f022b17f8c8c6120de9d0aa",
".git/objects/a0/1a6df9fbd8e1e0f416f23871e8ec89dc5a6dc4": "23b2bf4e8f794fca255d21f1de12f35d",
".git/objects/b1/0357a0aa6300ab3dfc1831b007f15d635ab744": "5a2fb791ef09ba5adb884fb428738ff2",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/509bf3299f72bf932aec06a4ce1f3090323010": "45cc1071aaefaa50aa3465204dfe8d55",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/cd/687945b8abc6fb772c3650834b2f3a0623fa69": "a6a5be7b9ffb5b8be1b51404616eaacc",
".git/objects/e6/37d6eebbcf462dbd644384255fc26212c5baba": "1b8b5382b61bdf614a5e316070204a99",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/e0/43399c235bf6dbdf84566ba78861dcc560d242": "93f80a9467fe1061fc652540b92e842e",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2d/a976ea2a69012af147bf4aa891ef94047b8ac0": "9741ca8633932e1c31c4a4860d8dff04",
".git/objects/41/6021294bd4a029626abd9e11339acccb224a82": "bd668de14391776a1064fc2b5df6da27",
".git/objects/24/7276b6a11b12d2327e0c2a6e1d4d5158c33093": "8526841f3e85e2717b624f96b8ab5e7f",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/23/9c6f7986de70f48798bd0c1bb54687ddad5206": "96b9fe3267b3e14d867fb7c821d0b42d",
".git/objects/8d/31a64f5aefea376e78532b1aa7c3d2bc39316d": "2c7ac546681d6de5872671c4914364f8",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/76/56f89dabee52febe8f252d3469855eba8ee62c": "b230274f3f4f1d674d49a221553ef8f8",
".git/objects/13/d5596adefd637fabafa9728b5f9b84d15400d9": "fdff25e70e361aeb7cd5bc9256f2c422",
".git/objects/7a/3f38f595c8e003f222c49a8495801e2e57dc12": "ea758f69c4fff7167043f8e4f581ea19",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1c0c05582a3c480f002743121fd544e3",
".git/logs/refs/heads/main": "169b50fe6957fa1a0b048c219833baf6",
".git/logs/refs/remotes/origin/main": "ea1468488c7ddd1e4ea3e710a50ef07f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "13e60a01d04cfcdccd6b638f3b934a06",
".git/refs/remotes/origin/main": "13e60a01d04cfcdccd6b638f3b934a06",
".git/index": "a8154382745a136528a61e18b2b1d1e7",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/COMMIT_EDITMSG": "6019535ee6cea5c034ff50c6bb4f773b",
".git/FETCH_HEAD": "819ad1e700c2adb50dbd74e3a04a2d9d",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "0f80675d173f86c9efac469d66c2d9fd",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
