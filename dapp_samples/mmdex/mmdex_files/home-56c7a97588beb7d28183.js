(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [229], {
        30053: function(e, t, n) {
            "use strict";
            n.d(t, {
                B: function() {
                    return m
                }
            });
            var r = n(85893),
                a = n(27261),
                i = n(42283),
                s = n(79340),
                c = n(28181),
                u = n(73714);

            function o() {
                var e = (0, a.Z)(["rounded-br-modal w-full rounded-none"]);
                return o = function() {
                    return e
                }, e
            }

            function l() {
                var e = (0, a.Z)(["rounded-bl-modal ring-opacity-5 w-full rounded-none"]);
                return l = function() {
                    return e
                }, e
            }

            function d() {
                var e = (0, a.Z)(["grid grid-cols-2"]);
                return d = function() {
                    return e
                }, e
            }

            function f() {
                var e = (0, a.Z)(["mb-4 p-4"]);
                return f = function() {
                    return e
                }, e
            }

            function x(e) {
                var t = e.onCancel,
                    n = e.onSubmit,
                    a = (0, i.cI)({
                        mode: "onChange"
                    }),
                    x = a.handleSubmit,
                    p = a.control;
                return (0, r.jsxs)("form", {
                    onSubmit: x(n),
                    children: [(0, r.jsx)("div", {
                        className: (0, s.tw)(f()),
                        children: (0, r.jsx)(i.Qr, {
                            control: p,
                            as: u.n,
                            name: "email",
                            label: "Email",
                            defaultValue: "",
                            rules: {
                                required: !0,
                                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                            }
                        })
                    }), (0, r.jsxs)("div", {
                        className: (0, s.tw)(d()),
                        children: [(0, r.jsx)(c.z, {
                            type: "button",
                            weight: "normal",
                            tone: "neutral",
                            size: "xl",
                            className: (0, s.tw)(l()),
                            onPress: t,
                            children: "Cancel"
                        }), (0, r.jsx)(c.z, {
                            type: "submit",
                            weight: "strong",
                            tone: "accent",
                            size: "xl",
                            className: (0, s.tw)(o()),
                            children: "Login"
                        })]
                    })]
                })
            }
            var p = n(73491);

            function m(e) {
                var t = e.onCancel,
                    n = e.onSubmit;
                return (0, r.jsx)(p.Vq, {
                    title: "Login with email",
                    children: (0, r.jsx)(x, {
                        onCancel: t,
                        onSubmit: n
                    })
                })
            }
        },
        18942: function(e, t, n) {
            "use strict";
            n.d(t, {
                Y: function() {
                    return E
                }
            });
            var r = n(85893),
                a = n(27261),
                i = n(41664),
                s = n(11163),
                c = n(2804),
                u = n(79340),
                o = n(9045),
                l = n(94437),
                d = n(2083),
                f = n(36036),
                x = n(52984),
                p = n(26035),
                m = n(65659),
                v = n(8722),
                h = n(99604);

            function w() {
                var e = (0, a.Z)(["relative flex-1 w-full overflow-hidden"]);
                return w = function() {
                    return e
                }, e
            }

            function g() {
                var e = (0, a.Z)(["flex flex-col w-full min-h-screen"]);
                return g = function() {
                    return e
                }, e
            }

            function j() {
                var e = (0, a.Z)(["flex items-center ml-auto space-x-2"]);
                return j = function() {
                    return e
                }, e
            }

            function y() {
                var e = (0, a.Z)(["text-normal text-base font-normal"]);
                return y = function() {
                    return e
                }, e
            }

            function b() {
                var e = (0, a.Z)(["text-normal w-6"]);
                return b = function() {
                    return e
                }, e
            }

            function Z() {
                var e = (0, a.Z)(["flex items-center space-x-2"]);
                return Z = function() {
                    return e
                }, e
            }

            function N() {
                var e = (0, a.Z)(["flex items-center space-x-4"]);
                return N = function() {
                    return e
                }, e
            }

            function O() {
                var e = (0, a.Z)(["flex items-center w-full h-12"]);
                return O = function() {
                    return e
                }, e
            }

            function k() {
                var e = (0, a.Z)(["bg-normal border-normal bg-opacity-80 dark:bg-opacity-80 sticky z-50 left-0 left-0 top-0 top-0 flex-shrink-0 w-full border-b"]);
                return k = function() {
                    return e
                }, e
            }

            function P(e) {
                var t = e.hideOpenAppButton,
                    n = (0, s.useRouter)(),
                    a = ((0, c.sJ)(o.H_), (0, d.$)().tr);
                return (0, r.jsx)("div", {
                    className: (0, u.tw)(k()),
                    style: {
                        backdropFilter: "blur(8px)"
                    },
                    children: (0, r.jsx)(x.W, {
                        children: (0, r.jsxs)("div", {
                            className: (0, u.tw)(O()),
                            children: [(0, r.jsx)("div", {
                                className: (0, u.tw)(N()),
                                children: (0, r.jsx)(i.default, {
                                    href: "/",
                                    passHref: !0,
                                    children: (0, r.jsxs)("a", {
                                        className: (0, u.tw)(Z()),
                                        children: [(0, r.jsx)(p.T, {
                                            className: (0, u.tw)(b())
                                        }), (0, r.jsx)("div", {
                                            className: (0, u.tw)(y()),
                                            style: {
                                                fontWeight: 500
                                            },
                                            children: "MMDEX"
                                        })]
                                    })
                                })
                            }), (0, r.jsxs)("div", {
                                className: (0, u.tw)(j()),
                                children: [!t && (0, r.jsx)(f.Button, {
                                    weight: "strong",
                                    tone: "accent",
                                    size: "sm",
                                    onPress: function() {
                                        "app.stakedao.org" !== window.location.host ? window.location.replace("https://app.stakedao.org") : n.push("/")
                                    },
                                    style: {
                                        minWidth: "128px"
                                    },
                                    children: a("labels.openApp")
                                }), (0, r.jsx)(v.m, {
                                    size: "sm"
                                }), (0, r.jsx)(h.q, {})]
                            })]
                        })
                    })
                })
            }

            function E(e) {
                var t = e.children,
                    n = e.hideOpenAppButton;
                return (0, r.jsxs)("div", {
                    className: (0, u.tw)(g()),
                    style: {
                        isolation: "isolate"
                    },
                    children: [(0, r.jsx)(m.N, {}), (0, r.jsx)(P, {
                        hideOpenAppButton: n
                    }), (0, r.jsx)("div", {
                        className: (0, u.tw)(w()),
                        children: t
                    }), (0, r.jsx)(l.$, {})]
                })
            }
        },
        93574: function(e, t, n) {
            "use strict";
            n.d(t, {
                p: function() {
                    return c
                }
            });
            var r = n(26265),
                a = n(85893),
                i = n(2962);

            function s(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function c(e) {
                return (0, a.jsx)(i.PB, function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? s(Object(n), !0).forEach((function(t) {
                            (0, r.Z)(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }({
                    titleTemplate: "%s | MMDEX"
                }, e))
            }
        },
        11472: function(e, t, n) {
            "use strict";
            n.d(t, {
                o: function() {
                    return g
                }
            });
            var r = n(26265),
                a = n(85893),
                i = n(27261),
                s = n(38347),
                c = n(64663),
                u = n(27354),
                o = n(83952),
                l = n(67294),
                d = n(79340),
                f = n(96617),
                x = n(82324),
                p = n(12758),
                m = n(40425);

            function v(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function h(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? v(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : v(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function w() {
                var e = (0, i.Z)(["w-8 h-8 fill-current object-contain object-center"]);
                return w = function() {
                    return e
                }, e
            }
            var g = (0, l.forwardRef)((function(e, t) {
                var n = e.walletProvider,
                    r = (0, s.Z)(e, ["walletProvider"]),
                    i = (0, p.rV)(t),
                    l = (0, m.F)().resolvedTheme,
                    v = (0, c.U)(r, i),
                    g = v.buttonProps,
                    j = v.isPressed,
                    y = (0, u.XI)({}),
                    b = y.hoverProps,
                    Z = y.isHovered;
                return (0, a.jsxs)(f.Z, h(h({
                    className: (0, d.tw)("flex flex-col items-center px-4 py-10 cursor-pointer space-y-4 appearance-none\t", j ? "dark:hover:bg-neutral-800" : Z ? "dark:hover:bg-neutral-900" : "bg-transparent"),
                    ref: i
                }, (0, o.dG)(g, b)), {}, {
                    children: [(0, a.jsx)("img", {
                        src: n.image.src,
                        style: "Ledger" != n.name && "Email" != n.name || "light" != l ? {} : {
                            filter: "invert(1)"
                        },
                        className: (0, d.tw)(w()),
                        alt: "".concat(n.name, " logo")
                    }), (0, a.jsx)(x.X, {
                        as: "h3",
                        level: "6",
                        children: n.name
                    })]
                }))
            }))
        },
        56679: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return an
                }
            });
            var r = n(85893),
                a = n(27261),
                i = n(79340),
                s = n(77909),
                c = n(11163),
                u = n(2804),
                o = n(9045),
                l = n(2083),
                d = n(36036),
                f = n(52984),
                x = n(25675),
                p = n(40425),
                m = n(67294),
                v = n(29727),
                h = n(98504);

            function w() {
                var e = (0, a.Z)(["ring-1 ring-inset ring-white ring-opacity-10 absolute z-10 inset-0 rounded-lg md:rounded-xl"]);
                return w = function() {
                    return e
                }, e
            }

            function g() {
                var e = (0, a.Z)(["absolute inset-0"]);
                return g = function() {
                    return e
                }, e
            }

            function j() {
                var e = (0, a.Z)(["bg-normal relative dark:p-px w-full rounded-lg shadow-xl overflow-hidden md:rounded-xl"]);
                return j = function() {
                    return e
                }, e
            }

            function y() {
                var e = (0, a.Z)(["bg-accent relative w-full pointer-events-none"]);
                return y = function() {
                    return e
                }, e
            }

            function b() {
                var e = (0, v.Z)().y,
                    t = (0, h.Z)().width,
                    n = (0, m.useState)(!1),
                    a = n[0],
                    c = n[1],
                    u = (0, p.F)().resolvedTheme;
                return (0, m.useEffect)((function() {
                    return c(!0)
                }), []), a ? (0, r.jsx)("div", {
                    className: (0, i.tw)(y()),
                    style: {
                        perspective: 680
                    },
                    children: (0, r.jsxs)(s.E.div, {
                        style: {
                            willChange: "transform, opacity",
                            paddingBottom: "".concat(704 / 992 * 100, "%")
                        },
                        initial: {
                            rotateX: 40,
                            y: 200,
                            z: 200,
                            opacity: 0
                        },
                        animate: e > 0 || t < 700 ? {
                            rotateX: 0,
                            y: 0,
                            z: 0,
                            opacity: 1
                        } : {
                            rotateX: 40,
                            y: -100,
                            z: 100,
                            opacity: 1
                        },
                        transition: {
                            type: "spring",
                            stiffness: 150,
                            damping: 20
                        },
                        className: (0, i.tw)(j()),
                        children: [(0, r.jsx)(x.default, {
                            layout: "fill",
                            className: (0, i.tw)(g()),
                            alt: "dashboard screenshot",
                            src: u + ".png",
                        }), (0, r.jsx)("div", {
                            className: (0, i.tw)(w())
                        })]
                    })
                }) : null
            }

            function Z() {
                var e = (0, a.Z)(["via-accent-300 dark:via-accent-900 -bottom-64 opacity-40 top-32 md:top-32 md:-bottom-56 absolute left-0 right-0 bg-gradient-to-t from-transparent to-transparent dark:opacity-25"]);
                return Z = function() {
                    return e
                }, e
            }

            function N() {
                var e = (0, a.Z)(["w-64 text-lg font-normal shadow-xl"]);
                return N = function() {
                    return e
                }, e
            }

            function O() {
                var e = (0, a.Z)(["flex justify-center"]);
                return O = function() {
                    return e
                }, e
            }

            function k() {
                var e = (0, a.Z)(["text-normal opacity-60 text-center whitespace-pre-wrap text-xl"]);
                return k = function() {
                    return e
                }, e
            }

            function P() {
                var e = (0, a.Z)(["md:text-7xl mx-auto max-w-2xl text-center whitespace-pre-wrap text-5xl font-normal leading-none"]);
                return P = function() {
                    return e
                }, e
            }

            function E() {
                var e = (0, a.Z)(["mx-auto w-full space-y-12"]);
                return E = function() {
                    return e
                }, e
            }

            function z() {
                var e = (0, a.Z)(["relative z-10 space-y-16 md:space-y-24"]);
                return z = function() {
                    return e
                }, e
            }

            function S() {
                var e = (0, a.Z)(["px-6 md:px-4"]);
                return S = function() {
                    return e
                }, e
            }

            function D() {
                var e = (0, a.Z)(["relative pb-8 pt-20 md:pb-16 md:pt-32"]);
                return D = function() {
                    return e
                }, e
            }

            function I() {
                (0, c.useRouter)(), (0, u.sJ)(o.H_);
                var e = (0, l.$)().tr;
                return (0, r.jsxs)("div", {
                    className: (0, i.tw)(D()),
                    children: [(0, r.jsx)(f.W, {
                        className: (0, i.tw)(S()),
                        children: (0, r.jsxs)("div", {
                            className: (0, i.tw)(z()),
                            children: [(0, r.jsxs)("div", {
                                className: (0, i.tw)(E()),
                                style: {
                                    perspective: 680
                                },
                                children: [(0, r.jsx)(s.E.h1, {
                                    className: (0, i.tw)(P()),
                                    initial: {
                                        y: 100,
                                        opacity: 0,
                                        z: 100
                                    },
                                    animate: {
                                        y: 0,
                                        opacity: 1,
                                        z: 0
                                    },
                                    transition: {
                                        type: "spring",
                                        stiffness: 200,
                                        damping: 30
                                    },
                                    style: {
                                        willChange: "transform, opacity",
                                        fontWeight: 500
                                    },
                                    children: e("home.hero.title")
                                }), (0, r.jsx)(s.E.div, {
                                    initial: {
                                        y: 100,
                                        opacity: 0,
                                        z: 100
                                    },
                                    animate: {
                                        y: 0,
                                        opacity: 1,
                                        z: 0
                                    },
                                    transition: {
                                        type: "spring",
                                        stiffness: 200,
                                        damping: 30,
                                        delay: .1
                                    },
                                    style: {
                                        willChange: "transform, opacity"
                                    },
                                    children: (0, r.jsx)("div", {
                                        className: (0, i.tw)(k()),
                                        children: e("home.hero.description")
                                    })
                                }), (0, r.jsx)(s.E.div, {
                                    className: (0, i.tw)(O()),
                                    initial: {
                                        y: 100,
                                        opacity: 0,
                                        z: 200
                                    },
                                    animate: {
                                        y: 0,
                                        opacity: 1,
                                        z: 0
                                    },
                                    transition: {
                                        type: "spring",
                                        stiffness: 200,
                                        damping: 30,
                                        delay: .2
                                    },
                                    style: {
                                        willChange: "transform, opacity"
                                    },
                                    children: (0, r.jsx)(d.Button, {
                                        onPress: function() {
                                            window.location.href = "https://app.stakedao.org"
                                        },
                                        weight: "strong",
                                        tone: "accent",
                                        size: "lg",
                                        className: (0, i.tw)(N()),
                                        children: e("labels.openApp")
                                    })
                                })]
                            }), (0, r.jsx)(b, {})]
                        })
                    }), (0, r.jsx)("div", {
                        className: (0, i.tw)(Z())
                    })]
                })
            }
            var C = n(79352);

            function A() {
                var e = (0, a.Z)(["text-weak text-center whitespace-pre-wrap whitespace-pre-wrap text-lg"]);
                return A = function() {
                    return e
                }, e
            }

            function B() {
                var e = (0, a.Z)(["text-center whitespace-pre-wrap whitespace-pre-wrap text-2xl"]);
                return B = function() {
                    return e
                }, e
            }

            function T() {
                var e = (0, a.Z)(["text-normal mx-auto text-4xl"]);
                return T = function() {
                    return e
                }, e
            }

            function W() {
                var e = (0, a.Z)(["space-y-4"]);
                return W = function() {
                    return e
                }, e
            }

            function _() {
                var e = (0, a.Z)(["text-weak text-center whitespace-pre-wrap whitespace-pre-wrap text-lg"]);
                return _ = function() {
                    return e
                }, e
            }

            function X() {
                var e = (0, a.Z)(["text-center whitespace-pre-wrap whitespace-pre-wrap text-2xl"]);
                return X = function() {
                    return e
                }, e
            }

            function Y() {
                var e = (0, a.Z)(["text-normal mx-auto text-4xl"]);
                return Y = function() {
                    return e
                }, e
            }

            function F() {
                var e = (0, a.Z)(["space-y-4"]);
                return F = function() {
                    return e
                }, e
            }

            function $() {
                var e = (0, a.Z)(["grid gap-16 gap-20 grid-cols-1 md:grid-cols-2"]);
                return $ = function() {
                    return e
                }, e
            }

            function H() {
                var e = (0, a.Z)(["text-center whitespace-pre-wrap text-4xl font-normal leading-tight md:text-5xl md:leading-tight"]);
                return H = function() {
                    return e
                }, e
            }

            function V() {
                var e = (0, a.Z)(["mx-auto w-full max-w-2xl space-y-8"]);
                return V = function() {
                    return e
                }, e
            }

            function R() {
                var e = (0, a.Z)(["space-y-20"]);
                return R = function() {
                    return e
                }, e
            }

            function U() {
                var e = (0, a.Z)(["px-6 md:px-4"]);
                return U = function() {
                    return e
                }, e
            }

            function q() {
                var e = (0, l.$)().tr;
                return (0, r.jsx)(f.W, {
                    className: (0, i.tw)(U()),
                    children: (0, r.jsxs)("div", {
                        className: (0, i.tw)(R()),
                        children: [(0, r.jsx)("div", {
                            className: (0, i.tw)(V()),
                            children: (0, r.jsx)("h2", {
                                className: (0, i.tw)(H()),
                                children: e("home.dao.title")
                            })
                        }), (0, r.jsxs)("div", {
                            className: (0, i.tw)($()),
                            children: [(0, r.jsxs)("div", {
                                className: (0, i.tw)(F()),
                                children: [(0, r.jsx)(C.JX, {
                                    className: (0, i.tw)(Y())
                                }), (0, r.jsx)("h3", {
                                    className: (0, i.tw)(X()),
                                    children: e("home.dao.nonCustodial.title")
                                }), (0, r.jsx)("div", {
                                    className: (0, i.tw)(_()),
                                    children: e("home.dao.nonCustodial.description")
                                })]
                            }), (0, r.jsxs)("div", {
                                className: (0, i.tw)(W()),
                                children: [(0, r.jsx)(C.NwB, {
                                    className: (0, i.tw)(T())
                                }), (0, r.jsx)("h3", {
                                    className: (0, i.tw)(B()),
                                    children: e("home.dao.decentralised.title")
                                }), (0, r.jsx)("div", {
                                    className: (0, i.tw)(A()),
                                    children: e("home.dao.decentralised.description")
                                })]
                            })]
                        })]
                    })
                })
            }
            var M = n(95562),
                L = n(70131);

            function J() {
                var e = (0, a.Z)(["w-1 bg-black dark:bg-white"]);
                return J = function() {
                    return e
                }, e
            }

            function K() {
                var e = (0, a.Z)(["absolute z-10 inset-0 flex items-center justify-center"]);
                return K = function() {
                    return e
                }, e
            }

            function G() {
                var e = (0, a.Z)(["absolute inset-0"]);
                return G = function() {
                    return e
                }, e
            }

            function Q() {
                var e = (0, a.Z)(["absolute inset-0"]);
                return Q = function() {
                    return e
                }, e
            }

            function ee() {
                var e = (0, a.Z)(["relative overflow-hidden"]);
                return ee = function() {
                    return e
                }, e
            }

            function te(e) {
                var t = e.width,
                    n = e.height,
                    a = e.paused;
                return (0, r.jsxs)("div", {
                    className: (0, i.tw)(ee()),
                    style: {
                        width: t,
                        height: n
                    },
                    children: [(0, r.jsx)("div", {
                        className: (0, i.tw)(Q()),
                        style: {
                            clipPath: "inset(0px 50% 0px 0px)",
                            perspective: 512
                        },
                        children: (0, r.jsx)(s.E.div, {
                            animate: a ? {} : {
                                x: [-64, t * (1 / 4) - 32, t * (3 / 4) - 32, t + 32]
                            },
                            transition: {
                                duration: 3,
                                repeat: 1 / 0,
                                repeatDelay: 1,
                                type: "tween",
                                ease: "backInOut"
                            },
                            className: (0, i.tw)("absolute left-0 w-16 h-10 rounded-md", "bg-neutral-500 dark:bg-neutral-500"),
                            style: {
                                y: n / 2 - 20,
                                transformOrigin: "50% 50%"
                            }
                        })
                    }), (0, r.jsx)("div", {
                        className: (0, i.tw)(G()),
                        style: {
                            clipPath: "inset(0px 0px 0px 50%)",
                            perspective: 512
                        },
                        children: (0, r.jsx)(s.E.div, {
                            animate: a ? {} : {
                                x: [-40, t * (1 / 4) - 20, t * (3 / 4) - 20, t + 20]
                            },
                            transition: {
                                duration: 3,
                                repeat: 1 / 0,
                                repeatDelay: 1,
                                type: "tween",
                                ease: "backInOut"
                            },
                            className: (0, i.tw)("absolute left-0 w-10 h-10  mx-auto  border-4", "bg-accent-600 dark:bg-accent-500 border-transparent rounded-full"),
                            style: {
                                y: n / 2 - 20,
                                transformOrigin: "50% 50%"
                            }
                        })
                    }), (0, r.jsx)("div", {
                        className: (0, i.tw)(K()),
                        children: (0, r.jsx)("div", {
                            className: (0, i.tw)(J()),
                            style: {
                                height: 60
                            }
                        })
                    })]
                })
            }

            function ne() {
                var e = (0, a.Z)(["bg-accent-500 w-4 h-4 rounded-full"]);
                return ne = function() {
                    return e
                }, e
            }

            function re() {
                var e = (0, a.Z)(["p-0.5"]);
                return re = function() {
                    return e
                }, e
            }

            function ae() {
                var e = (0, a.Z)(["flex flex-col-reverse"]);
                return ae = function() {
                    return e
                }, e
            }

            function ie() {
                var e = (0, a.Z)(["flex items-end"]);
                return ie = function() {
                    return e
                }, e
            }

            function se() {
                var e = (0, a.Z)(["relative flex items-center justify-center pt-8 overflow-hidden"]);
                return se = function() {
                    return e
                }, e
            }

            function ce(e) {
                var t = e.paused;
                return (0, r.jsx)("div", {
                    className: (0, i.tw)(se()),
                    style: {
                        width: 128,
                        height: 160
                    },
                    children: (0, r.jsx)("div", {
                        className: (0, i.tw)(ie()),
                        style: {
                            perspective: 600
                        },
                        children: Array.from({
                            length: 5
                        }).map((function(e, t) {
                            return t
                        })).map((function(e) {
                            return (0, r.jsx)("div", {
                                className: (0, i.tw)(ae()),
                                children: Array.from({
                                    length: e + 1
                                }).map((function(e, t) {
                                    return t
                                })).map((function(n) {
                                    return (0, r.jsx)(s.E.div, {
                                        animate: t ? {} : {
                                            y: [-200, 0]
                                        },
                                        transition: {
                                            duration: 1,
                                            repeat: 1 / 0,
                                            repeatType: "reverse",
                                            repeatDelay: 3,
                                            delay: .5 * e + .2 * n,
                                            type: "ease",
                                            ease: "easeInOut"
                                        },
                                        className: (0, i.tw)(re()),
                                        children: (0, r.jsx)("div", {
                                            className: (0, i.tw)(ne())
                                        })
                                    }, "".concat(e, "-").concat(n))
                                }))
                            })
                        }))
                    })
                })
            }

            function ue() {
                var e = (0, a.Z)(["relative overflow-hidden"]);
                return ue = function() {
                    return e
                }, e
            }

            function oe(e) {
                var t = e.paused;
                return (0, r.jsx)("div", {
                    className: (0, i.tw)(ue()),
                    style: {
                        width: 128,
                        height: 128
                    },
                    children: (0, r.jsx)(s.E.div, {
                        animate: t ? {} : {
                            x: [8, 96, 96, 8, 8],
                            y: [8, 96, 8, 96, 8],
                            backgroundColor: ["#14B8A6", "#8B5CF6", "#EAB308", "#F43F5E", "#2DD4BF"],
                            rotate: [0, 225, 450, 675, 900],
                            borderRadius: [12, 6, 2, 3, 12]
                        },
                        transition: {
                            duration: 4,
                            repeat: 1 / 0,
                            repeatType: "mirror",
                            repeatDelay: 0,
                            type: "tween",
                            ease: "backInOut"
                        },
                        className: (0, i.tw)("absolute left-0 w-6 h-6 rounded-md"),
                        style: {
                            transformOrigin: "50% 50%"
                        }
                    })
                })
            }
            var le = n(96617);

            function de() {
                var e = (0, a.Z)(["text-weak text-center text-base"]);
                return de = function() {
                    return e
                }, e
            }

            function fe() {
                var e = (0, a.Z)(["text-center text-2xl"]);
                return fe = function() {
                    return e
                }, e
            }

            function xe() {
                var e = (0, a.Z)(["p-6 space-y-4"]);
                return xe = function() {
                    return e
                }, e
            }

            function pe() {
                var e = (0, a.Z)(["flex justify-center"]);
                return pe = function() {
                    return e
                }, e
            }

            function me() {
                var e = (0, a.Z)(["text-weak text-center text-base"]);
                return me = function() {
                    return e
                }, e
            }

            function ve() {
                var e = (0, a.Z)(["text-center text-2xl"]);
                return ve = function() {
                    return e
                }, e
            }

            function he() {
                var e = (0, a.Z)(["p-6 space-y-4"]);
                return he = function() {
                    return e
                }, e
            }

            function we() {
                var e = (0, a.Z)(["flex justify-center pt-8"]);
                return we = function() {
                    return e
                }, e
            }

            function ge() {
                var e = (0, a.Z)(["text-weak text-center text-base"]);
                return ge = function() {
                    return e
                }, e
            }

            function je() {
                var e = (0, a.Z)(["text-center text-2xl"]);
                return je = function() {
                    return e
                }, e
            }

            function ye() {
                var e = (0, a.Z)(["p-6 space-y-4"]);
                return ye = function() {
                    return e
                }, e
            }

            function be() {
                var e = (0, a.Z)(["flex justify-center pt-8"]);
                return be = function() {
                    return e
                }, e
            }

            function Ze() {
                var e = (0, a.Z)(["grid gap-6 grid-cols-1 sm:grid-cols-3 md:gap-12"]);
                return Ze = function() {
                    return e
                }, e
            }

            function Ne() {
                var e = (0, a.Z)(["text-weak text-center text-xl"]);
                return Ne = function() {
                    return e
                }, e
            }

            function Oe() {
                var e = (0, a.Z)(["text-center text-4xl font-normal leading-tight md:text-5xl md:leading-tight"]);
                return Oe = function() {
                    return e
                }, e
            }

            function ke() {
                var e = (0, a.Z)(["mx-auto w-full max-w-2xl space-y-8"]);
                return ke = function() {
                    return e
                }, e
            }

            function Pe() {
                var e = (0, a.Z)(["z-10 space-y-12 md:space-y-20"]);
                return Pe = function() {
                    return e
                }, e
            }

            function Ee() {
                var e = (0, a.Z)(["relative z-10 px-6 md:px-4"]);
                return Ee = function() {
                    return e
                }, e
            }

            function ze() {
                var e = (0, m.useRef)(null),
                    t = (0, M.EL)(e, {
                        observe: !0
                    }),
                    n = (0, L.YD)(),
                    a = n.ref,
                    s = n.inView,
                    c = (0, l.$)().tr;
                return (0, r.jsx)(f.W, {
                    className: (0, i.tw)(Ee()),
                    children: (0, r.jsxs)("div", {
                        className: (0, i.tw)(Pe()),
                        ref: a,
                        children: [(0, r.jsxs)("div", {
                            className: (0, i.tw)(ke()),
                            children: [(0, r.jsx)("h2", {
                                className: (0, i.tw)(Oe()),
                                children: c("home.features.title")
                            }), (0, r.jsx)("div", {
                                className: (0, i.tw)(Ne()),
                                children: c("home.features.description")
                            })]
                        }), (0, r.jsxs)("div", {
                            className: (0, i.tw)(Ze()),
                            children: [(0, r.jsxs)(le.Z, {
                                children: [(0, r.jsx)("div", {
                                    className: (0, i.tw)(be()),
                                    ref: e,
                                    children: (0, r.jsx)(te, {
                                        width: (null === t || void 0 === t ? void 0 : t.width) || 0,
                                        height: 128,
                                        paused: !s
                                    })
                                }), (0, r.jsxs)("div", {
                                    className: (0, i.tw)(ye()),
                                    children: [(0, r.jsx)("h3", {
                                        className: (0, i.tw)(je()),
                                        children: c("home.features.buy.title")
                                    }), (0, r.jsx)("div", {
                                        className: (0, i.tw)(ge()),
                                        children: c("home.features.buy.description")
                                    })]
                                })]
                            }), (0, r.jsxs)(le.Z, {
                                children: [(0, r.jsx)("div", {
                                    className: (0, i.tw)(we()),
                                    children: (0, r.jsx)(oe, {
                                        paused: !s
                                    })
                                }), (0, r.jsxs)("div", {
                                    className: (0, i.tw)(he()),
                                    children: [(0, r.jsx)("h3", {
                                        className: (0, i.tw)(ve()),
                                        children: c("home.features.swap.title")
                                    }), (0, r.jsx)("div", {
                                        className: (0, i.tw)(me()),
                                        children: c("home.features.swap.description")
                                    })]
                                })]
                            }), (0, r.jsxs)(le.Z, {
                                children: [(0, r.jsx)("div", {
                                    className: (0, i.tw)(pe()),
                                    children: (0, r.jsx)(ce, {
                                        paused: !s
                                    })
                                }), (0, r.jsxs)("div", {
                                    className: (0, i.tw)(xe()),
                                    children: [(0, r.jsx)("h3", {
                                        className: (0, i.tw)(fe()),
                                        children: c("home.features.stake.title")
                                    }), (0, r.jsx)("div", {
                                        className: (0, i.tw)(de()),
                                        children: c("home.features.stake.description")
                                    })]
                                })]
                            })]
                        })]
                    })
                })
            }

            function Se() {
                var e = (0, a.Z)(["w-72 relative"]);
                return Se = function() {
                    return e
                }, e
            }

            function De() {
                var e = (0, a.Z)(["relative"]);
                return De = function() {
                    return e
                }, e
            }

            function Ie() {
                var e = (0, a.Z)(["py-24"]);
                return Ie = function() {
                    return e
                }, e
            }

            function Ce() {
                var e = (0, a.Z)(["absolute w-40"]);
                return Ce = function() {
                    return e
                }, e
            }

            function Ae() {
                var e = (0, a.Z)(["absolute inset-0 flex items-center justify-center"]);
                return Ae = function() {
                    return e
                }, e
            }

            function Be(e) {
                var t = e.x,
                    n = e.y,
                    a = e.image,
                    c = e.duration,
                    u = e.scale,
                    o = e.zIndex,
                    l = e.shadowOpacity,
                    d = e.paused;
                return (0, r.jsx)("div", {
                    className: (0, i.tw)(Ae()),
                    style: {
                        transform: "translate(".concat(t, ", ").concat(n, ") scale(").concat(u, ")"),
                        zIndex: o
                    },
                    children: (0, r.jsx)(s.E.img, {
                        src: a,
                        className: (0, i.tw)(Ce()),
                        style: {
                            filter: "drop-shadow(0 2px 16px rgba(0, 0, 0, ".concat(l, "))"),
                            willChange: "transform"
                        },
                        animate: d ? {} : {
                            y: [-10, 10]
                        },
                        transition: {
                            duration: c,
                            repeat: 1 / 0,
                            repeatType: "reverse",
                            type: "tween",
                            ease: "easeInOut"
                        }
                    })
                })
            }

            function Te(e) {
                var t = e.paused,
                    n = (0, m.useState)(!1),
                    a = n[0],
                    s = n[1],
                    c = (0, p.F)().resolvedTheme;
                if ((0, m.useEffect)((function() {
                        return s(!0)
                    }), []), !a) return null;
                var u = "light" === c ? .05 : 1;
                return (0, r.jsx)("div", {
                    className: (0, i.tw)(Ie()),
                    children: (0, r.jsxs)("div", {
                        className: (0, i.tw)(De()),
                        children: [(0, r.jsx)("img", {
                            src: "/images/governance/governance-sanctuary-".concat(c, ".png"),
                            alt: "santuary card",
                            className: (0, i.tw)(Se()),
                            style: {
                                zIndex: 1,
                                filter: "drop-shadow(0 2px 16px rgba(0, 0, 0, ".concat(u, "))"),
                                willChange: "transform"
                            }
                        }), (0, r.jsx)(Be, {
                            paused: t,
                            duration: 2.5,
                            x: "-50%",
                            y: "-40%",
                            zIndex: 2,
                            scale: .85,
                            image: "/images/governance/governance-nft-".concat(c, ".png"),
                            shadowOpacity: u
                        }), (0, r.jsx)(Be, {
                            paused: t,
                            x: "-60%",
                            y: "60%",
                            duration: 1.5,
                            zIndex: 0,
                            scale: .6,
                            image: "/images/governance/governance-vote-".concat(c, ".png"),
                            shadowOpacity: u
                        }), (0, r.jsx)(Be, {
                            paused: t,
                            x: "50%",
                            y: "50%",
                            duration: 2,
                            scale: 1,
                            zIndex: 2,
                            image: "/images/governance/governance-reward-".concat(c, ".png"),
                            shadowOpacity: u
                        }), (0, r.jsx)(Be, {
                            paused: t,
                            x: "60%",
                            y: "-60%",
                            duration: 1,
                            scale: .7,
                            zIndex: 0,
                            image: "/images/governance/governance-unlock-".concat(c, ".png"),
                            shadowOpacity: u
                        })]
                    })
                })
            }

            function We() {
                var e = (0, a.Z)(["flex flex-1 items-center md:px-10 "]);
                return We = function() {
                    return e
                }, e
            }

            function _e() {
                var e = (0, a.Z)(["md:-mx-10 md:flex"]);
                return _e = function() {
                    return e
                }, e
            }

            function Xe(e) {
                var t = e.children,
                    n = e.reversed,
                    a = e.className;
                return (0, r.jsx)("div", {
                    className: (0, i.tw)((0, i.nn)(_e()), n && "md:flex-row-reverse", a),
                    children: t
                })
            }

            function Ye(e) {
                var t = e.children,
                    n = e.className;
                return (0, r.jsx)("div", {
                    className: (0, i.tw)((0, i.nn)(We()), n),
                    children: t
                })
            }

            function Fe() {
                var e = (0, a.Z)(["justify-center"]);
                return Fe = function() {
                    return e
                }, e
            }

            function $e() {
                var e = (0, a.Z)(["whitespace-pre-wrap"]);
                return $e = function() {
                    return e
                }, e
            }

            function He() {
                var e = (0, a.Z)(["text-accent-600 dark:text-accent-400 mt-0.5 flex-shrink-0 mr-3 text-2xl"]);
                return He = function() {
                    return e
                }, e
            }

            function Ve() {
                var e = (0, a.Z)(["flex"]);
                return Ve = function() {
                    return e
                }, e
            }

            function Re() {
                var e = (0, a.Z)(["whitespace-pre-wrap"]);
                return Re = function() {
                    return e
                }, e
            }

            function Ue() {
                var e = (0, a.Z)(["text-accent-600 dark:text-accent-400 mt-0.5 flex-shrink-0 mr-3 text-2xl"]);
                return Ue = function() {
                    return e
                }, e
            }

            function qe() {
                var e = (0, a.Z)(["flex"]);
                return qe = function() {
                    return e
                }, e
            }

            function Me() {
                var e = (0, a.Z)(["whitespace-pre-wrap"]);
                return Me = function() {
                    return e
                }, e
            }

            function Le() {
                var e = (0, a.Z)(["text-accent-600 dark:text-accent-400 mt-0.5 flex-shrink-0 mr-3 text-2xl"]);
                return Le = function() {
                    return e
                }, e
            }

            function Je() {
                var e = (0, a.Z)(["flex"]);
                return Je = function() {
                    return e
                }, e
            }

            function Ke() {
                var e = (0, a.Z)(["whitespace-pre-wrap"]);
                return Ke = function() {
                    return e
                }, e
            }

            function Ge() {
                var e = (0, a.Z)(["text-accent-600 dark:text-accent-400 mt-0.5 flex-shrink-0 mr-3 text-2xl"]);
                return Ge = function() {
                    return e
                }, e
            }

            function Qe() {
                var e = (0, a.Z)(["flex"]);
                return Qe = function() {
                    return e
                }, e
            }

            function et() {
                var e = (0, a.Z)(["px-4 space-y-8 md:px-0"]);
                return et = function() {
                    return e
                }, e
            }

            function tt() {
                var e = (0, a.Z)(["text-weak mx-auto w-full text-lg"]);
                return tt = function() {
                    return e
                }, e
            }

            function nt() {
                var e = (0, a.Z)(["text-center whitespace-pre-wrap text-4xl font-normal leading-tight md:text-left md:text-5xl md:leading-tight"]);
                return nt = function() {
                    return e
                }, e
            }

            function rt() {
                var e = (0, a.Z)(["mx-auto w-full max-w-2xl space-y-8"]);
                return rt = function() {
                    return e
                }, e
            }

            function at() {
                var e = (0, a.Z)(["space-y-16"]);
                return at = function() {
                    return e
                }, e
            }

            function it() {
                var e = (0, a.Z)(["px-6 md:px-4"]);
                return it = function() {
                    return e
                }, e
            }

            function st() {
                var e = (0, L.YD)(),
                    t = e.ref,
                    n = e.inView,
                    a = (0, l.$)().tr;
                return (0, r.jsx)(f.W, {
                    className: (0, i.tw)(it()),
                    children: (0, r.jsxs)(Xe, {
                        children: [(0, r.jsx)(Ye, {
                            children: (0, r.jsxs)("div", {
                                className: (0, i.tw)(at()),
                                ref: t,
                                children: [(0, r.jsx)("div", {
                                    className: (0, i.tw)(rt()),
                                    children: (0, r.jsx)("h2", {
                                        className: (0, i.tw)(nt()),
                                        children: a("home.governance.title")
                                    })
                                }), (0, r.jsx)("div", {
                                    className: (0, i.tw)(tt()),
                                    children: (0, r.jsxs)("div", {
                                        className: (0, i.tw)(et()),
                                        children: [(0, r.jsxs)("div", {
                                            className: (0, i.tw)(Qe()),
                                            children: [(0, r.jsx)(C.vUq, {
                                                className: (0, i.tw)(Ge())
                                            }), (0, r.jsx)("div", {
                                                className: (0, i.tw)(Ke()),
                                                children: a("home.governance.control")
                                            })]
                                        }), (0, r.jsxs)("div", {
                                            className: (0, i.tw)(Je()),
                                            children: [(0, r.jsx)(C.vUq, {
                                                className: (0, i.tw)(Le())
                                            }), (0, r.jsx)("div", {
                                                className: (0, i.tw)(Me()),
                                                children: a("home.governance.rewards")
                                            })]
                                        }), (0, r.jsxs)("div", {
                                            className: (0, i.tw)(qe()),
                                            children: [(0, r.jsx)(C.vUq, {
                                                className: (0, i.tw)(Ue())
                                            }), (0, r.jsx)("div", {
                                                className: (0, i.tw)(Re()),
                                                children: a("home.governance.points")
                                            })]
                                        }), (0, r.jsxs)("div", {
                                            className: (0, i.tw)(Ve()),
                                            children: [(0, r.jsx)(C.vUq, {
                                                className: (0, i.tw)(He())
                                            }), (0, r.jsx)("div", {
                                                className: (0, i.tw)($e()),
                                                children: a("home.governance.vote")
                                            })]
                                        })]
                                    })
                                })]
                            })
                        }), (0, r.jsx)(Ye, {
                            className: (0, i.tw)(Fe()),
                            children: (0, r.jsx)(Te, {
                                paused: !n
                            })
                        })]
                    })
                })
            }

            function ct() {
                var e = (0, a.Z)(["rounded-card absolute bg-cover bg-center"]);
                return ct = function() {
                    return e
                }, e
            }

            function ut() {
                var e = (0, a.Z)(["rounded-card absolute bg-cover bg-center"]);
                return ut = function() {
                    return e
                }, e
            }

            function ot() {
                var e = (0, a.Z)([""]);
                return ot = function() {
                    return e
                }, e
            }

            function lt() {
                var e = (0, a.Z)(["relative"]);
                return lt = function() {
                    return e
                }, e
            }

            function dt() {
                var e = (0, a.Z)(["focus:outline-none appearance-none cursor-pointer"]);
                return dt = function() {
                    return e
                }, e
            }

            function ft() {
                var e = (0, a.Z)(["py-8"]);
                return ft = function() {
                    return e
                }, e
            }
            var xt = {
                    normal: {},
                    flipped: {}
                },
                pt = {
                    normal: {
                        rotateZ: -10,
                        rotateX: 10,
                        rotateY: 0,
                        z: -100
                    },
                    flipped: {
                        rotateZ: 0,
                        rotateX: 0,
                        rotateY: -180,
                        z: 0
                    }
                };

            function mt() {
                var e = 768 * .35,
                    t = 448;
                return (0, r.jsx)("div", {
                    className: (0, i.tw)(ft()),
                    children: (0, r.jsx)(s.E.div, {
                        initial: "normal",
                        whileHover: "flipped",
                        whileTap: "flipped",
                        variants: xt,
                        role: "button",
                        tabIndex: 0,
                        onKeyUp: function() {},
                        className: (0, i.tw)(dt()),
                        style: {
                            width: e,
                            height: t
                        },
                        children: (0, r.jsx)(s.E.div, {
                            animate: {
                                y: [-10, 10]
                            },
                            transition: {
                                duration: 1,
                                repeat: 1 / 0,
                                repeatType: "reverse",
                                type: "tween",
                                ease: "easeInOut"
                            },
                            style: {
                                willChange: "transform"
                            },
                            children: (0, r.jsx)("div", {
                                className: (0, i.tw)(lt()),
                                style: {
                                    perspective: 600,
                                    width: e,
                                    height: t
                                },
                                children: (0, r.jsxs)(s.E.div, {
                                    className: (0, i.tw)(ot()),
                                    variants: pt,
                                    transition: {
                                        type: "spring",
                                        stiffness: 150,
                                        damping: 20
                                    },
                                    style: {
                                        width: e,
                                        height: t,
                                        transformStyle: "preserve-3d",
                                        willChange: "transform"
                                    },
                                    children: [(0, r.jsx)("div", {
                                        className: (0, i.tw)(ut()),
                                        style: {
                                            backgroundImage: "url(/images/nft-back.png)",
                                            width: e,
                                            height: t,
                                            backfaceVisibility: "hidden"
                                        }
                                    }), (0, r.jsx)("div", {
                                        className: (0, i.tw)(ct()),
                                        style: {
                                            transform: "translateZ(-1px) rotateY(180deg)",
                                            backfaceVisibility: "hidden",
                                            backgroundImage: "url(/images/nft-front.png)",
                                            width: e,
                                            height: t
                                        }
                                    })]
                                })
                            })
                        })
                    })
                })
            }

            function vt() {
                var e = (0, a.Z)(["justify-center"]);
                return vt = function() {
                    return e
                }, e
            }

            function ht() {
                var e = (0, a.Z)(["text-weak text-center whitespace-pre-wrap text-xl md:text-left"]);
                return ht = function() {
                    return e
                }, e
            }

            function wt() {
                var e = (0, a.Z)(["text-center whitespace-pre-wrap text-4xl font-normal leading-tight md:text-left md:text-5xl md:leading-tight"]);
                return wt = function() {
                    return e
                }, e
            }

            function gt() {
                var e = (0, a.Z)(["mx-auto w-full max-w-2xl space-y-8"]);
                return gt = function() {
                    return e
                }, e
            }

            function jt() {
                var e = (0, a.Z)(["px-6 md:px-4"]);
                return jt = function() {
                    return e
                }, e
            }

            function yt() {
                var e = (0, l.$)().tr;
                return (0, r.jsx)(f.W, {
                    className: (0, i.tw)(jt()),
                    children: (0, r.jsxs)(Xe, {
                        reversed: !0,
                        children: [(0, r.jsx)(Ye, {
                            children: (0, r.jsxs)("div", {
                                className: (0, i.tw)(gt()),
                                children: [(0, r.jsx)("h2", {
                                    className: (0, i.tw)(wt()),
                                    children: e("home.nft.title")
                                }), (0, r.jsx)("div", {
                                    className: (0, i.tw)(ht()),
                                    children: e("home.nft.description")
                                })]
                            })
                        }), (0, r.jsx)(Ye, {
                            className: (0, i.tw)(vt()),
                            children: (0, r.jsx)(mt, {})
                        })]
                    })
                })
            }
            var bt = n(53869);

            function Zt() {
                var e = (0, a.Z)(["rounded-card w-full h-full bg-cover bg-center"]);
                return Zt = function() {
                    return e
                }, e
            }

            function Nt() {
                var e = (0, a.Z)(["border-normal rounded-card absolute z-10 inset-0 border"]);
                return Nt = function() {
                    return e
                }, e
            }

            function Ot() {
                var e = (0, a.Z)(["rounded-card bg-normal absolute flex items-center justify-center text-5xl"]);
                return Ot = function() {
                    return e
                }, e
            }

            function kt() {
                var e = (0, a.Z)([""]);
                return kt = function() {
                    return e
                }, e
            }

            function Pt() {
                var e = (0, a.Z)(["pt-24 pointer-events-none md:pb-8 md:pt-32"]);
                return Pt = function() {
                    return e
                }, e
            }

            function Et(e) {
                var t = e.paused,
                    n = (0, m.useState)(0),
                    a = n[0],
                    c = n[1],
                    u = (0, m.useRef)(null),
                    o = (0, m.useState)(!1),
                    l = o[0],
                    d = o[1],
                    f = (0, p.F)().resolvedTheme;
                return (0, m.useEffect)((function() {
                    return d(!0)
                }), []), (0, m.useEffect)((function() {
                    return l && !t && (u.current = window.setInterval((function() {
                            c((function(e) {
                                return e + 1
                            }))
                        }), 2e3)),
                        function() {
                            null !== u && void 0 !== u && u.current && clearInterval(null === u || void 0 === u ? void 0 : u.current)
                        }
                }), [l, t]), l ? (0, r.jsx)("div", {
                    className: (0, i.tw)(Pt()),
                    children: (0, r.jsx)("div", {
                        className: (0, i.tw)(kt()),
                        style: {
                            perspective: 1024,
                            width: 292.2,
                            height: 447,
                            transformStyle: "preserve-3d"
                        },
                        children: (0, r.jsx)(bt.M, {
                            children: Array.from({
                                length: 5
                            }).map((function(e, t) {
                                return t
                            })).map((function(e) {
                                var t = a + e;
                                return (0, r.jsxs)(s.E.div, {
                                    style: {
                                        width: 292.2,
                                        height: 447,
                                        willChange: "transform, opacity"
                                    },
                                    className: (0, i.tw)(Ot()),
                                    initial: {
                                        z: 100 * -e,
                                        y: 40 * -e - 200,
                                        x: 40 * -e,
                                        opacity: 0,
                                        rotateY: 10,
                                        rotateX: -10
                                    },
                                    animate: {
                                        z: 100 * -e,
                                        y: 40 * -e,
                                        x: 40 * -e,
                                        rotateY: 10,
                                        rotateX: -10,
                                        opacity: 1,
                                        transition: {
                                            delay: .2 + .075 * e,
                                            duration: .6,
                                            type: "tween",
                                            ease: "backInOut"
                                        }
                                    },
                                    exit: {
                                        y: -300,
                                        rotateY: 10,
                                        rotateX: -10,
                                        opacity: 0,
                                        transition: {
                                            duration: .75,
                                            type: "tween",
                                            ease: "backInOut"
                                        }
                                    },
                                    children: [(0, r.jsx)("div", {
                                        className: (0, i.tw)(Nt())
                                    }), (0, r.jsx)(s.E.div, {
                                        className: (0, i.tw)(Zt()),
                                        animate: {
                                            opacity: 1 - .2 * e
                                        },
                                        transition: {
                                            delay: .2 + .075 * e,
                                            duration: .6,
                                            type: "tween",
                                            ease: "backInOut"
                                        },
                                        style: {
                                            backgroundImage: "url(/images/strategies/strat-".concat((a + e) % 5 + 1, "-").concat(f, ".png)"),
                                            willChange: "opacity"
                                        }
                                    })]
                                }, t)
                            }))
                        })
                    })
                }) : null
            }

            function zt() {
                var e = (0, a.Z)(["justify-center"]);
                return zt = function() {
                    return e
                }, e
            }

            function St() {
                var e = (0, a.Z)(["text-weak text-center whitespace-pre-wrap whitespace-pre-wrap text-xl md:text-left"]);
                return St = function() {
                    return e
                }, e
            }

            function Dt() {
                var e = (0, a.Z)(["text-center whitespace-pre-wrap text-4xl font-normal leading-tight md:text-left md:text-5xl md:leading-tight"]);
                return Dt = function() {
                    return e
                }, e
            }

            function It() {
                var e = (0, a.Z)(["mx-auto w-full max-w-2xl space-y-8"]);
                return It = function() {
                    return e
                }, e
            }

            function Ct() {
                var e = (0, a.Z)(["px-6 md:px-4"]);
                return Ct = function() {
                    return e
                }, e
            }

            function At() {
                var e = (0, L.YD)(),
                    t = e.ref,
                    n = e.inView,
                    a = (0, l.$)().tr;
                return (0, r.jsx)(f.W, {
                    className: (0, i.tw)(Ct()),
                    children: (0, r.jsxs)(Xe, {
                        reversed: !0,
                        children: [(0, r.jsx)(Ye, {
                            children: (0, r.jsxs)("div", {
                                className: (0, i.tw)(It()),
                                children: [(0, r.jsx)("h2", {
                                    className: (0, i.tw)(Dt()),
                                    children: a("home.strategies.title")
                                }), (0, r.jsx)("div", {
                                    className: (0, i.tw)(St()),
                                    children: a("home.strategies.description")
                                })]
                            })
                        }), (0, r.jsx)(Ye, {
                            className: (0, i.tw)(zt()),
                            children: (0, r.jsx)("div", {
                                ref: t,
                                children: (0, r.jsx)(Et, {
                                    paused: !n
                                })
                            })
                        })]
                    })
                })
            }
            var Bt = n(18942),
                Tt = n(93574),
                Wt = n(809),
                _t = n.n(Wt),
                Xt = n(92447),
                Yt = n(77044),
                Ft = n(57437),
                $t = n(31975),
                Ht = n(11472),
                Vt = n(30053);

            function Rt() {
                var e = (0, a.Z)(["rounded-br-modal rounded-bl-modal w-full rounded-none"]);
                return Rt = function() {
                    return e
                }, e
            }

            function Ut() {
                var e = (0, a.Z)(["text-base w-full text-center space-y-2"]);
                return Ut = function() {
                    return e
                }, e
            }

            function qt() {
                var e = (0, a.Z)(["text-base w-full text-center space-y-2"]);
                return qt = function() {
                    return e
                }, e
            }

            function Mt() {
                var e = (0, a.Z)(["text-base w-full text-center space-y-2"]);
                return Mt = function() {
                    return e
                }, e
            }

            function Lt() {
                var e = (0, a.Z)(["text-base italic"]);
                return Lt = function() {
                    return e
                }, e
            }

            function Jt() {
                var e = (0, a.Z)(["text-base w-full text-center space-y-2"]);
                return Jt = function() {
                    return e
                }, e
            }

            function Kt() {
                var e = (0, a.Z)(["grid gap-3 grid-cols-2"]);
                return Kt = function() {
                    return e
                }, e
            }

            function Gt() {
                var e = (0, a.Z)(["text-base mx-auto w-full max-w-xs text-center"]);
                return Gt = function() {
                    return e
                }, e
            }

            function Qt() {
                var e = (0, a.Z)(["pb-8 pt-4 px-4 space-y-4"]);
                return Qt = function() {
                    return e
                }, e
            }
            var en = {
                    metamask: {
                        id: "metamask",
                        name: "Metamask",
                        image: {
                            size: {
                                width: 257,
                                height: 238
                            },
                            src: "/images/providers/metamask.svg"
                        }
                    },
                    email: {
                        id: "email",
                        name: "Email",
                        image: {
                            size: {
                                width: 24,
                                height: 24
                            },
                            src: "/images/providers/mail.svg"
                        }
                    }
                },
                tn = function() {
                    var e = (0, Xt.Z)(_t().mark((function e(t, n, r, a) {
                        return _t().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (!(t && n && r)) {
                                        e.next = 9;
                                        break
                                    }
                                    return e.prev = 1, e.next = 4, Ft.default.post("/api/c/register", {
                                        creatorCode: n,
                                        userWallet: t,
                                        signedMessage: r,
                                        locale: a
                                    });
                                case 4:
                                    e.next = 9;
                                    break;
                                case 6:
                                    e.prev = 6, e.t0 = e.catch(1), console.log(e.t0);
                                case 9:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [1, 6]
                        ])
                    })));
                    return function(t, n, r, a) {
                        return e.apply(this, arguments)
                    }
                }();

            function nn() {
                var e = (0, m.useState)(null),
                    t = e[0],
                    n = e[1],
                    a = (0, m.useState)(!1),
                    s = a[0],
                    f = a[1],
                    x = (0, m.useState)(null),
                    p = x[0],
                    v = x[1],
                    h = (0, m.useState)(null),
                    w = h[0],
                    g = h[1],
                    j = (0, m.useState)(null),
                    y = j[0],
                    b = j[1],
                    Z = (0, m.useState)(null),
                    N = Z[0],
                    O = Z[1],
                    k = (0, m.useState)(null),
                    P = k[0],
                    E = k[1],
                    z = (0, Yt.useWeb3React)(),
                    S = z.activate,
                    D = z.account,
                    I = z.deactivate,
                    C = z.library,
                    A = (z.connector, (0, u.Zl)(o.H_)),
                    B = (0, l.$)(),
                    T = B.tr,
                    W = B.lang;
                (0, m.useEffect)((function() {
                    if (null !== $t.pZ && void 0 !== $t.pZ && $t.pZ.safeMultisig) {
                        var e = null === $t.pZ || void 0 === $t.pZ ? void 0 : $t.pZ.safeMultisig;
                        e.isSafeApp().then((function(t) {
                            t && S(e, void 0, !0)
                        }))
                    }
                }), [S]), (0, m.useEffect)((function() {
                    D && !N && Ft.default.get("/api/c/user/".concat(D)).then((function(e) {
                        var t;
                        null !== e && void 0 !== e && null !== (t = e.data) && void 0 !== t && t.creatorUsername && O(e.data.creatorUsername)
                    })).catch((function(e) {
                        console.log(e)
                    }))
                }), [D]), (0, m.useMemo)((function() {
                    try {
                        var e = localStorage.getItem("creator");
                        b(e), t || p || Ft.default.get("/api/c/creator/".concat(e)).then((function(e) {
                            var t, r;
                            null !== e && void 0 !== e && null !== (t = e.data) && void 0 !== t && t.username && (g(null === e || void 0 === e || null === (r = e.data) || void 0 === r ? void 0 : r.username), n(!0), v(!0))
                        }))
                    } catch (r) {}
                }), []);
                var _ = function() {
                    var e = (0, Xt.Z)(_t().mark((function e() {
                        var t, n;
                        return _t().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next = 3, C.getSigner();
                                case 3:
                                    return t = e.sent, e.next = 6, t.signMessage("".concat(T("creator.messageToSign"), " @").concat(w, "."));
                                case 6:
                                    n = e.sent, E(n), e.next = 13;
                                    break;
                                case 10:
                                    e.prev = 10, e.t0 = e.catch(0), console.log(e.t0);
                                case 13:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 10]
                        ])
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }();
                return (0, r.jsx)(d.DialogContainer, {
                    onDismiss: function() {
                        return n(!1)
                    },
                    isDismissable: !0,
                    children: t && w && (0, r.jsxs)(d.Dialog, {
                        title: "",
                        onDismiss: function() {
                            return n(!1)
                        },
                        isDismissable: !0,
                        children: [(0, r.jsxs)("div", {
                            className: (0, i.tw)(Qt()),
                            children: [(0, r.jsx)(d.Heading, {
                                level: "3",
                                children: "1. Welcome!"
                            }), (0, r.jsxs)("div", {
                                className: (0, i.tw)(Gt()),
                                children: ["Welcome to MMDEX, you have been referred by your favorite creator @", w, "."]
                            }), (0, r.jsx)(d.Heading, {
                                level: "3",
                                children: "2. Sync your wallet."
                            }), !D && (0, r.jsxs)("div", {
                                className: (0, i.tw)(Kt()),
                                children: [(0, r.jsx)(Ht.o, {
                                    onPress: function() {
                                        S($t.pZ.injected)
                                    },
                                    walletProvider: en.metamask
                                }), (0, r.jsxs)(d.DialogTrigger, {
                                    children: [(0, r.jsx)(Ht.o, {
                                        walletProvider: en.email
                                    }, "email"), function(e) {
                                        return (0, r.jsx)(Vt.B, {
                                            onCancel: e,
                                            onSubmit: function(t) {
                                                var n = t.email;
                                                e(),
                                                    function(e) {
                                                        S($t.pZ.magic(e))
                                                    }(n)
                                            }
                                        })
                                    }]
                                })]
                            }), D && (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsxs)("div", {
                                    className: (0, i.tw)(Jt()),
                                    children: [(0, r.jsxs)("div", {
                                        children: ["Wallet synced successfully! ", (0, r.jsx)("br", {})]
                                    }), (0, r.jsx)("div", {
                                        className: (0, i.tw)(Lt()),
                                        children: D
                                    }), (0, r.jsx)(d.Button, {
                                        size: "sm",
                                        weight: "normal",
                                        tone: "neutral",
                                        onPress: function() {
                                            I(), A(null)
                                        },
                                        children: "Change wallet"
                                    })]
                                }), (0, r.jsx)(d.Heading, {
                                    level: "3",
                                    children: "3. Verify."
                                }), N != w && (0, r.jsx)(r.Fragment, {
                                    children: (0, r.jsxs)("div", {
                                        className: (0, i.tw)(Mt()),
                                        children: [N && (0, r.jsxs)("div", {
                                            className: (0, i.tw)(qt()),
                                            children: ["You are currently supporting @", N, ". Do you want to swap for @", w, "?"]
                                        }), (0, r.jsx)("div", {
                                            children: "Please sign the message to verify your account."
                                        }), (0, r.jsx)(d.Button, {
                                            size: "sm",
                                            weight: "normal",
                                            tone: "neutral",
                                            isDisabled: null != P,
                                            onPress: function() {
                                                _()
                                            },
                                            children: "Sign message"
                                        })]
                                    })
                                }), N && N == w && (0, r.jsxs)("div", {
                                    className: (0, i.tw)(Ut()),
                                    children: ["You are already supporting @", N, "."]
                                })]
                            })]
                        }), (0, r.jsx)(d.Button, {
                            size: "md",
                            weight: "strong",
                            tone: "accent",
                            className: (0, i.tw)(Rt()),
                            isDisabled: s || !D || N != w && !P,
                            onPress: function() {
                                return f(!0), N != w && P && tn(D, y, P, W), localStorage.removeItem("creator"), c.default.push("/[address]", "/".concat(D))
                            },
                            children: N && N != w ? "Swap" : "Open the app"
                        })]
                    })
                })
            }

            function rn() {
                var e = (0, a.Z)(["pb-24 my:pb-32 pt-16 space-y-32 md:pt-24"]);
                return rn = function() {
                    return e
                }, e
            }

            function an() {
                return (0, r.jsxs)(Bt.Y, {
                    children: [(0, r.jsx)(Tt.p, {
                        title: "MMDEX | Effortless ways to grow your crypto",
                        titleTemplate: "",
                        description: "MMDEX is a non-custodial platform where you can do more with your money. Easily grow, track, and control your assets right from your wallet."
                    }), (0, r.jsx)(I, {}), (0, r.jsxs)("div", {
                        className: (0, i.tw)(rn()),
                        children: [(0, r.jsx)(ze, {}), (0, r.jsx)(At, {}), (0, r.jsx)(st, {}), (0, r.jsx)(yt, {}), (0, r.jsx)(q, {}), (0, r.jsx)(nn, {})]
                    })]
                })
            }
        },
        70380: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return f
                }
            });
            var r = n(26265),
                a = n(85893),
                i = n(27261),
                s = n(38347),
                c = n(67294),
                u = n(79340);

            function o(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function l(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? o(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function d() {
                var e = (0, i.Z)(["rounded-card overflow-hidden dark:(bg-neutral-950) relative border border-normal"]);
                return d = function() {
                    return e
                }, e
            }
            var f = (0, c.forwardRef)((function(e, t) {
                var n = e.children,
                    r = e.className,
                    i = (0, s.Z)(e, ["children", "className"]);
                return (0, a.jsx)("div", l(l({
                    ref: t,
                    className: (0, u.tw)((0, u.nn)(d()), r)
                }, i), {}, {
                    children: n
                }))
            }))
        },
        96617: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return r.Z
                }
            });
            var r = n(70380)
        },
        91344: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/home", function() {
                return n(56679)
            }])
        }
    },
    function(e) {
        e.O(0, [9774, 5937, 7477, 5795, 2283, 9591, 8181, 6051, 2888, 179], (function() {
            return t = 91344, e(e.s = t);
            var t
        }));
        var t = e.O();
        _N_E = t
    }
]);