angular.module('app').directive('statisticsChargeuse', ['statisticsFacotry', function (statisFac) {
    var cmd = StatisticsDirective.createNew(statisFac, "public/js/directive/statisticsChargeuse.html", "/statistics/chargeuse/", statisFac.queryCouponStatistics);
    return cmd;
  }])
  

  
angular.module('app').directive('statisticsChargeuseDetail', ['statisticsFacotry', '$routeParams','STATISTICS_TYPE', function (statisFac, $routeParams,STATISTICS_TYPE) {
  var cmd = StatisticsDetailDirective.createNew(statisFac, "public/js/directive/statisticsChargeuseDetail.html", statisFac.queryCouponDetailStatistics, $routeParams, STATISTICS_TYPE);
  return cmd;
}])
