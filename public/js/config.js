﻿/**
 * @author litianyuan
 * @date   2014-12-18
 */

var basicUrl = location.origin;
//+ "/bm";//ajax首页
var indexUrl = location.origin;
//+ "/bmweb";//登录界面即主页

var authed = {
    "1001": "创建中",
    "1002": "认证审核中",
    "1003": "已通过审核",
    "1004": "关闭审核中",
    "1005": "停用"
};
var textCheckJson = {
    "name": /^[a-zA-z]{1}[a-zA-Z0-9]{5,15}$/,//用户名检测，6-16位，字母开头
    "password": /^[\w]{8,20}$/,//密码检测，8-20位，不为空
    "telephone": /^0[1-9]{2,3}-?[2-9][0-9]{6,7}(-?[0-9]{1,4})?|1[0-9]{10}$/,//电话，固话及手机
    "phone": /^1\d{10}$/,//手机
    "tel": /^[1-9]{2,3}-?[2-9][0-9]{6,7}(-?[0-9]{1,4})?$/,//固话
    "nickname": /^[\u4e00-\u9fa5\w\S]{2,20}$/,//昵称，不含空格及特殊字符，2-20
    "dictCode": /^[0-9]{2,10}$/,//字典代码。2-10位数字
    "dictText": /^[\u4e00-\u9fa5\w]{1,20}$/,//字典文本，1-20汉字字符
    "dictName": /^[\u4e00-\u9fa5]{2,10}$/,//字典名，汉字
    "dictMnemonic": /^[a-zA-Z_]{2,20}$/,//字典助记符
    "shopcode": /^[a-zA-Z0-9]{1,20}$/,
    "float-regex": /^\-?\d+((\.|\,)\d+)?$/ //浮点数
}
var textCheckErrorJson = {//
    "name": "必须以字母开头，不得含有汉字及其他符号",//用户名检测，5-16位，字母开头
    "password": "不能含有空格",//密码检测，8-20位，不为空
    "telephone": "请输入正确电话号码",//电话，固话及手机
    "phone": "请输入正确电话号码",//手机
    "tel": "请输入正确电话号码",//固话
    "nickname": "不能含有空格及特殊字符",//昵称，不含空格及特殊字符，2-20
    "dictCode": "只能为数字",//字典代码。2-10位数字
    "dictText": "只能为汉字",//字典文本，1-20汉字字符
    "dictName": "只能为汉字",//字典名，汉字
    "dictMnemonic": "只能输入下划线及英文",//字典助记符
    "shopcode": "只能输入英文及数字"
}

var constUrlDict = {
    //员工管理类
    "staffs-base": "/staffs",
    "login": "/staffs/login",
    "logout": "/staffs/logout",
    "staff": "/staffs/staff",
    "staffs-shop": "/staffs/shop",
    "staffs-keeper": "/staffs/keeper",
    "staffs-password": "/staffs/password",
    //顾客管理类
    "customer": "/customer",
    "memberGrade": "/memberGrade",
    //顾客权益
    "benefit": "/benefit",
    "coupon": "/coupon/usable",
    //桌台
    "tables": "/tables",
    "tables-batch": "/tables/batch", //批量添加桌台
    "tables-box": "/tables/box",
    "tables-table": "/tables/table",
    "tables-shop": "/tables/shop",
    //营业时间
    "businesstimes": "/businesstimes",
    "businesstime": "/businesstimes/businesstime",
    //活动
    "activity": "/activity",

};

//券领取重复策略
var obtainRepeatCategory = [
    {id: "AFTER_CHECK", name: "核销后可重领"},
    {id: "UNLIMITED", name: "无限制"},
];

