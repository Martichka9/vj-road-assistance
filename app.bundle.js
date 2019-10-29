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
/******/ 	__webpack_require__.p = "";
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
/*! exports provided: showMenu, clickCheck, changeClass, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showMenu", function() { return showMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clickCheck", function() { return clickCheck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeClass", function() { return changeClass; });
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
/* harmony import */ var _styles_ms_ss_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/ms-ss.scss */ "./src/styles/ms-ss.scss");
/* harmony import */ var _styles_ms_ss_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_ms_ss_scss__WEBPACK_IMPORTED_MODULE_5__);







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

function defFn (){
    if (window.innerWidth < 828 ) {
        document.getElementById('mainMenu').style.display = 'none';
        document.getElementsByClassName('fa-chevron-down')[0].style.display = "inline-block";

        document.getElementById('menuIcon').addEventListener('click', ev => {
            changeClass(ev.path[1]);
        },false);

        document.getElementById('mainMenu').addEventListener('click', ev => {
            changeClass(document.getElementById('menuIcon'));
        })
    }

}

document.addEventListener('readystatechange', (event) => {
    if (document.readyState === "complete") {
        defFn();
    }
});




/***/ }),

/***/ "./src/scripts/menu.js":
/*!*****************************!*\
  !*** ./src/scripts/menu.js ***!
  \*****************************/
/*! exports provided: menuOnOff */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menuOnOff", function() { return menuOnOff; });
function menuOnOff(){
   
}



/***/ }),

/***/ "./src/styles/ms-ss.scss":
/*!*******************************!*\
  !*** ./src/styles/ms-ss.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZ3MvbmVlZHBpeF9jb21fZWRpdGVkX2ltYWdlLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL21zLXNzLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9zY3NzL2ZvbnRhd2Vzb21lLnNjc3M/NDJkZSIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL3Njc3Mvc29saWQuc2Nzcz8yMjgwIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvc3R5bGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLGlCQUFpQixxQkFBdUIsdUM7Ozs7Ozs7Ozs7OztBQ0F4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE4QjtBQUNVO0FBQ047QUFDVztBQUNIO0FBQ2I7O0FBRXRCO0FBQ1A7QUFDQTtBQUNBO0FBQ0Esa0VBQWtFLHdCQUF3QiwyQkFBMkIsWUFBWSxtQkFBbUI7QUFDcEosaUZBQWlGLDJCQUEyQjs7QUFFNUcsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3hERDtBQUFBO0FBQU87O0FBRVA7Ozs7Ozs7Ozs7Ozs7QUNGQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx1QyIsImZpbGUiOiJhcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWdzL25lZWRwaXhfY29tX2VkaXRlZF9pbWFnZS5wbmdcIjsiLCJpbXBvcnQgJy4vc3R5bGVzL3N0eWxlcy5zY3NzJztcclxuaW1wb3J0IFwiLi9zdHlsZXMvc2Nzcy9mb250YXdlc29tZS5zY3NzXCI7XHJcbmltcG9ydCBcIi4vc3R5bGVzL3Njc3Mvc29saWQuc2Nzc1wiO1xyXG5pbXBvcnQgJy4vaW1ncy9uZWVkcGl4X2NvbV9lZGl0ZWRfaW1hZ2UucG5nJztcclxuaW1wb3J0ICogYXMgTWVudSBmcm9tIFwiLi9zY3JpcHRzL21lbnUuanNcIjtcclxuaW1wb3J0IFwiLi9zdHlsZXMvbXMtc3Muc2Nzc1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNob3dNZW51KGVsZW0pIHtcclxuICAgIGlmIChlbGVtLmNsYXNzTGlzdC5jb250YWlucygnc2VsZWN0ZWRNJykpIHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmYS1jaGV2cm9uLWRvd24nKVswXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZmEtY2hldnJvbi1yaWdodCcpWzBdLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluTWVudScpLnN0eWxlID0gJ2Rpc3BsYXk6ZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgYmFja2dyb3VuZC1jb2xvcjogIzQwNWY3Zjsgd2lkdGg6MTAwJTtwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogMTAwcHgnO1xyXG4gICAgICAgIEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbWVudUl0ZW0nKSkuZm9yRWFjaChlbGVtID0+IHtlbGVtLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7fSk7XHJcbiAgICAgICAgXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ZhLWNoZXZyb24tZG93bicpWzBdLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ZhLWNoZXZyb24tcmlnaHQnKVswXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5NZW51Jykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNsaWNrQ2hlY2soZWxIZWlnaHQsIGNsaWNrWSkge1xyXG4gICAgaWYgKGNsaWNrWSA+IDEwMCkge1xyXG4gICAgICAgIGNoYW5nZUNsYXNzICgpXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VDbGFzcyAoZWwpIHtcclxuICAgIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoXCJub3RTZWxlY3RlZE1cIikpIHtcclxuICAgICAgICBlbC5jbGFzc05hbWUgPSBcInNlbGVjdGVkTVwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBlbC5jbGFzc05hbWUgPSBcIm5vdFNlbGVjdGVkTVwiO1xyXG4gICAgfVxyXG4gICAgc2hvd01lbnUoZWwpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZWZGbiAoKXtcclxuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDgyOCApIHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbk1lbnUnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ZhLWNoZXZyb24tZG93bicpWzBdLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudUljb24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ID0+IHtcclxuICAgICAgICAgICAgY2hhbmdlQ2xhc3MoZXYucGF0aFsxXSk7XHJcbiAgICAgICAgfSxmYWxzZSk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluTWVudScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXYgPT4ge1xyXG4gICAgICAgICAgICBjaGFuZ2VDbGFzcyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudUljb24nKSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3JlYWR5c3RhdGVjaGFuZ2UnLCAoZXZlbnQpID0+IHtcclxuICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImNvbXBsZXRlXCIpIHtcclxuICAgICAgICBkZWZGbigpO1xyXG4gICAgfVxyXG59KTtcclxuXHJcblxyXG4iLCJleHBvcnQgZnVuY3Rpb24gbWVudU9uT2ZmKCl7XHJcbiAgIFxyXG59XHJcblxyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9