!function (e) {
    function t(t) {
        for (var a, r, o = t[0], l = t[1], p = t[2], d = 0, y = []; d < o.length; d++) r = o[d], Object.prototype.hasOwnProperty.call(i, r) && i[r] && y.push(i[r][0]), i[r] = 0;
        for (a in l) Object.prototype.hasOwnProperty.call(l, a) && (e[a] = l[a]);
        for (u && u(t); y.length;) y.shift()();
        return s.push.apply(s, p || []), n()
    }

    function n() {
        for (var e, t = 0; t < s.length; t++) {
            for (var n = s[t], a = !0, o = 1; o < n.length; o++) {
                var l = n[o];
                0 !== i[l] && (a = !1)
            }
            a && (s.splice(t--, 1), e = r(r.s = n[0]))
        }
        return e
    }

    var a = {}, i = {app: 0}, s = [];

    function r(t) {
        if (a[t]) return a[t].exports;
        var n = a[t] = {i: t, l: !1, exports: {}};
        return e[t].call(n.exports, n, n.exports, r), n.l = !0, n.exports
    }

    r.e = function (e) {
        var t = [], n = i[e];
        if (0 !== n) if (n) t.push(n[2]); else {
            var a = new Promise((function (t, a) {
                n = i[e] = [t, a]
            }));
            t.push(n[2] = a);
            var s, o = document.createElement("script");
            o.charset = "utf-8", o.timeout = 120, r.nc && o.setAttribute("nonce", r.nc), o.src = function (e) {
                return r.p + "js/" + ({}[e] || e) + "159925.js"
            }(e);
            var l = new Error;
            s = function (t) {
                o.onerror = o.onload = null, clearTimeout(p);
                var n = i[e];
                if (0 !== n) {
                    if (n) {
                        var a = t && ("load" === t.type ? "missing" : t.type), s = t && t.target && t.target.src;
                        l.message = "Loading chunk " + e + " failed.\n(" + a + ": " + s + ")", l.name = "ChunkLoadError", l.type = a, l.request = s, n[1](l)
                    }
                    i[e] = void 0
                }
            };
            var p = setTimeout((function () {
                s({type: "timeout", target: o})
            }), 12e4);
            o.onerror = o.onload = s, document.head.appendChild(o)
        }
        return Promise.all(t)
    }, r.m = e, r.c = a, r.d = function (e, t, n) {
        r.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: n})
    }, r.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, r.t = function (e, t) {
        if (1 & t && (e = r(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (r.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var a in e) r.d(n, a, function (t) {
            return e[t]
        }.bind(null, a));
        return n
    }, r.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return r.d(t, "a", t), t
    }, r.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, r.p = "", r.oe = function (e) {
        throw e
    };
    var o = window.webpackJsonp = window.webpackJsonp || [], l = o.push.bind(o);
    o.push = t, o = o.slice();
    for (var p = 0; p < o.length; p++) t(o[p]);
    var u = l;
    s.push([0, "chunk-vendors"]), n()
}({
    0: function (e, t, n) {
        e.exports = n("56d7")
    }, "0265": function (e, t, n) {
        var a = n("3cc5");
        a.__esModule && (a = a.default), "string" == typeof a && (a = [[e.i, a, ""]]), a.locals && (e.exports = a.locals), (0, n("499e").default)("3cf1dffb", a, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    }, "043a": function (e, t, n) {
        var a = n("264b");
        a.__esModule && (a = a.default), "string" == typeof a && (a = [[e.i, a, ""]]), a.locals && (e.exports = a.locals), (0, n("499e").default)("e49076d8", a, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    }, "0554": function (e, t, n) {
        var a = n("96a4");
        a.__esModule && (a = a.default), "string" == typeof a && (a = [[e.i, a, ""]]), a.locals && (e.exports = a.locals), (0, n("499e").default)("17611838", a, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    }, "0aaa": function (e) {
        e.exports = JSON.parse('[{"inputs":[{"internalType":"contract ComptrollerInterface","name":"comptroller_","type":"address"},{"internalType":"contract InterestRateModel","name":"interestRateModel_","type":"address"},{"internalType":"uint256","name":"initialExchangeRateMantissa_","type":"uint256"},{"internalType":"string","name":"name_","type":"string"},{"internalType":"string","name":"symbol_","type":"string"},{"internalType":"uint8","name":"decimals_","type":"uint8"},{"internalType":"address payable","name":"admin_","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"cashPrior","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"interestAccumulated","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"borrowIndex","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalBorrows","type":"uint256"}],"name":"AccrueInterest","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"borrower","type":"address"},{"indexed":false,"internalType":"uint256","name":"borrowAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"accountBorrows","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalBorrows","type":"uint256"}],"name":"Borrow","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"error","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"info","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"detail","type":"uint256"}],"name":"Failure","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"liquidator","type":"address"},{"indexed":false,"internalType":"address","name":"borrower","type":"address"},{"indexed":false,"internalType":"uint256","name":"repayAmount","type":"uint256"},{"indexed":false,"internalType":"address","name":"cTokenCollateral","type":"address"},{"indexed":false,"internalType":"uint256","name":"seizeTokens","type":"uint256"}],"name":"LiquidateBorrow","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"minter","type":"address"},{"indexed":false,"internalType":"uint256","name":"mintAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"mintTokens","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"oldAdmin","type":"address"},{"indexed":false,"internalType":"address","name":"newAdmin","type":"address"}],"name":"NewAdmin","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"contract ComptrollerInterface","name":"oldComptroller","type":"address"},{"indexed":false,"internalType":"contract ComptrollerInterface","name":"newComptroller","type":"address"}],"name":"NewComptroller","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"contract InterestRateModel","name":"oldInterestRateModel","type":"address"},{"indexed":false,"internalType":"contract InterestRateModel","name":"newInterestRateModel","type":"address"}],"name":"NewMarketInterestRateModel","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"oldPendingAdmin","type":"address"},{"indexed":false,"internalType":"address","name":"newPendingAdmin","type":"address"}],"name":"NewPendingAdmin","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"oldReserveFactorMantissa","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newReserveFactorMantissa","type":"uint256"}],"name":"NewReserveFactor","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"redeemer","type":"address"},{"indexed":false,"internalType":"uint256","name":"redeemAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"redeemTokens","type":"uint256"}],"name":"Redeem","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"payer","type":"address"},{"indexed":false,"internalType":"address","name":"borrower","type":"address"},{"indexed":false,"internalType":"uint256","name":"repayAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"accountBorrows","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalBorrows","type":"uint256"}],"name":"RepayBorrow","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"benefactor","type":"address"},{"indexed":false,"internalType":"uint256","name":"addAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newTotalReserves","type":"uint256"}],"name":"ReservesAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"admin","type":"address"},{"indexed":false,"internalType":"uint256","name":"reduceAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newTotalReserves","type":"uint256"}],"name":"ReservesReduced","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Transfer","type":"event"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"constant":false,"inputs":[],"name":"_acceptAdmin","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"reduceAmount","type":"uint256"}],"name":"_reduceReserves","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"contract ComptrollerInterface","name":"newComptroller","type":"address"}],"name":"_setComptroller","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"contract InterestRateModel","name":"newInterestRateModel","type":"address"}],"name":"_setInterestRateModel","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address payable","name":"newPendingAdmin","type":"address"}],"name":"_setPendingAdmin","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"newReserveFactorMantissa","type":"uint256"}],"name":"_setReserveFactor","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"accrualBlockNumber","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"accrueInterest","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"admin","outputs":[{"internalType":"address payable","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOfUnderlying","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"borrowAmount","type":"uint256"}],"name":"borrow","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"borrowBalanceCurrent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"borrowBalanceStored","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"borrowIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"borrowRatePerBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"comptroller","outputs":[{"internalType":"contract ComptrollerInterface","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"exchangeRateCurrent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"exchangeRateStored","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getAccountSnapshot","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getCash","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"contract ComptrollerInterface","name":"comptroller_","type":"address"},{"internalType":"contract InterestRateModel","name":"interestRateModel_","type":"address"},{"internalType":"uint256","name":"initialExchangeRateMantissa_","type":"uint256"},{"internalType":"string","name":"name_","type":"string"},{"internalType":"string","name":"symbol_","type":"string"},{"internalType":"uint8","name":"decimals_","type":"uint8"}],"name":"initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"interestRateModel","outputs":[{"internalType":"contract InterestRateModel","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isCToken","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"borrower","type":"address"},{"internalType":"contract CToken","name":"cTokenCollateral","type":"address"}],"name":"liquidateBorrow","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[],"name":"mint","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"pendingAdmin","outputs":[{"internalType":"address payable","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"redeemTokens","type":"uint256"}],"name":"redeem","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"redeemAmount","type":"uint256"}],"name":"redeemUnderlying","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"repayBorrow","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"borrower","type":"address"}],"name":"repayBorrowBehalf","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"reserveFactorMantissa","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"liquidator","type":"address"},{"internalType":"address","name":"borrower","type":"address"},{"internalType":"uint256","name":"seizeTokens","type":"uint256"}],"name":"seize","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"supplyRatePerBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalBorrows","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"totalBorrowsCurrent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalReserves","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"src","type":"address"},{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}]')
    }, 1: function (e, t) {
    }, 10: function (e, t) {
    }, "10b8": function (e, t, n) {
        var a = n("739f");
        a.__esModule && (a = a.default), "string" == typeof a && (a = [[e.i, a, ""]]), a.locals && (e.exports = a.locals), (0, n("499e").default)("120ff1a8", a, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    }, "10d9": function (e, t, n) {
        (t = n("24fb")(!1)).push([e.i, ".lang_wraper[data-v-23f54180]{z-index:10000;position:absolute;text-align:left;width:100%;top:110%;left:0;border-radius:5px;transform-origin:center top;color:var(--black);background-color:var(--white);cursor:pointer;overflow-y:auto;height:0;transition:height .2s linear}.fix_lang[data-v-23f54180]{position:absolute;top:0}.select_lang_up[data-v-23f54180]{position:absolute;bottom:100%;left:0;width:100%;text-align:left;border-radius:.5rem;transform-origin:center top;color:var(--black);background-color:var(--white);cursor:pointer;max-width:130px;overflow-y:auto;height:0;transition:height .2s linear}.lang_wraper_effect[data-v-23f54180]{height:160px;box-shadow:0 0 1px 1px var(--light-grey)}li[data-v-23f54180]{font-weight:600}li[data-v-23f54180]:hover{font-weight:700;color:var(--grey)}.lang_wraper[data-v-23f54180]::-webkit-scrollbar,.select_lang_up[data-v-23f54180]::-webkit-scrollbar{width:0;height:0;margin:0 auto}.lang_wraper[data-v-23f54180]::-webkit-scrollbar-thumb,.lang_wraper[data-v-23f54180]::-webkit-scrollbar-track,.select_lang_up[data-v-23f54180]::-webkit-scrollbar-thumb,.select_lang_up[data-v-23f54180]::-webkit-scrollbar-track{background-color:var(--grey-dark);box-shadow:inset 0 0 5px rgba(0,0,0,.2)}.lang_wraper[data-v-23f54180]::-webkit-scrollbar-button,.select_lang_up[data-v-23f54180]::-webkit-scrollbar-button{height:0;background-color:var(--grey-dark)}.lang_wraper[data-v-23f54180]::-o-scrollbar,.select_lang_up[data-v-23f54180]::-o-scrollbar{width:0;height:0;margin:0 auto}.lang_wraper[data-v-23f54180]::-o-scrollbar-thumb,.select_lang_up[data-v-23f54180]::-o-scrollbar-thumb{background-color:#1b5485;box-shadow:inset 0 0 5px rgba(0,0,0,.2)}.lang_wraper[data-v-23f54180]::-o-scrollbar-track,.select_lang_up[data-v-23f54180]::-o-scrollbar-track{box-shadow:inset 0 0 5px rgba(0,0,0,.2);background-color:var(--grey-dark)}.lang_wraper[data-v-23f54180]::-o-scrollbar-button,.select_lang_up[data-v-23f54180]::-o-scrollbar-button{height:0;background-color:var(--grey-dark)}.lang_wraper[data-v-23f54180]::-moz-scrollbar,.select_lang_up[data-v-23f54180]::-moz-scrollbar{width:0;height:0;margin:0 auto}.lang_wraper[data-v-23f54180]::-moz-scrollbar-thumb,.select_lang_up[data-v-23f54180]::-moz-scrollbar-thumb{background-color:#1b5485;box-shadow:inset 0 0 5px rgba(0,0,0,.2)}.lang_wraper[data-v-23f54180]::-moz-scrollbar-track,.select_lang_up[data-v-23f54180]::-moz-scrollbar-track{box-shadow:inset 0 0 5px rgba(0,0,0,.2);background-color:var(--grey-dark)}.lang_wraper[data-v-23f54180]::-moz-scrollbar-button,.select_lang_up[data-v-23f54180]::-moz-scrollbar-button{height:0;background-color:var(--grey-dark)}.lang_wraper[data-v-23f54180]::-ms-scrollbar,.select_lang_up[data-v-23f54180]::-ms-scrollbar{width:0;height:0;margin:0 auto;border-radius:10px}.lang_wraper[data-v-23f54180]::-ms-scrollbar-thumb,.select_lang_up[data-v-23f54180]::-ms-scrollbar-thumb{background-color:#1b5485;box-shadow:inset 0 0 5px rgba(0,0,0,.2)}.lang_wraper[data-v-23f54180]::-ms-scrollbar-track,.select_lang_up[data-v-23f54180]::-ms-scrollbar-track{box-shadow:inset 0 0 5px rgba(0,0,0,.2);background-color:var(--grey-dark)}.lang_wraper[data-v-23f54180]::-ms-scrollbar-button,.select_lang_up[data-v-23f54180]::-ms-scrollbar-button{height:0;background-color:var(--grey-dark)}", ""]), e.exports = t
    }, 11: function (e, t) {
    }, 12: function (e, t) {
    }, "12cb": function (e, t, n) {
        "use strict";
        var a = n("2b0e"), i = n("a925");
        a.default.use(i.a), t.a = new i.a({
            locale: sessionStorage.locale || "English", messages: {
                English: {
                    $P: "$P",
                    welcomeV2: "Yield Farming 2.0",
                    welcomeText: "Lowering risk through diversified farming strategies",
                    launchApp: "Claim & Swap",
                    whitePaper: "White Paper",
                    audit: "Audit by Dpanquan.com",
                    copyright: "2021 Copyright $P.",
                    reserved: "All rights reserved!",
                    dashboard: "Dashboard",
                    vaults: "Vaults",
                    earn: "Earn",
                    lending: "Lending",
                    statistics: "Statistics",
                    governance: "Governance",
                    wiki: "Wiki",
                    faqs: "FAQs",
                    settings: "Settings",
                    nft: "NFT",
                    brige: "Bridge",
                    connectWallet: "Connect wallet",
                    disconnect: "Disconnect wallet",
                    search: "Search...",
                    earnings: "Your Earnings",
                    pendingHarvest: "Pending harvest",
                    harvest: "Harvest",
                    tvlText: "Total Value Locked",
                    browserview: "Browser view",
                    availableVaults: "Available Vaults",
                    sortBy: "Sort by",
                    hideBalances: "Hide zero balances",
                    pairAssets: "Pair Asset",
                    get: "Get",
                    back: "Back",
                    totalSupply: "Total supply",
                    rewards: "Rewards",
                    yfoPrice: "$P current price",
                    totalBorrowed: "Total borrowed",
                    circulation: "Circulation",
                    marketCap: "Market cap",
                    provideLiquidity: "Provide Liquidity",
                    select: "Select",
                    collateral: "Collateral",
                    pledge: "Pledge",
                    exitPledge: "Exit pledge",
                    redeem: "Redeem All",
                    retrieve: "Retrieve",
                    repay: "Repay",
                    repayAll: "RepayAll",
                    supply: "Supply",
                    balance: "Balance",
                    borrow: "Borrow",
                    limit: "Limit",
                    trading: "Trading",
                    approve: "Approve",
                    claim: "Claim",
                    unable: "Unable",
                    withdraw: "Withdraw",
                    withdrawAll: "Withdraw All",
                    exit: "Exit",
                    stake: "Stake",
                    deposit: "Deposit",
                    depositAll: "Deposit All",
                    deposited: "Deposited",
                    borrowed: "Borrowed",
                    available: "Available",
                    approveFirst: "Please approve before deposit",
                    loading: "Loading...",
                    netTip: "Ethereum mainnet, please switch in your wallet",
                    netDelayTip: "Ethereum mainnet is not yet open",
                    feeTip: "Withdrawal will charge a 0.3% handling fee of the profit, no damage to the principal",
                    note: "Note",
                    assets: "Assets",
                    apyCalculations: "APY Calculations",
                    farmApr: "Farm APR",
                    lpContract: "LP contract",
                    farmContract: "Farm contract",
                    vaultContract: "Vault contract",
                    myAddress: "My address",
                    totalDepositIn: "Total deposited",
                    currentEarning: "Currently earning",
                    all: "All",
                    stablecoins: "Stablecoins",
                    others: "Others",
                    market: "Market",
                    depositMarket: "Deposit Market",
                    depositApy: "Deposit APY",
                    borrowMarket: "Borrow Market",
                    borrowApy: "Borrow APY",
                    leftBorrow: "Remaining loanable",
                    borrowAvailiable: "Borrow availiable",
                    priceSource: "Price source",
                    yourDeposit: "Your deposit",
                    yourLoan: "Your loan",
                    usedRatio: "Used ratio",
                    enterSupplyAmount: "Enter the deposit amount",
                    enterRedeemAmount: "Enter the amount (principal)",
                    enterRepayAmount: "Enter the repayment amount (principal)",
                    enterBorrowAmount: "Enter the loan amount(max 80%)",
                    poolVolume: "Pool Balance",
                    marketDetails: "Market details",
                    depositAmount: "Deposit amount",
                    borrowAmount: "Borrow amount",
                    depositLimit: "Deposit limit",
                    borrowLimit: "Borrow limit",
                    reserveRatio: "Reserve ratio",
                    exchangeRate: "Exchange rate",
                    liquidationFine: "Liquidation fine",
                    maxPledgeRate: "Maximum pledge rate",
                    fundUtilization: "Fund utilization",
                    marketLoanable: "Market surplus loanable",
                    totalBorrow: "Total borrow",
                    totalDeposit: "Total deposit",
                    operation: "Operation",
                    staked: "Staked",
                    transaction: "Transaction",
                    pending: "Pending...",
                    confirm: "Confirm",
                    confirming: "Confirming",
                    confirmed: "Confirmed",
                    cancel: "Cancel",
                    canceled: "Canceled",
                    success: "Transaction succeeded",
                    failed: "Transaction failed",
                    txFailed: "Trasancton Failed",
                    copied: "Copied",
                    computePower: "Real-time computing power and Token data parameters",
                    aboutWiki: "YFO Information Introduction",
                    aboutDex: "The $P vision is to build several decentralized financial applications (Defi - Apps) and then develop these products into full fledged projects thereby  increasing the value of The $P ecosystem. With the uproar of several decentralized financial (Defi) products not having real use cases and simple methods of use, product usage has been difficult for Defi users especially because it requires vast understanding of the Ethereum blockchain. Another common problem is the false value which many Defi projects propose by building simple swap websites and then halting further development. This makes it seem as though the Defi swap is all there is to offer but this is not so. The $P project and its decentralized team from different countries, promises to create a sustainable ecosystem by developing and building several Defi products around its platform and guarantees the ultimate true value of what a Defi project should be. $P is a community-driven blockchain project which aims to build severally Defi-applications on top of its platform with creative and disruptive blockchain Defi ideas, hence becoming the first cutting-edge Defi project worth emulating.\n  ",
                    aboutApp: "The $P envisions an ecosystem of several Defi applications (Defi DApps) built on Ethereum for usage by both The $P team of The $P project and the decentralized community of $P product users. With that said, $P Finance is a community driven Defi-project, orchestrated to build decentralized products, with the aim of producing real Defi values to improve The $P ecosystem for the community and its users.",
                    aboutBasis: "$P is dedicated to systematically produce new Defi products with the team acting as an ad-hoc enabled squad who will help develop, market and launch these Defi products to help grow its biosphere while simultaneously delivering desirable gains to the community, project and users.",
                    aboutMechanism: "$P can also be described as a decentralized venture capital (DVC) which empowers a decentralized interest free financial ecosystem by building Defi products invested in by its community with the aim of distributing revenue as profit shares (rewards) to stakeholders.",
                    aboutCommunity: "The $P Ecosystem will be a home to a variety of unique decentralized finance products. The $P products will be linked to its token, the YFONE Token, in the quest to re-create the true meaning of decentralized finance.",
                    aboutDefi: "$P products will be linked to its token, the YFONE Token, in the quest to re-create the true meaning of decentralized finance.\nThe YFONE token’s major use case will be as the only governance token for each product which will give holders a claim over the revenue generated by those products.\nIt will be a platform for staking YFONE tokens while The $P team builds the marketplace and subsequently, the holders benefit immensely just from holding the token. Imagine more than 1000 decentralized applications linked to one ecosystem by forking with partners and by Building from scratch it’s all integrated with YFO Token. This ecosystem will be extremely large and continually grow It is a completely decentralized system, and it is constantly growing, that is the true meaning of Defi.\n  ",
                    aboutVaults: "The machine gun pool determines the most profitable coin based on the hash rate, mining difficulty, and the current price of the trading platform. It is different from ordinary mining pools that can only mine one coin. After one coin has been mined for a long time, the difficulty will increase, and the mining pool will switch to another coin. The YFO platform will add mining pools in real time according to the mining pools that appear in the market, so as to obtain the highest profit. And it is mainly through the automatic function of the contract to reinvest every half hour to obtain the highest profit.",
                    aboutLending: "In the DeFi world, the decentralized lending system is an extremely important track and the cornerstone system of the entire DeFi system. It can simulate the financial system in the real world, understand the financial needs of different users, and provide users with mutual financing. The platform; it can support the lending of all encrypted assets that meet the homogenization token standard without marginal cost, and can automatically calculate and adjust the market’s lending rate according to market supply and demand. Therefore, the YFO ecosystem is also doing important functions in the V2 version. The platform self-care tokens in lending are the current YFO and OBS.",
                    aboutText: "The $P vision is to build several decentralized financial applications (Defi - Apps) and then develop these products into full fledged projects thereby increasing the value of The $P ecosystem. With the uproar of several decentralized financial (Defi) products not having real use cases and simple methods of use, product usage has been difficult for Defi users especially because it requires vast understanding of the Ethereum blockchain. Another common problem is the false value which many Defi projects propose by building simple swap websites and then halting further development. This makes it seem as though the Defi swap is all there is to offer but this is not so. The $P project and its decentralized team from different countries, promises to create a sustainable ecosystem by developing and building several Defi products around its platform and guarantees the ultimate true value of what a Defi project should be. $P is a community-driven blockchain project which aims to build severally Defi-applications on top of its platform with creative and disruptive blockchain Defi ideas, hence becoming the first cutting-edge Defi project worth emulating",
                    aboutECO: "The $P envisions an ecosystem of several Defi applications (Defi DApps) built on Ethereum for usage by both The $P team of The $P project and the decentralized community of $P product users. With that said, $P Finance is a community driven Defi-project, orchestrated to build decentralized products, with the aim of producing real Defi values to improve The $P ecosystem for the community and its users. $P is dedicated to systematically produce new Defi products with the team acting as an ad-hoc enabled squad who will help develop, market and launch these Defi products to help grow its biosphere while simultaneously delivering desirable gains to the community, project and users. $P can also be described as a decentralized venture capital (DVC) which empowers a decentralized interest free financial ecosystem by building Defi product",
                    overview: "Overview",
                    w1: "What are Vaults? ",
                    w2: "YFO decentralized lending? ",
                    w3: "What kind of skills do I need to join your team to contribute to this great project? ",
                    w4: "What type of cryptocurrency does $P currently accept? ",
                    w5: "How can I invest in $P and make a profit? ",
                    w6: "Why the V2 version can only use the Binance ecological chain? ",
                    w7: "What does $P stand for? ",
                    r1: 'Machine gun pool is the process of mining different currencies with the same algorithm, according to the level of real-time mining revenue, automatically switching the computing power to a higher-profit currency for mining, and its value is created for users Higher returns than single currency mining. The reason why it has the name of "machine gun pool" is that this kind of operation is like firing a machine gun, constantly switching. ',
                    r11: "According to the characteristics of the machine gun pool, the operation of the machine gun pool is to concentrate the computing power in a mining pool. It does not specify which coin to mine, but directly searches for several projects in the same mining algorithm. Which project the computing power is switched to for mining, if the income of this project drops, it will be switched to another project to obtain the best income in the end. ",
                    r12: "The advantage of the machine gun pool maximizes the user's income: income is the focus of every investor's attention. The reason why most people choose to invest in DeFi projects is that their yields are relatively high, and the DeFi machine gun pool can help us maximize the mining revenue. This is because the characteristic of the DeFi machine gun pool is to switch funds to higher-yield DeFi projects for liquid mining based on the level of real-time mining income, providing our investors with higher mining income.",
                    r13: "The DeFi machine gun pool of the YFO platform can not only increase our income through real-time switching, but also introduce a half-hour compound interest rule to effectively use funds to maximize our income. (Hourly compound interest is calculated at half an hour. Our investment principal and interest for every half hour will be included in the investment principal of the next hour, and we can enjoy the compound interest every half hour.)",
                    r14: "Selected projects: There are a dazzling array of liquid mining projects available in the market, and the most difficult part for our users is to choose the project. It takes a lot of time and energy to choose a safe, reliable, and highly profitable project. In addition, due to the rapid changes in the market, it is easy to happen that when we have studied a new project and are ready to start, the funds have been transferred to the next new project with higher returns, which will cause a certain lag. ",
                    r15: "The advantage of the machine gun pool is that it can provide a function of asset screening and configuration. Each project will evaluate its safety and benefits to a certain extent. The YFO platform has professionals to conduct research on various projects, select high-yield DeFi projects, and adjust positions in real time to strive for the maximum profit possible for us. ",
                    r16: "Because of the constant calling of the contract, the platform will charge a fee of 0.3% of the revenue. The purpose is that each step in the DeFi mining requires 1-2 contract calls, and the fee is now a few dollars to dozens The dollar varies, and the entire contract is called once every half an hour. In addition to the GAS fee, the balance will be used to repurchase YFO and OBS Token from time to time. ",
                    r2: "By providing deposit certificate tokens, the same asset is shuttled and reused in different DeFi protocols, thereby improving the efficiency of the use of funds in the financial market several times; it can also be flexible with other DeFi protocols Combination to realize the automated operation of multi-layer, multi-level, complex, and nested financial transactions. ",
                    r21: "At present, all kinds of lending platforms in DeFi are basically in the mode of mortgage loans, and they are more inclined to the pawnshop model, turning various digital currencies into fixed-value goods, and goods with a mortgage value of 100 get a price of 75 Liquid currency, the act of obtaining currency through currency collateral seems very stupid, but the high mortgage interest rate and the huge return rate in the early stage of the DeFi market attract higher market funds. ",
                    r22: "DeFi currently resolves mortgages through swap and exchanges, and resolves leverage through the margin system, and finally achieves an operation similar to credit derivatives. Take Bitcoin and Ethereum as examples, on the Binance Chain. For example, if you want to pledge Bitcoin in exchange for Ethereum, you can: Lock Bitcoin in a specific address. At this time, a BTC representing this Bitcoin token will be generated on Binance Chain, and then you can use it on Binance Chain The smart contract mortgages this BTC and generates the corresponding Token; then buys a certain amount of ETH with the Token, and then releases the collateral BTC corresponding to these ETH, and the transaction ends. The whole process is done by smart contracts without human participation. And if you don’t pay it back after maturity, then your collateralized Bitcoin will be gone. The smart contract will be executed when it expires, and the bitcoin that I have pledged will be subject to default processing. This can achieve equal mortgages, but the charm of Defi lies in growth, so over-mortgage is required. In other words, I hope to be able to mortgage 1 Bitcoin, temporarily borrow 2 or even 10 Bitcoins for speculation. ",
                    r3: "$P is a global team, everyone can join The $P community, in the community we hope more\n  People join The $P family. When you hold a YFO Token, even if you join our team, of course\n  We need more people to join, so we can serve as community operators, marketing personnel, technical feedback personnel, etc.\n  Role, if you have a certain ability, please contact our community manager. ",
                    r4: "Currently accepting mainstream currencies ETH, BNB, USDT, etc. and YFO, OBS Tokens",
                    r5: "The platform provides machine gun pools (vaults), lending, single currency pools and other methods, requiring users to follow the Token required on the website by themselves\n  Kind will get a certain profit. ",
                    r6: "The machine gun pool is reinvested every 30 minutes, and the gas fee is too high. If the pledge deposit is not enough, the user's funds will be lost. Therefore, we only launched the BSC ecological chain in the first phase. The Ethereum version requires the BSC version of the YFO-V2 version of the TVL version to be greater than 5 million U.S. dollars before the Ethereum version will be opened. When the reinvestment at a fixed time, when the amount reaches a certain amount, the user can be guaranteed to be on the platform The amount of reinvestment will get the most profit. Therefore, in the first phase, we only open the product area of the Binance ecological chain (of course, it has been developed and is always waiting for updates. The code of Ethereum has been updated on Github).",
                    r7: "$P’s vision is to build several decentralized financial applications (Defi-Apps) and then develop and transform these products into\n  Mature projects increase the value of The $P ecosystem. . The $P project and its decentralized team come from different\n  Countries, committed to creating a sustainable Defi ecosystem product through the development and construction of multiple\n  And guarantee the ultimate true value of what the Defi project should be. $P is a community-driven blockchain project designed to\n  Build multiple Defi applications on the basis of the creative and disruptive blockchain Defi platform idea, thus becoming\n  It is the first frontier Defi project. ",
                    countactUs: "Countact us",
                    cTitle: "$P Group is a leading company in the digital economy. Committed to the core technology breakthroughs in the blockchain field and the integration of blockchain technology and industry, focusing on the upstream and downstream of the blockchain DEFI industry, development includes industrial blockchain, digital asset transactions, digital asset secure wallets, digital economic research, and decentralization Huahua and other businesses form a global digital economy industrial ecosystem.\n\n$P adheres to the practice of decentralized community services, providing safe and reliable value network services for tens of millions of users in hundreds of countries and regions.",
                    officialListing: "Official Listing",
                    myWallet: "My wallet",
                    security: "Security",
                    securityPolicy: "Security Policy",
                    policy1: "View how to securely report security vulnerabilities for this repository",
                    securityAdvisories: "Security advisories",
                    policy2: "View security advisories for this repository",
                    scope: "Scope",
                    policy3: "The scope of the Bug Bounty program spans smart contracts\n  utilized in the YFO ecosystem – the Solidity or\n  smart contracts in the contracts folder of the\n  master branch of the YFO-protocol repo, including\n  historical deployments that still see active use on\n  Ethereum Mainnet associated with YFI, and excluding any\n  contracts used in a test-only capacity (including\n  test-only deployments).",
                    policy4: "Note: Other contracts, outside of the ones mentioned\n  above, might be considered on a case by case basis,\n  please, reach out to the YFO development team for\n  clarification.",
                    stepVerification: "2-Step Verification",
                    authentication: "Enable 2-factor authentication via Google Authenticator, Authy or any 2FA App Scan QR code or enter authenticator key",
                    authenticaorKey: "Authenticaor Key",
                    generate: "GENERATE",
                    buy: "Buy",
                    indicator: "indicator",
                    tvl: "TVL",
                    apy: "APY",
                    unlocked: "Unlocked",
                    lock: "Lock for",
                    days: "Days",
                    more: "More",
                    daily: "Daily Yield",
                    monthly: "Month Yield",
                    yearly: "Yearly Yield",
                    shareV3: "Sahre V3 link",
                    validNumber: "Invalid Number",
                    insufficient: "Insufficient Balance",
                    stakeAmount: "Staked Amount",
                    max: "Max",
                    swap: "Swap",
                    price: "Price",
                    legalDisclaimer: "Legal Disclaimer",
                    legalText: 'The information provided in this material does not constitute investment advice, financial advice, trading advice, or any other sort of advice. You should not treat any of the material’s content as such. This material is for informational purposes only and is not (i) an offer, or solicitation of an offer, to invest in, or to buy or sell, any interests or shares, or to participate in any investment or trading strategy, (ii) intended to provide accounting, legal, or tax advice, or investment recommendations, or (iii) an official statement of YFO Token. No representation or warranty is made, expressed or implied, with respect to the accuracy or completeness of the information or to the future performance of any digital asset, financial instrument, or other market or economic measure. \n  \nThe YFO Token team does not recommend that any cryptocurrency should be bought, sold, or held by you. Do conduct your due diligence and consult your financial advisor before making any investment decisions. \n  \nBy purchasing YFO, you agree that you are not purchasing a security or investment, and you agree to hold the team harmless and not liable for any losses or taxes you may incur. You also agree that the team is presenting the token "as is" and is not required to provide any support or services. You should have no expectation of any form from YFO Token and its team. \n  \nAlthough YFO is a community-driven decentralized finance (DeFi) token for social networking and not a registered digital currency, the team strongly recommends that citizens in areas with government bans on cryptocurrencies do not purchase it because the team cannot ensure compliance with established regulations within certain territories. Always make sure that you comply with your local laws and regulations before you make any purchase.\n  \nThe $P team are decentralized individuals from different parts of the world building decentralized applications that can benefit the world and also improve its ecosystem.\n  \nWith so many Direct messages from individuals, companies and able bodies asking The $P Team on what to invest on and on what they shouldn\'t invest on, we are open and transparent and advice our community on the high risk of Defi assets  but the YFO projects will build quality platform.\n  \nDue to More people asking about financial advices from the team, the YFO team does not provide financial guidance or advice to any individual, and by investing in DeFi asset you can risk losing your investments. \n  \nAlways do your own research when investing.'
                }, "中文": {
                    yfione: "$P",
                    welcomeV2: "YFO农场 2.0",
                    welcomeText: "低风险、多样化的挖矿策略",
                    launchApp: "Claim & Swap",
                    whitePaper: "白皮书",
                    audit: "Dpanquan.com 审计",
                    copyright: "2021 版权所有 $P.",
                    reserved: "保留版权！",
                    dashboard: "面板",
                    vaults: "机枪池",
                    earn: "挖矿",
                    lending: "借贷",
                    statistics: "统计",
                    governance: "治理",
                    wiki: "维基",
                    faqs: "常见问题",
                    settings: "设置",
                    connectWallet: "连接钱包",
                    disconnect: "断开连接",
                    search: "搜索...",
                    earnings: "你的收益",
                    pendingHarvest: "待获取收益",
                    harvest: "收割",
                    tvlText: "总锁仓",
                    yfoPrice: "当前YFO价格",
                    totalBorrowed: "总借款",
                    circulation: "流通量",
                    marketCap: "市值",
                    provideLiquidity: "提供流动性",
                    browserview: "查看",
                    availableVaults: "可用机枪池",
                    sortBy: "排序",
                    hideBalances: "隐藏0余额项",
                    pairAssets: "交易对",
                    get: "获取",
                    back: "返回",
                    select: "选择",
                    collateral: "抵押物",
                    pledge: "抵押",
                    exitPledge: "退出抵押",
                    redeem: "赎回(本金+利息)",
                    retrieve: "取回本金",
                    repay: "偿还",
                    repayAll: "偿还全部",
                    supply: "存款",
                    borrow: "借款",
                    limit: "限制",
                    balance: "余额",
                    rewards: "奖励",
                    totalSupply: "总供应总量",
                    trading: "交易",
                    approve: "授权",
                    claim: "提取奖励",
                    unable: "已停止",
                    exit: "退出",
                    withdraw: "提现",
                    withdrawAll: "提现全部",
                    stake: "质押",
                    deposit: "存入",
                    depositAll: "存入全部",
                    deposited: "已存入",
                    borrowed: "已借款",
                    available: "可用",
                    approveFirst: "提示：存入之前请先授权",
                    loading: "加载中...",
                    netTip: "以太坊主网请到你的钱包中切换",
                    netDelayTip: "以太坊主网暂未开放",
                    feeTip: "提现将收取利润的 0.3%手续费用，对本金无损伤",
                    note: "提示",
                    assets: "资产",
                    apyCalculations: "年利率计算",
                    farmApr: "农耕收益率",
                    lpContract: "LP 合约",
                    all: "全部",
                    stablecoins: "稳定币",
                    others: "其他",
                    market: "市场",
                    depositMarket: "存款市场",
                    depositApy: "存款年利率",
                    borrowMarket: "借款市场",
                    leftBorrow: "剩余可借量",
                    borrowApy: "借款年利率",
                    borrowAvailiable: "剩余可借",
                    priceSource: "价格来源",
                    yourDeposit: "您的存款",
                    yourLoan: "您的借款",
                    usedRatio: "已用比例",
                    enterSupplyAmount: "请输入存款数量",
                    enterRedeemAmount: "请输入取回数量(本金)",
                    enterRepayAmount: "请输入偿还数量(本金)",
                    enterBorrowAmount: "请输入借款数量(最大为池量80%)",
                    marketDetails: "市场详情",
                    poolVolume: "池量",
                    depositAmount: "存款数量",
                    borrowAmount: "借款数量",
                    depositLimit: "存款上限",
                    borrowLimit: "借款上限",
                    reserveRatio: "准备金率",
                    exchangeRate: "兑换率",
                    liquidationFine: "清算罚款",
                    maxPledgeRate: "最大质押率",
                    fundUtilization: "资金利用率",
                    marketLoanable: "市场剩余可贷",
                    totalBorrow: "总借款",
                    totalDeposit: "总存款",
                    operation: "操作",
                    farmContract: "农场合约",
                    vaultContract: "机枪池合约",
                    myAddress: "我的地址",
                    totalDepositIn: "总存入",
                    currentEarning: "当前盈利",
                    staked: "已质押",
                    transaction: "交易",
                    pending: "交易排队打包中...",
                    confirm: "确认",
                    confirming: "等待链上交易确认",
                    confirmed: "已确认",
                    cancel: "取消",
                    canceled: "已取消",
                    success: "交易成功",
                    failed: "交易执行失败",
                    txFailed: "交易执行失败",
                    copied: "复制成功",
                    computePower: "实时计算能力和Token数据参数",
                    aboutWiki: "YFO信息介绍",
                    aboutDex: "$P 的愿景是构建多个去中心化金融应用程序（Defi - Apps），然后将这些产品开发成成熟的项目，从而增加 $P 生态系统的价值。由于一些去中心化金融（Defi）产品没有实际用例和简单的使用方法，产品的使用对Defi用户来说一直很困难，尤其是因为它需要对以太坊区块链有广泛的了解。另一个常见问题是许多 Defi 项目通过构建简单的交换网站然后停止进一步开发而提出的错误值。这使得似乎可以提供 Defi 交换，但事实并非如此。 $P 项目及其来自不同国家的去中心化团队承诺通过围绕其平台开发和构建多个 Defi 产品来创建一个可持续的生态系统，并保证一个 Defi 项目应该具有的最终真实价值。 $P 是一个社区驱动的区块链项目，旨在在其基础上构建多个 Defi 应用程序具有创造性和颠覆性的区块链Defi理念的平台，因此成为第一个值得效仿的前沿Defi项目。\n  ",
                    aboutApp: "$P 设想了一个由多个构建在以太坊上的 Defi 应用程序（Defi DApp）组成的生态系统，供 $P 项目的 $P 团队和 $P 产品用户的去中心化社区使用。 话虽如此，$P Finance 是一个社区驱动的 Defi 项目，旨在构建去中心化产品，旨在产生真正的 Defi 价值，以改善社区及其用户的 $P 生态系统。",
                    aboutBasis: "$P 致力于系统地生产新的 Defi 产品，该团队作为一个临时启用的团队，将帮助开发、营销和推出这些 Defi 产品，以帮助发展其生物圈，同时为社区、项目和用户提供理想的收益。",
                    aboutMechanism: "$P 也可以被描述为一个去中心化的风险投资（DVC），它通过构建其社区投资的 Defi 产品来赋能去中心化的无息金融生态系统，目的是将收入作为利润份额（奖励）分配给利益相关者。",
                    aboutCommunity: "$P 生态系统将成为各种独特的去中心化金融产品的家园。 $P 产品将与其代币 YFONE 代币挂钩，以寻求重新创造去中心化金融的真正含义。",
                    aboutDefi: "$P 产品将与其代币 YFONE Token 挂钩，以寻求重新创造去中心化金融的真正含义。\nYFONE 代币的主要用例将是每个产品的唯一治理代币，这将使持有者对这些产品产生的收入提出索赔。\n$P 团队建立市场的同时，它将成为一个抵押 YFONE 代币的平台，随后，持有者仅通过持有代币就能获得巨大的收益。 想象一下，通过与合作伙伴分叉并从头开始构建，将 1000 多个分散式应用程序链接到一个生态系统，所有这些应用程序都与 YFO 令牌集成。 这个生态系统会非常庞大，并且会不断增长，是一个完全去中心化的系统，而且还在不断增长，这就是Defi的真正含义。\n  ",
                    aboutVaults: "机枪池根据哈希率、挖矿难度以及交易平台现行价格确定获利最高的币。跟仅能挖一个币的普通矿池不同。 一个币挖矿的时间长了以后，难度会增加，矿池就会转向另一个币。YFO平台会根据市场出现的矿池，实时进行矿池的添加，从而获得最高的收益。且主要是通过合约自动的功能进行每半小时的复投获得最高的收益。",
                    aboutLending: "在DeFi世界，去中心化借贷系统是一个极其重要的赛道，也是整个DeFi体系里面的基石系统，它能够模拟现实世界里的金融系统，了解不同用户的资金需求，并提供用户间相互资金融通的平台;它能够无边际成本的支持符合同质化代币标准的所有加密资产之间的借贷，并能够根据市场供需，自动化的计算与调整市场的借贷利率。所以YFO生态也在V2版本中做重要的功能，借贷中的平台自理Token是目前的YFO和OBS。",
                    aboutText: "$P 的愿景是构建多个去中心化金融应用程序（Defi - Apps），然后将这些产品开发成成熟的项目，从而增加 $P 生态系统的价值。由于一些去中心化金融（Defi）产品没有实际用例和简单的使用方法，产品的使用对Defi用户来说一直很困难，尤其是因为它需要对以太坊区块链有广泛的了解。另一个常见问题是许多 Defi 项目通过构建简单的交换网站然后停止进一步开发而提出的错误值。这使得似乎可以提供 Defi 交换，但事实并非如此。 $P 项目及其来自不同国家的去中心化团队承诺通过围绕其平台开发和构建多个 Defi 产品来创建一个可持续的生态系统，并保证一个 Defi 项目应该具有的最终真实价值。 $P是一个社区驱动的区块链项目，旨在以创新和颠覆性的区块链Defi理念在其平台之上构建多个Defi应用，从而成为第一个值得效仿的前沿Defi项目",
                    aboutECO: "$P 设想了一个由多个构建在以太坊上的 Defi 应用程序（Defi DApp）组成的生态系统，供 $P 项目的 $P 团队和 $P 产品用户的去中心化社区使用。 话虽如此，$P Finance 是一个社区驱动的 Defi 项目，旨在构建去中心化产品，旨在产生真正的 Defi 价值，以改善社区及其用户的 $P 生态系统。 $P 致力于系统地生产新的 Defi 产品，该团队作为一个临时启用的团队，将帮助开发、营销和推出这些 Defi 产品，以帮助发展其生物圈，同时为社区、项目和用户提供理想的收益。 $P也可以说是去中心化风险投资（DVC），通过构建Defi产品赋能去中心化免息金融生态",
                    overview: "概览",
                    w1: "Vaults 是什么？",
                    w2: "YFO去中心化借贷？",
                    w3: "我需要什么样的技能才能加入你们的团队，才能在这个伟大的项目中做出贡献？",
                    w4: "$P 目前接受什么类型的加密货币？",
                    w5: "我如何向 $P 投资并获利？",
                    w6: "为什么 V2 版本只能使用币安 binance 生态链？",
                    w7: "$P 代表什么？",
                    r1: "机枪池，就是对同算法的不同币种，根据实时挖矿收益的高低，以自动化的方式将算力切换至更高收益的币种进行挖矿的过程，其价值是为用户创造比单一币种挖矿更高的收益。之所以会有“机枪池”之称，得益于这种操作就像是打机枪一样，不断进行切换。",
                    r11: "根据机枪池的特点，机枪池的操作就是把算力集中到一个矿池里，不指定挖哪个币，而是直接寻找相同挖矿算法中的几个项目，哪个项目收益高就把算力切换到哪个项目上去挖，这个项目上的收益下降了就换到另外一个项目上去，最终获取最佳收益。",
                    r12: "机枪池的优势让用户的收益最大化：收益是每个投资者都关注的重点。大部分人之所以会选择投资DeFi项目就是看在其收益率比较高，而DeFi机枪池则能够帮助我们将挖矿收益最大化。这是因为DeFi机枪池的特点就是根据实时挖矿收益的高低，将资金切换至更高收益的DeFi项目中进行流动性挖矿，为我们投资者提供更高的挖矿收益。",
                    r13: "YFO平台的DeFi机枪池不仅仅能够通过实时切换增大我们的收益，还推出了每半小时复利的规则，有效的利用资金，促进我们的收益最大化。(每小时复利即按半小时计息，我们每半小时的投资本息都将计入下一个小时的投资本金，享受每半小时复利收益。)",
                    r14: "精选项目：市场上可进行流动性挖矿项目琳琅满目，对我们用户来说最难的还是选择项目这一环节。想要选择出好一个安全、可靠、收益高的项目，需要投入大量的时间和精力。除此之外，由于市场瞬息万变，很容易出现当我们研究好一个新项目准备入手的时候，资金已经转移到下一个收益更高的新项目的情况，从而造成一定的滞后性。",
                    r15: "机枪池的好处是能够提供一种资产筛选和配置的功能，每上一个项目会一定程度评估其安全性和收益。YFO平台就有专业人士对各种项目进行调研，精选高收益DeFi项目，并实时调整头寸，为我们争取最大收益可能。",
                    r16: "因要不断的调用合约，所以平台会收取0.3%收益的手续费，其目的是DeFi 挖矿中的各个步骤都需要1-2次的合约调用，每次费用现在几美元到几十美金不等，每半小时就要整个合约调用一次。除去GAS费用之外，还有余额会不定时的用来回购YFO、OBS Token。",
                    r2: "以提供存款凭证代币的方式，将同一资产穿梭、重复使用于不同的DeFi协议之中，从而数倍地提升资金在金融市场上的使用效率;它还可以与其它DeFi协议进行灵活组合，从而实现多层、多级、复杂、嵌套金融交易的自动化运行。",
                    r21: "目前DeFi中的各类借贷平台从模式上讲基本都处于抵押贷款方式，整体更加倾向于当铺模式，把各种数字货币变为固定价值的货物，抵押价值100的货物获得75价格的可流动货币，通过货币抵押获得货币的行为看似非常愚蠢，但通过高额的抵押利率以及DeFi市场前期巨额的收益率吸引了较高的市场资金。",
                    r22: "DeFi目前是通过swap和交易所来解决抵押，通过保证金制度来解决杠杆，最终实现了类似于信用衍生一样的操作。拿比特币和以太坊作为例子，在币安链上。 比如你想抵押比特币换取以太坊，你就可以： 把比特币锁定在一个特定的地址，此时会在币安链上生成一个代表这个比特币通证BTC， 然后你在币安链上用智能合约抵押这个BTC，生成了相应的Token； 然后拿着Token购买了一定数量的ETH， 然后把这些ETH所对应的抵押物BTC释放出来，交易结束。 整个过程都是智能合约来完成的，没有人的参与。而如果你到期不还，那么你抵押的比特币就没有了。智能合约到期执行执行，把我抵押的这个比特币进行违约处理。 这样能实现了等额抵押，但是Defi的魅力在于生长，所以需要超额抵押。也就是希望能够抵押1个比特币，临时的借2个，乃至于10个比特币来进行投机。",
                    r3: "$P 是一个全球的团队，每个人都可以加入 $P 的社群里，在社群里我们希望更多\n  人的加入 $P 的大家庭，当你持有一枚 YFO Token 的时候就算加入了我们团队，当然\n  我们需要更多的人加入，所以可以作为社群运营人员，市场宣传人员，技术反馈人员等等的\n  角色，在你个人具备一定能力请联系我们的社群管理员。",
                    r4: "目前接受主流币 ETH、BNB、USDT 等和 YFO、OBS Tokens",
                    r5: "平台提供机枪池（vaults）、借贷、单币池等多种方式，需要用户自行按网站上要求的 Token\n  种类就会获得一定的利润。",
                    r6: "机枪池为每30分钟内复投一次，油费GAS过高，若质押金额不够会导致用户的资金出现亏损。所以我们首期只推出BSC生态链的。以太坊的版本需要BSC版本的YFO-V2版本 TVL 金额大于 500万美元的时候，才会开放以太坊的版本，在固定时间复投的时候，当金额达到一定的量时候，才能保证用户在平台进行复投的金额得到最大的利润。所以首期我们只开放币安binance生态链的产品区域，（当然已经开发完毕，时刻等待着更新，以太坊的代码已在Github上更新）。",
                    r7: "$P 的愿景是建立几个去中心化的金融应用（Defi - Apps）然后开发并将这些产品转化为\n  成熟的项目，增加 $P 生态系统的价值。。$P 项目及其去中心化团队来自不同\n  的国家，承诺创造一个可持续的通过开发和构建多个 的 Defi 生态系统产品，围绕其平台\n  并保证 Defi 项目应该是什么的最终真正价值。$P 是一个社区驱动的区块链项目旨在\n  在其基础上构建多个 Defi 应用程序具有创造性和颠覆性区块链 Defi 的平台想法，从而成\n  为第一个前沿的 Defi 项目。",
                    countactUs: "联系我们",
                    cTitle: "$P集团数字经济领军企业。致力于区块链领域的核心技术突破以及区块链技术和产业融合，围绕区块链DEFI产业上下游，发展包括产业区块链、数字资产交易、数字资产安全钱包、数字经济研究、去中心化话等业务，形成全球数字经济产业生态体系。\n\n$P坚持践行去中心化化社区服务，为上百个国家和地区的千万级用户提供安全、可信赖的价值网络服务。",
                    officialListing: "官方合作机构",
                    myWallet: "我的钱包",
                    security: "安全",
                    securityPolicy: "安全策略",
                    policy1: "查看如何安全地报告此存储库的安全漏洞",
                    securityAdvisories: "安全建议",
                    policy2: "查看此存储库的安全建议",
                    scope: "范围",
                    policy3: "漏洞赏金计划的范围涵盖智能合约\n  在YFO 生态系统中使用——Solidity 或\n  合约文件夹中的智能合约\n  渴望协议回购的主分支，包括\n  仍然看到活跃使用的历史部署\n  与 YFI 相关的以太坊主网，不包括任何\n  仅用于测试能力的合同（包括\n  仅测试部署）。",
                    policy4: "注：除上述合同外的其他合同\n  以上，可以根据具体情况考虑，\n  请联系 YFO 开发团队以获取\n  澄清。",
                    stepVerification: "两步验证",
                    authentication: "通过 Google Authenticator、Authy 或任何 2FA 应用程序启用 2 因素身份验证 扫描二维码或输入身份验证器密钥",
                    authenticaorKey: "验证器key",
                    generate: "点击生成",
                    buy: "购买",
                    indicator: "指标",
                    tvl: "总锁仓",
                    apy: "年利率",
                    lock: "锁仓",
                    days: "天",
                    more: "更多",
                    daily: "日化利率",
                    monthly: "月化利率",
                    yearly: "年化利率",
                    validNumber: "无效数字",
                    insufficient: "余额不足",
                    stakeAmount: "质押金额",
                    max: "全部",
                    swap: "兑换",
                    price: "价格",
                    legalDisclaimer: "免责声明",
                    legalText: "本材料中提供的信息不构成投资建议、财务建议、交易建议或任何其他类型的建议。本材料仅供参考，并非 (i) 投资或买卖任何权益或股份或参与任何投资或交易策略的要约或要约邀请，(ii)旨在提供会计、法律或税务建议，或投资建议，或 (iii) YFO 代币的官方声明。对于信息的准确性或完整性或任何数字资产、金融工具或其他市场或经济指标的未来表现，不作任何明示或暗示的陈述或保证。\n  \nYFO Token 团队不建议您购买、出售或持有任何加密货币。在做出任何投资决定之前，请务必进行尽职调查并咨询您的财务顾问。\n  \n购买 YFO，即表示您同意您购买的不是证券或投资，并且您同意使团队免受伤害，并且不对您可能招致的任何损失或税款负责。您还同意团队“按原样”提供令牌，不需要提供任何支持或服务。您不应期望 YFO Token 及其团队有任何形式。\n  \n尽管 YFO 是用于社交网络的社区驱动的去中心化金融 (DeFi) 代币，而不是注册数字货币，但该团队强烈建议政府禁止加密货币地区的公民不要购买它，因为该团队无法确保遵守既定法规。某些领土。在进行任何购买之前，请务必确保遵守当地的法律和法规。\n  \n$P 团队是来自世界不同地区的去中心化个人，他们构建的去中心化应用程序可以造福世界并改善其生态系统。\n  \n有这么多来自个人、公司和有能力的机构的直接消息，询问 $P 团队应该投资什么以及不应该投资什么，我们公开透明，并就 Defi 资产的高风险向我们的社区提供建议，但 YFO项目将搭建优质平台。\n  \n由于越来越多的人向团队询问财务建议，YFO 团队不向任何个人提供财务指导或建议，投资 DeFi 资产可能会导致您失去投资。\n  \n投资时始终做自己的研究。"
                }, Franch: {
                    yfione: "$P",
                    welcomeV2: "Yield Farming 2.0",
                    welcomeText: "Réduire les risques grâce à des stratégies agricoles diversifiées",
                    launchApp: "Claim & Swap",
                    whitePaper: "papier blanc",
                    audit: "Audit par Dpanquan.com",
                    copyright: "2021 Copyright $P.",
                    reserved: "Tous droits réservés !",
                    dashboard: "Tableau de bord",
                    vaults: "Vaults",
                    earn: "Gagner",
                    lending: "Prêt",
                    statistics: "Statistiques",
                    governance: "Gouvernance",
                    wiki: "Wiki",
                    faqs: "FAQ",
                    settings: "Paramètres",
                    nft: "NFT",
                    brige: "Pont",
                    connectWallet: "Connecter le portefeuille",
                    disconnect: "Déconnecter le portefeuille",
                    search: "Chercher...",
                    earnings: "Vos revenus",
                    pendingHarvest: "En attente de récolte",
                    harvest: "Récolte",
                    tvlText: "Valeur totale verrouillée",
                    browserview: "Vue du navigateur",
                    availableVaults: "Coffres disponibles",
                    sortBy: "Trier par",
                    hideBalances: "Masquer les soldes nuls",
                    pairAssets: "Pair Asset",
                    get: "obtenir",
                    back: "retour",
                    totalSupply: "Approvisionnement total",
                    rewards: "Récompenses",
                    yfoPrice: "prix actuel $P",
                    totalBorrowed: "Total emprunté",
                    circulation: "Circulation",
                    marketCap: "Market cap",
                    provideLiquidity: "Fournir de la liquidité",
                    select: "Sélectionner",
                    "collatéral": "Collatéral",
                    pledge: "Engagement",
                    exitPledge: "Exit Pledge",
                    redeem: "Tout échanger",
                    retrieve: "Récupérer",
                    repay: "Rembourser",
                    repayAll: "RepayAll",
                    supply: "Approvisionnement",
                    balance: "Equilibre",
                    borrow: "Emprunter",
                    limit: "Limite",
                    trading: "Trading",
                    approve: "approuver",
                    claim: "Réclamer",
                    unable: "Impossible",
                    withdraw: "Retirer",
                    withdrawAll: "Retirer tout",
                    exit: "Quitter",
                    stake: "mise",
                    deposit: "Dépôt",
                    depositAll: "Dépôt tout",
                    deposited: "Déposé",
                    borrowed: "Emprunté",
                    available: "disponible",
                    approveFirst: "Veuillez approuver avant le dépôt",
                    loading: "Chargement...",
                    netTip: "Ethereum mainnet, veuillez basculer dans votre portefeuille",
                    netDelayTip: "Le réseau principal Ethereum n'est pas encore ouvert",
                    feeTip: "Le retrait facturera des frais de gestion de 0,3 % du bénéfice, aucun dommage pour le mandant",
                    note: "Remarque",
                    assets: "Actifs",
                    apyCalculations: "Calculs APY",
                    farmApr: "Farm APR",
                    lpContract: "contrat LP",
                    farmContract: "Contrat agricole",
                    vaultContract: "Contrat Vault",
                    myAddress: "Mon adresse",
                    totalDepositIn: "Total déposé",
                    currentEarning: "Gagner actuellement",
                    all: "tous",
                    stablecoins: "Stablecoins",
                    others: "Autres",
                    market: "Marché",
                    depositMarket: "Marché des dépôts",
                    depositApy: "Dépôt APY",
                    borrowMarket: "marché des emprunts",
                    borrowApy: "Emprunter APY",
                    leftBorrow: "Restant prêtable",
                    borrowAvailiable: "Emprunter disponible",
                    priceSource: "Source du prix",
                    yourDeposit: "Votre acompte",
                    yourLoan: "Votre prêt",
                    usedRatio: "Ratio utilisé",
                    enterSupplyAmount: "Entrez le montant du dépôt",
                    enterRedeemAmount: "Entrez le montant (principal)",
                    enterRepayAmount: "Entrez le montant du remboursement (principal)",
                    enterBorrowAmount: "Entrez le montant du prêt (max 80%)",
                    poolVolume: "Balance de la piscine",
                    marketDetails: "Détails du marché",
                    depositAmount: "Montant du dépôt",
                    borrowAmount: "Montant de l'emprunt",
                    depositLimit: "Limite de dépôt",
                    borrowLimit: "Limite d'emprunt",
                    reserveRatio: "Ratio de réserve",
                    exchangeRate: "Taux de change",
                    liquidationAmende: "Amende de liquidation",
                    maxPledgeRate: "Taux d'engagement maximum",
                    liquidationFine: "Utilisation des fonds",
                    marketLoanable: "Excédent de marché prêtable",
                    totalBorrow: "total de l'emprunt",
                    totalDeposit: "Dépôt total",
                    operation: "Opération",
                    staked: "Jalonné",
                    transaction: "Opération",
                    pending: "En attente...",
                    confirm: "Confirmer",
                    confirming: "Confirmation",
                    confirmed: "Confirmé",
                    cancel: "Annuler",
                    canceled: "Annulé",
                    success: "Transaction réussie",
                    failed: "La transaction a échoué",
                    txFailed: "Trasancton a échoué",
                    copied: "Copié",
                    computePower: "Puissance de calcul en temps réel et paramètres de données Token",
                    aboutWiki: "Présentation de l'information YFO",
                    aboutDex: "La vision d'$P est de créer plusieurs applications financières décentralisées (Defi - Apps), puis de développer ces produits en projets à part entière, augmentant ainsi la valeur de l'écosystème $P. Avec le tollé de plusieurs produits financiers décentralisés (Defi) n'ayant pas de cas d'utilisation réels et de méthodes d'utilisation simples, l'utilisation du produit a été difficile pour les utilisateurs de Defi, en particulier parce qu'elle nécessite une vaste compréhension de la blockchain Ethereum. Un autre problème courant est la fausse valeur que de nombreux projets Defi proposent en créant de simples sites Web d'échange, puis en arrêtant le développement ultérieur. Cela donne l'impression que l'échange Defi est tout ce qu'il y a à offrir, mais ce n'est pas le cas. Le projet $P et son équipe décentralisée de différents pays, promet de créer un écosystème durable en développant et en construisant plusieurs produits Defi autour de sa plateforme et garantit la véritable valeur ultime de ce que devrait être un projet Defi. $P est un projet de blockchain axé sur la communauté qui vise à créer plusieurs applications Defi en plus de ses plate-forme avec des idées Defi blockchain créatives et perturbatrices, devenant ainsi le premier projet Defi de pointe à imiter.\n  ",
                    aboutApp: "$P envisage un écosystème de plusieurs applications Defi (Defi DApps) construits sur Ethereum pour une utilisation à la fois par l'équipe $P du projet $P et par la communauté décentralisée des utilisateurs de produits $P. Cela dit, $P Finance est un projet Defi piloté par la communauté, orchestré pour créer des produits décentralisés, dans le but de produire de véritables valeurs Defi pour améliorer l'écosystème $P pour la communauté et ses utilisateurs.",
                    aboutBasis: "$P se consacre à produire systématiquement de nouveaux produits Defi avec l'équipe agissant comme une équipe ad hoc qui aidera à développer, commercialiser et lancer ces produits Defi pour aider à développer sa biosphère tout en offrant simultanément des gains souhaitables à la communauté, au projet et aux utilisateurs.",
                    aboutMechanism: "$P peut également être décrit comme un capital-risque décentralisé (DVC) qui renforce un écosystème financier décentralisé sans intérêt en créant des produits Defi dans lesquels sa communauté a investi dans le but de distribuer les revenus sous forme de parts de bénéfices (récompenses) aux parties prenantes.",
                    aboutCommunity: "L'écosystème $P abritera une variété de produits financiers décentralisés uniques. Les produits $P seront liés à son jeton, le jeton YFONE, dans le but de recréer le vrai sens de la finance décentralisée.",
                    aboutDefi: "Les produits $P seront liés à son jeton, le jeton YFONE, dans le but de recréer le vrai sens de la finance décentralisée.\nLe cas d'utilisation principal du jeton YFONE sera le seul jeton de gouvernance pour chaque produit qui donnera aux détenteurs un droit sur les revenus générés par ces produits.\nCe sera une plate-forme pour le jalonnement des jetons YFONE pendant que l'équipe $P construira le marché et, par la suite, les détenteurs bénéficieront énormément du simple fait de détenir le jeton. Imaginez plus de 1000 applications décentralisées liées à un écosystème en forgeant avec des partenaires et en construisant à partir de zéro, tout est intégré à YFO Token. Cet écosystème sera extrêmement vaste et ne cessera de croître. C'est un système complètement décentralisé, et il ne cesse de croître, c'est le vrai sens de Defi.\n  ",
                    aboutVaults: "Le pool de mitrailleuses détermine la pièce la plus rentable en fonction du taux de hachage, de la difficulté de minage et du prix actuel de la plateforme de trading. C'est différent des pools miniers ordinaires qui ne peuvent extraire qu'une seule pièce. Après qu'une pièce ait été extraite pendant une longue période, la difficulté augmentera et le pool de minage passera à une autre pièce. La plateforme YFO ajoutera des pools de minage en temps réel en fonction des pools de minage qui apparaissent sur le marché, afin d'obtenir le profit le plus élevé. Et c'est principalement grâce à la fonction automatique du contrat de réinvestir toutes les demi-heures pour obtenir le profit le plus élevé.",
                    aboutLending: "Dans le monde DeFi, le système de prêt décentralisé est une piste extrêmement importante et le système de pierre angulaire de l'ensemble du système DeFi. Il peut simuler le système financier dans le monde réel, comprendre les besoins financiers des différents utilisateurs et fournir aux utilisateurs un financement mutuel. La plateforme; il peut prendre en charge le prêt de tous les actifs cryptés qui répondent à la norme de jeton d'homogénéisation sans coût marginal, et peut automatiquement calculer et ajuster le taux de prêt du marché en fonction de l'offre et de la demande du marché. Par conséquent, l'écosystème YFO remplit également des fonctions importantes dans la version V2. Les jetons d'auto-soins de la plate-forme dans les prêts sont les actuels YFO et OBS.",
                    aboutText: "La vision d'$P est de créer plusieurs applications financières décentralisées (Defi - Apps), puis de développer ces produits en projets à part entière, augmentant ainsi la valeur de l'écosystème $P. Avec le tollé de plusieurs produits financiers décentralisés (Defi) n'ayant pas de cas d'utilisation réels et de méthodes d'utilisation simples, l'utilisation du produit a été difficile pour les utilisateurs de Defi, en particulier parce qu'elle nécessite une vaste compréhension de la blockchain Ethereum. Un autre problème courant est la fausse valeur que de nombreux projets Defi proposent en créant de simples sites Web d'échange, puis en arrêtant le développement ultérieur. Cela donne l'impression que l'échange Defi est tout ce qu'il y a à offrir, mais ce n'est pas le cas. Le projet $P et son équipe décentralisée de différents pays, promet de créer un écosystème durable en développant et en construisant plusieurs produits Defi autour de sa plateforme et garantit la véritable valeur ultime de ce que devrait être un projet Defi. $P est un projet de blockchain axé sur la communauté qui vise à créer plusieurs applications Defi au-dessus de sa plate-forme avec des idées Defi de blockchain créatives et perturbatrices, devenant ainsi le premier projet Defi de pointe à imiter.",
                    aboutECO: "$P envisage un écosystème de plusieurs applications Defi (Defi DApps) construits sur Ethereum pour une utilisation à la fois par l'équipe $P du projet $P et par la communauté décentralisée des utilisateurs de produits $P. Cela dit, $P Finance est un projet Defi piloté par la communauté, orchestré pour créer des produits décentralisés, dans le but de produire de véritables valeurs Defi pour améliorer l'écosystème $P pour la communauté et ses utilisateurs. $P se consacre à produire systématiquement de nouveaux produits Defi avec l'équipe agissant comme une équipe ad hoc qui aidera à développer, commercialiser et lancer ces produits Defi pour aider à développer sa biosphère tout en offrant simultanément des gains souhaitables à la communauté, au projet et aux utilisateurs. $P peut également être décrit comme un capital-risque décentralisé (DVC) qui renforce un écosystème financier décentralisé sans intérêt en créant le produit Defi",
                    overview: "Aperçu",
                    w1: "Que sont les coffres-forts ?",
                    w2: "Prêts décentralisés YFO ?",
                    w3: "De quelles compétences ai-je besoin pour rejoindre votre équipe pour contribuer à ce grand projet ?",
                    w4: "Quel type de crypto-monnaie $P accepte-t-il actuellement ?",
                    w5: "Comment puis-je investir dans $P et en tirer profit ?",
                    w6: "Pourquoi la version V2 ne peut utiliser que la chaîne écologique Binance ?",
                    w7: "Que signifie $P ?",
                    r1: "Le pool de mitrailleuses consiste à extraire différentes devises avec le même algorithme, en fonction du niveau de revenus miniers en temps réel, en basculant automatiquement la puissance de calcul vers une devise à plus haut profit pour l'exploitation minière, et sa valeur est créée pour les utilisateurs Des rendements plus élevés que extraction de monnaie unique. La raison pour laquelle il porte le nom de \"pool de mitrailleuses\" est que ce genre d'opération est comme tirer avec une mitrailleuse, en changeant constamment.",
                    r11: "Selon les caractéristiques du pool de mitrailleuses, le fonctionnement du pool de mitrailleuses consiste à concentrer la puissance de calcul dans un pool minier. Il ne précise pas quelle pièce miner, mais recherche directement plusieurs projets dans le même algorithme de minage. Sur quel projet la puissance de calcul est basculée pour le minage, si les revenus de ce projet baissent, il sera basculé sur un autre projet pour obtenir le meilleur revenu au final.",
                    r12: "L'avantage du pool de mitrailleuses maximise le revenu de l'utilisateur : le revenu est au centre de l'attention de chaque investisseur. La raison pour laquelle la plupart des gens choisissent d'investir dans des projets DeFi est que leurs rendements sont relativement élevés et que le pool de mitrailleuses DeFi peut nous aider à maximiser les revenus miniers. En effet, la caractéristique du pool de mitrailleuses DeFi est de transférer des fonds vers des projets DeFi à plus haut rendement pour l'extraction de liquide en fonction du niveau de revenu minier en temps réel, offrant à nos investisseurs des revenus miniers plus élevés.",
                    r13: "Le pool de mitrailleuses DeFi de la plate-forme YFO peut non seulement augmenter nos revenus grâce à la commutation en temps réel, mais également introduire une règle d'intérêt composé d'une demi-heure pour utiliser efficacement les fonds afin de maximiser nos revenus. (Les intérêts composés horaires sont calculés à une demi-heure. Notre capital d'investissement et les intérêts pour chaque demi-heure seront inclus dans le capital d'investissement de l'heure suivante, et nous pouvons profiter de l'intérêt composé toutes les demi-heures.)",
                    r14: "Projets sélectionnés : Il existe une gamme éblouissante de projets d'extraction de liquide disponibles sur le marché, et la partie la plus difficile pour nos utilisateurs est de choisir le projet. Il faut beaucoup de temps et d'énergie pour choisir un projet sûr, fiable et très rentable. De plus, en raison de l'évolution rapide du marché, il est facile d'arriver que lorsque nous avons étudié un nouveau projet et que nous sommes prêts à démarrer, les fonds ont été transférés au prochain nouveau projet avec des rendements plus élevés, ce qui entraînera un certain décalage.",
                    r15: "L'avantage du pool de mitrailleuses est qu'il peut fournir une fonction de filtrage et de configuration des actifs. Chaque projet évaluera sa sécurité et ses avantages dans une certaine mesure. La plate-forme YFO a des professionnels pour mener des recherches sur divers projets, sélectionner des projets DeFi à haut rendement et ajuster les positions en temps réel pour nous efforcer de tirer le maximum de profit possible pour nous.",
                    r16: "En raison de l'appel constant du contrat, la plate-forme facturera des frais de 0,3% du chiffre d'affaires. Le but est que chaque étape de l'exploitation minière DeFi nécessite 1-2 appels de contrat, et les frais sont maintenant de quelques dollars à des dizaines. Le dollar varie et l'ensemble du contrat est appelé une fois toutes les demi-heures. En plus des frais de GAS, le solde sera utilisé pour racheter des jetons YFO et OBS de temps à autre.",
                    r2: "En fournissant des jetons de certificat de dépôt, le même actif est transféré et réutilisé dans différents protocoles DeFi, améliorant ainsi plusieurs fois l'efficacité de l'utilisation des fonds sur le marché financier ; il peut également être flexible avec d'autres combinaisons de protocoles DeFi pour réaliser le fonctionnement automatisé de transactions financières multicouches, multiniveaux, complexes et imbriquées.",
                    r21: "À l'heure actuelle, toutes sortes de plates-formes de prêt dans DeFi sont essentiellement sur le mode des prêts hypothécaires, et elles sont plus enclines au modèle de prêteur sur gages, transformant diverses monnaies numériques en biens à valeur fixe, et les biens d'une valeur hypothécaire de 100 obtiennent un prix de 75 Monnaie liquide, l'acte d'obtenir des devises grâce à une garantie en devises semble très stupide, mais le taux d'intérêt hypothécaire élevé et le taux de retour énorme au début du marché DeFi attirent des fonds de marché plus élevés.",
                    r22: "DeFi résout actuellement les hypothèques via des swaps et des échanges, et résout l'effet de levier via le système de marge, et réalise enfin une opération similaire aux dérivés de crédit. Prenez Bitcoin et Ethereum comme exemples, sur la chaîne Binance. Par exemple, si vous souhaitez mettre en gage Bitcoin en échange d'Ethereum, vous pouvez : Verrouiller Bitcoin à une adresse spécifique. À ce stade, un BTC représentant ce jeton Bitcoin sera généré sur Binance Chain, puis vous pourrez l'utiliser sur Binance Chain Le contrat intelligent hypothèque ce BTC et génère le jeton correspondant ; achète ensuite une certaine quantité d'ETH avec le Token, puis libère le collatéral BTC correspondant à ces ETH, et la transaction se termine. L'ensemble du processus est effectué par des contrats intelligents sans participation humaine. Et si vous ne le remboursez pas après l'échéance, votre Bitcoin garanti disparaîtra. Le contrat intelligent sera exécuté à son expiration et le bitcoin que j'ai promis sera soumis à un traitement par défaut. Cela peut permettre d'obtenir des hypothèques égales, mais le charme de Defi réside dans la croissance, une sur-hypothèque est donc nécessaire. Autrement dit, j'espère pouvoir hypothéquer 1 Bitcoin, emprunter temporairement 2 voire 10 Bitcoins pour la spéculation.",
                    r3: "$P est une équipe mondiale, tout le monde peut rejoindre la communauté $P, dans la communauté nous espérons plus\n  Les gens rejoignent la famille $P. Lorsque vous détenez un Token YFO, même si vous rejoignez notre équipe, bien sûr\n  Nous avons besoin de plus de personnes pour nous rejoindre, afin que nous puissions servir d'opérateurs communautaires, de personnel marketing, de personnel de retour technique, etc.\n  Rôle, si vous avez une certaine capacité, merci de contacter notre community manager.",
                    r4: "Accepte actuellement les devises principales ETH, BNB, USDT, etc. et YFO, les jetons OBS",
                    r5: "La plate-forme fournit des pools de mitrailleuses (coffres), des prêts, des pools de devises uniques et d'autres méthodes, obligeant les utilisateurs à suivre eux-mêmes le jeton requis sur le site Web.\n  Kind obtiendra un certain profit.",
                    r6: "Le parc de mitrailleuses est réinvesti toutes les 30 minutes, et la taxe sur l'essence est trop élevée. Si le dépôt de garantie n'est pas suffisant, les fonds de l'utilisateur seront perdus. Par conséquent, nous n'avons lancé la chaîne écologique BSC que dans une première phase. La version Ethereum nécessite que la version BSC de la version YFO-V2 de la version TVL soit supérieure à 5 millions de dollars américains avant l'ouverture de la version Ethereum. Lorsque le réinvestissement à une heure fixe, lorsque le montant atteint un certain montant, l'utilisateur peut être assuré d'être sur la plate-forme. Le montant du réinvestissement obtiendra le plus de profit. Par conséquent, dans la première phase, nous ouvrons uniquement la zone de produits de la chaîne écologique Binance (bien sûr, elle a été développée et attend toujours des mises à jour. Le code d'Ethereum a été mis à jour sur Github).",
                    r7: "La vision d'$P est de créer plusieurs applications financières décentralisées (Defi-Apps), puis de développer et de transformer ces produits en\n  Les projets matures augmentent la valeur de l'écosystème $P. . Le projet $P et son équipe décentralisée sont issus de différents\n  Pays, engagés à créer un produit écosystémique Defi durable grâce au développement et à la construction de plusieurs\n  Et garantir la véritable valeur ultime de ce que devrait être le projet Defi. $P est un projet de blockchain communautaire conçu pour\n  Construisez plusieurs applications Defi sur la base de l'idée créative et perturbatrice de la plate-forme Defi blockchain, devenant ainsi\n  C'est le premier projet frontalier Défi.",
                    countactUs: "Nous contacter",
                    cTitle: "Le Groupe $P est une entreprise leader dans l'économie numérique. Engagé dans les avancées technologiques de base dans le domaine de la blockchain et l'intégration de la technologie et de l'industrie de la blockchain, en se concentrant sur l'amont et l'aval de l'industrie de la blockchain DEFI, le développement comprend la blockchain industrielle, les transactions d'actifs numériques, les portefeuilles sécurisés d'actifs numériques, la recherche économique numérique et décentralisation Huahua et d'autres entreprises forment un écosystème industriel mondial de l'économie numérique.\n\n$P adhère à la pratique des services communautaires décentralisés, fournissant des services réseau sûrs et fiables à des dizaines de millions d'utilisateurs dans des centaines de pays et de régions.",
                    officialListing: "Liste officielle",
                    myWallet: "Mon portefeuille",
                    security: "Sécurité",
                    securityPolicy: "Politique de sécurité",
                    policy1: "Découvrez comment signaler en toute sécurité les vulnérabilités de sécurité pour ce référentiel",
                    securityAdvisories: "Avis de sécurité",
                    policy2: "Afficher les avis de sécurité pour ce référentiel",
                    scope: "Porté",
                    policy3: "La portée du programme Bug Bounty s'étend aux contrats intelligents\n  utilisé dans l'écosystème YFO - la Solidité ou\n  contrats intelligents dans le dossier des contrats du\n  branche principale du repo du protocole YFO, y compris\n  déploiements historiques qui voient toujours une utilisation active sur\n  Ethereum Mainnet associé à YFI, et à l'exclusion de tout\n  contrats utilisés à des fins de test uniquement (y compris\n  déploiements de test uniquement).",
                    policy4: "Remarque : Autres contrats, en dehors de ceux mentionnés\n  ci-dessus, pourraient être examinés au cas par cas,\n  s'il vous plaît, contactez l'équipe de développement YFO pour\n  clarification.",
                    stepVerification: "Vérification en 2 étapes",
                    authentication: "Activez l'authentification à 2 facteurs via Google Authenticator, Authy ou n'importe quelle application 2FA Scannez le code QR ou entrez la clé d'authentification",
                    authenticaorKey: "Clé d'authentification",
                    generate: "PRODUIRE",
                    buy: "Acheter",
                    indicator: "indicateur",
                    tvl: "TVL",
                    apy: "APY",
                    unlocked: "Débloqué",
                    lock: "Serrure pour",
                    days: "Journées",
                    more: "Suite",
                    daily: "Rendement journalier",
                    monthly: "Rendement mensuel",
                    yearly: "Rendement annuel",
                    validNumber: "Numéro invalide",
                    insufficient: "Solde insuffisant",
                    stakeAmount: "Montant misé",
                    max: "Max",
                    swap: "Échanger",
                    price: "Prix",
                    legalDisclaimer: "Avertissement légal",
                    legalText: '\nThe information provided in this material does not constitute investment advice, financial advice, trading advice, or any other sort of advice. You should not treat any of the material’s content as such. This material is for informational purposes only and is not (i) an offer, or solicitation of an offer, to invest in, or to buy or sell, any interests or shares, or to participate in any investment or trading strategy, (ii) intended to provide accounting, legal, or tax advice, or investment recommendations, or (iii) an official statement of YFO Token. No representation or warranty is made, expressed or implied, with respect to the accuracy or completeness of the information or to the future performance of any digital asset, financial instrument, or other market or economic measure. \n  \nThe YFO Token team does not recommend that any cryptocurrency should be bought, sold, or held by you. Do conduct your due diligence and consult your financial advisor before making any investment decisions. \n  \nBy purchasing YFO, you agree that you are not purchasing a security or investment, and you agree to hold the team harmless and not liable for any losses or taxes you may incur. You also agree that the team is presenting the token "as is" and is not required to provide any support or services. You should have no expectation of any form from YFO Token and its team. \n  \nAlthough YFO is a community-driven decentralized finance (DeFi) token for social networking and not a registered digital currency, the team strongly recommends that citizens in areas with government bans on cryptocurrencies do not purchase it because the team cannot ensure compliance with established regulations within certain territories. Always make sure that you comply with your local laws and regulations before you make any purchase.\n  \nThe $P team are decentralized individuals from different parts of the world building decentralized applications that can benefit the world and also improve its ecosystem.\n  \nWith so many Direct messages from individuals, companies and able bodies asking The $P Team on what to invest on and on what they shouldn\'t invest on, we are open and transparent and advice our community on the high risk of Defi assets  but the YFO projects will build quality platform.\n  \nDue to More people asking about financial advices from the team, the YFO team does not provide financial guidance or advice to any individual, and by investing in DeFi asset you can risk losing your investments. \n  \nAlways do your own research when investing.'
                }, "日本語": {
                    $P: "$P",
                    welcomeV2: "YFOファーム2.0",
                    welcomeText: "低リスクで多様なマイニング戦略",
                    launchApp: "Claim & Swap",
                    whitePaper: "白書",
                    audit: "Dpanquan.com監査",
                    copyright: "2021 Copyright $P。",
                    reserved: "著作権予約済み！",
                    dashboard: "パネル",
                    vaults: "機関銃プール",
                    earn: "マイニング",
                    lending: "貸し出し",
                    statistics: "統計",
                    governance: "ガバナンス",
                    wiki: "ウィキ",
                    faqs: "よくある質問",
                    settings: "設定",
                    connectWallet: "ウォレットの接続",
                    disconnect: "切断",
                    search: "検索...",
                    earnings: "あなたの収益",
                    pendingHarvest: "保留中の利益",
                    harvest: "収穫",
                    tvlText: "合計",
                    yfoPrice: "現在のYFO価格",
                    totalBorrowed: "Total Borrowed",
                    circulation: "循環量",
                    marketCap: "時価総額",
                    provideLiquidity: "流動性の提供",
                    browserview: "表示",
                    availableVaults: "AvailableMachine Gun Pool",
                    sortBy: "sort",
                    hideBalances: "0個の残高アイテムを非表示にする",
                    pairAssets: "トレーディングペア",
                    get: "Get",
                    back: "戻る",
                    select: "選択",
                    collateral: "担保",
                    pledge: "誓約",
                    exitPledge: "Exit Pledge",
                    redeem: "償還（元本+利息）",
                    retrieve: "プリンシパルを取得",
                    repay: "返済",
                    repayAll: "すべて返済",
                    supply: "預金",
                    borrow: "借りる",
                    limit: "制限",
                    balance: "バランス",
                    totalSupply: "総供給量",
                    rewards: "アワード",
                    trading: "取引",
                    approve: "承認",
                    claim: "撤退報酬",
                    unable: "停止",
                    exit: "終了",
                    withdraw: "撤回",
                    withdrawAll: "すべて撤回",
                    stake: "誓約",
                    deposit: "預金",
                    depositAll: "すべてデポジット",
                    deposited: "寄託",
                    borrowed: "借用",
                    available: "利用可能",
                    approveFirst: "リマインダー: 入金する前に承認してください",
                    loading: "読み込み中...",
                    netTip: "イーサリアムメインネット,ウォレットに切り替えてください",
                    netDelayTip: "イーサリアムメインネットはまだ開いていません",
                    feeTip: "引き出しは利益の0.3％の手数料を請求し,元本に損害を与えることはありません",
                    note: "プロンプト",
                    assets: "資産",
                    apyCalculations: "年利計算",
                    farmApr: "農業収量",
                    lpContract: "LP契約",
                    all: "すべて",
                    stablecoins: "ステーブルコイン",
                    others: "その他",
                    market: "市場",
                    depositMarket: "預金市場",
                    depositApy: "年間預金金利",
                    borrowMarket: "市場を借りる",
                    leftBorrow: "残りの借入可能額",
                    borrowApy: "年利を借りる",
                    borrowAvailiable: "余剰分は借りることができます",
                    priceSource: "価格ソース",
                    yourDeposit: "あなたの預金",
                    yourLoan: "あなたのローン",
                    usedRatio: "使用率",
                    enterSupplyAmount: "デポジット額を入力してください",
                    enterRedeemAmount: "金額（元本）を入力してください",
                    enterRepayAmount: "返済額（元本）を入力してください",
                    enterBorrowAmount: "ローン金額を入力してください（最大はプール金額の80％です）",
                    marketDetails: "市場の詳細",
                    poolVolume: "プールボリューム",
                    depositAmount: "預金額",
                    borrowAmount: "借入額",
                    depositLimit: "デポジット制限",
                    borrowLimit: "借入制限",
                    reservedRatio: "予約率",
                    exchangeRate: "為替レート",
                    liquidationFine: "清算罰金",
                    maxPledgeRate: "最大誓約率",
                    fundUtilization: "資金利用",
                    marketLoanable: "市場の余剰分を貸し出すことができます",
                    totalBorrow: "Total Borrow",
                    totalDeposit: "合計デポジット",
                    operation: "操作",
                    farmContract: "ファーム契約",
                    vaultContract: "マシンガンプール契約",
                    myAddress: "マイアドレス",
                    totalDepositIn: "合計デポジット",
                    currentEarning: "現在の収益",
                    staked: "誓約",
                    transaction: "トランザクション",
                    pending: "トランザクションはキューに入れられ,パッケージ化されています...",
                    confirm: "確認",
                    confirming: "チェーン上のトランザクションの確認を待っています",
                    confirmed: "確認済み",
                    cancel: "キャンセル",
                    canceled: "キャンセル済み",
                    success: "トランザクションは成功しました",
                    failed: "トランザクションの実行に失敗しました",
                    txFailed: "トランザクションの実行に失敗しました",
                    copied: "コピー成功",
                    computePower: "リアルタイムの計算能力とトークンデータパラメータ",
                    aboutWiki: "YFO情報紹介",
                    aboutDex: "$Pのビジョンは、いくつかの分散型金融アプリケーション（Defi-Apps）を構築し、これらの製品を本格的なプロジェクトに開発して、$Pエコシステムの価値を高めることです。実際のユースケースと簡単な使用方法を持たないいくつかの分散型金融（Defi）製品の騒動により、特にイーサリアムブロックチェーンの幅広い理解が必要なため、製品の使用はDefiユーザーにとって困難でした。もう1つの一般的な問題は、多くのDefiプロジェクトが単純なスワップWebサイトを構築し、それ以上の開発を停止することによって提案する誤った値です。これにより、Defiスワップが提供されるすべてであるかのように見えますが、そうではありません。 $Pプロジェクトとさまざまな国の分散型チームは、プラットフォームを中心にいくつかのDefi製品を開発および構築することで持続可能なエコシステムを構築することを約束し、Defiプロジェクトの究極の真の価値を保証します。 $Pは、コミュニティ主導のブロックチェーンプロジェクトであり、その上に複数のDefiアプリケーションを構築することを目的としています。 創造的で破壊的なブロックチェーンDefiのアイデアを備えたプラットフォームであるため、エミュレートする価値のある最初の最先端のDefiプロジェクトになります。\n  ",
                    aboutApp: "$Pは、$Pプロジェクトの$Pチームと$P製品ユーザーの分散型コミュニティの両方で使用できるようにEthereum上に構築されたいくつかのDefiアプリケーション（Defi DApps）のエコシステムを想定しています。 そうは言っても、$P Financeはコミュニティ主導のDefiプロジェクトであり、コミュニティとそのユーザーの$Pエコシステムを改善するための真のDefi値を生み出すことを目的として、分散型製品を構築するために編成されています。",
                    aboutBasis: "$Pは、新しいDefi製品を体系的に作成することに専念しており、チームはアドホック対応のチームとして機能し、これらのDefi製品の開発、マーケティング、発売を支援して、生物圏の成長を支援すると同時に、コミュニティ、プロジェクト、ユーザーに望ましい利益をもたらします。",
                    aboutMechanism: "$Pは、収益を利益分配（報酬）として利害関係者に分配することを目的として、コミュニティが投資するDefi製品を構築することにより、分散型の無利子金融エコシステムを強化する分散型ベンチャーキャピタル（DVC）として説明することもできます。",
                    aboutCommunity: "$Pエコシステムは、さまざまなユニークな分散型金融商品の本拠地になります。 $P製品は、分散型ファイナンスの真の意味を再現するために、そのトークンであるYFONEトークンにリンクされます。",
                    aboutDefi: "$P製品は、分散型ファイナンスの真の意味を再現するために、そのトークンであるYFONEトークンにリンクされます。\nYFONEトークンの主な使用例は、各製品の唯一のガバナンストークンであり、これらの製品によって生み出された収益に対する請求権を保有者に与えます。\n$Pチームがマーケットプレイスを構築している間、YFONEトークンを賭けるためのプラットフォームになり、その後、所有者はトークンを保持するだけで多大な利益を得ることができます。 パートナーとフォークし、ゼロから構築することで1つのエコシステムにリンクされた1000を超える分散型アプリケーションを想像してみてください。これらはすべて、YFOトークンと統合されています。 このエコシステムは非常に大きく、継続的に成長します。これは完全に分散化されたシステムであり、絶えず成長しています。これがDefiの真の意味です。\n  ",
                    aboutVaults: "機関銃プールは、ハッシュレート、マイニングの難易度、および取引プラットフォームの現在の価格に基づいて、最も収益性の高いコインを決定します。 1枚のコインしかマイニングできない通常のマイニングプールとは異なります。 あるコインが長期間採掘されると、難易度が上がり、マイニングプールが別のコインに切り替わります。 YFOプラットフォームは、市場に出回っているマイニングプールに応じてリアルタイムでマイニングプールを追加し、最高の利益を獲得します。 そして、最高の利益を得るために30分ごとに再投資するのは主に契約の自動機能によるものです。",
                    aboutLending: "DeFiの世界では、分散型貸付システムは非常に重要なトラックであり、DeFiシステム全体の基礎となるシステムであり、現実世界の金融システムをシミュレートし、さまざまなユーザーの金融ニーズを理解し、ユーザーに相互融資を提供できます。プラットフォーム;それは、限界コストなしで均質化トークン基準を満たすすべての暗号化された資産の貸付をサポートでき、市場の供給と需要に応じて市場の貸付率を自動的に計算および調整できます。 したがって、YFOエコシステムはV2バージョンでも重要な機能を果たしています。貸し出しのプラットフォームセルフケアトークンは、現在のYFOとOBSです。",
                    aboutText: "$Pのビジョンは、複数の分散型金融アプリケーション（Defi-Apps）を構築し、これらの製品を成熟したプロジェクトに開発して、$Pエコシステムの価値を高めることです。 一部の分散型ファイナンス（Defi）製品には実用的な使用例がなく、簡単な使用方法があるため、特にイーサリアムブロックチェーンを広く理解する必要があるため、製品の使用はDefiユーザーにとって困難でした。 もう1つの一般的な問題は、単純な交換サイトを構築し、それ以上の開発を停止することによって、多くのDefiプロジェクトによって引き起こされる誤った値です。 これにより、Defi交換を提供できるように見えますが、そうではありません。 $Pプロジェクトとさまざまな国の分散型チームは、プラットフォームを中心に複数のDefi製品を開発および構築することで持続可能なエコシステムを構築し、Defiプロジェクトの究極の真の価値を保証することを約束します。 $Pは、革新的で破壊的なブロックチェーンDefiコンセプトを使用して、プラットフォーム上に複数のDefiアプリケーションを構築することを目的とした、コミュニティ主導のブロックチェーンプロジェクトであり、エミュレートする価値のある最初のフロンティアDefiプロジェクトになります。",
                    aboutECO: "$Pは、$Pプロジェクトの$Pチームと$P製品ユーザーの分散型コミュニティが使用するためにEthereum上に構築された複数のDefiアプリケーション（Defi DApps）で構成されるエコシステムを想定しています。 そうは言っても、$Pファイナンスはコミュニティ主導のDefiプロジェクトであり、コミュニティとそのユーザーの$Pエコシステムを改善するための真のDefi価値を生み出すことを目的とした分散型製品の構築を目指しています。 $Pは、新しいDefi製品を体系的に生産することに取り組んでいます。一時的なアクティベーションチームとして、$Pは、コミュニティ、プロジェクト、ユーザーに理想的なメリットを提供しながら、生物圏の開発を支援するこれらのDefi製品の開発、マーケティング、発売を支援します。 $Pは、分散型ベンチャーキャピタル（DVC）とも言えます。これは、Defi製品を構築することにより、分散型の無利子金融エコシステムを強化します。",
                    overview: "概要",
                    w1: "Vaultとは何ですか？",
                    w2: "YFO分散型貸付？",
                    w3: "あなたのチームに参加してこの素晴らしいプロジェクトに貢献するには、どのようなスキルが必要ですか？",
                    w4: "$Pは現在どのタイプの暗号通貨を受け入れていますか？",
                    w5: "どうすれば$Pに投資して利益を上げることができますか？",
                    w6: "V2バージョンでBinanceエコロジカルチェーンのみを使用できるのはなぜですか？",
                    w7: "$Pは何の略ですか？",
                    r1: "マシンガンプールは、リアルタイムのマイニング収入のレベルに応じて、同じアルゴリズムの異なる通貨をマイニングし、マイニングのために計算能力をより高利回りの通貨に自動的に切り替えるプロセスです。その価値は、単一の通貨よりもユーザー。より高い利益をマイニングするようなもの。 「機関銃プール」と名付けられたのは、このような操作が機関銃を発射し、絶えず切り替わるようなものだからです。",
                    r11: "マシンガンプールの特性によると、マシンガンプールの操作は、計算能力をマイニングプールに集中させることです。これは、マイニングするコインを指定するのではなく、同じマイニングアルゴリズムで複数のプロジェクトを直接検索します。利益の高いプロジェクトに応じて計算能力を切り替えます。掘り下げるプロジェクトに行くと、このプロジェクトの利益は下がり、最終的には別のプロジェクトに切り替えて最高の利益を得ることになります。",
                    r12: "機関銃プールの利点は、ユーザーの収入を最大化します。収入は、すべての投資家の注意の焦点です。 ほとんどの人がDeFiプロジェクトに投資することを選択する理由は、その歩留まりが比較的高く、DeFi機関銃プールがマイニング収益を最大化するのに役立つためです。 これは、DeFiマシンガンプールの特徴が、リアルタイムのマイニング収入のレベルに基づいて、資金をリキッドマイニング用の高利回りのDeFiプロジェクトに切り替え、投資家により高いマイニング収入を提供することであるためです。",
                    r13: "YFOプラットフォームのDeFi機関銃プールは、リアルタイムの切り替えによって収入を増やすだけでなく、資金を効果的に使用して収入を最大化するための30分の複利ルールを導入することもできます。 （1時間ごとの複利は30分で計算され、30分ごとの投資元本と利息は次の1時間の投資元本に含まれ、30分ごとに複利をお楽しみいただけます。）",
                    r14: "注目のプロジェクト：市場にはまばゆいばかりの液体採掘プロジェクトがあり、ユーザーにとって最も難しいのはプロジェクトを選択することです。 安全で信頼性が高く、収益性の高いプロジェクトを選択するには、多くの時間とエネルギーが必要です。 また、市場の急激な変化により、新規プロジェクトを検討して開始する準備が整うと、次の新規プロジェクトに資金が振り替えられ、リターンが高くなり、一定の原因となる可能性があります。遅れ。",
                    r15: "機関銃プールの利点は、資産のスクリーニングと構成の機能を提供できることです。各プロジェクトは、その安全性と利点をある程度評価します。 YFOプラットフォームには、さまざまなプロジェクトの調査を実施し、高利回りのDeFiプロジェクトを選択し、リアルタイムでポジションを調整して、可能な限り最大の利益を目指して努力する専門家がいます。",
                    r16: "継続的に契約を呼び出す必要があるため、プラットフォームは収益の0.3％の料金を請求します。目的は、DeFiマイニングの各ステップで1〜2回の契約呼び出しが必要になることです。時間あたりのコストは、数ドルから数十ドル。、契約全体が30分に1回呼び出されます。 GAS料金に加えて、残高はYFOおよびOBSトークンを随時買い戻すために使用されます。",
                    r2: "譲渡性預金トークンを提供することにより、同じ資産がシャトルされ、異なるDeFiプロトコルで再利用されるため、金融市場での資金の使用効率が数回向上します。また、他のDeFiプロトコルと柔軟に組み合わせることができるため、自動操作が実現します。マルチレベル、マルチレベル、複雑、およびネストされた金融取引の。",
                    r21: "現在、DeFiのすべての種類の貸付プラットフォームは、基本的に住宅ローンのモードにあります。全体的な好みは、さまざまなデジタル通貨を固定値の商品に変換する質屋モデルであり、住宅ローンの値が100の商品はで流動通貨を取得します。 75の価格。、通貨担保を通じて通貨を取得する行為は非常に愚かなようですが、高い住宅ローン金利とDeFi市場の巨大な初期段階の利回りはより高い市場資金を引き付けます。",
                    r22: "DeFiは現在、スワップとエクスチェンジを通じて住宅ローンを解決し、マージンシステムを通じてレバレッジを解決し、最終的にクレジットの導出と同様の操作を実現します。 Binanceチェーンのビットコインとイーサリアムを例として取り上げます。たとえば、イーサリアムと引き換えにビットコインを誓約したい場合は、次のことができます：特定のアドレスでビットコインをロックすると、このビットコインを表すBTCがバイナンスチェーンで生成され、バイナンスチェーンで使用できますスマートコントラクトモーゲージこのBTCと対応するトークンを生成し、トークンで一定量のETHを購入し、これらのETHに対応する担保BTCを解放すると、トランザクションが終了します。プロセス全体は、人間の参加なしにスマートコントラクトによって行われます。そして、満期後に返済しなければ、担保付きのビットコインはなくなります。スマートコントラクトは有効期限が切れると実行され、私が約束したビットコインはデフォルトの処理の対象になります。これは同等の住宅ローンを達成することができますが、Defiの魅力は成長にあるため、過剰住宅ローンが必要です。言い換えれば、私は1ビットコインを抵当に入れ、投機のために2ビットコインまたは10ビットコインを一時的に借りることができることを望んでいます。",
                    r3: "$Pはグローバルチームです。誰でも$Pコミュニティに参加できます。コミュニティでは、もっと多くのことを望んでいます。\n  人々は$Pファミリーに参加します。YFOトークンを持っていると、もちろん私たちのチームに参加しても\n  より多くの人が参加する必要があるため、コミュニティオペレーター、マーケティング担当者、技術フィードバック担当者などとして機能できます。\n  役割、あなたが特定の能力を持っているならば、私たちのコミュニティマネージャーに連絡してください。",
                    r4: "現在、主流の通貨であるETH、BNB、USDTなどとYFO、OBSトークンを受け入れています",
                    r5: "プラットフォームは、機関銃プール（ボールト）、貸し出し、単一通貨プール、およびその他の方法を提供します。ユーザーは、Webサイトで必要なトークンに従う必要があります。\n  種類は一定の利益を得るでしょう。",
                    r6: "機関銃のプールは30分ごとに再投資され、ガス料金が高すぎます。質権の保証金が十分でない場合、ユーザーの資金は失われます。 したがって、私たちは最初のフェーズでのみBSCエコロジカルチェーンを立ち上げました。 イーサリアムバージョンでは、イーサリアムバージョンがオープンする前に、TVLバージョンのYFO-V2バージョンのBSCバージョンが500万米ドルを超える必要があります。一定の時間に再投資すると、金額が一定の金額に達すると、ユーザーはプラットフォーム上にいることを保証できます再投資の量が最大の利益を得るでしょう。 したがって、最初のフェーズでは、Binanceエコロジカルチェーンの製品領域のみを開きます（もちろん、開発されており、常に更新を待っています。EthereumのコードはGithubで更新されています）。",
                    r7: "$Pのビジョンは、いくつかの分散型金融アプリケーション（Defi-Apps）を構築し、これらの製品を開発して次のように変換することです。\n  成熟したプロジェクトは、$Pエコシステムの価値を高めます。 。 $Pプロジェクトとその分散型チームは異なる出身です\n  複数の国の開発と建設を通じて持続可能なDefiエコシステム製品の作成に取り組んでいます\n  そして、Defiプロジェクトがどうあるべきかという究極の真の価値を保証します。 $Pは、コミュニティ主導のブロックチェーンプロジェクトです。\n  創造的で破壊的なブロックチェーンDefiプラットフォームのアイデアに基づいて複数のDefiアプリケーションを構築し、\n  これは最初のフロンティアDefiプロジェクトです。",
                    countactUs: "お問い合わせ",
                    cTitle: "$P Groupは、デジタル経済のリーディングカンパニーです。 ブロックチェーンDEFI業界の上流と下流に焦点を当て、ブロックチェーン分野のコアテクノロジーの飛躍的進歩とブロックチェーンテクノロジーと業界の統合に取り組んでいる開発には、産業用ブロックチェーン、デジタル資産取引、デジタル資産の安全なウォレット、デジタル経済研究、分散化Huahuaおよびその他のビジネスは、グローバルなデジタル経済産業エコシステムを形成します。\n\n$Pは、分散型コミュニティサービスの実践に準拠しており、数百の国と地域の数千万人のユーザーに安全で信頼性の高いバリューネットワークサービスを提供しています。",
                    officialListing: "オフィシャルパートナーエージェンシー",
                    myWallet: "私の財布",
                    security: "安全性",
                    securityPolicy: "セキュリティ戦略",
                    policy1: "このリポジトリでセキュリティの脆弱性を安全に報告する方法をご覧ください",
                    securityAdvisories: "安全に関するアドバイス",
                    policy2: "このリポジトリのセキュリティに関する推奨事項を表示する",
                    scope: "範囲",
                    policy3: "バグバウンティプログラムの範囲はスマートコントラクトをカバーしています\n  YFOエコシステムでの使用-Solidityまたは\n  契約フォルダ内のスマートコントラクト\n  マスターブランチは、以下を含む契約の買い戻しを熱望しています\n  積極的な使用の歴史的な展開をまだ見ています\n  YFIに関連するイーサリアムメインネット（\n  テスト機能のみの契約（含む\n  テスト展開のみ）。",
                    policy4: "注：上記の契約に加えて、他の契約\n  上記は特定の状況に応じて考えることができます、\n  YFO開発チームに連絡して入手してください\n  明らかにする。",
                    stepVerification: "2段階認証",
                    authentication: "Google Authenticator、Authy、または任意の2FAアプリを介して2要素認証を有効にするQRコードをスキャンするか、オーセンティケーターキーを入力します",
                    authenticaorKey: "バリデーターキー",
                    generate: "[生成]をクリックします",
                    buy: "買う",
                    indicator: "索引",
                    tvl: "合計",
                    apy: "年利",
                    lock: "閉じ込める",
                    days: "空",
                    more: "もっと",
                    daily: "毎日の金利",
                    monthly: "月利",
                    yearly: "年利",
                    validNumber: "無効な番号",
                    insufficient: "残高不足です",
                    stakeAmount: "質権額",
                    max: "全て",
                    swap: "両替",
                    price: "価格",
                    legalDisclaimer: "法的放棄声明",
                    legalText: "この資料に記載されている情報は、投資アドバイス、財務アドバイス、取引アドバイス、またはその他の種類のアドバイスを構成するものではありません。資料の内容をそのように扱ってはなりません。この資料は情報提供のみを目的としており、（i）いかなる利益または株式に投資する、または売買する、あるいは投資または取引戦略に参加するための申し出または申し出の勧誘ではありません。会計、法律、税務に関するアドバイス、投資に関する推奨事項、または（iii）YFOトークンの公式声明を提供することを目的としています。情報の正確性または完全性、あるいはデジタル資産、金融商品、またはその他の市場または経済的措置の将来のパフォーマンスに関して、表明または保証は行われず、明示または黙示されていません。\n  \nYFOトークンチームは、暗号通貨を購入、販売、または保持することを推奨していません。投資を決定する前に、デューデリジェンスを実施し、ファイナンシャルアドバイザーに相談してください。\n  \nYFOを購入することにより、証券や投資を購入しないことに同意し、チームを無害に保ち、発生する可能性のある損失や税金について責任を負わないことに同意するものとします。また、チームがトークンを「現状有姿」で提示し、サポートやサービスを提供する必要がないことに同意するものとします。 YFOトークンとそのチームからのフォームを期待する必要はありません。\n  \nYFOはソーシャルネットワーキング用のコミュニティ主導の分散型ファイナンス（DeFi）トークンであり、登録されたデジタル通貨ではありませんが、チームは暗号通貨を政府が禁止している地域の市民はそれを購入しないことを強くお勧めします。特定の地域。購入する前に、必ず地域の法律および規制を遵守していることを確認してください。\n  \n$Pチームは、世界のさまざまな地域からの分散型の個人であり、世界に利益をもたらし、そのエコシステムを改善できる分散型アプリケーションを構築しています。\n  \n個人、企業、有能な団体から$Pチームに何に投資し、何に投資すべきでないかを尋ねるダイレクトメッセージが非常に多いため、私たちはオープンで透明性が高く、Defi資産のリスクが高いがYFOについてコミュニティにアドバイスしています。プロジェクトは高品質のプラットフォームを構築します。\n  \nチームからの財務アドバイスについて質問する人が増えているため、YFOチームは個人に財務ガイダンスやアドバイスを提供していません。また、DeFi資産に投資することで、投資を失うリスクがあります。\n  \n投資するときは常にあなた自身の研究をしてください。"
                }, "Türkçe": {
                    $P: "YFI BİR",
                    welcomeV2: "YFO Çiftliği 2.0",
                    welcomeText: "Düşük risk, çeşitlendirilmiş madencilik stratejisi",
                    launchApp: "Claim & Swap",
                    whitePaper: "Beyaz kağıt",
                    audit: "Dpanquan.com denetimi",
                    copyright: "2021 Copyright $P.",
                    reserved: "Telif hakkı saklıdır!",
                    dashboard: "Panel",
                    vaults: "tonozlar",
                    earn: "Madencilik",
                    lending: "Ödünç verme",
                    statistics: "İstatistikler",
                    governance: "yönetim",
                    wiki: "Wiki",
                    faqs: "ortak sorun",
                    settings: "Ayarlar",
                    connectWallet: "Cüzdanı Bağla",
                    disconnect: "Bağlantıyı kes",
                    search: "Arama...",
                    earnings: "Kazançlarınız",
                    pendingHarvest: "Bekleyen kazançlar",
                    harvest: "Hasat",
                    tvlText: "Toplam",
                    yfoPrice: "Mevcut YFO fiyatı",
                    totalBorrowed: "Toplam Ödünç Alınan",
                    circulation: "Sirkülasyon hacmi",
                    marketCap: "Piyasa Değeri",
                    provideLiquidity: "Likidite Sağlayın",
                    browserview: "Görünüm",
                    availableVaults: "Mevcut tonozlar",
                    sortBy: "sıralama",
                    hideBalances: "0 bakiye öğesini gizle",
                    pairAssets: "İşlem çifti",
                    get: "Al",
                    back: "Geri dön",
                    select: "Seç",
                    collateral: "teminat",
                    pledge: "Rehin",
                    exitPledge: "Çıkış Taahhüdü",
                    redeem: "Teklif (Ana Para + Faiz)",
                    retrieve: "Ana parayı al",
                    repay: "geri ödeme",
                    repayAll: "Tümünü geri öde",
                    supply: "Depozito",
                    borrow: "ödünç almak",
                    limit: "Sınır",
                    balance: "Denge",
                    totalSupply: "Toplam Arz Toplamı",
                    rewards: "ödül",
                    trading: "Ticaret",
                    approve: "Yetkilendirme",
                    claim: "Çekilme ödülü",
                    unable: "Durduruldu",
                    exit: "Çıkış",
                    withdraw: "Geri çekil",
                    withdrawAll: "Tümünü geri çek",
                    stake: "Rehin",
                    deposit: "Para yatırma",
                    depositAll: "Tümünü yatır",
                    deposited: "Yatırılan",
                    borrowed: "Ödünç alınmış",
                    available: "Müsait",
                    ConfirmFirst: "Hatırlatma: Lütfen para yatırmadan önce yetkilendirin",
                    loading: "Yükleniyor...",
                    netTip: "Ethereum ana ağı, lütfen cüzdanınıza geçin",
                    netDelayTip: "Ethereum ana ağı henüz açık değil",
                    feeTip: "Para çekme işleminde kârın %0,3'ü oranında bir ücret alınır, anaparaya zarar gelmez",
                    note: "Sor",
                    assets: "Varlıklar",
                    apyCalculations: "Yıllık faiz oranı hesaplama",
                    farmApr: "Tarım Verimi",
                    lpContract: "LP sözleşmesi",
                    all: "Tümü",
                    stablecoins: "Stabilcoin'ler",
                    others: "Diğer",
                    market: "Pazar",
                    depositMarket: "Mevduat Piyasası",
                    depositApy: "Mevduat oranı",
                    borrowMarket: "ödünç piyasası",
                    leftBorrow: "Kalan ödünç alınabilir miktar",
                    borrowApy: "borçlanma oranı",
                    borrowAvailiable: "Fazla ödünç alınabilir",
                    priceSource: "Fiyat Kaynağı",
                    yourDeposit: "Depozitonuz",
                    yourLoan: "Krediniz",
                    usedRatio: "Kullanılan oran",
                    enterSupplyAmount: "Lütfen depozito tutarını girin",
                    enterRedeemAmount: "Lütfen tutarı girin (anapara)",
                    enterRepayAmount: "Lütfen geri ödeme tutarını girin (anapara)",
                    enterBorrowAmount: "Lütfen kredi tutarını giriniz (en fazla havuz tutarının %80'i kadardır)",
                    marketDetails: "Pazar Ayrıntıları",
                    poolVolume: "havuz hacmi",
                    depositAmount: "Depozito miktarı",
                    borrowAmount: "Borç tutarı",
                    depositLimit: "Para yatırma limiti",
                    borrowLimit: "ödünç alma limiti",
                    reserveRatio: "rezerv oranı",
                    exchangeRate: "Döviz Kuru",
                    liquidationFine: "Tasfiye cezası",
                    maxPledgeRate: "Maksimum rehin oranı",
                    fundUtilization: "Fon Kullanımı",
                    marketLoanable: "Piyasa fazlası ödünç verilebilir",
                    totalBorrow: "Toplam Borç",
                    totalDeposit: "Toplam Para Yatırma",
                    operation: "İşlem",
                    farmContract: "Çiftlik Sözleşmesi",
                    vaultContract: "tonozlar Sözleşmesi",
                    myAddress: "Adresim",
                    totalDepositIn: "Toplam Para Yatırma",
                    currentEarning: "Cari Kazançlar",
                    staked: "Rehin verildi",
                    transaction: "İşlem",
                    pending: "İşlem kuyruğa alındı ​​ve paketlendi...",
                    confirm: "Onayla",
                    confirming: "Zincir içi işlem onayı bekleniyor",
                    confirmed: "Onaylandı",
                    cancel: "İptal",
                    canceled: "İptal edildi",
                    success: "İşlem başarılı oldu",
                    failed: "İşlem yürütme başarısız",
                    txFailed: "İşlem yürütme başarısız",
                    copied: "Kopyalama başarılı",
                    computePower: "Gerçek zamanlı bilgi işlem gücü ve Token veri parametreleri",
                    aboutWiki: "YFO Bilgi Giriş",
                    aboutDex: "$P vizyonu, birkaç merkezi olmayan finansal uygulama (Defi - Apps) oluşturmak ve ardından bu ürünleri tam teşekküllü projelere dönüştürmek ve böylece $P ekosisteminin değerini artırmaktır. Gerçek kullanım durumları ve basit kullanım yöntemleri olmayan birkaç merkezi olmayan finansal (Defi) ürünün kargaşasıyla, özellikle Ethereum blok zincirinin geniş bir şekilde anlaşılmasını gerektirdiğinden, Defi kullanıcıları için ürün kullanımı zor olmuştur. Diğer bir yaygın sorun, birçok Defi projesinin basit takas web siteleri oluşturarak ve ardından daha fazla geliştirmeyi durdurarak önerdiği yanlış değerdir. Bu, Defi takasının sunabileceği her şeymiş gibi görünmesini sağlar, ancak bu öyle değildir. $P projesi ve farklı ülkelerden merkezi olmayan ekibi, platformu etrafında birkaç Defi ürünü geliştirip inşa ederek sürdürülebilir bir ekosistem yaratmayı vaat ediyor ve bir Defi projesinin olması gereken nihai gerçek değerini garanti ediyor. $P, çeşitli Defi uygulamaları oluşturmayı amaçlayan topluluk odaklı bir blok zinciri projesidir. yaratıcı ve yıkıcı blok zinciri Defi fikirlerine sahip bir platform, dolayısıyla öykünmeye değer ilk son teknoloji Defi projesi haline geldi.\n  ",
                    aboutApp: "$P, hem $P projesinin $P ekibi hem de merkezi olmayan $P ürün kullanıcıları topluluğu tarafından kullanılmak üzere Ethereum üzerine inşa edilmiş birkaç Defi uygulamasından (Defi DApps) oluşan bir ekosistem öngörüyor. Bununla birlikte, $P Finance, topluluk ve kullanıcıları için $P ekosistemini geliştirmek için gerçek Defi değerleri üretmek amacıyla merkezi olmayan ürünler oluşturmak üzere düzenlenmiş, topluluk odaklı bir Defi projesidir.",
                    aboutBasis: "$P, bir yandan topluluğa, projeye ve kullanıcılara arzu edilen kazanımlar sağlarken diğer yandan biyosferini büyütmeye yardımcı olmak için bu Defi ürünlerini geliştirmeye, pazarlamaya ve piyasaya sürmeye yardımcı olacak geçici etkin bir ekip olarak hareket eden ekiple sistematik olarak yeni Defi ürünleri üretmeye kendini adamıştır.",
                    aboutMechanism: "$P ayrıca, paydaşlara kar payları (ödüller) olarak gelir dağıtmak amacıyla topluluğu tarafından yatırım yapılan Defi ürünlerini oluşturarak merkezi olmayan bir faizsiz finansal ekosistemi güçlendiren merkezi olmayan bir risk sermayesi (DVC) olarak da tanımlanabilir.",
                    aboutCommunity: "$P Ekosistemi, çeşitli benzersiz merkezi olmayan finans ürünlerine ev sahipliği yapacak. $P ürünleri, merkezi olmayan finansın gerçek anlamını yeniden yaratma arayışında, simgesi YFONE Simgesi ile bağlantılı olacak.",
                    aboutDefi: "$P ürünleri, merkezi olmayan finansın gerçek anlamını yeniden yaratma arayışında, simgesi YFONE Token'a bağlanacak.\nYFONE jetonunun ana kullanım durumu, sahiplerine bu ürünlerden elde edilen gelir üzerinde hak talebinde bulunacak her ürün için tek yönetişim jetonu olacaktır.\n$P ekibi piyasayı kurarken YFONE tokenlerini stake etmek için bir platform olacak ve daha sonra, sahipleri sadece token tutmaktan büyük fayda sağlayacak. Ortaklarla çatallaşarak ve sıfırdan inşa ederek tek bir ekosisteme bağlı 1000'den fazla merkezi olmayan uygulama hayal edin, hepsi YFO Token ile entegre. Bu ekosistem son derece büyük olacak ve sürekli büyüyecek Tamamen merkezi olmayan bir sistem ve sürekli büyüyor, Defi'nin gerçek anlamı bu.\n  ",
                    aboutVaults: "Makineli tüfek havuzu, hash oranına, madencilik zorluğuna ve ticaret platformunun mevcut fiyatına göre en karlı madeni parayı belirler. Sadece bir madeni para çıkarabilen sıradan madencilik havuzlarından farklıdır. Bir madeni para uzun süre kazıldıktan sonra zorluk artacak ve madencilik havuzu başka bir madeni paraya geçecektir. YFO platformu, en yüksek karı elde etmek için piyasada görünen madencilik havuzlarına göre gerçek zamanlı olarak madencilik havuzları ekleyecektir. Ve esas olarak, en yüksek karı elde etmek için her yarım saatte bir yeniden yatırım yapmak, sözleşmenin otomatik işlevi aracılığıyladır.",
                    aboutLending: "DeFi dünyasında, merkezi olmayan borç verme sistemi son derece önemli bir yol ve tüm DeFi sisteminin temel taşı sistemidir.Finansal sistemi gerçek dünyada simüle edebilir, farklı kullanıcıların finansal ihtiyaçlarını anlayabilir ve kullanıcılara karşılıklı finansman sağlayabilir. Platform; homojenizasyon token standardını karşılayan tüm şifreli varlıkların marjinal maliyet olmadan ödünç verilmesini destekleyebilir ve piyasanın kredi verme oranını piyasa arz ve talebine göre otomatik olarak hesaplayıp ayarlayabilir. Bu nedenle, YFO ekosistemi V2 versiyonunda da önemli işlevler yapıyor.Ödünç vermede platform öz bakım belirteçleri mevcut YFO ve OBS'dir.",
                    aboutText: "$P vizyonu böylece $P ekosistemin değerini artırarak, birden fazla finansal uygulamalar (Defi-Uygulamalar) merkezi olmayan oluşturmak ve sonra olgun projelerine bu ürünleri geliştirmektir. Bazı merkezi olmayan finans (Defi) ürünleri pratik kullanım durumları ve basit kullanım yöntemlerine sahip olduğundan, ürünlerin kullanımı, Ethereum blockchain geniş bir anlayış gerektirir, özellikle çünkü Defi kullanıcıları için zor olmuştur. Başka bir ortak sorun daha da gelişmesini durdurma ardından basit bir değişim site oluşturma ve birçok Defi projeleri gündeme yanlış değerdir. Defi alışverişini sağlamak mümkün görülmemektedir yapar, ama bu durum böyle değil. $P projesi ve farklı ülkelerden merkezi olmayan ekipleri, platformu etrafında birden fazla Defi ürünü geliştirip inşa ederek sürdürülebilir bir ekosistem yaratmayı ve bir Defi projesinin nihai gerçek değerini garanti etmeyi vaat ediyor. $P, platformunda yenilikçi ve yıkıcı blok zinciri Defi konseptleri ile birden fazla Defi uygulaması oluşturmayı ve böylece öykünmeye değer ilk sınır Defi projesi olmayı hedefleyen topluluk odaklı bir blok zinciri projesidir.",
                    aboutECO: "$P, $P projesinin $P ekibi ve merkezi olmayan $P ürün kullanıcıları topluluğu tarafından kullanılmak üzere Ethereum üzerine inşa edilmiş birden fazla Defi uygulamasından (Defi DApps) oluşan bir ekosistem öngörüyor. Bununla birlikte, $P Finance, topluluğun ve kullanıcılarının $P ekosistemini geliştirmek için gerçek Defi değeri üretmeyi amaçlayan merkezi olmayan ürünler oluşturmayı amaçlayan topluluk odaklı bir Defi projesidir. $P sistematik olarak yeni Defi ürünleri üretmeye kararlıdır.Geçici bir aktivasyon ekibi olarak $P, topluluklar, projeler ve kullanıcılar için ideal faydalar sağlarken biyosferini geliştirmeye yardımcı olmak için bu Defi ürünlerinin geliştirilmesine, pazarlanmasına ve piyasaya sürülmesine yardımcı olacaktır. $P'nin, Defi ürünleri oluşturarak merkezi olmayan, faizsiz bir finansal ekosistemi güçlendiren merkezi olmayan bir risk sermayesi (DVC) olduğu da söylenebilir.",
                    overview: "genel bakış",
                    w1: "Vault nedir?",
                    w2: "YFO merkezi olmayan kredilendirme?",
                    w3: "Ekibinize katılmak ve bu harika projeye katkıda bulunmak için hangi becerilere ihtiyacım var?",
                    w4: "$P şu anda ne tür kripto para birimini kabul ediyor?",
                    w5: "$P'a nasıl yatırım yapabilir ve kar edebilirim?",
                    w6: "V2 sürümü neden yalnızca Binance ekolojik zincirini kullanabilir?",
                    w7: "$P ne anlama geliyor?",
                    r1: 'Makineli tüfek havuzu, gerçek zamanlı madencilik gelir düzeyine göre aynı algoritmanın farklı para birimlerinin madenciliği ve madencilik için hesaplama gücünün otomatik olarak daha yüksek verimli bir para birimine çevrilmesi sürecidir.Değeri için daha fazla değer yaratmaktır. kullanıcılar için tek bir para biriminden daha yüksek kazanç elde edilir. Adının "makineli tüfek havuzu" olmasının nedeni, bu tür bir operasyonun makineli tüfek ateşlemeye benzer, sürekli geçiş yapmasıdır.',
                    r11: "Makineli tüfek havuzunun özelliklerine göre, makineli tüfek havuzunun çalışması, hesaplama gücünü bir madencilik havuzunda yoğunlaştırmaktır.Hangi madeni paranın çıkarılacağını belirtmez, ancak aynı madencilik algoritmasında doğrudan birkaç proje arar. hesaplama gücü hangi projenin kârı daha yüksekse o projeye kazmak için giderseniz bu projenin kârı düşer ve sonunda en iyi kârı elde etmek için başka bir projeye geçersiniz.",
                    r12: "Makineli tüfek havuzunun avantajı, kullanıcının gelirini en üst düzeye çıkarır: gelir, her yatırımcının ilgi odağıdır. Çoğu insanın DeFi projelerine yatırım yapmayı seçmesinin nedeni, getirilerinin nispeten yüksek olması ve DeFi makineli tüfek havuzunun madencilik gelirini en üst düzeye çıkarmamıza yardımcı olabilmesidir. Bunun nedeni, DeFi makineli tüfek havuzunun özelliğinin, gerçek zamanlı madencilik geliri düzeyine dayalı olarak likit madencilik için fonları daha yüksek verimli DeFi projelerine kaydırması ve yatırımcılarımıza daha yüksek madencilik geliri sağlamasıdır.",
                    r13: "YFO platformunun DeFi makineli tüfek havuzu, yalnızca gerçek zamanlı geçiş yoluyla gelirimizi artırmakla kalmaz, aynı zamanda gelirimizi en üst düzeye çıkarmak için fonları etkin bir şekilde kullanmak için yarım saatlik bir bileşik faiz kuralı da getirir. (Saatlik bileşik faiz yarım saatte hesaplanır ve her yarım saatlik yatırım anaparamız ve faizimiz bir sonraki saatin yatırım anaparasına dahil edilir ve her yarım saatte bir bileşik faizden yararlanılır.)",
                    r14: "Seçilmiş projeler: Piyasada göz kamaştırıcı bir dizi likit madencilik projesi bulunmaktadır ve kullanıcılarımız için en zor kısım projeyi seçmektir. Güvenli, güvenilir ve son derece karlı bir proje seçmek çok zaman ve enerji gerektirir. Ayrıca, piyasadaki hızlı değişimler nedeniyle, yeni bir proje üzerinde çalıştığımızda ve başlamaya hazır olduğumuzda, fonların daha yüksek getiri ile bir sonraki yeni projeye aktarılması, bu da belirli bir sonuca neden olacak şekilde kolayca gerçekleşmektedir. gecikme.",
                    r15: "Makineli tüfek havuzunun avantajı, varlık tarama ve konfigürasyon işlevi sağlayabilmesidir.Her proje, güvenliğini ve faydalarını belirli bir ölçüde değerlendirecektir. YFO platformunda, çeşitli projeler üzerinde araştırma yapacak, yüksek verimli DeFi projeleri seçecek ve bizim için mümkün olan maksimum kârı elde etmek için gerçek zamanlı olarak pozisyonları ayarlayacak profesyoneller bulunur.",
                    r16: "Sürekli sözleşme arama ihtiyacı nedeniyle, platform gelirin %0,3'ü kadar bir ücret talep edecektir.Amaç, DeFi madenciliğinde her adımın 1-2 sözleşme görüşmesi gerektirmesidir.Zaman başına maliyet birkaç dolardan birkaç dolara kadar değişir. onlarca dolar. , Sözleşmenin tamamı her yarım saatte bir çağrılır. GAS ücretine ek olarak, bakiye zaman zaman YFO ve OBS Token'ı geri satın almak için kullanılacaktır.",
                    r2: "Mevduat sertifikası belirteçleri sağlayarak, aynı varlık farklı DeFi protokollerinde taşınır ve yeniden kullanılır, böylece finansal piyasada fon kullanımının verimliliği birkaç kez iyileştirilir; ayrıca diğer DeFi protokolleriyle esnek bir şekilde birleştirilebilir, böylece otomatik işlemi gerçekleştirin çok seviyeli, çok seviyeli, karmaşık ve iç içe finansal işlemler.",
                    r21: "Şu anda, DeFi'deki her türlü kredi platformu temelde ipotek kredisi modundadır.Genel tercih, çeşitli dijital para birimlerini sabit değerli mallara dönüştüren rehinci modelidir ve ipotek değeri 100 olan mallar likit para birimi alır. 75'lik bir fiyat. Para birimi teminatı yoluyla para elde etme eylemi çok aptalca görünüyor, ancak yüksek ipotek faiz oranı ve DeFi piyasasındaki devasa erken aşama getirisi daha yüksek piyasa fonlarını çekiyor.",
                    r22: "DeFi şu anda ipotekleri takas ve takas yoluyla çözüyor ve marj sistemi aracılığıyla kaldıraçları çözüyor ve sonunda kredi türetme işlemine benzer bir işlem gerçekleştiriyor. Binance Chain'de örnek olarak Bitcoin ve Ethereum'u alın. Örneğin, Ethereum karşılığında Bitcoin'i rehin vermek istiyorsanız, şunları yapabilirsiniz: Bitcoin'i belirli bir adreste kilitleyin.Şu anda, bu Bitcoin jetonunu temsil eden bir BTC Binance Chain'de oluşturulacak ve ardından Binance Chain'de kullanabilirsiniz. Akıllı sözleşme, bu BTC'yi ipotek eder ve ilgili Token'i oluşturur; ardından Token ile belirli bir miktarda ETH satın alır ve ardından bu ETH'ye karşılık gelen teminat BTC'yi serbest bırakır ve işlem sona erer. Tüm süreç, insan katılımı olmadan akıllı sözleşmelerle yapılır. Ve vadesinden sonra geri ödemezseniz, teminatlı Bitcoin'iniz gitmiş olacak. Akıllı sözleşme süresi dolduğunda yürütülecek ve taahhüt ettiğim bitcoin varsayılan işleme tabi olacaktır. Bu, eşit ipotek elde edebilir, ancak Defi'nin cazibesi büyümede yatar, bu nedenle aşırı ipotek gereklidir. Başka bir deyişle, spekülasyon için 1 Bitcoin ipotek edebileceğimi, geçici olarak 2 hatta 10 Bitcoin ödünç alabileceğimi umuyorum.",
                    r3: "$P küresel bir ekiptir, herkes $P topluluğuna katılabilir, toplulukta daha fazlasını umuyoruz\n  İnsanlar $P ailesine katılır.Bir YFO Token'a sahip olduğunuzda, tabii ki ekibimize katılsanız bile\n  Topluluk operatörleri, pazarlama personeli, teknik geri bildirim personeli vb. olarak hizmet verebilmemiz için katılmak için daha fazla kişiye ihtiyacımız var.\n  Rol, belirli bir yeteneğiniz varsa, lütfen topluluk yöneticimizle iletişime geçin.",
                    r4: "Şu anda ana para birimleri ETH, BNB, USDT, vb. ve YFO, OBS Jetonlarını kabul ediyor",
                    r5: "Platform, makineli tüfek havuzları (kasalar), borç verme, tek para birimi havuzları ve diğer yöntemleri sağlar.Kullanıcıların web sitesinde gerekli olan Token'ı kendileri takip etmesi gerekir.\n  Kind belirli bir kar elde edecek.",
                    r6: "Makineli tüfek havuzu her 30 dakikada bir yeniden yatırılır ve gaz ücreti çok yüksektir.Rehin depozitosu yeterli değilse, kullanıcının fonları kaybolacaktır. Bu nedenle sadece ilk aşamada BSC ekolojik zincirini başlattık. Ethereum versiyonu, TVL versiyonunun YFO-V2 versiyonunun BSC versiyonunun, Ethereum versiyonu açılmadan önce 5 milyon ABD dolarından fazla olmasını gerektirir.Belirli bir zamanda yeniden yatırım yapıldığında, miktar belirli bir miktara ulaştığında, kullanıcının platformda olması garanti edilebilir Yeniden yatırım miktarı en fazla karı alacaktır. Bu nedenle ilk etapta sadece Binance ekolojik zincirinin ürün alanını açıyoruz (tabii ki geliştirilmiş ve her zaman güncellemeleri beklemektedir. Ethereum'un kodu Github üzerinde güncellenmiştir).",
                    r7: "$P'nin vizyonu, birkaç merkezi olmayan finansal uygulama (Defi-Apps) oluşturmak ve ardından bu ürünleri geliştirmek ve dönüştürmektir.\n  Olgun projeler, $P ekosisteminin değerini artırır. $P projesi ve merkezi olmayan ekibi farklı ülkelerden geliyor.\n  Birden fazla sistemin geliştirilmesi ve inşası yoluyla sürdürülebilir bir Defi ekosistem ürünü yaratmayı taahhüt eden ülkeler\n  Ve Defi projesinin ne olması gerektiğine dair nihai gerçek değeri garanti edin. $P, topluluk odaklı bir blok zinciri projesidir.\n  Yaratıcı ve yıkıcı blok zinciri Defi platform fikri temelinde birden fazla Defi uygulaması oluşturun, böylece\n  İlk sınır Defi projesidir.",
                    countactUs: "Bize Ulaşın",
                    cTitle: "$P Group, dijital ekonomide lider bir şirkettir. Blok zinciri alanında temel teknoloji atılımına ve blok zinciri DEFI endüstrisinin yukarı ve aşağı akışına odaklanan blok zinciri teknolojisi ve endüstrisinin entegrasyonuna adanmış olan geliştirme, endüstriyel blok zinciri, dijital varlık işlemleri, dijital varlık güvenli cüzdanları, dijital ekonomik araştırmayı içerir. ve ademi merkeziyetçilik Huahua ve diğer işletmeler küresel bir dijital ekonomi endüstriyel ekosistemi oluşturur.\n\n$P, yüzlerce ülke ve bölgede on milyonlarca kullanıcı için güvenli ve güvenilir değer ağ hizmetleri sağlayarak merkezi olmayan toplum hizmetleri uygulamasına bağlı kalmaktadır.",
                    officialListing: "Resmi ortak ajans",
                    myWallet: "çantam",
                    security: "Emniyet",
                    securityPolicy: "güvenlik stratejisi",
                    policy1: "Bu depodaki güvenlik açıklarını nasıl güvenli bir şekilde bildireceğinizi görün",
                    securityAdvisories: "Güvenlik tavsiyesi",
                    policy2: "Bu depo için güvenlik önerilerini görüntüleyin",
                    scope: "dürbün",
                    policy3: "Hata ödül programının kapsamı akıllı sözleşmeleri kapsar\n  YFO ekosisteminde kullanın-Solidity veya\n  Sözleşme klasöründe akıllı sözleşme\n  Dahil olmak üzere anlaşmayı geri almaya istekli ana şube\n  Hala aktif kullanımın geçmiş dağıtımlarını görüyoruz\n  Herhangi bir hariç, YFI ile ilgili Ethereum ana ağı\n  Yalnızca test yetenekleri için sözleşmeler (dahil\n  Yalnızca test dağıtımı).",
                    policy4: "Not: Yukarıda belirtilen sözleşmelere ek olarak, diğer sözleşmeler\n  Yukarıdakiler özel duruma göre düşünülebilir,\n  Lütfen almak için YFO geliştirme ekibiyle iletişime geçin.\n  açıklamak.",
                    stepVerification: "İki adımlı doğrulama",
                    authentication: "Google Authenticator, Authy veya herhangi bir 2FA uygulaması aracılığıyla 2 faktörlü kimlik doğrulamayı etkinleştirin QR kodunu tarayın veya kimlik doğrulama anahtarını girin",
                    authenticaorKey: "Doğrulayıcı anahtarı",
                    generate: "Oluştur'u tıklayın",
                    buy: "Satın almak",
                    indicator: "dizin",
                    tvl: "Toplami",
                    apy: "Yıllık faiz oranı",
                    lock: "Kilitlemek",
                    days: "gökyüzü",
                    more: "Daha",
                    daily: "Günlük faiz oranı",
                    monthly: "Aylık faiz oranı",
                    yearly: "Yıllıklandırılmış faiz oranı",
                    validNumber: "Geçersiz numara",
                    insufficient: "Yetersiz bakiye",
                    stakeAmount: "rehin tutarı",
                    max: "tüm",
                    swap: "değişme",
                    price: "fiyat",
                    legalDisclaimer: "Yasal Sorumluluk Reddi",
                    legalText: "Les informations fournies dans ce document ne constituent pas des conseils en investissement, des conseils financiers, des conseils commerciaux ou tout autre type de conseil. Vous ne devez pas traiter le contenu du matériel comme tel. Ce matériel est uniquement à des fins d'information et n'est pas (i) une offre, ou la sollicitation d'une offre, d'investir dans, ou d'acheter ou de vendre, des intérêts ou des actions, ou de participer à une stratégie d'investissement ou de négociation, (ii) destiné à fournir des conseils comptables, juridiques ou fiscaux, ou des recommandations d'investissement, ou (iii) une déclaration officielle de YFO Token. Aucune représentation ou garantie n'est faite, expresse ou implicite, en ce qui concerne l'exactitude ou l'exhaustivité des informations ou les performances futures de tout actif numérique, instrument financier ou autre mesure de marché ou économique.\n  \nL'équipe YFO Token ne recommande pas que vous achetiez, vendiez ou déteniez une crypto-monnaie. Faites preuve de diligence raisonnable et consultez votre conseiller financier avant de prendre toute décision d'investissement.\n  \nEn achetant YFO, vous convenez que vous n'achetez pas un titre ou un investissement, et vous acceptez de dégager l'équipe de toute responsabilité et de ne pas être responsable des pertes ou des impôts que vous pourriez encourir. Vous acceptez également que l'équipe présente le jeton \"tel quel\" et n'est pas tenue de fournir une assistance ou des services. Vous ne devriez avoir aucune attente de la part de YFO Token et de son équipe.\n  \nBien que YFO soit un jeton de finance décentralisée (DeFi) communautaire pour les réseaux sociaux et non une monnaie numérique enregistrée, l'équipe recommande fortement aux citoyens des zones interdites par le gouvernement de ne pas l'acheter car l'équipe ne peut pas garantir le respect des réglementations établies au sein de certains territoires. Assurez-vous toujours que vous vous conformez à vos lois et réglementations locales avant d'effectuer tout achat.\n  \nL'équipe $P est composée d'individus décentralisés de différentes parties du monde qui créent des applications décentralisées qui peuvent profiter au monde et également améliorer son écosystème.\n  \nAvec autant de messages directs d'individus, d'entreprises et d'organismes compétents demandant à l'équipe $P sur quoi investir et sur quoi ils ne devraient pas investir, nous sommes ouverts et transparents et conseillons notre communauté sur le risque élevé des actifs Defi mais le YFO les projets construiront une plate-forme de qualité.\n  \nEn raison du plus grand nombre de personnes demandant des conseils financiers à l'équipe, l'équipe YFO ne fournit de conseils ou de conseils financiers à personne, et en investissant dans l'actif DeFi, vous pouvez risquer de perdre vos investissements.\n  \nFaites toujours vos propres recherches lorsque vous investissez."
                }
            }, silentTranslationWarn: !0
        })
    }, "12d8": function (e, t, n) {
        "use strict";
        n("ae70")
    }, 13: function (e, t) {
    }, "13a4": function (e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFEAAABCCAYAAAAvzToDAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAXuSURBVHgB7VxpTttaGP0IBCGIeEFilJBeWEHpCl5YQWEF0BVAV9CwggcrIG8H6QpwV0C6gvj9YggoqQT5QRh6TnpducGOrx3P6ZGsTNdOfO433/tlSnKEVqtVnp+frxYKhXevr6+VqampMh7L+MjEc/Pl5eUbjubGxoYpIWJKcoDb29tdkHWIo6p5igGi68vLy/9JAHCy5ubmytZkZJrEdrtdBXFneFqRYDBBZk2XTCXpRzjn8Onp6b1FYsHtBMzuvqQUvJnr6+s6CDyX4AQSFah3/ebm5uzy8rLi8X21UqnUgln4jO9t2E2CoyTiogd4OHt+ft7BYENSBN7s9PT0uOQ5wVT3a/IFiVtcXNwHybvDZgLjtnRIbKkf2cUJ78M2xEERIYEWTBwNHFUc204DQGhtbW3t2P7eGxJBIE++sF/YPkNJAr+Nv2tbEgIINEHg1vD7Tjbxn6HXg9kfZTPiAG2SJEwgVHvH6bM3kgiPd+4SKpiPj497m5ubTYkZSo1bkhAsAu3aaHlqPG06SWLZ5VqV2dnZ86urqyOJGSDwsyQHwyKQpu7u7u6QgrawsNCBp/4L6t1wsomvXleFjTzGRWsSA5KUQkogiGrgoBnZVtnPr88s+1iQAKBkgOxY7OTMzMyhJASQV8HDEc3bMIF2+xiIRIUqHU4MQXlVUgQn++hEoin60Ir4g6LT6bCAkJhHHoYTgcQbEiHCQbzvAaTyAkTWJEQgP009gYSTJAYNYcrKVrbCUnGWsiQdMHq9nmvm5kTiVxkPlooPyBxHzXGdNJBYX11d3dna2uq6DXhD4srKioEH1xN8YEAmwxNlM6uSQbCY6zWm4HLiiYQL2sxzSqdFKCN+r5NQtwtjMiOHYxWHXrHf7zPAjVqdDBxNGO2vnHGozW/2OOl0j8DvqkE7j0eNmXF6c2lpqYsb+IQbOJNoUeWBHzpIJSGlfCCRlEBTwjErkWPG7QN4ojoqJ7zBuCvcqQlrCGiJ50SOzFhQcBhUKWSCAbtseo6xv6AtZMBshSVU62KxyBxxYonUkcTfHMuQIedC0Beu02J5sIvsgQs0sZfBkgaEqAJh+n/UGK1SGOxil2mPpMxexQFEDJ7Lylq5syoDTRyBomnGnByLIX8wgNI+TziR+EX+YABopaEzLsrcOfPAwpxWMSau3DmL6OqubDqSiHWNU5lwaYQ9NHTHOpLIIBsrep9kgsFVPt2xrmkfc+dJVuuHhwdtBzsyd4ZaswQ0cSkft86NqmQPYySJVu6s6+rzAqS+dT/jtXfKtttt5s41yTncdn6NgvbiPau7kMgd3Sg+q8D9+fYDvnZAMBDnLMFzf8yrirNyJT6hpc7WopLd2NraHfbxxbuSD3B59KP4hBaJauGqIznH8F5sXWipM7103j00nWbQLdV+bOKx5BRqn02gxiDCj3c28prBcG15nI39vjqqaBtRHrpQmx/zAoN7bWQM+ApxlG3ck/xUeFho8e2Nh+F7p6za6sGZyzyRsINjqbGFQNuNSSQ7rTKevZysr6+fSggIvGebM6g2f9clY+Dko9QVWrQRSqsuF/1RNvs3C5nLqG3DQRFqv7PaQfEBzmdXbVhPy3ZhC5E0fEbaNK7y65MEdpY5gY5wZ3gPZBiIjESl4mc+/lIgSkRGIDFOM5Ar2BEKAi8mgUAiVElUHftsZqxIChCFE3HC2CRabf4w2Nx2V5GUAAQ2QeBeHM3ugUgkcaVSiV2X+8oTp80Ln0B9Y1s39yTR+g8YhC5VvHzn1LaaFlB9UWk/QMVp3IYmXxiQyEZw/teL/DTCPEhQ2fYPR1nACbMQP+vFYeGXJKpAmU7hQLIFQ/WaxCp9drxR5wyRmTh5Flxtoo1M5sNpUunUkGdB17HsInjeTzB4Zutao9frnSZh87zgK8RR/S1VEPpBERqVhJIoZhiNYrHY8GqBSBpjBdv8ixME2dtQ+0HoE7ByY/XxkbQmuxfu7++/pVHi3BBJAQILWn+Lyl5A8iBcUh91QXi33+9/h4R1ut3u9yyR5YYfvs42wOPolJ0AAAAASUVORK5CYII="
    }, 14: function (e, t) {
    }, 15: function (e, t) {
    }, 16: function (e, t) {
    }, 17: function (e, t) {
    }, 1797: function (e, t, n) {
        (t = n("24fb")(!1)).push([e.i, ".l-overlay[data-v-01c8de16]{width:100%;height:100%;top:0;left:0;opacity:0;background:rgba(0,0,0,.5);transition:all .3s}.l-overlay[data-v-01c8de16],.l-overlay .l-modal[data-v-01c8de16]{z-index:10000;position:fixed;visibility:hidden}.l-overlay .l-modal[data-v-01c8de16]{top:50%;left:50%;width:80%;min-width:150px;max-width:350px;height:auto;border-radius:10px;-webkit-backface-visibility:hidden;backface-visibility:hidden;transform:translateX(-50%) translateY(-50%)}.l-overlay .l-modal .d-content[data-v-01c8de16]{position:relative;background-color:var(--grey-white);border-radius:10px;margin:0 auto}.l-overlay .l-modal .d-content .modal-header[data-v-01c8de16]{position:relative;width:100%;height:50px;line-height:50px;border-radius:10px 10px 0 0;color:var(--purple);padding:0 15px}.l-overlay .l-modal .d-content .modal-header .header-close[data-v-01c8de16]{cursor:pointer;padding:0 15px}.l-overlay .l-modal .d-content .place-center[data-v-01c8de16]{text-align:center}.l-overlay .l-modal .d-content .place-left[data-v-01c8de16]{text-align:left}.l-overlay .l-modal .d-content .place-right[data-v-01c8de16]{text-align:right}.l-overlay .l-modal .d-content .bottom-border[data-v-01c8de16]{border-bottom:solid 1px var(--purple)}.l-overlay .l-modal .d-content .modal-body[data-v-01c8de16]{width:100%;height:auto;padding:20px 15px;color:#b6c2c9}.l-overlay .l-modal .d-content .modal-body .loading-cover[data-v-01c8de16]{margin:auto;padding:5px;width:70px;height:70px;background-color:var(--purple);border-radius:50%}.l-overlay .l-modal .d-content .modal-body .loading-cover .loading-css[data-v-01c8de16]{width:60px;height:60px;margin-bottom:20px;display:inline-block;border:3px solid var(--white);border-top:3px solid var(--purple);border-radius:50%}.l-overlay .l-modal .d-content .modal-body .loading-cover .loading-stop[data-v-01c8de16]{border-top:3px solid var(--purple);border:3px solid var(--purple)}@-webkit-keyframes loading-360-data-v-01c8de16{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes loading-360-data-v-01c8de16{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.l-overlay .l-modal .d-content .modal-body .loading-cover .loading[data-v-01c8de16]{-webkit-animation:loading-360-data-v-01c8de16 .8s linear infinite;animation:loading-360-data-v-01c8de16 .8s linear infinite}.l-overlay .l-modal .d-content .modal-body .loading-text[data-v-01c8de16]{padding-top:25px;word-break:break-all;word-wrap:break-word}.l-overlay .l-effect .d-content[data-v-01c8de16]{opacity:0;transform:scale(.7);-webkit-transform:scale(.7);-moz-transform:scale(.7);-ms-transform:scale(.7);transition:all .3s}.l-overlay .d-show[data-v-01c8de16]{visibility:visible}.l-overlay .d-show .d-content[data-v-01c8de16]{opacity:1;transform:scale(1);-webkit-transform:scale(1);-moz-transform:scale(1);-ms-transform:scale(1)}.overlay-effect[data-v-01c8de16]{opacity:1;visibility:visible}", ""]), e.exports = t
    }, 18: function (e, t) {
    }, 19: function (e, t) {
    }, 2: function (e, t) {
    }, 20: function (e, t) {
    }, "20bf": function (e, t, n) {
        var a = n("d251");
        a.__esModule && (a = a.default), "string" == typeof a && (a = [[e.i, a, ""]]), a.locals && (e.exports = a.locals), (0, n("499e").default)("e3172c8e", a, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    }, 21: function (e, t) {
    }, 2141: function (e, t, n) {
        var a = n("cf49");
        a.__esModule && (a = a.default), "string" == typeof a && (a = [[e.i, a, ""]]), a.locals && (e.exports = a.locals), (0, n("499e").default)("84c09a44", a, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    }, 22: function (e, t) {
    }, 2453: function (e, t, n) {
        (t = n("24fb")(!1)).push([e.i, ".md-overlay[data-v-995ee590]{z-index:3000;position:fixed;width:100%;height:100%;visibility:hidden;top:0;left:0;opacity:0;background:rgba(0,0,0,.5);transition:all .3s}.overlay-effect[data-v-995ee590]{opacity:1;visibility:visible}.md-modal[data-v-995ee590]{z-index:3001;position:fixed;top:50%;left:50%;width:80%;min-width:150px;max-width:350px;height:auto;border-radius:10px;visibility:hidden;background-color:#302c2c;-webkit-backface-visibility:hidden;backface-visibility:hidden;transform:translateX(-50%) translateY(-50%)}.wallet_item[data-v-995ee590]{cursor:pointer;width:auto;display:flex;justify-content:flex-start;align-items:center;border-radius:10px}.wallet_item .select-cover[data-v-995ee590]{padding:10px;margin:auto}.wallet_item[data-v-995ee590]:hover{background-color:var(--light-grey)}", ""]), e.exports = t
    }, 2467: function (e, t, n) {
        "use strict";
        n("2141")
    }, "264b": function (e, t, n) {
        var a = n("24fb"), i = n("1de5"), s = n("a350");
        t = a(!1);
        var r = i(s);
        t.push([e.i, ".home[data-v-795c100b]{width:100%;height:100%;background-image:url(" + r + ");background-repeat:no-repeat;background-position:50%;background-size:auto 100%}@media only screen and (max-width:750px){.home[data-v-795c100b]{background-size:90%}}", ""]), e.exports = t
    }, 2735: function (e, t, n) {
        "use strict";
        n("74ac")
    }, "282e": function (e, t, n) {
        (t = n("24fb")(!1)).push([e.i, "", ""]), e.exports = t
    }, "2a68": function (e, t, n) {
        "use strict";
        n.r(t), n.d(t, "delay", (function () {
            return s
        })), n.d(t, "convertStringToHex", (function () {
            return r
        })), n.d(t, "sanitizeHex", (function () {
            return o
        })), n.d(t, "getUrlKey", (function () {
            return l
        })), n.d(t, "toNumberStr", (function () {
            return p
        })), n.d(t, "exponentiatedBy", (function () {
            return u
        })), n.d(t, "decimalPlaces", (function () {
            return d
        })), n.d(t, "plus", (function () {
            return y
        })), n.d(t, "minus", (function () {
            return c
        })), n.d(t, "multipliedBy", (function () {
            return m
        })), n.d(t, "dividedBy", (function () {
            return f
        })), n.d(t, "toFormat", (function () {
            return b
        })), n.d(t, "toThreeFilter", (function () {
            return A
        })), n.d(t, "bigNumberFormat", (function () {
            return g
        })), n.d(t, "greaterThan", (function () {
            return T
        })), n.d(t, "smallerThan", (function () {
            return h
        })), n.d(t, "compareAscend", (function () {
            return v
        })), n.d(t, "compareDescend", (function () {
            return w
        })), n.d(t, "countdown", (function () {
            return k
        })), n.d(t, "inputTime", (function () {
            return x
        })), n.d(t, "checkTime", (function () {
            return B
        })), n("d3b7"), n("25f0"), n("ac1f"), n("5319"), n("4d63"), n("b680"), n("a9e3"), n("1276");
        var a = n("901e"), i = n.n(a), s = function (e) {
            return new Promise((function (t) {
                return setTimeout(t, e)
            }))
        };

        function r(e) {
            return new i.a("".concat(e)).toString(16)
        }

        function o(e) {
            return "" === (e = "0x" === e.substring(0, 2) ? e.substring(2) : e) ? "" : "0x" + (e = e.length % 2 != 0 ? "0" + e : e)
        }

        function l(e, t) {
            return decodeURIComponent((new RegExp("[?|&]" + e + "=([^&;]+?)(&|#|;|$)").exec(t) || [, ""])[1].replace(/\+/g, "%20")) || ""
        }

        function p(e) {
            if (/^(\d+(?:\.\d+)?)(e)([\-]?\d+)$/.test(e)) {
                var t = /^(\d{1,}(?:,\d{3})*\.(?:0*[1-9]+)?)(0*)?$/.exec(e.toFixed(18));
                return t ? t[1] : e.toFixed(18)
            }
            return "" + e
        }

        function u(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            return !e || isNaN(Number(e)) ? e : (e = new i.a(e)).exponentiatedBy(t).toString()
        }

        function d(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
            return !e || new i.a(e).isNaN() ? e : (e = new i.a(e), (e = f(e = parseInt(m(e, u(10, t))), u(10, t))).toString())
        }

        function y(e, t) {
            return e = new i.a(e), t = new i.a(t), e.isNaN() ? e : t.isNaN() ? t : e.plus(t).toString()
        }

        function c(e, t) {
            return e = new i.a(e), t = new i.a(t), e.isNaN() ? e : t.isNaN() ? t : e.minus(t).toString()
        }

        function m(e, t) {
            return e = new i.a(e), t = new i.a(t), e.isNaN() ? e : t.isNaN() ? t : e.multipliedBy(t).toString()
        }

        function f(e, t) {
            return 0 === t ? t : (e = new i.a(e), t = new i.a(t), e.isNaN() ? e : t.isNaN() ? t : e.dividedBy(t).toString())
        }

        function b(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
            if (!e || isNaN(Number(e))) return e;
            i.a.config({
                FORMAT: {
                    prefix: "",
                    decimalSeparator: ".",
                    groupSeparator: ",",
                    groupSize: 3,
                    secondaryGroupSize: 0,
                    fractionGroupSeparator: " ",
                    fractionGroupSize: 0,
                    suffix: ""
                }
            });
            var n = i()(e).toFormat(t).split("."), a = n[0] || "";
            return n[1], a + (n[1] ? "." + n[1] : "")
        }

        function A(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
                n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
            return e && Number(e) && !isNaN(Number(e)) ? Number(Number(e).toFixed(t)).toString().replace(/^-?\d+/g, (function (e) {
                return e.replace(/(?=(?!\b)(\d{3})+$)/g, ",")
            })) : n ? "0.00" : "--"
        }

        function g(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
                n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            if (!e || !Number(e) || isNaN(Number(e))) return n ? "0.000" : "--";
            var a, i = [{value: 1, symbol: ""}, {value: 1e3, symbol: "K"}, {value: 1e6, symbol: "M"}, {
                value: 1e9,
                symbol: "B"
            }];
            for (a = i.length - 1; a > 0 && !(e >= i[a].value); a--) ;
            return (e / i[a].value).toFixed(t).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, "$1") + i[a].symbol
        }

        function T(e, t) {
            return !(!e || !Number(e) || isNaN(Number(e))) && 1 === new i.a("".concat(e)).comparedTo(new i.a("".concat(t)))
        }

        function h(e, t) {
            return -1 === new i.a("".concat(e)).comparedTo(new i.a("".concat(t)))
        }

        function v(e) {
            return function (t, n) {
                var a = t[e], i = n[e];
                return isNaN(Number(a)) || isNaN(Number(i)) || (a = Number(a), i = Number(i)), a < i ? -1 : a > i ? 1 : 0
            }
        }

        function w(e) {
            return function (t, n) {
                var a = t[e], i = n[e];
                return isNaN(Number(a)) || isNaN(Number(i)) || (a = Number(a), i = Number(i)), a < i ? 1 : a > i ? -1 : 0
            }
        }

        function k(e, t) {
            if (isNaN(e) || e < 0) return "00:00:00:00";
            var n = Number(e) - Number(t);
            if (n < 0) return "00:00:00:00";
            var a = x(parseInt(n / 1e3 % 60, 10)), i = x(parseInt(n / 1e3 / 60 % 60, 10)),
                s = x(parseInt(n / 1e3 / 60 / 60 % 24, 10));
            return x(parseInt(n / 1e3 / 60 / 60 / 24, 10)) + ":" + s + ":" + i + ":" + a
        }

        function x(e) {
            return e < 10 ? "0" + e : e
        }

        function B(e, t) {
            return e - t
        }
    }, "2bc7": function (e, t, n) {
        "use strict";
        n.r(t), n.d(t, "earnPair", (function () {
            return r
        }));
        var a = n("d028"), i = n("ce62"), s = n("3e3c"), r = [{
            token1: "USDT",
            token2: "YFO",
            address1: a.USDT.address,
            address2: a.YFO.address,
            lpAddress: i["USDT-YFO-Quick"],
            vaultAddress: s["USDT-YFO-Strat"][0],
            stratAddress: s["USDT-YFO-Strat"][0],
            farmAddress: s["USDT-YFO-Strat"][0],
            stratPid: s["USDT-YFO-Strat"][1],
            totalSupply: s["USDT-YFO-Strat"][2],
            dailyOut: s["USDT-YFO-Strat"][3],
            staked: "--",
            earned: "--",
            tvl: "--",
            apy: "--",
            start: new Date("2021/07/31 20:00:00").getTime(),
            end: new Date("2022/07/31 20:00:00").getTime()
        }, {
            token1: "BNB",
            token2: "OBS",
            address1: a.USDT.address,
            address2: a.YFO.address,
            lpAddress: i["USDT-YFO-Quick"],
            vaultAddress: s["USDT-YFO-Strat"][0],
            stratAddress: s["USDT-YFO-Strat"][0],
            farmAddress: s["USDT-YFO-Strat"][0],
            stratPid: s["USDT-YFO-Strat"][1],
            totalSupply: s["USDT-YFO-Strat"][2],
            dailyOut: s["USDT-YFO-Strat"][3],
            staked: "--",
            earned: "--",
            tvl: "--",
            apy: "--",
            start: new Date("2021/07/31 20:00:00").getTime(),
            end: new Date("2022/07/31 20:00:00").getTime()
        }]
    }, "2da4": function (e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAlCAYAAAAwYKuzAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEaSURBVHgB7ZiBDYMgEEXPpgM4giN1A+0E7QaOUjdwBLtBuwEj1A2uXKKJuQDV3l1iIi8hBr2Dz51AABCx9uWDMmqwwjfuUAcbkaiLvkjUR1ckb32jb4N2OBpswUUVHtgAifSPB9gwiiI4YxnJEyjgg975xxUMEKdYG65HJYKWZIFSzrAz+BzIKZZy3H/w312Jk1MsJa+DM2v3+LwXa5MFSskCpRxa4Lis+OWt+uUQsrEU+Gb1PiVy+taz10+Vc3Gkw9BZmW7R2oDtDcM3bI2ZwKnjAcM4ithUYjavuRFNKiaw9KVL2MfuJQfytRA4QDzdboU/Cb5zZ+ntKqeNiKR0pqI5YGgS4frRiUVG+qMAXWBPLKJJS0+Zsv0CjrzKeCxa4MkAAAAASUVORK5CYII="
    }, "2f00": function (e, t, n) {
        "use strict";
        n("fe12")
    }, "2f7b": function (e) {
        e.exports = JSON.parse('{"OBC":"0xbf6f7d817d029CCd7928e4CEF3a9729e114C991b","OBS":"0x095956B142431Eb9Cf88B99F392540B91aCbF4ad","OBB":"0x4Ce3e25A36Ba370201729Ef775367db756128270","BNB":"0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c","WBNB":"0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c","YFO":"0xAc0C8dA4A4748d8d821A0973d00b157aA78C473D","BUSD":"0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56","USDT":"0x55d398326f99059fF775485246999027B3197955","BTCB":"0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c","ETH":"0x2170Ed0880ac9A755fd29B2688956BD959F933F8"}')
    }, 3: function (e, t) {
    }, "332e": function (e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABtSURBVHgB7dYxDoAgEETRxXhXzsRptTU2+AnGNfzX0U0ykw0lBtVaj+u7tVZioi2SMhi1x2SztmeVlMEog1Hr3LGep3fOKik31nPfnlVSeTf29t99lFVS/7tjX2/PKimDUQajDEYZjDIYlTbYCZ2vFoqPLghNAAAAAElFTkSuQmCC"
    }, "349d": function (e, t, n) {
        e.exports = n.p + "img/yfologo.a0faddff.png"
    }, 3998: function (e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADqSURBVHgB7ZjhEYIwDIUTjgF0AxzFSdRJZBNHYQRGkA1kg5ic/Ki9Sg8DtBz57gqlhPbRlMddgYguXF60Pk8ZGyKgBPK5gjT0iHgcCxCBBAlhgTh2v4DMKf2G2BtpmZqx7GfQBGoxgVrKWIDWJ7WuYCnWsv01uPSfJYalWIv5oPlgaswHtViKtezHB/9dq7H+LcVazAen9u+vSUuxlu0J5CVwgBVxx+N6FQpovK3ZRzBwPkEUGk+EDnWXVnZYa37uDnlyw2GKW0i3T/2Ljh3oVPCh54uzNEA+dPDR9A3P5lXyTulouNTkfDhvi/+Bt0UEZPoAAAAASUVORK5CYII="
    }, "3ca9": function (e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB6SURBVHgB7dfBCsAgDANQHfv/X948ShFCSYWgebftUAoNpfZvaIQ+zN9svaeJcUPIG3/ETETZjGTreWSIfoaqZTPnkSHnZwjtHcQjQ/QzxN4zvod2k2uI2hkrMUO+h6rp7aHqdxnLI0Pue5dleWTI+fcQW88jQ+Qa+gGVZTQ99SBA6AAAAABJRU5ErkJggg=="
    }, "3cc5": function (e, t, n) {
        (t = n("24fb")(!1)).push([e.i, ".s_img[data-v-151019a6]{height:30px}.s_padding[data-v-151019a6]{padding:30px 0}@media only screen and (max-width:750px){.s_img[data-v-151019a6]{height:20px}.s_padding[data-v-151019a6]{padding:10px 0}}", ""]), e.exports = t
    }, "3e3c": function (e) {
        e.exports = JSON.parse('{"USDT-YFO-Strat":["0x0000000000000000000000000000000000000000","0",5959828.8,198660.96,"16"],"YFO-USDT-Strat":["0x0000000000000000000000000000000000000000","0",5959828.8,198660.96,"16"],"WBTC-USDT-Strat":["0x0000000000000000000000000000000000000000","1",2548324.8,84944.16,"8"],"USDT-WBTC-Strat":["0x0000000000000000000000000000000000000000","1",2548324.8,84944.16,"8"],"USDT-WETH-Strat":["0x0000000000000000000000000000000000000000","2",2099563.2,69985.44,"9"],"WETH-USDT-Strat":["0x0000000000000000000000000000000000000000","2",2099563.2,69985.44,"9"],"USDT-USDC-Strat":["0x0000000000000000000000000000000000000000","3",595296,19843.2,"10"],"USDC-USDT-Strat":["0x0000000000000000000000000000000000000000","3",595296,19843.2,"10"],"YFO-USDC-Strat":["0x0000000000000000000000000000000000000000","3",595296,19843.2,"10"],"USDC-YFO-Strat":["0x0000000000000000000000000000000000000000","3",595296,19843.2,"10"],"BNB-YFO-Strat":["0x0000000000000000000000000000000000000000","10",1291334.4,43044.48,"19"],"YFO-BNB-Strat":["0x0000000000000000000000000000000000000000","10",1291334.4,43044.48,"19"],"BUSD-YFO-Strat":["0x0000000000000000000000000000000000000000","10",1291334.4,43044.48,"19"],"YFO-BUSD-Strat":["0x0000000000000000000000000000000000000000","10",1291334.4,43044.48,"19"]}')
    }, 4: function (e, t) {
    }, 4262: function (e, t, n) {
        "use strict";
        n("a38a")
    }, 4360: function (e, t, n) {
        "use strict";
        var a = n("5530"), i = (n("a9e3"), n("bb33")), s = n("12cb"), r = n("2b0e"), o = n("2f62"), l = n("99e5"),
            p = n.n(l);
        r.default.use(o.a);
        var u = n("f121");
        t.a = new o.a.Store({
            state: {
                wallet: {
                    web3: new p.a(i.params.defaultProvider),
                    connector: null,
                    isWeb: !1,
                    connected: !1,
                    chainId: 56,
                    address: "",
                    accounts: []
                },
                lang: sessionStorage.getItem("locale") || "English",
                langList: ["English", "Franch", "日本語", "Türkçe", "中文"],
                homeTvl: isNaN(Number(sessionStorage.getItem("homeTvl"))) || "--",
                bankTvl: isNaN(Number(sessionStorage.getItem("bankTvl"))) || "--",
                vaultTvl: isNaN(Number(sessionStorage.getItem("vaultTvl"))) || "--",
                marketTvl: isNaN(Number(sessionStorage.getItem("marketTvl"))) || "--",
                lendingTvl: isNaN(Number(sessionStorage.getItem("lendingTvl"))) || "--",
                totalRewards: isNaN(Number(sessionStorage.getItem("totalRewards"))) || "--",
                totalSupply: 9e7,
                yfoPrice: isNaN(Number(sessionStorage.getItem("yfoPrice"))) || "--",
                countdown: isNaN(Number(sessionStorage.getItem("countdown"))) || "--:--:--",
                useConfig: u[56],
                vaultList: u[56].vaultPair,
                earnList: u[56].earnPair,
                lendingList: u[56].lendingPair,
                isLoading: !1
            }, mutations: {
                Set_Lang: function (e, t) {
                    e.lang = t, s.a.locale = t, sessionStorage.setItem("locale", t)
                }, Set_Wallet_State: function (e, t) {
                    var n = Object(a.a)({}, e.wallet);
                    e.wallet = Object(a.a)(Object(a.a)({}, n), t)
                }, SET_COIN_LIST: function (e, t) {
                    e.lendingList = t, localStorage.setItem("Lending_List", JSON.stringify(t))
                }, Set_Home_Tvl: function (e, t) {
                    e.homeTvl = t, sessionStorage.setItem("homeTvl", t)
                }, Set_Bank_Tvl: function (e, t) {
                    e.bankTvl = t, sessionStorage.setItem("bankTvl", t)
                }, Set_Vault_Tvl: function (e, t) {
                    e.vaultTvl = t, sessionStorage.setItem("vaultTvl", t)
                }, Set_Lending_Tvl: function (e, t) {
                    e.lendingTvl = t, sessionStorage.setItem("lendingTvl", t)
                }, Set_Total_Rewards: function (e, t) {
                    e.totalRewards = t, sessionStorage.setItem("totalRewards", t)
                }, Set_Price: function (e, t) {
                    e.yfoPrice = t, sessionStorage.setItem("yfoPrice", t)
                }, Set_Loading: function (e, t) {
                    e.isLoading = t
                }
            }, getters: {
                lang: function (e) {
                    return
                }, langList: function (e) {
                    return e.langList
                }, vaultList: function (e) {
                    return e.vaultList
                }, earnList: function (e) {
                    return e.earnList
                }, lendingList: function (e) {
                    return e.lendingList
                }, useConfig: function (e) {
                    return e.useConfig
                }, wallet: function (e) {
                    return e.wallet
                }, homeTvl: function (e) {
                    return e.homeTvl
                }, marketTvl: function (e) {
                    return e.marketTvl
                }, vaultTvl: function (e) {
                    return e.vaultTvl
                }, bankTvl: function (e) {
                    return e.bankTvl
                }, lendingTvl: function (e) {
                    return e.lendingTvl
                }, totalRewards: function (e) {
                    return e.totalRewards
                }, yfoPrice: function (e) {
                    return e.yfoPrice
                }, totalSupply: function (e) {
                    return e.totalSupply
                }, isLoading: function (e) {
                    return e.isLoading
                }
            }, modules: {}
        })
    }, "4a47": function (e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKHSURBVHgBvVmLcdswDIU7gUZQJ4g3iEfoBtYG0QZRJ5A3oEfoBnYniDsB3QmcDRDwQp0lGPyAYvLucD6LxOMjwK+0gUIg4o5+tmTP/rfx5vBOdvX2j+y82WzO8NUgUQ3ZK9kN9bBkhqyF2vDCRqwHU00oEb1gWcRSsGQdrAHGo3bzkejItmTNzK/xz1zZEeMdHEEL38Ap0vN+LiiTs/O+Et5UfN5BilgPK0EcQ0DkKZdgDESthUpwXChHc0w5diiHv4XK8CKlTPWg6FUycnhfGy3rlMnwldp0Q6mRKhuhN6kG9hifoclx60VyjlGqxDEkiF8wH/sEVy/4NBCJngV9r2OQ07bktMxniBV2CTIjiHDLR+NNisgAuijepoKdWBAn47tDL9Th610qKw0+ZmUnERnIBH6m+hcK6fMNLpDBd2Qu/Q96/sTq/YVM0BnvSvaH7B3q4Mz+75zAlj28QB3sC3h5nScQ8q46BHDgfeFG7dARhsUNtOMkQr7H8NLjnreZPEs9FQVaDCP7FCQJrJJiDEeuU3A8pNhNEj4DW6iD32Q/aYYfFT4t+391AvnM2UIFkLChYPnhbf93Avm69wxlghaAMvC2L+JWhyuXmlKgtNUFCtR3Dz47QAl8PM3beaFqYw80sFagZRRmXviwsWujuEYgyjtPyysdWIXs1X+NQJRP80aqKJ3HLH7Fy56lOJvdJson4e++dnYpx4PgZPF7Lu6HXIITyniFlcDw27I3DUkTCP8UzQ4UwPtFygY4T1iyOaCc7gm5r98Mxq+oeWmNiIy9NluDKm/LJpFuUB+xHlxm6u/3M6EW9XARG7TCSo9F02cIZ+7a2nqbf4Zw5s6a7jh3Kf0M8QHMfyJ2ndF46AAAAABJRU5ErkJggg=="
    }, "4fa9": function (e, t, n) {
        "use strict";
        n("6547")
    }, "4ffd": function (e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAaySURBVHgB7Z1NbFRVFMfPvdOhUyKk7KRsBhJjYVVQF+ICgcSNRGrElZhI1IXGCBus8SO1URKJm8ZEXEgCCd1JTEvcaABxAQuB2o18mCCzsAMr2kCT6YfvXs+5M2867707b+a+WyBpzy9pmI975533f+eej9dyR0Cb6OKh7oVCoR8f7QCh+0CIImjohuWAgGnQuoTnNAFKXsjPVsZEaXi6vaktqPQOFHMSBvFh/7IRrB0EnAwUDHXdOFpKH9YE43GrO79A0Q7CymY4X5kbauaRVgGN1wn4DR8WgUEfgpLSsNPmjTL+wsyWT/pYvCjoZUWJmsw8dbjP8t4i7Hnp2Dyx7oEU81i8dEJPJK3C1+oCmoTB4rWERFzo6hxseF5fureBaZtAw0ZaysYDa3Ue40CoGfYUg90Lc7NTwDiip/OV+Y1yYXauH5gMiO6gsGqvBIm9LZMJBeJFzMrQB0w2MABKzaWLD0W5ou6wLDmiWwLjBQvoCQvoCQvoCQvoCQvoCQvoCQvoCQvoCQvoCQvoCQvoCQvoCQvoCQvoSQcsAeK5TSB3bQbYsA5gTVf1xRtlUOevg778T+pc2b8NxK4t1Xk05/Jt0OevNT/W0+tB7t8O0LMO9JmroMb+hFa2id71Zh7gv7C2KzloEn+nVr4H6tg50JNt/VXb4ufPbx7QkBEyTA7sQSM3Nh9UnoLgwA9Ww0g8+dU+6xw6GTU6Hj0eipb78QMUu1B/LTg0goJfT9pGF/X93em2xaCLHRw4Di5kXsJy7zbInXi3tYF00r98hOO3Jt4Se59pOoeEJQEi9D4ZEc/YsXNzYjrNy514x0k8Yw95a4/bDfpMAhrPO7IvcTKpBzryOi7V2Mk+qKTPQSEiIq6xLD8UOzLnzReSwjugH8w6jc8kYO7b/ZCFXEx0depiyzkuy1BgDPYRTx07ixfVTUDnJEJxK37VCXPlzv0Fujxt3qeTphOKgB5EHkLxzczBhPHfS99UgzwmEuscqIrYNDaVpyLjbKvC2IbxjRIUeb2gMU9Ux+mZOfOc4h/Z44qzgLa4pSeriQLKDYmCYh/FoZggAmMn1AQ0zzd0Y4bE2Hb5FgQjFyGHsY8EjcxpMzbZPDW0TT67ycRhk40bRUZx9Y07AP/egyzZ1E1APLDNSHX056h4BGXSz06bRNMICUpikKdSIpJfvrb4Hp5I8OEIdPx6OHEMsXsL6PuW5VVbDUZ0y8ow4mHZI9/YDmnnZM4Lf9TnP4ELTjFQ2GooXBK2MoIwS8IWU2peKWIZ1Czl2nJKYBEngiXBkPfR8ZuKF0O+su3RZGEXUrOa7YJQqVJO1ozGwyxZW9+8A0vJQ83C+r6l7MAr3yxLhss1QQsjTUyKfxYKqG/eTRTkOuxELOKa4+M8dSa9WwlRY+MPOQtTwEXviItC5Um82yDjKYnEoWVlE6gOfoa2eCBdqNzAyxC8fRxj2vPVz6JWseaB4XJNFNo4Rx0cgQDDiWk3bbUrzlV0cc6MgyvOWViPXgURr7Vq3YYeu2pEpJaLgr61pGjRG1fH3LaKQaVOB3kUtng0Rl9pKDtwvELbqEyKzOntMYnMlCl/300ejJzClDm3nL2PcBaQil9jpEUcKnHS/u8YGaoaShgrWNbAFTzOd2dBfrwn+X5PQ7Ec67PVqUsJAcM5rWwz86n/bmVfDPckQiJQ2ZIBTZV+ub27HWrkUjUmpUFivtewGqh0+jqbbUSzQjx1DmSAlpBpe1zm4HjykAi2pNQQR0mMtFtbhlgmN8I72taIeBQCEurY+drySf/79LAToPGJ92IliEkwja+ht1NhnSaIOnfNbtunp1vaZrNVt7lCQrzuB9Y/JOxjqVajIpk6Bro5Ojbesr+kLsHcpcE5wfcocrO6rtZfS0pOVFSvxYIb43HCq+O2YbdjWkGKrRtSivE/8F4gxb/HIeBKhn8n4gkL6AkL6AkL6AkL6AkL6AkL6AkL6AkL6AkL6AkL6AkL6AkL6AkL6AkL6Ik0mw8yGdHTtOlECZislKRWMAFMNrSYwBiofgcmI/qCzBdWj3IczEZ+dn5MiomhaVAwCowbGk7SvqqmjAkAhoBxItTMCEj74GE2HgamTfRwuA1ovZDu6CyQoiVgUqF9VPOV+fqKrQtIsTDQsBNYxKaEm9A27ikdaeXILedF7lVgEROQeAuoTXwvad6Iuw2cNuImaGC+s7CVEwuhh1dV5rY221O/vS8jABjEkW/BSoEaC6yNqVTJ/GUEcapfh5HvR6fdgbP68Ke4vL4OA+O+Buxt9YUcdhjtfh3G/5fousH4i8LQAAAAAElFTkSuQmCC"
    }, 5: function (e, t) {
    }, "52bf": function (e, t, n) {
        var a = n("24fb"), i = n("1de5"), s = n("d284"), r = n("c7ac"), o = n("73cf");
        t = a(!1);
        var l = i(s), p = i(r), u = i(o);
        t.push([e.i, ".message-tip[data-v-5ea652fa]{position:fixed;z-index:100;min-width:100px;max-width:200px;width:auto;height:auto;background-color:var(--black);border-radius:10px;padding:10px 15px;left:50%;top:15%;white-space:nowrap;word-break:break-all;word-wrap:break-word;font-size:.8em;transform:translate(-50%,-50%);-webkit-animation:name 2s ease-in;animation:name 2s ease-in;text-indent:30px}.message-tip img[data-v-5ea652fa]{width:25px;height:25px}#tips-success[data-v-5ea652fa]{background-image:url(" + l + ");background-position-x:10px;background-position-y:center;background-size:25px 25px;background-repeat:no-repeat}#tips-success[data-v-5ea652fa],#tips-warn[data-v-5ea652fa]{width:auto;max-width:100%;min-height:18px;color:#fff}#tips-warn[data-v-5ea652fa]{background-image:url(" + p + ");background-position-x:10px;background-position-y:center;background-size:25px 25px;background-repeat:no-repeat}#tips-error[data-v-5ea652fa]{width:auto;max-width:100%;min-height:18px;color:#fff;background-image:url(" + u + ");background-position-x:10px;background-position-y:center;background-size:25px 25px;background-repeat:no-repeat}", ""]), e.exports = t
    }, "553e": function (e) {
        e.exports = JSON.parse('{"BNB":"0xA16269D71A6B1fFaB972433CBe071573312AaB30","YFO":"0x65a37303DB112De1FBBF3C2992eA25E976F1aAB4","OBS":"0xAaf1F6c9080668d05e8d4758ED99c15D48d02f97","USDT":"0xb1333114F1a3A2bc6acDf24BE160B2e1debC345A","BUSD":"0xb05aB37C082C953Faaa1Feb237b3931864E62226","OBC":"0x9dA2cb730565fe2fBcFB8C601F479972224D59c7","BTC":"0x5B0e141fE5Aa29fD6249fa3CE04fB5D9767AF236","ETH":"0x10B8bbeC590Fe9Df336cDe7335CFBb83f8A03Ca8"}')
    }, "56d7": function (e, t, n) {
        "use strict";
        n.r(t), n("e260"), n("e6cf"), n("cca6"), n("a79d"), n("b0c0");
        var a = n("2b0e"), i = n("313e"), s = (n("f9e3"), n("2dd8"), n("5530")), r = n("2f62"), o = {
                name: "Language",
                data: function () {
                    return {isShowSelect: !1}
                },
                computed: Object(s.a)({}, Object(r.b)(["langList", "lang"])),
                methods: {
                    changeLanguage: function (e) {
                        this.$store.commit("Set_Lang", e), this.isShowSelect = !1
                    }
                }
            }, l = (n("73f7"), n("2877")), p = Object(l.a)(o, (function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("div", {staticClass: "p_rel border_radius_20"}, [a("button", {
                    staticClass: "font_700 font_14 border_radius_20 padding_tb10_lr20 bg_white between_h_center",
                    on: {
                        click: function (t) {
                            e.isShowSelect = !e.isShowSelect
                        }
                    }
                }, [a("img", {
                    attrs: {
                        src: n("89b7"),
                        alt: ""
                    }
                })]), a("div", {
                    staticClass: "lang_wraper",
                    class: {lang_wraper_effect: e.isShowSelect},
                    on: {
                        mouseleave: function (t) {
                            e.isShowSelect = !1
                        }
                    }
                }, [a("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.isShowSelect,
                        expression: "isShowSelect"
                    }]
                }, e._l(e.langList, (function (t) {
                    return a("ul", {key: t}, [a("li", {
                        staticClass: "padding_tb5_lr20", on: {
                            click: function (n) {
                                return e.changeLanguage(t)
                            }
                        }
                    }, [e._v(e._s(t))])])
                })), 0)])])
            }), [], !1, null, "f3bf12ea", null).exports, u = n("1da1"), d = (n("96cf"), n("99e5")), y = n.n(d),
            c = (n("d3b7"), n("a9e3"), n("c156")), m = n.n(c), f = n("745c"), b = n.n(f), A = n("bb33"), g = n("4360"),
            T = {connector: null, isWeb: !1, connected: !1, chainId: 56, address: ""};

        function h() {
            return (h = Object(u.a)(regeneratorRuntime.mark((function e() {
                var t, n;
                return regeneratorRuntime.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            if (t = "https://bridge.walletconnect.org", (n = new m.a({
                                bridge: t,
                                qrcodeModal: b.a
                            })).connected) {
                                e.next = 5;
                                break
                            }
                            return e.next = 5, n.createSession();
                        case 5:
                            return g.a.commit("Set_Wallet_State", {isWeb: !1, connector: n}), e.next = 8, v(n);
                        case 8:
                        case"end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }

        function v(e) {
            return w.apply(this, arguments)
        }

        function w() {
            return (w = Object(u.a)(regeneratorRuntime.mark((function e(t) {
                var n;
                return regeneratorRuntime.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            if (t) {
                                e.next = 2;
                                break
                            }
                            return e.abrupt("return");
                        case 2:
                            t.on("session_update", function () {
                                var e = Object(u.a)(regeneratorRuntime.mark((function e(t, n) {
                                    var a, i, s;
                                    return regeneratorRuntime.wrap((function (e) {
                                        for (; ;) switch (e.prev = e.next) {
                                            case 0:
                                                if (!t) {
                                                    e.next = 3;
                                                    break
                                                }
                                                throw t;
                                            case 3:
                                                a = n.params[0], i = a.chainId, s = a.accounts, g.a.commit("Set_Wallet_State", {
                                                    isWeb: !1,
                                                    chainId: i
                                                }), k(s, i);
                                            case 6:
                                            case"end":
                                                return e.stop()
                                        }
                                    }), e)
                                })));
                                return function (t, n) {
                                    return e.apply(this, arguments)
                                }
                            }()), t.on("connect", (function (e, t) {
                                if (e) throw e;
                                C(t)
                            })), t.on("disconnect", (function (e, t) {
                                if (e) throw e;
                                M()
                            })), t.connected && (n = t.chainId, k(t.accounts, n));
                        case 6:
                        case"end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }

        function k(e, t) {
            return x.apply(this, arguments)
        }

        function x() {
            return (x = Object(u.a)(regeneratorRuntime.mark((function e(t, n) {
                return regeneratorRuntime.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            g.a.commit("Set_Wallet_State", {isWeb: !1, chainId: n, connected: !0});
                        case 1:
                        case"end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }

        function B() {
            return (B = Object(u.a)(regeneratorRuntime.mark((function e(t) {
                return regeneratorRuntime.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            t && t.killSession(t), g.a.commit("Set_Wallet_State", T);
                        case 2:
                        case"end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }

        function C(e) {
            return D.apply(this, arguments)
        }

        function D() {
            return (D = Object(u.a)(regeneratorRuntime.mark((function e(t) {
                var n, a, i, s, r;
                return regeneratorRuntime.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            n = t.params[0], a = n.chainId, i = n.accounts, s = i[0], r = new y.a(A.params.defaultProvider), g.a.commit("Set_Wallet_State", {
                                isWeb: !1,
                                web3: r,
                                connected: !0,
                                address: s,
                                chainId: a
                            });
                        case 4:
                        case"end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }

        function M() {
            return E.apply(this, arguments)
        }

        function E() {
            return (E = Object(u.a)(regeneratorRuntime.mark((function e() {
                return regeneratorRuntime.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            g.a.commit("Set_Wallet_State", T);
                        case 1:
                        case"end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }

        var F = {
            name: "ConnectWallet", data: function () {
                return {clientWidth: 1440, isConnect: !1, isDisConnect: !1}
            }, computed: Object(s.a)(Object(s.a)({}, Object(r.b)(["wallet"])), {}, {
                currentAddress: function () {
                    if (this.wallet.address) {
                        var e = this.wallet.address;
                        return e.substr(0, 6) + "..." + e.substr(-4)
                    }
                    if (this.wallet.connector && this.wallet.connector.accounts[0]) {
                        var t = this.wallet.connector.accounts[0];
                        return t.substr(0, 6) + "..." + t.substr(-4)
                    }
                    return ""
                }
            }), methods: {
                handleConnectWallet: function () {
                    this.wallet.connected ? this.isDisConnect = !this.isDisConnect : this.isConnect = !0
                }, addChain: function (e) {
                    window.ethereum && window.ethereum.request({
                        method: "wallet_addEthereumChain",
                        params: [{
                            chainId: this.$params.chains[e].chainId,
                            rpcUrls: [this.$params.chains[e].rpcUrls],
                            chainName: this.$params.chains[e].chainName,
                            nativeCurrency: {
                                name: this.$params.chains[e].tokenName,
                                symbol: this.$params.chains[e].tokenName.symbol,
                                decimals: this.$params.chains[e].tokenName.decimals
                            },
                            blockExplorerUrls: [this.$params.chains[e].blockExplorerUrls],
                            iconUrls: this.$params.chains[e].iconUrls
                        }]
                    }).then((function (e) {
                    })).catch(console.error)
                }, closeDisconnent: function () {
                    this.isDisConnect = !this.isDisConnect
                }, handleWebWallet: function () {
                    this.initWallet()
                }, handleAppWallet: function () {
                    !function () {
                        h.apply(this, arguments)
                    }()
                }, confirmDisConnect: function () {
                    !function (e) {
                        B.apply(this, arguments)
                    }(this.wallet.connector), this.isDisConnect = !this.isDisConnect
                }, initWallet: function () {
                    var e = this;
                    return Object(u.a)(regeneratorRuntime.mark((function t() {
                        var n, a, i;
                        return regeneratorRuntime.wrap((function (t) {
                                return t.stop()
                        }), t)
                    })))()
                }
            }, created: function () {
                this.clientWidth = document.body.clientWidth, this.initWallet()
            }
        }, S = (n("4fa9"), Object(l.a)(F, (function () {
            var e = this, t = e.$createElement, a = e._self._c || t;
            return a("div", [a("button", {
                staticClass: "font_700 font_14 border_radius_20 padding_tb10_lr20",
                class: {
                    bg_white: "/" === e.$route.path,
                    bg_black: "/" !== e.$route.path || e.clientWidth <= 750,
                    text_white: "/" !== e.$route.path || e.clientWidth <= 750,
                    text_black: "/" === e.$route.path
                },
                on: {click: e.handleConnectWallet}
            }, [e.currentAddress ? a("span", [e._v(e._s(e.currentAddress))]) : a("span", [e._v(e._s(e.$t("connectWallet")))])]), a("Notify", {
                attrs: {
                    show: e.isConnect,
                    align: "center",
                    titleName: e.$t("connectWallet"),
                    showCancel: !1,
                    showConfirm: !1
                }, on: {
                    closeNotify: function (t) {
                        e.isConnect = !1
                    }
                }
            }, [a("template", {slot: "body"}, [a("div", {staticClass: "padding_10 text_black"}, [a("div", {
                staticClass: "wallet_item",
                on: {click: e.handleWebWallet}
            }, [a("div", {staticClass: "select-cover"}, [a("img", {
                attrs: {
                    src: n("a510"),
                    alt: ""
                }
            }), a("div", {staticClass: "font_16 font_700"}, [e._v("Metamask")])])]), a("div", {
                staticClass: "wallet_item margin_tb20",
                on: {click: e.handleAppWallet}
            }, [a("div", {staticClass: "select-cover"}, [a("img", {
                attrs: {
                    src: n("be42"),
                    alt: ""
                }
            }), a("div", {staticClass: "font_16 font_700"}, [e._v("WalletConnect")])])])])])], 2), a("Notify", {
                attrs: {
                    show: e.isDisConnect,
                    align: "center",
                    titleName: e.$t("disconnect"),
                    cancelText: e.$t("cancel"),
                    confirmText: e.$t("confirm")
                }, on: {closeNotify: e.closeDisconnent, cancel: e.closeDisconnent, confirm: e.confirmDisConnect}
            })], 1)
        }), [], !1, null, "995ee590", null).exports), O = {
            name: "MenuBar", components: {ConnectWallet: S}, props: ["showMenu"], data: function () {
                return {
                    linkList: [{name: "dashboard", path: "/dashboard"}, {
                        name: "vaults",
                        path: "/vaults"
                    }, {name: "earn", path: "/earn"}, {name: "lending", path: "/lending"}, {
                        name: "statistics",
                        path: "/statistics"
                    }, {name: "wiki", path: "/wiki"}, {name: "faqs", path: "/faqs"}, {
                        name: "settings",
                        path: "/settings"
                    }]
                }
            }, created: function () {
            }
        }, Y = (n("2735"), {
            name: "Header", components: {
                Language: p, MenuBar: Object(l.a)(O, (function () {
                    var e = this, t = e.$createElement, a = e._self._c || t;
                    return a("div", {
                        staticClass: "bar_wraper",
                        class: {bar_effect: e.showMenu}
                    }, [a("ul", {staticClass: "margin_20"}, e._l(e.linkList, (function (t, i) {
                        return a("li", {
                            key: i, on: {
                                click: function (t) {
                                    return e.$emit("closeMenu", e.showMenu)
                                }
                            }
                        }, [a("router-link", {
                            class: {route_active: e.$route.path === t.path || "/lending" == t.path && "/lendingD" == e.$route.path},
                            attrs: {to: t.path}
                        }, [a("img", {
                            attrs: {
                                src: n("fb5e")("./" + ("/lending" == t.path && "/lendingD" == e.$route.path ? "lending_1" : e.$route.path === t.path ? t.name + "_1" : t.name) + ".png"),
                                alt: ""
                            }
                        }), a("span", [e._v(e._s(e.$t("" + t.name)))])])], 1)
                    })), 0), a("ConnectWallet", {staticClass: "padding_tb20"})], 1)
                }), [], !1, null, "6574ca2b", null).exports
            }, data: function () {
                return {
                    isShowMenu: !1,
                    isShowSelect: !1,
                    isConnect: !1,
                    isDisConnect: !1,
                    chain: sessionStorage.getItem("Chain_Name") || "BSC"
                }
            }, methods: {
                toIndex: function () {
                    "/" !== this.$route.path && (this.$router.push("/"), this.isShowMenu = !1)
                }, selectNet: function (e) {
                    if ("BSC" === e) switch (this.chain = e, sessionStorage.setItem("Chain_Name", e), e) {
                        case"BSC":
                            this.addChain("BSC");
                            break;
                        case"HECO":
                            this.addChain("HECO");
                            break;
                        case"OKTEST":
                            this.addChain("OKTEST");
                            break;
                        default:
                            this.addChain("BSC")
                    }
                }
            }
        }), N = (n("12d8"), Object(l.a)(Y, (function () {
            var e = this, t = e.$createElement, a = e._self._c || t;
            return a("div", {staticClass: "header_cover header_height col-12 bg_black"}, [a("div", {staticClass: "max_width_1400 height_p_100 margin_auto padding_lr20"}, [a("div", {staticClass: "between_h_center height_p_100"}, [a("div", {
                staticClass: "between_h_center cursor_pointer",
                on: {click: e.toIndex}
            }, [a("img", {
                staticClass: "logo_height margin_r_10",
                attrs: {src: n("4ffd"), alt: ""}
            }), a("span", {staticClass: "font_30 font_bold"}, [e._v("$P")])])])]), a("div", {staticClass: "col-12 p_rel"}, [a("MenuBar", {
                attrs: {showMenu: e.isShowMenu},
                on: {
                    closeMenu: function (t) {
                        e.isShowMenu = !e.isShowMenu
                    }
                }
            })], 1)])
        }), [], !1, null, "a76b1fac", null).exports), _ = [function () {
            var e = this.$createElement, t = this._self._c || e;
            return t("div", {staticClass: "between_h_center"}, [t("img", {
                staticClass: "height_24",
                attrs: {src: n("7973"), alt: ""}
            }), t("span", {staticClass: "font_500 font_14 text_black"}, [this._v("BSC")])])
        }], U = {
            name: "InnerHeader", components: {ConnectWallet: S}, data: function () {
                return {
                    isShowMenu: !1,
                    isShowSelect: !1,
                    isConnect: !1,
                    isDisConnect: !1,
                    chainName: "",
                    // lang: sessionStorage.getItem("locale") || "English",
                    langList: ["English", "中文"],
                    chain: sessionStorage.getItem("Chain_Name") || "BSC",
                    chainList: ["BSC", "HECO", "OKTEST"],
                    selectNetwork: "BSC"
                }
            }, computed: Object(s.a)(Object(s.a)({}, Object(r.b)(["wallet"])), {}, {
                currentAddress: function () {
                    if (this.wallet.address) {
                        var e = this.wallet.address;
                        return e.substr(0, 6) + "..." + e.substr(-4)
                    }
                    if (this.wallet.connector && this.wallet.connector.accounts[0]) {
                        var t = this.wallet.connector.accounts[0];
                        return t.substr(0, 6) + "..." + t.substr(-4)
                    }
                    return ""
                }
            }), methods: {
                toIndex: function () {
                    "/" !== this.$route.path && (this.isShowMenu = !this.isShowMenu, this.$router.push("/"))
                }, changeLanguage: function (e) {
                    // this.lang = e, sessionStorage.setItem("locale", e), this.$i18n.locale = e, this.isShowSelect = !1
                }, selectNet: function (e) {
                    if ("BSC" === e) switch (this.chain = e, sessionStorage.setItem("Chain_Name", e), e) {
                        case"BSC":
                            this.addChain("BSC");
                            break;
                        case"HECO":
                            this.addChain("HECO");
                            break;
                        case"OKTEST":
                            this.addChain("OKTEST");
                            break;
                        default:
                            this.addChain("BSC")
                    }
                }
            }, mounted: function () {
                window.addEventListener("click", this.selectLang)
            }, destroyed: function () {
                window.removeEventListener("click", this.selectLang)
            }
        }, R = Object(l.a)(U, (function () {
            var e = this, t = e.$createElement, a = e._self._c || t;
            return a("div", {staticClass: "header_height col-12 padding_lr20 between_h_center bg_white border_b_light_grey"}, [a("div", {
                staticClass: "between_h_center cursor_pointer height_p_100",
                on: {click: e.toIndex}
            }, [a("img", {
                staticClass: "logo_height margin_r_10",
                attrs: {src: n("349d"), alt: ""},
                on: {
                    click: function (t) {
                        "/" !== e.$route.path && e.$router.push("/")
                    }
                }
            })]), a("div", {staticClass: "between_h_center height_p_100"}, [e._m(0), a("ConnectWallet", {staticClass: "show_p margin_l_10"})], 1)])
        }), _, !1, null, null, null).exports, I = {
            name: "Footer", data: function () {
                return {originDomain: "https://$D"}
            }, methods: {
                openLink: function (e) {
                    window.open(e)
                }
            }, created: function () {
                this.originDomain = window.origin
            }
        }, z = (n("a1c1"), Object(l.a)(I, (function () {
            var e = this, t = e.$createElement, a = e._self._c || t;
            return a("div", {staticClass: "col-12 bg_black"}, [a("div", {staticClass: "max_width_1400 margin_auto footer_height between_h_center padding_lr20"}, [a("div", {staticClass: "between_h_center col-12"}, [a("div", {staticClass: "col-6"}, [a("div", {
                staticClass: "cursor_pointer font_30 font_800 between_h_center content_start content_center_m",
                on: {
                    click: function (t) {
                        "/" === e.$route.path || e.$router.push("/")
                    }
                }
            }, [e._v("$P")]), a("div", {
                staticClass: "cursor_pointer between_h_center content_start content_center_m s_padding",
                on: {
                }
            }, [a("img", {
                staticClass: "height_24",
                attrs: {src: n("75f0"), alt: ""}
            }), a("span", {staticClass: "font_16 margin_l_5"}, [e._v(e._s(e.$t("audit")))])])]), a("div", {staticClass: "col-6"}, [a("div", {staticClass: "font_24 font_bold between_h_center content_end content_center_m"}, [a("img", {
                staticClass: "cursor_pointer s_img margin_l_20",
                attrs: {src: n("a2f9"), alt: ""},
                on: {
                    // click: function (t) {
                    //     return e.openLink(e.$params.telegram)
                    // }
                }
            }), a("img", {
                staticClass: "cursor_pointer s_img margin_l_20",
                attrs: {src: n("d677"), alt: ""},
                on: {
                    // click: function (t) {
                    //     return e.openLink(e.$params.github)
                    // }
                }
            }), a("img", {
                staticClass: "cursor_pointer s_img margin_l_20",
                attrs: {src: n("13a4"), alt: ""},
                on: {
                    // click: function (t) {
                    //     return e.openLink(e.$params.twitter)
                    // }
                }
            }), a("img", {
                staticClass: "cursor_pointer s_img margin_l_20",
                attrs: {src: n("9b61"), alt: ""},
                on: {
                    // click: function (t) {
                    //     return e.openLink(e.$params.medium)
                    // }
                }
            })]), a("div", {staticClass: "between_h_center content_end content_center_m s_padding"}, [a("img", {
                staticClass: "height_18",
                attrs: {src: n("8a25"), alt: ""}
            }), a("span", {staticClass: "font_14 margin_l_5"}, [e._v(e._s(e.$t("copyright")))]), a("span", {staticClass: "font_14 margin_l_5"}, [e._v(e._s(e.$t("reserved")))])])])])])])
        }), [], !1, null, "151019a6", null).exports), P = {
            name: "LanguageUp", data: function () {
                return {isShowSelect: !1}
            }, computed: Object(s.a)({}, Object(r.b)(["langList", "lang"])), methods: {
                changeLanguage: function (e) {
                    this.$store.commit("Set_Lang", e), this.isShowSelect = !1
                }
            }
        }, j = (n("a4af"), {
            name: "NavBar", components: {
                LanguageUp: Object(l.a)(P, (function () {
                    var e = this, t = e.$createElement, a = e._self._c || t;
                    return a("div", {
                        staticClass: "p_rel border_radius_5", on: {
                            mouseenter: function (t) {
                                e.isShowSelect = !0
                            }, mouseleave: function (t) {
                                e.isShowSelect = !1
                            }
                        }
                    }, [a("button", {
                        staticClass: "font_700 font_14 padding_tb10_lr20 between_h_center bg_white",
                        on: {
                            click: function (t) {
                                e.isShowSelect = !e.isShowSelect
                            }
                        }
                    })])
                }), [], !1, null, "23f54180", null).exports
            }, data: function () {
                return {
                    linkList: [{name: "dashboard", path: "/dashboard"}, {
                        name: "vaults",
                        path: "/vaults"
                    }, {name: "earn", path: "/earn"}, {name: "lending", path: "/lending"}, {
                        name: "statistics",
                        path: "/statistics"
                    }, {name: "wiki", path: "/wiki"}, {name: "faqs", path: "/faqs"}, {
                        name: "settings",
                        path: "/settings"
                    }]
                }
            }, props: {showMenu: {type: Boolean, default: !0}}, created: function () {
            }
        }), Q = (n("2467"), Object(l.a)(j, (function () {
            var e = this, t = e.$createElement, a = e._self._c || t;
            return a("div", {
                staticClass: "height_p_100 nav_bar_width bg_white border_r_light_grey d-flex flex-column justify-content-between",
                attrs: {showMenu: e.showMenu}
            }, [a("div", {staticClass: "li_cover padding_20 flex-fill p_rel"}, e._l(e.linkList, (function (t, i) {
                return a("li", {key: i}, [a("router-link", {
                    class: {route_active: e.$route.path === t.path || "/lending" == t.path && "/lendingD" == e.$route.path},
                    attrs: {to: t.path}
                }, [a("img", {
                    attrs: {
                        src: n("fb5e")("./" + ("/lending" == t.path && "/lendingD" == e.$route.path ? "lending_1" : e.$route.path === t.path ? t.name + "_1" : t.name) + ".png"),
                        alt: ""
                    }
                }), a("span", [e._v(e._s(e.$t("" + t.name)))])])], 1)
            })), 0), a("div", {staticClass: "height_80 mt-2 d-flex justify-content-center align-items-center"}, [a("LanguageUp")], 1)])
        }), [], !1, null, "536815a6", null).exports), L = {
            name: "Loading", data: function () {
                return {}
            }, methods: {}
        }, q = (n("80fe"), {
            components: {
                NavBar: Q,
                InnerHeader: R,
                Header: N,
                Footer: z,
                Loading: Object(l.a)(L, (function () {
                    return this.$createElement, this._self._c, this._m(0)
                }), [function () {
                    var e = this.$createElement, t = this._self._c || e;
                    return t("div", {staticClass: "loading"}, [t("div", {attrs: {id: "preloader"}}, [t("span"), t("span"), t("span"), t("span"), t("span")])])
                }], !1, null, "2154d2b7", null).exports
            }, computed: Object(s.a)({}, Object(r.b)(["isLoading"])), methods: {
                banTouch: function (e) {
                    e.preventDefault(e)
                }, searchChange: function (e) {
                }
            }, created: function () {
                document.addEventListener("gesturestart", this.banTouch), document.addEventListener("touchstart", this.banTouch)
            }, destroyed: function () {
                document.removeEventListener("gesturestart", this.banTouch), document.removeEventListener("touchstart", this.banTouch)
            }
        }), V = (n("5c0b"), Object(l.a)(q, (function () {
            var e = this.$createElement, t = this._self._c || e;
            return t("div", {attrs: {id: "app"}}, ["Home" === this.$route.name ? t("div", {staticClass: "height_p_100"}, [t("Header"), t("router-view", {staticClass: "app_container"}), t("Footer")], 1) : t("div", {staticClass: "app_cover between_h_center p_rel"}, [t("div", {staticClass: "fixed_header"}, [t("InnerHeader", {staticClass: "show_p"}), t("Header", {staticClass: "display_m"})], 1), t("div", {staticClass: "page_container between_h_center"}, [t("div", {staticClass: "nav_bar_cover height_p_100 show_p"}, [t("NavBar")], 1), t("div", {staticClass: "view_cover padding_20"}, [t("router-view")], 1)])]), t("Loading", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: this.isLoading,
                    expression: "isLoading"
                }]
            })], 1)
        }), [], !1, null, null, null).exports), H = (n("3ca3"), n("ddb0"), n("caad"), n("8c4f")), G = {
            name: "Home", data: function () {
                return {originDomain: "https://www.$D"}
            }, methods: {
                openLink: function (e) {
                    window.open(e)
                }
            }, beforeCreate: function () {
                document.querySelector("body").setAttribute("style", "background-color:#000")
            }, created: function () {
                this.originDomain = window.origin
            }
        }, K = (n("755f"), Object(l.a)(G, (function () {
            var e = this, t = e.$createElement, a = e._self._c || t;
            return a("div", {staticClass: "home between_h_center content_center"}, [a("div", [a("div", {staticClass: "font_70 font_700 padding_lr20"}, [e._v(e._s(e.$t("welcomeV2")))]), a("div", {staticClass: "font_30 font_500 padding_lr20 margin_t_20"}, [e._v(e._s(e.$t("welcomeText")))]), a("button", {
                staticClass: "font_30 font_500 bg_white padding_tb5_lr20 margin_t_40 border_radius_30",
                on: {
                    click: function (t) {
                        return OpenWindow()
                    }
                }
            }, [e._v(e._s(e.$t("launchApp")))])])])
        }), [], !1, null, "795c100b", null).exports);
        a.default.use(H.a);
        var W = H.a.prototype.push;
        H.a.prototype.push = function (e) {
            return W.call(this, e).catch((function (e) {
                return e
            }))
        };
        var J = [{path: "/", name: "Home", component: K}, {
            path: "/dashboard",
            name: "Dashboard",
            component: function () {
                return n.e("chunk-836a8c28").then(n.bind(null, "7277"))
            }
        }, {
            path: "/vaults", name: "Vaults", component: function () {
                return n.e("chunk-7af09786").then(n.bind(null, "1d14"))
            }
        }, {
            path: "/earn", name: "Earn", component: function () {
                return n.e("chunk-34aaae98").then(n.bind(null, "3127"))
            }
        }, {
            path: "/lending", name: "Lending", component: function () {
                return Promise.all([n.e("chunk-340cfbe4"), n.e("chunk-6bc5a0bf")]).then(n.bind(null, "3f28"))
            }
        }, {
            path: "/lendingD", name: "LendingD", component: function () {
                return Promise.all([n.e("chunk-340cfbe4"), n.e("chunk-7a36b7f0")]).then(n.bind(null, "ba5a"))
            }
        }, {
            path: "/statistics", name: "Statistics", component: function () {
                return n.e("chunk-7fa270a3").then(n.bind(null, "fcd1"))
            }
        }, {
            path: "/governance", name: "Governance", component: function () {
                return n.e("chunk-2d0c136e").then(n.bind(null, "44a9"))
            }
        }, {
            path: "/wiki", name: "Wiki", component: function () {
                return n.e("chunk-278d941d").then(n.bind(null, "dd3d"))
            }
        }, {
            path: "/faqs", name: "FAQs", component: function () {
                return n.e("chunk-aca1e1c8").then(n.bind(null, "9880"))
            }
        }, {
            path: "/settings", name: "Settings", component: function () {
                return n.e("chunk-635af657").then(n.bind(null, "f073"))
            }
        }], X = new H.a({mode: "hash", base: "", routes: J});
        X.beforeEach((function (e, t, n) {
            ["Home", "Dashboard", "Vaults", "Earn", "Lending", "LendingD", "EarnD", "Statistics", "Wiki", "FAQs", "Settings"].includes(e.name) && (g.a.commit("Set_Loading", !0), n())
        })), X.afterEach((function (e, t) {
            g.a.commit("Set_Loading", !1)
        }));
        var Z = X, $ = n("12cb"), ee = {
            name: "Notify",
            props: {
                align: {type: String, default: "left"},
                titleName: {type: String, default: "Tips"},
                cancelText: {type: String, default: "Cancel"},
                confirmText: {type: String, default: "Confirm"},
                showCancel: {type: Boolean, default: !0},
                showConfirm: {type: Boolean, default: !0},
                showLine: {type: Boolean, default: !1},
                show: {type: Boolean, default: !1}
            }
        }, te = (n("4262"), Object(l.a)(ee, (function () {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("div", {
                staticClass: "d-overlay",
                class: {"overlay-effect": e.show}
            }, [n("div", {
                staticClass: "d-modal d-effect",
                class: {"d-show": e.show}
            }, [n("div", {staticClass: "d-content"}, [n("div", {
                staticClass: "modal-header padding_10 p_rel",
                class: {
                    "bottom-border": e.showLine,
                    "place-center": "enter" == e.align,
                    "place-left": "left" == e.align,
                    "place-right": "right" == e.align
                }
            }, [n("span", {staticClass: "font_20 font_600 text_black"}, [e._v(e._s(e.titleName))]), n("span", {
                staticClass: "r_v_center padding_lr20 font_30 text_black cursor_pointer",
                on: {
                    click: function (t) {
                        return e.$emit("closeNotify")
                    }
                }
            }, [e._v("×")])]), n("div", {staticClass: "modal-body"}, [e._t("body"), e.showCancel || e.showConfirm ? n("div", {staticClass: "modal_btn between_h_center content_evenly"}, [e.showCancel ? n("button", {
                staticClass: "font_14 text_white bg_grey",
                on: {
                    click: function (t) {
                        return e.$emit("cancel")
                    }
                }
            }, [e._v(e._s(e.$t("cancel")))]) : e._e(), e.showConfirm ? n("button", {
                staticClass: "font_14 text_white bg_pink",
                on: {
                    click: function (t) {
                        return e.$emit("confirm")
                    }
                }
            }, [e._v(e._s(e.$t("confirm")))]) : e._e()]) : e._e()], 2)])])])
        }), [], !1, null, "0a9b7ee4", null).exports), ne = {
            name: "Loading",
            props: {
                stop: {type: Boolean, default: !0},
                align: {type: String, default: "center"},
                titleName: {type: String, default: "Tips"},
                showLine: {type: Boolean, default: !1},
                show: {type: Boolean, default: !1}
            }
        }, ae = (n("2f00"), Object(l.a)(ne, (function () {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("div", {
                staticClass: "l-overlay",
                class: {"overlay-effect": e.show}
            }, [n("div", {
                staticClass: "l-modal l-effect",
                class: {"d-show": e.show}
            }, [n("div", {staticClass: "d-content"}, [n("div", {
                staticClass: "modal-header",
                class: {
                    "bottom-border": e.showLine,
                    "place-center": "enter" == e.align,
                    "place-left": "left" == e.align,
                    "place-right": "right" == e.align
                }
            }, [n("span", {staticClass: "text_grey font_24"}, [e._v(e._s(e.titleName))]), n("span", {
                staticClass: "r_v_center header-close text_grey font_30",
                on: {
                    click: function (t) {
                        return e.$emit("closeLoading")
                    }
                }
            }, [e._v("×")])]), n("div", {staticClass: "modal-body"}, [n("div", {staticClass: "loading-cover"}, [n("div", {
                staticClass: "loading-css",
                class: {loading: e.stop, "loading-stop": !e.stop}
            })]), n("div", {staticClass: "loading-text"}, [e._t("body")], 2)])])])])
        }), [], !1, null, "01c8de16", null).exports), ie = {
            name: "Message", data: function () {
                return {visible: !1, message: "", type: 1}
            }
        }, se = (n("59a4"), Object(l.a)(ie, (function () {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("div", [e.visible && 1 == e.type ? n("div", {
                staticClass: "message-tip",
                attrs: {id: "tips-success"}
            }, [n("div", [e._v(e._s(e.message))])]) : e._e(), e.visible && 2 == e.type ? n("div", {
                staticClass: "message-tip",
                attrs: {id: "tips-warn"}
            }, [n("div", [e._v(e._s(e.message))])]) : e._e(), e.visible && 3 == e.type ? n("div", {
                staticClass: "message-tip",
                attrs: {id: "tips-error"}
            }, [n("div", [e._v(e._s(e.message))])]) : e._e()])
        }), [], !1, null, "5ea652fa", null).exports), re = {
            install: function (e) {
                var t, n = new (e.extend(se));
                n.$mount(document.createElement("div")), document.body.appendChild(n.$el), e.prototype.$message = {
                    messageMode: function (e, a, i) {
                        clearTimeout(t), t = setTimeout((function () {
                            n.visible = !1
                        }), i), n.message = e, n.visible = !0, n.type = a
                    }, success: function (e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3e3;
                        this.messageMode(e, 1, t)
                    }, warn: function (e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3e3;
                        this.messageMode(e, 2, t)
                    }, error: function (e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3e3;
                        this.messageMode(e, 3, t)
                    }
                }
            }
        }, oe = re, le = n("5f5b"), pe = n("b1e0"), ue = n("2a68"), de = n("bb33").params;
        a.default.prototype.$echarts = i, a.default.prototype.$plus = ue.plus, a.default.prototype.$dividedBy = ue.dividedBy, a.default.prototype.$toFormat = ue.toFormat, a.default.prototype.$toThreeFilter = ue.toThreeFilter, a.default.prototype.$greaterThan = ue.greaterThan, a.default.prototype.$smallerThan = ue.smallerThan, a.default.prototype.$compareAscend = ue.compareAscend, a.default.prototype.$compareDescend = ue.compareDescend, a.default.prototype.$bigNumberFormat = ue.bigNumberFormat, a.default.prototype.$getUrlKey = ue.getUrlKey, a.default.prototype.$countdown = ue.countdown, a.default.prototype.$params = de, a.default.component(ae.name, ae), a.default.component(te.name, te), a.default.use(le.a), a.default.use(pe.a), a.default.use(oe), a.default.use(te), a.default.use(ae), a.default.config.productionTip = !1, a.default.prototype.$isTest = !1, new a.default({
            router: Z,
            store: g.a,
            i18n: $.a,
            render: function (e) {
                return e(V)
            }
        }).$mount("#app")
    }, 5765: function (e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAmCAYAAAC76qlaAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAI7SURBVHgBzZiPdcIgEMavnSDdgA3aERyhGzSdoCPUTuAIdgPbCeIGthPgBrrB1zshT4pgCKDm99498/hzfsBxJBAVAqBhe2frcGTD1tJUYXGKTSOO1CmaGgOiXfENTQUJBaQzp6lg49jlEybelX126WgqBGZVOXWNX0mVuad67J3nwZjGrbKR94fC0oZJY59dNl7f22UjdjxHOq3XVyf0kTb1s5Gd2SQBXr/bZyNkLDmmlI3sLLqCOphQagJtfZRTd/FslE1AeOPUqSkL7zxtSyRmI9/RC9sOcbS0oUqgIBv5jnSCgx1VApnZKORoDLIyHduCbUaZoMYBhDI0Co5ojMhGg8Jj5QkDUHRF7lyxhwKmF051+LH2za6/qBapM27LntiecXrCXX9lxgj3+oWO6BRkgz9RKbnCnXZj8nIqsmFXGMjjRcITJmaG/NASdHAAlxbu+CtdmXff4VWEW58dylgUC0cddGSAkr1i4dVKm+Q83pe7wqkCvl/vP2b8439M7LnLQ82v/KrApMxVoOqjbxAMiVh5rD6XiOi3SPM5DQkMdFriwu8jMIdaNyh6pHBBw7zRVb02wPFyaJck+ozAITTMCsyoAJjDaXFGsJS3ob4nWSUDuXpbs/2SeQvcktn5W0egrJCYbDjF9sj2TOev6tZsr66ff+D896Y7co3rEJ1lX3g7IGpn28jGmeNyA9BI/frJBcd3co0yZFKWyNgrd1QIzEHRm8RuH8/Ka7olsx9kHxz2A8fvmjL5A5gjtDDfZnJHAAAAAElFTkSuQmCC"
    }, "59a4": function (e, t, n) {
        "use strict";
        n("a195")
    }, "5aeb": function (e, t, n) {
        "use strict";
        n.r(t), n.d(t, "lendingPair", (function () {
            return s
        }));
        var a = n("d028"), i = n("2f7b"), s = [{
            token: "YFO",
            poolVolume: "--",
            supplied: "--",
            borrowed: "--",
            supplyRate: "--",
            borrowRate: "--",
            distributionRate: "--",
            tokenBalance: 0,
            borrowTokenBalance: 0,
            tokenDecimals: a.YFO.decimals,
            cTokenDecimals: 8,
            isEnterMarket: !1,
            loanLimitRate: .8,
            tokenAddress: a.YFO.address,
            cTokenAddress: i.YFO
        }, {
            token: "OBS",
            poolVolume: "--",
            supplied: "--",
            borrowed: "--",
            supplyRate: "--",
            borrowRate: "--",
            distributionRate: "--",
            tokenBalance: 0,
            borrowTokenBalance: 0,
            tokenDecimals: a.OBS.decimals,
            cTokenDecimals: 8,
            isEnterMarket: !1,
            loanLimitRate: .8,
            tokenAddress: a.OBS.address,
            cTokenAddress: i.OBS
        }, {
            token: "BNB",
            poolVolume: "--",
            supplied: "--",
            borrowed: "--",
            supplyRate: "--",
            borrowRate: "--",
            distributionRate: "--",
            tokenBalance: 0,
            borrowTokenBalance: 0,
            tokenDecimals: a.BNB.decimals,
            cTokenDecimals: 8,
            isEnterMarket: !1,
            loanLimitRate: .8,
            tokenAddress: a.BNB.address,
            cTokenAddress: i.BNB
        }, {
            token: "USDT",
            poolVolume: "--",
            supplied: "--",
            borrowed: "--",
            supplyRate: "--",
            borrowRate: "--",
            distributionRate: "--",
            tokenBalance: 0,
            borrowTokenBalance: 0,
            tokenDecimals: a.USDT.decimals,
            cTokenDecimals: 8,
            isEnterMarket: !1,
            loanLimitRate: .8,
            tokenAddress: a.USDT.address,
            cTokenAddress: i.USDT
        }, {
            token: "BUSD",
            poolVolume: "--",
            supplied: "--",
            borrowed: "--",
            supplyRate: "--",
            borrowRate: "--",
            distributionRate: "--",
            tokenBalance: 0,
            borrowTokenBalance: 0,
            tokenDecimals: a.BUSD.decimals,
            cTokenDecimals: 8,
            isEnterMarket: !1,
            loanLimitRate: .8,
            tokenAddress: a.BUSD.address,
            cTokenAddress: i.BUSD
        }]
    }, "5c0b": function (e, t, n) {
        "use strict";
        n("0554")
    }, "5c44": function (e) {
        e.exports = JSON.parse('[{"constant":true,"inputs":[],"name":"getReserves","outputs":[{"internalType":"uint112","name":"_reserve0","type":"uint112"},{"internalType":"uint112","name":"_reserve1","type":"uint112"},{"internalType":"uint32","name":"_blockTimestampLast","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"}]')
    }, "5e53": function (e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEWSURBVHgB7ZmxDYMwEEXPVgpElREYIStkExoEXdgANgAqBB2bMEJGYIR0VEDOUiIRFIWQE9go9yrLPtlfvuMjnUUQBG7f94kQ4gjb0kgp4zzPq09BchiGSIM4hdN1XToXJFUgaOKbi5FgOIfpRFEUAlbE9/1hSbzxN8gCqbBAKoe5gKVf3RSqK3CKqey/Btf+s8zBKabCPsg+qBv2QSqcYir/44O/1urc/pxiKuyDS/ef1iSnmMr+BIZhuGkzc3wednud6boSWI8n2rZN3gWuxfM8JRRb0fF4Dbu/V4GLEQ5iMBDU5UrLsjIcN2AeTVmWlUzT9Ia94jOYJbJ5aIIXk/Q8z8WngQsOT6CHGtNa27adqYtTE3eUml/FUgL/7wAAAABJRU5ErkJggg=="
    }, 6: function (e, t) {
    }, "652a": function (e) {
        e.exports = JSON.parse('{"OBC":{"address":"0xbf6f7d817d029CCd7928e4CEF3a9729e114C991b","decimals":18},"OBS":{"address":"0x095956B142431Eb9Cf88B99F392540B91aCbF4ad","decimals":18},"OBB":{"address":"0x4Ce3e25A36Ba370201729Ef775367db756128270","decimals":18},"BNB":{"address":"0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c","decimals":18},"WBNB":{"address":"0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c","decimals":18},"YFO":{"address":"0xAc0C8dA4A4748d8d821A0973d00b157aA78C473D","decimals":18},"CAKE":{"address":"0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82","decimals":18},"BUSD":{"address":"0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56","decimals":18},"USDC":{"address":"0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d","decimals":18},"USDT":{"address":"0x55d398326f99059fF775485246999027B3197955","decimals":18},"BTC":{"address":"0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c","decimals":18},"BTCB":{"address":"0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c","decimals":18},"ETH":{"address":"0x2170Ed0880ac9A755fd29B2688956BD959F933F8","decimals":18},"MDX":{"address":"0x9C65AB58d8d978DB963e63f2bfB7121627e3a739","decimals":18}}')
    }, 6547: function (e, t, n) {
        var a = n("2453");
        a.__esModule && (a = a.default), "string" == typeof a && (a = [[e.i, a, ""]]), a.locals && (e.exports = a.locals), (0, n("499e").default)("6fd53229", a, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    }, "670d": function (e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAqCAYAAADBNhlmAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARdSURBVHgB7Vg7UtxAEG1hB/wCfANxAq8LqHJmkTkDTsC6il+RIE7AErkcsUT8AosTACewyAigWJ9gdQNwwicA/HoYyaMujXakpTbyq4IZ9c60nmb6N0P0H/3Boz6wurq68fLyEnie10A7gXaC5ejfop+gTfDYOTw83KaaeE/9oQ0iqpO2us9EG0wc7Tz+ahMcoppYX19vuI5dWloKqCZqE3x6etpwHTs0NPSFaqIWwbW1NR9N05TB3poHBwce/9HrtmbAVreWl5edVzw3lyqCX4QVOUHXN8QJiE2a4+BAXTkGRGf39/cTqoBCJ4HyazQdbOPx+Ph4h2UPDw/sqYskVo4BeatAtglCJ4bIh6wL3ZFFr4+PnJV6vAJybTTO9sXkbGEEprBVRL5EVxu6Nk3ZO6GwieY7OaKMHOPy8vJ8ZmaGuwE5ACv+eWpq6s/V1dVFJjPI8Rb8orzd2JA8Pz83j46Ozh3Gst02YbdbLro5yI+Ojk622+1bfn5v/JBTYGQDJUOfJ8QgFrkSS4HxEZoI5jNHrx7eMPWaWYjbu7s75qK2Wq2gXr2u0BvCaHdpAFhZWQlBbMeUjYyMfOBVVHFQr56JZFDkGLBjdszElGEVlaOmgToQc2IaPGLxHPI/j3Mq4tK1HA2jbu7t7R1TD4RhOIFYFmIXOJ0FWtzB/LbLfAZHD8z/acrYB6Djk2mDOQ+W3mRR3MvznbJHWdZRW8wdFjCpdAR70/39/WKZYoewpD6AV9k2QMde35SZH5UVC4ottkUQCKootpFMDb4IeMecEEXmistqJhffdMFpUyxfGnFowJxJ/HYs9ARkh28+IM7mokeOIJjHZZMFGoLENtsrfz1sNxRjA1c9COodshHsB8PDw5n9wqsn6I2QIyjLeGxVp2RubD7AoXbYq9khsE2tCnoS80EeD3IEC8r4hCzAlsZCxLGsC6I3+E16f5vsyG+pOB5kBIvKeOCULMCWsjEn1BsJUpk1YGO1z4Qo1Fz+ETQCrrNidgiOVz1IJnqMFWNjY6cy/jKXlKTHHXzFdVrupOBDUBlBE7reY/NIbTjG/BjevFuWiVKgmpkXxwMF8HpNdRhwIwhGqGa+0QCBdMe5uGmI1EFMbbHMIORYor8xAvEc8z9FUBu8CZ+LSBoQ9Lt8U8aBX7WpAEvMFW1GSpf8qhzXExI0HTyfwTZPqQZg74E+YgamXi7/bSaWEeQAi6Telc5iARcWrQr1XqDrPd9heK5Ey46dFxcXDzjyPeLHrw5KOBTMY7yHI2JM5eRampxT+sNYPgtlRUvuXMzn0enpaVb02UGXqlLKSGpyW+QOPrj/yL2jaBTskYM2n30jBNLfLHt8fPzIZ2EqvvpYkHZZVMZrRBa9DazcJzm48uWRpcx3ujwCkQVZTvVC5XKLjZdfJMS+PpQr2Mr4quTUPKqJihdDtTNTPwWr8/WHLOOroN9b/heXcfrWtRb6uuXXW8y3+b6ZDYwsxJknpj7wF91aimjvX41QAAAAAElFTkSuQmCC"
    }, 7: function (e, t) {
    }, 7234: function (e, t, n) {
        "use strict";
        n.r(t), n.d(t, "lendingPair", (function () {
            return s
        }));
        var a = n("652a"), i = n("553e"), s = [{
            token: "BNB",
            poolVolume: "--",
            supplied: "--",
            borrowed: "--",
            supplyRate: "--",
            borrowRate: "--",
            distributionRate: "--",
            tokenBalance: 0,
            tokenPrice: 0,
            borrowTokenBalance: 0,
            tokenDecimals: a.BNB.decimals,
            cTokenDecimals: 8,
            isEnterMarket: !1,
            loanLimitRate: .8,
            tokenAddress: a.BNB.address,
            cTokenAddress: i.BNB
        }, {
            token: "YFO",
            poolVolume: "--",
            supplied: "--",
            borrowed: "--",
            supplyRate: "--",
            borrowRate: "--",
            distributionRate: "--",
            tokenBalance: 0,
            tokenPrice: 0,
            borrowTokenBalance: 0,
            tokenDecimals: a.YFO.decimals,
            cTokenDecimals: 8,
            isEnterMarket: !1,
            loanLimitRate: .8,
            tokenAddress: a.YFO.address,
            cTokenAddress: i.YFO
        }, {
            token: "OBS",
            poolVolume: "--",
            supplied: "--",
            borrowed: "--",
            supplyRate: "--",
            borrowRate: "--",
            distributionRate: "--",
            tokenBalance: 0,
            tokenPrice: 0,
            borrowTokenBalance: 0,
            tokenDecimals: a.OBS.decimals,
            cTokenDecimals: 8,
            isEnterMarket: !1,
            loanLimitRate: .8,
            tokenAddress: a.OBS.address,
            cTokenAddress: i.OBS
        }, {
            token: "USDT",
            poolVolume: "--",
            supplied: "--",
            borrowed: "--",
            supplyRate: "--",
            borrowRate: "--",
            distributionRate: "--",
            tokenBalance: 0,
            tokenPrice: 0,
            borrowTokenBalance: 0,
            tokenDecimals: a.USDT.decimals,
            cTokenDecimals: 8,
            isEnterMarket: !1,
            loanLimitRate: .8,
            tokenAddress: a.USDT.address,
            cTokenAddress: i.USDT
        }, {
            token: "BUSD",
            poolVolume: "--",
            supplied: "--",
            borrowed: "--",
            supplyRate: "--",
            borrowRate: "--",
            distributionRate: "--",
            tokenBalance: 0,
            tokenPrice: 0,
            borrowTokenBalance: 0,
            tokenDecimals: a.BUSD.decimals,
            cTokenDecimals: 8,
            isEnterMarket: !1,
            loanLimitRate: .8,
            tokenAddress: a.BUSD.address,
            cTokenAddress: i.BUSD
        }, {
            token: "ETH",
            poolVolume: "--",
            supplied: "--",
            borrowed: "--",
            supplyRate: "--",
            borrowRate: "--",
            distributionRate: "--",
            tokenBalance: 0,
            tokenPrice: 0,
            borrowTokenBalance: 0,
            tokenDecimals: a.ETH.decimals,
            cTokenDecimals: 8,
            isEnterMarket: !1,
            loanLimitRate: .8,
            tokenAddress: a.ETH.address,
            cTokenAddress: i.ETH
        }, {
            token: "BTC",
            poolVolume: "--",
            supplied: "--",
            borrowed: "--",
            supplyRate: "--",
            borrowRate: "--",
            distributionRate: "--",
            tokenBalance: 0,
            tokenPrice: 0,
            borrowTokenBalance: 0,
            tokenDecimals: a.BTC.decimals,
            cTokenDecimals: 8,
            isEnterMarket: !1,
            loanLimitRate: .8,
            tokenAddress: a.BTC.address,
            cTokenAddress: i.BTC
        }, {
            token: "OBC",
            poolVolume: "--",
            supplied: "--",
            borrowed: "--",
            supplyRate: "--",
            borrowRate: "--",
            distributionRate: "--",
            tokenBalance: 0,
            tokenPrice: 0,
            borrowTokenBalance: 0,
            tokenDecimals: a.OBC.decimals,
            cTokenDecimals: 8,
            isEnterMarket: !1,
            loanLimitRate: .8,
            tokenAddress: a.OBC.address,
            cTokenAddress: i.OBC
        }]
    }, "739f": function (e, t, n) {
        (t = n("24fb")(!1)).push([e.i, ".lang_wraper[data-v-f3bf12ea]{z-index:10000;position:absolute;text-align:left;width:100%;top:110%;left:0;border-radius:5px;transform-origin:center top;color:var(--black);background-color:var(--white);cursor:pointer;overflow-y:auto;height:0;transition:height .2s linear}.fix_lang[data-v-f3bf12ea]{position:absolute;top:0}.select_lang_up[data-v-f3bf12ea]{position:absolute;bottom:100%;left:0;width:100%;text-align:left;border-radius:.5rem;transform-origin:center top;color:var(--black);background-color:var(--white);cursor:pointer;max-width:130px;overflow-y:auto;height:0;transition:height .2s linear}.lang_wraper_effect[data-v-f3bf12ea]{height:160px;box-shadow:0 0 1px 1px var(--light-grey)}li[data-v-f3bf12ea]{font-weight:600}li[data-v-f3bf12ea]:hover{font-weight:700;color:var(--grey)}.lang_wraper[data-v-f3bf12ea]::-webkit-scrollbar,.select_lang_up[data-v-f3bf12ea]::-webkit-scrollbar{width:0;height:0;margin:0 auto}.lang_wraper[data-v-f3bf12ea]::-webkit-scrollbar-thumb,.lang_wraper[data-v-f3bf12ea]::-webkit-scrollbar-track,.select_lang_up[data-v-f3bf12ea]::-webkit-scrollbar-thumb,.select_lang_up[data-v-f3bf12ea]::-webkit-scrollbar-track{background-color:var(--grey-dark);box-shadow:inset 0 0 5px rgba(0,0,0,.2)}.lang_wraper[data-v-f3bf12ea]::-webkit-scrollbar-button,.select_lang_up[data-v-f3bf12ea]::-webkit-scrollbar-button{height:0;background-color:var(--grey-dark)}.lang_wraper[data-v-f3bf12ea]::-o-scrollbar,.select_lang_up[data-v-f3bf12ea]::-o-scrollbar{width:0;height:0;margin:0 auto}.lang_wraper[data-v-f3bf12ea]::-o-scrollbar-thumb,.select_lang_up[data-v-f3bf12ea]::-o-scrollbar-thumb{background-color:#1b5485;box-shadow:inset 0 0 5px rgba(0,0,0,.2)}.lang_wraper[data-v-f3bf12ea]::-o-scrollbar-track,.select_lang_up[data-v-f3bf12ea]::-o-scrollbar-track{box-shadow:inset 0 0 5px rgba(0,0,0,.2);background-color:var(--grey-dark)}.lang_wraper[data-v-f3bf12ea]::-o-scrollbar-button,.select_lang_up[data-v-f3bf12ea]::-o-scrollbar-button{height:0;background-color:var(--grey-dark)}.lang_wraper[data-v-f3bf12ea]::-moz-scrollbar,.select_lang_up[data-v-f3bf12ea]::-moz-scrollbar{width:0;height:0;margin:0 auto}.lang_wraper[data-v-f3bf12ea]::-moz-scrollbar-thumb,.select_lang_up[data-v-f3bf12ea]::-moz-scrollbar-thumb{background-color:#1b5485;box-shadow:inset 0 0 5px rgba(0,0,0,.2)}.lang_wraper[data-v-f3bf12ea]::-moz-scrollbar-track,.select_lang_up[data-v-f3bf12ea]::-moz-scrollbar-track{box-shadow:inset 0 0 5px rgba(0,0,0,.2);background-color:var(--grey-dark)}.lang_wraper[data-v-f3bf12ea]::-moz-scrollbar-button,.select_lang_up[data-v-f3bf12ea]::-moz-scrollbar-button{height:0;background-color:var(--grey-dark)}.lang_wraper[data-v-f3bf12ea]::-ms-scrollbar,.select_lang_up[data-v-f3bf12ea]::-ms-scrollbar{width:0;height:0;margin:0 auto;border-radius:10px}.lang_wraper[data-v-f3bf12ea]::-ms-scrollbar-thumb,.select_lang_up[data-v-f3bf12ea]::-ms-scrollbar-thumb{background-color:#1b5485;box-shadow:inset 0 0 5px rgba(0,0,0,.2)}.lang_wraper[data-v-f3bf12ea]::-ms-scrollbar-track,.select_lang_up[data-v-f3bf12ea]::-ms-scrollbar-track{box-shadow:inset 0 0 5px rgba(0,0,0,.2);background-color:var(--grey-dark)}.lang_wraper[data-v-f3bf12ea]::-ms-scrollbar-button,.select_lang_up[data-v-f3bf12ea]::-ms-scrollbar-button{height:0;background-color:var(--grey-dark)}", ""]), e.exports = t
    }, "73cf": function (e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAABACAYAAABFqxrgAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAAB3RJTUUH5QMcCAsMM2N2PgAABtZJREFUeNrtm29oVXUYxz/P2b27bmubf9JJc70QRJIpmn8DwzISfeeLIAiyoKSCLMnNRVjZHzNTjDAkiCIQoihDemH1IpPwRfi3UtMIAnUTNp3K1nZ3d3fu04vfudvdds48997f2RT3hbHtnHvP73k+53l+f87vOTCucY1rXAOS0WhEGxuHHNAcC2Tgf5GB897fsnPn7QtBN20yjkh/E6VANVCN6gxgMlCOSALVXiCJyHWgBdVriHSg2pMLJyog1iFoQ4P5Ix6HdHoSIvXA/cBCoB6oQbXcg1KCiINqBnARSQPdQDuqZ4GTwElETtHT004iYa6dySC7d996EPpDXjUOzAHWAI8iMh+YCDj5XbA/ZW4AfwI/AT8AfyGSAnuRUTQE3bw5a3AJsATVdcAaROrydnxkIIpIM3AI2Af8imoakaJhFAVBGxqMgY5TCzwPPAXUWXF8ZLWi+jWwF5G/obioKBiCNjSA6wqx2EpgC/AgJhpGR6oK/IHI28D3qLqya9foQfA6vwSwDtiCyL2j5vxwtQIfofoJcJ3ubmTv3rwukHfOegAmAluBXWMMAMxo8ybwIVBLRUXeF8grEjwAdwHvA88BsZx5wFgrg+o3wAZEruTTR4SOBA9AKbARWI9IcQBUIZMZ+MmdRRYmB3gM2AZM7J+vhFAoL7SxEVQd4FlgByITizJXFUpLYcYMqKqCjg5oaYFUCguRlUJ1G6rbcZy+MBERC200PAS8bgVAeTmsWgXz5xsY6TScPg0HD0J3d7EgEsDLiPwDfBXmCzdNB28meI8HYEbRAFRh3jxYtgwqKsz0urwcFi82x3IXVIVKZArwGqr3DVu8FQIB0/k9AywvzjJP8TjMnAklQ6YUjgOzZ0NZmZVmMOuUF4GENjUVDsHrXBaQ7QhtKBYLdjQeHw6ncAkijwMr6eoqHAIQR/VJoLg0yJXrmg7QTz090NdnCYEATAGepqysQjdsyB+CFwX1wFpsLrn7+iCZDIbgutaaMo7oI6guo7IyfwhkMgKsRqTWqlGZjHE2CIKtSMhKZDKwllQqMM+CITjOJGA1tpbDxiDT8yeT/iNAFJFgovjhkUY2Xwe1qQlE6r2nQvaVTJqIGNRoDhzbU3GRmcCioOHSCfgSqC7ALJRsGxQMIShNilcZIg8E+esPwXVLEVmCzVTIlR+ETMYcj2pBprrIe7YZEoJqGaqzo7HGgzA097MQopJIHSJTw0MQmYbI3ZEZ1NPjHwnRpQOoVqHqO9IFhXsNkP/TibBKp6G3d/Ax1402Eow/NX4n/KfCqhVAPJL8FDFzgaF3faSZpJ12Swm4sbGAL0wg7DK7ELnucAhRTJQGywHKgk6MvvxCPztRGoPHdUGjQw+q0d2WoEiwP1vMVQbw7XSC0qELSEdmjl+fkExGmw5m09d3TR2UDq1BX7AivzlB9JHQ5fkVEoJqG6pXIzElm/NDF1FRQxDpQKQlPASRJCLnIjQILl2CGzcGgFy4MBiSfV0ArvidCBoGe4GjwBNEMYKIwMWLsH8/1NVBWxucPx/1yHAUU/sQGgLA75jagMmRQHBd4/i5cwMVLdFBSHoQMn4nfe+y7NwJqmdRPROVVf0wonXeSPVfVE8EbcSM9HjtOvAjAfSKNMo8Yq+shJoaswtVUmJjK863NeAXVJuDPhCcDo6jwI+ovuBVndgDMGECLF8O9fUGRHc3nD0Lhw+bUcJmZKheAw6QSAQOPYGR4BU8nAEOeDTtAFCFuXNh5UqorTVRMH06rFgBS5eaCLEZESI/I/IbnZ2BH7lZz59GZB/QjC3F4zBrlvmdq1gM5swxUWJDBmQ78AXJZJfs2VMYBC8aTgGfWltLiBiHg87ZSwX16poO3axwI8wcoA/Vz4AjVkxLp802vF/INzfbfLp0BvgYSMmOHcVB8IaVy8A7I/WwoZS9y8eOwfHj0NU1sCN16hQcOWJnOa3aDryHyDl79QnmEfxh4F3gA6CqKBAdHXDgAJw4AdXV0NlpZpB2ijR6gT2ofhv2WqFbzKlYewPYXPQudXakyG622OkPMqh+ichGVNvDlvQVUrhVDWwH1nNrFW65qH4HbETkcj6FW3l74IGoAl4BXkJk0lh7j2oK+Bx4C5HWfKtb814heiHWgcg2oBHVi2OMoBWRrcCrQOvNCjJ8fSq05Tu+rHcQiDu5wLsfxJ1e6j/IzpFf+piUd1u300sfw2wf/vrPXFQXIrLIgzMNKAcSqCYw0ZJBpBdIAd3ejO88cBw4cdu8/jMMxvAXwRKYobUaUw1Xg+pUoBL4D5GrQBvZF8Ggk+xmye32IlggEMenexj6auDQ4xbyfVzjGte48tX/hbbfTXZuqv4AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDMtMjhUMDg6MTE6MTIrMDA6MDAwt/03AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTAzLTI4VDA4OjExOjEyKzAwOjAwQepFiwAAAABJRU5ErkJggg=="
    }, "73d7": function (e) {
        e.exports = JSON.parse('[{"inputs":[{"internalType":"contract ComptrollerInterface","name":"comptroller_","type":"address"},{"internalType":"contract InterestRateModel","name":"interestRateModel_","type":"address"},{"internalType":"uint256","name":"initialExchangeRateMantissa_","type":"uint256"},{"internalType":"string","name":"name_","type":"string"},{"internalType":"string","name":"symbol_","type":"string"},{"internalType":"uint8","name":"decimals_","type":"uint8"},{"internalType":"address payable","name":"admin_","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"cashPrior","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"interestAccumulated","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"borrowIndex","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalBorrows","type":"uint256"}],"name":"AccrueInterest","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"borrower","type":"address"},{"indexed":false,"internalType":"uint256","name":"borrowAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"accountBorrows","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalBorrows","type":"uint256"}],"name":"Borrow","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"error","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"info","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"detail","type":"uint256"}],"name":"Failure","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"liquidator","type":"address"},{"indexed":false,"internalType":"address","name":"borrower","type":"address"},{"indexed":false,"internalType":"uint256","name":"repayAmount","type":"uint256"},{"indexed":false,"internalType":"address","name":"cTokenCollateral","type":"address"},{"indexed":false,"internalType":"uint256","name":"seizeTokens","type":"uint256"}],"name":"LiquidateBorrow","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"minter","type":"address"},{"indexed":false,"internalType":"uint256","name":"mintAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"mintTokens","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"oldAdmin","type":"address"},{"indexed":false,"internalType":"address","name":"newAdmin","type":"address"}],"name":"NewAdmin","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"contract ComptrollerInterface","name":"oldComptroller","type":"address"},{"indexed":false,"internalType":"contract ComptrollerInterface","name":"newComptroller","type":"address"}],"name":"NewComptroller","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"contract InterestRateModel","name":"oldInterestRateModel","type":"address"},{"indexed":false,"internalType":"contract InterestRateModel","name":"newInterestRateModel","type":"address"}],"name":"NewMarketInterestRateModel","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"oldPendingAdmin","type":"address"},{"indexed":false,"internalType":"address","name":"newPendingAdmin","type":"address"}],"name":"NewPendingAdmin","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"oldReserveFactorMantissa","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newReserveFactorMantissa","type":"uint256"}],"name":"NewReserveFactor","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"redeemer","type":"address"},{"indexed":false,"internalType":"uint256","name":"redeemAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"redeemTokens","type":"uint256"}],"name":"Redeem","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"payer","type":"address"},{"indexed":false,"internalType":"address","name":"borrower","type":"address"},{"indexed":false,"internalType":"uint256","name":"repayAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"accountBorrows","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalBorrows","type":"uint256"}],"name":"RepayBorrow","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"benefactor","type":"address"},{"indexed":false,"internalType":"uint256","name":"addAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newTotalReserves","type":"uint256"}],"name":"ReservesAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"admin","type":"address"},{"indexed":false,"internalType":"uint256","name":"reduceAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newTotalReserves","type":"uint256"}],"name":"ReservesReduced","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Transfer","type":"event"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"constant":false,"inputs":[],"name":"_acceptAdmin","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"reduceAmount","type":"uint256"}],"name":"_reduceReserves","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"contract ComptrollerInterface","name":"newComptroller","type":"address"}],"name":"_setComptroller","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"contract InterestRateModel","name":"newInterestRateModel","type":"address"}],"name":"_setInterestRateModel","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address payable","name":"newPendingAdmin","type":"address"}],"name":"_setPendingAdmin","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"newReserveFactorMantissa","type":"uint256"}],"name":"_setReserveFactor","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"accrualBlockNumber","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"accrueInterest","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"admin","outputs":[{"internalType":"address payable","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOfUnderlying","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"borrowAmount","type":"uint256"}],"name":"borrow","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"borrowBalanceCurrent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"borrowBalanceStored","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"borrowIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"borrowRatePerBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"comptroller","outputs":[{"internalType":"contract ComptrollerInterface","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"exchangeRateCurrent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"exchangeRateStored","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getAccountSnapshot","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getCash","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"contract ComptrollerInterface","name":"comptroller_","type":"address"},{"internalType":"contract InterestRateModel","name":"interestRateModel_","type":"address"},{"internalType":"uint256","name":"initialExchangeRateMantissa_","type":"uint256"},{"internalType":"string","name":"name_","type":"string"},{"internalType":"string","name":"symbol_","type":"string"},{"internalType":"uint8","name":"decimals_","type":"uint8"}],"name":"initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"interestRateModel","outputs":[{"internalType":"contract InterestRateModel","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isCToken","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"borrower","type":"address"},{"internalType":"contract CToken","name":"cTokenCollateral","type":"address"}],"name":"liquidateBorrow","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[],"name":"mint","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"pendingAdmin","outputs":[{"internalType":"address payable","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"redeemTokens","type":"uint256"}],"name":"redeem","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"redeemAmount","type":"uint256"}],"name":"redeemUnderlying","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"repayBorrow","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"borrower","type":"address"}],"name":"repayBorrowBehalf","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"reserveFactorMantissa","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"liquidator","type":"address"},{"internalType":"address","name":"borrower","type":"address"},{"internalType":"uint256","name":"seizeTokens","type":"uint256"}],"name":"seize","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"supplyRatePerBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalBorrows","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"totalBorrowsCurrent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalReserves","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"src","type":"address"},{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}]')
    }, "73f7": function (e, t, n) {
        "use strict";
        n("10b8")
    }, "74ac": function (e, t, n) {
        var a = n("acdd");
        a.__esModule && (a = a.default), "string" == typeof a && (a = [[e.i, a, ""]]), a.locals && (e.exports = a.locals), (0, n("499e").default)("7c9e3559", a, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    }, "755f": function (e, t, n) {
        "use strict";
        n("043a")
    }, "75f0": function (e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJzSURBVHgB7ZiBsZswDIaVXgfIBmWEbNCMkA3CBu9tAJ0g7QSM8EagG6QbmE6QdoK/djEXIQSYYN57987fnQ4ftmTLlmUDUSKRSCQSHx0ABwyprGS0Aqt/dCL6yb3sKRZuoNAxVkp6AKv33cqNT4K31/E1xM6OAnEWJ6obK6WV3zSPm9nCysHK8263++Ht5/ZRsXaZrQuxF4aYnRvWU0/Yd8QLId/BlRnvYtXgMWTolLIBxQbtpu04s/e5d84ImVqlJ6afYTgRN4qNNXrRBhDBbqU4aEL1P1E4DStnFAEfRjlN9zXJEgf+snJGcShoJZ8XtP3Fyoe5xrhv0r2XxqbFRtTnI+oNxQb9w+w20mbPyoXcmOhnnprHPPpZ7kJbIAa0p6GD1+69e2KYiYxvdxLvz8Kh1aE15oBhnRxEXSVnzzvxBe250TlzFXYuvm3N3kXLctIBvsz8LHhGn4OiW2CIwX3FjGY7tgOVnCW0IcFDxYzo7hUHMlbPbQRd5BxL0qjjDytn/unuNHw//BzRlatS8qwkbASz1IGGld3MlzQ8E8YGwsPCpdRvFNZPPNDeezqm7joXRfdFCx1fJ7834t5EWUfHiUFrKfPaDRb3vVIodnsO0FZg+svM1dVKXc30c5qfmPg3UdGZNvOZryugc5qxyR0Ivok+6oBZMrhAmydtxTYB/cNs9ZHvZ9+8pgMvEJsR7cfOkRaA8T1T0ZZgmAL5P6N6zhG0J3IJPQ07/dmrelRsh08jAzkpbWW4dLhVDb4+RMWHQgUdN9gz9HD5H4bY6tBayowj73fgEhcK0MOkxlbX5C3A/cdX/WbxnUgkEonEe+cfOL/3cAd8VJkAAAAASUVORK5CYII="
    }, 7738: function (e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAmCAYAAACyAQkgAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABMSURBVHgB7daxDQAgDANBEzEom7FflgBRZIMUCforXH9pqYnxxt23iovQo+JMTRAKAABKiJu3VBx/NBuh2eYbM1sCAAA/4o9mIzTbBactEjSY0T9vAAAAAElFTkSuQmCC"
    }, 7898: function (e, t, n) {
        "use strict";
        n.r(t), n.d(t, "vaultPair", (function () {
            return o
        }));
        var a = n("652a"), i = n("84a8"), s = n("7ede"), r = "0xa157EFB42A7995Beb3c2768Fb6a7766B6Fe33ba2", o = [{
            token1: "OBS",
            token2: "YFO",
            address1: a.OBS.address,
            address2: a.YFO.address,
            lpAddress: i["OBS-YFO"],
            vaultAddress: r,
            stratAddress: s["OBS-YFO-Strat"][0],
            stratPid: s["OBS-YFO-Strat"][1],
            farmAddress: s["OBS-YFO-Strat"][2],
            farmPid: s["OBS-YFO-Strat"][3],
            dailyOut: s["OBS-YFO-Strat"][4],
            swap: s["OBS-YFO-Strat"][5],
            deposited: "--",
            balance: "--",
            earned: "--",
            tvl: "--",
            apy: 103.12,
            start: new Date("2021/07/21 20:00:00").getTime(),
            end: new Date("2022/07/21 20:00:00").getTime()
        }, {
            token1: "OBS",
            token2: "BNB",
            address1: a.OBS.address,
            address2: a.BNB.address,
            lpAddress: i["OBS-BNB"],
            vaultAddress: r,
            stratAddress: s["OBS-BNB-Strat"][0],
            stratPid: s["OBS-BNB-Strat"][1],
            farmAddress: s["OBS-BNB-Strat"][2],
            farmPid: s["OBS-BNB-Strat"][3],
            dailyOut: s["OBS-BNB-Strat"][4],
            swap: s["OBS-BNB-Strat"][5],
            deposited: "--",
            balance: "--",
            earned: "--",
            tvl: "--",
            apy: 218.3,
            start: new Date("2021/07/21 20:00:00").getTime(),
            end: new Date("2022/07/21 20:00:00").getTime()
        }, {
            token1: "OBC",
            token2: "YFO",
            address1: a.OBC.address,
            address2: a.YFO.address,
            lpAddress: i["OBC-YFO"],
            vaultAddress: r,
            stratAddress: s["OBC-YFO-Strat"][0],
            stratPid: s["OBC-YFO-Strat"][1],
            farmAddress: s["OBC-YFO-Strat"][2],
            farmPid: s["OBC-YFO-Strat"][3],
            dailyOut: s["OBC-YFO-Strat"][4],
            swap: s["OBC-YFO-Strat"][5],
            deposited: "--",
            balance: "--",
            earned: "--",
            tvl: "--",
            apy: 300.53,
            start: new Date("2021/09/05 14:00:00").getTime(),
            end: new Date("2022/09/05 14:00:00").getTime()
        }, {
            token1: "OBC",
            token2: "BNB",
            address1: a.OBC.address,
            address2: a.BNB.address,
            lpAddress: i["OBC-BNB"],
            vaultAddress: r,
            stratAddress: s["OBC-BNB-Strat"][0],
            stratPid: s["OBC-BNB-Strat"][1],
            farmAddress: s["OBC-BNB-Strat"][2],
            farmPid: s["OBC-BNB-Strat"][3],
            dailyOut: s["OBC-BNB-Strat"][4],
            swap: s["OBC-BNB-Strat"][5],
            deposited: "--",
            balance: "--",
            earned: "--",
            tvl: "--",
            apy: 455.23,
            start: new Date("2021/09/05 14:00:00").getTime(),
            end: new Date("2022/09/05 14:00:00").getTime()
        }, {
            token1: "OBC",
            token2: "BUSD",
            address1: a.OBC.address,
            address2: a.BUSD.address,
            lpAddress: i["OBC-BUSD"],
            vaultAddress: r,
            stratAddress: s["OBC-BUSD-Strat"][0],
            stratPid: s["OBC-BUSD-Strat"][1],
            farmAddress: s["OBC-BUSD-Strat"][2],
            farmPid: s["OBC-BUSD-Strat"][3],
            dailyOut: s["OBC-BUSD-Strat"][4],
            swap: s["OBC-BUSD-Strat"][5],
            deposited: "--",
            balance: "--",
            earned: "--",
            tvl: "--",
            apy: 373.26,
            start: new Date("2021/09/05 14:00:00").getTime(),
            end: new Date("2022/09/05 14:00:00").getTime()
        }, {
            token1: "BUSD",
            token2: "BNB",
            address1: a.BUSD.address,
            address2: a.BNB.address,
            lpAddress: i["BUSD-BNB"],
            vaultAddress: r,
            stratAddress: s["BUSD-BNB-Strat"][0],
            stratPid: s["BUSD-BNB-Strat"][1],
            farmAddress: s["BUSD-BNB-Strat"][2],
            farmPid: s["BUSD-BNB-Strat"][3],
            dailyOut: s["BUSD-BNB-Strat"][4],
            swap: s["BUSD-BNB-Strat"][5],
            deposited: "--",
            balance: "--",
            earned: "--",
            tvl: "--",
            apy: 32.18,
            start: new Date("2021/07/21 20:00:00").getTime(),
            end: new Date("2022/07/21 20:00:00").getTime()
        }, {
            token1: "CAKE",
            token2: "BNB",
            address1: a.CAKE.address,
            address2: a.BNB.address,
            lpAddress: i["CAKE-BNB"],
            vaultAddress: r,
            stratAddress: s["CAKE-BNB-Strat"][0],
            stratPid: s["CAKE-BNB-Strat"][1],
            farmAddress: s["CAKE-BNB-Strat"][2],
            farmPid: s["CAKE-BNB-Strat"][3],
            dailyOut: s["CAKE-BNB-Strat"][4],
            swap: s["CAKE-BNB-Strat"][5],
            deposited: "--",
            balance: "--",
            earned: "--",
            tvl: "--",
            apy: 36.27,
            start: new Date("2021/07/21 20:00:00").getTime(),
            end: new Date("2022/07/21 20:00:00").getTime()
        }, {
            token1: "USDT",
            token2: "BNB",
            address1: a.USDT.address,
            address2: a.BNB.address,
            lpAddress: i["USDT-BNB"],
            vaultAddress: r,
            stratAddress: s["USDT-BNB-Strat"][0],
            stratPid: s["USDT-BNB-Strat"][1],
            farmAddress: s["USDT-BNB-Strat"][2],
            farmPid: s["USDT-BNB-Strat"][3],
            dailyOut: s["USDT-BNB-Strat"][4],
            swap: s["USDT-BNB-Strat"][5],
            deposited: "--",
            balance: "--",
            earned: "--",
            tvl: "--",
            apy: 33.69,
            start: new Date("2021/07/21 20:00:00").getTime(),
            end: new Date("2022/07/21 20:00:00").getTime()
        }, {
            token1: "USDC",
            token2: "BUSD",
            address1: a.USDC.address,
            address2: a.BUSD.address,
            lpAddress: i["USDC-BUSD"],
            vaultAddress: r,
            stratAddress: s["USDC-BUSD-Strat"][0],
            stratPid: s["USDC-BUSD-Strat"][1],
            farmAddress: s["USDC-BUSD-Strat"][2],
            farmPid: s["USDC-BUSD-Strat"][3],
            dailyOut: s["USDC-BUSD-Strat"][4],
            swap: s["USDC-BUSD-Strat"][5],
            deposited: "--",
            balance: "--",
            earned: "--",
            tvl: "--",
            apy: 7.9,
            start: new Date("2021/07/21 20:00:00").getTime(),
            end: new Date("2022/07/21 20:00:00").getTime()
        }, {
            token1: "USDT",
            token2: "BUSD",
            address1: a.USDT.address,
            address2: a.BUSD.address,
            lpAddress: i["USDT-BUSD"],
            vaultAddress: r,
            stratAddress: s["USDT-BUSD-Strat"][0],
            stratPid: s["USDT-BUSD-Strat"][1],
            farmAddress: s["USDT-BUSD-Strat"][2],
            farmPid: s["USDT-BUSD-Strat"][3],
            dailyOut: s["USDT-BUSD-Strat"][4],
            swap: s["USDT-BUSD-Strat"][5],
            deposited: "--",
            balance: "--",
            earned: "--",
            tvl: "--",
            apy: 9.9,
            start: new Date("2021/08/17 14:00:00").getTime(),
            end: new Date("2022/08/17 14:00:00").getTime()
        }, {
            token1: "USDT",
            token2: "CAKE",
            address1: a.USDT.address,
            address2: a.CAKE.address,
            lpAddress: i["USDT-CAKE"],
            vaultAddress: r,
            stratAddress: s["USDT-CAKE-Strat"][0],
            stratPid: s["USDT-CAKE-Strat"][1],
            farmAddress: s["USDT-CAKE-Strat"][2],
            farmPid: s["USDT-CAKE-Strat"][3],
            dailyOut: s["USDT-CAKE-Strat"][4],
            swap: s["USDT-CAKE-Strat"][5],
            deposited: "--",
            balance: "--",
            earned: "--",
            tvl: "--",
            apy: 46.9,
            start: new Date("2021/08/17 14:00:00").getTime(),
            end: new Date("2022/08/17 14:00:00").getTime()
        }, {
            token1: "ETH",
            token2: "BNB",
            address1: a.ETH.address,
            address2: a.BNB.address,
            lpAddress: i["ETH-BNB"],
            vaultAddress: r,
            stratAddress: s["ETH-BNB-Strat"][0],
            stratPid: s["ETH-BNB-Strat"][1],
            farmAddress: s["ETH-BNB-Strat"][2],
            farmPid: s["ETH-BNB-Strat"][3],
            dailyOut: s["ETH-BNB-Strat"][4],
            swap: s["ETH-BNB-Strat"][5],
            deposited: "--",
            balance: "--",
            earned: "--",
            tvl: "--",
            apy: 12.53,
            start: new Date("2021/08/17 14:00:00").getTime(),
            end: new Date("2022/08/17 14:00:00").getTime()
        }]
    }, 7973: function (e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEoSURBVHgB7ZZRDoMgDEDLdImfO4JX4dMT++lVOMI+TYwycIqKINC6ffGSJVs62ydtqgCZTObPyO5Vy66qgcgDCGgJGKcOxmdHlWGAxEhIWS+ZBBQDZ7wXgAAlcpLYsqFlkkW8EkSZpBlxSkhVWDKx+11jZiZaxCsxDhzGB6fKxJ9Irz7T3uwrwZpesOYtTjLTck0kwRmZT0Jl1D2XrfpeqFNRFqtEShwtYtqhEy8DOBfTidciifFkkdCeoMZtSp/I3N8CNlXd8+HGuMV1a4gz4YqjRIwMYSb28as60Zv17pmwKSEWu+dmaQEHqOC07AIzYZP0rDE9Z7uC+s51GsfGDbUDLeKVOfwhXQIlcimDlECLOGUIEiSRg0zEnvg5Wka29JfnTCaTygeM3nMXHPdiNgAAAABJRU5ErkJggg=="
    }, "7ab5": function (e) {
        e.exports = JSON.parse('[{"inputs":[{"internalType":"address","name":"underlying_","type":"address"},{"internalType":"contract ComptrollerInterface","name":"comptroller_","type":"address"},{"internalType":"contract InterestRateModel","name":"interestRateModel_","type":"address"},{"internalType":"uint256","name":"initialExchangeRateMantissa_","type":"uint256"},{"internalType":"string","name":"name_","type":"string"},{"internalType":"string","name":"symbol_","type":"string"},{"internalType":"uint8","name":"decimals_","type":"uint8"},{"internalType":"address payable","name":"admin_","type":"address"},{"internalType":"address","name":"implementation_","type":"address"},{"internalType":"bytes","name":"becomeImplementationData","type":"bytes"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"cashPrior","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"interestAccumulated","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"borrowIndex","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalBorrows","type":"uint256"}],"name":"AccrueInterest","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"borrower","type":"address"},{"indexed":false,"internalType":"uint256","name":"borrowAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"accountBorrows","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalBorrows","type":"uint256"}],"name":"Borrow","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"error","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"info","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"detail","type":"uint256"}],"name":"Failure","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"liquidator","type":"address"},{"indexed":false,"internalType":"address","name":"borrower","type":"address"},{"indexed":false,"internalType":"uint256","name":"repayAmount","type":"uint256"},{"indexed":false,"internalType":"address","name":"cTokenCollateral","type":"address"},{"indexed":false,"internalType":"uint256","name":"seizeTokens","type":"uint256"}],"name":"LiquidateBorrow","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"minter","type":"address"},{"indexed":false,"internalType":"uint256","name":"mintAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"mintTokens","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"oldAdmin","type":"address"},{"indexed":false,"internalType":"address","name":"newAdmin","type":"address"}],"name":"NewAdmin","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"contract ComptrollerInterface","name":"oldComptroller","type":"address"},{"indexed":false,"internalType":"contract ComptrollerInterface","name":"newComptroller","type":"address"}],"name":"NewComptroller","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"oldImplementation","type":"address"},{"indexed":false,"internalType":"address","name":"newImplementation","type":"address"}],"name":"NewImplementation","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"contract InterestRateModel","name":"oldInterestRateModel","type":"address"},{"indexed":false,"internalType":"contract InterestRateModel","name":"newInterestRateModel","type":"address"}],"name":"NewMarketInterestRateModel","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"oldPendingAdmin","type":"address"},{"indexed":false,"internalType":"address","name":"newPendingAdmin","type":"address"}],"name":"NewPendingAdmin","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"oldReserveFactorMantissa","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newReserveFactorMantissa","type":"uint256"}],"name":"NewReserveFactor","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"redeemer","type":"address"},{"indexed":false,"internalType":"uint256","name":"redeemAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"redeemTokens","type":"uint256"}],"name":"Redeem","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"payer","type":"address"},{"indexed":false,"internalType":"address","name":"borrower","type":"address"},{"indexed":false,"internalType":"uint256","name":"repayAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"accountBorrows","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalBorrows","type":"uint256"}],"name":"RepayBorrow","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"benefactor","type":"address"},{"indexed":false,"internalType":"uint256","name":"addAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newTotalReserves","type":"uint256"}],"name":"ReservesAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"admin","type":"address"},{"indexed":false,"internalType":"uint256","name":"reduceAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newTotalReserves","type":"uint256"}],"name":"ReservesReduced","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Transfer","type":"event"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"constant":false,"inputs":[],"name":"_acceptAdmin","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"addAmount","type":"uint256"}],"name":"_addReserves","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"reduceAmount","type":"uint256"}],"name":"_reduceReserves","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"contract ComptrollerInterface","name":"newComptroller","type":"address"}],"name":"_setComptroller","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"implementation_","type":"address"},{"internalType":"bool","name":"allowResign","type":"bool"},{"internalType":"bytes","name":"becomeImplementationData","type":"bytes"}],"name":"_setImplementation","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"contract InterestRateModel","name":"newInterestRateModel","type":"address"}],"name":"_setInterestRateModel","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address payable","name":"newPendingAdmin","type":"address"}],"name":"_setPendingAdmin","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"newReserveFactorMantissa","type":"uint256"}],"name":"_setReserveFactor","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"accrualBlockNumber","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"accrueInterest","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"admin","outputs":[{"internalType":"address payable","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOfUnderlying","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"borrowAmount","type":"uint256"}],"name":"borrow","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"borrowBalanceCurrent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"borrowBalanceStored","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"borrowIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"borrowRatePerBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"comptroller","outputs":[{"internalType":"contract ComptrollerInterface","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes","name":"data","type":"bytes"}],"name":"delegateToImplementation","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes","name":"data","type":"bytes"}],"name":"delegateToViewImplementation","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"exchangeRateCurrent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"exchangeRateStored","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getAccountSnapshot","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getCash","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"implementation","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"interestRateModel","outputs":[{"internalType":"contract InterestRateModel","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isCToken","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"borrower","type":"address"},{"internalType":"uint256","name":"repayAmount","type":"uint256"},{"internalType":"contract CTokenInterface","name":"cTokenCollateral","type":"address"}],"name":"liquidateBorrow","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"mintAmount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"pendingAdmin","outputs":[{"internalType":"address payable","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"redeemTokens","type":"uint256"}],"name":"redeem","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"redeemAmount","type":"uint256"}],"name":"redeemUnderlying","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"repayAmount","type":"uint256"}],"name":"repayBorrow","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"borrower","type":"address"},{"internalType":"uint256","name":"repayAmount","type":"uint256"}],"name":"repayBorrowBehalf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"reserveFactorMantissa","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"liquidator","type":"address"},{"internalType":"address","name":"borrower","type":"address"},{"internalType":"uint256","name":"seizeTokens","type":"uint256"}],"name":"seize","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"supplyRatePerBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalBorrows","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"totalBorrowsCurrent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalReserves","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"src","type":"address"},{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"underlying","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"}]')
    }, "7ede": function (e) {
        e.exports = JSON.parse('{"BUSD-BNB-Strat":["0xdB1E0C404cf755883F5bB06F1bd8d396979dF5EC","0","0x73feaa1eE314F8c655E354234017bE2193C9E24E","2",43044.48,"Pancake"],"BNB-BUSD-Strat":["0xdB1E0C404cf755883F5bB06F1bd8d396979dF5EC","0","0x73feaa1eE314F8c655E354234017bE2193C9E24E","2",43044.48,"Pancake"],"USDT-BNB-Strat":["0xa2216CbDA1B06fD1B527a2C2865AC0E60a0eaB06","1","0x73feaa1eE314F8c655E354234017bE2193C9E24E","17",43044.48,"Pancake"],"BNB-USDT-Strat":["0xa2216CbDA1B06fD1B527a2C2865AC0E60a0eaB06","1","0x73feaa1eE314F8c655E354234017bE2193C9E24E","17",43044.48,"Pancake"],"CAKE-BNB-Strat":["0x3c82162a5E39EEdB25eC8a5CAFDb1F2096B5D921","5","0x73feaa1eE314F8c655E354234017bE2193C9E24E","251",43044.48,"Pancake"],"BNB-CAKE-Strat":["0x3c82162a5E39EEdB25eC8a5CAFDb1F2096B5D921","5","0x73feaa1eE314F8c655E354234017bE2193C9E24E","251",43044.48,"Pancake"],"USDC-BUSD-Strat":["0x32Af47B523fF31ee01167e90BB0254b5753f28F6","6","0x73feaa1eE314F8c655E354234017bE2193C9E24E","283",43044.48,"Pancake"],"BUSD-USDC-Strat":["0x32Af47B523fF31ee01167e90BB0254b5753f28F6","6","0x73feaa1eE314F8c655E354234017bE2193C9E24E","283",43044.48,"Pancake"],"ETH-BNB-Strat":["0x81A0621737789B1606B0abEaF1a2e48F68676b2F","7","0x73feaa1eE314F8c655E354234017bE2193C9E24E","261",43044.48,"Pancake"],"BNB-ETH-Strat":["0x81A0621737789B1606B0abEaF1a2e48F68676b2F","7","0x73feaa1eE314F8c655E354234017bE2193C9E24E","261",43044.48,"Pancake"],"USDT-BUSD-Strat":["0x647c8a3d2Bd69504067468D5878430C089c484b0","8","0x73feaa1eE314F8c655E354234017bE2193C9E24E","258",43044.48,"Pancake"],"BUSD-USDT-Strat":["0x647c8a3d2Bd69504067468D5878430C089c484b0","8","0x73feaa1eE314F8c655E354234017bE2193C9E24E","258",43044.48,"Pancake"],"CAKE-USDT-Strat":["0x2565a286Ada6044F9Ea4a60A7e6D312b19941c59","9","0x73feaa1eE314F8c655E354234017bE2193C9E24E","422",43044.48,"Pancake"],"USDT-CAKE-Strat":["0x2565a286Ada6044F9Ea4a60A7e6D312b19941c59","9","0x73feaa1eE314F8c655E354234017bE2193C9E24E","422",43044.48,"Pancake"],"OBS-BNB-Strat":["0x550980B4101cc4A541779e23822C2278F6ec48A3","2","0x1E481d01b16261BE4a3bbAd034994A060b7c438E","-1",43044.48,"Pancake"],"BNB-OBS-Strat":["0x550980B4101cc4A541779e23822C2278F6ec48A3","2","0x1E481d01b16261BE4a3bbAd034994A060b7c438E","-1",43044.48,"Pancake"],"YFO-OBS-Strat":["0x86783dAF59e5e44f19705a6aBD849f76e1aE5A5B","4","0x898C95ba032629e92D322Bf8B9C9A6bD7801b623","-1",43044.48,"Pancake"],"OBS-YFO-Strat":["0x86783dAF59e5e44f19705a6aBD849f76e1aE5A5B","4","0x898C95ba032629e92D322Bf8B9C9A6bD7801b623","-1",43044.48,"Pancake"],"OBC-BNB-Strat":["0x9F8bfb5825254BD0707fc929bBD18E5326A0A215","10","0xEe43f4B82736Ed0c3E5B3E96dBa2279fbb969783","-1",43044.48,"Pancake"],"BNB-OBC-Strat":["0x9F8bfb5825254BD0707fc929bBD18E5326A0A215","10","0xEe43f4B82736Ed0c3E5B3E96dBa2279fbb969783","-1",43044.48,"Pancake"],"OBC-BUSD-Strat":["0x82671A100CA771c4761B70E4E97B29414c170322","11","0x811E21307985bE5f841B84F4f72da5C832905690","-1",43044.48,"Pancake"],"BUSD-OBC-Strat":["0x82671A100CA771c4761B70E4E97B29414c170322","11","0x811E21307985bE5f841B84F4f72da5C832905690","-1",43044.48,"Pancake"],"YFO-OBC-Strat":["0xc9C32d639Be977c740fCD1B8BF586E95b34d69bf","12","0xddE0644D156D70F5e7EA9B3a2E18FAd63eFd00D2","-1",43044.48,"Pancake"],"OBC-YFO-Strat":["0xc9C32d639Be977c740fCD1B8BF586E95b34d69bf","12","0xddE0644D156D70F5e7EA9B3a2E18FAd63eFd00D2","-1",43044.48,"Pancake"],"BUSD-MDX-Strat":["0x92a2BB802046bAC2716D6da2E35e3e468ffeCA4b","4","0xc48fe252aa631017df253578b1405ea399728a50","40",43044.48,"Mdex"],"MDX-BUSD-Strat":["0x92a2BB802046bAC2716D6da2E35e3e468ffeCA4b","4","0xc48fe252aa631017df253578b1405ea399728a50","40",43044.48,"Mdex"],"USDT-MDX-Strat":["0x241F4702aC91eC08AEcb6ABF2B57ef1F017cC8c8","5","0xc48fe252aa631017df253578b1405ea399728a50","43",43044.48,"Mdex"],"MDX-USDT-Strat":["0x241F4702aC91eC08AEcb6ABF2B57ef1F017cC8c8","5","0xc48fe252aa631017df253578b1405ea399728a50","43",43044.48,"Mdex"],"MDX-BNB-Strat":["0x4AeE28E868c1002A0BDff2c44EAE6508d5dAe1C2","6","0xc48fe252aa631017df253578b1405ea399728a50","42",43044.48,"Mdex"],"BNB-MDX-Strat":["0x4AeE28E868c1002A0BDff2c44EAE6508d5dAe1C2","6","0xc48fe252aa631017df253578b1405ea399728a50","42",43044.48,"Mdex"]}')
    }, 8: function (e, t) {
    }, "80fe": function (e, t, n) {
        "use strict";
        n("20bf")
    }, "84a8": function (e) {
        e.exports = JSON.parse('{"BNB-OBC":"0xEb8942B9eBb98ab14e82551A5154c83AAF9330bd","OBC-BNB":"0xEb8942B9eBb98ab14e82551A5154c83AAF9330bd","BUSD-OBC":"0x3Ff034678AD3AF3Df69D56F015013CD202fE0bf6","OBC-BUSD":"0x3Ff034678AD3AF3Df69D56F015013CD202fE0bf6","YFO-OBC":"0x5c7d4c71Ae3A37AeD89f89EBD01bcc2af447E756","OBC-YFO":"0x5c7d4c71Ae3A37AeD89f89EBD01bcc2af447E756","YFO-BNB":"0x462cCea7c669A304a5bFcD1E35A14Ba3B6f5b3c4","BNB-YFO":"0x462cCea7c669A304a5bFcD1E35A14Ba3B6f5b3c4","ETH-OBC":"0xb31354c9f6eE1CE7BF04406F324cD462474AF43C","OBC-ETH":"0xb31354c9f6eE1CE7BF04406F324cD462474AF43C","BTCB-OBC":"0xcd0CD94BE45d007d9DA0Be801928D6A2f54066dE","OBC-BTCB":"0xcd0CD94BE45d007d9DA0Be801928D6A2f54066dE","BTC-OBC":"0xcd0CD94BE45d007d9DA0Be801928D6A2f54066dE","OBC-BTC":"0xcd0CD94BE45d007d9DA0Be801928D6A2f54066dE","BNB-OBS":"0xb414c6eac7dde63e76630c43a0cfe0d7376f1d88","OBS-BNB":"0xb414c6eac7dde63e76630c43a0cfe0d7376f1d88","BUSD-OBS":"0x02dd3092545253f5b80a7c8c1078248fc0d0d906","OBS-BUSD":"0x02dd3092545253f5b80a7c8c1078248fc0d0d906","BUSD-BNB":"0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16","BNB-BUSD":"0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16","YFO-OBS":"0x4cd2be67c3e62c2a23e8468a2289f0f25b38aba0","OBS-YFO":"0x4cd2be67c3e62c2a23e8468a2289f0f25b38aba0","BTCB-BNB":"0x61EB789d75A95CAa3fF50ed7E47b96c132fEc082","BNB-BTCB":"0x61EB789d75A95CAa3fF50ed7E47b96c132fEc082","BTC-BNB":"0x61EB789d75A95CAa3fF50ed7E47b96c132fEc082","BNB-BTC":"0x61EB789d75A95CAa3fF50ed7E47b96c132fEc082","BTCB-USDT":"0x03fc20BdaFDAC6b2aE8f7F5f885f0819C2b968f0","USDT-BTCB":"0x03fc20BdaFDAC6b2aE8f7F5f885f0819C2b968f0","BTC-USDT":"0x03fc20BdaFDAC6b2aE8f7F5f885f0819C2b968f0","USDT-BTC":"0x03fc20BdaFDAC6b2aE8f7F5f885f0819C2b968f0","ETH-USDT":"0xe7cc44de50b54906a9c1c48240650be2766481fc","USDT-ETH":"0xe7cc44de50b54906a9c1c48240650be2766481fc","ETH-BUSD":"0x7213a321F1855CF1779f42c0CD85d3D95291D34C","BUSD-ETH":"0x7213a321F1855CF1779f42c0CD85d3D95291D34C","ETH-BNB":"0x74E4716E431f45807DCF19f284c7aA99F18a4fbc","BNB-ETH":"0x74E4716E431f45807DCF19f284c7aA99F18a4fbc","BUSD-USDT":"0x7EFaEf62fDdCCa950418312c6C91Aef321375A00","USDT-BUSD":"0x7EFaEf62fDdCCa950418312c6C91Aef321375A00","BUSD-USDC":"0x2354ef4DF11afacb85a5C7f98B624072ECcddbB1","USDC-BUSD":"0x2354ef4DF11afacb85a5C7f98B624072ECcddbB1","BUSD-CAKE":"0x804678fa97d91B974ec2af3c843270886528a9E6","CAKE-BUSD":"0x804678fa97d91B974ec2af3c843270886528a9E6","USDT-CAKE":"0xA39Af17CE4a8eb807E076805Da1e2B8EA7D0755b","CAKE-USDT":"0xA39Af17CE4a8eb807E076805Da1e2B8EA7D0755b","CAKE-BNB":"0x0eD7e52944161450477ee417DE9Cd3a859b14fD0","BNB-CAKE":"0x0eD7e52944161450477ee417DE9Cd3a859b14fD0","BNB-USDT":"0x16b9a82891338f9bA80E2D6970FddA79D1eb0daE","USDT-BNB":"0x16b9a82891338f9bA80E2D6970FddA79D1eb0daE","BUSD-MDX":"0x223740a259E461aBeE12D84A9FFF5Da69Ff071dD","MDX-BUSD":"0x223740a259E461aBeE12D84A9FFF5Da69Ff071dD","MDX-BNB":"0xAf9Aa53146C5752BF6068A84B970E9fBB22a87bc","BNB-MDX":"0xAf9Aa53146C5752BF6068A84B970E9fBB22a87bc","MDX-USDT":"0xe1cBe92b5375ee6AfE1B22b555D257B4357F6C68","USDT-MDX":"0xe1cBe92b5375ee6AfE1B22b555D257B4357F6C68"}')
    }, "85c7": function (e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAlCAYAAAAwYKuzAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHNSURBVHgB7Zg7csIwEIYlhQYqjkBuEGDo4QgpUwUKXl3aVHADnIpXgXOCTE4Qp4cJNwgp09FRgfPvRM54FPMYSxoK9M14bK1X9m9pJUvLO51OfbfbDTjneZYSIUR9OBw+MwuIMAx7OuIIfKDf7XbvmQUEjgIzgC2RghnEhkjebrfDuGE8HvMT6zKKX4TIjNlhhdjua7XgaDTyEb8NZofCdrv1tLvYpkgavEZi0KbIDDMEicTJZ5qoY8LoKLaBE6iLsRg0hToPuy7W5XJjUJ3P0uK6WBc3D0acus50/2LTOIG6OIG6XK5A7JfX8TL20IVjdZJ8rAnELm8ZL0PwyyGRdI98FHNgTSDSIGq26wa2j1ar1Vd9YXuge+QTt0Owr5X6OAae/YZTNeHWCi1ckyJme3yW0FLMJDw09ToOL73G/ngVlbPZ7O1msxngsq64Und+UpzuSf0FVJcujC4WZGvUorLneTRQGs1m8x2JoB5TUn2qOCm4j5Z7imxCHW2aVJNibDqd+rJL/QN1A3xEMS6OuKpUKt/sNzi1sqwREFItl8t8sVgEcft8Pl/D9loqlb7g8/c+2UB3k8nkkXz+PY+dATml9HDkc7lcQ4ZCIj/1BsRdiLYCiAAAAABJRU5ErkJggg=="
    }, "865a": function (e, t, n) {
        "use strict";
        n.r(t), n.d(t, "earnPair", (function () {
            return r
        }));
        var a = n("652a"), i = n("84a8"), s = n("bb89"), r = [{
            tokenName: "$P",
            token: "YFO",
            tokenAddress: a.YFO.address,
            decimals: a.YFO.decimals,
            lpAddress: a.YFO.address,
            singlePoolAddress: s["YFO-Bank-2"][0],
            totalSupply: s["YFO-Bank-2"][1],
            dailyOut: s["YFO-Bank-2"][2],
            tvl: "--",
            apy: "--",
            staked: "--",
            earned: "--",
            balance: "--",
            remainReward: "--",
            start: new Date("2021/10/05 20:00:00").getTime(),
            end: new Date("2022/11/05 20:00:00").getTime(),
            output: new Date("2021/10/05 20:00:00").getTime()
        }, {
            tokenName: "$P",
            token: "YFO",
            tokenAddress: a.YFO.address,
            decimals: a.YFO.decimals,
            lpAddress: a.YFO.address,
            singlePoolAddress: s["YFO-Bank"][0],
            totalSupply: s["YFO-Bank"][1],
            dailyOut: s["YFO-Bank"][2],
            tvl: "--",
            apy: "--",
            staked: "--",
            earned: "--",
            balance: "--",
            remainReward: "--",
            start: new Date("2021/05/19 08:00:00").getTime(),
            end: new Date("2022/05/25 08:00:00").getTime(),
            output: new Date("2021/05/19 08:00:00").getTime()
        }, {
            tokenName: "Tether",
            token: "USDT",
            tokenAddress: a.USDT.address,
            decimals: a.USDT.decimals,
            lpAddress: a.USDT.address,
            singlePoolAddress: s["USDT-Bank"][0],
            totalSupply: s["USDT-Bank"][1],
            dailyOut: s["USDT-Bank"][2],
            tvl: "--",
            apy: "--",
            staked: "--",
            earned: "--",
            balance: "--",
            remainReward: "--",
            start: new Date("2021/05/19 08:00:00").getTime(),
            end: new Date("2022/05/25 08:00:00").getTime(),
            output: new Date("2021/05/19 08:00:00").getTime()
        }, {
            tokenName: "BN-USD",
            token: "BUSD",
            tokenAddress: a.BUSD.address,
            decimals: a.BUSD.decimals,
            lpAddress: i["BUSD-USDT"],
            singlePoolAddress: s["BUSD-Bank"][0],
            totalSupply: s["BUSD-Bank"][1],
            dailyOut: s["BUSD-Bank"][2],
            tvl: "--",
            apy: "--",
            staked: "--",
            earned: "--",
            balance: "--",
            remainReward: "--",
            start: new Date("2021/05/19 08:00:00").getTime(),
            end: new Date("2022/05/25 08:00:00").getTime(),
            output: new Date("2021/05/19 08:00:00").getTime()
        }, {
            tokenName: "Binance",
            token: "BNB",
            tokenAddress: a.BNB.address,
            decimals: a.BNB.decimals,
            lpAddress: i["BNB-USDT"],
            singlePoolAddress: s["BNB-Bank"][0],
            totalSupply: s["BNB-Bank"][1],
            dailyOut: s["BNB-Bank"][2],
            tvl: "--",
            apy: "--",
            staked: "--",
            earned: "--",
            balance: "--",
            remainReward: "--",
            start: new Date("2021/05/19 08:00:00").getTime(),
            end: new Date("2022/05/25 08:00:00").getTime(),
            output: new Date("2021/05/19 08:00:00").getTime()
        }, {
            tokenName: "Ethereum",
            token: "ETH",
            tokenAddress: a.ETH.address,
            decimals: a.ETH.decimals,
            lpAddress: i["ETH-USDT"],
            singlePoolAddress: s["ETH-Bank"][0],
            totalSupply: s["ETH-Bank"][1],
            dailyOut: s["ETH-Bank"][2],
            tvl: "--",
            apy: "--",
            staked: "--",
            earned: "--",
            balance: "--",
            remainReward: "--",
            start: new Date("2021/05/19 08:00:00").getTime(),
            end: new Date("2022/05/25 08:00:00").getTime(),
            output: new Date("2021/05/19 08:00:00").getTime()
        }]
    }, "89b7": function (e, t, n) {
        e.exports = n.p + "img/lang.bbe73f53.svg"
    }, "89d1": function (e, t, n) {
        "use strict";
        n.r(t), n.d(t, "commonContracts", (function () {
            return a
        }));
        var a = {
            unitroller: {
                id: "unitroller",
                name: "unitroller",
                address: "0x402Bb3997A07A0B139aFcc275719D378A4def4D0",
                abi: []
            },
            comptroller: {
                id: "comptroller",
                name: "comptroller",
                address: "0x99e39Ce7782171483c03E0D95Db95a9d28616f2e",
                abi: [{inputs: [], payable: !1, stateMutability: "nonpayable", type: "constructor"}, {
                    anonymous: !1,
                    inputs: [{indexed: !1, internalType: "string", name: "action", type: "string"}, {
                        indexed: !1,
                        internalType: "bool",
                        name: "pauseState",
                        type: "bool"
                    }],
                    name: "ActionPaused",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !1,
                        internalType: "contract CToken",
                        name: "cToken",
                        type: "address"
                    }, {indexed: !1, internalType: "string", name: "action", type: "string"}, {
                        indexed: !1,
                        internalType: "bool",
                        name: "pauseState",
                        type: "bool"
                    }],
                    name: "ActionPaused",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        internalType: "contract CToken",
                        name: "cToken",
                        type: "address"
                    }, {indexed: !1, internalType: "uint256", name: "newSpeed", type: "uint256"}],
                    name: "CompSpeedUpdated",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        internalType: "contract CToken",
                        name: "cToken",
                        type: "address"
                    }, {indexed: !0, internalType: "address", name: "borrower", type: "address"}, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "compDelta",
                        type: "uint256"
                    }, {indexed: !1, internalType: "uint256", name: "compBorrowIndex", type: "uint256"}],
                    name: "DistributedBorrowerComp",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        internalType: "contract CToken",
                        name: "cToken",
                        type: "address"
                    }, {indexed: !0, internalType: "address", name: "supplier", type: "address"}, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "compDelta",
                        type: "uint256"
                    }, {indexed: !1, internalType: "uint256", name: "compSupplyIndex", type: "uint256"}],
                    name: "DistributedSupplierComp",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{indexed: !1, internalType: "uint256", name: "error", type: "uint256"}, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "info",
                        type: "uint256"
                    }, {indexed: !1, internalType: "uint256", name: "detail", type: "uint256"}],
                    name: "Failure",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !1,
                        internalType: "contract CToken",
                        name: "cToken",
                        type: "address"
                    }, {indexed: !1, internalType: "bool", name: "isComped", type: "bool"}],
                    name: "MarketComped",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !1,
                        internalType: "contract CToken",
                        name: "cToken",
                        type: "address"
                    }, {indexed: !1, internalType: "address", name: "account", type: "address"}],
                    name: "MarketEntered",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !1,
                        internalType: "contract CToken",
                        name: "cToken",
                        type: "address"
                    }, {indexed: !1, internalType: "address", name: "account", type: "address"}],
                    name: "MarketExited",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{indexed: !1, internalType: "contract CToken", name: "cToken", type: "address"}],
                    name: "MarketListed",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !1,
                        internalType: "uint256",
                        name: "oldCloseFactorMantissa",
                        type: "uint256"
                    }, {indexed: !1, internalType: "uint256", name: "newCloseFactorMantissa", type: "uint256"}],
                    name: "NewCloseFactor",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !1,
                        internalType: "contract CToken",
                        name: "cToken",
                        type: "address"
                    }, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "oldCollateralFactorMantissa",
                        type: "uint256"
                    }, {indexed: !1, internalType: "uint256", name: "newCollateralFactorMantissa", type: "uint256"}],
                    name: "NewCollateralFactor",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{indexed: !1, internalType: "uint256", name: "oldCompRate", type: "uint256"}, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "newCompRate",
                        type: "uint256"
                    }],
                    name: "NewCompRate",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !1,
                        internalType: "uint256",
                        name: "oldLiquidationIncentiveMantissa",
                        type: "uint256"
                    }, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "newLiquidationIncentiveMantissa",
                        type: "uint256"
                    }],
                    name: "NewLiquidationIncentive",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !1,
                        internalType: "uint256",
                        name: "oldMaxAssets",
                        type: "uint256"
                    }, {indexed: !1, internalType: "uint256", name: "newMaxAssets", type: "uint256"}],
                    name: "NewMaxAssets",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !1,
                        internalType: "address",
                        name: "oldPauseGuardian",
                        type: "address"
                    }, {indexed: !1, internalType: "address", name: "newPauseGuardian", type: "address"}],
                    name: "NewPauseGuardian",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !1,
                        internalType: "contract PriceOracle",
                        name: "oldPriceOracle",
                        type: "address"
                    }, {indexed: !1, internalType: "contract PriceOracle", name: "newPriceOracle", type: "address"}],
                    name: "NewPriceOracle",
                    type: "event"
                }, {
                    constant: !1,
                    inputs: [{internalType: "address[]", name: "cTokens", type: "address[]"}],
                    name: "_addCompMarkets",
                    outputs: [],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{internalType: "contract Unitroller", name: "unitroller", type: "address"}],
                    name: "_become",
                    outputs: [],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "_borrowGuardianPaused",
                    outputs: [{internalType: "bool", name: "", type: "bool"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{internalType: "address", name: "cToken", type: "address"}],
                    name: "_dropCompMarket",
                    outputs: [],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "_mintGuardianPaused",
                    outputs: [{internalType: "bool", name: "", type: "bool"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{internalType: "contract CToken", name: "cToken", type: "address"}, {
                        internalType: "bool",
                        name: "state",
                        type: "bool"
                    }],
                    name: "_setBorrowPaused",
                    outputs: [{internalType: "bool", name: "", type: "bool"}],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{internalType: "uint256", name: "newCloseFactorMantissa", type: "uint256"}],
                    name: "_setCloseFactor",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{
                        internalType: "contract CToken",
                        name: "cToken",
                        type: "address"
                    }, {internalType: "uint256", name: "newCollateralFactorMantissa", type: "uint256"}],
                    name: "_setCollateralFactor",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{internalType: "uint256", name: "compRate_", type: "uint256"}],
                    name: "_setCompRate",
                    outputs: [],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{internalType: "uint256", name: "newLiquidationIncentiveMantissa", type: "uint256"}],
                    name: "_setLiquidationIncentive",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{internalType: "uint256", name: "newMaxAssets", type: "uint256"}],
                    name: "_setMaxAssets",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{internalType: "contract CToken", name: "cToken", type: "address"}, {
                        internalType: "bool",
                        name: "state",
                        type: "bool"
                    }],
                    name: "_setMintPaused",
                    outputs: [{internalType: "bool", name: "", type: "bool"}],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{internalType: "address", name: "newPauseGuardian", type: "address"}],
                    name: "_setPauseGuardian",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{internalType: "contract PriceOracle", name: "newOracle", type: "address"}],
                    name: "_setPriceOracle",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{internalType: "bool", name: "state", type: "bool"}],
                    name: "_setSeizePaused",
                    outputs: [{internalType: "bool", name: "", type: "bool"}],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{internalType: "bool", name: "state", type: "bool"}],
                    name: "_setTransferPaused",
                    outputs: [{internalType: "bool", name: "", type: "bool"}],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{internalType: "contract CToken", name: "cToken", type: "address"}],
                    name: "_supportMarket",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [{internalType: "address", name: "", type: "address"}, {
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    name: "accountAssets",
                    outputs: [{internalType: "contract CToken", name: "", type: "address"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "admin",
                    outputs: [{internalType: "address", name: "", type: "address"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    name: "allMarkets",
                    outputs: [{internalType: "contract CToken", name: "", type: "address"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{internalType: "address", name: "cToken", type: "address"}, {
                        internalType: "address",
                        name: "borrower",
                        type: "address"
                    }, {internalType: "uint256", name: "borrowAmount", type: "uint256"}],
                    name: "borrowAllowed",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [{internalType: "address", name: "", type: "address"}],
                    name: "borrowGuardianPaused",
                    outputs: [{internalType: "bool", name: "", type: "bool"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{internalType: "address", name: "cToken", type: "address"}, {
                        internalType: "address",
                        name: "borrower",
                        type: "address"
                    }, {internalType: "uint256", name: "borrowAmount", type: "uint256"}],
                    name: "borrowVerify",
                    outputs: [],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [{
                        internalType: "address",
                        name: "account",
                        type: "address"
                    }, {internalType: "contract CToken", name: "cToken", type: "address"}],
                    name: "checkMembership",
                    outputs: [{internalType: "bool", name: "", type: "bool"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{
                        internalType: "address",
                        name: "holder",
                        type: "address"
                    }, {internalType: "contract CToken[]", name: "cTokens", type: "address[]"}],
                    name: "claimComp",
                    outputs: [],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{
                        internalType: "address[]",
                        name: "holders",
                        type: "address[]"
                    }, {internalType: "contract CToken[]", name: "cTokens", type: "address[]"}, {
                        internalType: "bool",
                        name: "borrowers",
                        type: "bool"
                    }, {internalType: "bool", name: "suppliers", type: "bool"}],
                    name: "claimComp",
                    outputs: [],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{internalType: "address", name: "holder", type: "address"}],
                    name: "claimComp",
                    outputs: [],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "closeFactorMantissa",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [{internalType: "address", name: "", type: "address"}],
                    name: "compAccrued",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [{internalType: "address", name: "", type: "address"}],
                    name: "compBorrowState",
                    outputs: [{internalType: "uint224", name: "index", type: "uint224"}, {
                        internalType: "uint32",
                        name: "block",
                        type: "uint32"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [{internalType: "address", name: "", type: "address"}, {
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    name: "compBorrowerIndex",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "compClaimThreshold",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "compInitialIndex",
                    outputs: [{internalType: "uint224", name: "", type: "uint224"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "compRate",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [{internalType: "address", name: "", type: "address"}],
                    name: "compSpeeds",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [{internalType: "address", name: "", type: "address"}, {
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    name: "compSupplierIndex",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [{internalType: "address", name: "", type: "address"}],
                    name: "compSupplyState",
                    outputs: [{internalType: "uint224", name: "index", type: "uint224"}, {
                        internalType: "uint32",
                        name: "block",
                        type: "uint32"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "comptrollerImplementation",
                    outputs: [{internalType: "address", name: "", type: "address"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{internalType: "address[]", name: "cTokens", type: "address[]"}],
                    name: "enterMarkets",
                    outputs: [{internalType: "uint256[]", name: "", type: "uint256[]"}],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{internalType: "address", name: "cTokenAddress", type: "address"}],
                    name: "exitMarket",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [{internalType: "address", name: "account", type: "address"}],
                    name: "getAccountLiquidity",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}, {
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }, {internalType: "uint256", name: "", type: "uint256"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "getAllMarkets",
                    outputs: [{internalType: "contract CToken[]", name: "", type: "address[]"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [{internalType: "address", name: "account", type: "address"}],
                    name: "getAssetsIn",
                    outputs: [{internalType: "contract CToken[]", name: "", type: "address[]"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "getBlockNumber",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "getCompAddress",
                    outputs: [{internalType: "address", name: "", type: "address"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [{internalType: "address", name: "account", type: "address"}, {
                        internalType: "address",
                        name: "cTokenModify",
                        type: "address"
                    }, {internalType: "uint256", name: "redeemTokens", type: "uint256"}, {
                        internalType: "uint256",
                        name: "borrowAmount",
                        type: "uint256"
                    }],
                    name: "getHypotheticalAccountLiquidity",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}, {
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }, {internalType: "uint256", name: "", type: "uint256"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "isComptroller",
                    outputs: [{internalType: "bool", name: "", type: "bool"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{
                        internalType: "address",
                        name: "cTokenBorrowed",
                        type: "address"
                    }, {internalType: "address", name: "cTokenCollateral", type: "address"}, {
                        internalType: "address",
                        name: "liquidator",
                        type: "address"
                    }, {internalType: "address", name: "borrower", type: "address"}, {
                        internalType: "uint256",
                        name: "repayAmount",
                        type: "uint256"
                    }],
                    name: "liquidateBorrowAllowed",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{
                        internalType: "address",
                        name: "cTokenBorrowed",
                        type: "address"
                    }, {internalType: "address", name: "cTokenCollateral", type: "address"}, {
                        internalType: "address",
                        name: "liquidator",
                        type: "address"
                    }, {internalType: "address", name: "borrower", type: "address"}, {
                        internalType: "uint256",
                        name: "actualRepayAmount",
                        type: "uint256"
                    }, {internalType: "uint256", name: "seizeTokens", type: "uint256"}],
                    name: "liquidateBorrowVerify",
                    outputs: [],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [{
                        internalType: "address",
                        name: "cTokenBorrowed",
                        type: "address"
                    }, {internalType: "address", name: "cTokenCollateral", type: "address"}, {
                        internalType: "uint256",
                        name: "actualRepayAmount",
                        type: "uint256"
                    }],
                    name: "liquidateCalculateSeizeTokens",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}, {
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "liquidationIncentiveMantissa",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [{internalType: "address", name: "", type: "address"}],
                    name: "markets",
                    outputs: [{internalType: "bool", name: "isListed", type: "bool"}, {
                        internalType: "uint256",
                        name: "collateralFactorMantissa",
                        type: "uint256"
                    }, {internalType: "bool", name: "isComped", type: "bool"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "maxAssets",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{internalType: "address", name: "cToken", type: "address"}, {
                        internalType: "address",
                        name: "minter",
                        type: "address"
                    }, {internalType: "uint256", name: "mintAmount", type: "uint256"}],
                    name: "mintAllowed",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [{internalType: "address", name: "", type: "address"}],
                    name: "mintGuardianPaused",
                    outputs: [{internalType: "bool", name: "", type: "bool"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{internalType: "address", name: "cToken", type: "address"}, {
                        internalType: "address",
                        name: "minter",
                        type: "address"
                    }, {internalType: "uint256", name: "actualMintAmount", type: "uint256"}, {
                        internalType: "uint256",
                        name: "mintTokens",
                        type: "uint256"
                    }],
                    name: "mintVerify",
                    outputs: [],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "oracle",
                    outputs: [{internalType: "contract PriceOracle", name: "", type: "address"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "pauseGuardian",
                    outputs: [{internalType: "address", name: "", type: "address"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "pendingAdmin",
                    outputs: [{internalType: "address", name: "", type: "address"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "pendingComptrollerImplementation",
                    outputs: [{internalType: "address", name: "", type: "address"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{internalType: "address", name: "cToken", type: "address"}, {
                        internalType: "address",
                        name: "redeemer",
                        type: "address"
                    }, {internalType: "uint256", name: "redeemTokens", type: "uint256"}],
                    name: "redeemAllowed",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{internalType: "address", name: "cToken", type: "address"}, {
                        internalType: "address",
                        name: "redeemer",
                        type: "address"
                    }, {internalType: "uint256", name: "redeemAmount", type: "uint256"}, {
                        internalType: "uint256",
                        name: "redeemTokens",
                        type: "uint256"
                    }],
                    name: "redeemVerify",
                    outputs: [],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [],
                    name: "refreshCompSpeeds",
                    outputs: [],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{internalType: "address", name: "cToken", type: "address"}, {
                        internalType: "address",
                        name: "payer",
                        type: "address"
                    }, {internalType: "address", name: "borrower", type: "address"}, {
                        internalType: "uint256",
                        name: "repayAmount",
                        type: "uint256"
                    }],
                    name: "repayBorrowAllowed",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{internalType: "address", name: "cToken", type: "address"}, {
                        internalType: "address",
                        name: "payer",
                        type: "address"
                    }, {internalType: "address", name: "borrower", type: "address"}, {
                        internalType: "uint256",
                        name: "actualRepayAmount",
                        type: "uint256"
                    }, {internalType: "uint256", name: "borrowerIndex", type: "uint256"}],
                    name: "repayBorrowVerify",
                    outputs: [],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{
                        internalType: "address",
                        name: "cTokenCollateral",
                        type: "address"
                    }, {internalType: "address", name: "cTokenBorrowed", type: "address"}, {
                        internalType: "address",
                        name: "liquidator",
                        type: "address"
                    }, {internalType: "address", name: "borrower", type: "address"}, {
                        internalType: "uint256",
                        name: "seizeTokens",
                        type: "uint256"
                    }],
                    name: "seizeAllowed",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "seizeGuardianPaused",
                    outputs: [{internalType: "bool", name: "", type: "bool"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{
                        internalType: "address",
                        name: "cTokenCollateral",
                        type: "address"
                    }, {internalType: "address", name: "cTokenBorrowed", type: "address"}, {
                        internalType: "address",
                        name: "liquidator",
                        type: "address"
                    }, {internalType: "address", name: "borrower", type: "address"}, {
                        internalType: "uint256",
                        name: "seizeTokens",
                        type: "uint256"
                    }],
                    name: "seizeVerify",
                    outputs: [],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{internalType: "address", name: "cToken", type: "address"}, {
                        internalType: "address",
                        name: "src",
                        type: "address"
                    }, {internalType: "address", name: "dst", type: "address"}, {
                        internalType: "uint256",
                        name: "transferTokens",
                        type: "uint256"
                    }],
                    name: "transferAllowed",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "transferGuardianPaused",
                    outputs: [{internalType: "bool", name: "", type: "bool"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{internalType: "address", name: "cToken", type: "address"}, {
                        internalType: "address",
                        name: "src",
                        type: "address"
                    }, {internalType: "address", name: "dst", type: "address"}, {
                        internalType: "uint256",
                        name: "transferTokens",
                        type: "uint256"
                    }],
                    name: "transferVerify",
                    outputs: [],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }]
            },
            COMP: {id: "COMP", name: "COMP", address: "0xda8dECaE3b368225314EA6cBDB4C4EC381Eb6C1e", abiJson: []},
            priceOracle: {
                id: "priceOracle",
                name: "priceOracle",
                address: "0x605DdadA5862f6594Eff274CF0f8E4E0B7E4276e",
                abi: [{
                    inputs: [{
                        internalType: "contract OpenOraclePriceData",
                        name: "priceData_",
                        type: "address"
                    }, {internalType: "address", name: "reporter_", type: "address"}, {
                        internalType: "uint256",
                        name: "anchorToleranceMantissa_",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "anchorPeriod_",
                        type: "uint256"
                    }, {
                        components: [{
                            internalType: "address",
                            name: "cToken",
                            type: "address"
                        }, {internalType: "address", name: "underlying", type: "address"}, {
                            internalType: "bytes32",
                            name: "symbolHash",
                            type: "bytes32"
                        }, {
                            internalType: "uint256",
                            name: "baseUnit",
                            type: "uint256"
                        }, {
                            internalType: "enum UniswapConfig.PriceSource",
                            name: "priceSource",
                            type: "uint8"
                        }, {internalType: "uint256", name: "fixedPrice", type: "uint256"}, {
                            internalType: "address",
                            name: "uniswapMarket",
                            type: "address"
                        }, {internalType: "bool", name: "isUniswapReversed", type: "bool"}],
                        internalType: "struct UniswapConfig.TokenConfig[]",
                        name: "configs",
                        type: "tuple[]"
                    }], stateMutability: "nonpayable", type: "constructor"
                }, {
                    anonymous: !1,
                    inputs: [{indexed: !1, internalType: "string", name: "symbol", type: "string"}, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "anchorPrice",
                        type: "uint256"
                    }, {indexed: !1, internalType: "uint256", name: "oldTimestamp", type: "uint256"}, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "newTimestamp",
                        type: "uint256"
                    }],
                    name: "AnchorPriceUpdated",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{indexed: !1, internalType: "string", name: "symbol", type: "string"}, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "reporter",
                        type: "uint256"
                    }, {indexed: !1, internalType: "uint256", name: "anchor", type: "uint256"}],
                    name: "PriceGuarded",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{indexed: !1, internalType: "string", name: "symbol", type: "string"}, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "price",
                        type: "uint256"
                    }],
                    name: "PriceUpdated",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{indexed: !1, internalType: "address", name: "reporter", type: "address"}],
                    name: "ReporterInvalidated",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{indexed: !0, internalType: "bytes32", name: "symbolHash", type: "bytes32"}, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "oldTimestamp",
                        type: "uint256"
                    }, {indexed: !1, internalType: "uint256", name: "newTimestamp", type: "uint256"}, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "oldPrice",
                        type: "uint256"
                    }, {indexed: !1, internalType: "uint256", name: "newPrice", type: "uint256"}],
                    name: "UniswapWindowUpdated",
                    type: "event"
                }, {
                    inputs: [],
                    name: "anchorPeriod",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "ethBaseUnit",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "expScale",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{internalType: "uint256", name: "i", type: "uint256"}],
                    name: "getTokenConfig",
                    outputs: [{
                        components: [{
                            internalType: "address",
                            name: "cToken",
                            type: "address"
                        }, {internalType: "address", name: "underlying", type: "address"}, {
                            internalType: "bytes32",
                            name: "symbolHash",
                            type: "bytes32"
                        }, {
                            internalType: "uint256",
                            name: "baseUnit",
                            type: "uint256"
                        }, {
                            internalType: "enum UniswapConfig.PriceSource",
                            name: "priceSource",
                            type: "uint8"
                        }, {internalType: "uint256", name: "fixedPrice", type: "uint256"}, {
                            internalType: "address",
                            name: "uniswapMarket",
                            type: "address"
                        }, {internalType: "bool", name: "isUniswapReversed", type: "bool"}],
                        internalType: "struct UniswapConfig.TokenConfig",
                        name: "",
                        type: "tuple"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{internalType: "address", name: "cToken", type: "address"}],
                    name: "getTokenConfigByCToken",
                    outputs: [{
                        components: [{
                            internalType: "address",
                            name: "cToken",
                            type: "address"
                        }, {internalType: "address", name: "underlying", type: "address"}, {
                            internalType: "bytes32",
                            name: "symbolHash",
                            type: "bytes32"
                        }, {
                            internalType: "uint256",
                            name: "baseUnit",
                            type: "uint256"
                        }, {
                            internalType: "enum UniswapConfig.PriceSource",
                            name: "priceSource",
                            type: "uint8"
                        }, {internalType: "uint256", name: "fixedPrice", type: "uint256"}, {
                            internalType: "address",
                            name: "uniswapMarket",
                            type: "address"
                        }, {internalType: "bool", name: "isUniswapReversed", type: "bool"}],
                        internalType: "struct UniswapConfig.TokenConfig",
                        name: "",
                        type: "tuple"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{internalType: "string", name: "symbol", type: "string"}],
                    name: "getTokenConfigBySymbol",
                    outputs: [{
                        components: [{
                            internalType: "address",
                            name: "cToken",
                            type: "address"
                        }, {internalType: "address", name: "underlying", type: "address"}, {
                            internalType: "bytes32",
                            name: "symbolHash",
                            type: "bytes32"
                        }, {
                            internalType: "uint256",
                            name: "baseUnit",
                            type: "uint256"
                        }, {
                            internalType: "enum UniswapConfig.PriceSource",
                            name: "priceSource",
                            type: "uint8"
                        }, {internalType: "uint256", name: "fixedPrice", type: "uint256"}, {
                            internalType: "address",
                            name: "uniswapMarket",
                            type: "address"
                        }, {internalType: "bool", name: "isUniswapReversed", type: "bool"}],
                        internalType: "struct UniswapConfig.TokenConfig",
                        name: "",
                        type: "tuple"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{internalType: "bytes32", name: "symbolHash", type: "bytes32"}],
                    name: "getTokenConfigBySymbolHash",
                    outputs: [{
                        components: [{
                            internalType: "address",
                            name: "cToken",
                            type: "address"
                        }, {internalType: "address", name: "underlying", type: "address"}, {
                            internalType: "bytes32",
                            name: "symbolHash",
                            type: "bytes32"
                        }, {
                            internalType: "uint256",
                            name: "baseUnit",
                            type: "uint256"
                        }, {
                            internalType: "enum UniswapConfig.PriceSource",
                            name: "priceSource",
                            type: "uint8"
                        }, {internalType: "uint256", name: "fixedPrice", type: "uint256"}, {
                            internalType: "address",
                            name: "uniswapMarket",
                            type: "address"
                        }, {internalType: "bool", name: "isUniswapReversed", type: "bool"}],
                        internalType: "struct UniswapConfig.TokenConfig",
                        name: "",
                        type: "tuple"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{internalType: "address", name: "underlying", type: "address"}],
                    name: "getTokenConfigByUnderlying",
                    outputs: [{
                        components: [{
                            internalType: "address",
                            name: "cToken",
                            type: "address"
                        }, {internalType: "address", name: "underlying", type: "address"}, {
                            internalType: "bytes32",
                            name: "symbolHash",
                            type: "bytes32"
                        }, {
                            internalType: "uint256",
                            name: "baseUnit",
                            type: "uint256"
                        }, {
                            internalType: "enum UniswapConfig.PriceSource",
                            name: "priceSource",
                            type: "uint8"
                        }, {internalType: "uint256", name: "fixedPrice", type: "uint256"}, {
                            internalType: "address",
                            name: "uniswapMarket",
                            type: "address"
                        }, {internalType: "bool", name: "isUniswapReversed", type: "bool"}],
                        internalType: "struct UniswapConfig.TokenConfig",
                        name: "",
                        type: "tuple"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{internalType: "address", name: "cToken", type: "address"}],
                    name: "getUnderlyingPrice",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{internalType: "bytes", name: "message", type: "bytes"}, {
                        internalType: "bytes",
                        name: "signature",
                        type: "bytes"
                    }], name: "invalidateReporter", outputs: [], stateMutability: "nonpayable", type: "function"
                }, {
                    inputs: [],
                    name: "lowerBoundAnchorRatio",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "maxTokens",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{internalType: "bytes32", name: "", type: "bytes32"}],
                    name: "newObservations",
                    outputs: [{internalType: "uint256", name: "timestamp", type: "uint256"}, {
                        internalType: "uint256",
                        name: "acc",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "numTokens",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{internalType: "bytes32", name: "", type: "bytes32"}],
                    name: "oldObservations",
                    outputs: [{internalType: "uint256", name: "timestamp", type: "uint256"}, {
                        internalType: "uint256",
                        name: "acc",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{internalType: "bytes[]", name: "messages", type: "bytes[]"}, {
                        internalType: "bytes[]",
                        name: "signatures",
                        type: "bytes[]"
                    }, {internalType: "string[]", name: "symbols", type: "string[]"}],
                    name: "postPrices",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{internalType: "string", name: "symbol", type: "string"}],
                    name: "price",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "priceData",
                    outputs: [{internalType: "contract OpenOraclePriceData", name: "", type: "address"}],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{internalType: "bytes32", name: "", type: "bytes32"}],
                    name: "prices",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "reporter",
                    outputs: [{internalType: "address", name: "", type: "address"}],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "reporterInvalidated",
                    outputs: [{internalType: "bool", name: "", type: "bool"}],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{internalType: "bytes", name: "message", type: "bytes"}, {
                        internalType: "bytes",
                        name: "signature",
                        type: "bytes"
                    }],
                    name: "source",
                    outputs: [{internalType: "address", name: "", type: "address"}],
                    stateMutability: "pure",
                    type: "function"
                }, {
                    inputs: [],
                    name: "upperBoundAnchorRatio",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    stateMutability: "view",
                    type: "function"
                }]
            }
        }
    }, "8a25": function (e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPkSURBVHgBzVhrTuJQFL5FNEb9URIfMf6w7ABXMGUFAyuwrmCGFYArUFdAZwXgCigrkFkBzC/jI4Efaowv5jvkljm9j7YQJ/Ekpa9zzv3ueRchvgg5YgkaDofuxsaGXywWD9/f3ysJhY4zent76z8/Pw/K5fIkr86FgNzf39em0+kPHH5OkahQKITb29u/shhzAbm5ualhp2e49MRyNAKgVhqgVCDkgq2trTYsULMtQK7Aezq7uHdxTa5yLfwhXHm6v78/yg3k+vraW1lZ6QndCgNSuLq62i2VSn9ssjj5sEITAFX5EcBUVTBOXhBy163d3d1Mfyu6AgMgDYyTBwQoenx8rC+SBapOZNiZ4uIRdB7FOjUgt7e3bZwC9iiEFU7EJxCCPoRljuN7AOvu7e3VNSAAEeDUju8h1N3Z2amnKYcMBWcFSicfHx8TmDtK47+7u+vx9Md1HWC6KpChkC6hmIDiqinCZUH7Cd9TTVEzhPgjW3aMx2P35eXlisXMCBYvOwxEIJg1QIEpMLEjH6eOAYBKlNYN2q36ggIYcThfCxuqOWyBucnIGlBQNoHAu55YgGR2ROpzbPwKp7g9RAX6JXNxv1GaCn0XHnjayuMIvD6ivwTrOagtpCPkDNitKhMT5/OL9IsmVVF20VelYMqmSNaVFqx2ynlQ4EiuD8uRW1oEFHFmzDiscQmd54mHEGzCVFN5jE2CFMiMx7ZLzl/JwTPXWZC789j7gUXpnAfuCEUGwVWDLB7qU/F1QX1J9UB9Bj97/B61RXPdMkRJYQUClBoQ+DmRqlRHxCeQ7NhmIMI8cyTMvL6+nun/nKQB4Qtpi0h/zy0lMyiVZOFLJTm7/AOCGOBzhYu6cqgKwYw81XzUlZawEJpbiwofZZecTTSSz5MWwQ4jzvT6+qpNZGjjF0KxilzIp3uKG7ICVWiAji1Gs0jPFFOQ9/m9scSDBnDHkSq8TInHpuoHBwdav+ENVsQlfoYoafoKJvZjVRhpG1Hb5mmXQhMq/xYQgUgmRZgYA+DbIWvPE/SQsmkqk1NckyxomEkneH7+9PR0kSI7nwDjBltU+Bo4OvLa3dzcpOuqqkzOGbMegsD+hr4xm+BRb35nVVQ5MnrxfdxgtVERcdBRZsv/Nipy3RoQwwQ1my2x24Zp4spD8vuoo4yIiQlQq6xo5TR7VnlAAlSN/GoK4CyiwISLr9JAzNawKaCgohpg+kCiz0ekZd9mIZJdW1v7jsUCXj1tIFKBxAplOQ9M76lBQvFAnilDPHaY+LsPDw8npmzK9RFu+VrLTWQFTIENU01ZCAgHhPQ7XvBviXP8C3CZxfgXuiOCkEu6sycAAAAASUVORK5CYII="
    }, 9: function (e, t) {
    }, "96a4": function (e, t, n) {
        (t = n("24fb")(!1)).push([e.i, "*{touch-action:pan-y}*,:after,:before{box-sizing:border-box}body,html,input{padding:0;margin:0}input{outline:none;border:none}input::-moz-placeholder{color:var(--grey)}input:-ms-input-placeholder{color:var(--grey)}input::placeholder{color:var(--grey)}button{outline:none;cursor:pointer;border:none}li,ul{list-style-type:none;margin:0;padding:0}.cursor_pointer{cursor:pointer}.text_underline{text-decoration:underline}.side_bar::-moz-scrollbar-scrollbar,.side_bar::-ms-scrollbar,.side_bar::-o-scrollbar,.side_bar::-webkit-scrollbar{width:0;height:0;margin:0 auto}.side_bar::-moz-scrollbar-thumb,.side_bar::-moz-scrollbar-track,.side_bar::-ms-scrollbar-thumb,.side_bar::-ms-scrollbar-track,.side_bar::-o-scrollbar-thumb,.side_bar::-o-scrollbar-track,.side_bar::-webkit-scrollbar-thumb,.side_bar::-webkit-scrollbar-track{background-color:var(--grey-dark);box-shadow:inset 0 0 5px rgba(0,0,0,.2)}.side_bar::-moz-scrollbar-button,.side_bar::-ms-scrollbar-button,.side_bar::-o-scrollbar-button,.side_bar::-webkit-scrollbar-button{height:0;background-color:var(--grey-dark)}.route_active,.router-link-exact-active .router-link-active{background:linear-gradient(180deg,#6c5dd3,#9f5dd3)}.route_active span,.router-link-exact-active .router-link-active span{color:var(--white)}.circle_apy{height:140px;width:140px;border:solid 4px var(--pink);border-radius:50%}@media only screen and (max-width:750px){.circle_apy{height:120px;width:120px;border:solid 4px var(--pink);border-radius:50%}}.border_radius_5{border-radius:5px}.border_radius_10{border-radius:10px}.border_radius_15{border-radius:15px}.border_radius_20{border-radius:20px}.border_radius_25{border-radius:25px}.border_radius_30{border-radius:30px}.border_light_grey{border:solid 1px var(--light-grey)}.border_grey{border:1px solid #ababab}.border_orange{border:solid 1px var(--orange)}.border_r_light_grey{border-right:solid 1px var(--light-grey)}.border_b_light_grey{border-bottom:solid 1px var(--light-grey)}:root{--black:#000;--white:#fff;--red:red;--orange:#ffbb0d;--pink:#fa2977;--grey:#726e6e;--green:#2abc19;--purple:#6c5dd3;--light-grey:#e5e5e5;--grey-white:#eaeaea;--success:#0eb315}.text-primary,.text_black{color:var(--black)}.text_white{color:var(--white)}.text_red{color:var(--red)}.text_grey{color:var(--grey)}.text_green{color:var(--green)}.text_light_grey{color:var(--light-grey)}.text_orange{color:var(--orange)}.text_pink{color:var(--pink)}.text_purple{color:var(--purple)}.text_success{color:var(--success)}.bg_none{background:none}.bg_white{background-color:var(--white)}.bg_black{background-color:var(--black)}.bg_grey{background-color:var(--grey)}.bg_green{background-color:var(--green)}.bg_light_grey{color:var(--light-grey)}.bg_pink{background-color:var(--pink)}.bg_violet{background:linear-gradient(180deg,#6c5dd3,#9f5dd3)}.bg_orange{background-color:var(--orange)}.bg_purple{background-color:var(--purple)}.bg_success{background-color:var(--success)}.margin_auto{margin:auto}.margin_5{margin:5px}.margin_10{margin:10px}.margin_20{margin:20px}.margin_lr10{margin:0 10px}.margin_tb10{margin:10px 0}.margin_tb20{margin:20px 0}.margin_tb40{margin:40px 0}.margin_t_5{margin-top:5px}.margin_t_10{margin-top:10px}.margin_t_20{margin-top:20px}.margin_t_40{margin-top:40px}.margin_t_60{margin-top:60px}.margin_t_120{margin-top:120px}.margin_r_10{margin-right:10px}.margin_l_5{margin-left:5px}.margin_l_10{margin-left:10px}.margin_l_20{margin-left:20px}.padding_5{padding:5px}.padding_10{padding:10px}.padding_20{padding:20px}.padding_30{padding:30px}.padding_40{padding:40px}.padding_b_40{padding-bottom:40px}.padding_t40{padding-top:40px}.padding_lr5{padding:0 5px}.padding_lr10{padding:0 10px}.padding_lr20{padding:0 20px}.padding_tb10{padding:10px 0}.padding_tb20{padding:20px 0}.padding_tb5_lr10{padding:5px 10px}.padding_tb5_lr20{padding:5px 20px}.padding_tb10_lr20{padding:10px 20px}.padding_tb10_lr15{padding:10px 15px}.padding_tb20_lr40{padding:20px 40px}@media only screen and (max-width:750px){.padding_10{padding:5px}.padding_20{padding:10px}.padding_30{padding:15px}.padding_40{padding:20px}.padding_t40{padding-top:20px}.padding_lr10{padding:0 5px}.padding_lr20{padding:0 10px}.padding_tb10{padding:5px 0}.padding_tb20{padding:10px 0}.padding_tb5_lr10{padding:3.5px 5px}.padding_tb10_lr20{padding:5.5px 12px}.padding_tb20_lr40{padding:10px 15px}.margin_lr10{margin:0 5px}.margin_tb40{margin:20px 0}}.box_shadow{box-shadow:0 0 2px 2px var(--light-grey)}.box_shadow_b{box-shadow:8px 2px 8px 4px var(--light-grey)}.font_12{font-size:12px}.font_14{font-size:14px}.font_16{font-size:16px}.font_18{font-size:18px}.font_20{font-size:20px}.font_22{font-size:22px}.font_24{font-size:24px}.font_26{font-size:26px}.font_28{font-size:28px}.font_30{font-size:30px}.font_32{font-size:32px}.font_34{font-size:34px}.font_36{font-size:36px}.font_38{font-size:38px}.font_40{font-size:40px}.font_42{font-size:42px}.font_44{font-size:44px}.font_46{font-size:46px}.font_48{font-size:48px}.font_50{font-size:50px}.font_58{font-size:58px}.font_60{font-size:60px}.font_70{font-size:70px}@media only screen and (max-width:1440px){.font_20{font-size:16px}.font_22{font-size:17px}.font_24{font-size:18px}.font_26{font-size:20px}.font_28{font-size:22px}.font_30{font-size:24px}.font_32{font-size:26px}.font_34{font-size:28px}.font_36{font-size:30px}.font_38{font-size:32px}.font_40{font-size:34px}.font_42{font-size:36px}.font_44{font-size:38px}.font_46{font-size:40px}.font_48{font-size:42px}.font_50{font-size:44px}.font_58{font-size:52px}.font_60{font-size:54px}.font_70{font-size:60px}}@media only screen and (max-width:1080px){.font_20{font-size:14px}.font_22,.font_24{font-size:15px}.font_26{font-size:16px}.font_28{font-size:18px}.font_30{font-size:20px}.font_32{font-size:22px}.font_34{font-size:24px}.font_36{font-size:26px}.font_38{font-size:28px}.font_40{font-size:30px}.font_42{font-size:32px}.font_44{font-size:34px}.font_46{font-size:36px}.font_48{font-size:38px}.font_50{font-size:40px}.font_58{font-size:44px}.font_60{font-size:48px}.font_70{font-size:50px}}@media only screen and (max-width:750px){.font_18,.font_20,.font_22,.font_24{font-size:14px}.font_26{font-size:15px}.font_28{font-size:16px}.font_30{font-size:18px}.font_32{font-size:20px}.font_34{font-size:22px}.font_36{font-size:24px}.font_38{font-size:26px}.font_40{font-size:18px}.font_42{font-size:30px}.font_44{font-size:32px}.font_46{font-size:34px}.font_48{font-size:36px}.font_50{font-size:40px}.font_58{font-size:42px}.font_60{font-size:46px}.font_70{font-size:48px}}.font_400{font-weight:400}.font_500{font-weight:500}.font_600{font-weight:600}.font_700{font-weight:700}.font_800{font-weight:800}.font_bold{font-weight:700}.break-word{word-wrap:break-word}.white-space-pre-wrap{white-space:pre-wrap}.flex{display:flex}.between_h_center,.between_v_center{display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center}.between_v_center{flex-direction:column}.content_center{justify-content:center}.content_start{justify-content:flex-start}.content_end{justify-content:flex-end}.content_between{justify-content:space-between}.content_around{justify-content:space-around}.content_evenly{justify-content:space-evenly}.align_center{align-items:center}.align_start{align-items:flex-start}.align_end{align-items:flex-end}.flex_no_wrap{flex-wrap:nowrap}.text_align_left{text-align:left}.text_align_center{text-align:center}.text_align_pl_mc{text-align:left}.text_align_pr_mc,.text_align_right{text-align:right}.p_rel{position:relative}.t_h_center{position:absolute;top:0;left:0;transform:translateX(-50%);-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);-moz-transform:translateX(-50%);-o-transform:translateX(-50%)}.r_v_center{top:50%;transform:translateY(-50%);-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);-moz-transform:translateY(-50%);-o-transform:translateY(-50%)}.r_t,.r_v_center{position:absolute;right:0}.r_t{top:0}.r_badge{position:absolute;color:var(--black);top:-10px;right:-15px}.coin_1{margin-right:-15px}.coin_2{margin-top:-15px}.show_m{display:none}@media only screen and (max-width:750px){.show_p{display:none}.show_m{display:block}.content_center_m{justify-content:center}.content_start_m{justify-content:flex-start}.content_end_m{justify-content:flex-end}.text_align_pl_mc,.text_align_pr_mc{text-align:center}}:root{--logo_height:40px;--header_bar:80px;--footer_bar:160px}.height_10{height:10px}.height_18{height:18px}.height_20{height:20px}.height_24{height:24px}.height_30{height:30px}.height_35{height:35px}.height_40{height:40px}.height_50{height:50px}.height_60{height:60px}.height_70{height:70px}.height_80{height:80px}.height_90{height:90px}.height_100{height:100px}.height_120{height:120px}.height_140{height:140px}.height_160{height:160px}.height_180{height:180px}.height_330{height:330px}.height_p_50{height:50%}.height_p_80{height:80%}.height_p_100{height:100%}.min_height_50{min-height:50px}.min_height_80{min-height:80px}.header_height{height:var(--header_bar)}.footer_height{height:var(--footer_bar)}.logo_height{height:var(--logo_height)}@media only screen and (max-width:1080px){:root{--logo_height:36px}.height_180{height:140px}}@media only screen and (max-width:750px){:root{--header_bar:60px;--footer_bar:140px;--logo_height:30px}.height_180{height:120px}.height_330{height:auto}.height_40{height:30px}}:root{--nav_bar:256px}.col-1{width:8.33%}.col-2{width:16.66%}.col-3{width:25%}.col-3_4{width:30%}.col-4{width:33.33%}.col-4_5{width:35%}.col-5{width:41.66%}.col-51{width:45%}.col-6{width:50%}.col-7,.col-7_1{width:56.66%}.col-8{width:66.66%}.col-9{width:75%}.col-10{width:83.33%}.col-11{width:91.66%}.col-12{width:100%}@media only screen and (max-width:750px){[class*=col-]{width:100%}}.width_100{width:100px}.width_120{width:120px}.width_140{width:140px}.width_400{width:400px}.width_p_10{width:10%}.width_p_12{width:12%}.width_p_20{width:20%}.width_p_25{width:25%}.width_p_35{width:35%}.width_p_40{width:40%}.width_p_45{width:45%}.width_p_50{width:50%}.width_p_60{width:60%}.width_p_70{width:70%}.width_p_80{width:80%}.width_p_85{width:85%}.width_p_90{width:90%}.width_p_95{width:95%}.min_width_100{min-width:100px}.min_width_120{min-width:120px}.min_width_320{min-width:320px}.min_width_50{min-width:50px}.max_width_1140{max-width:1140px}.max_width_1200{max-width:1200px}.max_width_1400{max-width:1400px}.nav_bar_width{width:var(--nav_bar)}@media only screen and (max-width:1440px){:root{--nav_bar:200px}}@media only screen and (max-width:1080px){:root{--nav_bar:190px}}@media only screen and (max-width:750px){:root{--nav_bar:106px}.min_width_320{min-width:50%}}#app,body,html{height:100%}#app{font-family:HCo Gotham SSm,-apple-system,BlinkMacSystemFont,Segoe UI,Avenir,Helvetica Neue,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-align:center;color:var(--grey-white)}#app button:focus,#app input:focus,#app select:focus{box-shadow:none}#app .app_container{height:calc(100% - var(--header_bar) - var(--footer_bar))}#app .app_cover{height:100%;width:100%}#app .nav_bar_cover{z-index:1000;padding-top:var(--header_bar)}#app .fixed_header{z-index:1001;width:100%;position:fixed;top:0}#app .page_container{overflow-y:auto;width:100%;height:100%;background:linear-gradient(227.78deg,#ebebeb 4.7%,#f5eefb 56%)}#app .view_cover{width:calc(100% - var(--nav_bar));height:calc(100% - var(--header_bar));margin-top:var(--header_bar);overflow-y:auto}#app .view_cover::-webkit-scrollbar{width:8px;height:12px;background-color:#fff}#app .view_cover::-webkit-scrollbar-thumb{display:block;min-height:12px;min-width:8px;border-radius:6px;background-color:#d9d9d9}#app .view_cover::-webkit-scrollbar-thumb:hover{display:block;min-height:12px;min-width:8px;border-radius:6px;background-color:#9f9f9f}#app .display_m{display:none}@media only screen and (max-width:750px){#app .view_cover{width:100%}#app .display_m{display:block}}", ""]), e.exports = t
    }, "97df": function (e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABpSURBVHgB7dYxCoAwEETRjXj/K2tKsYk/rLiS/7p0AzMsaTHp6K7v1kWiLYoyGLVHsqztWSVlMMpg1Dp3bOTpnbNKyo2N3LdnlVTdjb39d59lldT/7tjX27NKymCUwSiDUQajDEaVDXYCo2gYUvFZ8QQAAAAASUVORK5CYII="
    }, 9902: function (e, t, n) {
        var a = n("10d9");
        a.__esModule && (a = a.default), "string" == typeof a && (a = [[e.i, a, ""]]), a.locals && (e.exports = a.locals), (0, n("499e").default)("08478f7f", a, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    }, "9b17": function (e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB9SURBVHgB7ZdRCoAwDEM38a47U0+rv1KEUFIhzLy/7aMUEkI611rXIIiI+Xyz844hhhdCnPkjeyJT9Uh1niVD6Huom6rnLBlifw+h3EFYMoS+h9g+4z70NXILUZnxRvaQ+1A3ejnUfZexWDLE/+6yKpYMsX8fYudZMoTcQjdjiymNqt36twAAAABJRU5ErkJggg=="
    }, "9b61": function (e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFEAAABQCAYAAABh05mTAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATtSURBVHgB7ZzdTRtBEMfH5kOID8lIgEHi4aggpINLBUkqiFMBTgUhFQAV5KgAUkFMB+7AvIHBEn4AHvjMjHUrXQKYndm520XZn4TXNpx9/nt2/7Oze9Qg5+zsbLNWq+3g3c3Hx8cGRMbRrdfru0tLS/v0oEY3uYC/o3g87u/vf6ytrW0bEXvYJBBhg0J+qJ+fn6cQBRQzMTHxsY5dOIGIC406RJyJIioQRVQgiqhAFFGBKKICUUQFoogKRBEViCIqMAkCcKp4iKWgLgjB49vYlFkxyrAqdQwC8NxSbFLOMSIR8QQ3Ly8vv25sbAxBAFaNEmxaUAIownGz2fwKAk5OTpLJyck2vgbrOGl3Tubm5r6DEPwS9qEk8LU7IIAExIqMqKbqMia28Y1TELC8vNyRftjXoEIpMOn1eg0SEIQlQSdjwTc+oG8QZLA/rAUdrDQfA5P5+fkDcKipurozfYM/QUBJ0ZgBExyfd3MzEaOR4qSnp6dtEHB3d6c2NpKhrKyssF5vMBh8wmYLHFHJEzHd2aFxBZhg18uwETn8v0iiGoV/BwqoJdsLCwsfQQB++F1QQGIoWqiJKF2rwbxsD9yjUWQoWnif9i0uLg4VojGjm4uLCy/r5kHMnV0MpmgoV1dXCXigFBH7/f4nzt9TV5SmO8Xjpqenv4AHyopEyYcRGYMxFNoKg80meKAUEalAwZ0SCpPvoqE453tSShsTcSYjKVBwozGjm9xQWEOIJmUaSyqJRjIKm78tGsrt7S0J6G1HW6nuTJt9gIltulPs+njfW1cmyk5xWtzp4NTUFEXXq8n3zc0NJekjQ8Go9GIohrJFbMzOzrKixDL57q6vr5vlCa9RSJSebKMgbW40WkwFRyL7NhRDFTOWBi4lsPJGikZsDl/49RBnJr/ojm9DMVQ17WsBkzHrMIdmgcy3oRiqElEt+cbnMmpDMBRDZQUIjeSbckMU9yh/GEQUElVWcVLXaMT729SGYiiGSkthGI3swkSxTIbFhlEUhmIohqrriezke2ZmhlyajCQzxYZQDMVQeVFWmnyHaCiGykWUJt8hGorBx/KAaCpIbb7bogWB4WWNBaOxBQLQmFIIEF8LVYlwM5R4J1qZeFvt4ybfIV/I6XPJlJV8oyN7Wcmzweu6s200hmooBs1tJJKtIKlNuhOqoRjURMRy/VHhYcfyMNvkO0hDMaiISNWVQrmetSf7teT7LfxnAGcRScCHh4cPxefy6ovtJqWxyXfIhmJwFpHKU89ta8OpGtUCu5av0X7u+dANxeAq4u5LW3xpqoalq89gt/ewMRgMnqxRcw2Fa25CM3yCWETqxrhgNHbbB0UoCvkNLMAh4blotDaUfFixei9DvsZt1VvGIRaRxkGbK6poX7bl+PhX8s0xFDMuc3fLUm9BIWk8dxJSJCJFDeeEbcfHYvJtayhSAQ0aQkpEzFZXV/c4BzDGR4rGxNZQXAUsnp+LkCwR6aSlu/Rtx0eMxi0bQ6Fzub6+fq+14d1FyBqW21vYiq6KKolh/pPA2yATXapbMg0IaCXPhnjlvQJRRAWiiApEERWIIioQRVQgiqhAFFGBKKICUUQFoogKRBEVIBGdy+P/OcPRv83v9/s9LOEnEGGDNdKNUXdGAW1X5SIFsDA8Wi4eiYjLnl1U9D2KaTaZR8bTwZ9Ws9kcVfn/ANGcD+CGyPpZAAAAAElFTkSuQmCC"
    }, "9c46": function (e) {
        e.exports = JSON.parse('{"pancakePairAbi":[{"constant":true,"inputs":[],"name":"getReserves","outputs":[{"internalType":"uint112","name":"_reserve0","type":"uint112"},{"internalType":"uint112","name":"_reserve1","type":"uint112"},{"internalType":"uint32","name":"_blockTimestampLast","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"token0","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"token1","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"}],"erc20Abi":[{"name":"Approval","type":"event","anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}]},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"}],"vaultAbi":[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"burnAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IERC20","name":"want","type":"address"},{"internalType":"uint256","name":"lastRewardBlock","type":"uint256"},{"internalType":"address","name":"strat","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_wantAmt","type":"uint256"}],"name":"stake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"stakedWantTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"startBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAllocPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"shares","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_wantAmt","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"withdrawAll","outputs":[],"stateMutability":"nonpayable","type":"function"}],"stratAbi":[{"inputs":[{"internalType":"address","name":"_autoFarmAddress","type":"address"},{"internalType":"address","name":"_AUTOAddress","type":"address"},{"internalType":"bool","name":"_isCAKEStaking","type":"bool"},{"internalType":"bool","name":"_isAutoComp","type":"bool"},{"internalType":"address","name":"_farmContractAddress","type":"address"},{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_wantAddress","type":"address"},{"internalType":"address","name":"_token0Address","type":"address"},{"internalType":"address","name":"_token1Address","type":"address"},{"internalType":"address","name":"_earnedAddress","type":"address"},{"internalType":"address","name":"_uniRouterAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[],"name":"AUTOAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"autoFarmAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"buyBackAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"buyBackRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"buyBackRateMax","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"buyBackRateUL","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"controllerFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"controllerFeeMax","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"controllerFeeUL","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"convertDustToEarned","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_userAddress","type":"address"},{"internalType":"uint256","name":"_wantAmt","type":"uint256"}],"name":"deposit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"earn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"earnedAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"earnedToAUTOPath","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"earnedToToken0Path","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"earnedToToken1Path","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"entranceFeeFactor","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"entranceFeeFactorLL","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"entranceFeeFactorMax","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"farm","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"farmContractAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"govAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address","name":"_to","type":"address"}],"name":"inCaseTokensGetStuck","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"isAutoComp","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isCAKEStaking","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastEarnBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"onlyGov","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pid","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_controllerFee","type":"uint256"}],"name":"setControllerFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_entranceFeeFactor","type":"uint256"}],"name":"setEntranceFeeFactor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_govAddress","type":"address"}],"name":"setGov","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_onlyGov","type":"bool"}],"name":"setOnlyGov","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_buyBackRate","type":"uint256"}],"name":"setbuyBackRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"sharesTotal","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token0Address","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"token0ToEarnedPath","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token1Address","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"token1ToEarnedPath","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"uniRouterAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"wantAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"wantLockedTotal","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"wbnbAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_userAddress","type":"address"},{"internalType":"uint256","name":"_wantAmt","type":"uint256"}],"name":"withdraw","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"}],"poolAbi":[{"inputs":[{"internalType":"address","name":"OBS_","type":"address"},{"internalType":"address","name":"lptoken_","type":"address"},{"internalType":"uint256","name":"starttime_","type":"uint256"},{"internalType":"address","name":"dev_","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"}],"name":"RewardPaid","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Staked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdrawn","type":"event"},{"inputs":[],"name":"OBS","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DURATION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"earned","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"exit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"initreward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastTimeRewardApplicable","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastUpdateTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lpt","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"periodFinish","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardPerToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardPerTokenStored","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"rewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"stake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"starttime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userRewardPerTokenPaid","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}],"bnbAbi":[{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"stake","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]}')
    }, a195: function (e, t, n) {
        var a = n("52bf");
        a.__esModule && (a = a.default), "string" == typeof a && (a = [[e.i, a, ""]]), a.locals && (e.exports = a.locals), (0, n("499e").default)("a78af46a", a, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    }, a1c1: function (e, t, n) {
        "use strict";
        n("0265")
    }, a2ee: function (e) {
        e.exports = JSON.parse('[{"inputs":[{"internalType":"address","name":"underlying_","type":"address"},{"internalType":"contract ComptrollerInterface","name":"comptroller_","type":"address"},{"internalType":"contract InterestRateModel","name":"interestRateModel_","type":"address"},{"internalType":"uint256","name":"initialExchangeRateMantissa_","type":"uint256"},{"internalType":"string","name":"name_","type":"string"},{"internalType":"string","name":"symbol_","type":"string"},{"internalType":"uint8","name":"decimals_","type":"uint8"},{"internalType":"address payable","name":"admin_","type":"address"},{"internalType":"address","name":"implementation_","type":"address"},{"internalType":"bytes","name":"becomeImplementationData","type":"bytes"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"cashPrior","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"interestAccumulated","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"borrowIndex","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalBorrows","type":"uint256"}],"name":"AccrueInterest","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"borrower","type":"address"},{"indexed":false,"internalType":"uint256","name":"borrowAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"accountBorrows","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalBorrows","type":"uint256"}],"name":"Borrow","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"error","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"info","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"detail","type":"uint256"}],"name":"Failure","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"liquidator","type":"address"},{"indexed":false,"internalType":"address","name":"borrower","type":"address"},{"indexed":false,"internalType":"uint256","name":"repayAmount","type":"uint256"},{"indexed":false,"internalType":"address","name":"cTokenCollateral","type":"address"},{"indexed":false,"internalType":"uint256","name":"seizeTokens","type":"uint256"}],"name":"LiquidateBorrow","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"minter","type":"address"},{"indexed":false,"internalType":"uint256","name":"mintAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"mintTokens","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"oldAdmin","type":"address"},{"indexed":false,"internalType":"address","name":"newAdmin","type":"address"}],"name":"NewAdmin","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"contract ComptrollerInterface","name":"oldComptroller","type":"address"},{"indexed":false,"internalType":"contract ComptrollerInterface","name":"newComptroller","type":"address"}],"name":"NewComptroller","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"oldImplementation","type":"address"},{"indexed":false,"internalType":"address","name":"newImplementation","type":"address"}],"name":"NewImplementation","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"contract InterestRateModel","name":"oldInterestRateModel","type":"address"},{"indexed":false,"internalType":"contract InterestRateModel","name":"newInterestRateModel","type":"address"}],"name":"NewMarketInterestRateModel","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"oldPendingAdmin","type":"address"},{"indexed":false,"internalType":"address","name":"newPendingAdmin","type":"address"}],"name":"NewPendingAdmin","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"oldReserveFactorMantissa","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newReserveFactorMantissa","type":"uint256"}],"name":"NewReserveFactor","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"redeemer","type":"address"},{"indexed":false,"internalType":"uint256","name":"redeemAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"redeemTokens","type":"uint256"}],"name":"Redeem","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"payer","type":"address"},{"indexed":false,"internalType":"address","name":"borrower","type":"address"},{"indexed":false,"internalType":"uint256","name":"repayAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"accountBorrows","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalBorrows","type":"uint256"}],"name":"RepayBorrow","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"benefactor","type":"address"},{"indexed":false,"internalType":"uint256","name":"addAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newTotalReserves","type":"uint256"}],"name":"ReservesAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"admin","type":"address"},{"indexed":false,"internalType":"uint256","name":"reduceAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newTotalReserves","type":"uint256"}],"name":"ReservesReduced","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Transfer","type":"event"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"constant":false,"inputs":[],"name":"_acceptAdmin","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"addAmount","type":"uint256"}],"name":"_addReserves","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"reduceAmount","type":"uint256"}],"name":"_reduceReserves","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"contract ComptrollerInterface","name":"newComptroller","type":"address"}],"name":"_setComptroller","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"implementation_","type":"address"},{"internalType":"bool","name":"allowResign","type":"bool"},{"internalType":"bytes","name":"becomeImplementationData","type":"bytes"}],"name":"_setImplementation","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"contract InterestRateModel","name":"newInterestRateModel","type":"address"}],"name":"_setInterestRateModel","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address payable","name":"newPendingAdmin","type":"address"}],"name":"_setPendingAdmin","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"newReserveFactorMantissa","type":"uint256"}],"name":"_setReserveFactor","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"accrualBlockNumber","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"accrueInterest","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"admin","outputs":[{"internalType":"address payable","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOfUnderlying","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"borrowAmount","type":"uint256"}],"name":"borrow","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"borrowBalanceCurrent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"borrowBalanceStored","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"borrowIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"borrowRatePerBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"comptroller","outputs":[{"internalType":"contract ComptrollerInterface","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes","name":"data","type":"bytes"}],"name":"delegateToImplementation","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes","name":"data","type":"bytes"}],"name":"delegateToViewImplementation","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"exchangeRateCurrent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"exchangeRateStored","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getAccountSnapshot","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getCash","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"implementation","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"interestRateModel","outputs":[{"internalType":"contract InterestRateModel","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isCToken","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"borrower","type":"address"},{"internalType":"uint256","name":"repayAmount","type":"uint256"},{"internalType":"contract CTokenInterface","name":"cTokenCollateral","type":"address"}],"name":"liquidateBorrow","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"mintAmount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"pendingAdmin","outputs":[{"internalType":"address payable","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"redeemTokens","type":"uint256"}],"name":"redeem","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"redeemAmount","type":"uint256"}],"name":"redeemUnderlying","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"repayAmount","type":"uint256"}],"name":"repayBorrow","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"borrower","type":"address"},{"internalType":"uint256","name":"repayAmount","type":"uint256"}],"name":"repayBorrowBehalf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"reserveFactorMantissa","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"liquidator","type":"address"},{"internalType":"address","name":"borrower","type":"address"},{"internalType":"uint256","name":"seizeTokens","type":"uint256"}],"name":"seize","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"supplyRatePerBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalBorrows","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"totalBorrowsCurrent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalReserves","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"src","type":"address"},{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"underlying","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"}]')
    }, a2f9: function (e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAa4SURBVHgB7Z17TiJLFMYPiMb4SDBR0b9uu4LBFUzPCkZXcJkV6KxAZgUyKxBXMLgC2xXArMC+iYkvjCQqIYp6v9NWG2hp6EdV0YC/pKdRGJj+OKdO1VdVPSkaIqenp9m5uTkzk8n88/z8nMevDHFQx9khlUo1Xl9fbTxs4LDxs91ut09arVZtY2OjQUMiRRpxBcPFf8WPW+QRKQY2DgsCHzWbTUunoFoEvL6+NnHawWHiIrOknjKLmcvlKqQYZQKKaNtNp9M7mkTrhY3PLz49PZ2sr6/bpADpAiZEOC822thDiFgkyUgV8OrqqoDTHslr22TjROTy8vIhSUKKgOfn5wYq6QEizqQRAP/OysvLy08ZaZ2mmFxcXOxCvOqoiMegF7A1NTVVrdfr/1JMIkcgt3Xz8/NFequuo0xpdXX1J0UkkoCcsvgG/+BhnsaDGorMdpSUDi2gEO+YklsoosKV+ltYEUMJOMbiuYQWMbCAEyCeSygRAwk4QeK5BBYxUDdGFAyDJgenSHJPY9ALBwqI0UWJxqfahiGPbtreoBf1TWExNDugCYZHLGtrayW/530FFMOzaoIMgWHRQHu46dce+qYwxNv/FM8hi/bQNwt7CsipC/G26BMX02/c3DOFIeApTVbVDYL98PCw6Z0u+BCBl5eXRfoUrxcGjOIPxklXBE5ghzksDUThRmcUdkUgxDNpvMTjqdDi9PS0AcsKNmCqSPHIeqOwKwLHpO1j0SxY96WVlZWTzidub2+zmGC6pXg08GUsuT+8C4gqs4VO4x8aXSwcFaTYYb95YQTJK8VEjJMtfpxxfwnxvtPowUKVkZoVb7T1guenEZ0UF55xpLcv7E1AEdoFGh04Rct3d3dHYVYhQLwvJAF8YSYbDfzZjoAISZOSD7dtpZmZmfLS0tJ/FAG+cBkRCLKLi4u8POXIETDh6Wtx9QySogEwSBLQzMTpyCkiCay+NZ67bTabv2UtFJJUgTuxUY03MuKNDRo+oQpCWNrttmxP0+B2MKPgjcNiUYDuhwS+kmS4HcyoeOMAOAUB50oul/tLepAeKGgHjQwuxCB9yCwIoVC09CSfwQUZkkq7HzbevyyzIISFTRKcVJjDRkbRGystCGGBmZBHupECpKewRXoKQihwjcraeVkRyNFWTkK0+aCqp2FkKCZIjV1M+/2mBIMIVNZVi73AklfDU4LBKIvFUza7GFtAngK4ubnZEZUuiSgdKLCANsXDgJtTgpCn+LarOPYhpknJQeVAoZFSaCTYOCyxvcCiIQETtaqwDayl8AHHqheIi31uFd1iKnBgvFhpsYFPKWKJSKHfEgkVaDBKbG4Da6QP4+zsTJv7I8vC94N3jGJqIR3JHo8KhlXa3G+28EktVhppZZFGNFzUOyo70Mz9/f3fNCZonA3MpA8zyNLZuHABIYXTFFw7eLzvdKTZNSGNzM/Px95iNQjVM43QzOKzK6BuE0D52kPVBQS1wwk6R0DRDuq0n/KD0hijmQJ38mMMEU1SCCb1naBzBOR20A1JTWRnZ2d9G3gWT/QZebkdi1ikkCguIGXX7+w0E7RaUhCmZ3emQ7zO1+4hGg+CRqNyB0akr/PYfQAz1CK9aVzw/oJXx/YZrbCwx0E64rhAgxTB1Xd5efndwuuys5DGJdJHttO1YfHw+YM2thgzMzPVQSmt0sL3LtLsWmApBt/szuja3sA30CnT2+1QTAoHOz0/eu3fUGWQcPTBge/aQ9cVgaKY6IxCnlItRrxYk1Pa6z1yO6nQXSp7v7AP2xw4Ch8fH6s8X0wjAiLxF07lVqvVWFhYOFCxx4WjL5fLbXh/33OfSK9K+AkVVldXP9wuxXevnA6jdVRgMxjRt93rOd9JJZiRP0hvtyapNHjHpt+TvgJyY4m/+Is+2e23c73vtCbvk9VclZNGqVe718nAeyaIviFv/xr2QkytoN2rod3bHPS6gRPr3Dfkm9LomHxKCqLDvB3ktaFue4Ix5vEo9Q+j0Gu00Y/AAjLjLmJY8ZhQAjLjKmIU8ZjQi4tE9+Yb6Z1PVgoXjCjiMZFWZ/EHobxvjkkXp9RsNiOJx4ROYS9i3LxP+iwwWfAIoxh3cWhsARlxj5n9EbrTh6+XGBYpArpwNKLA7CW1wHChYEd50OgiDFIFdIGTs4f0KCRISGdnlIq9KkoEZMQMmjnkiFQmnIsyATup1+vfEZHcPhZIPb43nVCBFgFdeDUC73BkMdmslRiZNo4KRLN4xcDY/WcEfrCg4AvMW56VM8S+PXdVlbdbZPMfvKhRGBs1CGbrFszL/yntr4NvLaZOAAAAAElFTkSuQmCC"
    }, a350: function (e, t, n) {
        e.exports = n.p + "https://static.hwweb.online/584f/img/complex.2b83c227.gif"
    }, a38a: function (e, t, n) {
        var a = n("bffc");
        a.__esModule && (a = a.default), "string" == typeof a && (a = [[e.i, a, ""]]), a.locals && (e.exports = a.locals), (0, n("499e").default)("69e4cc71", a, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    }, a4af: function (e, t, n) {
        "use strict";
        n("9902")
    }, a510: function (e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAeCAYAAABNChwpAAAHg0lEQVRYR61Xa2hcxxU+Z+beu3v3LWml9cq2XrZsJ/RFSyi4yHbspsZxcNo4gpBSaocSKMW0tLGcNimYNi6pWkppQkrTH0oIISVOWpzEcQK1YzelIbS0hNLGtvyQZVuypNXuah+6r5k55d6VFq28fhQyPy67M3O+OfOd75xzLwIAPL45+6vPZvTWjd2h17rGRo/hYZD+/Cc9aBD4eE//jr+NO7s/uuYVnj41+X0cHATeO5WdBMD29Wk+s7Uv7GoIL0uEF3qGRz/+JJwYG+q/AxH2CAUPnzjvGKM50QFAMxczk1l8bFNmKwN+fPGgFhOrO9eFMWWyCBB8SAxG4iD/0PrzC3P/jzP5A33JMvCHCGAvAn6xaKvyWx/bNGerxCKOArkN9w90PocI314KzhDsL68x1Lq0HqnNk4WEf+KcXoyFxfjNHCnaWhcQfpMAvgaApr/3zIyXP3HOCSuABbwFVILf4tCm7DUAzDQDvaNdK27pNZKcIfrriOS0xj3/Z6ipEwTubNUAIjT8daFAvHfenj2bE03xAWgK9w9kxxCx+0a3ajWZfe/6EKbCLDg0boqKoatYs/2Ox+yyrYf9tWaUL7choks4NJA9DIgP3oxWzsDZ1hfCdWnNMDRVikdEPY5L7UqWZruCh29E+fIzEOh1HNrUeQAAnr4dgd3Zziube0Ox9qRnIUIQ37qgFIiZcghO3JTyxlMQ4If4+KbMVrUkC27lSJvJvMHPcZmJQ0D14pgqY+mVfwlYqvJbYYGEr+CBL7QkVcQsIEIgtFsNnaO7+1Oatz4D0aV7z06hc/jfHhOK9Fth+OsEQFxV23wR7kbE127HKBZC9/4NYeiIg0hERENKlapcTldQvnHahrJDQRbcajCkB3DoS+lOYMbfAaHzZgbtUTa/a0NYN3XUOVdOKioaUnGuqoGQDCyPvDdP22K6qho0ch02wQQo9y48uKUnbCn3KAFsvZEDPS18dkd/qIUzZP4ejkqm4oIv3V+o6KBULYpSkTo26hTGCrLtRpgIcMJkxs7AYmggexIQNy9uRgDqaYOpdWkW70/zaRJGb60U1QYiwUJBqs/ly7pfgOr/iQBQcy+O5mTH2Zwqj81Cxp9asuHU8PuTW4KJ7w2ks6mQcXJDO2tZ34F8TRsanKFfbKxiRRdSYbzxJgRtiaAi1sdsyddeo445o3Iq5mkAYEpFlfOz5J6ZJnl6RhWKjrvl1+/nJusWlZ92H0dsDEPV5jnb5elmNKYTjiBAH9zXtJwthRpCsmgTNmQuGpYNGD79kScvbQvY9B+ln61s44r7PWEBsGY+k9f/m5vjHYjgIYBiCIQIDBlpfSudMCIEFZEISheuhmxSKIhAKQIkAEYEejopp9tbvTuXMSgkkysSP7o6GzhQObR6DxIbWX5TKSF/Zcbw5ud5vZkQgKdxqKxdbSFjkPJtFEHh3LgJQkIMAep1IBKRU6vaXZ1zaF2OzUg9Yv748kjgQPVQ1xEg3NWM6tI8z+eLmvhPIcQPX2sBk0sYWptzu7JOC+cUVEOpwBqfCBeHz6UNS3J6MFPEz7TaMpUSWiIirzt8IWxvRp8c34X0i0x03gnP+EJp5oDPQqmqcwgr59jlRPQvU7Hyvu4c27DCTtQdkGCdvmaWn7mUVgOZSnzHqlIVHWYkop5qdvuF2NvVUrUDy091DTLAV5sdvjhXndcmohFRL1TzDnMMTQmN18qxkFBxBdMjIVUvTlWLX42acuXNcBHUQ1j+SdfvEPEBIGALWcSCfCUQgTGiISVUdY18HQQhExInAcjUeE0DPksE6GicsgsHkidwivsOErk1HND8+uJLJngiKAVwBC/t7/8NIuxb7mmlinPzFksu0FVZlXVFzJT+DU0CmJMSXY1Te80BnGacQgjg77cqFncuTxq+GAOGIqYqxqIUOLssG57DsR+s2cE4e/u6JSLKF/i8VBhlCBPpNtmpMSrHowIYUlwpmGCs1j+I4CoirFSE5bLfExTGc3k+qRRkOaNqa4uKNOu2Ssn78OLBnjCf12YBsKG7+cCeh5X8HJohDaZTKRXQi0h2QdDc8/+0pMEoqBuuQvHo503eomGSCIPMyBfZpCegozVJlq5Tk1c4stCz24KYXh7qf4sAdjYTTKWCOQKIxmNkqkRnwVl3L730wRh//uXXg/Asjkcf3l36xsYeETpzlLHyZKpUYVUGZMVi1LSSIsDbq4dHa81ofP/a7wDis00VSyCq4VUT+OkdcdWxIUkE7JmRV9w/vnO8oed/dfvdzncf+XoIERSfOVNUHx0tR5wrqxCxaYlWoPb1DJ9/NnBg7LHuXsaMC3UHiCwAOEUE7+rE3hnb8kSZof5CJGzexTlP/vmvH1wsFIsNr2SpZNK6Z2BjnxSyZLvWh6Lq7e38x1MJBNqOANsBYPPid4J/jqHcvhW/vHSx3ozGh/qPKKLzTMG7Mi5O9R4cs5cy8t7ISBjj6pBhhPZIKYSUsmPpOmd8WtM07rjOi1RmT9y9d2+DfaC1srZZMdjOENd0DY/ev5BhTYm/4eTJV39/D7CgbywvMlcY0Z5Ng9+qf+bdDvL/AIcUSz47cNKDAAAAAElFTkSuQmCC"
    }, a6d9: function (e, t, n) {
        e.exports = n.p + "img/draw-down.5579be17.svg"
    }, a9cf: function (e, t, n) {
        "use strict";
        n.r(t), n.d(t, "commonContracts", (function () {
            return a
        }));
        var a = {
            unitroller: {
                id: "unitroller",
                name: "unitroller",
                address: "0xBcA21874EEB5829fF79e97680542459aD5290afF",
                abi: []
            },
            comptroller: {
                id: "comptroller",
                name: "comptroller",
                address: "0xBcA21874EEB5829fF79e97680542459aD5290afF",
                abi: [{inputs: [], payable: !1, stateMutability: "nonpayable", type: "constructor"}, {
                    anonymous: !1,
                    inputs: [{indexed: !1, internalType: "string", name: "action", type: "string"}, {
                        indexed: !1,
                        internalType: "bool",
                        name: "pauseState",
                        type: "bool"
                    }],
                    name: "ActionPaused",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !1,
                        internalType: "contract CToken",
                        name: "cToken",
                        type: "address"
                    }, {indexed: !1, internalType: "string", name: "action", type: "string"}, {
                        indexed: !1,
                        internalType: "bool",
                        name: "pauseState",
                        type: "bool"
                    }],
                    name: "ActionPaused",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        internalType: "contract CToken",
                        name: "cToken",
                        type: "address"
                    }, {indexed: !1, internalType: "uint256", name: "newSpeed", type: "uint256"}],
                    name: "CompSpeedUpdated",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        internalType: "contract CToken",
                        name: "cToken",
                        type: "address"
                    }, {indexed: !0, internalType: "address", name: "borrower", type: "address"}, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "compDelta",
                        type: "uint256"
                    }, {indexed: !1, internalType: "uint256", name: "compBorrowIndex", type: "uint256"}],
                    name: "DistributedBorrowerComp",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        internalType: "contract CToken",
                        name: "cToken",
                        type: "address"
                    }, {indexed: !0, internalType: "address", name: "supplier", type: "address"}, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "compDelta",
                        type: "uint256"
                    }, {indexed: !1, internalType: "uint256", name: "compSupplyIndex", type: "uint256"}],
                    name: "DistributedSupplierComp",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{indexed: !1, internalType: "uint256", name: "error", type: "uint256"}, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "info",
                        type: "uint256"
                    }, {indexed: !1, internalType: "uint256", name: "detail", type: "uint256"}],
                    name: "Failure",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !1,
                        internalType: "contract CToken",
                        name: "cToken",
                        type: "address"
                    }, {indexed: !1, internalType: "bool", name: "isComped", type: "bool"}],
                    name: "MarketComped",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !1,
                        internalType: "contract CToken",
                        name: "cToken",
                        type: "address"
                    }, {indexed: !1, internalType: "address", name: "account", type: "address"}],
                    name: "MarketEntered",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !1,
                        internalType: "contract CToken",
                        name: "cToken",
                        type: "address"
                    }, {indexed: !1, internalType: "address", name: "account", type: "address"}],
                    name: "MarketExited",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{indexed: !1, internalType: "contract CToken", name: "cToken", type: "address"}],
                    name: "MarketListed",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !1,
                        internalType: "uint256",
                        name: "oldCloseFactorMantissa",
                        type: "uint256"
                    }, {indexed: !1, internalType: "uint256", name: "newCloseFactorMantissa", type: "uint256"}],
                    name: "NewCloseFactor",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !1,
                        internalType: "contract CToken",
                        name: "cToken",
                        type: "address"
                    }, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "oldCollateralFactorMantissa",
                        type: "uint256"
                    }, {indexed: !1, internalType: "uint256", name: "newCollateralFactorMantissa", type: "uint256"}],
                    name: "NewCollateralFactor",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{indexed: !1, internalType: "uint256", name: "oldCompRate", type: "uint256"}, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "newCompRate",
                        type: "uint256"
                    }],
                    name: "NewCompRate",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !1,
                        internalType: "uint256",
                        name: "oldLiquidationIncentiveMantissa",
                        type: "uint256"
                    }, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "newLiquidationIncentiveMantissa",
                        type: "uint256"
                    }],
                    name: "NewLiquidationIncentive",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !1,
                        internalType: "uint256",
                        name: "oldMaxAssets",
                        type: "uint256"
                    }, {indexed: !1, internalType: "uint256", name: "newMaxAssets", type: "uint256"}],
                    name: "NewMaxAssets",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !1,
                        internalType: "address",
                        name: "oldPauseGuardian",
                        type: "address"
                    }, {indexed: !1, internalType: "address", name: "newPauseGuardian", type: "address"}],
                    name: "NewPauseGuardian",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !1,
                        internalType: "contract PriceOracle",
                        name: "oldPriceOracle",
                        type: "address"
                    }, {indexed: !1, internalType: "contract PriceOracle", name: "newPriceOracle", type: "address"}],
                    name: "NewPriceOracle",
                    type: "event"
                }, {
                    constant: !1,
                    inputs: [{internalType: "address[]", name: "cTokens", type: "address[]"}],
                    name: "_addCompMarkets",
                    outputs: [],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{internalType: "contract Unitroller", name: "unitroller", type: "address"}],
                    name: "_become",
                    outputs: [],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "_borrowGuardianPaused",
                    outputs: [{internalType: "bool", name: "", type: "bool"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{internalType: "address", name: "cToken", type: "address"}],
                    name: "_dropCompMarket",
                    outputs: [],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "_mintGuardianPaused",
                    outputs: [{internalType: "bool", name: "", type: "bool"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{internalType: "contract CToken", name: "cToken", type: "address"}, {
                        internalType: "bool",
                        name: "state",
                        type: "bool"
                    }],
                    name: "_setBorrowPaused",
                    outputs: [{internalType: "bool", name: "", type: "bool"}],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{internalType: "uint256", name: "newCloseFactorMantissa", type: "uint256"}],
                    name: "_setCloseFactor",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{
                        internalType: "contract CToken",
                        name: "cToken",
                        type: "address"
                    }, {internalType: "uint256", name: "newCollateralFactorMantissa", type: "uint256"}],
                    name: "_setCollateralFactor",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{internalType: "uint256", name: "compRate_", type: "uint256"}],
                    name: "_setCompRate",
                    outputs: [],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{internalType: "uint256", name: "newLiquidationIncentiveMantissa", type: "uint256"}],
                    name: "_setLiquidationIncentive",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{internalType: "uint256", name: "newMaxAssets", type: "uint256"}],
                    name: "_setMaxAssets",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{internalType: "contract CToken", name: "cToken", type: "address"}, {
                        internalType: "bool",
                        name: "state",
                        type: "bool"
                    }],
                    name: "_setMintPaused",
                    outputs: [{internalType: "bool", name: "", type: "bool"}],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{internalType: "address", name: "newPauseGuardian", type: "address"}],
                    name: "_setPauseGuardian",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{internalType: "contract PriceOracle", name: "newOracle", type: "address"}],
                    name: "_setPriceOracle",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{internalType: "bool", name: "state", type: "bool"}],
                    name: "_setSeizePaused",
                    outputs: [{internalType: "bool", name: "", type: "bool"}],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{internalType: "bool", name: "state", type: "bool"}],
                    name: "_setTransferPaused",
                    outputs: [{internalType: "bool", name: "", type: "bool"}],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{internalType: "contract CToken", name: "cToken", type: "address"}],
                    name: "_supportMarket",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [{internalType: "address", name: "", type: "address"}, {
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    name: "accountAssets",
                    outputs: [{internalType: "contract CToken", name: "", type: "address"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "admin",
                    outputs: [{internalType: "address", name: "", type: "address"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    name: "allMarkets",
                    outputs: [{internalType: "contract CToken", name: "", type: "address"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{internalType: "address", name: "cToken", type: "address"}, {
                        internalType: "address",
                        name: "borrower",
                        type: "address"
                    }, {internalType: "uint256", name: "borrowAmount", type: "uint256"}],
                    name: "borrowAllowed",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [{internalType: "address", name: "", type: "address"}],
                    name: "borrowGuardianPaused",
                    outputs: [{internalType: "bool", name: "", type: "bool"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{internalType: "address", name: "cToken", type: "address"}, {
                        internalType: "address",
                        name: "borrower",
                        type: "address"
                    }, {internalType: "uint256", name: "borrowAmount", type: "uint256"}],
                    name: "borrowVerify",
                    outputs: [],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [{
                        internalType: "address",
                        name: "account",
                        type: "address"
                    }, {internalType: "contract CToken", name: "cToken", type: "address"}],
                    name: "checkMembership",
                    outputs: [{internalType: "bool", name: "", type: "bool"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{
                        internalType: "address",
                        name: "holder",
                        type: "address"
                    }, {internalType: "contract CToken[]", name: "cTokens", type: "address[]"}],
                    name: "claimComp",
                    outputs: [],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{
                        internalType: "address[]",
                        name: "holders",
                        type: "address[]"
                    }, {internalType: "contract CToken[]", name: "cTokens", type: "address[]"}, {
                        internalType: "bool",
                        name: "borrowers",
                        type: "bool"
                    }, {internalType: "bool", name: "suppliers", type: "bool"}],
                    name: "claimComp",
                    outputs: [],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{internalType: "address", name: "holder", type: "address"}],
                    name: "claimComp",
                    outputs: [],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "closeFactorMantissa",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [{internalType: "address", name: "", type: "address"}],
                    name: "compAccrued",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [{internalType: "address", name: "", type: "address"}],
                    name: "compBorrowState",
                    outputs: [{internalType: "uint224", name: "index", type: "uint224"}, {
                        internalType: "uint32",
                        name: "block",
                        type: "uint32"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [{internalType: "address", name: "", type: "address"}, {
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    name: "compBorrowerIndex",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "compClaimThreshold",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "compInitialIndex",
                    outputs: [{internalType: "uint224", name: "", type: "uint224"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "compRate",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [{internalType: "address", name: "", type: "address"}],
                    name: "compSpeeds",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [{internalType: "address", name: "", type: "address"}, {
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    name: "compSupplierIndex",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [{internalType: "address", name: "", type: "address"}],
                    name: "compSupplyState",
                    outputs: [{internalType: "uint224", name: "index", type: "uint224"}, {
                        internalType: "uint32",
                        name: "block",
                        type: "uint32"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "comptrollerImplementation",
                    outputs: [{internalType: "address", name: "", type: "address"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{internalType: "address[]", name: "cTokens", type: "address[]"}],
                    name: "enterMarkets",
                    outputs: [{internalType: "uint256[]", name: "", type: "uint256[]"}],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{internalType: "address", name: "cTokenAddress", type: "address"}],
                    name: "exitMarket",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [{internalType: "address", name: "account", type: "address"}],
                    name: "getAccountLiquidity",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}, {
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }, {internalType: "uint256", name: "", type: "uint256"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "getAllMarkets",
                    outputs: [{internalType: "contract CToken[]", name: "", type: "address[]"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [{internalType: "address", name: "account", type: "address"}],
                    name: "getAssetsIn",
                    outputs: [{internalType: "contract CToken[]", name: "", type: "address[]"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "getBlockNumber",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "getCompAddress",
                    outputs: [{internalType: "address", name: "", type: "address"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [{internalType: "address", name: "account", type: "address"}, {
                        internalType: "address",
                        name: "cTokenModify",
                        type: "address"
                    }, {internalType: "uint256", name: "redeemTokens", type: "uint256"}, {
                        internalType: "uint256",
                        name: "borrowAmount",
                        type: "uint256"
                    }],
                    name: "getHypotheticalAccountLiquidity",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}, {
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }, {internalType: "uint256", name: "", type: "uint256"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "isComptroller",
                    outputs: [{internalType: "bool", name: "", type: "bool"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{
                        internalType: "address",
                        name: "cTokenBorrowed",
                        type: "address"
                    }, {internalType: "address", name: "cTokenCollateral", type: "address"}, {
                        internalType: "address",
                        name: "liquidator",
                        type: "address"
                    }, {internalType: "address", name: "borrower", type: "address"}, {
                        internalType: "uint256",
                        name: "repayAmount",
                        type: "uint256"
                    }],
                    name: "liquidateBorrowAllowed",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{
                        internalType: "address",
                        name: "cTokenBorrowed",
                        type: "address"
                    }, {internalType: "address", name: "cTokenCollateral", type: "address"}, {
                        internalType: "address",
                        name: "liquidator",
                        type: "address"
                    }, {internalType: "address", name: "borrower", type: "address"}, {
                        internalType: "uint256",
                        name: "actualRepayAmount",
                        type: "uint256"
                    }, {internalType: "uint256", name: "seizeTokens", type: "uint256"}],
                    name: "liquidateBorrowVerify",
                    outputs: [],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [{
                        internalType: "address",
                        name: "cTokenBorrowed",
                        type: "address"
                    }, {internalType: "address", name: "cTokenCollateral", type: "address"}, {
                        internalType: "uint256",
                        name: "actualRepayAmount",
                        type: "uint256"
                    }],
                    name: "liquidateCalculateSeizeTokens",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}, {
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "liquidationIncentiveMantissa",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [{internalType: "address", name: "", type: "address"}],
                    name: "markets",
                    outputs: [{internalType: "bool", name: "isListed", type: "bool"}, {
                        internalType: "uint256",
                        name: "collateralFactorMantissa",
                        type: "uint256"
                    }, {internalType: "bool", name: "isComped", type: "bool"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "maxAssets",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{internalType: "address", name: "cToken", type: "address"}, {
                        internalType: "address",
                        name: "minter",
                        type: "address"
                    }, {internalType: "uint256", name: "mintAmount", type: "uint256"}],
                    name: "mintAllowed",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [{internalType: "address", name: "", type: "address"}],
                    name: "mintGuardianPaused",
                    outputs: [{internalType: "bool", name: "", type: "bool"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{internalType: "address", name: "cToken", type: "address"}, {
                        internalType: "address",
                        name: "minter",
                        type: "address"
                    }, {internalType: "uint256", name: "actualMintAmount", type: "uint256"}, {
                        internalType: "uint256",
                        name: "mintTokens",
                        type: "uint256"
                    }],
                    name: "mintVerify",
                    outputs: [],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "oracle",
                    outputs: [{internalType: "contract PriceOracle", name: "", type: "address"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "pauseGuardian",
                    outputs: [{internalType: "address", name: "", type: "address"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "pendingAdmin",
                    outputs: [{internalType: "address", name: "", type: "address"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "pendingComptrollerImplementation",
                    outputs: [{internalType: "address", name: "", type: "address"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{internalType: "address", name: "cToken", type: "address"}, {
                        internalType: "address",
                        name: "redeemer",
                        type: "address"
                    }, {internalType: "uint256", name: "redeemTokens", type: "uint256"}],
                    name: "redeemAllowed",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{internalType: "address", name: "cToken", type: "address"}, {
                        internalType: "address",
                        name: "redeemer",
                        type: "address"
                    }, {internalType: "uint256", name: "redeemAmount", type: "uint256"}, {
                        internalType: "uint256",
                        name: "redeemTokens",
                        type: "uint256"
                    }],
                    name: "redeemVerify",
                    outputs: [],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [],
                    name: "refreshCompSpeeds",
                    outputs: [],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{internalType: "address", name: "cToken", type: "address"}, {
                        internalType: "address",
                        name: "payer",
                        type: "address"
                    }, {internalType: "address", name: "borrower", type: "address"}, {
                        internalType: "uint256",
                        name: "repayAmount",
                        type: "uint256"
                    }],
                    name: "repayBorrowAllowed",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{internalType: "address", name: "cToken", type: "address"}, {
                        internalType: "address",
                        name: "payer",
                        type: "address"
                    }, {internalType: "address", name: "borrower", type: "address"}, {
                        internalType: "uint256",
                        name: "actualRepayAmount",
                        type: "uint256"
                    }, {internalType: "uint256", name: "borrowerIndex", type: "uint256"}],
                    name: "repayBorrowVerify",
                    outputs: [],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{
                        internalType: "address",
                        name: "cTokenCollateral",
                        type: "address"
                    }, {internalType: "address", name: "cTokenBorrowed", type: "address"}, {
                        internalType: "address",
                        name: "liquidator",
                        type: "address"
                    }, {internalType: "address", name: "borrower", type: "address"}, {
                        internalType: "uint256",
                        name: "seizeTokens",
                        type: "uint256"
                    }],
                    name: "seizeAllowed",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "seizeGuardianPaused",
                    outputs: [{internalType: "bool", name: "", type: "bool"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{
                        internalType: "address",
                        name: "cTokenCollateral",
                        type: "address"
                    }, {internalType: "address", name: "cTokenBorrowed", type: "address"}, {
                        internalType: "address",
                        name: "liquidator",
                        type: "address"
                    }, {internalType: "address", name: "borrower", type: "address"}, {
                        internalType: "uint256",
                        name: "seizeTokens",
                        type: "uint256"
                    }],
                    name: "seizeVerify",
                    outputs: [],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{internalType: "address", name: "cToken", type: "address"}, {
                        internalType: "address",
                        name: "src",
                        type: "address"
                    }, {internalType: "address", name: "dst", type: "address"}, {
                        internalType: "uint256",
                        name: "transferTokens",
                        type: "uint256"
                    }],
                    name: "transferAllowed",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "transferGuardianPaused",
                    outputs: [{internalType: "bool", name: "", type: "bool"}],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{internalType: "address", name: "cToken", type: "address"}, {
                        internalType: "address",
                        name: "src",
                        type: "address"
                    }, {internalType: "address", name: "dst", type: "address"}, {
                        internalType: "uint256",
                        name: "transferTokens",
                        type: "uint256"
                    }],
                    name: "transferVerify",
                    outputs: [],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }]
            },
            COMP: {id: "COMP", name: "COMP", address: "0xaEC09668944ac3312060bf4b2be7de371E16dA01", abiJson: []},
            priceOracle: {
                id: "priceOracle",
                name: "priceOracle",
                address: "0x279d2d88160a8b4684D57F15d39c5CC95e32D74D",
                abi: [{
                    inputs: [{
                        internalType: "contract OpenOraclePriceData",
                        name: "priceData_",
                        type: "address"
                    }, {internalType: "address", name: "reporter_", type: "address"}, {
                        internalType: "uint256",
                        name: "anchorToleranceMantissa_",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "anchorPeriod_",
                        type: "uint256"
                    }, {
                        components: [{
                            internalType: "address",
                            name: "cToken",
                            type: "address"
                        }, {internalType: "address", name: "underlying", type: "address"}, {
                            internalType: "bytes32",
                            name: "symbolHash",
                            type: "bytes32"
                        }, {
                            internalType: "uint256",
                            name: "baseUnit",
                            type: "uint256"
                        }, {
                            internalType: "enum UniswapConfig.PriceSource",
                            name: "priceSource",
                            type: "uint8"
                        }, {internalType: "uint256", name: "fixedPrice", type: "uint256"}, {
                            internalType: "address",
                            name: "uniswapMarket",
                            type: "address"
                        }, {internalType: "bool", name: "isUniswapReversed", type: "bool"}],
                        internalType: "struct UniswapConfig.TokenConfig[]",
                        name: "configs",
                        type: "tuple[]"
                    }], stateMutability: "nonpayable", type: "constructor"
                }, {
                    anonymous: !1,
                    inputs: [{indexed: !1, internalType: "string", name: "symbol", type: "string"}, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "anchorPrice",
                        type: "uint256"
                    }, {indexed: !1, internalType: "uint256", name: "oldTimestamp", type: "uint256"}, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "newTimestamp",
                        type: "uint256"
                    }],
                    name: "AnchorPriceUpdated",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{indexed: !1, internalType: "string", name: "symbol", type: "string"}, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "reporter",
                        type: "uint256"
                    }, {indexed: !1, internalType: "uint256", name: "anchor", type: "uint256"}],
                    name: "PriceGuarded",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{indexed: !1, internalType: "string", name: "symbol", type: "string"}, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "price",
                        type: "uint256"
                    }],
                    name: "PriceUpdated",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{indexed: !1, internalType: "address", name: "reporter", type: "address"}],
                    name: "ReporterInvalidated",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{indexed: !0, internalType: "bytes32", name: "symbolHash", type: "bytes32"}, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "oldTimestamp",
                        type: "uint256"
                    }, {indexed: !1, internalType: "uint256", name: "newTimestamp", type: "uint256"}, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "oldPrice",
                        type: "uint256"
                    }, {indexed: !1, internalType: "uint256", name: "newPrice", type: "uint256"}],
                    name: "UniswapWindowUpdated",
                    type: "event"
                }, {
                    inputs: [],
                    name: "anchorPeriod",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "ethBaseUnit",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "expScale",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{internalType: "uint256", name: "i", type: "uint256"}],
                    name: "getTokenConfig",
                    outputs: [{
                        components: [{
                            internalType: "address",
                            name: "cToken",
                            type: "address"
                        }, {internalType: "address", name: "underlying", type: "address"}, {
                            internalType: "bytes32",
                            name: "symbolHash",
                            type: "bytes32"
                        }, {
                            internalType: "uint256",
                            name: "baseUnit",
                            type: "uint256"
                        }, {
                            internalType: "enum UniswapConfig.PriceSource",
                            name: "priceSource",
                            type: "uint8"
                        }, {internalType: "uint256", name: "fixedPrice", type: "uint256"}, {
                            internalType: "address",
                            name: "uniswapMarket",
                            type: "address"
                        }, {internalType: "bool", name: "isUniswapReversed", type: "bool"}],
                        internalType: "struct UniswapConfig.TokenConfig",
                        name: "",
                        type: "tuple"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{internalType: "address", name: "cToken", type: "address"}],
                    name: "getTokenConfigByCToken",
                    outputs: [{
                        components: [{
                            internalType: "address",
                            name: "cToken",
                            type: "address"
                        }, {internalType: "address", name: "underlying", type: "address"}, {
                            internalType: "bytes32",
                            name: "symbolHash",
                            type: "bytes32"
                        }, {
                            internalType: "uint256",
                            name: "baseUnit",
                            type: "uint256"
                        }, {
                            internalType: "enum UniswapConfig.PriceSource",
                            name: "priceSource",
                            type: "uint8"
                        }, {internalType: "uint256", name: "fixedPrice", type: "uint256"}, {
                            internalType: "address",
                            name: "uniswapMarket",
                            type: "address"
                        }, {internalType: "bool", name: "isUniswapReversed", type: "bool"}],
                        internalType: "struct UniswapConfig.TokenConfig",
                        name: "",
                        type: "tuple"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{internalType: "string", name: "symbol", type: "string"}],
                    name: "getTokenConfigBySymbol",
                    outputs: [{
                        components: [{
                            internalType: "address",
                            name: "cToken",
                            type: "address"
                        }, {internalType: "address", name: "underlying", type: "address"}, {
                            internalType: "bytes32",
                            name: "symbolHash",
                            type: "bytes32"
                        }, {
                            internalType: "uint256",
                            name: "baseUnit",
                            type: "uint256"
                        }, {
                            internalType: "enum UniswapConfig.PriceSource",
                            name: "priceSource",
                            type: "uint8"
                        }, {internalType: "uint256", name: "fixedPrice", type: "uint256"}, {
                            internalType: "address",
                            name: "uniswapMarket",
                            type: "address"
                        }, {internalType: "bool", name: "isUniswapReversed", type: "bool"}],
                        internalType: "struct UniswapConfig.TokenConfig",
                        name: "",
                        type: "tuple"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{internalType: "bytes32", name: "symbolHash", type: "bytes32"}],
                    name: "getTokenConfigBySymbolHash",
                    outputs: [{
                        components: [{
                            internalType: "address",
                            name: "cToken",
                            type: "address"
                        }, {internalType: "address", name: "underlying", type: "address"}, {
                            internalType: "bytes32",
                            name: "symbolHash",
                            type: "bytes32"
                        }, {
                            internalType: "uint256",
                            name: "baseUnit",
                            type: "uint256"
                        }, {
                            internalType: "enum UniswapConfig.PriceSource",
                            name: "priceSource",
                            type: "uint8"
                        }, {internalType: "uint256", name: "fixedPrice", type: "uint256"}, {
                            internalType: "address",
                            name: "uniswapMarket",
                            type: "address"
                        }, {internalType: "bool", name: "isUniswapReversed", type: "bool"}],
                        internalType: "struct UniswapConfig.TokenConfig",
                        name: "",
                        type: "tuple"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{internalType: "address", name: "underlying", type: "address"}],
                    name: "getTokenConfigByUnderlying",
                    outputs: [{
                        components: [{
                            internalType: "address",
                            name: "cToken",
                            type: "address"
                        }, {internalType: "address", name: "underlying", type: "address"}, {
                            internalType: "bytes32",
                            name: "symbolHash",
                            type: "bytes32"
                        }, {
                            internalType: "uint256",
                            name: "baseUnit",
                            type: "uint256"
                        }, {
                            internalType: "enum UniswapConfig.PriceSource",
                            name: "priceSource",
                            type: "uint8"
                        }, {internalType: "uint256", name: "fixedPrice", type: "uint256"}, {
                            internalType: "address",
                            name: "uniswapMarket",
                            type: "address"
                        }, {internalType: "bool", name: "isUniswapReversed", type: "bool"}],
                        internalType: "struct UniswapConfig.TokenConfig",
                        name: "",
                        type: "tuple"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{internalType: "address", name: "cToken", type: "address"}],
                    name: "getUnderlyingPrice",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{internalType: "bytes", name: "message", type: "bytes"}, {
                        internalType: "bytes",
                        name: "signature",
                        type: "bytes"
                    }], name: "invalidateReporter", outputs: [], stateMutability: "nonpayable", type: "function"
                }, {
                    inputs: [],
                    name: "lowerBoundAnchorRatio",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "maxTokens",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{internalType: "bytes32", name: "", type: "bytes32"}],
                    name: "newObservations",
                    outputs: [{internalType: "uint256", name: "timestamp", type: "uint256"}, {
                        internalType: "uint256",
                        name: "acc",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "numTokens",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{internalType: "bytes32", name: "", type: "bytes32"}],
                    name: "oldObservations",
                    outputs: [{internalType: "uint256", name: "timestamp", type: "uint256"}, {
                        internalType: "uint256",
                        name: "acc",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{internalType: "bytes[]", name: "messages", type: "bytes[]"}, {
                        internalType: "bytes[]",
                        name: "signatures",
                        type: "bytes[]"
                    }, {internalType: "string[]", name: "symbols", type: "string[]"}],
                    name: "postPrices",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{internalType: "string", name: "symbol", type: "string"}],
                    name: "price",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "priceData",
                    outputs: [{internalType: "contract OpenOraclePriceData", name: "", type: "address"}],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{internalType: "bytes32", name: "", type: "bytes32"}],
                    name: "prices",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "reporter",
                    outputs: [{internalType: "address", name: "", type: "address"}],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "reporterInvalidated",
                    outputs: [{internalType: "bool", name: "", type: "bool"}],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{internalType: "bytes", name: "message", type: "bytes"}, {
                        internalType: "bytes",
                        name: "signature",
                        type: "bytes"
                    }],
                    name: "source",
                    outputs: [{internalType: "address", name: "", type: "address"}],
                    stateMutability: "pure",
                    type: "function"
                }, {
                    inputs: [],
                    name: "upperBoundAnchorRatio",
                    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
                    stateMutability: "view",
                    type: "function"
                }]
            }
        }
    }, acdd: function (e, t, n) {
        (t = n("24fb")(!1)).push([e.i, ".bar_wraper[data-v-6574ca2b]{position:fixed;left:0;width:100%;height:0;overflow-x:hidden;overflow-y:auto;background-color:var(--white);transition:height .3s linear}.bar_wraper li[data-v-6574ca2b]{text-align:left;margin-top:5px}.bar_wraper li a[data-v-6574ca2b]{display:flex;justify-content:flex-start;align-items:center;width:200px;padding:10px 20px;border-radius:25px;text-decoration:none;color:var(--grey);font-size:16px;font-weight:600}.bar_wraper li a img[data-v-6574ca2b]{height:20px;margin-right:20px}.bar_wraper li a[data-v-6574ca2b]:focus,.bar_wraper li a[data-v-6574ca2b]:hover{color:var(--white);background:linear-gradient(180deg,#6c5dd3,#9f5dd3)}.bar_effect[data-v-6574ca2b]{height:100%;border-bottom:solid 1px var(--light-grey)}", ""]), e.exports = t
    }, ae70: function (e, t, n) {
        var a = n("282e");
        a.__esModule && (a = a.default), "string" == typeof a && (a = [[e.i, a, ""]]), a.locals && (e.exports = a.locals), (0, n("499e").default)("350b6cf4", a, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    }, b26b: function (e, t, n) {
        "use strict";
        n.r(t), n.d(t, "vaultPair", (function () {
            return r
        }));
        var a = n("d028"), i = n("ce62"), s = n("3e3c"), r = [{
            token1: "USDT",
            token2: "YFO",
            address1: a.USDT.address,
            address2: a.YFO.address,
            lpAddress: i["USDT-YFO-Quick"],
            vaultAddress: s["USDT-YFO-Strat"][0],
            stratAddress: s["USDT-YFO-Strat"][0],
            farmAddress: s["USDT-YFO-Strat"][0],
            stratPid: s["USDT-YFO-Strat"][1],
            totalSupply: s["USDT-YFO-Strat"][2],
            dailyOut: s["USDT-YFO-Strat"][3],
            staked: "--",
            earned: "--",
            tvl: "--",
            apy: "--",
            start: new Date("2021/07/31 20:00:00").getTime(),
            end: new Date("2022/07/31 20:00:00").getTime()
        }, {
            token1: "BNB",
            token2: "OBS",
            address1: a.USDT.address,
            address2: a.YFO.address,
            lpAddress: i["USDT-YFO-Quick"],
            vaultAddress: s["USDT-YFO-Strat"][0],
            stratAddress: s["USDT-YFO-Strat"][0],
            farmAddress: s["USDT-YFO-Strat"][0],
            stratPid: s["USDT-YFO-Strat"][1],
            totalSupply: s["USDT-YFO-Strat"][2],
            dailyOut: s["USDT-YFO-Strat"][3],
            staked: "--",
            earned: "--",
            tvl: "--",
            apy: "--",
            start: new Date("2021/07/31 20:00:00").getTime(),
            end: new Date("2022/07/31 20:00:00").getTime()
        }]
    }, bb33: function (e, t, n) {
        "use strict";
        n.r(t), n.d(t, "params", (function () {
            return a
        }));
        var a = {
            community: "#",
            telegram: "#",
            discard: "#",
            github: "#",
            twitter: "#",
            medium: "#",
            $PLink: "#",
            infoUrl: "https://pancakeswap.info/",
            chainId: 56,
            cakeSwapUrl: "https://pancakeswap.finance",
            mdexSwapUrl: "https://bsc.mdex.com/#/",
            uniSwapUrl: "https://app.uniswap.org",
            etherscanUrl: "https://bscscan.com",
            defaultProvider: "https://bsc-dataseed.binance.org",
            swap: {
                1: "https://app.uniswap.org",
                56: {Pancake: "https://pancakeswap.finance", Mdex: "https://bsc.mdex.com/#"}
            },
            etherscan: {1: "https://etherscan.io", 56: "https://bscscan.com"},
            chains: {
                ETH: {
                    chainId: "0x1",
                    chainName: "Ethereum Mainet",
                    tokenName: "ETH",
                    symbol: "ETH",
                    decimals: "18",
                    rpcUrls: "https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
                    blockExplorerUrls: "https://etherscan.io",
                    iconUrls: "https://cn.etherscan.com/images/ethereum-icon.png"
                },
                BSC: {
                    chainId: "0x38",
                    chainName: "BSC Mainet",
                    tokenName: "Biannce",
                    symbol: "BNB",
                    decimals: "18",
                    rpcUrls: "https://bsc-dataseed.binance.org",
                    blockExplorerUrls: "https://bscscan.com",
                    iconUrls: "https://bscscan.com/images/svg/brands/bnb.svg?v=1.3"
                }
            }
        }
    }, bb5d: function (e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAsCAYAAAANUxr1AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAN+SURBVHgB3VhNTtwwFH7JzAY2pTdId911EGKNOUHpCQoSv6vODRhOwGwQv1LDqsvSExAOAJ2eoDkCC4RYANPvG3mox3Fw4pmiik+KktjP9ufPznvPiSQA7XZ75u7urtXv9z/gtYVLsRzvvSiKsoeHh18nJyeZBCCqYrS5uZlgEBXH8YAABm5h4JkKTTNcPdhfoG3v4OAg9zUoECqZfSKTQe5TcUBofX19CUYLUm/2k0ImWsWjo6OzaGNjo4uCL1IfOTt7fHzs4X7RbDbf3N/fczIKF5VNpD5SEur7rMD+GoNwYF7Z1NTURbfbvX6uDfedXnYlxsb3oYxQLsbsj4+PezIBbG1tLfhULBDC7N/6Zj8paBV/m2WxbfRSZAiXG4jlP0NTxgAkV5B823AVGRxgur+/fyqBCFYIZDogco5HZfgthQ8hhV/rSCCCCIHMMpUpqwfB7dXVVSUvRQhkPvtsGo3GtgQgdMmUz4D7SgIQqpDXNYTGwyBCOoz4kEkAQgnt+GygYioBCCIED5uBVEfKyXSQSgT5omA/BFI78DkropdG7ysGZAUyXgXLMJanRhaQ4pbKBPF6YpmOY3SQSv7mNUxFc9xPmY5KAGoT0jnMV1zKUd3SidcS8qwcz4tVThomai3Z2tpaC5v2p1RLRxPaso3UQGVCVAYzPq/jgWnLNmxbtU1shwGey1yGTDVCwgHbcIldda6xYjQYIXRzc1OQmOc2Ge+wqFzpCA+k5jsPkVyyzCxExrdgNwTpjzImkI4UUhY7jWGMJCH782w7pAxKJSwo80XvK2URzJo89N3e3l4P9wfveOeafxoaHh4ezsqEgS9wF2MlRlHO+BfrY89I7IHhEvbNrvwj8PjOMcwyBuTB2IbRIGG32gY5tzJop/pdilsgxyq848OTH8LAjNy5ZTg4WY5zihgCfbS1Uy2Q4aSfeJg1egZUKnH0GaTWMNSI27sX+hzx1KzQbFNH49pqGaoouw59neGDmrUnWPpLDzFoGT6JR5nEUf2sWs+poiPDSlk20JASXF1d9ebn53/gke7AXneWtefm5qLLy8vMrKAqGPQbCL93kDmbnp5e3NvbKz0kVPrpWUUtPWCQKrUJEXoZSGrZVa//ss04yqnKStXfPJUJDeFRa4SgVFTFRENqwrO3hmS8e6UMtRUyYasVqoqJ2gqZMNVich+qiok/Kf7xGB1fb0QAAAAASUVORK5CYII="
    }, bb89: function (e) {
        e.exports = JSON.parse('{"YFO-Bank-2":["0xe8277EFaEB7cCa866B56172d5B9Ce2A93070C5AB",2000,66.67],"YFO-Bank":["0x1ABBD25a953D0870417c0931309742D67DDb19DB",1000,3],"BNB-Bank":["0x146E6A907b7C5DB1B3EF1d159e9A0Ea2B6301DDD",1000,1.5],"WBNB-Bank":["0x146E6A907b7C5DB1B3EF1d159e9A0Ea2B6301DDD",1000,1.5],"BUSD-Bank":["0xE1450FE2bC5eb731dC807BD6Cfa2694811d54F88",1000,1.5],"USDT-Bank":["0x978939B87Ed7B9232fFc2E0fE50B684FEE659608",1000,1.5],"ETH-Bank":["0x3af9fA4d96647dC8f89a30Ed390Dd08A94f03878",1000,1.5]}')
    }, be42: function (e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAHYElEQVRYhZWXeYxXVxXHP+e9N79ZmRU6dEA7RZBapqC2SJNKi1FbidAGm6qxFrVF0tjSxCXUIGm0+geQWCKkLU2xCdG0hUSxU9PFJaGhG1JjsVVqBZlacFiGYWaY6czw+717zL33bUNHEm9y83vv/s4753v2c2XxT8cpLqMQqxAbqCgYI+7MKK2xcqNRFsYqC1S5RJWm5L9Bo/KOUQ4YZb9Rug30GwMGQRXU8jb+t7giLrQ89XxgDcKXA6UBwbIkRjDYZwhgCuhMkGuMZzeM4UlgK/DXC4kILghA2CiiB4KAVYHQEAQQWADJDmTiu4imZw0irBLhALDx/wegfAjYHwprQ8dQHWFQFIxOAJEBSbFn57pWhD+B4/l+AM4/yU7WFSLsC4SrwlQgBRCJ2SUFkb4XdpEu+V0oyj7Lm/Npq0KwOwod0xmBsDcUbTtfM/cb6ARNU7NLwk1SayXPqTksDUKbCHtRZsY2IJMdRKHitvfv74KAJuvrMNDJ/UxiiaAIIqFJ3JQJJgeb8GlCeN5nmt+Bi3Rv/g2RcHmYMAsL2mTbMnTgEkE+XhyTlMYL1omWyzHZ98sD2JC54XNbxuxTpypHfK5meZ9vxxJXGwZGoW9YORcLgQhlhXNla0WhtU6oKXm6yiR83Jnxpo8NlwI9kdVG4b7MEIGiKo7KmU9tsVD6R4QTZ5XONuHTc0PmdwiNtbYWKCeH4NUeeOlfypGTcFET1JaUcxWhuLK48Ba/T5HbZfmDY83AKaNEJqlYsRHnn7SC9ZxWWuuFb1wdccuVAe1TJs/pt04oj7ykPLhXnaYdzcK52FfAOKmw+TMVVZkWBaLLFYnSlLEgXEFRwRqid0hZMDPggZsjZk2VySUn67J2YfMXhBXzldt+YZzF2uoFk1jSKZ8/Rwa90brgOuOlZqXVEtjgsQy6OgJ23lE1QdCTrxn++Lbh6IAPuUtahc93Ccu7PMBrZwtv/iBk7v3GxcyUahIQXrFKxkmuiwJhnoemiZN8kAyNG0qRMDgKh04ps6cJbx1X7t4V82qPoaYK52OLfY8aHnlRWNol/HJlSGsdPP2GUq7YQiUMjsGUGoiZmBEC8yyAD6jkVcsyPPOe0lwvnBmBo2cMdz5R5quLQh57OebgcfjoDKH3LNREwnjFfiPUluDZ15WvxDGfnB3wk+eM5xlCfTWcGoLWRt9hU3eA2sJHk2Q5rZw6qyz5cMiOlSVu+XjI2XHoH4H7fxszNApXdAiH+3yd2HVHyPZbQ/pGlL5hWNAJ+/4NP3zGUB3B2Ahsukl45dsBXR0wOFhQ36/GrBlZEJbR7IuEDSuqaG8UvvfZiG9eE9I7qLQ3Qms9vH1CaayF3asj5l0sLJkjPP71yAF9px86mqClFoYGYOMXA+5aLMyZBi9/J6CmGoZHJ4IIFAbTZlRfEk4MwR8Omoxg/dKINZ8K6elX/t6rtDUIz95V5YSna1mXsHt1yHgMh/6j9A3Az24NWPuZnGbLHqVcxsVOYSoZst3waGJ96kpCxcCanefY9ec4o1p3Q8TXrg5pqRO674yY1ebP+0ZgtOyfb7hM2L0qpEZg85cC7lmSC//ur5X1jyulaiglI1CC4ZjcvG3050a53Va/OEmE/vfg2IDyo2VV3LYozBjZWLBucMKHYfHmCjNbhN/fndMcOwszCoXqnl8pW7uVKe2+68axL9+uIRl5LDDKCzaK48QK1gKNNTC9SVj3VMVFfrpS4ceHYNm2Mu+eUfb8U1nxaOy+s6so/Fu7DFufVpqne9NbJc3EEHghqKh0W7maNAnXNGJbPIQZLcK67gqPvpiDODYAyx6u8LdeZe504SPt8Ju/KMu3xZk77Fr9hPLwM0rbdFxGZANpLr0iot3hnKXrx1S51Cgf0wSAzWCrkfVXTZWw+4BhelNAbZWwckeZf5xU5kwLXJ2330xrgFcOKW+eEK78oPDj55SHnjdMvVgohT73fbPzE3Ki6A5gpyzdMmb/7FR8O7ZmssJTQhsTw2MwUhZnRlsZ2+px7dj70atjG03vEDTXiaslzXW4dm155QNI0oz82SwrM6j4P3uMstHOAina1B3lWKiuEuqqcFXPxoHt68U5Mk6+mdoAI+NKS50dWiQ7d3Sa3w8UNolwJB1ykiXfN8rB4pBqEktYRnZmrC/5M1Ng7A3grWGXbTx2xnCWKbT0LPWVgwL3pq82CKkkZo+V6+0tJ53XNGHsAjQVrH46SkGg6XkOyA00BaGab1uMr58wztuId9szPGqUxcbI6TRljOYTrLMGHlAWTMm4lu2Ca7J3H3ynVVkMHC2O7oEUx2z/3RsGFsXKa2nqpBrGmkdxUdjEnQPX3Er7VVlkeXOeVf7X1eywwsLYsMlHrPhNccj0Z+8DUBCepPQmhU8IHJ5M0IXvhnCvUVlgDNtjZTi2eV9knsRK5iYHyqk2bJTtKAvQPOAmW3LtA/n13LrAMrRp5gLR5azXMvbX85tUuSq5nncapdEomlzP31Xldec65Sl7PffVNYkRy6sYmXYB/wUB0g73oo/QgAAAAABJRU5ErkJggg=="
    }, bef1: function (e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJ+SURBVHgBvVmLkZswEF2nAkogFRwdHJ2EDkIHpgPcAVdCUgFOBXYqUFKBr4N30pw8o1tWnwXsN7PjsT5vn1YgacWBVgJAa38aa6/+t/Lm8G7tn7e/1s6Hw+FMj4YVVVk7WrtBD2NtslbT3vDCRuyHaTehlugn1kUsB2Otoy1AOmo3H4nOWmOtCvpVvszVvSE9wJG08A7mxMj7UFAhZ+f7Srio+HwHKWI9bYTlGCIi51KCMRK1mnaC44IczTHXsYMc/rrA6RcUtK8hz1RPilEVR04rMOHTPUqV1HgSRlNTIdYIDETyt3yUGnEMpMBagb5vL/ivwgYTqzQZwhafy5BqAc9wGsQCJFR2CaIjVoJ0UbyF0VhWyCQdNiAj0G0OfEbab7auZW1/JXh+0INgj2PuiPabFTdO4Asr/JPgadn/7wcFKI8z9+cE1qzwSnG802PBfb+QMO/RTRvxA0QOMwqOVv45DHFTrV9YvlBaHAtEftWzKMgTDNiGNsO/EFg8xQGJW25mrMOc4BWn2LDChnYElttoap1tWNuLe4v5m7OrQAGpGeK+/zuBfN17pQyggG3O9/Vzgpr7vopbHTLPIbahS/AutrpYRTL3wHoMCU6+z5uwcohWbhfoBj8jv7wY1m8KKyuBWJXB8c7KvkfBf80bnYSR1wonqwRCPs1PUkPpPGbw/KQp7hNybvDstLPLdTwJnQzwlMT9VEowQ0b2NFLAHbstu2hIqkj479HsSAHP1yN+eTRDeRl1Jz4hjtLrtwnp9LRsWhMiU9dmW7DLbdldpHuo37Af3Mzop1Qh1EAPF7FBK6wkFYyJbekzDXVpa+0t/AzhzJ013XHuuvYzxAfE1G3i8GWaxAAAAABJRU5ErkJggg=="
    }, bffc: function (e, t, n) {
        (t = n("24fb")(!1)).push([e.i, ".d-overlay[data-v-0a9b7ee4]{z-index:300000;width:100%;height:100%;top:0;left:0;opacity:0;background:rgba(0,0,0,.5);transition:all .3s}.d-overlay[data-v-0a9b7ee4],.d-overlay .d-modal[data-v-0a9b7ee4]{position:fixed;visibility:hidden}.d-overlay .d-modal[data-v-0a9b7ee4]{z-index:3000;top:50%;left:50%;width:80%;min-width:150px;max-width:320px;height:auto;border-radius:10px;-webkit-backface-visibility:hidden;backface-visibility:hidden;transform:translateX(-50%) translateY(-50%)}.d-overlay .d-modal .d-content[data-v-0a9b7ee4]{position:relative;background-color:var(--white);border-radius:10px;margin:0 auto}.d-overlay .d-modal .d-content .modal-header[data-v-0a9b7ee4]{position:relative;width:100%;border-radius:10px 10px 0 0}.d-overlay .d-modal .d-content .place-center[data-v-0a9b7ee4]{text-align:center}.d-overlay .d-modal .d-content .place-left[data-v-0a9b7ee4]{text-align:left}.d-overlay .d-modal .d-content .place-right[data-v-0a9b7ee4]{text-align:right}.d-overlay .d-modal .d-content .bottom-border[data-v-0a9b7ee4]{border-bottom:1px solid #b4b4b4}.d-overlay .d-modal .d-content .modal-body[data-v-0a9b7ee4]{width:100%;height:auto}.d-overlay .d-modal .d-content .modal-body .modal_btn[data-v-0a9b7ee4]{width:100%;padding:20px 10px}.d-overlay .d-modal .d-content .modal-body .modal_btn button[data-v-0a9b7ee4]{width:45%;min-width:80px;padding:10px;border-radius:10px;overflow:hidden}.d-overlay .d-effect .d-content[data-v-0a9b7ee4]{opacity:0;transform:scale(.7);-webkit-transform:scale(.7);-moz-transform:scale(.7);-ms-transform:scale(.7);transition:all .3s}.d-overlay .d-show[data-v-0a9b7ee4]{visibility:visible}.d-overlay .d-show .d-content[data-v-0a9b7ee4]{opacity:1;transform:scale(1);-webkit-transform:scale(1);-moz-transform:scale(1);-ms-transform:scale(1)}.overlay-effect[data-v-0a9b7ee4]{opacity:1;visibility:visible}", ""]), e.exports = t
    }, c7ac: function (e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsSAAALEgHS3X78AAACwUlEQVRYhbVXQWsTQRh9s12wVbBbwZtNK+YiCiY/QKjXguDFm6g59lR79KQ9ebJSKXioYAQRb7Z/wPYfuEXi1aiQ9CAYrEKl7HwyM8nu7OxusjOJgWGZj828973vzew3DCV/1NmoARQAkZhBPkk8OZIYB0jMeY9deBKWWbmQAHW3FgG+CtASiNcUkDbImOfH2iC+D/BNNr+ZSyhDgLpbAYBHAD1Qi2oZp7O0JbQD8Aabf9ErJNAH3wP6GbsB5cdkuaIewG+wysswQ0CB0x5A5cHdyAgSdVZptgWup+X/TGUeaX+IEJdhMuBiBCD+PqUAdZ8vyewnKXkie+Kd1M7hDbbwttlXgN+bPLimoHxGWkyO1USBzsbP9B7X3T8JAxa9Qxd96jytybrYLjoVAOdXlIA/toGTb8Y7Iw8rMWreSHAqiE1fAabOqTFzNYe0KfkgFumxmg/wRcmMDLPI2BAlvGn9BHH0CkERcKotGQTMb0Sh+/W1Zv2xzJangNV5QbIEWkYW7jcVcNwhvu0fNPYavun0HMkL1vdtXi72ANecbndS+v0Dobz7C01oC66eXgKsfXhgjLzY8WdNgD/GvtdARpwrvnOjcdwCDh+q+d8vTgYEqOfHcrqc6acuA94McHII8CMXDxx4smczJaYc2c35mevA3F1g9jZwdtnRA5FRApsF5Bh44EjzgE0pZAkodGL/+4MC9U4Dv3YdP8sUqn7g+8pH+9Z7rA4Z8u5wKZxTHRHx16XYp2IF27N0TLTpcVPKm/ISMWzvumU5rBtajwmwynYPiNZGs58YoTVW/dTOXky+3rkP8Ff/JfPEO01WbTUGmJ5OgC28EaVoyMvDOEDF4Os6eIaAIvGuCeJ15YvB98EWKBPbAajOqq3HGTwzkCpJ+2YAoluqb+TX4gY2uTmJuLjShTnXrwMQCWPvD+qd+QH4BwZCekpgXFWFAAAAAElFTkSuQmCC"
    }, c7b6: function (e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAsCAYAAAANUxr1AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJJSURBVHgBzVeLccIwDFU6Ad0gG8AGzQbtBmWDsgF0AkYonYBukDABdAKzAWygSrVzTYzjj+JwfXe+QKLP07PsOAUIgIgzuizMmNOozKMTjQNfi6JoQIAixogIlCbpvENkFuHaQJ/kOeRQOJK7qi8hD84QULEwJF7o8gRp1edCA4YkEfwqiMyW/qwgHWcT7NtcW2XbwkpIx44JYYThFXQVbfKGqrn6HEzfMbEK+o3vxRChM3Sqp+QnyABKVUFIRbzF3fqHVbST3yhEakRtBRlJ9fI/wD/DKELcEzRqGhejOP9ewhjYc5jgt8ZhrBPi9POjgBCrgGFUkbGyEKoxjDoyVg+iVRZJ/EqhHlNjSZv6GmEj2s+khGJ27gYEkBJ6j7D5BAkkTW38Np6G3iTEGb/KOsGWnRV3Mb+rxBjjV1lO5Fplk0FMCPV77IOG6ih+pLFHfSQWB07qIdRnmBrDUKhPjWn5MYEQPV7g35s9Bmy7CMSUEUKtTAqZLqkyhZCdZDbgqFCOeiDmzDbkprbfSwuHIzdpCXLwAqgc9+1cJyZ0sJ0djs8wHq8R906/1ePtnPemDfVyHgtlxeSeVJbNsp1Hu4/2MDFQ71duwvRn5ahoCxOBYzvyLW2j2mGkMGJzSyDC03QMTWfXWKEb0V8RHjJv6N7H1GDRAVLDjn4ivldNOKYJsMNhpHxzDanC4KaOP3ejPnwpSWUBVZig7DQgUSurKh5iQbUmU8VDKqTWtKp4iPnUmlYVD6mQWtOq4iFmq3U/VTykWrWyqPIDKb60C4BIcr8AAAAASUVORK5CYII="
    }, ce62: function (e) {
        e.exports = JSON.parse('{"BNB-OBC":"0xEb8942B9eBb98ab14e82551A5154c83AAF9330bd","OBC-BNB":"0xEb8942B9eBb98ab14e82551A5154c83AAF9330bd","BUSD-OBC":"0x3Ff034678AD3AF3Df69D56F015013CD202fE0bf6","OBC-BUSD":"0x3Ff034678AD3AF3Df69D56F015013CD202fE0bf6","YFO-OBC":"0x5c7d4c71Ae3A37AeD89f89EBD01bcc2af447E756","OBC-YFO":"0x5c7d4c71Ae3A37AeD89f89EBD01bcc2af447E756","YFO-BNB":"0x462cCea7c669A304a5bFcD1E35A14Ba3B6f5b3c4","BNB-YFO":"0x462cCea7c669A304a5bFcD1E35A14Ba3B6f5b3c4","ETH-OBC":"0xb31354c9f6eE1CE7BF04406F324cD462474AF43C","OBC-ETH":"0xb31354c9f6eE1CE7BF04406F324cD462474AF43C","BTCB-OBC":"0xcd0CD94BE45d007d9DA0Be801928D6A2f54066dE","OBC-BTCB":"0xcd0CD94BE45d007d9DA0Be801928D6A2f54066dE","BTC-OBC":"0xcd0CD94BE45d007d9DA0Be801928D6A2f54066dE","OBC-BTC":"0xcd0CD94BE45d007d9DA0Be801928D6A2f54066dE","BNB-OBS":"0xb414c6eac7dde63e76630c43a0cfe0d7376f1d88","OBS-BNB":"0xb414c6eac7dde63e76630c43a0cfe0d7376f1d88","BUSD-OBS":"0x02dd3092545253f5b80a7c8c1078248fc0d0d906","OBS-BUSD":"0x02dd3092545253f5b80a7c8c1078248fc0d0d906","YFO-OBS":"0x4cd2be67c3e62c2a23e8468a2289f0f25b38aba0","OBS-YFO":"0x4cd2be67c3e62c2a23e8468a2289f0f25b38aba0","BTCB-USDT":"0x03fc20BdaFDAC6b2aE8f7F5f885f0819C2b968f0","USDT-BTCB":"0x03fc20BdaFDAC6b2aE8f7F5f885f0819C2b968f0","BTC-USDT":"0x03fc20BdaFDAC6b2aE8f7F5f885f0819C2b968f0","USDT-BTC":"0x03fc20BdaFDAC6b2aE8f7F5f885f0819C2b968f0","ETH-USDT":"0xe7cc44de50b54906a9c1c48240650be2766481fc","USDT-ETH":"0xe7cc44de50b54906a9c1c48240650be2766481fc","BUSD-USDT":"0xe9e7cea3dedca5984780bafc599bd69add087d56","USDT-BUSD":"0xe9e7cea3dedca5984780bafc599bd69add087d56","BNB-USDT":"0x16b9a82891338f9bA80E2D6970FddA79D1eb0daE","USDT-BNB":"0x16b9a82891338f9bA80E2D6970FddA79D1eb0daE"}')
    }, cf49: function (e, t, n) {
        (t = n("24fb")(!1)).push([e.i, ".li_cover[data-v-536815a6]{overflow-y:auto}.li_cover li[data-v-536815a6]{text-align:left;margin:10px 0}.li_cover li a[data-v-536815a6]{display:flex;justify-content:flex-start;align-items:center;padding:12px 20px;border-radius:25px;text-decoration:none;color:var(--grey);font-size:16px;font-weight:600}.li_cover li a img[data-v-536815a6]{height:20px;margin-right:20px}.li_cover li a[data-v-536815a6]:focus,.li_cover li a[data-v-536815a6]:hover{transition:all .3s;transform:translateY(-1px)}.li_cover[data-v-536815a6]::-webkit-scrollbar{width:8px;height:12px;background-color:#fff}.li_cover[data-v-536815a6]::-webkit-scrollbar-thumb{display:block;min-height:12px;min-width:8px;border-radius:6px;background-color:#d9d9d9}.li_cover[data-v-536815a6]::-webkit-scrollbar-thumb:hover{display:block;min-height:12px;min-width:8px;border-radius:6px;background-color:#9f9f9f}", ""]), e.exports = t
    }, d028: function (e) {
        e.exports = JSON.parse('{"OBC":{"address":"0xbf6f7d817d029CCd7928e4CEF3a9729e114C991b","decimals":18},"OBS":{"address":"0x095956B142431Eb9Cf88B99F392540B91aCbF4ad","decimals":18},"OBB":{"address":"0x4Ce3e25A36Ba370201729Ef775367db756128270","decimals":18},"BNB":{"address":"0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c","decimals":18},"WBNB":{"address":"0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c","decimals":18},"YFO":{"address":"0xAc0C8dA4A4748d8d821A0973d00b157aA78C473D","decimals":18},"BUSD":{"address":"0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56","decimals":18},"USDC":{"address":"0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d","decimals":18},"USDT":{"address":"0x55d398326f99059fF775485246999027B3197955","decimals":18},"BTCB":{"address":"0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c","decimals":18},"ETH":{"address":"0x2170Ed0880ac9A755fd29B2688956BD959F933F8","decimals":18}}')
    }, d251: function (e, t, n) {
        (t = n("24fb")(!1)).push([e.i, ".loading[data-v-2154d2b7]{position:fixed;top:0;left:0;right:0;bottom:0;background-color:rgba(0,0,0,.6);display:flex;justify-content:center;align-items:center;z-index:9999}#preloader[data-v-2154d2b7]{width:100px;position:relative}#preloader span[data-v-2154d2b7]{position:absolute;width:20px;height:20px;background:#3498db;opacity:.5;border-radius:20px;-webkit-animation:preloader-data-v-2154d2b7 1s ease-in-out infinite;animation:preloader-data-v-2154d2b7 1s ease-in-out infinite}#preloader span[data-v-2154d2b7]:nth-child(2){left:20px;-webkit-animation-delay:.2s;animation-delay:.2s}#preloader span[data-v-2154d2b7]:nth-child(3){left:40px;-webkit-animation-delay:.4s;animation-delay:.4s}#preloader span[data-v-2154d2b7]:nth-child(4){left:60px;-webkit-animation-delay:.6s;animation-delay:.6s}#preloader span[data-v-2154d2b7]:nth-child(5){left:80px;-webkit-animation-delay:.8s;animation-delay:.8s}@-webkit-keyframes preloader-data-v-2154d2b7{0%{opacity:.3;transform:translateY(0);box-shadow:0 0 3px rgba(0,0,0,.1)}50%{opacity:1;transform:translateY(-10px);background:#f1c40f;box-shadow:0 20px 3px rgba(0,0,0,.05)}to{opacity:.3;transform:translateY(0);box-shadow:0 0 3px rgba(0,0,0,.1)}}@keyframes preloader-data-v-2154d2b7{0%{opacity:.3;transform:translateY(0);box-shadow:0 0 3px rgba(0,0,0,.1)}50%{opacity:1;transform:translateY(-10px);background:#f1c40f;box-shadow:0 20px 3px rgba(0,0,0,.05)}to{opacity:.3;transform:translateY(0);box-shadow:0 0 3px rgba(0,0,0,.1)}}", ""]), e.exports = t
    }, d284: function (e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAABACAYAAABFqxrgAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAAB3RJTUUH5QMcCAoviB82DQAACEFJREFUeNrtm22QlWUdxn/XfXYXkXdhWfaEovaCDsVokzMKFNnoaGHG8jKaTVuDTgokfmiYacxKstQiPpQ54qR8oJk+RLI7piXpqMhZoSLBNcLoRQsFdtAQESF2z3P14XmWzrZ7znnOvnTW5NqZnfPhOef+X7/n/9zP/b9f4JRO6ZQSqRqNLn58El2nBxRqkY0lHHVS83bEhstf+/+DsLCtERt8skFhQFGg7vwx5F9+M2TOHhud2H0EhwgBTq4WIMFDs/e/8yAsbJuCLUDkuyBT49MN9cC5QlOx32MxVmgkUAecMD4m8ybSq8avAH8THMx36e1MDYCRzEOzDwxvCE1tDSgKRA6EEI0HfQj8ceDDwAcNkxLjIwCwcXdu6GQo/zI+JngN+APwHOhp8AtRFN4IinCIaJndMbwgLN7WQL4zEI08Qjg2ZhowD9EEuhAz0QUNWaUbNSAXfI6jfB28A9MCPBqNPPL3cGwMmdqIDRcPHMaAITTlskR5kQlRg0WzzHXADEu1g5lmMRx3ArssfiqzPh+FjpAxLXP2VQfCglwWY6yQCY4uw3zF6FKJmkH03jcQ0yX8FGJNpPCEHOWF2NhPGP2CsCCXjYPBDaClwI2CKUNtvhcMOADcD75PqAPoF4iKIXQDAD4AXm34lNCQ3/3iINwl+CVoJbCnPyAqgrAolyWKP14I3AtcUi3zfWgrsBzYEYCfVwAiNYS4DwCZmYifADOr7boPtWM+b9Eu0mdESPvr8Rud6Yh78LAEAPENukcw3SfHqOWVKhOSN0ED8IDQVdX2Wp6FHwFuEOpIkw1lM2HBM1mAWtBy4MpqG0ypK5N4a5P4BwbBtQZ8hfBNuHpvgYpk1QjfBL4ijn8AEJq2TIE8UzErsepVlcK7ckmAVY9ZSZ6pTVtKD2FKQjAOQDPSrOrMPAyEBCDNApoTH5VDWNg2hUCYJnMtDP1QuBL55L+yqpG5NhCmLWwrng1FIUgW4mrgvGqb7hUbHEf8xfgfmHyZy89DXC25aC4XhRBFmXHAfEu11TbdQ+ZlYAX4E5jLje+wfbjo5XH88xM/6SHMz00BuAA03AZFLyFWHO7kx8BexJ6I6DvAz8AlHhDNBC5IfKWDEA8OPReYMIz6w78CNwO/GFcLG+fsp2XOfoJCF+L5YgSS+CeA58a+UkIICqcZLqJKs9F96M8JgEfhPzXBglwWSTWCGSodqgwXBYXTUkNIhsjTKxh+D6X2JAB+1RNAI4Aw14AWFbvLiSGI64mG1BAEZwomVNs98CLwZWBTbwCRwNdgfw9TXy5nFT/aZ6aGgJUFjXZ1H4Y/Es8PPF4IoCnXCHaA8FlgDVK2HIDYh0bHvtJCwPVAXRUZ7EoAPNkDQFsWi2DpOuD7oPLVESc7trrEV3kIm53FYhTV6xRfAJYBT/cAkMsSiSDzOWA1VmOFvyuLUZvdm1uRPkEj+xO9STuaLarnEwDPFAJYsKWRKJAJEc2g1bKm9OcWFfOVemYpXSN0CU708+s7EgC5HgByWRRFmUzezcB3ZRoGO0f7LIziZbD0LdnkJTYDG4BOYBFwGekLr98TvwW29QIgMs6EL2DuEkweCADjY3095b0yYa72IXOUCjJb4tdAs+212A8avgisS4CU0++IM6AXAESNzRLQ3ZYm999+zEDm6Fz1nm4r8jjoIHAiHQUDfhL71UwQzmQQdAC3Ag+UAfGbBMBv+wKAWQLcaVM/kCcg8XEi8ZUSgrwP/JbS93IZMhkiQ8usV7rNvA7cZrjfffcTWxMA23sBgBrMDcCdmEkDndGKffit2FdKCIa9hkNpKRvmOZ8/u8BEt6l/Al8X3AMcL/haWwLguT4A1AJfwnwbM3GwOkHDIcPe1BCEOgS70gSg+G+2pDXAWX2AeANYZbza+Chx778M2FkEwI3AHWjwABBvB9jVvV6ZDkLIHydO07QPRADmAz8AphWCSJbNjxjfBdxivBxo7wmgEZs6YCnwLeCMQbLfLQPbE1/pIGAZlCNOobQKwGeAHwLnFILYOGcfQscOjD7wYHDoBUByneSlNqsY5MItif8QKBf7Sgkh2Re0E9xeYZsCPp2AOLcQRMuc/TQcbSAf8j2KIcl1tpYBtwPjBxNAAYp2YGex/U5FR4wh5A8DrcnukEpBzCPuDN9XCKJ19gFak0Caco0Yj7B1M3C7rfFDsa6RxN+a+KkMgi1jHiau6StuG/gk8CPg/YUgCj6PEFph8w3QuCFc2HkR87Bd/IVfsun5WxqCFL4qtIr+rT0YeIJ4ZuhPyco2RiPAtwBfExo7ZPahy/ibdnR360c7omIXlSyghCJgPfaz/SwPRVxDrAXmApMx0wS3gm4bUgAG7GeB9YmPkkGWVNPWRpTnKmCdB7YeedB4PzBK6CziMcHQ+DdIPggscYZHWi4pvSO2bCmtTgHaZLQWuWsAsdULzRR671ACiIN2l9Fa0KY4/tIqC2Hjx/YBdILvBR4b0uAHT48l8XYm8ZdU6uRuyjUidD6wznDxcFmQKFSyA3YbsMR4d8ucdBvDU88sJZMsuw3LBO3DY0miF4B2x3XJ7komhVJD6B7lKZ4GaxZsrrbxQiXxNCfxVbSXsaI5xu4fdjwhej241R5QZzlgxe27Fbg+iWtoN3N2a3EuSz4OoAENg2299n2SOjLAhv/Ftt5uves3eBfqXb3Vv1AlD33AxEInqQ999LxoeB/6KFSR4z+XGj4CzADOSHv8h3h+cpdgO+ipYX/8579VeBAsyoMyHkV8EOycCg6CvQQcdF5HQwbeMQfB+tKCXGOPArSSI4HdAW5MOfIbthD60nA7HHpKp3RKJ/VvJf60y8IAIaQAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDMtMjhUMDg6MTA6NDcrMDA6MDDFrbfKAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTAzLTI4VDA4OjEwOjQ3KzAwOjAwtPAPdgAAAABJRU5ErkJggg=="
    }, d2ff: function (e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAHCAYAAAA4R3wZAAAAdUlEQVQoU5WQsQ2CYBBG39dZULMGcQxxDRoqN7GxIDqAJm5kIAzgEh85wp/YcV793r3cicTYPgGzpE/BlfCw/QJaoJf0DEe2B+Cws+AINBtzBy4hOlH9AvUPdw3xBlR/FB9rMVErN56BTtJ7vTEpxlcnSWPhF5GZI5uNMiJKAAAAAElFTkSuQmCC"
    }, d677: function (e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABPCAYAAAB8kULjAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAeQSURBVHgB7ZyJbdtIFIaflAOBnWBlwLmAAKErWLkC0xXEqSBKBXEqiFxBvBXEqSBOBZIrsLYCa4EAuQyYiySG4XP/nxkKFCWKnEMUKe8HCLol8ufMm/fevJmazJCDg4PGwsKCf/PmzacXFxdNvOSpm8TuQ2q1WnB1ddXHwwC3Pp73z8/P9/j48ePHfZkRNSmQSDCc/BqebkhCJAv6uHUh8Mfj4+PuyspKIAVRiIDfv3/3cfcGtyZOsiHTZ4diPnz4cFemzNQEVK1ts16vvypItHH08f/ts7OzvWl1c+cClkS4JH3Y2PcQsS2OcSrgt2/fWrBvb0skXJKwRS4vL78XRzgR8PPnzx5G0ncQzpdq0EWLfOmiW9fFki9fvmxCvP0KiUf8Gzdu7PPYxRLjFkhbt7i42MbDV1Jtth88ePBaDDESkF0WV/ADHjZlPuAgs27SpbUFVOJ1xJ0TXBaMRNQScI7Fi9AWMbeA10C8CC0Rcwl4jcSLyC1iLjfmmolHwkGSnkbWBzMFRHSxLddLvIgm3LQ3WR+a2IXpaCL0eSs5QRjXjv788vKyieeelAOmt3aZQ+QTOP10oHOFmziP148ePdpOez9VQBWe7WvEtV04pOvxF9B66ScyqeDPQEyKtoP/3b1///5e/A2k194qEXP9Duzhapo9TO3CKrbVSQqM5N4gaA+3l7iK62ydKqNcBNu/fv1aYYSRFE/xUfLTgD18l/bm2BbIrAruUr809odqNT/lYAeo0Zx2pZV4iyn6HgVm6j7qaiDA59kCPD7BheAF9dia8Vm+loyEciUJjo6OGsgRHokGMGWtcVmcNAEPRHPgwBVfyptKZ4YaAjzDQXV//PixZ5qC5ygJ/oQYtLkCW/VX3u8anGPAVp081hEBv3792sYVzhx9kj+O7rIkFQIXsaObQcLn25gm2Iq/NmQD2cUg3gvRp7BJnFkCbTaTvuGQgLA3vlxPny8vnK4YSt8lR2Hdrhvh5fHaS4bR8bIVxp8PBDw8PLSap71165YnFQL2zDSX2YCp86MnAwExij0TCyCg1feLRM1TG6NcsZBQQPpFMuqbaRHz3UoPWh8HPZuBrxmZrFBAOJ++2MF5BWdThdOGERJ63JaY07h37x7LU34LaNN9GT3AwbQ5mJnABAF6TVcMgWY+7yMb6IshjHGLLOZxyfn5+Usxh4Ou1FR8eiAGsPXBM1+RCmMSkUQwfK0j6+KJIWh921J9jM0P7SC78JoYcnp6uicVBxmkrhiOyLCDXl2lhUwInjx50pM5gKk0MaNZt8gUz4V4CtNz8diFjWJC5YzOBRaZcvMuzMyxzA//iiHGLfB/Qjzr+sA54Q8xxFjAEpfxagNzZHwuxgKWaNLcBVYC9sUMT+YH0+RqYGMDGxVM44/FIpjo120SoVFOrMowmSLmvSmo25RbRDmxKqNmIk3pswvbhGQtqTjogTZzOb06+EfMGZqhqhrsvuiBG2IIkxB1NOGuWBCfoaoatsf+8+fPv8PaGJNiojiqnrgrFcImE69g6d5q6MawCFEsYP1c1Vwa1j+KHeHYEfmBOgWH4/AWFhZsD6gwWIFmu7YPY0fY6EIBcTWoplV6Cq14A6ag9CIalu8lCZaXl8NGFwq4tLQU2MyRxmhBxI5yTksFTQxXHDgQjwxMXjyUy13dmQGXknYODw9N6gynAmthFhcX98XRylJchJ3B4/gbuEKsG25M+OIuU/lM/ygbkjVwOF8hrkO02YXLtczJufBa4g/5Z+2U7w4tY1DLIF5M+HycvhSwLQm76d27d7kzyDNc5NaUcpateB3QkICqep2+0dg/hr+3ldy4QRWMfxC9nFpPJTF63DzH1IdULWwtVrFvmpbKxbhKjKF0lhpMUqsN6LljFPsQHyQ4MY3vPBc92Eo2kIxoiXk+MvQeVCjWkmIWf+8kXxip0mcrPD093c/IOLMiazXeFTVX/0S0bMviVA/oyJRJqwMaSaiyFeaonRtxnNEatnRSY/ysi5pC1QO6MmVi6wCHGJuRhk3ayTooOs7ozoNMhhJ+Pa+ItuFjHPyns99K+/20i52a0le1cxNHS26yE4+BucQqr4hcpSSOwOBmG4pOgg0jdVePVAGVGHm68qvk92gruGZNteL4RejL7xWUfhQKuWCa299Bg/ak35+4XpjkGBxGlrnOAgQBV+KezD1lMmflODjI5LS/72IHoLKhBrnMDXkyBeTggO74fJJdgz178+nTpyL8sELgudKW5/lsrnnhHIND4/bt2/vz0BIj8ZxuexLBCAStrZPlZOO2y5Hx5OSkF3e2OWLfuXOngd9out5d0oUN1BWPaAlIcoqYCeyL9n9PwlZAE/GIdmmHjq9XFXAuPRPxiFFtTOTrzckyhx2k2NZNfUmrAkvEoa+Vl66d30PS4qnMFkYYm9xVxCY/aV2hyjVn3FfFZWxbANzdY1Vnk4o0nJT4svmjNT5n+FZy28iWxhTauqvwz2mNNLM4yja2SyYkt5Fvq814nM7PTKXIHK1xC4Z5dVKLDILAeGlBCuPs2EA4bldS1VWlHDDWOOlOX40zf4hYnG9cyyiIv61uHSRBKl/8eS34D7jlB7DPBVbxAAAAAElFTkSuQmCC"
    }, d8f1: function (e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAqCAYAAADBNhlmAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKKSURBVHgB7ZnxdZswEMbPfR2AEdig3iCM4A3KBvEG0AnsTkA2aDdwMoHbCUgnIBt8lYJI5ONOSOCQ/JHfe/cM1vHpENLpjIk+WcaGFgBgbz5ujG2NZc4sT8Yenf3dbDY1zWRpgIjxMwHO7ucLzcTEVryFL2d2gIbvCb4FrYkZkRxjSq99J7RvaQ1sR8Za1nkr+I187I3RNTBCZ2ONnTvGMmeF+w6h0fM0dopvo+ieYoM7II06oFUjjcNUcCXSqGn6hlOD3GtCduK3kSLWr6BI0N94rHZnLJNEGsHx7D4710GDBTkN/by8E3Q71vdBGj3OnlbC9iX0n/kODWtsaWUwngJ1qLGhlREGqRsatpDZRQrbXFYZO3nX2jlWUiSQs4edl/ngIK1geTVdCk+t/BYRuwdidh3XGV9NZaKwFmRGaaOXa848qf5OFNaoAzq/mK8+/9Hvixd3H/A9M1+b3+x8zN2xzymg0zLfcNXDnBHrB++xuEBn6fD2JQUr58k7zuhKXAQoDO8f/VK6Z+cH93htcFWCziOLoSAtQMMtO/9HOg/svDRm52znjn1+kg4PvhC9MFHGC/4ZItMMBcB4H35N0Cy4NkU4cN2FBiYStbvRTr0OcoK2lBQJ+pzop50T+pwatVig59Tt4MADfI9igefO5yc4LBI+iQtanxt2fv9yBCGxYt2C9VboP+dOR+bgl+ND+d8gsgxTAimcBtednmKQV5NGi7RFVCDtB1muCe2RRhURXIU0yinBY6JgdcXgjhQD+jzWYPyK4k4R3gkaWm5rFN0zXQNE7jqQy/hV33Cpo4iUMv4Ng6wRz+o7k/TzIMTsR/vhX6J/pWX8MPbNWO7M/xvCmi1GH2gB/wEZqr1zstg9GwAAAABJRU5ErkJggg=="
    }, e3f6: function (e) {
        e.exports = JSON.parse('[{"constant":true,"inputs":[],"name":"getReserves","outputs":[{"internalType":"uint112","name":"_reserve0","type":"uint112"},{"internalType":"uint112","name":"_reserve1","type":"uint112"},{"internalType":"uint32","name":"_blockTimestampLast","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"}]')
    }, ecd3: function (e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQ/SURBVHgBvVlLTuNAEK2YgARsspylOQGR+Gzj3CA5ARmJ74pwgiQnGLNAfCWS1SyZWc5qzB4YcwJ8g8mGj/hlXiXtqFP4TzJPCm27q8vP1VVd1U2OMmJ7e9vq9XqL+Fm5XK6ItoC2wH247uLaQ+vh1n1/f788OztzKANyaYTr9Xrh6empjhfu+mRSwMPPwbjW0dGRl3RQIoJM7PHxsYnLXRoP2kmJTsUJbG5u1l9eXi6g0KLxoYhfZXV1tXt1dXUbJRhpwa2tLZtCrKb87AdaB7/b+fl5z7btLvexxe/v700mYhhGCf2VMJdAn31ycrJHaQiqKb3ApRXQ7cEHbRDq+ISSYGNjowayDVyaAd3u7OxsOUhfIEFY7g8NpmEIZbHm8fHxPn0CiP4GdDUDuhzoLlMcwZBp9UCunCb6YkiaIPmbhDWDpjsnBtYgdC70uSBXjSOHD+vp97BGLgFJdiM5U3sgafv3hhjQEHq8JOSygHWybhqsjzoaHAMkCSpypi45zmmNIFlm/9beWXh4eGiMEGTroanpg9mRJ0lOJ4mmpT8Dybpvxb6fwH/OBUEPPrQQplTlYY7GYpqUF+WX4HBH2gyygeCLLX+KLV04ZBnwyTVVBFoZ8nEUbHFf5z8GW4NGmXfBvEPB5GoBgTQWYKHuSF9cX1+3DGSFki7I6StMCRSs0YTAWUS+e2pqajHPtZwg4UTosfQbjF0YZyBx3Yh0WNO4WOyDJo0SDK0u9CmYBKanp139no2Xx0tNXAwfclUSpgByrMDy7zH2DtFHCeDAMu3Dw8NOlNDMzIyHIoU0/QVDRmJUhcJFJmWDhelro7ZsRgnJdzM3g1IA/sYle5MyAmMbHJlpxhjSr/Q8GASQbMEaX3HpUAYgMkOXKflu5sZRzASHHaoSdikCp6enbTRtSgBVhNxpLy2GyT4/P5vikWdIMiC8SBNEVPbBzEjyXp4GU1XRFFhoIqNN1n5RgMXkIydCtiQeuRzFt0KoEueHnwH0tyP6KuLeMTgyZQ7EWjSRlKYqlNA8L6bfg69f9pcZLKKBlcSYSPHHO/Avi8unCDkZ3Q7/6acQtc38KwaM7A3ikHZPokOVcCME/Tzft6BawSWZhqq0J4qQvVDbL0KGmQT1WEv6IhemkySpbT91eHpKHRJUVpQ+0t8aToKktu009edyLxS0cf9GH4Pkv2zcARu+O7Jx/3C6dX19/Wt5edkSgzn860tLSzn0O/QJ8GkZyH3HB38RXS7IVaV8PkgJ/LGKqOYvHEk9XI3AwmtYlppxtZ0OtUrw2sozYwaIOPzOoLFxx29B092Hf/wGss7r62vm4zcKmNbEBBkxx2aZkfS0LPaE9ebmxl1ZWflJAz8s0nhgz83NVQ8ODi7jBFMdomuLqkUpLarWWCa2n+bgMxVBHTs7O6W3tzcLl3z8YarNl/5viC5aV21jXU78lAH/AJh3gy/ryVaCAAAAAElFTkSuQmCC"
    }, ef4d: function (e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAStSURBVHgBvVk5U9tAFF4fMBxFSEcpOjo8wzE0DKJLOvMLcGY4K5xfIFNlUiEKhnMmUKUklFQRHQWH+AXRP4hTcIQz35N3nfV65ZVsJd+MLO397du3b99bZ1ibWF5etl9fX0fw2JlMpoD3AN4DVIbvKr4DvAMk/ZeXl9P9/X2PtYFMksrlcnng/v6+jAFXBZkECPB4aLe2vb0dxG0UiyARu7u7q+BzlaWDg7hEc6YKi4uL5cfHxyN0aLP0UMBTnJiYqJ6fn1+3qthSgktLSy6LkBrXs294e3iu+/v7A9d1q1RGEr+5ubGISDabnUZ5MUolUObu7u5+ZEkI8iU9wqetKQ6ggy4IHQpCcbCwsFACWQeflqbY7+3tndH1pyUIyV2x2jLUwSVW2dnZ2WAdALvfQV8VTZGHvmeYiWDEsgYgN5Nk9xlIWiD5nSnS1C13TmlYwuuT0p8Pcu/TIkfAxqiOj48fs5oKDYp8jDM5Ojr66+Li4qyeJ5HTzcooOWEb0XZOauuz2sRamhLdmKRKfX19Q0Ifs1JBkwKbyJHEb29vf2jakv6WsJmuyExFtae+aQwiJY05gD4dkc6JmeB1IDcmRYbSHkd1zgfeQoc9UXWoDM872Lsgyt7RcmNZf1M9qd3k1NTUxtnZ2X2Wk3GUdgGUdS1qYD4hh8XE8/OzS6oQVY6xaGMGch6kGG5UscS2XBhhBuRyRzW81Aa27C09+G7YiXzZTMekq6RD1chzr8SSBqpiRofMAG4XBcky2sj20UW/b+SJom4Jr8hVwcQOMYmK6JPe8/PzdhaKPC1XpOOLGQDd/ABCb1F3CMkida7W6enpUQ261apP2rXq2LlcbiRPvpycSWcriwm+wwOWEshvxHFYYn+52KSDllyJDn6WArBcJaVf39Smq6uroQ4JL0/6h496JnklrANIhttRBjMS7O7uDuCk1NPkpefV3ZjEQ5FBRhtLtI4BmswJbSgs3ZqpDxobvkA9TdyyLCXoTI80UKXdszwrHzOEVgbVAEvN4JIrxXXR1LHD9phdA0HuCXcMsoF06G9tbRltqsDDw4OlZAV5VvM86gUgPMLzOkKrozIK0OGCkhUS9PAURQ4PjmLPWgDLmCiE1QFSn1ayfFria6VSsQM97Ag0tpL2wlnDdfqp7MBy0tgD5uFVTieVKJkpEPoiZQXoYyg0M9hpWk/if0Lj8nn0ExLUHeytPOG0AelVWLM3H26ykCA/PVQpOtwx/dfkLI30DoRhr+sJbQyKLxRdTDXcjCDXMlCrh53k/6uxAUBkbYSIJxQ7sBTBydHtxbCcjzzaoKci3RAXUzw6NjZGpCalbIpbixTHpkVSktywUkSB+2c5o+l2CyRPQNJmjWIn0mVIOINyj3UA2nwg9xUrNagU+ZDcrFo/r+sELvws3CaaYcPRg04d2Ls5mKVKkjOWX0ZRYE+WwdJU8WhMXVvT9ds6i7CJ4voNZL2np6e2r98AF5JLdv0mw3Bt1jbi3pYZb1gvLy99ftFDEiiwdODCFZvd3Nw8NVVMel4Ko2qzhBLljjER20gSVrTtIq2srEzjSsPGZwFLZfHgS/4bokqRHA9j/b29PaO0dPgDYCKkXN/0IREAAAAASUVORK5CYII="
    }, f0fb: function (e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAmCAYAAAC76qlaAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOgSURBVHgBzVjLUeNAEG0Zqvic2AhWRLAmArQRQAYrH/id0EaAiABxAmxXYSLAjgARgbURWBngk+2L7X0tz7iEVrKlmfHuviqVpdGH1z1vXvdgkSY8zzuYTCbefD4/xqUjhqNarRY8PDy80IZgkQYuLy9tEH7DqV3wSGxZ1vfHx8eYDKNGGlhDmpEExrNChqFMHNl2aTVpCXs0Gl2TYSgTRyazZDp7e3tfII1D3PukbYw5ZBg6UqmnL0DuNgiCIet5f3/fyzzrkGFskyHs7u4O5TlcZq2mdd1I2VUuLi7e6HMmO5x1DgCaDnD+Q94AuajZbB7JaxNupCwVfDjMDLkgMxiPxx9p0gJB+sKEGykTR2bv8ROXeDRGtpdTb8qNlInzQuTppNXkY/HMEqbcSKsAsQafnp4OZ7NZA5dR6lYIEj4IHeXo1IgbGXGVVqvVwU+HFFDVjSSM2WEFhJTKJBbzHXQv3cjHDCwfZDcq+sg2LxZM9R1eKIo2hrf6pjo9diMQclJD7EYuAqA0aYGg6Ds1vHSzgjTDnk6nARmCqhtlYaGQzKkkECQ7CU9fhGB67XY7JAWYKECViOf9AR0ZnZ2duXif7VE6DcsohLvcs9OsevcP4rC3RGgVA9rYhqEIplyFp36AYPPuJdLC/R402yVDKF2AeCbgPtwonVI1z2YZuJiRVwQ2YH2TAVSqnCg0EQLo4WhwiabqRcdG8H1ou06aUJaK0HMDGYy5vJd9j60XR79AVhIsrXhra6tbtPC1NY4AbvFzW3T/6urqGFl2cepSedQRXB3vnSJAP8+5tJqsMsAffBfS8kkNLK/O+fm5nx7cOHEJMTMhKQKB34D8nbxWlopm4ZJI2uLsIC9eUZjc9DjIe5BexLL5axkvgJ03KNyrkd2EMGTf9K+JF4KzDm2/ZsflWvkviUPLHqTSz3atbLuYCe4uy2scmn7mbZbsR2RPYxKia3ymnC0bk0bLsLTdKouTG34Hi8Pf2dnpreveqkD+cwjSuM7bG2RJM1Tb2hhHiIXyotqTM5BhB6ROeAdUQHiI6unlVU/dfjz5OC38mbvAX6JUD9MtrsjoATLKFfErhup47nTNzivE/UZRq2xhIXys+YDc+TBBmzYMkQhv1baNgcVb+0kr9oByuthThRXFtBkkzRp2P4frSDOUnAHyOqFFX+6QxiyImexyL4Ki817lXW1LE701l+hvtNg0HIjDzjwa42AZRCCa7Iqqkk3jN3BNEY9SU6t2AAAAAElFTkSuQmCC"
    }, f121: function (e, t, n) {
        e.exports = {
            1: {
                abi: n("fe29"),
                cTokenAbi: n("a2ee"),
                cEtherAbi: n("73d7"),
                tokens: n("d028"),
                lpTokens: n("ce62"),
                pancakePair: n("e3f6"),
                vaultPair: n("b26b").vaultPair,
                lendingPair: n("5aeb").lendingPair,
                earnPair: n("2bc7").earnPair,
                commonContract: n("89d1")
            },
            56: {
                abi: n("9c46"),
                cTokenAbi: n("7ab5"),
                cEtherAbi: n("0aaa"),
                tokens: n("652a"),
                lpTokens: n("84a8"),
                pancakePair: n("5c44"),
                vaultPair: n("7898").vaultPair,
                lendingPair: n("7234").lendingPair,
                earnPair: n("865a").earnPair,
                commonContract: n("a9cf")
            }
        }
    }, fb5e: function (e, t, n) {
        var a = {
            "./dashboard.png": "9b17",
            "./dashboard_1.png": "3ca9",
            "./earn.png": "f0fb",
            "./earn_1.png": "5765",
            "./faqs.png": "ef4d",
            "./faqs_1.png": "4a47",
            "./governance.png": "bb5d",
            "./governance_1.png": "c7b6",
            "./lending.png": "ecd3",
            "./lending_1.png": "bef1",
            "./settings.png": "670d",
            "./settings_1.png": "d8f1",
            "./statistics.png": "332e",
            "./statistics_1.png": "97df",
            "./vaults.png": "85c7",
            "./vaults_1.png": "2da4",
            "./wiki.png": "5e53",
            "./wiki_1.png": "3998"
        };

        function i(e) {
            var t = s(e);
            return n(t)
        }

        function s(e) {
            if (!n.o(a, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND", t
            }
            return a[e]
        }

        i.keys = function () {
            return Object.keys(a)
        }, i.resolve = s, e.exports = i, i.id = "fb5e"
    }, fe12: function (e, t, n) {
        var a = n("1797");
        a.__esModule && (a = a.default), "string" == typeof a && (a = [[e.i, a, ""]]), a.locals && (e.exports = a.locals), (0, n("499e").default)("72a2a454", a, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    }, fe29: function (e) {
        e.exports = JSON.parse('{"pancakePairAbi":[{"constant":true,"inputs":[],"name":"getReserves","outputs":[{"internalType":"uint112","name":"_reserve0","type":"uint112"},{"internalType":"uint112","name":"_reserve1","type":"uint112"},{"internalType":"uint32","name":"_blockTimestampLast","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"token0","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"token1","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"}],"erc20Abi":[{"name":"Approval","type":"event","anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}]},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"}],"poolAbi":[{"inputs":[{"internalType":"address","name":"CP_","type":"address"},{"internalType":"address","name":"stakeToken_","type":"address"},{"internalType":"uint256","name":"starttime_","type":"uint256"},{"internalType":"uint256","name":"initreward_","type":"uint256"},{"internalType":"uint256","name":"duration_","type":"uint256"},{"internalType":"uint256","name":"lockTime_","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"}],"name":"RewardAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"}],"name":"RewardPaid","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Staked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdrawn","type":"event"},{"inputs":[],"name":"CP","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"duration","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"earned","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"exit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"initreward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"invite","outputs":[{"internalType":"contract Invite","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"inviteAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"lastStakeTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastTimeRewardApplicable","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastUpdateTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lockTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"periodFinish","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"starttime_","type":"uint256"}],"name":"resetStarttime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardPerToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardPerTokenStored","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"rewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"stake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"_superior","type":"address"}],"name":"stakeByInvite","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"starttime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"takeOut","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"takeOutEth","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"}],"name":"takeOutToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_newOwner","type":"address"}],"name":"transferAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"duration_","type":"uint256"}],"name":"updateDuration","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"initreward_","type":"uint256"}],"name":"updateInitreward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"invite_","type":"address"}],"name":"updateInvite","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"lockTime_","type":"uint256"}],"name":"updateLockTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"initreward_","type":"uint256"},{"internalType":"uint256","name":"duration_","type":"uint256"}],"name":"updateRewardRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userRewardPerTokenPaid","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}],"vaultAbi":[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"burnAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IERC20","name":"want","type":"address"},{"internalType":"uint256","name":"lastRewardBlock","type":"uint256"},{"internalType":"address","name":"strat","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_wantAmt","type":"uint256"}],"name":"stake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"stakedWantTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"startBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAllocPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"shares","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_wantAmt","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"withdrawAll","outputs":[],"stateMutability":"nonpayable","type":"function"}],"stratAbi":[{"inputs":[{"internalType":"address","name":"_autoFarmAddress","type":"address"},{"internalType":"address","name":"_AUTOAddress","type":"address"},{"internalType":"bool","name":"_isCAKEStaking","type":"bool"},{"internalType":"bool","name":"_isAutoComp","type":"bool"},{"internalType":"address","name":"_farmContractAddress","type":"address"},{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_wantAddress","type":"address"},{"internalType":"address","name":"_token0Address","type":"address"},{"internalType":"address","name":"_token1Address","type":"address"},{"internalType":"address","name":"_earnedAddress","type":"address"},{"internalType":"address","name":"_uniRouterAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[],"name":"AUTOAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"autoFarmAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"buyBackAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"buyBackRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"buyBackRateMax","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"buyBackRateUL","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"controllerFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"controllerFeeMax","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"controllerFeeUL","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"convertDustToEarned","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_userAddress","type":"address"},{"internalType":"uint256","name":"_wantAmt","type":"uint256"}],"name":"deposit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"earn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"earnedAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"earnedToAUTOPath","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"earnedToToken0Path","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"earnedToToken1Path","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"entranceFeeFactor","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"entranceFeeFactorLL","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"entranceFeeFactorMax","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"farm","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"farmContractAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"govAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address","name":"_to","type":"address"}],"name":"inCaseTokensGetStuck","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"isAutoComp","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isCAKEStaking","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastEarnBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"onlyGov","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pid","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_controllerFee","type":"uint256"}],"name":"setControllerFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_entranceFeeFactor","type":"uint256"}],"name":"setEntranceFeeFactor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_govAddress","type":"address"}],"name":"setGov","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_onlyGov","type":"bool"}],"name":"setOnlyGov","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_buyBackRate","type":"uint256"}],"name":"setbuyBackRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"sharesTotal","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token0Address","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"token0ToEarnedPath","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token1Address","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"token1ToEarnedPath","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"uniRouterAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"wantAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"wantLockedTotal","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"wbnbAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_userAddress","type":"address"},{"internalType":"uint256","name":"_wantAmt","type":"uint256"}],"name":"withdraw","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"}]}')
    }
});