//活动日期类型
var dateRangeCategory = [
    {type: 'PERMANENT', name: '永久有效'},
    {type: 'CONTINUOUS', name: '连续有效'},
    {type: 'SELECTED_DATES', name: '手动选择'},
    // {type:'AUTOMATIC_DAY_DELAY',name:'延期生效'},
    // {type:'AUTOMATIC_MONTH_DELAY',name:'月底有效'},
    {type: 'MONTH_EFFECTIVE', name: '当月有效'},
    {type: 'EXCLUDE_MONTH_DAYS', name: '按月排除'},
    {type: 'EXCLUDE_WEEKLY_DAY', name: '按周排除'},
    {type: 'AROUND_FIX_DATE', name: '生日'},
    {type: 'INCLUDE_WEEKLY_DAY', name: "按周指定"},
    {type: 'INCLUDE_MONTH_DAYS', name: "按月指定"},
];

//活动日期类型
var couponRangeCategory = {
    CONTINUOUS: '连续有效',
    AUTOMATIC_DAY_DELAY: '延期生效',
    AUTOMATIC_MONTH_DELAY: '月底有效'
};

//活动类型
var ruleCategory = [
    //{id: "GAMEBUY", name: "游戏"},
    {id: "FOLLOW", name: "关注有礼"},
    {id: "COUPONFREE", name: "送券"},
    {id: "CHARGE", name: "储值卡"},
    {id: "GIVENUPGRADE", name: "升级赠送"},
    {id: "EXCHANGE", name: "积分兑换"},
    {id: "DISCOUNT", name: "打折"},
    {id: "SPECIALPRICE", name: "特价"},
    {id: "COUPON", name: "消费返券"},
    {id: "POINT", name: "消费积分"},
    {id: "POINTCONSUME", name: "积分抵现"},
    {id: "CHARGECONSUME", name: "使用充值卡"},
    {id: "LIMITREDUCE", name: "满减"},
    {id: "SPENDAS", name: "抵扣"},
    {id: "SETMEAL", name: "套餐组合"},
    {id: "FIRSTGIFT", name: "新人礼"},
    {id: "TICKET", name: "红票"},
    {id: "MEMBERPRICE", name: "会员价"}
    
];
// 卡同享活动
var cardRuleCategory = [
    {id: "EXCHANGE", name: "积分兑换"},
    {id: "DISCOUNT", name: "打折"},
    {id: "COUPON", name: "消费返券"},
    {id: "POINT", name: "消费积分"},
    {id: "CHARGECONSUME", name: "使用充值卡"},
    {id: "MEMBERPRICE", name: "会员价"}
];
//线上活动类型
var onlineRuleObj = [
    {id: "FOLLOW", name: "关注有礼"},
    {id: "COUPONFREE", name: "送券"},
    {id: "CHARGE", name: "充值"},
    {id: "GIVENUPGRADE", name: "升级赠送"},
    {id: "EXCHANGE", name: "积分兑换"},
    {id: "BIRTHBENEFIT", name: "生日活动"},
    {id: "FIRSTGIFT", name: "新人礼"},
    {id: "TICKET", name: "红票"},

];
//消费活动类型
var consumeRuleObj = [
    {id: "MEMBERPRICE", name: "会员价"},
    {id: "DISCOUNT", name: "打折"},
    {id: "SPECIALPRICE", name: "特价"},
    {id: "COUPON", name: "消费返券"},
    {id: "POINT", name: "消费积分"},
    {id: "POINTCONSUME", name: "积分抵现"},
    {id: "CHARGECONSUME", name: "使用充值卡"},
    {id: "LIMITREDUCE", name: "满减"},
    {id: "SPENDAS", name: "抵扣"},
    {id: "SETMEAL", name: "套餐组合"},
    {id: "CHARGEFREE", name: "充值免单"},
  
    {id: "COMMENTREDUCE", name: "评价立减"}
    
];
var ruleCategoryForCoupon = [
    {id: "DISCOUNT", name: "打折"},
    {id: "SPECIALPRICE", name: "特价"},
    {id: "COUPON", name: "消费返券"},
    {id: "POINT", name: "消费积分"},
    {id: "LIMITREDUCE", name: "满减"},
    {id: "SPENDAS", name: "抵扣"}
];
//所有活动类型
var allRuleCategory = {
    DISCOUNT: "打折",
    SPECIALPRICE: "特价",
    COUPON: "消费返券",
    COUPON_CONSUME: "消费用券",
    COUPONFREE: "送券",
    POINT: "积分",
    POINTCONSUME: "积分抵现",
    CHARGE: "充值",
    CHARGECONSUME: "使用充值卡",
    WELFARE: "福利",
    LIMITREDUCE: "满减",
    SPENDAS: "抵扣",
    SETMEAL: "套餐组合",
    GIVENUPGRADE: "升级赠送"
    //COUPONCONSUME: "代金券"
};
//共享活动对应关系
var sharedActivitys = {
    DISCOUNT: ["POINT", "COUPON", "CHARGECONSUME", "POINTCONSUME"],
    SPECIALPRICE: ["DISCOUNT", "POINT", "COUPON", "CHARGECONSUME"],
    COUPON_CONSUME: ["COUPON", "POINT", "CHARGECONSUME"],
    COUPON_CONSUME1: ["COUPON", "POINT", "CHARGECONSUME", "DISCOUNT", "POINTCONSUME", "LIMITREDUCE", "SPENDAS", "SPECIALPRICE", "SETMEAL"],
    POINTCONSUME: ["COUPON", "POINT", "CHARGECONSUME"],
    COUPON: ['POINT'],
    POINT: ['COUPON'],
    CHARGECONSUME: ['POINT', 'COUPON'],
    LIMITREDUCE: ["POINT", "COUPON", "CHARGECONSUME", "POINTCONSUME"],
    SPENDAS: ["POINT", "COUPON", "CHARGECONSUME"],
    SETMEAL: ['POINT', 'COUPON', "CHARGECONSUME", "DISCOUNT"],
    MEMBERPRICE: ["COUPON", "POINT", "CHARGECONSUME", "DISCOUNT", "POINTCONSUME", "LIMITREDUCE", "SPENDAS", "SPECIALPRICE", "SETMEAL"],
};
//线上类型
// var OnlineRuleCategory = ["FOLLOW", "COUPONFREE", "CHARGE", "GIVENUPGRADE", "EXCHANGE"];
//消费类型
// var ConsumeRuleCategory = ["DISCOUNT", "SPECIALPRICE", "COUPON", "POINT", "POINTCONSUME", "CHARGECONSUME", "LIMITREDUCE", "SPENDAS", "SETMEAL"];

