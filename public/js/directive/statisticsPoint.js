angular.module('app').directive('statisticsPoint',['statisticsFacotry', function (statisFac) {
  var cmd = StatisticsDirective.createNew(statisFac, "public/js/directive/statisticsPoint.html", "/statistics/point/", statisFac.queryPointStatistics);
  return cmd;
}])

angular.module('app').directive('statisticsPointDetail', ['statisticsFacotry', '$routeParams','STATISTICS_TYPE', function (statisFac, $routeParams,STATISTICS_TYPE) {
  var cmd = StatisticsDetailDirective.createNew(statisFac, "public/js/directive/statisticsPointDetail.html", statisFac.queryPointDetailStatistics, $routeParams,STATISTICS_TYPE);
  return cmd;
}])
