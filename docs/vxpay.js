(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("VX", [], factory);
	else if(typeof exports === 'object')
		exports["VX"] = factory();
	else
		root["VX"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	function hotDisposeChunk(chunkId) {
/******/ 		delete installedChunks[chunkId];
/******/ 	}
/******/ 	var parentHotUpdateCallback = window["webpackHotUpdateVX"];
/******/ 	window["webpackHotUpdateVX"] = // eslint-disable-next-line no-unused-vars
/******/ 	function webpackHotUpdateCallback(chunkId, moreModules) {
/******/ 		hotAddUpdateChunk(chunkId, moreModules);
/******/ 		if (parentHotUpdateCallback) parentHotUpdateCallback(chunkId, moreModules);
/******/ 	} ;
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadUpdateChunk(chunkId) {
/******/ 		var head = document.getElementsByTagName("head")[0];
/******/ 		var script = document.createElement("script");
/******/ 		script.charset = "utf-8";
/******/ 		script.src = __webpack_require__.p + "" + chunkId + "." + hotCurrentHash + ".hot-update.js";
/******/ 		;
/******/ 		head.appendChild(script);
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadManifest(requestTimeout) {
/******/ 		requestTimeout = requestTimeout || 10000;
/******/ 		return new Promise(function(resolve, reject) {
/******/ 			if (typeof XMLHttpRequest === "undefined") {
/******/ 				return reject(new Error("No browser support"));
/******/ 			}
/******/ 			try {
/******/ 				var request = new XMLHttpRequest();
/******/ 				var requestPath = __webpack_require__.p + "" + hotCurrentHash + ".hot-update.json";
/******/ 				request.open("GET", requestPath, true);
/******/ 				request.timeout = requestTimeout;
/******/ 				request.send(null);
/******/ 			} catch (err) {
/******/ 				return reject(err);
/******/ 			}
/******/ 			request.onreadystatechange = function() {
/******/ 				if (request.readyState !== 4) return;
/******/ 				if (request.status === 0) {
/******/ 					// timeout
/******/ 					reject(
/******/ 						new Error("Manifest request to " + requestPath + " timed out.")
/******/ 					);
/******/ 				} else if (request.status === 404) {
/******/ 					// no update available
/******/ 					resolve();
/******/ 				} else if (request.status !== 200 && request.status !== 304) {
/******/ 					// other failure
/******/ 					reject(new Error("Manifest request to " + requestPath + " failed."));
/******/ 				} else {
/******/ 					// success
/******/ 					try {
/******/ 						var update = JSON.parse(request.responseText);
/******/ 					} catch (e) {
/******/ 						reject(e);
/******/ 						return;
/******/ 					}
/******/ 					resolve(update);
/******/ 				}
/******/ 			};
/******/ 		});
/******/ 	}
/******/
/******/ 	var hotApplyOnUpdate = true;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentHash = "3503bf54f143fbadfee6";
/******/ 	var hotRequestTimeout = 10000;
/******/ 	var hotCurrentModuleData = {};
/******/ 	var hotCurrentChildModule;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParents = [];
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParentsTemp = [];
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateRequire(moduleId) {
/******/ 		var me = installedModules[moduleId];
/******/ 		if (!me) return __webpack_require__;
/******/ 		var fn = function(request) {
/******/ 			if (me.hot.active) {
/******/ 				if (installedModules[request]) {
/******/ 					if (installedModules[request].parents.indexOf(moduleId) === -1) {
/******/ 						installedModules[request].parents.push(moduleId);
/******/ 					}
/******/ 				} else {
/******/ 					hotCurrentParents = [moduleId];
/******/ 					hotCurrentChildModule = request;
/******/ 				}
/******/ 				if (me.children.indexOf(request) === -1) {
/******/ 					me.children.push(request);
/******/ 				}
/******/ 			} else {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" +
/******/ 						request +
/******/ 						") from disposed module " +
/******/ 						moduleId
/******/ 				);
/******/ 				hotCurrentParents = [];
/******/ 			}
/******/ 			return __webpack_require__(request);
/******/ 		};
/******/ 		var ObjectFactory = function ObjectFactory(name) {
/******/ 			return {
/******/ 				configurable: true,
/******/ 				enumerable: true,
/******/ 				get: function() {
/******/ 					return __webpack_require__[name];
/******/ 				},
/******/ 				set: function(value) {
/******/ 					__webpack_require__[name] = value;
/******/ 				}
/******/ 			};
/******/ 		};
/******/ 		for (var name in __webpack_require__) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(__webpack_require__, name) &&
/******/ 				name !== "e" &&
/******/ 				name !== "t"
/******/ 			) {
/******/ 				Object.defineProperty(fn, name, ObjectFactory(name));
/******/ 			}
/******/ 		}
/******/ 		fn.e = function(chunkId) {
/******/ 			if (hotStatus === "ready") hotSetStatus("prepare");
/******/ 			hotChunksLoading++;
/******/ 			return __webpack_require__.e(chunkId).then(finishChunkLoading, function(err) {
/******/ 				finishChunkLoading();
/******/ 				throw err;
/******/ 			});
/******/
/******/ 			function finishChunkLoading() {
/******/ 				hotChunksLoading--;
/******/ 				if (hotStatus === "prepare") {
/******/ 					if (!hotWaitingFilesMap[chunkId]) {
/******/ 						hotEnsureUpdateChunk(chunkId);
/******/ 					}
/******/ 					if (hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 						hotUpdateDownloaded();
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		fn.t = function(value, mode) {
/******/ 			if (mode & 1) value = fn(value);
/******/ 			return __webpack_require__.t(value, mode & ~1);
/******/ 		};
/******/ 		return fn;
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateModule(moduleId) {
/******/ 		var hot = {
/******/ 			// private stuff
/******/ 			_acceptedDependencies: {},
/******/ 			_declinedDependencies: {},
/******/ 			_selfAccepted: false,
/******/ 			_selfDeclined: false,
/******/ 			_disposeHandlers: [],
/******/ 			_main: hotCurrentChildModule !== moduleId,
/******/
/******/ 			// Module API
/******/ 			active: true,
/******/ 			accept: function(dep, callback) {
/******/ 				if (dep === undefined) hot._selfAccepted = true;
/******/ 				else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._acceptedDependencies[dep[i]] = callback || function() {};
/******/ 				else hot._acceptedDependencies[dep] = callback || function() {};
/******/ 			},
/******/ 			decline: function(dep) {
/******/ 				if (dep === undefined) hot._selfDeclined = true;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._declinedDependencies[dep[i]] = true;
/******/ 				else hot._declinedDependencies[dep] = true;
/******/ 			},
/******/ 			dispose: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			addDisposeHandler: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			removeDisposeHandler: function(callback) {
/******/ 				var idx = hot._disposeHandlers.indexOf(callback);
/******/ 				if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			// Management API
/******/ 			check: hotCheck,
/******/ 			apply: hotApply,
/******/ 			status: function(l) {
/******/ 				if (!l) return hotStatus;
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			addStatusHandler: function(l) {
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			removeStatusHandler: function(l) {
/******/ 				var idx = hotStatusHandlers.indexOf(l);
/******/ 				if (idx >= 0) hotStatusHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			//inherit from previous dispose call
/******/ 			data: hotCurrentModuleData[moduleId]
/******/ 		};
/******/ 		hotCurrentChildModule = undefined;
/******/ 		return hot;
/******/ 	}
/******/
/******/ 	var hotStatusHandlers = [];
/******/ 	var hotStatus = "idle";
/******/
/******/ 	function hotSetStatus(newStatus) {
/******/ 		hotStatus = newStatus;
/******/ 		for (var i = 0; i < hotStatusHandlers.length; i++)
/******/ 			hotStatusHandlers[i].call(null, newStatus);
/******/ 	}
/******/
/******/ 	// while downloading
/******/ 	var hotWaitingFiles = 0;
/******/ 	var hotChunksLoading = 0;
/******/ 	var hotWaitingFilesMap = {};
/******/ 	var hotRequestedFilesMap = {};
/******/ 	var hotAvailableFilesMap = {};
/******/ 	var hotDeferred;
/******/
/******/ 	// The update info
/******/ 	var hotUpdate, hotUpdateNewHash;
/******/
/******/ 	function toModuleId(id) {
/******/ 		var isNumber = +id + "" === id;
/******/ 		return isNumber ? +id : id;
/******/ 	}
/******/
/******/ 	function hotCheck(apply) {
/******/ 		if (hotStatus !== "idle") {
/******/ 			throw new Error("check() is only allowed in idle status");
/******/ 		}
/******/ 		hotApplyOnUpdate = apply;
/******/ 		hotSetStatus("check");
/******/ 		return hotDownloadManifest(hotRequestTimeout).then(function(update) {
/******/ 			if (!update) {
/******/ 				hotSetStatus("idle");
/******/ 				return null;
/******/ 			}
/******/ 			hotRequestedFilesMap = {};
/******/ 			hotWaitingFilesMap = {};
/******/ 			hotAvailableFilesMap = update.c;
/******/ 			hotUpdateNewHash = update.h;
/******/
/******/ 			hotSetStatus("prepare");
/******/ 			var promise = new Promise(function(resolve, reject) {
/******/ 				hotDeferred = {
/******/ 					resolve: resolve,
/******/ 					reject: reject
/******/ 				};
/******/ 			});
/******/ 			hotUpdate = {};
/******/ 			var chunkId = 0;
/******/ 			// eslint-disable-next-line no-lone-blocks
/******/ 			{
/******/ 				/*globals chunkId */
/******/ 				hotEnsureUpdateChunk(chunkId);
/******/ 			}
/******/ 			if (
/******/ 				hotStatus === "prepare" &&
/******/ 				hotChunksLoading === 0 &&
/******/ 				hotWaitingFiles === 0
/******/ 			) {
/******/ 				hotUpdateDownloaded();
/******/ 			}
/******/ 			return promise;
/******/ 		});
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotAddUpdateChunk(chunkId, moreModules) {
/******/ 		if (!hotAvailableFilesMap[chunkId] || !hotRequestedFilesMap[chunkId])
/******/ 			return;
/******/ 		hotRequestedFilesMap[chunkId] = false;
/******/ 		for (var moduleId in moreModules) {
/******/ 			if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				hotUpdate[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if (--hotWaitingFiles === 0 && hotChunksLoading === 0) {
/******/ 			hotUpdateDownloaded();
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotEnsureUpdateChunk(chunkId) {
/******/ 		if (!hotAvailableFilesMap[chunkId]) {
/******/ 			hotWaitingFilesMap[chunkId] = true;
/******/ 		} else {
/******/ 			hotRequestedFilesMap[chunkId] = true;
/******/ 			hotWaitingFiles++;
/******/ 			hotDownloadUpdateChunk(chunkId);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotUpdateDownloaded() {
/******/ 		hotSetStatus("ready");
/******/ 		var deferred = hotDeferred;
/******/ 		hotDeferred = null;
/******/ 		if (!deferred) return;
/******/ 		if (hotApplyOnUpdate) {
/******/ 			// Wrap deferred object in Promise to mark it as a well-handled Promise to
/******/ 			// avoid triggering uncaught exception warning in Chrome.
/******/ 			// See https://bugs.chromium.org/p/chromium/issues/detail?id=465666
/******/ 			Promise.resolve()
/******/ 				.then(function() {
/******/ 					return hotApply(hotApplyOnUpdate);
/******/ 				})
/******/ 				.then(
/******/ 					function(result) {
/******/ 						deferred.resolve(result);
/******/ 					},
/******/ 					function(err) {
/******/ 						deferred.reject(err);
/******/ 					}
/******/ 				);
/******/ 		} else {
/******/ 			var outdatedModules = [];
/******/ 			for (var id in hotUpdate) {
/******/ 				if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 					outdatedModules.push(toModuleId(id));
/******/ 				}
/******/ 			}
/******/ 			deferred.resolve(outdatedModules);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotApply(options) {
/******/ 		if (hotStatus !== "ready")
/******/ 			throw new Error("apply() is only allowed in ready status");
/******/ 		options = options || {};
/******/
/******/ 		var cb;
/******/ 		var i;
/******/ 		var j;
/******/ 		var module;
/******/ 		var moduleId;
/******/
/******/ 		function getAffectedStuff(updateModuleId) {
/******/ 			var outdatedModules = [updateModuleId];
/******/ 			var outdatedDependencies = {};
/******/
/******/ 			var queue = outdatedModules.slice().map(function(id) {
/******/ 				return {
/******/ 					chain: [id],
/******/ 					id: id
/******/ 				};
/******/ 			});
/******/ 			while (queue.length > 0) {
/******/ 				var queueItem = queue.pop();
/******/ 				var moduleId = queueItem.id;
/******/ 				var chain = queueItem.chain;
/******/ 				module = installedModules[moduleId];
/******/ 				if (!module || module.hot._selfAccepted) continue;
/******/ 				if (module.hot._selfDeclined) {
/******/ 					return {
/******/ 						type: "self-declined",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				if (module.hot._main) {
/******/ 					return {
/******/ 						type: "unaccepted",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				for (var i = 0; i < module.parents.length; i++) {
/******/ 					var parentId = module.parents[i];
/******/ 					var parent = installedModules[parentId];
/******/ 					if (!parent) continue;
/******/ 					if (parent.hot._declinedDependencies[moduleId]) {
/******/ 						return {
/******/ 							type: "declined",
/******/ 							chain: chain.concat([parentId]),
/******/ 							moduleId: moduleId,
/******/ 							parentId: parentId
/******/ 						};
/******/ 					}
/******/ 					if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 					if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 						if (!outdatedDependencies[parentId])
/******/ 							outdatedDependencies[parentId] = [];
/******/ 						addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 						continue;
/******/ 					}
/******/ 					delete outdatedDependencies[parentId];
/******/ 					outdatedModules.push(parentId);
/******/ 					queue.push({
/******/ 						chain: chain.concat([parentId]),
/******/ 						id: parentId
/******/ 					});
/******/ 				}
/******/ 			}
/******/
/******/ 			return {
/******/ 				type: "accepted",
/******/ 				moduleId: updateModuleId,
/******/ 				outdatedModules: outdatedModules,
/******/ 				outdatedDependencies: outdatedDependencies
/******/ 			};
/******/ 		}
/******/
/******/ 		function addAllToSet(a, b) {
/******/ 			for (var i = 0; i < b.length; i++) {
/******/ 				var item = b[i];
/******/ 				if (a.indexOf(item) === -1) a.push(item);
/******/ 			}
/******/ 		}
/******/
/******/ 		// at begin all updates modules are outdated
/******/ 		// the "outdated" status can propagate to parents if they don't accept the children
/******/ 		var outdatedDependencies = {};
/******/ 		var outdatedModules = [];
/******/ 		var appliedUpdate = {};
/******/
/******/ 		var warnUnexpectedRequire = function warnUnexpectedRequire() {
/******/ 			console.warn(
/******/ 				"[HMR] unexpected require(" + result.moduleId + ") to disposed module"
/******/ 			);
/******/ 		};
/******/
/******/ 		for (var id in hotUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 				moduleId = toModuleId(id);
/******/ 				/** @type {TODO} */
/******/ 				var result;
/******/ 				if (hotUpdate[id]) {
/******/ 					result = getAffectedStuff(moduleId);
/******/ 				} else {
/******/ 					result = {
/******/ 						type: "disposed",
/******/ 						moduleId: id
/******/ 					};
/******/ 				}
/******/ 				/** @type {Error|false} */
/******/ 				var abortError = false;
/******/ 				var doApply = false;
/******/ 				var doDispose = false;
/******/ 				var chainInfo = "";
/******/ 				if (result.chain) {
/******/ 					chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 				}
/******/ 				switch (result.type) {
/******/ 					case "self-declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of self decline: " +
/******/ 									result.moduleId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of declined dependency: " +
/******/ 									result.moduleId +
/******/ 									" in " +
/******/ 									result.parentId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "unaccepted":
/******/ 						if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 						if (!options.ignoreUnaccepted)
/******/ 							abortError = new Error(
/******/ 								"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "accepted":
/******/ 						if (options.onAccepted) options.onAccepted(result);
/******/ 						doApply = true;
/******/ 						break;
/******/ 					case "disposed":
/******/ 						if (options.onDisposed) options.onDisposed(result);
/******/ 						doDispose = true;
/******/ 						break;
/******/ 					default:
/******/ 						throw new Error("Unexception type " + result.type);
/******/ 				}
/******/ 				if (abortError) {
/******/ 					hotSetStatus("abort");
/******/ 					return Promise.reject(abortError);
/******/ 				}
/******/ 				if (doApply) {
/******/ 					appliedUpdate[moduleId] = hotUpdate[moduleId];
/******/ 					addAllToSet(outdatedModules, result.outdatedModules);
/******/ 					for (moduleId in result.outdatedDependencies) {
/******/ 						if (
/******/ 							Object.prototype.hasOwnProperty.call(
/******/ 								result.outdatedDependencies,
/******/ 								moduleId
/******/ 							)
/******/ 						) {
/******/ 							if (!outdatedDependencies[moduleId])
/******/ 								outdatedDependencies[moduleId] = [];
/******/ 							addAllToSet(
/******/ 								outdatedDependencies[moduleId],
/******/ 								result.outdatedDependencies[moduleId]
/******/ 							);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 				if (doDispose) {
/******/ 					addAllToSet(outdatedModules, [result.moduleId]);
/******/ 					appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Store self accepted outdated modules to require them later by the module system
/******/ 		var outdatedSelfAcceptedModules = [];
/******/ 		for (i = 0; i < outdatedModules.length; i++) {
/******/ 			moduleId = outdatedModules[i];
/******/ 			if (
/******/ 				installedModules[moduleId] &&
/******/ 				installedModules[moduleId].hot._selfAccepted
/******/ 			)
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: moduleId,
/******/ 					errorHandler: installedModules[moduleId].hot._selfAccepted
/******/ 				});
/******/ 		}
/******/
/******/ 		// Now in "dispose" phase
/******/ 		hotSetStatus("dispose");
/******/ 		Object.keys(hotAvailableFilesMap).forEach(function(chunkId) {
/******/ 			if (hotAvailableFilesMap[chunkId] === false) {
/******/ 				hotDisposeChunk(chunkId);
/******/ 			}
/******/ 		});
/******/
/******/ 		var idx;
/******/ 		var queue = outdatedModules.slice();
/******/ 		while (queue.length > 0) {
/******/ 			moduleId = queue.pop();
/******/ 			module = installedModules[moduleId];
/******/ 			if (!module) continue;
/******/
/******/ 			var data = {};
/******/
/******/ 			// Call dispose handlers
/******/ 			var disposeHandlers = module.hot._disposeHandlers;
/******/ 			for (j = 0; j < disposeHandlers.length; j++) {
/******/ 				cb = disposeHandlers[j];
/******/ 				cb(data);
/******/ 			}
/******/ 			hotCurrentModuleData[moduleId] = data;
/******/
/******/ 			// disable module (this disables requires from this module)
/******/ 			module.hot.active = false;
/******/
/******/ 			// remove module from cache
/******/ 			delete installedModules[moduleId];
/******/
/******/ 			// when disposing there is no need to call dispose handler
/******/ 			delete outdatedDependencies[moduleId];
/******/
/******/ 			// remove "parents" references from all children
/******/ 			for (j = 0; j < module.children.length; j++) {
/******/ 				var child = installedModules[module.children[j]];
/******/ 				if (!child) continue;
/******/ 				idx = child.parents.indexOf(moduleId);
/******/ 				if (idx >= 0) {
/******/ 					child.parents.splice(idx, 1);
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// remove outdated dependency from module children
/******/ 		var dependency;
/******/ 		var moduleOutdatedDependencies;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 						dependency = moduleOutdatedDependencies[j];
/******/ 						idx = module.children.indexOf(dependency);
/******/ 						if (idx >= 0) module.children.splice(idx, 1);
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Not in "apply" phase
/******/ 		hotSetStatus("apply");
/******/
/******/ 		hotCurrentHash = hotUpdateNewHash;
/******/
/******/ 		// insert new code
/******/ 		for (moduleId in appliedUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(appliedUpdate, moduleId)) {
/******/ 				modules[moduleId] = appliedUpdate[moduleId];
/******/ 			}
/******/ 		}
/******/
/******/ 		// call accept handlers
/******/ 		var error = null;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					var callbacks = [];
/******/ 					for (i = 0; i < moduleOutdatedDependencies.length; i++) {
/******/ 						dependency = moduleOutdatedDependencies[i];
/******/ 						cb = module.hot._acceptedDependencies[dependency];
/******/ 						if (cb) {
/******/ 							if (callbacks.indexOf(cb) !== -1) continue;
/******/ 							callbacks.push(cb);
/******/ 						}
/******/ 					}
/******/ 					for (i = 0; i < callbacks.length; i++) {
/******/ 						cb = callbacks[i];
/******/ 						try {
/******/ 							cb(moduleOutdatedDependencies);
/******/ 						} catch (err) {
/******/ 							if (options.onErrored) {
/******/ 								options.onErrored({
/******/ 									type: "accept-errored",
/******/ 									moduleId: moduleId,
/******/ 									dependencyId: moduleOutdatedDependencies[i],
/******/ 									error: err
/******/ 								});
/******/ 							}
/******/ 							if (!options.ignoreErrored) {
/******/ 								if (!error) error = err;
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Load self accepted modules
/******/ 		for (i = 0; i < outdatedSelfAcceptedModules.length; i++) {
/******/ 			var item = outdatedSelfAcceptedModules[i];
/******/ 			moduleId = item.module;
/******/ 			hotCurrentParents = [moduleId];
/******/ 			try {
/******/ 				__webpack_require__(moduleId);
/******/ 			} catch (err) {
/******/ 				if (typeof item.errorHandler === "function") {
/******/ 					try {
/******/ 						item.errorHandler(err);
/******/ 					} catch (err2) {
/******/ 						if (options.onErrored) {
/******/ 							options.onErrored({
/******/ 								type: "self-accept-error-handler-errored",
/******/ 								moduleId: moduleId,
/******/ 								error: err2,
/******/ 								originalError: err
/******/ 							});
/******/ 						}
/******/ 						if (!options.ignoreErrored) {
/******/ 							if (!error) error = err2;
/******/ 						}
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				} else {
/******/ 					if (options.onErrored) {
/******/ 						options.onErrored({
/******/ 							type: "self-accept-errored",
/******/ 							moduleId: moduleId,
/******/ 							error: err
/******/ 						});
/******/ 					}
/******/ 					if (!options.ignoreErrored) {
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// handle errors in accept handlers and self accepted module load
/******/ 		if (error) {
/******/ 			hotSetStatus("fail");
/******/ 			return Promise.reject(error);
/******/ 		}
/******/
/******/ 		hotSetStatus("idle");
/******/ 		return new Promise(function(resolve) {
/******/ 			resolve(outdatedModules);
/******/ 		});
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {},
/******/ 			hot: hotCreateModule(moduleId),
/******/ 			parents: (hotCurrentParentsTemp = hotCurrentParents, hotCurrentParents = [], hotCurrentParentsTemp),
/******/ 			children: []
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, hotCreateRequire(moduleId));
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// __webpack_hash__
/******/ 	__webpack_require__.h = function() { return hotCurrentHash; };
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return hotCreateRequire(0)(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/is-mobile/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = isMobile;
module.exports.isMobile = isMobile;

var mobileRE = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i;

var tabletRE = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino|android|ipad|playbook|silk/i;

function isMobile (ua, opts) {
  if (!opts && ua !== null && typeof ua === 'object') opts = ua;
  if (!ua && typeof navigator !== 'undefined') ua = navigator.userAgent;
  if (ua && ua.headers && typeof ua.headers['user-agent'] === 'string') {
    ua = ua.headers['user-agent'];
  }
  if (typeof ua !== 'string') return false;
  if (!opts) opts = {};

  return opts.tablet
    ? tabletRE.test(ua)
    : mobileRE.test(ua);
}


/***/ }),

/***/ "./src/main.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/VXPay/VXPayEnvironment.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var VXPayEnvironment =
/*#__PURE__*/
function () {
  function VXPayEnvironment() {
    _classCallCheck(this, VXPayEnvironment);
  }

  _createClass(VXPayEnvironment, null, [{
    key: "getAvailable",

    /**
     * @return {String[]}
     */
    value: function getAvailable() {
      return [VXPayEnvironment.LANDING_PAGE, VXPayEnvironment.CULT_BABES, VXPayEnvironment.TV_CHAT, VXPayEnvironment.SLP, VXPayEnvironment.VXONE_LP, VXPayEnvironment.VXONE];
    }
    /**
     * @return {string}
     */

  }, {
    key: "getDefault",
    value: function getDefault() {
      return VXPayEnvironment.VXONE;
    }
  }]);

  return VXPayEnvironment;
}();

VXPayEnvironment.LANDING_PAGE = 'lp';
VXPayEnvironment.CULT_BABES = 'cultbabes';
VXPayEnvironment.TV_CHAT = 'tvchat';
VXPayEnvironment.SLP = 'slp';
VXPayEnvironment.VXONE_LP = 'vxonelp';
VXPayEnvironment.VXONE = 'vxone';
/* harmony default export */ var VXPay_VXPayEnvironment = (VXPayEnvironment);
// CONCATENATED MODULE: ./src/VXPay/VXPayLanguage.js
function VXPayLanguage_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function VXPayLanguage_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function VXPayLanguage_createClass(Constructor, protoProps, staticProps) { if (protoProps) VXPayLanguage_defineProperties(Constructor.prototype, protoProps); if (staticProps) VXPayLanguage_defineProperties(Constructor, staticProps); return Constructor; }

var VXPayLanguage =
/*#__PURE__*/
function () {
  function VXPayLanguage() {
    VXPayLanguage_classCallCheck(this, VXPayLanguage);
  }

  VXPayLanguage_createClass(VXPayLanguage, null, [{
    key: "getDefault",

    /**
     * @return {string}
     */
    value: function getDefault() {
      return VXPayLanguage.DE;
    }
    /**
     * @return {String[]}
     */

  }, {
    key: "getAvailable",
    value: function getAvailable() {
      return [VXPayLanguage.DE, VXPayLanguage.EN, VXPayLanguage.NL];
    }
  }]);

  return VXPayLanguage;
}();

VXPayLanguage.DE = 'DE';
VXPayLanguage.EN = 'EN';
VXPayLanguage.NL = 'NL';
/* harmony default export */ var VXPay_VXPayLanguage = (VXPayLanguage);
// CONCATENATED MODULE: ./src/VXPay/Config/VXPayFlow.js
function VXPayFlow_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function VXPayFlow_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function VXPayFlow_createClass(Constructor, protoProps, staticProps) { if (protoProps) VXPayFlow_defineProperties(Constructor.prototype, protoProps); if (staticProps) VXPayFlow_defineProperties(Constructor, staticProps); return Constructor; }

var VXPayFlow =
/*#__PURE__*/
function () {
  function VXPayFlow() {
    VXPayFlow_classCallCheck(this, VXPayFlow);
  }

  VXPayFlow_createClass(VXPayFlow, null, [{
    key: "getAllowed",

    /**
     * @return {String[]}
     */
    value: function getAllowed() {
      return [VXPayFlow.AVS, VXPayFlow.LIMIT, VXPayFlow.LOGIN, VXPayFlow.MONEY_CHARGE, VXPayFlow.OP_COMPENSATION, VXPayFlow.PASSWORD_RESET, VXPayFlow.PASSWORD_LOST, VXPayFlow.PROMOCODE, VXPayFlow.SCRATCH_CARD, VXPayFlow.TRIAL_VIP_ABO, VXPayFlow.VIP_ABO, VXPayFlow.VXTV_ABO, VXPayFlow.SETTINGS, VXPayFlow.CHANGE_CARD, VXPayFlow.CHANGE_LS, VXPayFlow.ONE_CLICK, VXPayFlow.AUTO_RECHARGE];
    }
    /**
     * @return {string}
     */

  }, {
    key: "getDefault",
    value: function getDefault() {
      return VXPayFlow.MONEY_CHARGE;
    }
  }]);

  return VXPayFlow;
}();

VXPayFlow.AVS = 'avs';
VXPayFlow.LIMIT = 'limit';
VXPayFlow.LOGIN = 'login';
VXPayFlow.MONEY_CHARGE = 'moneycharge';
VXPayFlow.OP_COMPENSATION = 'opcompensation';
VXPayFlow.AUTO_RECHARGE = 'autorecharge';
VXPayFlow.PASSWORD_RESET = 'pwdreset';
VXPayFlow.PASSWORD_LOST = 'pwdlost';
VXPayFlow.PROMOCODE = 'promocode';
VXPayFlow.SCRATCH_CARD = 'scratchcard';
VXPayFlow.TRIAL_VIP_ABO = 'trialvipabo';
VXPayFlow.VIP_ABO = 'vipabo';
VXPayFlow.VXTV_ABO = 'vxtvabo';
VXPayFlow.SETTINGS = 'vxsettings';
VXPayFlow.CHANGE_CARD = 'changecc';
VXPayFlow.CHANGE_LS = 'changels';
VXPayFlow.ONE_CLICK = 'oneclick';
/* harmony default export */ var Config_VXPayFlow = (VXPayFlow);
// CONCATENATED MODULE: ./src/VXPay/Config/VXPayModalConfig.js
function VXPayModalConfig_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function VXPayModalConfig_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function VXPayModalConfig_createClass(Constructor, protoProps, staticProps) { if (protoProps) VXPayModalConfig_defineProperties(Constructor.prototype, protoProps); if (staticProps) VXPayModalConfig_defineProperties(Constructor, staticProps); return Constructor; }



var VXPayModalConfig_VXPayModalConfig =
/*#__PURE__*/
function () {
  function VXPayModalConfig() {
    VXPayModalConfig_classCallCheck(this, VXPayModalConfig);

    this._login = VXPayModalConfig.YES;
    this._showHeader = VXPayModalConfig.YES;
    this._showTeaser = VXPayModalConfig.YES;
    this._showFooter = VXPayModalConfig.YES;
    this._support = VXPayModalConfig.YES;
    this._showOAuth = VXPayModalConfig.YES;
    this._showNL = VXPayModalConfig.YES;
    this._neutralHeader = VXPayModalConfig.NO;
    this._teaserBonus = VXPayModalConfig.NO;
    this._showThank = VXPayModalConfig.NO;
    this._showLogo = VXPayModalConfig.NO;
    this._showTeaserBar = VXPayModalConfig.NO;
    this._parentInFrame = VXPayModalConfig.NO;
  }
  /**
   * @param value
   * @private
   */


  VXPayModalConfig_createClass(VXPayModalConfig, [{
    key: "getOptions",

    /**
     * @return {Object}
     */
    value: function getOptions() {
      return {
        login: this.login,
        showHeader: this.showHeader,
        showTeaser: this.showTeaser,
        showFooter: this.showFooter,
        neutralHeader: this.neutralHeader,
        teaserBonus: this.teaserBonus,
        support: this.support,
        showOAuth: this.showOAuth,
        showNL: this.showNL,
        showThank: this.showThank,
        showLogo: this.showLogo,
        showTeaserBar: this.showTeaserBar,
        parentInFrame: this.parentInFrame
      };
    }
  }, {
    key: "parentInFrame",

    /**
     * @return {0|1}
     */
    get: function get() {
      return this._parentInFrame;
    }
    /**
     * @param {0|1} value
     */
    ,
    set: function set(value) {
      VXPayModalConfig._throwOnInvalid(value);

      this._parentInFrame = value;
    }
    /**
     * @return {0|1}
     */

  }, {
    key: "login",
    get: function get() {
      return this._login;
    }
    /**
     * @param {0|1} value
     */
    ,
    set: function set(value) {
      VXPayModalConfig._throwOnInvalid(value);

      this._login = value;
    }
    /**
     * @return {0|1}
     */

  }, {
    key: "showHeader",
    get: function get() {
      return this._showHeader;
    }
    /**
     * @param {0|1} value
     */
    ,
    set: function set(value) {
      VXPayModalConfig._throwOnInvalid(value);

      this._showHeader = value;
    }
    /**
     * @return {0|1}
     */

  }, {
    key: "showTeaser",
    get: function get() {
      return this._showTeaser;
    }
    /**
     * @param {0|1} value
     */
    ,
    set: function set(value) {
      VXPayModalConfig._throwOnInvalid(value);

      this._showTeaser = value;
    }
    /**
     * @return {0|1}
     */

  }, {
    key: "showFooter",
    get: function get() {
      return this._showFooter;
    }
    /**
     * @param {0|1} value
     */
    ,
    set: function set(value) {
      VXPayModalConfig._throwOnInvalid(value);

      this._showFooter = value;
    }
    /**
     * @return {0|1}
     */

  }, {
    key: "neutralHeader",
    get: function get() {
      return this._neutralHeader;
    }
    /**
     * @param {0|1} value
     */
    ,
    set: function set(value) {
      VXPayModalConfig._throwOnInvalid(value);

      this._neutralHeader = value;
    }
    /**
     * @return {0|1}
     */

  }, {
    key: "teaserBonus",
    get: function get() {
      return this._teaserBonus;
    }
    /**
     * @param {0|1} value
     */
    ,
    set: function set(value) {
      VXPayModalConfig._throwOnInvalid(value);

      this._teaserBonus = value;
    }
    /**
     * @return {0|1}
     */

  }, {
    key: "support",
    get: function get() {
      return this._support;
    }
    /**
     * @param {0|1} value
     */
    ,
    set: function set(value) {
      VXPayModalConfig._throwOnInvalid(value);

      this._support = value;
    }
    /**
     * @return {0|1}
     */

  }, {
    key: "showOAuth",
    get: function get() {
      return this._showOAuth;
    }
    /**
     * @param {0|1} value
     */
    ,
    set: function set(value) {
      VXPayModalConfig._throwOnInvalid(value);

      this._showOAuth = value;
    }
    /**
     * @return {0|1}
     */

  }, {
    key: "showNL",
    get: function get() {
      return this._showNL;
    }
    /**
     * @param {0|1} value
     */
    ,
    set: function set(value) {
      VXPayModalConfig._throwOnInvalid(value);

      this._showNL = value;
    }
    /**
     * @return {0|1}
     */

  }, {
    key: "showThank",
    get: function get() {
      return this._showThank;
    }
    /**
     * @param {0|1} value
     */
    ,
    set: function set(value) {
      VXPayModalConfig._throwOnInvalid(value);

      this._showThank = value;
    }
    /**
     * @return {0|1}
     */

  }, {
    key: "showLogo",
    get: function get() {
      return this._showLogo;
    }
    /**
     * @param {0|1} value
     */
    ,
    set: function set(value) {
      VXPayModalConfig._throwOnInvalid(value);

      this._showLogo = value;
    }
    /**
     * @return {0|1}
     */

  }, {
    key: "showTeaserBar",
    get: function get() {
      return this._showTeaserBar;
    }
    /**
     * @param {0|1} value
     */
    ,
    set: function set(value) {
      VXPayModalConfig._throwOnInvalid(value);

      this._showTeaserBar = value;
    }
    /**
     * @return {Number[]}
     */

  }], [{
    key: "_throwOnInvalid",
    value: function _throwOnInvalid(value) {
      if (!VXPayValidator_VXPayValidator.isModalConfigValueAllowed(value)) {
        throw new TypeError('Value not allowed. Try one of: VXPayModalConfig.YES, VXPayModalConfig.NO');
      }
    }
  }, {
    key: "getAllowed",
    value: function getAllowed() {
      return [VXPayModalConfig.YES, VXPayModalConfig.NO];
    }
  }]);

  return VXPayModalConfig;
}();

VXPayModalConfig_VXPayModalConfig.YES = 1;
VXPayModalConfig_VXPayModalConfig.NO = 0;
/* harmony default export */ var Config_VXPayModalConfig = (VXPayModalConfig_VXPayModalConfig);
// CONCATENATED MODULE: ./src/VXPay/VXPayUrlHelper.js
function VXPayUrlHelper_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function VXPayUrlHelper_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function VXPayUrlHelper_createClass(Constructor, protoProps, staticProps) { if (protoProps) VXPayUrlHelper_defineProperties(Constructor.prototype, protoProps); if (staticProps) VXPayUrlHelper_defineProperties(Constructor, staticProps); return Constructor; }

var VXPayUrlHelper =
/*#__PURE__*/
function () {
  /**
   * @param {Function} urlImplementation
   */
  function VXPayUrlHelper() {
    var urlImplementation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

    VXPayUrlHelper_classCallCheck(this, VXPayUrlHelper);

    this._urlImpl = typeof urlImplementation === 'undefined' ? window.URL : urlImplementation;
  }
  /**
   * @param {String} baseUrl
   * @param {Object} params
   * @param {Object} config
   * @return {string}
   */


  VXPayUrlHelper_createClass(VXPayUrlHelper, [{
    key: "generate",
    value: function generate(baseUrl) {
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
      var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
      var url = new this._urlImpl(baseUrl); // fix url, remove existing hashes

      url.hash = ''; // add params

      if (params) {
        for (var d in params) {
          if (typeof params[d] === 'undefined') {
            continue;
          }

          url.searchParams.append(d, params[d]);
        }
      } // add module config


      if (config) {
        for (var d2 in config) {
          // skip underline in object props
          var name = d2.charAt(1) === '_' ? d2.substr(1) : d2;

          if (typeof config[name] === 'undefined') {
            continue;
          }

          url.searchParams.append('mc[' + d2 + ']', config[d2]);
        }
      }

      return url.toString();
    }
    /**
     * @param {String} location
     * @param {String} name
     * @return {String}
     */

  }, {
    key: "getQueryParam",
    value: function getQueryParam(location, name) {
      try {
        var url = new this._urlImpl(location);
        return url.searchParams[name];
      } catch (err) {
        return '';
      }
    }
    /**
     * @param {String} url
     * @return {boolean}
     */

  }, {
    key: "isValid",
    value: function isValid(url) {
      try {
        new this._urlImpl(url);
        return true;
      } catch (_) {
        return false;
      }
    }
  }]);

  return VXPayUrlHelper;
}();


// CONCATENATED MODULE: ./src/VXPay/VXPayValidator.js
function VXPayValidator_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function VXPayValidator_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function VXPayValidator_createClass(Constructor, protoProps, staticProps) { if (protoProps) VXPayValidator_defineProperties(Constructor.prototype, protoProps); if (staticProps) VXPayValidator_defineProperties(Constructor, staticProps); return Constructor; }







var VXPayValidator_VXPayValidator =
/*#__PURE__*/
function () {
  function VXPayValidator() {
    VXPayValidator_classCallCheck(this, VXPayValidator);
  }

  VXPayValidator_createClass(VXPayValidator, null, [{
    key: "isUrl",

    /**
     * @param {String} url
     * @param {URL} urlImplementation
     * @return {boolean}
     */
    value: function isUrl(url) {
      var urlImplementation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
      var helper = new VXPayUrlHelper(urlImplementation);
      return helper.isValid(url);
    }
    /**
     * @param {String} language
     * @return {boolean}
     */

  }, {
    key: "isLanguageSupported",
    value: function isLanguageSupported(language) {
      return VXPay_VXPayLanguage.getAvailable().indexOf(language) !== -1;
    }
    /**
     * @param {String} env
     * @return {boolean}
     */

  }, {
    key: "isEnvironmentSupported",
    value: function isEnvironmentSupported(env) {
      return VXPay_VXPayEnvironment.getAvailable().indexOf(env) !== -1;
    }
    /**
     * @param {String} flow
     * @return {boolean}
     */

  }, {
    key: "isFlowAllowed",
    value: function isFlowAllowed(flow) {
      return Config_VXPayFlow.getAllowed().indexOf(flow) !== -1;
    }
    /**
     * @param {Number} value
     * @return {boolean}
     */

  }, {
    key: "isModalConfigValueAllowed",
    value: function isModalConfigValueAllowed(value) {
      return Config_VXPayModalConfig.getAllowed().indexOf(value) !== -1;
    }
  }]);

  return VXPayValidator;
}();


// CONCATENATED MODULE: ./src/VXPay/Event/VXPayEventListener.js
function VXPayEventListener_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function VXPayEventListener_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function VXPayEventListener_createClass(Constructor, protoProps, staticProps) { if (protoProps) VXPayEventListener_defineProperties(Constructor.prototype, protoProps); if (staticProps) VXPayEventListener_defineProperties(Constructor, staticProps); return Constructor; }

var VXPayEventListener =
/*#__PURE__*/
function () {
  function VXPayEventListener() {
    VXPayEventListener_classCallCheck(this, VXPayEventListener);
  }

  VXPayEventListener_createClass(VXPayEventListener, null, [{
    key: "addEvent",

    /**
     * @param {String} event
     * @param {HTMLElement|Window} elem
     * @param {Function} func
     */
    value: function addEvent(event, elem, func) {
      if (elem.addEventListener) {
        // W3C DOM
        elem.addEventListener(event, func, false);
      } else if (elem.attachEvent) {
        // IE DOM
        elem.attachEvent(VXPayEventListener.IE_PREFIX + event, func);
      } else {
        // No much to do
        elem[event] = func;
      }
    }
    /**
     * @param {String} event
     * @param {HTMLElement|Window} elem
     * @param {Function} func
     */

  }, {
    key: "removeEvent",
    value: function removeEvent(event, elem, func) {
      if (elem.removeEventListener) {
        // W3C DOM
        elem.removeEventListener(event, func, false);
      } else if (elem.detachEvent) {
        // IE DOM
        elem.detachEvent(VXPayEventListener.IE_PREFIX + event, func);
      } else {
        // No much to do
        elem[event] = null;
      }
    }
  }]);

  return VXPayEventListener;
}();

VXPayEventListener.IE_PREFIX = 'on';
/* harmony default export */ var Event_VXPayEventListener = (VXPayEventListener);
// CONCATENATED MODULE: ./src/VXPay/Dom/VXPayDomHelper.js
function VXPayDomHelper_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function VXPayDomHelper_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function VXPayDomHelper_createClass(Constructor, protoProps, staticProps) { if (protoProps) VXPayDomHelper_defineProperties(Constructor.prototype, protoProps); if (staticProps) VXPayDomHelper_defineProperties(Constructor, staticProps); return Constructor; }

var VXPayDomHelper =
/*#__PURE__*/
function () {
  /**
   * @see VXPayDomHelperFactory::getHelper
   * @param {Window} window
   * @param {jQuery} jQuery
   * @param {Fx} Fx
   */
  function VXPayDomHelper(window, jQuery, Fx) {
    VXPayDomHelper_classCallCheck(this, VXPayDomHelper);

    this._window = window;
    this._jQuery = jQuery;
    this._fx = Fx; // Mootools FX
  }
  /**
   * @return {Window}
   */


  VXPayDomHelper_createClass(VXPayDomHelper, [{
    key: "_hasJQuery",

    /**
     * @return {boolean}
     * @private
     */
    value: function _hasJQuery() {
      return typeof this._jQuery !== 'undefined' && typeof this._jQuery.Animation !== 'undefined';
    }
    /**
     * @return {boolean}
     * @private
     */

  }, {
    key: "_hasMooTools",
    value: function _hasMooTools() {
      return typeof this._fx !== 'undefined' && typeof this._fx.Scroll !== 'undefined';
    }
    /**
     * @param {Number} top
     * @link https://www.similartech.com/compare/jquery-vs-mootools
     * @return {*}
     */

  }, {
    key: "scrollTo",
    value: function scrollTo(top) {
      try {
        if (this._hasJQuery()) {
          var opts = VXPayDomHelper.OPTIONS_JQUERY;
          opts.scrollTop = top;
          return this._jQuery('html, body').animate(opts, VXPayDomHelper.ANIMATION_DURATION);
        }

        if (this._hasMooTools()) {
          return new this._fx.Scroll(this._window, VXPayDomHelper.OPTIONS_MTOOLS).start(0, top);
        } // default no animation


        return this._window.scrollTo(0, top);
      } catch (e) {
        /* suppress */
      }
    }
  }, {
    key: "window",
    get: function get() {
      return this._window;
    }
    /**
     * @return {jQuery}
     */

  }, {
    key: "jQuery",
    get: function get() {
      return this._jQuery;
    }
    /**
     * @return {Fx}
     */

  }, {
    key: "fx",
    get: function get() {
      return this._fx;
    }
    /**
     * @param {Window} window
     * @return {number}
     */

  }], [{
    key: "getClientHeight",
    value: function getClientHeight(window) {
      return window.innerHeight || window.document.documentElement.clientHeight || window.document.body.clientHeight;
    }
    /**
     * @param {HTMLElement} element
     * @param {String} attribute
     * @param {String|Number} value
     * @return {boolean}
     */

  }, {
    key: "isStyleAttributeSuppored",
    value: function isStyleAttributeSuppored(element, attribute, value) {
      var supported = false;

      try {
        element.style[attribute] = value;
        supported = element.style[attribute] === value;
      } catch (e) {
        /* suppress */
      }

      return supported;
    }
  }]);

  return VXPayDomHelper;
}();

VXPayDomHelper.TAG_IFRAME = 'iframe';
VXPayDomHelper.OPTIONS_JQUERY = {
  scrollTop: 0
};
VXPayDomHelper.OPTIONS_MTOOLS = {
  duration: VXPayDomHelper.ANIMATION_DURATION
};
VXPayDomHelper.ANIMATION_DURATION = 500;
/* harmony default export */ var Dom_VXPayDomHelper = (VXPayDomHelper);
// CONCATENATED MODULE: ./src/VXPay/Dom/VXPayIframe.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function VXPayIframe_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function VXPayIframe_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function VXPayIframe_createClass(Constructor, protoProps, staticProps) { if (protoProps) VXPayIframe_defineProperties(Constructor.prototype, protoProps); if (staticProps) VXPayIframe_defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }





var VXPayIframe_VXPayIframe =
/*#__PURE__*/
function (_VXPayEventListener) {
  _inherits(VXPayIframe, _VXPayEventListener);

  /**
   * @param {Document} document
   * @param {String} url
   * @param {String|Number} id
   * @param {CSSStyleDeclaration} style
   */
  function VXPayIframe(document, url, id) {
    var _this;

    var style = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

    VXPayIframe_classCallCheck(this, VXPayIframe);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(VXPayIframe).call(this));

    if (typeof document.createElement !== 'function') {
      throw new TypeError('An iFrame can only be build on a valid Document object!');
    }

    if (!VXPayValidator_VXPayValidator.isUrl(url, document.defaultView.URL)) {
      throw new TypeError('Please provide a valid URL! ' + url);
    }

    if (!id || id.length === 0) {
      throw new TypeError('Please provide a valid frame ID!');
    }

    _this._loaded = false;
    _this._frame = document.createElement(Dom_VXPayDomHelper.TAG_IFRAME);
    _this._frame.src = url;
    _this._frame.id = id;
    _this._frame.onload = _this._markLoaded.bind(_assertThisInitialized(_assertThisInitialized(_this))); // only apply if valid

    if (null !== style) {
      for (var item in style) {
        _this._frame.style.setProperty(item, style[item]);
      }
    }

    return _this;
  }
  /**
   * @throws Error
   */


  VXPayIframe_createClass(VXPayIframe, [{
    key: "triggerLoad",
    value: function triggerLoad() {
      throw new Error('Method triggerLoad should be implemented in child class!');
    }
    /**
     * @protected
     */

  }, {
    key: "_markLoaded",
    value: function _markLoaded() {
      this._loaded = true;
    }
    /**
     * @return {boolean}
     */

  }, {
    key: "maximize",

    /**
     * @return {VXPayIframe}
     */
    value: function maximize() {
      this._frame.style.width = VXPayIframe.MAX_WIDTH;
      this._frame.style.height = VXPayIframe.MAX_HEIGHT;
      this._frame.style.left = VXPayIframe.MAX_LEFT;
      this._frame.style.top = VXPayIframe.MAX_TOP;
      this._frame.style.marginLeft = VXPayIframe.MAX_LEFT_MARGIN;
      return this;
    }
    /**
     * @param {String|VXPayMessage} message
     * @param {String} origin
     * @return {VXPayIframe}
     */

  }, {
    key: "postMessage",
    value: function postMessage() {
      var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var origin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : VXPayIframe.ORIGIN_ALL;

      this._frame.contentWindow.postMessage(message.toString(), origin);

      return this;
    }
    /**
     * @param {Function} handler
     */

  }, {
    key: "setMessageHandler",
    value: function setMessageHandler(handler) {
      Event_VXPayEventListener.addEvent(VXPayIframe.EVENT_MESSAGE, this._frame.contentWindow, handler);
    }
    /**
     * @param {Function} handler
     */

  }, {
    key: "removeMessageHandler",
    value: function removeMessageHandler(handler) {
      Event_VXPayEventListener.removeEvent(VXPayIframe.EVENT_MESSAGE, this._frame.contentWindow, handler);
    }
  }, {
    key: "show",
    value: function show() {
      this._frame.style.display = VXPayIframe.DISPLAY_BLOCK;
    }
  }, {
    key: "hide",
    value: function hide() {
      this._frame.style.display = VXPayIframe.DISPLAY_NONE;
    }
    /**
     * @param {string} value
     */

  }, {
    key: "loaded",
    get: function get() {
      return this._loaded;
    }
    /**
     * @return {HTMLIFrameElement|HTMLElement}
     */

  }, {
    key: "frame",
    get: function get() {
      return this._frame;
    }
  }, {
    key: "url",
    set: function set(value) {
      this._frame.src = value;
    }
    /**
     * @return {string}
     */
    ,
    get: function get() {
      return this._frame.src;
    }
  }]);

  return VXPayIframe;
}(Event_VXPayEventListener);

VXPayIframe_VXPayIframe.EVENT_MESSAGE = 'message';
VXPayIframe_VXPayIframe.EVENT_LOAD = 'load';
VXPayIframe_VXPayIframe.EVENT_UNLOAD = 'beforeunload';
VXPayIframe_VXPayIframe.POSITION_ABSOLUTE = 'absolute';
VXPayIframe_VXPayIframe.POSITION_FIXED = 'fixed';
VXPayIframe_VXPayIframe.DISPLAY_BLOCK = 'block';
VXPayIframe_VXPayIframe.DISPLAY_NONE = 'none';
VXPayIframe_VXPayIframe.MAX_HEIGHT = '100vh';
VXPayIframe_VXPayIframe.MAX_WIDTH = '100%';
VXPayIframe_VXPayIframe.MAX_TOP = '0';
VXPayIframe_VXPayIframe.MAX_LEFT = '0';
VXPayIframe_VXPayIframe.MAX_LEFT_MARGIN = '0';
VXPayIframe_VXPayIframe.ORIGIN_VX = 'https://www.visit-x.net';
VXPayIframe_VXPayIframe.ORIGIN_ALL = '*';
/* harmony default export */ var Dom_VXPayIframe = (VXPayIframe_VXPayIframe);
// EXTERNAL MODULE: ./node_modules/is-mobile/index.js
var is_mobile = __webpack_require__("./node_modules/is-mobile/index.js");
var is_mobile_default = /*#__PURE__*/__webpack_require__.n(is_mobile);

// CONCATENATED MODULE: ./src/VXPay/VXPayUserAgentHelper.js
function VXPayUserAgentHelper_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function VXPayUserAgentHelper_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function VXPayUserAgentHelper_createClass(Constructor, protoProps, staticProps) { if (protoProps) VXPayUserAgentHelper_defineProperties(Constructor.prototype, protoProps); if (staticProps) VXPayUserAgentHelper_defineProperties(Constructor, staticProps); return Constructor; }



var VXPayUserAgentHelper_VXPayUserAgentHelper =
/*#__PURE__*/
function () {
  /**
   * @param {String} uaString
   */
  function VXPayUserAgentHelper() {
    var uaString = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    VXPayUserAgentHelper_classCallCheck(this, VXPayUserAgentHelper);

    this._userAgent = uaString;
  }
  /**
   * @return {boolean}
   */


  VXPayUserAgentHelper_createClass(VXPayUserAgentHelper, [{
    key: "isMobile",
    value: function isMobile() {
      return is_mobile_default()(this._userAgent);
    }
    /**
     * @return {string}
     */

  }, {
    key: "userAgent",
    get: function get() {
      return this._userAgent;
    }
    /**
     * @param {string} value
     */
    ,
    set: function set(value) {
      this._userAgent = value;
    }
  }]);

  return VXPayUserAgentHelper;
}();


// CONCATENATED MODULE: ./src/VXPay/VXPayConfig.js
function VXPayConfig_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function VXPayConfig_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function VXPayConfig_createClass(Constructor, protoProps, staticProps) { if (protoProps) VXPayConfig_defineProperties(Constructor.prototype, protoProps); if (staticProps) VXPayConfig_defineProperties(Constructor, staticProps); return Constructor; }










var VXPayConfig_VXPayConfig =
/*#__PURE__*/
function () {
  /**
   * @param {Window} window
   * @param {VXPayModalConfig} modalConfig
   */
  function VXPayConfig(window) {
    var modalConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

    VXPayConfig_classCallCheck(this, VXPayConfig);

    this._env = VXPay_VXPayEnvironment.getDefault();
    this._logging = false;
    this._flow = Config_VXPayFlow.getDefault();
    this._language = VXPay_VXPayLanguage.getDefault();
    this._urls = {
      abg: VXPayConfig.ABG_DEFAULT.replace('{language}', this._language),
      privacy: VXPayConfig.PRIVACY_DEFAULT.replace('{language}', this._language),
      ruri: '',
      suri: '',
      purl: ''
    };
    this._pfm = '';
    this._enableTab = new VXPayUserAgentHelper_VXPayUserAgentHelper(window.navigator.userAgent || '').isMobile();
    this._host = '';
    this._token = '';
    this._promoCode = '';
    this._wmId = '';
    this._wmSubRef = '';
    this._wmToken = '';
    this._adtv = '';
    this._subRef = '';
    this._apiVersion = 3;
    this._modalConfig = typeof modalConfig === 'undefined' ? new Config_VXPayModalConfig() : modalConfig;
    this._window = window;
    this._helper = new VXPayUrlHelper(window.URL);
  }
  /**
   * @return {string}
   */


  VXPayConfig_createClass(VXPayConfig, [{
    key: "getPaymentFrameUrl",

    /**
     * @example https://www.visit-x.net/VXPAY-V3/?pfm=1502&lang=en&environment=vxone&flow=login&sview=&lazy=1&mc[login]=1&mc[showHeader]=1&mc[showTeaser]=1&mc[showFooter]=1&mc[neutralHeader]=1&mc[teaserBonus]=0&mc[support]=1&mc[showOAuth]=1&mc[showNL]=1&mc[showThank]=0&mc[showLogo]=1&mc[showTeaserBar]=1&mc[parentInFrame]=0
     * @return {string}
     */
    value: function getPaymentFrameUrl() {
      return this._helper.generate(Dom_VXPayIframe.ORIGIN_VX + '/VXPAY-V' + this._apiVersion + '/', this.getOptions(), this._modalConfig.getOptions());
    }
    /**
     * @return {Object}
     */

  }, {
    key: "getOptions",
    value: function getOptions() {
      return {
        agbUrl: this.abgUrl,
        privacyUrl: this.privacyUrl,
        environment: this._env,
        flow: this._flow,
        lang: this._language,
        pfm: this._pfm,
        w: this._wmId,
        ws: this._wmSubRef,
        wt: this._wmToken,
        adtv: this._adtv,
        sub: this._subRef,
        enableTab: this._enableTab ? 1 : 0,
        option: '',
        pc: this._promoCode,
        tt: this._token,
        ruri: this._urls.ruri,
        host: this._host
      };
    }
    /**
     * @return {Object}
     */

  }, {
    key: "getAdditionalOptions",
    value: function getAdditionalOptions() {
      var urls = {
        ref: this._wmId,
        ruri: this._urls.ruri,
        surl: this._urls.suri,
        aurl: this.abgUrl,
        prurl: this.privacyUrl,
        purl: this._urls.purl
      };
      return Object.assign({}, urls, this.modalConfig.getOptions());
    }
    /**
     * @return {String}
     */

  }, {
    key: "setTokenFromMessage",

    /**
     * @param {VXPayTransferTokenMessage} message
     */
    value: function setTokenFromMessage(message) {
      this._token = message.token;
    }
    /**
     * @return {String}
     */

  }, {
    key: "merge",

    /**
     * @param {Object} options
     */
    value: function merge() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var that = this;
      Object.keys(that.getOptions()).forEach(function (key) {
        var valid = options.hasOwnProperty(key) && typeof options[key] !== 'undefined'; // map

        if (key === 'lang' && options.hasOwnProperty('language')) {
          that[key] = options['language'];
        } // normal flow
        else if (valid) {
            that[key] = options[key];
          }
      });
    }
    /**
     * @param {VXPayFlowChangedHookMessage} message
     */

  }, {
    key: "updateFlow",
    value: function updateFlow(message) {
      this._flow = message.newFlow;
    }
  }, {
    key: "ruri",
    get: function get() {
      return this._urls.ruri;
    }
    /**
     * @param {string} ruri
     */
    ,
    set: function set(ruri) {
      this._urls.ruri = ruri;
    }
    /**
     * @return {string}
     */

  }, {
    key: "suri",
    get: function get() {
      return this._urls.suri;
    }
    /**
     * @return {string}
     */

  }, {
    key: "purl",
    get: function get() {
      return this._urls.purl;
    }
    /**
     * @return {Window|*}
     */

  }, {
    key: "window",
    get: function get() {
      return this._window;
    }
  }, {
    key: "abgUrl",
    get: function get() {
      return this._urls.abg;
    }
    /**
     * @param {String} url
     */
    ,
    set: function set(url) {
      if (!VXPayValidator_VXPayValidator.isUrl(url)) {
        throw new Error('Invalid URL provided: ' + url);
      }

      this._urls.abg = url;
    }
    /**
     * @return {String}
     */

  }, {
    key: "privacyUrl",
    get: function get() {
      return this._urls.privacy;
    }
    /**
     * @param {String} url
     */
    ,
    set: function set(url) {
      if (!VXPayValidator_VXPayValidator.isUrl(url)) {
        throw new Error('Invalid URL provided: ' + url);
      }

      this._urls.privacy = url;
    }
    /**
     * @return {String}
     */

  }, {
    key: "env",
    get: function get() {
      return this._env;
    }
    /**
     * @param {String} value
     */
    ,
    set: function set(value) {
      if (!VXPayValidator_VXPayValidator.isEnvironmentSupported(value)) {
        throw new TypeError('Environment ' + value + ' is not supported. Please select one of ' + VXPay_VXPayEnvironment.getAvailable());
      }

      this._env = value;
    }
    /**
     * @return {Boolean}
     */

  }, {
    key: "logging",
    get: function get() {
      return this._logging;
    }
    /**
     * @param {Boolean} value
     */
    ,
    set: function set(value) {
      this._logging = value;
    }
    /**
     * @return {String}
     */

  }, {
    key: "language",
    get: function get() {
      return this._language.toUpperCase();
    }
    /**
     * @param {String} value
     */
    ,
    set: function set(value) {
      if (!VXPayValidator_VXPayValidator.isLanguageSupported(value)) {
        var msg = 'Unsupported language: ' + value.toString() + '. Allowed: ' + VXPay_VXPayLanguage.getAvailable().join(', ');
        throw new TypeError(msg);
      }

      this._language = value;
    }
    /**
     * @return {String}
     */

  }, {
    key: "flow",
    get: function get() {
      return this._flow;
    }
    /**
     * @param {String} value
     * @see VXPayFlow
     */
    ,
    set: function set(value) {
      if (!VXPayValidator_VXPayValidator.isFlowAllowed(value)) {
        var msg = 'Flow not allowed: ' + value.toString() + '. Select one of: ' + Config_VXPayFlow.getAllowed().join(', ');
        throw new TypeError(msg);
      }

      this._flow = value;
    }
    /**
     * @return {String|int}
     */

  }, {
    key: "host",
    get: function get() {
      return this._host;
    }
    /**
     * @param {String|int} value
     */
    ,
    set: function set(value) {
      this._host = value;
    }
    /**
     * @return {String}
     */

  }, {
    key: "token",
    get: function get() {
      return this._token;
    }
    /**
     * @param {String} value
     */
    ,
    set: function set(value) {
      this._token = value;
    }
  }, {
    key: "promoCode",
    get: function get() {
      return this._promoCode;
    }
    /**
     * @param {String} value
     */
    ,
    set: function set(value) {
      this._promoCode = value;
    }
    /**
     * @return {String|int}
     */

  }, {
    key: "wmId",
    get: function get() {
      return this._wmId;
    }
    /**
     * @param {String|int} value
     */
    ,
    set: function set(value) {
      this._wmId = value;
    }
    /**
     * @return {String|int}
     */

  }, {
    key: "wmSubRef",
    get: function get() {
      return this._wmSubRef;
    }
    /**
     * @param {String|int} value
     */
    ,
    set: function set(value) {
      this._wmSubRef = value;
    }
    /**
     * @return {String}
     */

  }, {
    key: "wmToken",
    get: function get() {
      return this._wmToken;
    }
    /**
     * @param {String} value
     */
    ,
    set: function set(value) {
      this._wmToken = value;
    }
    /**
     * @return {*}
     */

  }, {
    key: "adtv",
    get: function get() {
      return this._adtv;
    }
    /**
     * @param value
     */
    ,
    set: function set(value) {
      this._adtv = value;
    }
    /**
     * @return {*}
     */

  }, {
    key: "subRef",
    get: function get() {
      return this._subRef;
    }
    /**
     * @param value
     */
    ,
    set: function set(value) {
      this._subRef = value;
    }
    /**
     * @return {number}
     */

  }, {
    key: "apiVersion",
    get: function get() {
      return this._apiVersion;
    }
    /**
     * @param {number} value
     */
    ,
    set: function set(value) {
      this._apiVersion = parseInt(value, 10);
    }
    /**
     * @return {VXPayModalConfig}
     */

  }, {
    key: "modalConfig",
    get: function get() {
      return this._modalConfig;
    }
    /**
     * @param {VXPayModalConfig} value
     */
    ,
    set: function set(value) {
      if (!(value instanceof Config_VXPayModalConfig)) {
        throw new TypeError('Modal config value should be instance of VXPayModalConfig!');
      }

      this._modalConfig = value;
    }
    /**
     * @return {string}
     */

  }, {
    key: "pfm",
    get: function get() {
      return this._pfm;
    }
    /**
     * @param {string} value
     */
    ,
    set: function set(value) {
      this._pfm = value;
    }
    /**
     * @return {boolean}
     */

  }, {
    key: "enableTab",
    get: function get() {
      return this._enableTab;
    }
    /**
     * @param {boolean} value
     */
    ,
    set: function set(value) {
      this._enableTab = value;
    }
  }]);

  return VXPayConfig;
}();

VXPayConfig_VXPayConfig.ABG_DEFAULT = 'https://www.visit-x.net/CAMS/{language}/Info/Zentrum.html?submod=AGB&track=Account';
VXPayConfig_VXPayConfig.PRIVACY_DEFAULT = 'https://www.visit-x.net/CAMS/{language}/Info/Zentrum.html?submod=Datenschutz&track=Index';
/* harmony default export */ var VXPay_VXPayConfig = (VXPayConfig_VXPayConfig);
// CONCATENATED MODULE: ./src/VXPay/VXPayLogger.js
function VXPayLogger_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function VXPayLogger_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function VXPayLogger_createClass(Constructor, protoProps, staticProps) { if (protoProps) VXPayLogger_defineProperties(Constructor.prototype, protoProps); if (staticProps) VXPayLogger_defineProperties(Constructor, staticProps); return Constructor; }

var VXPayLogger =
/*#__PURE__*/
function () {
  /**
   * @param {Boolean} enable
   * @param {Window} window
   */
  function VXPayLogger(enable) {
    var window = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

    VXPayLogger_classCallCheck(this, VXPayLogger);

    this.enabled = enable || false;
    this._container = [];
    this._window = window;
  }
  /**
   * Accepts any number of params
   */


  VXPayLogger_createClass(VXPayLogger, [{
    key: "log",
    value: function log() {
      // check enabled
      if (!this.enabled) {
        return;
      } // for browser


      if (typeof this._window !== 'undefined') {
        return this._window.console.log.apply(this, arguments);
      } // for tests - just collect


      this._container.push({
        time: new Date(),
        message: JSON.stringify(arguments)
      });
    }
    /**
     * @return {Array<String>}
     */

  }, {
    key: "container",
    get: function get() {
      return this._container;
    }
  }]);

  return VXPayLogger;
}();

VXPayLogger.LOG_INCOMING = '<-- []';
VXPayLogger.LOG_OUTGOING = '--> []';
/* harmony default export */ var VXPay_VXPayLogger = (VXPayLogger);
// CONCATENATED MODULE: ./src/VXPay/VXPayMessage.js
function VXPayMessage_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function VXPayMessage_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function VXPayMessage_createClass(Constructor, protoProps, staticProps) { if (protoProps) VXPayMessage_defineProperties(Constructor.prototype, protoProps); if (staticProps) VXPayMessage_defineProperties(Constructor, staticProps); return Constructor; }

var VXPayMessage =
/*#__PURE__*/
function () {
  /**
   * @param {String} type
   */
  function VXPayMessage() {
    var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    VXPayMessage_classCallCheck(this, VXPayMessage);

    this.type = type;
  }
  /**
   * @return {string}
   */


  VXPayMessage_createClass(VXPayMessage, [{
    key: "toString",
    value: function toString() {
      return JSON.stringify(this);
    }
    /**
     * @return {String[]}
     */

  }], [{
    key: "getValidTypes",
    value: function getValidTypes() {
      return [VXPayMessage.TYPE_INIT_SESSION, VXPayMessage.TYPE_UPDATE_PARAMS, VXPayMessage.TYPE_IS_VISIBLE, VXPayMessage.TYPE_ADDITIONAL_INFO, VXPayMessage.TYPE_CHANGE_ROUTE, VXPayMessage.TYPE_HOOK, VXPayMessage.TYPE_SCROLL_TO, VXPayMessage.TYPE_SUCCESS, VXPayMessage.TYPE_IFRAME_CLOSE, VXPayMessage.TYPE_IFRAME_READY, VXPayMessage.TYPE_VIEW_READY, VXPayMessage.TYPE_TRANSFER_TOKEN, VXPayMessage.TYPE_CONTENT_LOADED, // actions
      VXPayMessage.TYPE_ACTION_GET_ACTIVE_ABOS, VXPayMessage.TYPE_ACTION_LOGOUT, VXPayMessage.TYPE_ACTION_GET_AVS_STATUS, VXPayMessage.TYPE_ACTION_GET_BALANCE, VXPayMessage.TYPE_ACTION_IS_LOGGED_IN, // action response messages
      VXPayMessage.TYPE_HAS_LOGIN_COOKIE, VXPayMessage.TYPE_BALANCE, VXPayMessage.TYPE_AVS_STATUS, VXPayMessage.TYPE_IS_LOGGED_IN];
    }
  }]);

  return VXPayMessage;
}();

VXPayMessage.TYPE_HOOK = 'modalbox-hook';
VXPayMessage.TYPE_SCROLL_TO = 'modalbox-scrollto';
VXPayMessage.TYPE_SUCCESS = 'modalbox-success';
VXPayMessage.TYPE_IFRAME_CLOSE = 'modalbox-iframe-close';
VXPayMessage.TYPE_IFRAME_READY = 'modalbox-iframe-ready';
VXPayMessage.TYPE_VIEW_READY = 'modalbox-view-ready';
VXPayMessage.TYPE_TRANSFER_TOKEN = 'modalbox-transfer-token';
VXPayMessage.TYPE_CONTENT_LOADED = 'modalbox-content-loaded';
VXPayMessage.TYPE_INIT_SESSION = 'modalbox-init-session';
VXPayMessage.TYPE_UPDATE_PARAMS = 'modalbox-update-params';
VXPayMessage.TYPE_IS_VISIBLE = 'modalbox-is-visible';
VXPayMessage.TYPE_ADDITIONAL_INFO = 'modalbox-additional-info';
VXPayMessage.TYPE_CHANGE_ROUTE = 'modalbox-change-route';
VXPayMessage.TYPE_HAS_LOGIN_COOKIE = 'modalbox-response-hasLoginCookie';
VXPayMessage.TYPE_IS_LOGGED_IN = 'modalbox-response-isLoggedIn';
VXPayMessage.TYPE_AVS_STATUS = 'modalbox-response-getavsstatus';
VXPayMessage.TYPE_BALANCE = 'modalbox-response-getbalance';
VXPayMessage.TYPE_ACTIVE_ABOS = 'modalbox-response-getactiveabos';
VXPayMessage.TYPE_LOGGED_OUT = 'modalbox-response-logout';
VXPayMessage.TYPE_ACTION_GET_ACTIVE_ABOS = 'modalbox-action-getactiveabos';
VXPayMessage.TYPE_ACTION_LOGOUT = 'modalbox-action-logout';
VXPayMessage.TYPE_ACTION_GET_AVS_STATUS = 'modalbox-action-getavsstatus';
VXPayMessage.TYPE_ACTION_IS_LOGGED_IN = 'modalbox-action-isLoggedIn';
VXPayMessage.TYPE_ACTION_GET_BALANCE = 'modalbox-action-getbalance';
VXPayMessage.TRANSFER_TOKEN_PREFIX = 'transfer_token:';
/* harmony default export */ var VXPay_VXPayMessage = (VXPayMessage);
// CONCATENATED MODULE: ./src/VXPay/Message/VXPayHasSessionCookieMessage.js
function VXPayHasSessionCookieMessage_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { VXPayHasSessionCookieMessage_typeof = function _typeof(obj) { return typeof obj; }; } else { VXPayHasSessionCookieMessage_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return VXPayHasSessionCookieMessage_typeof(obj); }

function VXPayHasSessionCookieMessage_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function VXPayHasSessionCookieMessage_possibleConstructorReturn(self, call) { if (call && (VXPayHasSessionCookieMessage_typeof(call) === "object" || typeof call === "function")) { return call; } return VXPayHasSessionCookieMessage_assertThisInitialized(self); }

function VXPayHasSessionCookieMessage_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function VXPayHasSessionCookieMessage_getPrototypeOf(o) { VXPayHasSessionCookieMessage_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return VXPayHasSessionCookieMessage_getPrototypeOf(o); }

function VXPayHasSessionCookieMessage_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) VXPayHasSessionCookieMessage_setPrototypeOf(subClass, superClass); }

function VXPayHasSessionCookieMessage_setPrototypeOf(o, p) { VXPayHasSessionCookieMessage_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return VXPayHasSessionCookieMessage_setPrototypeOf(o, p); }



var VXPayHasSessionCookieMessage_VXPayHasSessionCookieMessage =
/*#__PURE__*/
function (_VXPayMessage) {
  VXPayHasSessionCookieMessage_inherits(VXPayHasSessionCookieMessage, _VXPayMessage);

  /**
   * @param {Boolean} hasCookie
   */
  function VXPayHasSessionCookieMessage() {
    var _this;

    var hasCookie = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    VXPayHasSessionCookieMessage_classCallCheck(this, VXPayHasSessionCookieMessage);

    _this = VXPayHasSessionCookieMessage_possibleConstructorReturn(this, VXPayHasSessionCookieMessage_getPrototypeOf(VXPayHasSessionCookieMessage).call(this, VXPay_VXPayMessage.TYPE_HAS_LOGIN_COOKIE));
    _this.hasCookie = hasCookie;
    return _this;
  }

  return VXPayHasSessionCookieMessage;
}(VXPay_VXPayMessage);


// CONCATENATED MODULE: ./src/VXPay/Message/VXPayContentLoadedMessage.js
function VXPayContentLoadedMessage_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { VXPayContentLoadedMessage_typeof = function _typeof(obj) { return typeof obj; }; } else { VXPayContentLoadedMessage_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return VXPayContentLoadedMessage_typeof(obj); }

function VXPayContentLoadedMessage_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function VXPayContentLoadedMessage_possibleConstructorReturn(self, call) { if (call && (VXPayContentLoadedMessage_typeof(call) === "object" || typeof call === "function")) { return call; } return VXPayContentLoadedMessage_assertThisInitialized(self); }

function VXPayContentLoadedMessage_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function VXPayContentLoadedMessage_getPrototypeOf(o) { VXPayContentLoadedMessage_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return VXPayContentLoadedMessage_getPrototypeOf(o); }

function VXPayContentLoadedMessage_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) VXPayContentLoadedMessage_setPrototypeOf(subClass, superClass); }

function VXPayContentLoadedMessage_setPrototypeOf(o, p) { VXPayContentLoadedMessage_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return VXPayContentLoadedMessage_setPrototypeOf(o, p); }



var VXPayContentLoadedMessage_VXPayContentLoadedMessage =
/*#__PURE__*/
function (_VXPayMessage) {
  VXPayContentLoadedMessage_inherits(VXPayContentLoadedMessage, _VXPayMessage);

  function VXPayContentLoadedMessage() {
    VXPayContentLoadedMessage_classCallCheck(this, VXPayContentLoadedMessage);

    return VXPayContentLoadedMessage_possibleConstructorReturn(this, VXPayContentLoadedMessage_getPrototypeOf(VXPayContentLoadedMessage).call(this, VXPay_VXPayMessage.TYPE_CONTENT_LOADED));
  }

  return VXPayContentLoadedMessage;
}(VXPay_VXPayMessage);


// CONCATENATED MODULE: ./src/VXPay/Message/Hooks/VXPayHookMessage.js
function VXPayHookMessage_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { VXPayHookMessage_typeof = function _typeof(obj) { return typeof obj; }; } else { VXPayHookMessage_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return VXPayHookMessage_typeof(obj); }

function VXPayHookMessage_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function VXPayHookMessage_possibleConstructorReturn(self, call) { if (call && (VXPayHookMessage_typeof(call) === "object" || typeof call === "function")) { return call; } return VXPayHookMessage_assertThisInitialized(self); }

function VXPayHookMessage_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function VXPayHookMessage_getPrototypeOf(o) { VXPayHookMessage_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return VXPayHookMessage_getPrototypeOf(o); }

function VXPayHookMessage_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) VXPayHookMessage_setPrototypeOf(subClass, superClass); }

function VXPayHookMessage_setPrototypeOf(o, p) { VXPayHookMessage_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return VXPayHookMessage_setPrototypeOf(o, p); }



var VXPayHookMessage_VXPayHookMessage =
/*#__PURE__*/
function (_VXPayMessage) {
  VXPayHookMessage_inherits(VXPayHookMessage, _VXPayMessage);

  /**
   * @param {string} hook
   */
  function VXPayHookMessage() {
    var _this;

    var hook = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : VXPayHookMessage.HOOK_UNKNOWN;

    VXPayHookMessage_classCallCheck(this, VXPayHookMessage);

    _this = VXPayHookMessage_possibleConstructorReturn(this, VXPayHookMessage_getPrototypeOf(VXPayHookMessage).call(this, VXPay_VXPayMessage.TYPE_HOOK));
    _this.hook = hook;
    return _this;
  }

  return VXPayHookMessage;
}(VXPay_VXPayMessage);

VXPayHookMessage_VXPayHookMessage.HOOK_UNKNOWN = 'dummy-unknown';
VXPayHookMessage_VXPayHookMessage.HOOK_FLOW_CHANGED = 'flowChanged';
VXPayHookMessage_VXPayHookMessage.HOOK_LOGIN = 'login';
VXPayHookMessage_VXPayHookMessage.HOOK_PAYMENT = 'payment';
VXPayHookMessage_VXPayHookMessage.HOOK_SIGNUP = 'signup';
VXPayHookMessage_VXPayHookMessage.HOOK_COMFORT_SETTINGS_CHANGED = 'comfortSettingsChanged';
VXPayHookMessage_VXPayHookMessage.HOOK_EMAIL_VERIFIED = 'emailVerified';
VXPayHookMessage_VXPayHookMessage.HOOK_EMAIL_NOT_VERIFIED = 'emailNotVerified';
VXPayHookMessage_VXPayHookMessage.HOOK_PASSWORD_CHANGED = 'passwordChanged';
/* harmony default export */ var Hooks_VXPayHookMessage = (VXPayHookMessage_VXPayHookMessage);
// CONCATENATED MODULE: ./src/VXPay/Message/Hooks/VXPayFlowChangedMessage.js
function VXPayFlowChangedMessage_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { VXPayFlowChangedMessage_typeof = function _typeof(obj) { return typeof obj; }; } else { VXPayFlowChangedMessage_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return VXPayFlowChangedMessage_typeof(obj); }

function VXPayFlowChangedMessage_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function VXPayFlowChangedMessage_possibleConstructorReturn(self, call) { if (call && (VXPayFlowChangedMessage_typeof(call) === "object" || typeof call === "function")) { return call; } return VXPayFlowChangedMessage_assertThisInitialized(self); }

function VXPayFlowChangedMessage_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function VXPayFlowChangedMessage_getPrototypeOf(o) { VXPayFlowChangedMessage_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return VXPayFlowChangedMessage_getPrototypeOf(o); }

function VXPayFlowChangedMessage_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) VXPayFlowChangedMessage_setPrototypeOf(subClass, superClass); }

function VXPayFlowChangedMessage_setPrototypeOf(o, p) { VXPayFlowChangedMessage_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return VXPayFlowChangedMessage_setPrototypeOf(o, p); }



var VXPayFlowChangedMessage_VXPayFlowChangedHookMessage =
/*#__PURE__*/
function (_VXPayHookMessage) {
  VXPayFlowChangedMessage_inherits(VXPayFlowChangedHookMessage, _VXPayHookMessage);

  /**
   * @param {string} oldFlow
   * @param {string} newFlow
   */
  function VXPayFlowChangedHookMessage() {
    var _this;

    var oldFlow = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var newFlow = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

    VXPayFlowChangedMessage_classCallCheck(this, VXPayFlowChangedHookMessage);

    _this = VXPayFlowChangedMessage_possibleConstructorReturn(this, VXPayFlowChangedMessage_getPrototypeOf(VXPayFlowChangedHookMessage).call(this, Hooks_VXPayHookMessage.HOOK_FLOW_CHANGED));
    _this.oldFlow = oldFlow;
    _this.newFlow = newFlow;
    return _this;
  }

  return VXPayFlowChangedHookMessage;
}(Hooks_VXPayHookMessage);


// CONCATENATED MODULE: ./src/VXPay/Message/Hooks/VXPayLoggedInMessage.js
function VXPayLoggedInMessage_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { VXPayLoggedInMessage_typeof = function _typeof(obj) { return typeof obj; }; } else { VXPayLoggedInMessage_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return VXPayLoggedInMessage_typeof(obj); }

function VXPayLoggedInMessage_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function VXPayLoggedInMessage_possibleConstructorReturn(self, call) { if (call && (VXPayLoggedInMessage_typeof(call) === "object" || typeof call === "function")) { return call; } return VXPayLoggedInMessage_assertThisInitialized(self); }

function VXPayLoggedInMessage_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function VXPayLoggedInMessage_getPrototypeOf(o) { VXPayLoggedInMessage_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return VXPayLoggedInMessage_getPrototypeOf(o); }

function VXPayLoggedInMessage_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) VXPayLoggedInMessage_setPrototypeOf(subClass, superClass); }

function VXPayLoggedInMessage_setPrototypeOf(o, p) { VXPayLoggedInMessage_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return VXPayLoggedInMessage_setPrototypeOf(o, p); }



var VXPayLoggedInMessage_VXPayLoggedInMessage =
/*#__PURE__*/
function (_VXPayHookMessage) {
  VXPayLoggedInMessage_inherits(VXPayLoggedInMessage, _VXPayHookMessage);

  function VXPayLoggedInMessage() {
    VXPayLoggedInMessage_classCallCheck(this, VXPayLoggedInMessage);

    return VXPayLoggedInMessage_possibleConstructorReturn(this, VXPayLoggedInMessage_getPrototypeOf(VXPayLoggedInMessage).call(this, Hooks_VXPayHookMessage.HOOK_LOGIN));
  }

  return VXPayLoggedInMessage;
}(Hooks_VXPayHookMessage);


// CONCATENATED MODULE: ./src/VXPay/Message/Hooks/VXPayHookPaymentMessage.js
function VXPayHookPaymentMessage_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { VXPayHookPaymentMessage_typeof = function _typeof(obj) { return typeof obj; }; } else { VXPayHookPaymentMessage_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return VXPayHookPaymentMessage_typeof(obj); }

function VXPayHookPaymentMessage_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function VXPayHookPaymentMessage_possibleConstructorReturn(self, call) { if (call && (VXPayHookPaymentMessage_typeof(call) === "object" || typeof call === "function")) { return call; } return VXPayHookPaymentMessage_assertThisInitialized(self); }

function VXPayHookPaymentMessage_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function VXPayHookPaymentMessage_getPrototypeOf(o) { VXPayHookPaymentMessage_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return VXPayHookPaymentMessage_getPrototypeOf(o); }

function VXPayHookPaymentMessage_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) VXPayHookPaymentMessage_setPrototypeOf(subClass, superClass); }

function VXPayHookPaymentMessage_setPrototypeOf(o, p) { VXPayHookPaymentMessage_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return VXPayHookPaymentMessage_setPrototypeOf(o, p); }



var VXPayHookPaymentMessage_VXPayHookPaymentMessage =
/*#__PURE__*/
function (_VXPayHookMessage) {
  VXPayHookPaymentMessage_inherits(VXPayHookPaymentMessage, _VXPayHookMessage);

  function VXPayHookPaymentMessage() {
    VXPayHookPaymentMessage_classCallCheck(this, VXPayHookPaymentMessage);

    return VXPayHookPaymentMessage_possibleConstructorReturn(this, VXPayHookPaymentMessage_getPrototypeOf(VXPayHookPaymentMessage).call(this, Hooks_VXPayHookMessage.HOOK_PAYMENT));
  }

  return VXPayHookPaymentMessage;
}(Hooks_VXPayHookMessage);


// CONCATENATED MODULE: ./src/VXPay/Message/Hooks/VXPayHookSignupMessage.js
function VXPayHookSignupMessage_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { VXPayHookSignupMessage_typeof = function _typeof(obj) { return typeof obj; }; } else { VXPayHookSignupMessage_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return VXPayHookSignupMessage_typeof(obj); }

function VXPayHookSignupMessage_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function VXPayHookSignupMessage_possibleConstructorReturn(self, call) { if (call && (VXPayHookSignupMessage_typeof(call) === "object" || typeof call === "function")) { return call; } return VXPayHookSignupMessage_assertThisInitialized(self); }

function VXPayHookSignupMessage_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function VXPayHookSignupMessage_getPrototypeOf(o) { VXPayHookSignupMessage_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return VXPayHookSignupMessage_getPrototypeOf(o); }

function VXPayHookSignupMessage_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) VXPayHookSignupMessage_setPrototypeOf(subClass, superClass); }

function VXPayHookSignupMessage_setPrototypeOf(o, p) { VXPayHookSignupMessage_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return VXPayHookSignupMessage_setPrototypeOf(o, p); }



var VXPayHookSignupMessage_VXPayHookSignupMessage =
/*#__PURE__*/
function (_VXPayHookMessage) {
  VXPayHookSignupMessage_inherits(VXPayHookSignupMessage, _VXPayHookMessage);

  function VXPayHookSignupMessage() {
    VXPayHookSignupMessage_classCallCheck(this, VXPayHookSignupMessage);

    return VXPayHookSignupMessage_possibleConstructorReturn(this, VXPayHookSignupMessage_getPrototypeOf(VXPayHookSignupMessage).call(this, Hooks_VXPayHookMessage.HOOK_SIGNUP));
  }

  return VXPayHookSignupMessage;
}(Hooks_VXPayHookMessage);


// CONCATENATED MODULE: ./src/VXPay/Message/Hooks/VXPayHookComfortSettingsChangedMessage.js
function VXPayHookComfortSettingsChangedMessage_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { VXPayHookComfortSettingsChangedMessage_typeof = function _typeof(obj) { return typeof obj; }; } else { VXPayHookComfortSettingsChangedMessage_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return VXPayHookComfortSettingsChangedMessage_typeof(obj); }

function VXPayHookComfortSettingsChangedMessage_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function VXPayHookComfortSettingsChangedMessage_possibleConstructorReturn(self, call) { if (call && (VXPayHookComfortSettingsChangedMessage_typeof(call) === "object" || typeof call === "function")) { return call; } return VXPayHookComfortSettingsChangedMessage_assertThisInitialized(self); }

function VXPayHookComfortSettingsChangedMessage_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function VXPayHookComfortSettingsChangedMessage_getPrototypeOf(o) { VXPayHookComfortSettingsChangedMessage_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return VXPayHookComfortSettingsChangedMessage_getPrototypeOf(o); }

function VXPayHookComfortSettingsChangedMessage_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) VXPayHookComfortSettingsChangedMessage_setPrototypeOf(subClass, superClass); }

function VXPayHookComfortSettingsChangedMessage_setPrototypeOf(o, p) { VXPayHookComfortSettingsChangedMessage_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return VXPayHookComfortSettingsChangedMessage_setPrototypeOf(o, p); }



var VXPayHookComfortSettingsChangedMessage_VXPayHookComfortSettingsChangedMessage =
/*#__PURE__*/
function (_VXPayHookMessage) {
  VXPayHookComfortSettingsChangedMessage_inherits(VXPayHookComfortSettingsChangedMessage, _VXPayHookMessage);

  function VXPayHookComfortSettingsChangedMessage() {
    VXPayHookComfortSettingsChangedMessage_classCallCheck(this, VXPayHookComfortSettingsChangedMessage);

    return VXPayHookComfortSettingsChangedMessage_possibleConstructorReturn(this, VXPayHookComfortSettingsChangedMessage_getPrototypeOf(VXPayHookComfortSettingsChangedMessage).call(this, Hooks_VXPayHookMessage.HOOK_COMFORT_SETTINGS_CHANGED));
  }

  return VXPayHookComfortSettingsChangedMessage;
}(Hooks_VXPayHookMessage);


// CONCATENATED MODULE: ./src/VXPay/Message/Hooks/VXPayHookEmailVerifiedMessage.js
function VXPayHookEmailVerifiedMessage_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { VXPayHookEmailVerifiedMessage_typeof = function _typeof(obj) { return typeof obj; }; } else { VXPayHookEmailVerifiedMessage_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return VXPayHookEmailVerifiedMessage_typeof(obj); }

function VXPayHookEmailVerifiedMessage_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function VXPayHookEmailVerifiedMessage_possibleConstructorReturn(self, call) { if (call && (VXPayHookEmailVerifiedMessage_typeof(call) === "object" || typeof call === "function")) { return call; } return VXPayHookEmailVerifiedMessage_assertThisInitialized(self); }

function VXPayHookEmailVerifiedMessage_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function VXPayHookEmailVerifiedMessage_getPrototypeOf(o) { VXPayHookEmailVerifiedMessage_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return VXPayHookEmailVerifiedMessage_getPrototypeOf(o); }

function VXPayHookEmailVerifiedMessage_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) VXPayHookEmailVerifiedMessage_setPrototypeOf(subClass, superClass); }

function VXPayHookEmailVerifiedMessage_setPrototypeOf(o, p) { VXPayHookEmailVerifiedMessage_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return VXPayHookEmailVerifiedMessage_setPrototypeOf(o, p); }



var VXPayHookEmailVerifiedMessage_VXPayHookEmailVerifiedMessage =
/*#__PURE__*/
function (_VXPayHookMessage) {
  VXPayHookEmailVerifiedMessage_inherits(VXPayHookEmailVerifiedMessage, _VXPayHookMessage);

  function VXPayHookEmailVerifiedMessage() {
    VXPayHookEmailVerifiedMessage_classCallCheck(this, VXPayHookEmailVerifiedMessage);

    return VXPayHookEmailVerifiedMessage_possibleConstructorReturn(this, VXPayHookEmailVerifiedMessage_getPrototypeOf(VXPayHookEmailVerifiedMessage).call(this, Hooks_VXPayHookMessage.HOOK_EMAIL_VERIFIED));
  }

  return VXPayHookEmailVerifiedMessage;
}(Hooks_VXPayHookMessage);


// CONCATENATED MODULE: ./src/VXPay/Message/Hooks/VXPayHookEmailNotVerifiedMessage.js
function VXPayHookEmailNotVerifiedMessage_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { VXPayHookEmailNotVerifiedMessage_typeof = function _typeof(obj) { return typeof obj; }; } else { VXPayHookEmailNotVerifiedMessage_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return VXPayHookEmailNotVerifiedMessage_typeof(obj); }

function VXPayHookEmailNotVerifiedMessage_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function VXPayHookEmailNotVerifiedMessage_possibleConstructorReturn(self, call) { if (call && (VXPayHookEmailNotVerifiedMessage_typeof(call) === "object" || typeof call === "function")) { return call; } return VXPayHookEmailNotVerifiedMessage_assertThisInitialized(self); }

function VXPayHookEmailNotVerifiedMessage_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function VXPayHookEmailNotVerifiedMessage_getPrototypeOf(o) { VXPayHookEmailNotVerifiedMessage_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return VXPayHookEmailNotVerifiedMessage_getPrototypeOf(o); }

function VXPayHookEmailNotVerifiedMessage_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) VXPayHookEmailNotVerifiedMessage_setPrototypeOf(subClass, superClass); }

function VXPayHookEmailNotVerifiedMessage_setPrototypeOf(o, p) { VXPayHookEmailNotVerifiedMessage_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return VXPayHookEmailNotVerifiedMessage_setPrototypeOf(o, p); }



var VXPayHookEmailNotVerifiedMessage_VXPayHookEmailNotVerifiedMessage =
/*#__PURE__*/
function (_VXPayHookMessage) {
  VXPayHookEmailNotVerifiedMessage_inherits(VXPayHookEmailNotVerifiedMessage, _VXPayHookMessage);

  function VXPayHookEmailNotVerifiedMessage() {
    VXPayHookEmailNotVerifiedMessage_classCallCheck(this, VXPayHookEmailNotVerifiedMessage);

    return VXPayHookEmailNotVerifiedMessage_possibleConstructorReturn(this, VXPayHookEmailNotVerifiedMessage_getPrototypeOf(VXPayHookEmailNotVerifiedMessage).call(this, Hooks_VXPayHookMessage.HOOK_EMAIL_NOT_VERIFIED));
  }

  return VXPayHookEmailNotVerifiedMessage;
}(Hooks_VXPayHookMessage);


// CONCATENATED MODULE: ./src/VXPay/Message/Hooks/VXPayHookPasswordChangedMessage.js
function VXPayHookPasswordChangedMessage_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { VXPayHookPasswordChangedMessage_typeof = function _typeof(obj) { return typeof obj; }; } else { VXPayHookPasswordChangedMessage_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return VXPayHookPasswordChangedMessage_typeof(obj); }

function VXPayHookPasswordChangedMessage_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function VXPayHookPasswordChangedMessage_possibleConstructorReturn(self, call) { if (call && (VXPayHookPasswordChangedMessage_typeof(call) === "object" || typeof call === "function")) { return call; } return VXPayHookPasswordChangedMessage_assertThisInitialized(self); }

function VXPayHookPasswordChangedMessage_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function VXPayHookPasswordChangedMessage_getPrototypeOf(o) { VXPayHookPasswordChangedMessage_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return VXPayHookPasswordChangedMessage_getPrototypeOf(o); }

function VXPayHookPasswordChangedMessage_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) VXPayHookPasswordChangedMessage_setPrototypeOf(subClass, superClass); }

function VXPayHookPasswordChangedMessage_setPrototypeOf(o, p) { VXPayHookPasswordChangedMessage_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return VXPayHookPasswordChangedMessage_setPrototypeOf(o, p); }



var VXPayHookPasswordChangedMessage_VXPayHookPasswordChangedMessage =
/*#__PURE__*/
function (_VXPayHookMessage) {
  VXPayHookPasswordChangedMessage_inherits(VXPayHookPasswordChangedMessage, _VXPayHookMessage);

  function VXPayHookPasswordChangedMessage() {
    VXPayHookPasswordChangedMessage_classCallCheck(this, VXPayHookPasswordChangedMessage);

    return VXPayHookPasswordChangedMessage_possibleConstructorReturn(this, VXPayHookPasswordChangedMessage_getPrototypeOf(VXPayHookPasswordChangedMessage).call(this, Hooks_VXPayHookMessage.HOOK_PASSWORD_CHANGED));
  }

  return VXPayHookPasswordChangedMessage;
}(Hooks_VXPayHookMessage);


// CONCATENATED MODULE: ./src/VXPay/Message/Hooks/VXPayHookMessageFactory.js
function VXPayHookMessageFactory_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function VXPayHookMessageFactory_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function VXPayHookMessageFactory_createClass(Constructor, protoProps, staticProps) { if (protoProps) VXPayHookMessageFactory_defineProperties(Constructor.prototype, protoProps); if (staticProps) VXPayHookMessageFactory_defineProperties(Constructor, staticProps); return Constructor; }











var VXPayHookMessageFactory_VXPayHookMessageFactory =
/*#__PURE__*/
function () {
  function VXPayHookMessageFactory() {
    VXPayHookMessageFactory_classCallCheck(this, VXPayHookMessageFactory);
  }

  VXPayHookMessageFactory_createClass(VXPayHookMessageFactory, null, [{
    key: "fromData",

    /**
     * @param data
     * @return {VXPayHookMessage}
     */
    value: function fromData() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (typeof data === 'undefined' || !data.hasOwnProperty('hook')) {
        throw new TypeError('Invalid message format - no hook field');
      }

      switch (data.hook) {
        case Hooks_VXPayHookMessage.HOOK_FLOW_CHANGED:
          return new VXPayFlowChangedMessage_VXPayFlowChangedHookMessage(data.prevFlow, data.flow);

        case Hooks_VXPayHookMessage.HOOK_LOGIN:
          return new VXPayLoggedInMessage_VXPayLoggedInMessage();

        case Hooks_VXPayHookMessage.HOOK_PAYMENT:
          return new VXPayHookPaymentMessage_VXPayHookPaymentMessage();

        case Hooks_VXPayHookMessage.HOOK_SIGNUP:
          return new VXPayHookSignupMessage_VXPayHookSignupMessage();

        case Hooks_VXPayHookMessage.HOOK_COMFORT_SETTINGS_CHANGED:
          return new VXPayHookComfortSettingsChangedMessage_VXPayHookComfortSettingsChangedMessage();

        case Hooks_VXPayHookMessage.HOOK_EMAIL_VERIFIED:
          return new VXPayHookEmailVerifiedMessage_VXPayHookEmailVerifiedMessage();

        case Hooks_VXPayHookMessage.HOOK_EMAIL_NOT_VERIFIED:
          return new VXPayHookEmailNotVerifiedMessage_VXPayHookEmailNotVerifiedMessage();

        case Hooks_VXPayHookMessage.HOOK_PASSWORD_CHANGED:
          return new VXPayHookPasswordChangedMessage_VXPayHookPasswordChangedMessage();

        default:
          return new Hooks_VXPayHookMessage();
      }
    }
  }]);

  return VXPayHookMessageFactory;
}();


// CONCATENATED MODULE: ./src/VXPay/Message/VXPayIframeReadyMessage.js
function VXPayIframeReadyMessage_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { VXPayIframeReadyMessage_typeof = function _typeof(obj) { return typeof obj; }; } else { VXPayIframeReadyMessage_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return VXPayIframeReadyMessage_typeof(obj); }

function VXPayIframeReadyMessage_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function VXPayIframeReadyMessage_possibleConstructorReturn(self, call) { if (call && (VXPayIframeReadyMessage_typeof(call) === "object" || typeof call === "function")) { return call; } return VXPayIframeReadyMessage_assertThisInitialized(self); }

function VXPayIframeReadyMessage_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function VXPayIframeReadyMessage_getPrototypeOf(o) { VXPayIframeReadyMessage_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return VXPayIframeReadyMessage_getPrototypeOf(o); }

function VXPayIframeReadyMessage_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) VXPayIframeReadyMessage_setPrototypeOf(subClass, superClass); }

function VXPayIframeReadyMessage_setPrototypeOf(o, p) { VXPayIframeReadyMessage_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return VXPayIframeReadyMessage_setPrototypeOf(o, p); }



var VXPayIframeReadyMessage_VXPayIframeReadyMessage =
/*#__PURE__*/
function (_VXPayMessage) {
  VXPayIframeReadyMessage_inherits(VXPayIframeReadyMessage, _VXPayMessage);

  function VXPayIframeReadyMessage() {
    VXPayIframeReadyMessage_classCallCheck(this, VXPayIframeReadyMessage);

    return VXPayIframeReadyMessage_possibleConstructorReturn(this, VXPayIframeReadyMessage_getPrototypeOf(VXPayIframeReadyMessage).call(this, VXPay_VXPayMessage.TYPE_IFRAME_READY));
  }

  return VXPayIframeReadyMessage;
}(VXPay_VXPayMessage);


// CONCATENATED MODULE: ./src/VXPay/Message/VXPayViewReadyMessage.js
function VXPayViewReadyMessage_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { VXPayViewReadyMessage_typeof = function _typeof(obj) { return typeof obj; }; } else { VXPayViewReadyMessage_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return VXPayViewReadyMessage_typeof(obj); }

function VXPayViewReadyMessage_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function VXPayViewReadyMessage_possibleConstructorReturn(self, call) { if (call && (VXPayViewReadyMessage_typeof(call) === "object" || typeof call === "function")) { return call; } return VXPayViewReadyMessage_assertThisInitialized(self); }

function VXPayViewReadyMessage_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function VXPayViewReadyMessage_getPrototypeOf(o) { VXPayViewReadyMessage_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return VXPayViewReadyMessage_getPrototypeOf(o); }

function VXPayViewReadyMessage_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) VXPayViewReadyMessage_setPrototypeOf(subClass, superClass); }

function VXPayViewReadyMessage_setPrototypeOf(o, p) { VXPayViewReadyMessage_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return VXPayViewReadyMessage_setPrototypeOf(o, p); }



var VXPayViewReadyMessage_VXPayViewReadyMessage =
/*#__PURE__*/
function (_VXPayMessage) {
  VXPayViewReadyMessage_inherits(VXPayViewReadyMessage, _VXPayMessage);

  function VXPayViewReadyMessage() {
    VXPayViewReadyMessage_classCallCheck(this, VXPayViewReadyMessage);

    return VXPayViewReadyMessage_possibleConstructorReturn(this, VXPayViewReadyMessage_getPrototypeOf(VXPayViewReadyMessage).call(this, VXPay_VXPayMessage.TYPE_VIEW_READY));
  }

  return VXPayViewReadyMessage;
}(VXPay_VXPayMessage);


// CONCATENATED MODULE: ./src/VXPay/Message/VXPayTransferTokenMessage.js
function VXPayTransferTokenMessage_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { VXPayTransferTokenMessage_typeof = function _typeof(obj) { return typeof obj; }; } else { VXPayTransferTokenMessage_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return VXPayTransferTokenMessage_typeof(obj); }

function VXPayTransferTokenMessage_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function VXPayTransferTokenMessage_possibleConstructorReturn(self, call) { if (call && (VXPayTransferTokenMessage_typeof(call) === "object" || typeof call === "function")) { return call; } return VXPayTransferTokenMessage_assertThisInitialized(self); }

function VXPayTransferTokenMessage_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function VXPayTransferTokenMessage_getPrototypeOf(o) { VXPayTransferTokenMessage_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return VXPayTransferTokenMessage_getPrototypeOf(o); }

function VXPayTransferTokenMessage_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) VXPayTransferTokenMessage_setPrototypeOf(subClass, superClass); }

function VXPayTransferTokenMessage_setPrototypeOf(o, p) { VXPayTransferTokenMessage_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return VXPayTransferTokenMessage_setPrototypeOf(o, p); }



var VXPayTransferTokenMessage_VXPayTransferTokenMessage =
/*#__PURE__*/
function (_VXPayMessage) {
  VXPayTransferTokenMessage_inherits(VXPayTransferTokenMessage, _VXPayMessage);

  /**
   * @param {String} token
   */
  function VXPayTransferTokenMessage(token) {
    var _this;

    VXPayTransferTokenMessage_classCallCheck(this, VXPayTransferTokenMessage);

    _this = VXPayTransferTokenMessage_possibleConstructorReturn(this, VXPayTransferTokenMessage_getPrototypeOf(VXPayTransferTokenMessage).call(this, VXPay_VXPayMessage.TYPE_TRANSFER_TOKEN));
    _this.token = token;
    return _this;
  }

  return VXPayTransferTokenMessage;
}(VXPay_VXPayMessage);


// CONCATENATED MODULE: ./src/VXPay/Message/VXPayIframeCloseMessage.js
function VXPayIframeCloseMessage_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { VXPayIframeCloseMessage_typeof = function _typeof(obj) { return typeof obj; }; } else { VXPayIframeCloseMessage_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return VXPayIframeCloseMessage_typeof(obj); }

function VXPayIframeCloseMessage_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function VXPayIframeCloseMessage_possibleConstructorReturn(self, call) { if (call && (VXPayIframeCloseMessage_typeof(call) === "object" || typeof call === "function")) { return call; } return VXPayIframeCloseMessage_assertThisInitialized(self); }

function VXPayIframeCloseMessage_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function VXPayIframeCloseMessage_getPrototypeOf(o) { VXPayIframeCloseMessage_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return VXPayIframeCloseMessage_getPrototypeOf(o); }

function VXPayIframeCloseMessage_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) VXPayIframeCloseMessage_setPrototypeOf(subClass, superClass); }

