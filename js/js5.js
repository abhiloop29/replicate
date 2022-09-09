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