//swiper-bundle.js
! function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).Swiper = t()
}(this, function () {
    "use strict";

    function e(e, t) {
        for (var i = 0; i < t.length; i++) {
            var s = t[i];
            s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
        }
    }

    function t() {
        return (t = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var i = arguments[t];
                for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s])
            }
            return e
        }).apply(this, arguments)
    }

    function i(e) {
        return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object
    }

    function s(e, t) {
        void 0 === e && (e = {}), void 0 === t && (t = {}), Object.keys(t).forEach(function (a) {
            void 0 === e[a] ? e[a] = t[a] : i(t[a]) && i(e[a]) && Object.keys(t[a]).length > 0 && s(e[a], t[a])
        })
    }
    var a = {
        body: {},
        addEventListener: function () { },
        removeEventListener: function () { },
        activeElement: {
            blur: function () { },
            nodeName: ""
        },
        querySelector: function () {
            return null
        },
        querySelectorAll: function () {
            return []
        },
        getElementById: function () {
            return null
        },
        createEvent: function () {
            return {
                initEvent: function () { }
            }
        },
        createElement: function () {
            return {
                children: [],
                childNodes: [],
                style: {},
                setAttribute: function () { },
                getElementsByTagName: function () {
                    return []
                }
            }
        },
        createElementNS: function () {
            return {}
        },
        importNode: function () {
            return null
        },
        location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: ""
        }
    };

    function r() {
        var e = "undefined" != typeof document ? document : {};
        return s(e, a), e
    }
    var n = {
        document: a,
        navigator: {
            userAgent: ""
        },
        location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: ""
        },
        history: {
            replaceState: function () { },
            pushState: function () { },
            go: function () { },
            back: function () { }
        },
        CustomEvent: function () {
            return this
        },
        addEventListener: function () { },
        removeEventListener: function () { },
        getComputedStyle: function () {
            return {
                getPropertyValue: function () {
                    return ""
                }
            }
        },
        Image: function () { },
        Date: function () { },
        screen: {},
        setTimeout: function () { },
        clearTimeout: function () { },
        matchMedia: function () {
            return {}
        },
        requestAnimationFrame: function (e) {
            return "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0)
        },
        cancelAnimationFrame: function (e) {
            "undefined" != typeof setTimeout && clearTimeout(e)
        }
    };

    function l() {
        var e = "undefined" != typeof window ? window : {};
        return s(e, n), e
    }

    function o(e) {
        return (o = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function d(e, t) {
        return (d = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function h(e, t, i) {
        return (h = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function () { })), !0
            } catch (e) {
                return !1
            }
        }() ? Reflect.construct : function (e, t, i) {
            var s = [null];
            s.push.apply(s, t);
            var a = new (Function.bind.apply(e, s));
            return i && d(a, i.prototype), a
        }).apply(null, arguments)
    }

    function p(e) {
        var t = "function" == typeof Map ? new Map : void 0;
        return (p = function (e) {
            if (null === e || (i = e, -1 === Function.toString.call(i).indexOf("[native code]"))) return e;
            var i;
            if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
            if (void 0 !== t) {
                if (t.has(e)) return t.get(e);
                t.set(e, s)
            }

            function s() {
                return h(e, arguments, o(this).constructor)
            }
            return s.prototype = Object.create(e.prototype, {
                constructor: {
                    value: s,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), d(s, e)
        })(e)
    }
    var u = function (e) {
        var t, i;

        function s(t) {
            var i, s, a;
            return i = e.call.apply(e, [this].concat(t)) || this, s = function (e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(i), a = s.__proto__, Object.defineProperty(s, "__proto__", {
                get: function () {
                    return a
                },
                set: function (e) {
                    a.__proto__ = e
                }
            }), i
        }
        return i = e, (t = s).prototype = Object.create(i.prototype), t.prototype.constructor = t, t.__proto__ = i, s
    }(p(Array));

    function c(e) {
        void 0 === e && (e = []);
        var t = [];
        return e.forEach(function (e) {
            Array.isArray(e) ? t.push.apply(t, c(e)) : t.push(e)
        }), t
    }

    function v(e, t) {
        return Array.prototype.filter.call(e, t)
    }

    function f(e, t) {
        var i = l(),
            s = r(),
            a = [];
        if (!t && e instanceof u) return e;
        if (!e) return new u(a);
        if ("string" == typeof e) {
            var n = e.trim();
            if (n.indexOf("<") >= 0 && n.indexOf(">") >= 0) {
                var o = "div";
                0 === n.indexOf("<li") && (o = "ul"), 0 === n.indexOf("<tr") && (o = "tbody"), 0 !== n.indexOf("<td") && 0 !== n.indexOf("<th") || (o = "tr"), 0 === n.indexOf("<tbody") && (o = "table"), 0 === n.indexOf("<option") && (o = "select");
                var d = s.createElement(o);
                d.innerHTML = n;
                for (var h = 0; h < d.childNodes.length; h += 1) a.push(d.childNodes[h])
            } else a = function (e, t) {
                if ("string" != typeof e) return [e];
                for (var i = [], s = t.querySelectorAll(e), a = 0; a < s.length; a += 1) i.push(s[a]);
                return i
            }(e.trim(), t || s)
        } else if (e.nodeType || e === i || e === s) a.push(e);
        else if (Array.isArray(e)) {
            if (e instanceof u) return e;
            a = e
        }
        return new u(function (e) {
            for (var t = [], i = 0; i < e.length; i += 1) - 1 === t.indexOf(e[i]) && t.push(e[i]);
            return t
        }(a))
    }
    f.fn = u.prototype;
    var m, g, b, y = {
        addClass: function () {
            for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
            var s = c(t.map(function (e) {
                return e.split(" ")
            }));
            return this.forEach(function (e) {
                var t;
                (t = e.classList).add.apply(t, s)
            }), this
        },
        removeClass: function () {
            for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
            var s = c(t.map(function (e) {
                return e.split(" ")
            }));
            return this.forEach(function (e) {
                var t;
                (t = e.classList).remove.apply(t, s)
            }), this
        },
        hasClass: function () {
            for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
            var s = c(t.map(function (e) {
                return e.split(" ")
            }));
            return v(this, function (e) {
                return s.filter(function (t) {
                    return e.classList.contains(t)
                }).length > 0
            }).length > 0
        },
        toggleClass: function () {
            for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
            var s = c(t.map(function (e) {
                return e.split(" ")
            }));
            this.forEach(function (e) {
                s.forEach(function (t) {
                    e.classList.toggle(t)
                })
            })
        },
        attr: function (e, t) {
            if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
            for (var i = 0; i < this.length; i += 1)
                if (2 === arguments.length) this[i].setAttribute(e, t);
                else
                    for (var s in e) this[i][s] = e[s], this[i].setAttribute(s, e[s]);
            return this
        },
        removeAttr: function (e) {
            for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
            return this
        },
        transform: function (e) {
            for (var t = 0; t < this.length; t += 1) this[t].style.transform = e;
            return this
        },
        transition: function (e) {
            for (var t = 0; t < this.length; t += 1) this[t].style.transitionDuration = "string" != typeof e ? e + "ms" : e;
            return this
        },
        on: function () {
            for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
            var s = t[0],
                a = t[1],
                r = t[2],
                n = t[3];

            function l(e) {
                var t = e.target;
                if (t) {
                    var i = e.target.dom7EventData || [];
                    if (i.indexOf(e) < 0 && i.unshift(e), f(t).is(a)) r.apply(t, i);
                    else
                        for (var s = f(t).parents(), n = 0; n < s.length; n += 1) f(s[n]).is(a) && r.apply(s[n], i)
                }
            }

            function o(e) {
                var t = e && e.target && e.target.dom7EventData || [];
                t.indexOf(e) < 0 && t.unshift(e), r.apply(this, t)
            }
            "function" == typeof t[1] && (s = t[0], r = t[1], n = t[2], a = void 0), n || (n = !1);
            for (var d, h = s.split(" "), p = 0; p < this.length; p += 1) {
                var u = this[p];
                if (a)
                    for (d = 0; d < h.length; d += 1) {
                        var c = h[d];
                        u.dom7LiveListeners || (u.dom7LiveListeners = {}), u.dom7LiveListeners[c] || (u.dom7LiveListeners[c] = []), u.dom7LiveListeners[c].push({
                            listener: r,
                            proxyListener: l
                        }), u.addEventListener(c, l, n)
                    } else
                    for (d = 0; d < h.length; d += 1) {
                        var v = h[d];
                        u.dom7Listeners || (u.dom7Listeners = {}), u.dom7Listeners[v] || (u.dom7Listeners[v] = []), u.dom7Listeners[v].push({
                            listener: r,
                            proxyListener: o
                        }), u.addEventListener(v, o, n)
                    }
            }
            return this
        },
        off: function () {
            for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
            var s = t[0],
                a = t[1],
                r = t[2],
                n = t[3];
            "function" == typeof t[1] && (s = t[0], r = t[1], n = t[2], a = void 0), n || (n = !1);
            for (var l = s.split(" "), o = 0; o < l.length; o += 1)
                for (var d = l[o], h = 0; h < this.length; h += 1) {
                    var p = this[h],
                        u = void 0;
                    if (!a && p.dom7Listeners ? u = p.dom7Listeners[d] : a && p.dom7LiveListeners && (u = p.dom7LiveListeners[d]), u && u.length)
                        for (var c = u.length - 1; c >= 0; c -= 1) {
                            var v = u[c];
                            r && v.listener === r ? (p.removeEventListener(d, v.proxyListener, n), u.splice(c, 1)) : r && v.listener && v.listener.dom7proxy && v.listener.dom7proxy === r ? (p.removeEventListener(d, v.proxyListener, n), u.splice(c, 1)) : r || (p.removeEventListener(d, v.proxyListener, n), u.splice(c, 1))
                        }
                }
            return this
        },
        trigger: function () {
            for (var e = l(), t = arguments.length, i = new Array(t), s = 0; s < t; s++) i[s] = arguments[s];
            for (var a = i[0].split(" "), r = i[1], n = 0; n < a.length; n += 1)
                for (var o = a[n], d = 0; d < this.length; d += 1) {
                    var h = this[d];
                    if (e.CustomEvent) {
                        var p = new e.CustomEvent(o, {
                            detail: r,
                            bubbles: !0,
                            cancelable: !0
                        });
                        h.dom7EventData = i.filter(function (e, t) {
                            return t > 0
                        }), h.dispatchEvent(p), h.dom7EventData = [], delete h.dom7EventData
                    }
                }
            return this
        },
        transitionEnd: function (e) {
            var t = this;
            return e && t.on("transitionend", function i(s) {
                s.target === this && (e.call(this, s), t.off("transitionend", i))
            }), this
        },
        outerWidth: function (e) {
            if (this.length > 0) {
                if (e) {
                    var t = this.styles();
                    return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"))
                }
                return this[0].offsetWidth
            }
            return null
        },
        outerHeight: function (e) {
            if (this.length > 0) {
                if (e) {
                    var t = this.styles();
                    return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"))
                }
                return this[0].offsetHeight
            }
            return null
        },
        styles: function () {
            var e = l();
            return this[0] ? e.getComputedStyle(this[0], null) : {}
        },
        offset: function () {
            if (this.length > 0) {
                var e = l(),
                    t = r(),
                    i = this[0],
                    s = i.getBoundingClientRect(),
                    a = t.body,
                    n = i.clientTop || a.clientTop || 0,
                    o = i.clientLeft || a.clientLeft || 0,
                    d = i === e ? e.scrollY : i.scrollTop,
                    h = i === e ? e.scrollX : i.scrollLeft;
                return {
                    top: s.top + d - n,
                    left: s.left + h - o
                }
            }
            return null
        },
        css: function (e, t) {
            var i, s = l();
            if (1 === arguments.length) {
                if ("string" != typeof e) {
                    for (i = 0; i < this.length; i += 1)
                        for (var a in e) this[i].style[a] = e[a];
                    return this
                }
                if (this[0]) return s.getComputedStyle(this[0], null).getPropertyValue(e)
            }
            if (2 === arguments.length && "string" == typeof e) {
                for (i = 0; i < this.length; i += 1) this[i].style[e] = t;
                return this
            }
            return this
        },
        each: function (e) {
            return e ? (this.forEach(function (t, i) {
                e.apply(t, [t, i])
            }), this) : this
        },
        html: function (e) {
            if (void 0 === e) return this[0] ? this[0].innerHTML : null;
            for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
            return this
        },
        text: function (e) {
            if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
            for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
            return this
        },
        is: function (e) {
            var t, i, s = l(),
                a = r(),
                n = this[0];
            if (!n || void 0 === e) return !1;
            if ("string" == typeof e) {
                if (n.matches) return n.matches(e);
                if (n.webkitMatchesSelector) return n.webkitMatchesSelector(e);
                if (n.msMatchesSelector) return n.msMatchesSelector(e);
                for (t = f(e), i = 0; i < t.length; i += 1)
                    if (t[i] === n) return !0;
                return !1
            }
            if (e === a) return n === a;
            if (e === s) return n === s;
            if (e.nodeType || e instanceof u) {
                for (t = e.nodeType ? [e] : e, i = 0; i < t.length; i += 1)
                    if (t[i] === n) return !0;
                return !1
            }
            return !1
        },
        index: function () {
            var e, t = this[0];
            if (t) {
                for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
                return e
            }
        },
        eq: function (e) {
            if (void 0 === e) return this;
            var t = this.length;
            if (e > t - 1) return f([]);
            if (e < 0) {
                var i = t + e;
                return f(i < 0 ? [] : [this[i]])
            }
            return f([this[e]])
        },
        append: function () {
            for (var e, t = r(), i = 0; i < arguments.length; i += 1) {
                e = i < 0 || arguments.length <= i ? void 0 : arguments[i];
                for (var s = 0; s < this.length; s += 1)
                    if ("string" == typeof e) {
                        var a = t.createElement("div");
                        for (a.innerHTML = e; a.firstChild;) this[s].appendChild(a.firstChild)
                    } else if (e instanceof u)
                        for (var n = 0; n < e.length; n += 1) this[s].appendChild(e[n]);
                    else this[s].appendChild(e)
            }
            return this
        },
        prepend: function (e) {
            var t, i, s = r();
            for (t = 0; t < this.length; t += 1)
                if ("string" == typeof e) {
                    var a = s.createElement("div");
                    for (a.innerHTML = e, i = a.childNodes.length - 1; i >= 0; i -= 1) this[t].insertBefore(a.childNodes[i], this[t].childNodes[0])
                } else if (e instanceof u)
                    for (i = 0; i < e.length; i += 1) this[t].insertBefore(e[i], this[t].childNodes[0]);
                else this[t].insertBefore(e, this[t].childNodes[0]);
            return this
        },
        next: function (e) {
            return this.length > 0 ? e ? this[0].nextElementSibling && f(this[0].nextElementSibling).is(e) ? f([this[0].nextElementSibling]) : f([]) : this[0].nextElementSibling ? f([this[0].nextElementSibling]) : f([]) : f([])
        },
        nextAll: function (e) {
            var t = [],
                i = this[0];
            if (!i) return f([]);
            for (; i.nextElementSibling;) {
                var s = i.nextElementSibling;
                e ? f(s).is(e) && t.push(s) : t.push(s), i = s
            }
            return f(t)
        },
        prev: function (e) {
            if (this.length > 0) {
                var t = this[0];
                return e ? t.previousElementSibling && f(t.previousElementSibling).is(e) ? f([t.previousElementSibling]) : f([]) : t.previousElementSibling ? f([t.previousElementSibling]) : f([])
            }
            return f([])
        },
        prevAll: function (e) {
            var t = [],
                i = this[0];
            if (!i) return f([]);
            for (; i.previousElementSibling;) {
                var s = i.previousElementSibling;
                e ? f(s).is(e) && t.push(s) : t.push(s), i = s
            }
            return f(t)
        },
        parent: function (e) {
            for (var t = [], i = 0; i < this.length; i += 1) null !== this[i].parentNode && (e ? f(this[i].parentNode).is(e) && t.push(this[i].parentNode) : t.push(this[i].parentNode));
            return f(t)
        },
        parents: function (e) {
            for (var t = [], i = 0; i < this.length; i += 1)
                for (var s = this[i].parentNode; s;) e ? f(s).is(e) && t.push(s) : t.push(s), s = s.parentNode;
            return f(t)
        },
        closest: function (e) {
            var t = this;
            return void 0 === e ? f([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
        },
        find: function (e) {
            for (var t = [], i = 0; i < this.length; i += 1) {
                try {
                    var s = this[i].querySelectorAll(e)
                } catch (t) {
                    console.log(e)
                }
                for (var a = 0; a < s.length; a += 1) t.push(s[a])
            }
            return f(t)
        },
        children: function (e) {
            for (var t = [], i = 0; i < this.length; i += 1)
                for (var s = this[i].children, a = 0; a < s.length; a += 1) e && !f(s[a]).is(e) || t.push(s[a]);
            return f(t)
        },
        filter: function (e) {
            return f(v(this, e))
        },
        remove: function () {
            for (var e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
            return this
        }
    };

    function w(e, t) {
        return void 0 === t && (t = 0), setTimeout(e, t)
    }

    function E() {
        return Date.now()
    }

    function x(e, t) {
        void 0 === t && (t = "x");
        var i, s, a, r = l(),
            n = function (e) {
                var t, i = l();
                return i.getComputedStyle && (t = i.getComputedStyle(e, null)), !t && e.currentStyle && (t = e.currentStyle), t || (t = e.style), t
            }(e);
        return r.WebKitCSSMatrix ? ((s = n.transform || n.webkitTransform).split(",").length > 6 && (s = s.split(", ").map(function (e) {
            return e.replace(",", ".")
        }).join(", ")), a = new r.WebKitCSSMatrix("none" === s ? "" : s)) : i = (a = n.MozTransform || n.OTransform || n.MsTransform || n.msTransform || n.transform || n.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (s = r.WebKitCSSMatrix ? a.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])), "y" === t && (s = r.WebKitCSSMatrix ? a.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])), s || 0
    }

    function T(e) {
        return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
    }

    function C() {
        for (var e = Object(arguments.length <= 0 ? void 0 : arguments[0]), t = ["__proto__", "constructor", "prototype"], i = 1; i < arguments.length; i += 1) {
            var s = i < 0 || arguments.length <= i ? void 0 : arguments[i];
            if (null != s)
                for (var a = Object.keys(Object(s)).filter(function (e) {
                    return t.indexOf(e) < 0
                }), r = 0, n = a.length; r < n; r += 1) {
                    var l = a[r],
                        o = Object.getOwnPropertyDescriptor(s, l);
                    void 0 !== o && o.enumerable && (T(e[l]) && T(s[l]) ? s[l].__swiper__ ? e[l] = s[l] : C(e[l], s[l]) : !T(e[l]) && T(s[l]) ? (e[l] = {}, s[l].__swiper__ ? e[l] = s[l] : C(e[l], s[l])) : e[l] = s[l])
                }
        }
        return e
    }

    function S(e, t) {
        Object.keys(t).forEach(function (i) {
            T(t[i]) && Object.keys(t[i]).forEach(function (s) {
                "function" == typeof t[i][s] && (t[i][s] = t[i][s].bind(e))
            }), e[i] = t[i]
        })
    }

    function M(e) {
        return void 0 === e && (e = ""), "." + e.trim().replace(/([\.:\/])/g, "\\$1").replace(/ /g, ".")
    }

    function z() {
        var e, t;
        return m || (e = l(), t = r(), m = {
            touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch),
            pointerEvents: !!e.PointerEvent && "maxTouchPoints" in e.navigator && e.navigator.maxTouchPoints >= 0,
            observer: "MutationObserver" in e || "WebkitMutationObserver" in e,
            passiveListener: function () {
                var t = !1;
                try {
                    var i = Object.defineProperty({}, "passive", {
                        get: function () {
                            t = !0
                        }
                    });
                    e.addEventListener("testPassiveListener", null, i)
                } catch (e) { }
                return t
            }(),
            gestures: "ongesturestart" in e
        }), m
    }

    function P(e) {
        return void 0 === e && (e = {}), g || (g = function (e) {
            var t = (void 0 === e ? {} : e).userAgent,
                i = z(),
                s = l(),
                a = s.navigator.platform,
                r = t || s.navigator.userAgent,
                n = {
                    ios: !1,
                    android: !1
                },
                o = s.screen.width,
                d = s.screen.height,
                h = r.match(/(Android);?[\s\/]+([\d.]+)?/),
                p = r.match(/(iPad).*OS\s([\d_]+)/),
                u = r.match(/(iPod)(.*OS\s([\d_]+))?/),
                c = !p && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                v = "Win32" === a,
                f = "MacIntel" === a;
            return !p && f && i.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(o + "x" + d) >= 0 && ((p = r.match(/(Version)\/([\d.]+)/)) || (p = [0, 1, "13_0_0"]), f = !1), h && !v && (n.os = "android", n.android = !0), (p || c || u) && (n.os = "ios", n.ios = !0), n
        }(e)), g
    }

    function k() {
        var e, t;
        return b || (t = l(), b = {
            isEdge: !!t.navigator.userAgent.match(/Edge/g),
            isSafari: (e = t.navigator.userAgent.toLowerCase(), e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0),
            isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent)
        }), b
    }
    Object.keys(y).forEach(function (e) {
        Object.defineProperty(f.fn, e, {
            value: y[e],
            writable: !0
        })
    });
    var $ = {
        name: "resize",
        create: function () {
            var e = this;
            C(e, {
                resize: {
                    observer: null,
                    createObserver: function () {
                        e && !e.destroyed && e.initialized && (e.resize.observer = new ResizeObserver(function (t) {
                            var i = e.width,
                                s = e.height,
                                a = i,
                                r = s;
                            t.forEach(function (t) {
                                var i = t.contentBoxSize,
                                    s = t.contentRect,
                                    n = t.target;
                                n && n !== e.el || (a = s ? s.width : (i[0] || i).inlineSize, r = s ? s.height : (i[0] || i).blockSize)
                            }), a === i && r === s || e.resize.resizeHandler()
                        }), e.resize.observer.observe(e.el))
                    },
                    removeObserver: function () {
                        e.resize.observer && e.resize.observer.unobserve && e.el && (e.resize.observer.unobserve(e.el), e.resize.observer = null)
                    },
                    resizeHandler: function () {
                        e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"))
                    },
                    orientationChangeHandler: function () {
                        e && !e.destroyed && e.initialized && e.emit("orientationchange")
                    }
                }
            })
        },
        on: {
            init: function (e) {
                var t = l();
                e.params.resizeObserver && void 0 !== l().ResizeObserver ? e.resize.createObserver() : (t.addEventListener("resize", e.resize.resizeHandler), t.addEventListener("orientationchange", e.resize.orientationChangeHandler))
            },
            destroy: function (e) {
                var t = l();
                e.resize.removeObserver(), t.removeEventListener("resize", e.resize.resizeHandler), t.removeEventListener("orientationchange", e.resize.orientationChangeHandler)
            }
        }
    },
        L = {
            attach: function (e, t) {
                void 0 === t && (t = {});
                var i = l(),
                    s = this,
                    a = new (i.MutationObserver || i.WebkitMutationObserver)(function (e) {
                        if (1 !== e.length) {
                            var t = function () {
                                s.emit("observerUpdate", e[0])
                            };
                            i.requestAnimationFrame ? i.requestAnimationFrame(t) : i.setTimeout(t, 0)
                        } else s.emit("observerUpdate", e[0])
                    });
                a.observe(e, {
                    attributes: void 0 === t.attributes || t.attributes,
                    childList: void 0 === t.childList || t.childList,
                    characterData: void 0 === t.characterData || t.characterData
                }), s.observer.observers.push(a)
            },
            init: function () {
                if (this.support.observer && this.params.observer) {
                    if (this.params.observeParents)
                        for (var e = this.$el.parents(), t = 0; t < e.length; t += 1) this.observer.attach(e[t]);
                    this.observer.attach(this.$el[0], {
                        childList: this.params.observeSlideChildren
                    }), this.observer.attach(this.$wrapperEl[0], {
                        attributes: !1
                    })
                }
            },
            destroy: function () {
                this.observer.observers.forEach(function (e) {
                    e.disconnect()
                }), this.observer.observers = []
            }
        },
        I = {
            name: "observer",
            params: {
                observer: !1,
                observeParents: !1,
                observeSlideChildren: !1
            },
            create: function () {
                S(this, {
                    observer: t({}, L, {
                        observers: []
                    })
                })
            },
            on: {
                init: function (e) {
                    e.observer.init()
                },
                destroy: function (e) {
                    e.observer.destroy()
                }
            }
        };

    function O() {
        var e = this.params,
            t = this.el;
        if (!t || 0 !== t.offsetWidth) {
            e.breakpoints && this.setBreakpoint();
            var i = this.allowSlideNext,
                s = this.allowSlidePrev,
                a = this.snapGrid;
            this.allowSlideNext = !0, this.allowSlidePrev = !0, this.updateSize(), this.updateSlides(), this.updateSlidesClasses(), ("auto" === e.slidesPerView || e.slidesPerView > 1) && this.isEnd && !this.isBeginning && !this.params.centeredSlides ? this.slideTo(this.slides.length - 1, 0, !1, !0) : this.slideTo(this.activeIndex, 0, !1, !0), this.autoplay && this.autoplay.running && this.autoplay.paused && this.autoplay.run(), this.allowSlidePrev = s, this.allowSlideNext = i, this.params.watchOverflow && a !== this.snapGrid && this.checkOverflow()
        }
    }
    var A = !1;

    function D() { }
    var N = {
        init: !0,
        direction: "horizontal",
        touchEventsTarget: "container",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !1,
        nested: !1,
        enabled: !0,
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        freeMode: !1,
        freeModeMomentum: !0,
        freeModeMomentumRatio: 1,
        freeModeMomentumBounce: !0,
        freeModeMomentumBounceRatio: 1,
        freeModeMomentumVelocityRatio: 1,
        freeModeSticky: !1,
        freeModeMinimumVelocity: .02,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerColumnFill: "column",
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !1,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: .5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: .85,
        watchSlidesProgress: !1,
        watchSlidesVisibility: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        Loop: !1,
        LoopAdditionalSlides: 0,
        LoopedSlides: null,
        LoopFillGroupWithBlank: !1,
        LoopPreventsSlide: !0,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        containerModifierClass: "swiper-container-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-invisible-blank",
        slideActiveClass: "swiper-slide-active",
        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
        slideVisibleClass: "swiper-slide-visible",
        slideDuplicateClass: "swiper-slide-duplicate",
        slideNextClass: "swiper-slide-next",
        slideDuplicateNextClass: "swiper-slide-duplicate-next",
        slidePrevClass: "swiper-slide-prev",
        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
        wrapperClass: "swiper-wrapper",
        runCallbacksOnInit: !0,
        _emitClasses: !1
    },
        G = {
            modular: {
                useParams: function (e) {
                    var t = this;
                    t.modules && Object.keys(t.modules).forEach(function (i) {
                        var s = t.modules[i];
                        s.params && C(e, s.params)
                    })
                },
                useModules: function (e) {
                    void 0 === e && (e = {});
                    var t = this;
                    t.modules && Object.keys(t.modules).forEach(function (i) {
                        var s = t.modules[i],
                            a = e[i] || {};
                        s.on && t.on && Object.keys(s.on).forEach(function (e) {
                            t.on(e, s.on[e])
                        }), s.create && s.create.bind(t)(a)
                    })
                }
            },
            eventsEmitter: {
                on: function (e, t, i) {
                    var s = this;
                    if ("function" != typeof t) return s;
                    var a = i ? "unshift" : "push";
                    return e.split(" ").forEach(function (e) {
                        s.eventsListeners[e] || (s.eventsListeners[e] = []), s.eventsListeners[e][a](t)
                    }), s
                },
                once: function (e, t, i) {
                    var s = this;
                    if ("function" != typeof t) return s;

                    function a() {
                        s.off(e, a), a.__emitterProxy && delete a.__emitterProxy;
                        for (var i = arguments.length, r = new Array(i), n = 0; n < i; n++) r[n] = arguments[n];
                        t.apply(s, r)
                    }
                    return a.__emitterProxy = t, s.on(e, a, i)
                },
                onAny: function (e, t) {
                    if ("function" != typeof e) return this;
                    var i = t ? "unshift" : "push";
                    return this.eventsAnyListeners.indexOf(e) < 0 && this.eventsAnyListeners[i](e), this
                },
                offAny: function (e) {
                    if (!this.eventsAnyListeners) return this;
                    var t = this.eventsAnyListeners.indexOf(e);
                    return t >= 0 && this.eventsAnyListeners.splice(t, 1), this
                },
                off: function (e, t) {
                    var i = this;
                    return i.eventsListeners ? (e.split(" ").forEach(function (e) {
                        void 0 === t ? i.eventsListeners[e] = [] : i.eventsListeners[e] && i.eventsListeners[e].forEach(function (s, a) {
                            (s === t || s.__emitterProxy && s.__emitterProxy === t) && i.eventsListeners[e].splice(a, 1)
                        })
                    }), i) : i
                },
                emit: function () {
                    var e, t, i, s = this;
                    if (!s.eventsListeners) return s;
                    for (var a = arguments.length, r = new Array(a), n = 0; n < a; n++) r[n] = arguments[n];
                    return "string" == typeof r[0] || Array.isArray(r[0]) ? (e = r[0], t = r.slice(1, r.length), i = s) : (e = r[0].events, t = r[0].data, i = r[0].context || s), t.unshift(i), (Array.isArray(e) ? e : e.split(" ")).forEach(function (e) {
                        s.eventsAnyListeners && s.eventsAnyListeners.length && s.eventsAnyListeners.forEach(function (s) {
                            s.apply(i, [e].concat(t))
                        }), s.eventsListeners && s.eventsListeners[e] && s.eventsListeners[e].forEach(function (e) {
                            e.apply(i, t)
                        })
                    }), s
                }
            },
            update: {
                updateSize: function () {
                    var e, t, i = this.$el;
                    e = void 0 !== this.params.width && null !== this.params.width ? this.params.width : i[0].clientWidth, t = void 0 !== this.params.height && null !== this.params.height ? this.params.height : i[0].clientHeight, 0 === e && this.isHorizontal() || 0 === t && this.isVertical() || (e = e - parseInt(i.css("padding-left") || 0, 10) - parseInt(i.css("padding-right") || 0, 10), t = t - parseInt(i.css("padding-top") || 0, 10) - parseInt(i.css("padding-bottom") || 0, 10), Number.isNaN(e) && (e = 0), Number.isNaN(t) && (t = 0), C(this, {
                        width: e,
                        height: t,
                        size: this.isHorizontal() ? e : t
                    }))
                },
                updateSlides: function () {
                    var e = this;

                    function t(t) {
                        return e.isHorizontal() ? t : {
                            width: "height",
                            "margin-top": "margin-left",
                            "margin-bottom ": "margin-right",
                            "margin-left": "margin-top",
                            "margin-right": "margin-bottom",
                            "padding-left": "padding-top",
                            "padding-right": "padding-bottom",
                            marginRight: "marginBottom"
                        }[t]
                    }

                    function i(e, i) {
                        return parseFloat(e.getPropertyValue(t(i)) || 0)
                    }
                    var s = e.params,
                        a = e.$wrapperEl,
                        r = e.size,
                        n = e.rtlTranslate,
                        l = e.wrongRTL,
                        o = e.virtual && s.virtual.enabled,
                        d = o ? e.virtual.slides.length : e.slides.length,
                        h = a.children("." + e.params.slideClass),
                        p = o ? e.virtual.slides.length : h.length,
                        u = [],
                        c = [],
                        v = [],
                        f = s.slidesOffsetBefore;
                    "function" == typeof f && (f = s.slidesOffsetBefore.call(e));
                    var m = s.slidesOffsetAfter;
                    "function" == typeof m && (m = s.slidesOffsetAfter.call(e));
                    var g = e.snapGrid.length,
                        b = e.slidesGrid.length,
                        y = s.spaceBetween,
                        w = -f,
                        E = 0,
                        x = 0;
                    if (void 0 !== r) {
                        var T, S;
                        "string" == typeof y && y.indexOf("%") >= 0 && (y = parseFloat(y.replace("%", "")) / 100 * r), e.virtualSize = -y, n ? h.css({
                            marginLeft: "",
                            marginTop: ""
                        }) : h.css({
                            marginRight: "",
                            marginBottom: ""
                        }), s.slidesPerColumn > 1 && (T = Math.floor(p / s.slidesPerColumn) === p / e.params.slidesPerColumn ? p : Math.ceil(p / s.slidesPerColumn) * s.slidesPerColumn, "auto" !== s.slidesPerView && "row" === s.slidesPerColumnFill && (T = Math.max(T, s.slidesPerView * s.slidesPerColumn)));
                        for (var M, z, P, k = s.slidesPerColumn, $ = T / k, L = Math.floor(p / s.slidesPerColumn), I = 0; I < p; I += 1) {
                            S = 0;
                            var O = h.eq(I);
                            if (s.slidesPerColumn > 1) {
                                var A = void 0,
                                    D = void 0,
                                    N = void 0;
                                if ("row" === s.slidesPerColumnFill && s.slidesPerGroup > 1) {
                                    var G = Math.floor(I / (s.slidesPerGroup * s.slidesPerColumn)),
                                        B = I - s.slidesPerColumn * s.slidesPerGroup * G,
                                        H = 0 === G ? s.slidesPerGroup : Math.min(Math.ceil((p - G * k * s.slidesPerGroup) / k), s.slidesPerGroup);
                                    A = (D = B - (N = Math.floor(B / H)) * H + G * s.slidesPerGroup) + N * T / k, O.css({
                                        "-webkit-box-ordinal-group": A,
                                        "-moz-box-ordinal-group": A,
                                        "-ms-flex-order": A,
                                        "-webkit-order": A,
                                        order: A
                                    })
                                } else "column" === s.slidesPerColumnFill ? (N = I - (D = Math.floor(I / k)) * k, (D > L || D === L && N === k - 1) && (N += 1) >= k && (N = 0, D += 1)) : D = I - (N = Math.floor(I / $)) * $;
                                O.css(t("margin-top"), 0 !== N && s.spaceBetween && s.spaceBetween + "px")
                            }
                            if ("none" !== O.css("display")) {
                                if ("auto" === s.slidesPerView) {
                                    var X = getComputedStyle(O[0]),
                                        Y = O[0].style.transform,
                                        R = O[0].style.webkitTransform;
                                    if (Y && (O[0].style.transform = "none"), R && (O[0].style.webkitTransform = "none"), s.roundLengths) S = e.isHorizontal() ? O.outerWidth(!0) : O.outerHeight(!0);
                                    else {
                                        var W = i(X, "width"),
                                            V = i(X, "padding-left"),
                                            F = i(X, "padding-right"),
                                            _ = i(X, "margin-left"),
                                            q = i(X, "margin-right"),
                                            j = X.getPropertyValue("box-sizing");
                                        if (j && "border-box" === j) S = W + _ + q;
                                        else {
                                            var U = O[0],
                                                K = U.clientWidth;
                                            S = W + V + F + _ + q + (U.offsetWidth - K)
                                        }
                                    }
                                    Y && (O[0].style.transform = Y), R && (O[0].style.webkitTransform = R), s.roundLengths && (S = Math.floor(S))
                                } else S = (r - (s.slidesPerView - 1) * y) / s.slidesPerView, s.roundLengths && (S = Math.floor(S)), h[I] && (h[I].style[t("width")] = S + "px");
                                h[I] && (h[I].swiperSlideSize = S), v.push(S), s.centeredSlides ? (w = w + S / 2 + E / 2 + y, 0 === E && 0 !== I && (w = w - r / 2 - y), 0 === I && (w = w - r / 2 - y), Math.abs(w) < .001 && (w = 0), s.roundLengths && (w = Math.floor(w)), x % s.slidesPerGroup == 0 && u.push(w), c.push(w)) : (s.roundLengths && (w = Math.floor(w)), (x - Math.min(e.params.slidesPerGroupSkip, x)) % e.params.slidesPerGroup == 0 && u.push(w), c.push(w), w = w + S + y), e.virtualSize += S + y, E = S, x += 1
                            }
                        }
                        if (e.virtualSize = Math.max(e.virtualSize, r) + m, n && l && ("slide" === s.effect || "coverflow" === s.effect) && a.css({
                            width: e.virtualSize + s.spaceBetween + "px"
                        }), s.setWrapperSize && a.css(((z = {})[t("width")] = e.virtualSize + s.spaceBetween + "px", z)), s.slidesPerColumn > 1 && (e.virtualSize = (S + s.spaceBetween) * T, e.virtualSize = Math.ceil(e.virtualSize / s.slidesPerColumn) - s.spaceBetween, a.css(((P = {})[t("width")] = e.virtualSize + s.spaceBetween + "px", P)), s.centeredSlides)) {
                            M = [];
                            for (var Z = 0; Z < u.length; Z += 1) {
                                var J = u[Z];
                                s.roundLengths && (J = Math.floor(J)), u[Z] < e.virtualSize + u[0] && M.push(J)
                            }
                            u = M
                        }
                        if (!s.centeredSlides) {
                            M = [];
                            for (var Q = 0; Q < u.length; Q += 1) {
                                var ee = u[Q];
                                s.roundLengths && (ee = Math.floor(ee)), u[Q] <= e.virtualSize - r && M.push(ee)
                            }
                            u = M, Math.floor(e.virtualSize - r) - Math.floor(u[u.length - 1]) > 1 && u.push(e.virtualSize - r)
                        }
                        if (0 === u.length && (u = [0]), 0 !== s.spaceBetween) {
                            var te, ie = e.isHorizontal() && n ? "marginLeft" : t("marginRight");
                            h.filter(function (e, t) {
                                return !s.cssMode || t !== h.length - 1
                            }).css(((te = {})[ie] = y + "px", te))
                        }
                        if (s.centeredSlides && s.centeredSlidesBounds) {
                            var se = 0;
                            v.forEach(function (e) {
                                se += e + (s.spaceBetween ? s.spaceBetween : 0)
                            });
                            var ae = (se -= s.spaceBetween) - r;
                            u = u.map(function (e) {
                                return e < 0 ? -f : e > ae ? ae + m : e
                            })
                        }
                        if (s.centerInsufficientSlides) {
                            var re = 0;
                            if (v.forEach(function (e) {
                                re += e + (s.spaceBetween ? s.spaceBetween : 0)
                            }), (re -= s.spaceBetween) < r) {
                                var ne = (r - re) / 2;
                                u.forEach(function (e, t) {
                                    u[t] = e - ne
                                }), c.forEach(function (e, t) {
                                    c[t] = e + ne
                                })
                            }
                        }
                        C(e, {
                            slides: h,
                            snapGrid: u,
                            slidesGrid: c,
                            slidesSizesGrid: v
                        }), p !== d && e.emit("slidesLengthChange"), u.length !== g && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), c.length !== b && e.emit("slidesGridLengthChange"), (s.watchSlidesProgress || s.watchSlidesVisibility) && e.updateSlidesOffset()
                    }
                },
                updateAutoHeight: function (e) {
                    var t, i = this,
                        s = [],
                        a = i.virtual && i.params.virtual.enabled,
                        r = 0;
                    "number" == typeof e ? i.setTransition(e) : !0 === e && i.setTransition(i.params.speed);
                    var n = function (e) {
                        return a ? i.slides.filter(function (t) {
                            return parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e
                        })[0] : i.slides.eq(e)[0]
                    };
                    if ("auto" !== i.params.slidesPerView && i.params.slidesPerView > 1)
                        if (i.params.centeredSlides) i.visibleSlides.each(function (e) {
                            s.push(e)
                        });
                        else
                            for (t = 0; t < Math.ceil(i.params.slidesPerView); t += 1) {
                                var l = i.activeIndex + t;
                                if (l > i.slides.length && !a) break;
                                s.push(n(l))
                            } else s.push(n(i.activeIndex));
                    for (t = 0; t < s.length; t += 1)
                        if (void 0 !== s[t]) {
                            var o = s[t].offsetHeight;
                            r = o > r ? o : r
                        } r && i.$wrapperEl.css("height", r + "px")
                },
                updateSlidesOffset: function () {
                    for (var e = this.slides, t = 0; t < e.length; t += 1) e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop
                },
                updateSlidesProgress: function (e) {
                    void 0 === e && (e = this && this.translate || 0);
                    var t = this.params,
                        i = this.slides,
                        s = this.rtlTranslate;
                    if (0 !== i.length) {
                        void 0 === i[0].swiperSlideOffset && this.updateSlidesOffset();
                        var a = -e;
                        s && (a = e), i.removeClass(t.slideVisibleClass), this.visibleSlidesIndexes = [], this.visibleSlides = [];
                        for (var r = 0; r < i.length; r += 1) {
                            var n = i[r],
                                l = (a + (t.centeredSlides ? this.minTranslate() : 0) - n.swiperSlideOffset) / (n.swiperSlideSize + t.spaceBetween);
                            if (t.watchSlidesVisibility || t.centeredSlides && t.autoHeight) {
                                var o = -(a - n.swiperSlideOffset),
                                    d = o + this.slidesSizesGrid[r];
                                (o >= 0 && o < this.size - 1 || d > 1 && d <= this.size || o <= 0 && d >= this.size) && (this.visibleSlides.push(n), this.visibleSlidesIndexes.push(r), i.eq(r).addClass(t.slideVisibleClass))
                            }
                            n.progress = s ? -l : l
                        }
                        this.visibleSlides = f(this.visibleSlides)
                    }
                },
                updateProgress: function (e) {
                    if (void 0 === e) {
                        var t = this.rtlTranslate ? -1 : 1;
                        e = this && this.translate && this.translate * t || 0
                    }
                    var i = this.params,
                        s = this.maxTranslate() - this.minTranslate(),
                        a = this.progress,
                        r = this.isBeginning,
                        n = this.isEnd,
                        l = r,
                        o = n;
                    0 === s ? (a = 0, r = !0, n = !0) : (r = (a = (e - this.minTranslate()) / s) <= 0, n = a >= 1), C(this, {
                        progress: a,
                        isBeginning: r,
                        isEnd: n
                    }), (i.watchSlidesProgress || i.watchSlidesVisibility || i.centeredSlides && i.autoHeight) && this.updateSlidesProgress(e), r && !l && this.emit("reachBeginning toEdge"), n && !o && this.emit("reachEnd toEdge"), (l && !r || o && !n) && this.emit("fromEdge"), this.emit("progress", a)
                },
                updateSlidesClasses: function () {
                    var e, t = this.slides,
                        i = this.params,
                        s = this.$wrapperEl,
                        a = this.activeIndex,
                        r = this.realIndex,
                        n = this.virtual && i.virtual.enabled;
                    t.removeClass(i.slideActiveClass + " " + i.slideNextClass + " " + i.slidePrevClass + " " + i.slideDuplicateActiveClass + " " + i.slideDuplicateNextClass + " " + i.slideDuplicatePrevClass), (e = n ? this.$wrapperEl.find("." + i.slideClass + '[data-swiper-slide-index="' + a + '"]') : t.eq(a)).addClass(i.slideActiveClass), i.Loop && (e.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + r + '"]').addClass(i.slideDuplicateActiveClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + r + '"]').addClass(i.slideDuplicateActiveClass));
                    var l = e.nextAll("." + i.slideClass).eq(0).addClass(i.slideNextClass);
                    i.Loop && 0 === l.length && (l = t.eq(0)).addClass(i.slideNextClass);
                    var o = e.prevAll("." + i.slideClass).eq(0).addClass(i.slidePrevClass);
                    i.Loop && 0 === o.length && (o = t.eq(-1)).addClass(i.slidePrevClass), i.Loop && (l.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass), o.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass)), this.emitSlidesClasses()
                },
                updateActiveIndex: function (e) {
                    var t, i = this.rtlTranslate ? this.translate : -this.translate,
                        s = this.slidesGrid,
                        a = this.snapGrid,
                        r = this.params,
                        n = this.activeIndex,
                        l = this.realIndex,
                        o = this.snapIndex,
                        d = e;
                    if (void 0 === d) {
                        for (var h = 0; h < s.length; h += 1) void 0 !== s[h + 1] ? i >= s[h] && i < s[h + 1] - (s[h + 1] - s[h]) / 2 ? d = h : i >= s[h] && i < s[h + 1] && (d = h + 1) : i >= s[h] && (d = h);
                        r.normalizeSlideIndex && (d < 0 || void 0 === d) && (d = 0)
                    }
                    if (a.indexOf(i) >= 0) t = a.indexOf(i);
                    else {
                        var p = Math.min(r.slidesPerGroupSkip, d);
                        t = p + Math.floor((d - p) / r.slidesPerGroup)
                    }
                    if (t >= a.length && (t = a.length - 1), d !== n) {
                        var u = parseInt(this.slides.eq(d).attr("data-swiper-slide-index") || d, 10);
                        C(this, {
                            snapIndex: t,
                            realIndex: u,
                            previousIndex: n,
                            activeIndex: d
                        }), this.emit("activeIndexChange"), this.emit("snapIndexChange"), l !== u && this.emit("realIndexChange"), (this.initialized || this.params.runCallbacksOnInit) && this.emit("slideChange")
                    } else t !== o && (this.snapIndex = t, this.emit("snapIndexChange"))
                },
                updateClickedSlide: function (e) {
                    var t, i = this.params,
                        s = f(e.target).closest("." + i.slideClass)[0],
                        a = !1;
                    if (s)
                        for (var r = 0; r < this.slides.length; r += 1)
                            if (this.slides[r] === s) {
                                a = !0, t = r;
                                break
                            } if (!s || !a) return this.clickedSlide = void 0, void (this.clickedIndex = void 0);
                    this.clickedSlide = s, this.virtual && this.params.virtual.enabled ? this.clickedIndex = parseInt(f(s).attr("data-swiper-slide-index"), 10) : this.clickedIndex = t, i.slideToClickedSlide && void 0 !== this.clickedIndex && this.clickedIndex !== this.activeIndex && this.slideToClickedSlide()
                }
            },
            translate: {
                getTranslate: function (e) {
                    void 0 === e && (e = this.isHorizontal() ? "x" : "y");
                    var t = this.params,
                        i = this.rtlTranslate,
                        s = this.translate,
                        a = this.$wrapperEl;
                    if (t.virtualTranslate) return i ? -s : s;
                    if (t.cssMode) return s;
                    var r = x(a[0], e);
                    return i && (r = -r), r || 0
                },
                setTranslate: function (e, t) {
                    var i = this.rtlTranslate,
                        s = this.params,
                        a = this.$wrapperEl,
                        r = this.wrapperEl,
                        n = this.progress,
                        l = 0,
                        o = 0;
                    this.isHorizontal() ? l = i ? -e : e : o = e, s.roundLengths && (l = Math.floor(l), o = Math.floor(o)), s.cssMode ? r[this.isHorizontal() ? "scrollLeft" : "scrollTop"] = this.isHorizontal() ? -l : -o : s.virtualTranslate || a.transform("translate3d(" + l + "px, " + o + "px, 0px)"), this.previousTranslate = this.translate, this.translate = this.isHorizontal() ? l : o;
                    var d = this.maxTranslate() - this.minTranslate();
                    (0 === d ? 0 : (e - this.minTranslate()) / d) !== n && this.updateProgress(e), this.emit("setTranslate", this.translate, t)
                },
                minTranslate: function () {
                    return -this.snapGrid[0]
                },
                maxTranslate: function () {
                    return -this.snapGrid[this.snapGrid.length - 1]
                },
                translateTo: function (e, t, i, s, a) {
                    void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0), void 0 === s && (s = !0);
                    var r = this,
                        n = r.params,
                        l = r.wrapperEl;
                    if (r.animating && n.preventInteractionOnTransition) return !1;
                    var o, d = r.minTranslate(),
                        h = r.maxTranslate();
                    if (o = s && e > d ? d : s && e < h ? h : e, r.updateProgress(o), n.cssMode) {
                        var p, u = r.isHorizontal();
                        return 0 === t ? l[u ? "scrollLeft" : "scrollTop"] = -o : l.scrollTo ? l.scrollTo(((p = {})[u ? "left" : "top"] = -o, p.behavior = "smooth", p)) : l[u ? "scrollLeft" : "scrollTop"] = -o, !0
                    }
                    return 0 === t ? (r.setTransition(0), r.setTranslate(o), i && (r.emit("beforeTransitionStart", t, a), r.emit("transitionEnd"))) : (r.setTransition(t), r.setTranslate(o), i && (r.emit("beforeTransitionStart", t, a), r.emit("transitionStart")), r.animating || (r.animating = !0, r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function (e) {
                        r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd), r.onTranslateToWrapperTransitionEnd = null, delete r.onTranslateToWrapperTransitionEnd, i && r.emit("transitionEnd"))
                    }), r.$wrapperEl[0].addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd))), !0
                }
            },
            transition: {
                setTransition: function (e, t) {
                    this.params.cssMode || this.$wrapperEl.transition(e), this.emit("setTransition", e, t)
                },
                transitionStart: function (e, t) {
                    void 0 === e && (e = !0);
                    var i = this.activeIndex,
                        s = this.params,
                        a = this.previousIndex;
                    if (!s.cssMode) {
                        s.autoHeight && this.updateAutoHeight();
                        var r = t;
                        if (r || (r = i > a ? "next" : i < a ? "prev" : "reset"), this.emit("transitionStart"), e && i !== a) {
                            if ("reset" === r) return void this.emit("slideResetTransitionStart");
                            this.emit("slideChangeTransitionStart"), "next" === r ? this.emit("slideNextTransitionStart") : this.emit("slidePrevTransitionStart")
                        }
                    }
                },
                transitionEnd: function (e, t) {
                    void 0 === e && (e = !0);
                    var i = this.activeIndex,
                        s = this.previousIndex,
                        a = this.params;
                    if (this.animating = !1, !a.cssMode) {
                        this.setTransition(0);
                        var r = t;
                        if (r || (r = i > s ? "next" : i < s ? "prev" : "reset"), this.emit("transitionEnd"), e && i !== s) {
                            if ("reset" === r) return void this.emit("slideResetTransitionEnd");
                            this.emit("slideChangeTransitionEnd"), "next" === r ? this.emit("slideNextTransitionEnd") : this.emit("slidePrevTransitionEnd")
                        }
                    }
                }
            },
            slide: {
                slideTo: function (e, t, i, s, a) {
                    if (void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0), "number" != typeof e && "string" != typeof e) throw new Error("The 'index' argument cannot have type other than 'number' or 'string'. [" + typeof e + "] given.");
                    if ("string" == typeof e) {
                        var r = parseInt(e, 10);
                        if (!isFinite(r)) throw new Error("The passed-in 'index' (string) couldn't be converted to 'number'. [" + e + "] given.");
                        e = r
                    }
                    var n = this,
                        l = e;
                    l < 0 && (l = 0);
                    var o = n.params,
                        d = n.snapGrid,
                        h = n.slidesGrid,
                        p = n.previousIndex,
                        u = n.activeIndex,
                        c = n.rtlTranslate,
                        v = n.wrapperEl,
                        f = n.enabled;
                    if (n.animating && o.preventInteractionOnTransition || !f && !s && !a) return !1;
                    var m = Math.min(n.params.slidesPerGroupSkip, l),
                        g = m + Math.floor((l - m) / n.params.slidesPerGroup);
                    g >= d.length && (g = d.length - 1), (u || o.initialSlide || 0) === (p || 0) && i && n.emit("beforeSlideChangeStart");
                    var b, y = -d[g];
                    if (n.updateProgress(y), o.normalizeSlideIndex)
                        for (var w = 0; w < h.length; w += 1) {
                            var E = -Math.floor(100 * y),
                                x = Math.floor(100 * h[w]),
                                T = Math.floor(100 * h[w + 1]);
                            void 0 !== h[w + 1] ? E >= x && E < T - (T - x) / 2 ? l = w : E >= x && E < T && (l = w + 1) : E >= x && (l = w)
                        }
                    if (n.initialized && l !== u) {
                        if (!n.allowSlideNext && y < n.translate && y < n.minTranslate()) return !1;
                        if (!n.allowSlidePrev && y > n.translate && y > n.maxTranslate() && (u || 0) !== l) return !1
                    }
                    if (b = l > u ? "next" : l < u ? "prev" : "reset", c && -y === n.translate || !c && y === n.translate) return n.updateActiveIndex(l), o.autoHeight && n.updateAutoHeight(), n.updateSlidesClasses(), "slide" !== o.effect && n.setTranslate(y), "reset" !== b && (n.transitionStart(i, b), n.transitionEnd(i, b)), !1;
                    if (o.cssMode) {
                        var C, S = n.isHorizontal(),
                            M = -y;
                        return c && (M = v.scrollWidth - v.offsetWidth - M), 0 === t ? v[S ? "scrollLeft" : "scrollTop"] = M : v.scrollTo ? v.scrollTo(((C = {})[S ? "left" : "top"] = M, C.behavior = "smooth", C)) : v[S ? "scrollLeft" : "scrollTop"] = M, !0
                    }
                    return 0 === t ? (n.setTransition(0), n.setTranslate(y), n.updateActiveIndex(l), n.updateSlidesClasses(), n.emit("beforeTransitionStart", t, s), n.transitionStart(i, b), n.transitionEnd(i, b)) : (n.setTransition(t), n.setTranslate(y), n.updateActiveIndex(l), n.updateSlidesClasses(), n.emit("beforeTransitionStart", t, s), n.transitionStart(i, b), n.animating || (n.animating = !0, n.onSlideToWrapperTransitionEnd || (n.onSlideToWrapperTransitionEnd = function (e) {
                        n && !n.destroyed && e.target === this && (n.$wrapperEl[0].removeEventListener("transitionend", n.onSlideToWrapperTransitionEnd), n.$wrapperEl[0].removeEventListener("webkitTransitionEnd", n.onSlideToWrapperTransitionEnd), n.onSlideToWrapperTransitionEnd = null, delete n.onSlideToWrapperTransitionEnd, n.transitionEnd(i, b))
                    }), n.$wrapperEl[0].addEventListener("transitionend", n.onSlideToWrapperTransitionEnd), n.$wrapperEl[0].addEventListener("webkitTransitionEnd", n.onSlideToWrapperTransitionEnd))), !0
                },
                slideToLoop: function (e, t, i, s) {
                    void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
                    var a = e;
                    return this.params.Loop && (a += this.LoopedSlides), this.slideTo(a, t, i, s)
                },
                slideNext: function (e, t, i) {
                    void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                    var s = this.params,
                        a = this.animating;
                    if (!this.enabled) return this;
                    var r = this.activeIndex < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup;
                    if (s.Loop) {
                        if (a && s.LoopPreventsSlide) return !1;
                        this.LoopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft
                    }
                    return this.slideTo(this.activeIndex + r, e, t, i)
                },
                slidePrev: function (e, t, i) {
                    void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                    var s = this.params,
                        a = this.animating,
                        r = this.snapGrid,
                        n = this.slidesGrid,
                        l = this.rtlTranslate;
                    if (!this.enabled) return this;
                    if (s.Loop) {
                        if (a && s.LoopPreventsSlide) return !1;
                        this.LoopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft
                    }

                    function o(e) {
                        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
                    }
                    var d = o(l ? this.translate : -this.translate),
                        h = r.map(function (e) {
                            return o(e)
                        });
                    r[h.indexOf(d)];
                    var p, u = r[h.indexOf(d) - 1];
                    return void 0 === u && s.cssMode && r.forEach(function (e) {
                        !u && d >= e && (u = e)
                    }), void 0 !== u && (p = n.indexOf(u)) < 0 && (p = this.activeIndex - 1), this.slideTo(p, e, t, i)
                },
                slideReset: function (e, t, i) {
                    return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, i)
                },
                slideToClosest: function (e, t, i, s) {
                    void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === s && (s = .5);
                    var a = this.activeIndex,
                        r = Math.min(this.params.slidesPerGroupSkip, a),
                        n = r + Math.floor((a - r) / this.params.slidesPerGroup),
                        l = this.rtlTranslate ? this.translate : -this.translate;
                    if (l >= this.snapGrid[n]) {
                        var o = this.snapGrid[n];
                        l - o > (this.snapGrid[n + 1] - o) * s && (a += this.params.slidesPerGroup)
                    } else {
                        var d = this.snapGrid[n - 1];
                        l - d <= (this.snapGrid[n] - d) * s && (a -= this.params.slidesPerGroup)
                    }
                    return a = Math.max(a, 0), a = Math.min(a, this.slidesGrid.length - 1), this.slideTo(a, e, t, i)
                },
                slideToClickedSlide: function () {
                    var e, t = this,
                        i = t.params,
                        s = t.$wrapperEl,
                        a = "auto" === i.slidesPerView ? t.slidesPerViewDynamic() : i.slidesPerView,
                        r = t.clickedIndex;
                    if (i.Loop) {
                        if (t.animating) return;
                        e = parseInt(f(t.clickedSlide).attr("data-swiper-slide-index"), 10), i.centeredSlides ? r < t.LoopedSlides - a / 2 || r > t.slides.length - t.LoopedSlides + a / 2 ? (t.LoopFix(), r = s.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), w(function () {
                            t.slideTo(r)
                        })) : t.slideTo(r) : r > t.slides.length - a ? (t.LoopFix(), r = s.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), w(function () {
                            t.slideTo(r)
                        })) : t.slideTo(r)
                    } else t.slideTo(r)
                }
            },
            Loop: {
                LoopCreate: function () {
                    var e = this,
                        t = r(),
                        i = e.params,
                        s = e.$wrapperEl;
                    s.children("." + i.slideClass + "." + i.slideDuplicateClass).remove();
                    var a = s.children("." + i.slideClass);
                    if (i.LoopFillGroupWithBlank) {
                        var n = i.slidesPerGroup - a.length % i.slidesPerGroup;
                        if (n !== i.slidesPerGroup) {
                            for (var l = 0; l < n; l += 1) {
                                var o = f(t.createElement("div")).addClass(i.slideClass + " " + i.slideBlankClass);
                                s.append(o)
                            }
                            a = s.children("." + i.slideClass)
                        }
                    }
                    "auto" !== i.slidesPerView || i.LoopedSlides || (i.LoopedSlides = a.length), e.LoopedSlides = Math.ceil(parseFloat(i.LoopedSlides || i.slidesPerView, 10)), e.LoopedSlides += i.LoopAdditionalSlides, e.LoopedSlides > a.length && (e.LoopedSlides = a.length);
                    var d = [],
                        h = [];
                    a.each(function (t, i) {
                        var s = f(t);
                        i < e.LoopedSlides && h.push(t), i < a.length && i >= a.length - e.LoopedSlides && d.push(t), s.attr("data-swiper-slide-index", i)
                    });
                    for (var p = 0; p < h.length; p += 1) s.append(f(h[p].cloneNode(!0)).addClass(i.slideDuplicateClass));
                    for (var u = d.length - 1; u >= 0; u -= 1) s.prepend(f(d[u].cloneNode(!0)).addClass(i.slideDuplicateClass))
                },
                LoopFix: function () {
                    this.emit("beforeLoopFix");
                    var e, t = this.activeIndex,
                        i = this.slides,
                        s = this.LoopedSlides,
                        a = this.allowSlidePrev,
                        r = this.allowSlideNext,
                        n = this.snapGrid,
                        l = this.rtlTranslate;
                    this.allowSlidePrev = !0, this.allowSlideNext = !0;
                    var o = -n[t] - this.getTranslate();
                    t < s ? (e = i.length - 3 * s + t, e += s, this.slideTo(e, 0, !1, !0) && 0 !== o && this.setTranslate((l ? -this.translate : this.translate) - o)) : t >= i.length - s && (e = -i.length + t + s, e += s, this.slideTo(e, 0, !1, !0) && 0 !== o && this.setTranslate((l ? -this.translate : this.translate) - o));
                    this.allowSlidePrev = a, this.allowSlideNext = r, this.emit("LoopFix")
                },
                LoopDestroy: function () {
                    var e = this.$wrapperEl,
                        t = this.params,
                        i = this.slides;
                    e.children("." + t.slideClass + "." + t.slideDuplicateClass + ",." + t.slideClass + "." + t.slideBlankClass).remove(), i.removeAttr("data-swiper-slide-index")
                }
            },
            grabCursor: {
                setGrabCursor: function (e) {
                    if (!(this.support.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked || this.params.cssMode)) {
                        var t = this.el;
                        t.style.cursor = "move", t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", t.style.cursor = e ? "-moz-grabbin" : "-moz-grab", t.style.cursor = e ? "grabbing" : "grab"
                    }
                },
                unsetGrabCursor: function () {
                    this.support.touch || this.params.watchOverflow && this.isLocked || this.params.cssMode || (this.el.style.cursor = "")
                }
            },
            manipulation: {
                appendSlide: function (e) {
                    var t = this.$wrapperEl,
                        i = this.params;
                    if (i.Loop && this.LoopDestroy(), "object" == typeof e && "length" in e)
                        for (var s = 0; s < e.length; s += 1) e[s] && t.append(e[s]);
                    else t.append(e);
                    i.Loop && this.LoopCreate(), i.observer && this.support.observer || this.update()
                },
                prependSlide: function (e) {
                    var t = this.params,
                        i = this.$wrapperEl,
                        s = this.activeIndex;
                    t.Loop && this.LoopDestroy();
                    var a = s + 1;
                    if ("object" == typeof e && "length" in e) {
                        for (var r = 0; r < e.length; r += 1) e[r] && i.prepend(e[r]);
                        a = s + e.length
                    } else i.prepend(e);
                    t.Loop && this.LoopCreate(), t.observer && this.support.observer || this.update(), this.slideTo(a, 0, !1)
                },
                addSlide: function (e, t) {
                    var i = this.$wrapperEl,
                        s = this.params,
                        a = this.activeIndex;
                    s.Loop && (a -= this.LoopedSlides, this.LoopDestroy(), this.slides = i.children("." + s.slideClass));
                    var r = this.slides.length;
                    if (e <= 0) this.prependSlide(t);
                    else if (e >= r) this.appendSlide(t);
                    else {
                        for (var n = a > e ? a + 1 : a, l = [], o = r - 1; o >= e; o -= 1) {
                            var d = this.slides.eq(o);
                            d.remove(), l.unshift(d)
                        }
                        if ("object" == typeof t && "length" in t) {
                            for (var h = 0; h < t.length; h += 1) t[h] && i.append(t[h]);
                            n = a > e ? a + t.length : a
                        } else i.append(t);
                        for (var p = 0; p < l.length; p += 1) i.append(l[p]);
                        s.Loop && this.LoopCreate(), s.observer && this.support.observer || this.update(), s.Loop ? this.slideTo(n + this.LoopedSlides, 0, !1) : this.slideTo(n, 0, !1)
                    }
                },
                removeSlide: function (e) {
                    var t = this.params,
                        i = this.$wrapperEl,
                        s = this.activeIndex;
                    t.Loop && (s -= this.LoopedSlides, this.LoopDestroy(), this.slides = i.children("." + t.slideClass));
                    var a, r = s;
                    if ("object" == typeof e && "length" in e) {
                        for (var n = 0; n < e.length; n += 1) a = e[n], this.slides[a] && this.slides.eq(a).remove(), a < r && (r -= 1);
                        r = Math.max(r, 0)
                    } else a = e, this.slides[a] && this.slides.eq(a).remove(), a < r && (r -= 1), r = Math.max(r, 0);
                    t.Loop && this.LoopCreate(), t.observer && this.support.observer || this.update(), t.Loop ? this.slideTo(r + this.LoopedSlides, 0, !1) : this.slideTo(r, 0, !1)
                },
                removeAllSlides: function () {
                    for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
                    this.removeSlide(e)
                }
            },
            events: {
                attachEvents: function () {
                    var e = r(),
                        t = this.params,
                        i = this.touchEvents,
                        s = this.el,
                        a = this.wrapperEl,
                        n = this.device,
                        o = this.support;
                    this.onTouchStart = function (e) {
                        var t = r(),
                            i = l(),
                            s = this.touchEventsData,
                            a = this.params,
                            n = this.touches;
                        if (this.enabled && (!this.animating || !a.preventInteractionOnTransition)) {
                            var o = e;
                            o.originalEvent && (o = o.originalEvent);
                            var d = f(o.target);
                            if (("wrapper" !== a.touchEventsTarget || d.closest(this.wrapperEl).length) && (s.isTouchEvent = "touchstart" === o.type, (s.isTouchEvent || !("which" in o) || 3 !== o.which) && !(!s.isTouchEvent && "button" in o && o.button > 0 || s.isTouched && s.isMoved)))
                                if (!!a.noSwipingClass && "" !== a.noSwipingClass && o.target && o.target.shadowRoot && e.path && e.path[0] && (d = f(e.path[0])), a.noSwiping && d.closest(a.noSwipingSelector ? a.noSwipingSelector : "." + a.noSwipingClass)[0]) this.allowClick = !0;
                                else if (!a.swipeHandler || d.closest(a.swipeHandler)[0]) {
                                    n.currentX = "touchstart" === o.type ? o.targetTouches[0].pageX : o.pageX, n.currentY = "touchstart" === o.type ? o.targetTouches[0].pageY : o.pageY;
                                    var h = n.currentX,
                                        p = n.currentY,
                                        u = a.edgeSwipeDetection || a.iOSEdgeSwipeDetection,
                                        c = a.edgeSwipeThreshold || a.iOSEdgeSwipeThreshold;
                                    if (u && (h <= c || h >= i.innerWidth - c)) {
                                        if ("prevent" !== u) return;
                                        e.preventDefault()
                                    }
                                    if (C(s, {
                                        isTouched: !0,
                                        isMoved: !1,
                                        allowTouchCallbacks: !0,
                                        isScrolling: void 0,
                                        startMoving: void 0
                                    }), n.startX = h, n.startY = p, s.touchStartTime = E(), this.allowClick = !0, this.updateSize(), this.swipeDirection = void 0, a.threshold > 0 && (s.allowThresholdMove = !1), "touchstart" !== o.type) {
                                        var v = !0;
                                        d.is(s.formElements) && (v = !1), t.activeElement && f(t.activeElement).is(s.formElements) && t.activeElement !== d[0] && t.activeElement.blur();
                                        var m = v && this.allowTouchMove && a.touchStartPreventDefault;
                                        !a.touchStartForcePreventDefault && !m || d[0].isContentEditable || o.preventDefault()
                                    }
                                    this.emit("touchStart", o)
                                }
                        }
                    }.bind(this), this.onTouchMove = function (e) {
                        var t = r(),
                            i = this.touchEventsData,
                            s = this.params,
                            a = this.touches,
                            n = this.rtlTranslate;
                        if (this.enabled) {
                            var l = e;
                            if (l.originalEvent && (l = l.originalEvent), i.isTouched) {
                                if (!i.isTouchEvent || "touchmove" === l.type) {
                                    var o = "touchmove" === l.type && l.targetTouches && (l.targetTouches[0] || l.changedTouches[0]),
                                        d = "touchmove" === l.type ? o.pageX : l.pageX,
                                        h = "touchmove" === l.type ? o.pageY : l.pageY;
                                    if (l.preventedByNestedSwiper) return a.startX = d, void (a.startY = h);
                                    if (!this.allowTouchMove) return this.allowClick = !1, void (i.isTouched && (C(a, {
                                        startX: d,
                                        startY: h,
                                        currentX: d,
                                        currentY: h
                                    }), i.touchStartTime = E()));
                                    if (i.isTouchEvent && s.touchReleaseOnEdges && !s.Loop)
                                        if (this.isVertical()) {
                                            if (h < a.startY && this.translate <= this.maxTranslate() || h > a.startY && this.translate >= this.minTranslate()) return i.isTouched = !1, void (i.isMoved = !1)
                                        } else if (d < a.startX && this.translate <= this.maxTranslate() || d > a.startX && this.translate >= this.minTranslate()) return;
                                    if (i.isTouchEvent && t.activeElement && l.target === t.activeElement && f(l.target).is(i.formElements)) return i.isMoved = !0, void (this.allowClick = !1);
                                    if (i.allowTouchCallbacks && this.emit("touchMove", l), !(l.targetTouches && l.targetTouches.length > 1)) {
                                        a.currentX = d, a.currentY = h;
                                        var p, u = a.currentX - a.startX,
                                            c = a.currentY - a.startY;
                                        if (!(this.params.threshold && Math.sqrt(Math.pow(u, 2) + Math.pow(c, 2)) < this.params.threshold))
                                            if (void 0 === i.isScrolling && (this.isHorizontal() && a.currentY === a.startY || this.isVertical() && a.currentX === a.startX ? i.isScrolling = !1 : u * u + c * c >= 25 && (p = 180 * Math.atan2(Math.abs(c), Math.abs(u)) / Math.PI, i.isScrolling = this.isHorizontal() ? p > s.touchAngle : 90 - p > s.touchAngle)), i.isScrolling && this.emit("touchMoveOpposite", l), void 0 === i.startMoving && (a.currentX === a.startX && a.currentY === a.startY || (i.startMoving = !0)), i.isScrolling) i.isTouched = !1;
                                            else if (i.startMoving) {
                                                this.allowClick = !1, !s.cssMode && l.cancelable && l.preventDefault(), s.touchMoveStopPropagation && !s.nested && l.stopPropagation(), i.isMoved || (s.Loop && this.LoopFix(), i.startTranslate = this.getTranslate(), this.setTransition(0), this.animating && this.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i.allowMomentumBounce = !1, !s.grabCursor || !0 !== this.allowSlideNext && !0 !== this.allowSlidePrev || this.setGrabCursor(!0), this.emit("sliderFirstMove", l)), this.emit("sliderMove", l), i.isMoved = !0;
                                                var v = this.isHorizontal() ? u : c;
                                                a.diff = v, v *= s.touchRatio, n && (v = -v), this.swipeDirection = v > 0 ? "prev" : "next", i.currentTranslate = v + i.startTranslate;
                                                var m = !0,
                                                    g = s.resistanceRatio;
                                                if (s.touchReleaseOnEdges && (g = 0), v > 0 && i.currentTranslate > this.minTranslate() ? (m = !1, s.resistance && (i.currentTranslate = this.minTranslate() - 1 + Math.pow(-this.minTranslate() + i.startTranslate + v, g))) : v < 0 && i.currentTranslate < this.maxTranslate() && (m = !1, s.resistance && (i.currentTranslate = this.maxTranslate() + 1 - Math.pow(this.maxTranslate() - i.startTranslate - v, g))), m && (l.preventedByNestedSwiper = !0), !this.allowSlideNext && "next" === this.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !this.allowSlidePrev && "prev" === this.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), this.allowSlidePrev || this.allowSlideNext || (i.currentTranslate = i.startTranslate), s.threshold > 0) {
                                                    if (!(Math.abs(v) > s.threshold || i.allowThresholdMove)) return void (i.currentTranslate = i.startTranslate);
                                                    if (!i.allowThresholdMove) return i.allowThresholdMove = !0, a.startX = a.currentX, a.startY = a.currentY, i.currentTranslate = i.startTranslate, void (a.diff = this.isHorizontal() ? a.currentX - a.startX : a.currentY - a.startY)
                                                }
                                                s.followFinger && !s.cssMode && ((s.freeMode || s.watchSlidesProgress || s.watchSlidesVisibility) && (this.updateActiveIndex(), this.updateSlidesClasses()), s.freeMode && (0 === i.velocities.length && i.velocities.push({
                                                    position: a[this.isHorizontal() ? "startX" : "startY"],
                                                    time: i.touchStartTime
                                                }), i.velocities.push({
                                                    position: a[this.isHorizontal() ? "currentX" : "currentY"],
                                                    time: E()
                                                })), this.updateProgress(i.currentTranslate), this.setTranslate(i.currentTranslate))
                                            }
                                    }
                                }
                            } else i.startMoving && i.isScrolling && this.emit("touchMoveOpposite", l)
                        }
                    }.bind(this), this.onTouchEnd = function (e) {
                        var t = this,
                            i = t.touchEventsData,
                            s = t.params,
                            a = t.touches,
                            r = t.rtlTranslate,
                            n = t.$wrapperEl,
                            l = t.slidesGrid,
                            o = t.snapGrid;
                        if (t.enabled) {
                            var d = e;
                            if (d.originalEvent && (d = d.originalEvent), i.allowTouchCallbacks && t.emit("touchEnd", d), i.allowTouchCallbacks = !1, !i.isTouched) return i.isMoved && s.grabCursor && t.setGrabCursor(!1), i.isMoved = !1, void (i.startMoving = !1);
                            s.grabCursor && i.isMoved && i.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
                            var h, p = E(),
                                u = p - i.touchStartTime;
                            if (t.allowClick && (t.updateClickedSlide(d), t.emit("tap click", d), u < 300 && p - i.lastClickTime < 300 && t.emit("doubleTap doubleClick", d)), i.lastClickTime = E(), w(function () {
                                t.destroyed || (t.allowClick = !0)
                            }), !i.isTouched || !i.isMoved || !t.swipeDirection || 0 === a.diff || i.currentTranslate === i.startTranslate) return i.isTouched = !1, i.isMoved = !1, void (i.startMoving = !1);
                            if (i.isTouched = !1, i.isMoved = !1, i.startMoving = !1, h = s.followFinger ? r ? t.translate : -t.translate : -i.currentTranslate, !s.cssMode)
                                if (s.freeMode) {
                                    if (h < -t.minTranslate()) return void t.slideTo(t.activeIndex);
                                    if (h > -t.maxTranslate()) return void (t.slides.length < o.length ? t.slideTo(o.length - 1) : t.slideTo(t.slides.length - 1));
                                    if (s.freeModeMomentum) {
                                        if (i.velocities.length > 1) {
                                            var c = i.velocities.pop(),
                                                v = i.velocities.pop(),
                                                f = c.position - v.position,
                                                m = c.time - v.time;
                                            t.velocity = f / m, t.velocity /= 2, Math.abs(t.velocity) < s.freeModeMinimumVelocity && (t.velocity = 0), (m > 150 || E() - c.time > 300) && (t.velocity = 0)
                                        } else t.velocity = 0;
                                        t.velocity *= s.freeModeMomentumVelocityRatio, i.velocities.length = 0;
                                        var g = 1e3 * s.freeModeMomentumRatio,
                                            b = t.velocity * g,
                                            y = t.translate + b;
                                        r && (y = -y);
                                        var x, T, C = !1,
                                            S = 20 * Math.abs(t.velocity) * s.freeModeMomentumBounceRatio;
                                        if (y < t.maxTranslate()) s.freeModeMomentumBounce ? (y + t.maxTranslate() < -S && (y = t.maxTranslate() - S), x = t.maxTranslate(), C = !0, i.allowMomentumBounce = !0) : y = t.maxTranslate(), s.Loop && s.centeredSlides && (T = !0);
                                        else if (y > t.minTranslate()) s.freeModeMomentumBounce ? (y - t.minTranslate() > S && (y = t.minTranslate() + S), x = t.minTranslate(), C = !0, i.allowMomentumBounce = !0) : y = t.minTranslate(), s.Loop && s.centeredSlides && (T = !0);
                                        else if (s.freeModeSticky) {
                                            for (var M, z = 0; z < o.length; z += 1)
                                                if (o[z] > -y) {
                                                    M = z;
                                                    break
                                                } y = -(y = Math.abs(o[M] - y) < Math.abs(o[M - 1] - y) || "next" === t.swipeDirection ? o[M] : o[M - 1])
                                        }
                                        if (T && t.once("transitionEnd", function () {
                                            t.LoopFix()
                                        }), 0 !== t.velocity) {
                                            if (g = r ? Math.abs((-y - t.translate) / t.velocity) : Math.abs((y - t.translate) / t.velocity), s.freeModeSticky) {
                                                var P = Math.abs((r ? -y : y) - t.translate),
                                                    k = t.slidesSizesGrid[t.activeIndex];
                                                g = P < k ? s.speed : P < 2 * k ? 1.5 * s.speed : 2.5 * s.speed
                                            }
                                        } else if (s.freeModeSticky) return void t.slideToClosest();
                                        s.freeModeMomentumBounce && C ? (t.updateProgress(x), t.setTransition(g), t.setTranslate(y), t.transitionStart(!0, t.swipeDirection), t.animating = !0, n.transitionEnd(function () {
                                            t && !t.destroyed && i.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(s.speed), setTimeout(function () {
                                                t.setTranslate(x), n.transitionEnd(function () {
                                                    t && !t.destroyed && t.transitionEnd()
                                                })
                                            }, 0))
                                        })) : t.velocity ? (t.updateProgress(y), t.setTransition(g), t.setTranslate(y), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, n.transitionEnd(function () {
                                            t && !t.destroyed && t.transitionEnd()
                                        }))) : (t.emit("_freeModeNoMomentumRelease"), t.updateProgress(y)), t.updateActiveIndex(), t.updateSlidesClasses()
                                    } else {
                                        if (s.freeModeSticky) return void t.slideToClosest();
                                        s.freeMode && t.emit("_freeModeNoMomentumRelease")
                                    } (!s.freeModeMomentum || u >= s.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
                                } else {
                                    for (var $ = 0, L = t.slidesSizesGrid[0], I = 0; I < l.length; I += I < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup) {
                                        var O = I < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
                                        void 0 !== l[I + O] ? h >= l[I] && h < l[I + O] && ($ = I, L = l[I + O] - l[I]) : h >= l[I] && ($ = I, L = l[l.length - 1] - l[l.length - 2])
                                    }
                                    var A = (h - l[$]) / L,
                                        D = $ < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
                                    if (u > s.longSwipesMs) {
                                        if (!s.longSwipes) return void t.slideTo(t.activeIndex);
                                        "next" === t.swipeDirection && (A >= s.longSwipesRatio ? t.slideTo($ + D) : t.slideTo($)), "prev" === t.swipeDirection && (A > 1 - s.longSwipesRatio ? t.slideTo($ + D) : t.slideTo($))
                                    } else {
                                        if (!s.shortSwipes) return void t.slideTo(t.activeIndex);
                                        !t.navigation || d.target !== t.navigation.nextEl && d.target !== t.navigation.prevEl ? ("next" === t.swipeDirection && t.slideTo($ + D), "prev" === t.swipeDirection && t.slideTo($)) : d.target === t.navigation.nextEl ? t.slideTo($ + D) : t.slideTo($)
                                    }
                                }
                        }
                    }.bind(this), t.cssMode && (this.onScroll = function () {
                        var e = this.wrapperEl,
                            t = this.rtlTranslate;
                        if (this.enabled) {
                            this.previousTranslate = this.translate, this.isHorizontal() ? this.translate = t ? e.scrollWidth - e.offsetWidth - e.scrollLeft : -e.scrollLeft : this.translate = -e.scrollTop, -0 === this.translate && (this.translate = 0), this.updateActiveIndex(), this.updateSlidesClasses();
                            var i = this.maxTranslate() - this.minTranslate();
                            (0 === i ? 0 : (this.translate - this.minTranslate()) / i) !== this.progress && this.updateProgress(t ? -this.translate : this.translate), this.emit("setTranslate", this.translate, !1)
                        }
                    }.bind(this)), this.onClick = function (e) {
                        this.enabled && (this.allowClick || (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation())))
                    }.bind(this);
                    var d = !!t.nested;
                    if (!o.touch && o.pointerEvents) s.addEventListener(i.start, this.onTouchStart, !1), e.addEventListener(i.move, this.onTouchMove, d), e.addEventListener(i.end, this.onTouchEnd, !1);
                    else {
                        if (o.touch) {
                            var h = !("touchstart" !== i.start || !o.passiveListener || !t.passiveListeners) && {
                                passive: !0,
                                capture: !1
                            };
                            s.addEventListener(i.start, this.onTouchStart, h), s.addEventListener(i.move, this.onTouchMove, o.passiveListener ? {
                                passive: !1,
                                capture: d
                            } : d), s.addEventListener(i.end, this.onTouchEnd, h), i.cancel && s.addEventListener(i.cancel, this.onTouchEnd, h), A || (e.addEventListener("touchstart", D), A = !0)
                        } (t.simulateTouch && !n.ios && !n.android || t.simulateTouch && !o.touch && n.ios) && (s.addEventListener("mousedown", this.onTouchStart, !1), e.addEventListener("mousemove", this.onTouchMove, d), e.addEventListener("mouseup", this.onTouchEnd, !1))
                    } (t.preventClicks || t.preventClicksPropagation) && s.addEventListener("click", this.onClick, !0), t.cssMode && a.addEventListener("scroll", this.onScroll), t.updateOnWindowResize ? this.on(n.ios || n.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", O, !0) : this.on("observerUpdate", O, !0)
                },
                detachEvents: function () {
                    var e = r(),
                        t = this.params,
                        i = this.touchEvents,
                        s = this.el,
                        a = this.wrapperEl,
                        n = this.device,
                        l = this.support,
                        o = !!t.nested;
                    if (!l.touch && l.pointerEvents) s.removeEventListener(i.start, this.onTouchStart, !1), e.removeEventListener(i.move, this.onTouchMove, o), e.removeEventListener(i.end, this.onTouchEnd, !1);
                    else {
                        if (l.touch) {
                            var d = !("onTouchStart" !== i.start || !l.passiveListener || !t.passiveListeners) && {
                                passive: !0,
                                capture: !1
                            };
                            s.removeEventListener(i.start, this.onTouchStart, d), s.removeEventListener(i.move, this.onTouchMove, o), s.removeEventListener(i.end, this.onTouchEnd, d), i.cancel && s.removeEventListener(i.cancel, this.onTouchEnd, d)
                        } (t.simulateTouch && !n.ios && !n.android || t.simulateTouch && !l.touch && n.ios) && (s.removeEventListener("mousedown", this.onTouchStart, !1), e.removeEventListener("mousemove", this.onTouchMove, o), e.removeEventListener("mouseup", this.onTouchEnd, !1))
                    } (t.preventClicks || t.preventClicksPropagation) && s.removeEventListener("click", this.onClick, !0), t.cssMode && a.removeEventListener("scroll", this.onScroll), this.off(n.ios || n.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", O)
                }
            },
            breakpoints: {
                setBreakpoint: function () {
                    var e = this.activeIndex,
                        t = this.initialized,
                        i = this.LoopedSlides,
                        s = void 0 === i ? 0 : i,
                        a = this.params,
                        r = this.$el,
                        n = a.breakpoints;
                    if (n && (!n || 0 !== Object.keys(n).length)) {
                        var l = this.getBreakpoint(n, this.params.breakpointsBase, this.el);
                        if (l && this.currentBreakpoint !== l) {
                            var o = l in n ? n[l] : void 0;
                            o && ["slidesPerView", "spaceBetween", "slidesPerGroup", "slidesPerGroupSkip", "slidesPerColumn"].forEach(function (e) {
                                var t = o[e];
                                void 0 !== t && (o[e] = "slidesPerView" !== e || "AUTO" !== t && "auto" !== t ? "slidesPerView" === e ? parseFloat(t) : parseInt(t, 10) : "auto")
                            });
                            var d = o || this.originalParams,
                                h = a.slidesPerColumn > 1,
                                p = d.slidesPerColumn > 1,
                                u = a.enabled;
                            h && !p ? (r.removeClass(a.containerModifierClass + "multirow " + a.containerModifierClass + "multirow-column"), this.emitContainerClasses()) : !h && p && (r.addClass(a.containerModifierClass + "multirow"), "column" === d.slidesPerColumnFill && r.addClass(a.containerModifierClass + "multirow-column"), this.emitContainerClasses());
                            var c = d.direction && d.direction !== a.direction,
                                v = a.Loop && (d.slidesPerView !== a.slidesPerView || c);
                            c && t && this.changeDirection(), C(this.params, d);
                            var f = this.params.enabled;
                            C(this, {
                                allowTouchMove: this.params.allowTouchMove,
                                allowSlideNext: this.params.allowSlideNext,
                                allowSlidePrev: this.params.allowSlidePrev
                            }), u && !f ? this.disable() : !u && f && this.enable(), this.currentBreakpoint = l, this.emit("_beforeBreakpoint", d), v && t && (this.LoopDestroy(), this.LoopCreate(), this.updateSlides(), this.slideTo(e - s + this.LoopedSlides, 0, !1)), this.emit("breakpoint", d)
                        }
                    }
                },
                getBreakpoint: function (e, t, i) {
                    if (void 0 === t && (t = "window"), e && ("container" !== t || i)) {
                        var s = !1,
                            a = l(),
                            r = "window" === t ? a.innerWidth : i.clientWidth,
                            n = "window" === t ? a.innerHeight : i.clientHeight,
                            o = Object.keys(e).map(function (e) {
                                if ("string" == typeof e && 0 === e.indexOf("@")) {
                                    var t = parseFloat(e.substr(1));
                                    return {
                                        value: n * t,
                                        point: e
                                    }
                                }
                                return {
                                    value: e,
                                    point: e
                                }
                            });
                        o.sort(function (e, t) {
                            return parseInt(e.value, 10) - parseInt(t.value, 10)
                        });
                        for (var d = 0; d < o.length; d += 1) {
                            var h = o[d],
                                p = h.point;
                            h.value <= r && (s = p)
                        }
                        return s || "max"
                    }
                }
            },
            checkOverflow: {
                checkOverflow: function () {
                    var e = this.params,
                        t = this.isLocked,
                        i = this.slides.length > 0 && e.slidesOffsetBefore + e.spaceBetween * (this.slides.length - 1) + this.slides[0].offsetWidth * this.slides.length;
                    e.slidesOffsetBefore && e.slidesOffsetAfter && i ? this.isLocked = i <= this.size : this.isLocked = 1 === this.snapGrid.length, this.allowSlideNext = !this.isLocked, this.allowSlidePrev = !this.isLocked, t !== this.isLocked && this.emit(this.isLocked ? "lock" : "unlock"), t && t !== this.isLocked && (this.isEnd = !1, this.navigation && this.navigation.update())
                }
            },
            classes: {
                addClasses: function () {
                    var e, t, i, s = this.classNames,
                        a = this.params,
                        r = this.rtl,
                        n = this.$el,
                        l = this.device,
                        o = this.support,
                        d = (e = ["initialized", a.direction, {
                            "pointer-events": o.pointerEvents && !o.touch
                        }, {
                                "free-mode": a.freeMode
                            }, {
                                autoheight: a.autoHeight
                            }, {
                                rtl: r
                            }, {
                                multirow: a.slidesPerColumn > 1
                            }, {
                                "multirow-column": a.slidesPerColumn > 1 && "column" === a.slidesPerColumnFill
                            }, {
                                android: l.android
                            }, {
                                ios: l.ios
                            }, {
                                "css-mode": a.cssMode
                            }], t = a.containerModifierClass, i = [], e.forEach(function (e) {
                                "object" == typeof e ? Object.keys(e).forEach(function (s) {
                                    e[s] && i.push(t + s)
                                }) : "string" == typeof e && i.push(t + e)
                            }), i);
                    s.push.apply(s, d), n.addClass([].concat(s).join(" ")), this.emitContainerClasses()
                },
                removeClasses: function () {
                    var e = this.$el,
                        t = this.classNames;
                    e.removeClass(t.join(" ")), this.emitContainerClasses()
                }
            },
            images: {
                loadImage: function (e, t, i, s, a, r) {
                    var n, o = l();

                    function d() {
                        r && r()
                    }
                    f(e).parent("picture")[0] || e.complete && a ? d() : t ? ((n = new o.Image).onload = d, n.onerror = d, s && (n.sizes = s), i && (n.srcset = i), t && (n.src = t)) : d()
                },
                preloadImages: function () {
                    var e = this;

                    function t() {
                        null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
                    }
                    e.imagesToLoad = e.$el.find("img");
                    for (var i = 0; i < e.imagesToLoad.length; i += 1) {
                        var s = e.imagesToLoad[i];
                        e.loadImage(s, s.currentSrc || s.getAttribute("src"), s.srcset || s.getAttribute("srcset"), s.sizes || s.getAttribute("sizes"), !0, t)
                    }
                }
            }
        },
        B = {},
        H = function () {
            function t() {
                for (var e, i, s = arguments.length, a = new Array(s), r = 0; r < s; r++) a[r] = arguments[r];
                if (1 === a.length && a[0].constructor && "Object" === Object.prototype.toString.call(a[0]).slice(8, -1) ? i = a[0] : (e = a[0], i = a[1]), i || (i = {}), i = C({}, i), e && !i.el && (i.el = e), i.el && f(i.el).length > 1) {
                    var n = [];
                    return f(i.el).each(function (e) {
                        var s = C({}, i, {
                            el: e
                        });
                        n.push(new t(s))
                    }), n
                }
                var l = this;
                l.__swiper__ = !0, l.support = z(), l.device = P({
                    userAgent: i.userAgent
                }), l.browser = k(), l.eventsListeners = {}, l.eventsAnyListeners = [], void 0 === l.modules && (l.modules = {}), Object.keys(l.modules).forEach(function (e) {
                    var t = l.modules[e];
                    if (t.params) {
                        var s = Object.keys(t.params)[0],
                            a = t.params[s];
                        if ("object" != typeof a || null === a) return;
                        if (!(s in i && "enabled" in a)) return;
                        !0 === i[s] && (i[s] = {
                            enabled: !0
                        }), "object" != typeof i[s] || "enabled" in i[s] || (i[s].enabled = !0), i[s] || (i[s] = {
                            enabled: !1
                        })
                    }
                });
                var o, d, h = C({}, N);
                return l.useParams(h), l.params = C({}, h, B, i), l.originalParams = C({}, l.params), l.passedParams = C({}, i), l.params && l.params.on && Object.keys(l.params.on).forEach(function (e) {
                    l.on(e, l.params.on[e])
                }), l.params && l.params.onAny && l.onAny(l.params.onAny), l.$ = f, C(l, {
                    enabled: l.params.enabled,
                    el: e,
                    classNames: [],
                    slides: f(),
                    slidesGrid: [],
                    snapGrid: [],
                    slidesSizesGrid: [],
                    isHorizontal: function () {
                        return "horizontal" === l.params.direction
                    },
                    isVertical: function () {
                        return "vertical" === l.params.direction
                    },
                    activeIndex: 0,
                    realIndex: 0,
                    isBeginning: !0,
                    isEnd: !1,
                    translate: 0,
                    previousTranslate: 0,
                    progress: 0,
                    velocity: 0,
                    animating: !1,
                    allowSlideNext: l.params.allowSlideNext,
                    allowSlidePrev: l.params.allowSlidePrev,
                    touchEvents: (o = ["touchstart", "touchmove", "touchend", "touchcancel"], d = ["mousedown", "mousemove", "mouseup"], l.support.pointerEvents && (d = ["pointerdown", "pointermove", "pointerup"]), l.touchEventsTouch = {
                        start: o[0],
                        move: o[1],
                        end: o[2],
                        cancel: o[3]
                    }, l.touchEventsDesktop = {
                        start: d[0],
                        move: d[1],
                        end: d[2]
                    }, l.support.touch || !l.params.simulateTouch ? l.touchEventsTouch : l.touchEventsDesktop),
                    touchEventsData: {
                        isTouched: void 0,
                        isMoved: void 0,
                        allowTouchCallbacks: void 0,
                        touchStartTime: void 0,
                        isScrolling: void 0,
                        currentTranslate: void 0,
                        startTranslate: void 0,
                        allowThresholdMove: void 0,
                        formElements: "input, select, option, textarea, button, video, label",
                        lastClickTime: E(),
                        clickTimeout: void 0,
                        velocities: [],
                        allowMomentumBounce: void 0,
                        isTouchEvent: void 0,
                        startMoving: void 0
                    },
                    allowClick: !0,
                    allowTouchMove: l.params.allowTouchMove,
                    touches: {
                        startX: 0,
                        startY: 0,
                        currentX: 0,
                        currentY: 0,
                        diff: 0
                    },
                    imagesToLoad: [],
                    imagesLoaded: 0
                }), l.useModules(), l.emit("_swiper"), l.params.init && l.init(), l
            }
            var i, s, a, r = t.prototype;
            return r.enable = function () {
                this.enabled || (this.enabled = !0, this.params.grabCursor && this.setGrabCursor(), this.emit("enable"))
            }, r.disable = function () {
                this.enabled && (this.enabled = !1, this.params.grabCursor && this.unsetGrabCursor(), this.emit("disable"))
            }, r.setProgress = function (e, t) {
                e = Math.min(Math.max(e, 0), 1);
                var i = this.minTranslate(),
                    s = (this.maxTranslate() - i) * e + i;
                this.translateTo(s, void 0 === t ? 0 : t), this.updateActiveIndex(), this.updateSlidesClasses()
            }, r.emitContainerClasses = function () {
                var e = this;
                if (e.params._emitClasses && e.el) {
                    var t = e.el.className.split(" ").filter(function (t) {
                        return 0 === t.indexOf("swiper-container") || 0 === t.indexOf(e.params.containerModifierClass)
                    });
                    e.emit("_containerClasses", t.join(" "))
                }
            }, r.getSlideClasses = function (e) {
                var t = this;
                return e.className.split(" ").filter(function (e) {
                    return 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass)
                }).join(" ")
            }, r.emitSlidesClasses = function () {
                var e = this;
                if (e.params._emitClasses && e.el) {
                    var t = [];
                    e.slides.each(function (i) {
                        var s = e.getSlideClasses(i);
                        t.push({
                            slideEl: i,
                            classNames: s
                        }), e.emit("_slideClass", i, s)
                    }), e.emit("_slideClasses", t)
                }
            }, r.slidesPerViewDynamic = function () {
                var e = this.params,
                    t = this.slides,
                    i = this.slidesGrid,
                    s = this.size,
                    a = this.activeIndex,
                    r = 1;
                if (e.centeredSlides) {
                    for (var n, l = t[a].swiperSlideSize, o = a + 1; o < t.length; o += 1) t[o] && !n && (r += 1, (l += t[o].swiperSlideSize) > s && (n = !0));
                    for (var d = a - 1; d >= 0; d -= 1) t[d] && !n && (r += 1, (l += t[d].swiperSlideSize) > s && (n = !0))
                } else
                    for (var h = a + 1; h < t.length; h += 1) i[h] - i[a] < s && (r += 1);
                return r
            }, r.update = function () {
                var e = this;
                if (e && !e.destroyed) {
                    var t = e.snapGrid,
                        i = e.params;
                    i.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode ? (s(), e.params.autoHeight && e.updateAutoHeight()) : (("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0)) || s(), i.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
                }

                function s() {
                    var t = e.rtlTranslate ? -1 * e.translate : e.translate,
                        i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                    e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses()
                }
            }, r.changeDirection = function (e, t) {
                void 0 === t && (t = !0);
                var i = this.params.direction;
                return e || (e = "horizontal" === i ? "vertical" : "horizontal"), e === i || "horizontal" !== e && "vertical" !== e ? this : (this.$el.removeClass("" + this.params.containerModifierClass + i).addClass("" + this.params.containerModifierClass + e), this.emitContainerClasses(), this.params.direction = e, this.slides.each(function (t) {
                    "vertical" === e ? t.style.width = "" : t.style.height = ""
                }), this.emit("changeDirection"), t && this.update(), this)
            }, r.mount = function (e) {
                if (this.mounted) return !0;
                var t, i = f(e || this.params.el);
                return !!(e = i[0]) && (e.swiper = this, e && e.shadowRoot && e.shadowRoot.querySelector ? (t = f(e.shadowRoot.querySelector("." + this.params.wrapperClass))).children = function (e) {
                    return i.children(e)
                } : t = i.children("." + this.params.wrapperClass), C(this, {
                    $el: i,
                    el: e,
                    $wrapperEl: t,
                    wrapperEl: t[0],
                    mounted: !0,
                    rtl: "rtl" === e.dir.toLowerCase() || "rtl" === i.css("direction"),
                    rtlTranslate: "horizontal" === this.params.direction && ("rtl" === e.dir.toLowerCase() || "rtl" === i.css("direction")),
                    wrongRTL: "-webkit-box" === t.css("display")
                }), !0)
            }, r.init = function (e) {
                return this.initialized ? this : !1 === this.mount(e) ? this : (this.emit("beforeInit"), this.params.breakpoints && this.setBreakpoint(), this.addClasses(), this.params.Loop && this.LoopCreate(), this.updateSize(), this.updateSlides(), this.params.watchOverflow && this.checkOverflow(), this.params.grabCursor && this.enabled && this.setGrabCursor(), this.params.preloadImages && this.preloadImages(), this.params.Loop ? this.slideTo(this.params.initialSlide + this.LoopedSlides, 0, this.params.runCallbacksOnInit, !1, !0) : this.slideTo(this.params.initialSlide, 0, this.params.runCallbacksOnInit, !1, !0), this.attachEvents(), this.initialized = !0, this.emit("init"), this.emit("afterInit"), this)
            }, r.destroy = function (e, t) {
                void 0 === e && (e = !0), void 0 === t && (t = !0);
                var i, s = this,
                    a = s.params,
                    r = s.$el,
                    n = s.$wrapperEl,
                    l = s.slides;
                return void 0 === s.params || s.destroyed ? null : (s.emit("beforeDestroy"), s.initialized = !1, s.detachEvents(), a.Loop && s.LoopDestroy(), t && (s.removeClasses(), r.removeAttr("style"), n.removeAttr("style"), l && l.length && l.removeClass([a.slideVisibleClass, a.slideActiveClass, a.slideNextClass, a.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), s.emit("destroy"), Object.keys(s.eventsListeners).forEach(function (e) {
                    s.off(e)
                }), !1 !== e && (s.$el[0].swiper = null, i = s, Object.keys(i).forEach(function (e) {
                    try {
                        i[e] = null
                    } catch (e) { }
                    try {
                        delete i[e]
                    } catch (e) { }
                })), s.destroyed = !0, null)
            }, t.extendDefaults = function (e) {
                C(B, e)
            }, t.installModule = function (e) {
                t.prototype.modules || (t.prototype.modules = {});
                var i = e.name || Object.keys(t.prototype.modules).length + "_" + E();
                t.prototype.modules[i] = e
            }, t.use = function (e) {
                return Array.isArray(e) ? (e.forEach(function (e) {
                    return t.installModule(e)
                }), t) : (t.installModule(e), t)
            }, i = t, a = [{
                key: "extendedDefaults",
                get: function () {
                    return B
                }
            }, {
                key: "defaults",
                get: function () {
                    return N
                }
            }], (s = null) && e(i.prototype, s), a && e(i, a), t
        }();
    Object.keys(G).forEach(function (e) {
        Object.keys(G[e]).forEach(function (t) {
            H.prototype[t] = G[e][t]
        })
    }), H.use([$, I]);
    var X = {
        update: function (e) {
            var t = this,
                i = t.params,
                s = i.slidesPerView,
                a = i.slidesPerGroup,
                r = i.centeredSlides,
                n = t.params.virtual,
                l = n.addSlidesBefore,
                o = n.addSlidesAfter,
                d = t.virtual,
                h = d.from,
                p = d.to,
                u = d.slides,
                c = d.slidesGrid,
                v = d.renderSlide,
                f = d.offset;
            t.updateActiveIndex();
            var m, g, b, y = t.activeIndex || 0;
            m = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top", r ? (g = Math.floor(s / 2) + a + o, b = Math.floor(s / 2) + a + l) : (g = s + (a - 1) + o, b = a + l);
            var w = Math.max((y || 0) - b, 0),
                E = Math.min((y || 0) + g, u.length - 1),
                x = (t.slidesGrid[w] || 0) - (t.slidesGrid[0] || 0);

            function T() {
                t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.lazy && t.params.lazy.enabled && t.lazy.load()
            }
            if (C(t.virtual, {
                from: w,
                to: E,
                offset: x,
                slidesGrid: t.slidesGrid
            }), h === w && p === E && !e) return t.slidesGrid !== c && x !== f && t.slides.css(m, x + "px"), void t.updateProgress();
            if (t.params.virtual.renderExternal) return t.params.virtual.renderExternal.call(t, {
                offset: x,
                from: w,
                to: E,
                slides: function () {
                    for (var e = [], t = w; t <= E; t += 1) e.push(u[t]);
                    return e
                }()
            }), void (t.params.virtual.renderExternalUpdate && T());
            var S = [],
                M = [];
            if (e) t.$wrapperEl.find("." + t.params.slideClass).remove();
            else
                for (var z = h; z <= p; z += 1)(z < w || z > E) && t.$wrapperEl.find("." + t.params.slideClass + '[data-swiper-slide-index="' + z + '"]').remove();
            for (var P = 0; P < u.length; P += 1) P >= w && P <= E && (void 0 === p || e ? M.push(P) : (P > p && M.push(P), P < h && S.push(P)));
            M.forEach(function (e) {
                t.$wrapperEl.append(v(u[e], e))
            }), S.sort(function (e, t) {
                return t - e
            }).forEach(function (e) {
                t.$wrapperEl.prepend(v(u[e], e))
            }), t.$wrapperEl.children(".swiper-slide").css(m, x + "px"), T()
        },
        renderSlide: function (e, t) {
            var i = this.params.virtual;
            if (i.cache && this.virtual.cache[t]) return this.virtual.cache[t];
            var s = i.renderSlide ? f(i.renderSlide.call(this, e, t)) : f('<div class="' + this.params.slideClass + '" data-swiper-slide-index="' + t + '">' + e + "</div>");
            return s.attr("data-swiper-slide-index") || s.attr("data-swiper-slide-index", t), i.cache && (this.virtual.cache[t] = s), s
        },
        appendSlide: function (e) {
            if ("object" == typeof e && "length" in e)
                for (var t = 0; t < e.length; t += 1) e[t] && this.virtual.slides.push(e[t]);
            else this.virtual.slides.push(e);
            this.virtual.update(!0)
        },
        prependSlide: function (e) {
            var t = this.activeIndex,
                i = t + 1,
                s = 1;
            if (Array.isArray(e)) {
                for (var a = 0; a < e.length; a += 1) e[a] && this.virtual.slides.unshift(e[a]);
                i = t + e.length, s = e.length
            } else this.virtual.slides.unshift(e);
            if (this.params.virtual.cache) {
                var r = this.virtual.cache,
                    n = {};
                Object.keys(r).forEach(function (e) {
                    var t = r[e],
                        i = t.attr("data-swiper-slide-index");
                    i && t.attr("data-swiper-slide-index", parseInt(i, 10) + 1), n[parseInt(e, 10) + s] = t
                }), this.virtual.cache = n
            }
            this.virtual.update(!0), this.slideTo(i, 0)
        },
        removeSlide: function (e) {
            if (null != e) {
                var t = this.activeIndex;
                if (Array.isArray(e))
                    for (var i = e.length - 1; i >= 0; i -= 1) this.virtual.slides.splice(e[i], 1), this.params.virtual.cache && delete this.virtual.cache[e[i]], e[i] < t && (t -= 1), t = Math.max(t, 0);
                else this.virtual.slides.splice(e, 1), this.params.virtual.cache && delete this.virtual.cache[e], e < t && (t -= 1), t = Math.max(t, 0);
                this.virtual.update(!0), this.slideTo(t, 0)
            }
        },
        removeAllSlides: function () {
            this.virtual.slides = [], this.params.virtual.cache && (this.virtual.cache = {}), this.virtual.update(!0), this.slideTo(0, 0)
        }
    },
        Y = {
            name: "virtual",
            params: {
                virtual: {
                    enabled: !1,
                    slides: [],
                    cache: !0,
                    renderSlide: null,
                    renderExternal: null,
                    renderExternalUpdate: !0,
                    addSlidesBefore: 0,
                    addSlidesAfter: 0
                }
            },
            create: function () {
                S(this, {
                    virtual: t({}, X, {
                        slides: this.params.virtual.slides,
                        cache: {}
                    })
                })
            },
            on: {
                beforeInit: function (e) {
                    if (e.params.virtual.enabled) {
                        e.classNames.push(e.params.containerModifierClass + "virtual");
                        var t = {
                            watchSlidesProgress: !0
                        };
                        C(e.params, t), C(e.originalParams, t), e.params.initialSlide || e.virtual.update()
                    }
                },
                setTranslate: function (e) {
                    e.params.virtual.enabled && e.virtual.update()
                }
            }
        },
        R = {
            handle: function (e) {
                if (this.enabled) {
                    var t = l(),
                        i = r(),
                        s = this.rtlTranslate,
                        a = e;
                    a.originalEvent && (a = a.originalEvent);
                    var n = a.keyCode || a.charCode,
                        o = this.params.keyboard.pageUpDown,
                        d = o && 33 === n,
                        h = o && 34 === n,
                        p = 37 === n,
                        u = 39 === n,
                        c = 38 === n,
                        v = 40 === n;
                    if (!this.allowSlideNext && (this.isHorizontal() && u || this.isVertical() && v || h)) return !1;
                    if (!this.allowSlidePrev && (this.isHorizontal() && p || this.isVertical() && c || d)) return !1;
                    if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey || i.activeElement && i.activeElement.nodeName && ("input" === i.activeElement.nodeName.toLowerCase() || "textarea" === i.activeElement.nodeName.toLowerCase()))) {
                        if (this.params.keyboard.onlyInViewport && (d || h || p || u || c || v)) {
                            var f = !1;
                            if (this.$el.parents("." + this.params.slideClass).length > 0 && 0 === this.$el.parents("." + this.params.slideActiveClass).length) return;
                            var m = this.$el,
                                g = m[0].clientWidth,
                                b = m[0].clientHeight,
                                y = t.innerWidth,
                                w = t.innerHeight,
                                E = this.$el.offset();
                            s && (E.left -= this.$el[0].scrollLeft);
                            for (var x = [
                                [E.left, E.top],
                                [E.left + g, E.top],
                                [E.left, E.top + b],
                                [E.left + g, E.top + b]
                            ], T = 0; T < x.length; T += 1) {
                                var C = x[T];
                                if (C[0] >= 0 && C[0] <= y && C[1] >= 0 && C[1] <= w) {
                                    if (0 === C[0] && 0 === C[1]) continue;
                                    f = !0
                                }
                            }
                            if (!f) return
                        }
                        this.isHorizontal() ? ((d || h || p || u) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), ((h || u) && !s || (d || p) && s) && this.slideNext(), ((d || p) && !s || (h || u) && s) && this.slidePrev()) : ((d || h || c || v) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), (h || v) && this.slideNext(), (d || c) && this.slidePrev()), this.emit("keyPress", n)
                    }
                }
            },
            enable: function () {
                var e = r();
                this.keyboard.enabled || (f(e).on("keydown", this.keyboard.handle), this.keyboard.enabled = !0)
            },
            disable: function () {
                var e = r();
                this.keyboard.enabled && (f(e).off("keydown", this.keyboard.handle), this.keyboard.enabled = !1)
            }
        },
        W = {
            name: "keyboard",
            params: {
                keyboard: {
                    enabled: !1,
                    onlyInViewport: !0,
                    pageUpDown: !0
                }
            },
            create: function () {
                S(this, {
                    keyboard: t({
                        enabled: !1
                    }, R)
                })
            },
            on: {
                init: function (e) {
                    e.params.keyboard.enabled && e.keyboard.enable()
                },
                destroy: function (e) {
                    e.keyboard.enabled && e.keyboard.disable()
                }
            }
        };
    var V = {
        lastScrollTime: E(),
        lastEventBeforeSnap: void 0,
        recentWheelEvents: [],
        event: function () {
            return l().navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : function () {
                var e = r(),
                    t = "onwheel" in e;
                if (!t) {
                    var i = e.createElement("div");
                    i.setAttribute("onwheel", "return;"), t = "function" == typeof i.onwheel
                }
                return !t && e.implementation && e.implementation.hasFeature && !0 !== e.implementation.hasFeature("", "") && (t = e.implementation.hasFeature("Events.wheel", "3.0")), t
            }() ? "wheel" : "mousewheel"
        },
        normalize: function (e) {
            var t = 0,
                i = 0,
                s = 0,
                a = 0;
            return "detail" in e && (i = e.detail), "wheelDelta" in e && (i = -e.wheelDelta / 120), "wheelDeltaY" in e && (i = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = i, i = 0), s = 10 * t, a = 10 * i, "deltaY" in e && (a = e.deltaY), "deltaX" in e && (s = e.deltaX), e.shiftKey && !s && (s = a, a = 0), (s || a) && e.deltaMode && (1 === e.deltaMode ? (s *= 40, a *= 40) : (s *= 800, a *= 800)), s && !t && (t = s < 1 ? -1 : 1), a && !i && (i = a < 1 ? -1 : 1), {
                spinX: t,
                spinY: i,
                pixelX: s,
                pixelY: a
            }
        },
        handleMouseEnter: function () {
            this.enabled && (this.mouseEntered = !0)
        },
        handleMouseLeave: function () {
            this.enabled && (this.mouseEntered = !1)
        },
        handle: function (e) {
            var t = e,
                i = this;
            if (i.enabled) {
                var s = i.params.mousewheel;
                i.params.cssMode && t.preventDefault();
                var a = i.$el;
                if ("container" !== i.params.mousewheel.eventsTarget && (a = f(i.params.mousewheel.eventsTarget)), !i.mouseEntered && !a[0].contains(t.target) && !s.releaseOnEdges) return !0;
                t.originalEvent && (t = t.originalEvent);
                var r = 0,
                    n = i.rtlTranslate ? -1 : 1,
                    l = V.normalize(t);
                if (s.forceToAxis)
                    if (i.isHorizontal()) {
                        if (!(Math.abs(l.pixelX) > Math.abs(l.pixelY))) return !0;
                        r = -l.pixelX * n
                    } else {
                        if (!(Math.abs(l.pixelY) > Math.abs(l.pixelX))) return !0;
                        r = -l.pixelY
                    }
                else r = Math.abs(l.pixelX) > Math.abs(l.pixelY) ? -l.pixelX * n : -l.pixelY;
                if (0 === r) return !0;
                s.invert && (r = -r);
                var o = i.getTranslate() + r * s.sensitivity;
                if (o >= i.minTranslate() && (o = i.minTranslate()), o <= i.maxTranslate() && (o = i.maxTranslate()), (!!i.params.Loop || !(o === i.minTranslate() || o === i.maxTranslate())) && i.params.nested && t.stopPropagation(), i.params.freeMode) {
                    var d = {
                        time: E(),
                        delta: Math.abs(r),
                        direction: Math.sign(r)
                    },
                        h = i.mousewheel.lastEventBeforeSnap,
                        p = h && d.time < h.time + 500 && d.delta <= h.delta && d.direction === h.direction;
                    if (!p) {
                        i.mousewheel.lastEventBeforeSnap = void 0, i.params.Loop && i.LoopFix();
                        var u = i.getTranslate() + r * s.sensitivity,
                            c = i.isBeginning,
                            v = i.isEnd;
                        if (u >= i.minTranslate() && (u = i.minTranslate()), u <= i.maxTranslate() && (u = i.maxTranslate()), i.setTransition(0), i.setTranslate(u), i.updateProgress(), i.updateActiveIndex(), i.updateSlidesClasses(), (!c && i.isBeginning || !v && i.isEnd) && i.updateSlidesClasses(), i.params.freeModeSticky) {
                            clearTimeout(i.mousewheel.timeout), i.mousewheel.timeout = void 0;
                            var m = i.mousewheel.recentWheelEvents;
                            m.length >= 15 && m.shift();
                            var g = m.length ? m[m.length - 1] : void 0,
                                b = m[0];
                            if (m.push(d), g && (d.delta > g.delta || d.direction !== g.direction)) m.splice(0);
                            else if (m.length >= 15 && d.time - b.time < 500 && b.delta - d.delta >= 1 && d.delta <= 6) {
                                var y = r > 0 ? .8 : .2;
                                i.mousewheel.lastEventBeforeSnap = d, m.splice(0), i.mousewheel.timeout = w(function () {
                                    i.slideToClosest(i.params.speed, !0, void 0, y)
                                }, 0)
                            }
                            i.mousewheel.timeout || (i.mousewheel.timeout = w(function () {
                                i.mousewheel.lastEventBeforeSnap = d, m.splice(0), i.slideToClosest(i.params.speed, !0, void 0, .5)
                            }, 500))
                        }
                        if (p || i.emit("scroll", t), i.params.autoplay && i.params.autoplayDisableOnInteraction && i.autoplay.stop(), u === i.minTranslate() || u === i.maxTranslate()) return !0
                    }
                } else {
                    var x = {
                        time: E(),
                        delta: Math.abs(r),
                        direction: Math.sign(r),
                        raw: e
                    },
                        T = i.mousewheel.recentWheelEvents;
                    T.length >= 2 && T.shift();
                    var C = T.length ? T[T.length - 1] : void 0;
                    if (T.push(x), C ? (x.direction !== C.direction || x.delta > C.delta || x.time > C.time + 150) && i.mousewheel.animateSlider(x) : i.mousewheel.animateSlider(x), i.mousewheel.releaseScroll(x)) return !0
                }
                return t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1
            }
        },
        animateSlider: function (e) {
            var t = l();
            return !(this.params.mousewheel.thresholdDelta && e.delta < this.params.mousewheel.thresholdDelta) && (!(this.params.mousewheel.thresholdTime && E() - this.mousewheel.lastScrollTime < this.params.mousewheel.thresholdTime) && (e.delta >= 6 && E() - this.mousewheel.lastScrollTime < 60 || (e.direction < 0 ? this.isEnd && !this.params.Loop || this.animating || (this.slideNext(), this.emit("scroll", e.raw)) : this.isBeginning && !this.params.Loop || this.animating || (this.slidePrev(), this.emit("scroll", e.raw)), this.mousewheel.lastScrollTime = (new t.Date).getTime(), !1)))
        },
        releaseScroll: function (e) {
            var t = this.params.mousewheel;
            if (e.direction < 0) {
                if (this.isEnd && !this.params.Loop && t.releaseOnEdges) return !0
            } else if (this.isBeginning && !this.params.Loop && t.releaseOnEdges) return !0;
            return !1
        },
        enable: function () {
            var e = V.event();
            if (this.params.cssMode) return this.wrapperEl.removeEventListener(e, this.mousewheel.handle), !0;
            if (!e) return !1;
            if (this.mousewheel.enabled) return !1;
            var t = this.$el;
            return "container" !== this.params.mousewheel.eventsTarget && (t = f(this.params.mousewheel.eventsTarget)), t.on("mouseenter", this.mousewheel.handleMouseEnter), t.on("mouseleave", this.mousewheel.handleMouseLeave), t.on(e, this.mousewheel.handle), this.mousewheel.enabled = !0, !0
        },
        disable: function () {
            var e = V.event();
            if (this.params.cssMode) return this.wrapperEl.addEventListener(e, this.mousewheel.handle), !0;
            if (!e) return !1;
            if (!this.mousewheel.enabled) return !1;
            var t = this.$el;
            return "container" !== this.params.mousewheel.eventsTarget && (t = f(this.params.mousewheel.eventsTarget)), t.off(e, this.mousewheel.handle), this.mousewheel.enabled = !1, !0
        }
    },
        F = {
            toggleEl: function (e, t) {
                e[t ? "addClass" : "removeClass"](this.params.navigation.disabledClass), e[0] && "BUTTON" === e[0].tagName && (e[0].disabled = t)
            },
            update: function () {
                var e = this.params.navigation,
                    t = this.navigation.toggleEl;
                if (!this.params.Loop) {
                    var i = this.navigation,
                        s = i.$nextEl,
                        a = i.$prevEl;
                    a && a.length > 0 && (this.isBeginning ? t(a, !0) : t(a, !1), this.params.watchOverflow && this.enabled && a[this.isLocked ? "addClass" : "removeClass"](e.lockClass)), s && s.length > 0 && (this.isEnd ? t(s, !0) : t(s, !1), this.params.watchOverflow && this.enabled && s[this.isLocked ? "addClass" : "removeClass"](e.lockClass))
                }
            },
            onPrevClick: function (e) {
                e.preventDefault(), this.isBeginning && !this.params.Loop || this.slidePrev()
            },
            onNextClick: function (e) {
                e.preventDefault(), this.isEnd && !this.params.Loop || this.slideNext()
            },
            init: function () {
                var e, t, i = this.params.navigation;
                (i.nextEl || i.prevEl) && (i.nextEl && (e = f(i.nextEl), this.params.uniqueNavElements && "string" == typeof i.nextEl && e.length > 1 && 1 === this.$el.find(i.nextEl).length && (e = this.$el.find(i.nextEl))), i.prevEl && (t = f(i.prevEl), this.params.uniqueNavElements && "string" == typeof i.prevEl && t.length > 1 && 1 === this.$el.find(i.prevEl).length && (t = this.$el.find(i.prevEl))), e && e.length > 0 && e.on("click", this.navigation.onNextClick), t && t.length > 0 && t.on("click", this.navigation.onPrevClick), C(this.navigation, {
                    $nextEl: e,
                    nextEl: e && e[0],
                    $prevEl: t,
                    prevEl: t && t[0]
                }), this.enabled || (e && e.addClass(i.lockClass), t && t.addClass(i.lockClass)))
            },
            destroy: function () {
                var e = this.navigation,
                    t = e.$nextEl,
                    i = e.$prevEl;
                t && t.length && (t.off("click", this.navigation.onNextClick), t.removeClass(this.params.navigation.disabledClass)), i && i.length && (i.off("click", this.navigation.onPrevClick), i.removeClass(this.params.navigation.disabledClass))
            }
        },
        _ = {
            update: function () {
                var e = this.rtl,
                    t = this.params.pagination;
                if (t.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                    var i, s = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
                        a = this.pagination.$el,
                        r = this.params.Loop ? Math.ceil((s - 2 * this.LoopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length;
                    if (this.params.Loop ? ((i = Math.ceil((this.activeIndex - this.LoopedSlides) / this.params.slidesPerGroup)) > s - 1 - 2 * this.LoopedSlides && (i -= s - 2 * this.LoopedSlides), i > r - 1 && (i -= r), i < 0 && "bullets" !== this.params.paginationType && (i = r + i)) : i = void 0 !== this.snapIndex ? this.snapIndex : this.activeIndex || 0, "bullets" === t.type && this.pagination.bullets && this.pagination.bullets.length > 0) {
                        var n, l, o, d = this.pagination.bullets;
                        if (t.dynamicBullets && (this.pagination.bulletSize = d.eq(0)[this.isHorizontal() ? "outerWidth" : "outerHeight"](!0), a.css(this.isHorizontal() ? "width" : "height", this.pagination.bulletSize * (t.dynamicMainBullets + 4) + "px"), t.dynamicMainBullets > 1 && void 0 !== this.previousIndex && (this.pagination.dynamicBulletIndex += i - this.previousIndex, this.pagination.dynamicBulletIndex > t.dynamicMainBullets - 1 ? this.pagination.dynamicBulletIndex = t.dynamicMainBullets - 1 : this.pagination.dynamicBulletIndex < 0 && (this.pagination.dynamicBulletIndex = 0)), n = i - this.pagination.dynamicBulletIndex, o = ((l = n + (Math.min(d.length, t.dynamicMainBullets) - 1)) + n) / 2), d.removeClass(t.bulletActiveClass + " " + t.bulletActiveClass + "-next " + t.bulletActiveClass + "-next-next " + t.bulletActiveClass + "-prev " + t.bulletActiveClass + "-prev-prev " + t.bulletActiveClass + "-main"), a.length > 1) d.each(function (e) {
                            var s = f(e),
                                a = s.index();
                            a === i && s.addClass(t.bulletActiveClass), t.dynamicBullets && (a >= n && a <= l && s.addClass(t.bulletActiveClass + "-main"), a === n && s.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), a === l && s.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next"))
                        });
                        else {
                            var h = d.eq(i),
                                p = h.index();
                            if (h.addClass(t.bulletActiveClass), t.dynamicBullets) {
                                for (var u = d.eq(n), c = d.eq(l), v = n; v <= l; v += 1) d.eq(v).addClass(t.bulletActiveClass + "-main");
                                if (this.params.Loop)
                                    if (p >= d.length - t.dynamicMainBullets) {
                                        for (var m = t.dynamicMainBullets; m >= 0; m -= 1) d.eq(d.length - m).addClass(t.bulletActiveClass + "-main");
                                        d.eq(d.length - t.dynamicMainBullets - 1).addClass(t.bulletActiveClass + "-prev")
                                    } else u.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), c.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next");
                                else u.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), c.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next")
                            }
                        }
                        if (t.dynamicBullets) {
                            var g = Math.min(d.length, t.dynamicMainBullets + 4),
                                b = (this.pagination.bulletSize * g - this.pagination.bulletSize) / 2 - o * this.pagination.bulletSize,
                                y = e ? "right" : "left";
                            d.css(this.isHorizontal() ? y : "top", b + "px")
                        }
                    }
                    if ("fraction" === t.type && (a.find(M(t.currentClass)).text(t.formatFractionCurrent(i + 1)), a.find(M(t.totalClass)).text(t.formatFractionTotal(r))), "progressbar" === t.type) {
                        var w;
                        w = t.progressbarOpposite ? this.isHorizontal() ? "vertical" : "horizontal" : this.isHorizontal() ? "horizontal" : "vertical";
                        var E = (i + 1) / r,
                            x = 1,
                            T = 1;
                        "horizontal" === w ? x = E : T = E, a.find(M(t.progressbarFillClass)).transform("translate3d(0,0,0) scaleX(" + x + ") scaleY(" + T + ")").transition(this.params.speed)
                    }
                    "custom" === t.type && t.renderCustom ? (a.html(t.renderCustom(this, i + 1, r)), this.emit("paginationRender", a[0])) : this.emit("paginationUpdate", a[0]), this.params.watchOverflow && this.enabled && a[this.isLocked ? "addClass" : "removeClass"](t.lockClass)
                }
            },
            render: function () {
                var e = this.params.pagination;
                if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                    var t = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
                        i = this.pagination.$el,
                        s = "";
                    if ("bullets" === e.type) {
                        var a = this.params.Loop ? Math.ceil((t - 2 * this.LoopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length;
                        this.params.freeMode && !this.params.Loop && a > t && (a = t);
                        for (var r = 0; r < a; r += 1) e.renderBullet ? s += e.renderBullet.call(this, r, e.bulletClass) : s += "<" + e.bulletElement + ' class="' + e.bulletClass + '"></' + e.bulletElement + ">";
                        i.html(s), this.pagination.bullets = i.find(M(e.bulletClass))
                    }
                    "fraction" === e.type && (s = e.renderFraction ? e.renderFraction.call(this, e.currentClass, e.totalClass) : '<span class="' + e.currentClass + '"></span> / <span class="' + e.totalClass + '"></span>', i.html(s)), "progressbar" === e.type && (s = e.renderProgressbar ? e.renderProgressbar.call(this, e.progressbarFillClass) : '<span class="' + e.progressbarFillClass + '"></span>', i.html(s)), "custom" !== e.type && this.emit("paginationRender", this.pagination.$el[0])
                }
            },
            init: function () {
                var e = this,
                    t = e.params.pagination;
                if (t.el) {
                    var i = f(t.el);
                    0 !== i.length && (e.params.uniqueNavElements && "string" == typeof t.el && i.length > 1 && (i = e.$el.find(t.el)), "bullets" === t.type && t.clickable && i.addClass(t.clickableClass), i.addClass(t.modifierClass + t.type), "bullets" === t.type && t.dynamicBullets && (i.addClass("" + t.modifierClass + t.type + "-dynamic"), e.pagination.dynamicBulletIndex = 0, t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)), "progressbar" === t.type && t.progressbarOpposite && i.addClass(t.progressbarOppositeClass), t.clickable && i.on("click", M(t.bulletClass), function (t) {
                        t.preventDefault();
                        var i = f(this).index() * e.params.slidesPerGroup;
                        e.params.Loop && (i += e.LoopedSlides), e.slideTo(i)
                    }), C(e.pagination, {
                        $el: i,
                        el: i[0]
                    }), e.enabled || i.addClass(t.lockClass))
                }
            },
            destroy: function () {
                var e = this.params.pagination;
                if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                    var t = this.pagination.$el;
                    t.removeClass(e.hiddenClass), t.removeClass(e.modifierClass + e.type), this.pagination.bullets && this.pagination.bullets.removeClass(e.bulletActiveClass), e.clickable && t.off("click", M(e.bulletClass))
                }
            }
        },
        q = {
            setTranslate: function () {
                if (this.params.scrollbar.el && this.scrollbar.el) {
                    var e = this.scrollbar,
                        t = this.rtlTranslate,
                        i = this.progress,
                        s = e.dragSize,
                        a = e.trackSize,
                        r = e.$dragEl,
                        n = e.$el,
                        l = this.params.scrollbar,
                        o = s,
                        d = (a - s) * i;
                    t ? (d = -d) > 0 ? (o = s - d, d = 0) : -d + s > a && (o = a + d) : d < 0 ? (o = s + d, d = 0) : d + s > a && (o = a - d), this.isHorizontal() ? (r.transform("translate3d(" + d + "px, 0, 0)"), r[0].style.width = o + "px") : (r.transform("translate3d(0px, " + d + "px, 0)"), r[0].style.height = o + "px"), l.hide && (clearTimeout(this.scrollbar.timeout), n[0].style.opacity = 1, this.scrollbar.timeout = setTimeout(function () {
                        n[0].style.opacity = 0, n.transition(400)
                    }, 1e3))
                }
            },
            setTransition: function (e) {
                this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e)
            },
            updateSize: function () {
                if (this.params.scrollbar.el && this.scrollbar.el) {
                    var e = this.scrollbar,
                        t = e.$dragEl,
                        i = e.$el;
                    t[0].style.width = "", t[0].style.height = "";
                    var s, a = this.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
                        r = this.size / this.virtualSize,
                        n = r * (a / this.size);
                    s = "auto" === this.params.scrollbar.dragSize ? a * r : parseInt(this.params.scrollbar.dragSize, 10), this.isHorizontal() ? t[0].style.width = s + "px" : t[0].style.height = s + "px", i[0].style.display = r >= 1 ? "none" : "", this.params.scrollbar.hide && (i[0].style.opacity = 0), C(e, {
                        trackSize: a,
                        divider: r,
                        moveDivider: n,
                        dragSize: s
                    }), this.params.watchOverflow && this.enabled && e.$el[this.isLocked ? "addClass" : "removeClass"](this.params.scrollbar.lockClass)
                }
            },
            getPointerPosition: function (e) {
                return this.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientX : e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientY : e.clientY
            },
            setDragPosition: function (e) {
                var t, i = this.scrollbar,
                    s = this.rtlTranslate,
                    a = i.$el,
                    r = i.dragSize,
                    n = i.trackSize,
                    l = i.dragStartPos;
                t = (i.getPointerPosition(e) - a.offset()[this.isHorizontal() ? "left" : "top"] - (null !== l ? l : r / 2)) / (n - r), t = Math.max(Math.min(t, 1), 0), s && (t = 1 - t);
                var o = this.minTranslate() + (this.maxTranslate() - this.minTranslate()) * t;
                this.updateProgress(o), this.setTranslate(o), this.updateActiveIndex(), this.updateSlidesClasses()
            },
            onDragStart: function (e) {
                var t = this.params.scrollbar,
                    i = this.scrollbar,
                    s = this.$wrapperEl,
                    a = i.$el,
                    r = i.$dragEl;
                this.scrollbar.isTouched = !0, this.scrollbar.dragStartPos = e.target === r[0] || e.target === r ? i.getPointerPosition(e) - e.target.getBoundingClientRect()[this.isHorizontal() ? "left" : "top"] : null, e.preventDefault(), e.stopPropagation(), s.transition(100), r.transition(100), i.setDragPosition(e), clearTimeout(this.scrollbar.dragTimeout), a.transition(0), t.hide && a.css("opacity", 1), this.params.cssMode && this.$wrapperEl.css("scroll-snap-type", "none"), this.emit("scrollbarDragStart", e)
            },
            onDragMove: function (e) {
                var t = this.scrollbar,
                    i = this.$wrapperEl,
                    s = t.$el,
                    a = t.$dragEl;
                this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), i.transition(0), s.transition(0), a.transition(0), this.emit("scrollbarDragMove", e))
            },
            onDragEnd: function (e) {
                var t = this.params.scrollbar,
                    i = this.scrollbar,
                    s = this.$wrapperEl,
                    a = i.$el;
                this.scrollbar.isTouched && (this.scrollbar.isTouched = !1, this.params.cssMode && (this.$wrapperEl.css("scroll-snap-type", ""), s.transition("")), t.hide && (clearTimeout(this.scrollbar.dragTimeout), this.scrollbar.dragTimeout = w(function () {
                    a.css("opacity", 0), a.transition(400)
                }, 1e3)), this.emit("scrollbarDragEnd", e), t.snapOnRelease && this.slideToClosest())
            },
            enableDraggable: function () {
                if (this.params.scrollbar.el) {
                    var e = r(),
                        t = this.scrollbar,
                        i = this.touchEventsTouch,
                        s = this.touchEventsDesktop,
                        a = this.params,
                        n = this.support,
                        l = t.$el[0],
                        o = !(!n.passiveListener || !a.passiveListeners) && {
                            passive: !1,
                            capture: !1
                        },
                        d = !(!n.passiveListener || !a.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                    l && (n.touch ? (l.addEventListener(i.start, this.scrollbar.onDragStart, o), l.addEventListener(i.move, this.scrollbar.onDragMove, o), l.addEventListener(i.end, this.scrollbar.onDragEnd, d)) : (l.addEventListener(s.start, this.scrollbar.onDragStart, o), e.addEventListener(s.move, this.scrollbar.onDragMove, o), e.addEventListener(s.end, this.scrollbar.onDragEnd, d)))
                }
            },
            disableDraggable: function () {
                if (this.params.scrollbar.el) {
                    var e = r(),
                        t = this.scrollbar,
                        i = this.touchEventsTouch,
                        s = this.touchEventsDesktop,
                        a = this.params,
                        n = this.support,
                        l = t.$el[0],
                        o = !(!n.passiveListener || !a.passiveListeners) && {
                            passive: !1,
                            capture: !1
                        },
                        d = !(!n.passiveListener || !a.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                    l && (n.touch ? (l.removeEventListener(i.start, this.scrollbar.onDragStart, o), l.removeEventListener(i.move, this.scrollbar.onDragMove, o), l.removeEventListener(i.end, this.scrollbar.onDragEnd, d)) : (l.removeEventListener(s.start, this.scrollbar.onDragStart, o), e.removeEventListener(s.move, this.scrollbar.onDragMove, o), e.removeEventListener(s.end, this.scrollbar.onDragEnd, d)))
                }
            },
            init: function () {
                if (this.params.scrollbar.el) {
                    var e = this.scrollbar,
                        t = this.$el,
                        i = this.params.scrollbar,
                        s = f(i.el);
                    this.params.uniqueNavElements && "string" == typeof i.el && s.length > 1 && 1 === t.find(i.el).length && (s = t.find(i.el));
                    var a = s.find("." + this.params.scrollbar.dragClass);
                    0 === a.length && (a = f('<div class="' + this.params.scrollbar.dragClass + '"></div>'), s.append(a)), C(e, {
                        $el: s,
                        el: s[0],
                        $dragEl: a,
                        dragEl: a[0]
                    }), i.draggable && e.enableDraggable(), s && s[this.enabled ? "removeClass" : "addClass"](this.params.scrollbar.lockClass)
                }
            },
            destroy: function () {
                this.scrollbar.disableDraggable()
            }
        },
        j = {
            setTransform: function (e, t) {
                var i = this.rtl,
                    s = f(e),
                    a = i ? -1 : 1,
                    r = s.attr("data-swiper-parallax") || "0",
                    n = s.attr("data-swiper-parallax-x"),
                    l = s.attr("data-swiper-parallax-y"),
                    o = s.attr("data-swiper-parallax-scale"),
                    d = s.attr("data-swiper-parallax-opacity");
                if (n || l ? (n = n || "0", l = l || "0") : this.isHorizontal() ? (n = r, l = "0") : (l = r, n = "0"), n = n.indexOf("%") >= 0 ? parseInt(n, 10) * t * a + "%" : n * t * a + "px", l = l.indexOf("%") >= 0 ? parseInt(l, 10) * t + "%" : l * t + "px", null != d) {
                    var h = d - (d - 1) * (1 - Math.abs(t));
                    s[0].style.opacity = h
                }
                if (null == o) s.transform("translate3d(" + n + ", " + l + ", 0px)");
                else {
                    var p = o - (o - 1) * (1 - Math.abs(t));
                    s.transform("translate3d(" + n + ", " + l + ", 0px) scale(" + p + ")")
                }
            },
            setTranslate: function () {
                var e = this,
                    t = e.$el,
                    i = e.slides,
                    s = e.progress,
                    a = e.snapGrid;
                t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function (t) {
                    e.parallax.setTransform(t, s)
                }), i.each(function (t, i) {
                    var r = t.progress;
                    e.params.slidesPerGroup > 1 && "auto" !== e.params.slidesPerView && (r += Math.ceil(i / 2) - s * (a.length - 1)), r = Math.min(Math.max(r, -1), 1), f(t).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function (t) {
                        e.parallax.setTransform(t, r)
                    })
                })
            },
            setTransition: function (e) {
                void 0 === e && (e = this.params.speed);
                this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function (t) {
                    var i = f(t),
                        s = parseInt(i.attr("data-swiper-parallax-duration"), 10) || e;
                    0 === e && (s = 0), i.transition(s)
                })
            }
        },
        U = {
            getDistanceBetweenTouches: function (e) {
                if (e.targetTouches.length < 2) return 1;
                var t = e.targetTouches[0].pageX,
                    i = e.targetTouches[0].pageY,
                    s = e.targetTouches[1].pageX,
                    a = e.targetTouches[1].pageY;
                return Math.sqrt(Math.pow(s - t, 2) + Math.pow(a - i, 2))
            },
            onGestureStart: function (e) {
                var t = this.support,
                    i = this.params.zoom,
                    s = this.zoom,
                    a = s.gesture;
                if (s.fakeGestureTouched = !1, s.fakeGestureMoved = !1, !t.gestures) {
                    if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
                    s.fakeGestureTouched = !0, a.scaleStart = U.getDistanceBetweenTouches(e)
                }
                a.$slideEl && a.$slideEl.length || (a.$slideEl = f(e.target).closest("." + this.params.slideClass), 0 === a.$slideEl.length && (a.$slideEl = this.slides.eq(this.activeIndex)), a.$imageEl = a.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), a.$imageWrapEl = a.$imageEl.parent("." + i.containerClass), a.maxRatio = a.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio, 0 !== a.$imageWrapEl.length) ? (a.$imageEl && a.$imageEl.transition(0), this.zoom.isScaling = !0) : a.$imageEl = void 0
            },
            onGestureChange: function (e) {
                var t = this.support,
                    i = this.params.zoom,
                    s = this.zoom,
                    a = s.gesture;
                if (!t.gestures) {
                    if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
                    s.fakeGestureMoved = !0, a.scaleMove = U.getDistanceBetweenTouches(e)
                }
                a.$imageEl && 0 !== a.$imageEl.length ? (t.gestures ? s.scale = e.scale * s.currentScale : s.scale = a.scaleMove / a.scaleStart * s.currentScale, s.scale > a.maxRatio && (s.scale = a.maxRatio - 1 + Math.pow(s.scale - a.maxRatio + 1, .5)), s.scale < i.minRatio && (s.scale = i.minRatio + 1 - Math.pow(i.minRatio - s.scale + 1, .5)), a.$imageEl.transform("translate3d(0,0,0) scale(" + s.scale + ")")) : "gesturechange" === e.type && s.onGestureStart(e)
            },
            onGestureEnd: function (e) {
                var t = this.device,
                    i = this.support,
                    s = this.params.zoom,
                    a = this.zoom,
                    r = a.gesture;
                if (!i.gestures) {
                    if (!a.fakeGestureTouched || !a.fakeGestureMoved) return;
                    if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !t.android) return;
                    a.fakeGestureTouched = !1, a.fakeGestureMoved = !1
                }
                r.$imageEl && 0 !== r.$imageEl.length && (a.scale = Math.max(Math.min(a.scale, r.maxRatio), s.minRatio), r.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + a.scale + ")"), a.currentScale = a.scale, a.isScaling = !1, 1 === a.scale && (r.$slideEl = void 0))
            },
            onTouchStart: function (e) {
                var t = this.device,
                    i = this.zoom,
                    s = i.gesture,
                    a = i.image;
                s.$imageEl && 0 !== s.$imageEl.length && (a.isTouched || (t.android && e.cancelable && e.preventDefault(), a.isTouched = !0, a.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, a.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
            },
            onTouchMove: function (e) {
                var t = this.zoom,
                    i = t.gesture,
                    s = t.image,
                    a = t.velocity;
                if (i.$imageEl && 0 !== i.$imageEl.length && (this.allowClick = !1, s.isTouched && i.$slideEl)) {
                    s.isMoved || (s.width = i.$imageEl[0].offsetWidth, s.height = i.$imageEl[0].offsetHeight, s.startX = x(i.$imageWrapEl[0], "x") || 0, s.startY = x(i.$imageWrapEl[0], "y") || 0, i.slideWidth = i.$slideEl[0].offsetWidth, i.slideHeight = i.$slideEl[0].offsetHeight, i.$imageWrapEl.transition(0), this.rtl && (s.startX = -s.startX, s.startY = -s.startY));
                    var r = s.width * t.scale,
                        n = s.height * t.scale;
                    if (!(r < i.slideWidth && n < i.slideHeight)) {
                        if (s.minX = Math.min(i.slideWidth / 2 - r / 2, 0), s.maxX = -s.minX, s.minY = Math.min(i.slideHeight / 2 - n / 2, 0), s.maxY = -s.minY, s.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !s.isMoved && !t.isScaling) {
                            if (this.isHorizontal() && (Math.floor(s.minX) === Math.floor(s.startX) && s.touchesCurrent.x < s.touchesStart.x || Math.floor(s.maxX) === Math.floor(s.startX) && s.touchesCurrent.x > s.touchesStart.x)) return void (s.isTouched = !1);
                            if (!this.isHorizontal() && (Math.floor(s.minY) === Math.floor(s.startY) && s.touchesCurrent.y < s.touchesStart.y || Math.floor(s.maxY) === Math.floor(s.startY) && s.touchesCurrent.y > s.touchesStart.y)) return void (s.isTouched = !1)
                        }
                        e.cancelable && e.preventDefault(), e.stopPropagation(), s.isMoved = !0, s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX, s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY, s.currentX < s.minX && (s.currentX = s.minX + 1 - Math.pow(s.minX - s.currentX + 1, .8)), s.currentX > s.maxX && (s.currentX = s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, .8)), s.currentY < s.minY && (s.currentY = s.minY + 1 - Math.pow(s.minY - s.currentY + 1, .8)), s.currentY > s.maxY && (s.currentY = s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, .8)), a.prevPositionX || (a.prevPositionX = s.touchesCurrent.x), a.prevPositionY || (a.prevPositionY = s.touchesCurrent.y), a.prevTime || (a.prevTime = Date.now()), a.x = (s.touchesCurrent.x - a.prevPositionX) / (Date.now() - a.prevTime) / 2, a.y = (s.touchesCurrent.y - a.prevPositionY) / (Date.now() - a.prevTime) / 2, Math.abs(s.touchesCurrent.x - a.prevPositionX) < 2 && (a.x = 0), Math.abs(s.touchesCurrent.y - a.prevPositionY) < 2 && (a.y = 0), a.prevPositionX = s.touchesCurrent.x, a.prevPositionY = s.touchesCurrent.y, a.prevTime = Date.now(), i.$imageWrapEl.transform("translate3d(" + s.currentX + "px, " + s.currentY + "px,0)")
                    }
                }
            },
            onTouchEnd: function () {
                var e = this.zoom,
                    t = e.gesture,
                    i = e.image,
                    s = e.velocity;
                if (t.$imageEl && 0 !== t.$imageEl.length) {
                    if (!i.isTouched || !i.isMoved) return i.isTouched = !1, void (i.isMoved = !1);
                    i.isTouched = !1, i.isMoved = !1;
                    var a = 300,
                        r = 300,
                        n = s.x * a,
                        l = i.currentX + n,
                        o = s.y * r,
                        d = i.currentY + o;
                    0 !== s.x && (a = Math.abs((l - i.currentX) / s.x)), 0 !== s.y && (r = Math.abs((d - i.currentY) / s.y));
                    var h = Math.max(a, r);
                    i.currentX = l, i.currentY = d;
                    var p = i.width * e.scale,
                        u = i.height * e.scale;
                    i.minX = Math.min(t.slideWidth / 2 - p / 2, 0), i.maxX = -i.minX, i.minY = Math.min(t.slideHeight / 2 - u / 2, 0), i.maxY = -i.minY, i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX), i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY), t.$imageWrapEl.transition(h).transform("translate3d(" + i.currentX + "px, " + i.currentY + "px,0)")
                }
            },
            onTransitionEnd: function () {
                var e = this.zoom,
                    t = e.gesture;
                t.$slideEl && this.previousIndex !== this.activeIndex && (t.$imageEl && t.$imageEl.transform("translate3d(0,0,0) scale(1)"), t.$imageWrapEl && t.$imageWrapEl.transform("translate3d(0,0,0)"), e.scale = 1, e.currentScale = 1, t.$slideEl = void 0, t.$imageEl = void 0, t.$imageWrapEl = void 0)
            },
            toggle: function (e) {
                var t = this.zoom;
                t.scale && 1 !== t.scale ? t.out() : t.in(e)
            },
            in: function (e) {
                var t, i, s, a, r, n, o, d, h, p, u, c, v, f, m, g, b = l(),
                    y = this.zoom,
                    w = this.params.zoom,
                    E = y.gesture,
                    x = y.image;
                (E.$slideEl || (this.params.virtual && this.params.virtual.enabled && this.virtual ? E.$slideEl = this.$wrapperEl.children("." + this.params.slideActiveClass) : E.$slideEl = this.slides.eq(this.activeIndex), E.$imageEl = E.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), E.$imageWrapEl = E.$imageEl.parent("." + w.containerClass)), E.$imageEl && 0 !== E.$imageEl.length && E.$imageWrapEl && 0 !== E.$imageWrapEl.length) && (E.$slideEl.addClass("" + w.zoomedSlideClass), void 0 === x.touchesStart.x && e ? (t = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, i = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (t = x.touchesStart.x, i = x.touchesStart.y), y.scale = E.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio, y.currentScale = E.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio, e ? (m = E.$slideEl[0].offsetWidth, g = E.$slideEl[0].offsetHeight, s = E.$slideEl.offset().left + b.scrollX + m / 2 - t, a = E.$slideEl.offset().top + b.scrollY + g / 2 - i, o = E.$imageEl[0].offsetWidth, d = E.$imageEl[0].offsetHeight, h = o * y.scale, p = d * y.scale, v = -(u = Math.min(m / 2 - h / 2, 0)), f = -(c = Math.min(g / 2 - p / 2, 0)), (r = s * y.scale) < u && (r = u), r > v && (r = v), (n = a * y.scale) < c && (n = c), n > f && (n = f)) : (r = 0, n = 0), E.$imageWrapEl.transition(300).transform("translate3d(" + r + "px, " + n + "px,0)"), E.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + y.scale + ")"))
            },
            out: function () {
                var e = this.zoom,
                    t = this.params.zoom,
                    i = e.gesture;
                i.$slideEl || (this.params.virtual && this.params.virtual.enabled && this.virtual ? i.$slideEl = this.$wrapperEl.children("." + this.params.slideActiveClass) : i.$slideEl = this.slides.eq(this.activeIndex), i.$imageEl = i.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), i.$imageWrapEl = i.$imageEl.parent("." + t.containerClass)), i.$imageEl && 0 !== i.$imageEl.length && i.$imageWrapEl && 0 !== i.$imageWrapEl.length && (e.scale = 1, e.currentScale = 1, i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), i.$slideEl.removeClass("" + t.zoomedSlideClass), i.$slideEl = void 0)
            },
            toggleGestures: function (e) {
                var t = this.zoom,
                    i = t.slideSelector,
                    s = t.passiveListener;
                this.$wrapperEl[e]("gesturestart", i, t.onGestureStart, s), this.$wrapperEl[e]("gesturechange", i, t.onGestureChange, s), this.$wrapperEl[e]("gestureend", i, t.onGestureEnd, s)
            },
            enableGestures: function () {
                this.zoom.gesturesEnabled || (this.zoom.gesturesEnabled = !0, this.zoom.toggleGestures("on"))
            },
            disableGestures: function () {
                this.zoom.gesturesEnabled && (this.zoom.gesturesEnabled = !1, this.zoom.toggleGestures("off"))
            },
            enable: function () {
                var e = this.support,
                    t = this.zoom;
                if (!t.enabled) {
                    t.enabled = !0;
                    var i = !("touchstart" !== this.touchEvents.start || !e.passiveListener || !this.params.passiveListeners) && {
                        passive: !0,
                        capture: !1
                    },
                        s = !e.passiveListener || {
                            passive: !1,
                            capture: !0
                        },
                        a = "." + this.params.slideClass;
                    this.zoom.passiveListener = i, this.zoom.slideSelector = a, e.gestures ? (this.$wrapperEl.on(this.touchEvents.start, this.zoom.enableGestures, i), this.$wrapperEl.on(this.touchEvents.end, this.zoom.disableGestures, i)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.on(this.touchEvents.start, a, t.onGestureStart, i), this.$wrapperEl.on(this.touchEvents.move, a, t.onGestureChange, s), this.$wrapperEl.on(this.touchEvents.end, a, t.onGestureEnd, i), this.touchEvents.cancel && this.$wrapperEl.on(this.touchEvents.cancel, a, t.onGestureEnd, i)), this.$wrapperEl.on(this.touchEvents.move, "." + this.params.zoom.containerClass, t.onTouchMove, s)
                }
            },
            disable: function () {
                var e = this.zoom;
                if (e.enabled) {
                    var t = this.support;
                    this.zoom.enabled = !1;
                    var i = !("touchstart" !== this.touchEvents.start || !t.passiveListener || !this.params.passiveListeners) && {
                        passive: !0,
                        capture: !1
                    },
                        s = !t.passiveListener || {
                            passive: !1,
                            capture: !0
                        },
                        a = "." + this.params.slideClass;
                    t.gestures ? (this.$wrapperEl.off(this.touchEvents.start, this.zoom.enableGestures, i), this.$wrapperEl.off(this.touchEvents.end, this.zoom.disableGestures, i)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.off(this.touchEvents.start, a, e.onGestureStart, i), this.$wrapperEl.off(this.touchEvents.move, a, e.onGestureChange, s), this.$wrapperEl.off(this.touchEvents.end, a, e.onGestureEnd, i), this.touchEvents.cancel && this.$wrapperEl.off(this.touchEvents.cancel, a, e.onGestureEnd, i)), this.$wrapperEl.off(this.touchEvents.move, "." + this.params.zoom.containerClass, e.onTouchMove, s)
                }
            }
        },
        K = {
            loadInSlide: function (e, t) {
                void 0 === t && (t = !0);
                var i = this,
                    s = i.params.lazy;
                if (void 0 !== e && 0 !== i.slides.length) {
                    var a = i.virtual && i.params.virtual.enabled ? i.$wrapperEl.children("." + i.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : i.slides.eq(e),
                        r = a.find("." + s.elementClass + ":not(." + s.loadedClass + "):not(." + s.loadingClass + ")");
                    !a.hasClass(s.elementClass) || a.hasClass(s.loadedClass) || a.hasClass(s.loadingClass) || r.push(a[0]), 0 !== r.length && r.each(function (e) {
                        var r = f(e);
                        r.addClass(s.loadingClass);
                        var n = r.attr("data-background"),
                            l = r.attr("data-src"),
                            o = r.attr("data-srcset"),
                            d = r.attr("data-sizes"),
                            h = r.parent("picture");
                        i.loadImage(r[0], l || n, o, d, !1, function () {
                            if (null != i && i && (!i || i.params) && !i.destroyed) {
                                if (n ? (r.css("background-image", 'url("' + n + '")'), r.removeAttr("data-background")) : (o && (r.attr("srcset", o), r.removeAttr("data-srcset")), d && (r.attr("sizes", d), r.removeAttr("data-sizes")), h.length && h.children("source").each(function (e) {
                                    var t = f(e);
                                    t.attr("data-srcset") && (t.attr("srcset", t.attr("data-srcset")), t.removeAttr("data-srcset"))
                                }), l && (r.attr("src", l), r.removeAttr("data-src"))), r.addClass(s.loadedClass).removeClass(s.loadingClass), a.find("." + s.preloaderClass).remove(), i.params.Loop && t) {
                                    var e = a.attr("data-swiper-slide-index");
                                    if (a.hasClass(i.params.slideDuplicateClass)) {
                                        var p = i.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + i.params.slideDuplicateClass + ")");
                                        i.lazy.loadInSlide(p.index(), !1)
                                    } else {
                                        var u = i.$wrapperEl.children("." + i.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                                        i.lazy.loadInSlide(u.index(), !1)
                                    }
                                }
                                i.emit("lazyImageReady", a[0], r[0]), i.params.autoHeight && i.updateAutoHeight()
                            }
                        }), i.emit("lazyImageLoad", a[0], r[0])
                    })
                }
            },
            load: function () {
                var e = this,
                    t = e.$wrapperEl,
                    i = e.params,
                    s = e.slides,
                    a = e.activeIndex,
                    r = e.virtual && i.virtual.enabled,
                    n = i.lazy,
                    l = i.slidesPerView;

                function o(e) {
                    if (r) {
                        if (t.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return !0
                    } else if (s[e]) return !0;
                    return !1
                }

                function d(e) {
                    return r ? f(e).attr("data-swiper-slide-index") : f(e).index()
                }
                if ("auto" === l && (l = 0), e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0), e.params.watchSlidesVisibility) t.children("." + i.slideVisibleClass).each(function (t) {
                    var i = r ? f(t).attr("data-swiper-slide-index") : f(t).index();
                    e.lazy.loadInSlide(i)
                });
                else if (l > 1)
                    for (var h = a; h < a + l; h += 1) o(h) && e.lazy.loadInSlide(h);
                else e.lazy.loadInSlide(a);
                if (n.loadPrevNext)
                    if (l > 1 || n.loadPrevNextAmount && n.loadPrevNextAmount > 1) {
                        for (var p = n.loadPrevNextAmount, u = l, c = Math.min(a + u + Math.max(p, u), s.length), v = Math.max(a - Math.max(u, p), 0), m = a + l; m < c; m += 1) o(m) && e.lazy.loadInSlide(m);
                        for (var g = v; g < a; g += 1) o(g) && e.lazy.loadInSlide(g)
                    } else {
                        var b = t.children("." + i.slideNextClass);
                        b.length > 0 && e.lazy.loadInSlide(d(b));
                        var y = t.children("." + i.slidePrevClass);
                        y.length > 0 && e.lazy.loadInSlide(d(y))
                    }
            },
            checkInViewOnLoad: function () {
                var e = l();
                if (this && !this.destroyed) {
                    var t = this.params.lazy.scrollingElement ? f(this.params.lazy.scrollingElement) : f(e),
                        i = t[0] === e,
                        s = i ? e.innerWidth : t[0].offsetWidth,
                        a = i ? e.innerHeight : t[0].offsetHeight,
                        r = this.$el.offset(),
                        n = !1;
                    this.rtlTranslate && (r.left -= this.$el[0].scrollLeft);
                    for (var o = [
                        [r.left, r.top],
                        [r.left + this.width, r.top],
                        [r.left, r.top + this.height],
                        [r.left + this.width, r.top + this.height]
                    ], d = 0; d < o.length; d += 1) {
                        var h = o[d];
                        if (h[0] >= 0 && h[0] <= s && h[1] >= 0 && h[1] <= a) {
                            if (0 === h[0] && 0 === h[1]) continue;
                            n = !0
                        }
                    }
                    n ? (this.lazy.load(), t.off("scroll", this.lazy.checkInViewOnLoad)) : this.lazy.scrollHandlerAttached || (this.lazy.scrollHandlerAttached = !0, t.on("scroll", this.lazy.checkInViewOnLoad))
                }
            }
        },
        Z = {
            LinearSpline: function (e, t) {
                var i, s, a, r, n, l = function (e, t) {
                    for (s = -1, i = e.length; i - s > 1;) e[a = i + s >> 1] <= t ? s = a : i = a;
                    return i
                };
                return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function (e) {
                    return e ? (n = l(this.x, e), r = n - 1, (e - this.x[r]) * (this.y[n] - this.y[r]) / (this.x[n] - this.x[r]) + this.y[r]) : 0
                }, this
            },
            getInterpolateFunction: function (e) {
                this.controller.spline || (this.controller.spline = this.params.Loop ? new Z.LinearSpline(this.slidesGrid, e.slidesGrid) : new Z.LinearSpline(this.snapGrid, e.snapGrid))
            },
            setTranslate: function (e, t) {
                var i, s, a = this,
                    r = a.controller.control,
                    n = a.constructor;

                function l(e) {
                    var t = a.rtlTranslate ? -a.translate : a.translate;
                    "slide" === a.params.controller.by && (a.controller.getInterpolateFunction(e), s = -a.controller.spline.interpolate(-t)), s && "container" !== a.params.controller.by || (i = (e.maxTranslate() - e.minTranslate()) / (a.maxTranslate() - a.minTranslate()), s = (t - a.minTranslate()) * i + e.minTranslate()), a.params.controller.inverse && (s = e.maxTranslate() - s), e.updateProgress(s), e.setTranslate(s, a), e.updateActiveIndex(), e.updateSlidesClasses()
                }
                if (Array.isArray(r))
                    for (var o = 0; o < r.length; o += 1) r[o] !== t && r[o] instanceof n && l(r[o]);
                else r instanceof n && t !== r && l(r)
            },
            setTransition: function (e, t) {
                var i, s = this,
                    a = s.constructor,
                    r = s.controller.control;

                function n(t) {
                    t.setTransition(e, s), 0 !== e && (t.transitionStart(), t.params.autoHeight && w(function () {
                        t.updateAutoHeight()
                    }), t.$wrapperEl.transitionEnd(function () {
                        r && (t.params.Loop && "slide" === s.params.controller.by && t.LoopFix(), t.transitionEnd())
                    }))
                }
                if (Array.isArray(r))
                    for (i = 0; i < r.length; i += 1) r[i] !== t && r[i] instanceof a && n(r[i]);
                else r instanceof a && t !== r && n(r)
            }
        },
        J = {
            getRandomNumber: function (e) {
                void 0 === e && (e = 16);
                return "x".repeat(e).replace(/x/g, function () {
                    return Math.round(16 * Math.random()).toString(16)
                })
            },
            makeElFocusable: function (e) {
                return e.attr("tabIndex", "0"), e
            },
            makeElNotFocusable: function (e) {
                return e.attr("tabIndex", "-1"), e
            },
            addElRole: function (e, t) {
                return e.attr("role", t), e
            },
            addElRoleDescription: function (e, t) {
                return e.attr("aria-roledescription", t), e
            },
            addElControls: function (e, t) {
                return e.attr("aria-controls", t), e
            },
            addElLabel: function (e, t) {
                return e.attr("aria-label", t), e
            },
            addElId: function (e, t) {
                return e.attr("id", t), e
            },
            addElLive: function (e, t) {
                return e.attr("aria-live", t), e
            },
            disableEl: function (e) {
                return e.attr("aria-disabled", !0), e
            },
            enableEl: function (e) {
                return e.attr("aria-disabled", !1), e
            },
            onEnterOrSpaceKey: function (e) {
                if (13 === e.keyCode || 32 === e.keyCode) {
                    var t = this.params.a11y,
                        i = f(e.target);
                    this.navigation && this.navigation.$nextEl && i.is(this.navigation.$nextEl) && (this.isEnd && !this.params.Loop || this.slideNext(), this.isEnd ? this.a11y.notify(t.lastSlideMessage) : this.a11y.notify(t.nextSlideMessage)), this.navigation && this.navigation.$prevEl && i.is(this.navigation.$prevEl) && (this.isBeginning && !this.params.Loop || this.slidePrev(), this.isBeginning ? this.a11y.notify(t.firstSlideMessage) : this.a11y.notify(t.prevSlideMessage)), this.pagination && i.is(M(this.params.pagination.bulletClass)) && i[0].click()
                }
            },
            notify: function (e) {
                var t = this.a11y.liveRegion;
                0 !== t.length && (t.html(""), t.html(e))
            },
            updateNavigation: function () {
                if (!this.params.Loop && this.navigation) {
                    var e = this.navigation,
                        t = e.$nextEl,
                        i = e.$prevEl;
                    i && i.length > 0 && (this.isBeginning ? (this.a11y.disableEl(i), this.a11y.makeElNotFocusable(i)) : (this.a11y.enableEl(i), this.a11y.makeElFocusable(i))), t && t.length > 0 && (this.isEnd ? (this.a11y.disableEl(t), this.a11y.makeElNotFocusable(t)) : (this.a11y.enableEl(t), this.a11y.makeElFocusable(t)))
                }
            },
            updatePagination: function () {
                var e = this,
                    t = e.params.a11y;
                e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.bullets.each(function (i) {
                    var s = f(i);
                    e.a11y.makeElFocusable(s), e.params.pagination.renderBullet || (e.a11y.addElRole(s, "button"), e.a11y.addElLabel(s, t.paginationBulletMessage.replace(/\{\{index\}\}/, s.index() + 1)))
                })
            },
            init: function () {
                var e = this,
                    t = e.params.a11y;
                e.$el.append(e.a11y.liveRegion);
                var i = e.$el;
                t.containerRoleDescriptionMessage && e.a11y.addElRoleDescription(i, t.containerRoleDescriptionMessage), t.containerMessage && e.a11y.addElLabel(i, t.containerMessage);
                var s, a, r = e.$wrapperEl,
                    n = r.attr("id") || "swiper-wrapper-" + e.a11y.getRandomNumber(16),
                    l = e.params.autoplay && e.params.autoplay.enabled ? "off" : "polite";
                e.a11y.addElId(r, n), e.a11y.addElLive(r, l), t.itemRoleDescriptionMessage && e.a11y.addElRoleDescription(f(e.slides), t.itemRoleDescriptionMessage), e.a11y.addElRole(f(e.slides), t.slideRole), e.slides.each(function (i) {
                    var s = f(i),
                        a = t.slideLabelMessage.replace(/\{\{index\}\}/, s.index() + 1).replace(/\{\{slidesLength\}\}/, e.slides.length);
                    e.a11y.addElLabel(s, a)
                }), e.navigation && e.navigation.$nextEl && (s = e.navigation.$nextEl), e.navigation && e.navigation.$prevEl && (a = e.navigation.$prevEl), s && s.length && (e.a11y.makeElFocusable(s), "BUTTON" !== s[0].tagName && (e.a11y.addElRole(s, "button"), s.on("keydown", e.a11y.onEnterOrSpaceKey)), e.a11y.addElLabel(s, t.nextSlideMessage), e.a11y.addElControls(s, n)), a && a.length && (e.a11y.makeElFocusable(a), "BUTTON" !== a[0].tagName && (e.a11y.addElRole(a, "button"), a.on("keydown", e.a11y.onEnterOrSpaceKey)), e.a11y.addElLabel(a, t.prevSlideMessage), e.a11y.addElControls(a, n)), e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.on("keydown", M(e.params.pagination.bulletClass), e.a11y.onEnterOrSpaceKey)
            },
            destroy: function () {
                var e, t;
                this.a11y.liveRegion && this.a11y.liveRegion.length > 0 && this.a11y.liveRegion.remove(), this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl), this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl), e && e.off("keydown", this.a11y.onEnterOrSpaceKey), t && t.off("keydown", this.a11y.onEnterOrSpaceKey), this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.off("keydown", M(this.params.pagination.bulletClass), this.a11y.onEnterOrSpaceKey)
            }
        },
        Q = {
            init: function () {
                var e = l();
                if (this.params.history) {
                    if (!e.history || !e.history.pushState) return this.params.history.enabled = !1, void (this.params.hashNavigation.enabled = !0);
                    var t = this.history;
                    t.initialized = !0, t.paths = Q.getPathValues(this.params.url), (t.paths.key || t.paths.value) && (t.scrollToSlide(0, t.paths.value, this.params.runCallbacksOnInit), this.params.history.replaceState || e.addEventListener("popstate", this.history.setHistoryPopState))
                }
            },
            destroy: function () {
                var e = l();
                this.params.history.replaceState || e.removeEventListener("popstate", this.history.setHistoryPopState)
            },
            setHistoryPopState: function () {
                this.history.paths = Q.getPathValues(this.params.url), this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1)
            },
            getPathValues: function (e) {
                var t = l(),
                    i = (e ? new URL(e) : t.location).pathname.slice(1).split("/").filter(function (e) {
                        return "" !== e
                    }),
                    s = i.length;
                return {
                    key: i[s - 2],
                    value: i[s - 1]
                }
            },
            setHistory: function (e, t) {
                var i = l();
                if (this.history.initialized && this.params.history.enabled) {
                    var s;
                    s = this.params.url ? new URL(this.params.url) : i.location;
                    var a = this.slides.eq(t),
                        r = Q.slugify(a.attr("data-history"));
                    if (this.params.history.root.length > 0) {
                        var n = this.params.history.root;
                        "/" === n[n.length - 1] && (n = n.slice(0, n.length - 1)), r = n + "/" + e + "/" + r
                    } else s.pathname.includes(e) || (r = e + "/" + r);
                    var o = i.history.state;
                    o && o.value === r || (this.params.history.replaceState ? i.history.replaceState({
                        value: r
                    }, null, r) : i.history.pushState({
                        value: r
                    }, null, r))
                }
            },
            slugify: function (e) {
                return e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
            },
            scrollToSlide: function (e, t, i) {
                if (t)
                    for (var s = 0, a = this.slides.length; s < a; s += 1) {
                        var r = this.slides.eq(s);
                        if (Q.slugify(r.attr("data-history")) === t && !r.hasClass(this.params.slideDuplicateClass)) {
                            var n = r.index();
                            this.slideTo(n, e, i)
                        }
                    } else this.slideTo(0, e, i)
            }
        },
        ee = {
            onHashCange: function () {
                var e = r();
                this.emit("hashChange");
                var t = e.location.hash.replace("#", "");
                if (t !== this.slides.eq(this.activeIndex).attr("data-hash")) {
                    var i = this.$wrapperEl.children("." + this.params.slideClass + '[data-hash="' + t + '"]').index();
                    if (void 0 === i) return;
                    this.slideTo(i)
                }
            },
            setHash: function () {
                var e = l(),
                    t = r();
                if (this.hashNavigation.initialized && this.params.hashNavigation.enabled)
                    if (this.params.hashNavigation.replaceState && e.history && e.history.replaceState) e.history.replaceState(null, null, "#" + this.slides.eq(this.activeIndex).attr("data-hash") || ""), this.emit("hashSet");
                    else {
                        var i = this.slides.eq(this.activeIndex),
                            s = i.attr("data-hash") || i.attr("data-history");
                        t.location.hash = s || "", this.emit("hashSet")
                    }
            },
            init: function () {
                var e = r(),
                    t = l();
                if (!(!this.params.hashNavigation.enabled || this.params.history && this.params.history.enabled)) {
                    this.hashNavigation.initialized = !0;
                    var i = e.location.hash.replace("#", "");
                    if (i)
                        for (var s = 0, a = this.slides.length; s < a; s += 1) {
                            var n = this.slides.eq(s);
                            if ((n.attr("data-hash") || n.attr("data-history")) === i && !n.hasClass(this.params.slideDuplicateClass)) {
                                var o = n.index();
                                this.slideTo(o, 0, this.params.runCallbacksOnInit, !0)
                            }
                        }
                    this.params.hashNavigation.watchState && f(t).on("hashchange", this.hashNavigation.onHashCange)
                }
            },
            destroy: function () {
                var e = l();
                this.params.hashNavigation.watchState && f(e).off("hashchange", this.hashNavigation.onHashCange)
            }
        },
        te = {
            run: function () {
                var e = this,
                    t = e.slides.eq(e.activeIndex),
                    i = e.params.autoplay.delay;
                t.attr("data-swiper-autoplay") && (i = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), clearTimeout(e.autoplay.timeout), e.autoplay.timeout = w(function () {
                    var t;
                    e.params.autoplay.reverseDirection ? e.params.Loop ? (e.LoopFix(), t = e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (t = e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (t = e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.Loop ? (e.LoopFix(), t = e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (t = e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (t = e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")), e.params.cssMode && e.autoplay.running ? e.autoplay.run() : !1 === t && e.autoplay.run()
                }, i)
            },
            start: function () {
                return void 0 === this.autoplay.timeout && (!this.autoplay.running && (this.autoplay.running = !0, this.emit("autoplayStart"), this.autoplay.run(), !0))
            },
            stop: function () {
                return !!this.autoplay.running && (void 0 !== this.autoplay.timeout && (this.autoplay.timeout && (clearTimeout(this.autoplay.timeout), this.autoplay.timeout = void 0), this.autoplay.running = !1, this.emit("autoplayStop"), !0))
            },
            pause: function (e) {
                var t = this;
                t.autoplay.running && (t.autoplay.paused || (t.autoplay.timeout && clearTimeout(t.autoplay.timeout), t.autoplay.paused = !0, 0 !== e && t.params.autoplay.waitForTransition ? ["transitionend", "webkitTransitionEnd"].forEach(function (e) {
                    t.$wrapperEl[0].addEventListener(e, t.autoplay.onTransitionEnd)
                }) : (t.autoplay.paused = !1, t.autoplay.run())))
            },
            onVisibilityChange: function () {
                var e = r();
                "hidden" === e.visibilityState && this.autoplay.running && this.autoplay.pause(), "visible" === e.visibilityState && this.autoplay.paused && (this.autoplay.run(), this.autoplay.paused = !1)
            },
            onTransitionEnd: function (e) {
                var t = this;
                t && !t.destroyed && t.$wrapperEl && e.target === t.$wrapperEl[0] && (["transitionend", "webkitTransitionEnd"].forEach(function (e) {
                    t.$wrapperEl[0].removeEventListener(e, t.autoplay.onTransitionEnd)
                }), t.autoplay.paused = !1, t.autoplay.running ? t.autoplay.run() : t.autoplay.stop())
            },
            onMouseEnter: function () {
                var e = this;
                e.autoplay.pause(), ["transitionend", "webkitTransitionEnd"].forEach(function (t) {
                    e.$wrapperEl[0].removeEventListener(t, e.autoplay.onTransitionEnd)
                })
            },
            onMouseLeave: function () {
                this.autoplay.run()
            },
            attachMouseEvents: function () {
                this.params.autoplay.pauseOnMouseEnter && (this.$el.on("mouseenter", this.autoplay.onMouseEnter), this.$el.on("mouseleave", this.autoplay.onMouseLeave))
            },
            detachMouseEvents: function () {
                this.$el.off("mouseenter", this.autoplay.onMouseEnter), this.$el.off("mouseleave", this.autoplay.onMouseLeave)
            }
        },
        ie = {
            setTranslate: function () {
                for (var e = this.slides, t = 0; t < e.length; t += 1) {
                    var i = this.slides.eq(t),
                        s = -i[0].swiperSlideOffset;
                    this.params.virtualTranslate || (s -= this.translate);
                    var a = 0;
                    this.isHorizontal() || (a = s, s = 0);
                    var r = this.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
                    i.css({
                        opacity: r
                    }).transform("translate3d(" + s + "px, " + a + "px, 0px)")
                }
            },
            setTransition: function (e) {
                var t = this,
                    i = t.slides,
                    s = t.$wrapperEl;
                if (i.transition(e), t.params.virtualTranslate && 0 !== e) {
                    var a = !1;
                    i.transitionEnd(function () {
                        if (!a && t && !t.destroyed) {
                            a = !0, t.animating = !1;
                            for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1) s.trigger(e[i])
                        }
                    })
                }
            }
        },
        se = {
            setTranslate: function () {
                var e, t = this.$el,
                    i = this.$wrapperEl,
                    s = this.slides,
                    a = this.width,
                    r = this.height,
                    n = this.rtlTranslate,
                    l = this.size,
                    o = this.browser,
                    d = this.params.cubeEffect,
                    h = this.isHorizontal(),
                    p = this.virtual && this.params.virtual.enabled,
                    u = 0;
                d.shadow && (h ? (0 === (e = i.find(".swiper-cube-shadow")).length && (e = f('<div class="swiper-cube-shadow"></div>'), i.append(e)), e.css({
                    height: a + "px"
                })) : 0 === (e = t.find(".swiper-cube-shadow")).length && (e = f('<div class="swiper-cube-shadow"></div>'), t.append(e)));
                for (var c = 0; c < s.length; c += 1) {
                    var v = s.eq(c),
                        m = c;
                    p && (m = parseInt(v.attr("data-swiper-slide-index"), 10));
                    var g = 90 * m,
                        b = Math.floor(g / 360);
                    n && (g = -g, b = Math.floor(-g / 360));
                    var y = Math.max(Math.min(v[0].progress, 1), -1),
                        w = 0,
                        E = 0,
                        x = 0;
                    m % 4 == 0 ? (w = 4 * -b * l, x = 0) : (m - 1) % 4 == 0 ? (w = 0, x = 4 * -b * l) : (m - 2) % 4 == 0 ? (w = l + 4 * b * l, x = l) : (m - 3) % 4 == 0 && (w = -l, x = 3 * l + 4 * l * b), n && (w = -w), h || (E = w, w = 0);
                    var T = "rotateX(" + (h ? 0 : -g) + "deg) rotateY(" + (h ? g : 0) + "deg) translate3d(" + w + "px, " + E + "px, " + x + "px)";
                    if (y <= 1 && y > -1 && (u = 90 * m + 90 * y, n && (u = 90 * -m - 90 * y)), v.transform(T), d.slideShadows) {
                        var C = h ? v.find(".swiper-slide-shadow-left") : v.find(".swiper-slide-shadow-top"),
                            S = h ? v.find(".swiper-slide-shadow-right") : v.find(".swiper-slide-shadow-bottom");
                        0 === C.length && (C = f('<div class="swiper-slide-shadow-' + (h ? "left" : "top") + '"></div>'), v.append(C)), 0 === S.length && (S = f('<div class="swiper-slide-shadow-' + (h ? "right" : "bottom") + '"></div>'), v.append(S)), C.length && (C[0].style.opacity = Math.max(-y, 0)), S.length && (S[0].style.opacity = Math.max(y, 0))
                    }
                }
                if (i.css({
                    "-webkit-transform-origin": "50% 50% -" + l / 2 + "px",
                    "-moz-transform-origin": "50% 50% -" + l / 2 + "px",
                    "-ms-transform-origin": "50% 50% -" + l / 2 + "px",
                    "transform-origin": "50% 50% -" + l / 2 + "px"
                }), d.shadow)
                    if (h) e.transform("translate3d(0px, " + (a / 2 + d.shadowOffset) + "px, " + -a / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + d.shadowScale + ")");
                    else {
                        var M = Math.abs(u) - 90 * Math.floor(Math.abs(u) / 90),
                            z = 1.5 - (Math.sin(2 * M * Math.PI / 360) / 2 + Math.cos(2 * M * Math.PI / 360) / 2),
                            P = d.shadowScale,
                            k = d.shadowScale / z,
                            $ = d.shadowOffset;
                        e.transform("scale3d(" + P + ", 1, " + k + ") translate3d(0px, " + (r / 2 + $) + "px, " + -r / 2 / k + "px) rotateX(-90deg)")
                    } var L = o.isSafari || o.isWebView ? -l / 2 : 0;
                i.transform("translate3d(0px,0," + L + "px) rotateX(" + (this.isHorizontal() ? 0 : u) + "deg) rotateY(" + (this.isHorizontal() ? -u : 0) + "deg)")
            },
            setTransition: function (e) {
                var t = this.$el;
                this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(e)
            }
        },
        ae = {
            setTranslate: function () {
                for (var e = this.slides, t = this.rtlTranslate, i = 0; i < e.length; i += 1) {
                    var s = e.eq(i),
                        a = s[0].progress;
                    this.params.flipEffect.limitRotation && (a = Math.max(Math.min(s[0].progress, 1), -1));
                    var r = -180 * a,
                        n = 0,
                        l = -s[0].swiperSlideOffset,
                        o = 0;
                    if (this.isHorizontal() ? t && (r = -r) : (o = l, l = 0, n = -r, r = 0), s[0].style.zIndex = -Math.abs(Math.round(a)) + e.length, this.params.flipEffect.slideShadows) {
                        var d = this.isHorizontal() ? s.find(".swiper-slide-shadow-left") : s.find(".swiper-slide-shadow-top"),
                            h = this.isHorizontal() ? s.find(".swiper-slide-shadow-right") : s.find(".swiper-slide-shadow-bottom");
                        0 === d.length && (d = f('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "left" : "top") + '"></div>'), s.append(d)), 0 === h.length && (h = f('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "right" : "bottom") + '"></div>'), s.append(h)), d.length && (d[0].style.opacity = Math.max(-a, 0)), h.length && (h[0].style.opacity = Math.max(a, 0))
                    }
                    s.transform("translate3d(" + l + "px, " + o + "px, 0px) rotateX(" + n + "deg) rotateY(" + r + "deg)")
                }
            },
            setTransition: function (e) {
                var t = this,
                    i = t.slides,
                    s = t.activeIndex,
                    a = t.$wrapperEl;
                if (i.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.virtualTranslate && 0 !== e) {
                    var r = !1;
                    i.eq(s).transitionEnd(function () {
                        if (!r && t && !t.destroyed) {
                            r = !0, t.animating = !1;
                            for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1) a.trigger(e[i])
                        }
                    })
                }
            }
        },
        re = {
            setTranslate: function () {
                for (var e = this.width, t = this.height, i = this.slides, s = this.slidesSizesGrid, a = this.params.coverflowEffect, r = this.isHorizontal(), n = this.translate, l = r ? e / 2 - n : t / 2 - n, o = r ? a.rotate : -a.rotate, d = a.depth, h = 0, p = i.length; h < p; h += 1) {
                    var u = i.eq(h),
                        c = s[h],
                        v = (l - u[0].swiperSlideOffset - c / 2) / c * a.modifier,
                        m = r ? o * v : 0,
                        g = r ? 0 : o * v,
                        b = -d * Math.abs(v),
                        y = a.stretch;
                    "string" == typeof y && -1 !== y.indexOf("%") && (y = parseFloat(a.stretch) / 100 * c);
                    var w = r ? 0 : y * v,
                        E = r ? y * v : 0,
                        x = 1 - (1 - a.scale) * Math.abs(v);
                    Math.abs(E) < .001 && (E = 0), Math.abs(w) < .001 && (w = 0), Math.abs(b) < .001 && (b = 0), Math.abs(m) < .001 && (m = 0), Math.abs(g) < .001 && (g = 0), Math.abs(x) < .001 && (x = 0);
                    var T = "translate3d(" + E + "px," + w + "px," + b + "px)  rotateX(" + g + "deg) rotateY(" + m + "deg) scale(" + x + ")";
                    if (u.transform(T), u[0].style.zIndex = 1 - Math.abs(Math.round(v)), a.slideShadows) {
                        var C = r ? u.find(".swiper-slide-shadow-left") : u.find(".swiper-slide-shadow-top"),
                            S = r ? u.find(".swiper-slide-shadow-right") : u.find(".swiper-slide-shadow-bottom");
                        0 === C.length && (C = f('<div class="swiper-slide-shadow-' + (r ? "left" : "top") + '"></div>'), u.append(C)), 0 === S.length && (S = f('<div class="swiper-slide-shadow-' + (r ? "right" : "bottom") + '"></div>'), u.append(S)), C.length && (C[0].style.opacity = v > 0 ? v : 0), S.length && (S[0].style.opacity = -v > 0 ? -v : 0)
                    }
                }
            },
            setTransition: function (e) {
                this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
            }
        },
        ne = {
            init: function () {
                var e = this.params.thumbs;
                if (this.thumbs.initialized) return !1;
                this.thumbs.initialized = !0;
                var t = this.constructor;
                return e.swiper instanceof t ? (this.thumbs.swiper = e.swiper, C(this.thumbs.swiper.originalParams, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                }), C(this.thumbs.swiper.params, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                })) : T(e.swiper) && (this.thumbs.swiper = new t(C({}, e.swiper, {
                    watchSlidesVisibility: !0,
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                })), this.thumbs.swiperCreated = !0), this.thumbs.swiper.$el.addClass(this.params.thumbs.thumbsContainerClass), this.thumbs.swiper.on("tap", this.thumbs.onThumbClick), !0
            },
            onThumbClick: function () {
                var e = this.thumbs.swiper;
                if (e) {
                    var t = e.clickedIndex,
                        i = e.clickedSlide;
                    if (!(i && f(i).hasClass(this.params.thumbs.slideThumbActiveClass) || null == t)) {
                        var s;
                        if (s = e.params.Loop ? parseInt(f(e.clickedSlide).attr("data-swiper-slide-index"), 10) : t, this.params.Loop) {
                            var a = this.activeIndex;
                            this.slides.eq(a).hasClass(this.params.slideDuplicateClass) && (this.LoopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft, a = this.activeIndex);
                            var r = this.slides.eq(a).prevAll('[data-swiper-slide-index="' + s + '"]').eq(0).index(),
                                n = this.slides.eq(a).nextAll('[data-swiper-slide-index="' + s + '"]').eq(0).index();
                            s = void 0 === r ? n : void 0 === n ? r : n - a < a - r ? n : r
                        }
                        this.slideTo(s)
                    }
                }
            },
            update: function (e) {
                var t = this.thumbs.swiper;
                if (t) {
                    var i = "auto" === t.params.slidesPerView ? t.slidesPerViewDynamic() : t.params.slidesPerView,
                        s = this.params.thumbs.autoScrollOffset,
                        a = s && !t.params.Loop;
                    if (this.realIndex !== t.realIndex || a) {
                        var r, n, l = t.activeIndex;
                        if (t.params.Loop) {
                            t.slides.eq(l).hasClass(t.params.slideDuplicateClass) && (t.LoopFix(), t._clientLeft = t.$wrapperEl[0].clientLeft, l = t.activeIndex);
                            var o = t.slides.eq(l).prevAll('[data-swiper-slide-index="' + this.realIndex + '"]').eq(0).index(),
                                d = t.slides.eq(l).nextAll('[data-swiper-slide-index="' + this.realIndex + '"]').eq(0).index();
                            r = void 0 === o ? d : void 0 === d ? o : d - l == l - o ? l : d - l < l - o ? d : o, n = this.activeIndex > this.previousIndex ? "next" : "prev"
                        } else n = (r = this.realIndex) > this.previousIndex ? "next" : "prev";
                        a && (r += "next" === n ? s : -1 * s), t.visibleSlidesIndexes && t.visibleSlidesIndexes.indexOf(r) < 0 && (t.params.centeredSlides ? r = r > l ? r - Math.floor(i / 2) + 1 : r + Math.floor(i / 2) - 1 : r > l && (r = r - i + 1), t.slideTo(r, e ? 0 : void 0))
                    }
                    var h = 1,
                        p = this.params.thumbs.slideThumbActiveClass;
                    if (this.params.slidesPerView > 1 && !this.params.centeredSlides && (h = this.params.slidesPerView), this.params.thumbs.multipleActiveThumbs || (h = 1), h = Math.floor(h), t.slides.removeClass(p), t.params.Loop || t.params.virtual && t.params.virtual.enabled)
                        for (var u = 0; u < h; u += 1) t.$wrapperEl.children('[data-swiper-slide-index="' + (this.realIndex + u) + '"]').addClass(p);
                    else
                        for (var c = 0; c < h; c += 1) t.slides.eq(this.realIndex + c).addClass(p)
                }
            }
        },
        le = [Y, W, {
            name: "mousewheel",
            params: {
                mousewheel: {
                    enabled: !1,
                    releaseOnEdges: !1,
                    invert: !1,
                    forceToAxis: !1,
                    sensitivity: 1,
                    eventsTarget: "container",
                    thresholdDelta: null,
                    thresholdTime: null
                }
            },
            create: function () {
                S(this, {
                    mousewheel: {
                        enabled: !1,
                        lastScrollTime: E(),
                        lastEventBeforeSnap: void 0,
                        recentWheelEvents: [],
                        enable: V.enable,
                        disable: V.disable,
                        handle: V.handle,
                        handleMouseEnter: V.handleMouseEnter,
                        handleMouseLeave: V.handleMouseLeave,
                        animateSlider: V.animateSlider,
                        releaseScroll: V.releaseScroll
                    }
                })
            },
            on: {
                init: function (e) {
                    !e.params.mousewheel.enabled && e.params.cssMode && e.mousewheel.disable(), e.params.mousewheel.enabled && e.mousewheel.enable()
                },
                destroy: function (e) {
                    e.params.cssMode && e.mousewheel.enable(), e.mousewheel.enabled && e.mousewheel.disable()
                }
            }
        }, {
                name: "navigation",
                params: {
                    navigation: {
                        nextEl: null,
                        prevEl: null,
                        hideOnClick: !1,
                        disabledClass: "swiper-button-disabled",
                        hiddenClass: "swiper-button-hidden",
                        lockClass: "swiper-button-lock"
                    }
                },
                create: function () {
                    S(this, {
                        navigation: t({}, F)
                    })
                },
                on: {
                    init: function (e) {
                        e.navigation.init(), e.navigation.update()
                    },
                    toEdge: function (e) {
                        e.navigation.update()
                    },
                    fromEdge: function (e) {
                        e.navigation.update()
                    },
                    destroy: function (e) {
                        e.navigation.destroy()
                    },
                    "enable disable": function (e) {
                        var t = e.navigation,
                            i = t.$nextEl,
                            s = t.$prevEl;
                        i && i[e.enabled ? "removeClass" : "addClass"](e.params.navigation.lockClass), s && s[e.enabled ? "removeClass" : "addClass"](e.params.navigation.lockClass)
                    },
                    click: function (e, t) {
                        var i = e.navigation,
                            s = i.$nextEl,
                            a = i.$prevEl,
                            r = t.target;
                        if (e.params.navigation.hideOnClick && !f(r).is(a) && !f(r).is(s)) {
                            if (e.pagination && e.params.pagination && e.params.pagination.clickable && (e.pagination.el === r || e.pagination.el.contains(r))) return;
                            var n;
                            s ? n = s.hasClass(e.params.navigation.hiddenClass) : a && (n = a.hasClass(e.params.navigation.hiddenClass)), !0 === n ? e.emit("navigationShow") : e.emit("navigationHide"), s && s.toggleClass(e.params.navigation.hiddenClass), a && a.toggleClass(e.params.navigation.hiddenClass)
                        }
                    }
                }
            }, {
                name: "pagination",
                params: {
                    pagination: {
                        el: null,
                        bulletElement: "span",
                        clickable: !1,
                        hideOnClick: !1,
                        renderBullet: null,
                        renderProgressbar: null,
                        renderFraction: null,
                        renderCustom: null,
                        progressbarOpposite: !1,
                        type: "bullets",
                        dynamicBullets: !1,
                        dynamicMainBullets: 1,
                        formatFractionCurrent: function (e) {
                            return e
                        },
                        formatFractionTotal: function (e) {
                            return e
                        },
                        bulletClass: "swiper-pagination-bullet",
                        bulletActiveClass: "swiper-pagination-bullet-active",
                        modifierClass: "swiper-pagination-",
                        currentClass: "swiper-pagination-current",
                        totalClass: "swiper-pagination-total",
                        hiddenClass: "swiper-pagination-hidden",
                        progressbarFillClass: "swiper-pagination-progressbar-fill",
                        progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
                        clickableClass: "swiper-pagination-clickable",
                        lockClass: "swiper-pagination-lock"
                    }
                },
                create: function () {
                    S(this, {
                        pagination: t({
                            dynamicBulletIndex: 0
                        }, _)
                    })
                },
                on: {
                    init: function (e) {
                        e.pagination.init(), e.pagination.render(), e.pagination.update()
                    },
                    activeIndexChange: function (e) {
                        e.params.Loop ? e.pagination.update() : void 0 === e.snapIndex && e.pagination.update()
                    },
                    snapIndexChange: function (e) {
                        e.params.Loop || e.pagination.update()
                    },
                    slidesLengthChange: function (e) {
                        e.params.Loop && (e.pagination.render(), e.pagination.update())
                    },
                    snapGridLengthChange: function (e) {
                        e.params.Loop || (e.pagination.render(), e.pagination.update())
                    },
                    destroy: function (e) {
                        e.pagination.destroy()
                    },
                    "enable disable": function (e) {
                        var t = e.pagination.$el;
                        t && t[e.enabled ? "removeClass" : "addClass"](e.params.pagination.lockClass)
                    },
                    click: function (e, t) {
                        var i = t.target;
                        if (e.params.pagination.el && e.params.pagination.hideOnClick && e.pagination.$el.length > 0 && !f(i).hasClass(e.params.pagination.bulletClass)) {
                            if (e.navigation && (e.navigation.nextEl && i === e.navigation.nextEl || e.navigation.prevEl && i === e.navigation.prevEl)) return;
                            !0 === e.pagination.$el.hasClass(e.params.pagination.hiddenClass) ? e.emit("paginationShow") : e.emit("paginationHide"), e.pagination.$el.toggleClass(e.params.pagination.hiddenClass)
                        }
                    }
                }
            }, {
                name: "scrollbar",
                params: {
                    scrollbar: {
                        el: null,
                        dragSize: "auto",
                        hide: !1,
                        draggable: !1,
                        snapOnRelease: !0,
                        lockClass: "swiper-scrollbar-lock",
                        dragClass: "swiper-scrollbar-drag"
                    }
                },
                create: function () {
                    S(this, {
                        scrollbar: t({
                            isTouched: !1,
                            timeout: null,
                            dragTimeout: null
                        }, q)
                    })
                },
                on: {
                    init: function (e) {
                        e.scrollbar.init(), e.scrollbar.updateSize(), e.scrollbar.setTranslate()
                    },
                    update: function (e) {
                        e.scrollbar.updateSize()
                    },
                    resize: function (e) {
                        e.scrollbar.updateSize()
                    },
                    observerUpdate: function (e) {
                        e.scrollbar.updateSize()
                    },
                    setTranslate: function (e) {
                        e.scrollbar.setTranslate()
                    },
                    setTransition: function (e, t) {
                        e.scrollbar.setTransition(t)
                    },
                    "enable disable": function (e) {
                        var t = e.scrollbar.$el;
                        t && t[e.enabled ? "removeClass" : "addClass"](e.params.scrollbar.lockClass)
                    },
                    destroy: function (e) {
                        e.scrollbar.destroy()
                    }
                }
            }, {
                name: "parallax",
                params: {
                    parallax: {
                        enabled: !1
                    }
                },
                create: function () {
                    S(this, {
                        parallax: t({}, j)
                    })
                },
                on: {
                    beforeInit: function (e) {
                        e.params.parallax.enabled && (e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0)
                    },
                    init: function (e) {
                        e.params.parallax.enabled && e.parallax.setTranslate()
                    },
                    setTranslate: function (e) {
                        e.params.parallax.enabled && e.parallax.setTranslate()
                    },
                    setTransition: function (e, t) {
                        e.params.parallax.enabled && e.parallax.setTransition(t)
                    }
                }
            }, {
                name: "zoom",
                params: {
                    zoom: {
                        enabled: !1,
                        maxRatio: 3,
                        minRatio: 1,
                        toggle: !0,
                        containerClass: "swiper-zoom-container",
                        zoomedSlideClass: "swiper-slide-zoomed"
                    }
                },
                create: function () {
                    var e = this;
                    S(e, {
                        zoom: t({
                            enabled: !1,
                            scale: 1,
                            currentScale: 1,
                            isScaling: !1,
                            gesture: {
                                $slideEl: void 0,
                                slideWidth: void 0,
                                slideHeight: void 0,
                                $imageEl: void 0,
                                $imageWrapEl: void 0,
                                maxRatio: 3
                            },
                            image: {
                                isTouched: void 0,
                                isMoved: void 0,
                                currentX: void 0,
                                currentY: void 0,
                                minX: void 0,
                                minY: void 0,
                                maxX: void 0,
                                maxY: void 0,
                                width: void 0,
                                height: void 0,
                                startX: void 0,
                                startY: void 0,
                                touchesStart: {},
                                touchesCurrent: {}
                            },
                            velocity: {
                                x: void 0,
                                y: void 0,
                                prevPositionX: void 0,
                                prevPositionY: void 0,
                                prevTime: void 0
                            }
                        }, U)
                    });
                    var i = 1;
                    Object.defineProperty(e.zoom, "scale", {
                        get: function () {
                            return i
                        },
                        set: function (t) {
                            if (i !== t) {
                                var s = e.zoom.gesture.$imageEl ? e.zoom.gesture.$imageEl[0] : void 0,
                                    a = e.zoom.gesture.$slideEl ? e.zoom.gesture.$slideEl[0] : void 0;
                                e.emit("zoomChange", t, s, a)
                            }
                            i = t
                        }
                    })
                },
                on: {
                    init: function (e) {
                        e.params.zoom.enabled && e.zoom.enable()
                    },
                    destroy: function (e) {
                        e.zoom.disable()
                    },
                    touchStart: function (e, t) {
                        e.zoom.enabled && e.zoom.onTouchStart(t)
                    },
                    touchEnd: function (e, t) {
                        e.zoom.enabled && e.zoom.onTouchEnd(t)
                    },
                    doubleTap: function (e, t) {
                        !e.animating && e.params.zoom.enabled && e.zoom.enabled && e.params.zoom.toggle && e.zoom.toggle(t)
                    },
                    transitionEnd: function (e) {
                        e.zoom.enabled && e.params.zoom.enabled && e.zoom.onTransitionEnd()
                    },
                    slideChange: function (e) {
                        e.zoom.enabled && e.params.zoom.enabled && e.params.cssMode && e.zoom.onTransitionEnd()
                    }
                }
            }, {
                name: "lazy",
                params: {
                    lazy: {
                        checkInView: !1,
                        enabled: !1,
                        loadPrevNext: !1,
                        loadPrevNextAmount: 1,
                        loadOnTransitionStart: !1,
                        scrollingElement: "",
                        elementClass: "swiper-lazy",
                        loadingClass: "swiper-lazy-loading",
                        loadedClass: "swiper-lazy-loaded",
                        preloaderClass: "swiper-lazy-preloader"
                    }
                },
                create: function () {
                    S(this, {
                        lazy: t({
                            initialImageLoaded: !1
                        }, K)
                    })
                },
                on: {
                    beforeInit: function (e) {
                        e.params.lazy.enabled && e.params.preloadImages && (e.params.preloadImages = !1)
                    },
                    init: function (e) {
                        e.params.lazy.enabled && !e.params.Loop && 0 === e.params.initialSlide && (e.params.lazy.checkInView ? e.lazy.checkInViewOnLoad() : e.lazy.load())
                    },
                    scroll: function (e) {
                        e.params.freeMode && !e.params.freeModeSticky && e.lazy.load()
                    },
                    "scrollbarDragMove resize _freeModeNoMomentumRelease": function (e) {
                        e.params.lazy.enabled && e.lazy.load()
                    },
                    transitionStart: function (e) {
                        e.params.lazy.enabled && (e.params.lazy.loadOnTransitionStart || !e.params.lazy.loadOnTransitionStart && !e.lazy.initialImageLoaded) && e.lazy.load()
                    },
                    transitionEnd: function (e) {
                        e.params.lazy.enabled && !e.params.lazy.loadOnTransitionStart && e.lazy.load()
                    },
                    slideChange: function (e) {
                        e.params.lazy.enabled && e.params.cssMode && e.lazy.load()
                    }
                }
            }, {
                name: "controller",
                params: {
                    controller: {
                        control: void 0,
                        inverse: !1,
                        by: "slide"
                    }
                },
                create: function () {
                    S(this, {
                        controller: t({
                            control: this.params.controller.control
                        }, Z)
                    })
                },
                on: {
                    update: function (e) {
                        e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline)
                    },
                    resize: function (e) {
                        e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline)
                    },
                    observerUpdate: function (e) {
                        e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline)
                    },
                    setTranslate: function (e, t, i) {
                        e.controller.control && e.controller.setTranslate(t, i)
                    },
                    setTransition: function (e, t, i) {
                        e.controller.control && e.controller.setTransition(t, i)
                    }
                }
            }, {
                name: "a11y",
                params: {
                    a11y: {
                        enabled: !0,
                        notificationClass: "swiper-notification",
                        prevSlideMessage: "Previous slide",
                        nextSlideMessage: "Next slide",
                        firstSlideMessage: "This is the first slide",
                        lastSlideMessage: "This is the last slide",
                        paginationBulletMessage: "Go to slide {{index}}",
                        slideLabelMessage: "{{index}} / {{slidesLength}}",
                        containerMessage: null,
                        containerRoleDescriptionMessage: null,
                        itemRoleDescriptionMessage: null,
                        slideRole: "group"
                    }
                },
                create: function () {
                    S(this, {
                        a11y: t({}, J, {
                            liveRegion: f('<span class="' + this.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')
                        })
                    })
                },
                on: {
                    afterInit: function (e) {
                        e.params.a11y.enabled && (e.a11y.init(), e.a11y.updateNavigation())
                    },
                    toEdge: function (e) {
                        e.params.a11y.enabled && e.a11y.updateNavigation()
                    },
                    fromEdge: function (e) {
                        e.params.a11y.enabled && e.a11y.updateNavigation()
                    },
                    paginationUpdate: function (e) {
                        e.params.a11y.enabled && e.a11y.updatePagination()
                    },
                    destroy: function (e) {
                        e.params.a11y.enabled && e.a11y.destroy()
                    }
                }
            }, {
                name: "history",
                params: {
                    history: {
                        enabled: !1,
                        root: "",
                        replaceState: !1,
                        key: "slides"
                    }
                },
                create: function () {
                    S(this, {
                        history: t({}, Q)
                    })
                },
                on: {
                    init: function (e) {
                        e.params.history.enabled && e.history.init()
                    },
                    destroy: function (e) {
                        e.params.history.enabled && e.history.destroy()
                    },
                    "transitionEnd _freeModeNoMomentumRelease": function (e) {
                        e.history.initialized && e.history.setHistory(e.params.history.key, e.activeIndex)
                    },
                    slideChange: function (e) {
                        e.history.initialized && e.params.cssMode && e.history.setHistory(e.params.history.key, e.activeIndex)
                    }
                }
            }, {
                name: "hash-navigation",
                params: {
                    hashNavigation: {
                        enabled: !1,
                        replaceState: !1,
                        watchState: !1
                    }
                },
                create: function () {
                    S(this, {
                        hashNavigation: t({
                            initialized: !1
                        }, ee)
                    })
                },
                on: {
                    init: function (e) {
                        e.params.hashNavigation.enabled && e.hashNavigation.init()
                    },
                    destroy: function (e) {
                        e.params.hashNavigation.enabled && e.hashNavigation.destroy()
                    },
                    "transitionEnd _freeModeNoMomentumRelease": function (e) {
                        e.hashNavigation.initialized && e.hashNavigation.setHash()
                    },
                    slideChange: function (e) {
                        e.hashNavigation.initialized && e.params.cssMode && e.hashNavigation.setHash()
                    }
                }
            }, {
                name: "autoplay",
                params: {
                    autoplay: {
                        enabled: !1,
                        delay: 3e3,
                        waitForTransition: !0,
                        disableOnInteraction: !0,
                        stopOnLastSlide: !1,
                        reverseDirection: !1,
                        pauseOnMouseEnter: !1
                    }
                },
                create: function () {
                    S(this, {
                        autoplay: t({}, te, {
                            running: !1,
                            paused: !1
                        })
                    })
                },
                on: {
                    init: function (e) {
                        e.params.autoplay.enabled && (e.autoplay.start(), r().addEventListener("visibilitychange", e.autoplay.onVisibilityChange), e.autoplay.attachMouseEvents())
                    },
                    beforeTransitionStart: function (e, t, i) {
                        e.autoplay.running && (i || !e.params.autoplay.disableOnInteraction ? e.autoplay.pause(t) : e.autoplay.stop())
                    },
                    sliderFirstMove: function (e) {
                        e.autoplay.running && (e.params.autoplay.disableOnInteraction ? e.autoplay.stop() : e.autoplay.pause())
                    },
                    touchEnd: function (e) {
                        e.params.cssMode && e.autoplay.paused && !e.params.autoplay.disableOnInteraction && e.autoplay.run()
                    },
                    destroy: function (e) {
                        e.autoplay.detachMouseEvents(), e.autoplay.running && e.autoplay.stop(), r().removeEventListener("visibilitychange", e.autoplay.onVisibilityChange)
                    }
                }
            }, {
                name: "effect-fade",
                params: {
                    fadeEffect: {
                        crossFade: !1
                    }
                },
                create: function () {
                    S(this, {
                        fadeEffect: t({}, ie)
                    })
                },
                on: {
                    beforeInit: function (e) {
                        if ("fade" === e.params.effect) {
                            e.classNames.push(e.params.containerModifierClass + "fade");
                            var t = {
                                slidesPerView: 1,
                                slidesPerColumn: 1,
                                slidesPerGroup: 1,
                                watchSlidesProgress: !0,
                                spaceBetween: 0,
                                virtualTranslate: !0
                            };
                            C(e.params, t), C(e.originalParams, t)
                        }
                    },
                    setTranslate: function (e) {
                        "fade" === e.params.effect && e.fadeEffect.setTranslate()
                    },
                    setTransition: function (e, t) {
                        "fade" === e.params.effect && e.fadeEffect.setTransition(t)
                    }
                }
            }, {
                name: "effect-cube",
                params: {
                    cubeEffect: {
                        slideShadows: !0,
                        shadow: !0,
                        shadowOffset: 20,
                        shadowScale: .94
                    }
                },
                create: function () {
                    S(this, {
                        cubeEffect: t({}, se)
                    })
                },
                on: {
                    beforeInit: function (e) {
                        if ("cube" === e.params.effect) {
                            e.classNames.push(e.params.containerModifierClass + "cube"), e.classNames.push(e.params.containerModifierClass + "3d");
                            var t = {
                                slidesPerView: 1,
                                slidesPerColumn: 1,
                                slidesPerGroup: 1,
                                watchSlidesProgress: !0,
                                resistanceRatio: 0,
                                spaceBetween: 0,
                                centeredSlides: !1,
                                virtualTranslate: !0
                            };
                            C(e.params, t), C(e.originalParams, t)
                        }
                    },
                    setTranslate: function (e) {
                        "cube" === e.params.effect && e.cubeEffect.setTranslate()
                    },
                    setTransition: function (e, t) {
                        "cube" === e.params.effect && e.cubeEffect.setTransition(t)
                    }
                }
            }, {
                name: "effect-flip",
                params: {
                    flipEffect: {
                        slideShadows: !0,
                        limitRotation: !0
                    }
                },
                create: function () {
                    S(this, {
                        flipEffect: t({}, ae)
                    })
                },
                on: {
                    beforeInit: function (e) {
                        if ("flip" === e.params.effect) {
                            e.classNames.push(e.params.containerModifierClass + "flip"), e.classNames.push(e.params.containerModifierClass + "3d");
                            var t = {
                                slidesPerView: 1,
                                slidesPerColumn: 1,
                                slidesPerGroup: 1,
                                watchSlidesProgress: !0,
                                spaceBetween: 0,
                                virtualTranslate: !0
                            };
                            C(e.params, t), C(e.originalParams, t)
                        }
                    },
                    setTranslate: function (e) {
                        "flip" === e.params.effect && e.flipEffect.setTranslate()
                    },
                    setTransition: function (e, t) {
                        "flip" === e.params.effect && e.flipEffect.setTransition(t)
                    }
                }
            }, {
                name: "effect-coverflow",
                params: {
                    coverflowEffect: {
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        scale: 1,
                        modifier: 1,
                        slideShadows: !0
                    }
                },
                create: function () {
                    S(this, {
                        coverflowEffect: t({}, re)
                    })
                },
                on: {
                    beforeInit: function (e) {
                        "coverflow" === e.params.effect && (e.classNames.push(e.params.containerModifierClass + "coverflow"), e.classNames.push(e.params.containerModifierClass + "3d"), e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0)
                    },
                    setTranslate: function (e) {
                        "coverflow" === e.params.effect && e.coverflowEffect.setTranslate()
                    },
                    setTransition: function (e, t) {
                        "coverflow" === e.params.effect && e.coverflowEffect.setTransition(t)
                    }
                }
            }, {
                name: "thumbs",
                params: {
                    thumbs: {
                        swiper: null,
                        multipleActiveThumbs: !0,
                        autoScrollOffset: 0,
                        slideThumbActiveClass: "swiper-slide-thumb-active",
                        thumbsContainerClass: "swiper-container-thumbs"
                    }
                },
                create: function () {
                    S(this, {
                        thumbs: t({
                            swiper: null,
                            initialized: !1
                        }, ne)
                    })
                },
                on: {
                    beforeInit: function (e) {
                        var t = e.params.thumbs;
                        t && t.swiper && (e.thumbs.init(), e.thumbs.update(!0))
                    },
                    slideChange: function (e) {
                        e.thumbs.swiper && e.thumbs.update()
                    },
                    update: function (e) {
                        e.thumbs.swiper && e.thumbs.update()
                    },
                    resize: function (e) {
                        e.thumbs.swiper && e.thumbs.update()
                    },
                    observerUpdate: function (e) {
                        e.thumbs.swiper && e.thumbs.update()
                    },
                    setTransition: function (e, t) {
                        var i = e.thumbs.swiper;
                        i && i.setTransition(t)
                    },
                    beforeDestroy: function (e) {
                        var t = e.thumbs.swiper;
                        t && e.thumbs.swiperCreated && t && t.destroy()
                    }
                }
            }];
    return H.use(le), H
});

