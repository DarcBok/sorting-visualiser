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
const DEFAULT_COLOR = 'white';
const COMP_COLOR = '#fddb3a';
const SORTED_COLOR = '#00c900';

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

function visualise(a, b, h1, h2, action) {
    const items = document.querySelectorAll('.array-elem');
    items.forEach(item => item.style['background-color'] = DEFAULT_COLOR);
    if (action) {
        const item1 = document.querySelector(`[data-index='${a}']`);
        const item2 = document.querySelector(`[data-index='${b}']`);
        item1.style['background-color'] = COMP_COLOR;
        item2.style['background-color'] = COMP_COLOR;
    }
}

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

async function sort(event) {
    const process = chooseSort(event.srcElement.id);
    for (const [a, b, h1, h2, action] of process) {
        if (action) {
            visualise(a, b, h1, h2, action);
            await sleep(delay);
            swap(a, b, h1, h2);
        }
    }
    flourish();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zb3J0aW5nLXZpc3VhbGlzZXIvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3NvcnRpbmctdmlzdWFsaXNlci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vc29ydGluZy12aXN1YWxpc2VyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vc29ydGluZy12aXN1YWxpc2VyLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3NvcnRpbmctdmlzdWFsaXNlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9zb3J0aW5nLXZpc3VhbGlzZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3NvcnRpbmctdmlzdWFsaXNlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9zb3J0aW5nLXZpc3VhbGlzZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vc29ydGluZy12aXN1YWxpc2VyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vc29ydGluZy12aXN1YWxpc2VyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vc29ydGluZy12aXN1YWxpc2VyLy4vc3JjL2FsZ29yaXRobXMvYnViYmxlLmpzIiwid2VicGFjazovL3NvcnRpbmctdmlzdWFsaXNlci8uL3NyYy9hbGdvcml0aG1zL2hlYXBzb3J0LmpzIiwid2VicGFjazovL3NvcnRpbmctdmlzdWFsaXNlci8uL3NyYy9hbGdvcml0aG1zL2luc2VydGlvbi5qcyIsIndlYnBhY2s6Ly9zb3J0aW5nLXZpc3VhbGlzZXIvLi9zcmMvYWxnb3JpdGhtcy9tZXJnZXNvcnQuanMiLCJ3ZWJwYWNrOi8vc29ydGluZy12aXN1YWxpc2VyLy4vc3JjL2FsZ29yaXRobXMvcXVpY2tzb3J0LmpzIiwid2VicGFjazovL3NvcnRpbmctdmlzdWFsaXNlci8uL3NyYy9hbGdvcml0aG1zL3NlbGVjdGlvbi5qcyIsIndlYnBhY2s6Ly9zb3J0aW5nLXZpc3VhbGlzZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc29ydGluZy12aXN1YWxpc2VyL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3NvcnRpbmctdmlzdWFsaXNlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc29ydGluZy12aXN1YWxpc2VyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vc29ydGluZy12aXN1YWxpc2VyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc29ydGluZy12aXN1YWxpc2VyL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9zb3J0aW5nLXZpc3VhbGlzZXIvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb250c2VycmF0JmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGJhY2tncm91bmQ6ICMyNzI3Mjc7XFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuI2FycmF5LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiA5MHZ3O1xcbn1cXG5cXG4jb3B0aW9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBnYXA6IDMwcHg7XFxufVxcblxcbi5hcnJheS1lbGVtIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbn1cXG5cXG4jbGVmdC1idXR0b25zIHtcXG4gICAgbWFyZ2luLXRvcDogMTJweDtcXG59XFxuXFxuI3NvcnQtc2VsZWN0aW9uIHtcXG4gICAgd2lkdGg6IDU4dnc7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMDBweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uc29ydC1idXR0b24ge1xcbiAgICBjb2xvcjogI2Y2ZjRlNjtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBmbG9hdDogbGVmdDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIHdpZHRoOiAxNi42NiU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnNvcnQtYnV0dG9uOmhvdmVyIHtcXG4gICAgY29sb3I6ICNmZGRiM2E7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnNvcnQtYnV0dG9uLmFjdGl2ZSB7XFxuICAgIGNvbG9yOiAjZmRkYjNhO1xcbn1cXG5cXG4jc29ydC1zZWxlY3Rpb24gLnNvcnQtYnV0dG9uOmhvdmVyIH4gI2RvdCxcXG4jZG90LmFjdGl2ZSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xcblxcbn1cXG5cXG4jc29ydC1zZWxlY3Rpb24gLnNvcnQtYnV0dG9uOm50aC1jaGlsZCgxKTpob3ZlciB+ICNkb3R7XFxuICAgIGxlZnQ6IDguMzMlO1xcbn1cXG5cXG4jc29ydC1zZWxlY3Rpb24gLnNvcnQtYnV0dG9uOm50aC1jaGlsZCgyKTpob3ZlciB+ICNkb3Qge1xcbiAgICBsZWZ0OiAyNSU7XFxufVxcblxcbiNzb3J0LXNlbGVjdGlvbiAuc29ydC1idXR0b246bnRoLWNoaWxkKDMpOmhvdmVyIH4gI2RvdCB7XFxuICAgIGxlZnQ6IDQxLjY2JTtcXG59XFxuXFxuI3NvcnQtc2VsZWN0aW9uIC5zb3J0LWJ1dHRvbjpudGgtY2hpbGQoNCk6aG92ZXIgfiAjZG90IHtcXG4gICAgbGVmdDogNTguMzMlO1xcbn1cXG5cXG4jc29ydC1zZWxlY3Rpb24gLnNvcnQtYnV0dG9uOm50aC1jaGlsZCg1KTpob3ZlciB+ICNkb3Qge1xcbiAgICBsZWZ0OiA3NSU7XFxufVxcblxcbiNzb3J0LXNlbGVjdGlvbiAuc29ydC1idXR0b246bnRoLWNoaWxkKDYpOmhvdmVyIH4gI2RvdCB7XFxuICAgIGxlZnQ6IDkxLjY2JTtcXG59XFxuXFxuI3NvcnQtc2VsZWN0aW9uOmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDFweDtcXG4gICAgYmFja2dyb3VuZDogI2ZkZGIzYTtcXG4gICAgdG9wOiAzMHB4O1xcbn1cXG5cXG5cXG4jZG90IHtcXG4gICAgd2lkdGg6IDZweDtcXG4gICAgaGVpZ2h0OiA2cHg7XFxuICAgIGJhY2tncm91bmQ6ICNmZGRiM2E7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMCU7XFxuICAgIHRvcDogMjdweDtcXG59XFxuXFxuI3NsaWRlcnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICAgIGdhcDogMTVweDtcXG59XFxuXFxuLnNsaWRlci1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbmlucHV0W3R5cGU9cmFuZ2VdIHtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgaGVpZ2h0OiAxNXB4O1xcbn1cXG5cXG5pbnB1dFt0eXBlPXJhbmdlXTpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbmlucHV0W3R5cGU9cmFuZ2VdOjotd2Via2l0LXNsaWRlci10aHVtYiB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJhY2tncm91bmQ6ICNmZGRiM2E7XFxuICAgIGhlaWdodDogMTVweDtcXG4gICAgd2lkdGg6IDE1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTQwJSk7XFxufVxcblxcbmlucHV0W3R5cGU9cmFuZ2VdOjotd2Via2l0LXNsaWRlci1ydW5uYWJsZS10cmFjayB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDJweDtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcwMyk7XFxufVxcblxcbiNyaWdodC1idXR0b25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IC01cHg7XFxufVxcblxcbiNyaWdodC1idXR0b25zIGJ1dHRvbiB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43MDMpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGZvbnQ6IGluaGVyaXQ7XFxuICAgIGZvbnQtc2l6ZTogY2FsYygxMDAlIC0gMXB0KTtcXG4gICAgcGFkZGluZzogMnB4IDEycHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHRyYW5zaXRpb246IDAuMjVzO1xcbn1cXG5cXG4jcmlnaHQtYnV0dG9ucyBidXR0b246aG92ZXIge1xcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAyZW0gI2ZkZGMzYWM1O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLHFDQUFxQztJQUNyQyxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLGdDQUFnQztJQUNoQyxjQUFjO0lBQ2QsV0FBVztJQUNYLFNBQVM7SUFDVCxVQUFVO0lBQ1YsU0FBUztJQUNULGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7O0lBRUksVUFBVTtJQUNWLGdDQUFnQzs7QUFFcEM7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7OztBQUdBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixnQ0FBZ0M7SUFDaEMsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2Qix3QkFBd0I7SUFDeEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksNENBQTRDO0lBQzVDLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHFDQUFxQztJQUNyQyxlQUFlO0FBQ25CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1vbnRzZXJyYXQmZGlzcGxheT1zd2FwJyk7XFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG4gICAgYmFja2dyb3VuZDogIzI3MjcyNztcXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jYXJyYXktY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDkwdnc7XFxufVxcblxcbiNvcHRpb25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIGdhcDogMzBweDtcXG59XFxuXFxuLmFycmF5LWVsZW0ge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxufVxcblxcbiNsZWZ0LWJ1dHRvbnMge1xcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xcbn1cXG5cXG4jc29ydC1zZWxlY3Rpb24ge1xcbiAgICB3aWR0aDogNTh2dztcXG4gICAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5zb3J0LWJ1dHRvbiB7XFxuICAgIGNvbG9yOiAjZjZmNGU2O1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGZsb2F0OiBsZWZ0O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgd2lkdGg6IDE2LjY2JTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uc29ydC1idXR0b246aG92ZXIge1xcbiAgICBjb2xvcjogI2ZkZGIzYTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc29ydC1idXR0b24uYWN0aXZlIHtcXG4gICAgY29sb3I6ICNmZGRiM2E7XFxufVxcblxcbiNzb3J0LXNlbGVjdGlvbiAuc29ydC1idXR0b246aG92ZXIgfiAjZG90LFxcbiNkb3QuYWN0aXZlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxuXFxufVxcblxcbiNzb3J0LXNlbGVjdGlvbiAuc29ydC1idXR0b246bnRoLWNoaWxkKDEpOmhvdmVyIH4gI2RvdHtcXG4gICAgbGVmdDogOC4zMyU7XFxufVxcblxcbiNzb3J0LXNlbGVjdGlvbiAuc29ydC1idXR0b246bnRoLWNoaWxkKDIpOmhvdmVyIH4gI2RvdCB7XFxuICAgIGxlZnQ6IDI1JTtcXG59XFxuXFxuI3NvcnQtc2VsZWN0aW9uIC5zb3J0LWJ1dHRvbjpudGgtY2hpbGQoMyk6aG92ZXIgfiAjZG90IHtcXG4gICAgbGVmdDogNDEuNjYlO1xcbn1cXG5cXG4jc29ydC1zZWxlY3Rpb24gLnNvcnQtYnV0dG9uOm50aC1jaGlsZCg0KTpob3ZlciB+ICNkb3Qge1xcbiAgICBsZWZ0OiA1OC4zMyU7XFxufVxcblxcbiNzb3J0LXNlbGVjdGlvbiAuc29ydC1idXR0b246bnRoLWNoaWxkKDUpOmhvdmVyIH4gI2RvdCB7XFxuICAgIGxlZnQ6IDc1JTtcXG59XFxuXFxuI3NvcnQtc2VsZWN0aW9uIC5zb3J0LWJ1dHRvbjpudGgtY2hpbGQoNik6aG92ZXIgfiAjZG90IHtcXG4gICAgbGVmdDogOTEuNjYlO1xcbn1cXG5cXG4jc29ydC1zZWxlY3Rpb246YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMXB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjZmRkYjNhO1xcbiAgICB0b3A6IDMwcHg7XFxufVxcblxcblxcbiNkb3Qge1xcbiAgICB3aWR0aDogNnB4O1xcbiAgICBoZWlnaHQ6IDZweDtcXG4gICAgYmFja2dyb3VuZDogI2ZkZGIzYTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAwJTtcXG4gICAgdG9wOiAyN3B4O1xcbn1cXG5cXG4jc2xpZGVycyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gICAgZ2FwOiAxNXB4O1xcbn1cXG5cXG4uc2xpZGVyLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuaW5wdXRbdHlwZT1yYW5nZV0ge1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgICBoZWlnaHQ6IDE1cHg7XFxufVxcblxcbmlucHV0W3R5cGU9cmFuZ2VdOmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuaW5wdXRbdHlwZT1yYW5nZV06Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYmFja2dyb3VuZDogI2ZkZGIzYTtcXG4gICAgaGVpZ2h0OiAxNXB4O1xcbiAgICB3aWR0aDogMTVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNDAlKTtcXG59XFxuXFxuaW5wdXRbdHlwZT1yYW5nZV06Oi13ZWJraXQtc2xpZGVyLXJ1bm5hYmxlLXRyYWNrIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMnB4O1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzAzKTtcXG59XFxuXFxuI3JpZ2h0LWJ1dHRvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogLTVweDtcXG59XFxuXFxuI3JpZ2h0LWJ1dHRvbnMgYnV0dG9uIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcwMyk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgZm9udDogaW5oZXJpdDtcXG4gICAgZm9udC1zaXplOiBjYWxjKDEwMCUgLSAxcHQpO1xcbiAgICBwYWRkaW5nOiAycHggMTJweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgdHJhbnNpdGlvbjogMC4yNXM7XFxufVxcblxcbiNyaWdodC1idXR0b25zIGJ1dHRvbjpob3ZlciB7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDJlbSAjZmRkYzNhYzU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgU1dBUCA9IDE7XG5jb25zdCBDT01QID0gMDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIChzaXplLCBhcnIpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemUtMTsgaSsrKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2l6ZS1pLTE7IGorKykge1xuICAgICAgICAgICAgaWYgKGFycltqXSA+IGFycltqKzFdKSB5aWVsZCBbaiwgaisxLCBhcnJbaisxXSwgYXJyW2pdLCBTV0FQXTtcbiAgICAgICAgICAgIGVsc2UgeWllbGQgW2osIGorMSwgYXJyW2orMV0sIGFycltqXSwgQ09NUF07XG4gICAgICAgIH1cbiAgICB9XG59IiwiY29uc3QgU1dBUCA9IDE7XG5jb25zdCBDT01QID0gMDtcblxuLy8gYXJyYXkgcmVwcmVzZW50YXRpb24gb2YgaGVhcCBvZiBzaXplIG4gc3RhcnRpbmcgYXQgaW5kZXggMFxuLy8gaSByZXByZXNlbnRzIHN1Yi1oZWFwIHN0YXJ0aW5nIGluZGV4XG5mdW5jdGlvbiogaGVhcGlmeShhcnIsIG4sIGkpIHtcbiAgICBsZXQgbGFyZ2VzdCA9IGk7XG4gICAgbGV0IGwgPSAyICogaSArIDEsIHIgPSAyICogaSArIDI7XG5cbiAgICAvLyBjaGVjayBpZiBsZWZ0IGFuZCByaWdodCBjaGlsZHJlbiBhcmUgbGFyZ2VyXG4gICAgaWYgKGwgPCBuICYmIGFycltsYXJnZXN0XSA8IGFycltsXSkge1xuICAgICAgICBsYXJnZXN0ID0gbDtcbiAgICB9XG4gICAgaWYgKHIgPCBuICYmIGFycltsYXJnZXN0XSA8IGFycltyXSkge1xuICAgICAgICBsYXJnZXN0ID0gcjtcbiAgICB9XG5cbiAgICAvLyBjaGFuZ2Ugcm9vdCBhbmQgcmVjdXJzaXZlbHkgaGVhcGlmeVxuICAgIGlmIChsYXJnZXN0ICE9PSBpKSB7XG4gICAgICAgIHlpZWxkIFtpLCBsYXJnZXN0LCBhcnJbbGFyZ2VzdF0sIGFycltpXSwgU1dBUF07XG4gICAgICAgIHlpZWxkICpoZWFwaWZ5KGFyciwgbiwgbGFyZ2VzdCk7XG4gICAgfSAgIFxufVxuXG5mdW5jdGlvbiogaGVhcFNvcnRIZWxwZXIoYXJyLCBzaXplKSB7XG4gICAgLy8gaGVhcGlmeSBhcnJheVxuICAgIGZvciAobGV0IGkgPSBNYXRoLmZsb29yKHNpemUgLyAyKSAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIHlpZWxkICpoZWFwaWZ5KGFyciwgc2l6ZSwgaSk7XG4gICAgfVxuXG4gICAgLy8gZXh0cmFjdCBlbGVtZW50cyBmcm9tIGhlYXAgYW5kIGhlYXBpZnlcbiAgICBmb3IgKGxldCBpID0gc2l6ZSAtIDE7IGkgPiAwOyBpLS0pIHtcbiAgICAgICAgeWllbGQgWzAsIGksIGFycltpXSwgYXJyWzBdLCBTV0FQXTtcbiAgICAgICAgeWllbGQgKmhlYXBpZnkoYXJyLCBpLCAwKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiAoc2l6ZSwgYXJyKSB7XG4gICAgeWllbGQgKmhlYXBTb3J0SGVscGVyKGFyciwgc2l6ZSk7XG59IiwiY29uc3QgU1dBUCA9IDE7XG5jb25zdCBDT01QID0gMDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIChzaXplLCBhcnIpIHtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IHNpemU7IGkrKykge1xuICAgICAgICBjb25zdCBuZXh0ID0gYXJyW2ldO1xuICAgICAgICBsZXQgaiA9IGktMTtcbiAgICAgICAgd2hpbGUgKGogPj0gMCAmJiBuZXh0IDwgYXJyW2pdKSB7XG4gICAgICAgICAgICB5aWVsZCBbaisxLCBqLCBhcnJbal0sIGFycltqKzFdLCBTV0FQXTtcbiAgICAgICAgICAgIGotLTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJjb25zdCBTV0FQID0gMTtcbmNvbnN0IENPTVAgPSAwO1xuXG5mdW5jdGlvbiogbWVyZ2UoYXJyLCBsLCBtLCByKSB7XG4gICAgY29uc3QgTCA9IGFyci5zbGljZShsLCBtICsgMSk7XG4gICAgY29uc3QgUiA9IGFyci5zbGljZShtICsgMSwgciArIDEpO1xuICAgIGNvbnN0IG4xID0gTC5sZW5ndGgsIG4yID0gUi5sZW5ndGg7XG5cbiAgICBsZXQgaSA9IDAsIGogPSAwLCBrID0gbDtcblxuICAgIC8vIG1lcmdlIG5vbi1lbXB0eSBzdWJhcnJheXNcbiAgICB3aGlsZSAoaSA8IG4xICYmIGogPCBuMikge1xuICAgICAgICBpZiAoTFtpXSA8PSBSW2pdKSB7XG4gICAgICAgICAgICB5aWVsZCBbaywgaywgTFtpXSwgTFtpXSwgU1dBUF07IFxuICAgICAgICAgICAgaysrLCBpKys7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB5aWVsZCBbaywgaywgUltqXSwgUltqXSwgU1dBUF07XG4gICAgICAgICAgICBrKyssIGorKztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGZpbGwgdXAgcmVzdCBpZiBvbmUgYXJyYXkgaXMgc3RpbGwgbm9uLWVtcHR5XG4gICAgd2hpbGUgKGkgPCBuMSkge1xuICAgICAgICB5aWVsZCBbaywgaywgTFtpXSwgTFtpXSwgU1dBUF07IFxuICAgICAgICBrKyssIGkrKztcbiAgICB9XG4gICAgd2hpbGUgKGogPCBuMikge1xuICAgICAgICB5aWVsZCBbaywgaywgUltqXSwgUltqXSwgU1dBUF07IFxuICAgICAgICBrKyssIGorKztcbiAgICB9XG59XG5cbmZ1bmN0aW9uKiBtZXJnZVNvcnRIZWxwZXIoYXJyLCBsLCByKSB7XG4gICAgaWYgKGwgPj0gcikge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBtaWQgPSBNYXRoLmZsb29yKChsICsgcikgLyAyKTtcbiAgICB5aWVsZCAqbWVyZ2VTb3J0SGVscGVyKGFyciwgbCwgbWlkKTtcbiAgICB5aWVsZCAqbWVyZ2VTb3J0SGVscGVyKGFyciwgbWlkICsgMSwgcik7XG4gICAgeWllbGQgKm1lcmdlKGFyciwgbCwgbWlkLCByKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIChzaXplLCBhcnIpIHtcbiAgICB5aWVsZCAqbWVyZ2VTb3J0SGVscGVyKGFyciwgMCwgc2l6ZSAtIDEpO1xufSIsImNvbnN0IFNXQVAgPSAxO1xuY29uc3QgQ09NUCA9IDA7XG5cbi8vIE5haXZlIHF1aWNrc29ydFxuXG5mdW5jdGlvbiogcGFydGl0aW9uKGFyciwgbCwgaCwgcGl2b3QpIHtcbiAgICBsZXQgaSA9IGwgKyAxLCBqID0gaDtcbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB3aGlsZShhcnJbaV0gPD0gcGl2b3QgJiYgaSA8IGopIGkrKztcbiAgICAgICAgd2hpbGUgKGFycltqXSA+PSBwaXZvdCAmJiBpIDwgaikgai0tO1xuICAgICAgICBpZiAoaSA9PT0gaikgYnJlYWs7XG4gICAgICAgIHlpZWxkIFtpLCBqLCBhcnJbal0sIGFycltpXSwgU1dBUF07XG4gICAgfVxufVxuXG5mdW5jdGlvbiogcXVpY2tTb3J0SGVscGVyKGFyciwgbCwgaCkge1xuICAgIGlmIChoIDw9IGwpIHJldHVybjtcbiAgICBsZXQgcGl2b3QgPSBhcnJbbF07XG4gICAgeWllbGQqIHBhcnRpdGlvbihhcnIsIGwsIGgsIHBpdm90KTtcblxuICAgIC8vIGZpeCBwaXZvdCBlbGVtZW50IHBvc2l0aW9uXG4gICAgbGV0IGkgPSBsICsgMTtcbiAgICB3aGlsZSAoYXJyW2ldIDw9IHBpdm90ICYmIGkgPCBoKSB7XG4gICAgICAgIGkrKztcbiAgICB9XG4gICAgaWYgKGFycltpXSA+IHBpdm90KSBpLS07XG4gICAgeWllbGQgW2wsIGksIGFycltpXSwgcGl2b3QsIFNXQVBdO1xuXG4gICAgLy8gcmVjdXJzaXZlbHkgc29ydCBsZWZ0IGFuZCByaWdodFxuICAgIHlpZWxkICpxdWlja1NvcnRIZWxwZXIoYXJyLCBsLCBpLTEpO1xuICAgIHlpZWxkICpxdWlja1NvcnRIZWxwZXIoYXJyLCBpKzEsIGgpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogKHNpemUsIGFycikge1xuICAgIHlpZWxkICpxdWlja1NvcnRIZWxwZXIoYXJyLCAwLCBzaXplIC0gMSk7XG59XG4iLCJjb25zdCBTV0FQID0gMTtcbmNvbnN0IENPTVAgPSAwO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogKHNpemUsIGFycikge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgICAgIGxldCBtaW5faWR4ID0gaTtcbiAgICAgICAgZm9yIChsZXQgaiA9IGkrMTsgaiA8IHNpemU7IGorKykge1xuICAgICAgICAgICAgeWllbGQgW2ksIGosIGFycltqXSwgYXJyW2ldLCBDT01QXTtcbiAgICAgICAgICAgIGlmIChhcnJbbWluX2lkeF0gPiBhcnJbal0pIHtcbiAgICAgICAgICAgICAgICBtaW5faWR4ID0gajtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB5aWVsZCBbaSwgbWluX2lkeCwgYXJyW21pbl9pZHhdLCBhcnJbaV0sIFNXQVBdO1xuICAgIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBidWJibGVTb3J0IGZyb20gJy4vYWxnb3JpdGhtcy9idWJibGUuanMnO1xuaW1wb3J0IHNlbGVjdGlvblNvcnQgZnJvbSAnLi9hbGdvcml0aG1zL3NlbGVjdGlvbi5qcyc7XG5pbXBvcnQgaW5zZXJ0aW9uU29ydCBmcm9tICcuL2FsZ29yaXRobXMvaW5zZXJ0aW9uLmpzJztcbmltcG9ydCBtZXJnZVNvcnQgZnJvbSAnLi9hbGdvcml0aG1zL21lcmdlc29ydC5qcydcbmltcG9ydCBxdWlja1NvcnQgZnJvbSAnLi9hbGdvcml0aG1zL3F1aWNrc29ydC5qcyc7XG5pbXBvcnQgaGVhcFNvcnQgZnJvbSAnLi9hbGdvcml0aG1zL2hlYXBzb3J0LmpzJztcblxuY29uc3QgTUlOX0hFSUdIVCA9IDc1O1xuY29uc3QgTUFYX0hFSUdIVCA9IDU7XG5jb25zdCBJTklUSUFMX1NJWkUgPSA2NDtcbmNvbnN0IElOSVRJQUxfREVMQVkgPSAxMDtcbmNvbnN0IERFRkFVTFRfQ09MT1IgPSAnd2hpdGUnO1xuY29uc3QgQ09NUF9DT0xPUiA9ICcjZmRkYjNhJztcbmNvbnN0IFNPUlRFRF9DT0xPUiA9ICcjMDBjOTAwJztcblxubGV0IGFyciA9IFtdOyAvLyBjb250YWluZXIgb2YgYmFyIGhlaWdodHNcbmxldCBjaG9pY2UgPSBcIlwiOyAvLyBjaG9pY2Ugb2Ygc29ydFxubGV0IHNpemUgPSBJTklUSUFMX1NJWkU7XG5sZXQgZGVsYXkgPSBJTklUSUFMX0RFTEFZO1xuY29uc3QgcG9zaXRpb25zID0ge1xuICAgIGJ1YmJsZTogOC4zMyxcbiAgICBzZWxlY3Rpb246IDI1LFxuICAgIGluc2VydGlvbjogNDEuNjYsXG4gICAgcXVpY2tzb3J0OiA1OC4zMyxcbiAgICBtZXJnZXNvcnQ6IDc1LFxuICAgIGhlYXBzb3J0OiA5MS42NlxufTsgLy8gcG9zaXRpb25zIG9mIGRvdHNcblxuY29uc3QgYXJyYXlDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXJyYXktY29udGFpbmVyJyk7XG5jb25zdCBkb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZG90Jyk7XG5cbmNvbnN0IHJhbmRIZWlnaHQgPSAoKSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoTUFYX0hFSUdIVCAtIE1JTl9IRUlHSFQpKSArIE1JTl9IRUlHSFQ7XG5jb25zdCBzbGVlcCA9IChkZWxheSkgPT4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIGRlbGF5KSk7XG5cbmZ1bmN0aW9uIGNvbXB1dGVXaWR0aCgpIHtcbiAgICByZXR1cm4gMTAwL3NpemU7XG59XG5cbmNvbnN0IHNpemVTbGlkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2l6ZS1zbGlkZXInKTtcbnNpemVTbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZSkgPT4ge1xuICAgIHNpemUgPSBlLnNyY0VsZW1lbnQudmFsdWU7XG4gICAgcmFuZG9taXNlKCk7XG59KTtcblxuY29uc3Qgc3BlZWRTbGlkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3BlZWQtc2xpZGVyJyk7XG5zcGVlZFNsaWRlci5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlKSA9PiB7XG4gICAgZGVsYXkgPSAxMDAwIC8gKGUuc3JjRWxlbWVudC52YWx1ZSAqIGUuc3JjRWxlbWVudC52YWx1ZSk7XG59KTtcblxuLy8gUmFuZG9taXNlcyBhcnJheSBhbmQgZGlzcGxheXMgb24gcGFnZVxuZnVuY3Rpb24gcmFuZG9taXNlKCkge1xuICAgIGFyciA9IFtdO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhcnJheS1jb250YWluZXInKS5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgICAgIGxldCBoID0gcmFuZEhlaWdodCgpO1xuICAgICAgICBhcnIucHVzaChoKTtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FycmF5LWVsZW0nKTtcbiAgICAgICAgZWxlbWVudC5kYXRhc2V0LmluZGV4ID0gaVxuICAgICAgICBlbGVtZW50LnN0eWxlWydoZWlnaHQnXSA9IGAke2h9dmhgO1xuICAgICAgICBlbGVtZW50LnN0eWxlWyd3aWR0aCddID0gYCR7Y29tcHV0ZVdpZHRoKCl9JWA7XG4gICAgICAgIGFycmF5Q29udGFpbmVyLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgIH1cbn1cbnJhbmRvbWlzZSgpO1xuXG5mdW5jdGlvbiBjaGFuZ2VDaG9pY2UoZSkge1xuICAgIGNvbnN0IGNob3NlbkJ1dHRvbiA9IGUuc3JjRWxlbWVudDtcbiAgICBjaG9pY2UgPSBjaG9zZW5CdXR0b24uaWQ7XG5cbiAgICAvLyByZW1vdmUgcHJldmlvdXMgYWN0aXZlIGNsYXNzZXNcbiAgICBzb3J0QnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpO1xuXG4gICAgLy8gYWN0aXZhdGUgZG90IGFuZCBwb3NpdGlvblxuICAgIGNob3NlbkJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICBkb3QuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgZG90LnN0eWxlLmxlZnQgPSBgJHtwb3NpdGlvbnNbY2hvaWNlXX0lYDtcbn1cblxuZnVuY3Rpb24gdmlzdWFsaXNlKGEsIGIsIGgxLCBoMiwgYWN0aW9uKSB7XG4gICAgY29uc3QgaXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYXJyYXktZWxlbScpO1xuICAgIGl0ZW1zLmZvckVhY2goaXRlbSA9PiBpdGVtLnN0eWxlWydiYWNrZ3JvdW5kLWNvbG9yJ10gPSBERUZBVUxUX0NPTE9SKTtcbiAgICBpZiAoYWN0aW9uKSB7XG4gICAgICAgIGNvbnN0IGl0ZW0xID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtaW5kZXg9JyR7YX0nXWApO1xuICAgICAgICBjb25zdCBpdGVtMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWluZGV4PScke2J9J11gKTtcbiAgICAgICAgaXRlbTEuc3R5bGVbJ2JhY2tncm91bmQtY29sb3InXSA9IENPTVBfQ09MT1I7XG4gICAgICAgIGl0ZW0yLnN0eWxlWydiYWNrZ3JvdW5kLWNvbG9yJ10gPSBDT01QX0NPTE9SO1xuICAgIH1cbn1cblxuLy8gYSBhbmQgYiBhcmUgaW5kaWNlcyBvZiBhcnIgYW5kIGRhdGEtaW5kZXhcbi8vIHN3YXAgcGxhY2VzIGluIGFyciBhbmQgc3dhcCBwbGFjZXMgb24gRE9NXG5mdW5jdGlvbiBzd2FwKGEsIGIsIGgxLCBoMikge1xuICAgIGFyclthXSA9IGgxO1xuICAgIGFycltiXSA9IGgyO1xuXG4gICAgY29uc3QgaXRlbTEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pbmRleD0nJHthfSddYCk7XG4gICAgY29uc3QgaXRlbTIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pbmRleD0nJHtifSddYCk7XG5cbiAgICBpdGVtMS5zdHlsZVsnaGVpZ2h0J10gPSBgJHtoMX12aGBcbiAgICBpdGVtMi5zdHlsZVsnaGVpZ2h0J10gPSBgJHtoMn12aGA7XG59XG5cbmZ1bmN0aW9uIGNob29zZVNvcnQoKSB7XG4gICAgaWYgKGNob2ljZSA9PT0gJ2J1YmJsZScpIHJldHVybiBidWJibGVTb3J0KHNpemUsIGFycik7XG4gICAgaWYgKGNob2ljZSA9PT0gJ3NlbGVjdGlvbicpIHJldHVybiBzZWxlY3Rpb25Tb3J0KHNpemUsIGFycik7XG4gICAgaWYgKGNob2ljZSA9PT0gJ2luc2VydGlvbicpIHJldHVybiBpbnNlcnRpb25Tb3J0KHNpemUsIGFycik7XG4gICAgaWYgKGNob2ljZSA9PT0gJ21lcmdlc29ydCcpIHJldHVybiBtZXJnZVNvcnQoc2l6ZSwgYXJyKTtcbiAgICBpZiAoY2hvaWNlID09PSAncXVpY2tzb3J0JykgcmV0dXJuIHF1aWNrU29ydChzaXplLCBhcnIpO1xuICAgIGlmIChjaG9pY2UgPT09ICdoZWFwc29ydCcpIHJldHVybiBoZWFwU29ydChzaXplLCBhcnIpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBmbG91cmlzaCgpIHtcbiAgICBjb25zdCBpdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hcnJheS1lbGVtJyk7XG4gICAgY29uc3QgaXRlbXNBcnJheSA9IEFycmF5LmZyb20oaXRlbXMpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbXNBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpdGVtc0FycmF5W2ldLnN0eWxlWydiYWNrZ3JvdW5kLWNvbG9yJ10gPSBTT1JURURfQ09MT1I7XG4gICAgICAgIGF3YWl0IHNsZWVwKGRlbGF5KTtcbiAgICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHNvcnQoZXZlbnQpIHtcbiAgICBjb25zdCBwcm9jZXNzID0gY2hvb3NlU29ydChldmVudC5zcmNFbGVtZW50LmlkKTtcbiAgICBmb3IgKGNvbnN0IFthLCBiLCBoMSwgaDIsIGFjdGlvbl0gb2YgcHJvY2Vzcykge1xuICAgICAgICBpZiAoYWN0aW9uKSB7XG4gICAgICAgICAgICB2aXN1YWxpc2UoYSwgYiwgaDEsIGgyLCBhY3Rpb24pO1xuICAgICAgICAgICAgYXdhaXQgc2xlZXAoZGVsYXkpO1xuICAgICAgICAgICAgc3dhcChhLCBiLCBoMSwgaDIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZsb3VyaXNoKCk7XG59XG5cblxuY29uc3Qgc29ydEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc29ydC1zZWxlY3Rpb24nKS5xdWVyeVNlbGVjdG9yQWxsKCcuc29ydC1idXR0b24nKTtcbnNvcnRCdXR0b25zLmZvckVhY2goYnV0dG9uID0+IGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNoYW5nZUNob2ljZSkpO1xuXG5jb25zdCBzb3J0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NvcnQtYnV0dG9uJyk7XG5zb3J0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc29ydCk7XG5cblxuY29uc3QgcmFuZG9tQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JhbmRvbWlzZScpO1xucmFuZG9tQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmFuZG9taXNlKTtcblxuXG5cbi8vIFRPRE9cbi8vIGltcGxlbWVudCBzd2FwcGluZyB2aXN1YWxpc2F0aW9uXG4vLyBmbG91cmlzaCBhZnRlciBhIHNvcnQgZW5kcz9cbi8vIGltcGxlbWVudCBzd2FwL3BhdXNlXG4vLyBjbGVhbiB1cCBzdHlsZSwgcmVmYWN0b3Jcbi8vIGJ1aWxkIEhUTUw/XG4vLyByZXdvcmsgd2VicGFjayB0byBidWlsZCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==