function VXPayIframeCloseMessage_setPrototypeOf(o, p) { VXPayIframeCloseMessage_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return VXPayIframeCloseMessage_setPrototypeOf(o, p); }



var VXPayIframeCloseMessage_VXPayIframeCloseMessage =
/*#__PURE__*/
function (_VXPayMessage) {
  VXPayIframeCloseMessage_inherits(VXPayIframeCloseMessage, _VXPayMessage);

  /**
   * @param {Object} data
   */
  function VXPayIframeCloseMessage() {
    var _this;

    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    VXPayIframeCloseMessage_classCallCheck(this, VXPayIframeCloseMessage);

    _this = VXPayIframeCloseMessage_possibleConstructorReturn(this, VXPayIframeCloseMessage_getPrototypeOf(VXPayIframeCloseMessage).call(this, VXPay_VXPayMessage.TYPE_IFRAME_CLOSE));
    _this.data = data;
    return _this;
  }

  return VXPayIframeCloseMessage;
}(VXPay_VXPayMessage);


// CONCATENATED MODULE: ./src/VXPay/Message/VXPayIsVisibleMessage.js
function VXPayIsVisibleMessage_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { VXPayIsVisibleMessage_typeof = function _typeof(obj) { return typeof obj; }; } else { VXPayIsVisibleMessage_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return VXPayIsVisibleMessage_typeof(obj); }

