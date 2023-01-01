!(function (e, t) {
  'object' == typeof exports && 'undefined' != typeof module
    ? t(exports)
    : 'function' == typeof define && define.amd
    ? define(['exports'], t)
    : t(((e || self).magicMirrorWrapperWeb = {}));
})(this, function (e) {
  function t() {
    return (
      (t = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
            }
            return e;
          }),
      t.apply(this, arguments)
    );
  }
  var n = localStorage.getItem('mmDebug') ? console.log : function () {};
  let i = (e = 21) =>
    crypto
      .getRandomValues(new Uint8Array(e))
      .reduce(
        (e, t) =>
          e +
          ((t &= 63) < 36
            ? t.toString(36)
            : t < 62
            ? (t - 26).toString(36).toUpperCase()
            : t > 62
            ? '-'
            : '_'),
        ''
      );
  function r(e) {
    return e &&
      e.__esModule &&
      Object.prototype.hasOwnProperty.call(e, 'default')
      ? e.default
      : e;
  }
  'undefined' != typeof globalThis
    ? globalThis
    : 'undefined' != typeof window
    ? window
    : 'undefined' != typeof global
    ? global
    : 'undefined' != typeof self && self;
  var o,
    s = (function (e) {
      var t = { exports: {} };
      return (
        (function (e, t) {
          var n;
          'undefined' != typeof self && self,
            (n = function () {
              return (function (e) {
                var t = {};
                function n(i) {
                  if (t[i]) return t[i].exports;
                  var r = (t[i] = { i: i, l: !1, exports: {} });
                  return (
                    e[i].call(r.exports, r, r.exports, n), (r.l = !0), r.exports
                  );
                }
                return (
                  (n.m = e),
                  (n.c = t),
                  (n.d = function (e, t, i) {
                    n.o(e, t) ||
                      Object.defineProperty(e, t, {
                        configurable: !1,
                        enumerable: !0,
                        get: i,
                      });
                  }),
                  (n.n = function (e) {
                    var t =
                      e && e.__esModule
                        ? function () {
                            return e.default;
                          }
                        : function () {
                            return e;
                          };
                    return n.d(t, 'a', t), t;
                  }),
                  (n.o = function (e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t);
                  }),
                  (n.p = ''),
                  n((n.s = 11))
                );
              })([
                function (e, t, n) {
                  var i = Array.prototype,
                    r = Object.prototype,
                    o = {
                      '&': '&amp;',
                      '"': '&quot;',
                      "'": '&#39;',
                      '<': '&lt;',
                      '>': '&gt;',
                    },
                    s = /[&"'<>]/g;
                  function a(e, t) {
                    return r.hasOwnProperty.call(e, t);
                  }
                  function c(e) {
                    return o[e];
                  }
                  function l(e, t, n) {
                    var i, r, o;
                    if (
                      (e instanceof Error &&
                        (e = (r = e).name + ': ' + r.message),
                      Object.setPrototypeOf
                        ? ((i = new Error(e)),
                          Object.setPrototypeOf(i, l.prototype))
                        : ((i = this),
                          Object.defineProperty(i, 'message', {
                            enumerable: !1,
                            writable: !0,
                            value: e,
                          })),
                      Object.defineProperty(i, 'name', {
                        value: 'Template render error',
                      }),
                      Error.captureStackTrace &&
                        Error.captureStackTrace(i, this.constructor),
                      r)
                    ) {
                      var s = Object.getOwnPropertyDescriptor(r, 'stack');
                      (o =
                        s &&
                        (s.get ||
                          function () {
                            return s.value;
                          })) ||
                        (o = function () {
                          return r.stack;
                        });
                    } else {
                      var a = new Error(e).stack;
                      o = function () {
                        return a;
                      };
                    }
                    return (
                      Object.defineProperty(i, 'stack', {
                        get: function () {
                          return o.call(i);
                        },
                      }),
                      Object.defineProperty(i, 'cause', { value: r }),
                      (i.lineno = t),
                      (i.colno = n),
                      (i.firstUpdate = !0),
                      (i.Update = function (e) {
                        var t = '(' + (e || 'unknown path') + ')';
                        return (
                          this.firstUpdate &&
                            (this.lineno && this.colno
                              ? (t +=
                                  ' [Line ' +
                                  this.lineno +
                                  ', Column ' +
                                  this.colno +
                                  ']')
                              : this.lineno &&
                                (t += ' [Line ' + this.lineno + ']')),
                          (t += '\n '),
                          this.firstUpdate && (t += ' '),
                          (this.message = t + (this.message || '')),
                          (this.firstUpdate = !1),
                          this
                        );
                      }),
                      i
                    );
                  }
                  function u(e) {
                    return '[object Function]' === r.toString.call(e);
                  }
                  function h(e) {
                    return '[object Array]' === r.toString.call(e);
                  }
                  function f(e) {
                    return '[object String]' === r.toString.call(e);
                  }
                  function p(e) {
                    return '[object Object]' === r.toString.call(e);
                  }
                  function d(e) {
                    var t,
                      n = (t = e)
                        ? 'string' == typeof t
                          ? t.split('.')
                          : [t]
                        : [];
                    return function (e) {
                      for (var t = e, i = 0; i < n.length; i++) {
                        var r = n[i];
                        if (!a(t, r)) return;
                        t = t[r];
                      }
                      return t;
                    };
                  }
                  function m(e) {
                    return Array.prototype.slice.call(e);
                  }
                  function v(e, t, n) {
                    return Array.prototype.indexOf.call(e || [], t, n);
                  }
                  function y(e) {
                    var t = [];
                    for (var n in e) a(e, n) && t.push(n);
                    return t;
                  }
                  ((t = e.exports = {}).hasOwnProp = a),
                    (t._prettifyError = function (e, n, i) {
                      if (
                        (i.Update || (i = new t.TemplateError(i)),
                        i.Update(e),
                        !n)
                      ) {
                        var r = i;
                        (i = new Error(r.message)).name = r.name;
                      }
                      return i;
                    }),
                    Object.setPrototypeOf
                      ? Object.setPrototypeOf(l.prototype, Error.prototype)
                      : (l.prototype = Object.create(Error.prototype, {
                          constructor: { value: l },
                        })),
                    (t.TemplateError = l),
                    (t.escape = function (e) {
                      return e.replace(s, c);
                    }),
                    (t.isFunction = u),
                    (t.isArray = h),
                    (t.isString = f),
                    (t.isObject = p),
                    (t.getAttrGetter = d),
                    (t.groupBy = function (e, t, n) {
                      for (
                        var i = {}, r = u(t) ? t : d(t), o = 0;
                        o < e.length;
                        o++
                      ) {
                        var s = e[o],
                          a = r(s, o);
                        if (void 0 === a && !0 === n)
                          throw new TypeError(
                            'groupby: attribute "' +
                              t +
                              '" resolved to undefined'
                          );
                        (i[a] || (i[a] = [])).push(s);
                      }
                      return i;
                    }),
                    (t.toArray = m),
                    (t.without = function (e) {
                      var t = [];
                      if (!e) return t;
                      for (
                        var n = e.length, i = m(arguments).slice(1), r = -1;
                        ++r < n;

                      )
                        -1 === v(i, e[r]) && t.push(e[r]);
                      return t;
                    }),
                    (t.repeat = function (e, t) {
                      for (var n = '', i = 0; i < t; i++) n += e;
                      return n;
                    }),
                    (t.each = function (e, t, n) {
                      if (null != e)
                        if (i.forEach && e.forEach === i.forEach)
                          e.forEach(t, n);
                        else if (e.length === +e.length)
                          for (var r = 0, o = e.length; r < o; r++)
                            t.call(n, e[r], r, e);
                    }),
                    (t.map = function (e, t) {
                      var n = [];
                      if (null == e) return n;
                      if (i.map && e.map === i.map) return e.map(t);
                      for (var r = 0; r < e.length; r++)
                        n[n.length] = t(e[r], r);
                      return e.length === +e.length && (n.length = e.length), n;
                    }),
                    (t.asyncIter = function (e, t, n) {
                      var i = -1;
                      !(function r() {
                        ++i < e.length ? t(e[i], i, r, n) : n();
                      })();
                    }),
                    (t.asyncFor = function (e, t, n) {
                      var i = y(e || {}),
                        r = i.length,
                        o = -1;
                      !(function s() {
                        o++;
                        var a = i[o];
                        o < r ? t(a, e[a], o, r, s) : n();
                      })();
                    }),
                    (t.indexOf = v),
                    (t.keys = y),
                    (t._entries = function (e) {
                      return y(e).map(function (t) {
                        return [t, e[t]];
                      });
                    }),
                    (t._values = function (e) {
                      return y(e).map(function (t) {
                        return e[t];
                      });
                    }),
                    (t._assign = t.extend =
                      function (e, t) {
                        return (
                          (e = e || {}),
                          y(t).forEach(function (n) {
                            e[n] = t[n];
                          }),
                          e
                        );
                      }),
                    (t.inOperator = function (e, t) {
                      if (h(t) || f(t)) return -1 !== t.indexOf(e);
                      if (p(t)) return e in t;
                      throw new Error(
                        'Cannot use "in" operator to search for "' +
                          e +
                          '" in unexpected types.'
                      );
                    });
                },
                function (e, t, n) {
                  function i(e, t) {
                    for (var n = 0; n < t.length; n++) {
                      var i = t[n];
                      (i.enumerable = i.enumerable || !1),
                        (i.configurable = !0),
                        'value' in i && (i.writable = !0),
                        Object.defineProperty(e, i.key, i);
                    }
                  }
                  function r(e, t, n) {
                    return t && i(e.prototype, t), n && i(e, n), e;
                  }
                  function o(e, t) {
                    (e.prototype = Object.create(t.prototype)),
                      (e.prototype.constructor = e),
                      s(e, t);
                  }
                  function s(e, t) {
                    return (
                      (s =
                        Object.setPrototypeOf ||
                        function (e, t) {
                          return (e.__proto__ = t), e;
                        }),
                      s(e, t)
                    );
                  }
                  var a = n(16),
                    c = n(0);
                  function l(e, t, n) {
                    c.keys((n = n || {})).forEach(function (t) {
                      var i, r;
                      n[t] =
                        ((r = n[t]),
                        'function' != typeof (i = e.prototype[t]) ||
                        'function' != typeof r
                          ? r
                          : function () {
                              var e = this.parent;
                              this.parent = i;
                              var t = r.apply(this, arguments);
                              return (this.parent = e), t;
                            });
                    });
                    var i = /*#__PURE__*/ (function (e) {
                      function n() {
                        return e.apply(this, arguments) || this;
                      }
                      return (
                        o(n, e),
                        r(n, [
                          {
                            key: 'typename',
                            get: function () {
                              return t;
                            },
                          },
                        ]),
                        n
                      );
                    })(e);
                    return c._assign(i.prototype, n), i;
                  }
                  var u = /*#__PURE__*/ (function () {
                      function e() {
                        this.init.apply(this, arguments);
                      }
                      return (
                        (e.prototype.init = function () {}),
                        (e.extend = function (e, t) {
                          return (
                            'object' == typeof e &&
                              ((t = e), (e = 'anonymous')),
                            l(this, e, t)
                          );
                        }),
                        r(e, [
                          {
                            key: 'typename',
                            get: function () {
                              return this.constructor.name;
                            },
                          },
                        ]),
                        e
                      );
                    })(),
                    h = /*#__PURE__*/ (function (e) {
                      function t() {
                        var t, n;
                        return (
                          (t = n = e.call(this) || this).init.apply(
                            t,
                            arguments
                          ),
                          n
                        );
                      }
                      return (
                        o(t, e),
                        (t.prototype.init = function () {}),
                        (t.extend = function (e, t) {
                          return (
                            'object' == typeof e &&
                              ((t = e), (e = 'anonymous')),
                            l(this, e, t)
                          );
                        }),
                        r(t, [
                          {
                            key: 'typename',
                            get: function () {
                              return this.constructor.name;
                            },
                          },
                        ]),
                        t
                      );
                    })(a);
                  e.exports = { Obj: u, EmitterObj: h };
                },
                function (e, t, n) {
                  var i = n(0),
                    r = Array.from,
                    o =
                      'function' == typeof Symbol &&
                      Symbol.iterator &&
                      'function' == typeof r,
                    s = /*#__PURE__*/ (function () {
                      function e(e, t) {
                        (this.variables = Object.create(null)),
                          (this.parent = e),
                          (this.topLevel = !1),
                          (this.isolateWrites = t);
                      }
                      var t = e.prototype;
                      return (
                        (t.set = function (e, t, n) {
                          var i = e.split('.'),
                            r = this.variables,
                            o = this;
                          if (n && (o = this.resolve(i[0], !0))) o.set(e, t);
                          else {
                            for (var s = 0; s < i.length - 1; s++) {
                              var a = i[s];
                              r[a] || (r[a] = {}), (r = r[a]);
                            }
                            r[i[i.length - 1]] = t;
                          }
                        }),
                        (t.get = function (e) {
                          var t = this.variables[e];
                          return void 0 !== t ? t : null;
                        }),
                        (t.lookup = function (e) {
                          var t = this.parent,
                            n = this.variables[e];
                          return void 0 !== n ? n : t && t.lookup(e);
                        }),
                        (t.resolve = function (e, t) {
                          var n =
                            t && this.isolateWrites ? void 0 : this.parent;
                          return void 0 !== this.variables[e]
                            ? this
                            : n && n.resolve(e);
                        }),
                        (t.push = function (t) {
                          return new e(this, t);
                        }),
                        (t.pop = function () {
                          return this.parent;
                        }),
                        e
                      );
                    })();
                  function a(e) {
                    return (
                      e && Object.prototype.hasOwnProperty.call(e, '__keywords')
                    );
                  }
                  function c(e) {
                    var t = e.length;
                    if (t) {
                      var n = e[t - 1];
                      if (a(n)) return n;
                    }
                    return {};
                  }
                  function l(e) {
                    var t = e.length;
                    return 0 === t ? 0 : a(e[t - 1]) ? t - 1 : t;
                  }
                  function u(e) {
                    if ('string' != typeof e) return e;
                    (this.val = e), (this.length = e.length);
                  }
                  ((u.prototype = Object.create(String.prototype, {
                    length: { writable: !0, configurable: !0, value: 0 },
                  })).valueOf = function () {
                    return this.val;
                  }),
                    (u.prototype.toString = function () {
                      return this.val;
                    }),
                    (e.exports = {
                      Frame: s,
                      makeMacro: function (e, t, n) {
                        return function () {
                          for (
                            var i = arguments.length, r = new Array(i), o = 0;
                            o < i;
                            o++
                          )
                            r[o] = arguments[o];
                          var s,
                            a = l(r),
                            u = c(r);
                          if (a > e.length)
                            (s = r.slice(0, e.length)),
                              r.slice(s.length, a).forEach(function (e, n) {
                                n < t.length && (u[t[n]] = e);
                              }),
                              s.push(u);
                          else if (a < e.length) {
                            s = r.slice(0, a);
                            for (var h = a; h < e.length; h++) {
                              var f = e[h];
                              s.push(u[f]), delete u[f];
                            }
                            s.push(u);
                          } else s = r;
                          return n.apply(this, s);
                        };
                      },
                      makeKeywordArgs: function (e) {
                        return (e.__keywords = !0), e;
                      },
                      numArgs: l,
                      suppressValue: function (e, t) {
                        return (
                          (e = null != e ? e : ''),
                          !t || e instanceof u || (e = i.escape(e.toString())),
                          e
                        );
                      },
                      ensureDefined: function (e, t, n) {
                        if (null == e)
                          throw new i.TemplateError(
                            'attempted to output null or undefined value',
                            t + 1,
                            n + 1
                          );
                        return e;
                      },
                      memberLookup: function (e, t) {
                        if (null != e)
                          return 'function' == typeof e[t]
                            ? function () {
                                for (
                                  var n = arguments.length,
                                    i = new Array(n),
                                    r = 0;
                                  r < n;
                                  r++
                                )
                                  i[r] = arguments[r];
                                return e[t].apply(e, i);
                              }
                            : e[t];
                      },
                      contextOrFrameLookup: function (e, t, n) {
                        var i = t.lookup(n);
                        return void 0 !== i ? i : e.lookup(n);
                      },
                      callWrap: function (e, t, n, i) {
                        if (!e)
                          throw new Error(
                            'Unable to call `' +
                              t +
                              '`, which is undefined or falsey'
                          );
                        if ('function' != typeof e)
                          throw new Error(
                            'Unable to call `' +
                              t +
                              '`, which is not a function'
                          );
                        return e.apply(n, i);
                      },
                      handleError: function (e, t, n) {
                        return e.lineno ? e : new i.TemplateError(e, t, n);
                      },
                      isArray: i.isArray,
                      keys: i.keys,
                      SafeString: u,
                      copySafeness: function (e, t) {
                        return e instanceof u ? new u(t) : t.toString();
                      },
                      markSafe: function (e) {
                        var t = typeof e;
                        return 'string' === t
                          ? new u(e)
                          : 'function' !== t
                          ? e
                          : function (t) {
                              var n = e.apply(this, arguments);
                              return 'string' == typeof n ? new u(n) : n;
                            };
                      },
                      asyncEach: function (e, t, n, r) {
                        if (i.isArray(e)) {
                          var o = e.length;
                          i.asyncIter(
                            e,
                            function (e, i, r) {
                              switch (t) {
                                case 1:
                                  n(e, i, o, r);
                                  break;
                                case 2:
                                  n(e[0], e[1], i, o, r);
                                  break;
                                case 3:
                                  n(e[0], e[1], e[2], i, o, r);
                                  break;
                                default:
                                  e.push(i, o, r), n.apply(this, e);
                              }
                            },
                            r
                          );
                        } else
                          i.asyncFor(
                            e,
                            function (e, t, i, r, o) {
                              n(e, t, i, r, o);
                            },
                            r
                          );
                      },
                      asyncAll: function (e, t, n, r) {
                        var o,
                          s,
                          a = 0;
                        function c(e, t) {
                          a++, (s[e] = t), a === o && r(null, s.join(''));
                        }
                        if (i.isArray(e))
                          if (((o = e.length), (s = new Array(o)), 0 === o))
                            r(null, '');
                          else
                            for (var l = 0; l < e.length; l++) {
                              var u = e[l];
                              switch (t) {
                                case 1:
                                  n(u, l, o, c);
                                  break;
                                case 2:
                                  n(u[0], u[1], l, o, c);
                                  break;
                                case 3:
                                  n(u[0], u[1], u[2], l, o, c);
                                  break;
                                default:
                                  u.push(l, o, c), n.apply(this, u);
                              }
                            }
                        else {
                          var h = i.keys(e || {});
                          if (((o = h.length), (s = new Array(o)), 0 === o))
                            r(null, '');
                          else
                            for (var f = 0; f < h.length; f++) {
                              var p = h[f];
                              n(p, e[p], f, o, c);
                            }
                        }
                      },
                      inOperator: i.inOperator,
                      fromIterator: function (e) {
                        return 'object' != typeof e ||
                          null === e ||
                          i.isArray(e)
                          ? e
                          : o && Symbol.iterator in e
                          ? r(e)
                          : e;
                      },
                    });
                },
                function (e, t, n) {
                  function i(e, t) {
                    for (var n = 0; n < t.length; n++) {
                      var i = t[n];
                      (i.enumerable = i.enumerable || !1),
                        (i.configurable = !0),
                        'value' in i && (i.writable = !0),
                        Object.defineProperty(e, i.key, i);
                    }
                  }
                  function r(e, t, n) {
                    return t && i(e.prototype, t), n && i(e, n), e;
                  }
                  function o(e, t) {
                    (e.prototype = Object.create(t.prototype)),
                      (e.prototype.constructor = e),
                      s(e, t);
                  }
                  function s(e, t) {
                    return (
                      (s =
                        Object.setPrototypeOf ||
                        function (e, t) {
                          return (e.__proto__ = t), e;
                        }),
                      s(e, t)
                    );
                  }
                  function a(e, t, n) {
                    e instanceof t && n.push(e),
                      e instanceof c && e.findAll(t, n);
                  }
                  var c = /*#__PURE__*/ (function (e) {
                      function t() {
                        return e.apply(this, arguments) || this;
                      }
                      o(t, e);
                      var n = t.prototype;
                      return (
                        (n.init = function (e, t) {
                          for (
                            var n = arguments,
                              i = this,
                              r = arguments.length,
                              o = new Array(r > 2 ? r - 2 : 0),
                              s = 2;
                            s < r;
                            s++
                          )
                            o[s - 2] = arguments[s];
                          (this.lineno = e),
                            (this.colno = t),
                            this.fields.forEach(function (e, t) {
                              var r = n[t + 2];
                              void 0 === r && (r = null), (i[e] = r);
                            });
                        }),
                        (n.findAll = function (e, t) {
                          var n = this;
                          return (
                            (t = t || []),
                            this instanceof u
                              ? this.children.forEach(function (n) {
                                  return a(n, e, t);
                                })
                              : this.fields.forEach(function (i) {
                                  return a(n[i], e, t);
                                }),
                            t
                          );
                        }),
                        (n.iterFields = function (e) {
                          var t = this;
                          this.fields.forEach(function (n) {
                            e(t[n], n);
                          });
                        }),
                        t
                      );
                    })(n(1).Obj),
                    l = /*#__PURE__*/ (function (e) {
                      function t() {
                        return e.apply(this, arguments) || this;
                      }
                      return (
                        o(t, e),
                        r(t, [
                          {
                            key: 'typename',
                            get: function () {
                              return 'Value';
                            },
                          },
                          {
                            key: 'fields',
                            get: function () {
                              return ['value'];
                            },
                          },
                        ]),
                        t
                      );
                    })(c),
                    u = /*#__PURE__*/ (function (e) {
                      function t() {
                        return e.apply(this, arguments) || this;
                      }
                      o(t, e);
                      var n = t.prototype;
                      return (
                        (n.init = function (t, n, i) {
                          e.prototype.init.call(this, t, n, i || []);
                        }),
                        (n.addChild = function (e) {
                          this.children.push(e);
                        }),
                        r(t, [
                          {
                            key: 'typename',
                            get: function () {
                              return 'NodeList';
                            },
                          },
                          {
                            key: 'fields',
                            get: function () {
                              return ['children'];
                            },
                          },
                        ]),
                        t
                      );
                    })(c),
                    h = u.extend('Root'),
                    f = l.extend('Literal'),
                    p = l.extend('Symbol'),
                    d = u.extend('Group'),
                    m = u.extend('Array'),
                    v = c.extend('Pair', { fields: ['key', 'value'] }),
                    y = u.extend('Dict'),
                    _ = c.extend('LookupVal', { fields: ['target', 'val'] }),
                    g = c.extend('If', { fields: ['cond', 'body', 'else_'] }),
                    k = g.extend('IfAsync'),
                    b = c.extend('InlineIf', {
                      fields: ['cond', 'body', 'else_'],
                    }),
                    w = c.extend('For', {
                      fields: ['arr', 'name', 'body', 'else_'],
                    }),
                    E = w.extend('AsyncEach'),
                    x = w.extend('AsyncAll'),
                    O = c.extend('Macro', { fields: ['name', 'args', 'body'] }),
                    L = O.extend('Caller'),
                    T = c.extend('Import', {
                      fields: ['template', 'target', 'withContext'],
                    }),
                    S = /*#__PURE__*/ (function (e) {
                      function t() {
                        return e.apply(this, arguments) || this;
                      }
                      return (
                        o(t, e),
                        (t.prototype.init = function (t, n, i, r, o) {
                          e.prototype.init.call(this, t, n, i, r || new u(), o);
                        }),
                        r(t, [
                          {
                            key: 'typename',
                            get: function () {
                              return 'FromImport';
                            },
                          },
                          {
                            key: 'fields',
                            get: function () {
                              return ['template', 'names', 'withContext'];
                            },
                          },
                        ]),
                        t
                      );
                    })(c),
                    A = c.extend('FunCall', { fields: ['name', 'args'] }),
                    N = A.extend('Filter'),
                    C = N.extend('FilterAsync', {
                      fields: ['name', 'args', 'symbol'],
                    }),
                    R = y.extend('KeywordArgs'),
                    j = c.extend('Block', { fields: ['name', 'body'] }),
                    F = c.extend('Super', { fields: ['blockName', 'symbol'] }),
                    B = c
                      .extend('TemplateRef', { fields: ['template'] })
                      .extend('Extends'),
                    I = c.extend('Include', {
                      fields: ['template', 'ignoreMissing'],
                    }),
                    P = c.extend('Set', { fields: ['targets', 'value'] }),
                    M = c.extend('Switch', {
                      fields: ['expr', 'cases', 'default'],
                    }),
                    K = c.extend('Case', { fields: ['cond', 'body'] }),
                    D = u.extend('Output'),
                    U = c.extend('Capture', { fields: ['body'] }),
                    V = f.extend('TemplateData'),
                    W = c.extend('UnaryOp', { fields: ['target'] }),
                    q = c.extend('BinOp', { fields: ['left', 'right'] }),
                    G = q.extend('In'),
                    z = q.extend('Is'),
                    Y = q.extend('Or'),
                    H = q.extend('And'),
                    $ = W.extend('Not'),
                    X = q.extend('Add'),
                    J = q.extend('Concat'),
                    Q = q.extend('Sub'),
                    Z = q.extend('Mul'),
                    ee = q.extend('Div'),
                    te = q.extend('FloorDiv'),
                    ne = q.extend('Mod'),
                    ie = q.extend('Pow'),
                    re = W.extend('Neg'),
                    oe = W.extend('Pos'),
                    se = c.extend('Compare', { fields: ['expr', 'ops'] }),
                    ae = c.extend('CompareOperand', {
                      fields: ['expr', 'type'],
                    }),
                    ce = c.extend('CallExtension', {
                      init: function (e, t, n, i) {
                        this.parent(),
                          (this.extName = e.__name || e),
                          (this.prop = t),
                          (this.args = n || new u()),
                          (this.contentArgs = i || []),
                          (this.autoescape = e.autoescape);
                      },
                      fields: ['extName', 'prop', 'args', 'contentArgs'],
                    }),
                    le = ce.extend('CallExtensionAsync');
                  function ue(e, t, n) {
                    var i = e.split('\n');
                    i.forEach(function (e, r) {
                      e &&
                        ((n && r > 0) || !n) &&
                        process.stdout.write(' '.repeat(t)),
                        process.stdout.write(
                          e + (r === i.length - 1 ? '' : '\n')
                        );
                    });
                  }
                  e.exports = {
                    Node: c,
                    Root: h,
                    NodeList: u,
                    Value: l,
                    Literal: f,
                    Symbol: p,
                    Group: d,
                    Array: m,
                    Pair: v,
                    Dict: y,
                    Output: D,
                    Capture: U,
                    TemplateData: V,
                    If: g,
                    IfAsync: k,
                    InlineIf: b,
                    For: w,
                    AsyncEach: E,
                    AsyncAll: x,
                    Macro: O,
                    Caller: L,
                    Import: T,
                    FromImport: S,
                    FunCall: A,
                    Filter: N,
                    FilterAsync: C,
                    KeywordArgs: R,
                    Block: j,
                    Super: F,
                    Extends: B,
                    Include: I,
                    Set: P,
                    Switch: M,
                    Case: K,
                    LookupVal: _,
                    BinOp: q,
                    In: G,
                    Is: z,
                    Or: Y,
                    And: H,
                    Not: $,
                    Add: X,
                    Concat: J,
                    Sub: Q,
                    Mul: Z,
                    Div: ee,
                    FloorDiv: te,
                    Mod: ne,
                    Pow: ie,
                    Neg: re,
                    Pos: oe,
                    Compare: se,
                    CompareOperand: ae,
                    CallExtension: ce,
                    CallExtensionAsync: le,
                    printNodes: function e(t, n) {
                      if ((ue(t.typename + ': ', (n = n || 0)), t instanceof u))
                        ue('\n'),
                          t.children.forEach(function (t) {
                            e(t, n + 2);
                          });
                      else if (t instanceof ce)
                        ue(t.extName + '.' + t.prop + '\n'),
                          t.args && e(t.args, n + 2),
                          t.contentArgs &&
                            t.contentArgs.forEach(function (t) {
                              e(t, n + 2);
                            });
                      else {
                        var i = [],
                          r = null;
                        t.iterFields(function (e, t) {
                          e instanceof c
                            ? i.push([t, e])
                            : ((r = r || {})[t] = e);
                        }),
                          r
                            ? ue(JSON.stringify(r, null, 2) + '\n', null, !0)
                            : ue('\n'),
                          i.forEach(function (t) {
                            var i = t[1];
                            ue('[' + t[0] + '] =>', n + 2), e(i, n + 4);
                          });
                      }
                    },
                  };
                },
                function (e, t) {},
                function (e, t, n) {
                  function i(e, t) {
                    return (
                      (i =
                        Object.setPrototypeOf ||
                        function (e, t) {
                          return (e.__proto__ = t), e;
                        }),
                      i(e, t)
                    );
                  }
                  var r = n(8),
                    o = n(17),
                    s = n(3),
                    a = n(0).TemplateError,
                    c = n(2).Frame,
                    l = n(1),
                    u = {
                      '==': '==',
                      '===': '===',
                      '!=': '!=',
                      '!==': '!==',
                      '<': '<',
                      '>': '>',
                      '<=': '<=',
                      '>=': '>=',
                    },
                    h = /*#__PURE__*/ (function (e) {
                      var t, n;
                      function r() {
                        return e.apply(this, arguments) || this;
                      }
                      (n = e),
                        ((t = r).prototype = Object.create(n.prototype)),
                        (t.prototype.constructor = t),
                        i(t, n);
                      var o = r.prototype;
                      return (
                        (o.init = function (e, t) {
                          (this.templateName = e),
                            (this.codebuf = []),
                            (this.lastId = 0),
                            (this.buffer = null),
                            (this.bufferStack = []),
                            (this._scopeClosers = ''),
                            (this.inBlock = !1),
                            (this.throwOnUndefined = t);
                        }),
                        (o.fail = function (e, t, n) {
                          throw (
                            (void 0 !== t && (t += 1),
                            void 0 !== n && (n += 1),
                            new a(e, t, n))
                          );
                        }),
                        (o._pushBuffer = function () {
                          var e = this._tmpid();
                          return (
                            this.bufferStack.push(this.buffer),
                            (this.buffer = e),
                            this._emit('var ' + this.buffer + ' = "";'),
                            e
                          );
                        }),
                        (o._popBuffer = function () {
                          this.buffer = this.bufferStack.pop();
                        }),
                        (o._emit = function (e) {
                          this.codebuf.push(e);
                        }),
                        (o._emitLine = function (e) {
                          this._emit(e + '\n');
                        }),
                        (o._emitLines = function () {
                          for (
                            var e = this,
                              t = arguments.length,
                              n = new Array(t),
                              i = 0;
                            i < t;
                            i++
                          )
                            n[i] = arguments[i];
                          n.forEach(function (t) {
                            return e._emitLine(t);
                          });
                        }),
                        (o._emitFuncBegin = function (e, t) {
                          (this.buffer = 'output'),
                            (this._scopeClosers = ''),
                            this._emitLine(
                              'function ' +
                                t +
                                '(env, context, frame, runtime, cb) {'
                            ),
                            this._emitLine('var lineno = ' + e.lineno + ';'),
                            this._emitLine('var colno = ' + e.colno + ';'),
                            this._emitLine('var ' + this.buffer + ' = "";'),
                            this._emitLine('try {');
                        }),
                        (o._emitFuncEnd = function (e) {
                          e || this._emitLine('cb(null, ' + this.buffer + ');'),
                            this._closeScopeLevels(),
                            this._emitLine('} catch (e) {'),
                            this._emitLine(
                              '  cb(runtime.handleError(e, lineno, colno));'
                            ),
                            this._emitLine('}'),
                            this._emitLine('}'),
                            (this.buffer = null);
                        }),
                        (o._addScopeLevel = function () {
                          this._scopeClosers += '})';
                        }),
                        (o._closeScopeLevels = function () {
                          this._emitLine(this._scopeClosers + ';'),
                            (this._scopeClosers = '');
                        }),
                        (o._withScopedSyntax = function (e) {
                          var t = this._scopeClosers;
                          (this._scopeClosers = ''),
                            e.call(this),
                            this._closeScopeLevels(),
                            (this._scopeClosers = t);
                        }),
                        (o._makeCallback = function (e) {
                          var t = this._tmpid();
                          return (
                            'function(' +
                            t +
                            (e ? ',' + e : '') +
                            ') {\nif(' +
                            t +
                            ') { cb(' +
                            t +
                            '); return; }'
                          );
                        }),
                        (o._tmpid = function () {
                          return this.lastId++, 't_' + this.lastId;
                        }),
                        (o._templateName = function () {
                          return null == this.templateName
                            ? 'undefined'
                            : JSON.stringify(this.templateName);
                        }),
                        (o._compileChildren = function (e, t) {
                          var n = this;
                          e.children.forEach(function (e) {
                            n.compile(e, t);
                          });
                        }),
                        (o._compileAggregate = function (e, t, n, i) {
                          var r = this;
                          n && this._emit(n),
                            e.children.forEach(function (e, n) {
                              n > 0 && r._emit(','), r.compile(e, t);
                            }),
                            i && this._emit(i);
                        }),
                        (o._compileExpression = function (e, t) {
                          this.assertType(
                            e,
                            s.Literal,
                            s.Symbol,
                            s.Group,
                            s.Array,
                            s.Dict,
                            s.FunCall,
                            s.Caller,
                            s.Filter,
                            s.LookupVal,
                            s.Compare,
                            s.InlineIf,
                            s.In,
                            s.Is,
                            s.And,
                            s.Or,
                            s.Not,
                            s.Add,
                            s.Concat,
                            s.Sub,
                            s.Mul,
                            s.Div,
                            s.FloorDiv,
                            s.Mod,
                            s.Pow,
                            s.Neg,
                            s.Pos,
                            s.Compare,
                            s.NodeList
                          ),
                            this.compile(e, t);
                        }),
                        (o.assertType = function (e) {
                          for (
                            var t = arguments.length,
                              n = new Array(t > 1 ? t - 1 : 0),
                              i = 1;
                            i < t;
                            i++
                          )
                            n[i - 1] = arguments[i];
                          n.some(function (t) {
                            return e instanceof t;
                          }) ||
                            this.fail(
                              'assertType: invalid type: ' + e.typename,
                              e.lineno,
                              e.colno
                            );
                        }),
                        (o.compileCallExtension = function (e, t, n) {
                          var i = this,
                            r = e.args,
                            o = e.contentArgs,
                            a =
                              'boolean' != typeof e.autoescape || e.autoescape;
                          if (
                            (n ||
                              this._emit(
                                this.buffer + ' += runtime.suppressValue('
                              ),
                            this._emit(
                              'env.getExtension("' +
                                e.extName +
                                '")["' +
                                e.prop +
                                '"]('
                            ),
                            this._emit('context'),
                            (r || o) && this._emit(','),
                            r &&
                              (r instanceof s.NodeList ||
                                this.fail(
                                  'compileCallExtension: arguments must be a NodeList, use `parser.parseSignature`'
                                ),
                              r.children.forEach(function (e, n) {
                                i._compileExpression(e, t),
                                  (n !== r.children.length - 1 || o.length) &&
                                    i._emit(',');
                              })),
                            o.length &&
                              o.forEach(function (e, n) {
                                if ((n > 0 && i._emit(','), e)) {
                                  i._emitLine('function(cb) {'),
                                    i._emitLine(
                                      'if(!cb) { cb = function(err) { if(err) { throw err; }}}'
                                    );
                                  var r = i._pushBuffer();
                                  i._withScopedSyntax(function () {
                                    i.compile(e, t),
                                      i._emitLine('cb(null, ' + r + ');');
                                  }),
                                    i._popBuffer(),
                                    i._emitLine('return ' + r + ';'),
                                    i._emitLine('}');
                                } else i._emit('null');
                              }),
                            n)
                          ) {
                            var c = this._tmpid();
                            this._emitLine(', ' + this._makeCallback(c)),
                              this._emitLine(
                                this.buffer +
                                  ' += runtime.suppressValue(' +
                                  c +
                                  ', ' +
                                  a +
                                  ' && env.opts.autoescape);'
                              ),
                              this._addScopeLevel();
                          } else
                            this._emit(')'),
                              this._emit(
                                ', ' + a + ' && env.opts.autoescape);\n'
                              );
                        }),
                        (o.compileCallExtensionAsync = function (e, t) {
                          this.compileCallExtension(e, t, !0);
                        }),
                        (o.compileNodeList = function (e, t) {
                          this._compileChildren(e, t);
                        }),
                        (o.compileLiteral = function (e) {
                          if ('string' == typeof e.value) {
                            var t = e.value.replace(/\\/g, '\\\\');
                            (t = (t = (t = (t = (t = t.replace(
                              /"/g,
                              '\\"'
                            )).replace(/\n/g, '\\n')).replace(
                              /\r/g,
                              '\\r'
                            )).replace(/\t/g, '\\t')).replace(
                              /\u2028/g,
                              '\\u2028'
                            )),
                              this._emit('"' + t + '"');
                          } else
                            this._emit(
                              null === e.value ? 'null' : e.value.toString()
                            );
                        }),
                        (o.compileSymbol = function (e, t) {
                          var n = e.value,
                            i = t.lookup(n);
                          this._emit(
                            i ||
                              'runtime.contextOrFrameLookup(context, frame, "' +
                                n +
                                '")'
                          );
                        }),
                        (o.compileGroup = function (e, t) {
                          this._compileAggregate(e, t, '(', ')');
                        }),
                        (o.compileArray = function (e, t) {
                          this._compileAggregate(e, t, '[', ']');
                        }),
                        (o.compileDict = function (e, t) {
                          this._compileAggregate(e, t, '{', '}');
                        }),
                        (o.compilePair = function (e, t) {
                          var n = e.key,
                            i = e.value;
                          n instanceof s.Symbol
                            ? (n = new s.Literal(n.lineno, n.colno, n.value))
                            : (n instanceof s.Literal &&
                                'string' == typeof n.value) ||
                              this.fail(
                                'compilePair: Dict keys must be strings or names',
                                n.lineno,
                                n.colno
                              ),
                            this.compile(n, t),
                            this._emit(': '),
                            this._compileExpression(i, t);
                        }),
                        (o.compileInlineIf = function (e, t) {
                          this._emit('('),
                            this.compile(e.cond, t),
                            this._emit('?'),
                            this.compile(e.body, t),
                            this._emit(':'),
                            null !== e.else_
                              ? this.compile(e.else_, t)
                              : this._emit('""'),
                            this._emit(')');
                        }),
                        (o.compileIn = function (e, t) {
                          this._emit('runtime.inOperator('),
                            this.compile(e.left, t),
                            this._emit(','),
                            this.compile(e.right, t),
                            this._emit(')');
                        }),
                        (o.compileIs = function (e, t) {
                          this._emit(
                            'env.getTest("' +
                              (e.right.name
                                ? e.right.name.value
                                : e.right.value) +
                              '").call(context, '
                          ),
                            this.compile(e.left, t),
                            e.right.args &&
                              (this._emit(','), this.compile(e.right.args, t)),
                            this._emit(') === true');
                        }),
                        (o._binOpEmitter = function (e, t, n) {
                          this.compile(e.left, t),
                            this._emit(n),
                            this.compile(e.right, t);
                        }),
                        (o.compileOr = function (e, t) {
                          return this._binOpEmitter(e, t, ' || ');
                        }),
                        (o.compileAnd = function (e, t) {
                          return this._binOpEmitter(e, t, ' && ');
                        }),
                        (o.compileAdd = function (e, t) {
                          return this._binOpEmitter(e, t, ' + ');
                        }),
                        (o.compileConcat = function (e, t) {
                          return this._binOpEmitter(e, t, ' + "" + ');
                        }),
                        (o.compileSub = function (e, t) {
                          return this._binOpEmitter(e, t, ' - ');
                        }),
                        (o.compileMul = function (e, t) {
                          return this._binOpEmitter(e, t, ' * ');
                        }),
                        (o.compileDiv = function (e, t) {
                          return this._binOpEmitter(e, t, ' / ');
                        }),
                        (o.compileMod = function (e, t) {
                          return this._binOpEmitter(e, t, ' % ');
                        }),
                        (o.compileNot = function (e, t) {
                          this._emit('!'), this.compile(e.target, t);
                        }),
                        (o.compileFloorDiv = function (e, t) {
                          this._emit('Math.floor('),
                            this.compile(e.left, t),
                            this._emit(' / '),
                            this.compile(e.right, t),
                            this._emit(')');
                        }),
                        (o.compilePow = function (e, t) {
                          this._emit('Math.pow('),
                            this.compile(e.left, t),
                            this._emit(', '),
                            this.compile(e.right, t),
                            this._emit(')');
                        }),
                        (o.compileNeg = function (e, t) {
                          this._emit('-'), this.compile(e.target, t);
                        }),
                        (o.compilePos = function (e, t) {
                          this._emit('+'), this.compile(e.target, t);
                        }),
                        (o.compileCompare = function (e, t) {
                          var n = this;
                          this.compile(e.expr, t),
                            e.ops.forEach(function (e) {
                              n._emit(' ' + u[e.type] + ' '),
                                n.compile(e.expr, t);
                            });
                        }),
                        (o.compileLookupVal = function (e, t) {
                          this._emit('runtime.memberLookup(('),
                            this._compileExpression(e.target, t),
                            this._emit('),'),
                            this._compileExpression(e.val, t),
                            this._emit(')');
                        }),
                        (o._getNodeName = function (e) {
                          switch (e.typename) {
                            case 'Symbol':
                              return e.value;
                            case 'FunCall':
                              return (
                                'the return value of (' +
                                this._getNodeName(e.name) +
                                ')'
                              );
                            case 'LookupVal':
                              return (
                                this._getNodeName(e.target) +
                                '["' +
                                this._getNodeName(e.val) +
                                '"]'
                              );
                            case 'Literal':
                              return e.value.toString();
                            default:
                              return '--expression--';
                          }
                        }),
                        (o.compileFunCall = function (e, t) {
                          this._emit(
                            '(lineno = ' +
                              e.lineno +
                              ', colno = ' +
                              e.colno +
                              ', '
                          ),
                            this._emit('runtime.callWrap('),
                            this._compileExpression(e.name, t),
                            this._emit(
                              ', "' +
                                this._getNodeName(e.name).replace(/"/g, '\\"') +
                                '", context, '
                            ),
                            this._compileAggregate(e.args, t, '[', '])'),
                            this._emit(')');
                        }),
                        (o.compileFilter = function (e, t) {
                          var n = e.name;
                          this.assertType(n, s.Symbol),
                            this._emit(
                              'env.getFilter("' + n.value + '").call(context, '
                            ),
                            this._compileAggregate(e.args, t),
                            this._emit(')');
                        }),
                        (o.compileFilterAsync = function (e, t) {
                          var n = e.name,
                            i = e.symbol.value;
                          this.assertType(n, s.Symbol),
                            t.set(i, i),
                            this._emit(
                              'env.getFilter("' + n.value + '").call(context, '
                            ),
                            this._compileAggregate(e.args, t),
                            this._emitLine(', ' + this._makeCallback(i)),
                            this._addScopeLevel();
                        }),
                        (o.compileKeywordArgs = function (e, t) {
                          this._emit('runtime.makeKeywordArgs('),
                            this.compileDict(e, t),
                            this._emit(')');
                        }),
                        (o.compileSet = function (e, t) {
                          var n = this,
                            i = [];
                          e.targets.forEach(function (e) {
                            var r = t.lookup(e.value);
                            null == r &&
                              ((r = n._tmpid()), n._emitLine('var ' + r + ';')),
                              i.push(r);
                          }),
                            e.value
                              ? (this._emit(i.join(' = ') + ' = '),
                                this._compileExpression(e.value, t),
                                this._emitLine(';'))
                              : (this._emit(i.join(' = ') + ' = '),
                                this.compile(e.body, t),
                                this._emitLine(';')),
                            e.targets.forEach(function (e, t) {
                              var r = i[t],
                                o = e.value;
                              n._emitLine(
                                'frame.set("' + o + '", ' + r + ', true);'
                              ),
                                n._emitLine('if(frame.topLevel) {'),
                                n._emitLine(
                                  'context.setVariable("' + o + '", ' + r + ');'
                                ),
                                n._emitLine('}'),
                                '_' !== o.charAt(0) &&
                                  (n._emitLine('if(frame.topLevel) {'),
                                  n._emitLine(
                                    'context.addExport("' + o + '", ' + r + ');'
                                  ),
                                  n._emitLine('}'));
                            });
                        }),
                        (o.compileSwitch = function (e, t) {
                          var n = this;
                          this._emit('switch ('),
                            this.compile(e.expr, t),
                            this._emit(') {'),
                            e.cases.forEach(function (e, i) {
                              n._emit('case '),
                                n.compile(e.cond, t),
                                n._emit(': '),
                                n.compile(e.body, t),
                                e.body.children.length && n._emitLine('break;');
                            }),
                            e.default &&
                              (this._emit('default:'),
                              this.compile(e.default, t)),
                            this._emit('}');
                        }),
                        (o.compileIf = function (e, t, n) {
                          var i = this;
                          this._emit('if('),
                            this._compileExpression(e.cond, t),
                            this._emitLine(') {'),
                            this._withScopedSyntax(function () {
                              i.compile(e.body, t), n && i._emit('cb()');
                            }),
                            e.else_
                              ? (this._emitLine('}\nelse {'),
                                this._withScopedSyntax(function () {
                                  i.compile(e.else_, t), n && i._emit('cb()');
                                }))
                              : n &&
                                (this._emitLine('}\nelse {'),
                                this._emit('cb()')),
                            this._emitLine('}');
                        }),
                        (o.compileIfAsync = function (e, t) {
                          this._emit('(function(cb) {'),
                            this.compileIf(e, t, !0),
                            this._emit('})(' + this._makeCallback()),
                            this._addScopeLevel();
                        }),
                        (o._emitLoopBindings = function (e, t, n, i) {
                          var r = this;
                          [
                            { name: 'index', val: n + ' + 1' },
                            { name: 'index0', val: n },
                            { name: 'revindex', val: i + ' - ' + n },
                            { name: 'revindex0', val: i + ' - ' + n + ' - 1' },
                            { name: 'first', val: n + ' === 0' },
                            { name: 'last', val: n + ' === ' + i + ' - 1' },
                            { name: 'length', val: i },
                          ].forEach(function (e) {
                            r._emitLine(
                              'frame.set("loop.' + e.name + '", ' + e.val + ');'
                            );
                          });
                        }),
                        (o.compileFor = function (e, t) {
                          var n = this,
                            i = this._tmpid(),
                            r = this._tmpid(),
                            o = this._tmpid();
                          if (
                            ((t = t.push()),
                            this._emitLine('frame = frame.push();'),
                            this._emit('var ' + o + ' = '),
                            this._compileExpression(e.arr, t),
                            this._emitLine(';'),
                            this._emit('if(' + o + ') {'),
                            this._emitLine(
                              o + ' = runtime.fromIterator(' + o + ');'
                            ),
                            e.name instanceof s.Array)
                          ) {
                            this._emitLine('var ' + i + ';'),
                              this._emitLine(
                                'if(runtime.isArray(' + o + ')) {'
                              ),
                              this._emitLine(
                                'var ' + r + ' = ' + o + '.length;'
                              ),
                              this._emitLine(
                                'for(' +
                                  i +
                                  '=0; ' +
                                  i +
                                  ' < ' +
                                  o +
                                  '.length; ' +
                                  i +
                                  '++) {'
                              ),
                              e.name.children.forEach(function (r, s) {
                                var a = n._tmpid();
                                n._emitLine(
                                  'var ' +
                                    a +
                                    ' = ' +
                                    o +
                                    '[' +
                                    i +
                                    '][' +
                                    s +
                                    '];'
                                ),
                                  n._emitLine(
                                    'frame.set("' +
                                      r +
                                      '", ' +
                                      o +
                                      '[' +
                                      i +
                                      '][' +
                                      s +
                                      ']);'
                                  ),
                                  t.set(e.name.children[s].value, a);
                              }),
                              this._emitLoopBindings(e, o, i, r),
                              this._withScopedSyntax(function () {
                                n.compile(e.body, t);
                              }),
                              this._emitLine('}'),
                              this._emitLine('} else {');
                            var a = e.name.children,
                              c = a[0],
                              l = a[1],
                              u = this._tmpid(),
                              h = this._tmpid();
                            t.set(c.value, u),
                              t.set(l.value, h),
                              this._emitLine(i + ' = -1;'),
                              this._emitLine(
                                'var ' +
                                  r +
                                  ' = runtime.keys(' +
                                  o +
                                  ').length;'
                              ),
                              this._emitLine(
                                'for(var ' + u + ' in ' + o + ') {'
                              ),
                              this._emitLine(i + '++;'),
                              this._emitLine(
                                'var ' + h + ' = ' + o + '[' + u + '];'
                              ),
                              this._emitLine(
                                'frame.set("' + c.value + '", ' + u + ');'
                              ),
                              this._emitLine(
                                'frame.set("' + l.value + '", ' + h + ');'
                              ),
                              this._emitLoopBindings(e, o, i, r),
                              this._withScopedSyntax(function () {
                                n.compile(e.body, t);
                              }),
                              this._emitLine('}'),
                              this._emitLine('}');
                          } else {
                            var f = this._tmpid();
                            t.set(e.name.value, f),
                              this._emitLine(
                                'var ' + r + ' = ' + o + '.length;'
                              ),
                              this._emitLine(
                                'for(var ' +
                                  i +
                                  '=0; ' +
                                  i +
                                  ' < ' +
                                  o +
                                  '.length; ' +
                                  i +
                                  '++) {'
                              ),
                              this._emitLine(
                                'var ' + f + ' = ' + o + '[' + i + '];'
                              ),
                              this._emitLine(
                                'frame.set("' + e.name.value + '", ' + f + ');'
                              ),
                              this._emitLoopBindings(e, o, i, r),
                              this._withScopedSyntax(function () {
                                n.compile(e.body, t);
                              }),
                              this._emitLine('}');
                          }
                          this._emitLine('}'),
                            e.else_ &&
                              (this._emitLine('if (!' + r + ') {'),
                              this.compile(e.else_, t),
                              this._emitLine('}')),
                            this._emitLine('frame = frame.pop();');
                        }),
                        (o._compileAsyncLoop = function (e, t, n) {
                          var i = this,
                            r = this._tmpid(),
                            o = this._tmpid(),
                            a = this._tmpid(),
                            c = n ? 'asyncAll' : 'asyncEach';
                          if (
                            ((t = t.push()),
                            this._emitLine('frame = frame.push();'),
                            this._emit('var ' + a + ' = runtime.fromIterator('),
                            this._compileExpression(e.arr, t),
                            this._emitLine(');'),
                            e.name instanceof s.Array)
                          )
                            this._emit(
                              'runtime.' +
                                c +
                                '(' +
                                a +
                                ', ' +
                                e.name.children.length +
                                ', function('
                            ),
                              e.name.children.forEach(function (e) {
                                i._emit(e.value + ',');
                              }),
                              this._emit(r + ',' + o + ',next) {'),
                              e.name.children.forEach(function (e) {
                                var n = e.value;
                                t.set(n, n),
                                  i._emitLine(
                                    'frame.set("' + n + '", ' + n + ');'
                                  );
                              });
                          else {
                            var l = e.name.value;
                            this._emitLine(
                              'runtime.' +
                                c +
                                '(' +
                                a +
                                ', 1, function(' +
                                l +
                                ', ' +
                                r +
                                ', ' +
                                o +
                                ',next) {'
                            ),
                              this._emitLine(
                                'frame.set("' + l + '", ' + l + ');'
                              ),
                              t.set(l, l);
                          }
                          this._emitLoopBindings(e, a, r, o),
                            this._withScopedSyntax(function () {
                              var o;
                              n && (o = i._pushBuffer()),
                                i.compile(e.body, t),
                                i._emitLine(
                                  'next(' + r + (o ? ',' + o : '') + ');'
                                ),
                                n && i._popBuffer();
                            });
                          var u = this._tmpid();
                          this._emitLine('}, ' + this._makeCallback(u)),
                            this._addScopeLevel(),
                            n && this._emitLine(this.buffer + ' += ' + u + ';'),
                            e.else_ &&
                              (this._emitLine('if (!' + a + '.length) {'),
                              this.compile(e.else_, t),
                              this._emitLine('}')),
                            this._emitLine('frame = frame.pop();');
                        }),
                        (o.compileAsyncEach = function (e, t) {
                          this._compileAsyncLoop(e, t);
                        }),
                        (o.compileAsyncAll = function (e, t) {
                          this._compileAsyncLoop(e, t, !0);
                        }),
                        (o._compileMacro = function (e, t) {
                          var n = this,
                            i = [],
                            r = null,
                            o = 'macro_' + this._tmpid(),
                            a = void 0 !== t;
                          e.args.children.forEach(function (t, o) {
                            o === e.args.children.length - 1 &&
                            t instanceof s.Dict
                              ? (r = t)
                              : (n.assertType(t, s.Symbol), i.push(t));
                          });
                          var l,
                            u = [].concat(
                              i.map(function (e) {
                                return 'l_' + e.value;
                              }),
                              ['kwargs']
                            ),
                            h = i.map(function (e) {
                              return '"' + e.value + '"';
                            }),
                            f = ((r && r.children) || []).map(function (e) {
                              return '"' + e.key.value + '"';
                            });
                          (l = a ? t.push(!0) : new c()),
                            this._emitLines(
                              'var ' + o + ' = runtime.makeMacro(',
                              '[' + h.join(', ') + '], ',
                              '[' + f.join(', ') + '], ',
                              'function (' + u.join(', ') + ') {',
                              'var callerFrame = frame;',
                              'frame = ' +
                                (a
                                  ? 'frame.push(true);'
                                  : 'new runtime.Frame();'),
                              'kwargs = kwargs || {};',
                              'if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {',
                              'frame.set("caller", kwargs.caller); }'
                            ),
                            i.forEach(function (e) {
                              n._emitLine(
                                'frame.set("' +
                                  e.value +
                                  '", l_' +
                                  e.value +
                                  ');'
                              ),
                                l.set(e.value, 'l_' + e.value);
                            }),
                            r &&
                              r.children.forEach(function (e) {
                                var t = e.key.value;
                                n._emit('frame.set("' + t + '", '),
                                  n._emit(
                                    'Object.prototype.hasOwnProperty.call(kwargs, "' +
                                      t +
                                      '")'
                                  ),
                                  n._emit(' ? kwargs["' + t + '"] : '),
                                  n._compileExpression(e.value, l),
                                  n._emit(');');
                              });
                          var p = this._pushBuffer();
                          return (
                            this._withScopedSyntax(function () {
                              n.compile(e.body, l);
                            }),
                            this._emitLine(
                              'frame = ' + (a ? 'frame.pop();' : 'callerFrame;')
                            ),
                            this._emitLine(
                              'return new runtime.SafeString(' + p + ');'
                            ),
                            this._emitLine('});'),
                            this._popBuffer(),
                            o
                          );
                        }),
                        (o.compileMacro = function (e, t) {
                          var n = this._compileMacro(e),
                            i = e.name.value;
                          t.set(i, n),
                            t.parent
                              ? this._emitLine(
                                  'frame.set("' + i + '", ' + n + ');'
                                )
                              : ('_' !== e.name.value.charAt(0) &&
                                  this._emitLine(
                                    'context.addExport("' + i + '");'
                                  ),
                                this._emitLine(
                                  'context.setVariable("' + i + '", ' + n + ');'
                                ));
                        }),
                        (o.compileCaller = function (e, t) {
                          this._emit('(function (){');
                          var n = this._compileMacro(e, t);
                          this._emit('return ' + n + ';})()');
                        }),
                        (o._compileGetTemplate = function (e, t, n, i) {
                          var r = this._tmpid(),
                            o = this._templateName(),
                            s = this._makeCallback(r),
                            a = n ? 'true' : 'false',
                            c = i ? 'true' : 'false';
                          return (
                            this._emit('env.getTemplate('),
                            this._compileExpression(e.template, t),
                            this._emitLine(
                              ', ' + a + ', ' + o + ', ' + c + ', ' + s
                            ),
                            r
                          );
                        }),
                        (o.compileImport = function (e, t) {
                          var n = e.target.value,
                            i = this._compileGetTemplate(e, t, !1, !1);
                          this._addScopeLevel(),
                            this._emitLine(
                              i +
                                '.getExported(' +
                                (e.withContext
                                  ? 'context.getVariables(), frame, '
                                  : '') +
                                this._makeCallback(i)
                            ),
                            this._addScopeLevel(),
                            t.set(n, i),
                            this._emitLine(
                              t.parent
                                ? 'frame.set("' + n + '", ' + i + ');'
                                : 'context.setVariable("' + n + '", ' + i + ');'
                            );
                        }),
                        (o.compileFromImport = function (e, t) {
                          var n = this,
                            i = this._compileGetTemplate(e, t, !1, !1);
                          this._addScopeLevel(),
                            this._emitLine(
                              i +
                                '.getExported(' +
                                (e.withContext
                                  ? 'context.getVariables(), frame, '
                                  : '') +
                                this._makeCallback(i)
                            ),
                            this._addScopeLevel(),
                            e.names.children.forEach(function (e) {
                              var r,
                                o,
                                a = n._tmpid();
                              e instanceof s.Pair
                                ? ((r = e.key.value), (o = e.value.value))
                                : (o = r = e.value),
                                n._emitLine(
                                  'if(Object.prototype.hasOwnProperty.call(' +
                                    i +
                                    ', "' +
                                    r +
                                    '")) {'
                                ),
                                n._emitLine(
                                  'var ' + a + ' = ' + i + '.' + r + ';'
                                ),
                                n._emitLine('} else {'),
                                n._emitLine(
                                  'cb(new Error("cannot import \'' +
                                    r +
                                    '\'")); return;'
                                ),
                                n._emitLine('}'),
                                t.set(o, a),
                                n._emitLine(
                                  t.parent
                                    ? 'frame.set("' + o + '", ' + a + ');'
                                    : 'context.setVariable("' +
                                        o +
                                        '", ' +
                                        a +
                                        ');'
                                );
                            });
                        }),
                        (o.compileBlock = function (e) {
                          var t = this._tmpid();
                          this.inBlock ||
                            this._emit(
                              '(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : '
                            ),
                            this._emit(
                              'context.getBlock("' + e.name.value + '")'
                            ),
                            this.inBlock || this._emit(')'),
                            this._emitLine(
                              '(env, context, frame, runtime, ' +
                                this._makeCallback(t)
                            ),
                            this._emitLine(this.buffer + ' += ' + t + ';'),
                            this._addScopeLevel();
                        }),
                        (o.compileSuper = function (e, t) {
                          var n = e.blockName.value,
                            i = e.symbol.value,
                            r = this._makeCallback(i);
                          this._emitLine(
                            'context.getSuper(env, "' +
                              n +
                              '", b_' +
                              n +
                              ', frame, runtime, ' +
                              r
                          ),
                            this._emitLine(
                              i + ' = runtime.markSafe(' + i + ');'
                            ),
                            this._addScopeLevel(),
                            t.set(i, i);
                        }),
                        (o.compileExtends = function (e, t) {
                          var n = this._tmpid(),
                            i = this._compileGetTemplate(e, t, !0, !1);
                          this._emitLine('parentTemplate = ' + i),
                            this._emitLine(
                              'for(var ' + n + ' in parentTemplate.blocks) {'
                            ),
                            this._emitLine(
                              'context.addBlock(' +
                                n +
                                ', parentTemplate.blocks[' +
                                n +
                                ']);'
                            ),
                            this._emitLine('}'),
                            this._addScopeLevel();
                        }),
                        (o.compileInclude = function (e, t) {
                          this._emitLine('var tasks = [];'),
                            this._emitLine('tasks.push('),
                            this._emitLine('function(callback) {');
                          var n = this._compileGetTemplate(
                            e,
                            t,
                            !1,
                            e.ignoreMissing
                          );
                          this._emitLine('callback(null,' + n + ');});'),
                            this._emitLine('});');
                          var i = this._tmpid();
                          this._emitLine('tasks.push('),
                            this._emitLine('function(template, callback){'),
                            this._emitLine(
                              'template.render(context.getVariables(), frame, ' +
                                this._makeCallback(i)
                            ),
                            this._emitLine('callback(null,' + i + ');});'),
                            this._emitLine('});'),
                            this._emitLine('tasks.push('),
                            this._emitLine('function(result, callback){'),
                            this._emitLine(this.buffer + ' += result;'),
                            this._emitLine('callback(null);'),
                            this._emitLine('});'),
                            this._emitLine('env.waterfall(tasks, function(){'),
                            this._addScopeLevel();
                        }),
                        (o.compileTemplateData = function (e, t) {
                          this.compileLiteral(e, t);
                        }),
                        (o.compileCapture = function (e, t) {
                          var n = this,
                            i = this.buffer;
                          (this.buffer = 'output'),
                            this._emitLine('(function() {'),
                            this._emitLine('var output = "";'),
                            this._withScopedSyntax(function () {
                              n.compile(e.body, t);
                            }),
                            this._emitLine('return output;'),
                            this._emitLine('})()'),
                            (this.buffer = i);
                        }),
                        (o.compileOutput = function (e, t) {
                          var n = this;
                          e.children.forEach(function (i) {
                            i instanceof s.TemplateData
                              ? i.value &&
                                (n._emit(n.buffer + ' += '),
                                n.compileLiteral(i, t),
                                n._emitLine(';'))
                              : (n._emit(
                                  n.buffer + ' += runtime.suppressValue('
                                ),
                                n.throwOnUndefined &&
                                  n._emit('runtime.ensureDefined('),
                                n.compile(i, t),
                                n.throwOnUndefined &&
                                  n._emit(',' + e.lineno + ',' + e.colno + ')'),
                                n._emit(', env.opts.autoescape);\n'));
                          });
                        }),
                        (o.compileRoot = function (e, t) {
                          var n = this;
                          t &&
                            this.fail(
                              "compileRoot: root node can't have frame"
                            ),
                            (t = new c()),
                            this._emitFuncBegin(e, 'root'),
                            this._emitLine('var parentTemplate = null;'),
                            this._compileChildren(e, t),
                            this._emitLine('if(parentTemplate) {'),
                            this._emitLine(
                              'parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);'
                            ),
                            this._emitLine('} else {'),
                            this._emitLine('cb(null, ' + this.buffer + ');'),
                            this._emitLine('}'),
                            this._emitFuncEnd(!0),
                            (this.inBlock = !0);
                          var i = [],
                            r = e.findAll(s.Block);
                          r.forEach(function (e, t) {
                            var r = e.name.value;
                            if (-1 !== i.indexOf(r))
                              throw new Error(
                                'Block "' + r + '" defined more than once.'
                              );
                            i.push(r), n._emitFuncBegin(e, 'b_' + r);
                            var o = new c();
                            n._emitLine('var frame = frame.push(true);'),
                              n.compile(e.body, o),
                              n._emitFuncEnd();
                          }),
                            this._emitLine('return {'),
                            r.forEach(function (e, t) {
                              var i = 'b_' + e.name.value;
                              n._emitLine(i + ': ' + i + ',');
                            }),
                            this._emitLine('root: root\n};');
                        }),
                        (o.compile = function (e, t) {
                          var n = this['compile' + e.typename];
                          n
                            ? n.call(this, e, t)
                            : this.fail(
                                'compile: Cannot compile node: ' + e.typename,
                                e.lineno,
                                e.colno
                              );
                        }),
                        (o.getCode = function () {
                          return this.codebuf.join('');
                        }),
                        r
                      );
                    })(l.Obj);
                  e.exports = {
                    compile: function (e, t, n, i, s) {
                      void 0 === s && (s = {});
                      var a = new h(i, s.throwOnUndefined),
                        c = (n || [])
                          .map(function (e) {
                            return e.preprocess;
                          })
                          .filter(function (e) {
                            return !!e;
                          })
                          .reduce(function (e, t) {
                            return t(e);
                          }, e);
                      return (
                        a.compile(o.transform(r.parse(c, n, s), t, i)),
                        a.getCode()
                      );
                    },
                    Compiler: h,
                  };
                },
                function (e, t, n) {
                  function i(e, t) {
                    return (
                      (i =
                        Object.setPrototypeOf ||
                        function (e, t) {
                          return (e.__proto__ = t), e;
                        }),
                      i(e, t)
                    );
                  }
                  var r = n(4),
                    o = n(1);
                  e.exports = /*#__PURE__*/ (function (e) {
                    var t, n;
                    function o() {
                      return e.apply(this, arguments) || this;
                    }
                    (n = e),
                      ((t = o).prototype = Object.create(n.prototype)),
                      (t.prototype.constructor = t),
                      i(t, n);
                    var s = o.prototype;
                    return (
                      (s.resolve = function (e, t) {
                        return r.resolve(r.dirname(e), t);
                      }),
                      (s.isRelative = function (e) {
                        return 0 === e.indexOf('./') || 0 === e.indexOf('../');
                      }),
                      o
                    );
                  })(o.EmitterObj);
                },
                function (e, t, n) {
                  function i(e, t) {
                    (e.prototype = Object.create(t.prototype)),
                      (e.prototype.constructor = e),
                      r(e, t);
                  }
                  function r(e, t) {
                    return (
                      (r =
                        Object.setPrototypeOf ||
                        function (e, t) {
                          return (e.__proto__ = t), e;
                        }),
                      r(e, t)
                    );
                  }
                  var o = n(12),
                    s = n(15),
                    a = n(0),
                    c = n(5),
                    l = n(18),
                    u = n(10),
                    h = u.FileSystemLoader,
                    f = u.WebLoader,
                    p = u.PrecompiledLoader,
                    d = n(20),
                    m = n(21),
                    v = n(1),
                    y = v.Obj,
                    _ = v.EmitterObj,
                    g = n(2),
                    k = g.handleError,
                    b = g.Frame,
                    w = n(22);
                  function E(e, t, n) {
                    o(function () {
                      e(t, n);
                    });
                  }
                  var x = {
                      type: 'code',
                      obj: {
                        root: function (e, t, n, i, r) {
                          try {
                            r(null, '');
                          } catch (e) {
                            r(k(e, null, null));
                          }
                        },
                      },
                    },
                    O = /*#__PURE__*/ (function (e) {
                      function t() {
                        return e.apply(this, arguments) || this;
                      }
                      i(t, e);
                      var n = t.prototype;
                      return (
                        (n.init = function (e, t) {
                          var n = this;
                          (t = this.opts = t || {}),
                            (this.opts.dev = !!t.dev),
                            (this.opts.autoescape =
                              null == t.autoescape || t.autoescape),
                            (this.opts.throwOnUndefined = !!t.throwOnUndefined),
                            (this.opts.trimBlocks = !!t.trimBlocks),
                            (this.opts.lstripBlocks = !!t.lstripBlocks),
                            (this.loaders = []),
                            e
                              ? (this.loaders = a.isArray(e) ? e : [e])
                              : h
                              ? (this.loaders = [new h('views')])
                              : f && (this.loaders = [new f('/views')]),
                            'undefined' != typeof window &&
                              window.nunjucksPrecompiled &&
                              this.loaders.unshift(
                                new p(window.nunjucksPrecompiled)
                              ),
                            this._initLoaders(),
                            (this.globals = m()),
                            (this.filters = {}),
                            (this.tests = {}),
                            (this.asyncFilters = []),
                            (this.extensions = {}),
                            (this.extensionsList = []),
                            a._entries(l).forEach(function (e) {
                              return n.addFilter(e[0], e[1]);
                            }),
                            a._entries(d).forEach(function (e) {
                              return n.addTest(e[0], e[1]);
                            });
                        }),
                        (n._initLoaders = function () {
                          var e = this;
                          this.loaders.forEach(function (t) {
                            (t.cache = {}),
                              'function' == typeof t.on &&
                                (t.on('update', function (n, i) {
                                  (t.cache[n] = null),
                                    e.emit('update', n, i, t);
                                }),
                                t.on('load', function (n, i) {
                                  e.emit('load', n, i, t);
                                }));
                          });
                        }),
                        (n.invalidateCache = function () {
                          this.loaders.forEach(function (e) {
                            e.cache = {};
                          });
                        }),
                        (n.addExtension = function (e, t) {
                          return (
                            (t.__name = e),
                            (this.extensions[e] = t),
                            this.extensionsList.push(t),
                            this
                          );
                        }),
                        (n.removeExtension = function (e) {
                          var t = this.getExtension(e);
                          t &&
                            ((this.extensionsList = a.without(
                              this.extensionsList,
                              t
                            )),
                            delete this.extensions[e]);
                        }),
                        (n.getExtension = function (e) {
                          return this.extensions[e];
                        }),
                        (n.hasExtension = function (e) {
                          return !!this.extensions[e];
                        }),
                        (n.addGlobal = function (e, t) {
                          return (this.globals[e] = t), this;
                        }),
                        (n.getGlobal = function (e) {
                          if (void 0 === this.globals[e])
                            throw new Error('global not found: ' + e);
                          return this.globals[e];
                        }),
                        (n.addFilter = function (e, t, n) {
                          var i = t;
                          return (
                            n && this.asyncFilters.push(e),
                            (this.filters[e] = i),
                            this
                          );
                        }),
                        (n.getFilter = function (e) {
                          if (!this.filters[e])
                            throw new Error('filter not found: ' + e);
                          return this.filters[e];
                        }),
                        (n.addTest = function (e, t) {
                          return (this.tests[e] = t), this;
                        }),
                        (n.getTest = function (e) {
                          if (!this.tests[e])
                            throw new Error('test not found: ' + e);
                          return this.tests[e];
                        }),
                        (n.resolveTemplate = function (e, t, n) {
                          return e.isRelative &&
                            t &&
                            e.isRelative(n) &&
                            e.resolve
                            ? e.resolve(t, n)
                            : n;
                        }),
                        (n.getTemplate = function (e, t, n, i, r) {
                          var o,
                            s = this,
                            c = this,
                            l = null;
                          if (
                            (e && e.raw && (e = e.raw),
                            a.isFunction(n) &&
                              ((r = n), (n = null), (t = t || !1)),
                            a.isFunction(t) && ((r = t), (t = !1)),
                            e instanceof T)
                          )
                            l = e;
                          else {
                            if ('string' != typeof e)
                              throw new Error(
                                'template names must be a string: ' + e
                              );
                            for (var u = 0; u < this.loaders.length; u++) {
                              var h = this.loaders[u];
                              if ((l = h.cache[this.resolveTemplate(h, n, e)]))
                                break;
                            }
                          }
                          return l
                            ? (t && l.compile(), r ? void r(null, l) : l)
                            : (a.asyncIter(
                                this.loaders,
                                function (t, i, r, o) {
                                  function s(e, n) {
                                    e
                                      ? o(e)
                                      : n
                                      ? ((n.loader = t), o(null, n))
                                      : r();
                                  }
                                  (e = c.resolveTemplate(t, n, e)),
                                    t.async
                                      ? t.getSource(e, s)
                                      : s(null, t.getSource(e));
                                },
                                function (n, a) {
                                  if (
                                    (a ||
                                      n ||
                                      i ||
                                      (n = new Error(
                                        'template not found: ' + e
                                      )),
                                    n)
                                  ) {
                                    if (r) return void r(n);
                                    throw n;
                                  }
                                  var c;
                                  a
                                    ? ((c = new T(a.src, s, a.path, t)),
                                      a.noCache || (a.loader.cache[e] = c))
                                    : (c = new T(x, s, '', t)),
                                    r ? r(null, c) : (o = c);
                                }
                              ),
                              o);
                        }),
                        (n.express = function (e) {
                          return w(this, e);
                        }),
                        (n.render = function (e, t, n) {
                          a.isFunction(t) && ((n = t), (t = null));
                          var i = null;
                          return (
                            this.getTemplate(e, function (e, r) {
                              if (e && n) E(n, e);
                              else {
                                if (e) throw e;
                                i = r.render(t, n);
                              }
                            }),
                            i
                          );
                        }),
                        (n.renderString = function (e, t, n, i) {
                          return (
                            a.isFunction(n) && ((i = n), (n = {})),
                            new T(e, this, (n = n || {}).path).render(t, i)
                          );
                        }),
                        (n.waterfall = function (e, t, n) {
                          return s(e, t, n);
                        }),
                        t
                      );
                    })(_),
                    L = /*#__PURE__*/ (function (e) {
                      function t() {
                        return e.apply(this, arguments) || this;
                      }
                      i(t, e);
                      var n = t.prototype;
                      return (
                        (n.init = function (e, t, n) {
                          var i = this;
                          (this.env = n || new O()),
                            (this.ctx = a.extend({}, e)),
                            (this.blocks = {}),
                            (this.exported = []),
                            a.keys(t).forEach(function (e) {
                              i.addBlock(e, t[e]);
                            });
                        }),
                        (n.lookup = function (e) {
                          return e in this.env.globals && !(e in this.ctx)
                            ? this.env.globals[e]
                            : this.ctx[e];
                        }),
                        (n.setVariable = function (e, t) {
                          this.ctx[e] = t;
                        }),
                        (n.getVariables = function () {
                          return this.ctx;
                        }),
                        (n.addBlock = function (e, t) {
                          return (
                            (this.blocks[e] = this.blocks[e] || []),
                            this.blocks[e].push(t),
                            this
                          );
                        }),
                        (n.getBlock = function (e) {
                          if (!this.blocks[e])
                            throw new Error('unknown block "' + e + '"');
                          return this.blocks[e][0];
                        }),
                        (n.getSuper = function (e, t, n, i, r, o) {
                          var s = a.indexOf(this.blocks[t] || [], n),
                            c = this.blocks[t][s + 1];
                          if (-1 === s || !c)
                            throw new Error(
                              'no super block available for "' + t + '"'
                            );
                          c(e, this, i, r, o);
                        }),
                        (n.addExport = function (e) {
                          this.exported.push(e);
                        }),
                        (n.getExported = function () {
                          var e = this,
                            t = {};
                          return (
                            this.exported.forEach(function (n) {
                              t[n] = e.ctx[n];
                            }),
                            t
                          );
                        }),
                        t
                      );
                    })(y),
                    T = /*#__PURE__*/ (function (e) {
                      function t() {
                        return e.apply(this, arguments) || this;
                      }
                      i(t, e);
                      var n = t.prototype;
                      return (
                        (n.init = function (e, t, n, i) {
                          if (((this.env = t || new O()), a.isObject(e)))
                            switch (e.type) {
                              case 'code':
                                this.tmplProps = e.obj;
                                break;
                              case 'string':
                                this.tmplStr = e.obj;
                                break;
                              default:
                                throw new Error(
                                  'Unexpected template object type ' +
                                    e.type +
                                    "; expected 'code', or 'string'"
                                );
                            }
                          else {
                            if (!a.isString(e))
                              throw new Error(
                                'src must be a string or an object describing the source'
                              );
                            this.tmplStr = e;
                          }
                          if (((this.path = n), i))
                            try {
                              this._compile();
                            } catch (e) {
                              throw a._prettifyError(
                                this.path,
                                this.env.opts.dev,
                                e
                              );
                            }
                          else this.compiled = !1;
                        }),
                        (n.render = function (e, t, n) {
                          var i = this;
                          'function' == typeof e
                            ? ((n = e), (e = {}))
                            : 'function' == typeof t && ((n = t), (t = null));
                          var r = !t;
                          try {
                            this.compile();
                          } catch (e) {
                            var o = a._prettifyError(
                              this.path,
                              this.env.opts.dev,
                              e
                            );
                            if (n) return E(n, o);
                            throw o;
                          }
                          var s = new L(e || {}, this.blocks, this.env),
                            c = t ? t.push(!0) : new b();
                          c.topLevel = !0;
                          var l = null,
                            u = !1;
                          return (
                            this.rootRenderFunc(
                              this.env,
                              s,
                              c,
                              g,
                              function (e, t) {
                                if (!u || !n || void 0 === t)
                                  if (
                                    (e &&
                                      ((e = a._prettifyError(
                                        i.path,
                                        i.env.opts.dev,
                                        e
                                      )),
                                      (u = !0)),
                                    n)
                                  )
                                    r ? E(n, e, t) : n(e, t);
                                  else {
                                    if (e) throw e;
                                    l = t;
                                  }
                              }
                            ),
                            l
                          );
                        }),
                        (n.getExported = function (e, t, n) {
                          'function' == typeof e && ((n = e), (e = {})),
                            'function' == typeof t && ((n = t), (t = null));
                          try {
                            this.compile();
                          } catch (e) {
                            if (n) return n(e);
                            throw e;
                          }
                          var i = t ? t.push() : new b();
                          i.topLevel = !0;
                          var r = new L(e || {}, this.blocks, this.env);
                          this.rootRenderFunc(this.env, r, i, g, function (e) {
                            e ? n(e, null) : n(null, r.getExported());
                          });
                        }),
                        (n.compile = function () {
                          this.compiled || this._compile();
                        }),
                        (n._compile = function () {
                          var e;
                          if (this.tmplProps) e = this.tmplProps;
                          else {
                            var t = c.compile(
                              this.tmplStr,
                              this.env.asyncFilters,
                              this.env.extensionsList,
                              this.path,
                              this.env.opts
                            );
                            e = new Function(t)();
                          }
                          (this.blocks = this._getBlocks(e)),
                            (this.rootRenderFunc = e.root),
                            (this.compiled = !0);
                        }),
                        (n._getBlocks = function (e) {
                          var t = {};
                          return (
                            a.keys(e).forEach(function (n) {
                              'b_' === n.slice(0, 2) && (t[n.slice(2)] = e[n]);
                            }),
                            t
                          );
                        }),
                        t
                      );
                    })(y);
                  e.exports = { Environment: O, Template: T };
                },
                function (e, t, n) {
                  function i(e, t) {
                    return (
                      (i =
                        Object.setPrototypeOf ||
                        function (e, t) {
                          return (e.__proto__ = t), e;
                        }),
                      i(e, t)
                    );
                  }
                  var r = n(9),
                    o = n(3),
                    s = n(1).Obj,
                    a = n(0),
                    c = /*#__PURE__*/ (function (e) {
                      var t, n;
                      function s() {
                        return e.apply(this, arguments) || this;
                      }
                      (n = e),
                        ((t = s).prototype = Object.create(n.prototype)),
                        (t.prototype.constructor = t),
                        i(t, n);
                      var c = s.prototype;
                      return (
                        (c.init = function (e) {
                          (this.tokens = e),
                            (this.peeked = null),
                            (this.breakOnBlocks = null),
                            (this.dropLeadingWhitespace = !1),
                            (this.extensions = []);
                        }),
                        (c.nextToken = function (e) {
                          var t;
                          if (this.peeked) {
                            if (e || this.peeked.type !== r.TOKEN_WHITESPACE)
                              return (t = this.peeked), (this.peeked = null), t;
                            this.peeked = null;
                          }
                          if (((t = this.tokens.nextToken()), !e))
                            for (; t && t.type === r.TOKEN_WHITESPACE; )
                              t = this.tokens.nextToken();
                          return t;
                        }),
                        (c.peekToken = function () {
                          return (
                            (this.peeked = this.peeked || this.nextToken()),
                            this.peeked
                          );
                        }),
                        (c.pushToken = function (e) {
                          if (this.peeked)
                            throw new Error(
                              'pushToken: can only push one token on between reads'
                            );
                          this.peeked = e;
                        }),
                        (c.error = function (e, t, n) {
                          if (void 0 === t || void 0 === n) {
                            var i = this.peekToken() || {};
                            (t = i.lineno), (n = i.colno);
                          }
                          return (
                            void 0 !== t && (t += 1),
                            void 0 !== n && (n += 1),
                            new a.TemplateError(e, t, n)
                          );
                        }),
                        (c.fail = function (e, t, n) {
                          throw this.error(e, t, n);
                        }),
                        (c.skip = function (e) {
                          var t = this.nextToken();
                          return (
                            !(!t || t.type !== e) || (this.pushToken(t), !1)
                          );
                        }),
                        (c.expect = function (e) {
                          var t = this.nextToken();
                          return (
                            t.type !== e &&
                              this.fail(
                                'expected ' + e + ', got ' + t.type,
                                t.lineno,
                                t.colno
                              ),
                            t
                          );
                        }),
                        (c.skipValue = function (e, t) {
                          var n = this.nextToken();
                          return (
                            !(!n || n.type !== e || n.value !== t) ||
                            (this.pushToken(n), !1)
                          );
                        }),
                        (c.skipSymbol = function (e) {
                          return this.skipValue(r.TOKEN_SYMBOL, e);
                        }),
                        (c.advanceAfterBlockEnd = function (e) {
                          var t;
                          return (
                            e ||
                              ((t = this.peekToken()) ||
                                this.fail('unexpected end of file'),
                              t.type !== r.TOKEN_SYMBOL &&
                                this.fail(
                                  'advanceAfterBlockEnd: expected symbol token or explicit name to be passed'
                                ),
                              (e = this.nextToken().value)),
                            (t = this.nextToken()) &&
                            t.type === r.TOKEN_BLOCK_END
                              ? '-' === t.value.charAt(0) &&
                                (this.dropLeadingWhitespace = !0)
                              : this.fail(
                                  'expected block end in ' + e + ' statement'
                                ),
                            t
                          );
                        }),
                        (c.advanceAfterVariableEnd = function () {
                          var e = this.nextToken();
                          e && e.type === r.TOKEN_VARIABLE_END
                            ? (this.dropLeadingWhitespace =
                                '-' ===
                                e.value.charAt(
                                  e.value.length -
                                    this.tokens.tags.VARIABLE_END.length -
                                    1
                                ))
                            : (this.pushToken(e),
                              this.fail('expected variable end'));
                        }),
                        (c.parseFor = function () {
                          var e,
                            t,
                            n = this.peekToken();
                          if (
                            (this.skipSymbol('for')
                              ? ((e = new o.For(n.lineno, n.colno)),
                                (t = 'endfor'))
                              : this.skipSymbol('asyncEach')
                              ? ((e = new o.AsyncEach(n.lineno, n.colno)),
                                (t = 'endeach'))
                              : this.skipSymbol('asyncAll')
                              ? ((e = new o.AsyncAll(n.lineno, n.colno)),
                                (t = 'endall'))
                              : this.fail(
                                  'parseFor: expected for{Async}',
                                  n.lineno,
                                  n.colno
                                ),
                            (e.name = this.parsePrimary()),
                            e.name instanceof o.Symbol ||
                              this.fail(
                                'parseFor: variable name expected for loop'
                              ),
                            this.peekToken().type === r.TOKEN_COMMA)
                          ) {
                            var i = e.name;
                            for (
                              e.name = new o.Array(i.lineno, i.colno),
                                e.name.addChild(i);
                              this.skip(r.TOKEN_COMMA);

                            ) {
                              var s = this.parsePrimary();
                              e.name.addChild(s);
                            }
                          }
                          return (
                            this.skipSymbol('in') ||
                              this.fail(
                                'parseFor: expected "in" keyword for loop',
                                n.lineno,
                                n.colno
                              ),
                            (e.arr = this.parseExpression()),
                            this.advanceAfterBlockEnd(n.value),
                            (e.body = this.parseUntilBlocks(t, 'else')),
                            this.skipSymbol('else') &&
                              (this.advanceAfterBlockEnd('else'),
                              (e.else_ = this.parseUntilBlocks(t))),
                            this.advanceAfterBlockEnd(),
                            e
                          );
                        }),
                        (c.parseMacro = function () {
                          var e = this.peekToken();
                          this.skipSymbol('macro') ||
                            this.fail('expected macro');
                          var t = this.parsePrimary(!0),
                            n = this.parseSignature(),
                            i = new o.Macro(e.lineno, e.colno, t, n);
                          return (
                            this.advanceAfterBlockEnd(e.value),
                            (i.body = this.parseUntilBlocks('endmacro')),
                            this.advanceAfterBlockEnd(),
                            i
                          );
                        }),
                        (c.parseCall = function () {
                          var e = this.peekToken();
                          this.skipSymbol('call') || this.fail('expected call');
                          var t = this.parseSignature(!0) || new o.NodeList(),
                            n = this.parsePrimary();
                          this.advanceAfterBlockEnd(e.value);
                          var i = this.parseUntilBlocks('endcall');
                          this.advanceAfterBlockEnd();
                          var r = new o.Symbol(e.lineno, e.colno, 'caller'),
                            s = new o.Caller(e.lineno, e.colno, r, t, i),
                            a = n.args.children;
                          return (
                            a[a.length - 1] instanceof o.KeywordArgs ||
                              a.push(new o.KeywordArgs()),
                            a[a.length - 1].addChild(
                              new o.Pair(e.lineno, e.colno, r, s)
                            ),
                            new o.Output(e.lineno, e.colno, [n])
                          );
                        }),
                        (c.parseWithContext = function () {
                          var e = this.peekToken(),
                            t = null;
                          return (
                            this.skipSymbol('with')
                              ? (t = !0)
                              : this.skipSymbol('without') && (t = !1),
                            null !== t &&
                              (this.skipSymbol('context') ||
                                this.fail(
                                  'parseFrom: expected context after with/without',
                                  e.lineno,
                                  e.colno
                                )),
                            t
                          );
                        }),
                        (c.parseImport = function () {
                          var e = this.peekToken();
                          this.skipSymbol('import') ||
                            this.fail(
                              'parseImport: expected import',
                              e.lineno,
                              e.colno
                            );
                          var t = this.parseExpression();
                          this.skipSymbol('as') ||
                            this.fail(
                              'parseImport: expected "as" keyword',
                              e.lineno,
                              e.colno
                            );
                          var n = this.parseExpression(),
                            i = this.parseWithContext(),
                            r = new o.Import(e.lineno, e.colno, t, n, i);
                          return this.advanceAfterBlockEnd(e.value), r;
                        }),
                        (c.parseFrom = function () {
                          var e = this.peekToken();
                          this.skipSymbol('from') ||
                            this.fail('parseFrom: expected from');
                          var t = this.parseExpression();
                          this.skipSymbol('import') ||
                            this.fail(
                              'parseFrom: expected import',
                              e.lineno,
                              e.colno
                            );
                          for (var n, i = new o.NodeList(); ; ) {
                            var s = this.peekToken();
                            if (s.type === r.TOKEN_BLOCK_END) {
                              i.children.length ||
                                this.fail(
                                  'parseFrom: Expected at least one import name',
                                  e.lineno,
                                  e.colno
                                ),
                                '-' === s.value.charAt(0) &&
                                  (this.dropLeadingWhitespace = !0),
                                this.nextToken();
                              break;
                            }
                            i.children.length > 0 &&
                              !this.skip(r.TOKEN_COMMA) &&
                              this.fail(
                                'parseFrom: expected comma',
                                e.lineno,
                                e.colno
                              );
                            var a = this.parsePrimary();
                            if (
                              ('_' === a.value.charAt(0) &&
                                this.fail(
                                  'parseFrom: names starting with an underscore cannot be imported',
                                  a.lineno,
                                  a.colno
                                ),
                              this.skipSymbol('as'))
                            ) {
                              var c = this.parsePrimary();
                              i.addChild(new o.Pair(a.lineno, a.colno, a, c));
                            } else i.addChild(a);
                            n = this.parseWithContext();
                          }
                          return new o.FromImport(e.lineno, e.colno, t, i, n);
                        }),
                        (c.parseBlock = function () {
                          var e = this.peekToken();
                          this.skipSymbol('block') ||
                            this.fail(
                              'parseBlock: expected block',
                              e.lineno,
                              e.colno
                            );
                          var t = new o.Block(e.lineno, e.colno);
                          (t.name = this.parsePrimary()),
                            t.name instanceof o.Symbol ||
                              this.fail(
                                'parseBlock: variable name expected',
                                e.lineno,
                                e.colno
                              ),
                            this.advanceAfterBlockEnd(e.value),
                            (t.body = this.parseUntilBlocks('endblock')),
                            this.skipSymbol('endblock'),
                            this.skipSymbol(t.name.value);
                          var n = this.peekToken();
                          return (
                            n ||
                              this.fail(
                                'parseBlock: expected endblock, got end of file'
                              ),
                            this.advanceAfterBlockEnd(n.value),
                            t
                          );
                        }),
                        (c.parseExtends = function () {
                          var e = 'extends',
                            t = this.peekToken();
                          this.skipSymbol(e) ||
                            this.fail('parseTemplateRef: expected ' + e);
                          var n = new o.Extends(t.lineno, t.colno);
                          return (
                            (n.template = this.parseExpression()),
                            this.advanceAfterBlockEnd(t.value),
                            n
                          );
                        }),
                        (c.parseInclude = function () {
                          var e = 'include',
                            t = this.peekToken();
                          this.skipSymbol(e) ||
                            this.fail('parseInclude: expected ' + e);
                          var n = new o.Include(t.lineno, t.colno);
                          return (
                            (n.template = this.parseExpression()),
                            this.skipSymbol('ignore') &&
                              this.skipSymbol('missing') &&
                              (n.ignoreMissing = !0),
                            this.advanceAfterBlockEnd(t.value),
                            n
                          );
                        }),
                        (c.parseIf = function () {
                          var e,
                            t = this.peekToken();
                          this.skipSymbol('if') ||
                          this.skipSymbol('elif') ||
                          this.skipSymbol('elseif')
                            ? (e = new o.If(t.lineno, t.colno))
                            : this.skipSymbol('ifAsync')
                            ? (e = new o.IfAsync(t.lineno, t.colno))
                            : this.fail(
                                'parseIf: expected if, elif, or elseif',
                                t.lineno,
                                t.colno
                              ),
                            (e.cond = this.parseExpression()),
                            this.advanceAfterBlockEnd(t.value),
                            (e.body = this.parseUntilBlocks(
                              'elif',
                              'elseif',
                              'else',
                              'endif'
                            ));
                          var n = this.peekToken();
                          switch (n && n.value) {
                            case 'elseif':
                            case 'elif':
                              e.else_ = this.parseIf();
                              break;
                            case 'else':
                              this.advanceAfterBlockEnd(),
                                (e.else_ = this.parseUntilBlocks('endif')),
                                this.advanceAfterBlockEnd();
                              break;
                            case 'endif':
                              (e.else_ = null), this.advanceAfterBlockEnd();
                              break;
                            default:
                              this.fail(
                                'parseIf: expected elif, else, or endif, got end of file'
                              );
                          }
                          return e;
                        }),
                        (c.parseSet = function () {
                          var e = this.peekToken();
                          this.skipSymbol('set') ||
                            this.fail(
                              'parseSet: expected set',
                              e.lineno,
                              e.colno
                            );
                          for (
                            var t, n = new o.Set(e.lineno, e.colno, []);
                            (t = this.parsePrimary()) &&
                            (n.targets.push(t), this.skip(r.TOKEN_COMMA));

                          );
                          return (
                            this.skipValue(r.TOKEN_OPERATOR, '=')
                              ? ((n.value = this.parseExpression()),
                                this.advanceAfterBlockEnd(e.value))
                              : this.skip(r.TOKEN_BLOCK_END)
                              ? ((n.body = new o.Capture(
                                  e.lineno,
                                  e.colno,
                                  this.parseUntilBlocks('endset')
                                )),
                                (n.value = null),
                                this.advanceAfterBlockEnd())
                              : this.fail(
                                  'parseSet: expected = or block end in set tag',
                                  e.lineno,
                                  e.colno
                                ),
                            n
                          );
                        }),
                        (c.parseSwitch = function () {
                          var e = 'switch',
                            t = 'endswitch',
                            n = 'case',
                            i = 'default',
                            r = this.peekToken();
                          this.skipSymbol(e) ||
                            this.skipSymbol(n) ||
                            this.skipSymbol(i) ||
                            this.fail(
                              'parseSwitch: expected "switch," "case" or "default"',
                              r.lineno,
                              r.colno
                            );
                          var s = this.parseExpression();
                          this.advanceAfterBlockEnd(e),
                            this.parseUntilBlocks(n, i, t);
                          var a,
                            c = this.peekToken(),
                            l = [];
                          do {
                            this.skipSymbol(n);
                            var u = this.parseExpression();
                            this.advanceAfterBlockEnd(e);
                            var h = this.parseUntilBlocks(n, i, t);
                            l.push(new o.Case(c.line, c.col, u, h)),
                              (c = this.peekToken());
                          } while (c && c.value === n);
                          switch (c.value) {
                            case i:
                              this.advanceAfterBlockEnd(),
                                (a = this.parseUntilBlocks(t)),
                                this.advanceAfterBlockEnd();
                              break;
                            case t:
                              this.advanceAfterBlockEnd();
                              break;
                            default:
                              this.fail(
                                'parseSwitch: expected "case," "default" or "endswitch," got EOF.'
                              );
                          }
                          return new o.Switch(r.lineno, r.colno, s, l, a);
                        }),
                        (c.parseStatement = function () {
                          var e = this.peekToken();
                          if (
                            (e.type !== r.TOKEN_SYMBOL &&
                              this.fail('tag name expected', e.lineno, e.colno),
                            this.breakOnBlocks &&
                              -1 !== a.indexOf(this.breakOnBlocks, e.value))
                          )
                            return null;
                          switch (e.value) {
                            case 'raw':
                              return this.parseRaw();
                            case 'verbatim':
                              return this.parseRaw('verbatim');
                            case 'if':
                            case 'ifAsync':
                              return this.parseIf();
                            case 'for':
                            case 'asyncEach':
                            case 'asyncAll':
                              return this.parseFor();
                            case 'block':
                              return this.parseBlock();
                            case 'extends':
                              return this.parseExtends();
                            case 'include':
                              return this.parseInclude();
                            case 'set':
                              return this.parseSet();
                            case 'macro':
                              return this.parseMacro();
                            case 'call':
                              return this.parseCall();
                            case 'import':
                              return this.parseImport();
                            case 'from':
                              return this.parseFrom();
                            case 'filter':
                              return this.parseFilterStatement();
                            case 'switch':
                              return this.parseSwitch();
                            default:
                              if (this.extensions.length)
                                for (
                                  var t = 0;
                                  t < this.extensions.length;
                                  t++
                                ) {
                                  var n = this.extensions[t];
                                  if (-1 !== a.indexOf(n.tags || [], e.value))
                                    return n.parse(this, o, r);
                                }
                              this.fail(
                                'unknown block tag: ' + e.value,
                                e.lineno,
                                e.colno
                              );
                          }
                        }),
                        (c.parseRaw = function (e) {
                          for (
                            var t = 'end' + (e = e || 'raw'),
                              n = new RegExp(
                                '([\\s\\S]*?){%\\s*(' +
                                  e +
                                  '|' +
                                  t +
                                  ')\\s*(?=%})%}'
                              ),
                              i = 1,
                              r = '',
                              s = null,
                              a = this.advanceAfterBlockEnd();
                            (s = this.tokens._extractRegex(n)) && i > 0;

                          ) {
                            var c = s[0],
                              l = s[1],
                              u = s[2];
                            u === e ? (i += 1) : u === t && (i -= 1),
                              0 === i
                                ? ((r += l),
                                  this.tokens.backN(c.length - l.length))
                                : (r += c);
                          }
                          return new o.Output(a.lineno, a.colno, [
                            new o.TemplateData(a.lineno, a.colno, r),
                          ]);
                        }),
                        (c.parsePostfix = function (e) {
                          for (var t, n = this.peekToken(); n; ) {
                            if (n.type === r.TOKEN_LEFT_PAREN)
                              e = new o.FunCall(
                                n.lineno,
                                n.colno,
                                e,
                                this.parseSignature()
                              );
                            else if (n.type === r.TOKEN_LEFT_BRACKET)
                              (t = this.parseAggregate()).children.length > 1 &&
                                this.fail('invalid index'),
                                (e = new o.LookupVal(
                                  n.lineno,
                                  n.colno,
                                  e,
                                  t.children[0]
                                ));
                            else {
                              if (
                                n.type !== r.TOKEN_OPERATOR ||
                                '.' !== n.value
                              )
                                break;
                              this.nextToken();
                              var i = this.nextToken();
                              i.type !== r.TOKEN_SYMBOL &&
                                this.fail(
                                  'expected name as lookup value, got ' +
                                    i.value,
                                  i.lineno,
                                  i.colno
                                ),
                                (t = new o.Literal(i.lineno, i.colno, i.value)),
                                (e = new o.LookupVal(n.lineno, n.colno, e, t));
                            }
                            n = this.peekToken();
                          }
                          return e;
                        }),
                        (c.parseExpression = function () {
                          return this.parseInlineIf();
                        }),
                        (c.parseInlineIf = function () {
                          var e = this.parseOr();
                          if (this.skipSymbol('if')) {
                            var t = this.parseOr(),
                              n = e;
                            ((e = new o.InlineIf(e.lineno, e.colno)).body = n),
                              (e.cond = t),
                              (e.else_ = this.skipSymbol('else')
                                ? this.parseOr()
                                : null);
                          }
                          return e;
                        }),
                        (c.parseOr = function () {
                          for (
                            var e = this.parseAnd();
                            this.skipSymbol('or');

                          ) {
                            var t = this.parseAnd();
                            e = new o.Or(e.lineno, e.colno, e, t);
                          }
                          return e;
                        }),
                        (c.parseAnd = function () {
                          for (
                            var e = this.parseNot();
                            this.skipSymbol('and');

                          ) {
                            var t = this.parseNot();
                            e = new o.And(e.lineno, e.colno, e, t);
                          }
                          return e;
                        }),
                        (c.parseNot = function () {
                          var e = this.peekToken();
                          return this.skipSymbol('not')
                            ? new o.Not(e.lineno, e.colno, this.parseNot())
                            : this.parseIn();
                        }),
                        (c.parseIn = function () {
                          for (var e = this.parseIs(); ; ) {
                            var t = this.nextToken();
                            if (!t) break;
                            var n =
                              t.type === r.TOKEN_SYMBOL && 'not' === t.value;
                            if (
                              (n || this.pushToken(t), !this.skipSymbol('in'))
                            ) {
                              n && this.pushToken(t);
                              break;
                            }
                            var i = this.parseIs();
                            (e = new o.In(e.lineno, e.colno, e, i)),
                              n && (e = new o.Not(e.lineno, e.colno, e));
                          }
                          return e;
                        }),
                        (c.parseIs = function () {
                          var e = this.parseCompare();
                          if (this.skipSymbol('is')) {
                            var t = this.skipSymbol('not'),
                              n = this.parseCompare();
                            (e = new o.Is(e.lineno, e.colno, e, n)),
                              t && (e = new o.Not(e.lineno, e.colno, e));
                          }
                          return e;
                        }),
                        (c.parseCompare = function () {
                          for (
                            var e = [
                                '==',
                                '===',
                                '!=',
                                '!==',
                                '<',
                                '>',
                                '<=',
                                '>=',
                              ],
                              t = this.parseConcat(),
                              n = [];
                            ;

                          ) {
                            var i = this.nextToken();
                            if (!i) break;
                            if (-1 === e.indexOf(i.value)) {
                              this.pushToken(i);
                              break;
                            }
                            n.push(
                              new o.CompareOperand(
                                i.lineno,
                                i.colno,
                                this.parseConcat(),
                                i.value
                              )
                            );
                          }
                          return n.length
                            ? new o.Compare(n[0].lineno, n[0].colno, t, n)
                            : t;
                        }),
                        (c.parseConcat = function () {
                          for (
                            var e = this.parseAdd();
                            this.skipValue(r.TOKEN_TILDE, '~');

                          ) {
                            var t = this.parseAdd();
                            e = new o.Concat(e.lineno, e.colno, e, t);
                          }
                          return e;
                        }),
                        (c.parseAdd = function () {
                          for (
                            var e = this.parseSub();
                            this.skipValue(r.TOKEN_OPERATOR, '+');

                          ) {
                            var t = this.parseSub();
                            e = new o.Add(e.lineno, e.colno, e, t);
                          }
                          return e;
                        }),
                        (c.parseSub = function () {
                          for (
                            var e = this.parseMul();
                            this.skipValue(r.TOKEN_OPERATOR, '-');

                          ) {
                            var t = this.parseMul();
                            e = new o.Sub(e.lineno, e.colno, e, t);
                          }
                          return e;
                        }),
                        (c.parseMul = function () {
                          for (
                            var e = this.parseDiv();
                            this.skipValue(r.TOKEN_OPERATOR, '*');

                          ) {
                            var t = this.parseDiv();
                            e = new o.Mul(e.lineno, e.colno, e, t);
                          }
                          return e;
                        }),
                        (c.parseDiv = function () {
                          for (
                            var e = this.parseFloorDiv();
                            this.skipValue(r.TOKEN_OPERATOR, '/');

                          ) {
                            var t = this.parseFloorDiv();
                            e = new o.Div(e.lineno, e.colno, e, t);
                          }
                          return e;
                        }),
                        (c.parseFloorDiv = function () {
                          for (
                            var e = this.parseMod();
                            this.skipValue(r.TOKEN_OPERATOR, '//');

                          ) {
                            var t = this.parseMod();
                            e = new o.FloorDiv(e.lineno, e.colno, e, t);
                          }
                          return e;
                        }),
                        (c.parseMod = function () {
                          for (
                            var e = this.parsePow();
                            this.skipValue(r.TOKEN_OPERATOR, '%');

                          ) {
                            var t = this.parsePow();
                            e = new o.Mod(e.lineno, e.colno, e, t);
                          }
                          return e;
                        }),
                        (c.parsePow = function () {
                          for (
                            var e = this.parseUnary();
                            this.skipValue(r.TOKEN_OPERATOR, '**');

                          ) {
                            var t = this.parseUnary();
                            e = new o.Pow(e.lineno, e.colno, e, t);
                          }
                          return e;
                        }),
                        (c.parseUnary = function (e) {
                          var t,
                            n = this.peekToken();
                          return (
                            (t = this.skipValue(r.TOKEN_OPERATOR, '-')
                              ? new o.Neg(
                                  n.lineno,
                                  n.colno,
                                  this.parseUnary(!0)
                                )
                              : this.skipValue(r.TOKEN_OPERATOR, '+')
                              ? new o.Pos(
                                  n.lineno,
                                  n.colno,
                                  this.parseUnary(!0)
                                )
                              : this.parsePrimary()),
                            e || (t = this.parseFilter(t)),
                            t
                          );
                        }),
                        (c.parsePrimary = function (e) {
                          var t,
                            n = this.nextToken(),
                            i = null;
                          if (
                            (n
                              ? n.type === r.TOKEN_STRING
                                ? (t = n.value)
                                : n.type === r.TOKEN_INT
                                ? (t = parseInt(n.value, 10))
                                : n.type === r.TOKEN_FLOAT
                                ? (t = parseFloat(n.value))
                                : n.type === r.TOKEN_BOOLEAN
                                ? 'true' === n.value
                                  ? (t = !0)
                                  : 'false' === n.value
                                  ? (t = !1)
                                  : this.fail(
                                      'invalid boolean: ' + n.value,
                                      n.lineno,
                                      n.colno
                                    )
                                : n.type === r.TOKEN_NONE
                                ? (t = null)
                                : n.type === r.TOKEN_REGEX &&
                                  (t = new RegExp(n.value.body, n.value.flags))
                              : this.fail(
                                  'expected expression, got end of file'
                                ),
                            void 0 !== t
                              ? (i = new o.Literal(n.lineno, n.colno, t))
                              : n.type === r.TOKEN_SYMBOL
                              ? (i = new o.Symbol(n.lineno, n.colno, n.value))
                              : (this.pushToken(n),
                                (i = this.parseAggregate())),
                            e || (i = this.parsePostfix(i)),
                            i)
                          )
                            return i;
                          throw this.error(
                            'unexpected token: ' + n.value,
                            n.lineno,
                            n.colno
                          );
                        }),
                        (c.parseFilterName = function () {
                          for (
                            var e = this.expect(r.TOKEN_SYMBOL), t = e.value;
                            this.skipValue(r.TOKEN_OPERATOR, '.');

                          )
                            t += '.' + this.expect(r.TOKEN_SYMBOL).value;
                          return new o.Symbol(e.lineno, e.colno, t);
                        }),
                        (c.parseFilterArgs = function (e) {
                          return this.peekToken().type === r.TOKEN_LEFT_PAREN
                            ? this.parsePostfix(e).args.children
                            : [];
                        }),
                        (c.parseFilter = function (e) {
                          for (; this.skip(r.TOKEN_PIPE); ) {
                            var t = this.parseFilterName();
                            e = new o.Filter(
                              t.lineno,
                              t.colno,
                              t,
                              new o.NodeList(
                                t.lineno,
                                t.colno,
                                [e].concat(this.parseFilterArgs(e))
                              )
                            );
                          }
                          return e;
                        }),
                        (c.parseFilterStatement = function () {
                          var e = this.peekToken();
                          this.skipSymbol('filter') ||
                            this.fail('parseFilterStatement: expected filter');
                          var t = this.parseFilterName(),
                            n = this.parseFilterArgs(t);
                          this.advanceAfterBlockEnd(e.value);
                          var i = new o.Capture(
                            t.lineno,
                            t.colno,
                            this.parseUntilBlocks('endfilter')
                          );
                          this.advanceAfterBlockEnd();
                          var r = new o.Filter(
                            t.lineno,
                            t.colno,
                            t,
                            new o.NodeList(t.lineno, t.colno, [i].concat(n))
                          );
                          return new o.Output(t.lineno, t.colno, [r]);
                        }),
                        (c.parseAggregate = function () {
                          var e,
                            t = this.nextToken();
                          switch (t.type) {
                            case r.TOKEN_LEFT_PAREN:
                              e = new o.Group(t.lineno, t.colno);
                              break;
                            case r.TOKEN_LEFT_BRACKET:
                              e = new o.Array(t.lineno, t.colno);
                              break;
                            case r.TOKEN_LEFT_CURLY:
                              e = new o.Dict(t.lineno, t.colno);
                              break;
                            default:
                              return null;
                          }
                          for (;;) {
                            var n = this.peekToken().type;
                            if (
                              n === r.TOKEN_RIGHT_PAREN ||
                              n === r.TOKEN_RIGHT_BRACKET ||
                              n === r.TOKEN_RIGHT_CURLY
                            ) {
                              this.nextToken();
                              break;
                            }
                            if (
                              (e.children.length > 0 &&
                                (this.skip(r.TOKEN_COMMA) ||
                                  this.fail(
                                    'parseAggregate: expected comma after expression',
                                    t.lineno,
                                    t.colno
                                  )),
                              e instanceof o.Dict)
                            ) {
                              var i = this.parsePrimary();
                              this.skip(r.TOKEN_COLON) ||
                                this.fail(
                                  'parseAggregate: expected colon after dict key',
                                  t.lineno,
                                  t.colno
                                );
                              var s = this.parseExpression();
                              e.addChild(new o.Pair(i.lineno, i.colno, i, s));
                            } else {
                              var a = this.parseExpression();
                              e.addChild(a);
                            }
                          }
                          return e;
                        }),
                        (c.parseSignature = function (e, t) {
                          var n = this.peekToken();
                          if (!t && n.type !== r.TOKEN_LEFT_PAREN) {
                            if (e) return null;
                            this.fail('expected arguments', n.lineno, n.colno);
                          }
                          n.type === r.TOKEN_LEFT_PAREN &&
                            (n = this.nextToken());
                          for (
                            var i = new o.NodeList(n.lineno, n.colno),
                              s = new o.KeywordArgs(n.lineno, n.colno),
                              a = !1;
                            ;

                          ) {
                            if (
                              ((n = this.peekToken()),
                              !t && n.type === r.TOKEN_RIGHT_PAREN)
                            ) {
                              this.nextToken();
                              break;
                            }
                            if (t && n.type === r.TOKEN_BLOCK_END) break;
                            if (a && !this.skip(r.TOKEN_COMMA))
                              this.fail(
                                'parseSignature: expected comma after expression',
                                n.lineno,
                                n.colno
                              );
                            else {
                              var c = this.parseExpression();
                              this.skipValue(r.TOKEN_OPERATOR, '=')
                                ? s.addChild(
                                    new o.Pair(
                                      c.lineno,
                                      c.colno,
                                      c,
                                      this.parseExpression()
                                    )
                                  )
                                : i.addChild(c);
                            }
                            a = !0;
                          }
                          return s.children.length && i.addChild(s), i;
                        }),
                        (c.parseUntilBlocks = function () {
                          for (
                            var e = this.breakOnBlocks,
                              t = arguments.length,
                              n = new Array(t),
                              i = 0;
                            i < t;
                            i++
                          )
                            n[i] = arguments[i];
                          this.breakOnBlocks = n;
                          var r = this.parse();
                          return (this.breakOnBlocks = e), r;
                        }),
                        (c.parseNodes = function () {
                          for (var e, t = []; (e = this.nextToken()); )
                            if (e.type === r.TOKEN_DATA) {
                              var n = e.value,
                                i = this.peekToken(),
                                s = i && i.value;
                              this.dropLeadingWhitespace &&
                                ((n = n.replace(/^\s*/, '')),
                                (this.dropLeadingWhitespace = !1)),
                                i &&
                                  ((i.type === r.TOKEN_BLOCK_START &&
                                    '-' === s.charAt(s.length - 1)) ||
                                    (i.type === r.TOKEN_VARIABLE_START &&
                                      '-' ===
                                        s.charAt(
                                          this.tokens.tags.VARIABLE_START.length
                                        )) ||
                                    (i.type === r.TOKEN_COMMENT &&
                                      '-' ===
                                        s.charAt(
                                          this.tokens.tags.COMMENT_START.length
                                        ))) &&
                                  (n = n.replace(/\s*$/, '')),
                                t.push(
                                  new o.Output(e.lineno, e.colno, [
                                    new o.TemplateData(e.lineno, e.colno, n),
                                  ])
                                );
                            } else if (e.type === r.TOKEN_BLOCK_START) {
                              this.dropLeadingWhitespace = !1;
                              var a = this.parseStatement();
                              if (!a) break;
                              t.push(a);
                            } else if (e.type === r.TOKEN_VARIABLE_START) {
                              var c = this.parseExpression();
                              (this.dropLeadingWhitespace = !1),
                                this.advanceAfterVariableEnd(),
                                t.push(new o.Output(e.lineno, e.colno, [c]));
                            } else
                              e.type === r.TOKEN_COMMENT
                                ? (this.dropLeadingWhitespace =
                                    '-' ===
                                    e.value.charAt(
                                      e.value.length -
                                        this.tokens.tags.COMMENT_END.length -
                                        1
                                    ))
                                : this.fail(
                                    'Unexpected token at top-level: ' + e.type,
                                    e.lineno,
                                    e.colno
                                  );
                          return t;
                        }),
                        (c.parse = function () {
                          return new o.NodeList(0, 0, this.parseNodes());
                        }),
                        (c.parseAsRoot = function () {
                          return new o.Root(0, 0, this.parseNodes());
                        }),
                        s
                      );
                    })(s);
                  e.exports = {
                    parse: function (e, t, n) {
                      var i = new c(r.lex(e, n));
                      return (
                        void 0 !== t && (i.extensions = t), i.parseAsRoot()
                      );
                    },
                    Parser: c,
                  };
                },
                function (e, t, n) {
                  var i = n(0),
                    r = ' \n\t\r ',
                    o = '()[]{}%*-+~/#,:|.<>=!',
                    s = 'string',
                    a = 'whitespace',
                    c = 'data',
                    l = 'block-start',
                    u = 'block-end',
                    h = 'variable-start',
                    f = 'variable-end',
                    p = 'comment',
                    d = 'left-paren',
                    m = 'right-paren',
                    v = 'left-bracket',
                    y = 'right-bracket',
                    _ = 'left-curly',
                    g = 'right-curly',
                    k = 'operator',
                    b = 'comma',
                    w = 'colon',
                    E = 'tilde',
                    x = 'pipe',
                    O = 'float',
                    L = 'boolean',
                    T = 'none',
                    S = 'symbol',
                    A = 'regex';
                  function N(e, t, n, i) {
                    return { type: e, value: t, lineno: n, colno: i };
                  }
                  var C = /*#__PURE__*/ (function () {
                    function e(e, t) {
                      (this.str = e),
                        (this.index = 0),
                        (this.len = e.length),
                        (this.lineno = 0),
                        (this.colno = 0),
                        (this.in_code = !1);
                      var n = (t = t || {}).tags || {};
                      (this.tags = {
                        BLOCK_START: n.blockStart || '{%',
                        BLOCK_END: n.blockEnd || '%}',
                        VARIABLE_START: n.variableStart || '{{',
                        VARIABLE_END: n.variableEnd || '}}',
                        COMMENT_START: n.commentStart || '{#',
                        COMMENT_END: n.commentEnd || '#}',
                      }),
                        (this.trimBlocks = !!t.trimBlocks),
                        (this.lstripBlocks = !!t.lstripBlocks);
                    }
                    var t = e.prototype;
                    return (
                      (t.nextToken = function () {
                        var e,
                          t = this.lineno,
                          n = this.colno;
                        if (this.in_code) {
                          var C = this.current();
                          if (this.isFinished()) return null;
                          if ('"' === C || "'" === C)
                            return N(s, this._parseString(C), t, n);
                          if ((e = this._extract(r))) return N(a, e, t, n);
                          if (
                            (e = this._extractString(this.tags.BLOCK_END)) ||
                            (e = this._extractString('-' + this.tags.BLOCK_END))
                          )
                            return (
                              (this.in_code = !1),
                              this.trimBlocks &&
                                ('\n' === (C = this.current())
                                  ? this.forward()
                                  : '\r' === C &&
                                    (this.forward(),
                                    '\n' === (C = this.current())
                                      ? this.forward()
                                      : this.back())),
                              N(u, e, t, n)
                            );
                          if (
                            (e = this._extractString(this.tags.VARIABLE_END)) ||
                            (e = this._extractString(
                              '-' + this.tags.VARIABLE_END
                            ))
                          )
                            return (this.in_code = !1), N(f, e, t, n);
                          if (
                            'r' === C &&
                            '/' === this.str.charAt(this.index + 1)
                          ) {
                            this.forwardN(2);
                            for (var R = ''; !this.isFinished(); ) {
                              if (
                                '/' === this.current() &&
                                '\\' !== this.previous()
                              ) {
                                this.forward();
                                break;
                              }
                              (R += this.current()), this.forward();
                            }
                            for (
                              var j = ['g', 'i', 'm', 'y'], F = '';
                              !this.isFinished() &&
                              -1 !== j.indexOf(this.current());

                            )
                              (F += this.current()), this.forward();
                            return N(A, { body: R, flags: F }, t, n);
                          }
                          if (-1 !== o.indexOf(C)) {
                            this.forward();
                            var B,
                              I = [
                                '==',
                                '===',
                                '!=',
                                '!==',
                                '<=',
                                '>=',
                                '//',
                                '**',
                              ],
                              P = C + this.current();
                            switch (
                              (-1 !== i.indexOf(I, P) &&
                                (this.forward(),
                                (C = P),
                                -1 !== i.indexOf(I, P + this.current()) &&
                                  ((C = P + this.current()), this.forward())),
                              C)
                            ) {
                              case '(':
                                B = d;
                                break;
                              case ')':
                                B = m;
                                break;
                              case '[':
                                B = v;
                                break;
                              case ']':
                                B = y;
                                break;
                              case '{':
                                B = _;
                                break;
                              case '}':
                                B = g;
                                break;
                              case ',':
                                B = b;
                                break;
                              case ':':
                                B = w;
                                break;
                              case '~':
                                B = E;
                                break;
                              case '|':
                                B = x;
                                break;
                              default:
                                B = k;
                            }
                            return N(B, C, t, n);
                          }
                          if (
                            (e = this._extractUntil(r + o)).match(
                              /^[-+]?[0-9]+$/
                            )
                          ) {
                            if ('.' === this.current()) {
                              this.forward();
                              var M = this._extract('0123456789');
                              return N(O, e + '.' + M, t, n);
                            }
                            return N('int', e, t, n);
                          }
                          if (e.match(/^(true|false)$/)) return N(L, e, t, n);
                          if ('none' === e) return N(T, e, t, n);
                          if ('null' === e) return N(T, e, t, n);
                          if (e) return N(S, e, t, n);
                          throw new Error(
                            'Unexpected value while parsing: ' + e
                          );
                        }
                        var K,
                          D =
                            this.tags.BLOCK_START.charAt(0) +
                            this.tags.VARIABLE_START.charAt(0) +
                            this.tags.COMMENT_START.charAt(0) +
                            this.tags.COMMENT_END.charAt(0);
                        if (this.isFinished()) return null;
                        if (
                          (e = this._extractString(
                            this.tags.BLOCK_START + '-'
                          )) ||
                          (e = this._extractString(this.tags.BLOCK_START))
                        )
                          return (this.in_code = !0), N(l, e, t, n);
                        if (
                          (e = this._extractString(
                            this.tags.VARIABLE_START + '-'
                          )) ||
                          (e = this._extractString(this.tags.VARIABLE_START))
                        )
                          return (this.in_code = !0), N(h, e, t, n);
                        e = '';
                        var U = !1;
                        for (
                          this._matches(this.tags.COMMENT_START) &&
                          ((U = !0),
                          (e = this._extractString(this.tags.COMMENT_START)));
                          null !== (K = this._extractUntil(D));

                        ) {
                          if (
                            ((e += K),
                            (this._matches(this.tags.BLOCK_START) ||
                              this._matches(this.tags.VARIABLE_START) ||
                              this._matches(this.tags.COMMENT_START)) &&
                              !U)
                          ) {
                            if (
                              this.lstripBlocks &&
                              this._matches(this.tags.BLOCK_START) &&
                              this.colno > 0 &&
                              this.colno <= e.length
                            ) {
                              var V = e.slice(-this.colno);
                              if (
                                /^\s+$/.test(V) &&
                                !(e = e.slice(0, -this.colno)).length
                              )
                                return this.nextToken();
                            }
                            break;
                          }
                          if (this._matches(this.tags.COMMENT_END)) {
                            if (!U)
                              throw new Error('unexpected end of comment');
                            e += this._extractString(this.tags.COMMENT_END);
                            break;
                          }
                          (e += this.current()), this.forward();
                        }
                        if (null === K && U)
                          throw new Error(
                            'expected end of comment, got end of file'
                          );
                        return N(U ? p : c, e, t, n);
                      }),
                      (t._parseString = function (e) {
                        this.forward();
                        for (
                          var t = '';
                          !this.isFinished() && this.current() !== e;

                        ) {
                          var n = this.current();
                          if ('\\' === n) {
                            switch ((this.forward(), this.current())) {
                              case 'n':
                                t += '\n';
                                break;
                              case 't':
                                t += '\t';
                                break;
                              case 'r':
                                t += '\r';
                                break;
                              default:
                                t += this.current();
                            }
                            this.forward();
                          } else (t += n), this.forward();
                        }
                        return this.forward(), t;
                      }),
                      (t._matches = function (e) {
                        return this.index + e.length > this.len
                          ? null
                          : this.str.slice(
                              this.index,
                              this.index + e.length
                            ) === e;
                      }),
                      (t._extractString = function (e) {
                        return this._matches(e)
                          ? (this.forwardN(e.length), e)
                          : null;
                      }),
                      (t._extractUntil = function (e) {
                        return this._extractMatching(!0, e || '');
                      }),
                      (t._extract = function (e) {
                        return this._extractMatching(!1, e);
                      }),
                      (t._extractMatching = function (e, t) {
                        if (this.isFinished()) return null;
                        var n = t.indexOf(this.current());
                        if ((e && -1 === n) || (!e && -1 !== n)) {
                          var i = this.current();
                          this.forward();
                          for (
                            var r = t.indexOf(this.current());
                            ((e && -1 === r) || (!e && -1 !== r)) &&
                            !this.isFinished();

                          )
                            (i += this.current()),
                              this.forward(),
                              (r = t.indexOf(this.current()));
                          return i;
                        }
                        return '';
                      }),
                      (t._extractRegex = function (e) {
                        var t = this.currentStr().match(e);
                        return t ? (this.forwardN(t[0].length), t) : null;
                      }),
                      (t.isFinished = function () {
                        return this.index >= this.len;
                      }),
                      (t.forwardN = function (e) {
                        for (var t = 0; t < e; t++) this.forward();
                      }),
                      (t.forward = function () {
                        this.index++,
                          '\n' === this.previous()
                            ? (this.lineno++, (this.colno = 0))
                            : this.colno++;
                      }),
                      (t.backN = function (e) {
                        for (var t = 0; t < e; t++) this.back();
                      }),
                      (t.back = function () {
                        if ((this.index--, '\n' === this.current())) {
                          this.lineno--;
                          var e = this.src.lastIndexOf('\n', this.index - 1);
                          this.colno = -1 === e ? this.index : this.index - e;
                        } else this.colno--;
                      }),
                      (t.current = function () {
                        return this.isFinished()
                          ? ''
                          : this.str.charAt(this.index);
                      }),
                      (t.currentStr = function () {
                        return this.isFinished()
                          ? ''
                          : this.str.substr(this.index);
                      }),
                      (t.previous = function () {
                        return this.str.charAt(this.index - 1);
                      }),
                      e
                    );
                  })();
                  e.exports = {
                    lex: function (e, t) {
                      return new C(e, t);
                    },
                    TOKEN_STRING: s,
                    TOKEN_WHITESPACE: a,
                    TOKEN_DATA: c,
                    TOKEN_BLOCK_START: l,
                    TOKEN_BLOCK_END: u,
                    TOKEN_VARIABLE_START: h,
                    TOKEN_VARIABLE_END: f,
                    TOKEN_COMMENT: p,
                    TOKEN_LEFT_PAREN: d,
                    TOKEN_RIGHT_PAREN: m,
                    TOKEN_LEFT_BRACKET: v,
                    TOKEN_RIGHT_BRACKET: y,
                    TOKEN_LEFT_CURLY: _,
                    TOKEN_RIGHT_CURLY: g,
                    TOKEN_OPERATOR: k,
                    TOKEN_COMMA: b,
                    TOKEN_COLON: w,
                    TOKEN_TILDE: E,
                    TOKEN_PIPE: x,
                    TOKEN_INT: 'int',
                    TOKEN_FLOAT: O,
                    TOKEN_BOOLEAN: L,
                    TOKEN_NONE: T,
                    TOKEN_SYMBOL: S,
                    TOKEN_SPECIAL: 'special',
                    TOKEN_REGEX: A,
                  };
                },
                function (e, t, n) {
                  function i(e, t) {
                    return (
                      (i =
                        Object.setPrototypeOf ||
                        function (e, t) {
                          return (e.__proto__ = t), e;
                        }),
                      i(e, t)
                    );
                  }
                  var r = n(6),
                    o = n(19).PrecompiledLoader;
                  e.exports = {
                    WebLoader: /*#__PURE__*/ (function (e) {
                      var t, n;
                      function r(t, n) {
                        var i;
                        return (
                          ((i = e.call(this) || this).baseURL = t || '.'),
                          (i.useCache = !!(n = n || {}).useCache),
                          (i.async = !!n.async),
                          i
                        );
                      }
                      (n = e),
                        ((t = r).prototype = Object.create(n.prototype)),
                        (t.prototype.constructor = t),
                        i(t, n);
                      var o = r.prototype;
                      return (
                        (o.resolve = function (e, t) {
                          throw new Error(
                            'relative templates not support in the browser yet'
                          );
                        }),
                        (o.getSource = function (e, t) {
                          var n,
                            i = this,
                            r = this.useCache;
                          return (
                            this.fetch(this.baseURL + '/' + e, function (o, s) {
                              if (o)
                                if (t) t(o.content);
                                else {
                                  if (404 !== o.status) throw o.content;
                                  n = null;
                                }
                              else
                                i.emit(
                                  'load',
                                  e,
                                  (n = { src: s, path: e, noCache: !r })
                                ),
                                  t && t(null, n);
                            }),
                            n
                          );
                        }),
                        (o.fetch = function (e, t) {
                          if ('undefined' == typeof window)
                            throw new Error(
                              'WebLoader can only by used in a browser'
                            );
                          var n = new XMLHttpRequest(),
                            i = !0;
                          (n.onreadystatechange = function () {
                            4 === n.readyState &&
                              i &&
                              ((i = !1),
                              0 === n.status || 200 === n.status
                                ? t(null, n.responseText)
                                : t({
                                    status: n.status,
                                    content: n.responseText,
                                  }));
                          }),
                            (e +=
                              (-1 === e.indexOf('?') ? '?' : '&') +
                              's=' +
                              new Date().getTime()),
                            n.open('GET', e, this.async),
                            n.send();
                        }),
                        r
                      );
                    })(r),
                    PrecompiledLoader: o,
                  };
                },
                function (e, t, n) {
                  var i,
                    r = n(0),
                    o = n(7),
                    s = o.Environment,
                    a = o.Template,
                    c = n(6),
                    l = n(10),
                    u = n(23),
                    h = n(5),
                    f = n(8),
                    p = n(9),
                    d = n(2),
                    m = n(3),
                    v = n(25);
                  function y(e, t) {
                    var n;
                    return (
                      (t = t || {}),
                      r.isObject(e) && ((t = e), (e = null)),
                      l.FileSystemLoader
                        ? (n = new l.FileSystemLoader(e, {
                            watch: t.watch,
                            noCache: t.noCache,
                          }))
                        : l.WebLoader &&
                          (n = new l.WebLoader(e, {
                            useCache: t.web && t.web.useCache,
                            async: t.web && t.web.async,
                          })),
                      (i = new s(n, t)),
                      t && t.express && i.express(t.express),
                      i
                    );
                  }
                  e.exports = {
                    Environment: s,
                    Template: a,
                    Loader: c,
                    FileSystemLoader: l.FileSystemLoader,
                    NodeResolveLoader: l.NodeResolveLoader,
                    PrecompiledLoader: l.PrecompiledLoader,
                    WebLoader: l.WebLoader,
                    compiler: h,
                    parser: f,
                    lexer: p,
                    runtime: d,
                    lib: r,
                    nodes: m,
                    installJinjaCompat: v,
                    configure: y,
                    reset: function () {
                      i = void 0;
                    },
                    compile: function (e, t, n, r) {
                      return i || y(), new a(e, t, n, r);
                    },
                    render: function (e, t, n) {
                      return i || y(), i.render(e, t, n);
                    },
                    renderString: function (e, t, n) {
                      return i || y(), i.renderString(e, t, n);
                    },
                    precompile: u ? u.precompile : void 0,
                    precompileString: u ? u.precompileString : void 0,
                  };
                },
                function (e, t, n) {
                  var i = n(13),
                    r = [],
                    o = [],
                    s = i.makeRequestCallFromTimer(function () {
                      if (o.length) throw o.shift();
                    });
                  function a(e) {
                    var t;
                    ((t = r.length ? r.pop() : new c()).task = e), i(t);
                  }
                  function c() {
                    this.task = null;
                  }
                  (e.exports = a),
                    (c.prototype.call = function () {
                      try {
                        this.task.call();
                      } catch (e) {
                        a.onerror ? a.onerror(e) : (o.push(e), s());
                      } finally {
                        (this.task = null), (r[r.length] = this);
                      }
                    });
                },
                function (e, t, n) {
                  (function (t) {
                    function n(e) {
                      r.length || i(), (r[r.length] = e);
                    }
                    e.exports = n;
                    var i,
                      r = [],
                      o = 0;
                    function s() {
                      for (; o < r.length; ) {
                        var e = o;
                        if (((o += 1), r[e].call(), o > 1024)) {
                          for (var t = 0, n = r.length - o; t < n; t++)
                            r[t] = r[t + o];
                          (r.length -= o), (o = 0);
                        }
                      }
                      (r.length = 0), (o = 0);
                    }
                    var a,
                      c,
                      l,
                      u = void 0 !== t ? t : self,
                      h = u.MutationObserver || u.WebKitMutationObserver;
                    function f(e) {
                      return function () {
                        var t = setTimeout(i, 0),
                          n = setInterval(i, 50);
                        function i() {
                          clearTimeout(t), clearInterval(n), e();
                        }
                      };
                    }
                    'function' == typeof h
                      ? ((a = 1),
                        (c = new h(s)),
                        (l = document.createTextNode('')),
                        c.observe(l, { characterData: !0 }),
                        (i = function () {
                          l.data = a = -a;
                        }))
                      : (i = f(s)),
                      (n.requestFlush = i),
                      (n.makeRequestCallFromTimer = f);
                  }.call(t, n(14)));
                },
                function (e, t) {
                  var n;
                  n = (function () {
                    return this;
                  })();
                  try {
                    n = n || Function('return this')() || (0, eval)('this');
                  } catch (e) {
                    'object' == typeof window && (n = window);
                  }
                  e.exports = n;
                },
                function (e, t, n) {
                  var i, r, o, s, a;
                  (r = function () {
                    var e = Array.prototype.slice.call(arguments);
                    'function' == typeof e[0] && e[0].apply(null, e.splice(1));
                  }),
                    (o = function (e) {
                      'function' == typeof setImmediate
                        ? setImmediate(e)
                        : 'undefined' != typeof process && process.nextTick
                        ? process.nextTick(e)
                        : setTimeout(e, 0);
                    }),
                    (s =
                      Array.isArray ||
                      function (e) {
                        return (
                          '[object Array]' === Object.prototype.toString.call(e)
                        );
                      }),
                    (a = function (e, t, n) {
                      var i = n ? o : r;
                      if (((t = t || function () {}), !s(e))) {
                        var a = new Error(
                          'First argument to waterfall must be an array of functions'
                        );
                        return t(a);
                      }
                      if (!e.length) return t();
                      var c = function (e) {
                        return function (n) {
                          if (n) t.apply(null, arguments), (t = function () {});
                          else {
                            var r = Array.prototype.slice.call(arguments, 1),
                              o = e.next();
                            r.push(o ? c(o) : t),
                              i(function () {
                                e.apply(null, r);
                              });
                          }
                        };
                      };
                      c(
                        (function (e) {
                          var t = function (n) {
                            var i = function () {
                              return (
                                e.length && e[n].apply(null, arguments),
                                i.next()
                              );
                            };
                            return (
                              (i.next = function () {
                                return n < e.length - 1 ? t(n + 1) : null;
                              }),
                              i
                            );
                          };
                          return t(0);
                        })(e)
                      )();
                    }),
                    void 0 ===
                      (i = function () {
                        return a;
                      }.apply(t, [])) || (e.exports = i);
                },
                function (e, t, n) {
                  var i,
                    r = 'object' == typeof Reflect ? Reflect : null,
                    o =
                      r && 'function' == typeof r.apply
                        ? r.apply
                        : function (e, t, n) {
                            return Function.prototype.apply.call(e, t, n);
                          };
                  i =
                    r && 'function' == typeof r.ownKeys
                      ? r.ownKeys
                      : Object.getOwnPropertySymbols
                      ? function (e) {
                          return Object.getOwnPropertyNames(e).concat(
                            Object.getOwnPropertySymbols(e)
                          );
                        }
                      : function (e) {
                          return Object.getOwnPropertyNames(e);
                        };
                  var s =
                    Number.isNaN ||
                    function (e) {
                      return e != e;
                    };
                  function a() {
                    a.init.call(this);
                  }
                  (e.exports = a),
                    (e.exports.once = function (e, t) {
                      return new Promise(function (n, i) {
                        function r() {
                          void 0 !== o && e.removeListener('error', o),
                            n([].slice.call(arguments));
                        }
                        var o;
                        'error' !== t &&
                          ((o = function (n) {
                            e.removeListener(t, r), i(n);
                          }),
                          e.once('error', o)),
                          e.once(t, r);
                      });
                    }),
                    (a.EventEmitter = a),
                    (a.prototype._events = void 0),
                    (a.prototype._eventsCount = 0),
                    (a.prototype._maxListeners = void 0);
                  var c = 10;
                  function l(e) {
                    if ('function' != typeof e)
                      throw new TypeError(
                        'The "listener" argument must be of type Function. Received type ' +
                          typeof e
                      );
                  }
                  function u(e) {
                    return void 0 === e._maxListeners
                      ? a.defaultMaxListeners
                      : e._maxListeners;
                  }
                  function h(e, t, n, i) {
                    var r, o, s;
                    if (
                      (l(n),
                      void 0 === (o = e._events)
                        ? ((o = e._events = Object.create(null)),
                          (e._eventsCount = 0))
                        : (void 0 !== o.newListener &&
                            (e.emit(
                              'newListener',
                              t,
                              n.listener ? n.listener : n
                            ),
                            (o = e._events)),
                          (s = o[t])),
                      void 0 === s)
                    )
                      (s = o[t] = n), ++e._eventsCount;
                    else if (
                      ('function' == typeof s
                        ? (s = o[t] = i ? [n, s] : [s, n])
                        : i
                        ? s.unshift(n)
                        : s.push(n),
                      (r = u(e)) > 0 && s.length > r && !s.warned)
                    ) {
                      s.warned = !0;
                      var a = new Error(
                        'Possible EventEmitter memory leak detected. ' +
                          s.length +
                          ' ' +
                          String(t) +
                          ' listeners added. Use emitter.setMaxListeners() to increase limit'
                      );
                      (a.name = 'MaxListenersExceededWarning'),
                        (a.emitter = e),
                        (a.type = t),
                        (a.count = s.length),
                        console && console.warn && console.warn(a);
                    }
                    return e;
                  }
                  function f() {
                    if (!this.fired)
                      return (
                        this.target.removeListener(this.type, this.wrapFn),
                        (this.fired = !0),
                        0 === arguments.length
                          ? this.listener.call(this.target)
                          : this.listener.apply(this.target, arguments)
                      );
                  }
                  function p(e, t, n) {
                    var i = {
                        fired: !1,
                        wrapFn: void 0,
                        target: e,
                        type: t,
                        listener: n,
                      },
                      r = f.bind(i);
                    return (r.listener = n), (i.wrapFn = r), r;
                  }
                  function d(e, t, n) {
                    var i = e._events;
                    if (void 0 === i) return [];
                    var r = i[t];
                    return void 0 === r
                      ? []
                      : 'function' == typeof r
                      ? n
                        ? [r.listener || r]
                        : [r]
                      : n
                      ? (function (e) {
                          for (
                            var t = new Array(e.length), n = 0;
                            n < t.length;
                            ++n
                          )
                            t[n] = e[n].listener || e[n];
                          return t;
                        })(r)
                      : v(r, r.length);
                  }
                  function m(e) {
                    var t = this._events;
                    if (void 0 !== t) {
                      var n = t[e];
                      if ('function' == typeof n) return 1;
                      if (void 0 !== n) return n.length;
                    }
                    return 0;
                  }
                  function v(e, t) {
                    for (var n = new Array(t), i = 0; i < t; ++i) n[i] = e[i];
                    return n;
                  }
                  Object.defineProperty(a, 'defaultMaxListeners', {
                    enumerable: !0,
                    get: function () {
                      return c;
                    },
                    set: function (e) {
                      if ('number' != typeof e || e < 0 || s(e))
                        throw new RangeError(
                          'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
                            e +
                            '.'
                        );
                      c = e;
                    },
                  }),
                    (a.init = function () {
                      (void 0 !== this._events &&
                        this._events !== Object.getPrototypeOf(this)._events) ||
                        ((this._events = Object.create(null)),
                        (this._eventsCount = 0)),
                        (this._maxListeners = this._maxListeners || void 0);
                    }),
                    (a.prototype.setMaxListeners = function (e) {
                      if ('number' != typeof e || e < 0 || s(e))
                        throw new RangeError(
                          'The value of "n" is out of range. It must be a non-negative number. Received ' +
                            e +
                            '.'
                        );
                      return (this._maxListeners = e), this;
                    }),
                    (a.prototype.getMaxListeners = function () {
                      return u(this);
                    }),
                    (a.prototype.emit = function (e) {
                      for (var t = [], n = 1; n < arguments.length; n++)
                        t.push(arguments[n]);
                      var i = 'error' === e,
                        r = this._events;
                      if (void 0 !== r) i = i && void 0 === r.error;
                      else if (!i) return !1;
                      if (i) {
                        var s;
                        if ((t.length > 0 && (s = t[0]), s instanceof Error))
                          throw s;
                        var a = new Error(
                          'Unhandled error.' + (s ? ' (' + s.message + ')' : '')
                        );
                        throw ((a.context = s), a);
                      }
                      var c = r[e];
                      if (void 0 === c) return !1;
                      if ('function' == typeof c) o(c, this, t);
                      else {
                        var l = c.length,
                          u = v(c, l);
                        for (n = 0; n < l; ++n) o(u[n], this, t);
                      }
                      return !0;
                    }),
                    (a.prototype.on = a.prototype.addListener =
                      function (e, t) {
                        return h(this, e, t, !1);
                      }),
                    (a.prototype.prependListener = function (e, t) {
                      return h(this, e, t, !0);
                    }),
                    (a.prototype.once = function (e, t) {
                      return l(t), this.on(e, p(this, e, t)), this;
                    }),
                    (a.prototype.prependOnceListener = function (e, t) {
                      return l(t), this.prependListener(e, p(this, e, t)), this;
                    }),
                    (a.prototype.off = a.prototype.removeListener =
                      function (e, t) {
                        var n, i, r, o, s;
                        if ((l(t), void 0 === (i = this._events))) return this;
                        if (void 0 === (n = i[e])) return this;
                        if (n === t || n.listener === t)
                          0 == --this._eventsCount
                            ? (this._events = Object.create(null))
                            : (delete i[e],
                              i.removeListener &&
                                this.emit(
                                  'removeListener',
                                  e,
                                  n.listener || t
                                ));
                        else if ('function' != typeof n) {
                          for (r = -1, o = n.length - 1; o >= 0; o--)
                            if (n[o] === t || n[o].listener === t) {
                              (s = n[o].listener), (r = o);
                              break;
                            }
                          if (r < 0) return this;
                          0 === r
                            ? n.shift()
                            : (function (e, t) {
                                for (; t + 1 < e.length; t++) e[t] = e[t + 1];
                                e.pop();
                              })(n, r),
                            1 === n.length && (i[e] = n[0]),
                            void 0 !== i.removeListener &&
                              this.emit('removeListener', e, s || t);
                        }
                        return this;
                      }),
                    (a.prototype.removeAllListeners = function (e) {
                      var t, n, i;
                      if (void 0 === (n = this._events)) return this;
                      if (void 0 === n.removeListener)
                        return (
                          0 === arguments.length
                            ? ((this._events = Object.create(null)),
                              (this._eventsCount = 0))
                            : void 0 !== n[e] &&
                              (0 == --this._eventsCount
                                ? (this._events = Object.create(null))
                                : delete n[e]),
                          this
                        );
                      if (0 === arguments.length) {
                        var r,
                          o = Object.keys(n);
                        for (i = 0; i < o.length; ++i)
                          'removeListener' !== (r = o[i]) &&
                            this.removeAllListeners(r);
                        return (
                          this.removeAllListeners('removeListener'),
                          (this._events = Object.create(null)),
                          (this._eventsCount = 0),
                          this
                        );
                      }
                      if ('function' == typeof (t = n[e]))
                        this.removeListener(e, t);
                      else if (void 0 !== t)
                        for (i = t.length - 1; i >= 0; i--)
                          this.removeListener(e, t[i]);
                      return this;
                    }),
                    (a.prototype.listeners = function (e) {
                      return d(this, e, !0);
                    }),
                    (a.prototype.rawListeners = function (e) {
                      return d(this, e, !1);
                    }),
                    (a.listenerCount = function (e, t) {
                      return 'function' == typeof e.listenerCount
                        ? e.listenerCount(t)
                        : m.call(e, t);
                    }),
                    (a.prototype.listenerCount = m),
                    (a.prototype.eventNames = function () {
                      return this._eventsCount > 0 ? i(this._events) : [];
                    });
                },
                function (e, t, n) {
                  var i = n(3),
                    r = n(0),
                    o = 0;
                  function s() {
                    return 'hole_' + o++;
                  }
                  function a(e, t) {
                    for (var n = null, i = 0; i < e.length; i++) {
                      var r = t(e[i]);
                      r !== e[i] && (n || (n = e.slice()), (n[i] = r));
                    }
                    return n || e;
                  }
                  function c(e, t, n) {
                    if (!(e instanceof i.Node)) return e;
                    if (!n) {
                      var r = t(e);
                      if (r && r !== e) return r;
                    }
                    if (e instanceof i.NodeList) {
                      var o = a(e.children, function (e) {
                        return c(e, t, n);
                      });
                      o !== e.children &&
                        (e = new i[e.typename](e.lineno, e.colno, o));
                    } else if (e instanceof i.CallExtension) {
                      var s = c(e.args, t, n),
                        l = a(e.contentArgs, function (e) {
                          return c(e, t, n);
                        });
                      (s === e.args && l === e.contentArgs) ||
                        (e = new i[e.typename](e.extName, e.prop, s, l));
                    } else {
                      var u = e.fields.map(function (t) {
                          return e[t];
                        }),
                        h = a(u, function (e) {
                          return c(e, t, n);
                        });
                      h !== u &&
                        ((e = new i[e.typename](e.lineno, e.colno)),
                        h.forEach(function (t, n) {
                          e[e.fields[n]] = t;
                        }));
                    }
                    return (n && t(e)) || e;
                  }
                  function l(e, t) {
                    return c(e, t, !0);
                  }
                  function u(e, t, n) {
                    var o = [],
                      a = l(n ? e[n] : e, function (e) {
                        var n;
                        return e instanceof i.Block
                          ? e
                          : (((e instanceof i.Filter &&
                              -1 !== r.indexOf(t, e.name.value)) ||
                              e instanceof i.CallExtensionAsync) &&
                              ((n = new i.Symbol(e.lineno, e.colno, s())),
                              o.push(
                                new i.FilterAsync(
                                  e.lineno,
                                  e.colno,
                                  e.name,
                                  e.args,
                                  n
                                )
                              )),
                            n);
                      });
                    return (
                      n ? (e[n] = a) : (e = a),
                      o.length
                        ? (o.push(e), new i.NodeList(e.lineno, e.colno, o))
                        : e
                    );
                  }
                  e.exports = {
                    transform: function (e, t) {
                      return (function (e, t) {
                        return (function (e) {
                          return l(e, function (e) {
                            if (e instanceof i.If || e instanceof i.For) {
                              var t = !1;
                              if (
                                (c(e, function (e) {
                                  if (
                                    e instanceof i.FilterAsync ||
                                    e instanceof i.IfAsync ||
                                    e instanceof i.AsyncEach ||
                                    e instanceof i.AsyncAll ||
                                    e instanceof i.CallExtensionAsync
                                  )
                                    return (t = !0), e;
                                }),
                                t)
                              ) {
                                if (e instanceof i.If)
                                  return new i.IfAsync(
                                    e.lineno,
                                    e.colno,
                                    e.cond,
                                    e.body,
                                    e.else_
                                  );
                                if (
                                  e instanceof i.For &&
                                  !(e instanceof i.AsyncAll)
                                )
                                  return new i.AsyncEach(
                                    e.lineno,
                                    e.colno,
                                    e.arr,
                                    e.name,
                                    e.body,
                                    e.else_
                                  );
                              }
                            }
                          });
                        })(
                          (function (e) {
                            return c(e, function (e) {
                              if (e instanceof i.Block) {
                                var t = !1,
                                  n = s();
                                (e.body = c(e.body, function (e) {
                                  if (
                                    e instanceof i.FunCall &&
                                    'super' === e.name.value
                                  )
                                    return (
                                      (t = !0),
                                      new i.Symbol(e.lineno, e.colno, n)
                                    );
                                })),
                                  t &&
                                    e.body.children.unshift(
                                      new i.Super(
                                        0,
                                        0,
                                        e.name,
                                        new i.Symbol(0, 0, n)
                                      )
                                    );
                              }
                            });
                          })(
                            (function (e, t) {
                              return l(e, function (e) {
                                return e instanceof i.Output
                                  ? u(e, t)
                                  : e instanceof i.Set
                                  ? u(e, t, 'value')
                                  : e instanceof i.For
                                  ? u(e, t, 'arr')
                                  : e instanceof i.If
                                  ? u(e, t, 'cond')
                                  : e instanceof i.CallExtension
                                  ? u(e, t, 'args')
                                  : void 0;
                              });
                            })(e, t)
                          )
                        );
                      })(e, t || []);
                    },
                  };
                },
                function (e, t, n) {
                  var i = n(0),
                    r = n(2);
                  function o(e, t) {
                    return null == e || !1 === e ? t : e;
                  }
                  function s(e) {
                    return e != e;
                  }
                  function a(e) {
                    var t = (e = o(e, '')).toLowerCase();
                    return r.copySafeness(
                      e,
                      t.charAt(0).toUpperCase() + t.slice(1)
                    );
                  }
                  function c(e) {
                    if (i.isString(e)) return e.split('');
                    if (i.isObject(e))
                      return i._entries(e || {}).map(function (e) {
                        return { key: e[0], value: e[1] };
                      });
                    if (i.isArray(e)) return e;
                    throw new i.TemplateError('list filter: type not iterable');
                  }
                  function l(e) {
                    return function (t, n, r) {
                      void 0 === n && (n = 'truthy');
                      var o = this,
                        s = o.env.getTest(n);
                      return i.toArray(t).filter(function (t) {
                        return s.call(o, t, r) === e;
                      });
                    };
                  }
                  function u(e) {
                    return r.copySafeness(e, e.replace(/^\s*|\s*$/g, ''));
                  }
                  ((t = e.exports = {}).abs = Math.abs),
                    (t.batch = function (e, t, n) {
                      var i,
                        r = [],
                        o = [];
                      for (i = 0; i < e.length; i++)
                        i % t == 0 && o.length && (r.push(o), (o = [])),
                          o.push(e[i]);
                      if (o.length) {
                        if (n) for (i = o.length; i < t; i++) o.push(n);
                        r.push(o);
                      }
                      return r;
                    }),
                    (t.capitalize = a),
                    (t.center = function (e, t) {
                      if ((e = o(e, '')).length >= (t = t || 80)) return e;
                      var n = t - e.length,
                        s = i.repeat(' ', n / 2 - (n % 2)),
                        a = i.repeat(' ', n / 2);
                      return r.copySafeness(e, s + e + a);
                    }),
                    (t.default = function (e, t, n) {
                      return n ? e || t : void 0 !== e ? e : t;
                    }),
                    (t.dictsort = function (e, t, n) {
                      if (!i.isObject(e))
                        throw new i.TemplateError(
                          'dictsort filter: val must be an object'
                        );
                      var r,
                        o = [];
                      for (var s in e) o.push([s, e[s]]);
                      if (void 0 === n || 'key' === n) r = 0;
                      else {
                        if ('value' !== n)
                          throw new i.TemplateError(
                            'dictsort filter: You can only sort by either key or value'
                          );
                        r = 1;
                      }
                      return (
                        o.sort(function (e, n) {
                          var o = e[r],
                            s = n[r];
                          return (
                            t ||
                              (i.isString(o) && (o = o.toUpperCase()),
                              i.isString(s) && (s = s.toUpperCase())),
                            o > s ? 1 : o === s ? 0 : -1
                          );
                        }),
                        o
                      );
                    }),
                    (t.dump = function (e, t) {
                      return JSON.stringify(e, null, t);
                    }),
                    (t.escape = function (e) {
                      return e instanceof r.SafeString
                        ? e
                        : r.markSafe(
                            i.escape((e = null == e ? '' : e).toString())
                          );
                    }),
                    (t.safe = function (e) {
                      return e instanceof r.SafeString
                        ? e
                        : r.markSafe((e = null == e ? '' : e).toString());
                    }),
                    (t.first = function (e) {
                      return e[0];
                    }),
                    (t.forceescape = function (e) {
                      return r.markSafe(
                        i.escape((e = null == e ? '' : e).toString())
                      );
                    }),
                    (t.groupby = function (e, t) {
                      return i.groupBy(e, t, this.env.opts.throwOnUndefined);
                    }),
                    (t.indent = function (e, t, n) {
                      if ('' === (e = o(e, ''))) return '';
                      t = t || 4;
                      var s = e.split('\n'),
                        a = i.repeat(' ', t),
                        c = s
                          .map(function (e, t) {
                            return 0 !== t || n ? '' + a + e : e;
                          })
                          .join('\n');
                      return r.copySafeness(e, c);
                    }),
                    (t.join = function (e, t, n) {
                      return (
                        (t = t || ''),
                        n &&
                          (e = i.map(e, function (e) {
                            return e[n];
                          })),
                        e.join(t)
                      );
                    }),
                    (t.last = function (e) {
                      return e[e.length - 1];
                    }),
                    (t.length = function (e) {
                      var t = o(e, '');
                      return void 0 !== t
                        ? ('function' == typeof Map && t instanceof Map) ||
                          ('function' == typeof Set && t instanceof Set)
                          ? t.size
                          : !i.isObject(t) || t instanceof r.SafeString
                          ? t.length
                          : i.keys(t).length
                        : 0;
                    }),
                    (t.list = c),
                    (t.lower = function (e) {
                      return (e = o(e, '')).toLowerCase();
                    }),
                    (t.nl2br = function (e) {
                      return null == e
                        ? ''
                        : r.copySafeness(e, e.replace(/\r\n|\n/g, '<br />\n'));
                    }),
                    (t.random = function (e) {
                      return e[Math.floor(Math.random() * e.length)];
                    }),
                    (t.reject = l(!1)),
                    (t.rejectattr = function (e, t) {
                      return e.filter(function (e) {
                        return !e[t];
                      });
                    }),
                    (t.select = l(!0)),
                    (t.selectattr = function (e, t) {
                      return e.filter(function (e) {
                        return !!e[t];
                      });
                    }),
                    (t.replace = function (e, t, n, i) {
                      var o = e;
                      if (t instanceof RegExp) return e.replace(t, n);
                      void 0 === i && (i = -1);
                      var s = '';
                      if ('number' == typeof t) t = '' + t;
                      else if ('string' != typeof t) return e;
                      if (
                        ('number' == typeof e && (e = '' + e),
                        'string' != typeof e && !(e instanceof r.SafeString))
                      )
                        return e;
                      if ('' === t)
                        return (
                          (s = n + e.split('').join(n) + n),
                          r.copySafeness(e, s)
                        );
                      var a = e.indexOf(t);
                      if (0 === i || -1 === a) return e;
                      for (var c = 0, l = 0; a > -1 && (-1 === i || l < i); )
                        (s += e.substring(c, a) + n),
                          l++,
                          (a = e.indexOf(t, (c = a + t.length)));
                      return (
                        c < e.length && (s += e.substring(c)),
                        r.copySafeness(o, s)
                      );
                    }),
                    (t.reverse = function (e) {
                      var t;
                      return (
                        (t = i.isString(e)
                          ? c(e)
                          : i.map(e, function (e) {
                              return e;
                            })).reverse(),
                        i.isString(e) ? r.copySafeness(e, t.join('')) : t
                      );
                    }),
                    (t.round = function (e, t, n) {
                      t = t || 0;
                      var i = Math.pow(10, t);
                      return (
                        ('ceil' === n
                          ? Math.ceil
                          : 'floor' === n
                          ? Math.floor
                          : Math.round)(e * i) / i
                      );
                    }),
                    (t.slice = function (e, t, n) {
                      for (
                        var i = Math.floor(e.length / t),
                          r = e.length % t,
                          o = [],
                          s = 0,
                          a = 0;
                        a < t;
                        a++
                      ) {
                        var c = s + a * i;
                        a < r && s++;
                        var l = e.slice(c, s + (a + 1) * i);
                        n && a >= r && l.push(n), o.push(l);
                      }
                      return o;
                    }),
                    (t.sum = function (e, t, n) {
                      return (
                        void 0 === n && (n = 0),
                        t &&
                          (e = i.map(e, function (e) {
                            return e[t];
                          })),
                        n +
                          e.reduce(function (e, t) {
                            return e + t;
                          }, 0)
                      );
                    }),
                    (t.sort = r.makeMacro(
                      ['value', 'reverse', 'case_sensitive', 'attribute'],
                      [],
                      function (e, t, n, r) {
                        var o = this,
                          s = i.map(e, function (e) {
                            return e;
                          }),
                          a = i.getAttrGetter(r);
                        return (
                          s.sort(function (e, s) {
                            var c = r ? a(e) : e,
                              l = r ? a(s) : s;
                            if (
                              o.env.opts.throwOnUndefined &&
                              r &&
                              (void 0 === c || void 0 === l)
                            )
                              throw new TypeError(
                                'sort: attribute "' +
                                  r +
                                  '" resolved to undefined'
                              );
                            return (
                              !n &&
                                i.isString(c) &&
                                i.isString(l) &&
                                ((c = c.toLowerCase()), (l = l.toLowerCase())),
                              c < l ? (t ? 1 : -1) : c > l ? (t ? -1 : 1) : 0
                            );
                          }),
                          s
                        );
                      }
                    )),
                    (t.string = function (e) {
                      return r.copySafeness(e, e);
                    }),
                    (t.striptags = function (e, t) {
                      var n,
                        i = u(
                          (e = o(e, '')).replace(
                            /<\/?([a-z][a-z0-9]*)\b[^>]*>|<!--[\s\S]*?-->/gi,
                            ''
                          )
                        );
                      return (
                        (n = t
                          ? i
                              .replace(/^ +| +$/gm, '')
                              .replace(/ +/g, ' ')
                              .replace(/(\r\n)/g, '\n')
                              .replace(/\n\n\n+/g, '\n\n')
                          : i.replace(/\s+/gi, ' ')),
                        r.copySafeness(e, n)
                      );
                    }),
                    (t.title = function (e) {
                      var t = (e = o(e, '')).split(' ').map(function (e) {
                        return a(e);
                      });
                      return r.copySafeness(e, t.join(' '));
                    }),
                    (t.trim = u),
                    (t.truncate = function (e, t, n, i) {
                      var s = e;
                      if ((e = o(e, '')).length <= (t = t || 255)) return e;
                      if (n) e = e.substring(0, t);
                      else {
                        var a = e.lastIndexOf(' ', t);
                        -1 === a && (a = t), (e = e.substring(0, a));
                      }
                      return r.copySafeness(s, (e += null != i ? i : '...'));
                    }),
                    (t.upper = function (e) {
                      return (e = o(e, '')).toUpperCase();
                    }),
                    (t.urlencode = function (e) {
                      var t = encodeURIComponent;
                      return i.isString(e)
                        ? t(e)
                        : (i.isArray(e) ? e : i._entries(e))
                            .map(function (e) {
                              var n = e[1];
                              return t(e[0]) + '=' + t(n);
                            })
                            .join('&');
                    });
                  var h = /^(?:\(|<|&lt;)?(.*?)(?:\.|,|\)|\n|&gt;)?$/,
                    f =
                      /^[\w.!#$%&'*+\-\/=?\^`{|}~]+@[a-z\d\-]+(\.[a-z\d\-]+)+$/i,
                    p = /^https?:\/\/.*$/,
                    d = /^www\./,
                    m = /\.(?:org|net|com)(?:\:|\/|$)/;
                  (t.urlize = function (e, t, n) {
                    s(t) && (t = Infinity);
                    var i = !0 === n ? ' rel="nofollow"' : '';
                    return e
                      .split(/(\s+)/)
                      .filter(function (e) {
                        return e && e.length;
                      })
                      .map(function (e) {
                        var n = e.match(h),
                          r = n ? n[1] : e,
                          o = r.substr(0, t);
                        return p.test(r)
                          ? '<a href="' + r + '"' + i + '>' + o + '</a>'
                          : d.test(r)
                          ? '<a href="http://' + r + '"' + i + '>' + o + '</a>'
                          : f.test(r)
                          ? '<a href="mailto:' + r + '">' + r + '</a>'
                          : m.test(r)
                          ? '<a href="http://' + r + '"' + i + '>' + o + '</a>'
                          : e;
                      })
                      .join('');
                  }),
                    (t.wordcount = function (e) {
                      var t = (e = o(e, '')) ? e.match(/\w+/g) : null;
                      return t ? t.length : null;
                    }),
                    (t.float = function (e, t) {
                      var n = parseFloat(e);
                      return s(n) ? t : n;
                    });
                  var v = r.makeMacro(
                    ['value', 'default', 'base'],
                    [],
                    function (e, t, n) {
                      void 0 === n && (n = 10);
                      var i = parseInt(e, n);
                      return s(i) ? t : i;
                    }
                  );
                  (t.int = v), (t.d = t.default), (t.e = t.escape);
                },
                function (e, t, n) {
                  function i(e, t) {
                    return (
                      (i =
                        Object.setPrototypeOf ||
                        function (e, t) {
                          return (e.__proto__ = t), e;
                        }),
                      i(e, t)
                    );
                  }
                  var r = n(6);
                  e.exports = {
                    PrecompiledLoader: /*#__PURE__*/ (function (e) {
                      var t, n;
                      function r(t) {
                        var n;
                        return (
                          ((n = e.call(this) || this).precompiled = t || {}), n
                        );
                      }
                      return (
                        (n = e),
                        ((t = r).prototype = Object.create(n.prototype)),
                        (t.prototype.constructor = t),
                        i(t, n),
                        (r.prototype.getSource = function (e) {
                          return this.precompiled[e]
                            ? {
                                src: { type: 'code', obj: this.precompiled[e] },
                                path: e,
                              }
                            : null;
                        }),
                        r
                      );
                    })(r),
                  };
                },
                function (e, t, n) {
                  var i = n(2).SafeString;
                  (t.callable = function (e) {
                    return 'function' == typeof e;
                  }),
                    (t.defined = function (e) {
                      return void 0 !== e;
                    }),
                    (t.divisibleby = function (e, t) {
                      return e % t == 0;
                    }),
                    (t.escaped = function (e) {
                      return e instanceof i;
                    }),
                    (t.equalto = function (e, t) {
                      return e === t;
                    }),
                    (t.eq = t.equalto),
                    (t.sameas = t.equalto),
                    (t.even = function (e) {
                      return e % 2 == 0;
                    }),
                    (t.falsy = function (e) {
                      return !e;
                    }),
                    (t.ge = function (e, t) {
                      return e >= t;
                    }),
                    (t.greaterthan = function (e, t) {
                      return e > t;
                    }),
                    (t.gt = t.greaterthan),
                    (t.le = function (e, t) {
                      return e <= t;
                    }),
                    (t.lessthan = function (e, t) {
                      return e < t;
                    }),
                    (t.lt = t.lessthan),
                    (t.lower = function (e) {
                      return e.toLowerCase() === e;
                    }),
                    (t.ne = function (e, t) {
                      return e !== t;
                    }),
                    (t.null = function (e) {
                      return null === e;
                    }),
                    (t.number = function (e) {
                      return 'number' == typeof e;
                    }),
                    (t.odd = function (e) {
                      return e % 2 == 1;
                    }),
                    (t.string = function (e) {
                      return 'string' == typeof e;
                    }),
                    (t.truthy = function (e) {
                      return !!e;
                    }),
                    (t.undefined = function (e) {
                      return void 0 === e;
                    }),
                    (t.upper = function (e) {
                      return e.toUpperCase() === e;
                    }),
                    (t.iterable = function (e) {
                      return 'undefined' != typeof Symbol
                        ? !!e[Symbol.iterator]
                        : Array.isArray(e) || 'string' == typeof e;
                    }),
                    (t.mapping = function (e) {
                      var t =
                        null != e && 'object' == typeof e && !Array.isArray(e);
                      return Set ? t && !(e instanceof Set) : t;
                    });
                },
                function (e, t, n) {
                  function i(e) {
                    var t = -1;
                    return {
                      current: null,
                      reset: function () {
                        (t = -1), (this.current = null);
                      },
                      next: function () {
                        return (
                          ++t >= e.length && (t = 0),
                          (this.current = e[t]),
                          this.current
                        );
                      },
                    };
                  }
                  e.exports = function () {
                    return {
                      range: function (e, t, n) {
                        void 0 === t
                          ? ((t = e), (e = 0), (n = 1))
                          : n || (n = 1);
                        var i = [];
                        if (n > 0) for (var r = e; r < t; r += n) i.push(r);
                        else for (var o = e; o > t; o += n) i.push(o);
                        return i;
                      },
                      cycler: function () {
                        return i(Array.prototype.slice.call(arguments));
                      },
                      joiner: function (e) {
                        return (function (e) {
                          e = e || ',';
                          var t = !0;
                          return function () {
                            var n = t ? '' : e;
                            return (t = !1), n;
                          };
                        })(e);
                      },
                    };
                  };
                },
                function (e, t, n) {
                  var i = n(4);
                  e.exports = function (e, t) {
                    function n(e, t) {
                      if (
                        ((this.name = e),
                        (this.path = e),
                        (this.defaultEngine = t.defaultEngine),
                        (this.ext = i.extname(e)),
                        !this.ext && !this.defaultEngine)
                      )
                        throw new Error(
                          'No default engine was specified and no extension was provided.'
                        );
                      this.ext ||
                        (this.name += this.ext =
                          ('.' !== this.defaultEngine[0] ? '.' : '') +
                          this.defaultEngine);
                    }
                    return (
                      (n.prototype.render = function (t, n) {
                        e.render(this.name, t, n);
                      }),
                      t.set('view', n),
                      t.set('nunjucksEnv', e),
                      e
                    );
                  };
                },
                function (e, t, n) {
                  var i = n(4),
                    r = n(4),
                    o = n(0)._prettifyError,
                    s = n(5),
                    a = n(7).Environment,
                    c = n(24);
                  function l(e, t) {
                    return (
                      !!Array.isArray(t) &&
                      t.some(function (t) {
                        return e.match(t);
                      })
                    );
                  }
                  function u(e, t) {
                    (t = t || {}).isString = !0;
                    var n = t.env || new a([]),
                      i = t.wrapper || c;
                    if (!t.name)
                      throw new Error(
                        'the "name" option is required when compiling a string'
                      );
                    return i([h(e, t.name, n)], t);
                  }
                  function h(e, t, n) {
                    var i,
                      r = (n = n || new a([])).asyncFilters,
                      c = n.extensionsList;
                    t = t.replace(/\\/g, '/');
                    try {
                      i = s.compile(e, r, c, t, n.opts);
                    } catch (e) {
                      throw o(t, !1, e);
                    }
                    return { name: t, template: i };
                  }
                  e.exports = {
                    precompile: function (e, t) {
                      var n = (t = t || {}).env || new a([]),
                        o = t.wrapper || c;
                      if (t.isString) return u(e, t);
                      var s = i.existsSync(e) && i.statSync(e),
                        f = [],
                        p = [];
                      if (s.isFile())
                        f.push(h(i.readFileSync(e, 'utf-8'), t.name || e, n));
                      else if (s.isDirectory()) {
                        !(function n(o) {
                          i.readdirSync(o).forEach(function (s) {
                            var a = r.join(o, s),
                              c = a.substr(r.join(e, '/').length),
                              u = i.statSync(a);
                            u && u.isDirectory()
                              ? l((c += '/'), t.exclude) || n(a)
                              : l(c, t.include) && p.push(a);
                          });
                        })(e);
                        for (var d = 0; d < p.length; d++) {
                          var m = p[d].replace(r.join(e, '/'), '');
                          try {
                            f.push(h(i.readFileSync(p[d], 'utf-8'), m, n));
                          } catch (e) {
                            if (!t.force) throw e;
                            console.error(e);
                          }
                        }
                      }
                      return o(f, t);
                    },
                    precompileString: u,
                  };
                },
                function (e, t, n) {
                  e.exports = function (e, t) {
                    var n = '';
                    t = t || {};
                    for (var i = 0; i < e.length; i++) {
                      var r = JSON.stringify(e[i].name);
                      (n +=
                        '(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})[' +
                        r +
                        '] = (function() {\n' +
                        e[i].template +
                        '\n})();\n'),
                        t.asFunction &&
                          (n +=
                            'return function(ctx, cb) { return nunjucks.render(' +
                            r +
                            ', ctx, cb); }\n'),
                        (n += '})();\n');
                    }
                    return n;
                  };
                },
                function (e, t, n) {
                  e.exports = function () {
                    var e,
                      t,
                      n = this.runtime,
                      i = this.lib,
                      r = this.compiler.Compiler,
                      o = this.parser.Parser,
                      s = this.nodes,
                      a = this.lexer,
                      c = n.contextOrFrameLookup,
                      l = n.memberLookup;
                    function u(e) {
                      return {
                        index: e.index,
                        lineno: e.lineno,
                        colno: e.colno,
                      };
                    }
                    if (
                      (r && (e = r.prototype.assertType),
                      o && (t = o.prototype.parseAggregate),
                      (n.contextOrFrameLookup = function (e, t, n) {
                        var i = c.apply(this, arguments);
                        if (void 0 !== i) return i;
                        switch (n) {
                          case 'True':
                            return !0;
                          case 'False':
                            return !1;
                          case 'None':
                            return null;
                          default:
                            return;
                        }
                      }),
                      s && r && o)
                    ) {
                      var h = s.Node.extend('Slice', {
                        fields: ['start', 'stop', 'step'],
                        init: function (e, t, n, i, r) {
                          (n = n || new s.Literal(e, t, null)),
                            (i = i || new s.Literal(e, t, null)),
                            (r = r || new s.Literal(e, t, 1)),
                            this.parent(e, t, n, i, r);
                        },
                      });
                      (r.prototype.assertType = function (t) {
                        t instanceof h || e.apply(this, arguments);
                      }),
                        (r.prototype.compileSlice = function (e, t) {
                          this._emit('('),
                            this._compileExpression(e.start, t),
                            this._emit('),('),
                            this._compileExpression(e.stop, t),
                            this._emit('),('),
                            this._compileExpression(e.step, t),
                            this._emit(')');
                        }),
                        (o.prototype.parseAggregate = function () {
                          var e = this,
                            n = u(this.tokens);
                          n.colno--, n.index--;
                          try {
                            return t.apply(this);
                          } catch (t) {
                            var r = u(this.tokens),
                              o = function () {
                                return i._assign(e.tokens, r), t;
                              };
                            i._assign(this.tokens, n), (this.peeked = !1);
                            var c = this.peekToken();
                            if (c.type !== a.TOKEN_LEFT_BRACKET) throw o();
                            this.nextToken();
                            for (
                              var l = new h(c.lineno, c.colno), f = !1, p = 0;
                              p <= l.fields.length &&
                              !this.skip(a.TOKEN_RIGHT_BRACKET);
                              p++
                            ) {
                              if (p === l.fields.length) {
                                if (!f) break;
                                this.fail(
                                  'parseSlice: too many slice components',
                                  c.lineno,
                                  c.colno
                                );
                              }
                              this.skip(a.TOKEN_COLON)
                                ? (f = !0)
                                : ((l[l.fields[p]] = this.parseExpression()),
                                  (f = this.skip(a.TOKEN_COLON) || f));
                            }
                            if (!f) throw o();
                            return new s.Array(c.lineno, c.colno, [l]);
                          }
                        });
                    }
                    function f(e, t, i, r) {
                      (e = e || []),
                        null === t && (t = r < 0 ? e.length - 1 : 0),
                        null === i
                          ? (i = r < 0 ? -1 : e.length)
                          : i < 0 && (i += e.length),
                        t < 0 && (t += e.length);
                      for (
                        var o = [], s = t;
                        !(
                          s < 0 ||
                          s > e.length ||
                          (r > 0 && s >= i) ||
                          (r < 0 && s <= i)
                        );
                        s += r
                      )
                        o.push(n.memberLookup(e, s));
                      return o;
                    }
                    function p(e, t) {
                      return Object.prototype.hasOwnProperty.call(e, t);
                    }
                    var d = {
                        pop: function (e) {
                          if (void 0 === e) return this.pop();
                          if (e >= this.length || e < 0)
                            throw new Error('KeyError');
                          return this.splice(e, 1);
                        },
                        append: function (e) {
                          return this.push(e);
                        },
                        remove: function (e) {
                          for (var t = 0; t < this.length; t++)
                            if (this[t] === e) return this.splice(t, 1);
                          throw new Error('ValueError');
                        },
                        count: function (e) {
                          for (var t = 0, n = 0; n < this.length; n++)
                            this[n] === e && t++;
                          return t;
                        },
                        index: function (e) {
                          var t;
                          if (-1 === (t = this.indexOf(e)))
                            throw new Error('ValueError');
                          return t;
                        },
                        find: function (e) {
                          return this.indexOf(e);
                        },
                        insert: function (e, t) {
                          return this.splice(e, 0, t);
                        },
                      },
                      m = {
                        items: function () {
                          return i._entries(this);
                        },
                        values: function () {
                          return i._values(this);
                        },
                        keys: function () {
                          return i.keys(this);
                        },
                        get: function (e, t) {
                          var n = this[e];
                          return void 0 === n && (n = t), n;
                        },
                        has_key: function (e) {
                          return p(this, e);
                        },
                        pop: function (e, t) {
                          var n = this[e];
                          if (void 0 === n && void 0 !== t) n = t;
                          else {
                            if (void 0 === n) throw new Error('KeyError');
                            delete this[e];
                          }
                          return n;
                        },
                        popitem: function () {
                          var e = i.keys(this);
                          if (!e.length) throw new Error('KeyError');
                          var t = e[0],
                            n = this[t];
                          return delete this[t], [t, n];
                        },
                        setdefault: function (e, t) {
                          return (
                            void 0 === t && (t = null),
                            e in this || (this[e] = t),
                            this[e]
                          );
                        },
                        update: function (e) {
                          return i._assign(this, e), null;
                        },
                      };
                    return (
                      (m.iteritems = m.items),
                      (m.itervalues = m.values),
                      (m.iterkeys = m.keys),
                      (n.memberLookup = function (e, t, n) {
                        return 4 === arguments.length
                          ? f.apply(this, arguments)
                          : i.isArray((e = e || {})) && p(d, t)
                          ? d[t].bind(e)
                          : i.isObject(e) && p(m, t)
                          ? m[t].bind(e)
                          : l.apply(this, arguments);
                      }),
                      function () {
                        (n.contextOrFrameLookup = c),
                          (n.memberLookup = l),
                          r && (r.prototype.assertType = e),
                          o && (o.prototype.parseAggregate = t);
                      }
                    );
                  };
                },
              ]);
            }),
            (e.exports = n());
        })(t),
        t.exports
      );
    })(),
    a = /*@__PURE__*/ r(s),
    c = /*#__PURE__*/ (function () {
      function e(e, t) {
        (this.coreTranslations = void 0),
          (this.moduleTranslations = void 0),
          (this.coreTranslations = e),
          (this.moduleTranslations = t);
      }
      var t = e.prototype;
      return (
        (t.translate = function (e, t) {
          var i = this.findTranslation(this.moduleTranslations, e, t);
          if ('string' == typeof i) return i;
          var r = this.findTranslation(this.coreTranslations, e, t);
          if ('string' == typeof r) return r;
          n('Could not find translation', e);
        }),
        (t.findTranslation = function (e, t, n) {
          if ('string' == typeof e[t]) {
            var i,
              r = null != (i = e[t]) ? i : '',
              o = n || {};
            return r.replace(new RegExp('{([^}]+)}', 'g'), function (e, t) {
              return t in o ? o[t] : '{' + t + '}';
            });
          }
        }),
        e
      );
    })(),
    l = {},
    u = function (e) {
      if (void 0 === l[e]) throw new Error('WebStart was not set for ' + e);
      return l[e];
    };
  !(function (e) {
    (e.ALL_MODULES_STARTED = 'ALL_MODULES_STARTED'),
      (e.DOM_OBJECTS_CREATED = 'DOM_OBJECTS_CREATED'),
      (e.MODULE_DOM_READY = 'MODULE_DOM_READY');
  })(o || (o = {}));
  var h = {
      'moment.js': 'node_modules/moment/min/moment-with-locales.js',
      'moment-timezone.js':
        'node_modules/moment-timezone/builds/moment-timezone-with-data.js',
      'weather-icons.css': 'node_modules/weathericons/css/weather-icons.css',
      'weather-icons-wind.css':
        'node_modules/weathericons/css/weather-icons-wind.css',
      'font-awesome.css': 'css/font-awesome.css',
      'nunjucks.js': 'node_modules/nunjucks/browser/nunjucks.min.js',
      'suncalc.js': 'node_modules/suncalc/suncalc.js',
    },
    f = Object.keys(h),
    p = [],
    d = void 0,
    m = [],
    v = {};
  function y() {
    if (d)
      n('There is already a pending script, no need to set one to processing.');
    else {
      var e = m.shift();
      e
        ? (n('Queueing a script.', e.script), k(e.script, e.moduleName))
        : n('There was no script left to queue.');
    }
  }
  function _(e) {
    Object.entries(v).forEach(function (t) {
      var n = t[0];
      return (0, t[1])(e, function () {
        return delete v[n];
      });
    });
  }
  function g(e, t) {
    return f.includes(e) ? 'mmjs/vendor/' + e : t + '/' + e;
  }
  function k(e, t) {
    var i = g(e, t);
    if ((n('Received request to load script:', e, t, 'id: ', i), p.includes(i)))
      return (
        n(i, 'is already present in the list of loaded scripts.'),
        _(i),
        void y()
      );
    if (d)
      m.find(function (n) {
        return n.script === e && t == t;
      }) || m.push({ script: e, moduleName: t });
    else {
      var r = function e(t) {
        if (!document.body)
          return (
            n('document.body not set yet, trying it again later.'),
            void setTimeout(function () {
              return e(t);
            }, 100)
          );
        n('adding', t);
        var r = document.createElement('script');
        (r.src = t),
          (r.type = 'text/javascript'),
          (r.id = i),
          (r.onload = function () {
            n('loaded', i), p.push(i), (d = void 0), _(i), y();
          }),
          document.body.appendChild(r);
      };
      (d = i),
        f.includes(e)
          ? r(u(t).http.PREFIX + '/vendor/' + e)
          : r(u(t).http.PREFIX + '/module/' + e);
    }
  }
  var b = /*#__PURE__*/ (function () {
      function e(e, r, o, s, a) {
        var c = this;
        (this.name = void 0),
          (this.translator = void 0),
          (this.notificationDispatch = void 0),
          (this.socketNotificationDispatch = void 0),
          (this.moduleDefinition = void 0),
          (this.config = {}),
          (this.scriptsAreLoaded = !1),
          (this.domListener = void 0),
          (this.data = {}),
          (this._nunjucksEnvironment = void 0),
          (this.uniqueIdentifier = void 0),
          (this.initializationReadyCallback = void 0),
          (this.name = e),
          (this.translator = o),
          (this.notificationDispatch = s),
          (this.socketNotificationDispatch = a),
          (this.moduleDefinition = r),
          (this.uniqueIdentifier = this.name + '-' + i()),
          Object.entries(r).forEach(function (e) {
            var t = e[0],
              i = e[1];
            'function' == typeof i &&
              (n('Binding this to', t), (c.moduleDefinition[t] = i.bind(c)));
          }),
          r.defaults && (this.config = t({}, r.defaults || {}, this.config)),
          this.moduleDefinition.loaded &&
            this.moduleDefinition.loaded(function () {});
      }
      var r = e.prototype;
      return (
        (r.setConfig = function (e) {
          (this.config = t({}, this.moduleDefinition.defaults || {}, e)),
            (this.data = t({}, this.config, {
              classes:
                void 0 !== e.classes ? e.classes + ' ' + this.name : this.name,
              path: u(this.name).http.PREFIX + '/module/',
            })),
            (this.uniqueIdentifier = this.uniqueIdentifier + '-' + e.type);
        }),
        (r.getTemplate = function () {
          return '';
        }),
        (r.getTemplateData = function () {
          return {};
        }),
        (r.getModuleDom = function () {
          var e = this;
          return this.scriptsAreLoaded
            ? this.moduleDefinition.getDom
              ? (n('DOM already exists.', this.uniqueIdentifier),
                Promise.resolve(this.moduleDefinition.getDom()))
              : new Promise(function (t, i) {
                  var r = document.createElement('div'),
                    o = e.getTemplate(),
                    s = e.getTemplateData();
                  n('Rendering a template', o, e.uniqueIdentifier),
                    /^.*((\.html)|(\.njk))$/.test(o)
                      ? e.nunjucksEnvironment().render(o, s, function (e, n) {
                          e && (console.error(e), i(e)),
                            (r.innerHTML = n),
                            t(r);
                        })
                      : ((r.innerHTML = e
                          .nunjucksEnvironment()
                          .renderString(o, s)),
                        t(r));
                })
            : Promise.reject(new Error('DOM is not yet initialized.'));
        }),
        (r.initAndStart = function () {
          var e = this,
            t = this.moduleDefinition.getStyles
              ? this.moduleDefinition.getStyles()
              : [],
            r = this.moduleDefinition.getScripts
              ? this.moduleDefinition.getScripts()
              : [];
          if (!document.head)
            return (
              console.error('document.head was not set. Aborting.'),
              Promise.resolve()
            );
          var o = new Promise(function (t) {
              e.initializationReadyCallback = function () {
                t();
              };
            }),
            s = Object.keys(h);
          if (
            (Array.isArray(t) &&
              t.forEach(function (t) {
                var n = 'mmstyle/vendor/' + t;
                if (s.includes(t) && !document.getElementById(n)) {
                  var i = document.createElement('link');
                  (i.rel = 'stylesheet'),
                    (i.href = u(e.name).http.PREFIX + '/vendor/' + t),
                    (i.type = 'text/css'),
                    (i.id = n),
                    document.head.appendChild(i);
                } else if (!s.includes(t)) {
                  var r = document.createElement('link');
                  (r.rel = 'stylesheet'),
                    (r.href = u(e.name).http.PREFIX + '/module/' + t),
                    (r.type = 'text/css'),
                    (r.id = n),
                    document.head.appendChild(r);
                }
              }),
            !Array.isArray(r) || 0 === r.length)
          )
            return this.continueInitAndStart(), o;
          var a,
            c,
            l = r.map(function (t) {
              return g(t, e.name);
            }),
            f = p.filter(function (e) {
              return -1 !== l.indexOf(e);
            });
          return (
            n('Loading started with', f, 'out of', l, this.uniqueIdentifier),
            f.length === r.length
              ? (n('All scripts are already loaded.', this.uniqueIdentifier),
                this.continueInitAndStart(),
                o)
              : ((a = function (t, i) {
                  n('Script loaded callback.', t, e.uniqueIdentifier),
                    -1 !== l.indexOf(t) &&
                      -1 === f.indexOf(t) &&
                      (f.push(t),
                      n(
                        'Found a script that we need.',
                        t,
                        e.uniqueIdentifier,
                        f.length,
                        '/',
                        r.length
                      )),
                    f.length === r.length &&
                      (n(
                        'We have all scripts that we need.',
                        e.uniqueIdentifier
                      ),
                      i(),
                      e.continueInitAndStart());
                }),
                (c = i()),
                (v[c] = a),
                r.forEach(function (t) {
                  k(t, e.name);
                }),
                o)
          );
        }),
        (r.continueInitAndStart = function () {
          if (
            ((this.scriptsAreLoaded = !0),
            this.moduleDefinition.init && this.moduleDefinition.init(),
            this.moduleDefinition.start
              ? this.moduleDefinition.start()
              : n('Module has no start method: ', this.name),
            !this.initializationReadyCallback)
          )
            throw new Error(
              'There was no initAndStart callback to invoke. Was continueInitAndStart() invoked before initAndStart()?'
            );
          n('Resolving initAndStart promise.'),
            this.initializationReadyCallback(),
            this.triggerNotification(o.ALL_MODULES_STARTED, void 0),
            this.triggerNotification(o.DOM_OBJECTS_CREATED, void 0);
        }),
        (r.registerDomListener = function (e) {
          var t = i();
          n('Registering listener', t, 'in', this.uniqueIdentifier),
            (this.domListener = e);
        }),
        (r.updateDom = function () {
          if (!this.domListener)
            throw new Error(
              'There is no domListener registered to request a DOM update at, ' +
                this.uniqueIdentifier
            );
          this.domListener();
        }),
        (r.triggerNotification = function (e, t, n) {
          this.moduleDefinition.notificationReceived &&
            this.moduleDefinition.notificationReceived(e, t, n);
        }),
        (r.triggerSocketNotificationReceived = function (e, t) {
          this.moduleDefinition.socketNotificationReceived &&
            this.moduleDefinition.socketNotificationReceived(e, t);
        }),
        (r.hide = function () {
          console.log('Module', this.name, 'requested to be hidden.');
        }),
        (r.translate = function (e, t, n) {
          return 'object' == typeof t
            ? this.translator.translate(e, t) || n || e
            : this.translator.translate(e) || t || e;
        }),
        (r.show = function () {
          console.log('Module', this.name, 'requested to be shown.');
        }),
        (r.sendNotification = function (e, t) {
          this.notificationDispatch(e, t, this);
        }),
        (r.sendSocketNotification = function (e, t) {
          n(this.name, 'attempted to send SOCKET notification:', {
            notification: e,
            payload: t,
          }),
            this.socketNotificationDispatch(e, t);
        }),
        (r.file = function (e) {
          return e.match(/\.(js|css)$/)
            ? e.replace('//', '/')
            : ('' + (this.data.path || '') + e).replace('//', '/');
        }),
        (r.nunjucksEnvironment = function () {
          var e = this;
          return (
            this._nunjucksEnvironment ||
              (n('Initializing new nunjucks environment.'),
              (this._nunjucksEnvironment = new a.Environment(
                new a.WebLoader(u(this.name).http.PREFIX + '/module', {
                  async: !0,
                }),
                { trimBlocks: !0, lstripBlocks: !0 }
              )),
              this._nunjucksEnvironment.addFilter('translate', function (t, n) {
                return a.runtime.markSafe(e.translate(t, n));
              })),
            this._nunjucksEnvironment
          );
        }),
        (r.suspend = function () {
          this.moduleDefinition.suspend && this.moduleDefinition.suspend();
        }),
        e
      );
    })(),
    w = {};
  void 0 === window.Module
    ? (window.Module = (function () {
        var e,
          i,
          r = function (e) {
            try {
              return Promise.resolve(
                (function (t, i) {
                  try {
                    var r =
                      ((s = 'core' === e ? Object.keys(o)[0] : e),
                      n('Using', s, 'as module name.'),
                      Promise.resolve(
                        u(s).http.get(
                          'core' === e
                            ? '/translations/core'
                            : '/translations/module'
                        )
                      ));
                  } catch (e) {
                    return i(e);
                  }
                  var s;
                  return r && r.then ? r.then(void 0, i) : r;
                })(0, function (t) {
                  return (
                    console.error('Unable to fetch translations.', e, t),
                    { data: {} }
                  );
                })
              );
            } catch (e) {
              return Promise.reject(e);
            }
          },
          o = {},
          s = [];
        function a(e, t, n) {
          s.forEach(function (i) {
            i.triggerNotification(e, t, n);
          });
        }
        return {
          register: function (e, t) {
            if (
              (n('Registering a new module', e, t),
              (o[e] = t),
              Array.isArray(w[e]))
            ) {
              var i,
                r = null != (i = w[e]) ? i : [];
              delete w[e],
                r.forEach(function (t) {
                  return t(getNewlyInitializedModule(e));
                });
            }
          },
          createModule: function (l, u) {
            try {
              var h;
              if (!o[l])
                return (
                  n(
                    'The module',
                    l,
                    ' is not registered yet, returning a promise to be resolved later when its available.'
                  ),
                  Promise.resolve(
                    new Promise(function (e, t) {
                      Array.isArray(w[l]) || (w[l] = []),
                        w[l].push(function (t) {
                          n('Resolving module.', l), e(t);
                        });
                    })
                  )
                );
              n('Creating new module', l);
              var f = null != (h = o[l]) ? h : {};
              return Promise.resolve(
                (function (e) {
                  try {
                    var t = function () {
                      return Promise.resolve(r(e)).then(function (t) {
                        var r = t.data;
                        return (
                          n('Initialization translator', e, i, r), new c(i, r)
                        );
                      });
                    };
                    n('Fetching translations for module', e);
                    var o = (function () {
                      if (void 0 === i)
                        return (
                          n('Additionally fetching translations for core'),
                          (i = {}),
                          Promise.resolve(r('core')).then(function (e) {
                            i = e.data;
                          })
                        );
                    })();
                    return Promise.resolve(o && o.then ? o.then(t) : t());
                  } catch (e) {
                    return Promise.reject(e);
                  }
                })(l)
              ).then(function (n) {
                var i = new b(l, t({}, f), n, a, function (t, n) {
                  if (!e) throw new Error('Socket dispatch was not set.');
                  e(t, n);
                });
                return (
                  Object.entries(f).forEach(function (e) {
                    i[e[0]] = e[1];
                  }),
                  i.setConfig(u),
                  Promise.resolve(i.initAndStart()).then(function () {
                    return s.push(i), i;
                  })
                );
              });
            } catch (e) {
              return Promise.reject(e);
            }
          },
          triggerSocketNotification: function (e, t) {
            n('Received socket notification', e, t),
              s.forEach(function (n) {
                n.triggerSocketNotificationReceived(e, t);
              });
          },
          setSocketDispatch: function (t) {
            e = t;
          },
        };
      })())
    : console.log(
        'windows.Module was already defined. Not overwriting, reusing the existing one, this could lead to strange behavior if the wrapper versions are not compatible.'
      ),
    void 0 === Window.Log && (window.Log = console);
  var E = ['componentType'];
  function x(e, t) {
    var i,
      r = function t(i) {
        try {
          return Promise.resolve(
            (function (t, r) {
              try {
                var s = Promise.resolve(i.getModuleDom()).then(function (t) {
                  c
                    ? n(
                        'The module was already unloaded after we retrieved the DOM, so we are ignored the retrieved elemement.',
                        t
                      )
                    : (t && e.appendChild(t),
                      i.triggerNotification(o.MODULE_DOM_READY, void 0));
                });
              } catch (e) {
                return r(e);
              }
              return s && s.then ? s.then(void 0, r) : s;
            })(0, function (e) {
              console.log('Initial DOM update error; retrying.', e),
                setTimeout(function () {
                  return t(i);
                }, 250);
            })
          );
        } catch (e) {
          return Promise.reject(e);
        }
      },
      s = t.componentType,
      a = (function (e, t) {
        if (null == e) return {};
        var n,
          i,
          r = {},
          o = Object.keys(e);
        for (i = 0; i < o.length; i++)
          t.indexOf((n = o[i])) >= 0 || (r[n] = e[n]);
        return r;
      })(t, E);
    e.classList.add('mm-module');
    var c = !1;
    return (
      n('Invoking createModule', s, a),
      window.Module.createModule(
        (function (e) {
          var t,
            n = e.split('.', 2);
          if (2 !== n.length)
            throw new Error('Invalid componentType ' + e + '.');
          return null != (t = n[1]) ? t : 'unknown';
        })(s),
        a || {}
      ).then(function (t) {
        t.registerDomListener(function () {
          try {
            return Promise.resolve(t.getModuleDom()).then(function (t) {
              !t && e.children.length > 0
                ? e.removeChild(e.children[0])
                : e.children.length > 0
                ? e.replaceChild(t, e.children[0])
                : e.appendChild(t);
            });
          } catch (e) {
            return Promise.reject(e);
          }
        }),
          (i = t),
          r(t);
      }),
      {
        unmount: function () {
          var t;
          (c = !0), null == (t = i) || t.suspend(), (e.innerHTML = '');
        },
      }
    );
  }
  !(function () {
    var e = !1,
      t = /xyz/.test(function () {
        xyz;
      })
        ? /\b_super\b/
        : /.*/;
    (this.Class = function () {}),
      (Class.extend = function (n) {
        var i = this.prototype;
        e = !0;
        var r = new this();
        for (var o in ((e = !1), r)) r[o] = cloneObject(r[o]);
        for (var s in n)
          r[s] =
            'function' == typeof n[s] &&
            'function' == typeof i[s] &&
            t.test(n[s])
              ? (function (e, t) {
                  return function () {
                    var n = this._super;
                    this._super = i[e];
                    var r = t.apply(this, arguments);
                    return (this._super = n), r;
                  };
                })(s, n[s])
              : n[s];
        function a() {
          !e && this.init && this.init.apply(this, arguments);
        }
        return (
          ((a.prototype = r).constructor = a), (a.extend = arguments.callee), a
        );
      });
  })(),
    (window.cloneObject = function (e) {
      if (null === e || 'object' != typeof e) return e;
      var t = e.constructor();
      for (var n in e)
        (t[n] = cloneObject(e[n])), 'lockStrings' === n && Log.log(n);
      return t;
    }),
    (window.config = {
      language: 'en',
      logLevel: ['INFO', 'LOG', 'WARN', 'ERROR'],
      timeFormat: 24,
      units: 'metric',
    }),
    (e.start = function (e, t, i) {
      try {
        return (
          n('Starting Magic Mirror module initialization for', i),
          (function (e, t) {
            l[e] = t;
          })(i, e),
          Promise.resolve(
            (function (e, t) {
              try {
                var n = [];
                return (
                  t.forEach(function (t) {
                    var i = new Promise(function (n) {
                      var i = document.createElement('script');
                      (i.src = e.http.PREFIX + '/module/' + t + '.js'),
                        (i.type = 'text/javascript'),
                        (i.onload = function () {
                          return n();
                        }),
                        document.body.appendChild(i);
                    });
                    n.push(i);
                  }),
                  Promise.resolve(Promise.all(n)).then(function () {})
                );
              } catch (e) {
                return Promise.reject(e);
              }
            })(e, [i])
          ).then(function () {
            e.registerComponent(t, x);
            var n = e.messages.subscribe(function (e) {
              window.Module.triggerSocketNotification(e.key, e.payload);
            });
            window.Module.setSocketDispatch(n[0]);
          })
        );
      } catch (e) {
        return Promise.reject(e);
      }
    });
});
//# sourceMappingURL=web.umd.js.map
