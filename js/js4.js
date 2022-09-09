//feather.js
! function (e, n) {
    "object" == typeof exports && "object" == typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define([], n) : "object" == typeof exports ? exports.feather = n() : e.feather = n()
}("undefined" != typeof self ? self : this, function () {
    return function (e) {
        var n = {};

        function t(o) {
            if (n[o]) return n[o].exports;
            var i = n[o] = {
                i: o,
                l: !1,
                exports: {}
            };
            return e[o].call(i.exports, i, i.exports, t), i.l = !0, i.exports
        }
        return t.m = e, t.c = n, t.d = function (e, n, o) {
            t.o(e, n) || Object.defineProperty(e, n, {
                configurable: !1,
                enumerable: !0,
                get: o
            })
        }, t.r = function (e) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, t.n = function (e) {
            var n = e && e.__esModule ? function () {
                return e.default
            } : function () {
                return e
            };
            return t.d(n, "a", n), n
        }, t.o = function (e, n) {
            return Object.prototype.hasOwnProperty.call(e, n)
        }, t.p = "", t(t.s = 0)
    }({
        "./dist/icons.json": function (e) {
            e.exports = {
                activity: '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>',
                airplay: '<path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path><polygon points="12 15 17 21 7 21 12 15"></polygon>',
                "alert-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>',
                "alert-octagon": '<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>',
                "alert-triangle": '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line>',
                "align-center": '<line x1="18" y1="10" x2="6" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="18" y1="18" x2="6" y2="18"></line>',
                "align-justify": '<line x1="21" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="3" y2="18"></line>',
                "align-left": '<line x1="17" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="17" y1="18" x2="3" y2="18"></line>',
                "align-right": '<line x1="21" y1="10" x2="7" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="7" y2="18"></line>',
                anchor: '<circle cx="12" cy="5" r="3"></circle><line x1="12" y1="22" x2="12" y2="8"></line><path d="M5 12H2a10 10 0 0 0 20 0h-3"></path>',
                aperture: '<circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line>',
                archive: '<polyline points="21 8 21 21 3 21 3 8"></polyline><rect x="1" y="3" width="22" height="5"></rect><line x1="10" y1="12" x2="14" y2="12"></line>',
                "arrow-down-circle": '<circle cx="12" cy="12" r="10"></circle><polyline points="8 12 12 16 16 12"></polyline><line x1="12" y1="8" x2="12" y2="16"></line>',
                "arrow-down-left": '<line x1="17" y1="7" x2="7" y2="17"></line><polyline points="17 17 7 17 7 7"></polyline>',
                "arrow-down-right": '<line x1="7" y1="7" x2="17" y2="17"></line><polyline points="17 7 17 17 7 17"></polyline>',
                "arrow-down": '<line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline>',
                "arrow-left-circle": '<circle cx="12" cy="12" r="10"></circle><polyline points="12 8 8 12 12 16"></polyline><line x1="16" y1="12" x2="8" y2="12"></line>',
                "arrow-left": '<line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline>',
                "arrow-right-circle": '<circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line>',
                "arrow-right": '<line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline>',
                "arrow-up-circle": '<circle cx="12" cy="12" r="10"></circle><polyline points="16 12 12 8 8 12"></polyline><line x1="12" y1="16" x2="12" y2="8"></line>',
                "arrow-up-left": '<line x1="17" y1="17" x2="7" y2="7"></line><polyline points="7 17 7 7 17 7"></polyline>',
                "arrow-up-right": '<line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline>',
                "arrow-up": '<line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline>',
                "at-sign": '<circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>',
                award: '<circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>',
                "bar-chart-2": '<line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line>',
                "bar-chart": '<line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line>',
                "battery-charging": '<path d="M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19"></path><line x1="23" y1="13" x2="23" y2="11"></line><polyline points="11 6 7 12 13 12 9 18"></polyline>',
                battery: '<rect x="1" y="6" width="18" height="12" rx="2" ry="2"></rect><line x1="23" y1="13" x2="23" y2="11"></line>',
                "bell-off": '<path d="M13.73 21a2 2 0 0 1-3.46 0"></path><path d="M18.63 13A17.89 17.89 0 0 1 18 8"></path><path d="M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"></path><path d="M18 8a6 6 0 0 0-9.33-5"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
                bell: '<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path>',
                bluetooth: '<polyline points="6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5"></polyline>',
                bold: '<path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path><path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path>',
                "book-open": '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>',
                book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>',
                bookmark: '<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>',
                box: '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',
                briefcase: '<rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>',
                calendar: '<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>',
                "camera-off": '<line x1="1" y1="1" x2="23" y2="23"></line><path d="M21 21H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3m3-3h6l2 3h4a2 2 0 0 1 2 2v9.34m-7.72-2.06a4 4 0 1 1-5.56-5.56"></path>',
                camera: '<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle>',
                cast: '<path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path><line x1="2" y1="20" x2="2.01" y2="20"></line>',
                "check-circle": '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>',
                "check-square": '<polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>',
                check: '<polyline points="20 6 9 17 4 12"></polyline>',
                "chevron-down": '<polyline points="6 9 12 15 18 9"></polyline>',
                "chevron-left": '<polyline points="15 18 9 12 15 6"></polyline>',
                "chevron-right": '<polyline points="9 18 15 12 9 6"></polyline>',
                "chevron-up": '<polyline points="18 15 12 9 6 15"></polyline>',
                "chevrons-down": '<polyline points="7 13 12 18 17 13"></polyline><polyline points="7 6 12 11 17 6"></polyline>',
                "chevrons-left": '<polyline points="11 17 6 12 11 7"></polyline><polyline points="18 17 13 12 18 7"></polyline>',
                "chevrons-right": '<polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline>',
                "chevrons-up": '<polyline points="17 11 12 6 7 11"></polyline><polyline points="17 18 12 13 7 18"></polyline>',
                chrome: '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="21.17" y1="8" x2="12" y2="8"></line><line x1="3.95" y1="6.06" x2="8.54" y2="14"></line><line x1="10.88" y1="21.94" x2="15.46" y2="14"></line>',
                circle: '<circle cx="12" cy="12" r="10"></circle>',
                clipboard: '<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>',
                clock: '<circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>',
                "cloud-drizzle": '<line x1="8" y1="19" x2="8" y2="21"></line><line x1="8" y1="13" x2="8" y2="15"></line><line x1="16" y1="19" x2="16" y2="21"></line><line x1="16" y1="13" x2="16" y2="15"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="12" y1="15" x2="12" y2="17"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>',
                "cloud-lightning": '<path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9"></path><polyline points="13 11 9 17 15 17 11 23"></polyline>',
                "cloud-off": '<path d="M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
                "cloud-rain": '<line x1="16" y1="13" x2="16" y2="21"></line><line x1="8" y1="13" x2="8" y2="21"></line><line x1="12" y1="15" x2="12" y2="23"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>',
                "cloud-snow": '<path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"></path><line x1="8" y1="16" x2="8.01" y2="16"></line><line x1="8" y1="20" x2="8.01" y2="20"></line><line x1="12" y1="18" x2="12.01" y2="18"></line><line x1="12" y1="22" x2="12.01" y2="22"></line><line x1="16" y1="16" x2="16.01" y2="16"></line><line x1="16" y1="20" x2="16.01" y2="20"></line>',
                cloud: '<path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>',
                code: '<polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>',
                codepen: '<polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon><line x1="12" y1="22" x2="12" y2="15.5"></line><polyline points="22 8.5 12 15.5 2 8.5"></polyline><polyline points="2 15.5 12 8.5 22 15.5"></polyline><line x1="12" y1="2" x2="12" y2="8.5"></line>',
                codesandbox: '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline><polyline points="7.5 19.79 7.5 14.6 3 12"></polyline><polyline points="21 12 16.5 14.6 16.5 19.79"></polyline><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',
                coffee: '<path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line>',
                columns: '<path d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"></path>',
                command: '<path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>',
                compass: '<circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>',
                copy: '<rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>',
                "corner-down-left": '<polyline points="9 10 4 15 9 20"></polyline><path d="M20 4v7a4 4 0 0 1-4 4H4"></path>',
                "corner-down-right": '<polyline points="15 10 20 15 15 20"></polyline><path d="M4 4v7a4 4 0 0 0 4 4h12"></path>',
                "corner-left-down": '<polyline points="14 15 9 20 4 15"></polyline><path d="M20 4h-7a4 4 0 0 0-4 4v12"></path>',
                "corner-left-up": '<polyline points="14 9 9 4 4 9"></polyline><path d="M20 20h-7a4 4 0 0 1-4-4V4"></path>',
                "corner-right-down": '<polyline points="10 15 15 20 20 15"></polyline><path d="M4 4h7a4 4 0 0 1 4 4v12"></path>',
                "corner-right-up": '<polyline points="10 9 15 4 20 9"></polyline><path d="M4 20h7a4 4 0 0 0 4-4V4"></path>',
                "corner-up-left": '<polyline points="9 14 4 9 9 4"></polyline><path d="M20 20v-7a4 4 0 0 0-4-4H4"></path>',
                "corner-up-right": '<polyline points="15 14 20 9 15 4"></polyline><path d="M4 20v-7a4 4 0 0 1 4-4h12"></path>',
                cpu: '<rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line>',
                "credit-card": '<rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line>',
                crop: '<path d="M6.13 1L6 16a2 2 0 0 0 2 2h15"></path><path d="M1 6.13L16 6a2 2 0 0 1 2 2v15"></path>',
                crosshair: '<circle cx="12" cy="12" r="10"></circle><line x1="22" y1="12" x2="18" y2="12"></line><line x1="6" y1="12" x2="2" y2="12"></line><line x1="12" y1="6" x2="12" y2="2"></line><line x1="12" y1="22" x2="12" y2="18"></line>',
                database: '<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>',
                delete: '<path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path><line x1="18" y1="9" x2="12" y2="15"></line><line x1="12" y1="9" x2="18" y2="15"></line>',
                disc: '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="3"></circle>',
                "divide-circle": '<line x1="8" y1="12" x2="16" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line><line x1="12" y1="8" x2="12" y2="8"></line><circle cx="12" cy="12" r="10"></circle>',
                "divide-square": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="8" y1="12" x2="16" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line><line x1="12" y1="8" x2="12" y2="8"></line>',
                divide: '<circle cx="12" cy="6" r="2"></circle><line x1="5" y1="12" x2="19" y2="12"></line><circle cx="12" cy="18" r="2"></circle>',
                "dollar-sign": '<line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>',
                "download-cloud": '<polyline points="8 17 12 21 16 17"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"></path>',
                download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line>',
                dribbble: '<circle cx="12" cy="12" r="10"></circle><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path>',
                droplet: '<path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>',
                "edit-2": '<path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>',
                "edit-3": '<path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>',
                edit: '<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>',
                "external-link": '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>',
                "eye-off": '<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
                eye: '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>',
                facebook: '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>',
                "fast-forward": '<polygon points="13 19 22 12 13 5 13 19"></polygon><polygon points="2 19 11 12 2 5 2 19"></polygon>',
                feather: '<path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17.5" y1="15" x2="9" y2="15"></line>',
                figma: '<path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path>',
                "file-minus": '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="9" y1="15" x2="15" y2="15"></line>',
                "file-plus": '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line>',
                "file-text": '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline>',
                file: '<path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline>',
                film: '<rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line>',
                filter: '<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>',
                flag: '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line>',
                "folder-minus": '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="9" y1="14" x2="15" y2="14"></line>',
                "folder-plus": '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="12" y1="11" x2="12" y2="17"></line><line x1="9" y1="14" x2="15" y2="14"></line>',
                folder: '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>',
                framer: '<path d="M5 16V9h14V2H5l14 14h-7m-7 0l7 7v-7m-7 0h7"></path>',
                frown: '<circle cx="12" cy="12" r="10"></circle><path d="M16 16s-1.5-2-4-2-4 2-4 2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>',
                gift: '<polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>',
                "git-branch": '<line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path>',
                "git-commit": '<circle cx="12" cy="12" r="4"></circle><line x1="1.05" y1="12" x2="7" y2="12"></line><line x1="17.01" y1="12" x2="22.96" y2="12"></line>',
                "git-merge": '<circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M6 21V9a9 9 0 0 0 9 9"></path>',
                "git-pull-request": '<circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M13 6h3a2 2 0 0 1 2 2v7"></path><line x1="6" y1="9" x2="6" y2="21"></line>',
                github: '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>',
                gitlab: '<path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"></path>',
                globe: '<circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>',
                grid: '<rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect>',
                "hard-drive": '<line x1="22" y1="12" x2="2" y2="12"></line><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path><line x1="6" y1="16" x2="6.01" y2="16"></line><line x1="10" y1="16" x2="10.01" y2="16"></line>',
                hash: '<line x1="4" y1="9" x2="20" y2="9"></line><line x1="4" y1="15" x2="20" y2="15"></line><line x1="10" y1="3" x2="8" y2="21"></line><line x1="16" y1="3" x2="14" y2="21"></line>',
                headphones: '<path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>',
                heart: '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>',
                "help-circle": '<circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line>',
                hexagon: '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>',
                home: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>',
                image: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline>',
                inbox: '<polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>',
                info: '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>',
                instagram: '<rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>',
                italic: '<line x1="19" y1="4" x2="10" y2="4"></line><line x1="14" y1="20" x2="5" y2="20"></line><line x1="15" y1="4" x2="9" y2="20"></line>',
                key: '<path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path>',
                layers: '<polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline>',
                layout: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line>',
                "life-buoy": '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line><line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line><line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line><line x1="14.83" y1="9.17" x2="18.36" y2="5.64"></line><line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line>',
                "link-2": '<path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"></path><line x1="8" y1="12" x2="16" y2="12"></line>',
                link: '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>',
                linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>',
                list: '<line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line>',
                loader: '<line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>',
                lock: '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path>',
                "log-in": '<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line>',
                "log-out": '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line>',
                mail: '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>',
                "map-pin": '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>',
                map: '<polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line>',
                "maximize-2": '<polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line>',
                maximize: '<path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>',
                meh: '<circle cx="12" cy="12" r="10"></circle><line x1="8" y1="15" x2="16" y2="15"></line><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>',
                menu: '<line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>',
                "message-circle": '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>',
                "message-square": '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>',
                "mic-off": '<line x1="1" y1="1" x2="23" y2="23"></line><path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"></path><path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line>',
                mic: '<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line>',
                "minimize-2": '<polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" y1="10" x2="21" y2="3"></line><line x1="3" y1="21" x2="10" y2="14"></line>',
                minimize: '<path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"></path>',
                "minus-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="8" y1="12" x2="16" y2="12"></line>',
                "minus-square": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="8" y1="12" x2="16" y2="12"></line>',
                minus: '<line x1="5" y1="12" x2="19" y2="12"></line>',
                monitor: '<rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line>',
                moon: '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>',
                "more-horizontal": '<circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle>',
                "more-vertical": '<circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle>',
                "mouse-pointer": '<path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path><path d="M13 13l6 6"></path>',
                move: '<polyline points="5 9 2 12 5 15"></polyline><polyline points="9 5 12 2 15 5"></polyline><polyline points="15 19 12 22 9 19"></polyline><polyline points="19 9 22 12 19 15"></polyline><line x1="2" y1="12" x2="22" y2="12"></line><line x1="12" y1="2" x2="12" y2="22"></line>',
                music: '<path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle>',
                "navigation-2": '<polygon points="12 2 19 21 12 17 5 21 12 2"></polygon>',
                navigation: '<polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>',
                octagon: '<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>',
                package: '<line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',
                paperclip: '<path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>',
                "pause-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="10" y1="15" x2="10" y2="9"></line><line x1="14" y1="15" x2="14" y2="9"></line>',
                pause: '<rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect>',
                "pen-tool": '<path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle>',
                percent: '<line x1="19" y1="5" x2="5" y2="19"></line><circle cx="6.5" cy="6.5" r="2.5"></circle><circle cx="17.5" cy="17.5" r="2.5"></circle>',
                "phone-call": '<path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
                "phone-forwarded": '<polyline points="19 1 23 5 19 9"></polyline><line x1="15" y1="5" x2="23" y2="5"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
                "phone-incoming": '<polyline points="16 2 16 8 22 8"></polyline><line x1="23" y1="1" x2="16" y2="8"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
                "phone-missed": '<line x1="23" y1="1" x2="17" y2="7"></line><line x1="17" y1="1" x2="23" y2="7"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
                "phone-off": '<path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"></path><line x1="23" y1="1" x2="1" y2="23"></line>',
                "phone-outgoing": '<polyline points="23 7 23 1 17 1"></polyline><line x1="16" y1="8" x2="23" y2="1"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
                phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
                "pie-chart": '<path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path>',
                "play-circle": '<circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon>',
                play: '<polygon points="5 3 19 12 5 21 5 3"></polygon>',
                "plus-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line>',
                "plus-square": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line>',
                plus: '<line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>',
                pocket: '<path d="M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z"></path><polyline points="8 10 12 14 16 10"></polyline>',
                power: '<path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path><line x1="12" y1="2" x2="12" y2="12"></line>',
                printer: '<polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect>',
                radio: '<circle cx="12" cy="12" r="2"></circle><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path>',
                "refresh-ccw": '<polyline points="1 4 1 10 7 10"></polyline><polyline points="23 20 23 14 17 14"></polyline><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path>',
                "refresh-cw": '<polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>',
                repeat: '<polyline points="17 1 21 5 17 9"></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><polyline points="7 23 3 19 7 15"></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3"></path>',
                rewind: '<polygon points="11 19 2 12 11 5 11 19"></polygon><polygon points="22 19 13 12 22 5 22 19"></polygon>',
                "rotate-ccw": '<polyline points="1 4 1 10 7 10"></polyline><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>',
                "rotate-cw": '<polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>',
                rss: '<path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle>',
                save: '<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline>',
                scissors: '<circle cx="6" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><line x1="20" y1="4" x2="8.12" y2="15.88"></line><line x1="14.47" y1="14.48" x2="20" y2="20"></line><line x1="8.12" y1="8.12" x2="12" y2="12"></line>',
                search: '<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>',
                send: '<line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>',
                server: '<rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line>',
                settings: '<circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>',
                "share-2": '<circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>',
                share: '<path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line>',
                "shield-off": '<path d="M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18"></path><path d="M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
                shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>',
                "shopping-bag": '<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path>',
                "shopping-cart": '<circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>',
                shuffle: '<polyline points="16 3 21 3 21 8"></polyline><line x1="4" y1="20" x2="21" y2="3"></line><polyline points="21 16 21 21 16 21"></polyline><line x1="15" y1="15" x2="21" y2="21"></line><line x1="4" y1="4" x2="9" y2="9"></line>',
                sidebar: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line>',
                "skip-back": '<polygon points="19 20 9 12 19 4 19 20"></polygon><line x1="5" y1="19" x2="5" y2="5"></line>',
                "skip-forward": '<polygon points="5 4 15 12 5 20 5 4"></polygon><line x1="19" y1="5" x2="19" y2="19"></line>',
                slack: '<path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"></path><path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path><path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"></path><path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"></path><path d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"></path><path d="M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"></path><path d="M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z"></path><path d="M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z"></path>',
                slash: '<circle cx="12" cy="12" r="10"></circle><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>',
                sliders: '<line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line>',
                smartphone: '<rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>',
                smile: '<circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>',
                speaker: '<rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><circle cx="12" cy="14" r="4"></circle><line x1="12" y1="6" x2="12.01" y2="6"></line>',
                square: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>',
                star: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>',
                "stop-circle": '<circle cx="12" cy="12" r="10"></circle><rect x="9" y="9" width="6" height="6"></rect>',
                sun: '<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>',
                sunrise: '<path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="2" x2="12" y2="9"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="8 6 12 2 16 6"></polyline>',
                sunset: '<path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="9" x2="12" y2="2"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="16 5 12 9 8 5"></polyline>',
                tablet: '<rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>',
                tag: '<path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line>',
                target: '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle>',
                terminal: '<polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line>',
                thermometer: '<path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path>',
                "thumbs-down": '<path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path>',
                "thumbs-up": '<path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>',
                "toggle-left": '<rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect><circle cx="8" cy="12" r="3"></circle>',
                "toggle-right": '<rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect><circle cx="16" cy="12" r="3"></circle>',
                tool: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>',
                "trash-2": '<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line>',
                trash: '<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>',
                trello: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><rect x="7" y="7" width="3" height="9"></rect><rect x="14" y="7" width="3" height="5"></rect>',
                "trending-down": '<polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline><polyline points="17 18 23 18 23 12"></polyline>',
                "trending-up": '<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline>',
                triangle: '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>',
                truck: '<rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle>',
                tv: '<rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect><polyline points="17 2 12 7 7 2"></polyline>',
                twitch: '<path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"></path>',
                twitter: '<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>',
                type: '<polyline points="4 7 4 4 20 4 20 7"></polyline><line x1="9" y1="20" x2="15" y2="20"></line><line x1="12" y1="4" x2="12" y2="20"></line>',
                umbrella: '<path d="M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7"></path>',
                underline: '<path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3"></path><line x1="4" y1="21" x2="20" y2="21"></line>',
                unlock: '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path>',
                "upload-cloud": '<polyline points="16 16 12 12 8 16"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path><polyline points="16 16 12 12 8 16"></polyline>',
                upload: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line>',
                "user-check": '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline>',
                "user-minus": '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="23" y1="11" x2="17" y2="11"></line>',
                "user-plus": '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line>',
                "user-x": '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="18" y1="8" x2="23" y2="13"></line><line x1="23" y1="8" x2="18" y2="13"></line>',
                user: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>',
                users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>',
                "video-off": '<path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
                video: '<polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>',
                voicemail: '<circle cx="5.5" cy="11.5" r="4.5"></circle><circle cx="18.5" cy="11.5" r="4.5"></circle><line x1="5.5" y1="16" x2="18.5" y2="16"></line>',
                "volume-1": '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>',
                "volume-2": '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>',
                "volume-x": '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line>',
                volume: '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>',
                watch: '<circle cx="12" cy="12" r="7"></circle><polyline points="12 9 12 12 13.5 13.5"></polyline><path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83"></path>',
                "wifi-off": '<line x1="1" y1="1" x2="23" y2="23"></line><path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55"></path><path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39"></path><path d="M10.71 5.05A16 16 0 0 1 22.58 9"></path><path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line>',
                wifi: '<path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line>',
                wind: '<path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path>',
                "x-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>',
                "x-octagon": '<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>',
                "x-square": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="9" x2="15" y2="15"></line><line x1="15" y1="9" x2="9" y2="15"></line>',
                x: '<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>',
                youtube: '<path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>',
                "zap-off": '<polyline points="12.41 6.75 13 2 10.57 4.92"></polyline><polyline points="18.57 12.91 21 10 15.66 10"></polyline><polyline points="8 8 3 14 12 14 11 22 16 16"></polyline><line x1="1" y1="1" x2="23" y2="23"></line>',
                zap: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>',
                "zoom-in": '<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line>',
                "zoom-out": '<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="8" y1="11" x2="14" y2="11"></line>'
            }
        },
        "./node_modules/classnames/dedupe.js": function (e, n, t) {
            var o;
            ! function () {
                "use strict";
                var t = function () {
                    function e() { }

                    function n(e, n) {
                        for (var t = n.length, o = 0; o < t; ++o) i(e, n[o])
                    }
                    e.prototype = Object.create(null);
                    var t = {}.hasOwnProperty;
                    var o = /\s+/;

                    function i(e, i) {
                        if (i) {
                            var l = typeof i;
                            "string" === l ? function (e, n) {
                                for (var t = n.split(o), i = t.length, l = 0; l < i; ++l) e[t[l]] = !0
                            }(e, i) : Array.isArray(i) ? n(e, i) : "object" === l ? function (e, n) {
                                for (var o in n) t.call(n, o) && (e[o] = !!n[o])
                            }(e, i) : "number" === l && function (e, n) {
                                e[n] = !0
                            }(e, i)
                        }
                    }
                    return function () {
                        for (var t = arguments.length, o = Array(t), i = 0; i < t; i++) o[i] = arguments[i];
                        var l = new e;
                        n(l, o);
                        var r = [];
                        for (var a in l) l[a] && r.push(a);
                        return r.join(" ")
                    }
                }();
                void 0 !== e && e.exports ? e.exports = t : void 0 === (o = function () {
                    return t
                }.apply(n, [])) || (e.exports = o)
            }()
        },
        "./node_modules/core-js/es/array/from.js": function (e, n, t) {
            t("./node_modules/core-js/modules/es.string.iterator.js"), t("./node_modules/core-js/modules/es.array.from.js");
            var o = t("./node_modules/core-js/internals/path.js");
            e.exports = o.Array.from
        },
        "./node_modules/core-js/internals/a-function.js": function (e, n) {
            e.exports = function (e) {
                if ("function" != typeof e) throw TypeError(String(e) + " is not a function");
                return e
            }
        },
        "./node_modules/core-js/internals/an-object.js": function (e, n, t) {
            var o = t("./node_modules/core-js/internals/is-object.js");
            e.exports = function (e) {
                if (!o(e)) throw TypeError(String(e) + " is not an object");
                return e
            }
        },
        "./node_modules/core-js/internals/array-from.js": function (e, n, t) {
            "use strict";
            var o = t("./node_modules/core-js/internals/bind-context.js"),
                i = t("./node_modules/core-js/internals/to-object.js"),
                l = t("./node_modules/core-js/internals/call-with-safe-iteration-closing.js"),
                r = t("./node_modules/core-js/internals/is-array-iterator-method.js"),
                a = t("./node_modules/core-js/internals/to-length.js"),
                s = t("./node_modules/core-js/internals/create-property.js"),
                c = t("./node_modules/core-js/internals/get-iterator-method.js");
            e.exports = function (e) {
                var n, t, p, y, d = i(e),
                    u = "function" == typeof this ? this : Array,
                    h = arguments.length,
                    x = h > 1 ? arguments[1] : void 0,
                    m = void 0 !== x,
                    f = 0,
                    j = c(d);
                if (m && (x = o(x, h > 2 ? arguments[2] : void 0, 2)), null == j || u == Array && r(j))
                    for (t = new u(n = a(d.length)); n > f; f++) s(t, f, m ? x(d[f], f) : d[f]);
                else
                    for (y = j.call(d), t = new u; !(p = y.next()).done; f++) s(t, f, m ? l(y, x, [p.value, f], !0) : p.value);
                return t.length = f, t
            }
        },
        "./node_modules/core-js/internals/array-includes.js": function (e, n, t) {
            var o = t("./node_modules/core-js/internals/to-indexed-object.js"),
                i = t("./node_modules/core-js/internals/to-length.js"),
                l = t("./node_modules/core-js/internals/to-absolute-index.js");
            e.exports = function (e) {
                return function (n, t, r) {
                    var a, s = o(n),
                        c = i(s.length),
                        p = l(r, c);
                    if (e && t != t) {
                        for (; c > p;)
                            if ((a = s[p++]) != a) return !0
                    } else
                        for (; c > p; p++)
                            if ((e || p in s) && s[p] === t) return e || p || 0;
                    return !e && -1
                }
            }
        },
        "./node_modules/core-js/internals/bind-context.js": function (e, n, t) {
            var o = t("./node_modules/core-js/internals/a-function.js");
            e.exports = function (e, n, t) {
                if (o(e), void 0 === n) return e;
                switch (t) {
                    case 0:
                        return function () {
                            return e.call(n)
                        };
                    case 1:
                        return function (t) {
                            return e.call(n, t)
                        };
                    case 2:
                        return function (t, o) {
                            return e.call(n, t, o)
                        };
                    case 3:
                        return function (t, o, i) {
                            return e.call(n, t, o, i)
                        }
                }
                return function () {
                    return e.apply(n, arguments)
                }
            }
        },
        "./node_modules/core-js/internals/call-with-safe-iteration-closing.js": function (e, n, t) {
            var o = t("./node_modules/core-js/internals/an-object.js");
            e.exports = function (e, n, t, i) {
                try {
                    return i ? n(o(t)[0], t[1]) : n(t)
                } catch (n) {
                    var l = e.return;
                    throw void 0 !== l && o(l.call(e)), n
                }
            }
        },
        "./node_modules/core-js/internals/check-correctness-of-iteration.js": function (e, n, t) {
            var o = t("./node_modules/core-js/internals/well-known-symbol.js")("iterator"),
                i = !1;
            try {
                var l = 0,
                    r = {
                        next: function () {
                            return {
                                done: !!l++
                            }
                        },
                        return: function () {
                            i = !0
                        }
                    };
                r[o] = function () {
                    return this
                }, Array.from(r, function () {
                    throw 2
                })
            } catch (e) { }
            e.exports = function (e, n) {
                if (!n && !i) return !1;
                var t = !1;
                try {
                    var l = {};
                    l[o] = function () {
                        return {
                            next: function () {
                                return {
                                    done: t = !0
                                }
                            }
                        }
                    }, e(l)
                } catch (e) { }
                return t
            }
        },
        "./node_modules/core-js/internals/classof-raw.js": function (e, n) {
            var t = {}.toString;
            e.exports = function (e) {
                return t.call(e).slice(8, -1)
            }
        },
        "./node_modules/core-js/internals/classof.js": function (e, n, t) {
            var o = t("./node_modules/core-js/internals/classof-raw.js"),
                i = t("./node_modules/core-js/internals/well-known-symbol.js")("toStringTag"),
                l = "Arguments" == o(function () {
                    return arguments
                }());
            e.exports = function (e) {
                var n, t, r;
                return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (t = function (e, n) {
                    try {
                        return e[n]
                    } catch (e) { }
                }(n = Object(e), i)) ? t : l ? o(n) : "Object" == (r = o(n)) && "function" == typeof n.callee ? "Arguments" : r
            }
        },
        "./node_modules/core-js/internals/copy-constructor-properties.js": function (e, n, t) {
            var o = t("./node_modules/core-js/internals/has.js"),
                i = t("./node_modules/core-js/internals/own-keys.js"),
                l = t("./node_modules/core-js/internals/object-get-own-property-descriptor.js"),
                r = t("./node_modules/core-js/internals/object-define-property.js");
            e.exports = function (e, n) {
                for (var t = i(n), a = r.f, s = l.f, c = 0; c < t.length; c++) {
                    var p = t[c];
                    o(e, p) || a(e, p, s(n, p))
                }
            }
        },
        "./node_modules/core-js/internals/correct-prototype-getter.js": function (e, n, t) {
            var o = t("./node_modules/core-js/internals/fails.js");
            e.exports = !o(function () {
                function e() { }
                return e.prototype.constructor = null, Object.getPrototypeOf(new e) !== e.prototype
            })
        },
        "./node_modules/core-js/internals/create-iterator-constructor.js": function (e, n, t) {
            "use strict";
            var o = t("./node_modules/core-js/internals/iterators-core.js").IteratorPrototype,
                i = t("./node_modules/core-js/internals/object-create.js"),
                l = t("./node_modules/core-js/internals/create-property-descriptor.js"),
                r = t("./node_modules/core-js/internals/set-to-string-tag.js"),
                a = t("./node_modules/core-js/internals/iterators.js"),
                s = function () {
                    return this
                };
            e.exports = function (e, n, t) {
                var c = n + " Iterator";
                return e.prototype = i(o, {
                    next: l(1, t)
                }), r(e, c, !1, !0), a[c] = s, e
            }
        },
        "./node_modules/core-js/internals/create-property-descriptor.js": function (e, n) {
            e.exports = function (e, n) {
                return {
                    enumerable: !(1 & e),
                    configurable: !(2 & e),
                    writable: !(4 & e),
                    value: n
                }
            }
        },
        "./node_modules/core-js/internals/create-property.js": function (e, n, t) {
            "use strict";
            var o = t("./node_modules/core-js/internals/to-primitive.js"),
                i = t("./node_modules/core-js/internals/object-define-property.js"),
                l = t("./node_modules/core-js/internals/create-property-descriptor.js");
            e.exports = function (e, n, t) {
                var r = o(n);
                r in e ? i.f(e, r, l(0, t)) : e[r] = t
            }
        },
        "./node_modules/core-js/internals/define-iterator.js": function (e, n, t) {
            "use strict";
            var o = t("./node_modules/core-js/internals/export.js"),
                i = t("./node_modules/core-js/internals/create-iterator-constructor.js"),
                l = t("./node_modules/core-js/internals/object-get-prototype-of.js"),
                r = t("./node_modules/core-js/internals/object-set-prototype-of.js"),
                a = t("./node_modules/core-js/internals/set-to-string-tag.js"),
                s = t("./node_modules/core-js/internals/hide.js"),
                c = t("./node_modules/core-js/internals/redefine.js"),
                p = t("./node_modules/core-js/internals/well-known-symbol.js"),
                y = t("./node_modules/core-js/internals/is-pure.js"),
                d = t("./node_modules/core-js/internals/iterators.js"),
                u = t("./node_modules/core-js/internals/iterators-core.js"),
                h = u.IteratorPrototype,
                x = u.BUGGY_SAFARI_ITERATORS,
                m = p("iterator"),
                f = function () {
                    return this
                };
            e.exports = function (e, n, t, p, u, j, g) {
                i(t, n, p);
                var v, b, _, w = function (e) {
                    if (e === u && H) return H;
                    if (!x && e in z) return z[e];
                    switch (e) {
                        case "keys":
                        case "values":
                        case "entries":
                            return function () {
                                return new t(this, e)
                            }
                    }
                    return function () {
                        return new t(this)
                    }
                },
                    M = n + " Iterator",
                    k = !1,
                    z = e.prototype,
                    A = z[m] || z["@@iterator"] || u && z[u],
                    H = !x && A || w(u),
                    V = "Array" == n && z.entries || A;
                if (V && (v = l(V.call(new e)), h !== Object.prototype && v.next && (y || l(v) === h || (r ? r(v, h) : "function" != typeof v[m] && s(v, m, f)), a(v, M, !0, !0), y && (d[M] = f))), "values" == u && A && "values" !== A.name && (k = !0, H = function () {
                    return A.call(this)
                }), y && !g || z[m] === H || s(z, m, H), d[n] = H, u)
                    if (b = {
                        values: w("values"),
                        keys: j ? H : w("keys"),
                        entries: w("entries")
                    }, g)
                        for (_ in b) !x && !k && _ in z || c(z, _, b[_]);
                    else o({
                        target: n,
                        proto: !0,
                        forced: x || k
                    }, b);
                return b
            }
        },
        "./node_modules/core-js/internals/descriptors.js": function (e, n, t) {
            var o = t("./node_modules/core-js/internals/fails.js");
            e.exports = !o(function () {
                return 7 != Object.defineProperty({}, "a", {
                    get: function () {
                        return 7
                    }
                }).a
            })
        },
        "./node_modules/core-js/internals/document-create-element.js": function (e, n, t) {
            var o = t("./node_modules/core-js/internals/global.js"),
                i = t("./node_modules/core-js/internals/is-object.js"),
                l = o.document,
                r = i(l) && i(l.createElement);
            e.exports = function (e) {
                return r ? l.createElement(e) : {}
            }
        },
        "./node_modules/core-js/internals/enum-bug-keys.js": function (e, n) {
            e.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
        },
        "./node_modules/core-js/internals/export.js": function (e, n, t) {
            var o = t("./node_modules/core-js/internals/global.js"),
                i = t("./node_modules/core-js/internals/object-get-own-property-descriptor.js").f,
                l = t("./node_modules/core-js/internals/hide.js"),
                r = t("./node_modules/core-js/internals/redefine.js"),
                a = t("./node_modules/core-js/internals/set-global.js"),
                s = t("./node_modules/core-js/internals/copy-constructor-properties.js"),
                c = t("./node_modules/core-js/internals/is-forced.js");
            e.exports = function (e, n) {
                var t, p, y, d, u, h = e.target,
                    x = e.global,
                    m = e.stat;
                if (t = x ? o : m ? o[h] || a(h, {}) : (o[h] || {}).prototype)
                    for (p in n) {
                        if (d = n[p], y = e.noTargetGet ? (u = i(t, p)) && u.value : t[p], !c(x ? p : h + (m ? "." : "#") + p, e.forced) && void 0 !== y) {
                            if (typeof d == typeof y) continue;
                            s(d, y)
                        } (e.sham || y && y.sham) && l(d, "sham", !0), r(t, p, d, e)
                    }
            }
        },
        "./node_modules/core-js/internals/fails.js": function (e, n) {
            e.exports = function (e) {
                try {
                    return !!e()
                } catch (e) {
                    return !0
                }
            }
        },
        "./node_modules/core-js/internals/function-to-string.js": function (e, n, t) {
            var o = t("./node_modules/core-js/internals/shared.js");
            e.exports = o("native-function-to-string", Function.toString)
        },
        "./node_modules/core-js/internals/get-iterator-method.js": function (e, n, t) {
            var o = t("./node_modules/core-js/internals/classof.js"),
                i = t("./node_modules/core-js/internals/iterators.js"),
                l = t("./node_modules/core-js/internals/well-known-symbol.js")("iterator");
            e.exports = function (e) {
                if (null != e) return e[l] || e["@@iterator"] || i[o(e)]
            }
        },
        "./node_modules/core-js/internals/global.js": function (e, n, t) {
            (function (n) {
                var t = "object",
                    o = function (e) {
                        return e && e.Math == Math && e
                    };
                e.exports = o(typeof globalThis == t && globalThis) || o(typeof window == t && window) || o(typeof self == t && self) || o(typeof n == t && n) || Function("return this")()
            }).call(this, t("./node_modules/webpack/buildin/global.js"))
        },
        "./node_modules/core-js/internals/has.js": function (e, n) {
            var t = {}.hasOwnProperty;
            e.exports = function (e, n) {
                return t.call(e, n)
            }
        },
        "./node_modules/core-js/internals/hidden-keys.js": function (e, n) {
            e.exports = {}
        },
        "./node_modules/core-js/internals/hide.js": function (e, n, t) {
            var o = t("./node_modules/core-js/internals/descriptors.js"),
                i = t("./node_modules/core-js/internals/object-define-property.js"),
                l = t("./node_modules/core-js/internals/create-property-descriptor.js");
            e.exports = o ? function (e, n, t) {
                return i.f(e, n, l(1, t))
            } : function (e, n, t) {
                return e[n] = t, e
            }
        },
        "./node_modules/core-js/internals/html.js": function (e, n, t) {
            var o = t("./node_modules/core-js/internals/global.js").document;
            e.exports = o && o.documentElement
        },
        "./node_modules/core-js/internals/ie8-dom-define.js": function (e, n, t) {
            var o = t("./node_modules/core-js/internals/descriptors.js"),
                i = t("./node_modules/core-js/internals/fails.js"),
                l = t("./node_modules/core-js/internals/document-create-element.js");
            e.exports = !o && !i(function () {
                return 7 != Object.defineProperty(l("div"), "a", {
                    get: function () {
                        return 7
                    }
                }).a
            })
        },
        "./node_modules/core-js/internals/indexed-object.js": function (e, n, t) {
            var o = t("./node_modules/core-js/internals/fails.js"),
                i = t("./node_modules/core-js/internals/classof-raw.js"),
                l = "".split;
            e.exports = o(function () {
                return !Object("z").propertyIsEnumerable(0)
            }) ? function (e) {
                return "String" == i(e) ? l.call(e, "") : Object(e)
            } : Object
        },
        "./node_modules/core-js/internals/internal-state.js": function (e, n, t) {
            var o, i, l, r = t("./node_modules/core-js/internals/native-weak-map.js"),
                a = t("./node_modules/core-js/internals/global.js"),
                s = t("./node_modules/core-js/internals/is-object.js"),
                c = t("./node_modules/core-js/internals/hide.js"),
                p = t("./node_modules/core-js/internals/has.js"),
                y = t("./node_modules/core-js/internals/shared-key.js"),
                d = t("./node_modules/core-js/internals/hidden-keys.js"),
                u = a.WeakMap;
            if (r) {
                var h = new u,
                    x = h.get,
                    m = h.has,
                    f = h.set;
                o = function (e, n) {
                    return f.call(h, e, n), n
                }, i = function (e) {
                    return x.call(h, e) || {}
                }, l = function (e) {
                    return m.call(h, e)
                }
            } else {
                var j = y("state");
                d[j] = !0, o = function (e, n) {
                    return c(e, j, n), n
                }, i = function (e) {
                    return p(e, j) ? e[j] : {}
                }, l = function (e) {
                    return p(e, j)
                }
            }
            e.exports = {
                set: o,
                get: i,
                has: l,
                enforce: function (e) {
                    return l(e) ? i(e) : o(e, {})
                },
                getterFor: function (e) {
                    return function (n) {
                        var t;
                        if (!s(n) || (t = i(n)).type !== e) throw TypeError("Incompatible receiver, " + e + " required");
                        return t
                    }
                }
            }
        },
        "./node_modules/core-js/internals/is-array-iterator-method.js": function (e, n, t) {
            var o = t("./node_modules/core-js/internals/well-known-symbol.js"),
                i = t("./node_modules/core-js/internals/iterators.js"),
                l = o("iterator"),
                r = Array.prototype;
            e.exports = function (e) {
                return void 0 !== e && (i.Array === e || r[l] === e)
            }
        },
        "./node_modules/core-js/internals/is-forced.js": function (e, n, t) {
            var o = t("./node_modules/core-js/internals/fails.js"),
                i = /#|\.prototype\./,
                l = function (e, n) {
                    var t = a[r(e)];
                    return t == c || t != s && ("function" == typeof n ? o(n) : !!n)
                },
                r = l.normalize = function (e) {
                    return String(e).replace(i, ".").toLowerCase()
                },
                a = l.data = {},
                s = l.NATIVE = "N",
                c = l.POLYFILL = "P";
            e.exports = l
        },
        "./node_modules/core-js/internals/is-object.js": function (e, n) {
            e.exports = function (e) {
                return "object" == typeof e ? null !== e : "function" == typeof e
            }
        },
        "./node_modules/core-js/internals/is-pure.js": function (e, n) {
            e.exports = !1
        },
        "./node_modules/core-js/internals/iterators-core.js": function (e, n, t) {
            "use strict";
            var o, i, l, r = t("./node_modules/core-js/internals/object-get-prototype-of.js"),
                a = t("./node_modules/core-js/internals/hide.js"),
                s = t("./node_modules/core-js/internals/has.js"),
                c = t("./node_modules/core-js/internals/well-known-symbol.js"),
                p = t("./node_modules/core-js/internals/is-pure.js"),
                y = c("iterator"),
                d = !1;
            [].keys && ("next" in (l = [].keys()) ? (i = r(r(l))) !== Object.prototype && (o = i) : d = !0), null == o && (o = {}), p || s(o, y) || a(o, y, function () {
                return this
            }), e.exports = {
                IteratorPrototype: o,
                BUGGY_SAFARI_ITERATORS: d
            }
        },
        "./node_modules/core-js/internals/iterators.js": function (e, n) {
            e.exports = {}
        },
        "./node_modules/core-js/internals/native-symbol.js": function (e, n, t) {
            var o = t("./node_modules/core-js/internals/fails.js");
            e.exports = !!Object.getOwnPropertySymbols && !o(function () {
                return !String(Symbol())
            })
        },
        "./node_modules/core-js/internals/native-weak-map.js": function (e, n, t) {
            var o = t("./node_modules/core-js/internals/global.js"),
                i = t("./node_modules/core-js/internals/function-to-string.js"),
                l = o.WeakMap;
            e.exports = "function" == typeof l && /native code/.test(i.call(l))
        },
        "./node_modules/core-js/internals/object-create.js": function (e, n, t) {
            var o = t("./node_modules/core-js/internals/an-object.js"),
                i = t("./node_modules/core-js/internals/object-define-properties.js"),
                l = t("./node_modules/core-js/internals/enum-bug-keys.js"),
                r = t("./node_modules/core-js/internals/hidden-keys.js"),
                a = t("./node_modules/core-js/internals/html.js"),
                s = t("./node_modules/core-js/internals/document-create-element.js"),
                c = t("./node_modules/core-js/internals/shared-key.js")("IE_PROTO"),
                p = function () { },
                y = function () {
                    var e, n = s("iframe"),
                        t = l.length;
                    for (n.style.display = "none", a.appendChild(n), n.src = String("javascript:"), (e = n.contentWindow.document).open(), e.write("<script>document.F=Object<\/script>"), e.close(), y = e.F; t--;) delete y.prototype[l[t]];
                    return y()
                };
            e.exports = Object.create || function (e, n) {
                var t;
                return null !== e ? (p.prototype = o(e), t = new p, p.prototype = null, t[c] = e) : t = y(), void 0 === n ? t : i(t, n)
            }, r[c] = !0
        },
        "./node_modules/core-js/internals/object-define-properties.js": function (e, n, t) {
            var o = t("./node_modules/core-js/internals/descriptors.js"),
                i = t("./node_modules/core-js/internals/object-define-property.js"),
                l = t("./node_modules/core-js/internals/an-object.js"),
                r = t("./node_modules/core-js/internals/object-keys.js");
            e.exports = o ? Object.defineProperties : function (e, n) {
                l(e);
                for (var t, o = r(n), a = o.length, s = 0; a > s;) i.f(e, t = o[s++], n[t]);
                return e
            }
        },
        "./node_modules/core-js/internals/object-define-property.js": function (e, n, t) {
            var o = t("./node_modules/core-js/internals/descriptors.js"),
                i = t("./node_modules/core-js/internals/ie8-dom-define.js"),
                l = t("./node_modules/core-js/internals/an-object.js"),
                r = t("./node_modules/core-js/internals/to-primitive.js"),
                a = Object.defineProperty;
            n.f = o ? a : function (e, n, t) {
                if (l(e), n = r(n, !0), l(t), i) try {
                    return a(e, n, t)
                } catch (e) { }
                if ("get" in t || "set" in t) throw TypeError("Accessors not supported");
                return "value" in t && (e[n] = t.value), e
            }
        },
        "./node_modules/core-js/internals/object-get-own-property-descriptor.js": function (e, n, t) {
            var o = t("./node_modules/core-js/internals/descriptors.js"),
                i = t("./node_modules/core-js/internals/object-property-is-enumerable.js"),
                l = t("./node_modules/core-js/internals/create-property-descriptor.js"),
                r = t("./node_modules/core-js/internals/to-indexed-object.js"),
                a = t("./node_modules/core-js/internals/to-primitive.js"),
                s = t("./node_modules/core-js/internals/has.js"),
                c = t("./node_modules/core-js/internals/ie8-dom-define.js"),
                p = Object.getOwnPropertyDescriptor;
            n.f = o ? p : function (e, n) {
                if (e = r(e), n = a(n, !0), c) try {
                    return p(e, n)
                } catch (e) { }
                if (s(e, n)) return l(!i.f.call(e, n), e[n])
            }
        },
        "./node_modules/core-js/internals/object-get-own-property-names.js": function (e, n, t) {
            var o = t("./node_modules/core-js/internals/object-keys-internal.js"),
                i = t("./node_modules/core-js/internals/enum-bug-keys.js").concat("length", "prototype");
            n.f = Object.getOwnPropertyNames || function (e) {
                return o(e, i)
            }
        },
        "./node_modules/core-js/internals/object-get-own-property-symbols.js": function (e, n) {
            n.f = Object.getOwnPropertySymbols
        },
        "./node_modules/core-js/internals/object-get-prototype-of.js": function (e, n, t) {
            var o = t("./node_modules/core-js/internals/has.js"),
                i = t("./node_modules/core-js/internals/to-object.js"),
                l = t("./node_modules/core-js/internals/shared-key.js"),
                r = t("./node_modules/core-js/internals/correct-prototype-getter.js"),
                a = l("IE_PROTO"),
                s = Object.prototype;
            e.exports = r ? Object.getPrototypeOf : function (e) {
                return e = i(e), o(e, a) ? e[a] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? s : null
            }
        },
        "./node_modules/core-js/internals/object-keys-internal.js": function (e, n, t) {
            var o = t("./node_modules/core-js/internals/has.js"),
                i = t("./node_modules/core-js/internals/to-indexed-object.js"),
                l = t("./node_modules/core-js/internals/array-includes.js"),
                r = t("./node_modules/core-js/internals/hidden-keys.js"),
                a = l(!1);
            e.exports = function (e, n) {
                var t, l = i(e),
                    s = 0,
                    c = [];
                for (t in l) !o(r, t) && o(l, t) && c.push(t);
                for (; n.length > s;) o(l, t = n[s++]) && (~a(c, t) || c.push(t));
                return c
            }
        },
        "./node_modules/core-js/internals/object-keys.js": function (e, n, t) {
            var o = t("./node_modules/core-js/internals/object-keys-internal.js"),
                i = t("./node_modules/core-js/internals/enum-bug-keys.js");
            e.exports = Object.keys || function (e) {
                return o(e, i)
            }
        },
        "./node_modules/core-js/internals/object-property-is-enumerable.js": function (e, n, t) {
            "use strict";
            var o = {}.propertyIsEnumerable,
                i = Object.getOwnPropertyDescriptor,
                l = i && !o.call({
                    1: 2
                }, 1);
            n.f = l ? function (e) {
                var n = i(this, e);
                return !!n && n.enumerable
            } : o
        },
        "./node_modules/core-js/internals/object-set-prototype-of.js": function (e, n, t) {
            var o = t("./node_modules/core-js/internals/validate-set-prototype-of-arguments.js");
            e.exports = Object.setPrototypeOf || ("__proto__" in {} ? function () {
                var e, n = !1,
                    t = {};
                try {
                    (e = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(t, []), n = t instanceof Array
                } catch (e) { }
                return function (t, i) {
                    return o(t, i), n ? e.call(t, i) : t.__proto__ = i, t
                }
            }() : void 0)
        },
        "./node_modules/core-js/internals/own-keys.js": function (e, n, t) {
            var o = t("./node_modules/core-js/internals/global.js"),
                i = t("./node_modules/core-js/internals/object-get-own-property-names.js"),
                l = t("./node_modules/core-js/internals/object-get-own-property-symbols.js"),
                r = t("./node_modules/core-js/internals/an-object.js"),
                a = o.Reflect;
            e.exports = a && a.ownKeys || function (e) {
                var n = i.f(r(e)),
                    t = l.f;
                return t ? n.concat(t(e)) : n
            }
        },
        "./node_modules/core-js/internals/path.js": function (e, n, t) {
            e.exports = t("./node_modules/core-js/internals/global.js")
        },
        "./node_modules/core-js/internals/redefine.js": function (e, n, t) {
            var o = t("./node_modules/core-js/internals/global.js"),
                i = t("./node_modules/core-js/internals/shared.js"),
                l = t("./node_modules/core-js/internals/hide.js"),
                r = t("./node_modules/core-js/internals/has.js"),
                a = t("./node_modules/core-js/internals/set-global.js"),
                s = t("./node_modules/core-js/internals/function-to-string.js"),
                c = t("./node_modules/core-js/internals/internal-state.js"),
                p = c.get,
                y = c.enforce,
                d = String(s).split("toString");
            i("inspectSource", function (e) {
                return s.call(e)
            }), (e.exports = function (e, n, t, i) {
                var s = !!i && !!i.unsafe,
                    c = !!i && !!i.enumerable,
                    p = !!i && !!i.noTargetGet;
                "function" == typeof t && ("string" != typeof n || r(t, "name") || l(t, "name", n), y(t).source = d.join("string" == typeof n ? n : "")), e !== o ? (s ? !p && e[n] && (c = !0) : delete e[n], c ? e[n] = t : l(e, n, t)) : c ? e[n] = t : a(n, t)
            })(Function.prototype, "toString", function () {
                return "function" == typeof this && p(this).source || s.call(this)
            })
        },
        "./node_modules/core-js/internals/require-object-coercible.js": function (e, n) {
            e.exports = function (e) {
                if (null == e) throw TypeError("Can't call method on " + e);
                return e
            }
        },
        "./node_modules/core-js/internals/set-global.js": function (e, n, t) {
            var o = t("./node_modules/core-js/internals/global.js"),
                i = t("./node_modules/core-js/internals/hide.js");
            e.exports = function (e, n) {
                try {
                    i(o, e, n)
                } catch (t) {
                    o[e] = n
                }
                return n
            }
        },
        "./node_modules/core-js/internals/set-to-string-tag.js": function (e, n, t) {
            var o = t("./node_modules/core-js/internals/object-define-property.js").f,
                i = t("./node_modules/core-js/internals/has.js"),
                l = t("./node_modules/core-js/internals/well-known-symbol.js")("toStringTag");
            e.exports = function (e, n, t) {
                e && !i(e = t ? e : e.prototype, l) && o(e, l, {
                    configurable: !0,
                    value: n
                })
            }
        },
        "./node_modules/core-js/internals/shared-key.js": function (e, n, t) {
            var o = t("./node_modules/core-js/internals/shared.js"),
                i = t("./node_modules/core-js/internals/uid.js"),
                l = o("keys");
            e.exports = function (e) {
                return l[e] || (l[e] = i(e))
            }
        },
        "./node_modules/core-js/internals/shared.js": function (e, n, t) {
            var o = t("./node_modules/core-js/internals/global.js"),
                i = t("./node_modules/core-js/internals/set-global.js"),
                l = t("./node_modules/core-js/internals/is-pure.js"),
                r = o["__core-js_shared__"] || i("__core-js_shared__", {});
            (e.exports = function (e, n) {
                return r[e] || (r[e] = void 0 !== n ? n : {})
            })("versions", []).push({
                version: "3.1.3",
                mode: l ? "pure" : "global",
                copyright: "Ã‚Â© 2019 Denis Pushkarev (zloirock.ru)"
            })
        },
        "./node_modules/core-js/internals/string-at.js": function (e, n, t) {
            var o = t("./node_modules/core-js/internals/to-integer.js"),
                i = t("./node_modules/core-js/internals/require-object-coercible.js");
            e.exports = function (e, n, t) {
                var l, r, a = String(i(e)),
                    s = o(n),
                    c = a.length;
                return s < 0 || s >= c ? t ? "" : void 0 : (l = a.charCodeAt(s)) < 55296 || l > 56319 || s + 1 === c || (r = a.charCodeAt(s + 1)) < 56320 || r > 57343 ? t ? a.charAt(s) : l : t ? a.slice(s, s + 2) : r - 56320 + (l - 55296 << 10) + 65536
            }
        },
        "./node_modules/core-js/internals/to-absolute-index.js": function (e, n, t) {
            var o = t("./node_modules/core-js/internals/to-integer.js"),
                i = Math.max,
                l = Math.min;
            e.exports = function (e, n) {
                var t = o(e);
                return t < 0 ? i(t + n, 0) : l(t, n)
            }
        },
        "./node_modules/core-js/internals/to-indexed-object.js": function (e, n, t) {
            var o = t("./node_modules/core-js/internals/indexed-object.js"),
                i = t("./node_modules/core-js/internals/require-object-coercible.js");
            e.exports = function (e) {
                return o(i(e))
            }
        },
        "./node_modules/core-js/internals/to-integer.js": function (e, n) {
            var t = Math.ceil,
                o = Math.floor;
            e.exports = function (e) {
                return isNaN(e = +e) ? 0 : (e > 0 ? o : t)(e)
            }
        },
        "./node_modules/core-js/internals/to-length.js": function (e, n, t) {
            var o = t("./node_modules/core-js/internals/to-integer.js"),
                i = Math.min;
            e.exports = function (e) {
                return e > 0 ? i(o(e), 9007199254740991) : 0
            }
        },
        "./node_modules/core-js/internals/to-object.js": function (e, n, t) {
            var o = t("./node_modules/core-js/internals/require-object-coercible.js");
            e.exports = function (e) {
                return Object(o(e))
            }
        },
        "./node_modules/core-js/internals/to-primitive.js": function (e, n, t) {
            var o = t("./node_modules/core-js/internals/is-object.js");
            e.exports = function (e, n) {
                if (!o(e)) return e;
                var t, i;
                if (n && "function" == typeof (t = e.toString) && !o(i = t.call(e))) return i;
                if ("function" == typeof (t = e.valueOf) && !o(i = t.call(e))) return i;
                if (!n && "function" == typeof (t = e.toString) && !o(i = t.call(e))) return i;
                throw TypeError("Can't convert object to primitive value")
            }
        },
        "./node_modules/core-js/internals/uid.js": function (e, n) {
            var t = 0,
                o = Math.random();
            e.exports = function (e) {
                return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++t + o).toString(36))
            }
        },
        "./node_modules/core-js/internals/validate-set-prototype-of-arguments.js": function (e, n, t) {
            var o = t("./node_modules/core-js/internals/is-object.js"),
                i = t("./node_modules/core-js/internals/an-object.js");
            e.exports = function (e, n) {
                if (i(e), !o(n) && null !== n) throw TypeError("Can't set " + String(n) + " as a prototype")
            }
        },
        "./node_modules/core-js/internals/well-known-symbol.js": function (e, n, t) {
            var o = t("./node_modules/core-js/internals/global.js"),
                i = t("./node_modules/core-js/internals/shared.js"),
                l = t("./node_modules/core-js/internals/uid.js"),
                r = t("./node_modules/core-js/internals/native-symbol.js"),
                a = o.Symbol,
                s = i("wks");
            e.exports = function (e) {
                return s[e] || (s[e] = r && a[e] || (r ? a : l)("Symbol." + e))
            }
        },
        "./node_modules/core-js/modules/es.array.from.js": function (e, n, t) {
            var o = t("./node_modules/core-js/internals/export.js"),
                i = t("./node_modules/core-js/internals/array-from.js");
            o({
                target: "Array",
                stat: !0,
                forced: !t("./node_modules/core-js/internals/check-correctness-of-iteration.js")(function (e) {
                    Array.from(e)
                })
            }, {
                from: i
            })
        },
        "./node_modules/core-js/modules/es.string.iterator.js": function (e, n, t) {
            "use strict";
            var o = t("./node_modules/core-js/internals/string-at.js"),
                i = t("./node_modules/core-js/internals/internal-state.js"),
                l = t("./node_modules/core-js/internals/define-iterator.js"),
                r = i.set,
                a = i.getterFor("String Iterator");
            l(String, "String", function (e) {
                r(this, {
                    type: "String Iterator",
                    string: String(e),
                    index: 0
                })
            }, function () {
                var e, n = a(this),
                    t = n.string,
                    i = n.index;
                return i >= t.length ? {
                    value: void 0,
                    done: !0
                } : (e = o(t, i, !0), n.index += e.length, {
                    value: e,
                    done: !1
                })
            })
        },
        "./node_modules/webpack/buildin/global.js": function (e, n) {
            var t;
            t = function () {
                return this
            }();
            try {
                t = t || Function("return this")() || (0, eval)("this")
            } catch (e) {
                "object" == typeof window && (t = window)
            }
            e.exports = t
        },
        "./src/default-attrs.json": function (e) {
            e.exports = {
                xmlns: "http://www.w3.org/2000/svg",
                width: 24,
                height: 24,
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": 2,
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
            }
        },
        "./src/icon.js": function (e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var o = Object.assign || function (e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = arguments[n];
                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
                }
                return e
            },
                i = function () {
                    function e(e, n) {
                        for (var t = 0; t < n.length; t++) {
                            var o = n[t];
                            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                        }
                    }
                    return function (n, t, o) {
                        return t && e(n.prototype, t), o && e(n, o), n
                    }
                }(),
                l = a(t("./node_modules/classnames/dedupe.js")),
                r = a(t("./src/default-attrs.json"));

            function a(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var s = function () {
                function e(n, t) {
                    var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                    ! function (e, n) {
                        if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.name = n, this.contents = t, this.tags = i, this.attrs = o({}, r.default, {
                        class: "feather feather-" + n
                    })
                }
                return i(e, [{
                    key: "toSvg",
                    value: function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return "<svg " + function (e) {
                            return Object.keys(e).map(function (n) {
                                return n + '="' + e[n] + '"'
                            }).join(" ")
                        }(o({}, this.attrs, e, {
                            class: (0, l.default)(this.attrs.class, e.class)
                        })) + ">" + this.contents + "</svg>"
                    }
                }, {
                    key: "toString",
                    value: function () {
                        return this.contents
                    }
                }]), e
            }();
            n.default = s
        },
        "./src/icons.js": function (e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var o = r(t("./src/icon.js")),
                i = r(t("./dist/icons.json")),
                l = r(t("./src/tags.json"));

            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            n.default = Object.keys(i.default).map(function (e) {
                return new o.default(e, i.default[e], l.default[e])
            }).reduce(function (e, n) {
                return e[n.name] = n, e
            }, {})
        },
        "./src/index.js": function (e, n, t) {
            "use strict";
            var o = r(t("./src/icons.js")),
                i = r(t("./src/to-svg.js")),
                l = r(t("./src/replace.js"));

            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            e.exports = {
                icons: o.default,
                toSvg: i.default,
                replace: l.default
            }
        },
        "./src/replace.js": function (e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var o = Object.assign || function (e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = arguments[n];
                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
                }
                return e
            },
                i = r(t("./node_modules/classnames/dedupe.js")),
                l = r(t("./src/icons.js"));

            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            n.default = function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if ("undefined" == typeof document) throw new Error("`feather.replace()` only works in a browser environment.");
                var n = document.querySelectorAll("[data-feather]");
                Array.from(n).forEach(function (n) {
                    return function (e) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            t = function (e) {
                                return Array.from(e.attributes).reduce(function (e, n) {
                                    return e[n.name] = n.value, e
                                }, {})
                            }(e),
                            r = t["data-feather"];
                        delete t["data-feather"];
                        var a = l.default[r].toSvg(o({}, n, t, {
                            class: (0, i.default)(n.class, t.class)
                        })),
                            s = (new DOMParser).parseFromString(a, "image/svg+xml").querySelector("svg");
                        e.parentNode.replaceChild(s, e)
                    }(n, e)
                })
            }
        },
        "./src/tags.json": function (e) {
            e.exports = {
                activity: ["pulse", "health", "action", "motion"],
                airplay: ["stream", "cast", "mirroring"],
                "alert-circle": ["warning", "alert", "danger"],
                "alert-octagon": ["warning", "alert", "danger"],
                "alert-triangle": ["warning", "alert", "danger"],
                "align-center": ["text alignment", "center"],
                "align-justify": ["text alignment", "justified"],
                "align-left": ["text alignment", "left"],
                "align-right": ["text alignment", "right"],
                anchor: [],
                archive: ["index", "box"],
                "at-sign": ["mention", "at", "email", "message"],
                award: ["achievement", "badge"],
                aperture: ["camera", "photo"],
                "bar-chart": ["statistics", "diagram", "graph"],
                "bar-chart-2": ["statistics", "diagram", "graph"],
                battery: ["power", "electricity"],
                "battery-charging": ["power", "electricity"],
                bell: ["alarm", "notification", "sound"],
                "bell-off": ["alarm", "notification", "silent"],
                bluetooth: ["wireless"],
                "book-open": ["read", "library"],
                book: ["read", "dictionary", "booklet", "magazine", "library"],
                bookmark: ["read", "clip", "marker", "tag"],
                box: ["cube"],
                briefcase: ["work", "bag", "baggage", "folder"],
                calendar: ["date"],
                camera: ["photo"],
                cast: ["chromecast", "airplay"],
                circle: ["off", "zero", "record"],
                clipboard: ["copy"],
                clock: ["time", "watch", "alarm"],
                "cloud-drizzle": ["weather", "shower"],
                "cloud-lightning": ["weather", "bolt"],
                "cloud-rain": ["weather"],
                "cloud-snow": ["weather", "blizzard"],
                cloud: ["weather"],
                codepen: ["logo"],
                codesandbox: ["logo"],
                code: ["source", "programming"],
                coffee: ["drink", "cup", "mug", "tea", "cafe", "hot", "beverage"],
                columns: ["layout"],
                command: ["keyboard", "cmd", "terminal", "prompt"],
                compass: ["navigation", "safari", "travel", "direction"],
                copy: ["clone", "duplicate"],
                "corner-down-left": ["arrow", "return"],
                "corner-down-right": ["arrow"],
                "corner-left-down": ["arrow"],
                "corner-left-up": ["arrow"],
                "corner-right-down": ["arrow"],
                "corner-right-up": ["arrow"],
                "corner-up-left": ["arrow"],
                "corner-up-right": ["arrow"],
                cpu: ["processor", "technology"],
                "credit-card": ["purchase", "payment", "cc"],
                crop: ["photo", "image"],
                crosshair: ["aim", "target"],
                database: ["storage", "memory"],
                delete: ["remove"],
                disc: ["album", "cd", "dvd", "music"],
                "dollar-sign": ["currency", "money", "payment"],
                droplet: ["water"],
                edit: ["pencil", "change"],
                "edit-2": ["pencil", "change"],
                "edit-3": ["pencil", "change"],
                eye: ["view", "watch"],
                "eye-off": ["view", "watch", "hide", "hidden"],
                "external-link": ["outbound"],
                facebook: ["logo", "social"],
                "fast-forward": ["music"],
                figma: ["logo", "design", "tool"],
                "file-minus": ["delete", "remove", "erase"],
                "file-plus": ["add", "create", "new"],
                "file-text": ["data", "txt", "pdf"],
                film: ["movie", "video"],
                filter: ["funnel", "hopper"],
                flag: ["report"],
                "folder-minus": ["directory"],
                "folder-plus": ["directory"],
                folder: ["directory"],
                framer: ["logo", "design", "tool"],
                frown: ["emoji", "face", "bad", "sad", "emotion"],
                gift: ["present", "box", "birthday", "party"],
                "git-branch": ["code", "version control"],
                "git-commit": ["code", "version control"],
                "git-merge": ["code", "version control"],
                "git-pull-request": ["code", "version control"],
                github: ["logo", "version control"],
                gitlab: ["logo", "version control"],
                globe: ["world", "browser", "language", "translate"],
                "hard-drive": ["computer", "server", "memory", "data"],
                hash: ["hashtag", "number", "pound"],
                headphones: ["music", "audio", "sound"],
                heart: ["like", "love", "emotion"],
                "help-circle": ["question mark"],
                hexagon: ["shape", "node.js", "logo"],
                home: ["house", "living"],
                image: ["picture"],
                inbox: ["email"],
                instagram: ["logo", "camera"],
                key: ["password", "login", "authentication", "secure"],
                layers: ["stack"],
                layout: ["window", "webpage"],
                "life-bouy": ["help", "life ring", "support"],
                link: ["chain", "url"],
                "link-2": ["chain", "url"],
                linkedin: ["logo", "social media"],
                list: ["options"],
                lock: ["security", "password", "secure"],
                "log-in": ["sign in", "arrow", "enter"],
                "log-out": ["sign out", "arrow", "exit"],
                mail: ["email", "message"],
                "map-pin": ["location", "navigation", "travel", "marker"],
                map: ["location", "navigation", "travel"],
                maximize: ["fullscreen"],
                "maximize-2": ["fullscreen", "arrows", "expand"],
                meh: ["emoji", "face", "neutral", "emotion"],
                menu: ["bars", "navigation", "hamburger"],
                "message-circle": ["comment", "chat"],
                "message-square": ["comment", "chat"],
                "mic-off": ["record", "sound", "mute"],
                mic: ["record", "sound", "listen"],
                minimize: ["exit fullscreen", "close"],
                "minimize-2": ["exit fullscreen", "arrows", "close"],
                minus: ["subtract"],
                monitor: ["tv", "screen", "display"],
                moon: ["dark", "night"],
                "more-horizontal": ["ellipsis"],
                "more-vertical": ["ellipsis"],
                "mouse-pointer": ["arrow", "cursor"],
                move: ["arrows"],
                music: ["note"],
                navigation: ["location", "travel"],
                "navigation-2": ["location", "travel"],
                octagon: ["stop"],
                package: ["box", "container"],
                paperclip: ["attachment"],
                pause: ["music", "stop"],
                "pause-circle": ["music", "audio", "stop"],
                "pen-tool": ["vector", "drawing"],
                percent: ["discount"],
                "phone-call": ["ring"],
                "phone-forwarded": ["call"],
                "phone-incoming": ["call"],
                "phone-missed": ["call"],
                "phone-off": ["call", "mute"],
                "phone-outgoing": ["call"],
                phone: ["call"],
                play: ["music", "start"],
                "pie-chart": ["statistics", "diagram"],
                "play-circle": ["music", "start"],
                plus: ["add", "new"],
                "plus-circle": ["add", "new"],
                "plus-square": ["add", "new"],
                pocket: ["logo", "save"],
                power: ["on", "off"],
                printer: ["fax", "office", "device"],
                radio: ["signal"],
                "refresh-cw": ["synchronise", "arrows"],
                "refresh-ccw": ["arrows"],
                repeat: ["Loop", "arrows"],
                rewind: ["music"],
                "rotate-ccw": ["arrow"],
                "rotate-cw": ["arrow"],
                rss: ["feed", "subscribe"],
                save: ["floppy disk"],
                scissors: ["cut"],
                search: ["find", "magnifier", "magnifying glass"],
                send: ["message", "mail", "email", "paper airplane", "paper aeroplane"],
                settings: ["cog", "edit", "gear", "preferences"],
                "share-2": ["network", "connections"],
                shield: ["security", "secure"],
                "shield-off": ["security", "insecure"],
                "shopping-bag": ["ecommerce", "cart", "purchase", "store"],
                "shopping-cart": ["ecommerce", "cart", "purchase", "store"],
                shuffle: ["music"],
                "skip-back": ["music"],
                "skip-forward": ["music"],
                slack: ["logo"],
                slash: ["ban", "no"],
                sliders: ["settings", "controls"],
                smartphone: ["cellphone", "device"],
                smile: ["emoji", "face", "happy", "good", "emotion"],
                speaker: ["audio", "music"],
                star: ["bookmark", "favorite", "like"],
                "stop-circle": ["media", "music"],
                sun: ["brightness", "weather", "light"],
                sunrise: ["weather", "time", "morning", "day"],
                sunset: ["weather", "time", "evening", "night"],
                tablet: ["device"],
                tag: ["label"],
                target: ["logo", "bullseye"],
                terminal: ["code", "command line", "prompt"],
                thermometer: ["temperature", "celsius", "fahrenheit", "weather"],
                "thumbs-down": ["dislike", "bad", "emotion"],
                "thumbs-up": ["like", "good", "emotion"],
                "toggle-left": ["on", "off", "switch"],
                "toggle-right": ["on", "off", "switch"],
                tool: ["settings", "spanner"],
                trash: ["garbage", "delete", "remove", "bin"],
                "trash-2": ["garbage", "delete", "remove", "bin"],
                triangle: ["delta"],
                truck: ["delivery", "van", "shipping", "transport", "lorry"],
                tv: ["television", "stream"],
                twitch: ["logo"],
                twitter: ["logo", "social"],
                type: ["text"],
                umbrella: ["rain", "weather"],
                unlock: ["security"],
                "user-check": ["followed", "subscribed"],
                "user-minus": ["delete", "remove", "unfollow", "unsubscribe"],
                "user-plus": ["new", "add", "create", "follow", "subscribe"],
                "user-x": ["delete", "remove", "unfollow", "unsubscribe", "unavailable"],
                user: ["person", "account"],
                users: ["group"],
                "video-off": ["camera", "movie", "film"],
                video: ["camera", "movie", "film"],
                voicemail: ["phone"],
                volume: ["music", "sound", "mute"],
                "volume-1": ["music", "sound"],
                "volume-2": ["music", "sound"],
                "volume-x": ["music", "sound", "mute"],
                watch: ["clock", "time"],
                "wifi-off": ["disabled"],
                wifi: ["connection", "signal", "wireless"],
                wind: ["weather", "air"],
                "x-circle": ["cancel", "close", "delete", "remove", "times", "clear"],
                "x-octagon": ["delete", "stop", "alert", "warning", "times", "clear"],
                "x-square": ["cancel", "close", "delete", "remove", "times", "clear"],
                x: ["cancel", "close", "delete", "remove", "times", "clear"],
                youtube: ["logo", "video", "play"],
                "zap-off": ["flash", "camera", "lightning"],
                zap: ["flash", "camera", "lightning"],
                "zoom-in": ["magnifying glass"],
                "zoom-out": ["magnifying glass"]
            }
        },
        "./src/to-svg.js": function (e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var o, i = t("./src/icons.js"),
                l = (o = i) && o.__esModule ? o : {
                    default: o
                };
            n.default = function (e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (console.warn("feather.toSvg() is deprecated. Please use feather.icons[name].toSvg() instead."), !e) throw new Error("The required `key` (icon name) parameter is missing.");
                if (!l.default[e]) throw new Error("No icon matching '" + e + "'. See the complete list of icons at https://feathericons.com");
                return l.default[e].toSvg(n)
            }
        },
        0: function (e, n, t) {
            t("./node_modules/core-js/es/array/from.js"), e.exports = t("./src/index.js")
        }
    })
});

