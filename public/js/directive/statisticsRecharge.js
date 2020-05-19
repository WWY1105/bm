angular.module('app').directive('statisticsRecharge',['statisticsFacotry', function (statisFac) {
  var cmd = StatisticsDirective.createNew(statisFac, "public/js/directive/statisticsRecharge.html", "/statistics/charge/", statisFac.queryChargeStatistics);
  return cmd;
}]);

angular.module('app').directive('statisticsRechargeDetail', ['statisticsFacotry', '$routeParams','STATISTICS_TYPE', function (statisFac, $routeParams,STATISTICS_TYPE) {
  var cmd = StatisticsDetailDirective.createNew(statisFac, "public/js/directive/statisticsRechargeDetail.html", statisFac.queryChargeDetailStatistics,$routeParams,STATISTICS_TYPE);
  return cmd;
}])
