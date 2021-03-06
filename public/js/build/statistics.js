angular.module('app').directive('buttons', function () {
    return {
        restrict: 'AE',
        replace: true,
        templateUrl: 'public/js/directive/buttons.html',
        controller: function ($scope) {
            $scope.posts.selector = 0;
            $scope.posts.couponId = "";
            $scope.posts.couponName = "所有";

            if ($scope.$root.config.staff.roleType == "K") {
                $scope.view.roleType = "K";
                $scope.posts.shopId = $scope.$root.config.staff.shopId|| $scope.$root.config.staff.guestId;
                $scope.posts.shopName = $scope.$root.config.staff.shopName;
                $scope.view.staffs = ajaxSendFn({}, "/reports/profits/staffs/shop", "GET").result || "";
            } 
          
            if ($scope.$root.config.staff.roleType == "M") {
                $scope.view.title = ajaxSendFn({}, "/reports/consumption", "GET").result || {};
            }
            $scope.select = function (index) {
                console.log(index)
                $scope.posts.selector = index;
                //$scope.direct = 0;
                /*历史累计*/
                if ($scope.$root.config.staff.roleType == "M") {
                    var TYPE = ["consumption", "receivables", "charge","chargeuse","upgrade", "gratuity", "groupon", "lottery", "mall", "point", "coupon", "reward", "sms","profits","marketing","card","promotes"];
                    $scope.view.title = ajaxSendFn({}, "/reports/" + TYPE[index], "GET").result || {};
                }
                delete $scope.posts.staffId;
                $scope.doSearch();
            };
            $scope.selectCoupon = function (id, name) {
                $scope.posts.couponId = id;
                $scope.posts.couponName = name;
                $scope.posts.check0 = 0;
                $scope.doSearch();
            }
            $scope.selectCard = function (id, name) {
                $scope.posts.cardId = id;
                $scope.posts.cardName = name;
                $scope.posts.check3 = 0;
                $scope.doSearch();
            }
            $scope.selectShop = function (o) {
                if (!o) {
                    $scope.posts.shopId = '';
                    $scope.posts.shopName = '所有';
                    $scope.posts.check = 0;

                } else {
                    $scope.posts.shopId = o.id;
                    $scope.posts.shopName = o.name;
                    $scope.posts.check = 0;
                    if ($scope.posts.selector == 13||$scope.posts.selector == 16) {
                        $scope.view.staffs = $scope.view.staff[$scope.posts.shopId]
                    }
                }
                delete $scope.posts.staffId;
                $scope.doSearch();
            }
            $scope.selectStaff = function (id, name) {
                $scope.posts.staffId = id;
                $scope.posts.staffName = name;
                $scope.posts.businessId = id;
                $scope.posts.businessName = name;
              
                $scope.posts.check2 = 0;
                $scope.doSearch();
            }
            $scope.doSearch = function () {
                if (($scope.posts.endTime - $scope.posts.startTime) / (1000 * 60 * 60 * 24) > 31) {
                    alert("起止时间不能超过30天");
                    return;
                }
                if ($scope.posts.shopId === undefined) {
                    $scope.posts.shopId == "";
                    $scope.view.direct = 1;
                    // alert("请先选择对应的门店");
                    return;
                } else if ($scope.posts.shopId == "") {
                    $scope.view.direct = 1;
                } else {
                    $scope.view.direct = 2;
                }
                $scope.view.needSearch = true;
            }
        }
    };
});

angular.module('app').directive('couponNew', ['CouponFactory', 'memberGradeFactory', 'shopFactory', '$filter', function (couponFac, memberGradeFac, shopFac, $filter) {
    return {
        restrict: 'EA',
        replace: true,
        scope: {
            addOk: '&',
            addFail: '&'
        },
        templateUrl: 'public/js/directive/couponNew.html',//添加券模态框
        link: function (scope, element, attrs) {
            scope.couponCategoryRev = {
                "901": "代金券",
                "902": "实物券",
                "904": "礼品券",
                "9011": "抵扣券",
                "903": "折扣券",
                "9012": "满减券"
            };
            scope.view = {
                allocates: ajaxSendFn({}, "/activity/allocate/8040", "GET").result || [],
                dishes: ajaxSendFn({}, "/dishes/usable", "GET").result || [],
                meals: ajaxSendFn({}, "/meals/usable", "GET").result || [],
                categories: ajaxSendFn({}, "/dishes/kinds/usable", "GET").result || []
            }
            scope.ruleCategory = getShareCategory("COUPON_CONSUME");
            scope.ruleCategory1 = getShareCategory("COUPON_CONSUME1");

            scope.couponTimeSel = couponRangeCategory;
            scope.today = $filter('date')(new Date(), "yyyy-MM-dd");
            scope.coupon = {
                dateRange: {}
            };
            scope.shops = ajaxSendFn({"state":"1002"}, "/shops", "GET").result || []
            if (!scope.shops.length) {
                alert("暂无可用的门店");
                scope.addOk();
                return;
            }
            scope.coupon.shops = [];
            scope.coupon.shared = [];
            scope.coupon.periods = [];
            scope.posts = {};
            scope.checkAllShop = false;
            var non = ajaxSendFn({}, "/nonParticipation/content", "GET");
            scope.nonParticipation = non.result ? non.result : {}; //非参与项

            scope.checkAllCatagory = function () {
                if (!scope.posts.catagoryAll) scope.coupon.shared = [];
                else {
                    angular.forEach(
                        scope.ruleCategory, function (value, key) {
                            this[key] = value.id;
                        }, scope.coupon.shared)
                }
                ;
            };

            scope.checkAllShops = function () {
                if (!scope.checkAllShop) {
                    scope.coupon.shops = [];
                }
                else {
                    angular.forEach(scope.shops, function (value, key) {
                        this[key] = value.id;
                    }, scope.coupon.shops);
                }
            }
            scope.getBusinessTime = function () {
                var timeType = {
                    "1001": "早市",
                    "1002": "午市",
                    "1003": "下午茶",
                    "1004": "晚市",
                    "1005": "宵夜"
                };
                var times = ajaxSendFn({}, "/businesstimes/all", "GET").result;
                scope.businessTime = getSubtimes(times, timeType);

                function getSubtimes(dataArr, typeArr) {
                    var result = {};
                    angular.forEach(dataArr, function (value, idx) {
                        if (typeArr[value]) {
                            this[value] = typeArr[value];
                        }
                    }, result);
                    return result;
                }
            }();

            /*datepicker*/
            var dftDate = new Date();
            dftDate.setFullYear(2017);
            dftDate.setMonth(1);
            dftDate.setDate(1);

            var today = new Date();
            today.setDate(today.getDate() - 1);
            today.setHours(23);
            today.setMinutes(59);
            today.setSeconds(59);
            var now = new Date();

            scope.dateOptions = {
                formatYear: 'yy',
                startingDay: 1,
                minDate: dftDate,
                maxDate: new Date(now.getTime() + 10 * 365 * 3600 * 24 * 1000),
            };
            scope.open = function ($event, a) {
                console.log('点击了')
                $event.preventDefault();
                $event.stopPropagation();
                scope.opened[a] = true;
            };
            scope.opened = {
                startDate: false,
                endDate: false
            };
            scope.disabled = function (date, mode) {
                return false;
            }
            
            scope.allocate={
                id:'',
                bought:false
            }
          
            /*datepicker*/

            scope.$watch('coupon.dateRangeCategory', function (newVal, oldVal) {
                if (newVal && newVal != oldVal) {
                    scope.coupon.dateRange = {};
                }
            });
            scope.settime = function (a, b) { //
                scope.coupon.periods[a] = scope.coupon.periods[a] ? null : b;
            }

            scope.addCouponInner = function () {
                $('.allocateChecked').each(function(){
                    if($(this).is(":checked")){
                        scope.allocate.id=$(this).attr('id');
                        if($(this).parent().siblings().find('.allocateBought').is(":checked")){
                            scope.allocate.bought=true
                        }
                    }
                })
                if(scope.allocate.id){
                    scope.coupon.allocate=scope.allocate;
                }else{
                    delete scope.coupon.allocate
                }
               
                // return false;
                //var time = [1001, 1002, 1003, 1004, 1005];
                //for (i = 1; i < 6; i++) {
                //    if (scope.coupon["time" + i]) scope.coupon.periods.push(time[i - 1]);
                //    delete scope.coupon["time" + i];
                //}
                //scope.coupon.periods = unique(scope.coupon.periods);

                if (scope.coupon.dateRange.endDate < scope.coupon.dateRange.startDate) {
                    alert("结束时间不能小于开始时间");
                    return;
                }
                if (scope.coupon.dateRange.endDate < today) {
                    alert("结束时间不得小于今天");
                    return;
                }
                if (scope.coupon.dateRange.startDate < today) {
                    alert("开始时间不能小于今天");
                    return;
                }
                if (scope.coupon.dateRange.startDate) {
                    scope.coupon.dateRange.startDate = $filter('date')(scope.coupon.dateRange.startDate, "yyyy-MM-dd 00:00:00");
                }
                ;
                if (scope.coupon.dateRange.endDate) {
                    scope.coupon.dateRange.endDate = $filter('date')(scope.coupon.dateRange.endDate, "yyyy-MM-dd 23:59:59");
                }
                ;
                if (scope.coupon.category === "901") {
                    scope.coupon.value = scope.coupon.currentAmount = 0;
                }
                if (scope.coupon.category === "903") {
                    scope.coupon.category = scope.coupon.category1;
                    scope.coupon.timesLimit = 1;
                }
                if (scope.coupon.category === "902") {
                    scope.coupon.category = scope.coupon.category1;
                }
                delete scope.coupon.category1;
                scope.coupon.dateRange.selectCategory = scope.coupon.dateRange.selectCategory || 'NONE';

                scope.coupon.shops = arrRemoveNullFN(scope.coupon.shops);
                scope.coupon.shared = arrRemoveNullFN(scope.coupon.shared);
                scope.coupon.periods = arrRemoveNullFN(scope.coupon.periods);
                //specialDate赋值
                if (scope.coupon.dateRange.selectCategory !== "NONE") {
                    if (scope.coupon.data.subType === "MANUAL_SELECT") {
                        var arr = arrayMap(objectKeys(scope.coupon.data.selectDates), function (data) {
                            return data + " 00:00:00";
                        });
                        if (!isEmptyObject(arr)) {
                            scope.coupon.dateRange.selectDates = arr;
                        }
                    } else if (scope.coupon.data.subType === "MONTH_DAYS") {
                        var arr = arrayMap(objectKeys(mapFilter(scope.coupon.data.selectDays, notNull)), parseInt);
                        if (!isEmptyObject(arr)) {
                            scope.coupon.dateRange.selectDays = arr;
                        }
                    } else if (scope.coupon.data.subType === "WEEKLY_DAY") {
                        var arr = arrayMap(objectKeys(mapFilter(scope.coupon.data.selectWeekDays, notNull)), parseInt);
                        if (!isEmptyObject(arr)) {
                            scope.coupon.dateRange.selectWeekDays = arr;
                        }
                    }
                }
                var json = angular.copy(scope.coupon);
                delete json.data;
                var result = couponFac.addCoupon(json);
                if (result.code == 200) {
                    scope.addOk();
                    //scope.coupon = scope.recoupon;
                } else {
                    scope.addFail({result: result});
                }
            }
        }

    }
        ;
}]);

