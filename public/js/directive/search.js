angular.module('app').directive('searchByDate', function () {
  return {
    restrict: 'AE',
    replace: true,
    scope:{
      startTime: '=',
      endTime: '=',
      text: '=',
      needSearch: '=',
      shops: '=',
      shopId: '=',
      //2017010915214773990
    },
    templateUrl: 'public/js/directive/search.html',
    controller: function ($scope, $filter) {
      $scope.posts = {};
      $scope.init = function () {
        if (!$scope.startTime) {
          var date = new Date();
          date.setDate(date.getDate()-30);
          date.setHours(0);
          date.setMinutes(0);
          date.setSeconds(0);
          $scope.starttime = date;
        }else{
          var start = new Date();
          var ms = Date.parse($scope.startTime);
          start.setTime(ms);
          $scope.starttime = start;
        }
        if (!$scope.endTime) {
          var end = new Date();
          $scope.endtime = end;
        }else{
          var end = new Date();
          var ms = Date.parse($scope.endTime);
          end.setTime(end);
          $scope.endtime = end;
        }
        $scope.posts.shopId = $scope.shopId;
      }

      $scope.doSearch = function () {
        $scope.shopId = $scope.posts.shopId;
        $scope.startTime = $filter('date')($scope.starttime, "yyyy-MM-dd 00:00:00");
        $scope.endTime = $filter('date')($scope.endtime,"yyyy-MM-dd 23:59:59");
        $scope.needSearch = true;
      }
    }
  };
});
