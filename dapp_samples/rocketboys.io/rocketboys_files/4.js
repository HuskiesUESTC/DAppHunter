(this["webpackJsonpfmusk-web"] = this["webpackJsonpfmusk-web"] || []).push([
    [4], {
        153: function (e, t, a) {
            "use strict";
            a.r(t), a.d(t, "default", (function () {
                return We
            }));
            var i = a(37),
                n = a(150),
                c = a(89),
                s = a(148),
                r = a(156),
                l = a(90),
                o = a(147),
                d = a(149),
                b = a.p + "static/media/BackgroundLogo.91506b2a.png",
                j = a(144),
                m = a(145),
                h = a(146),
                x = a(38),
                f = a.p + "static/media/ComingSoon.498a99cc.png",
                g = a(31),
                O = a(41),
                u = a(142),
                A = a(2);

            function p(e) {
                var t = e.children,
                    a = Object(O.a)(e, ["children"]),
                    i = w();
                return Object(A.jsx)(u.a, Object(g.a)(Object(g.a)({
                    variant: "contained",
                    className: i.button
                }, a), {}, {
                    children: t
                }))
            }
            var w = Object(c.a)((function (e) {
                return {
                    button: {
                        backgroundColor: "#54d3fd",
                        borderRadius: 120,
                        paddingLeft: 24,
                        paddingRight: 24,
                        transition: "all 350ms ease",
                        "&:hover": {
                            backgroundColor: "#3a7de4",
                            boxShadow: "6px 6px 13px 0 rgba(0, 0, 0, 0.18)",
                            transform: "translate(0px, -8px)"
                        }
                    }
                }
            }));

            function v(e) {
                e.navLinks;
                var t = y(),
                    a = Object(x.b)(),
                    i = a.whyShibaFightREf,
                    n = a.buyRef,
                    c = [{
                        label: "Donate",
                        ref: a.donateRef
                    }, {
                        label: "Why Shiba Fight",
                        ref: i
                    }, {
                        label: "How to buy",
                        ref: n
                    }, {
                        label: "Tokenomics",
                        ref: a.tokenomicsRef
                    }, {
                        label: "Moonmap",
                        ref: a.moonMapRef
                    }, {
                        label: "Beneficiaries",
                        ref: a.beneficiariesRef
                    }, {
                        label: "ShibaSwap",
                        comingSoon: !0
                    }];
                return Object(A.jsxs)("div", {
                    className: t.container,
                    children: [Object(A.jsx)(r.a, {
                        xsDown: !0,
                        children: Object(A.jsxs)("div", {
                            className: t.logo,
                            children: [Object(A.jsx)("img", {
                                src: b,
                                alt: "Shiba Fight",
                                className: t.image
                            }), Object(A.jsx)(l.a, {
                                className: t.name,
                                children: "Shiba Fight"
                            })]
                        })
                    }), Object(A.jsx)(r.a, {
                        smUp: !0,
                        children: Object(A.jsx)("div", {
                            className: t.logo,
                            children: Object(A.jsx)("img", {
                                src: b,
                                alt: "Shiba Fight",
                                className: t.image
                            })
                        })
                    }), Object(A.jsx)(r.a, {
                        smDown: !0,
                        children: Object(A.jsx)("div", {
                            className: t.menu,
                            children: Object(A.jsx)(j.a, {
                                component: "nav",
                                classes: {
                                    root: t.nav
                                },
                                children: c.map((function (e, t) {
                                    return Object(A.jsxs)(m.a, {
                                        button: !0,
                                        onClick: function () {
                                            return function (e) {
                                                var t;
                                                (null === e || void 0 === e || null === (t = e.ref) || void 0 === t ? void 0 : t.current) && e.ref.current.scrollIntoView({
                                                    block: "start",
                                                    behavior: "smooth"
                                                })
                                            }(e)
                                        },
                                        children: [Object(A.jsx)(h.a, {
                                            style: {
                                                whiteSpace: "nowrap"
                                            },
                                            primary: e.label
                                        }), (null === e || void 0 === e ? void 0 : e.comingSoon) && Object(A.jsx)("img", {
                                            style: {
                                                width: 64,
                                                position: "absolute",
                                                bottom: -8,
                                                right: 22
                                            },
                                            src: f,
                                            alt: "ComingSoon"
                                        })]
                                    }, t)
                                }))
                            })
                        })
                    }), Object(A.jsx)("div", {
                        children: Object(A.jsx)(p, {
                            style: {
                                backgroundColor: "#fd6d6f"
                            },
                            children: Object(A.jsx)(o.a, {
                                underline: "none",
                                color: "inherit",
                                target: "_blank",
                                href: "https://exchange.pancakeswap.finance/#/swap?outputCurrency=0xA574da14b6da9b2afb6920b26e18F1E0b8B28233",
                                children: "GET $SHIBF"
                            })
                        })
                    })]
                })
            }
            var y = Object(c.a)((function (e) {
                    return {
                        container: {
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginBottom: 32,
                            marginTop: 32
                        },
                        nav: {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        },
                        logo: {
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        },
                        name: {
                            fontFamily: "Caveat",
                            fontWeight: "bold",
                            fontSize: 36
                        },
                        image: {
                            maxHeight: 54
                        }
                    }
                })),
                S = a(91),
                B = a.n(S),
                N = a(40),
                k = a(0);

            function W(e) {
                var t = e.width,
                    a = void 0 === t ? 100 : t,
                    i = e.height,
                    n = void 0 === i ? 100 : i,
                    c = e.current,
                    s = e.max,
                    r = Object(O.a)(e, ["width", "height", "current", "max"]),
                    l = C();
                return Object(A.jsx)("svg", Object(g.a)(Object(g.a)({
                    width: a,
                    height: n,
                    viewBox: "0 0 160 160",
                    xmlns: "http://www.w3.org/2000/svg"
                }, r), {}, {
                    children: Object(A.jsxs)("g", {
                        children: [Object(A.jsx)("circle", {
                            className: l.circle,
                            cx: "80",
                            cy: "80",
                            r: "72",
                            stroke: "#fd6d6f",
                            strokeWidth: "8",
                            fill: "none",
                            strokeLinecap: "round",
                            strokeDasharray: 144 * Math.PI,
                            strokeDashoffset: 144 * Math.PI - 144 * Math.PI * c / s
                        }), Object(A.jsx)("circle", {
                            className: l.circle,
                            cx: "80",
                            cy: "80",
                            r: "72",
                            stroke: "rgba(0, 0, 0, 0.1)",
                            strokeWidth: "8",
                            fill: "none",
                            strokeLinecap: "round"
                        })]
                    })
                }))
            }
            var C = Object(c.a)((function (e) {
                    return {
                        circle: {
                            transform: "rotate(-90deg)",
                            transformOrigin: "50% 50%",
                            transition: "stroke-dashoffset .4s cubic-bezier(.4, 0, 0, 1.7)"
                        }
                    }
                })),
                F = a(116),
                R = a.n(F),
                I = a(96),
                L = a(143);

            function z() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "md",
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "up",
                    a = Object(I.a)(),
                    i = Object(L.a)(a.breakpoints[t](e));
                return i
            }
            var E = Date.UTC(2021, 5, 20, 13);

            function H() {
                var e = P(),
                    t = z("xs", "down"),
                    a = Object(k.useState)(1),
                    i = Object(N.a)(a, 2),
                    n = i[0],
                    c = i[1];
                Object(k.useEffect)((function () {
                    var e = setInterval((function () {
                        if (0 !== n) {
                            var e = E - new Date;
                            c(e < 0 ? 0 : e)
                        }
                    }), 1e3);
                    return function () {
                        clearInterval(e)
                    }
                }), []);
                var s = new R.a.duration(n),
                    r = t ? 52 : 100,
                    o = t ? 52 : 100;
                return Object(A.jsxs)("div", {
                    className: e.container,
                    children: [Object(A.jsxs)("div", {
                        className: e.time,
                        children: [Object(A.jsxs)("div", {
                            className: e.circle,
                            children: [Object(A.jsx)("div", {
                                className: e.value,
                                children: Object(A.jsx)(l.a, {
                                    className: e.text,
                                    children: s.days()
                                })
                            }), Object(A.jsx)(W, {
                                current: s.days(),
                                max: 4,
                                width: o,
                                height: r
                            })]
                        }), Object(A.jsx)(l.a, {
                            className: e.text,
                            children: "DAYS"
                        })]
                    }), Object(A.jsxs)("div", {
                        className: e.time,
                        children: [Object(A.jsxs)("div", {
                            className: e.circle,
                            children: [Object(A.jsx)("div", {
                                className: e.value,
                                children: Object(A.jsx)(l.a, {
                                    className: e.text,
                                    children: s.hours()
                                })
                            }), Object(A.jsx)(W, {
                                current: s.hours(),
                                max: 24,
                                width: o,
                                height: r
                            })]
                        }), Object(A.jsx)(l.a, {
                            className: e.text,
                            children: "HOURS"
                        })]
                    }), Object(A.jsxs)("div", {
                        className: e.time,
                        children: [Object(A.jsxs)("div", {
                            className: e.circle,
                            children: [Object(A.jsx)("div", {
                                className: e.value,
                                children: Object(A.jsx)(l.a, {
                                    className: e.text,
                                    children: s.minutes()
                                })
                            }), Object(A.jsx)(W, {
                                current: s.minutes(),
                                max: 60,
                                width: o,
                                height: r
                            })]
                        }), Object(A.jsx)(l.a, {
                            className: e.text,
                            children: "MINUTES"
                        })]
                    }), Object(A.jsxs)("div", {
                        className: e.time,
                        children: [Object(A.jsxs)("div", {
                            className: e.circle,
                            children: [Object(A.jsx)("div", {
                                className: e.value,
                                children: Object(A.jsx)(l.a, {
                                    className: e.text,
                                    children: s.seconds()
                                })
                            }), Object(A.jsx)(W, {
                                current: s.seconds(),
                                max: 60,
                                width: o,
                                height: r
                            })]
                        }), Object(A.jsx)(l.a, {
                            className: e.text,
                            children: "SECONDS"
                        })]
                    })]
                })
            }
            var M, P = Object(c.a)((function (e) {
                    return {
                        container: {
                            display: "flex"
                        },
                        time: {
                            marginRight: 24,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center"
                        },
                        text: Object(i.a)({
                            fontSize: 32
                        }, e.breakpoints.down("xs"), {
                            fontSize: 18
                        }),
                        circle: {
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center"
                        },
                        value: {
                            position: "absolute"
                        }
                    }
                })),
                Y = a(118),
                Q = a.n(Y),
                J = a(119),
                D = a.n(J),
                G = a(120),
                V = a.n(G),
                T = a(121),
                q = a.n(T);

            function K() {
                return (K = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i])
                    }
                    return e
                }).apply(this, arguments)
            }

            function U(e, t) {
                if (null == e) return {};
                var a, i, n = function (e, t) {
                    if (null == e) return {};
                    var a, i, n = {},
                        c = Object.keys(e);
                    for (i = 0; i < c.length; i++) a = c[i], t.indexOf(a) >= 0 || (n[a] = e[a]);
                    return n
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var c = Object.getOwnPropertySymbols(e);
                    for (i = 0; i < c.length; i++) a = c[i], t.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(e, a) && (n[a] = e[a])
                }
                return n
            }

            function X(e, t) {
                var a = e.title,
                    i = e.titleId,
                    n = U(e, ["title", "titleId"]);
                return k.createElement("svg", K({
                    enableBackground: "new 0 0 24 24",
                    height: 512,
                    viewBox: "0 0 24 24",
                    width: 512,
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t,
                    "aria-labelledby": i
                }, n), a ? k.createElement("title", {
                    id: i
                }, a) : null, M || (M = k.createElement("path", {
                    d: "m22.085 4.733 1.915-1.832v-.401h-6.634l-4.728 11.768-5.379-11.768h-6.956v.401l2.237 2.693c.218.199.332.49.303.783v10.583c.069.381-.055.773-.323 1.05l-2.52 3.054v.396h7.145v-.401l-2.52-3.049c-.273-.278-.402-.663-.347-1.05v-9.154l6.272 13.659h.729l5.393-13.659v10.881c0 .287 0 .346-.188.534l-1.94 1.877v.402h9.412v-.401l-1.87-1.831c-.164-.124-.249-.332-.214-.534v-13.467c-.035-.203.049-.411.213-.534z",
                    fill: "#212121"
                })))
            }
            var Z = k.forwardRef(X),
                $ = (a.p, [{
                    icon: Object(A.jsx)(Q.a, {
                        style: {
                            color: "black",
                            fontSize: 32
                        }
                    }),
                    label: "Telegram",
                    link: "https://t.me/shibafightchat"
                }, {
                    icon: Object(A.jsx)(D.a, {
                        style: {
                            color: "black",
                            fontSize: 32
                        }
                    }),
                    label: "Reddit",
                    link: "https://www.reddit.com/r/ShibaFight/"
                }, {
                    icon: Object(A.jsx)(V.a, {
                        style: {
                            color: "black",
                            fontSize: 32
                        }
                    }),
                    label: "Twitter",
                    link: "https://twitter.com/ShibaFight"
                }, {
                    icon: Object(A.jsx)(q.a, {
                        style: {
                            color: "black",
                            fontSize: 32
                        }
                    }),
                    label: "Github",
                    link: "https://github.com/ShibaFight/shiba-fight-contract"
                }, {
                    icon: Object(A.jsx)(Z, {
                        style: {
                            fill: "black"
                        },
                        width: "32",
                        height: "32",
                        viewBox: "0 0 24 24"
                    }),
                    label: "Medium",
                    link: "https://shibafight.medium.com/what-is-shiba-fight-shibf-2158d7ab6cc8"
                }]);

            function _() {
                var e = ee();
                return Object(A.jsx)(s.a, {
                    children: Object(A.jsxs)(s.a, {
                        container: !0,
                        className: e.container,
                        children: [Object(A.jsx)(s.a, {
                            item: !0,
                            xs: 12,
                            children: Object(A.jsx)(v, {})
                        }), Object(A.jsx)(r.a, {
                            mdUp: !0,
                            children: Object(A.jsx)("img", {
                                className: e.image,
                                src: b,
                                alt: "logo"
                            })
                        }), Object(A.jsxs)(s.a, {
                            item: !0,
                            xs: 12,
                            md: 6,
                            className: e.left,
                            children: [Object(A.jsx)(B.a, {
                                bottom: !0,
                                children: Object(A.jsx)(l.a, {
                                    className: e.title,
                                    children: "Shiba Fight"
                                })
                            }), Object(A.jsx)(B.a, {
                                bottom: !0,
                                children: Object(A.jsx)(l.a, {
                                    className: e.slogan,
                                    children: "Big meme! Bigger dream!"
                                })
                            }), Object(A.jsx)(B.a, {
                                bottom: !0,
                                children: Object(A.jsx)(l.a, {
                                    className: e.subTitle,
                                    children: "A Sustainable Community Driven Project To Fight Back COVID-19"
                                })
                            }), Object(A.jsx)(B.a, {
                                bottom: !0,
                                children: Object(A.jsx)(l.a, {
                                    className: e.description,
                                    children: "Shiba Fight ($SHIBF) is here to fight back COVID 19. It belongs to the famous Shiba family with its own mission to give back to the unfortunate people. Our deflationary decentralized cryptocurrency will bring instant rewards for holders. Join our Token Prelaunch NOW and help bring a better world at the same time!"
                                })
                            }), Object(A.jsx)(l.a, {
                                className: e.timeTitle,
                                children: "TIME UNTIL LAUNCH"
                            }), Object(A.jsx)(H, {}), Object(A.jsx)(B.a, {
                                bottom: !0,
                                children: Object(A.jsx)("div", {
                                    style: {
                                        marginBottom: 24,
                                        marginTop: 12
                                    },
                                    children: Object(A.jsx)(p, {
                                        style: {
                                            marginRight: 24,
                                            backgroundColor: "#fd6d6f",
                                            fontFamily: "Poppins, sans-serif"
                                        },
                                        children: Object(A.jsx)(o.a, {
                                            underline: "none",
                                            color: "inherit",
                                            target: "_blank",
                                            href: "https://exchange.pancakeswap.finance/#/swap?outputCurrency=0xA574da14b6da9b2afb6920b26e18F1E0b8B28233",
                                            children: "BUY $SHIBF"
                                        })
                                    })
                                })
                            }), Object(A.jsx)(B.a, {
                                bottom: !0,
                                children: Object(A.jsx)("div", {
                                    className: e.reference,
                                    children: $.map((function (e, t) {
                                        return Object(A.jsx)(d.a, {
                                            color: "default",
                                            children: Object(A.jsx)(o.a, {
                                                underline: "none",
                                                color: "inherit",
                                                target: "_blank",
                                                href: e.link || "#",
                                                children: e.icon
                                            })
                                        }, t)
                                    }))
                                })
                            })]
                        }), Object(A.jsx)(s.a, {
                            item: !0,
                            xs: 12,
                            md: 1
                        }), Object(A.jsx)(s.a, {
                            item: !0,
                            xs: 12,
                            md: 5,
                            className: e.right,
                            children: Object(A.jsx)(r.a, {
                                smDown: !0,
                                children: Object(A.jsx)("img", {
                                    className: e.image,
                                    src: b,
                                    alt: "logo"
                                })
                            })
                        })]
                    })
                })
            }
            var ee = Object(c.a)((function (e) {
                    return {
                        container: {
                            paddingBottom: 72
                        },
                        left: {
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start"
                        },
                        timeTitle: Object(i.a)({
                            fontSize: 40,
                            fontWeight: "bold",
                            marginBottom: 16,
                            fontFamily: "Poppins, sans-serif",
                            color: "#fd6d6f"
                        }, e.breakpoints.down("xs"), {
                            fontSize: 24
                        }),
                        title: Object(i.a)({
                            color: "#3d006f",
                            fontFamily: "Caveat",
                            fontSize: 96,
                            marginBottom: 10,
                            fontWeight: 400,
                            maxWidth: "100vw"
                        }, e.breakpoints.down("xs"), {
                            fontSize: 46
                        }),
                        slogan: Object(i.a)({
                            fontSize: 40,
                            fontWeight: "bold",
                            marginBottom: 5,
                            fontFamily: "Poppins, sans-serif"
                        }, e.breakpoints.down("xs"), {
                            fontSize: 24
                        }),
                        subTitle: {
                            marginBottom: 24,
                            color: "#716c80",
                            fontWeight: 500,
                            fontSize: 17,
                            fontFamily: "Poppins, sans-serif"
                        },
                        description: {
                            marginBottom: 24,
                            color: "#716c80",
                            fontWeight: 500,
                            fontSize: 18,
                            fontFamily: "Poppins, sans-serif"
                        },
                        reference: {
                            display: "flex"
                        },
                        right: {
                            display: "flex",
                            justifyContent: "center"
                        },
                        image: Object(i.a)({
                            width: "100%",
                            objectFit: "contain"
                        }, e.breakpoints.down("sm"), {
                            width: "60%",
                            margin: "auto",
                            marginBottom: 32
                        })
                    }
                })),
                te = a.p + "static/media/qrCode.5d75a8aa.png",
                ae = a.p + "static/media/corona.f13c34f8.png",
                ie = "0x2fD9E86a428c5A2df10D253b24e997C00c3ca14d";

            function ne() {
                var e, t = ce(),
                    a = z("md", "down"),
                    i = Object(x.b)().donateRef;
                return Object(A.jsxs)("div", {
                    ref: i,
                    className: t.container,
                    children: [Object(A.jsx)(B.a, {
                        bottom: !0,
                        children: Object(A.jsx)(l.a, {
                            className: t.titleContent,
                            children: "DONATE"
                        })
                    }), Object(A.jsxs)(s.a, {
                        container: !0,
                        alignItems: "center",
                        justify: "space-between",
                        children: [Object(A.jsxs)(s.a, {
                            item: !0,
                            xs: 12,
                            md: 7,
                            className: t.left,
                            children: [Object(A.jsx)(B.a, {
                                bottom: !0,
                                children: Object(A.jsxs)("div", {
                                    className: t.top,
                                    children: [Object(A.jsx)(l.a, {
                                        className: t.title,
                                        children: "Fight again COVID-19"
                                    }), Object(A.jsx)("img", {
                                        className: t.corona,
                                        src: ae,
                                        alt: "Covid-19"
                                    })]
                                })
                            }), Object(A.jsx)(B.a, {
                                bottom: !0,
                                children: Object(A.jsxs)(l.a, {
                                    style: {
                                        fontFamily: "Poppins, sans-serif"
                                    },
                                    children: ["All donations will be", Object(A.jsx)("span", {
                                        style: {
                                            fontWeight: "bold"
                                        },
                                        children: " 100% "
                                    }), "contributed to COVID-19's charity beneficiaries. Donations will be published on our Twitter account once been made."]
                                })
                            }), Object(A.jsxs)(B.a, {
                                bottom: !0,
                                children: [Object(A.jsx)(l.a, {
                                    style: {
                                        fontFamily: "Poppins, sans-serif",
                                        marginTop: 8
                                    },
                                    children: "Scan the QR code or copy the address below to donate today!"
                                }), Object(A.jsxs)(l.a, {
                                    className: t.address,
                                    children: [a ? (e = ie, e.slice(0, 6) + "..." + e.slice(-6)) : ie, Object(A.jsx)(p, {
                                        onClick: function () {
                                            navigator.clipboard.writeText(ie)
                                        },
                                        style: {
                                            marginLeft: 12,
                                            fontSize: 13
                                        },
                                        children: "Copy"
                                    })]
                                })]
                            }), Object(A.jsxs)(B.a, {
                                bottom: !0,
                                children: [Object(A.jsxs)(l.a, {
                                    style: {
                                        fontFamily: "Poppins, sans-serif"
                                    },
                                    children: [Object(A.jsx)("span", {
                                        style: {
                                            fontWeight: "bold"
                                        },
                                        children: "Accepted: "
                                    }), "Any crypto on any chain"]
                                }), Object(A.jsxs)(l.a, {
                                    style: {
                                        fontFamily: "Poppins, sans-serif"
                                    },
                                    children: [Object(A.jsx)("span", {
                                        style: {
                                            fontWeight: "bold"
                                        },
                                        children: "Preferred: "
                                    }), "$BNB, $ETH, $USDC, $SHIBF"]
                                })]
                            })]
                        }), Object(A.jsx)(s.a, {
                            item: !0,
                            xs: 12,
                            md: 4,
                            className: t.right,
                            children: Object(A.jsx)(B.a, {
                                bottom: !0,
                                children: Object(A.jsx)("img", {
                                    className: t.image,
                                    src: te,
                                    alt: "QrCode"
                                })
                            })
                        })]
                    })]
                })
            }
            var ce = Object(c.a)((function (e) {
                    return {
                        container: {
                            paddingTop: 72,
                            paddingBottom: 72
                        },
                        titleContent: {
                            textAlign: "center",
                            fontSize: 64,
                            color: "#3d006f",
                            marginBottom: 64,
                            fontWeight: 500
                        },
                        left: {
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start"
                        },
                        top: {
                            display: "flex",
                            alignItems: "center",
                            marginBottom: 18
                        },
                        title: Object(i.a)({
                            color: "#3d006f",
                            fontSize: 46,
                            fontWeight: 500,
                            textTransform: "uppercase"
                        }, e.breakpoints.down("xs"), {
                            fontSize: 32
                        }),
                        corona: Object(i.a)({
                            height: 72,
                            width: 72,
                            marginLeft: 24
                        }, e.breakpoints.down("xs"), {
                            height: 52,
                            width: 52,
                            marginLeft: 12
                        }),
                        address: {
                            margin: 32,
                            fontWeight: "bold",
                            fontSize: 22,
                            whiteSpace: "nowrap",
                            fontFamily: "Poppins, sans-serif"
                        },
                        right: {
                            display: "flex",
                            justifyContent: "center"
                        },
                        image: {
                            width: "80%"
                        }
                    }
                })),
                se = a.p + "static/media/ShibaFightEatBone.7802813d.png",
                re = a.p + "static/media/ShibaFightFunny.23f28be4.png";

            function le() {
                var e = oe(),
                    t = Object(x.b)().whyShibaFightREf;
                return Object(A.jsxs)(n.a, {
                    style: {
                        paddingTop: 72,
                        paddingBottom: 72,
                        marginBottom: 64
                    },
                    disableGutters: !0,
                    ref: t,
                    children: [Object(A.jsx)(B.a, {
                        bottom: !0,
                        children: Object(A.jsx)(l.a, {
                            className: e.titleContent,
                            children: "WHY SHIBA FIGHT"
                        })
                    }), Object(A.jsxs)(s.a, {
                        container: !0,
                        className: e.container,
                        children: [Object(A.jsx)(s.a, {
                            item: !0,
                            xs: 12,
                            md: 5,
                            className: e.left,
                            children: Object(A.jsx)(B.a, {
                                bottom: !0,
                                children: Object(A.jsx)("img", {
                                    className: e.image,
                                    src: se,
                                    alt: "logo"
                                })
                            })
                        }), Object(A.jsxs)(s.a, {
                            item: !0,
                            xs: 12,
                            md: 7,
                            children: [Object(A.jsx)(B.a, {
                                bottom: !0,
                                children: Object(A.jsx)(l.a, {
                                    className: e.title,
                                    children: "INSTANT REWARDS"
                                })
                            }), Object(A.jsx)(B.a, {
                                bottom: !0,
                                children: Object(A.jsx)(l.a, {
                                    className: e.description,
                                    children: "2% of every transaction (buy/sell) made within the network is re-distributed to existing $SHIBF holders. If you own $SHIBF. Also we burn 1% of every transaction to make sure the value of token will increase overtime while supply keeps decreasing! You can sit back and watch your balance grow!"
                                })
                            }), Object(A.jsx)(B.a, {
                                bottom: !0,
                                children: Object(A.jsx)(l.a, {
                                    className: e.title,
                                    children: "ZERO RISK MODEL"
                                })
                            }), Object(A.jsx)(B.a, {
                                bottom: !0,
                                children: Object(A.jsx)(l.a, {
                                    className: e.description,
                                    children: "$SHIBF's liquidity is locked and 50% of total supply is sent to a burn address \u2013 no chance of a rug! Furtther, $SHIBF is currently undergoing an audit to prove the safety and security the token holds - zero risk for holders from potentially bad actors! Audit coming soon!"
                                })
                            })]
                        })]
                    }), Object(A.jsxs)(s.a, {
                        container: !0,
                        className: e.container,
                        children: [Object(A.jsx)(s.a, {
                            item: !0,
                            xs: 12,
                            md: 5,
                            className: e.left,
                            children: Object(A.jsx)(B.a, {
                                bottom: !0,
                                children: Object(A.jsx)("img", {
                                    className: e.image,
                                    src: re,
                                    alt: "logo"
                                })
                            })
                        }), Object(A.jsxs)(s.a, {
                            item: !0,
                            xs: 12,
                            md: 7,
                            children: [Object(A.jsx)(B.a, {
                                bottom: !0,
                                children: Object(A.jsx)(l.a, {
                                    className: e.title,
                                    children: "ANTI WHALE PROTECTION"
                                })
                            }), Object(A.jsx)(B.a, {
                                bottom: !0,
                                children: Object(A.jsx)(l.a, {
                                    className: e.description,
                                    children: "We set a limit for transaction amount. Every wallet can only purchase 5 Billion Tokens at a time and hold a maximum of 20 Billion Tokens only. Also we have a minimum and maximum contribution amount for our presale."
                                })
                            }), Object(A.jsx)(B.a, {
                                bottom: !0,
                                children: Object(A.jsx)(l.a, {
                                    className: e.title,
                                    children: "COMMUNITY POWERED"
                                })
                            }), Object(A.jsx)(B.a, {
                                bottom: !0,
                                children: Object(A.jsx)(l.a, {
                                    className: e.description,
                                    children: "$SHIBF is a next-generation ecological DeFi token with a purpose: fighting back COVID-19 and giving back to the those in need. A portion of every transaction will be sent to the COVID-19 Solidarity Response Fund (in support of World Health Organization). With a clear purpose in mind, together we will go as far as the moon!"
                                })
                            })]
                        })]
                    })]
                })
            }
            var oe = Object(c.a)((function (e) {
                    return {
                        container: {
                            justifyContent: "center",
                            alignItems: "center"
                        },
                        titleContent: {
                            textAlign: "center",
                            fontSize: 64,
                            color: "#3d006f",
                            fontWeight: 500
                        },
                        left: {
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start"
                        },
                        image: {
                            width: "100%"
                        },
                        title: Object(i.a)({
                            color: "#3d006f",
                            fontFamily: "Poppins, sans-serif",
                            fontStyle: "normal",
                            fontWeight: "bold",
                            fontSize: 40,
                            marginBottom: 18
                        }, e.breakpoints.down("xs"), {
                            textAlign: "center"
                        }),
                        description: {
                            color: "#716c80",
                            fontFamily: "Poppins, sans-serif",
                            fontStyle: "normal",
                            fontWeight: 500,
                            fontSize: 18,
                            marginBottom: 24
                        }
                    }
                })),
                de = a(154),
                be = a(151),
                je = a.p + "static/media/ShibaFightFly.999c4f7b.png",
                me = a.p + "static/media/pancakeLogo.03478aff.png";
            a.p;

            function he() {
                var e = xe(),
                    t = Object(k.useState)(0),
                    a = Object(N.a)(t, 2),
                    i = a[0],
                    c = a[1],
                    r = Object(k.useMemo)((function () {
                        return function () {
                            return Object(A.jsxs)("div", {
                                children: [Object(A.jsx)(B.a, {
                                    bottom: !0,
                                    children: Object(A.jsx)(l.a, {
                                        className: e.title,
                                        children: "Create a MetaMask Wallet"
                                    })
                                }), Object(A.jsx)(B.a, {
                                    bottom: !0,
                                    children: Object(A.jsxs)(l.a, {
                                        className: e.description,
                                        children: ["$SHIBF token is available on the Ethereum blockchain. MetaMask is the market leader in BEP20 (BINANCE SMART CHAIN) wallets. On Google Chrome, visit", Object(A.jsx)("b", {
                                            children: " metamask.io"
                                        }), " to download the extension and set up a wallet. On mobile? Get MetaMask's app for ", Object(A.jsx)("b", {
                                            children: "iPhone"
                                        }), " or ", Object(A.jsx)("b", {
                                            children: "Android"
                                        }), "."]
                                    })
                                })]
                            })
                        }
                    }), [e]),
                    d = Object(k.useMemo)((function () {
                        return function () {
                            return Object(A.jsxs)("div", {
                                children: [Object(A.jsx)(B.a, {
                                    bottom: !0,
                                    children: Object(A.jsx)(l.a, {
                                        className: e.title,
                                        children: "Send $BNB to MetaMask"
                                    })
                                }), Object(A.jsx)(B.a, {
                                    bottom: !0,
                                    children: Object(A.jsx)(l.a, {
                                        className: e.description,
                                        children: "Buy BNB through MetaMask or transfer it to your MetaMask wallet address from another wallet (e.g. Coinbase or Binance)."
                                    })
                                })]
                            })
                        }
                    }), [e]),
                    b = Object(k.useMemo)((function () {
                        return function () {
                            return Object(A.jsxs)("div", {
                                children: [Object(A.jsx)(B.a, {
                                    bottom: !0,
                                    children: Object(A.jsx)(l.a, {
                                        className: e.title,
                                        children: "Visit PancakeSwap"
                                    })
                                }), Object(A.jsx)(B.a, {
                                    bottom: !0,
                                    children: Object(A.jsx)(l.a, {
                                        className: e.description,
                                        children: "You can currently buy $SHIBF on PancakeSwap, SHIBF's official decentralized exchange where you can swap any BEP20 token."
                                    })
                                })]
                            })
                        }
                    }), [e]),
                    j = Object(k.useMemo)((function () {
                        return function () {
                            return Object(A.jsxs)("div", {
                                children: [Object(A.jsx)(B.a, {
                                    bottom: !0,
                                    children: Object(A.jsx)(l.a, {
                                        className: e.title,
                                        children: "Swap $BNB for $SHIBF"
                                    })
                                }), Object(A.jsx)(B.a, {
                                    bottom: !0,
                                    children: Object(A.jsx)(l.a, {
                                        className: e.description,
                                        children: "Enter the amount of $BNB you would like to swap for $SHIBF. Click Connect Wallet then Swap"
                                    })
                                })]
                            })
                        }
                    }), [e]),
                    m = Object(x.b)().buyRef;
                return Object(A.jsxs)(n.a, {
                    ref: m,
                    disableGutters: !0,
                    className: e.container,
                    children: [Object(A.jsx)(B.a, {
                        bottom: !0,
                        children: Object(A.jsx)(l.a, {
                            className: e.text,
                            children: "HOW TO BUY $SHIBF"
                        })
                    }), Object(A.jsxs)(s.a, {
                        container: !0,
                        children: [Object(A.jsx)(s.a, {
                            item: !0,
                            xs: 12,
                            md: 5,
                            children: Object(A.jsx)(B.a, {
                                bottom: !0,
                                children: Object(A.jsx)("img", {
                                    className: e.image,
                                    src: je,
                                    alt: "logo"
                                })
                            })
                        }), Object(A.jsxs)(s.a, {
                            item: !0,
                            xs: 8,
                            md: 7,
                            className: e.right,
                            children: [Object(A.jsxs)(de.a, {
                                className: e.multiTab,
                                value: i,
                                onChange: function (e, t) {
                                    c(t)
                                },
                                indicatorColor: "primary",
                                textColor: "primary",
                                centered: !0,
                                children: [Object(A.jsx)(be.a, {
                                    className: e.tab,
                                    label: "Step 1"
                                }), Object(A.jsx)(be.a, {
                                    className: e.tab,
                                    label: "Step 2"
                                }), Object(A.jsx)(be.a, {
                                    className: e.tab,
                                    label: "Step 3"
                                }), Object(A.jsx)(be.a, {
                                    className: e.tab,
                                    label: "Step 4"
                                })]
                            }), Object(A.jsx)("div", {
                                className: e.step,
                                children: function () {
                                    switch (i) {
                                        case 0:
                                            return Object(A.jsx)(r, {});
                                        case 1:
                                            return Object(A.jsx)(d, {});
                                        case 2:
                                            return Object(A.jsx)(b, {});
                                        case 3:
                                            return Object(A.jsx)(j, {});
                                        default:
                                            return null
                                    }
                                }()
                            })]
                        })]
                    }), Object(A.jsxs)(s.a, {
                        container: !0,
                        className: e.icon,
                        children: [Object(A.jsx)(s.a, {
                            item: !0,
                            xs: 8,
                            md: 4,
                            className: e.center,
                            children: Object(A.jsx)(B.a, {
                                bottom: !0,
                                children: Object(A.jsx)(o.a, {
                                    underline: "none",
                                    color: "inherit",
                                    target: "_blank",
                                    href: "https://exchange.pancakeswap.finance/#/swap?outputCurrency=0xA574da14b6da9b2afb6920b26e18F1E0b8B28233",
                                    children: Object(A.jsx)("img", {
                                        style: {
                                            width: "100%"
                                        },
                                        src: me,
                                        alt: "Pancakeswap"
                                    })
                                })
                            })
                        }), Object(A.jsx)(s.a, {
                            item: !0,
                            xs: 8,
                            md: 4,
                            className: e.center,
                            children: Object(A.jsx)(B.a, {
                                bottom: !0,
                                children: Object(A.jsx)(o.a, {
                                    underline: "none",
                                    color: "inherit",
                                    target: "_blank",
                                    href: "https://bscscan.com/token/0xA574da14b6da9b2afb6920b26e18F1E0b8B28233",
                                    children: Object(A.jsx)("img", {
                                        style: {
                                            maxHeight: 120,
                                            width: "80%"
                                        },
                                        src: "data:image/png;base64,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",
                                        alt: "Bscscan"
                                    })
                                })
                            })
                        }), Object(A.jsx)(s.a, {
                            item: !0,
                            xs: 12,
                            md: 4,
                            className: e.center,
                            children: Object(A.jsx)(B.a, {
                                bottom: !0,
                                children: Object(A.jsx)(o.a, {
                                    underline: "none",
                                    color: "inherit",
                                    target: "_blank",
                                    href: "https://poocoin.app/tokens/0xa574da14b6da9b2afb6920b26e18f1e0b8b28233",
                                    children: Object(A.jsx)("img", {
                                        style: {
                                            maxHeight: 120
                                        },
                                        src: "data:image/png;base64,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",
                                        alt: "Poocoin"
                                    })
                                })
                            })
                        })]
                    })]
                })
            }
            var xe = Object(c.a)((function (e) {
                    return {
                        container: {
                            justifyContent: "center",
                            paddingTop: 64,
                            paddingBottom: 64
                        },
                        text: {
                            textAlign: "center",
                            fontSize: 64,
                            color: "#3d006f",
                            fontWeight: 500,
                            marginBottom: 64
                        },
                        right: Object(i.a)({
                            display: "flex",
                            flexDirection: "column",
                            paddingLeft: 64,
                            paddingRight: 64
                        }, e.breakpoints.down("xs"), {
                            paddingLeft: 12,
                            paddingRight: 12
                        }),
                        icon: Object(i.a)({
                            display: "flex",
                            width: "100%",
                            justifyContent: "space-between",
                            alignItems: "center",
                            flex: "auto",
                            flexWrap: "wrap"
                        }, e.breakpoints.down("xs"), {
                            justifyContent: "center"
                        }),
                        center: {
                            textAlign: "center",
                            justifyContent: "center"
                        },
                        image: {
                            width: "100%"
                        },
                        title: {
                            color: "#3d006f",
                            fontFamily: "Poppins, sans-serif",
                            fontStyle: "normal",
                            fontWeight: "bold",
                            fontSize: 40,
                            marginBottom: 18
                        },
                        description: {
                            color: "#716c80",
                            fontFamily: "Poppins, sans-serif",
                            fontStyle: "normal",
                            fontWeight: 500,
                            fontSize: 20,
                            marginBottom: 24
                        },
                        tab: {
                            color: "#3d006f"
                        },
                        multiTab: Object(i.a)({}, e.breakpoints.down("xs"), {
                            marginTop: 32
                        }),
                        step: {
                            marginTop: 32
                        }
                    }
                })),
                fe = a.p + "static/media/RoadMap.61335c67.png";
            a(46);

            function ge(e) {
                var t = e.refItem,
                    a = Oe(),
                    i = Object(x.b)().moonMapRef;
                return Object(A.jsxs)(n.a, {
                    ref: t,
                    className: a.container,
                    children: [Object(A.jsx)(B.a, {
                        bottom: !0,
                        children: Object(A.jsx)(l.a, {
                            ref: i,
                            className: a.titleContent,
                            children: "MOONMAP"
                        })
                    }), Object(A.jsx)("img", {
                        className: a.image,
                        src: fe,
                        alt: "RoadMap"
                    })]
                })
            }
            var Oe = Object(c.a)((function (e) {
                    return {
                        container: {
                            justifyContent: "center",
                            alignItems: "center",
                            paddingTop: 72
                        },
                        titleContent: {
                            textAlign: "center",
                            fontSize: 64,
                            color: "#3d006f",
                            fontWeight: 500
                        },
                        image: {
                            width: "100%"
                        }
                    }
                })),
                ue = a(130);

            function Ae(e) {
                return {
                    tooltip: {
                        trigger: "item"
                    },
                    legend: {
                        top: "5%",
                        left: "center"
                    },
                    series: [{
                        name: "Pie Chart",
                        type: "pie",
                        radius: ["40%", "70%"],
                        avoidLabelOverlap: !1,
                        label: {
                            show: !1,
                            position: "center"
                        },
                        emphasis: {
                            label: {
                                show: !1,
                                fontSize: "40",
                                fontWeight: "bold"
                            }
                        },
                        labelLine: {
                            show: !1
                        },
                        data: e,
                        tooltip: {
                            formatter: function (e) {
                                return "".concat(e.marker, " ").concat(e.data.name, ": ").concat(e.data.value, "%")
                            }
                        }
                    }]
                }
            }

            function pe(e) {
                e.refItem;
                var t = we(),
                    a = Object(x.b)().tokenomicsRef,
                    i = z("xs", "down");
                return Object(A.jsxs)(n.a, {
                    ref: a,
                    className: t.container,
                    children: [Object(A.jsx)(B.a, {
                        bottom: !0,
                        children: Object(A.jsx)(l.a, {
                            className: t.titleContent,
                            children: "TOKENOMICS"
                        })
                    }), Object(A.jsxs)("div", {
                        className: t.chartContainer,
                        children: [Object(A.jsx)(B.a, {
                            left: !0,
                            children: Object(A.jsx)(ue.a, {
                                style: {
                                    width: i ? 300 : 500,
                                    height: i ? 300 : 500
                                },
                                option: Ae([{
                                    value: 50,
                                    name: "Initial Burn"
                                }, {
                                    value: 20,
                                    name: "Listing on PancakeSwap"
                                }, {
                                    value: 20,
                                    name: "Token Lock"
                                }, {
                                    value: 5,
                                    name: "Listing other dex"
                                }, {
                                    value: 5,
                                    name: "Charity"
                                }])
                            })
                        }), Object(A.jsx)(B.a, {
                            right: !0,
                            children: Object(A.jsxs)("div", {
                                children: [Object(A.jsx)("div", {
                                    className: t.explain,
                                    children: Object(A.jsx)(l.a, {
                                        className: t.title,
                                        children: "100% Total Supply"
                                    })
                                }), Object(A.jsx)("div", {
                                    className: t.explain,
                                    children: Object(A.jsx)(l.a, {
                                        className: t.title,
                                        children: "50% Initial Burn"
                                    })
                                }), Object(A.jsx)("div", {
                                    className: t.explain,
                                    children: Object(A.jsx)(l.a, {
                                        className: t.title,
                                        children: "20% Initial Listing on PancakeSwap"
                                    })
                                }), Object(A.jsx)("div", {
                                    className: t.explain,
                                    children: Object(A.jsx)(l.a, {
                                        className: t.title,
                                        children: "20% Token Lock"
                                    })
                                }), Object(A.jsx)("div", {
                                    className: t.explain,
                                    children: Object(A.jsx)(l.a, {
                                        className: t.title,
                                        children: "5% Listing other dex"
                                    })
                                }), Object(A.jsx)("div", {
                                    className: t.explain,
                                    children: Object(A.jsx)(l.a, {
                                        className: t.title,
                                        children: "5% Charity"
                                    })
                                })]
                            })
                        })]
                    }), Object(A.jsx)(B.a, {
                        bottom: !0,
                        children: Object(A.jsx)(l.a, {
                            style: {
                                fontSize: 24,
                                fontWeight: "bold",
                                textAlign: "center"
                            },
                            children: "Transaction fee: 5% of transfer amount"
                        })
                    }), Object(A.jsxs)("div", {
                        className: t.chartContainer,
                        children: [Object(A.jsx)(B.a, {
                            left: !0,
                            children: Object(A.jsx)(ue.a, {
                                style: {
                                    width: i ? 300 : 350,
                                    height: i ? 300 : 350
                                },
                                option: Ae([{
                                    value: 2,
                                    name: "Liquidity"
                                }, {
                                    value: 2,
                                    name: "Redistribution"
                                }, {
                                    value: 1,
                                    name: "Burn"
                                }])
                            })
                        }), Object(A.jsx)(B.a, {
                            right: !0,
                            children: Object(A.jsxs)("div", {
                                children: [Object(A.jsxs)("div", {
                                    className: t.explainLittle,
                                    children: [Object(A.jsx)(l.a, {
                                        className: t.titleLittle,
                                        children: "LIQUIDITY"
                                    }), Object(A.jsx)(l.a, {
                                        children: "2% locked in liquidity"
                                    })]
                                }), Object(A.jsxs)("div", {
                                    className: t.explainLittle,
                                    children: [Object(A.jsx)(l.a, {
                                        className: t.titleLittle,
                                        children: "REDISTRIBUTION"
                                    }), Object(A.jsx)(l.a, {
                                        children: "2% redistributed to all holders"
                                    })]
                                }), Object(A.jsxs)("div", {
                                    className: t.explainLittle,
                                    children: [Object(A.jsx)(l.a, {
                                        className: t.titleLittle,
                                        children: "BURN"
                                    }), Object(A.jsx)(l.a, {
                                        children: "1% sent to burn wallet"
                                    })]
                                })]
                            })
                        })]
                    })]
                })
            }
            var we = Object(c.a)((function (e) {
                    return {
                        container: {
                            justifyContent: "center",
                            alignItems: "center",
                            display: "flex",
                            flexDirection: "column",
                            paddingTop: 72,
                            paddingBottom: 72
                        },
                        titleContent: {
                            textAlign: "center",
                            fontSize: 64,
                            color: "#3d006f",
                            fontWeight: 500
                        },
                        chartContainer: Object(i.a)({
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            marginTop: 32,
                            marginBottom: 32,
                            flexDirection: "row"
                        }, e.breakpoints.down("xs"), {
                            flexDirection: "column"
                        }),
                        explain: {
                            margin: 18
                        },
                        title: {
                            fontWeight: "600",
                            fontSize: 24
                        },
                        value: {
                            fontSize: 20
                        },
                        explainLittle: {
                            margin: 16
                        },
                        titleLittle: {
                            fontWeight: "bold",
                            fontSize: 20
                        }
                    }
                })),
                ve = a.p + "static/media/WHO.7250e2fe.png",
                ye = a.p + "static/media/PH.1adaac2d.png",
                Se = a.p + "static/media/logo.fdeac6ae.png";

            function Be(e) {
                e.refItem;
                var t = Ne(),
                    a = Object(x.b)().beneficiariesRef;
                return Object(A.jsxs)(n.a, {
                    ref: a,
                    className: t.container,
                    children: [Object(A.jsx)(B.a, {
                        bottom: !0,
                        children: Object(A.jsx)(l.a, {
                            className: t.titleContent,
                            children: "OUR BENEFICIARIES"
                        })
                    }), Object(A.jsxs)("div", {
                        className: t.beneficiaries,
                        children: [Object(A.jsx)(B.a, {
                            bottom: !0,
                            children: Object(A.jsx)(o.a, {
                                underline: "none",
                                color: "inherit",
                                target: "_blank",
                                href: "https://donate.covid19responsefund.org/",
                                children: Object(A.jsx)("img", {
                                    className: t.image,
                                    src: ve,
                                    alt: "WHO"
                                })
                            })
                        }), Object(A.jsx)(B.a, {
                            bottom: !0,
                            children: Object(A.jsx)(o.a, {
                                underline: "none",
                                color: "inherit",
                                target: "_blank",
                                href: "https://secure.projecthope.org/site/SPageNavigator/2021_04_DPO_r1_ctrl.html?autologin=true&mfc_pref=T&s_subsrc=bt1",
                                children: Object(A.jsx)("img", {
                                    style: {
                                        maxHeight: 120
                                    },
                                    className: t.image,
                                    src: ye,
                                    alt: "PH"
                                })
                            })
                        }), Object(A.jsx)(B.a, {
                            bottom: !0,
                            children: Object(A.jsx)(o.a, {
                                underline: "none",
                                color: "inherit",
                                target: "_blank",
                                href: "https://www.globalgiving.org/projects/coronavirus-relief-fund/",
                                children: Object(A.jsx)("img", {
                                    className: t.image,
                                    src: "data:image/png;base64,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",
                                    alt: "GG"
                                })
                            })
                        })]
                    }), Object(A.jsxs)("div", {
                        className: t.footer,
                        children: [Object(A.jsx)(B.a, {
                            bottom: !0,
                            children: Object(A.jsxs)("div", {
                                className: t.logo,
                                children: [Object(A.jsx)("img", {
                                    src: Se,
                                    alt: "Shiba Fight",
                                    className: t.logoImage
                                }), Object(A.jsx)(l.a, {
                                    className: t.name,
                                    children: "Shiba Fight"
                                })]
                            })
                        }), Object(A.jsx)(B.a, {
                            bottom: !0,
                            children: Object(A.jsx)("div", {
                                className: t.reference,
                                children: $.map((function (e, t) {
                                    return Object(A.jsx)(d.a, {
                                        color: "default",
                                        children: Object(A.jsx)(o.a, {
                                            underline: "none",
                                            color: "inherit",
                                            target: "_blank",
                                            href: e.link || "#",
                                            children: e.icon
                                        })
                                    }, t)
                                }))
                            })
                        }), Object(A.jsx)(B.a, {
                            bottom: !0,
                            children: Object(A.jsx)("div", {
                                className: t.information,
                                children: Object(A.jsx)(l.a, {
                                    style: {
                                        opacity: .9
                                    },
                                    className: t.text,
                                    children: "Copyright \xa9 2021, Shiba Fight"
                                })
                            })
                        })]
                    })]
                })
            }
            var Ne = Object(c.a)((function (e) {
                    return {
                        container: {
                            justifyContent: "center",
                            alignItems: "center",
                            display: "flex",
                            flexDirection: "column",
                            paddingTop: 72
                        },
                        titleContent: {
                            textAlign: "center",
                            fontSize: 64,
                            color: "#3d006f",
                            fontWeight: 500,
                            marginBottom: 32
                        },
                        logo: {
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            marginBottom: 12
                        },
                        name: {
                            fontFamily: "Caveat",
                            fontWeight: "bold",
                            fontSize: 36
                        },
                        beneficiaries: Object(i.a)({
                            display: "flex",
                            width: "100%",
                            justifyContent: "space-between",
                            alignItems: "center",
                            flex: "auto",
                            flexWrap: "wrap"
                        }, e.breakpoints.down("xs"), {
                            justifyContent: "center"
                        }),
                        image: Object(i.a)({
                            maxHeight: 200,
                            margin: 32
                        }, e.breakpoints.down("xs"), {
                            maxWidth: 200,
                            marginBottom: 0
                        }),
                        logoImage: {
                            maxHeight: 46
                        },
                        information: {
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        },
                        text: {
                            margin: 4,
                            fontSize: 16,
                            fontStyle: "italic"
                        },
                        back: {
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "column",
                            margin: 24,
                            "&:hover": {
                                cursor: "pointer",
                                "& $button": {
                                    color: e.palette.text.hover,
                                    backgroundColor: "rgb(0, 0, 0, 0)"
                                },
                                "& $icon": {
                                    fill: e.palette.text.hover
                                }
                            }
                        },
                        button: {
                            textTransform: "uppercase"
                        },
                        icon: {
                            fill: e.palette.text.primary
                        },
                        footer: {
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            marginTop: 64
                        },
                        reference: {
                            borderRadius: 50
                        }
                    }
                })),
                ke = a.p + "static/media/bg.794da285.png";

            function We() {
                var e = Ce();
                return Object(A.jsxs)(n.a, {
                    maxWidth: !1,
                    className: e.container,
                    children: [Object(A.jsx)(_, {}), Object(A.jsx)(ne, {}), Object(A.jsx)(le, {}), Object(A.jsx)(he, {}), Object(A.jsx)(pe, {}), Object(A.jsx)(ge, {}), Object(A.jsx)(Be, {})]
                })
            }
            var Ce = Object(c.a)((function (e) {
                return {
                    container: Object(i.a)({
                        paddingLeft: 64,
                        paddingRight: 64,
                        backgroundRepeat: "no-repeat",
                        backgroundImage: 'url("'.concat(ke, '")')
                    }, e.breakpoints.down("xs"), {
                        paddingLeft: 12,
                        paddingRight: 12
                    })
                }
            }))
        }
    }
]);
//# sourceMappingURL=4.5675a140.chunk.js.map