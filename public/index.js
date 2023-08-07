/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/db/db-new.js":
/*!********************************!*\
  !*** ./resources/db/db-new.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   arrNew: () => (/* binding */ arrNew)
/* harmony export */ });
const arrNew = [{
  time: '21:24',
  title: 'Праздник цветения сакуры «Любование цветами» пройдет в парке «Царицыно»'
}, {
  time: '13:24',
  title: ' В Академическом районе появится бизнес-центр площадью 74 тыс. кв. м'
}, {
  time: '13:00',
  title: 'Бахрушинский музей впервые покажет уникальные фото Майи Плисецкой'
}, {
  time: '12:38',
  title: 'Столичные росгвардейцы задержали молодого человека, который пробрался в магазин и уснул'
}, {
  time: '12:14',
  title: 'В рамках строительства подземной части ЖК «Бадаевский» возвели 360 колонн'
}, {
  time: '11:46',
  title: 'Собянин пригласил жителей Москвы на городской семейный фестиваль «Мой район»'
}, {
  time: '09:24',
  title: 'Праздник цветения сакуры «Любование цветами» пройдет в парке «Царицыно»'
}];

/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _db_db_new__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../db/db-new */ "./resources/db/db-new.js");


// const data = fetch('http://fjdkslfjkds.fjdfj.ru', {
//   method: 'GET',
//   data: 'hjkhjk'
// });

const newsList = document.querySelector('ul.news-block__list');
_db_db_new__WEBPACK_IMPORTED_MODULE_0__.arrNew.forEach(elem => {
  const itemLi = document.createElement('li');
  itemLi.insertAdjacentHTML('beforeend', `<time>${elem.time}</time>
    <a href="./news.html">
      <span>${elem.title}</span>
    </a>
  `);
  console.log(itemLi);
  newsList.append(itemLi);
});

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
/*!****************************!*\
  !*** ./resources/index.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/index.scss */ "./resources/sass/index.scss");
/* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/app */ "./resources/js/app.js");


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBTyxNQUFNQSxNQUFNLEdBQUcsQ0FDcEI7RUFDRUMsSUFBSSxFQUFFLE9BQU87RUFDYkMsS0FBSyxFQUFFO0FBQ1QsQ0FBQyxFQUNEO0VBQ0VELElBQUksRUFBRSxPQUFPO0VBQ2JDLEtBQUssRUFBRTtBQUNULENBQUMsRUFDRDtFQUNFRCxJQUFJLEVBQUUsT0FBTztFQUNiQyxLQUFLLEVBQUU7QUFDVCxDQUFDLEVBQ0Q7RUFDRUQsSUFBSSxFQUFFLE9BQU87RUFDYkMsS0FBSyxFQUFFO0FBQ1QsQ0FBQyxFQUNEO0VBQ0VELElBQUksRUFBRSxPQUFPO0VBQ2JDLEtBQUssRUFBRTtBQUNULENBQUMsRUFDRDtFQUNFRCxJQUFJLEVBQUUsT0FBTztFQUNiQyxLQUFLLEVBQUU7QUFDVCxDQUFDLEVBQ0Q7RUFDRUQsSUFBSSxFQUFFLE9BQU87RUFDYkMsS0FBSyxFQUFFO0FBQ1QsQ0FBQyxDQUNGOzs7Ozs7Ozs7Ozs7QUM3QnFDOztBQUV0QztBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQyxRQUFRLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLHFCQUFxQixDQUFDO0FBRTlETCw4Q0FBTSxDQUFDTSxPQUFPLENBQUNDLElBQUksSUFBSTtFQUNyQixNQUFNQyxNQUFNLEdBQUdKLFFBQVEsQ0FBQ0ssYUFBYSxDQUFDLElBQUksQ0FBQztFQUMzQ0QsTUFBTSxDQUFDRSxrQkFBa0IsQ0FBQyxXQUFXLEVBQ3BDLFNBQVFILElBQUksQ0FBQ04sSUFBSztBQUNyQjtBQUNBLGNBQWNNLElBQUksQ0FBQ0wsS0FBTTtBQUN6QjtBQUNBLEdBQ0UsQ0FBQztFQUNEUyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0osTUFBTSxDQUFDO0VBQ25CTCxRQUFRLENBQUNVLE1BQU0sQ0FBQ0wsTUFBTSxDQUFDO0FBR3pCLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7QUN0QkY7Ozs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ04yQiIsInNvdXJjZXMiOlsid2VicGFjazovL2ljbW9zLy4vcmVzb3VyY2VzL2RiL2RiLW5ldy5qcyIsIndlYnBhY2s6Ly9pY21vcy8uL3Jlc291cmNlcy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vaWNtb3MvLi9yZXNvdXJjZXMvc2Fzcy9pbmRleC5zY3NzPzVhNjMiLCJ3ZWJwYWNrOi8vaWNtb3Mvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vaWNtb3Mvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2ljbW9zL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vaWNtb3Mvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9pY21vcy8uL3Jlc291cmNlcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgYXJyTmV3ID0gW1xuICB7XG4gICAgdGltZTogJzIxOjI0JyxcbiAgICB0aXRsZTogJ9Cf0YDQsNC30LTQvdC40Log0YbQstC10YLQtdC90LjRjyDRgdCw0LrRg9GA0YsgwqvQm9GO0LHQvtCy0LDQvdC40LUg0YbQstC10YLQsNC80LjCuyDQv9GA0L7QudC00LXRgiDQsiDQv9Cw0YDQutC1IMKr0KbQsNGA0LjRhtGL0L3QvsK7J1xuICB9LFxuICB7XG4gICAgdGltZTogJzEzOjI0JyxcbiAgICB0aXRsZTogJyDQkiDQkNC60LDQtNC10LzQuNGH0LXRgdC60L7QvCDRgNCw0LnQvtC90LUg0L/QvtGP0LLQuNGC0YHRjyDQsdC40LfQvdC10YEt0YbQtdC90YLRgCDQv9C70L7RidCw0LTRjNGOIDc0INGC0YvRgS4g0LrQsi4g0LwnXG4gIH0sXG4gIHtcbiAgICB0aW1lOiAnMTM6MDAnLFxuICAgIHRpdGxlOiAn0JHQsNGF0YDRg9GI0LjQvdGB0LrQuNC5INC80YPQt9C10Lkg0LLQv9C10YDQstGL0LUg0L/QvtC60LDQttC10YIg0YPQvdC40LrQsNC70YzQvdGL0LUg0YTQvtGC0L4g0JzQsNC50Lgg0J/Qu9C40YHQtdGG0LrQvtC5J1xuICB9LFxuICB7XG4gICAgdGltZTogJzEyOjM4JyxcbiAgICB0aXRsZTogJ9Ch0YLQvtC70LjRh9C90YvQtSDRgNC+0YHQs9Cy0LDRgNC00LXQudGG0Ysg0LfQsNC00LXRgNC20LDQu9C4INC80L7Qu9C+0LTQvtCz0L4g0YfQtdC70L7QstC10LrQsCwg0LrQvtGC0L7RgNGL0Lkg0L/RgNC+0LHRgNCw0LvRgdGPINCyINC80LDQs9Cw0LfQuNC9INC4INGD0YHQvdGD0LsnXG4gIH0sXG4gIHtcbiAgICB0aW1lOiAnMTI6MTQnLFxuICAgIHRpdGxlOiAn0JIg0YDQsNC80LrQsNGFINGB0YLRgNC+0LjRgtC10LvRjNGB0YLQstCwINC/0L7QtNC30LXQvNC90L7QuSDRh9Cw0YHRgtC4INCW0JogwqvQkdCw0LTQsNC10LLRgdC60LjQucK7INCy0L7Qt9Cy0LXQu9C4IDM2MCDQutC+0LvQvtC90L0nXG4gIH0sXG4gIHtcbiAgICB0aW1lOiAnMTE6NDYnLFxuICAgIHRpdGxlOiAn0KHQvtCx0Y/QvdC40L0g0L/RgNC40LPQu9Cw0YHQuNC7INC20LjRgtC10LvQtdC5INCc0L7RgdC60LLRiyDQvdCwINCz0L7RgNC+0LTRgdC60L7QuSDRgdC10LzQtdC50L3Ri9C5INGE0LXRgdGC0LjQstCw0LvRjCDCq9Cc0L7QuSDRgNCw0LnQvtC9wrsnXG4gIH0sXG4gIHtcbiAgICB0aW1lOiAnMDk6MjQnLFxuICAgIHRpdGxlOiAn0J/RgNCw0LfQtNC90LjQuiDRhtCy0LXRgtC10L3QuNGPINGB0LDQutGD0YDRiyDCq9Cb0Y7QsdC+0LLQsNC90LjQtSDRhtCy0LXRgtCw0LzQuMK7INC/0YDQvtC50LTQtdGCINCyINC/0LDRgNC60LUgwqvQptCw0YDQuNGG0YvQvdC+wrsnXG4gIH1cbl0iLCJpbXBvcnQgeyBhcnJOZXcgfSBmcm9tIFwiLi4vZGIvZGItbmV3XCI7XG5cbi8vIGNvbnN0IGRhdGEgPSBmZXRjaCgnaHR0cDovL2ZqZGtzbGZqa2RzLmZqZGZqLnJ1Jywge1xuLy8gICBtZXRob2Q6ICdHRVQnLFxuLy8gICBkYXRhOiAnaGpraGprJ1xuLy8gfSk7XG5cbmNvbnN0IG5ld3NMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndWwubmV3cy1ibG9ja19fbGlzdCcpO1xuXG5hcnJOZXcuZm9yRWFjaChlbGVtID0+IHtcbiAgY29uc3QgaXRlbUxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgaXRlbUxpLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJyxcbiAgYDx0aW1lPiR7ZWxlbS50aW1lfTwvdGltZT5cbiAgICA8YSBocmVmPVwiLi9uZXdzLmh0bWxcIj5cbiAgICAgIDxzcGFuPiR7ZWxlbS50aXRsZX08L3NwYW4+XG4gICAgPC9hPlxuICBgXG4gIClcbiAgY29uc29sZS5sb2coaXRlbUxpKTtcbiAgbmV3c0xpc3QuYXBwZW5kKGl0ZW1MaSk7XG5cblxufSk7XG5cblxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vc2Fzcy9pbmRleC5zY3NzJztcbmltcG9ydCAnLi9qcy9hcHAnOyJdLCJuYW1lcyI6WyJhcnJOZXciLCJ0aW1lIiwidGl0bGUiLCJuZXdzTGlzdCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImZvckVhY2giLCJlbGVtIiwiaXRlbUxpIiwiY3JlYXRlRWxlbWVudCIsImluc2VydEFkamFjZW50SFRNTCIsImNvbnNvbGUiLCJsb2ciLCJhcHBlbmQiXSwic291cmNlUm9vdCI6IiJ9