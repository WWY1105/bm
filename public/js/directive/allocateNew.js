angular.module('app').directive('allocateNew', ['CouponFactory', 'memberGradeFactory', 'shopFactory', '$filter', function(couponFac, memberGradeFac, shopFac, $filter){
	return {
		restrict:'EA',
		replace: true,
		scope: {
			addOk: '&',
			addFail: '&',
		},
		templateUrl:'public/js/directive/allocateNew.html',
		link: function(scope, element, attrs){
			scope.couponCategoryRev={
				"901":"代金券",
				"902":"实物券",
				// "903":"打折券",
			};
			scope.ruleCategory = getShareCategory("COUPON_CONSUME");

			scope.couponTimeSel  = couponRangeCategory;
			scope.today = $filter('date')(new Date(), "yyyy-MM-dd");
			scope.coupon = {
				dateRange:{},
			};
			scope.shops = shopFac.getAllShops();
			scope.coupon.shops = [];
			scope.coupon.shared = [];
			scope.coupon.periods = [];
			scope.posts = {};
			scope.checkAllShop = false;
			scope.nonParticipationId = ajaxSendFn({}, "/nonParticipation", "GET").result; //非参与项

			scope.checkAllCatagory = function () {
				if(!scope.posts.catagoryAll) scope.coupon.shared=[];
				else{
					angular.forEach(
						scope.ruleCategory,function (value,key) {
							this[key]=value.id;
						},scope.coupon.shared)
					};
				};

				scope.checkAllShops = function () {
					if (!scope.checkAllShop) scope.coupon.shops = [];
					else{
						angular.forEach(scope.shops, function (value, key) {
							this[key] = value.id;
						}, scope.coupon.shops);
						console.log(scope.coupon.shops);
						
					}
				}

				scope.$watch('coupon.dateRangeCategory', function (newVal, oldVal) {
					if (newVal && newVal != oldVal) {
						scope.coupon.dateRange = {};
					}
				});

				scope.addCouponInner = function () {
					var time = [1001, 1002, 1003, 1004, 1005];
					for (i = 1; i < 6; i++) {
						if (scope.coupon["time" + i]) scope.coupon.periods.push(time[i - 1]);
						delete scope.coupon["time" + i];
					}
					scope.coupon.periods = unique(scope.coupon.periods);

					if (scope.coupon.dateRange.endDate < scope.coupon.dateRange.startDate) {
						alert("结束时间不能小于开始时间");
						return;
					}
					if (scope.coupon.dateRange.startDate) {
						scope.coupon.dateRange.startDate = $filter('date')(scope.coupon.dateRange.startDate, "yyyy-MM-dd 00:00:00");
					};
					if (scope.coupon.dateRange.endDate) {
						scope.coupon.dateRange.endDate = $filter('date')(scope.coupon.dateRange.endDate, "yyyy-MM-dd 23:59:59");
					};
					if (scope.coupon.category === "901") {
						scope.coupon.value = scope.coupon.currentAmount = 0;
					}
					scope.coupon.dateRange.selectCategory = "NONE";
					scope.coupon.shops = arrRemoveNullFN(scope.coupon.shops);
					scope.coupon.shared = arrRemoveNullFN(scope.coupon.shared);
					var result = couponFac.addCoupon(scope.coupon);
					if (result.code == 200) {
						scope.addOk();
					}else{
						scope.addFail({result:result});
					}
				}
			},

		};
	}]);
