/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Montserrat&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 20px;\n    background: #272727;\n    font-family: 'Montserrat', sans-serif;\n    color: white;\n}\n\n#array-container {\n    display: flex;\n}\n\n#options {\n    display: flex;\n    width: 100vw;\n    margin-top: 10px;\n}\n\n.array-elem {\n    border: 1px solid black;\n}\n\n#left-buttons {\n    display: flex;\n    flex-direction: column;\n}\n\n\n#sort-selection {\n    width: 60vw;\n    margin-left: 100px;\n    position: relative;\n}\n\n\n.sort-button {\n    color: #f6f4e6;\n    text-transform: uppercase;\n    transition: all 0.2s ease-in-out;\n    display: block;\n    float: left;\n    margin: 0;\n    padding: 0;\n    border: 0;\n    width: 16.66%;\n    text-align: center;\n}\n\n.sort-button:hover {\n    color: #fddb3a;\n    cursor: pointer;\n\n}\n\n#sort-selection .sort-button:hover ~ #dot {\n    opacity: 1;\n    transition: all 0.2s ease-in-out;\n}\n\n#sort-selection .sort-button:nth-child(1):hover ~ #dot {\n    left: 8.33%;\n}\n\n#sort-selection .sort-button:nth-child(2):hover ~ #dot {\n    left: 25%;\n}\n\n#sort-selection .sort-button:nth-child(3):hover ~ #dot {\n    left: 41.66%;\n}\n\n#sort-selection .sort-button:nth-child(4):hover ~ #dot {\n    left: 58.33%;\n}\n\n#sort-selection .sort-button:nth-child(5):hover ~ #dot {\n    left: 75%;\n}\n\n#sort-selection .sort-button:nth-child(6):hover ~ #dot {\n    left: 91.66%;\n}\n\n#sort-selection:after {\n    content: \"\";\n    display: block;\n    position: absolute;\n    width: 100%;\n    height: 1px;\n    background: #fddb3a;\n    top: 30px;\n}\n\n\n#dot {\n    width: 6px;\n    height: 6px;\n    background: #fddb3a;\n    border-radius: 50%;\n    opacity: 0;\n    transition: all 0.2s ease-in-out;\n    position: absolute;\n    left: -15%;\n    top: 27px;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;IACT,mBAAmB;IACnB,qCAAqC;IACrC,YAAY;AAChB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;;AAGA;IACI,WAAW;IACX,kBAAkB;IAClB,kBAAkB;AACtB;;;AAGA;IACI,cAAc;IACd,yBAAyB;IACzB,gCAAgC;IAChC,cAAc;IACd,WAAW;IACX,SAAS;IACT,UAAU;IACV,SAAS;IACT,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,cAAc;IACd,eAAe;;AAEnB;;AAEA;IACI,UAAU;IACV,gCAAgC;AACpC;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,SAAS;AACb;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,SAAS;AACb;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,cAAc;IACd,kBAAkB;IAClB,WAAW;IACX,WAAW;IACX,mBAAmB;IACnB,SAAS;AACb;;;AAGA;IACI,UAAU;IACV,WAAW;IACX,mBAAmB;IACnB,kBAAkB;IAClB,UAAU;IACV,gCAAgC;IAChC,kBAAkB;IAClB,UAAU;IACV,SAAS;AACb","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');\n\nbody {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 20px;\n    background: #272727;\n    font-family: 'Montserrat', sans-serif;\n    color: white;\n}\n\n#array-container {\n    display: flex;\n}\n\n#options {\n    display: flex;\n    width: 100vw;\n    margin-top: 10px;\n}\n\n.array-elem {\n    border: 1px solid black;\n}\n\n#left-buttons {\n    display: flex;\n    flex-direction: column;\n}\n\n\n#sort-selection {\n    width: 60vw;\n    margin-left: 100px;\n    position: relative;\n}\n\n\n.sort-button {\n    color: #f6f4e6;\n    text-transform: uppercase;\n    transition: all 0.2s ease-in-out;\n    display: block;\n    float: left;\n    margin: 0;\n    padding: 0;\n    border: 0;\n    width: 16.66%;\n    text-align: center;\n}\n\n.sort-button:hover {\n    color: #fddb3a;\n    cursor: pointer;\n\n}\n\n#sort-selection .sort-button:hover ~ #dot {\n    opacity: 1;\n    transition: all 0.2s ease-in-out;\n}\n\n#sort-selection .sort-button:nth-child(1):hover ~ #dot {\n    left: 8.33%;\n}\n\n#sort-selection .sort-button:nth-child(2):hover ~ #dot {\n    left: 25%;\n}\n\n#sort-selection .sort-button:nth-child(3):hover ~ #dot {\n    left: 41.66%;\n}\n\n#sort-selection .sort-button:nth-child(4):hover ~ #dot {\n    left: 58.33%;\n}\n\n#sort-selection .sort-button:nth-child(5):hover ~ #dot {\n    left: 75%;\n}\n\n#sort-selection .sort-button:nth-child(6):hover ~ #dot {\n    left: 91.66%;\n}\n\n#sort-selection:after {\n    content: \"\";\n    display: block;\n    position: absolute;\n    width: 100%;\n    height: 1px;\n    background: #fddb3a;\n    top: 30px;\n}\n\n\n#dot {\n    width: 6px;\n    height: 6px;\n    background: #fddb3a;\n    border-radius: 50%;\n    opacity: 0;\n    transition: all 0.2s ease-in-out;\n    position: absolute;\n    left: -15%;\n    top: 27px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/algorithms/bubble.js":
/*!**********************************!*\
  !*** ./src/algorithms/bubble.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const SWAP = 1;
const COMP = 0;

/* harmony default export */ function* __WEBPACK_DEFAULT_EXPORT__(size, arr) {
    for (let i = 0; i < size-1; i++) {
        for (let j = 0; j < size-i-1; j++) {
            if (arr[j] > arr[j+1]) yield [j, j+1, arr[j+1], arr[j], SWAP];
            else yield [j, j+1, arr[j+1], arr[j], COMP];
        }
    }
}

