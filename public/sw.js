if(!self.define){let e,a={};const s=(s,i)=>(s=new URL(s+".js",i).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,c)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(a[f])return;let n={};const t=e=>s(e,f),d={module:{uri:f},exports:n,require:t};a[f]=Promise.all(i.map((e=>d[e]||t(e)))).then((e=>(c(...e),n)))}}define(["./workbox-7c2a5a06"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"88ce4ce8dfd467e457383894c4eca76b"},{url:"/_next/static/UYmuHUFO6AnOovI5gOMI1/_buildManifest.js",revision:"39c04c408085e9912adc25c833c9fca1"},{url:"/_next/static/UYmuHUFO6AnOovI5gOMI1/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/410-5a1a17445937aeab.js",revision:"UYmuHUFO6AnOovI5gOMI1"},{url:"/_next/static/chunks/416-bfd9cb78808f65b3.js",revision:"UYmuHUFO6AnOovI5gOMI1"},{url:"/_next/static/chunks/472-4f0866aee09432f2.js",revision:"UYmuHUFO6AnOovI5gOMI1"},{url:"/_next/static/chunks/773-1704c60d2a4ea9e4.js",revision:"UYmuHUFO6AnOovI5gOMI1"},{url:"/_next/static/chunks/9081a741-da2182ac72d3c334.js",revision:"UYmuHUFO6AnOovI5gOMI1"},{url:"/_next/static/chunks/92-40eb94992936c992.js",revision:"UYmuHUFO6AnOovI5gOMI1"},{url:"/_next/static/chunks/93854f56-dcd68c4d0b8e1e69.js",revision:"UYmuHUFO6AnOovI5gOMI1"},{url:"/_next/static/chunks/a342680c-8b56074604df80fc.js",revision:"UYmuHUFO6AnOovI5gOMI1"},{url:"/_next/static/chunks/app/_not-found-abbf4b83b0d599dd.js",revision:"UYmuHUFO6AnOovI5gOMI1"},{url:"/_next/static/chunks/app/feedback/page-e26cf665eeb47896.js",revision:"UYmuHUFO6AnOovI5gOMI1"},{url:"/_next/static/chunks/app/layout-6144364d06b1ad20.js",revision:"UYmuHUFO6AnOovI5gOMI1"},{url:"/_next/static/chunks/app/mySubscription/page-55a0de75ef492173.js",revision:"UYmuHUFO6AnOovI5gOMI1"},{url:"/_next/static/chunks/app/page-8bc2ae7b43295708.js",revision:"UYmuHUFO6AnOovI5gOMI1"},{url:"/_next/static/chunks/bc9e92e6-261cdd00ef26dd66.js",revision:"UYmuHUFO6AnOovI5gOMI1"},{url:"/_next/static/chunks/fd9d1056-c3a96599bfbd027a.js",revision:"UYmuHUFO6AnOovI5gOMI1"},{url:"/_next/static/chunks/framework-8883d1e9be70c3da.js",revision:"UYmuHUFO6AnOovI5gOMI1"},{url:"/_next/static/chunks/main-acd7085d6dc5bb80.js",revision:"UYmuHUFO6AnOovI5gOMI1"},{url:"/_next/static/chunks/main-app-79dfb5dbab6e0045.js",revision:"UYmuHUFO6AnOovI5gOMI1"},{url:"/_next/static/chunks/pages/_app-ee276fea40a4b191.js",revision:"UYmuHUFO6AnOovI5gOMI1"},{url:"/_next/static/chunks/pages/_error-deeb844d2074b9d8.js",revision:"UYmuHUFO6AnOovI5gOMI1"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-f4df3368ffe47c49.js",revision:"UYmuHUFO6AnOovI5gOMI1"},{url:"/_next/static/css/25c65e5327f7bb27.css",revision:"25c65e5327f7bb27"},{url:"/_next/static/css/89bdbd517fcbb1a0.css",revision:"89bdbd517fcbb1a0"},{url:"/_next/static/css/8df665dae678f449.css",revision:"8df665dae678f449"},{url:"/_next/static/media/03b685511c0eaac3-s.woff2",revision:"46fec8ec22bfe84a9182cfecb0fe3fb6"},{url:"/_next/static/media/04fe87c30c4f76ea-s.woff2",revision:"472e8a7f3368235d9d26d7d10f094ff2"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/0e4fe491bf84089c-s.p.woff2",revision:"5e22a46c04d947a36ea0cad07afcc9e1"},{url:"/_next/static/media/101c7b68f2d8b610-s.woff2",revision:"b5808b612c74810455a8c3b0575bf540"},{url:"/_next/static/media/13259ce60de2aa3e-s.woff2",revision:"66caa42ed220265325791d00e7d7ff1a"},{url:"/_next/static/media/1c57ca6f5208a29b-s.woff2",revision:"491a7a9678c3cfd4f86c092c68480f23"},{url:"/_next/static/media/1e8103c5d17beb1d-s.woff2",revision:"6e5e6b35f2164d0e19ba31634d926ae5"},{url:"/_next/static/media/388fb79562c9fc54-s.woff2",revision:"dfa0053f38ab06be437d92f8069afda0"},{url:"/_next/static/media/3a04115668d8070d-s.p.woff2",revision:"d83f1599340e8afa7a36461059a80b81"},{url:"/_next/static/media/3a18fc8da1cdcd01-s.p.woff2",revision:"90550970095780af2d9df97c732853ec"},{url:"/_next/static/media/3dbd163d3bb09d47-s.woff2",revision:"93dcb0c222437699e9dd591d8b5a6b85"},{url:"/_next/static/media/42d52f46a26971a3-s.woff2",revision:"b44d0dd122f9146504d444f290252d88"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/5647e4c23315a2d2-s.woff2",revision:"e64969a373d0acf2586d1fd4224abb90"},{url:"/_next/static/media/5f4dfe83faee04f1-s.woff2",revision:"ad8708422596f2adbe1a8c9a549ac04a"},{url:"/_next/static/media/627622453ef56b0d-s.p.woff2",revision:"e7df3d0942815909add8f9d0c40d00d9"},{url:"/_next/static/media/67e05ba3467b9f4d-s.woff2",revision:"bfa12833132b2af60583a7a0563e6fb1"},{url:"/_next/static/media/699512af39861afa-s.p.woff2",revision:"d998caa1048cad4c89e26a9d3fcab2ee"},{url:"/_next/static/media/79015435f1a55eef-s.woff2",revision:"5872822e91402734b90122bafed6b689"},{url:"/_next/static/media/7be645d133f3ee22-s.woff2",revision:"3ba6fb27a0ea92c2f1513add6dbddf37"},{url:"/_next/static/media/7c53f7419436e04b-s.woff2",revision:"fd4ff709e3581e3f62e40e90260a1ad7"},{url:"/_next/static/media/8fb72f69fba4e3d2-s.woff2",revision:"7a2e2eae214e49b4333030f789100720"},{url:"/_next/static/media/912a9cfe43c928d9-s.woff2",revision:"376ffe2ca0b038d08d5e582ec13a310f"},{url:"/_next/static/media/91a88e0c5dd21dfa-s.woff2",revision:"9663a3dcc4d93b27554c25c2c537a6f0"},{url:"/_next/static/media/934c4b7cb736f2a3-s.p.woff2",revision:"1f6d3cf6d38f25d83d95f5a800b8cac3"},{url:"/_next/static/media/9b67ab375515cd6f-s.woff2",revision:"0ded8b4ff2f6a2b1f0a8420b92a6b969"},{url:"/_next/static/media/9cf7d128be063d32-s.woff2",revision:"bcc892f3fa0e651a3a2795103f72d85b"},{url:"/_next/static/media/a3c201c07e8eb753-s.woff2",revision:"fb08c969e6d9dd50cfd2645eb60ac166"},{url:"/_next/static/media/a5b77b63ef20339c-s.woff2",revision:"96e992d510ed36aa573ab75df8698b42"},{url:"/_next/static/media/a6d330d7873e7320-s.woff2",revision:"f7ec4e2d6c9f82076c56a871d1d23a2d"},{url:"/_next/static/media/aws_logo_dark.50928d65.png",revision:"6fd51a3b1097a7869fe7d68aa14da15c"},{url:"/_next/static/media/b6db722c6886c2cd-s.woff2",revision:"1019108d9fe09d5ae4b3affb185f8656"},{url:"/_next/static/media/baf12dd90520ae41-s.woff2",revision:"8096f9b1a15c26638179b6c9499ff260"},{url:"/_next/static/media/bbdb6f0234009aba-s.woff2",revision:"5756151c819325914806c6be65088b13"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/cff529cd86cc0276-s.woff2",revision:"c2b2c28b98016afb2cb7e029c23f1f9f"},{url:"/_next/static/media/d117eea74e01de14-s.woff2",revision:"4d1e5298f2c7e19ba39a6ac8d88e91bd"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/daa8cca6b52a70fa-s.woff2",revision:"a2b76a053c0543aa04722f43c5852599"},{url:"/_next/static/media/dfa8b99978df7bbc-s.woff2",revision:"7a500aa24dccfcf0cc60f781072614f5"},{url:"/_next/static/media/e195dd2ded485df3-s.woff2",revision:"920bd6d4ea896998f763e38d705bedb7"},{url:"/_next/static/media/e25729ca87cc7df9-s.woff2",revision:"9a74bbc5f0d651f8f5b6df4fb3c5c755"},{url:"/_next/static/media/e35c7314ac518ddc-s.woff2",revision:"ea21fa4f9e2ee9025409672d7750c45b"},{url:"/_next/static/media/eb52b768f62eeeb4-s.woff2",revision:"90687dc5a4b6b6271c9f1c1d4986ca10"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/ee7e17a7bdd8636b-s.woff2",revision:"47403e44df9ec7ef982ce9249b195f64"},{url:"/_next/static/media/f06116e890b3dadb-s.woff2",revision:"2855f7c90916c37fe4e6bd36205a26a8"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/android-chrome-192x192.png",revision:"7f04051078bf8fa9efa898ebf798413f"},{url:"/android-chrome-512x512.png",revision:"22ebc9da45abb2dfe5912bfbb53bece9"},{url:"/icon-192x192.png",revision:"f8d061fa194617a31b50bff9588af3b8"},{url:"/icon-256x256.png",revision:"cba3f327f30c6bedc5b81fe7cd408611"},{url:"/icon-384x384.png",revision:"dcb4be53c5d7171fc8efb6e0d3b88428"},{url:"/icon-512x512.png",revision:"2e881ae4f293a31f39585fb6cc84f7b2"},{url:"/manifest.json",revision:"18886fd05acda60bb21bf9e25d4bddca"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:s,state:i})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