//aos.js
! function (e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.AOS = t() : e.AOS = t()
}(this, function () {
    return function (e) {
        function t(n) {
            if (o[n]) return o[n].exports;
            var i = o[n] = {
                exports: {},
                id: n,
                loaded: !1
            };
            return e[n].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports
        }
        var o = {};
        return t.m = e, t.c = o, t.p = "dist/", t(0)
    }([function (e, t, o) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var i = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var o = arguments[t];
                for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
            }
            return e
        },
            r = (n(o(1)), o(6)),
            a = n(r),
            u = n(o(7)),
            c = n(o(8)),
            s = n(o(9)),
            d = n(o(10)),
            f = n(o(11)),
            l = n(o(14)),
            p = [],
            m = !1,
            b = {
                offset: 120,
                delay: 0,
                easing: "ease",
                duration: 400,
                disable: !1,
                once: !1,
                startEvent: "DOMContentLoaded",
                throttleDelay: 99,
                debounceDelay: 50,
                disableMutationObserver: !1
            },
            v = function () {
                if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (m = !0), m) return p = (0, f.default)(p, b), (0, d.default)(p, b.once), p
            },
            y = function () {
                p = (0, l.default)(), v()
            };
        e.exports = {
            init: function (e) {
                b = i(b, e), p = (0, l.default)();
                var t = document.all && !window.atob;
                return function (e) {
                    return !0 === e || "mobile" === e && s.default.mobile() || "phone" === e && s.default.phone() || "tablet" === e && s.default.tablet() || "function" == typeof e && !0 === e()
                }(b.disable) || t ? void p.forEach(function (e, t) {
                    e.node.removeAttribute("data-aos"), e.node.removeAttribute("data-aos-easing"), e.node.removeAttribute("data-aos-duration"), e.node.removeAttribute("data-aos-delay")
                }) : (b.disableMutationObserver || c.default.isSupported() || (console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '), b.disableMutationObserver = !0), document.querySelector("body").setAttribute("data-aos-easing", b.easing), document.querySelector("body").setAttribute("data-aos-duration", b.duration), document.querySelector("body").setAttribute("data-aos-delay", b.delay), "DOMContentLoaded" === b.startEvent && ["complete", "interactive"].indexOf(document.readyState) > -1 ? v(!0) : "load" === b.startEvent ? window.addEventListener(b.startEvent, function () {
                    v(!0)
                }) : document.addEventListener(b.startEvent, function () {
                    v(!0)
                }), window.addEventListener("resize", (0, u.default)(v, b.debounceDelay, !0)), window.addEventListener("orientationchange", (0, u.default)(v, b.debounceDelay, !0)), window.addEventListener("scroll", (0, a.default)(function () {
                    (0, d.default)(p, b.once)
                }, b.throttleDelay)), b.disableMutationObserver || c.default.ready("[data-aos]", y), p)
            },
            refresh: v,
            refreshHard: y
        }
    }, function (e, t) { }, , , , , function (e, t) {
        (function (t) {
            "use strict";

            function o(e, t, o) {
                function i(t) {
                    var o = f,
                        n = l;
                    return f = l = void 0, y = t, m = e.apply(n, o)
                }

                function a(e) {
                    var o = e - v;
                    return void 0 === v || o >= t || o < 0 || x && e - y >= p
                }

                function c() {
                    var e = k();
                    return a(e) ? s(e) : void (b = setTimeout(c, function (e) {
                        var o = t - (e - v);
                        return x ? w(o, p - (e - y)) : o
                    }(e)))
                }

                function s(e) {
                    return b = void 0, j && f ? i(e) : (f = l = void 0, m)
                }

                function d() {
                    var e = k(),
                        o = a(e);
                    if (f = arguments, l = this, v = e, o) {
                        if (void 0 === b) return function (e) {
                            return y = e, b = setTimeout(c, t), g ? i(e) : m
                        }(v);
                        if (x) return b = setTimeout(c, t), i(v)
                    }
                    return void 0 === b && (b = setTimeout(c, t)), m
                }
                var f, l, p, m, b, v, y = 0,
                    g = !1,
                    x = !1,
                    j = !0;
                if ("function" != typeof e) throw new TypeError(u);
                return t = r(t) || 0, n(o) && (g = !!o.leading, p = (x = "maxWait" in o) ? h(r(o.maxWait) || 0, t) : p, j = "trailing" in o ? !!o.trailing : j), d.cancel = function () {
                    void 0 !== b && clearTimeout(b), y = 0, f = v = l = b = void 0
                }, d.flush = function () {
                    return void 0 === b ? m : s(k())
                }, d
            }

            function n(e) {
                var t = void 0 === e ? "undefined" : a(e);
                return !!e && ("object" == t || "function" == t)
            }

            function i(e) {
                return "symbol" == (void 0 === e ? "undefined" : a(e)) || function (e) {
                    return !!e && "object" == (void 0 === e ? "undefined" : a(e))
                }(e) && g.call(e) == s
            }

            function r(e) {
                if ("number" == typeof e) return e;
                if (i(e)) return c;
                if (n(e)) {
                    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                    e = n(t) ? t + "" : t
                }
                if ("string" != typeof e) return 0 === e ? e : +e;
                e = e.replace(d, "");
                var o = l.test(e);
                return o || p.test(e) ? m(e.slice(2), o ? 2 : 8) : f.test(e) ? c : +e
            }
            var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
                u = "Expected a function",
                c = NaN,
                s = "[object Symbol]",
                d = /^\s+|\s+$/g,
                f = /^[-+]0x[0-9a-f]+$/i,
                l = /^0b[01]+$/i,
                p = /^0o[0-7]+$/i,
                m = parseInt,
                b = "object" == (void 0 === t ? "undefined" : a(t)) && t && t.Object === Object && t,
                v = "object" == ("undefined" == typeof self ? "undefined" : a(self)) && self && self.Object === Object && self,
                y = b || v || Function("return this")(),
                g = Object.prototype.toString,
                h = Math.max,
                w = Math.min,
                k = function () {
                    return y.Date.now()
                };
            e.exports = function (e, t, i) {
                var r = !0,
                    a = !0;
                if ("function" != typeof e) throw new TypeError(u);
                return n(i) && (r = "leading" in i ? !!i.leading : r, a = "trailing" in i ? !!i.trailing : a), o(e, t, {
                    leading: r,
                    maxWait: t,
                    trailing: a
                })
            }
        }).call(t, function () {
            return this
        }())
    }, function (e, t) {
        (function (t) {
            "use strict";

            function o(e) {
                var t = void 0 === e ? "undefined" : r(e);
                return !!e && ("object" == t || "function" == t)
            }

            function n(e) {
                return "symbol" == (void 0 === e ? "undefined" : r(e)) || function (e) {
                    return !!e && "object" == (void 0 === e ? "undefined" : r(e))
                }(e) && y.call(e) == c
            }

            function i(e) {
                if ("number" == typeof e) return e;
                if (n(e)) return u;
                if (o(e)) {
                    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                    e = o(t) ? t + "" : t
                }
                if ("string" != typeof e) return 0 === e ? e : +e;
                e = e.replace(s, "");
                var i = f.test(e);
                return i || l.test(e) ? p(e.slice(2), i ? 2 : 8) : d.test(e) ? u : +e
            }
            var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
                a = "Expected a function",
                u = NaN,
                c = "[object Symbol]",
                s = /^\s+|\s+$/g,
                d = /^[-+]0x[0-9a-f]+$/i,
                f = /^0b[01]+$/i,
                l = /^0o[0-7]+$/i,
                p = parseInt,
                m = "object" == (void 0 === t ? "undefined" : r(t)) && t && t.Object === Object && t,
                b = "object" == ("undefined" == typeof self ? "undefined" : r(self)) && self && self.Object === Object && self,
                v = m || b || Function("return this")(),
                y = Object.prototype.toString,
                g = Math.max,
                h = Math.min,
                w = function () {
                    return v.Date.now()
                };
            e.exports = function (e, t, n) {
                function r(t) {
                    var o = f,
                        n = l;
                    return f = l = void 0, y = t, m = e.apply(n, o)
                }

                function u(e) {
                    var o = e - v;
                    return void 0 === v || o >= t || o < 0 || x && e - y >= p
                }

                function c() {
                    var e = w();
                    return u(e) ? s(e) : void (b = setTimeout(c, function (e) {
                        var o = t - (e - v);
                        return x ? h(o, p - (e - y)) : o
                    }(e)))
                }

                function s(e) {
                    return b = void 0, j && f ? r(e) : (f = l = void 0, m)
                }

                function d() {
                    var e = w(),
                        o = u(e);
                    if (f = arguments, l = this, v = e, o) {
                        if (void 0 === b) return function (e) {
                            return y = e, b = setTimeout(c, t), k ? r(e) : m
                        }(v);
                        if (x) return b = setTimeout(c, t), r(v)
                    }
                    return void 0 === b && (b = setTimeout(c, t)), m
                }
                var f, l, p, m, b, v, y = 0,
                    k = !1,
                    x = !1,
                    j = !0;
                if ("function" != typeof e) throw new TypeError(a);
                return t = i(t) || 0, o(n) && (k = !!n.leading, p = (x = "maxWait" in n) ? g(i(n.maxWait) || 0, t) : p, j = "trailing" in n ? !!n.trailing : j), d.cancel = function () {
                    void 0 !== b && clearTimeout(b), y = 0, f = v = l = b = void 0
                }, d.flush = function () {
                    return void 0 === b ? m : s(w())
                }, d
            }
        }).call(t, function () {
            return this
        }())
    }, function (e, t) {
        "use strict";

        function o() {
            return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver
        }

        function n(e) {
            e && e.forEach(function (e) {
                var t = Array.prototype.slice.call(e.addedNodes),
                    o = Array.prototype.slice.call(e.removedNodes);
                if (function e(t) {
                    var o = void 0,
                        n = void 0;
                    for (o = 0; o < t.length; o += 1) {
                        if ((n = t[o]).dataset && n.dataset.aos) return !0;
                        if (n.children && e(n.children)) return !0
                    }
                    return !1
                }(t.concat(o))) return i()
            })
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = function () { };
        t.default = {
            isSupported: function () {
                return !!o()
            },
            ready: function (e, t) {
                var r = window.document,
                    a = new (o())(n);
                i = t, a.observe(r.documentElement, {
                    childList: !0,
                    subtree: !0,
                    removedNodes: !0
                })
            }
        }
    }, function (e, t) {
        "use strict";

        function o() {
            return navigator.userAgent || navigator.vendor || window.opera || ""
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = function () {
            function e(e, t) {
                for (var o = 0; o < t.length; o++) {
                    var n = t[o];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }
            return function (t, o, n) {
                return o && e(t.prototype, o), n && e(t, n), t
            }
        }(),
            i = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
            r = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
            a = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
            u = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
            c = function () {
                function e() {
                    ! function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e)
                }
                return n(e, [{
                    key: "phone",
                    value: function () {
                        var e = o();
                        return !(!i.test(e) && !r.test(e.substr(0, 4)))
                    }
                }, {
                    key: "mobile",
                    value: function () {
                        var e = o();
                        return !(!a.test(e) && !u.test(e.substr(0, 4)))
                    }
                }, {
                    key: "tablet",
                    value: function () {
                        return this.mobile() && !this.phone()
                    }
                }]), e
            }();
        t.default = new c
    }, function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.default = function (e, t) {
            var o = window.pageYOffset,
                n = window.innerHeight;
            e.forEach(function (e, i) {
                ! function (e, t, o) {
                    var n = e.node.getAttribute("data-aos-once");
                    t > e.position ? e.node.classList.add("aos-animate") : void 0 !== n && ("false" === n || !o && "true" !== n) && e.node.classList.remove("aos-animate")
                }(e, n + o, t)
            })
        }
    }, function (e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = function (e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(o(12));
        t.default = function (e, t) {
            return e.forEach(function (e, o) {
                e.node.classList.add("aos-init"), e.position = (0, n.default)(e.node, t.offset)
            }), e
        }
    }, function (e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = function (e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(o(13));
        t.default = function (e, t) {
            var o = 0,
                i = 0,
                r = window.innerHeight,
                a = {
                    offset: e.getAttribute("data-aos-offset"),
                    anchor: e.getAttribute("data-aos-anchor"),
                    anchorPlacement: e.getAttribute("data-aos-anchor-placement")
                };
            switch (a.offset && !isNaN(a.offset) && (i = parseInt(a.offset)), a.anchor && document.querySelectorAll(a.anchor) && (e = document.querySelectorAll(a.anchor)[0]), o = (0, n.default)(e).top, a.anchorPlacement) {
                case "top-bottom":
                    break;
                case "center-bottom":
                    o += e.offsetHeight / 2;
                    break;
                case "bottom-bottom":
                    o += e.offsetHeight;
                    break;
                case "top-center":
                    o += r / 2;
                    break;
                case "bottom-center":
                    o += r / 2 + e.offsetHeight;
                    break;
                case "center-center":
                    o += r / 2 + e.offsetHeight / 2;
                    break;
                case "top-top":
                    o += r;
                    break;
                case "bottom-top":
                    o += e.offsetHeight + r;
                    break;
                case "center-top":
                    o += e.offsetHeight / 2 + r
            }
            return a.anchorPlacement || a.offset || isNaN(t) || (i = t), o + i
        }
    }, function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.default = function (e) {
            for (var t = 0, o = 0; e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop);) t += e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0), o += e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0), e = e.offsetParent;
            return {
                top: o,
                left: t
            }
        }
    }, function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.default = function (e) {
            return e = e || document.querySelectorAll("[data-aos]"), Array.prototype.map.call(e, function (e) {
                return {
                    node: e
                }
            })
        }
    }])
});

