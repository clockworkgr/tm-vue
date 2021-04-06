module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "00ee":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ "0366":
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__("1c0b");

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "06cf":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var propertyIsEnumerableModule = __webpack_require__("d1e7");
var createPropertyDescriptor = __webpack_require__("5c6c");
var toIndexedObject = __webpack_require__("fc6a");
var toPrimitive = __webpack_require__("c04e");
var has = __webpack_require__("5135");
var IE8_DOM_DEFINE = __webpack_require__("0cfb");

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ "0cfb":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var fails = __webpack_require__("d039");
var createElement = __webpack_require__("cc12");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- requied for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "1276":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__("d784");
var isRegExp = __webpack_require__("44e7");
var anObject = __webpack_require__("825a");
var requireObjectCoercible = __webpack_require__("1d80");
var speciesConstructor = __webpack_require__("4840");
var advanceStringIndex = __webpack_require__("8aa5");
var toLength = __webpack_require__("50c4");
var callRegExpExec = __webpack_require__("14c3");
var regexpExec = __webpack_require__("9263");
var fails = __webpack_require__("d039");

var arrayPush = [].push;
var min = Math.min;
var MAX_UINT32 = 0xFFFFFFFF;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { return !RegExp(MAX_UINT32, 'y'); });

// @@split logic
fixRegExpWellKnownSymbolLogic('split', 2, function (SPLIT, nativeSplit, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'.split(/(b)*/)[1] == 'c' ||
    // eslint-disable-next-line regexp/no-empty-group -- required for testing
    'test'.split(/(?:)/, -1).length != 4 ||
    'ab'.split(/(?:ab)*/).length != 2 ||
    '.'.split(/(.?)(.?)/).length != 4 ||
    // eslint-disable-next-line regexp/no-assertion-capturing-group, regexp/no-empty-group -- required for testing
    '.'.split(/()()/).length > 1 ||
    ''.split(/.?/).length
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(requireObjectCoercible(this));
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (separator === undefined) return [string];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) {
        return nativeSplit.call(string, separator, lim);
      }
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy.lastIndex;
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match.length > 1 && match.index < string.length) arrayPush.apply(output, match.slice(1));
          lastLength = match[0].length;
          lastLastIndex = lastIndex;
          if (output.length >= lim) break;
        }
        if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
      }
      if (lastLastIndex === string.length) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output.length > lim ? output.slice(0, lim) : output;
    };
  // Chakra, V8
  } else if ('0'.split(undefined, 0).length) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : nativeSplit.call(this, separator, limit);
    };
  } else internalSplit = nativeSplit;

  return [
    // `String.prototype.split` method
    // https://tc39.es/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = requireObjectCoercible(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== nativeSplit);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
}, !SUPPORTS_Y);


/***/ }),

/***/ "14c3":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("c6b6");
var regexpExec = __webpack_require__("9263");

// `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }

  if (classof(R) !== 'RegExp') {
    throw TypeError('RegExp#exec called on incompatible receiver');
  }

  return regexpExec.call(R, S);
};



/***/ }),

/***/ "19aa":
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name) {
  if (!(it instanceof Constructor)) {
    throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
  } return it;
};


/***/ }),

/***/ "1be4":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "1c0b":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),

/***/ "1c7e":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};


/***/ }),

/***/ "1cdc":
/***/ (function(module, exports, __webpack_require__) {

var userAgent = __webpack_require__("342f");

module.exports = /(iphone|ipod|ipad).*applewebkit/i.test(userAgent);


/***/ }),

/***/ "1d80":
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "1dde":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var wellKnownSymbol = __webpack_require__("b622");
var V8_VERSION = __webpack_require__("2d00");

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),

/***/ "2266":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var isArrayIteratorMethod = __webpack_require__("e95a");
var toLength = __webpack_require__("50c4");
var bind = __webpack_require__("0366");
var getIteratorMethod = __webpack_require__("35a1");
var iteratorClose = __webpack_require__("2a62");

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

module.exports = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind(unboundFunction, that, 1 + AS_ENTRIES + INTERRUPTED);
  var iterator, iterFn, index, length, result, next, step;

  var stop = function (condition) {
    if (iterator) iteratorClose(iterator);
    return new Result(true, condition);
  };

  var callFn = function (value) {
    if (AS_ENTRIES) {
      anObject(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    } return INTERRUPTED ? fn(value, stop) : fn(value);
  };

  if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (typeof iterFn != 'function') throw TypeError('Target is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = toLength(iterable.length); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && result instanceof Result) return result;
      } return new Result(false);
    }
    iterator = iterFn.call(iterable);
  }

  next = iterator.next;
  while (!(step = next.call(iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose(iterator);
      throw error;
    }
    if (typeof result == 'object' && result && result instanceof Result) return result;
  } return new Result(false);
};


/***/ }),

/***/ "23cb":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a691");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "23e7":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
var createNonEnumerableProperty = __webpack_require__("9112");
var redefine = __webpack_require__("6eeb");
var setGlobal = __webpack_require__("ce4e");
var copyConstructorProperties = __webpack_require__("e893");
var isForced = __webpack_require__("94ca");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "241c":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("ca84");
var enumBugKeys = __webpack_require__("7839");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "25f0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var redefine = __webpack_require__("6eeb");
var anObject = __webpack_require__("825a");
var fails = __webpack_require__("d039");
var flags = __webpack_require__("ad6d");

var TO_STRING = 'toString';
var RegExpPrototype = RegExp.prototype;
var nativeToString = RegExpPrototype[TO_STRING];

var NOT_GENERIC = fails(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = nativeToString.name != TO_STRING;

// `RegExp.prototype.toString` method
// https://tc39.es/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) {
  redefine(RegExp.prototype, TO_STRING, function toString() {
    var R = anObject(this);
    var p = String(R.source);
    var rf = R.flags;
    var f = String(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype) ? flags.call(R) : rf);
    return '/' + p + '/' + f;
  }, { unsafe: true });
}


/***/ }),

/***/ "2626":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__("d066");
var definePropertyModule = __webpack_require__("9bf2");
var wellKnownSymbol = __webpack_require__("b622");
var DESCRIPTORS = __webpack_require__("83ab");

var SPECIES = wellKnownSymbol('species');

module.exports = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
  var defineProperty = definePropertyModule.f;

  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
    defineProperty(Constructor, SPECIES, {
      configurable: true,
      get: function () { return this; }
    });
  }
};


/***/ }),

/***/ "2a62":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");

module.exports = function (iterator) {
  var returnMethod = iterator['return'];
  if (returnMethod !== undefined) {
    return anObject(returnMethod.call(iterator)).value;
  }
};


/***/ }),

/***/ "2cf4":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var fails = __webpack_require__("d039");
var bind = __webpack_require__("0366");
var html = __webpack_require__("1be4");
var createElement = __webpack_require__("cc12");
var IS_IOS = __webpack_require__("1cdc");
var IS_NODE = __webpack_require__("605d");

var location = global.location;
var set = global.setImmediate;
var clear = global.clearImmediate;
var process = global.process;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;

var run = function (id) {
  // eslint-disable-next-line no-prototype-builtins -- safe
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};

var runner = function (id) {
  return function () {
    run(id);
  };
};

var listener = function (event) {
  run(event.data);
};

var post = function (id) {
  // old engines have not location.origin
  global.postMessage(id + '', location.protocol + '//' + location.host);
};

// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
  set = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func -- spec requirement
      (typeof fn == 'function' ? fn : Function(fn)).apply(undefined, args);
    };
    defer(counter);
    return counter;
  };
  clear = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (IS_NODE) {
    defer = function (id) {
      process.nextTick(runner(id));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(runner(id));
    };
  // Browsers with MessageChannel, includes WebWorkers
  // except iOS - https://github.com/zloirock/core-js/issues/624
  } else if (MessageChannel && !IS_IOS) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = bind(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (
    global.addEventListener &&
    typeof postMessage == 'function' &&
    !global.importScripts &&
    location && location.protocol !== 'file:' &&
    !fails(post)
  ) {
    defer = post;
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in createElement('script')) {
    defer = function (id) {
      html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(runner(id), 0);
    };
  }
}

module.exports = {
  set: set,
  clear: clear
};


/***/ }),

/***/ "2d00":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var userAgent = __webpack_require__("342f");

var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),

/***/ "342f":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "35a1":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("f5df");
var Iterators = __webpack_require__("3f8c");
var wellKnownSymbol = __webpack_require__("b622");

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "37e8":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var definePropertyModule = __webpack_require__("9bf2");
var anObject = __webpack_require__("825a");
var objectKeys = __webpack_require__("df75");

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),

/***/ "3bbe":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};


/***/ }),

/***/ "3f8c":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "428f":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");

module.exports = global;


/***/ }),

/***/ "44ad":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var classof = __webpack_require__("c6b6");

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "44d2":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");
var create = __webpack_require__("7c73");
var definePropertyModule = __webpack_require__("9bf2");

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "44de":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");

module.exports = function (a, b) {
  var console = global.console;
  if (console && console.error) {
    arguments.length === 1 ? console.error(a) : console.error(a, b);
  }
};


/***/ }),

/***/ "44e7":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");
var classof = __webpack_require__("c6b6");
var wellKnownSymbol = __webpack_require__("b622");

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};


/***/ }),

/***/ "4840":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var aFunction = __webpack_require__("1c0b");
var wellKnownSymbol = __webpack_require__("b622");

var SPECIES = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor
module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aFunction(S);
};


/***/ }),

/***/ "4930":
/***/ (function(module, exports, __webpack_require__) {

var IS_NODE = __webpack_require__("605d");
var V8_VERSION = __webpack_require__("2d00");
var fails = __webpack_require__("d039");

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // eslint-disable-next-line es/no-symbol -- required for testing
  return !Symbol.sham &&
    // Chrome 38 Symbol has incorrect toString conversion
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    (IS_NODE ? V8_VERSION === 38 : V8_VERSION > 37 && V8_VERSION < 41);
});


/***/ }),

/***/ "4d64":
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__("fc6a");
var toLength = __webpack_require__("50c4");
var toAbsoluteIndex = __webpack_require__("23cb");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "4de4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $filter = __webpack_require__("b727").filter;
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');

// `Array.prototype.filter` method
// https://tc39.es/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "50c4":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a691");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "5135":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "5692":
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__("c430");
var store = __webpack_require__("c6cd");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.10.0',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "56ef":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");
var getOwnPropertyNamesModule = __webpack_require__("241c");
var getOwnPropertySymbolsModule = __webpack_require__("7418");
var anObject = __webpack_require__("825a");

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "5899":
/***/ (function(module, exports) {

// a string of all valid unicode whitespaces
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
  '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "58a8":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("1d80");
var whitespaces = __webpack_require__("5899");

var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = String(requireObjectCoercible($this));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),

/***/ "5c6c":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "605d":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("c6b6");
var global = __webpack_require__("da84");

module.exports = classof(global.process) == 'process';


/***/ }),

/***/ "60da":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("83ab");
var fails = __webpack_require__("d039");
var objectKeys = __webpack_require__("df75");
var getOwnPropertySymbolsModule = __webpack_require__("7418");
var propertyIsEnumerableModule = __webpack_require__("d1e7");
var toObject = __webpack_require__("7b0b");
var IndexedObject = __webpack_require__("44ad");

// eslint-disable-next-line es/no-object-assign -- safe
var $assign = Object.assign;
// eslint-disable-next-line es/no-object-defineproperty -- required for testing
var defineProperty = Object.defineProperty;

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
module.exports = !$assign || fails(function () {
  // should have correct order of operations (Edge bug)
  if (DESCRIPTORS && $assign({ b: 1 }, $assign(defineProperty({}, 'a', {
    enumerable: true,
    get: function () {
      defineProperty(this, 'b', {
        value: 3,
        enumerable: false
      });
    }
  }), { b: 2 })).b !== 1) return true;
  // should work with symbols and should have deterministic property order (V8 bug)
  var A = {};
  var B = {};
  // eslint-disable-next-line es/no-symbol -- safe
  var symbol = Symbol();
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
  return $assign({}, A)[symbol] != 7 || objectKeys($assign({}, B)).join('') != alphabet;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars -- required for `.length`
  var T = toObject(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable = propertyIsEnumerableModule.f;
  while (argumentsLength > index) {
    var S = IndexedObject(arguments[index++]);
    var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || propertyIsEnumerable.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),

/***/ "6547":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a691");
var requireObjectCoercible = __webpack_require__("1d80");

// `String.prototype.{ codePointAt, at }` methods implementation
var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),

/***/ "65f0":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");
var isArray = __webpack_require__("e8b5");
var wellKnownSymbol = __webpack_require__("b622");

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};


/***/ }),

/***/ "69f3":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__("7f9a");
var global = __webpack_require__("da84");
var isObject = __webpack_require__("861d");
var createNonEnumerableProperty = __webpack_require__("9112");
var objectHas = __webpack_require__("5135");
var shared = __webpack_require__("c6cd");
var sharedKey = __webpack_require__("f772");
var hiddenKeys = __webpack_require__("d012");

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    metadata.facade = it;
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "6eeb":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var createNonEnumerableProperty = __webpack_require__("9112");
var has = __webpack_require__("5135");
var setGlobal = __webpack_require__("ce4e");
var inspectSource = __webpack_require__("8925");
var InternalStateModule = __webpack_require__("69f3");

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var state;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) {
      createNonEnumerableProperty(value, 'name', key);
    }
    state = enforceInternalState(value);
    if (!state.source) {
      state.source = TEMPLATE.join(typeof key == 'string' ? key : '');
    }
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});


/***/ }),

/***/ "7156":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");
var setPrototypeOf = __webpack_require__("d2bb");

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    typeof (NewTarget = dummy.constructor) == 'function' &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),

/***/ "7418":
/***/ (function(module, exports) {

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "7839":
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "7b0b":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("1d80");

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "7c73":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var defineProperties = __webpack_require__("37e8");
var enumBugKeys = __webpack_require__("7839");
var hiddenKeys = __webpack_require__("d012");
var html = __webpack_require__("1be4");
var documentCreateElement = __webpack_require__("cc12");
var sharedKey = __webpack_require__("f772");

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    /* global ActiveXObject -- old IE */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),

/***/ "7db0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $find = __webpack_require__("b727").find;
var addToUnscopables = __webpack_require__("44d2");

var FIND = 'find';
var SKIPS_HOLES = true;

// Shouldn't skip holes
if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });

// `Array.prototype.find` method
// https://tc39.es/ecma262/#sec-array.prototype.find
$({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND);


/***/ }),

/***/ "7f9a":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var inspectSource = __webpack_require__("8925");

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ "825a":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "83ab":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "8418":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toPrimitive = __webpack_require__("c04e");
var definePropertyModule = __webpack_require__("9bf2");
var createPropertyDescriptor = __webpack_require__("5c6c");

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),

/***/ "857a":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("1d80");

var quot = /"/g;

// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
// https://tc39.es/ecma262/#sec-createhtml
module.exports = function (string, tag, attribute, value) {
  var S = String(requireObjectCoercible(string));
  var p1 = '<' + tag;
  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};


/***/ }),

/***/ "861d":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "8925":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("c6cd");

var functionToString = Function.toString;

// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "8aa5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__("6547").charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.es/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),

/***/ "90e3":
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ "9112":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var definePropertyModule = __webpack_require__("9bf2");
var createPropertyDescriptor = __webpack_require__("5c6c");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "9263":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpFlags = __webpack_require__("ad6d");
var stickyHelpers = __webpack_require__("9f7f");
var shared = __webpack_require__("5692");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = shared('native-string-replace', String.prototype.replace);