/***/ }),

/***/ "./src/algorithms/heapsort.js":
/*!************************************!*\
  !*** ./src/algorithms/heapsort.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const SWAP = 1;
const COMP = 0;

// array representation of heap of size n starting at index 0
// i represents sub-heap starting index
function* heapify(arr, n, i) {
    let largest = i;
    let l = 2 * i + 1, r = 2 * i + 2;

    // check if left and right children are larger
    if (l < n && arr[largest] < arr[l]) {
        largest = l;
    }
    if (r < n && arr[largest] < arr[r]) {
        largest = r;
    }

    // change root and recursively heapify
    if (largest !== i) {
        yield [i, largest, arr[largest], arr[i], SWAP];
        yield *heapify(arr, n, largest);
    }   
}

function* heapSortHelper(arr, size) {
    // heapify array
    for (let i = Math.floor(size / 2) - 1; i >= 0; i--) {
        yield *heapify(arr, size, i);
    }

    // extract elements from heap and heapify
    for (let i = size - 1; i > 0; i--) {
        yield [0, i, arr[i], arr[0], SWAP];
        yield *heapify(arr, i, 0);
    }
}

/* harmony default export */ function* __WEBPACK_DEFAULT_EXPORT__(size, arr) {
    yield *heapSortHelper(arr, size);
}

/***/ }),

/***/ "./src/algorithms/insertion.js":
/*!*************************************!*\
  !*** ./src/algorithms/insertion.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const SWAP = 1;
const COMP = 0;

/* harmony default export */ function* __WEBPACK_DEFAULT_EXPORT__(size, arr) {
    for (let i = 1; i < size; i++) {
        const next = arr[i];
        let j = i-1;
        while (j >= 0 && next < arr[j]) {
            yield [j+1, j, arr[j], arr[j+1], SWAP];
            j--;
        }
    }
}

/***/ }),

/***/ "./src/algorithms/mergesort.js":
/*!*************************************!*\
  !*** ./src/algorithms/mergesort.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const SWAP = 1;
const COMP = 0;

function* merge(arr, l, m, r) {
    const L = arr.slice(l, m + 1);
    const R = arr.slice(m + 1, r + 1);
    const n1 = L.length, n2 = R.length;

    let i = 0, j = 0, k = l;

    // merge non-empty subarrays
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            yield [k, k, L[i], L[i], SWAP]; 
            k++, i++;
        }
        else {
            yield [k, k, R[j], R[j], SWAP];
            k++, j++;
        }
    }

    // fill up rest if one array is still non-empty
    while (i < n1) {
        yield [k, k, L[i], L[i], SWAP]; 
        k++, i++;
    }
    while (j < n2) {
        yield [k, k, R[j], R[j], SWAP]; 
        k++, j++;
    }
}

function* mergeSortHelper(arr, l, r) {
    if (l >= r) {
        return;
    }
    let mid = Math.floor((l + r) / 2);
    yield *mergeSortHelper(arr, l, mid);
    yield *mergeSortHelper(arr, mid + 1, r);
    yield *merge(arr, l, mid, r);
}

/* harmony default export */ function* __WEBPACK_DEFAULT_EXPORT__(size, arr) {
    yield *mergeSortHelper(arr, 0, size - 1);
}

/***/ }),

/***/ "./src/algorithms/quicksort.js":
/*!*************************************!*\
  !*** ./src/algorithms/quicksort.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const SWAP = 1;
const COMP = 0;

// Naive quicksort

function* partition(arr, l, h, pivot) {
    let i = l + 1, j = h;
    while (true) {
        while(arr[i] <= pivot && i < j) i++;
        while (arr[j] >= pivot && i < j) j--;
        if (i === j) break;
        yield [i, j, arr[j], arr[i], SWAP];
    }
}

function* quickSortHelper(arr, l, h) {
    if (h <= l) return;
    let pivot = arr[l];
    yield* partition(arr, l, h, pivot);

    // fix pivot element position
    let i = l + 1;
    while (arr[i] <= pivot && i < h) {
        i++;
    }
    if (arr[i] > pivot) i--;
    yield [l, i, arr[i], pivot, SWAP];

    // recursively sort left and right
    yield *quickSortHelper(arr, l, i-1);
    yield *quickSortHelper(arr, i+1, h);
}

/* harmony default export */ function* __WEBPACK_DEFAULT_EXPORT__(size, arr) {
    yield *quickSortHelper(arr, 0, size - 1);
}


/***/ }),

/***/ "./src/algorithms/selection.js":
/*!*************************************!*\
  !*** ./src/algorithms/selection.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const SWAP = 1;
const COMP = 0;

/* harmony default export */ function* __WEBPACK_DEFAULT_EXPORT__(size, arr) {
    for (let i = 0; i < size; i++) {
        let min_idx = i;
        for (let j = i+1; j < size; j++) {
            yield [i, j, arr[j], arr[i], COMP];
            if (arr[min_idx] > arr[j]) {
                min_idx = j;
            }
        }
        yield [i, min_idx, arr[min_idx], arr[i], SWAP];
    }
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _algorithms_bubble_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./algorithms/bubble.js */ "./src/algorithms/bubble.js");
/* harmony import */ var _algorithms_selection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./algorithms/selection.js */ "./src/algorithms/selection.js");
/* harmony import */ var _algorithms_insertion_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./algorithms/insertion.js */ "./src/algorithms/insertion.js");
/* harmony import */ var _algorithms_mergesort_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./algorithms/mergesort.js */ "./src/algorithms/mergesort.js");
/* harmony import */ var _algorithms_quicksort_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./algorithms/quicksort.js */ "./src/algorithms/quicksort.js");
/* harmony import */ var _algorithms_heapsort_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./algorithms/heapsort.js */ "./src/algorithms/heapsort.js");