//typed.js
! function (t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.Typed = e() : t.Typed = e()
}(this, function () {
    return function (t) {
        var e = {};

        function s(n) {
            if (e[n]) return e[n].exports;
            var i = e[n] = {
                exports: {},
                id: n,
                loaded: !1
            };
            return t[n].call(i.exports, i, i.exports, s), i.loaded = !0, i.exports
        }
        return s.m = t, s.c = e, s.p = "", s(0)
    }([function (t, e, s) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = function () {
            function t(t, e) {
                for (var s = 0; s < e.length; s++) {
                    var n = e[s];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function (e, s, n) {
                return s && t(e.prototype, s), n && t(e, n), e
            }
        }();
        var i = s(1),
            r = s(3),
            o = function () {
                function t(e, s) {
                    ! function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), i.initializer.load(this, s, e), this.begin()
                }
                return n(t, [{
                    key: "toggle",
                    value: function () {
                        this.pause.status ? this.start() : this.stop()
                    }
                }, {
                    key: "stop",
                    value: function () {
                        this.typingComplete || this.pause.status || (this.toggleBlinking(!0), this.pause.status = !0, this.options.onStop(this.arrayPos, this))
                    }
                }, {
                    key: "start",
                    value: function () {
                        this.typingComplete || this.pause.status && (this.pause.status = !1, this.pause.typewrite ? this.typewrite(this.pause.curString, this.pause.curStrPos) : this.backspace(this.pause.curString, this.pause.curStrPos), this.options.onStart(this.arrayPos, this))
                    }
                }, {
                    key: "destroy",
                    value: function () {
                        this.reset(!1), this.options.onDestroy(this)
                    }
                }, {
                    key: "reset",
                    value: function () {
                        var t = arguments.length <= 0 || void 0 === arguments[0] || arguments[0];
                        clearInterval(this.timeout), this.replaceText(""), this.cursor && this.cursor.parentNode && (this.cursor.parentNode.removeChild(this.cursor), this.cursor = null), this.strPos = 0, this.arrayPos = 0, this.curLoop = 0, t && (this.insertCursor(), this.options.onReset(this), this.begin())
                    }
                }, {
                    key: "begin",
                    value: function () {
                        var t = this;
                        this.options.onBegin(this), this.typingComplete = !1, this.shuffleStringsIfNeeded(this), this.insertCursor(), this.bindInputFocusEvents && this.bindFocusEvents(), this.timeout = setTimeout(function () {
                            t.currentElContent && 0 !== t.currentElContent.length ? t.backspace(t.currentElContent, t.currentElContent.length) : t.typewrite(t.strings[t.sequence[t.arrayPos]], t.strPos)
                        }, this.startDelay)
                    }
                }, {
                    key: "typewrite",
                    value: function (t, e) {
                        var s = this;
                        this.fadeOut && this.el.classList.contains(this.fadeOutClass) && (this.el.classList.remove(this.fadeOutClass), this.cursor && this.cursor.classList.remove(this.fadeOutClass));
                        var n = this.humanizer(this.typeSpeed),
                            i = 1;
                        !0 !== this.pause.status ? this.timeout = setTimeout(function () {
                            e = r.htmlParser.typeHtmlChars(t, e, s);
                            var n = 0,
                                o = t.substr(e);
                            if ("^" === o.charAt(0) && /^\^\d+/.test(o)) {
                                var a = 1;
                                a += (o = /\d+/.exec(o)[0]).length, n = parseInt(o), s.temporaryPause = !0, s.options.onTypingPaused(s.arrayPos, s), t = t.substring(0, e) + t.substring(e + a), s.toggleBlinking(!0)
                            }
                            if ("`" === o.charAt(0)) {
                                for (;
                                    "`" !== t.substr(e + i).charAt(0) && !(e + ++i > t.length););
                                var u = t.substring(0, e),
                                    l = t.substring(u.length + 1, e + i),
                                    c = t.substring(e + i + 1);
                                t = u + l + c, i--
                            }
                            s.timeout = setTimeout(function () {
                                s.toggleBlinking(!1), e >= t.length ? s.doneTyping(t, e) : s.keepTyping(t, e, i), s.temporaryPause && (s.temporaryPause = !1, s.options.onTypingResumed(s.arrayPos, s))
                            }, n)
                        }, n) : this.setPauseStatus(t, e, !0)
                    }
                }, {
                    key: "keepTyping",
                    value: function (t, e, s) {
                        0 === e && (this.toggleBlinking(!1), this.options.preStringTyped(this.arrayPos, this)), e += s;
                        var n = t.substr(0, e);
                        this.replaceText(n), this.typewrite(t, e)
                    }
                }, {
                    key: "doneTyping",
                    value: function (t, e) {
                        var s = this;
                        this.options.onStringTyped(this.arrayPos, this), this.toggleBlinking(!0), this.arrayPos === this.strings.length - 1 && (this.complete(), !1 === this.Loop || this.curLoop === this.LoopCount) || (this.timeout = setTimeout(function () {
                            s.backspace(t, e)
                        }, this.backDelay))
                    }
                }, {
                    key: "backspace",
                    value: function (t, e) {
                        var s = this;
                        if (!0 !== this.pause.status) {
                            if (this.fadeOut) return this.initFadeOut();
                            this.toggleBlinking(!1);
                            var n = this.humanizer(this.backSpeed);
                            this.timeout = setTimeout(function () {
                                e = r.htmlParser.backSpaceHtmlChars(t, e, s);
                                var n = t.substr(0, e);
                                if (s.replaceText(n), s.smartBackspace) {
                                    var i = s.strings[s.arrayPos + 1];
                                    i && n === i.substr(0, e) ? s.stopNum = e : s.stopNum = 0
                                }
                                e > s.stopNum ? (e--, s.backspace(t, e)) : e <= s.stopNum && (s.arrayPos++, s.arrayPos === s.strings.length ? (s.arrayPos = 0, s.options.onLastStringBackspaced(), s.shuffleStringsIfNeeded(), s.begin()) : s.typewrite(s.strings[s.sequence[s.arrayPos]], e))
                            }, n)
                        } else this.setPauseStatus(t, e, !1)
                    }
                }, {
                    key: "complete",
                    value: function () {
                        this.options.onComplete(this), this.Loop ? this.curLoop++ : this.typingComplete = !0
                    }
                }, {
                    key: "setPauseStatus",
                    value: function (t, e, s) {
                        this.pause.typewrite = s, this.pause.curString = t, this.pause.curStrPos = e
                    }
                }, {
                    key: "toggleBlinking",
                    value: function (t) {
                        this.cursor && (this.pause.status || this.cursorBlinking !== t && (this.cursorBlinking = t, t ? this.cursor.classList.add("typed-cursor--blink") : this.cursor.classList.remove("typed-cursor--blink")))
                    }
                }, {
                    key: "humanizer",
                    value: function (t) {
                        return Math.round(Math.random() * t / 2) + t
                    }
                }, {
                    key: "shuffleStringsIfNeeded",
                    value: function () {
                        this.shuffle && (this.sequence = this.sequence.sort(function () {
                            return Math.random() - .5
                        }))
                    }
                }, {
                    key: "initFadeOut",
                    value: function () {
                        var t = this;
                        return this.el.className += " " + this.fadeOutClass, this.cursor && (this.cursor.className += " " + this.fadeOutClass), setTimeout(function () {
                            t.arrayPos++, t.replaceText(""), t.strings.length > t.arrayPos ? t.typewrite(t.strings[t.sequence[t.arrayPos]], 0) : (t.typewrite(t.strings[0], 0), t.arrayPos = 0)
                        }, this.fadeOutDelay)
                    }
                }, {
                    key: "replaceText",
                    value: function (t) {
                        this.attr ? this.el.setAttribute(this.attr, t) : this.isInput ? this.el.value = t : "html" === this.contentType ? this.el.innerHTML = t : this.el.textContent = t
                    }
                }, {
                    key: "bindFocusEvents",
                    value: function () {
                        var t = this;
                        this.isInput && (this.el.addEventListener("focus", function (e) {
                            t.stop()
                        }), this.el.addEventListener("blur", function (e) {
                            t.el.value && 0 !== t.el.value.length || t.start()
                        }))
                    }
                }, {
                    key: "insertCursor",
                    value: function () {
                        this.showCursor && (this.cursor || (this.cursor = document.createElement("span"), this.cursor.className = "typed-cursor", this.cursor.setAttribute("aria-hidden", !0), this.cursor.innerHTML = this.cursorChar, this.el.parentNode && this.el.parentNode.insertBefore(this.cursor, this.el.nextSibling)))
                    }
                }]), t
            }();
        e.default = o, t.exports = e.default
    }, function (t, e, s) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = Object.assign || function (t) {
            for (var e = 1; e < arguments.length; e++) {
                var s = arguments[e];
                for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (t[n] = s[n])
            }
            return t
        },
            i = function () {
                function t(t, e) {
                    for (var s = 0; s < e.length; s++) {
                        var n = e[s];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }
                return function (e, s, n) {
                    return s && t(e.prototype, s), n && t(e, n), e
                }
            }();
        var r, o = s(2),
            a = (r = o) && r.__esModule ? r : {
                default: r
            },
            u = function () {
                function t() {
                    ! function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t)
                }
                return i(t, [{
                    key: "load",
                    value: function (t, e, s) {
                        if (t.el = "string" == typeof s ? document.querySelector(s) : s, t.options = n({}, a.default, e), t.isInput = "input" === t.el.tagName.toLowerCase(), t.attr = t.options.attr, t.bindInputFocusEvents = t.options.bindInputFocusEvents, t.showCursor = !t.isInput && t.options.showCursor, t.cursorChar = t.options.cursorChar, t.cursorBlinking = !0, t.elContent = t.attr ? t.el.getAttribute(t.attr) : t.el.textContent, t.contentType = t.options.contentType, t.typeSpeed = t.options.typeSpeed, t.startDelay = t.options.startDelay, t.backSpeed = t.options.backSpeed, t.smartBackspace = t.options.smartBackspace, t.backDelay = t.options.backDelay, t.fadeOut = t.options.fadeOut, t.fadeOutClass = t.options.fadeOutClass, t.fadeOutDelay = t.options.fadeOutDelay, t.isPaused = !1, t.strings = t.options.strings.map(function (t) {
                            return t.trim()
                        }), "string" == typeof t.options.stringsElement ? t.stringsElement = document.querySelector(t.options.stringsElement) : t.stringsElement = t.options.stringsElement, t.stringsElement) {
                            t.strings = [], t.stringsElement.style.display = "none";
                            var i = Array.prototype.slice.apply(t.stringsElement.children),
                                r = i.length;
                            if (r)
                                for (var o = 0; o < r; o += 1) {
                                    var u = i[o];
                                    t.strings.push(u.innerHTML.trim())
                                }
                        }
                        for (var o in t.strPos = 0, t.arrayPos = 0, t.stopNum = 0, t.Loop = t.options.Loop, t.LoopCount = t.options.LoopCount, t.curLoop = 0, t.shuffle = t.options.shuffle, t.sequence = [], t.pause = {
                            status: !1,
                            typewrite: !0,
                            curString: "",
                            curStrPos: 0
                        }, t.typingComplete = !1, t.strings) t.sequence[o] = o;
                        t.currentElContent = this.getCurrentElContent(t), t.autoInsertCss = t.options.autoInsertCss, this.appendAnimationCss(t)
                    }
                }, {
                    key: "getCurrentElContent",
                    value: function (t) {
                        return t.attr ? t.el.getAttribute(t.attr) : t.isInput ? t.el.value : "html" === t.contentType ? t.el.innerHTML : t.el.textContent
                    }
                }, {
                    key: "appendAnimationCss",
                    value: function (t) {
                        if (t.autoInsertCss && (t.showCursor || t.fadeOut) && !document.querySelector("[data-typed-js-css]")) {
                            var e = document.createElement("style");
                            e.type = "text/css", e.setAttribute("data-typed-js-css", !0);
                            var s = "";
                            t.showCursor && (s += "\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      "), t.fadeOut && (s += "\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      "), 0 !== e.length && (e.innerHTML = s, document.body.appendChild(e))
                        }
                    }
                }]), t
            }();
        e.default = u;
        var l = new u;
        e.initializer = l
    }, function (t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = {
            strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"],
            stringsElement: null,
            typeSpeed: 0,
            startDelay: 0,
            backSpeed: 0,
            smartBackspace: !0,
            shuffle: !1,
            backDelay: 700,
            fadeOut: !1,
            fadeOutClass: "typed-fade-out",
            fadeOutDelay: 500,
            Loop: !1,
            LoopCount: 1 / 0,
            showCursor: !0,
            cursorChar: "|",
            autoInsertCss: !0,
            attr: null,
            bindInputFocusEvents: !1,
            contentType: "html",
            onBegin: function (t) { },
            onComplete: function (t) { },
            preStringTyped: function (t, e) { },
            onStringTyped: function (t, e) { },
            onLastStringBackspaced: function (t) { },
            onTypingPaused: function (t, e) { },
            onTypingResumed: function (t, e) { },
            onReset: function (t) { },
            onStop: function (t, e) { },
            onStart: function (t, e) { },
            onDestroy: function (t) { }
        };
        e.default = s, t.exports = e.default
    }, function (t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = function () {
            function t(t, e) {
                for (var s = 0; s < e.length; s++) {
                    var n = e[s];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function (e, s, n) {
                return s && t(e.prototype, s), n && t(e, n), e
            }
        }();
        var n = function () {
            function t() {
                ! function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t)
            }
            return s(t, [{
                key: "typeHtmlChars",
                value: function (t, e, s) {
                    if ("html" !== s.contentType) return e;
                    var n = t.substr(e).charAt(0);
                    if ("<" === n || "&" === n) {
                        var i = "";
                        for (i = "<" === n ? ">" : ";"; t.substr(e + 1).charAt(0) !== i && !(++e + 1 > t.length););
                        e++
                    }
                    return e
                }
            }, {
                key: "backSpaceHtmlChars",
                value: function (t, e, s) {
                    if ("html" !== s.contentType) return e;
                    var n = t.substr(e).charAt(0);
                    if (">" === n || ";" === n) {
                        var i = "";
                        for (i = ">" === n ? "<" : "&"; t.substr(e - 1).charAt(0) !== i && !(--e < 0););
                        e--
                    }
                    return e
                }
            }]), t
        }();
        e.default = n;
        var i = new n;
        e.htmlParser = i
    }])
});