var patchedExec = nativeExec;

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y || stickyHelpers.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
// eslint-disable-next-line regexp/no-assertion-capturing-group, regexp/no-empty-group -- required for testing
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = regexpFlags.call(re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = flags.replace('y', '');
      if (flags.indexOf('g') === -1) {
        flags += 'g';
      }

      strCopy = String(str).slice(re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex - 1] !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = nativeExec.call(sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = match.input.slice(charsAdded);
        match[0] = match[0].slice(charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "94ca":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "96cf":
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "9911":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var createHTML = __webpack_require__("857a");
var forcedStringHTMLMethod = __webpack_require__("af03");

// `String.prototype.link` method
// https://tc39.es/ecma262/#sec-string.prototype.link
$({ target: 'String', proto: true, forced: forcedStringHTMLMethod('link') }, {
  link: function link(url) {
    return createHTML(this, 'a', 'href', url);
  }
});


/***/ }),

/***/ "9bf2":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var IE8_DOM_DEFINE = __webpack_require__("0cfb");
var anObject = __webpack_require__("825a");
var toPrimitive = __webpack_require__("c04e");

// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "9f7f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fails = __webpack_require__("d039");

// babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,
// so we use an intermediate function.
function RE(s, f) {
  return RegExp(s, f);
}

exports.UNSUPPORTED_Y = fails(function () {
  // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
  var re = RE('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

exports.BROKEN_CARET = fails(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = RE('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});


/***/ }),

/***/ "a1a3":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "a4b4":
/***/ (function(module, exports, __webpack_require__) {

var userAgent = __webpack_require__("342f");

module.exports = /web0s(?!.*chrome)/i.test(userAgent);


/***/ }),

/***/ "a691":
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.es/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "a9e3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("83ab");
var global = __webpack_require__("da84");
var isForced = __webpack_require__("94ca");
var redefine = __webpack_require__("6eeb");
var has = __webpack_require__("5135");
var classof = __webpack_require__("c6b6");
var inheritIfRequired = __webpack_require__("7156");
var toPrimitive = __webpack_require__("c04e");
var fails = __webpack_require__("d039");
var create = __webpack_require__("7c73");
var getOwnPropertyNames = __webpack_require__("241c").f;
var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
var defineProperty = __webpack_require__("9bf2").f;
var trim = __webpack_require__("58a8").trim;

var NUMBER = 'Number';
var NativeNumber = global[NUMBER];
var NumberPrototype = NativeNumber.prototype;

// Opera ~12 has broken Object#toString
var BROKEN_CLASSOF = classof(create(NumberPrototype)) == NUMBER;

// `ToNumber` abstract operation
// https://tc39.es/ecma262/#sec-tonumber
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  var first, third, radix, maxCode, digits, length, index, code;
  if (typeof it == 'string' && it.length > 2) {
    it = trim(it);
    first = it.charCodeAt(0);
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal of /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal of /^0o[0-7]+$/i
        default: return +it;
      }
      digits = it.slice(2);
      length = digits.length;
      for (index = 0; index < length; index++) {
        code = digits.charCodeAt(index);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

// `Number` constructor
// https://tc39.es/ecma262/#sec-number-constructor
if (isForced(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'))) {
  var NumberWrapper = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var dummy = this;
    return dummy instanceof NumberWrapper
      // check on 1..constructor(foo) case
      && (BROKEN_CLASSOF ? fails(function () { NumberPrototype.valueOf.call(dummy); }) : classof(dummy) != NUMBER)
        ? inheritIfRequired(new NativeNumber(toNumber(it)), dummy, NumberWrapper) : toNumber(it);
  };
  for (var keys = DESCRIPTORS ? getOwnPropertyNames(NativeNumber) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES2015 (in case, if modules with ES2015 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,' +
    // ESNext
    'fromString,range'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(NativeNumber, key = keys[j]) && !has(NumberWrapper, key)) {
      defineProperty(NumberWrapper, key, getOwnPropertyDescriptor(NativeNumber, key));
    }
  }
  NumberWrapper.prototype = NumberPrototype;
  NumberPrototype.constructor = NumberWrapper;
  redefine(global, NUMBER, NumberWrapper);
}


/***/ }),

/***/ "ac1f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var exec = __webpack_require__("9263");

// `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec
$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});


/***/ }),

/***/ "ad6d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__("825a");

// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "af03":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

// check the existence of a method, lowercase
// of a tag and escaping quotes in arguments
module.exports = function (METHOD_NAME) {
  return fails(function () {
    var test = ''[METHOD_NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  });
};


/***/ }),

/***/ "b041":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__("00ee");
var classof = __webpack_require__("f5df");

// `Object.prototype.toString` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),

/***/ "b0c0":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var defineProperty = __webpack_require__("9bf2").f;

var FunctionPrototype = Function.prototype;
var FunctionPrototypeToString = FunctionPrototype.toString;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// Function instances `.name` property
// https://tc39.es/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !(NAME in FunctionPrototype)) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return FunctionPrototypeToString.call(this).match(nameRE)[1];
      } catch (error) {
        return '';
      }
    }
  });
}


/***/ }),

/***/ "b575":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
var macrotask = __webpack_require__("2cf4").set;
var IS_IOS = __webpack_require__("1cdc");
var IS_WEBOS_WEBKIT = __webpack_require__("a4b4");
var IS_NODE = __webpack_require__("605d");

var MutationObserver = global.MutationObserver || global.WebKitMutationObserver;
var document = global.document;
var process = global.process;
var Promise = global.Promise;
// Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
var queueMicrotaskDescriptor = getOwnPropertyDescriptor(global, 'queueMicrotask');
var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;

var flush, head, last, notify, toggle, node, promise, then;

// modern engines have queueMicrotask method
if (!queueMicrotask) {
  flush = function () {
    var parent, fn;
    if (IS_NODE && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (error) {
        if (head) notify();
        else last = undefined;
        throw error;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
  // also except WebOS Webkit https://github.com/zloirock/core-js/issues/898
  if (!IS_IOS && !IS_NODE && !IS_WEBOS_WEBKIT && MutationObserver && document) {
    toggle = true;
    node = document.createTextNode('');
    new MutationObserver(flush).observe(node, { characterData: true });
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    promise = Promise.resolve(undefined);
    then = promise.then;
    notify = function () {
      then.call(promise, flush);
    };
  // Node.js without promises
  } else if (IS_NODE) {
    notify = function () {
      process.nextTick(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }
}

module.exports = queueMicrotask || function (fn) {
  var task = { fn: fn, next: undefined };
  if (last) last.next = task;
  if (!head) {
    head = task;
    notify();
  } last = task;
};


/***/ }),

/***/ "b622":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var shared = __webpack_require__("5692");
var has = __webpack_require__("5135");
var uid = __webpack_require__("90e3");
var NATIVE_SYMBOL = __webpack_require__("4930");
var USE_SYMBOL_AS_UID = __webpack_require__("fdbf");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    if (NATIVE_SYMBOL && has(Symbol, name)) {
      WellKnownSymbolsStore[name] = Symbol[name];
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
    }
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "b727":
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__("0366");
var IndexedObject = __webpack_require__("44ad");
var toObject = __webpack_require__("7b0b");
var toLength = __webpack_require__("50c4");
var arraySpeciesCreate = __webpack_require__("65f0");

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterOut }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_OUT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_OUT ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push.call(target, value); // filterOut
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterOut` method
  // https://github.com/tc39/proposal-array-filtering
  filterOut: createMethod(7)
};


/***/ }),

/***/ "c04e":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "c430":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "c6b6":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "c6cd":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var setGlobal = __webpack_require__("ce4e");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "c740":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $findIndex = __webpack_require__("b727").findIndex;
var addToUnscopables = __webpack_require__("44d2");

var FIND_INDEX = 'findIndex';
var SKIPS_HOLES = true;

// Shouldn't skip holes
if (FIND_INDEX in []) Array(1)[FIND_INDEX](function () { SKIPS_HOLES = false; });

// `Array.prototype.findIndex` method
// https://tc39.es/ecma262/#sec-array.prototype.findindex
$({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
  findIndex: function findIndex(callbackfn /* , that = undefined */) {
    return $findIndex(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND_INDEX);


/***/ }),

/***/ "c8ba":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "ca84":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("5135");
var toIndexedObject = __webpack_require__("fc6a");
var indexOf = __webpack_require__("4d64").indexOf;
var hiddenKeys = __webpack_require__("d012");

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "cc12":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var isObject = __webpack_require__("861d");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "cca6":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var assign = __webpack_require__("60da");

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
// eslint-disable-next-line es/no-object-assign -- required for testing
$({ target: 'Object', stat: true, forced: Object.assign !== assign }, {
  assign: assign
});


/***/ }),

/***/ "cdf9":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var isObject = __webpack_require__("861d");
var newPromiseCapability = __webpack_require__("f069");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "ce4e":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var createNonEnumerableProperty = __webpack_require__("9112");

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "d012":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "d039":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "d066":
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__("428f");
var global = __webpack_require__("da84");

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "d1e7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


/***/ }),

/***/ "d2bb":
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable no-proto -- safe */
var anObject = __webpack_require__("825a");
var aPossiblePrototype = __webpack_require__("3bbe");

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ "d3b7":
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__("00ee");
var redefine = __webpack_require__("6eeb");
var toString = __webpack_require__("b041");

// `Object.prototype.toString` method
// https://tc39.es/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT) {
  redefine(Object.prototype, 'toString', toString, { unsafe: true });
}


/***/ }),

/***/ "d44e":
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__("9bf2").f;
var has = __webpack_require__("5135");
var wellKnownSymbol = __webpack_require__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),

/***/ "d784":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4` since it's moved to entry points
__webpack_require__("ac1f");
var redefine = __webpack_require__("6eeb");
var fails = __webpack_require__("d039");
var wellKnownSymbol = __webpack_require__("b622");
var regexpExec = __webpack_require__("9263");
var createNonEnumerableProperty = __webpack_require__("9112");

var SPECIES = wellKnownSymbol('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  // eslint-disable-next-line regexp/prefer-escape-replacement-dollar-char -- required for testing
  return 'a'.replace(/./, '$0') === '$0';
})();

var REPLACE = wellKnownSymbol('replace');
// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }
  return false;
})();

// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  // eslint-disable-next-line regexp/no-empty-group -- required for testing
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});

module.exports = function (KEY, length, exec, sham) {
  var SYMBOL = wellKnownSymbol(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () { execCalled = true; return null; };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !(
      REPLACE_SUPPORTS_NAMED_GROUPS &&
      REPLACE_KEEPS_$0 &&
      !REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    )) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      if (regexp.exec === regexpExec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
        }
        return { done: true, value: nativeMethod.call(str, regexp, arg2) };
      }
      return { done: false };
    }, {
      REPLACE_KEEPS_$0: REPLACE_KEEPS_$0,
      REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    });
    var stringMethod = methods[0];
    var regexMethod = methods[1];

    redefine(String.prototype, KEY, stringMethod);
    redefine(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return regexMethod.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return regexMethod.call(string, this); }
    );
  }

  if (sham) createNonEnumerableProperty(RegExp.prototype[SYMBOL], 'sham', true);
};


/***/ }),

/***/ "d81d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $map = __webpack_require__("b727").map;
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');

// `Array.prototype.map` method
// https://tc39.es/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "da84":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "df75":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("ca84");
var enumBugKeys = __webpack_require__("7839");

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "e2cc":
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__("6eeb");

module.exports = function (target, src, options) {
  for (var key in src) redefine(target, key, src[key], options);
  return target;
};


/***/ }),

/***/ "e667":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { error: false, value: exec() };
  } catch (error) {
    return { error: true, value: error };
  }
};


/***/ }),

/***/ "e6cf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var IS_PURE = __webpack_require__("c430");
var global = __webpack_require__("da84");
var getBuiltIn = __webpack_require__("d066");
var NativePromise = __webpack_require__("fea9");
var redefine = __webpack_require__("6eeb");
var redefineAll = __webpack_require__("e2cc");
var setToStringTag = __webpack_require__("d44e");
var setSpecies = __webpack_require__("2626");
var isObject = __webpack_require__("861d");
var aFunction = __webpack_require__("1c0b");
var anInstance = __webpack_require__("19aa");
var inspectSource = __webpack_require__("8925");
var iterate = __webpack_require__("2266");
var checkCorrectnessOfIteration = __webpack_require__("1c7e");
var speciesConstructor = __webpack_require__("4840");
var task = __webpack_require__("2cf4").set;
var microtask = __webpack_require__("b575");
var promiseResolve = __webpack_require__("cdf9");
var hostReportErrors = __webpack_require__("44de");
var newPromiseCapabilityModule = __webpack_require__("f069");
var perform = __webpack_require__("e667");
var InternalStateModule = __webpack_require__("69f3");
var isForced = __webpack_require__("94ca");
var wellKnownSymbol = __webpack_require__("b622");
var IS_NODE = __webpack_require__("605d");
var V8_VERSION = __webpack_require__("2d00");

var SPECIES = wellKnownSymbol('species');
var PROMISE = 'Promise';
var getInternalState = InternalStateModule.get;
var setInternalState = InternalStateModule.set;
var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
var PromiseConstructor = NativePromise;
var TypeError = global.TypeError;
var document = global.document;
var process = global.process;
var $fetch = getBuiltIn('fetch');
var newPromiseCapability = newPromiseCapabilityModule.f;
var newGenericPromiseCapability = newPromiseCapability;
var DISPATCH_EVENT = !!(document && document.createEvent && global.dispatchEvent);
var NATIVE_REJECTION_EVENT = typeof PromiseRejectionEvent == 'function';
var UNHANDLED_REJECTION = 'unhandledrejection';
var REJECTION_HANDLED = 'rejectionhandled';
var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;
var HANDLED = 1;
var UNHANDLED = 2;
var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;

var FORCED = isForced(PROMISE, function () {
  var GLOBAL_CORE_JS_PROMISE = inspectSource(PromiseConstructor) !== String(PromiseConstructor);
  if (!GLOBAL_CORE_JS_PROMISE) {
    // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
    // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
    // We can't detect it synchronously, so just check versions
    if (V8_VERSION === 66) return true;
    // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    if (!IS_NODE && !NATIVE_REJECTION_EVENT) return true;
  }
  // We need Promise#finally in the pure version for preventing prototype pollution
  if (IS_PURE && !PromiseConstructor.prototype['finally']) return true;
  // We can't use @@species feature detection in V8 since it causes
  // deoptimization and performance degradation
  // https://github.com/zloirock/core-js/issues/679
  if (V8_VERSION >= 51 && /native code/.test(PromiseConstructor)) return false;
  // Detect correctness of subclassing with @@species support
  var promise = PromiseConstructor.resolve(1);
  var FakePromise = function (exec) {
    exec(function () { /* empty */ }, function () { /* empty */ });
  };
  var constructor = promise.constructor = {};
  constructor[SPECIES] = FakePromise;
  return !(promise.then(function () { /* empty */ }) instanceof FakePromise);
});

var INCORRECT_ITERATION = FORCED || !checkCorrectnessOfIteration(function (iterable) {
  PromiseConstructor.all(iterable)['catch'](function () { /* empty */ });
});

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};

var notify = function (state, isReject) {
  if (state.notified) return;
  state.notified = true;
  var chain = state.reactions;
  microtask(function () {
    var value = state.value;
    var ok = state.state == FULFILLED;
    var index = 0;
    // variable length - can't use forEach
    while (chain.length > index) {
      var reaction = chain[index++];
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (state.rejection === UNHANDLED) onHandleUnhandled(state);
            state.rejection = HANDLED;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // can throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (error) {
        if (domain && !exited) domain.exit();
        reject(error);
      }
    }
    state.reactions = [];
    state.notified = false;
    if (isReject && !state.rejection) onUnhandled(state);
  });
};

var dispatchEvent = function (name, promise, reason) {
  var event, handler;
  if (DISPATCH_EVENT) {
    event = document.createEvent('Event');
    event.promise = promise;
    event.reason = reason;
    event.initEvent(name, false, true);
    global.dispatchEvent(event);
  } else event = { promise: promise, reason: reason };
  if (!NATIVE_REJECTION_EVENT && (handler = global['on' + name])) handler(event);
  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
};

