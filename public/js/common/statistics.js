angular.module('app').config(appRouteConfig);
angular.module('app').constant('STATISTICS_TYPE', {
  get:"发放",
  use:"兑换",
});

//详细统计类,用于构造详细统计Controller
var StatisticsDetail  = {
    /**
     * 构造一个Angularjs控制器
     * @method function
     * @param  {object} $rootScope   根作用域，用来缓存店铺列表
     * @param  {object} $scope       当前作用域
     * @param  {object} $routeParams 路由参数
     * @param  {object} shopFac      店铺工厂，用来向后台请求数据
     * @return {object}              Angularjs控制器
     */
    createNew: function($rootScope, $scope, $location, $routeParams, shopFac){
      var res = {};
      res.$rootScope = $rootScope;
      res.$scope = $scope;
      res.$location = $location;
      res.$routeParams = $routeParams;
      res.$scope.posts = {};
      res.$scope.view = {};
      if (!$rootScope.cache.shops) {
        res.$rootScope.cache.shops = shopFac.getAllShops();
      }
      res.$scope.view.shops = res.$rootScope.cache.shops;
      res.$scope.view.shopId = res.$routeParams.shopId;

      var start = res.$location.search().startTime;
      var end = res.$location.search().endTime;

      if (start && end) {
        res.$scope.posts.startTime = start;
        res.$scope.posts.endTime = end;
      }

      return res;
    },
};

//用于生成统计类指令
var StatisticsDirective = {
    /**
     * 构造一个Angularjs指令
     * @method createNew
     * @param  {objcect} statisFac    统计工厂，向后台请求数据
     * @param  {string}  tmplateFile  指令对应的模块文件
     * @param  {string}  path         子页面对应路由路径
     * @param  {string}  urlFunc      统计工厂中的方法名，不同指令对应不同的方法
     * @param  {object}  $routeParams 路由参数
     * @return {[type]}               Angularjs指令
     */
    createNew: function (statisFac, tmplateFile, path, urlFunc, $routeParams) {
      var cmd = {
        restrict: "AE",
        replace: true,
        scope:{
          startTime:'=',
          endTime:'=',
          needSearch: '=',
          page:'=',
          count:'=',
          total:'=',
          shopId:'=',
        },
        templateUrl: tmplateFile,
      };
      cmd.controller = function ($scope, $location) {
        $scope.view = {};

        /**
         * [showDetail description]
         * @method showDetail
         * @param  {string}   idx 子页面路由路径
         * @return {}
         */
        $scope.showDetail = function (idx){
          var url = path+idx;
          $location.search('startTime', $scope.startTime);
          $location.search('endTime', $scope.endTime);
          $location.path(url);
        }

        var callback = function (data) {
          $scope.view.result = data.result;
          $scope.needSearch = false;
        }

        /**
         * [$watch 监视页码变动，并向后台发送请求获取新数据]
         * @method $watch
         * @param  {number} 'page'   请求的页码数
         * @param  {function} function 回调函数
         * @return {[type]}          [description]
         */
        $scope.$watch('page', function (newVal, oldVal) {
          if (newVal && oldVal && newVal !== oldVal) {
            var param = {
              page: $scope.page,
              startTime: $scope.startTime,
              endTime: $scope.endTime,
            };
            urlFunc.call(statisFac, param, callback);
          }
        });

        /**
         * 监视needSearch是否变动
         * @method $watch
         * @param  {string} 'needSearch' 是否需要搜索
         * @param  {function} function     (value        回调函数
         * @return {[type]}              [description]
         */
        $scope.$watch('needSearch', function (value) {
          if (value) {
            var param = {
              startTime: $scope.startTime,
              endTime: $scope.endTime,
            };
            urlFunc.call(statisFac, param, function (data) {
              if (data.code !== 200) {
                if (data.code !== 405) {
                    errorMsg(data);
                }else {
                    $scope.total = 0;
                }
                $scope.needSearch = false;
                delete $scope.view.result;
                return;
              }
              $scope.total = data.result.total;
              $scope.count = data.result.count;
              $scope.page = data.result.page;
              callback(data);
            });
          }
        });
      }

      return cmd;
    }
};

