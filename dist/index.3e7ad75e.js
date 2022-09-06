// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"i0koh":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "b9f913cb3e7ad75e";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"MC2Vq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// CONTROLLER
// Controls when functions are called
var _model = require("./model");
// VIEWS
var _randomView = require("./views/randomView");
var _randomViewDefault = parcelHelpers.interopDefault(_randomView);
var _searchView = require("./views/searchView");
var _searchViewDefault = parcelHelpers.interopDefault(_searchView);
var _resultsView = require("./views/resultsView");
var _resultsViewDefault = parcelHelpers.interopDefault(_resultsView);
var _trendingView = require("./views/trendingView");
var _trendingViewDefault = parcelHelpers.interopDefault(_trendingView);
var _navigationView = require("./views/navigationView");
var _navigationViewDefault = parcelHelpers.interopDefault(_navigationView);
const controlRandomGif = async function(e) {
    try {
        // 1) Render Spinner
        (0, _randomViewDefault.default).renderSpinner();
        // 2) Spin get another icon
        (0, _randomViewDefault.default).animateButton(e);
        // 3) Load random Gif
        await _model.loadRandomGif();
        // 4) Render Results
        (0, _randomViewDefault.default).render({
            imageData: _model.state.randomGif,
            networkSpeed: _model.state.networkSpeed
        });
        // 5) Render loading skeleton
        (0, _randomViewDefault.default).renderSkeleton();
        // 6) Remove skeleton on gif load, and begin render of trending gifs
        (0, _randomViewDefault.default).onGifLoad(controlTrendingGifs);
        // 7) LazyLoad images to gifs when in viewport
        (0, _randomViewDefault.default).lazyLoader();
    } catch (error) {
        // console.error(error);
        (0, _randomViewDefault.default).renderError(error.message);
    }
};
const controlSearchGifs = async function() {
    try {
        // 1) Render Loading Spinner
        (0, _resultsViewDefault.default).renderSpinner();
        // 2) Get query
        const query = (0, _searchViewDefault.default).getQuery();
        // 3) Load search results
        await _model.loadSearchResults(query);
        // 4) Render results
        (0, _resultsViewDefault.default).render({
            imageData: _model.state.search.results,
            networkSpeed: _model.state.networkSpeed
        });
        // 5) Render loading skeleton
        (0, _resultsViewDefault.default).renderSkeleton();
        // 6) remove skeleton on gif load
        (0, _resultsViewDefault.default).onGifLoad();
        // 7) Lazy Load images to gifs when in viewport
        (0, _resultsViewDefault.default).lazyLoader();
    } catch (error) {
        // console.error(error);
        (0, _resultsViewDefault.default).renderError(error.message);
    }
};
const controlTrendingGifs = async function() {
    try {
        // 1) Render Loading Spinner
        (0, _trendingViewDefault.default).renderSpinner();
        // 2) Load trending results
        await _model.loadTrendingResults();
        // 3) Render results
        (0, _trendingViewDefault.default).render({
            imageData: _model.state.trending,
            networkSpeed: _model.state.networkSpeed
        });
        // 4) Render loading skeleton
        (0, _trendingViewDefault.default).renderSkeleton();
        // 5) remove skeleton on gif load
        (0, _trendingViewDefault.default).onGifLoad();
        // 6) Lazy Load images to gifs when in viewport
        (0, _trendingViewDefault.default).lazyLoader();
    } catch (error) {
        // console.error(error);
        (0, _trendingViewDefault.default).renderError(error.message);
    }
};
const controlNavigation = function(e) {
    // 1) Remove Classes from Navbar
    (0, _navigationViewDefault.default).clearActiveSection();
    // 2) Add classes to nav bar
    (0, _navigationViewDefault.default).activeNavButton(e);
    // 3) Reveal selected section
    (0, _navigationViewDefault.default).revealSection(e);
};
const init = function() {
    // Set up event handlers and link to relevant controller function
    (0, _randomViewDefault.default).randomHandler(controlRandomGif);
    (0, _searchViewDefault.default).searchHandler(controlSearchGifs);
    (0, _navigationViewDefault.default).navigationHandler(controlNavigation);
};
init();

},{"./model":"4Fv2H","./views/randomView":"fnn6M","./views/searchView":"bYnrN","./views/resultsView":"a2KWy","./views/trendingView":"i1WI3","./views/navigationView":"lwBHd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4Fv2H":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state);
parcelHelpers.export(exports, "loadRandomGif", ()=>loadRandomGif);
parcelHelpers.export(exports, "loadSearchResults", ()=>loadSearchResults);
parcelHelpers.export(exports, "loadTrendingResults", ()=>loadTrendingResults);
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// MODEL
// Functions for the loading of data and saving it to state.
var _config = require("./config");
var _helper = require("./helper");
const state = {
    randomGif: {},
    search: {
        query: "",
        results: []
    },
    trending: [],
    networkSpeed: null
};
const dataIntoObject = function(data) {
    return {
        id: data.id,
        username: data.username,
        title: data.title,
        images: {
            original: {
                webp: data.images.original.webp,
                gif: data.images.original.url,
                width: +data.images.original.width
            },
            medium: {
                webp: data.images.fixed_height.webp,
                gif: data.images.fixed_height.url,
                width: +data.images.fixed_height.width
            },
            small: {
                webp: data.images.fixed_height_small.webp,
                gif: data.images.fixed_height_small.url,
                width: +data.images.fixed_height_small.width
            },
            preview: {
                gif: data.images.preview_gif.url,
                webp: data.images.preview_webp?.url
            },
            width: +data.images.fixed_height.width,
            relativeWidth: undefined,
            stills: {
                normal: data.images.fixed_height_still.url,
                small: data.images.fixed_height_small_still.url
            }
        }
    };
};
const loadRandomGif = async function() {
    try {
        const { data  } = await (0, _helper.getJSON)(`${(0, _config.API_URL)}random?api_key=${(0, _config.API_KEY)}`);
        state.randomGif = dataIntoObject(data);
        state.networkSpeed = (0, _helper.checkNetworkSpeed)();
    } catch (error) {
        throw error;
    }
};
const loadSearchResults = async function(query) {
    try {
        const { data  } = await (0, _helper.getJSON)(`${(0, _config.API_URL)}search?q=${query}&api_key=${(0, _config.API_KEY)}`);
        if (!data.length) throw new Error("No results! Please try another term");
        // clear the state
        state.search = {
            query: "",
            results: []
        };
        data.forEach((gif)=>{
            object = dataIntoObject(gif);
            state.search.results.push(object);
        });
        state.search.query = query;
    } catch (error) {
        throw error;
    }
};
const loadTrendingResults = async function() {
    try {
        const { data  } = await (0, _helper.getJSON)(`${(0, _config.API_URL)}trending?api_key=${(0, _config.API_KEY)}`);
        // clear the state
        state.trending = [];
        // Add to state
        data.forEach((gif)=>{
            object = dataIntoObject(gif);
            state.trending.push(object);
        });
    } catch (error) {
        throw error;
    }
};

},{"./config":"hJBL2","./helper":"g4EWW","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hJBL2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "API_KEY", ()=>API_KEY);
parcelHelpers.export(exports, "API_URL", ()=>API_URL);
parcelHelpers.export(exports, "TIMEOUT_SECONDS", ()=>TIMEOUT_SECONDS);
const API_KEY = "4xzEJ2UukWRNnWVs3Ky4tndoqu8wH4uP";
const API_URL = "https://api.giphy.com/v1/gifs/";
const TIMEOUT_SECONDS = 5;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"g4EWW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getJSON", ()=>getJSON);
parcelHelpers.export(exports, "checkNetworkSpeed", ()=>checkNetworkSpeed);
var _config = require("./config");
const timeout = function(s) {
    return new Promise(function(_, reject) {
        setTimeout(function() {
            reject(new Error(`Request took too long! Timeout after ${s} seconds. Please try again.`));
        }, s * 1000);
    });
};
const getJSON = async function(url) {
    try {
        // 1) AJAX race between giphy.com and timeout
        const res = await Promise.race([
            fetch(url),
            timeout((0, _config.TIMEOUT_SECONDS))
        ]);
        if (!res.ok) throw new Error(`(${res.status}) Failed to connect to host. Please try again later!`);
        // 2) Return JSON data
        const data = await res.json();
        return data;
    } catch (error) {
        throw error;
    }
};
const checkNetworkSpeed = function() {
    // 1) Check if browser supports navigator.connection
    if (!navigator.connection) return "4g";
    // 2) Return effective type: (4g, 3g or 2g)
    return navigator.connection.effectiveType;
};

},{"./config":"hJBL2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fnn6M":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// RANDOM VIEW
// class for the generate random gif
var _imageView = require("./imageView");
var _imageViewDefault = parcelHelpers.interopDefault(_imageView);
class RandomView extends (0, _imageViewDefault.default) {
    _parentElement = document.querySelector(".img-container__random");
    #btn = document.querySelector(".btn__random");
    _className = "random";
    randomHandler(handler) {
        // Call random controller on page load and button click
        window.addEventListener("load", handler);
        this.#btn.addEventListener("click", handler);
    }
    animateButton(e) {
        // 1) Check if event the page load or a click of the button
        if (e.target === document) return;
        // 2) add spinning class to svg
        this.#btn.querySelector(".svg__repeat").classList.add("svg--spinning");
        // 3) Remove class at end of animation
        const removeClass = function() {
            const icon = this.#btn.querySelector(".svg__repeat");
            if (!icon.classList.contains("svg--spinning")) return;
            icon.classList.remove("svg--spinning");
        };
        setTimeout(removeClass.bind(this), 2000);
    }
    _generateMarkup() {
        return this._generateImageMarkup(this._data.imageData);
    }
}
exports.default = new RandomView();

},{"./imageView":"k3epj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k3epj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// IMAGE VIEW
// Base class for images
var _iconsSvg = require("../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class ImageView {
    _data;
    render(data) {
        if (!data) return;
        // 1) Save data to the class
        this._data = data;
        // 2) Generate html
        const html = this._generateMarkup();
        // 3) Clear html that is already there
        this.#clear();
        // 4) Insert new html
        this._parentElement.insertAdjacentHTML("afterbegin", html);
    }
     #clear() {
        this._parentElement.innerHTML = "";
    }
    renderError(message) {
        const markup = `
    <div class="error-message">
      <svg class="svg svg__error">
          <use href="${(0, _iconsSvgDefault.default)}#icon-alert-circle"></use>
        </svg>
      <p >Whoops! ${message}</p>
    </div>`;
        this.#clear();
        this._parentElement.insertAdjacentHTML("afterbegin", markup);
    }
    renderSpinner() {
        const markup = `
    <div class="spinner">
      <svg class="svg__spinner">
        <use href="${(0, _iconsSvgDefault.default)}#icon-spinner"></use>
      </svg>
      <p>Giffy's will be here in a jiffy</p>
    </div>`;
        this.#clear();
        this._parentElement.insertAdjacentHTML("afterbegin", markup);
    }
    renderSkeleton() {
        const markup = `    
    <div class="loading loading__${this._className}">
      <svg class="svg__loading svg__loading--first">
        <use href="${(0, _iconsSvgDefault.default)}#icon-circle"></use>
      </svg>
      <svg class="svg__loading svg__loading--second">
        <use href="${(0, _iconsSvgDefault.default)}#icon-circle"></use>
      </svg>
      <svg class="svg__loading svg__loading--third">
        <use href="${(0, _iconsSvgDefault.default)}#icon-circle"></use>
      </svg>
    </div>`;
        const gifs = this._parentElement.querySelectorAll(".gif");
        gifs.forEach((image)=>{
            image.parentElement.parentElement.insertAdjacentHTML("beforebegin", markup);
        });
    }
    removeSkeleton(additionalCallback) {
        if (additionalCallback) additionalCallback();
        // Find the loading skeleton in the DOM and remove it.
        this.parentElement.parentElement.previousSibling?.remove();
    }
    async onGifLoad(additionalCallback) {
        //  Call removeSkeleton on load of each gif, and additional callback if there
        this._parentElement.querySelectorAll(".gif").forEach((gif)=>{
            gif.addEventListener("load", this.removeSkeleton.bind(gif, additionalCallback));
        });
    }
    _generateImageMarkup(imageData) {
        // 1) Get network speed
        const networkSpeed = this._data.networkSpeed;
        // 2) Variables for pixel density and still image sources
        let oneXImage;
        let twoXImage;
        let stillImage;
        // 3) If big image and good internet speed save HD sources.
        if (this._className === "random" && networkSpeed === "4g") {
            oneXImage = imageData.images.medium;
            twoXImage = imageData.images.original;
            stillImage = imageData.images.stills.normal;
        // 4) For tiled images or when network speed is 3g use smaller sources
        } else {
            oneXImage = imageData.images.small;
            twoXImage = imageData.images.medium;
            stillImage = imageData.images.stills.small;
        }
        // 5) If network speed is very slow - use both gif sources as the shorter preview gif
        if (networkSpeed === "2g") twoXImage = oneXImage = imageData.images.preview;
        // 6) return html for individual image
        return `
    <figure class="gif__figure-container">
      <picture>
        <img src="${stillImage}"  
          data-src-gif=" ${oneXImage.gif} 1x, ${twoXImage.gif} 2x" 
          data-src-webp=" ${oneXImage.webp} 1x, ${twoXImage.webp} 2x" 
          
          alt="${imageData.title}" 
          class="gif gif__${this._className}
        "/>
      </picture>
      
    </figure>`;
    }
     #swapStillWithGif(entries, _observer) {
        entries.forEach((entry)=>{
            // 1) Check if item is in view port
            if (!entry.isIntersecting) return;
            // 2) Create new source elements
            const newSourceWebp = document.createElement("source");
            const newSourceGif = document.createElement("source");
            // 3) Add srcset from the data-set on the img html
            newSourceGif.srcset = entry.target.dataset.srcGif;
            newSourceWebp.srcset = entry.target.dataset.srcWebp;
            newSourceWebp.type = "image/webp";
            // 4) Add source before the img element
            entry.target.insertAdjacentElement("beforebegin", newSourceWebp);
            entry.target.insertAdjacentElement("beforebegin", newSourceGif);
        });
    }
    lazyLoader() {
        // 1) get all images
        const images = this._parentElement.querySelectorAll(".gif");
        // 2) Call swapStillWithGif when image enters the viewport
        const imgObserver = new IntersectionObserver(this.#swapStillWithGif, {
            root: null,
            threshold: 0
        });
        images.forEach((img)=>imgObserver.observe(img));
    }
}
exports.default = ImageView;

},{"../../img/icons.svg":"3LuCS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3LuCS":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("fXVDJ") + "icons.21bad73c.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"bYnrN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// SEARCH VIEW
// class for the getting the search query and submitting the search form
class SearchView {
    #parentElement = document.querySelector(".search");
    getQuery() {
        // 1) Get search query
        const searchField = this.#parentElement.querySelector(".search__field");
        const value = searchField.value;
        // 2) Reset search field
        searchField.value = "";
        // 3) return query
        return value;
    }
    searchHandler(handler) {
        // Fire the search controller on a submit of the search form
        this.#parentElement.addEventListener("submit", function(e) {
            e.preventDefault();
            handler();
        });
    }
}
exports.default = new SearchView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a2KWy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// SEARCH VIEW
// class for the generate search results gifs views
var _tiledImageView = require("./tiledImageView");
var _tiledImageViewDefault = parcelHelpers.interopDefault(_tiledImageView);
class ResultsView extends (0, _tiledImageViewDefault.default) {
    _parentElement = document.querySelector(".grid__search-results");
    _className = "search";
}
exports.default = new ResultsView();

},{"./tiledImageView":"bqcBP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bqcBP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// TILED IMAGE VIEW
// class that contains functions for tiled images that appear in search results and trending
var _imageView = require("./imageView");
var _imageViewDefault = parcelHelpers.interopDefault(_imageView);
class TiledImageView extends (0, _imageViewDefault.default) {
    _generateMarkup() {
        // 1) Add relativeWidths
        this._calculateRelativeWidth();
        // 2) Loop through images and generate inside a grid wrapper
        return this._data.imageData.map((result)=>this._generateImageMarkupWithGridWrapper(result)).join("");
    }
    _generateImageMarkupWithGridWrapper(image) {
        // 1) get relative width
        const width = image.images.relativeWidth;
        // 2) return markup inside a grid item wrapper with the correct width class
        return `
      <div class="grid__item grid__item--${width}">
        ${this._generateImageMarkup(image)}
      </div>`;
    }
    _calculateRelativeWidth() {
        const data = this._data.imageData;
        // 1) Loop through data in pairs
        for(let i = 0; i < data.length; i += 2){
            const width1 = data[i].images.width;
            const width2 = data[i + 1].images.width;
            // 2) Compare widths and add to relative widths for each item
            data[i].images.relativeWidth = (width1 / (width1 + width2) * 10).toFixed();
            data[i + 1].images.relativeWidth = (width2 / (width1 + width2) * 10).toFixed();
        }
    }
}
exports.default = TiledImageView;

},{"./imageView":"k3epj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i1WI3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// TRENDING VIEW
// class for the generate TRENDING gifS
var _tiledImageView = require("./tiledImageView");
var _tiledImageViewDefault = parcelHelpers.interopDefault(_tiledImageView);
class TrendingView extends (0, _tiledImageViewDefault.default) {
    _parentElement = document.querySelector(".grid__trending");
    _className = "trending";
}
exports.default = new TrendingView();

},{"./tiledImageView":"bqcBP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lwBHd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// NAVIGATION VIEW
// class for controlling the user navigation accross the different pages
class NavigationView {
    #sections = document.querySelectorAll(".section");
    #buttons = document.querySelectorAll(".btn__navigation");
    #navItems = document.querySelectorAll(".navigation__item");
    navigationHandler(handler) {
        this.#navItems.forEach((btn)=>btn.addEventListener("click", handler));
    }
    clearActiveSection() {
        // Remove "active" class from all buttons and nav items
        this.#buttons.forEach((btn)=>btn.classList.remove("btn__navigation--active"));
        this.#navItems.forEach((item)=>item.classList.remove("navigation__item--active"));
    }
    activeNavButton(e) {
        // Add active class to clicked button and nav item
        const activeBtn = e.target.closest(".btn");
        const activeItem = e.target.closest(".navigation__item");
        activeItem.classList.add("navigation__item--active");
        activeBtn.classList.add("btn__navigation--active");
    }
    revealSection(e) {
        // 1) Find clicked section from dataset of nav item
        const activeSection = e.target.closest(".navigation__item").dataset.section;
        // 2) remove "hidden-small-screen" from sections from other sections and add to clicked one
        this.#sections.forEach((section)=>{
            if (section.classList.contains(`section__${activeSection}`)) section.classList.remove("hidden-small-screen");
            else section.classList.add("hidden-small-screen");
        });
    }
}
exports.default = new NavigationView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["i0koh","MC2Vq"], "MC2Vq", "parcelRequireb7cd")

//# sourceMappingURL=index.3e7ad75e.js.map