function VXPayIsVisibleMessage_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function VXPayIsVisibleMessage_possibleConstructorReturn(self, call) { if (call && (VXPayIsVisibleMessage_typeof(call) === "object" || typeof call === "function")) { return call; } return VXPayIsVisibleMessage_assertThisInitialized(self); }

function VXPayIsVisibleMessage_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function VXPayIsVisibleMessage_getPrototypeOf(o) { VXPayIsVisibleMessage_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return VXPayIsVisibleMessage_getPrototypeOf(o); }

function VXPayIsVisibleMessage_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) VXPayIsVisibleMessage_setPrototypeOf(subClass, superClass); }

function VXPayIsVisibleMessage_setPrototypeOf(o, p) { VXPayIsVisibleMessage_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return VXPayIsVisibleMessage_setPrototypeOf(o, p); }



var VXPayIsVisibleMessage_VXPayIsVisibleMessage =
/*#__PURE__*/
function (_VXPayMessage) {
  VXPayIsVisibleMessage_inherits(VXPayIsVisibleMessage, _VXPayMessage);

  /** {@inheritDoc} */
  function VXPayIsVisibleMessage() {
    VXPayIsVisibleMessage_classCallCheck(this, VXPayIsVisibleMessage);

    return VXPayIsVisibleMessage_possibleConstructorReturn(this, VXPayIsVisibleMessage_getPrototypeOf(VXPayIsVisibleMessage).call(this, VXPay_VXPayMessage.TYPE_IS_VISIBLE));
  }

  return VXPayIsVisibleMessage;
}(VXPay_VXPayMessage);


