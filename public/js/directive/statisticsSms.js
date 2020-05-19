angular.module('app').directive('statisticsSms',['statisticsFacotry', function (statisFac) {
  var cmd = StatisticsDirective.createNew(statisFac, "public/js/directive/statisticsSms.html", "/statistics/sms/", statisFac.querySmsStatistics);
  return cmd;
}])

angular.module('app').directive('statisticsSmsDetail',['statisticsFacotry', '$routeParams','STATISTICS_TYPE', function (statisFac, $routeParams,STATISTICS_TYPE) {
  var cmd = StatisticsDetailDirective.createNew(statisFac, "public/js/directive/statisticsSmsDetail.html", statisFac.querySmsDetailStatistics, $routeParams,STATISTICS_TYPE);
  return cmd;
}])