angular.module('app').directive('myDatePicker', function () {
    return {
        restrict: 'EA',
        replace: true,
        scope: {
            data: '=',
            dateRange: '='
            //isEdit: '=',
        },
        templateUrl: 'public/js/directive/datepicker.html',
        controller: function ($scope) {
            $scope.topDateRangeCategory = [
                {type: 'PERMANENT', name: '永久有效'},
                {type: 'CONTINUOUS', name: '周期有效'},
                {type: 'BIRTHDAY', name: '生日相关'},
                {type: 'SELECTED_DATES', name: '指定日期'},
            ];
            var dftDate = new Date();
            dftDate.setFullYear(2000);
            dftDate.setMonth(1);
            dftDate.setDate(1);

            var today = new Date();
            today.setDate(today.getDate() - 1);
            today.setHours(23);
            today.setMinutes(59);
            today.setSeconds(59);
            var now = new Date();

            $scope.set = {
                periods: []
            };
            $scope.view = {
                periods: []
            };
            $scope.dateOptions = {
                formatYear: 'yy',
                startingDay: 1,
                minDate: dftDate,
                maxDate: new Date(now.getTime() + 10 * 365 * 3600 * 24 * 1000),
            };

            $scope.opened = {
                startDate: false,
                endDate: false
            };
            $scope.clickBtn = function (type) {
                $scope.data.dateType = type;
            }
            $scope.open = function ($event, a) {
                $event.preventDefault();
                $event.stopPropagation();
                $scope.opened[a] = true;
            };
            $scope.disabled = function (date, mode) {
                return false;
            }

            $scope.$watch('data.dateType', function (newVal, oldVal) {
                if (newVal && newVal !== oldVal) {
                    if (!$scope.data[newVal]) {
                        $scope.data[newVal] = {};
                    }
                    if (!$scope.data[newVal].dateRange) {
                        $scope.data[newVal].dateRange = {};
                    }
                    $scope.dateRange = $scope.data[newVal].dateRange;
                    if (newVal === 'CONTINUOUS') {
                        $scope.dateRange.startDate = parseDate($scope.dateRange.startDate || now);
                        $scope.dateRange.endDate = parseDate($scope.dateRange.endDate || now);
                    }
                }
            })

            if (!$scope.dateRange) {
                $scope.dateRange = {};
            }
            if (!$scope.data) {
                $scope.data = {};
            }

            if ($scope.data.dateType === 'CONTINUOUS') {
                $scope.dateRange.startDate = parseDate($scope.dateRange.startDate || now);
                $scope.dateRange.endDate = parseDate($scope.dateRange.endDate || now);
            }
            $scope.dateRangeCategory = dateRangeCategory;
        }
    };
});