//jquery.magnific-popup.js
! function (e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? e(require("jquery")) : e(window.jQuery || window.Zepto)
}(function (e) {
    var t, i, n, o, a, r, s = function () { },
        l = !!window.jQuery,
        c = e(window),
        p = function (e, i) {
            t.ev.on("mfp" + e + ".mfp", i)
        },
        d = function (t, i, n, o) {
            var a = document.createElement("div");
            return a.className = "mfp-" + t, n && (a.innerHTML = n), o ? i && i.appendChild(a) : (a = e(a), i && a.appendTo(i)), a
        },
        u = function (i, n) {
            t.ev.triggerHandler("mfp" + i, n), t.st.callbacks && (i = i.charAt(0).toLowerCase() + i.slice(1), t.st.callbacks[i] && t.st.callbacks[i].apply(t, e.isArray(n) ? n : [n]))
        },
        f = function (i) {
            return i === r && t.currTemplate.closeBtn || (t.currTemplate.closeBtn = e(t.st.closeMarkup.replace("%title%", t.st.tClose)), r = i), t.currTemplate.closeBtn
        },
        m = function () {
            e.magnificPopup.instance || ((t = new s).init(), e.magnificPopup.instance = t)
        };
    s.prototype = {
        constructor: s,
        init: function () {
            var i = navigator.appVersion;
            t.isLowIE = t.isIE8 = document.all && !document.addEventListener, t.isAndroid = /android/gi.test(i), t.isIOS = /iphone|ipad|ipod/gi.test(i), t.supportsTransition = function () {
                var e = document.createElement("p").style,
                    t = ["ms", "O", "Moz", "Webkit"];
                if (void 0 !== e.transition) return !0;
                for (; t.length;)
                    if (t.pop() + "Transition" in e) return !0;
                return !1
            }(), t.probablyMobile = t.isAndroid || t.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), n = e(document), t.popupsCache = {}
        },
        open: function (i) {
            var o;
            if (!1 === i.isObj) {
                t.items = i.items.toArray(), t.index = 0;
                var r, s = i.items;
                for (o = 0; o < s.length; o++)
                    if ((r = s[o]).parsed && (r = r.el[0]), r === i.el[0]) {
                        t.index = o;
                        break
                    }
            } else t.items = e.isArray(i.items) ? i.items : [i.items], t.index = i.index || 0;
            if (!t.isOpen) {
                t.types = [], a = "", i.mainEl && i.mainEl.length ? t.ev = i.mainEl.eq(0) : t.ev = n, i.key ? (t.popupsCache[i.key] || (t.popupsCache[i.key] = {}), t.currTemplate = t.popupsCache[i.key]) : t.currTemplate = {}, t.st = e.extend(!0, {}, e.magnificPopup.defaults, i), t.fixedContentPos = "auto" === t.st.fixedContentPos ? !t.probablyMobile : t.st.fixedContentPos, t.st.modal && (t.st.closeOnContentClick = !1, t.st.closeOnBgClick = !1, t.st.showCloseBtn = !1, t.st.enableEscapeKey = !1), t.bgOverlay || (t.bgOverlay = d("bg").on("click.mfp", function () {
                    t.close()
                }), t.wrap = d("wrap").attr("tabindex", -1).on("click.mfp", function (e) {
                    t._checkIfClose(e.target) && t.close()
                }), t.container = d("container", t.wrap)), t.contentContainer = d("content"), t.st.preloader && (t.preloader = d("preloader", t.container, t.st.tLoading));
                var l = e.magnificPopup.modules;
                for (o = 0; o < l.length; o++) {
                    var m = l[o];
                    m = m.charAt(0).toUpperCase() + m.slice(1), t["init" + m].call(t)
                }
                u("BeforeOpen"), t.st.showCloseBtn && (t.st.closeBtnInside ? (p("MarkupParse", function (e, t, i, n) {
                    i.close_replaceWith = f(n.type)
                }), a += " mfp-close-btn-in") : t.wrap.append(f())), t.st.alignTop && (a += " mfp-align-top"), t.fixedContentPos ? t.wrap.css({
                    overflow: t.st.overflowY,
                    overflowX: "hidden",
                    overflowY: t.st.overflowY
                }) : t.wrap.css({
                    top: c.scrollTop(),
                    position: "absolute"
                }), (!1 === t.st.fixedBgPos || "auto" === t.st.fixedBgPos && !t.fixedContentPos) && t.bgOverlay.css({
                    height: n.height(),
                    position: "absolute"
                }), t.st.enableEscapeKey && n.on("keyup.mfp", function (e) {
                    27 === e.keyCode && t.close()
                }), c.on("resize.mfp", function () {
                    t.updateSize()
                }), t.st.closeOnContentClick || (a += " mfp-auto-cursor"), a && t.wrap.addClass(a);
                var g = t.wH = c.height(),
                    v = {};
                if (t.fixedContentPos && t._hasScrollBar(g)) {
                    var h = t._getScrollbarSize();
                    h && (v.marginRight = h)
                }
                t.fixedContentPos && (t.isIE7 ? e("body, html").css("overflow", "hidden") : v.overflow = "hidden");
                var C = t.st.mainClass;
                return t.isIE7 && (C += " mfp-ie7"), C && t._addClassToMFP(C), t.updateItemHTML(), u("BuildControls"), e("html").css(v), t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo || e(document.body)), t._lastFocusedEl = document.activeElement, setTimeout(function () {
                    t.content ? (t._addClassToMFP("mfp-ready"), t._setFocus()) : t.bgOverlay.addClass("mfp-ready"), n.on("focusin.mfp", t._onFocusIn)
                }, 16), t.isOpen = !0, t.updateSize(g), u("Open"), i
            }
            t.updateItemHTML()
        },
        close: function () {
            t.isOpen && (u("BeforeClose"), t.isOpen = !1, t.st.removalDelay && !t.isLowIE && t.supportsTransition ? (t._addClassToMFP("mfp-removing"), setTimeout(function () {
                t._close()
            }, t.st.removalDelay)) : t._close())
        },
        _close: function () {
            u("Close");
            var i = "mfp-removing mfp-ready ";
            if (t.bgOverlay.detach(), t.wrap.detach(), t.container.empty(), t.st.mainClass && (i += t.st.mainClass + " "), t._removeClassFromMFP(i), t.fixedContentPos) {
                var o = {
                    marginRight: ""
                };
                t.isIE7 ? e("body, html").css("overflow", "") : o.overflow = "", e("html").css(o)
            }
            n.off("keyup.mfp focusin.mfp"), t.ev.off(".mfp"), t.wrap.attr("class", "mfp-wrap").removeAttr("style"), t.bgOverlay.attr("class", "mfp-bg"), t.container.attr("class", "mfp-container"), !t.st.showCloseBtn || t.st.closeBtnInside && !0 !== t.currTemplate[t.currItem.type] || t.currTemplate.closeBtn && t.currTemplate.closeBtn.detach(), t.st.autoFocusLast && t._lastFocusedEl && e(t._lastFocusedEl).focus(), t.currItem = null, t.content = null, t.currTemplate = null, t.prevHeight = 0, u("AfterClose")
        },
        updateSize: function (e) {
            if (t.isIOS) {
                var i = document.documentElement.clientWidth / window.innerWidth,
                    n = window.innerHeight * i;
                t.wrap.css("height", n), t.wH = n
            } else t.wH = e || c.height();
            t.fixedContentPos || t.wrap.css("height", t.wH), u("Resize")
        },
        updateItemHTML: function () {
            var i = t.items[t.index];
            t.contentContainer.detach(), t.content && t.content.detach(), i.parsed || (i = t.parseEl(t.index));
            var n = i.type;
            if (u("BeforeChange", [t.currItem ? t.currItem.type : "", n]), t.currItem = i, !t.currTemplate[n]) {
                var a = !!t.st[n] && t.st[n].markup;
                u("FirstMarkupParse", a), t.currTemplate[n] = !a || e(a)
            }
            o && o !== i.type && t.container.removeClass("mfp-" + o + "-holder");
            var r = t["get" + n.charAt(0).toUpperCase() + n.slice(1)](i, t.currTemplate[n]);
            t.appendContent(r, n), i.preloaded = !0, u("Change", i), o = i.type, t.container.prepend(t.contentContainer), u("AfterChange")
        },
        appendContent: function (e, i) {
            t.content = e, e ? t.st.showCloseBtn && t.st.closeBtnInside && !0 === t.currTemplate[i] ? t.content.find(".mfp-close").length || t.content.append(f()) : t.content = e : t.content = "", u("BeforeAppend"), t.container.addClass("mfp-" + i + "-holder"), t.contentContainer.append(t.content)
        },
        parseEl: function (i) {
            var n, o = t.items[i];
            if (o.tagName ? o = {
                el: e(o)
            } : (n = o.type, o = {
                data: o,
                src: o.src
            }), o.el) {
                for (var a = t.types, r = 0; r < a.length; r++)
                    if (o.el.hasClass("mfp-" + a[r])) {
                        n = a[r];
                        break
                    } o.src = o.el.attr("data-mfp-src"), o.src || (o.src = o.el.attr("href"))
            }
            return o.type = n || t.st.type || "inline", o.index = i, o.parsed = !0, t.items[i] = o, u("ElementParse", o), t.items[i]
        },
        addGroup: function (e, i) {
            var n = function (n) {
                n.mfpEl = this, t._openClick(n, e, i)
            };
            i || (i = {});
            var o = "click.magnificPopup";
            i.mainEl = e, i.items ? (i.isObj = !0, e.off(o).on(o, n)) : (i.isObj = !1, i.delegate ? e.off(o).on(o, i.delegate, n) : (i.items = e, e.off(o).on(o, n)))
        },
        _openClick: function (i, n, o) {
            if ((void 0 !== o.midClick ? o.midClick : e.magnificPopup.defaults.midClick) || !(2 === i.which || i.ctrlKey || i.metaKey || i.altKey || i.shiftKey)) {
                var a = void 0 !== o.disableOn ? o.disableOn : e.magnificPopup.defaults.disableOn;
                if (a)
                    if (e.isFunction(a)) {
                        if (!a.call(t)) return !0
                    } else if (c.width() < a) return !0;
                i.type && (i.preventDefault(), t.isOpen && i.stopPropagation()), o.el = e(i.mfpEl), o.delegate && (o.items = n.find(o.delegate)), t.open(o)
            }
        },
        updateStatus: function (e, n) {
            if (t.preloader) {
                i !== e && t.container.removeClass("mfp-s-" + i), n || "loading" !== e || (n = t.st.tLoading);
                var o = {
                    status: e,
                    text: n
                };
                u("UpdateStatus", o), e = o.status, n = o.text, t.preloader.html(n), t.preloader.find("a").on("click", function (e) {
                    e.stopImmediatePropagation()
                }), t.container.addClass("mfp-s-" + e), i = e
            }
        },
        _checkIfClose: function (i) {
            if (!e(i).hasClass("mfp-prevent-close")) {
                var n = t.st.closeOnContentClick,
                    o = t.st.closeOnBgClick;
                if (n && o) return !0;
                if (!t.content || e(i).hasClass("mfp-close") || t.preloader && i === t.preloader[0]) return !0;
                if (i === t.content[0] || e.contains(t.content[0], i)) {
                    if (n) return !0
                } else if (o && e.contains(document, i)) return !0;
                return !1
            }
        },
        _addClassToMFP: function (e) {
            t.bgOverlay.addClass(e), t.wrap.addClass(e)
        },
        _removeClassFromMFP: function (e) {
            this.bgOverlay.removeClass(e), t.wrap.removeClass(e)
        },
        _hasScrollBar: function (e) {
            return (t.isIE7 ? n.height() : document.body.scrollHeight) > (e || c.height())
        },
        _setFocus: function () {
            (t.st.focus ? t.content.find(t.st.focus).eq(0) : t.wrap).focus()
        },
        _onFocusIn: function (i) {
            if (i.target !== t.wrap[0] && !e.contains(t.wrap[0], i.target)) return t._setFocus(), !1
        },
        _parseMarkup: function (t, i, n) {
            var o;
            n.data && (i = e.extend(n.data, i)), u("MarkupParse", [t, i, n]), e.each(i, function (i, n) {
                if (void 0 === n || !1 === n) return !0;
                if ((o = i.split("_")).length > 1) {
                    var a = t.find(".mfp-" + o[0]);
                    if (a.length > 0) {
                        var r = o[1];
                        "replaceWith" === r ? a[0] !== n[0] && a.replaceWith(n) : "img" === r ? a.is("img") ? a.attr("src", n) : a.replaceWith(e("<img>").attr("src", n).attr("class", a.attr("class"))) : a.attr(o[1], n)
                    }
                } else t.find(".mfp-" + i).html(n)
            })
        },
        _getScrollbarSize: function () {
            if (void 0 === t.scrollbarSize) {
                var e = document.createElement("div");
                e.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(e), t.scrollbarSize = e.offsetWidth - e.clientWidth, document.body.removeChild(e)
            }
            return t.scrollbarSize
        }
    }, e.magnificPopup = {
        instance: null,
        proto: s.prototype,
        modules: [],
        open: function (t, i) {
            return m(), (t = t ? e.extend(!0, {}, t) : {}).isObj = !0, t.index = i || 0, this.instance.open(t)
        },
        close: function () {
            return e.magnificPopup.instance && e.magnificPopup.instance.close()
        },
        registerModule: function (t, i) {
            i.options && (e.magnificPopup.defaults[t] = i.options), e.extend(this.proto, i.proto), this.modules.push(t)
        },
        defaults: {
            disableOn: 0,
            key: null,
            midClick: !1,
            mainClass: "",
            preloader: !0,
            focus: "",
            closeOnContentClick: !1,
            closeOnBgClick: !0,
            closeBtnInside: !0,
            showCloseBtn: !0,
            enableEscapeKey: !0,
            modal: !1,
            alignTop: !1,
            removalDelay: 0,
            prependTo: null,
            fixedContentPos: "auto",
            fixedBgPos: "auto",
            overflowY: "auto",
            closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
            tClose: "Close (Esc)",
            tLoading: "Loading...",
            autoFocusLast: !0
        }
    }, e.fn.magnificPopup = function (i) {
        m();
        var n = e(this);
        if ("string" == typeof i)
            if ("open" === i) {
                var o, a = l ? n.data("magnificPopup") : n[0].magnificPopup,
                    r = parseInt(arguments[1], 10) || 0;
                a.items ? o = a.items[r] : (o = n, a.delegate && (o = o.find(a.delegate)), o = o.eq(r)), t._openClick({
                    mfpEl: o
                }, n, a)
            } else t.isOpen && t[i].apply(t, Array.prototype.slice.call(arguments, 1));
        else i = e.extend(!0, {}, i), l ? n.data("magnificPopup", i) : n[0].magnificPopup = i, t.addGroup(n, i);
        return n
    };
    var g, v, h, C = function () {
        h && (v.after(h.addClass(g)).detach(), h = null)
    };
    e.magnificPopup.registerModule("inline", {
        options: {
            hiddenClass: "hide",
            markup: "",
            tNotFound: "Content not found"
        },
        proto: {
            initInline: function () {
                t.types.push("inline"), p("Close.inline", function () {
                    C()
                })
            },
            getInline: function (i, n) {
                if (C(), i.src) {
                    var o = t.st.inline,
                        a = e(i.src);
                    if (a.length) {
                        var r = a[0].parentNode;
                        r && r.tagName && (v || (g = o.hiddenClass, v = d(g), g = "mfp-" + g), h = a.after(v).detach().removeClass(g)), t.updateStatus("ready")
                    } else t.updateStatus("error", o.tNotFound), a = e("<div>");
                    return i.inlineElement = a, a
                }
                return t.updateStatus("ready"), t._parseMarkup(n, {}, i), n
            }
        }
    });
    var y, w = function () {
        y && e(document.body).removeClass(y)
    },
        b = function () {
            w(), t.req && t.req.abort()
        };
    e.magnificPopup.registerModule("ajax", {
        options: {
            settings: null,
            cursor: "mfp-ajax-cur",
            tError: '<a href="%url%">The content</a> could not be loaded.'
        },
        proto: {
            initAjax: function () {
                t.types.push("ajax"), y = t.st.ajax.cursor, p("Close.ajax", b), p("BeforeChange.ajax", b)
            },
            getAjax: function (i) {
                y && e(document.body).addClass(y), t.updateStatus("loading");
                var n = e.extend({
                    url: i.src,
                    success: function (n, o, a) {
                        var r = {
                            data: n,
                            xhr: a
                        };
                        u("ParseAjax", r), t.appendContent(e(r.data), "ajax"), i.finished = !0, w(), t._setFocus(), setTimeout(function () {
                            t.wrap.addClass("mfp-ready")
                        }, 16), t.updateStatus("ready"), u("AjaxContentAdded")
                    },
                    error: function () {
                        w(), i.finished = i.loadError = !0, t.updateStatus("error", t.st.ajax.tError.replace("%url%", i.src))
                    }
                }, t.st.ajax.settings);
                return t.req = e.ajax(n), ""
            }
        }
    });
    var I, x = function (i) {
        if (i.data && void 0 !== i.data.title) return i.data.title;
        var n = t.st.image.titleSrc;
        if (n) {
            if (e.isFunction(n)) return n.call(t, i);
            if (i.el) return i.el.attr(n) || ""
        }
        return ""
    };
    e.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        },
        proto: {
            initImage: function () {
                var i = t.st.image,
                    n = ".image";
                t.types.push("image"), p("Open" + n, function () {
                    "image" === t.currItem.type && i.cursor && e(document.body).addClass(i.cursor)
                }), p("Close" + n, function () {
                    i.cursor && e(document.body).removeClass(i.cursor), c.off("resize.mfp")
                }), p("Resize" + n, t.resizeImage), t.isLowIE && p("AfterChange", t.resizeImage)
            },
            resizeImage: function () {
                var e = t.currItem;
                if (e && e.img && t.st.image.verticalFit) {
                    var i = 0;
                    t.isLowIE && (i = parseInt(e.img.css("padding-top"), 10) + parseInt(e.img.css("padding-bottom"), 10)), e.img.css("max-height", t.wH - i)
                }
            },
            _onImageHasSize: function (e) {
                e.img && (e.hasSize = !0, I && clearInterval(I), e.isCheckingImgSize = !1, u("ImageHasSize", e), e.imgHidden && (t.content && t.content.removeClass("mfp-loading"), e.imgHidden = !1))
            },
            findImageSize: function (e) {
                var i = 0,
                    n = e.img[0],
                    o = function (a) {
                        I && clearInterval(I), I = setInterval(function () {
                            n.naturalWidth > 0 ? t._onImageHasSize(e) : (i > 200 && clearInterval(I), 3 === ++i ? o(10) : 40 === i ? o(50) : 100 === i && o(500))
                        }, a)
                    };
                o(1)
            },
            getImage: function (i, n) {
                var o = 0,
                    a = function () {
                        i && (i.img[0].complete ? (i.img.off(".mfploader"), i === t.currItem && (t._onImageHasSize(i), t.updateStatus("ready")), i.hasSize = !0, i.loaded = !0, u("ImageLoadComplete")) : ++o < 200 ? setTimeout(a, 100) : r())
                    },
                    r = function () {
                        i && (i.img.off(".mfploader"), i === t.currItem && (t._onImageHasSize(i), t.updateStatus("error", s.tError.replace("%url%", i.src))), i.hasSize = !0, i.loaded = !0, i.loadError = !0)
                    },
                    s = t.st.image,
                    l = n.find(".mfp-img");
                if (l.length) {
                    var c = document.createElement("img");
                    c.className = "mfp-img", i.el && i.el.find("img").length && (c.alt = i.el.find("img").attr("alt")), i.img = e(c).on("load.mfploader", a).on("error.mfploader", r), c.src = i.src, l.is("img") && (i.img = i.img.clone()), (c = i.img[0]).naturalWidth > 0 ? i.hasSize = !0 : c.width || (i.hasSize = !1)
                }
                return t._parseMarkup(n, {
                    title: x(i),
                    img_replaceWith: i.img
                }, i), t.resizeImage(), i.hasSize ? (I && clearInterval(I), i.loadError ? (n.addClass("mfp-loading"), t.updateStatus("error", s.tError.replace("%url%", i.src))) : (n.removeClass("mfp-loading"), t.updateStatus("ready")), n) : (t.updateStatus("loading"), i.loading = !0, i.hasSize || (i.imgHidden = !0, n.addClass("mfp-loading"), t.findImageSize(i)), n)
            }
        }
    });
    var k;
    e.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1,
            easing: "ease-in-out",
            duration: 300,
            opener: function (e) {
                return e.is("img") ? e : e.find("img")
            }
        },
        proto: {
            initZoom: function () {
                var e, i = t.st.zoom,
                    n = ".zoom";
                if (i.enabled && t.supportsTransition) {
                    var o, a, r = i.duration,
                        s = function (e) {
                            var t = e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                                n = "all " + i.duration / 1e3 + "s " + i.easing,
                                o = {
                                    position: "fixed",
                                    zIndex: 9999,
                                    left: 0,
                                    top: 0,
                                    "-webkit-backface-visibility": "hidden"
                                },
                                a = "transition";
                            return o["-webkit-" + a] = o["-moz-" + a] = o["-o-" + a] = o[a] = n, t.css(o), t
                        },
                        l = function () {
                            t.content.css("visibility", "visible")
                        };
                    p("BuildControls" + n, function () {
                        if (t._allowZoom()) {
                            if (clearTimeout(o), t.content.css("visibility", "hidden"), !(e = t._getItemToZoom())) return void l();
                            (a = s(e)).css(t._getOffset()), t.wrap.append(a), o = setTimeout(function () {
                                a.css(t._getOffset(!0)), o = setTimeout(function () {
                                    l(), setTimeout(function () {
                                        a.remove(), e = a = null, u("ZoomAnimationEnded")
                                    }, 16)
                                }, r)
                            }, 16)
                        }
                    }), p("BeforeClose" + n, function () {
                        if (t._allowZoom()) {
                            if (clearTimeout(o), t.st.removalDelay = r, !e) {
                                if (!(e = t._getItemToZoom())) return;
                                a = s(e)
                            }
                            a.css(t._getOffset(!0)), t.wrap.append(a), t.content.css("visibility", "hidden"), setTimeout(function () {
                                a.css(t._getOffset())
                            }, 16)
                        }
                    }), p("Close" + n, function () {
                        t._allowZoom() && (l(), a && a.remove(), e = null)
                    })
                }
            },
            _allowZoom: function () {
                return "image" === t.currItem.type
            },
            _getItemToZoom: function () {
                return !!t.currItem.hasSize && t.currItem.img
            },
            _getOffset: function (i) {
                var n, o = (n = i ? t.currItem.img : t.st.zoom.opener(t.currItem.el || t.currItem)).offset(),
                    a = parseInt(n.css("padding-top"), 10),
                    r = parseInt(n.css("padding-bottom"), 10);
                o.top -= e(window).scrollTop() - a;
                var s = {
                    width: n.width(),
                    height: (l ? n.innerHeight() : n[0].offsetHeight) - r - a
                };
                return void 0 === k && (k = void 0 !== document.createElement("p").style.MozTransform), k ? s["-moz-transform"] = s.transform = "translate(" + o.left + "px," + o.top + "px)" : (s.left = o.left, s.top = o.top), s
            }
        }
    });
    var T = function (e) {
        if (t.currTemplate.iframe) {
            var i = t.currTemplate.iframe.find("iframe");
            i.length && (e || (i[0].src = "//about:blank"), t.isIE8 && i.css("display", e ? "block" : "none"))
        }
    };
    e.magnificPopup.registerModule("iframe", {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: {
                    index: "youtube.com",
                    id: "v=",
                    src: "//www.youtube.com/embed/%id%?autoplay=1"
                },
                vimeo: {
                    index: "vimeo.com/",
                    id: "/",
                    src: "//player.vimeo.com/video/%id%?autoplay=1"
                },
                gmaps: {
                    index: "//maps.google.",
                    src: "%id%&output=embed"
                }
            }
        },
        proto: {
            initIframe: function () {
                t.types.push("iframe"), p("BeforeChange", function (e, t, i) {
                    t !== i && ("iframe" === t ? T() : "iframe" === i && T(!0))
                }), p("Close.iframe", function () {
                    T()
                })
            },
            getIframe: function (i, n) {
                var o = i.src,
                    a = t.st.iframe;
                e.each(a.patterns, function () {
                    if (o.indexOf(this.index) > -1) return this.id && (o = "string" == typeof this.id ? o.substr(o.lastIndexOf(this.id) + this.id.length, o.length) : this.id.call(this, o)), o = this.src.replace("%id%", o), !1
                });
                var r = {};
                return a.srcAction && (r[a.srcAction] = o), t._parseMarkup(n, r, i), t.updateStatus("ready"), n
            }
        }
    });
    var _ = function (e) {
        var i = t.items.length;
        return e > i - 1 ? e - i : e < 0 ? i + e : e
    },
        P = function (e, t, i) {
            return e.replace(/%curr%/gi, t + 1).replace(/%total%/gi, i)
        };
    e.magnificPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%"
        },
        proto: {
            initGallery: function () {
                var i = t.st.gallery,
                    o = ".mfp-gallery";
                if (t.direction = !0, !i || !i.enabled) return !1;
                a += " mfp-gallery", p("Open" + o, function () {
                    i.navigateByImgClick && t.wrap.on("click" + o, ".mfp-img", function () {
                        if (t.items.length > 1) return t.next(), !1
                    }), n.on("keydown" + o, function (e) {
                        37 === e.keyCode ? t.prev() : 39 === e.keyCode && t.next()
                    })
                }), p("UpdateStatus" + o, function (e, i) {
                    i.text && (i.text = P(i.text, t.currItem.index, t.items.length))
                }), p("MarkupParse" + o, function (e, n, o, a) {
                    var r = t.items.length;
                    o.counter = r > 1 ? P(i.tCounter, a.index, r) : ""
                }), p("BuildControls" + o, function () {
                    if (t.items.length > 1 && i.arrows && !t.arrowLeft) {
                        var n = i.arrowMarkup,
                            o = t.arrowLeft = e(n.replace(/%title%/gi, i.tPrev).replace(/%dir%/gi, "left")).addClass("mfp-prevent-close"),
                            a = t.arrowRight = e(n.replace(/%title%/gi, i.tNext).replace(/%dir%/gi, "right")).addClass("mfp-prevent-close");
                        o.click(function () {
                            t.prev()
                        }), a.click(function () {
                            t.next()
                        }), t.container.append(o.add(a))
                    }
                }), p("Change" + o, function () {
                    t._preloadTimeout && clearTimeout(t._preloadTimeout), t._preloadTimeout = setTimeout(function () {
                        t.preloadNearbyImages(), t._preloadTimeout = null
                    }, 16)
                }), p("Close" + o, function () {
                    n.off(o), t.wrap.off("click" + o), t.arrowRight = t.arrowLeft = null
                })
            },
            next: function () {
                t.direction = !0, t.index = _(t.index + 1), t.updateItemHTML()
            },
            prev: function () {
                t.direction = !1, t.index = _(t.index - 1), t.updateItemHTML()
            },
            goTo: function (e) {
                t.direction = e >= t.index, t.index = e, t.updateItemHTML()
            },
            preloadNearbyImages: function () {
                var e, i = t.st.gallery.preload,
                    n = Math.min(i[0], t.items.length),
                    o = Math.min(i[1], t.items.length);
                for (e = 1; e <= (t.direction ? o : n); e++) t._preloadItem(t.index + e);
                for (e = 1; e <= (t.direction ? n : o); e++) t._preloadItem(t.index - e)
            },
            _preloadItem: function (i) {
                if (i = _(i), !t.items[i].preloaded) {
                    var n = t.items[i];
                    n.parsed || (n = t.parseEl(i)), u("LazyLoad", n), "image" === n.type && (n.img = e('<img class="mfp-img" />').on("load.mfploader", function () {
                        n.hasSize = !0
                    }).on("error.mfploader", function () {
                        n.hasSize = !0, n.loadError = !0, u("LazyLoadError", n)
                    }).attr("src", n.src)), n.preloaded = !0
                }
            }
        }
    });
    e.magnificPopup.registerModule("retina", {
        options: {
            replaceSrc: function (e) {
                return e.src.replace(/\.\w+$/, function (e) {
                    return "@2x" + e
                })
            },
            ratio: 1
        },
        proto: {
            initRetina: function () {
                if (window.devicePixelRatio > 1) {
                    var e = t.st.retina,
                        i = e.ratio;
                    (i = isNaN(i) ? i() : i) > 1 && (p("ImageHasSize.retina", function (e, t) {
                        t.img.css({
                            "max-width": t.img[0].naturalWidth / i,
                            width: "100%"
                        })
                    }), p("ElementParse.retina", function (t, n) {
                        n.src = e.replaceSrc(n, i)
                    }))
                }
            }
        }
    }), m()
});

