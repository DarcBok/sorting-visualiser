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
const MERGE = 2;
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
            yield [k, m+j+1, L[i], R[j], MERGE]; 
            k++, i++;
        }
        else {
            yield [k, m+j+1, R[j], R[j], MERGE];
            k++, j++;
        }
    }

    // fill up rest if one array is still non-empty
    while (i < n1) {
        yield [k, m+j, L[i], R[j], MERGE]; 
        k++, i++;
    }
    while (j < n2) {
        yield [k, m+j+1, R[j], R[j], MERGE]; 
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
            yield [min_idx, j, arr[j], arr[i], COMP];
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
const DEFAULT_COLOR = 'white';
const COMP_COLOR = '#fddb3a';
const SORTED_COLOR = '#00c900';
const MERGE = 2;
const SWAP = 1;
const COMP = 0;

let arr = []; // container of bar heights
let choice = ""; // choice of sort
let size = INITIAL_SIZE;
let delay = INITIAL_DELAY;

// store position of dots
const positions = {
    bubble: 8.33,
    selection: 25,
    insertion: 41.66,
    quicksort: 58.33,
    mergesort: 75,
    heapsort: 91.66
}; 

let abort = false;
const randomButton = document.querySelector('#randomise');
randomButton.addEventListener('click', async () => {
    abort = true;
    await sleep(delay);
    randomise();
});


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
    abort = false;
}
randomise();

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

function visualise(a, b) {
    const item1 = document.querySelector(`[data-index='${a}']`);
    const item2 = document.querySelector(`[data-index='${b}']`);
    item1.style['background-color'] = COMP_COLOR;
    item2.style['background-color'] = COMP_COLOR;
}

// a and b are indices of arr and data-index
// swap places in arr and swap places on DOM
function swap(a, b, h1, h2) {
    
    // clear colours
    clear();

    arr[a] = h1;
    arr[b] = h2;
    const item1 = document.querySelector(`[data-index='${a}']`);
    const item2 = document.querySelector(`[data-index='${b}']`);
    item1.style['height'] = `${h1}vh`;
    item2.style['height'] = `${h2}vh`;
}

// used only for mergeSort
// only alters height of one item
function merge(a, h) {
    clear();
    arr[a] = h;
    const item = document.querySelector(`[data-index='${a}']`);
    item.style['height'] = `${h}vh`;
}

function chooseSort() {
    if (choice === 'bubble') return (0,_algorithms_bubble_js__WEBPACK_IMPORTED_MODULE_1__["default"])(size, arr);
    if (choice === 'selection') return (0,_algorithms_selection_js__WEBPACK_IMPORTED_MODULE_2__["default"])(size, arr);
    if (choice === 'insertion') return (0,_algorithms_insertion_js__WEBPACK_IMPORTED_MODULE_3__["default"])(size, arr);
    if (choice === 'mergesort') return (0,_algorithms_mergesort_js__WEBPACK_IMPORTED_MODULE_4__["default"])(size, arr);
    if (choice === 'quicksort') return (0,_algorithms_quicksort_js__WEBPACK_IMPORTED_MODULE_5__["default"])(size, arr);
    if (choice === 'heapsort') return (0,_algorithms_heapsort_js__WEBPACK_IMPORTED_MODULE_6__["default"])(size, arr);
}

async function flourish() {
    const items = document.querySelectorAll('.array-elem');
    const itemsArray = Array.from(items);
    for (let i = 0; i < itemsArray.length; i++) {
        itemsArray[i].style['background-color'] = SORTED_COLOR;
        await sleep(delay);
    }
}

function clear() {
    const items = document.querySelectorAll('.array-elem');
    items.forEach(item => item.style['background-color'] = DEFAULT_COLOR);
}

async function sort(event) {
    const process = chooseSort(event.srcElement.id);
    for (const [a, b, h1, h2, action] of process) {
        if (abort) return;
        if (action === COMP) {
            visualise(a, b);
            await sleep(delay);
            clear();
        }
        if (action === SWAP) {
            visualise(a, b);
            await sleep(delay);
            swap(a, b, h1, h2);
        }
        if (action === MERGE) {
            visualise(a, b);
            await sleep(delay);
            merge(a, h1);
        }
    }
    flourish();
}


const sortButtons = document.querySelector('#sort-selection').querySelectorAll('.sort-button');
sortButtons.forEach(button => button.addEventListener('click', changeChoice));

const sortButton = document.querySelector('#sort-button');
sortButton.addEventListener('click', sort);





