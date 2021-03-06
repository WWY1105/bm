angular.module('app').directive('buttons', function () {
  return {
    restrict: 'AE',
    replace: true,
    scope:{
      selector: '=',
    },
    templateUrl: 'public/js/directive/buttons.html',
    controller: function ($scope, $filter) {
      $scope.select = function (index) {
        $scope.selector = index;
        console.log(index)
      }
    }
  };
});
