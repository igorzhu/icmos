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

/***/ "./resources/js/templates/paginator.js":
/*!*********************************************!*\
  !*** ./resources/js/templates/paginator.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ paginator)
/* harmony export */ });
function paginator(elem, where) {
  let paginator = `<div class="paginator">
            <button class="paginator__btn paginator__btn_l paginator__btn_disabled"></button>
            <span class="paginator__text">СТРАНИЦА 1 ИЗ 11004</span>
            <button class="paginator__btn paginator__btn_r"></button>
        </div>`;
  elem.insertAdjacentHTML(where, paginator);
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
/* harmony import */ var _templates_head_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./templates/head.js */ "./resources/js/templates/head.js");
/* harmony import */ var _templates_paginator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./templates/paginator.js */ "./resources/js/templates/paginator.js");
console.log('page start news js');

//Импортируем html-шаблоны на js:



//Вставляем html-шаблоны:
//head('Новости');
let main = document.querySelector('main');
(0,_templates_paginator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(main, 'beforeend');
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlLFNBQVNBLElBQUlBLENBQUNDLEtBQUssRUFBQztFQUUvQixJQUFJQyxXQUFXLEdBQUk7QUFDdkIscUJBQXFCRCxLQUFNO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUZBQW1GOztFQUUvRTtFQUNBRSxRQUFRLENBQUNILElBQUksQ0FBQ0ksa0JBQWtCLENBQUMsWUFBWSxFQUFFRixXQUFXLENBQUM7QUFDL0Q7Ozs7Ozs7Ozs7Ozs7O0FDbEJlLFNBQVNHLFNBQVNBLENBQUNDLElBQUksRUFBRUMsS0FBSyxFQUFDO0VBRTFDLElBQUlGLFNBQVMsR0FBSTtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxlQUFlO0VBRVhDLElBQUksQ0FBQ0Ysa0JBQWtCLENBQUNHLEtBQUssRUFBRUYsU0FBUyxDQUFDO0FBQzdDOzs7Ozs7VUNUQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05BRyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQzs7QUFFakM7QUFDdUM7QUFDVTs7QUFFakQ7QUFDQTtBQUNBLElBQUlDLElBQUksR0FBR1AsUUFBUSxDQUFDUSxhQUFhLENBQUMsTUFBTSxDQUFDO0FBQ3pDTixtRUFBUyxDQUFDSyxJQUFJLEVBQUUsV0FBVyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pY21vcy8uL3Jlc291cmNlcy9qcy90ZW1wbGF0ZXMvaGVhZC5qcyIsIndlYnBhY2s6Ly9pY21vcy8uL3Jlc291cmNlcy9qcy90ZW1wbGF0ZXMvcGFnaW5hdG9yLmpzIiwid2VicGFjazovL2ljbW9zL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2ljbW9zL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9pY21vcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2ljbW9zL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vaWNtb3MvLi9yZXNvdXJjZXMvanMvbmV3cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoZWFkKHRpdGxlKXtcclxuXHJcbiAgICBsZXQgaGVhZENvbnRlbnQgPSBgPG1ldGEgY2hhcnNldD1cIlVURi04XCI+XHJcbiAgICAgICAgICAgIDx0aXRsZT4ke3RpdGxlfTwvdGl0bGU+XHJcbiAgICAgICAgICAgIDxsaW5rIHJlbD1cInNob3J0Y3V0IGljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCI+XHJcbiAgICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCI+XHJcbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xLG1heGltdW0tc2NhbGU9M1wiPlxyXG4gICAgICAgICAgICA8bWV0YSBodHRwLWVxdWl2PVwiWC1VQS1Db21wYXRpYmxlXCIgY29udGVudD1cIklFPWVkZ2UsY2hyb21lPTFcIj5cclxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cIkhhbmRoZWxkRnJpZW5kbHlcIiBjb250ZW50PVwidHJ1ZVwiPlxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICA8IS0tW2lmIGx0IElFIDldPlxyXG4gICAgICAgICAgICA8c2NyaXB0IHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIiBzcmM9XCJodHRwOi8vaHRtbDVzaGl2Lmdvb2dsZWNvZGUuY29tL3N2bi90cnVuay9odG1sNS5qc1wiPjwvc2NyaXB0PjwhW2VuZGlmXS0tPlxyXG4gICAgICAgICAgICA8IS0tW2lmIGx0IElFIDEwXT5cclxuICAgICAgICAgICAgPHNjcmlwdCB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCIgc3JjPVwiaHR0cDovL3N0YXQuYWlmLnJ1L2pzL2NzczMtbXVsdGktY29sdW1uLmpzXCI+PC9zY3JpcHQ+PCFbZW5kaWZdLS0+XHJcbiAgICAgICAgICAgIDwhLS1saW5rIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiBocmVmPVwiLi4vY3NzL3N0eWxlLmNzc1wiIC8tLT5gO1xyXG5cclxuICAgIC8vJCgnaHRtbCcpLnByZXBlbmQoaGVhZCk7XHJcbiAgICBkb2N1bWVudC5oZWFkLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIGhlYWRDb250ZW50KTtcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYWdpbmF0b3IoZWxlbSwgd2hlcmUpe1xyXG5cclxuICAgIGxldCBwYWdpbmF0b3IgPSBgPGRpdiBjbGFzcz1cInBhZ2luYXRvclwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicGFnaW5hdG9yX19idG4gcGFnaW5hdG9yX19idG5fbCBwYWdpbmF0b3JfX2J0bl9kaXNhYmxlZFwiPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInBhZ2luYXRvcl9fdGV4dFwiPtCh0KLQoNCQ0J3QmNCm0JAgMSDQmNCXIDExMDA0PC9zcGFuPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicGFnaW5hdG9yX19idG4gcGFnaW5hdG9yX19idG5fclwiPjwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PmA7XHJcblxyXG4gICAgZWxlbS5pbnNlcnRBZGphY2VudEhUTUwod2hlcmUsIHBhZ2luYXRvcik7XHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImNvbnNvbGUubG9nKCdwYWdlIHN0YXJ0IG5ld3MganMnKTtcblxuLy/QmNC80L/QvtGA0YLQuNGA0YPQtdC8IGh0bWwt0YjQsNCx0LvQvtC90Ysg0L3QsCBqczpcbmltcG9ydCBoZWFkIGZyb20gJy4vdGVtcGxhdGVzL2hlYWQuanMnO1xuaW1wb3J0IHBhZ2luYXRvciBmcm9tICcuL3RlbXBsYXRlcy9wYWdpbmF0b3IuanMnO1xuXG4vL9CS0YHRgtCw0LLQu9GP0LXQvCBodG1sLdGI0LDQsdC70L7QvdGLOlxuLy9oZWFkKCfQndC+0LLQvtGB0YLQuCcpO1xubGV0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG5wYWdpbmF0b3IobWFpbiwgJ2JlZm9yZWVuZCcpOyJdLCJuYW1lcyI6WyJoZWFkIiwidGl0bGUiLCJoZWFkQ29udGVudCIsImRvY3VtZW50IiwiaW5zZXJ0QWRqYWNlbnRIVE1MIiwicGFnaW5hdG9yIiwiZWxlbSIsIndoZXJlIiwiY29uc29sZSIsImxvZyIsIm1haW4iLCJxdWVyeVNlbGVjdG9yIl0sInNvdXJjZVJvb3QiOiIifQ==