//cookieconsent.js
! function (e) {
    if (!e.hasInitialised) {
        var t = {
            escapeRegExp: function (e) {
                return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
            },
            hasClass: function (e, t) {
                var i = " ";
                return 1 === e.nodeType && (i + e.className + i).replace(/[\n\t]/g, i).indexOf(i + t + i) >= 0
            },
            addClass: function (e, t) {
                e.className += " " + t
            },
            removeClass: function (e, t) {
                var i = new RegExp("\\b" + this.escapeRegExp(t) + "\\b");
                e.className = e.className.replace(i, "")
            },
            interpolateString: function (e, t) {
                return e.replace(/{{([a-z][a-z0-9\-_]*)}}/gi, function (e) {
                    return t(arguments[1]) || ""
                })
            },
            getCookie: function (e) {
                var t = ("; " + document.cookie).split("; " + e + "=");
                return t.length < 2 ? void 0 : t.pop().split(";").shift()
            },
            setCookie: function (e, t, i, n, o, s) {
                var r = new Date;
                r.setHours(r.getHours() + 24 * (i || 365));
                var a = [e + "=" + t, "expires=" + r.toUTCString(), "path=" + (o || "/")];
                n && a.push("domain=" + n), s && a.push("secure"), document.cookie = a.join(";")
            },
            deepExtend: function (e, t) {
                for (var i in t) t.hasOwnProperty(i) && (i in e && this.isPlainObject(e[i]) && this.isPlainObject(t[i]) ? this.deepExtend(e[i], t[i]) : e[i] = t[i]);
                return e
            },
            throttle: function (e, t) {
                var i = !1;
                return function () {
                    i || (e.apply(this, arguments), i = !0, setTimeout(function () {
                        i = !1
                    }, t))
                }
            },
            hash: function (e) {
                var t, i, n = 0;
                if (0 === e.length) return n;
                for (t = 0, i = e.length; t < i; ++t) n = (n << 5) - n + e.charCodeAt(t), n |= 0;
                return n
            },
            normaliseHex: function (e) {
                return "#" == e[0] && (e = e.substr(1)), 3 == e.length && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]), e
            },
            getContrast: function (e) {
                return e = this.normaliseHex(e), (299 * parseInt(e.substr(0, 2), 16) + 587 * parseInt(e.substr(2, 2), 16) + 114 * parseInt(e.substr(4, 2), 16)) / 1e3 >= 128 ? "#000" : "#fff"
            },
            getLuminance: function (e) {
                var t = parseInt(this.normaliseHex(e), 16),
                    i = 38 + (t >> 16),
                    n = 38 + (t >> 8 & 255),
                    o = 38 + (255 & t);
                return "#" + (16777216 + 65536 * (i < 255 ? i < 1 ? 0 : i : 255) + 256 * (n < 255 ? n < 1 ? 0 : n : 255) + (o < 255 ? o < 1 ? 0 : o : 255)).toString(16).slice(1)
            },
            isMobile: function () {
                return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
            },
            isPlainObject: function (e) {
                return "object" == typeof e && null !== e && e.constructor == Object
            },
            traverseDOMPath: function (e, i) {
                return e && e.parentNode ? t.hasClass(e, i) ? e : this.traverseDOMPath(e.parentNode, i) : null
            }
        };
        e.status = {
            deny: "deny",
            allow: "allow",
            dismiss: "dismiss"
        }, e.transitionEnd = function () {
            var e = document.createElement("div"),
                t = {
                    t: "transitionend",
                    OT: "oTransitionEnd",
                    msT: "MSTransitionEnd",
                    MozT: "transitionend",
                    WebkitT: "webkitTransitionEnd"
                };
            for (var i in t)
                if (t.hasOwnProperty(i) && void 0 !== e.style[i + "ransition"]) return t[i];
            return ""
        }(), e.hasTransition = !!e.transitionEnd;
        var i = Object.keys(e.status).map(t.escapeRegExp);
        e.customStyles = {}, e.Popup = function () {
            var n = {
                enabled: !0,
                container: null,
                cookie: {
                    name: "cookieconsent_status",
                    path: "/",
                    domain: "",
                    expiryDays: 365,
                    secure: !1
                },
                onPopupOpen: function () { },
                onPopupClose: function () { },
                onInitialise: function (e) { },
                onStatusChange: function (e, t) { },
                onRevokeChoice: function () { },
                onNoCookieLaw: function (e, t) { },
                content: {
                    header: "Cookies used on the website!",
                    message: "This website uses cookies to ensure you get the best experience on our website.",
                    dismiss: "Got it!",
                    allow: "Allow cookies",
                    deny: "Decline",
                    link: "Learn more",
                    href: "https://www.cookiesandyou.com",
                    close: "&#x274c;",
                    target: "_blank",
                    policy: "Cookie Policy"
                },
                elements: {
                    header: '<span class="cc-header">{{header}}</span>&nbsp;',
                    message: '<span id="cookieconsent:desc" class="cc-message">{{message}}</span>',
                    messagelink: '<span id="cookieconsent:desc" class="cc-message">{{message}} <a aria-label="learn more about cookies" role=button tabindex="0" class="cc-link" href="{{href}}" rel="noopener noreferrer nofollow" target="{{target}}">{{link}}</a></span>',
                    dismiss: '<a aria-label="dismiss cookie message" role=button tabindex="0" class="cc-btn cc-dismiss">{{dismiss}}</a>',
                    allow: '<a aria-label="allow cookies" role=button tabindex="0"  class="cc-btn cc-allow">{{allow}}</a>',
                    deny: '<a aria-label="deny cookies" role=button tabindex="0" class="cc-btn cc-deny">{{deny}}</a>',
                    link: '<a aria-label="learn more about cookies" role=button tabindex="0" class="cc-link" href="{{href}}" rel="noopener noreferrer nofollow" target="{{target}}">{{link}}</a>',
                    close: '<span aria-label="dismiss cookie message" role=button tabindex="0" class="cc-close">{{close}}</span>'
                },
                window: '<div role="dialog" aria-live="polite" aria-label="cookieconsent" aria-describedby="cookieconsent:desc" class="cc-window {{classes}}">\x3c!--googleoff: all--\x3e{{children}}\x3c!--googleon: all--\x3e</div>',
                revokeBtn: '<div class="cc-revoke {{classes}}">{{policy}}</div>',
                compliance: {
                    info: '<div class="cc-compliance">{{dismiss}}</div>',
                    "opt-in": '<div class="cc-compliance cc-highlight">{{deny}}{{allow}}</div>',
                    "opt-out": '<div class="cc-compliance cc-highlight">{{deny}}{{allow}}</div>'
                },
                type: "info",
                layouts: {
                    basic: "{{messagelink}}{{compliance}}",
                    "basic-close": "{{messagelink}}{{compliance}}{{close}}",
                    "basic-header": "{{header}}{{message}}{{link}}{{compliance}}"
                },
                layout: "basic",
                position: "bottom",
                theme: "block",
                static: !1,
                palette: null,
                revokable: !1,
                animateRevokable: !0,
                showLink: !0,
                dismissOnScroll: !1,
                dismissOnTimeout: !1,
                dismissOnWindowClick: !1,
                ignoreClicksFrom: ["cc-revoke", "cc-btn"],
                autoOpen: !0,
                autoAttach: !0,
                whitelistPage: [],
                blacklistPage: [],
                overrideHTML: null
            };

            function o() {
                this.initialise.apply(this, arguments)
            }

            function s(e) {
                this.openingTimeout = null, t.removeClass(e, "cc-invisible")
            }

            function r(t) {
                t.style.display = "none", t.removeEventListener(e.transitionEnd, this.afterTransition), this.afterTransition = null
            }

            function a() {
                var e = this.options.position.split("-"),
                    t = [];
                return e.forEach(function (e) {
                    t.push("cc-" + e)
                }), t
            }

            function c(n) {
                var o = this.options,
                    s = document.createElement("div"),
                    r = o.container && 1 === o.container.nodeType ? o.container : document.body;
                s.innerHTML = n;
                var a = s.children[0];
                return a.style.display = "none", t.hasClass(a, "cc-window") && e.hasTransition && t.addClass(a, "cc-invisible"), this.onButtonClick = function (n) {
                    var o = t.traverseDOMPath(n.target, "cc-btn") || n.target;
                    if (t.hasClass(o, "cc-btn")) {
                        var s = o.className.match(new RegExp("\\bcc-(" + i.join("|") + ")\\b")),
                            r = s && s[1] || !1;
                        r && (this.setStatus(r), this.close(!0))
                    }
                    t.hasClass(o, "cc-close") && (this.setStatus(e.status.dismiss), this.close(!0));
                    t.hasClass(o, "cc-revoke") && this.revokeChoice()
                }.bind(this), a.addEventListener("click", this.onButtonClick), o.autoAttach && (r.firstChild ? r.insertBefore(a, r.firstChild) : r.appendChild(a)), a
            }

            function l(e) {
                return "000000" == (e = t.normaliseHex(e)) ? "#222" : t.getLuminance(e)
            }

            function u(e, t) {
                for (var i = 0, n = e.length; i < n; ++i) {
                    var o = e[i];
                    if (o instanceof RegExp && o.test(t) || "string" == typeof o && o.length && o === t) return !0
                }
                return !1
            }
            return o.prototype.initialise = function (i) {
                this.options && this.destroy(), t.deepExtend(this.options = {}, n), t.isPlainObject(i) && t.deepExtend(this.options, i),
                    function () {
                        var t = this.options.onInitialise.bind(this);
                        if (!window.navigator.cookieEnabled) return t(e.status.deny), !0;
                        if (window.CookiesOK || window.navigator.CookiesOK) return t(e.status.allow), !0;
                        var i = Object.keys(e.status),
                            n = this.getStatus(),
                            o = i.indexOf(n) >= 0;
                        o && t(n);
                        return o
                    }.call(this) && (this.options.enabled = !1), u(this.options.blacklistPage, location.pathname) && (this.options.enabled = !1), u(this.options.whitelistPage, location.pathname) && (this.options.enabled = !0);
                var o = this.options.window.replace("{{classes}}", function () {
                    var i = this.options,
                        n = "top" == i.position || "bottom" == i.position ? "banner" : "floating";
                    t.isMobile() && (n = "floating");
                    var o = ["cc-" + n, "cc-type-" + i.type, "cc-theme-" + i.theme];
                    i.static && o.push("cc-static");
                    o.push.apply(o, a.call(this));
                    (function (i) {
                        var n = t.hash(JSON.stringify(i)),
                            o = "cc-color-override-" + n,
                            s = t.isPlainObject(i);
                        this.customStyleSelector = s ? o : null, s && function (i, n, o) {
                            if (e.customStyles[i]) return void ++e.customStyles[i].references;
                            var s = {},
                                r = n.popup,
                                a = n.button,
                                c = n.highlight;
                            r && (r.text = r.text ? r.text : t.getContrast(r.background), r.link = r.link ? r.link : r.text, s[o + ".cc-window"] = ["color: " + r.text, "background-color: " + r.background], s[o + ".cc-revoke"] = ["color: " + r.text, "background-color: " + r.background], s[o + " .cc-link," + o + " .cc-link:active," + o + " .cc-link:visited"] = ["color: " + r.link], a && (a.text = a.text ? a.text : t.getContrast(a.background), a.border = a.border ? a.border : "transparent", s[o + " .cc-btn"] = ["color: " + a.text, "border-color: " + a.border, "background-color: " + a.background], a.padding && s[o + " .cc-btn"].push("padding: " + a.padding), "transparent" != a.background && (s[o + " .cc-btn:hover, " + o + " .cc-btn:focus"] = ["background-color: " + (a.hover || l(a.background))]), c ? (c.text = c.text ? c.text : t.getContrast(c.background), c.border = c.border ? c.border : "transparent", s[o + " .cc-highlight .cc-btn:first-child"] = ["color: " + c.text, "border-color: " + c.border, "background-color: " + c.background]) : s[o + " .cc-highlight .cc-btn:first-child"] = ["color: " + r.text]));
                            var u = document.createElement("style");
                            document.head.appendChild(u), e.customStyles[i] = {
                                references: 1,
                                element: u.sheet
                            };
                            var h = -1;
                            for (var p in s) s.hasOwnProperty(p) && u.sheet.insertRule(p + "{" + s[p].join(";") + "}", ++h)
                        }(n, i, "." + o);
                        return s
                    }).call(this, this.options.palette);
                    this.customStyleSelector && o.push(this.customStyleSelector);
                    return o
                }.call(this).join(" ")).replace("{{children}}", function () {
                    var e = {},
                        i = this.options;
                    i.showLink || (i.elements.link = "", i.elements.messagelink = i.elements.message);
                    Object.keys(i.elements).forEach(function (n) {
                        e[n] = t.interpolateString(i.elements[n], function (e) {
                            var t = i.content[e];
                            return e && "string" == typeof t && t.length ? t : ""
                        })
                    });
                    var n = i.compliance[i.type];
                    n || (n = i.compliance.info);
                    e.compliance = t.interpolateString(n, function (t) {
                        return e[t]
                    });
                    var o = i.layouts[i.layout];
                    o || (o = i.layouts.basic);
                    return t.interpolateString(o, function (t) {
                        return e[t]
                    })
                }.call(this)),
                    s = this.options.overrideHTML;
                if ("string" == typeof s && s.length && (o = s), this.options.static) {
                    var r = c.call(this, '<div class="cc-grower">' + o + "</div>");
                    r.style.display = "", this.element = r.firstChild, this.element.style.display = "none", t.addClass(this.element, "cc-invisible")
                } else this.element = c.call(this, o);
                (function () {
                    var i = this.setStatus.bind(this),
                        n = this.close.bind(this),
                        o = this.options.dismissOnTimeout;
                    "number" == typeof o && o >= 0 && (this.dismissTimeout = window.setTimeout(function () {
                        i(e.status.dismiss), n(!0)
                    }, Math.floor(o)));
                    var s = this.options.dismissOnScroll;
                    if ("number" == typeof s && s >= 0) {
                        var r = function (t) {
                            window.pageYOffset > Math.floor(s) && (i(e.status.dismiss), n(!0), window.removeEventListener("scroll", r), this.onWindowScroll = null)
                        };
                        this.options.enabled && (this.onWindowScroll = r, window.addEventListener("scroll", r))
                    }
                    var a = this.options.dismissOnWindowClick,
                        c = this.options.ignoreClicksFrom;
                    if (a) {
                        var l = function (o) {
                            for (var s = !1, r = o.path.length, a = c.length, u = 0; u < r; u++)
                                if (!s)
                                    for (var h = 0; h < a; h++) s || (s = t.hasClass(o.path[u], c[h]));
                            s || (i(e.status.dismiss), n(!0), window.removeEventListener("click", l), window.removeEventListener("touchend", l), this.onWindowClick = null)
                        }.bind(this);
                        this.options.enabled && (this.onWindowClick = l, window.addEventListener("click", l), window.addEventListener("touchend", l))
                    }
                }).call(this),
                    function () {
                        "info" != this.options.type && (this.options.revokable = !0);
                        t.isMobile() && (this.options.animateRevokable = !1);
                        if (this.options.revokable) {
                            var e = a.call(this);
                            this.options.animateRevokable && e.push("cc-animate"), this.customStyleSelector && e.push(this.customStyleSelector);
                            var i = this.options.revokeBtn.replace("{{classes}}", e.join(" ")).replace("{{policy}}", this.options.content.policy);
                            this.revokeBtn = c.call(this, i);
                            var n = this.revokeBtn;
                            if (this.options.animateRevokable) {
                                var o = t.throttle(function (e) {
                                    var i = !1,
                                        o = window.innerHeight - 20;
                                    t.hasClass(n, "cc-top") && e.clientY < 20 && (i = !0), t.hasClass(n, "cc-bottom") && e.clientY > o && (i = !0), i ? t.hasClass(n, "cc-active") || t.addClass(n, "cc-active") : t.hasClass(n, "cc-active") && t.removeClass(n, "cc-active")
                                }, 200);
                                this.onMouseMove = o, window.addEventListener("mousemove", o)
                            }
                        }
                    }.call(this), this.options.autoOpen && this.autoOpen()
            }, o.prototype.destroy = function () {
                this.onButtonClick && this.element && (this.element.removeEventListener("click", this.onButtonClick), this.onButtonClick = null), this.dismissTimeout && (clearTimeout(this.dismissTimeout), this.dismissTimeout = null), this.onWindowScroll && (window.removeEventListener("scroll", this.onWindowScroll), this.onWindowScroll = null), this.onWindowClick && (window.removeEventListener("click", this.onWindowClick), this.onWindowClick = null), this.onMouseMove && (window.removeEventListener("mousemove", this.onMouseMove), this.onMouseMove = null), this.element && this.element.parentNode && this.element.parentNode.removeChild(this.element), this.element = null, this.revokeBtn && this.revokeBtn.parentNode && this.revokeBtn.parentNode.removeChild(this.revokeBtn), this.revokeBtn = null,
                    function (i) {
                        if (t.isPlainObject(i)) {
                            var n = t.hash(JSON.stringify(i)),
                                o = e.customStyles[n];
                            if (o && !--o.references) {
                                var s = o.element.ownerNode;
                                s && s.parentNode && s.parentNode.removeChild(s), e.customStyles[n] = null
                            }
                        }
                    }(this.options.palette), this.options = null
            }, o.prototype.open = function (t) {
                if (this.element) return this.isOpen() || (e.hasTransition ? this.fadeIn() : this.element.style.display = "", this.options.revokable && this.toggleRevokeButton(), this.options.onPopupOpen.call(this)), this
            }, o.prototype.close = function (t) {
                if (this.element) return this.isOpen() && (e.hasTransition ? this.fadeOut() : this.element.style.display = "none", t && this.options.revokable && this.toggleRevokeButton(!0), this.options.onPopupClose.call(this)), this
            }, o.prototype.fadeIn = function () {
                var i = this.element;
                if (e.hasTransition && i && (this.afterTransition && r.call(this, i), t.hasClass(i, "cc-invisible"))) {
                    if (i.style.display = "", this.options.static) {
                        var n = this.element.clientHeight;
                        this.element.parentNode.style.maxHeight = n + "px"
                    }
                    this.openingTimeout = setTimeout(s.bind(this, i), 20)
                }
            }, o.prototype.fadeOut = function () {
                var i = this.element;
                e.hasTransition && i && (this.openingTimeout && (clearTimeout(this.openingTimeout), s.bind(this, i)), t.hasClass(i, "cc-invisible") || (this.options.static && (this.element.parentNode.style.maxHeight = ""), this.afterTransition = r.bind(this, i), i.addEventListener(e.transitionEnd, this.afterTransition), t.addClass(i, "cc-invisible")))
            }, o.prototype.isOpen = function () {
                return this.element && "" == this.element.style.display && (!e.hasTransition || !t.hasClass(this.element, "cc-invisible"))
            }, o.prototype.toggleRevokeButton = function (e) {
                this.revokeBtn && (this.revokeBtn.style.display = e ? "" : "none")
            }, o.prototype.revokeChoice = function (e) {
                this.options.enabled = !0, this.clearStatus(), this.options.onRevokeChoice.call(this), e || this.autoOpen()
            }, o.prototype.hasAnswered = function (t) {
                return Object.keys(e.status).indexOf(this.getStatus()) >= 0
            }, o.prototype.hasConsented = function (t) {
                var i = this.getStatus();
                return i == e.status.allow || i == e.status.dismiss
            }, o.prototype.autoOpen = function (e) {
                !this.hasAnswered() && this.options.enabled ? this.open() : this.hasAnswered() && this.options.revokable && this.toggleRevokeButton(!0)
            }, o.prototype.setStatus = function (i) {
                var n = this.options.cookie,
                    o = t.getCookie(n.name),
                    s = Object.keys(e.status).indexOf(o) >= 0;
                Object.keys(e.status).indexOf(i) >= 0 ? (t.setCookie(n.name, i, n.expiryDays, n.domain, n.path, n.secure), this.options.onStatusChange.call(this, i, s)) : this.clearStatus()
            }, o.prototype.getStatus = function () {
                return t.getCookie(this.options.cookie.name)
            }, o.prototype.clearStatus = function () {
                var e = this.options.cookie;
                t.setCookie(e.name, "", -1, e.domain, e.path)
            }, o
        }(), e.Location = function () {
            var e = {
                timeout: 5e3,
                services: ["ipinfo"],
                serviceDefinitions: {
                    ipinfo: function () {
                        return {
                            url: "//ipinfo.io",
                            headers: ["Accept: application/json"],
                            callback: function (e, t) {
                                try {
                                    var i = JSON.parse(t);
                                    return i.error ? s(i) : {
                                        code: i.country
                                    }
                                } catch (e) {
                                    return s({
                                        error: "Invalid response (" + e + ")"
                                    })
                                }
                            }
                        }
                    },
                    ipinfodb: function (e) {
                        return {
                            url: "//api.ipinfodb.com/v3/ip-country/?key={api_key}&format=json&callback={callback}",
                            isScript: !0,
                            callback: function (e, t) {
                                try {
                                    var i = JSON.parse(t);
                                    return "ERROR" == i.statusCode ? s({
                                        error: i.statusMessage
                                    }) : {
                                        code: i.countryCode
                                    }
                                } catch (e) {
                                    return s({
                                        error: "Invalid response (" + e + ")"
                                    })
                                }
                            }
                        }
                    },
                    maxmind: function () {
                        return {
                            url: "//js.maxmind.com/js/apis/geoip2/v2.1/geoip2.js",
                            isScript: !0,
                            callback: function (e) {
                                window.geoip2 ? geoip2.country(function (t) {
                                    try {
                                        e({
                                            code: t.country.iso_code
                                        })
                                    } catch (t) {
                                        e(s(t))
                                    }
                                }, function (t) {
                                    e(s(t))
                                }) : e(new Error("Unexpected response format. The downloaded script should have exported `geoip2` to the global scope"))
                            }
                        }
                    }
                }
            };

            function i(i) {
                t.deepExtend(this.options = {}, e), t.isPlainObject(i) && t.deepExtend(this.options, i), this.currentServiceIndex = -1
            }

            function n(e, t, i) {
                var n, o = document.createElement("script");
                o.type = "text/" + (e.type || "javascript"), o.src = e.src || e, o.async = !1, o.onreadystatechange = o.onload = function () {
                    var e = o.readyState;
                    clearTimeout(n), t.done || e && !/loaded|complete/.test(e) || (t.done = !0, t(), o.onreadystatechange = o.onload = null)
                }, document.body.appendChild(o), n = setTimeout(function () {
                    t.done = !0, t(), o.onreadystatechange = o.onload = null
                }, i)
            }

            function o(e, t, i, n, o) {
                var s = new (window.XMLHttpRequest || window.ActiveXObject)("MSXML2.XMLHTTP.3.0");
                if (s.open(n ? "POST" : "GET", e, 1), s.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), Array.isArray(o))
                    for (var r = 0, a = o.length; r < a; ++r) {
                        var c = o[r].split(":", 2);
                        s.setRequestHeader(c[0].replace(/^\s+|\s+$/g, ""), c[1].replace(/^\s+|\s+$/g, ""))
                    }
                "function" == typeof t && (s.onreadystatechange = function () {
                    s.readyState > 3 && t(s)
                }), s.send(n)
            }

            function s(e) {
                return new Error("Error [" + (e.code || "UNKNOWN") + "]: " + e.error)
            }
            return i.prototype.getNextService = function () {
                var e;
                do {
                    e = this.getServiceByIdx(++this.currentServiceIndex)
                } while (this.currentServiceIndex < this.options.services.length && !e);
                return e
            }, i.prototype.getServiceByIdx = function (e) {
                var i = this.options.services[e];
                if ("function" == typeof i) {
                    var n = i();
                    return n.name && t.deepExtend(n, this.options.serviceDefinitions[n.name](n)), n
                }
                return "string" == typeof i ? this.options.serviceDefinitions[i]() : t.isPlainObject(i) ? this.options.serviceDefinitions[i.name](i) : null
            }, i.prototype.locate = function (e, t) {
                var i = this.getNextService();
                i ? (this.callbackComplete = e, this.callbackError = t, this.runService(i, this.runNextServiceOnError.bind(this))) : t(new Error("No services to run"))
            }, i.prototype.setupUrl = function (e) {
                var t = this.getCurrentServiceOpts();
                return e.url.replace(/\{(.*?)\}/g, function (i, n) {
                    if ("callback" === n) {
                        var o = "callback" + Date.now();
                        return window[o] = function (t) {
                            e.__JSONP_DATA = JSON.stringify(t)
                        }, o
                    }
                    if (n in t.interpolateUrl) return t.interpolateUrl[n]
                })
            }, i.prototype.runService = function (e, t) {
                var i = this;
                e && e.url && e.callback && (e.isScript ? n : o)(this.setupUrl(e), function (n) {
                    var o = n ? n.responseText : "";
                    e.__JSONP_DATA && (o = e.__JSONP_DATA, delete e.__JSONP_DATA), i.runServiceCallback.call(i, t, e, o)
                }, this.options.timeout, e.data, e.headers)
            }, i.prototype.runServiceCallback = function (e, t, i) {
                var n = this,
                    o = t.callback(function (t) {
                        o || n.onServiceResult.call(n, e, t)
                    }, i);
                o && this.onServiceResult.call(this, e, o)
            }, i.prototype.onServiceResult = function (e, t) {
                t instanceof Error || t && t.error ? e.call(this, t, null) : e.call(this, null, t)
            }, i.prototype.runNextServiceOnError = function (e, t) {
                if (e) {
                    this.logError(e);
                    var i = this.getNextService();
                    i ? this.runService(i, this.runNextServiceOnError.bind(this)) : this.completeService.call(this, this.callbackError, new Error("All services failed"))
                } else this.completeService.call(this, this.callbackComplete, t)
            }, i.prototype.getCurrentServiceOpts = function () {
                var e = this.options.services[this.currentServiceIndex];
                return "string" == typeof e ? {
                    name: e
                } : "function" == typeof e ? e() : t.isPlainObject(e) ? e : {}
            }, i.prototype.completeService = function (e, t) {
                this.currentServiceIndex = -1, e && e(t)
            }, i.prototype.logError = function (e) {
                var t = this.currentServiceIndex,
                    i = this.getServiceByIdx(t);
                console.warn("The service[" + t + "] (" + i.url + ") responded with the following error", e)
            }, i
        }(), e.Law = function () {
            var e = {
                regionalLaw: !0,
                hasLaw: ["AT", "BE", "BG", "HR", "CZ", "CY", "DK", "EE", "FI", "FR", "DE", "EL", "HU", "IE", "IT", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "SK", "ES", "SE", "GB", "UK", "GR", "EU"],
                revokable: ["HR", "CY", "DK", "EE", "FR", "DE", "LV", "LT", "NL", "PT", "ES"],
                explicitAction: ["HR", "IT", "ES"]
            };

            function i(e) {
                this.initialise.apply(this, arguments)
            }
            return i.prototype.initialise = function (i) {
                t.deepExtend(this.options = {}, e), t.isPlainObject(i) && t.deepExtend(this.options, i)
            }, i.prototype.get = function (e) {
                var t = this.options;
                return {
                    hasLaw: t.hasLaw.indexOf(e) >= 0,
                    revokable: t.revokable.indexOf(e) >= 0,
                    explicitAction: t.explicitAction.indexOf(e) >= 0
                }
            }, i.prototype.applyLaw = function (e, t) {
                var i = this.get(t);
                return i.hasLaw || (e.enabled = !1, "function" == typeof e.onNoCookieLaw && e.onNoCookieLaw(t, i)), this.options.regionalLaw && (i.revokable && (e.revokable = !0), i.explicitAction && (e.dismissOnScroll = !1, e.dismissOnTimeout = !1)), e
            }, i
        }(), e.initialise = function (i, n, o) {
            var s = new e.Law(i.law);
            n || (n = function () { }), o || (o = function () { });
            var r = Object.keys(e.status),
                a = t.getCookie("cookieconsent_status");
            r.indexOf(a) >= 0 ? n(new e.Popup(i)) : e.getCountryCode(i, function (t) {
                delete i.law, delete i.location, t.code && (i = s.applyLaw(i, t.code)), n(new e.Popup(i))
            }, function (t) {
                delete i.law, delete i.location, o(t, new e.Popup(i))
            })
        }, e.getCountryCode = function (t, i, n) {
            t.law && t.law.countryCode ? i({
                code: t.law.countryCode
            }) : t.location ? new e.Location(t.location).locate(function (e) {
                i(e || {})
            }, n) : i({})
        }, e.utils = t, e.hasInitialised = !0, window.cookieconsent = e
    }
}(window.cookieconsent || {});