//用于生成详细统计类指令
var StatisticsDetailDirective = {
    /**
     * 构造一个新的指令，主要供详细统计类使用
     * @method createNew
     * @param  {object} statisFac    统计类工厂，用于后台发送请求
     * @param  {string}  tmplateFile  模板文件名
     * @param  {string}  urlFunc       统计工厂回调函数名
     * @param  {object}  $routeParams 路由参数
     * @return {[type]}               生成新的指令，供详细统计页面使用
     */
    createNew: function (statisFac, tmplateFile, urlFunc, $routeParams, STATISTICS_TYPE) {
      var cmd = {
        restrict: "AE",
        replace: true,
        scope:{
          startTime:'=',
          endTime:'=',
          needSearch: '=',
          page:'=',
          count:'=',
          total:'=',
          shopId:'=',
        },
        templateUrl: tmplateFile,
      };
      cmd.controller = function ($scope, $location) {
        $scope.view = {};
        $scope.STATISTICS_TYPE = STATISTICS_TYPE;
        if (!$scope.shopId && $routeParams.shopId) {
          $scope.shopId = $routeParams.shopId;
        }

        var callback = function (data) {
          $scope.result = data.result;
          $scope.needSearch = false;
        }

        $scope.$watch('page', function (newPage, oldPage) {
          if (newPage && oldPage && newPage !== oldPage) {
            var param = {
              page: $scope.page,
              startTime: $scope.startTime,
              endTime: $scope.endTime,
            };
            $scope.shopId && (param.shopId = $scope.shopId);
            $scope.sendPost(param, callback);
          }
        });

        $scope.$watch('needSearch', function (value) {
          if (value) {
            var param = {
              startTime: $scope.startTime,
              endTime: $scope.endTime,
            };
            $scope.shopId && (param.shopId = $scope.shopId);
            $scope.sendPost(param, function (data) {
              $scope.total = data.result.total;
              $scope.count = data.result.count;
              $scope.page = data.result.page;
              callback(data);
            });
          }
        });

        $scope.sendPost = function (param, cb) {
          urlFunc.call(statisFac, param, function (data) {
            if (data.code !== 200 ) {
              if (data.code !== 405) {
                  errorMsg(data);
              }else{
                $scope.total = 0;
              }
              $scope.needSearch = false;
              delete $scope.view.result;
              return;
            }
            cb(data);
          });
        }

        /**
         * 根据前页传递的参数，向后台发送请求获取数据
         */
        var start = $location.search().startTime;
        var end = $location.search().endTime;
        if (start && end) {
          var param = {};
          param['startTime'] = $scope.startTime = start;
          param['endTime'] = $scope.endTime = end;
          param['shopId'] = $scope.shopId;
          $scope.sendPost(param, function (data) {
            $scope.total = data.result.total;
            $scope.count = data.result.count;
            $scope.page = data.result.page;
            callback(data);
          });
        }
      }

      return cmd;
    }
};

function appRouteConfig($routeProvider) { //路由规则
  $routeProvider.when('/statistics',{ //报表总入口
    templateUrl:"public/js/common/statistics.html",
    controller:"StatisticsCtr"
  }).when('/statistics/charge/:shopId', { //充值详细
    templateUrl:"public/js/directive/rechargeTemp.html",
    controller:"DetailCtr"
  }).when('/statistics/coupon/:shopId', {   //券详细
    templateUrl:"public/js/directive/couponTemp.html",
    controller:"DetailCtr"
  }).when('/statistics/sms/:shopId',{       //短消息详细
    templateUrl:"public/js/directive/smsTemp.html",
    controller:"DetailCtr",
  }).when('/statistics/relation/:shopId',{  //往来消息详细
    templateUrl:"public/js/directive/relationTemp.html",
    controller:"DetailCtr"
  }).when('/statistics/point/:shopId',{     // 积分详细
    templateUrl:"public/js/directive/pointTemp.html",
    controller:"DetailCtr"
  });
};

app.controller('StatisticsCtr', ['$rootScope','$scope', '$location', 'shopFactory',function ($rootScope, $scope, $location, shopFac) {
  $scope.posts = {};
  $scope.view = {};
  $scope.config.breadset = [{ //
    name: "统计报表",
    href: indexUrl + "/admin.html#/statistics"
  }, {
    name: "统计报表"
  }]; //面包屑
  $rootScope.cache = {
    shops: shopFac.getAllShops(),
  };
}]);

app.controller('DetailCtr',['$rootScope','$scope', '$location', '$routeParams', 'shopFactory',  function ($rootScope, $scope, $location, $routeParams,shopFac) {
  var chargeCtr = StatisticsDetail.createNew($rootScope, $scope, $location, $routeParams,shopFac);
}]);
