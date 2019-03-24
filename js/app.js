/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded CSS chunks
/******/ 	var installedCssChunks = {
/******/ 		3: 0
/******/ 	}
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		3: 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "chunk/" + ({"1":"identified_index","2":"index_index"}[chunkId]||chunkId) + ".js"
/******/ 	}
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
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// mini-css-extract-plugin CSS loading
/******/ 		var cssChunks = {"0":1,"2":1};
/******/ 		if(installedCssChunks[chunkId]) promises.push(installedCssChunks[chunkId]);
/******/ 		else if(installedCssChunks[chunkId] !== 0 && cssChunks[chunkId]) {
/******/ 			promises.push(installedCssChunks[chunkId] = new Promise(function(resolve, reject) {
/******/ 				var href = "css/" + ({"1":"identified_index","2":"index_index"}[chunkId]||chunkId) + ".css";
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				var existingLinkTags = document.getElementsByTagName("link");
/******/ 				for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 					var tag = existingLinkTags[i];
/******/ 					var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 					if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return resolve();
/******/ 				}
/******/ 				var existingStyleTags = document.getElementsByTagName("style");
/******/ 				for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 					var tag = existingStyleTags[i];
/******/ 					var dataHref = tag.getAttribute("data-href");
/******/ 					if(dataHref === href || dataHref === fullhref) return resolve();
/******/ 				}
/******/ 				var linkTag = document.createElement("link");
/******/ 				linkTag.rel = "stylesheet";
/******/ 				linkTag.type = "text/css";
/******/ 				linkTag.onload = resolve;
/******/ 				linkTag.onerror = function(event) {
/******/ 					var request = event && event.target && event.target.src || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + request + ")");
/******/ 					err.request = request;
/******/ 					reject(err);
/******/ 				};
/******/ 				linkTag.href = fullhref;
/******/ 				var head = document.getElementsByTagName("head")[0];
/******/ 				head.appendChild(linkTag);
/******/ 			}).then(function() {
/******/ 				installedCssChunks[chunkId] = 0;
/******/ 			}));
/******/ 		}
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var head = document.getElementsByTagName('head')[0];
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							var error = new Error('Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')');
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	__webpack_require__.p = "/me/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 43);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) Microsoft Corporation
 *  All Rights Reserved
 *  MIT License
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this
 * software and associated documentation files (the 'Software'), to deal in the Software
 * without restriction, including without limitation the rights to use, copy, modify,
 * merge, publish, distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS
 * OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT
 * OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var Constants_1 = __webpack_require__(7);
/*
 * @hidden
 */
var Utils = /** @class */ (function () {
    function Utils() {
    }
    Utils.compareObjects = function (u1, u2) {
        if (!u1 || !u2) {
            return false;
        }
        if (u1.userIdentifier && u2.userIdentifier) {
            if (u1.userIdentifier === u2.userIdentifier) {
                return true;
            }
        }
        return false;
    };
    Utils.expiresIn = function (expires) {
        // if AAD did not send "expires_in" property, use default expiration of 3599 seconds, for some reason AAD sends 3599 as "expires_in" value instead of 3600
        if (!expires) {
            expires = "3599";
        }
        return this.now() + parseInt(expires, 10);
    };
    Utils.now = function () {
        return Math.round(new Date().getTime() / 1000.0);
    };
    Utils.isEmpty = function (str) {
        return (typeof str === "undefined" || !str || 0 === str.length);
    };
    Utils.extractIdToken = function (encodedIdToken) {
        // id token will be decoded to get the username
        var decodedToken = this.decodeJwt(encodedIdToken);
        if (!decodedToken) {
            return null;
        }
        try {
            var base64IdToken = decodedToken.JWSPayload;
            var base64Decoded = this.base64DecodeStringUrlSafe(base64IdToken);
            if (!base64Decoded) {
                //this._requestContext.logger.info("The returned id_token could not be base64 url safe decoded.");
                return null;
            }
            // ECMA script has JSON built-in support
            return JSON.parse(base64Decoded);
        }
        catch (err) {
            //this._requestContext.logger.error("The returned id_token could not be decoded" + err);
        }
        return null;
    };
    Utils.base64EncodeStringUrlSafe = function (input) {
        // html5 should support atob function for decoding
        if (window.btoa) {
            return window.btoa(input);
        }
        else {
            return this.encode(input);
        }
    };
    Utils.base64DecodeStringUrlSafe = function (base64IdToken) {
        // html5 should support atob function for decoding
        base64IdToken = base64IdToken.replace(/-/g, "+").replace(/_/g, "/");
        if (window.atob) {
            return decodeURIComponent(encodeURIComponent(window.atob(base64IdToken))); // jshint ignore:line
        }
        else {
            return decodeURIComponent(encodeURIComponent(this.decode(base64IdToken)));
        }
    };
    Utils.encode = function (input) {
        var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        var output = "";
        var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
        var i = 0;
        input = this.utf8Encode(input);
        while (i < input.length) {
            chr1 = input.charCodeAt(i++);
            chr2 = input.charCodeAt(i++);
            chr3 = input.charCodeAt(i++);
            enc1 = chr1 >> 2;
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
            enc4 = chr3 & 63;
            if (isNaN(chr2)) {
                enc3 = enc4 = 64;
            }
            else if (isNaN(chr3)) {
                enc4 = 64;
            }
            output = output + keyStr.charAt(enc1) + keyStr.charAt(enc2) + keyStr.charAt(enc3) + keyStr.charAt(enc4);
        }
        return output.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
    };
    Utils.utf8Encode = function (input) {
        input = input.replace(/\r\n/g, "\n");
        var utftext = "";
        for (var n = 0; n < input.length; n++) {
            var c = input.charCodeAt(n);
            if (c < 128) {
                utftext += String.fromCharCode(c);
            }
            else if ((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            }
            else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }
        }
        return utftext;
    };
    Utils.decode = function (base64IdToken) {
        var codes = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        base64IdToken = String(base64IdToken).replace(/=+$/, "");
        var length = base64IdToken.length;
        if (length % 4 === 1) {
            throw new Error("The token to be decoded is not correctly encoded.");
        }
        var h1, h2, h3, h4, bits, c1, c2, c3, decoded = "";
        for (var i = 0; i < length; i += 4) {
            //Every 4 base64 encoded character will be converted to 3 byte string, which is 24 bits
            // then 6 bits per base64 encoded character
            h1 = codes.indexOf(base64IdToken.charAt(i));
            h2 = codes.indexOf(base64IdToken.charAt(i + 1));
            h3 = codes.indexOf(base64IdToken.charAt(i + 2));
            h4 = codes.indexOf(base64IdToken.charAt(i + 3));
            // For padding, if last two are "="
            if (i + 2 === length - 1) {
                bits = h1 << 18 | h2 << 12 | h3 << 6;
                c1 = bits >> 16 & 255;
                c2 = bits >> 8 & 255;
                decoded += String.fromCharCode(c1, c2);
                break;
            }
            // if last one is "="
            else if (i + 1 === length - 1) {
                bits = h1 << 18 | h2 << 12;
                c1 = bits >> 16 & 255;
                decoded += String.fromCharCode(c1);
                break;
            }
            bits = h1 << 18 | h2 << 12 | h3 << 6 | h4;
            // then convert to 3 byte chars
            c1 = bits >> 16 & 255;
            c2 = bits >> 8 & 255;
            c3 = bits & 255;
            decoded += String.fromCharCode(c1, c2, c3);
        }
        return decoded;
    };
    Utils.decodeJwt = function (jwtToken) {
        if (this.isEmpty(jwtToken)) {
            return null;
        }
        var idTokenPartsRegex = /^([^\.\s]*)\.([^\.\s]+)\.([^\.\s]*)$/;
        var matches = idTokenPartsRegex.exec(jwtToken);
        if (!matches || matches.length < 4) {
            //this._requestContext.logger.warn("The returned id_token is not parseable.");
            return null;
        }
        var crackedToken = {
            header: matches[1],
            JWSPayload: matches[2],
            JWSSig: matches[3]
        };
        return crackedToken;
    };
    Utils.deserialize = function (query) {
        var match; // Regex for replacing addition symbol with a space
        var pl = /\+/g;
        var search = /([^&=]+)=([^&]*)/g;
        var decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); };
        var obj = {};
        match = search.exec(query);
        while (match) {
            obj[decode(match[1])] = decode(match[2]);
            match = search.exec(query);
        }
        return obj;
    };
    Utils.isIntersectingScopes = function (cachedScopes, scopes) {
        cachedScopes = this.convertToLowerCase(cachedScopes);
        for (var i = 0; i < scopes.length; i++) {
            if (cachedScopes.indexOf(scopes[i].toLowerCase()) > -1) {
                return true;
            }
        }
        return false;
    };
    Utils.containsScope = function (cachedScopes, scopes) {
        cachedScopes = this.convertToLowerCase(cachedScopes);
        return scopes.every(function (value) { return cachedScopes.indexOf(value.toString().toLowerCase()) >= 0; });
    };
    Utils.convertToLowerCase = function (scopes) {
        return scopes.map(function (scope) { return scope.toLowerCase(); });
    };
    Utils.removeElement = function (scopes, scope) {
        return scopes.filter(function (value) { return value !== scope; });
    };
    Utils.decimalToHex = function (num) {
        var hex = num.toString(16);
        while (hex.length < 2) {
            hex = "0" + hex;
        }
        return hex;
    };
    Utils.getLibraryVersion = function () {
        return "0.2.4";
    };
    /*
      * Given a url like https://a:b/common/d?e=f#g, and a tenantId, returns https://a:b/tenantId/d
      * @param href The url
      * @param tenantId The tenant id to replace
      */
    Utils.replaceFirstPath = function (url, tenantId) {
        if (!tenantId) {
            return url;
        }
        var urlObject = this.GetUrlComponents(url);
        var pathArray = urlObject.PathSegments;
        if (pathArray.length !== 0 && (pathArray[0] === Constants_1.Constants.common || pathArray[0] === Constants_1.Constants.organizations)) {
            pathArray[0] = tenantId;
            url = urlObject.Protocol + "//" + urlObject.HostNameAndPort + "/" + pathArray.join("/");
        }
        return url;
    };
    Utils.createNewGuid = function () {
        // RFC4122: The version 4 UUID is meant for generating UUIDs from truly-random or
        // pseudo-random numbers.
        // The algorithm is as follows:
        //     Set the two most significant bits (bits 6 and 7) of the
        //        clock_seq_hi_and_reserved to zero and one, respectively.
        //     Set the four most significant bits (bits 12 through 15) of the
        //        time_hi_and_version field to the 4-bit version number from
        //        Section 4.1.3. Version4
        //     Set all the other bits to randomly (or pseudo-randomly) chosen
        //     values.
        // UUID                   = time-low "-" time-mid "-"time-high-and-version "-"clock-seq-reserved and low(2hexOctet)"-" node
        // time-low               = 4hexOctet
        // time-mid               = 2hexOctet
        // time-high-and-version  = 2hexOctet
        // clock-seq-and-reserved = hexOctet:
        // clock-seq-low          = hexOctet
        // node                   = 6hexOctet
        // Format: xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx
        // y could be 1000, 1001, 1010, 1011 since most significant two bits needs to be 10
        // y values are 8, 9, A, B
        var cryptoObj = window.crypto; // for IE 11
        if (cryptoObj && cryptoObj.getRandomValues) {
            var buffer = new Uint8Array(16);
            cryptoObj.getRandomValues(buffer);
            //buffer[6] and buffer[7] represents the time_hi_and_version field. We will set the four most significant bits (4 through 7) of buffer[6] to represent decimal number 4 (UUID version number).
            buffer[6] |= 0x40; //buffer[6] | 01000000 will set the 6 bit to 1.
            buffer[6] &= 0x4f; //buffer[6] & 01001111 will set the 4, 5, and 7 bit to 0 such that bits 4-7 == 0100 = "4".
            //buffer[8] represents the clock_seq_hi_and_reserved field. We will set the two most significant bits (6 and 7) of the clock_seq_hi_and_reserved to zero and one, respectively.
            buffer[8] |= 0x80; //buffer[8] | 10000000 will set the 7 bit to 1.
            buffer[8] &= 0xbf; //buffer[8] & 10111111 will set the 6 bit to 0.
            return Utils.decimalToHex(buffer[0]) + Utils.decimalToHex(buffer[1])
                + Utils.decimalToHex(buffer[2]) + Utils.decimalToHex(buffer[3])
                + "-" + Utils.decimalToHex(buffer[4]) + Utils.decimalToHex(buffer[5])
                + "-" + Utils.decimalToHex(buffer[6]) + Utils.decimalToHex(buffer[7])
                + "-" + Utils.decimalToHex(buffer[8]) + Utils.decimalToHex(buffer[9])
                + "-" + Utils.decimalToHex(buffer[10]) + Utils.decimalToHex(buffer[11])
                + Utils.decimalToHex(buffer[12]) + Utils.decimalToHex(buffer[13])
                + Utils.decimalToHex(buffer[14]) + Utils.decimalToHex(buffer[15]);
        }
        else {
            var guidHolder = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";
            var hex = "0123456789abcdef";
            var r = 0;
            var guidResponse = "";
            for (var i = 0; i < 36; i++) {
                if (guidHolder[i] !== "-" && guidHolder[i] !== "4") {
                    // each x and y needs to be random
                    r = Math.random() * 16 | 0;
                }
                if (guidHolder[i] === "x") {
                    guidResponse += hex[r];
                }
                else if (guidHolder[i] === "y") {
                    // clock-seq-and-reserved first hex is filtered and remaining hex values are random
                    r &= 0x3; // bit and with 0011 to set pos 2 to zero ?0??
                    r |= 0x8; // set pos 3 to 1 as 1???
                    guidResponse += hex[r];
                }
                else {
                    guidResponse += guidHolder[i];
                }
            }
            return guidResponse;
        }
    };
    /*
     * Parses out the components from a url string.
     * @returns An object with the various components. Please cache this value insted of calling this multiple times on the same url.
     */
    Utils.GetUrlComponents = function (url) {
        if (!url) {
            throw "Url required";
        }
        // https://gist.github.com/curtisz/11139b2cfcaef4a261e0
        var regEx = RegExp("^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?");
        var match = url.match(regEx);
        if (!match || match.length < 6) {
            throw "Valid url required";
        }
        var urlComponents = {
            Protocol: match[1],
            HostNameAndPort: match[4],
            AbsolutePath: match[5]
        };
        var pathSegments = urlComponents.AbsolutePath.split("/");
        pathSegments = pathSegments.filter(function (val) { return val && val.length > 0; }); // remove empty elements
        urlComponents.PathSegments = pathSegments;
        return urlComponents;
    };
    /*
     * Given a url or path, append a trailing slash if one doesnt exist
     */
    Utils.CanonicalizeUri = function (url) {
        if (url) {
            url = url.toLowerCase();
        }
        if (url && !Utils.endsWith(url, "/")) {
            url += "/";
        }
        return url;
    };
    /*
      * Checks to see if the url ends with the suffix
      * Required because we are compiling for es5 instead of es6
      * @param url
      * @param str
      */
    Utils.endsWith = function (url, suffix) {
        if (!url || !suffix) {
            return false;
        }
        return url.indexOf(suffix, url.length - suffix.length) !== -1;
    };
    Utils.checkSSO = function (extraQueryParameters) {
        return !(extraQueryParameters && ((extraQueryParameters.indexOf(Constants_1.Constants.login_hint) !== -1 || extraQueryParameters.indexOf(Constants_1.Constants.sid) !== -1)));
    };
    Utils.constructUnifiedCacheExtraQueryParameter = function (idTokenObject, extraQueryParameters) {
        if (idTokenObject) {
            if (idTokenObject.hasOwnProperty(Constants_1.Constants.upn)) {
                extraQueryParameters = this.urlRemoveQueryStringParameter(extraQueryParameters, Constants_1.Constants.login_hint);
                extraQueryParameters = this.urlRemoveQueryStringParameter(extraQueryParameters, Constants_1.Constants.domain_hint);
                if (extraQueryParameters) {
                    return extraQueryParameters += "&" + Constants_1.Constants.login_hint + "=" + idTokenObject.upn + "&" + Constants_1.Constants.domain_hint + "=" + Constants_1.Constants.organizations;
                }
                else {
                    return extraQueryParameters = "&" + Constants_1.Constants.login_hint + "=" + idTokenObject.upn + "&" + Constants_1.Constants.domain_hint + "=" + Constants_1.Constants.organizations;
                }
            }
            else {
                extraQueryParameters = this.urlRemoveQueryStringParameter(extraQueryParameters, Constants_1.Constants.domain_hint);
                if (extraQueryParameters) {
                    return extraQueryParameters += "&" + Constants_1.Constants.domain_hint + "=" + Constants_1.Constants.organizations;
                }
                else {
                    return extraQueryParameters = "&" + Constants_1.Constants.domain_hint + "=" + Constants_1.Constants.organizations;
                }
            }
        }
        return extraQueryParameters;
    };
    Utils.urlRemoveQueryStringParameter = function (url, name) {
        if (this.isEmpty(url)) {
            return url;
        }
        var regex = new RegExp("(\\&" + name + "=)[^\&]+");
        url = url.replace(regex, "");
        // name=value&
        regex = new RegExp("(" + name + "=)[^\&]+&");
        url = url.replace(regex, "");
        // name=value
        regex = new RegExp("(" + name + "=)[^\&]+");
        url = url.replace(regex, "");
        return url;
    };
    return Utils;
}());
exports.Utils = Utils;
//# sourceMappingURL=Utils.js.map

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var $$observable = _interopDefault(__webpack_require__(36));

/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var randomString = function randomString() {
  return Math.random().toString(36).substring(7).split('').join('.');
};

var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString(),
  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
  }
};

/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = obj;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
}

/**
 * Creates a Redux store that holds the state tree.
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */

function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
    throw new Error('It looks like you are passing several store enhancers to ' + 'createStore(). This is not supported. Instead, compose them ' + 'together to a single function');
  }

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */


  function getState() {
    if (isDispatching) {
      throw new Error('You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');
    }

    return currentState;
  }
  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */


  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected the listener to be a function.');
    }

    if (isDispatching) {
      throw new Error('You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.');
    }

    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      if (isDispatching) {
        throw new Error('You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.');
      }

      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
    };
  }
  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */


  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;

    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }
  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */


  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer;
    dispatch({
      type: ActionTypes.REPLACE
    });
  }
  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */


  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object' || observer === null) {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe: unsubscribe
        };
      }
    }, _ref[$$observable] = function () {
      return this;
    }, _ref;
  } // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.


  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[$$observable] = observable, _ref2;
}

/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
  } catch (e) {} // eslint-disable-line no-empty

}

function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionDescription = actionType && "action \"" + String(actionType) + "\"" || 'an action';
  return "Given " + actionDescription + ", reducer \"" + key + "\" returned undefined. " + "To ignore an action, you must explicitly return the previous state. " + "If you want this reducer to hold no value, you can return null instead of undefined.";
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!isPlainObject(inputState)) {
    return "The " + argumentName + " has unexpected type of \"" + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + "\". Expected argument to be an object with the following " + ("keys: \"" + reducerKeys.join('", "') + "\"");
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });
  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });
  if (action && action.type === ActionTypes.REPLACE) return;

  if (unexpectedKeys.length > 0) {
    return "Unexpected " + (unexpectedKeys.length > 1 ? 'keys' : 'key') + " " + ("\"" + unexpectedKeys.join('", "') + "\" found in " + argumentName + ". ") + "Expected to find one of the known reducer keys instead: " + ("\"" + reducerKeys.join('", "') + "\". Unexpected keys will be ignored.");
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, {
      type: ActionTypes.INIT
    });

    if (typeof initialState === 'undefined') {
      throw new Error("Reducer \"" + key + "\" returned undefined during initialization. " + "If the state passed to the reducer is undefined, you must " + "explicitly return the initial state. The initial state may " + "not be undefined. If you don't want to set a value for this reducer, " + "you can use null instead of undefined.");
    }

    if (typeof reducer(undefined, {
      type: ActionTypes.PROBE_UNKNOWN_ACTION()
    }) === 'undefined') {
      throw new Error("Reducer \"" + key + "\" returned undefined when probed with a random type. " + ("Don't try to handle " + ActionTypes.INIT + " or other actions in \"redux/*\" ") + "namespace. They are considered private. Instead, you must return the " + "current state for any unknown actions, unless it is undefined, " + "in which case you must return the initial state, regardless of the " + "action type. The initial state may not be undefined, but can be null.");
    }
  });
}
/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */


function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};

  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (false) {}

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }

  var finalReducerKeys = Object.keys(finalReducers);
  var unexpectedKeyCache;

  if (false) {}

  var shapeAssertionError;

  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination(state, action) {
    if (state === void 0) {
      state = {};
    }

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (false) { var warningMessage; }

    var hasChanged = false;
    var nextState = {};

    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);

      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(_key, action);
        throw new Error(errorMessage);
      }

      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }

    return hasChanged ? nextState : state;
  };
}

function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(this, arguments));
  };
}
/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass a single function as the first argument,
 * and get a function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */


function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error("bindActionCreators expected an object or a function, instead received " + (actionCreators === null ? 'null' : typeof actionCreators) + ". " + "Did you write \"import ActionCreators from\" instead of \"import * as ActionCreators from\"?");
  }

  var keys = Object.keys(actionCreators);
  var boundActionCreators = {};

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var actionCreator = actionCreators[key];

    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }

  return boundActionCreators;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */
function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(void 0, arguments));
    };
  });
}

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */

function applyMiddleware() {
  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function () {
      var store = createStore.apply(void 0, arguments);

      var _dispatch = function dispatch() {
        throw new Error("Dispatching while constructing your middleware is not allowed. " + "Other middleware would not be applied to this dispatch.");
      };

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch() {
          return _dispatch.apply(void 0, arguments);
        }
      };
      var chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(void 0, chain)(store.dispatch);
      return _objectSpread({}, store, {
        dispatch: _dispatch
      });
    };
  };
}

/*
 * This is a dummy function to check if the function name has been altered by minification.
 * If the function has been minified and NODE_ENV !== 'production', warn the user.
 */

function isCrushed() {}

if (false) {}

exports.createStore = createStore;
exports.combineReducers = combineReducers;
exports.bindActionCreators = bindActionCreators;
exports.applyMiddleware = applyMiddleware;
exports.compose = compose;
exports.__DO_NOT_USE__ActionTypes = ActionTypes;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(8))(0);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(8))(2);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(8))(1);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return MINUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LOGOUT; });
var ADD = 'ADD';
var MINUS = 'MINUS';
var LOGIN = 'LOGIN';
var LOGOUT = 'LOGOUT';

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Utils_1 = __webpack_require__(0);
var ErrorMessage_1 = __webpack_require__(11);
var XHRClient_1 = __webpack_require__(15);
/**
 * Copyright (c) Microsoft Corporation
 *  All Rights Reserved
 *  MIT License
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this
 * software and associated documentation files (the 'Software'), to deal in the Software
 * without restriction, including without limitation the rights to use, copy, modify,
 * merge, publish, distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS
 * OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT
 * OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
/*
 * @hidden
 */
var AuthorityType;
(function (AuthorityType) {
    AuthorityType[AuthorityType["Aad"] = 0] = "Aad";
    AuthorityType[AuthorityType["Adfs"] = 1] = "Adfs";
    AuthorityType[AuthorityType["B2C"] = 2] = "B2C";
})(AuthorityType = exports.AuthorityType || (exports.AuthorityType = {}));
/*
 * @hidden
 */