var onUnhandled = function (state) {
  task.call(global, function () {
    var promise = state.facade;
    var value = state.value;
    var IS_UNHANDLED = isUnhandled(state);
    var result;
    if (IS_UNHANDLED) {
      result = perform(function () {
        if (IS_NODE) {
          process.emit('unhandledRejection', value, promise);
        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
      if (result.error) throw result.value;
    }
  });
};

var isUnhandled = function (state) {
  return state.rejection !== HANDLED && !state.parent;
};

var onHandleUnhandled = function (state) {
  task.call(global, function () {
    var promise = state.facade;
    if (IS_NODE) {
      process.emit('rejectionHandled', promise);
    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
  });
};

var bind = function (fn, state, unwrap) {
  return function (value) {
    fn(state, value, unwrap);
  };
};

var internalReject = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  state.value = value;
  state.state = REJECTED;
  notify(state, true);
};

var internalResolve = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  try {
    if (state.facade === value) throw TypeError("Promise can't be resolved itself");
    var then = isThenable(value);
    if (then) {
      microtask(function () {
        var wrapper = { done: false };
        try {
          then.call(value,
            bind(internalResolve, wrapper, state),
            bind(internalReject, wrapper, state)
          );
        } catch (error) {
          internalReject(wrapper, error, state);
        }
      });
    } else {
      state.value = value;
      state.state = FULFILLED;
      notify(state, false);
    }
  } catch (error) {
    internalReject({ done: false }, error, state);
  }
};

// constructor polyfill
if (FORCED) {
  // 25.4.3.1 Promise(executor)
  PromiseConstructor = function Promise(executor) {
    anInstance(this, PromiseConstructor, PROMISE);
    aFunction(executor);
    Internal.call(this);
    var state = getInternalState(this);
    try {
      executor(bind(internalResolve, state), bind(internalReject, state));
    } catch (error) {
      internalReject(state, error);
    }
  };
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  Internal = function Promise(executor) {
    setInternalState(this, {
      type: PROMISE,
      done: false,
      notified: false,
      parent: false,
      reactions: [],
      rejection: false,
      state: PENDING,
      value: undefined
    });
  };
  Internal.prototype = redefineAll(PromiseConstructor.prototype, {
    // `Promise.prototype.then` method
    // https://tc39.es/ecma262/#sec-promise.prototype.then
    then: function then(onFulfilled, onRejected) {
      var state = getInternalPromiseState(this);
      var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = IS_NODE ? process.domain : undefined;
      state.parent = true;
      state.reactions.push(reaction);
      if (state.state != PENDING) notify(state, false);
      return reaction.promise;
    },
    // `Promise.prototype.catch` method
    // https://tc39.es/ecma262/#sec-promise.prototype.catch
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    var state = getInternalState(promise);
    this.promise = promise;
    this.resolve = bind(internalResolve, state);
    this.reject = bind(internalReject, state);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === PromiseConstructor || C === PromiseWrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };

  if (!IS_PURE && typeof NativePromise == 'function') {
    nativeThen = NativePromise.prototype.then;

    // wrap native Promise#then for native async functions
    redefine(NativePromise.prototype, 'then', function then(onFulfilled, onRejected) {
      var that = this;
      return new PromiseConstructor(function (resolve, reject) {
        nativeThen.call(that, resolve, reject);
      }).then(onFulfilled, onRejected);
    // https://github.com/zloirock/core-js/issues/640
    }, { unsafe: true });

    // wrap fetch result
    if (typeof $fetch == 'function') $({ global: true, enumerable: true, forced: true }, {
      // eslint-disable-next-line no-unused-vars -- required for `.length`
      fetch: function fetch(input /* , init */) {
        return promiseResolve(PromiseConstructor, $fetch.apply(global, arguments));
      }
    });
  }
}

$({ global: true, wrap: true, forced: FORCED }, {
  Promise: PromiseConstructor
});

setToStringTag(PromiseConstructor, PROMISE, false, true);
setSpecies(PROMISE);

PromiseWrapper = getBuiltIn(PROMISE);

// statics
$({ target: PROMISE, stat: true, forced: FORCED }, {
  // `Promise.reject` method
  // https://tc39.es/ecma262/#sec-promise.reject
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    capability.reject.call(undefined, r);
    return capability.promise;
  }
});

$({ target: PROMISE, stat: true, forced: IS_PURE || FORCED }, {
  // `Promise.resolve` method
  // https://tc39.es/ecma262/#sec-promise.resolve
  resolve: function resolve(x) {
    return promiseResolve(IS_PURE && this === PromiseWrapper ? PromiseConstructor : this, x);
  }
});

$({ target: PROMISE, stat: true, forced: INCORRECT_ITERATION }, {
  // `Promise.all` method
  // https://tc39.es/ecma262/#sec-promise.all
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aFunction(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        $promiseResolve.call(C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  },
  // `Promise.race` method
  // https://tc39.es/ecma262/#sec-promise.race
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aFunction(C.resolve);
      iterate(iterable, function (promise) {
        $promiseResolve.call(C, promise).then(capability.resolve, reject);
      });
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});


/***/ }),

/***/ "e893":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("5135");
var ownKeys = __webpack_require__("56ef");
var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
var definePropertyModule = __webpack_require__("9bf2");

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),

/***/ "e8b5":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("c6b6");

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),

/***/ "e95a":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");
var Iterators = __webpack_require__("3f8c");

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),

/***/ "f069":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__("1c0b");

var PromiseCapability = function (C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
};

// 25.4.1.5 NewPromiseCapability(C)
module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "f5df":
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__("00ee");
var classofRaw = __webpack_require__("c6b6");
var wellKnownSymbol = __webpack_require__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};


/***/ }),

/***/ "f772":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("5692");
var uid = __webpack_require__("90e3");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "SpAccountList", function() { return /* reexport */ components_SpAccountList; });
__webpack_require__.d(__webpack_exports__, "SpAmountSelect", function() { return /* reexport */ components_SpAmountSelect; });
__webpack_require__.d(__webpack_exports__, "SpAssets", function() { return /* reexport */ components_SpAssets; });
__webpack_require__.d(__webpack_exports__, "SpButton", function() { return /* reexport */ components_SpButton; });
__webpack_require__.d(__webpack_exports__, "SpCard", function() { return /* reexport */ components_SpCard; });
__webpack_require__.d(__webpack_exports__, "SpLayout", function() { return /* reexport */ components_SpLayout; });
__webpack_require__.d(__webpack_exports__, "SpRelayer", function() { return /* reexport */ components_SpRelayer; });
__webpack_require__.d(__webpack_exports__, "SpRelayers", function() { return /* reexport */ components_SpRelayers; });
__webpack_require__.d(__webpack_exports__, "SpSidebar", function() { return /* reexport */ components_SpSidebar; });
__webpack_require__.d(__webpack_exports__, "SpStatusLED", function() { return /* reexport */ components_SpStatusLED; });
__webpack_require__.d(__webpack_exports__, "SpStatusAPI", function() { return /* reexport */ components_SpStatusAPI; });
__webpack_require__.d(__webpack_exports__, "SpStatusRPC", function() { return /* reexport */ components_SpStatusRPC; });
__webpack_require__.d(__webpack_exports__, "SpStatusWS", function() { return /* reexport */ components_SpStatusWS; });
__webpack_require__.d(__webpack_exports__, "SpLinkIcon", function() { return /* reexport */ components_SpLinkIcon; });

// NAMESPACE OBJECT: ./src/components/index.ts
var components_namespaceObject = {};
__webpack_require__.r(components_namespaceObject);
__webpack_require__.d(components_namespaceObject, "SpAccountList", function() { return components_SpAccountList; });
__webpack_require__.d(components_namespaceObject, "SpAmountSelect", function() { return components_SpAmountSelect; });
__webpack_require__.d(components_namespaceObject, "SpAssets", function() { return components_SpAssets; });
__webpack_require__.d(components_namespaceObject, "SpButton", function() { return components_SpButton; });
__webpack_require__.d(components_namespaceObject, "SpCard", function() { return components_SpCard; });
__webpack_require__.d(components_namespaceObject, "SpLayout", function() { return components_SpLayout; });
__webpack_require__.d(components_namespaceObject, "SpRelayer", function() { return components_SpRelayer; });
__webpack_require__.d(components_namespaceObject, "SpRelayers", function() { return components_SpRelayers; });
__webpack_require__.d(components_namespaceObject, "SpSidebar", function() { return components_SpSidebar; });
__webpack_require__.d(components_namespaceObject, "SpStatusLED", function() { return components_SpStatusLED; });
__webpack_require__.d(components_namespaceObject, "SpStatusAPI", function() { return components_SpStatusAPI; });
__webpack_require__.d(components_namespaceObject, "SpStatusRPC", function() { return components_SpStatusRPC; });
__webpack_require__.d(components_namespaceObject, "SpStatusWS", function() { return components_SpStatusWS; });
__webpack_require__.d(components_namespaceObject, "SpLinkIcon", function() { return components_SpLinkIcon; });

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./src/styles/app.scss
var app = __webpack_require__("a1a3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("b0c0");

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/SpAccountList/SpAccountList.vue?vue&type=template&id=6e89a222


var _hoisted_1 = {
  key: 0,
  class: "sp-accounts-list"
};
var _hoisted_2 = {
  key: 0
};
var _hoisted_3 = {
  key: 0,
  class: "sp-accounts-list-items"
};
var _hoisted_4 = {
  class: "sp-accounts-list-item__use"
};
var _hoisted_5 = {
  class: "sp-accounts-list-item__path"
};

var _hoisted_6 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("span", {
  class: "sp-icon sp-icon-Copy"
}, null, -1);

var _hoisted_7 = {
  key: 1,
  class: "sp-accounts-new"
};
var _hoisted_8 = {
  key: 1,
  class: "SpAccountForm SpForm"
};

var _hoisted_9 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
  class: "SpFormTitle"
}, [/*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("strong", null, "ADD ACCOUNT:")], -1);

var _hoisted_10 = {
  class: "SpAccountCheckbox SpCheckbox"
};
var _hoisted_11 = {
  for: "SpAccountNextAvailable"
};

var _hoisted_12 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])("CREATE NEXT AVAILABLE ACCOUNT? ");

var _hoisted_13 = {
  key: 0,
  class: "SpAccountHDPath"
};

var _hoisted_14 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" USE SPECIFIC HD PATH: ");

var _hoisted_15 = {
  class: "SpAccountCreate"
};

var _hoisted_16 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
  class: "SpButtonText"
}, "CREATE ACCOUNT", -1);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_SpLinkIcon = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("SpLinkIcon");

  return _ctx.depsLoaded ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", _hoisted_1, [!_ctx.newAccount.show ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", _hoisted_2, [_ctx.accountList.length > 0 ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("ul", _hoisted_3, [(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])(_ctx.accountList, function (account) {
    return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("li", {
      key: account.address,
      class: "sp-accounts-list-item"
    }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", _hoisted_4, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", _hoisted_5, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(account.pathIncrement), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
      class: ["sp-accounts-list-item__address", {
        'sp-active': account.address == _ctx.currentAccount
      }],
      onClick: function onClick($event) {
        return _ctx.useAccount(account.address);
      }
    }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.shortenAddress(account.address)), 11, ["onClick"]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
      class: "sp-accounts-list-item__copy",
      onClick: function onClick($event) {
        return _ctx.copyToClipboard(account.address);
      }
    }, [_hoisted_6], 8, ["onClick"])])]);
  }), 128))])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), _ctx.activeWallet.name != 'Keplr Integration' && _ctx.activeWallet.password != null ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", _hoisted_7, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_SpLinkIcon, {
    icon: "AddNew",
    text: "Generate new address",
    onClick: _ctx.createAccount
  }, null, 8, ["onClick"])])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), _ctx.newAccount.show ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", _hoisted_8, [_hoisted_9, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", _hoisted_10, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("label", _hoisted_11, [_hoisted_12, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("input", {
    type: "checkbox",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return _ctx.newAccount.nextAvailable = $event;
    }),
    id: "SpAccountNextAvailable"
  }, null, 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vModelCheckbox"], _ctx.newAccount.nextAvailable]])])]), !_ctx.newAccount.nextAvailable ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", _hoisted_13, [_hoisted_14, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("em", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.HDPath), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("input", {
    type: "number",
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return _ctx.newAccount.pathIncrement = $event;
    }),
    class: "SpInputNumber"
  }, null, 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vModelText"], _ctx.newAccount.pathIncrement]])])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", _hoisted_15, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("button", {
    onClick: _cache[3] || (_cache[3] = function ($event) {
      return _ctx.createAccount();
    }),
    class: "SpButton"
  }, [_hoisted_16])])])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true);
}
// CONCATENATED MODULE: ./src/components/SpAccountList/SpAccountList.vue?vue&type=template&id=6e89a222

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__("e6cf");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("d3b7");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}
// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__("96cf");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__("fb6a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.assign.js
var es_object_assign = __webpack_require__("cca6");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.link.js
var es_string_link = __webpack_require__("9911");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/SpLinkIcon/SpLinkIcon.vue?vue&type=template&id=29548be0


var SpLinkIconvue_type_template_id_29548be0_hoisted_1 = {
  class: "sp-link-icon"
};
var SpLinkIconvue_type_template_id_29548be0_hoisted_2 = {
  class: "sp-link-icon__icon"
};
var SpLinkIconvue_type_template_id_29548be0_hoisted_3 = {
  class: "sp-link-icon__text"
};
var SpLinkIconvue_type_template_id_29548be0_hoisted_4 = {
  class: "sp-link-icon__icon"
};
var SpLinkIconvue_type_template_id_29548be0_hoisted_5 = {
  class: "sp-link-icon__text"
};
var SpLinkIconvue_type_template_id_29548be0_hoisted_6 = {
  class: "sp-link-icon__icon"
};
var SpLinkIconvue_type_template_id_29548be0_hoisted_7 = {
  class: "sp-link-icon__text"
};
function SpLinkIconvue_type_template_id_29548be0_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("router-link");

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", SpLinkIconvue_type_template_id_29548be0_hoisted_1, [_ctx.link ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_router_link, {
    key: 0,
    to: _ctx.link,
    class: "sp-link-icon-wrapper",
    alt: _ctx.text,
    title: _ctx.text
  }, {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", SpLinkIconvue_type_template_id_29548be0_hoisted_2, [_ctx.icon ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("span", {
        key: 0,
        class: ["sp-icon", 'sp-icon-' + _ctx.icon]
      }, null, 2)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", SpLinkIconvue_type_template_id_29548be0_hoisted_3, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.text), 1)];
    }),
    _: 1
  }, 8, ["to", "alt", "title"])) : _ctx.href ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("a", {
    key: 1,
    class: "sp-link-icon-wrapper",
    alt: _ctx.text,
    title: _ctx.text,
    href: _ctx.href,
    target: _ctx.target
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", SpLinkIconvue_type_template_id_29548be0_hoisted_4, [_ctx.icon ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("span", {
    key: 0,
    class: ["sp-icon", 'sp-icon-' + _ctx.icon]
  }, null, 2)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", SpLinkIconvue_type_template_id_29548be0_hoisted_5, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.text), 1)], 8, ["alt", "title", "href", "target"])) : (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("a", {
    key: 2,
    class: "sp-link-icon-wrapper",
    alt: _ctx.text,
    title: _ctx.text
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", SpLinkIconvue_type_template_id_29548be0_hoisted_6, [_ctx.icon ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("span", {
    key: 0,
    class: ["sp-icon", 'sp-icon-' + _ctx.icon]
  }, null, 2)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", SpLinkIconvue_type_template_id_29548be0_hoisted_7, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.text), 1)], 8, ["alt", "title"]))]);
}
// CONCATENATED MODULE: ./src/components/SpLinkIcon/SpLinkIcon.vue?vue&type=template&id=29548be0

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/SpLinkIcon/SpLinkIcon.vue?vue&type=script&lang=ts

/* harmony default export */ var SpLinkIconvue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  name: 'SpLinkIcon',
  props: {
    link: {
      type: String
    },
    href: {
      type: String
    },
    target: {
      type: String
    },
    icon: {
      type: String
    },
    text: {
      type: String,
      required: true
    }
  }
}));
// CONCATENATED MODULE: ./src/components/SpLinkIcon/SpLinkIcon.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./src/components/SpLinkIcon/SpLinkIcon.vue



SpLinkIconvue_type_script_lang_ts.render = SpLinkIconvue_type_template_id_29548be0_render

/* harmony default export */ var SpLinkIcon = (SpLinkIconvue_type_script_lang_ts);
// CONCATENATED MODULE: ./src/utils/plugins/index.ts

var registerComponent = function registerComponent(instance, component) {
  if (component) {
    instance.component(component.name || '', component);
  }
};
var registerComponentProgrammatic = function registerComponentProgrammatic(instance, property, component) {
  if (!instance.config.globalProperties.$test) instance.config.globalProperties.$test = {};
  instance.config.globalProperties.$test[property] = component;
};
// CONCATENATED MODULE: ./src/components/SpLinkIcon/index.ts