// CONCATENATED MODULE: ./src/VXPay/Config/VXPayUser.js
function VXPayUser_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function VXPayUser_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function VXPayUser_createClass(Constructor, protoProps, staticProps) { if (protoProps) VXPayUser_defineProperties(Constructor.prototype, protoProps); if (staticProps) VXPayUser_defineProperties(Constructor, staticProps); return Constructor; }

var VXPayUser =
/*#__PURE__*/
function () {
  function VXPayUser() {
    VXPayUser_classCallCheck(this, VXPayUser);

    this._balance = NaN;
    this._fsk18 = false;
    this._nickname = '';
    this._userId = NaN;
    this._uhash = '';
  }
  /**
   * @return {Number|NaN}
   */


  VXPayUser_createClass(VXPayUser, [{
    key: "balance",
    get: function get() {
      return this._balance;
    }
    /**
     * @param {Number} value
     */
    ,
    set: function set(value) {
      this._balance = value;
    }
    /**
     * @return {Boolean}
     */

  }, {
    key: "fsk18",
    get: function get() {
      return this._fsk18;
    }
    /**
     * @param {Boolean} value
     */
    ,
    set: function set(value) {
      this._fsk18 = value;
    }
    /**
     * @return {String}
     */

  }, {
    key: "nickname",
    get: function get() {
      return this._nickname;
    }
    /**
     * @param {String} value
     */
    ,
    set: function set(value) {
      this._nickname = value;
    }
    /**
     * @return {Number|NaN}
     */

  }, {
    key: "userId",
    get: function get() {
      return this._userId;
    }
    /**
     * @param {Number} value
     */
    ,
    set: function set(value) {
      this._userId = value;
    }
    /**
     * @return {String}
     */

  }, {
    key: "uhash",
    get: function get() {
      return this._uhash;
    }
    /**
     * @param {String} value
     */
    ,
    set: function set(value) {
      this._uhash = value;
    }
  }]);

  return VXPayUser;
}();

/* harmony default export */ var Config_VXPayUser = (VXPayUser);
// CONCATENATED MODULE: ./src/VXPay/Message/VXPaySuccessMessage.js
function VXPaySuccessMessage_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { VXPaySuccessMessage_typeof = function _typeof(obj) { return typeof obj; }; } else { VXPaySuccessMessage_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return VXPaySuccessMessage_typeof(obj); }

function VXPaySuccessMessage_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function VXPaySuccessMessage_possibleConstructorReturn(self, call) { if (call && (VXPaySuccessMessage_typeof(call) === "object" || typeof call === "function")) { return call; } return VXPaySuccessMessage_assertThisInitialized(self); }

function VXPaySuccessMessage_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function VXPaySuccessMessage_getPrototypeOf(o) { VXPaySuccessMessage_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return VXPaySuccessMessage_getPrototypeOf(o); }

function VXPaySuccessMessage_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) VXPaySuccessMessage_setPrototypeOf(subClass, superClass); }

function VXPaySuccessMessage_setPrototypeOf(o, p) { VXPaySuccessMessage_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return VXPaySuccessMessage_setPrototypeOf(o, p); }




var VXPaySuccessMessage_VXPaySuccessMessage =
/*#__PURE__*/
function (_VXPayMessage) {
  VXPaySuccessMessage_inherits(VXPaySuccessMessage, _VXPayMessage);

  /**
   * @param {Object} data
   */
  function VXPaySuccessMessage() {
    var _this;

    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : VXPaySuccessMessage.USER_DATA_STRUCT;

    VXPaySuccessMessage_classCallCheck(this, VXPaySuccessMessage);

    _this = VXPaySuccessMessage_possibleConstructorReturn(this, VXPaySuccessMessage_getPrototypeOf(VXPaySuccessMessage).call(this, VXPay_VXPayMessage.TYPE_SUCCESS));
    _this.user = new Config_VXPayUser(); // populate user model

    _this.user.balance = data.availableMoney || 0;
    _this.user.nickname = data.screenname || '';
    _this.user.fsk18 = data.fsk18 || false;
    _this.user.userId = data.userId || NaN;
    _this.user.uhash = data.uhash || '';
    return _this;
  }

  return VXPaySuccessMessage;
}(VXPay_VXPayMessage);
/**
 * Sample response data
 * @type {Object}
 */


VXPaySuccessMessage_VXPaySuccessMessage.USER_DATA_STRUCT = {
  'success': true,
  'userFromLogin': false,
  'userFromSignup': false,
  'flow': 'login',
  'hostId': null,
  'screenname': 'user123',
  'userId': 9876789087,
  'isLoggedIn': true,
  'transferToken': 'TT_7a9523c9-5555-4c48-5555-91cc2465f484',
  'availableMoney': 12.34,
  'fsk18': false,
  'uhash': ''
};
/* harmony default export */ var Message_VXPaySuccessMessage = (VXPaySuccessMessage_VXPaySuccessMessage);
// CONCATENATED MODULE: ./src/VXPay/Message/Actions/VXPayIsLoggedInResponseMessage.js
function VXPayIsLoggedInResponseMessage_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { VXPayIsLoggedInResponseMessage_typeof = function _typeof(obj) { return typeof obj; }; } else { VXPayIsLoggedInResponseMessage_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return VXPayIsLoggedInResponseMessage_typeof(obj); }

function VXPayIsLoggedInResponseMessage_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function VXPayIsLoggedInResponseMessage_possibleConstructorReturn(self, call) { if (call && (VXPayIsLoggedInResponseMessage_typeof(call) === "object" || typeof call === "function")) { return call; } return VXPayIsLoggedInResponseMessage_assertThisInitialized(self); }

function VXPayIsLoggedInResponseMessage_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function VXPayIsLoggedInResponseMessage_getPrototypeOf(o) { VXPayIsLoggedInResponseMessage_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return VXPayIsLoggedInResponseMessage_getPrototypeOf(o); }

function VXPayIsLoggedInResponseMessage_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) VXPayIsLoggedInResponseMessage_setPrototypeOf(subClass, superClass); }

function VXPayIsLoggedInResponseMessage_setPrototypeOf(o, p) { VXPayIsLoggedInResponseMessage_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return VXPayIsLoggedInResponseMessage_setPrototypeOf(o, p); }



var VXPayIsLoggedInResponseMessage_VXPayIsLoggedInResponseMessage =
/*#__PURE__*/
function (_VXPayMessage) {
  VXPayIsLoggedInResponseMessage_inherits(VXPayIsLoggedInResponseMessage, _VXPayMessage);

  /**
   * @param {Boolean} loggedIn
   */
  function VXPayIsLoggedInResponseMessage() {
    var _this;

    var loggedIn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    VXPayIsLoggedInResponseMessage_classCallCheck(this, VXPayIsLoggedInResponseMessage);

    _this = VXPayIsLoggedInResponseMessage_possibleConstructorReturn(this, VXPayIsLoggedInResponseMessage_getPrototypeOf(VXPayIsLoggedInResponseMessage).call(this, VXPay_VXPayMessage.TYPE_IS_LOGGED_IN));
    _this.loggedIn = loggedIn;
    return _this;
  }

  return VXPayIsLoggedInResponseMessage;
}(VXPay_VXPayMessage);

/* harmony default export */ var Actions_VXPayIsLoggedInResponseMessage = (VXPayIsLoggedInResponseMessage_VXPayIsLoggedInResponseMessage);
// CONCATENATED MODULE: ./src/VXPay/Model/VXPayAVSStatus.js
function VXPayAVSStatus_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function VXPayAVSStatus_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function VXPayAVSStatus_createClass(Constructor, protoProps, staticProps) { if (protoProps) VXPayAVSStatus_defineProperties(Constructor.prototype, protoProps); if (staticProps) VXPayAVSStatus_defineProperties(Constructor, staticProps); return Constructor; }

var VXPayAVSStatus =
/*#__PURE__*/
function () {
  function VXPayAVSStatus() {
    VXPayAVSStatus_classCallCheck(this, VXPayAVSStatus);

    this._fsk18 = false;
  }
  /**
   * @return {Boolean}
   */


  VXPayAVSStatus_createClass(VXPayAVSStatus, [{
    key: "fsk18",
    get: function get() {
      return this._fsk18;
    }
    /**
     * @param {Boolean} value
     */
    ,
    set: function set(value) {
      this._fsk18 = value;
    }
    /**
     * @param {Object} data
     * @return {VXPayAVSStatus}
     */

  }], [{
    key: "fromData",
    value: function fromData() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var instance = new VXPayAVSStatus();
      instance.fsk18 = data.fsk18 || false;
      return instance;
    }
  }]);

  return VXPayAVSStatus;
}();


// CONCATENATED MODULE: ./src/VXPay/Message/Actions/VXPayAVSStatusMessage.js
function VXPayAVSStatusMessage_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { VXPayAVSStatusMessage_typeof = function _typeof(obj) { return typeof obj; }; } else { VXPayAVSStatusMessage_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return VXPayAVSStatusMessage_typeof(obj); }

function VXPayAVSStatusMessage_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function VXPayAVSStatusMessage_possibleConstructorReturn(self, call) { if (call && (VXPayAVSStatusMessage_typeof(call) === "object" || typeof call === "function")) { return call; } return VXPayAVSStatusMessage_assertThisInitialized(self); }

function VXPayAVSStatusMessage_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function VXPayAVSStatusMessage_getPrototypeOf(o) { VXPayAVSStatusMessage_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return VXPayAVSStatusMessage_getPrototypeOf(o); }

function VXPayAVSStatusMessage_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) VXPayAVSStatusMessage_setPrototypeOf(subClass, superClass); }

function VXPayAVSStatusMessage_setPrototypeOf(o, p) { VXPayAVSStatusMessage_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return VXPayAVSStatusMessage_setPrototypeOf(o, p); }




var VXPayAVSStatusMessage_VXPayAVSStatusMessage =
/*#__PURE__*/
function (_VXPayMessage) {
  VXPayAVSStatusMessage_inherits(VXPayAVSStatusMessage, _VXPayMessage);

  /**
   * @param {VXPayAVSStatus} status
   */
  function VXPayAVSStatusMessage() {
    var _this;

    var status = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new VXPayAVSStatus();

    VXPayAVSStatusMessage_classCallCheck(this, VXPayAVSStatusMessage);

    _this = VXPayAVSStatusMessage_possibleConstructorReturn(this, VXPayAVSStatusMessage_getPrototypeOf(VXPayAVSStatusMessage).call(this, VXPay_VXPayMessage.TYPE_AVS_STATUS));
    _this.status = status;
    return _this;
  }

  return VXPayAVSStatusMessage;
}(VXPay_VXPayMessage);


// CONCATENATED MODULE: ./src/VXPay/Config/VXPayCurrency.js
function VXPayCurrency_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function VXPayCurrency_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function VXPayCurrency_createClass(Constructor, protoProps, staticProps) { if (protoProps) VXPayCurrency_defineProperties(Constructor.prototype, protoProps); if (staticProps) VXPayCurrency_defineProperties(Constructor, staticProps); return Constructor; }

var VXPayCurrency =
/*#__PURE__*/
function () {
  function VXPayCurrency() {
    VXPayCurrency_classCallCheck(this, VXPayCurrency);
  }

  VXPayCurrency_createClass(VXPayCurrency, null, [{
    key: "getDefault",

    /**
     * @return {string}
     */
    value: function getDefault() {
      return VXPayCurrency.EUR;
    }
    /**
     * @return {String[]}
     */

  }, {
    key: "getAllowed",
    value: function getAllowed() {
      return [VXPayCurrency.EUR, VXPayCurrency.USD, VXPayCurrency.CHF];
    }
  }]);

  return VXPayCurrency;
}();

VXPayCurrency.EUR = 'EUR';
VXPayCurrency.USD = 'USD';
VXPayCurrency.CHF = 'CHF';
/* harmony default export */ var Config_VXPayCurrency = (VXPayCurrency);
// CONCATENATED MODULE: ./src/VXPay/Model/VXPayBalance.js
function VXPayBalance_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function VXPayBalance_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function VXPayBalance_createClass(Constructor, protoProps, staticProps) { if (protoProps) VXPayBalance_defineProperties(Constructor.prototype, protoProps); if (staticProps) VXPayBalance_defineProperties(Constructor, staticProps); return Constructor; }



var VXPayBalance_VXPayBalance =
/*#__PURE__*/
function () {
  /**
   * @param {Number} amount
   * @param {String} currency
   */
  function VXPayBalance() {
    var amount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var currency = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Config_VXPayCurrency.EUR;

    VXPayBalance_classCallCheck(this, VXPayBalance);

    this._amount = amount;
    this._currency = currency;
  }
  /**
   * @return {number}
   */


  VXPayBalance_createClass(VXPayBalance, [{
    key: "toString",

    /**
     * @return {string}
     */
    value: function toString() {
      return this._amount.toFixed(2) + ' ' + this._currency;
    }
  }, {
    key: "amount",
    get: function get() {
      return this._amount;
    }
    /**
     * @return {string}
     */

  }, {
    key: "currency",
    get: function get() {
      return this._currency;
    }
  }]);

  return VXPayBalance;
}();

/* harmony default export */ var Model_VXPayBalance = (VXPayBalance_VXPayBalance);
// CONCATENATED MODULE: ./src/VXPay/Message/Actions/VXPayBalanceMessage.js
function VXPayBalanceMessage_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { VXPayBalanceMessage_typeof = function _typeof(obj) { return typeof obj; }; } else { VXPayBalanceMessage_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return VXPayBalanceMessage_typeof(obj); }

function VXPayBalanceMessage_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function VXPayBalanceMessage_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function VXPayBalanceMessage_createClass(Constructor, protoProps, staticProps) { if (protoProps) VXPayBalanceMessage_defineProperties(Constructor.prototype, protoProps); if (staticProps) VXPayBalanceMessage_defineProperties(Constructor, staticProps); return Constructor; }

function VXPayBalanceMessage_possibleConstructorReturn(self, call) { if (call && (VXPayBalanceMessage_typeof(call) === "object" || typeof call === "function")) { return call; } return VXPayBalanceMessage_assertThisInitialized(self); }

function VXPayBalanceMessage_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function VXPayBalanceMessage_getPrototypeOf(o) { VXPayBalanceMessage_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return VXPayBalanceMessage_getPrototypeOf(o); }

function VXPayBalanceMessage_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) VXPayBalanceMessage_setPrototypeOf(subClass, superClass); }

function VXPayBalanceMessage_setPrototypeOf(o, p) { VXPayBalanceMessage_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return VXPayBalanceMessage_setPrototypeOf(o, p); }





var VXPayBalanceMessage_VXPayBalanceMessage =
/*#__PURE__*/
function (_VXPayMessage) {
  VXPayBalanceMessage_inherits(VXPayBalanceMessage, _VXPayMessage);

  function VXPayBalanceMessage() {
    var _this;

    VXPayBalanceMessage_classCallCheck(this, VXPayBalanceMessage);

    _this = VXPayBalanceMessage_possibleConstructorReturn(this, VXPayBalanceMessage_getPrototypeOf(VXPayBalanceMessage).call(this, VXPay_VXPayMessage.TYPE_BALANCE));
    _this.balance = new Model_VXPayBalance();
    return _this;
  }
  /**
   * @param {Object} data
   * @return {VXPayBalanceMessage}
   */


  VXPayBalanceMessage_createClass(VXPayBalanceMessage, null, [{
    key: "fromData",
    value: function fromData() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : VXPayBalanceMessage.SAMPLE_DATA;
      var instance = new VXPayBalanceMessage();
      instance.balance = new Model_VXPayBalance(data.balance, data.currency);
      return instance;
    }
  }]);

  return VXPayBalanceMessage;
}(VXPay_VXPayMessage);

VXPayBalanceMessage_VXPayBalanceMessage.SAMPLE_DATA = {
  balance: 0,
  currency: Config_VXPayCurrency.EUR
};
/* harmony default export */ var Actions_VXPayBalanceMessage = (VXPayBalanceMessage_VXPayBalanceMessage);
// CONCATENATED MODULE: ./src/VXPay/Model/VXPayAbo.js
function VXPayAbo_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function VXPayAbo_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function VXPayAbo_createClass(Constructor, protoProps, staticProps) { if (protoProps) VXPayAbo_defineProperties(Constructor.prototype, protoProps); if (staticProps) VXPayAbo_defineProperties(Constructor, staticProps); return Constructor; }

var VXPayAbo =
/*#__PURE__*/
function () {
  function VXPayAbo() {
    VXPayAbo_classCallCheck(this, VXPayAbo);

    this._amount = 0;
    this._endDate = 0;
    this._isActive = false;
    this._isFreeAbo = false;
    this._isPaidAbo = true;
    this._isTrialAbo = true;
    this._name = '';
  }
  /**
   * @return {Number}
   */


  VXPayAbo_createClass(VXPayAbo, [{
    key: "amount",
    get: function get() {
      return this._amount;
    }
    /**
     * @param {Number} value
     */
    ,
    set: function set(value) {
      this._amount = value;
    }
    /**
     * @return {Number}
     */

  }, {
    key: "endDate",
    get: function get() {
      return this._endDate;
    }
    /**
     * @param {Number} value
     */
    ,
    set: function set(value) {
      this._endDate = value;
    }
    /**
     * @return {Boolean}
     */

  }, {
    key: "isActive",
    get: function get() {
      return this._isActive;
    }
    /**
     * @param {Boolean} value
     */
    ,
    set: function set(value) {
      this._isActive = value;
    }
    /**
     * @return {Boolean}
     */

  }, {
    key: "isFreeAbo",
    get: function get() {
      return this._isFreeAbo;
    }
    /**
     * @param {Boolean} value
     */
    ,
    set: function set(value) {
      this._isFreeAbo = value;
      this._isPaidAbo = !value;
    }
    /**
     * @return {Boolean}
     */

  }, {
    key: "isPaidAbo",
    get: function get() {
      return this._isPaidAbo;
    }
    /**
     * @param {Boolean} value
     */
    ,
    set: function set(value) {
      this._isPaidAbo = value;
      this._isFreeAbo = !value;
    }
    /**
     * @return {Boolean}
     */

  }, {
    key: "isTrialAbo",
    get: function get() {
      return this._isTrialAbo;
    }
    /**
     * @param {Boolean} value
     */
    ,
    set: function set(value) {
      this._isTrialAbo = value;
    }
    /**
     * @return {String}
     */

  }, {
    key: "name",
    get: function get() {
      return this._name;
    }
    /**
     * @param {String} value
     */
    ,
    set: function set(value) {
      this._name = value;
    }
  }]);

  return VXPayAbo;
}();

/* harmony default export */ var Model_VXPayAbo = (VXPayAbo);
// CONCATENATED MODULE: ./src/VXPay/Message/Actions/VXPayActiveAbosMessage.js
function VXPayActiveAbosMessage_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { VXPayActiveAbosMessage_typeof = function _typeof(obj) { return typeof obj; }; } else { VXPayActiveAbosMessage_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return VXPayActiveAbosMessage_typeof(obj); }

function VXPayActiveAbosMessage_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function VXPayActiveAbosMessage_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function VXPayActiveAbosMessage_createClass(Constructor, protoProps, staticProps) { if (protoProps) VXPayActiveAbosMessage_defineProperties(Constructor.prototype, protoProps); if (staticProps) VXPayActiveAbosMessage_defineProperties(Constructor, staticProps); return Constructor; }

function VXPayActiveAbosMessage_possibleConstructorReturn(self, call) { if (call && (VXPayActiveAbosMessage_typeof(call) === "object" || typeof call === "function")) { return call; } return VXPayActiveAbosMessage_assertThisInitialized(self); }

function VXPayActiveAbosMessage_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function VXPayActiveAbosMessage_getPrototypeOf(o) { VXPayActiveAbosMessage_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return VXPayActiveAbosMessage_getPrototypeOf(o); }

function VXPayActiveAbosMessage_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) VXPayActiveAbosMessage_setPrototypeOf(subClass, superClass); }

function VXPayActiveAbosMessage_setPrototypeOf(o, p) { VXPayActiveAbosMessage_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return VXPayActiveAbosMessage_setPrototypeOf(o, p); }




var VXPayActiveAbosMessage_VXPayActiveAbosMessage =
/*#__PURE__*/
function (_VXPayMessage) {
  VXPayActiveAbosMessage_inherits(VXPayActiveAbosMessage, _VXPayMessage);

  function VXPayActiveAbosMessage() {
    var _this;

    VXPayActiveAbosMessage_classCallCheck(this, VXPayActiveAbosMessage);

    _this = VXPayActiveAbosMessage_possibleConstructorReturn(this, VXPayActiveAbosMessage_getPrototypeOf(VXPayActiveAbosMessage).call(this, VXPay_VXPayMessage.TYPE_ACTIVE_ABOS));
    _this.abos = [];
    return _this;
  }
  /**
   * @param {VXPayAbo} abo
   */


  VXPayActiveAbosMessage_createClass(VXPayActiveAbosMessage, [{
    key: "add",
    value: function add(abo) {
      this.abos.push(abo);
    }
    /**
     * @param {Object} data
     * @return {VXPayActiveAbosMessage}
     */

  }], [{
    key: "fromData",
    value: function fromData() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : VXPayActiveAbosMessage.SAMPLE_DATA;
      var instance = new VXPayActiveAbosMessage(); // instantiate models

      Object.keys(data).forEach(function (key) {
        var model = new Model_VXPayAbo();
        model.amount = data[key].amount;
        model.endDate = data[key].endDate;
        model.isActive = data[key].isActive;
        model.isFreeAbo = data[key].isFreeAbo;
        model.isPaidAbo = data[key].isPaidAbo;
        model.isTrialAbo = data[key].isTrialAbo;
        model.name = data[key].name; // append

        instance.add(model);
      });
      return instance;
    }
  }]);

  return VXPayActiveAbosMessage;
}(VXPay_VXPayMessage);

VXPayActiveAbosMessage_VXPayActiveAbosMessage.SAMPLE_DATA = {
  name: {
    amount: 0,
    endDate: {},
    isActive: true,
    isFreeAbo: false,
    isPaidAbo: true,
    isTrialAbo: true,
    name: 'Abo'
  }
};
/* harmony default export */ var Actions_VXPayActiveAbosMessage = (VXPayActiveAbosMessage_VXPayActiveAbosMessage);
// CONCATENATED MODULE: ./src/VXPay/Message/Actions/VXPayLoggedOutMessage.js
function VXPayLoggedOutMessage_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { VXPayLoggedOutMessage_typeof = function _typeof(obj) { return typeof obj; }; } else { VXPayLoggedOutMessage_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return VXPayLoggedOutMessage_typeof(obj); }

function VXPayLoggedOutMessage_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function VXPayLoggedOutMessage_possibleConstructorReturn(self, call) { if (call && (VXPayLoggedOutMessage_typeof(call) === "object" || typeof call === "function")) { return call; } return VXPayLoggedOutMessage_assertThisInitialized(self); }

function VXPayLoggedOutMessage_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function VXPayLoggedOutMessage_getPrototypeOf(o) { VXPayLoggedOutMessage_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return VXPayLoggedOutMessage_getPrototypeOf(o); }

function VXPayLoggedOutMessage_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) VXPayLoggedOutMessage_setPrototypeOf(subClass, superClass); }

function VXPayLoggedOutMessage_setPrototypeOf(o, p) { VXPayLoggedOutMessage_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return VXPayLoggedOutMessage_setPrototypeOf(o, p); }



var VXPayLoggedOutMessage_VXPayLoggedOutMessage =
/*#__PURE__*/
function (_VXPayMessage) {
  VXPayLoggedOutMessage_inherits(VXPayLoggedOutMessage, _VXPayMessage);

  function VXPayLoggedOutMessage() {
    VXPayLoggedOutMessage_classCallCheck(this, VXPayLoggedOutMessage);

    return VXPayLoggedOutMessage_possibleConstructorReturn(this, VXPayLoggedOutMessage_getPrototypeOf(VXPayLoggedOutMessage).call(this, VXPay_VXPayMessage.TYPE_LOGGED_OUT)); // this.loggedIn = false; - do we need it?
  }

  return VXPayLoggedOutMessage;
}(VXPay_VXPayMessage);

/* harmony default export */ var Actions_VXPayLoggedOutMessage = (VXPayLoggedOutMessage_VXPayLoggedOutMessage);
// CONCATENATED MODULE: ./src/VXPay/Message/VXPayMessageFactory.js
function VXPayMessageFactory_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function VXPayMessageFactory_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function VXPayMessageFactory_createClass(Constructor, protoProps, staticProps) { if (protoProps) VXPayMessageFactory_defineProperties(Constructor.prototype, protoProps); if (staticProps) VXPayMessageFactory_defineProperties(Constructor, staticProps); return Constructor; }


















