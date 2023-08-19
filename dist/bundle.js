var Client;
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/client/js/app.js":
/*!******************************!*\
  !*** ./src/client/js/app.js ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _method__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./method */ "./src/client/js/method.js");
/* harmony import */ var _method__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_method__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);

/* Global Variables */
const apiKey = '2aabe57eb5e5845f7d24cb9add6b42ce&units=imperial';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();
document.querySelector("#generate").addEventListener("click", e => {
  showPhoto();
  getWeather();
});
document.querySelector("#date").addEventListener("change", e => {
  let date = new Date();
  let todayDay = date.getDate();
  //console.log("check", todayDay)
  let calenderDay = e.target.value.split("-")[2];
  //console.log(calenderDay)

  let countdown = Number(calenderDay) - todayDay;
  document.getElementById('countdown').innerHTML = countdown + " days left";
});
const showPhoto = async () => {
  const city = document.querySelector('#city').value;
  //const imgEL = document.createElement('img');
  const pixabayData = await (0,_method__WEBPACK_IMPORTED_MODULE_0__.fetchPhoto)(city);
  const imgEl = document.querySelector("#photo img");
  console.log(pixabayData.hits[0].previewURL);
  console.log("??", imgEl);
  imgEl.src = pixabayData.hits[0].previewURL;
  //imgEL.setAttributes("src", pixabayData.hits[0].previewURL);

  document.querySelector("#photo").appendChild(imgEl);
  return true;
};
const getWeather = async () => {
  //const zipcode = document.querySelector('#zip').value;
  const city = document.querySelector('#city').value;
  console.log(city);

  //const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${zipcode}&appid=${apiKey}`);
  const response = await fetch(`http://api.geonames.org/postalCodeSearchJSON?placename=${city}k&maxRows=10&username=zeley26`);
  const data = await response.json();
  // const { lat, lon } = data[0];
  console.log("check", data);
  // latitude, longitude, country,

  const response2 = await fetch(`https://api.weatherbit.io/v2.0/current?key=9c707abf75144e3e996063de8d4e3559&city=${city}`);
  const currentWeather = await response2.json();
  const response3 = await fetch(`    https://api.weatherbit.io/v2.0/forecast/daily?key=9c707abf75144e3e996063de8d4e3559&city=${city}
    `);
  const data3 = await response3.json();
  const cel = currentWeather.data[0].temp;
  const F = cel * 9 / 5 + 32;
  document.querySelector("#weather").innerHTML = F + "°F";

  //

  console.log("weather", F);

  //fetch(url);
  /*
      const response2 = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`);
      const data2 = await response2.json();
      console.log("check", data2);
       //const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
      //fetch(url);
      return data2.main.temp;
      */
};

module.exports = {
  showPhoto
};

/***/ }),

/***/ "./src/client/js/method.js":
/*!*********************************!*\
  !*** ./src/client/js/method.js ***!
  \*********************************/
/***/ ((module) => {

const fetchPhoto = async city => {
  const response4 = await fetch(`https://pixabay.com/api/?key=38915459-01949e6582c7f6d96c5f51baf&q=${encodeURIComponent(city)}`);
  const pixabayData = await response4.json();
  return pixabayData;
};
module.exports = {
  fetchPhoto
};

/***/ }),

/***/ "./src/client/styles/style.scss":
/*!**************************************!*\
  !*** ./src/client/styles/style.scss ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*****************************!*\
  !*** ./src/client/index.js ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/app.js */ "./src/client/js/app.js");
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/style.scss */ "./src/client/styles/style.scss");
//import "../../dist/service-worker"



//sendData()
})();

Client = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=bundle.js.map