//消费类型对应关系
var ConsumeTypeCategory = {
    "6013": "COMMENT",
    "6000": "MEMBERPRICE",
    "6005": "DISCOUNT",
    "6006": "SPECIALPRICE",
    "6010": "COUPONCONSUME",
    "6009": "POINTCONSUME",
    "6011": "CHARGECONSUME",
    "6014": "LIMITREDUCE",
    "6012": "SPENDAS",
    "6015": "SETMEAL",
    "6016": "REWARD",
    "6040": "BARGAIN",
    "6017": "CHARGEFREE"
}
var shopTypeJson = {
    //1003: "加盟店",
    1001: "有桌台",
    1002: "没桌台"
};
var relationSourceType = {
    "9001": "上宾",
    "9002": "老数据"
};
//会员管理
var constMember = [{
    id: "CUSTOMER",
    name: "非会员"
}]

function ajaxSendFn(j, u, h, l) {
//json,url,http,l
//传入数据，提交地址，提交方法，是否加JSON CONTENT-TYPE
    var redata;
    var api_key = "5d85a0398cb74c66a46affbb98efaf41";
    if (!$.cookie("apikey")) {
        $.cookie("apikey", api_key, {expire: 30, path: "/"});
    }
    if (h == "GET" || h == "get") {
        $.ajax({
            url: basicUrl + u,
            data: objSort(j),
            type: h,
            dataType: "json",
            async: false,
            beforeSend: function (xhr) {
                if (l == 1) {//
                    xhr.setRequestHeader("Content-Type", "application/json");
                    // xhr.setRequestHeader("Cache-Control", "max-age=0");
                    // xhr.setRequestHeader("Content-Type", "application/json");
                }
            },//这里设置header
            success: function (data) {
                if (data.code == 403000) {
                    location.href = indexUrl;
                    return;
                }
                if (data.code == 400000) {
                    alert(data.message);
                    return;
                }
                if (data.code != 200) {
                    console.log(data.message);
                }
                redata = data;
            }, loading: function () {
            }
        });
    } else {
        j = typeof(j) == "string" ? j : JSON.stringify(j);
        $.ajax({
            url: basicUrl + u + "?" + sortUrl(),
            data: j,
            type: h,
            dataType: "json",
            async: false,
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Content-Type", "application/json");
            },//这里设置header
            success: function (data) {
                if (data.code == 403000) {
                    location.href = indexUrl;
                    return;
                }
                if (data.code != 200) {
                    console.log(data.message);
                }
                redata = data;
            }
        });
    }
    return redata;
}