angular.module('app').directive('searchByDate', ['shopFactory', '$location', function (shopFac, $location) {
    return {
        restrict: 'AE',
        replace: true,
        //scope: {
        //    //startTime: '=',
        //    //endTime: '=',
        //    //text: '=',
        //    needSearch: '=',
        //    //shopId: '=',
        //    direct:"=",
        //    //shops:"=",
        //    "posts":"=",
        //    "shops":"="
        //},
        templateUrl: 'public/js/directive/search.html?v=1',
        controller: function ($scope, $location) {
            $scope.init = function () {
                if (!$scope.posts.startTime) {
                    var date = new Date();
                    date.setDate(date.getDate() -1);
                    date.setHours(0);
                    date.setMinutes(0);
                    date.setSeconds(0);
                    $scope.posts.startTime = date;
                } else {
                    var start = new Date();
                    var ms = Date.parse($scope.posts.startTime);
                    start.setTime(ms);
                    $scope.posts.startTime = start;
                }
                if (!$scope.posts.endTime) {
                    var end = new Date();
                    $scope.posts.endTime = end;
                } else {
                    var end = new Date();
                    var ms = Date.parse($scope.posts.endTime);
                    end.setTime(end);
                    $scope.posts.endTime = end;
                }
                //$scope.posts.no = $scope.no;
            }
            $scope.init();
            $scope.doSearch = function () {
                if (($scope.posts.endTime - $scope.posts.startTime) / (1000 * 60 * 60 * 24) > 31) {
                    alert("起止时间不能超过30天");
                    return;
                }
                if ($scope.posts.shopId === undefined) {
                    // alert("请先选择对应的门店");
                    $scope.posts.shopId == "";
                    $scope.view.direct = 1;
                    // return;
                } else if ($scope.posts.shopId == "") {
                    $scope.view.direct = 1;
                } else {
                    $scope.view.direct = 2;
                }
                $scope.view.needSearch = true;
            }
        }
    };
}]);

angular.module('app').directive('mySpecialDate', function () {
    return {
        restrict: 'EA',
        replace: true,
        scope: {
            specialDate: '='
        },
        templateUrl: 'public/js/directive/specialDate.html',
        controller: function ($scope) {
            //特定日期类型
            $scope.specialDateRangeCategory = [
                {type: 'MANUAL_SELECT', name: '手动选择'},
                {type: 'MONTH_DAYS', name: '按月选择'},
                {type: 'WEEKLY_DAY', name: '按周选择'},
            ];

            $scope.week = [
                {idx:1, value:"周一"},
                {idx:2, value:"周二"},
                {idx:3, value:"周三"},
                {idx:4, value:"周四"},
                {idx:5, value:"周五"},
                {idx:6, value:"周六"},
                {idx:7, value:"周日"},
            ];

            $scope.clickBtn = function (type) {
                $scope.specialDate.subType = type;
            }

            $scope.range = function (start, end) {
                var arr = [];
                if (!end) {
                    end = start;
                    start = 0;
                }
                for (var i = start; i <= end; i++) {
                    arr.push(i)
                }
                return arr;
            }

            $scope.clickDay = function (idx, object) {
                var obj = object.hasOwnProperty(idx);
                if (obj) {
                    delete object[idx];
                } else {
                    object[idx] = true;
                }
            }

            if (!$scope.specialDate) {
                $scope.specialDate = {
                    selectDates: {},
                    selectWeekDays: {},
                    selectDays: {}
                };
            }

            // var dftDate = new Date();
            // dftDate.setFullYear(2000);
            // dftDate.setMonth(1);
            // dftDate.setDate(1);
            //
            // var today = new Date();
            // today.setDate(today.getDate()-1);
            // today.setHours(23);
            // today.setMinutes(59);
            // today.setSeconds(59);
            // var now = new Date();

            $scope.set = {
                periods: []
            };
            $scope.view = {
                periods: []
            };
            $scope.date = {
                now: new Date(),
                nows: {
                    year: new Date().getFullYear(),
                    day: new Date().getDate(),
                    month: new Date().getMonth() + 1
                },
                week: ["日", "一", "二", "三", "四", "五", "六"],
                dates: [],
                i: 0,
                year: new Date().getFullYear(),
                day: new Date().getDate(),
                month: new Date().getMonth() + 1
            };

            $scope.dateFn = function (y, m) { //日历选择器
                $scope.date.dates = [];
                var firstdate = new Date(0);
                firstdate.setYear(y);
                firstdate.setMonth(m - 1);
                //firstdate = y + "-" + m + "-" + "1" + " 00:00:00"
                //firstdate = new Date(firstdate);
                firstday = firstdate.getDay();
                ny = y;
                nm = m;
                if (m >= 12) { //
                    nm = 1;
                    ny++;
                } else {
                    nm++
                }
                nextMonth = firstdate;
                nextMonth.setYear(nm);
                nextMonth.setMonth(nm - 1);
                nextMonth = new Date(new Date(nextMonth).getTime() - 1000 * 60 * 60 * 24);
                lastdate = nextMonth.getDate();
                lastday = nextMonth.getDay();
                et = new Date(new Date().getTime() + 2 * 365 * 1000 * 60 * 60 * 24);
                var ty = $scope.date.nows.year,
                    tm = $scope.date.nows.month,
                    td = $scope.date.nows.day,
                    ey = et.getFullYear(),
                    em = et.getMonth() + 1,
                    ed = et.getDate();
                for (i = 0, j = lastdate - lastday + 5 + firstday; i <= j; i++) { //
                    if (i < (firstday - 1)) {
                        $scope.date.dates.push({
                            day: ""
                        });
                    } else if (i >= lastdate + firstday) {
                        $scope.date.dates.push({
                            day: ""
                        });
                    } else {
                        var color = 0;
                        if ((y < ty && m < tm) || (y == ty && m == tm && (i - firstday + 1) < td) || (y >= ey && m > em) || (y == ey && m == em && (i - firstday + 1) > ed)) color = 1;
                        trues = [];
                        trues[0] = y;
                        trues[1] = m > 9 ? m : "0" + m;
                        trues[2] = (i - firstday + 1) > 9 ? (i - firstday + 1) : "0" + (i - firstday + 1);
                        trues = trues.join('-');
                        $scope.date.dates.push({
                            day: i - firstday + 1,
                            ture: trues,
                            color: color
                        });
                    }
                }
            }

            $scope.datego = function (a) {
                tem = $scope.date.i + a;
                if (tem >= 0 && tem < 240) { //
                    $scope.date.i += a;
                    $scope.date.month += a;
                    if ($scope.date.month > 12) { //
                        $scope.date.month = 1;
                        $scope.date.year++;
                    } else if ($scope.date.month < 1) { //
                        $scope.date.month = 12;
                        $scope.date.year--;
                    }
                    $scope.dateFn($scope.date.year, $scope.date.month);
                }
            };
            $scope.dateFn($scope.date.year, $scope.date.month);

            $scope.specialDate.selectDates = formatDatas($scope.specialDate.selectDates);
            $scope.specialDate.selectDays = formatDatas($scope.specialDate.selectDays);
            $scope.specialDate.selectWeekDays = formatDatas($scope.specialDate.selectWeekDays);

        }
    };
});
angular.module('app').directive('statisticsChargeuse', function () {
    var cmd = StatisticsDirective.createNew("public/js/directive/statisticsChargeuse.html", "chargeuse");
    return cmd;
});
angular.module('app').directive('statisticsChargeuseDetail', function () {
    var cmd = StatisticsDirective.createNew("public/js/directive/statisticsChargeuseDetail.html", "chargeuse");
    return cmd;
});
angular.module('app').directive('statisticsCoupon', function () {
    var cmd = StatisticsDirective.createNew("public/js/directive/statisticsCoupon.html", "coupon");
    return cmd;
});
angular.module('app').directive('statisticsCouponDetail', function () {
    var cmd = StatisticsDirective.createNew("public/js/directive/statisticsCouponDetail.html?v=1", "coupon");
    return cmd;
});
angular.module('app').directive('statisticsPoint', function () {
    var cmd = StatisticsDirective.createNew("public/js/directive/statisticsPoint.html?v=1", "point");
    return cmd;
});
angular.module('app').directive('statisticsPointDetail', function () {
    var cmd = StatisticsDirective.createNew("public/js/directive/statisticsPointDetail.html?v=1", "point");
    return cmd;
});
angular.module('app').directive('statisticsRecharge', function () {
    var cmd = StatisticsDirective.createNew("public/js/directive/statisticsRecharge.html", "charge");
    return cmd;
});
angular.module('app').directive('statisticsRechargeDetail', function () {
    var cmd = StatisticsDirective.createNew("public/js/directive/statisticsRechargeDetail.html?v=1", "charge");
    return cmd;
});
angular.module('app').directive('statisticsRelationDetail', function () {
    var cmd = StatisticsDirective.createNew("public/js/directive/statisticsRelationDetail.html?v=1", "consumption");
    return cmd;
});
angular.module('app').directive('statisticsRelation', function () {
    var cmd = StatisticsDirective.createNew("public/js/directive/statisticsRelation.html", "consumption");
    return cmd;
});
angular.module('app').directive('statisticsSms', function () {
    var cmd = StatisticsDirective.createNew("public/js/directive/statisticsSms.html", "sms");
    return cmd;
});
angular.module('app').directive('statisticsSmsDetail', function () {
    var cmd = StatisticsDirective.createNew("public/js/directive/statisticsSmsDetail.html?v=1", "sms");
    return cmd;
});
angular.module('app').directive('statisticsUpgrade', function () {
    var cmd = StatisticsDirective.createNew("public/js/directive/statisticsUpgrade.html", "upgrade");
    return cmd;
});
angular.module('app').directive('statisticsUpgradeDetail', function () {
    var cmd = StatisticsDirective.createNew("public/js/directive/statisticsUpgradeDetail.html?v=1", "upgrade");
    return cmd;
});
angular.module('app').directive('statisticsOther', function () {
    var cmd = StatisticsDirective.createNew("public/js/directive/statisticsOther.html", "receivables");
    return cmd;
});
angular.module('app').directive('statisticsOtherDetail', function () {
    var cmd = StatisticsDirective.createNew("public/js/directive/statisticsOtherDetail.html?v=1", "receivables");
    return cmd;
});
angular.module('app').directive('statisticsGroupon', function () {
    var cmd = StatisticsDirective.createNew("public/js/directive/statisticsGroupon.html", "groupon");
    return cmd;
});
angular.module('app').directive('statisticsLottery', function () {
    var cmd = StatisticsDirective.createNew("public/js/directive/statisticsLottery.html", "lottery");
    return cmd;
});
angular.module('app').directive('statisticsLotteryDetail', function () {
    var cmd = StatisticsDirective.createNew("public/js/directive/statisticsLotteryDetail.html?v=1", "lottery");
    return cmd;
});
angular.module('app').directive('statisticsGratuity', function () {
    var cmd = StatisticsDirective.createNew("public/js/directive/statisticsGratuity.html", "gratuity");
    return cmd;
});
angular.module('app').directive('statisticsGratuityDetail', function () {
    var cmd = StatisticsDirective.createNew("public/js/directive/statisticsGratuityDetail.html?v=1", "gratuity");
    return cmd;
});
// 业务推广报表-start
angular.module('app').directive('statisticsPromotes', function () {
    var cmd = StatisticsDirective.createNew("public/js/directive/statisticsPromotes.html", "promotes");
    return cmd;
});
angular.module('app').directive('statisticsPromotesDetail', function () {
    var cmd = StatisticsDirective.createNew("public/js/directive/statisticsPromotesDetail.html?v=1", "promotes");
    return cmd;
});
// 业务推广报表-end
angular.module('app').directive('statisticsProfits', function () {
    var cmd = StatisticsDirective.createNew("public/js/directive/statisticsProfits.html", "profits");
    return cmd;
});
angular.module('app').directive('statisticsProfitsDetail', function () {
    var cmd = StatisticsDirective.createNew("public/js/directive/statisticsProfitsDetail.html?v=1", "profits");
    return cmd;
});
angular.module('app').directive('statisticsMall', function () {
    var cmd = StatisticsDirective.createNew("public/js/directive/statisticsLottery.html", "mall");
    return cmd;
});
angular.module('app').directive('statisticsMallDetail', function () {
    var cmd = StatisticsDirective.createNew("public/js/directive/statisticsLotteryDetail.html?v=1", "mall");
    return cmd;
});
angular.module('app').directive('statisticsReward', function () {
    var cmd = StatisticsDirective.createNew("public/js/directive/statisticsReward.html", "reward");
    return cmd;
});
angular.module('app').directive('statisticsRewardDetail', function () {
    var cmd = StatisticsDirective.createNew("public/js/directive/statisticsRewardDetail.html?v=1", "reward");
    return cmd;
});
angular.module('app').directive('statisticsMarketing', function () {
    var cmd = StatisticsDirective.createNew("public/js/directive/statisticsMarketing.html", "marketing");
    return cmd;
});
angular.module('app').directive('statisticsMarketingDetail', function () {
    var cmd = StatisticsDirective.createNew("public/js/directive/statisticsMarketingDetail.html?v=1", "marketing");
    return cmd;
});
angular.module('app').directive('statisticsCard', function () {
    var cmd = StatisticsDirective.createNew("public/js/directive/statisticsCard.html", "card");
    return cmd;
});
angular.module('app').directive('statisticsCardDetail', function () {
    var cmd = StatisticsDirective.createNew("public/js/directive/statisticsCardDetail.html?v=1", "card");
    return cmd;
});
angular.module('app').factory('CouponFactory', ['$http', function ($http) {
    var couponObj = {};
    couponObj.getAllCoupon = function () {
        return ajaxSendFn({}, '/coupon', 'GET').result || [];
    };
    couponObj.addCoupon = function (coupon) {
        return ajaxSendFn(JSON.stringify(coupon), "/coupon", "POST", 1);
    };
    return couponObj;
}]);

