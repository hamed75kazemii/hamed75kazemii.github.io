'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "2c1544049bbf7b7c3bc352ca59e034c1",
"version.json": "6dafadfe2faec17d09a29f56900d4ba5",
"index.html": "a26510803259890b2971b6320212f3b8",
"/": "a26510803259890b2971b6320212f3b8",
"main.dart.js": "7753384391ccefd6d8de96a04b7ceacb",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "23653bfdbd356f47984e2aa6cc2490a4",
"assets/AssetManifest.json": "92b65ad819ccc9ffc0f8b40c5d635523",
"assets/NOTICES": "d0fae1e37bc458b499fd7dcdbd988e51",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/AssetManifest.bin.json": "90c197dbfde5d365205c1aabb13ac41a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "fb133307cd268a09c3867ba6254f3354",
"assets/fonts/MaterialIcons-Regular.otf": "b858b9d79686915d0db58cb0d77f3497",
"assets/assets/images/profile_frame.png": "26e3ae95a348668568253063e2b7de36",
"assets/assets/images/onboarding1.png": "2a16c3f0ad1db12e266dd91a96e8a160",
"assets/assets/images/onboarding3.png": "e03f6ff72c1dcafb1dbcdb6feeff279c",
"assets/assets/images/onboarding2.png": "7e23f2a361f3b2cec0b251fdbdb4b20a",
"assets/assets/images/auth.png": "717bac32d62273ac9bea075b87d7a094",
"assets/assets/images/activity_temp.png": "9c74ad708bd5fa06264564d965b1190c",
"assets/assets/images/qrcode.png": "f8a61b57469550a89be62b610c51bb87",
"assets/assets/images/Rectangle%252010080.png": "91beec36b7b1c0780eeaef9954666739",
"assets/assets/images/thumb_active.png": "bce345acf2c447329e3e7583db5b405c",
"assets/assets/images/instagram.png": "a2c0e1a52014aa433149a9b80d0703a9",
"assets/assets/images/venue_image1.png": "220031dc141823a2f9c93006e93b6ef8",
"assets/assets/images/nike.png": "282aef4223fde4e8ba802a11ae5636b0",
"assets/assets/images/mygroup.png": "d185a033cf9154e65ed83ef240c01d1e",
"assets/assets/images/mygrouptemplate.png": "b304fbcff42349c40c6e10be35b631ea",
"assets/assets/images/activityengaged.png": "d058992c96671f84484149bb56aa889f",
"assets/assets/images/sabir_profile.png": "77332771e930f7e600cff50b2990af56",
"assets/assets/images/tiktok.png": "6b2af00d4ad1d896a999c677cb77a404",
"assets/assets/images/org_profile1.png": "6bd04a01ce1f1e59f0e4b9a8ea069b6a",
"assets/assets/images/Rectangle%252010000.png": "3b63cdf05d035ad067cecab711737827",
"assets/assets/images/linkedin.png": "b04edf820457c219190780b5498b98cb",
"assets/assets/images/aboutimage.png": "89fddb3d82e27e5d573fd04f087e1530",
"assets/assets/images/together.png": "0e34a1ab934f1b97051f60d4a8ae6d19",
"assets/assets/images/location.png": "6a33821764ad2fe2cfeb95778842cca7",
"assets/assets/images/profile4.png": "4ba67d5eb4191e2fdf80b77a31e0ddc6",
"assets/assets/images/profile5.png": "389b45044f295d6f0b95198ec7e04372",
"assets/assets/images/profile6.png": "10de73e72e4e872d6fec5228781eaee9",
"assets/assets/images/profile2.png": "0f168cbd55d1ad5f0d5437797957a63a",
"assets/assets/images/event_image1.png": "2d2721ad3557fdaabba50596feca8e57",
"assets/assets/images/activity1.png": "62acebb55064c10e13c732e601b5e0fd",
"assets/assets/images/Rectangle%25209999.png": "3b63cdf05d035ad067cecab711737827",
"assets/assets/images/profile3.png": "ef72b379084c220f1b25d5b672778abf",
"assets/assets/images/profile1.png": "ea5f9fddc25e99d144d1b81fdba8b969",
"assets/assets/images/activity2.png": "11634f69b8c655ee22523f9ae7a24c85",
"assets/assets/icons/deactive_social_vibe.svg": "6fc104cb9bb8ce9bfe126d4a07d20072",
"assets/assets/icons/watchlist.svg": "57cf44f742c8d07bde1658e2aec5289d",
"assets/assets/icons/groupcartnotification.svg": "5928e014013b66b0b32024c7bbfc14b1",
"assets/assets/icons/lead_top_gray.svg": "72478e61c274a3664ff50f661e2967eb",
"assets/assets/icons/group_deactive.svg": "acd61fc9c9b54a5f46cf91f3fe89c5a5",
"assets/assets/icons/watchlisted_active.svg": "fc05cb6b755cf5c29b28c49e1c24a7e2",
"assets/assets/icons/library.svg": "3e678085098f3a2c8e6f36d66250376a",
"assets/assets/icons/social_vibe.svg": "82c44b229dc26f8d3dcded550971b8a5",
"assets/assets/icons/blacklinkedin.svg": "b3ba2b3ef1ca481b646c5dea259ed100",
"assets/assets/icons/lead_bottom_gray.svg": "6affa15f4df83aa0bf46be761b3a102d",
"assets/assets/icons/report_chat.svg": "99b7145c877ab6151e0435cc0c9af6e2",
"assets/assets/icons/passwordlock.svg": "3fd0260f5ef4e443ef08fd8b2eb7a59c",
"assets/assets/icons/option.svg": "52a806efa044e8351197c71c66d29c5b",
"assets/assets/icons/logo_text.svg": "5931ba75860e9af8c24e33926d3dc978",
"assets/assets/icons/question.svg": "83194073d1200b95a8c52a5b1bfe7ece",
"assets/assets/icons/instagram.svg": "d7cd43f3f4950278d82d02c9fd5ac1b2",
"assets/assets/icons/link.svg": "c71e5fafe6b46aa12b41ffb133a893aa",
"assets/assets/icons/lead_right.svg": "10f19ab727e330344b03a692808680d7",
"assets/assets/icons/professional_vibe.svg": "dd9ec4f0608afe2fd4cfe9658be47bfd",
"assets/assets/icons/qrcode.svg": "8d2ef182160fee6cee74d23cac38e476",
"assets/assets/icons/Group.svg": "d97f80f7ac32c2a93636dc2a4c2d480b",
"assets/assets/icons/website.svg": "63814303df84fc904ef843052625259d",
"assets/assets/icons/creategroup.svg": "74194e878c06e415997f7e19cda89f1c",
"assets/assets/icons/gallery.svg": "3134fb7c8ae4ff5a6c9bae7d04ce9493",
"assets/assets/icons/resent.svg": "521336779e8d14e8b0f1e9cf566a0d2f",
"assets/assets/icons/lead_right_black.svg": "9969500b237c284c75cd660da8b5067f",
"assets/assets/icons/email.svg": "b5a1029342a77bddb595adb4249bf8a8",
"assets/assets/icons/gear.svg": "b4c1db64fd887fe76398ffafa0c108d1",
"assets/assets/icons/i_will_go.svg": "cb78d1bbd03d70c57efc99cf81303b69",
"assets/assets/icons/blockeduser.svg": "da039ee73278fc6c0cf22db34d86a614",
"assets/assets/icons/deactive_professional_vibe.svg": "0e5cbad81c4b2997c81ab588e0179e95",
"assets/assets/icons/chat.svg": "aec69e50ca2129a23b24c0ace667e76e",
"assets/assets/icons/notification.svg": "2ec24d199e047dfa4e34cbbdfce3e906",
"assets/assets/icons/lead_right_gray.svg": "719cbb6e2718ca1923bec1fb8da44afc",
"assets/assets/icons/facebook.svg": "67cdb1d6a1687a679e4dd9456495d992",
"assets/assets/icons/camera.svg": "07a74d39e1a75523d5902a921d914352",
"assets/assets/icons/groups.svg": "ff44b1ae2b4ce2eb706a8d150e307f6d",
"assets/assets/icons/blacktwitter.svg": "91b5793013ad4c879fbc919c66331203",
"assets/assets/icons/changeprofile.svg": "5a304ecfa52265fdc69729bc052a8407",
"assets/assets/icons/security.svg": "8e186f3869e6d00dd389ff82e11258d3",
"assets/assets/icons/calendar_active.svg": "18af9a06a16c49a49bdf950c8bf07360",
"assets/assets/icons/aboutimage.png": "89fddb3d82e27e5d573fd04f087e1530",
"assets/assets/icons/blackinstagram.svg": "4693168ddb5aecba81060c9581025be3",
"assets/assets/icons/lead.svg": "8e1ab0d00abb699f2e74e523cce2b6bd",
"assets/assets/icons/youtube.svg": "27439985f8de16dfbd82e676ccc304ad",
"assets/assets/icons/whiteprofile.svg": "064940eae1cb78ad74ba7d32d1b28415",
"assets/assets/icons/redlogotext.svg": "030a96c6890160439fef02488180756a",
"assets/assets/icons/report_notification.svg": "93b19c9b2cdd90634fe581054deeb0c6",
"assets/assets/icons/phonecall.svg": "9b2426063365858dc6b9ba41e649bf17",
"assets/assets/icons/bio.svg": "ed24ff609aa22c295873bb59259fa014",
"assets/assets/icons/location.svg": "1c8d61191f4af8e64d05cad154c84da2",
"assets/assets/icons/profile.svg": "1987c413fd180c67deed1b7b139cb396",
"assets/assets/icons/share.svg": "45f0b8e2f23df63e692252023e5323d0",
"assets/assets/icons/linkedin.svg": "9d9bf6b4e61fc2bccbdbc0c0c50be1cc",
"assets/assets/icons/remove.svg": "587c94accb7d1fb5d92b54a5930c5f17",
"assets/assets/icons/twitter.svg": "83568c1874d34520bd2bc1cb6f81aff2",
"assets/assets/icons/calendar.svg": "8bd3d85836fa33256259d7c074943657",
"assets/assets/icons/about.png": "89fddb3d82e27e5d573fd04f087e1530",
"assets/assets/icons/whitenotification.svg": "4b6cd5f7e61dc39cc08c186209b58142",
"assets/assets/icons/logo_gray.svg": "be47e8727ad3121ae3cf58ae2d160f6f",
"assets/assets/icons/private.svg": "9dfdf16c38716625928dbb028e26da5b",
"assets/assets/icons/logo.svg": "cda358a3a6afe3bc0796fafbc2338c35",
"assets/assets/icons/help.svg": "f496a3e9f4796406da977e94bddf835d",
"assets/assets/icons/location_gray.svg": "cf249dc58f1fdbe1f65b6aeac82bffb1",
"assets/assets/icons/menu.svg": "a59423664287e395238ec35852276a14",
"assets/assets/icons/invited_people.svg": "12392083008b1065230d0f4df2ce9b48",
"assets/assets/icons/tiktok.svg": "b7cab6f3c666b0f64db9d95ced7a7751",
"assets/assets/icons/watchlisted.svg": "13230c6b815c6faefcee3ed1171a9744",
"assets/assets/icons/diactivegroup.svg": "acd61fc9c9b54a5f46cf91f3fe89c5a5",
"assets/assets/icons/creategroup_white.svg": "1b68659e82a17d88070eb7db80dcdc66",
"assets/assets/icons/editprofile.svg": "a831d824c0221012e21208d4d5ffc9a9",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