var Authority = /** @class */ (function () {
    function Authority(authority, validateAuthority) {
        this.IsValidationEnabled = validateAuthority;
        this.CanonicalAuthority = authority;
        this.validateAsUri();
    }
    Object.defineProperty(Authority.prototype, "Tenant", {
        get: function () {
            return this.CanonicalAuthorityUrlComponents.PathSegments[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Authority.prototype, "AuthorizationEndpoint", {
        get: function () {
            this.validateResolved();
            return this.tenantDiscoveryResponse.AuthorizationEndpoint.replace("{tenant}", this.Tenant);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Authority.prototype, "EndSessionEndpoint", {
        get: function () {
            this.validateResolved();
            return this.tenantDiscoveryResponse.EndSessionEndpoint.replace("{tenant}", this.Tenant);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Authority.prototype, "SelfSignedJwtAudience", {
        get: function () {
            this.validateResolved();
            return this.tenantDiscoveryResponse.Issuer.replace("{tenant}", this.Tenant);
        },
        enumerable: true,
        configurable: true
    });
    Authority.prototype.validateResolved = function () {
        if (!this.tenantDiscoveryResponse) {
            throw "Please call ResolveEndpointsAsync first";
        }
    };
    Object.defineProperty(Authority.prototype, "CanonicalAuthority", {
        /*
         * A URL that is the authority set by the developer
         */
        get: function () {
            return this.canonicalAuthority;
        },
        set: function (url) {
            this.canonicalAuthority = Utils_1.Utils.CanonicalizeUri(url);
            this.canonicalAuthorityUrlComponents = null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Authority.prototype, "CanonicalAuthorityUrlComponents", {
        get: function () {
            if (!this.canonicalAuthorityUrlComponents) {
                this.canonicalAuthorityUrlComponents = Utils_1.Utils.GetUrlComponents(this.CanonicalAuthority);
            }
            return this.canonicalAuthorityUrlComponents;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Authority.prototype, "DefaultOpenIdConfigurationEndpoint", {
        /*
         * // http://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata
         */
        get: function () {
            return this.CanonicalAuthority + "v2.0/.well-known/openid-configuration";
        },
        enumerable: true,
        configurable: true
    });
    /*
     * Given a string, validate that it is of the form https://domain/path
     */
    Authority.prototype.validateAsUri = function () {
        var components;
        try {
            components = this.CanonicalAuthorityUrlComponents;
        }
        catch (e) {
            throw ErrorMessage_1.ErrorMessage.invalidAuthorityType;
        }
        if (!components.Protocol || components.Protocol.toLowerCase() !== "https:") {
            throw ErrorMessage_1.ErrorMessage.authorityUriInsecure;
        }
        if (!components.PathSegments || components.PathSegments.length < 1) {
            throw ErrorMessage_1.ErrorMessage.authorityUriInvalidPath;
        }
    };
    /*
     * Calls the OIDC endpoint and returns the response
     */
    Authority.prototype.DiscoverEndpoints = function (openIdConfigurationEndpoint) {
        var client = new XHRClient_1.XhrClient();
        return client.sendRequestAsync(openIdConfigurationEndpoint, "GET", /*enableCaching: */ true)
            .then(function (response) {
            return {
                AuthorizationEndpoint: response.authorization_endpoint,
                EndSessionEndpoint: response.end_session_endpoint,
                Issuer: response.issuer
            };
        });
    };
    /*
     * Returns a promise.
     * Checks to see if the authority is in the cache
     * Discover endpoints via openid-configuration
     * If successful, caches the endpoint for later use in OIDC
     */
    Authority.prototype.ResolveEndpointsAsync = function () {
        var _this = this;
        var openIdConfigurationEndpoint = "";
        return this.GetOpenIdConfigurationEndpointAsync().then(function (openIdConfigurationEndpointResponse) {
            openIdConfigurationEndpoint = openIdConfigurationEndpointResponse;
            return _this.DiscoverEndpoints(openIdConfigurationEndpoint);
        }).then(function (tenantDiscoveryResponse) {
            _this.tenantDiscoveryResponse = tenantDiscoveryResponse;
            return _this;
        });
    };
    return Authority;
}());
exports.Authority = Authority;
//# sourceMappingURL=Authority.js.map

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  * Copyright (c) Microsoft Corporation
  *  All Rights Reserved
  *  MIT License
  *
  * Permission is hereby granted, free of charge, to any person obtaining a copy of this
  * software and associated documentation files (the "Software"), to deal in the Software
  * without restriction, including without limitation the rights to use, copy, modify,
  * merge, publish, distribute, sublicense, and/or sell copies of the Software, and to
  * permit persons to whom the Software is furnished to do so, subject to the following
  * conditions:
  *
  * The above copyright notice and this permission notice shall be
  * included in all copies or substantial portions of the Software.
  *
  * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS
  * OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
  * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT
  * OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
  */
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @hidden
 */
var Constants = /** @class */ (function () {
    function Constants() {
    }
    Object.defineProperty(Constants, "errorDescription", {
        get: function () { return "error_description"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "error", {
        get: function () { return "error"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "scope", {
        get: function () { return "scope"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "acquireTokenUser", {
        get: function () { return "msal.acquireTokenUser"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "clientInfo", {
        get: function () { return "client_info"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "clientId", {
        get: function () { return "clientId"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "authority", {
        get: function () { return "msal.authority"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "idToken", {
        get: function () { return "id_token"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "accessToken", {
        get: function () { return "access_token"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "expiresIn", {
        get: function () { return "expires_in"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "sessionState", {
        get: function () { return "session_state"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "msalClientInfo", {
        get: function () { return "msal.client.info"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "msalError", {
        get: function () { return "msal.error"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "msalErrorDescription", {
        get: function () { return "msal.error.description"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "msalSessionState", {
        get: function () { return "msal.session.state"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "tokenKeys", {
        get: function () { return "msal.token.keys"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "accessTokenKey", {
        get: function () { return "msal.access.token.key"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "expirationKey", {
        get: function () { return "msal.expiration.key"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "stateLogin", {
        get: function () { return "msal.state.login"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "stateAcquireToken", {
        get: function () { return "msal.state.acquireToken"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "stateRenew", {
        get: function () { return "msal.state.renew"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "nonceIdToken", {
        get: function () { return "msal.nonce.idtoken"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "userName", {
        get: function () { return "msal.username"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "idTokenKey", {
        get: function () { return "msal.idtoken"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "loginRequest", {
        get: function () { return "msal.login.request"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "loginError", {
        get: function () { return "msal.login.error"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "renewStatus", {
        get: function () { return "msal.token.renew.status"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "msal", {
        get: function () { return "msal"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "no_user", {
        get: function () { return "NO_USER"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "login_hint", {
        get: function () { return "login_hint"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "domain_hint", {
        get: function () { return "domain_hint"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "organizations", {
        get: function () { return "organizations"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "consumers", {
        get: function () { return "consumers"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "consumersUtid", {
        get: function () { return "9188040d-6c67-4c5b-b112-36a304b66dad"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "sid", {
        get: function () { return "sid"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "upn", {
        get: function () { return "upn"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "adalIdToken", {
        get: function () { return "adal.idtoken"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "prompt_select_account", {
        get: function () { return "&prompt=select_account"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "prompt_none", {
        get: function () { return "&prompt=none"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "prompt", {
        get: function () { return "prompt"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "response_mode_fragment", {
        get: function () { return "&response_mode=fragment"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "resourceDelimeter", {
        get: function () { return "|"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "tokenRenewStatusCancelled", {
        get: function () { return "Canceled"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "tokenRenewStatusCompleted", {
        get: function () { return "Completed"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "tokenRenewStatusInProgress", {
        get: function () { return "In Progress"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "popUpWidth", {
        get: function () { return this._popUpWidth; },
        set: function (width) {
            this._popUpWidth = width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "popUpHeight", {
        get: function () { return this._popUpHeight; },
        set: function (height) {
            this._popUpHeight = height;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "login", {
        get: function () { return "LOGIN"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "renewToken", {
        get: function () { return "RENEW_TOKEN"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "unknown", {
        get: function () { return "UNKNOWN"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "urlHash", {
        get: function () { return "msal.urlHash"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "angularLoginRequest", {
        get: function () { return "msal.angular.login.request"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "userIdentifier", {
        get: function () { return "userIdentifier"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "common", {
        get: function () { return "common"; },
        enumerable: true,
        configurable: true
    });
    Constants._popUpWidth = 483;
    Constants._popUpHeight = 600;
    return Constants;
}());
exports.Constants = Constants;
/*
 * @hidden
 */
var ErrorCodes = /** @class */ (function () {
    function ErrorCodes() {
    }
    Object.defineProperty(ErrorCodes, "loginProgressError", {
        get: function () { return "login_progress_error"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ErrorCodes, "acquireTokenProgressError", {
        get: function () { return "acquiretoken_progress_error"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ErrorCodes, "inputScopesError", {
        get: function () { return "input_scopes_error"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ErrorCodes, "endpointResolutionError", {
        get: function () { return "endpoints_resolution_error"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ErrorCodes, "popUpWindowError", {
        get: function () { return "popup_window_error"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ErrorCodes, "userLoginError", {
        get: function () { return "user_login_error"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ErrorCodes, "userCancelledError", {
        get: function () { return "user_cancelled"; },
        enumerable: true,
        configurable: true
    });
    return ErrorCodes;
}());
exports.ErrorCodes = ErrorCodes;
/*
 * @hidden
 */
var ErrorDescription = /** @class */ (function () {
    function ErrorDescription() {
    }
    Object.defineProperty(ErrorDescription, "loginProgressError", {
        get: function () { return "Login is in progress"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ErrorDescription, "acquireTokenProgressError", {
        get: function () { return "Acquire token is in progress"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ErrorDescription, "inputScopesError", {
        get: function () { return "Invalid value of input scopes provided"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ErrorDescription, "endpointResolutionError", {
        get: function () { return "Endpoints cannot be resolved"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ErrorDescription, "popUpWindowError", {
        get: function () { return "Error opening popup window. This can happen if you are using IE or if popups are blocked in the browser."; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ErrorDescription, "userLoginError", {
        get: function () { return "User login is required"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ErrorDescription, "userCancelledError", {
        get: function () { return "User closed the popup window and cancelled the flow"; },
        enumerable: true,
        configurable: true
    });
    return ErrorDescription;
}());
exports.ErrorDescription = ErrorDescription;
//# sourceMappingURL=Constants.js.map

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = lib;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(8))(4);

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global global, define, System, Reflect, Promise */
var __extends;
var __assign;
var __rest;
var __decorate;
var __param;
var __metadata;
var __awaiter;
var __generator;
var __exportStar;
var __values;
var __read;
var __spread;
var __await;
var __asyncGenerator;
var __asyncDelegator;
var __asyncValues;
(function (factory) {
    var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (exports) { factory(createExporter(root, createExporter(exports))); }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
    else {}
    function createExporter(exports, previous) {
        return function (id, v) { return exports[id] = previous ? previous(id, v) : v; };
    }
})
(function (exporter) {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

    __extends = function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };

    __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };

    __rest = function (s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
                t[p[i]] = s[p[i]];
        return t;
    };

    __decorate = function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    __param = function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };

    __metadata = function (metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    };

    __awaiter = function (thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };

    __generator = function (thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [0, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    };

    __exportStar = function (m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    };

    __values = function (o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    };

    __read = function (o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    };

    __spread = function () {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    };

    __await = function (v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    };

    __asyncGenerator = function (thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);  }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    };

    __asyncDelegator = function (o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { if (o[n]) i[n] = function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; }; }
    };

    __asyncValues = function (o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator];
        return m ? m.call(o) : typeof __values === "function" ? __values(o) : o[Symbol.iterator]();
    };

    exporter("__extends", __extends);
    exporter("__assign", __assign);
    exporter("__rest", __rest);
    exporter("__decorate", __decorate);
    exporter("__param", __param);
    exporter("__metadata", __metadata);
    exporter("__awaiter", __awaiter);
    exporter("__generator", __generator);
    exporter("__exportStar", __exportStar);
    exporter("__values", __values);
    exporter("__read", __read);
    exporter("__spread", __spread);
    exporter("__await", __await);
    exporter("__asyncGenerator", __asyncGenerator);
    exporter("__asyncDelegator", __asyncDelegator);
    exporter("__asyncValues", __asyncValues);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(4)))

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  * Copyright (c) Microsoft Corporation
  *  All Rights Reserved
  *  MIT License
  *
  * Permission is hereby granted, free of charge, to any person obtaining a copy of this
  * software and associated documentation files (the "Software"), to deal in the Software
  * without restriction, including without limitation the rights to use, copy, modify,
  * merge, publish, distribute, sublicense, and/or sell copies of the Software, and to
  * permit persons to whom the Software is furnished to do so, subject to the following
  * conditions:
  *
  * The above copyright notice and this permission notice shall be
  * included in all copies or substantial portions of the Software.
  *
  * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS
  * OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
  * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT
  * OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
  */
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @hidden
 */
var ErrorMessage = /** @class */ (function () {
    function ErrorMessage() {
    }
    Object.defineProperty(ErrorMessage, "authorityUriInvalidPath", {
        get: function () { return "AuthorityUriInvalidPath"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ErrorMessage, "authorityUriInsecure", {
        get: function () { return "AuthorityUriInsecure"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ErrorMessage, "invalidAuthorityType", {
        get: function () { return "InvalidAuthorityType"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ErrorMessage, "unsupportedAuthorityValidation", {
        get: function () { return "UnsupportedAuthorityValidation"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ErrorMessage, "b2cAuthorityUriInvalidPath", {
        get: function () { return "B2cAuthorityUriInvalidPath"; },
        enumerable: true,
        configurable: true
    });
    return ErrorMessage;
}());
exports.ErrorMessage = ErrorMessage;
//# sourceMappingURL=ErrorMessage.js.map

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) Microsoft Corporation
 *  All Rights Reserved
 *  MIT License
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this
 * software and associated documentation files (the 'Software'), to deal in the Software
 * without restriction, including without limitation the rights to use, copy, modify,
 * merge, publish, distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS
 * OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT
 * OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var Utils_1 = __webpack_require__(0);
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["Error"] = 0] = "Error";
    LogLevel[LogLevel["Warning"] = 1] = "Warning";
    LogLevel[LogLevel["Info"] = 2] = "Info";
    LogLevel[LogLevel["Verbose"] = 3] = "Verbose";
})(LogLevel = exports.LogLevel || (exports.LogLevel = {}));
var Logger = /** @class */ (function () {
    function Logger(localCallback, options) {
        if (options === void 0) { options = {}; }
        /*
         * @hidden
         */
        this._level = LogLevel.Info;
        var _a = options.correlationId, correlationId = _a === void 0 ? "" : _a, _b = options.level, level = _b === void 0 ? LogLevel.Info : _b, _c = options.piiLoggingEnabled, piiLoggingEnabled = _c === void 0 ? false : _c;
        this._localCallback = localCallback;
        this._correlationId = correlationId;
        this._level = level;
        this._piiLoggingEnabled = piiLoggingEnabled;
    }
    /*
     * @hidden
     */
    Logger.prototype.logMessage = function (logLevel, logMessage, containsPii) {
        if ((logLevel > this._level) || (!this._piiLoggingEnabled && containsPii)) {
            return;
        }
        var timestamp = new Date().toUTCString();
        var log;
        if (!Utils_1.Utils.isEmpty(this._correlationId)) {
            log = timestamp + ":" + this._correlationId + "-" + Utils_1.Utils.getLibraryVersion() + "-" + LogLevel[logLevel] + " " + logMessage;
        }
        else {
            log = timestamp + ":" + Utils_1.Utils.getLibraryVersion() + "-" + LogLevel[logLevel] + " " + logMessage;
        }
        this.executeCallback(logLevel, log, containsPii);
    };
    /*
     * @hidden
     */
    Logger.prototype.executeCallback = function (level, message, containsPii) {
        if (this._localCallback) {
            this._localCallback(level, message, containsPii);
        }
    };
    /*
     * @hidden
     */
    Logger.prototype.error = function (message) {
        this.logMessage(LogLevel.Error, message, false);
    };
    /*
     * @hidden
     */
    Logger.prototype.errorPii = function (message) {
        this.logMessage(LogLevel.Error, message, true);
    };
    /*
     * @hidden
     */
    Logger.prototype.warning = function (message) {
        this.logMessage(LogLevel.Warning, message, false);
    };
    /*
     * @hidden
     */
    Logger.prototype.warningPii = function (message) {
        this.logMessage(LogLevel.Warning, message, true);
    };
    /*
     * @hidden
     */
    Logger.prototype.info = function (message) {
        this.logMessage(LogLevel.Info, message, false);
    };
    /*
     * @hidden
     */
    Logger.prototype.infoPii = function (message) {
        this.logMessage(LogLevel.Info, message, true);
    };
    /*
     * @hidden
     */
    Logger.prototype.verbose = function (message) {
        this.logMessage(LogLevel.Verbose, message, false);
    };
    /*
     * @hidden
     */
    Logger.prototype.verbosePii = function (message) {
        this.logMessage(LogLevel.Verbose, message, true);
    };
    return Logger;
}());
exports.Logger = Logger;
//# sourceMappingURL=Logger.js.map

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/* harmony import */ var msal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var msal__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(msal__WEBPACK_IMPORTED_MODULE_0__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }


var applicationConfig = {
  clientID: 'bacb8d3b-6ee0-4443-9bea-b54485a5a20d',
  authority: 'https://login.microsoftonline.com/tfp/unihearti.onmicrosoft.com/B2C_1_tictactoe',
  b2cScopes: ["https://unihearti.onmicrosoft.com/hello/demo.read"]
};
var userAgentApp = new msal__WEBPACK_IMPORTED_MODULE_0__["UserAgentApplication"](applicationConfig.clientID, applicationConfig.authority, function (errorDesc, token, error, tokenType) {
  console.log(errorDesc, token, error, tokenType);
});

var User = function () {
  function User() {
    _classCallCheck(this, User);
  }

  _createClass(User, null, [{
    key: 'getAgent',
    value: function getAgent() {
      return userAgentApp;
    }
  }, {
    key: 'get',
    value: function get() {
      return userAgentApp.getUser();
    }
  }, {
    key: 'login',
    value: function login() {
      userAgentApp.loginRedirect(applicationConfig.b2cScopes);
    }
  }, {
    key: 'logout',
    value: function logout() {
      userAgentApp.logout();
    }
  }]);

  return User;
}();



/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
   true ? module.exports = factory(__webpack_require__(2), __webpack_require__(3), __webpack_require__(1)) :
  undefined;
}(this, (function (nervjs,taroH5,redux) { 'use strict';

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      var ownKeys = Object.keys(source);

      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }

      ownKeys.forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    }

    return target;
  }

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  /* eslint-disable-next-line import/no-unresolved */
  var EMPTY_ARRAY = [];
  var isArray = Array.isArray;
  var Children = {
    only: function only(children) {
      children = Children.toArray(children);

      if (children.length !== 1) {
        throw new Error('Provider expects only one child.');
      }

      return children[0];
    },
    toArray: function toArray(children) {
      if (children === null || children === void 0) {
        return [];
      }

      return isArray(children) ? children : EMPTY_ARRAY.concat(children);
    }
  };

  function proptype() {}

  proptype.isRequired = proptype;

  var getProptype = function getProptype() {
    return proptype;
  };

  var PropTypes = {
    element: getProptype,
    func: getProptype,
    shape: getProptype,
    instanceOf: getProptype
  };

  var subscriptionShape = PropTypes.shape({
    trySubscribe: PropTypes.func.isRequired,
    tryUnsubscribe: PropTypes.func.isRequired,
    notifyNestedSubs: PropTypes.func.isRequired,
    isSubscribed: PropTypes.func.isRequired
  });
  var storeShape = PropTypes.shape({
    subscribe: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired,
    getState: PropTypes.func.isRequired
  });

  /**
   * Prints a warning in the console if it exists.
   *
   * @param {String} message The warning message.
   * @returns {void}
   */

  function createProvider(storeKey) {
    var _Provider$childContex;

    if (storeKey === void 0) {
      storeKey = 'store';
    }

    var subscriptionKey = storeKey + "Subscription";

    var Provider =
    /*#__PURE__*/
    function (_Component) {
      _inheritsLoose(Provider, _Component);

      var _proto = Provider.prototype;

      _proto.getChildContext = function getChildContext() {
        var _ref;

        return _ref = {}, _ref[storeKey] = this[storeKey], _ref[subscriptionKey] = null, _ref;
      };

      function Provider(props, context) {
        var _this;

        _this = _Component.call(this, props, context) || this;
        _this[storeKey] = props.store;
        return _this;
      }

      _proto.render = function render() {
        return Children.only(this.props.children);
      };

      return Provider;
    }(taroH5.Component);

    Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[storeKey] = storeShape.isRequired, _Provider$childContex[subscriptionKey] = subscriptionShape, _Provider$childContex);
    return Provider;
  }
  var Provider = createProvider();

  /**
   * Copyright 2015, Yahoo! Inc.
   * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
   */

  var REACT_STATICS = {
    childContextTypes: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
  };
  var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
  };
  var defineProperty = Object.defineProperty;
  var getOwnPropertyNames = Object.getOwnPropertyNames;
  var getOwnPropertySymbols = Object.getOwnPropertySymbols;
  var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  var getPrototypeOf = Object.getPrototypeOf;
  var objectPrototype = getPrototypeOf && getPrototypeOf(Object);

  function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') {
      // don't hoist over string (html) components
      if (objectPrototype) {
        var inheritedComponent = getPrototypeOf(sourceComponent);

        if (inheritedComponent && inheritedComponent !== objectPrototype) {
          hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
        }
      }

      var keys = getOwnPropertyNames(sourceComponent);

      if (getOwnPropertySymbols) {
        keys = keys.concat(getOwnPropertySymbols(sourceComponent));
      }

      for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];

        if (!REACT_STATICS[key] && !KNOWN_STATICS[key] && (!blacklist || !blacklist[key])) {
          var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

          try {
            // Avoid failures from read-only properties
            defineProperty(targetComponent, key, descriptor);
          } catch (e) {}
        }
      }

      return targetComponent;
    }

    return targetComponent;
  }

  var hoistNonReactStatics_cjs = hoistNonReactStatics;

  var invariant = (function () {});

  // encapsulates the subscription logic for connecting a component to the redux store, as
  // well as nesting subscriptions of descendant components, so that we can ensure the
  // ancestor components re-render before descendants
  var CLEARED = null;
  var nullListeners = {
    notify: function notify() {}
  };

  function createListenerCollection() {
    // the current/next pattern is copied from redux's createStore code.
    // TODO: refactor+expose that code to be reusable here?
    var current = [];
    var next = [];
    return {
      clear: function clear() {
        next = CLEARED;
        current = CLEARED;
      },
      notify: function notify() {
        var listeners = current = next;

        for (var i = 0; i < listeners.length; i++) {
          listeners[i]();
        }
      },
      get: function get() {
        return next;
      },
      subscribe: function subscribe(listener) {
        var isSubscribed = true;
        if (next === current) next = current.slice();
        next.push(listener);
        return function unsubscribe() {
          if (!isSubscribed || current === CLEARED) return;
          isSubscribed = false;
          if (next === current) next = current.slice();
          next.splice(next.indexOf(listener), 1);
        };
      }
    };
  }

  var Subscription =
  /*#__PURE__*/
  function () {
    function Subscription(store, parentSub, onStateChange) {
      this.store = store;
      this.parentSub = parentSub;
      this.onStateChange = onStateChange;
      this.unsubscribe = null;
      this.listeners = nullListeners;
    }

    var _proto = Subscription.prototype;

    _proto.addNestedSub = function addNestedSub(listener) {
      this.trySubscribe();
      return this.listeners.subscribe(listener);
    };

    _proto.notifyNestedSubs = function notifyNestedSubs() {
      this.listeners.notify();
    };

    _proto.isSubscribed = function isSubscribed() {
      return Boolean(this.unsubscribe);
    };

    _proto.trySubscribe = function trySubscribe() {
      if (!this.unsubscribe) {
        this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.onStateChange) : this.store.subscribe(this.onStateChange);
        this.listeners = createListenerCollection();
      }
    };

    _proto.tryUnsubscribe = function tryUnsubscribe() {
      if (this.unsubscribe) {
        this.unsubscribe();
        this.unsubscribe = null;
        this.listeners.clear();
        this.listeners = nullListeners;
      }
    };

    return Subscription;
  }();

  /**
   * 尝试调用函数
   * 
   * @param {function} func 调用的函数
   * @param {any} ctx 调用上下文
   * @param  {...any} args 函数调用参数
   * @returns {any} returnValue
   */
  var tryToCall = function tryToCall(func, ctx) {
    if (ctx === void 0) {
      ctx = null;
    }

    if (!func) return;

    for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    if (ctx) {
      return func.apply(ctx, args);
    } else {
      return func.apply(void 0, args);
    }
  };

  /* eslint-disable react/no-deprecated */

  var getRoute = function getRoute(component) {
    var vnode = component.vnode;
    if (component.isRoute) return component;
    if (!vnode) return {};
    if (vnode._owner) return getRoute(vnode._owner);
    return component;
  };

  var hotReloadingVersion = 0;
  var dummyState = {};

  function noop() {}

  function makeSelectorStateful(sourceSelector, store) {
    // wrap the selector in an object that tracks its results between runs.
    var selector = {
      run: function runComponentSelector(props, _ref) {
        var ctx = _ref.ctx;

        try {
          var nextProps = sourceSelector(store.getState(), props);

          if (nextProps !== selector.props || selector.error) {
            selector.shouldComponentUpdate = true;
            /**
             * 如果是页面 根据目前&未来展示状态判断是否需要update
             * 通过 selector.shouldComponentUpdate = false 阻止更新
             */

            var route = getRoute(ctx);

            if (!route.matched) {
              selector.__needForceUpdate = true;
              selector.shouldComponentUpdate = false;
            }

            selector.props = nextProps;
            selector.error = null;
          }
        } catch (error) {
          selector.shouldComponentUpdate = true;
          selector.error = error;
        }
      }
    };
    return selector;
  }

  function connectAdvanced(
  /*
    selectorFactory is a func that is responsible for returning the selector function used to
    compute new props from state, props, and dispatch. For example:
       export default connectAdvanced((dispatch, options) => (state, props) => ({
        thing: state.things[props.thingId],
        saveThing: fields => dispatch(actionCreators.saveThing(props.thingId, fields)),
      }))(YourComponent)
     Access to dispatch is provided to the factory so selectorFactories can bind actionCreators
    outside of their selector as an optimization. Options passed to connectAdvanced are passed to
    the selectorFactory, along with displayName and WrappedComponent, as the second argument.
     Note that selectorFactory is responsible for all caching/memoization of inbound and outbound
    props. Do not use connectAdvanced directly without memoizing results between calls to your
    selector, otherwise the Connect component will re-render on every state or props change.
  */
  selectorFactory, // options object:
  _ref2) {
    var _contextTypes, _childContextTypes;

    if (_ref2 === void 0) {
      _ref2 = {};
    }

    var _ref3 = _ref2,
        _ref3$getDisplayName = _ref3.getDisplayName,
        getDisplayName = _ref3$getDisplayName === void 0 ? function (name) {
      return "ConnectAdvanced(" + name + ")";
    } : _ref3$getDisplayName,
        _ref3$methodName = _ref3.methodName,
        methodName = _ref3$methodName === void 0 ? 'connectAdvanced' : _ref3$methodName,
        _ref3$renderCountProp = _ref3.renderCountProp,
        renderCountProp = _ref3$renderCountProp === void 0 ? undefined : _ref3$renderCountProp,
        _ref3$shouldHandleSta = _ref3.shouldHandleStateChanges,
        shouldHandleStateChanges = _ref3$shouldHandleSta === void 0 ? true : _ref3$shouldHandleSta,
        _ref3$storeKey = _ref3.storeKey,
        storeKey = _ref3$storeKey === void 0 ? 'store' : _ref3$storeKey,
        _ref3$withRef = _ref3.withRef,
        withRef = _ref3$withRef === void 0 ? false : _ref3$withRef,
        connectOptions = _objectWithoutPropertiesLoose(_ref3, ["getDisplayName", "methodName", "renderCountProp", "shouldHandleStateChanges", "storeKey", "withRef"]);

    var subscriptionKey = storeKey + 'Subscription';
    var version = hotReloadingVersion++;
    var contextTypes = (_contextTypes = {}, _contextTypes[storeKey] = storeShape, _contextTypes[subscriptionKey] = subscriptionShape, _contextTypes);
    var childContextTypes = (_childContextTypes = {}, _childContextTypes[subscriptionKey] = subscriptionShape, _childContextTypes);
    return function wrapWithConnect(WrappedComponent) {
      invariant(typeof WrappedComponent == 'function', "You must pass a component to the function returned by " + (methodName + ". Instead received " + JSON.stringify(WrappedComponent)));
      var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
      var displayName = getDisplayName(wrappedComponentName);

      var selectorFactoryOptions = _objectSpread({}, connectOptions, {
        getDisplayName: getDisplayName,
        methodName: methodName,
        renderCountProp: renderCountProp,
        shouldHandleStateChanges: shouldHandleStateChanges,
        storeKey: storeKey,
        withRef: withRef,
        displayName: displayName,
        wrappedComponentName: wrappedComponentName,
        WrappedComponent: WrappedComponent
      });

      var Connect =
      /*#__PURE__*/
      function (_Component) {
        _inheritsLoose(Connect, _Component);

        function Connect(props, context) {
          var _this;

          _this = _Component.call(this, props, context) || this;

          _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setWrappedInstance", function (ref) {
            if (ref === null) return;
            _this.wrappedInstance = ref;
          });

          _this.version = version;
          _this.state = {};
          _this.renderCount = 0;
          _this.store = props[storeKey] || context[storeKey];
          _this.propsMode = Boolean(props[storeKey]);
          invariant(_this.store, "Could not find \"" + storeKey + "\" in either the context or props of " + ("\"" + displayName + "\". Either wrap the root component in a <Provider>, ") + ("or explicitly pass \"" + storeKey + "\" as a prop to \"" + displayName + "\"."));

          _this.initSelector();

          _this.initSubscription();

          return _this;
        }

        var _proto = Connect.prototype;

        _proto.getChildContext = function getChildContext() {
          var _ref4;

          // If this component received store from props, its subscription should be transparent
          // to any descendants receiving store+subscription from context; it passes along
          // subscription passed to it. Otherwise, it shadows the parent subscription, which allows
          // Connect to control ordering of notifications to flow top-down.
          var subscription = this.propsMode ? null : this.subscription;
          return _ref4 = {}, _ref4[subscriptionKey] = subscription || this.context[subscriptionKey], _ref4;
        };

        _proto.componentDidMount = function componentDidMount() {
          if (!shouldHandleStateChanges) return; // componentWillMount fires during server side rendering, but componentDidMount and
          // componentWillUnmount do not. Because of this, trySubscribe happens during ...didMount.
          // Otherwise, unsubscription would never take place during SSR, causing a memory leak.
          // To handle the case where a child component may have triggered a state change by
          // dispatching an action in its componentWillMount, we have to re-run the select and maybe
          // re-render.

          this.subscription.trySubscribe();
          this.selector.run(this.props, {
            ctx: this
          });
          if (this.selector.shouldComponentUpdate) this.forceUpdate();
        };

        _proto.componentDidShow = function componentDidShow() {
          if (this.selector.__needForceUpdate) {
            this.forceUpdate();
            this.selector.__needForceUpdate = false;
          }

          tryToCall(this.wrappedInstance.componentDidShow, this.wrappedInstance);
        };

        _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
          this.selector.run(nextProps, {
            ctx: this
          });
        };

        _proto.shouldComponentUpdate = function shouldComponentUpdate() {
          return this.selector.shouldComponentUpdate;
        };

        _proto.componentWillUnmount = function componentWillUnmount() {
          if (this.subscription) this.subscription.tryUnsubscribe();
          this.subscription = null;
          this.notifyNestedSubs = noop;
          this.store = null;
          this.selector.run = noop;
          this.selector.shouldComponentUpdate = false;
        };

        _proto.componentDidHide = function componentDidHide() {
          tryToCall(this.wrappedInstance.componentDidHide, this.wrappedInstance);
        };

        _proto.getWrappedInstance = function getWrappedInstance() {
          return this.wrappedInstance;
        };

        _proto.initSelector = function initSelector() {
          var sourceSelector = selectorFactory(this.store.dispatch, selectorFactoryOptions);
          this.selector = makeSelectorStateful(sourceSelector, this.store);
          this.selector.run(this.props, {
            ctx: this
          });
        };

        _proto.initSubscription = function initSubscription() {
          if (!shouldHandleStateChanges) return; // parentSub's source should match where store came from: props vs. context. A component
          // connected to the store via props shouldn't use subscription from context, or vice versa.

          var parentSub = (this.propsMode ? this.props : this.context)[subscriptionKey];
          this.subscription = new Subscription(this.store, parentSub, this.onStateChange.bind(this)); // `notifyNestedSubs` is duplicated to handle the case where the component is  unmounted in
          // the middle of the notification loop, where `this.subscription` will then be null. An
          // extra null check every change can be avoided by copying the method onto `this` and then
          // replacing it with a no-op on unmount. This can probably be avoided if Subscription's
          // listeners logic is changed to not call listeners that have been unsubscribed in the
          // middle of the notification loop.

          this.notifyNestedSubs = this.subscription.notifyNestedSubs.bind(this.subscription);
        };

        _proto.onStateChange = function onStateChange() {
          this.selector.run(this.props, {
            ctx: this
          });

          if (!this.selector.shouldComponentUpdate) {
            this.notifyNestedSubs();
          } else {
            this.componentDidUpdate = this.notifyNestedSubsOnComponentDidUpdate;
            this.setState(dummyState);
          }
        };

        _proto.notifyNestedSubsOnComponentDidUpdate = function notifyNestedSubsOnComponentDidUpdate() {
          // `componentDidUpdate` is conditionally implemented when `onStateChange` determines it
          // needs to notify nested subs. Once called, it unimplements itself until further state
          // changes occur. Doing it this way vs having a permanent `componentDidUpdate` that does
          // a boolean check every time avoids an extra method call most of the time, resulting
          // in some perf boost.
          this.componentDidUpdate = undefined;
          this.notifyNestedSubs();
        };

        _proto.isSubscribed = function isSubscribed() {
          return Boolean(this.subscription) && this.subscription.isSubscribed();
        };

        _proto.addExtraProps = function addExtraProps(props) {
          // if (!withRef && !renderCountProp && !(this.propsMode && this.subscription)) return props
          // make a shallow copy so that fields added don't leak to the original selector.
          // this is especially important for 'ref' since that's a reference back to the component
          // instance. a singleton memoized selector would then be holding a reference to the
          // instance, preventing the instance from being garbage collected, and that would be bad
          var withExtras = _objectSpread({}, props); // if (withRef) withExtras.ref = this.setWrappedInstance


          withExtras.ref = this.setWrappedInstance;
          if (renderCountProp) withExtras[renderCountProp] = this.renderCount++;
          if (this.propsMode && this.subscription) withExtras[subscriptionKey] = this.subscription;
          return withExtras;
        };

        _proto.render = function render() {
          var selector = this.selector;
          selector.shouldComponentUpdate = false;

          if (selector.error) {
            throw selector.error;
          } else {
            return nervjs.createElement(WrappedComponent, this.addExtraProps(selector.props));
          }
        };

        _createClass(Connect, [{
          key: "config",
          get: function get() {
            return this.wrappedInstance ? this.wrappedInstance.config : {};
          }
        }]);

        return Connect;
      }(taroH5.Component);

      Connect.WrappedComponent = WrappedComponent;
      Connect.displayName = displayName;
      Connect.childContextTypes = childContextTypes;
      Connect.contextTypes = contextTypes;

      return hoistNonReactStatics_cjs(Connect, WrappedComponent);
    };
  }

  var hasOwn = Object.prototype.hasOwnProperty;

  function is(x, y) {
    if (x === y) {
      return x !== 0 || y !== 0 || 1 / x === 1 / y;
    } else {
      return x !== x && y !== y;
    }
  }

  function shallowEqual(objA, objB) {
    if (is(objA, objB)) return true;

    if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
      return false;
    }

    var keysA = Object.keys(objA);
    var keysB = Object.keys(objB);
    if (keysA.length !== keysB.length) return false;

    for (var i = 0; i < keysA.length; i++) {
      if (!hasOwn.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
        return false;
      }
    }

    return true;
  }

  /**
   * @param {any} obj The object to inspect.
   * @returns {boolean} True if the argument appears to be a plain object.
   */

  function wrapMapToPropsConstant(getConstant) {
    return function initConstantSelector(dispatch, options) {
      var constant = getConstant(dispatch, options);

      function constantSelector() {
        return constant;
      }

      constantSelector.dependsOnOwnProps = false;
      return constantSelector;
    };
  } // dependsOnOwnProps is used by createMapToPropsProxy to determine whether to pass props as args
  // to the mapToProps function being wrapped. It is also used by makePurePropsSelector to determine
  // whether mapToProps needs to be invoked when props have changed.
  // 
  // A length of one signals that mapToProps does not depend on props from the parent component.
  // A length of zero is assumed to mean mapToProps is getting args via arguments or ...args and
  // therefore not reporting its length accurately..

  function getDependsOnOwnProps(mapToProps) {
    return mapToProps.dependsOnOwnProps !== null && mapToProps.dependsOnOwnProps !== undefined ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
  } // Used by whenMapStateToPropsIsFunction and whenMapDispatchToPropsIsFunction,
  // this function wraps mapToProps in a proxy function which does several things:
  // 
  //  * Detects whether the mapToProps function being called depends on props, which
  //    is used by selectorFactory to decide if it should reinvoke on props changes.
  //    
  //  * On first call, handles mapToProps if returns another function, and treats that
  //    new function as the true mapToProps for subsequent calls.
  //    
  //  * On first call, verifies the first result is a plain object, in order to warn
  //    the developer that their mapToProps function is not returning a valid result.
  //    

  function wrapMapToPropsFunc(mapToProps, methodName) {
    return function initProxySelector(dispatch, _ref) {
      var displayName = _ref.displayName;

      var proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
        return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch);
      }; // allow detectFactoryAndVerify to get ownProps


      proxy.dependsOnOwnProps = true;

      proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
        proxy.mapToProps = mapToProps;
        proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
        var props = proxy(stateOrDispatch, ownProps);

        if (typeof props === 'function') {
          proxy.mapToProps = props;
          proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
          props = proxy(stateOrDispatch, ownProps);
        }
        return props;
      };

      return proxy;
    };
  }

  function whenMapDispatchToPropsIsFunction(mapDispatchToProps) {
    return typeof mapDispatchToProps === 'function' ? wrapMapToPropsFunc(mapDispatchToProps, 'mapDispatchToProps') : undefined;
  }
  function whenMapDispatchToPropsIsMissing(mapDispatchToProps) {
    return !mapDispatchToProps ? wrapMapToPropsConstant(function (dispatch) {
      return {
        dispatch: dispatch
      };
    }) : undefined;
  }
  function whenMapDispatchToPropsIsObject(mapDispatchToProps) {
    return mapDispatchToProps && typeof mapDispatchToProps === 'object' ? wrapMapToPropsConstant(function (dispatch) {
      return redux.bindActionCreators(mapDispatchToProps, dispatch);
    }) : undefined;
  }
  var defaultMapDispatchToPropsFactories = [whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject];

  function whenMapStateToPropsIsFunction(mapStateToProps) {
    return typeof mapStateToProps === 'function' ? wrapMapToPropsFunc(mapStateToProps, 'mapStateToProps') : undefined;
  }
  function whenMapStateToPropsIsMissing(mapStateToProps) {
    return !mapStateToProps ? wrapMapToPropsConstant(function () {
      return {};
    }) : undefined;
  }
  var defaultMapStateToPropsFactories = [whenMapStateToPropsIsFunction, whenMapStateToPropsIsMissing];

  function defaultMergeProps(stateProps, dispatchProps, ownProps) {
    return _objectSpread({}, ownProps, stateProps, dispatchProps);
  }
  function wrapMergePropsFunc(mergeProps) {
    return function initMergePropsProxy(dispatch, _ref) {
      var displayName = _ref.displayName,
          pure = _ref.pure,
          areMergedPropsEqual = _ref.areMergedPropsEqual;
      var hasRunOnce = false;
      var mergedProps;
      return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
        var nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);

        if (hasRunOnce) {
          if (!pure || !areMergedPropsEqual(nextMergedProps, mergedProps)) mergedProps = nextMergedProps;
        } else {
          hasRunOnce = true;
          mergedProps = nextMergedProps;
        }

        return mergedProps;
      };
    };
  }
  function whenMergePropsIsFunction(mergeProps) {
    return typeof mergeProps === 'function' ? wrapMergePropsFunc(mergeProps) : undefined;
  }
  function whenMergePropsIsOmitted(mergeProps) {
    return !mergeProps ? function () {
      return defaultMergeProps;
    } : undefined;
  }
  var defaultMergePropsFactories = [whenMergePropsIsFunction, whenMergePropsIsOmitted];

  function impureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch) {
    return function impureFinalPropsSelector(state, ownProps) {
      return mergeProps(mapStateToProps(state, ownProps), mapDispatchToProps(dispatch, ownProps), ownProps);
    };
  }
  function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, _ref) {
    var areStatesEqual = _ref.areStatesEqual,
        areOwnPropsEqual = _ref.areOwnPropsEqual,
        areStatePropsEqual = _ref.areStatePropsEqual;
    var hasRunAtLeastOnce = false;
    var state;
    var ownProps;
    var stateProps;
    var dispatchProps;
    var mergedProps;

    function handleFirstCall(firstState, firstOwnProps) {
      state = firstState;
      ownProps = firstOwnProps;
      stateProps = mapStateToProps(state, ownProps);
      dispatchProps = mapDispatchToProps(dispatch, ownProps);
      mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
      hasRunAtLeastOnce = true;
      return mergedProps;
    }

    function handleNewPropsAndNewState() {
      stateProps = mapStateToProps(state, ownProps);
      if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
      mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
      return mergedProps;
    }

    function handleNewProps() {
      if (mapStateToProps.dependsOnOwnProps) stateProps = mapStateToProps(state, ownProps);
      if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
      mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
      return mergedProps;
    }

    function handleNewState() {
      var nextStateProps = mapStateToProps(state, ownProps);
      var statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
      stateProps = nextStateProps;
      if (statePropsChanged) mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
      return mergedProps;
    }

    function handleSubsequentCalls(nextState, nextOwnProps) {
      var propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
      var stateChanged = !areStatesEqual(nextState, state);
      state = nextState;
      ownProps = nextOwnProps;
      if (propsChanged && stateChanged) return handleNewPropsAndNewState();
      if (propsChanged) return handleNewProps();
      if (stateChanged) return handleNewState();
      return mergedProps;
    }

    return function pureFinalPropsSelector(nextState, nextOwnProps) {
      return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
    };
  } // TODO: Add more comments
  // If pure is true, the selector returned by selectorFactory will memoize its results,
  // allowing connectAdvanced's shouldComponentUpdate to return false if final
  // props have not changed. If false, the selector will always return a new
  // object and shouldComponentUpdate will always return true.

  function finalPropsSelectorFactory(dispatch, _ref2) {
    var initMapStateToProps = _ref2.initMapStateToProps,
        initMapDispatchToProps = _ref2.initMapDispatchToProps,
        initMergeProps = _ref2.initMergeProps,
        options = _objectWithoutPropertiesLoose(_ref2, ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"]);

    var mapStateToProps = initMapStateToProps(dispatch, options);
    var mapDispatchToProps = initMapDispatchToProps(dispatch, options);
    var mergeProps = initMergeProps(dispatch, options);

    var selectorFactory = options.pure ? pureFinalPropsSelectorFactory : impureFinalPropsSelectorFactory;
    return selectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);
  }

  /*
    connect is a facade over connectAdvanced. It turns its args into a compatible
    selectorFactory, which has the signature:

      (dispatch, options) => (nextState, nextOwnProps) => nextFinalProps
    
    connect passes its args to connectAdvanced as options, which will in turn pass them to
    selectorFactory each time a Connect component instance is instantiated or hot reloaded.

    selectorFactory returns a final props selector from its mapStateToProps,
    mapStateToPropsFactories, mapDispatchToProps, mapDispatchToPropsFactories, mergeProps,
    mergePropsFactories, and pure args.

    The resulting final props selector is called by the Connect component instance whenever
    it receives new props or store state.
   */

  function match(arg, factories, name) {
    for (var i = factories.length - 1; i >= 0; i--) {
      var result = factories[i](arg);
      if (result) return result;
    }

    return function (dispatch, options) {
      throw new Error("Invalid value of type " + typeof arg + " for " + name + " argument when connecting component " + options.wrappedComponentName + ".");
    };
  }

  function strictEqual(a, b) {
    return a === b;
  } // createConnect with default args builds the 'official' connect behavior. Calling it with
  // different options opens up some testing and extensibility scenarios


  function createConnect(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$connectHOC = _ref.connectHOC,
        connectHOC = _ref$connectHOC === void 0 ? connectAdvanced : _ref$connectHOC,
        _ref$mapStateToPropsF = _ref.mapStateToPropsFactories,
        mapStateToPropsFactories = _ref$mapStateToPropsF === void 0 ? defaultMapStateToPropsFactories : _ref$mapStateToPropsF,
        _ref$mapDispatchToPro = _ref.mapDispatchToPropsFactories,
        mapDispatchToPropsFactories = _ref$mapDispatchToPro === void 0 ? defaultMapDispatchToPropsFactories : _ref$mapDispatchToPro,
        _ref$mergePropsFactor = _ref.mergePropsFactories,
        mergePropsFactories = _ref$mergePropsFactor === void 0 ? defaultMergePropsFactories : _ref$mergePropsFactor,
        _ref$selectorFactory = _ref.selectorFactory,
        selectorFactory = _ref$selectorFactory === void 0 ? finalPropsSelectorFactory : _ref$selectorFactory;

    return function connect(mapStateToProps, mapDispatchToProps, mergeProps, _ref2) {
      if (_ref2 === void 0) {
        _ref2 = {};
      }

      var _ref3 = _ref2,
          _ref3$pure = _ref3.pure,
          pure = _ref3$pure === void 0 ? true : _ref3$pure,
          _ref3$areStatesEqual = _ref3.areStatesEqual,
          areStatesEqual = _ref3$areStatesEqual === void 0 ? strictEqual : _ref3$areStatesEqual,
          _ref3$areOwnPropsEqua = _ref3.areOwnPropsEqual,
          areOwnPropsEqual = _ref3$areOwnPropsEqua === void 0 ? shallowEqual : _ref3$areOwnPropsEqua,
          _ref3$areStatePropsEq = _ref3.areStatePropsEqual,
          areStatePropsEqual = _ref3$areStatePropsEq === void 0 ? shallowEqual : _ref3$areStatePropsEq,
          _ref3$areMergedPropsE = _ref3.areMergedPropsEqual,
          areMergedPropsEqual = _ref3$areMergedPropsE === void 0 ? shallowEqual : _ref3$areMergedPropsE,
          extraOptions = _objectWithoutPropertiesLoose(_ref3, ["pure", "areStatesEqual", "areOwnPropsEqual", "areStatePropsEqual", "areMergedPropsEqual"]);

      var initMapStateToProps = match(mapStateToProps, mapStateToPropsFactories, 'mapStateToProps');
      var initMapDispatchToProps = match(mapDispatchToProps, mapDispatchToPropsFactories, 'mapDispatchToProps');
      var initMergeProps = match(mergeProps, mergePropsFactories, 'mergeProps');
      return connectHOC(selectorFactory, _objectSpread({
        // used in error messages
        methodName: 'connect',
        // used to compute Connect's displayName from the wrapped component's displayName.
        getDisplayName: function getDisplayName(name) {
          return "Connect(" + name + ")";
        },
        // if mapStateToProps is falsy, the Connect component doesn't subscribe to store state changes
        shouldHandleStateChanges: Boolean(mapStateToProps),
        // passed through to selectorFactory
        initMapStateToProps: initMapStateToProps,
        initMapDispatchToProps: initMapDispatchToProps,
        initMergeProps: initMergeProps,
        pure: pure,
        areStatesEqual: areStatesEqual,
        areOwnPropsEqual: areOwnPropsEqual,
        areStatePropsEqual: areStatePropsEqual,
        areMergedPropsEqual: areMergedPropsEqual
      }, extraOptions));
    };
  }
  var connect = createConnect();

  var index = {
    Provider: Provider,
    connect: connect,
    connectAdvanced: connectAdvanced
  };

  return index;

})));
//# sourceMappingURL=index.js.map


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) Microsoft Corporation
 *  All Rights Reserved
 *  MIT License
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this
 * software and associated documentation files (the 'Software'), to deal in the Software
 * without restriction, including without limitation the rights to use, copy, modify,
 * merge, publish, distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS
 * OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT
 * OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * XHR client for JSON endpoints
 * https://www.npmjs.com/package/async-promise
 * @hidden
 */
var XhrClient = /** @class */ (function () {
    function XhrClient() {
    }
    XhrClient.prototype.sendRequestAsync = function (url, method, enableCaching) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open(method, url, /*async: */ true);
            if (enableCaching) {
                // TODO: (shivb) ensure that this can be cached
                // xhr.setRequestHeader("Cache-Control", "Public");
            }
            xhr.onload = function (ev) {
                if (xhr.status < 200 || xhr.status >= 300) {
                    reject(_this.handleError(xhr.responseText));
                }
                try {
                    var jsonResponse = JSON.parse(xhr.responseText);
                }
                catch (e) {
                    reject(_this.handleError(xhr.responseText));
                }
                resolve(jsonResponse);
            };
            xhr.onerror = function (ev) {
                reject(xhr.status);
            };
            if (method === "GET") {
                xhr.send();
            }
            else {
                throw "not implemented";
            }
        });
    };
    XhrClient.prototype.handleError = function (responseText) {
        var jsonResponse;
        try {
            jsonResponse = JSON.parse(responseText);
            if (jsonResponse.error) {
                return jsonResponse.error;
            }
            else {
                throw responseText;
            }
        }
        catch (e) {
            return responseText;
        }
    };
    return XhrClient;
}());
exports.XhrClient = XhrClient;
//# sourceMappingURL=XHRClient.js.map

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) Microsoft Corporation
 *  All Rights Reserved
 *  MIT License
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this
 * software and associated documentation files (the 'Software'), to deal in the Software
 * without restriction, including without limitation the rights to use, copy, modify,
 * merge, publish, distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS
 * OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT
 * OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(10);
var Authority_1 = __webpack_require__(6);
var XHRClient_1 = __webpack_require__(15);
/**
 * @hidden
 */
var AadAuthority = /** @class */ (function (_super) {
    tslib_1.__extends(AadAuthority, _super);
    function AadAuthority(authority, validateAuthority) {
        return _super.call(this, authority, validateAuthority) || this;
    }
    Object.defineProperty(AadAuthority.prototype, "AadInstanceDiscoveryEndpointUrl", {
        get: function () {
            return AadAuthority.AadInstanceDiscoveryEndpoint + "?api-version=1.0&authorization_endpoint=" + this.CanonicalAuthority + "oauth2/v2.0/authorize";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AadAuthority.prototype, "AuthorityType", {
        get: function () {
            return Authority_1.AuthorityType.Aad;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns a promise which resolves to the OIDC endpoint
     * Only responds with the endpoint
     */
    AadAuthority.prototype.GetOpenIdConfigurationEndpointAsync = function () {
        var _this = this;
        var resultPromise = new Promise(function (resolve, reject) {
            return resolve(_this.DefaultOpenIdConfigurationEndpoint);
        });
        if (!this.IsValidationEnabled) {
            return resultPromise;
        }
        var host = this.CanonicalAuthorityUrlComponents.HostNameAndPort;
        if (this.IsInTrustedHostList(host)) {
            return resultPromise;
        }
        var client = new XHRClient_1.XhrClient();
        return client.sendRequestAsync(this.AadInstanceDiscoveryEndpointUrl, "GET", true)
            .then(function (response) {
            return response.tenant_discovery_endpoint;
        });
    };
    /**
     * Checks to see if the host is in a list of trusted hosts
     * @param {string} The host to look up
     */
    AadAuthority.prototype.IsInTrustedHostList = function (host) {
        return AadAuthority.TrustedHostList[host.toLowerCase()];
    };
    AadAuthority.AadInstanceDiscoveryEndpoint = "https://login.microsoftonline.com/common/discovery/instance";
    AadAuthority.TrustedHostList = {
        "login.windows.net": "login.windows.net",
        "login.chinacloudapi.cn": "login.chinacloudapi.cn",
        "login.cloudgovapi.us": "login.cloudgovapi.us",
        "login.microsoftonline.com": "login.microsoftonline.com",
        "login.microsoftonline.de": "login.microsoftonline.de",
        "login.microsoftonline.us": "login.microsoftonline.us"
    };
    return AadAuthority;
}(Authority_1.Authority));
exports.AadAuthority = AadAuthority;
//# sourceMappingURL=AadAuthority.js.map

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) Microsoft Corporation
 *  All Rights Reserved
 *  MIT License
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this
 * software and associated documentation files (the 'Software'), to deal in the Software
 * without restriction, including without limitation the rights to use, copy, modify,
 * merge, publish, distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS
 * OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT
 * OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var Utils_1 = __webpack_require__(0);
var User = /** @class */ (function () {
    /*
     * @hidden
     */
    function User(displayableId, name, identityProvider, userIdentifier, idToken, sid) {
        this.displayableId = displayableId;
        this.name = name;
        this.identityProvider = identityProvider;
        this.userIdentifier = userIdentifier;
        this.idToken = idToken;
        this.sid = sid;
    }
    /*
     * @hidden
     */
    User.createUser = function (idToken, clientInfo) {
        var uid;
        var utid;
        if (!clientInfo) {
            uid = "";
            utid = "";
        }
        else {
            uid = clientInfo.uid;
            utid = clientInfo.utid;
        }
        var userIdentifier = Utils_1.Utils.base64EncodeStringUrlSafe(uid) + "." + Utils_1.Utils.base64EncodeStringUrlSafe(utid);
        return new User(idToken.preferredName, idToken.name, idToken.issuer, userIdentifier, idToken.decodedIdToken, idToken.sid);
    };
    return User;
}());
exports.User = User;
//# sourceMappingURL=User.js.map

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) Microsoft Corporation
 *  All Rights Reserved
 *  MIT License
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this
 * software and associated documentation files (the 'Software'), to deal in the Software
 * without restriction, including without limitation the rights to use, copy, modify,
 * merge, publish, distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS
 * OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT
 * OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @hidden
 */
var TokenResponse = /** @class */ (function () {
    function TokenResponse() {
        this.valid = false;
        this.parameters = {};
        this.stateMatch = false;
        this.stateResponse = "";
        this.requestType = "unknown";
    }
    return TokenResponse;
}());
exports.TokenResponse = TokenResponse;
//# sourceMappingURL=RequestInfo.js.map

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var UserAgentApplication_1 = __webpack_require__(33);
exports.UserAgentApplication = UserAgentApplication_1.UserAgentApplication;
var Logger_1 = __webpack_require__(12);
exports.Logger = Logger_1.Logger;
var Logger_2 = __webpack_require__(12);
exports.LogLevel = Logger_2.LogLevel;
var User_1 = __webpack_require__(17);
exports.User = User_1.User;
var Constants_1 = __webpack_require__(7);
exports.Constants = Constants_1.Constants;
var RequestInfo_1 = __webpack_require__(18);
exports.TokenResponse = RequestInfo_1.TokenResponse;
var Authority_1 = __webpack_require__(6);
exports.Authority = Authority_1.Authority;
//# sourceMappingURL=index.js.map

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
function createThunkMiddleware(extraArgument) {
  return function (_ref) {
    var dispatch = _ref.dispatch,
        getState = _ref.getState;
    return function (next) {
      return function (action) {
        if (typeof action === 'function') {
          return action(dispatch, getState, extraArgument);
        }

        return next(action);
      };
    };
  };
}

var thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

exports['default'] = thunk;

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@tarojs/async-await/index.js
var async_await = __webpack_require__(42);

// EXTERNAL MODULE: delegated ../../node_modules/@tarojs/taro-h5/index.js from dll-reference lib
var taro_h5from_dll_reference_lib = __webpack_require__(3);
var taro_h5from_dll_reference_lib_default = /*#__PURE__*/__webpack_require__.n(taro_h5from_dll_reference_lib);

// EXTERNAL MODULE: delegated ../../node_modules/nervjs/index.js from dll-reference lib
var nervjsfrom_dll_reference_lib = __webpack_require__(2);
var nervjsfrom_dll_reference_lib_default = /*#__PURE__*/__webpack_require__.n(nervjsfrom_dll_reference_lib);

// EXTERNAL MODULE: ./node_modules/@tarojs/redux-h5/dist/index.js
var dist = __webpack_require__(14);

// EXTERNAL MODULE: ./node_modules/redux/lib/redux.js
var redux = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/redux-thunk/lib/index.js
var lib = __webpack_require__(20);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// EXTERNAL MODULE: ./.temp/constants/counter.js
var counter = __webpack_require__(5);

// EXTERNAL MODULE: ./.temp/services/user.js
var user = __webpack_require__(13);

// CONCATENATED MODULE: ./.temp/reducers/counter.js
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



var INITIAL_STATE = {
  num: 0
};
function counter_counter() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];

  switch (action.type) {
    case counter["a" /* ADD */]:
      return _extends({}, state, {
        num: state.num + 1
      });
    case counter["d" /* MINUS */]:
      return _extends({}, state, {
        num: state.num - 1
      });
    case counter["b" /* LOGIN */]:
      user["a" /* default */].login();
      return state;
    case counter["c" /* LOGOUT */]:
      user["a" /* default */].logout();
      return state;
    default:
      return state;
  }
}
// CONCATENATED MODULE: ./.temp/reducers/index.js


/* harmony default export */ var reducers = (Object(redux["combineReducers"])({
  counter: counter_counter
}));
// CONCATENATED MODULE: ./.temp/store/index.js
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };




var composeEnhancers = (typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
}) : redux["compose"];
var middlewares = [lib_default.a];
if (false) {}
var enhancer = composeEnhancers(redux["applyMiddleware"].apply(undefined, middlewares));
function configStore() {
  var store = Object(redux["createStore"])(reducers, enhancer);
  return store;
}
// EXTERNAL MODULE: ./.temp/app.styl
var app = __webpack_require__(23);

// EXTERNAL MODULE: delegated ../../node_modules/@tarojs/router/index.js from dll-reference lib
var routerfrom_dll_reference_lib = __webpack_require__(9);

// CONCATENATED MODULE: ./.temp/app.js
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }


taro_h5from_dll_reference_lib_default.a.initPxTransform({
  "designWidth": 750,
  "deviceRatio": {
    "640": 1.17,
    "750": 1,
    "828": 0.905
  }
});

var _taroHistory = Object(routerfrom_dll_reference_lib["createHistory"])({
  mode: "browser",
  basename: "/",
  customRoutes: {},
  firstPagePath: "/pages/index/index"
});

Object(routerfrom_dll_reference_lib["mountApis"])(_taroHistory);
var app_store = configStore();

var app_App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    /**
     * 指定config的类型声明为: Taro.Config
     *
     * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
     * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
     * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
     */
    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));

    _this.config = {
      pages: ["/pages/index/index", "/pages/identified/index"],
      window: {
        backgroundTextStyle: "light",
        navigationBarBackgroundColor: "#fff",
        navigationBarTitleText: "WeChat",
        navigationBarTextStyle: "black"
      }
    };
    taro_h5from_dll_reference_lib_default.a._$app = _this;
    return _this;
  }

  _createClass(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.componentDidShow();
    }
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {}
  }, {
    key: "componentDidHide",
    value: function componentDidHide() {}
  }, {
    key: "componentCatchError",
    value: function componentCatchError() {}
  }, {
    key: "componentDidCatchError",
    value: function componentDidCatchError() {}
    // 在 App 类中的 render() 函数没有实际作用
    // 请勿修改此函数

  }, {
    key: "render",
    value: function render() {
      return nervjsfrom_dll_reference_lib_default.a.createElement(
        dist["Provider"],
        { store: app_store },
        nervjsfrom_dll_reference_lib_default.a.createElement(routerfrom_dll_reference_lib["Router"], { history: _taroHistory, routes: [{
            path: '/pages/index/index',
            componentLoader: function componentLoader() {
              return Promise.all(/* import() | index_index */[__webpack_require__.e(0), __webpack_require__.e(2)]).then(__webpack_require__.bind(null, 99));
            },
            isIndex: true
          }, {
            path: '/pages/identified/index',
            componentLoader: function componentLoader() {
              return Promise.all(/* import() | identified_index */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, 100));
            },
            isIndex: false
          }], customRoutes: {} })
      );
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.componentDidHide();
    }
  }]);

  return App;
}(taro_h5from_dll_reference_lib["Component"]);

nervjsfrom_dll_reference_lib_default.a.render(nervjsfrom_dll_reference_lib_default.a.createElement(app_App, null), document.getElementById("app"));

/***/ }),
/* 22 */,
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) Microsoft Corporation
 *  All Rights Reserved
 *  MIT License
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this
 * software and associated documentation files (the 'Software'), to deal in the Software
 * without restriction, including without limitation the rights to use, copy, modify,
 * merge, publish, distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS
 * OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT
 * OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(10);
var AadAuthority_1 = __webpack_require__(16);
var Authority_1 = __webpack_require__(6);
var ErrorMessage_1 = __webpack_require__(11);
var Utils_1 = __webpack_require__(0);
/*
 * @hidden
 */
var B2cAuthority = /** @class */ (function (_super) {
    tslib_1.__extends(B2cAuthority, _super);
    function B2cAuthority(authority, validateAuthority) {
        var _this = _super.call(this, authority, validateAuthority) || this;
        var urlComponents = Utils_1.Utils.GetUrlComponents(authority);
        var pathSegments = urlComponents.PathSegments;
        if (pathSegments.length < 3) {
            throw ErrorMessage_1.ErrorMessage.b2cAuthorityUriInvalidPath;
        }
        _this.CanonicalAuthority = "https://" + urlComponents.HostNameAndPort + "/" + pathSegments[0] + "/" + pathSegments[1] + "/" + pathSegments[2] + "/";
        return _this;
    }
    Object.defineProperty(B2cAuthority.prototype, "AuthorityType", {
        get: function () {
            return Authority_1.AuthorityType.B2C;
        },
        enumerable: true,
        configurable: true
    });
    /*
     * Returns a promise with the TenantDiscoveryEndpoint
     */
    B2cAuthority.prototype.GetOpenIdConfigurationEndpointAsync = function () {
        var _this = this;
        var resultPromise = new Promise(function (resolve, reject) {
            return resolve(_this.DefaultOpenIdConfigurationEndpoint);
        });
        if (!this.IsValidationEnabled) {
            return resultPromise;
        }
        if (this.IsInTrustedHostList(this.CanonicalAuthorityUrlComponents.HostNameAndPort)) {
            return resultPromise;
        }
        return new Promise(function (resolve, reject) {
            return reject(ErrorMessage_1.ErrorMessage.unsupportedAuthorityValidation);
        });
    };
    return B2cAuthority;
}(AadAuthority_1.AadAuthority));
exports.B2cAuthority = B2cAuthority;
//# sourceMappingURL=B2cAuthority.js.map

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) Microsoft Corporation
 *  All Rights Reserved
 *  MIT License
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this
 * software and associated documentation files (the 'Software'), to deal in the Software
 * without restriction, including without limitation the rights to use, copy, modify,
 * merge, publish, distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS
 * OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT
 * OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @hidden
 */
var Utils_1 = __webpack_require__(0);
var AadAuthority_1 = __webpack_require__(16);
var B2cAuthority_1 = __webpack_require__(24);
var Authority_1 = __webpack_require__(6);
var ErrorMessage_1 = __webpack_require__(11);
var AuthorityFactory = /** @class */ (function () {
    function AuthorityFactory() {
    }
    /*
    * Parse the url and determine the type of authority
    */
    AuthorityFactory.DetectAuthorityFromUrl = function (authorityUrl) {
        authorityUrl = Utils_1.Utils.CanonicalizeUri(authorityUrl);
        var components = Utils_1.Utils.GetUrlComponents(authorityUrl);
        var pathSegments = components.PathSegments;
        switch (pathSegments[0]) {
            case "tfp":
                return Authority_1.AuthorityType.B2C;
            case "adfs":
                return Authority_1.AuthorityType.Adfs;
            default:
                return Authority_1.AuthorityType.Aad;
        }
    };
    /*
    * Create an authority object of the correct type based on the url
    * Performs basic authority validation - checks to see if the authority is of a valid type (eg aad, b2c)
    */
    AuthorityFactory.CreateInstance = function (authorityUrl, validateAuthority) {
        if (Utils_1.Utils.isEmpty(authorityUrl)) {
            return null;
        }
        var type = AuthorityFactory.DetectAuthorityFromUrl(authorityUrl);
        // Depending on above detection, create the right type.
        switch (type) {
            case Authority_1.AuthorityType.B2C:
                return new B2cAuthority_1.B2cAuthority(authorityUrl, validateAuthority);
            case Authority_1.AuthorityType.Aad:
                return new AadAuthority_1.AadAuthority(authorityUrl, validateAuthority);
            default:
                throw ErrorMessage_1.ErrorMessage.invalidAuthorityType;
        }
    };
    return AuthorityFactory;
}());
exports.AuthorityFactory = AuthorityFactory;
//# sourceMappingURL=AuthorityFactory.js.map

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) Microsoft Corporation
 *  All Rights Reserved
 *  MIT License
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this
 * software and associated documentation files (the 'Software'), to deal in the Software
 * without restriction, including without limitation the rights to use, copy, modify,
 * merge, publish, distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS
 * OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT
 * OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @hidden
 */
var AccessTokenCacheItem = /** @class */ (function () {
    function AccessTokenCacheItem(key, value) {
        this.key = key;
        this.value = value;
    }
    return AccessTokenCacheItem;
}());
exports.AccessTokenCacheItem = AccessTokenCacheItem;
//# sourceMappingURL=AccessTokenCacheItem.js.map

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) Microsoft Corporation
 *  All Rights Reserved
 *  MIT License
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this
 * software and associated documentation files (the 'Software'), to deal in the Software
 * without restriction, including without limitation the rights to use, copy, modify,
 * merge, publish, distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS
 * OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT
 * OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var Constants_1 = __webpack_require__(7);
var AccessTokenCacheItem_1 = __webpack_require__(26);
/*
 * @hidden
 */
var Storage = /** @class */ (function () {
    function Storage(cacheLocation) {
        if (Storage._instance) {
            return Storage._instance;
        }
        this._cacheLocation = cacheLocation;
        this._localStorageSupported = typeof window[this._cacheLocation] !== "undefined" && window[this._cacheLocation] != null;
        this._sessionStorageSupported = typeof window[cacheLocation] !== "undefined" && window[cacheLocation] != null;
        Storage._instance = this;
        if (!this._localStorageSupported && !this._sessionStorageSupported) {
            throw new Error("localStorage and sessionStorage not supported");
        }
        return Storage._instance;
    }
    // add value to storage
    Storage.prototype.setItem = function (key, value, enableCookieStorage) {
        if (window[this._cacheLocation]) {
            window[this._cacheLocation].setItem(key, value);
        }
        if (enableCookieStorage) {
            this.setItemCookie(key, value);
        }
    };
    // get one item by key from storage
    Storage.prototype.getItem = function (key, enableCookieStorage) {
        if (enableCookieStorage && this.getItemCookie(key)) {
            return this.getItemCookie(key);
        }
        if (window[this._cacheLocation]) {
            return window[this._cacheLocation].getItem(key);
        }
        return null;
    };
    // remove value from storage
    Storage.prototype.removeItem = function (key) {
        if (window[this._cacheLocation]) {
            return window[this._cacheLocation].removeItem(key);
        }
    };
    // clear storage (remove all items from it)
    Storage.prototype.clear = function () {
        if (window[this._cacheLocation]) {
            return window[this._cacheLocation].clear();
        }
    };
    Storage.prototype.getAllAccessTokens = function (clientId, userIdentifier) {
        var results = [];
        var accessTokenCacheItem;
        var storage = window[this._cacheLocation];
        if (storage) {
            var key = void 0;
            for (key in storage) {
                if (storage.hasOwnProperty(key)) {
                    if (key.match(clientId) && key.match(userIdentifier)) {
                        var value = this.getItem(key);
                        if (value) {
                            accessTokenCacheItem = new AccessTokenCacheItem_1.AccessTokenCacheItem(JSON.parse(key), JSON.parse(value));
                            results.push(accessTokenCacheItem);
                        }
                    }
                }
            }
        }
        return results;
    };
    Storage.prototype.removeAcquireTokenEntries = function (authorityKey, acquireTokenUserKey) {
        var storage = window[this._cacheLocation];
        if (storage) {
            var key = void 0;
            for (key in storage) {
                if (storage.hasOwnProperty(key)) {
                    if ((authorityKey !== "" && key.indexOf(authorityKey) > -1) || (acquireTokenUserKey !== "" && key.indexOf(acquireTokenUserKey) > -1)) {
                        this.removeItem(key);
                    }
                }
            }
        }
    };
    Storage.prototype.resetCacheItems = function () {
        var storage = window[this._cacheLocation];
        if (storage) {
            var key = void 0;
            for (key in storage) {
                if (storage.hasOwnProperty(key)) {
                    if (key.indexOf(Constants_1.Constants.msal) !== -1) {
                        this.setItem(key, "");
                    }
                    if (key.indexOf(Constants_1.Constants.renewStatus) !== -1) {
                        this.removeItem(key);
                    }
                }
            }
        }
    };
    Storage.prototype.setItemCookie = function (cName, cValue, expires) {
        var cookieStr = cName + "=" + cValue + ";";
        if (expires) {
            var expireTime = this.setExpirationCookie(expires);
            cookieStr += "expires=" + expireTime + ";";
        }
        document.cookie = cookieStr;
    };
    Storage.prototype.getItemCookie = function (cName) {
        var name = cName + "=";
        var ca = document.cookie.split(";");
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === " ") {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    };
    Storage.prototype.setExpirationCookie = function (cookieLife) {
        var today = new Date();
        var expr = new Date(today.getTime() + cookieLife * 24 * 60 * 60 * 1000);
        return expr.toUTCString();
    };
    Storage.prototype.clearCookie = function () {
        this.setItemCookie(Constants_1.Constants.nonceIdToken, "", -1);
        this.setItemCookie(Constants_1.Constants.stateLogin, "", -1);
        this.setItemCookie(Constants_1.Constants.loginRequest, "", -1);
        this.setItemCookie(Constants_1.Constants.stateAcquireToken, "", -1);
    };
    return Storage;
}());
exports.Storage = Storage;
//# sourceMappingURL=Storage.js.map

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  * Copyright (c) Microsoft Corporation
  *  All Rights Reserved
  *  MIT License
  *
  * Permission is hereby granted, free of charge, to any person obtaining a copy of this
  * software and associated documentation files (the "Software"), to deal in the Software
  * without restriction, including without limitation the rights to use, copy, modify,
  * merge, publish, distribute, sublicense, and/or sell copies of the Software, and to
  * permit persons to whom the Software is furnished to do so, subject to the following
  * conditions:
  *
  * The above copyright notice and this permission notice shall be
  * included in all copies or substantial portions of the Software.
  *
  * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS
  * OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
  * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT
  * OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
  */
Object.defineProperty(exports, "__esModule", { value: true });
var Utils_1 = __webpack_require__(0);
/*
 * @hidden
 */
var IdToken = /** @class */ (function () {
    /* tslint:disable:no-string-literal */
    function IdToken(rawIdToken) {
        if (Utils_1.Utils.isEmpty(rawIdToken)) {
            throw new Error("null or empty raw idtoken");
        }
        try {
            this.rawIdToken = rawIdToken;
            this.decodedIdToken = Utils_1.Utils.extractIdToken(rawIdToken);
            if (this.decodedIdToken) {
                if (this.decodedIdToken.hasOwnProperty("iss")) {
                    this.issuer = this.decodedIdToken["iss"];
                }
                if (this.decodedIdToken.hasOwnProperty("oid")) {
                    this.objectId = this.decodedIdToken["oid"];
                }
                if (this.decodedIdToken.hasOwnProperty("sub")) {
                    this.subject = this.decodedIdToken["sub"];
                }
                if (this.decodedIdToken.hasOwnProperty("tid")) {
                    this.tenantId = this.decodedIdToken["tid"];
                }
                if (this.decodedIdToken.hasOwnProperty("ver")) {
                    this.version = this.decodedIdToken["ver"];
                }
                if (this.decodedIdToken.hasOwnProperty("preferred_username")) {
                    this.preferredName = this.decodedIdToken["preferred_username"];
                }
                if (this.decodedIdToken.hasOwnProperty("name")) {
                    this.name = this.decodedIdToken["name"];
                }
                if (this.decodedIdToken.hasOwnProperty("nonce")) {
                    this.nonce = this.decodedIdToken["nonce"];
                }
                if (this.decodedIdToken.hasOwnProperty("exp")) {
                    this.expiration = this.decodedIdToken["exp"];
                }
                if (this.decodedIdToken.hasOwnProperty("home_oid")) {
                    this.homeObjectId = this.decodedIdToken["home_oid"];
                }
                if (this.decodedIdToken.hasOwnProperty("sid")) {
                    this.sid = this.decodedIdToken["sid"];
                }
                /* tslint:enable:no-string-literal */
            }
        }
        catch (e) {
            throw new Error("Failed to parse the returned id token");
        }
    }
    return IdToken;
}());
exports.IdToken = IdToken;
//# sourceMappingURL=IdToken.js.map

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) Microsoft Corporation
 *  All Rights Reserved
 *  MIT License
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this
 * software and associated documentation files (the 'Software'), to deal in the Software
 * without restriction, including without limitation the rights to use, copy, modify,
 * merge, publish, distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS
 * OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT
 * OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var Utils_1 = __webpack_require__(0);
/*
 * @hidden
 */
var ClientInfo = /** @class */ (function () {
    function ClientInfo(rawClientInfo) {
        if (!rawClientInfo || Utils_1.Utils.isEmpty(rawClientInfo)) {
            this.uid = "";
            this.utid = "";
            return;
        }
        try {
            var decodedClientInfo = Utils_1.Utils.base64DecodeStringUrlSafe(rawClientInfo);
            var clientInfo = JSON.parse(decodedClientInfo);
            if (clientInfo) {
                if (clientInfo.hasOwnProperty("uid")) {
                    this.uid = clientInfo.uid;
                }
                if (clientInfo.hasOwnProperty("utid")) {
                    this.utid = clientInfo.utid;
                }
            }
        }
        catch (e) {
            throw new Error(e);
        }
    }
    Object.defineProperty(ClientInfo.prototype, "uid", {
        get: function () {
            return this._uid ? this._uid : "";
        },
        set: function (uid) {
            this._uid = uid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClientInfo.prototype, "utid", {
        get: function () {
            return this._utid ? this._utid : "";
        },
        set: function (utid) {
            this._utid = utid;
        },
        enumerable: true,
        configurable: true
    });
    return ClientInfo;
}());
exports.ClientInfo = ClientInfo;
//# sourceMappingURL=ClientInfo.js.map

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) Microsoft Corporation
 *  All Rights Reserved
 *  MIT License
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this
 * software and associated documentation files (the 'Software'), to deal in the Software
 * without restriction, including without limitation the rights to use, copy, modify,
 * merge, publish, distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS
 * OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT
 * OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var Utils_1 = __webpack_require__(0);
/*
 * @hidden
 */
var AuthenticationRequestParameters = /** @class */ (function () {
    function AuthenticationRequestParameters(authority, clientId, scope, responseType, redirectUri, state) {
        this.authorityInstance = authority;
        this.clientId = clientId;
        this.scopes = scope;
        this.responseType = responseType;
        this.redirectUri = redirectUri;
        // randomly generated values
        this.correlationId = Utils_1.Utils.createNewGuid();
        this.state = state && !Utils_1.Utils.isEmpty(state) ? Utils_1.Utils.createNewGuid() + "|" + state : Utils_1.Utils.createNewGuid();
        this.nonce = Utils_1.Utils.createNewGuid();
        // telemetry information
        this.xClientSku = "MSAL.JS";
        this.xClientVer = Utils_1.Utils.getLibraryVersion();
    }
    Object.defineProperty(AuthenticationRequestParameters.prototype, "authority", {
        get: function () {
            return this.authorityInstance ? this.authorityInstance.CanonicalAuthority : null;
        },
        enumerable: true,
        configurable: true
    });
    AuthenticationRequestParameters.prototype.createNavigateUrl = function (scopes) {
        var str = this.createNavigationUrlString(scopes);
        var authEndpoint = this.authorityInstance.AuthorizationEndpoint;
        // if the endpoint already has queryparams, lets add to it, otherwise add the first one
        if (authEndpoint.indexOf("?") < 0) {
            authEndpoint += "?";
        }
        else {
            authEndpoint += "&";
        }
        var requestUrl = "" + authEndpoint + str.join("&");
        return requestUrl;
    };
    AuthenticationRequestParameters.prototype.createNavigationUrlString = function (scopes) {
        if (!scopes) {
            scopes = [this.clientId];
        }
        if (scopes.indexOf(this.clientId) === -1) {
            scopes.push(this.clientId);
        }
        var str = [];
        str.push("response_type=" + this.responseType);
        this.translateclientIdUsedInScope(scopes);
        str.push("scope=" + encodeURIComponent(this.parseScope(scopes)));
        str.push("client_id=" + encodeURIComponent(this.clientId));
        str.push("redirect_uri=" + encodeURIComponent(this.redirectUri));
        str.push("state=" + encodeURIComponent(this.state));
        str.push("nonce=" + encodeURIComponent(this.nonce));
        str.push("client_info=1");
        str.push("x-client-SKU=" + this.xClientSku);
        str.push("x-client-Ver=" + this.xClientVer);
        if (this.extraQueryParameters) {
            str.push(this.extraQueryParameters);
        }
        str.push("client-request-id=" + encodeURIComponent(this.correlationId));
        return str;
    };
    AuthenticationRequestParameters.prototype.translateclientIdUsedInScope = function (scopes) {
        var clientIdIndex = scopes.indexOf(this.clientId);
        if (clientIdIndex >= 0) {
            scopes.splice(clientIdIndex, 1);
            if (scopes.indexOf("openid") === -1) {
                scopes.push("openid");
            }
            if (scopes.indexOf("profile") === -1) {
                scopes.push("profile");
            }
        }
    };
    AuthenticationRequestParameters.prototype.parseScope = function (scopes) {
        var scopeList = "";
        if (scopes) {
            for (var i = 0; i < scopes.length; ++i) {
                scopeList += (i !== scopes.length - 1) ? scopes[i] + " " : scopes[i];
            }
        }
        return scopeList;
    };
    return AuthenticationRequestParameters;
}());
exports.AuthenticationRequestParameters = AuthenticationRequestParameters;
//# sourceMappingURL=AuthenticationRequestParameters.js.map

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) Microsoft Corporation
 *  All Rights Reserved
 *  MIT License
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this
 * software and associated documentation files (the 'Software'), to deal in the Software
 * without restriction, including without limitation the rights to use, copy, modify,
 * merge, publish, distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS
 * OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT
 * OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @hidden
 */
var AccessTokenValue = /** @class */ (function () {
    function AccessTokenValue(accessToken, idToken, expiresIn, clientInfo) {
        this.accessToken = accessToken;
        this.idToken = idToken;
        this.expiresIn = expiresIn;
        this.clientInfo = clientInfo;
    }
    return AccessTokenValue;
}());
exports.AccessTokenValue = AccessTokenValue;
//# sourceMappingURL=AccessTokenValue.js.map

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation
 *  All Rights Reserved
 *  MIT License
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this
 * software and associated documentation files (the "Software"), to deal in the Software
 * without restriction, including without limitation the rights to use, copy, modify,
 * merge, publish, distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS
 * OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT
 * OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var Utils_1 = __webpack_require__(0);
/*
 * @hidden
 */
var AccessTokenKey = /** @class */ (function () {
    function AccessTokenKey(authority, clientId, scopes, uid, utid) {
        this.authority = authority;
        this.clientId = clientId;
        this.scopes = scopes;
        this.userIdentifier = Utils_1.Utils.base64EncodeStringUrlSafe(uid) + "." + Utils_1.Utils.base64EncodeStringUrlSafe(utid);
    }
    return AccessTokenKey;
}());
exports.AccessTokenKey = AccessTokenKey;
//# sourceMappingURL=AccessTokenKey.js.map

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) Microsoft Corporation
 *  All Rights Reserved
 *  MIT License
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this
 * software and associated documentation files (the 'Software'), to deal in the Software
 * without restriction, including without limitation the rights to use, copy, modify,
 * merge, publish, distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS
 * OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT
 * OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(10);
var AccessTokenKey_1 = __webpack_require__(32);
var AccessTokenValue_1 = __webpack_require__(31);
var AuthenticationRequestParameters_1 = __webpack_require__(30);
var ClientInfo_1 = __webpack_require__(29);
var Constants_1 = __webpack_require__(7);
var IdToken_1 = __webpack_require__(28);
var Logger_1 = __webpack_require__(12);
var Storage_1 = __webpack_require__(27);
var RequestInfo_1 = __webpack_require__(18);
var User_1 = __webpack_require__(17);
var Utils_1 = __webpack_require__(0);
var AuthorityFactory_1 = __webpack_require__(25);
/*
 * @hidden
 */
var ResponseTypes = {
    id_token: "id_token",
    token: "token",
    id_token_token: "id_token token"
};
var resolveTokenOnlyIfOutOfIframe = function (target, propertyKey, descriptor) {
    var tokenAcquisitionMethod = descriptor.value;
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return this.isInIframe()
            ? new Promise(function () {
                return;
            })
            : tokenAcquisitionMethod.apply(this, args);
    };
    return descriptor;
};
var UserAgentApplication = /** @class */ (function () {
    /*
     * Initialize a UserAgentApplication with a given clientId and authority.
     * @constructor
     * @param {string} clientId - The clientID of your application, you should get this from the application registration portal.
     * @param {string} authority - A URL indicating a directory that MSAL can use to obtain tokens.
     * - In Azure AD, it is of the form https://&lt;instance>/&lt;tenant&gt;,\ where &lt;instance&gt; is the directory host (e.g. https://login.microsoftonline.com) and &lt;tenant&gt; is a identifier within the directory itself (e.g. a domain associated to the tenant, such as contoso.onmicrosoft.com, or the GUID representing the TenantID property of the directory)
     * - In Azure B2C, it is of the form https://&lt;instance&gt;/tfp/&lt;tenantId&gt;/&lt;policyName&gt;/
     * - Default value is: "https://login.microsoftonline.com/common"
     * @param _tokenReceivedCallback -  The function that will get the call back once this API is completed (either successfully or with a failure).
     * @param {boolean} validateAuthority -  boolean to turn authority validation on/off.
     */
    function UserAgentApplication(clientId, authority, tokenReceivedCallback, options) {
        if (options === void 0) { options = {}; }
        /*
         * @hidden
         */
        this._cacheLocations = {
            localStorage: "localStorage",
            sessionStorage: "sessionStorage"
        };
        /*
         * @hidden
         */
        this._clockSkew = 300;
        /*
         * @hidden
         */
        this._tokenReceivedCallback = null;
        this._isAngular = false;
        var _a = options.validateAuthority, validateAuthority = _a === void 0 ? true : _a, _b = options.cacheLocation, cacheLocation = _b === void 0 ? "sessionStorage" : _b, _c = options.redirectUri, redirectUri = _c === void 0 ? function () { return window.location.href.split("?")[0].split("#")[0]; } : _c, _d = options.postLogoutRedirectUri, postLogoutRedirectUri = _d === void 0 ? function () { return window.location.href.split("?")[0].split("#")[0]; } : _d, _e = options.logger, logger = _e === void 0 ? new Logger_1.Logger(null) : _e, _f = options.loadFrameTimeout, loadFrameTimeout = _f === void 0 ? 6000 : _f, _g = options.navigateToLoginRequestUrl, navigateToLoginRequestUrl = _g === void 0 ? true : _g, _h = options.state, state = _h === void 0 ? "" : _h, _j = options.isAngular, isAngular = _j === void 0 ? false : _j, _k = options.unprotectedResources, unprotectedResources = _k === void 0 ? new Array() : _k, _l = options.protectedResourceMap, protectedResourceMap = _l === void 0 ? new Map() : _l, _m = options.storeAuthStateInCookie, storeAuthStateInCookie = _m === void 0 ? false : _m;
        this.loadFrameTimeout = loadFrameTimeout;
        this.clientId = clientId;
        this.validateAuthority = validateAuthority;
        this.authority = authority || "https://login.microsoftonline.com/common";
        this._tokenReceivedCallback = tokenReceivedCallback;
        this._redirectUri = redirectUri;
        this._postLogoutredirectUri = postLogoutRedirectUri;
        this._loginInProgress = false;
        this._acquireTokenInProgress = false;
        this._cacheLocation = cacheLocation;
        this._navigateToLoginRequestUrl = navigateToLoginRequestUrl;
        this._state = state;
        this._isAngular = isAngular;
        this._unprotectedResources = unprotectedResources;
        this._protectedResourceMap = protectedResourceMap;
        if (!this._cacheLocations[cacheLocation]) {
            throw new Error("Cache Location is not valid. Provided value:" + this._cacheLocation + ".Possible values are: " + this._cacheLocations.localStorage + ", " + this._cacheLocations.sessionStorage);
        }
        this._cacheStorage = new Storage_1.Storage(this._cacheLocation); //cache keys msal
        this._logger = logger;
        this.storeAuthStateInCookie = storeAuthStateInCookie;
        window.openedWindows = [];
        window.activeRenewals = {};
        window.renewStates = [];
        window.callBackMappedToRenewStates = {};
        window.callBacksMappedToRenewStates = {};
        window.msal = this;
        var urlHash = window.location.hash;
        var isCallback = this.isCallback(urlHash);
        if (!this._isAngular) {
            if (isCallback) {
                this.handleAuthenticationResponse.call(this, urlHash);
            }
            else {
                var pendingCallback = this._cacheStorage.getItem(Constants_1.Constants.urlHash);
                if (pendingCallback) {
                    this.processCallBack(pendingCallback);
                }
            }
        }
    }
    Object.defineProperty(UserAgentApplication.prototype, "cacheLocation", {
        /*
         * Used to get the cache location
         */
        get: function () {
            return this._cacheLocation;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserAgentApplication.prototype, "authority", {
        /*
         * Used to get the authority.
         */
        get: function () {
            return this.authorityInstance.CanonicalAuthority;
        },
        /*
         * Used to set the authority.
         * @param {string} authority - A URL indicating a directory that MSAL can use to obtain tokens.
         * - In Azure AD, it is of the form https://&lt;tenant&gt;/&lt;tenant&gt;, where &lt;tenant&gt; is the directory host (e.g. https://login.microsoftonline.com) and &lt;tenant&gt; is a identifier within the directory itself (e.g. a domain associated to the tenant, such as contoso.onmicrosoft.com, or the GUID representing the TenantID property of the directory)
         * - In Azure B2C, it is of the form https://&lt;instance&gt;/tfp/&lt;tenant&gt;/<policyName>/
         * - Default value is: "https://login.microsoftonline.com/common"
         */
        set: function (val) {
            this.authorityInstance = AuthorityFactory_1.AuthorityFactory.CreateInstance(val, this.validateAuthority);
        },
        enumerable: true,
        configurable: true
    });
    /*
     * Used to call the constructor callback with the token/error
     * @param {string} [hash=window.location.hash] - Hash fragment of Url.
     * @hidden
     */
    UserAgentApplication.prototype.processCallBack = function (hash) {
        this._logger.info("Processing the callback from redirect response");
        var requestInfo = this.getRequestInfo(hash);
        this.saveTokenFromHash(requestInfo);
        var token = requestInfo.parameters[Constants_1.Constants.accessToken] || requestInfo.parameters[Constants_1.Constants.idToken];
        var errorDesc = requestInfo.parameters[Constants_1.Constants.errorDescription];
        var error = requestInfo.parameters[Constants_1.Constants.error];
        var tokenType;
        if (requestInfo.parameters[Constants_1.Constants.accessToken]) {
            tokenType = Constants_1.Constants.accessToken;
        }
        else {
            tokenType = Constants_1.Constants.idToken;
        }
        this._cacheStorage.removeItem(Constants_1.Constants.urlHash);
        try {
            if (this._tokenReceivedCallback) {
                this._cacheStorage.clearCookie();
                this._tokenReceivedCallback.call(this, errorDesc, token, error, tokenType, this.getUserState(this._cacheStorage.getItem(Constants_1.Constants.stateLogin, this.storeAuthStateInCookie)));
            }
        }
        catch (err) {
            this._logger.error("Error occurred in token received callback function: " + err);
        }
    };
    /*
     * Used to get the redirect uri. Evaluates redirectUri if its a function, otherwise simply returns its value.
     * @ignore
     * @hidden
     */
    UserAgentApplication.prototype.getRedirectUri = function () {
        if (typeof this._redirectUri === "function") {
            return this._redirectUri();
        }
        return this._redirectUri;
    };
    /*
     * Used to get the post logout redirect uri. Evaluates postLogoutredirectUri if its a function, otherwise simply returns its value.
     * @ignore
     * @hidden
     */
    UserAgentApplication.prototype.getPostLogoutRedirectUri = function () {
        if (typeof this._postLogoutredirectUri === "function") {
            return this._postLogoutredirectUri();
        }
        return this._postLogoutredirectUri;
    };
    /*
     * Initiate the login process by redirecting the user to the STS authorization endpoint.
     * @param {Array.<string>} scopes - Permissions you want included in the access token. Not all scopes are guaranteed to be included in the access token returned.
     * @param {string} extraQueryParameters - Key-value pairs to pass to the authentication server during the interactive authentication flow.
     */
    UserAgentApplication.prototype.loginRedirect = function (scopes, extraQueryParameters) {
        var _this = this;
        /*
        1. Create navigate url
        2. saves value in cache
        3. redirect user to AAD
         */
        if (this._loginInProgress) {
            if (this._tokenReceivedCallback) {
                this._tokenReceivedCallback(Constants_1.ErrorDescription.loginProgressError, null, Constants_1.ErrorCodes.loginProgressError, Constants_1.Constants.idToken, this.getUserState(this._cacheStorage.getItem(Constants_1.Constants.stateLogin, this.storeAuthStateInCookie)));
                return;
            }
        }
        if (scopes) {
            var isValidScope = this.validateInputScope(scopes);
            if (isValidScope && !Utils_1.Utils.isEmpty(isValidScope)) {
                if (this._tokenReceivedCallback) {
                    this._tokenReceivedCallback(Constants_1.ErrorDescription.inputScopesError, null, Constants_1.ErrorCodes.inputScopesError, Constants_1.Constants.idToken, this.getUserState(this._cacheStorage.getItem(Constants_1.Constants.stateLogin, this.storeAuthStateInCookie)));
                    return;
                }
            }
            scopes = this.filterScopes(scopes);
        }
        var idTokenObject;
        idTokenObject = this.extractADALIdToken();
        if (idTokenObject && !scopes) {
            this._logger.info("ADAL's idToken exists. Extracting login information from ADAL's idToken ");
            extraQueryParameters = Utils_1.Utils.constructUnifiedCacheExtraQueryParameter(idTokenObject, extraQueryParameters);
            this._silentLogin = true;
            this.acquireTokenSilent([this.clientId], this.authority, this.getUser(), extraQueryParameters)
                .then(function (idToken) {
                _this._silentLogin = false;
                _this._logger.info("Unified cache call is successful");
                if (_this._tokenReceivedCallback) {
                    _this._tokenReceivedCallback.call(_this, null, idToken, null, Constants_1.Constants.idToken, _this.getUserState(_this._silentAuthenticationState));
                }
            }, function (error) {
                _this._silentLogin = false;
                _this._logger.error("Error occurred during unified cache ATS");
                _this.loginRedirectHelper(scopes, extraQueryParameters);
            });
        }
        else {
            this.loginRedirectHelper(scopes, extraQueryParameters);
        }
    };
    UserAgentApplication.prototype.loginRedirectHelper = function (scopes, extraQueryParameters) {
        var _this = this;
        this._loginInProgress = true;
        this.authorityInstance.ResolveEndpointsAsync()
            .then(function () {
            var authenticationRequest = new AuthenticationRequestParameters_1.AuthenticationRequestParameters(_this.authorityInstance, _this.clientId, scopes, ResponseTypes.id_token, _this.getRedirectUri(), _this._state);
            if (extraQueryParameters) {
                authenticationRequest.extraQueryParameters = extraQueryParameters;
            }
            var loginStartPage = _this._cacheStorage.getItem(Constants_1.Constants.angularLoginRequest);
            if (!loginStartPage || loginStartPage === "") {
                loginStartPage = window.location.href;
            }
            else {
                _this._cacheStorage.setItem(Constants_1.Constants.angularLoginRequest, "");
            }
            _this._cacheStorage.setItem(Constants_1.Constants.loginRequest, loginStartPage, _this.storeAuthStateInCookie);
            _this._cacheStorage.setItem(Constants_1.Constants.loginError, "");
            _this._cacheStorage.setItem(Constants_1.Constants.stateLogin, authenticationRequest.state, _this.storeAuthStateInCookie);
            _this._cacheStorage.setItem(Constants_1.Constants.nonceIdToken, authenticationRequest.nonce, _this.storeAuthStateInCookie);
            _this._cacheStorage.setItem(Constants_1.Constants.msalError, "");
            _this._cacheStorage.setItem(Constants_1.Constants.msalErrorDescription, "");
            var authorityKey = Constants_1.Constants.authority + Constants_1.Constants.resourceDelimeter + authenticationRequest.state;
            _this._cacheStorage.setItem(authorityKey, _this.authority, _this.storeAuthStateInCookie);
            var urlNavigate = authenticationRequest.createNavigateUrl(scopes) + Constants_1.Constants.response_mode_fragment;
            _this.promptUser(urlNavigate);
        });
    };
    /*
     * Initiate the login process by opening a popup window.
     * @param {Array.<string>} scopes - Permissions you want included in the access token. Not all scopes are  guaranteed to be included in the access token returned.
     * @param {string} extraQueryParameters - Key-value pairs to pass to the STS during the interactive authentication flow.
     * @returns {Promise.<string>} - A Promise that is fulfilled when this function has completed, or rejected if an error was raised. Returns the token or error.
     */
    UserAgentApplication.prototype.loginPopup = function (scopes, extraQueryParameters) {
        var _this = this;
        /*
        1. Create navigate url
        2. saves value in cache
        3. redirect user to AAD
         */
        return new Promise(function (resolve, reject) {
            if (_this._loginInProgress) {
                reject(Constants_1.ErrorCodes.loginProgressError + Constants_1.Constants.resourceDelimeter + Constants_1.ErrorDescription.loginProgressError);
                return;
            }
            if (scopes) {
                var isValidScope = _this.validateInputScope(scopes);
                if (isValidScope && !Utils_1.Utils.isEmpty(isValidScope)) {
                    reject(Constants_1.ErrorCodes.inputScopesError + Constants_1.Constants.resourceDelimeter + Constants_1.ErrorDescription.inputScopesError);
                    return;
                }
                scopes = _this.filterScopes(scopes);
            }
            var idTokenObject;
            idTokenObject = _this.extractADALIdToken();
            if (idTokenObject && !scopes) {
                _this._logger.info("ADAL's idToken exists. Extracting login information from ADAL's idToken ");
                extraQueryParameters = Utils_1.Utils.constructUnifiedCacheExtraQueryParameter(idTokenObject, extraQueryParameters);
                _this._silentLogin = true;
                _this.acquireTokenSilent([_this.clientId], _this.authority, _this.getUser(), extraQueryParameters)
                    .then(function (idToken) {
                    _this._silentLogin = false;
                    _this._logger.info("Unified cache call is successful");
                    resolve(idToken);
                }, function (error) {
                    _this._silentLogin = false;
                    _this._logger.error("Error occurred during unified cache ATS");
                    _this.loginPopupHelper(resolve, reject, scopes, extraQueryParameters);
                });
            }
            else {
                _this.loginPopupHelper(resolve, reject, scopes, extraQueryParameters);
            }
        });
    };
    UserAgentApplication.prototype.loginPopupHelper = function (resolve, reject, scopes, extraQueryParameters) {
        var _this = this;
        //TODO why this is needed only for loginpopup
        if (!scopes) {
            scopes = [this.clientId];
        }
        var scope = scopes.join(" ").toLowerCase();
        var popUpWindow = this.openWindow("about:blank", "_blank", 1, this, resolve, reject);
        if (!popUpWindow) {
            return;
        }
        this._loginInProgress = true;
        this.authorityInstance.ResolveEndpointsAsync().then(function () {
            var authenticationRequest = new AuthenticationRequestParameters_1.AuthenticationRequestParameters(_this.authorityInstance, _this.clientId, scopes, ResponseTypes.id_token, _this.getRedirectUri(), _this._state);
            if (extraQueryParameters) {
                authenticationRequest.extraQueryParameters = extraQueryParameters;
            }
            _this._cacheStorage.setItem(Constants_1.Constants.loginRequest, window.location.href, _this.storeAuthStateInCookie);
            _this._cacheStorage.setItem(Constants_1.Constants.loginError, "");
            _this._cacheStorage.setItem(Constants_1.Constants.nonceIdToken, authenticationRequest.nonce, _this.storeAuthStateInCookie);
            _this._cacheStorage.setItem(Constants_1.Constants.msalError, "");
            _this._cacheStorage.setItem(Constants_1.Constants.msalErrorDescription, "");
            var authorityKey = Constants_1.Constants.authority + Constants_1.Constants.resourceDelimeter + authenticationRequest.state;
            _this._cacheStorage.setItem(authorityKey, _this.authority, _this.storeAuthStateInCookie);
            var urlNavigate = authenticationRequest.createNavigateUrl(scopes) + Constants_1.Constants.response_mode_fragment;
            window.renewStates.push(authenticationRequest.state);
            window.requestType = Constants_1.Constants.login;
            _this.registerCallback(authenticationRequest.state, scope, resolve, reject);
            if (popUpWindow) {
                _this._logger.infoPii("Navigated Popup window to:" + urlNavigate);
                popUpWindow.location.href = urlNavigate;
            }
        }, function () {
            _this._logger.info(Constants_1.ErrorCodes.endpointResolutionError + ":" + Constants_1.ErrorDescription.endpointResolutionError);
            _this._cacheStorage.setItem(Constants_1.Constants.msalError, Constants_1.ErrorCodes.endpointResolutionError);
            _this._cacheStorage.setItem(Constants_1.Constants.msalErrorDescription, Constants_1.ErrorDescription.endpointResolutionError);
            if (reject) {
                reject(Constants_1.ErrorCodes.endpointResolutionError + ":" + Constants_1.ErrorDescription.endpointResolutionError);
            }
            if (popUpWindow) {
                popUpWindow.close();
            }
        }).catch(function (err) {
            _this._logger.warning("could not resolve endpoints");
            reject(err);
        });
    };
    /*
      * Used to redirect the browser to the STS authorization endpoint
      * @param {string} urlNavigate - URL of the authorization endpoint
      * @hidden
      */
    UserAgentApplication.prototype.promptUser = function (urlNavigate) {
        if (urlNavigate && !Utils_1.Utils.isEmpty(urlNavigate)) {
            this._logger.infoPii("Navigate to:" + urlNavigate);
            window.location.replace(urlNavigate);
        }
        else {
            this._logger.info("Navigate url is empty");
        }
    };
    /*
     * Used to send the user to the redirect_uri after authentication is complete. The user"s bearer token is attached to the URI fragment as an id_token/access_token field.
     * This function also closes the popup window after redirection.
     * @hidden
     * @ignore
     */
    UserAgentApplication.prototype.openWindow = function (urlNavigate, title, interval, instance, resolve, reject) {
        var _this = this;
        var popupWindow = this.openPopup(urlNavigate, title, Constants_1.Constants.popUpWidth, Constants_1.Constants.popUpHeight);
        if (popupWindow == null) {
            instance._loginInProgress = false;
            instance._acquireTokenInProgress = false;
            this._logger.info(Constants_1.ErrorCodes.popUpWindowError + ":" + Constants_1.ErrorDescription.popUpWindowError);
            this._cacheStorage.setItem(Constants_1.Constants.msalError, Constants_1.ErrorCodes.popUpWindowError);
            this._cacheStorage.setItem(Constants_1.Constants.msalErrorDescription, Constants_1.ErrorDescription.popUpWindowError);
            if (reject) {
                reject(Constants_1.ErrorCodes.popUpWindowError + Constants_1.Constants.resourceDelimeter + Constants_1.ErrorDescription.popUpWindowError);
            }
            return null;
        }
        window.openedWindows.push(popupWindow);
        var pollTimer = window.setInterval(function () {
            if (popupWindow && popupWindow.closed && instance._loginInProgress) {
                if (reject) {
                    reject(Constants_1.ErrorCodes.userCancelledError + Constants_1.Constants.resourceDelimeter + Constants_1.ErrorDescription.userCancelledError);
                }
                window.clearInterval(pollTimer);
                if (_this._isAngular) {
                    _this.broadcast("msal:popUpClosed", Constants_1.ErrorCodes.userCancelledError + Constants_1.Constants.resourceDelimeter + Constants_1.ErrorDescription.userCancelledError);
                    return;
                }
                instance._loginInProgress = false;
                instance._acquireTokenInProgress = false;
            }
            try {
                var popUpWindowLocation = popupWindow.location;
                if (popUpWindowLocation.href.indexOf(_this.getRedirectUri()) !== -1) {
                    window.clearInterval(pollTimer);
                    instance._loginInProgress = false;
                    instance._acquireTokenInProgress = false;
                    _this._logger.info("Closing popup window");
                    if (_this._isAngular) {
                        _this.broadcast("msal:popUpHashChanged", popUpWindowLocation.hash);
                        for (var i = 0; i < window.openedWindows.length; i++) {
                            window.openedWindows[i].close();
                        }
                    }
                }
            }
            catch (e) {
                //Cross Domain url check error. Will be thrown until AAD redirects the user back to the app"s root page with the token. No need to log or throw this error as it will create unnecessary traffic.
            }
        }, interval);
        return popupWindow;
    };
    UserAgentApplication.prototype.broadcast = function (eventName, data) {
        var evt = new CustomEvent(eventName, { detail: data });
        window.dispatchEvent(evt);
    };
    /*
     * Used to log out the current user, and redirect the user to the postLogoutRedirectUri.
     * Defaults behaviour is to redirect the user to `window.location.href`.
     */
    UserAgentApplication.prototype.logout = function () {
        this.clearCache();
        this._user = null;
        var logout = "";
        if (this.getPostLogoutRedirectUri()) {
            logout = "post_logout_redirect_uri=" + encodeURIComponent(this.getPostLogoutRedirectUri());
        }
        var urlNavigate = this.authority + "/oauth2/v2.0/logout?" + logout;
        this.promptUser(urlNavigate);
    };
    /*
     * Used to configure the popup window for login.
     * @ignore
     * @hidden
     */
    UserAgentApplication.prototype.clearCache = function () {
        window.renewStates = [];
        var accessTokenItems = this._cacheStorage.getAllAccessTokens(Constants_1.Constants.clientId, Constants_1.Constants.userIdentifier);
        for (var i = 0; i < accessTokenItems.length; i++) {
            this._cacheStorage.removeItem(JSON.stringify(accessTokenItems[i].key));
        }
        this._cacheStorage.resetCacheItems();
        this._cacheStorage.clearCookie();
    };
    UserAgentApplication.prototype.clearCacheForScope = function (accessToken) {
        var accessTokenItems = this._cacheStorage.getAllAccessTokens(Constants_1.Constants.clientId, Constants_1.Constants.userIdentifier);
        for (var i = 0; i < accessTokenItems.length; i++) {
            var token = accessTokenItems[i];
            if (token.value.accessToken === accessToken) {
                this._cacheStorage.removeItem(JSON.stringify(token.key));
            }
        }
    };
    /*
     * Configures popup window for login.
     * @ignore
     * @hidden
     */
    UserAgentApplication.prototype.openPopup = function (urlNavigate, title, popUpWidth, popUpHeight) {
        try {
            /*
             * adding winLeft and winTop to account for dual monitor
             * using screenLeft and screenTop for IE8 and earlier
             */
            var winLeft = window.screenLeft ? window.screenLeft : window.screenX;
            var winTop = window.screenTop ? window.screenTop : window.screenY;
            /*
             * window.innerWidth displays browser window"s height and width excluding toolbars
             * using document.documentElement.clientWidth for IE8 and earlier
             */
            var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
            var left = ((width / 2) - (popUpWidth / 2)) + winLeft;
            var top_1 = ((height / 2) - (popUpHeight / 2)) + winTop;
            var popupWindow = window.open(urlNavigate, title, "width=" + popUpWidth + ", height=" + popUpHeight + ", top=" + top_1 + ", left=" + left);
            if (popupWindow.focus) {
                popupWindow.focus();
            }
            return popupWindow;
        }
        catch (e) {
            this._logger.error("error opening popup " + e.message);
            this._loginInProgress = false;
            this._acquireTokenInProgress = false;
            return null;
        }
    };
    /*
     * Used to validate the scopes input parameter requested  by the developer.
     * @param {Array<string>} scopes - Developer requested permissions. Not all scopes are guaranteed to be included in the access token returned.
     * @ignore
     * @hidden
     */
    UserAgentApplication.prototype.validateInputScope = function (scopes) {
        if (!scopes || scopes.length < 1) {
            return "Scopes cannot be passed as an empty array";
        }
        if (!Array.isArray(scopes)) {
            throw new Error("API does not accept non-array scopes");
        }
        if (scopes.indexOf(this.clientId) > -1) {
            if (scopes.length > 1) {
                return "ClientId can only be provided as a single scope";
            }
        }
        return "";
    };
    /*
      * Used to remove openid and profile from the list of scopes passed by the developer.These scopes are added by default
      * @hidden
      */
    UserAgentApplication.prototype.filterScopes = function (scopes) {
        scopes = scopes.filter(function (element) {
            return element !== "openid";
        });
        scopes = scopes.filter(function (element) {
            return element !== "profile";
        });
        return scopes;
    };
    /*
     * Used to add the developer requested callback to the array of callbacks for the specified scopes. The updated array is stored on the window object
     * @param {string} scope - Developer requested permissions. Not all scopes are guaranteed to be included in the access token returned.
     * @param {string} expectedState - Unique state identifier (guid).
     * @param {Function} resolve - The resolve function of the promise object.
     * @param {Function} reject - The reject function of the promise object.
     * @ignore
     * @hidden
     */
    UserAgentApplication.prototype.registerCallback = function (expectedState, scope, resolve, reject) {
        var _this = this;
        window.activeRenewals[scope] = expectedState;
        if (!window.callBacksMappedToRenewStates[expectedState]) {
            window.callBacksMappedToRenewStates[expectedState] = [];
        }
        window.callBacksMappedToRenewStates[expectedState].push({ resolve: resolve, reject: reject });
        if (!window.callBackMappedToRenewStates[expectedState]) {
            window.callBackMappedToRenewStates[expectedState] =
                function (errorDesc, token, error, tokenType) {
                    window.activeRenewals[scope] = null;
                    for (var i = 0; i < window.callBacksMappedToRenewStates[expectedState].length; ++i) {
                        try {
                            if (errorDesc || error) {
                                window.callBacksMappedToRenewStates[expectedState][i].reject(errorDesc + Constants_1.Constants.resourceDelimeter + error);
                            }
                            else if (token) {
                                window.callBacksMappedToRenewStates[expectedState][i].resolve(token);
                            }
                        }
                        catch (e) {
                            _this._logger.warning(e);
                        }
                    }
                    window.callBacksMappedToRenewStates[expectedState] = null;
                    window.callBackMappedToRenewStates[expectedState] = null;
                };
        }
    };
    UserAgentApplication.prototype.getCachedTokenInternal = function (scopes, user) {
        var userObject = user ? user : this.getUser();
        if (!userObject) {
            return null;
        }
        var authenticationRequest;
        var newAuthority = this.authorityInstance ? this.authorityInstance : AuthorityFactory_1.AuthorityFactory.CreateInstance(this.authority, this.validateAuthority);
        if (Utils_1.Utils.compareObjects(userObject, this.getUser())) {
            if (scopes.indexOf(this.clientId) > -1) {
                authenticationRequest = new AuthenticationRequestParameters_1.AuthenticationRequestParameters(newAuthority, this.clientId, scopes, ResponseTypes.id_token, this.getRedirectUri(), this._state);
            }
            else {
                authenticationRequest = new AuthenticationRequestParameters_1.AuthenticationRequestParameters(newAuthority, this.clientId, scopes, ResponseTypes.token, this.getRedirectUri(), this._state);
            }
        }
        else {
            authenticationRequest = new AuthenticationRequestParameters_1.AuthenticationRequestParameters(newAuthority, this.clientId, scopes, ResponseTypes.id_token_token, this.getRedirectUri(), this._state);
        }
        return this.getCachedToken(authenticationRequest, user);
    };
    /*
     * Used to get token for the specified set of scopes from the cache
     * @param {AuthenticationRequestParameters} authenticationRequest - Request sent to the STS to obtain an id_token/access_token
     * @param {User} user - User for which the scopes were requested
     * @hidden
     */
    UserAgentApplication.prototype.getCachedToken = function (authenticationRequest, user) {
        var accessTokenCacheItem = null;
        var scopes = authenticationRequest.scopes;
        var tokenCacheItems = this._cacheStorage.getAllAccessTokens(this.clientId, user ? user.userIdentifier : null); //filter by clientId and user
        if (tokenCacheItems.length === 0) { // No match found after initial filtering
            return null;
        }
        var filteredItems = [];
        //if no authority passed
        if (!authenticationRequest.authority) {
            //filter by scope
            for (var i = 0; i < tokenCacheItems.length; i++) {
                var cacheItem = tokenCacheItems[i];
                var cachedScopes = cacheItem.key.scopes.split(" ");
                if (Utils_1.Utils.containsScope(cachedScopes, scopes)) {
                    filteredItems.push(cacheItem);
                }
            }
            //if only one cached token found
            if (filteredItems.length === 1) {
                accessTokenCacheItem = filteredItems[0];
                authenticationRequest.authorityInstance = AuthorityFactory_1.AuthorityFactory.CreateInstance(accessTokenCacheItem.key.authority, this.validateAuthority);
            }
            else if (filteredItems.length > 1) {
                return {
                    errorDesc: "The cache contains multiple tokens satisfying the requirements. Call AcquireToken again providing more requirements like authority",
                    token: null,
                    error: "multiple_matching_tokens_detected"
                };
            }
            else {
                //no match found. check if there was a single authority used
                var authorityList = this.getUniqueAuthority(tokenCacheItems, "authority");
                if (authorityList.length > 1) {
                    return {
                        errorDesc: "Multiple authorities found in the cache. Pass authority in the API overload.",
                        token: null,
                        error: "multiple_matching_tokens_detected"
                    };
                }
                authenticationRequest.authorityInstance = AuthorityFactory_1.AuthorityFactory.CreateInstance(authorityList[0], this.validateAuthority);
            }
        }
        else {
            //authority was passed in the API, filter by authority and scope
            for (var i = 0; i < tokenCacheItems.length; i++) {
                var cacheItem = tokenCacheItems[i];
                var cachedScopes = cacheItem.key.scopes.split(" ");
                if (Utils_1.Utils.containsScope(cachedScopes, scopes) && cacheItem.key.authority === authenticationRequest.authority) {
                    filteredItems.push(cacheItem);
                }
            }
            //no match
            if (filteredItems.length === 0) {
                return null;
            }
            //only one cachedToken Found
            else if (filteredItems.length === 1) {
                accessTokenCacheItem = filteredItems[0];
            }
            else {
                //more than one match found.
                return {
                    errorDesc: "The cache contains multiple tokens satisfying the requirements.Call AcquireToken again providing more requirements like authority",
                    token: null,
                    error: "multiple_matching_tokens_detected"
                };
            }
        }
        if (accessTokenCacheItem != null) {
            var expired = Number(accessTokenCacheItem.value.expiresIn);
            // If expiration is within offset, it will force renew
            var offset = this._clockSkew || 300;
            if (expired && (expired > Utils_1.Utils.now() + offset)) {
                return {
                    errorDesc: null,
                    token: accessTokenCacheItem.value.accessToken,
                    error: null
                };
            }
            else {
                this._cacheStorage.removeItem(JSON.stringify(filteredItems[0].key));
                return null;
            }
        }
        else {
            return null;
        }
    };
    /*
     * Used to filter all cached items and return a list of unique users based on userIdentifier.
     * @param {Array<User>} Users - users saved in the cache.
     */
    UserAgentApplication.prototype.getAllUsers = function () {
        var users = [];
        var accessTokenCacheItems = this._cacheStorage.getAllAccessTokens(Constants_1.Constants.clientId, Constants_1.Constants.userIdentifier);
        for (var i = 0; i < accessTokenCacheItems.length; i++) {
            var idToken = new IdToken_1.IdToken(accessTokenCacheItems[i].value.idToken);
            var clientInfo = new ClientInfo_1.ClientInfo(accessTokenCacheItems[i].value.clientInfo);
            var user = User_1.User.createUser(idToken, clientInfo);
            users.push(user);
        }
        return this.getUniqueUsers(users);
    };
    /*
     * Used to filter users based on userIdentifier
     * @param {Array<User>}  Users - users saved in the cache
     * @ignore
     * @hidden
     */
    UserAgentApplication.prototype.getUniqueUsers = function (users) {
        if (!users || users.length <= 1) {
            return users;
        }
        var flags = [];
        var uniqueUsers = [];
        for (var index = 0; index < users.length; ++index) {
            if (users[index].userIdentifier && flags.indexOf(users[index].userIdentifier) === -1) {
                flags.push(users[index].userIdentifier);
                uniqueUsers.push(users[index]);
            }
        }
        return uniqueUsers;
    };
    /*
    * Used to get a unique list of authoritues from the cache
    * @param {Array<AccessTokenCacheItem>}  accessTokenCacheItems - accessTokenCacheItems saved in the cache
    * @ignore
    * @hidden
    */
    UserAgentApplication.prototype.getUniqueAuthority = function (accessTokenCacheItems, property) {
        var authorityList = [];
        var flags = [];
        accessTokenCacheItems.forEach(function (element) {
            if (element.key.hasOwnProperty(property) && (flags.indexOf(element.key[property]) === -1)) {
                flags.push(element.key[property]);
                authorityList.push(element.key[property]);
            }
        });
        return authorityList;
    };
    /*
     * Adds login_hint to authorization URL which is used to pre-fill the username field of sign in page for the user if known ahead of time
     * domain_hint can be one of users/organisations which when added skips the email based discovery process of the user
     * domain_req utid received as part of the clientInfo
     * login_req uid received as part of clientInfo
     * @param {string} urlNavigate - Authentication request url
     * @param {User} user - User for which the token is requested
     * @ignore
     * @hidden
     */
    UserAgentApplication.prototype.addHintParameters = function (urlNavigate, user) {
        var userObject = user ? user : this.getUser();
        if (userObject) {
            var decodedClientInfo = userObject.userIdentifier.split(".");
            var uid = Utils_1.Utils.base64DecodeStringUrlSafe(decodedClientInfo[0]);
            var utid = Utils_1.Utils.base64DecodeStringUrlSafe(decodedClientInfo[1]);
            if (userObject.sid && urlNavigate.indexOf(Constants_1.Constants.prompt_none) !== -1) {
                if (!this.urlContainsQueryStringParameter(Constants_1.Constants.sid, urlNavigate) && !this.urlContainsQueryStringParameter(Constants_1.Constants.login_hint, urlNavigate)) {
                    urlNavigate += "&" + Constants_1.Constants.sid + "=" + encodeURIComponent(userObject.sid);
                }
            }
            else {
                if (!this.urlContainsQueryStringParameter(Constants_1.Constants.login_hint, urlNavigate) && userObject.displayableId && !Utils_1.Utils.isEmpty(userObject.displayableId)) {
                    urlNavigate += "&" + Constants_1.Constants.login_hint + "=" + encodeURIComponent(userObject.displayableId);
                }
            }
            if (!Utils_1.Utils.isEmpty(uid) && !Utils_1.Utils.isEmpty(utid)) {
                if (!this.urlContainsQueryStringParameter("domain_req", urlNavigate) && !Utils_1.Utils.isEmpty(utid)) {
                    urlNavigate += "&domain_req=" + encodeURIComponent(utid);
                }
                if (!this.urlContainsQueryStringParameter("login_req", urlNavigate) && !Utils_1.Utils.isEmpty(uid)) {
                    urlNavigate += "&login_req=" + encodeURIComponent(uid);
                }
            }
            if (!this.urlContainsQueryStringParameter(Constants_1.Constants.domain_hint, urlNavigate) && !Utils_1.Utils.isEmpty(utid)) {
                if (utid === Constants_1.Constants.consumersUtid) {
                    urlNavigate += "&" + Constants_1.Constants.domain_hint + "=" + encodeURIComponent(Constants_1.Constants.consumers);
                }
                else {
                    urlNavigate += "&" + Constants_1.Constants.domain_hint + "=" + encodeURIComponent(Constants_1.Constants.organizations);
                }
            }
        }
        return urlNavigate;
    };
    /*
     * Checks if the authorization endpoint URL contains query string parameters
     * @ignore
     * @hidden
     */
    UserAgentApplication.prototype.urlContainsQueryStringParameter = function (name, url) {
        // regex to detect pattern of a ? or & followed by the name parameter and an equals character
        var regex = new RegExp("[\\?&]" + name + "=");
        return regex.test(url);
    };
    UserAgentApplication.prototype.acquireTokenRedirect = function (scopes, authority, user, extraQueryParameters) {
        var _this = this;
        var isValidScope = this.validateInputScope(scopes);
        if (isValidScope && !Utils_1.Utils.isEmpty(isValidScope)) {
            if (this._tokenReceivedCallback) {
                this._tokenReceivedCallback(Constants_1.ErrorDescription.inputScopesError, null, Constants_1.ErrorCodes.inputScopesError, Constants_1.Constants.accessToken, this.getUserState(this._cacheStorage.getItem(Constants_1.Constants.stateLogin, this.storeAuthStateInCookie)));
                return;
            }
        }
        if (scopes) {
            scopes = this.filterScopes(scopes);
        }
        var userObject = user ? user : this.getUser();
        if (this._acquireTokenInProgress) {
            return;
        }
        var scope = scopes.join(" ").toLowerCase();
        if (!userObject && !(extraQueryParameters && (extraQueryParameters.indexOf(Constants_1.Constants.login_hint) !== -1))) {
            if (this._tokenReceivedCallback) {
                this._logger.info("User login is required");
                this._tokenReceivedCallback(Constants_1.ErrorDescription.userLoginError, null, Constants_1.ErrorCodes.userLoginError, Constants_1.Constants.accessToken, this.getUserState(this._cacheStorage.getItem(Constants_1.Constants.stateLogin, this.storeAuthStateInCookie)));
                return;
            }
        }
        this._acquireTokenInProgress = true;
        var authenticationRequest;
        var acquireTokenAuthority = authority ? AuthorityFactory_1.AuthorityFactory.CreateInstance(authority, this.validateAuthority) : this.authorityInstance;
        acquireTokenAuthority.ResolveEndpointsAsync().then(function () {
            if (Utils_1.Utils.compareObjects(userObject, _this.getUser())) {
                if (scopes.indexOf(_this.clientId) > -1) {
                    authenticationRequest = new AuthenticationRequestParameters_1.AuthenticationRequestParameters(acquireTokenAuthority, _this.clientId, scopes, ResponseTypes.id_token, _this.getRedirectUri(), _this._state);
                }
                else {
                    authenticationRequest = new AuthenticationRequestParameters_1.AuthenticationRequestParameters(acquireTokenAuthority, _this.clientId, scopes, ResponseTypes.token, _this.getRedirectUri(), _this._state);
                }
            }
            else {
                authenticationRequest = new AuthenticationRequestParameters_1.AuthenticationRequestParameters(acquireTokenAuthority, _this.clientId, scopes, ResponseTypes.id_token_token, _this.getRedirectUri(), _this._state);
            }
            _this._cacheStorage.setItem(Constants_1.Constants.nonceIdToken, authenticationRequest.nonce, _this.storeAuthStateInCookie);
            var acquireTokenUserKey;
            if (userObject) {
                acquireTokenUserKey = Constants_1.Constants.acquireTokenUser + Constants_1.Constants.resourceDelimeter + userObject.userIdentifier + Constants_1.Constants.resourceDelimeter + authenticationRequest.state;
            }
            else {
                acquireTokenUserKey = Constants_1.Constants.acquireTokenUser + Constants_1.Constants.resourceDelimeter + Constants_1.Constants.no_user + Constants_1.Constants.resourceDelimeter + authenticationRequest.state;
            }
            _this._cacheStorage.setItem(acquireTokenUserKey, JSON.stringify(userObject));
            var authorityKey = Constants_1.Constants.authority + Constants_1.Constants.resourceDelimeter + authenticationRequest.state;
            _this._cacheStorage.setItem(authorityKey, acquireTokenAuthority.CanonicalAuthority, _this.storeAuthStateInCookie);
            if (extraQueryParameters) {
                authenticationRequest.extraQueryParameters = extraQueryParameters;
            }
            var urlNavigate = authenticationRequest.createNavigateUrl(scopes) + Constants_1.Constants.response_mode_fragment;
            urlNavigate = _this.addHintParameters(urlNavigate, userObject);
            if (urlNavigate) {
                _this._cacheStorage.setItem(Constants_1.Constants.stateAcquireToken, authenticationRequest.state, _this.storeAuthStateInCookie);
                window.location.replace(urlNavigate);
            }
        });
    };
    UserAgentApplication.prototype.acquireTokenPopup = function (scopes, authority, user, extraQueryParameters) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var isValidScope = _this.validateInputScope(scopes);
            if (isValidScope && !Utils_1.Utils.isEmpty(isValidScope)) {
                reject(Constants_1.ErrorCodes.inputScopesError + Constants_1.Constants.resourceDelimeter + isValidScope);
            }
            if (scopes) {
                scopes = _this.filterScopes(scopes);
            }
            var userObject = user ? user : _this.getUser();
            if (_this._acquireTokenInProgress) {
                reject(Constants_1.ErrorCodes.acquireTokenProgressError + Constants_1.Constants.resourceDelimeter + Constants_1.ErrorDescription.acquireTokenProgressError);
                return;
            }
            var scope = scopes.join(" ").toLowerCase();
            //if user is not currently logged in and no login_hint is passed
            if (!userObject && !(extraQueryParameters && (extraQueryParameters.indexOf(Constants_1.Constants.login_hint) !== -1))) {
                _this._logger.info("User login is required");
                reject(Constants_1.ErrorCodes.userLoginError + Constants_1.Constants.resourceDelimeter + Constants_1.ErrorDescription.userLoginError);
                return;
            }
            _this._acquireTokenInProgress = true;
            var authenticationRequest;
            var acquireTokenAuthority = authority ? AuthorityFactory_1.AuthorityFactory.CreateInstance(authority, _this.validateAuthority) : _this.authorityInstance;
            var popUpWindow = _this.openWindow("about:blank", "_blank", 1, _this, resolve, reject);
            if (!popUpWindow) {
                return;
            }
            acquireTokenAuthority.ResolveEndpointsAsync().then(function () {
                if (Utils_1.Utils.compareObjects(userObject, _this.getUser())) {
                    if (scopes.indexOf(_this.clientId) > -1) {
                        authenticationRequest = new AuthenticationRequestParameters_1.AuthenticationRequestParameters(acquireTokenAuthority, _this.clientId, scopes, ResponseTypes.id_token, _this.getRedirectUri(), _this._state);
                    }
                    else {
                        authenticationRequest = new AuthenticationRequestParameters_1.AuthenticationRequestParameters(acquireTokenAuthority, _this.clientId, scopes, ResponseTypes.token, _this.getRedirectUri(), _this._state);
                    }
                }
                else {
                    authenticationRequest = new AuthenticationRequestParameters_1.AuthenticationRequestParameters(acquireTokenAuthority, _this.clientId, scopes, ResponseTypes.id_token_token, _this.getRedirectUri(), _this._state);
                }
                _this._cacheStorage.setItem(Constants_1.Constants.nonceIdToken, authenticationRequest.nonce);
                authenticationRequest.state = authenticationRequest.state;
                var acquireTokenUserKey;
                if (userObject) {
                    acquireTokenUserKey = Constants_1.Constants.acquireTokenUser + Constants_1.Constants.resourceDelimeter + userObject.userIdentifier + Constants_1.Constants.resourceDelimeter + authenticationRequest.state;
                }
                else {
                    acquireTokenUserKey = Constants_1.Constants.acquireTokenUser + Constants_1.Constants.resourceDelimeter + Constants_1.Constants.no_user + Constants_1.Constants.resourceDelimeter + authenticationRequest.state;
                }
                _this._cacheStorage.setItem(acquireTokenUserKey, JSON.stringify(userObject));
                var authorityKey = Constants_1.Constants.authority + Constants_1.Constants.resourceDelimeter + authenticationRequest.state;
                _this._cacheStorage.setItem(authorityKey, acquireTokenAuthority.CanonicalAuthority, _this.storeAuthStateInCookie);
                if (extraQueryParameters) {
                    authenticationRequest.extraQueryParameters = extraQueryParameters;
                }
                var urlNavigate = authenticationRequest.createNavigateUrl(scopes) + Constants_1.Constants.response_mode_fragment;
                urlNavigate = _this.addHintParameters(urlNavigate, userObject);
                window.renewStates.push(authenticationRequest.state);
                window.requestType = Constants_1.Constants.renewToken;
                _this.registerCallback(authenticationRequest.state, scope, resolve, reject);
                if (popUpWindow) {
                    popUpWindow.location.href = urlNavigate;
                }
            }, function () {
                _this._logger.info(Constants_1.ErrorCodes.endpointResolutionError + ":" + Constants_1.ErrorDescription.endpointResolutionError);
                _this._cacheStorage.setItem(Constants_1.Constants.msalError, Constants_1.ErrorCodes.endpointResolutionError);
                _this._cacheStorage.setItem(Constants_1.Constants.msalErrorDescription, Constants_1.ErrorDescription.endpointResolutionError);
                if (reject) {
                    reject(Constants_1.ErrorCodes.endpointResolutionError + Constants_1.Constants.resourceDelimeter + Constants_1.ErrorDescription.endpointResolutionError);
                }
                if (popUpWindow) {
                    popUpWindow.close();
                }
            }).catch(function (err) {
                _this._logger.warning("could not resolve endpoints");
                reject(err);
            });
        });
    };
    /*
     * Used to get the token from cache.
     * MSAL will return the cached token if it is not expired.
     * Or it will send a request to the STS to obtain an access_token using a hidden iframe. To renew idToken, clientId should be passed as the only scope in the scopes array.
     * @param {Array<string>} scopes - Permissions you want included in the access token. Not all scopes are  guaranteed to be included in the access token. Scopes like "openid" and "profile" are sent with every request.
     * @param {string} authority - A URL indicating a directory that MSAL can use to obtain tokens.
     * - In Azure AD, it is of the form https://&lt;tenant&gt;/&lt;tenant&gt;, where &lt;tenant&gt; is the directory host (e.g. https://login.microsoftonline.com) and &lt;tenant&gt; is a identifier within the directory itself (e.g. a domain associated to the tenant, such as contoso.onmicrosoft.com, or the GUID representing the TenantID property of the directory)
     * - In Azure B2C, it is of the form https://&lt;instance&gt;/tfp/&lt;tenant&gt;/<policyName>/
     * - Default value is: "https://login.microsoftonline.com/common"
     * @param {User} user - The user for which the scopes are requested.The default user is the logged in user.
     * @param {string} extraQueryParameters - Key-value pairs to pass to the STS during the  authentication flow.
     * @returns {Promise.<string>} - A Promise that is fulfilled when this function has completed, or rejected if an error was raised. Resolved with token or rejected with error.
     */
    UserAgentApplication.prototype.acquireTokenSilent = function (scopes, authority, user, extraQueryParameters) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var isValidScope = _this.validateInputScope(scopes);
            if (isValidScope && !Utils_1.Utils.isEmpty(isValidScope)) {
                reject(Constants_1.ErrorCodes.inputScopesError + "|" + isValidScope);
                return null;
            }
            else {
                if (scopes) {
                    scopes = _this.filterScopes(scopes);
                }
                var scope_1 = scopes.join(" ").toLowerCase();
                var userObject_1 = user ? user : _this.getUser();
                var adalIdToken = _this._cacheStorage.getItem(Constants_1.Constants.adalIdToken);
                //if user is not currently logged in and no login_hint/sid is passed as an extraQueryParamater
                if (!userObject_1 && Utils_1.Utils.checkSSO(extraQueryParameters) && Utils_1.Utils.isEmpty(adalIdToken)) {
                    _this._logger.info("User login is required");
                    reject(Constants_1.ErrorCodes.userLoginError + Constants_1.Constants.resourceDelimeter + Constants_1.ErrorDescription.userLoginError);
                    return null;
                }
                //if user didn't passes the login_hint and adal's idtoken is present and no userobject, use the login_hint from adal's idToken
                else if (!userObject_1 && !Utils_1.Utils.isEmpty(adalIdToken)) {
                    var idTokenObject = Utils_1.Utils.extractIdToken(adalIdToken);
                    console.log("ADAL's idToken exists. Extracting login information from ADAL's idToken ");
                    extraQueryParameters = Utils_1.Utils.constructUnifiedCacheExtraQueryParameter(idTokenObject, extraQueryParameters);
                }
                var authenticationRequest_1;
                if (Utils_1.Utils.compareObjects(userObject_1, _this.getUser())) {
                    if (scopes.indexOf(_this.clientId) > -1) {
                        authenticationRequest_1 = new AuthenticationRequestParameters_1.AuthenticationRequestParameters(AuthorityFactory_1.AuthorityFactory.CreateInstance(authority, _this.validateAuthority), _this.clientId, scopes, ResponseTypes.id_token, _this.getRedirectUri(), _this._state);
                    }
                    else {
                        authenticationRequest_1 = new AuthenticationRequestParameters_1.AuthenticationRequestParameters(AuthorityFactory_1.AuthorityFactory.CreateInstance(authority, _this.validateAuthority), _this.clientId, scopes, ResponseTypes.token, _this.getRedirectUri(), _this._state);
                    }
                }
                else {
                    if (scopes.indexOf(_this.clientId) > -1) {
                        authenticationRequest_1 = new AuthenticationRequestParameters_1.AuthenticationRequestParameters(AuthorityFactory_1.AuthorityFactory.CreateInstance(authority, _this.validateAuthority), _this.clientId, scopes, ResponseTypes.id_token, _this.getRedirectUri(), _this._state);
                    }
                    else {
                        authenticationRequest_1 = new AuthenticationRequestParameters_1.AuthenticationRequestParameters(AuthorityFactory_1.AuthorityFactory.CreateInstance(authority, _this.validateAuthority), _this.clientId, scopes, ResponseTypes.id_token_token, _this.getRedirectUri(), _this._state);
                    }
                }
                var cacheResult = _this.getCachedToken(authenticationRequest_1, userObject_1);
                if (cacheResult) {
                    if (cacheResult.token) {
                        _this._logger.info("Token is already in cache for scope:" + scope_1);
                        resolve(cacheResult.token);
                        return null;
                    }
                    else if (cacheResult.errorDesc || cacheResult.error) {
                        _this._logger.infoPii(cacheResult.errorDesc + ":" + cacheResult.error);
                        reject(cacheResult.errorDesc + Constants_1.Constants.resourceDelimeter + cacheResult.error);
                        return null;
                    }
                }
                else {
                    _this._logger.verbose("Token is not in cache for scope:" + scope_1);
                }
                if (!authenticationRequest_1.authorityInstance) { //Cache result can return null if cache is empty. In that case, set authority to default value if no authority is passed to the api.
                    authenticationRequest_1.authorityInstance = authority ? AuthorityFactory_1.AuthorityFactory.CreateInstance(authority, _this.validateAuthority) : _this.authorityInstance;
                }
                // cache miss
                return authenticationRequest_1.authorityInstance.ResolveEndpointsAsync()
                    .then(function () {
                    // refresh attept with iframe
                    //Already renewing for this scope, callback when we get the token.
                    if (window.activeRenewals[scope_1]) {
                        _this._logger.verbose("Renew token for scope: " + scope_1 + " is in progress. Registering callback");
                        //Active renewals contains the state for each renewal.
                        _this.registerCallback(window.activeRenewals[scope_1], scope_1, resolve, reject);
                    }
                    else {
                        if (scopes && scopes.indexOf(_this.clientId) > -1 && scopes.length === 1) {
                            // App uses idToken to send to api endpoints
                            // Default scope is tracked as clientId to store this token
                            _this._logger.verbose("renewing idToken");
                            _this.renewIdToken(scopes, resolve, reject, userObject_1, authenticationRequest_1, extraQueryParameters);
                        }
                        else {
                            _this._logger.verbose("renewing accesstoken");
                            _this.renewToken(scopes, resolve, reject, userObject_1, authenticationRequest_1, extraQueryParameters);
                        }
                    }
                }).catch(function (err) {
                    _this._logger.warning("could not resolve endpoints");
                    reject(err);
                    return null;
                });
            }
        });
    };
    UserAgentApplication.prototype.extractADALIdToken = function () {
        var adalIdToken = this._cacheStorage.getItem(Constants_1.Constants.adalIdToken);
        if (!Utils_1.Utils.isEmpty(adalIdToken)) {
            return Utils_1.Utils.extractIdToken(adalIdToken);
        }
        return null;
    };
    /*
     * Calling _loadFrame but with a timeout to signal failure in loadframeStatus. Callbacks are left.
     * registered when network errors occur and subsequent token requests for same resource are registered to the pending request.
     * @ignore
     * @hidden
     */
    UserAgentApplication.prototype.loadIframeTimeout = function (urlNavigate, frameName, scope) {
        var _this = this;
        //set iframe session to pending
        var expectedState = window.activeRenewals[scope];
        this._logger.verbose("Set loading state to pending for: " + scope + ":" + expectedState);
        this._cacheStorage.setItem(Constants_1.Constants.renewStatus + expectedState, Constants_1.Constants.tokenRenewStatusInProgress);
        this.loadFrame(urlNavigate, frameName);
        setTimeout(function () {
            if (_this._cacheStorage.getItem(Constants_1.Constants.renewStatus + expectedState) === Constants_1.Constants.tokenRenewStatusInProgress) {
                // fail the iframe session if it"s in pending state
                _this._logger.verbose("Loading frame has timed out after: " + (_this.loadFrameTimeout / 1000) + " seconds for scope " + scope + ":" + expectedState);
                if (expectedState && window.callBackMappedToRenewStates[expectedState]) {
                    window.callBackMappedToRenewStates[expectedState]("Token renewal operation failed due to timeout", null, "Token Renewal Failed", Constants_1.Constants.accessToken);
                }
                _this._cacheStorage.setItem(Constants_1.Constants.renewStatus + expectedState, Constants_1.Constants.tokenRenewStatusCancelled);
            }
        }, this.loadFrameTimeout);
    };
    /*
     * Loads iframe with authorization endpoint URL
     * @ignore
     * @hidden
     */
    UserAgentApplication.prototype.loadFrame = function (urlNavigate, frameName) {
        var _this = this;
        // This trick overcomes iframe navigation in IE
        // IE does not load the page consistently in iframe
        this._logger.info("LoadFrame: " + frameName);
        var frameCheck = frameName;
        setTimeout(function () {
            var frameHandle = _this.addAdalFrame(frameCheck);
            if (frameHandle.src === "" || frameHandle.src === "about:blank") {
                frameHandle.src = urlNavigate;
                _this._logger.infoPii("Frame Name : " + frameName + " Navigated to: " + urlNavigate);
            }
        }, 500);
    };
    /*
     * Adds the hidden iframe for silent token renewal.
     * @ignore
     * @hidden
     */
    UserAgentApplication.prototype.addAdalFrame = function (iframeId) {
        if (typeof iframeId === "undefined") {
            return null;
        }
        this._logger.info("Add msal frame to document:" + iframeId);
        var adalFrame = document.getElementById(iframeId);
        if (!adalFrame) {
            if (document.createElement &&
                document.documentElement &&
                (window.navigator.userAgent.indexOf("MSIE 5.0") === -1)) {
                var ifr = document.createElement("iframe");
                ifr.setAttribute("id", iframeId);
                ifr.style.visibility = "hidden";
                ifr.style.position = "absolute";
                ifr.style.width = ifr.style.height = "0";
                ifr.style.border = "0";
                adalFrame = document.getElementsByTagName("body")[0].appendChild(ifr);
            }
            else if (document.body && document.body.insertAdjacentHTML) {
                document.body.insertAdjacentHTML("beforeend", "<iframe name='" + iframeId + "' id='" + iframeId + "' style='display:none'></iframe>");
            }
            if (window.frames && window.frames[iframeId]) {
                adalFrame = window.frames[iframeId];
            }
        }
        return adalFrame;
    };
    /*
     * Acquires access token using a hidden iframe.
     * @ignore
     * @hidden
     */
    UserAgentApplication.prototype.renewToken = function (scopes, resolve, reject, user, authenticationRequest, extraQueryParameters) {
        var scope = scopes.join(" ").toLowerCase();
        this._logger.verbose("renewToken is called for scope:" + scope);
        var frameHandle = this.addAdalFrame("msalRenewFrame" + scope);
        if (extraQueryParameters) {
            authenticationRequest.extraQueryParameters = extraQueryParameters;
        }
        var acquireTokenUserKey;
        if (user) {
            acquireTokenUserKey = Constants_1.Constants.acquireTokenUser + Constants_1.Constants.resourceDelimeter + user.userIdentifier + Constants_1.Constants.resourceDelimeter + authenticationRequest.state;
        }
        else {
            acquireTokenUserKey = Constants_1.Constants.acquireTokenUser + Constants_1.Constants.resourceDelimeter + Constants_1.Constants.no_user + Constants_1.Constants.resourceDelimeter + authenticationRequest.state;
        }
        this._cacheStorage.setItem(acquireTokenUserKey, JSON.stringify(user));
        var authorityKey = Constants_1.Constants.authority + Constants_1.Constants.resourceDelimeter + authenticationRequest.state;
        this._cacheStorage.setItem(authorityKey, authenticationRequest.authority);
        // renew happens in iframe, so it keeps javascript context
        this._cacheStorage.setItem(Constants_1.Constants.nonceIdToken, authenticationRequest.nonce);
        this._logger.verbose("Renew token Expected state: " + authenticationRequest.state);
        var urlNavigate = Utils_1.Utils.urlRemoveQueryStringParameter(authenticationRequest.createNavigateUrl(scopes), Constants_1.Constants.prompt) + Constants_1.Constants.prompt_none;
        urlNavigate = this.addHintParameters(urlNavigate, user);
        window.renewStates.push(authenticationRequest.state);
        window.requestType = Constants_1.Constants.renewToken;
        this.registerCallback(authenticationRequest.state, scope, resolve, reject);
        this._logger.infoPii("Navigate to:" + urlNavigate);
        frameHandle.src = "about:blank";
        this.loadIframeTimeout(urlNavigate, "msalRenewFrame" + scope, scope);
    };
    /*
     * Renews idtoken for app"s own backend when clientId is passed as a single scope in the scopes array.
     * @ignore
     * @hidden
     */
    UserAgentApplication.prototype.renewIdToken = function (scopes, resolve, reject, user, authenticationRequest, extraQueryParameters) {
        var scope = scopes.join(" ").toLowerCase();
        this._logger.info("renewidToken is called");
        var frameHandle = this.addAdalFrame("msalIdTokenFrame");
        if (extraQueryParameters) {
            authenticationRequest.extraQueryParameters = extraQueryParameters;
        }
        var acquireTokenUserKey;
        if (user) {
            acquireTokenUserKey = Constants_1.Constants.acquireTokenUser + Constants_1.Constants.resourceDelimeter + user.userIdentifier + Constants_1.Constants.resourceDelimeter + authenticationRequest.state;
        }
        else {
            acquireTokenUserKey = Constants_1.Constants.acquireTokenUser + Constants_1.Constants.resourceDelimeter + Constants_1.Constants.no_user + Constants_1.Constants.resourceDelimeter + authenticationRequest.state;
        }
        this._cacheStorage.setItem(acquireTokenUserKey, JSON.stringify(user));
        var authorityKey = Constants_1.Constants.authority + Constants_1.Constants.resourceDelimeter + authenticationRequest.state;
        this._cacheStorage.setItem(authorityKey, authenticationRequest.authority);
        this._cacheStorage.setItem(Constants_1.Constants.nonceIdToken, authenticationRequest.nonce);
        this._logger.verbose("Renew Idtoken Expected state: " + authenticationRequest.state);
        var urlNavigate = Utils_1.Utils.urlRemoveQueryStringParameter(authenticationRequest.createNavigateUrl(scopes), Constants_1.Constants.prompt) + Constants_1.Constants.prompt_none;
        urlNavigate = this.addHintParameters(urlNavigate, user);
        if (this._silentLogin) {
            window.requestType = Constants_1.Constants.login;
            this._silentAuthenticationState = authenticationRequest.state;
        }
        else {
            window.requestType = Constants_1.Constants.renewToken;
            window.renewStates.push(authenticationRequest.state);
        }
        this.registerCallback(authenticationRequest.state, this.clientId, resolve, reject);
        this._logger.infoPii("Navigate to:" + urlNavigate);
        frameHandle.src = "about:blank";
        this.loadIframeTimeout(urlNavigate, "msalIdTokenFrame", this.clientId);
    };
    /*
      * Returns the signed in user (received from a user object created at the time of login) or null.
      */
    UserAgentApplication.prototype.getUser = function () {
        // idToken is first call
        if (this._user) {
            return this._user;
        }
        // frame is used to get idToken
        var rawIdToken = this._cacheStorage.getItem(Constants_1.Constants.idTokenKey);
        var rawClientInfo = this._cacheStorage.getItem(Constants_1.Constants.msalClientInfo);
        if (!Utils_1.Utils.isEmpty(rawIdToken) && !Utils_1.Utils.isEmpty(rawClientInfo)) {
            var idToken = new IdToken_1.IdToken(rawIdToken);
            var clientInfo = new ClientInfo_1.ClientInfo(rawClientInfo);
            this._user = User_1.User.createUser(idToken, clientInfo);
            return this._user;
        }
        return null;
    };
    /*
     * This method must be called for processing the response received from the STS. It extracts the hash, processes the token or error information and saves it in the cache. It then
     * calls the registered callbacks in case of redirect or resolves the promises with the result.
     * @param {string} [hash=window.location.hash] - Hash fragment of Url.
     * @hidden
     */
    UserAgentApplication.prototype.handleAuthenticationResponse = function (hash) {
        if (hash == null) {
            hash = window.location.hash;
        }
        var self = null;
        var isPopup = false;
        var isWindowOpenerMsal = false;
        try {
            isWindowOpenerMsal = window.opener && window.opener.msal && window.opener.msal !== window.msal;
        }
        catch (err) {
            // err = SecurityError: Blocked a frame with origin "[url]" from accessing a cross-origin frame.
            isWindowOpenerMsal = false;
        }
        if (isWindowOpenerMsal) {
            self = window.opener.msal;
            isPopup = true;
        }
        else if (window.parent && window.parent.msal) {
            self = window.parent.msal;
        }
        var requestInfo = self.getRequestInfo(hash); //if(window.parent!==window), by using self, window.parent becomes equal to window in getRequestInfo method specifically
        var token = null, tokenReceivedCallback = null, tokenType, saveToken = true;
        self._logger.info("Returned from redirect url");
        if (window.parent !== window && window.parent.msal) {
            tokenReceivedCallback = window.parent.callBackMappedToRenewStates[requestInfo.stateResponse];
        }
        else if (isWindowOpenerMsal) {
            tokenReceivedCallback = window.opener.callBackMappedToRenewStates[requestInfo.stateResponse];
        }
        else {
            if (self._navigateToLoginRequestUrl) {
                tokenReceivedCallback = null;
                self._cacheStorage.setItem(Constants_1.Constants.urlHash, hash);
                saveToken = false;
                if (window.parent === window && !isPopup) {
                    window.location.href = self._cacheStorage.getItem(Constants_1.Constants.loginRequest, this.storeAuthStateInCookie);
                }
                return;
            }
            else {
                tokenReceivedCallback = self._tokenReceivedCallback;
                window.location.hash = "";
            }
        }
        self.saveTokenFromHash(requestInfo);
        if ((requestInfo.requestType === Constants_1.Constants.renewToken) && window.parent) {
            if (window.parent !== window) {
                self._logger.verbose("Window is in iframe, acquiring token silently");
            }
            else {
                self._logger.verbose("acquiring token interactive in progress");
            }
            token = requestInfo.parameters[Constants_1.Constants.accessToken] || requestInfo.parameters[Constants_1.Constants.idToken];
            tokenType = Constants_1.Constants.accessToken;
        }
        else if (requestInfo.requestType === Constants_1.Constants.login) {
            token = requestInfo.parameters[Constants_1.Constants.idToken];
            tokenType = Constants_1.Constants.idToken;
        }
        var errorDesc = requestInfo.parameters[Constants_1.Constants.errorDescription];
        var error = requestInfo.parameters[Constants_1.Constants.error];
        try {
            if (tokenReceivedCallback) {
                //We should only send the stae back to the developer if it matches with what we received from the server
                if (requestInfo.stateMatch) {
                    tokenReceivedCallback.call(self, errorDesc, token, error, tokenType, this.getUserState(requestInfo.stateResponse));
                }
                else {
                    tokenReceivedCallback.call(self, errorDesc, token, error, tokenType, null);
                }
            }
        }
        catch (err) {
            self._logger.error("Error occurred in token received callback function: " + err);
        }
        if (isWindowOpenerMsal) {
            for (var i = 0; i < window.opener.openedWindows.length; i++) {
                window.opener.openedWindows[i].close();
            }
        }
    };
    /*
     * This method must be called for processing the response received from AAD. It extracts the hash, processes the token or error, saves it in the cache and calls the registered callbacks with the result.
     * @param {string} authority authority received in the redirect response from AAD.
     * @param {TokenResponse} requestInfo an object created from the redirect response from AAD comprising of the keys - parameters, requestType, stateMatch, stateResponse and valid.
     * @param {User} user user object for which scopes are consented for. The default user is the logged in user.
     * @param {ClientInfo} clientInfo clientInfo received as part of the response comprising of fields uid and utid.
     * @param {IdToken} idToken idToken received as part of the response.
     * @ignore
     * @private
     * @hidden
     */
    /* tslint:disable:no-string-literal */
    UserAgentApplication.prototype.saveAccessToken = function (authority, tokenResponse, user, clientInfo, idToken) {
        var scope;
        var clientObj = new ClientInfo_1.ClientInfo(clientInfo);
        if (tokenResponse.parameters.hasOwnProperty("scope")) {
            scope = tokenResponse.parameters["scope"];
            var consentedScopes = scope.split(" ");
            var accessTokenCacheItems = this._cacheStorage.getAllAccessTokens(this.clientId, authority);
            for (var i = 0; i < accessTokenCacheItems.length; i++) {
                var accessTokenCacheItem = accessTokenCacheItems[i];
                if (accessTokenCacheItem.key.userIdentifier === user.userIdentifier) {
                    var cachedScopes = accessTokenCacheItem.key.scopes.split(" ");
                    if (Utils_1.Utils.isIntersectingScopes(cachedScopes, consentedScopes)) {
                        this._cacheStorage.removeItem(JSON.stringify(accessTokenCacheItem.key));
                    }
                }
            }
            var accessTokenKey = new AccessTokenKey_1.AccessTokenKey(authority, this.clientId, scope, clientObj.uid, clientObj.utid);
            var accessTokenValue = new AccessTokenValue_1.AccessTokenValue(tokenResponse.parameters[Constants_1.Constants.accessToken], idToken.rawIdToken, Utils_1.Utils.expiresIn(tokenResponse.parameters[Constants_1.Constants.expiresIn]).toString(), clientInfo);
            this._cacheStorage.setItem(JSON.stringify(accessTokenKey), JSON.stringify(accessTokenValue));
        }
        else {
            scope = this.clientId;
            var accessTokenKey = new AccessTokenKey_1.AccessTokenKey(authority, this.clientId, scope, clientObj.uid, clientObj.utid);
            var accessTokenValue = new AccessTokenValue_1.AccessTokenValue(tokenResponse.parameters[Constants_1.Constants.idToken], tokenResponse.parameters[Constants_1.Constants.idToken], idToken.expiration, clientInfo);
            this._cacheStorage.setItem(JSON.stringify(accessTokenKey), JSON.stringify(accessTokenValue));
        }
    };
    /*
     * Saves token or error received in the response from AAD in the cache. In case of id_token, it also creates the user object.
     * @ignore
     * @hidden
     */
    UserAgentApplication.prototype.saveTokenFromHash = function (tokenResponse) {
        this._logger.info("State status:" + tokenResponse.stateMatch + "; Request type:" + tokenResponse.requestType);
        this._cacheStorage.setItem(Constants_1.Constants.msalError, "");
        this._cacheStorage.setItem(Constants_1.Constants.msalErrorDescription, "");
        var scope = "";
        var authorityKey = "";
        var acquireTokenUserKey = "";
        if (tokenResponse.parameters.hasOwnProperty("scope")) {
            scope = tokenResponse.parameters["scope"].toLowerCase();
        }
        else {
            scope = this.clientId;
        }
        // Record error
        if (tokenResponse.parameters.hasOwnProperty(Constants_1.Constants.errorDescription) || tokenResponse.parameters.hasOwnProperty(Constants_1.Constants.error)) {
            this._logger.infoPii("Error :" + tokenResponse.parameters[Constants_1.Constants.error] + "; Error description:" + tokenResponse.parameters[Constants_1.Constants.errorDescription]);
            this._cacheStorage.setItem(Constants_1.Constants.msalError, tokenResponse.parameters["error"]);
            this._cacheStorage.setItem(Constants_1.Constants.msalErrorDescription, tokenResponse.parameters[Constants_1.Constants.errorDescription]);
            if (tokenResponse.requestType === Constants_1.Constants.login) {
                this._loginInProgress = false;
                this._cacheStorage.setItem(Constants_1.Constants.loginError, tokenResponse.parameters[Constants_1.Constants.errorDescription] + ":" + tokenResponse.parameters[Constants_1.Constants.error]);
                authorityKey = Constants_1.Constants.authority + Constants_1.Constants.resourceDelimeter + tokenResponse.stateResponse;
            }
            if (tokenResponse.requestType === Constants_1.Constants.renewToken) {
                this._acquireTokenInProgress = false;
                authorityKey = Constants_1.Constants.authority + Constants_1.Constants.resourceDelimeter + tokenResponse.stateResponse;
                var userKey = this.getUser() !== null ? this.getUser().userIdentifier : "";
                acquireTokenUserKey = Constants_1.Constants.acquireTokenUser + Constants_1.Constants.resourceDelimeter + userKey + Constants_1.Constants.resourceDelimeter + tokenResponse.stateResponse;
            }
        }
        else {
            // It must verify the state from redirect
            if (tokenResponse.stateMatch) {
                // record tokens to storage if exists
                this._logger.info("State is right");
                if (tokenResponse.parameters.hasOwnProperty(Constants_1.Constants.sessionState)) {
                    this._cacheStorage.setItem(Constants_1.Constants.msalSessionState, tokenResponse.parameters[Constants_1.Constants.sessionState]);
                }
                var idToken;
                var clientInfo = "";
                if (tokenResponse.parameters.hasOwnProperty(Constants_1.Constants.accessToken)) {
                    this._logger.info("Fragment has access token");
                    this._acquireTokenInProgress = false;
                    var user = void 0;
                    if (tokenResponse.parameters.hasOwnProperty(Constants_1.Constants.idToken)) {
                        idToken = new IdToken_1.IdToken(tokenResponse.parameters[Constants_1.Constants.idToken]);
                    }
                    else {
                        idToken = new IdToken_1.IdToken(this._cacheStorage.getItem(Constants_1.Constants.idTokenKey));
                    }
                    authorityKey = Constants_1.Constants.authority + Constants_1.Constants.resourceDelimeter + tokenResponse.stateResponse;
                    var authority = this._cacheStorage.getItem(authorityKey, this.storeAuthStateInCookie);
                    if (!Utils_1.Utils.isEmpty(authority)) {
                        authority = Utils_1.Utils.replaceFirstPath(authority, idToken.tenantId);
                    }
                    if (tokenResponse.parameters.hasOwnProperty(Constants_1.Constants.clientInfo)) {
                        clientInfo = tokenResponse.parameters[Constants_1.Constants.clientInfo];
                        user = User_1.User.createUser(idToken, new ClientInfo_1.ClientInfo(clientInfo));
                    }
                    else {
                        this._logger.warning("ClientInfo not received in the response from AAD");
                        user = User_1.User.createUser(idToken, new ClientInfo_1.ClientInfo(clientInfo));
                    }
                    acquireTokenUserKey = Constants_1.Constants.acquireTokenUser + Constants_1.Constants.resourceDelimeter + user.userIdentifier + Constants_1.Constants.resourceDelimeter + tokenResponse.stateResponse;
                    var acquireTokenUserKey_nouser = Constants_1.Constants.acquireTokenUser + Constants_1.Constants.resourceDelimeter + Constants_1.Constants.no_user + Constants_1.Constants.resourceDelimeter + tokenResponse.stateResponse;
                    var cachedUser = this._cacheStorage.getItem(acquireTokenUserKey);
                    var acquireTokenUser = void 0;
                    if (!Utils_1.Utils.isEmpty(cachedUser)) {
                        acquireTokenUser = JSON.parse(cachedUser);
                        if (user && acquireTokenUser && Utils_1.Utils.compareObjects(user, acquireTokenUser)) {
                            this.saveAccessToken(authority, tokenResponse, user, clientInfo, idToken);
                            this._logger.info("The user object received in the response is the same as the one passed in the acquireToken request");
                        }
                        else {
                            this._logger.warning("The user object created from the response is not the same as the one passed in the acquireToken request");
                        }
                    }
                    else if (!Utils_1.Utils.isEmpty(this._cacheStorage.getItem(acquireTokenUserKey_nouser))) {
                        this.saveAccessToken(authority, tokenResponse, user, clientInfo, idToken);
                    }
                }
                if (tokenResponse.parameters.hasOwnProperty(Constants_1.Constants.idToken)) {
                    this._logger.info("Fragment has id token");
                    this._loginInProgress = false;
                    idToken = new IdToken_1.IdToken(tokenResponse.parameters[Constants_1.Constants.idToken]);
                    if (tokenResponse.parameters.hasOwnProperty(Constants_1.Constants.clientInfo)) {
                        clientInfo = tokenResponse.parameters[Constants_1.Constants.clientInfo];
                    }
                    else {
                        this._logger.warning("ClientInfo not received in the response from AAD");
                    }
                    authorityKey = Constants_1.Constants.authority + Constants_1.Constants.resourceDelimeter + tokenResponse.stateResponse;
                    var authority = this._cacheStorage.getItem(authorityKey, this.storeAuthStateInCookie);
                    if (!Utils_1.Utils.isEmpty(authority)) {
                        authority = Utils_1.Utils.replaceFirstPath(authority, idToken.tenantId);
                    }
                    this._user = User_1.User.createUser(idToken, new ClientInfo_1.ClientInfo(clientInfo));
                    if (idToken && idToken.nonce) {
                        if (idToken.nonce !== this._cacheStorage.getItem(Constants_1.Constants.nonceIdToken, this.storeAuthStateInCookie)) {
                            this._user = null;
                            this._cacheStorage.setItem(Constants_1.Constants.loginError, "Nonce Mismatch. Expected Nonce: " + this._cacheStorage.getItem(Constants_1.Constants.nonceIdToken, this.storeAuthStateInCookie) + "," + "Actual Nonce: " + idToken.nonce);
                            this._logger.error("Nonce Mismatch.Expected Nonce: " + this._cacheStorage.getItem(Constants_1.Constants.nonceIdToken, this.storeAuthStateInCookie) + "," + "Actual Nonce: " + idToken.nonce);
                        }
                        else {
                            this._cacheStorage.setItem(Constants_1.Constants.idTokenKey, tokenResponse.parameters[Constants_1.Constants.idToken]);
                            this._cacheStorage.setItem(Constants_1.Constants.msalClientInfo, clientInfo);
                            // Save idToken as access token for app itself
                            this.saveAccessToken(authority, tokenResponse, this._user, clientInfo, idToken);
                        }
                    }
                    else {
                        authorityKey = tokenResponse.stateResponse;
                        acquireTokenUserKey = tokenResponse.stateResponse;
                        this._logger.error("Invalid id_token received in the response");
                        tokenResponse.parameters["error"] = "invalid idToken";
                        tokenResponse.parameters["error_description"] = "Invalid idToken. idToken: " + tokenResponse.parameters[Constants_1.Constants.idToken];
                        this._cacheStorage.setItem(Constants_1.Constants.msalError, "invalid idToken");
                        this._cacheStorage.setItem(Constants_1.Constants.msalErrorDescription, "Invalid idToken. idToken: " + tokenResponse.parameters[Constants_1.Constants.idToken]);
                    }
                }
            }
            else {
                authorityKey = tokenResponse.stateResponse;
                acquireTokenUserKey = tokenResponse.stateResponse;
                this._logger.error("State Mismatch.Expected State: " + this._cacheStorage.getItem(Constants_1.Constants.stateLogin, this.storeAuthStateInCookie) + "," + "Actual State: " + tokenResponse.stateResponse);
                tokenResponse.parameters["error"] = "Invalid_state";
                tokenResponse.parameters["error_description"] = "Invalid_state. state: " + tokenResponse.stateResponse;
                this._cacheStorage.setItem(Constants_1.Constants.msalError, "Invalid_state");
                this._cacheStorage.setItem(Constants_1.Constants.msalErrorDescription, "Invalid_state. state: " + tokenResponse.stateResponse);
            }
        }
        this._cacheStorage.setItem(Constants_1.Constants.renewStatus + tokenResponse.stateResponse, Constants_1.Constants.tokenRenewStatusCompleted);
        this._cacheStorage.removeAcquireTokenEntries(authorityKey, acquireTokenUserKey);
        //this is required if navigateToLoginRequestUrl=false
        if (this.storeAuthStateInCookie) {
            this._cacheStorage.setItemCookie(authorityKey, "", -1);
            this._cacheStorage.clearCookie();
        }
    };
    /* tslint:enable:no-string-literal */
    /*
     * Checks if the redirect response is received from the STS. In case of redirect, the url fragment has either id_token, access_token or error.
     * @param {string} hash - Hash passed from redirect page.
     * @returns {Boolean} - true if response contains id_token, access_token or error, false otherwise.
     * @hidden
     */
    UserAgentApplication.prototype.isCallback = function (hash) {
        hash = this.getHash(hash);
        var parameters = Utils_1.Utils.deserialize(hash);
        return (parameters.hasOwnProperty(Constants_1.Constants.errorDescription) ||
            parameters.hasOwnProperty(Constants_1.Constants.error) ||
            parameters.hasOwnProperty(Constants_1.Constants.accessToken) ||
            parameters.hasOwnProperty(Constants_1.Constants.idToken));
    };
    /*
     * Returns the anchor part(#) of the URL
     * @ignore
     * @hidden
     */
    UserAgentApplication.prototype.getHash = function (hash) {
        if (hash.indexOf("#/") > -1) {
            hash = hash.substring(hash.indexOf("#/") + 2);
        }
        else if (hash.indexOf("#") > -1) {
            hash = hash.substring(1);
        }
        return hash;
    };
    /*
      * Creates a requestInfo object from the URL fragment and returns it.
      * @param {string} hash  -  Hash passed from redirect page
      * @returns {TokenResponse} an object created from the redirect response from AAD comprising of the keys - parameters, requestType, stateMatch, stateResponse and valid.
      * @ignore
      * @hidden
      */
    UserAgentApplication.prototype.getRequestInfo = function (hash) {
        hash = this.getHash(hash);
        var parameters = Utils_1.Utils.deserialize(hash);
        var tokenResponse = new RequestInfo_1.TokenResponse();
        if (parameters) {
            tokenResponse.parameters = parameters;
            if (parameters.hasOwnProperty(Constants_1.Constants.errorDescription) ||
                parameters.hasOwnProperty(Constants_1.Constants.error) ||
                parameters.hasOwnProperty(Constants_1.Constants.accessToken) ||
                parameters.hasOwnProperty(Constants_1.Constants.idToken)) {
                tokenResponse.valid = true;
                // which call
                var stateResponse = void 0;
                if (parameters.hasOwnProperty("state")) {
                    stateResponse = parameters.state;
                }
                else {
                    return tokenResponse;
                }
                tokenResponse.stateResponse = stateResponse;
                // async calls can fire iframe and login request at the same time if developer does not use the API as expected
                // incoming callback needs to be looked up to find the request type
                if (stateResponse === this._cacheStorage.getItem(Constants_1.Constants.stateLogin, this.storeAuthStateInCookie) || stateResponse === this._silentAuthenticationState) { // loginRedirect
                    tokenResponse.requestType = Constants_1.Constants.login;
                    tokenResponse.stateMatch = true;
                    return tokenResponse;
                }
                else if (stateResponse === this._cacheStorage.getItem(Constants_1.Constants.stateAcquireToken, this.storeAuthStateInCookie)) { //acquireTokenRedirect
                    tokenResponse.requestType = Constants_1.Constants.renewToken;
                    tokenResponse.stateMatch = true;
                    return tokenResponse;
                }
                // external api requests may have many renewtoken requests for different resource
                if (!tokenResponse.stateMatch) {
                    tokenResponse.requestType = window.requestType;
                    var statesInParentContext = window.renewStates;
                    for (var i = 0; i < statesInParentContext.length; i++) {
                        if (statesInParentContext[i] === tokenResponse.stateResponse) {
                            tokenResponse.stateMatch = true;
                            break;
                        }
                    }
                }
            }
        }
        return tokenResponse;
    };
    /*
      * Extracts scope value from the state sent with the authentication request.
      * @returns {string} scope.
      * @ignore
      * @hidden
      */
    UserAgentApplication.prototype.getScopeFromState = function (state) {
        if (state) {
            var splitIndex = state.indexOf("|");
            if (splitIndex > -1 && splitIndex + 1 < state.length) {
                return state.substring(splitIndex + 1);
            }
        }
        return "";
    };
    /*
    * Extracts state value from the userState sent with the authentication request.
    * @returns {string} scope.
    * @ignore
    * @hidden
    */
    UserAgentApplication.prototype.getUserState = function (state) {
        if (state) {
            var splitIndex = state.indexOf("|");
            if (splitIndex > -1 && splitIndex + 1 < state.length) {
                return state.substring(splitIndex + 1);
            }
        }
        return "";
    };
    /*
      * Returns whether current window is in ifram for token renewal
      * @ignore
      * @hidden
      */
    UserAgentApplication.prototype.isInIframe = function () {
        return window.parent !== window;
    };
    UserAgentApplication.prototype.loginInProgress = function () {
        var pendingCallback = this._cacheStorage.getItem(Constants_1.Constants.urlHash);
        if (pendingCallback) {
            return true;
        }
        return this._loginInProgress;
    };
    UserAgentApplication.prototype.getHostFromUri = function (uri) {
        // remove http:// or https:// from uri
        var extractedUri = String(uri).replace(/^(https?:)\/\//, "");
        extractedUri = extractedUri.split("/")[0];
        return extractedUri;
    };
    UserAgentApplication.prototype.getScopesForEndpoint = function (endpoint) {
        // if user specified list of unprotectedResources, no need to send token to these endpoints, return null.
        if (this._unprotectedResources.length > 0) {
            for (var i = 0; i < this._unprotectedResources.length; i++) {
                if (endpoint.indexOf(this._unprotectedResources[i]) > -1) {
                    return null;
                }
            }
        }
        if (this._protectedResourceMap.size > 0) {
            for (var _i = 0, _a = Array.from(this._protectedResourceMap.keys()); _i < _a.length; _i++) {
                var key = _a[_i];
                // configEndpoint is like /api/Todo requested endpoint can be /api/Todo/1
                if (endpoint.indexOf(key) > -1) {
                    return this._protectedResourceMap.get(key);
                }
            }
        }
        // default resource will be clientid if nothing specified
        // App will use idtoken for calls to itself
        // check if it's staring from http or https, needs to match with app host
        if (endpoint.indexOf("http://") > -1 || endpoint.indexOf("https://") > -1) {
            if (this.getHostFromUri(endpoint) === this.getHostFromUri(this.getRedirectUri())) {
                return new Array(this.clientId);
            }
        }
        else {
            // in angular level, the url for $http interceptor call could be relative url,
            // if it's relative call, we'll treat it as app backend call.
            return new Array(this.clientId);
        }
        // if not the app's own backend or not a domain listed in the endpoints structure
        return null;
    };
    //These APIS are exposed for msalAngular wrapper only
    UserAgentApplication.prototype.setloginInProgress = function (loginInProgress) {
        this._loginInProgress = loginInProgress;
    };
    UserAgentApplication.prototype.getAcquireTokenInProgress = function () {
        return this._acquireTokenInProgress;
    };
    UserAgentApplication.prototype.setAcquireTokenInProgress = function (acquireTokenInProgress) {
        this._acquireTokenInProgress = acquireTokenInProgress;
    };
    UserAgentApplication.prototype.getLogger = function () {
        return this._logger;
    };
    tslib_1.__decorate([
        resolveTokenOnlyIfOutOfIframe
    ], UserAgentApplication.prototype, "acquireTokenSilent", null);
    return UserAgentApplication;
}());
exports.UserAgentApplication = UserAgentApplication;
//# sourceMappingURL=UserAgentApplication.js.map

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports['default'] = symbolObservablePonyfill;
function symbolObservablePonyfill(root) {
	var result;
	var _Symbol = root.Symbol;

	if (typeof _Symbol === 'function') {
		if (_Symbol.observable) {
			result = _Symbol.observable;
		} else {
			result = _Symbol('observable');
			_Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ponyfill = __webpack_require__(34);

var _ponyfill2 = _interopRequireDefault(_ponyfill);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var root; /* global window */


if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {}

var result = (0, _ponyfill2['default'])(root);
exports['default'] = result;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(4), __webpack_require__(35)(module)))

/***/ }),
/* 37 */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);


/***/ }),
/* 38 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(4), __webpack_require__(38)))

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(39);
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(4)))

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(setImmediate) {

// Store setTimeout reference so promise-polyfill will be unaffected by
// other code modifying setTimeout (like sinon.useFakeTimers())
var setTimeoutFunc = setTimeout;

function noop() {}

// Polyfill for Function.prototype.bind
function bind(fn, thisArg) {
  return function() {
    fn.apply(thisArg, arguments);
  };
}

function Promise(fn) {
  if (!(this instanceof Promise))
    throw new TypeError('Promises must be constructed via new');
  if (typeof fn !== 'function') throw new TypeError('not a function');
  this._state = 0;
  this._handled = false;
  this._value = undefined;
  this._deferreds = [];

  doResolve(fn, this);
}

function handle(self, deferred) {
  while (self._state === 3) {
    self = self._value;
  }
  if (self._state === 0) {
    self._deferreds.push(deferred);
    return;
  }
  self._handled = true;
  Promise._immediateFn(function() {
    var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;
    if (cb === null) {
      (self._state === 1 ? resolve : reject)(deferred.promise, self._value);
      return;
    }
    var ret;
    try {
      ret = cb(self._value);
    } catch (e) {
      reject(deferred.promise, e);
      return;
    }
    resolve(deferred.promise, ret);
  });
}

function resolve(self, newValue) {
  try {
    // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
    if (newValue === self)
      throw new TypeError('A promise cannot be resolved with itself.');
    if (
      newValue &&
      (typeof newValue === 'object' || typeof newValue === 'function')
    ) {
      var then = newValue.then;
      if (newValue instanceof Promise) {
        self._state = 3;
        self._value = newValue;
        finale(self);
        return;
      } else if (typeof then === 'function') {
        doResolve(bind(then, newValue), self);
        return;
      }
    }
    self._state = 1;
    self._value = newValue;
    finale(self);
  } catch (e) {
    reject(self, e);
  }
}

function reject(self, newValue) {
  self._state = 2;
  self._value = newValue;
  finale(self);
}

function finale(self) {
  if (self._state === 2 && self._deferreds.length === 0) {
    Promise._immediateFn(function() {
      if (!self._handled) {
        Promise._unhandledRejectionFn(self._value);
      }
    });
  }

  for (var i = 0, len = self._deferreds.length; i < len; i++) {
    handle(self, self._deferreds[i]);
  }
  self._deferreds = null;
}

function Handler(onFulfilled, onRejected, promise) {
  this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
  this.onRejected = typeof onRejected === 'function' ? onRejected : null;
  this.promise = promise;
}

/**
 * Take a potentially misbehaving resolver function and make sure
 * onFulfilled and onRejected are only called once.
 *
 * Makes no guarantees about asynchrony.
 */
function doResolve(fn, self) {
  var done = false;
  try {
    fn(
      function(value) {
        if (done) return;
        done = true;
        resolve(self, value);
      },
      function(reason) {
        if (done) return;
        done = true;
        reject(self, reason);
      }
    );
  } catch (ex) {
    if (done) return;
    done = true;
    reject(self, ex);
  }
}

Promise.prototype['catch'] = function(onRejected) {
  return this.then(null, onRejected);
};

Promise.prototype.then = function(onFulfilled, onRejected) {
  var prom = new this.constructor(noop);

  handle(this, new Handler(onFulfilled, onRejected, prom));
  return prom;
};

Promise.prototype['finally'] = function(callback) {
  var constructor = this.constructor;
  return this.then(
    function(value) {
      return constructor.resolve(callback()).then(function() {
        return value;
      });
    },
    function(reason) {
      return constructor.resolve(callback()).then(function() {
        return constructor.reject(reason);
      });
    }
  );
};

Promise.all = function(arr) {
  return new Promise(function(resolve, reject) {
    if (!arr || typeof arr.length === 'undefined')
      throw new TypeError('Promise.all accepts an array');
    var args = Array.prototype.slice.call(arr);
    if (args.length === 0) return resolve([]);
    var remaining = args.length;

    function res(i, val) {
      try {
        if (val && (typeof val === 'object' || typeof val === 'function')) {
          var then = val.then;
          if (typeof then === 'function') {
            then.call(
              val,
              function(val) {
                res(i, val);
              },
              reject
            );
            return;
          }
        }
        args[i] = val;
        if (--remaining === 0) {
          resolve(args);
        }
      } catch (ex) {
        reject(ex);
      }
    }

    for (var i = 0; i < args.length; i++) {
      res(i, args[i]);
    }
  });
};

Promise.resolve = function(value) {
  if (value && typeof value === 'object' && value.constructor === Promise) {
    return value;
  }

  return new Promise(function(resolve) {
    resolve(value);
  });
};

Promise.reject = function(value) {
  return new Promise(function(resolve, reject) {
    reject(value);
  });
};

Promise.race = function(values) {
  return new Promise(function(resolve, reject) {
    for (var i = 0, len = values.length; i < len; i++) {
      values[i].then(resolve, reject);
    }
  });
};

// Use polyfill for setImmediate for performance gains
Promise._immediateFn =
  (typeof setImmediate === 'function' &&
    function(fn) {
      setImmediate(fn);
    }) ||
  function(fn) {
    setTimeoutFunc(fn, 0);
  };

Promise._unhandledRejectionFn = function _unhandledRejectionFn(err) {
  if (typeof console !== 'undefined' && console) {
    console.warn('Possible Unhandled Promise Rejection:', err); // eslint-disable-line no-console
  }
};

module.exports = Promise;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(40).setImmediate))

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// support for async functions

if (true) {
  var g = typeof window !== 'undefined' &&
  window.Math === Math ? window : typeof global === 'object' ? global : this

  if (!g.Promise) {
    g.Promise = __webpack_require__(41)
  }
  if (!g.regeneratorRuntime) {
    g.regeneratorRuntime = __webpack_require__(37)
  }
} else {}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(4)))

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(21);


/***/ })
/******/ ]);