(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("getool", [], factory);
	else if(typeof exports === 'object')
		exports["getool"] = factory();
	else
		root["getool"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main/index.js":
/*!***************************!*\
  !*** ./src/main/index.js ***!
  \***************************/
/*! namespace exports */
/*! export default [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ GeTool
/* harmony export */ });
/* harmony import */ var _tools_arrayUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tools/arrayUtil */ "./src/main/tools/arrayUtil.js");
/* harmony import */ var _tools_colorUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tools/colorUtil */ "./src/main/tools/colorUtil.js");
/* harmony import */ var _tools_objUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tools/objUtil */ "./src/main/tools/objUtil.js");
/* harmony import */ var _tools_MathUtil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tools/MathUtil */ "./src/main/tools/MathUtil.js");




class GeTool {
  constructor() {
    this.ArrayUtil = new _tools_arrayUtil__WEBPACK_IMPORTED_MODULE_0__.default();
    this.ColorUtil = new _tools_colorUtil__WEBPACK_IMPORTED_MODULE_1__.default();
    this.ObjUtil = new _tools_objUtil__WEBPACK_IMPORTED_MODULE_2__.default();
    this.MathUtil = new _tools_MathUtil__WEBPACK_IMPORTED_MODULE_3__.default();
  }

  test() {
    console.log('this is a test! ');
  }

} // export { ArrayUtils, TimingSpec, ChartSpec, Animation }

/***/ }),

/***/ "./src/main/tools/MathUtil.js":
/*!************************************!*\
  !*** ./src/main/tools/MathUtil.js ***!
  \************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ MathUtils
/* harmony export */ });
class MathUtils {
  constructor() {}
  /**
   * generate random number in a certain range
   * @param min {Number}
   * @param max {Number}
   * @return {Number}
   */


  randNum(min, max) {
    return Math.floor(min + Math.random() * (max - min));
  }
  /**
   * calculate euclidean distance
   * @param vec1 {Array}
   * @param vec2 {Array}
   * @return {Number}
   */


  calEucDis(vec1, vec2) {
    //judge length
    if (vec1.length !== vec2.length) {
      throw new Error("vector length mis-match!");
    }

    let sum = 0;

    for (let i = 0, len = vec1.length; i < len; i++) {
      sum += (vec1[i] - vec2[i]) * (vec1[i] - vec2[i]);
    }

    return Math.sqrt(sum);
  }

}

/***/ }),

/***/ "./src/main/tools/arrayUtil.js":
/*!*************************************!*\
  !*** ./src/main/tools/arrayUtil.js ***!
  \*************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ ArrayPrcs
/* harmony export */ });
class ArrayPrcs {
  constructor() {}
  /**
   * judge if two arrays are equal
   * @param arr1 {Array}
   * @param arr2 {Array}
   * @return {Boolean}
   */


  isEqual(arr1, arr2) {
    if (arr1 === arr2) {
      return true;
    }

    if (arr1.length != arr2.length) {
      return false;
    }

    for (let i = 0, len = arr1.length; i < len; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }

    return true;
  }
  /**
   * shuffle
   * @param arr {Array}
   * @return {Array}
   */


  shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    return arr;
  }

}

/***/ }),

/***/ "./src/main/tools/colorUtil.js":
/*!*************************************!*\
  !*** ./src/main/tools/colorUtil.js ***!
  \*************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ ColorUtils
/* harmony export */ });
class ColorUtils {
  constructor() {}
  /**
   * hex to rgb
   * @param hex {String}
   * @return {Array}
   */


  hexToRgb(hex) {
    let color = [],
        rgb = [];
    hex = hex.replace(/#/, "");

    if (hex.length == 3) {
      let tmp = [];

      for (let i = 0; i < 3; i++) {
        tmp.push(hex.charAt(i) + hex.charAt(i));
      }

      hex = tmp.join("");
    }

    for (let i = 0; i < 3; i++) {
      color[i] = "0x" + hex.substr(i * 2, 2);
      rgb.push(parseInt(Number(color[i])));
    }

    return rgb;
  }
  /**
   * rgb to hex
   * @param rgb {String} // rgb(r, g, b)
   * @return {String}
   */


  rgbToHex(rgb) {
    let color = rgb.toString().match(/\d+/g);
    let hex = "#";

    for (let i = 0; i < 3; i++) {
      hex += ("0" + Number(color[i]).toString(16)).slice(-2);
    }

    return hex;
  }

}

/***/ }),

