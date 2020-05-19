angular.module('app').directive('statisticsCoupon', ['statisticsFacotry', function (statisFac) {
  var cmd = StatisticsDirective.createNew(statisFac, "public/js/directive/statisticsCoupon.html", "/statistics/coupon/", statisFac.queryCouponStatistics);
  return cmd;
}])

angular.module('app').directive('statisticsCouponDetail', ['statisticsFacotry', '$routeParams','STATISTICS_TYPE', function (statisFac, $routeParams,STATISTICS_TYPE) {
  var cmd = StatisticsDetailDirective.createNew(statisFac, "public/js/directive/statisticsCouponDetail.html", statisFac.queryCouponDetailStatistics, $routeParams, STATISTICS_TYPE);
  return cmd;
}])
