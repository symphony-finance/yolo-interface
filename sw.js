if(!self.define){let e,s={};const c=(c,i)=>(c=new URL(c+".js",i).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(i,a)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let r={};const o=e=>c(e,n),t={module:{uri:n},exports:r,require:o};s[n]=Promise.all(i.map((e=>t[e]||o(e)))).then((e=>(a(...e),r)))}}define(["./workbox-6316bd60"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/-C1VuRTmC2WLuaTbQROet/_buildManifest.js",revision:"acac934811488f95c87172a3c93eb736"},{url:"/_next/static/-C1VuRTmC2WLuaTbQROet/_middlewareManifest.js",revision:"60ed9523f510025b6e688aada2df4cec"},{url:"/_next/static/-C1VuRTmC2WLuaTbQROet/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/130.71b1626ea12d5a30.js",revision:"71b1626ea12d5a30"},{url:"/_next/static/chunks/29e84a2a.12f5755c2678b3ef.js",revision:"12f5755c2678b3ef"},{url:"/_next/static/chunks/323-dce28222e9dd6de2.js",revision:"dce28222e9dd6de2"},{url:"/_next/static/chunks/387.980da9e4664ea7cb.js",revision:"980da9e4664ea7cb"},{url:"/_next/static/chunks/456.ee127c7e6596ac09.js",revision:"ee127c7e6596ac09"},{url:"/_next/static/chunks/487-6f5266bb5c8d6ae1.js",revision:"6f5266bb5c8d6ae1"},{url:"/_next/static/chunks/496.e11dc3bc66f679bb.js",revision:"e11dc3bc66f679bb"},{url:"/_next/static/chunks/55a21ef8.2e73a1e2142eb6fd.js",revision:"2e73a1e2142eb6fd"},{url:"/_next/static/chunks/563.fbd5f4f9151f8110.js",revision:"fbd5f4f9151f8110"},{url:"/_next/static/chunks/575.1d83b09e123200fa.js",revision:"1d83b09e123200fa"},{url:"/_next/static/chunks/581.846befea545dc0c9.js",revision:"846befea545dc0c9"},{url:"/_next/static/chunks/729.18b192f73a29f509.js",revision:"18b192f73a29f509"},{url:"/_next/static/chunks/806.ec9ee5dc4f7327f5.js",revision:"ec9ee5dc4f7327f5"},{url:"/_next/static/chunks/841.5eb40d39d5479e64.js",revision:"5eb40d39d5479e64"},{url:"/_next/static/chunks/878.edfc7a29cb529104.js",revision:"edfc7a29cb529104"},{url:"/_next/static/chunks/920.a17ebc4e848c003f.js",revision:"a17ebc4e848c003f"},{url:"/_next/static/chunks/952.e048dcc4927214ab.js",revision:"e048dcc4927214ab"},{url:"/_next/static/chunks/983.aae8caaf2b5a67a7.js",revision:"aae8caaf2b5a67a7"},{url:"/_next/static/chunks/framework-4975f770e34de116.js",revision:"4975f770e34de116"},{url:"/_next/static/chunks/main-363404c1a722f43d.js",revision:"363404c1a722f43d"},{url:"/_next/static/chunks/pages/%5Bnetwork%5D-ecefb583bf7f4e0f.js",revision:"ecefb583bf7f4e0f"},{url:"/_next/static/chunks/pages/_app-716910eae4519d99.js",revision:"716910eae4519d99"},{url:"/_next/static/chunks/pages/_error-0ff9de454a09d4a2.js",revision:"0ff9de454a09d4a2"},{url:"/_next/static/chunks/pages/about-21e51dea4237e286.js",revision:"21e51dea4237e286"},{url:"/_next/static/chunks/pages/index-0a7ca9c8cd592a0d.js",revision:"0a7ca9c8cd592a0d"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"99442aec5788bccac9b2f0ead2afdd6b"},{url:"/_next/static/chunks/webpack-6099c94a32cedce7.js",revision:"6099c94a32cedce7"},{url:"/_next/static/css/8d807056f42cfa29.css",revision:"8d807056f42cfa29"},{url:"/apple-touch-icon.png",revision:"a8f46ed412e7fa618e7b431006ea141a"},{url:"/favicon.ico",revision:"ee0efe6cd1df889f4eaa6628226ebec9"},{url:"/icons/about_us_dark.svg",revision:"7366b93766b89828457b7b0ac31a84ea"},{url:"/icons/about_us_light.svg",revision:"afc57d44b79e9c60147cadef4f9d8ad9"},{url:"/icons/approval.svg",revision:"475e65e9d607995c237adc83f48f6ce1"},{url:"/icons/checkbox_checked.svg",revision:"30ff630bed13c4068dd3f3c98b38e9f3"},{url:"/icons/close_small.svg",revision:"2833acfb1ffe5c5e6886fdda30af1eb5"},{url:"/icons/copy_dark.svg",revision:"dd259af882ca5952edd193ab8b7e160f"},{url:"/icons/copy_light.svg",revision:"76179d6b8466c892ef555b0cd797eaa4"},{url:"/icons/dark_theme.svg",revision:"a28ecacb328f4cab648ceef6530866c0"},{url:"/icons/deBank.svg",revision:"9eb04346003aafd3396eb50ebdd1b725"},{url:"/icons/discord.svg",revision:"d07e8d4a234cc4a46030f88b7f63312d"},{url:"/icons/external_link_dark.svg",revision:"36a2507d80989df97c7ec945a54598a0"},{url:"/icons/external_link_light.svg",revision:"9b30aae773bba878522a7dd8e8bbfa55"},{url:"/icons/fortmatic.svg",revision:"910e8673d09d4880e90a07a2cc2e0746"},{url:"/icons/github.svg",revision:"44d87c220adf6f6874d4138c31cd076b"},{url:"/icons/help_icon_dark.svg",revision:"88cef4916dc1cbbd7da73fa7ccd2577d"},{url:"/icons/help_icon_light.svg",revision:"d6d7d1b27e59b2664d315479b87ab4b0"},{url:"/icons/light_theme.svg",revision:"cacfe8376aad194943ccb18c6f28de49"},{url:"/icons/limit_order.svg",revision:"7e6354840595c554b195b3470bd509e1"},{url:"/icons/logo.svg",revision:"a83142f9083ec409d5d7cd1c55b0b86c"},{url:"/icons/medium.svg",revision:"5f206b011a8cc54d40a6cf27e08cf066"},{url:"/icons/metamask.svg",revision:"abb44d661e925973daf3dbebf78cc0d9"},{url:"/icons/optimism.svg",revision:"ee0e19be7dc35b41a99b2c124f73f40e"},{url:"/icons/order_arrow_dark.svg",revision:"36e5e73df58c1b7c79094a2171155855"},{url:"/icons/order_arrow_light.svg",revision:"0c1f224816fa3e90b28ec904497eb373"},{url:"/icons/orders.svg",revision:"3c1158f493c59f80fbd62e2942bea555"},{url:"/icons/partying_face.svg",revision:"b68c135180dc758f0a6b3d841885ce3f"},{url:"/icons/portis.svg",revision:"bb3b012157b51ce9fb32239644ae5d35"},{url:"/icons/puff_loader.svg",revision:"7163988b3df91170556eb01e0bcd4543"},{url:"/icons/refresh.svg",revision:"22aeae4a804c0dd8ccf85905397a3e0e"},{url:"/icons/search.svg",revision:"2b944c3b797cda995113a994ab7864f5"},{url:"/icons/search_face.svg",revision:"06f71d3758704e2ed5fa9455c0c98db7"},{url:"/icons/swap_token.svg",revision:"f455f268502b6a35ff3311ae350b27f8"},{url:"/icons/toast_check.svg",revision:"e38f48ec729cd8327124bc32a4aee97e"},{url:"/icons/trans_rejected.png",revision:"c6d61542e278d097189872672c5a13ed"},{url:"/icons/trans_submitted.png",revision:"60428107f535cd69e0d1c4f83486f09c"},{url:"/icons/twitter.svg",revision:"184cfffaed949a7e05a07adf875954ca"},{url:"/icons/youtube.svg",revision:"84d50ff59851f5507702abfbc52c0b39"},{url:"/icons/zapper.svg",revision:"a7030cef7992042b247aed32ff978c73"},{url:"/icons/zerion.svg",revision:"20c1bf03b726f8a5da4ddba18375cf8e"},{url:"/img/background_bl_dark.svg",revision:"ad7f3fd4478887e897c8fa9228ba0c59"},{url:"/img/background_bl_light.svg",revision:"222654d96893a8ed63528e1cdd802310"},{url:"/img/background_tl_dark.png",revision:"88b704136bda0486913df05ff9580e86"},{url:"/img/background_tl_light.png",revision:"f1706ca5db09873e2f91999c9d557ff5"},{url:"/img/background_tr_dark.svg",revision:"533b85d9b49676c5f3a0509d28247414"},{url:"/img/background_tr_light.svg",revision:"d96b7c2f8897165bbe280f28974c174c"},{url:"/img/limit_stoploss_order.png",revision:"aa5d509294ba6ad19d4b1fb2bb8cbcff"},{url:"/img/meta_dex_aggregator.png",revision:"959e5614e92c3587214705ccfac7ed66"},{url:"/img/yield_optimized_trades.png",revision:"57c6c4939bc1c3bc2904906cc287775a"},{url:"/logo.svg",revision:"9a5fcbc305e7680778d3b0fa9640f5d7"},{url:"/logos/icon-192x192.png",revision:"7e412b857dc09c267eb8c43cd6f1b7fe"},{url:"/logos/icon-256x256.png",revision:"c77011c8c63f0c0ef4ca6783ad290c26"},{url:"/logos/icon-384x384.png",revision:"2663bd2aec5c04641eaa034ee3486bc1"},{url:"/logos/icon-512x512.png",revision:"95f8edb535f4c587b58d395d3eba0174"},{url:"/logos/maskable.png",revision:"b3fc4e1e1c627d755131f6dd2843e629"},{url:"/logotext.svg",revision:"67418b9a3706330a2aabd21e6c87da22"},{url:"/manifest.json",revision:"80f39ca093c3bd8433d4a0cc0c18a047"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:c,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