/***/ "./src/main/tools/objUtil.js":
/*!***********************************!*\
  !*** ./src/main/tools/objUtil.js ***!
  \***********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ ObjUtils
/* harmony export */ });
class ObjUtils {
  constructor() {}
  /**
   * judge if one object is null
   * @param obj {object}
   * @return {Boolean}
   */


  isEmptyObj(obj) {
    if (!obj || typeof obj !== 'object' || Array.isArray(obj)) {
      return false;
    }

    return !Object.keys(obj).length;
  }
  /**
   * deep clone
   * @param {Any}
   * @return {same as input}
   */


  deepClone() {
    let copy; //handle 3 simple types, and null or undefined

    if (null == values || "object" != typeof values) {
      return values;
    } //handle Date


    if (values instanceof Date) {
      copy = new Date();
      copy.setTime(values.getTime());
      return copy;
    } //handle Array


    if (values instanceof Array) {
      copy = [];

      for (let i = 0, len = values.length; i < len; i++) {
        copy[i] = this.deepClone(values[i]);
      }

      return copy;
    } //handle Object


    if (values instanceof Object) {
      copy = {};

      for (let attr in values) {
        if (values.hasOwnProperty(attr)) {
          copy[attr] = deepClone(values[attr]);
        }
      }

      return copy;
    }

    throw new Error("Doesn't support copying this type of values!");
  }
  /**
   * calculate euclidean distance between two objects
   * @param obj1 {Object}
   * @param obj2 {Object}
   * @return {Number}
   */


