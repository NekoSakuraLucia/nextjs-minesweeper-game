if(!self.define){let e,s={};const c=(c,a)=>(c=new URL(c+".js",a).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(a,i)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let t={};const r=e=>c(e,n),d={module:{uri:n},exports:t,require:r};s[n]=Promise.all(a.map((e=>d[e]||r(e)))).then((e=>(i(...e),t)))}}define(["./workbox-4754cb34"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"89d022efe16534d3311428eb84df456e"},{url:"/_next/static/chjSxyRlUbEJyVzH0Sic6/_buildManifest.js",revision:"6cca0661af4a19bac0fa20ff5bf0a69c"},{url:"/_next/static/chjSxyRlUbEJyVzH0Sic6/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/203.215f7ebb412294c3.js",revision:"215f7ebb412294c3"},{url:"/_next/static/chunks/205.f5768527eea09827.js",revision:"f5768527eea09827"},{url:"/_next/static/chunks/210.e2947414f6496efb.js",revision:"e2947414f6496efb"},{url:"/_next/static/chunks/218.ad83b00c503fe8f6.js",revision:"ad83b00c503fe8f6"},{url:"/_next/static/chunks/219.43db53913495240b.js",revision:"43db53913495240b"},{url:"/_next/static/chunks/290.c685b20d581d5698.js",revision:"c685b20d581d5698"},{url:"/_next/static/chunks/344.9d1e9e0ba348ecd4.js",revision:"9d1e9e0ba348ecd4"},{url:"/_next/static/chunks/389.d0ff1ae88c775b62.js",revision:"d0ff1ae88c775b62"},{url:"/_next/static/chunks/399-6fde6df85bfbe200.js",revision:"chjSxyRlUbEJyVzH0Sic6"},{url:"/_next/static/chunks/3a91511d.b37efb617908bf9a.js",revision:"b37efb617908bf9a"},{url:"/_next/static/chunks/42.e2589261ff3d6dd6.js",revision:"e2589261ff3d6dd6"},{url:"/_next/static/chunks/4bd1b696-a98f3ed9a72e4034.js",revision:"chjSxyRlUbEJyVzH0Sic6"},{url:"/_next/static/chunks/517-0db8042eb275cb4f.js",revision:"chjSxyRlUbEJyVzH0Sic6"},{url:"/_next/static/chunks/552.d1299e9135f4b5cd.js",revision:"d1299e9135f4b5cd"},{url:"/_next/static/chunks/565-aad1d26218bee8ef.js",revision:"chjSxyRlUbEJyVzH0Sic6"},{url:"/_next/static/chunks/613.6b78afd81e49d69f.js",revision:"6b78afd81e49d69f"},{url:"/_next/static/chunks/634.6f83c580e4f9653c.js",revision:"6f83c580e4f9653c"},{url:"/_next/static/chunks/669.3a79d005d6f4ac0c.js",revision:"3a79d005d6f4ac0c"},{url:"/_next/static/chunks/692.6a5c4138bd28045d.js",revision:"6a5c4138bd28045d"},{url:"/_next/static/chunks/777.99ecbb973c26faf5.js",revision:"99ecbb973c26faf5"},{url:"/_next/static/chunks/805.2ee5ffc55b46458a.js",revision:"2ee5ffc55b46458a"},{url:"/_next/static/chunks/83.22c7fa6c960d9542.js",revision:"22c7fa6c960d9542"},{url:"/_next/static/chunks/879-25bd552ec47ece44.js",revision:"chjSxyRlUbEJyVzH0Sic6"},{url:"/_next/static/chunks/993.0782f0e770d0779f.js",revision:"0782f0e770d0779f"},{url:"/_next/static/chunks/aaea2bcf.1029aeb85b97d3e8.js",revision:"1029aeb85b97d3e8"},{url:"/_next/static/chunks/ad2866b8.f1442ee25fd052ff.js",revision:"f1442ee25fd052ff"},{url:"/_next/static/chunks/app/_not-found/page-3e13321bdc604d13.js",revision:"chjSxyRlUbEJyVzH0Sic6"},{url:"/_next/static/chunks/app/layout-5dc889caaee23a40.js",revision:"chjSxyRlUbEJyVzH0Sic6"},{url:"/_next/static/chunks/app/not-found-2530239d66813f54.js",revision:"chjSxyRlUbEJyVzH0Sic6"},{url:"/_next/static/chunks/app/page-b58bbbc4db08f217.js",revision:"chjSxyRlUbEJyVzH0Sic6"},{url:"/_next/static/chunks/e37a0b60.39a20f0ff03136e7.js",revision:"39a20f0ff03136e7"},{url:"/_next/static/chunks/framework-084d7bd8f115a2e5.js",revision:"chjSxyRlUbEJyVzH0Sic6"},{url:"/_next/static/chunks/main-af230b3c7d4d454a.js",revision:"chjSxyRlUbEJyVzH0Sic6"},{url:"/_next/static/chunks/main-app-c9e4bf0bb7d0cc3a.js",revision:"chjSxyRlUbEJyVzH0Sic6"},{url:"/_next/static/chunks/pages/_app-66de6c865428b55f.js",revision:"chjSxyRlUbEJyVzH0Sic6"},{url:"/_next/static/chunks/pages/_error-0401b8b0f2d23456.js",revision:"chjSxyRlUbEJyVzH0Sic6"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-f99c9a182b8e5d34.js",revision:"chjSxyRlUbEJyVzH0Sic6"},{url:"/_next/static/css/34a72a2dfc6ca7d9.css",revision:"34a72a2dfc6ca7d9"},{url:"/_next/static/css/471d3a9d13e8dc25.css",revision:"471d3a9d13e8dc25"},{url:"/_next/static/media/569ce4b8f30dc480-s.p.woff2",revision:"ef6cefb32024deac234e82f932a95cbd"},{url:"/_next/static/media/747892c23ea88013-s.woff2",revision:"a0761690ccf4441ace5cec893b82d4ab"},{url:"/_next/static/media/93f479601ee12b01-s.p.woff2",revision:"da83d5f06d825c5ae65b7cca706cb312"},{url:"/_next/static/media/ba015fad6dcf6784-s.woff2",revision:"8ea4f719af3312a055caf09f34c89a77"},{url:"/assets/not-found.webp",revision:"adc9d268887c39fbed6bf8d8d202cb51"},{url:"/cursor/cursor-idle.webp",revision:"87e8c75e051aa550ded1589abf63f3b2"},{url:"/cursor/cursor-pointer.webp",revision:"bc37c69213424936cb0c483b35db2d29"},{url:"/icon/icon-128x128.png",revision:"689363093426de4e0ccc3944fd07f957"},{url:"/icon/icon-144x144.png",revision:"01fde48376bc5fe307a1891da635c7d3"},{url:"/icon/icon-152x152.png",revision:"4e4416e1ee973b5e843e9934d98f1d9d"},{url:"/icon/icon-192x192.png",revision:"e879ede12cffc27e3678374c8a01caf3"},{url:"/icon/icon-384x384.png",revision:"39a0c85250fcf8478d25cede7657566b"},{url:"/icon/icon-48x48.png",revision:"c2e1536d41b4b252dfb7ba094b2f2299"},{url:"/icon/icon-512x512.png",revision:"cb2069589da8e70ba8280230bd59cead"},{url:"/icon/icon-72x72.png",revision:"8e1ba90240dc91a2c8490ba2dffc1568"},{url:"/icon/icon-96x96.png",revision:"513ac4258a1c884564ffd7e1fc33d624"},{url:"/manifest.json",revision:"ab641b10c6f9e73b4028ab1f3f6c3941"},{url:"/metadata/manifest.webp",revision:"24ed09fbc59bcf4b74de86eb208b8442"},{url:"/metadata/readme-1.webp",revision:"b0dfce79a12a13db41446d03f2e44c7b"},{url:"/metadata/readme-2.webp",revision:"734260c6791644ee6b48a80962c355e9"},{url:"/metadata/readme-3.webp",revision:"f7dc36254b530db8152d1d2bf27fd8d5"},{url:"/metadata/readme-4.webp",revision:"7b73be56bc852c838fdb3aa8ea8b2be5"},{url:"/metadata/readme-5.webp",revision:"437b62aaaf304ab4df75d322258ff8b6"},{url:"/metadata/readme-6.webp",revision:"36818296db4f0dcc869ac3ad1d2f1a68"},{url:"/metadata/readme-7.webp",revision:"d9a1cb73fd3625bcf20a3535425f8d88"},{url:"/metadata/readme-8.webp",revision:"4478f6481c42f23b21d46fa993ae6702"},{url:"/metadata/readme-9.webp",revision:"9cf3416f1c856105694b27b8c2053824"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:c,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