//jquery.animatebar.js

!function (t) { "use strict"; var i = { delay: 100, step: 0, duration: 3e3, orientation: "horizontal" }; function e(t, i) { this.config = i, this.element = t, this.isHorizontal = "horizontal" === this.config.orientation, this.init() } function n(e, n) { this.config = t.extend({}, i, n), this.tag = e, this.elements = n.elements, this.renderBars(), this.createAnimation() } e.prototype.init = function () { var t = this; new Waypoint({ element: t.element, handler: function () { e.prototype.animate.apply(t, null), this.destroy() }, offset: "100%" }) }, e.prototype.animate = function () { var i = t(this.element), e = i.data("percent"), n = this.config, s = this.isHorizontal; setTimeout(function () { s ? t(".progress-bar", i).animate({ width: e + "%" }, n.duration) : t(".progress-bar", i).animate({ height: e + "%" }, n.duration) }, n.delay + n.step) }, n.prototype.renderBars = function () { var i = this.config.orientation, e = []; this.elements.forEach(function (n) { var s = n.value, a = n.style || {}, o = t("<div/>", { class: "progress-bar" }), r = t("<div/>", { class: "progress " + (a.progress || "progress-default"), html: o }).data("percent", s); "horizontal" === i ? (r.css({ width: "100%" }), o.css({ width: 0 })) : (r.css({ height: "100%" }), o.css({ height: 0 })); var h = t("<p>", { html: [n.label, t("<span>", { html: s + "%" })] }), l = t("<li/>", { html: [h, r] }); e.push(l) }), t(this.tag).append(e).addClass("progress-" + i) }, n.prototype.createAnimation = function () { var i = this.config; t("li .progress", this.tag).each(function (n) { t(this).data("animation", new e(this, { delay: i.delay, step: (1 + n) * i.step, duration: i.duration, orientation: i.orientation })) }) }, t.fn.animateBar = function (t) { return this.each(function () { new n(this, t) }) } }(jQuery);

//common.js

"use strict"; !function (a) { a(function () { a(".swiper-container").each(function () { var e = a(this), t = { breakpoints: e.data("sw-breakpoints"), active_selector: e.data("sw-active-selector"), cover_flow: e.data("sw-coverflow"), auto_play: e.data("sw-autoplay"), Loop: e.data("sw-Loop"), centered: e.data("sw-centered-slides"), pagination: e.data("sw-pagination"), nav_arrows: e.data("sw-nav-arrows"), dynamicBullets: e.data("sw-dynamic-bullets") }, s = t.breakpoints || !1, i = void 0 !== t.auto_play && t.auto_play, o = e.data("sw-speed") || 1100, n = e.data("sw-effect") || "slide", r = e.data("sw-show-items") || 1, l = void 0 === t.Loop || t.Loop, d = void 0 === t.centered || t.centered, c = e.data("sw-space-between") || (r > 1 ? 20 : 0), v = e.data("sw-scroll-items") || 1, p = e.data("sw-navigation"), w = e.data("sw-navigation-active") || "active", f = void 0 !== t.active_selector && t.active_selector, u = void 0 !== t.pagination ? t.pagination : ".swiper-pagination", m = void 0 !== t.nav_arrows ? t.nav_arrows : ".swiper-button", b = t.cover_flow ? { coverflowEffect: a.extend({ stretch: 0, depth: 0, modifier: 1, rotate: 0, slideShadows: !1 }, t.cover_flow) } : {}, g = i ? { autoplay: { delay: i, disableOnIteration: !1 }, speed: o } : {}, h = {}; u && (h.pagination = { el: u, clickable: !0 }), m && (h.navigation = { nextEl: m + "-next", prevEl: m + "-prev" }); var _ = {}; p && (_ = { transitionEnd: function () { if (p) { var e = a(p); f ? (a(f + "." + w, e).removeClass(w), a(".nav-item:eq(" + C.realIndex + ") " + f, e).addClass(w)) : (a("." + w, e).removeClass(w), a(".nav-item:eq(" + C.realIndex + ")", e).addClass(w)) } } }); var y = a.extend({ Loop: l, slidesPerGroup: v, spaceBetween: c, centeredSlides: d, breakpoints: s, slidesPerView: r, parallax: !0, effect: n }, h, g, b); console.log("swiper options", y); var C = new Swiper(this, y); for (var x in _) C.on(x, _[x]); p && a(p).on("click", ".nav-item", function (e) { e.preventDefault(); var t = a(this), s = t; if (f && (s = a(f, t)), s.hasClass(w)) return !1; var i = t.data("step") || t.index() + 1; return C.slideTo(i), f ? (t.siblings().each(function () { a(f, this).removeClass(w) }), s.addClass(w)) : (t.siblings("." + w).removeClass(w), t.addClass(w)), !1 }) }), a(".scroll-bar").each(function (a, e) { new SimpleBar(e) }) }) }(jQuery);

//stripe-bubbles.js

"use strict"; !function (s, e, t) { function i(s) { var e = this; e.bubbles = [], s.forEach(function (s, t) { e.bubbles.push(new n(t, s.x, s.y, s.s)) }), requestAnimationFrame(e.update.bind(e)) } function n(s, e, i, n) { void 0 === n && (n = 1), this.index = s, this.x = e, this.y = i, this.scale = n, this.noiseSeedX = Math.floor(64e3 * Math.random()), this.noiseSeedY = Math.floor(64e3 * Math.random()), this.el = document.createElement("div"), this.el.className = "bubble bubble-" + (this.index + 1), t.bubblesEl.appendChild(this.el) } t.SCROLL_SPEED = .3, t.NOISE_SPEED = .004, t.NOISE_AMOUNT = 5, t.CANVAS_WIDTH = 2800, t.bubbles = [{ s: .6, x: 1134, y: 45 }, { s: .6, x: 1620, y: 271 }, { s: .6, x: 1761, y: 372 }, { s: .6, x: 2499, y: 79 }, { s: .6, x: 2704, y: 334 }, { s: .6, x: 2271, y: 356 }, { s: .6, x: 795, y: 226 }, { s: .6, x: 276, y: 256 }, { s: .6, x: 1210, y: 365 }, { s: .6, x: 444, y: 193 }, { s: .6, x: 2545, y: 387 }, { s: .8, x: 1303, y: 193 }, { s: .8, x: 907, y: 88 }, { s: .8, x: 633, y: 320 }, { s: .8, x: 323, y: 60 }, { s: .8, x: 129, y: 357 }, { s: .8, x: 1440, y: 342 }, { s: .8, x: 1929, y: 293 }, { s: .8, x: 2135, y: 198 }, { s: .8, x: 2276, y: 82 }, { s: .8, x: 2654, y: 182 }, { s: .8, x: 2783, y: 60 }, { x: 1519, y: 118 }, { x: 1071, y: 233 }, { x: 1773, y: 148 }, { x: 2098, y: 385 }, { x: 2423, y: 244 }, { x: 901, y: 385 }, { x: 624, y: 111 }, { x: 75, y: 103 }, { x: 413, y: 367 }, { x: 2895, y: 271 }, { x: 1990, y: 75 }], t.bubblesEl = document.querySelector(".bubbles-container"), t.noise = new Noise(Math.floor(64e3 * Math.random())), i.prototype.update = function () { this.bubbles.forEach(function (s) { s.update() }), this.raf = requestAnimationFrame(this.update.bind(this)) }, n.prototype.update = function () { this.noiseSeedX += t.NOISE_SPEED, this.noiseSeedY += t.NOISE_SPEED; var s = t.noise.simplex2(this.noiseSeedX, 0), e = t.noise.simplex2(this.noiseSeedY, 0); this.x -= t.SCROLL_SPEED, this.xWithNoise = -this.x + s * t.NOISE_AMOUNT, this.yWithNoise = this.y + e * t.NOISE_AMOUNT, this.x < -200 && (this.x = t.CANVAS_WIDTH), this.el.style.transform = "translate(" + this.xWithNoise + "px, " + this.yWithNoise + "px) scale(" + this.scale + ")" }, s(function () { t.bubblesEl && new i(t.bubbles) }) }(jQuery, 0, {});