//jquery.easing.js

! function (n) {
    "function" == typeof define && define.amd ? define(["jquery"], function (e) {
        return n(e)
    }) : "object" == typeof module && "object" == typeof module.exports ? exports = n(require("jquery")) : n(jQuery)
}(function (n) {
    n.easing.jswing = n.easing.swing;
    var e = Math.pow,
        t = Math.sqrt,
        u = Math.sin,
        r = Math.cos,
        i = Math.PI,
        a = 1.70158,
        c = 1.525 * a,
        o = 2 * i / 3,
        s = 2 * i / 4.5;

    function f(n) {
        var e = 7.5625,
            t = 2.75;
        return n < 1 / t ? e * n * n : n < 2 / t ? e * (n -= 1.5 / t) * n + .75 : n < 2.5 / t ? e * (n -= 2.25 / t) * n + .9375 : e * (n -= 2.625 / t) * n + .984375
    }
    n.extend(n.easing, {
        def: "easeOutQuad",
        swing: function (e) {
            return n.easing[n.easing.def](e)
        },
        easeInQuad: function (n) {
            return n * n
        },
        easeOutQuad: function (n) {
            return 1 - (1 - n) * (1 - n)
        },
        easeInOutQuad: function (n) {
            return n < .5 ? 2 * n * n : 1 - e(-2 * n + 2, 2) / 2
        },
        easeInCubic: function (n) {
            return n * n * n
        },
        easeOutCubic: function (n) {
            return 1 - e(1 - n, 3)
        },
        easeInOutCubic: function (n) {
            return n < .5 ? 4 * n * n * n : 1 - e(-2 * n + 2, 3) / 2
        },
        easeInQuart: function (n) {
            return n * n * n * n
        },
        easeOutQuart: function (n) {
            return 1 - e(1 - n, 4)
        },
        easeInOutQuart: function (n) {
            return n < .5 ? 8 * n * n * n * n : 1 - e(-2 * n + 2, 4) / 2
        },
        easeInQuint: function (n) {
            return n * n * n * n * n
        },
        easeOutQuint: function (n) {
            return 1 - e(1 - n, 5)
        },
        easeInOutQuint: function (n) {
            return n < .5 ? 16 * n * n * n * n * n : 1 - e(-2 * n + 2, 5) / 2
        },
        easeInSine: function (n) {
            return 1 - r(n * i / 2)
        },
        easeOutSine: function (n) {
            return u(n * i / 2)
        },
        easeInOutSine: function (n) {
            return -(r(i * n) - 1) / 2
        },
        easeInExpo: function (n) {
            return 0 === n ? 0 : e(2, 10 * n - 10)
        },
        easeOutExpo: function (n) {
            return 1 === n ? 1 : 1 - e(2, -10 * n)
        },
        easeInOutExpo: function (n) {
            return 0 === n ? 0 : 1 === n ? 1 : n < .5 ? e(2, 20 * n - 10) / 2 : (2 - e(2, -20 * n + 10)) / 2
        },
        easeInCirc: function (n) {
            return 1 - t(1 - e(n, 2))
        },
        easeOutCirc: function (n) {
            return t(1 - e(n - 1, 2))
        },
        easeInOutCirc: function (n) {
            return n < .5 ? (1 - t(1 - e(2 * n, 2))) / 2 : (t(1 - e(-2 * n + 2, 2)) + 1) / 2
        },
        easeInElastic: function (n) {
            return 0 === n ? 0 : 1 === n ? 1 : -e(2, 10 * n - 10) * u((10 * n - 10.75) * o)
        },
        easeOutElastic: function (n) {
            return 0 === n ? 0 : 1 === n ? 1 : e(2, -10 * n) * u((10 * n - .75) * o) + 1
        },
        easeInOutElastic: function (n) {
            return 0 === n ? 0 : 1 === n ? 1 : n < .5 ? -e(2, 20 * n - 10) * u((20 * n - 11.125) * s) / 2 : e(2, -20 * n + 10) * u((20 * n - 11.125) * s) / 2 + 1
        },
        easeInBack: function (n) {
            return 2.70158 * n * n * n - a * n * n
        },
        easeOutBack: function (n) {
            return 1 + 2.70158 * e(n - 1, 3) + a * e(n - 1, 2)
        },
        easeInOutBack: function (n) {
            return n < .5 ? e(2 * n, 2) * (7.189819 * n - c) / 2 : (e(2 * n - 2, 2) * ((c + 1) * (2 * n - 2) + c) + 2) / 2
        },
        easeInBounce: function (n) {
            return 1 - f(1 - n)
        },
        easeOutBounce: f,
        easeInOutBounce: function (n) {
            return n < .5 ? (1 - f(1 - 2 * n)) / 2 : (1 + f(2 * n - 1)) / 2
        }
    })
});

