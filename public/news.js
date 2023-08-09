/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/templates/head.js":
/*!****************************************!*\
  !*** ./resources/js/templates/head.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ head)
/* harmony export */ });
function head(title) {
  let headContent = `<meta charset="UTF-8">
            <title>${title}</title>
            <link rel="shortcut icon" href="/favicon.ico">
            <link rel="icon" href="/favicon.ico">
            <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=3">
            <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
            <meta name="HandheldFriendly" content="true">
        
            <!--[if lt IE 9]>
            <script type="text/javascript" src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->
            <!--[if lt IE 10]>
            <script type="text/javascript" src="http://stat.aif.ru/js/css3-multi-column.js"></script><![endif]-->
            <!--link rel="stylesheet" type="text/css" href="../css/style.css" /-->`;

  //$('html').prepend(head);
  document.head.insertAdjacentHTML('afterbegin', headContent);
}

/***/ }),

/***/ "./resources/sass/index.scss":
/*!***********************************!*\
  !*** ./resources/sass/index.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************!*\
  !*** ./resources/js/news.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/index.scss */ "./resources/sass/index.scss");
/* harmony import */ var _templates_head_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./templates/head.js */ "./resources/js/templates/head.js");

console.log('page start news js');

//Импортируем html-шаблоны на js:


//Вставляем html-шаблоны:
(0,_templates_head_js__WEBPACK_IMPORTED_MODULE_1__["default"])('Новости');
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlLFNBQVNBLElBQUlBLENBQUNDLEtBQUssRUFBQztFQUUvQixJQUFJQyxXQUFXLEdBQUk7QUFDdkIscUJBQXFCRCxLQUFNO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUZBQW1GOztFQUUvRTtFQUNBRSxRQUFRLENBQUNILElBQUksQ0FBQ0ksa0JBQWtCLENBQUMsWUFBWSxFQUFFRixXQUFXLENBQUM7QUFDL0Q7Ozs7Ozs7Ozs7O0FDbEJBOzs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNONEI7QUFDMUJHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLG9CQUFvQixDQUFDOztBQUVuQztBQUN1Qzs7QUFFdkM7QUFDQU4sOERBQUksQ0FBQyxTQUFTLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2ljbW9zLy4vcmVzb3VyY2VzL2pzL3RlbXBsYXRlcy9oZWFkLmpzIiwid2VicGFjazovL2ljbW9zLy4vcmVzb3VyY2VzL3Nhc3MvaW5kZXguc2Nzcz81YTYzIiwid2VicGFjazovL2ljbW9zL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2ljbW9zL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9pY21vcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2ljbW9zL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vaWNtb3MvLi9yZXNvdXJjZXMvanMvbmV3cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoZWFkKHRpdGxlKXtcclxuXHJcbiAgICBsZXQgaGVhZENvbnRlbnQgPSBgPG1ldGEgY2hhcnNldD1cIlVURi04XCI+XHJcbiAgICAgICAgICAgIDx0aXRsZT4ke3RpdGxlfTwvdGl0bGU+XHJcbiAgICAgICAgICAgIDxsaW5rIHJlbD1cInNob3J0Y3V0IGljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCI+XHJcbiAgICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCI+XHJcbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xLG1heGltdW0tc2NhbGU9M1wiPlxyXG4gICAgICAgICAgICA8bWV0YSBodHRwLWVxdWl2PVwiWC1VQS1Db21wYXRpYmxlXCIgY29udGVudD1cIklFPWVkZ2UsY2hyb21lPTFcIj5cclxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cIkhhbmRoZWxkRnJpZW5kbHlcIiBjb250ZW50PVwidHJ1ZVwiPlxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICA8IS0tW2lmIGx0IElFIDldPlxyXG4gICAgICAgICAgICA8c2NyaXB0IHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIiBzcmM9XCJodHRwOi8vaHRtbDVzaGl2Lmdvb2dsZWNvZGUuY29tL3N2bi90cnVuay9odG1sNS5qc1wiPjwvc2NyaXB0PjwhW2VuZGlmXS0tPlxyXG4gICAgICAgICAgICA8IS0tW2lmIGx0IElFIDEwXT5cclxuICAgICAgICAgICAgPHNjcmlwdCB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCIgc3JjPVwiaHR0cDovL3N0YXQuYWlmLnJ1L2pzL2NzczMtbXVsdGktY29sdW1uLmpzXCI+PC9zY3JpcHQ+PCFbZW5kaWZdLS0+XHJcbiAgICAgICAgICAgIDwhLS1saW5rIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiBocmVmPVwiLi4vY3NzL3N0eWxlLmNzc1wiIC8tLT5gO1xyXG5cclxuICAgIC8vJCgnaHRtbCcpLnByZXBlbmQoaGVhZCk7XHJcbiAgICBkb2N1bWVudC5oZWFkLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIGhlYWRDb250ZW50KTtcclxufVxyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi4vc2Fzcy9pbmRleC5zY3NzJztcbiAgY29uc29sZS5sb2coJ3BhZ2Ugc3RhcnQgbmV3cyBqcycpO1xuXG4vL9CY0LzQv9C+0YDRgtC40YDRg9C10LwgaHRtbC3RiNCw0LHQu9C+0L3RiyDQvdCwIGpzOlxuaW1wb3J0IGhlYWQgZnJvbSAnLi90ZW1wbGF0ZXMvaGVhZC5qcyc7XG5cbi8v0JLRgdGC0LDQstC70Y/QtdC8IGh0bWwt0YjQsNCx0LvQvtC90Ys6XG5oZWFkKCfQndC+0LLQvtGB0YLQuCcpOyJdLCJuYW1lcyI6WyJoZWFkIiwidGl0bGUiLCJoZWFkQ29udGVudCIsImRvY3VtZW50IiwiaW5zZXJ0QWRqYWNlbnRIVE1MIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=