//图表
function formatDate(date, format) {
    if (!date) return;
    if (!format) format = "yyyy-MM-dd";
    switch (typeof date) {
        case "string":
            date = new Date(date.replace(/-/g, "/"));
            break;
        case "number":
            date = new Date(date);
            break;
    }
    if (!date instanceof Date) return;
    var dict = {
        "yyyy": date.getFullYear(),
        "M": date.getMonth() + 1,
        "d": date.getDate(),
        "H": date.getHours(),
        "m": date.getMinutes(),
        "s": date.getSeconds(),
        "MM": ("" + (date.getMonth() + 101)).substr(1),
        "dd": ("" + (date.getDate() + 100)).substr(1),
        "HH": ("" + (date.getHours() + 100)).substr(1),
        "mm": ("" + (date.getMinutes() + 100)).substr(1),
        "ss": ("" + (date.getSeconds() + 100)).substr(1)
    };
    return format.replace(/(yyyy|MM?|dd?|HH?|ss?|mm?)/g, function () {
        return dict[arguments[0]];
    });
}

function arrRemoveNullFN(a) {//去除数组内空值
    var b = [];
    $.each(a, function (i, v) {
        if (v != "" && v != "null" && v != null && v) b.push(v);
    });
    return b;
}

function arrToObj(a, b, c) {//数组转对象
    var tem = {};
    for (i = 0, j = a.length; i < j; i++) {
        if (!c) tem[a[i][b]] = a[i];
        else tem[a[i][b]] = a[i][c];
    }
    return tem;
}

function obj2Array(a, b) {//对象根据特定key转数组
    var tem = [];
    for (var x in a) {
        if (b) tem.push(a[x][b]);
        else tem.push(a[x]);
    }
    return tem;
}

function in_array(stringToSearch, arrayToSearch) {//in_array
    for (s = 0; s < arrayToSearch.length; s++) {
        thisEntry = arrayToSearch[s].toString();
        if (thisEntry == stringToSearch) return true;
    }
    return false;
}

function remove_empty(array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] == "" || typeof(array[i]) == "undefined") {
            array.splice(i, 1);
            i = i - 1;
        }
    }
    return array;
}

//拼接网址
function concatUrl(base, url) {
    if (url !== "") {
        return base + "/" + url;
    } else {
        return base;
    }
}

//拼接参数
var mergeParam = function (param) {
    var arr = [];
    angular.forEach(param, function (value, key) {
        arr.push(key + '=' + value);
    });
    return arr.join('&');
}
//转换时间,可以转日期字符串或是日期
var parseDate = function (date) {
    if (date) {
        var tmp;
        if (typeof(date) === "string") {
            tmp = new Date();
            var ms = Date.parse(date);
            tmp.setTime(ms);
        } else {
            tmp = date;
        }
        return tmp;
    }
}

// 思路：获取没重复的最右一值放入新数组
function unique(array) {
    var r = [];
    for (var i = 0, l = array.length; i < l; i++) {
        for (var j = i + 1; j < l; j++)
            if (array[i] === array[j]) j = ++i;
        r.push(array[i]);
    }
    return r;
}

//显示错误信息
function errorMsg(result) {
    if (result) {
        alert(result.message);
    }
}

var modules = ['ngRoute', '720kb.tooltips', 'ngMessages', 'angular-loading-bar', 'ngAnimate', 'ui.bootstrap', 'highcharts-ng']
if (location.pathname == "/keeper.html") {
    modules = ['ngRoute', '720kb.tooltips', 'ngMessages', 'angular-loading-bar', 'ngAnimate', 'ui.bootstrap', 'highcharts-ng', 'monospaced.qrcode', 'ui.calendar']

}
var app = angular.module('app', modules);//创建APP