angular.module('app').factory('memberGradeFactory', ['$http', function (argument) {
    var memberGrade = {};

    memberGrade.getAllGrade = function () {
        return ajaxSendFn({}, '/memberGrade', 'GET').result || [];
    }

    return memberGrade;
}]);

angular.module('app').factory('shopFactory', ['$http', function (argument) {
    var shopObj = {};

    shopObj.getAllShops = function () {
        return ajaxSendFn({}, "/statistics/shop", "GET").result || [];
    }

    return shopObj;
}]);

angular.module('app').factory('deviceFactory', ['$http', function ($http) {
    var deviceObj = {};

    deviceObj.getAllDevices = function (param) {
        return ajaxSendFn(param || {}, "/activate", "GET").result || [];
    }
    deviceObj.jihuo = function (cb) {
        var data = ajaxSendFn({}, "/activate", "POST");
        if (data.code == 200) {
            cb(data);
        } else {
            alert(data.message);
        }
    }

    return deviceObj;
}]);
angular.module('app').config(appRouteConfig);
//用于生成统计类指令
var StatisticsDirective = {
    /**
     * 构造一个Angularjs指令
     * @method createNew
     * @param  {objcect} statisFac    统计工厂，向后台请求数据
     * @param  {string}  tmplateFile  指令对应的模块文件
     * @param  {string}  path         子页面对应路由路径
     * @param  {string}  urlFunc      统计工厂中的方法名，不同指令对应不同的方法
     * @param  {object}  $routeParams 路由参数
     * @return {[type]}               Angularjs指令
     */
    createNew: function (tmplateFile, urlKey) {
   
        var cmd = {
            restrict: "AE",
            replace: true,
            scope: {
                needSearch: '=',
                page: '=',
                count: '=',
                total: '=',
                post: "="
            },
            templateUrl: tmplateFile
        };
        cmd.controller = function ($scope, $location, $filter) {
            $scope.ConsumeTypeCategory = ConsumeTypeCategory;
            $scope.view = {};

            var ajaxFn = function (param) {
                var url = "/reports/" + urlKey;
                $scope.startTime = $filter('date')($scope.post.startTime, "yyyy-MM-dd 00:00:00");
                $scope.endTime = $filter('date')($scope.post.endTime, "yyyy-MM-dd 23:59:59");
                param.endTime = $scope.endTime;
                param.startTime = $scope.startTime;
               
             
                if ($scope.post.couponId) {
                    param.couponId = $scope.post.couponId;
                }
                console.log('执行了')
                console.log('urlKey----'+urlKey+'===chargeuse')
                console.log('门店')
                console.log( $scope.post.staffId&&$scope.post.shopId)
               
                 if (urlKey == 'groupon') {
                    $scope.title = ajaxSendFn(param, url + "/summary", "GET").result;
                    url += "/detail/shop";
                } else if (urlKey == 'gratuity') {
                    // 打赏 
                    if ($scope.post.staffId&&$scope.post.shopId) {
                        param.shopId = $scope.post.shopId;
                        $scope.title = ajaxSendFn(param, "/reports/gratuity/summary/staff/" + $scope.post.staffId, "GET").result;
                        param.staffId = $scope.post.staffId;
                        url += "/detail/shop";
                    }else if (Boolean($scope.post.shopId)&&!$scope.post.staffId) {
                        param.shopId = $scope.post.shopId;
                        $scope.title = ajaxSendFn(param, "/reports/gratuity/summary/shop", "GET").result;
                        url += "/detail/shop";
                    }
                     else {
                        $scope.title = ajaxSendFn(param, url + "/summary", "GET").result;
                        url += "/statistics/shop";
                    }
                }else if (urlKey == 'promotes') {
                    if ($scope.post.staffId&&$scope.post.staffId) {
                        param.shopId = $scope.post.shopId;
                        $scope.title = ajaxSendFn(param, "/reports/promotes/summary/staff/" + $scope.post.staffId, "GET").result;
                        param.staffId = $scope.post.staffId;
                        url += "/detail/shop";
                    }else if (Boolean($scope.post.shopId)&&$scope.post.staffId) {
                        param.shopId = $scope.post.shopId;
                        $scope.title = ajaxSendFn(param, "/reports/promotes/summary/shop", "GET").result;
                        url += "/detail/shop";
                    } else {
                        $scope.title = ajaxSendFn(param, url + "/summary", "GET").result;
                        url += "/statistics/shop";
                    }
                } else if (urlKey == 'profits') {
                    if ($scope.post.staffId) {
                        param.shopId = $scope.post.shopId;
                        $scope.title = ajaxSendFn(param, "/reports/profits/summary/staff/" + $scope.post.staffId, "GET").result;
                        param.staffId = $scope.post.staffId;
                        url += "/detail/shop";
                    } else if ($scope.post.shopId) {
                        param.shopId = $scope.post.shopId;
                        $scope.title = ajaxSendFn(param, "/reports/profits/summary/shop", "GET").result;
                        url += "/statistics/staff";
                    } else {
                        $scope.title = ajaxSendFn(param, url + "/summary", "GET").result;
                        url += "/statistics/shop";
                    }
                } else if (urlKey == 'marketing') {
                    $scope.business=[{id:"8001",name:"费率分成"},{id:"8002",name:"打赏小红花"},{id:"8003",name:"用户分销赏金"},{id:"8004",name:"用户分销佣金"}]
                    if(!$scope.post.shopId){
                       delete $scope.post.businessId
                       delete $scope.post.shopId
                    }
                    if ($scope.post.businessId) {
                        param.shopId = $scope.post.shopId;
                        $scope.title = ajaxSendFn(param, "/reports/marketing/summary/business/" + $scope.post.staffId, "GET").result;
                        if(!$scope.post.shopId){
                            $scope.post.businessId=''
                        }
                        param.type = $scope.post.businessId;
                        url += "/detail/shop";
                    } else if ($scope.post.shopId) {
                        param.shopId = $scope.post.shopId;
                        $scope.title = ajaxSendFn(param, "/reports/marketing/summary/shop", "GET").result;
                        url += "/statistics/business";
                    } else {
                        $scope.title = ajaxSendFn(param, url + "/summary", "GET").result;
                        url += "/statistics/shop";
                    }
                } else if (urlKey == 'card') {
                    if( $scope.post.shopId ){
                        if($scope.post.cardId){
                            param.cardId = $scope.post.cardId;
                        }
                        param.shopId = $scope.post.shopId;
                        $scope.title = ajaxSendFn(param, "/reports/card/summary/shop", "GET").result;
                        url += "/detail/shop";
                    }else {
                        if($scope.post.cardId){
                            param.cardId = $scope.post.cardId;
                        }
                        $scope.title = ajaxSendFn(param, url + "/summary", "GET").result;
                        url += "/statistics/shop";
                    }
                } // 充值卡门店结算
                else if (urlKey == 'chargeuse') {
                    if (Boolean($scope.post.shopId)){  
                        param.shopId = $scope.post.shopId;
                        url += "/detail/shop";
                    }else{
                        url += "/statistics/shop";
                    }
                    // $scope.title = ajaxSendFn(param, "/reports/chargeuse/statistics/shop", "GET").result;
                }else  if ($scope.post.shopId) {
                   
                    param.shopId = $scope.post.shopId
                    $scope.title = ajaxSendFn(param, url + "/summary/shop", "GET").result;
                    url += "/detail/shop";
                } else  {
                    //title2
                    $scope.title = ajaxSendFn(param, url + "/summary", "GET").result;
                    url += "/statistics/shop";
                }

                if ($scope.post.type) {
                    param.type = $scope.post.type;
                }
                // 请求表格数据
                var data = ajaxSendFn(param, url, "GET");
                $scope.needSearch = false;
                if (data.code !== 200) {
                    if (data.code == 403000) {
                        location.href = indexUrl;
                    } else {
                        $scope.total = 0;
                    }
                    delete $scope.view.result;
                    return;
                }
                $scope.total = data.result.total;
                $scope.count = data.result.count;
                $scope.page = data.result.page;
                $scope.view.result = data.result;
            }

            /**
             * [$watch 监视页码变动，并向后台发送请求获取新数据]
             * @method $watch
             * @param  {number} 'page'   请求的页码数
             * @param  {function} function 回调函数
             * @return {[type]}          [description]
             */
            $scope.$watch('page', function (newVal, oldVal) {
                if (newVal && oldVal && newVal !== oldVal) {
                    ajaxFn({page: $scope.page, count: $scope.count});
                }
            });

            /**
             * 监视needSearch是否变动
             * @method $watch
             * @param  {string} 'needSearch' 是否需要搜索
             * @param  {function} function     (value        回调函数
             * @param direct 0-初始状态 1-总店 2-单店
             * @return {[type]}              [description]
             */
            $scope.$watch('needSearch', function (value) {
                if (value) {
                    ajaxFn({count: 20});
                    //var param = {
                    //    endTime: $scope.endTime,
                    //    startTime: $scope.startTime
                    //};
                    //if ($scope.post.shopId) {
                    //    param.shopId = $scope.post.shopId;
                    //}
                    //var data = ajaxSendFn(param, "/order/" + urlKey + "/statall", "GET");
                    //if (data.code == 200) {
                    //    $scope.view.collection = data.result;
                    //}
                }
            });
            $scope.change = function (type) {
                $scope.needSearch = true;
                $scope.post.type = type;
            }
            $scope.goto = function (url) {
                window.open(location.pathname + "#/" + url, '_blank');
            }
        }

        return cmd;
    }
};