//stripe-menu.js
"use strict";
! function (t, o, e) {
    function n(t) {
        var n = this,
            i = o.PointerEvent ? {
                end: "pointerup",
                enter: "pointerenter",
                leave: "pointerleave"
            } : {
                end: "touchend",
                enter: "mouseenter",
                leave: "mouseleave"
            };
        this.container = t, this.container.classList.add("no-dropdown-transition"), this.root = this.container.querySelector(".st-nav-menu"), this.dropdownBackground = this.container.querySelector(".st-dropdown-bg"), this.dropdownBackgroundAlt = this.container.querySelector(".st-alt-bg"), this.dropdownContainer = this.container.querySelector(".st-dropdown-container"), this.dropdownArrow = this.container.querySelector(".st-dropdown-arrow"), this.hasDropdownLinks = e.Util.queryArray(".st-has-dropdown", this.root), this.dropdownSections = e.Util.queryArray(".st-dropdown-section", this.container).map(function (t) {
            return {
                el: t,
                name: t.getAttribute("data-dropdown"),
                content: t.querySelector(".st-dropdown-content"),
                width: t.querySelector(".st-dropdown-content").offsetWidth
            }
        }), this.hasDropdownLinks.forEach(function (t) {
            t.addEventListener(i.enter, function (o) {
                "touch" !== o.pointerType && (n.stopCloseTimeout(), n.openDropdown(t))
            }), t.addEventListener(i.leave, function (t) {
                "touch" !== t.pointerType && n.startCloseTimeout()
            }), t.addEventListener(i.end, function (o) {
                o.preventDefault(), o.stopPropagation(), n.toggleDropdown(t)
            })
        }), this.dropdownContainer.addEventListener(i.enter, function (t) {
            "touch" !== t.pointerType && n.stopCloseTimeout()
        }), this.dropdownContainer.addEventListener(i.leave, function (t) {
            "touch" !== t.pointerType && n.startCloseTimeout()
        }), this.dropdownContainer.addEventListener(i.end, function (t) {
            t.stopPropagation()
        }), document.body.addEventListener(i.end, function (t) {
            e.Util.touch.isDragging || n.closeDropdown()
        })
    }

    function i(t) {
        var o = this,
            n = e.Util.touch.isSupported ? "touchend" : "click";
        this.root = document.querySelector(t), this.activeClass = "st-popup-active", this.link = this.root.querySelector(".st-root-link"), this.popup = this.root.querySelector(".st-popup"), this.closeButton = this.root.querySelector(".st-popup-close-button"), this.link.addEventListener(n, function (t) {
            t.stopPropagation(), o.togglePopup()
        }), this.popup.addEventListener(n, function (t) {
            t.stopPropagation()
        }), this.closeButton && this.closeButton.addEventListener(n, function (t) {
            o.closeAllPopups()
        }), document.body.addEventListener(n, function (t) {
            e.Util.touch.isDragging || o.closeAllPopups()
        }, !1)
    }
    e.Util = {
        queryArray: function (t, o) {
            return o || (o = document.body), Array.prototype.slice.call(o.querySelectorAll(t))
        },
        touch: {
            isSupported: "ontouchstart" in o || navigator.maxTouchPoints,
            isDragging: !1
        }
    }, e.menu = document.querySelector(".st-nav"), n.prototype.openDropdown = function (t) {
        var o = this;
        if (this.activeDropdown !== t) {
            this.activeDropdown = t, this.container.classList.add("overlay-active"), this.container.classList.add("dropdown-active"), this.hasDropdownLinks.forEach(function (t) {
                t.classList.remove("active")
            }), t.classList.add("active");
            var e = t.getAttribute("data-dropdown"),
                n = "left",
                i = {
                    width: 0,
                    height: 0,
                    content: null
                };
            this.dropdownSections.forEach(function (t) {
                t.el.classList.remove("active"), t.el.classList.remove("left"), t.el.classList.remove("right"), t.name === e ? (t.el.classList.add("active"), n = "right", i = {
                    width: t.content.offsetWidth,
                    height: t.content.offsetHeight,
                    content: t.content
                }) : t.el.classList.add(n)
            });
            var s = i.width / 520,
                r = i.height / 400,
                a = t.getBoundingClientRect(),
                c = a.left + a.width / 2 - i.width / 2;
            c = Math.round(Math.max(c, 10)), clearTimeout(this.disableTransitionTimeout), this.enableTransitionTimeout = setTimeout(function () {
                o.container.classList.remove("no-dropdown-transition")
            }, 50), this.dropdownBackground.style.transform = "translateX(" + c + "px) scaleX(" + s + ") scaleY(" + r + ")", this.dropdownContainer.style.transform = "translateX(" + c + "px)", this.dropdownContainer.style.width = i.width + "px", this.dropdownContainer.style.height = i.height + "px";
            var d = Math.round(a.left + a.width / 2);
            this.dropdownArrow.style.transform = "translateX(" + d + "px) rotate(45deg)";
            var l = i.content.children[0].offsetHeight / r;
            this.dropdownBackgroundAlt.style.transform = "translateY(" + l + "px)"
        }
    }, n.prototype.closeDropdown = function () {
        var t = this;
        this.activeDropdown && (this.hasDropdownLinks.forEach(function (t, o) {
            t.classList.remove("active")
        }), clearTimeout(this.enableTransitionTimeout), this.disableTransitionTimeout = setTimeout(function () {
            t.container.classList.add("no-dropdown-transition")
        }, 50), this.container.classList.remove("overlay-active"), this.container.classList.remove("dropdown-active"), this.activeDropdown = void 0)
    }, n.prototype.toggleDropdown = function (t) {
        this.activeDropdown === t ? this.closeDropdown() : this.openDropdown(t)
    }, n.prototype.startCloseTimeout = function () {
        var t = this;
        t.closeDropdownTimeout = setTimeout(function () {
            t.closeDropdown()
        }, 50)
    }, n.prototype.stopCloseTimeout = function () {
        clearTimeout(this.closeDropdownTimeout)
    }, i.prototype.togglePopup = function () {
        var t = this.root.classList.contains(this.activeClass);
        this.closeAllPopups(!0), t || this.root.classList.add(this.activeClass)
    }, i.prototype.closeAllPopups = function (t) {
        for (var o = document.getElementsByClassName(this.activeClass), e = 0; e < o.length; e++) o[e].classList.remove(this.activeClass)
    }, t(function () {
        e.menu && (new n(e.menu), new i(".st-nav .st-nav-section.st-nav-mobile"))
    })
}(jQuery, window, {});

//svg.js

$(function () { $("img.inline-it").each(function () { var t = jQuery(this), i = t.attr("id"), r = t.attr("class"), a = t.attr("src"); jQuery.get(a, function (a) { var n = jQuery(a).find("svg"); void 0 !== i && (n = n.attr("id", i)), void 0 !== r && (n = n.attr("class", r + " inlined-svg")), n = n.removeAttr("xmlns:a"), t.replaceWith(n) }, "xml") }) });



//demo.js

!function (e) { "use strict"; var a = e(".price-toggle-wrap > a"), i = e(".pricing-tab-toggle-content"); a.on("click", function () { a.removeClass("active"), e(this).addClass("active"), i.removeClass("active"), i.eq(e(this).index()).addClass("active animated fadeInUp") }) }(window.jQuery);

! function () {
    "use strict";
    for (var e, t = function () { }, a = ["assert", "clear", "count", "debug", "dir", "dirxml", "error", "exception", "group", "groupCollapsed", "groupEnd", "info", "log", "markTimeline", "profile", "profileEnd", "table", "time", "timeEnd", "timeline", "timelineEnd", "timeStamp", "trace", "warn"], o = a.length, n = window.console = window.console || {}; o--;) n[e = a[o]] || (n[e] = t)
}(), $(function () {
    "use strict";
    var e = $(".main-nav"),
        t = $(".perspective-mockups"),
        a = $(".learn-more", ".lightweight-template"),
        o = function () {
            t.length && ($(window).outerWidth() < 768 ? t.css({
                top: a.offset().top + "px"
            }) : t.removeAttr("style"))
        },
        n = function () {
            $(window).scrollTop() >= 90 ? e.addClass("navbar-sticky") : e.removeClass("navbar-sticky")
        };
    $(window).on("scroll", n), n(), $("a.scrollto").on("click", function (e) {
        e.preventDefault();
        var t = this.hash;
        $("html, body").stop().animate({
            scrollTop: $(t).offset().top - 45
        }, 300, "easeInOutExpo", function () {
            window.location.hash = t
        })
    }), $(".navbar-toggler", e).on("click", function () {
        e.is(".st-nav") || e.toggleClass("navbar-expanded")
    }), $(".card-blog").on({
        click: function (e) {
            e.preventDefault();
            var t = $(this).removeClass("far").addClass("fas");
            t.hasClass("favorite") ? t.addClass("text-danger") : t.addClass("text-warning")
        },
        mouseenter: function () {
            $(this).addClass("fas")
        },
        mouseleave: function () {
            $(this).removeClass("fas")
        }
    }, "i.far"), t.removeClass("hidden-preload"), $(window).on("resize", o), o(), $(".login-form form").on("form.submitted", function (e, t) {
        window.location.replace("admin/")
    }), window.prettyPrint && prettyPrint(), AOS.init({
        offset: 100,
        duration: 1500,
        disable: "mobile"
    }), $(".typed").length && $(".typed").each(function (e, t) {
        var a = $(t).data("strings");
        new Typed(".typed", {
            strings: a,
            typeSpeed: 150,
            backDelay: 500,
            backSpeed: 50,
            Loop: !0
        })
    }), $(".counter").length && $(".counter").each(function (e, t) {
        new Waypoint({
            element: t,
            handler: function () {
                counterUp.default(t), this.destroy()
            },
            offset: "bottom-in-view"
        })
    }), $(".modal-popup").each(function () {
        var e = $(this),
            t = {
                image: {
                    closeOnContentClick: !0
                },
                gallery: {
                    delegate: "a",
                    type: "image",
                    tLoading: "Loading image #%curr%...",
                    mainClass: "mfp-with-zoom mfp-img-mobile",
                    gallery: {
                        enabled: !0,
                        navigateByImgClick: !0,
                        preload: [0, 1]
                    },
                    image: {
                        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
                    }
                }
            },
            a = e.data("type") || "inline",
            o = e.data("zoom") || !1,
            n = e.data("focus") || !1,
            i = {};
        o && (i.zoom = {
            enabled: !0,
            duration: o
        }), n && (i.focus = n), $.each(["image", "gallery"], function () {
            var o = e.data(this) || !1;
            o && (t[a][this] = o), e.removeAttr("data-" + this)
        });
        var s = $.extend({}, {
            removalDelay: 500,
            preloader: !1,
            midClick: !0,
            callbacks: {
                beforeOpen: function () {
                    this.st.mainClass = this.st.el.attr("data-effect")
                }
            }
        }, {
            type: a
        }, t[a], i);
        e.magnificPopup(s)
    }), $(document).on("click", ".modal-popup-dismiss", function (e) {
        e.preventDefault(), $.magnificPopup.close()
    }), $(".whyus-progress-bars").animateBar({
        orientation: "horizontal",
        step: 100,
        duration: 1e3,
        elements: [{
            label: "Implementation",
            value: 73,
            style: {
                progress: "progress-xs"
            }
        }, {
            label: "Design",
            value: 91,
            style: {
                progress: "progress-xs"
            }
        }, {
            label: "Beauty",
            value: 97,
            style: {
                progress: "progress-xs"
            }
        }, {
            label: "Branding",
            value: 61,
            style: {
                progress: "progress-xs"
            }
        }, {
            label: "Responsiveness",
            value: 100,
            style: {
                progress: "progress-xs"
            }
        }]
    }), feather.replace(), $(".pricing-table-basis").on("change", 'input[name="pricing-value"]', function () {
        var e = this.value;
        $(".odometer").each(function () {
            this.innerHTML = $(this).data(e + "-price")
        })
    })
});