var VXPayMessageFactory_VXPayMessageFactory =
/*#__PURE__*/
function () {
  function VXPayMessageFactory() {
    VXPayMessageFactory_classCallCheck(this, VXPayMessageFactory);
  }

  VXPayMessageFactory_createClass(VXPayMessageFactory, null, [{
    key: "fromJson",

    /**
     * @param {string} json
     * @return {VXPayMessage}
     * @throws {TypeError|SyntaxError}
     */
    value: function fromJson() {
      var json = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '{}';
      var message = JSON.parse(json);

      if (!message.hasOwnProperty('type')) {
        throw new TypeError('Invalid message format - no type field');
      }

      switch (message.type) {
        case VXPay_VXPayMessage.TYPE_HAS_LOGIN_COOKIE:
          return new VXPayHasSessionCookieMessage_VXPayHasSessionCookieMessage(!!message.data);

        case VXPay_VXPayMessage.TYPE_AVS_STATUS:
          return new VXPayAVSStatusMessage_VXPayAVSStatusMessage(VXPayAVSStatus.fromData(message.data));

        case VXPay_VXPayMessage.TYPE_BALANCE:
          return Actions_VXPayBalanceMessage.fromData(message.data);

        case VXPay_VXPayMessage.TYPE_LOGGED_OUT:
          return new Actions_VXPayLoggedOutMessage();

        case VXPay_VXPayMessage.TYPE_ACTIVE_ABOS:
          return Actions_VXPayActiveAbosMessage.fromData(message.data);

        case VXPay_VXPayMessage.TYPE_CONTENT_LOADED:
          return new VXPayContentLoadedMessage_VXPayContentLoadedMessage();

        case VXPay_VXPayMessage.TYPE_IFRAME_READY:
          return new VXPayIframeReadyMessage_VXPayIframeReadyMessage();

        case VXPay_VXPayMessage.TYPE_HOOK:
          return VXPayHookMessageFactory_VXPayHookMessageFactory.fromData(message.data);

        case VXPay_VXPayMessage.TYPE_VIEW_READY:
          return new VXPayViewReadyMessage_VXPayViewReadyMessage();

        case VXPay_VXPayMessage.TYPE_IFRAME_CLOSE:
          return new VXPayIframeCloseMessage_VXPayIframeCloseMessage(message.data);

        case VXPay_VXPayMessage.TYPE_IS_VISIBLE:
          return new VXPayIsVisibleMessage_VXPayIsVisibleMessage();

        case VXPay_VXPayMessage.TYPE_SUCCESS:
          return new Message_VXPaySuccessMessage(message.data);

        case VXPay_VXPayMessage.TYPE_IS_LOGGED_IN:
          return new Actions_VXPayIsLoggedInResponseMessage(message.data);
      } // default
      // transfer token?


      if (message.type.indexOf(VXPay_VXPayMessage.TRANSFER_TOKEN_PREFIX) === 0) {
        var token = message.type.substr(VXPay_VXPayMessage.TRANSFER_TOKEN_PREFIX.length);
        return new VXPayTransferTokenMessage_VXPayTransferTokenMessage(token);
      } // return an unknown message, but still a message


      var unknown = new VXPay_VXPayMessage(message.type);
      unknown.raw = json;
      return unknown;
    }
  }]);

  return VXPayMessageFactory;
}();


// CONCATENATED MODULE: ./src/VXPay/Config/VXPayHooksConfig.js
function VXPayHooksConfig_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function VXPayHooksConfig_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function VXPayHooksConfig_createClass(Constructor, protoProps, staticProps) { if (protoProps) VXPayHooksConfig_defineProperties(Constructor.prototype, protoProps); if (staticProps) VXPayHooksConfig_defineProperties(Constructor, staticProps); return Constructor; }

var VXPayHooksConfig =
/*#__PURE__*/
function () {
  function VXPayHooksConfig() {
    VXPayHooksConfig_classCallCheck(this, VXPayHooksConfig);

    this._onAny = [];
    this._onBeforeSend = [];
    this._onLoad = [];
  }
  /**
   * @param {Function} handler
   * @return {VXPayHooksConfig}
   */


  VXPayHooksConfig_createClass(VXPayHooksConfig, [{
    key: "onLoad",
    value: function onLoad(handler) {
      this._onLoad.push(handler);

      return this;
    }
    /**
     * @param {Function} handler
     * @return {VXPayHooksConfig}
     */

  }, {
    key: "onAny",
    value: function onAny(handler) {
      this._onAny.push(handler);

      return this;
    }
    /**
     * @param {Function} handler
     * @return {VXPayHooksConfig}
     */

  }, {
    key: "onBeforeSend",
    value: function onBeforeSend(handler) {
      this._onBeforeSend.push(handler);

      return this;
    }
    /**
     * @param {String} hook
     * @param {Array} callbackArguments
     * @param {String|undefined} sourceTab
     * @return {boolean}
     */

  }, {
    key: "trigger",
    value: function trigger(hook) {
      var callbackArguments = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var sourceTab = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;

      /* eslint-disable-line no-unused-vars  */
      var name = '_' + hook;

      if (!this.hasOwnProperty(name)) {
        throw new Error('Hook ' + hook + ' not available!');
      } // early exit


      if (this[name].length === 0) {
        return true;
      } // process all callbacks


      this[name].map(function (callback) {
        callback.apply(callback, callbackArguments);
      });
      return true;
    }
  }]);

  return VXPayHooksConfig;
}();

VXPayHooksConfig.ON_LOAD = 'onLoad';
VXPayHooksConfig.ON_ANY = 'onAny';
VXPayHooksConfig.ON_BEFORE_SEND = 'onBeforeSend';
/* harmony default export */ var Config_VXPayHooksConfig = (VXPayHooksConfig);
// CONCATENATED MODULE: ./src/VXPay/Config/VXPayHelperHooksConfig.js
function VXPayHelperHooksConfig_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { VXPayHelperHooksConfig_typeof = function _typeof(obj) { return typeof obj; }; } else { VXPayHelperHooksConfig_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return VXPayHelperHooksConfig_typeof(obj); }

function VXPayHelperHooksConfig_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function VXPayHelperHooksConfig_possibleConstructorReturn(self, call) { if (call && (VXPayHelperHooksConfig_typeof(call) === "object" || typeof call === "function")) { return call; } return VXPayHelperHooksConfig_assertThisInitialized(self); }

function VXPayHelperHooksConfig_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function VXPayHelperHooksConfig_getPrototypeOf(o) { VXPayHelperHooksConfig_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return VXPayHelperHooksConfig_getPrototypeOf(o); }

function VXPayHelperHooksConfig_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) VXPayHelperHooksConfig_setPrototypeOf(subClass, superClass); }

function VXPayHelperHooksConfig_setPrototypeOf(o, p) { VXPayHelperHooksConfig_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return VXPayHelperHooksConfig_setPrototypeOf(o, p); }



var VXPayHelperHooksConfig =
/*#__PURE__*/
function (_VXPayHooksConfig) {
  VXPayHelperHooksConfig_inherits(VXPayHelperHooksConfig, _VXPayHooksConfig);

  function VXPayHelperHooksConfig() {
    VXPayHelperHooksConfig_classCallCheck(this, VXPayHelperHooksConfig);

    return VXPayHelperHooksConfig_possibleConstructorReturn(this, VXPayHelperHooksConfig_getPrototypeOf(VXPayHelperHooksConfig).apply(this, arguments));
  }

  return VXPayHelperHooksConfig;
}(Config_VXPayHooksConfig);

/* harmony default export */ var Config_VXPayHelperHooksConfig = (VXPayHelperHooksConfig);
// CONCATENATED MODULE: ./src/VXPay/Dom/Frame/VXPayHelperFrame.js
function VXPayHelperFrame_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { VXPayHelperFrame_typeof = function _typeof(obj) { return typeof obj; }; } else { VXPayHelperFrame_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return VXPayHelperFrame_typeof(obj); }

function VXPayHelperFrame_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function VXPayHelperFrame_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function VXPayHelperFrame_createClass(Constructor, protoProps, staticProps) { if (protoProps) VXPayHelperFrame_defineProperties(Constructor.prototype, protoProps); if (staticProps) VXPayHelperFrame_defineProperties(Constructor, staticProps); return Constructor; }

function VXPayHelperFrame_possibleConstructorReturn(self, call) { if (call && (VXPayHelperFrame_typeof(call) === "object" || typeof call === "function")) { return call; } return VXPayHelperFrame_assertThisInitialized(self); }

function VXPayHelperFrame_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = VXPayHelperFrame_getPrototypeOf(object); if (object === null) break; } return object; }

function VXPayHelperFrame_getPrototypeOf(o) { VXPayHelperFrame_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return VXPayHelperFrame_getPrototypeOf(o); }

function VXPayHelperFrame_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) VXPayHelperFrame_setPrototypeOf(subClass, superClass); }

function VXPayHelperFrame_setPrototypeOf(o, p) { VXPayHelperFrame_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return VXPayHelperFrame_setPrototypeOf(o, p); }








var VXPayHelperFrame_VXPayHelperFrame =
/*#__PURE__*/
function (_VXPayIframe) {
  VXPayHelperFrame_inherits(VXPayHelperFrame, _VXPayIframe);

  /**
   * @param {Document} document
   * @param {String} url
   * @param {String} id
   * @param {CSSStyleDeclaration} style
   */
  function VXPayHelperFrame(document, url) {
    var _this;

    var id = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : VXPayHelperFrame.NAME;
    var style = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : VXPayHelperFrame.STYLE_DEFAULT;

    VXPayHelperFrame_classCallCheck(this, VXPayHelperFrame);

    // init the frame
    _this = VXPayHelperFrame_possibleConstructorReturn(this, VXPayHelperFrame_getPrototypeOf(VXPayHelperFrame).call(this, document, url, id, style));
    _this._cookieMsg = null;
    _this._frame.name = 'vxpay-helper';
    _this._hooks = new Config_VXPayHelperHooksConfig();
    return _this;
  }
  /**
   * @param {Function} resolve
   * @param {Function} reject
   * @param {MessageEvent} event
   * @return {boolean}
   * @private
   */


  VXPayHelperFrame_createClass(VXPayHelperFrame, [{
    key: "_cookieMessageHandler",
    value: function _cookieMessageHandler(resolve, reject, event) {
      // origin check
      if (event.origin && Dom_VXPayIframe.ORIGIN_VX.indexOf(event.origin) === -1) {
        reject('Event origin does not match: ' + event.origin);
      }

      try {
        this._cookieMsg = VXPayMessageFactory_VXPayMessageFactory.fromJson(event.data);
      } catch (e) {
        this._cookieMsg = new VXPayHasSessionCookieMessage_VXPayHasSessionCookieMessage();
      } // trigger hook


      this._hooks.trigger(Config_VXPayHooksConfig.ON_ANY, [this._cookieMsg], this._frame.id + '<VXPayHelperFrame>'); // otherwise - not logged in


      resolve(this._cookieMsg);
    }
    /**
     * @return {Promise<VXPayHasSessionCookieMessage>}
     */

  }, {
    key: "getLoginCookie",
    value: function getLoginCookie() {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        if (null !== _this2._cookieMsg) {
          resolve(_this2._cookieMsg);
        }

        Event_VXPayEventListener.addEvent(Dom_VXPayIframe.EVENT_MESSAGE, _this2._frame.ownerDocument.defaultView, _this2._cookieMessageHandler.bind(_this2, resolve, reject));
      });
    }
  }, {
    key: "_markLoaded",
    value: function _markLoaded() {
      _get(VXPayHelperFrame_getPrototypeOf(VXPayHelperFrame.prototype), "_markLoaded", this).call(this);

      this._hooks.trigger(Config_VXPayHelperHooksConfig.ON_LOAD, [], this._frame.id + '<VXPayHelperFrame>');
    }
    /**
     * Override to add a before send hook
     * @param {String|VXPayMessage} message
     * @param {String} origin
     */

  }, {
    key: "postMessage",
    value: function postMessage(message) {
      var origin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '*';

      this._hooks.trigger(Config_VXPayHelperHooksConfig.ON_BEFORE_SEND, [message], this._frame.id + '<VXPayHelperFrame>');

      _get(VXPayHelperFrame_getPrototypeOf(VXPayHelperFrame.prototype), "postMessage", this).call(this, message, origin);
    }
  }, {
    key: "triggerLoad",
    value: function triggerLoad() {
      if (this._loaded) {
        return;
      }

      this._frame.ownerDocument.getElementsByTagName('body').item(0).appendChild(this._frame);
    }
    /**
     * @return {VXPayHelperHooksConfig}
     */

  }, {
    key: "hooks",
    get: function get() {
      return this._hooks;
    }
  }]);

  return VXPayHelperFrame;
}(Dom_VXPayIframe);

VXPayHelperFrame_VXPayHelperFrame.STYLE_DEFAULT = {
  display: 'none'
};
VXPayHelperFrame_VXPayHelperFrame.NAME = 'vx-helper-frame-payment';
/* harmony default export */ var Frame_VXPayHelperFrame = (VXPayHelperFrame_VXPayHelperFrame);
// CONCATENATED MODULE: ./src/VXPay/Message/VXPayInitSessionMessage.js
function VXPayInitSessionMessage_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { VXPayInitSessionMessage_typeof = function _typeof(obj) { return typeof obj; }; } else { VXPayInitSessionMessage_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return VXPayInitSessionMessage_typeof(obj); }

function VXPayInitSessionMessage_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function VXPayInitSessionMessage_possibleConstructorReturn(self, call) { if (call && (VXPayInitSessionMessage_typeof(call) === "object" || typeof call === "function")) { return call; } return VXPayInitSessionMessage_assertThisInitialized(self); }

function VXPayInitSessionMessage_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function VXPayInitSessionMessage_getPrototypeOf(o) { VXPayInitSessionMessage_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return VXPayInitSessionMessage_getPrototypeOf(o); }

function VXPayInitSessionMessage_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) VXPayInitSessionMessage_setPrototypeOf(subClass, superClass); }

function VXPayInitSessionMessage_setPrototypeOf(o, p) { VXPayInitSessionMessage_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return VXPayInitSessionMessage_setPrototypeOf(o, p); }



var VXPayInitSessionMessage_VXPayInitSessionMessage =
/*#__PURE__*/
function (_VXPayMessage) {
  VXPayInitSessionMessage_inherits(VXPayInitSessionMessage, _VXPayMessage);

  /**
   * @param {String} token
   */
  function VXPayInitSessionMessage() {
    var _this;

    var token = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    VXPayInitSessionMessage_classCallCheck(this, VXPayInitSessionMessage);

    _this = VXPayInitSessionMessage_possibleConstructorReturn(this, VXPayInitSessionMessage_getPrototypeOf(VXPayInitSessionMessage).call(this, VXPay_VXPayMessage.TYPE_INIT_SESSION));
    _this.token = token;
    return _this;
  }

  return VXPayInitSessionMessage;
}(VXPay_VXPayMessage);

/* harmony default export */ var Message_VXPayInitSessionMessage = (VXPayInitSessionMessage_VXPayInitSessionMessage);
// CONCATENATED MODULE: ./src/VXPay/Message/VXPayUpdateParamsMessage.js
function VXPayUpdateParamsMessage_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { VXPayUpdateParamsMessage_typeof = function _typeof(obj) { return typeof obj; }; } else { VXPayUpdateParamsMessage_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return VXPayUpdateParamsMessage_typeof(obj); }

function VXPayUpdateParamsMessage_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function VXPayUpdateParamsMessage_possibleConstructorReturn(self, call) { if (call && (VXPayUpdateParamsMessage_typeof(call) === "object" || typeof call === "function")) { return call; } return VXPayUpdateParamsMessage_assertThisInitialized(self); }

function VXPayUpdateParamsMessage_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function VXPayUpdateParamsMessage_getPrototypeOf(o) { VXPayUpdateParamsMessage_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return VXPayUpdateParamsMessage_getPrototypeOf(o); }

function VXPayUpdateParamsMessage_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) VXPayUpdateParamsMessage_setPrototypeOf(subClass, superClass); }

function VXPayUpdateParamsMessage_setPrototypeOf(o, p) { VXPayUpdateParamsMessage_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return VXPayUpdateParamsMessage_setPrototypeOf(o, p); }



var VXPayUpdateParamsMessage_VXPayUpdateParamsMessage =
/*#__PURE__*/
function (_VXPayMessage) {
  VXPayUpdateParamsMessage_inherits(VXPayUpdateParamsMessage, _VXPayMessage);

  /**
   * @param {Object} options
   */
  function VXPayUpdateParamsMessage() {
    var _this;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    VXPayUpdateParamsMessage_classCallCheck(this, VXPayUpdateParamsMessage);

    _this = VXPayUpdateParamsMessage_possibleConstructorReturn(this, VXPayUpdateParamsMessage_getPrototypeOf(VXPayUpdateParamsMessage).call(this, VXPay_VXPayMessage.TYPE_UPDATE_PARAMS));
    _this.options = options;
    return _this;
  }

  return VXPayUpdateParamsMessage;
}(VXPay_VXPayMessage);


// CONCATENATED MODULE: ./src/VXPay/Message/VXPayChangeRouteMessage.js
function VXPayChangeRouteMessage_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { VXPayChangeRouteMessage_typeof = function _typeof(obj) { return typeof obj; }; } else { VXPayChangeRouteMessage_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return VXPayChangeRouteMessage_typeof(obj); }

function VXPayChangeRouteMessage_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function VXPayChangeRouteMessage_possibleConstructorReturn(self, call) { if (call && (VXPayChangeRouteMessage_typeof(call) === "object" || typeof call === "function")) { return call; } return VXPayChangeRouteMessage_assertThisInitialized(self); }

function VXPayChangeRouteMessage_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function VXPayChangeRouteMessage_getPrototypeOf(o) { VXPayChangeRouteMessage_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return VXPayChangeRouteMessage_getPrototypeOf(o); }

function VXPayChangeRouteMessage_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) VXPayChangeRouteMessage_setPrototypeOf(subClass, superClass); }

function VXPayChangeRouteMessage_setPrototypeOf(o, p) { VXPayChangeRouteMessage_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return VXPayChangeRouteMessage_setPrototypeOf(o, p); }



var VXPayChangeRouteMessage_VXPayChangeRouteMessage =
/*#__PURE__*/
function (_VXPayMessage) {
  VXPayChangeRouteMessage_inherits(VXPayChangeRouteMessage, _VXPayMessage);

  /**
   * @param {String} route
   */
  function VXPayChangeRouteMessage() {
    var _this;

    var route = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    VXPayChangeRouteMessage_classCallCheck(this, VXPayChangeRouteMessage);

    _this = VXPayChangeRouteMessage_possibleConstructorReturn(this, VXPayChangeRouteMessage_getPrototypeOf(VXPayChangeRouteMessage).call(this, VXPay_VXPayMessage.TYPE_CHANGE_ROUTE)); // change route message can be empty

    if (route.length > 0) {
      _this.route = route;
    }

    return _this;
  }

  return VXPayChangeRouteMessage;
}(VXPay_VXPayMessage);


// CONCATENATED MODULE: ./src/VXPay/Config/VXPayPaymentHooksConfig.js
function VXPayPaymentHooksConfig_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { VXPayPaymentHooksConfig_typeof = function _typeof(obj) { return typeof obj; }; } else { VXPayPaymentHooksConfig_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return VXPayPaymentHooksConfig_typeof(obj); }

function VXPayPaymentHooksConfig_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function VXPayPaymentHooksConfig_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function VXPayPaymentHooksConfig_createClass(Constructor, protoProps, staticProps) { if (protoProps) VXPayPaymentHooksConfig_defineProperties(Constructor.prototype, protoProps); if (staticProps) VXPayPaymentHooksConfig_defineProperties(Constructor, staticProps); return Constructor; }

function VXPayPaymentHooksConfig_possibleConstructorReturn(self, call) { if (call && (VXPayPaymentHooksConfig_typeof(call) === "object" || typeof call === "function")) { return call; } return VXPayPaymentHooksConfig_assertThisInitialized(self); }

function VXPayPaymentHooksConfig_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function VXPayPaymentHooksConfig_getPrototypeOf(o) { VXPayPaymentHooksConfig_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return VXPayPaymentHooksConfig_getPrototypeOf(o); }

function VXPayPaymentHooksConfig_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) VXPayPaymentHooksConfig_setPrototypeOf(subClass, superClass); }

function VXPayPaymentHooksConfig_setPrototypeOf(o, p) { VXPayPaymentHooksConfig_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return VXPayPaymentHooksConfig_setPrototypeOf(o, p); }



var VXPayPaymentHooksConfig =
/*#__PURE__*/
function (_VXPayHooksConfig) {
  VXPayPaymentHooksConfig_inherits(VXPayPaymentHooksConfig, _VXPayHooksConfig);

  function VXPayPaymentHooksConfig() {
    var _this;

    VXPayPaymentHooksConfig_classCallCheck(this, VXPayPaymentHooksConfig);

    _this = VXPayPaymentHooksConfig_possibleConstructorReturn(this, VXPayPaymentHooksConfig_getPrototypeOf(VXPayPaymentHooksConfig).call(this));
    _this._onViewReady = [];
    _this._onContentLoaded = [];
    _this._onClose = [];
    _this._onSuccess = [];
    _this._onIframeReady = [];
    _this._onLogin = [];
    _this._onLogout = [];
    _this._onFlowChange = [];
    _this._onIsLoggedIn = [];
    _this._onTransferToken = [];
    _this._onAVSStatus = [];
    _this._onBalance = [];
    _this._onActiveAbos = [];
    _this._onPayment = [];
    _this._onSignup = [];
    _this._onComfortSettingsChanged = [];
    _this._onEmailVerified = [];
    _this._onEmailNotVerified = [];
    _this._onPasswordChanged = [];
    return _this;
  }
  /**
   * @param {Function} handler
   * @return {VXPayPaymentHooksConfig}
   */


  VXPayPaymentHooksConfig_createClass(VXPayPaymentHooksConfig, [{
    key: "onLogout",
    value: function onLogout(handler) {
      this._onLogout.push(handler);

      return this;
    }
    /**
     * @param {Function} handler
     * @return {boolean}
     */

  }, {
    key: "hasOnLogout",
    value: function hasOnLogout(handler) {
      return this._onLogout.indexOf(handler) !== -1;
    }
    /**
     * @param {Function} handler
     * @return {VXPayPaymentHooksConfig}
     */

  }, {
    key: "onActiveAbos",
    value: function onActiveAbos(handler) {
      this._onActiveAbos.push(handler);

      return this;
    }
    /**
     * @param {Function} handler
     * @return {boolean}
     */

  }, {
    key: "hasOnActiveAbos",
    value: function hasOnActiveAbos(handler) {
      return this._onActiveAbos.indexOf(handler) !== -1;
    }
    /**
     * @param {Function} handler
     * @return {VXPayPaymentHooksConfig}
     */

  }, {
    key: "onBalance",
    value: function onBalance(handler) {
      this._onBalance.push(handler);

      return this;
    }
    /**
     * @param {Function} handler
     * @return {boolean}
     */

  }, {
    key: "hasOnBalance",
    value: function hasOnBalance(handler) {
      return this._onBalance.indexOf(handler) !== -1;
    }
    /**
     * @param {Function} handler
     */

  }, {
    key: "onAVSStatus",
    value: function onAVSStatus(handler) {
      this._onAVSStatus.push(handler);
    }
    /**
     * @param {Function} handler
     * @return {boolean}
     */

  }, {
    key: "hasOnAVSStatus",
    value: function hasOnAVSStatus(handler) {
      return this._onAVSStatus.indexOf(handler) !== -1;
    }
    /**
     * @param {Function} handler
     * @return {VXPayPaymentHooksConfig}
     */

  }, {
    key: "onIsLoggedIn",
    value: function onIsLoggedIn(handler) {
      this._onIsLoggedIn.push(handler);

      return this;
    }
    /**
     * @param {Function} handler
     * @return {boolean}
     */

  }, {
    key: "hasOnIsLoggedIn",
    value: function hasOnIsLoggedIn(handler) {
      return this._onIsLoggedIn.indexOf(handler) !== -1;
    }
    /**
     * @param {Function} handler
     * @return {VXPayPaymentHooksConfig}
     */

  }, {
    key: "onTransferToken",
    value: function onTransferToken(handler) {
      this._onTransferToken.push(handler);

      return this;
    }
    /**
     * @param {Function} handler
     * @return {boolean}
     */

  }, {
    key: "hasOnTransferToken",
    value: function hasOnTransferToken(handler) {
      return this._onTransferToken.indexOf(handler) !== -1;
    }
    /**
     * @param {Function} handler
     * @return {VXPayPaymentHooksConfig}
     */

  }, {
    key: "onFlowChange",
    value: function onFlowChange(handler) {
      this._onFlowChange.push(handler);

      return this;
    }
    /**
     * @param {Function} handler
     * @return {VXPayPaymentHooksConfig}
     */

  }, {
    key: "onLogin",
    value: function onLogin(handler) {
      this._onLogin.push(handler);

      return this;
    }
    /**
     * @param {Function} handler
     * @return {VXPayPaymentHooksConfig}
     */

  }, {
    key: "onIframeReady",
    value: function onIframeReady(handler) {
      this._onIframeReady.push(handler);

      return this;
    }
    /**
     * @param {Function} handler
     * @return {VXPayPaymentHooksConfig}
     */

  }, {
    key: "onClose",
    value: function onClose(handler) {
      this._onClose.push(handler);

      return this;
    }
    /**
     * @param {Function} handler
     * @return {VXPayPaymentHooksConfig}
     */

  }, {
    key: "onSuccess",
    value: function onSuccess(handler) {
      this._onSuccess.push(handler);

      return this;
    }
    /**
     * @param {Function} handler
     * @return {VXPayPaymentHooksConfig}
     */

  }, {
    key: "onViewReady",
    value: function onViewReady(handler) {
      this._onViewReady.push(handler);

      return this;
    }
    /**
     * @param {Function} handler
     * @return {VXPayPaymentHooksConfig}
     */

  }, {
    key: "onContentLoaded",
    value: function onContentLoaded(handler) {
      this._onContentLoaded.push(handler);

      return this;
    }
    /**
     * @param {Function} handler
     * @return {VXPayPaymentHooksConfig}
     */

  }, {
    key: "onPayment",
    value: function onPayment(handler) {
      this._onPayment.push(handler);

      return this;
    }
    /**
     * @param {Function} handler
     * @return {VXPayPaymentHooksConfig}
     */

  }, {
    key: "onSignup",
    value: function onSignup(handler) {
      this._onSignup.push(handler);

      return this;
    }
    /**
     * @param {Function} handler
     * @return {VXPayPaymentHooksConfig}
     */

  }, {
    key: "onComfortSettingsChanged",
    value: function onComfortSettingsChanged(handler) {
      this._onComfortSettingsChanged.push(handler);

      return this;
    }
    /**
     * @param {Function} handler
     * @return {VXPayPaymentHooksConfig}
     */

  }, {
    key: "onEmailVerified",
    value: function onEmailVerified(handler) {
      this._onEmailVerified.push(handler);

      return this;
    }
    /**
     * @param {Function} handler
     * @return {VXPayPaymentHooksConfig}
     */

  }, {
    key: "onEmailNotVerified",
    value: function onEmailNotVerified(handler) {
      this._onEmailNotVerified.push(handler);

      return this;
    }
    /**
     * @param {Function} handler
     * @return {VXPayPaymentHooksConfig}
     */

  }, {
    key: "onPasswordChanged",
    value: function onPasswordChanged(handler) {
      this._onPasswordChanged.push(handler);

      return this;
    }
  }]);

  return VXPayPaymentHooksConfig;
}(Config_VXPayHooksConfig);

VXPayPaymentHooksConfig.ON_VIEW_READY = 'onViewReady';
VXPayPaymentHooksConfig.ON_IFRAME_READY = 'onIframeReady';
VXPayPaymentHooksConfig.ON_CONTENT_LOADED = 'onContentLoaded';
VXPayPaymentHooksConfig.ON_CLOSE = 'onClose';
VXPayPaymentHooksConfig.ON_SUCCESS = 'onSuccess';
VXPayPaymentHooksConfig.ON_LOGIN = 'onLogin';
VXPayPaymentHooksConfig.ON_LOGOUT = 'onLogout';
VXPayPaymentHooksConfig.ON_FLOW_CHANGE = 'onFlowChange';
VXPayPaymentHooksConfig.ON_IS_LOGGED_IN = 'onIsLoggedIn';
VXPayPaymentHooksConfig.ON_TRANSFER_TOKEN = 'onTransferToken';
VXPayPaymentHooksConfig.ON_AVS_STATUS = 'onAVSStatus';
VXPayPaymentHooksConfig.ON_BALANCE = 'onBalance';
VXPayPaymentHooksConfig.ON_ACTIVE_ABOS = 'onActiveAbos';
VXPayPaymentHooksConfig.ON_PAYMENT = 'onPayment';
VXPayPaymentHooksConfig.ON_SIGNUP = 'onSignup';
VXPayPaymentHooksConfig.ON_COMFORT_SETTINGS_CHANGE = 'onComfortSettingsChanged';
VXPayPaymentHooksConfig.ON_EMAIL_VERIFIED = 'onEmailVerified';
VXPayPaymentHooksConfig.ON_EMAIL_NOT_VERIFIED = 'onEmailNotVerified';
VXPayPaymentHooksConfig.ON_PASSWORD_CHANGED = 'onPasswordChanged';
/* harmony default export */ var Config_VXPayPaymentHooksConfig = (VXPayPaymentHooksConfig);
// CONCATENATED MODULE: ./src/VXPay/Message/Hooks/VXPayHookRouter.js





/**
 * @param {VXPayPaymentHooksConfig} hooks
 * @param {MessageEvent|Object} event
 * @param {String|undefined} sourceTab
 * @return {boolean}
 * @throws {TypeError}
 * @constructor
 */

var VXPayHookRouter_VXPayHookRouter = function VXPayHookRouter(hooks, event) {
  var sourceTab = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;

  // origin check
  if (event.origin && Dom_VXPayIframe.ORIGIN_VX.indexOf(event.origin) === -1) {
    return false;
  } // parse message


  var message = VXPayMessageFactory_VXPayMessageFactory.fromJson(event.data); // route any

  hooks.trigger(Config_VXPayPaymentHooksConfig.ON_ANY, [message], sourceTab);

  switch (message.type) {
    case VXPay_VXPayMessage.TYPE_TRANSFER_TOKEN:
      return hooks.trigger(Config_VXPayPaymentHooksConfig.ON_TRANSFER_TOKEN, [message], sourceTab);

    case VXPay_VXPayMessage.TYPE_AVS_STATUS:
      return hooks.trigger(Config_VXPayPaymentHooksConfig.ON_AVS_STATUS, [message], sourceTab);

    case VXPay_VXPayMessage.TYPE_BALANCE:
      return hooks.trigger(Config_VXPayPaymentHooksConfig.ON_BALANCE, [message], sourceTab);

    case VXPay_VXPayMessage.TYPE_ACTIVE_ABOS:
      return hooks.trigger(Config_VXPayPaymentHooksConfig.ON_ACTIVE_ABOS, [message], sourceTab);

    case VXPay_VXPayMessage.TYPE_IFRAME_READY:
      return hooks.trigger(Config_VXPayPaymentHooksConfig.ON_IFRAME_READY, [message], sourceTab);

    case VXPay_VXPayMessage.TYPE_CONTENT_LOADED:
      return hooks.trigger(Config_VXPayPaymentHooksConfig.ON_CONTENT_LOADED, [message], sourceTab);

    case VXPay_VXPayMessage.TYPE_VIEW_READY:
      return hooks.trigger(Config_VXPayPaymentHooksConfig.ON_VIEW_READY, [message], sourceTab);

    case VXPay_VXPayMessage.TYPE_IFRAME_CLOSE:
      return hooks.trigger(Config_VXPayPaymentHooksConfig.ON_CLOSE, [message], sourceTab);

    case VXPay_VXPayMessage.TYPE_SUCCESS:
      return hooks.trigger(Config_VXPayPaymentHooksConfig.ON_SUCCESS, [message], sourceTab);

    case VXPay_VXPayMessage.TYPE_IS_LOGGED_IN:
      return hooks.trigger(Config_VXPayPaymentHooksConfig.ON_IS_LOGGED_IN, [message], sourceTab);

    case VXPay_VXPayMessage.TYPE_LOGGED_OUT:
      return hooks.trigger(Config_VXPayPaymentHooksConfig.ON_LOGOUT, [message], sourceTab);

    case VXPay_VXPayMessage.TYPE_HOOK:
      switch (message.hook) {
        case Hooks_VXPayHookMessage.HOOK_LOGIN:
          return hooks.trigger(Config_VXPayPaymentHooksConfig.ON_LOGIN, [message], sourceTab);

        case Hooks_VXPayHookMessage.HOOK_FLOW_CHANGED:
          return hooks.trigger(Config_VXPayPaymentHooksConfig.ON_FLOW_CHANGE, [message], sourceTab);

        case Hooks_VXPayHookMessage.HOOK_PAYMENT:
          return hooks.trigger(Config_VXPayPaymentHooksConfig.ON_PAYMENT, [message], sourceTab);

        case Hooks_VXPayHookMessage.HOOK_SIGNUP:
          return hooks.trigger(Config_VXPayPaymentHooksConfig.ON_SIGNUP, [message], sourceTab);

        case Hooks_VXPayHookMessage.HOOK_COMFORT_SETTINGS_CHANGED:
          return hooks.trigger(Config_VXPayPaymentHooksConfig.ON_COMFORT_SETTINGS_CHANGE, [message], sourceTab);

        case Hooks_VXPayHookMessage.HOOK_EMAIL_VERIFIED:
          return hooks.trigger(Config_VXPayPaymentHooksConfig.ON_EMAIL_VERIFIED, [message], sourceTab);

        case Hooks_VXPayHookMessage.HOOK_EMAIL_NOT_VERIFIED:
          return hooks.trigger(Config_VXPayPaymentHooksConfig.ON_EMAIL_NOT_VERIFIED, [message], sourceTab);

        case Hooks_VXPayHookMessage.HOOK_PASSWORD_CHANGED:
          return hooks.trigger(Config_VXPayPaymentHooksConfig.ON_PASSWORD_CHANGED, [message], sourceTab);
      }

  }
};

