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
        var mobStyles = document.createElement('link');
        mobStyles.type ="text/css"
        mobStyles.rel = "stylesheet";
        mobStyles.media = "only screen and (max-width: 828px)";
        mobStyles.href = "./styles/ms-ss.css";
        document.getElementsByTagName('head')[0].appendChild(mobStyles);
        
        defFn();    
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZ3MvbmVlZHBpeF9jb21fZWRpdGVkX2ltYWdlLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL21zLXNzLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL3Njc3MvZm9udGF3ZXNvbWUuc2Nzcz80MmRlIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvc2Nzcy9zb2xpZC5zY3NzPzIyODAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9zdHlsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsaUJBQWlCLHFCQUF1Qix1Qzs7Ozs7Ozs7Ozs7O0FDQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQThCO0FBQ1U7QUFDTjtBQUNXO0FBQ0g7QUFDZDs7QUFFYjs7QUFFZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZLDREQUFnQjtBQUM1QixTQUFTOztBQUVUO0FBQ0EsWUFBWSw0REFBZ0I7QUFDNUIsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsZ0JBQWdCLDREQUFnQixzQztBQUNoQztBQUNBLFNBQVM7QUFDVDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdCO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3Q007QUFDUDtBQUNBO0FBQ0E7QUFDQSxrRUFBa0Usd0JBQXdCLDJCQUEyQixZQUFZLG1CQUFtQjtBQUNwSixpRkFBaUYsMkJBQTJCOztBQUU1RyxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDNUJBLGlCQUFpQixxQkFBdUIsc0I7Ozs7Ozs7Ozs7O0FDQXhDLHVDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHVDIiwiZmlsZSI6ImFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi92ai10cmF2ZWwtYXNzaXN0YW5jZS9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWdzL25lZWRwaXhfY29tX2VkaXRlZF9pbWFnZS5wbmdcIjsiLCJpbXBvcnQgJy4vc3R5bGVzL3N0eWxlcy5zY3NzJztcclxuaW1wb3J0IFwiLi9zdHlsZXMvc2Nzcy9mb250YXdlc29tZS5zY3NzXCI7XHJcbmltcG9ydCBcIi4vc3R5bGVzL3Njc3Mvc29saWQuc2Nzc1wiO1xyXG5pbXBvcnQgJy4vaW1ncy9uZWVkcGl4X2NvbV9lZGl0ZWRfaW1hZ2UucG5nJztcclxuaW1wb3J0ICogYXMgTWVudSBmcm9tIFwiLi9zY3JpcHRzL21lbnUuanNcIjtcclxuaW1wb3J0IFwiLi9zdHlsZXMvbXMtc3MuY3NzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZWZGbiAoKXtcclxuICAgIFxyXG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgODI4IHx8IHdpbmRvdy5pbm5lcldpZHRoIDwgd2luZG93LmlubmVySGVpZ2h0KSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5NZW51Jykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmYS1jaGV2cm9uLWRvd24nKVswXS5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnVJY29uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldiA9PiB7XHJcbiAgICAgICAgICAgIE1lbnUuY2hhbmdlQ2xhc3MoZXYucGF0aFsxXSk7XHJcbiAgICAgICAgfSxmYWxzZSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5NZW51JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldiA9PiB7XHJcbiAgICAgICAgICAgIE1lbnUuY2hhbmdlQ2xhc3MoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnVJY29uJykpO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ID0+IHtcclxuICAgICAgICAgICAgaWYgKGV2LmNsaWVudFkgPiA1MDAgJiYgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnVJY29uJykuY2xhc3NMaXN0LmNvbnRhaW5zKCdzZWxlY3RlZE0nKSkge1xyXG4gICAgICAgICAgICAgICAgTWVudS5jaGFuZ2VDbGFzcyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudUljb24nKSk7ICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncmVhZHlzdGF0ZWNoYW5nZScsIChldmVudCkgPT4ge1xyXG4gICAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09IFwiY29tcGxldGVcIikge1xyXG4gICAgICAgIHZhciBtb2JTdHlsZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XHJcbiAgICAgICAgbW9iU3R5bGVzLnR5cGUgPVwidGV4dC9jc3NcIlxyXG4gICAgICAgIG1vYlN0eWxlcy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcclxuICAgICAgICBtb2JTdHlsZXMubWVkaWEgPSBcIm9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MjhweClcIjtcclxuICAgICAgICBtb2JTdHlsZXMuaHJlZiA9IFwiLi9zdHlsZXMvbXMtc3MuY3NzXCI7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXS5hcHBlbmRDaGlsZChtb2JTdHlsZXMpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGRlZkZuKCk7ICAgIFxyXG4gICAgfVxyXG59KTtcclxuXHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywoZXYpID0+IHtcclxuICAgIGRlZkZuKCk7XHJcbn0pO1xyXG5cclxuXHJcbiIsIlxyXG5leHBvcnQgZnVuY3Rpb24gc2hvd01lbnUoZWxlbSkge1xyXG4gICAgaWYgKGVsZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdzZWxlY3RlZE0nKSkge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ZhLWNoZXZyb24tZG93bicpWzBdLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmYS1jaGV2cm9uLXJpZ2h0JylbMF0uc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5NZW51Jykuc3R5bGUgPSAnZGlzcGxheTpmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBiYWNrZ3JvdW5kLWNvbG9yOiAjNDA1ZjdmOyB3aWR0aDoxMDAlO3Bvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiAxMDBweCc7XHJcbiAgICAgICAgQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtZW51SXRlbScpKS5mb3JFYWNoKGVsZW0gPT4ge2VsZW0uc3R5bGUud2lkdGggPSBcIjEwMCVcIjt9KTtcclxuICAgICAgICBcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZmEtY2hldnJvbi1kb3duJylbMF0uc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZmEtY2hldnJvbi1yaWdodCcpWzBdLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbk1lbnUnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2xpY2tDaGVjayhlbEhlaWdodCwgY2xpY2tZKSB7XHJcbiAgICBpZiAoY2xpY2tZID4gMTAwKSB7XHJcbiAgICAgICAgY2hhbmdlQ2xhc3MgKClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZUNsYXNzIChlbCkge1xyXG4gICAgaWYgKGVsLmNsYXNzTGlzdC5jb250YWlucyhcIm5vdFNlbGVjdGVkTVwiKSkge1xyXG4gICAgICAgIGVsLmNsYXNzTmFtZSA9IFwic2VsZWN0ZWRNXCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGVsLmNsYXNzTmFtZSA9IFwibm90U2VsZWN0ZWRNXCI7XHJcbiAgICB9XHJcbiAgICBzaG93TWVudShlbCk7XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3R5bGVzL21zLXNzLmNzc1wiOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=