var Plugin = {
  install: function install(vue) {
    registerComponent(vue, SpLinkIcon);
  }
}; // use(Plugin);

/* harmony default export */ var components_SpLinkIcon = (Plugin);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/SpAccountList/SpAccountList.vue?vue&type=script&lang=ts






/* harmony default export */ var SpAccountListvue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  name: 'SpAccountList',
  data: function data() {
    return {
      newAccount: {
        show: false,
        nextAvailable: true,
        pathIncrement: null
      }
    };
  },
  components: {
    SpLinkIcon: components_SpLinkIcon
  },
  computed: {
    activeWallet: function activeWallet() {
      return this.$store.state.common.wallet.activeWallet;
    },
    accountList: function accountList() {
      return this.$store.state.common.wallet.activeWallet.accounts;
    },
    HDPath: function HDPath() {
      return this.$store.state.common.wallet.activeWallet.HDpath;
    },
    depsLoaded: function depsLoaded() {
      return this._depsLoaded;
    },
    currentAccount: function currentAccount() {
      if (this._depsLoaded) {
        return this.$store.getters['common/wallet/address'];
      } else {
        return null;
      }
    }
  },
  beforeCreate: function beforeCreate() {
    var module = ['common', 'wallet'];

    for (var i = 1; i <= module.length; i++) {
      var submod = module.slice(0, i);

      if (!this.$store.hasModule(submod)) {
        console.log('Module `common.wallet` has not been registered!');
        this._depsLoaded = false;
        break;
      }
    }
  },
  methods: {
    copyToClipboard: function copyToClipboard(str) {
      var el = document.createElement('textarea');
      el.value = str;
      document.body.appendChild(el);
      el.select();
      el.setSelectionRange(0, 999999);
      document.execCommand('copy');
      document.body.removeChild(el);
    },
    defaultState: function defaultState() {
      return {
        newAccount: {
          show: false,
          nextAvailable: true,
          pathIncrement: null
        }
      };
    },
    reset: function reset() {
      Object.assign(this.$data, {
        newAccount: {
          show: false,
          nextAvailable: true,
          pathIncrement: null
        }
      });
    },
    newAccountForm: function newAccountForm() {
      this.newAccount.show = true;
    },
    shortenAddress: function shortenAddress(addr) {
      return addr.substr(0, 10) + '...' + addr.slice(-5);
    },
    useAccount: function () {
      var _useAccount = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(address) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!this._depsLoaded) {
                  _context.next = 4;
                  break;
                }

                _context.next = 3;
                return this.$store.dispatch('common/wallet/switchAccount', address);

              case 3:
                this.$emit('account-selected');

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function useAccount(_x) {
        return _useAccount.apply(this, arguments);
      }

      return useAccount;
    }(),
    createAccount: function () {
      var _createAccount = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!this._depsLoaded) {
                  _context2.next = 8;
                  break;
                }

                if (!this.newAccount.nextAvailable) {
                  _context2.next = 6;
                  break;
                }

                _context2.next = 4;
                return this.$store.dispatch('common/wallet/addAccount');

              case 4:
                _context2.next = 8;
                break;

              case 6:
                _context2.next = 8;
                return this.$store.dispatch('common/wallet/addAccount', this.newAccount.pathIncrement);

              case 8:
                this.reset();

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function createAccount() {
        return _createAccount.apply(this, arguments);
      }

      return createAccount;
    }()
  }
}));
// CONCATENATED MODULE: ./src/components/SpAccountList/SpAccountList.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./src/components/SpAccountList/SpAccountList.vue



SpAccountListvue_type_script_lang_ts.render = render

/* harmony default export */ var SpAccountList = (SpAccountListvue_type_script_lang_ts);
// CONCATENATED MODULE: ./src/components/SpAccountList/index.ts


var SpAccountList_Plugin = {
  install: function install(vue) {
    registerComponent(vue, SpAccountList);
  }
}; // use(Plugin);

/* harmony default export */ var components_SpAccountList = (SpAccountList_Plugin);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.split.js
var es_string_split = __webpack_require__("1276");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__("ac1f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.find-index.js
var es_array_find_index = __webpack_require__("c740");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/SpAmountSelect/SpAmountSelect.vue?vue&type=template&id=476b0fa8




var SpAmountSelectvue_type_template_id_476b0fa8_hoisted_1 = {
  class: "sp-amount-select"
};
var SpAmountSelectvue_type_template_id_476b0fa8_hoisted_2 = {
  class: "sp-amount-select__denom__name"
};

var SpAmountSelectvue_type_template_id_476b0fa8_hoisted_3 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("strong", null, "Avail.", -1);

var SpAmountSelectvue_type_template_id_476b0fa8_hoisted_4 = {
  class: "sp-amount-select__denom__controls"
};
var SpAmountSelectvue_type_template_id_476b0fa8_hoisted_5 = {
  key: 0,
  class: "sp-amount-select__denom__modal"
};
var SpAmountSelectvue_type_template_id_476b0fa8_hoisted_6 = {
  class: "sp-amount-select__denom__modal__search"
};

var SpAmountSelectvue_type_template_id_476b0fa8_hoisted_7 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
  class: "sp-icon sp-icon-Search"
}, null, -1);

var SpAmountSelectvue_type_template_id_476b0fa8_hoisted_8 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
  class: "sp-line"
}, null, -1);

var SpAmountSelectvue_type_template_id_476b0fa8_hoisted_9 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
  class: "sp-amount-select__denom__modal__header"
}, [/*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
  class: "sp-amount-select__denom__modal__header__token"
}, " TOKEN "), /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
  class: "sp-amount-select__denom__modal__header__amount"
}, " AMOUNT ")], -1);

var SpAmountSelectvue_type_template_id_476b0fa8_hoisted_10 = {
  class: "sp-amount-select__denom__name"
};
var SpAmountSelectvue_type_template_id_476b0fa8_hoisted_11 = {
  class: "sp-amount-select__denom__balance"
};
function SpAmountSelectvue_type_template_id_476b0fa8_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _ctx$denomTraces$_ctx, _ctx$denomTraces$_ctx2, _ctx$denomTraces$_ctx3, _ctx$denomTraces$_ctx4;

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", SpAmountSelectvue_type_template_id_476b0fa8_hoisted_1, [_ctx.modalOpen ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
    key: 0,
    class: "sp-amount-select__overlay",
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return _ctx.modalOpen = false;
    })
  })) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
    class: ["sp-form-group", {
      'sp-amount-select__overlay__open': _ctx.modalOpen
    }]
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
    class: ["sp-amount-select__denom", {
      'sp-focused': _ctx.focused
    }]
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
    class: "sp-amount-select__denom__selected",
    onClick: _cache[3] || (_cache[3] = function () {
      return _ctx.toggleModal && _ctx.toggleModal.apply(_ctx, arguments);
    })
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", SpAmountSelectvue_type_template_id_476b0fa8_hoisted_2, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
    class: ["sp-amount-select__denom__balance", {
      'sp-amount-select__denom__balance__fail': _ctx.fulldenom.amount - _ctx.amount < 0
    }]
  }, [SpAmountSelectvue_type_template_id_476b0fa8_hoisted_3, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.fulldenom.amount - _ctx.amount) + "/" + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.fulldenom.amount), 1)], 2), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
    class: "sp-denom-marker",
    style: 'background: #' + _ctx.fulldenom.color
  }, null, 4), _ctx.fulldenom.denom.indexOf('ibc/') == 0 ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], {
    key: 0
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" IBC/" + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])((_ctx$denomTraces$_ctx = (_ctx$denomTraces$_ctx2 = _ctx.denomTraces[_ctx.fulldenom.denom.split('/')[1]]) === null || _ctx$denomTraces$_ctx2 === void 0 ? void 0 : _ctx$denomTraces$_ctx2.denom_trace.path.toUpperCase()) !== null && _ctx$denomTraces$_ctx !== void 0 ? _ctx$denomTraces$_ctx : '') + "/" + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])((_ctx$denomTraces$_ctx3 = (_ctx$denomTraces$_ctx4 = _ctx.denomTraces[_ctx.fulldenom.denom.split('/')[1]]) === null || _ctx$denomTraces$_ctx4 === void 0 ? void 0 : _ctx$denomTraces$_ctx4.denom_trace.base_denom.toUpperCase()) !== null && _ctx$denomTraces$_ctx3 !== void 0 ? _ctx$denomTraces$_ctx3 : 'UNKNOWN'), 1)], 64)) : (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], {
    key: 1
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.fulldenom.denom.toUpperCase()), 1)], 64))]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", SpAmountSelectvue_type_template_id_476b0fa8_hoisted_4, [_ctx.modalOpen && !_ctx.last ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
    key: 0,
    class: "sp-amount-select__denom__remove",
    onClick: _cache[2] || (_cache[2] = function () {
      return _ctx.selfRemove && _ctx.selfRemove.apply(_ctx, arguments);
    })
  }, " Remove ")) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("span", {
    class: {
      'sp-icon sp-icon-DownCaret': !_ctx.modalOpen,
      'sp-icon sp-icon-UpCaret': _ctx.modalOpen
    }
  }, null, 2)])]), _ctx.modalOpen ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", SpAmountSelectvue_type_template_id_476b0fa8_hoisted_5, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", SpAmountSelectvue_type_template_id_476b0fa8_hoisted_6, [SpAmountSelectvue_type_template_id_476b0fa8_hoisted_7, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("input", {
    type: "text",
    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
      return _ctx.searchTerm = $event;
    }),
    placeholder: "Search...",
    class: "sp-amount-select__denom__modal__search__input"
  }, null, 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vModelText"], _ctx.searchTerm]])]), SpAmountSelectvue_type_template_id_476b0fa8_hoisted_8, SpAmountSelectvue_type_template_id_476b0fa8_hoisted_9, (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])(_ctx.filteredDenoms, function (avail) {
    var _ctx$denomTraces$avai, _ctx$denomTraces$avai2, _ctx$denomTraces$avai3, _ctx$denomTraces$avai4;

    return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
      class: ["sp-amount-select__denom__modal__item", {
        'sp-amount-select__denom__modal__item__selected': avail.denom == _ctx.fulldenom.denom,
        'sp-amount-select__denom__modal__item__disabled': _ctx.enabledDenoms.findIndex(function (x) {
          return x == avail;
        }) == -1
      }],
      onClick: function onClick() {
        if (_ctx.enabledDenoms.findIndex(function (x) {
          return x == avail;
        }) != -1) {
          _ctx.denom = avail.denom;
          _ctx.modalOpen = false;
        }
      },
      key: 'denom_' + avail.denom
    }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", SpAmountSelectvue_type_template_id_476b0fa8_hoisted_10, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
      class: "sp-denom-marker",
      style: 'background: #' + avail.color
    }, null, 4), avail.denom.indexOf('ibc/') == 0 ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], {
      key: 0
    }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" IBC/" + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])((_ctx$denomTraces$avai = (_ctx$denomTraces$avai2 = _ctx.denomTraces[avail.denom.split('/')[1]]) === null || _ctx$denomTraces$avai2 === void 0 ? void 0 : _ctx$denomTraces$avai2.denom_trace.path.toUpperCase()) !== null && _ctx$denomTraces$avai !== void 0 ? _ctx$denomTraces$avai : '') + "/" + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])((_ctx$denomTraces$avai3 = (_ctx$denomTraces$avai4 = _ctx.denomTraces[avail.denom.split('/')[1]]) === null || _ctx$denomTraces$avai4 === void 0 ? void 0 : _ctx$denomTraces$avai4.denom_trace.base_denom.toUpperCase()) !== null && _ctx$denomTraces$avai3 !== void 0 ? _ctx$denomTraces$avai3 : 'UNKNOWN'), 1)], 64)) : (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], {
      key: 1
    }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(avail.denom.toUpperCase()), 1)], 64))]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", SpAmountSelectvue_type_template_id_476b0fa8_hoisted_11, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(avail.amount), 1)], 10, ["onClick"]);
  }), 128))])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)], 2), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("input", {
    class: ["sp-input sp-input-large", {
      'sp-error': _ctx.fulldenom.amount != '' && _ctx.fulldenom.amount - _ctx.amount < 0
    }],
    name: "rcpt",
    "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
      return _ctx.amount = $event;
    }),
    placeholder: "0",
    onFocus: _cache[6] || (_cache[6] = function ($event) {
      return _ctx.focused = true;
    }),
    onBlur: _cache[7] || (_cache[7] = function ($event) {
      return _ctx.focused = false;
    })
  }, null, 34), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vModelText"], _ctx.amount]])], 2)]);
}
// CONCATENATED MODULE: ./src/components/SpAmountSelect/SpAmountSelect.vue?vue&type=template&id=476b0fa8

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__("a9e3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.find.js
var es_array_find = __webpack_require__("7db0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__("4de4");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__("d81d");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__("25f0");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/SpAmountSelect/SpAmountSelect.vue?vue&type=script&lang=ts












/* harmony default export */ var SpAmountSelectvue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  name: 'SpAmountSelect',
  data: function data() {
    return {
      amount: '',
      denom: null,
      focused: false,
      modalOpen: false,
      searchTerm: '',
      denomTraces: {}
    };
  },
  props: {
    modelValue: {
      type: Object
    },
    available: {
      type: Array
    },
    index: {
      type: Number
    },
    selected: {
      type: Array
    },
    last: {
      type: Boolean
    }
  },
  emits: ['update:modelValue', 'self-remove'],
  mounted: function mounted() {
    var _ref, _this$modelValue, _this$modelValue$deno, _this$modelValue2;

    this.amount = (_ref = ((_this$modelValue = this.modelValue) === null || _this$modelValue === void 0 ? void 0 : _this$modelValue.amount) + '') !== null && _ref !== void 0 ? _ref : '';
    this.denom = (_this$modelValue$deno = (_this$modelValue2 = this.modelValue) === null || _this$modelValue2 === void 0 ? void 0 : _this$modelValue2.denom) !== null && _this$modelValue$deno !== void 0 ? _this$modelValue$deno : null;
  },
  computed: {
    currentVal: function currentVal() {
      var _this$denom;

      return {
        amount: parseInt(this.amount),
        denom: (_this$denom = this.denom) !== null && _this$denom !== void 0 ? _this$denom : ''
      };
    },
    fulldenom: function fulldenom() {
      var _this = this;

      return this.denoms.find(function (x) {
        return x.denom == _this.denom;
      });
    },
    enabledDenoms: function enabledDenoms() {
      var _this$available$filte,
          _this$available,
          _this2 = this;

      return (_this$available$filte = (_this$available = this.available) === null || _this$available === void 0 ? void 0 : _this$available.filter(function (x) {
        var _this2$selected, _this2$selected2;

        return ((_this2$selected = _this2.selected) === null || _this2$selected === void 0 ? void 0 : _this2$selected.findIndex(function (y) {
          return y == x.denom;
        })) == -1 || ((_this2$selected2 = _this2.selected) === null || _this2$selected2 === void 0 ? void 0 : _this2$selected2.findIndex(function (y) {
          return y == x.denom;
        })) == _this2.index;
      })) !== null && _this$available$filte !== void 0 ? _this$available$filte : [];
    },
    denoms: function denoms() {
      var _this$available$map,
          _this$available2,
          _this3 = this;

      return (_this$available$map = (_this$available2 = this.available) === null || _this$available2 === void 0 ? void 0 : _this$available2.map(function (x) {
        _this3.addMapping(x);

        var y = {
          amount: 0,
          denom: '',
          color: ''
        };
        y.amount = x.amount;
        y.denom = x.denom;
        y.color = _this3.str2rgba(x.denom.toUpperCase());
        return x;
      })) !== null && _this$available$map !== void 0 ? _this$available$map : [];
    },
    filteredDenoms: function filteredDenoms() {
      var _this4 = this;

      return this.searchTerm == '' ? this.denoms : this.denoms.filter(function (x) {
        return x.denom.toUpperCase().indexOf(_this4.searchTerm.toUpperCase()) !== -1;
      });
    }
  },
  methods: {
    toggleModal: function toggleModal() {
      this.modalOpen = !this.modalOpen;
    },
    selfRemove: function selfRemove() {
      this.$emit('self-remove');
    },
    addMapping: function addMapping(balance) {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var denom, hash;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(balance.denom.indexOf('ibc/') == 0)) {
                  _context.next = 6;
                  break;
                }

                denom = balance.denom.split('/');
                hash = denom[1];
                _context.next = 5;
                return _this5.$store.dispatch('ibc.applications.transfer.v1/QueryDenomTrace', {
                  options: {
                    subscribe: false,
                    all: false
                  },
                  params: {
                    hash: hash
                  }
                });

              case 5:
                _this5.denomTraces[hash] = _context.sent;

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    str2rgba: function str2rgba(r) {
      var o = [];

      for (var a, c = 0; c < 256; c++) {
        a = c;

        for (var f = 0; f < 8; f++) {
          a = 1 & a ? 3988292384 ^ a >>> 1 : a >>> 1;
        }

        o[c] = a;
      }

      var n = -1;

      for (var t = 0; t < r.length; t++) {
        n = n >>> 8 ^ o[255 & (n ^ r.charCodeAt(t))];
      }

      return ((-1 ^ n) >>> 0).toString(16);
    }
  },
  watch: {
    modelValue: function modelValue(newVal) {
      this.amount = newVal.amount;
      this.denom = newVal.denom;
    },
    amount: function amount(newVal, oldVal) {
      if (newVal != oldVal) {
        this.$emit('update:modelValue', this.currentVal);
      }
    },
    denom: function denom(newVal, oldVal) {
      if (newVal != oldVal) {
        this.$emit('update:modelValue', this.currentVal);
      }
    }
  }
}));
// CONCATENATED MODULE: ./src/components/SpAmountSelect/SpAmountSelect.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./src/components/SpAmountSelect/SpAmountSelect.vue