/* harmony default export */ var Hooks_VXPayHookRouter = (VXPayHookRouter_VXPayHookRouter);
// CONCATENATED MODULE: ./src/VXPay/Message/VXPayAdditionalOptionsMessage.js
function VXPayAdditionalOptionsMessage_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { VXPayAdditionalOptionsMessage_typeof = function _typeof(obj) { return typeof obj; }; } else { VXPayAdditionalOptionsMessage_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return VXPayAdditionalOptionsMessage_typeof(obj); }

function VXPayAdditionalOptionsMessage_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function VXPayAdditionalOptionsMessage_possibleConstructorReturn(self, call) { if (call && (VXPayAdditionalOptionsMessage_typeof(call) === "object" || typeof call === "function")) { return call; } return VXPayAdditionalOptionsMessage_assertThisInitialized(self); }

function VXPayAdditionalOptionsMessage_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function VXPayAdditionalOptionsMessage_getPrototypeOf(o) { VXPayAdditionalOptionsMessage_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return VXPayAdditionalOptionsMessage_getPrototypeOf(o); }

function VXPayAdditionalOptionsMessage_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) VXPayAdditionalOptionsMessage_setPrototypeOf(subClass, superClass); }

function VXPayAdditionalOptionsMessage_setPrototypeOf(o, p) { VXPayAdditionalOptionsMessage_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return VXPayAdditionalOptionsMessage_setPrototypeOf(o, p); }



var VXPayAdditionalOptionsMessage_VXPayAdditionalOptionsMessage =
/*#__PURE__*/
function (_VXPayMessage) {
  VXPayAdditionalOptionsMessage_inherits(VXPayAdditionalOptionsMessage, _VXPayMessage);

  /**
   * @param {Object} options
   */
  function VXPayAdditionalOptionsMessage() {
    var _this;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    VXPayAdditionalOptionsMessage_classCallCheck(this, VXPayAdditionalOptionsMessage);

    _this = VXPayAdditionalOptionsMessage_possibleConstructorReturn(this, VXPayAdditionalOptionsMessage_getPrototypeOf(VXPayAdditionalOptionsMessage).call(this, VXPay_VXPayMessage.TYPE_ADDITIONAL_INFO));
    _this.options = options;
    return _this;
  }

  return VXPayAdditionalOptionsMessage;
}(VXPay_VXPayMessage);

/* harmony default export */ var Message_VXPayAdditionalOptionsMessage = (VXPayAdditionalOptionsMessage_VXPayAdditionalOptionsMessage);
// CONCATENATED MODULE: ./src/VXPay/Dom/Frame/VXPayPaymentFrame.js
function VXPayPaymentFrame_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { VXPayPaymentFrame_typeof = function _typeof(obj) { return typeof obj; }; } else { VXPayPaymentFrame_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return VXPayPaymentFrame_typeof(obj); }

function VXPayPaymentFrame_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function VXPayPaymentFrame_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function VXPayPaymentFrame_createClass(Constructor, protoProps, staticProps) { if (protoProps) VXPayPaymentFrame_defineProperties(Constructor.prototype, protoProps); if (staticProps) VXPayPaymentFrame_defineProperties(Constructor, staticProps); return Constructor; }

function VXPayPaymentFrame_possibleConstructorReturn(self, call) { if (call && (VXPayPaymentFrame_typeof(call) === "object" || typeof call === "function")) { return call; } return VXPayPaymentFrame_assertThisInitialized(self); }

function VXPayPaymentFrame_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function VXPayPaymentFrame_get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { VXPayPaymentFrame_get = Reflect.get; } else { VXPayPaymentFrame_get = function _get(target, property, receiver) { var base = VXPayPaymentFrame_superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return VXPayPaymentFrame_get(target, property, receiver || target); }

function VXPayPaymentFrame_superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = VXPayPaymentFrame_getPrototypeOf(object); if (object === null) break; } return object; }

function VXPayPaymentFrame_getPrototypeOf(o) { VXPayPaymentFrame_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return VXPayPaymentFrame_getPrototypeOf(o); }

function VXPayPaymentFrame_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) VXPayPaymentFrame_setPrototypeOf(subClass, superClass); }

function VXPayPaymentFrame_setPrototypeOf(o, p) { VXPayPaymentFrame_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return VXPayPaymentFrame_setPrototypeOf(o, p); }













var VXPayPaymentFrame_VXPayPaymentFrame =
/*#__PURE__*/
function (_VXPayIframe) {
  VXPayPaymentFrame_inherits(VXPayPaymentFrame, _VXPayIframe);

  /**
   * Override styles
   */
  function VXPayPaymentFrame(document, url) {
    var _this;

    var id = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : VXPayPaymentFrame.NAME;
    var style = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    VXPayPaymentFrame_classCallCheck(this, VXPayPaymentFrame);

    // merge default with incoming
    style = Object.assign({}, VXPayPaymentFrame.getDefaultStyles(document), style); // call parent

    _this = VXPayPaymentFrame_possibleConstructorReturn(this, VXPayPaymentFrame_getPrototypeOf(VXPayPaymentFrame).call(this, document, url, id, style)); // allow transparent iframe for <= IE8

    _this._frame.allowTransparency = true;
    _this._frame.name = 'vxpay'; // hooks config

    _this._hooks = new Config_VXPayPaymentHooksConfig();
    _this._sessionInitialized = false; // listen for incoming post messages

    _this.startListening();

    return _this;
  }
  /**
   * Insert in DOM
   */


  VXPayPaymentFrame_createClass(VXPayPaymentFrame, [{
    key: "triggerLoad",
    value: function triggerLoad() {
      if (this._loaded) {
        return;
      }

      this._frame.ownerDocument.getElementsByTagName('body').item(0).appendChild(this._frame);
    }
    /**
     * @todo refactor this mess!
     * @param {Document} document
     * @return {Object}
     */

  }, {
    key: "startListening",

    /**
     * listen for incoming messages
     */
    value: function startListening() {
      var _this2 = this;

      Event_VXPayEventListener.addEvent(Dom_VXPayIframe.EVENT_MESSAGE, this._frame.ownerDocument.defaultView, function (event) {
        return Hooks_VXPayHookRouter(_this2._hooks, event, _this2._frame.id + '<VXPayPaymentFrame>');
      });
      Event_VXPayEventListener.addEvent(Dom_VXPayIframe.EVENT_UNLOAD, this._frame.ownerDocument.defaultView, this.stopListening.bind(this));
    }
    /**
     * Remove listeners
     */

  }, {
    key: "stopListening",
    value: function stopListening() {
      var _this3 = this;

      Event_VXPayEventListener.removeEvent(Dom_VXPayIframe.EVENT_MESSAGE, this._frame.ownerDocument.defaultView, function (event) {
        return Hooks_VXPayHookRouter(_this3._hooks, event, _this3._frame.id + '<VXPayPaymentFrame>');
      });
      Event_VXPayEventListener.removeEvent(Dom_VXPayIframe.EVENT_UNLOAD, this._frame.ownerDocument.defaultView, this.stopListening.bind(this));
    }
    /**
     * Override to add a hook
     * @protected
     */

  }, {
    key: "_markLoaded",
    value: function _markLoaded() {
      VXPayPaymentFrame_get(VXPayPaymentFrame_getPrototypeOf(VXPayPaymentFrame.prototype), "_markLoaded", this).call(this);

      return this._hooks.trigger(Config_VXPayPaymentHooksConfig.ON_LOAD, this._frame.id + '<VXPayPaymentFrame>');
    }
    /**
     * Override to add a before send hook
     * @param {String|VXPayMessage} message
     * @param {String} origin
     * @return {VXPayPaymentFrame}
     */

  }, {
    key: "postMessage",
    value: function postMessage(message) {
      var origin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '*';

      this._hooks.trigger(Config_VXPayPaymentHooksConfig.ON_BEFORE_SEND, [message], this._frame.id + '<VXPayPaymentFrame>');

      if (this._frame.contentWindow !== null) {
        this._frame.contentWindow.postMessage(message.toString(), origin);
      }

      return this;
    }
    /**
     * @param {String|undefined} token
     * @return {VXPayPaymentFrame}
     */

  }, {
    key: "initSession",
    value: function initSession() {
      var token = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

      if (this._sessionInitialized) {
        return this;
      }

      token = token || null; // init lazy loading session

      this.postMessage(new Message_VXPayInitSessionMessage(token));
      this._sessionInitialized = true;
      return this;
    }
    /**
     * @param {Object} options
     * @return {VXPayPaymentFrame}
     */

  }, {
    key: "sendOptions",
    value: function sendOptions() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.postMessage(new VXPayUpdateParamsMessage_VXPayUpdateParamsMessage(options));
      return this;
    }
    /**
     * @param {Object} options
     * @return {VXPayPaymentFrame}
     */

  }, {
    key: "sendAdditionalOptions",
    value: function sendAdditionalOptions() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.postMessage(new Message_VXPayAdditionalOptionsMessage(options));
      return this;
    }
    /**
     * @param {Object} params
     * @returns {VXPayPaymentFrame}
     */

  }, {
    key: "sendUpdateParams",
    value: function sendUpdateParams(params) {
      this.postMessage(new VXPayUpdateParamsMessage_VXPayUpdateParamsMessage(params));
      return this;
    }
    /**
     * @param {String} route
     * @return {VXPayPaymentFrame}
     */

  }, {
    key: "changeRoute",
    value: function changeRoute() {
      var route = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      return this.postMessage(new VXPayChangeRouteMessage_VXPayChangeRouteMessage(route));
    }
    /**
     * [@param {VXPayViewReadyMessage} message]
     */

  }, {
    key: "setVisible",
    value: function setVisible() {
      this.postMessage(new VXPayIsVisibleMessage_VXPayIsVisibleMessage());
    }
    /**
     * @return {VXPayPaymentHooksConfig}
     */

  }, {
    key: "hooks",
    get: function get() {
      return this._hooks;
    }
  }], [{
    key: "getDefaultStyles",
    value: function getDefaultStyles() {
      var document = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
      var uaString = typeof document !== 'undefined' ? document.defaultView.navigator.userAgent : '',
          userAgent = new VXPayUserAgentHelper_VXPayUserAgentHelper(uaString),
          bodyElement = typeof document !== 'undefined' ? document.getElementsByTagName('body').item(0) : null,
          defaultStyles = {
        border: 'none',
        width: '100%',
        height: '100%',
        top: '50%',
        left: '50%',
        marginLeft: '-325px',
        // margin does not seem to be applied :/
        zIndex: 10001,
        display: 'none',
        transform: 'translate(-50%, -50%)'
      };
      defaultStyles.position = userAgent.isMobile() ? Dom_VXPayIframe.POSITION_ABSOLUTE : Dom_VXPayIframe.POSITION_FIXED;

      if (typeof document !== 'undefined' && Dom_VXPayDomHelper.isStyleAttributeSuppored(bodyElement, 'maxHeight', '100vh')) {
        defaultStyles.maxHeight = '100vh';
      } else {
        if (userAgent.isMobile()) {
          defaultStyles.maxHeight = Dom_VXPayDomHelper.getClientHeight(document.defaultView) + 'px';
        }
      }

      return defaultStyles;
    }
  }]);

  return VXPayPaymentFrame;
}(Dom_VXPayIframe);

VXPayPaymentFrame_VXPayPaymentFrame.NAME = 'vx-payment-frame-payment';
/* harmony default export */ var Frame_VXPayPaymentFrame = (VXPayPaymentFrame_VXPayPaymentFrame);
// CONCATENATED MODULE: ./src/VXPay/Dom/Frame/VXPayPaymentTab.js
function VXPayPaymentTab_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function VXPayPaymentTab_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function VXPayPaymentTab_createClass(Constructor, protoProps, staticProps) { if (protoProps) VXPayPaymentTab_defineProperties(Constructor.prototype, protoProps); if (staticProps) VXPayPaymentTab_defineProperties(Constructor, staticProps); return Constructor; }







/**
 * @link https://www.npmjs.com/package/es6-interface
 */

var VXPayPaymentTab_VXPayPaymentTab =
/*#__PURE__*/
function () {
  /**
   * @param {Document} document
   * @param {String} name
   * @param {VXPayConfig} config
   */
  function VXPayPaymentTab(document, name, config) {
    VXPayPaymentTab_classCallCheck(this, VXPayPaymentTab);

    this._document = document;
    this._hooks = new Config_VXPayPaymentHooksConfig();
    this._loaded = false;
    this._name = name;
    this._config = config;
    this._route = VXPayPaymentTab.DEFAULT_ROUTE;
    this._promise = null;
    this._window = null; // load the normal iframe to communicate

    this._invisibleFrame = new Frame_VXPayPaymentFrame(document, config.getPaymentFrameUrl(), Frame_VXPayPaymentFrame.NAME + '_hidden');

    this._invisibleFrame.triggerLoad();
  }
  /**
   * @return {Document}
   */


  VXPayPaymentTab_createClass(VXPayPaymentTab, [{
    key: "triggerLoad",

    /**
     * Open the window
     */
    value: function triggerLoad() {
      this.getNewTab().then(this.startListening.bind(this));
    }
    /**
     * @return {Promise<Window>}
     */

  }, {
    key: "getNewTab",
    value: function getNewTab() {
      var that = this;

      var url = this._config.getPaymentFrameUrl() + '#' + this._route;

      return new Promise(function (resolve) {
        if (null !== that._window && !that._window.closed) {
          return resolve(that._window);
        }

        that._window = that._document.defaultView.open(url, that._name);
        resolve(that._window);
      });
    }
    /**
     * @return {VXPayPaymentHooksConfig}
     */

  }, {
    key: "startListening",

    /**
     * listen for incoming messages
     * @param {Window} window
     * @return {Window}
     */
    value: function startListening(window) {
      var _this = this;

      Event_VXPayEventListener.addEvent(Dom_VXPayIframe.EVENT_MESSAGE, this._document.defaultView, function (event) {
        return Hooks_VXPayHookRouter(_this._hooks, event, _this._name + '<VXPayPaymentTab>');
      });
      Event_VXPayEventListener.addEvent(Dom_VXPayIframe.EVENT_UNLOAD, this._document.defaultView, this.stopListening.bind(this));
      return window;
    }
    /**
     * Remove listeners
     */

  }, {
    key: "stopListening",
    value: function stopListening() {
      var _this2 = this;

      Event_VXPayEventListener.removeEvent(Dom_VXPayIframe.EVENT_MESSAGE, this._document.defaultView, function (event) {
        return Hooks_VXPayHookRouter(_this2._hooks, event, _this2._name + '<VXPayPaymentTab>');
      });
      Event_VXPayEventListener.removeEvent(Dom_VXPayIframe.EVENT_UNLOAD, this._document.defaultView, this.stopListening.bind(this));
    }
    /**
     * @param {Object} options
     * @return {VXPayPaymentTab}
     */

  }, {
    key: "sendOptions",
    value: function sendOptions() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      this._config.merge(options);

      this._invisibleFrame.sendOptions(options);

      return this;
    }
    /**
     * @param {Object} options
     * @return {VXPayPaymentTab}
     */

  }, {
    key: "sendAdditionalOptions",
    value: function sendAdditionalOptions() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      this._config.merge(options);

      this._invisibleFrame.sendAdditionalOptions(options);

      return this;
    }
    /**
     * @param {Object} params
     * @returns {VXPayPaymentTab}
     */

  }, {
    key: "sendUpdateParams",
    value: function sendUpdateParams(params) {
      this.postMessage(new VXPayUpdateParamsMessage_VXPayUpdateParamsMessage(params));
      return this;
    }
    /**
     * Override to add a before send hook
     * @param {String|VXPayMessage} message
     * @param {String} origin
     * @return {VXPayPaymentTab}
     */

  }, {
    key: "postMessage",
    value: function postMessage(message) {
      var origin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '*';

      this._hooks.trigger(Config_VXPayPaymentHooksConfig.ON_BEFORE_SEND, [message], this._name + '<VXPayPaymentTab>');

      if (this._window !== null && this._loaded) {
        this._window.postMessage(message.toString(), origin);
      } else {
        this._invisibleFrame.postMessage(message, origin);
      }

      return this;
    }
    /**
     * [@param {String|undefined} token]
     * @return {VXPayPaymentTab}
     */

  }, {
    key: "initSession",
    value: function initSession() {
      var token = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

      this._invisibleFrame.initSession(token);

      return this;
    }
    /**
     * @param {String} route
     * @return {VXPayPaymentTab}
     */

  }, {
    key: "changeRoute",
    value: function changeRoute() {
      var route = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : VXPayPaymentTab.DEFAULT_ROUTE;
      this._route = route;

      this._invisibleFrame.changeRoute(route);

      return this;
    }
    /**
     * [@param {VXPayViewReadyMessage} message]
     */

  }, {
    key: "setVisible",
    value: function setVisible() {
      this.triggerLoad();
    }
    /**
     * @return {VXPayPaymentTab}
     */

  }, {
    key: "show",
    value: function show() {
      this.triggerLoad();
      return this;
    }
    /**
     * @return {VXPayPaymentTab}
     */

  }, {
    key: "hide",
    value: function hide() {
      if (this._window && !this._window.closed) {
        this._window.close();
      } // reset internal state


      this._loaded = false;
      this._route = VXPayPaymentTab.DEFAULT_ROUTE;
      this._promise = null;
      return this;
    }
  }, {
    key: "document",
    get: function get() {
      return this._document;
    }
    /**
     * @return {String}
     */

  }, {
    key: "name",
    get: function get() {
      return this._name;
    }
    /**
     * @return {VXPayConfig}
     */

  }, {
    key: "config",
    get: function get() {
      return this._config;
    }
    /**
     * @return {boolean}
     */

  }, {
    key: "loaded",
    get: function get() {
      return this._loaded;
    }
    /**
     * @return {string}
     */

  }, {
    key: "route",
    get: function get() {
      return this._route;
    }
  }, {
    key: "hooks",
    get: function get() {
      return this._invisibleFrame.hooks;
    }
  }]);

  return VXPayPaymentTab;
}();

VXPayPaymentTab_VXPayPaymentTab.NAME = 'vx-payment-tab-payment';
VXPayPaymentTab_VXPayPaymentTab.DEFAULT_ROUTE = '/';
/* harmony default export */ var Frame_VXPayPaymentTab = (VXPayPaymentTab_VXPayPaymentTab);
// CONCATENATED MODULE: ./src/VXPay/Middleware/Frames/VXPayInitPaymentMiddleware.js



/**
 * @todo function seems a bit too long, maybe refactor in future?
 * @param {VXPay} vxpay
 * @param {Function} resolve
 * @param {Boolean} load
 * @return {Function}
 * @constructor
 */

var VXPayInitPaymentMiddleware_VXPayInitPaymentMiddleware = function VXPayInitPaymentMiddleware(vxpay, resolve) {
  var load = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  vxpay.logger.log('VXPayInitPaymentMiddleware()', load); // check already initialized

  if (vxpay.state.isContentLoaded) {
    vxpay.logger.log('VXPayInitPaymentMiddleware() - already loaded, resolve ...');
    return resolve(vxpay);
  } // or in progress


  if (vxpay.state.isFrameInProgress && !load) {
    vxpay.logger.log('VXPayInitPaymentMiddleware() - already in progress, resolve ...', vxpay);
    return resolve(vxpay);
  } // tab or frame?


  vxpay.state.isFrameInProgress = load;

  if (!vxpay.hasOwnProperty('_paymentFrame')) {
    vxpay._paymentFrame = vxpay.config.enableTab ? new Frame_VXPayPaymentTab(vxpay.window.document, Frame_VXPayPaymentTab.NAME, vxpay.config) : new Frame_VXPayPaymentFrame(vxpay.window.document, vxpay.config.getPaymentFrameUrl(), Frame_VXPayPaymentFrame.NAME); // do we need logging?

    if (vxpay.config.logging) {
      vxpay._paymentFrame.hooks.onAny(function (msg) {
        return vxpay.logger.log(VXPay_VXPayLogger.LOG_INCOMING, msg);
      }).onBeforeSend(function (msg) {
        return vxpay.logger.log(VXPay_VXPayLogger.LOG_OUTGOING, msg);
      });
    }
  }

  if (!vxpay._paymentFrame.loaded) {
    // set resolve hook
    vxpay._paymentFrame.hooks // state updates
    .onIframeReady(vxpay.state.markFrameReady.bind(vxpay.state)).onContentLoaded(vxpay.state.markContentLoaded.bind(vxpay.state)).onTransferToken(vxpay.state.markHasToken.bind(vxpay.state)) // functional hooks
    .onTransferToken(vxpay.config.setTokenFromMessage.bind(vxpay.config)).onFlowChange(vxpay.config.updateFlow.bind(vxpay.config)) // show frame and send isVisible
    .onViewReady(vxpay._paymentFrame.setVisible.bind(vxpay._paymentFrame)).onViewReady(vxpay._paymentFrame.show.bind(vxpay._paymentFrame)).onSuccess(vxpay._paymentFrame.hide.bind(vxpay._paymentFrame)).onSuccess(vxpay.state.reset).onClose(vxpay._paymentFrame.hide.bind(vxpay._paymentFrame)).onClose(vxpay.state.reset).onContentLoaded(function () {
      return resolve(vxpay);
    }); // trigger load if not tab


    if (load) {
      vxpay.logger.log('VXPayInitPaymentMiddleware() - not loaded yet, trigger load');
      vxpay._paymentFrame.url = vxpay.config.getPaymentFrameUrl();

      vxpay._paymentFrame.triggerLoad();
    } else {
      // resolve promise
      resolve(vxpay);
    }
  }
};

/* harmony default export */ var Frames_VXPayInitPaymentMiddleware = (VXPayInitPaymentMiddleware_VXPayInitPaymentMiddleware);
// CONCATENATED MODULE: ./src/VXPay/Middleware/Frames/VXPayInitHelperMiddleware.js



/**
 * @param {VXPay} vxpay
 * @param {Function} resolve
 * @return {Function}
 * @constructor
 */

var VXPayInitHelperMiddleware_VXPayInitHelperMiddleware = function VXPayInitHelperMiddleware(vxpay, resolve) {
  // check already initialized
  if (typeof vxpay.helperFrame !== 'undefined') {
    return resolve(vxpay);
  }

  vxpay.helperFrame = new Frame_VXPayHelperFrame(vxpay.window.document, Dom_VXPayIframe.ORIGIN_VX + '/VXPAY-V' + vxpay.apiVersion + '/helper');

  if (vxpay.config.logging) {
    vxpay.helperFrame.hooks.onAny(function (msg) {
      return vxpay.logger.log(VXPay_VXPayLogger.LOG_INCOMING, msg);
    }).onBeforeSend(function (msg) {
      return vxpay.logger.log(VXPay_VXPayLogger.LOG_OUTGOING, msg);
    });
  }

  vxpay.helperFrame.triggerLoad();
  return resolve(vxpay);
};

/* harmony default export */ var Frames_VXPayInitHelperMiddleware = (VXPayInitHelperMiddleware_VXPayInitHelperMiddleware);
// CONCATENATED MODULE: ./src/VXPay/Message/Actions/VXPayIsLoggedInActionMessage.js
function VXPayIsLoggedInActionMessage_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { VXPayIsLoggedInActionMessage_typeof = function _typeof(obj) { return typeof obj; }; } else { VXPayIsLoggedInActionMessage_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return VXPayIsLoggedInActionMessage_typeof(obj); }

function VXPayIsLoggedInActionMessage_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function VXPayIsLoggedInActionMessage_possibleConstructorReturn(self, call) { if (call && (VXPayIsLoggedInActionMessage_typeof(call) === "object" || typeof call === "function")) { return call; } return VXPayIsLoggedInActionMessage_assertThisInitialized(self); }

function VXPayIsLoggedInActionMessage_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function VXPayIsLoggedInActionMessage_getPrototypeOf(o) { VXPayIsLoggedInActionMessage_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return VXPayIsLoggedInActionMessage_getPrototypeOf(o); }

function VXPayIsLoggedInActionMessage_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) VXPayIsLoggedInActionMessage_setPrototypeOf(subClass, superClass); }

function VXPayIsLoggedInActionMessage_setPrototypeOf(o, p) { VXPayIsLoggedInActionMessage_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return VXPayIsLoggedInActionMessage_setPrototypeOf(o, p); }



var VXPayIsLoggedInActionMessage_VXPayIsLoggedInActionMessage =
/*#__PURE__*/
function (_VXPayMessage) {
  VXPayIsLoggedInActionMessage_inherits(VXPayIsLoggedInActionMessage, _VXPayMessage);

  function VXPayIsLoggedInActionMessage() {
    VXPayIsLoggedInActionMessage_classCallCheck(this, VXPayIsLoggedInActionMessage);

    return VXPayIsLoggedInActionMessage_possibleConstructorReturn(this, VXPayIsLoggedInActionMessage_getPrototypeOf(VXPayIsLoggedInActionMessage).call(this, VXPay_VXPayMessage.TYPE_ACTION_IS_LOGGED_IN));
  }

  return VXPayIsLoggedInActionMessage;
}(VXPay_VXPayMessage);


// CONCATENATED MODULE: ./src/VXPay/Middleware/Actions/VXPayIsLoggedInTriggerMiddleware.js


/**
 * @param {VXPay} vxpay
 * @param {Function} resolve
 * @param {Function} reject
 * @constructor
 */

var VXPayIsLoggedInTriggerMiddleware_VXPayIsLoggedInTriggerMiddleware = function VXPayIsLoggedInTriggerMiddleware(vxpay, resolve, reject) {
  try {
    // when the main frame is loaded - send post message
    if (vxpay.state.isContentLoaded) {
      vxpay.hooks.then(function (hooks) {
        // is hook setup?
        if (!hooks.hasOnIsLoggedIn(resolve)) {
          hooks.onIsLoggedIn(resolve);
        }
      });
      vxpay.paymentFrame.then(function (frame) {
        return frame.postMessage(new VXPayIsLoggedInActionMessage_VXPayIsLoggedInActionMessage());
      });
    } else {
      // otherwise - rely on cookie
      vxpay.initHelperFrame().then(function (vxpay) {
        return vxpay.helperFrame.getLoginCookie();
      }).then(function (msg) {
        return resolve(new Actions_VXPayIsLoggedInResponseMessage(msg.hasCookie));
      }).catch(function (err) {
        return reject(err);
      });
    }
  } catch (err) {
    reject(err);
  }

  return vxpay;
};

/* harmony default export */ var Actions_VXPayIsLoggedInTriggerMiddleware = (VXPayIsLoggedInTriggerMiddleware_VXPayIsLoggedInTriggerMiddleware);
// CONCATENATED MODULE: ./src/VXPay/Middleware/Actions/VXPayListenOrCallLoggedInMiddleware.js
function VXPayListenOrCallLoggedInMiddleware_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function VXPayListenOrCallLoggedInMiddleware_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function VXPayListenOrCallLoggedInMiddleware_createClass(Constructor, protoProps, staticProps) { if (protoProps) VXPayListenOrCallLoggedInMiddleware_defineProperties(Constructor.prototype, protoProps); if (staticProps) VXPayListenOrCallLoggedInMiddleware_defineProperties(Constructor, staticProps); return Constructor; }



var VXPayListenOrCallLoggedInMiddleware_VXPayListenOrCallLoggedInMiddleware =
/*#__PURE__*/
function () {
  /**
   * @param {VXPay} vxpay
   * @param {Function} resolve
   * @param {Function} reject
   * @constructor
   */
  function VXPayListenOrCallLoggedInMiddleware(vxpay, resolve, reject) {
    VXPayListenOrCallLoggedInMiddleware_classCallCheck(this, VXPayListenOrCallLoggedInMiddleware);

    this._vxpay = vxpay;
    this._resolve = resolve;
    this._reject = reject;
    this._handler = this.trigger.bind(this);
  }
  /**
   * @return {VXPay}
   */


  VXPayListenOrCallLoggedInMiddleware_createClass(VXPayListenOrCallLoggedInMiddleware, [{
    key: "run",
    value: function run() {
      var _this = this;

      try {
        // is token already received?
        if (this._vxpay.state.hasToken) {
          this._handler();

          return this._vxpay;
        } // did we set handler already?


        this._vxpay.hooks.then(function (hooks) {
          if (!hooks.hasOnTransferToken(_this._handler)) {
            hooks.onTransferToken(_this._handler);
          }
        });

        return this._vxpay;
      } catch (err) {
        this._reject(err);
      }
    }
    /**
     * @return {void}
     */

  }, {
    key: "trigger",
    value: function trigger() {
      Actions_VXPayIsLoggedInTriggerMiddleware(this._vxpay, this._resolve, this._reject);
    }
  }]);

  return VXPayListenOrCallLoggedInMiddleware;
}();

/* harmony default export */ var Actions_VXPayListenOrCallLoggedInMiddleware = (VXPayListenOrCallLoggedInMiddleware_VXPayListenOrCallLoggedInMiddleware);
// CONCATENATED MODULE: ./src/VXPay/Middleware/Actions/VXPayOnAVSStatusListenMiddleware.js
/**
 * @param {VXPay} vxpay
 * @param {Function} resolve
 * @param {Function} reject
 * @return {VXPay}
 * @constructor
 */
var VXPayOnAVSStatusListenMiddleware = function VXPayOnAVSStatusListenMiddleware(vxpay, resolve, reject) {
  try {
    vxpay.hooks.then(function (hooks) {
      if (!hooks.hasOnAVSStatus(resolve)) {
        hooks.onAVSStatus(resolve);
      }
    });
    return vxpay;
  } catch (err) {
    reject(err);
  }
};

/* harmony default export */ var Actions_VXPayOnAVSStatusListenMiddleware = (VXPayOnAVSStatusListenMiddleware);
// CONCATENATED MODULE: ./src/VXPay/Message/Actions/VXPayGetAVSStatusMessage.js
function VXPayGetAVSStatusMessage_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { VXPayGetAVSStatusMessage_typeof = function _typeof(obj) { return typeof obj; }; } else { VXPayGetAVSStatusMessage_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return VXPayGetAVSStatusMessage_typeof(obj); }

function VXPayGetAVSStatusMessage_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function VXPayGetAVSStatusMessage_possibleConstructorReturn(self, call) { if (call && (VXPayGetAVSStatusMessage_typeof(call) === "object" || typeof call === "function")) { return call; } return VXPayGetAVSStatusMessage_assertThisInitialized(self); }

function VXPayGetAVSStatusMessage_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function VXPayGetAVSStatusMessage_getPrototypeOf(o) { VXPayGetAVSStatusMessage_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return VXPayGetAVSStatusMessage_getPrototypeOf(o); }

function VXPayGetAVSStatusMessage_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) VXPayGetAVSStatusMessage_setPrototypeOf(subClass, superClass); }

function VXPayGetAVSStatusMessage_setPrototypeOf(o, p) { VXPayGetAVSStatusMessage_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return VXPayGetAVSStatusMessage_setPrototypeOf(o, p); }



var VXPayGetAVSStatusMessage_VXPayGetAVSStatusMessage =
/*#__PURE__*/
function (_VXPayMessage) {
  VXPayGetAVSStatusMessage_inherits(VXPayGetAVSStatusMessage, _VXPayMessage);

  function VXPayGetAVSStatusMessage() {
    VXPayGetAVSStatusMessage_classCallCheck(this, VXPayGetAVSStatusMessage);

    return VXPayGetAVSStatusMessage_possibleConstructorReturn(this, VXPayGetAVSStatusMessage_getPrototypeOf(VXPayGetAVSStatusMessage).call(this, VXPay_VXPayMessage.TYPE_ACTION_GET_AVS_STATUS));
  }

  return VXPayGetAVSStatusMessage;
}(VXPay_VXPayMessage);


// CONCATENATED MODULE: ./src/VXPay/Middleware/Actions/VXPayAVSStatusTriggerMiddleware.js

