angular.module('app').directive('mySpecialDate', function(){
  return {
    restrict:'EA',
    replace: true,
    scope: {
      specialDate: '=mySpecialDate',
    },
    templateUrl:'public/js/directive/specialDate.html',
    controller: function($scope){
      //特定日期类型
      $scope.specialDateRangeCategory = [
      	{type:'MANUAL_SELECT',name:'手动选择'},
      	{type:'MONTH_DAYS',name:'按月选择'},
      	{type:'WEEKLY_DAY',name:'按周选择'},
      ];

      $scope.week = [
        {idx:1, value:"周一"},
        {idx:2, value:"周二"},
        {idx:3, value:"周三"},
        {idx:4, value:"周四"},
        {idx:5, value:"周五"},
        {idx:6, value:"周六"},
        {idx:7, value:"周日"},
      ];

      $scope.clickBtn = function (type) {
        $scope.specialDate.subType = type;
      }

      $scope.range = function (start, end) {
        var arr = [];
        if (!end) {
          end = start;
          start = 0;
        }
        for (var i = start; i <= end; i++) {
          arr.push(i)
        }
        return arr;
      }

      $scope.clickDay = function (idx, object) {
        var obj = object.hasOwnProperty(idx);
        if (obj) {
          delete object[idx];
        }else{
          object[idx] = true;
        }
      }

      if (!$scope.specialDate) {
        $scope.specialDate = {
          selectDates: {},
          selectWeekDays: {},
          selectDays: {},
        };
      }

      // var dftDate = new Date();
      // dftDate.setFullYear(2000);
      // dftDate.setMonth(1);
      // dftDate.setDate(1);
      //
      // var today = new Date();
      // today.setDate(today.getDate()-1);
      // today.setHours(23);
      // today.setMinutes(59);
      // today.setSeconds(59);
      // var now = new Date();

      $scope.set = {
          periods: []
      };
      $scope.view = {
          periods: []
      };
      $scope.date = {
        now: new Date(),
        nows: {
          year: new Date().getFullYear(),
          day: new Date().getDate(),
          month: new Date().getMonth() + 1
        },
        week: ["日", "一", "二", "三", "四", "五", "六"],
        dates: [],
        i: 0,
        year: new Date().getFullYear(),
        day: new Date().getDate(),
        month: new Date().getMonth() + 1,
      };

      $scope.dateFn = function(y, m) { //日历选择器
        $scope.date.dates = [];
        firstdate = y + "-" + m + "-" + "1" + " 00:00:00"
        firstdate = new Date(firstdate);
        firstday = firstdate.getDay();
        ny=y;
        nm=m;
        if (m >= 12) { //
          nm = 1;
          ny++;
        } else {
          nm++
        }
        nextMonth = ny + "-" + nm + "-" + "1" + " 00:00:00";
        nextMonth = new Date(new Date(nextMonth).getTime() - 1000 * 60 * 60 * 24);
        lastdate = nextMonth.getDate();
        lastday = nextMonth.getDay();
        et = new Date(new Date().getTime() + 2 * 365 * 1000 * 60 * 60 * 24);
        var ty = $scope.date.nows.year,
        tm = $scope.date.nows.month,
        td = $scope.date.nows.day,
        ey = et.getFullYear(),
        em = et.getMonth() + 1,
        ed = et.getDate();
        for (i = 0, j = lastdate - lastday + 5 + firstday; i <= j; i++) { //
          if (i < (firstday - 1)) {
            $scope.date.dates.push({
              day: ""
            });
          } else if (i >= lastdate + firstday) {
            $scope.date.dates.push({
              day: ""
            });
          } else {
            var color = 0;
            if ((y < ty && m < tm) || (y == ty && m == tm && (i - firstday + 1) < td) || (y >= ey && m > em) || (y==ey && m==em && (i - firstday + 1) > ed)) color = 1;
            trues = [];
            trues[0] = y;
            trues[1] = m > 9 ? m : "0" + m;
            trues[2] = (i - firstday + 1) > 9 ? (i - firstday + 1) : "0" + (i - firstday + 1);
            trues = trues.join('-');
            $scope.date.dates.push({
              day: i - firstday + 1,
              ture: trues,
              color: color
            });
          }
        }
      }

      $scope.datego = function(a) {
        tem = $scope.date.i + a;
        if (tem >= 0 && tem < 240) { //
          $scope.date.i += a;
          $scope.date.month += a;
          if ($scope.date.month > 12) { //
            $scope.date.month = 1;
            $scope.date.year++;
          } else if ($scope.date.month < 1) { //
            $scope.date.month = 12;
            $scope.date.year--;
          }
          $scope.dateFn($scope.date.year, $scope.date.month);
        }
      };
      $scope.dateFn($scope.date.year, $scope.date.month);

      $scope.specialDate.selectDates = formatDatas($scope.specialDate.selectDates);
      $scope.specialDate.selectDays = formatDatas($scope.specialDate.selectDays);
      $scope.specialDate.selectWeekDays = formatDatas($scope.specialDate.selectWeekDays);

    },
  };
});