  calEucDis(obj1, obj2) {
    let numArr1 = Object.getOwnPropertyNames(obj1).length;
    let numArr2 = Object.getOwnPropertyNames(obj2).length; //judge length

    if (numArr1 !== numArr2) {
      throw new Error("number of attributes mis-match!");
    }

    let sum = 0;

    for (let key in obj1) {
      sum += (obj1[key] - obj2[key]) * (obj1[key] - obj2[key]);
    }

    return Math.sqrt(sum);
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
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./src/main/index.js");
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nZXRvb2wvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2dldG9vbC8uL3NyYy9tYWluL2luZGV4LmpzIiwid2VicGFjazovL2dldG9vbC8uL3NyYy9tYWluL3Rvb2xzL01hdGhVdGlsLmpzIiwid2VicGFjazovL2dldG9vbC8uL3NyYy9tYWluL3Rvb2xzL2FycmF5VXRpbC5qcyIsIndlYnBhY2s6Ly9nZXRvb2wvLi9zcmMvbWFpbi90b29scy9jb2xvclV0aWwuanMiLCJ3ZWJwYWNrOi8vZ2V0b29sLy4vc3JjL21haW4vdG9vbHMvb2JqVXRpbC5qcyIsIndlYnBhY2s6Ly9nZXRvb2wvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZ2V0b29sL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9nZXRvb2wvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9nZXRvb2wvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9nZXRvb2wvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbIkdlVG9vbCIsImNvbnN0cnVjdG9yIiwiQXJyYXlVdGlsIiwiQXJyYXlVdGlscyIsIkNvbG9yVXRpbCIsIkNvbG9yVXRpbHMiLCJPYmpVdGlsIiwiT2JqVXRpbHMiLCJNYXRoVXRpbCIsIk1hdGhVdGlscyIsInRlc3QiLCJjb25zb2xlIiwibG9nIiwicmFuZE51bSIsIm1pbiIsIm1heCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImNhbEV1Y0RpcyIsInZlYzEiLCJ2ZWMyIiwibGVuZ3RoIiwiRXJyb3IiLCJzdW0iLCJpIiwibGVuIiwic3FydCIsIkFycmF5UHJjcyIsImlzRXF1YWwiLCJhcnIxIiwiYXJyMiIsInNodWZmbGUiLCJhcnIiLCJqIiwiaGV4VG9SZ2IiLCJoZXgiLCJjb2xvciIsInJnYiIsInJlcGxhY2UiLCJ0bXAiLCJwdXNoIiwiY2hhckF0Iiwiam9pbiIsInN1YnN0ciIsInBhcnNlSW50IiwiTnVtYmVyIiwicmdiVG9IZXgiLCJ0b1N0cmluZyIsIm1hdGNoIiwic2xpY2UiLCJpc0VtcHR5T2JqIiwib2JqIiwiQXJyYXkiLCJpc0FycmF5IiwiT2JqZWN0Iiwia2V5cyIsImRlZXBDbG9uZSIsImNvcHkiLCJ2YWx1ZXMiLCJEYXRlIiwic2V0VGltZSIsImdldFRpbWUiLCJhdHRyIiwiaGFzT3duUHJvcGVydHkiLCJvYmoxIiwib2JqMiIsIm51bUFycjEiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwibnVtQXJyMiIsImtleSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLE1BQU1BLE1BQU4sQ0FBYTtBQUN4QkMsYUFBVyxHQUFHO0FBQ1YsU0FBS0MsU0FBTCxHQUFpQixJQUFJQyxxREFBSixFQUFqQjtBQUNBLFNBQUtDLFNBQUwsR0FBaUIsSUFBSUMscURBQUosRUFBakI7QUFDQSxTQUFLQyxPQUFMLEdBQWUsSUFBSUMsbURBQUosRUFBZjtBQUNBLFNBQUtDLFFBQUwsR0FBZ0IsSUFBSUMsb0RBQUosRUFBaEI7QUFDSDs7QUFFREMsTUFBSSxHQUFHO0FBQ0hDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGtCQUFaO0FBQ0g7O0FBVnVCLEMsQ0FhNUIsMEQ7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCZSxNQUFNSCxTQUFOLENBQWdCO0FBQzNCUixhQUFXLEdBQUcsQ0FBRztBQUVqQjtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNJWSxTQUFPLENBQUNDLEdBQUQsRUFBTUMsR0FBTixFQUFXO0FBQ2QsV0FBT0MsSUFBSSxDQUFDQyxLQUFMLENBQVdILEdBQUcsR0FBR0UsSUFBSSxDQUFDRSxNQUFMLE1BQWlCSCxHQUFH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QUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3JCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsc0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7VUNOQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiZ2V0b29sXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImdldG9vbFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJnZXRvb2xcIl0gPSBmYWN0b3J5KCk7XG59KShzZWxmLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCJpbXBvcnQgQXJyYXlVdGlscyBmcm9tICcuL3Rvb2xzL2FycmF5VXRpbCc7XHJcbmltcG9ydCBDb2xvclV0aWxzIGZyb20gJy4vdG9vbHMvY29sb3JVdGlsJztcclxuaW1wb3J0IE9ialV0aWxzIGZyb20gJy4vdG9vbHMvb2JqVXRpbCc7XHJcbmltcG9ydCBNYXRoVXRpbHMgZnJvbSAnLi90b29scy9NYXRoVXRpbCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHZVRvb2wge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5BcnJheVV0aWwgPSBuZXcgQXJyYXlVdGlscygpO1xyXG4gICAgICAgIHRoaXMuQ29sb3JVdGlsID0gbmV3IENvbG9yVXRpbHMoKTtcclxuICAgICAgICB0aGlzLk9ialV0aWwgPSBuZXcgT2JqVXRpbHMoKTtcclxuICAgICAgICB0aGlzLk1hdGhVdGlsID0gbmV3IE1hdGhVdGlscygpO1xyXG4gICAgfVxyXG5cclxuICAgIHRlc3QoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3RoaXMgaXMgYSB0ZXN0ISAnKTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gZXhwb3J0IHsgQXJyYXlVdGlscywgVGltaW5nU3BlYywgQ2hhcnRTcGVjLCBBbmltYXRpb24gfSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hdGhVdGlscyB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZ2VuZXJhdGUgcmFuZG9tIG51bWJlciBpbiBhIGNlcnRhaW4gcmFuZ2VcclxuICAgICAqIEBwYXJhbSBtaW4ge051bWJlcn1cclxuICAgICAqIEBwYXJhbSBtYXgge051bWJlcn1cclxuICAgICAqIEByZXR1cm4ge051bWJlcn1cclxuICAgICAqL1xyXG4gICAgcmFuZE51bShtaW4sIG1heCkge1xyXG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKG1pbiArIE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBjYWxjdWxhdGUgZXVjbGlkZWFuIGRpc3RhbmNlXHJcbiAgICAgKiBAcGFyYW0gdmVjMSB7QXJyYXl9XHJcbiAgICAgKiBAcGFyYW0gdmVjMiB7QXJyYXl9XHJcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9XHJcbiAgICAgKi9cclxuICAgIGNhbEV1Y0Rpcyh2ZWMxLCB2ZWMyKSB7XHJcbiAgICAgICAgLy9qdWRnZSBsZW5ndGhcclxuICAgICAgICBpZiAodmVjMS5sZW5ndGggIT09IHZlYzIubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInZlY3RvciBsZW5ndGggbWlzLW1hdGNoIVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHN1bSA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHZlYzEubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgc3VtICs9ICh2ZWMxW2ldIC0gdmVjMltpXSkgKiAodmVjMVtpXSAtIHZlYzJbaV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KHN1bSk7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXJyYXlQcmNzIHtcclxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBqdWRnZSBpZiB0d28gYXJyYXlzIGFyZSBlcXVhbFxyXG4gICAgICogQHBhcmFtIGFycjEge0FycmF5fVxyXG4gICAgICogQHBhcmFtIGFycjIge0FycmF5fVxyXG4gICAgICogQHJldHVybiB7Qm9vbGVhbn1cclxuICAgICAqL1xyXG4gICAgaXNFcXVhbChhcnIxLCBhcnIyKSB7XHJcbiAgICAgICAgaWYgKGFycjEgPT09IGFycjIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhcnIxLmxlbmd0aCAhPSBhcnIyLmxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBhcnIxLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChhcnIxW2ldICE9PSBhcnIyW2ldKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBzaHVmZmxlXHJcbiAgICAgKiBAcGFyYW0gYXJyIHtBcnJheX1cclxuICAgICAqIEByZXR1cm4ge0FycmF5fVxyXG4gICAgICovXHJcbiAgICBzaHVmZmxlKGFycikge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSBhcnIubGVuZ3RoIC0gMTsgaSA+IDA7IGktLSkge1xyXG4gICAgICAgICAgICBjb25zdCBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGkgKyAxKSk7XHJcbiAgICAgICAgICAgIFthcnJbaV0sIGFycltqXV0gPSBbYXJyW2pdLCBhcnJbaV1dO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYXJyO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG5cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDb2xvclV0aWxzIHtcclxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBoZXggdG8gcmdiXHJcbiAgICAgKiBAcGFyYW0gaGV4IHtTdHJpbmd9XHJcbiAgICAgKiBAcmV0dXJuIHtBcnJheX1cclxuICAgICAqL1xyXG4gICAgaGV4VG9SZ2IoaGV4KSB7XHJcbiAgICAgICAgbGV0IGNvbG9yID0gW10sIHJnYiA9IFtdO1xyXG4gICAgICAgIGhleCA9IGhleC5yZXBsYWNlKC8jLywgXCJcIik7XHJcbiAgICAgICAgaWYgKGhleC5sZW5ndGggPT0gMykge1xyXG4gICAgICAgICAgICBsZXQgdG1wID0gW107XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0bXAucHVzaChoZXguY2hhckF0KGkpICsgaGV4LmNoYXJBdChpKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaGV4ID0gdG1wLmpvaW4oXCJcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xyXG4gICAgICAgICAgICBjb2xvcltpXSA9IFwiMHhcIiArIGhleC5zdWJzdHIoaSAqIDIsIDIpO1xyXG4gICAgICAgICAgICByZ2IucHVzaChwYXJzZUludChOdW1iZXIoY29sb3JbaV0pKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZ2I7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiByZ2IgdG8gaGV4XHJcbiAgICAgKiBAcGFyYW0gcmdiIHtTdHJpbmd9IC8vIHJnYihyLCBnLCBiKVxyXG4gICAgICogQHJldHVybiB7U3RyaW5nfVxyXG4gICAgICovXHJcbiAgICByZ2JUb0hleChyZ2IpIHtcclxuICAgICAgICBsZXQgY29sb3IgPSByZ2IudG9TdHJpbmcoKS5tYXRjaCgvXFxkKy9nKTtcclxuICAgICAgICBsZXQgaGV4ID0gXCIjXCI7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XHJcbiAgICAgICAgICAgIGhleCArPSAoXCIwXCIgKyBOdW1iZXIoY29sb3JbaV0pLnRvU3RyaW5nKDE2KSkuc2xpY2UoLTIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaGV4O1xyXG4gICAgfVxyXG5cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBPYmpVdGlscyB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICoganVkZ2UgaWYgb25lIG9iamVjdCBpcyBudWxsXHJcbiAgICAgKiBAcGFyYW0gb2JqIHtvYmplY3R9XHJcbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufVxyXG4gICAgICovXHJcbiAgICBpc0VtcHR5T2JqKG9iaikge1xyXG4gICAgICAgIGlmICghb2JqIHx8IHR5cGVvZiBvYmogIT09ICdvYmplY3QnIHx8IEFycmF5LmlzQXJyYXkob2JqKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAhT2JqZWN0LmtleXMob2JqKS5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBkZWVwIGNsb25lXHJcbiAgICAgKiBAcGFyYW0ge0FueX1cclxuICAgICAqIEByZXR1cm4ge3NhbWUgYXMgaW5wdXR9XHJcbiAgICAgKi9cclxuICAgIGRlZXBDbG9uZSgpIHtcclxuICAgICAgICBsZXQgY29weTtcclxuXHJcbiAgICAgICAgLy9oYW5kbGUgMyBzaW1wbGUgdHlwZXMsIGFuZCBudWxsIG9yIHVuZGVmaW5lZFxyXG4gICAgICAgIGlmIChudWxsID09IHZhbHVlcyB8fCBcIm9iamVjdFwiICE9IHR5cGVvZiB2YWx1ZXMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vaGFuZGxlIERhdGVcclxuICAgICAgICBpZiAodmFsdWVzIGluc3RhbmNlb2YgRGF0ZSkge1xyXG4gICAgICAgICAgICBjb3B5ID0gbmV3IERhdGUoKTtcclxuICAgICAgICAgICAgY29weS5zZXRUaW1lKHZhbHVlcy5nZXRUaW1lKCkpO1xyXG4gICAgICAgICAgICByZXR1cm4gY29weTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vaGFuZGxlIEFycmF5XHJcbiAgICAgICAgaWYgKHZhbHVlcyBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgICAgICAgIGNvcHkgPSBbXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHZhbHVlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29weVtpXSA9IHRoaXMuZGVlcENsb25lKHZhbHVlc1tpXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGNvcHk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL2hhbmRsZSBPYmplY3RcclxuICAgICAgICBpZiAodmFsdWVzIGluc3RhbmNlb2YgT2JqZWN0KSB7XHJcbiAgICAgICAgICAgIGNvcHkgPSB7fTtcclxuICAgICAgICAgICAgZm9yIChsZXQgYXR0ciBpbiB2YWx1ZXMpIHtcclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZXMuaGFzT3duUHJvcGVydHkoYXR0cikpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb3B5W2F0dHJdID0gZGVlcENsb25lKHZhbHVlc1thdHRyXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGNvcHk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJEb2Vzbid0IHN1cHBvcnQgY29weWluZyB0aGlzIHR5cGUgb2YgdmFsdWVzIVwiKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGNhbGN1bGF0ZSBldWNsaWRlYW4gZGlzdGFuY2UgYmV0d2VlbiB0d28gb2JqZWN0c1xyXG4gICAgICogQHBhcmFtIG9iajEge09iamVjdH1cclxuICAgICAqIEBwYXJhbSBvYmoyIHtPYmplY3R9XHJcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9XHJcbiAgICAgKi9cclxuICAgIGNhbEV1Y0RpcyhvYmoxLCBvYmoyKSB7XHJcbiAgICAgICAgbGV0IG51bUFycjEgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhvYmoxKS5sZW5ndGg7XHJcbiAgICAgICAgbGV0IG51bUFycjIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhvYmoyKS5sZW5ndGg7XHJcbiAgICAgICAgLy9qdWRnZSBsZW5ndGhcclxuICAgICAgICBpZiAobnVtQXJyMSAhPT0gbnVtQXJyMikge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJudW1iZXIgb2YgYXR0cmlidXRlcyBtaXMtbWF0Y2ghXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHN1bSA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQga2V5IGluIG9iajEpIHtcclxuICAgICAgICAgICAgc3VtICs9IChvYmoxW2tleV0gLSBvYmoyW2tleV0pICogKG9iajFba2V5XSAtIG9iajJba2V5XSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoc3VtKTtcclxuICAgIH1cclxuXHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gbW9kdWxlIGV4cG9ydHMgbXVzdCBiZSByZXR1cm5lZCBmcm9tIHJ1bnRpbWUgc28gZW50cnkgaW5saW5pbmcgaXMgZGlzYWJsZWRcbi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xucmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9tYWluL2luZGV4LmpzXCIpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==