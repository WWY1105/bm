angular.module('app').directive('myDatePicker', function(){
  return {
    restrict:'EA',
    replace: true,
    scope: {
      data: '=',
      dateRange: '=',
      isEdit: '=',
    },
    templateUrl:'public/js/directive/datepicker.html',
    controller: function($scope){

      $scope.topDateRangeCategory = [
        {type:'PERMANENT',name:'永久有效'},
        {type:'CONTINUOUS',name:'周期有效'},
        {type:'BIRTHDAY',name:'生日相关'},
        {type:'SELECTED_DATES',name:'指定日期'},
      ];
      var dftDate = new Date();
      dftDate.setFullYear(2000);
      dftDate.setMonth(1);
      dftDate.setDate(1);

      var today = new Date();
      today.setDate(today.getDate()-1);
      today.setHours(23);
      today.setMinutes(59);
      today.setSeconds(59);
      var now = new Date();

      $scope.set = {
          periods: []
      };
      $scope.view = {
          periods: []
      };
      $scope.dateOptions = {
        formatYear: 'yy',
        startingDay: 1,
        minDate: dftDate,
        maxDate:new Date(now.getTime()+10*365*3600*24*1000),
      };

     $scope.opened = {
        startDate: false,
        endDate: false
      };
      $scope.clickBtn = function (type) {
        $scope.data.dateType = type;
      }
     $scope.open = function($event, a) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.opened[a] = true;
      };
      $scope.disabled = function(date, mode) {
        return false;
      }

      $scope.$watch('data.dateType',function (newVal, oldVal) {
        if (newVal && newVal !== oldVal) {
          if (!$scope.data[newVal]) {
            $scope.data[newVal] = {};
          }
          if (!$scope.data[newVal].dateRange) {
            $scope.data[newVal].dateRange = {};
          }
          $scope.dateRange = $scope.data[newVal].dateRange;
          if (newVal === 'CONTINUOUS') {
            $scope.dateRange.startDate = parseDate($scope.dateRange.startDate||now);
            $scope.dateRange.endDate = parseDate($scope.dateRange.endDate||now);
          }
        }
      })

      if (!$scope.dateRange) {
        $scope.dateRange = {};
      }
      if (!$scope.data) {
        $scope.data = {};
      }

      if ($scope.data.dateType === 'CONTINUOUS') {
        $scope.dateRange.startDate = parseDate($scope.dateRange.startDate||now);
        $scope.dateRange.endDate = parseDate($scope.dateRange.endDate||now);
      }
      $scope.dateRangeCategory = dateRangeCategory;
    },
  };
});
