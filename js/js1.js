// jquery.js
! function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function (e, t) {
    "use strict";
    var n = [],
        r = Object.getPrototypeOf,
        i = n.slice,
        o = n.flat ? function (e) {
            return n.flat.call(e)
        } : function (e) {
            return n.concat.apply([], e)
        },
        a = n.push,
        s = n.indexOf,
        u = {},
        l = u.toString,
        c = u.hasOwnProperty,
        f = c.toString,
        p = f.call(Object),
        d = {},
        h = function (e) {
            return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
        },
        g = function (e) {
            return null != e && e === e.window
        },
        v = e.document,
        y = {
            type: !0,
            src: !0,
            nonce: !0,
            noModule: !0
        };

    function m(e, t, n) {
        var r, i, o = (n = n || v).createElement("script");
        if (o.text = e, t)
            for (r in y) (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o)
    }

    function x(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? u[l.call(e)] || "object" : typeof e
    }
    var b = function (e, t) {
        return new b.fn.init(e, t)
    };

    function w(e) {
        var t = !!e && "length" in e && e.length,
            n = x(e);
        return !h(e) && !g(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    b.fn = b.prototype = {
        jquery: "3.6.0",
        constructor: b,
        length: 0,
        toArray: function () {
            return i.call(this)
        },
        get: function (e) {
            return null == e ? i.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function (e) {
            var t = b.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function (e) {
            return b.each(this, e)
        },
        map: function (e) {
            return this.pushStack(b.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function () {
            return this.pushStack(i.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        even: function () {
            return this.pushStack(b.grep(this, function (e, t) {
                return (t + 1) % 2
            }))
        },
        odd: function () {
            return this.pushStack(b.grep(this, function (e, t) {
                return t % 2
            }))
        },
        eq: function (e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor()
        },
        push: a,
        sort: n.sort,
        splice: n.splice
    }, b.extend = b.fn.extend = function () {
        var e, t, n, r, i, o, a = arguments[0] || {},
            s = 1,
            u = arguments.length,
            l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || h(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
            if (null != (e = arguments[s]))
                for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (b.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || b.isPlainObject(n) ? n : {}, i = !1, a[t] = b.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }, b.extend({
        expando: "jQuery" + ("3.6.0" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (e) {
            throw new Error(e)
        },
        noop: function () { },
        isPlainObject: function (e) {
            var t, n;
            return !(!e || "[object Object]" !== l.call(e)) && (!(t = r(e)) || "function" == typeof (n = c.call(t, "constructor") && t.constructor) && f.call(n) === p)
        },
        isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        globalEval: function (e, t, n) {
            m(e, {
                nonce: t && t.nonce
            }, n)
        },
        each: function (e, t) {
            var n, r = 0;
            if (w(e))
                for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
            else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r])) break;
            return e
        },
        makeArray: function (e, t) {
            var n = t || [];
            return null != e && (w(Object(e)) ? b.merge(n, "string" == typeof e ? [e] : e) : a.call(n, e)), n
        },
        inArray: function (e, t, n) {
            return null == t ? -1 : s.call(t, e, n)
        },
        merge: function (e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
            return e.length = i, e
        },
        grep: function (e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
            return r
        },
        map: function (e, t, n) {
            var r, i, a = 0,
                s = [];
            if (w(e))
                for (r = e.length; a < r; a++) null != (i = t(e[a], a, n)) && s.push(i);
            else
                for (a in e) null != (i = t(e[a], a, n)) && s.push(i);
            return o(s)
        },
        guid: 1,
        support: d
    }), "function" == typeof Symbol && (b.fn[Symbol.iterator] = n[Symbol.iterator]), b.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
        u["[object " + t + "]"] = t.toLowerCase()
    });
    var T = function (e) {
        var t, n, r, i, o, a, s, u, l, c, f, p, d, h, g, v, y, m, x, b = "sizzle" + 1 * new Date,
            w = e.document,
            T = 0,
            C = 0,
            E = ue(),
            S = ue(),
            k = ue(),
            A = ue(),
            N = function (e, t) {
                return e === t && (f = !0), 0
            },
            j = {}.hasOwnProperty,
            D = [],
            q = D.pop,
            L = D.push,
            H = D.push,
            O = D.slice,
            P = function (e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                return -1
            },
            R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|Loop|multiple|open|readonly|required|scoped",
            M = "[\\x20\\t\\r\\n\\f]",
            I = "(?:\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]",
            F = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
            B = new RegExp(M + "+", "g"),
            $ = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
            _ = new RegExp("^" + M + "*," + M + "*"),
            z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
            U = new RegExp(M + "|>"),
            X = new RegExp(F),
            V = new RegExp("^" + I + "$"),
            G = {
                ID: new RegExp("^#(" + I + ")"),
                CLASS: new RegExp("^\\.(" + I + ")"),
                TAG: new RegExp("^(" + I + "|[*])"),
                ATTR: new RegExp("^" + W),
                PSEUDO: new RegExp("^" + F),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + R + ")$", "i"),
                needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
            },
            Y = /HTML$/i,
            Q = /^(?:input|select|textarea|button)$/i,
            J = /^h\d$/i,
            K = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])", "g"),
            ne = function (e, t) {
                var n = "0x" + e.slice(1) - 65536;
                return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
            },
            re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ie = function (e, t) {
                return t ? "\0" === e ? "ï¿½" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            oe = function () {
                p()
            },
            ae = be(function (e) {
                return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            H.apply(D = O.call(w.childNodes), w.childNodes), D[w.childNodes.length].nodeType
        } catch (e) {
            H = {
                apply: D.length ? function (e, t) {
                    L.apply(e, O.call(t))
                } : function (e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];);
                    e.length = n - 1
                }
            }
        }

        function se(e, t, r, i) {
            var o, s, l, c, f, h, y, m = t && t.ownerDocument,
                w = t ? t.nodeType : 9;
            if (r = r || [], "string" != typeof e || !e || 1 !== w && 9 !== w && 11 !== w) return r;
            if (!i && (p(t), t = t || d, g)) {
                if (11 !== w && (f = Z.exec(e)))
                    if (o = f[1]) {
                        if (9 === w) {
                            if (!(l = t.getElementById(o))) return r;
                            if (l.id === o) return r.push(l), r
                        } else if (m && (l = m.getElementById(o)) && x(t, l) && l.id === o) return r.push(l), r
                    } else {
                        if (f[2]) return H.apply(r, t.getElementsByTagName(e)), r;
                        if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return H.apply(r, t.getElementsByClassName(o)), r
                    } if (n.qsa && !A[e + " "] && (!v || !v.test(e)) && (1 !== w || "object" !== t.nodeName.toLowerCase())) {
                        if (y = e, m = t, 1 === w && (U.test(e) || z.test(e))) {
                            for ((m = ee.test(e) && ye(t.parentNode) || t) === t && n.scope || ((c = t.getAttribute("id")) ? c = c.replace(re, ie) : t.setAttribute("id", c = b)), s = (h = a(e)).length; s--;) h[s] = (c ? "#" + c : ":scope") + " " + xe(h[s]);
                            y = h.join(",")
                        }
                        try {
                            return H.apply(r, m.querySelectorAll(y)), r
                        } catch (t) {
                            A(e, !0)
                        } finally {
                            c === b && t.removeAttribute("id")
                        }
                    }
            }
            return u(e.replace($, "$1"), t, r, i)
        }

        function ue() {
            var e = [];
            return function t(n, i) {
                return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i
            }
        }

        function le(e) {
            return e[b] = !0, e
        }

        function ce(e) {
            var t = d.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function fe(e, t) {
            for (var n = e.split("|"), i = n.length; i--;) r.attrHandle[n[i]] = t
        }

        function pe(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function de(e) {
            return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }

        function he(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function ge(e) {
            return function (t) {
                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ae(t) === e : t.disabled === e : "label" in t && t.disabled === e
            }
        }

        function ve(e) {
            return le(function (t) {
                return t = +t, le(function (n, r) {
                    for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        function ye(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        for (t in n = se.support = {}, o = se.isXML = function (e) {
            var t = e && e.namespaceURI,
                n = e && (e.ownerDocument || e).documentElement;
            return !Y.test(t || n && n.nodeName || "HTML")
        }, p = se.setDocument = function (e) {
            var t, i, a = e ? e.ownerDocument || e : w;
            return a != d && 9 === a.nodeType && a.documentElement ? (h = (d = a).documentElement, g = !o(d), w != d && (i = d.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", oe, !1) : i.attachEvent && i.attachEvent("onunload", oe)), n.scope = ce(function (e) {
                return h.appendChild(e).appendChild(d.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
            }), n.attributes = ce(function (e) {
                return e.className = "i", !e.getAttribute("className")
            }), n.getElementsByTagName = ce(function (e) {
                return e.appendChild(d.createComment("")), !e.getElementsByTagName("*").length
            }), n.getElementsByClassName = K.test(d.getElementsByClassName), n.getById = ce(function (e) {
                return h.appendChild(e).id = b, !d.getElementsByName || !d.getElementsByName(b).length
            }), n.getById ? (r.filter.ID = function (e) {
                var t = e.replace(te, ne);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }, r.find.ID = function (e, t) {
                if (void 0 !== t.getElementById && g) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }) : (r.filter.ID = function (e) {
                var t = e.replace(te, ne);
                return function (e) {
                    var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }, r.find.ID = function (e, t) {
                if (void 0 !== t.getElementById && g) {
                    var n, r, i, o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                        for (i = t.getElementsByName(e), r = 0; o = i[r++];)
                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                    }
                    return []
                }
            }), r.find.TAG = n.getElementsByTagName ? function (e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
            } : function (e, t) {
                var n, r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }, r.find.CLASS = n.getElementsByClassName && function (e, t) {
                if (void 0 !== t.getElementsByClassName && g) return t.getElementsByClassName(e)
            }, y = [], v = [], (n.qsa = K.test(d.querySelectorAll)) && (ce(function (e) {
                var t;
                h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + b + "-]").length || v.push("~="), (t = d.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || v.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + b + "+*").length || v.push(".#.+[+~]"), e.querySelectorAll("\\\f"), v.push("[\\r\\n\\f]")
            }), ce(function (e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = d.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:")
            })), (n.matchesSelector = K.test(m = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ce(function (e) {
                n.disconnectedMatch = m.call(e, "*"), m.call(e, "[s!='']:x"), y.push("!=", F)
            }), v = v.length && new RegExp(v.join("|")), y = y.length && new RegExp(y.join("|")), t = K.test(h.compareDocumentPosition), x = t || K.test(h.contains) ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function (e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, N = t ? function (e, t) {
                if (e === t) return f = !0, 0;
                var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return r || (1 & (r = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e == d || e.ownerDocument == w && x(w, e) ? -1 : t == d || t.ownerDocument == w && x(w, t) ? 1 : c ? P(c, e) - P(c, t) : 0 : 4 & r ? -1 : 1)
            } : function (e, t) {
                if (e === t) return f = !0, 0;
                var n, r = 0,
                    i = e.parentNode,
                    o = t.parentNode,
                    a = [e],
                    s = [t];
                if (!i || !o) return e == d ? -1 : t == d ? 1 : i ? -1 : o ? 1 : c ? P(c, e) - P(c, t) : 0;
                if (i === o) return pe(e, t);
                for (n = e; n = n.parentNode;) a.unshift(n);
                for (n = t; n = n.parentNode;) s.unshift(n);
                for (; a[r] === s[r];) r++;
                return r ? pe(a[r], s[r]) : a[r] == w ? -1 : s[r] == w ? 1 : 0
            }, d) : d
        }, se.matches = function (e, t) {
            return se(e, null, null, t)
        }, se.matchesSelector = function (e, t) {
            if (p(e), n.matchesSelector && g && !A[t + " "] && (!y || !y.test(t)) && (!v || !v.test(t))) try {
                var r = m.call(e, t);
                if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
            } catch (e) {
                A(t, !0)
            }
            return se(t, d, null, [e]).length > 0
        }, se.contains = function (e, t) {
            return (e.ownerDocument || e) != d && p(e), x(e, t)
        }, se.attr = function (e, t) {
            (e.ownerDocument || e) != d && p(e);
            var i = r.attrHandle[t.toLowerCase()],
                o = i && j.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
            return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
        }, se.escape = function (e) {
            return (e + "").replace(re, ie)
        }, se.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, se.uniqueSort = function (e) {
            var t, r = [],
                i = 0,
                o = 0;
            if (f = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(N), f) {
                for (; t = e[o++];) t === e[o] && (i = r.push(o));
                for (; i--;) e.splice(r[i], 1)
            }
            return c = null, e
        }, i = se.getText = function (e) {
            var t, n = "",
                r = 0,
                o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += i(e)
                } else if (3 === o || 4 === o) return e.nodeValue
            } else
                for (; t = e[r++];) n += i(t);
            return n
        }, (r = se.selectors = {
            cacheLength: 50,
            createPseudo: le,
            match: G,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e
                },
                PSEUDO: function (e) {
                    var t, n = !e[6] && e[2];
                    return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(te, ne).toLowerCase();
                    return "*" === e ? function () {
                        return !0
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function (e) {
                    var t = E[e + " "];
                    return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && E(e, function (e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function (e, t, n) {
                    return function (r) {
                        var i = se.attr(r, e);
                        return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace(B, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"))
                    }
                },
                CHILD: function (e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3),
                        a = "last" !== e.slice(-4),
                        s = "of-type" === t;
                    return 1 === r && 0 === i ? function (e) {
                        return !!e.parentNode
                    } : function (t, n, u) {
                        var l, c, f, p, d, h, g = o !== a ? "nextSibling" : "previousSibling",
                            v = t.parentNode,
                            y = s && t.nodeName.toLowerCase(),
                            m = !u && !s,
                            x = !1;
                        if (v) {
                            if (o) {
                                for (; g;) {
                                    for (p = t; p = p[g];)
                                        if (s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) return !1;
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? v.firstChild : v.lastChild], a && m) {
                                for (x = (d = (l = (c = (f = (p = v)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]) && l[2], p = d && v.childNodes[d]; p = ++d && p && p[g] || (x = d = 0) || h.pop();)
                                    if (1 === p.nodeType && ++x && p === t) {
                                        c[e] = [T, d, x];
                                        break
                                    }
                            } else if (m && (x = d = (l = (c = (f = (p = t)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]), !1 === x)
                                for (;
                                    (p = ++d && p && p[g] || (x = d = 0) || h.pop()) && ((s ? p.nodeName.toLowerCase() !== y : 1 !== p.nodeType) || !++x || (m && ((c = (f = p[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] = [T, x]), p !== t)););
                            return (x -= i) === r || x % r == 0 && x / r >= 0
                        }
                    }
                },
                PSEUDO: function (e, t) {
                    var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                    return i[b] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function (e, n) {
                        for (var r, o = i(e, t), a = o.length; a--;) e[r = P(e, o[a])] = !(n[r] = o[a])
                    }) : function (e) {
                        return i(e, 0, n)
                    }) : i
                }
            },
            pseudos: {
                not: le(function (e) {
                    var t = [],
                        n = [],
                        r = s(e.replace($, "$1"));
                    return r[b] ? le(function (e, t, n, i) {
                        for (var o, a = r(e, null, i, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                    }) : function (e, i, o) {
                        return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
                    }
                }),
                has: le(function (e) {
                    return function (t) {
                        return se(e, t).length > 0
                    }
                }),
                contains: le(function (e) {
                    return e = e.replace(te, ne),
                        function (t) {
                            return (t.textContent || i(t)).indexOf(e) > -1
                        }
                }),
                lang: le(function (e) {
                    return V.test(e || "") || se.error("unsupported lang: " + e), e = e.replace(te, ne).toLowerCase(),
                        function (t) {
                            var n;
                            do {
                                if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                            } while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function (e) {
                    return e === h
                },
                focus: function (e) {
                    return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: ge(!1),
                disabled: ge(!0),
                checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                },
                empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function (e) {
                    return !r.pseudos.empty(e)
                },
                header: function (e) {
                    return J.test(e.nodeName)
                },
                input: function (e) {
                    return Q.test(e.nodeName)
                },
                button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: ve(function () {
                    return [0]
                }),
                last: ve(function (e, t) {
                    return [t - 1]
                }),
                eq: ve(function (e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: ve(function (e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e
                }),
                odd: ve(function (e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e
                }),
                lt: ve(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0;) e.push(r);
                    return e
                }),
                gt: ve(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                    return e
                })
            }
        }).pseudos.nth = r.pseudos.eq, {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) r.pseudos[t] = de(t);
        for (t in {
            submit: !0,
            reset: !0
        }) r.pseudos[t] = he(t);

        function me() { }

        function xe(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r
        }

        function be(e, t, n) {
            var r = t.dir,
                i = t.next,
                o = i || r,
                a = n && "parentNode" === o,
                s = C++;
            return t.first ? function (t, n, i) {
                for (; t = t[r];)
                    if (1 === t.nodeType || a) return e(t, n, i);
                return !1
            } : function (t, n, u) {
                var l, c, f, p = [T, s];
                if (u) {
                    for (; t = t[r];)
                        if ((1 === t.nodeType || a) && e(t, n, u)) return !0
                } else
                    for (; t = t[r];)
                        if (1 === t.nodeType || a)
                            if (c = (f = t[b] || (t[b] = {}))[t.uniqueID] || (f[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t;
                            else {
                                if ((l = c[o]) && l[0] === T && l[1] === s) return p[2] = l[2];
                                if (c[o] = p, p[2] = e(t, n, u)) return !0
                            } return !1
            }
        }

        function we(e) {
            return e.length > 1 ? function (t, n, r) {
                for (var i = e.length; i--;)
                    if (!e[i](t, n, r)) return !1;
                return !0
            } : e[0]
        }

        function Te(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
            return a
        }

        function Ce(e, t, n, r, i, o) {
            return r && !r[b] && (r = Ce(r)), i && !i[b] && (i = Ce(i, o)), le(function (o, a, s, u) {
                var l, c, f, p = [],
                    d = [],
                    h = a.length,
                    g = o || function (e, t, n) {
                        for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                        return n
                    }(t || "*", s.nodeType ? [s] : s, []),
                    v = !e || !o && t ? g : Te(g, p, e, s, u),
                    y = n ? i || (o ? e : h || r) ? [] : a : v;
                if (n && n(v, y, s, u), r)
                    for (l = Te(y, d), r(l, [], s, u), c = l.length; c--;)(f = l[c]) && (y[d[c]] = !(v[d[c]] = f));
                if (o) {
                    if (i || e) {
                        if (i) {
                            for (l = [], c = y.length; c--;)(f = y[c]) && l.push(v[c] = f);
                            i(null, y = [], l, u)
                        }
                        for (c = y.length; c--;)(f = y[c]) && (l = i ? P(o, f) : p[c]) > -1 && (o[l] = !(a[l] = f))
                    }
                } else y = Te(y === a ? y.splice(h, y.length) : y), i ? i(null, a, y, u) : H.apply(a, y)
            })
        }

        function Ee(e) {
            for (var t, n, i, o = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], u = a ? 1 : 0, c = be(function (e) {
                return e === t
            }, s, !0), f = be(function (e) {
                return P(t, e) > -1
            }, s, !0), p = [function (e, n, r) {
                var i = !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
                return t = null, i
            }]; u < o; u++)
                if (n = r.relative[e[u].type]) p = [be(we(p), n)];
                else {
                    if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
                        for (i = ++u; i < o && !r.relative[e[i].type]; i++);
                        return Ce(u > 1 && we(p), u > 1 && xe(e.slice(0, u - 1).concat({
                            value: " " === e[u - 2].type ? "*" : ""
                        })).replace($, "$1"), n, u < i && Ee(e.slice(u, i)), i < o && Ee(e = e.slice(i)), i < o && xe(e))
                    }
                    p.push(n)
                } return we(p)
        }
        return me.prototype = r.filters = r.pseudos, r.setFilters = new me, a = se.tokenize = function (e, t) {
            var n, i, o, a, s, u, l, c = S[e + " "];
            if (c) return t ? 0 : c.slice(0);
            for (s = e, u = [], l = r.preFilter; s;) {
                for (a in n && !(i = _.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), n = !1, (i = z.exec(s)) && (n = i.shift(), o.push({
                    value: n,
                    type: i[0].replace($, " ")
                }), s = s.slice(n.length)), r.filter) !(i = G[a].exec(s)) || l[a] && !(i = l[a](i)) || (n = i.shift(), o.push({
                    value: n,
                    type: a,
                    matches: i
                }), s = s.slice(n.length));
                if (!n) break
            }
            return t ? s.length : s ? se.error(e) : S(e, u).slice(0)
        }, s = se.compile = function (e, t) {
            var n, i = [],
                o = [],
                s = k[e + " "];
            if (!s) {
                for (t || (t = a(e)), n = t.length; n--;)(s = Ee(t[n]))[b] ? i.push(s) : o.push(s);
                (s = k(e, function (e, t) {
                    var n = t.length > 0,
                        i = e.length > 0,
                        o = function (o, a, s, u, c) {
                            var f, h, v, y = 0,
                                m = "0",
                                x = o && [],
                                b = [],
                                w = l,
                                C = o || i && r.find.TAG("*", c),
                                E = T += null == w ? 1 : Math.random() || .1,
                                S = C.length;
                            for (c && (l = a == d || a || c); m !== S && null != (f = C[m]); m++) {
                                if (i && f) {
                                    for (h = 0, a || f.ownerDocument == d || (p(f), s = !g); v = e[h++];)
                                        if (v(f, a || d, s)) {
                                            u.push(f);
                                            break
                                        } c && (T = E)
                                }
                                n && ((f = !v && f) && y--, o && x.push(f))
                            }
                            if (y += m, n && m !== y) {
                                for (h = 0; v = t[h++];) v(x, b, a, s);
                                if (o) {
                                    if (y > 0)
                                        for (; m--;) x[m] || b[m] || (b[m] = q.call(u));
                                    b = Te(b)
                                }
                                H.apply(u, b), c && !o && b.length > 0 && y + t.length > 1 && se.uniqueSort(u)
                            }
                            return c && (T = E, l = w), x
                        };
                    return n ? le(o) : o
                }(o, i))).selector = e
            }
            return s
        }, u = se.select = function (e, t, n, i) {
            var o, u, l, c, f, p = "function" == typeof e && e,
                d = !i && a(e = p.selector || e);
            if (n = n || [], 1 === d.length) {
                if ((u = d[0] = d[0].slice(0)).length > 2 && "ID" === (l = u[0]).type && 9 === t.nodeType && g && r.relative[u[1].type]) {
                    if (!(t = (r.find.ID(l.matches[0].replace(te, ne), t) || [])[0])) return n;
                    p && (t = t.parentNode), e = e.slice(u.shift().value.length)
                }
                for (o = G.needsContext.test(e) ? 0 : u.length; o-- && (l = u[o], !r.relative[c = l.type]);)
                    if ((f = r.find[c]) && (i = f(l.matches[0].replace(te, ne), ee.test(u[0].type) && ye(t.parentNode) || t))) {
                        if (u.splice(o, 1), !(e = i.length && xe(u))) return H.apply(n, i), n;
                        break
                    }
            }
            return (p || s(e, d))(i, t, !g, n, !t || ee.test(e) && ye(t.parentNode) || t), n
        }, n.sortStable = b.split("").sort(N).join("") === b, n.detectDuplicates = !!f, p(), n.sortDetached = ce(function (e) {
            return 1 & e.compareDocumentPosition(d.createElement("fieldset"))
        }), ce(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || fe("type|href|height|width", function (e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), n.attributes && ce(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || fe("value", function (e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), ce(function (e) {
            return null == e.getAttribute("disabled")
        }) || fe(R, function (e, t, n) {
            var r;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), se
    }(e);
    b.find = T, b.expr = T.selectors, b.expr[":"] = b.expr.pseudos, b.uniqueSort = b.unique = T.uniqueSort, b.text = T.getText, b.isXMLDoc = T.isXML, b.contains = T.contains, b.escapeSelector = T.escape;
    var C = function (e, t, n) {
        for (var r = [], i = void 0 !== n;
            (e = e[t]) && 9 !== e.nodeType;)
            if (1 === e.nodeType) {
                if (i && b(e).is(n)) break;
                r.push(e)
            } return r
    },
        E = function (e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        S = b.expr.match.needsContext;

    function k(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function N(e, t, n) {
        return h(t) ? b.grep(e, function (e, r) {
            return !!t.call(e, r, e) !== n
        }) : t.nodeType ? b.grep(e, function (e) {
            return e === t !== n
        }) : "string" != typeof t ? b.grep(e, function (e) {
            return s.call(t, e) > -1 !== n
        }) : b.filter(t, e, n)
    }
    b.filter = function (e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? b.find.matchesSelector(r, e) ? [r] : [] : b.find.matches(e, b.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    }, b.fn.extend({
        find: function (e) {
            var t, n, r = this.length,
                i = this;
            if ("string" != typeof e) return this.pushStack(b(e).filter(function () {
                for (t = 0; t < r; t++)
                    if (b.contains(i[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < r; t++) b.find(e, i[t], n);
            return r > 1 ? b.uniqueSort(n) : n
        },
        filter: function (e) {
            return this.pushStack(N(this, e || [], !1))
        },
        not: function (e) {
            return this.pushStack(N(this, e || [], !0))
        },
        is: function (e) {
            return !!N(this, "string" == typeof e && S.test(e) ? b(e) : e || [], !1).length
        }
    });
    var j, D = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (b.fn.init = function (e, t, n) {
        var r, i;
        if (!e) return this;
        if (n = n || j, "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : D.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof b ? t[0] : t, b.merge(this, b.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : v, !0)), A.test(r[1]) && b.isPlainObject(t))
                    for (r in t) h(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (i = v.getElementById(r[2])) && (this[0] = i, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : h(e) ? void 0 !== n.ready ? n.ready(e) : e(b) : b.makeArray(e, this)
    }).prototype = b.fn, j = b(v);
    var q = /^(?:parents|prev(?:Until|All))/,
        L = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function H(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }
    b.fn.extend({
        has: function (e) {
            var t = b(e, this),
                n = t.length;
            return this.filter(function () {
                for (var e = 0; e < n; e++)
                    if (b.contains(this, t[e])) return !0
            })
        },
        closest: function (e, t) {
            var n, r = 0,
                i = this.length,
                o = [],
                a = "string" != typeof e && b(e);
            if (!S.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && b.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        } return this.pushStack(o.length > 1 ? b.uniqueSort(o) : o)
        },
        index: function (e) {
            return e ? "string" == typeof e ? s.call(b(e), this[0]) : s.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (e, t) {
            return this.pushStack(b.uniqueSort(b.merge(this.get(), b(e, t))))
        },
        addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), b.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function (e) {
            return C(e, "parentNode")
        },
        parentsUntil: function (e, t, n) {
            return C(e, "parentNode", n)
        },
        next: function (e) {
            return H(e, "nextSibling")
        },
        prev: function (e) {
            return H(e, "previousSibling")
        },
        nextAll: function (e) {
            return C(e, "nextSibling")
        },
        prevAll: function (e) {
            return C(e, "previousSibling")
        },
        nextUntil: function (e, t, n) {
            return C(e, "nextSibling", n)
        },
        prevUntil: function (e, t, n) {
            return C(e, "previousSibling", n)
        },
        siblings: function (e) {
            return E((e.parentNode || {}).firstChild, e)
        },
        children: function (e) {
            return E(e.firstChild)
        },
        contents: function (e) {
            return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (k(e, "template") && (e = e.content || e), b.merge([], e.childNodes))
        }
    }, function (e, t) {
        b.fn[e] = function (n, r) {
            var i = b.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = b.filter(r, i)), this.length > 1 && (L[e] || b.uniqueSort(i), q.test(e) && i.reverse()), this.pushStack(i)
        }
    });
    var O = /[^\x20\t\r\n\f]+/g;

    function P(e) {
        return e
    }

    function R(e) {
        throw e
    }

    function M(e, t, n, r) {
        var i;
        try {
            e && h(i = e.promise) ? i.call(e).done(t).fail(n) : e && h(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    b.Callbacks = function (e) {
        e = "string" == typeof e ? function (e) {
            var t = {};
            return b.each(e.match(O) || [], function (e, n) {
                t[n] = !0
            }), t
        }(e) : b.extend({}, e);
        var t, n, r, i, o = [],
            a = [],
            s = -1,
            u = function () {
                for (i = i || e.once, r = t = !0; a.length; s = -1)
                    for (n = a.shift(); ++s < o.length;) !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && (s = o.length, n = !1);
                e.memory || (n = !1), t = !1, i && (o = n ? [] : "")
            },
            l = {
                add: function () {
                    return o && (n && !t && (s = o.length - 1, a.push(n)), function t(n) {
                        b.each(n, function (n, r) {
                            h(r) ? e.unique && l.has(r) || o.push(r) : r && r.length && "string" !== x(r) && t(r)
                        })
                    }(arguments), n && !t && u()), this
                },
                remove: function () {
                    return b.each(arguments, function (e, t) {
                        for (var n;
                            (n = b.inArray(t, o, n)) > -1;) o.splice(n, 1), n <= s && s--
                    }), this
                },
                has: function (e) {
                    return e ? b.inArray(e, o) > -1 : o.length > 0
                },
                empty: function () {
                    return o && (o = []), this
                },
                disable: function () {
                    return i = a = [], o = n = "", this
                },
                disabled: function () {
                    return !o
                },
                lock: function () {
                    return i = a = [], n || t || (o = n = ""), this
                },
                locked: function () {
                    return !!i
                },
                fireWith: function (e, n) {
                    return i || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || u()), this
                },
                fire: function () {
                    return l.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!r
                }
            };
        return l
    }, b.extend({
        Deferred: function (t) {
            var n = [
                ["notify", "progress", b.Callbacks("memory"), b.Callbacks("memory"), 2],
                ["resolve", "done", b.Callbacks("once memory"), b.Callbacks("once memory"), 0, "resolved"],
                ["reject", "fail", b.Callbacks("once memory"), b.Callbacks("once memory"), 1, "rejected"]
            ],
                r = "pending",
                i = {
                    state: function () {
                        return r
                    },
                    always: function () {
                        return o.done(arguments).fail(arguments), this
                    },
                    catch: function (e) {
                        return i.then(null, e)
                    },
                    pipe: function () {
                        var e = arguments;
                        return b.Deferred(function (t) {
                            b.each(n, function (n, r) {
                                var i = h(e[r[4]]) && e[r[4]];
                                o[r[1]](function () {
                                    var e = i && i.apply(this, arguments);
                                    e && h(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    then: function (t, r, i) {
                        var o = 0;

                        function a(t, n, r, i) {
                            return function () {
                                var s = this,
                                    u = arguments,
                                    l = function () {
                                        var e, l;
                                        if (!(t < o)) {
                                            if ((e = r.apply(s, u)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                            l = e && ("object" == typeof e || "function" == typeof e) && e.then, h(l) ? i ? l.call(e, a(o, n, P, i), a(o, n, R, i)) : (o++, l.call(e, a(o, n, P, i), a(o, n, R, i), a(o, n, P, n.notifyWith))) : (r !== P && (s = void 0, u = [e]), (i || n.resolveWith)(s, u))
                                        }
                                    },
                                    c = i ? l : function () {
                                        try {
                                            l()
                                        } catch (e) {
                                            b.Deferred.exceptionHook && b.Deferred.exceptionHook(e, c.stackTrace), t + 1 >= o && (r !== R && (s = void 0, u = [e]), n.rejectWith(s, u))
                                        }
                                    };
                                t ? c() : (b.Deferred.getStackHook && (c.stackTrace = b.Deferred.getStackHook()), e.setTimeout(c))
                            }
                        }
                        return b.Deferred(function (e) {
                            n[0][3].add(a(0, e, h(i) ? i : P, e.notifyWith)), n[1][3].add(a(0, e, h(t) ? t : P)), n[2][3].add(a(0, e, h(r) ? r : R))
                        }).promise()
                    },
                    promise: function (e) {
                        return null != e ? b.extend(e, i) : i
                    }
                },
                o = {};
            return b.each(n, function (e, t) {
                var a = t[2],
                    s = t[5];
                i[t[1]] = a.add, s && a.add(function () {
                    r = s
                }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), a.add(t[3].fire), o[t[0]] = function () {
                    return o[t[0] + "With"](this === o ? void 0 : this, arguments), this
                }, o[t[0] + "With"] = a.fireWith
            }), i.promise(o), t && t.call(o, o), o
        },
        when: function (e) {
            var t = arguments.length,
                n = t,
                r = Array(n),
                o = i.call(arguments),
                a = b.Deferred(),
                s = function (e) {
                    return function (n) {
                        r[e] = this, o[e] = arguments.length > 1 ? i.call(arguments) : n, --t || a.resolveWith(r, o)
                    }
                };
            if (t <= 1 && (M(e, a.done(s(n)).resolve, a.reject, !t), "pending" === a.state() || h(o[n] && o[n].then))) return a.then();
            for (; n--;) M(o[n], s(n), a.reject);
            return a.promise()
        }
    });
    var I = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    b.Deferred.exceptionHook = function (t, n) {
        e.console && e.console.warn && t && I.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }, b.readyException = function (t) {
        e.setTimeout(function () {
            throw t
        })
    };
    var W = b.Deferred();

    function F() {
        v.removeEventListener("DOMContentLoaded", F), e.removeEventListener("load", F), b.ready()
    }
    b.fn.ready = function (e) {
        return W.then(e).catch(function (e) {
            b.readyException(e)
        }), this
    }, b.extend({
        isReady: !1,
        readyWait: 1,
        ready: function (e) {
            (!0 === e ? --b.readyWait : b.isReady) || (b.isReady = !0, !0 !== e && --b.readyWait > 0 || W.resolveWith(v, [b]))
        }
    }), b.ready.then = W.then, "complete" === v.readyState || "loading" !== v.readyState && !v.documentElement.doScroll ? e.setTimeout(b.ready) : (v.addEventListener("DOMContentLoaded", F), e.addEventListener("load", F));
    var B = function (e, t, n, r, i, o, a) {
        var s = 0,
            u = e.length,
            l = null == n;
        if ("object" === x(n))
            for (s in i = !0, n) B(e, t, s, n[s], !0, o, a);
        else if (void 0 !== r && (i = !0, h(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function (e, t, n) {
            return l.call(b(e), n)
        })), t))
            for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
        return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
    },
        $ = /^-ms-/,
        _ = /-([a-z])/g;

    function z(e, t) {
        return t.toUpperCase()
    }

    function U(e) {
        return e.replace($, "ms-").replace(_, z)
    }
    var X = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };

    function V() {
        this.expando = b.expando + V.uid++
    }
    V.uid = 1, V.prototype = {
        cache: function (e) {
            var t = e[this.expando];
            return t || (t = {}, X(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function (e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[U(t)] = n;
            else
                for (r in t) i[U(r)] = t[r];
            return i
        },
        get: function (e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][U(t)]
        },
        access: function (e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function (e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(U) : (t = U(t)) in r ? [t] : t.match(O) || []).length;
                    for (; n--;) delete r[t[n]]
                } (void 0 === t || b.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function (e) {
            var t = e[this.expando];
            return void 0 !== t && !b.isEmptyObject(t)
        }
    };
    var G = new V,
        Y = new V,
        Q = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        J = /[A-Z]/g;

    function K(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(J, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
                try {
                    n = function (e) {
                        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Q.test(e) ? JSON.parse(e) : e)
                    }(n)
                } catch (e) { }
                Y.set(e, t, n)
            } else n = void 0;
        return n
    }
    b.extend({
        hasData: function (e) {
            return Y.hasData(e) || G.hasData(e)
        },
        data: function (e, t, n) {
            return Y.access(e, t, n)
        },
        removeData: function (e, t) {
            Y.remove(e, t)
        },
        _data: function (e, t, n) {
            return G.access(e, t, n)
        },
        _removeData: function (e, t) {
            G.remove(e, t)
        }
    }), b.fn.extend({
        data: function (e, t) {
            var n, r, i, o = this[0],
                a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = Y.get(o), 1 === o.nodeType && !G.get(o, "hasDataAttrs"))) {
                    for (n = a.length; n--;) a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = U(r.slice(5)), K(o, r, i[r]));
                    G.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function () {
                Y.set(this, e)
            }) : B(this, function (t) {
                var n;
                if (o && void 0 === t) return void 0 !== (n = Y.get(o, e)) ? n : void 0 !== (n = K(o, e)) ? n : void 0;
                this.each(function () {
                    Y.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function (e) {
            return this.each(function () {
                Y.remove(this, e)
            })
        }
    }), b.extend({
        queue: function (e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = G.get(e, t), n && (!r || Array.isArray(n) ? r = G.access(e, t, b.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function (e, t) {
            t = t || "fx";
            var n = b.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = b._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function () {
                b.dequeue(e, t)
            }, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return G.get(e, n) || G.access(e, n, {
                empty: b.Callbacks("once memory").add(function () {
                    G.remove(e, [t + "queue", n])
                })
            })
        }
    }), b.fn.extend({
        queue: function (e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? b.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                var n = b.queue(this, e, t);
                b._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && b.dequeue(this, e)
            })
        },
        dequeue: function (e) {
            return this.each(function () {
                b.dequeue(this, e)
            })
        },
        clearQueue: function (e) {
            return this.queue(e || "fx", [])
        },
        promise: function (e, t) {
            var n, r = 1,
                i = b.Deferred(),
                o = this,
                a = this.length,
                s = function () {
                    --r || i.resolveWith(o, [o])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(n = G.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var Z = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ee = new RegExp("^(?:([+-])=|)(" + Z + ")([a-z%]*)$", "i"),
        te = ["Top", "Right", "Bottom", "Left"],
        ne = v.documentElement,
        re = function (e) {
            return b.contains(e.ownerDocument, e)
        },
        ie = {
            composed: !0
        };
    ne.getRootNode && (re = function (e) {
        return b.contains(e.ownerDocument, e) || e.getRootNode(ie) === e.ownerDocument
    });
    var oe = function (e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && re(e) && "none" === b.css(e, "display")
    };

    function ae(e, t, n, r) {
        var i, o, a = 20,
            s = r ? function () {
                return r.cur()
            } : function () {
                return b.css(e, t, "")
            },
            u = s(),
            l = n && n[3] || (b.cssNumber[t] ? "" : "px"),
            c = e.nodeType && (b.cssNumber[t] || "px" !== l && +u) && ee.exec(b.css(e, t));
        if (c && c[3] !== l) {
            for (u /= 2, l = l || c[3], c = +u || 1; a--;) b.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
            c *= 2, b.style(e, t, c + l), n = n || []
        }
        return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
    }
    var se = {};

    function ue(e) {
        var t, n = e.ownerDocument,
            r = e.nodeName,
            i = se[r];
        return i || (t = n.body.appendChild(n.createElement(r)), i = b.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), se[r] = i, i)
    }

    function le(e, t) {
        for (var n, r, i = [], o = 0, a = e.length; o < a; o++)(r = e[o]).style && (n = r.style.display, t ? ("none" === n && (i[o] = G.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && oe(r) && (i[o] = ue(r))) : "none" !== n && (i[o] = "none", G.set(r, "display", n)));
        for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
        return e
    }
    b.fn.extend({
        show: function () {
            return le(this, !0)
        },
        hide: function () {
            return le(this)
        },
        toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                oe(this) ? b(this).show() : b(this).hide()
            })
        }
    });
    var ce, fe, pe = /^(?:checkbox|radio)$/i,
        de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        he = /^$|^module$|\/(?:java|ecma)script/i;
    ce = v.createDocumentFragment().appendChild(v.createElement("div")), (fe = v.createElement("input")).setAttribute("type", "radio"), fe.setAttribute("checked", "checked"), fe.setAttribute("name", "t"), ce.appendChild(fe), d.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked, ce.innerHTML = "<textarea>x</textarea>", d.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue, ce.innerHTML = "<option></option>", d.option = !!ce.lastChild;
    var ge = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };

    function ve(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && k(e, t) ? b.merge([e], n) : n
    }

    function ye(e, t) {
        for (var n = 0, r = e.length; n < r; n++) G.set(e[n], "globalEval", !t || G.get(t[n], "globalEval"))
    }
    ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td, d.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]);
    var me = /<|&#?\w+;/;

    function xe(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === x(o)) b.merge(p, o.nodeType ? [o] : o);
                else if (me.test(o)) {
                    for (a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + b.htmlPrefilter(o) + u[2], c = u[0]; c--;) a = a.lastChild;
                    b.merge(p, a.childNodes), (a = f.firstChild).textContent = ""
                } else p.push(t.createTextNode(o));
        for (f.textContent = "", d = 0; o = p[d++];)
            if (r && b.inArray(o, r) > -1) i && i.push(o);
            else if (l = re(o), a = ve(f.appendChild(o), "script"), l && ye(a), n)
                for (c = 0; o = a[c++];) he.test(o.type || "") && n.push(o);
        return f
    }
    var be = /^([^.]*)(?:\.(.+)|)/;

    function we() {
        return !0
    }

    function Te() {
        return !1
    }

    function Ce(e, t) {
        return e === function () {
            try {
                return v.activeElement
            } catch (e) { }
        }() == ("focus" === t)
    }

    function Ee(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (r = r || n, n = void 0), t) Ee(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Te;
        else if (!i) return e;
        return 1 === o && (a = i, (i = function (e) {
            return b().off(e), a.apply(this, arguments)
        }).guid = a.guid || (a.guid = b.guid++)), e.each(function () {
            b.event.add(this, t, i, r, n)
        })
    }

    function Se(e, t, n) {
        n ? (G.set(e, t, !1), b.event.add(e, t, {
            namespace: !1,
            handler: function (e) {
                var r, o, a = G.get(this, t);
                if (1 & e.isTrigger && this[t]) {
                    if (a.length) (b.event.special[t] || {}).delegateType && e.stopPropagation();
                    else if (a = i.call(arguments), G.set(this, t, a), r = n(this, t), this[t](), a !== (o = G.get(this, t)) || r ? G.set(this, t, !1) : o = {}, a !== o) return e.stopImmediatePropagation(), e.preventDefault(), o && o.value
                } else a.length && (G.set(this, t, {
                    value: b.event.trigger(b.extend(a[0], b.Event.prototype), a.slice(1), this)
                }), e.stopImmediatePropagation())
            }
        })) : void 0 === G.get(e, t) && b.event.add(e, t, we)
    }
    b.event = {
        global: {},
        add: function (e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = G.get(e);
            if (X(e))
                for (n.handler && (n = (o = n).handler, i = o.selector), i && b.find.matchesSelector(ne, i), n.guid || (n.guid = b.guid++), (u = v.events) || (u = v.events = Object.create(null)), (a = v.handle) || (a = v.handle = function (t) {
                    return void 0 !== b && b.event.triggered !== t.type ? b.event.dispatch.apply(e, arguments) : void 0
                }), l = (t = (t || "").match(O) || [""]).length; l--;) d = g = (s = be.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = b.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = b.event.special[d] || {}, c = b.extend({
                    type: d,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && b.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(d, a)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), b.event.global[d] = !0)
        },
        remove: function (e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = G.hasData(e) && G.get(e);
            if (v && (u = v.events)) {
                for (l = (t = (t || "").match(O) || [""]).length; l--;)
                    if (d = g = (s = be.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
                        for (f = b.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length; o--;) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                        a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || b.removeEvent(e, d, v.handle), delete u[d])
                    } else
                        for (d in u) b.event.remove(e, d + t[l], n, r, !0);
                b.isEmptyObject(u) && G.remove(e, "handle events")
            }
        },
        dispatch: function (e) {
            var t, n, r, i, o, a, s = new Array(arguments.length),
                u = b.event.fix(e),
                l = (G.get(this, "events") || Object.create(null))[u.type] || [],
                c = b.event.special[u.type] || {};
            for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
            if (u.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
                for (a = b.event.handlers.call(this, u, l), t = 0;
                    (i = a[t++]) && !u.isPropagationStopped();)
                    for (u.currentTarget = i.elem, n = 0;
                        (o = i.handlers[n++]) && !u.isImmediatePropagationStopped();) u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o, u.data = o.data, void 0 !== (r = ((b.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, u), u.result
            }
        },
        handlers: function (e, t) {
            var n, r, i, o, a, s = [],
                u = t.delegateCount,
                l = e.target;
            if (u && l.nodeType && !("click" === e.type && e.button >= 1))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? b(i, this).index(l) > -1 : b.find(i, this, null, [l]).length), a[i] && o.push(r);
                        o.length && s.push({
                            elem: l,
                            handlers: o
                        })
                    } return l = this, u < t.length && s.push({
                        elem: l,
                        handlers: t.slice(u)
                    }), s
        },
        addProp: function (e, t) {
            Object.defineProperty(b.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: h(t) ? function () {
                    if (this.originalEvent) return t(this.originalEvent)
                } : function () {
                    if (this.originalEvent) return this.originalEvent[e]
                },
                set: function (t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function (e) {
            return e[b.expando] ? e : new b.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function (e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && k(t, "input") && Se(t, "click", we), !1
                },
                trigger: function (e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && k(t, "input") && Se(t, "click"), !0
                },
                _default: function (e) {
                    var t = e.target;
                    return pe.test(t.type) && t.click && k(t, "input") && G.get(t, "click") || k(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, b.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, b.Event = function (e, t) {
        if (!(this instanceof b.Event)) return new b.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? we : Te, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && b.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[b.expando] = !0
    }, b.Event.prototype = {
        constructor: b.Event,
        isDefaultPrevented: Te,
        isPropagationStopped: Te,
        isImmediatePropagationStopped: Te,
        isSimulated: !1,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = we, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = we, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = we, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, b.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0
    }, b.event.addProp), b.each({
        focus: "focusin",
        blur: "focusout"
    }, function (e, t) {
        b.event.special[e] = {
            setup: function () {
                return Se(this, e, Ce), !1
            },
            trigger: function () {
                return Se(this, e), !0
            },
            _default: function () {
                return !0
            },
            delegateType: t
        }
    }), b.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (e, t) {
        b.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function (e) {
                var n, r = e.relatedTarget,
                    i = e.handleObj;
                return r && (r === this || b.contains(this, r)) || (e.type = i.origType, n = i.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), b.fn.extend({
        on: function (e, t, n, r) {
            return Ee(this, e, t, n, r)
        },
        one: function (e, t, n, r) {
            return Ee(this, e, t, n, r, 1)
        },
        off: function (e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, b(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Te), this.each(function () {
                b.event.remove(this, e, n, t)
            })
        }
    });
    var ke = /<script|<style|<link/i,
        Ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ne = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function je(e, t) {
        return k(e, "table") && k(11 !== t.nodeType ? t : t.firstChild, "tr") && b(e).children("tbody")[0] || e
    }

    function De(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function qe(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function Le(e, t) {
        var n, r, i, o, a, s;
        if (1 === t.nodeType) {
            if (G.hasData(e) && (s = G.get(e).events))
                for (i in G.remove(t, "handle events"), s)
                    for (n = 0, r = s[i].length; n < r; n++) b.event.add(t, i, s[i][n]);
            Y.hasData(e) && (o = Y.access(e), a = b.extend({}, o), Y.set(t, a))
        }
    }

    function He(e, t, n, r) {
        t = o(t);
        var i, a, s, u, l, c, f = 0,
            p = e.length,
            g = p - 1,
            v = t[0],
            y = h(v);
        if (y || p > 1 && "string" == typeof v && !d.checkClone && Ae.test(v)) return e.each(function (i) {
            var o = e.eq(i);
            y && (t[0] = v.call(this, i, o.html())), He(o, t, n, r)
        });
        if (p && (a = (i = xe(t, e[0].ownerDocument, !1, e, r)).firstChild, 1 === i.childNodes.length && (i = a), a || r)) {
            for (u = (s = b.map(ve(i, "script"), De)).length; f < p; f++) l = i, f !== g && (l = b.clone(l, !0, !0), u && b.merge(s, ve(l, "script"))), n.call(e[f], l, f);
            if (u)
                for (c = s[s.length - 1].ownerDocument, b.map(s, qe), f = 0; f < u; f++) l = s[f], he.test(l.type || "") && !G.access(l, "globalEval") && b.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? b._evalUrl && !l.noModule && b._evalUrl(l.src, {
                    nonce: l.nonce || l.getAttribute("nonce")
                }, c) : m(l.textContent.replace(Ne, ""), l, c))
        }
        return e
    }

    function Oe(e, t, n) {
        for (var r, i = t ? b.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || b.cleanData(ve(r)), r.parentNode && (n && re(r) && ye(ve(r, "script")), r.parentNode.removeChild(r));
        return e
    }
    b.extend({
        htmlPrefilter: function (e) {
            return e
        },
        clone: function (e, t, n) {
            var r, i, o, a, s, u, l, c = e.cloneNode(!0),
                f = re(e);
            if (!(d.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || b.isXMLDoc(e)))
                for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++) s = o[r], u = a[r], l = void 0, "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
            if (t)
                if (n)
                    for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++) Le(o[r], a[r]);
                else Le(e, c);
            return (a = ve(c, "script")).length > 0 && ye(a, !f && ve(e, "script")), c
        },
        cleanData: function (e) {
            for (var t, n, r, i = b.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (X(n)) {
                    if (t = n[G.expando]) {
                        if (t.events)
                            for (r in t.events) i[r] ? b.event.remove(n, r) : b.removeEvent(n, r, t.handle);
                        n[G.expando] = void 0
                    }
                    n[Y.expando] && (n[Y.expando] = void 0)
                }
        }
    }), b.fn.extend({
        detach: function (e) {
            return Oe(this, e, !0)
        },
        remove: function (e) {
            return Oe(this, e)
        },
        text: function (e) {
            return B(this, function (e) {
                return void 0 === e ? b.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function () {
            return He(this, arguments, function (e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || je(this, e).appendChild(e)
            })
        },
        prepend: function () {
            return He(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = je(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function () {
            return He(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function () {
            return He(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (b.cleanData(ve(e, !1)), e.textContent = "");
            return this
        },
        clone: function (e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function () {
                return b.clone(this, e, t)
            })
        },
        html: function (e) {
            return B(this, function (e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !ke.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = b.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (b.cleanData(ve(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) { }
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function () {
            var e = [];
            return He(this, arguments, function (t) {
                var n = this.parentNode;
                b.inArray(this, e) < 0 && (b.cleanData(ve(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), b.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        b.fn[e] = function (e) {
            for (var n, r = [], i = b(e), o = i.length - 1, s = 0; s <= o; s++) n = s === o ? this : this.clone(!0), b(i[s])[t](n), a.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var Pe = new RegExp("^(" + Z + ")(?!px)[a-z%]+$", "i"),
        Re = function (t) {
            var n = t.ownerDocument.defaultView;
            return n && n.opener || (n = e), n.getComputedStyle(t)
        },
        Me = function (e, t, n) {
            var r, i, o = {};
            for (i in t) o[i] = e.style[i], e.style[i] = t[i];
            for (i in r = n.call(e), t) e.style[i] = o[i];
            return r
        },
        Ie = new RegExp(te.join("|"), "i");

    function We(e, t, n) {
        var r, i, o, a, s = e.style;
        return (n = n || Re(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || re(e) || (a = b.style(e, t)), !d.pixelBoxStyles() && Pe.test(a) && Ie.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
    }

    function Fe(e, t) {
        return {
            get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    } ! function () {
        function t() {
            if (c) {
                l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ne.appendChild(l).appendChild(c);
                var t = e.getComputedStyle(c);
                r = "1%" !== t.top, u = 12 === n(t.marginLeft), c.style.right = "60%", a = 36 === n(t.right), i = 36 === n(t.width), c.style.position = "absolute", o = 12 === n(c.offsetWidth / 3), ne.removeChild(l), c = null
            }
        }

        function n(e) {
            return Math.round(parseFloat(e))
        }
        var r, i, o, a, s, u, l = v.createElement("div"),
            c = v.createElement("div");
        c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", d.clearCloneStyle = "content-box" === c.style.backgroundClip, b.extend(d, {
            boxSizingReliable: function () {
                return t(), i
            },
            pixelBoxStyles: function () {
                return t(), a
            },
            pixelPosition: function () {
                return t(), r
            },
            reliableMarginLeft: function () {
                return t(), u
            },
            scrollboxSize: function () {
                return t(), o
            },
            reliableTrDimensions: function () {
                var t, n, r, i;
                return null == s && (t = v.createElement("table"), n = v.createElement("tr"), r = v.createElement("div"), t.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", n.style.cssText = "border:1px solid", n.style.height = "1px", r.style.height = "9px", r.style.display = "block", ne.appendChild(t).appendChild(n).appendChild(r), i = e.getComputedStyle(n), s = parseInt(i.height, 10) + parseInt(i.borderTopWidth, 10) + parseInt(i.borderBottomWidth, 10) === n.offsetHeight, ne.removeChild(t)), s
            }
        }))
    }();
    var Be = ["Webkit", "Moz", "ms"],
        $e = v.createElement("div").style,
        _e = {};

    function ze(e) {
        var t = b.cssProps[e] || _e[e];
        return t || (e in $e ? e : _e[e] = function (e) {
            for (var t = e[0].toUpperCase() + e.slice(1), n = Be.length; n--;)
                if ((e = Be[n] + t) in $e) return e
        }(e) || e)
    }
    var Ue = /^(none|table(?!-c[ea]).+)/,
        Xe = /^--/,
        Ve = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ge = {
            letterSpacing: "0",
            fontWeight: "400"
        };

    function Ye(e, t, n) {
        var r = ee.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }

    function Qe(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0,
            s = 0,
            u = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2) "margin" === n && (u += b.css(e, n + te[a], !0, i)), r ? ("content" === n && (u -= b.css(e, "padding" + te[a], !0, i)), "margin" !== n && (u -= b.css(e, "border" + te[a] + "Width", !0, i))) : (u += b.css(e, "padding" + te[a], !0, i), "padding" !== n ? u += b.css(e, "border" + te[a] + "Width", !0, i) : s += b.css(e, "border" + te[a] + "Width", !0, i));
        return !r && o >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u
    }

    function Je(e, t, n) {
        var r = Re(e),
            i = (!d.boxSizingReliable() || n) && "border-box" === b.css(e, "boxSizing", !1, r),
            o = i,
            a = We(e, t, r),
            s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Pe.test(a)) {
            if (!n) return a;
            a = "auto"
        }
        return (!d.boxSizingReliable() && i || !d.reliableTrDimensions() && k(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === b.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === b.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + Qe(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
    }

    function Ke(e, t, n, r, i) {
        return new Ke.prototype.init(e, t, n, r, i)
    }
    b.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = We(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function (e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = U(t),
                    u = Xe.test(t),
                    l = e.style;
                if (u || (t = ze(s)), a = b.cssHooks[t] || b.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" === (o = typeof n) && (i = ee.exec(n)) && i[1] && (n = ae(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (b.cssNumber[s] ? "" : "px")), d.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function (e, t, n, r) {
            var i, o, a, s = U(t);
            return Xe.test(t) || (t = ze(s)), (a = b.cssHooks[t] || b.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = We(e, t, r)), "normal" === i && t in Ge && (i = Ge[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }), b.each(["height", "width"], function (e, t) {
        b.cssHooks[t] = {
            get: function (e, n, r) {
                if (n) return !Ue.test(b.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Je(e, t, r) : Me(e, Ve, function () {
                    return Je(e, t, r)
                })
            },
            set: function (e, n, r) {
                var i, o = Re(e),
                    a = !d.scrollboxSize() && "absolute" === o.position,
                    s = (a || r) && "border-box" === b.css(e, "boxSizing", !1, o),
                    u = r ? Qe(e, t, r, s, o) : 0;
                return s && a && (u -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Qe(e, t, "border", !1, o) - .5)), u && (i = ee.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = b.css(e, t)), Ye(0, n, u)
            }
        }
    }), b.cssHooks.marginLeft = Fe(d.reliableMarginLeft, function (e, t) {
        if (t) return (parseFloat(We(e, "marginLeft")) || e.getBoundingClientRect().left - Me(e, {
            marginLeft: 0
        }, function () {
            return e.getBoundingClientRect().left
        })) + "px"
    }), b.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (e, t) {
        b.cssHooks[e + t] = {
            expand: function (n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + te[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, "margin" !== e && (b.cssHooks[e + t].set = Ye)
    }), b.fn.extend({
        css: function (e, t) {
            return B(this, function (e, t, n) {
                var r, i, o = {},
                    a = 0;
                if (Array.isArray(t)) {
                    for (r = Re(e), i = t.length; a < i; a++) o[t[a]] = b.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? b.style(e, t, n) : b.css(e, t)
            }, e, t, arguments.length > 1)
        }
    }), b.Tween = Ke, Ke.prototype = {
        constructor: Ke,
        init: function (e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || b.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (b.cssNumber[n] ? "" : "px")
        },
        cur: function () {
            var e = Ke.propHooks[this.prop];
            return e && e.get ? e.get(this) : Ke.propHooks._default.get(this)
        },
        run: function (e) {
            var t, n = Ke.propHooks[this.prop];
            return this.options.duration ? this.pos = t = b.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Ke.propHooks._default.set(this), this
        }
    }, Ke.prototype.init.prototype = Ke.prototype, Ke.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = b.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function (e) {
                b.fx.step[e.prop] ? b.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !b.cssHooks[e.prop] && null == e.elem.style[ze(e.prop)] ? e.elem[e.prop] = e.now : b.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, Ke.propHooks.scrollTop = Ke.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, b.easing = {
        linear: function (e) {
            return e
        },
        swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, b.fx = Ke.prototype.init, b.fx.step = {};
    var Ze, et, tt = /^(?:toggle|show|hide)$/,
        nt = /queueHooks$/;

    function rt() {
        et && (!1 === v.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(rt) : e.setTimeout(rt, b.fx.interval), b.fx.tick())
    }

    function it() {
        return e.setTimeout(function () {
            Ze = void 0
        }), Ze = Date.now()
    }

    function ot(e, t) {
        var n, r = 0,
            i = {
                height: e
            };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = te[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function at(e, t, n) {
        for (var r, i = (st.tweeners[t] || []).concat(st.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function st(e, t, n) {
        var r, i, o = 0,
            a = st.prefilters.length,
            s = b.Deferred().always(function () {
                delete u.elem
            }),
            u = function () {
                if (i) return !1;
                for (var t = Ze || it(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++) l.tweens[o].run(r);
                return s.notifyWith(e, [l, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1)
            },
            l = s.promise({
                elem: e,
                props: b.extend({}, t),
                opts: b.extend(!0, {
                    specialEasing: {},
                    easing: b.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Ze || it(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                    var r = b.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                    return l.tweens.push(r), r
                },
                stop: function (t) {
                    var n = 0,
                        r = t ? l.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; n < r; n++) l.tweens[n].run(1);
                    return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this
                }
            }),
            c = l.props;
        for (! function (e, t) {
            var n, r, i, o, a;
            for (n in e)
                if (i = t[r = U(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = b.cssHooks[r]) && "expand" in a)
                    for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
                else t[r] = i
        }(c, l.opts.specialEasing); o < a; o++)
            if (r = st.prefilters[o].call(l, e, c, l.opts)) return h(r.stop) && (b._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), r;
        return b.map(c, at, l), h(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), b.fx.timer(b.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })), l
    }
    b.Animation = b.extend(st, {
        tweeners: {
            "*": [function (e, t) {
                var n = this.createTween(e, t);
                return ae(n.elem, e, ee.exec(t), n), n
            }]
        },
        tweener: function (e, t) {
            h(e) ? (t = e, e = ["*"]) : e = e.match(O);
            for (var n, r = 0, i = e.length; r < i; r++) n = e[r], st.tweeners[n] = st.tweeners[n] || [], st.tweeners[n].unshift(t)
        },
        prefilters: [function (e, t, n) {
            var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t,
                p = this,
                d = {},
                h = e.style,
                g = e.nodeType && oe(e),
                v = G.get(e, "fxshow");
            for (r in n.queue || (null == (a = b._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
                a.unqueued || s()
            }), a.unqueued++, p.always(function () {
                p.always(function () {
                    a.unqueued--, b.queue(e, "fx").length || a.empty.fire()
                })
            })), t)
                if (i = t[r], tt.test(i)) {
                    if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                        if ("show" !== i || !v || void 0 === v[r]) continue;
                        g = !0
                    }
                    d[r] = v && v[r] || b.style(e, r)
                } if ((u = !b.isEmptyObject(t)) || !b.isEmptyObject(d))
                for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = G.get(e, "display")), "none" === (c = b.css(e, "display")) && (l ? c = l : (le([e], !0), l = e.style.display || l, c = b.css(e, "display"), le([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === b.css(e, "float") && (u || (p.done(function () {
                    h.display = l
                }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
                    h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                })), u = !1, d) u || (v ? "hidden" in v && (g = v.hidden) : v = G.access(e, "fxshow", {
                    display: l
                }), o && (v.hidden = !g), g && le([e], !0), p.done(function () {
                    for (r in g || le([e]), G.remove(e, "fxshow"), d) b.style(e, r, d[r])
                })), u = at(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0))
        }],
        prefilter: function (e, t) {
            t ? st.prefilters.unshift(e) : st.prefilters.push(e)
        }
    }), b.speed = function (e, t, n) {
        var r = e && "object" == typeof e ? b.extend({}, e) : {
            complete: n || !n && t || h(e) && e,
            duration: e,
            easing: n && t || t && !h(t) && t
        };
        return b.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in b.fx.speeds ? r.duration = b.fx.speeds[r.duration] : r.duration = b.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
            h(r.old) && r.old.call(this), r.queue && b.dequeue(this, r.queue)
        }, r
    }, b.fn.extend({
        fadeTo: function (e, t, n, r) {
            return this.filter(oe).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function (e, t, n, r) {
            var i = b.isEmptyObject(e),
                o = b.speed(t, n, r),
                a = function () {
                    var t = st(this, b.extend({}, e), o);
                    (i || G.get(this, "finish")) && t.stop(!0)
                };
            return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function (e, t, n) {
            var r = function (e) {
                var t = e.stop;
                delete e.stop, t(n)
            };
            return "string" != typeof e && (n = t, t = e, e = void 0), t && this.queue(e || "fx", []), this.each(function () {
                var t = !0,
                    i = null != e && e + "queueHooks",
                    o = b.timers,
                    a = G.get(this);
                if (i) a[i] && a[i].stop && r(a[i]);
                else
                    for (i in a) a[i] && a[i].stop && nt.test(i) && r(a[i]);
                for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                !t && n || b.dequeue(this, e)
            })
        },
        finish: function (e) {
            return !1 !== e && (e = e || "fx"), this.each(function () {
                var t, n = G.get(this),
                    r = n[e + "queue"],
                    i = n[e + "queueHooks"],
                    o = b.timers,
                    a = r ? r.length : 0;
                for (n.finish = !0, b.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    }), b.each(["toggle", "show", "hide"], function (e, t) {
        var n = b.fn[t];
        b.fn[t] = function (e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ot(t, !0), e, r, i)
        }
    }), b.each({
        slideDown: ot("show"),
        slideUp: ot("hide"),
        slideToggle: ot("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (e, t) {
        b.fn[e] = function (e, n, r) {
            return this.animate(t, e, n, r)
        }
    }), b.timers = [], b.fx.tick = function () {
        var e, t = 0,
            n = b.timers;
        for (Ze = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || b.fx.stop(), Ze = void 0
    }, b.fx.timer = function (e) {
        b.timers.push(e), b.fx.start()
    }, b.fx.interval = 13, b.fx.start = function () {
        et || (et = !0, rt())
    }, b.fx.stop = function () {
        et = null
    }, b.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, b.fn.delay = function (t, n) {
        return t = b.fx && b.fx.speeds[t] || t, n = n || "fx", this.queue(n, function (n, r) {
            var i = e.setTimeout(n, t);
            r.stop = function () {
                e.clearTimeout(i)
            }
        })
    },
        function () {
            var e = v.createElement("input"),
                t = v.createElement("select").appendChild(v.createElement("option"));
            e.type = "checkbox", d.checkOn = "" !== e.value, d.optSelected = t.selected, (e = v.createElement("input")).value = "t", e.type = "radio", d.radioValue = "t" === e.value
        }();
    var ut, lt = b.expr.attrHandle;
    b.fn.extend({
        attr: function (e, t) {
            return B(this, b.attr, e, t, arguments.length > 1)
        },
        removeAttr: function (e) {
            return this.each(function () {
                b.removeAttr(this, e)
            })
        }
    }), b.extend({
        attr: function (e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? b.prop(e, t, n) : (1 === o && b.isXMLDoc(e) || (i = b.attrHooks[t.toLowerCase()] || (b.expr.match.bool.test(t) ? ut : void 0)), void 0 !== n ? null === n ? void b.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = b.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function (e, t) {
                    if (!d.radioValue && "radio" === t && k(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function (e, t) {
            var n, r = 0,
                i = t && t.match(O);
            if (i && 1 === e.nodeType)
                for (; n = i[r++];) e.removeAttribute(n)
        }
    }), ut = {
        set: function (e, t, n) {
            return !1 === t ? b.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, b.each(b.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var n = lt[t] || b.find.attr;
        lt[t] = function (e, t, r) {
            var i, o, a = t.toLowerCase();
            return r || (o = lt[a], lt[a] = i, i = null != n(e, t, r) ? a : null, lt[a] = o), i
        }
    });
    var ct = /^(?:input|select|textarea|button)$/i,
        ft = /^(?:a|area)$/i;

    function pt(e) {
        return (e.match(O) || []).join(" ")
    }

    function dt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function ht(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(O) || []
    }
    b.fn.extend({
        prop: function (e, t) {
            return B(this, b.prop, e, t, arguments.length > 1)
        },
        removeProp: function (e) {
            return this.each(function () {
                delete this[b.propFix[e] || e]
            })
        }
    }), b.extend({
        prop: function (e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && b.isXMLDoc(e) || (t = b.propFix[t] || t, i = b.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = b.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : ct.test(e.nodeName) || ft.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), d.optSelected || (b.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function (e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), b.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        b.propFix[this.toLowerCase()] = this
    }), b.fn.extend({
        addClass: function (e) {
            var t, n, r, i, o, a, s, u = 0;
            if (h(e)) return this.each(function (t) {
                b(this).addClass(e.call(this, t, dt(this)))
            });
            if ((t = ht(e)).length)
                for (; n = this[u++];)
                    if (i = dt(n), r = 1 === n.nodeType && " " + pt(i) + " ") {
                        for (a = 0; o = t[a++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (s = pt(r)) && n.setAttribute("class", s)
                    } return this
        },
        removeClass: function (e) {
            var t, n, r, i, o, a, s, u = 0;
            if (h(e)) return this.each(function (t) {
                b(this).removeClass(e.call(this, t, dt(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((t = ht(e)).length)
                for (; n = this[u++];)
                    if (i = dt(n), r = 1 === n.nodeType && " " + pt(i) + " ") {
                        for (a = 0; o = t[a++];)
                            for (; r.indexOf(" " + o + " ") > -1;) r = r.replace(" " + o + " ", " ");
                        i !== (s = pt(r)) && n.setAttribute("class", s)
                    } return this
        },
        toggleClass: function (e, t) {
            var n = typeof e,
                r = "string" === n || Array.isArray(e);
            return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : h(e) ? this.each(function (n) {
                b(this).toggleClass(e.call(this, n, dt(this), t), t)
            }) : this.each(function () {
                var t, i, o, a;
                if (r)
                    for (i = 0, o = b(this), a = ht(e); t = a[i++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                else void 0 !== e && "boolean" !== n || ((t = dt(this)) && G.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : G.get(this, "__className__") || ""))
            })
        },
        hasClass: function (e) {
            var t, n, r = 0;
            for (t = " " + e + " "; n = this[r++];)
                if (1 === n.nodeType && (" " + pt(dt(n)) + " ").indexOf(t) > -1) return !0;
            return !1
        }
    });
    var gt = /\r/g;
    b.fn.extend({
        val: function (e) {
            var t, n, r, i = this[0];
            return arguments.length ? (r = h(e), this.each(function (n) {
                var i;
                1 === this.nodeType && (null == (i = r ? e.call(this, n, b(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = b.map(i, function (e) {
                    return null == e ? "" : e + ""
                })), (t = b.valHooks[this.type] || b.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
            })) : i ? (t = b.valHooks[i.type] || b.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof (n = i.value) ? n.replace(gt, "") : null == n ? "" : n : void 0
        }
    }), b.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = b.find.attr(e, "value");
                    return null != t ? t : pt(b.text(e))
                }
            },
            select: {
                get: function (e) {
                    var t, n, r, i = e.options,
                        o = e.selectedIndex,
                        a = "select-one" === e.type,
                        s = a ? null : [],
                        u = a ? o + 1 : i.length;
                    for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                        if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !k(n.parentNode, "optgroup"))) {
                            if (t = b(n).val(), a) return t;
                            s.push(t)
                        } return s
                },
                set: function (e, t) {
                    for (var n, r, i = e.options, o = b.makeArray(t), a = i.length; a--;)((r = i[a]).selected = b.inArray(b.valHooks.option.get(r), o) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), b.each(["radio", "checkbox"], function () {
        b.valHooks[this] = {
            set: function (e, t) {
                if (Array.isArray(t)) return e.checked = b.inArray(b(e).val(), t) > -1
            }
        }, d.checkOn || (b.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), d.focusin = "onfocusin" in e;
    var vt = /^(?:focusinfocus|focusoutblur)$/,
        yt = function (e) {
            e.stopPropagation()
        };
    b.extend(b.event, {
        trigger: function (t, n, r, i) {
            var o, a, s, u, l, f, p, d, y = [r || v],
                m = c.call(t, "type") ? t.type : t,
                x = c.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = d = s = r = r || v, 3 !== r.nodeType && 8 !== r.nodeType && !vt.test(m + b.event.triggered) && (m.indexOf(".") > -1 && (x = m.split("."), m = x.shift(), x.sort()), l = m.indexOf(":") < 0 && "on" + m, (t = t[b.expando] ? t : new b.Event(m, "object" == typeof t && t)).isTrigger = i ? 2 : 3, t.namespace = x.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + x.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : b.makeArray(n, [t]), p = b.event.special[m] || {}, i || !p.trigger || !1 !== p.trigger.apply(r, n))) {
                if (!i && !p.noBubble && !g(r)) {
                    for (u = p.delegateType || m, vt.test(u + m) || (a = a.parentNode); a; a = a.parentNode) y.push(a), s = a;
                    s === (r.ownerDocument || v) && y.push(s.defaultView || s.parentWindow || e)
                }
                for (o = 0;
                    (a = y[o++]) && !t.isPropagationStopped();) d = a, t.type = o > 1 ? u : p.bindType || m, (f = (G.get(a, "events") || Object.create(null))[t.type] && G.get(a, "handle")) && f.apply(a, n), (f = l && a[l]) && f.apply && X(a) && (t.result = f.apply(a, n), !1 === t.result && t.preventDefault());
                return t.type = m, i || t.isDefaultPrevented() || p._default && !1 !== p._default.apply(y.pop(), n) || !X(r) || l && h(r[m]) && !g(r) && ((s = r[l]) && (r[l] = null), b.event.triggered = m, t.isPropagationStopped() && d.addEventListener(m, yt), r[m](), t.isPropagationStopped() && d.removeEventListener(m, yt), b.event.triggered = void 0, s && (r[l] = s)), t.result
            }
        },
        simulate: function (e, t, n) {
            var r = b.extend(new b.Event, n, {
                type: e,
                isSimulated: !0
            });
            b.event.trigger(r, null, t)
        }
    }), b.fn.extend({
        trigger: function (e, t) {
            return this.each(function () {
                b.event.trigger(e, t, this)
            })
        },
        triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return b.event.trigger(e, t, n, !0)
        }
    }), d.focusin || b.each({
        focus: "focusin",
        blur: "focusout"
    }, function (e, t) {
        var n = function (e) {
            b.event.simulate(t, e.target, b.event.fix(e))
        };
        b.event.special[t] = {
            setup: function () {
                var r = this.ownerDocument || this.document || this,
                    i = G.access(r, t);
                i || r.addEventListener(e, n, !0), G.access(r, t, (i || 0) + 1)
            },
            teardown: function () {
                var r = this.ownerDocument || this.document || this,
                    i = G.access(r, t) - 1;
                i ? G.access(r, t, i) : (r.removeEventListener(e, n, !0), G.remove(r, t))
            }
        }
    });
    var mt = e.location,
        xt = {
            guid: Date.now()
        },
        bt = /\?/;
    b.parseXML = function (t) {
        var n, r;
        if (!t || "string" != typeof t) return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (e) { }
        return r = n && n.getElementsByTagName("parsererror")[0], n && !r || b.error("Invalid XML: " + (r ? b.map(r.childNodes, function (e) {
            return e.textContent
        }).join("\n") : t)), n
    };
    var wt = /\[\]$/,
        Tt = /\r?\n/g,
        Ct = /^(?:submit|button|image|reset|file)$/i,
        Et = /^(?:input|select|textarea|keygen)/i;

    function St(e, t, n, r) {
        var i;
        if (Array.isArray(t)) b.each(t, function (t, i) {
            n || wt.test(e) ? r(e, i) : St(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
        });
        else if (n || "object" !== x(t)) r(e, t);
        else
            for (i in t) St(e + "[" + i + "]", t[i], n, r)
    }
    b.param = function (e, t) {
        var n, r = [],
            i = function (e, t) {
                var n = h(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (null == e) return "";
        if (Array.isArray(e) || e.jquery && !b.isPlainObject(e)) b.each(e, function () {
            i(this.name, this.value)
        });
        else
            for (n in e) St(n, e[n], t, i);
        return r.join("&")
    }, b.fn.extend({
        serialize: function () {
            return b.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var e = b.prop(this, "elements");
                return e ? b.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !b(this).is(":disabled") && Et.test(this.nodeName) && !Ct.test(e) && (this.checked || !pe.test(e))
            }).map(function (e, t) {
                var n = b(this).val();
                return null == n ? null : Array.isArray(n) ? b.map(n, function (e) {
                    return {
                        name: t.name,
                        value: e.replace(Tt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Tt, "\r\n")
                }
            }).get()
        }
    });
    var kt = /%20/g,
        At = /#.*$/,
        Nt = /([?&])_=[^&]*/,
        jt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Dt = /^(?:GET|HEAD)$/,
        qt = /^\/\//,
        Lt = {},
        Ht = {},
        Ot = "*/".concat("*"),
        Pt = v.createElement("a");

    function Rt(e) {
        return function (t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
                o = t.toLowerCase().match(O) || [];
            if (h(n))
                for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function Mt(e, t, n, r) {
        var i = {},
            o = e === Ht;

        function a(s) {
            var u;
            return i[s] = !0, b.each(e[s] || [], function (e, s) {
                var l = s(t, n, r);
                return "string" != typeof l || o || i[l] ? o ? !(u = l) : void 0 : (t.dataTypes.unshift(l), a(l), !1)
            }), u
        }
        return a(t.dataTypes[0]) || !i["*"] && a("*")
    }

    function It(e, t) {
        var n, r, i = b.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && b.extend(!0, e, r), e
    }
    Pt.href = mt.href, b.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: mt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(mt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Ot,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": b.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (e, t) {
            return t ? It(It(e, b.ajaxSettings), t) : It(b.ajaxSettings, e)
        },
        ajaxPrefilter: Rt(Lt),
        ajaxTransport: Rt(Ht),
        ajax: function (t, n) {
            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var r, i, o, a, s, u, l, c, f, p, d = b.ajaxSetup({}, n),
                h = d.context || d,
                g = d.context && (h.nodeType || h.jquery) ? b(h) : b.event,
                y = b.Deferred(),
                m = b.Callbacks("once memory"),
                x = d.statusCode || {},
                w = {},
                T = {},
                C = "canceled",
                E = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                        var t;
                        if (l) {
                            if (!a)
                                for (a = {}; t = jt.exec(o);) a[t[1].toLowerCase() + " "] = (a[t[1].toLowerCase() + " "] || []).concat(t[2]);
                            t = a[e.toLowerCase() + " "]
                        }
                        return null == t ? null : t.join(", ")
                    },
                    getAllResponseHeaders: function () {
                        return l ? o : null
                    },
                    setRequestHeader: function (e, t) {
                        return null == l && (e = T[e.toLowerCase()] = T[e.toLowerCase()] || e, w[e] = t), this
                    },
                    overrideMimeType: function (e) {
                        return null == l && (d.mimeType = e), this
                    },
                    statusCode: function (e) {
                        var t;
                        if (e)
                            if (l) E.always(e[E.status]);
                            else
                                for (t in e) x[t] = [x[t], e[t]];
                        return this
                    },
                    abort: function (e) {
                        var t = e || C;
                        return r && r.abort(t), S(0, t), this
                    }
                };
            if (y.promise(E), d.url = ((t || d.url || mt.href) + "").replace(qt, mt.protocol + "//"), d.type = n.method || n.type || d.method || d.type, d.dataTypes = (d.dataType || "*").toLowerCase().match(O) || [""], null == d.crossDomain) {
                u = v.createElement("a");
                try {
                    u.href = d.url, u.href = u.href, d.crossDomain = Pt.protocol + "//" + Pt.host != u.protocol + "//" + u.host
                } catch (e) {
                    d.crossDomain = !0
                }
            }
            if (d.data && d.processData && "string" != typeof d.data && (d.data = b.param(d.data, d.traditional)), Mt(Lt, d, n, E), l) return E;
            for (f in (c = b.event && d.global) && 0 == b.active++ && b.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !Dt.test(d.type), i = d.url.replace(At, ""), d.hasContent ? d.data && d.processData && 0 === (d.contentType || "").indexOf("application/x-www-form-urlencoded") && (d.data = d.data.replace(kt, "+")) : (p = d.url.slice(i.length), d.data && (d.processData || "string" == typeof d.data) && (i += (bt.test(i) ? "&" : "?") + d.data, delete d.data), !1 === d.cache && (i = i.replace(Nt, "$1"), p = (bt.test(i) ? "&" : "?") + "_=" + xt.guid++ + p), d.url = i + p), d.ifModified && (b.lastModified[i] && E.setRequestHeader("If-Modified-Since", b.lastModified[i]), b.etag[i] && E.setRequestHeader("If-None-Match", b.etag[i])), (d.data && d.hasContent && !1 !== d.contentType || n.contentType) && E.setRequestHeader("Content-Type", d.contentType), E.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Ot + "; q=0.01" : "") : d.accepts["*"]), d.headers) E.setRequestHeader(f, d.headers[f]);
            if (d.beforeSend && (!1 === d.beforeSend.call(h, E, d) || l)) return E.abort();
            if (C = "abort", m.add(d.complete), E.done(d.success), E.fail(d.error), r = Mt(Ht, d, n, E)) {
                if (E.readyState = 1, c && g.trigger("ajaxSend", [E, d]), l) return E;
                d.async && d.timeout > 0 && (s = e.setTimeout(function () {
                    E.abort("timeout")
                }, d.timeout));
                try {
                    l = !1, r.send(w, S)
                } catch (e) {
                    if (l) throw e;
                    S(-1, e)
                }
            } else S(-1, "No Transport");

            function S(t, n, a, u) {
                var f, p, v, w, T, C = n;
                l || (l = !0, s && e.clearTimeout(s), r = void 0, o = u || "", E.readyState = t > 0 ? 4 : 0, f = t >= 200 && t < 300 || 304 === t, a && (w = function (e, t, n) {
                    for (var r, i, o, a, s = e.contents, u = e.dataTypes;
                        "*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                        for (i in s)
                            if (s[i] && s[i].test(r)) {
                                u.unshift(i);
                                break
                            } if (u[0] in n) o = u[0];
                    else {
                        for (i in n) {
                            if (!u[0] || e.converters[i + " " + u[0]]) {
                                o = i;
                                break
                            }
                            a || (a = i)
                        }
                        o = o || a
                    }
                    if (o) return o !== u[0] && u.unshift(o), n[o]
                }(d, E, a)), !f && b.inArray("script", d.dataTypes) > -1 && b.inArray("json", d.dataTypes) < 0 && (d.converters["text script"] = function () { }), w = function (e, t, n, r) {
                    var i, o, a, s, u, l = {},
                        c = e.dataTypes.slice();
                    if (c[1])
                        for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                    for (o = c.shift(); o;)
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                            if ("*" === o) o = u;
                            else if ("*" !== u && u !== o) {
                                if (!(a = l[u + " " + o] || l["* " + o]))
                                    for (i in l)
                                        if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                            !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                                            break
                                        } if (!0 !== a)
                                    if (a && e.throws) t = a(t);
                                    else try {
                                        t = a(t)
                                    } catch (e) {
                                        return {
                                            state: "parsererror",
                                            error: a ? e : "No conversion from " + u + " to " + o
                                        }
                                    }
                            }
                    return {
                        state: "success",
                        data: t
                    }
                }(d, w, E, f), f ? (d.ifModified && ((T = E.getResponseHeader("Last-Modified")) && (b.lastModified[i] = T), (T = E.getResponseHeader("etag")) && (b.etag[i] = T)), 204 === t || "HEAD" === d.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = w.state, p = w.data, f = !(v = w.error))) : (v = C, !t && C || (C = "error", t < 0 && (t = 0))), E.status = t, E.statusText = (n || C) + "", f ? y.resolveWith(h, [p, C, E]) : y.rejectWith(h, [E, C, v]), E.statusCode(x), x = void 0, c && g.trigger(f ? "ajaxSuccess" : "ajaxError", [E, d, f ? p : v]), m.fireWith(h, [E, C]), c && (g.trigger("ajaxComplete", [E, d]), --b.active || b.event.trigger("ajaxStop")))
            }
            return E
        },
        getJSON: function (e, t, n) {
            return b.get(e, t, n, "json")
        },
        getScript: function (e, t) {
            return b.get(e, void 0, t, "script")
        }
    }), b.each(["get", "post"], function (e, t) {
        b[t] = function (e, n, r, i) {
            return h(n) && (i = i || r, r = n, n = void 0), b.ajax(b.extend({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            }, b.isPlainObject(e) && e))
        }
    }), b.ajaxPrefilter(function (e) {
        var t;
        for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
    }), b._evalUrl = function (e, t, n) {
        return b.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function () { }
            },
            dataFilter: function (e) {
                b.globalEval(e, t, n)
            }
        })
    }, b.fn.extend({
        wrapAll: function (e) {
            var t;
            return this[0] && (h(e) && (e = e.call(this[0])), t = b(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function (e) {
            return h(e) ? this.each(function (t) {
                b(this).wrapInner(e.call(this, t))
            }) : this.each(function () {
                var t = b(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function (e) {
            var t = h(e);
            return this.each(function (n) {
                b(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function (e) {
            return this.parent(e).not("body").each(function () {
                b(this).replaceWith(this.childNodes)
            }), this
        }
    }), b.expr.pseudos.hidden = function (e) {
        return !b.expr.pseudos.visible(e)
    }, b.expr.pseudos.visible = function (e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, b.ajaxSettings.xhr = function () {
        try {
            return new e.XMLHttpRequest
        } catch (e) { }
    };
    var Wt = {
        0: 200,
        1223: 204
    },
        Ft = b.ajaxSettings.xhr();
    d.cors = !!Ft && "withCredentials" in Ft, d.ajax = Ft = !!Ft, b.ajaxTransport(function (t) {
        var n, r;
        if (d.cors || Ft && !t.crossDomain) return {
            send: function (i, o) {
                var a, s = t.xhr();
                if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (a in t.xhrFields) s[a] = t.xhrFields[a];
                for (a in t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"), i) s.setRequestHeader(a, i[a]);
                n = function (e) {
                    return function () {
                        n && (n = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Wt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                            binary: s.response
                        } : {
                            text: s.responseText
                        }, s.getAllResponseHeaders()))
                    }
                }, s.onload = n(), r = s.onerror = s.ontimeout = n("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function () {
                    4 === s.readyState && e.setTimeout(function () {
                        n && r()
                    })
                }, n = n("abort");
                try {
                    s.send(t.hasContent && t.data || null)
                } catch (e) {
                    if (n) throw e
                }
            },
            abort: function () {
                n && n()
            }
        }
    }), b.ajaxPrefilter(function (e) {
        e.crossDomain && (e.contents.script = !1)
    }), b.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function (e) {
                return b.globalEval(e), e
            }
        }
    }), b.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), b.ajaxTransport("script", function (e) {
        var t, n;
        if (e.crossDomain || e.scriptAttrs) return {
            send: function (r, i) {
                t = b("<script>").attr(e.scriptAttrs || {}).prop({
                    charset: e.scriptCharset,
                    src: e.url
                }).on("load error", n = function (e) {
                    t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
                }), v.head.appendChild(t[0])
            },
            abort: function () {
                n && n()
            }
        }
    });
    var Bt, $t = [],
        _t = /(=)\?(?=&|$)|\?\?/;
    b.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = $t.pop() || b.expando + "_" + xt.guid++;
            return this[e] = !0, e
        }
    }), b.ajaxPrefilter("json jsonp", function (t, n, r) {
        var i, o, a, s = !1 !== t.jsonp && (_t.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && _t.test(t.data) && "data");
        if (s || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = h(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(_t, "$1" + i) : !1 !== t.jsonp && (t.url += (bt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function () {
            return a || b.error(i + " was not called"), a[0]
        }, t.dataTypes[0] = "json", o = e[i], e[i] = function () {
            a = arguments
        }, r.always(function () {
            void 0 === o ? b(e).removeProp(i) : e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, $t.push(i)), a && h(o) && o(a[0]), a = o = void 0
        }), "script"
    }), d.createHTMLDocument = ((Bt = v.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Bt.childNodes.length), b.parseHTML = function (e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (d.createHTMLDocument ? ((r = (t = v.implementation.createHTMLDocument("")).createElement("base")).href = v.location.href, t.head.appendChild(r)) : t = v), o = !n && [], (i = A.exec(e)) ? [t.createElement(i[1])] : (i = xe([e], t, o), o && o.length && b(o).remove(), b.merge([], i.childNodes)));
        var r, i, o
    }, b.fn.load = function (e, t, n) {
        var r, i, o, a = this,
            s = e.indexOf(" ");
        return s > -1 && (r = pt(e.slice(s)), e = e.slice(0, s)), h(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), a.length > 0 && b.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function (e) {
            o = arguments, a.html(r ? b("<div>").append(b.parseHTML(e)).find(r) : e)
        }).always(n && function (e, t) {
            a.each(function () {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, b.expr.pseudos.animated = function (e) {
        return b.grep(b.timers, function (t) {
            return e === t.elem
        }).length
    }, b.offset = {
        setOffset: function (e, t, n) {
            var r, i, o, a, s, u, l = b.css(e, "position"),
                c = b(e),
                f = {};
            "static" === l && (e.style.position = "relative"), s = c.offset(), o = b.css(e, "top"), u = b.css(e, "left"), ("absolute" === l || "fixed" === l) && (o + u).indexOf("auto") > -1 ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), h(t) && (t = t.call(e, n, b.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f)
        }
    }, b.fn.extend({
        offset: function (e) {
            if (arguments.length) return void 0 === e ? this : this.each(function (t) {
                b.offset.setOffset(this, e, t)
            });
            var t, n, r = this[0];
            return r ? r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                top: t.top + n.pageYOffset,
                left: t.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function () {
            if (this[0]) {
                var e, t, n, r = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === b.css(r, "position")) t = r.getBoundingClientRect();
                else {
                    for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === b.css(e, "position");) e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = b(e).offset()).top += b.css(e, "borderTopWidth", !0), i.left += b.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - i.top - b.css(r, "marginTop", !0),
                    left: t.left - i.left - b.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent; e && "static" === b.css(e, "position");) e = e.offsetParent;
                return e || ne
            })
        }
    }), b.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (e, t) {
        var n = "pageYOffset" === t;
        b.fn[e] = function (r) {
            return B(this, function (e, r, i) {
                var o;
                if (g(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i) return o ? o[t] : e[r];
                o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i
            }, e, r, arguments.length)
        }
    }), b.each(["top", "left"], function (e, t) {
        b.cssHooks[t] = Fe(d.pixelPosition, function (e, n) {
            if (n) return n = We(e, t), Pe.test(n) ? b(e).position()[t] + "px" : n
        })
    }), b.each({
        Height: "height",
        Width: "width"
    }, function (e, t) {
        b.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function (n, r) {
            b.fn[r] = function (i, o) {
                var a = arguments.length && (n || "boolean" != typeof i),
                    s = n || (!0 === i || !0 === o ? "margin" : "border");
                return B(this, function (t, n, i) {
                    var o;
                    return g(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? b.css(t, n, s) : b.style(t, n, i, s)
                }, t, a ? i : void 0, a)
            }
        })
    }), b.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        b.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), b.fn.extend({
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function (e, t) {
            return this.off(e, null, t)
        },
        delegate: function (e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), b.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
        b.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    });
    var zt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    b.proxy = function (e, t) {
        var n, r, o;
        if ("string" == typeof t && (n = e[t], t = e, e = n), h(e)) return r = i.call(arguments, 2), (o = function () {
            return e.apply(t || this, r.concat(i.call(arguments)))
        }).guid = e.guid = e.guid || b.guid++, o
    }, b.holdReady = function (e) {
        e ? b.readyWait++ : b.ready(!0)
    }, b.isArray = Array.isArray, b.parseJSON = JSON.parse, b.nodeName = k, b.isFunction = h, b.isWindow = g, b.camelCase = U, b.type = x, b.now = Date.now, b.isNumeric = function (e) {
        var t = b.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, b.trim = function (e) {
        return null == e ? "" : (e + "").replace(zt, "")
    }, "function" == typeof define && define.amd && define("jquery", [], function () {
        return b
    });
    var Ut = e.jQuery,
        Xt = e.$;
    return b.noConflict = function (t) {
        return e.$ === b && (e.$ = Xt), t && e.jQuery === b && (e.jQuery = Ut), b
    }, void 0 === t && (e.jQuery = e.$ = b), b
});

// bootstrap.bundle.js

! function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = e()
}(this, function () {
    "use strict";
    const t = "transitionend",
        e = t => {
            do {
                t += Math.floor(1e6 * Math.random())
            } while (document.getElementById(t));
            return t
        },
        i = t => {
            let e = t.getAttribute("data-bs-target");
            if (!e || "#" === e) {
                let i = t.getAttribute("href");
                if (!i || !i.includes("#") && !i.startsWith(".")) return null;
                i.includes("#") && !i.startsWith("#") && (i = `#${i.split("#")[1]}`), e = i && "#" !== i ? i.trim() : null
            }
            return e
        },
        n = t => {
            const e = i(t);
            return e && document.querySelector(e) ? e : null
        },
        s = t => {
            const e = i(t);
            return e ? document.querySelector(e) : null
        },
        o = t => {
            if (!t) return 0;
            let {
                transitionDuration: e,
                transitionDelay: i
            } = window.getComputedStyle(t);
            const n = Number.parseFloat(e),
                s = Number.parseFloat(i);
            return n || s ? (e = e.split(",")[0], i = i.split(",")[0], 1e3 * (Number.parseFloat(e) + Number.parseFloat(i))) : 0
        },
        r = e => {
            e.dispatchEvent(new Event(t))
        },
        a = t => (t[0] || t).nodeType,
        l = (e, i) => {
            let n = !1;
            const s = i + 5;
            e.addEventListener(t, function i() {
                n = !0, e.removeEventListener(t, i)
            }), setTimeout(() => {
                n || r(e)
            }, s)
        },
        c = (t, e, i) => {
            Object.keys(i).forEach(n => {
                const s = i[n],
                    o = e[n],
                    r = o && a(o) ? "element" : (t => null == t ? `${t}` : {}.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase())(o);
                if (!new RegExp(s).test(r)) throw new TypeError(`${t.toUpperCase()}: Option "${n}" provided type "${r}" but expected type "${s}".`)
            })
        },
        h = t => {
            if (!t) return !1;
            if (t.style && t.parentNode && t.parentNode.style) {
                const e = getComputedStyle(t),
                    i = getComputedStyle(t.parentNode);
                return "none" !== e.display && "none" !== i.display && "hidden" !== e.visibility
            }
            return !1
        },
        d = t => !t || t.nodeType !== Node.ELEMENT_NODE || (!!t.classList.contains("disabled") || (void 0 !== t.disabled ? t.disabled : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled"))),
        u = t => {
            if (!document.documentElement.attachShadow) return null;
            if ("function" == typeof t.getRootNode) {
                const e = t.getRootNode();
                return e instanceof ShadowRoot ? e : null
            }
            return t instanceof ShadowRoot ? t : t.parentNode ? u(t.parentNode) : null
        },
        f = () => { },
        p = t => t.offsetHeight,
        g = () => {
            const {
                jQuery: t
            } = window;
            return t && !document.body.hasAttribute("data-bs-no-jquery") ? t : null
        },
        m = () => "rtl" === document.documentElement.dir,
        _ = (t, e) => {
            (t => {
                "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", t) : t()
            })(() => {
                const i = g();
                if (i) {
                    const n = i.fn[t];
                    i.fn[t] = e.jQueryInterface, i.fn[t].Constructor = e, i.fn[t].noConflict = (() => (i.fn[t] = n, e.jQueryInterface))
                }
            })
        },
        v = t => {
            "function" == typeof t && t()
        },
        b = new Map;
    var y = {
        set(t, e, i) {
            b.has(t) || b.set(t, new Map);
            const n = b.get(t);
            n.has(e) || 0 === n.size ? n.set(e, i) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(n.keys())[0]}.`)
        },
        get: (t, e) => b.has(t) && b.get(t).get(e) || null,
        remove(t, e) {
            if (!b.has(t)) return;
            const i = b.get(t);
            i.delete(e), 0 === i.size && b.delete(t)
        }
    };
    const w = /[^.]*(?=\..*)\.|.*/,
        E = /\..*/,
        T = /::\d+$/,
        A = {};
    let L = 1;
    const O = {
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    },
        $ = /^(mouseenter|mouseleave)/i,
        D = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);

    function k(t, e) {
        return e && `${e}::${L++}` || t.uidEvent || L++
    }

    function x(t) {
        const e = k(t);
        return t.uidEvent = e, A[e] = A[e] || {}, A[e]
    }

    function C(t, e, i = null) {
        const n = Object.keys(t);
        for (let s = 0, o = n.length; s < o; s++) {
            const o = t[n[s]];
            if (o.originalHandler === e && o.delegationSelector === i) return o
        }
        return null
    }

    function S(t, e, i) {
        const n = "string" == typeof e,
            s = n ? i : e;
        let o = I(t);
        return D.has(o) || (o = t), [n, s, o]
    }

    function N(t, e, i, n, s) {
        if ("string" != typeof e || !t) return;
        if (i || (i = n, n = null), $.test(e)) {
            const t = t => (function (e) {
                if (!e.relatedTarget || e.relatedTarget !== e.delegateTarget && !e.delegateTarget.contains(e.relatedTarget)) return t.call(this, e)
            });
            n ? n = t(n) : i = t(i)
        }
        const [o, r, a] = S(e, i, n), l = x(t), c = l[a] || (l[a] = {}), h = C(c, r, o ? i : null);
        if (h) return void (h.oneOff = h.oneOff && s);
        const d = k(r, e.replace(w, "")),
            u = o ? function (t, e, i) {
                return function n(s) {
                    const o = t.querySelectorAll(e);
                    for (let {
                        target: r
                    } = s; r && r !== this; r = r.parentNode)
                        for (let a = o.length; a--;)
                            if (o[a] === r) return s.delegateTarget = r, n.oneOff && P.off(t, s.type, e, i), i.apply(r, [s]);
                    return null
                }
            }(t, i, n) : function (t, e) {
                return function i(n) {
                    return n.delegateTarget = t, i.oneOff && P.off(t, n.type, e), e.apply(t, [n])
                }
            }(t, i);
        u.delegationSelector = o ? i : null, u.originalHandler = r, u.oneOff = s, u.uidEvent = d, c[d] = u, t.addEventListener(a, u, o)
    }

    function j(t, e, i, n, s) {
        const o = C(e[i], n, s);
        o && (t.removeEventListener(i, o, Boolean(s)), delete e[i][o.uidEvent])
    }

    function I(t) {
        return t = t.replace(E, ""), O[t] || t
    }
    const P = {
        on(t, e, i, n) {
            N(t, e, i, n, !1)
        },
        one(t, e, i, n) {
            N(t, e, i, n, !0)
        },
        off(t, e, i, n) {
            if ("string" != typeof e || !t) return;
            const [s, o, r] = S(e, i, n), a = r !== e, l = x(t), c = e.startsWith(".");
            if (void 0 !== o) {
                if (!l || !l[r]) return;
                return void j(t, l, r, o, s ? i : null)
            }
            c && Object.keys(l).forEach(i => {
                ! function (t, e, i, n) {
                    const s = e[i] || {};
                    Object.keys(s).forEach(o => {
                        if (o.includes(n)) {
                            const n = s[o];
                            j(t, e, i, n.originalHandler, n.delegationSelector)
                        }
                    })
                }(t, l, i, e.slice(1))
            });
            const h = l[r] || {};
            Object.keys(h).forEach(i => {
                const n = i.replace(T, "");
                if (!a || e.includes(n)) {
                    const e = h[i];
                    j(t, l, r, e.originalHandler, e.delegationSelector)
                }
            })
        },
        trigger(t, e, i) {
            if ("string" != typeof e || !t) return null;
            const n = g(),
                s = I(e),
                o = e !== s,
                r = D.has(s);
            let a, l = !0,
                c = !0,
                h = !1,
                d = null;
            return o && n && (a = n.Event(e, i), n(t).trigger(a), l = !a.isPropagationStopped(), c = !a.isImmediatePropagationStopped(), h = a.isDefaultPrevented()), r ? (d = document.createEvent("HTMLEvents")).initEvent(s, l, !0) : d = new CustomEvent(e, {
                bubbles: l,
                cancelable: !0
            }), void 0 !== i && Object.keys(i).forEach(t => {
                Object.defineProperty(d, t, {
                    get: () => i[t]
                })
            }), h && d.preventDefault(), c && t.dispatchEvent(d), d.defaultPrevented && void 0 !== a && a.preventDefault(), d
        }
    },
        M = "5.0.0";
    class H {
        constructor(t) {
            (t = "string" == typeof t ? document.querySelector(t) : t) && (this._element = t, y.set(this._element, this.constructor.DATA_KEY, this))
        }
        dispose() {
            y.remove(this._element, this.constructor.DATA_KEY), P.off(this._element, `.${this.constructor.DATA_KEY}`), this._element = null
        }
        static getInstance(t) {
            return y.get(t, this.DATA_KEY)
        }
        static get VERSION() {
            return M
        }
    }
    const R = "bs.alert",
        B = `.${R}`,
        W = `close${B}`,
        z = `closed${B}`,
        U = `click${B}.data-api`,
        F = "alert",
        K = "fade",
        Y = "show";
    class q extends H {
        static get DATA_KEY() {
            return R
        }
        close(t) {
            const e = t ? this._getRootElement(t) : this._element,
                i = this._triggerCloseEvent(e);
            null === i || i.defaultPrevented || this._removeElement(e)
        }
        _getRootElement(t) {
            return s(t) || t.closest(`.${F}`)
        }
        _triggerCloseEvent(t) {
            return P.trigger(t, W)
        }
        _removeElement(t) {
            if (t.classList.remove(Y), !t.classList.contains(K)) return void this._destroyElement(t);
            const e = o(t);
            P.one(t, "transitionend", () => this._destroyElement(t)), l(t, e)
        }
        _destroyElement(t) {
            t.parentNode && t.parentNode.removeChild(t), P.trigger(t, z)
        }
        static jQueryInterface(t) {
            return this.each(function () {
                let e = y.get(this, R);
                e || (e = new q(this)), "close" === t && e[t](this)
            })
        }
        static handleDismiss(t) {
            return function (e) {
                e && e.preventDefault(), t.close(this)
            }
        }
    }
    P.on(document, U, '[data-bs-dismiss="alert"]', q.handleDismiss(new q)), _("alert", q);
    const V = "bs.button",
        X = "active",
        Q = `click${`.${V}`}.data-api`;
    class G extends H {
        static get DATA_KEY() {
            return V
        }
        toggle() {
            this._element.setAttribute("aria-pressed", this._element.classList.toggle(X))
        }
        static jQueryInterface(t) {
            return this.each(function () {
                let e = y.get(this, V);
                e || (e = new G(this)), "toggle" === t && e[t]()
            })
        }
    }

    function Z(t) {
        return "true" === t || "false" !== t && (t === Number(t).toString() ? Number(t) : "" === t || "null" === t ? null : t)
    }

    function J(t) {
        return t.replace(/[A-Z]/g, t => `-${t.toLowerCase()}`)
    }
    P.on(document, Q, '[data-bs-toggle="button"]', t => {
        t.preventDefault();
        const e = t.target.closest('[data-bs-toggle="button"]');
        let i = y.get(e, V);
        i || (i = new G(e)), i.toggle()
    }), _("button", G);
    const tt = {
        setDataAttribute(t, e, i) {
            t.setAttribute(`data-bs-${J(e)}`, i)
        },
        removeDataAttribute(t, e) {
            t.removeAttribute(`data-bs-${J(e)}`)
        },
        getDataAttributes(t) {
            if (!t) return {};
            const e = {};
            return Object.keys(t.dataset).filter(t => t.startsWith("bs")).forEach(i => {
                let n = i.replace(/^bs/, "");
                n = n.charAt(0).toLowerCase() + n.slice(1, n.length), e[n] = Z(t.dataset[i])
            }), e
        },
        getDataAttribute: (t, e) => Z(t.getAttribute(`data-bs-${J(e)}`)),
        offset(t) {
            const e = t.getBoundingClientRect();
            return {
                top: e.top + document.body.scrollTop,
                left: e.left + document.body.scrollLeft
            }
        },
        position: t => ({
            top: t.offsetTop,
            left: t.offsetLeft
        })
    },
        et = {
            find: (t, e = document.documentElement) => [].concat(...Element.prototype.querySelectorAll.call(e, t)),
            findOne: (t, e = document.documentElement) => Element.prototype.querySelector.call(e, t),
            children: (t, e) => [].concat(...t.children).filter(t => t.matches(e)),
            parents(t, e) {
                const i = [];
                let n = t.parentNode;
                for (; n && n.nodeType === Node.ELEMENT_NODE && 3 !== n.nodeType;) n.matches(e) && i.push(n), n = n.parentNode;
                return i
            },
            prev(t, e) {
                let i = t.previousElementSibling;
                for (; i;) {
                    if (i.matches(e)) return [i];
                    i = i.previousElementSibling
                }
                return []
            },
            next(t, e) {
                let i = t.nextElementSibling;
                for (; i;) {
                    if (i.matches(e)) return [i];
                    i = i.nextElementSibling
                }
                return []
            }
        },
        it = "carousel",
        nt = "bs.carousel",
        st = `.${nt}`,
        ot = "ArrowLeft",
        rt = "ArrowRight",
        at = 500,
        lt = 40,
        ct = {
            interval: 5e3,
            keyboard: !0,
            slide: !1,
            pause: "hover",
            wrap: !0,
            touch: !0
        },
        ht = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean",
            touch: "boolean"
        },
        dt = "next",
        ut = "prev",
        ft = "left",
        pt = "right",
        gt = `slide${st}`,
        mt = `slid${st}`,
        _t = `keydown${st}`,
        vt = `mouseenter${st}`,
        bt = `mouseleave${st}`,
        yt = `touchstart${st}`,
        wt = `touchmove${st}`,
        Et = `touchend${st}`,
        Tt = `pointerdown${st}`,
        At = `pointerup${st}`,
        Lt = `dragstart${st}`,
        Ot = `load${st}.data-api`,
        $t = `click${st}.data-api`,
        Dt = "carousel",
        kt = "active",
        xt = "slide",
        Ct = "carousel-item-end",
        St = "carousel-item-start",
        Nt = "carousel-item-next",
        jt = "carousel-item-prev",
        It = "pointer-event",
        Pt = ".active",
        Mt = ".active.carousel-item",
        Ht = ".carousel-item",
        Rt = ".carousel-item img",
        Bt = ".carousel-item-next, .carousel-item-prev",
        Wt = ".carousel-indicators",
        zt = "[data-bs-target]",
        Ut = "touch",
        Ft = "pen";
    class Kt extends H {
        constructor(t, e) {
            super(t), this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(e), this._indicatorsElement = et.findOne(Wt, this._element), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = Boolean(window.PointerEvent), this._addEventListeners()
        }
        static get Default() {
            return ct
        }
        static get DATA_KEY() {
            return nt
        }
        next() {
            this._isSliding || this._slide(dt)
        }
        nextWhenVisible() {
            !document.hidden && h(this._element) && this.next()
        }
        prev() {
            this._isSliding || this._slide(ut)
        }
        pause(t) {
            t || (this._isPaused = !0), et.findOne(Bt, this._element) && (r(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
        }
        cycle(t) {
            t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config && this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
        }
        to(t) {
            this._activeElement = et.findOne(Mt, this._element);
            const e = this._getItemIndex(this._activeElement);
            if (t > this._items.length - 1 || t < 0) return;
            if (this._isSliding) return void P.one(this._element, mt, () => this.to(t));
            if (e === t) return this.pause(), void this.cycle();
            const i = t > e ? dt : ut;
            this._slide(i, this._items[t])
        }
        dispose() {
            this._items = null, this._config = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null, super.dispose()
        }
        _getConfig(t) {
            return t = {
                ...ct,
                ...t
            }, c(it, t, ht), t
        }
        _handleSwipe() {
            const t = Math.abs(this.touchDeltaX);
            if (t <= lt) return;
            const e = t / this.touchDeltaX;
            this.touchDeltaX = 0, e && this._slide(e > 0 ? pt : ft)
        }
        _addEventListeners() {
            this._config.keyboard && P.on(this._element, _t, t => this._keydown(t)), "hover" === this._config.pause && (P.on(this._element, vt, t => this.pause(t)), P.on(this._element, bt, t => this.cycle(t))), this._config.touch && this._touchSupported && this._addTouchEventListeners()
        }
        _addTouchEventListeners() {
            const t = t => {
                !this._pointerEvent || t.pointerType !== Ft && t.pointerType !== Ut ? this._pointerEvent || (this.touchStartX = t.touches[0].clientX) : this.touchStartX = t.clientX
            },
                e = t => {
                    this.touchDeltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - this.touchStartX
                },
                i = t => {
                    !this._pointerEvent || t.pointerType !== Ft && t.pointerType !== Ut || (this.touchDeltaX = t.clientX - this.touchStartX), this._handleSwipe(), "hover" === this._config.pause && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout(t => this.cycle(t), at + this._config.interval))
                };
            et.find(Rt, this._element).forEach(t => {
                P.on(t, Lt, t => t.preventDefault())
            }), this._pointerEvent ? (P.on(this._element, Tt, e => t(e)), P.on(this._element, At, t => i(t)), this._element.classList.add(It)) : (P.on(this._element, yt, e => t(e)), P.on(this._element, wt, t => e(t)), P.on(this._element, Et, t => i(t)))
        }
        _keydown(t) {
            /input|textarea/i.test(t.target.tagName) || (t.key === ot ? (t.preventDefault(), this._slide(pt)) : t.key === rt && (t.preventDefault(), this._slide(ft)))
        }
        _getItemIndex(t) {
            return this._items = t && t.parentNode ? et.find(Ht, t.parentNode) : [], this._items.indexOf(t)
        }
        _getItemByOrder(t, e) {
            const i = t === dt,
                n = t === ut,
                s = this._getItemIndex(e),
                o = this._items.length - 1;
            if ((n && 0 === s || i && s === o) && !this._config.wrap) return e;
            const r = (s + (n ? -1 : 1)) % this._items.length;
            return -1 === r ? this._items[this._items.length - 1] : this._items[r]
        }
        _triggerSlideEvent(t, e) {
            const i = this._getItemIndex(t),
                n = this._getItemIndex(et.findOne(Mt, this._element));
            return P.trigger(this._element, gt, {
                relatedTarget: t,
                direction: e,
                from: n,
                to: i
            })
        }
        _setActiveIndicatorElement(t) {
            if (this._indicatorsElement) {
                const e = et.findOne(Pt, this._indicatorsElement);
                e.classList.remove(kt), e.removeAttribute("aria-current");
                const i = et.find(zt, this._indicatorsElement);
                for (let e = 0; e < i.length; e++)
                    if (Number.parseInt(i[e].getAttribute("data-bs-slide-to"), 10) === this._getItemIndex(t)) {
                        i[e].classList.add(kt), i[e].setAttribute("aria-current", "true");
                        break
                    }
            }
        }
        _updateInterval() {
            const t = this._activeElement || et.findOne(Mt, this._element);
            if (!t) return;
            const e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
            e ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = e) : this._config.interval = this._config.defaultInterval || this._config.interval
        }
        _slide(t, e) {
            const i = this._directionToOrder(t),
                n = et.findOne(Mt, this._element),
                s = this._getItemIndex(n),
                r = e || this._getItemByOrder(i, n),
                a = this._getItemIndex(r),
                c = Boolean(this._interval),
                h = i === dt,
                d = h ? St : Ct,
                u = h ? Nt : jt,
                f = this._orderToDirection(i);
            if (r && r.classList.contains(kt)) this._isSliding = !1;
            else if (!this._triggerSlideEvent(r, f).defaultPrevented && n && r) {
                if (this._isSliding = !0, c && this.pause(), this._setActiveIndicatorElement(r), this._activeElement = r, this._element.classList.contains(xt)) {
                    r.classList.add(u), p(r), n.classList.add(d), r.classList.add(d);
                    const t = o(n);
                    P.one(n, "transitionend", () => {
                        r.classList.remove(d, u), r.classList.add(kt), n.classList.remove(kt, u, d), this._isSliding = !1, setTimeout(() => {
                            P.trigger(this._element, mt, {
                                relatedTarget: r,
                                direction: f,
                                from: s,
                                to: a
                            })
                        }, 0)
                    }), l(n, t)
                } else n.classList.remove(kt), r.classList.add(kt), this._isSliding = !1, P.trigger(this._element, mt, {
                    relatedTarget: r,
                    direction: f,
                    from: s,
                    to: a
                });
                c && this.cycle()
            }
        }
        _directionToOrder(t) {
            return [pt, ft].includes(t) ? m() ? t === ft ? ut : dt : t === ft ? dt : ut : t
        }
        _orderToDirection(t) {
            return [dt, ut].includes(t) ? m() ? t === ut ? ft : pt : t === ut ? pt : ft : t
        }
        static carouselInterface(t, e) {
            let i = y.get(t, nt),
                n = {
                    ...ct,
                    ...tt.getDataAttributes(t)
                };
            "object" == typeof e && (n = {
                ...n,
                ...e
            });
            const s = "string" == typeof e ? e : n.slide;
            if (i || (i = new Kt(t, n)), "number" == typeof e) i.to(e);
            else if ("string" == typeof s) {
                if (void 0 === i[s]) throw new TypeError(`No method named "${s}"`);
                i[s]()
            } else n.interval && n.ride && (i.pause(), i.cycle())
        }
        static jQueryInterface(t) {
            return this.each(function () {
                Kt.carouselInterface(this, t)
            })
        }
        static dataApiClickHandler(t) {
            const e = s(this);
            if (!e || !e.classList.contains(Dt)) return;
            const i = {
                ...tt.getDataAttributes(e),
                ...tt.getDataAttributes(this)
            },
                n = this.getAttribute("data-bs-slide-to");
            n && (i.interval = !1), Kt.carouselInterface(e, i), n && y.get(e, nt).to(n), t.preventDefault()
        }
    }
    P.on(document, $t, "[data-bs-slide], [data-bs-slide-to]", Kt.dataApiClickHandler), P.on(window, Ot, () => {
        const t = et.find('[data-bs-ride="carousel"]');
        for (let e = 0, i = t.length; e < i; e++) Kt.carouselInterface(t[e], y.get(t[e], nt))
    }), _(it, Kt);
    const Yt = "collapse",
        qt = "bs.collapse",
        Vt = `.${qt}`,
        Xt = {
            toggle: !0,
            parent: ""
        },
        Qt = {
            toggle: "boolean",
            parent: "(string|element)"
        },
        Gt = `show${Vt}`,
        Zt = `shown${Vt}`,
        Jt = `hide${Vt}`,
        te = `hidden${Vt}`,
        ee = `click${Vt}.data-api`,
        ie = "show",
        ne = "collapse",
        se = "collapsing",
        oe = "collapsed",
        re = "width",
        ae = "height",
        le = ".show, .collapsing",
        ce = '[data-bs-toggle="collapse"]';
    class he extends H {
        constructor(t, e) {
            super(t), this._isTransitioning = !1, this._config = this._getConfig(e), this._triggerArray = et.find(`${ce}[href="#${this._element.id}"],` + `${ce}[data-bs-target="#${this._element.id}"]`);
            const i = et.find(ce);
            for (let t = 0, e = i.length; t < e; t++) {
                const e = i[t],
                    s = n(e),
                    o = et.find(s).filter(t => t === this._element);
                null !== s && o.length && (this._selector = s, this._triggerArray.push(e))
            }
            this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
        }
        static get Default() {
            return Xt
        }
        static get DATA_KEY() {
            return qt
        }
        toggle() {
            this._element.classList.contains(ie) ? this.hide() : this.show()
        }
        show() {
            if (this._isTransitioning || this._element.classList.contains(ie)) return;
            let t, e;
            this._parent && 0 === (t = et.find(le, this._parent).filter(t => "string" == typeof this._config.parent ? t.getAttribute("data-bs-parent") === this._config.parent : t.classList.contains(ne))).length && (t = null);
            const i = et.findOne(this._selector);
            if (t) {
                const n = t.find(t => i !== t);
                if ((e = n ? y.get(n, qt) : null) && e._isTransitioning) return
            }
            if (P.trigger(this._element, Gt).defaultPrevented) return;
            t && t.forEach(t => {
                i !== t && he.collapseInterface(t, "hide"), e || y.set(t, qt, null)
            });
            const n = this._getDimension();
            this._element.classList.remove(ne), this._element.classList.add(se), this._element.style[n] = 0, this._triggerArray.length && this._triggerArray.forEach(t => {
                t.classList.remove(oe), t.setAttribute("aria-expanded", !0)
            }), this.setTransitioning(!0);
            const s = `scroll${n[0].toUpperCase() + n.slice(1)}`,
                r = o(this._element);
            P.one(this._element, "transitionend", () => {
                this._element.classList.remove(se), this._element.classList.add(ne, ie), this._element.style[n] = "", this.setTransitioning(!1), P.trigger(this._element, Zt)
            }), l(this._element, r), this._element.style[n] = `${this._element[s]}px`
        }
        hide() {
            if (this._isTransitioning || !this._element.classList.contains(ie)) return;
            if (P.trigger(this._element, Jt).defaultPrevented) return;
            const t = this._getDimension();
            this._element.style[t] = `${this._element.getBoundingClientRect()[t]}px`, p(this._element), this._element.classList.add(se), this._element.classList.remove(ne, ie);
            const e = this._triggerArray.length;
            if (e > 0)
                for (let t = 0; t < e; t++) {
                    const e = this._triggerArray[t],
                        i = s(e);
                    i && !i.classList.contains(ie) && (e.classList.add(oe), e.setAttribute("aria-expanded", !1))
                }
            this.setTransitioning(!0);
            this._element.style[t] = "";
            const i = o(this._element);
            P.one(this._element, "transitionend", () => {
                this.setTransitioning(!1), this._element.classList.remove(se), this._element.classList.add(ne), P.trigger(this._element, te)
            }), l(this._element, i)
        }
        setTransitioning(t) {
            this._isTransitioning = t
        }
        dispose() {
            super.dispose(), this._config = null, this._parent = null, this._triggerArray = null, this._isTransitioning = null
        }
        _getConfig(t) {
            return (t = {
                ...Xt,
                ...t
            }).toggle = Boolean(t.toggle), c(Yt, t, Qt), t
        }
        _getDimension() {
            return this._element.classList.contains(re) ? re : ae
        }
        _getParent() {
            let {
                parent: t
            } = this._config;
            a(t) ? void 0 === t.jquery && void 0 === t[0] || (t = t[0]) : t = et.findOne(t);
            const e = `${ce}[data-bs-parent="${t}"]`;
            return et.find(e, t).forEach(t => {
                const e = s(t);
                this._addAriaAndCollapsedClass(e, [t])
            }), t
        }
        _addAriaAndCollapsedClass(t, e) {
            if (!t || !e.length) return;
            const i = t.classList.contains(ie);
            e.forEach(t => {
                i ? t.classList.remove(oe) : t.classList.add(oe), t.setAttribute("aria-expanded", i)
            })
        }
        static collapseInterface(t, e) {
            let i = y.get(t, qt);
            const n = {
                ...Xt,
                ...tt.getDataAttributes(t),
                ..."object" == typeof e && e ? e : {}
            };
            if (!i && n.toggle && "string" == typeof e && /show|hide/.test(e) && (n.toggle = !1), i || (i = new he(t, n)), "string" == typeof e) {
                if (void 0 === i[e]) throw new TypeError(`No method named "${e}"`);
                i[e]()
            }
        }
        static jQueryInterface(t) {
            return this.each(function () {
                he.collapseInterface(this, t)
            })
        }
    }
    P.on(document, ee, ce, function (t) {
        ("A" === t.target.tagName || t.delegateTarget && "A" === t.delegateTarget.tagName) && t.preventDefault();
        const e = tt.getDataAttributes(this),
            i = n(this);
        et.find(i).forEach(t => {
            const i = y.get(t, qt);
            let n;
            i ? (null === i._parent && "string" == typeof e.parent && (i._config.parent = e.parent, i._parent = i._getParent()), n = "toggle") : n = e, he.collapseInterface(t, n)
        })
    }), _(Yt, he);
    var de = "top",
        ue = "bottom",
        fe = "right",
        pe = "left",
        ge = "auto",
        me = [de, ue, fe, pe],
        _e = "start",
        ve = "end",
        be = "clippingParents",
        ye = "viewport",
        we = "popper",
        Ee = "reference",
        Te = me.reduce(function (t, e) {
            return t.concat([e + "-" + _e, e + "-" + ve])
        }, []),
        Ae = [].concat(me, [ge]).reduce(function (t, e) {
            return t.concat([e, e + "-" + _e, e + "-" + ve])
        }, []),
        Le = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];

    function Oe(t) {
        return t ? (t.nodeName || "").toLowerCase() : null
    }

    function $e(t) {
        if (null == t) return window;
        if ("[object Window]" !== t.toString()) {
            var e = t.ownerDocument;
            return e && e.defaultView || window
        }
        return t
    }

    function De(t) {
        return t instanceof $e(t).Element || t instanceof Element
    }

    function ke(t) {
        return t instanceof $e(t).HTMLElement || t instanceof HTMLElement
    }

    function xe(t) {
        return "undefined" != typeof ShadowRoot && (t instanceof $e(t).ShadowRoot || t instanceof ShadowRoot)
    }
    var Ce = {
        name: "applyStyles",
        enabled: !0,
        phase: "write",
        fn: function (t) {
            var e = t.state;
            Object.keys(e.elements).forEach(function (t) {
                var i = e.styles[t] || {},
                    n = e.attributes[t] || {},
                    s = e.elements[t];
                ke(s) && Oe(s) && (Object.assign(s.style, i), Object.keys(n).forEach(function (t) {
                    var e = n[t];
                    !1 === e ? s.removeAttribute(t) : s.setAttribute(t, !0 === e ? "" : e)
                }))
            })
        },
        effect: function (t) {
            var e = t.state,
                i = {
                    popper: {
                        position: e.options.strategy,
                        left: "0",
                        top: "0",
                        margin: "0"
                    },
                    arrow: {
                        position: "absolute"
                    },
                    reference: {}
                };
            return Object.assign(e.elements.popper.style, i.popper), e.styles = i, e.elements.arrow && Object.assign(e.elements.arrow.style, i.arrow),
                function () {
                    Object.keys(e.elements).forEach(function (t) {
                        var n = e.elements[t],
                            s = e.attributes[t] || {},
                            o = Object.keys(e.styles.hasOwnProperty(t) ? e.styles[t] : i[t]).reduce(function (t, e) {
                                return t[e] = "", t
                            }, {});
                        ke(n) && Oe(n) && (Object.assign(n.style, o), Object.keys(s).forEach(function (t) {
                            n.removeAttribute(t)
                        }))
                    })
                }
        },
        requires: ["computeStyles"]
    };

    function Se(t) {
        return t.split("-")[0]
    }

    function Ne(t) {
        var e = t.getBoundingClientRect();
        return {
            width: e.width,
            height: e.height,
            top: e.top,
            right: e.right,
            bottom: e.bottom,
            left: e.left,
            x: e.left,
            y: e.top
        }
    }

    function je(t) {
        var e = Ne(t),
            i = t.offsetWidth,
            n = t.offsetHeight;
        return Math.abs(e.width - i) <= 1 && (i = e.width), Math.abs(e.height - n) <= 1 && (n = e.height), {
            x: t.offsetLeft,
            y: t.offsetTop,
            width: i,
            height: n
        }
    }

    function Ie(t, e) {
        var i = e.getRootNode && e.getRootNode();
        if (t.contains(e)) return !0;
        if (i && xe(i)) {
            var n = e;
            do {
                if (n && t.isSameNode(n)) return !0;
                n = n.parentNode || n.host
            } while (n)
        }
        return !1
    }

    function Pe(t) {
        return $e(t).getComputedStyle(t)
    }

    function Me(t) {
        return ["table", "td", "th"].indexOf(Oe(t)) >= 0
    }

    function He(t) {
        return ((De(t) ? t.ownerDocument : t.document) || window.document).documentElement
    }

    function Re(t) {
        return "html" === Oe(t) ? t : t.assignedSlot || t.parentNode || (xe(t) ? t.host : null) || He(t)
    }

    function Be(t) {
        return ke(t) && "fixed" !== Pe(t).position ? t.offsetParent : null
    }

    function We(t) {
        for (var e = $e(t), i = Be(t); i && Me(i) && "static" === Pe(i).position;) i = Be(i);
        return i && ("html" === Oe(i) || "body" === Oe(i) && "static" === Pe(i).position) ? e : i || function (t) {
            var e = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
            if (-1 !== navigator.userAgent.indexOf("Trident") && ke(t) && "fixed" === Pe(t).position) return null;
            for (var i = Re(t); ke(i) && ["html", "body"].indexOf(Oe(i)) < 0;) {
                var n = Pe(i);
                if ("none" !== n.transform || "none" !== n.perspective || "paint" === n.contain || -1 !== ["transform", "perspective"].indexOf(n.willChange) || e && "filter" === n.willChange || e && n.filter && "none" !== n.filter) return i;
                i = i.parentNode
            }
            return null
        }(t) || e
    }

    function ze(t) {
        return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y"
    }
    var Ue = Math.max,
        Fe = Math.min,
        Ke = Math.round;

    function Ye(t, e, i) {
        return Ue(t, Fe(e, i))
    }

    function qe(t) {
        return Object.assign({}, {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }, t)
    }

    function Ve(t, e) {
        return e.reduce(function (e, i) {
            return e[i] = t, e
        }, {})
    }
    var Xe = function (t, e) {
        return qe("number" != typeof (t = "function" == typeof t ? t(Object.assign({}, e.rects, {
            placement: e.placement
        })) : t) ? t : Ve(t, me))
    };
    var Qe = {
        name: "arrow",
        enabled: !0,
        phase: "main",
        fn: function (t) {
            var e, i = t.state,
                n = t.name,
                s = t.options,
                o = i.elements.arrow,
                r = i.modifiersData.popperOffsets,
                a = Se(i.placement),
                l = ze(a),
                c = [pe, fe].indexOf(a) >= 0 ? "height" : "width";
            if (o && r) {
                var h = Xe(s.padding, i),
                    d = je(o),
                    u = "y" === l ? de : pe,
                    f = "y" === l ? ue : fe,
                    p = i.rects.reference[c] + i.rects.reference[l] - r[l] - i.rects.popper[c],
                    g = r[l] - i.rects.reference[l],
                    m = We(o),
                    _ = m ? "y" === l ? m.clientHeight || 0 : m.clientWidth || 0 : 0,
                    v = p / 2 - g / 2,
                    b = h[u],
                    y = _ - d[c] - h[f],
                    w = _ / 2 - d[c] / 2 + v,
                    E = Ye(b, w, y),
                    T = l;
                i.modifiersData[n] = ((e = {})[T] = E, e.centerOffset = E - w, e)
            }
        },
        effect: function (t) {
            var e = t.state,
                i = t.options.element,
                n = void 0 === i ? "[data-popper-arrow]" : i;
            null != n && ("string" != typeof n || (n = e.elements.popper.querySelector(n))) && Ie(e.elements.popper, n) && (e.elements.arrow = n)
        },
        requires: ["popperOffsets"],
        requiresIfExists: ["preventOverflow"]
    },
        Ge = {
            top: "auto",
            right: "auto",
            bottom: "auto",
            left: "auto"
        };

    function Ze(t) {
        var e, i = t.popper,
            n = t.popperRect,
            s = t.placement,
            o = t.offsets,
            r = t.position,
            a = t.gpuAcceleration,
            l = t.adaptive,
            c = t.roundOffsets,
            h = !0 === c ? function (t) {
                var e = t.x,
                    i = t.y,
                    n = window.devicePixelRatio || 1;
                return {
                    x: Ke(Ke(e * n) / n) || 0,
                    y: Ke(Ke(i * n) / n) || 0
                }
            }(o) : "function" == typeof c ? c(o) : o,
            d = h.x,
            u = void 0 === d ? 0 : d,
            f = h.y,
            p = void 0 === f ? 0 : f,
            g = o.hasOwnProperty("x"),
            m = o.hasOwnProperty("y"),
            _ = pe,
            v = de,
            b = window;
        if (l) {
            var y = We(i),
                w = "clientHeight",
                E = "clientWidth";
            y === $e(i) && "static" !== Pe(y = He(i)).position && (w = "scrollHeight", E = "scrollWidth"), y = y, s === de && (v = ue, p -= y[w] - n.height, p *= a ? 1 : -1), s === pe && (_ = fe, u -= y[E] - n.width, u *= a ? 1 : -1)
        }
        var T, A = Object.assign({
            position: r
        }, l && Ge);
        return a ? Object.assign({}, A, ((T = {})[v] = m ? "0" : "", T[_] = g ? "0" : "", T.transform = (b.devicePixelRatio || 1) < 2 ? "translate(" + u + "px, " + p + "px)" : "translate3d(" + u + "px, " + p + "px, 0)", T)) : Object.assign({}, A, ((e = {})[v] = m ? p + "px" : "", e[_] = g ? u + "px" : "", e.transform = "", e))
    }
    var Je = {
        name: "computeStyles",
        enabled: !0,
        phase: "beforeWrite",
        fn: function (t) {
            var e = t.state,
                i = t.options,
                n = i.gpuAcceleration,
                s = void 0 === n || n,
                o = i.adaptive,
                r = void 0 === o || o,
                a = i.roundOffsets,
                l = void 0 === a || a,
                c = {
                    placement: Se(e.placement),
                    popper: e.elements.popper,
                    popperRect: e.rects.popper,
                    gpuAcceleration: s
                };
            null != e.modifiersData.popperOffsets && (e.styles.popper = Object.assign({}, e.styles.popper, Ze(Object.assign({}, c, {
                offsets: e.modifiersData.popperOffsets,
                position: e.options.strategy,
                adaptive: r,
                roundOffsets: l
            })))), null != e.modifiersData.arrow && (e.styles.arrow = Object.assign({}, e.styles.arrow, Ze(Object.assign({}, c, {
                offsets: e.modifiersData.arrow,
                position: "absolute",
                adaptive: !1,
                roundOffsets: l
            })))), e.attributes.popper = Object.assign({}, e.attributes.popper, {
                "data-popper-placement": e.placement
            })
        },
        data: {}
    },
        ti = {
            passive: !0
        };
    var ei = {
        name: "eventListeners",
        enabled: !0,
        phase: "write",
        fn: function () { },
        effect: function (t) {
            var e = t.state,
                i = t.instance,
                n = t.options,
                s = n.scroll,
                o = void 0 === s || s,
                r = n.resize,
                a = void 0 === r || r,
                l = $e(e.elements.popper),
                c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
            return o && c.forEach(function (t) {
                t.addEventListener("scroll", i.update, ti)
            }), a && l.addEventListener("resize", i.update, ti),
                function () {
                    o && c.forEach(function (t) {
                        t.removeEventListener("scroll", i.update, ti)
                    }), a && l.removeEventListener("resize", i.update, ti)
                }
        },
        data: {}
    },
        ii = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        };

    function ni(t) {
        return t.replace(/left|right|bottom|top/g, function (t) {
            return ii[t]
        })
    }
    var si = {
        start: "end",
        end: "start"
    };

    function oi(t) {
        return t.replace(/start|end/g, function (t) {
            return si[t]
        })
    }

    function ri(t) {
        var e = $e(t);
        return {
            scrollLeft: e.pageXOffset,
            scrollTop: e.pageYOffset
        }
    }

    function ai(t) {
        return Ne(He(t)).left + ri(t).scrollLeft
    }

    function li(t) {
        var e = Pe(t),
            i = e.overflow,
            n = e.overflowX,
            s = e.overflowY;
        return /auto|scroll|overlay|hidden/.test(i + s + n)
    }

    function ci(t, e) {
        var i;
        void 0 === e && (e = []);
        var n = function t(e) {
            return ["html", "body", "#document"].indexOf(Oe(e)) >= 0 ? e.ownerDocument.body : ke(e) && li(e) ? e : t(Re(e))
        }(t),
            s = n === (null == (i = t.ownerDocument) ? void 0 : i.body),
            o = $e(n),
            r = s ? [o].concat(o.visualViewport || [], li(n) ? n : []) : n,
            a = e.concat(r);
        return s ? a : a.concat(ci(Re(r)))
    }

    function hi(t) {
        return Object.assign({}, t, {
            left: t.x,
            top: t.y,
            right: t.x + t.width,
            bottom: t.y + t.height
        })
    }

    function di(t, e) {
        return e === ye ? hi(function (t) {
            var e = $e(t),
                i = He(t),
                n = e.visualViewport,
                s = i.clientWidth,
                o = i.clientHeight,
                r = 0,
                a = 0;
            return n && (s = n.width, o = n.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (r = n.offsetLeft, a = n.offsetTop)), {
                width: s,
                height: o,
                x: r + ai(t),
                y: a
            }
        }(t)) : ke(e) ? function (t) {
            var e = Ne(t);
            return e.top = e.top + t.clientTop, e.left = e.left + t.clientLeft, e.bottom = e.top + t.clientHeight, e.right = e.left + t.clientWidth, e.width = t.clientWidth, e.height = t.clientHeight, e.x = e.left, e.y = e.top, e
        }(e) : hi(function (t) {
            var e, i = He(t),
                n = ri(t),
                s = null == (e = t.ownerDocument) ? void 0 : e.body,
                o = Ue(i.scrollWidth, i.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0),
                r = Ue(i.scrollHeight, i.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0),
                a = -n.scrollLeft + ai(t),
                l = -n.scrollTop;
            return "rtl" === Pe(s || i).direction && (a += Ue(i.clientWidth, s ? s.clientWidth : 0) - o), {
                width: o,
                height: r,
                x: a,
                y: l
            }
        }(He(t)))
    }

    function ui(t, e, i) {
        var n = "clippingParents" === e ? function (t) {
            var e = ci(Re(t)),
                i = ["absolute", "fixed"].indexOf(Pe(t).position) >= 0 && ke(t) ? We(t) : t;
            return De(i) ? e.filter(function (t) {
                return De(t) && Ie(t, i) && "body" !== Oe(t)
            }) : []
        }(t) : [].concat(e),
            s = [].concat(n, [i]),
            o = s[0],
            r = s.reduce(function (e, i) {
                var n = di(t, i);
                return e.top = Ue(n.top, e.top), e.right = Fe(n.right, e.right), e.bottom = Fe(n.bottom, e.bottom), e.left = Ue(n.left, e.left), e
            }, di(t, o));
        return r.width = r.right - r.left, r.height = r.bottom - r.top, r.x = r.left, r.y = r.top, r
    }

    function fi(t) {
        return t.split("-")[1]
    }

    function pi(t) {
        var e, i = t.reference,
            n = t.element,
            s = t.placement,
            o = s ? Se(s) : null,
            r = s ? fi(s) : null,
            a = i.x + i.width / 2 - n.width / 2,
            l = i.y + i.height / 2 - n.height / 2;
        switch (o) {
            case de:
                e = {
                    x: a,
                    y: i.y - n.height
                };
                break;
            case ue:
                e = {
                    x: a,
                    y: i.y + i.height
                };
                break;
            case fe:
                e = {
                    x: i.x + i.width,
                    y: l
                };
                break;
            case pe:
                e = {
                    x: i.x - n.width,
                    y: l
                };
                break;
            default:
                e = {
                    x: i.x,
                    y: i.y
                }
        }
        var c = o ? ze(o) : null;
        if (null != c) {
            var h = "y" === c ? "height" : "width";
            switch (r) {
                case _e:
                    e[c] = e[c] - (i[h] / 2 - n[h] / 2);
                    break;
                case ve:
                    e[c] = e[c] + (i[h] / 2 - n[h] / 2)
            }
        }
        return e
    }

    function gi(t, e) {
        void 0 === e && (e = {});
        var i = e,
            n = i.placement,
            s = void 0 === n ? t.placement : n,
            o = i.boundary,
            r = void 0 === o ? be : o,
            a = i.rootBoundary,
            l = void 0 === a ? ye : a,
            c = i.elementContext,
            h = void 0 === c ? we : c,
            d = i.altBoundary,
            u = void 0 !== d && d,
            f = i.padding,
            p = void 0 === f ? 0 : f,
            g = qe("number" != typeof p ? p : Ve(p, me)),
            m = h === we ? Ee : we,
            _ = t.elements.reference,
            v = t.rects.popper,
            b = t.elements[u ? m : h],
            y = ui(De(b) ? b : b.contextElement || He(t.elements.popper), r, l),
            w = Ne(_),
            E = pi({
                reference: w,
                element: v,
                strategy: "absolute",
                placement: s
            }),
            T = hi(Object.assign({}, v, E)),
            A = h === we ? T : w,
            L = {
                top: y.top - A.top + g.top,
                bottom: A.bottom - y.bottom + g.bottom,
                left: y.left - A.left + g.left,
                right: A.right - y.right + g.right
            },
            O = t.modifiersData.offset;
        if (h === we && O) {
            var $ = O[s];
            Object.keys(L).forEach(function (t) {
                var e = [fe, ue].indexOf(t) >= 0 ? 1 : -1,
                    i = [de, ue].indexOf(t) >= 0 ? "y" : "x";
                L[t] += $[i] * e
            })
        }
        return L
    }

    function mi(t, e) {
        void 0 === e && (e = {});
        var i = e,
            n = i.placement,
            s = i.boundary,
            o = i.rootBoundary,
            r = i.padding,
            a = i.flipVariations,
            l = i.allowedAutoPlacements,
            c = void 0 === l ? Ae : l,
            h = fi(n),
            d = h ? a ? Te : Te.filter(function (t) {
                return fi(t) === h
            }) : me,
            u = d.filter(function (t) {
                return c.indexOf(t) >= 0
            });
        0 === u.length && (u = d);
        var f = u.reduce(function (e, i) {
            return e[i] = gi(t, {
                placement: i,
                boundary: s,
                rootBoundary: o,
                padding: r
            })[Se(i)], e
        }, {});
        return Object.keys(f).sort(function (t, e) {
            return f[t] - f[e]
        })
    }
    var _i = {
        name: "flip",
        enabled: !0,
        phase: "main",
        fn: function (t) {
            var e = t.state,
                i = t.options,
                n = t.name;
            if (!e.modifiersData[n]._skip) {
                for (var s = i.mainAxis, o = void 0 === s || s, r = i.altAxis, a = void 0 === r || r, l = i.fallbackPlacements, c = i.padding, h = i.boundary, d = i.rootBoundary, u = i.altBoundary, f = i.flipVariations, p = void 0 === f || f, g = i.allowedAutoPlacements, m = e.options.placement, _ = Se(m), v = l || (_ !== m && p ? function (t) {
                    if (Se(t) === ge) return [];
                    var e = ni(t);
                    return [oi(t), e, oi(e)]
                }(m) : [ni(m)]), b = [m].concat(v).reduce(function (t, i) {
                    return t.concat(Se(i) === ge ? mi(e, {
                        placement: i,
                        boundary: h,
                        rootBoundary: d,
                        padding: c,
                        flipVariations: p,
                        allowedAutoPlacements: g
                    }) : i)
                }, []), y = e.rects.reference, w = e.rects.popper, E = new Map, T = !0, A = b[0], L = 0; L < b.length; L++) {
                    var O = b[L],
                        $ = Se(O),
                        D = fi(O) === _e,
                        k = [de, ue].indexOf($) >= 0,
                        x = k ? "width" : "height",
                        C = gi(e, {
                            placement: O,
                            boundary: h,
                            rootBoundary: d,
                            altBoundary: u,
                            padding: c
                        }),
                        S = k ? D ? fe : pe : D ? ue : de;
                    y[x] > w[x] && (S = ni(S));
                    var N = ni(S),
                        j = [];
                    if (o && j.push(C[$] <= 0), a && j.push(C[S] <= 0, C[N] <= 0), j.every(function (t) {
                        return t
                    })) {
                        A = O, T = !1;
                        break
                    }
                    E.set(O, j)
                }
                if (T)
                    for (var I = function (t) {
                        var e = b.find(function (e) {
                            var i = E.get(e);
                            if (i) return i.slice(0, t).every(function (t) {
                                return t
                            })
                        });
                        if (e) return A = e, "break"
                    }, P = p ? 3 : 1; P > 0 && "break" !== I(P); P--);
                e.placement !== A && (e.modifiersData[n]._skip = !0, e.placement = A, e.reset = !0)
            }
        },
        requiresIfExists: ["offset"],
        data: {
            _skip: !1
        }
    };

    function vi(t, e, i) {
        return void 0 === i && (i = {
            x: 0,
            y: 0
        }), {
            top: t.top - e.height - i.y,
            right: t.right - e.width + i.x,
            bottom: t.bottom - e.height + i.y,
            left: t.left - e.width - i.x
        }
    }

    function bi(t) {
        return [de, fe, ue, pe].some(function (e) {
            return t[e] >= 0
        })
    }
    var yi = {
        name: "hide",
        enabled: !0,
        phase: "main",
        requiresIfExists: ["preventOverflow"],
        fn: function (t) {
            var e = t.state,
                i = t.name,
                n = e.rects.reference,
                s = e.rects.popper,
                o = e.modifiersData.preventOverflow,
                r = gi(e, {
                    elementContext: "reference"
                }),
                a = gi(e, {
                    altBoundary: !0
                }),
                l = vi(r, n),
                c = vi(a, s, o),
                h = bi(l),
                d = bi(c);
            e.modifiersData[i] = {
                referenceClippingOffsets: l,
                popperEscapeOffsets: c,
                isReferenceHidden: h,
                hasPopperEscaped: d
            }, e.attributes.popper = Object.assign({}, e.attributes.popper, {
                "data-popper-reference-hidden": h,
                "data-popper-escaped": d
            })
        }
    };
    var wi = {
        name: "offset",
        enabled: !0,
        phase: "main",
        requires: ["popperOffsets"],
        fn: function (t) {
            var e = t.state,
                i = t.options,
                n = t.name,
                s = i.offset,
                o = void 0 === s ? [0, 0] : s,
                r = Ae.reduce(function (t, i) {
                    return t[i] = function (t, e, i) {
                        var n = Se(t),
                            s = [pe, de].indexOf(n) >= 0 ? -1 : 1,
                            o = "function" == typeof i ? i(Object.assign({}, e, {
                                placement: t
                            })) : i,
                            r = o[0],
                            a = o[1];
                        return r = r || 0, a = (a || 0) * s, [pe, fe].indexOf(n) >= 0 ? {
                            x: a,
                            y: r
                        } : {
                            x: r,
                            y: a
                        }
                    }(i, e.rects, o), t
                }, {}),
                a = r[e.placement],
                l = a.x,
                c = a.y;
            null != e.modifiersData.popperOffsets && (e.modifiersData.popperOffsets.x += l, e.modifiersData.popperOffsets.y += c), e.modifiersData[n] = r
        }
    };
    var Ei = {
        name: "popperOffsets",
        enabled: !0,
        phase: "read",
        fn: function (t) {
            var e = t.state,
                i = t.name;
            e.modifiersData[i] = pi({
                reference: e.rects.reference,
                element: e.rects.popper,
                strategy: "absolute",
                placement: e.placement
            })
        },
        data: {}
    };
    var Ti = {
        name: "preventOverflow",
        enabled: !0,
        phase: "main",
        fn: function (t) {
            var e = t.state,
                i = t.options,
                n = t.name,
                s = i.mainAxis,
                o = void 0 === s || s,
                r = i.altAxis,
                a = void 0 !== r && r,
                l = i.boundary,
                c = i.rootBoundary,
                h = i.altBoundary,
                d = i.padding,
                u = i.tether,
                f = void 0 === u || u,
                p = i.tetherOffset,
                g = void 0 === p ? 0 : p,
                m = gi(e, {
                    boundary: l,
                    rootBoundary: c,
                    padding: d,
                    altBoundary: h
                }),
                _ = Se(e.placement),
                v = fi(e.placement),
                b = !v,
                y = ze(_),
                w = "x" === y ? "y" : "x",
                E = e.modifiersData.popperOffsets,
                T = e.rects.reference,
                A = e.rects.popper,
                L = "function" == typeof g ? g(Object.assign({}, e.rects, {
                    placement: e.placement
                })) : g,
                O = {
                    x: 0,
                    y: 0
                };
            if (E) {
                if (o || a) {
                    var $ = "y" === y ? de : pe,
                        D = "y" === y ? ue : fe,
                        k = "y" === y ? "height" : "width",
                        x = E[y],
                        C = E[y] + m[$],
                        S = E[y] - m[D],
                        N = f ? -A[k] / 2 : 0,
                        j = v === _e ? T[k] : A[k],
                        I = v === _e ? -A[k] : -T[k],
                        P = e.elements.arrow,
                        M = f && P ? je(P) : {
                            width: 0,
                            height: 0
                        },
                        H = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : {
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0
                        },
                        R = H[$],
                        B = H[D],
                        W = Ye(0, T[k], M[k]),
                        z = b ? T[k] / 2 - N - W - R - L : j - W - R - L,
                        U = b ? -T[k] / 2 + N + W + B + L : I + W + B + L,
                        F = e.elements.arrow && We(e.elements.arrow),
                        K = F ? "y" === y ? F.clientTop || 0 : F.clientLeft || 0 : 0,
                        Y = e.modifiersData.offset ? e.modifiersData.offset[e.placement][y] : 0,
                        q = E[y] + z - Y - K,
                        V = E[y] + U - Y;
                    if (o) {
                        var X = Ye(f ? Fe(C, q) : C, x, f ? Ue(S, V) : S);
                        E[y] = X, O[y] = X - x
                    }
                    if (a) {
                        var Q = "x" === y ? de : pe,
                            G = "x" === y ? ue : fe,
                            Z = E[w],
                            J = Z + m[Q],
                            tt = Z - m[G],
                            et = Ye(f ? Fe(J, q) : J, Z, f ? Ue(tt, V) : tt);
                        E[w] = et, O[w] = et - Z
                    }
                }
                e.modifiersData[n] = O
            }
        },
        requiresIfExists: ["offset"]
    };

    function Ai(t, e, i) {
        void 0 === i && (i = !1);
        var n, s, o = He(e),
            r = Ne(t),
            a = ke(e),
            l = {
                scrollLeft: 0,
                scrollTop: 0
            },
            c = {
                x: 0,
                y: 0
            };
        return (a || !a && !i) && (("body" !== Oe(e) || li(o)) && (l = (n = e) !== $e(n) && ke(n) ? {
            scrollLeft: (s = n).scrollLeft,
            scrollTop: s.scrollTop
        } : ri(n)), ke(e) ? ((c = Ne(e)).x += e.clientLeft, c.y += e.clientTop) : o && (c.x = ai(o))), {
            x: r.left + l.scrollLeft - c.x,
            y: r.top + l.scrollTop - c.y,
            width: r.width,
            height: r.height
        }
    }

    function Li(t) {
        var e = new Map,
            i = new Set,
            n = [];
        return t.forEach(function (t) {
            e.set(t.name, t)
        }), t.forEach(function (t) {
            i.has(t.name) || function t(s) {
                i.add(s.name), [].concat(s.requires || [], s.requiresIfExists || []).forEach(function (n) {
                    if (!i.has(n)) {
                        var s = e.get(n);
                        s && t(s)
                    }
                }), n.push(s)
            }(t)
        }), n
    }
    var Oi = {
        placement: "bottom",
        modifiers: [],
        strategy: "absolute"
    };

    function $i() {
        for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
        return !e.some(function (t) {
            return !(t && "function" == typeof t.getBoundingClientRect)
        })
    }

    function Di(t) {
        void 0 === t && (t = {});
        var e = t,
            i = e.defaultModifiers,
            n = void 0 === i ? [] : i,
            s = e.defaultOptions,
            o = void 0 === s ? Oi : s;
        return function (t, e, i) {
            void 0 === i && (i = o);
            var s, r, a = {
                placement: "bottom",
                orderedModifiers: [],
                options: Object.assign({}, Oi, o),
                modifiersData: {},
                elements: {
                    reference: t,
                    popper: e
                },
                attributes: {},
                styles: {}
            },
                l = [],
                c = !1,
                h = {
                    state: a,
                    setOptions: function (i) {
                        d(), a.options = Object.assign({}, o, a.options, i), a.scrollParents = {
                            reference: De(t) ? ci(t) : t.contextElement ? ci(t.contextElement) : [],
                            popper: ci(e)
                        };
                        var s, r, c = function (t) {
                            var e = Li(t);
                            return Le.reduce(function (t, i) {
                                return t.concat(e.filter(function (t) {
                                    return t.phase === i
                                }))
                            }, [])
                        }((s = [].concat(n, a.options.modifiers), r = s.reduce(function (t, e) {
                            var i = t[e.name];
                            return t[e.name] = i ? Object.assign({}, i, e, {
                                options: Object.assign({}, i.options, e.options),
                                data: Object.assign({}, i.data, e.data)
                            }) : e, t
                        }, {}), Object.keys(r).map(function (t) {
                            return r[t]
                        })));
                        return a.orderedModifiers = c.filter(function (t) {
                            return t.enabled
                        }), a.orderedModifiers.forEach(function (t) {
                            var e = t.name,
                                i = t.options,
                                n = void 0 === i ? {} : i,
                                s = t.effect;
                            if ("function" == typeof s) {
                                var o = s({
                                    state: a,
                                    name: e,
                                    instance: h,
                                    options: n
                                });
                                l.push(o || function () { })
                            }
                        }), h.update()
                    },
                    forceUpdate: function () {
                        if (!c) {
                            var t = a.elements,
                                e = t.reference,
                                i = t.popper;
                            if ($i(e, i)) {
                                a.rects = {
                                    reference: Ai(e, We(i), "fixed" === a.options.strategy),
                                    popper: je(i)
                                }, a.reset = !1, a.placement = a.options.placement, a.orderedModifiers.forEach(function (t) {
                                    return a.modifiersData[t.name] = Object.assign({}, t.data)
                                });
                                for (var n = 0; n < a.orderedModifiers.length; n++)
                                    if (!0 !== a.reset) {
                                        var s = a.orderedModifiers[n],
                                            o = s.fn,
                                            r = s.options,
                                            l = void 0 === r ? {} : r,
                                            d = s.name;
                                        "function" == typeof o && (a = o({
                                            state: a,
                                            options: l,
                                            name: d,
                                            instance: h
                                        }) || a)
                                    } else a.reset = !1, n = -1
                            }
                        }
                    },
                    update: (s = function () {
                        return new Promise(function (t) {
                            h.forceUpdate(), t(a)
                        })
                    }, function () {
                        return r || (r = new Promise(function (t) {
                            Promise.resolve().then(function () {
                                r = void 0, t(s())
                            })
                        })), r
                    }),
                    destroy: function () {
                        d(), c = !0
                    }
                };
            if (!$i(t, e)) return h;

            function d() {
                l.forEach(function (t) {
                    return t()
                }), l = []
            }
            return h.setOptions(i).then(function (t) {
                !c && i.onFirstUpdate && i.onFirstUpdate(t)
            }), h
        }
    }
    var ki = Di(),
        xi = Di({
            defaultModifiers: [ei, Ei, Je, Ce]
        }),
        Ci = Di({
            defaultModifiers: [ei, Ei, Je, Ce, wi, _i, Ti, Qe, yi]
        }),
        Si = Object.freeze({
            __proto__: null,
            popperGenerator: Di,
            detectOverflow: gi,
            createPopperBase: ki,
            createPopper: Ci,
            createPopperLite: xi,
            top: de,
            bottom: ue,
            right: fe,
            left: pe,
            auto: ge,
            basePlacements: me,
            start: _e,
            end: ve,
            clippingParents: be,
            viewport: ye,
            popper: we,
            reference: Ee,
            variationPlacements: Te,
            placements: Ae,
            beforeRead: "beforeRead",
            read: "read",
            afterRead: "afterRead",
            beforeMain: "beforeMain",
            main: "main",
            afterMain: "afterMain",
            beforeWrite: "beforeWrite",
            write: "write",
            afterWrite: "afterWrite",
            modifierPhases: Le,
            applyStyles: Ce,
            arrow: Qe,
            computeStyles: Je,
            eventListeners: ei,
            flip: _i,
            hide: yi,
            offset: wi,
            popperOffsets: Ei,
            preventOverflow: Ti
        });
    const Ni = "dropdown",
        ji = "bs.dropdown",
        Ii = `.${ji}`,
        Pi = "Escape",
        Mi = "Space",
        Hi = "Tab",
        Ri = "ArrowUp",
        Bi = "ArrowDown",
        Wi = 2,
        zi = new RegExp(`${Ri}|${Bi}|${Pi}`),
        Ui = `hide${Ii}`,
        Fi = `hidden${Ii}`,
        Ki = `show${Ii}`,
        Yi = `shown${Ii}`,
        qi = `click${Ii}`,
        Vi = `click${Ii}.data-api`,
        Xi = `keydown${Ii}.data-api`,
        Qi = `keyup${Ii}.data-api`,
        Gi = "show",
        Zi = "dropup",
        Ji = "dropend",
        tn = "dropstart",
        en = "navbar",
        nn = '[data-bs-toggle="dropdown"]',
        sn = ".dropdown-menu",
        on = ".navbar-nav",
        rn = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
        an = m() ? "top-end" : "top-start",
        ln = m() ? "top-start" : "top-end",
        cn = m() ? "bottom-end" : "bottom-start",
        hn = m() ? "bottom-start" : "bottom-end",
        dn = m() ? "left-start" : "right-start",
        un = m() ? "right-start" : "left-start",
        fn = {
            offset: [0, 2],
            boundary: "clippingParents",
            reference: "toggle",
            display: "dynamic",
            popperConfig: null,
            autoClose: !0
        },
        pn = {
            offset: "(array|string|function)",
            boundary: "(string|element)",
            reference: "(string|element|object)",
            display: "string",
            popperConfig: "(null|object|function)",
            autoClose: "(boolean|string)"
        };
    class gn extends H {
        constructor(t, e) {
            super(t), this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
        }
        static get Default() {
            return fn
        }
        static get DefaultType() {
            return pn
        }
        static get DATA_KEY() {
            return ji
        }
        toggle() {
            if (d(this._element)) return;
            this._element.classList.contains(Gi) ? this.hide() : this.show()
        }
        show() {
            if (d(this._element) || this._menu.classList.contains(Gi)) return;
            const t = gn.getParentFromElement(this._element),
                e = {
                    relatedTarget: this._element
                };
            if (!P.trigger(this._element, Ki, e).defaultPrevented) {
                if (this._inNavbar) tt.setDataAttribute(this._menu, "popper", "none");
                else {
                    if (void 0 === Si) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
                    let e = this._element;
                    "parent" === this._config.reference ? e = t : a(this._config.reference) ? (e = this._config.reference, void 0 !== this._config.reference.jquery && (e = this._config.reference[0])) : "object" == typeof this._config.reference && (e = this._config.reference);
                    const i = this._getPopperConfig(),
                        n = i.modifiers.find(t => "applyStyles" === t.name && !1 === t.enabled);
                    this._popper = Ci(e, this._menu, i), n && tt.setDataAttribute(this._menu, "popper", "static")
                }
                "ontouchstart" in document.documentElement && !t.closest(on) && [].concat(...document.body.children).forEach(t => P.on(t, "mouseover", f)), this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.toggle(Gi), this._element.classList.toggle(Gi), P.trigger(this._element, Yi, e)
            }
        }
        hide() {
            if (d(this._element) || !this._menu.classList.contains(Gi)) return;
            const t = {
                relatedTarget: this._element
            };
            this._completeHide(t)
        }
        dispose() {
            this._menu = null, this._popper && (this._popper.destroy(), this._popper = null), super.dispose()
        }
        update() {
            this._inNavbar = this._detectNavbar(), this._popper && this._popper.update()
        }
        _addEventListeners() {
            P.on(this._element, qi, t => {
                t.preventDefault(), this.toggle()
            })
        }
        _completeHide(t) {
            P.trigger(this._element, Ui, t).defaultPrevented || ("ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach(t => P.off(t, "mouseover", f)), this._popper && this._popper.destroy(), this._menu.classList.remove(Gi), this._element.classList.remove(Gi), this._element.setAttribute("aria-expanded", "false"), tt.removeDataAttribute(this._menu, "popper"), P.trigger(this._element, Fi, t))
        }
        _getConfig(t) {
            if (t = {
                ...this.constructor.Default,
                ...tt.getDataAttributes(this._element),
                ...t
            }, c(Ni, t, this.constructor.DefaultType), "object" == typeof t.reference && !a(t.reference) && "function" != typeof t.reference.getBoundingClientRect) throw new TypeError(`${Ni.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
            return t
        }
        _getMenuElement() {
            return et.next(this._element, sn)[0]
        }
        _getPlacement() {
            const t = this._element.parentNode;
            if (t.classList.contains(Ji)) return dn;
            if (t.classList.contains(tn)) return un;
            const e = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
            return t.classList.contains(Zi) ? e ? ln : an : e ? hn : cn
        }
        _detectNavbar() {
            return null !== this._element.closest(`.${en}`)
        }
        _getOffset() {
            const {
                offset: t
            } = this._config;
            return "string" == typeof t ? t.split(",").map(t => Number.parseInt(t, 10)) : "function" == typeof t ? e => t(e, this._element) : t
        }
        _getPopperConfig() {
            const t = {
                placement: this._getPlacement(),
                modifiers: [{
                    name: "preventOverflow",
                    options: {
                        boundary: this._config.boundary
                    }
                }, {
                    name: "offset",
                    options: {
                        offset: this._getOffset()
                    }
                }]
            };
            return "static" === this._config.display && (t.modifiers = [{
                name: "applyStyles",
                enabled: !1
            }]), {
                ...t,
                ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(t) : this._config.popperConfig
            }
        }
        _selectMenuItem(t) {
            const e = et.find(rn, this._menu).filter(h);
            if (!e.length) return;
            let i = e.indexOf(t.target);
            t.key === Ri && i > 0 && i--, t.key === Bi && i < e.length - 1 && i++, e[i = -1 === i ? 0 : i].focus()
        }
        static dropdownInterface(t, e) {
            let i = y.get(t, ji);
            if (i || (i = new gn(t, "object" == typeof e ? e : null)), "string" == typeof e) {
                if (void 0 === i[e]) throw new TypeError(`No method named "${e}"`);
                i[e]()
            }
        }
        static jQueryInterface(t) {
            return this.each(function () {
                gn.dropdownInterface(this, t)
            })
        }
        static clearMenus(t) {
            if (t) {
                if (t.button === Wi || "keyup" === t.type && t.key !== Hi) return;
                if (/input|select|option|textarea|form/i.test(t.target.tagName)) return
            }
            const e = et.find(nn);
            for (let i = 0, n = e.length; i < n; i++) {
                const n = y.get(e[i], ji);
                if (!n || !1 === n._config.autoClose) continue;
                if (!n._element.classList.contains(Gi)) continue;
                const s = {
                    relatedTarget: n._element
                };
                if (t) {
                    const e = t.composedPath(),
                        i = e.includes(n._menu);
                    if (e.includes(n._element) || "inside" === n._config.autoClose && !i || "outside" === n._config.autoClose && i) continue;
                    if ("keyup" === t.type && t.key === Hi && n._menu.contains(t.target)) continue;
                    "click" === t.type && (s.clickEvent = t)
                }
                n._completeHide(s)
            }
        }
        static getParentFromElement(t) {
            return s(t) || t.parentNode
        }
        static dataApiKeydownHandler(t) {
            if (/input|textarea/i.test(t.target.tagName) ? t.key === Mi || t.key !== Pi && (t.key !== Bi && t.key !== Ri || t.target.closest(sn)) : !zi.test(t.key)) return;
            const e = this.classList.contains(Gi);
            if (!e && t.key === Pi) return;
            if (t.preventDefault(), t.stopPropagation(), d(this)) return;
            const i = () => this.matches(nn) ? this : et.prev(this, nn)[0];
            if (t.key === Pi) return i().focus(), void gn.clearMenus();
            e || t.key !== Ri && t.key !== Bi ? e && t.key !== Mi ? gn.getInstance(i())._selectMenuItem(t) : gn.clearMenus() : i().click()
        }
    }
    P.on(document, Xi, nn, gn.dataApiKeydownHandler), P.on(document, Xi, sn, gn.dataApiKeydownHandler), P.on(document, Vi, gn.clearMenus), P.on(document, Qi, gn.clearMenus), P.on(document, Vi, nn, function (t) {
        t.preventDefault(), gn.dropdownInterface(this)
    }), _(Ni, gn);
    const mn = () => {
        const t = document.documentElement.clientWidth;
        return Math.abs(window.innerWidth - t)
    },
        _n = (t = mn()) => {
            vn(), bn("body", "paddingRight", e => e + t), bn(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", "paddingRight", e => e + t), bn(".sticky-top", "marginRight", e => e - t)
        },
        vn = () => {
            const t = document.body.style.overflow;
            t && tt.setDataAttribute(document.body, "overflow", t), document.body.style.overflow = "hidden"
        },
        bn = (t, e, i) => {
            const n = mn();
            et.find(t).forEach(t => {
                if (t !== document.body && window.innerWidth > t.clientWidth + n) return;
                const s = t.style[e],
                    o = window.getComputedStyle(t)[e];
                tt.setDataAttribute(t, e, s), t.style[e] = `${i(Number.parseFloat(o))}px`
            })
        },
        yn = () => {
            wn("body", "overflow"), wn("body", "paddingRight"), wn(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", "paddingRight"), wn(".sticky-top", "marginRight")
        },
        wn = (t, e) => {
            et.find(t).forEach(t => {
                const i = tt.getDataAttribute(t, e);
                void 0 === i ? t.style.removeProperty(e) : (tt.removeDataAttribute(t, e), t.style[e] = i)
            })
        },
        En = {
            isVisible: !0,
            isAnimated: !1,
            rootElement: document.body,
            clickCallback: null
        },
        Tn = {
            isVisible: "boolean",
            isAnimated: "boolean",
            rootElement: "element",
            clickCallback: "(function|null)"
        },
        An = "backdrop",
        Ln = "modal-backdrop",
        On = "fade",
        $n = "show",
        Dn = `mousedown.bs.${An}`;
    class kn {
        constructor(t) {
            this._config = this._getConfig(t), this._isAppended = !1, this._element = null
        }
        show(t) {
            this._config.isVisible ? (this._append(), this._config.isAnimated && p(this._getElement()), this._getElement().classList.add($n), this._emulateAnimation(() => {
                v(t)
            })) : v(t)
        }
        hide(t) {
            this._config.isVisible ? (this._getElement().classList.remove($n), this._emulateAnimation(() => {
                this.dispose(), v(t)
            })) : v(t)
        }
        _getElement() {
            if (!this._element) {
                const t = document.createElement("div");
                t.className = Ln, this._config.isAnimated && t.classList.add(On), this._element = t
            }
            return this._element
        }
        _getConfig(t) {
            return t = {
                ...En,
                ..."object" == typeof t ? t : {}
            }, c(An, t, Tn), t
        }
        _append() {
            this._isAppended || (this._config.rootElement.appendChild(this._getElement()), P.on(this._getElement(), Dn, () => {
                v(this._config.clickCallback)
            }), this._isAppended = !0)
        }
        dispose() {
            this._isAppended && (P.off(this._element, Dn), this._getElement().parentNode.removeChild(this._element), this._isAppended = !1)
        }
        _emulateAnimation(t) {
            if (!this._config.isAnimated) return void v(t);
            const e = o(this._getElement());
            P.one(this._getElement(), "transitionend", () => v(t)), l(this._getElement(), e)
        }
    }
    const xn = "modal",
        Cn = "bs.modal",
        Sn = `.${Cn}`,
        Nn = "Escape",
        jn = {
            backdrop: !0,
            keyboard: !0,
            focus: !0
        },
        In = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean"
        },
        Pn = `hide${Sn}`,
        Mn = `hidePrevented${Sn}`,
        Hn = `hidden${Sn}`,
        Rn = `show${Sn}`,
        Bn = `shown${Sn}`,
        Wn = `focusin${Sn}`,
        zn = `resize${Sn}`,
        Un = `click.dismiss${Sn}`,
        Fn = `keydown.dismiss${Sn}`,
        Kn = `mouseup.dismiss${Sn}`,
        Yn = `mousedown.dismiss${Sn}`,
        qn = `click${Sn}.data-api`,
        Vn = "modal-open",
        Xn = "fade",
        Qn = "show",
        Gn = "modal-static",
        Zn = ".modal-dialog",
        Jn = ".modal-body",
        ts = '[data-bs-dismiss="modal"]';
    class es extends H {
        constructor(t, e) {
            super(t), this._config = this._getConfig(e), this._dialog = et.findOne(Zn, this._element), this._backdrop = this._initializeBackDrop(), this._isShown = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1
        }
        static get Default() {
            return jn
        }
        static get DATA_KEY() {
            return Cn
        }
        toggle(t) {
            return this._isShown ? this.hide() : this.show(t)
        }
        show(t) {
            if (this._isShown || this._isTransitioning) return;
            this._isAnimated() && (this._isTransitioning = !0);
            const e = P.trigger(this._element, Rn, {
                relatedTarget: t
            });
            this._isShown || e.defaultPrevented || (this._isShown = !0, _n(), document.body.classList.add(Vn), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), P.on(this._element, Un, ts, t => this.hide(t)), P.on(this._dialog, Yn, () => {
                P.one(this._element, Kn, t => {
                    t.target === this._element && (this._ignoreBackdropClick = !0)
                })
            }), this._showBackdrop(() => this._showElement(t)))
        }
        hide(t) {
            if (t && t.preventDefault(), !this._isShown || this._isTransitioning) return;
            if (P.trigger(this._element, Pn).defaultPrevented) return;
            this._isShown = !1;
            const e = this._isAnimated();
            if (e && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), P.off(document, Wn), this._element.classList.remove(Qn), P.off(this._element, Un), P.off(this._dialog, Yn), e) {
                const t = o(this._element);
                P.one(this._element, "transitionend", t => this._hideModal(t)), l(this._element, t)
            } else this._hideModal()
        }
        dispose() {
            [window, this._dialog].forEach(t => P.off(t, Sn)), super.dispose(), P.off(document, Wn), this._config = null, this._dialog = null, this._backdrop.dispose(), this._backdrop = null, this._isShown = null, this._ignoreBackdropClick = null, this._isTransitioning = null
        }
        handleUpdate() {
            this._adjustDialog()
        }
        _initializeBackDrop() {
            return new kn({
                isVisible: Boolean(this._config.backdrop),
                isAnimated: this._isAnimated()
            })
        }
        _getConfig(t) {
            return t = {
                ...jn,
                ...tt.getDataAttributes(this._element),
                ...t
            }, c(xn, t, In), t
        }
        _showElement(t) {
            const e = this._isAnimated(),
                i = et.findOne(Jn, this._dialog);
            this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0, i && (i.scrollTop = 0), e && p(this._element), this._element.classList.add(Qn), this._config.focus && this._enforceFocus();
            const n = () => {
                this._config.focus && this._element.focus(), this._isTransitioning = !1, P.trigger(this._element, Bn, {
                    relatedTarget: t
                })
            };
            if (e) {
                const t = o(this._dialog);
                P.one(this._dialog, "transitionend", n), l(this._dialog, t)
            } else n()
        }
        _enforceFocus() {
            P.off(document, Wn), P.on(document, Wn, t => {
                document === t.target || this._element === t.target || this._element.contains(t.target) || this._element.focus()
            })
        }
        _setEscapeEvent() {
            this._isShown ? P.on(this._element, Fn, t => {
                this._config.keyboard && t.key === Nn ? (t.preventDefault(), this.hide()) : this._config.keyboard || t.key !== Nn || this._triggerBackdropTransition()
            }) : P.off(this._element, Fn)
        }
        _setResizeEvent() {
            this._isShown ? P.on(window, zn, () => this._adjustDialog()) : P.off(window, zn)
        }
        _hideModal() {
            this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide(() => {
                document.body.classList.remove(Vn), this._resetAdjustments(), yn(), P.trigger(this._element, Hn)
            })
        }
        _showBackdrop(t) {
            P.on(this._element, Un, t => {
                this._ignoreBackdropClick ? this._ignoreBackdropClick = !1 : t.target === t.currentTarget && (!0 === this._config.backdrop ? this.hide() : "static" === this._config.backdrop && this._triggerBackdropTransition())
            }), this._backdrop.show(t)
        }
        _isAnimated() {
            return this._element.classList.contains(Xn)
        }
        _triggerBackdropTransition() {
            if (P.trigger(this._element, Mn).defaultPrevented) return;
            const t = this._element.scrollHeight > document.documentElement.clientHeight;
            t || (this._element.style.overflowY = "hidden"), this._element.classList.add(Gn);
            const e = o(this._dialog);
            P.off(this._element, "transitionend"), P.one(this._element, "transitionend", () => {
                this._element.classList.remove(Gn), t || (P.one(this._element, "transitionend", () => {
                    this._element.style.overflowY = ""
                }), l(this._element, e))
            }), l(this._element, e), this._element.focus()
        }
        _adjustDialog() {
            const t = this._element.scrollHeight > document.documentElement.clientHeight,
                e = mn(),
                i = e > 0;
            (!i && t && !m() || i && !t && m()) && (this._element.style.paddingLeft = `${e}px`), (i && !t && !m() || !i && t && m()) && (this._element.style.paddingRight = `${e}px`)
        }
        _resetAdjustments() {
            this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
        }
        static jQueryInterface(t, e) {
            return this.each(function () {
                const i = es.getInstance(this) || new es(this, "object" == typeof t ? t : {});
                if ("string" == typeof t) {
                    if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
                    i[t](e)
                }
            })
        }
    }
    P.on(document, qn, '[data-bs-toggle="modal"]', function (t) {
        const e = s(this);
        ["A", "AREA"].includes(this.tagName) && t.preventDefault(), P.one(e, Rn, t => {
            t.defaultPrevented || P.one(e, Hn, () => {
                h(this) && this.focus()
            })
        }), (es.getInstance(e) || new es(e)).toggle(this)
    }), _(xn, es);
    const is = "offcanvas",
        ns = "bs.offcanvas",
        ss = `.${ns}`,
        os = `load${ss}.data-api`,
        rs = "Escape",
        as = {
            backdrop: !0,
            keyboard: !0,
            scroll: !1
        },
        ls = {
            backdrop: "boolean",
            keyboard: "boolean",
            scroll: "boolean"
        },
        cs = "show",
        hs = `show${ss}`,
        ds = `shown${ss}`,
        us = `hide${ss}`,
        fs = `hidden${ss}`,
        ps = `focusin${ss}`,
        gs = `click${ss}.data-api`,
        ms = `click.dismiss${ss}`,
        _s = `keydown.dismiss${ss}`,
        vs = '[data-bs-dismiss="offcanvas"]';
    class bs extends H {
        constructor(t, e) {
            super(t), this._config = this._getConfig(e), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._addEventListeners()
        }
        static get Default() {
            return as
        }
        static get DATA_KEY() {
            return ns
        }
        toggle(t) {
            return this._isShown ? this.hide() : this.show(t)
        }
        show(t) {
            if (this._isShown) return;
            if (P.trigger(this._element, hs, {
                relatedTarget: t
            }).defaultPrevented) return;
            this._isShown = !0, this._element.style.visibility = "visible", this._backdrop.show(), this._config.scroll || (_n(), this._enforceFocusOnElement(this._element)), this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add(cs);
            const e = o(this._element);
            P.one(this._element, "transitionend", () => {
                P.trigger(this._element, ds, {
                    relatedTarget: t
                })
            }), l(this._element, e)
        }
        hide() {
            if (!this._isShown) return;
            if (P.trigger(this._element, us).defaultPrevented) return;
            P.off(document, ps), this._element.blur(), this._isShown = !1, this._element.classList.remove(cs), this._backdrop.hide();
            const t = o(this._element);
            P.one(this._element, "transitionend", () => {
                this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._element.style.visibility = "hidden", this._config.scroll || yn(), P.trigger(this._element, fs)
            }), l(this._element, t)
        }
        dispose() {
            this._backdrop.dispose(), super.dispose(), P.off(document, ps), this._config = null, this._backdrop = null
        }
        _getConfig(t) {
            return t = {
                ...as,
                ...tt.getDataAttributes(this._element),
                ..."object" == typeof t ? t : {}
            }, c(is, t, ls), t
        }
        _initializeBackDrop() {
            return new kn({
                isVisible: this._config.backdrop,
                isAnimated: !0,
                rootElement: this._element.parentNode,
                clickCallback: () => this.hide()
            })
        }
        _enforceFocusOnElement(t) {
            P.off(document, ps), P.on(document, ps, e => {
                document === e.target || t === e.target || t.contains(e.target) || t.focus()
            }), t.focus()
        }
        _addEventListeners() {
            P.on(this._element, ms, vs, () => this.hide()), P.on(this._element, _s, t => {
                this._config.keyboard && t.key === rs && this.hide()
            })
        }
        static jQueryInterface(t) {
            return this.each(function () {
                const e = y.get(this, ns) || new bs(this, "object" == typeof t ? t : {});
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                    e[t](this)
                }
            })
        }
    }
    P.on(document, gs, '[data-bs-toggle="offcanvas"]', function (t) {
        const e = s(this);
        if (["A", "AREA"].includes(this.tagName) && t.preventDefault(), d(this)) return;
        P.one(e, fs, () => {
            h(this) && this.focus()
        });
        const i = et.findOne(".offcanvas.show");
        i && i !== e && bs.getInstance(i).hide(), (y.get(e, ns) || new bs(e)).toggle(this)
    }), P.on(window, os, () => {
        et.find(".offcanvas.show").forEach(t => (y.get(t, ns) || new bs(t)).show())
    }), _(is, bs);
    const ys = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
        ws = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&\/:?]*(?:[#\/?]|$))/i,
        Es = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+\/a-z]+=*$/i,
        Ts = (t, e) => {
            const i = t.nodeName.toLowerCase();
            if (e.includes(i)) return !ys.has(i) || Boolean(ws.test(t.nodeValue) || Es.test(t.nodeValue));
            const n = e.filter(t => t instanceof RegExp);
            for (let t = 0, e = n.length; t < e; t++)
                if (n[t].test(i)) return !0;
            return !1
        },
        As = {
            "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
            a: ["target", "href", "title", "rel"],
            area: [],
            b: [],
            br: [],
            col: [],
            code: [],
            div: [],
            em: [],
            hr: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            i: [],
            img: ["src", "srcset", "alt", "title", "width", "height"],
            li: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            small: [],
            span: [],
            sub: [],
            sup: [],
            strong: [],
            u: [],
            ul: []
        };

    function Ls(t, e, i) {
        if (!t.length) return t;
        if (i && "function" == typeof i) return i(t);
        const n = (new window.DOMParser).parseFromString(t, "text/html"),
            s = Object.keys(e),
            o = [].concat(...n.body.querySelectorAll("*"));
        for (let t = 0, i = o.length; t < i; t++) {
            const i = o[t],
                n = i.nodeName.toLowerCase();
            if (!s.includes(n)) {
                i.parentNode.removeChild(i);
                continue
            }
            const r = [].concat(...i.attributes),
                a = [].concat(e["*"] || [], e[n] || []);
            r.forEach(t => {
                Ts(t, a) || i.removeAttribute(t.nodeName)
            })
        }
        return n.body.innerHTML
    }
    const Os = "tooltip",
        $s = "bs.tooltip",
        Ds = `.${$s}`,
        ks = "bs-tooltip",
        xs = new RegExp(`(^|\\s)${ks}\\S+`, "g"),
        Cs = new Set(["sanitize", "allowList", "sanitizeFn"]),
        Ss = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "(array|string|function)",
            container: "(string|element|boolean)",
            fallbackPlacements: "array",
            boundary: "(string|element)",
            customClass: "(string|function)",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            allowList: "object",
            popperConfig: "(null|object|function)"
        },
        Ns = {
            AUTO: "auto",
            TOP: "top",
            RIGHT: m() ? "left" : "right",
            BOTTOM: "bottom",
            LEFT: m() ? "right" : "left"
        },
        js = {
            animation: !0,
            template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            offset: [0, 0],
            container: !1,
            fallbackPlacements: ["top", "right", "bottom", "left"],
            boundary: "clippingParents",
            customClass: "",
            sanitize: !0,
            sanitizeFn: null,
            allowList: As,
            popperConfig: null
        },
        Is = {
            HIDE: `hide${Ds}`,
            HIDDEN: `hidden${Ds}`,
            SHOW: `show${Ds}`,
            SHOWN: `shown${Ds}`,
            INSERTED: `inserted${Ds}`,
            CLICK: `click${Ds}`,
            FOCUSIN: `focusin${Ds}`,
            FOCUSOUT: `focusout${Ds}`,
            MOUSEENTER: `mouseenter${Ds}`,
            MOUSELEAVE: `mouseleave${Ds}`
        },
        Ps = "fade",
        Ms = "modal",
        Hs = "show",
        Rs = "show",
        Bs = "out",
        Ws = ".tooltip-inner",
        zs = "hover",
        Us = "focus",
        Fs = "click",
        Ks = "manual";
    class Ys extends H {
        constructor(t, e) {
            if (void 0 === Si) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
            super(t), this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.config = this._getConfig(e), this.tip = null, this._setListeners()
        }
        static get Default() {
            return js
        }
        static get NAME() {
            return Os
        }
        static get DATA_KEY() {
            return $s
        }
        static get Event() {
            return Is
        }
        static get EVENT_KEY() {
            return Ds
        }
        static get DefaultType() {
            return Ss
        }
        enable() {
            this._isEnabled = !0
        }
        disable() {
            this._isEnabled = !1
        }
        toggleEnabled() {
            this._isEnabled = !this._isEnabled
        }
        toggle(t) {
            if (this._isEnabled)
                if (t) {
                    const e = this._initializeOnDelegatedTarget(t);
                    e._activeTrigger.click = !e._activeTrigger.click, e._isWithActiveTrigger() ? e._enter(null, e) : e._leave(null, e)
                } else {
                    if (this.getTipElement().classList.contains(Hs)) return void this._leave(null, this);
                    this._enter(null, this)
                }
        }
        dispose() {
            clearTimeout(this._timeout), P.off(this._element.closest(`.${Ms}`), "hide.bs.modal", this._hideModalHandler), this.tip && this.tip.parentNode && this.tip.parentNode.removeChild(this.tip), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._popper && this._popper.destroy(), this._popper = null, this.config = null, this.tip = null, super.dispose()
        }
        show() {
            if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
            if (!this.isWithContent() || !this._isEnabled) return;
            const t = P.trigger(this._element, this.constructor.Event.SHOW),
                i = u(this._element),
                n = null === i ? this._element.ownerDocument.documentElement.contains(this._element) : i.contains(this._element);
            if (t.defaultPrevented || !n) return;
            const s = this.getTipElement(),
                r = e(this.constructor.NAME);
            s.setAttribute("id", r), this._element.setAttribute("aria-describedby", r), this.setContent(), this.config.animation && s.classList.add(Ps);
            const a = "function" == typeof this.config.placement ? this.config.placement.call(this, s, this._element) : this.config.placement,
                c = this._getAttachment(a);
            this._addAttachmentClass(c);
            const h = this._getContainer();
            y.set(s, this.constructor.DATA_KEY, this), this._element.ownerDocument.documentElement.contains(this.tip) || (h.appendChild(s), P.trigger(this._element, this.constructor.Event.INSERTED)), this._popper ? this._popper.update() : this._popper = Ci(this._element, s, this._getPopperConfig(c)), s.classList.add(Hs);
            const d = "function" == typeof this.config.customClass ? this.config.customClass() : this.config.customClass;
            d && s.classList.add(...d.split(" ")), "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach(t => {
                P.on(t, "mouseover", f)
            });
            const p = () => {
                const t = this._hoverState;
                this._hoverState = null, P.trigger(this._element, this.constructor.Event.SHOWN), t === Bs && this._leave(null, this)
            };
            if (this.tip.classList.contains(Ps)) {
                const t = o(this.tip);
                P.one(this.tip, "transitionend", p), l(this.tip, t)
            } else p()
        }
        hide() {
            if (!this._popper) return;
            const t = this.getTipElement(),
                e = () => {
                    this._isWithActiveTrigger() || (this._hoverState !== Rs && t.parentNode && t.parentNode.removeChild(t), this._cleanTipClass(), this._element.removeAttribute("aria-describedby"), P.trigger(this._element, this.constructor.Event.HIDDEN), this._popper && (this._popper.destroy(), this._popper = null))
                };
            if (!P.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented) {
                if (t.classList.remove(Hs), "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach(t => P.off(t, "mouseover", f)), this._activeTrigger[Fs] = !1, this._activeTrigger[Us] = !1, this._activeTrigger[zs] = !1, this.tip.classList.contains(Ps)) {
                    const i = o(t);
                    P.one(t, "transitionend", e), l(t, i)
                } else e();
                this._hoverState = ""
            }
        }
        update() {
            null !== this._popper && this._popper.update()
        }
        isWithContent() {
            return Boolean(this.getTitle())
        }
        getTipElement() {
            if (this.tip) return this.tip;
            const t = document.createElement("div");
            return t.innerHTML = this.config.template, this.tip = t.children[0], this.tip
        }
        setContent() {
            const t = this.getTipElement();
            this.setElementContent(et.findOne(Ws, t), this.getTitle()), t.classList.remove(Ps, Hs)
        }
        setElementContent(t, e) {
            if (null !== t) return "object" == typeof e && a(e) ? (e.jquery && (e = e[0]), void (this.config.html ? e.parentNode !== t && (t.innerHTML = "", t.appendChild(e)) : t.textContent = e.textContent)) : void (this.config.html ? (this.config.sanitize && (e = Ls(e, this.config.allowList, this.config.sanitizeFn)), t.innerHTML = e) : t.textContent = e)
        }
        getTitle() {
            let t = this._element.getAttribute("data-bs-original-title");
            return t || (t = "function" == typeof this.config.title ? this.config.title.call(this._element) : this.config.title), t
        }
        updateAttachment(t) {
            return "right" === t ? "end" : "left" === t ? "start" : t
        }
        _initializeOnDelegatedTarget(t, e) {
            const i = this.constructor.DATA_KEY;
            return (e = e || y.get(t.delegateTarget, i)) || (e = new this.constructor(t.delegateTarget, this._getDelegateConfig()), y.set(t.delegateTarget, i, e)), e
        }
        _getOffset() {
            const {
                offset: t
            } = this.config;
            return "string" == typeof t ? t.split(",").map(t => Number.parseInt(t, 10)) : "function" == typeof t ? e => t(e, this._element) : t
        }
        _getPopperConfig(t) {
            const e = {
                placement: t,
                modifiers: [{
                    name: "flip",
                    options: {
                        fallbackPlacements: this.config.fallbackPlacements
                    }
                }, {
                    name: "offset",
                    options: {
                        offset: this._getOffset()
                    }
                }, {
                    name: "preventOverflow",
                    options: {
                        boundary: this.config.boundary
                    }
                }, {
                    name: "arrow",
                    options: {
                        element: `.${this.constructor.NAME}-arrow`
                    }
                }, {
                    name: "onChange",
                    enabled: !0,
                    phase: "afterWrite",
                    fn: t => this._handlePopperPlacementChange(t)
                }],
                onFirstUpdate: t => {
                    t.options.placement !== t.placement && this._handlePopperPlacementChange(t)
                }
            };
            return {
                ...e,
                ..."function" == typeof this.config.popperConfig ? this.config.popperConfig(e) : this.config.popperConfig
            }
        }
        _addAttachmentClass(t) {
            this.getTipElement().classList.add(`${ks}-${this.updateAttachment(t)}`)
        }
        _getContainer() {
            return !1 === this.config.container ? document.body : a(this.config.container) ? this.config.container : et.findOne(this.config.container)
        }
        _getAttachment(t) {
            return Ns[t.toUpperCase()]
        }
        _setListeners() {
            this.config.trigger.split(" ").forEach(t => {
                if ("click" === t) P.on(this._element, this.constructor.Event.CLICK, this.config.selector, t => this.toggle(t));
                else if (t !== Ks) {
                    const e = t === zs ? this.constructor.Event.MOUSEENTER : this.constructor.Event.FOCUSIN,
                        i = t === zs ? this.constructor.Event.MOUSELEAVE : this.constructor.Event.FOCUSOUT;
                    P.on(this._element, e, this.config.selector, t => this._enter(t)), P.on(this._element, i, this.config.selector, t => this._leave(t))
                }
            }), this._hideModalHandler = (() => {
                this._element && this.hide()
            }), P.on(this._element.closest(`.${Ms}`), "hide.bs.modal", this._hideModalHandler), this.config.selector ? this.config = {
                ...this.config,
                trigger: "manual",
                selector: ""
            } : this._fixTitle()
        }
        _fixTitle() {
            const t = this._element.getAttribute("title"),
                e = typeof this._element.getAttribute("data-bs-original-title");
            (t || "string" !== e) && (this._element.setAttribute("data-bs-original-title", t || ""), !t || this._element.getAttribute("aria-label") || this._element.textContent || this._element.setAttribute("aria-label", t), this._element.setAttribute("title", ""))
        }
        _enter(t, e) {
            e = this._initializeOnDelegatedTarget(t, e), t && (e._activeTrigger["focusin" === t.type ? Us : zs] = !0), e.getTipElement().classList.contains(Hs) || e._hoverState === Rs ? e._hoverState = Rs : (clearTimeout(e._timeout), e._hoverState = Rs, e.config.delay && e.config.delay.show ? e._timeout = setTimeout(() => {
                e._hoverState === Rs && e.show()
            }, e.config.delay.show) : e.show())
        }
        _leave(t, e) {
            e = this._initializeOnDelegatedTarget(t, e), t && (e._activeTrigger["focusout" === t.type ? Us : zs] = e._element.contains(t.relatedTarget)), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = Bs, e.config.delay && e.config.delay.hide ? e._timeout = setTimeout(() => {
                e._hoverState === Bs && e.hide()
            }, e.config.delay.hide) : e.hide())
        }
        _isWithActiveTrigger() {
            for (const t in this._activeTrigger)
                if (this._activeTrigger[t]) return !0;
            return !1
        }
        _getConfig(t) {
            const e = tt.getDataAttributes(this._element);
            return Object.keys(e).forEach(t => {
                Cs.has(t) && delete e[t]
            }), t && "object" == typeof t.container && t.container.jquery && (t.container = t.container[0]), "number" == typeof (t = {
                ...this.constructor.Default,
                ...e,
                ..."object" == typeof t && t ? t : {}
            }).delay && (t.delay = {
                show: t.delay,
                hide: t.delay
            }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), c(Os, t, this.constructor.DefaultType), t.sanitize && (t.template = Ls(t.template, t.allowList, t.sanitizeFn)), t
        }
        _getDelegateConfig() {
            const t = {};
            if (this.config)
                for (const e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
            return t
        }
        _cleanTipClass() {
            const t = this.getTipElement(),
                e = t.getAttribute("class").match(xs);
            null !== e && e.length > 0 && e.map(t => t.trim()).forEach(e => t.classList.remove(e))
        }
        _handlePopperPlacementChange(t) {
            const {
                state: e
            } = t;
            e && (this.tip = e.elements.popper, this._cleanTipClass(), this._addAttachmentClass(this._getAttachment(e.placement)))
        }
        static jQueryInterface(t) {
            return this.each(function () {
                let e = y.get(this, $s);
                const i = "object" == typeof t && t;
                if ((e || !/dispose|hide/.test(t)) && (e || (e = new Ys(this, i)), "string" == typeof t)) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            })
        }
    }
    _(Os, Ys);
    const qs = "popover",
        Vs = "bs.popover",
        Xs = `.${Vs}`,
        Qs = "bs-popover",
        Gs = new RegExp(`(^|\\s)${Qs}\\S+`, "g"),
        Zs = {
            ...Ys.Default,
            placement: "right",
            offset: [0, 8],
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        },
        Js = {
            ...Ys.DefaultType,
            content: "(string|element|function)"
        },
        to = {
            HIDE: `hide${Xs}`,
            HIDDEN: `hidden${Xs}`,
            SHOW: `show${Xs}`,
            SHOWN: `shown${Xs}`,
            INSERTED: `inserted${Xs}`,
            CLICK: `click${Xs}`,
            FOCUSIN: `focusin${Xs}`,
            FOCUSOUT: `focusout${Xs}`,
            MOUSEENTER: `mouseenter${Xs}`,
            MOUSELEAVE: `mouseleave${Xs}`
        },
        eo = "fade",
        io = "show",
        no = ".popover-header",
        so = ".popover-body";
    class oo extends Ys {
        static get Default() {
            return Zs
        }
        static get NAME() {
            return qs
        }
        static get DATA_KEY() {
            return Vs
        }
        static get Event() {
            return to
        }
        static get EVENT_KEY() {
            return Xs
        }
        static get DefaultType() {
            return Js
        }
        isWithContent() {
            return this.getTitle() || this._getContent()
        }
        setContent() {
            const t = this.getTipElement();
            this.setElementContent(et.findOne(no, t), this.getTitle());
            let e = this._getContent();
            "function" == typeof e && (e = e.call(this._element)), this.setElementContent(et.findOne(so, t), e), t.classList.remove(eo, io)
        }
        _addAttachmentClass(t) {
            this.getTipElement().classList.add(`${Qs}-${this.updateAttachment(t)}`)
        }
        _getContent() {
            return this._element.getAttribute("data-bs-content") || this.config.content
        }
        _cleanTipClass() {
            const t = this.getTipElement(),
                e = t.getAttribute("class").match(Gs);
            null !== e && e.length > 0 && e.map(t => t.trim()).forEach(e => t.classList.remove(e))
        }
        static jQueryInterface(t) {
            return this.each(function () {
                let e = y.get(this, Vs);
                const i = "object" == typeof t ? t : null;
                if ((e || !/dispose|hide/.test(t)) && (e || (e = new oo(this, i), y.set(this, Vs, e)), "string" == typeof t)) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            })
        }
    }
    _(qs, oo);
    const ro = "scrollspy",
        ao = "bs.scrollspy",
        lo = `.${ao}`,
        co = {
            offset: 10,
            method: "auto",
            target: ""
        },
        ho = {
            offset: "number",
            method: "string",
            target: "(string|element)"
        },
        uo = `activate${lo}`,
        fo = `scroll${lo}`,
        po = `load${lo}.data-api`,
        go = "dropdown-item",
        mo = "active",
        _o = ".nav, .list-group",
        vo = ".nav-link",
        bo = ".nav-item",
        yo = ".list-group-item",
        wo = ".dropdown",
        Eo = ".dropdown-toggle",
        To = "offset",
        Ao = "position";
    class Lo extends H {
        constructor(t, e) {
            super(t), this._scrollElement = "BODY" === this._element.tagName ? window : this._element, this._config = this._getConfig(e), this._selector = `${this._config.target} ${vo}, ${this._config.target} ${yo}, ${this._config.target} .${go}`, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, P.on(this._scrollElement, fo, () => this._process()), this.refresh(), this._process()
        }
        static get Default() {
            return co
        }
        static get DATA_KEY() {
            return ao
        }
        refresh() {
            const t = this._scrollElement === this._scrollElement.window ? To : Ao,
                e = "auto" === this._config.method ? t : this._config.method,
                i = e === Ao ? this._getScrollTop() : 0;
            this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), et.find(this._selector).map(t => {
                const s = n(t),
                    o = s ? et.findOne(s) : null;
                if (o) {
                    const t = o.getBoundingClientRect();
                    if (t.width || t.height) return [tt[e](o).top + i, s]
                }
                return null
            }).filter(t => t).sort((t, e) => t[0] - e[0]).forEach(t => {
                this._offsets.push(t[0]), this._targets.push(t[1])
            })
        }
        dispose() {
            super.dispose(), P.off(this._scrollElement, lo), this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
        }
        _getConfig(t) {
            if ("string" != typeof (t = {
                ...co,
                ...tt.getDataAttributes(this._element),
                ..."object" == typeof t && t ? t : {}
            }).target && a(t.target)) {
                let {
                    id: i
                } = t.target;
                i || (i = e(ro), t.target.id = i), t.target = `#${i}`
            }
            return c(ro, t, ho), t
        }
        _getScrollTop() {
            return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
        }
        _getScrollHeight() {
            return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
        }
        _getOffsetHeight() {
            return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
        }
        _process() {
            const t = this._getScrollTop() + this._config.offset,
                e = this._getScrollHeight(),
                i = this._config.offset + e - this._getOffsetHeight();
            if (this._scrollHeight !== e && this.refresh(), t >= i) {
                const t = this._targets[this._targets.length - 1];
                this._activeTarget !== t && this._activate(t)
            } else {
                if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
                for (let e = this._offsets.length; e--;) {
                    this._activeTarget !== this._targets[e] && t >= this._offsets[e] && (void 0 === this._offsets[e + 1] || t < this._offsets[e + 1]) && this._activate(this._targets[e])
                }
            }
        }
        _activate(t) {
            this._activeTarget = t, this._clear();
            const e = this._selector.split(",").map(e => `${e}[data-bs-target="${t}"],${e}[href="${t}"]`),
                i = et.findOne(e.join(","));
            i.classList.contains(go) ? (et.findOne(Eo, i.closest(wo)).classList.add(mo), i.classList.add(mo)) : (i.classList.add(mo), et.parents(i, _o).forEach(t => {
                et.prev(t, `${vo}, ${yo}`).forEach(t => t.classList.add(mo)), et.prev(t, bo).forEach(t => {
                    et.children(t, vo).forEach(t => t.classList.add(mo))
                })
            })), P.trigger(this._scrollElement, uo, {
                relatedTarget: t
            })
        }
        _clear() {
            et.find(this._selector).filter(t => t.classList.contains(mo)).forEach(t => t.classList.remove(mo))
        }
        static jQueryInterface(t) {
            return this.each(function () {
                const e = Lo.getInstance(this) || new Lo(this, "object" == typeof t ? t : {});
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            })
        }
    }
    P.on(window, po, () => {
        et.find('[data-bs-spy="scroll"]').forEach(t => new Lo(t))
    }), _(ro, Lo);
    const Oo = "bs.tab",
        $o = `.${Oo}`,
        Do = `hide${$o}`,
        ko = `hidden${$o}`,
        xo = `show${$o}`,
        Co = `shown${$o}`,
        So = `click${$o}.data-api`,
        No = "dropdown-menu",
        jo = "active",
        Io = "fade",
        Po = "show",
        Mo = ".dropdown",
        Ho = ".nav, .list-group",
        Ro = ".active",
        Bo = ":scope > li > .active",
        Wo = ".dropdown-toggle",
        zo = ":scope > .dropdown-menu .active";
    class Uo extends H {
        static get DATA_KEY() {
            return Oo
        }
        show() {
            if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains(jo)) return;
            let t;
            const e = s(this._element),
                i = this._element.closest(Ho);
            if (i) {
                const e = "UL" === i.nodeName || "OL" === i.nodeName ? Bo : Ro;
                t = (t = et.find(e, i))[t.length - 1]
            }
            const n = t ? P.trigger(t, Do, {
                relatedTarget: this._element
            }) : null;
            if (P.trigger(this._element, xo, {
                relatedTarget: t
            }).defaultPrevented || null !== n && n.defaultPrevented) return;
            this._activate(this._element, i);
            const o = () => {
                P.trigger(t, ko, {
                    relatedTarget: this._element
                }), P.trigger(this._element, Co, {
                    relatedTarget: t
                })
            };
            e ? this._activate(e, e.parentNode, o) : o()
        }
        _activate(t, e, i) {
            const n = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? et.children(e, Ro) : et.find(Bo, e))[0],
                s = i && n && n.classList.contains(Io),
                r = () => this._transitionComplete(t, n, i);
            if (n && s) {
                const t = o(n);
                n.classList.remove(Po), P.one(n, "transitionend", r), l(n, t)
            } else r()
        }
        _transitionComplete(t, e, i) {
            if (e) {
                e.classList.remove(jo);
                const t = et.findOne(zo, e.parentNode);
                t && t.classList.remove(jo), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1)
            }
            t.classList.add(jo), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), p(t), t.classList.contains(Io) && t.classList.add(Po);
            let n = t.parentNode;
            if (n && "LI" === n.nodeName && (n = n.parentNode), n && n.classList.contains(No)) {
                const e = t.closest(Mo);
                e && et.find(Wo, e).forEach(t => t.classList.add(jo)), t.setAttribute("aria-expanded", !0)
            }
            i && i()
        }
        static jQueryInterface(t) {
            return this.each(function () {
                const e = y.get(this, Oo) || new Uo(this);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            })
        }
    }
    P.on(document, So, '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', function (t) {
        if (["A", "AREA"].includes(this.tagName) && t.preventDefault(), d(this)) return;
        (y.get(this, Oo) || new Uo(this)).show()
    }), _("tab", Uo);
    const Fo = "toast",
        Ko = "bs.toast",
        Yo = `.${Ko}`,
        qo = `click.dismiss${Yo}`,
        Vo = `hide${Yo}`,
        Xo = `hidden${Yo}`,
        Qo = `show${Yo}`,
        Go = `shown${Yo}`,
        Zo = "fade",
        Jo = "hide",
        tr = "show",
        er = "showing",
        ir = {
            animation: "boolean",
            autohide: "boolean",
            delay: "number"
        },
        nr = {
            animation: !0,
            autohide: !0,
            delay: 5e3
        },
        sr = '[data-bs-dismiss="toast"]';
    class or extends H {
        constructor(t, e) {
            super(t), this._config = this._getConfig(e), this._timeout = null, this._setListeners()
        }
        static get DefaultType() {
            return ir
        }
        static get Default() {
            return nr
        }
        static get DATA_KEY() {
            return Ko
        }
        show() {
            if (P.trigger(this._element, Qo).defaultPrevented) return;
            this._clearTimeout(), this._config.animation && this._element.classList.add(Zo);
            const t = () => {
                this._element.classList.remove(er), this._element.classList.add(tr), P.trigger(this._element, Go), this._config.autohide && (this._timeout = setTimeout(() => {
                    this.hide()
                }, this._config.delay))
            };
            if (this._element.classList.remove(Jo), p(this._element), this._element.classList.add(er), this._config.animation) {
                const e = o(this._element);
                P.one(this._element, "transitionend", t), l(this._element, e)
            } else t()
        }
        hide() {
            if (!this._element.classList.contains(tr)) return;
            if (P.trigger(this._element, Vo).defaultPrevented) return;
            const t = () => {
                this._element.classList.add(Jo), P.trigger(this._element, Xo)
            };
            if (this._element.classList.remove(tr), this._config.animation) {
                const e = o(this._element);
                P.one(this._element, "transitionend", t), l(this._element, e)
            } else t()
        }
        dispose() {
            this._clearTimeout(), this._element.classList.contains(tr) && this._element.classList.remove(tr), super.dispose(), this._config = null
        }
        _getConfig(t) {
            return t = {
                ...nr,
                ...tt.getDataAttributes(this._element),
                ..."object" == typeof t && t ? t : {}
            }, c(Fo, t, this.constructor.DefaultType), t
        }
        _setListeners() {
            P.on(this._element, qo, sr, () => this.hide())
        }
        _clearTimeout() {
            clearTimeout(this._timeout), this._timeout = null
        }
        static jQueryInterface(t) {
            return this.each(function () {
                let e = y.get(this, Ko);
                if (e || (e = new or(this, "object" == typeof t && t)), "string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t](this)
                }
            })
        }
    }
    return _(Fo, or), {
        Alert: q,
        Button: G,
        Carousel: Kt,
        Collapse: he,
        Dropdown: gn,
        Modal: es,
        Offcanvas: bs,
        Popover: oo,
        ScrollSpy: Lo,
        Tab: Uo,
        Toast: or,
        Tooltip: Ys
    }
});