SpAmountSelectvue_type_script_lang_ts.render = SpAmountSelectvue_type_template_id_476b0fa8_render

/* harmony default export */ var SpAmountSelect = (SpAmountSelectvue_type_script_lang_ts);
// CONCATENATED MODULE: ./src/components/SpAmountSelect/index.ts


var SpAmountSelect_Plugin = {
  install: function install(vue) {
    registerComponent(vue, SpAmountSelect);
  }
}; // use(Plugin);

/* harmony default export */ var components_SpAmountSelect = (SpAmountSelect_Plugin);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/SpAssets/SpAssets.vue?vue&type=template&id=6eee0f90



var SpAssetsvue_type_template_id_6eee0f90_hoisted_1 = {
  class: "sp-assets"
};

var SpAssetsvue_type_template_id_6eee0f90_hoisted_2 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
  class: "sp-assets__header sp-component-title"
}, [/*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("h3", null, "Assets")], -1);

var SpAssetsvue_type_template_id_6eee0f90_hoisted_3 = {
  class: "sp-assets__main sp-box sp-shadow"
};
var SpAssetsvue_type_template_id_6eee0f90_hoisted_4 = {
  key: 0,
  class: "sp-assets__main__header"
};

var SpAssetsvue_type_template_id_6eee0f90_hoisted_5 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
  class: "sp-assets__main__header__token"
}, "TOKEN", -1);

var SpAssetsvue_type_template_id_6eee0f90_hoisted_6 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
  class: "sp-assets__main__header__amount"
}, "AMOUNT", -1);

var SpAssetsvue_type_template_id_6eee0f90_hoisted_7 = {
  key: 1,
  class: "sp-assets__main__header"
};

var SpAssetsvue_type_template_id_6eee0f90_hoisted_8 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
  class: "sp-assets__main__header__message"
}, " Your current account balance will appear here ", -1);

var SpAssetsvue_type_template_id_6eee0f90_hoisted_9 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createStaticVNode"])("<div class=\"sp-assets__main__item\"><div class=\"sp-assets__main__denom__name\"><div class=\"sp-denom-marker\" style=\"background:#809cff;\"></div><div class=\"sp-dummy-fill\"></div></div><div class=\"sp-assets__main__denom__balance\"><div class=\"sp-dummy-fill\"></div></div></div><div class=\"sp-assets__main__item\"><div class=\"sp-assets__main__denom__name\"><div class=\"sp-denom-marker\" style=\"background:#80d1ff;\"></div><div class=\"sp-dummy-fill\"></div></div><div class=\"sp-assets__main__denom__balance\"><div class=\"sp-dummy-fill\"></div></div></div><div class=\"sp-assets__main__item\"><div class=\"sp-assets__main__denom__name\"><div class=\"sp-denom-marker\" style=\"background:#ffbd80;\"></div><div class=\"sp-dummy-fill\"></div></div><div class=\"sp-assets__main__denom__balance\"><div class=\"sp-dummy-fill\"></div></div></div>", 3);

var SpAssetsvue_type_template_id_6eee0f90_hoisted_12 = {
  class: "sp-assets__main__denom__name"
};
var SpAssetsvue_type_template_id_6eee0f90_hoisted_13 = {
  class: "sp-assets__main__denom__balance"
};
function SpAssetsvue_type_template_id_6eee0f90_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", SpAssetsvue_type_template_id_6eee0f90_hoisted_1, [SpAssetsvue_type_template_id_6eee0f90_hoisted_2, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", SpAssetsvue_type_template_id_6eee0f90_hoisted_3, [_ctx.address ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", SpAssetsvue_type_template_id_6eee0f90_hoisted_4, [SpAssetsvue_type_template_id_6eee0f90_hoisted_5, SpAssetsvue_type_template_id_6eee0f90_hoisted_6])) : (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", SpAssetsvue_type_template_id_6eee0f90_hoisted_7, [SpAssetsvue_type_template_id_6eee0f90_hoisted_8])), !_ctx.address || _ctx.fullBalances.length == 0 ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], {
    key: 2
  }, [SpAssetsvue_type_template_id_6eee0f90_hoisted_9], 64)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])(_ctx.fullBalances, function (balance) {
    var _ctx$denomTraces$bala, _ctx$denomTraces$bala2, _ctx$denomTraces$bala3, _ctx$denomTraces$bala4;

    return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
      class: "sp-assets__main__item",
      key: 'denom_' + balance.denom
    }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", SpAssetsvue_type_template_id_6eee0f90_hoisted_12, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
      class: "sp-denom-marker",
      style: 'background: #' + balance.color
    }, null, 4), balance.denom.indexOf('ibc/') == 0 ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], {
      key: 0
    }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" IBC/" + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])((_ctx$denomTraces$bala = (_ctx$denomTraces$bala2 = _ctx.denomTraces[balance.denom.split('/')[1]]) === null || _ctx$denomTraces$bala2 === void 0 ? void 0 : _ctx$denomTraces$bala2.denom_trace.path.toUpperCase()) !== null && _ctx$denomTraces$bala !== void 0 ? _ctx$denomTraces$bala : '') + "/" + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])((_ctx$denomTraces$bala3 = (_ctx$denomTraces$bala4 = _ctx.denomTraces[balance.denom.split('/')[1]]) === null || _ctx$denomTraces$bala4 === void 0 ? void 0 : _ctx$denomTraces$bala4.denom_trace.base_denom.toUpperCase()) !== null && _ctx$denomTraces$bala3 !== void 0 ? _ctx$denomTraces$bala3 : 'UNKNOWN'), 1)], 64)) : (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], {
      key: 1
    }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(balance.denom.toUpperCase()), 1)], 64))]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", SpAssetsvue_type_template_id_6eee0f90_hoisted_13, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(balance.amount), 1)]);
  }), 128))])]);
}
// CONCATENATED MODULE: ./src/components/SpAssets/SpAssets.vue?vue&type=template&id=6eee0f90

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/SpAssets/SpAssets.vue?vue&type=script&lang=ts








/* harmony default export */ var SpAssetsvue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  name: 'SpAssets',
  props: {
    balances: Array
  },
  data: function data() {
    return {
      denomTraces: {}
    };
  },
  computed: {
    address: function address() {
      return this.$store.getters['common/wallet/address'];
    },
    fullBalances: function fullBalances() {
      var _this$balances$map,
          _this$balances,
          _this = this;

      return (_this$balances$map = (_this$balances = this.balances) === null || _this$balances === void 0 ? void 0 : _this$balances.map(function (x) {
        _this.addMapping(x);

        var y = {
          amount: 0,
          denom: '',
          color: ''
        };
        y.amount = x.amount;
        y.denom = x.denom;
        y.color = _this.str2rgba(x.denom.toUpperCase());
        return x;
      })) !== null && _this$balances$map !== void 0 ? _this$balances$map : [];
    }
  },
  methods: {
    addMapping: function addMapping(balance) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var denom, hash;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(balance.denom.indexOf('ibc/') == 0)) {
                  _context.next = 6;
                  break;
                }

                denom = balance.denom.split('/');
                hash = denom[1];
                _context.next = 5;
                return _this2.$store.dispatch('ibc.applications.transfer.v1/QueryDenomTrace', {
                  options: {
                    subscribe: false,
                    all: false
                  },
                  params: {
                    hash: hash
                  }
                });

              case 5:
                _this2.denomTraces[hash] = _context.sent;

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    str2rgba: function str2rgba(r) {
      var o = [];

      for (var a, c = 0; c < 256; c++) {
        a = c;

        for (var f = 0; f < 8; f++) {
          a = 1 & a ? 3988292384 ^ a >>> 1 : a >>> 1;
        }

        o[c] = a;
      }

      var n = -1;

      for (var t = 0; t < r.length; t++) {
        n = n >>> 8 ^ o[255 & (n ^ r.charCodeAt(t))];
      }

      return ((-1 ^ n) >>> 0).toString(16);
    }
  }
}));
// CONCATENATED MODULE: ./src/components/SpAssets/SpAssets.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./src/components/SpAssets/SpAssets.vue



SpAssetsvue_type_script_lang_ts.render = SpAssetsvue_type_template_id_6eee0f90_render

/* harmony default export */ var SpAssets = (SpAssetsvue_type_script_lang_ts);
// CONCATENATED MODULE: ./src/components/SpAssets/index.ts


var SpAssets_Plugin = {
  install: function install(vue) {
    registerComponent(vue, SpAssets);
  }
}; // use(Plugin);

/* harmony default export */ var components_SpAssets = (SpAssets_Plugin);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/SpButton/SpButton.vue?vue&type=template&id=76d74008


var SpButtonvue_type_template_id_76d74008_hoisted_1 = {
  class: "sp-button__text"
};

var SpButtonvue_type_template_id_76d74008_hoisted_2 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
  class: "sp-button__loading"
}, [/*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
  class: "sp-icon sp-icon-Reload"
})], -1);

var SpButtonvue_type_template_id_76d74008_hoisted_3 = {
  class: "sp-button__text"
};

var SpButtonvue_type_template_id_76d74008_hoisted_4 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
  class: "sp-button__loading"
}, [/*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
  class: "sp-icon sp-icon-Reload"
})], -1);

var SpButtonvue_type_template_id_76d74008_hoisted_5 = {
  class: "sp-button__text"
};

var SpButtonvue_type_template_id_76d74008_hoisted_6 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
  class: "sp-button__loading"
}, [/*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
  class: "sp-icon sp-icon-Reload"
})], -1);

function SpButtonvue_type_template_id_76d74008_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("router-link");

  return _ctx.link ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_router_link, {
    key: 0,
    to: _ctx.link,
    class: ["sp-button", [_ctx.busy ? 'sp-button__progress' : '', 'sp-button-' + _ctx.type]],
    disabled: _ctx.disabled
  }, {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("span", SpButtonvue_type_template_id_76d74008_hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")]), SpButtonvue_type_template_id_76d74008_hoisted_2];
    }),
    _: 3
  }, 8, ["to", "class", "disabled"])) : _ctx.href ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("a", {
    key: 1,
    href: _ctx.href,
    class: ["sp-button", [_ctx.busy ? 'sp-button__progress' : '', 'sp-button-' + _ctx.type]],
    disabled: _ctx.disabled,
    target: _ctx.target
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("span", SpButtonvue_type_template_id_76d74008_hoisted_3, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")]), SpButtonvue_type_template_id_76d74008_hoisted_4], 10, ["href", "disabled", "target"])) : (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("button", {
    key: 2,
    type: "button",
    class: ["sp-button", [_ctx.busy ? 'sp-button__progress' : '', 'sp-button-' + _ctx.type]],
    disabled: _ctx.disabled
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("span", SpButtonvue_type_template_id_76d74008_hoisted_5, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")]), SpButtonvue_type_template_id_76d74008_hoisted_6], 10, ["disabled"]));
}
// CONCATENATED MODULE: ./src/components/SpButton/SpButton.vue?vue&type=template&id=76d74008

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/SpButton/SpButton.vue?vue&type=script&lang=ts

/* harmony default export */ var SpButtonvue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  name: 'SpButton',
  props: {
    busy: {
      type: Boolean
    },
    link: {
      type: String
    },
    href: {
      type: String
    },
    target: {
      type: String
    },
    type: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
}));
// CONCATENATED MODULE: ./src/components/SpButton/SpButton.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./src/components/SpButton/SpButton.vue



SpButtonvue_type_script_lang_ts.render = SpButtonvue_type_template_id_76d74008_render

/* harmony default export */ var SpButton = (SpButtonvue_type_script_lang_ts);
// CONCATENATED MODULE: ./src/components/SpButton/index.ts


var SpButton_Plugin = {
  install: function install(vue) {
    registerComponent(vue, SpButton);
  }
}; // use(Plugin);

/* harmony default export */ var components_SpButton = (SpButton_Plugin);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/SpCard/SpCard.vue?vue&type=template&id=ab9c8a96


var SpCardvue_type_template_id_ab9c8a96_hoisted_1 = {
  class: "sp-card__icon"
};
var SpCardvue_type_template_id_ab9c8a96_hoisted_2 = {
  class: "sp-card__text"
};
var SpCardvue_type_template_id_ab9c8a96_hoisted_3 = {
  class: "sp-card__icon"
};
var SpCardvue_type_template_id_ab9c8a96_hoisted_4 = {
  class: "sp-card__text"
};
function SpCardvue_type_template_id_ab9c8a96_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("router-link");

  return _ctx.link ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_router_link, {
    key: 0,
    class: ["sp-card", 'sp-card-' + _ctx.type],
    to: _ctx.link
  }, {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", SpCardvue_type_template_id_ab9c8a96_hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("span", {
        class: ["sp-icon", 'sp-icon-' + _ctx.icon]
      }, null, 2)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", SpCardvue_type_template_id_ab9c8a96_hoisted_2, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")])];
    }),
    _: 3
  }, 8, ["class", "to"])) : (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("button", {
    key: 1,
    class: ["sp-card", 'sp-card-' + _ctx.type]
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", SpCardvue_type_template_id_ab9c8a96_hoisted_3, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("span", {
    class: ["sp-icon", 'sp-icon-' + _ctx.icon]
  }, null, 2)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", SpCardvue_type_template_id_ab9c8a96_hoisted_4, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")])], 2));
}
// CONCATENATED MODULE: ./src/components/SpCard/SpCard.vue?vue&type=template&id=ab9c8a96

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/SpCard/SpCard.vue?vue&type=script&lang=ts

/* harmony default export */ var SpCardvue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  name: 'SpCard',
  props: {
    type: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      reequired: true
    },
    link: {
      type: String
    }
  }
}));
// CONCATENATED MODULE: ./src/components/SpCard/SpCard.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./src/components/SpCard/SpCard.vue



SpCardvue_type_script_lang_ts.render = SpCardvue_type_template_id_ab9c8a96_render

/* harmony default export */ var SpCard = (SpCardvue_type_script_lang_ts);
// CONCATENATED MODULE: ./src/components/SpCard/index.ts


var SpCard_Plugin = {
  install: function install(vue) {
    registerComponent(vue, SpCard);
  }
}; // use(Plugin);

/* harmony default export */ var components_SpCard = (SpCard_Plugin);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/SpLayout/SpLayout.vue?vue&type=template&id=6d1f0c3e

