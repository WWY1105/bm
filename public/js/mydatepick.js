/**
 *  Module
 *
 * Description
 */

angular.module('picker', []).directive('datepicker', [function() {
    return {
        restrict: 'A',
        templateUrl: "widget/datapicker.html",
        replace: true,
        require: "ngModel",
        scope: { datepickerTitle: "=" },
        controller: function($scope) {
            $scope.dateun = false;
            $scope.number = "asdas";
            var date = new Date();
            date.year = date.getFullYear();
            date.day = date.getDate();
            date.month = date.getMonth();
            $scope.date = {
                now: (date.month > 11 ? date.year + 1 : date.year) + "-" + (date.month < 9 ? "0" + (date.month + 1) : date.month + 1) + "-" + date.day,
                nows: {
                    year: date.year,
                    day: date.day,
                    month: date.month + 1
                },
                week: ["日", "一", "二", "三", "四", "五", "六"],
                dates: [],
                i: 0,
                year: date.year,
                day: date.day,
                month: date.month + 1,
                join: {}
            };
            if (!$scope.datepickerTitle || new Date($scope.datepickerTitle) < date) $scope.datepickerTitle = $scope.date.now;
            $scope.dateFn = function(y, m) { //日历选择器
                $scope.date.dates = [];
                firstdate = y + "-" + m + "-" + "1" + " 00:00:00"
                firstdate = new Date(firstdate);
                firstday = firstdate.getDay();
                if (m >= 12) { //
                    m = 1;
                    y++;
                } else {
                    m++
                }
                nextMonth = y + "-" + m + "-" + "1" + " 00:00:00";
                nextMonth = new Date(new Date(nextMonth).getTime() - 1000 * 60 * 60 * 24);
                lastdate = nextMonth.getDate();
                lastday = nextMonth.getDay();
                et = new Date(new Date().getTime() + 180 * 1000 * 60 * 60 * 24);
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
                        if ((y < ty || (m - 1) < tm) || (y == ty && (m - 1) == tm && (i - firstday + 1) < td) || (y >= ey && (m - 1) >= em && (i - firstday + 1) > ed)) color = 1;
                        trues = [];
                        trues[0] = y;
                        trues[1] = (m - 1) > 9 ? (m - 1) : "0" + (m - 1);
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
            $scope.dateFn($scope.date.year, $scope.date.month);
            $scope.datego = function(a) {
                tem = $scope.date.i + a;
                if (tem < 0 || tem > 6) return;
                else $scope.date.i += a;
                $scope.date.month += a;
                if ($scope.date.month > 12) { //
                    $scope.date.month = 1;
                    $scope.date.year++;
                } else if ($scope.date.month < 1) { //
                    $scope.date.month = 12;
                    $scope.date.year--;
                }
                $scope.dateFn($scope.date.year, $scope.date.month);
            };
            $scope.join = function(a) {
                $scope.datepickerTitle = a;
                $scope.dateun = true;
            };
            $scope.today = function() {
                $scope.datepickerTitle = $scope.date.now;
                $scope.dateun = true;
            };
            $scope.show = function() {
                $scope.dateun = true;
            }
        },
        // require: "?ngModel",
        // scope: false,
        // replace: true,
        link: function(scope, el, attr) {
            var height = $(window).height();
            var width = $(window).width();
            el.find(".datepicker-background").css({ "height": height, "width": width })
        }

    }
}]);
