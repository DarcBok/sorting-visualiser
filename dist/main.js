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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 20px;\n    background: #272727;\n    font-family: 'Montserrat', sans-serif;\n    color: white;\n}\n\n#array-container {\n    display: flex;\n    width: 90vw;\n}\n\n#options {\n    display: flex;\n    justify-content: flex-start;\n    width: 100vw;\n    margin-top: 10px;\n    gap: 30px;\n}\n\n.array-elem {\n    border: 1px solid black;\n    background: white;\n}\n\n#left-buttons {\n    margin-top: 12px;\n}\n\n#sort-selection {\n    width: 58vw;\n    margin-left: 100px;\n    position: relative;\n}\n\n.sort-button {\n    color: #f6f4e6;\n    text-transform: uppercase;\n    transition: all 0.2s ease-in-out;\n    display: block;\n    float: left;\n    margin: 0;\n    padding: 0;\n    border: 0;\n    width: 16.66%;\n    text-align: center;\n}\n\n.sort-button:hover {\n    color: #fddb3a;\n    cursor: pointer;\n}\n\n.sort-button.active {\n    color: #fddb3a;\n}\n\n#sort-selection .sort-button:hover ~ #dot,\n#dot.active {\n    opacity: 1;\n    transition: all 0.2s ease-in-out;\n\n}\n\n#sort-selection .sort-button:nth-child(1):hover ~ #dot{\n    left: 8.33%;\n}\n\n#sort-selection .sort-button:nth-child(2):hover ~ #dot {\n    left: 25%;\n}\n\n#sort-selection .sort-button:nth-child(3):hover ~ #dot {\n    left: 41.66%;\n}\n\n#sort-selection .sort-button:nth-child(4):hover ~ #dot {\n    left: 58.33%;\n}\n\n#sort-selection .sort-button:nth-child(5):hover ~ #dot {\n    left: 75%;\n}\n\n#sort-selection .sort-button:nth-child(6):hover ~ #dot {\n    left: 91.66%;\n}\n\n#sort-selection:after {\n    content: \"\";\n    display: block;\n    position: absolute;\n    width: 100%;\n    height: 1px;\n    background: #fddb3a;\n    top: 30px;\n}\n\n\n#dot {\n    width: 6px;\n    height: 6px;\n    background: #fddb3a;\n    border-radius: 50%;\n    opacity: 0;\n    transition: all 0.2s ease-in-out;\n    position: absolute;\n    left: 0%;\n    top: 27px;\n}\n\n#sliders {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-end;\n    gap: 15px;\n}\n\n.slider-container {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n}\n\ninput[type=range] {\n    background: transparent;\n    -webkit-appearance: none;\n    height: 15px;\n}\n\ninput[type=range]:focus {\n    outline: none;\n}\n\ninput[type=range]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    border: 1px solid black;\n    background: #fddb3a;\n    height: 15px;\n    width: 15px;\n    border-radius: 50%;\n    cursor: pointer;\n    transform: translateY(-40%);\n}\n\ninput[type=range]::-webkit-slider-runnable-track {\n    width: 100%;\n    height: 2px;\n    background: rgba(255, 255, 255, 0.703);\n}\n\n#right-buttons {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    text-align: center;\n    margin-top: -5px;\n}\n\n#right-buttons button {\n    border: 2px solid rgba(255, 255, 255, 0.703);\n    color: white;\n    background: none;\n    font: inherit;\n    font-size: calc(100% - 1pt);\n    padding: 2px 12px;\n    border-radius: 10px;\n    transition: 0.25s;\n}\n\n#right-buttons button:hover {\n    box-shadow: inset 0 0 0 2em #fddc3ac5;\n    cursor: pointer;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;IACT,mBAAmB;IACnB,qCAAqC;IACrC,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,WAAW;AACf;;AAEA;IACI,aAAa;IACb,2BAA2B;IAC3B,YAAY;IACZ,gBAAgB;IAChB,SAAS;AACb;;AAEA;IACI,uBAAuB;IACvB,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,cAAc;IACd,yBAAyB;IACzB,gCAAgC;IAChC,cAAc;IACd,WAAW;IACX,SAAS;IACT,UAAU;IACV,SAAS;IACT,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,cAAc;IACd,eAAe;AACnB;;AAEA;IACI,cAAc;AAClB;;AAEA;;IAEI,UAAU;IACV,gCAAgC;;AAEpC;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,SAAS;AACb;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,SAAS;AACb;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,cAAc;IACd,kBAAkB;IAClB,WAAW;IACX,WAAW;IACX,mBAAmB;IACnB,SAAS;AACb;;;AAGA;IACI,UAAU;IACV,WAAW;IACX,mBAAmB;IACnB,kBAAkB;IAClB,UAAU;IACV,gCAAgC;IAChC,kBAAkB;IAClB,QAAQ;IACR,SAAS;AACb;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,qBAAqB;IACrB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,uBAAuB;IACvB,wBAAwB;IACxB,YAAY;AAChB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,wBAAwB;IACxB,uBAAuB;IACvB,mBAAmB;IACnB,YAAY;IACZ,WAAW;IACX,kBAAkB;IAClB,eAAe;IACf,2BAA2B;AAC/B;;AAEA;IACI,WAAW;IACX,WAAW;IACX,sCAAsC;AAC1C;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,4CAA4C;IAC5C,YAAY;IACZ,gBAAgB;IAChB,aAAa;IACb,2BAA2B;IAC3B,iBAAiB;IACjB,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA;IACI,qCAAqC;IACrC,eAAe;AACnB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');\n\nbody {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 20px;\n    background: #272727;\n    font-family: 'Montserrat', sans-serif;\n    color: white;\n}\n\n#array-container {\n    display: flex;\n    width: 90vw;\n}\n\n#options {\n    display: flex;\n    justify-content: flex-start;\n    width: 100vw;\n    margin-top: 10px;\n    gap: 30px;\n}\n\n.array-elem {\n    border: 1px solid black;\n    background: white;\n}\n\n#left-buttons {\n    margin-top: 12px;\n}\n\n#sort-selection {\n    width: 58vw;\n    margin-left: 100px;\n    position: relative;\n}\n\n.sort-button {\n    color: #f6f4e6;\n    text-transform: uppercase;\n    transition: all 0.2s ease-in-out;\n    display: block;\n    float: left;\n    margin: 0;\n    padding: 0;\n    border: 0;\n    width: 16.66%;\n    text-align: center;\n}\n\n.sort-button:hover {\n    color: #fddb3a;\n    cursor: pointer;\n}\n\n.sort-button.active {\n    color: #fddb3a;\n}\n\n#sort-selection .sort-button:hover ~ #dot,\n#dot.active {\n    opacity: 1;\n    transition: all 0.2s ease-in-out;\n\n}\n\n#sort-selection .sort-button:nth-child(1):hover ~ #dot{\n    left: 8.33%;\n}\n\n#sort-selection .sort-button:nth-child(2):hover ~ #dot {\n    left: 25%;\n}\n\n#sort-selection .sort-button:nth-child(3):hover ~ #dot {\n    left: 41.66%;\n}\n\n#sort-selection .sort-button:nth-child(4):hover ~ #dot {\n    left: 58.33%;\n}\n\n#sort-selection .sort-button:nth-child(5):hover ~ #dot {\n    left: 75%;\n}\n\n#sort-selection .sort-button:nth-child(6):hover ~ #dot {\n    left: 91.66%;\n}\n\n#sort-selection:after {\n    content: \"\";\n    display: block;\n    position: absolute;\n    width: 100%;\n    height: 1px;\n    background: #fddb3a;\n    top: 30px;\n}\n\n\n#dot {\n    width: 6px;\n    height: 6px;\n    background: #fddb3a;\n    border-radius: 50%;\n    opacity: 0;\n    transition: all 0.2s ease-in-out;\n    position: absolute;\n    left: 0%;\n    top: 27px;\n}\n\n#sliders {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-end;\n    gap: 15px;\n}\n\n.slider-container {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n}\n\ninput[type=range] {\n    background: transparent;\n    -webkit-appearance: none;\n    height: 15px;\n}\n\ninput[type=range]:focus {\n    outline: none;\n}\n\ninput[type=range]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    border: 1px solid black;\n    background: #fddb3a;\n    height: 15px;\n    width: 15px;\n    border-radius: 50%;\n    cursor: pointer;\n    transform: translateY(-40%);\n}\n\ninput[type=range]::-webkit-slider-runnable-track {\n    width: 100%;\n    height: 2px;\n    background: rgba(255, 255, 255, 0.703);\n}\n\n#right-buttons {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    text-align: center;\n    margin-top: -5px;\n}\n\n#right-buttons button {\n    border: 2px solid rgba(255, 255, 255, 0.703);\n    color: white;\n    background: none;\n    font: inherit;\n    font-size: calc(100% - 1pt);\n    padding: 2px 12px;\n    border-radius: 10px;\n    transition: 0.25s;\n}\n\n#right-buttons button:hover {\n    box-shadow: inset 0 0 0 2em #fddc3ac5;\n    cursor: pointer;\n}"],"sourceRoot":""}]);
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