var SpLayoutvue_type_template_id_6d1f0c3e_hoisted_1 = {
  class: "sp-layout"
};
var SpLayoutvue_type_template_id_6d1f0c3e_hoisted_2 = {
  class: "sp-fill"
};
function SpLayoutvue_type_template_id_6d1f0c3e_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", SpLayoutvue_type_template_id_6d1f0c3e_hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "sidebar"), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", SpLayoutvue_type_template_id_6d1f0c3e_hoisted_2, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "content")])]);
}
// CONCATENATED MODULE: ./src/components/SpLayout/SpLayout.vue?vue&type=template&id=6d1f0c3e

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/SpLayout/SpLayout.vue?vue&type=script&lang=ts

/* harmony default export */ var SpLayoutvue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  name: 'SpLayout'
}));
// CONCATENATED MODULE: ./src/components/SpLayout/SpLayout.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./src/components/SpLayout/SpLayout.vue



SpLayoutvue_type_script_lang_ts.render = SpLayoutvue_type_template_id_6d1f0c3e_render

/* harmony default export */ var SpLayout = (SpLayoutvue_type_script_lang_ts);
// CONCATENATED MODULE: ./src/components/SpLayout/index.ts


var SpLayout_Plugin = {
  install: function install(vue) {
    registerComponent(vue, SpLayout);
  }
}; // use(Plugin);

/* harmony default export */ var components_SpLayout = (SpLayout_Plugin);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/SpRelayer/SpRelayer.vue?vue&type=template&id=0872f2ba


var SpRelayervue_type_template_id_0872f2ba_hoisted_1 = {
  key: 0,
  class: "sp-relayer"
};
var SpRelayervue_type_template_id_0872f2ba_hoisted_2 = {
  key: 0,
  class: "sp-relayer__overlay"
};
var SpRelayervue_type_template_id_0872f2ba_hoisted_3 = {
  key: 1,
  class: "sp-relayer__modal sp-box"
};

var SpRelayervue_type_template_id_0872f2ba_hoisted_4 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
  class: "sp-relayer__modal__header"
}, "Setting up relayer", -1);

var SpRelayervue_type_template_id_0872f2ba_hoisted_5 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
  class: "sp-icon sp-icon-Reload"
}, null, -1);

var SpRelayervue_type_template_id_0872f2ba_hoisted_6 = {
  class: "sp-relayer__basic"
};
var SpRelayervue_type_template_id_0872f2ba_hoisted_7 = {
  class: "sp-relayer__details"
};
var SpRelayervue_type_template_id_0872f2ba_hoisted_8 = {
  class: "sp-relayer__name"
};
var SpRelayervue_type_template_id_0872f2ba_hoisted_9 = {
  class: "sp-relayer__path"
};
var SpRelayervue_type_template_id_0872f2ba_hoisted_10 = {
  class: "sp-relayer__status"
};
var SpRelayervue_type_template_id_0872f2ba_hoisted_11 = {
  class: "sp-relayer__actions"
};
var SpRelayervue_type_template_id_0872f2ba_hoisted_12 = {
  key: 0,
  class: "sp-relayer__running"
};
var SpRelayervue_type_template_id_0872f2ba_hoisted_13 = {
  key: 1,
  class: "sp-relayer__stopped"
};

var SpRelayervue_type_template_id_0872f2ba_hoisted_14 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])("Connect relayer");

var SpRelayervue_type_template_id_0872f2ba_hoisted_15 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])("Stop relayer");

var SpRelayervue_type_template_id_0872f2ba_hoisted_16 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])("Start relayer");

var _hoisted_17 = {
  class: "sp-relayer__advanced"
};
var _hoisted_18 = {
  key: 0,
  class: "sp-relayer__advanced__header"
};
var _hoisted_19 = {
  class: "sp-relayer__advanced__header__message"
};

var _hoisted_20 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" In order to complete this relayer setup you must fund the address: ");

var _hoisted_21 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" at ");

var _hoisted_22 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(".");

var _hoisted_23 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("br", null, null, -1);

var _hoisted_24 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" When the address is funded, click the \"Connect relayer\" button. ");

var _hoisted_25 = {
  key: 1,
  class: "sp-relayer__advanced__header"
};

var _hoisted_26 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
  class: "sp-relayer__advanced__header__title"
}, "Advanced", -1);

var _hoisted_27 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
  class: "sp-line"
}, null, -1);

var _hoisted_28 = {
  key: 2,
  class: "sp-relayer__advanced__contents"
};
var _hoisted_29 = {
  class: "sp-relayer__advanced__contents__item"
};

var _hoisted_30 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
  class: "sp-relayer__advanced__contents__item__key"
}, " Chain A ID ", -1);

var _hoisted_31 = {
  class: "sp-relayer__advanced__contents__item__value"
};
var _hoisted_32 = {
  class: "sp-relayer__advanced__contents__item"
};

var _hoisted_33 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
  class: "sp-relayer__advanced__contents__item__key"
}, " Chain A Endpoint ", -1);

var _hoisted_34 = {
  class: "sp-relayer__advanced__contents__item__value"
};
var _hoisted_35 = {
  class: "sp-relayer__advanced__contents__item"
};

var _hoisted_36 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
  class: "sp-relayer__advanced__contents__item__key"
}, " Chain A Prefix ", -1);

var _hoisted_37 = {
  class: "sp-relayer__advanced__contents__item__value"
};
var _hoisted_38 = {
  class: "sp-relayer__advanced__contents__item"
};

var _hoisted_39 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
  class: "sp-relayer__advanced__contents__item__key"
}, " Chain A Gas Price ", -1);

var _hoisted_40 = {
  class: "sp-relayer__advanced__contents__item__value"
};
var _hoisted_41 = {
  class: "sp-relayer__advanced__contents__item"
};

var _hoisted_42 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
  class: "sp-relayer__advanced__contents__item__key"
}, " Chain B ID ", -1);

var _hoisted_43 = {
  class: "sp-relayer__advanced__contents__item__value"
};
var _hoisted_44 = {
  class: "sp-relayer__advanced__contents__item"
};

var _hoisted_45 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
  class: "sp-relayer__advanced__contents__item__key"
}, " Chain B Endpoint ", -1);

var _hoisted_46 = {
  class: "sp-relayer__advanced__contents__item__value"
};
var _hoisted_47 = {
  class: "sp-relayer__advanced__contents__item"
};

var _hoisted_48 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
  class: "sp-relayer__advanced__contents__item__key"
}, " Chain B Prefix ", -1);

var _hoisted_49 = {
  class: "sp-relayer__advanced__contents__item__value"
};
var _hoisted_50 = {
  class: "sp-relayer__advanced__contents__item"
};

var _hoisted_51 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
  class: "sp-relayer__advanced__contents__item__key"
}, " Chain B Gas Price ", -1);

var _hoisted_52 = {
  class: "sp-relayer__advanced__contents__item__value"
};
var _hoisted_53 = {
  class: "sp-relayer__advanced__contents__item"
};

var _hoisted_54 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
  class: "sp-relayer__advanced__contents__item__key"
}, " Chain A ClientID ", -1);

var _hoisted_55 = {
  class: "sp-relayer__advanced__contents__item__value"
};
var _hoisted_56 = {
  class: "sp-relayer__advanced__contents__item"
};

var _hoisted_57 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
  class: "sp-relayer__advanced__contents__item__key"
}, " Chain A ConnectionID ", -1);

var _hoisted_58 = {
  class: "sp-relayer__advanced__contents__item__value"
};
var _hoisted_59 = {
  class: "sp-relayer__advanced__contents__item"
};

var _hoisted_60 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
  class: "sp-relayer__advanced__contents__item__key"
}, " Chain A PortID ", -1);

var _hoisted_61 = {
  class: "sp-relayer__advanced__contents__item__value"
};
var _hoisted_62 = {
  class: "sp-relayer__advanced__contents__item"
};

var _hoisted_63 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
  class: "sp-relayer__advanced__contents__item__key"
}, " Chain A ChannelID ", -1);

var _hoisted_64 = {
  class: "sp-relayer__advanced__contents__item__value"
};
var _hoisted_65 = {
  class: "sp-relayer__advanced__contents__item"
};

var _hoisted_66 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
  class: "sp-relayer__advanced__contents__item__key"
}, " Chain B ClientID ", -1);

var _hoisted_67 = {
  class: "sp-relayer__advanced__contents__item__value"
};
var _hoisted_68 = {
  class: "sp-relayer__advanced__contents__item"
};

var _hoisted_69 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
  class: "sp-relayer__advanced__contents__item__key"
}, " Chain B ConnectionID ", -1);

var _hoisted_70 = {
  class: "sp-relayer__advanced__contents__item__value"
};
var _hoisted_71 = {
  class: "sp-relayer__advanced__contents__item"
};

var _hoisted_72 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
  class: "sp-relayer__advanced__contents__item__key"
}, " Chain B PortID ", -1);

var _hoisted_73 = {
  class: "sp-relayer__advanced__contents__item__value"
};
var _hoisted_74 = {
  class: "sp-relayer__advanced__contents__item"
};

var _hoisted_75 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
  class: "sp-relayer__advanced__contents__item__key"
}, " Chain B ChannelID ", -1);

var _hoisted_76 = {
  class: "sp-relayer__advanced__contents__item__value"
};
var _hoisted_77 = {
  class: "sp-relayer__advanced__contents__item"
};

var _hoisted_78 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
  class: "sp-relayer__advanced__contents__item__key"
}, " Chain A Packet Height ", -1);

var _hoisted_79 = {
  class: "sp-relayer__advanced__contents__item__value"
};
var _hoisted_80 = {
  class: "sp-relayer__advanced__contents__item"
};

var _hoisted_81 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
  class: "sp-relayer__advanced__contents__item__key"
}, " Chain A Ack Height ", -1);

var _hoisted_82 = {
  class: "sp-relayer__advanced__contents__item__value"
};
var _hoisted_83 = {
  class: "sp-relayer__advanced__contents__item"
};

var _hoisted_84 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
  class: "sp-relayer__advanced__contents__item__key"
}, " Chain B Packet Height ", -1);

var _hoisted_85 = {
  class: "sp-relayer__advanced__contents__item__value"
};
var _hoisted_86 = {
  class: "sp-relayer__advanced__contents__item"
};

var _hoisted_87 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
  class: "sp-relayer__advanced__contents__item__key"
}, " Chain B Ack Height ", -1);