const MIN_HEIGHT = 75;
const MAX_HEIGHT = 5;
const INITIAL_SIZE = 64;
const INITIAL_DELAY = 10;

let arr = []; // store heights of bars
let size = INITIAL_SIZE;
let delay = INITIAL_DELAY;

const arrayContainer = document.querySelector('#array-container');

const randHeight = () => Math.floor(Math.random() * (MAX_HEIGHT - MIN_HEIGHT)) + MIN_HEIGHT;
const sleep = (delay) => new Promise(resolve => setTimeout(resolve, delay));

function computeWidth() {
    return 75/size;
}

const sizeSlider = document.querySelector('#size-slider');
sizeSlider.addEventListener('input', (e) => {
    size = e.srcElement.value;
    randomise();
});

const speedSlider = document.querySelector('#speed-slider');
speedSlider.addEventListener('input', (e) => {
    delay = 1000 / (e.srcElement.value * e.srcElement.value);
});

// Randomises array and displays on page
function randomise() {
    arr = [];
    document.querySelector('#array-container').innerHTML = "";
    for (let i = 0; i < size; i++) {
        let h = randHeight();
        arr.push(h);
        const element = document.createElement('div');
        element.classList.add('array-elem');
        element.dataset.index = i
        element.style['height'] = `${h}vh`;
        element.style['width'] = `${computeWidth()}vw`;
        arrayContainer.appendChild(element);
    }
}
randomise();

// a and b are indices of arr and data-index
// swap places in arr and swap places on DOM
function swap(a, b, h1, h2) {
    //let tmp = arr[a];
    //arr[a] = arr[b]
    //arr[b] = tmp;
    arr[a] = h1;
    arr[b] = h2;

    const item1 = document.querySelector(`[data-index='${a}']`);
    const item2 = document.querySelector(`[data-index='${b}']`);

    item1.style['height'] = `${h1}vh`
    item2.style['height'] = `${h2}vh`;
}

function chooseSort(choice) {
    if (choice === 'bubble') return (0,_algorithms_bubble_js__WEBPACK_IMPORTED_MODULE_1__["default"])(size, arr);
    if (choice === 'selection') return (0,_algorithms_selection_js__WEBPACK_IMPORTED_MODULE_2__["default"])(size, arr);
    if (choice === 'insertion') return (0,_algorithms_insertion_js__WEBPACK_IMPORTED_MODULE_3__["default"])(size, arr);
    if (choice === 'mergesort') return (0,_algorithms_mergesort_js__WEBPACK_IMPORTED_MODULE_4__["default"])(size, arr);
    if (choice === 'quicksort') return (0,_algorithms_quicksort_js__WEBPACK_IMPORTED_MODULE_5__["default"])(size, arr);
    if (choice === 'heapsort') return (0,_algorithms_heapsort_js__WEBPACK_IMPORTED_MODULE_6__["default"])(size, arr);
}

async function sort(event) {
    const process = chooseSort(event.srcElement.id);
    for (const [a, b, h1, h2, action] of process) {
        if (action) {
            await sleep(delay);
            swap(a, b, h1, h2);
        }
    }
}


const sortButtons = document.querySelector('#sort-selection').querySelectorAll('.sort-button');
sortButtons.forEach(button => button.addEventListener('click', sort));


// distance magic

//sortButtons.forEach(button => {
//    button.style.width = `${(parseInt(button.offsetWidth) + 20)}px`;
//    let rect = button.getBoundingClientRect();
//    console.log(rect.left, rect.right);
//});
//const distances = []//

//const buttons = Array.from(sortButtons);
//const dot = document.querySelector('#dot');//

//// initial transform
//distances.push((buttons[0].getBoundingClientRect().right - buttons[0].getBoundingClientRect().left) / 2);//

//// distances between each button
//buttons.slice(1).reduce((prev, curr) => {
//    let rect = curr.getBoundingClientRect().left;
//    distances.push(rect - prev);
//    return rect;
//}, dot.getBoundingClientRect().left);//
//

//for (let i = 0; i < buttons.length; i++) {
//    buttons[i].addEventListener('mouseenter', (e) => {
//        dot.style.cssText += `transform: translateX(${distances[i]})`;
//    });
//}