let arr = []; // container of bar heights
let choice = ""; // choice of sort
let size = INITIAL_SIZE;
let delay = INITIAL_DELAY;
const positions = {
    bubble: 8.33,
    selection: 25,
    insertion: 41.66,
    quicksort: 58.33,
    mergesort: 75,
    heapsort: 91.66
}; // positions of dots

const arrayContainer = document.querySelector('#array-container');
const dot = document.querySelector('#dot');

const randHeight = () => Math.floor(Math.random() * (MAX_HEIGHT - MIN_HEIGHT)) + MIN_HEIGHT;
const sleep = (delay) => new Promise(resolve => setTimeout(resolve, delay));

function computeWidth() {
    return 100/size;
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
        element.style['width'] = `${computeWidth()}%`;
        arrayContainer.appendChild(element);
    }
}
randomise();

// a and b are indices of arr and data-index
// swap places in arr and swap places on DOM
function swap(a, b, h1, h2) {
    arr[a] = h1;
    arr[b] = h2;

    const item1 = document.querySelector(`[data-index='${a}']`);
    const item2 = document.querySelector(`[data-index='${b}']`);

    item1.style['height'] = `${h1}vh`
    item2.style['height'] = `${h2}vh`;
}

function changeChoice(e) {
    const chosenButton = e.srcElement;
    choice = chosenButton.id;

    // remove previous active classes
    sortButtons.forEach(button => button.classList.remove('active'));

    // activate dot and position
    chosenButton.classList.add('active');
    dot.classList.add('active');
    dot.style.left = `${positions[choice]}%`;
}

