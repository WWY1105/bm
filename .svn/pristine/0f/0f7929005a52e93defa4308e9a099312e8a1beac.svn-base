angular.module('app').factory('CouponFactory',['$http',function ($http) {
	var couponObj = {};

	couponObj.getAllCoupon = function(){
		return ajaxSendFn({}, '/coupon', 'GET').result || [];
	};

	couponObj.addCoupon = function(coupon) {
		return ajaxSendFn(JSON.stringify(coupon), "/coupon", "POST", 1);
	};

	return couponObj;
}]);

angular.module('app').factory('memberGradeFactory',['$http', function (argument) {
	var memberGrade = {};

	memberGrade.getAllGrade = function  () {
		return ajaxSendFn({}, '/memberGrade', 'GET').result || [];
	}

	return memberGrade;
}]);

angular.module('app').factory('shopFactory',['$http', function (argument) {
	var shopObj = {};

	shopObj.getAllShops = function  () {
		return ajaxSendFn({state:"1002"}, "/shops", "GET").result || [];
	}

	return shopObj;
}]);

angular.module('app').factory('deviceFactory',['$http', function ($http) {
	var deviceObj = {};

	deviceObj.getAllDevices = function  (param) {
		return ajaxSendFn(param || {}, "/activate", "GET").result || [];
	}

	deviceObj.jihuo = function(cb){
		// $http({
		// 	method: 'GET',
		// 	url: "/activate",
		// 	params:objSort({})
		// }).then(function (data) {
			cb(ajaxSendFn(param || {}, "/activate", "GET"));
		// });
		// $http.post(basicUrl + '/activate').success(function(data){
		// 	cb(data);
		// });
	}

	return deviceObj;
}]);

angular.module('app').factory('statisticsFacotry',['$http', function ($http) {
	var query = function (url, param, cb) {
        $http({
            method: 'GET',
            url: url,
            params:objSort(param)
        }).then(function (data) {
            cb(data.data);
        });
        
	}

	var statisticsObj = {};

	statisticsObj.queryChargeStatistics = function  (param, cb) {
		var url = basicUrl + "/statistics/charge?";
		return query(url, param, cb);
	}

	statisticsObj.queryChargeDetailStatistics = function (param, cb) {
		var url = basicUrl + "/statistics/charge/detail?";
		return query(url, param, cb);
	}

	statisticsObj.queryPointStatistics = function  (param, cb) {
		var url = basicUrl + "/statistics/point?";
		return query(url, param, cb);
	}

	statisticsObj.queryPointDetailStatistics = function (param, cb) {
		var url = basicUrl + "/statistics/point/detail?";
		return query(url, param, cb);
	}

	statisticsObj.queryCouponStatistics = function  (param, cb) {
		var url = basicUrl + "/statistics/coupon?";
		return query(url, param, cb);
	}

	statisticsObj.queryCouponDetailStatistics = function (param, cb) {
		var url = basicUrl + "/statistics/coupon/detail?";
		return query(url, param, cb);
	}

	statisticsObj.querySmsStatistics = function  (param, cb) {
		var url = basicUrl + "/statistics/shortmessage?";
		return query(url, param, cb);
	}

	statisticsObj.querySmsDetailStatistics = function (param, cb) {
		var url = basicUrl + "/statistics/shortmessage/detail?";
		return query(url, param, cb);
	}

	statisticsObj.queryRelationStatistics = function  (param, cb) {
		var url = basicUrl + "/statistics/consumption?";
		return query(url, param, cb);
	}

	statisticsObj.queryRelationDetailStatistics = function (param, cb) {
		var url = basicUrl + "/statistics/consumption/detail?";
		return query(url, param, cb);
	}

	return statisticsObj;
}]);