/**
 * @param {VXPay} vxpay
 * @return {VXPay}
 * @constructor
 */

var VXPayAVSStatusTriggerMiddleware_VXPayAVSStatusTriggerMiddleware = function VXPayAVSStatusTriggerMiddleware(vxpay) {
  var message = function message(frame) {
    return frame.postMessage(new VXPayGetAVSStatusMessage_VXPayGetAVSStatusMessage());
  }; // is token already received?


  if (!vxpay.state.hasToken) {
    vxpay.hooks.then(function (hooks) {
      hooks.onTransferToken(function () {
        return vxpay.paymentFrame.then(message);
      });
    });
  } else {
    // or trigger post message
    vxpay.paymentFrame.then(message);
  }

  return vxpay;
};

/* harmony default export */ var Actions_VXPayAVSStatusTriggerMiddleware = (VXPayAVSStatusTriggerMiddleware_VXPayAVSStatusTriggerMiddleware);
// CONCATENATED MODULE: ./src/VXPay/Middleware/Actions/VXPayListenForBalanceMiddleware.js
/**
 * @param {VXPay} vxpay
 * @param {Function} resolve
 * @param {Function} reject
 * @return {VXPay}
 * @constructor
 */
var VXPayListenForBalanceMiddleware = function VXPayListenForBalanceMiddleware(vxpay, resolve, reject) {
  try {
    vxpay.hooks.then(function (hooks) {
      if (!hooks.hasOnBalance(resolve)) {
        hooks.onBalance(resolve);
      }
    });
    return vxpay;
  } catch (err) {
    reject(err);
  }
};

/* harmony default export */ var Actions_VXPayListenForBalanceMiddleware = (VXPayListenForBalanceMiddleware);
// CONCATENATED MODULE: ./src/VXPay/Message/Actions/VXPayGetBalanceMessage.js
function VXPayGetBalanceMessage_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { VXPayGetBalanceMessage_typeof = function _typeof(obj) { return typeof obj; }; } else { VXPayGetBalanceMessage_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return VXPayGetBalanceMessage_typeof(obj); }

function VXPayGetBalanceMessage_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function VXPayGetBalanceMessage_possibleConstructorReturn(self, call) { if (call && (VXPayGetBalanceMessage_typeof(call) === "object" || typeof call === "function")) { return call; } return VXPayGetBalanceMessage_assertThisInitialized(self); }

function VXPayGetBalanceMessage_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function VXPayGetBalanceMessage_getPrototypeOf(o) { VXPayGetBalanceMessage_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return VXPayGetBalanceMessage_getPrototypeOf(o); }

function VXPayGetBalanceMessage_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) VXPayGetBalanceMessage_setPrototypeOf(subClass, superClass); }

function VXPayGetBalanceMessage_setPrototypeOf(o, p) { VXPayGetBalanceMessage_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return VXPayGetBalanceMessage_setPrototypeOf(o, p); }



var VXPayGetBalanceMessage_VXPayGetBalanceMessage =
/*#__PURE__*/
function (_VXPayMessage) {
  VXPayGetBalanceMessage_inherits(VXPayGetBalanceMessage, _VXPayMessage);

  function VXPayGetBalanceMessage() {
    VXPayGetBalanceMessage_classCallCheck(this, VXPayGetBalanceMessage);

    return VXPayGetBalanceMessage_possibleConstructorReturn(this, VXPayGetBalanceMessage_getPrototypeOf(VXPayGetBalanceMessage).call(this, VXPay_VXPayMessage.TYPE_ACTION_GET_BALANCE));
  }

  return VXPayGetBalanceMessage;
}(VXPay_VXPayMessage);

/* harmony default export */ var Actions_VXPayGetBalanceMessage = (VXPayGetBalanceMessage_VXPayGetBalanceMessage);
// CONCATENATED MODULE: ./src/VXPay/Middleware/Actions/VXPayBalanceTriggerMiddleware.js

/**
 * @param {VXPay} vxpay
 * @return {VXPay}
 * @constructor
 */

var VXPayBalanceTriggerMiddleware_VXPayBalanceTriggerMiddleware = function VXPayBalanceTriggerMiddleware(vxpay) {
  var message = function message(frame) {
    return frame.postMessage(new Actions_VXPayGetBalanceMessage());
  };

  if (!vxpay.state.hasToken) {
    vxpay.hooks.then(function (hooks) {
      hooks.onTransferToken(function () {
        return vxpay.paymentFrame.then(message);
      });
    });
  } else {
    vxpay.paymentFrame.then(message);
  }

  return vxpay;
};

/* harmony default export */ var Actions_VXPayBalanceTriggerMiddleware = (VXPayBalanceTriggerMiddleware_VXPayBalanceTriggerMiddleware);
// CONCATENATED MODULE: ./src/VXPay/Middleware/Actions/VXPayListenForActiveAbosMiddleware.js
/**
 * @param {VXPay} vxpay
 * @param {Function} resolve
 * @param {Function} reject
 * @return {VXPay}
 * @constructor
 */
var VXPayListenForActiveAbosMiddleware = function VXPayListenForActiveAbosMiddleware(vxpay, resolve, reject) {
  try {
    vxpay.hooks.then(function (hooks) {
      if (!hooks.hasOnActiveAbos(resolve)) {
        hooks.onActiveAbos(resolve);
      }
    });
  } catch (err) {
    reject(err);
  }

  return vxpay;
};

/* harmony default export */ var Actions_VXPayListenForActiveAbosMiddleware = (VXPayListenForActiveAbosMiddleware);
// CONCATENATED MODULE: ./src/VXPay/Message/Actions/VXPayGetActiveAbosMessage.js
function VXPayGetActiveAbosMessage_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { VXPayGetActiveAbosMessage_typeof = function _typeof(obj) { return typeof obj; }; } else { VXPayGetActiveAbosMessage_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return VXPayGetActiveAbosMessage_typeof(obj); }

function VXPayGetActiveAbosMessage_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function VXPayGetActiveAbosMessage_possibleConstructorReturn(self, call) { if (call && (VXPayGetActiveAbosMessage_typeof(call) === "object" || typeof call === "function")) { return call; } return VXPayGetActiveAbosMessage_assertThisInitialized(self); }

function VXPayGetActiveAbosMessage_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function VXPayGetActiveAbosMessage_getPrototypeOf(o) { VXPayGetActiveAbosMessage_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return VXPayGetActiveAbosMessage_getPrototypeOf(o); }

function VXPayGetActiveAbosMessage_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) VXPayGetActiveAbosMessage_setPrototypeOf(subClass, superClass); }

function VXPayGetActiveAbosMessage_setPrototypeOf(o, p) { VXPayGetActiveAbosMessage_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return VXPayGetActiveAbosMessage_setPrototypeOf(o, p); }



var VXPayGetActiveAbosMessage_VXPayGetActiveAbosMessage =
/*#__PURE__*/
function (_VXPayMessage) {
  VXPayGetActiveAbosMessage_inherits(VXPayGetActiveAbosMessage, _VXPayMessage);

  function VXPayGetActiveAbosMessage() {
    VXPayGetActiveAbosMessage_classCallCheck(this, VXPayGetActiveAbosMessage);

    return VXPayGetActiveAbosMessage_possibleConstructorReturn(this, VXPayGetActiveAbosMessage_getPrototypeOf(VXPayGetActiveAbosMessage).call(this, VXPay_VXPayMessage.TYPE_ACTION_GET_ACTIVE_ABOS));
  }

  return VXPayGetActiveAbosMessage;
}(VXPay_VXPayMessage);

/* harmony default export */ var Actions_VXPayGetActiveAbosMessage = (VXPayGetActiveAbosMessage_VXPayGetActiveAbosMessage);
// CONCATENATED MODULE: ./src/VXPay/Middleware/Actions/VXPayActiveAbosTriggerMiddleware.js

/**
 * @param {VXPay} vxpay
 * @return {VXPay}
 * @constructor
 */

var VXPayActiveAbosTriggerMiddleware_VXPayActiveAbosTriggerMiddleware = function VXPayActiveAbosTriggerMiddleware(vxpay) {
  var send = function send(frame) {
    frame.postMessage(new Actions_VXPayGetActiveAbosMessage());
  };

  if (!vxpay.state.hasToken) {
    vxpay.hooks.then(function (hooks) {
      hooks.onTransferToken(function () {
        return vxpay.paymentFrame.then(send);
      });
    });
  } else {
    vxpay.paymentFrame.then(send);
  }

  return vxpay;
};

/* harmony default export */ var Actions_VXPayActiveAbosTriggerMiddleware = (VXPayActiveAbosTriggerMiddleware_VXPayActiveAbosTriggerMiddleware);
// CONCATENATED MODULE: ./src/VXPay/Middleware/Actions/VXPayListenForLogoutMiddleware.js
/**
 * @param {VXPay} vxpay
 * @param {Function} resolve
 * @param {Function} reject
 * @return {VXPay}
 * @constructor
 */
var VXPayListenForLogoutMiddleware = function VXPayListenForLogoutMiddleware(vxpay, resolve, reject) {
  try {
    vxpay.hooks.then(function (hooks) {
      if (!hooks.hasOnLogout(resolve)) {
        hooks.onLogout(resolve);
      }
    });
    return vxpay;
  } catch (err) {
    reject(err);
  }
};

/* harmony default export */ var Actions_VXPayListenForLogoutMiddleware = (VXPayListenForLogoutMiddleware);
// CONCATENATED MODULE: ./src/VXPay/Message/Actions/VXPayLogoutMessage.js
function VXPayLogoutMessage_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { VXPayLogoutMessage_typeof = function _typeof(obj) { return typeof obj; }; } else { VXPayLogoutMessage_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return VXPayLogoutMessage_typeof(obj); }

function VXPayLogoutMessage_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function VXPayLogoutMessage_possibleConstructorReturn(self, call) { if (call && (VXPayLogoutMessage_typeof(call) === "object" || typeof call === "function")) { return call; } return VXPayLogoutMessage_assertThisInitialized(self); }

function VXPayLogoutMessage_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function VXPayLogoutMessage_getPrototypeOf(o) { VXPayLogoutMessage_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return VXPayLogoutMessage_getPrototypeOf(o); }

function VXPayLogoutMessage_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) VXPayLogoutMessage_setPrototypeOf(subClass, superClass); }

function VXPayLogoutMessage_setPrototypeOf(o, p) { VXPayLogoutMessage_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return VXPayLogoutMessage_setPrototypeOf(o, p); }



var VXPayLogoutMessage_VXPayLogoutMessage =
/*#__PURE__*/
function (_VXPayMessage) {
  VXPayLogoutMessage_inherits(VXPayLogoutMessage, _VXPayMessage);

  function VXPayLogoutMessage() {
    VXPayLogoutMessage_classCallCheck(this, VXPayLogoutMessage);

    return VXPayLogoutMessage_possibleConstructorReturn(this, VXPayLogoutMessage_getPrototypeOf(VXPayLogoutMessage).call(this, VXPay_VXPayMessage.TYPE_ACTION_LOGOUT));
  }

  return VXPayLogoutMessage;
}(VXPay_VXPayMessage);

/* harmony default export */ var Actions_VXPayLogoutMessage = (VXPayLogoutMessage_VXPayLogoutMessage);
// CONCATENATED MODULE: ./src/VXPay/Middleware/Actions/VXPayLogoutTriggerMiddleware.js

/**
 * @param {VXPay} vxpay
 * @return {VXPay}
 * @constructor
 */

var VXPayLogoutTriggerMiddleware_VXPayLogoutTriggerMiddleware = function VXPayLogoutTriggerMiddleware(vxpay) {
  var caller = function caller(frame) {
    return frame.postMessage(new Actions_VXPayLogoutMessage());
  };

  if (!vxpay.state.hasToken) {
    vxpay.hooks.then(function (hooks) {
      hooks.onTransferToken(function () {
        return vxpay.paymentFrame.then(caller);
      });
    });
  } else {
    vxpay.paymentFrame.then(caller);
  }

  return vxpay;
};

/* harmony default export */ var Actions_VXPayLogoutTriggerMiddleware = (VXPayLogoutTriggerMiddleware_VXPayLogoutTriggerMiddleware);
// CONCATENATED MODULE: ./src/VXPay/Model/VXPayState.js
function VXPayState_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function VXPayState_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function VXPayState_createClass(Constructor, protoProps, staticProps) { if (protoProps) VXPayState_defineProperties(Constructor.prototype, protoProps); if (staticProps) VXPayState_defineProperties(Constructor, staticProps); return Constructor; }

var VXPayState =
/*#__PURE__*/
function () {
  function VXPayState() {
    VXPayState_classCallCheck(this, VXPayState);

    this.reset();
  }
  /**
   * @return {boolean}
   */


  VXPayState_createClass(VXPayState, [{
    key: "markFrameReady",

    /**
     * @return {void}
     */
    value: function markFrameReady() {
      this._isFrameReady = true;
      this._isFrameInProgress = false;
    }
    /**
     * @return {void}
     */

  }, {
    key: "markContentLoaded",
    value: function markContentLoaded() {
      this._isContentLoaded = true;
    }
    /**
     * @param {VXPayTransferTokenMessage} msg
     */

  }, {
    key: "markHasToken",
    value: function markHasToken(msg) {
      this._token = msg;
    }
    /**
     * @return {undefined|VXPayTransferTokenMessage}
     */

  }, {
    key: "markSessionInitialized",
    value: function markSessionInitialized() {
      this._isSessionInitialized = true;
    }
  }, {
    key: "reset",
    value: function reset() {
      this._isFrameReady = false;
      this._token = undefined;
      this._isContentLoaded = false;
      this._isSessionInitialized = false;
      this._isFrameInProgress = false;
    }
  }, {
    key: "isFrameInProgress",
    get: function get() {
      return this._isFrameInProgress;
    }
    /**
     * @param {boolean} value
     */
    ,
    set: function set(value) {
      this._isFrameInProgress = value;
    }
    /**
     * @return {boolean}
     */

  }, {
    key: "isFrameReady",
    get: function get() {
      return this._isFrameReady;
    }
    /**
     * @param {boolean} value
     */
    ,
    set: function set(value) {
      this._isFrameReady = value;
    }
    /**
     * @return {boolean}
     */

  }, {
    key: "hasToken",
    get: function get() {
      return typeof this._token !== 'undefined';
    }
    /**
     * @return {boolean}
     */

  }, {
    key: "isContentLoaded",
    get: function get() {
      return this._isContentLoaded;
    }
    /**
     * @param {boolean} value
     */
    ,
    set: function set(value) {
      this._isContentLoaded = value;
    }
    /**
     * @return {boolean}
     */

  }, {
    key: "isSessionInitialized",
    get: function get() {
      return this._isSessionInitialized;
    }
    /**
     * @param {boolean} value
     */
    ,
    set: function set(value) {
      this._isSessionInitialized = value;
    }
  }, {
    key: "transferToken",
    get: function get() {
      return this._token;
    }
  }]);

  return VXPayState;
}();


// CONCATENATED MODULE: ./src/VXPay/Middleware/Condition/VXPayWhenTokenTransferred.js
/**
 * @param {VXPay} vxpay
 * @return {Promise<VXPay>}
 * @constructor
 */
var VXPayWhenTokenTransferred = function VXPayWhenTokenTransferred(vxpay) {
  vxpay.logger.log('VXPayWhenTokenTransferred()');
  return new Promise(function (resolve, reject) {
    try {
      // do we have the token already?
      if (vxpay.state.hasToken) {
        resolve(vxpay);
      } else {
        // otherwise - wait for it
        vxpay.hooks.then(function (hooks) {
          return hooks.onTransferToken(function () {
            return resolve(vxpay);
          });
        });
      }
    } catch (err) {
      reject(err);
    }
  });
};

/* harmony default export */ var Condition_VXPayWhenTokenTransferred = (VXPayWhenTokenTransferred);
// CONCATENATED MODULE: ./src/VXPay/Config/VXPayPaymentRoutes.js
function VXPayPaymentRoutes_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function VXPayPaymentRoutes_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function VXPayPaymentRoutes_createClass(Constructor, protoProps, staticProps) { if (protoProps) VXPayPaymentRoutes_defineProperties(Constructor.prototype, protoProps); if (staticProps) VXPayPaymentRoutes_defineProperties(Constructor, staticProps); return Constructor; }

var VXPayPaymentRoutes =
/*#__PURE__*/
function () {
  function VXPayPaymentRoutes() {
    VXPayPaymentRoutes_classCallCheck(this, VXPayPaymentRoutes);
  }

  VXPayPaymentRoutes_createClass(VXPayPaymentRoutes, null, [{
    key: "getAllowed",

    /**
     * @return {String[]}
     */
    value: function getAllowed() {
      return [VXPayPaymentRoutes.LOGIN, VXPayPaymentRoutes.SIGN_UP, VXPayPaymentRoutes.PAYMENT, VXPayPaymentRoutes.ABO, VXPayPaymentRoutes.AVS, VXPayPaymentRoutes.PROMOCODE, VXPayPaymentRoutes.OP_COMPENSATION, VXPayPaymentRoutes.PASSWORD, VXPayPaymentRoutes.PASSWORD_RESET, VXPayPaymentRoutes.AUTO_RECHARGE, VXPayPaymentRoutes.ONE_CLICK, VXPayPaymentRoutes.SETTINGS, VXPayPaymentRoutes.VOICE_CALL, VXPayPaymentRoutes.LIMIT];
    }
  }]);

  return VXPayPaymentRoutes;
}();

VXPayPaymentRoutes.LOGIN = '/login';
VXPayPaymentRoutes.SIGN_UP = '/signup';
VXPayPaymentRoutes.PAYMENT = '/payment';
VXPayPaymentRoutes.ABO = '/abo';
VXPayPaymentRoutes.AVS = '/avs';
VXPayPaymentRoutes.PROMOCODE = '/promocode';
VXPayPaymentRoutes.OP_COMPENSATION = '/opcompensation';
VXPayPaymentRoutes.PASSWORD = '/password';
VXPayPaymentRoutes.PASSWORD_RESET = '/passwordreset';
VXPayPaymentRoutes.AUTO_RECHARGE = '/autorecharge';
VXPayPaymentRoutes.ONE_CLICK = '/comfort';
VXPayPaymentRoutes.SETTINGS = '/user/settings';
VXPayPaymentRoutes.VOICE_CALL = '/voicecall';
VXPayPaymentRoutes.LIMIT = '/limit';
/* harmony default export */ var Config_VXPayPaymentRoutes = (VXPayPaymentRoutes);
// CONCATENATED MODULE: ./src/VXPay/Middleware/Command/VXPayOpenLoginCommand.js


/**
 * @param {VXPay} vxpay
 * @param {Object} flowOptions
 * @return {VXPay}
 * @constructor
 */

var VXPayOpenLoginCommand_VXPayOpenLoginCommand = function VXPayOpenLoginCommand(vxpay) {
  var flowOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  vxpay.logger.log('VXPayOpenLoginCommand()');
  vxpay.paymentFrame.then(function (frame) {
    frame.sendOptions({
      'flow': Config_VXPayFlow.LOGIN
    });

    if (flowOptions) {
      frame.sendUpdateParams(flowOptions);
    }

    frame.sendAdditionalOptions(vxpay.config.getAdditionalOptions()).changeRoute(Config_VXPayPaymentRoutes.LOGIN).initSession();
  });
  return vxpay;
};

/* harmony default export */ var Command_VXPayOpenLoginCommand = (VXPayOpenLoginCommand_VXPayOpenLoginCommand);
// CONCATENATED MODULE: ./src/VXPay/Middleware/Command/VXPayOpenSignUpCommand.js


/**
 * @param {VXPay} vxpay
 * @param {Object} flowOptions
 * @return {VXPay}
 * @constructor
 */

var VXPayOpenSignUpCommand_VXPayOpenSignUpCommand = function VXPayOpenSignUpCommand(vxpay) {
  var flowOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  vxpay.logger.log('VXPayOpenSignUpCommand()');
  vxpay.paymentFrame.then(function (frame) {
    frame.sendOptions({
      'flow': Config_VXPayFlow.LOGIN
    });

    if (flowOptions) {
      frame.sendUpdateParams(flowOptions);
    }

    return frame.sendAdditionalOptions(vxpay.config.getAdditionalOptions()).changeRoute(Config_VXPayPaymentRoutes.SIGN_UP).initSession();
  });
  return vxpay;
};

/* harmony default export */ var Command_VXPayOpenSignUpCommand = (VXPayOpenSignUpCommand_VXPayOpenSignUpCommand);
// CONCATENATED MODULE: ./src/VXPay/Config/VXPayPaymentType.js
function VXPayPaymentType_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var VXPayPaymentType = function VXPayPaymentType() {
  VXPayPaymentType_classCallCheck(this, VXPayPaymentType);
};

VXPayPaymentType.VOICE_CALL = 'Voice';
VXPayPaymentType.CREDIT_CARD = 'CC';
VXPayPaymentType.LASTSCHRIFT = 'LS';
/* harmony default export */ var Config_VXPayPaymentType = (VXPayPaymentType);
// CONCATENATED MODULE: ./src/VXPay/Middleware/Command/VXPayOpenVoiceCallCommand.js
function VXPayOpenVoiceCallCommand_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function VXPayOpenVoiceCallCommand_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function VXPayOpenVoiceCallCommand_createClass(Constructor, protoProps, staticProps) { if (protoProps) VXPayOpenVoiceCallCommand_defineProperties(Constructor.prototype, protoProps); if (staticProps) VXPayOpenVoiceCallCommand_defineProperties(Constructor, staticProps); return Constructor; }





var VXPayOpenVoiceCallCommand_VXPayOpenVoiceCallCommand =
/*#__PURE__*/
function () {
  function VXPayOpenVoiceCallCommand() {
    VXPayOpenVoiceCallCommand_classCallCheck(this, VXPayOpenVoiceCallCommand);
  }

  VXPayOpenVoiceCallCommand_createClass(VXPayOpenVoiceCallCommand, null, [{
    key: "run",

    /**
     * @param {VXPay} vxpay
     * @return {VXPay}
     */
    value: function run(vxpay) {
      vxpay.logger.log('VXPayOpenVoiceCallCommand::run()');
      vxpay.paymentFrame.then(function (frame) {
        return frame.sendOptions(VXPayOpenVoiceCallCommand.PARAMS).sendAdditionalOptions(vxpay.config.getAdditionalOptions()).changeRoute(Config_VXPayPaymentRoutes.VOICE_CALL).initSession();
      });
      return vxpay;
    }
  }]);

  return VXPayOpenVoiceCallCommand;
}();

VXPayOpenVoiceCallCommand_VXPayOpenVoiceCallCommand.PARAMS = {
  flow: Config_VXPayFlow.MONEY_CHARGE,
  paytype: Config_VXPayPaymentType.VOICE_CALL
};
/* harmony default export */ var Command_VXPayOpenVoiceCallCommand = (VXPayOpenVoiceCallCommand_VXPayOpenVoiceCallCommand);
// CONCATENATED MODULE: ./src/VXPay/Middleware/Command/VXPayOpenPaymentCommand.js
function VXPayOpenPaymentCommand_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function VXPayOpenPaymentCommand_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function VXPayOpenPaymentCommand_createClass(Constructor, protoProps, staticProps) { if (protoProps) VXPayOpenPaymentCommand_defineProperties(Constructor.prototype, protoProps); if (staticProps) VXPayOpenPaymentCommand_defineProperties(Constructor, staticProps); return Constructor; }




var VXPayOpenPaymentCommand_VXPayOpenPaymentCommand =
/*#__PURE__*/
function () {
  function VXPayOpenPaymentCommand() {
    VXPayOpenPaymentCommand_classCallCheck(this, VXPayOpenPaymentCommand);
  }

  VXPayOpenPaymentCommand_createClass(VXPayOpenPaymentCommand, null, [{
    key: "run",

    /**
     * @param {VXPay} vxpay
     * @param {Object} flowOptions
     * @return {VXPay}
     */
    value: function run(vxpay) {
      var flowOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      vxpay.logger.log('VXPayOpenPaymentCommand()');
      vxpay.paymentFrame.then(function (frame) {
        frame.sendOptions(VXPayOpenPaymentCommand.PARAMS);

        if (flowOptions) {
          frame.sendUpdateParams(flowOptions);
        }

        frame.sendAdditionalOptions(vxpay.config.getAdditionalOptions()).changeRoute(Config_VXPayPaymentRoutes.PAYMENT).initSession();
      });
      return vxpay;
    }
  }]);

  return VXPayOpenPaymentCommand;
}();

VXPayOpenPaymentCommand_VXPayOpenPaymentCommand.PARAMS = {
  flow: Config_VXPayFlow.MONEY_CHARGE,
  paytype: '' // unset paytype

};
/* harmony default export */ var Command_VXPayOpenPaymentCommand = (VXPayOpenPaymentCommand_VXPayOpenPaymentCommand);
// CONCATENATED MODULE: ./src/VXPay/Middleware/Command/VXPayOpenSettingsCommand.js
function VXPayOpenSettingsCommand_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function VXPayOpenSettingsCommand_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function VXPayOpenSettingsCommand_createClass(Constructor, protoProps, staticProps) { if (protoProps) VXPayOpenSettingsCommand_defineProperties(Constructor.prototype, protoProps); if (staticProps) VXPayOpenSettingsCommand_defineProperties(Constructor, staticProps); return Constructor; }




var VXPayOpenSettingsCommand_VXPayOpenSettingsCommand =
/*#__PURE__*/
function () {
  function VXPayOpenSettingsCommand() {
    VXPayOpenSettingsCommand_classCallCheck(this, VXPayOpenSettingsCommand);
  }

  VXPayOpenSettingsCommand_createClass(VXPayOpenSettingsCommand, null, [{
    key: "run",

    /**
     * @param {VXPay} vxpay
     * @return {VXPay}
     */
    value: function run(vxpay) {
      vxpay.logger.log('VXPayOpenSettingsCommand()');
      vxpay.paymentFrame.then(function (frame) {
        return frame.sendOptions(VXPayOpenSettingsCommand.PARAMS).sendAdditionalOptions(vxpay.config.getAdditionalOptions()).changeRoute(Config_VXPayPaymentRoutes.SETTINGS).initSession();
      });
      return vxpay;
    }
  }]);

  return VXPayOpenSettingsCommand;
}();

VXPayOpenSettingsCommand_VXPayOpenSettingsCommand.PARAMS = {
  flow: Config_VXPayFlow.SETTINGS,
  paytype: '' // reset paytype

};
/* harmony default export */ var Command_VXPayOpenSettingsCommand = (VXPayOpenSettingsCommand_VXPayOpenSettingsCommand);
// CONCATENATED MODULE: ./src/VXPay/Middleware/Command/VXPayOpenAboCommand.js


/**
 * @param {VXPay} vxpay
 * @param {Object} flowOptions
 * @return {VXPay}
 * @constructor
 */

var VXPayOpenAboCommand_VXPayOpenAboCommand = function VXPayOpenAboCommand(vxpay) {
  var flowOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  vxpay.logger.log('VXPayOpenAboCommand()');
  vxpay.paymentFrame.then(function (frame) {
    frame.sendOptions({
      'flow': Config_VXPayFlow.VIP_ABO
    });

    if (flowOptions) {
      frame.sendUpdateParams(flowOptions);
    }

    frame.sendAdditionalOptions(vxpay.config.getAdditionalOptions()).changeRoute(Config_VXPayPaymentRoutes.ABO).initSession();
  });
  return vxpay;
};

/* harmony default export */ var Command_VXPayOpenAboCommand = (VXPayOpenAboCommand_VXPayOpenAboCommand);
// CONCATENATED MODULE: ./src/VXPay/Middleware/Command/VXPayResetPasswordCommand.js
function VXPayResetPasswordCommand_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function VXPayResetPasswordCommand_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function VXPayResetPasswordCommand_createClass(Constructor, protoProps, staticProps) { if (protoProps) VXPayResetPasswordCommand_defineProperties(Constructor.prototype, protoProps); if (staticProps) VXPayResetPasswordCommand_defineProperties(Constructor, staticProps); return Constructor; }





var VXPayResetPasswordCommand_VXPayResetPasswordCommand =
/*#__PURE__*/
function () {
  function VXPayResetPasswordCommand() {
    VXPayResetPasswordCommand_classCallCheck(this, VXPayResetPasswordCommand);
  }

  VXPayResetPasswordCommand_createClass(VXPayResetPasswordCommand, null, [{
    key: "run",

    /**
     * @param {VXPay} vxpay
     * @param {Object} flowOptions
     * @return {VXPay}
     */
    value: function run(vxpay) {
      var flowOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      vxpay.logger.log('VXPayResetPasswordCommand()');
      vxpay.paymentFrame.then(function (frame) {
        frame.initSession().sendOptions(VXPayResetPasswordCommand.getParams(vxpay.config));

        if (flowOptions) {
          frame.sendUpdateParams(flowOptions);
        }

        frame.sendAdditionalOptions(vxpay.config.getAdditionalOptions()).changeRoute(Config_VXPayPaymentRoutes.PASSWORD_RESET);
      });
      return vxpay;
    }
    /**
     * @param config
     * @return {{flow: string, pwdresetUserId: String, pwdresetUserName: String, pwdresetKey: String}}
     */

  }, {
    key: "getParams",
    value: function getParams(config) {
      var helper = new VXPayUrlHelper(config.window.URL);
      return {
        flow: Config_VXPayFlow.PASSWORD_RESET,
        pwdresetUserId: helper.getQueryParam('u', config.window.location.href),
        pwdresetUserName: helper.getQueryParam('tpLoginPwdLost', config.window.location.href),
        pwdresetKey: helper.getQueryParam('key', config.window.location.href)
      };
    }
  }]);

  return VXPayResetPasswordCommand;
}();


// CONCATENATED MODULE: ./src/VXPay/Middleware/Command/VXPayLostPasswordCommand.js
function VXPayLostPasswordCommand_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function VXPayLostPasswordCommand_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function VXPayLostPasswordCommand_createClass(Constructor, protoProps, staticProps) { if (protoProps) VXPayLostPasswordCommand_defineProperties(Constructor.prototype, protoProps); if (staticProps) VXPayLostPasswordCommand_defineProperties(Constructor, staticProps); return Constructor; }





var VXPayLostPasswordCommand_VXPayLostPasswordCommand =
/*#__PURE__*/
function () {
  function VXPayLostPasswordCommand() {
    VXPayLostPasswordCommand_classCallCheck(this, VXPayLostPasswordCommand);
  }

  VXPayLostPasswordCommand_createClass(VXPayLostPasswordCommand, null, [{
    key: "run",

    /**
     * @param {VXPay} vxpay
     * @param {Object} flowOptions
     * @return {VXPay}
     */
    value: function run(vxpay) {
      var flowOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      vxpay.logger.log('VXPayLostPasswordCommand()');
      vxpay.paymentFrame.then(function (frame) {
        frame.initSession().sendOptions(VXPayLostPasswordCommand.getParams(vxpay.config));

        if (flowOptions) {
          frame.sendUpdateParams(flowOptions);
        }

        frame.sendAdditionalOptions(vxpay.config.getAdditionalOptions()).changeRoute(Config_VXPayPaymentRoutes.PASSWORD);
      });
      return vxpay;
    }
    /**
     * @param config
     * @return {{flow: string, pwdresetUserId: String, pwdresetUserName: String, pwdresetEmail: String}}
     */

  }, {
    key: "getParams",
    value: function getParams(config) {
      var helper = new VXPayUrlHelper(config.window.URL);
      return {
        flow: Config_VXPayFlow.PASSWORD_LOST,
        pwdresetUserId: helper.getQueryParam('u', config.window.location.href),
        pwdresetUserName: helper.getQueryParam('tpLoginPwdLost', config.window.location.href),
        pwdresetEmail: helper.getQueryParam('tpEmailPwdLost', config.window.location.href)
      };
    }
  }]);

  return VXPayLostPasswordCommand;
}();


// CONCATENATED MODULE: ./src/VXPay/Middleware/Command/VXPayOpenLimitedPaymentCommand.js
function VXPayOpenLimitedPaymentCommand_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function VXPayOpenLimitedPaymentCommand_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function VXPayOpenLimitedPaymentCommand_createClass(Constructor, protoProps, staticProps) { if (protoProps) VXPayOpenLimitedPaymentCommand_defineProperties(Constructor.prototype, protoProps); if (staticProps) VXPayOpenLimitedPaymentCommand_defineProperties(Constructor, staticProps); return Constructor; }