function appRouteConfig($routeProvider) { //路由规则
    $routeProvider.when('/doc/detail/:orderId', {       //订单查询
        templateUrl: "admin/doc/detail.html",
        controller: "OrderCtr"
    })
    $routeProvider.when('/achieve', {       //订单查询
        templateUrl: "admin/achievements/index.html",
        controller: "AchievementsCtr"
    })
    $routeProvider.when('/achieve/detail', {       //订单查询
        templateUrl: "admin/achievements/detail.html",
        controller: "AchievementsDetailCtr"
    })
}

app.controller('OrderCtr', ['$rootScope', '$scope', '$routeParams', function ($rootScope, $scope, $routeParams) { //shoplist over
    $scope.config.class = "doc";
    $scope.view = {
        orderId: $routeParams.orderId,
        item: ajaxSendFn({}, "/statistics/" + $routeParams.orderId, "GET").result || "",
        type: {
            "901": "惠买单消费",
            "909": "快速收款",
            "902": "充值",
            "904": "会员升级",
            "905": "砍价购买",
            "906": "抽奖购买",
            "907": "打赏",
            "903": "商城购买"
        }
    }
}
]);
app.controller('AchievementsDetailCtr', ['$rootScope', '$scope', '$routeParams','$filter', function ($rootScope, $scope, $routeParams,$filter) { //shoplist over
    $scope.config.class = "achieve";
    var json = angular.copy($routeParams);
    delete json.shopName;
    delete json.commentTagId;
    $scope.post = $routeParams;
    var url = "/reports/comment/detail/shop";
    if ($scope.post.commentTagId) {
        url = '/reports/comment/detail/tag/' + $scope.post.commentTagId
    }
    json.endTime = $filter('date')($scope.post.endTime, "yyyy-MM-dd 23:59:59");

    $scope.view = {
        data: ajaxSendFn(json, url, "GET").result || ""
    };
    $scope.pageChange = function () {
        json.page = $scope.view.data.page;
        $scope.view.data = ajaxSendFn(json, url, "GET").result || ""
    }

}]);
app.controller('AchievementsCtr', ['$rootScope', '$scope', '$routeParams', '$filter', function ($rootScope, $scope, $routeParams, $filter) { //shoplist over
    $scope.config.class = "achieve";
    $scope.view = {
        num: ajaxSendFn({}, "/reports/comment", "GET").result || {}
    };
    $scope.posts = {};

    var date = new Date();
    $scope.posts.endTime = date;
    var date1 = new Date();
    date1.setDate(date.getDate() - 30);
    $scope.posts.startTime = date1;
  
    if ($scope.$root.config.staff.roleType == "K") {
        $scope.view.roleType = "K";
        $scope.posts.shopId = $scope.$root.config.staff.shopId|| $scope.$root.config.staff.guestId;
        $scope.posts.shopName = $scope.$root.config.staff.shopName;
        $scope.view.staffs = ajaxSendFn({}, "/reports/profits/staffs/shop", "GET").result || "";
    } else {
        $scope.view.shops = ajaxSendFn({}, "/statistics/shop", "GET").result || [];
        $scope.view.staff = ajaxSendFn({}, "/reports/profits/staffs", "GET").result || ""

    }
 
    $scope.selectShop = function (o) {
        if (!o) {
            $scope.posts.shopId = '';
            $scope.posts.shopName = '所有';
            $scope.posts.check = 0;

        } else {
            $scope.posts.shopId = o.id;
            $scope.posts.shopName = o.name;
            $scope.posts.check = 0;
        }
        $scope.view.staffs = $scope.view.staff[$scope.posts.shopId]
        delete $scope.posts.staffId;
        delete $scope.posts.staffName;
    }
    $scope.selectStaff = function (id, name) {
        $scope.posts.staffId = id;
        $scope.posts.staffName = name;
        $scope.posts.businessId = id;
        $scope.posts.businessName = name;
        $scope.posts.check2 = 0;
    }
    $scope.doSearchFn = function (page) {
        if (Math.abs($scope.posts.endTime - $scope.posts.startTime) / 86400000 > 30) {
            alert("时间不超过30天");
            return;
        }
        var json = {};
        json.startTime = $filter('date')($scope.posts.startTime, "yyyy-MM-dd");
        json.endTime = $filter('date')($scope.posts.endTime, "yyyy-MM-dd 23:59:59");
        var url = "/reports/comment/statistics";
        var url1 = "/reports/comment/summary";

        if ($scope.posts.shopId) {
            json.shopId = $scope.posts.shopId;
            if ($scope.posts.staffId && $scope.posts.staffId !== 'all') {
                json.staffId = $scope.posts.staffId;
                url = "/reports/comment/detail/shop";
                url1 += "/staff"
            } else {
                url += "/staff";
                url1 += "/shop";
            }
        } else if ($scope.posts.staffId == 'all') {
            url += "/staff";
            url1 += "/staff"
        } else {
            url += "/shop";
        }
        if (page) {
            json.page = page;
        }
        $scope.view.data = ajaxSendFn(json, url, "GET").result || {};
        $scope.view.title = ajaxSendFn(json, url1, "GET").result || {};
        if ($scope.posts.staffId != 'all' && $scope.posts.staffId != undefined && $scope.posts.staffId != '') {
            $scope.view.direct = 3;
        } else if ($scope.posts.shopId) {
            $scope.view.direct = 2;
        } else if ($scope.posts.staffId == 'all') {
            $scope.view.direct = 2;
        } else {
            $scope.view.direct = 1;
        }
    };
    $scope.redirectTagFn = function (tagId) {
        var str = "?";
        if (tagId) {
            str += "commentTagId=" + tagId + "&";
        }
        if ($scope.posts.startTime) {
            str += "startTime=" + $filter('date')($scope.posts.startTime, "yyyy-MM-dd");
        }
        if ($scope.posts.endTime) {
            str += "&endTime=" + $filter('date')($scope.posts.endTime, "yyyy-MM-dd");
        }
        if ($scope.posts.shopId) {
            str += "&shopId=" + $scope.posts.shopId;
            str += "&shopName=" + $scope.posts.shopName;
        }
        if ($scope.posts.staffId && $scope.posts.staffId != 'all') {
            str += "&staffId=" + $scope.posts.staffId;
        }
        window.open("admin.html#/achieve/detail" + str, '_blank');

    }
    $scope.pageChange = function () {
        $scope.doSearchFn($scope.view.data.page);
    }
}
]);
angular.module('app').directive('push', function () {
    return {
        restrict: 'EA',
        replace: true,
        scope: {
            hand: '='
        },
        templateUrl: 'public/js/directive/push.html',
        controller: function ($scope) {
            if ($scope.hand == "102") {
                $scope.hand_click = true;
                $scope.message = true;
                $scope.wx = true;
            } else if ($scope.hand == "104") {
                $scope.hand_click = true;
                $scope.message = true;
            } else if ($scope.hand == "103") {
                $scope.hand_click = true;
                $scope.wx = true;
            }
            /* switch ($scope.hand){
             case "102":
             $scope.hand_click = true;
             $scope.message = true;
             $scope.wx = true;
             break;
             case "104":
             $scope.hand_click = true;
             $scope.message = true;
             break;
             case "103":
             $scope.hand_click = true;
             $scope.wx = true;
             break;
             }*/
            $scope.change = function () {
                if ($scope.hand_click) {
                    if ($scope.message && $scope.wx) {
                        $scope.hand = "102";
                    } else if ($scope.message) {
                        $scope.hand = "104";
                    } else if ($scope.wx) {
                        $scope.hand = "103";
                    } else {
                        $scope.hand = "";
                    }
                } else {
                    $scope.hand = "";
                }
            };
            $scope.$watch("hand", function () {
                if ($scope.hand == "101") {
                    $scope.wx = "";
                    $scope.message = "";
                    $scope.hand_click = "";
                }

            })
        }
    }
});
angular.module('app').directive('picSend', function () {
    return {
        restrict: 'EA',
        replace: true,
        scope: {
            picUrl: '=',
            pic:'='
        },
        templateUrl: 'public/js/directive/pic.html?v=2',
        controller: function ($scope,$sce) {
            $scope.view = {
                materials: ajaxSendFn({count: 10}, "/materials", "GET").result || [],
                groups: ajaxSendFn({}, "/materials/group", "GET").result || [],
                select: -1,
                leftIndex: -2,
                timestamp: 'pic-select'
            };
            $scope.post = {};
            $scope.openFn = function (e) {
                $("#" + $scope.view.timestamp).modal("show")
            }
            $scope.changeFn = function (index) {
                if ($scope.view.select == index) {
                    $scope.view.select = -1;
                } else {
                    $scope.view.select = index;
                }
            }
            $scope.imgUpload = function (t) {
                if (t.files[0].size > 5 * 1024 * 1024) {
                    alert("图片不得大于5M，图片格式为png,jpg,jpeg,bmp");
                    return;
                }
                POSTurl = basicUrl + "/materials?";
                options = {
                    url: POSTurl + sortUrl(),
                    type: "POST",
                    success: function (data) {
                        if (data.code === 200) {
                            $scope.$apply(function () {
                                $scope.view.materials = ajaxSendFn({count: 10}, "/materials", "GET").result;
                                $scope.view.select = 0;
                            });
                        } else {
                            alert(data.message);
                        }

                    }
                };
                $("#iimgform").ajaxSubmit(options);
            };
            $scope.groupList = function (index) {
                url = "/materials";
                if (index >= 0) {
                    url = "/materials/group/" + $scope.view.groups[index].id + "/materials"
                }
                if (index == -1) {
                    url = "/materials/group/materials";
                }
                $scope.view.materials = ajaxSendFn({count: 10}, url, "GET").result;
                $scope.view.leftIndex = index;

            }
            $scope.sendGroup = function () {
                var data = ajaxSendFn({name: $scope.post.name}, "/materials/group", "POST");
                if (data.code === 200) {
                    $scope.view.checkName = false;
                    $scope.view.groups = ajaxSendFn({}, "/materials/group", "GET").result;
                } else {
                    alert(data.message);
                }
            }
            $scope.pageChange = function () {
                url = "/materials";
                if ($scope.view.leftIndex >= 0) {
                    url = "/materials/group/" + $scope.view.groups[$scope.view.leftIndex].id + "/materials"
                }
                if ($scope.view.leftIndex == -1) {
                    url = "/materials/group/materials";
                }
                var json = {page: $scope.view.materials.page, count: $scope.view.materials.count};
                $scope.view.materials = ajaxSendFn(json, url, "GET").result;
            };
            $scope.submitFn = function () {
                if ($scope.view.select >= 0) {
                    $scope.picUrl = $scope.view.materials.items[$scope.view.select].url;
                    $scope.pic = $scope.view.materials.items[$scope.view.select];
                } else {
                    $scope.picUrl = "";
                    $scope.pic = "";
                }
                $("#" + $scope.view.timestamp).modal("hide");

            }


        }
    }
});
angular.module('app').directive('picSend2', function () {
    return {
        restrict: 'EA',
        replace: true,
        scope: {
            picUrl2: '='
        },
        templateUrl: 'public/js/directive/pic2.html?v=2',
        controller: function ($scope,$sce) {
            $scope.view = {
                materials: ajaxSendFn({count: 10}, "/materials", "GET").result || [],
                groups: ajaxSendFn({}, "/materials/group", "GET").result || [],
                select: -1,
                leftIndex: -2,
                timestamp: 'pic-select2'
            };
            $scope.post = {};
            $scope.openFn = function (e) {
                $("#" + $scope.view.timestamp).modal("show")
            }
            $scope.changeFn = function (index) {
                if ($scope.view.select == index) {
                    $scope.view.select = -1;
                } else {
                    $scope.view.select = index;
                }
            }
            $scope.imgUpload = function (t) {
                if (t.files[0].size > 5 * 1024 * 1024) {
                    alert("图片不得大于5M，图片格式为png,jpg,jpeg,bmp");
                    return;
                }
                POSTurl = basicUrl + "/materials?";
                options = {
                    url: POSTurl + sortUrl(),
                    type: "POST",
                    success: function (data) {
                        if (data.code === 200) {
                            $scope.$apply(function () {
                                $scope.view.materials = ajaxSendFn({count: 10}, "/materials", "GET").result;
                                $scope.view.select = 0;
                            });
                        } else {
                            alert(data.message);
                        }

                    }
                };
                $("#iimgform").ajaxSubmit(options);
            };
            $scope.groupList = function (index) {
                url = "/materials";
                if (index >= 0) {
                    url = "/materials/group/" + $scope.view.groups[index].id + "/materials"
                }
                if (index == -1) {
                    url = "/materials/group/materials";
                }
                $scope.view.materials = ajaxSendFn({count: 10}, url, "GET").result;
                $scope.view.leftIndex = index;

            }
            $scope.sendGroup = function () {
                var data = ajaxSendFn({name: $scope.post.name}, "/materials/group", "POST");
                if (data.code === 200) {
                    $scope.view.checkName = false;
                    $scope.view.groups = ajaxSendFn({}, "/materials/group", "GET").result;
                } else {
                    alert(data.message);
                }
            }
            $scope.pageChange = function () {
                url = "/materials";
                if ($scope.view.leftIndex >= 0) {
                    url = "/materials/group/" + $scope.view.groups[$scope.view.leftIndex].id + "/materials"
                }
                if ($scope.view.leftIndex == -1) {
                    url = "/materials/group/materials";
                }
                var json = {page: $scope.view.materials.page, count: $scope.view.materials.count};
                $scope.view.materials = ajaxSendFn(json, url, "GET").result;
            };
            $scope.submitFn = function () {
                if ($scope.view.select >= 0) {
                    $scope.picUrl2 = $scope.view.materials.items[$scope.view.select].url;
                } else {
                    $scope.picUrl2 = "";
                }
                $("#" + $scope.view.timestamp).modal("hide");

            }


        }
    }
});
angular.module('app').directive('vidSend', function () {
    return {
        restrict: 'EA',
        replace: true,
        scope: {
            vidId: '=',
            vidUrl: '=',
            vid:'='
        },
        templateUrl: 'public/js/directive/video.html?v=2',
        controller: function ($scope,$sce) {
            $scope.view = {
                materials: ajaxSendFn({count: 10}, "/videos", "GET").result || [],
                groups: ajaxSendFn({}, "/videos/group", "GET").result || [],
                select: -1,
                leftIndex: -2,
                timestamp: new Date().getTime()
            };
            $scope.post = {};
            $scope.openFn = function (e) {
                $("#" + $scope.view.timestamp).modal("show")
            }
            $scope.changeFn = function (index) {
                if ($scope.view.select == index) {
                    $scope.view.select = -1;
                } else {
                    $scope.view.select = index;
                }
            }
            $scope.videoUrlFun = function(url){
                var urlFun = $sce.trustAsResourceUrl(url);
                return urlFun;
            };
            $scope.imgUpload = function (t) {
                if (t.files[0].size > 10 * 1024 * 1024) {
                    alert("视频不得大于10M");
                    return;
                }
                POSTurl = basicUrl + "/videos?";
                options = {
                    url: POSTurl + sortUrl(),
                    type: "POST",
                    success: function (data) {
                        if (data.code === 200) {
                            $scope.$apply(function () {
                                $scope.view.materials = ajaxSendFn({count: 10}, "/videos", "GET").result;
                                $scope.view.select = 0;
                            });
                        } else {
                            alert(data.message);
                        }

                    }
                };
                $("#iimgform").ajaxSubmit(options);
            };
            $scope.groupList = function (index) {
                url = "/videos";
                if (index >= 0) {
                    url = "/videos/group/" + $scope.view.groups[index].id + "/videos"
                }
                if (index == -1) {
                    url = "/videos/group/videos";
                }
                $scope.view.materials = ajaxSendFn({count: 10}, url, "GET").result;
                $scope.view.leftIndex = index;

            }
            $scope.sendGroup = function () {
                var data = ajaxSendFn({name: $scope.post.name}, "/videos/group", "POST");
                if (data.code === 200) {
                    $scope.view.checkName = false;
                    $scope.view.groups = ajaxSendFn({}, "/videos/group", "GET").result;
                } else {
                    alert(data.message);
                }
            }
            $scope.pageChange = function () {
                url = "/videos";
                if ($scope.view.leftIndex >= 0) {
                    url = "/videos/group/" + $scope.view.groups[$scope.view.leftIndex].id + "/videos"
                }
                if ($scope.view.leftIndex == -1) {
                    url = "/videos/group/videos";
                }
                var json = {page: $scope.view.materials.page, count: $scope.view.materials.count};
                $scope.view.materials = ajaxSendFn(json, url, "GET").result;
            };
            $scope.submitFn = function () {
                if ($scope.view.select >= 0) {
                    $scope.vidUrl = $scope.view.materials.items[$scope.view.select].url;
                    $scope.vidId = $scope.view.materials.items[$scope.view.select].id;
                    $scope.vid = $scope.view.materials.items[$scope.view.select];
                } else {
                    $scope.vidId = "";
                    $scope.vidUrl = "";
                    $scope.vid = ""
                }
                $("#" + $scope.view.timestamp).modal("hide");

            }


        }
    }
});
angular.module('app').directive('picsSend', function () {
    return {
        restrict: 'EA',
        replace: true,
        scope: {
            picUrls: '='
        },
        templateUrl: 'public/js/directive/pics.html?v=1',
        controller: function ($scope) {
            $scope.view = {
                materials: ajaxSendFn({count: 10}, "/materials", "GET").result || [],
                groups: ajaxSendFn({}, "/materials/group", "GET").result || [],
                select: -1,
                leftIndex: -2,
                chosen: ''
            };
            $scope.post = {};
            $scope.openFn = function (index) {
                $scope.view.chosen = index;
                $("#pic-select1").modal("show");
            }
            $scope.changeFn = function (index) {
                if ($scope.view.select == index) {
                    $scope.view.select = -1;
                } else {
                    $scope.view.select = index;
                }
            }

            $scope.imgUpload = function (t) {
                if (t.files[0].size > 5 * 1024 * 1024) {
                    alert("图片不得大于5M，图片格式为png,jpg,jpeg,bmp");
                    return;
                }
                POSTurl = basicUrl + "/materials?";
                options = {
                    url: POSTurl + sortUrl(),
                    type: "POST",
                    success: function (data) {
                        if (data.code === 200) {
                            $scope.$apply(function () {
                                $scope.view.materials = ajaxSendFn({count: 10}, "/materials", "GET").result;
                                $scope.view.select = 0;
                            });
                        } else {
                            alert(data.message);
                        }

                    }
                };
                $("#iimgform").ajaxSubmit(options);
            };
            $scope.groupList = function (index) {
                url = "/materials";
                if (index >= 0) {
                    url = "/materials/group/" + $scope.view.groups[index].id + "/materials"
                }
                if (index == -1) {
                    url = "/materials/group/materials";
                }
                $scope.view.materials = ajaxSendFn({count: 10}, url, "GET").result;
                $scope.view.leftIndex = index;

            }
            $scope.sendGroup = function () {
                var data = ajaxSendFn({name: $scope.post.name}, "/materials/group", "POST");
                if (data.code === 200) {
                    $scope.view.checkName = false;
                    $scope.view.groups = ajaxSendFn({}, "/materials/group", "GET").result;
                } else {
                    alert(data.message);
                }
            }
            $scope.pageChange = function () {
                url = "/materials";
                if ($scope.view.leftIndex >= 0) {
                    url = "/materials/group/" + $scope.view.groups[$scope.view.leftIndex].id + "/materials"
                }
                if ($scope.view.leftIndex == -1) {
                    url = "/materials/group/materials";
                }
                var json = {page: $scope.view.materials.page, count: $scope.view.materials.count};
                $scope.view.materials = ajaxSendFn(json, url, "GET").result;
            };
            $scope.addImgFn = function () {
                $scope.picUrls.push({});
            };
            $scope.removeImgFn = function (index) {
                $scope.picUrls.splice(index, 1);
            };
            $scope.submitFn = function () {
                if ($scope.view.select >= 0) {
                    $scope.picUrls[$scope.view.chosen].url = $scope.view.materials.items[$scope.view.select].url;
                }
                $("#pic-select1").modal("hide");
            }


        }
    }
});
angular.module('app').directive('ads', function () {
    return {
        restrict: 'EA',
        replace: true,
        scope: {
            id: '='
        },
        templateUrl: 'public/js/directive/poster.html',
        controller: function ($scope) {
            $scope.view = {
                select: -1,//模态框的选择编号
                ads: ajaxSendFn({count: 10}, "/placards", "GET").result || []
            };
            $scope.post = {};
            if ($scope.id) {
                for (var i in $scope.view.ads.items) {
                    if ($scope.view.ads.items[i].id == $scope.id) {
                        $scope.view.index = i;
                    }
                }
            }
            $scope.openFn = function () {
                $("#ad-select").modal("show");
            }
            $scope.changeFn = function (index) {
                if ($scope.view.select == index) {
                    $scope.view.select = -1;
                } else {
                    $scope.view.select = index;
                }
            }
            $scope.pageChange = function () {
                var json = {page: $scope.view.ads.page, count: $scope.view.ads.count};
                $scope.view.ads = ajaxSendFn(json, "/placards", "GET").result;
            };
            $scope.submitFn = function () {
                if ($scope.view.select >= 0) {
                    $scope.id = $scope.view.ads.items[$scope.view.select].id;
                    //确定选择的编号
                    $scope.view.index = $scope.view.select;
                } else {
                    $scope.id = "";
                }
                $("#ad-select").modal("hide");
            }
            $scope.deleteFn = function () {
                $scope.id = "";
                $scope.view.index = "";
            }


        }
    }
});