const randomButton = document.querySelector('#randomise');
randomButton.addEventListener('click', randomise);


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsVUFBVTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLEVBQUU7QUFDdkMsb0NBQW9DLGVBQWU7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx5REFBeUQsRUFBRTtBQUMzRCx5REFBeUQsRUFBRTs7QUFFM0QsK0JBQStCLEdBQUc7QUFDbEMsK0JBQStCLEdBQUc7QUFDbEM7O0FBRUE7QUFDQSxvQ0FBb0MsaUVBQVU7QUFDOUMsdUNBQXVDLG9FQUFhO0FBQ3BELHVDQUF1QyxvRUFBYTtBQUNwRCx1Q0FBdUMsb0VBQVM7QUFDaEQsdUNBQXVDLG9FQUFTO0FBQ2hELHNDQUFzQyxtRUFBUTtBQUM5Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0EsOEJBQThCLG9DQUFvQztBQUNsRTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0EsNkNBQTZDOztBQUU3QztBQUNBLDJHQUEyRzs7QUFFM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsb0NBQW9DO0FBQ3ZDOztBQUVBLGtCQUFrQixvQkFBb0I7QUFDdEM7QUFDQSx3REFBd0QsYUFBYTtBQUNyRSxPQUFPO0FBQ1A7Ozs7OztBQU1BO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zb3J0aW5nLXZpc3VhbGlzZXIvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3NvcnRpbmctdmlzdWFsaXNlci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vc29ydGluZy12aXN1YWxpc2VyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vc29ydGluZy12aXN1YWxpc2VyLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3NvcnRpbmctdmlzdWFsaXNlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9zb3J0aW5nLXZpc3VhbGlzZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3NvcnRpbmctdmlzdWFsaXNlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9zb3J0aW5nLXZpc3VhbGlzZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vc29ydGluZy12aXN1YWxpc2VyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vc29ydGluZy12aXN1YWxpc2VyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vc29ydGluZy12aXN1YWxpc2VyLy4vc3JjL2FsZ29yaXRobXMvYnViYmxlLmpzIiwid2VicGFjazovL3NvcnRpbmctdmlzdWFsaXNlci8uL3NyYy9hbGdvcml0aG1zL2hlYXBzb3J0LmpzIiwid2VicGFjazovL3NvcnRpbmctdmlzdWFsaXNlci8uL3NyYy9hbGdvcml0aG1zL2luc2VydGlvbi5qcyIsIndlYnBhY2s6Ly9zb3J0aW5nLXZpc3VhbGlzZXIvLi9zcmMvYWxnb3JpdGhtcy9tZXJnZXNvcnQuanMiLCJ3ZWJwYWNrOi8vc29ydGluZy12aXN1YWxpc2VyLy4vc3JjL2FsZ29yaXRobXMvcXVpY2tzb3J0LmpzIiwid2VicGFjazovL3NvcnRpbmctdmlzdWFsaXNlci8uL3NyYy9hbGdvcml0aG1zL3NlbGVjdGlvbi5qcyIsIndlYnBhY2s6Ly9zb3J0aW5nLXZpc3VhbGlzZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc29ydGluZy12aXN1YWxpc2VyL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3NvcnRpbmctdmlzdWFsaXNlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc29ydGluZy12aXN1YWxpc2VyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vc29ydGluZy12aXN1YWxpc2VyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc29ydGluZy12aXN1YWxpc2VyL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9zb3J0aW5nLXZpc3VhbGlzZXIvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb250c2VycmF0JmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGJhY2tncm91bmQ6ICMyNzI3Mjc7XFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuI2FycmF5LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbiNvcHRpb25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG4uYXJyYXktZWxlbSB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4jbGVmdC1idXR0b25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuXFxuI3NvcnQtc2VsZWN0aW9uIHtcXG4gICAgd2lkdGg6IDYwdnc7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMDBweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5cXG4uc29ydC1idXR0b24ge1xcbiAgICBjb2xvcjogI2Y2ZjRlNjtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBmbG9hdDogbGVmdDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIHdpZHRoOiAxNi42NiU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnNvcnQtYnV0dG9uOmhvdmVyIHtcXG4gICAgY29sb3I6ICNmZGRiM2E7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG59XFxuXFxuI3NvcnQtc2VsZWN0aW9uIC5zb3J0LWJ1dHRvbjpob3ZlciB+ICNkb3Qge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcXG59XFxuXFxuI3NvcnQtc2VsZWN0aW9uIC5zb3J0LWJ1dHRvbjpudGgtY2hpbGQoMSk6aG92ZXIgfiAjZG90IHtcXG4gICAgbGVmdDogOC4zMyU7XFxufVxcblxcbiNzb3J0LXNlbGVjdGlvbiAuc29ydC1idXR0b246bnRoLWNoaWxkKDIpOmhvdmVyIH4gI2RvdCB7XFxuICAgIGxlZnQ6IDI1JTtcXG59XFxuXFxuI3NvcnQtc2VsZWN0aW9uIC5zb3J0LWJ1dHRvbjpudGgtY2hpbGQoMyk6aG92ZXIgfiAjZG90IHtcXG4gICAgbGVmdDogNDEuNjYlO1xcbn1cXG5cXG4jc29ydC1zZWxlY3Rpb24gLnNvcnQtYnV0dG9uOm50aC1jaGlsZCg0KTpob3ZlciB+ICNkb3Qge1xcbiAgICBsZWZ0OiA1OC4zMyU7XFxufVxcblxcbiNzb3J0LXNlbGVjdGlvbiAuc29ydC1idXR0b246bnRoLWNoaWxkKDUpOmhvdmVyIH4gI2RvdCB7XFxuICAgIGxlZnQ6IDc1JTtcXG59XFxuXFxuI3NvcnQtc2VsZWN0aW9uIC5zb3J0LWJ1dHRvbjpudGgtY2hpbGQoNik6aG92ZXIgfiAjZG90IHtcXG4gICAgbGVmdDogOTEuNjYlO1xcbn1cXG5cXG4jc29ydC1zZWxlY3Rpb246YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMXB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjZmRkYjNhO1xcbiAgICB0b3A6IDMwcHg7XFxufVxcblxcblxcbiNkb3Qge1xcbiAgICB3aWR0aDogNnB4O1xcbiAgICBoZWlnaHQ6IDZweDtcXG4gICAgYmFja2dyb3VuZDogI2ZkZGIzYTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAtMTUlO1xcbiAgICB0b3A6IDI3cHg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLHFDQUFxQztJQUNyQyxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7O0FBR0E7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7O0FBR0E7SUFDSSxjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLGdDQUFnQztJQUNoQyxjQUFjO0lBQ2QsV0FBVztJQUNYLFNBQVM7SUFDVCxVQUFVO0lBQ1YsU0FBUztJQUNULGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTs7QUFFbkI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksU0FBUztBQUNiOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsU0FBUztBQUNiOzs7QUFHQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsZ0NBQWdDO0lBQ2hDLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsU0FBUztBQUNiXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1vbnRzZXJyYXQmZGlzcGxheT1zd2FwJyk7XFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG4gICAgYmFja2dyb3VuZDogIzI3MjcyNztcXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jYXJyYXktY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuI29wdGlvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbi5hcnJheS1lbGVtIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbiNsZWZ0LWJ1dHRvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5cXG4jc29ydC1zZWxlY3Rpb24ge1xcbiAgICB3aWR0aDogNjB2dztcXG4gICAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcblxcbi5zb3J0LWJ1dHRvbiB7XFxuICAgIGNvbG9yOiAjZjZmNGU2O1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGZsb2F0OiBsZWZ0O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgd2lkdGg6IDE2LjY2JTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uc29ydC1idXR0b246aG92ZXIge1xcbiAgICBjb2xvcjogI2ZkZGIzYTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcblxcbn1cXG5cXG4jc29ydC1zZWxlY3Rpb24gLnNvcnQtYnV0dG9uOmhvdmVyIH4gI2RvdCB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4jc29ydC1zZWxlY3Rpb24gLnNvcnQtYnV0dG9uOm50aC1jaGlsZCgxKTpob3ZlciB+ICNkb3Qge1xcbiAgICBsZWZ0OiA4LjMzJTtcXG59XFxuXFxuI3NvcnQtc2VsZWN0aW9uIC5zb3J0LWJ1dHRvbjpudGgtY2hpbGQoMik6aG92ZXIgfiAjZG90IHtcXG4gICAgbGVmdDogMjUlO1xcbn1cXG5cXG4jc29ydC1zZWxlY3Rpb24gLnNvcnQtYnV0dG9uOm50aC1jaGlsZCgzKTpob3ZlciB+ICNkb3Qge1xcbiAgICBsZWZ0OiA0MS42NiU7XFxufVxcblxcbiNzb3J0LXNlbGVjdGlvbiAuc29ydC1idXR0b246bnRoLWNoaWxkKDQpOmhvdmVyIH4gI2RvdCB7XFxuICAgIGxlZnQ6IDU4LjMzJTtcXG59XFxuXFxuI3NvcnQtc2VsZWN0aW9uIC5zb3J0LWJ1dHRvbjpudGgtY2hpbGQoNSk6aG92ZXIgfiAjZG90IHtcXG4gICAgbGVmdDogNzUlO1xcbn1cXG5cXG4jc29ydC1zZWxlY3Rpb24gLnNvcnQtYnV0dG9uOm50aC1jaGlsZCg2KTpob3ZlciB+ICNkb3Qge1xcbiAgICBsZWZ0OiA5MS42NiU7XFxufVxcblxcbiNzb3J0LXNlbGVjdGlvbjphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxcHg7XFxuICAgIGJhY2tncm91bmQ6ICNmZGRiM2E7XFxuICAgIHRvcDogMzBweDtcXG59XFxuXFxuXFxuI2RvdCB7XFxuICAgIHdpZHRoOiA2cHg7XFxuICAgIGhlaWdodDogNnB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjZmRkYjNhO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IC0xNSU7XFxuICAgIHRvcDogMjdweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgU1dBUCA9IDE7XG5jb25zdCBDT01QID0gMDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIChzaXplLCBhcnIpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemUtMTsgaSsrKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2l6ZS1pLTE7IGorKykge1xuICAgICAgICAgICAgaWYgKGFycltqXSA+IGFycltqKzFdKSB5aWVsZCBbaiwgaisxLCBhcnJbaisxXSwgYXJyW2pdLCBTV0FQXTtcbiAgICAgICAgICAgIGVsc2UgeWllbGQgW2osIGorMSwgYXJyW2orMV0sIGFycltqXSwgQ09NUF07XG4gICAgICAgIH1cbiAgICB9XG59IiwiY29uc3QgU1dBUCA9IDE7XG5jb25zdCBDT01QID0gMDtcblxuLy8gYXJyYXkgcmVwcmVzZW50YXRpb24gb2YgaGVhcCBvZiBzaXplIG4gc3RhcnRpbmcgYXQgaW5kZXggMFxuLy8gaSByZXByZXNlbnRzIHN1Yi1oZWFwIHN0YXJ0aW5nIGluZGV4XG5mdW5jdGlvbiogaGVhcGlmeShhcnIsIG4sIGkpIHtcbiAgICBsZXQgbGFyZ2VzdCA9IGk7XG4gICAgbGV0IGwgPSAyICogaSArIDEsIHIgPSAyICogaSArIDI7XG5cbiAgICAvLyBjaGVjayBpZiBsZWZ0IGFuZCByaWdodCBjaGlsZHJlbiBhcmUgbGFyZ2VyXG4gICAgaWYgKGwgPCBuICYmIGFycltsYXJnZXN0XSA8IGFycltsXSkge1xuICAgICAgICBsYXJnZXN0ID0gbDtcbiAgICB9XG4gICAgaWYgKHIgPCBuICYmIGFycltsYXJnZXN0XSA8IGFycltyXSkge1xuICAgICAgICBsYXJnZXN0ID0gcjtcbiAgICB9XG5cbiAgICAvLyBjaGFuZ2Ugcm9vdCBhbmQgcmVjdXJzaXZlbHkgaGVhcGlmeVxuICAgIGlmIChsYXJnZXN0ICE9PSBpKSB7XG4gICAgICAgIHlpZWxkIFtpLCBsYXJnZXN0LCBhcnJbbGFyZ2VzdF0sIGFycltpXSwgU1dBUF07XG4gICAgICAgIHlpZWxkICpoZWFwaWZ5KGFyciwgbiwgbGFyZ2VzdCk7XG4gICAgfSAgIFxufVxuXG5mdW5jdGlvbiogaGVhcFNvcnRIZWxwZXIoYXJyLCBzaXplKSB7XG4gICAgLy8gaGVhcGlmeSBhcnJheVxuICAgIGZvciAobGV0IGkgPSBNYXRoLmZsb29yKHNpemUgLyAyKSAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIHlpZWxkICpoZWFwaWZ5KGFyciwgc2l6ZSwgaSk7XG4gICAgfVxuXG4gICAgLy8gZXh0cmFjdCBlbGVtZW50cyBmcm9tIGhlYXAgYW5kIGhlYXBpZnlcbiAgICBmb3IgKGxldCBpID0gc2l6ZSAtIDE7IGkgPiAwOyBpLS0pIHtcbiAgICAgICAgeWllbGQgWzAsIGksIGFycltpXSwgYXJyWzBdLCBTV0FQXTtcbiAgICAgICAgeWllbGQgKmhlYXBpZnkoYXJyLCBpLCAwKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiAoc2l6ZSwgYXJyKSB7XG4gICAgeWllbGQgKmhlYXBTb3J0SGVscGVyKGFyciwgc2l6ZSk7XG59IiwiY29uc3QgU1dBUCA9IDE7XG5jb25zdCBDT01QID0gMDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIChzaXplLCBhcnIpIHtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IHNpemU7IGkrKykge1xuICAgICAgICBjb25zdCBuZXh0ID0gYXJyW2ldO1xuICAgICAgICBsZXQgaiA9IGktMTtcbiAgICAgICAgd2hpbGUgKGogPj0gMCAmJiBuZXh0IDwgYXJyW2pdKSB7XG4gICAgICAgICAgICB5aWVsZCBbaisxLCBqLCBhcnJbal0sIGFycltqKzFdLCBTV0FQXTtcbiAgICAgICAgICAgIGotLTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJjb25zdCBTV0FQID0gMTtcbmNvbnN0IENPTVAgPSAwO1xuXG5mdW5jdGlvbiogbWVyZ2UoYXJyLCBsLCBtLCByKSB7XG4gICAgY29uc3QgTCA9IGFyci5zbGljZShsLCBtICsgMSk7XG4gICAgY29uc3QgUiA9IGFyci5zbGljZShtICsgMSwgciArIDEpO1xuICAgIGNvbnN0IG4xID0gTC5sZW5ndGgsIG4yID0gUi5sZW5ndGg7XG5cbiAgICBsZXQgaSA9IDAsIGogPSAwLCBrID0gbDtcblxuICAgIC8vIG1lcmdlIG5vbi1lbXB0eSBzdWJhcnJheXNcbiAgICB3aGlsZSAoaSA8IG4xICYmIGogPCBuMikge1xuICAgICAgICBpZiAoTFtpXSA8PSBSW2pdKSB7XG4gICAgICAgICAgICB5aWVsZCBbaywgaywgTFtpXSwgTFtpXSwgU1dBUF07IFxuICAgICAgICAgICAgaysrLCBpKys7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB5aWVsZCBbaywgaywgUltqXSwgUltqXSwgU1dBUF07XG4gICAgICAgICAgICBrKyssIGorKztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGZpbGwgdXAgcmVzdCBpZiBvbmUgYXJyYXkgaXMgc3RpbGwgbm9uLWVtcHR5XG4gICAgd2hpbGUgKGkgPCBuMSkge1xuICAgICAgICB5aWVsZCBbaywgaywgTFtpXSwgTFtpXSwgU1dBUF07IFxuICAgICAgICBrKyssIGkrKztcbiAgICB9XG4gICAgd2hpbGUgKGogPCBuMikge1xuICAgICAgICB5aWVsZCBbaywgaywgUltqXSwgUltqXSwgU1dBUF07IFxuICAgICAgICBrKyssIGorKztcbiAgICB9XG59XG5cbmZ1bmN0aW9uKiBtZXJnZVNvcnRIZWxwZXIoYXJyLCBsLCByKSB7XG4gICAgaWYgKGwgPj0gcikge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBtaWQgPSBNYXRoLmZsb29yKChsICsgcikgLyAyKTtcbiAgICB5aWVsZCAqbWVyZ2VTb3J0SGVscGVyKGFyciwgbCwgbWlkKTtcbiAgICB5aWVsZCAqbWVyZ2VTb3J0SGVscGVyKGFyciwgbWlkICsgMSwgcik7XG4gICAgeWllbGQgKm1lcmdlKGFyciwgbCwgbWlkLCByKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIChzaXplLCBhcnIpIHtcbiAgICB5aWVsZCAqbWVyZ2VTb3J0SGVscGVyKGFyciwgMCwgc2l6ZSAtIDEpO1xufSIsImNvbnN0IFNXQVAgPSAxO1xuY29uc3QgQ09NUCA9IDA7XG5cbi8vIE5haXZlIHF1aWNrc29ydFxuXG5mdW5jdGlvbiogcGFydGl0aW9uKGFyciwgbCwgaCwgcGl2b3QpIHtcbiAgICBsZXQgaSA9IGwgKyAxLCBqID0gaDtcbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB3aGlsZShhcnJbaV0gPD0gcGl2b3QgJiYgaSA8IGopIGkrKztcbiAgICAgICAgd2hpbGUgKGFycltqXSA+PSBwaXZvdCAmJiBpIDwgaikgai0tO1xuICAgICAgICBpZiAoaSA9PT0gaikgYnJlYWs7XG4gICAgICAgIHlpZWxkIFtpLCBqLCBhcnJbal0sIGFycltpXSwgU1dBUF07XG4gICAgfVxufVxuXG5mdW5jdGlvbiogcXVpY2tTb3J0SGVscGVyKGFyciwgbCwgaCkge1xuICAgIGlmIChoIDw9IGwpIHJldHVybjtcbiAgICBsZXQgcGl2b3QgPSBhcnJbbF07XG4gICAgeWllbGQqIHBhcnRpdGlvbihhcnIsIGwsIGgsIHBpdm90KTtcblxuICAgIC8vIGZpeCBwaXZvdCBlbGVtZW50IHBvc2l0aW9uXG4gICAgbGV0IGkgPSBsICsgMTtcbiAgICB3aGlsZSAoYXJyW2ldIDw9IHBpdm90ICYmIGkgPCBoKSB7XG4gICAgICAgIGkrKztcbiAgICB9XG4gICAgaWYgKGFycltpXSA+IHBpdm90KSBpLS07XG4gICAgeWllbGQgW2wsIGksIGFycltpXSwgcGl2b3QsIFNXQVBdO1xuXG4gICAgLy8gcmVjdXJzaXZlbHkgc29ydCBsZWZ0IGFuZCByaWdodFxuICAgIHlpZWxkICpxdWlja1NvcnRIZWxwZXIoYXJyLCBsLCBpLTEpO1xuICAgIHlpZWxkICpxdWlja1NvcnRIZWxwZXIoYXJyLCBpKzEsIGgpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogKHNpemUsIGFycikge1xuICAgIHlpZWxkICpxdWlja1NvcnRIZWxwZXIoYXJyLCAwLCBzaXplIC0gMSk7XG59XG4iLCJjb25zdCBTV0FQID0gMTtcbmNvbnN0IENPTVAgPSAwO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogKHNpemUsIGFycikge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgICAgIGxldCBtaW5faWR4ID0gaTtcbiAgICAgICAgZm9yIChsZXQgaiA9IGkrMTsgaiA8IHNpemU7IGorKykge1xuICAgICAgICAgICAgeWllbGQgW2ksIGosIGFycltqXSwgYXJyW2ldLCBDT01QXTtcbiAgICAgICAgICAgIGlmIChhcnJbbWluX2lkeF0gPiBhcnJbal0pIHtcbiAgICAgICAgICAgICAgICBtaW5faWR4ID0gajtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB5aWVsZCBbaSwgbWluX2lkeCwgYXJyW21pbl9pZHhdLCBhcnJbaV0sIFNXQVBdO1xuICAgIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBidWJibGVTb3J0IGZyb20gJy4vYWxnb3JpdGhtcy9idWJibGUuanMnO1xuaW1wb3J0IHNlbGVjdGlvblNvcnQgZnJvbSAnLi9hbGdvcml0aG1zL3NlbGVjdGlvbi5qcyc7XG5pbXBvcnQgaW5zZXJ0aW9uU29ydCBmcm9tICcuL2FsZ29yaXRobXMvaW5zZXJ0aW9uLmpzJztcbmltcG9ydCBtZXJnZVNvcnQgZnJvbSAnLi9hbGdvcml0aG1zL21lcmdlc29ydC5qcydcbmltcG9ydCBxdWlja1NvcnQgZnJvbSAnLi9hbGdvcml0aG1zL3F1aWNrc29ydC5qcyc7XG5pbXBvcnQgaGVhcFNvcnQgZnJvbSAnLi9hbGdvcml0aG1zL2hlYXBzb3J0LmpzJztcblxuY29uc3QgTUlOX0hFSUdIVCA9IDc1O1xuY29uc3QgTUFYX0hFSUdIVCA9IDU7XG5jb25zdCBJTklUSUFMX1NJWkUgPSA2NDtcbmNvbnN0IElOSVRJQUxfREVMQVkgPSAxMDtcblxubGV0IGFyciA9IFtdOyAvLyBzdG9yZSBoZWlnaHRzIG9mIGJhcnNcbmxldCBzaXplID0gSU5JVElBTF9TSVpFO1xubGV0IGRlbGF5ID0gSU5JVElBTF9ERUxBWTtcblxuY29uc3QgYXJyYXlDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXJyYXktY29udGFpbmVyJyk7XG5cbmNvbnN0IHJhbmRIZWlnaHQgPSAoKSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoTUFYX0hFSUdIVCAtIE1JTl9IRUlHSFQpKSArIE1JTl9IRUlHSFQ7XG5jb25zdCBzbGVlcCA9IChkZWxheSkgPT4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIGRlbGF5KSk7XG5cbmZ1bmN0aW9uIGNvbXB1dGVXaWR0aCgpIHtcbiAgICByZXR1cm4gNzUvc2l6ZTtcbn1cblxuY29uc3Qgc2l6ZVNsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaXplLXNsaWRlcicpO1xuc2l6ZVNsaWRlci5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlKSA9PiB7XG4gICAgc2l6ZSA9IGUuc3JjRWxlbWVudC52YWx1ZTtcbiAgICByYW5kb21pc2UoKTtcbn0pO1xuXG5jb25zdCBzcGVlZFNsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzcGVlZC1zbGlkZXInKTtcbnNwZWVkU2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGUpID0+IHtcbiAgICBkZWxheSA9IDEwMDAgLyAoZS5zcmNFbGVtZW50LnZhbHVlICogZS5zcmNFbGVtZW50LnZhbHVlKTtcbn0pO1xuXG4vLyBSYW5kb21pc2VzIGFycmF5IGFuZCBkaXNwbGF5cyBvbiBwYWdlXG5mdW5jdGlvbiByYW5kb21pc2UoKSB7XG4gICAgYXJyID0gW107XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FycmF5LWNvbnRhaW5lcicpLmlubmVySFRNTCA9IFwiXCI7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcbiAgICAgICAgbGV0IGggPSByYW5kSGVpZ2h0KCk7XG4gICAgICAgIGFyci5wdXNoKGgpO1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYXJyYXktZWxlbScpO1xuICAgICAgICBlbGVtZW50LmRhdGFzZXQuaW5kZXggPSBpXG4gICAgICAgIGVsZW1lbnQuc3R5bGVbJ2hlaWdodCddID0gYCR7aH12aGA7XG4gICAgICAgIGVsZW1lbnQuc3R5bGVbJ3dpZHRoJ10gPSBgJHtjb21wdXRlV2lkdGgoKX12d2A7XG4gICAgICAgIGFycmF5Q29udGFpbmVyLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgIH1cbn1cbnJhbmRvbWlzZSgpO1xuXG4vLyBhIGFuZCBiIGFyZSBpbmRpY2VzIG9mIGFyciBhbmQgZGF0YS1pbmRleFxuLy8gc3dhcCBwbGFjZXMgaW4gYXJyIGFuZCBzd2FwIHBsYWNlcyBvbiBET01cbmZ1bmN0aW9uIHN3YXAoYSwgYiwgaDEsIGgyKSB7XG4gICAgLy9sZXQgdG1wID0gYXJyW2FdO1xuICAgIC8vYXJyW2FdID0gYXJyW2JdXG4gICAgLy9hcnJbYl0gPSB0bXA7XG4gICAgYXJyW2FdID0gaDE7XG4gICAgYXJyW2JdID0gaDI7XG5cbiAgICBjb25zdCBpdGVtMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWluZGV4PScke2F9J11gKTtcbiAgICBjb25zdCBpdGVtMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWluZGV4PScke2J9J11gKTtcblxuICAgIGl0ZW0xLnN0eWxlWydoZWlnaHQnXSA9IGAke2gxfXZoYFxuICAgIGl0ZW0yLnN0eWxlWydoZWlnaHQnXSA9IGAke2gyfXZoYDtcbn1cblxuZnVuY3Rpb24gY2hvb3NlU29ydChjaG9pY2UpIHtcbiAgICBpZiAoY2hvaWNlID09PSAnYnViYmxlJykgcmV0dXJuIGJ1YmJsZVNvcnQoc2l6ZSwgYXJyKTtcbiAgICBpZiAoY2hvaWNlID09PSAnc2VsZWN0aW9uJykgcmV0dXJuIHNlbGVjdGlvblNvcnQoc2l6ZSwgYXJyKTtcbiAgICBpZiAoY2hvaWNlID09PSAnaW5zZXJ0aW9uJykgcmV0dXJuIGluc2VydGlvblNvcnQoc2l6ZSwgYXJyKTtcbiAgICBpZiAoY2hvaWNlID09PSAnbWVyZ2Vzb3J0JykgcmV0dXJuIG1lcmdlU29ydChzaXplLCBhcnIpO1xuICAgIGlmIChjaG9pY2UgPT09ICdxdWlja3NvcnQnKSByZXR1cm4gcXVpY2tTb3J0KHNpemUsIGFycik7XG4gICAgaWYgKGNob2ljZSA9PT0gJ2hlYXBzb3J0JykgcmV0dXJuIGhlYXBTb3J0KHNpemUsIGFycik7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHNvcnQoZXZlbnQpIHtcbiAgICBjb25zdCBwcm9jZXNzID0gY2hvb3NlU29ydChldmVudC5zcmNFbGVtZW50LmlkKTtcbiAgICBmb3IgKGNvbnN0IFthLCBiLCBoMSwgaDIsIGFjdGlvbl0gb2YgcHJvY2Vzcykge1xuICAgICAgICBpZiAoYWN0aW9uKSB7XG4gICAgICAgICAgICBhd2FpdCBzbGVlcChkZWxheSk7XG4gICAgICAgICAgICBzd2FwKGEsIGIsIGgxLCBoMik7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuY29uc3Qgc29ydEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc29ydC1zZWxlY3Rpb24nKS5xdWVyeVNlbGVjdG9yQWxsKCcuc29ydC1idXR0b24nKTtcbnNvcnRCdXR0b25zLmZvckVhY2goYnV0dG9uID0+IGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNvcnQpKTtcblxuXG4vLyBkaXN0YW5jZSBtYWdpY1xuXG4vL3NvcnRCdXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcbi8vICAgIGJ1dHRvbi5zdHlsZS53aWR0aCA9IGAkeyhwYXJzZUludChidXR0b24ub2Zmc2V0V2lkdGgpICsgMjApfXB4YDtcbi8vICAgIGxldCByZWN0ID0gYnV0dG9uLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuLy8gICAgY29uc29sZS5sb2cocmVjdC5sZWZ0LCByZWN0LnJpZ2h0KTtcbi8vfSk7XG4vL2NvbnN0IGRpc3RhbmNlcyA9IFtdLy9cblxuLy9jb25zdCBidXR0b25zID0gQXJyYXkuZnJvbShzb3J0QnV0dG9ucyk7XG4vL2NvbnN0IGRvdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkb3QnKTsvL1xuXG4vLy8vIGluaXRpYWwgdHJhbnNmb3JtXG4vL2Rpc3RhbmNlcy5wdXNoKChidXR0b25zWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnJpZ2h0IC0gYnV0dG9uc1swXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0KSAvIDIpOy8vXG5cbi8vLy8gZGlzdGFuY2VzIGJldHdlZW4gZWFjaCBidXR0b25cbi8vYnV0dG9ucy5zbGljZSgxKS5yZWR1Y2UoKHByZXYsIGN1cnIpID0+IHtcbi8vICAgIGxldCByZWN0ID0gY3Vyci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xuLy8gICAgZGlzdGFuY2VzLnB1c2gocmVjdCAtIHByZXYpO1xuLy8gICAgcmV0dXJuIHJlY3Q7XG4vL30sIGRvdC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0KTsvL1xuLy9cblxuLy9mb3IgKGxldCBpID0gMDsgaSA8IGJ1dHRvbnMubGVuZ3RoOyBpKyspIHtcbi8vICAgIGJ1dHRvbnNbaV0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIChlKSA9PiB7XG4vLyAgICAgICAgZG90LnN0eWxlLmNzc1RleHQgKz0gYHRyYW5zZm9ybTogdHJhbnNsYXRlWCgke2Rpc3RhbmNlc1tpXX0pYDtcbi8vICAgIH0pO1xuLy99XG5cblxuXG5cblxuY29uc3QgcmFuZG9tQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JhbmRvbWlzZScpO1xucmFuZG9tQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmFuZG9taXNlKTtcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9