app.run(function ($rootScope, $location, $interval, $filter, $http, $templateCache) {//APP通用方法
    $rootScope.cache = {};
    $rootScope.config = {//设置
        time: new Date(),
        shopname: $.cookie("shopname") + "管理系统",
        breadset: {},
        slide: "",
        modalcontent: "",
        textCheckJson: textCheckJson,
        textCheckErrorJson: textCheckErrorJson
    };
    $rootScope.config.staff = ajaxSendFn({}, constUrlDict["staff"], "GET", 1).result;
    $rootScope.config.permission = ajaxSendFn({}, "/activity/permission", "GET").result||JSON.parse(localStorage.getItem('permission'));
    localStorage.setItem('permission',JSON.stringify($rootScope.config.permission))
   console.log('permission')
   console.log(ajaxSendFn({}, "/activity/permission", "GET").result)
    //$interval(function () {//更新时间
    //    $rootScope.config.time = new Date()
    //}, 1000);
    $rootScope.urlFn = function () {//URL换算
        if (!$location.$$path) {//
            $rootScope.active = "shops";
            return;
        }
        localurl = $location.$$path.split("/");
        if (localurl[1] == "") {//验证空
            localurl[1] = "shops";
        }
        $rootScope.active = localurl[1];
    };
    $rootScope.urlFn();
    $rootScope.goto = function (url) {	//转跳
        $location.path("/" + url);
        $rootScope.urlFn();
    }
    $rootScope.logout = function () {//登出
        logoutre = ajaxSendFn({}, constUrlDict["logout"], "POST");
        $.cookie("shopname", null, {path: "/"});
        $.cookie("token", null, {path: "/"});
        if (logoutre.code == 200) {//
            location.href = indexUrl;
        }
    }
})


app.directive("dyName", [
    function () {
        return {
            require: "ngModel",
            link: function (scope, elm, iAttrs, ngModelCtr) {
                ngModelCtr.$name = scope.$eval(iAttrs.dyName)
                var formController = elm.controller('form') || {
                    $addControl: angular.noop
                };
                formController.$addControl(ngModelCtr);
                scope.$on('$destroy', function () {
                    formController.$removeControl(ngModelCtr);
                });
            }
        };
    }
])
app.filter("ltdate", function () {//
    return function (d) {//
        if (!d) return;
        return new Date(Date.parse(d.replace(/-/g, "/")));
    }
})
app.filter("trust2Html", ["$sce", function ($sce) {
    return function (val) {
        return $sce.trustAsHtml(val);
    }
}])
app.filter("ltnumber", function () {//
    return function (d) {//
        return parseInt(d);
    }
})

//按固定长度分隔字符串， length指定分隔长度,默认为4, separator指定分隔符,默认为"——"
app.filter("splitcode", function () {
    return function (str, length, separator) {
        var arr = [];
        var len = length || 4;
        for (var i = 0; i < str.length; i = i + len) {
            var sstr = str.substr(i, len);
            arr.push(sstr);
        }
        ;
        return arr.join(separator || "-");
    }
})

//按长度(len)截取字符串，并附加...后缀
app.filter("substr", function () {
    return function (str, len) {
        if (str && str.length > len) {
            return str.substr(0, len) + '...';
        }
        return str;
    }
})

app.factory("tyAjaxFactory", function ($http) {
    var sevice = {};
    sevice.get = function (n, a, b, c) {
        var result;
        $http.get(basicUrl + b + '?' + sortUrl()).success(function (result) {
            deferred.resolve(result);
        }).success().then(function (date) {
            result = date.data;
            $scope.cache = {n: result};
        });
    }
    return sevice;
});
app.factory("tyFnFactory", function ($http, tyAjaxFactory) {
    var sevice = {};
    sevice.shop = function (a) {
        return tyAjaxFactory.get(a, {}, "/shops");
    }
    return sevice;
});