var VXPayOpenLimitedPaymentCommand_VXPayOpenLimitedPaymentCommand =
/*#__PURE__*/
function () {
  function VXPayOpenLimitedPaymentCommand() {
    VXPayOpenLimitedPaymentCommand_classCallCheck(this, VXPayOpenLimitedPaymentCommand);
  }

  VXPayOpenLimitedPaymentCommand_createClass(VXPayOpenLimitedPaymentCommand, null, [{
    key: "run",

    /**
     * @param {VXPay} vxpay
     * @return {VXPay}
     */
    value: function run(vxpay) {
      vxpay.logger.log('VXPayOpenLimitedPaymentCommand()');
      vxpay.paymentFrame.then(function (frame) {
        return frame.sendOptions(VXPayOpenLimitedPaymentCommand.PARAMS).sendAdditionalOptions(vxpay.config.getAdditionalOptions()).changeRoute(Config_VXPayPaymentRoutes.LIMIT).initSession();
      });
      return vxpay;
    }
  }]);

  return VXPayOpenLimitedPaymentCommand;
}();

VXPayOpenLimitedPaymentCommand_VXPayOpenLimitedPaymentCommand.PARAMS = {
  flow: Config_VXPayFlow.LIMIT,
  paytype: ''
};
/* harmony default export */ var Command_VXPayOpenLimitedPaymentCommand = (VXPayOpenLimitedPaymentCommand_VXPayOpenLimitedPaymentCommand);
// CONCATENATED MODULE: ./src/VXPay/Middleware/Command/VXPayOpenVipAboTrialCommand.js


/**
 * @param {VXPay} vxpay
 * @param {Object} flowOptions
 * @return {VXPay}
 * @constructor
 */

var VXPayOpenVipAboTrialCommand_VXPayOpenVipAboTrialCommand = function VXPayOpenVipAboTrialCommand(vxpay) {
  var flowOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  vxpay.logger.log('VXPayOpenVipAboTrialCommand()');
  vxpay.paymentFrame.then(function (frame) {
    frame.initSession().sendOptions({
      'flow': Config_VXPayFlow.TRIAL_VIP_ABO
    });

    if (flowOptions) {
      frame.sendUpdateParams(flowOptions);
    }

    frame.sendAdditionalOptions(vxpay.config.getAdditionalOptions()).changeRoute(Config_VXPayPaymentRoutes.ABO);
  });
  return vxpay;
};

/* harmony default export */ var Command_VXPayOpenVipAboTrialCommand = (VXPayOpenVipAboTrialCommand_VXPayOpenVipAboTrialCommand);
// CONCATENATED MODULE: ./src/VXPay/Middleware/Command/VXPayOpenPremiumAboCommand.js


/**
 * @param {VXPay} vxpay
 * @param {Object} flowOptions
 * @return {VXPay}
 */

var VXPayOpenPremiumAboCommand_VXPayOpenPremiumAboCommand = function VXPayOpenPremiumAboCommand(vxpay) {
  var flowOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  vxpay.logger.log('VXPayOpenPaymentCommand()');
  vxpay.paymentFrame.then(function (frame) {
    frame.initSession().sendOptions({
      'flow': Config_VXPayFlow.VXTV_ABO
    });

    if (flowOptions) {
      frame.sendUpdateParams(flowOptions);
    }

    frame.sendAdditionalOptions(vxpay.config.getAdditionalOptions()).changeRoute(Config_VXPayPaymentRoutes.ABO);
  });
  return vxpay;
};

/* harmony default export */ var Command_VXPayOpenPremiumAboCommand = (VXPayOpenPremiumAboCommand_VXPayOpenPremiumAboCommand);
// CONCATENATED MODULE: ./src/VXPay/Middleware/Command/VXPayOpenAVSCommand.js


/**
 * @param {VXPay} vxpay
 * @param {Object} flowOptions
 * @return {VXPay}
 * @constructor
 */

var VXPayOpenAVSCommand_VXPayOpenAVSCommand = function VXPayOpenAVSCommand(vxpay) {
  var flowOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  vxpay.logger.log('VXPayOpenAVSCommand()');
  vxpay.paymentFrame.then(function (frame) {
    frame.initSession().sendOptions({
      'flow': Config_VXPayFlow.AVS
    });

    if (flowOptions) {
      frame.sendUpdateParams(flowOptions);
    }

    frame.sendAdditionalOptions(vxpay.config.getAdditionalOptions()).changeRoute(Config_VXPayPaymentRoutes.AVS);
  });
  return vxpay;
};

/* harmony default export */ var Command_VXPayOpenAVSCommand = (VXPayOpenAVSCommand_VXPayOpenAVSCommand);
// CONCATENATED MODULE: ./src/VXPay/Middleware/Command/VXPayOpenPromoCodeCommand.js


/**
 * @param {VXPay} vxpay
 * @param {Object} flowOptions
 * @return {VXPay}
 * @constructor
 */

var VXPayOpenPromoCodeCommand_VXPayOpenPromoCodeCommand = function VXPayOpenPromoCodeCommand(vxpay, flowOptions) {
  vxpay.logger.log('VXPayOpenPromoCodeCommand()');
  vxpay.paymentFrame.then(function (frame) {
    frame.initSession().sendOptions({
      'flow': Config_VXPayFlow.PROMOCODE
    });

    if (flowOptions) {
      frame.sendUpdateParams(flowOptions);
    }

    frame.sendAdditionalOptions(vxpay.config.getAdditionalOptions()).changeRoute(Config_VXPayPaymentRoutes.PROMOCODE);
  });
  return vxpay;
};

/* harmony default export */ var Command_VXPayOpenPromoCodeCommand = (VXPayOpenPromoCodeCommand_VXPayOpenPromoCodeCommand);
// CONCATENATED MODULE: ./src/VXPay/Middleware/Command/VXPayOpenOneClickCommand.js
function VXPayOpenOneClickCommand_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function VXPayOpenOneClickCommand_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function VXPayOpenOneClickCommand_createClass(Constructor, protoProps, staticProps) { if (protoProps) VXPayOpenOneClickCommand_defineProperties(Constructor.prototype, protoProps); if (staticProps) VXPayOpenOneClickCommand_defineProperties(Constructor, staticProps); return Constructor; }




var VXPayOpenOneClickCommand_VXPayOpenOneClickCommand =
/*#__PURE__*/
function () {
  function VXPayOpenOneClickCommand() {
    VXPayOpenOneClickCommand_classCallCheck(this, VXPayOpenOneClickCommand);
  }

  VXPayOpenOneClickCommand_createClass(VXPayOpenOneClickCommand, null, [{
    key: "run",

    /**
     * @param {VXPay} vxpay
     * @param {Object} flowOptions
     * @return {VXPay}
     */
    value: function run(vxpay) {
      var flowOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      vxpay.logger.log('VXPayOpenOneClickCommand()');
      vxpay.paymentFrame.then(function (frame) {
        frame.initSession().sendOptions(VXPayOpenOneClickCommand.PARAMS);

        if (flowOptions) {
          frame.sendUpdateParams(flowOptions);
        }

        frame.sendAdditionalOptions(vxpay.config.getAdditionalOptions()).changeRoute(Config_VXPayPaymentRoutes.ONE_CLICK);
      });
      return vxpay;
    }
  }]);

  return VXPayOpenOneClickCommand;
}();

VXPayOpenOneClickCommand_VXPayOpenOneClickCommand.PARAMS = {
  flow: Config_VXPayFlow.ONE_CLICK,
  paytype: '',
  oneClickData: {
    data: null
  }
};
/* harmony default export */ var Command_VXPayOpenOneClickCommand = (VXPayOpenOneClickCommand_VXPayOpenOneClickCommand);
// CONCATENATED MODULE: ./src/VXPay/Middleware/Command/VXPayOpenAutoRechargeCommand.js
function VXPayOpenAutoRechargeCommand_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function VXPayOpenAutoRechargeCommand_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function VXPayOpenAutoRechargeCommand_createClass(Constructor, protoProps, staticProps) { if (protoProps) VXPayOpenAutoRechargeCommand_defineProperties(Constructor.prototype, protoProps); if (staticProps) VXPayOpenAutoRechargeCommand_defineProperties(Constructor, staticProps); return Constructor; }




var VXPayOpenAutoRechargeCommand_VXPayOpenAutoRechargeCommand =
/*#__PURE__*/
function () {
  function VXPayOpenAutoRechargeCommand() {
    VXPayOpenAutoRechargeCommand_classCallCheck(this, VXPayOpenAutoRechargeCommand);
  }

  VXPayOpenAutoRechargeCommand_createClass(VXPayOpenAutoRechargeCommand, null, [{
    key: "run",

    /**
     * @param {VXPay} vxpay
     * @param {Object} flowOptions
     * @return {VXPay}
     */
    value: function run(vxpay) {
      var flowOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      vxpay.logger.log('VXPayOpenAutoRechargeCommand()');
      vxpay.paymentFrame.then(function (frame) {
        frame.initSession().sendOptions(VXPayOpenAutoRechargeCommand.PARAMS);

        if (flowOptions) {
          frame.sendUpdateParams(flowOptions);
        }

        frame.sendAdditionalOptions(vxpay.config.getAdditionalOptions()).changeRoute(Config_VXPayPaymentRoutes.AUTO_RECHARGE);
      });
      return vxpay;
    }
  }]);

  return VXPayOpenAutoRechargeCommand;
}();

VXPayOpenAutoRechargeCommand_VXPayOpenAutoRechargeCommand.PARAMS = {
  flow: Config_VXPayFlow.AUTO_RECHARGE,
  autoRechargeData: {
    data: null
  }
};
/* harmony default export */ var Command_VXPayOpenAutoRechargeCommand = (VXPayOpenAutoRechargeCommand_VXPayOpenAutoRechargeCommand);
// CONCATENATED MODULE: ./src/VXPay/Middleware/Command/VXPayOpenOpenBalanceCommand.js


/**
 * @param {VXPay} vxpay
 * @param {Object} flowOptions
 * @return {VXPay}
 * @constructor
 */

var VXPayOpenOpenBalanceCommand_VXPayOpenOpenBalanceCommand = function VXPayOpenOpenBalanceCommand(vxpay) {
  var flowOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  vxpay.logger.log('VXPayOpenOneClickCommand()');
  vxpay.paymentFrame.then(function (frame) {
    frame.initSession().sendOptions({
      'flow': Config_VXPayFlow.OP_COMPENSATION
    });

    if (flowOptions) {
      frame.sendUpdateParams(flowOptions);
    }

    frame.sendAdditionalOptions(vxpay.config.getAdditionalOptions()).changeRoute(Config_VXPayPaymentRoutes.OP_COMPENSATION);
  });
  return vxpay;
};

/* harmony default export */ var Command_VXPayOpenOpenBalanceCommand = (VXPayOpenOpenBalanceCommand_VXPayOpenOpenBalanceCommand);
// CONCATENATED MODULE: ./src/VXPay/Middleware/Frames/VXPayTriggerShowForTab.js
/**
 * @param {VXPay} vxpay
 * @return {VXPay}
 * @constructor
 */
var VXPayTriggerShowForTab = function VXPayTriggerShowForTab(vxpay) {
  vxpay.logger.log('VXPayTriggerShowForTab()'); // ony for tab config - trigger show manually

  if (vxpay.config.enableTab) {
    vxpay.paymentFrame.then(function (frame) {
      return frame.show();
    });
  }

  return vxpay;
};

/* harmony default export */ var Frames_VXPayTriggerShowForTab = (VXPayTriggerShowForTab);
// CONCATENATED MODULE: ./src/VXPay.js
function VXPay_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function VXPay_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function VXPay_createClass(Constructor, protoProps, staticProps) { if (protoProps) VXPay_defineProperties(Constructor.prototype, protoProps); if (staticProps) VXPay_defineProperties(Constructor, staticProps); return Constructor; }





































var VXPay_VXPay =
/*#__PURE__*/
function () {
  /**
   * @param {VXPayConfig} config
   */
  function VXPay(config) {
    VXPay_classCallCheck(this, VXPay);

    this.config = config;
    this.logger = new VXPay_VXPayLogger(this.config.logging, this.config.window);
    this._state = new VXPayState();
    this.logger.log('VXPay::constructor - ' + JSON.stringify(this.config.getOptions()));
  }
  /**
   * @return {VXPayState}
   */


  VXPay_createClass(VXPay, [{
    key: "initHelperFrame",

    /**
     * @return {Promise<VXPay>}
     */
    value: function initHelperFrame() {
      var _this = this;

      return new Promise(function (resolve) {
        return Frames_VXPayInitHelperMiddleware(_this, resolve);
      });
    }
    /**
     * @param {Boolean} triggerLoad
     * @return {Promise<VXPay>}
     * @private
     */

  }, {
    key: "_initPaymentFrame",
    value: function _initPaymentFrame() {
      var _this2 = this;

      var triggerLoad = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      this.logger.log('VXPay::_initPaymentFrame', triggerLoad);
      return new Promise(function (resolve) {
        return Frames_VXPayInitPaymentMiddleware(_this2, resolve, triggerLoad);
      });
    }
    /**
     * @param {Object} flowOptions
     * @return {Promise<VXPay>}
     */

  }, {
    key: "openLogin",
    value: function openLogin() {
      var _this3 = this;

      var flowOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.logger.log('VXPay::openLogin');
      return new Promise(function (resolve, reject) {
        return _this3._initPaymentFrame().then(Condition_VXPayWhenTokenTransferred).then(function (vxpay) {
          return Command_VXPayOpenLoginCommand(vxpay, flowOptions);
        }).then(Frames_VXPayTriggerShowForTab).then(resolve).catch(reject);
      });
    }
    /**
     * @param {Object} flowOptions
     * @return {Promise<VXPay>}
     */

  }, {
    key: "openSignUp",
    value: function openSignUp() {
      var _this4 = this;

      var flowOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return new Promise(function (resolve, reject) {
        return _this4._initPaymentFrame().then(Condition_VXPayWhenTokenTransferred).then(function (vxpay) {
          return Command_VXPayOpenSignUpCommand(vxpay, flowOptions);
        }).then(Frames_VXPayTriggerShowForTab).then(resolve).catch(reject);
      });
    }
    /**
     * @return {Promise<VXPay>}
     */

  }, {
    key: "openVoiceCall",
    value: function openVoiceCall() {
      var _this5 = this;

      return new Promise(function (resolve, reject) {
        _this5._initPaymentFrame().then(Condition_VXPayWhenTokenTransferred).then(Command_VXPayOpenVoiceCallCommand.run).then(Frames_VXPayTriggerShowForTab).then(resolve).catch(reject);
      });
    }
    /**
     * @param {Object} flowOptions
     * @return {Promise<VXPay>}
     */

  }, {
    key: "openSignUpOrLogin",
    value: function openSignUpOrLogin() {
      var _this6 = this;

      var flowOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.initHelperFrame().then(function (vxpay) {
        return vxpay.helperFrame.getLoginCookie();
      }).then(function (msg) {
        return msg.hasCookie ? _this6.openLogin(flowOptions) : _this6.openSignUp(flowOptions);
      });
    }
    /**
     * @param {Object} flowOptions
     * @return {Promise<VXPay>}
     */

  }, {
    key: "openPayment",
    value: function openPayment() {
      var _this7 = this;

      var flowOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return new Promise(function (resolve, reject) {
        _this7._initPaymentFrame().then(Condition_VXPayWhenTokenTransferred).then(function (vxpay) {
          return Command_VXPayOpenPaymentCommand.run(vxpay, flowOptions);
        }).then(Frames_VXPayTriggerShowForTab).then(resolve).catch(reject);
      });
    }
    /**
     * @param {Object} flowOptions
     * @return {Promise<VXPay>}
     */

  }, {
    key: "openAbo",
    value: function openAbo() {
      var _this8 = this;

      var flowOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return new Promise(function (resolve, reject) {
        _this8._initPaymentFrame().then(Condition_VXPayWhenTokenTransferred).then(function (vxpay) {
          return Command_VXPayOpenAboCommand(vxpay, flowOptions);
        }).then(Frames_VXPayTriggerShowForTab).then(resolve).catch(reject);
      });
    }
    /**
     * @return {Promise<VXPay>}
     */

  }, {
    key: "openSettings",
    value: function openSettings() {
      var _this9 = this;

      return new Promise(function (resolve, reject) {
        _this9._initPaymentFrame().then(Condition_VXPayWhenTokenTransferred).then(Command_VXPayOpenSettingsCommand.run).then(Frames_VXPayTriggerShowForTab).then(resolve).catch(reject);
      });
    }
    /**
     * @param {Object} flowOptions
     * @return {Promise<VXPay>}
     */

  }, {
    key: "resetPassword",
    value: function resetPassword() {
      var _this10 = this;

      var flowOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return new Promise(function (resolve, reject) {
        _this10._initPaymentFrame().then(Condition_VXPayWhenTokenTransferred).then(function (vxpay) {
          return VXPayResetPasswordCommand_VXPayResetPasswordCommand.run(vxpay, flowOptions);
        }).then(Frames_VXPayTriggerShowForTab).then(resolve).catch(reject);
      });
    }
    /**
     * @param {Object} flowOptions
     * @return {Promise<VXPay>}
     */

  }, {
    key: "lostPassword",
    value: function lostPassword() {
      var _this11 = this;

      var flowOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return new Promise(function (resolve, reject) {
        _this11._initPaymentFrame().then(Condition_VXPayWhenTokenTransferred).then(function (vxpay) {
          return VXPayLostPasswordCommand_VXPayLostPasswordCommand.run(vxpay, flowOptions);
        }).then(Frames_VXPayTriggerShowForTab).then(resolve).catch(reject);
      });
    }
    /**
     * @return {Promise<VXPay>}
     */

  }, {
    key: "limitPayment",
    value: function limitPayment() {
      var _this12 = this;

      return new Promise(function (resolve, reject) {
        _this12._initPaymentFrame().then(Condition_VXPayWhenTokenTransferred).then(Command_VXPayOpenLimitedPaymentCommand.run).then(Frames_VXPayTriggerShowForTab).then(resolve).catch(reject);
      });
    }
    /**
     * @param {Object} flowOptions
     * @return {Promise<VXPay>}
     */

  }, {
    key: "vipAboTrial",
    value: function vipAboTrial() {
      var _this13 = this;

      var flowOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return new Promise(function (resolve, reject) {
        _this13._initPaymentFrame().then(Condition_VXPayWhenTokenTransferred).then(function (vxpay) {
          return Command_VXPayOpenVipAboTrialCommand(vxpay, flowOptions);
        }).then(Frames_VXPayTriggerShowForTab).then(resolve).catch(reject);
      });
    }
    /**
     * @param {Object} flowOptions
     * @return {Promise<VXPay>}
     */

  }, {
    key: "premiumAbo",
    value: function premiumAbo() {
      var _this14 = this;

      var flowOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return new Promise(function (resolve, reject) {
        _this14._initPaymentFrame().then(Condition_VXPayWhenTokenTransferred).then(function (vxpay) {
          return Command_VXPayOpenPremiumAboCommand(vxpay, flowOptions);
        }).then(Frames_VXPayTriggerShowForTab).then(resolve).catch(reject);
      });
    }
    /**
     * @param {Object} flowOptions
     * @return {Promise<VXPay>}
     */

  }, {
    key: "openAVS",
    value: function openAVS() {
      var _this15 = this;

      var flowOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return new Promise(function (resolve, reject) {
        _this15._initPaymentFrame().then(Condition_VXPayWhenTokenTransferred).then(function (vxpay) {
          return Command_VXPayOpenAVSCommand(vxpay, flowOptions);
        }).then(Frames_VXPayTriggerShowForTab).then(resolve).catch(reject);
      });
    }
    /**
     * @param {Object} flowOptions
     * @return {Promise<VXPay>}
     */

  }, {
    key: "openPromoCode",
    value: function openPromoCode() {
      var _this16 = this;

      var flowOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return new Promise(function (resolve, reject) {
        _this16._initPaymentFrame().then(Condition_VXPayWhenTokenTransferred).then(function (vxpay) {
          return Command_VXPayOpenPromoCodeCommand(vxpay, flowOptions);
        }).then(Frames_VXPayTriggerShowForTab).then(resolve).catch(reject);
      });
    }
    /**
     * @param {Object} flowOptions
     * @return {Promise<VXPay>}
     */

  }, {
    key: "openScratchCard",
    value: function openScratchCard() {
      var _this17 = this;

      var flowOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return new Promise(function (resolve, reject) {
        _this17._initPaymentFrame().then(Condition_VXPayWhenTokenTransferred).then(function (vxpay) {
          return Command_VXPayOpenPromoCodeCommand(vxpay, flowOptions);
        }).then(Frames_VXPayTriggerShowForTab).then(resolve).catch(reject);
      });
    }
    /**
     * @param {Object} flowOptions
     * @return {Promise<VXPay>}
     */

  }, {
    key: "openOneClick",
    value: function openOneClick() {
      var _this18 = this;

      var flowOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return new Promise(function (resolve, reject) {
        _this18._initPaymentFrame().then(Condition_VXPayWhenTokenTransferred).then(function (vxpay) {
          return Command_VXPayOpenOneClickCommand.run(vxpay, flowOptions);
        }).then(Frames_VXPayTriggerShowForTab).then(resolve).catch(reject);
      });
    }
    /**
     * @param {Object} flowOptions
     * @return {Promise<VXPay>}
     */

  }, {
    key: "openAutoReCharge",
    value: function openAutoReCharge() {
      var _this19 = this;

      var flowOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return new Promise(function (resolve, reject) {
        _this19._initPaymentFrame().then(Condition_VXPayWhenTokenTransferred).then(function (vxpay) {
          return Command_VXPayOpenAutoRechargeCommand.run(vxpay, flowOptions);
        }).then(Frames_VXPayTriggerShowForTab).then(resolve).catch(reject);
      });
    }
    /**
     * @param {Object} flowOptions
     * @return {Promise<VXPay>}
     */

  }, {
    key: "openBalance",
    value: function openBalance() {
      var _this20 = this;

      var flowOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return new Promise(function (resolve, reject) {
        _this20._initPaymentFrame().then(Condition_VXPayWhenTokenTransferred).then(function (vxpay) {
          return Command_VXPayOpenOpenBalanceCommand(vxpay, flowOptions);
        }).then(Frames_VXPayTriggerShowForTab).then(resolve).catch(reject);
      });
    }
    /**
     * @return {Promise<VXPayIsLoggedInResponseMessage>}
     */

  }, {
    key: "isLoggedIn",
    value: function isLoggedIn() {
      var _this21 = this;

      return new Promise(function (resolve, reject) {
        _this21._initPaymentFrame(!_this21.config.enableTab).then(function (vxpay) {
          return new Actions_VXPayListenOrCallLoggedInMiddleware(vxpay, resolve, reject).run();
        }).catch(reject);
      });
    }
    /**
     * @return {Promise<VXPayAVSStatusMessage>}
     */

  }, {
    key: "getAVSStatus",
    value: function getAVSStatus() {
      var _this22 = this;

      return new Promise(function (resolve, reject) {
        return _this22._initPaymentFrame().then(function (vxpay) {
          return Actions_VXPayOnAVSStatusListenMiddleware(vxpay, resolve, reject);
        }).then(Actions_VXPayAVSStatusTriggerMiddleware).catch(reject);
      });
    }
    /**
     * @return {Promise<VXPayBalanceMessage>}
     */

  }, {
    key: "getBalance",
    value: function getBalance() {
      var _this23 = this;

      return new Promise(function (resolve, reject) {
        _this23._initPaymentFrame().then(function (vxpay) {
          return Actions_VXPayListenForBalanceMiddleware(vxpay, resolve, reject);
        }).then(Actions_VXPayBalanceTriggerMiddleware).catch(reject);
      });
    }
    /**
     * @return {Promise<VXPayActiveAbosMessage>}
     */

  }, {
    key: "getActiveAbos",
    value: function getActiveAbos() {
      var _this24 = this;

      return new Promise(function (resolve, reject) {
        _this24._initPaymentFrame().then(function (vxpay) {
          return Actions_VXPayListenForActiveAbosMiddleware(vxpay, resolve, reject);
        }).then(Actions_VXPayActiveAbosTriggerMiddleware).catch(reject);
      });
    }
    /**
     * @return {Promise<VXPayLoggedOutMessage>}
     */

  }, {
    key: "logout",
    value: function logout() {
      var _this25 = this;

      return new Promise(function (resolve, reject) {
        _this25._initPaymentFrame().then(function (vxpay) {
          return Actions_VXPayListenForLogoutMiddleware(vxpay, resolve, reject);
        }).then(Actions_VXPayLogoutTriggerMiddleware).catch(reject);
      });
    }
    /**
     * @return {VXPayConfig}
     */

  }, {
    key: "state",
    get: function get() {
      return this._state;
    }
  }, {
    key: "config",
    get: function get() {
      return this._config;
    }
    /**
     * @param {VXPayConfig} value
     */
    ,
    set: function set(value) {
      if (!(value instanceof VXPay_VXPayConfig)) {
        throw new TypeError('Please provide an instance of VXPayConfig!');
      }

      if (typeof this._logger !== 'undefined') {
        this._logger.log('VXPay::config -> ', value);
      }

      this._config = value;
    }
    /**
     * @return {VXPayLogger}
     */

  }, {
    key: "logger",
    get: function get() {
      return this._logger;
    }
    /**
     * @param {VXPayLogger} value
     */
    ,
    set: function set(value) {
      if (!(value instanceof VXPay_VXPayLogger)) {
        throw new TypeError('Please provide an instance of VXPayLogger!');
      }

      this._logger = value;
    }
    /**
     * @return {Number}
     */

  }, {
    key: "apiVersion",
    get: function get() {
      return this.config.apiVersion;
    }
    /**
     * @param {Number} value
     */
    ,
    set: function set(value) {
      this.config.apiVersion = value;
    }
    /**
     * @return {Promise<VXPayPaymentHooksConfig>}
     */

  }, {
    key: "hooks",
    get: function get() {
      var _this26 = this;

      this.logger.log('VXPay::hooks');
      return new Promise(function (resolve, reject) {
        if (_this26.state.isContentLoaded) {
          _this26.logger.log('VXPay::hooks -> already loaded, resolve ...');

          return resolve(_this26._paymentFrame.hooks);
        } // init and don't trigger load


        _this26._initPaymentFrame(false).then(function (vxpay) {
          return resolve(vxpay._paymentFrame.hooks);
        }).catch(reject);
      });
    }
    /**
     * @return {Promise<VXPayPaymentFrame|VXPayPaymentTab>}
     */

  }, {
    key: "paymentFrame",
    get: function get() {
      var _this27 = this;

      return new Promise(function (resolve, reject) {
        _this27._initPaymentFrame().then(function (vxpay) {
          return resolve(vxpay._paymentFrame);
        }).catch(reject);
      });
    }
    /**
     * @param {VXPayPaymentFrame|VXPayPaymentTab} value
     */
    ,
    set: function set(value) {
      if (!(value instanceof Frame_VXPayPaymentFrame) && !(value instanceof Frame_VXPayPaymentTab)) {
        throw new TypeError('Payment frame should be an instance of VXPayPaymentFrame or VXPayPaymentTab');
      }

      this._paymentFrame = value;
    }
    /**
     * @return {VXPayHelperFrame}
     */

  }, {
    key: "helperFrame",
    get: function get() {
      return this._helperFrame;
    }
    /**
     * @param {VXPayHelperFrame} value
     */
    ,
    set: function set(value) {
      if (!(value instanceof Frame_VXPayHelperFrame)) {
        throw new TypeError('Helper frame should be an instance of VXPayHelperFrame');
      }

      this._helperFrame = value;
    }
    /**
     * @return {Window|undefined}
     */

  }, {
    key: "window",
    get: function get() {
      return this.config.window;
    }
  }]);

  return VXPay;
}();


// CONCATENATED MODULE: ./src/VXPay/VXPayNotifications.js
function VXPayNotifications_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var VXPayNotifications = function VXPayNotifications() {
  VXPayNotifications_classCallCheck(this, VXPayNotifications);
};

VXPayNotifications.SESSION_ACKNOWLEDGE = 'ackSession';
VXPayNotifications.SESSION_EXPIRED = 'sessionExpired';
VXPayNotifications.MESSAGE = 'message';
VXPayNotifications.MESSAGE_PRICE = 'messagePrice';
VXPayNotifications.CHANNELS = 'channels';
VXPayNotifications.INCOMING_MESSAGE = 'incomingMessage';
VXPayNotifications.ALL_CHANNELS_SEEN = 'allChannelsSeen';
VXPayNotifications.CAN_ONECLICK_RESULT = 'canOneClickResult';
VXPayNotifications.CHARGE_AUTORECHARGE_RESULT = 'chargeAutoRechargeResult';
VXPayNotifications.CHARGE_ONECLICK_RESULT = 'chargeOneClickResult';
VXPayNotifications.FAVORITE_ACTOR_PINNED = 'FavoriteActorPinned';
VXPayNotifications.FAVORITE_ACTOR_UNPINNED = 'FavoriteActorUnpinned';
VXPayNotifications.FAVORITE_PICTURE_PINNED = 'FavoritePicturePinned';
VXPayNotifications.FAVORITE_PICTURE_UNPINNED = 'FavoritePictureUnpinned';
VXPayNotifications.FAVORITE_ALBUM_PINNED = 'FavoriteAlbumPinned';
VXPayNotifications.FAVORITE_ALBUM_UNPINNED = 'FavoriteAlbumUnpinned';
VXPayNotifications.FAVORITE_SEDCARDS_ALBUM_PINNED = 'FavoriteSedcardsAlbumPinned';
VXPayNotifications.FAVORITE_SEDCARDS_ALBUM_UNPINNED = 'FavoriteSedcardsAlbumUnpinned';
VXPayNotifications.FAVORITE_ACTORS = 'FavoriteActors';
VXPayNotifications.GUEST_BALANCE = 'guestBalance';
VXPayNotifications.NAVBAR_NOTIFICATIONS = 'navbarNotifications';
VXPayNotifications.ACTOR_ONLINE = 'actorOnline';
VXPayNotifications.ACTOR_OFFLINE = 'actorOffline';
VXPayNotifications.AVS_REVOKED = 'avsRevoked';
VXPayNotifications.AVS_SET = 'avsSet';
VXPayNotifications.GUEST_LOCKED = 'guestLocked';
VXPayNotifications.CHANNEL_ARCHIVED = 'channelArchived';
VXPayNotifications.SEND_SIGNUP_EMAIL_RESULT = 'sendSignupEmailResult';
VXPayNotifications.VIP_ABO_UPDATE = 'vipAboUpdate';
VXPayNotifications.VXTV_ABO_UPDATE = 'vxtvAboUpdate';
VXPayNotifications.VOICECALL_START = 'voicecallStart';
VXPayNotifications.VOICECALL_STOP = 'voicecallStop';
VXPayNotifications.WELCOME_BONUS_REDEEMED = 'welcomeBonusRedeemed';
VXPayNotifications.FREE_SHOW_START = 'freeShowStart';
VXPayNotifications.FREE_SHOW_STOP = 'freeShowStop';
VXPayNotifications.PONG = 'pong';
/* harmony default export */ var VXPay_VXPayNotifications = (VXPayNotifications);
// CONCATENATED MODULE: ./src/main.js
/* concated harmony reexport VXPay */__webpack_require__.d(__webpack_exports__, "VXPay", function() { return VXPay_VXPay; });
/* concated harmony reexport VXPayConfig */__webpack_require__.d(__webpack_exports__, "VXPayConfig", function() { return VXPay_VXPayConfig; });
/* concated harmony reexport VXPayEnvironment */__webpack_require__.d(__webpack_exports__, "VXPayEnvironment", function() { return VXPay_VXPayEnvironment; });
/* concated harmony reexport VXPayLanguage */__webpack_require__.d(__webpack_exports__, "VXPayLanguage", function() { return VXPay_VXPayLanguage; });
/* concated harmony reexport VXPayNotifications */__webpack_require__.d(__webpack_exports__, "VXPayNotifications", function() { return VXPay_VXPayNotifications; });
/* concated harmony reexport VXPayModalConfig */__webpack_require__.d(__webpack_exports__, "VXPayModalConfig", function() { return Config_VXPayModalConfig; });
/* concated harmony reexport VXPayPaymentHooksConfig */__webpack_require__.d(__webpack_exports__, "VXPayPaymentHooksConfig", function() { return Config_VXPayPaymentHooksConfig; });
/* concated harmony reexport VXPayFlow */__webpack_require__.d(__webpack_exports__, "VXPayFlow", function() { return Config_VXPayFlow; });
/* concated harmony reexport VXPayCurrency */__webpack_require__.d(__webpack_exports__, "VXPayCurrency", function() { return Config_VXPayCurrency; });













/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.js");


/***/ })

/******/ });
});