function chooseSort() {
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
sortButtons.forEach(button => button.addEventListener('click', changeChoice));

const sortButton = document.querySelector('#sort-button');
sortButton.addEventListener('click', sort);


const randomButton = document.querySelector('#randomise');
randomButton.addEventListener('click', randomise);



// TODO
// implement swapping visualisation
// flourish after a sort ends?
// implement swap/pause
// clean up style, refactor
// build HTML?
// rework webpack to build
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c291cmNlcyI6WyJ3ZWJwYWNrOi8vc29ydGluZy12aXN1YWxpc2VyLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9zb3J0aW5nLXZpc3VhbGlzZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3NvcnRpbmctdmlzdWFsaXNlci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3NvcnRpbmctdmlzdWFsaXNlci8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9zb3J0aW5nLXZpc3VhbGlzZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vc29ydGluZy12aXN1YWxpc2VyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9zb3J0aW5nLXZpc3VhbGlzZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vc29ydGluZy12aXN1YWxpc2VyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3NvcnRpbmctdmlzdWFsaXNlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3NvcnRpbmctdmlzdWFsaXNlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3NvcnRpbmctdmlzdWFsaXNlci8uL3NyYy9hbGdvcml0aG1zL2J1YmJsZS5qcyIsIndlYnBhY2s6Ly9zb3J0aW5nLXZpc3VhbGlzZXIvLi9zcmMvYWxnb3JpdGhtcy9oZWFwc29ydC5qcyIsIndlYnBhY2s6Ly9zb3J0aW5nLXZpc3VhbGlzZXIvLi9zcmMvYWxnb3JpdGhtcy9pbnNlcnRpb24uanMiLCJ3ZWJwYWNrOi8vc29ydGluZy12aXN1YWxpc2VyLy4vc3JjL2FsZ29yaXRobXMvbWVyZ2Vzb3J0LmpzIiwid2VicGFjazovL3NvcnRpbmctdmlzdWFsaXNlci8uL3NyYy9hbGdvcml0aG1zL3F1aWNrc29ydC5qcyIsIndlYnBhY2s6Ly9zb3J0aW5nLXZpc3VhbGlzZXIvLi9zcmMvYWxnb3JpdGhtcy9zZWxlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vc29ydGluZy12aXN1YWxpc2VyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NvcnRpbmctdmlzdWFsaXNlci93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9zb3J0aW5nLXZpc3VhbGlzZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3NvcnRpbmctdmlzdWFsaXNlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3NvcnRpbmctdmlzdWFsaXNlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3NvcnRpbmctdmlzdWFsaXNlci93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vc29ydGluZy12aXN1YWxpc2VyLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjMjcyNzI3O1xcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbiNhcnJheS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogOTB2dztcXG59XFxuXFxuI29wdGlvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgZ2FwOiAzMHB4O1xcbn1cXG5cXG4uYXJyYXktZWxlbSB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG59XFxuXFxuI2xlZnQtYnV0dG9ucyB7XFxuICAgIG1hcmdpbi10b3A6IDEycHg7XFxufVxcblxcbiNzb3J0LXNlbGVjdGlvbiB7XFxuICAgIHdpZHRoOiA1OHZ3O1xcbiAgICBtYXJnaW4tbGVmdDogMTAwcHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnNvcnQtYnV0dG9uIHtcXG4gICAgY29sb3I6ICNmNmY0ZTY7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICB3aWR0aDogMTYuNjYlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5zb3J0LWJ1dHRvbjpob3ZlciB7XFxuICAgIGNvbG9yOiAjZmRkYjNhO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zb3J0LWJ1dHRvbi5hY3RpdmUge1xcbiAgICBjb2xvcjogI2ZkZGIzYTtcXG59XFxuXFxuI3NvcnQtc2VsZWN0aW9uIC5zb3J0LWJ1dHRvbjpob3ZlciB+ICNkb3QsXFxuI2RvdC5hY3RpdmUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcXG5cXG59XFxuXFxuI3NvcnQtc2VsZWN0aW9uIC5zb3J0LWJ1dHRvbjpudGgtY2hpbGQoMSk6aG92ZXIgfiAjZG90e1xcbiAgICBsZWZ0OiA4LjMzJTtcXG59XFxuXFxuI3NvcnQtc2VsZWN0aW9uIC5zb3J0LWJ1dHRvbjpudGgtY2hpbGQoMik6aG92ZXIgfiAjZG90IHtcXG4gICAgbGVmdDogMjUlO1xcbn1cXG5cXG4jc29ydC1zZWxlY3Rpb24gLnNvcnQtYnV0dG9uOm50aC1jaGlsZCgzKTpob3ZlciB+ICNkb3Qge1xcbiAgICBsZWZ0OiA0MS42NiU7XFxufVxcblxcbiNzb3J0LXNlbGVjdGlvbiAuc29ydC1idXR0b246bnRoLWNoaWxkKDQpOmhvdmVyIH4gI2RvdCB7XFxuICAgIGxlZnQ6IDU4LjMzJTtcXG59XFxuXFxuI3NvcnQtc2VsZWN0aW9uIC5zb3J0LWJ1dHRvbjpudGgtY2hpbGQoNSk6aG92ZXIgfiAjZG90IHtcXG4gICAgbGVmdDogNzUlO1xcbn1cXG5cXG4jc29ydC1zZWxlY3Rpb24gLnNvcnQtYnV0dG9uOm50aC1jaGlsZCg2KTpob3ZlciB+ICNkb3Qge1xcbiAgICBsZWZ0OiA5MS42NiU7XFxufVxcblxcbiNzb3J0LXNlbGVjdGlvbjphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxcHg7XFxuICAgIGJhY2tncm91bmQ6ICNmZGRiM2E7XFxuICAgIHRvcDogMzBweDtcXG59XFxuXFxuXFxuI2RvdCB7XFxuICAgIHdpZHRoOiA2cHg7XFxuICAgIGhlaWdodDogNnB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjZmRkYjNhO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDAlO1xcbiAgICB0b3A6IDI3cHg7XFxufVxcblxcbiNzbGlkZXJzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgICBnYXA6IDE1cHg7XFxufVxcblxcbi5zbGlkZXItY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG5pbnB1dFt0eXBlPXJhbmdlXSB7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGhlaWdodDogMTVweDtcXG59XFxuXFxuaW5wdXRbdHlwZT1yYW5nZV06Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG5pbnB1dFt0eXBlPXJhbmdlXTo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kOiAjZmRkYjNhO1xcbiAgICBoZWlnaHQ6IDE1cHg7XFxuICAgIHdpZHRoOiAxNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00MCUpO1xcbn1cXG5cXG5pbnB1dFt0eXBlPXJhbmdlXTo6LXdlYmtpdC1zbGlkZXItcnVubmFibGUtdHJhY2sge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAycHg7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43MDMpO1xcbn1cXG5cXG4jcmlnaHQtYnV0dG9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAtNXB4O1xcbn1cXG5cXG4jcmlnaHQtYnV0dG9ucyBidXR0b24ge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzAzKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBmb250OiBpbmhlcml0O1xcbiAgICBmb250LXNpemU6IGNhbGMoMTAwJSAtIDFwdCk7XFxuICAgIHBhZGRpbmc6IDJweCAxMnB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICB0cmFuc2l0aW9uOiAwLjI1cztcXG59XFxuXFxuI3JpZ2h0LWJ1dHRvbnMgYnV0dG9uOmhvdmVyIHtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMmVtICNmZGRjM2FjNTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsU0FBUztJQUNULG1CQUFtQjtJQUNuQixxQ0FBcUM7SUFDckMsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksY0FBYztJQUNkLHlCQUF5QjtJQUN6QixnQ0FBZ0M7SUFDaEMsY0FBYztJQUNkLFdBQVc7SUFDWCxTQUFTO0lBQ1QsVUFBVTtJQUNWLFNBQVM7SUFDVCxhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBOztJQUVJLFVBQVU7SUFDVixnQ0FBZ0M7O0FBRXBDOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksU0FBUztBQUNiOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsU0FBUztBQUNiOzs7QUFHQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsZ0NBQWdDO0lBQ2hDLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsd0JBQXdCO0lBQ3hCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLDRDQUE0QztJQUM1QyxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxxQ0FBcUM7SUFDckMsZUFBZTtBQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb250c2VycmF0JmRpc3BsYXk9c3dhcCcpO1xcblxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGJhY2tncm91bmQ6ICMyNzI3Mjc7XFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuI2FycmF5LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiA5MHZ3O1xcbn1cXG5cXG4jb3B0aW9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBnYXA6IDMwcHg7XFxufVxcblxcbi5hcnJheS1lbGVtIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbn1cXG5cXG4jbGVmdC1idXR0b25zIHtcXG4gICAgbWFyZ2luLXRvcDogMTJweDtcXG59XFxuXFxuI3NvcnQtc2VsZWN0aW9uIHtcXG4gICAgd2lkdGg6IDU4dnc7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMDBweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uc29ydC1idXR0b24ge1xcbiAgICBjb2xvcjogI2Y2ZjRlNjtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBmbG9hdDogbGVmdDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIHdpZHRoOiAxNi42NiU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnNvcnQtYnV0dG9uOmhvdmVyIHtcXG4gICAgY29sb3I6ICNmZGRiM2E7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnNvcnQtYnV0dG9uLmFjdGl2ZSB7XFxuICAgIGNvbG9yOiAjZmRkYjNhO1xcbn1cXG5cXG4jc29ydC1zZWxlY3Rpb24gLnNvcnQtYnV0dG9uOmhvdmVyIH4gI2RvdCxcXG4jZG90LmFjdGl2ZSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xcblxcbn1cXG5cXG4jc29ydC1zZWxlY3Rpb24gLnNvcnQtYnV0dG9uOm50aC1jaGlsZCgxKTpob3ZlciB+ICNkb3R7XFxuICAgIGxlZnQ6IDguMzMlO1xcbn1cXG5cXG4jc29ydC1zZWxlY3Rpb24gLnNvcnQtYnV0dG9uOm50aC1jaGlsZCgyKTpob3ZlciB+ICNkb3Qge1xcbiAgICBsZWZ0OiAyNSU7XFxufVxcblxcbiNzb3J0LXNlbGVjdGlvbiAuc29ydC1idXR0b246bnRoLWNoaWxkKDMpOmhvdmVyIH4gI2RvdCB7XFxuICAgIGxlZnQ6IDQxLjY2JTtcXG59XFxuXFxuI3NvcnQtc2VsZWN0aW9uIC5zb3J0LWJ1dHRvbjpudGgtY2hpbGQoNCk6aG92ZXIgfiAjZG90IHtcXG4gICAgbGVmdDogNTguMzMlO1xcbn1cXG5cXG4jc29ydC1zZWxlY3Rpb24gLnNvcnQtYnV0dG9uOm50aC1jaGlsZCg1KTpob3ZlciB+ICNkb3Qge1xcbiAgICBsZWZ0OiA3NSU7XFxufVxcblxcbiNzb3J0LXNlbGVjdGlvbiAuc29ydC1idXR0b246bnRoLWNoaWxkKDYpOmhvdmVyIH4gI2RvdCB7XFxuICAgIGxlZnQ6IDkxLjY2JTtcXG59XFxuXFxuI3NvcnQtc2VsZWN0aW9uOmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDFweDtcXG4gICAgYmFja2dyb3VuZDogI2ZkZGIzYTtcXG4gICAgdG9wOiAzMHB4O1xcbn1cXG5cXG5cXG4jZG90IHtcXG4gICAgd2lkdGg6IDZweDtcXG4gICAgaGVpZ2h0OiA2cHg7XFxuICAgIGJhY2tncm91bmQ6ICNmZGRiM2E7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMCU7XFxuICAgIHRvcDogMjdweDtcXG59XFxuXFxuI3NsaWRlcnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICAgIGdhcDogMTVweDtcXG59XFxuXFxuLnNsaWRlci1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbmlucHV0W3R5cGU9cmFuZ2VdIHtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgaGVpZ2h0OiAxNXB4O1xcbn1cXG5cXG5pbnB1dFt0eXBlPXJhbmdlXTpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbmlucHV0W3R5cGU9cmFuZ2VdOjotd2Via2l0LXNsaWRlci10aHVtYiB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJhY2tncm91bmQ6ICNmZGRiM2E7XFxuICAgIGhlaWdodDogMTVweDtcXG4gICAgd2lkdGg6IDE1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTQwJSk7XFxufVxcblxcbmlucHV0W3R5cGU9cmFuZ2VdOjotd2Via2l0LXNsaWRlci1ydW5uYWJsZS10cmFjayB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDJweDtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcwMyk7XFxufVxcblxcbiNyaWdodC1idXR0b25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IC01cHg7XFxufVxcblxcbiNyaWdodC1idXR0b25zIGJ1dHRvbiB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43MDMpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGZvbnQ6IGluaGVyaXQ7XFxuICAgIGZvbnQtc2l6ZTogY2FsYygxMDAlIC0gMXB0KTtcXG4gICAgcGFkZGluZzogMnB4IDEycHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHRyYW5zaXRpb246IDAuMjVzO1xcbn1cXG5cXG4jcmlnaHQtYnV0dG9ucyBidXR0b246aG92ZXIge1xcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAyZW0gI2ZkZGMzYWM1O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IFNXQVAgPSAxO1xuY29uc3QgQ09NUCA9IDA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiAoc2l6ZSwgYXJyKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplLTE7IGkrKykge1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNpemUtaS0xOyBqKyspIHtcbiAgICAgICAgICAgIGlmIChhcnJbal0gPiBhcnJbaisxXSkgeWllbGQgW2osIGorMSwgYXJyW2orMV0sIGFycltqXSwgU1dBUF07XG4gICAgICAgICAgICBlbHNlIHlpZWxkIFtqLCBqKzEsIGFycltqKzFdLCBhcnJbal0sIENPTVBdO1xuICAgICAgICB9XG4gICAgfVxufSIsImNvbnN0IFNXQVAgPSAxO1xuY29uc3QgQ09NUCA9IDA7XG5cbi8vIGFycmF5IHJlcHJlc2VudGF0aW9uIG9mIGhlYXAgb2Ygc2l6ZSBuIHN0YXJ0aW5nIGF0IGluZGV4IDBcbi8vIGkgcmVwcmVzZW50cyBzdWItaGVhcCBzdGFydGluZyBpbmRleFxuZnVuY3Rpb24qIGhlYXBpZnkoYXJyLCBuLCBpKSB7XG4gICAgbGV0IGxhcmdlc3QgPSBpO1xuICAgIGxldCBsID0gMiAqIGkgKyAxLCByID0gMiAqIGkgKyAyO1xuXG4gICAgLy8gY2hlY2sgaWYgbGVmdCBhbmQgcmlnaHQgY2hpbGRyZW4gYXJlIGxhcmdlclxuICAgIGlmIChsIDwgbiAmJiBhcnJbbGFyZ2VzdF0gPCBhcnJbbF0pIHtcbiAgICAgICAgbGFyZ2VzdCA9IGw7XG4gICAgfVxuICAgIGlmIChyIDwgbiAmJiBhcnJbbGFyZ2VzdF0gPCBhcnJbcl0pIHtcbiAgICAgICAgbGFyZ2VzdCA9IHI7XG4gICAgfVxuXG4gICAgLy8gY2hhbmdlIHJvb3QgYW5kIHJlY3Vyc2l2ZWx5IGhlYXBpZnlcbiAgICBpZiAobGFyZ2VzdCAhPT0gaSkge1xuICAgICAgICB5aWVsZCBbaSwgbGFyZ2VzdCwgYXJyW2xhcmdlc3RdLCBhcnJbaV0sIFNXQVBdO1xuICAgICAgICB5aWVsZCAqaGVhcGlmeShhcnIsIG4sIGxhcmdlc3QpO1xuICAgIH0gICBcbn1cblxuZnVuY3Rpb24qIGhlYXBTb3J0SGVscGVyKGFyciwgc2l6ZSkge1xuICAgIC8vIGhlYXBpZnkgYXJyYXlcbiAgICBmb3IgKGxldCBpID0gTWF0aC5mbG9vcihzaXplIC8gMikgLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICB5aWVsZCAqaGVhcGlmeShhcnIsIHNpemUsIGkpO1xuICAgIH1cblxuICAgIC8vIGV4dHJhY3QgZWxlbWVudHMgZnJvbSBoZWFwIGFuZCBoZWFwaWZ5XG4gICAgZm9yIChsZXQgaSA9IHNpemUgLSAxOyBpID4gMDsgaS0tKSB7XG4gICAgICAgIHlpZWxkIFswLCBpLCBhcnJbaV0sIGFyclswXSwgU1dBUF07XG4gICAgICAgIHlpZWxkICpoZWFwaWZ5KGFyciwgaSwgMCk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogKHNpemUsIGFycikge1xuICAgIHlpZWxkICpoZWFwU29ydEhlbHBlcihhcnIsIHNpemUpO1xufSIsImNvbnN0IFNXQVAgPSAxO1xuY29uc3QgQ09NUCA9IDA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiAoc2l6ZSwgYXJyKSB7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBzaXplOyBpKyspIHtcbiAgICAgICAgY29uc3QgbmV4dCA9IGFycltpXTtcbiAgICAgICAgbGV0IGogPSBpLTE7XG4gICAgICAgIHdoaWxlIChqID49IDAgJiYgbmV4dCA8IGFycltqXSkge1xuICAgICAgICAgICAgeWllbGQgW2orMSwgaiwgYXJyW2pdLCBhcnJbaisxXSwgU1dBUF07XG4gICAgICAgICAgICBqLS07XG4gICAgICAgIH1cbiAgICB9XG59IiwiY29uc3QgU1dBUCA9IDE7XG5jb25zdCBDT01QID0gMDtcblxuZnVuY3Rpb24qIG1lcmdlKGFyciwgbCwgbSwgcikge1xuICAgIGNvbnN0IEwgPSBhcnIuc2xpY2UobCwgbSArIDEpO1xuICAgIGNvbnN0IFIgPSBhcnIuc2xpY2UobSArIDEsIHIgKyAxKTtcbiAgICBjb25zdCBuMSA9IEwubGVuZ3RoLCBuMiA9IFIubGVuZ3RoO1xuXG4gICAgbGV0IGkgPSAwLCBqID0gMCwgayA9IGw7XG5cbiAgICAvLyBtZXJnZSBub24tZW1wdHkgc3ViYXJyYXlzXG4gICAgd2hpbGUgKGkgPCBuMSAmJiBqIDwgbjIpIHtcbiAgICAgICAgaWYgKExbaV0gPD0gUltqXSkge1xuICAgICAgICAgICAgeWllbGQgW2ssIGssIExbaV0sIExbaV0sIFNXQVBdOyBcbiAgICAgICAgICAgIGsrKywgaSsrO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgeWllbGQgW2ssIGssIFJbal0sIFJbal0sIFNXQVBdO1xuICAgICAgICAgICAgaysrLCBqKys7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBmaWxsIHVwIHJlc3QgaWYgb25lIGFycmF5IGlzIHN0aWxsIG5vbi1lbXB0eVxuICAgIHdoaWxlIChpIDwgbjEpIHtcbiAgICAgICAgeWllbGQgW2ssIGssIExbaV0sIExbaV0sIFNXQVBdOyBcbiAgICAgICAgaysrLCBpKys7XG4gICAgfVxuICAgIHdoaWxlIChqIDwgbjIpIHtcbiAgICAgICAgeWllbGQgW2ssIGssIFJbal0sIFJbal0sIFNXQVBdOyBcbiAgICAgICAgaysrLCBqKys7XG4gICAgfVxufVxuXG5mdW5jdGlvbiogbWVyZ2VTb3J0SGVscGVyKGFyciwgbCwgcikge1xuICAgIGlmIChsID49IHIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgbWlkID0gTWF0aC5mbG9vcigobCArIHIpIC8gMik7XG4gICAgeWllbGQgKm1lcmdlU29ydEhlbHBlcihhcnIsIGwsIG1pZCk7XG4gICAgeWllbGQgKm1lcmdlU29ydEhlbHBlcihhcnIsIG1pZCArIDEsIHIpO1xuICAgIHlpZWxkICptZXJnZShhcnIsIGwsIG1pZCwgcik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiAoc2l6ZSwgYXJyKSB7XG4gICAgeWllbGQgKm1lcmdlU29ydEhlbHBlcihhcnIsIDAsIHNpemUgLSAxKTtcbn0iLCJjb25zdCBTV0FQID0gMTtcbmNvbnN0IENPTVAgPSAwO1xuXG4vLyBOYWl2ZSBxdWlja3NvcnRcblxuZnVuY3Rpb24qIHBhcnRpdGlvbihhcnIsIGwsIGgsIHBpdm90KSB7XG4gICAgbGV0IGkgPSBsICsgMSwgaiA9IGg7XG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgd2hpbGUoYXJyW2ldIDw9IHBpdm90ICYmIGkgPCBqKSBpKys7XG4gICAgICAgIHdoaWxlIChhcnJbal0gPj0gcGl2b3QgJiYgaSA8IGopIGotLTtcbiAgICAgICAgaWYgKGkgPT09IGopIGJyZWFrO1xuICAgICAgICB5aWVsZCBbaSwgaiwgYXJyW2pdLCBhcnJbaV0sIFNXQVBdO1xuICAgIH1cbn1cblxuZnVuY3Rpb24qIHF1aWNrU29ydEhlbHBlcihhcnIsIGwsIGgpIHtcbiAgICBpZiAoaCA8PSBsKSByZXR1cm47XG4gICAgbGV0IHBpdm90ID0gYXJyW2xdO1xuICAgIHlpZWxkKiBwYXJ0aXRpb24oYXJyLCBsLCBoLCBwaXZvdCk7XG5cbiAgICAvLyBmaXggcGl2b3QgZWxlbWVudCBwb3NpdGlvblxuICAgIGxldCBpID0gbCArIDE7XG4gICAgd2hpbGUgKGFycltpXSA8PSBwaXZvdCAmJiBpIDwgaCkge1xuICAgICAgICBpKys7XG4gICAgfVxuICAgIGlmIChhcnJbaV0gPiBwaXZvdCkgaS0tO1xuICAgIHlpZWxkIFtsLCBpLCBhcnJbaV0sIHBpdm90LCBTV0FQXTtcblxuICAgIC8vIHJlY3Vyc2l2ZWx5IHNvcnQgbGVmdCBhbmQgcmlnaHRcbiAgICB5aWVsZCAqcXVpY2tTb3J0SGVscGVyKGFyciwgbCwgaS0xKTtcbiAgICB5aWVsZCAqcXVpY2tTb3J0SGVscGVyKGFyciwgaSsxLCBoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIChzaXplLCBhcnIpIHtcbiAgICB5aWVsZCAqcXVpY2tTb3J0SGVscGVyKGFyciwgMCwgc2l6ZSAtIDEpO1xufVxuIiwiY29uc3QgU1dBUCA9IDE7XG5jb25zdCBDT01QID0gMDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIChzaXplLCBhcnIpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkrKykge1xuICAgICAgICBsZXQgbWluX2lkeCA9IGk7XG4gICAgICAgIGZvciAobGV0IGogPSBpKzE7IGogPCBzaXplOyBqKyspIHtcbiAgICAgICAgICAgIHlpZWxkIFtpLCBqLCBhcnJbal0sIGFycltpXSwgQ09NUF07XG4gICAgICAgICAgICBpZiAoYXJyW21pbl9pZHhdID4gYXJyW2pdKSB7XG4gICAgICAgICAgICAgICAgbWluX2lkeCA9IGo7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgeWllbGQgW2ksIG1pbl9pZHgsIGFyclttaW5faWR4XSwgYXJyW2ldLCBTV0FQXTtcbiAgICB9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgYnViYmxlU29ydCBmcm9tICcuL2FsZ29yaXRobXMvYnViYmxlLmpzJztcbmltcG9ydCBzZWxlY3Rpb25Tb3J0IGZyb20gJy4vYWxnb3JpdGhtcy9zZWxlY3Rpb24uanMnO1xuaW1wb3J0IGluc2VydGlvblNvcnQgZnJvbSAnLi9hbGdvcml0aG1zL2luc2VydGlvbi5qcyc7XG5pbXBvcnQgbWVyZ2VTb3J0IGZyb20gJy4vYWxnb3JpdGhtcy9tZXJnZXNvcnQuanMnXG5pbXBvcnQgcXVpY2tTb3J0IGZyb20gJy4vYWxnb3JpdGhtcy9xdWlja3NvcnQuanMnO1xuaW1wb3J0IGhlYXBTb3J0IGZyb20gJy4vYWxnb3JpdGhtcy9oZWFwc29ydC5qcyc7XG5cbmNvbnN0IE1JTl9IRUlHSFQgPSA3NTtcbmNvbnN0IE1BWF9IRUlHSFQgPSA1O1xuY29uc3QgSU5JVElBTF9TSVpFID0gNjQ7XG5jb25zdCBJTklUSUFMX0RFTEFZID0gMTA7XG5cbmxldCBhcnIgPSBbXTsgLy8gY29udGFpbmVyIG9mIGJhciBoZWlnaHRzXG5sZXQgY2hvaWNlID0gXCJcIjsgLy8gY2hvaWNlIG9mIHNvcnRcbmxldCBzaXplID0gSU5JVElBTF9TSVpFO1xubGV0IGRlbGF5ID0gSU5JVElBTF9ERUxBWTtcbmNvbnN0IHBvc2l0aW9ucyA9IHtcbiAgICBidWJibGU6IDguMzMsXG4gICAgc2VsZWN0aW9uOiAyNSxcbiAgICBpbnNlcnRpb246IDQxLjY2LFxuICAgIHF1aWNrc29ydDogNTguMzMsXG4gICAgbWVyZ2Vzb3J0OiA3NSxcbiAgICBoZWFwc29ydDogOTEuNjZcbn07IC8vIHBvc2l0aW9ucyBvZiBkb3RzXG5cbmNvbnN0IGFycmF5Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FycmF5LWNvbnRhaW5lcicpO1xuY29uc3QgZG90ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RvdCcpO1xuXG5jb25zdCByYW5kSGVpZ2h0ID0gKCkgPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKE1BWF9IRUlHSFQgLSBNSU5fSEVJR0hUKSkgKyBNSU5fSEVJR0hUO1xuY29uc3Qgc2xlZXAgPSAoZGVsYXkpID0+IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCBkZWxheSkpO1xuXG5mdW5jdGlvbiBjb21wdXRlV2lkdGgoKSB7XG4gICAgcmV0dXJuIDEwMC9zaXplO1xufVxuXG5jb25zdCBzaXplU2xpZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NpemUtc2xpZGVyJyk7XG5zaXplU2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGUpID0+IHtcbiAgICBzaXplID0gZS5zcmNFbGVtZW50LnZhbHVlO1xuICAgIHJhbmRvbWlzZSgpO1xufSk7XG5cbmNvbnN0IHNwZWVkU2xpZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NwZWVkLXNsaWRlcicpO1xuc3BlZWRTbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZSkgPT4ge1xuICAgIGRlbGF5ID0gMTAwMCAvIChlLnNyY0VsZW1lbnQudmFsdWUgKiBlLnNyY0VsZW1lbnQudmFsdWUpO1xufSk7XG5cbi8vIFJhbmRvbWlzZXMgYXJyYXkgYW5kIGRpc3BsYXlzIG9uIHBhZ2VcbmZ1bmN0aW9uIHJhbmRvbWlzZSgpIHtcbiAgICBhcnIgPSBbXTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXJyYXktY29udGFpbmVyJykuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkrKykge1xuICAgICAgICBsZXQgaCA9IHJhbmRIZWlnaHQoKTtcbiAgICAgICAgYXJyLnB1c2goaCk7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhcnJheS1lbGVtJyk7XG4gICAgICAgIGVsZW1lbnQuZGF0YXNldC5pbmRleCA9IGlcbiAgICAgICAgZWxlbWVudC5zdHlsZVsnaGVpZ2h0J10gPSBgJHtofXZoYDtcbiAgICAgICAgZWxlbWVudC5zdHlsZVsnd2lkdGgnXSA9IGAke2NvbXB1dGVXaWR0aCgpfSVgO1xuICAgICAgICBhcnJheUNvbnRhaW5lci5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICB9XG59XG5yYW5kb21pc2UoKTtcblxuLy8gYSBhbmQgYiBhcmUgaW5kaWNlcyBvZiBhcnIgYW5kIGRhdGEtaW5kZXhcbi8vIHN3YXAgcGxhY2VzIGluIGFyciBhbmQgc3dhcCBwbGFjZXMgb24gRE9NXG5mdW5jdGlvbiBzd2FwKGEsIGIsIGgxLCBoMikge1xuICAgIGFyclthXSA9IGgxO1xuICAgIGFycltiXSA9IGgyO1xuXG4gICAgY29uc3QgaXRlbTEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pbmRleD0nJHthfSddYCk7XG4gICAgY29uc3QgaXRlbTIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pbmRleD0nJHtifSddYCk7XG5cbiAgICBpdGVtMS5zdHlsZVsnaGVpZ2h0J10gPSBgJHtoMX12aGBcbiAgICBpdGVtMi5zdHlsZVsnaGVpZ2h0J10gPSBgJHtoMn12aGA7XG59XG5cbmZ1bmN0aW9uIGNoYW5nZUNob2ljZShlKSB7XG4gICAgY29uc3QgY2hvc2VuQnV0dG9uID0gZS5zcmNFbGVtZW50O1xuICAgIGNob2ljZSA9IGNob3NlbkJ1dHRvbi5pZDtcblxuICAgIC8vIHJlbW92ZSBwcmV2aW91cyBhY3RpdmUgY2xhc3Nlc1xuICAgIHNvcnRCdXR0b25zLmZvckVhY2goYnV0dG9uID0+IGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSk7XG5cbiAgICAvLyBhY3RpdmF0ZSBkb3QgYW5kIHBvc2l0aW9uXG4gICAgY2hvc2VuQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIGRvdC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICBkb3Quc3R5bGUubGVmdCA9IGAke3Bvc2l0aW9uc1tjaG9pY2VdfSVgO1xufVxuXG5mdW5jdGlvbiBjaG9vc2VTb3J0KCkge1xuICAgIGlmIChjaG9pY2UgPT09ICdidWJibGUnKSByZXR1cm4gYnViYmxlU29ydChzaXplLCBhcnIpO1xuICAgIGlmIChjaG9pY2UgPT09ICdzZWxlY3Rpb24nKSByZXR1cm4gc2VsZWN0aW9uU29ydChzaXplLCBhcnIpO1xuICAgIGlmIChjaG9pY2UgPT09ICdpbnNlcnRpb24nKSByZXR1cm4gaW5zZXJ0aW9uU29ydChzaXplLCBhcnIpO1xuICAgIGlmIChjaG9pY2UgPT09ICdtZXJnZXNvcnQnKSByZXR1cm4gbWVyZ2VTb3J0KHNpemUsIGFycik7XG4gICAgaWYgKGNob2ljZSA9PT0gJ3F1aWNrc29ydCcpIHJldHVybiBxdWlja1NvcnQoc2l6ZSwgYXJyKTtcbiAgICBpZiAoY2hvaWNlID09PSAnaGVhcHNvcnQnKSByZXR1cm4gaGVhcFNvcnQoc2l6ZSwgYXJyKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gc29ydChldmVudCkge1xuICAgIGNvbnN0IHByb2Nlc3MgPSBjaG9vc2VTb3J0KGV2ZW50LnNyY0VsZW1lbnQuaWQpO1xuICAgIGZvciAoY29uc3QgW2EsIGIsIGgxLCBoMiwgYWN0aW9uXSBvZiBwcm9jZXNzKSB7XG4gICAgICAgIGlmIChhY3Rpb24pIHtcbiAgICAgICAgICAgIGF3YWl0IHNsZWVwKGRlbGF5KTtcbiAgICAgICAgICAgIHN3YXAoYSwgYiwgaDEsIGgyKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5jb25zdCBzb3J0QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzb3J0LXNlbGVjdGlvbicpLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zb3J0LWJ1dHRvbicpO1xuc29ydEJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4gYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hhbmdlQ2hvaWNlKSk7XG5cbmNvbnN0IHNvcnRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc29ydC1idXR0b24nKTtcbnNvcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzb3J0KTtcblxuXG5jb25zdCByYW5kb21CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmFuZG9taXNlJyk7XG5yYW5kb21CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByYW5kb21pc2UpO1xuXG5cblxuLy8gVE9ET1xuLy8gaW1wbGVtZW50IHN3YXBwaW5nIHZpc3VhbGlzYXRpb25cbi8vIGZsb3VyaXNoIGFmdGVyIGEgc29ydCBlbmRzP1xuLy8gaW1wbGVtZW50IHN3YXAvcGF1c2Vcbi8vIGNsZWFuIHVwIHN0eWxlLCByZWZhY3RvclxuLy8gYnVpbGQgSFRNTD9cbi8vIHJld29yayB3ZWJwYWNrIHRvIGJ1aWxkIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9