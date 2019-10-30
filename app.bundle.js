/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/vj-travel-assistance/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/imgs/needpix_com_edited_image.png":
/*!***********************************************!*\
  !*** ./src/imgs/needpix_com_edited_image.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "imgs/needpix_com_edited_image.png";

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return defFn; });
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/styles.scss */ "./src/styles/styles.scss");
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_scss_fontawesome_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/scss/fontawesome.scss */ "./src/styles/scss/fontawesome.scss");
/* harmony import */ var _styles_scss_fontawesome_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_scss_fontawesome_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_scss_solid_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/scss/solid.scss */ "./src/styles/scss/solid.scss");
/* harmony import */ var _styles_scss_solid_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_scss_solid_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _imgs_needpix_com_edited_image_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./imgs/needpix_com_edited_image.png */ "./src/imgs/needpix_com_edited_image.png");
/* harmony import */ var _imgs_needpix_com_edited_image_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_imgs_needpix_com_edited_image_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _scripts_menu_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/menu.js */ "./src/scripts/menu.js");
/* harmony import */ var _styles_ms_ss_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/ms-ss.css */ "./src/styles/ms-ss.css");
/* harmony import */ var _styles_ms_ss_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_ms_ss_css__WEBPACK_IMPORTED_MODULE_5__);







function defFn (){
    
    if (window.innerWidth < 828 || window.innerWidth < window.innerHeight) {
        document.getElementById('mainMenu').style.display = 'none';
        document.getElementsByClassName('fa-chevron-down')[0].style.display = "inline-block";

        document.getElementById('menuIcon').addEventListener('click', ev => {
            _scripts_menu_js__WEBPACK_IMPORTED_MODULE_4__["changeClass"](ev.path[1]);
        },false);
        
        document.getElementById('mainMenu').addEventListener('click', ev => {
            _scripts_menu_js__WEBPACK_IMPORTED_MODULE_4__["changeClass"](document.getElementById('menuIcon'));
        })

        window.addEventListener('click', ev => {
            if (ev.clientY > 500 && document.getElementById('menuIcon').classList.contains('selectedM')) {
                _scripts_menu_js__WEBPACK_IMPORTED_MODULE_4__["changeClass"](document.getElementById('menuIcon'));   
            }
        })
    }

}

document.addEventListener('readystatechange', (event) => {
    if (document.readyState === "complete") {
        defFn();
        
    var mobStyles = document.createElement('link');
    mobStyles.type ="text/css"
    mobStyles.rel = "stylesheet";
    mobStyles.media = "only screen and (max-width: 828px)";
    mobStyles.href = "./styles/ms-ss.css";
    document.getElementsByTagName('head')[0].appendChild(mobStyles);
    
    }
});


window.addEventListener('resize',(ev) => {
    defFn();
});




/***/ }),

/***/ "./src/scripts/menu.js":
/*!*****************************!*\
  !*** ./src/scripts/menu.js ***!
  \*****************************/
/*! exports provided: showMenu, clickCheck, changeClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showMenu", function() { return showMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clickCheck", function() { return clickCheck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeClass", function() { return changeClass; });

function showMenu(elem) {
    if (elem.classList.contains('selectedM')) {
        document.getElementsByClassName('fa-chevron-down')[0].style.display = "none";
        document.getElementsByClassName('fa-chevron-right')[0].style.display = "inline-block";
        document.getElementById('mainMenu').style = 'display:flex; flex-direction: column; background-color: #405f7f; width:100%;position: absolute; top: 100px';
        Array.from(document.getElementsByClassName('menuItem')).forEach(elem => {elem.style.width = "100%";});
        
    } else {
        document.getElementsByClassName('fa-chevron-down')[0].style.display = "inline-block";
        document.getElementsByClassName('fa-chevron-right')[0].style.display = "none";
        document.getElementById('mainMenu').style.display = 'none';
    }
}

function clickCheck(elHeight, clickY) {
    if (clickY > 100) {
        changeClass ()
    }
}

function changeClass (el) {
    if (el.classList.contains("notSelectedM")) {
        el.className = "selectedM";
    } else {
        el.className = "notSelectedM";
    }
    showMenu(el);
}


/***/ }),

/***/ "./src/styles/ms-ss.css":
/*!******************************!*\
  !*** ./src/styles/ms-ss.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "styles/ms-ss.css";

/***/ }),