var _hoisted_88 = {
  class: "sp-relayer__advanced__contents__item__value"
};
function SpRelayervue_type_template_id_0872f2ba_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _ctx$relayer$endA, _ctx$relayer$endA2, _ctx$relayer$src, _ctx$relayer$src2, _ctx$relayer$endB, _ctx$relayer$endB2, _ctx$relayer$dest, _ctx$relayer$dest2, _ctx$relayer$heights, _ctx$relayer$heights2, _ctx$relayer$heights3, _ctx$relayer$heights4;

  var _component_SpButton = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("SpButton");

  return _ctx.depsLoaded ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", SpRelayervue_type_template_id_0872f2ba_hoisted_1, [_ctx.connecting ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", SpRelayervue_type_template_id_0872f2ba_hoisted_2)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), _ctx.connecting ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", SpRelayervue_type_template_id_0872f2ba_hoisted_3, [SpRelayervue_type_template_id_0872f2ba_hoisted_4, SpRelayervue_type_template_id_0872f2ba_hoisted_5, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.loadingLog), 1)])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", SpRelayervue_type_template_id_0872f2ba_hoisted_6, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", SpRelayervue_type_template_id_0872f2ba_hoisted_7, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", SpRelayervue_type_template_id_0872f2ba_hoisted_8, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.relayer.name), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", SpRelayervue_type_template_id_0872f2ba_hoisted_9, " (" + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.relayer.chainIdA) + " <-> " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.relayer.chainIdB) + ") ", 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", SpRelayervue_type_template_id_0872f2ba_hoisted_10, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.relayer.status.toUpperCase()), 1)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", SpRelayervue_type_template_id_0872f2ba_hoisted_11, [_ctx.relayer.status == 'connected' && _ctx.relayer.running ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", SpRelayervue_type_template_id_0872f2ba_hoisted_12, " RUNNING ")) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), _ctx.relayer.status == 'connected' && !_ctx.relayer.running ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", SpRelayervue_type_template_id_0872f2ba_hoisted_13, " STOPPED ")) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), _ctx.relayer.status != 'connected' ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_SpButton, {
    key: 2,
    onClick: _ctx.linkRelayer,
    type: "primary"
  }, {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [SpRelayervue_type_template_id_0872f2ba_hoisted_14];
    }),
    _: 1
  }, 8, ["onClick"])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), _ctx.relayer.status == 'connected' && _ctx.relayer.running ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_SpButton, {
    key: 3,
    onClick: _ctx.stopRelayer,
    type: "primary"
  }, {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [SpRelayervue_type_template_id_0872f2ba_hoisted_15];
    }),
    _: 1
  }, 8, ["onClick"])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), _ctx.relayer.status == 'connected' && !_ctx.relayer.running ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_SpButton, {
    key: 4,
    onClick: _ctx.startRelayer,
    type: "primary"
  }, {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [SpRelayervue_type_template_id_0872f2ba_hoisted_16];
    }),
    _: 1
  }, 8, ["onClick"])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", _hoisted_17, [_ctx.relayer.status == 'created' ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", _hoisted_18, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", _hoisted_19, [_hoisted_20, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("strong", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.relayer.targetAddress), 1), _hoisted_21, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("strong", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.relayer.chainIdB), 1), _hoisted_22, _hoisted_23, _hoisted_24])])) : (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", _hoisted_25, [_hoisted_26, _hoisted_27, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
    class: "sp-relayer__advanced__header__icon",
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return _ctx.showAdvanced = !_ctx.showAdvanced;
    })
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
    class: ["sp-icon", {
      'sp-icon-UpCaret': _ctx.showAdvanced,
      'sp-icon-DownCaret': !_ctx.showAdvanced
    }]
  }, null, 2)])])), _ctx.relayer.status != 'created ' && _ctx.showAdvanced ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", _hoisted_28, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", _hoisted_29, [_hoisted_30, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", _hoisted_31, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.relayer.chainIdA || '-'), 1)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", _hoisted_32, [_hoisted_33, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", _hoisted_34, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.homeEndpoint || '-'), 1)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", _hoisted_35, [_hoisted_36, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", _hoisted_37, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.homePrefix || '-'), 1)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", _hoisted_38, [_hoisted_39, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", _hoisted_40, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.homeGasPrice || '-'), 1)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", _hoisted_41, [_hoisted_42, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", _hoisted_43, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.relayer.chainIdB || '-'), 1)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", _hoisted_44, [_hoisted_45, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", _hoisted_46, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.relayer.endpoint || '-'), 1)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", _hoisted_47, [_hoisted_48, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", _hoisted_49, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.relayer.prefix || '-'), 1)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", _hoisted_50, [_hoisted_51, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", _hoisted_52, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.relayer.gasPrice || '-'), 1)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", _hoisted_53, [_hoisted_54, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", _hoisted_55, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(((_ctx$relayer$endA = _ctx.relayer.endA) === null || _ctx$relayer$endA === void 0 ? void 0 : _ctx$relayer$endA.clientID) || '-'), 1)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", _hoisted_56, [_hoisted_57, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", _hoisted_58, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(((_ctx$relayer$endA2 = _ctx.relayer.endA) === null || _ctx$relayer$endA2 === void 0 ? void 0 : _ctx$relayer$endA2.connectionID) || '-'), 1)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", _hoisted_59, [_hoisted_60, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", _hoisted_61, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(((_ctx$relayer$src = _ctx.relayer.src) === null || _ctx$relayer$src === void 0 ? void 0 : _ctx$relayer$src.portId) || '-'), 1)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", _hoisted_62, [_hoisted_63, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", _hoisted_64, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(((_ctx$relayer$src2 = _ctx.relayer.src) === null || _ctx$relayer$src2 === void 0 ? void 0 : _ctx$relayer$src2.channelId) || '-'), 1)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", _hoisted_65, [_hoisted_66, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", _hoisted_67, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(((_ctx$relayer$endB = _ctx.relayer.endB) === null || _ctx$relayer$endB === void 0 ? void 0 : _ctx$relayer$endB.clientID) || '-'), 1)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", _hoisted_68, [_hoisted_69, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", _hoisted_70, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(((_ctx$relayer$endB2 = _ctx.relayer.endB) === null || _ctx$relayer$endB2 === void 0 ? void 0 : _ctx$relayer$endB2.connectionID) || '-'), 1)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", _hoisted_71, [_hoisted_72, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", _hoisted_73, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(((_ctx$relayer$dest = _ctx.relayer.dest) === null || _ctx$relayer$dest === void 0 ? void 0 : _ctx$relayer$dest.portId) || '-'), 1)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", _hoisted_74, [_hoisted_75, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", _hoisted_76, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(((_ctx$relayer$dest2 = _ctx.relayer.dest) === null || _ctx$relayer$dest2 === void 0 ? void 0 : _ctx$relayer$dest2.channelId) || '-'), 1)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", _hoisted_77, [_hoisted_78, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", _hoisted_79, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(((_ctx$relayer$heights = _ctx.relayer.heights) === null || _ctx$relayer$heights === void 0 ? void 0 : _ctx$relayer$heights.packetHeightA) || '-'), 1)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", _hoisted_80, [_hoisted_81, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", _hoisted_82, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(((_ctx$relayer$heights2 = _ctx.relayer.heights) === null || _ctx$relayer$heights2 === void 0 ? void 0 : _ctx$relayer$heights2.ackHeightA) || '-'), 1)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", _hoisted_83, [_hoisted_84, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", _hoisted_85, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(((_ctx$relayer$heights3 = _ctx.relayer.heights) === null || _ctx$relayer$heights3 === void 0 ? void 0 : _ctx$relayer$heights3.packetHeightB) || '-'), 1)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", _hoisted_86, [_hoisted_87, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", _hoisted_88, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(((_ctx$relayer$heights4 = _ctx.relayer.heights) === null || _ctx$relayer$heights4 === void 0 ? void 0 : _ctx$relayer$heights4.ackHeightB) || '-'), 1)])])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)])])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true);
}
// CONCATENATED MODULE: ./src/components/SpRelayer/SpRelayer.vue?vue&type=template&id=0872f2ba

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/SpRelayer/SpRelayer.vue?vue&type=script&lang=ts






/* harmony default export */ var SpRelayervue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  name: 'SpRelayer',
  props: {
    relayer: Object
  },
  components: {
    SpButton: components_SpButton
  },
  data: function data() {
    return {
      showAdvanced: false,
      connecting: false,
      extradots: ''
    };
  },
  beforeCreate: function beforeCreate() {
    var module = ['common', 'wallet'];

    for (var i = 1; i <= module.length; i++) {
      var submod = module.slice(0, i);

      if (!this.$store.hasModule(submod)) {
        console.log('Module `common.wallet` has not been registered!');
        this._depsLoaded = false;
        break;
      }
    }

    module = ['common', 'relayers'];

    for (var _i = 1; _i <= module.length; _i++) {
      var _submod = module.slice(0, _i);

      if (!this.$store.hasModule(_submod)) {
        console.log('Module `common.relayers` has not been registered!');
        this._depsLoaded = false;
        break;
      }
    }
  },
  computed: {
    depsLoaded: function depsLoaded() {
      return this._depsLoaded;
    },
    homePrefix: function homePrefix() {
      return this.$store.getters['common/env/addrPrefix'];
    },
    homeGasPrice: function homeGasPrice() {
      return this.$store.getters['common/wallet/gasPrice'];
    },
    homeEndpoint: function homeEndpoint() {
      return this.$store.getters['common/env/apiTendermint'];
    },
    log: function log() {
      return this.$store.getters['common/relayers/log'];
    },
    loadingLog: function loadingLog() {
      return this.log + this.extradots;
    }
  },
  methods: {
    linkRelayer: function () {
      var _linkRelayer = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _this = this,
            _this$relayer;

        var loading;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.connecting = true;
                loading = setInterval(function () {
                  _this.extradots = _this.extradots + '.';

                  if (_this.extradots == '......') {
                    _this.extradots = '';
                  }
                }, 500);
                _context.next = 4;
                return this.$store.dispatch('common/relayers/linkRelayer', {
                  name: (_this$relayer = this.relayer) === null || _this$relayer === void 0 ? void 0 : _this$relayer.name
                });

              case 4:
                clearInterval(loading);
                this.connecting = false;

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function linkRelayer() {
        return _linkRelayer.apply(this, arguments);
      }

      return linkRelayer;
    }(),
    startRelayer: function startRelayer() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var _this2$relayer;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _this2.$store.dispatch('common/relayers/runRelayer', (_this2$relayer = _this2.relayer) === null || _this2$relayer === void 0 ? void 0 : _this2$relayer.name);

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    stopRelayer: function stopRelayer() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var _this3$relayer;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _this3.$store.dispatch('common/relayers/stopRelayer', (_this3$relayer = _this3.relayer) === null || _this3$relayer === void 0 ? void 0 : _this3$relayer.name);

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    }
  }
}));
// CONCATENATED MODULE: ./src/components/SpRelayer/SpRelayer.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./src/components/SpRelayer/SpRelayer.vue



SpRelayervue_type_script_lang_ts.render = SpRelayervue_type_template_id_0872f2ba_render

/* harmony default export */ var SpRelayer = (SpRelayervue_type_script_lang_ts);
// CONCATENATED MODULE: ./src/components/SpRelayer/index.ts


var SpRelayer_Plugin = {
  install: function install(vue) {
    registerComponent(vue, SpRelayer);
  }
}; // use(Plugin);

/* harmony default export */ var components_SpRelayer = (SpRelayer_Plugin);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/SpRelayers/SpRelayers.vue?vue&type=template&id=62097800


var SpRelayersvue_type_template_id_62097800_hoisted_1 = {
  key: 0
};
var SpRelayersvue_type_template_id_62097800_hoisted_2 = {
  class: "sp-relayers__holder"
};
var SpRelayersvue_type_template_id_62097800_hoisted_3 = {
  class: "sp-component sp-relayers"
};

var SpRelayersvue_type_template_id_62097800_hoisted_4 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
  class: "sp-relayers__header sp-component-title"
}, [/*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("h3", null, "Relayer list"), /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("span", null, "|"), /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("span", null, "Your configured relayers")], -1);

var SpRelayersvue_type_template_id_62097800_hoisted_5 = {
  class: "sp-relayers__main sp-box sp-shadow"
};
var SpRelayersvue_type_template_id_62097800_hoisted_6 = {
  key: 0,
  class: "sp-relayers__main__message"
};
var SpRelayersvue_type_template_id_62097800_hoisted_7 = {
  key: 1,
  class: "sp-relayer sp-relayer__dummy"
};

var SpRelayersvue_type_template_id_62097800_hoisted_8 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createStaticVNode"])("<div class=\"sp-relayer__basic\"><div class=\"sp-relayer__details\"><div class=\"sp-relayer__name\"><div class=\"sp-dummy-fill\"></div></div><div class=\"sp-relayer__path\"><div class=\"sp-dummy-fill\"></div></div><div class=\"sp-relayer__status\"><div class=\"sp-dummy-fill\"></div></div></div><div class=\"sp-relayer__actions\"><div class=\"sp-dummy-fill\"></div></div></div>", 1);

var SpRelayersvue_type_template_id_62097800_hoisted_9 = {
  key: 2,
  class: "sp-relayers__main__message"
};
var SpRelayersvue_type_template_id_62097800_hoisted_10 = {
  key: 0,
  class: "sp-line"
};
var SpRelayersvue_type_template_id_62097800_hoisted_11 = {
  class: "sp-component sp-relayers__add"
};

var SpRelayersvue_type_template_id_62097800_hoisted_12 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
  class: "sp-assets__header sp-component-title"
}, [/*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("h3", null, "Add a relayer")], -1);

var SpRelayersvue_type_template_id_62097800_hoisted_13 = {
  key: 0,
  class: "sp-relayers__add__main sp-box sp-shadow"
};

var SpRelayersvue_type_template_id_62097800_hoisted_14 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
  class: "sp-relayers__add__main__message"
}, " Add or unlock a wallet to create a relayer. ", -1);

var SpRelayersvue_type_template_id_62097800_hoisted_15 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])("Connect to Cosmos Hub");

var SpRelayersvue_type_template_id_62097800_hoisted_16 = {
  key: 1,
  class: "sp-relayers__add__or"
};

var SpRelayersvue_type_template_id_62097800_hoisted_17 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])("Add custom relayer");

var SpRelayersvue_type_template_id_62097800_hoisted_18 = {
  key: 3,
  class: "sp-relayers__add__main sp-box sp-shadow"
};
var SpRelayersvue_type_template_id_62097800_hoisted_19 = {
  class: "sp-relayers__add__form"
};
var SpRelayersvue_type_template_id_62097800_hoisted_20 = {
  class: "sp-form-group"
};

var SpRelayersvue_type_template_id_62097800_hoisted_21 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" External ");

var SpRelayersvue_type_template_id_62097800_hoisted_22 = {
  class: "sp-form-group"
};
var SpRelayersvue_type_template_id_62097800_hoisted_23 = {
  class: "sp-form-group"
};
var SpRelayersvue_type_template_id_62097800_hoisted_24 = {
  class: "sp-form-group"
};
var SpRelayersvue_type_template_id_62097800_hoisted_25 = {
  class: "sp-form-group"
};
var SpRelayersvue_type_template_id_62097800_hoisted_26 = {
  class: "sp-form-group"
};
var SpRelayersvue_type_template_id_62097800_hoisted_27 = {
  class: "sp-form-group"
};
var SpRelayersvue_type_template_id_62097800_hoisted_28 = {
  class: "sp-form-group"
};
var SpRelayersvue_type_template_id_62097800_hoisted_29 = {
  class: "sp-relayers__add__btns"
};

var SpRelayersvue_type_template_id_62097800_hoisted_30 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])("Cancel");

var SpRelayersvue_type_template_id_62097800_hoisted_31 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])("Add Relayer");

function SpRelayersvue_type_template_id_62097800_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_SpRelayer = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("SpRelayer");

  var _component_SpButton = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("SpButton");

  return _ctx.depsLoaded ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", SpRelayersvue_type_template_id_62097800_hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", SpRelayersvue_type_template_id_62097800_hoisted_2, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", SpRelayersvue_type_template_id_62097800_hoisted_3, [SpRelayersvue_type_template_id_62097800_hoisted_4, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", SpRelayersvue_type_template_id_62097800_hoisted_5, [!_ctx.address ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", SpRelayersvue_type_template_id_62097800_hoisted_6, " Your configured relayers will appear here. ")) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), !_ctx.address ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", SpRelayersvue_type_template_id_62097800_hoisted_7, [SpRelayersvue_type_template_id_62097800_hoisted_8])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), _ctx.address && _ctx.relayers.length == 0 ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", SpRelayersvue_type_template_id_62097800_hoisted_9, " You have no relayers configured on this address. ")) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])(_ctx.relayers, function (relayer, index) {
    return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
      key: relayer.name
    }, [index > 0 ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", SpRelayersvue_type_template_id_62097800_hoisted_10)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_SpRelayer, {
      relayer: relayer
    }, null, 8, ["relayer"])]);
  }), 128))])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", SpRelayersvue_type_template_id_62097800_hoisted_11, [SpRelayersvue_type_template_id_62097800_hoisted_12, !_ctx.address ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", SpRelayersvue_type_template_id_62097800_hoisted_13, [SpRelayersvue_type_template_id_62097800_hoisted_14])) : (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], {
    key: 1
  }, [!_ctx.showRelayerForm && !_ctx.hasHubRelayer ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_SpButton, {
    key: 0,
    onClick: _ctx.addHubRelayer,
    type: "primary"
  }, {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [SpRelayersvue_type_template_id_62097800_hoisted_15];
    }),
    _: 1
  }, 8, ["onClick"])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), !_ctx.showRelayerForm && !_ctx.hasHubRelayer ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", SpRelayersvue_type_template_id_62097800_hoisted_16, " - or - ")) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), !_ctx.showRelayerForm && !_ctx.hasHubRelayer ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_SpButton, {
    key: 2,
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return _ctx.showRelayerForm = true;
    }),
    type: "primary"
  }, {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [SpRelayersvue_type_template_id_62097800_hoisted_17];
    }),
    _: 1
  })) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), _ctx.showRelayerForm || _ctx.hasHubRelayer ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", SpRelayersvue_type_template_id_62097800_hoisted_18, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("form", SpRelayersvue_type_template_id_62097800_hoisted_19, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", SpRelayersvue_type_template_id_62097800_hoisted_20, [SpRelayersvue_type_template_id_62097800_hoisted_21, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("input", {
    type: "checkbox",
    value: "true",
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return _ctx.relayerForm.external = $event;
    })
  }, null, 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vModelCheckbox"], _ctx.relayerForm.external]])]), _ctx.relayerForm.external ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], {
    key: 0
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", SpRelayersvue_type_template_id_62097800_hoisted_22, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("input", {
    class: "sp-input",
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return _ctx.relayerForm.name = $event;
    }),
    placeholder: "Name (e.g. Foochain)"
  }, null, 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vModelText"], _ctx.relayerForm.name]])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", SpRelayersvue_type_template_id_62097800_hoisted_23, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("input", {
    class: "sp-input",
    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
      return _ctx.relayerForm.chainId = $event;
    }),
    placeholder: "Chain ID (e.g. foochain-2)"
  }, null, 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vModelText"], _ctx.relayerForm.chainId]])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", SpRelayersvue_type_template_id_62097800_hoisted_24, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("input", {
    class: "sp-input",
    "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
      return _ctx.relayerForm.channelId = $event;
    }),
    placeholder: "Channel (e.g. channel-0)"
  }, null, 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vModelText"], _ctx.relayerForm.channelId]])])], 64)) : (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], {
    key: 1
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", SpRelayersvue_type_template_id_62097800_hoisted_25, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("input", {
    class: "sp-input",
    "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
      return _ctx.relayerForm.name = $event;
    }),
    placeholder: "Name (e.g. Foochain)"
  }, null, 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vModelText"], _ctx.relayerForm.name]])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", SpRelayersvue_type_template_id_62097800_hoisted_26, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("input", {
    class: "sp-input",
    "onUpdate:modelValue": _cache[7] || (_cache[7] = function ($event) {
      return _ctx.relayerForm.endpoint = $event;
    }),
    placeholder: "Endpoint (e.g. https://rpc.foochain.org)"
  }, null, 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vModelText"], _ctx.relayerForm.endpoint]])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", SpRelayersvue_type_template_id_62097800_hoisted_27, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("input", {
    class: "sp-input",
    "onUpdate:modelValue": _cache[8] || (_cache[8] = function ($event) {
      return _ctx.relayerForm.prefix = $event;
    }),
    placeholder: "Prefix (e.g. foo)"
  }, null, 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vModelText"], _ctx.relayerForm.prefix]])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", SpRelayersvue_type_template_id_62097800_hoisted_28, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("input", {
    class: "sp-input",
    "onUpdate:modelValue": _cache[9] || (_cache[9] = function ($event) {
      return _ctx.relayerForm.gasPrice = $event;
    }),
    placeholder: "Gas Price (e.g. 0.025ufoo)"
  }, null, 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vModelText"], _ctx.relayerForm.gasPrice]])])], 64)), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", SpRelayersvue_type_template_id_62097800_hoisted_29, [!_ctx.hasHubRelayer ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_SpButton, {
    key: 0,
    onClick: _cache[10] || (_cache[10] = function ($event) {
      return _ctx.showRelayerForm = false;
    }),
    type: "secondary"
  }, {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [SpRelayersvue_type_template_id_62097800_hoisted_30];
    }),
    _: 1
  })) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_SpButton, {
    onClick: _ctx.addRelayer,
    type: "primary"
  }, {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [SpRelayersvue_type_template_id_62097800_hoisted_31];
    }),
    _: 1
  }, 8, ["onClick"])])])])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)], 64))])])])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true);
}
// CONCATENATED MODULE: ./src/components/SpRelayers/SpRelayers.vue?vue&type=template&id=62097800

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/SpRelayers/SpRelayers.vue?vue&type=script&lang=ts






/* harmony default export */ var SpRelayersvue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  name: 'SpRelayers',
  components: {
    SpRelayer: components_SpRelayer
  },
  data: function data() {
    return {
      showRelayerForm: false,
      relayerForm: {
        name: '',
        endpoint: '',
        prefix: '',
        gasPrice: '',
        external: false,
        chainId: '',
        channelId: ''
      }
    };
  },
  beforeCreate: function beforeCreate() {
    var module = ['common', 'wallet'];

    for (var i = 1; i <= module.length; i++) {
      var submod = module.slice(0, i);

      if (!this.$store.hasModule(submod)) {
        console.log('Module `common.wallet` has not been registered!');
        this._depsLoaded = false;
        break;
      }
    }

    module = ['common', 'relayers'];

    for (var _i = 1; _i <= module.length; _i++) {
      var _submod = module.slice(0, _i);

      if (!this.$store.hasModule(_submod)) {
        console.log('Module `common.relayers` has not been registered!');
        this._depsLoaded = false;
        break;
      }
    }
  },
  computed: {
    depsLoaded: function depsLoaded() {
      return this._depsLoaded;
    },
    address: function address() {
      return this.$store.getters['common/wallet/address'];
    },
    hasHubRelayer: function hasHubRelayer() {
      return this.relayers.findIndex(function (x) {
        return x.chainIdB == 'cosmoshub-4';
      }) > -1;
    },
    relayers: function relayers() {
      return this.$store.getters['common/relayers/getRelayers'];
    }
  },
  methods: {
    addRelayer: function () {
      var _addRelayer = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.$store.dispatch('common/relayers/createRelayer', this.relayerForm);

              case 2:
                this.relayerForm = {
                  name: '',
                  chainId: '',
                  channelId: '',
                  external: false,
                  endpoint: '',
                  prefix: '',
                  gasPrice: ''
                };

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function addRelayer() {
        return _addRelayer.apply(this, arguments);
      }

      return addRelayer;
    }(),
    addHubRelayer: function () {
      var _addHubRelayer = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.$store.dispatch('common/relayers/createRelayer', {
                  name: 'CosmosHub',
                  endpoint: 'https://rpc.nylira.net',
                  prefix: 'cosmos',
                  gasPrice: '0.025uatom'
                });

              case 2:
                this.relayerForm = {
                  name: '',
                  chainId: '',
                  channelId: '',
                  external: false,
                  endpoint: '',
                  prefix: '',
                  gasPrice: ''
                };

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function addHubRelayer() {
        return _addHubRelayer.apply(this, arguments);
      }

      return addHubRelayer;
    }()
  }
}));
// CONCATENATED MODULE: ./src/components/SpRelayers/SpRelayers.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./src/components/SpRelayers/SpRelayers.vue



SpRelayersvue_type_script_lang_ts.render = SpRelayersvue_type_template_id_62097800_render

/* harmony default export */ var SpRelayers = (SpRelayersvue_type_script_lang_ts);
// CONCATENATED MODULE: ./src/components/SpRelayers/index.ts


var SpRelayers_Plugin = {
  install: function install(vue) {
    registerComponent(vue, SpRelayers);
  }
}; // use(Plugin);

/* harmony default export */ var components_SpRelayers = (SpRelayers_Plugin);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/SpSidebar/SpSidebar.vue?vue&type=template&id=36a634a7


var SpSidebarvue_type_template_id_36a634a7_hoisted_1 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
  class: "sp-icon sp-icon-Hamburger"
}, null, -1);

var SpSidebarvue_type_template_id_36a634a7_hoisted_2 = {
  key: 0,
  class: "sp-sidebar__header"
};
var SpSidebarvue_type_template_id_36a634a7_hoisted_3 = {
  class: "sp-sidebar__content"
};
var SpSidebarvue_type_template_id_36a634a7_hoisted_4 = {
  class: "sp-sidebar__footer"
};
function SpSidebarvue_type_template_id_36a634a7_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
    class: ["sp-sidebar", {
      'sp-opened': _ctx.opened,
      'sp-mob-opened': _ctx.mobOpened
    }]
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
    class: "sp-hamburger sp-shadow",
    onClick: _cache[1] || (_cache[1] = function () {
      return _ctx.toggleMobOpen && _ctx.toggleMobOpen.apply(_ctx, arguments);
    })
  }, [SpSidebarvue_type_template_id_36a634a7_hoisted_1]), _ctx.$slots.header ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", SpSidebarvue_type_template_id_36a634a7_hoisted_2, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "header")])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", SpSidebarvue_type_template_id_36a634a7_hoisted_3, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", SpSidebarvue_type_template_id_36a634a7_hoisted_4, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "footer")])], 2);
}
// CONCATENATED MODULE: ./src/components/SpSidebar/SpSidebar.vue?vue&type=template&id=36a634a7

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/SpSidebar/SpSidebar.vue?vue&type=script&lang=ts

/* harmony default export */ var SpSidebarvue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  name: 'SpSidebar',
  components: {//	SpBadgeButton
  },
  data: function data() {
    return {
      opened: true,
      mobOpened: false
    };
  },
  methods: {
    toggleOpen: function toggleOpen() {
      this.opened = !this.opened;
      this.opened ? this.$emit('sidebar-open') : this.$emit('sidebar-close');
    },
    toggleMobOpen: function toggleMobOpen() {
      this.mobOpened = !this.mobOpened; //this.mobOpened ? this.$emit('sidebar-open') : this.$emit('sidebar-close')
    }
  }
}));
// CONCATENATED MODULE: ./src/components/SpSidebar/SpSidebar.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./src/components/SpSidebar/SpSidebar.vue



SpSidebarvue_type_script_lang_ts.render = SpSidebarvue_type_template_id_36a634a7_render

/* harmony default export */ var SpSidebar = (SpSidebarvue_type_script_lang_ts);
// CONCATENATED MODULE: ./src/components/SpSidebar/index.ts


var SpSidebar_Plugin = {
  install: function install(vue) {
    registerComponent(vue, SpSidebar);
  }
}; // use(Plugin);

/* harmony default export */ var components_SpSidebar = (SpSidebar_Plugin);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/SpStatusLED/SpStatusLED.vue?vue&type=template&id=327a7f86

function SpStatusLEDvue_type_template_id_327a7f86_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
    class: ["sp-status-led", {
      'sp-active': _ctx.status
    }]
  }, null, 2);
}
// CONCATENATED MODULE: ./src/components/SpStatusLED/SpStatusLED.vue?vue&type=template&id=327a7f86

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/SpStatusLED/SpStatusLED.vue?vue&type=script&lang=ts

/* harmony default export */ var SpStatusLEDvue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  name: 'SpStatusLED',
  props: {
    status: {
      type: Boolean
    }
  }
}));
// CONCATENATED MODULE: ./src/components/SpStatusLED/SpStatusLED.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./src/components/SpStatusLED/SpStatusLED.vue



