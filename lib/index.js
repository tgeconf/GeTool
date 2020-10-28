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
/*! export GeTool [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export geTool [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GeTool": () => /* binding */ GeTool,
/* harmony export */   "geTool": () => /* binding */ geTool
/* harmony export */ });
/* harmony import */ var _tools_arrayUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tools/arrayUtil */ "./src/main/tools/arrayUtil.js");
/* harmony import */ var _tools_colorUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tools/colorUtil */ "./src/main/tools/colorUtil.js");
/* harmony import */ var _tools_objUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tools/objUtil */ "./src/main/tools/objUtil.js");
/* harmony import */ var _tools_MathUtil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tools/MathUtil */ "./src/main/tools/MathUtil.js");




class GeTool {
  constructor() {
    this.arrayUtil = new _tools_arrayUtil__WEBPACK_IMPORTED_MODULE_0__.default();
    this.colorUtil = new _tools_colorUtil__WEBPACK_IMPORTED_MODULE_1__.default();
    this.objUtil = new _tools_objUtil__WEBPACK_IMPORTED_MODULE_2__.default();
    this.mathUtil = new _tools_MathUtil__WEBPACK_IMPORTED_MODULE_3__.default();
  }

  test() {
    console.log('this is a test! ');
  }

}
const geTool = new GeTool(); // export { ArrayUtils, TimingSpec, ChartSpec, Animation }

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
  /**
   * generate a series of numbers without repetition
   * @param {number} count 
   * @retrun {Array}
   */


  randSeries(count) {
    let arr = [];

    for (let i = 0; i < count; i++) {
      arr[i] = i;
    }

    return this.shuffle(arr);
  }

  removeRept(arr) {
    return [...new Set(arr)];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nZXRvb2wvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2dldG9vbC8uL3NyYy9tYWluL2luZGV4LmpzIiwid2VicGFjazovL2dldG9vbC8uL3NyYy9tYWluL3Rvb2xzL01hdGhVdGlsLmpzIiwid2VicGFjazovL2dldG9vbC8uL3NyYy9tYWluL3Rvb2xzL2FycmF5VXRpbC5qcyIsIndlYnBhY2s6Ly9nZXRvb2wvLi9zcmMvbWFpbi90b29scy9jb2xvclV0aWwuanMiLCJ3ZWJwYWNrOi8vZ2V0b29sLy4vc3JjL21haW4vdG9vbHMvb2JqVXRpbC5qcyIsIndlYnBhY2s6Ly9nZXRvb2wvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZ2V0b29sL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9nZXRvb2wvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9nZXRvb2wvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9nZXRvb2wvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbIkdlVG9vbCIsImNvbnN0cnVjdG9yIiwiYXJyYXlVdGlsIiwiQXJyYXlVdGlscyIsImNvbG9yVXRpbCIsIkNvbG9yVXRpbHMiLCJvYmpVdGlsIiwiT2JqVXRpbHMiLCJtYXRoVXRpbCIsIk1hdGhVdGlscyIsInRlc3QiLCJjb25zb2xlIiwibG9nIiwiZ2VUb29sIiwicmFuZE51bSIsIm1pbiIsIm1heCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImNhbEV1Y0RpcyIsInZlYzEiLCJ2ZWMyIiwibGVuZ3RoIiwiRXJyb3IiLCJzdW0iLCJpIiwibGVuIiwic3FydCIsIkFycmF5UHJjcyIsImlzRXF1YWwiLCJhcnIxIiwiYXJyMiIsInNodWZmbGUiLCJhcnIiLCJqIiwicmFuZFNlcmllcyIsImNvdW50IiwicmVtb3ZlUmVwdCIsIlNldCIsImhleFRvUmdiIiwiaGV4IiwiY29sb3IiLCJyZ2IiLCJyZXBsYWNlIiwidG1wIiwicHVzaCIsImNoYXJBdCIsImpvaW4iLCJzdWJzdHIiLCJwYXJzZUludCIsIk51bWJlciIsInJnYlRvSGV4IiwidG9TdHJpbmciLCJtYXRjaCIsInNsaWNlIiwiaXNFbXB0eU9iaiIsIm9iaiIsIkFycmF5IiwiaXNBcnJheSIsIk9iamVjdCIsImtleXMiLCJkZWVwQ2xvbmUiLCJjb3B5IiwidmFsdWVzIiwiRGF0ZSIsInNldFRpbWUiLCJnZXRUaW1lIiwiYXR0ciIsImhhc093blByb3BlcnR5Iiwib2JqMSIsIm9iajIiLCJudW1BcnIxIiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsIm51bUFycjIiLCJrZXkiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLE1BQU1BLE1BQU4sQ0FBYTtBQUNoQkMsYUFBVyxHQUFHO0FBQ1YsU0FBS0MsU0FBTCxHQUFpQixJQUFJQyxxREFBSixFQUFqQjtBQUNBLFNBQUtDLFNBQUwsR0FBaUIsSUFBSUMscURBQUosRUFBakI7QUFDQSxTQUFLQyxPQUFMLEdBQWUsSUFBSUMsbURBQUosRUFBZjtBQUNBLFNBQUtDLFFBQUwsR0FBZ0IsSUFBSUMsb0RBQUosRUFBaEI7QUFDSDs7QUFFREMsTUFBSSxHQUFHO0FBQ0hDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGtCQUFaO0FBQ0g7O0FBVmU7QUFhYixNQUFNQyxNQUFNLEdBQUcsSUFBSWIsTUFBSixFQUFmLEMsQ0FDUCwwRDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJlLE1BQU1TLFNBQU4sQ0FBZ0I7QUFDM0JSLGFBQVcsR0FBRyxDQUFHO0FBRWpCO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0lhLFNBQU8sQ0FBQ0MsR0FBRCxF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QUdsQjs7QUFDQSxRQUFJaUQsT0FBTyxLQUFLRSxPQUFoQixFQUF5QjtBQUNyQixZQUFNLElBQUlsRCxLQUFKLENBQVUsaUNBQVYsQ0FBTjtBQUNIOztBQUVELFFBQUlDLEdBQUcsR0FBRyxDQUFWOztBQUNBLFNBQUssSUFBSWtELEdBQVQsSUFBZ0JMLElBQWhCLEVBQXNCO0FBQ2xCN0MsU0FBRyxJQUFJLENBQUM2QyxJQUFJLENBQUNLLEdBQUQsQ0FBSixHQUFZSixJQUFJLENBQUNJLEdBQUQsQ0FBakIsS0FBMkJMLElBQUksQ0FBQ0ssR0FBRCxDQUFKLEdBQVlKLElBQUksQ0FBQ0ksR0FBRCxDQUEzQyxDQUFQO0FBQ0g7O0FBQ0QsV0FBTzFELElBQUksQ0FBQ1csSUFBTCxDQUFVSCxHQUFWLENBQVA7QUFDSDs7QUE3RXlCLEM7Ozs7OztVQ0E5QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0NyQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHNGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7O1VDTkE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcImdldG9vbFwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJnZXRvb2xcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiZ2V0b29sXCJdID0gZmFjdG9yeSgpO1xufSkoc2VsZiwgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiaW1wb3J0IEFycmF5VXRpbHMgZnJvbSAnLi90b29scy9hcnJheVV0aWwnO1xyXG5pbXBvcnQgQ29sb3JVdGlscyBmcm9tICcuL3Rvb2xzL2NvbG9yVXRpbCc7XHJcbmltcG9ydCBPYmpVdGlscyBmcm9tICcuL3Rvb2xzL29ialV0aWwnO1xyXG5pbXBvcnQgTWF0aFV0aWxzIGZyb20gJy4vdG9vbHMvTWF0aFV0aWwnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdlVG9vbCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmFycmF5VXRpbCA9IG5ldyBBcnJheVV0aWxzKCk7XHJcbiAgICAgICAgdGhpcy5jb2xvclV0aWwgPSBuZXcgQ29sb3JVdGlscygpO1xyXG4gICAgICAgIHRoaXMub2JqVXRpbCA9IG5ldyBPYmpVdGlscygpO1xyXG4gICAgICAgIHRoaXMubWF0aFV0aWwgPSBuZXcgTWF0aFV0aWxzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGVzdCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygndGhpcyBpcyBhIHRlc3QhICcpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2VUb29sID0gbmV3IEdlVG9vbCgpO1xyXG4vLyBleHBvcnQgeyBBcnJheVV0aWxzLCBUaW1pbmdTcGVjLCBDaGFydFNwZWMsIEFuaW1hdGlvbiB9IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWF0aFV0aWxzIHtcclxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBnZW5lcmF0ZSByYW5kb20gbnVtYmVyIGluIGEgY2VydGFpbiByYW5nZVxyXG4gICAgICogQHBhcmFtIG1pbiB7TnVtYmVyfVxyXG4gICAgICogQHBhcmFtIG1heCB7TnVtYmVyfVxyXG4gICAgICogQHJldHVybiB7TnVtYmVyfVxyXG4gICAgICovXHJcbiAgICByYW5kTnVtKG1pbiwgbWF4KSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IobWluICsgTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGNhbGN1bGF0ZSBldWNsaWRlYW4gZGlzdGFuY2VcclxuICAgICAqIEBwYXJhbSB2ZWMxIHtBcnJheX1cclxuICAgICAqIEBwYXJhbSB2ZWMyIHtBcnJheX1cclxuICAgICAqIEByZXR1cm4ge051bWJlcn1cclxuICAgICAqL1xyXG4gICAgY2FsRXVjRGlzKHZlYzEsIHZlYzIpIHtcclxuICAgICAgICAvL2p1ZGdlIGxlbmd0aFxyXG4gICAgICAgIGlmICh2ZWMxLmxlbmd0aCAhPT0gdmVjMi5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidmVjdG9yIGxlbmd0aCBtaXMtbWF0Y2ghXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgc3VtID0gMDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gdmVjMS5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICBzdW0gKz0gKHZlYzFbaV0gLSB2ZWMyW2ldKSAqICh2ZWMxW2ldIC0gdmVjMltpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoc3VtKTtcclxuICAgIH1cclxuXHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXJyYXlQcmNzIHtcclxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBqdWRnZSBpZiB0d28gYXJyYXlzIGFyZSBlcXVhbFxyXG4gICAgICogQHBhcmFtIGFycjEge0FycmF5fVxyXG4gICAgICogQHBhcmFtIGFycjIge0FycmF5fVxyXG4gICAgICogQHJldHVybiB7Qm9vbGVhbn1cclxuICAgICAqL1xyXG4gICAgaXNFcXVhbChhcnIxLCBhcnIyKSB7XHJcbiAgICAgICAgaWYgKGFycjEgPT09IGFycjIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhcnIxLmxlbmd0aCAhPSBhcnIyLmxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBhcnIxLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChhcnIxW2ldICE9PSBhcnIyW2ldKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBzaHVmZmxlXHJcbiAgICAgKiBAcGFyYW0gYXJyIHtBcnJheX1cclxuICAgICAqIEByZXR1cm4ge0FycmF5fVxyXG4gICAgICovXHJcbiAgICBzaHVmZmxlKGFycikge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSBhcnIubGVuZ3RoIC0gMTsgaSA+IDA7IGktLSkge1xyXG4gICAgICAgICAgICBjb25zdCBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGkgKyAxKSk7XHJcbiAgICAgICAgICAgIFthcnJbaV0sIGFycltqXV0gPSBbYXJyW2pdLCBhcnJbaV1dO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYXJyO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZ2VuZXJhdGUgYSBzZXJpZXMgb2YgbnVtYmVycyB3aXRob3V0IHJlcGV0aXRpb25cclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjb3VudCBcclxuICAgICAqIEByZXRydW4ge0FycmF5fVxyXG4gICAgICovXHJcbiAgICByYW5kU2VyaWVzKGNvdW50KSB7XHJcbiAgICAgICAgbGV0IGFyciA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICBhcnJbaV0gPSBpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5zaHVmZmxlKGFycik7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlUmVwdChhcnIpe1xyXG4gICAgICAgIHJldHVybiBbLi4ubmV3IFNldChhcnIpXTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDb2xvclV0aWxzIHtcclxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBoZXggdG8gcmdiXHJcbiAgICAgKiBAcGFyYW0gaGV4IHtTdHJpbmd9XHJcbiAgICAgKiBAcmV0dXJuIHtBcnJheX1cclxuICAgICAqL1xyXG4gICAgaGV4VG9SZ2IoaGV4KSB7XHJcbiAgICAgICAgbGV0IGNvbG9yID0gW10sIHJnYiA9IFtdO1xyXG4gICAgICAgIGhleCA9IGhleC5yZXBsYWNlKC8jLywgXCJcIik7XHJcbiAgICAgICAgaWYgKGhleC5sZW5ndGggPT0gMykge1xyXG4gICAgICAgICAgICBsZXQgdG1wID0gW107XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0bXAucHVzaChoZXguY2hhckF0KGkpICsgaGV4LmNoYXJBdChpKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaGV4ID0gdG1wLmpvaW4oXCJcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xyXG4gICAgICAgICAgICBjb2xvcltpXSA9IFwiMHhcIiArIGhleC5zdWJzdHIoaSAqIDIsIDIpO1xyXG4gICAgICAgICAgICByZ2IucHVzaChwYXJzZUludChOdW1iZXIoY29sb3JbaV0pKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZ2I7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiByZ2IgdG8gaGV4XHJcbiAgICAgKiBAcGFyYW0gcmdiIHtTdHJpbmd9IC8vIHJnYihyLCBnLCBiKVxyXG4gICAgICogQHJldHVybiB7U3RyaW5nfVxyXG4gICAgICovXHJcbiAgICByZ2JUb0hleChyZ2IpIHtcclxuICAgICAgICBsZXQgY29sb3IgPSByZ2IudG9TdHJpbmcoKS5tYXRjaCgvXFxkKy9nKTtcclxuICAgICAgICBsZXQgaGV4ID0gXCIjXCI7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XHJcbiAgICAgICAgICAgIGhleCArPSAoXCIwXCIgKyBOdW1iZXIoY29sb3JbaV0pLnRvU3RyaW5nKDE2KSkuc2xpY2UoLTIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaGV4O1xyXG4gICAgfVxyXG5cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBPYmpVdGlscyB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICoganVkZ2UgaWYgb25lIG9iamVjdCBpcyBudWxsXHJcbiAgICAgKiBAcGFyYW0gb2JqIHtvYmplY3R9XHJcbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufVxyXG4gICAgICovXHJcbiAgICBpc0VtcHR5T2JqKG9iaikge1xyXG4gICAgICAgIGlmICghb2JqIHx8IHR5cGVvZiBvYmogIT09ICdvYmplY3QnIHx8IEFycmF5LmlzQXJyYXkob2JqKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAhT2JqZWN0LmtleXMob2JqKS5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBkZWVwIGNsb25lXHJcbiAgICAgKiBAcGFyYW0ge0FueX1cclxuICAgICAqIEByZXR1cm4ge3NhbWUgYXMgaW5wdXR9XHJcbiAgICAgKi9cclxuICAgIGRlZXBDbG9uZSgpIHtcclxuICAgICAgICBsZXQgY29weTtcclxuXHJcbiAgICAgICAgLy9oYW5kbGUgMyBzaW1wbGUgdHlwZXMsIGFuZCBudWxsIG9yIHVuZGVmaW5lZFxyXG4gICAgICAgIGlmIChudWxsID09IHZhbHVlcyB8fCBcIm9iamVjdFwiICE9IHR5cGVvZiB2YWx1ZXMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vaGFuZGxlIERhdGVcclxuICAgICAgICBpZiAodmFsdWVzIGluc3RhbmNlb2YgRGF0ZSkge1xyXG4gICAgICAgICAgICBjb3B5ID0gbmV3IERhdGUoKTtcclxuICAgICAgICAgICAgY29weS5zZXRUaW1lKHZhbHVlcy5nZXRUaW1lKCkpO1xyXG4gICAgICAgICAgICByZXR1cm4gY29weTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vaGFuZGxlIEFycmF5XHJcbiAgICAgICAgaWYgKHZhbHVlcyBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgICAgICAgIGNvcHkgPSBbXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHZhbHVlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29weVtpXSA9IHRoaXMuZGVlcENsb25lKHZhbHVlc1tpXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGNvcHk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL2hhbmRsZSBPYmplY3RcclxuICAgICAgICBpZiAodmFsdWVzIGluc3RhbmNlb2YgT2JqZWN0KSB7XHJcbiAgICAgICAgICAgIGNvcHkgPSB7fTtcclxuICAgICAgICAgICAgZm9yIChsZXQgYXR0ciBpbiB2YWx1ZXMpIHtcclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZXMuaGFzT3duUHJvcGVydHkoYXR0cikpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb3B5W2F0dHJdID0gZGVlcENsb25lKHZhbHVlc1thdHRyXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGNvcHk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJEb2Vzbid0IHN1cHBvcnQgY29weWluZyB0aGlzIHR5cGUgb2YgdmFsdWVzIVwiKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGNhbGN1bGF0ZSBldWNsaWRlYW4gZGlzdGFuY2UgYmV0d2VlbiB0d28gb2JqZWN0c1xyXG4gICAgICogQHBhcmFtIG9iajEge09iamVjdH1cclxuICAgICAqIEBwYXJhbSBvYmoyIHtPYmplY3R9XHJcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9XHJcbiAgICAgKi9cclxuICAgIGNhbEV1Y0RpcyhvYmoxLCBvYmoyKSB7XHJcbiAgICAgICAgbGV0IG51bUFycjEgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhvYmoxKS5sZW5ndGg7XHJcbiAgICAgICAgbGV0IG51bUFycjIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhvYmoyKS5sZW5ndGg7XHJcbiAgICAgICAgLy9qdWRnZSBsZW5ndGhcclxuICAgICAgICBpZiAobnVtQXJyMSAhPT0gbnVtQXJyMikge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJudW1iZXIgb2YgYXR0cmlidXRlcyBtaXMtbWF0Y2ghXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHN1bSA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQga2V5IGluIG9iajEpIHtcclxuICAgICAgICAgICAgc3VtICs9IChvYmoxW2tleV0gLSBvYmoyW2tleV0pICogKG9iajFba2V5XSAtIG9iajJba2V5XSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoc3VtKTtcclxuICAgIH1cclxuXHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gbW9kdWxlIGV4cG9ydHMgbXVzdCBiZSByZXR1cm5lZCBmcm9tIHJ1bnRpbWUgc28gZW50cnkgaW5saW5pbmcgaXMgZGlzYWJsZWRcbi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xucmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9tYWluL2luZGV4LmpzXCIpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==