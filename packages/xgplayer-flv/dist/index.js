(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('xgplayer')) :
  typeof define === 'function' && define.amd ? define(['xgplayer'], factory) :
  (global = global || self, global.FlvPlayer = factory(global.Player));
}(this, (function (Player) { 'use strict';

  Player = Player && Player.hasOwnProperty('default') ? Player['default'] : Player;

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };

  var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var get = function get(object, property, receiver) {
    if (object === null) object = Function.prototype;
    var desc = Object.getOwnPropertyDescriptor(object, property);

    if (desc === undefined) {
      var parent = Object.getPrototypeOf(object);

      if (parent === null) {
        return undefined;
      } else {
        return get(parent, property, receiver);
      }
    } else if ("value" in desc) {
      return desc.value;
    } else {
      var getter = desc.get;

      if (getter === undefined) {
        return undefined;
      }

      return getter.call(receiver);
    }
  };

  var inherits = function (subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  };

  var possibleConstructorReturn = function (self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  };

  var slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();

  function EventHandlers() {}function EventEmitter() {
    EventEmitter.init.call(this);
  }function $getMaxListeners(e) {
    return void 0 === e._maxListeners ? EventEmitter.defaultMaxListeners : e._maxListeners;
  }function emitNone(e, t, i) {
    if (t) e.call(i);else for (var r = e.length, n = arrayClone(e, r), a = 0; a < r; ++a) {
      n[a].call(i);
    }
  }function emitOne(e, t, i, r) {
    if (t) e.call(i, r);else for (var n = e.length, a = arrayClone(e, n), s = 0; s < n; ++s) {
      a[s].call(i, r);
    }
  }function emitTwo(e, t, i, r, n) {
    if (t) e.call(i, r, n);else for (var a = e.length, s = arrayClone(e, a), o = 0; o < a; ++o) {
      s[o].call(i, r, n);
    }
  }function emitThree(e, t, i, r, n, a) {
    if (t) e.call(i, r, n, a);else for (var s = e.length, o = arrayClone(e, s), l = 0; l < s; ++l) {
      o[l].call(i, r, n, a);
    }
  }function emitMany(e, t, i, r) {
    if (t) e.apply(i, r);else for (var n = e.length, a = arrayClone(e, n), s = 0; s < n; ++s) {
      a[s].apply(i, r);
    }
  }function _addListener(e, t, i, r) {
    var n, a, s;if ("function" != typeof i) throw new TypeError('"listener" argument must be a function');if (a = e._events, a ? (a.newListener && (e.emit("newListener", t, i.listener ? i.listener : i), a = e._events), s = a[t]) : (a = e._events = new EventHandlers(), e._eventsCount = 0), s) {
      if ("function" == typeof s ? s = a[t] = r ? [i, s] : [s, i] : r ? s.unshift(i) : s.push(i), !s.warned && (n = $getMaxListeners(e)) && n > 0 && s.length > n) {
        s.warned = !0;var o = new Error("Possible EventEmitter memory leak detected. " + s.length + " " + t + " listeners added. Use emitter.setMaxListeners() to increase limit");o.name = "MaxListenersExceededWarning", o.emitter = e, o.type = t, o.count = s.length, emitWarning(o);
      }
    } else s = a[t] = i, ++e._eventsCount;return e;
  }function emitWarning(e) {
    "function" == typeof console.warn ? console.warn(e) : console.log(e);
  }function _onceWrap(e, t, i) {
    function r() {
      e.removeListener(t, r), n || (n = !0, i.apply(e, arguments));
    }var n = !1;return r.listener = i, r;
  }function listenerCount(e) {
    var t = this._events;if (t) {
      var i = t[e];if ("function" == typeof i) return 1;if (i) return i.length;
    }return 0;
  }function spliceOne(e, t) {
    for (var i = t, r = i + 1, n = e.length; r < n; i += 1, r += 1) {
      e[i] = e[r];
    }e.pop();
  }function arrayClone(e, t) {
    for (var i = new Array(t); t--;) {
      i[t] = e[t];
    }return i;
  }function unwrapListeners(e) {
    for (var t = new Array(e.length), i = 0; i < t.length; ++i) {
      t[i] = e[i].listener || e[i];
    }return t;
  }function unwrapExports(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
  }function createCommonjsModule(e, t) {
    return t = { exports: {} }, e(t, t.exports), t.exports;
  }var _typeof$1 = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
    return typeof e === "undefined" ? "undefined" : _typeof(e);
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof(e);
  },
      classCallCheck$1 = function classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  },
      createClass$1 = function () {
    function e(e, t) {
      for (var i = 0; i < t.length; i++) {
        var r = t[i];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }return function (t, i, r) {
      return i && e(t.prototype, i), r && e(t, r), t;
    };
  }(),
      get$1 = function e(t, i, r) {
    null === t && (t = Function.prototype);var n = Object.getOwnPropertyDescriptor(t, i);if (void 0 === n) {
      var a = Object.getPrototypeOf(t);return null === a ? void 0 : e(a, i, r);
    }if ("value" in n) return n.value;var s = n.get;if (void 0 !== s) return s.call(r);
  },
      inherits$1 = function inherits(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
  },
      possibleConstructorReturn$1 = function possibleConstructorReturn(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
  };!function (e) {
    var t = e.babelHelpers = {};t.typeof = function (e) {
      return void 0 === e ? "undefined" : _typeof$1(e);
    }, t.classCallCheck = function (e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }, t.createClass = function () {
      function e(e, t) {
        for (var i = 0; i < t.length; i++) {
          var r = t[i];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
        }
      }return function (t, i, r) {
        return i && e(t.prototype, i), r && e(t, r), t;
      };
    }(), t.defineEnumerableProperties = function (e, t) {
      for (var i in t) {
        var r = t[i];r.configurable = r.enumerable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, i, r);
      }return e;
    }, t.defaults = function (e, t) {
      for (var i = Object.getOwnPropertyNames(t), r = 0; r < i.length; r++) {
        var n = i[r],
            a = Object.getOwnPropertyDescriptor(t, n);a && a.configurable && void 0 === e[n] && Object.defineProperty(e, n, a);
      }return e;
    }, t.defineProperty = function (e, t, i) {
      return t in e ? Object.defineProperty(e, t, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = i, e;
    }, t.extends = Object.assign || function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var i = arguments[t];for (var r in i) {
          Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r]);
        }
      }return e;
    }, t.get = function e(t, i, r) {
      null === t && (t = Function.prototype);var n = Object.getOwnPropertyDescriptor(t, i);if (void 0 === n) {
        var a = Object.getPrototypeOf(t);return null === a ? void 0 : e(a, i, r);
      }if ("value" in n) return n.value;var s = n.get;if (void 0 !== s) return s.call(r);
    }, t.inherits = function (e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : _typeof$1(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }, t.instanceof = function (e, t) {
      return null != t && "undefined" != typeof Symbol && t[Symbol.hasInstance] ? t[Symbol.hasInstance](e) : e instanceof t;
    }, t.interopRequireDefault = function (e) {
      return e && e.__esModule ? e : { default: e };
    }, t.interopRequireWildcard = function (e) {
      if (e && e.__esModule) return e;var t = {};if (null != e) for (var i in e) {
        Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
      }return t.default = e, t;
    }, t.newArrowCheck = function (e, t) {
      if (e !== t) throw new TypeError("Cannot instantiate an arrow function");
    }, t.objectDestructuringEmpty = function (e) {
      if (null == e) throw new TypeError("Cannot destructure undefined");
    }, t.objectWithoutProperties = function (e, t) {
      var i = {};for (var r in e) {
        t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (i[r] = e[r]);
      }return i;
    }, t.possibleConstructorReturn = function (e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" !== (void 0 === t ? "undefined" : _typeof$1(t)) && "function" != typeof t ? e : t;
    }, t.selfGlobal = void 0 === e ? self : e, t.set = function e(t, i, r, n) {
      var a = Object.getOwnPropertyDescriptor(t, i);if (void 0 === a) {
        var s = Object.getPrototypeOf(t);null !== s && e(s, i, r, n);
      } else if ("value" in a && a.writable) a.value = r;else {
        var o = a.set;void 0 !== o && o.call(n, r);
      }return r;
    }, t.slicedToArray = function () {
      function e(e, t) {
        var i = [],
            r = !0,
            n = !1,
            a = void 0;try {
          for (var s, o = e[Symbol.iterator](); !(r = (s = o.next()).done) && (i.push(s.value), !t || i.length !== t); r = !0) {}
        } catch (e) {
          n = !0, a = e;
        } finally {
          try {
            !r && o.return && o.return();
          } finally {
            if (n) throw a;
          }
        }return i;
      }return function (t, i) {
        if (Array.isArray(t)) return t;if (Symbol.iterator in Object(t)) return e(t, i);throw new TypeError("Invalid attempt to destructure non-iterable instance");
      };
    }(), t.slicedToArrayLoose = function (e, t) {
      if (Array.isArray(e)) return e;if (Symbol.iterator in Object(e)) {
        for (var i, r = [], n = e[Symbol.iterator](); !(i = n.next()).done && (r.push(i.value), !t || r.length !== t);) {}return r;
      }throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }, t.taggedTemplateLiteral = function (e, t) {
      return Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
    }, t.taggedTemplateLiteralLoose = function (e, t) {
      return e.raw = t, e;
    }, t.temporalRef = function (e, t, i) {
      if (e === i) throw new ReferenceError(t + " is not defined - temporal dead zone");return e;
    }, t.temporalUndefined = {}, t.toArray = function (e) {
      return Array.isArray(e) ? e : Array.from(e);
    }, t.toConsumableArray = function (e) {
      if (Array.isArray(e)) {
        for (var t = 0, i = Array(e.length); t < e.length; t++) {
          i[t] = e[t];
        }return i;
      }return Array.from(e);
    };
  }("undefined" == typeof global ? self : global);var isObjectFilled = function isObjectFilled(e) {
    for (var t in e) {
      if (e.hasOwnProperty(t) && null === e[t]) return !1;
    }return !0;
  },
      MediaInfo = function () {
    function e() {
      classCallCheck(this, e), this.mimeType = null, this.duration = null, this.hasVideo = null, this.video = { codec: null, width: null, height: null, profile: null, level: null, frameRate: { fixed: !0, fps: 25, fps_num: 25e3, fps_den: 1e3 }, chromaFormat: null, parRatio: { width: 1, height: 1 } }, this.hasAudio = null, this.audio = { codec: null, sampleRate: null, sampleRateIndex: null, channelCount: null };
    }return createClass(e, [{ key: "isComplete", value: function value() {
        return e.isBaseInfoReady(this) && e.isVideoReady(this) && e.isAudioReady(this);
      } }], [{ key: "isBaseInfoReady", value: function value(e) {
        return isObjectFilled(e);
      } }, { key: "isVideoReady", value: function value(e) {
        return !e.hasVideo || isObjectFilled(e.video);
      } }, { key: "isAudioReady", value: function value(e) {
        return !e.hasAudio || isObjectFilled(e.video);
      } }]), e;
  }(),
      domain;EventHandlers.prototype = Object.create(null), EventEmitter.EventEmitter = EventEmitter, EventEmitter.usingDomains = !1, EventEmitter.prototype.domain = void 0, EventEmitter.prototype._events = void 0, EventEmitter.prototype._maxListeners = void 0, EventEmitter.defaultMaxListeners = 10, EventEmitter.init = function () {
    this.domain = null, EventEmitter.usingDomains && domain.active && domain.Domain, this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = new EventHandlers(), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
  }, EventEmitter.prototype.setMaxListeners = function (e) {
    if ("number" != typeof e || e < 0 || isNaN(e)) throw new TypeError('"n" argument must be a positive number');return this._maxListeners = e, this;
  }, EventEmitter.prototype.getMaxListeners = function () {
    return $getMaxListeners(this);
  }, EventEmitter.prototype.emit = function (e) {
    var t,
        i,
        r,
        n,
        a,
        s,
        o,
        l = "error" === e;if (s = this._events) l = l && null == s.error;else if (!l) return !1;if (o = this.domain, l) {
      if (t = arguments[1], !o) {
        if (t instanceof Error) throw t;var u = new Error('Uncaught, unspecified "error" event. (' + t + ")");throw u.context = t, u;
      }return t || (t = new Error('Uncaught, unspecified "error" event')), t.domainEmitter = this, t.domain = o, t.domainThrown = !1, o.emit("error", t), !1;
    }if (!(i = s[e])) return !1;var h = "function" == typeof i;switch (r = arguments.length) {case 1:
        emitNone(i, h, this);break;case 2:
        emitOne(i, h, this, arguments[1]);break;case 3:
        emitTwo(i, h, this, arguments[1], arguments[2]);break;case 4:
        emitThree(i, h, this, arguments[1], arguments[2], arguments[3]);break;default:
        for (n = new Array(r - 1), a = 1; a < r; a++) {
          n[a - 1] = arguments[a];
        }emitMany(i, h, this, n);}return !0;
  }, EventEmitter.prototype.addListener = function (e, t) {
    return _addListener(this, e, t, !1);
  }, EventEmitter.prototype.on = EventEmitter.prototype.addListener, EventEmitter.prototype.prependListener = function (e, t) {
    return _addListener(this, e, t, !0);
  }, EventEmitter.prototype.once = function (e, t) {
    if ("function" != typeof t) throw new TypeError('"listener" argument must be a function');return this.on(e, _onceWrap(this, e, t)), this;
  }, EventEmitter.prototype.prependOnceListener = function (e, t) {
    if ("function" != typeof t) throw new TypeError('"listener" argument must be a function');return this.prependListener(e, _onceWrap(this, e, t)), this;
  }, EventEmitter.prototype.removeListener = function (e, t) {
    var i, r, n, a, s;if ("function" != typeof t) throw new TypeError('"listener" argument must be a function');if (!(r = this._events)) return this;if (!(i = r[e])) return this;if (i === t || i.listener && i.listener === t) 0 == --this._eventsCount ? this._events = new EventHandlers() : (delete r[e], r.removeListener && this.emit("removeListener", e, i.listener || t));else if ("function" != typeof i) {
      for (n = -1, a = i.length; a-- > 0;) {
        if (i[a] === t || i[a].listener && i[a].listener === t) {
          s = i[a].listener, n = a;break;
        }
      }if (n < 0) return this;if (1 === i.length) {
        if (i[0] = void 0, 0 == --this._eventsCount) return this._events = new EventHandlers(), this;delete r[e];
      } else spliceOne(i, n);r.removeListener && this.emit("removeListener", e, s || t);
    }return this;
  }, EventEmitter.prototype.removeAllListeners = function (e) {
    var t, i;if (!(i = this._events)) return this;if (!i.removeListener) return 0 === arguments.length ? (this._events = new EventHandlers(), this._eventsCount = 0) : i[e] && (0 == --this._eventsCount ? this._events = new EventHandlers() : delete i[e]), this;if (0 === arguments.length) {
      for (var r, n = Object.keys(i), a = 0; a < n.length; ++a) {
        "removeListener" !== (r = n[a]) && this.removeAllListeners(r);
      }return this.removeAllListeners("removeListener"), this._events = new EventHandlers(), this._eventsCount = 0, this;
    }if ("function" == typeof (t = i[e])) this.removeListener(e, t);else if (t) do {
      this.removeListener(e, t[t.length - 1]);
    } while (t[0]);return this;
  }, EventEmitter.prototype.listeners = function (e) {
    var t,
        i = this._events;return i && (t = i[e]) ? "function" == typeof t ? [t.listener || t] : unwrapListeners(t) : [];
  }, EventEmitter.listenerCount = function (e, t) {
    return "function" == typeof e.listenerCount ? e.listenerCount(t) : listenerCount.call(e, t);
  }, EventEmitter.prototype.listenerCount = listenerCount, EventEmitter.prototype.eventNames = function () {
    return this._eventsCount > 0 ? Reflect.ownKeys(this._events) : [];
  };var DIRECT_EMIT_FLAG = "__TO__",
      Context = function () {
    function e() {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];classCallCheck(this, e), this._emitter = new EventEmitter(), this._emitter.off || (this._emitter.off = this._emitter.removeListener), this._instanceMap = {}, this._clsMap = {}, this._inited = !1, this.mediaInfo = new MediaInfo(), this.allowedEvents = t, this._hooks = {};
    }return createClass(e, [{ key: "getInstance", value: function value(e) {
        var t = this._instanceMap[e];return t || null;
      } }, { key: "initInstance", value: function value(e) {
        for (var t = arguments.length, i = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) {
          i[r - 1] = arguments[r];
        }var n = i[0],
            a = i[1],
            s = i[2],
            o = i[3];if (this._clsMap[e]) {
          var l = new this._clsMap[e](n, a, s, o);return this._instanceMap[e] = l, l.init && l.init(), l;
        }throw new Error(e + "未在context中注册");
      } }, { key: "init", value: function value(e) {
        if (!this._inited) {
          for (var t in this._clsMap) {
            this._clsMap.hasOwnProperty(t) && !this._instanceMap[t] && this.initInstance(t, e);
          }this._inited = !0;
        }
      } }, { key: "registry", value: function value(e, t) {
        var i = this,
            r = this._emitter,
            n = this._isMessageNameValid.bind(this),
            a = this,
            s = function (t) {
          function i(t, r, n) {
            classCallCheck(this, i);var s = possibleConstructorReturn(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, t, r, n));return s.listeners = {}, s.onceListeners = {}, s.TAG = e, s._context = a, s;
          }return inherits(i, t), createClass(i, [{ key: "on", value: function value(t, i) {
              return n(t), this.listeners[t] ? this.listeners[t].push(i) : this.listeners[t] = [i], r.on("" + t + DIRECT_EMIT_FLAG + e, i), r.on(t, i);
            } }, { key: "before", value: function value(e, t) {
              n(e), a._hooks[e] ? a._hooks[e].push(t) : a._hooks[e] = [t];
            } }, { key: "once", value: function value(t, i) {
              return n(t), this.onceListeners[t] ? this.onceListeners[t].push(i) : this.onceListeners[t] = [i], r.once("" + t + DIRECT_EMIT_FLAG + e, i), r.once(t, i);
            } }, { key: "emit", value: function value(e) {
              n(e);var t = a._hooks ? a._hooks[e] : null;if (t) for (var i = 0, s = t.length; i < s; i++) {
                (0, t[i])();
              }for (var o = arguments.length, l = Array(o > 1 ? o - 1 : 0), u = 1; u < o; u++) {
                l[u - 1] = arguments[u];
              }return r.emit.apply(r, [e].concat(l));
            } }, { key: "emitTo", value: function value(e, t) {
              n(t);for (var i = arguments.length, a = Array(i > 2 ? i - 2 : 0), s = 2; s < i; s++) {
                a[s - 2] = arguments[s];
              }return r.emit.apply(r, ["" + t + DIRECT_EMIT_FLAG + e].concat(a));
            } }, { key: "off", value: function value(e, t) {
              return n(e), r.off(e, t);
            } }, { key: "removeListeners", value: function value() {
              var t = Object.prototype.hasOwnProperty.bind(this.listeners);for (var i in this.listeners) {
                if (t(i)) for (var n = this.listeners[i] || [], a = 0; a < n.length; a++) {
                  var s = n[a];r.off(i, s), r.off("" + i + DIRECT_EMIT_FLAG + e, s);
                }
              }for (var o in this.onceListeners) {
                if (t(o)) for (var l = this.onceListeners[o] || [], u = 0; u < l.length; u++) {
                  var h = l[u];r.off(o, h), r.off("" + o + DIRECT_EMIT_FLAG + e, h);
                }
              }
            } }, { key: "destroy", value: function value() {
              if (this.removeListeners(), this.listeners = {}, delete a._instanceMap[e], get(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "destroy", this)) return get(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "destroy", this).call(this);
            } }]), i;
        }(t);return this._clsMap[e] = s, function () {
          for (var t = arguments.length, r = Array(t), n = 0; n < t; n++) {
            r[n] = arguments[n];
          }return i.initInstance.apply(i, [e].concat(r));
        };
      } }, { key: "destroyInstances", value: function value() {
        var e = this;Object.keys(this._instanceMap).forEach(function (t) {
          e._instanceMap[t].destroy && e._instanceMap[t].destroy();
        });
      } }, { key: "destroy", value: function value() {
        this._emitter = null, this.allowedEvents = [], this._clsMap = null, this._context = null, this._hooks = null, this.destroyInstances();
      } }, { key: "_isMessageNameValid", value: function value(e) {
        if (!this.allowedEvents.indexOf(e) < 0) throw new Error("unregistered message name: " + e);
      } }]), e;
  }(),
      LOADER_EVENTS = { LADER_START: "LOADER_START", LOADER_DATALOADED: "LOADER_DATALOADED", LOADER_COMPLETE: "LOADER_COMPLETE", LOADER_ERROR: "LOADER_ERROR" },
      DEMUX_EVENTS = { DEMUX_START: "DEMUX_START", DEMUX_COMPLETE: "DEMUX_COMPLETE", DEMUX_ERROR: "DEMUX_ERROR", METADATA_PARSED: "METADATA_PARSED", VIDEO_METADATA_CHANGE: "VIDEO_METADATA_CHANGE", AUDIO_METADATA_CHANGE: "AUDIO_METADATA_CHANGE", MEDIA_INFO: "MEDIA_INFO" },
      REMUX_EVENTS = { REMUX_METADATA: "REMUX_METADATA", REMUX_MEDIA: "REMUX_MEDIA", MEDIA_SEGMENT: "MEDIA_SEGMENT", REMUX_ERROR: "REMUX_ERROR", INIT_SEGMENT: "INIT_SEGMENT", DETECT_CHANGE_STREAM: "DETECT_CHANGE_STREAM", DETECT_CHANGE_STREAM_DISCONTINUE: "DETECT_CHANGE_STREAM_DISCONTINUE", RANDOM_ACCESS_POINT: "RANDOM_ACCESS_POINT" },
      MSE_EVENTS = { SOURCE_UPDATE_END: "SOURCE_UPDATE_END" },
      HLS_EVENTS = { RETRY_TIME_EXCEEDED: "RETRY_TIME_EXCEEDED" },
      CRYTO_EVENTS = { START_DECRYPT: "START_DECRYPT", DECRYPTED: "DECRYPTED" },
      ALLEVENTS = Object.assign({}, LOADER_EVENTS, DEMUX_EVENTS, REMUX_EVENTS, MSE_EVENTS, HLS_EVENTS),
      FlvAllowedEvents = [],
      HlsAllowedEvents = [];for (var key in ALLEVENTS) {
    ALLEVENTS.hasOwnProperty(key) && FlvAllowedEvents.push(ALLEVENTS[key]);
  }for (var _key in ALLEVENTS) {
    ALLEVENTS.hasOwnProperty(_key) && HlsAllowedEvents.push(ALLEVENTS[_key]);
  }var _EVENTS = { ALLEVENTS: ALLEVENTS, HLS_EVENTS: HLS_EVENTS, REMUX_EVENTS: REMUX_EVENTS, DEMUX_EVENTS: DEMUX_EVENTS, MSE_EVENTS: MSE_EVENTS, LOADER_EVENTS: LOADER_EVENTS, FlvAllowedEvents: FlvAllowedEvents, HlsAllowedEvents: HlsAllowedEvents, CRYTO_EVENTS: CRYTO_EVENTS },
      le = function () {
    var e = new ArrayBuffer(2);return new DataView(e).setInt16(0, 256, !0), 256 === new Int16Array(e)[0];
  }(),
      sniffer = { get device() {
      var e = sniffer.os;return e.isPc ? "pc" : e.isTablet ? "tablet" : "mobile";
    }, get browser() {
      var e = navigator.userAgent.toLowerCase(),
          t = { ie: /rv:([\d.]+)\) like gecko/, firfox: /firefox\/([\d.]+)/, chrome: /chrome\/([\d.]+)/, opera: /opera.([\d.]+)/, safari: /version\/([\d.]+).*safari/ };return [].concat(Object.keys(t).filter(function (i) {
        return t[i].test(e);
      }))[0];
    }, get os() {
      var e = navigator.userAgent,
          t = /(?:Windows Phone)/.test(e),
          i = /(?:SymbianOS)/.test(e) || t,
          r = /(?:Android)/.test(e),
          n = /(?:Firefox)/.test(e),
          a = /(?:iPad|PlayBook)/.test(e) || r && !/(?:Mobile)/.test(e) || n && /(?:Tablet)/.test(e),
          s = /(?:iPhone)/.test(e) && !a;return { isTablet: a, isPhone: s, isAndroid: r, isPc: !s && !r && !i, isSymbian: i, isWindowsPhone: t, isFireFox: n };
    }, get isLe() {
      return le;
    } },
      le$1 = function () {
    var e = new ArrayBuffer(2);return new DataView(e).setInt16(0, 256, !0), 256 === new Int16Array(e)[0];
  }(),
      UTF8 = function () {
    function e() {
      classCallCheck(this, e);
    }return createClass(e, null, [{ key: "decode", value: function value(t) {
        for (var i = [], r = t, n = 0, a = t.length; n < a;) {
          if (r[n] < 128) i.push(String.fromCharCode(r[n])), ++n;else {
            if (r[n] < 192) ;else if (r[n] < 224) {
              if (e._checkContinuation(r, n, 1)) {
                var s = (31 & r[n]) << 6 | 63 & r[n + 1];if (s >= 128) {
                  i.push(String.fromCharCode(65535 & s)), n += 2;continue;
                }
              }
            } else if (r[n] < 240) {
              if (e._checkContinuation(r, n, 2)) {
                var o = (15 & r[n]) << 12 | (63 & r[n + 1]) << 6 | 63 & r[n + 2];if (o >= 2048 && 55296 != (63488 & o)) {
                  i.push(String.fromCharCode(65535 & o)), n += 3;continue;
                }
              }
            } else if (r[n] < 248 && e._checkContinuation(r, n, 3)) {
              var l = (7 & r[n]) << 18 | (63 & r[n + 1]) << 12 | (63 & r[n + 2]) << 6 | 63 & r[n + 3];if (l > 65536 && l < 1114112) {
                l -= 65536, i.push(String.fromCharCode(l >>> 10 | 55296)), i.push(String.fromCharCode(1023 & l | 56320)), n += 4;continue;
              }
            }i.push(String.fromCharCode(65533)), ++n;
          }
        }return i.join("");
      } }, { key: "_checkContinuation", value: function value(e, t, i) {
        var r = e;if (t + i < r.length) {
          for (; i--;) {
            if (128 != (192 & r[++t])) return !1;
          }return !0;
        }return !1;
      } }]), e;
  }(),
      MediaSample = function () {
    function e(t) {
      var i = this;classCallCheck(this, e);var r = e.getDefaultInf();if (!t || "[object Object]" !== Object.prototype.toString.call(t)) return r;var n = Object.assign({}, r, t);Object.entries(n).forEach(function (e) {
        var t = slicedToArray(e, 2),
            r = t[0],
            n = t[1];i[r] = n;
      });
    }return createClass(e, null, [{ key: "getDefaultInf", value: function value() {
        return { dts: null, pts: null, duration: null, position: null, isRAP: !1, originDts: null };
      } }]), e;
  }(),
      MediaSegment = function () {
    function e() {
      classCallCheck(this, e), this.startDts = -1, this.endDts = -1, this.startPts = -1, this.endPts = -1, this.originStartDts = -1, this.originEndDts = -1, this.randomAccessPoints = [], this.firstSample = null, this.lastSample = null;
    }return createClass(e, [{ key: "addRAP", value: function value(e) {
        e.isRAP = !0, this.randomAccessPoints.push(e);
      } }]), e;
  }(),
      MediaSegmentList = function () {
    function e(t) {
      classCallCheck(this, e), this._type = t, this._list = [], this._lastAppendLocation = -1;
    }return createClass(e, [{ key: "isEmpty", value: function value() {
        return 0 === this._list.length;
      } }, { key: "clear", value: function value() {
        this._list = [], this._lastAppendLocation = -1;
      } }, { key: "_searchNearestSegmentBefore", value: function value(e) {
        var t = this._list;if (0 === t.length) return -2;var i = t.length - 1,
            r = 0,
            n = 0,
            a = i,
            s = 0;if (e < t[0].originDts) return s = -1;for (; n <= a;) {
          if ((r = n + Math.floor((a - n) / 2)) === i || e > t[r].lastSample.originDts && e < t[r + 1].originDts) {
            s = r;break;
          }t[r].originDts < e ? n = r + 1 : a = r - 1;
        }return s;
      } }, { key: "_searchNearestSegmentAfter", value: function value(e) {
        return this._searchNearestSegmentBefore(e) + 1;
      } }, { key: "append", value: function value(e) {
        var t = this._list,
            i = this._lastAppendLocation,
            r = 0;-1 !== i && i < t.length && e.originStartDts >= t[i].lastSample.originDts && (i === t.length - 1 || i < t.length - 1 && e.originStartDts < t[i + 1].originStartDts) ? r = i + 1 : t.length > 0 && (r = this._searchNearestSegmentBefore(e.originStartDts) + 1), this._lastAppendLocation = r, this._list.splice(r, 0, e);
      } }, { key: "getLastSegmentBefore", value: function value(e) {
        var t = this._searchNearestSegmentBefore(e);return t >= 0 ? this._list[t] : null;
      } }, { key: "getLastSampleBefore", value: function value(e) {
        var t = this.getLastSegmentBefore(e);return null !== t ? t.lastSample : null;
      } }, { key: "getLastRAPBefore", value: function value(e) {
        for (var t = this._searchNearestSegmentBefore(e), i = this._list[t].randomAccessPoints; 0 === i.length && t > 0;) {
          t--, i = this._list[t].randomAccessPoints;
        }return i.length > 0 ? i[i.length - 1] : null;
      } }, { key: "type", get: function get() {
        return this._type;
      } }, { key: "length", get: function get() {
        return this._list.length;
      } }]), e;
  }(),
      AudioTrackMeta = function () {
    function e(t) {
      classCallCheck(this, e);var i = { sampleRate: 48e3, channelCount: 2, codec: "mp4a.40.2", config: [41, 401, 136, 0], duration: 0, id: 2, refSampleDuration: 21, sampleRateIndex: 3, timescale: 1e3, type: "audio" };return t ? Object.assign({}, i, t) : i;
    }return createClass(e, [{ key: "destroy", value: function value() {
        this.init = null;
      } }]), e;
  }(),
      VideoTrackMeta = function () {
    function e(t) {
      classCallCheck(this, e);var i = { avcc: null, sps: new Uint8Array(0), pps: new Uint8Array(0), chromaFormat: 420, codec: "avc1.640020", codecHeight: 720, codecWidth: 1280, duration: 0, frameRate: { fixed: !0, fps: 25, fps_num: 25e3, fps_den: 1e3 }, id: 1, level: "3.2", presentHeight: 720, presentWidth: 1280, profile: "High", refSampleDuration: 40, parRatio: { height: 1, width: 1 }, timescale: 1e3, type: "video" };return t ? Object.assign({}, i, t) : i;
    }return createClass(e, [{ key: "destroy", value: function value() {
        this.init = null, this.sps = null, this.pps = null;
      } }]), e;
  }(),
      AudioTrackSample = function () {
    function e(t) {
      classCallCheck(this, e);var i = e.getDefault();return t ? Object.assign({}, i, t) : i;
    }return createClass(e, null, [{ key: "getDefault", value: function value() {
        return { dts: null, pts: null, data: new Uint8Array() };
      } }]), e;
  }(),
      VideoTrackSample = function () {
    function e(t) {
      classCallCheck(this, e);var i = e.getDefault();return t ? Object.assign({}, i, t) : i;
    }return createClass(e, null, [{ key: "getDefault", value: function value() {
        return { dts: null, pts: null, isKeyframe: !1, originDts: null, data: new Uint8Array() };
      } }]), e;
  }(),
      MSE = function () {
    function e(t, i) {
      classCallCheck(this, e), i && (this._context = i, this.emit = i._emitter.emit.bind(i._emitter)), this.configs = Object.assign({}, t), this.container = this.configs.container, this.mediaSource = null, this.sourceBuffers = {}, this.preloadTime = this.configs.preloadTime || 1, this.onSourceOpen = this.onSourceOpen.bind(this), this.onTimeUpdate = this.onTimeUpdate.bind(this), this.onUpdateEnd = this.onUpdateEnd.bind(this), this.onWaiting = this.onWaiting.bind(this);
    }return createClass(e, [{ key: "init", value: function value() {
        this.mediaSource = new self.MediaSource(), this.mediaSource.addEventListener("sourceopen", this.onSourceOpen), this.container.src = URL.createObjectURL(this.mediaSource), this.url = this.container.src, this.container.addEventListener("timeupdate", this.onTimeUpdate), this.container.addEventListener("waiting", this.onWaiting);
      } }, { key: "resetContext", value: function value(e) {
        this._context = e;
      } }, { key: "onTimeUpdate", value: function value() {
        this.emit("TIME_UPDATE", this.container);
      } }, { key: "onWaiting", value: function value() {
        this.emit("WAITING", this.container);
      } }, { key: "onSourceOpen", value: function value() {
        this.addSourceBuffers();
      } }, { key: "onUpdateEnd", value: function value() {
        this.emit("SOURCE_UPDATE_END"), this.doAppend();
      } }, { key: "addSourceBuffers", value: function value() {
        if ("open" === this.mediaSource.readyState) {
          var e = this._context.getInstance("PRE_SOURCE_BUFFER"),
              t = this._context.getInstance("TRACKS"),
              i = void 0;e = e.sources;for (var r = !1, n = 0, a = Object.keys(e).length; n < a; n++) {
            var s = Object.keys(e)[n];if ("audio" === s ? i = t.audioTrack : "video" === s && (i = t.videoTrack), i) {
              var o = "audio" === s ? 21 : 40;i.meta && i.meta.refSampleDuration && (o = i.meta.refSampleDuration), e[s].data.length >= this.preloadTime / o && (r = !0);
            }
          }if (r) {
            if (Object.keys(this.sourceBuffers).length > 0) return;for (var l = 0, u = Object.keys(e).length; l < u; l++) {
              var h = Object.keys(e)[l],
                  d = e[h],
                  f = "video" === h ? "video/mp4;codecs=" + d.mimetype : "audio/mp4;codecs=" + d.mimetype,
                  c = this.mediaSource.addSourceBuffer(f);this.sourceBuffers[h] = c, c.addEventListener("updateend", this.onUpdateEnd), this.doAppend();
            }
          }
        }
      } }, { key: "doAppend", value: function value() {
        var e = this._context.getInstance("PRE_SOURCE_BUFFER");if (e) for (var t = 0; t < Object.keys(this.sourceBuffers).length; t++) {
          var i = Object.keys(this.sourceBuffers)[t],
              r = this.sourceBuffers[i],
              n = e.sources[i];if (n && !n.inited) try {
            r.appendBuffer(n.init.buffer.buffer), n.inited = !0;
          } catch (e) {} else if (n) {
            var a = n.data.shift();if (a) try {
              r.appendBuffer(a.buffer.buffer);
            } catch (e) {
              n.data.unshift(a);
            }
          }
        }
      } }, { key: "endOfStream", value: function value() {
        var e = this.mediaSource,
            t = e.readyState,
            i = e.activeSourceBuffers;if ("open" === t && 0 === i.length) try {
          this.mediaSource.endOfStream();
        } catch (e) {}
      } }, { key: "remove", value: function value(e) {
        for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, i = 0; i < Object.keys(this.sourceBuffers).length; i++) {
          var r = this.sourceBuffers[Object.keys(this.sourceBuffers)[i]];r.updating || r.remove(t, e);
        }
      } }, { key: "removeBuffers", value: function value() {
        for (var t = this, i = [], r = 0; r < Object.keys(this.sourceBuffers).length; r++) {
          !function (r) {
            var n = t.sourceBuffers[Object.keys(t.sourceBuffers)[r]];n.removeEventListener("updateend", t.onUpdateEnd);var a = void 0;a = n.updating ? new Promise(function (t) {
              var i = function i() {
                var r = 3,
                    a = function i() {
                  n.updating ? r > 0 ? (setTimeout(i, 200), r--) : t() : (e.clearBuffer(n), n.addEventListener("updateend", function () {
                    t();
                  }));
                };setTimeout(a, 200), n.removeEventListener("updateend", i);
              };n.addEventListener("updateend", i);
            }) : new Promise(function (t) {
              e.clearBuffer(n), n.addEventListener("updateend", function () {
                t();
              });
            }), i.push(a);
          }(r);
        }return Promise.all(i);
      } }, { key: "destroy", value: function value() {
        var e = this;return this.removeBuffers().then(function () {
          for (var t = 0; t < Object.keys(e.sourceBuffers).length; t++) {
            var i = e.sourceBuffers[Object.keys(e.sourceBuffers)[t]];e.mediaSource.removeSourceBuffer(i), delete e.sourceBuffers[Object.keys(e.sourceBuffers)[t]];
          }e.container.removeEventListener("timeupdate", e.onTimeUpdate), e.container.removeEventListener("waiting", e.onWaiting), e.mediaSource.removeEventListener("sourceopen", e.onSourceOpen), e.endOfStream(), window.URL.revokeObjectURL(e.url), e.url = null, e.configs = {}, e.container = null, e.mediaSource = null, e.sourceBuffers = {}, e.preloadTime = 1;
        });
      } }], [{ key: "clearBuffer", value: function value(e) {
        for (var t = e.buffered, i = .1, r = 0, n = t.length; r < n; r++) {
          i = t.end(r);
        }try {
          e.remove(0, i);
        } catch (e) {}
      } }]), e;
  }(),
      Stream = function () {
    function e(t) {
      if (classCallCheck(this, e), !(t instanceof ArrayBuffer)) throw new Error("data is invalid");this.buffer = t, this.dataview = new DataView(t), this.dataview.position = 0;
    }return createClass(e, [{ key: "back", value: function value(e) {
        this.position -= e;
      } }, { key: "skip", value: function value(t) {
        for (var i = Math.floor(t / 4), r = t % 4, n = 0; n < i; n++) {
          e.readByte(this.dataview, 4);
        }r > 0 && e.readByte(this.dataview, r);
      } }, { key: "readUint8", value: function value() {
        return e.readByte(this.dataview, 1);
      } }, { key: "readUint16", value: function value() {
        return e.readByte(this.dataview, 2);
      } }, { key: "readUint24", value: function value() {
        return e.readByte(this.dataview, 3);
      } }, { key: "readUint32", value: function value() {
        return e.readByte(this.dataview, 4);
      } }, { key: "readUint64", value: function value() {
        return e.readByte(this.dataview, 8);
      } }, { key: "readInt8", value: function value() {
        return e.readByte(this.dataview, 1, !0);
      } }, { key: "readInt16", value: function value() {
        return e.readByte(this.dataview, 2, !0);
      } }, { key: "readInt32", value: function value() {
        return e.readByte(this.dataview, 4, !0);
      } }, { key: "writeUint32", value: function value(e) {
        return new Uint8Array([e >>> 24 & 255, e >>> 16 & 255, e >>> 8 & 255, 255 & e]);
      } }, { key: "length", get: function get() {
        return this.buffer.byteLength;
      } }, { key: "position", set: function set(e) {
        this.dataview.position = e;
      }, get: function get() {
        return this.dataview.position;
      } }], [{ key: "readByte", value: function value(e, t, i) {
        var r = void 0;switch (t) {case 1:
            r = i ? e.getInt8(e.position) : e.getUint8(e.position);break;case 2:
            r = i ? e.getInt16(e.position) : e.getUint16(e.position);break;case 3:
            if (i) throw new Error("not supported for readByte 3");r = e.getUint8(e.position) << 16, r |= e.getUint8(e.position + 1) << 8, r |= e.getUint8(e.position + 2);break;case 4:
            r = i ? e.getInt32(e.position) : e.getUint32(e.position);break;case 8:
            if (i) throw new Error("not supported for readBody 8");r = e.getUint32(e.position) << 32, r |= e.getUint32(e.position + 4);break;default:
            r = "";}return e.position += t, r;
      } }]), e;
  }(),
      concat = createCommonjsModule(function (e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.default = function (e) {
      for (var t = 0, i = arguments.length, r = Array(i > 1 ? i - 1 : 0), n = 1; n < i; n++) {
        r[n - 1] = arguments[n];
      }var a = !0,
          s = !1,
          o = void 0;try {
        for (var l, u = r[Symbol.iterator](); !(a = (l = u.next()).done); a = !0) {
          t += l.value.length;
        }
      } catch (e) {
        s = !0, o = e;
      } finally {
        try {
          !a && u.return && u.return();
        } finally {
          if (s) throw o;
        }
      }var h = new e(t),
          d = 0,
          f = !0,
          c = !1,
          p = void 0;try {
        for (var v, E = r[Symbol.iterator](); !(f = (v = E.next()).done); f = !0) {
          var y = v.value;h.set(y, d), d += y.length;
        }
      } catch (e) {
        c = !0, p = e;
      } finally {
        try {
          !f && E.return && E.return();
        } finally {
          if (c) throw p;
        }
      }return h;
    };
  });unwrapExports(concat);var lib = createCommonjsModule(function (e) {
    var t = function (e) {
      return e && e.__esModule ? e : { default: e };
    }(concat);e.exports = t.default;
  }),
      Concat = unwrapExports(lib),
      Buffer = function () {
    function e(t) {
      classCallCheck(this, e), this.buffer = t || new Uint8Array(0);
    }return createClass(e, [{ key: "write", value: function value() {
        for (var e = this, t = arguments.length, i = Array(t), r = 0; r < t; r++) {
          i[r] = arguments[r];
        }i.forEach(function (t) {
          e.buffer = Concat(Uint8Array, e.buffer, t);
        });
      } }], [{ key: "writeUint32", value: function value(e) {
        return new Uint8Array([e >> 24, e >> 16 & 255, e >> 8 & 255, 255 & e]);
      } }, { key: "readAsInt", value: function value(e) {
        function t(e) {
          return e.toString(16).padStart(2, "0");
        }var i = "";return e.forEach(function (e) {
          i += t(e);
        }), parseInt(i, 16);
      } }]), e;
  }(),
      CRYTO_EVENTS$1 = _EVENTS.CRYTO_EVENTS,
      Crypto = function () {
    function e(t) {
      classCallCheck(this, e), this.inputBuffer = t.inputbuffer, this.outputBuffer = t.outputbuffer, this.key = t.key, this.iv = t.iv, this.method = t.method, this.crypto = window.crypto || window.msCrypto;
    }return createClass(e, [{ key: "init", value: function value() {
        this.on(CRYTO_EVENTS$1.START_DECRYPT, this.decript.bind(this));
      } }, { key: "decript", value: function value() {
        var e = this;this.aeskey ? this.decriptData() : this.crypto.subtle.importKey("raw", this.key.buffer, { name: "AES-CBC" }, !1, ["encrypt", "decrypt"]).then(function (t) {
          e.aeskey = t, e.decriptData();
        });
      } }, { key: "decriptData", value: function value() {
        var e = this,
            t = this._context.getInstance(this.inputBuffer),
            i = this._context.getInstance(this.outputBuffer),
            r = t.shift();r && this.crypto.subtle.decrypt({ name: "AES-CBC", iv: this.iv.buffer }, this.aeskey, r).then(function (t) {
          i.push(new Uint8Array(t)), e.emit(CRYTO_EVENTS$1.DECRYPTED), e.decriptData(r);
        });
      } }]), e;
  }(),
      Context$1 = Context,
      EVENTS = _EVENTS,
      sniffer$1 = sniffer,
      isLe = le$1,
      UTF8$1 = UTF8,
      MediaSegmentList$1 = MediaSegmentList,
      Mse = MSE,
      Buffer$1 = Buffer,
      Fmp4 = function () {
    function e() {
      classCallCheck(this, e);
    }return createClass(e, null, [{ key: "size", value: function value(e) {
        return Buffer$1.writeUint32(e);
      } }, { key: "initBox", value: function value(t, i) {
        for (var r = new Buffer$1(), n = arguments.length, a = Array(n > 2 ? n - 2 : 0), s = 2; s < n; s++) {
          a[s - 2] = arguments[s];
        }return r.write.apply(r, [e.size(t), e.type(i)].concat(a)), r.buffer;
      } }, { key: "extension", value: function value(e, t) {
        return new Uint8Array([e, t >> 16 & 255, t >> 8 & 255, 255 & t]);
      } }, { key: "ftyp", value: function value() {
        return e.initBox(24, "ftyp", new Uint8Array([105, 115, 111, 109, 0, 0, 0, 1, 105, 115, 111, 109, 97, 118, 99, 49]));
      } }, { key: "moov", value: function value(t) {
        var i = t.type,
            r = t.meta,
            n = 8,
            a = e.mvhd(r.duration, r.timescale),
            s = void 0;s = "video" === i ? e.videoTrak(r) : e.audioTrak(r);var o = e.mvex(r.duration, r.timescale || 1e3, r.id);return [a, s, o].forEach(function (e) {
          n += e.byteLength;
        }), e.initBox(n, "moov", a, s, o);
      } }, { key: "mvhd", value: function value(t) {
        var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3,
            r = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, i >>> 24 & 255, i >>> 16 & 255, i >>> 8 & 255, 255 & i, t >>> 24 & 255, t >>> 16 & 255, t >>> 8 & 255, 255 & t, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255]);return e.initBox(8 + r.length, "mvhd", new Uint8Array(r));
      } }, { key: "videoTrak", value: function value(t) {
        var i = 8,
            r = e.tkhd({ id: 1, duration: t.duration, timescale: t.timescale || 1e3, width: t.presentWidth, height: t.presentHeight, type: "video" }),
            n = e.mdia({ type: "video", timescale: t.timescale || 1e3, duration: t.duration, avcc: t.avcc, parRatio: t.parRatio, width: t.presentWidth, height: t.presentHeight });return [r, n].forEach(function (e) {
          i += e.byteLength;
        }), e.initBox(i, "trak", r, n);
      } }, { key: "audioTrak", value: function value(t) {
        var i = 8,
            r = e.tkhd({ id: 2, duration: t.duration, timescale: t.timescale || 1e3, width: 0, height: 0, type: "audio" }),
            n = e.mdia({ type: "audio", timescale: t.timescale || 1e3, duration: t.duration, channelCount: t.channelCount, samplerate: t.sampleRate, config: t.config });return [r, n].forEach(function (e) {
          i += e.byteLength;
        }), e.initBox(i, "trak", r, n);
      } }, { key: "tkhd", value: function value(t) {
        var i = t.id,
            r = t.duration,
            n = t.width,
            a = t.height,
            s = new Uint8Array([0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, i >>> 24 & 255, i >>> 16 & 255, i >>> 8 & 255, 255 & i, 0, 0, 0, 0, r >>> 24 & 255, r >>> 16 & 255, r >>> 8 & 255, 255 & r, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, n >>> 8 & 255, 255 & n, 0, 0, a >>> 8 & 255, 255 & a, 0, 0]);return e.initBox(8 + s.byteLength, "tkhd", s);
      } }, { key: "edts", value: function value(t) {
        var i = new Buffer$1(),
            r = t.duration,
            n = t.mediaTime;return i.write(e.size(36), e.type("edts")), i.write(e.size(28), e.type("elst")), i.write(new Uint8Array([0, 0, 0, 1, r >> 24 & 255, r >> 16 & 255, r >> 8 & 255, 255 & r, n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, 255 & n, 0, 0, 0, 1])), i.buffer;
      } }, { key: "mdia", value: function value(t) {
        var i = 8,
            r = e.mdhd(t.timescale, t.duration),
            n = e.hdlr(t.type),
            a = e.minf(t);return [r, n, a].forEach(function (e) {
          i += e.byteLength;
        }), e.initBox(i, "mdia", r, n, a);
      } }, { key: "mdhd", value: function value() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1e3,
            i = arguments[1],
            r = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, t >>> 24 & 255, t >>> 16 & 255, t >>> 8 & 255, 255 & t, i >>> 24 & 255, i >>> 16 & 255, i >>> 8 & 255, 255 & i, 85, 196, 0, 0]);return e.initBox(12 + r.byteLength, "mdhd", e.extension(0, 0), r);
      } }, { key: "hdlr", value: function value(t) {
        var i = [0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 105, 100, 101, 111, 72, 97, 110, 100, 108, 101, 114, 0];return "audio" === t && (i.splice.apply(i, [8, 4].concat([115, 111, 117, 110])), i.splice.apply(i, [24, 13].concat([83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0]))), e.initBox(8 + i.length, "hdlr", new Uint8Array(i));
      } }, { key: "minf", value: function value(t) {
        var i = 8,
            r = "video" === t.type ? e.vmhd() : e.smhd(),
            n = e.dinf(),
            a = e.stbl(t);return [r, n, a].forEach(function (e) {
          i += e.byteLength;
        }), e.initBox(i, "minf", r, n, a);
      } }, { key: "vmhd", value: function value() {
        return e.initBox(20, "vmhd", new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]));
      } }, { key: "smhd", value: function value() {
        return e.initBox(16, "smhd", new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]));
      } }, { key: "dinf", value: function value() {
        var t = new Buffer$1(),
            i = [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1];return t.write(e.size(36), e.type("dinf"), e.size(28), e.type("dref"), new Uint8Array(i)), t.buffer;
      } }, { key: "stbl", value: function value(t) {
        var i = 8,
            r = e.stsd(t),
            n = e.stts(),
            a = e.stsc(),
            s = e.stsz(),
            o = e.stco();return [r, n, a, s, o].forEach(function (e) {
          i += e.byteLength;
        }), e.initBox(i, "stbl", r, n, a, s, o);
      } }, { key: "stsd", value: function value(t) {
        var i = void 0;return i = "audio" === t.type ? e.mp4a(t) : e.avc1(t), e.initBox(16 + i.byteLength, "stsd", e.extension(0, 0), new Uint8Array([0, 0, 0, 1]), i);
      } }, { key: "mp4a", value: function value(t) {
        var i = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, t.channelCount, 0, 16, 0, 0, 0, 0, t.samplerate >> 8 & 255, 255 & t.samplerate, 0, 0]),
            r = e.esds(t.config);return e.initBox(8 + i.byteLength + r.byteLength, "mp4a", i, r);
      } }, { key: "esds", value: function value() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [43, 146, 8, 0],
            i = t.length,
            r = new Buffer$1(),
            n = new Uint8Array([0, 0, 0, 0, 3, 23 + i, 0, 1, 0, 4, 15 + i, 64, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5].concat([i]).concat(t).concat([6, 1, 2]));return r.write(e.size(8 + n.byteLength), e.type("esds"), n), r.buffer;
      } }, { key: "avc1", value: function value(t) {
        var i = new Buffer$1(),
            r = t.width,
            n = t.height,
            a = t.parRatio.height,
            s = t.parRatio.width,
            o = t.avcc,
            l = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, r >> 8 & 255, 255 & r, n >> 8 & 255, 255 & n, 0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 18, 100, 97, 105, 108, 121, 109, 111, 116, 105, 111, 110, 47, 104, 108, 115, 46, 106, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 17, 17]),
            u = new Uint8Array([0, 28, 156, 128, 0, 45, 198, 192, 0, 45, 198, 192]),
            h = new Uint8Array([a >> 24, a >> 16 & 255, a >> 8 & 255, 255 & a, s >> 24, s >> 16 & 255, s >> 8 & 255, 255 & s]);return i.write(e.size(40 + l.byteLength + o.byteLength + u.byteLength), e.type("avc1"), l, e.size(8 + o.byteLength), e.type("avcC"), o, e.size(20), e.type("btrt"), u, e.size(16), e.type("pasp"), h), i.buffer;
      } }, { key: "stts", value: function value() {
        var t = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]);return e.initBox(16, "stts", t);
      } }, { key: "stsc", value: function value() {
        var t = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]);return e.initBox(16, "stsc", t);
      } }, { key: "stco", value: function value() {
        var t = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]);return e.initBox(16, "stco", t);
      } }, { key: "stsz", value: function value() {
        var t = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);return e.initBox(20, "stsz", t);
      } }, { key: "mvex", value: function value(t) {
        var i = arguments[2],
            r = new Buffer$1(),
            n = Buffer$1.writeUint32(t);return r.write(e.size(56), e.type("mvex"), e.size(16), e.type("mehd"), e.extension(0, 0), n, e.trex(i)), r.buffer;
      } }, { key: "trex", value: function value(t) {
        var i = new Uint8Array([0, 0, 0, 0, t >> 24, t >> 16 & 255, t >> 8 & 255, 255 & t, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1]);return e.initBox(8 + i.byteLength, "trex", i);
      } }, { key: "moof", value: function value(t) {
        var i = 8,
            r = e.mfhd(),
            n = e.traf(t);return [r, n].forEach(function (e) {
          i += e.byteLength;
        }), e.initBox(i, "moof", r, n);
      } }, { key: "mfhd", value: function value() {
        var t = Buffer$1.writeUint32(e.sequence);return e.sequence += 1, e.initBox(16, "mfhd", e.extension(0, 0), t);
      } }, { key: "traf", value: function value(t) {
        var i = 8,
            r = e.tfhd(t.id),
            n = e.tfdt(t.time),
            a = e.sdtp(t),
            s = e.trun(t, a.byteLength);return [r, n, s, a].forEach(function (e) {
          i += e.byteLength;
        }), e.initBox(i, "traf", r, n, s, a);
      } }, { key: "tfhd", value: function value(t) {
        var i = Buffer$1.writeUint32(t);return e.initBox(16, "tfhd", e.extension(0, 0), i);
      } }, { key: "tfdt", value: function value(t) {
        return e.initBox(16, "tfdt", e.extension(0, 0), Buffer$1.writeUint32(t));
      } }, { key: "trun", value: function value(t, i) {
        var r = new Buffer$1(),
            n = Buffer$1.writeUint32(t.samples.length),
            a = Buffer$1.writeUint32(92 + 16 * t.samples.length + i);return r.write(e.size(20 + 16 * t.samples.length), e.type("trun"), new Uint8Array([0, 0, 15, 1]), n, a), t.samples.forEach(function (e) {
          var t = e.flags;r.write(new Uint8Array([e.duration >>> 24 & 255, e.duration >>> 16 & 255, e.duration >>> 8 & 255, 255 & e.duration, e.size >>> 24 & 255, e.size >>> 16 & 255, e.size >>> 8 & 255, 255 & e.size, t.isLeading << 2 | t.dependsOn, t.isDependedOn << 6 | t.hasRedundancy << 4 | t.isNonSync, 0, 0, e.cts >>> 24 & 255, e.cts >>> 16 & 255, e.cts >>> 8 & 255, 255 & e.cts]));
        }), r.buffer;
      } }, { key: "sdtp", value: function value(t) {
        var i = new Buffer$1();return i.write(e.size(12 + t.samples.length), e.type("sdtp"), e.extension(0, 0)), t.samples.forEach(function (e) {
          var t = e.flags,
              r = t.isLeading << 6 | t.dependsOn << 4 | t.isDependedOn << 2 | t.hasRedundancy;i.write(new Uint8Array([r]));
        }), i.buffer;
      } }, { key: "mdat", value: function value(t) {
        var i = new Buffer$1(),
            r = 8;t.samples.forEach(function (e) {
          r += e.size;
        }), i.write(e.size(r), e.type("mdat"));var n = new Uint8Array(r),
            a = 0;return n.set(i.buffer, a), a += 8, t.samples.forEach(function (e) {
          e.buffer.forEach(function (e) {
            n.set(e, a), a += e.byteLength;
          });
        }), n;
      } }]), e;
  }();Fmp4.type = function (e) {
    return new Uint8Array([e.charCodeAt(0), e.charCodeAt(1), e.charCodeAt(2), e.charCodeAt(3)]);
  }, Fmp4.sequence = 1;var REMUX_EVENTS$1 = EVENTS.REMUX_EVENTS,
      Mp4Remuxer = function () {
    function e() {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;classCallCheck(this, e), this._dtsBase = 1e3 * t, this._isDtsBaseInited = !1, this._videoSegmentList = new MediaSegmentList$1("video"), this._audioSegmentList = new MediaSegmentList$1("audio");var i = sniffer$1.browser;this._fillSilenceFrame = "ie" === i, this.isFirstVideo = !0, this.isFirstAudio = !0, this.videoAllDuration = 0, this.audioAllDuration = 0;
    }return createClass(e, [{ key: "init", value: function value() {
        this.on(REMUX_EVENTS$1.REMUX_MEDIA, this.remux.bind(this)), this.on(REMUX_EVENTS$1.REMUX_METADATA, this.onMetaDataReady.bind(this)), this.on(REMUX_EVENTS$1.DETECT_CHANGE_STREAM, this.resetDtsBase.bind(this));
      } }, { key: "remux", value: function value() {
        var e = this._context.getInstance("TRACKS"),
            t = e.audioTrack,
            i = e.videoTrack;!this._isDtsBaseInited && this.calcDtsBase(t, i), this._remuxVideo(i), this._remuxAudio(t);
      } }, { key: "resetDtsBase", value: function value() {
        this._dtsBase = 0, this._dtsBaseInited = !1;
      } }, { key: "seek", value: function value() {
        this._videoSegmentList.clear(), this._audioSegmentList.clear();
      } }, { key: "onMetaDataReady", value: function value(e) {
        var t = void 0;t = "audio" === e ? this._context.getInstance("TRACKS").audioTrack : this._context.getInstance("TRACKS").videoTrack;var i = this._context.getInstance("PRE_SOURCE_BUFFER"),
            r = i.getSource(e);r || (r = i.createSource(e)), r.mimetype = t.meta.codec, r.init = this.remuxInitSegment(e, t.meta), this.emit(REMUX_EVENTS$1.INIT_SEGMENT, e);
      } }, { key: "remuxInitSegment", value: function value(e, t) {
        var i = new Buffer$1(),
            r = Fmp4.ftyp(),
            n = Fmp4.moov({ type: e, meta: t });return i.write(r, n), i;
      } }, { key: "calcDtsBase", value: function value(e, t) {
        if (!e && t.samples.length) return t.samples[0].dts;if (e.samples.length || t.samples.length) {
          var i = 1 / 0,
              r = 1 / 0;e.samples && e.samples.length && (i = e.samples[0].dts), t.samples && t.samples.length && (r = t.samples[0].dts), this._dtsBase = Math.min(i, r) - this._dtsBase, this._isDtsBaseInited = !0;
        }
      } }, { key: "_remuxVideo", value: function value(e) {
        var t = e || {};if (e.samples && e.samples.length) {
          for (var i = t.samples, r = -1, n = null, a = [], s = { samples: [] }, o = 1e4; i.length && o-- > 0;) {
            var l = i.shift(),
                u = l.isKeyframe,
                h = l.options;if (!this.isFirstVideo && h && h.meta) {
              n = this.remuxInitSegment("video", h.meta), h.meta = null, i.unshift(l), h.isContinue || this.resetDtsBase();break;
            }var d = l.dts - this._dtsBase;-1 === r && (r = d);var f = void 0,
                c = void 0;void 0 !== l.pts && (f = (c = l.pts - this._dtsBase) - d), void 0 !== l.cts && (c = l.cts + d, f = l.cts);var p = { buffer: [], size: 0 },
                v = 0;v = l.duration ? l.duration : i.length >= 1 ? i[0].dts - this._dtsBase - d : a.length >= 1 ? a[a.length - 1].duration : this.videoMeta.refSampleDuration, this.videoAllDuration += v, console.log("video dts " + d, "pts " + c, u, "duration " + v), v >= 0 && (s.samples.push(p), p.buffer.push(l.data), p.size += l.data.byteLength, a.push({ dts: d, cts: f, pts: c, data: l.data, size: l.data.byteLength, isKeyframe: u, duration: v, flags: { isLeading: 0, dependsOn: u ? 2 : 1, isDependedOn: u ? 1 : 0, hasRedundancy: 0, isNonSync: u ? 0 : 1 }, originDts: d, type: "video" })), u && this.emit(REMUX_EVENTS$1.RANDOM_ACCESS_POINT, c);
          }var E = new Buffer$1();if (a.length) {
            var y = Fmp4.moof({ id: t.meta.id, time: r, samples: a }),
                m = Fmp4.mdat(s);E.write(y, m), this.writeToSource("video", E);
          }if (n && (this.writeToSource("video", n), i.length)) return t.samples = i, this._remuxVideo(t);this.isFirstVideo = !1, this.emit(REMUX_EVENTS$1.MEDIA_SEGMENT, "video"), t.samples = [], t.length = 0;
        }
      } }, { key: "_remuxAudio", value: function value(e) {
        var t = (e || {}).samples,
            i = -1,
            r = [],
            n = null,
            a = { samples: [] };if (t && t.length) {
          for (var s = 1e4, o = !1; t.length && s-- > 0;) {
            var l = t.shift(),
                u = l.data,
                h = l.options;if (!this.isFirstAudio && h && h.meta) {
              n = this.remuxInitSegment("audio", h.meta), h.meta = null, t.unshift(l), h.isContinue || this.resetDtsBase();break;
            }var d = l.dts - this._dtsBase,
                f = d;o || (i = d, o = !0);var c = 0;c = l.duration ? l.duration : this.audioMeta.refSampleDurationFixed ? this.audioMeta.refSampleDurationFixed : t.length >= 1 ? t[0].dts - this._dtsBase - d : r.length >= 1 ? r[r.length - 1].duration : this.audioMeta.refSampleDuration, console.log("audio dts " + d, "pts " + d, "duration " + c), this.audioAllDuration += c;var p = { dts: d, pts: d, cts: 0, size: u.byteLength, duration: l.duration ? l.duration : c, flags: { isLeading: 0, dependsOn: 2, isDependedOn: 1, hasRedundancy: 0, isNonSync: 0 }, isKeyframe: !0, originDts: f, type: "audio" },
                v = { buffer: [], size: 0 };c >= 0 && (v.buffer.push(u), v.size += u.byteLength, a.samples.push(v), r.push(p));
          }var E = new Buffer$1();if (r.length) {
            var y = Fmp4.moof({ id: e.meta.id, time: i, samples: r }),
                m = Fmp4.mdat(a);E.write(y, m), this.writeToSource("audio", E);
          }if (n && (this.writeToSource("audio", n), t.length)) return e.samples = t, this._remuxAudio(e);this.isFirstAudio = !1, this.emit(REMUX_EVENTS$1.MEDIA_SEGMENT, "audio", E), e.samples = [], e.length = 0;
        }
      } }, { key: "writeToSource", value: function value(e, t) {
        var i = this._context.getInstance("PRE_SOURCE_BUFFER"),
            r = i.getSource(e);r || (r = i.createSource(e)), r.data.push(t);
      } }, { key: "initSilentAudio", value: function value(t, i) {
        var r = e.getSilentFrame(this._audioMeta.channelCount);return { dts: t, pts: t, cts: 0, duration: i, unit: r, size: r.byteLength, originDts: t, type: "video" };
      } }, { key: "destroy", value: function value() {
        this._player = null;
      } }, { key: "videoMeta", get: function get() {
        return this._context.getInstance("TRACKS").videoTrack.meta;
      } }, { key: "audioMeta", get: function get() {
        return this._context.getInstance("TRACKS").audioTrack.meta;
      } }], [{ key: "getSilentFrame", value: function value(e) {
        return 1 === e ? new Uint8Array([0, 200, 0, 128, 35, 128]) : 2 === e ? new Uint8Array([33, 0, 73, 144, 2, 25, 0, 35, 128]) : 3 === e ? new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 142]) : 4 === e ? new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 128, 44, 128, 8, 2, 56]) : 5 === e ? new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 56]) : 6 === e ? new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 0, 178, 0, 32, 8, 224]) : null;
      } }]), e;
  }(),
      LOADER_EVENTS$1 = { LADER_START: "LOADER_START", LOADER_DATALOADED: "LOADER_DATALOADED", LOADER_COMPLETE: "LOADER_COMPLETE", LOADER_ERROR: "LOADER_ERROR" },
      DEMUX_EVENTS$1 = { DEMUX_START: "DEMUX_START", DEMUX_COMPLETE: "DEMUX_COMPLETE", DEMUX_ERROR: "DEMUX_ERROR", METADATA_PARSED: "METADATA_PARSED", VIDEO_METADATA_CHANGE: "VIDEO_METADATA_CHANGE", AUDIO_METADATA_CHANGE: "AUDIO_METADATA_CHANGE", MEDIA_INFO: "MEDIA_INFO" },
      REMUX_EVENTS$2 = { REMUX_METADATA: "REMUX_METADATA", REMUX_MEDIA: "REMUX_MEDIA", MEDIA_SEGMENT: "MEDIA_SEGMENT", REMUX_ERROR: "REMUX_ERROR", INIT_SEGMENT: "INIT_SEGMENT", DETECT_CHANGE_STREAM: "DETECT_CHANGE_STREAM", DETECT_CHANGE_STREAM_DISCONTINUE: "DETECT_CHANGE_STREAM_DISCONTINUE", RANDOM_ACCESS_POINT: "RANDOM_ACCESS_POINT" },
      MSE_EVENTS$1 = { SOURCE_UPDATE_END: "SOURCE_UPDATE_END" },
      HLS_EVENTS$1 = { RETRY_TIME_EXCEEDED: "RETRY_TIME_EXCEEDED" },
      CRYTO_EVENTS$2 = { START_DECRYPT: "START_DECRYPT", DECRYPTED: "DECRYPTED" },
      ALLEVENTS$1 = Object.assign({}, LOADER_EVENTS$1, DEMUX_EVENTS$1, REMUX_EVENTS$2, MSE_EVENTS$1, HLS_EVENTS$1),
      FlvAllowedEvents$1 = [],
      HlsAllowedEvents$1 = [];for (var key$1 in ALLEVENTS$1) {
    ALLEVENTS$1.hasOwnProperty(key$1) && FlvAllowedEvents$1.push(ALLEVENTS$1[key$1]);
  }for (var _key$1 in ALLEVENTS$1) {
    ALLEVENTS$1.hasOwnProperty(_key$1) && HlsAllowedEvents$1.push(ALLEVENTS$1[_key$1]);
  }var EVENTS$1 = { ALLEVENTS: ALLEVENTS$1, HLS_EVENTS: HLS_EVENTS$1, REMUX_EVENTS: REMUX_EVENTS$2, DEMUX_EVENTS: DEMUX_EVENTS$1, MSE_EVENTS: MSE_EVENTS$1, LOADER_EVENTS: LOADER_EVENTS$1, FlvAllowedEvents: FlvAllowedEvents$1, HlsAllowedEvents: HlsAllowedEvents$1, CRYTO_EVENTS: CRYTO_EVENTS$2 },
      AudioTrackMeta$1 = function () {
    function e(t) {
      classCallCheck(this, e);var i = { sampleRate: 48e3, channelCount: 2, codec: "mp4a.40.2", config: [41, 401, 136, 0], duration: 0, id: 2, refSampleDuration: 21, sampleRateIndex: 3, timescale: 1e3, type: "audio" };return t ? Object.assign({}, i, t) : i;
    }return createClass(e, [{ key: "destroy", value: function value() {
        this.init = null;
      } }]), e;
  }(),
      VideoTrackMeta$1 = function () {
    function e(t) {
      classCallCheck(this, e);var i = { avcc: null, sps: new Uint8Array(0), pps: new Uint8Array(0), chromaFormat: 420, codec: "avc1.640020", codecHeight: 720, codecWidth: 1280, duration: 0, frameRate: { fixed: !0, fps: 25, fps_num: 25e3, fps_den: 1e3 }, id: 1, level: "3.2", presentHeight: 720, presentWidth: 1280, profile: "High", refSampleDuration: 40, parRatio: { height: 1, width: 1 }, timescale: 1e3, type: "video" };return t ? Object.assign({}, i, t) : i;
    }return createClass(e, [{ key: "destroy", value: function value() {
        this.init = null, this.sps = null, this.pps = null;
      } }]), e;
  }(),
      Golomb = function () {
    function e(t) {
      classCallCheck(this, e), this.TAG = "Golomb", this._buffer = t, this._bufferIndex = 0, this._totalBytes = t.byteLength, this._totalBits = 8 * t.byteLength, this._currentWord = 0, this._currentWordBitsLeft = 0;
    }return createClass(e, [{ key: "destroy", value: function value() {
        this._buffer = null;
      } }, { key: "_fillCurrentWord", value: function value() {
        var e = this._totalBytes - this._bufferIndex,
            t = Math.min(4, e),
            i = new Uint8Array(4);i.set(this._buffer.subarray(this._bufferIndex, this._bufferIndex + t)), this._currentWord = new DataView(i.buffer).getUint32(0), this._bufferIndex += t, this._currentWordBitsLeft = 8 * t;
      } }, { key: "readBits", value: function value(e) {
        var t = Math.min(this._currentWordBitsLeft, e),
            i = this._currentWord >>> 32 - t;if (e > 32) throw new Error("Cannot read more than 32 bits at a time");return this._currentWordBitsLeft -= t, this._currentWordBitsLeft > 0 ? this._currentWord <<= t : this._totalBytes - this._bufferIndex > 0 && this._fillCurrentWord(), t = e - t, t > 0 && this._currentWordBitsLeft ? i << t | this.readBits(t) : i;
      } }, { key: "readBool", value: function value() {
        return 1 === this.readBits(1);
      } }, { key: "readByte", value: function value() {
        return this.readBits(8);
      } }, { key: "_skipLeadingZero", value: function value() {
        var e = void 0;for (e = 0; e < this._currentWordBitsLeft; e++) {
          if (0 != (this._currentWord & 2147483648 >>> e)) return this._currentWord <<= e, this._currentWordBitsLeft -= e, e;
        }return this._fillCurrentWord(), e + this._skipLeadingZero();
      } }, { key: "readUEG", value: function value() {
        var e = this._skipLeadingZero();return this.readBits(e + 1) - 1;
      } }, { key: "readSEG", value: function value() {
        var e = this.readUEG();return 1 & e ? e + 1 >>> 1 : -1 * (e >>> 1);
      } }]), e;
  }(),
      SPSParser = function () {
    function e() {
      classCallCheck(this, e);
    }return createClass(e, null, [{ key: "_ebsp2rbsp", value: function value(e) {
        for (var t = e, i = t.byteLength, r = new Uint8Array(i), n = 0, a = 0; a < i; a++) {
          a >= 2 && 3 === t[a] && 0 === t[a - 1] && 0 === t[a - 2] || (r[n] = t[a], n++);
        }return new Uint8Array(r.buffer, 0, n);
      } }, { key: "parseSPS", value: function value(t) {
        var i = e._ebsp2rbsp(t),
            r = new Golomb(i);r.readByte();var n = r.readByte();r.readByte();var a = r.readByte();r.readUEG();var s = e.getProfileString(n),
            o = e.getLevelString(a),
            l = 1,
            u = 420,
            h = [0, 420, 422, 444],
            d = 8;if ((100 === n || 110 === n || 122 === n || 244 === n || 44 === n || 83 === n || 86 === n || 118 === n || 128 === n || 138 === n || 144 === n) && (3 === (l = r.readUEG()) && r.readBits(1), l <= 3 && (u = h[l]), d = r.readUEG() + 8, r.readUEG(), r.readBits(1), r.readBool())) for (var f = 3 !== l ? 8 : 12, c = 0; c < f; c++) {
          r.readBool() && (c < 6 ? e._skipScalingList(r, 16) : e._skipScalingList(r, 64));
        }r.readUEG();var p = r.readUEG();if (0 === p) r.readUEG();else if (1 === p) {
          r.readBits(1), r.readSEG(), r.readSEG();for (var v = r.readUEG(), E = 0; E < v; E++) {
            r.readSEG();
          }
        }r.readUEG(), r.readBits(1);var y = r.readUEG(),
            m = r.readUEG(),
            _ = r.readBits(1);0 === _ && r.readBits(1), r.readBits(1);var g = 0,
            S = 0,
            T = 0,
            A = 0;r.readBool() && (g = r.readUEG(), S = r.readUEG(), T = r.readUEG(), A = r.readUEG());var b = 1,
            k = 1,
            R = 0,
            D = !0,
            w = 0,
            L = 0;if (r.readBool()) {
          if (r.readBool()) {
            var C = r.readByte(),
                O = [1, 12, 10, 16, 40, 24, 20, 32, 80, 18, 15, 64, 160, 4, 3, 2],
                M = [1, 11, 11, 11, 33, 11, 11, 11, 33, 11, 11, 33, 99, 3, 2, 1];C > 0 && C < 16 ? (b = O[C - 1], k = M[C - 1]) : 255 === C && (b = r.readByte() << 8 | r.readByte(), k = r.readByte() << 8 | r.readByte());
          }if (r.readBool() && r.readBool(), r.readBool() && (r.readBits(4), r.readBool() && r.readBits(24)), r.readBool() && (r.readUEG(), r.readUEG()), r.readBool()) {
            var U = r.readBits(32),
                N = r.readBits(32);D = r.readBool(), R = (w = N) / (L = 2 * U);
          }
        }var B = 1;1 === b && 1 === k || (B = b / k);var x = 0,
            V = 0;0 === l ? (x = 1, V = 2 - _) : (x = 3 === l ? 1 : 2, V = (1 === l ? 2 : 1) * (2 - _));var I = 16 * (y + 1),
            P = 16 * (m + 1) * (2 - _);I -= (g + S) * x, P -= (T + A) * V;var F = Math.ceil(I * B);return r.destroy(), r = null, { profile_string: s, level_string: o, bit_depth: d, chroma_format: u, chroma_format_string: e.getChromaFormatString(u), frame_rate: { fixed: D, fps: R, fps_den: L, fps_num: w }, par_ratio: { width: b, height: k }, codec_size: { width: I, height: P }, present_size: { width: F, height: P } };
      } }, { key: "_skipScalingList", value: function value(e, t) {
        for (var i = 8, r = 8, n = 0; n < t; n++) {
          0 !== r && (r = (i + e.readSEG() + 256) % 256), i = 0 === r ? i : r;
        }
      } }, { key: "getProfileString", value: function value(e) {
        switch (e) {case 66:
            return "Baseline";case 77:
            return "Main";case 88:
            return "Extended";case 100:
            return "High";case 110:
            return "High10";case 122:
            return "High422";case 244:
            return "High444";default:
            return "Unknown";}
      } }, { key: "getLevelString", value: function value(e) {
        return (e / 10).toFixed(1);
      } }, { key: "getChromaFormatString", value: function value(e) {
        switch (e) {case 420:
            return "4:2:0";case 422:
            return "4:2:2";case 444:
            return "4:4:4";default:
            return "Unknown";}
      } }, { key: "toVideoMeta", value: function value(e) {
        var t = {};e && e.codec_size && (t.codecWidth = e.codec_size.width, t.codecHeight = e.codec_size.height, t.presentWidth = e.present_size.width, t.presentHeight = e.present_size.height), t.profile = e.profile_string, t.level = e.level_string, t.bitDepth = e.bit_depth, t.chromaFormat = e.chroma_format, t.parRatio = { width: e.par_ratio.width, height: e.par_ratio.height }, t.frameRate = e.frame_rate;var i = t.frameRate.fps_den,
            r = t.frameRate.fps_num;return t.refSampleDuration = Math.floor(t.timescale * (i / r)), t;
      } }]), e;
  }(),
      Nalunit = function () {
    function e() {
      classCallCheck(this, e);
    }return createClass(e, null, [{ key: "getNalunits", value: function value(t) {
        if (t.length - t.position < 4) return [];var i = t.dataview,
            r = t.position;return 1 === i.getInt32(r) || 0 === i.getInt16(r) && 1 === i.getInt8(r + 2) ? e.getAnnexbNals(t) : e.getAvccNals(t);
      } }, { key: "getAnnexbNals", value: function value(t) {
        for (var i = [], r = e.getHeaderPositionAnnexB(t), n = r.pos, a = n; n < t.length - 4;) {
          var s = t.buffer.slice(n, n + r.headerLength);r.pos === t.position && t.skip(r.headerLength), a = (r = e.getHeaderPositionAnnexB(t)).pos;var o = { header: s, body: new Uint8Array(t.buffer.slice(n + s.byteLength, a)) };e.analyseNal(o), o.type <= 9 && 0 !== o.type && i.push(o), t.skip(a - t.position), n = a;
        }return i;
      } }, { key: "getAvccNals", value: function value(t) {
        for (var i = []; t.position < t.length - 4;) {
          var r = t.dataview.getInt32();if (!(t.length - t.position >= r)) break;var n = t.buffer.slice(t.position, t.position + 4);t.skip(4);var a = t.buffer.slice(t.position, t.position + r);t.skip(r);var s = { header: n, body: a };e.analyseNal(s), s.type <= 9 && 0 !== s.type && i.push(s);
        }return i;
      } }, { key: "analyseNal", value: function value(e) {
        var t = 31 & e.body[0];switch (e.type = t, t) {case 1:
            e.ndr = !0;break;case 5:
            e.idr = !0;break;case 6:
            break;case 7:
            e.sps = SPSParser.parseSPS(e.body);break;case 8:
            e.pps = !0;}
      } }, { key: "getHeaderPositionAnnexB", value: function value(e) {
        for (var t = e.position, i = 0; 3 !== i && 4 !== i && t < e.length - 4;) {
          0 === e.dataview.getInt16(t) ? 1 === e.dataview.getInt16(t + 2) ? i = 4 : 1 === e.dataview.getInt8(t + 2) ? i = 3 : t++ : t++;
        }return t === e.length - 4 && (0 === e.dataview.getInt16(t) ? 1 === e.dataview.getInt16(t + 2) && (i = 4) : (t++, 0 === e.dataview.getInt16(t) && 1 === e.dataview.getInt8(t) ? i = 3 : t = e.length)), { pos: t, headerLength: i };
      } }, { key: "getAvcc", value: function value(e, t) {
        var i = new Uint8Array(e.byteLength + t.byteLength + 11);i[0] = 1, i[1] = e[1], i[2] = e[2], i[3] = e[3], i[4] = 255, i[5] = 225;var r = 6;return i.set(new Uint8Array([e.byteLength >>> 8 & 255, 255 & e.byteLength]), r), r += 2, i.set(e, r), r += e.byteLength, i[r] = 1, r++, i.set(new Uint8Array([t.byteLength >>> 8 & 255, 255 & t.byteLength]), r), r += 2, i.set(t, r), i;
      } }]), e;
  }(),
      SpsParser = SPSParser,
      Track = function () {
    function e() {
      classCallCheck(this, e), this.id = -1, this.sequenceNumber = 0, this.samples = [], this.droppedSamples = [], this.length = 0;
    }return createClass(e, [{ key: "reset", value: function value() {
        this.sequenceNumber = 0, this.samples = [], this.length = 0;
      } }, { key: "distroy", value: function value() {
        this.reset(), this.id = -1;
      } }]), e;
  }(),
      AudioTrack = function (e) {
    function t() {
      classCallCheck(this, t);var e = possibleConstructorReturn(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));return e.TAG = "AudioTrack", e.type = "audio", e;
    }return inherits(t, e), t;
  }(Track),
      VideoTrack = function (e) {
    function t() {
      classCallCheck(this, t);var e = possibleConstructorReturn(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));return e.TAG = "VideoTrack", e.type = "video", e.dropped = 0, e;
    }return inherits(t, e), createClass(t, [{ key: "reset", value: function value() {
        this.sequenceNumber = 0, this.samples = [], this.length = 0, this.dropped = 0;
      } }]), t;
  }(Track),
      Tracks = function () {
    function e() {
      classCallCheck(this, e), this.audioTrack = null, this.videoTrack = null;
    }return createClass(e, [{ key: "destroy", value: function value() {
        this.audioTrack = null, this.videoTrack = null;
      } }]), e;
  }(),
      XgBuffer = function () {
    function e(t) {
      classCallCheck(this, e), this.length = t || 0, this.historyLen = t || 0, this.array = [], this.offset = 0;
    }return createClass(e, [{ key: "push", value: function value(e) {
        this.array.push(e), this.length += e.byteLength, this.historyLen += e.byteLength;
      } }, { key: "shift", value: function value(e) {
        if (this.array.length < 1) return new Uint8Array(0);if (void 0 === e) return this._shiftBuffer();if (this.offset + e === this.array[0].length) {
          var t = this.array[0].slice(this.offset, this.offset + e);return this.offset = 0, this.array.shift(), this.length -= e, t;
        }if (this.offset + e < this.array[0].length) {
          var i = this.array[0].slice(this.offset, this.offset + e);return this.offset += e, this.length -= e, i;
        }for (var r = new Uint8Array(e), n = 0; this.array.length > 0 && e > 0;) {
          if (this.offset + e < this.array[0].length) {
            var a = this.array[0].slice(this.offset, this.offset + e);r.set(a, n), this.offset += e, this.length -= e, e = 0;break;
          }var s = this.array[0].length - this.offset;r.set(this.array[0].slice(this.offset, this.array[0].length), n), this.array.shift(), this.offset = 0, n += s, this.length -= s, e -= s;
        }return r;
      } }, { key: "clear", value: function value() {
        this.array = [], this.length = 0, this.offset = 0;
      } }, { key: "destroy", value: function value() {
        this.clear(), this.historyLen = 0;
      } }, { key: "_shiftBuffer", value: function value() {
        return this.length -= this.array[0].length, this.offset = 0, this.array.shift();
      } }, { key: "toInt", value: function value(e, t) {
        for (var i = 0, r = this.offset + e; r < this.offset + t + e;) {
          r < this.array[0].length ? i = 256 * i + this.array[0][r] : this.array[1] && (i = 256 * i + this.array[1][r - this.array[0].length]), r++;
        }return i;
      } }]), e;
  }(),
      RemuxBuffer = function () {
    function e() {
      classCallCheck(this, e), this.video = [], this.audio = [];
    }return createClass(e, [{ key: "destroy", value: function value() {
        this.video = [], this.audio = [];
      } }]), e;
  }(),
      Source = function e() {
    classCallCheck(this, e), this.mimetype = "", this.init = null, this.data = [];
  },
      PreSource = function () {
    function e() {
      classCallCheck(this, e), this.sources = {};
    }return createClass(e, [{ key: "getSource", value: function value(e) {
        return this.sources[e];
      } }, { key: "createSource", value: function value(e) {
        return this.sources[e] = new Source(), this.sources[e];
      } }, { key: "clear", value: function value() {
        this.sources = {};
      } }, { key: "destroy", value: function value() {
        this.sources = {};
      } }]), e;
  }(),
      Tracks$1 = Tracks,
      AudioTrack$1 = AudioTrack,
      VideoTrack$1 = VideoTrack,
      XgBuffer$1 = XgBuffer,
      PreSource$1 = PreSource,
      DATA_TYPES = { NUMBER: 0, BOOLEAN: 1, STRING: 2, OBJECT: 3, MIX_ARRAY: 8, OBJECT_END: 9, STRICT_ARRAY: 10, DATE: 11, LONE_STRING: 12 },
      AMFParser = function () {
    function e() {
      classCallCheck(this, e), this.offset = 0, this.readOffset = this.offset;
    }return createClass(e, [{ key: "resolve", value: function value(e, t) {
        if (t < 3) throw new Error("not enough data for metainfo");var i = {},
            r = this.parseValue(e),
            n = this.parseValue(e, t - r.bodySize);return i[r.data] = n.data, this.resetStatus(), i;
      } }, { key: "resetStatus", value: function value() {
        this.offset = 0, this.readOffset = this.offset;
      } }, { key: "parseString", value: function value(e) {
        var t = new DataView(e, this.readOffset).getUint16(0, !isLe),
            i = "";i = t > 0 ? UTF8$1.decode(new Uint8Array(e, this.readOffset + 2, t)) : "";var r = t + 2;return this.readOffset += r, { data: i, bodySize: t + 2 };
      } }, { key: "parseDate", value: function value(e, t) {
        var i = new DataView(e, this.readOffset, t),
            r = i.getFloat64(0, !isLe);return r += 60 * i.getInt16(8, !isLe) * 1e3, this.readOffset += 10, { data: new Date(r), bodySize: 10 };
      } }, { key: "parseObject", value: function value(e, t) {
        var i = this.parseString(e, t),
            r = this.parseValue(e, t - i.bodySize);return { data: { name: i.data, value: r.data }, bodySize: i.bodySize + r.bodySize, isObjEnd: r.isObjEnd };
      } }, { key: "parseLongString", value: function value(e) {
        var t = new DataView(e, this.readOffset).getUint32(0, !isLe),
            i = "";return i = t > 0 ? UTF8$1.decode(new Uint8Array(e, this.readOffset + 2, t)) : "", this.readOffset += t + 4, { data: i, bodySize: t + 4 };
      } }, { key: "parseValue", value: function value(e, t) {
        var i = new ArrayBuffer();i = e instanceof ArrayBuffer ? e : e.buffer;var r = DATA_TYPES.NUMBER,
            n = DATA_TYPES.BOOLEAN,
            a = DATA_TYPES.STRING,
            s = DATA_TYPES.OBJECT,
            o = DATA_TYPES.MIX_ARRAY,
            l = DATA_TYPES.OBJECT_END,
            u = DATA_TYPES.STRICT_ARRAY,
            h = DATA_TYPES.DATE,
            d = DATA_TYPES.LONE_STRING,
            f = new DataView(i, this.readOffset, t),
            c = !1,
            p = f.getUint8(0),
            v = 1;this.readOffset += 1;var E = null;switch (p) {case r:
            E = f.getFloat64(1, !isLe), this.readOffset += 8, v += 8;break;case n:
            E = !!f.getUint8(1), this.readOffset += 1, v += 1;break;case a:
            var y = this.parseString(i);E = y.data, v += y.bodySize;break;case s:
            E = {};var m = 0;for (16777215 & f.getUint32(t - 4, !isLe) && (m = 3); v < t - 4;) {
              var _ = this.parseObject(i, t - v - m);if (_.isObjectEnd) break;E[_.data.name] = _.data.value, v += _.bodySize;
            }v <= t - 3 && 9 === (16777215 & f.getUint32(v - 1, !isLe)) && (this.readOffset += 3, v += 3);break;case o:
            E = {}, v += 4, this.readOffset += 4;var g = 0;for (9 == (16777215 & f.getUint32(t - 4, !isLe)) && (g = 3); v < t - 8;) {
              var S = this.parseObject(i, t - v - g);if (S.isObjectEnd) break;E[S.data.name] = S.data.value, v += S.bodySize;
            }v <= t - 3 && 9 === (16777215 & f.getUint32(v - 1, !isLe)) && (v += 3, this.readOffset += 3);break;case l:
            E = null, c = !0;break;case u:
            E = [];var T = f.getUint32(1, !isLe);v += 4, this.readOffset += 4;for (var A = 0; A < T; A++) {
              var b = this.parseValue(i, t - v);E.push(b.data), v += b.bodySize;
            }break;case h:
            var k = this.parseDate(i, t - 1);E = k.data, v += k.bodySize;break;case d:
            var R = this.parseLongString(i, t - 1);E = R.data, v += R.bodySize;break;default:
            v = t;}return { data: E, bodySize: v, isObjEnd: c };
      } }]), e;
  }(),
      DEMUX_EVENTS$2 = EVENTS$1.DEMUX_EVENTS,
      FlvDemuxer = function () {
    function e() {
      classCallCheck(this, e), this._firstFragmentLoaded = !1, this._trackNum = 0, this._hasScript = !1;
    }return createClass(e, [{ key: "init", value: function value() {
        this.on(DEMUX_EVENTS$2.DEMUX_START, this.doParseFlv.bind(this));
      } }, { key: "doParseFlv", value: function value() {
        if (this._firstFragmentLoaded) {
          if (this.loaderBuffer.length < 11) return;var e = void 0,
              t = 1e4;do {
            e = this._parseFlvTag();
          } while (e && t-- > 0);this.emit(DEMUX_EVENTS$2.DEMUX_COMPLETE);
        } else {
          if (this.loaderBuffer.length < 13) return;var i = this.loaderBuffer.shift(13);this.parseFlvHeader(i), this.doParseFlv();
        }
      } }, { key: "parseFlvHeader", value: function value(t) {
        e.isFlvFile(t) ? (this._firstFragmentLoaded = !0, this.initVideoTrack(), this.initAudioTrack()) : (this.emit(DEMUX_EVENTS$2.DEMUX_ERROR, new Error("invalid flv file")), this.doParseFlv()), this.doParseFlv();
      } }, { key: "initVideoTrack", value: function value() {
        this._trackNum++;var e = new VideoTrack$1();e.meta = new VideoTrackMeta$1(), e.id = e.meta.id = this._trackNum, this.tracks.videoTrack = e;
      } }, { key: "initAudioTrack", value: function value() {
        this._trackNum++;var e = new AudioTrack$1();e.meta = new AudioTrackMeta$1(), e.id = e.meta.id = this._trackNum, this.tracks.audioTrack = e;
      } }, { key: "_parseFlvTag", value: function value() {
        if (this.loaderBuffer.length < 11) return null;var e = this._parseFlvTagHeader();return e && this._processChunk(e), e;
      } }, { key: "_parseFlvTagHeader", value: function value() {
        var e = 0,
            t = {},
            i = this.loaderBuffer.toInt(e, 1);if (e += 1, t.filtered = (32 & i) >>> 5, t.tagType = 31 & i, t.datasize = this.loaderBuffer.toInt(e, 3), e += 3, 8 !== t.tagType && 9 !== t.tagType && 11 !== t.tagType && 18 !== t.tagType || 0 !== this.loaderBuffer.toInt(8, 3)) return this.loaderBuffer && this.loaderBuffer.length > 0 && this.loaderBuffer.shift(1), this.emit(DEMUX_EVENTS$2.DEMUX_ERROR, this.TAG, new Error("tagType " + t.tagType), !1), null;if (this.loaderBuffer.length < t.datasize + 15) return null;this.loaderBuffer.shift(4);var r = this.loaderBuffer.toInt(0, 3);this.loaderBuffer.shift(3);var n = this.loaderBuffer.shift(1)[0];return n > 0 && (r += 16777216 * n), t.dts = r, this.loaderBuffer.shift(3), t;
      } }, { key: "_processChunk", value: function value(e) {
        switch (e.tagType) {case 18:
            this._parseScriptData(e);break;case 8:
            this._parseAACData(e);break;case 9:
            this._parseHevcData(e);break;case 11:
            this.loaderBuffer.shift(3);break;default:
            this.loaderBuffer.shift(1);}
      } }, { key: "_parseScriptData", value: function value(e) {
        var t = this.tracks.audioTrack,
            i = this.tracks.videoTrack,
            r = this.loaderBuffer.shift(e.datasize),
            n = new AMFParser().resolve(r, r.length),
            a = this._context.onMetaData = n ? n.onMetaData : void 0;if (this._context.mediaInfo.duration = a.duration, this._context.mediaInfo.hasVideo = a.hasVideo, this._context.mediaInfo.hsaAudio = a.hasAudio, this._datasizeValidator(e.datasize) && (this.emit(DEMUX_EVENTS$2.MEDIA_INFO), this._hasScript = !0), t && !t.hasSpecificConfig) {
          var s = t.meta;switch (a.audiosamplerate && (s.sampleRate = a.audiosamplerate), a.audiochannels && (s.channelCount = a.audiochannels), a.audiosamplerate) {case 44100:
              s.sampleRateIndex = 4;break;case 22050:
              s.sampleRateIndex = 7;break;case 11025:
              s.sampleRateIndex = 10;}
        }if (i && !i.hasSpecificConfig) {
          var o = i.meta;if ("number" == typeof a.framerate) {
            var l = Math.floor(1e3 * a.framerate);if (l > 0) {
              var u = l / 1e3;o.frameRate || (o.frameRate = {}), o.frameRate.fixed = !0, o.frameRate.fps = u, o.frameRate.fps_num = l, o.frameRate.fps_den = 1e3;
            }
          }
        }
      } }, { key: "_aacSequenceHeaderParser", value: function value(e) {
        var t = {};t.hasSpecificConfig = !0, t.objectType = e[1] >>> 3, t.sampleRateIndex = (7 & e[1]) << 1 | e[2] >>> 7, t.audiosamplerate = this._switchAudioSampleRate(t.sampleRateIndex), t.channelCount = (120 & e[2]) >>> 3, t.frameLength = (4 & e[2]) >>> 2, t.dependsOnCoreCoder = (2 & e[2]) >>> 1, t.extensionFlagIndex = 1 & e[2], t.codec = "mp4a.40." + t.objectType;var i = window.navigator.userAgent.toLowerCase(),
            r = void 0,
            n = void 0,
            a = t.sampleRateIndex;return -1 !== i.indexOf("firefox") ? t.sampleRateIndex >= 6 ? (t.objectType = 5, n = new Array(4), r = a - 3) : (t.objectType = 2, n = new Array(2), r = a) : -1 !== i.indexOf("android") ? (t.objectType = 2, n = new Array(2), r = a) : (t.objectType = 5, r = t.sampleRateIndex, n = new Array(4), t.sampleRateIndex >= 6 ? r = t.sampleRateIndex - 3 : 1 === t.channelCount && (t.objectType = 2, n = new Array(2), r = t.sampleRateIndex)), n[0] = t.objectType << 3, n[0] |= (15 & t.sampleRateIndex) >>> 1, n[1] = (15 & t.sampleRateIndex) << 7, n[1] |= (15 & t.channelCount) << 3, 5 === t.objectType && (n[1] |= (15 & r) >>> 1, n[2] = (1 & r) << 7, n[2] |= 8, n[3] = 0), t.config = n, t;
      } }, { key: "_parseAACData", value: function value(e) {
        var t = this.tracks.audioTrack;if (t) {
          var i = t.meta;i || (t.meta = new AudioTrackMeta$1(), i = t.meta);var r = this.loaderBuffer.shift(1)[0];e.data = this.loaderBuffer.shift(e.datasize - 1);var n = (240 & r) >>> 4;t.format = n, 10 !== n && this.emit(DEMUX_EVENTS$2.DEMUX_ERROR, new Error("invalid audio format: " + n)), 10 !== n || this._hasAudioSequence || (i.sampleRate = this._switchAudioSamplingFrequency(r), i.sampleRateIndex = (12 & r) >>> 2, i.frameLenth = (2 & r) >>> 1, i.channelCount = 1 & r, i.refSampleDuration = Math.floor(1024 / i.audioSampleRate * i.timescale));var a = i.audioSampleRate,
              s = i.sampleRateIndex,
              o = i.refSampleDuration;delete e.tagType;var l = this._datasizeValidator(e.datasize);if (0 === e.data[0]) {
            var u = this._aacSequenceHeaderParser(e.data);a = u.audiosamplerate || i.audioSampleRate, s = u.sampleRateIndex || i.sampleRateIndex, o = Math.floor(1024 / a * i.timescale), i.channelCount = u.channelCount, i.sampleRate = a, i.sampleRateIndex = s, i.refSampleDuration = o, i.duration = this._context.mediaInfo.duration * i.timescale, i.config = u.config;var h = this._context.mediaInfo.audio;h.codec = u.codec, h.channelCount = u.channelCount, h.sampleRate = a, h.sampleRateIndex = u.audioSampleRateIndex, this._hasAudioSequence ? this.emit(DEMUX_EVENTS$2.AUDIO_METADATA_CHANGE) : this.emit(DEMUX_EVENTS$2.METADATA_PARSED, "audio"), this._hasAudioSequence = !0, this._metaChange = !0;
          } else this._metaChange && (e.options = { meta: t.meta }, this._metaChange = !1), e.data = e.data.slice(1, e.data.length), t.samples.push(e);l || this.emit(DEMUX_EVENTS$2.DEMUX_ERROR, this.TAG, new Error("TAG length error at " + e.datasize), !1);
        }
      } }, { key: "_parseHevcData", value: function value(e) {
        var t = this.loaderBuffer.shift(1)[0];e.frameType = (240 & t) >>> 4, e.isKeyframe = 1 === e.frameType;var i = 15 & t;if (this.tracks.videoTrack.codecID = i, e.avcPacketType = this.loaderBuffer.shift(1)[0], e.cts = this.loaderBuffer.toInt(0, 3), this.loaderBuffer.shift(3), 12 === i) {
          var r = this.loaderBuffer.shift(e.datasize - 5);if (e.data = r, 0 !== Number.parseInt(e.avcPacketType)) {
            this._datasizeValidator(e.datasize) || this.emit(DEMUX_EVENTS$2.DEMUX_ERROR, this.TAG, new Error("invalid video tag datasize: " + e.datasize), !1);var n = {},
                a = 0;for (n.cts = e.cts, n.dts = e.dts; e.data.length > a;) {
              var s = e.data.slice(Number.parseInt(a), 4 + a);n.size = s[3], n.size += 256 * s[2], n.size += 256 * s[1] * 256, n.size += 256 * s[0] * 256 * 256, a += 4, n.data = e.data.slice(Number.parseInt(a), n.size + a), a += n.size, this.tracks.videoTrack.samples.push(n), this.emit(DEMUX_EVENTS$2.METADATA_PARSED, "video");
            }
          } else 0 === Number.parseInt(e.avcPacketType) && (this._datasizeValidator(e.datasize) ? this.emit(DEMUX_EVENTS$2.METADATA_PARSED, "video") : this.emit(DEMUX_EVENTS$2.DEMUX_ERROR, this.TAG, new Error("invalid video tag datasize: " + e.datasize), !1));
        } else if (7 === i) {
          var o = this.loaderBuffer.shift(e.datasize - 5);if (0 === o[4] && 0 === o[5] && 0 === o[6] && 1 === o[7]) {
            for (var l = 0, u = 0; u < 4; u++) {
              l = 256 * l + o[u];
            }l -= 4, (o = o.slice(4, o.length))[3] = l % 256, l = (l - o[3]) / 256, o[2] = l % 256, l = (l - o[2]) / 256, o[1] = l % 256, o[0] = (l - o[1]) / 256;
          }if (e.data = o, 0 === e.avcPacketType) this._avcSequenceHeaderParser(e.data), this._datasizeValidator(e.datasize) && (this._hasVideoSequence ? this.emit(DEMUX_EVENTS$2.VIDEO_METADATA_CHANGE) : this.emit(DEMUX_EVENTS$2.METADATA_PARSED, "video"), this._hasVideoSequence = !0), this._metaChange = !0;else {
            if (!this._datasizeValidator(e.datasize)) return void this.emit(DEMUX_EVENTS$2.DEMUX_ERROR, this.TAG, new Error("invalid video tag datasize: " + e.datasize), !1);this._metaChange && (e.options = { meta: Object.assign({}, this.tracks.videoTrack.meta) }, this._metaChange = !1), this.tracks.videoTrack.samples.push(e);
          }
        } else this.emit(DEMUX_EVENTS$2.DEMUX_ERROR, this.TAG, new Error("video codeid is " + i), !1), e.data = this.loaderBuffer.shift(e.datasize - 1), this._datasizeValidator(e.datasize) || this.emit(DEMUX_EVENTS$2.DEMUX_ERROR, this.TAG, new Error("invalid video tag datasize: " + e.datasize), !1), this.tracks.videoTrack.samples.push(e), this.emit(DEMUX_EVENTS$2.DEMUX_COMPLETE);delete e.tagType;
      } }, { key: "_avcSequenceHeaderParser", value: function value(e) {
        var t = this.tracks.videoTrack;if (t) {
          var i = 0;t.meta || (t.meta = new VideoTrackMeta$1());var r = t.meta;r.configurationVersion = e[0], r.avcProfileIndication = e[1], r.profileCompatibility = e[2], r.avcLevelIndication = e[3] / 10, r.nalUnitLength = 1 + (3 & e[4]);var n = 31 & e[5];i = 6;for (var a = {}, s = 0; s < n; s++) {
            var o = 255 * e[i] + e[i + 1];i += 2;for (var l = new Uint8Array(o), u = 0; u < o; u++) {
              l[u] = e[i + u];
            }for (var h = "avc1.", d = 1; d < 4; d++) {
              var f = l[d].toString(16);f.length < 2 && (f = "0" + f), h += f;
            }r.codec = h, i += o, this.tracks.videoTrack.meta.sps = l, a = SpsParser.parseSPS(l);
          }var c = e[i];i++;for (var p = 0; p < c; p++) {
            var v = 255 * e[i] + e[i + 1];i += 2;for (var E = new Uint8Array(v), y = 0; y < v; y++) {
              E[y] = e[i + y];
            }i += v, this.tracks.videoTrack.meta.pps = E;
          }Object.assign(r, SpsParser.toVideoMeta(a));var m = this._context.mediaInfo.video;m.codec = r.codec, m.profile = r.profile, m.level = r.level, m.chromaFormat = r.chromaFormat, m.frameRate = r.frameRate, m.parRatio = r.parRatio, m.width = m.width === r.presentWidth ? m.width : r.presentWidth, m.height = m.height === r.presentHeight ? m.width : r.presentHeight, r.duration = this._context.mediaInfo.duration * r.timescale, r.avcc = new Uint8Array(e.length), r.avcc.set(e), t.meta = r;
        }
      } }, { key: "_switchAudioSampleRate", value: function value(e) {
        return [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350][e];
      } }, { key: "_switchAudioSamplingFrequency", value: function value(e) {
        return [5500, 11025, 22050, 44100, 48e3][(12 & e) >>> 2];
      } }, { key: "_switchAudioChannel", value: function value(e) {
        return [1, 2][1 & e];
      } }, { key: "_datasizeValidator", value: function value(e) {
        var t = this.loaderBuffer.toInt(0, 4);return this.loaderBuffer.shift(4), t === e + 11;
      } }, { key: "loaderBuffer", get: function get() {
        var e = this._context.getInstance("LOADER_BUFFER");if (e) return e;this.emit(DEMUX_EVENTS$2.DEMUX_ERROR, new Error("找不到 loaderBuffer 实例"));
      } }, { key: "tracks", get: function get() {
        return this._context.getInstance("TRACKS");
      } }, { key: "logger", get: function get() {
        return this._context.getInstance("LOGGER");
      } }], [{ key: "isFlvFile", value: function value(e) {
        return !(70 !== e[0] || 76 !== e[1] || 86 !== e[2] || 1 !== e[3]);
      } }, { key: "getPlayType", value: function value(e) {
        var t = { hasVideo: !1, hasAudio: !1 };return !0 & e && (t.hasVideo = !0), !0 & e && (t.hasAudio = !0), t;
      } }]), e;
  }(),
      LOADER_EVENTS$2 = EVENTS$1.LOADER_EVENTS,
      READ_STREAM = 0,
      READ_TEXT = 1,
      READ_JSON = 2,
      READ_BUFFER = 3,
      FetchLoader = function () {
    function e(t) {
      classCallCheck(this, e), this.configs = Object.assign({}, t), this.url = null, this.status = 0, this.error = null, this._reader = null, this._canceled = !1, this._destroyed = !1, this.readtype = this.configs.readtype, this.buffer = this.configs.buffer || "LOADER_BUFFER", this._loaderTaskNo = 0;
    }return createClass(e, [{ key: "init", value: function value() {
        this.on(LOADER_EVENTS$2.LADER_START, this.load.bind(this));
      } }, { key: "load", value: function value(e, t) {
        var i = this;this.url = e, this._canceled = !1;var r = this.getParams(t);return this.loading = !0, fetch(this.url, r).then(function (e) {
          if (e.ok) return i.status = e.status, Promise.resolve().then(function () {
            i._onFetchResponse(e);
          }), Promise.resolve(e);i.loading = !1, i.emit(LOADER_EVENTS$2.LOADER_ERROR, i.TAG, new Error(e.status + " (" + e.statusText + ")"));
        }).catch(function (e) {
          throw i.loading = !1, i.emit(LOADER_EVENTS$2.LOADER_ERROR, i.TAG, e), e;
        });
      } }, { key: "_onFetchResponse", value: function value(e) {
        var t = this,
            i = this._context.getInstance(this.buffer),
            r = ++this._loaderTaskNo;if (!0 === e.ok) switch (this.readtype) {case READ_JSON:
            e.json().then(function (e) {
              t.loading = !1, t._canceled || t._destroyed || (i ? (i.push(e), t.emit(LOADER_EVENTS$2.LOADER_COMPLETE, i)) : t.emit(LOADER_EVENTS$2.LOADER_COMPLETE, e));
            });break;case READ_TEXT:
            e.text().then(function (e) {
              t.loading = !1, t._canceled || t._destroyed || (i ? (i.push(e), t.emit(LOADER_EVENTS$2.LOADER_COMPLETE, i)) : t.emit(LOADER_EVENTS$2.LOADER_COMPLETE, e));
            });break;case READ_BUFFER:
            e.arrayBuffer().then(function (e) {
              t.loading = !1, t._canceled || t._destroyed || (i ? (i.push(new Uint8Array(e)), t.emit(LOADER_EVENTS$2.LOADER_COMPLETE, i)) : t.emit(LOADER_EVENTS$2.LOADER_COMPLETE, e));
            });break;case READ_STREAM:default:
            return this._onReader(e.body.getReader(), r);}
      } }, { key: "_onReader", value: function value(e, t) {
        var i = this,
            r = this._context.getInstance(this.buffer);if (!r && this._reader || this._destroyed) try {
          this._reader.cancel();
        } catch (e) {}this._reader = e, !1 !== this.loading && this._reader && this._reader.read().then(function (n) {
          if (!i._canceled && !i._destroyed) return n.done ? (i.loading = !1, i.status = 0, void Promise.resolve().then(function () {
            i.emit(LOADER_EVENTS$2.LOADER_COMPLETE, r);
          })) : (r.push(n.value), Promise.resolve().then(function () {
            i.emit(LOADER_EVENTS$2.LOADER_DATALOADED, r);
          }), i._onReader(e, t));if (i._reader) try {
            i._reader.cancel();
          } catch (e) {}
        }).catch(function (e) {
          throw i.loading = !1, i.emit(LOADER_EVENTS$2.LOADER_ERROR, i.TAG, e), e;
        });
      } }, { key: "getParams", value: function value(e) {
        var t = Object.assign({}, e),
            i = new Headers(),
            r = { method: "GET", headers: i, mode: "cors", cache: "default" };if ("object" === _typeof(this.configs.headers)) {
          var n = this.configs.headers;for (var a in n) {
            n.hasOwnProperty(a) && i.append(a, n[a]);
          }
        }if ("object" === _typeof(t.headers)) {
          var s = t.headers;for (var o in s) {
            s.hasOwnProperty(o) && i.append(o, s[o]);
          }
        }return !1 === t.cors && (r.mode = "same-origin"), t.withCredentials && (r.credentials = "include"), r;
      } }, { key: "cancel", value: function value() {
        if (this._reader) {
          try {
            this._reader.cancel();
          } catch (e) {}this._reader = null, this.loading = !1;
        }this._canceled = !0;
      } }, { key: "destroy", value: function value() {
        this._destroyed = !0, this.cancel();
      } }], [{ key: "type", get: function get() {
        return "loader";
      } }]), e;
  }(),
      Golomb$1 = function () {
    function e(t) {
      classCallCheck(this, e), this.TAG = "Golomb", this._buffer = t, this._bufferIndex = 0, this._totalBytes = t.byteLength, this._totalBits = 8 * t.byteLength, this._currentWord = 0, this._currentWordBitsLeft = 0;
    }return createClass(e, [{ key: "destroy", value: function value() {
        this._buffer = null;
      } }, { key: "_fillCurrentWord", value: function value() {
        var e = this._totalBytes - this._bufferIndex,
            t = Math.min(4, e),
            i = new Uint8Array(4);i.set(this._buffer.subarray(this._bufferIndex, this._bufferIndex + t)), this._currentWord = new DataView(i.buffer).getUint32(0), this._bufferIndex += t, this._currentWordBitsLeft = 8 * t;
      } }, { key: "readBits", value: function value(e) {
        var t = Math.min(this._currentWordBitsLeft, e),
            i = this._currentWord >>> 32 - t;if (e > 32) throw new Error("Cannot read more than 32 bits at a time");return this._currentWordBitsLeft -= t, this._currentWordBitsLeft > 0 ? this._currentWord <<= t : this._totalBytes - this._bufferIndex > 0 && this._fillCurrentWord(), t = e - t, t > 0 && this._currentWordBitsLeft ? i << t | this.readBits(t) : i;
      } }, { key: "readBool", value: function value() {
        return 1 === this.readBits(1);
      } }, { key: "readByte", value: function value() {
        return this.readBits(8);
      } }, { key: "_skipLeadingZero", value: function value() {
        var e = void 0;for (e = 0; e < this._currentWordBitsLeft; e++) {
          if (0 != (this._currentWord & 2147483648 >>> e)) return this._currentWord <<= e, this._currentWordBitsLeft -= e, e;
        }return this._fillCurrentWord(), e + this._skipLeadingZero();
      } }, { key: "readUEG", value: function value() {
        var e = this._skipLeadingZero();return this.readBits(e + 1) - 1;
      } }, { key: "readSEG", value: function value() {
        var e = this.readUEG();return 1 & e ? e + 1 >>> 1 : -1 * (e >>> 1);
      } }]), e;
  }(),
      SPSParser$1 = function () {
    function e() {
      classCallCheck(this, e);
    }return createClass(e, null, [{ key: "_ebsp2rbsp", value: function value(e) {
        for (var t = e, i = t.byteLength, r = new Uint8Array(i), n = 0, a = 0; a < i; a++) {
          a >= 2 && 3 === t[a] && 0 === t[a - 1] && 0 === t[a - 2] || (r[n] = t[a], n++);
        }return new Uint8Array(r.buffer, 0, n);
      } }, { key: "parseSPS", value: function value(t) {
        var i = e._ebsp2rbsp(t),
            r = new Golomb$1(i);r.readByte();var n = r.readByte();r.readByte();var a = r.readByte();r.readUEG();var s = e.getProfileString(n),
            o = e.getLevelString(a),
            l = 1,
            u = 420,
            h = [0, 420, 422, 444],
            d = 8;if ((100 === n || 110 === n || 122 === n || 244 === n || 44 === n || 83 === n || 86 === n || 118 === n || 128 === n || 138 === n || 144 === n) && (3 === (l = r.readUEG()) && r.readBits(1), l <= 3 && (u = h[l]), d = r.readUEG() + 8, r.readUEG(), r.readBits(1), r.readBool())) for (var f = 3 !== l ? 8 : 12, c = 0; c < f; c++) {
          r.readBool() && (c < 6 ? e._skipScalingList(r, 16) : e._skipScalingList(r, 64));
        }r.readUEG();var p = r.readUEG();if (0 === p) r.readUEG();else if (1 === p) {
          r.readBits(1), r.readSEG(), r.readSEG();for (var v = r.readUEG(), E = 0; E < v; E++) {
            r.readSEG();
          }
        }r.readUEG(), r.readBits(1);var y = r.readUEG(),
            m = r.readUEG(),
            _ = r.readBits(1);0 === _ && r.readBits(1), r.readBits(1);var g = 0,
            S = 0,
            T = 0,
            A = 0;r.readBool() && (g = r.readUEG(), S = r.readUEG(), T = r.readUEG(), A = r.readUEG());var b = 1,
            k = 1,
            R = 0,
            D = !0,
            w = 0,
            L = 0;if (r.readBool()) {
          if (r.readBool()) {
            var C = r.readByte(),
                O = [1, 12, 10, 16, 40, 24, 20, 32, 80, 18, 15, 64, 160, 4, 3, 2],
                M = [1, 11, 11, 11, 33, 11, 11, 11, 33, 11, 11, 33, 99, 3, 2, 1];C > 0 && C < 16 ? (b = O[C - 1], k = M[C - 1]) : 255 === C && (b = r.readByte() << 8 | r.readByte(), k = r.readByte() << 8 | r.readByte());
          }if (r.readBool() && r.readBool(), r.readBool() && (r.readBits(4), r.readBool() && r.readBits(24)), r.readBool() && (r.readUEG(), r.readUEG()), r.readBool()) {
            var U = r.readBits(32),
                N = r.readBits(32);D = r.readBool(), R = (w = N) / (L = 2 * U);
          }
        }var B = 1;1 === b && 1 === k || (B = b / k);var x = 0,
            V = 0;0 === l ? (x = 1, V = 2 - _) : (x = 3 === l ? 1 : 2, V = (1 === l ? 2 : 1) * (2 - _));var I = 16 * (y + 1),
            P = 16 * (m + 1) * (2 - _);I -= (g + S) * x, P -= (T + A) * V;var F = Math.ceil(I * B);return r.destroy(), r = null, { profile_string: s, level_string: o, bit_depth: d, chroma_format: u, chroma_format_string: e.getChromaFormatString(u), frame_rate: { fixed: D, fps: R, fps_den: L, fps_num: w }, par_ratio: { width: b, height: k }, codec_size: { width: I, height: P }, present_size: { width: F, height: P } };
      } }, { key: "_skipScalingList", value: function value(e, t) {
        for (var i = 8, r = 8, n = 0; n < t; n++) {
          0 !== r && (r = (i + e.readSEG() + 256) % 256), i = 0 === r ? i : r;
        }
      } }, { key: "getProfileString", value: function value(e) {
        switch (e) {case 66:
            return "Baseline";case 77:
            return "Main";case 88:
            return "Extended";case 100:
            return "High";case 110:
            return "High10";case 122:
            return "High422";case 244:
            return "High444";default:
            return "Unknown";}
      } }, { key: "getLevelString", value: function value(e) {
        return (e / 10).toFixed(1);
      } }, { key: "getChromaFormatString", value: function value(e) {
        switch (e) {case 420:
            return "4:2:0";case 422:
            return "4:2:2";case 444:
            return "4:4:4";default:
            return "Unknown";}
      } }, { key: "toVideoMeta", value: function value(e) {
        var t = {};e && e.codec_size && (t.codecWidth = e.codec_size.width, t.codecHeight = e.codec_size.height, t.presentWidth = e.present_size.width, t.presentHeight = e.present_size.height), t.profile = e.profile_string, t.level = e.level_string, t.bitDepth = e.bit_depth, t.chromaFormat = e.chroma_format, t.parRatio = { width: e.par_ratio.width, height: e.par_ratio.height }, t.frameRate = e.frame_rate;var i = t.frameRate.fps_den,
            r = t.frameRate.fps_num;return t.refSampleDuration = Math.floor(t.timescale * (i / r)), t;
      } }]), e;
  }(),
      Nalunit$1 = function () {
    function e() {
      classCallCheck(this, e);
    }return createClass(e, null, [{ key: "getNalunits", value: function value(t) {
        if (t.length - t.position < 4) return [];var i = t.dataview,
            r = t.position;return 1 === i.getInt32(r) || 0 === i.getInt16(r) && 1 === i.getInt8(r + 2) ? e.getAnnexbNals(t) : e.getAvccNals(t);
      } }, { key: "getAnnexbNals", value: function value(t) {
        for (var i = [], r = e.getHeaderPositionAnnexB(t), n = r.pos, a = n; n < t.length - 4;) {
          var s = t.buffer.slice(n, n + r.headerLength);r.pos === t.position && t.skip(r.headerLength), a = (r = e.getHeaderPositionAnnexB(t)).pos;var o = { header: s, body: new Uint8Array(t.buffer.slice(n + s.byteLength, a)) };e.analyseNal(o), o.type <= 9 && 0 !== o.type && i.push(o), t.skip(a - t.position), n = a;
        }return i;
      } }, { key: "getAvccNals", value: function value(t) {
        for (var i = []; t.position < t.length - 4;) {
          var r = t.dataview.getInt32();if (!(t.length - t.position >= r)) break;var n = t.buffer.slice(t.position, t.position + 4);t.skip(4);var a = t.buffer.slice(t.position, t.position + r);t.skip(r);var s = { header: n, body: a };e.analyseNal(s), s.type <= 9 && 0 !== s.type && i.push(s);
        }return i;
      } }, { key: "analyseNal", value: function value(e) {
        var t = 31 & e.body[0];switch (e.type = t, t) {case 1:
            e.ndr = !0;break;case 5:
            e.idr = !0;break;case 6:
            break;case 7:
            e.sps = SPSParser$1.parseSPS(e.body);break;case 8:
            e.pps = !0;}
      } }, { key: "getHeaderPositionAnnexB", value: function value(e) {
        for (var t = e.position, i = 0; 3 !== i && 4 !== i && t < e.length - 4;) {
          0 === e.dataview.getInt16(t) ? 1 === e.dataview.getInt16(t + 2) ? i = 4 : 1 === e.dataview.getInt8(t + 2) ? i = 3 : t++ : t++;
        }return t === e.length - 4 && (0 === e.dataview.getInt16(t) ? 1 === e.dataview.getInt16(t + 2) && (i = 4) : (t++, 0 === e.dataview.getInt16(t) && 1 === e.dataview.getInt8(t) ? i = 3 : t = e.length)), { pos: t, headerLength: i };
      } }, { key: "getAvcc", value: function value(e, t) {
        var i = new Uint8Array(e.byteLength + t.byteLength + 11);i[0] = 1, i[1] = e[1], i[2] = e[2], i[3] = e[3], i[4] = 255, i[5] = 225;var r = 6;return i.set(new Uint8Array([e.byteLength >>> 8 & 255, 255 & e.byteLength]), r), r += 2, i.set(e, r), r += e.byteLength, i[r] = 1, r++, i.set(new Uint8Array([t.byteLength >>> 8 & 255, 255 & t.byteLength]), r), r += 2, i.set(t, r), i;
      } }]), e;
  }(),
      AAC = function () {
    function e() {
      classCallCheck(this, e);
    }return createClass(e, null, [{ key: "getSilentFrame", value: function value(e, t) {
        if ("mp4a.40.2" === e) {
          if (1 === t) return new Uint8Array([0, 200, 0, 128, 35, 128]);if (2 === t) return new Uint8Array([33, 0, 73, 144, 2, 25, 0, 35, 128]);if (3 === t) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 142]);if (4 === t) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 128, 44, 128, 8, 2, 56]);if (5 === t) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 56]);if (6 === t) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 0, 178, 0, 32, 8, 224]);
        } else {
          if (1 === t) return new Uint8Array([1, 64, 34, 128, 163, 78, 230, 128, 186, 8, 0, 0, 0, 28, 6, 241, 193, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);if (2 === t) return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);if (3 === t) return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
        }return null;
      } }]), e;
  }(),
      REMUX_EVENTS$3 = EVENTS.REMUX_EVENTS,
      Compatibility = function () {
    function e() {
      classCallCheck(this, e), this.nextAudioDts = 0, this.nextVideoDts = 0, this.lastAudioSamplesLen = 0, this.lastVideoSamplesLen = 0, this.lastVideoDts = void 0, this.lastAudioDts = void 0, this.allAudioSamplesCount = 0, this.allVideoSamplesCount = 0, this._firstAudioSample = null, this._firstVideoSample = null, this.filledAudioSamples = [], this.filledVideoSamples = [], this.videoLastSample = null, this.audioLastSample = null, this._videoLargeGap = 0, this._audioLargeGap = 0;
    }return createClass(e, [{ key: "init", value: function value() {
        this.before(REMUX_EVENTS$3.REMUX_MEDIA, this.doFix.bind(this));
      } }, { key: "reset", value: function value() {
        this.nextAudioDts = null, this.nextVideoDts = null, this.lastAudioSamplesLen = 0, this.lastVideoSamplesLen = 0, this.lastVideoDts = void 0, this.lastAudioDts = void 0, this.videoLastSample = null, this.audioLastSample = null, this.filledAudioSamples = [], this.filledVideoSamples = [];
      } }, { key: "doFix", value: function value() {
        var t = this.getFirstSample(),
            i = t.isFirstAudioSamples,
            r = t.isFirstVideoSamples;this.recordSamplesCount(), this._firstVideoSample && this.fixRefSampleDuration(this.videoTrack.meta, this.videoTrack.samples), this._firstAudioSample && this.fixRefSampleDuration(this.audioTrack.meta, this.audioTrack.samples);var n = e.detactChangeStream(this.videoTrack.samples),
            a = n.changed,
            s = n.changedIdx;a && !i ? this.fixChangeStreamVideo(s) : this.doFixVideo(r);var o = e.detactChangeStream(this.audioTrack.samples),
            l = o.changed,
            u = o.changedIdx;l ? this.fixChangeStreamAudio(u) : this.doFixAudio(i), this.removeInvalidSamples();
      } }, { key: "doFixVideo", value: function value(t, i) {
        for (var r = this.videoTrack, n = r.samples, a = r.meta, s = 0, o = n.length; s < o; s++) {
          var l = n[s];l.originDts = l.dts;
        }if ((!a.frameRate || !1 !== a.frameRate.fixed) && n && n.length && this._firstVideoSample) {
          var u = n[0];if (0 !== this._videoLargeGap && e.doFixLargeGap(n, this._videoLargeGap), u.dts !== this._firstVideoSample.dts && (i || this.videoLastSample && e.detectLargeGap(this.videoLastSample.dts, u)) && (this.nextVideoDts = i || this.videoLastSample.dts, this._videoLargeGap = this.nextVideoDts - u.dts, e.doFixLargeGap(n, this._videoLargeGap)), t && this._firstAudioSample) {
            var h = this._firstVideoSample.originDts,
                d = h - (this._firstAudioSample.originDts || this._firstAudioSample.dts);if (d > 2 * a.refSampleDuration && d < 10 * a.refSampleDuration) {
              for (var f = Math.floor(d / a.refSampleDuration), c = 0; c < f; c++) {
                var p = Object.assign({}, u);p.dts = h - (c + 1) * a.refSampleDuration, p.pts = p.dts + p.cts, n.unshift(p), this.filledVideoSamples.push({ dts: p.dts, size: p.data.byteLength });
              }this._firstVideoSample = this.filledVideoSamples[0] || this._firstVideoSample;
            } else d < -2 * a.refSampleDuration && (this._videoLargeGap = -1 * d, e.doFixLargeGap(n, -1 * d));
          }var v = n.pop();if (n.length && (n[n.length - 1].duration = v.dts - n[n.length - 1].dts), this.videoLastSample) {
            var E = this.videoLastSample;E.duration = u.dts - E.dts, n.unshift(this.videoLastSample);
          }this.videoLastSample = v, this.videoTrack.samples = n;
        }
      } }, { key: "doFixAudio", value: function value(t, i) {
        var r = this.audioTrack,
            n = r.samples,
            a = r.meta;if (n && n.length) {
          for (var s = 0, o = n.length; s < o; s++) {
            var l = n[s];l.originDts = l.dts;
          }var u = n.length,
              h = AAC.getSilentFrame(a.codec, a.channelCount),
              d = this._firstAudioSample,
              f = n[0];if (0 !== this._audioLargeGap && e.doFixLargeGap(n, this._audioLargeGap), f.dts !== this._firstAudioSample.dts && (i || e.detectLargeGap(this.nextAudioDts, f)) && (i && (this.nextAudioDts = i), this._audioLargeGap = this.nextAudioDts - f.dts, e.doFixLargeGap(n, this._audioLargeGap)), this._firstVideoSample && t) {
            var c = this._firstVideoSample.originDts || this._firstVideoSample.dts,
                p = d.dts - c;if (p > a.refSampleDuration && p < 10 * a.refSampleDuration) {
              for (var v = Math.floor((d.dts - c) / a.refSampleDuration), E = 0; E < v; E++) {
                var y = { data: h, datasize: h.byteLength, dts: d.dts - (E + 1) * a.refSampleDuration, filtered: 0 };n.unshift(y), this.filledAudioSamples.push({ dts: y.dts, size: y.data.byteLength });
              }this._firstAudioSample = this.filledAudioSamples[0] || this._firstAudioSample;
            } else p < -1 * a.refSampleDuration && (this._audioLargeGap = -1 * p, e.doFixLargeGap(n, -1 * p));
          }var m = void 0,
              _ = n[0].dts;if (this.nextAudioDts) {
            m = _ - this.nextAudioDts;var g = Math.abs(m);if (g > a.refSampleDuration && 1 === u && 1 === this.lastAudioSamplesLen && (a.refSampleDurationFixed = void 0), m > 2 * a.refSampleDuration && m < 10 * a.refSampleDuration) {
              if (1 === u && 1 === this.lastAudioSamplesLen) a.refSampleDurationFixed = void 0 !== a.refSampleDurationFixed ? a.refSampleDurationFixed + m : a.refSampleDuration + m;else for (var S = Math.floor(m / a.refSampleDuration), T = 0; T < S; T++) {
                var A = _ - (T + 1) * a.refSampleDuration,
                    b = Object.assign({}, n[0], { dts: A > this.nextAudioDts ? A : this.nextAudioDts });this.filledAudioSamples.push({ dts: b.dts, size: b.data.byteLength }), this.audioTrack.samples.unshift(b);
              }
            } else g <= a.refSampleDuration && g > 0 ? (n[0].dts = this.nextAudioDts, n[0].pts = this.nextAudioDts) : m < 0 && e.doFixLargeGap(n, -1 * m);
          }var k = n[n.length - 1].originDts,
              R = n[n.length - 1].dts,
              D = n.length >= 2 ? k - n[n.length - 2].originDts : a.refSampleDuration;this.lastAudioSamplesLen = u, this.nextAudioDts = a.refSampleDurationFixed ? R + a.refSampleDurationFixed : R + D, this.lastAudioDts = R, n[n.length - 1].duration = D;for (var w = 0, L = n.length; w < L; w++) {
            var C = n[w],
                O = n[w + 1];if (!O) break;var M = O.dts - C.dts;n[w].duration = M;
          }this.audioTrack.samples = e.sortAudioSamples(n);
        }
      } }, { key: "fixChangeStreamVideo", value: function value(e) {
        var t = this.videoTrack,
            i = t.samples,
            r = t.meta,
            n = 0 === e ? this.videoLastSample ? this.videoLastSample.dts : this.getStreamChangeStart(i[0]) : i[e - 1].dts,
            a = i[e].dts;if (Math.abs(n - a) <= 2e3) return i[e].options ? i[e].options.isContinue = !0 : i[e].options = { isContinue: !0 }, this.doFixVideo(!1);this.emit(REMUX_EVENTS$3.DETECT_CHANGE_STREAM_DISCONTINUE), this._videoLargeGap = 0;var s = i.slice(0, e),
            o = i.slice(e),
            l = i[0],
            u = void 0;l.options && l.options.start ? u = l.options && l.options.start ? l.options.start : null : this.videoLastSample && (u = this.videoLastSample.dts - this.dtsBase + r.refSampleDuration), this.videoTrack.samples = i.slice(0, e), this.doFixVideo(!1), this.videoTrack.samples = i.slice(e), this.doFixVideo(!1, u), this.videoTrack.samples = s.concat(o);
      } }, { key: "fixChangeStreamAudio", value: function value(e) {
        var t = this.audioTrack,
            i = t.samples,
            r = t.meta,
            n = 0 === e ? this.getStreamChangeStart(i[0]) : i[e - 1].dts,
            a = i[e].dts;if (Math.abs(n - a) <= 2e3) return i[e].options ? i[e].options.isContinue = !0 : i[e].options = { isContinue: !0 }, this.doFixAudio(!1);this.emit(REMUX_EVENTS$3.DETECT_CHANGE_STREAM_DISCONTINUE), this._audioLargeGap = 0;var s = i.slice(0, e),
            o = i.slice(e),
            l = i[0],
            u = void 0;u = l.options && l.options.start ? l.options && l.options.start ? l.options.start : null : this.lastAudioDts - this.dtsBase + r.refSampleDuration, this.audioTrack.samples = s, this.doFixAudio(!1), this.audioTrack.samples = o, this.doFixAudio(!1, u), this.audioTrack.samples = s.concat(o);
      } }, { key: "getFirstSample", value: function value() {
        var t = this.videoTrack.samples,
            i = this.audioTrack.samples,
            r = !1,
            n = !1;return !this._firstVideoSample && t.length && (this._firstVideoSample = e.findFirstVideoSample(t), this.removeInvalidSamples(), r = !0), !this._firstAudioSample && i.length && (this._firstAudioSample = e.findFirstAudioSample(i), this.removeInvalidSamples(), n = !0), { isFirstVideoSamples: r, isFirstAudioSamples: n };
      } }, { key: "fixRefSampleDuration", value: function value(e, t) {
        var i = "video" === e.type,
            r = i ? this.allVideoSamplesCount : this.allAudioSamplesCount,
            n = i ? this._firstVideoSample.dts : this._firstAudioSample.dts,
            a = i ? this.filledVideoSamples.length : this.filledAudioSamples.length;if (!e.refSampleDuration || e.refSampleDuration <= 0 || Number.isNaN(e.refSampleDuration)) {
          if (t.length >= 1) {
            var s = t[t.length - 1].dts;e.refSampleDuration = Math.floor((s - n) / (r + a - 1));
          }
        } else if (e.refSampleDuration && t.length >= 5) {
          var o = (t[t.length - 1].dts - t[0].dts) / (t.length - 1);o > 0 && o < 1e3 && (e.refSampleDuration = Math.floor(Math.abs(e.refSampleDuration - o) <= 5 ? e.refSampleDuration : o));
        }
      } }, { key: "recordSamplesCount", value: function value() {
        var e = this.audioTrack,
            t = this.videoTrack;this.allAudioSamplesCount += e.samples.length, this.allVideoSamplesCount += t.samples.length;
      } }, { key: "removeInvalidSamples", value: function value() {
        var e = this._firstVideoSample,
            t = this._firstAudioSample;t && (this.audioTrack.samples = this.audioTrack.samples.filter(function (e, i) {
          return e === t || e.dts > t.dts;
        })), e && (this.videoTrack.samples = this.videoTrack.samples.filter(function (t, i) {
          return t === e || t.dts > e.dts;
        }));
      } }, { key: "getStreamChangeStart", value: function value(e) {
        return e.options && e.options.start ? e.options.start - this.dtsBase : 1 / 0;
      } }, { key: "tracks", get: function get() {
        return this._context.getInstance("TRACKS");
      } }, { key: "audioTrack", get: function get() {
        return this.tracks && this.tracks.audioTrack ? this.tracks.audioTrack : { samples: [], meta: {} };
      } }, { key: "videoTrack", get: function get() {
        return this.tracks && this.tracks.videoTrack ? this.tracks.videoTrack : { samples: [], meta: {} };
      } }, { key: "dtsBase", get: function get() {
        var e = this._context.getInstance("MP4_REMUXER");return e ? e._dtsBase : 0;
      } }], [{ key: "sortAudioSamples", value: function value(e) {
        return 1 === e.length ? e : e.sort(function (e, t) {
          return e.dts - t.dts;
        });
      } }, { key: "findFirstAudioSample", value: function value(t) {
        return t && 0 !== t.length ? e.sortAudioSamples(t)[0] : null;
      } }, { key: "findFirstVideoSample", value: function value(e) {
        if (!e.length) return null;for (var t = e.sort(function (e, t) {
          return e.dts - t.dts;
        }), i = 0, r = t.length; i < r; i++) {
          if (t[i].isKeyframe) return t[i];
        }
      } }, { key: "detectLargeGap", value: function value(e, t) {
        if (null !== e) {
          var i = t.dts || 0,
              r = e - i >= 1e3 || i - e >= 1e3,
              n = t.options && t.options.discontinue;return r || n;
        }
      } }, { key: "doFixLargeGap", value: function value(e, t) {
        for (var i = 0, r = e.length; i < r; i++) {
          var n = e[i];n.dts += t, n.pts && (n.pts += t);
        }
      } }, { key: "detactChangeStream", value: function value(e) {
        for (var t = !1, i = -1, r = 0, n = e.length; r < n; r++) {
          if (e[r].options && e[r].options.meta) {
            t = !0, i = r;break;
          }
        }return { changed: t, changedIdx: i };
      } }]), e;
  }(),
      Compatibility$1 = Compatibility,
      REMUX_EVENTS$4 = EVENTS.REMUX_EVENTS,
      DEMUX_EVENTS$3 = EVENTS.DEMUX_EVENTS,
      LOADER_EVENTS$3 = EVENTS.LOADER_EVENTS,
      MSE_EVENTS$2 = EVENTS.MSE_EVENTS,
      Tag = "FLVController",
      Logger = function () {
    function e() {
      classCallCheck$1(this, e);
    }return createClass$1(e, [{ key: "warn", value: function value() {} }]), e;
  }(),
      FLV_ERROR = "FLV_ERROR",
      FlvController = function () {
    function e(t, i) {
      classCallCheck$1(this, e), this.TAG = Tag, this._player = t, this.state = { initSegmentArrived: !1, randomAccessPoints: [] }, this.mse = i, this.bufferClearTimer = null, this._handleTimeUpdate = this._handleTimeUpdate.bind(this);
    }return createClass$1(e, [{ key: "init", value: function value() {
        this.mse || (this.mse = new Mse({ container: this._player.video }, this._context), this.mse.init()), this.initComponents(), this.initListeners();
      } }, { key: "initComponents", value: function value() {
        this._context.registry("FETCH_LOADER", FetchLoader), this._context.registry("LOADER_BUFFER", XgBuffer$1), this._context.registry("FLV_DEMUXER", FlvDemuxer), this._context.registry("TRACKS", Tracks$1), this._context.registry("MP4_REMUXER", Mp4Remuxer)(this._player.currentTime), this._context.registry("PRE_SOURCE_BUFFER", PreSource$1), !1 !== this._player.config.compatibility && this._context.registry("COMPATIBILITY", Compatibility$1), this._context.registry("LOGGER", Logger);
      } }, { key: "initListeners", value: function value() {
        this.on(LOADER_EVENTS$3.LOADER_DATALOADED, this._handleLoaderDataLoaded.bind(this)), this.on(LOADER_EVENTS$3.LOADER_ERROR, this._handleNetworkError.bind(this)), this.on(DEMUX_EVENTS$3.MEDIA_INFO, this._handleMediaInfo.bind(this)), this.on(DEMUX_EVENTS$3.METADATA_PARSED, this._handleMetadataParsed.bind(this)), this.on(DEMUX_EVENTS$3.DEMUX_COMPLETE, this._handleDemuxComplete.bind(this)), this.on(DEMUX_EVENTS$3.DEMUX_ERROR, this._handleDemuxError.bind(this)), this.on(REMUX_EVENTS$4.INIT_SEGMENT, this._handleAppendInitSegment.bind(this)), this.on(REMUX_EVENTS$4.MEDIA_SEGMENT, this._handleMediaSegment.bind(this)), this.on(REMUX_EVENTS$4.RANDOM_ACCESS_POINT, this._handleAddRAP.bind(this)), this.on(MSE_EVENTS$2.SOURCE_UPDATE_END, this._handleSourceUpdateEnd.bind(this)), this._player.on("timeupdate", this._handleTimeUpdate);
      } }, { key: "_handleMediaInfo", value: function value() {
        this._context.mediaInfo || this.emit(DEMUX_EVENTS$3.DEMUX_ERROR, new Error("failed to get mediainfo"));
      } }, { key: "_handleLoaderDataLoaded", value: function value() {
        this.emitTo("FLV_DEMUXER", DEMUX_EVENTS$3.DEMUX_START);
      } }, { key: "_handleMetadataParsed", value: function value(e) {
        this.emit(REMUX_EVENTS$4.REMUX_METADATA, e);
      } }, { key: "_handleDemuxComplete", value: function value() {
        this.emit(REMUX_EVENTS$4.REMUX_MEDIA);
      } }, { key: "_handleAppendInitSegment", value: function value() {
        this.state.initSegmentArrived = !0, this.mse.addSourceBuffers();
      } }, { key: "_handleMediaSegment", value: function value() {
        this.mse.addSourceBuffers(), this.mse.doAppend();
      } }, { key: "_handleSourceUpdateEnd", value: function value() {
        var e = this._player.currentTime,
            t = this._player.video,
            i = this._player.config.preloadTime || 5,
            r = t.buffered.length;if (0 !== r) {
          var n = t.buffered.end(r - 1);n - e > 2 * i && (this._player.currentTime = n - i), this.mse.doAppend();
        }
      } }, { key: "_handleTimeUpdate", value: function value() {
        var e = this,
            t = this._player.currentTime,
            i = this._player.video,
            r = i.buffered;if (r && r.length) {
          var n = [0, 0],
              a = i.currentTime;if (r) for (var s = 0, o = r.length; s < o && (n[0] = r.start(s), n[1] = r.end(s), !(n[0] <= a && a <= n[1])); s++) {}var l = n[0],
              u = n[1];if (a > u || a < l) return void (i.currentTime = l);if (t - l > 10 || r.length > 1) {
            if (this.bufferClearTimer || !this.state.randomAccessPoints.length) return;for (var h = 1 / 0, d = 0; d < this.state.randomAccessPoints.length; d++) {
              var f = Math.ceil(this.state.randomAccessPoints[d] / 1e3);if (f > t - 10) break;h = f;
            }this.mse.remove(Math.max(Math.min(h, t - 10, u - 10), .1), 0), this.bufferClearTimer = setTimeout(function () {
              e.bufferClearTimer = null;
            }, 5e3);
          }
        }
      } }, { key: "_handleNetworkError", value: function value(e, t) {
        this._player.emit("error", new Player.Errors("network", this._player.config.url)), this._onError(LOADER_EVENTS$3.LOADER_ERROR, e, t, !0);
      } }, { key: "_handleDemuxError", value: function value(e, t, i) {
        void 0 === i && (i = !1), this._player.emit("error", new Player.Errors("parse", this._player.config.url)), this._onError(DEMUX_EVENTS$3.DEMUX_ERROR, e, t, i);
      } }, { key: "_handleAddRAP", value: function value(e) {
        this.state.randomAccessPoints && this.state.randomAccessPoints.push(e);
      } }, { key: "_onError", value: function value(e, t, i, r) {
        var n = { errorType: e, errorDetails: "[" + t + "]: " + i.message, errorFatal: r || !1 };this._player.emit(FLV_ERROR, n);
      } }, { key: "seek", value: function value() {
        this.state.initSegmentArrived || this.loadData();
      } }, { key: "loadData", value: function value() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._player.config.url;this.emit(LOADER_EVENTS$3.LADER_START, e);
      } }, { key: "pause", value: function value() {
        var e = this._context.getInstance("FETCH_LOADER");e && e.cancel();
      } }, { key: "destroy", value: function value() {
        this._player.off("timeupdate", this._handleTimeUpdate), this._player = null, this.mse = null, this.state.randomAccessPoints = [];
      } }]), e;
  }(),
      flvAllowedEvents = EVENTS.FlvAllowedEvents,
      FlvPlayer = function (e) {
    function t(e) {
      classCallCheck$1(this, t);var i = possibleConstructorReturn$1(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));return i.context = new Context$1(flvAllowedEvents), i.initEvents(), i.loaderCompleteTimer = null, i;
    }return inherits$1(t, e), createClass$1(t, [{ key: "start", value: function value() {
        this.initFlv(), this.context.init(), get$1(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "start", this).call(this, this.flv.mse.url), this.loadData();
      } }, { key: "initFlvEvents", value: function value(e) {
        var t = this,
            i = this;e.once(EVENTS.REMUX_EVENTS.INIT_SEGMENT, function () {
          if (Player.util.addClass(i.root, "xgplayer-is-live"), !Player.util.findDom(t.root, "xg-live")) {
            var e = Player.util.createDom("xg-live", "正在直播", {}, "xgplayer-live");i.controls.appendChild(e);
          }
        }), e.once(EVENTS.LOADER_EVENTS.LOADER_COMPLETE, function () {
          i.paused ? i.emit("ended") : t.loaderCompleteTimer = setInterval(function () {
            var e = i.getBufferedRange()[1];Math.abs(i.currentTime - e) < .5 && (i.emit("ended"), window.clearInterval(t.loaderCompleteTimer));
          }, 200);
        });
      } }, { key: "initFlvBackupEvents", value: function value(e, t) {
        var i = this,
            r = 3;e.on(EVENTS.REMUX_EVENTS.MEDIA_SEGMENT, function () {
          0 === (r -= 1) && (i.flv = e, i.mse.resetContext(t), i.context.destroy(), i.context = t);
        }), e.once(EVENTS.LOADER_EVENTS.LOADER_COMPLETE, function () {
          i.paused ? i.emit("ended") : i.loaderCompleteTimer = setInterval(function () {
            var e = i.getBufferedRange()[1];Math.abs(i.currentTime - e) < .5 && (i.emit("ended"), window.clearInterval(i.loaderCompleteTimer));
          }, 200);
        }), e.once(EVENTS.LOADER_EVENTS.LOADER_ERROR, function () {
          t.destroy();
        });
      } }, { key: "initEvents", value: function value() {
        var e = this;this.on("seeking", function () {
          var t = e.currentTime,
              i = e.getBufferedRange();(t > i[1] || t < i[0]) && e.flv.seek(e.currentTime);
        });
      } }, { key: "initFlv", value: function value() {
        var e = this.context.registry("FLV_CONTROLLER", FlvController)(this);return this.initFlvEvents(e), this.flv = e, this.mse = e.mse, e;
      } }, { key: "play", value: function value() {
        var e = this;return this._hasStart ? this._destroy().then(function () {
          return e.context = new Context$1(flvAllowedEvents), e.start(), get$1(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "play", e).call(e);
        }) : get$1(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "play", this).call(this);
      } }, { key: "pause", value: function value() {
        get$1(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "pause", this).call(this), this.flv && this.flv.pause();
      } }, { key: "loadData", value: function value() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.currentTime;this.flv && this.flv.seek(e);
      } }, { key: "destroy", value: function value() {
        var e = this;this._destroy().then(function () {
          get$1(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "destroy", e).call(e);
        });
      } }, { key: "_destroy", value: function value() {
        var e = this;return this.flv.mse.destroy().then(function () {
          e.context.destroy(), e.flv = null, e.context = null, e.loaderCompleteTimer && window.clearInterval(e.loaderCompleteTimer);
        });
      } }, { key: "switchURL", value: function value(e) {
        var t = new Context$1(flvAllowedEvents),
            i = t.registry("FLV_CONTROLLER", FlvController)(this, this.mse);t.init(), this.initFlvBackupEvents(i, t), i.loadData(e);
      } }, { key: "src", get: function get() {
        return this.currentSrc;
      }, set: function set(e) {
        this.switchURL(e);
      } }], [{ key: "isSupported", value: function value() {
        return window.MediaSource && window.MediaSource.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"');
      } }]), t;
  }(Player);

  function EventHandlers$1() {}function EventEmitter$1() {
    EventEmitter$1.init.call(this);
  }function $getMaxListeners$1(e) {
    return void 0 === e._maxListeners ? EventEmitter$1.defaultMaxListeners : e._maxListeners;
  }function emitNone$1(e, t, i) {
    if (t) e.call(i);else for (var r = e.length, n = arrayClone$1(e, r), a = 0; a < r; ++a) {
      n[a].call(i);
    }
  }function emitOne$1(e, t, i, r) {
    if (t) e.call(i, r);else for (var n = e.length, a = arrayClone$1(e, n), s = 0; s < n; ++s) {
      a[s].call(i, r);
    }
  }function emitTwo$1(e, t, i, r, n) {
    if (t) e.call(i, r, n);else for (var a = e.length, s = arrayClone$1(e, a), o = 0; o < a; ++o) {
      s[o].call(i, r, n);
    }
  }function emitThree$1(e, t, i, r, n, a) {
    if (t) e.call(i, r, n, a);else for (var s = e.length, o = arrayClone$1(e, s), u = 0; u < s; ++u) {
      o[u].call(i, r, n, a);
    }
  }function emitMany$1(e, t, i, r) {
    if (t) e.apply(i, r);else for (var n = e.length, a = arrayClone$1(e, n), s = 0; s < n; ++s) {
      a[s].apply(i, r);
    }
  }function _addListener$1(e, t, i, r) {
    var n, a, s;if ("function" != typeof i) throw new TypeError('"listener" argument must be a function');if (a = e._events, a ? (a.newListener && (e.emit("newListener", t, i.listener ? i.listener : i), a = e._events), s = a[t]) : (a = e._events = new EventHandlers$1(), e._eventsCount = 0), s) {
      if ("function" == typeof s ? s = a[t] = r ? [i, s] : [s, i] : r ? s.unshift(i) : s.push(i), !s.warned && (n = $getMaxListeners$1(e)) && n > 0 && s.length > n) {
        s.warned = !0;var o = new Error("Possible EventEmitter memory leak detected. " + s.length + " " + t + " listeners added. Use emitter.setMaxListeners() to increase limit");o.name = "MaxListenersExceededWarning", o.emitter = e, o.type = t, o.count = s.length, emitWarning$1(o);
      }
    } else s = a[t] = i, ++e._eventsCount;return e;
  }function emitWarning$1(e) {
    "function" == typeof console.warn ? console.warn(e) : console.log(e);
  }function _onceWrap$1(e, t, i) {
    function r() {
      e.removeListener(t, r), n || (n = !0, i.apply(e, arguments));
    }var n = !1;return r.listener = i, r;
  }function listenerCount$1(e) {
    var t = this._events;if (t) {
      var i = t[e];if ("function" == typeof i) return 1;if (i) return i.length;
    }return 0;
  }function spliceOne$1(e, t) {
    for (var i = t, r = i + 1, n = e.length; r < n; i += 1, r += 1) {
      e[i] = e[r];
    }e.pop();
  }function arrayClone$1(e, t) {
    for (var i = new Array(t); t--;) {
      i[t] = e[t];
    }return i;
  }function unwrapListeners$1(e) {
    for (var t = new Array(e.length), i = 0; i < t.length; ++i) {
      t[i] = e[i].listener || e[i];
    }return t;
  }function unwrapExports$1(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
  }function createCommonjsModule$1(e, t) {
    return t = { exports: {} }, e(t, t.exports), t.exports;
  }var _typeof$2 = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
    return typeof e === "undefined" ? "undefined" : _typeof(e);
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof(e);
  },
      classCallCheck$2 = function classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  },
      createClass$2 = function () {
    function e(e, t) {
      for (var i = 0; i < t.length; i++) {
        var r = t[i];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }return function (t, i, r) {
      return i && e(t.prototype, i), r && e(t, r), t;
    };
  }(),
      get$2 = function e(t, i, r) {
    null === t && (t = Function.prototype);var n = Object.getOwnPropertyDescriptor(t, i);if (void 0 === n) {
      var a = Object.getPrototypeOf(t);return null === a ? void 0 : e(a, i, r);
    }if ("value" in n) return n.value;var s = n.get;if (void 0 !== s) return s.call(r);
  },
      inherits$2 = function inherits(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
  },
      possibleConstructorReturn$2 = function possibleConstructorReturn(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
  };!function (e) {
    var t = e.babelHelpers = {};t.typeof = function (e) {
      return void 0 === e ? "undefined" : _typeof$2(e);
    }, t.classCallCheck = function (e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }, t.createClass = function () {
      function e(e, t) {
        for (var i = 0; i < t.length; i++) {
          var r = t[i];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
        }
      }return function (t, i, r) {
        return i && e(t.prototype, i), r && e(t, r), t;
      };
    }(), t.defineEnumerableProperties = function (e, t) {
      for (var i in t) {
        var r = t[i];r.configurable = r.enumerable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, i, r);
      }return e;
    }, t.defaults = function (e, t) {
      for (var i = Object.getOwnPropertyNames(t), r = 0; r < i.length; r++) {
        var n = i[r],
            a = Object.getOwnPropertyDescriptor(t, n);a && a.configurable && void 0 === e[n] && Object.defineProperty(e, n, a);
      }return e;
    }, t.defineProperty = function (e, t, i) {
      return t in e ? Object.defineProperty(e, t, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = i, e;
    }, t.extends = Object.assign || function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var i = arguments[t];for (var r in i) {
          Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r]);
        }
      }return e;
    }, t.get = function e(t, i, r) {
      null === t && (t = Function.prototype);var n = Object.getOwnPropertyDescriptor(t, i);if (void 0 === n) {
        var a = Object.getPrototypeOf(t);return null === a ? void 0 : e(a, i, r);
      }if ("value" in n) return n.value;var s = n.get;if (void 0 !== s) return s.call(r);
    }, t.inherits = function (e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : _typeof$2(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }, t.instanceof = function (e, t) {
      return null != t && "undefined" != typeof Symbol && t[Symbol.hasInstance] ? t[Symbol.hasInstance](e) : e instanceof t;
    }, t.interopRequireDefault = function (e) {
      return e && e.__esModule ? e : { default: e };
    }, t.interopRequireWildcard = function (e) {
      if (e && e.__esModule) return e;var t = {};if (null != e) for (var i in e) {
        Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
      }return t.default = e, t;
    }, t.newArrowCheck = function (e, t) {
      if (e !== t) throw new TypeError("Cannot instantiate an arrow function");
    }, t.objectDestructuringEmpty = function (e) {
      if (null == e) throw new TypeError("Cannot destructure undefined");
    }, t.objectWithoutProperties = function (e, t) {
      var i = {};for (var r in e) {
        t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (i[r] = e[r]);
      }return i;
    }, t.possibleConstructorReturn = function (e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" !== (void 0 === t ? "undefined" : _typeof$2(t)) && "function" != typeof t ? e : t;
    }, t.selfGlobal = void 0 === e ? self : e, t.set = function e(t, i, r, n) {
      var a = Object.getOwnPropertyDescriptor(t, i);if (void 0 === a) {
        var s = Object.getPrototypeOf(t);null !== s && e(s, i, r, n);
      } else if ("value" in a && a.writable) a.value = r;else {
        var o = a.set;void 0 !== o && o.call(n, r);
      }return r;
    }, t.slicedToArray = function () {
      function e(e, t) {
        var i = [],
            r = !0,
            n = !1,
            a = void 0;try {
          for (var s, o = e[Symbol.iterator](); !(r = (s = o.next()).done) && (i.push(s.value), !t || i.length !== t); r = !0) {}
        } catch (e) {
          n = !0, a = e;
        } finally {
          try {
            !r && o.return && o.return();
          } finally {
            if (n) throw a;
          }
        }return i;
      }return function (t, i) {
        if (Array.isArray(t)) return t;if (Symbol.iterator in Object(t)) return e(t, i);throw new TypeError("Invalid attempt to destructure non-iterable instance");
      };
    }(), t.slicedToArrayLoose = function (e, t) {
      if (Array.isArray(e)) return e;if (Symbol.iterator in Object(e)) {
        for (var i, r = [], n = e[Symbol.iterator](); !(i = n.next()).done && (r.push(i.value), !t || r.length !== t);) {}return r;
      }throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }, t.taggedTemplateLiteral = function (e, t) {
      return Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
    }, t.taggedTemplateLiteralLoose = function (e, t) {
      return e.raw = t, e;
    }, t.temporalRef = function (e, t, i) {
      if (e === i) throw new ReferenceError(t + " is not defined - temporal dead zone");return e;
    }, t.temporalUndefined = {}, t.toArray = function (e) {
      return Array.isArray(e) ? e : Array.from(e);
    }, t.toConsumableArray = function (e) {
      if (Array.isArray(e)) {
        for (var t = 0, i = Array(e.length); t < e.length; t++) {
          i[t] = e[t];
        }return i;
      }return Array.from(e);
    };
  }("undefined" == typeof global ? self : global);var isObjectFilled$1 = function isObjectFilled(e) {
    for (var t in e) {
      if (e.hasOwnProperty(t) && null === e[t]) return !1;
    }return !0;
  },
      MediaInfo$1 = function () {
    function e() {
      classCallCheck(this, e), this.mimeType = null, this.duration = null, this.hasVideo = null, this.video = { codec: null, width: null, height: null, profile: null, level: null, frameRate: { fixed: !0, fps: 25, fps_num: 25e3, fps_den: 1e3 }, chromaFormat: null, parRatio: { width: 1, height: 1 } }, this.hasAudio = null, this.audio = { codec: null, sampleRate: null, sampleRateIndex: null, channelCount: null };
    }return createClass(e, [{ key: "isComplete", value: function value() {
        return e.isBaseInfoReady(this) && e.isVideoReady(this) && e.isAudioReady(this);
      } }], [{ key: "isBaseInfoReady", value: function value(e) {
        return isObjectFilled$1(e);
      } }, { key: "isVideoReady", value: function value(e) {
        return !e.hasVideo || isObjectFilled$1(e.video);
      } }, { key: "isAudioReady", value: function value(e) {
        return !e.hasAudio || isObjectFilled$1(e.video);
      } }]), e;
  }(),
      domain$1;EventHandlers$1.prototype = Object.create(null), EventEmitter$1.EventEmitter = EventEmitter$1, EventEmitter$1.usingDomains = !1, EventEmitter$1.prototype.domain = void 0, EventEmitter$1.prototype._events = void 0, EventEmitter$1.prototype._maxListeners = void 0, EventEmitter$1.defaultMaxListeners = 10, EventEmitter$1.init = function () {
    this.domain = null, EventEmitter$1.usingDomains && domain$1.active && domain$1.Domain, this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = new EventHandlers$1(), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
  }, EventEmitter$1.prototype.setMaxListeners = function (e) {
    if ("number" != typeof e || e < 0 || isNaN(e)) throw new TypeError('"n" argument must be a positive number');return this._maxListeners = e, this;
  }, EventEmitter$1.prototype.getMaxListeners = function () {
    return $getMaxListeners$1(this);
  }, EventEmitter$1.prototype.emit = function (e) {
    var t,
        i,
        r,
        n,
        a,
        s,
        o,
        u = "error" === e;if (s = this._events) u = u && null == s.error;else if (!u) return !1;if (o = this.domain, u) {
      if (t = arguments[1], !o) {
        if (t instanceof Error) throw t;var l = new Error('Uncaught, unspecified "error" event. (' + t + ")");throw l.context = t, l;
      }return t || (t = new Error('Uncaught, unspecified "error" event')), t.domainEmitter = this, t.domain = o, t.domainThrown = !1, o.emit("error", t), !1;
    }if (!(i = s[e])) return !1;var h = "function" == typeof i;switch (r = arguments.length) {case 1:
        emitNone$1(i, h, this);break;case 2:
        emitOne$1(i, h, this, arguments[1]);break;case 3:
        emitTwo$1(i, h, this, arguments[1], arguments[2]);break;case 4:
        emitThree$1(i, h, this, arguments[1], arguments[2], arguments[3]);break;default:
        for (n = new Array(r - 1), a = 1; a < r; a++) {
          n[a - 1] = arguments[a];
        }emitMany$1(i, h, this, n);}return !0;
  }, EventEmitter$1.prototype.addListener = function (e, t) {
    return _addListener$1(this, e, t, !1);
  }, EventEmitter$1.prototype.on = EventEmitter$1.prototype.addListener, EventEmitter$1.prototype.prependListener = function (e, t) {
    return _addListener$1(this, e, t, !0);
  }, EventEmitter$1.prototype.once = function (e, t) {
    if ("function" != typeof t) throw new TypeError('"listener" argument must be a function');return this.on(e, _onceWrap$1(this, e, t)), this;
  }, EventEmitter$1.prototype.prependOnceListener = function (e, t) {
    if ("function" != typeof t) throw new TypeError('"listener" argument must be a function');return this.prependListener(e, _onceWrap$1(this, e, t)), this;
  }, EventEmitter$1.prototype.removeListener = function (e, t) {
    var i, r, n, a, s;if ("function" != typeof t) throw new TypeError('"listener" argument must be a function');if (!(r = this._events)) return this;if (!(i = r[e])) return this;if (i === t || i.listener && i.listener === t) 0 == --this._eventsCount ? this._events = new EventHandlers$1() : (delete r[e], r.removeListener && this.emit("removeListener", e, i.listener || t));else if ("function" != typeof i) {
      for (n = -1, a = i.length; a-- > 0;) {
        if (i[a] === t || i[a].listener && i[a].listener === t) {
          s = i[a].listener, n = a;break;
        }
      }if (n < 0) return this;if (1 === i.length) {
        if (i[0] = void 0, 0 == --this._eventsCount) return this._events = new EventHandlers$1(), this;delete r[e];
      } else spliceOne$1(i, n);r.removeListener && this.emit("removeListener", e, s || t);
    }return this;
  }, EventEmitter$1.prototype.removeAllListeners = function (e) {
    var t, i;if (!(i = this._events)) return this;if (!i.removeListener) return 0 === arguments.length ? (this._events = new EventHandlers$1(), this._eventsCount = 0) : i[e] && (0 == --this._eventsCount ? this._events = new EventHandlers$1() : delete i[e]), this;if (0 === arguments.length) {
      for (var r, n = Object.keys(i), a = 0; a < n.length; ++a) {
        "removeListener" !== (r = n[a]) && this.removeAllListeners(r);
      }return this.removeAllListeners("removeListener"), this._events = new EventHandlers$1(), this._eventsCount = 0, this;
    }if ("function" == typeof (t = i[e])) this.removeListener(e, t);else if (t) do {
      this.removeListener(e, t[t.length - 1]);
    } while (t[0]);return this;
  }, EventEmitter$1.prototype.listeners = function (e) {
    var t,
        i = this._events;return i && (t = i[e]) ? "function" == typeof t ? [t.listener || t] : unwrapListeners$1(t) : [];
  }, EventEmitter$1.listenerCount = function (e, t) {
    return "function" == typeof e.listenerCount ? e.listenerCount(t) : listenerCount$1.call(e, t);
  }, EventEmitter$1.prototype.listenerCount = listenerCount$1, EventEmitter$1.prototype.eventNames = function () {
    return this._eventsCount > 0 ? Reflect.ownKeys(this._events) : [];
  };var DIRECT_EMIT_FLAG$1 = "__TO__",
      Context$2 = function () {
    function e() {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];classCallCheck(this, e), this._emitter = new EventEmitter$1(), this._emitter.off || (this._emitter.off = this._emitter.removeListener), this._instanceMap = {}, this._clsMap = {}, this._inited = !1, this.mediaInfo = new MediaInfo$1(), this.allowedEvents = t, this._hooks = {};
    }return createClass(e, [{ key: "getInstance", value: function value(e) {
        var t = this._instanceMap[e];return t || null;
      } }, { key: "initInstance", value: function value(e) {
        for (var t = arguments.length, i = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) {
          i[r - 1] = arguments[r];
        }var n = i[0],
            a = i[1],
            s = i[2],
            o = i[3];if (this._clsMap[e]) {
          var u = new this._clsMap[e](n, a, s, o);return this._instanceMap[e] = u, u.init && u.init(), u;
        }throw new Error(e + "未在context中注册");
      } }, { key: "init", value: function value(e) {
        if (!this._inited) {
          for (var t in this._clsMap) {
            this._clsMap.hasOwnProperty(t) && !this._instanceMap[t] && this.initInstance(t, e);
          }this._inited = !0;
        }
      } }, { key: "registry", value: function value(e, t) {
        var i = this,
            r = this._emitter,
            n = this._isMessageNameValid.bind(this),
            a = this,
            s = function (t) {
          function i(t, r, n) {
            classCallCheck(this, i);var s = possibleConstructorReturn(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, t, r, n));return s.listeners = {}, s.onceListeners = {}, s.TAG = e, s._context = a, s;
          }return inherits(i, t), createClass(i, [{ key: "on", value: function value(t, i) {
              return n(t), this.listeners[t] ? this.listeners[t].push(i) : this.listeners[t] = [i], r.on("" + t + DIRECT_EMIT_FLAG$1 + e, i), r.on(t, i);
            } }, { key: "before", value: function value(e, t) {
              n(e), a._hooks[e] ? a._hooks[e].push(t) : a._hooks[e] = [t];
            } }, { key: "once", value: function value(t, i) {
              return n(t), this.onceListeners[t] ? this.onceListeners[t].push(i) : this.onceListeners[t] = [i], r.once("" + t + DIRECT_EMIT_FLAG$1 + e, i), r.once(t, i);
            } }, { key: "emit", value: function value(e) {
              n(e);var t = a._hooks ? a._hooks[e] : null;if (t) for (var i = 0, s = t.length; i < s; i++) {
                (0, t[i])();
              }for (var o = arguments.length, u = Array(o > 1 ? o - 1 : 0), l = 1; l < o; l++) {
                u[l - 1] = arguments[l];
              }return r.emit.apply(r, [e].concat(u));
            } }, { key: "emitTo", value: function value(e, t) {
              n(t);for (var i = arguments.length, a = Array(i > 2 ? i - 2 : 0), s = 2; s < i; s++) {
                a[s - 2] = arguments[s];
              }return r.emit.apply(r, ["" + t + DIRECT_EMIT_FLAG$1 + e].concat(a));
            } }, { key: "off", value: function value(e, t) {
              return n(e), r.off(e, t);
            } }, { key: "removeListeners", value: function value() {
              var t = Object.prototype.hasOwnProperty.bind(this.listeners);for (var i in this.listeners) {
                if (t(i)) for (var n = this.listeners[i] || [], a = 0; a < n.length; a++) {
                  var s = n[a];r.off(i, s), r.off("" + i + DIRECT_EMIT_FLAG$1 + e, s);
                }
              }for (var o in this.onceListeners) {
                if (t(o)) for (var u = this.onceListeners[o] || [], l = 0; l < u.length; l++) {
                  var h = u[l];r.off(o, h), r.off("" + o + DIRECT_EMIT_FLAG$1 + e, h);
                }
              }
            } }, { key: "destroy", value: function value() {
              if (this.removeListeners(), this.listeners = {}, delete a._instanceMap[e], get(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "destroy", this)) return get(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "destroy", this).call(this);
            } }]), i;
        }(t);return this._clsMap[e] = s, function () {
          for (var t = arguments.length, r = Array(t), n = 0; n < t; n++) {
            r[n] = arguments[n];
          }return i.initInstance.apply(i, [e].concat(r));
        };
      } }, { key: "destroyInstances", value: function value() {
        var e = this;Object.keys(this._instanceMap).forEach(function (t) {
          e._instanceMap[t].destroy && e._instanceMap[t].destroy();
        });
      } }, { key: "destroy", value: function value() {
        this._emitter = null, this.allowedEvents = [], this._clsMap = null, this._context = null, this._hooks = null, this.destroyInstances();
      } }, { key: "_isMessageNameValid", value: function value(e) {
        if (!this.allowedEvents.indexOf(e) < 0) throw new Error("unregistered message name: " + e);
      } }]), e;
  }(),
      LOADER_EVENTS$4 = { LADER_START: "LOADER_START", LOADER_DATALOADED: "LOADER_DATALOADED", LOADER_COMPLETE: "LOADER_COMPLETE", LOADER_ERROR: "LOADER_ERROR" },
      DEMUX_EVENTS$4 = { DEMUX_START: "DEMUX_START", DEMUX_COMPLETE: "DEMUX_COMPLETE", DEMUX_ERROR: "DEMUX_ERROR", METADATA_PARSED: "METADATA_PARSED", VIDEO_METADATA_CHANGE: "VIDEO_METADATA_CHANGE", AUDIO_METADATA_CHANGE: "AUDIO_METADATA_CHANGE", MEDIA_INFO: "MEDIA_INFO" },
      REMUX_EVENTS$5 = { REMUX_METADATA: "REMUX_METADATA", REMUX_MEDIA: "REMUX_MEDIA", MEDIA_SEGMENT: "MEDIA_SEGMENT", REMUX_ERROR: "REMUX_ERROR", INIT_SEGMENT: "INIT_SEGMENT", DETECT_CHANGE_STREAM: "DETECT_CHANGE_STREAM", DETECT_CHANGE_STREAM_DISCONTINUE: "DETECT_CHANGE_STREAM_DISCONTINUE", RANDOM_ACCESS_POINT: "RANDOM_ACCESS_POINT" },
      MSE_EVENTS$3 = { SOURCE_UPDATE_END: "SOURCE_UPDATE_END" },
      HLS_EVENTS$2 = { RETRY_TIME_EXCEEDED: "RETRY_TIME_EXCEEDED" },
      CRYTO_EVENTS$3 = { START_DECRYPT: "START_DECRYPT", DECRYPTED: "DECRYPTED" },
      ALLEVENTS$2 = Object.assign({}, LOADER_EVENTS$4, DEMUX_EVENTS$4, REMUX_EVENTS$5, MSE_EVENTS$3, HLS_EVENTS$2),
      FlvAllowedEvents$2 = [],
      HlsAllowedEvents$2 = [];for (var key$2 in ALLEVENTS$2) {
    ALLEVENTS$2.hasOwnProperty(key$2) && FlvAllowedEvents$2.push(ALLEVENTS$2[key$2]);
  }for (var _key$2 in ALLEVENTS$2) {
    ALLEVENTS$2.hasOwnProperty(_key$2) && HlsAllowedEvents$2.push(ALLEVENTS$2[_key$2]);
  }var _EVENTS$1 = { ALLEVENTS: ALLEVENTS$2, HLS_EVENTS: HLS_EVENTS$2, REMUX_EVENTS: REMUX_EVENTS$5, DEMUX_EVENTS: DEMUX_EVENTS$4, MSE_EVENTS: MSE_EVENTS$3, LOADER_EVENTS: LOADER_EVENTS$4, FlvAllowedEvents: FlvAllowedEvents$2, HlsAllowedEvents: HlsAllowedEvents$2, CRYTO_EVENTS: CRYTO_EVENTS$3 },
      le$2 = function () {
    var e = new ArrayBuffer(2);return new DataView(e).setInt16(0, 256, !0), 256 === new Int16Array(e)[0];
  }(),
      sniffer$2 = { get device() {
      var e = sniffer$2.os;return e.isPc ? "pc" : e.isTablet ? "tablet" : "mobile";
    }, get browser() {
      var e = navigator.userAgent.toLowerCase(),
          t = { ie: /rv:([\d.]+)\) like gecko/, firfox: /firefox\/([\d.]+)/, chrome: /chrome\/([\d.]+)/, opera: /opera.([\d.]+)/, safari: /version\/([\d.]+).*safari/ };return [].concat(Object.keys(t).filter(function (i) {
        return t[i].test(e);
      }))[0];
    }, get os() {
      var e = navigator.userAgent,
          t = /(?:Windows Phone)/.test(e),
          i = /(?:SymbianOS)/.test(e) || t,
          r = /(?:Android)/.test(e),
          n = /(?:Firefox)/.test(e),
          a = /(?:iPad|PlayBook)/.test(e) || r && !/(?:Mobile)/.test(e) || n && /(?:Tablet)/.test(e),
          s = /(?:iPhone)/.test(e) && !a;return { isTablet: a, isPhone: s, isAndroid: r, isPc: !s && !r && !i, isSymbian: i, isWindowsPhone: t, isFireFox: n };
    }, get isLe() {
      return le$2;
    } },
      le$1$1 = function () {
    var e = new ArrayBuffer(2);return new DataView(e).setInt16(0, 256, !0), 256 === new Int16Array(e)[0];
  }(),
      UTF8$2 = function () {
    function e() {
      classCallCheck(this, e);
    }return createClass(e, null, [{ key: "decode", value: function value(t) {
        for (var i = [], r = t, n = 0, a = t.length; n < a;) {
          if (r[n] < 128) i.push(String.fromCharCode(r[n])), ++n;else {
            if (r[n] < 192) ;else if (r[n] < 224) {
              if (e._checkContinuation(r, n, 1)) {
                var s = (31 & r[n]) << 6 | 63 & r[n + 1];if (s >= 128) {
                  i.push(String.fromCharCode(65535 & s)), n += 2;continue;
                }
              }
            } else if (r[n] < 240) {
              if (e._checkContinuation(r, n, 2)) {
                var o = (15 & r[n]) << 12 | (63 & r[n + 1]) << 6 | 63 & r[n + 2];if (o >= 2048 && 55296 != (63488 & o)) {
                  i.push(String.fromCharCode(65535 & o)), n += 3;continue;
                }
              }
            } else if (r[n] < 248 && e._checkContinuation(r, n, 3)) {
              var u = (7 & r[n]) << 18 | (63 & r[n + 1]) << 12 | (63 & r[n + 2]) << 6 | 63 & r[n + 3];if (u > 65536 && u < 1114112) {
                u -= 65536, i.push(String.fromCharCode(u >>> 10 | 55296)), i.push(String.fromCharCode(1023 & u | 56320)), n += 4;continue;
              }
            }i.push(String.fromCharCode(65533)), ++n;
          }
        }return i.join("");
      } }, { key: "_checkContinuation", value: function value(e, t, i) {
        var r = e;if (t + i < r.length) {
          for (; i--;) {
            if (128 != (192 & r[++t])) return !1;
          }return !0;
        }return !1;
      } }]), e;
  }(),
      MediaSample$1 = function () {
    function e(t) {
      var i = this;classCallCheck(this, e);var r = e.getDefaultInf();if (!t || "[object Object]" !== Object.prototype.toString.call(t)) return r;var n = Object.assign({}, r, t);Object.entries(n).forEach(function (e) {
        var t = slicedToArray(e, 2),
            r = t[0],
            n = t[1];i[r] = n;
      });
    }return createClass(e, null, [{ key: "getDefaultInf", value: function value() {
        return { dts: null, pts: null, duration: null, position: null, isRAP: !1, originDts: null };
      } }]), e;
  }(),
      MediaSegment$1 = function () {
    function e() {
      classCallCheck(this, e), this.startDts = -1, this.endDts = -1, this.startPts = -1, this.endPts = -1, this.originStartDts = -1, this.originEndDts = -1, this.randomAccessPoints = [], this.firstSample = null, this.lastSample = null;
    }return createClass(e, [{ key: "addRAP", value: function value(e) {
        e.isRAP = !0, this.randomAccessPoints.push(e);
      } }]), e;
  }(),
      MediaSegmentList$2 = function () {
    function e(t) {
      classCallCheck(this, e), this._type = t, this._list = [], this._lastAppendLocation = -1;
    }return createClass(e, [{ key: "isEmpty", value: function value() {
        return 0 === this._list.length;
      } }, { key: "clear", value: function value() {
        this._list = [], this._lastAppendLocation = -1;
      } }, { key: "_searchNearestSegmentBefore", value: function value(e) {
        var t = this._list;if (0 === t.length) return -2;var i = t.length - 1,
            r = 0,
            n = 0,
            a = i,
            s = 0;if (e < t[0].originDts) return s = -1;for (; n <= a;) {
          if ((r = n + Math.floor((a - n) / 2)) === i || e > t[r].lastSample.originDts && e < t[r + 1].originDts) {
            s = r;break;
          }t[r].originDts < e ? n = r + 1 : a = r - 1;
        }return s;
      } }, { key: "_searchNearestSegmentAfter", value: function value(e) {
        return this._searchNearestSegmentBefore(e) + 1;
      } }, { key: "append", value: function value(e) {
        var t = this._list,
            i = this._lastAppendLocation,
            r = 0;-1 !== i && i < t.length && e.originStartDts >= t[i].lastSample.originDts && (i === t.length - 1 || i < t.length - 1 && e.originStartDts < t[i + 1].originStartDts) ? r = i + 1 : t.length > 0 && (r = this._searchNearestSegmentBefore(e.originStartDts) + 1), this._lastAppendLocation = r, this._list.splice(r, 0, e);
      } }, { key: "getLastSegmentBefore", value: function value(e) {
        var t = this._searchNearestSegmentBefore(e);return t >= 0 ? this._list[t] : null;
      } }, { key: "getLastSampleBefore", value: function value(e) {
        var t = this.getLastSegmentBefore(e);return null !== t ? t.lastSample : null;
      } }, { key: "getLastRAPBefore", value: function value(e) {
        for (var t = this._searchNearestSegmentBefore(e), i = this._list[t].randomAccessPoints; 0 === i.length && t > 0;) {
          t--, i = this._list[t].randomAccessPoints;
        }return i.length > 0 ? i[i.length - 1] : null;
      } }, { key: "type", get: function get() {
        return this._type;
      } }, { key: "length", get: function get() {
        return this._list.length;
      } }]), e;
  }(),
      AudioTrackMeta$2 = function () {
    function e(t) {
      classCallCheck(this, e);var i = { sampleRate: 48e3, channelCount: 2, codec: "mp4a.40.2", config: [41, 401, 136, 0], duration: 0, id: 2, refSampleDuration: 21, sampleRateIndex: 3, timescale: 1e3, type: "audio" };return t ? Object.assign({}, i, t) : i;
    }return createClass(e, [{ key: "destroy", value: function value() {
        this.init = null;
      } }]), e;
  }(),
      VideoTrackMeta$2 = function () {
    function e(t) {
      classCallCheck(this, e);var i = { avcc: null, sps: new Uint8Array(0), pps: new Uint8Array(0), chromaFormat: 420, codec: "avc1.640020", codecHeight: 720, codecWidth: 1280, duration: 0, frameRate: { fixed: !0, fps: 25, fps_num: 25e3, fps_den: 1e3 }, id: 1, level: "3.2", presentHeight: 720, presentWidth: 1280, profile: "High", refSampleDuration: 40, parRatio: { height: 1, width: 1 }, timescale: 1e3, type: "video" };return t ? Object.assign({}, i, t) : i;
    }return createClass(e, [{ key: "destroy", value: function value() {
        this.init = null, this.sps = null, this.pps = null;
      } }]), e;
  }(),
      AudioTrackSample$1 = function () {
    function e(t) {
      classCallCheck(this, e);var i = e.getDefault();return t ? Object.assign({}, i, t) : i;
    }return createClass(e, null, [{ key: "getDefault", value: function value() {
        return { dts: null, pts: null, data: new Uint8Array() };
      } }]), e;
  }(),
      VideoTrackSample$1 = function () {
    function e(t) {
      classCallCheck(this, e);var i = e.getDefault();return t ? Object.assign({}, i, t) : i;
    }return createClass(e, null, [{ key: "getDefault", value: function value() {
        return { dts: null, pts: null, isKeyframe: !1, originDts: null, data: new Uint8Array() };
      } }]), e;
  }(),
      MSE$1 = function () {
    function e(t, i) {
      classCallCheck(this, e), i && (this._context = i, this.emit = i._emitter.emit.bind(i._emitter)), this.configs = Object.assign({}, t), this.container = this.configs.container, this.mediaSource = null, this.sourceBuffers = {}, this.preloadTime = this.configs.preloadTime || 1, this.onSourceOpen = this.onSourceOpen.bind(this), this.onTimeUpdate = this.onTimeUpdate.bind(this), this.onUpdateEnd = this.onUpdateEnd.bind(this), this.onWaiting = this.onWaiting.bind(this);
    }return createClass(e, [{ key: "init", value: function value() {
        this.mediaSource = new self.MediaSource(), this.mediaSource.addEventListener("sourceopen", this.onSourceOpen), this.container.src = URL.createObjectURL(this.mediaSource), this.url = this.container.src, this.container.addEventListener("timeupdate", this.onTimeUpdate), this.container.addEventListener("waiting", this.onWaiting);
      } }, { key: "resetContext", value: function value(e) {
        this._context = e;
      } }, { key: "onTimeUpdate", value: function value() {
        this.emit("TIME_UPDATE", this.container);
      } }, { key: "onWaiting", value: function value() {
        this.emit("WAITING", this.container);
      } }, { key: "onSourceOpen", value: function value() {
        this.addSourceBuffers();
      } }, { key: "onUpdateEnd", value: function value() {
        this.emit("SOURCE_UPDATE_END"), this.doAppend();
      } }, { key: "addSourceBuffers", value: function value() {
        if ("open" === this.mediaSource.readyState) {
          var e = this._context.getInstance("PRE_SOURCE_BUFFER"),
              t = this._context.getInstance("TRACKS"),
              i = void 0;e = e.sources;for (var r = !1, n = 0, a = Object.keys(e).length; n < a; n++) {
            var s = Object.keys(e)[n];if ("audio" === s ? i = t.audioTrack : "video" === s && (i = t.videoTrack), i) {
              var o = "audio" === s ? 21 : 40;i.meta && i.meta.refSampleDuration && (o = i.meta.refSampleDuration), e[s].data.length >= this.preloadTime / o && (r = !0);
            }
          }if (r) {
            if (Object.keys(this.sourceBuffers).length > 0) return;for (var u = 0, l = Object.keys(e).length; u < l; u++) {
              var h = Object.keys(e)[u],
                  d = e[h],
                  f = "video" === h ? "video/mp4;codecs=" + d.mimetype : "audio/mp4;codecs=" + d.mimetype,
                  c = this.mediaSource.addSourceBuffer(f);this.sourceBuffers[h] = c, c.addEventListener("updateend", this.onUpdateEnd), this.doAppend();
            }
          }
        }
      } }, { key: "doAppend", value: function value() {
        var e = this._context.getInstance("PRE_SOURCE_BUFFER");if (e) for (var t = 0; t < Object.keys(this.sourceBuffers).length; t++) {
          var i = Object.keys(this.sourceBuffers)[t],
              r = this.sourceBuffers[i],
              n = e.sources[i];if (n && !n.inited) try {
            r.appendBuffer(n.init.buffer.buffer), n.inited = !0;
          } catch (e) {} else if (n) {
            var a = n.data.shift();if (a) try {
              r.appendBuffer(a.buffer.buffer);
            } catch (e) {
              n.data.unshift(a);
            }
          }
        }
      } }, { key: "endOfStream", value: function value() {
        var e = this.mediaSource,
            t = e.readyState,
            i = e.activeSourceBuffers;if ("open" === t && 0 === i.length) try {
          this.mediaSource.endOfStream();
        } catch (e) {}
      } }, { key: "remove", value: function value(e) {
        for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, i = 0; i < Object.keys(this.sourceBuffers).length; i++) {
          var r = this.sourceBuffers[Object.keys(this.sourceBuffers)[i]];r.updating || r.remove(t, e);
        }
      } }, { key: "removeBuffers", value: function value() {
        for (var t = this, i = [], r = 0; r < Object.keys(this.sourceBuffers).length; r++) {
          !function (r) {
            var n = t.sourceBuffers[Object.keys(t.sourceBuffers)[r]];n.removeEventListener("updateend", t.onUpdateEnd);var a = void 0;a = n.updating ? new Promise(function (t) {
              var i = function i() {
                var r = 3,
                    a = function i() {
                  n.updating ? r > 0 ? (setTimeout(i, 200), r--) : t() : (e.clearBuffer(n), n.addEventListener("updateend", function () {
                    t();
                  }));
                };setTimeout(a, 200), n.removeEventListener("updateend", i);
              };n.addEventListener("updateend", i);
            }) : new Promise(function (t) {
              e.clearBuffer(n), n.addEventListener("updateend", function () {
                t();
              });
            }), i.push(a);
          }(r);
        }return Promise.all(i);
      } }, { key: "destroy", value: function value() {
        var e = this;return this.removeBuffers().then(function () {
          for (var t = 0; t < Object.keys(e.sourceBuffers).length; t++) {
            var i = e.sourceBuffers[Object.keys(e.sourceBuffers)[t]];e.mediaSource.removeSourceBuffer(i), delete e.sourceBuffers[Object.keys(e.sourceBuffers)[t]];
          }e.container.removeEventListener("timeupdate", e.onTimeUpdate), e.container.removeEventListener("waiting", e.onWaiting), e.mediaSource.removeEventListener("sourceopen", e.onSourceOpen), e.endOfStream(), window.URL.revokeObjectURL(e.url), e.url = null, e.configs = {}, e.container = null, e.mediaSource = null, e.sourceBuffers = {}, e.preloadTime = 1;
        });
      } }], [{ key: "clearBuffer", value: function value(e) {
        for (var t = e.buffered, i = .1, r = 0, n = t.length; r < n; r++) {
          i = t.end(r);
        }try {
          e.remove(0, i);
        } catch (e) {}
      } }]), e;
  }(),
      Stream$1 = function () {
    function e(t) {
      if (classCallCheck(this, e), !(t instanceof ArrayBuffer)) throw new Error("data is invalid");this.buffer = t, this.dataview = new DataView(t), this.dataview.position = 0;
    }return createClass(e, [{ key: "back", value: function value(e) {
        this.position -= e;
      } }, { key: "skip", value: function value(t) {
        for (var i = Math.floor(t / 4), r = t % 4, n = 0; n < i; n++) {
          e.readByte(this.dataview, 4);
        }r > 0 && e.readByte(this.dataview, r);
      } }, { key: "readUint8", value: function value() {
        return e.readByte(this.dataview, 1);
      } }, { key: "readUint16", value: function value() {
        return e.readByte(this.dataview, 2);
      } }, { key: "readUint24", value: function value() {
        return e.readByte(this.dataview, 3);
      } }, { key: "readUint32", value: function value() {
        return e.readByte(this.dataview, 4);
      } }, { key: "readUint64", value: function value() {
        return e.readByte(this.dataview, 8);
      } }, { key: "readInt8", value: function value() {
        return e.readByte(this.dataview, 1, !0);
      } }, { key: "readInt16", value: function value() {
        return e.readByte(this.dataview, 2, !0);
      } }, { key: "readInt32", value: function value() {
        return e.readByte(this.dataview, 4, !0);
      } }, { key: "writeUint32", value: function value(e) {
        return new Uint8Array([e >>> 24 & 255, e >>> 16 & 255, e >>> 8 & 255, 255 & e]);
      } }, { key: "length", get: function get() {
        return this.buffer.byteLength;
      } }, { key: "position", set: function set(e) {
        this.dataview.position = e;
      }, get: function get() {
        return this.dataview.position;
      } }], [{ key: "readByte", value: function value(e, t, i) {
        var r = void 0;switch (t) {case 1:
            r = i ? e.getInt8(e.position) : e.getUint8(e.position);break;case 2:
            r = i ? e.getInt16(e.position) : e.getUint16(e.position);break;case 3:
            if (i) throw new Error("not supported for readByte 3");r = e.getUint8(e.position) << 16, r |= e.getUint8(e.position + 1) << 8, r |= e.getUint8(e.position + 2);break;case 4:
            r = i ? e.getInt32(e.position) : e.getUint32(e.position);break;case 8:
            if (i) throw new Error("not supported for readBody 8");r = e.getUint32(e.position) << 32, r |= e.getUint32(e.position + 4);break;default:
            r = "";}return e.position += t, r;
      } }]), e;
  }(),
      concat$1 = createCommonjsModule$1(function (e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.default = function (e) {
      for (var t = 0, i = arguments.length, r = Array(i > 1 ? i - 1 : 0), n = 1; n < i; n++) {
        r[n - 1] = arguments[n];
      }var a = !0,
          s = !1,
          o = void 0;try {
        for (var u, l = r[Symbol.iterator](); !(a = (u = l.next()).done); a = !0) {
          t += u.value.length;
        }
      } catch (e) {
        s = !0, o = e;
      } finally {
        try {
          !a && l.return && l.return();
        } finally {
          if (s) throw o;
        }
      }var h = new e(t),
          d = 0,
          f = !0,
          c = !1,
          p = void 0;try {
        for (var v, E = r[Symbol.iterator](); !(f = (v = E.next()).done); f = !0) {
          var m = v.value;h.set(m, d), d += m.length;
        }
      } catch (e) {
        c = !0, p = e;
      } finally {
        try {
          !f && E.return && E.return();
        } finally {
          if (c) throw p;
        }
      }return h;
    };
  });unwrapExports$1(concat$1);var lib$1 = createCommonjsModule$1(function (e) {
    var t = function (e) {
      return e && e.__esModule ? e : { default: e };
    }(concat$1);e.exports = t.default;
  }),
      Concat$1 = unwrapExports$1(lib$1),
      Buffer$2 = function () {
    function e(t) {
      classCallCheck(this, e), this.buffer = t || new Uint8Array(0);
    }return createClass(e, [{ key: "write", value: function value() {
        for (var e = this, t = arguments.length, i = Array(t), r = 0; r < t; r++) {
          i[r] = arguments[r];
        }i.forEach(function (t) {
          e.buffer = Concat$1(Uint8Array, e.buffer, t);
        });
      } }], [{ key: "writeUint32", value: function value(e) {
        return new Uint8Array([e >> 24, e >> 16 & 255, e >> 8 & 255, 255 & e]);
      } }, { key: "readAsInt", value: function value(e) {
        function t(e) {
          return e.toString(16).padStart(2, "0");
        }var i = "";return e.forEach(function (e) {
          i += t(e);
        }), parseInt(i, 16);
      } }]), e;
  }(),
      CRYTO_EVENTS$1$1 = _EVENTS$1.CRYTO_EVENTS,
      Crypto$1 = function () {
    function e(t) {
      classCallCheck(this, e), this.inputBuffer = t.inputbuffer, this.outputBuffer = t.outputbuffer, this.key = t.key, this.iv = t.iv, this.method = t.method, this.crypto = window.crypto || window.msCrypto;
    }return createClass(e, [{ key: "init", value: function value() {
        this.on(CRYTO_EVENTS$1$1.START_DECRYPT, this.decript.bind(this));
      } }, { key: "decript", value: function value() {
        var e = this;this.aeskey ? this.decriptData() : this.crypto.subtle.importKey("raw", this.key.buffer, { name: "AES-CBC" }, !1, ["encrypt", "decrypt"]).then(function (t) {
          e.aeskey = t, e.decriptData();
        });
      } }, { key: "decriptData", value: function value() {
        var e = this,
            t = this._context.getInstance(this.inputBuffer),
            i = this._context.getInstance(this.outputBuffer),
            r = t.shift();r && this.crypto.subtle.decrypt({ name: "AES-CBC", iv: this.iv.buffer }, this.aeskey, r).then(function (t) {
          i.push(new Uint8Array(t)), e.emit(CRYTO_EVENTS$1$1.DECRYPTED), e.decriptData(r);
        });
      } }]), e;
  }(),
      Context$1$1 = Context$2,
      EVENTS$2 = _EVENTS$1,
      sniffer$1$1 = sniffer$2,
      isLe$1 = le$1$1,
      UTF8$1$1 = UTF8$2,
      MediaSegmentList$1$1 = MediaSegmentList$2,
      AudioTrackMeta$1$1 = AudioTrackMeta$2,
      VideoTrackMeta$1$1 = VideoTrackMeta$2,
      Mse$1 = MSE$1,
      Buffer$1$1 = Buffer$2,
      Golomb$2 = function () {
    function e(t) {
      classCallCheck(this, e), this.TAG = "Golomb", this._buffer = t, this._bufferIndex = 0, this._totalBytes = t.byteLength, this._totalBits = 8 * t.byteLength, this._currentWord = 0, this._currentWordBitsLeft = 0;
    }return createClass(e, [{ key: "destroy", value: function value() {
        this._buffer = null;
      } }, { key: "_fillCurrentWord", value: function value() {
        var e = this._totalBytes - this._bufferIndex,
            t = Math.min(4, e),
            i = new Uint8Array(4);i.set(this._buffer.subarray(this._bufferIndex, this._bufferIndex + t)), this._currentWord = new DataView(i.buffer).getUint32(0), this._bufferIndex += t, this._currentWordBitsLeft = 8 * t;
      } }, { key: "readBits", value: function value(e) {
        var t = Math.min(this._currentWordBitsLeft, e),
            i = this._currentWord >>> 32 - t;if (e > 32) throw new Error("Cannot read more than 32 bits at a time");return this._currentWordBitsLeft -= t, this._currentWordBitsLeft > 0 ? this._currentWord <<= t : this._totalBytes - this._bufferIndex > 0 && this._fillCurrentWord(), t = e - t, t > 0 && this._currentWordBitsLeft ? i << t | this.readBits(t) : i;
      } }, { key: "readBool", value: function value() {
        return 1 === this.readBits(1);
      } }, { key: "readByte", value: function value() {
        return this.readBits(8);
      } }, { key: "_skipLeadingZero", value: function value() {
        var e = void 0;for (e = 0; e < this._currentWordBitsLeft; e++) {
          if (0 != (this._currentWord & 2147483648 >>> e)) return this._currentWord <<= e, this._currentWordBitsLeft -= e, e;
        }return this._fillCurrentWord(), e + this._skipLeadingZero();
      } }, { key: "readUEG", value: function value() {
        var e = this._skipLeadingZero();return this.readBits(e + 1) - 1;
      } }, { key: "readSEG", value: function value() {
        var e = this.readUEG();return 1 & e ? e + 1 >>> 1 : -1 * (e >>> 1);
      } }]), e;
  }(),
      SPSParser$2 = function () {
    function e() {
      classCallCheck(this, e);
    }return createClass(e, null, [{ key: "_ebsp2rbsp", value: function value(e) {
        for (var t = e, i = t.byteLength, r = new Uint8Array(i), n = 0, a = 0; a < i; a++) {
          a >= 2 && 3 === t[a] && 0 === t[a - 1] && 0 === t[a - 2] || (r[n] = t[a], n++);
        }return new Uint8Array(r.buffer, 0, n);
      } }, { key: "parseSPS", value: function value(t) {
        var i = e._ebsp2rbsp(t),
            r = new Golomb$2(i);r.readByte();var n = r.readByte();r.readByte();var a = r.readByte();r.readUEG();var s = e.getProfileString(n),
            o = e.getLevelString(a),
            u = 1,
            l = 420,
            h = [0, 420, 422, 444],
            d = 8;if ((100 === n || 110 === n || 122 === n || 244 === n || 44 === n || 83 === n || 86 === n || 118 === n || 128 === n || 138 === n || 144 === n) && (3 === (u = r.readUEG()) && r.readBits(1), u <= 3 && (l = h[u]), d = r.readUEG() + 8, r.readUEG(), r.readBits(1), r.readBool())) for (var f = 3 !== u ? 8 : 12, c = 0; c < f; c++) {
          r.readBool() && (c < 6 ? e._skipScalingList(r, 16) : e._skipScalingList(r, 64));
        }r.readUEG();var p = r.readUEG();if (0 === p) r.readUEG();else if (1 === p) {
          r.readBits(1), r.readSEG(), r.readSEG();for (var v = r.readUEG(), E = 0; E < v; E++) {
            r.readSEG();
          }
        }r.readUEG(), r.readBits(1);var m = r.readUEG(),
            y = r.readUEG(),
            _ = r.readBits(1);0 === _ && r.readBits(1), r.readBits(1);var g = 0,
            S = 0,
            k = 0,
            T = 0;r.readBool() && (g = r.readUEG(), S = r.readUEG(), k = r.readUEG(), T = r.readUEG());var b = 1,
            A = 1,
            R = 0,
            D = !0,
            w = 0,
            L = 0;if (r.readBool()) {
          if (r.readBool()) {
            var C = r.readByte(),
                O = [1, 12, 10, 16, 40, 24, 20, 32, 80, 18, 15, 64, 160, 4, 3, 2],
                M = [1, 11, 11, 11, 33, 11, 11, 11, 33, 11, 11, 33, 99, 3, 2, 1];C > 0 && C < 16 ? (b = O[C - 1], A = M[C - 1]) : 255 === C && (b = r.readByte() << 8 | r.readByte(), A = r.readByte() << 8 | r.readByte());
          }if (r.readBool() && r.readBool(), r.readBool() && (r.readBits(4), r.readBool() && r.readBits(24)), r.readBool() && (r.readUEG(), r.readUEG()), r.readBool()) {
            var U = r.readBits(32),
                x = r.readBits(32);D = r.readBool(), R = (w = x) / (L = 2 * U);
          }
        }var B = 1;1 === b && 1 === A || (B = b / A);var N = 0,
            V = 0;0 === u ? (N = 1, V = 2 - _) : (N = 3 === u ? 1 : 2, V = (1 === u ? 2 : 1) * (2 - _));var I = 16 * (m + 1),
            F = 16 * (y + 1) * (2 - _);I -= (g + S) * N, F -= (k + T) * V;var P = Math.ceil(I * B);return r.destroy(), r = null, { profile_string: s, level_string: o, bit_depth: d, chroma_format: l, chroma_format_string: e.getChromaFormatString(l), frame_rate: { fixed: D, fps: R, fps_den: L, fps_num: w }, par_ratio: { width: b, height: A }, codec_size: { width: I, height: F }, present_size: { width: P, height: F } };
      } }, { key: "_skipScalingList", value: function value(e, t) {
        for (var i = 8, r = 8, n = 0; n < t; n++) {
          0 !== r && (r = (i + e.readSEG() + 256) % 256), i = 0 === r ? i : r;
        }
      } }, { key: "getProfileString", value: function value(e) {
        switch (e) {case 66:
            return "Baseline";case 77:
            return "Main";case 88:
            return "Extended";case 100:
            return "High";case 110:
            return "High10";case 122:
            return "High422";case 244:
            return "High444";default:
            return "Unknown";}
      } }, { key: "getLevelString", value: function value(e) {
        return (e / 10).toFixed(1);
      } }, { key: "getChromaFormatString", value: function value(e) {
        switch (e) {case 420:
            return "4:2:0";case 422:
            return "4:2:2";case 444:
            return "4:4:4";default:
            return "Unknown";}
      } }, { key: "toVideoMeta", value: function value(e) {
        var t = {};e && e.codec_size && (t.codecWidth = e.codec_size.width, t.codecHeight = e.codec_size.height, t.presentWidth = e.present_size.width, t.presentHeight = e.present_size.height), t.profile = e.profile_string, t.level = e.level_string, t.bitDepth = e.bit_depth, t.chromaFormat = e.chroma_format, t.parRatio = { width: e.par_ratio.width, height: e.par_ratio.height }, t.frameRate = e.frame_rate;var i = t.frameRate.fps_den,
            r = t.frameRate.fps_num;return t.refSampleDuration = Math.floor(t.timescale * (i / r)), t;
      } }]), e;
  }(),
      Nalunit$2 = function () {
    function e() {
      classCallCheck(this, e);
    }return createClass(e, null, [{ key: "getNalunits", value: function value(t) {
        if (t.length - t.position < 4) return [];var i = t.dataview,
            r = t.position;return 1 === i.getInt32(r) || 0 === i.getInt16(r) && 1 === i.getInt8(r + 2) ? e.getAnnexbNals(t) : e.getAvccNals(t);
      } }, { key: "getAnnexbNals", value: function value(t) {
        for (var i = [], r = e.getHeaderPositionAnnexB(t), n = r.pos, a = n; n < t.length - 4;) {
          var s = t.buffer.slice(n, n + r.headerLength);r.pos === t.position && t.skip(r.headerLength), a = (r = e.getHeaderPositionAnnexB(t)).pos;var o = { header: s, body: new Uint8Array(t.buffer.slice(n + s.byteLength, a)) };e.analyseNal(o), o.type <= 9 && 0 !== o.type && i.push(o), t.skip(a - t.position), n = a;
        }return i;
      } }, { key: "getAvccNals", value: function value(t) {
        for (var i = []; t.position < t.length - 4;) {
          var r = t.dataview.getInt32();if (!(t.length - t.position >= r)) break;var n = t.buffer.slice(t.position, t.position + 4);t.skip(4);var a = t.buffer.slice(t.position, t.position + r);t.skip(r);var s = { header: n, body: a };e.analyseNal(s), s.type <= 9 && 0 !== s.type && i.push(s);
        }return i;
      } }, { key: "analyseNal", value: function value(e) {
        var t = 31 & e.body[0];switch (e.type = t, t) {case 1:
            e.ndr = !0;break;case 5:
            e.idr = !0;break;case 6:
            break;case 7:
            e.sps = SPSParser$2.parseSPS(e.body);break;case 8:
            e.pps = !0;}
      } }, { key: "getHeaderPositionAnnexB", value: function value(e) {
        for (var t = e.position, i = 0; 3 !== i && 4 !== i && t < e.length - 4;) {
          0 === e.dataview.getInt16(t) ? 1 === e.dataview.getInt16(t + 2) ? i = 4 : 1 === e.dataview.getInt8(t + 2) ? i = 3 : t++ : t++;
        }return t === e.length - 4 && (0 === e.dataview.getInt16(t) ? 1 === e.dataview.getInt16(t + 2) && (i = 4) : (t++, 0 === e.dataview.getInt16(t) && 1 === e.dataview.getInt8(t) ? i = 3 : t = e.length)), { pos: t, headerLength: i };
      } }, { key: "getAvcc", value: function value(e, t) {
        var i = new Uint8Array(e.byteLength + t.byteLength + 11);i[0] = 1, i[1] = e[1], i[2] = e[2], i[3] = e[3], i[4] = 255, i[5] = 225;var r = 6;return i.set(new Uint8Array([e.byteLength >>> 8 & 255, 255 & e.byteLength]), r), r += 2, i.set(e, r), r += e.byteLength, i[r] = 1, r++, i.set(new Uint8Array([t.byteLength >>> 8 & 255, 255 & t.byteLength]), r), r += 2, i.set(t, r), i;
      } }]), e;
  }(),
      AAC$1 = function () {
    function e() {
      classCallCheck(this, e);
    }return createClass(e, null, [{ key: "getSilentFrame", value: function value(e, t) {
        if ("mp4a.40.2" === e) {
          if (1 === t) return new Uint8Array([0, 200, 0, 128, 35, 128]);if (2 === t) return new Uint8Array([33, 0, 73, 144, 2, 25, 0, 35, 128]);if (3 === t) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 142]);if (4 === t) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 128, 44, 128, 8, 2, 56]);if (5 === t) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 56]);if (6 === t) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 0, 178, 0, 32, 8, 224]);
        } else {
          if (1 === t) return new Uint8Array([1, 64, 34, 128, 163, 78, 230, 128, 186, 8, 0, 0, 0, 28, 6, 241, 193, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);if (2 === t) return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);if (3 === t) return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
        }return null;
      } }]), e;
  }(),
      REMUX_EVENTS$1$1 = EVENTS$2.REMUX_EVENTS,
      Compatibility$2 = function () {
    function e() {
      classCallCheck(this, e), this.nextAudioDts = 0, this.nextVideoDts = 0, this.lastAudioSamplesLen = 0, this.lastVideoSamplesLen = 0, this.lastVideoDts = void 0, this.lastAudioDts = void 0, this.allAudioSamplesCount = 0, this.allVideoSamplesCount = 0, this._firstAudioSample = null, this._firstVideoSample = null, this.filledAudioSamples = [], this.filledVideoSamples = [], this.videoLastSample = null, this.audioLastSample = null, this._videoLargeGap = 0, this._audioLargeGap = 0;
    }return createClass(e, [{ key: "init", value: function value() {
        this.before(REMUX_EVENTS$1$1.REMUX_MEDIA, this.doFix.bind(this));
      } }, { key: "reset", value: function value() {
        this.nextAudioDts = null, this.nextVideoDts = null, this.lastAudioSamplesLen = 0, this.lastVideoSamplesLen = 0, this.lastVideoDts = void 0, this.lastAudioDts = void 0, this.videoLastSample = null, this.audioLastSample = null, this.filledAudioSamples = [], this.filledVideoSamples = [];
      } }, { key: "doFix", value: function value() {
        var t = this.getFirstSample(),
            i = t.isFirstAudioSamples,
            r = t.isFirstVideoSamples;this.recordSamplesCount(), this._firstVideoSample && this.fixRefSampleDuration(this.videoTrack.meta, this.videoTrack.samples), this._firstAudioSample && this.fixRefSampleDuration(this.audioTrack.meta, this.audioTrack.samples);var n = e.detactChangeStream(this.videoTrack.samples),
            a = n.changed,
            s = n.changedIdx;a && !i ? this.fixChangeStreamVideo(s) : this.doFixVideo(r);var o = e.detactChangeStream(this.audioTrack.samples),
            u = o.changed,
            l = o.changedIdx;u ? this.fixChangeStreamAudio(l) : this.doFixAudio(i), this.removeInvalidSamples();
      } }, { key: "doFixVideo", value: function value(t, i) {
        for (var r = this.videoTrack, n = r.samples, a = r.meta, s = 0, o = n.length; s < o; s++) {
          var u = n[s];u.originDts = u.dts;
        }if ((!a.frameRate || !1 !== a.frameRate.fixed) && n && n.length && this._firstVideoSample) {
          var l = n[0];if (0 !== this._videoLargeGap && e.doFixLargeGap(n, this._videoLargeGap), l.dts !== this._firstVideoSample.dts && (i || this.videoLastSample && e.detectLargeGap(this.videoLastSample.dts, l)) && (this.nextVideoDts = i || this.videoLastSample.dts, this._videoLargeGap = this.nextVideoDts - l.dts, e.doFixLargeGap(n, this._videoLargeGap)), t && this._firstAudioSample) {
            var h = this._firstVideoSample.originDts,
                d = h - (this._firstAudioSample.originDts || this._firstAudioSample.dts);if (d > 2 * a.refSampleDuration && d < 10 * a.refSampleDuration) {
              for (var f = Math.floor(d / a.refSampleDuration), c = 0; c < f; c++) {
                var p = Object.assign({}, l);p.dts = h - (c + 1) * a.refSampleDuration, p.pts = p.dts + p.cts, n.unshift(p), this.filledVideoSamples.push({ dts: p.dts, size: p.data.byteLength });
              }this._firstVideoSample = this.filledVideoSamples[0] || this._firstVideoSample;
            } else d < -2 * a.refSampleDuration && (this._videoLargeGap = -1 * d, e.doFixLargeGap(n, -1 * d));
          }var v = n.pop();if (n.length && (n[n.length - 1].duration = v.dts - n[n.length - 1].dts), this.videoLastSample) {
            var E = this.videoLastSample;E.duration = l.dts - E.dts, n.unshift(this.videoLastSample);
          }this.videoLastSample = v, this.videoTrack.samples = n;
        }
      } }, { key: "doFixAudio", value: function value(t, i) {
        var r = this.audioTrack,
            n = r.samples,
            a = r.meta;if (n && n.length) {
          for (var s = 0, o = n.length; s < o; s++) {
            var u = n[s];u.originDts = u.dts;
          }var l = n.length,
              h = AAC$1.getSilentFrame(a.codec, a.channelCount),
              d = this._firstAudioSample,
              f = n[0];if (0 !== this._audioLargeGap && e.doFixLargeGap(n, this._audioLargeGap), f.dts !== this._firstAudioSample.dts && (i || e.detectLargeGap(this.nextAudioDts, f)) && (i && (this.nextAudioDts = i), this._audioLargeGap = this.nextAudioDts - f.dts, e.doFixLargeGap(n, this._audioLargeGap)), this._firstVideoSample && t) {
            var c = this._firstVideoSample.originDts || this._firstVideoSample.dts,
                p = d.dts - c;if (p > a.refSampleDuration && p < 10 * a.refSampleDuration) {
              for (var v = Math.floor((d.dts - c) / a.refSampleDuration), E = 0; E < v; E++) {
                var m = { data: h, datasize: h.byteLength, dts: d.dts - (E + 1) * a.refSampleDuration, filtered: 0 };n.unshift(m), this.filledAudioSamples.push({ dts: m.dts, size: m.data.byteLength });
              }this._firstAudioSample = this.filledAudioSamples[0] || this._firstAudioSample;
            } else p < -1 * a.refSampleDuration && (this._audioLargeGap = -1 * p, e.doFixLargeGap(n, -1 * p));
          }var y = void 0,
              _ = n[0].dts;if (this.nextAudioDts) {
            y = _ - this.nextAudioDts;var g = Math.abs(y);if (g > a.refSampleDuration && 1 === l && 1 === this.lastAudioSamplesLen && (a.refSampleDurationFixed = void 0), y > 2 * a.refSampleDuration && y < 10 * a.refSampleDuration) {
              if (1 === l && 1 === this.lastAudioSamplesLen) a.refSampleDurationFixed = void 0 !== a.refSampleDurationFixed ? a.refSampleDurationFixed + y : a.refSampleDuration + y;else for (var S = Math.floor(y / a.refSampleDuration), k = 0; k < S; k++) {
                var T = _ - (k + 1) * a.refSampleDuration,
                    b = Object.assign({}, n[0], { dts: T > this.nextAudioDts ? T : this.nextAudioDts });this.filledAudioSamples.push({ dts: b.dts, size: b.data.byteLength }), this.audioTrack.samples.unshift(b);
              }
            } else g <= a.refSampleDuration && g > 0 ? (n[0].dts = this.nextAudioDts, n[0].pts = this.nextAudioDts) : y < 0 && e.doFixLargeGap(n, -1 * y);
          }var A = n[n.length - 1].originDts,
              R = n[n.length - 1].dts,
              D = n.length >= 2 ? A - n[n.length - 2].originDts : a.refSampleDuration;this.lastAudioSamplesLen = l, this.nextAudioDts = a.refSampleDurationFixed ? R + a.refSampleDurationFixed : R + D, this.lastAudioDts = R, n[n.length - 1].duration = D;for (var w = 0, L = n.length; w < L; w++) {
            var C = n[w],
                O = n[w + 1];if (!O) break;var M = O.dts - C.dts;n[w].duration = M;
          }this.audioTrack.samples = e.sortAudioSamples(n);
        }
      } }, { key: "fixChangeStreamVideo", value: function value(e) {
        var t = this.videoTrack,
            i = t.samples,
            r = t.meta,
            n = 0 === e ? this.videoLastSample ? this.videoLastSample.dts : this.getStreamChangeStart(i[0]) : i[e - 1].dts,
            a = i[e].dts;if (Math.abs(n - a) <= 2e3) return i[e].options ? i[e].options.isContinue = !0 : i[e].options = { isContinue: !0 }, this.doFixVideo(!1);this.emit(REMUX_EVENTS$1$1.DETECT_CHANGE_STREAM_DISCONTINUE), this._videoLargeGap = 0;var s = i.slice(0, e),
            o = i.slice(e),
            u = i[0],
            l = void 0;u.options && u.options.start ? l = u.options && u.options.start ? u.options.start : null : this.videoLastSample && (l = this.videoLastSample.dts - this.dtsBase + r.refSampleDuration), this.videoTrack.samples = i.slice(0, e), this.doFixVideo(!1), this.videoTrack.samples = i.slice(e), this.doFixVideo(!1, l), this.videoTrack.samples = s.concat(o);
      } }, { key: "fixChangeStreamAudio", value: function value(e) {
        var t = this.audioTrack,
            i = t.samples,
            r = t.meta,
            n = 0 === e ? this.getStreamChangeStart(i[0]) : i[e - 1].dts,
            a = i[e].dts;if (Math.abs(n - a) <= 2e3) return i[e].options ? i[e].options.isContinue = !0 : i[e].options = { isContinue: !0 }, this.doFixAudio(!1);this.emit(REMUX_EVENTS$1$1.DETECT_CHANGE_STREAM_DISCONTINUE), this._audioLargeGap = 0;var s = i.slice(0, e),
            o = i.slice(e),
            u = i[0],
            l = void 0;l = u.options && u.options.start ? u.options && u.options.start ? u.options.start : null : this.lastAudioDts - this.dtsBase + r.refSampleDuration, this.audioTrack.samples = s, this.doFixAudio(!1), this.audioTrack.samples = o, this.doFixAudio(!1, l), this.audioTrack.samples = s.concat(o);
      } }, { key: "getFirstSample", value: function value() {
        var t = this.videoTrack.samples,
            i = this.audioTrack.samples,
            r = !1,
            n = !1;return !this._firstVideoSample && t.length && (this._firstVideoSample = e.findFirstVideoSample(t), this.removeInvalidSamples(), r = !0), !this._firstAudioSample && i.length && (this._firstAudioSample = e.findFirstAudioSample(i), this.removeInvalidSamples(), n = !0), { isFirstVideoSamples: r, isFirstAudioSamples: n };
      } }, { key: "fixRefSampleDuration", value: function value(e, t) {
        var i = "video" === e.type,
            r = i ? this.allVideoSamplesCount : this.allAudioSamplesCount,
            n = i ? this._firstVideoSample.dts : this._firstAudioSample.dts,
            a = i ? this.filledVideoSamples.length : this.filledAudioSamples.length;if (!e.refSampleDuration || e.refSampleDuration <= 0 || Number.isNaN(e.refSampleDuration)) {
          if (t.length >= 1) {
            var s = t[t.length - 1].dts;e.refSampleDuration = Math.floor((s - n) / (r + a - 1));
          }
        } else if (e.refSampleDuration && t.length >= 5) {
          var o = (t[t.length - 1].dts - t[0].dts) / (t.length - 1);o > 0 && o < 1e3 && (e.refSampleDuration = Math.floor(Math.abs(e.refSampleDuration - o) <= 5 ? e.refSampleDuration : o));
        }
      } }, { key: "recordSamplesCount", value: function value() {
        var e = this.audioTrack,
            t = this.videoTrack;this.allAudioSamplesCount += e.samples.length, this.allVideoSamplesCount += t.samples.length;
      } }, { key: "removeInvalidSamples", value: function value() {
        var e = this._firstVideoSample,
            t = this._firstAudioSample;t && (this.audioTrack.samples = this.audioTrack.samples.filter(function (e, i) {
          return e === t || e.dts > t.dts;
        })), e && (this.videoTrack.samples = this.videoTrack.samples.filter(function (t, i) {
          return t === e || t.dts > e.dts;
        }));
      } }, { key: "getStreamChangeStart", value: function value(e) {
        return e.options && e.options.start ? e.options.start - this.dtsBase : 1 / 0;
      } }, { key: "tracks", get: function get() {
        return this._context.getInstance("TRACKS");
      } }, { key: "audioTrack", get: function get() {
        return this.tracks && this.tracks.audioTrack ? this.tracks.audioTrack : { samples: [], meta: {} };
      } }, { key: "videoTrack", get: function get() {
        return this.tracks && this.tracks.videoTrack ? this.tracks.videoTrack : { samples: [], meta: {} };
      } }, { key: "dtsBase", get: function get() {
        var e = this._context.getInstance("MP4_REMUXER");return e ? e._dtsBase : 0;
      } }], [{ key: "sortAudioSamples", value: function value(e) {
        return 1 === e.length ? e : e.sort(function (e, t) {
          return e.dts - t.dts;
        });
      } }, { key: "findFirstAudioSample", value: function value(t) {
        return t && 0 !== t.length ? e.sortAudioSamples(t)[0] : null;
      } }, { key: "findFirstVideoSample", value: function value(e) {
        if (!e.length) return null;for (var t = e.sort(function (e, t) {
          return e.dts - t.dts;
        }), i = 0, r = t.length; i < r; i++) {
          if (t[i].isKeyframe) return t[i];
        }
      } }, { key: "detectLargeGap", value: function value(e, t) {
        if (null !== e) {
          var i = t.dts || 0,
              r = e - i >= 1e3 || i - e >= 1e3,
              n = t.options && t.options.discontinue;return r || n;
        }
      } }, { key: "doFixLargeGap", value: function value(e, t) {
        for (var i = 0, r = e.length; i < r; i++) {
          var n = e[i];n.dts += t, n.pts && (n.pts += t);
        }
      } }, { key: "detactChangeStream", value: function value(e) {
        for (var t = !1, i = -1, r = 0, n = e.length; r < n; r++) {
          if (e[r].options && e[r].options.meta) {
            t = !0, i = r;break;
          }
        }return { changed: t, changedIdx: i };
      } }]), e;
  }(),
      SpsParser$1 = SPSParser$2,
      Track$1 = function () {
    function e() {
      classCallCheck(this, e), this.id = -1, this.sequenceNumber = 0, this.samples = [], this.droppedSamples = [], this.length = 0;
    }return createClass(e, [{ key: "reset", value: function value() {
        this.sequenceNumber = 0, this.samples = [], this.length = 0;
      } }, { key: "distroy", value: function value() {
        this.reset(), this.id = -1;
      } }]), e;
  }(),
      AudioTrack$2 = function (e) {
    function t() {
      classCallCheck(this, t);var e = possibleConstructorReturn(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));return e.TAG = "AudioTrack", e.type = "audio", e;
    }return inherits(t, e), t;
  }(Track$1),
      VideoTrack$2 = function (e) {
    function t() {
      classCallCheck(this, t);var e = possibleConstructorReturn(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));return e.TAG = "VideoTrack", e.type = "video", e.dropped = 0, e;
    }return inherits(t, e), createClass(t, [{ key: "reset", value: function value() {
        this.sequenceNumber = 0, this.samples = [], this.length = 0, this.dropped = 0;
      } }]), t;
  }(Track$1),
      Tracks$2 = function () {
    function e() {
      classCallCheck(this, e), this.audioTrack = null, this.videoTrack = null;
    }return createClass(e, [{ key: "destroy", value: function value() {
        this.audioTrack = null, this.videoTrack = null;
      } }]), e;
  }(),
      XgBuffer$2 = function () {
    function e(t) {
      classCallCheck(this, e), this.length = t || 0, this.historyLen = t || 0, this.array = [], this.offset = 0;
    }return createClass(e, [{ key: "push", value: function value(e) {
        this.array.push(e), this.length += e.byteLength, this.historyLen += e.byteLength;
      } }, { key: "shift", value: function value(e) {
        if (this.array.length < 1) return new Uint8Array(0);if (void 0 === e) return this._shiftBuffer();if (this.offset + e === this.array[0].length) {
          var t = this.array[0].slice(this.offset, this.offset + e);return this.offset = 0, this.array.shift(), this.length -= e, t;
        }if (this.offset + e < this.array[0].length) {
          var i = this.array[0].slice(this.offset, this.offset + e);return this.offset += e, this.length -= e, i;
        }for (var r = new Uint8Array(e), n = 0; this.array.length > 0 && e > 0;) {
          if (this.offset + e < this.array[0].length) {
            var a = this.array[0].slice(this.offset, this.offset + e);r.set(a, n), this.offset += e, this.length -= e, e = 0;break;
          }var s = this.array[0].length - this.offset;r.set(this.array[0].slice(this.offset, this.array[0].length), n), this.array.shift(), this.offset = 0, n += s, this.length -= s, e -= s;
        }return r;
      } }, { key: "clear", value: function value() {
        this.array = [], this.length = 0, this.offset = 0;
      } }, { key: "destroy", value: function value() {
        this.clear(), this.historyLen = 0;
      } }, { key: "_shiftBuffer", value: function value() {
        return this.length -= this.array[0].length, this.offset = 0, this.array.shift();
      } }, { key: "toInt", value: function value(e, t) {
        for (var i = 0, r = this.offset + e; r < this.offset + t + e;) {
          r < this.array[0].length ? i = 256 * i + this.array[0][r] : this.array[1] && (i = 256 * i + this.array[1][r - this.array[0].length]), r++;
        }return i;
      } }]), e;
  }(),
      RemuxBuffer$1 = function () {
    function e() {
      classCallCheck(this, e), this.video = [], this.audio = [];
    }return createClass(e, [{ key: "destroy", value: function value() {
        this.video = [], this.audio = [];
      } }]), e;
  }(),
      Source$1 = function e() {
    classCallCheck(this, e), this.mimetype = "", this.init = null, this.data = [];
  },
      PreSource$2 = function () {
    function e() {
      classCallCheck(this, e), this.sources = {};
    }return createClass(e, [{ key: "getSource", value: function value(e) {
        return this.sources[e];
      } }, { key: "createSource", value: function value(e) {
        return this.sources[e] = new Source$1(), this.sources[e];
      } }, { key: "clear", value: function value() {
        this.sources = {};
      } }, { key: "destroy", value: function value() {
        this.sources = {};
      } }]), e;
  }(),
      Tracks$1$1 = Tracks$2,
      AudioTrack$1$1 = AudioTrack$2,
      VideoTrack$1$1 = VideoTrack$2,
      XgBuffer$1$1 = XgBuffer$2,
      PreSource$1$1 = PreSource$2,
      DATA_TYPES$1 = { NUMBER: 0, BOOLEAN: 1, STRING: 2, OBJECT: 3, MIX_ARRAY: 8, OBJECT_END: 9, STRICT_ARRAY: 10, DATE: 11, LONE_STRING: 12 },
      AMFParser$1 = function () {
    function e() {
      classCallCheck$2(this, e), this.offset = 0, this.readOffset = this.offset;
    }return createClass$2(e, [{ key: "resolve", value: function value(e, t) {
        if (t < 3) throw new Error("not enough data for metainfo");var i = {},
            r = this.parseValue(e),
            n = this.parseValue(e, t - r.bodySize);return i[r.data] = n.data, this.resetStatus(), i;
      } }, { key: "resetStatus", value: function value() {
        this.offset = 0, this.readOffset = this.offset;
      } }, { key: "parseString", value: function value(e) {
        var t = new DataView(e, this.readOffset).getUint16(0, !isLe$1),
            i = "";i = t > 0 ? UTF8$1$1.decode(new Uint8Array(e, this.readOffset + 2, t)) : "";var r = t + 2;return this.readOffset += r, { data: i, bodySize: t + 2 };
      } }, { key: "parseDate", value: function value(e, t) {
        var i = new DataView(e, this.readOffset, t),
            r = i.getFloat64(0, !isLe$1);return r += 60 * i.getInt16(8, !isLe$1) * 1e3, this.readOffset += 10, { data: new Date(r), bodySize: 10 };
      } }, { key: "parseObject", value: function value(e, t) {
        var i = this.parseString(e, t),
            r = this.parseValue(e, t - i.bodySize);return { data: { name: i.data, value: r.data }, bodySize: i.bodySize + r.bodySize, isObjEnd: r.isObjEnd };
      } }, { key: "parseLongString", value: function value(e) {
        var t = new DataView(e, this.readOffset).getUint32(0, !isLe$1),
            i = "";return i = t > 0 ? UTF8$1$1.decode(new Uint8Array(e, this.readOffset + 2, t)) : "", this.readOffset += t + 4, { data: i, bodySize: t + 4 };
      } }, { key: "parseValue", value: function value(e, t) {
        var i = new ArrayBuffer();i = e instanceof ArrayBuffer ? e : e.buffer;var r = DATA_TYPES$1.NUMBER,
            n = DATA_TYPES$1.BOOLEAN,
            a = DATA_TYPES$1.STRING,
            s = DATA_TYPES$1.OBJECT,
            o = DATA_TYPES$1.MIX_ARRAY,
            u = DATA_TYPES$1.OBJECT_END,
            l = DATA_TYPES$1.STRICT_ARRAY,
            h = DATA_TYPES$1.DATE,
            d = DATA_TYPES$1.LONE_STRING,
            f = new DataView(i, this.readOffset, t),
            c = !1,
            p = f.getUint8(0),
            v = 1;this.readOffset += 1;var E = null;switch (p) {case r:
            E = f.getFloat64(1, !isLe$1), this.readOffset += 8, v += 8;break;case n:
            E = !!f.getUint8(1), this.readOffset += 1, v += 1;break;case a:
            var m = this.parseString(i);E = m.data, v += m.bodySize;break;case s:
            E = {};var y = 0;for (16777215 & f.getUint32(t - 4, !isLe$1) && (y = 3); v < t - 4;) {
              var _ = this.parseObject(i, t - v - y);if (_.isObjectEnd) break;E[_.data.name] = _.data.value, v += _.bodySize;
            }v <= t - 3 && 9 === (16777215 & f.getUint32(v - 1, !isLe$1)) && (this.readOffset += 3, v += 3);break;case o:
            E = {}, v += 4, this.readOffset += 4;var g = 0;for (9 == (16777215 & f.getUint32(t - 4, !isLe$1)) && (g = 3); v < t - 8;) {
              var S = this.parseObject(i, t - v - g);if (S.isObjectEnd) break;E[S.data.name] = S.data.value, v += S.bodySize;
            }v <= t - 3 && 9 === (16777215 & f.getUint32(v - 1, !isLe$1)) && (v += 3, this.readOffset += 3);break;case u:
            E = null, c = !0;break;case l:
            E = [];var k = f.getUint32(1, !isLe$1);v += 4, this.readOffset += 4;for (var T = 0; T < k; T++) {
              var b = this.parseValue(i, t - v);E.push(b.data), v += b.bodySize;
            }break;case h:
            var A = this.parseDate(i, t - 1);E = A.data, v += A.bodySize;break;case d:
            var R = this.parseLongString(i, t - 1);E = R.data, v += R.bodySize;break;default:
            v = t;}return { data: E, bodySize: v, isObjEnd: c };
      } }]), e;
  }(),
      DEMUX_EVENTS$1$1 = EVENTS$2.DEMUX_EVENTS,
      FlvDemuxer$1 = function () {
    function e() {
      classCallCheck$2(this, e), this._firstFragmentLoaded = !1, this._trackNum = 0, this._hasScript = !1;
    }return createClass$2(e, [{ key: "init", value: function value() {
        this.on(DEMUX_EVENTS$1$1.DEMUX_START, this.doParseFlv.bind(this));
      } }, { key: "doParseFlv", value: function value() {
        if (this._firstFragmentLoaded) {
          if (this.loaderBuffer.length < 11) return;var e = void 0,
              t = 1e4;do {
            e = this._parseFlvTag();
          } while (e && t-- > 0);this.emit(DEMUX_EVENTS$1$1.DEMUX_COMPLETE);
        } else {
          if (this.loaderBuffer.length < 13) return;var i = this.loaderBuffer.shift(13);this.parseFlvHeader(i), this.doParseFlv();
        }
      } }, { key: "parseFlvHeader", value: function value(t) {
        e.isFlvFile(t) ? (this._firstFragmentLoaded = !0, this.initVideoTrack(), this.initAudioTrack()) : (this.emit(DEMUX_EVENTS$1$1.DEMUX_ERROR, new Error("invalid flv file")), this.doParseFlv()), this.doParseFlv();
      } }, { key: "initVideoTrack", value: function value() {
        this._trackNum++;var e = new VideoTrack$1$1();e.meta = new VideoTrackMeta$1$1(), e.id = e.meta.id = this._trackNum, this.tracks.videoTrack = e;
      } }, { key: "initAudioTrack", value: function value() {
        this._trackNum++;var e = new AudioTrack$1$1();e.meta = new AudioTrackMeta$1$1(), e.id = e.meta.id = this._trackNum, this.tracks.audioTrack = e;
      } }, { key: "_parseFlvTag", value: function value() {
        if (this.loaderBuffer.length < 11) return null;var e = this._parseFlvTagHeader();return e && this._processChunk(e), e;
      } }, { key: "_parseFlvTagHeader", value: function value() {
        var e = 0,
            t = {},
            i = this.loaderBuffer.toInt(e, 1);if (e += 1, t.filtered = (32 & i) >>> 5, t.tagType = 31 & i, t.datasize = this.loaderBuffer.toInt(e, 3), e += 3, 8 !== t.tagType && 9 !== t.tagType && 11 !== t.tagType && 18 !== t.tagType || 0 !== this.loaderBuffer.toInt(8, 3)) return this.loaderBuffer && this.loaderBuffer.length > 0 && this.loaderBuffer.shift(1), this.emit(DEMUX_EVENTS$1$1.DEMUX_ERROR, this.TAG, new Error("tagType " + t.tagType), !1), null;if (this.loaderBuffer.length < t.datasize + 15) return null;this.loaderBuffer.shift(4);var r = this.loaderBuffer.toInt(0, 3);this.loaderBuffer.shift(3);var n = this.loaderBuffer.shift(1)[0];return n > 0 && (r += 16777216 * n), t.dts = r, this.loaderBuffer.shift(3), t;
      } }, { key: "_processChunk", value: function value(e) {
        switch (e.tagType) {case 18:
            this._parseScriptData(e);break;case 8:
            this._parseAACData(e);break;case 9:
            this._parseHevcData(e);break;case 11:
            this.loaderBuffer.shift(3);break;default:
            this.loaderBuffer.shift(1);}
      } }, { key: "_parseScriptData", value: function value(e) {
        var t = this.tracks.audioTrack,
            i = this.tracks.videoTrack,
            r = this.loaderBuffer.shift(e.datasize),
            n = new AMFParser$1().resolve(r, r.length),
            a = this._context.onMetaData = n ? n.onMetaData : void 0;if (this._context.mediaInfo.duration = a.duration, this._context.mediaInfo.hasVideo = a.hasVideo, this._context.mediaInfo.hsaAudio = a.hasAudio, this._datasizeValidator(e.datasize) && (this.emit(DEMUX_EVENTS$1$1.MEDIA_INFO), this._hasScript = !0), t && !t.hasSpecificConfig) {
          var s = t.meta;switch (a.audiosamplerate && (s.sampleRate = a.audiosamplerate), a.audiochannels && (s.channelCount = a.audiochannels), a.audiosamplerate) {case 44100:
              s.sampleRateIndex = 4;break;case 22050:
              s.sampleRateIndex = 7;break;case 11025:
              s.sampleRateIndex = 10;}
        }if (i && !i.hasSpecificConfig) {
          var o = i.meta;if ("number" == typeof a.framerate) {
            var u = Math.floor(1e3 * a.framerate);if (u > 0) {
              var l = u / 1e3;o.frameRate || (o.frameRate = {}), o.frameRate.fixed = !0, o.frameRate.fps = l, o.frameRate.fps_num = u, o.frameRate.fps_den = 1e3;
            }
          }
        }
      } }, { key: "_aacSequenceHeaderParser", value: function value(e) {
        var t = {};t.hasSpecificConfig = !0, t.objectType = e[1] >>> 3, t.sampleRateIndex = (7 & e[1]) << 1 | e[2] >>> 7, t.audiosamplerate = this._switchAudioSampleRate(t.sampleRateIndex), t.channelCount = (120 & e[2]) >>> 3, t.frameLength = (4 & e[2]) >>> 2, t.dependsOnCoreCoder = (2 & e[2]) >>> 1, t.extensionFlagIndex = 1 & e[2], t.codec = "mp4a.40." + t.objectType;var i = window.navigator.userAgent.toLowerCase(),
            r = void 0,
            n = void 0,
            a = t.sampleRateIndex;return -1 !== i.indexOf("firefox") ? t.sampleRateIndex >= 6 ? (t.objectType = 5, n = new Array(4), r = a - 3) : (t.objectType = 2, n = new Array(2), r = a) : -1 !== i.indexOf("android") ? (t.objectType = 2, n = new Array(2), r = a) : (t.objectType = 5, r = t.sampleRateIndex, n = new Array(4), t.sampleRateIndex >= 6 ? r = t.sampleRateIndex - 3 : 1 === t.channelCount && (t.objectType = 2, n = new Array(2), r = t.sampleRateIndex)), n[0] = t.objectType << 3, n[0] |= (15 & t.sampleRateIndex) >>> 1, n[1] = (15 & t.sampleRateIndex) << 7, n[1] |= (15 & t.channelCount) << 3, 5 === t.objectType && (n[1] |= (15 & r) >>> 1, n[2] = (1 & r) << 7, n[2] |= 8, n[3] = 0), t.config = n, t;
      } }, { key: "_parseAACData", value: function value(e) {
        var t = this.tracks.audioTrack;if (t) {
          var i = t.meta;i || (t.meta = new AudioTrackMeta$1$1(), i = t.meta);var r = this.loaderBuffer.shift(1)[0];e.data = this.loaderBuffer.shift(e.datasize - 1);var n = (240 & r) >>> 4;t.format = n, 10 !== n && this.emit(DEMUX_EVENTS$1$1.DEMUX_ERROR, new Error("invalid audio format: " + n)), 10 !== n || this._hasAudioSequence || (i.sampleRate = this._switchAudioSamplingFrequency(r), i.sampleRateIndex = (12 & r) >>> 2, i.frameLenth = (2 & r) >>> 1, i.channelCount = 1 & r, i.refSampleDuration = Math.floor(1024 / i.audioSampleRate * i.timescale));var a = i.audioSampleRate,
              s = i.sampleRateIndex,
              o = i.refSampleDuration;delete e.tagType;var u = this._datasizeValidator(e.datasize);if (0 === e.data[0]) {
            var l = this._aacSequenceHeaderParser(e.data);a = l.audiosamplerate || i.audioSampleRate, s = l.sampleRateIndex || i.sampleRateIndex, o = Math.floor(1024 / a * i.timescale), i.channelCount = l.channelCount, i.sampleRate = a, i.sampleRateIndex = s, i.refSampleDuration = o, i.duration = this._context.mediaInfo.duration * i.timescale, i.config = l.config;var h = this._context.mediaInfo.audio;h.codec = l.codec, h.channelCount = l.channelCount, h.sampleRate = a, h.sampleRateIndex = l.audioSampleRateIndex, this._hasAudioSequence ? this.emit(DEMUX_EVENTS$1$1.AUDIO_METADATA_CHANGE) : this.emit(DEMUX_EVENTS$1$1.METADATA_PARSED, "audio"), this._hasAudioSequence = !0, this._metaChange = !0;
          } else this._metaChange && (e.options = { meta: t.meta }, this._metaChange = !1), e.data = e.data.slice(1, e.data.length), t.samples.push(e);u || this.emit(DEMUX_EVENTS$1$1.DEMUX_ERROR, this.TAG, new Error("TAG length error at " + e.datasize), !1);
        }
      } }, { key: "_parseHevcData", value: function value(e) {
        var t = this.loaderBuffer.shift(1)[0];e.frameType = (240 & t) >>> 4, e.isKeyframe = 1 === e.frameType;var i = 15 & t;if (this.tracks.videoTrack.codecID = i, e.avcPacketType = this.loaderBuffer.shift(1)[0], e.cts = this.loaderBuffer.toInt(0, 3), this.loaderBuffer.shift(3), 12 === i) {
          var r = this.loaderBuffer.shift(e.datasize - 5);if (e.data = r, 0 !== Number.parseInt(e.avcPacketType)) {
            this._datasizeValidator(e.datasize) || this.emit(DEMUX_EVENTS$1$1.DEMUX_ERROR, this.TAG, new Error("invalid video tag datasize: " + e.datasize), !1);var n = {},
                a = 0;for (n.cts = e.cts, n.dts = e.dts; e.data.length > a;) {
              var s = e.data.slice(Number.parseInt(a), 4 + a);n.size = s[3], n.size += 256 * s[2], n.size += 256 * s[1] * 256, n.size += 256 * s[0] * 256 * 256, a += 4, n.data = e.data.slice(Number.parseInt(a), n.size + a), a += n.size, this.tracks.videoTrack.samples.push(n), this.emit(DEMUX_EVENTS$1$1.METADATA_PARSED, "video");
            }
          } else 0 === Number.parseInt(e.avcPacketType) && (this._datasizeValidator(e.datasize) ? this.emit(DEMUX_EVENTS$1$1.METADATA_PARSED, "video") : this.emit(DEMUX_EVENTS$1$1.DEMUX_ERROR, this.TAG, new Error("invalid video tag datasize: " + e.datasize), !1));
        } else if (7 === i) {
          var o = this.loaderBuffer.shift(e.datasize - 5);if (0 === o[4] && 0 === o[5] && 0 === o[6] && 1 === o[7]) {
            for (var u = 0, l = 0; l < 4; l++) {
              u = 256 * u + o[l];
            }u -= 4, (o = o.slice(4, o.length))[3] = u % 256, u = (u - o[3]) / 256, o[2] = u % 256, u = (u - o[2]) / 256, o[1] = u % 256, o[0] = (u - o[1]) / 256;
          }if (e.data = o, 0 === e.avcPacketType) this._avcSequenceHeaderParser(e.data), this._datasizeValidator(e.datasize) && (this._hasVideoSequence ? this.emit(DEMUX_EVENTS$1$1.VIDEO_METADATA_CHANGE) : this.emit(DEMUX_EVENTS$1$1.METADATA_PARSED, "video"), this._hasVideoSequence = !0), this._metaChange = !0;else {
            if (!this._datasizeValidator(e.datasize)) return void this.emit(DEMUX_EVENTS$1$1.DEMUX_ERROR, this.TAG, new Error("invalid video tag datasize: " + e.datasize), !1);this._metaChange && (e.options = { meta: Object.assign({}, this.tracks.videoTrack.meta) }, this._metaChange = !1), this.tracks.videoTrack.samples.push(e);
          }
        } else this.emit(DEMUX_EVENTS$1$1.DEMUX_ERROR, this.TAG, new Error("video codeid is " + i), !1), e.data = this.loaderBuffer.shift(e.datasize - 1), this._datasizeValidator(e.datasize) || this.emit(DEMUX_EVENTS$1$1.DEMUX_ERROR, this.TAG, new Error("invalid video tag datasize: " + e.datasize), !1), this.tracks.videoTrack.samples.push(e), this.emit(DEMUX_EVENTS$1$1.DEMUX_COMPLETE);delete e.tagType;
      } }, { key: "_avcSequenceHeaderParser", value: function value(e) {
        var t = this.tracks.videoTrack;if (t) {
          var i = 0;t.meta || (t.meta = new VideoTrackMeta$1$1());var r = t.meta;r.configurationVersion = e[0], r.avcProfileIndication = e[1], r.profileCompatibility = e[2], r.avcLevelIndication = e[3] / 10, r.nalUnitLength = 1 + (3 & e[4]);var n = 31 & e[5];i = 6;for (var a = {}, s = 0; s < n; s++) {
            var o = 255 * e[i] + e[i + 1];i += 2;for (var u = new Uint8Array(o), l = 0; l < o; l++) {
              u[l] = e[i + l];
            }for (var h = "avc1.", d = 1; d < 4; d++) {
              var f = u[d].toString(16);f.length < 2 && (f = "0" + f), h += f;
            }r.codec = h, i += o, this.tracks.videoTrack.meta.sps = u, a = SpsParser$1.parseSPS(u);
          }var c = e[i];i++;for (var p = 0; p < c; p++) {
            var v = 255 * e[i] + e[i + 1];i += 2;for (var E = new Uint8Array(v), m = 0; m < v; m++) {
              E[m] = e[i + m];
            }i += v, this.tracks.videoTrack.meta.pps = E;
          }Object.assign(r, SpsParser$1.toVideoMeta(a));var y = this._context.mediaInfo.video;y.codec = r.codec, y.profile = r.profile, y.level = r.level, y.chromaFormat = r.chromaFormat, y.frameRate = r.frameRate, y.parRatio = r.parRatio, y.width = y.width === r.presentWidth ? y.width : r.presentWidth, y.height = y.height === r.presentHeight ? y.width : r.presentHeight, r.duration = this._context.mediaInfo.duration * r.timescale, r.avcc = new Uint8Array(e.length), r.avcc.set(e), t.meta = r;
        }
      } }, { key: "_switchAudioSampleRate", value: function value(e) {
        return [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350][e];
      } }, { key: "_switchAudioSamplingFrequency", value: function value(e) {
        return [5500, 11025, 22050, 44100, 48e3][(12 & e) >>> 2];
      } }, { key: "_switchAudioChannel", value: function value(e) {
        return [1, 2][1 & e];
      } }, { key: "_datasizeValidator", value: function value(e) {
        var t = this.loaderBuffer.toInt(0, 4);return this.loaderBuffer.shift(4), t === e + 11;
      } }, { key: "loaderBuffer", get: function get() {
        var e = this._context.getInstance("LOADER_BUFFER");if (e) return e;this.emit(DEMUX_EVENTS$1$1.DEMUX_ERROR, new Error("找不到 loaderBuffer 实例"));
      } }, { key: "tracks", get: function get() {
        return this._context.getInstance("TRACKS");
      } }, { key: "logger", get: function get() {
        return this._context.getInstance("LOGGER");
      } }], [{ key: "isFlvFile", value: function value(e) {
        return !(70 !== e[0] || 76 !== e[1] || 86 !== e[2] || 1 !== e[3]);
      } }, { key: "getPlayType", value: function value(e) {
        var t = { hasVideo: !1, hasAudio: !1 };return !0 & e && (t.hasVideo = !0), !0 & e && (t.hasAudio = !0), t;
      } }]), e;
  }(),
      Fmp4$1 = function () {
    function e() {
      classCallCheck(this, e);
    }return createClass(e, null, [{ key: "size", value: function value(e) {
        return Buffer$1$1.writeUint32(e);
      } }, { key: "initBox", value: function value(t, i) {
        for (var r = new Buffer$1$1(), n = arguments.length, a = Array(n > 2 ? n - 2 : 0), s = 2; s < n; s++) {
          a[s - 2] = arguments[s];
        }return r.write.apply(r, [e.size(t), e.type(i)].concat(a)), r.buffer;
      } }, { key: "extension", value: function value(e, t) {
        return new Uint8Array([e, t >> 16 & 255, t >> 8 & 255, 255 & t]);
      } }, { key: "ftyp", value: function value() {
        return e.initBox(24, "ftyp", new Uint8Array([105, 115, 111, 109, 0, 0, 0, 1, 105, 115, 111, 109, 97, 118, 99, 49]));
      } }, { key: "moov", value: function value(t) {
        var i = t.type,
            r = t.meta,
            n = 8,
            a = e.mvhd(r.duration, r.timescale),
            s = void 0;s = "video" === i ? e.videoTrak(r) : e.audioTrak(r);var o = e.mvex(r.duration, r.timescale || 1e3, r.id);return [a, s, o].forEach(function (e) {
          n += e.byteLength;
        }), e.initBox(n, "moov", a, s, o);
      } }, { key: "mvhd", value: function value(t) {
        var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3,
            r = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, i >>> 24 & 255, i >>> 16 & 255, i >>> 8 & 255, 255 & i, t >>> 24 & 255, t >>> 16 & 255, t >>> 8 & 255, 255 & t, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255]);return e.initBox(8 + r.length, "mvhd", new Uint8Array(r));
      } }, { key: "videoTrak", value: function value(t) {
        var i = 8,
            r = e.tkhd({ id: 1, duration: t.duration, timescale: t.timescale || 1e3, width: t.presentWidth, height: t.presentHeight, type: "video" }),
            n = e.mdia({ type: "video", timescale: t.timescale || 1e3, duration: t.duration, avcc: t.avcc, parRatio: t.parRatio, width: t.presentWidth, height: t.presentHeight });return [r, n].forEach(function (e) {
          i += e.byteLength;
        }), e.initBox(i, "trak", r, n);
      } }, { key: "audioTrak", value: function value(t) {
        var i = 8,
            r = e.tkhd({ id: 2, duration: t.duration, timescale: t.timescale || 1e3, width: 0, height: 0, type: "audio" }),
            n = e.mdia({ type: "audio", timescale: t.timescale || 1e3, duration: t.duration, channelCount: t.channelCount, samplerate: t.sampleRate, config: t.config });return [r, n].forEach(function (e) {
          i += e.byteLength;
        }), e.initBox(i, "trak", r, n);
      } }, { key: "tkhd", value: function value(t) {
        var i = t.id,
            r = t.duration,
            n = t.width,
            a = t.height,
            s = new Uint8Array([0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, i >>> 24 & 255, i >>> 16 & 255, i >>> 8 & 255, 255 & i, 0, 0, 0, 0, r >>> 24 & 255, r >>> 16 & 255, r >>> 8 & 255, 255 & r, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, n >>> 8 & 255, 255 & n, 0, 0, a >>> 8 & 255, 255 & a, 0, 0]);return e.initBox(8 + s.byteLength, "tkhd", s);
      } }, { key: "edts", value: function value(t) {
        var i = new Buffer$1$1(),
            r = t.duration,
            n = t.mediaTime;return i.write(e.size(36), e.type("edts")), i.write(e.size(28), e.type("elst")), i.write(new Uint8Array([0, 0, 0, 1, r >> 24 & 255, r >> 16 & 255, r >> 8 & 255, 255 & r, n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, 255 & n, 0, 0, 0, 1])), i.buffer;
      } }, { key: "mdia", value: function value(t) {
        var i = 8,
            r = e.mdhd(t.timescale, t.duration),
            n = e.hdlr(t.type),
            a = e.minf(t);return [r, n, a].forEach(function (e) {
          i += e.byteLength;
        }), e.initBox(i, "mdia", r, n, a);
      } }, { key: "mdhd", value: function value() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1e3,
            i = arguments[1],
            r = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, t >>> 24 & 255, t >>> 16 & 255, t >>> 8 & 255, 255 & t, i >>> 24 & 255, i >>> 16 & 255, i >>> 8 & 255, 255 & i, 85, 196, 0, 0]);return e.initBox(12 + r.byteLength, "mdhd", e.extension(0, 0), r);
      } }, { key: "hdlr", value: function value(t) {
        var i = [0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 105, 100, 101, 111, 72, 97, 110, 100, 108, 101, 114, 0];return "audio" === t && (i.splice.apply(i, [8, 4].concat([115, 111, 117, 110])), i.splice.apply(i, [24, 13].concat([83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0]))), e.initBox(8 + i.length, "hdlr", new Uint8Array(i));
      } }, { key: "minf", value: function value(t) {
        var i = 8,
            r = "video" === t.type ? e.vmhd() : e.smhd(),
            n = e.dinf(),
            a = e.stbl(t);return [r, n, a].forEach(function (e) {
          i += e.byteLength;
        }), e.initBox(i, "minf", r, n, a);
      } }, { key: "vmhd", value: function value() {
        return e.initBox(20, "vmhd", new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]));
      } }, { key: "smhd", value: function value() {
        return e.initBox(16, "smhd", new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]));
      } }, { key: "dinf", value: function value() {
        var t = new Buffer$1$1(),
            i = [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1];return t.write(e.size(36), e.type("dinf"), e.size(28), e.type("dref"), new Uint8Array(i)), t.buffer;
      } }, { key: "stbl", value: function value(t) {
        var i = 8,
            r = e.stsd(t),
            n = e.stts(),
            a = e.stsc(),
            s = e.stsz(),
            o = e.stco();return [r, n, a, s, o].forEach(function (e) {
          i += e.byteLength;
        }), e.initBox(i, "stbl", r, n, a, s, o);
      } }, { key: "stsd", value: function value(t) {
        var i = void 0;return i = "audio" === t.type ? e.mp4a(t) : e.avc1(t), e.initBox(16 + i.byteLength, "stsd", e.extension(0, 0), new Uint8Array([0, 0, 0, 1]), i);
      } }, { key: "mp4a", value: function value(t) {
        var i = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, t.channelCount, 0, 16, 0, 0, 0, 0, t.samplerate >> 8 & 255, 255 & t.samplerate, 0, 0]),
            r = e.esds(t.config);return e.initBox(8 + i.byteLength + r.byteLength, "mp4a", i, r);
      } }, { key: "esds", value: function value() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [43, 146, 8, 0],
            i = t.length,
            r = new Buffer$1$1(),
            n = new Uint8Array([0, 0, 0, 0, 3, 23 + i, 0, 1, 0, 4, 15 + i, 64, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5].concat([i]).concat(t).concat([6, 1, 2]));return r.write(e.size(8 + n.byteLength), e.type("esds"), n), r.buffer;
      } }, { key: "avc1", value: function value(t) {
        var i = new Buffer$1$1(),
            r = t.width,
            n = t.height,
            a = t.parRatio.height,
            s = t.parRatio.width,
            o = t.avcc,
            u = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, r >> 8 & 255, 255 & r, n >> 8 & 255, 255 & n, 0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 18, 100, 97, 105, 108, 121, 109, 111, 116, 105, 111, 110, 47, 104, 108, 115, 46, 106, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 17, 17]),
            l = new Uint8Array([0, 28, 156, 128, 0, 45, 198, 192, 0, 45, 198, 192]),
            h = new Uint8Array([a >> 24, a >> 16 & 255, a >> 8 & 255, 255 & a, s >> 24, s >> 16 & 255, s >> 8 & 255, 255 & s]);return i.write(e.size(40 + u.byteLength + o.byteLength + l.byteLength), e.type("avc1"), u, e.size(8 + o.byteLength), e.type("avcC"), o, e.size(20), e.type("btrt"), l, e.size(16), e.type("pasp"), h), i.buffer;
      } }, { key: "stts", value: function value() {
        var t = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]);return e.initBox(16, "stts", t);
      } }, { key: "stsc", value: function value() {
        var t = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]);return e.initBox(16, "stsc", t);
      } }, { key: "stco", value: function value() {
        var t = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]);return e.initBox(16, "stco", t);
      } }, { key: "stsz", value: function value() {
        var t = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);return e.initBox(20, "stsz", t);
      } }, { key: "mvex", value: function value(t) {
        var i = arguments[2],
            r = new Buffer$1$1(),
            n = Buffer$1$1.writeUint32(t);return r.write(e.size(56), e.type("mvex"), e.size(16), e.type("mehd"), e.extension(0, 0), n, e.trex(i)), r.buffer;
      } }, { key: "trex", value: function value(t) {
        var i = new Uint8Array([0, 0, 0, 0, t >> 24, t >> 16 & 255, t >> 8 & 255, 255 & t, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1]);return e.initBox(8 + i.byteLength, "trex", i);
      } }, { key: "moof", value: function value(t) {
        var i = 8,
            r = e.mfhd(),
            n = e.traf(t);return [r, n].forEach(function (e) {
          i += e.byteLength;
        }), e.initBox(i, "moof", r, n);
      } }, { key: "mfhd", value: function value() {
        var t = Buffer$1$1.writeUint32(e.sequence);return e.sequence += 1, e.initBox(16, "mfhd", e.extension(0, 0), t);
      } }, { key: "traf", value: function value(t) {
        var i = 8,
            r = e.tfhd(t.id),
            n = e.tfdt(t.time),
            a = e.sdtp(t),
            s = e.trun(t, a.byteLength);return [r, n, s, a].forEach(function (e) {
          i += e.byteLength;
        }), e.initBox(i, "traf", r, n, s, a);
      } }, { key: "tfhd", value: function value(t) {
        var i = Buffer$1$1.writeUint32(t);return e.initBox(16, "tfhd", e.extension(0, 0), i);
      } }, { key: "tfdt", value: function value(t) {
        return e.initBox(16, "tfdt", e.extension(0, 0), Buffer$1$1.writeUint32(t));
      } }, { key: "trun", value: function value(t, i) {
        var r = new Buffer$1$1(),
            n = Buffer$1$1.writeUint32(t.samples.length),
            a = Buffer$1$1.writeUint32(92 + 16 * t.samples.length + i);return r.write(e.size(20 + 16 * t.samples.length), e.type("trun"), new Uint8Array([0, 0, 15, 1]), n, a), t.samples.forEach(function (e) {
          var t = e.flags;r.write(new Uint8Array([e.duration >>> 24 & 255, e.duration >>> 16 & 255, e.duration >>> 8 & 255, 255 & e.duration, e.size >>> 24 & 255, e.size >>> 16 & 255, e.size >>> 8 & 255, 255 & e.size, t.isLeading << 2 | t.dependsOn, t.isDependedOn << 6 | t.hasRedundancy << 4 | t.isNonSync, 0, 0, e.cts >>> 24 & 255, e.cts >>> 16 & 255, e.cts >>> 8 & 255, 255 & e.cts]));
        }), r.buffer;
      } }, { key: "sdtp", value: function value(t) {
        var i = new Buffer$1$1();return i.write(e.size(12 + t.samples.length), e.type("sdtp"), e.extension(0, 0)), t.samples.forEach(function (e) {
          var t = e.flags,
              r = t.isLeading << 6 | t.dependsOn << 4 | t.isDependedOn << 2 | t.hasRedundancy;i.write(new Uint8Array([r]));
        }), i.buffer;
      } }, { key: "mdat", value: function value(t) {
        var i = new Buffer$1$1(),
            r = 8;t.samples.forEach(function (e) {
          r += e.size;
        }), i.write(e.size(r), e.type("mdat"));var n = new Uint8Array(r),
            a = 0;return n.set(i.buffer, a), a += 8, t.samples.forEach(function (e) {
          e.buffer.forEach(function (e) {
            n.set(e, a), a += e.byteLength;
          });
        }), n;
      } }]), e;
  }();Fmp4$1.type = function (e) {
    return new Uint8Array([e.charCodeAt(0), e.charCodeAt(1), e.charCodeAt(2), e.charCodeAt(3)]);
  }, Fmp4$1.sequence = 1;var REMUX_EVENTS$2$1 = EVENTS$2.REMUX_EVENTS,
      Mp4Remuxer$1 = function () {
    function e() {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;classCallCheck(this, e), this._dtsBase = 1e3 * t, this._isDtsBaseInited = !1, this._videoSegmentList = new MediaSegmentList$1$1("video"), this._audioSegmentList = new MediaSegmentList$1$1("audio");var i = sniffer$1$1.browser;this._fillSilenceFrame = "ie" === i, this.isFirstVideo = !0, this.isFirstAudio = !0, this.videoAllDuration = 0, this.audioAllDuration = 0;
    }return createClass(e, [{ key: "init", value: function value() {
        this.on(REMUX_EVENTS$2$1.REMUX_MEDIA, this.remux.bind(this)), this.on(REMUX_EVENTS$2$1.REMUX_METADATA, this.onMetaDataReady.bind(this)), this.on(REMUX_EVENTS$2$1.DETECT_CHANGE_STREAM, this.resetDtsBase.bind(this));
      } }, { key: "destroy", value: function value() {
        this._dtsBase = -1, this._dtsBaseInited = !1, this._videoSegmentList.clear(), this._audioSegmentList.clear(), this._videoSegmentList = null, this._audioSegmentList = null;
      } }, { key: "remux", value: function value() {
        var e = this._context.getInstance("TRACKS"),
            t = e.audioTrack,
            i = e.videoTrack;!this._isDtsBaseInited && this.calcDtsBase(t, i), this._remuxVideo(i), this._remuxAudio(t);
      } }, { key: "resetDtsBase", value: function value() {
        this._dtsBase = 0, this._dtsBaseInited = !1;
      } }, { key: "seek", value: function value() {
        this._videoSegmentList.clear(), this._audioSegmentList.clear();
      } }, { key: "onMetaDataReady", value: function value(e) {
        var t = void 0;t = "audio" === e ? this._context.getInstance("TRACKS").audioTrack : this._context.getInstance("TRACKS").videoTrack;var i = this._context.getInstance("PRE_SOURCE_BUFFER"),
            r = i.getSource(e);r || (r = i.createSource(e)), r.mimetype = t.meta.codec, r.init = this.remuxInitSegment(e, t.meta), this.emit(REMUX_EVENTS$2$1.INIT_SEGMENT, e);
      } }, { key: "remuxInitSegment", value: function value(e, t) {
        var i = new Buffer$1$1(),
            r = Fmp4$1.ftyp(),
            n = Fmp4$1.moov({ type: e, meta: t });return i.write(r, n), i;
      } }, { key: "calcDtsBase", value: function value(e, t) {
        if (!e && t.samples.length) return t.samples[0].dts;if (e.samples.length || t.samples.length) {
          var i = 1 / 0,
              r = 1 / 0;e.samples && e.samples.length && (i = e.samples[0].dts), t.samples && t.samples.length && (r = t.samples[0].dts), this._dtsBase = Math.min(i, r) - this._dtsBase, this._isDtsBaseInited = !0;
        }
      } }, { key: "_remuxVideo", value: function value(e) {
        var t = e || {};if (e.samples && e.samples.length) {
          for (var i = t.samples, r = -1, n = null, a = [], s = { samples: [] }, o = 1e4; i.length && o-- > 0;) {
            var u = i.shift(),
                l = u.isKeyframe,
                h = u.options;if (!this.isFirstVideo && h && h.meta) {
              n = this.remuxInitSegment("video", h.meta), h.meta = null, i.unshift(u), h.isContinue || this.resetDtsBase();break;
            }var d = u.dts - this._dtsBase;-1 === r && (r = d);var f = void 0,
                c = void 0;void 0 !== u.pts && (f = (c = u.pts - this._dtsBase) - d), void 0 !== u.cts && (c = u.cts + d, f = u.cts);var p = { buffer: [], size: 0 },
                v = 0;v = u.duration ? u.duration : i.length >= 1 ? i[0].dts - this._dtsBase - d : a.length >= 1 ? a[a.length - 1].duration : this.videoMeta.refSampleDuration, this.videoAllDuration += v, console.log("video dts " + d, "pts " + c, l, "duration " + v), v >= 0 && (s.samples.push(p), p.buffer.push(u.data), p.size += u.data.byteLength, a.push({ dts: d, cts: f, pts: c, data: u.data, size: u.data.byteLength, isKeyframe: l, duration: v, flags: { isLeading: 0, dependsOn: l ? 2 : 1, isDependedOn: l ? 1 : 0, hasRedundancy: 0, isNonSync: l ? 0 : 1 }, originDts: d, type: "video" })), l && this.emit(REMUX_EVENTS$2$1.RANDOM_ACCESS_POINT, c);
          }var E = new Buffer$1$1();if (a.length) {
            var m = Fmp4$1.moof({ id: t.meta.id, time: r, samples: a }),
                y = Fmp4$1.mdat(s);E.write(m, y), this.writeToSource("video", E);
          }if (n && (this.writeToSource("video", n), i.length)) return t.samples = i, this._remuxVideo(t);this.isFirstVideo = !1, this.emit(REMUX_EVENTS$2$1.MEDIA_SEGMENT, "video"), t.samples = [], t.length = 0;
        }
      } }, { key: "_remuxAudio", value: function value(e) {
        var t = (e || {}).samples,
            i = -1,
            r = [],
            n = null,
            a = { samples: [] };if (t && t.length) {
          for (var s = 1e4, o = !1; t.length && s-- > 0;) {
            var u = t.shift(),
                l = u.data,
                h = u.options;if (!this.isFirstAudio && h && h.meta) {
              n = this.remuxInitSegment("audio", h.meta), h.meta = null, t.unshift(u), h.isContinue || this.resetDtsBase();break;
            }var d = u.dts - this._dtsBase,
                f = d;o || (i = d, o = !0);var c = 0;c = u.duration ? u.duration : this.audioMeta.refSampleDurationFixed ? this.audioMeta.refSampleDurationFixed : t.length >= 1 ? t[0].dts - this._dtsBase - d : r.length >= 1 ? r[r.length - 1].duration : this.audioMeta.refSampleDuration, console.log("audio dts " + d, "pts " + d, "duration " + c), this.audioAllDuration += c;var p = { dts: d, pts: d, cts: 0, size: l.byteLength, duration: u.duration ? u.duration : c, flags: { isLeading: 0, dependsOn: 2, isDependedOn: 1, hasRedundancy: 0, isNonSync: 0 }, isKeyframe: !0, originDts: f, type: "audio" },
                v = { buffer: [], size: 0 };c >= 0 && (v.buffer.push(l), v.size += l.byteLength, a.samples.push(v), r.push(p));
          }var E = new Buffer$1$1();if (r.length) {
            var m = Fmp4$1.moof({ id: e.meta.id, time: i, samples: r }),
                y = Fmp4$1.mdat(a);E.write(m, y), this.writeToSource("audio", E);
          }if (n && (this.writeToSource("audio", n), t.length)) return e.samples = t, this._remuxAudio(e);this.isFirstAudio = !1, this.emit(REMUX_EVENTS$2$1.MEDIA_SEGMENT, "audio", E), e.samples = [], e.length = 0;
        }
      } }, { key: "writeToSource", value: function value(e, t) {
        var i = this._context.getInstance("PRE_SOURCE_BUFFER"),
            r = i.getSource(e);r || (r = i.createSource(e)), r.data.push(t);
      } }, { key: "initSilentAudio", value: function value(t, i) {
        var r = e.getSilentFrame(this._audioMeta.channelCount);return { dts: t, pts: t, cts: 0, duration: i, unit: r, size: r.byteLength, originDts: t, type: "video" };
      } }, { key: "destroy", value: function value() {
        this._player = null;
      } }, { key: "videoMeta", get: function get() {
        return this._context.getInstance("TRACKS").videoTrack.meta;
      } }, { key: "audioMeta", get: function get() {
        return this._context.getInstance("TRACKS").audioTrack.meta;
      } }], [{ key: "getSilentFrame", value: function value(e) {
        return 1 === e ? new Uint8Array([0, 200, 0, 128, 35, 128]) : 2 === e ? new Uint8Array([33, 0, 73, 144, 2, 25, 0, 35, 128]) : 3 === e ? new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 142]) : 4 === e ? new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 128, 44, 128, 8, 2, 56]) : 5 === e ? new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 56]) : 6 === e ? new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 0, 178, 0, 32, 8, 224]) : null;
      } }]), e;
  }(),
      Remuxer = { Mp4Remuxer: Mp4Remuxer$1 },
      LOADER_EVENTS$1$1 = EVENTS$2.LOADER_EVENTS,
      READ_STREAM$1 = 0,
      READ_TEXT$1 = 1,
      READ_JSON$1 = 2,
      READ_BUFFER$1 = 3,
      FetchLoader$1 = function () {
    function e(t) {
      classCallCheck(this, e), this.configs = Object.assign({}, t), this.url = null, this.status = 0, this.error = null, this._reader = null, this._canceled = !1, this._destroyed = !1, this.readtype = this.configs.readtype, this.buffer = this.configs.buffer || "LOADER_BUFFER", this._loaderTaskNo = 0;
    }return createClass(e, [{ key: "init", value: function value() {
        this.on(LOADER_EVENTS$1$1.LADER_START, this.load.bind(this));
      } }, { key: "load", value: function value(e, t) {
        var i = this;this.url = e, this._canceled = !1;var r = this.getParams(t);return this.loading = !0, fetch(this.url, r).then(function (e) {
          if (e.ok) return i.status = e.status, Promise.resolve().then(function () {
            i._onFetchResponse(e);
          }), Promise.resolve(e);i.loading = !1, i.emit(LOADER_EVENTS$1$1.LOADER_ERROR, i.TAG, new Error(e.status + " (" + e.statusText + ")"));
        }).catch(function (e) {
          throw i.loading = !1, i.emit(LOADER_EVENTS$1$1.LOADER_ERROR, i.TAG, e), e;
        });
      } }, { key: "_onFetchResponse", value: function value(e) {
        var t = this,
            i = this._context.getInstance(this.buffer),
            r = ++this._loaderTaskNo;if (!0 === e.ok) switch (this.readtype) {case READ_JSON$1:
            e.json().then(function (e) {
              t.loading = !1, t._canceled || t._destroyed || (i ? (i.push(e), t.emit(LOADER_EVENTS$1$1.LOADER_COMPLETE, i)) : t.emit(LOADER_EVENTS$1$1.LOADER_COMPLETE, e));
            });break;case READ_TEXT$1:
            e.text().then(function (e) {
              t.loading = !1, t._canceled || t._destroyed || (i ? (i.push(e), t.emit(LOADER_EVENTS$1$1.LOADER_COMPLETE, i)) : t.emit(LOADER_EVENTS$1$1.LOADER_COMPLETE, e));
            });break;case READ_BUFFER$1:
            e.arrayBuffer().then(function (e) {
              t.loading = !1, t._canceled || t._destroyed || (i ? (i.push(new Uint8Array(e)), t.emit(LOADER_EVENTS$1$1.LOADER_COMPLETE, i)) : t.emit(LOADER_EVENTS$1$1.LOADER_COMPLETE, e));
            });break;case READ_STREAM$1:default:
            return this._onReader(e.body.getReader(), r);}
      } }, { key: "_onReader", value: function value(e, t) {
        var i = this,
            r = this._context.getInstance(this.buffer);if (!r && this._reader || this._destroyed) try {
          this._reader.cancel();
        } catch (e) {}this._reader = e, !1 !== this.loading && this._reader && this._reader.read().then(function (n) {
          if (!i._canceled && !i._destroyed) return n.done ? (i.loading = !1, i.status = 0, void Promise.resolve().then(function () {
            i.emit(LOADER_EVENTS$1$1.LOADER_COMPLETE, r);
          })) : (r.push(n.value), Promise.resolve().then(function () {
            i.emit(LOADER_EVENTS$1$1.LOADER_DATALOADED, r);
          }), i._onReader(e, t));if (i._reader) try {
            i._reader.cancel();
          } catch (e) {}
        }).catch(function (e) {
          throw i.loading = !1, i.emit(LOADER_EVENTS$1$1.LOADER_ERROR, i.TAG, e), e;
        });
      } }, { key: "getParams", value: function value(e) {
        var t = Object.assign({}, e),
            i = new Headers(),
            r = { method: "GET", headers: i, mode: "cors", cache: "default" };if ("object" === _typeof(this.configs.headers)) {
          var n = this.configs.headers;for (var a in n) {
            n.hasOwnProperty(a) && i.append(a, n[a]);
          }
        }if ("object" === _typeof(t.headers)) {
          var s = t.headers;for (var o in s) {
            s.hasOwnProperty(o) && i.append(o, s[o]);
          }
        }return !1 === t.cors && (r.mode = "same-origin"), t.withCredentials && (r.credentials = "include"), r;
      } }, { key: "cancel", value: function value() {
        if (this._reader) {
          try {
            this._reader.cancel();
          } catch (e) {}this._reader = null, this.loading = !1;
        }this._canceled = !0;
      } }, { key: "destroy", value: function value() {
        this._destroyed = !0, this.cancel();
      } }], [{ key: "type", get: function get() {
        return "loader";
      } }]), e;
  }(),
      FetchLoader$1$1 = FetchLoader$1,
      REMUX_EVENTS$3$1 = EVENTS$2.REMUX_EVENTS,
      DEMUX_EVENTS$2$1 = EVENTS$2.DEMUX_EVENTS,
      LOADER_EVENTS$2$1 = EVENTS$2.LOADER_EVENTS,
      Tag$1 = "FLVController",
      Logger$1 = function () {
    function e() {
      classCallCheck$2(this, e);
    }return createClass$2(e, [{ key: "warn", value: function value() {} }]), e;
  }(),
      FLV_ERROR$1 = "FLV_ERROR",
      FlvController$1 = function () {
    function e(t, i) {
      classCallCheck$2(this, e), this.TAG = Tag$1, this._player = t, this.mse = i, this.state = { initSegmentArrived: !1, range: { start: 0, end: "" }, rangeSupport: !0 };
    }return createClass$2(e, [{ key: "init", value: function value() {
        this._context.registry("FETCH_LOADER", FetchLoader$1$1), this._context.registry("LOADER_BUFFER", XgBuffer$1$1), this._context.registry("FLV_DEMUXER", FlvDemuxer$1), this._context.registry("TRACKS", Tracks$1$1), this._context.registry("MP4_REMUXER", Remuxer.Mp4Remuxer)(this._player.currentTime), this._context.registry("PRE_SOURCE_BUFFER", PreSource$1$1), this._context.registry("LOGGER", Logger$1), this.mse || (this.mse = new Mse$1({ container: this._player.video }, this._context), this.mse.init()), this.initListeners();
      } }, { key: "initListeners", value: function value() {
        this.on(LOADER_EVENTS$2$1.LOADER_DATALOADED, this._handleLoaderDataLoaded.bind(this)), this.on(LOADER_EVENTS$2$1.LOADER_ERROR, this._handleNetworkError.bind(this)), this.on(DEMUX_EVENTS$2$1.MEDIA_INFO, this._handleMediaInfo.bind(this)), this.on(DEMUX_EVENTS$2$1.METADATA_PARSED, this._handleMetadataParsed.bind(this)), this.on(DEMUX_EVENTS$2$1.DEMUX_COMPLETE, this._handleDemuxComplete.bind(this)), this.on(DEMUX_EVENTS$2$1.DEMUX_ERROR, this._handleDemuxError.bind(this)), this.on(REMUX_EVENTS$3$1.INIT_SEGMENT, this._handleAppendInitSegment.bind(this)), this.on(REMUX_EVENTS$3$1.MEDIA_SEGMENT, this._handleMediaSegment.bind(this));
      } }, { key: "_handleMediaInfo", value: function value() {
        var e = this;this._context.onMetaData || this.emit(DEMUX_EVENTS$2$1.DEMUX_ERROR, new Error("failed to get mediainfo"));var t = this._context.getInstance("LOADER_BUFFER"),
            i = this._context.getInstance("FETCH_LOADER");this.isSeekable && (i.cancel(), this.state.range = { start: 0, end: t.historyLen - 1 }, setTimeout(function () {
          e.loadNext(0);
        }));
      } }, { key: "_handleLoaderDataLoaded", value: function value() {
        this.emitTo("FLV_DEMUXER", DEMUX_EVENTS$2$1.DEMUX_START);
      } }, { key: "_handleMetadataParsed", value: function value(e) {
        this.emit(REMUX_EVENTS$3$1.REMUX_METADATA, e);
      } }, { key: "_handleDemuxComplete", value: function value() {
        this.emit(REMUX_EVENTS$3$1.REMUX_MEDIA);
      } }, { key: "_handleAppendInitSegment", value: function value() {
        this.state.initSegmentArrived = !0, this.mse.addSourceBuffers();
      } }, { key: "_handleMediaSegment", value: function value() {
        this.mse.addSourceBuffers(), this.mse.doAppend();
      } }, { key: "_handleNetworkError", value: function value(e, t) {
        this._player.emit("error", new Player.Errors("network", this._player.config.url)), this._onError(LOADER_EVENTS$2$1.LOADER_ERROR, e, t, !0);
      } }, { key: "_handleDemuxError", value: function value(e, t, i) {
        void 0 === i && (i = !1), this._player.emit("error", new Player.Errors("parse", this._player.config.url)), this._onError(LOADER_EVENTS$2$1.LOADER_ERROR, e, t, i);
      } }, { key: "_onError", value: function value(e, t, i, r) {
        var n = { errorType: e, errorDetails: "[" + t + "]: " + i.message, errorFatal: r || !1 };this._player.emit(FLV_ERROR$1, n);
      } }, { key: "seek", value: function value(e) {
        if (!this._context.onMetaData) return void this.loadMeta();if (this.isSeekable) {
          this._context.getInstance("LOADER_BUFFER").clear();var t = this._player.config.preloadTime,
              i = void 0 === t ? 15 : t,
              r = this.getSeekRange(e, i);this.state.range = r, this.compat && this.compat.reset(), this.loadData();
        }
      } }, { key: "loadNext", value: function value(e) {
        this._context.onMetaData && (this.loader.loading || this.getNextRange(e) && this.loadData());
      } }, { key: "loadData", value: function value() {
        var e = this.state.range,
            t = e.start,
            i = e.end;this.emit(LOADER_EVENTS$2$1.LADER_START, this._player.config.url, { headers: { method: "get", Range: "bytes=" + t + "-" + i } });
      } }, { key: "loadMeta", value: function value() {
        var e = this;this.loader.load(this._player.config.url, { headers: { Range: "bytes=0-" } }).catch(function () {
          e.state.rangeSupport = !1, e.loadFallback();
        });
      } }, { key: "loadFallback", value: function value() {
        var e = this;this.loader.load(this._player.config.url).catch(function () {
          e._player.emit("error", new Player.Errors("network", e._player.config.url));
        });
      } }, { key: "getSeekRange", value: function value(t, i) {
        var r = this._context.onMetaData.keyframes,
            n = this._context.mediaInfo.duration,
            a = t,
            s = t + i,
            o = e.findFilePosition(a, r);return s >= n || a >= n ? { start: o, end: "" } : { start: o, end: e.findFilePosition(s, r) };
      } }, { key: "getNextRange", value: function value(e) {
        if ("" !== this.state.range.end) {
          var t = this.getSeekRange(e, this.config.preloadTime || 15).end;if (!(t <= this.state.range.end && "" !== t)) return this.state.range = { start: this.state.range.end + 1, end: t }, !0;
        }
      } }, { key: "destroy", value: function value() {
        this._player = null, this.mse = null, this.state = { initSegmentArrived: !1, range: { start: 0, end: "" }, rangeSupport: !0 };
      } }, { key: "isSeekable", get: function get() {
        return !(!this.state.rangeSupport || !this._context) && null !== this._context.onMetaData.keyframes && void 0 !== this._context.onMetaData.keyframes;
      } }, { key: "config", get: function get() {
        return this._player.config;
      } }, { key: "loader", get: function get() {
        return this._context.getInstance("FETCH_LOADER");
      } }, { key: "compat", get: function get() {
        return this._context.getInstance("COMPATIBILITY");
      } }, { key: "loadBuffer", get: function get() {
        return this_context.getInstance("LOADER_BUFFER");
      } }], [{ key: "findFilePosition", value: function value(e, t) {
        for (var i = 0, r = t.times.length; i < r; i++) {
          var n = t.times[i],
              a = i + 1 < r ? t.times[i + 1] : Number.MAX_SAFE_INTEGER;if (n <= e && e <= a) return t.filepositions[i];
        }return "";
      } }]), e;
  }();console.log(Context$1$1);var flvAllowedEvents$1 = EVENTS$2.FlvAllowedEvents,
      isEnded = function isEnded(e, t) {
    if (!e.config.isLive && e.duration - e.currentTime < 2) {
      var i = e.getBufferedRange();e.currentTime - i[1] < .1 && (e.emit("ended"), t.mse.endOfStream());
    }
  },
      FlvVodPlayer = function (e) {
    function t(e) {
      classCallCheck$2(this, t);var i = possibleConstructorReturn$2(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));return i.context = new Context$1$1(flvAllowedEvents$1), i.initEvents(), i;
    }return inherits$2(t, e), createClass$2(t, [{ key: "start", value: function value() {
        var e = this.initFlv();e.loadMeta(), get$2(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "start", this).call(this, e.mse.url);
      } }, { key: "initFlv", value: function value() {
        var e = this.context.registry("FLV_CONTROLLER", FlvController$1)(this);return this.context.init(), this.flv = e, this.mse = e.mse, e;
      } }, { key: "initFlvBackupEvents", value: function value(e, t) {
        var i = this;e.once(EVENTS$2.REMUX_EVENTS.INIT_SEGMENT, function () {
          var r = 3;e.on(EVENTS$2.REMUX_EVENTS.MEDIA_SEGMENT, function () {
            0 === (r -= 1) && (i.flv = e, i.mse.resetContext(t), i.context.destroy(), i.context = t);
          });
        }), e.once(EVENTS$2.LOADER_EVENTS.LOADER_ERROR, function () {
          t.destroy();
        });
      } }, { key: "initEvents", value: function value() {
        this.on("timeupdate", this.handleTimeUpdate.bind(this)), this.on("seeking", this.handleSeek.bind(this)), this.once("destroy", this._destroy.bind(this));
      } }, { key: "handleTimeUpdate", value: function value() {
        this.loadData(), isEnded(this, this.flv);
      } }, { key: "handleSeek", value: function value() {
        var e = this.currentTime,
            t = this.getBufferedRange();(e > t[1] || e < t[0]) && this.flv.seek(this.currentTime);
      } }, { key: "_destroy", value: function value() {
        this.context.destroy(), this.context = null, this.flv = null;
      } }, { key: "loadData", value: function value() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.currentTime,
            t = this.getBufferedRange();t[1] - e < (this.config.preloadTime || 15) - 5 && this.flv.loadNext(t[1] + 1);
      } }, { key: "swithURL", value: function value(e) {
        this.config.url = e;var t = new Context$1$1(flvAllowedEvents$1),
            i = t.registry("FLV_CONTROLLER", FlvController$1)(this, this.mse);t.init(), t.getInstance("MP4_REMUXER")._dtsBase = 0, this.initFlvBackupEvents(i, t), i.loadMeta();
      } }, { key: "remuxer", get: function get() {
        return this.context.getInstance("MP4_REMUXER");
      } }, { key: "src", get: function get() {
        return this.currentSrc;
      }, set: function set(e) {
        return this.swithURL(e);
      } }], [{ key: "isSupported", value: function value() {
        return window.MediaSource && window.MediaSource.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"');
      } }]), t;
  }(Player);

  var FlvPlayer$1 = function () {
    function FlvPlayer$1(config) {
      classCallCheck(this, FlvPlayer$1);

      if (config.isLive) {
        return new FlvPlayer(config);
      } else {
        return new FlvVodPlayer(config);
      }
    }

    createClass(FlvPlayer$1, null, [{
      key: 'isSupported',
      value: function isSupported() {
        return window.MediaSource && window.MediaSource.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"');
      }
    }]);
    return FlvPlayer$1;
  }();

  return FlvPlayer$1;

})));
//# sourceMappingURL=index.js.map