//input.js
! function (t) {
    "function" == typeof define && define.amd ? define(["jquery"], function (i) {
        t(i, window, document)
    }) : "object" == typeof module && module.exports ? module.exports = t(require("jquery"), window, document) : t(jQuery, window, document)
}(function (t, i, e, n) {
    "use strict";
    var a = "intlTelInput",
        o = 1,
        s = {
            allowDropdown: !0,
            autoHideDialCode: !0,
            autoPlaceholder: "polite",
            customPlaceholder: null,
            dropdownContainer: "",
            excludeCountries: [],
            formatOnDisplay: !0,
            geoIpLookup: null,
            initialCountry: "",
            nationalMode: !0,
            onlyCountries: [],
            placeholderNumberType: "MOBILE",
            preferredCountries: ["us", "gb"],
            separateDialCode: !1,
            utilsScript: ""
        },
        r = 38,
        l = 40,
        u = 13,
        h = 27,
        d = 43,
        c = 65,
        p = 90,
        f = 32,
        g = 9,
        C = ["800", "822", "833", "844", "855", "866", "877", "880", "881", "882", "883", "884", "885", "886", "887", "888", "889"];

    function y(i, e) {
        this.telInput = t(i), this.options = t.extend({}, s, e), this.ns = "." + a + o++, this.isGoodBrowser = Boolean(i.setSelectionRange), this.hadInitialPlaceholder = Boolean(t(i).attr("placeholder"))
    }
    t(i).on("load", function () {
        t.fn[a].windowLoaded = !0
    }), y.prototype = {
        _init: function () {
            return this.options.nationalMode && (this.options.autoHideDialCode = !1), this.options.separateDialCode && (this.options.autoHideDialCode = this.options.nationalMode = !1), this.isMobile = /Android.+Mobile|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), this.isMobile && (t("body").addClass("iti-mobile"), this.options.dropdownContainer || (this.options.dropdownContainer = "body")), this.autoCountryDeferred = new t.Deferred, this.utilsScriptDeferred = new t.Deferred, this._processCountryData(), this._generateMarkup(), this._setInitialState(), this._initListeners(), this._initRequests(), [this.autoCountryDeferred, this.utilsScriptDeferred]
        },
        _processCountryData: function () {
            this._processAllCountries(), this._processCountryCodes(), this._processPreferredCountries()
        },
        _addCountryCode: function (t, i, e) {
            i in this.countryCodes || (this.countryCodes[i] = []);
            var n = e || 0;
            this.countryCodes[i][n] = t
        },
        _filterCountries: function (t, i) {
            var e;
            for (e = 0; e < t.length; e++) t[e] = t[e].toLowerCase();
            for (this.countries = [], e = 0; e < m.length; e++) i(t.indexOf(m[e].iso2)) && this.countries.push(m[e])
        },
        _processAllCountries: function () {
            this.options.onlyCountries.length ? this._filterCountries(this.options.onlyCountries, function (t) {
                return t > -1
            }) : this.options.excludeCountries.length ? this._filterCountries(this.options.excludeCountries, function (t) {
                return -1 == t
            }) : this.countries = m
        },
        _processCountryCodes: function () {
            this.countryCodes = {};
            for (var t = 0; t < this.countries.length; t++) {
                var i = this.countries[t];
                if (this._addCountryCode(i.iso2, i.dialCode, i.priority), i.areaCodes)
                    for (var e = 0; e < i.areaCodes.length; e++) this._addCountryCode(i.iso2, i.dialCode + i.areaCodes[e])
            }
        },
        _processPreferredCountries: function () {
            this.preferredCountries = [];
            for (var t = 0; t < this.options.preferredCountries.length; t++) {
                var i = this.options.preferredCountries[t].toLowerCase(),
                    e = this._getCountryData(i, !1, !0);
                e && this.preferredCountries.push(e)
            }
        },
        _generateMarkup: function () {
            this.telInput.attr("autocomplete", "off");
            var i = "intl-tel-input";
            this.options.allowDropdown && (i += " allow-dropdown"), this.options.separateDialCode && (i += " separate-dial-code"), this.telInput.wrap(t("<div>", {
                class: i
            })), this.flagsContainer = t("<div>", {
                class: "flag-container"
            }).insertBefore(this.telInput);
            var e = t("<div>", {
                class: "selected-flag"
            });
            e.appendTo(this.flagsContainer), this.selectedFlagInner = t("<div>", {
                class: "iti-flag"
            }).appendTo(e), this.options.separateDialCode && (this.selectedDialCode = t("<div>", {
                class: "selected-dial-code"
            }).appendTo(e)), this.options.allowDropdown ? (e.attr("tabindex", "0"), t("<div>", {
                class: "iti-arrow"
            }).appendTo(e), this.countryList = t("<ul>", {
                class: "country-list hide"
            }), this.preferredCountries.length && (this._appendListItems(this.preferredCountries, "preferred"), t("<li>", {
                class: "divider"
            }).appendTo(this.countryList)), this._appendListItems(this.countries, ""), this.countryListItems = this.countryList.children(".country"), this.options.dropdownContainer ? this.dropdown = t("<div>", {
                class: "intl-tel-input iti-container"
            }).append(this.countryList) : this.countryList.appendTo(this.flagsContainer)) : this.countryListItems = t()
        },
        _appendListItems: function (t, i) {
            for (var e = "", n = 0; n < t.length; n++) {
                var a = t[n];
                e += "<li class='country " + i + "' data-dial-code='" + a.dialCode + "' data-country-code='" + a.iso2 + "'>", e += "<div class='flag-box'><div class='iti-flag " + a.iso2 + "'></div></div>", e += "<span class='country-name'>" + a.name + "</span>", e += "<span class='dial-code'>+" + a.dialCode + "</span>", e += "</li>"
            }
            this.countryList.append(e)
        },
        _setInitialState: function () {
            var t = this.telInput.val();
            this._getDialCode(t) && !this._isRegionlessNanp(t) ? this._updateFlagFromNumber(t) : "auto" !== this.options.initialCountry && (this.options.initialCountry ? this._setFlag(this.options.initialCountry.toLowerCase()) : (this.defaultCountry = this.preferredCountries.length ? this.preferredCountries[0].iso2 : this.countries[0].iso2, t || this._setFlag(this.defaultCountry)), t || this.options.nationalMode || this.options.autoHideDialCode || this.options.separateDialCode || this.telInput.val("+" + this.selectedCountryData.dialCode)), t && this._updateValFromNumber(t)
        },
        _initListeners: function () {
            this._initKeyListeners(), this.options.autoHideDialCode && this._initFocusListeners(), this.options.allowDropdown && this._initDropdownListeners()
        },
        _initDropdownListeners: function () {
            var t = this,
                i = this.telInput.closest("label");
            i.length && i.on("click" + this.ns, function (i) {
                t.countryList.hasClass("hide") ? t.telInput.focus() : i.preventDefault()
            }), this.selectedFlagInner.parent().on("click" + this.ns, function (i) {
                !t.countryList.hasClass("hide") || t.telInput.prop("disabled") || t.telInput.prop("readonly") || t._showDropdown()
            }), this.flagsContainer.on("keydown" + t.ns, function (i) {
                !t.countryList.hasClass("hide") || i.which != r && i.which != l && i.which != f && i.which != u || (i.preventDefault(), i.stopPropagation(), t._showDropdown()), i.which == g && t._closeDropdown()
            })
        },
        _initRequests: function () {
            var e = this;
            this.options.utilsScript ? t.fn[a].windowLoaded ? t.fn[a].loadUtils(this.options.utilsScript, this.utilsScriptDeferred) : t(i).on("load", function () {
                t.fn[a].loadUtils(e.options.utilsScript, e.utilsScriptDeferred)
            }) : this.utilsScriptDeferred.resolve(), "auto" === this.options.initialCountry ? this._loadAutoCountry() : this.autoCountryDeferred.resolve()
        },
        _loadAutoCountry: function () {
            t.fn[a].autoCountry ? this.handleAutoCountry() : t.fn[a].startedLoadingAutoCountry || (t.fn[a].startedLoadingAutoCountry = !0, "function" == typeof this.options.geoIpLookup && this.options.geoIpLookup(function (i) {
                t.fn[a].autoCountry = i.toLowerCase(), setTimeout(function () {
                    t(".intl-tel-input input").intlTelInput("handleAutoCountry")
                })
            }))
        },
        _initKeyListeners: function () {
            var t = this;
            this.telInput.on("keyup" + this.ns, function () {
                t._updateFlagFromNumber(t.telInput.val()) && t._triggerCountryChange()
            }), this.telInput.on("cut" + this.ns + " paste" + this.ns, function () {
                setTimeout(function () {
                    t._updateFlagFromNumber(t.telInput.val()) && t._triggerCountryChange()
                })
            })
        },
        _cap: function (t) {
            var i = this.telInput.attr("maxlength");
            return i && t.length > i ? t.substr(0, i) : t
        },
        _initFocusListeners: function () {
            var i = this;
            this.telInput.on("mousedown" + this.ns, function (t) {
                i.telInput.is(":focus") || i.telInput.val() || (t.preventDefault(), i.telInput.focus())
            }), this.telInput.on("focus" + this.ns, function (t) {
                i.telInput.val() || i.telInput.prop("readonly") || !i.selectedCountryData.dialCode || (i.telInput.val("+" + i.selectedCountryData.dialCode), i.telInput.one("keypress.plus" + i.ns, function (t) {
                    t.which == d && i.telInput.val("")
                }), setTimeout(function () {
                    var t = i.telInput[0];
                    if (i.isGoodBrowser) {
                        var e = i.telInput.val().length;
                        t.setSelectionRange(e, e)
                    }
                }))
            });
            var e = this.telInput.prop("form");
            e && t(e).on("submit" + this.ns, function () {
                i._removeEmptyDialCode()
            }), this.telInput.on("blur" + this.ns, function () {
                i._removeEmptyDialCode()
            })
        },
        _removeEmptyDialCode: function () {
            var t = this.telInput.val();
            if ("+" == t.charAt(0)) {
                var i = this._getNumeric(t);
                i && this.selectedCountryData.dialCode != i || this.telInput.val("")
            }
            this.telInput.off("keypress.plus" + this.ns)
        },
        _getNumeric: function (t) {
            return t.replace(/\D/g, "")
        },
        _showDropdown: function () {
            this._setDropdownPosition();
            var t = this.countryList.children(".active");
            t.length && (this._highlightListItem(t), this._scrollTo(t)), this._bindDropdownListeners(), this.selectedFlagInner.children(".iti-arrow").addClass("up")
        },
        _setDropdownPosition: function () {
            var e = this;
            if (this.options.dropdownContainer && this.dropdown.appendTo(this.options.dropdownContainer), this.dropdownHeight = this.countryList.removeClass("hide").outerHeight(), !this.isMobile) {
                var n = this.telInput.offset(),
                    a = n.top,
                    o = t(i).scrollTop(),
                    s = a + this.telInput.outerHeight() + this.dropdownHeight < o + t(i).height(),
                    r = a - this.dropdownHeight > o;
                if (this.countryList.toggleClass("dropup", !s && r), this.options.dropdownContainer) {
                    var l = !s && r ? 0 : this.telInput.innerHeight();
                    this.dropdown.css({
                        top: a + l,
                        left: n.left
                    }), t(i).on("scroll" + this.ns, function () {
                        e._closeDropdown()
                    })
                }
            }
        },
        _bindDropdownListeners: function () {
            var i = this;
            this.countryList.on("mouseover" + this.ns, ".country", function (e) {
                i._highlightListItem(t(this))
            }), this.countryList.on("click" + this.ns, ".country", function (e) {
                i._selectListItem(t(this))
            });
            var n = !0;
            t("html").on("click" + this.ns, function (t) {
                n || i._closeDropdown(), n = !1
            });
            var a = "",
                o = null;
            t(e).on("keydown" + this.ns, function (t) {
                t.preventDefault(), t.which == r || t.which == l ? i._handleUpDownKey(t.which) : t.which == u ? i._handleEnterKey() : t.which == h ? i._closeDropdown() : (t.which >= c && t.which <= p || t.which == f) && (o && clearTimeout(o), a += String.fromCharCode(t.which), i._searchForCountry(a), o = setTimeout(function () {
                    a = ""
                }, 1e3))
            })
        },
        _handleUpDownKey: function (t) {
            var i = this.countryList.children(".highlight").first(),
                e = t == r ? i.prev() : i.next();
            e.length && (e.hasClass("divider") && (e = t == r ? e.prev() : e.next()), this._highlightListItem(e), this._scrollTo(e))
        },
        _handleEnterKey: function () {
            var t = this.countryList.children(".highlight").first();
            t.length && this._selectListItem(t)
        },
        _searchForCountry: function (t) {
            for (var i = 0; i < this.countries.length; i++)
                if (this._startsWith(this.countries[i].name, t)) {
                    var e = this.countryList.children("[data-country-code=" + this.countries[i].iso2 + "]").not(".preferred");
                    this._highlightListItem(e), this._scrollTo(e, !0);
                    break
                }
        },
        _startsWith: function (t, i) {
            return t.substr(0, i.length).toUpperCase() == i
        },
        _updateValFromNumber: function (t) {
            if (this.options.formatOnDisplay && i.intlTelInputUtils && this.selectedCountryData) {
                var e = this.options.separateDialCode || !this.options.nationalMode && "+" == t.charAt(0) ? intlTelInputUtils.numberFormat.INTERNATIONAL : intlTelInputUtils.numberFormat.NATIONAL;
                t = intlTelInputUtils.formatNumber(t, this.selectedCountryData.iso2, e)
            }
            t = this._beforeSetNumber(t), this.telInput.val(t)
        },
        _updateFlagFromNumber: function (t) {
            t && this.options.nationalMode && this.selectedCountryData && "1" == this.selectedCountryData.dialCode && "+" != t.charAt(0) && ("1" != t.charAt(0) && (t = "1" + t), t = "+" + t);
            var i = this._getDialCode(t),
                e = null,
                n = this._getNumeric(t);
            if (i) {
                var a = this.countryCodes[this._getNumeric(i)],
                    o = this.selectedCountryData && a.indexOf(this.selectedCountryData.iso2) > -1,
                    s = "+1" == i && n.length >= 4;
                if ((!(this.selectedCountryData && "1" == this.selectedCountryData.dialCode) || !this._isRegionlessNanp(n)) && (!o || s))
                    for (var r = 0; r < a.length; r++)
                        if (a[r]) {
                            e = a[r];
                            break
                        }
            } else "+" == t.charAt(0) && n.length ? e = "" : t && "+" != t || (e = this.defaultCountry);
            return null !== e && this._setFlag(e)
        },
        _isRegionlessNanp: function (t) {
            var i = this._getNumeric(t);
            if ("1" == i.charAt(0)) {
                var e = i.substr(1, 3);
                return C.indexOf(e) > -1
            }
            return !1
        },
        _highlightListItem: function (t) {
            this.countryListItems.removeClass("highlight"), t.addClass("highlight")
        },
        _getCountryData: function (t, i, e) {
            for (var n = i ? m : this.countries, a = 0; a < n.length; a++)
                if (n[a].iso2 == t) return n[a];
            if (e) return null;
            throw new Error("No country data for '" + t + "'")
        },
        _setFlag: function (t) {
            var i = this.selectedCountryData && this.selectedCountryData.iso2 ? this.selectedCountryData : {};
            this.selectedCountryData = t ? this._getCountryData(t, !1, !1) : {}, this.selectedCountryData.iso2 && (this.defaultCountry = this.selectedCountryData.iso2), this.selectedFlagInner.attr("class", "iti-flag " + t);
            var e = t ? this.selectedCountryData.name + ": +" + this.selectedCountryData.dialCode : "Unknown";
            if (this.selectedFlagInner.parent().attr("title", e), this.options.separateDialCode) {
                var n = this.selectedCountryData.dialCode ? "+" + this.selectedCountryData.dialCode : "",
                    a = this.telInput.parent();
                i.dialCode && a.removeClass("iti-sdc-" + (i.dialCode.length + 1)), n && a.addClass("iti-sdc-" + n.length), this.selectedDialCode.text(n)
            }
            return this._updatePlaceholder(), this.countryListItems.removeClass("active"), t && this.countryListItems.find(".iti-flag." + t).first().closest(".country").addClass("active"), i.iso2 !== t
        },
        _updatePlaceholder: function () {
            var t = "aggressive" === this.options.autoPlaceholder || !this.hadInitialPlaceholder && (!0 === this.options.autoPlaceholder || "polite" === this.options.autoPlaceholder);
            if (i.intlTelInputUtils && t && this.selectedCountryData) {
                var e = intlTelInputUtils.numberType[this.options.placeholderNumberType],
                    n = this.selectedCountryData.iso2 ? intlTelInputUtils.getExampleNumber(this.selectedCountryData.iso2, this.options.nationalMode, e) : "";
                n = this._beforeSetNumber(n), "function" == typeof this.options.customPlaceholder && (n = this.options.customPlaceholder(n, this.selectedCountryData)), this.telInput.attr("placeholder", n)
            }
        },
        _selectListItem: function (t) {
            var i = this._setFlag(t.attr("data-country-code"));
            if (this._closeDropdown(), this._updateDialCode(t.attr("data-dial-code"), !0), this.telInput.focus(), this.isGoodBrowser) {
                var e = this.telInput.val().length;
                this.telInput[0].setSelectionRange(e, e)
            }
            i && this._triggerCountryChange()
        },
        _closeDropdown: function () {
            this.countryList.addClass("hide"), this.selectedFlagInner.children(".iti-arrow").removeClass("up"), t(e).off(this.ns), t("html").off(this.ns), this.countryList.off(this.ns), this.options.dropdownContainer && (this.isMobile || t(i).off("scroll" + this.ns), this.dropdown.detach())
        },
        _scrollTo: function (t, i) {
            var e = this.countryList,
                n = e.height(),
                a = e.offset().top,
                o = a + n,
                s = t.outerHeight(),
                r = t.offset().top,
                l = r + s,
                u = r - a + e.scrollTop(),
                h = n / 2 - s / 2;
            if (r < a) i && (u -= h), e.scrollTop(u);
            else if (l > o) {
                i && (u += h);
                var d = n - s;
                e.scrollTop(u - d)
            }
        },
        _updateDialCode: function (t, i) {
            var e, n = this.telInput.val();
            if (t = "+" + t, "+" == n.charAt(0)) {
                var a = this._getDialCode(n);
                e = a ? n.replace(a, t) : t
            } else {
                if (this.options.nationalMode || this.options.separateDialCode) return;
                if (n) e = t + n;
                else {
                    if (!i && this.options.autoHideDialCode) return;
                    e = t
                }
            }
            this.telInput.val(e)
        },
        _getDialCode: function (i) {
            var e = "";
            if ("+" == i.charAt(0))
                for (var n = "", a = 0; a < i.length; a++) {
                    var o = i.charAt(a);
                    if (t.isNumeric(o) && (n += o, this.countryCodes[n] && (e = i.substr(0, a + 1)), 4 == n.length)) break
                }
            return e
        },
        _getFullNumber: function () {
            var i = t.trim(this.telInput.val()),
                e = this.selectedCountryData.dialCode,
                n = this._getNumeric(i),
                a = "1" == n.charAt(0) ? n : "1" + n;
            return (this.options.separateDialCode ? "+" + e : "+" != i.charAt(0) && "1" != i.charAt(0) && e && "1" == e.charAt(0) && 4 == e.length && e != a.substr(0, 4) ? e.substr(1) : "") + i
        },
        _beforeSetNumber: function (t) {
            if (this.options.separateDialCode) {
                var i = this._getDialCode(t);
                if (i) {
                    null !== this.selectedCountryData.areaCodes && (i = "+" + this.selectedCountryData.dialCode);
                    var e = " " === t[i.length] || "-" === t[i.length] ? i.length + 1 : i.length;
                    t = t.substr(e)
                }
            }
            return this._cap(t)
        },
        _triggerCountryChange: function () {
            this.telInput.trigger("countrychange", this.selectedCountryData)
        },
        handleAutoCountry: function () {
            "auto" === this.options.initialCountry && (this.defaultCountry = t.fn[a].autoCountry, this.telInput.val() || this.setCountry(this.defaultCountry), this.autoCountryDeferred.resolve())
        },
        handleUtils: function () {
            i.intlTelInputUtils && (this.telInput.val() && this._updateValFromNumber(this.telInput.val()), this._updatePlaceholder()), this.utilsScriptDeferred.resolve()
        },
        destroy: function () {
            if (this.allowDropdown && (this._closeDropdown(), this.selectedFlagInner.parent().off(this.ns), this.telInput.closest("label").off(this.ns)), this.options.autoHideDialCode) {
                var i = this.telInput.prop("form");
                i && t(i).off(this.ns)
            }
            this.telInput.off(this.ns), this.telInput.parent().before(this.telInput).remove()
        },
        getExtension: function () {
            return i.intlTelInputUtils ? intlTelInputUtils.getExtension(this._getFullNumber(), this.selectedCountryData.iso2) : ""
        },
        getNumber: function (t) {
            return i.intlTelInputUtils ? intlTelInputUtils.formatNumber(this._getFullNumber(), this.selectedCountryData.iso2, t) : ""
        },
        getNumberType: function () {
            return i.intlTelInputUtils ? intlTelInputUtils.getNumberType(this._getFullNumber(), this.selectedCountryData.iso2) : -99
        },
        getSelectedCountryData: function () {
            return this.selectedCountryData || {}
        },
        getValidationError: function () {
            return i.intlTelInputUtils ? intlTelInputUtils.getValidationError(this._getFullNumber(), this.selectedCountryData.iso2) : -99
        },
        isValidNumber: function () {
            var e = t.trim(this._getFullNumber()),
                n = this.options.nationalMode ? this.selectedCountryData.iso2 : "";
            return i.intlTelInputUtils ? intlTelInputUtils.isValidNumber(e, n) : null
        },
        setCountry: function (t) {
            t = t.toLowerCase(), this.selectedFlagInner.hasClass(t) || (this._setFlag(t), this._updateDialCode(this.selectedCountryData.dialCode, !1), this._triggerCountryChange())
        },
        setNumber: function (t) {
            var i = this._updateFlagFromNumber(t);
            this._updateValFromNumber(t), i && this._triggerCountryChange()
        }
    }, t.fn[a] = function (i) {
        var e, o = arguments;
        if (i === n || "object" == typeof i) {
            var s = [];
            return this.each(function () {
                if (!t.data(this, "plugin_" + a)) {
                    var e = new y(this, i),
                        n = e._init();
                    s.push(n[0]), s.push(n[1]), t.data(this, "plugin_" + a, e)
                }
            }), t.when.apply(null, s)
        }
        if ("string" == typeof i && "_" !== i[0]) return this.each(function () {
            var n = t.data(this, "plugin_" + a);
            n instanceof y && "function" == typeof n[i] && (e = n[i].apply(n, Array.prototype.slice.call(o, 1))), "destroy" === i && t.data(this, "plugin_" + a, null)
        }), e !== n ? e : this
    }, t.fn[a].getCountryData = function () {
        return m
    }, t.fn[a].loadUtils = function (i, e) {
        t.fn[a].loadedUtilsScript ? e && e.resolve() : (t.fn[a].loadedUtilsScript = !0, t.ajax({
            type: "GET",
            url: i,
            complete: function () {
                t(".intl-tel-input input").intlTelInput("handleUtils")
            },
            dataType: "script",
            cache: !0
        }))
    }, t.fn[a].version = "10.0.8", t.fn[a].defaults = s;
    for (var m = [
        ["Afghanistan (Ã¢â‚¬Â«Ã˜Â§Ã™ÂÃ˜ÂºÃ˜Â§Ã™â€ Ã˜Â³Ã˜ÂªÃ˜Â§Ã™â€ Ã¢â‚¬Â¬Ã¢â‚¬Å½)", "af", "93"],
        ["Albania (ShqipÃƒÂ«ri)", "al", "355"],
        ["Algeria (Ã¢â‚¬Â«Ã˜Â§Ã™â€žÃ˜Â¬Ã˜Â²Ã˜Â§Ã˜Â¦Ã˜Â±Ã¢â‚¬Â¬Ã¢â‚¬Å½)", "dz", "213"],
        ["American Samoa", "as", "1684"],
        ["Andorra", "ad", "376"],
        ["Angola", "ao", "244"],
        ["Anguilla", "ai", "1264"],
        ["Antigua and Barbuda", "ag", "1268"],
        ["Argentina", "ar", "54"],
        ["Armenia (Ã•â‚¬Ã•Â¡Ã•ÂµÃ•Â¡Ã•Â½Ã•Â¿Ã•Â¡Ã•Â¶)", "am", "374"],
        ["Aruba", "aw", "297"],
        ["Australia", "au", "61", 0],
        ["Austria (Ãƒâ€“sterreich)", "at", "43"],
        ["Azerbaijan (AzÃ‰â„¢rbaycan)", "az", "994"],
        ["Bahamas", "bs", "1242"],
        ["Bahrain (Ã¢â‚¬Â«Ã˜Â§Ã™â€žÃ˜Â¨Ã˜Â­Ã˜Â±Ã™Å Ã™â€ Ã¢â‚¬Â¬Ã¢â‚¬Å½)", "bh", "973"],
        ["Bangladesh (Ã Â¦Â¬Ã Â¦Â¾Ã Â¦â€šÃ Â¦Â²Ã Â¦Â¾Ã Â¦Â¦Ã Â§â€¡Ã Â¦Â¶)", "bd", "880"],
        ["Barbados", "bb", "1246"],
        ["Belarus (Ãâ€˜ÃÂµÃÂ»ÃÂ°Ã‘â‚¬Ã‘Æ’Ã‘ÂÃ‘Å’)", "by", "375"],
        ["Belgium (BelgiÃƒÂ«)", "be", "32"],
        ["Belize", "bz", "501"],
        ["Benin (BÃƒÂ©nin)", "bj", "229"],
        ["Bermuda", "bm", "1441"],
        ["Bhutan (Ã Â½ Ã Â½â€“Ã Â¾Â²Ã Â½Â´Ã Â½â€š)", "bt", "975"],
        ["Bolivia", "bo", "591"],
        ["Bosnia and Herzegovina (Ãâ€˜ÃÂ¾Ã‘ÂÃÂ½ÃÂ° ÃÂ¸ ÃÂ¥ÃÂµÃ‘â‚¬Ã‘â€ ÃÂµÃÂ³ÃÂ¾ÃÂ²ÃÂ¸ÃÂ½ÃÂ°)", "ba", "387"],
        ["Botswana", "bw", "267"],
        ["Brazil (Brasil)", "br", "55"],
        ["British Indian Ocean Territory", "io", "246"],
        ["British Virgin Islands", "vg", "1284"],
        ["Brunei", "bn", "673"],
        ["Bulgaria (Ãâ€˜Ã‘Å ÃÂ»ÃÂ³ÃÂ°Ã‘â‚¬ÃÂ¸Ã‘Â)", "bg", "359"],
        ["Burkina Faso", "bf", "226"],
        ["Burundi (Uburundi)", "bi", "257"],
        ["Cambodia (Ã¡Å¾â‚¬Ã¡Å¾ËœÃ¡Å¸â€™Ã¡Å¾â€“Ã¡Å¾Â»Ã¡Å¾â€¡Ã¡Å¾Â¶)", "kh", "855"],
        ["Cameroon (Cameroun)", "cm", "237"],
        ["Canada", "ca", "1", 1, ["204", "226", "236", "249", "250", "289", "306", "343", "365", "387", "403", "416", "418", "431", "437", "438", "450", "506", "514", "519", "548", "579", "581", "587", "604", "613", "639", "647", "672", "705", "709", "742", "778", "780", "782", "807", "819", "825", "867", "873", "902", "905"]],
        ["Cape Verde (Kabu Verdi)", "cv", "238"],
        ["Caribbean Netherlands", "bq", "599", 1],
        ["Cayman Islands", "ky", "1345"],
        ["Central African Republic (RÃƒÂ©publique centrafricaine)", "cf", "236"],
        ["Chad (Tchad)", "td", "235"],
        ["Chile", "cl", "56"],
        ["China (Ã¤Â¸Â­Ã¥â€ºÂ½)", "cn", "86"],
        ["Christmas Island", "cx", "61", 2],
        ["Cocos (Keeling) Islands", "cc", "61", 1],
        ["Colombia", "co", "57"],
        ["Comoros (Ã¢â‚¬Â«Ã˜Â¬Ã˜Â²Ã˜Â± Ã˜Â§Ã™â€žÃ™â€šÃ™â€¦Ã˜Â±Ã¢â‚¬Â¬Ã¢â‚¬Å½)", "km", "269"],
        ["Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)", "cd", "243"],
        ["Congo (Republic) (Congo-Brazzaville)", "cg", "242"],
        ["Cook Islands", "ck", "682"],
        ["Costa Rica", "cr", "506"],
        ["CÃƒÂ´te dÃ¢â‚¬â„¢Ivoire", "ci", "225"],
        ["Croatia (Hrvatska)", "hr", "385"],
        ["Cuba", "cu", "53"],
        ["CuraÃƒÂ§ao", "cw", "599", 0],
        ["Cyprus (ÃŽÅ¡ÃÂÃâ‚¬ÃÂÃŽÂ¿Ãâ€š)", "cy", "357"],
        ["Czech Republic (Ã„Å’eskÃƒÂ¡ republika)", "cz", "420"],
        ["Denmark (Danmark)", "dk", "45"],
        ["Djibouti", "dj", "253"],
        ["Dominica", "dm", "1767"],
        ["Dominican Republic (RepÃƒÂºblica Dominicana)", "do", "1", 2, ["809", "829", "849"]],
        ["Ecuador", "ec", "593"],
        ["Egypt (Ã¢â‚¬Â«Ã™â€¦Ã˜ÂµÃ˜Â±Ã¢â‚¬Â¬Ã¢â‚¬Å½)", "eg", "20"],
        ["El Salvador", "sv", "503"],
        ["Equatorial Guinea (Guinea Ecuatorial)", "gq", "240"],
        ["Eritrea", "er", "291"],
        ["Estonia (Eesti)", "ee", "372"],
        ["Ethiopia", "et", "251"],
        ["Falkland Islands (Islas Malvinas)", "fk", "500"],
        ["Faroe Islands (FÃƒÂ¸royar)", "fo", "298"],
        ["Fiji", "fj", "679"],
        ["Finland (Suomi)", "fi", "358", 0],
        ["France", "fr", "33"],
        ["French Guiana (Guyane franÃƒÂ§aise)", "gf", "594"],
        ["French Polynesia (PolynÃƒÂ©sie franÃƒÂ§aise)", "pf", "689"],
        ["Gabon", "ga", "241"],
        ["Gambia", "gm", "220"],
        ["Georgia (Ã¡Æ’Â¡Ã¡Æ’ÂÃ¡Æ’Â¥Ã¡Æ’ÂÃ¡Æ’ Ã¡Æ’â€”Ã¡Æ’â€¢Ã¡Æ’â€Ã¡Æ’Å¡Ã¡Æ’Â)", "ge", "995"],
        ["Germany (Deutschland)", "de", "49"],
        ["Ghana (Gaana)", "gh", "233"],
        ["Gibraltar", "gi", "350"],
        ["Greece (ÃŽâ€¢ÃŽÂ»ÃŽÂ»ÃŽÂ¬ÃŽÂ´ÃŽÂ±)", "gr", "30"],
        ["Greenland (Kalaallit Nunaat)", "gl", "299"],
        ["Grenada", "gd", "1473"],
        ["Guadeloupe", "gp", "590", 0],
        ["Guam", "gu", "1671"],
        ["Guatemala", "gt", "502"],
        ["Guernsey", "gg", "44", 1],
        ["Guinea (GuinÃƒÂ©e)", "gn", "224"],
        ["Guinea-Bissau (GuinÃƒÂ© Bissau)", "gw", "245"],
        ["Guyana", "gy", "592"],
        ["Haiti", "ht", "509"],
        ["Honduras", "hn", "504"],
        ["Hong Kong (Ã©Â¦â„¢Ã¦Â¸Â¯)", "hk", "852"],
        ["Hungary (MagyarorszÃƒÂ¡g)", "hu", "36"],
        ["Iceland (ÃƒÂsland)", "is", "354"],
        ["India (Ã Â¤Â­Ã Â¤Â¾Ã Â¤Â°Ã Â¤Â¤)", "in", "91"],
        ["Indonesia", "id", "62"],
        ["Iran (Ã¢â‚¬Â«Ã˜Â§Ã›Å’Ã˜Â±Ã˜Â§Ã™â€ Ã¢â‚¬Â¬Ã¢â‚¬Å½)", "ir", "98"],
        ["Iraq (Ã¢â‚¬Â«Ã˜Â§Ã™â€žÃ˜Â¹Ã˜Â±Ã˜Â§Ã™â€šÃ¢â‚¬Â¬Ã¢â‚¬Å½)", "iq", "964"],
        ["Ireland", "ie", "353"],
        ["Isle of Man", "im", "44", 2],
        ["Israel (Ã¢â‚¬Â«Ã—â„¢Ã—Â©Ã—Â¨Ã—ÂÃ—Å“Ã¢â‚¬Â¬Ã¢â‚¬Å½)", "il", "972"],
        ["Italy (Italia)", "it", "39", 0],
        ["Jamaica", "jm", "1876"],
        ["Japan (Ã¦â€”Â¥Ã¦Å“Â¬)", "jp", "81"],
        ["Jersey", "je", "44", 3],
        ["Jordan (Ã¢â‚¬Â«Ã˜Â§Ã™â€žÃ˜Â£Ã˜Â±Ã˜Â¯Ã™â€ Ã¢â‚¬Â¬Ã¢â‚¬Å½)", "jo", "962"],
        ["Kazakhstan (ÃÅ¡ÃÂ°ÃÂ·ÃÂ°Ã‘â€¦Ã‘ÂÃ‘â€šÃÂ°ÃÂ½)", "kz", "7", 1],
        ["Kenya", "ke", "254"],
        ["Kiribati", "ki", "686"],
        ["Kosovo", "xk", "383"],
        ["Kuwait (Ã¢â‚¬Â«Ã˜Â§Ã™â€žÃ™Æ’Ã™Ë†Ã™Å Ã˜ÂªÃ¢â‚¬Â¬Ã¢â‚¬Å½)", "kw", "965"],
        ["Kyrgyzstan (ÃÅ¡Ã‘â€¹Ã‘â‚¬ÃÂ³Ã‘â€¹ÃÂ·Ã‘ÂÃ‘â€šÃÂ°ÃÂ½)", "kg", "996"],
        ["Laos (Ã ÂºÂ¥Ã ÂºÂ²Ã ÂºÂ§)", "la", "856"],
        ["Latvia (Latvija)", "lv", "371"],
        ["Lebanon (Ã¢â‚¬Â«Ã™â€žÃ˜Â¨Ã™â€ Ã˜Â§Ã™â€ Ã¢â‚¬Â¬Ã¢â‚¬Å½)", "lb", "961"],
        ["Lesotho", "ls", "266"],
        ["Liberia", "lr", "231"],
        ["Libya (Ã¢â‚¬Â«Ã™â€žÃ™Å Ã˜Â¨Ã™Å Ã˜Â§Ã¢â‚¬Â¬Ã¢â‚¬Å½)", "ly", "218"],
        ["Liechtenstein", "li", "423"],
        ["Lithuania (Lietuva)", "lt", "370"],
        ["Luxembourg", "lu", "352"],
        ["Macau (Ã¦Â¾Â³Ã©â€“â‚¬)", "mo", "853"],
        ["Macedonia (FYROM) (ÃÅ“ÃÂ°ÃÂºÃÂµÃÂ´ÃÂ¾ÃÂ½ÃÂ¸Ã‘ËœÃÂ°)", "mk", "389"],
        ["Madagascar (Madagasikara)", "mg", "261"],
        ["Malawi", "mw", "265"],
        ["Malaysia", "my", "60"],
        ["Maldives", "mv", "960"],
        ["Mali", "ml", "223"],
        ["Malta", "mt", "356"],
        ["Marshall Islands", "mh", "692"],
        ["Martinique", "mq", "596"],
        ["Mauritania (Ã¢â‚¬Â«Ã™â€¦Ã™Ë†Ã˜Â±Ã™Å Ã˜ÂªÃ˜Â§Ã™â€ Ã™Å Ã˜Â§Ã¢â‚¬Â¬Ã¢â‚¬Å½)", "mr", "222"],
        ["Mauritius (Moris)", "mu", "230"],
        ["Mayotte", "yt", "262", 1],
        ["Mexico (MÃƒÂ©xico)", "mx", "52"],
        ["Micronesia", "fm", "691"],
        ["Moldova (Republica Moldova)", "md", "373"],
        ["Monaco", "mc", "377"],
        ["Mongolia (ÃÅ“ÃÂ¾ÃÂ½ÃÂ³ÃÂ¾ÃÂ»)", "mn", "976"],
        ["Montenegro (Crna Gora)", "me", "382"],
        ["Montserrat", "ms", "1664"],
        ["Morocco (Ã¢â‚¬Â«Ã˜Â§Ã™â€žÃ™â€¦Ã˜ÂºÃ˜Â±Ã˜Â¨Ã¢â‚¬Â¬Ã¢â‚¬Å½)", "ma", "212", 0],
        ["Mozambique (MoÃƒÂ§ambique)", "mz", "258"],
        ["Myanmar (Burma) (Ã¡â‚¬â„¢Ã¡â‚¬Â¼Ã¡â‚¬â€Ã¡â‚¬ÂºÃ¡â‚¬â„¢Ã¡â‚¬Â¬)", "mm", "95"],
        ["Namibia (NamibiÃƒÂ«)", "na", "264"],
        ["Nauru", "nr", "674"],
        ["Nepal (Ã Â¤Â¨Ã Â¥â€¡Ã Â¤ÂªÃ Â¤Â¾Ã Â¤Â²)", "np", "977"],
        ["Netherlands (Nederland)", "nl", "31"],
        ["New Caledonia (Nouvelle-CalÃƒÂ©donie)", "nc", "687"],
        ["New Zealand", "nz", "64"],
        ["Nicaragua", "ni", "505"],
        ["Niger (Nijar)", "ne", "227"],
        ["Nigeria", "ng", "234"],
        ["Niue", "nu", "683"],
        ["Norfolk Island", "nf", "672"],
        ["North Korea (Ã¬Â¡Â°Ã¬â€ž  Ã«Â¯Â¼Ã¬Â£Â¼Ã¬Â£Â¼Ã¬ÂËœ Ã¬ÂÂ¸Ã«Â¯Â¼ ÃªÂ³ÂµÃ­â„¢â€ÃªÂµÂ­)", "kp", "850"],
        ["Northern Mariana Islands", "mp", "1670"],
        ["Norway (Norge)", "no", "47", 0],
        ["Oman (Ã¢â‚¬Â«Ã˜Â¹Ã™ÂÃ™â€¦Ã˜Â§Ã™â€ Ã¢â‚¬Â¬Ã¢â‚¬Å½)", "om", "968"],
        ["Pakistan (Ã¢â‚¬Â«Ã™Â¾Ã˜Â§ÃšÂ©Ã˜Â³Ã˜ÂªÃ˜Â§Ã™â€ Ã¢â‚¬Â¬Ã¢â‚¬Å½)", "pk", "92"],
        ["Palau", "pw", "680"],
        ["Palestine (Ã¢â‚¬Â«Ã™ÂÃ™â€žÃ˜Â³Ã˜Â·Ã™Å Ã™â€ Ã¢â‚¬Â¬Ã¢â‚¬Å½)", "ps", "970"],
        ["Panama (PanamÃƒÂ¡)", "pa", "507"],
        ["Papua New Guinea", "pg", "675"],
        ["Paraguay", "py", "595"],
        ["Peru (PerÃƒÂº)", "pe", "51"],
        ["Philippines", "ph", "63"],
        ["Poland (Polska)", "pl", "48"],
        ["Portugal", "pt", "351"],
        ["Puerto Rico", "pr", "1", 3, ["787", "939"]],
        ["Qatar (Ã¢â‚¬Â«Ã™â€šÃ˜Â·Ã˜Â±Ã¢â‚¬Â¬Ã¢â‚¬Å½)", "qa", "974"],
        ["RÃƒÂ©union (La RÃƒÂ©union)", "re", "262", 0],
        ["Romania (RomÃƒÂ¢nia)", "ro", "40"],
        ["Russia (Ã ÃÂ¾Ã‘ÂÃ‘ÂÃÂ¸Ã‘Â)", "ru", "7", 0],
        ["Rwanda", "rw", "250"],
        ["Saint BarthÃƒÂ©lemy (Saint-BarthÃƒÂ©lemy)", "bl", "590", 1],
        ["Saint Helena", "sh", "290"],
        ["Saint Kitts and Nevis", "kn", "1869"],
        ["Saint Lucia", "lc", "1758"],
        ["Saint Martin (Saint-Martin (partie franÃƒÂ§aise))", "mf", "590", 2],
        ["Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)", "pm", "508"],
        ["Saint Vincent and the Grenadines", "vc", "1784"],
        ["Samoa", "ws", "685"],
        ["San Marino", "sm", "378"],
        ["SÃƒÂ£o TomÃƒÂ© and PrÃƒÂ­ncipe (SÃƒÂ£o TomÃƒÂ© e PrÃƒÂ­ncipe)", "st", "239"],
        ["Saudi Arabia (Ã¢â‚¬Â«Ã˜Â§Ã™â€žÃ™â€¦Ã™â€¦Ã™â€žÃ™Æ’Ã˜Â© Ã˜Â§Ã™â€žÃ˜Â¹Ã˜Â±Ã˜Â¨Ã™Å Ã˜Â© Ã˜Â§Ã™â€žÃ˜Â³Ã˜Â¹Ã™Ë†Ã˜Â¯Ã™Å Ã˜Â©Ã¢â‚¬Â¬Ã¢â‚¬Å½)", "sa", "966"],
        ["Senegal (SÃƒÂ©nÃƒÂ©gal)", "sn", "221"],
        ["Serbia (ÃÂ¡Ã‘â‚¬ÃÂ±ÃÂ¸Ã‘ËœÃÂ°)", "rs", "381"],
        ["Seychelles", "sc", "248"],
        ["Sierra Leone", "sl", "232"],
        ["Singapore", "sg", "65"],
        ["Sint Maarten", "sx", "1721"],
        ["Slovakia (Slovensko)", "sk", "421"],
        ["Slovenia (Slovenija)", "si", "386"],
        ["Solomon Islands", "sb", "677"],
        ["Somalia (Soomaaliya)", "so", "252"],
        ["South Africa", "za", "27"],
        ["South Korea (Ã«Å’â‚¬Ã­â€¢Å“Ã«Â¯Â¼ÃªÂµÂ­)", "kr", "82"],
        ["South Sudan (Ã¢â‚¬Â«Ã˜Â¬Ã™â€ Ã™Ë†Ã˜Â¨ Ã˜Â§Ã™â€žÃ˜Â³Ã™Ë†Ã˜Â¯Ã˜Â§Ã™â€ Ã¢â‚¬Â¬Ã¢â‚¬Å½)", "ss", "211"],
        ["Spain (EspaÃƒÂ±a)", "es", "34"],
        ["Sri Lanka (Ã Â·ÂÃ Â·Å Ã¢â‚¬ÂÃ Â¶Â»Ã Â·â€œ Ã Â¶Â½Ã Â¶â€šÃ Â¶Å¡Ã Â·ÂÃ Â·â‚¬)", "lk", "94"],
        ["Sudan (Ã¢â‚¬Â«Ã˜Â§Ã™â€žÃ˜Â³Ã™Ë†Ã˜Â¯Ã˜Â§Ã™â€ Ã¢â‚¬Â¬Ã¢â‚¬Å½)", "sd", "249"],
        ["Suriname", "sr", "597"],
        ["Svalbard and Jan Mayen", "sj", "47", 1],
        ["Swaziland", "sz", "268"],
        ["Sweden (Sverige)", "se", "46"],
        ["Switzerland (Schweiz)", "ch", "41"],
        ["Syria (Ã¢â‚¬Â«Ã˜Â³Ã™Ë†Ã˜Â±Ã™Å Ã˜Â§Ã¢â‚¬Â¬Ã¢â‚¬Å½)", "sy", "963"],
        ["Taiwan (Ã¥ÂÂ°Ã§ÂÂ£)", "tw", "886"],
        ["Tajikistan", "tj", "992"],
        ["Tanzania", "tz", "255"],
        ["Thailand (Ã Â¹â€žÃ Â¸â€”Ã Â¸Â¢)", "th", "66"],
        ["Timor-Leste", "tl", "670"],
        ["Togo", "tg", "228"],
        ["Tokelau", "tk", "690"],
        ["Tonga", "to", "676"],
        ["Trinidad and Tobago", "tt", "1868"],
        ["Tunisia (Ã¢â‚¬Â«Ã˜ÂªÃ™Ë†Ã™â€ Ã˜Â³Ã¢â‚¬Â¬Ã¢â‚¬Å½)", "tn", "216"],
        ["Turkey (TÃƒÂ¼rkiye)", "tr", "90"],
        ["Turkmenistan", "tm", "993"],
        ["Turks and Caicos Islands", "tc", "1649"],
        ["Tuvalu", "tv", "688"],
        ["U.S. Virgin Islands", "vi", "1340"],
        ["Uganda", "ug", "256"],
        ["Ukraine (ÃÂ£ÃÂºÃ‘â‚¬ÃÂ°Ã‘â€”ÃÂ½ÃÂ°)", "ua", "380"],
        ["United Arab Emirates (Ã¢â‚¬Â«Ã˜Â§Ã™â€žÃ˜Â¥Ã™â€¦Ã˜Â§Ã˜Â±Ã˜Â§Ã˜Âª Ã˜Â§Ã™â€žÃ˜Â¹Ã˜Â±Ã˜Â¨Ã™Å Ã˜Â© Ã˜Â§Ã™â€žÃ™â€¦Ã˜ÂªÃ˜Â­Ã˜Â¯Ã˜Â©Ã¢â‚¬Â¬Ã¢â‚¬Å½)", "ae", "971"],
        ["United Kingdom", "gb", "44", 0],
        ["United States", "us", "1", 0],
        ["Uruguay", "uy", "598"],
        ["Uzbekistan (OÃŠÂ»zbekiston)", "uz", "998"],
        ["Vanuatu", "vu", "678"],
        ["Vatican City (CittÃƒ  del Vaticano)", "va", "39", 1],
        ["Venezuela", "ve", "58"],
        ["Vietnam (ViÃ¡Â»â€¡t Nam)", "vn", "84"],
        ["Wallis and Futuna", "wf", "681"],
        ["Western Sahara (Ã¢â‚¬Â«Ã˜Â§Ã™â€žÃ˜ÂµÃ˜Â­Ã˜Â±Ã˜Â§Ã˜Â¡ Ã˜Â§Ã™â€žÃ˜ÂºÃ˜Â±Ã˜Â¨Ã™Å Ã˜Â©Ã¢â‚¬Â¬Ã¢â‚¬Å½)", "eh", "212", 1],
        ["Yemen (Ã¢â‚¬Â«Ã˜Â§Ã™â€žÃ™Å Ã™â€¦Ã™â€ Ã¢â‚¬Â¬Ã¢â‚¬Å½)", "ye", "967"],
        ["Zambia", "zm", "260"],
        ["Zimbabwe", "zw", "263"],
        ["Ãƒâ€¦land Islands", "ax", "358", 1]
    ], v = 0; v < m.length; v++) {
        var I = m[v];
        m[v] = {
            name: I[0],
            iso2: I[1],
            dialCode: I[2],
            priority: I[3] || 0,
            areaCodes: I[4] || null
        }
    }
});