//jquery.validate.js

! function (t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof module && module.exports ? module.exports = t(require("jquery")) : t(jQuery)
}(function (t) {
    t.extend(t.fn, {
        validate: function (e) {
            if (this.length) {
                var i = t.data(this[0], "validator");
                return i || (this.attr("novalidate", "novalidate"), i = new t.validator(e, this[0]), t.data(this[0], "validator", i), i.settings.onsubmit && (this.on("click.validate", ":submit", function (e) {
                    i.submitButton = e.currentTarget, t(this).hasClass("cancel") && (i.cancelSubmit = !0), void 0 !== t(this).attr("formnovalidate") && (i.cancelSubmit = !0)
                }), this.on("submit.validate", function (e) {
                    function s() {
                        var s, n;
                        return i.submitButton && (i.settings.submitHandler || i.formSubmitted) && (s = t("<input type='hidden'/>").attr("name", i.submitButton.name).val(t(i.submitButton).val()).appendTo(i.currentForm)), !(i.settings.submitHandler && !i.settings.debug) || (n = i.settings.submitHandler.call(i, i.currentForm, e), s && s.remove(), void 0 !== n && n)
                    }
                    return i.settings.debug && e.preventDefault(), i.cancelSubmit ? (i.cancelSubmit = !1, s()) : i.form() ? i.pendingRequest ? (i.formSubmitted = !0, !1) : s() : (i.focusInvalid(), !1)
                })), i)
            }
            e && e.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing.")
        },
        valid: function () {
            var e, i, s;
            return t(this[0]).is("form") ? e = this.validate().form() : (s = [], e = !0, i = t(this[0].form).validate(), this.each(function () {
                (e = i.element(this) && e) || (s = s.concat(i.errorList))
            }), i.errorList = s), e
        },
        rules: function (e, i) {
            var s, n, r, a, o, l, h = this[0],
                d = void 0 !== this.attr("contenteditable") && "false" !== this.attr("contenteditable");
            if (null != h && (!h.form && d && (h.form = this.closest("form")[0], h.name = this.attr("name")), null != h.form)) {
                if (e) switch (n = (s = t.data(h.form, "validator").settings).rules, r = t.validator.staticRules(h), e) {
                    case "add":
                        t.extend(r, t.validator.normalizeRule(i)), delete r.messages, n[h.name] = r, i.messages && (s.messages[h.name] = t.extend(s.messages[h.name], i.messages));
                        break;
                    case "remove":
                        return i ? (l = {}, t.each(i.split(/\s/), function (t, e) {
                            l[e] = r[e], delete r[e]
                        }), l) : (delete n[h.name], r)
                }
                return (a = t.validator.normalizeRules(t.extend({}, t.validator.classRules(h), t.validator.attributeRules(h), t.validator.dataRules(h), t.validator.staticRules(h)), h)).required && (o = a.required, delete a.required, a = t.extend({
                    required: o
                }, a)), a.remote && (o = a.remote, delete a.remote, a = t.extend(a, {
                    remote: o
                })), a
            }
        }
    });
    var e, i = function (t) {
        return t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
    };
    t.extend(t.expr.pseudos || t.expr[":"], {
        blank: function (e) {
            return !i("" + t(e).val())
        },
        filled: function (e) {
            var s = t(e).val();
            return null !== s && !!i("" + s)
        },
        unchecked: function (e) {
            return !t(e).prop("checked")
        }
    }), t.validator = function (e, i) {
        this.settings = t.extend(!0, {}, t.validator.defaults, e), this.currentForm = i, this.init()
    }, t.validator.format = function (e, i) {
        return 1 === arguments.length ? function () {
            var i = t.makeArray(arguments);
            return i.unshift(e), t.validator.format.apply(this, i)
        } : void 0 === i ? e : (arguments.length > 2 && i.constructor !== Array && (i = t.makeArray(arguments).slice(1)), i.constructor !== Array && (i = [i]), t.each(i, function (t, i) {
            e = e.replace(new RegExp("\\{" + t + "\\}", "g"), function () {
                return i
            })
        }), e)
    }, t.extend(t.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            pendingClass: "pending",
            validClass: "valid",
            errorElement: "label",
            focusCleanup: !1,
            focusInvalid: !0,
            errorContainer: t([]),
            errorLabelContainer: t([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onfocusin: function (t) {
                this.lastActive = t, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, t, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(t)))
            },
            onfocusout: function (t) {
                this.checkable(t) || !(t.name in this.submitted) && this.optional(t) || this.element(t)
            },
            onkeyup: function (e, i) {
                9 === i.which && "" === this.elementValue(e) || -1 !== t.inArray(i.keyCode, [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225]) || (e.name in this.submitted || e.name in this.invalid) && this.element(e)
            },
            onclick: function (t) {
                t.name in this.submitted ? this.element(t) : t.parentNode.name in this.submitted && this.element(t.parentNode)
            },
            highlight: function (e, i, s) {
                "radio" === e.type ? this.findByName(e.name).addClass(i).removeClass(s) : t(e).addClass(i).removeClass(s)
            },
            unhighlight: function (e, i, s) {
                "radio" === e.type ? this.findByName(e.name).removeClass(i).addClass(s) : t(e).removeClass(i).addClass(s)
            }
        },
        setDefaults: function (e) {
            t.extend(t.validator.defaults, e)
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date (ISO).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            equalTo: "Please enter the same value again.",
            maxlength: t.validator.format("Please enter no more than {0} characters."),
            minlength: t.validator.format("Please enter at least {0} characters."),
            rangelength: t.validator.format("Please enter a value between {0} and {1} characters long."),
            range: t.validator.format("Please enter a value between {0} and {1}."),
            max: t.validator.format("Please enter a value less than or equal to {0}."),
            min: t.validator.format("Please enter a value greater than or equal to {0}."),
            step: t.validator.format("Please enter a multiple of {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function () {
                this.labelContainer = t(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || t(this.currentForm), this.containers = t(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
                var e, i = this.currentForm,
                    s = this.groups = {};

                function n(e) {
                    var s = void 0 !== t(this).attr("contenteditable") && "false" !== t(this).attr("contenteditable");
                    if (!this.form && s && (this.form = t(this).closest("form")[0], this.name = t(this).attr("name")), i === this.form) {
                        var n = t.data(this.form, "validator"),
                            r = "on" + e.type.replace(/^validate/, ""),
                            a = n.settings;
                        a[r] && !t(this).is(a.ignore) && a[r].call(n, this, e)
                    }
                }
                t.each(this.settings.groups, function (e, i) {
                    "string" == typeof i && (i = i.split(/\s/)), t.each(i, function (t, i) {
                        s[i] = e
                    })
                }), e = this.settings.rules, t.each(e, function (i, s) {
                    e[i] = t.validator.normalizeRule(s)
                }), t(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']", n).on("click.validate", "select, option, [type='radio'], [type='checkbox']", n), this.settings.invalidHandler && t(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler)
            },
            form: function () {
                return this.checkForm(), t.extend(this.submitted, this.errorMap), this.invalid = t.extend({}, this.errorMap), this.valid() || t(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
            },
            checkForm: function () {
                this.prepareForm();
                for (var t = 0, e = this.currentElements = this.elements(); e[t]; t++) this.check(e[t]);
                return this.valid()
            },
            element: function (e) {
                var i, s, n = this.clean(e),
                    r = this.validationTargetFor(n),
                    a = this,
                    o = !0;
                return void 0 === r ? delete this.invalid[n.name] : (this.prepareElement(r), this.currentElements = t(r), (s = this.groups[r.name]) && t.each(this.groups, function (t, e) {
                    e === s && t !== r.name && (n = a.validationTargetFor(a.clean(a.findByName(t)))) && n.name in a.invalid && (a.currentElements.push(n), o = a.check(n) && o)
                }), i = !1 !== this.check(r), o = o && i, this.invalid[r.name] = !i, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), t(e).attr("aria-invalid", !i)), o
            },
            showErrors: function (e) {
                if (e) {
                    var i = this;
                    t.extend(this.errorMap, e), this.errorList = t.map(this.errorMap, function (t, e) {
                        return {
                            message: t,
                            element: i.findByName(e)[0]
                        }
                    }), this.successList = t.grep(this.successList, function (t) {
                        return !(t.name in e)
                    })
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            },
            resetForm: function () {
                t.fn.resetForm && t(this.currentForm).resetForm(), this.invalid = {}, this.submitted = {}, this.prepareForm(), this.hideErrors();
                var e = this.elements().removeData("previousValue").removeAttr("aria-invalid");
                this.resetElements(e)
            },
            resetElements: function (t) {
                var e;
                if (this.settings.unhighlight)
                    for (e = 0; t[e]; e++) this.settings.unhighlight.call(this, t[e], this.settings.errorClass, ""), this.findByName(t[e].name).removeClass(this.settings.validClass);
                else t.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)
            },
            numberOfInvalids: function () {
                return this.objectLength(this.invalid)
            },
            objectLength: function (t) {
                var e, i = 0;
                for (e in t) void 0 !== t[e] && null !== t[e] && !1 !== t[e] && i++;
                return i
            },
            hideErrors: function () {
                this.hideThese(this.toHide)
            },
            hideThese: function (t) {
                t.not(this.containers).text(""), this.addWrapper(t).hide()
            },
            valid: function () {
                return 0 === this.size()
            },
            size: function () {
                return this.errorList.length
            },
            focusInvalid: function () {
                if (this.settings.focusInvalid) try {
                    t(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").trigger("focus").trigger("focusin")
                } catch (t) { }
            },
            findLastActive: function () {
                var e = this.lastActive;
                return e && 1 === t.grep(this.errorList, function (t) {
                    return t.element.name === e.name
                }).length && e
            },
            elements: function () {
                var e = this,
                    i = {};
                return t(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function () {
                    var s = this.name || t(this).attr("name"),
                        n = void 0 !== t(this).attr("contenteditable") && "false" !== t(this).attr("contenteditable");
                    return !s && e.settings.debug && window.console && console.error("%o has no name assigned", this), n && (this.form = t(this).closest("form")[0], this.name = s), this.form === e.currentForm && (!(s in i || !e.objectLength(t(this).rules())) && (i[s] = !0, !0))
                })
            },
            clean: function (e) {
                return t(e)[0]
            },
            errors: function () {
                var e = this.settings.errorClass.split(" ").join(".");
                return t(this.settings.errorElement + "." + e, this.errorContext)
            },
            resetInternals: function () {
                this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = t([]), this.toHide = t([])
            },
            reset: function () {
                this.resetInternals(), this.currentElements = t([])
            },
            prepareForm: function () {
                this.reset(), this.toHide = this.errors().add(this.containers)
            },
            prepareElement: function (t) {
                this.reset(), this.toHide = this.errorsFor(t)
            },
            elementValue: function (e) {
                var i, s, n = t(e),
                    r = e.type,
                    a = void 0 !== n.attr("contenteditable") && "false" !== n.attr("contenteditable");
                return "radio" === r || "checkbox" === r ? this.findByName(e.name).filter(":checked").val() : "number" === r && void 0 !== e.validity ? e.validity.badInput ? "NaN" : n.val() : (i = a ? n.text() : n.val(), "file" === r ? "C:\\fakepath\\" === i.substr(0, 12) ? i.substr(12) : (s = i.lastIndexOf("/")) >= 0 ? i.substr(s + 1) : (s = i.lastIndexOf("\\")) >= 0 ? i.substr(s + 1) : i : "string" == typeof i ? i.replace(/\r/g, "") : i)
            },
            check: function (e) {
                e = this.validationTargetFor(this.clean(e));
                var i, s, n, r, a = t(e).rules(),
                    o = t.map(a, function (t, e) {
                        return e
                    }).length,
                    l = !1,
                    h = this.elementValue(e);
                for (s in "function" == typeof a.normalizer ? r = a.normalizer : "function" == typeof this.settings.normalizer && (r = this.settings.normalizer), r && (h = r.call(e, h), delete a.normalizer), a) {
                    n = {
                        method: s,
                        parameters: a[s]
                    };
                    try {
                        if ("dependency-mismatch" === (i = t.validator.methods[s].call(this, h, e, n.parameters)) && 1 === o) {
                            l = !0;
                            continue
                        }
                        if (l = !1, "pending" === i) return void (this.toHide = this.toHide.not(this.errorsFor(e)));
                        if (!i) return this.formatAndAdd(e, n), !1
                    } catch (t) {
                        throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + e.id + ", check the '" + n.method + "' method.", t), t instanceof TypeError && (t.message += ".  Exception occurred when checking element " + e.id + ", check the '" + n.method + "' method."), t
                    }
                }
                if (!l) return this.objectLength(a) && this.successList.push(e), !0
            },
            customDataMessage: function (e, i) {
                return t(e).data("msg" + i.charAt(0).toUpperCase() + i.substring(1).toLowerCase()) || t(e).data("msg")
            },
            customMessage: function (t, e) {
                var i = this.settings.messages[t];
                return i && (i.constructor === String ? i : i[e])
            },
            findDefined: function () {
                for (var t = 0; t < arguments.length; t++)
                    if (void 0 !== arguments[t]) return arguments[t]
            },
            defaultMessage: function (e, i) {
                "string" == typeof i && (i = {
                    method: i
                });
                var s = this.findDefined(this.customMessage(e.name, i.method), this.customDataMessage(e, i.method), !this.settings.ignoreTitle && e.title || void 0, t.validator.messages[i.method], "<strong>Warning: No message defined for " + e.name + "</strong>"),
                    n = /\$?\{(\d+)\}/g;
                return "function" == typeof s ? s = s.call(this, i.parameters, e) : n.test(s) && (s = t.validator.format(s.replace(n, "{$1}"), i.parameters)), s
            },
            formatAndAdd: function (t, e) {
                var i = this.defaultMessage(t, e);
                this.errorList.push({
                    message: i,
                    element: t,
                    method: e.method
                }), this.errorMap[t.name] = i, this.submitted[t.name] = i
            },
            addWrapper: function (t) {
                return this.settings.wrapper && (t = t.add(t.parent(this.settings.wrapper))), t
            },
            defaultShowErrors: function () {
                var t, e, i;
                for (t = 0; this.errorList[t]; t++) i = this.errorList[t], this.settings.highlight && this.settings.highlight.call(this, i.element, this.settings.errorClass, this.settings.validClass), this.showLabel(i.element, i.message);
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
                    for (t = 0; this.successList[t]; t++) this.showLabel(this.successList[t]);
                if (this.settings.unhighlight)
                    for (t = 0, e = this.validElements(); e[t]; t++) this.settings.unhighlight.call(this, e[t], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
            },
            validElements: function () {
                return this.currentElements.not(this.invalidElements())
            },
            invalidElements: function () {
                return t(this.errorList).map(function () {
                    return this.element
                })
            },
            showLabel: function (e, i) {
                var s, n, r, a, o = this.errorsFor(e),
                    l = this.idOrName(e),
                    h = t(e).attr("aria-describedby");
                o.length ? (o.removeClass(this.settings.validClass).addClass(this.settings.errorClass), o.html(i)) : (s = o = t("<" + this.settings.errorElement + ">").attr("id", l + "-error").addClass(this.settings.errorClass).html(i || ""), this.settings.wrapper && (s = o.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(s) : this.settings.errorPlacement ? this.settings.errorPlacement.call(this, s, t(e)) : s.insertAfter(e), o.is("label") ? o.attr("for", l) : 0 === o.parents("label[for='" + this.escapeCssMeta(l) + "']").length && (r = o.attr("id"), h ? h.match(new RegExp("\\b" + this.escapeCssMeta(r) + "\\b")) || (h += " " + r) : h = r, t(e).attr("aria-describedby", h), (n = this.groups[e.name]) && (a = this, t.each(a.groups, function (e, i) {
                    i === n && t("[name='" + a.escapeCssMeta(e) + "']", a.currentForm).attr("aria-describedby", o.attr("id"))
                })))), !i && this.settings.success && (o.text(""), "string" == typeof this.settings.success ? o.addClass(this.settings.success) : this.settings.success(o, e)), this.toShow = this.toShow.add(o)
            },
            errorsFor: function (e) {
                var i = this.escapeCssMeta(this.idOrName(e)),
                    s = t(e).attr("aria-describedby"),
                    n = "label[for='" + i + "'], label[for='" + i + "'] *";
                return s && (n = n + ", #" + this.escapeCssMeta(s).replace(/\s+/g, ", #")), this.errors().filter(n)
            },
            escapeCssMeta: function (t) {
                return t.replace(/([\\!"#$%&'()*+,.\/:;<=>?@\[\]^`{|}~])/g, "\\$1")
            },
            idOrName: function (t) {
                return this.groups[t.name] || (this.checkable(t) ? t.name : t.id || t.name)
            },
            validationTargetFor: function (e) {
                return this.checkable(e) && (e = this.findByName(e.name)), t(e).not(this.settings.ignore)[0]
            },
            checkable: function (t) {
                return /radio|checkbox/i.test(t.type)
            },
            findByName: function (e) {
                return t(this.currentForm).find("[name='" + this.escapeCssMeta(e) + "']")
            },
            getLength: function (e, i) {
                switch (i.nodeName.toLowerCase()) {
                    case "select":
                        return t("option:selected", i).length;
                    case "input":
                        if (this.checkable(i)) return this.findByName(i.name).filter(":checked").length
                }
                return e.length
            },
            depend: function (t, e) {
                return !this.dependTypes[typeof t] || this.dependTypes[typeof t](t, e)
            },
            dependTypes: {
                boolean: function (t) {
                    return t
                },
                string: function (e, i) {
                    return !!t(e, i.form).length
                },
                function: function (t, e) {
                    return t(e)
                }
            },
            optional: function (e) {
                var i = this.elementValue(e);
                return !t.validator.methods.required.call(this, i, e) && "dependency-mismatch"
            },
            startRequest: function (e) {
                this.pending[e.name] || (this.pendingRequest++, t(e).addClass(this.settings.pendingClass), this.pending[e.name] = !0)
            },
            stopRequest: function (e, i) {
                this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[e.name], t(e).removeClass(this.settings.pendingClass), i && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (t(this.currentForm).submit(), this.submitButton && t("input:hidden[name='" + this.submitButton.name + "']", this.currentForm).remove(), this.formSubmitted = !1) : !i && 0 === this.pendingRequest && this.formSubmitted && (t(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
            },
            previousValue: function (e, i) {
                return i = "string" == typeof i && i || "remote", t.data(e, "previousValue") || t.data(e, "previousValue", {
                    old: null,
                    valid: !0,
                    message: this.defaultMessage(e, {
                        method: i
                    })
                })
            },
            destroy: function () {
                this.resetForm(), t(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur").find(".validate-lessThan-blur").off(".validate-lessThan").removeClass("validate-lessThan-blur").find(".validate-lessThanEqual-blur").off(".validate-lessThanEqual").removeClass("validate-lessThanEqual-blur").find(".validate-greaterThanEqual-blur").off(".validate-greaterThanEqual").removeClass("validate-greaterThanEqual-blur").find(".validate-greaterThan-blur").off(".validate-greaterThan").removeClass("validate-greaterThan-blur")
            }
        },
        classRuleSettings: {
            required: {
                required: !0
            },
            email: {
                email: !0
            },
            url: {
                url: !0
            },
            date: {
                date: !0
            },
            dateISO: {
                dateISO: !0
            },
            number: {
                number: !0
            },
            digits: {
                digits: !0
            },
            creditcard: {
                creditcard: !0
            }
        },
        addClassRules: function (e, i) {
            e.constructor === String ? this.classRuleSettings[e] = i : t.extend(this.classRuleSettings, e)
        },
        classRules: function (e) {
            var i = {},
                s = t(e).attr("class");
            return s && t.each(s.split(" "), function () {
                this in t.validator.classRuleSettings && t.extend(i, t.validator.classRuleSettings[this])
            }), i
        },
        normalizeAttributeRule: function (t, e, i, s) {
            /min|max|step/.test(i) && (null === e || /number|range|text/.test(e)) && (s = Number(s), isNaN(s) && (s = void 0)), s || 0 === s ? t[i] = s : e === i && "range" !== e && (t[i] = !0)
        },
        attributeRules: function (e) {
            var i, s, n = {},
                r = t(e),
                a = e.getAttribute("type");
            for (i in t.validator.methods) "required" === i ? ("" === (s = e.getAttribute(i)) && (s = !0), s = !!s) : s = r.attr(i), this.normalizeAttributeRule(n, a, i, s);
            return n.maxlength && /-1|2147483647|524288/.test(n.maxlength) && delete n.maxlength, n
        },
        dataRules: function (e) {
            var i, s, n = {},
                r = t(e),
                a = e.getAttribute("type");
            for (i in t.validator.methods) "" === (s = r.data("rule" + i.charAt(0).toUpperCase() + i.substring(1).toLowerCase())) && (s = !0), this.normalizeAttributeRule(n, a, i, s);
            return n
        },
        staticRules: function (e) {
            var i = {},
                s = t.data(e.form, "validator");
            return s.settings.rules && (i = t.validator.normalizeRule(s.settings.rules[e.name]) || {}), i
        },
        normalizeRules: function (e, i) {
            return t.each(e, function (s, n) {
                if (!1 !== n) {
                    if (n.param || n.depends) {
                        var r = !0;
                        switch (typeof n.depends) {
                            case "string":
                                r = !!t(n.depends, i.form).length;
                                break;
                            case "function":
                                r = n.depends.call(i, i)
                        }
                        r ? e[s] = void 0 === n.param || n.param : (t.data(i.form, "validator").resetElements(t(i)), delete e[s])
                    }
                } else delete e[s]
            }), t.each(e, function (t, s) {
                e[t] = "function" == typeof s && "normalizer" !== t ? s(i) : s
            }), t.each(["minlength", "maxlength"], function () {
                e[this] && (e[this] = Number(e[this]))
            }), t.each(["rangelength", "range"], function () {
                var t;
                e[this] && (Array.isArray(e[this]) ? e[this] = [Number(e[this][0]), Number(e[this][1])] : "string" == typeof e[this] && (t = e[this].replace(/[\[\]]/g, "").split(/[\s,]+/), e[this] = [Number(t[0]), Number(t[1])]))
            }), t.validator.autoCreateRanges && (null != e.min && null != e.max && (e.range = [e.min, e.max], delete e.min, delete e.max), null != e.minlength && null != e.maxlength && (e.rangelength = [e.minlength, e.maxlength], delete e.minlength, delete e.maxlength)), e
        },
        normalizeRule: function (e) {
            if ("string" == typeof e) {
                var i = {};
                t.each(e.split(/\s/), function () {
                    i[this] = !0
                }), e = i
            }
            return e
        },
        addMethod: function (e, i, s) {
            t.validator.methods[e] = i, t.validator.messages[e] = void 0 !== s ? s : t.validator.messages[e], i.length < 3 && t.validator.addClassRules(e, t.validator.normalizeRule(e))
        },
        methods: {
            required: function (e, i, s) {
                if (!this.depend(s, i)) return "dependency-mismatch";
                if ("select" === i.nodeName.toLowerCase()) {
                    var n = t(i).val();
                    return n && n.length > 0
                }
                return this.checkable(i) ? this.getLength(e, i) > 0 : null != e && e.length > 0
            },
            email: function (t, e) {
                return this.optional(e) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(t)
            },
            url: function (t, e) {
                return this.optional(e) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(t)
            },
            date: (e = !1, function (t, i) {
                return e || (e = !0, this.settings.debug && window.console && console.warn("The `date` method is deprecated and will be removed in version '2.0.0'.\nPlease don't use it, since it relies on the Date constructor, which\nbehaves very differently across browsers and locales. Use `dateISO`\ninstead or one of the locale specific methods in `localizations/`\nand `additional-methods.js`.")), this.optional(i) || !/Invalid|NaN/.test(new Date(t).toString())
            }),
            dateISO: function (t, e) {
                return this.optional(e) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(t)
            },
            number: function (t, e) {
                return this.optional(e) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t)
            },
            digits: function (t, e) {
                return this.optional(e) || /^\d+$/.test(t)
            },
            minlength: function (t, e, i) {
                var s = Array.isArray(t) ? t.length : this.getLength(t, e);
                return this.optional(e) || s >= i
            },
            maxlength: function (t, e, i) {
                var s = Array.isArray(t) ? t.length : this.getLength(t, e);
                return this.optional(e) || s <= i
            },
            rangelength: function (t, e, i) {
                var s = Array.isArray(t) ? t.length : this.getLength(t, e);
                return this.optional(e) || s >= i[0] && s <= i[1]
            },
            min: function (t, e, i) {
                return this.optional(e) || t >= i
            },
            max: function (t, e, i) {
                return this.optional(e) || t <= i
            },
            range: function (t, e, i) {
                return this.optional(e) || t >= i[0] && t <= i[1]
            },
            step: function (e, i, s) {
                var n, r = t(i).attr("type"),
                    a = "Step attribute on input type " + r + " is not supported.",
                    o = new RegExp("\\b" + r + "\\b"),
                    l = function (t) {
                        var e = ("" + t).match(/(?:\.(\d+))?$/);
                        return e && e[1] ? e[1].length : 0
                    },
                    h = function (t) {
                        return Math.round(t * Math.pow(10, n))
                    },
                    d = !0;
                if (r && !o.test(["text", "number", "range"].join())) throw new Error(a);
                return n = l(s), (l(e) > n || h(e) % h(s) != 0) && (d = !1), this.optional(i) || d
            },
            equalTo: function (e, i, s) {
                var n = t(s);
                return this.settings.onfocusout && n.not(".validate-equalTo-blur").length && n.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function () {
                    t(i).valid()
                }), e === n.val()
            },
            remote: function (e, i, s, n) {
                if (this.optional(i)) return "dependency-mismatch";
                n = "string" == typeof n && n || "remote";
                var r, a, o, l = this.previousValue(i, n);
                return this.settings.messages[i.name] || (this.settings.messages[i.name] = {}), l.originalMessage = l.originalMessage || this.settings.messages[i.name][n], this.settings.messages[i.name][n] = l.message, s = "string" == typeof s && {
                    url: s
                } || s, o = t.param(t.extend({
                    data: e
                }, s.data)), l.old === o ? l.valid : (l.old = o, r = this, this.startRequest(i), (a = {})[i.name] = e, t.ajax(t.extend(!0, {
                    mode: "abort",
                    port: "validate" + i.name,
                    dataType: "json",
                    data: a,
                    context: r.currentForm,
                    success: function (t) {
                        var s, a, o, h = !0 === t || "true" === t;
                        r.settings.messages[i.name][n] = l.originalMessage, h ? (o = r.formSubmitted, r.resetInternals(), r.toHide = r.errorsFor(i), r.formSubmitted = o, r.successList.push(i), r.invalid[i.name] = !1, r.showErrors()) : (s = {}, a = t || r.defaultMessage(i, {
                            method: n,
                            parameters: e
                        }), s[i.name] = l.message = a, r.invalid[i.name] = !0, r.showErrors(s)), l.valid = h, r.stopRequest(i, h)
                    }
                }, s)), "pending")
            }
        }
    });
    var s, n = {};
    return t.ajaxPrefilter ? t.ajaxPrefilter(function (t, e, i) {
        var s = t.port;
        "abort" === t.mode && (n[s] && n[s].abort(), n[s] = i)
    }) : (s = t.ajax, t.ajax = function (e) {
        var i = ("mode" in e ? e : t.ajaxSettings).mode,
            r = ("port" in e ? e : t.ajaxSettings).port;
        return "abort" === i ? (n[r] && n[r].abort(), n[r] = s.apply(this, arguments), n[r]) : s.apply(this, arguments)
    }), t
});

//jquery.smartWizard.js

"use strict";

function _classCallCheck(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
}

function _defineProperties(t, e) {
    for (var s = 0; s < e.length; s++) {
        var i = e[s];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
    }
}

function _createClass(t, e, s) {
    return e && _defineProperties(t.prototype, e), s && _defineProperties(t, s), t
}

function _typeof(t) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
    } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
} ! function (t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" === ("undefined" == typeof module ? "undefined" : _typeof(module)) && module.exports ? module.exports = function (e, s) {
        return void 0 === s && (s = "undefined" != typeof window ? require("jquery") : require("jquery")(e)), t(s), s
    } : t(jQuery)
}(function (t) {
    var e = {
        selected: 0,
        theme: "default",
        justified: !0,
        darkMode: !1,
        autoAdjustHeight: !0,
        cycleSteps: !1,
        backButtonSupport: !0,
        enableURLhash: !0,
        transition: {
            animation: "none",
            speed: "400",
            easing: ""
        },
        toolbarSettings: {
            toolbarPosition: "bottom",
            toolbarButtonPosition: "right",
            showNextButton: !0,
            showPreviousButton: !0,
            toolbarExtraButtons: []
        },
        anchorSettings: {
            anchorClickable: !0,
            enableAllAnchors: !1,
            markDoneStep: !0,
            markAllPreviousStepsAsDone: !0,
            removeDoneStepOnNavigateBack: !1,
            enableAnchorOnDoneStep: !0
        },
        keyboardSettings: {
            keyNavigation: !0,
            keyLeft: [37],
            keyRight: [39]
        },
        lang: {
            next: "Next",
            previous: "Previous"
        },
        disabledSteps: [],
        errorSteps: [],
        hiddenSteps: []
    },
        s = function () {
            function s(i, n) {
                _classCallCheck(this, s), this.options = t.extend(!0, {}, e, n), this.main = t(i), this.nav = this._getFirstDescendant(".nav"), this.steps = this.nav.find(".nav-link"), this.container = this._getFirstDescendant(".tab-content"), this.pages = this.container.children(".tab-pane"), this._initOptions(), this._initLoad()
            }
            return _createClass(s, [{
                key: "_initLoad",
                value: function () {
                    this.pages.hide(), this.steps.removeClass("done active"), this.current_index = null;
                    var t = this._getStepIndex();
                    this._setPreviousStepsDone(t), this._showStep(t)
                }
            }, {
                key: "_initOptions",
                value: function () {
                    this._setElements(), this._setToolbar(), this._setEvents()
                }
            }, {
                key: "_getFirstDescendant",
                value: function (e) {
                    var s = this.main.children(e);
                    return s.length > 0 ? s : (this.main.children().each(function (i, n) {
                        var o = t(n).children(e);
                        if (o.length > 0) return s = o, !1
                    }), s.length > 0 ? s : (this._showError("Element not found " + e), !1))
                }
            }, {
                key: "_setElements",
                value: function () {
                    this.main.addClass("sw"), this._setTheme(this.options.theme), this._setJustify(this.options.justified), this._setDarkMode(this.options.darkMode), !0 === this.options.anchorSettings.enableAllAnchors && !0 === this.options.anchorSettings.anchorClickable || this.steps.addClass("inactive"), this._setCSSClass(this.options.disabledSteps, "disabled"), this._setCSSClass(this.options.errorSteps, "danger"), this._setCSSClass(this.options.hiddenSteps, "hidden")
                }
            }, {
                key: "_setEvents",
                value: function () {
                    var e = this;
                    if (this.main.data("click-init")) return !0;
                    this.main.data("click-init", !0), t(this.steps).on("click", function (t) {
                        if (t.preventDefault(), !1 === e.options.anchorSettings.anchorClickable) return !0;
                        var s = e.steps.index(t.currentTarget);
                        return s === e.current_index || (!(!1 !== e.options.anchorSettings.enableAnchorOnDoneStep || !e._isDone(s)) || void ((!1 !== e.options.anchorSettings.enableAllAnchors || e._isDone(s)) && e._showStep(s)))
                    }), this.main.find(".sw-btn-next").on("click", function (t) {
                        t.preventDefault(), e._showNext()
                    }), this.main.find(".sw-btn-prev").on("click", function (t) {
                        t.preventDefault(), e._showPrevious()
                    }), this.options.keyboardSettings.keyNavigation && t(document).keyup(function (t) {
                        e._keyNav(t)
                    }), this.options.backButtonSupport && t(window).on("hashchange", function (t) {
                        var s = e._getURLHashIndex();
                        !1 !== s && (t.preventDefault(), e._showStep(s))
                    })
                }
            }, {
                key: "_setToolbar",
                value: function () {
                    if ("none" === this.options.toolbarSettings.toolbarPosition) return !0;
                    switch (this.options.toolbarSettings.toolbarPosition) {
                        case "top":
                            this.container.before(this._createToolbar("top"));
                            break;
                        case "bottom":
                            this.container.after(this._createToolbar("bottom"));
                            break;
                        case "both":
                            this.container.before(this._createToolbar("top")), this.container.after(this._createToolbar("bottom"));
                            break;
                        default:
                            this.container.after(this._createToolbar("bottom"))
                    }
                }
            }, {
                key: "_createToolbar",
                value: function (e) {
                    if (this.main.find(".toolbar-" + e).length > 0) return null;
                    var s = t("<div></div>").addClass("toolbar toolbar-" + e).attr("role", "toolbar"),
                        i = !1 !== this.options.toolbarSettings.showNextButton ? t("<button></button>").text(this.options.lang.next).addClass("btn sw-btn-next").attr("type", "button") : null,
                        n = !1 !== this.options.toolbarSettings.showPreviousButton ? t("<button></button>").text(this.options.lang.previous).addClass("btn sw-btn-prev").attr("type", "button") : null;
                    return s.append(n, i), this.options.toolbarSettings.toolbarExtraButtons && this.options.toolbarSettings.toolbarExtraButtons.length > 0 && t.each(this.options.toolbarSettings.toolbarExtraButtons, function (t, e) {
                        s.append(e.clone(!0))
                    }), s.css("text-align", this.options.toolbarSettings.toolbarButtonPosition), s
                }
            }, {
                key: "_showNext",
                value: function () {
                    var t = this._getNextShowable(this.current_index);
                    if (!1 === t) return !1;
                    this._showStep(t)
                }
            }, {
                key: "_showPrevious",
                value: function () {
                    var t = this._getPreviousShowable(this.current_index);
                    if (!1 === t) return !1;
                    this._showStep(t)
                }
            }, {
                key: "_showStep",
                value: function (t) {
                    return t != this.current_index && (!!this.steps.eq(t) && (!!this._isShowable(t) && void this._loadStep(t)))
                }
            }, {
                key: "_getNextShowable",
                value: function (t) {
                    for (var e = !1, s = t + 1; s < this.steps.length; s++)
                        if (this._isShowable(s)) {
                            e = s;
                            break
                        } if (!1 !== e && this.steps.length <= e) {
                            if (!this.options.cycleSteps) return !1;
                            e = 0
                        }
                    return e
                }
            }, {
                key: "_getPreviousShowable",
                value: function (t) {
                    for (var e = !1, s = t - 1; s >= 0; s--)
                        if (this._isShowable(s)) {
                            e = s;
                            break
                        } if (!1 !== e && 0 > e) {
                            if (!this.options.cycleSteps) return !1;
                            e = this.steps.length - 1
                        }
                    return e
                }
            }, {
                key: "_isShowable",
                value: function (t) {
                    var e = this.steps.eq(t);
                    return !e.hasClass("disabled") && !e.hasClass("hidden")
                }
            }, {
                key: "_isDone",
                value: function (t) {
                    return !!this.steps.eq(t).hasClass("done")
                }
            }, {
                key: "_setPreviousStepsDone",
                value: function (t) {
                    if (t > 0 && this.options.anchorSettings.markDoneStep && this.options.anchorSettings.markAllPreviousStepsAsDone)
                        for (var e = t; e >= 0; e--) this._setCSSClass(e, "done")
                }
            }, {
                key: "_setCSSClass",
                value: function (e, s) {
                    var i = this;
                    if (null === e) return !1;
                    (t.isArray(e) ? e : [e]).map(function (t) {
                        i.steps.eq(t).addClass(s)
                    })
                }
            }, {
                key: "_resetCSSClass",
                value: function (e, s) {
                    var i = this;
                    (t.isArray(e) ? e : [e]).map(function (t) {
                        i.steps.eq(t).removeClass(s)
                    })
                }
            }, {
                key: "_getStepDirection",
                value: function (t) {
                    return null == this.current_index ? "" : this.current_index < t ? "forward" : "backward"
                }
            }, {
                key: "_getStepPosition",
                value: function (t) {
                    var e = "middle";
                    return 0 === t ? e = "first" : t === this.steps.length - 1 && (e = "last"), e
                }
            }, {
                key: "_getStepAnchor",
                value: function (t) {
                    return null == t ? null : this.steps.eq(t)
                }
            }, {
                key: "_getStepPage",
                value: function (t) {
                    if (null == t) return null;
                    var e = this._getStepAnchor(t);
                    return e.length > 0 ? this.main.find(e.attr("href")) : null
                }
            }, {
                key: "_setStepContent",
                value: function (t, e) {
                    var s = this._getStepPage(t);
                    s && s.html(e)
                }
            }, {
                key: "_loadStep",
                value: function (t) {
                    var e = this,
                        s = this._getStepAnchor(this.current_index),
                        i = this._getStepDirection(t);
                    if (null !== this.current_index && !1 === this._triggerEvent("leaveStep", [s, this.current_index, t, i])) return !1;
                    var n = this._getStepAnchor(t),
                        o = this._triggerEvent("stepContent", [n, t, i]);
                    o ? "object" == _typeof(o) ? o.then(function (s) {
                        e._setStepContent(t, s), e._transitStep(t)
                    }).catch(function (s) {
                        console.error(s), e._setStepContent(t, s), e._transitStep(t)
                    }) : "string" == typeof o ? (this._setStepContent(t, o), this._transitStep(t)) : this._transitStep(t) : this._transitStep(t)
                }
            }, {
                key: "_transitStep",
                value: function (t) {
                    var e = this,
                        s = this._getStepAnchor(t);
                    this._setURLHash(s.attr("href")), this._setAnchor(t);
                    var i = this._getStepDirection(t),
                        n = this._getStepPosition(t);
                    this._doStepAnimation(t, function () {
                        e._fixHeight(t), e._triggerEvent("showStep", [s, e.current_index, i, n])
                    }), this.current_index = t, this._setButtons(t)
                }
            }, {
                key: "_doStepAnimation",
                value: function (e, s) {
                    var i = this,
                        n = this._getStepPage(this.current_index),
                        o = this._getStepPage(e),
                        a = this.options.transition.animation.toLowerCase();
                    switch (this._stopAnimations(), a) {
                        case "slide-horizontal":
                        case "slide-h":
                            var r, h, l = this.container.width(),
                                u = l,
                                c = -2 * l;
                            e > this.current_index && (u = -1 * l, c = l), null == this.current_index && this.container.height(o.outerHeight()), n && (r = n.css("position"), h = n.css("left"), n.css("position", "absolute").css("left", 0).animate({
                                left: u
                            }, this.options.transition.speed, this.options.transition.easing, function () {
                                t(this).hide(), n.css("position", r).css("left", h)
                            })), r = o.css("position"), h = o.css("left"), o.css("position", "absolute").css("left", c).outerWidth(l).show().animate({
                                left: 0
                            }, this.options.transition.speed, this.options.transition.easing, function () {
                                o.css("position", r).css("left", h), s()
                            });
                            break;
                        case "slide-vertical":
                        case "slide-v":
                            var d, p, f = this.container.height(),
                                _ = f,
                                v = -2 * f;
                            e > this.current_index && (_ = -1 * f, v = f), n && (d = n.css("position"), p = n.css("top"), n.css("position", "absolute").css("top", 0).animate({
                                top: _
                            }, this.options.transition.speed, this.options.transition.easing, function () {
                                t(this).hide(), n.css("position", d).css("top", p)
                            })), d = o.css("position"), p = o.css("top"), o.css("position", "absolute").css("top", v).show().animate({
                                top: 0
                            }, this.options.transition.speed, this.options.transition.easing, function () {
                                o.css("position", d).css("top", p), s()
                            });
                            break;
                        case "slide-swing":
                        case "slide-s":
                            n ? n.slideUp("fast", this.options.transition.easing, function () {
                                o.slideDown(i.options.transition.speed, i.options.transition.easing, function () {
                                    s()
                                })
                            }) : o.slideDown(this.options.transition.speed, this.options.transition.easing, function () {
                                s()
                            });
                            break;
                        case "fade":
                            n ? n.fadeOut("fast", this.options.transition.easing, function () {
                                o.fadeIn("fast", i.options.transition.easing, function () {
                                    s()
                                })
                            }) : o.fadeIn(this.options.transition.speed, this.options.transition.easing, function () {
                                s()
                            });
                            break;
                        default:
                            n && n.hide(), o.show(), s()
                    }
                }
            }, {
                key: "_stopAnimations",
                value: function () {
                    this.pages.finish(), this.container.finish()
                }
            }, {
                key: "_setAnchor",
                value: function (t) {
                    this._resetCSSClass(this.current_index, "active"), !1 !== this.options.anchorSettings.markDoneStep && null !== this.current_index && (this._setCSSClass(this.current_index, "done"), !1 !== this.options.anchorSettings.removeDoneStepOnNavigateBack && "backward" === this._getStepDirection(t) && this._resetCSSClass(this.current_index, "done")), this._resetCSSClass(t, "done"), this._setCSSClass(t, "active")
                }
            }, {
                key: "_setButtons",
                value: function (t) {
                    if (!this.options.cycleSteps) switch (this.main.find(".sw-btn-prev").removeClass("disabled"), this.main.find(".sw-btn-next").removeClass("disabled"), this._getStepPosition(t)) {
                        case "first":
                            this.main.find(".sw-btn-prev").addClass("disabled");
                            break;
                        case "last":
                            this.main.find(".sw-btn-next").addClass("disabled");
                            break;
                        default:
                            !1 === this._getNextShowable(t) && this.main.find(".sw-btn-next").addClass("disabled"), !1 === this._getPreviousShowable(t) && this.main.find(".sw-btn-prev").addClass("disabled")
                    }
                }
            }, {
                key: "_getStepIndex",
                value: function () {
                    var t = this._getURLHashIndex();
                    return !1 === t ? this.options.selected : t
                }
            }, {
                key: "_setTheme",
                value: function (t) {
                    this.main.removeClass(function (t, e) {
                        return (e.match(/(^|\s)sw-theme-\S+/g) || []).join(" ")
                    }).addClass("sw-theme-" + t)
                }
            }, {
                key: "_setJustify",
                value: function (t) {
                    !0 === t ? this.main.addClass("sw-justified") : this.main.removeClass("sw-justified")
                }
            }, {
                key: "_setDarkMode",
                value: function (t) {
                    !0 === t ? this.main.addClass("sw-dark") : this.main.removeClass("sw-dark")
                }
            }, {
                key: "_keyNav",
                value: function (e) {
                    if (t.inArray(e.which, this.options.keyboardSettings.keyLeft) > -1) this._showPrevious(), e.preventDefault();
                    else {
                        if (!(t.inArray(e.which, this.options.keyboardSettings.keyRight) > -1)) return;
                        this._showNext(), e.preventDefault()
                    }
                }
            }, {
                key: "_fixHeight",
                value: function (t) {
                    if (this.options.autoAdjustHeight) {
                        var e = this._getStepPage(t);
                        this.container.finish().animate({
                            height: e.outerHeight()
                        }, this.options.transition.speed)
                    }
                }
            }, {
                key: "_triggerEvent",
                value: function (e, s) {
                    var i = t.Event(e);
                    return this.main.trigger(i, s), !i.isDefaultPrevented() && i.result
                }
            }, {
                key: "_setURLHash",
                value: function (t) {
                    this.options.enableURLhash && window.location.hash !== t && history.pushState(null, null, t)
                }
            }, {
                key: "_getURLHashIndex",
                value: function () {
                    if (this.options.enableURLhash) {
                        var t = window.location.hash;
                        if (t.length > 0) {
                            var e = this.nav.find("a[href*='" + t + "']");
                            if (e.length > 0) return this.steps.index(e)
                        }
                    }
                    return !1
                }
            }, {
                key: "_loader",
                value: function (t) {
                    switch (t) {
                        case "show":
                            this.main.addClass("sw-loading");
                            break;
                        case "hide":
                            this.main.removeClass("sw-loading");
                            break;
                        default:
                            this.main.toggleClass("sw-loading")
                    }
                }
            }, {
                key: "_showError",
                value: function (t) {
                    console.error(t)
                }
            }, {
                key: "goToStep",
                value: function (t) {
                    this._showStep(t)
                }
            }, {
                key: "next",
                value: function () {
                    this._showNext()
                }
            }, {
                key: "prev",
                value: function () {
                    this._showPrevious()
                }
            }, {
                key: "reset",
                value: function () {
                    this._setURLHash("#"), this._initOptions(), this._initLoad()
                }
            }, {
                key: "stepState",
                value: function (t, e) {
                    if (!t) return !1;
                    switch (e) {
                        case "disable":
                            this._setCSSClass(t, "disabled");
                            break;
                        case "enable":
                            this._resetCSSClass(t, "disabled");
                            break;
                        case "hide":
                            this._setCSSClass(t, "hidden");
                            break;
                        case "show":
                            this._resetCSSClass(t, "hidden");
                            break;
                        case "error-on":
                            this._setCSSClass(t, "danger");
                            break;
                        case "error-off":
                            this._resetCSSClass(t, "danger")
                    }
                }
            }, {
                key: "setOptions",
                value: function (e) {
                    this.options = t.extend(!0, {}, this.options, e), this._initOptions()
                }
            }, {
                key: "getStepIndex",
                value: function () {
                    return this.current_index
                }
            }, {
                key: "loader",
                value: function (t) {
                    "show" === t ? this.main.addClass("sw-loading") : this.main.removeClass("sw-loading")
                }
            }]), s
        }();
    t.fn.smartWizard = function (e) {
        if (void 0 === e || "object" === _typeof(e)) return this.each(function () {
            t.data(this, "smartWizard") || t.data(this, "smartWizard", new s(this, e))
        });
        if ("string" == typeof e && "_" !== e[0] && "init" !== e) {
            var i = t.data(this[0], "smartWizard");
            return "destroy" === e && t.data(this, "smartWizard", null), i instanceof s && "function" == typeof i[e] ? i[e].apply(i, Array.prototype.slice.call(arguments, 1)) : this
        }
    }
});