/***/ "./src/styles/scss/fontawesome.scss":
/*!******************************************!*\
  !*** ./src/styles/scss/fontawesome.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/styles/scss/solid.scss":
/*!************************************!*\
  !*** ./src/styles/scss/solid.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/styles/styles.scss":
/*!********************************!*\
  !*** ./src/styles/styles.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZ3MvbmVlZHBpeF9jb21fZWRpdGVkX2ltYWdlLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL21zLXNzLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL3Njc3MvZm9udGF3ZXNvbWUuc2Nzcz80MmRlIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvc2Nzcy9zb2xpZC5zY3NzPzIyODAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9zdHlsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsaUJBQWlCLHFCQUF1Qix1Qzs7Ozs7Ozs7Ozs7O0FDQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQThCO0FBQ1U7QUFDTjtBQUNXO0FBQ0g7QUFDZDs7QUFFYjs7QUFFZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZLDREQUFnQjtBQUM1QixTQUFTOztBQUVUO0FBQ0EsWUFBWSw0REFBZ0I7QUFDNUIsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsZ0JBQWdCLDREQUFnQixzQztBQUNoQztBQUNBLFNBQVM7QUFDVDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUNNO0FBQ1A7QUFDQTtBQUNBO0FBQ0Esa0VBQWtFLHdCQUF3QiwyQkFBMkIsWUFBWSxtQkFBbUI7QUFDcEosaUZBQWlGLDJCQUEyQjs7QUFFNUcsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzVCQSxpQkFBaUIscUJBQXVCLHNCOzs7Ozs7Ozs7OztBQ0F4Qyx1Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx1QyIsImZpbGUiOiJhcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvdmotdHJhdmVsLWFzc2lzdGFuY2UvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1ncy9uZWVkcGl4X2NvbV9lZGl0ZWRfaW1hZ2UucG5nXCI7IiwiaW1wb3J0ICcuL3N0eWxlcy9zdHlsZXMuc2Nzcyc7XHJcbmltcG9ydCBcIi4vc3R5bGVzL3Njc3MvZm9udGF3ZXNvbWUuc2Nzc1wiO1xyXG5pbXBvcnQgXCIuL3N0eWxlcy9zY3NzL3NvbGlkLnNjc3NcIjtcclxuaW1wb3J0ICcuL2ltZ3MvbmVlZHBpeF9jb21fZWRpdGVkX2ltYWdlLnBuZyc7XHJcbmltcG9ydCAqIGFzIE1lbnUgZnJvbSBcIi4vc2NyaXB0cy9tZW51LmpzXCI7XHJcbmltcG9ydCBcIi4vc3R5bGVzL21zLXNzLmNzc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVmRm4gKCl7XHJcbiAgICBcclxuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDgyOCB8fCB3aW5kb3cuaW5uZXJXaWR0aCA8IHdpbmRvdy5pbm5lckhlaWdodCkge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluTWVudScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZmEtY2hldnJvbi1kb3duJylbMF0uc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51SWNvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXYgPT4ge1xyXG4gICAgICAgICAgICBNZW51LmNoYW5nZUNsYXNzKGV2LnBhdGhbMV0pO1xyXG4gICAgICAgIH0sZmFsc2UpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluTWVudScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXYgPT4ge1xyXG4gICAgICAgICAgICBNZW51LmNoYW5nZUNsYXNzKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51SWNvbicpKTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldiA9PiB7XHJcbiAgICAgICAgICAgIGlmIChldi5jbGllbnRZID4gNTAwICYmIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51SWNvbicpLmNsYXNzTGlzdC5jb250YWlucygnc2VsZWN0ZWRNJykpIHtcclxuICAgICAgICAgICAgICAgIE1lbnUuY2hhbmdlQ2xhc3MoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnVJY29uJykpOyAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3JlYWR5c3RhdGVjaGFuZ2UnLCAoZXZlbnQpID0+IHtcclxuICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImNvbXBsZXRlXCIpIHtcclxuICAgICAgICBkZWZGbigpO1xyXG4gICAgICAgIFxyXG4gICAgdmFyIG1vYlN0eWxlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcclxuICAgIG1vYlN0eWxlcy50eXBlID1cInRleHQvY3NzXCJcclxuICAgIG1vYlN0eWxlcy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcclxuICAgIG1vYlN0eWxlcy5tZWRpYSA9IFwib25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgyOHB4KVwiO1xyXG4gICAgbW9iU3R5bGVzLmhyZWYgPSBcIi4vc3R5bGVzL21zLXNzLmNzc1wiO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXS5hcHBlbmRDaGlsZChtb2JTdHlsZXMpO1xyXG4gICAgXHJcbiAgICB9XHJcbn0pO1xyXG5cclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLChldikgPT4ge1xyXG4gICAgZGVmRm4oKTtcclxufSk7XHJcblxyXG5cclxuIiwiXHJcbmV4cG9ydCBmdW5jdGlvbiBzaG93TWVudShlbGVtKSB7XHJcbiAgICBpZiAoZWxlbS5jbGFzc0xpc3QuY29udGFpbnMoJ3NlbGVjdGVkTScpKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZmEtY2hldnJvbi1kb3duJylbMF0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ZhLWNoZXZyb24tcmlnaHQnKVswXS5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbk1lbnUnKS5zdHlsZSA9ICdkaXNwbGF5OmZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGJhY2tncm91bmQtY29sb3I6ICM0MDVmN2Y7IHdpZHRoOjEwMCU7cG9zaXRpb246IGFic29sdXRlOyB0b3A6IDEwMHB4JztcclxuICAgICAgICBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21lbnVJdGVtJykpLmZvckVhY2goZWxlbSA9PiB7ZWxlbS5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO30pO1xyXG4gICAgICAgIFxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmYS1jaGV2cm9uLWRvd24nKVswXS5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmYS1jaGV2cm9uLXJpZ2h0JylbMF0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluTWVudScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjbGlja0NoZWNrKGVsSGVpZ2h0LCBjbGlja1kpIHtcclxuICAgIGlmIChjbGlja1kgPiAxMDApIHtcclxuICAgICAgICBjaGFuZ2VDbGFzcyAoKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlQ2xhc3MgKGVsKSB7XHJcbiAgICBpZiAoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKFwibm90U2VsZWN0ZWRNXCIpKSB7XHJcbiAgICAgICAgZWwuY2xhc3NOYW1lID0gXCJzZWxlY3RlZE1cIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZWwuY2xhc3NOYW1lID0gXCJub3RTZWxlY3RlZE1cIjtcclxuICAgIH1cclxuICAgIHNob3dNZW51KGVsKTtcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdHlsZXMvbXMtc3MuY3NzXCI7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==