// TODO
// implement swap/pause
// clean up style, refactor
// build HTML?
// rework webpack to build
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Qyx1Q0FBdUMsb0VBQWE7QUFDcEQsdUNBQXVDLG9FQUFhO0FBQ3BELHVDQUF1QyxvRUFBUztBQUNoRCx1Q0FBdUMsb0VBQVM7QUFDaEQsc0NBQXNDLG1FQUFRO0FBQzlDOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix1QkFBdUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQiIsInNvdXJjZXMiOlsid2VicGFjazovL3NvcnRpbmctdmlzdWFsaXNlci8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vc29ydGluZy12aXN1YWxpc2VyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9zb3J0aW5nLXZpc3VhbGlzZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9zb3J0aW5nLXZpc3VhbGlzZXIvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vc29ydGluZy12aXN1YWxpc2VyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3NvcnRpbmctdmlzdWFsaXNlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vc29ydGluZy12aXN1YWxpc2VyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3NvcnRpbmctdmlzdWFsaXNlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9zb3J0aW5nLXZpc3VhbGlzZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9zb3J0aW5nLXZpc3VhbGlzZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9zb3J0aW5nLXZpc3VhbGlzZXIvLi9zcmMvYWxnb3JpdGhtcy9idWJibGUuanMiLCJ3ZWJwYWNrOi8vc29ydGluZy12aXN1YWxpc2VyLy4vc3JjL2FsZ29yaXRobXMvaGVhcHNvcnQuanMiLCJ3ZWJwYWNrOi8vc29ydGluZy12aXN1YWxpc2VyLy4vc3JjL2FsZ29yaXRobXMvaW5zZXJ0aW9uLmpzIiwid2VicGFjazovL3NvcnRpbmctdmlzdWFsaXNlci8uL3NyYy9hbGdvcml0aG1zL21lcmdlc29ydC5qcyIsIndlYnBhY2s6Ly9zb3J0aW5nLXZpc3VhbGlzZXIvLi9zcmMvYWxnb3JpdGhtcy9xdWlja3NvcnQuanMiLCJ3ZWJwYWNrOi8vc29ydGluZy12aXN1YWxpc2VyLy4vc3JjL2FsZ29yaXRobXMvc2VsZWN0aW9uLmpzIiwid2VicGFjazovL3NvcnRpbmctdmlzdWFsaXNlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zb3J0aW5nLXZpc3VhbGlzZXIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vc29ydGluZy12aXN1YWxpc2VyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9zb3J0aW5nLXZpc3VhbGlzZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zb3J0aW5nLXZpc3VhbGlzZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zb3J0aW5nLXZpc3VhbGlzZXIvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3NvcnRpbmctdmlzdWFsaXNlci8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1vbnRzZXJyYXQmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG4gICAgYmFja2dyb3VuZDogIzI3MjcyNztcXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jYXJyYXktY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDkwdnc7XFxufVxcblxcbiNvcHRpb25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIGdhcDogMzBweDtcXG59XFxuXFxuLmFycmF5LWVsZW0ge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxufVxcblxcbiNsZWZ0LWJ1dHRvbnMge1xcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xcbn1cXG5cXG4jc29ydC1zZWxlY3Rpb24ge1xcbiAgICB3aWR0aDogNTh2dztcXG4gICAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5zb3J0LWJ1dHRvbiB7XFxuICAgIGNvbG9yOiAjZjZmNGU2O1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGZsb2F0OiBsZWZ0O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgd2lkdGg6IDE2LjY2JTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uc29ydC1idXR0b246aG92ZXIge1xcbiAgICBjb2xvcjogI2ZkZGIzYTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc29ydC1idXR0b24uYWN0aXZlIHtcXG4gICAgY29sb3I6ICNmZGRiM2E7XFxufVxcblxcbiNzb3J0LXNlbGVjdGlvbiAuc29ydC1idXR0b246aG92ZXIgfiAjZG90LFxcbiNkb3QuYWN0aXZlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxuXFxufVxcblxcbiNzb3J0LXNlbGVjdGlvbiAuc29ydC1idXR0b246bnRoLWNoaWxkKDEpOmhvdmVyIH4gI2RvdHtcXG4gICAgbGVmdDogOC4zMyU7XFxufVxcblxcbiNzb3J0LXNlbGVjdGlvbiAuc29ydC1idXR0b246bnRoLWNoaWxkKDIpOmhvdmVyIH4gI2RvdCB7XFxuICAgIGxlZnQ6IDI1JTtcXG59XFxuXFxuI3NvcnQtc2VsZWN0aW9uIC5zb3J0LWJ1dHRvbjpudGgtY2hpbGQoMyk6aG92ZXIgfiAjZG90IHtcXG4gICAgbGVmdDogNDEuNjYlO1xcbn1cXG5cXG4jc29ydC1zZWxlY3Rpb24gLnNvcnQtYnV0dG9uOm50aC1jaGlsZCg0KTpob3ZlciB+ICNkb3Qge1xcbiAgICBsZWZ0OiA1OC4zMyU7XFxufVxcblxcbiNzb3J0LXNlbGVjdGlvbiAuc29ydC1idXR0b246bnRoLWNoaWxkKDUpOmhvdmVyIH4gI2RvdCB7XFxuICAgIGxlZnQ6IDc1JTtcXG59XFxuXFxuI3NvcnQtc2VsZWN0aW9uIC5zb3J0LWJ1dHRvbjpudGgtY2hpbGQoNik6aG92ZXIgfiAjZG90IHtcXG4gICAgbGVmdDogOTEuNjYlO1xcbn1cXG5cXG4jc29ydC1zZWxlY3Rpb246YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMXB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjZmRkYjNhO1xcbiAgICB0b3A6IDMwcHg7XFxufVxcblxcblxcbiNkb3Qge1xcbiAgICB3aWR0aDogNnB4O1xcbiAgICBoZWlnaHQ6IDZweDtcXG4gICAgYmFja2dyb3VuZDogI2ZkZGIzYTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAwJTtcXG4gICAgdG9wOiAyN3B4O1xcbn1cXG5cXG4jc2xpZGVycyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gICAgZ2FwOiAxNXB4O1xcbn1cXG5cXG4uc2xpZGVyLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuaW5wdXRbdHlwZT1yYW5nZV0ge1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgICBoZWlnaHQ6IDE1cHg7XFxufVxcblxcbmlucHV0W3R5cGU9cmFuZ2VdOmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuaW5wdXRbdHlwZT1yYW5nZV06Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYmFja2dyb3VuZDogI2ZkZGIzYTtcXG4gICAgaGVpZ2h0OiAxNXB4O1xcbiAgICB3aWR0aDogMTVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNDAlKTtcXG59XFxuXFxuaW5wdXRbdHlwZT1yYW5nZV06Oi13ZWJraXQtc2xpZGVyLXJ1bm5hYmxlLXRyYWNrIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMnB4O1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzAzKTtcXG59XFxuXFxuI3JpZ2h0LWJ1dHRvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogLTVweDtcXG59XFxuXFxuI3JpZ2h0LWJ1dHRvbnMgYnV0dG9uIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcwMyk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgZm9udDogaW5oZXJpdDtcXG4gICAgZm9udC1zaXplOiBjYWxjKDEwMCUgLSAxcHQpO1xcbiAgICBwYWRkaW5nOiAycHggMTJweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgdHJhbnNpdGlvbjogMC4yNXM7XFxufVxcblxcbiNyaWdodC1idXR0b25zIGJ1dHRvbjpob3ZlciB7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDJlbSAjZmRkYzNhYzU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIscUNBQXFDO0lBQ3JDLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsZ0NBQWdDO0lBQ2hDLGNBQWM7SUFDZCxXQUFXO0lBQ1gsU0FBUztJQUNULFVBQVU7SUFDVixTQUFTO0lBQ1QsYUFBYTtJQUNiLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTs7SUFFSSxVQUFVO0lBQ1YsZ0NBQWdDOztBQUVwQzs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksU0FBUztBQUNiOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjs7O0FBR0E7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGdDQUFnQztJQUNoQyxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsU0FBUztBQUNiOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLHdCQUF3QjtJQUN4QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztJQUNULGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSw0Q0FBNEM7SUFDNUMsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0kscUNBQXFDO0lBQ3JDLGVBQWU7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdCZkaXNwbGF5PXN3YXAnKTtcXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjMjcyNzI3O1xcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbiNhcnJheS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogOTB2dztcXG59XFxuXFxuI29wdGlvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgZ2FwOiAzMHB4O1xcbn1cXG5cXG4uYXJyYXktZWxlbSB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG59XFxuXFxuI2xlZnQtYnV0dG9ucyB7XFxuICAgIG1hcmdpbi10b3A6IDEycHg7XFxufVxcblxcbiNzb3J0LXNlbGVjdGlvbiB7XFxuICAgIHdpZHRoOiA1OHZ3O1xcbiAgICBtYXJnaW4tbGVmdDogMTAwcHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnNvcnQtYnV0dG9uIHtcXG4gICAgY29sb3I6ICNmNmY0ZTY7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICB3aWR0aDogMTYuNjYlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5zb3J0LWJ1dHRvbjpob3ZlciB7XFxuICAgIGNvbG9yOiAjZmRkYjNhO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zb3J0LWJ1dHRvbi5hY3RpdmUge1xcbiAgICBjb2xvcjogI2ZkZGIzYTtcXG59XFxuXFxuI3NvcnQtc2VsZWN0aW9uIC5zb3J0LWJ1dHRvbjpob3ZlciB+ICNkb3QsXFxuI2RvdC5hY3RpdmUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcXG5cXG59XFxuXFxuI3NvcnQtc2VsZWN0aW9uIC5zb3J0LWJ1dHRvbjpudGgtY2hpbGQoMSk6aG92ZXIgfiAjZG90e1xcbiAgICBsZWZ0OiA4LjMzJTtcXG59XFxuXFxuI3NvcnQtc2VsZWN0aW9uIC5zb3J0LWJ1dHRvbjpudGgtY2hpbGQoMik6aG92ZXIgfiAjZG90IHtcXG4gICAgbGVmdDogMjUlO1xcbn1cXG5cXG4jc29ydC1zZWxlY3Rpb24gLnNvcnQtYnV0dG9uOm50aC1jaGlsZCgzKTpob3ZlciB+ICNkb3Qge1xcbiAgICBsZWZ0OiA0MS42NiU7XFxufVxcblxcbiNzb3J0LXNlbGVjdGlvbiAuc29ydC1idXR0b246bnRoLWNoaWxkKDQpOmhvdmVyIH4gI2RvdCB7XFxuICAgIGxlZnQ6IDU4LjMzJTtcXG59XFxuXFxuI3NvcnQtc2VsZWN0aW9uIC5zb3J0LWJ1dHRvbjpudGgtY2hpbGQoNSk6aG92ZXIgfiAjZG90IHtcXG4gICAgbGVmdDogNzUlO1xcbn1cXG5cXG4jc29ydC1zZWxlY3Rpb24gLnNvcnQtYnV0dG9uOm50aC1jaGlsZCg2KTpob3ZlciB+ICNkb3Qge1xcbiAgICBsZWZ0OiA5MS42NiU7XFxufVxcblxcbiNzb3J0LXNlbGVjdGlvbjphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxcHg7XFxuICAgIGJhY2tncm91bmQ6ICNmZGRiM2E7XFxuICAgIHRvcDogMzBweDtcXG59XFxuXFxuXFxuI2RvdCB7XFxuICAgIHdpZHRoOiA2cHg7XFxuICAgIGhlaWdodDogNnB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjZmRkYjNhO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDAlO1xcbiAgICB0b3A6IDI3cHg7XFxufVxcblxcbiNzbGlkZXJzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgICBnYXA6IDE1cHg7XFxufVxcblxcbi5zbGlkZXItY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG5pbnB1dFt0eXBlPXJhbmdlXSB7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGhlaWdodDogMTVweDtcXG59XFxuXFxuaW5wdXRbdHlwZT1yYW5nZV06Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG5pbnB1dFt0eXBlPXJhbmdlXTo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kOiAjZmRkYjNhO1xcbiAgICBoZWlnaHQ6IDE1cHg7XFxuICAgIHdpZHRoOiAxNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00MCUpO1xcbn1cXG5cXG5pbnB1dFt0eXBlPXJhbmdlXTo6LXdlYmtpdC1zbGlkZXItcnVubmFibGUtdHJhY2sge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAycHg7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43MDMpO1xcbn1cXG5cXG4jcmlnaHQtYnV0dG9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAtNXB4O1xcbn1cXG5cXG4jcmlnaHQtYnV0dG9ucyBidXR0b24ge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzAzKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBmb250OiBpbmhlcml0O1xcbiAgICBmb250LXNpemU6IGNhbGMoMTAwJSAtIDFwdCk7XFxuICAgIHBhZGRpbmc6IDJweCAxMnB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICB0cmFuc2l0aW9uOiAwLjI1cztcXG59XFxuXFxuI3JpZ2h0LWJ1dHRvbnMgYnV0dG9uOmhvdmVyIHtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMmVtICNmZGRjM2FjNTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBTV0FQID0gMTtcbmNvbnN0IENPTVAgPSAwO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogKHNpemUsIGFycikge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZS0xOyBpKyspIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzaXplLWktMTsgaisrKSB7XG4gICAgICAgICAgICBpZiAoYXJyW2pdID4gYXJyW2orMV0pIHlpZWxkIFtqLCBqKzEsIGFycltqKzFdLCBhcnJbal0sIFNXQVBdO1xuICAgICAgICAgICAgZWxzZSB5aWVsZCBbaiwgaisxLCBhcnJbaisxXSwgYXJyW2pdLCBDT01QXTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJjb25zdCBTV0FQID0gMTtcbmNvbnN0IENPTVAgPSAwO1xuXG4vLyBhcnJheSByZXByZXNlbnRhdGlvbiBvZiBoZWFwIG9mIHNpemUgbiBzdGFydGluZyBhdCBpbmRleCAwXG4vLyBpIHJlcHJlc2VudHMgc3ViLWhlYXAgc3RhcnRpbmcgaW5kZXhcbmZ1bmN0aW9uKiBoZWFwaWZ5KGFyciwgbiwgaSkge1xuICAgIGxldCBsYXJnZXN0ID0gaTtcbiAgICBsZXQgbCA9IDIgKiBpICsgMSwgciA9IDIgKiBpICsgMjtcblxuICAgIC8vIGNoZWNrIGlmIGxlZnQgYW5kIHJpZ2h0IGNoaWxkcmVuIGFyZSBsYXJnZXJcbiAgICBpZiAobCA8IG4gJiYgYXJyW2xhcmdlc3RdIDwgYXJyW2xdKSB7XG4gICAgICAgIGxhcmdlc3QgPSBsO1xuICAgIH1cbiAgICBpZiAociA8IG4gJiYgYXJyW2xhcmdlc3RdIDwgYXJyW3JdKSB7XG4gICAgICAgIGxhcmdlc3QgPSByO1xuICAgIH1cblxuICAgIC8vIGNoYW5nZSByb290IGFuZCByZWN1cnNpdmVseSBoZWFwaWZ5XG4gICAgaWYgKGxhcmdlc3QgIT09IGkpIHtcbiAgICAgICAgeWllbGQgW2ksIGxhcmdlc3QsIGFycltsYXJnZXN0XSwgYXJyW2ldLCBTV0FQXTtcbiAgICAgICAgeWllbGQgKmhlYXBpZnkoYXJyLCBuLCBsYXJnZXN0KTtcbiAgICB9ICAgXG59XG5cbmZ1bmN0aW9uKiBoZWFwU29ydEhlbHBlcihhcnIsIHNpemUpIHtcbiAgICAvLyBoZWFwaWZ5IGFycmF5XG4gICAgZm9yIChsZXQgaSA9IE1hdGguZmxvb3Ioc2l6ZSAvIDIpIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgeWllbGQgKmhlYXBpZnkoYXJyLCBzaXplLCBpKTtcbiAgICB9XG5cbiAgICAvLyBleHRyYWN0IGVsZW1lbnRzIGZyb20gaGVhcCBhbmQgaGVhcGlmeVxuICAgIGZvciAobGV0IGkgPSBzaXplIC0gMTsgaSA+IDA7IGktLSkge1xuICAgICAgICB5aWVsZCBbMCwgaSwgYXJyW2ldLCBhcnJbMF0sIFNXQVBdO1xuICAgICAgICB5aWVsZCAqaGVhcGlmeShhcnIsIGksIDApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIChzaXplLCBhcnIpIHtcbiAgICB5aWVsZCAqaGVhcFNvcnRIZWxwZXIoYXJyLCBzaXplKTtcbn0iLCJjb25zdCBTV0FQID0gMTtcbmNvbnN0IENPTVAgPSAwO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogKHNpemUsIGFycikge1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgICAgIGNvbnN0IG5leHQgPSBhcnJbaV07XG4gICAgICAgIGxldCBqID0gaS0xO1xuICAgICAgICB3aGlsZSAoaiA+PSAwICYmIG5leHQgPCBhcnJbal0pIHtcbiAgICAgICAgICAgIHlpZWxkIFtqKzEsIGosIGFycltqXSwgYXJyW2orMV0sIFNXQVBdO1xuICAgICAgICAgICAgai0tO1xuICAgICAgICB9XG4gICAgfVxufSIsImNvbnN0IE1FUkdFID0gMjtcbmNvbnN0IFNXQVAgPSAxO1xuY29uc3QgQ09NUCA9IDA7XG5cbmZ1bmN0aW9uKiBtZXJnZShhcnIsIGwsIG0sIHIpIHtcbiAgICBjb25zdCBMID0gYXJyLnNsaWNlKGwsIG0gKyAxKTtcbiAgICBjb25zdCBSID0gYXJyLnNsaWNlKG0gKyAxLCByICsgMSk7XG4gICAgY29uc3QgbjEgPSBMLmxlbmd0aCwgbjIgPSBSLmxlbmd0aDtcblxuICAgIGxldCBpID0gMCwgaiA9IDAsIGsgPSBsO1xuXG4gICAgLy8gbWVyZ2Ugbm9uLWVtcHR5IHN1YmFycmF5c1xuICAgIHdoaWxlIChpIDwgbjEgJiYgaiA8IG4yKSB7XG4gICAgICAgIGlmIChMW2ldIDw9IFJbal0pIHtcbiAgICAgICAgICAgIHlpZWxkIFtrLCBtK2orMSwgTFtpXSwgUltqXSwgTUVSR0VdOyBcbiAgICAgICAgICAgIGsrKywgaSsrO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgeWllbGQgW2ssIG0raisxLCBSW2pdLCBSW2pdLCBNRVJHRV07XG4gICAgICAgICAgICBrKyssIGorKztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGZpbGwgdXAgcmVzdCBpZiBvbmUgYXJyYXkgaXMgc3RpbGwgbm9uLWVtcHR5XG4gICAgd2hpbGUgKGkgPCBuMSkge1xuICAgICAgICB5aWVsZCBbaywgbStqLCBMW2ldLCBSW2pdLCBNRVJHRV07IFxuICAgICAgICBrKyssIGkrKztcbiAgICB9XG4gICAgd2hpbGUgKGogPCBuMikge1xuICAgICAgICB5aWVsZCBbaywgbStqKzEsIFJbal0sIFJbal0sIE1FUkdFXTsgXG4gICAgICAgIGsrKywgaisrO1xuICAgIH1cbn1cblxuZnVuY3Rpb24qIG1lcmdlU29ydEhlbHBlcihhcnIsIGwsIHIpIHtcbiAgICBpZiAobCA+PSByKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IG1pZCA9IE1hdGguZmxvb3IoKGwgKyByKSAvIDIpO1xuICAgIHlpZWxkICptZXJnZVNvcnRIZWxwZXIoYXJyLCBsLCBtaWQpO1xuICAgIHlpZWxkICptZXJnZVNvcnRIZWxwZXIoYXJyLCBtaWQgKyAxLCByKTtcbiAgICB5aWVsZCAqbWVyZ2UoYXJyLCBsLCBtaWQsIHIpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogKHNpemUsIGFycikge1xuICAgIHlpZWxkICptZXJnZVNvcnRIZWxwZXIoYXJyLCAwLCBzaXplIC0gMSk7XG59IiwiY29uc3QgU1dBUCA9IDE7XG5jb25zdCBDT01QID0gMDtcblxuLy8gTmFpdmUgcXVpY2tzb3J0XG5cbmZ1bmN0aW9uKiBwYXJ0aXRpb24oYXJyLCBsLCBoLCBwaXZvdCkge1xuICAgIGxldCBpID0gbCArIDEsIGogPSBoO1xuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHdoaWxlKGFycltpXSA8PSBwaXZvdCAmJiBpIDwgaikgaSsrO1xuICAgICAgICB3aGlsZSAoYXJyW2pdID49IHBpdm90ICYmIGkgPCBqKSBqLS07XG4gICAgICAgIGlmIChpID09PSBqKSBicmVhaztcbiAgICAgICAgeWllbGQgW2ksIGosIGFycltqXSwgYXJyW2ldLCBTV0FQXTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uKiBxdWlja1NvcnRIZWxwZXIoYXJyLCBsLCBoKSB7XG4gICAgaWYgKGggPD0gbCkgcmV0dXJuO1xuICAgIGxldCBwaXZvdCA9IGFycltsXTtcbiAgICB5aWVsZCogcGFydGl0aW9uKGFyciwgbCwgaCwgcGl2b3QpO1xuXG4gICAgLy8gZml4IHBpdm90IGVsZW1lbnQgcG9zaXRpb25cbiAgICBsZXQgaSA9IGwgKyAxO1xuICAgIHdoaWxlIChhcnJbaV0gPD0gcGl2b3QgJiYgaSA8IGgpIHtcbiAgICAgICAgaSsrO1xuICAgIH1cbiAgICBpZiAoYXJyW2ldID4gcGl2b3QpIGktLTtcbiAgICB5aWVsZCBbbCwgaSwgYXJyW2ldLCBwaXZvdCwgU1dBUF07XG5cbiAgICAvLyByZWN1cnNpdmVseSBzb3J0IGxlZnQgYW5kIHJpZ2h0XG4gICAgeWllbGQgKnF1aWNrU29ydEhlbHBlcihhcnIsIGwsIGktMSk7XG4gICAgeWllbGQgKnF1aWNrU29ydEhlbHBlcihhcnIsIGkrMSwgaCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiAoc2l6ZSwgYXJyKSB7XG4gICAgeWllbGQgKnF1aWNrU29ydEhlbHBlcihhcnIsIDAsIHNpemUgLSAxKTtcbn1cbiIsImNvbnN0IFNXQVAgPSAxO1xuY29uc3QgQ09NUCA9IDA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiAoc2l6ZSwgYXJyKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcbiAgICAgICAgbGV0IG1pbl9pZHggPSBpO1xuICAgICAgICBmb3IgKGxldCBqID0gaSsxOyBqIDwgc2l6ZTsgaisrKSB7XG4gICAgICAgICAgICB5aWVsZCBbbWluX2lkeCwgaiwgYXJyW2pdLCBhcnJbaV0sIENPTVBdO1xuICAgICAgICAgICAgaWYgKGFyclttaW5faWR4XSA+IGFycltqXSkge1xuICAgICAgICAgICAgICAgIG1pbl9pZHggPSBqO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHlpZWxkIFtpLCBtaW5faWR4LCBhcnJbbWluX2lkeF0sIGFycltpXSwgU1dBUF07XG4gICAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGJ1YmJsZVNvcnQgZnJvbSAnLi9hbGdvcml0aG1zL2J1YmJsZS5qcyc7XG5pbXBvcnQgc2VsZWN0aW9uU29ydCBmcm9tICcuL2FsZ29yaXRobXMvc2VsZWN0aW9uLmpzJztcbmltcG9ydCBpbnNlcnRpb25Tb3J0IGZyb20gJy4vYWxnb3JpdGhtcy9pbnNlcnRpb24uanMnO1xuaW1wb3J0IG1lcmdlU29ydCBmcm9tICcuL2FsZ29yaXRobXMvbWVyZ2Vzb3J0LmpzJ1xuaW1wb3J0IHF1aWNrU29ydCBmcm9tICcuL2FsZ29yaXRobXMvcXVpY2tzb3J0LmpzJztcbmltcG9ydCBoZWFwU29ydCBmcm9tICcuL2FsZ29yaXRobXMvaGVhcHNvcnQuanMnO1xuXG5jb25zdCBNSU5fSEVJR0hUID0gNzU7XG5jb25zdCBNQVhfSEVJR0hUID0gNTtcbmNvbnN0IElOSVRJQUxfU0laRSA9IDY0O1xuY29uc3QgSU5JVElBTF9ERUxBWSA9IDEwO1xuY29uc3QgREVGQVVMVF9DT0xPUiA9ICd3aGl0ZSc7XG5jb25zdCBDT01QX0NPTE9SID0gJyNmZGRiM2EnO1xuY29uc3QgU09SVEVEX0NPTE9SID0gJyMwMGM5MDAnO1xuY29uc3QgTUVSR0UgPSAyO1xuY29uc3QgU1dBUCA9IDE7XG5jb25zdCBDT01QID0gMDtcblxubGV0IGFyciA9IFtdOyAvLyBjb250YWluZXIgb2YgYmFyIGhlaWdodHNcbmxldCBjaG9pY2UgPSBcIlwiOyAvLyBjaG9pY2Ugb2Ygc29ydFxubGV0IHNpemUgPSBJTklUSUFMX1NJWkU7XG5sZXQgZGVsYXkgPSBJTklUSUFMX0RFTEFZO1xuXG4vLyBzdG9yZSBwb3NpdGlvbiBvZiBkb3RzXG5jb25zdCBwb3NpdGlvbnMgPSB7XG4gICAgYnViYmxlOiA4LjMzLFxuICAgIHNlbGVjdGlvbjogMjUsXG4gICAgaW5zZXJ0aW9uOiA0MS42NixcbiAgICBxdWlja3NvcnQ6IDU4LjMzLFxuICAgIG1lcmdlc29ydDogNzUsXG4gICAgaGVhcHNvcnQ6IDkxLjY2XG59OyBcblxubGV0IGFib3J0ID0gZmFsc2U7XG5jb25zdCByYW5kb21CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmFuZG9taXNlJyk7XG5yYW5kb21CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XG4gICAgYWJvcnQgPSB0cnVlO1xuICAgIGF3YWl0IHNsZWVwKGRlbGF5KTtcbiAgICByYW5kb21pc2UoKTtcbn0pO1xuXG5cbmNvbnN0IGFycmF5Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FycmF5LWNvbnRhaW5lcicpO1xuY29uc3QgZG90ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RvdCcpO1xuXG5jb25zdCByYW5kSGVpZ2h0ID0gKCkgPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKE1BWF9IRUlHSFQgLSBNSU5fSEVJR0hUKSkgKyBNSU5fSEVJR0hUO1xuY29uc3Qgc2xlZXAgPSAoZGVsYXkpID0+IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCBkZWxheSkpO1xuXG5mdW5jdGlvbiBjb21wdXRlV2lkdGgoKSB7XG4gICAgcmV0dXJuIDEwMC9zaXplO1xufVxuXG5jb25zdCBzaXplU2xpZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NpemUtc2xpZGVyJyk7XG5zaXplU2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGUpID0+IHtcbiAgICBzaXplID0gZS5zcmNFbGVtZW50LnZhbHVlO1xuICAgIHJhbmRvbWlzZSgpO1xufSk7XG5cbmNvbnN0IHNwZWVkU2xpZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NwZWVkLXNsaWRlcicpO1xuc3BlZWRTbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZSkgPT4ge1xuICAgIGRlbGF5ID0gMTAwMCAvIChlLnNyY0VsZW1lbnQudmFsdWUgKiBlLnNyY0VsZW1lbnQudmFsdWUpO1xufSk7XG5cbi8vIFJhbmRvbWlzZXMgYXJyYXkgYW5kIGRpc3BsYXlzIG9uIHBhZ2VcbmZ1bmN0aW9uIHJhbmRvbWlzZSgpIHtcbiAgICBhcnIgPSBbXTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXJyYXktY29udGFpbmVyJykuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkrKykge1xuICAgICAgICBsZXQgaCA9IHJhbmRIZWlnaHQoKTtcbiAgICAgICAgYXJyLnB1c2goaCk7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhcnJheS1lbGVtJyk7XG4gICAgICAgIGVsZW1lbnQuZGF0YXNldC5pbmRleCA9IGlcbiAgICAgICAgZWxlbWVudC5zdHlsZVsnaGVpZ2h0J10gPSBgJHtofXZoYDtcbiAgICAgICAgZWxlbWVudC5zdHlsZVsnd2lkdGgnXSA9IGAke2NvbXB1dGVXaWR0aCgpfSVgO1xuICAgICAgICBhcnJheUNvbnRhaW5lci5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICB9XG4gICAgYWJvcnQgPSBmYWxzZTtcbn1cbnJhbmRvbWlzZSgpO1xuXG5mdW5jdGlvbiBjaGFuZ2VDaG9pY2UoZSkge1xuICAgIGNvbnN0IGNob3NlbkJ1dHRvbiA9IGUuc3JjRWxlbWVudDtcbiAgICBjaG9pY2UgPSBjaG9zZW5CdXR0b24uaWQ7XG5cbiAgICAvLyByZW1vdmUgcHJldmlvdXMgYWN0aXZlIGNsYXNzZXNcbiAgICBzb3J0QnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpO1xuXG4gICAgLy8gYWN0aXZhdGUgZG90IGFuZCBwb3NpdGlvblxuICAgIGNob3NlbkJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICBkb3QuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgZG90LnN0eWxlLmxlZnQgPSBgJHtwb3NpdGlvbnNbY2hvaWNlXX0lYDtcbn1cblxuZnVuY3Rpb24gdmlzdWFsaXNlKGEsIGIpIHtcbiAgICBjb25zdCBpdGVtMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWluZGV4PScke2F9J11gKTtcbiAgICBjb25zdCBpdGVtMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWluZGV4PScke2J9J11gKTtcbiAgICBpdGVtMS5zdHlsZVsnYmFja2dyb3VuZC1jb2xvciddID0gQ09NUF9DT0xPUjtcbiAgICBpdGVtMi5zdHlsZVsnYmFja2dyb3VuZC1jb2xvciddID0gQ09NUF9DT0xPUjtcbn1cblxuLy8gYSBhbmQgYiBhcmUgaW5kaWNlcyBvZiBhcnIgYW5kIGRhdGEtaW5kZXhcbi8vIHN3YXAgcGxhY2VzIGluIGFyciBhbmQgc3dhcCBwbGFjZXMgb24gRE9NXG5mdW5jdGlvbiBzd2FwKGEsIGIsIGgxLCBoMikge1xuICAgIFxuICAgIC8vIGNsZWFyIGNvbG91cnNcbiAgICBjbGVhcigpO1xuXG4gICAgYXJyW2FdID0gaDE7XG4gICAgYXJyW2JdID0gaDI7XG4gICAgY29uc3QgaXRlbTEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pbmRleD0nJHthfSddYCk7XG4gICAgY29uc3QgaXRlbTIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pbmRleD0nJHtifSddYCk7XG4gICAgaXRlbTEuc3R5bGVbJ2hlaWdodCddID0gYCR7aDF9dmhgO1xuICAgIGl0ZW0yLnN0eWxlWydoZWlnaHQnXSA9IGAke2gyfXZoYDtcbn1cblxuLy8gdXNlZCBvbmx5IGZvciBtZXJnZVNvcnRcbi8vIG9ubHkgYWx0ZXJzIGhlaWdodCBvZiBvbmUgaXRlbVxuZnVuY3Rpb24gbWVyZ2UoYSwgaCkge1xuICAgIGNsZWFyKCk7XG4gICAgYXJyW2FdID0gaDtcbiAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtaW5kZXg9JyR7YX0nXWApO1xuICAgIGl0ZW0uc3R5bGVbJ2hlaWdodCddID0gYCR7aH12aGA7XG59XG5cbmZ1bmN0aW9uIGNob29zZVNvcnQoKSB7XG4gICAgaWYgKGNob2ljZSA9PT0gJ2J1YmJsZScpIHJldHVybiBidWJibGVTb3J0KHNpemUsIGFycik7XG4gICAgaWYgKGNob2ljZSA9PT0gJ3NlbGVjdGlvbicpIHJldHVybiBzZWxlY3Rpb25Tb3J0KHNpemUsIGFycik7XG4gICAgaWYgKGNob2ljZSA9PT0gJ2luc2VydGlvbicpIHJldHVybiBpbnNlcnRpb25Tb3J0KHNpemUsIGFycik7XG4gICAgaWYgKGNob2ljZSA9PT0gJ21lcmdlc29ydCcpIHJldHVybiBtZXJnZVNvcnQoc2l6ZSwgYXJyKTtcbiAgICBpZiAoY2hvaWNlID09PSAncXVpY2tzb3J0JykgcmV0dXJuIHF1aWNrU29ydChzaXplLCBhcnIpO1xuICAgIGlmIChjaG9pY2UgPT09ICdoZWFwc29ydCcpIHJldHVybiBoZWFwU29ydChzaXplLCBhcnIpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBmbG91cmlzaCgpIHtcbiAgICBjb25zdCBpdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hcnJheS1lbGVtJyk7XG4gICAgY29uc3QgaXRlbXNBcnJheSA9IEFycmF5LmZyb20oaXRlbXMpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbXNBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpdGVtc0FycmF5W2ldLnN0eWxlWydiYWNrZ3JvdW5kLWNvbG9yJ10gPSBTT1JURURfQ09MT1I7XG4gICAgICAgIGF3YWl0IHNsZWVwKGRlbGF5KTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNsZWFyKCkge1xuICAgIGNvbnN0IGl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFycmF5LWVsZW0nKTtcbiAgICBpdGVtcy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5zdHlsZVsnYmFja2dyb3VuZC1jb2xvciddID0gREVGQVVMVF9DT0xPUik7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHNvcnQoZXZlbnQpIHtcbiAgICBjb25zdCBwcm9jZXNzID0gY2hvb3NlU29ydChldmVudC5zcmNFbGVtZW50LmlkKTtcbiAgICBmb3IgKGNvbnN0IFthLCBiLCBoMSwgaDIsIGFjdGlvbl0gb2YgcHJvY2Vzcykge1xuICAgICAgICBpZiAoYWJvcnQpIHJldHVybjtcbiAgICAgICAgaWYgKGFjdGlvbiA9PT0gQ09NUCkge1xuICAgICAgICAgICAgdmlzdWFsaXNlKGEsIGIpO1xuICAgICAgICAgICAgYXdhaXQgc2xlZXAoZGVsYXkpO1xuICAgICAgICAgICAgY2xlYXIoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYWN0aW9uID09PSBTV0FQKSB7XG4gICAgICAgICAgICB2aXN1YWxpc2UoYSwgYik7XG4gICAgICAgICAgICBhd2FpdCBzbGVlcChkZWxheSk7XG4gICAgICAgICAgICBzd2FwKGEsIGIsIGgxLCBoMik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFjdGlvbiA9PT0gTUVSR0UpIHtcbiAgICAgICAgICAgIHZpc3VhbGlzZShhLCBiKTtcbiAgICAgICAgICAgIGF3YWl0IHNsZWVwKGRlbGF5KTtcbiAgICAgICAgICAgIG1lcmdlKGEsIGgxKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmbG91cmlzaCgpO1xufVxuXG5cbmNvbnN0IHNvcnRCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NvcnQtc2VsZWN0aW9uJykucXVlcnlTZWxlY3RvckFsbCgnLnNvcnQtYnV0dG9uJyk7XG5zb3J0QnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGFuZ2VDaG9pY2UpKTtcblxuY29uc3Qgc29ydEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzb3J0LWJ1dHRvbicpO1xuc29ydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNvcnQpO1xuXG5cblxuXG5cbi8vIFRPRE9cbi8vIGltcGxlbWVudCBzd2FwL3BhdXNlXG4vLyBjbGVhbiB1cCBzdHlsZSwgcmVmYWN0b3Jcbi8vIGJ1aWxkIEhUTUw/XG4vLyByZXdvcmsgd2VicGFjayB0byBidWlsZCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==