app.directive('backButton', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            element.bind('click', goBack);

            function goBack() {
                history.back();
                scope.$apply();
            }
        }
    }
});

app.directive('countDown', function ($interval) {
    return {
        scope: {
            repeats: '=',
        },
        restrict: 'A',
        link: function (scope, element, attrs) {
            element.bind('click', countdown);

            function countdown() {
                var numdown = scope.repeats;
                var oldval = element.val();
                var timer = $interval(function () {
                    element.attr('disabled', true);
                    element.val(numdown-- + "秒后再试");
                }, 1000, scope.repeats);

                timer.then(function () {
                    element.val(oldval);
                    element.attr('disabled', false);
                }, function () {
                    element.val("error...");
                });

                scope.$on("$destroy", function (event) {
                    $interval.cancel(timer);
                });
            }
        }
    }
});

app.directive('inPut', function () {
    return {
        restrict: 'EA',
        scope: {age: '@dateType'},
        link: function (scope, element, attrs) {
        }
    }
});
app.factory('SearchSettingService',
    ['$http', '$q', function ($http, $q) {
        return {
            setting: function () {
                var deferred = $q.defer();
                $http.get(basicUrl + '/shops?' + sortUrl()).success(function (result) {
                    deferred.resolve(result);
                }).error(function (result) {
                    deferred.reject("network error");
                });

                return deferred.promise;
            }
        };
    }]);

//data
var notNull = function (e) {
    return e != null && e && e != "";
};

var uniqArr = function (arr) {
    if (arr) {
        return arr.filter(function (item, pos, self) {
            return self.indexOf(item) == pos;
        });
    }
    ;
};

var getSubtimes = function (dataArr, typeArr) {
    var result = {};
    angular.forEach(dataArr, function (value, idx) {
        if (typeArr[value]) {
            this[value] = typeArr[value];
        }
    }, result);
    return result;
}

//判断空对象的方法：
var isEmptyObject = function (obj) {
    for (var x in obj) {
        return false;
    }
    return true;
}
//判断对象属性的数量
var objectCount = function (obj) {
    var cnt = 0;
    angular.forEach(obj, function (data, key) {
        cnt++;
    });

    return cnt;
}


//获取category对应的共享活动
getShareCategory = function (category) {
    var result = [];
    var arr = sharedActivitys[category];
    for (var i = 0; arr && i < arr.length; i++) {
        var obj = {};
        obj.id = arr[i];
        obj.name = allRuleCategory[arr[i]];
        result.push(obj);
    }
    return result;
}

//转换对象到数组，类似于Object.keys()
objectKeys = function (obj) {
    var res = [];
    angular.forEach(obj, function (data, idx) {
        this.push(idx);
    }, res);
    return res;
}

//cb回调函数，对数组元素使用使用，类似于Array.map();
arrayMap = function (arr, cb) {
    var tmp = [];
    if (typeof cb === "function") {
        angular.forEach(arr, function (data, idx) {
            var t = data;
            t = cb(data);
            this.push(t)
        }, tmp);
    } else {
        tmp = arr;
    }
    return tmp;
}

//filter过滤函数，对数组元素进行过滤，类似Array.filter()
arrayFilter = function (arr, filter) {
    var tmp = [];
    if (typeof filter === "function") {
        angular.forEach(arr, function (data, idx) {
            filter(data) && this.push(data);
        }, tmp);
    } else {
        tmp = arr;
    }
    return tmp;
}

//filter过滤函数，对数组元素进行过滤，类似map.filter()
mapFilter = function (obj, filter) {
    var tmp = {};
    if (typeof filter === "function") {
        angular.forEach(obj, function (data, idx) {
            filter(data) && (this[idx] = data);
        }, tmp);
    } else {
        tmp = obj;
    }
    return tmp;
}

formatDatas = function (obj) {
    if (!obj) {
        tmp = {}
    } else if (obj.constructor === Array) {
        var tmp = {};
        angular.forEach(obj, function (val, idx) {
            this[val] = true;
        }, tmp);
    } else {
        tmp = obj;
    }
    return tmp;
}