SpStatusLEDvue_type_script_lang_ts.render = SpStatusLEDvue_type_template_id_327a7f86_render

/* harmony default export */ var SpStatusLED = (SpStatusLEDvue_type_script_lang_ts);
// CONCATENATED MODULE: ./src/components/SpStatusLED/index.ts


var SpStatusLED_Plugin = {
  install: function install(vue) {
    registerComponent(vue, SpStatusLED);
  }
}; // use(Plugin);

/* harmony default export */ var components_SpStatusLED = (SpStatusLED_Plugin);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/SpStatusAPI/SpStatusAPI.vue?vue&type=template&id=62121466

var SpStatusAPIvue_type_template_id_62121466_hoisted_1 = {
  class: "sp-status-api"
};
function SpStatusAPIvue_type_template_id_62121466_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_SpStatusLED = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("SpStatusLED");

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", SpStatusAPIvue_type_template_id_62121466_hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_SpStatusLED, {
    status: _ctx.nodeStatus,
    alt: 'Cosmos SDK API ' + _ctx.apiNode,
    title: 'Cosmos SDK API ' + _ctx.apiNode
  }, null, 8, ["status", "alt", "title"]), _ctx.showText ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
    key: 0,
    class: "sp-status-api__text",
    alt: 'Cosmos SDK API ' + _ctx.apiNode,
    title: 'Cosmos SDK API ' + _ctx.apiNode
  }, " Cosmos SDK API ", 8, ["alt", "title"])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)]);
}
// CONCATENATED MODULE: ./src/components/SpStatusAPI/SpStatusAPI.vue?vue&type=template&id=62121466

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/SpStatusAPI/SpStatusAPI.vue?vue&type=script&lang=ts


/* harmony default export */ var SpStatusAPIvue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  name: 'SpStatusAPI',
  components: {
    SpStatusLED: components_SpStatusLED
  },
  props: {
    showText: {
      type: Boolean
    }
  },
  computed: {
    apiNode: function apiNode() {
      return this.$store.getters['common/env/apiCosmos'];
    },
    nodeStatus: function nodeStatus() {
      return this.$store.getters['common/env/apiConnected'];
    }
  }
}));
// CONCATENATED MODULE: ./src/components/SpStatusAPI/SpStatusAPI.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./src/components/SpStatusAPI/SpStatusAPI.vue



SpStatusAPIvue_type_script_lang_ts.render = SpStatusAPIvue_type_template_id_62121466_render

/* harmony default export */ var SpStatusAPI = (SpStatusAPIvue_type_script_lang_ts);
// CONCATENATED MODULE: ./src/components/SpStatusAPI/index.ts


var SpStatusAPI_Plugin = {
  install: function install(vue) {
    registerComponent(vue, SpStatusAPI);
  }
}; // use(Plugin);

/* harmony default export */ var components_SpStatusAPI = (SpStatusAPI_Plugin);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/SpStatusRPC/SpStatusRPC.vue?vue&type=template&id=a3c72210

var SpStatusRPCvue_type_template_id_a3c72210_hoisted_1 = {
  class: "sp-status-rpc"
};
function SpStatusRPCvue_type_template_id_a3c72210_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_SpStatusLED = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("SpStatusLED");

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", SpStatusRPCvue_type_template_id_a3c72210_hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_SpStatusLED, {
    status: _ctx.nodeStatus,
    alt: 'RPCTendermint RPC' + _ctx.rpcNode,
    title: 'Tendermint RPC ' + _ctx.rpcNode
  }, null, 8, ["status", "alt", "title"]), _ctx.showText ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
    key: 0,
    class: "sp-status-rpc__text",
    alt: 'Tendermint RPC ' + _ctx.rpcNode,
    title: 'Tendermint RPC ' + _ctx.rpcNode
  }, " Tendermint RPC ", 8, ["alt", "title"])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)]);
}
// CONCATENATED MODULE: ./src/components/SpStatusRPC/SpStatusRPC.vue?vue&type=template&id=a3c72210

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/SpStatusRPC/SpStatusRPC.vue?vue&type=script&lang=ts


/* harmony default export */ var SpStatusRPCvue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  name: 'SpStatusRPC',
  components: {
    SpStatusLED: components_SpStatusLED
  },
  props: {
    showText: {
      type: Boolean
    }
  },
  computed: {
    rpcNode: function rpcNode() {
      return this.$store.getters['common/env/apiTendermint'];
    },
    nodeStatus: function nodeStatus() {
      return this.$store.getters['common/env/rpcConnected'];
    }
  }
}));
// CONCATENATED MODULE: ./src/components/SpStatusRPC/SpStatusRPC.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./src/components/SpStatusRPC/SpStatusRPC.vue



SpStatusRPCvue_type_script_lang_ts.render = SpStatusRPCvue_type_template_id_a3c72210_render

/* harmony default export */ var SpStatusRPC = (SpStatusRPCvue_type_script_lang_ts);
// CONCATENATED MODULE: ./src/components/SpStatusRPC/index.ts


var SpStatusRPC_Plugin = {
  install: function install(vue) {
    registerComponent(vue, SpStatusRPC);
  }
}; // use(Plugin);

/* harmony default export */ var components_SpStatusRPC = (SpStatusRPC_Plugin);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/SpStatusWS/SpStatusWS.vue?vue&type=template&id=1a33e5b2

var SpStatusWSvue_type_template_id_1a33e5b2_hoisted_1 = {
  class: "sp-status-ws"
};
function SpStatusWSvue_type_template_id_1a33e5b2_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_SpStatusLED = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("SpStatusLED");

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", SpStatusWSvue_type_template_id_1a33e5b2_hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_SpStatusLED, {
    status: _ctx.nodeStatus,
    alt: 'WebSocket ' + _ctx.wsNode,
    title: 'WebSocket ' + _ctx.wsNode
  }, null, 8, ["status", "alt", "title"]), _ctx.showText ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
    key: 0,
    class: "sp-status-ws__text",
    alt: 'WebSocket ' + _ctx.wsNode,
    title: 'WebSocket ' + _ctx.wsNode
  }, " WebSocket ", 8, ["alt", "title"])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)]);
}
// CONCATENATED MODULE: ./src/components/SpStatusWS/SpStatusWS.vue?vue&type=template&id=1a33e5b2

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/SpStatusWS/SpStatusWS.vue?vue&type=script&lang=ts


/* harmony default export */ var SpStatusWSvue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  name: 'SpStatusWS',
  components: {
    SpStatusLED: components_SpStatusLED
  },
  props: {
    showText: {
      type: Boolean
    }
  },
  computed: {
    wsNode: function wsNode() {
      return this.$store.getters['common/env/apiWS'];
    },
    nodeStatus: function nodeStatus() {
      return this.$store.getters['common/env/wsConnected'];
    }
  }
}));
// CONCATENATED MODULE: ./src/components/SpStatusWS/SpStatusWS.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./src/components/SpStatusWS/SpStatusWS.vue



SpStatusWSvue_type_script_lang_ts.render = SpStatusWSvue_type_template_id_1a33e5b2_render

/* harmony default export */ var SpStatusWS = (SpStatusWSvue_type_script_lang_ts);
// CONCATENATED MODULE: ./src/components/SpStatusWS/index.ts


var SpStatusWS_Plugin = {
  install: function install(vue) {
    registerComponent(vue, SpStatusWS);
  }
}; // use(Plugin);

/* harmony default export */ var components_SpStatusWS = (SpStatusWS_Plugin);

// CONCATENATED MODULE: ./src/components/index.ts














// CONCATENATED MODULE: ./src/utils/config/index.ts
var config = {};
var VueInstance;

var setVueInstance = function setVueInstance(instance) {
  VueInstance = instance;
};
// CONCATENATED MODULE: ./src/index.ts
/* eslint-disable */




var src_install = function install(instance) {
  setVueInstance(instance);

  for (var componentKey in components_namespaceObject) {
    instance.use(components_namespaceObject[componentKey]);
  }

  instance.directive('click-outside', {
    beforeMount: function beforeMount(el, binding) {
      el.clickOutsideEvent = function (event) {
        if (!(el === event.target || el.contains(event.target))) {
          binding.value(event, el);
        }
      };

      document.body.addEventListener('click', el.clickOutsideEvent);
    },
    unmounted: function unmounted(el) {
      document.body.removeEventListener('click', el.clickOutsideEvent);
    }
  });
};

/* harmony default export */ var src_0 = (src_install);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src_0);



/***/ }),

/***/ "fb6a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var isObject = __webpack_require__("861d");
var isArray = __webpack_require__("e8b5");
var toAbsoluteIndex = __webpack_require__("23cb");
var toLength = __webpack_require__("50c4");
var toIndexedObject = __webpack_require__("fc6a");
var createProperty = __webpack_require__("8418");
var wellKnownSymbol = __webpack_require__("b622");
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');

var SPECIES = wellKnownSymbol('species');
var nativeSlice = [].slice;
var max = Math.max;

// `Array.prototype.slice` method
// https://tc39.es/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  slice: function slice(start, end) {
    var O = toIndexedObject(this);
    var length = toLength(O.length);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
    var Constructor, result, n;
    if (isArray(O)) {
      Constructor = O.constructor;
      // cross-realm fallback
      if (typeof Constructor == 'function' && (Constructor === Array || isArray(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject(Constructor)) {
        Constructor = Constructor[SPECIES];
        if (Constructor === null) Constructor = undefined;
      }
      if (Constructor === Array || Constructor === undefined) {
        return nativeSlice.call(O, k, fin);
      }
    }
    result = new (Constructor === undefined ? Array : Constructor)(max(fin - k, 0));
    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
    result.length = n;
    return result;
  }
});


/***/ }),

/***/ "fc6a":
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__("44ad");
var requireObjectCoercible = __webpack_require__("1d80");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "fdbf":
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__("4930");

module.exports = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ "fea9":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");

module.exports = global.Promise;


/***/ })

/******/ });
//# sourceMappingURL=starport-vue.common.js.map