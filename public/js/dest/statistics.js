function appRouteConfig(e) {
    e.when("/doc/detail/:orderId", {
        templateUrl: "admin/doc/detail.html",
        controller: "OrderCtr"
    })
}
appRouteConfig.$inject = ["$routeProvider"], angular.module("app").directive("buttons", function () {
    return {
        restrict: "AE",
        replace: !0,
        scope: {
            selector: "=",
            direct: "=",
            count: "=",
            button: "="
        },
        templateUrl: "public/js/directive/buttons.html",
        controller: ["$scope", function (e) {
            e.select = function (t) {
                if (e.selector = t, e.direct = 0, "M" == e.$root.config.staff.roleType && "doc" == e.$root.active) {
                    var a = ["charge", "point", "coupon", "upgrade", "sms", "consumption", "receivables"];
                    e.count = ajaxSendFn({}, "/statistics/" + a[t] + "/num", "GET").result.count
                }
            }
        }]
    }
}), angular.module("app").directive("couponNew", ["CouponFactory", "memberGradeFactory", "shopFactory", "$filter", function (e, t, a, n) {
    return {
        restrict: "EA",
        replace: !0,
        scope: {
            addOk: "&",
            addFail: "&"
        },
        templateUrl: "public/js/directive/couponNew.html",
        link: function (t, i, r) {
            if (t.couponCategoryRev = {
                    901: "代金券",
                    902: "实物券",
                    904: "礼品券"
                }, t.ruleCategory = getShareCategory("COUPON_CONSUME"), t.couponTimeSel = couponRangeCategory, t.today = n("date")(new Date, "yyyy-MM-dd"), t.coupon = {
                    dateRange: {}
                }, t.shops = a.getAllShops(), !t.shops.length) return alert("暂无可用的门店"), void t.addOk();
            t.coupon.shops = [], t.coupon.shared = [], t.coupon.periods = [], t.posts = {}, t.checkAllShop = !1;
            var o = ajaxSendFn({}, "/nonParticipation", "GET");
            t.nonParticipation = o.result ? o.result : {}, t.checkAllCatagory = function () {
                t.posts.catagoryAll ? angular.forEach(t.ruleCategory, function (e, t) {
                    this[t] = e.id
                }, t.coupon.shared) : t.coupon.shared = []
            }, t.checkAllShops = function () {
                t.checkAllShop ? angular.forEach(t.shops, function (e, t) {
                    this[t] = e.id
                }, t.coupon.shops) : t.coupon.shops = []
            }, t.getBusinessTime = function () {
                function e(e, t) {
                    var a = {};
                    return angular.forEach(e, function (e, a) {
                        t[e] && (this[e] = t[e])
                    }, a), a
                }
                var a = {
                        1001: "早市",
                        1002: "午市",
                        1003: "下午茶",
                        1004: "晚市",
                        1005: "宵夜"
                    },
                    n = ajaxSendFn({}, "/businesstimes/all", "GET").result;
                t.businessTime = e(n, a)
            }();
            var s = new Date;
            s.setFullYear(2017), s.setMonth(1), s.setDate(1);
            var c = new Date;
            c.setDate(c.getDate() - 1), c.setHours(23), c.setMinutes(59), c.setSeconds(59);
            var d = new Date;
            t.dateOptions = {
                formatYear: "yy",
                startingDay: 1,
                minDate: s,
                maxDate: new Date(d.getTime() + 31536e7)
            }, t.open = function (e, a) {
                e.preventDefault(), e.stopPropagation(), t.opened[a] = !0
            }, t.opened = {
                startDate: !1,
                endDate: !1
            }, t.disabled = function (e, t) {
                return !1
            }, t.$watch("coupon.dateRangeCategory", function (e, a) {
                e && e != a && (t.coupon.dateRange = {})
            }), t.settime = function (e, a) {
                t.coupon.periods[e] = t.coupon.periods[e] ? null : a
            }, t.addCouponInner = function () {
                if (t.coupon.dateRange.endDate < t.coupon.dateRange.startDate) return void alert("结束时间不能小于开始时间");
                if (t.coupon.dateRange.endDate < c) return void alert("结束时间不得小于今天");
                if (t.coupon.dateRange.startDate < c) return void alert("开始时间不能小于今天");
                if (t.coupon.dateRange.startDate && (t.coupon.dateRange.startDate = n("date")(t.coupon.dateRange.startDate, "yyyy-MM-dd 00:00:00")), t.coupon.dateRange.endDate && (t.coupon.dateRange.endDate = n("date")(t.coupon.dateRange.endDate, "yyyy-MM-dd 23:59:59")), "901" === t.coupon.category && (t.coupon.value = t.coupon.currentAmount = 0), t.coupon.dateRange.selectCategory = t.coupon.dateRange.selectCategory || "NONE", t.coupon.shops = arrRemoveNullFN(t.coupon.shops), t.coupon.shared = arrRemoveNullFN(t.coupon.shared), t.coupon.periods = arrRemoveNullFN(t.coupon.periods), "NONE" !== t.coupon.dateRange.selectCategory)
                    if ("MANUAL_SELECT" === t.coupon.data.subType) {
                        var a = arrayMap(objectKeys(t.coupon.data.selectDates), function (e) {
                            return e + " 00:00:00"
                        });
                        isEmptyObject(a) || (t.coupon.dateRange.selectDates = a)
                    } else if ("MONTH_DAYS" === t.coupon.data.subType) {
                    var a = arrayMap(objectKeys(mapFilter(t.coupon.data.selectDays, notNull)), parseInt);
                    isEmptyObject(a) || (t.coupon.dateRange.selectDays = a)
                } else if ("WEEKLY_DAY" === t.coupon.data.subType) {
                    var a = arrayMap(objectKeys(mapFilter(t.coupon.data.selectWeekDays, notNull)), parseInt);
                    isEmptyObject(a) || (t.coupon.dateRange.selectWeekDays = a)
                }
                delete t.coupon.data;
                var i = e.addCoupon(t.coupon);
                200 == i.code ? t.addOk() : t.addFail({
                    result: i
                })
            }
        }
    }
}]), angular.module("app").directive("myDatePicker", function () {
    return {
        restrict: "EA",
        replace: !0,
        scope: {
            data: "=",
            dateRange: "=",
            isEdit: "="
        },
        templateUrl: "public/js/directive/datepicker.html",
        controller: ["$scope", function (e) {
            e.topDateRangeCategory = [{
                type: "PERMANENT",
                name: "永久有效"
            }, {
                type: "CONTINUOUS",
                name: "周期有效"
            }, {
                type: "BIRTHDAY",
                name: "生日相关"
            }, {
                type: "SELECTED_DATES",
                name: "指定日期"
            }];
            var t = new Date;
            t.setFullYear(2e3), t.setMonth(1), t.setDate(1);
            var a = new Date;
            a.setDate(a.getDate() - 1), a.setHours(23), a.setMinutes(59), a.setSeconds(59);
            var n = new Date;
            e.set = {
                periods: []
            }, e.view = {
                periods: []
            }, e.dateOptions = {
                formatYear: "yy",
                startingDay: 1,
                minDate: t,
                maxDate: new Date(n.getTime() + 31536e7)
            }, e.opened = {
                startDate: !1,
                endDate: !1
            }, e.clickBtn = function (t) {
                e.data.dateType = t
            }, e.open = function (t, a) {
                t.preventDefault(), t.stopPropagation(), e.opened[a] = !0
            }, e.disabled = function (e, t) {
                return !1
            }, e.$watch("data.dateType", function (t, a) {
                t && t !== a && (e.data[t] || (e.data[t] = {}), e.data[t].dateRange || (e.data[t].dateRange = {}), e.dateRange = e.data[t].dateRange, "CONTINUOUS" === t && (e.dateRange.startDate = parseDate(e.dateRange.startDate || n), e.dateRange.endDate = parseDate(e.dateRange.endDate || n)))
            }), e.dateRange || (e.dateRange = {}), e.data || (e.data = {}), "CONTINUOUS" === e.data.dateType && (e.dateRange.startDate = parseDate(e.dateRange.startDate || n), e.dateRange.endDate = parseDate(e.dateRange.endDate || n)), e.dateRangeCategory = dateRangeCategory
        }]
    }
}), angular.module("app").directive("searchByDate", ["shopFactory", "$location", function (e, t) {
    return {
        restrict: "AE",
        replace: !0,
        templateUrl: "public/js/directive/search.html",
        controller: ["$scope", "$location", function (e, t) {
            e.init = function () {
                if (e.posts.startTime) {
                    var t = new Date,
                        a = Date.parse(e.posts.startTime);
                    t.setTime(a), e.posts.startTime = t
                } else {
                    var n = new Date;
                    n.setDate(n.getDate() - 30), n.setHours(0), n.setMinutes(0), n.setSeconds(0), e.posts.startTime = n
                }
                if (e.posts.endTime) {
                    var i = new Date,
                        a = Date.parse(e.posts.endTime);
                    i.setTime(i), e.posts.endTime = i
                } else {
                    var i = new Date;
                    e.posts.endTime = i
                }
            }, e.init(), e.doSearch = function () {
                return "finance" == t.$$path.split("/")[1] && void 0 === e.posts.reason ? void alert("请先选择对应的项目") : (e.posts.endTime - e.posts.startTime) / 864e5 > 31 ? void alert("起止时间不能超过30天") : void 0 === e.posts.shopId ? void alert("请先选择对应的门店") : ("" == e.posts.shopId ? e.view.direct = 1 : e.view.direct = 2, void(e.view.needSearch = !0))
            }
        }]
    }
}]), angular.module("app").directive("mySpecialDate", function () {
    return {
        restrict: "EA",
        replace: !0,
        scope: {
            specialDate: "="
        },
        templateUrl: "public/js/directive/specialDate.html",
        controller: ["$scope", function (e) {
            e.specialDateRangeCategory = [{
                type: "MANUAL_SELECT",
                name: "手动选择"
            }, {
                type: "MONTH_DAYS",
                name: "按月选择"
            }, {
                type: "WEEKLY_DAY",
                name: "按周选择"
            }], e.week = [{
                idx: 1,
                value: "周日"
            }, {
                idx: 2,
                value: "周一"
            }, {
                idx: 3,
                value: "周二"
            }, {
                idx: 4,
                value: "周三"
            }, {
                idx: 5,
                value: "周四"
            }, {
                idx: 6,
                value: "周五"
            }, {
                idx: 7,
                value: "周六"
            }], e.clickBtn = function (t) {
                e.specialDate.subType = t
            }, e.range = function (e, t) {
                var a = [];
                t || (t = e, e = 0);
                for (var n = e; n <= t; n++) a.push(n);
                return a
            }, e.clickDay = function (e, t) {
                var a = t.hasOwnProperty(e);
                a ? delete t[e] : t[e] = !0
            }, e.specialDate || (e.specialDate = {
                selectDates: {},
                selectWeekDays: {},
                selectDays: {}
            }), e.set = {
                periods: []
            }, e.view = {
                periods: []
            }, e.date = {
                now: new Date,
                nows: {
                    year: (new Date).getFullYear(),
                    day: (new Date).getDate(),
                    month: (new Date).getMonth() + 1
                },
                week: ["日", "一", "二", "三", "四", "五", "六"],
                dates: [],
                i: 0,
                year: (new Date).getFullYear(),
                day: (new Date).getDate(),
                month: (new Date).getMonth() + 1
            }, e.dateFn = function (t, a) {
                e.date.dates = [];
                var n = new Date(0);
                n.setYear(t), n.setMonth(a - 1), firstday = n.getDay(), ny = t, nm = a, a >= 12 ? (nm = 1, ny++) : nm++, nextMonth = n, nextMonth.setYear(nm), nextMonth.setMonth(nm - 1), nextMonth = new Date(new Date(nextMonth).getTime() - 864e5), lastdate = nextMonth.getDate(), lastday = nextMonth.getDay(), et = new Date((new Date).getTime() + 63072e6);
                var r = e.date.nows.year,
                    o = e.date.nows.month,
                    s = e.date.nows.day,
                    c = et.getFullYear(),
                    d = et.getMonth() + 1,
                    u = et.getDate();
                for (i = 0, j = lastdate - lastday + 5 + firstday; i <= j; i++)
                    if (i < firstday - 1) e.date.dates.push({
                        day: ""
                    });
                    else if (i >= lastdate + firstday) e.date.dates.push({
                    day: ""
                });
                else {
                    var p = 0;
                    (t < r && a < o || t == r && a == o && i - firstday + 1 < s || t >= c && a > d || t == c && a == d && i - firstday + 1 > u) && (p = 1), trues = [], trues[0] = t, trues[1] = a > 9 ? a : "0" + a, trues[2] = i - firstday + 1 > 9 ? i - firstday + 1 : "0" + (i - firstday + 1), trues = trues.join("-"), e.date.dates.push({
                        day: i - firstday + 1,
                        ture: trues,
                        color: p
                    })
                }
            }, e.datego = function (t) {
                tem = e.date.i + t, tem >= 0 && tem < 240 && (e.date.i += t, e.date.month += t, e.date.month > 12 ? (e.date.month = 1, e.date.year++) : e.date.month < 1 && (e.date.month = 12, e.date.year--), e.dateFn(e.date.year, e.date.month))
            }, e.dateFn(e.date.year, e.date.month), e.specialDate.selectDates = formatDatas(e.specialDate.selectDates), e.specialDate.selectDays = formatDatas(e.specialDate.selectDays), e.specialDate.selectWeekDays = formatDatas(e.specialDate.selectWeekDays)
        }]
    }
}),angular.module('app').directive('statisticsChargeuse', function () {
    var cmd = StatisticsDirective.createNew("public/js/directive/statisticsChargeuse.html", "chargeuse");
    return cmd;
}), angular.module("app").directive("statisticsCoupon", function () {
    var e = StatisticsDirective.createNew("public/js/directive/statisticsCoupon.html", "coupon");
    return e
}), angular.module("app").directive("statisticsCouponDetail", function () {
    var e = StatisticsDirective.createNew("public/js/directive/statisticsCouponDetail.html", "coupon");
    return e
}), angular.module("app").directive("statisticsPoint", function () {
    var e = StatisticsDirective.createNew("public/js/directive/statisticsPoint.html", "point");
    return e
}), angular.module("app").directive("statisticsPointDetail", function () {
    var e = StatisticsDirective.createNew("public/js/directive/statisticsPointDetail.html", "point");
    return e
}), angular.module("app").directive("statisticsRecharge", function () {
    var e = StatisticsDirective.createNew("public/js/directive/statisticsRecharge.html", "charge");
    return e
}), angular.module("app").directive("statisticsRechargeDetail", function () {
    var e = StatisticsDirective.createNew("public/js/directive/statisticsRechargeDetail.html", "charge");
    return e
}), angular.module("app").directive("statisticsRelationDetail", function () {
    var e = StatisticsDirective.createNew("public/js/directive/statisticsRelationDetail.html", "consumption");
    return e
}), angular.module("app").directive("statisticsRelation", function () {
    var e = StatisticsDirective.createNew("public/js/directive/statisticsRelation.html", "consumption");
    return e
}), angular.module("app").directive("statisticsSms", function () {
    var e = StatisticsDirective.createNew("public/js/directive/statisticsSms.html", "sms");
    return e
}), angular.module("app").directive("statisticsSmsDetail", function () {
    var e = StatisticsDirective.createNew("public/js/directive/statisticsSmsDetail.html", "sms");
    return e
}), angular.module("app").directive("statisticsUpgrade", function () {
    var e = StatisticsDirective.createNew("public/js/directive/statisticsUpgrade.html", "upgrade");
    return e
}), angular.module("app").directive("statisticsUpgradeDetail", function () {
    var e = StatisticsDirective.createNew("public/js/directive/statisticsUpgradeDetail.html", "upgrade");
    return e
}), angular.module("app").directive("statisticsOther", function () {
    var e = StatisticsDirective.createNew("public/js/directive/statisticsOther.html", "receivables");
    return e
}), angular.module("app").directive("statisticsOtherDetail", function () {
    var e = StatisticsDirective.createNew("public/js/directive/statisticsOtherDetail.html", "receivables");
    return e
}), angular.module("app").directive("finance", function () {
    var e = FinanceDirective.createNew("public/js/directive/finance.html", "finance");
    return e
}), angular.module("app").factory("CouponFactory", ["$http", function (e) {
    var t = {};
    return t.getAllCoupon = function () {
        return ajaxSendFn({}, "/coupon", "GET").result || []
    }, t.addCoupon = function (e) {
        return ajaxSendFn(JSON.stringify(e), "/coupon", "POST", 1)
    }, t
}]), angular.module("app").factory("memberGradeFactory", ["$http", function (e) {
    var t = {};
    return t.getAllGrade = function () {
        return ajaxSendFn({}, "/memberGrade", "GET").result || []
    }, t
}]), angular.module("app").factory("shopFactory", ["$http", function (e) {
    var t = {};
    return t.getAllShops = function () {
        return ajaxSendFn({
            state: 1003
        }, "/shops", "GET").result || []
    }, t
}]), angular.module("app").factory("deviceFactory", ["$http", function (e) {
    var t = {};
    return t.getAllDevices = function (e) {
        return ajaxSendFn(e || {}, "/activate", "GET").result || []
    }, t.jihuo = function (e) {
        var t = ajaxSendFn({}, "/activate", "POST");
        200 == t.code ? e(t) : alert(t.message)
    }, t
}]), angular.module("app").config(appRouteConfig);
var StatisticsDirective = {
        createNew: function (e, t) {
            var a = {
                restrict: "AE",
                replace: !0,
                scope: {
                    needSearch: "=",
                    page: "=",
                    count: "=",
                    total: "=",
                    post: "="
                },
                templateUrl: e
            };
            return a.controller = function (e, a, n) {
                e.view = {};
                var i = function (a) {
                    var i = "/statistics/" + t;
                    e.startTime = n("date")(e.post.startTime, "yyyy-MM-dd 00:00:00"), e.endTime = n("date")(e.post.endTime, "yyyy-MM-dd 23:59:59"), a.endTime = e.endTime, a.startTime = e.startTime, e.post.shopId ? (i += "/shop", "brand" !== e.post.shopId && (a.shopId = e.post.shopId), e.title = ajaxSendFn(a, i + "/num", "GET").result) : e.title = ajaxSendFn(a, i + "/all/num", "GET").result, e.post.type && (a.type = e.post.type);
                    var r = ajaxSendFn(a, i, "GET");
                    return e.needSearch = !1, 200 !== r.code ? (403e3 == r.code ? location.href = indexUrl : e.total = 0, void delete e.view.result) : (e.total = r.result.total, e.count = r.result.count, e.page = r.result.page, void(e.view.result = r.result))
                };
                e.$watch("page", function (t, a) {
                    t && a && t !== a && i({
                        page: e.page,
                        count: e.count
                    })
                }), e.$watch("needSearch", function (e) {
                    e && i({
                        count: 15
                    })
                }), e.change = function (t) {
                    e.needSearch = !0, e.post.type = t
                }
            }, a
        }
    },
    FinanceDirective = {
        createNew: function (e, t) {
            var a = {
                restrict: "AE",
                replace: !0,
                scope: {
                    needSearch: "=",
                    page: "=",
                    count: "=",
                    total: "=",
                    post: "=",
                    amount: "="
                },
                templateUrl: e
            };
            return a.controller = function (e, t, a) {
                e.view = {};
                var n = function (t) {
                    var n = "/finance";
                    if (e.startTime = a("date")(e.post.startTime, "yyyy-MM-dd 00:00:00"), e.endTime = a("date")(e.post.endTime, "yyyy-MM-dd 23:59:59"), t.endTime = e.endTime, t.startTime = e.startTime, e.post.shopId ? (n += "/shop", "brand" !== e.post.shopId && (t.shopId = e.post.shopId), e.amount = ajaxSendFn(t, "/finance/shop/stat", "GET").result) : e.amount = ajaxSendFn(t, "/finance/stat", "GET").result, e.post.reason && (t.reason = e.post.reason), e.post.selector) {
                        var i = ["", "1101", "1005", "1001", "1000"];
                        t.payMode = i[e.post.selector]
                    }
                    var r = ajaxSendFn(t, n, "GET");
                    return 200 !== r.code ? (403e3 == r.code ? location.href = indexUrl : e.total = 0, e.needSearch = !1, void delete e.view.result) : (e.total = r.result.total, e.count = r.result.count, e.page = r.result.page, e.view.result = r.result, void(e.needSearch = !1))
                };
                e.$watch("page", function (t, a) {
                    t && a && t !== a && n({
                        page: e.page,
                        count: e.count
                    })
                }), e.$watch("needSearch", function (e) {
                    e && n({
                        count: 15
                    })
                })
            }, a
        }
    };
app.controller("OrderCtr", ["$rootScope", "$scope", "$routeParams", function (e, t, a) {
    t.config.class = "doc", t.view = {
        orderId: a.orderId,
        item: ajaxSendFn({}, "/statistics/" + a.orderId, "GET").result || ""
    };
    var n = 0;
    for (i in t.view.item.strategy) t.view.item.strategy.hasOwnProperty(i) && n++;
    n > 3 && (t.view.item.show = 1)
}]);