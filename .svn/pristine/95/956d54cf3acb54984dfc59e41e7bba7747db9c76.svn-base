angular.module('app').directive('statisticsRelation', ['statisticsFacotry', function (statisFac) {
  var cmd = StatisticsDirective.createNew(statisFac, "public/js/directive/statisticsRelation.html", "/statistics/relation/", statisFac.queryRelationStatistics);
  return cmd;
}])

angular.module('app').directive('statisticsRelationDetail', ['statisticsFacotry', '$routeParams','STATISTICS_TYPE', function (statisFac, $routeParams,STATISTICS_TYPE) {
  var cmd = StatisticsDetailDirective.createNew(statisFac, "public/js/directive/statisticsRelationDetail.html", statisFac.queryRelationDetailStatistics, $routeParams,STATISTICS_TYPE);
  return cmd;
}])
