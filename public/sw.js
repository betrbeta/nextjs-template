/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return registry[uri] || (
      
        new Promise(resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = uri;
            script.onload = resolve;
            document.head.appendChild(script);
          } else {
            nextDefineUri = uri;
            importScripts(uri);
            resolve();
          }
        })
      
      .then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri = nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = depUri => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require
    };
    registry[uri] = Promise.all(depsNames.map(
      depName => specialDeps[depName] || require(depName)
    )).then(deps => {
      factory(...deps);
      return exports;
    });
  };
}
define(['./workbox-8f0e986c'], (function (workbox) { 'use strict';

  importScripts();
  self.skipWaiting();
  workbox.clientsClaim();
  workbox.registerRoute("/", new workbox.NetworkFirst({
    "cacheName": "start-url",
    plugins: [{
      cacheWillUpdate: async ({
        request,
        response,
        event,
        state
      }) => {
        if (response && response.type === 'opaqueredirect') {
          return new Response(response.body, {
            status: 200,
            statusText: 'OK',
            headers: response.headers
          });
        }
        return response;
      }
    }]
  }), 'GET');
  workbox.registerRoute(/.*/i, new workbox.NetworkOnly({
    "cacheName": "dev",
    plugins: []
  }), 'GET');

}));
//# sourceMappingURL=sw.js.map
if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,c)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let t={};const r=e=>i(e,a),o={module:{uri:a},exports:t,require:r};s[a]=Promise.all(n.map((e=>o[e]||r(e)))).then((e=>(c(...e),t)))}}define(["./workbox-7c2a5a06"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"6da2ae232401d1267ed3b6bf31d95f00"},{url:"/_next/static/LNiDLqv9iT7sc33R7rYsL/_buildManifest.js",revision:"39c04c408085e9912adc25c833c9fca1"},{url:"/_next/static/LNiDLqv9iT7sc33R7rYsL/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/472-e2c85a20e5be4f4d.js",revision:"LNiDLqv9iT7sc33R7rYsL"},{url:"/_next/static/chunks/874-44e30aee0032ba88.js",revision:"LNiDLqv9iT7sc33R7rYsL"},{url:"/_next/static/chunks/9081a741-da2182ac72d3c334.js",revision:"LNiDLqv9iT7sc33R7rYsL"},{url:"/_next/static/chunks/92-98e295284223fa18.js",revision:"LNiDLqv9iT7sc33R7rYsL"},{url:"/_next/static/chunks/93854f56-dcd68c4d0b8e1e69.js",revision:"LNiDLqv9iT7sc33R7rYsL"},{url:"/_next/static/chunks/a342680c-8b56074604df80fc.js",revision:"LNiDLqv9iT7sc33R7rYsL"},{url:"/_next/static/chunks/app/_not-found-4df41f0ed43d1a94.js",revision:"LNiDLqv9iT7sc33R7rYsL"},{url:"/_next/static/chunks/app/layout-fcdcb9a0c571eed0.js",revision:"LNiDLqv9iT7sc33R7rYsL"},{url:"/_next/static/chunks/app/mySubscription/page-0581106649a74701.js",revision:"LNiDLqv9iT7sc33R7rYsL"},{url:"/_next/static/chunks/app/page-4a26e7ab103742f2.js",revision:"LNiDLqv9iT7sc33R7rYsL"},{url:"/_next/static/chunks/bc9e92e6-261cdd00ef26dd66.js",revision:"LNiDLqv9iT7sc33R7rYsL"},{url:"/_next/static/chunks/fd9d1056-8e9ce6da1aff3726.js",revision:"LNiDLqv9iT7sc33R7rYsL"},{url:"/_next/static/chunks/framework-8883d1e9be70c3da.js",revision:"LNiDLqv9iT7sc33R7rYsL"},{url:"/_next/static/chunks/main-app-0a924e181b5b19ea.js",revision:"LNiDLqv9iT7sc33R7rYsL"},{url:"/_next/static/chunks/main-cd11e1a91b26547c.js",revision:"LNiDLqv9iT7sc33R7rYsL"},{url:"/_next/static/chunks/pages/_app-ee276fea40a4b191.js",revision:"LNiDLqv9iT7sc33R7rYsL"},{url:"/_next/static/chunks/pages/_error-deeb844d2074b9d8.js",revision:"LNiDLqv9iT7sc33R7rYsL"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-fd4041d5b47a5a49.js",revision:"LNiDLqv9iT7sc33R7rYsL"},{url:"/_next/static/css/25c65e5327f7bb27.css",revision:"25c65e5327f7bb27"},{url:"/_next/static/css/89bdbd517fcbb1a0.css",revision:"89bdbd517fcbb1a0"},{url:"/_next/static/css/90b573ae8d336ebd.css",revision:"90b573ae8d336ebd"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/android-chrome-192x192.png",revision:"7f04051078bf8fa9efa898ebf798413f"},{url:"/android-chrome-512x512.png",revision:"22ebc9da45abb2dfe5912bfbb53bece9"},{url:"/icon-192x192.png",revision:"f8d061fa194617a31b50bff9588af3b8"},{url:"/icon-256x256.png",revision:"cba3f327f30c6bedc5b81fe7cd408611"},{url:"/icon-384x384.png",revision:"dcb4be53c5d7171fc8efb6e0d3b88428"},{url:"/icon-512x512.png",revision:"2e881ae4f293a31f39585fb6cc84f7b2"},{url:"/manifest.json",revision:"486209615665332dd892ef4d70ae2560"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:i,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
