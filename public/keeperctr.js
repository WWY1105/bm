app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: "keeper/index.html",
            controller: "HomeCtr"
        }) //首页
        .when('/shop', {
            templateUrl: "keeper/Shop/index.html", controller: "ShopCtr"
        }) //门店员工展示
        .when('/shop/add', {
            templateUrl: "keeper/Shop/add.html", controller: "ShopAddCtr"
        }) //门店添加第一步
        .when('/shop/add2', {
            templateUrl: "keeper/Shop/add2.html", controller: "ShopAdd2Ctr"
        }) //门店添加第二步
        .when('/shop/add3', {
            templateUrl: "keeper/Shop/add3.html", controller: "ShopAdd3Ctr"
        }) //门店添加第三步
        .when('/shop/add4', {
            templateUrl: "keeper/Shop/add4.html", controller: "ShopAdd4Ctr"
        }) //门店添加第四步
        .when('/shop/add5', {
            templateUrl: "keeper/Shop/add5.html", controller: "ShopAdd5Ctr"
        }) //门店添加第四步
        .when('/shop/edit', {
            templateUrl: "keeper/Shop/edit.html", controller: "ShopAddCtr"
        }) //门店修改
        .when('/shop/businesstime', {
            templateUrl: "keeper/Shop/businesstime.html", controller: "ShopBusinesstimeCtr"
        }) //门店营业时间修改
        .when('/shop/add2re', {
            templateUrl: "keeper/Shop/add2re.html", controller: "TablesCtr"
        }) //添加桌台返回

        .when('/tables', {
            templateUrl: "keeper/Shop/tables.html", controller: "TablesCtr"
        }) //桌台管理
        .when('/table/tables', {
            templateUrl: "keeper/Table/tables.html", controller: "TablesCtr"
        }) //桌台管理
        .when('/table/regions', {
            templateUrl: "keeper/Table/regions.html", controller: "RegionsCtr"
        }) //桌台管理
        .when('/table/region/:id', {
            templateUrl: "keeper/Table/regionDetail.html", controller: "RegionDetailCtr"
        }) //桌台管理
        .when('/table/reserve', {
            templateUrl: "keeper/Table/reserve/index.html",
            controller: "ReserveCtr"
        }) //预定
        .when('/table/reserve/:aid', {
            templateUrl: "keeper/Table/reserve/detail.html",
            controller: "ReserveDetailCtr"
        })

        .when('/rule/source', {
            templateUrl: "keeper/rule/source/index.html",
            controller: "sourceCtr"
        }) //素材管理
        .when('/rule/addsource', {
            templateUrl: "keeper/rule/source/addsource.html",
            controller: "addsourceCtr"
        }) //素材管理-添加素材
        .when('/rule/editsource/:id', {
            templateUrl: "keeper/rule/source/editsource.html",
            controller: "editsourceCtr"
        }) //素材管理-修改素材


        .when('/staff', {
            templateUrl: "keeper/Staff/show.html",
            controller: "StaffShowCtr"
        }) //门店员工
        .when('/staff/duty', {
            templateUrl: "keeper/Staff/duty/index.html",
            controller: "DutyCtr"
        }) //值班
        .when('/staff/duty/:date', {
            templateUrl: "keeper/Staff/duty/edit.html",
            controller: "DutyEditCtr"
        })
        .when('/staff/templateDuty', {
            templateUrl: "keeper/Staff/duty/templateDuty.html",
            controller: "TemplateDutyCtr"
        }) //轮班模板
        .when('/staff/staffedit/:guestid', {
            templateUrl: "keeper/Staff/staffedit.html", controller: "StaffeditCtr"
        }) //员工编辑
        .when('/staff/staffoperation/:guestid', {
            templateUrl: "keeper/Staff/staffoperation.html", controller: "Staffoperation"
        }) //权限管理
        .when('/staff/staffadd', {
            templateUrl: "keeper/Staff/staffadd.html", controller: "StaffaddCtr"
        }) //员工添加
        .when('/comment', {
            templateUrl: "keeper/comment.html", controller: "CommentCtr"
        }) //评价
        .when('/customer/charge/:userId', {
            templateUrl: "admin/customer/charge.html", controller: "CustomerChargeCtr"
        }) //会员充值
        .when('/customer/point/:userId', {
            templateUrl: "admin/customer/point.html",
            controller: "CustomerPointCtr"
        }) //顾客积分
        .when('/customer/coupon/:userId', {
            templateUrl: "admin/customer/coupon.html", controller: "CustomerCouponCtr"
        }) //顾客发券
        .when('/customer/upgrade/:userId', {
            templateUrl: "admin/customer/upgrade.html",
            controller: "CustomerUpgradeCtr"
        }) //会员充值
        .when('/customer/add', {
            templateUrl: "keeper/customer/add.html", controller: "CustomerAddCtr"
        }) //添加顾客
        .when('/customer', {
            templateUrl: "keeper/customer/index.html", controller: "CustomerCtr"
        }) //顾客
        .when('/customer/tag', {
            templateUrl: "keeper/customer/tag.html",
            controller: "CustomerTagCtr"
        }) //顾客new
        .when('/customer/:userId', {
            templateUrl: "keeper/customer/index.html", controller: "CustomerCtr"
        }) //顾客
        .when('/customer/details/:userId', {
            templateUrl: "admin/customer/details.html",
            controller: "CustomerDetailsCtr"
        }) //顾客详情

        .when('/rule', {
            templateUrl: "keeper/rule/index.html", controller: "RuleCtr"
        }) //营销规则列表
        .when('/rule/coupon', {
            templateUrl: "keeper/rule/coupon.html", controller: "RuleCouponCtr"
        }) //券管理
        .when('/rule/reward', {
            templateUrl: "keeper/rule/reward.html",
            controller: "RuleRewardCtr"
        }) //代用币
        .when('/rule/member', {
            templateUrl: "keeper/rule/member.html", controller: "RuleMemberCtr"
        }) //会员规则

        .when('/staff/password/:guestid', {
            templateUrl: "keeper/Staff/password.html",
            controller: "passwordCtr"
        }) //重置密码
        .when('/password', {
            templateUrl: "my/password.html", controller: "edit_passwordCtr"
        }) //修改自己的密码
        .when('/devices', {
            templateUrl: "keeper/devices/index.html", controller: "DevicesCtr"
        }) //设备管理
        .when('/mall/dish', {
            templateUrl: "keeper/mall/dish/index.html",
            controller: "DishCtr"
        }) //菜品列表
        .when('/mall/tag', {
            templateUrl: "keeper/mall/tag/index.html",
            controller: "TagCtr"
        }) //标签列表
        .when('/mall/category', {
            templateUrl: "keeper/mall/category/index.html",
            controller: "CategoryCtr"
        })//品类
        .when('/mall/meal', {
            templateUrl: "keeper/mall/meal/index.html",
            controller: "MealCtr"
        }) //套餐
        .when('/mall/buy', {
            templateUrl: "keeper/mall/buy/index.html",
            controller: "BuyCtr"
        }) //卖券
        .when('/doc', {
            templateUrl: "keeper/doc/index.html?v=2",
            controller: "DocCtr"//报表列表
        })
        .when('/finance', {
            templateUrl: "keeper/finance/index.html",
            controller: "FinanceCtr"//报表列表
        })
        .when('/finance/search', {
            templateUrl: "keeper/finance/search.html",
            controller: "FinanceSearchCtr"//报表列表
        })
        .when('/finance/searchday', {
            templateUrl: "keeper/finance/searchday.html",
            controller: "FinanceSearchDayCtr"//报表列表
        })
        .otherwise({redirectTo: "/"});
}]);
/*------------------------------------------------------------------*/
app.controller('HomeCtr', function ($scope) { //主页
    $scope.ruleDic = {nonParticipations: "不参与活动商品", periods: "有效时段", time: "时间", shops: "分店"}; //将key转为中文
    $scope.config.breadset = [{name: "首页"}]; //面包屑;
    $scope.view = {customerCount: {}, shop: []};
    customerCount = ajaxSendFn({}, "/customer/count", "GET").result || [];
    for (var x in customerCount) $scope.view.customerCount[customerCount[x].type] = customerCount[x]
    $scope.view.rule = ajaxSendFn({}, "/activity", "GET").result || [];
    for (x in $scope.view.rule) { //定义icon
        tem = $scope.view.rule[x];
        $scope.view.rule[x].icon = {};
        for (y in tem.rules) {
            tem.rules[y].type = tem.rules[y].type.split("_");
            $scope.view.rule[x].icon[tem.rules[y].type[0]] = 1;
        }
    }
    $scope.view.satisfaction = {"1001": "很棒", "1002": "一般", "1003": "较差"};
    var tmpResult = ajaxSendFn({}, "/comments/shop", "GET").result;
    if (tmpResult) {
        $scope.view.comment = tmpResult.items || [];
    }
    //$scope.view.pic=ajaxSendFn({}, "/pic/shop?source=9002", "GET").result || [];
});
app.controller('ShopCtr', function ($scope, $location, $filter) { //店铺
    $scope.config.breadset = [{name: "我的门店"}]; //面包屑;

    $scope.shop = ajaxSendFn({}, "/shops/shop", "GET").result;
    if($scope.shop.id){
        $scope.videoInfo = ajaxSendFn({}, "/shop/videos/shop/"+$scope.shop.id, "GET").result;
    }

    if (!$scope.shop.businessTimes) {
        $location.path("/shop/add");
        return;
    }
    if ($scope.shop.state == '1003') {
        $scope.qrcode = {};
        var data = ajaxSendFn({}, "/shops/shop/qrcode", "GET");
        if (data.code == 200) {
            $scope.qrcode = data.result;
        }
    }
    $scope.shopType = [{
        code: '1001',
        text: '支持桌边付'
    }, {
        code: '1002',
        text: '不支持桌边付'
    }];
    $scope.qrcodeType = [{
        code: '1001',
        text: "上宾二维码"
    }, {
        code: '1002',
        text: "微信二维码"
    }];
    $scope.stageCheck = [{
        code: '101',
        text: '展示二维码等待捷账宝扫描'
    }, {
        code: '102',
        text: '用户主动输入金额'
    }];
    $scope.tableCheck = [
        {
            code: '100',
            text: '点击买单后呼叫捷账宝'
        }, {
            code: '101',
            text: '展示二维码等待捷账宝扫描'
        }, {
            code: '102',
            text: '用户主动输入金额'
        }];
    $scope.view = {};
    $scope.tem = {
        uploadTitle: "选择要上传的图片"
    };
    $scope.tem.type = {
        "1001": "早市",
        "1002": "午市",
        "1003": "下午茶",
        "1004": "晚市",
        "1005": "夜宵"
    };

    $scope.authed = {
        "1001": "创建中",
        "1002": "认证审核中",
        "1003": "已通过审核",
        "1004": "关闭审核中",
        "1005": "停用"
    };

    $scope.view = {
        businesstime: {
            1001: {startTime: '', endTime: ''},
            1002: {startTime: '', endTime: ''},
            1003: {startTime: '', endTime: ''},
            1004: {startTime: '', endTime: ''},
            1005: {startTime: '', endTime: ''}
        }
    };
    $scope.shop.openingDay = $filter("ltdate")($scope.shop.openingDay);
    /*图片*/
    $scope.addpic = function () {
        $scope.view.materials = ajaxSendFn({count: 10}, "/materials", "GET").result || [];
        $scope.view.groups = ajaxSendFn({}, "/materials/group", "GET").result || [];
        $scope.view.select = -1;
        $scope.view.leftIndex = -2;
        $("#addpic").modal("show");
    };
    $scope.addVid = function() {
        $scope.view.video= ajaxSendFn({count: 10}, "/videos", "GET").result || []
        $scope.view.vidgroups= ajaxSendFn({}, "/videos/group", "GET").result || []
        $('#addvid').modal('show')
    }
    $scope.downloadFn = function (url) {
        var a1 = document.createElement('a');
        //$scope.gettables.length
        a1.setAttribute("href", url);
        a1.setAttribute("download", "");
        var evObj = document.createEvent('MouseEvents');
        evObj.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, true, false, 0, null);
        a1.dispatchEvent(evObj);
    }
    /*图片end*/
    $scope.removeImg = function (a) { //
        removere = ajaxSendFn({}, "/pic/" + $scope.shop.picUrls[a].id, "DELETE");
        if (removere.code == 200) { //
            $scope.shop.picUrls.splice(a, 1);
        }
    };
    $scope.setCover = function (picUrl) {
        var result = ajaxSendFn({}, "/pic/" + picUrl + "/cover", "POST");
        if (result.code == 200) {
            alert("设置成功");
        } else {
            errorMsg(result);
        }
    };
    $scope.removeCover = function (picUrl) {
        var result = ajaxSendFn({}, "/pic/" + picUrl + "/cover", "DELETE");
        if (result.code == 200) {
            alert("成功取消");
        } else {
            errorMsg(result);
        }
    };
    $scope.bigpicshow = function (a) {
        $scope.view.bigpic = a.substring(0, a.lastIndexOf(".", a)) + "_1" + a.substring(a.lastIndexOf(".", a));
        $("#bigpic").modal('show');
    };
    $scope.deleteShopFn = function () {
        if (confirm("是否确定申请关闭?")) {
            var data = ajaxSendFn({}, "/shops/" + $scope.shop.id, "POST");
            if (data.code == 200) alert("申请关闭成功！");
            else errorMsg(data);

        }
    }
    $scope.openShopFn = function () {
        var data = ajaxSendFn({}, "/shops/shop/audit", "POST");
        if (data.code == 200) alert("启用成功！");
        else errorMsg(data);
    }
    $scope.shopedit = function () {
        if (!$scope.posts) {
            $scope.posts = $scope.shop;
            /*地区*/
            $scope.view.style = ajaxSendFn({}, "/dict/CUISINE/item", "GET").result;
            for (var i = 0; i < $scope.view.style.length; i++) {
                if ($scope.posts.cuisineText == $scope.view.style[i].text) {
                    $scope.posts.cuisine = $scope.view.style[i].code;
                }
            }
            $scope.area = {
                area1: $scope.posts.area.substring(0, 2) + "0000",
                area2: $scope.posts.area.substring(0, 4) + "00",
                area3: $scope.posts.area
            };
            $scope.areaJson1 = ajaxSendFn({}, "/dict/area", "GET").result;
            $scope.areaJson2 = ajaxSendFn({code: $scope.area.area1}, "/dict/area", "GET").result;
            $scope.areaJson3 = ajaxSendFn({code: $scope.area.area2}, "/dict/area", "GET").result;
            if (!$scope.areaJson3) {
                $scope.area.area2 = $scope.posts.area;
                delete $scope.area.area3;
            }
            $scope.area1change = function (show) {
                $scope.areaChanged = true;
                $scope.areaJson2 = ajaxSendFn({code: $scope.area.area1}, "/dict/area", "GET").result;
                $scope.area.area2 = $scope.areaJson2[0].code;
                $scope.areaJson3 = ajaxSendFn({code: $scope.area.area2}, "/dict/area",
                    "GET").result;
                if ($scope.areaJson3 && $scope.areaJson3.length > 0) {
                    $scope.area.area3 = $scope.areaJson3[0].code;
                } else {
                    delete $scope.area.area3;
                }
            };

            $scope.area2change = function (show) {
                $scope.areaChanged = true;
                $scope.areaJson3 = ajaxSendFn({code: $scope.area.area2}, "/dict/area", "GET").result;
                if ($scope.areaJson3 && $scope.areaJson3.length > 0) {
                    $scope.area.area3 = $scope.areaJson3[0].code;
                } else {
                    delete $scope.area.area3;
                }
            };
        }
        /*地区end*/
        $("#shopedit").modal('show');
    }
    $scope.senposts = function () { //
        $scope.config.modalLink = ""; //判断是否返回
        sends = { //
            tel: $scope.posts.tel,
            openingDay: $filter("date")($scope.posts.openingDay, "yyyy-MM-dd HH:mm:ss"),
            cuisine: $scope.posts.cuisine,
            avgprice: $scope.posts.avgprice,
            area: $scope.areaChanged ? ($scope.area.area3 || $scope.area.area2) : $scope.posts.area,
            address: $scope.posts.address,
            latitude: $scope.posts.latitude || '',
            longitude: $scope.posts.longitude || '',
            shopType: $scope.posts.shopType || '',
            //qrcodeType: $scope.posts.qrcodeType || '1001',
            tableCheck: $scope.posts.tableCheck || '',
            stageCheck: $scope.posts.stageCheck || '',
            parkingDescription: $scope.posts.parkingDescription || '',
            description: $scope.posts.description || '',
            id: $scope.posts.id
        };
        sendJson = JSON.stringify(sends);
        postsend = ajaxSendFn(sendJson, "/shops/shop", "POST", 1);
        if (postsend.code == 200) {
            $("#shopedit").modal('hide');
            //$scope.shop = ajaxSendFn({}, "/shops/shop", "GET").result;
            //$scope.shop.openingDay = $filter("ltdate")($scope.shop.openingDay);
            alert("保存成功");
        } else { //
            alert(postsend.message);
        }
    };
//addpic
    $scope.changeFn = function (index,item) {
        if ($scope.view.select == index) {
            $scope.view.select = -1;
        } else {
            $scope.view.select = index;
        }
    }
    $scope.changevidFn = function (index,item) {
        console.log(item)
        $scope.video = item
        if ($scope.view.select == index) {
            $scope.view.select = -1;
        } else {
            $scope.view.select = index;
        }
    }

    $scope.imgUpload = function (t) {
        if (t.files[0].size > 5 * 1024 * 1024) {
            alert("图片不得大于5M，图片格式为png,jpg,jpeg,bmp");
            return;
        }
        POSTurl = basicUrl + "/materials?";
        options = {
            url: POSTurl + sortUrl(),
            type: "POST",
            success: function (data) {
                if (data.code === 200) {
                    $scope.$apply(function () {
                        $scope.view.materials = ajaxSendFn({count: 10}, "/materials", "GET").result;
                        $scope.view.select = 0;
                    });
                } else {
                    alert(data.message);
                }

            }
        };
        $("#iimgform").ajaxSubmit(options);
    };
    $scope.groupList = function (index) {
        url = "/materials";
        if (index >= 0) {
            url = "/materials/group/" + $scope.view.groups[index].id + "/materials"
        }
        if (index == -1) {
            url = "/materials/group/materials";
        }
        $scope.view.materials = ajaxSendFn({count: 10}, url, "GET").result;
        $scope.view.leftIndex = index;

    }
    $scope.vidgroupList = function (index) {
        url = "/videos";
        if (index >= 0) {
            url = "/videos/group/" + $scope.view.groups[index].id + "/videos"
        }
        if (index == -1) {
            url = "/videos/group/videos";
        }
        $scope.view.video = ajaxSendFn({count: 10}, url, "GET").result;
        $scope.view.leftIndex = index;

    }
    $scope.sendGroup = function () {
        var data = ajaxSendFn({name: $scope.post.name}, "/materials/group", "POST");
        if (data.code === 200) {
            $scope.view.checkName = false;
            $scope.view.groups = ajaxSendFn({}, "/materials/group", "GET").result;
        } else {
            alert(data.message);
        }
    }
    $scope.pageChange = function () {
        console.log('33')
        url = "/materials";
        if ($scope.view.leftIndex >= 0) {
            url = "/materials/group/" + $scope.view.groups[$scope.view.leftIndex].id + "/materials"
        }
        if ($scope.view.leftIndex == -1) {
            url = "/materials/group/materials";
        }
        var json = {page: $scope.view.materials.page, count: $scope.view.materials.count};
        $scope.view.materials = ajaxSendFn(json, url, "GET").result;
    };
    $scope.vidUpload = function (t) {
        if (t.files[0].size > 10 * 1024 * 1024) {
            alert("视频不得大于10M");
            return;
        }
        POSTurl = basicUrl + "/videos?";
        options = {
            url: POSTurl + sortUrl(),
            type: "POST",
            success: function (data) {
                if (data.code === 200) {
                    $scope.$apply(function () {
                        $scope.view.materials = ajaxSendFn({count: 10}, "/videos", "GET").result;
                        $scope.view.select = 0;
                    });
                } else {
                    alert(data.message);
                }

            }
        };
        $("#iimgform1").ajaxSubmit(options);
    };
    $scope.submitFn = function () {
        if ($scope.view.select >= 0) {
            var data = ajaxSendFn({id: $scope.view.materials.items[$scope.view.select].id}, "/pic/shop", "POST");
            if (data.code == 200) {
                $scope.shop.picUrls.push(data.result);
                $("#addpic").modal("hide");
            } else {
                alert(data.message);
            }
            // $scope.picUrl = $scope.view.materials.items[$scope.view.select].url;
        }
    }
    /*收银*/
    $scope.view.types = ajaxSendFn({}, "/shops/cashier", "GET").result;
    $scope.auth = function () {
        if (!$scope.view.type) {
            alert("请先选择收银系统");
            return;
        }
        var data = ajaxSendFn({}, "/shops/cashier/" + $scope.view.type, "GET");
        if (data.code == 200) {
            location.href = data.result.url;
        } else {
            alert("授权失败，请重试！");
        }
    }
    /*门店介绍*/
    $scope.view.introduction = ajaxSendFn({}, "/shops/shop/introduction", "GET").result || [{}];

    $scope.view.videos = ajaxSendFn({}, "/shop/videos/shop", "GET").result || [{}];

    $scope.introductionFn = function () {
        var jsons = [];
        for (var i in $scope.view.introduction) {
            var json = {};
            if ($scope.view.introduction[i].url) {
                json.url = $scope.view.introduction[i].url
            }
            if ($scope.view.introduction[i].title) {
                json.title = $scope.view.introduction[i].title
            }
            if ($scope.view.introduction[i].content) {
                json.content = $scope.view.introduction[i].content
            }
            jsons.push(json)
        }
        var data = ajaxSendFn(JSON.stringify(jsons), "/shops/shop/introduction", "POST");
        if (data.code == 200) {
            $scope.cancelIntroductionFn();
            $("#introduction").modal("hide");
        } else {
            alert("操作失败，请重试！");
        }
    }
    $scope.videoFn = function () {
       var json = {
            id: $scope.video.id
        }
        var data = ajaxSendFn(JSON.stringify(json), "/shop/videos", "POST");
        if (data.code == 200) {
            $scope.cancelvideoFn();
            alert("操作成功！");
            $("#addvid").modal("hide");
        } else {
            alert("操作失败，请重试！");
        }
    }
        
    $scope.coverFn = function (id) {
         var data = ajaxSendFn({}, "/shop/videos/"+id+"/cover", "POST");
         if (data.code == 200) {
             $scope.cancelcoverFn();
             $("#cover").modal("hide");
         } else {
             alert("操作失败，请重试！");
         }
     }
     $scope.removecoverFn = function (id) {
        var data = ajaxSendFn({}, "/shop/videos/"+id+"/cover", "DELETE");
        if (data.code == 200) {
            $scope.cancelcoverFn();
            $("#cover").modal("hide");
        } else {
            alert("操作失败，请重试！");
        }
    }
    $scope.cancelvideoFn = function () {
        $("#addvidpic").modal("hide");
        $scope.view.videos = ajaxSendFn({}, "/shop/videos/shop", "GET").result || [{}];
    }
    $scope.cancelcoverFn = function () {
        $("#cover").modal("hide");
        $scope.view.videos = ajaxSendFn({}, "/shop/videos/shop", "GET").result || [{}];
    }
    $scope.cancelIntroductionFn = function () {
        $("#introduction").modal("hide");
        $scope.view.introduction = ajaxSendFn({}, "/shops/shop/introduction", "GET").result || [{}];
    }

});

app.controller('ShopAddCtr', function ($scope, $filter, $location) { //主页
    $scope.tem = {
        uploadTitle: "选择要上传的图片"
    };
    $scope.areaChanged = false;
    $scope.getShop = ajaxSendFn({}, "/shops/shop", "GET").result;
    $scope.posts = $scope.getShop;
    if (!$scope.posts.openingDay) { //
        var a = new Date();
        $scope.posts.openingDay = $filter("date")(a, "yyyy-MM-dd HH:mm:ss");
    }
    $scope.posts.openingDay = new Date(Date.parse($scope.posts.openingDay.replace(/-/g, "/")));
    //var d = $scope.config.time;
    //d.setDate(d.getDate() + 180);
    $scope.view = {
        //endtime: d,
        picurl: {}
    };
    $scope.view.style = ajaxSendFn({}, "/dict/CUISINE/item", "GET").result;
    $scope.area = {
        area1: $scope.posts.area.substring(0, 2) + "0000",
        area2: $scope.posts.area.substring(0, 4) + "00",
        area3: $scope.posts.area,
    };
    $scope.areaJson1 = ajaxSendFn({}, "/dict/area", "GET").result;
    $scope.areaJson2 = ajaxSendFn({code: $scope.area.area1}, "/dict/area", "GET").result;
    $scope.areaJson3 = ajaxSendFn({code: $scope.area.area2}, "/dict/area", "GET").result;
    if (!$scope.areaJson3) {
        $scope.area.area2 = $scope.posts.area;
        delete $scope.area.area3;
    }
    ;

    $scope.view.picurl = ajaxSendFn({source: "9002"}, "/pic/shop", "GET").result || [];
    $scope.area1change = function (show) {
        $scope.areaChanged = true;
        $scope.areaJson2 = ajaxSendFn({code: $scope.area.area1}, "/dict/area", "GET").result;
        $scope.area.area2 = $scope.areaJson2[0].code;
        // alert($scope.area.area2)
        $scope.areaJson3 = ajaxSendFn({code: $scope.area.area2}, "/dict/area",
            "GET").result;
        if ($scope.areaJson3 && $scope.areaJson3.length > 0) {
            $scope.area.area3 = $scope.areaJson3[0].code;
        } else {
            delete $scope.area.area3;
        }
    };

    $scope.area2change = function (show) {
        $scope.areaChanged = true;
        $scope.areaJson3 = ajaxSendFn({code: $scope.area.area2}, "/dict/area", "GET").result;
        if ($scope.areaJson3 && $scope.areaJson3.length > 0) {
            $scope.area.area3 = $scope.areaJson3[0].code;
        } else {
            delete $scope.area.area3;
        }
    };
    // $scope.area1change("show");

    //经纬度map方法
    mapFn = function (a) { //
        if (!a.latitude || !a.longitude) return;
        $scope.view.map = "http://restapi.amap.com/v3/staticmap?zoom=14&size=200*120&markers=-1,http://webapi.amap.com/images/1.png,0:" +
            a.longitude + "," + a.latitude + "&key=ee95e52bf08006f63fd29bcfbcf21df0";
        console.log($scope.view.map);
    }
    initialize = function (a, b) {
        if (!a.address || a.address == '') a.address = a.qu;
        var mapObj;
        var
            marker = new Array();
        var windowsArr = new Array();
        mapObj = new AMap.Map(a.id);

        function geocoder() {
            var MGeocoder; //加载地理编码插件
            AMap.service(["AMap.Geocoder"], function () {
                MGeocoder = new AMap.Geocoder({
                    radius: 5000 //范围，默认：500
                }); //返回地理编码结果
                //地理编码
                MGeocoder.getLocation(a.city + a.address, function (status, result) {
                    if (status === 'complete' && result.info === 'OK') {
                        var resultStr = ""; //地理编码结果数组
                        var geocode = new Array();
                        geocode = result.geocodes; //拼接输出html
                        if (b == 1) { //
                            latlng = addmarker(0, geocode[0], $scope.posts);
                        } else {
                            latlng = addmarker(0, geocode[0]);
                        }
                        mapObj.setFitView();
                    }
                });
            });
        }

        function addmarker(i, d, p) {
            if ($scope.posts.latitude && $scope.posts.longitude && !p) { //
                var latY = $scope.posts.latitude;
                var lngX = $scope.posts.longitude;
            } else { //
                var lngX = d.location.getLng();
                var latY = d.location.getLat();
            }
            $scope.view.latitude = latY;
            $scope.view.longitude = lngX;
            var markerOption = {
                map: mapObj,
                icon: "http://webapi.amap.com/images/" + (i + 1) + ".png",
                position: new AMap.LngLat(lngX, latY),
                draggable: true, //点标记可拖拽
                cursor: 'move', //鼠标悬停点标记时的鼠标样式
                raiseOnDrag: true
                //鼠标拖拽点标记时开启点标记离开地图的效果
            };
            var mar = new AMap.Marker(markerOption);
            marker.push(new AMap.LngLat(lngX, latY));
            var infoWindow = new AMap.InfoWindow({
                content: d.formattedAddress,
                autoMove: true,
                size: new AMap.Size(150, 0),
                offset: {
                    x: 0,
                    y: -30
                }
            });
            windowsArr.push(infoWindow);
            var aa = function (e) {
                $scope.view.latitude = mar.getPosition().lat;
                $scope.view.longitude = mar.getPosition().lng;
            };
            AMap.event.addListener(mar, "dragend", aa);
        } //地理编码返回结果展示
        geocoder();
    }
    mapFn($scope.posts);
    $scope.mapModal = function () {
        temcity = $scope.getShop.areaText.split("省");
        if (temcity.length == 2) { //
            temcity[0] = temcity[1];
        }
        temcity = temcity[0].split("市");
        var map = {
            id: "mapin",
            latitude: $scope.posts.latitude,
            longitude: $scope.posts.longitude,
            city: temcity[0] + "市",
            qu: temcity[1],
            address: $scope.posts.address
        };
        initialize(map);
        $("#map").modal("show");
    }
    $scope.addpic = function () {
        $scope.view.materials = ajaxSendFn({count: 10}, "/materials", "GET").result || [];
        $scope.view.groups = ajaxSendFn({}, "/materials/group", "GET").result || [];
        $scope.view.select = -1;
        $scope.view.leftIndex = -2;
        $("#addpic").modal("show");
    }
    $scope.senposts = function (a) { //
        $scope.config.modalLink = ""; //判断是否返回
        sends = { //
            tel: $scope.posts.tel,
            openingDay: $filter("date")($scope.posts.openingDay, "yyyy-MM-dd HH:mm:ss"),
            cuisine: $scope.posts.cuisine,
            avgprice: $scope.posts.avgprice,
            area: $scope.areaChanged ? ($scope.area.area3 || $scope.area.area2) : $scope.posts.area,
            address: $scope.posts.address,
            latitude: $scope.posts.latitude,
            longitude: $scope.posts.longitude,
            parkingDescription: $scope.posts.parkingDescription,
            description: $scope.posts.description,
            id: $scope.posts.id
        };
        sendJson = JSON.stringify(sends);
        postsend = ajaxSendFn(sendJson, "/shops/shop", "POST", 1);
        if (postsend.code == 200) {
            if (a) {
                alert("保存成功");
                $location.path("/shop/");
            } else {
                if ($scope.getShop.shopType == "1002") {
                    $location.path("/shop/add3/");
                } else {
                    $location.path("/shop/add2/");
                }
            }
        } else { //
            alert(postsend.message);
        }
    };
    $scope.resetpostion = function (argument) {
        temcity = ajaxSendFn({}, "/dict/AREA/" +
            $scope.posts.area + "/text", "GET").result.text;
        temcity = temcity.split("省");
        if (temcity.length == 2) { //
            temcity[0] = temcity[1];
        }
        temcity = temcity[0].split("市");
        var map = {
            id: "mapin",
            latitude: $scope.posts.latitude,
            longitude: $scope.posts.longitude,
            city: temcity[0] + "市",
            qu: temcity[1],
            address: $scope.posts.address
        };
        initialize(map, 1);
        $("#map").modal("show");
    }
    $scope.imgEditFn = function ($event) { //
        console.log($event.target);
    }
    $scope.setpostion = function () {
        $scope.posts.latitude = $scope.view.latitude;
        $scope.posts.longitude = $scope.view.longitude;
        mapFn($scope.posts);
        $("#map").modal("hide");
    }
    $scope.removeImg = function (a) { //
        removere = ajaxSendFn({}, "/pic/" + $scope.view.picurl[a].id, "DELETE");
        if (removere.code == 200) { //
            $scope.view.picurl.splice(a, 1);
            console.log($scope.view.picurl);
        }
    }
    $scope.setCover = function (picUrl) {
        var result = ajaxSendFn({}, "/pic/" + picUrl + "/cover", "POST");
        if (result.code == 200) {
            alert("设置成功");
        } else {
            errorMsg(result);
        }
    }
    $scope.removeCover = function (picUrl) {
        var result = ajaxSendFn({}, "/pic/" + picUrl + "/cover", "DELETE");
        if (result.code == 200) {
            alert("成功取消");
        } else {
            errorMsg(result);
        }
    };
    $scope.bigpicshwo = function (a) {
        $scope.view.bigpic = a.substring(0, a.lastIndexOf(".", a)) + "_1" + a.substring(a.lastIndexOf(".", a));
        $("#bigpic").modal('show');
    }

    //addpic
    $scope.changeFn = function (index) {
        if ($scope.view.select == index) {
            $scope.view.select = -1;
        } else {
            $scope.view.select = index;
        }
    }

    $scope.imgUpload = function (t) {
        if (t.files[0].size > 5 * 1024 * 1024) {
            alert("图片不得大于5M，图片格式为png,jpg,jpeg,bmp");
            return;
        }
        POSTurl = basicUrl + "/materials?";
        options = {
            url: POSTurl + sortUrl(),
            type: "POST",
            success: function (data) {
                if (data.code === 200) {
                    $scope.$apply(function () {
                        $scope.view.materials = ajaxSendFn({count: 10}, "/materials", "GET").result;
                        $scope.view.select = 0;
                    });
                } else {
                    alert(data.message);
                }

            }
        };
        $("#iimgform").ajaxSubmit(options);
    };
    $scope.groupList = function (index) {
        url = "/materials";
        if (index >= 0) {
            url = "/materials/group/" + $scope.view.groups[index].id + "/materials"
        }
        if (index == -1) {
            url = "/materials/group/materials";
        }
        $scope.view.materials = ajaxSendFn({count: 10}, url, "GET").result;
        $scope.view.leftIndex = index;

    }
    $scope.sendGroup = function () {
        var data = ajaxSendFn({name: $scope.post.name}, "/materials/group", "POST");
        if (data.code === 200) {
            $scope.view.checkName = false;
            $scope.view.groups = ajaxSendFn({}, "/materials/group", "GET").result;
        } else {
            alert(data.message);
        }
    }
    $scope.pageChange = function () {
        url = "/materials";
        if ($scope.view.leftIndex >= 0) {
            url = "/materials/group/" + $scope.view.groups[$scope.view.leftIndex].id + "/materials"
        }
        if ($scope.view.leftIndex == -1) {
            url = "/materials/group/materials";
        }
        var json = {page: $scope.view.materials.page, count: $scope.view.materials.count};
        $scope.view.materials = ajaxSendFn(json, url, "GET").result;
    };
    $scope.submitFn = function () {
        if ($scope.view.select >= 0) {
            var data = ajaxSendFn({id: $scope.view.materials.items[$scope.view.select].id}, "/pic/shop", "POST");
            if (data.code == 200) {
                $scope.view.picurl.push(data.result);
                $("#addpic").modal("hide");
            } else {
                alert(data.message);
            }
            // $scope.picUrl = $scope.view.materials.items[$scope.view.select].url;
        }
    }

})
/*-----------------------------------------------------*/
app.controller('ShopAdd2Ctr', function ($scope, $location) {
    $scope.gettable = ajaxSendFn({}, "/tables", "GET");
    if ($scope.gettable.code != 404000) { //
        $location.path("/shop/add2re");
    }
    //$scope.posts=$scope.getShop;
    //$("#add").modal("show");
    $scope.view = {
        table: [],
        box: []
    };
    $scope.addtable = function () { //
        $scope.tem = {
            table: {}
        };
        $("#addtable").modal("show");
    }
    $scope.removeFn = function (n, a) {
        $scope.view[n].splice(a, 1);
    }
    $scope.reset = function (a) {
        if ($scope.view.table[a].count < 1) $scope.view.table[a].count = 1;
    }

    $scope.addTbaleFn = function () { //
        if (!$scope.tem.table.seat || !$scope.tem.table.count) return;
        $scope.view.table.push($scope.tem.table);
        $("#addtable").modal("hide");
    }
    $scope.addBox = function () {
        $scope.tem = {
            box: {
                seatNum: null,
                name: null,
                no: null,
                type: '1001'
            }
        };
        $("#addbox").modal("show");
    }

    $scope.addBoxFn = function () { //
        if (!$scope.tem.box.seatNum || !$scope.tem.box.name || !$scope.tem.box.no) return;
        if ($scope.tem.box.seatNum > 0) {
        } else {
            return
        }
        console.log(typeof($scope.tem.box.seatNum))
        $scope.view.box.push($scope.tem.box);
        $("#addbox").modal("hide");
    }
    $scope.sendposts = function () { //
        var x = 0;
        if ($scope.view.table.length > 0) {
            sendJson = angular.toJson($scope.view.table);
            send1 = ajaxSendFn(sendJson, "/tables", "POST", 1);
            if (send1.code == 200) { //
                x++;
            }
        }

        if ($scope.view.box.length > 0) {
            sendJson2 = angular.toJson($scope.view.box);
            send2 = ajaxSendFn(sendJson2, "/tables/box", "POST", 1);
            if (send2.code == 200) { //
                x++;
            }
        }
        if (x > 0) { //
            $location.path("/shop/add3");
        }
    }
})
/*-----------------------------------------------------*/
app.controller('ShopAdd3Ctr', function ($scope, $location, $filter) {
    $scope.shopshow = {
        businesstime: ajaxSendFn({}, "/businesstimes",
            "GET").result
    };
    console.log($scope.shopshow);
    $scope.posts = [
        {type: '1001', startTime: '', endTime: ''},
        {type: '1002', startTime: '', endTime: ''},
        {type: '1003', startTime: '', endTime: ''},
        {type: '1004', startTime: '', endTime: ''},
        {type: '1005', startTime: '', endTime: ''}
    ];
    $scope.tem = {
        time: [],
        buname: ["早市", "午市", "下午茶", "晚市", "宵夜"]
    };
    for (i = 0; i < 24; i++) { //
        $scope.tem.time.push(i + ":00");
    }

    $scope.sendposts = function () { //
        var json = [];
        for (i = 0; i < $scope.posts.length; i++) { //
            if ($scope.posts[i].startTime && $scope.posts[i].endTime) { //
                /*
                 $scope.posts[i].startTime = "1970-01-01 " +
                 $scope.posts[i].startTime + ":00";
                 $scope.posts[i].endTime = "1970-01-01 " + $scope.posts[i].endTime +
                 ":00";
                 console.log($scope.posts[i]);
                 */
                if ($scope.posts[i].type == "1005") {
                    var limitTime = $filter("date")($scope.posts[i].startTime, "HH");
                    if (limitTime < 18) {
                        alert("夜宵的开始时间不得早于0点");
                        return;
                    }
                }
                $scope.posts[i].startTime.setFullYear(2000);
                $scope.posts[i].endTime.setFullYear(2000);
                $scope.posts[i].startTime = $filter("date")($scope.posts[i].startTime, "yyyy-MM-dd HH:mm:ss");
                $scope.posts[i].endTime = $filter("date")($scope.posts[i].endTime, "yyyy-MM-dd HH:mm:ss");
                json.push($scope.posts[i]);
            }
        }
        sendJson = angular.toJson(json);
        sendre = ajaxSendFn(sendJson, "/businesstimes", "POST", 1);
        if (sendre.code == 200) {
            $location.path("/shop/add4")
        } else {
            alert(sendre.message);
        }
    }
})


app.controller('ShopAdd4Ctr', function ($scope, $location, $filter) {
    re = ajaxSendFn({}, "/staffs/shop", "GET").result || [];
    $scope.posts = {staff: []};
    $scope.sendok = re ? re.items : [];
    $scope.addStaffFn = function () {
        $scope.posts.staff.push({
            code: "",
            name: "",
            tel: "",
            password: ""
        });
    }
    console.log($scope.sendok);
    if (!$scope.sendok) $scope.addStaffFn();

    $scope.removeStaffFn = function (a) {
        $scope.posts.staff.splice(a, 1);
    }
    $scope.sendposts = function () {
        var term = [];
        for (var x = 0; x < $scope.posts.staff.length; x++) {
            json = {};
            json.name = $scope.posts.staff[x].name;
            json.password = hex_md5($scope.posts.staff[x].password);
            json.roleType = "S";
            json.nickname = $scope.posts.staff[x].nickname;
            json.shopId = $scope.config.staff.shopId;
            re = ajaxSendFn(angular.toJson(json), "/staffs/staff", "POST", 1);
            if (re.code == 200) {
                $scope.sendok.push($scope.posts.staff[x]);
                term.push(x);
            } else {
                $scope.posts.staff[x].error = "错误";
            }
        }
        term.sort();
        for (var i = term.length - 1; i >= 0; i--) {
            $scope.posts.staff.splice(term[i], 1);
        }
        if ($scope.posts.staff.length < 1 && $scope.sendok) $location.path("/shop/add5");

    }
})
app.controller('ShopAdd5Ctr', function ($scope, $location, $filter) {

})
app.controller('StaffShowCtr', function ($scope, $location) {
    $scope.user = {};
    $scope.user.list = {
        keeper: [],
        staffs: []
    };
    $scope.config.breadset = [{ //
        name: "员工管理",
        href: indexUrl + "/keeper.html#/staff",
        class: 'staff'
    }, {
        name: "员工列表"
    }]; //面包屑
    $scope.view = {staffs: ajaxSendFn({}, constUrlDict["staffs-shop"], "GET").result || {}};
    $scope.staffDelFn = function (index) { //
        if (!confirm("一旦删除将不可恢复，是否确认删除？")) return false;
        var staffDelRe = ajaxSendFn({}, constUrlDict["staffs-base"] + "/staff/" + $scope.view.staffs.items[index].id, "DELETE");
        if (staffDelRe.code == 200) { //
            $scope.view.staffs.items.splice(index, 1);
        } else { //
            errorMsg(staffDelRe);
        }
    }
    $scope.pageChange = function () {
        console.log('44')
        var json = {page: $scope.view.staffs.page, count: $scope.view.staffs.count};
        $scope.view.staffs = ajaxSendFn(json, constUrlDict["staffs-shop"], "GET").result;
    };
});
app.controller('DutyCtr', function ($scope, $location, $filter) {
    $scope.config.breadset = [{ //
        name: "值班管理",
        href: indexUrl + "/keeper.html#/staff/duty",
        class: 'duty'
    }, {
        name: "值班日历列表"
    }]; //面包屑

    var date = new Date();
    var m = date.getMonth();
    var y = date.getFullYear();

    json = {
        startDate: $filter("date")(new Date(y, m, 1), "yyyy-MM-dd"),
        endDate: $filter("date")(new Date(y, m + 1, 0), "yyyy-MM-dd")
    }
    $scope.view = {
        templates: ajaxSendFn(json, "/duties/templates/usable", "GET").result || {},
        staffs: ajaxSendFn(json, "/duties", "GET").result || {},
        setting: ajaxSendFn({}, "/duties/setting", "GET").result || {}
    };

    //setting
    $scope.post = {};
    if ($scope.view.setting && $scope.view.setting.templates) {
        $scope.post.date = new Date($scope.view.setting.startDate);
        $scope.post.templates = $scope.view.setting.templates;
    } else {
        $scope.post = {
            templates: [{}]
        };
    }
    $scope.closeDutyFn = function () {
        var str = $scope.view.setting.enabled ? "关闭此值班系统" : "开启此值班系统";
        if (confirm("确定删除值班？")) {
            var data = ajaxSendFn({}, "/duties/setting", "DELETE");
            if (data.code == 200) {
                $scope.post = {};
            } else {
                alert(data.message);
            }
        }
    }
    $scope.dutySwitch = function () {
        var str = $scope.view.setting.enabled ? "关闭此值班系统" : "开启此值班系统";
        if (confirm(str)) {
            var data1 = ajaxSendFn({"enabled": !$scope.view.setting.enabled}, "/duties/state", "POST");
            if (data1.code == 200) {
                $scope.view.setting.enabled = !$scope.view.setting.enabled;
            } else {
                alert(data1.message);
            }
        }
    }
    $scope.addFn = function () {
        $scope.post.templates.push({});
    };
    $scope.removeFn = function (i) {
        $scope.post.templates.splice(i, 1);
    }
    // $scope.openFn = function () {
    //     if ($scope.view.setting&&$scope.view.setting.templates) {
    //         $scope.post.startDate = new Date($scope.view.setting.startDate);
    //         $scope.post.templates = $scope.view.setting.templates;
    //     }
    //     $("#selectTemplate").modal("show");
    // }
    $scope.addTemplateFn = function () {
        var json = {};
        json.startDate = $filter("date")($scope.post.date, "yyyy-MM-dd");
        json.enabled = true;
        json.templates = [];
        for (var i in $scope.post.templates) {
            json.templates.push({id: $scope.post.templates[i].id, sequence: i})
        }
        var data = ajaxSendFn(json, "/duties/setting", "POST");
        if (data.code == 200) {
            alert("应用成功");
            $scope.view.setting = ajaxSendFn({}, "/duties/setting", "GET").result;
            $("#selectTemplate").modal("hide");

        } else {
            alert(data.message);
        }

    }
    $scope.redirectFn = function (e) {
        if (e.target.dataset.date) {
            $location.path("/staff/duty/" + e.target.dataset.date);
        }
    }
    $scope.events = [];

    for (var r = 1; r < 32; r++) {
        var has = false;
        var title = "";
        var n = m + 1;//月份
        for (var i in $scope.view.staffs) {
            if ($scope.view.staffs[i].staffs.length && $scope.view.staffs[i].date == $filter("date")(new Date(y + "-" + n + "-" + r), "yyyy-MM-dd")) {
                has = true;
                for (var j in $scope.view.staffs[i].staffs) {
                    title += $scope.view.staffs[i].staffs[j].nickname + " ";
                }
            }
        }
        $scope.events.push({
            title: title || '暂无排班',
            start: new Date(y + "-" + n + "-" + r),
            url: location.href + "/" + y + "-" + n + "-" + r,
            allDay: true
        })
    }
    /* config object */
    $scope.uiConfig = {
        calendar: {
            height: 450,
            editable: false,
            header: {
                right: '',
                center: 'title',
                left: 'today prev,next'
            },
            viewRender: function (view, element) {
                console.log("View Changed: ", view.visStart, view.visEnd, view.start, view.end);
            }
        }
    };

    /* event sources array*/
    $scope.eventSources = [$scope.events];

});
app.controller('DutyEditCtr', function ($scope, $location, $routeParams, $filter) {
    $scope.config.breadset = [{ //
        name: "值班管理",
        href: indexUrl + "/keeper.html#/staff/duty",
        class: 'duty'
    }, {
        name: "值班设置"
    }]; //面包屑
    $scope.view = {
        staffs: ajaxSendFn({date: $routeParams.date}, "/duties/staffs", "GET").result || {},
        // regions: ajaxSendFn({}, "/duties/regions", "GET").result || [],
        // businesstime: ajaxSendFn({}, "/businesstimes", "GET").result,
        tables: {},
        type: {
            "1001": "早市",
            "1002": "午市",
            "1003": "下午茶",
            "1004": "晚市",
            "1005": "夜宵"
        },
        date: $routeParams.date,
        text: []
    };
    $scope.init = function () {
        $scope.view.tables = ajaxSendFn({date: $routeParams.date}, "/duties/duty/day", "GET").result || {};
    }
    $scope.init();

    $scope.post = {};
    $scope.posts = {
        staffs: [{}]
    };
    $scope.addFn = function () {
        $scope.posts.staffs.push({});
    };
    $scope.removeFn = function (i) {
        $scope.posts.staffs.splice(i, 1);
    }
    $scope.openFn = function (region, period) {
        $scope.posts = {
            "period": $scope.view.tables[region].periodDuties[period].period,
            "regionId": $scope.view.tables[region].regionId
        };
        $scope.posts.staff = angular.copy($scope.view.staffs);
        if ($scope.view.tables[region].periodDuties[period].staffs) {
            for (var i in $scope.view.tables[region].periodDuties[period].staffs) {
                for (var j in $scope.posts.staff) {
                    if ($scope.view.tables[region].periodDuties[period].staffs[i].id == $scope.posts.staff[j].id) {
                        $scope.posts.staff[j].check = true;
                    }
                }

            }
        }
        $("#staffSelect").modal("show");
    }
    $scope.submitFn = function () {
        var json = angular.copy($scope.posts);
        json.staffs = [];
        for (var i in json.staff) {
            if (json.staff[i].check) {
                json.staffs.push({id: json.staff[i].id})
            }
        }
        delete json.staff;
        json.date = $routeParams.date;
        var data = ajaxSendFn(json, "/duties/duty", "POST");
        if (data.code == 200) {
            $("#staffSelect").modal("hide");
            $scope.init();
        } else {
            alert(data.message);
        }
    };
    $scope.deleteRegionFn = function (id) {
        if (!confirm("一旦清空将不可恢复，是否确认清空？")) return false;
        var data = ajaxSendFn({}, "/duties/duty/day/" + $routeParams.date + "/region/" + id, "DELETE");
        if (data.code == 200) {
            $scope.init();
        } else {
            alert(data.message);
        }
    }
    $scope.deleteStaffFn = function (id, period) {
        if (!confirm("一旦清空将不可恢复，是否确认清空？")) return false;
        var data = ajaxSendFn({}, "/duties/duty/day/" + $routeParams.date + "/region/" + id + "/period/" + period, "DELETE");
        if (data.code == 200) {
            $scope.init();
        } else {
            alert(data.message);
        }

    }
    $scope.deleteAllFn = function () {
        if (!confirm("一旦清空将不可恢复，是否确认清空？")) return false;
        var data = ajaxSendFn({}, "/duties/duty/day/" + $routeParams.date, "DELETE");
        if (data.code == 200) {
            $scope.init();
        } else {
            alert(data.message);
        }
    }
    $scope.tagSelectFn = function (name) {
        $scope.view.text.push($filter("date")($scope.post.date, "yyyy-MM-dd"));
    }
    $scope.removeFn = function (index) {
        $scope.view.text.splice(index, 1);
    }
    $scope.submitDateFn = function () {
        var data = ajaxSendFn($scope.view.text, "/duties/duty/day/" + $routeParams.date, "POST");
        if (data.code == 200) {
            $scope.view.text = [];
            alert("操作成功");
        } else {
            alert(data.message);
        }

    }
});

app.controller('TemplateDutyCtr', function ($scope, $location, $routeParams, $filter) {
    $scope.config.breadset = [{ //
        name: "值班管理",
        href: indexUrl + "/keeper.html#/staff/duty",
        class: 'duty'
    }, {
        name: "值班设置"
    }]; //面包屑
    $scope.view = {
        staffs: ajaxSendFn({}, "/duties/staffs", "GET").result || {},
        tables: {},
        type: {
            "1001": "早市",
            "1002": "午市",
            "1003": "下午茶",
            "1004": "晚市",
            "1005": "夜宵"
        }
    };
    $scope.post = {};
    $scope.init = function () {
        $scope.view.tables = ajaxSendFn({}, "/duties/templates", "GET").result || {};
    }
    $scope.init();

    $scope.post = {};
    $scope.posts = {
        staffs: [{}]
    };
    $scope.addFn = function () {
        $scope.posts.staffs.push({});
    };
    $scope.removeFn = function (i) {
        $scope.posts.staffs.splice(i, 1);
    }

    $scope.addTemplateFn = function () {
        var data = ajaxSendFn({name: $scope.post.name}, "/duties/templates", "POST");
        if (data.code == 200) {
            $scope.init();
            $("#addTemplate").modal("hide");
        } else {
            alert(data.message);
        }

    }

    $scope.openFn = function (index, region, period) {
        $scope.posts = {
            "period": $scope.view.tables[index].duties[region].periodDuties[period].period,
            "regionId": $scope.view.tables[index].duties[region].regionId,
            "id": $scope.view.tables[index].id
        };
        $scope.posts.staff = angular.copy($scope.view.staffs);
        if ($scope.view.tables[index].duties[region].periodDuties[period].staffs) {
            for (var i in $scope.view.tables[index].duties[region].periodDuties[period].staffs) {
                for (var j in $scope.posts.staff) {
                    if ($scope.view.tables[index].duties[region].periodDuties[period].staffs[i].id == $scope.posts.staff[j].id) {
                        $scope.posts.staff[j].check = true;
                    }
                }

            }
        }
        $("#staffSelect").modal("show");
    }
    $scope.submitFn = function () {
        var json = angular.copy($scope.posts);
        json.staffs = [];
        for (var i in json.staff) {
            if (json.staff[i].check) {
                json.staffs.push({id: json.staff[i].id})
            }
        }
        delete json.staff;
        var id = json.id;
        delete json.id;
        var data = ajaxSendFn(json, "/duties/templates/" + id + "/duty", "POST");
        if (data.code == 200) {
            $("#staffSelect").modal("hide");
            $scope.init();
        } else {
            alert(data.message);
        }
    };
    $scope.deleteRegionFn = function (id, region) {
        if (!confirm("一旦清空将不可恢复，是否确认清空？")) return false;
        var data = ajaxSendFn({}, "/duties/templates/" + id + "/duty/region/" + region, "DELETE");
        if (data.code == 200) {
            $scope.init();
        } else {
            alert(data.message);
        }
    }
    $scope.deleteStaffFn = function (id, region, period) {
        if (!confirm("一旦清空将不可恢复，是否确认清空？")) return false;
        var data = ajaxSendFn({}, "/duties/templates/" + id + "/duty/region/" + region + "/period/" + period, "DELETE");
        if (data.code == 200) {
            $scope.init();
        } else {
            alert(data.message);
        }

    }
    $scope.deleteAllFn = function (id) {
        if (!confirm("一旦删除将不可恢复，是否确认删除？")) return false;
        var data = ajaxSendFn({}, "/duties/templates/" + id, "DELETE");
        if (data.code == 200) {
            $scope.init();
        } else {
            alert(data.message);
        }
    }

});
app.controller('ReserveDetailCtr', function ($scope, $location, $routeParams, $filter) {
    $scope.config.breadset = [{ //
        name: "预定管理",
        href: indexUrl + "/keeper.html#/table/reserve",
        class: 'reserve'
    }, {
        name: "预定设置"
    }]; //面包屑
    $scope.view = {
        list: ajaxSendFn({}, "/reserve/activity/" + $routeParams.aid, "GET").result || {},
        members: ajaxSendFn({}, "/memberGrade", "GET").result || [],
        tables: ajaxSendFn({}, constUrlDict["tables"], "GET").result || []
    }
    $scope.view.members.push({
        id: "ALL",
        name: "全员"
    });
    $scope.view.members.push({
        id: "MEMBER",
        name: "任一会员"
    });
    $scope.openFn = function (id) {
        if (id) {
            $scope.post = ajaxSendFn({}, "/reserve/" + id, "GET").result || {};
        }
        $('#addlist').modal('show')
    }
    $scope.submitFn = function () {
        var json = angular.copy($scope.post);
        if (json.id) {
            delete json.id;
            var data = ajaxSendFn(json, "/reserve/" + $scope.post.id, "PUT");
        } else {
            var data = ajaxSendFn(json, "/reserve/" + $routeParams.aid, "POST");
        }
        if (data.code == 200) {
            $('#addlist').modal('hide');
            $scope.view.list = ajaxSendFn({}, "/reserve/activity/" + $routeParams.aid, "GET").result || [];

        } else {
            alert(data.message);
        }
    }
    $scope.removeFn = function (id) {
        var a = confirm("确认删除？");
        if (a) {
            var data = ajaxSendFn({}, "/reserve/" + id, "DELETE");
            if (data.code == 200) {
                $scope.view.list = ajaxSendFn({}, "/reserve/activity/" + $routeParams.aid, "GET").result || [];
            } else {
                alert(data.message);
            }
        }
    };

});
app.controller('ReserveCtr', function ($scope, $location, $routeParams, $filter) {
    $scope.config.breadset = [{ //
        name: "预定管理",
        href: indexUrl + "/keeper.html#/table/reserve",
        class: 'reserve'
    }, {
        name: "预定设置"
    }]; //面包屑
    $scope.view = {
        list: ajaxSendFn({}, "/activity/reserve", "GET").result || {}
    }
    $scope.pageChange = function () {
        var json = {page: $scope.view.list.page, count: $scope.view.list.count};
        $scope.view.list = ajaxSendFn(json, "/activity/reserve", "GET").result || {};
    };
});
app.controller('StaffeditCtr', function ($scope, $location, $routeParams) {
    $scope.show = {};
    $scope.posts = {};
    $scope.staffadd_form = {};
    $scope.breadset = [{ //
        name: "员工管理",
        href: indexUrl + "/keeper.html#/Staff"
    }, {
        name: "编辑员工"
    }]; //面包屑
    $scope.posts = ajaxSendFn({}, constUrlDict["staff"] + "/" + $routeParams.guestid, "GET").result;
    $scope.staffaddsend = function () { //
        // $scope.posts.shopId = $scope.staffget.shopId;
        sendJson = JSON.stringify($scope.posts);
        result = ajaxSendFn(sendJson, constUrlDict["staff"] + "/" + $routeParams.guestid, "POST", 1);
        if (result.code == 200) { //
            alert("修改成功");
            $location.path("/staff");
        } else {
            errorMsg(result);
        }
    }
    $scope.imgUpload = function (t) {
        if (t.files[0].size > 5 * 1024 * 1024) {
            alert("图片不得大于5M，图片格式为png,jpg,jpeg,bmp");
            return;
        }
        POSTurl = basicUrl + "/staffs/staff/" + $routeParams.guestid + "/avatar?";
        options = {
            url: POSTurl + sortUrl(),
            type: "POST",
            success: function (data) {
                if (data.code === 200) {
                    $scope.$apply(function () {
                        $scope.posts = ajaxSendFn({}, constUrlDict["staff"] + "/" + $routeParams.guestid, "GET").result;
                    });
                } else {
                    alert(data.message);
                }

            }
        };
        $("#iimgform").ajaxSubmit(options);
    };

})
//权限设置
app.controller('Staffoperation', function ($scope, $location, $routeParams) {
    $scope.show = {};
    $scope.posts = {};
    $scope.staffadd_form = {};
    $scope.breadset = [{ //
        name: "员工管理",
        href: indexUrl + "/admin.html#/Staff"
    }, {
        name: "权限设置"
    }]; //面包屑
    $scope.password = '';
    $scope.authorized = false;
    $scope.show = false;
    $scope.submit = true;
    $scope.switch = false;
    $scope.textCheckJson = textCheckJson;
    $scope.textCheckErrorJson = textCheckErrorJson;
    $scope.posts.gender = 0;

     
    $scope.refund = {
        authorized : false,
        object: {
            // "901" : "消费退款",
            // "902" : "充值退款",
            // "909" : "快速收款退款",
            // "920" : "预订退款",
        }
    }
    // 支付渠道
    $scope.pay = {
        authorized : false,
        object : {
        //    "1000" : "刷卡",
        //    "1001" : "现金",
        //    "1005" : "微信",
        //    "1101" : "支付宝",
        }
    }
    // 服务管理
    $scope.staff = {
        authorized : false,
        object : {
            // "ADD" : "添加服务员",
            // "UPDATE" : "修改服务员信息",
            // "QUERY" : "查询本店服务员",
        }
    }
    // 激活码管理
    $scope.activate = {
        operations : '',
        object : {
            // "ADD" : "申请激活码",
            // "UPDATE" :" 解绑",
            // "QUERY" :" 查询本店激活码",
        }
    }
    // 值班
    $scope.duty  = {
        authorized : false,
        object : {
            // "UPDATE" : "修改值班",
            // "QUERY" : "查询",
        }
    }
    // 活动
    $scope.activity = {
        authorized : false,
        object : {
            // "6001" : "升级",
            // "6002" : "充值",
            // "6004" : "打印实体券",
            // "6033" : "打印新人礼",
        }
    }
    // 预定
    $scope.reserve = {
        authorized : false,
        object : {
            // "ADD" : "线下预订",
            // "UPDATE" : "确认到店",
            // "DELETE" : "取消预订",
        }
    }
    // 顾客权益
    $scope.benefit = {
        authorized : false,
        operations : {
            // "ADD" : "增加",
            // "UPDATE" : "扣减",
        },
        object : {
            // "1014" : "充值卡余额",
            // "1015" : "积分",
            // "1016" : "券",
            // "1017" : "代用币",
        }
    }
    // 会员权益
    $scope.customer = {
        authorized : false,
        operations : {
            // "ADD" : "直接发卡",
            // "UPDATE" : "升级",
            // "QUERY" : "查询",
        },
        object : {
            // "Id" : "item.name"
        }
    }
    // 买单播报
    $scope.check = {
        authorized : false,
        object : {
            // "STAGE" : "前台",
            // "item.id" : "item.name"

        }
    }
    // 奖励
    $scope.profits = {
        operations : {
            "ADD" : false,
            "UPDATE" : false,
        },
        object : {
            8002 : false,
            8010 : false,
            8011 : false,
            8012 : false,
        }
    }
 // 一键填充
 $scope.autoClick=function(e){
    console.log($scope.refund)
    // 订单类型全部勾上
    for(var i in $scope.refund.object){
        if(i=='901'||i=='902'||i=='909'||i=='920'){
            $scope.refund.object[i]=true;
        }
    }
    // 会员权益   操作类型
    $scope.settime('ADD');j
    $scope.settime('UPDATE');
    for(var j in $scope.benefit.object){
        if(j=='1014'||j=='1015'||j=='1016'||j=='1017'){
            $scope.benefit.object[j]=true;
        }
    }
    // 奖励的操作类型
    $scope.settime2('ADD');
    for(var k in $scope.profits.object){
        if(k=='8002'||k=='8010'||k=='8011'||k=='8012'){
            $scope.profits.object[k]=true;
        }
    }
}
    $scope.settime = function (a,b) { //
        if (b == 'ADD') {
            $scope.customer.operations[a] = $scope.customer.operations[a] ? null : true
        }else if(b == 'STAGE') {
            $scope.check.object[a] = $scope.check.object[a] ? null : true
        }else {
            $scope.benefit.operations[a] = $scope.benefit.operations[a] ? null : true
        }
    }
    $scope.settime2 = function (a,b) { //
        if (b == 'ADD') {
            $scope.customer.operations[a] = $scope.customer.operations[a] ? null : true
        }else if(b == 'STAGE') {
            $scope.check.object[a] = $scope.check.object[a] ? null : true
        }else {
            $scope.profits.operations[a] = $scope.profits.operations[a] ? null : true
        }
    }
    $scope.grade = ajaxSendFn({}, "/memberGrade", "GET"); 
    $scope.tables = ajaxSendFn({}, "/tables", "GET");
    $scope.posts = ajaxSendFn({}, "/staffs/staff/"  + $routeParams.guestid + "/permission" , "GET");
    // 曾经设置过权限
    if($scope.posts.code ==200 ) {
        // 是否设置过密码
        $scope.authorized = $scope.posts.result.authorized
        // 退款
        if($scope.posts.result.refund) {
            $scope.refund.authorized = $scope.posts.result.refund.authorized
            angular.forEach($scope.posts.result.refund.objects , function(value,key) {
            $scope.refund.object[value] = true
        })};
        // 激活码
        if($scope.posts.result.activate){
            $scope.activate.authorized = $scope.posts.result.activate.authorized
            angular.forEach($scope.posts.result.activate.operations , function(value,key) {
            $scope.activate.object[value] = true
        })};
        // 活动
        if($scope.posts.result.activity){
            $scope.activity.authorized = $scope.posts.result.activity.authorized
            angular.forEach($scope.posts.result.activity.objects , function(value,key) {
            $scope.activity.object[value] = true
        }) };
        // 支付渠道
        if($scope.posts.result.pay) {
            angular.forEach($scope.posts.result.pay.objects , function(value,key) {
            $scope.pay.object[value] = true
            });
        }
         // 服务管理
         if($scope.posts.result.staff) {
            $scope.staff.authorized = $scope.posts.result.staff.authorized
            angular.forEach($scope.posts.result.staff.operations , function(value,key) {
                $scope.staff.object[value] = true
            });
        }
        // 值班
        if($scope.posts.result.duty) {
            $scope.duty.authorized = $scope.posts.result.duty.authorized
            angular.forEach($scope.posts.result.duty.operations , function(value,key) {
                $scope.duty.object[value] = true
            });
        }
        // 预定
        if($scope.posts.result.reserve){
            $scope.reserve.authorized = $scope.posts.result.reserve.authorized
            angular.forEach($scope.posts.result.reserve.operations , function(value,key) {
                $scope.reserve.object[value] = true
            })
        };
        // 顾客权益
        if($scope.posts.result.benefit){
            $scope.benefit.authorized = $scope.posts.result.benefit.authorized
            angular.forEach($scope.posts.result.benefit.operations , function(value,key) {
               $scope.benefit.operations[value] = true
           });
           angular.forEach($scope.posts.result.benefit.objects , function(value,key) {
            $scope.benefit.object[value] = true
            });
        }
         //奖励
         if($scope.posts.result.profits){
            $scope.profits.authorized = $scope.posts.result.profits.authorized
            angular.forEach($scope.posts.result.profits.operations , function(value,key) {
               $scope.profits.operations[value] = true
           });
           angular.forEach($scope.posts.result.profits.objects , function(value,key) {
            $scope.profits.object[value] = true
            });
        }
        // 会员
        if($scope.posts.result.benefit){
            $scope.customer.authorized = $scope.posts.result.customer.authorized
            angular.forEach($scope.posts.result.customer.operations , function(value,key) {
                $scope.customer.operations[value] = true
            });
            angular.forEach($scope.posts.result.customer.objects , function(value,key) {
                $scope.customer.object[value] = true
            });
        }
        // 买单播报
        if($scope.posts.result.check) angular.forEach($scope.posts.result.check.objects , function(value,key) {
            $scope.check.object[value] = true
        });

    }
    // 验证密码
    $scope.changepassword = function () {
        $scope.switch = !$scope.switch;
        if($scope.switch){
            document.getElementById('btn').innerText = '取消修改'
        }else{
            document.getElementById('btn').innerText = '修改密码'
            document.getElementById('newpass').value = $scope.password = '';
        }
    }
    $scope.checklength = function () {
        if(document.getElementById('setpass')){
            $scope.password = document.getElementById('setpass').value
            if($scope.password.length > 0 && ($scope.password.length < 8 || $scope.password.length > 20) ) {
                $scope.submit = false;
                alert('密码长度应为8-20个字符');
                return;
            }else {
                $scope.submit = true;
            }
        }else if (document.getElementById('newpass') && $scope.switch){
            $scope.password = document.getElementById('newpass').value
            if($scope.password.length > 0 && ($scope.password.length < 8 || $scope.password.length > 20) ) {
                $scope.submit = false;
                alert('密码长度应为8-20个字符');
                return;
            }else {
                $scope.submit = true;
            }
        }
        console.log($scope)
        console.log($scope.password);
        
    }


    // 发送数据
    $scope.staffaddsend = function (keeper) {
    //   debugger
        var sendJson = {
            password :"",
            refund : {
                objects : [],
                authorized : ''
            },
            pay : {
                objects : [],
                authorized : ''
            },
            staff : {
                operations : [],
                authorized : ''
            },
            activate : {
                operations : [],
                authorized : ''
            },
            duty : {
                operations : [],
                authorized : ''
            },
            activity : {
                objects : [],
                authorized : ''
            },
            reserve : {
                operations : [],
                authorized : ''
            },
            benefit : {
                operations : [],
                objects : [],
                authorized : ''
            },
            customer : {
                operations : [],
                objects : [],
                authorized : ''
            },
            check : {
                objects : [],
                authorized : ''
            },
            profits : {
                operations : [],
                objects : [],
                authorized : ''
            },
        };
        angular.forEach($scope.refund.object , function(value,key) {  // 退款
            if(value) {
                sendJson.refund.objects.push(key)
            }
        });
        if($scope.refund.authorized){ // 退款
            sendJson.refund.authorized = $scope.refund.authorized
        }
        angular.forEach($scope.pay.object , function(value,key) { //支付渠道
            if(value) {
                sendJson.pay.objects.push(key)
            }
        });
        angular.forEach($scope.staff.object , function(value,key) {  //服务员权限
            if(value) {
                sendJson.staff.operations.push(key)
            }
        });
        if($scope.staff.authorized){ //服务员权限
            sendJson.staff.authorized = $scope.staff.authorized
        }
        angular.forEach($scope.activate.object , function(value,key) {  //激活码
            if(value) {
                sendJson.activate.operations.push(key)
            }
        });
        if($scope.activate.authorized){ //激活码
            sendJson.activate.authorized = $scope.activate.authorized
        }
        angular.forEach($scope.duty.object , function(value,key) {  // 值班
            if(value) {
                sendJson.duty.operations.push(key)
            }
        });
        angular.forEach($scope.activity.object , function(value,key) {  // 活动
            if(value) {
                sendJson.activity.objects.push(key)
            }
        });
        if($scope.activity.authorized){ // 活动
            sendJson.activity.authorized = $scope.activity.authorized
        }
        angular.forEach($scope.reserve.object , function(value,key) {  // 预定
            if(value) {
                sendJson.reserve.operations.push(key)
            }
        });
        if($scope.reserve.authorized){ // 预定
            sendJson.reserve.authorized = $scope.reserve.authorized
        }
        angular.forEach($scope.benefit.operations , function(value,key) {  // 顾客权益
            if(value) {
                sendJson.benefit.operations.push(key)
            }
        });
        if($scope.benefit.authorized){ // 顾客权益
            sendJson.benefit.authorized = $scope.benefit.authorized
        }
        angular.forEach($scope.benefit.object , function(value,key) {  // 顾客权益
            if(value) {
                sendJson.benefit.objects.push(key)
            }
        });
        angular.forEach($scope.customer.operations , function(value,key) {  // 会员权益
            if(value) {
                sendJson.customer.operations.push(key)
            }
        });
        if($scope.customer.authorized){ // 会员权益
            sendJson.customer.authorized = $scope.customer.authorized
        }
        if($scope.customer.operations['ADD']) angular.forEach($scope.customer.object , function(value,key) {  // 会员权益
            if(value) {
                sendJson.customer.objects.push(key)
            }
        });
        angular.forEach($scope.profits.operations , function(value,key) {  // 奖励
            if(value) {
                sendJson.profits.operations.push(key)
            }
        });
        if($scope.profits.authorized){ // 奖励
            sendJson.profits.authorized = $scope.profits.authorized
        }
        angular.forEach($scope.profits.object , function(value,key) {  //  奖励
            if(value) {
                sendJson.profits.objects.push(key)
            }
        });
        angular.forEach($scope.check.object , function(value,key) {  // 买单
            if(value) {
                sendJson.check.objects.push(key)
            }
        });
        if($scope.check.authorized){ // 买单
            sendJson.check.authorized = $scope.check.authorized
        }
        if (sendJson.benefit.operations.length >= 1 && sendJson.benefit.objects.length< 1) {
            alert('请选择顾客权益类型');
            return
        }else if(sendJson.benefit.operations.length < 1 ){
            console.log(sendJson.benefit.operations);
            sendJson.benefit.objects = [];
        }
        if (sendJson.profits.operations.length >= 1 && sendJson.profits.objects.length< 1) {
            alert('请选择奖励类型');
            return
        }else if(sendJson.profits.operations.length < 1 ){
            console.log(sendJson.profits.operations);
            sendJson.profits.objects = [];
        }
        if ($scope.customer.operations['ADD'] && sendJson.customer.objects.length< 1) {
            alert('请选择会员等级');
            return
        }

        // if(sendJson.refund.objects.length < 1) {
        //     alert('请选择订单类型');
        //     return
        // }
        // sendJson.roleType = keeper == "keeper" ? "K" : "S";
        
        sendJson.refund.authorized = $scope.refund.authorized;
        sendJson.activate.authorized = $scope.activate.authorized
        sendJson.pay.authorized = $scope.pay.authorized
        sendJson.check.authorized = $scope.check.authorized
        sendJson.customer.authorized = $scope.customer.authorized
        sendJson.benefit.authorized = $scope.benefit.authorized
        sendJson.profits.authorized = $scope.profits.authorized
        sendJson.duty.authorized = $scope.duty.authorized
        sendJson.activity.authorized = $scope.activity.authorized
        sendJson.reserve.authorized = $scope.reserve.authorized

        // 第一次设置密码
        if(!$scope.authorized || $scope.password) {
            sendJson.password = hex_md5($scope.password);
        }else if(!$scope.authorized && !$scope.password){
            // 选择密码 长度不对
            alert('密码应由长度为8-20个字符');
            return;
        }else {
            // 不修改密码
            delete sendJson.password
        }
        
        console.log(sendJson);
        return false;
        
        sendJson = JSON.stringify(sendJson);
        result = ajaxSendFn(sendJson,  "/staffs/staff/"  + $routeParams.guestid + "/permission" , "POST", 1);
        if (result.code == 200) { //
            alert("添加成功");
            window.location.reload(true)
            // $location.path("/staff");
        } else {
            errorMsg(result);
        }
    }

})
app.controller('StaffaddCtr', function ($scope, $location) {
    $scope.config.breadset = [{ //
        name: "员工管理",
        href: indexUrl + "/keeper.html#/staff"
    }, {
        name: "添加员工"
    }]; //面包屑
    $scope.posts = {};
    $scope.staffadd_form = {
        submitted: false
    };
    $scope.textCheckJson = textCheckJson;
    $scope.textCheckErrorJson = textCheckErrorJson;
    $scope.posts.gender = 0;
    $scope.staffaddsend = function (keeper) {
        //
        var sendJson = {};
        angular.extend(sendJson, $scope.posts);
        sendJson.shopId = $scope.config.staff.shopId;
        sendJson.roleType = keeper == "keeper" ? "K" : "S";
        sendJson.password = hex_md5($scope.posts.password);
        sendJson = JSON.stringify(sendJson);
        result = ajaxSendFn(sendJson, constUrlDict["staff"], "POST", 1);
        if (result.code == 200) { //
            alert("添加成功");
            $location.path("/staff");
        } else {
            errorMsg(result);
        }
    }
})


app.controller("ShopBusinesstimeCtr", function ($scope, $filter, $location) {
    $scope.view = {
        table: {
            "1001": {type: '1001', startTime: '', endTime: '', show: 0, buname: "早市"},
            "1002": {type: '1002', startTime: '', endTime: '', show: 0, buname: "午市"},
            "1003": {type: '1003', startTime: '', endTime: '', show: 0, buname: "下午茶"},
            "1004": {type: '1004', startTime: '', endTime: '', show: 0, buname: "晚市"},
            "1005": {type: '1005', startTime: '', endTime: '', show: 0, buname: "宵夜"}
        }
    };
    $scope.getTimeFn = function () {
        $scope.view.businesstime = ajaxSendFn({}, constUrlDict["businesstimes"], "GET").result;
        for (i = 0; $scope.view.businesstime && i < $scope.view.businesstime.length; i++) { //
            key = $scope.view.businesstime[i].type;
            name = $scope.view.table[$scope.view.businesstime[i].type].buname;
            $scope.view.table[key] = $scope.view.businesstime[i];
            $scope.view.table[key].show = 1;
            $scope.view.table[key].buname = name;
            $scope.view.table[key].startTime = new Date(Date.parse("2000-01-01 " + $scope.view.table[key].startTime.replace(/-/g, "/")));
            $scope.view.table[key].endTime = new Date(Date.parse("2000-01-01 " + $scope.view.table[key].endTime.replace(/-/g, "/")));
        }
    }
    $scope.getTimeFn();
    $scope.addFn = function (a) {
        $scope.view.table[a].show = 1;
    }
    $scope.saveFn = function () {
        var jsons = [];
        for (var a in $scope.view.table) {
            if (!$scope.view.table[a].startTime || !$scope.view.table[a].endTime) {
                continue;
            }
            var json = {};
            $scope.view.table[a].startTime.setFullYear(2000);
            $scope.view.table[a].endTime.setFullYear(2000);
            json.startTime = $scope.view.table[a].startTime;
            json.type = $scope.view.table[a].type;
            json.endTime = $scope.view.table[a].endTime;
            json.endTime = $filter("date")(json.endTime, "yyyy-MM-dd HH:mm:ss");
            json.startTime = $filter("date")(json.startTime, "yyyy-MM-dd HH:mm:ss");
            $scope.view.table[a].id && (json.id = $scope.view.table[a].id);
            if (json.type == "1005") {
                var limitTime = $filter("date")($scope.view.table[a].startTime, "HH");
                if (limitTime < 18) {
                    alert("夜宵的开始时间不得早于0点");
                    return;
                }
            }
            jsons.push(json);

        }
        sendJson = JSON.stringify(jsons);
        result = ajaxSendFn(sendJson, constUrlDict["businesstimes"], "POST", 1);
        if (result.code != 200) { //
            errorMsg(result);
        } else { //
            $scope.getTimeFn();
            $location.path("/shop");
        }

    }
    $scope.delFn = function (a) {
        if ($scope.view.table[a].id) { //
            result = ajaxSendFn({}, constUrlDict["businesstimes"] + "/" + $scope.view.table[a].id, "DELETE");
            if (result.code != 200) { //
                console.error(result);
                return;
            }
        }
        $scope.view.table[a] = {type: a, startTime: '', endTime: '', show: 0, buname: $scope.view.table[a].buname};
    }
})

app.controller("TablesCtr", function ($scope, $filter) {
    $scope.config.breadset = [{
        name: "桌台管理",
        href: indexUrl + "/keeper.html#/table/tables",
        class: "tables"
    }, {
        name: "查看桌台"
    }]; //面包屑;
    var oldPost = {};
    $scope.download = {};
    $scope.view = {
        tables: [],
        boxs: []
    };
    $scope.view.regions = ajaxSendFn({}, "/regions/names", "GET").result || [];

    //回滚，撤回操作
    undoAction = function () {
        var arr = oldPost.type === "1001" ? $scope.view.tables : $scope.view.boxs;
        for (i = 0, l = arr.length; i < l; i++) {
            if (oldPost.id === arr[i].id) {
                arr[i].seatNum = oldPost.seatNum;
                arr[i].no = oldPost.no;
                arr[i].name = oldPost.name;
            }
        }
    }
    /*
     makeAction 根据参数创建一个函数
     urlfn 函数，用于返回一个网址
     postfn 函数，用于对提交数据作某些操作
     type 字符串， 请求类型，可以为“GET”或“POST”
     callback 函数 成功后的回调函数
     needUndo bool 是否需要回滚操作
     返回值 函数
     */
    makeAction = function (urlfn, postfn, type, callback, needUndo) {
        return function () {
            var jsn = angular.copy($scope.post);
            delete jsn.$$hashKey;
            delete jsn.show;
            delete jsn.url;
            delete jsn.urlWithLogo;
            //delete $scope.post.shopId;
            //delete $scope.post.type;
            if (jsn.type === "1001") {
                delete jsn.name;
            }
            jsn.seatNum = parseInt(jsn.seatNum);
            if (!jsn.regionId) {
                delete jsn.regionId;
            }
            //if (postfn) {
            //    json = postfn($scope.post);
            //} else {
            //json = $scope.post;
            //}
            //sendJson = angular.toJson(json);
            result = ajaxSendFn(jsn, urlfn($scope.post), type, 1);
            if (result.code != 200) { //
                errorMsg(result);
                if (needUndo) {
                    undoAction();
                }
            } else { //
                $scope.getTables();

                // callback(result, $scope.post);
            }
            $("#addtable").modal("hide");
        }
    }

    $scope.actionhandle = {
        "add": makeAction(function (post) {
            return constUrlDict["tables-table"];
        }, function (post) {
            return [post];
        }, "POST", function (result, post) {
            if (post.type == "1001") $scope.view.tables.push(post);
            else $scope.view.boxs.push(post);
            //刷新桌台数据
            // $scope.getTables();
        }, false),
        "edit": makeAction(function (post) {
            if (!post.id) {
                alert("暂时无法编辑，请刷新后重试");
                return;
            }
            ;
            return constUrlDict["tables-table"] + "/" + post.id;
        }, null, "POST", function () {
            alert("修改成功");
        }, true)
    }
    //$scope.view.shopId = ajaxSendFn({}, "/shops/shop", "GET").result.id;

    $scope.getTables = function () {
        gettables = ajaxSendFn({}, constUrlDict["tables"], "GET").result;
        $scope.gettables = gettables;
        if (gettables) { //
            $scope.view.tables = [];
            $scope.view.boxs = [];
            for (var i = 0; i < gettables.length || 0; i++) {
                if (gettables[i].type == 1001) {
                    $scope.view.tables.push(gettables[i]);
                } else {
                    $scope.view.boxs.push(gettables[i]);
                }
            }
        }
    };

    $scope.tem = {};
    $scope.modaladd = function (a) {
        $scope.post = {};
        $scope.view.action = "add";
        if (a == 'table') { //
            $scope.post.type = "1001";
            $scope.view.modalname = "添加散台";
            $scope.tem.nameshow = 0;
        } else { //
            $scope.post.type = "1002";
            $scope.view.modalname = "添加包厢";
            $scope.tem.nameshow = 1;
        }
        $("#addtable").modal("show");
    }
    $scope.dispatchAction = function () {
        $scope.actionhandle[$scope.view.action]();
    }
    $scope.cancelAction = function () {
        undoAction();
    }
    $scope.tableDelFn = function (a, i) {
        del = ajaxSendFn({}, constUrlDict["tables"] + "/" + a.id, "POST");
        if (del.code != 200) { //
            errorMsg(del);
        } else { //
            if (a.type === "1001") $scope.view.tables.splice(i, 1);
            else $scope.view.boxs.splice(i, 1);
        }
    }
    $scope.editTableFn = function (t, i) {
        $scope.post = $scope.view[t][i];
        angular.extend(oldPost, $scope.post);
        $scope.view.action = "edit";
        if (t == 'tables') { //
            $scope.view.modalname = "修改散台";
            $scope.tem.nameshow = 0;
        } else { //
            $scope.view.modalname = "修改包厢";
            $scope.tem.nameshow = 1;
        }
        $("#addtable").modal("show");
    }

    //加载所有桌台
    $scope.getTables();
    $scope.sendposts = function () { //
        var x = 0;
        if ($scope.view.table.length > 0) {
            sendJson = angular.toJson($scope.view.table);
            send1 = ajaxSendFn(sendJson, "/tables", "POST", 1);
            if (send1.code == 200) { //
                x++;
            }
        }

        if ($scope.view.box.length > 0) {
            sendJson2 = angular.toJson($scope.view.box);
            send2 = ajaxSendFn(sendJson2, "/tables/box", "POST", 1);
            if (send2.code == 200) { //
                x++;
            }
        }
        if (x > 0) { //
            $location.path("/shop/add3");
        }
    }
    $scope.downloadFn = function (a) {
        if (a == 'download' || a == 'delete') {
            $scope.view.state = a;
            delete $scope.download.id;
        } else {
            $scope.download.id = a;
        }
        $("#generate").modal("show");
    }
    $scope.open = function (id) {
        var b = ajaxSendFn({type: '101'}, "/tables/qrcode/" + id, "GET");
        window.open(b.result.url, '_blank');
    }
    $scope.generate = function () {
        var json = {
            type: '102'
        };
        if ($scope.download.type) {
            json.type = $scope.download.type;
        }
        if ($scope.download.id) {
            var b = ajaxSendFn(json, "/tables/qrcode/" + $scope.download.id, "GET");
            var a1 = document.createElement('a');
            //$scope.gettables.length
            a1.setAttribute("href", b.result.url);
            a1.setAttribute("download", "");

            var evObj = document.createEvent('MouseEvents');
            evObj.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, true, false, 0, null);
            a1.dispatchEvent(evObj);
            $("#generate").modal("hide");
            return;
        }
        var a;
        if ($scope.view.state == 'download') {
            a = ajaxSendFn(json, "/tables/qrcode", "GET");
        } else {
            //删除
            a = ajaxSendFn({}, "/tables/file/" + json.type, "DELETE");
        }
        $("#generate").modal("hide");
        if (a.result) {
            location.href = a.result;
        }
        $scope.result = true;
    };
    $scope.getZip = function () {
        window.open("/tables/download/" + $scope.download.type, '_blank');
    }

});
app.controller("RegionsCtr", function ($scope, $filter) {
    $scope.config.breadset = [{
        name: "桌台管理",
        href: indexUrl + "/keeper.html#/table/regions",
        class: "regions"
    }, {
        name: "查看分区"
    }]; //面包屑;
    $scope.view = {};
    $scope.view.regions = ajaxSendFn({}, "/regions", "GET").result || [];
    $scope.submitFn = function () {
        var data = ajaxSendFn($scope.post, "/regions", "POST");
        if (data.code == 200) {
            $("#addRegions").modal("hide");
            $scope.view.regions = ajaxSendFn({}, "/regions", "GET").result || [];
        }

    }
    $scope.regionDelFn = function (index) {
        if (!confirm("一旦删除将不可恢复，是否确认删除？")) return false;
        var data = ajaxSendFn({}, "/regions/" + $scope.view.regions.items[index].id, "DELETE");
        if (data.code == 200) { //
            $scope.view.regions.items.splice(index, 1);
        } else { //
            alert(data.message)
        }
    }

});
app.controller("RegionDetailCtr", function ($scope, $filter, $routeParams) {
    $scope.config.breadset = [{
        name: "桌台管理",
        href: indexUrl + "/keeper.html#/table/regionDetail",
        class: "regions"
    }, {
        name: "查看分区"
    }]; //面包屑;
    $scope.view = {};
    $scope.download = {};
    $scope.view.regions = ajaxSendFn({}, "/regions/" + $routeParams.id, "GET").result || [];
    $scope.view.region = ajaxSendFn({}, "/regions/names", "GET").result || [];

    $scope.submitFn = function () {
        var data = ajaxSendFn($scope.post, "/regions", "POST");
        if (data.code == 200) {
            $("#addRegions").modal("hide");
            $scope.view.regions = ajaxSendFn({}, "/regions", "GET").result || [];
        }
    }
    $scope.downloadFn = function (a) {
        if (a) {
            $scope.download.id = a;
        } else {
            delete $scope.download.id;
        }
        $("#generate").modal("show");
    }
    $scope.generate = function () {
        var json = {
            type: '102'
        };
        if ($scope.download.type) {
            json.type = $scope.download.type;
        }
        if ($scope.download.id) {
            var b = ajaxSendFn(json, "/tables/qrcode/" + $scope.download.id, "GET");
            var a1 = document.createElement('a');
            //$scope.gettables.length
            a1.setAttribute("href", b.result.url);
            a1.setAttribute("download", "");

            var evObj = document.createEvent('MouseEvents');
            evObj.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, true, false, 0, null);
            a1.dispatchEvent(evObj);
            $("#generate").modal("hide");
        }
    };
    $scope.getZip = function () {
        window.open("/tables/download/" + $scope.download.type, '_blank');
    }
    $scope.editTableFn = function (i) {
        $scope.post = i !== undefined ? $scope.view.regions.tables[i] : {};
        $("#addtable").modal("show");
    }
    $scope.deleteRegionTable = function ($index) {
        var data = ajaxSendFn({}, "/regions/" + $routeParams.id + "/tables/" + $scope.view.regions.tables[$index].id, "DELETE");
        if (data.code == 200) {
            $scope.view.regions.tables.splice($index, 1);
        } else {
            alert(data.message);
        }

    }
    $scope.dispatchAction = function () {
        if (!$scope.post.type) {
            alert("请先选择类型");
            return;
        }
        if (!$scope.post.regionId) {
            delete $scope.post.regionId;
        }
        if ($scope.post.type == '1001') {
            delete $scope.post.name;
        }
        send1 = ajaxSendFn($scope.post, "/tables/table", "POST", 1);
        if (send1.code == 200) {
            $("#addtable").modal("hide");
            $scope.view.regions = ajaxSendFn({}, "/regions/" + $routeParams.id, "GET").result || [];
        } else {
            alert(send1.message);
        }
    }
    $scope.regionSelectFn = function () {
        var data = ajaxSendFn({}, "/tables/regions", "GET");
        if (data.code == 200) {
            $scope.view.defalutRegion = data.result;
            $("#regionSelect").modal("show");
        } else {
            alert("没有可供选择的桌台了");
        }

    }
    $scope.regionSelectSubmitFn = function () {
        var json = [];
        for (var i in $scope.view.defalutRegion) {
            if ($scope.view.defalutRegion[i].check) {
                json.push($scope.view.defalutRegion[i].id)
            }
        }
        if (json.length == 0) {
            $("#regionSelect").modal("hide");
            return;
        }
        var data = ajaxSendFn(json, "/regions/" + $routeParams.id + "/tables", "POST");
        if (data.code == 200) {
            $scope.view.regions = ajaxSendFn({}, "/regions/" + $routeParams.id, "GET").result || [];
            $("#regionSelect").modal("hide");
        } else {
            alert(data.message);

        }

    }

});
app.controller("CommentCtr", function ($scope) {
    $scope.config.breadset = [{
        name: "活动",
        href: indexUrl + "/keeper.html#/rule"
    }, {
        name: "顾客评论"
    }]; //面包屑;
    var tmpResult = ajaxSendFn({}, "/comments/shop", "GET").result;
    if (tmpResult) {
        $scope.view = {comment: tmpResult.items || []};
        $scope.view.satisfaction = {"1001": "很棒", "1002": "一般", "1003": "较差"};
    }
})

app.controller('CustomerCtr', function ($scope, tyFnFactory, $http, $location, $filter, $routeParams) { //
    $scope.config.breadset = [{ //
        name: "顾客管理",
        href: indexUrl + "/keeper.html#/customer",
        class: 'customer'
    }, {
        name: "顾客列表"
    }]; //面包屑
    $scope.view = {
        index: [],
        sort: {
            "1000": "最近消费",
            "1010": '消费额度',
            "1020": "消费次数",
            "1030": "加入时间",
            "1040": "会员等级",
            "1050": "用户积分",
            "1060": "充值余额",
            "1070": "券张数"
        }
    };
    if ($routeParams.userId) {
        $scope.search = {
            param: $routeParams.userId
        };
        var data = ajaxSendFn({param: $routeParams.userId}, "/customer/search", "GET").result;
        $scope.view.customer = {items: data || [], page: 1, total: data.length};
    } else {
        $scope.view.customer = ajaxSendFn({}, "/customer", "GET").result || [];
    }
    $scope.view.memberGrades = ajaxSendFn({}, constUrlDict["memberGrade"], "GET").result || [];
    $scope.view.member = [];
    $scope.search = {};
    $scope.post = {
        genders: [],
        memberGradeIds: []
    };
    $scope.tag = {
        name: '',
        user: []
    };
    $scope.postSend = function () {
        if ($scope.search.param) {
            $scope.view.customer.total = 0;
            $scope.view.customer.items = ajaxSendFn($scope.search, "/customer/search", "GET").result || [];
        } else {
            $scope.view.customer = ajaxSendFn({}, "/customer", "GET").result || [];
        }
    };
    $scope.refer = function (id) {
        window.open("keeper.html#/" + id, '_blank');
    };
    $scope.searchFn = function (page) {
        var json = angular.copy($scope.post);
        if (json.type != '9001') {
            delete json.memberGradeIds;
        }
        for (var i in json) {
            if (i == 'memberGradeIds') {
                var str = "";
                for (var s = 0; s < json.memberGradeIds.length; s++) {
                    if (json.memberGradeIds[s]) {
                        str = str + json.memberGradeIds[s] + ",";
                    }
                }
                if (str) {
                    json.memberGradeIds = str.substr(0, str.length - 1);
                } else {
                    delete json.memberGradeIds;
                }
            }
            if (i == "genders") {
                var str = "";
                if (!!json.genders[0]) {
                    str = json.genders[0] + ","
                }
                if (!!json.genders[1]) {
                    str += json.genders[1] + ","
                }
                if (!!json.genders[2]) {
                    str += json.genders[2] + ","
                }
                if (str) {
                    json.genders = str.substr(0, str.length - 1);
                } else {
                    delete json.genders;
                }
            }
            if (json[i] instanceof Date) {
                json[i] = $filter("date")(json[i], "yyyy-MM-dd");
            }
            if (!json[i] && typeof json[i] != "number") {
                delete json[i];
            }
        }
        if (page) json.page = page;
        $scope.view.customer = ajaxSendFn(json, "/customer", "GET").result || [];
    };

    $scope.pageChange = function () {
        $scope.searchFn($scope.view.customer.page);
        //var json = {page: $scope.view.customer.page, count: $scope.view.customer.count};
        //$scope.view.customer = ajaxSendFn(json, "/customer", "GET").result || [];
    };
});
app.controller('CustomerTagCtr', function ($scope, tyFnFactory, $http, $location, $filter) { //
    $scope.config.breadset = [{ //
        name: "顾客管理",
        href: indexUrl + "/keeper.html#/customer",
        class: 'tag'
    }, {
        name: "顾客列表"
    }]; //面包屑
    $scope.view = {
        tag: ajaxSendFn({}, "/tags", "GET").result || []
    };
    $scope.search = {};
    $scope.tag = {
        name: '',
        user: []
    };
    $scope.postSend = function () {
        window.open("keeper.html#/customer/" + $scope.search.param, '_blank');
    };
    $scope.detailFn = function (index) {
        $scope.view.index = index;
        $scope.view.id = $scope.view.tag.items[index].id;
        $scope.view.detail = ajaxSendFn({}, "/tags/" + $scope.view.tag.items[index].id, "GET").result || []
    };
    $scope.pageChange = function () {
        var json = {page: $scope.view.tag.page, count: $scope.view.tag.count};
        $scope.view.tag = ajaxSendFn(json, "/tags", "GET").result || [];
    };
    $scope.pageUserChange = function () {
        var json = {page: $scope.view.detail.page, count: $scope.view.detail.count};
        $scope.view.detail = ajaxSendFn(json, "/tags/" + $scope.view.tag.items[$scope.view.index].id, "GET").result || [];
        $scope.tag.user = [];
    };
});
app.controller('CustomerDetailsCtr', function ($scope, $routeParams) { //
    var userId = $routeParams.userId;
    $scope.view = {
        user: ajaxSendFn({}, "/customer/" + $routeParams.userId, "GET").result || [],
        type: {
            consume: "/consume",
            charge: "/charge",
            point: "/point",
            reward: "/reward",
            coupon: "/coupon"
        }
    };
    $scope.view.charts = {
        title: {
            text: ""
        },
        options: {
            credits: {enabled: false},
            chart: {type: "line"},
            tooltip: {},
            xAxis: {},
            yAxis: {}
        },
        series: []
    };
    $scope.consumeFn = function (index) {
        $scope.view.tab = 'consume';
        $scope.view.consume = ajaxSendFn({page: index || 1}, "/benefit/" + $routeParams.userId + $scope.view.type[$scope.view.tab], "GET").result || [];
        if ($scope.view.consume.length == 0) {
            return;
        }
        var x = [];
        var y = [];
        var y1 = [];
        for (var d = $scope.view.consume.items.length - 1; d >= 0; d--) {
            x.push($scope.view.consume.items[d].consumptionTime);
            y.push($scope.view.consume.items[d].amount);
            y1.push($scope.view.consume.items[d].revenue);
        }
        $scope.view.charts.title.text = "顾客近20笔消费记录";
        $scope.view.charts.options.xAxis = {
            title: {
                text: "日期"
            },
            labels: {
                formatter: function () {
                    return formatDate(this.value, "MM-dd HH:mm:ss");
                }
            },
            categories: x
        };
        $scope.view.charts.options.yAxis = {
            title: {
                text: "金额"
            },
            labels: {
                formatter: function () {
                    return this.value;
                }
            }
        };
        $scope.view.charts.series = [
            {
                name: "原价",
                color: "#FF9655",
                data: y,
                step: "left"
            }, {
                name: "实付",
                color: "red",
                data: y1,
                step: "left"
            }
        ];
    };
    $scope.chargeFn = function (index) {
        $scope.view.tab = 'charge';
        $scope.view.charge = ajaxSendFn({page: index || 1}, "/benefit/" + $routeParams.userId + $scope.view.type[$scope.view.tab], "GET").result || [];
        if ($scope.view.charge.length == 0) {
            return;
        }
        var x = [];
        var y = [];
        var y1 = [];
        for (var d = $scope.view.charge.items.length - 1; d >= 0; d--) {
            x.push($scope.view.charge.items[d].time);
            if ($scope.view.charge.items[d].type == "601") {
                y.push($scope.view.charge.items[d].amount - 0);
                y1.push(null);
            } else {
                y.push(null);
                y1.push($scope.view.charge.items[d].amount - 0);
            }
        }
        $scope.view.charts.title.text = "顾客近20笔充值记录";
        $scope.view.charts.options.xAxis = {
            title: {
                text: "充值日期"
            },
            labels: {
                //formatter: function () {
                //    return formatDate(this.value, "yyyy-MM-dd");
                //}
            },
            categories: x
        };
        $scope.view.charts.options.yAxis = {
            title: {
                text: "充值金额"
            },
            labels: {
                formatter: function () {
                    return this.value;
                }
            }
        };
        $scope.view.charts.series = [
            {
                name: "获得",
                color: "#FF9655",
                data: y
            }, {
                name: "使用",
                color: "red",
                data: y1
            }
        ];
    };
    $scope.rewardFn = function (index) {
        $scope.view.tab = 'reward';
        $scope.view.reward = ajaxSendFn({page: index || 1}, "/benefit/" + $routeParams.userId + $scope.view.type[$scope.view.tab], "GET").result || [];
        if ($scope.view.reward.length == 0) {
            return;
        }
        var x = [];
        var y = [];
        var y1 = [];
        for (var d = $scope.view.reward.items.length - 1; d >= 0; d--) {
            x.push($scope.view.reward.items[d].time);
            if ($scope.view.reward.items[d].type == "601") {
                y.push($scope.view.reward.items[d].amount - 0);
                y1.push(null);
            } else {
                y.push(null);
                y1.push($scope.view.reward.items[d].amount - 0);
            }
        }
        $scope.view.charts.title.text = "顾客近20笔代用币记录";
        $scope.view.charts.options.xAxis = {
            title: {
                text: "日期"
            },
            labels: {
                //formatter: function () {
                //    return formatDate(this.value, "yyyy-MM-dd");
                //}
            },
            categories: x
        };
        $scope.view.charts.options.yAxis = {
            title: {
                text: "金额"
            },
            labels: {
                formatter: function () {
                    return this.value;
                }
            }
        };
        $scope.view.charts.series = [
            {
                name: "获得",
                color: "#FF9655",
                data: y
            }, {
                name: "使用",
                color: "red",
                data: y1
            }
        ];
    };
    $scope.pointFn = function (index) {
        $scope.view.tab = 'point';
        $scope.view.point = ajaxSendFn({page: index || 1}, "/benefit/" + $routeParams.userId + $scope.view.type[$scope.view.tab], "GET").result || [];
        if ($scope.view.point.length == 0) {
            return;
        }
        var x = [];
        var y = [];
        var y1 = [];
        for (var d = $scope.view.point.items.length - 1; d >= 0; d--) {
            x.push($scope.view.point.items[d].time);
            if ($scope.view.point.items[d].type == "601") {
                y.push($scope.view.point.items[d].amount - 0);
                y1.push(null);
            } else {
                y.push(null);
                y1.push($scope.view.point.items[d].amount - 0);
            }
        }
        $scope.view.charts.title.text = "顾客近20笔积分记录";
        $scope.view.charts.options.xAxis = {
            title: {
                text: "日期"
            },
            labels: {
                formatter: function () {
                    return formatDate(this.value, "MM-dd HH:mm:ss");
                }
            },
            categories: x
        };
        $scope.view.charts.options.yAxis = {
            title: {
                text: "数量"
            },
            labels: {
                formatter: function () {
                    return this.value;
                }
            }
        };
        $scope.view.charts.series = [
            {
                name: "获得",
                color: "#FF9655",
                data: y,
                step: "left"
            }, {
                name: "使用",
                color: "red",
                data: y1,
                step: "left"
            }
        ];
    };
    $scope.consumeFn();
    $scope.couponFn = function (index) {
        $scope.view.tab = 'coupon';
        $scope.view.coupon = ajaxSendFn({page: index || 1}, "/benefit/" + $routeParams.userId + $scope.view.type[$scope.view.tab], "GET").result || []
    };
    $scope.pageChange = function () {
        console.log('55')
        eval("$scope." + $scope.view.tab + "Fn(" + $scope.view[$scope.view.tab].page + ")");
        //var json = {page: $scope.view[$scope.view.tab].page, count: $scope.view[$scope.view.tab].count};
        //$scope.view[$scope.view.tab] = ajaxSendFn(json, "/benefit/" + $routeParams.userId +  $scope.view.type[$scope.view.tab], "GET").result || [];
    };
});

app.controller('CustomerChargeCtr', function ($scope, $routeParams, $filter, $http) { //
    $scope.config.breadset = [{ //
        name: "顾客管理",
        href: indexUrl + "/keeper.html#/customer"
    }, {
        name: "顾客充值"
    }]; //面包屑
    $scope.view = {};
    $scope.posts = {
        type: 'PUT'
    };
    $scope.reason = {
        "PUT": "使用",
        "POST": "充值"
    };
    $scope.view.user = ajaxSendFn({}, constUrlDict["customer"] + "/" + $routeParams.userId, "GET").result || [];
    $scope.send = function () {
        var json = {};
        json.userId = $routeParams.userId;
        json.amount = $scope.posts.amount;
        json.reason = $scope.posts.reason;
        reason = $scope.reason[$scope.posts.type];
        if ($scope.posts.type == "PUT") {
            re = ajaxSendFn(JSON.stringify(json), "/benefit/charge/use", "POST", 1);
        } else {
            re = ajaxSendFn(JSON.stringify(json), "/benefit/charge", "POST", 1);
        }
        if (re.code == 200) {
            $scope.view.user = ajaxSendFn({}, constUrlDict["customer"] + "/" + $routeParams.userId, "GET").result || [];
            $scope.posts.amount = 0;
            alert(reason + "成功");
        } else {
            alert(re.message);
        }
    }
});

app.controller('CustomerPointCtr', function ($scope, $routeParams) { //
    $scope.view = {
        user: ajaxSendFn({}, constUrlDict["customer"] + "/" + $routeParams.userId, "GET").result || []
    };
    $scope.posts = {
        type: 'PUT'
    };
    $scope.reason = {
        "PUT": "使用",
        "POST": "发放"
    };
    $scope.send = function () {
        var json = {};
        json.userId = $routeParams.userId;//USERiD
        json.amount = $scope.posts.amount;
        reason = $scope.reason[$scope.posts.type];
        if ($scope.posts.type == "PUT") {
            re = ajaxSendFn(JSON.stringify(json), "/benefit/point/use", "POST", 1);
        } else {
            re = ajaxSendFn(JSON.stringify(json), "/benefit/point", "POST", 1);
        }
        if (re.code == 200) {
            $scope.view.user = ajaxSendFn({}, constUrlDict["customer"] + "/" + $routeParams.userId, "GET").result || [];
            $scope.posts.amount = 0;
            alert(reason + "成功");
        } else {
            errorMsg(re);
        }
        ;
    }
});
app.controller('CustomerCouponCtr', function ($scope, $routeParams) {
    $scope.config.breadset = [{ //
        name: "顾客管理",
        href: indexUrl + "/keeper.html#/customer"
    }, {
        name: "顾客发券"
    }]; //面包屑
    $scope.view = {
        user: ajaxSendFn({}, constUrlDict["customer"] + "/" + $routeParams.userId, "GET").result || []
    };
    $scope.posts = {};
    $scope.view.coupons = ajaxSendFn({}, constUrlDict["coupon"], "GET").result || [];
    if ($scope.view.coupons.length > 0) {
        $scope.posts.coupons = [{id: $scope.view.coupons[0].id, count: 1}];
    }
    $scope.add = function () {
        if ($scope.view.coupons.length > 0) {
            $scope.posts.coupons.push({id: $scope.view.coupons[0].id, count: 1});
            console.log($scope.posts.coupons);
        }
    };
    $scope.remove = function (a) {
        $scope.posts.coupons.splice(a, 1);
    };
    $scope.canSend = function () {
        return $scope.view.coupons && $scope.view.coupons.length > 0;
    };
    $scope.send = function () {
        json = {};
        json.userId = $routeParams.userId;//userId
        if ($scope.posts.coupons && $scope.posts.coupons.length > 0) {
            json.coupons = $scope.posts.coupons;
            for (var i in json.coupons) {
                delete  json.coupons[i].$$hashKey
            }
            re = ajaxSendFn(JSON.stringify(json), "/benefit/coupon", "POST", 1);
            if (re.code == 200) {
                alert("赠券成功");
            } else {
                errorMsg(re);
            }
        }
    }
});

app.controller('CustomerUpgradeCtr', function ($scope, $routeParams, $filter, $http) { //
    $scope.config.breadset = [{ //
        name: "顾客管理",
        href: indexUrl + "/keeper.html#/customer"
    }, {
        name: "顾客升级"
    }]; //面包屑
    $scope.view = {
        member: ajaxSendFn({}, "/memberGrade", "GET").result || [],
    };
    $scope.posts = {};
    $scope.view.user = ajaxSendFn({}, constUrlDict["customer"] + "/" + $routeParams.userId, "GET").result || [];
    $scope.send = function () {
        var json = {};
        json.userId = $routeParams.userId;//userId
        json.memberGradeId = $scope.posts.memberGradeId;
        re = ajaxSendFn(JSON.stringify(json), "/benefit/upgrade", "POST", 1);
        if (re.code == 200) {
            $scope.view.user = ajaxSendFn({}, constUrlDict["customer"] + "/" + $routeParams.userId, "GET").result || [];
            alert("升级成功");
        } else {
            alert(re.message);
        }
    }
});

app.controller('CustomerAddCtr', function ($interval, $scope, $location, $filter) { //
    $scope.config.breadset = [{ //
        name: "顾客管理",
        href: indexUrl + "/keeper.html#/customer"
    }, {
        name: "添加会员"
    }]; //面包屑
    $scope.view = {
        member: ajaxSendFn({}, "/memberGrade", "GET").result || [],
        repeats: 90,
    };
    $scope.posts = {
        birthday: "",
    };
    $scope.getValidateCode = function (e) {
        if ($scope.posts.phone) {
            //验证手机号
            re = ajaxSendFn({"phone": $scope.posts.phone}, "/customer/validate", "POST");
            if (re.code == 200) {
                console.log("验证码发送成功");
            } else {
                alert(re.message);
                // $location.path("/customer");
            }
        }
    }
    $scope.send = function () {
        $scope.posts.birthday = $filter("date")($scope.posts.birthday, "yyyy-MM-dd");
        re = ajaxSendFn($scope.posts, "/customer", "POST");
        if (re.code == 200) {
            alert("添加成功");
            $location.path("/customer");
        } else {
            errorMsg(re);
        }
    }
});

app.controller('RuleCtr', function ($scope, $location, $filter, $document, $compile, $rootScope) { //shoplist over
    $scope.config.breadset = [{ //
        name: "活动管理",
        href: indexUrl + "/keeper.html#/rule",
        class: "rule"
    }, {
        name: "活动列表"
    }]; //面包屑
    rule = ajaxSendFn({}, "/activity", "GET").result || [];
    var rule1 = ajaxSendFn({isConsume: true}, "/activity", "GET").result || [];
    rule = rule1.concat(rule);
    $scope.view = {};
    $scope.view.rule = $filter("orderBy")(rule, "createTime", true);
    $scope.copyFn = function (url) {
        var copyElement = angular.element('<span id="ngClipboardCopyId">' + url + '</span>');
        var body = $document.find('body').eq(0);
        body.append($compile(copyElement)($rootScope));

        var ngClipboardElement = angular.element(document.getElementById('ngClipboardCopyId'));
        var range = document.createRange();
        range.selectNode(ngClipboardElement[0]);

        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);

        var successful = document.execCommand('copy');
        var msg = successful ? '成功' : '失败';
        alert('复制' + msg);
        window.getSelection().removeAllRanges();
        copyElement.remove();
    }

});
app.controller("RuleCouponCtr", ['$scope', '$http', 'CouponFactory', function ($scope, $http, couponFac) {
    $scope.config.breadset = [{ //
        name: "活动管理",
        href: indexUrl + "/keeper.html#/rule",
        class: "coupon"
    }, {
        name: "券管理"
    }]; //面包屑;
    $scope.view = {
        coupons: ajaxSendFn({}, '/coupon', 'GET').result || [],
        type: {
            "901": "代金券",
            "902": "实物券",
            "9021": "套餐券",
            "903": "折扣券",
            "904": "礼品券",
            "9011": "抵扣券",
            "9031": "品类折扣券"
        },
        state: {
            "4001": "未使用",
            "4002": "已核销",
            "4003": "过期",
            "4009": "退款撤销",
        }

    };
    $scope.detailFn = function (id) {
        $scope.coupon = ajaxSendFn({}, "/coupon/" + id, "GET").result;
        $("#show").modal("show");
    };
    $scope.pageChange = function () {
        var json = {page: $scope.view.coupons.page, count: $scope.view.coupons.count};
        $scope.view.coupons = ajaxSendFn(json, "/coupon", "GET").result || [];
    };
}]);
app.controller("RuleRewardCtr", ['$scope', '$http', 'CouponFactory', function ($scope, $http, couponFac) {
    $scope.config.breadset = [{ //
        name: "活动管理",
        href: indexUrl + "/keeper.html#/rule",
        class: "reward"
    }, {
        name: "代用币管理"
    }]; //面包屑;
    $scope.view = {
        reward: ajaxSendFn({}, '/reward', 'GET').result || []
    };
    $scope.pageChange = function () {
        var json = {page: $scope.view.reward.page, count: $scope.view.reward.count};
        $scope.view.reward = ajaxSendFn(json, "/reward", "GET").result || [];
    };
}]);

app.controller('RuleMemberCtr', function ($scope, $filter) {
    $scope.config.breadset = [{ //
        name: "活动管理",
        href: indexUrl + "/keeper.html#/rule",
        class: "member"
    }, {
        name: "会员规则管理"
    }]; //面包屑
    var temMemberGet = ajaxSendFn({}, "/memberUpgrade", "GET").result || [];
    $scope.view = {
        member: $filter('orderBy')(temMemberGet.strategy, "grade", false) || [],
        state: temMemberGet.on
    };
});

app.controller('passwordCtr', function ($scope, $location, $routeParams) {
    $scope.posts = {};
    $scope.staffadd_form = {};
    $scope.config.breadset = [{ //
        name: "员工管理",
        href: indexUrl + "/keeper.html#/Staff"
    }, {
        name: "重设密码"
    }]; //面包屑
    $scope.staffget = ajaxSendFn({}, constUrlDict["staff"] + "/" + $routeParams.guestid, "GET").result;
    $scope.textCheckJson = textCheckJson;
    $scope.textCheckErrorJson = textCheckErrorJson;
    $scope.staffadd_form.submitted = false;
    $scope.staffget.shopname = ajaxSendFn({}, "/shops/shop", "GET").result.name;
    $scope.staffaddsend = function () { //
        if (!$scope.staffadd_form.$valid) {
            $scope.staffadd_form.submitted = true;
        } else { ///
            var json = {};
            angular.extend(json, $scope.posts);
            json.password = hex_md5($scope.posts.password);
            result = ajaxSendFn(json, constUrlDict["staffs-password"] + "/" + $scope.staffget.id, "POST");
            if (result.code == 200) { //
                alert("修改成功");
                $location.path("/staff");
            } else {
                errorMsg(result);
            }
        }
    }
});

app.controller("edit_passwordCtr", function ($scope, $location) {
    $scope.show = {};
    $scope.posts = {};
    $scope.staffadd_form = {};
    $scope.config.breadset = [{
        name: "修改密码"
    }]; //面包屑
    $scope.staffaddsend = function () { //
        if (!$scope.staffadd_form.$valid) {
            $scope.staffadd_form.submitted = true;
            return;
        } else { ///
            if ($scope.posts.oldPassword === $scope.posts.password) {
                alert("原密码和新密码不能相同");
                return;
            }
            var json = {};
            //angular.extend(json, $scope.posts);
            json.old = hex_md5($scope.posts.oldPassword);
            json.password = hex_md5($scope.posts.password);
            result = ajaxSendFn(json, constUrlDict["staffs-password"], "POST");
            if (result.code == 200) { //
                alert("修改成功");
                $location.path("/");
            } else if (result.code == 4102) {
                alert("原密码不匹配，请重试");
            } else {
                errorMsg(result);
            }
        }
        ;
    }
})

app.controller("DevicesCtr", ['$scope', '$http', 'deviceFactory', function ($scope, $http, deviceFac) {
    $scope.config.breadset = [{ //
        name: "设备管理",
        href: indexUrl + "/keeper.html#/devices"
    }, {
        name: "设备列表"
    }]; //面包屑;
    $scope.search = {count: 20};
    $scope.getDevices = function () {
        $scope.view = {
            devices: deviceFac.getAllDevices($scope.search),
        };
    };
    $scope.jihuo = function () {
        deviceFac.jihuo(function (data) {
            $scope.getDevices();
        });
    }
    $scope.pageChange = function () {
        $scope.search.page = $scope.view.devices.page;
        $scope.getDevices();
    }
    $scope.unbind = function (index) {
        var data = ajaxSendFn({}, "/activate/" + $scope.view.devices.items[index].id, "POST");
        if (data.code == 200) {
            alert("解绑成功！");
            $scope.getDevices();
        } else {
            alert(data.message);
        }
    }

    $scope.getDevices();
}]);

/*菜品管理*/
app.controller('BuyCtr', function ($scope, $location, $http, $filter) { //shoplist over
    $scope.config.breadset = [{ //
        name: "商城管理",
        href: indexUrl + "/keeper.html#/mall/buy",
        class: 'buy'
    }, {
        name: "购买列表"
    }]; //面包屑
    $scope.obtainRepeatCategory = obtainRepeatCategory;
    $scope.view = {
        mall: ajaxSendFn({}, "/mall", "GET").result || {}
    };
    $scope.view.member = ajaxSendFn({}, "/memberGrade", "GET").result || [];
    $scope.view.member = $filter('orderBy')($scope.view.member, 'grade');
    $scope.view.member = [{
        id: "ALL",
        name: "全员"
    }, {
        id: "CUSTOMER",
        name: "非会员"
    }, {
        id: "MEMBER",
        name: "任一会员"
    }].concat($scope.view.member);
    $scope.detailFn = function (i) {
        $scope.view.detail = $scope.view.mall.items[i];
        $scope.view.detail.text = [];
        for (var j in $scope.view.detail.detail) {
            var item = $scope.view.detail.detail[j];
            for (var k in $scope.view.member) {
                if (j == $scope.view.member[k].id) {
                    $scope.view.detail.text.push($scope.view.member[k].name + "可花费" + item + "元购买");
                    break;
                }
            }
        }
        $("#show").modal("show");
    }
    $scope.turnFn = function (i, state) {
        data = ajaxSendFn({}, "/mall/" + $scope.view.mall.items[i].id + "/" + state, "POST");
        if (data.code == 200) {
            $scope.view.mall.items[i].on = !$scope.view.mall.items[i].on;
        } else {
            alert(data.message);
        }
    }
    $scope.deleteFn = function (i) {
        if (!confirm("一旦删除将不可恢复，是否确认删除？")) return false;
        data = ajaxSendFn({}, "/mall/" + $scope.view.mall.items[i].id, "DELETE");
        if (data.code == 200) {
            $scope.view.mall.items.splice(i, 1);
        } else {
            alert(data.message);
        }

    }
    $scope.pageChange = function () {
        var json = {page: $scope.view.mall.page, count: view.mall.count};
        $scope.view.mall = ajaxSendFn(json, "/mall", "GET").result || [];
    };
});
// 标签管理
app.controller('TagCtr', function ($scope, $location, $http) { //shoplist over
    $scope.config.breadset = [{ //
        name: "菜品管理",
        href: indexUrl + "/keeper.html#/mall/tag",
        class: 'tag'
    }, {
        name: "标签列表"
    }]; //面包屑
    var data = ajaxSendFn({}, "/dishes/tags", "GET");
})
// 菜品管理
app.controller('DishCtr', function ($scope, $location, $http) { //shoplist over
    $scope.config.breadset = [{ //
        name: "菜品管理",
        href: indexUrl + "/keeper.html#/mall/dish",
        class: 'tag'
    }, {
        name: "菜品列表"
    }]; //面包屑
    var data = ajaxSendFn({}, "/dishes", "GET");
    $scope.view = {
        groups: ajaxSendFn({}, "/dishes/kinds", "GET").result || [],
        leftIndex: -2
    }
    $scope.dishes = {
        list: data.result
    };
    $scope.groupList = function (index) {
        console.log(index)
        console.log($scope.view.groups[index])
        var json = {};
        if (index >= 0) {
            json.categoryId = $scope.view.groups[index].id;
        }
        $scope.dishes.list = ajaxSendFn(json, "/dishes", "GET").result;
        $scope.view.leftIndex = index;

    }
   // 菜品分页
   $scope.pageChange = function () {
    var json = {page: $scope.dishes.list.page, count: $scope.dishes.list.count};
    console.log($scope.view.groups[$scope.view.leftIndex])
    if ($scope.view.leftIndex >= 0) {
        json.categoryId = $scope.view.groups[$scope.view.leftIndex].id;
    }
    $scope.dishes.list = ajaxSendFn(json, "/dishes", "GET").result || [];
};
});
app.controller('MealCtr', function ($scope, $location, $http) { //shoplist over
    $scope.config.breadset = [{ //
        name: "套餐管理",
        href: indexUrl + "/keeper.html#/mall/meal",
        class: 'meal'
    }, {
        name: "套餐列表"
    }]; //面包屑
    var data = ajaxSendFn({}, "/meals", "GET");
    $scope.view = data.result;
    $scope.detailFn = function (index) {
        $scope.meal = $scope.view.items[index]
        $("#show").modal("show");
    }
    $scope.pageChange = function () {
        console.log('22')
        var json = {page: $scope.view.page, count: $scope.view.count};
        $scope.view = ajaxSendFn(json, "/meals", "GET").result || [];
    };
});
app.controller('CategoryCtr', function ($scope, $location, $http) { //shoplist over
    $scope.config.breadset = [{ //
        name: "品类管理",
        href: indexUrl + "/keeper.html#/mall/category",
        class: 'category'
    }, {
        name: "品类管理"
    }]; //面包屑
    $scope.view = {
        list: ajaxSendFn({}, "/dishes/kinds", "GET").result || ""
    };
});

app.controller('DocCtr', ['$rootScope', '$scope', '$location', 'shopFactory', function ($rootScope, $scope, $location, shopFac) { //shoplist over
    $scope.config.breadset = []; //面包屑;
    $scope.config.class = "doc";
    $scope.posts = {
        shopId: "brand"
    };
    $scope.view = {
        // STATISTICS_TEXT: ["当前总消费数（笔）", "当前总收款数（笔）", "当前总余额（元）", "当前会员总人数（人）", "累计金额（元）", "累计金额（元）", "累计金额（元）", "累计金额（元）", "当前总余量（分）", "当前总余量（张）", "当前总余额（元）", "短信余额（条）"],
        buttons: ["惠买单消费报表", "快速收款报表", "充值报表","充值卡门店结算", "会员升级报表", "打赏购买", "砍价购买", "抽奖购买", "商城购买", "积分报表", "优惠券报表", '代用币报表', "短信使用报表","服务员收益","营销支出","探店储值卡","业务推广报表"],
        coupons: ajaxSendFn({}, "/reports/coupon/coupons", "GET").result || [],
        staffs: ajaxSendFn({}, "/reports/profits/staffs/shop", "GET").result || [],
        business: [{id:"8001",name:"费率分成"},{id:"8002",name:"打赏小红花"},{id:"8003",name:"用户分销赏金"},{id:"8004",name:"用户分销佣金"}],
        card: ajaxSendFn({}, "/reports/card/cards", "GET").result || []
    };
    $scope.sendOrder = function () {
        $location.path("/doc/detail/" + $scope.posts.order);
    };
}]);

app.controller('FinanceCtr', ['$rootScope', '$scope', '$filter', function ($rootScope, $scope, $filter) { //shoplist over
    $scope.config.class = "finance";
    $scope.view = {
        projects: {"901": "消费", "902": "充值", "904": "升级", "909": "收款", "907": "打赏"}
    };
    $scope.posts = {};
    $scope.initTimeFn = function () {
        var date = new Date();
        date.setHours(23);
        date.setMinutes(59);
        date.setSeconds(59);
        $scope.posts.endTime = date;
        var date1 = new Date();
        date1.setHours(0);
        date1.setMinutes(0);
        date1.setSeconds(0);
        date1.setDate(date.getDate() - 30);
        $scope.posts.startTime = date1;
        $scope.view.initTime = ($filter('date')(new Date(), "yyyy-MM-dd") + "T59:59")
    };
    $scope.initTimeFn();
    $scope.searchFn = function () {
        if (($scope.posts.endTime - $scope.posts.startTime) / (1000 * 60 * 60 * 24) > 31) {
            alert("起止时间不能超过31天");
            return;
        }
        var param = {};
        param.startTime = $filter('date')($scope.posts.startTime, "yyyy-MM-dd HH:mm:ss");
        param.endTime = $filter('date')($scope.posts.endTime, "yyyy-MM-dd HH:mm:ss");
        var data = ajaxSendFn(param, "/finance/shop", "GET");
        var data1 = ajaxSendFn(param, "/finance/day", "GET");
        if (data.code = 200) {
            $scope.view.result = data.result || [];
        } else {
            alert(data.message);
        }
        if (data1.code = 200) {
            $scope.view.result1 = data1.result || [];
        } else {
            alert(data.message);
        }
    };
    $scope.detailFn = function (shop, channel,reason) {//店，渠道
        var param = {};
        param.startTime = $filter('date')($scope.posts.startTime, "yyyy-MM-dd HH:mm:ss");
        param.endTime = $filter('date')($scope.posts.endTime, "yyyy-MM-dd HH:mm:ss");
        if (reason) {
            param.reason = reason;
        }
        if (channel) {
            param.channel = channel;
        }
        var str = "";
        for (var i in param) {
            str += i + "=" + param[i] + "&";
        }
        str = str.substring(0, str.length - 1);
        window.open("keeper.html#/finance/search?" + str, '_blank');
    }
    $scope.detailFn1 = function (time, channel) {//店，渠道
        var param = {};
        param.startTime = $filter('date')(time, "yyyy-MM-dd HH:mm:ss");
        param.endTime = time +' 23:59:59'
        // param.startTime = $filter('date')($scope.posts.startTime, "yyyy-MM-dd HH:mm:ss");
        // param.endTime = $filter('date')($scope.posts.endTime, "yyyy-MM-dd HH:mm:ss");
        if ($scope.posts.selector) {
            param.reason = $scope.posts.selector;
        }
        if (channel) {
            param.channel = channel;
        }
        var str = "";
        for (var i in param) {
            str += i + "=" + param[i] + "&";
        }
        str = str.substring(0, str.length - 1);
        window.open("keeper.html#/finance/searchday?" + str, '_blank');
    }
    $scope.$watch('view.page', function (newVal, oldVal) {
        if (newVal && oldVal && newVal !== oldVal) {
            json.page = $scope.view.result.page;
            json.count = $scope.view.result.count;
            $scope.view.result = ajaxSendFn(json, "/finance/shop", "GET").result || [];
        }
    });
}]);

app.controller('FinanceSearchCtr', ['$rootScope', '$scope', '$location', 'shopFactory', function ($rootScope, $scope, $location, shopFac) { //shoplist over
    $scope.config.class = "doc";
    $scope.view = {};
    var json = $location.search();
    $scope.view = ajaxSendFn(json, "/finance/detail/shop", "GET").result;
    $scope.$watch('view.page', function (newVal, oldVal) {
        if (newVal && oldVal && newVal !== oldVal) {
            json.page = $scope.view.page;
            json.count = $scope.view.count;
            $scope.view = ajaxSendFn(json, "/finance/detail/shop", "GET").result;
        }
    });
}]);

app.controller('FinanceSearchDayCtr', ['$rootScope', '$scope', '$location','$filter', function ($rootScope, $scope, $location, $filter) { //shoplist over
    $scope.config.class = "finance";
    $scope.view = {
        projects: {"901": "消费", "902": "充值", "904": "升级", "909": "收款", "907": "打赏"}
    };
    $scope.posts = {};
    var json = $location.search();
    $scope.data = json.startTime.substring(0, 10)
    var data = ajaxSendFn(json, "/finance/shop", "GET");
    if (data.code = 200) {
        $scope.view.result = data.result || [];
    } else {
        alert(data.message);
    };
    $scope.detailFn = function (shop, channel,reason) {//店，渠道
        var param = {};
        param.startTime = $filter('date')(json.startTime, "yyyy-MM-dd HH:mm:ss");
        param.endTime = $filter('date')(json.endTime, "yyyy-MM-dd HH:mm:ss");
        if (reason) {
            param.reason = reason;
        }
        if (channel) {
            param.channel = channel;
        }
        var str = "";
        for (var i in param) {
            str += i + "=" + param[i] + "&";
        }
        str = str.substring(0, str.length - 1);
        window.open("keeper.html#/finance/search?" + str, '_blank');
    }
    $scope.$watch('view.page', function (newVal, oldVal) {
        if (newVal && oldVal && newVal !== oldVal) {
            json.page = $scope.view.result.page;
            json.count = $scope.view.result.count;
            $scope.view.result = ajaxSendFn(json, "/finance/shop", "GET").result || [];
        }
    });
}]);

app.controller("sourceCtr", ["$scope", "$http", '$routeParams', "$filter", "$location",'CouponFactory', function ($scope, $http, $routeParams, $filter, $location,couponFac) {
    $scope.config.breadset = [{ //
        name: "素材管理",
        href: indexUrl + "/keeper.html#/rule/source",
        class: "source"
    }, {
        name: "素材管理"
    }]; //面包屑;
    $scope.posts={};
    $scope.types ={"1000":'转介绍首页',"1001":"转介绍任务分享","2001":"预定首页"}
    var data = ajaxSendFn({}, "/posters", "GET");
    console.log(data)
    if(data.code == 200){
        console.log("data 200")
        $scope.posts = data.result.items
    }else{
        console.log("data errer")
        console.log(data)
    }
    $scope.removeFn = function(id) {
     var datas =  ajaxSendFn({}, "/posters/"+id, "DELETE");
       if (datas.code == 200) {
        alert("操作成功");
    } else {
        alert(datas.message);
    }
    }
}]);

app.controller("addsourceCtr", ["$scope", "$http", '$routeParams', "$filter", "$location",'CouponFactory', function ($scope, $http, $routeParams, $filter, $location,couponFac) {
    $scope.config.breadset = [{ //
        name: "素材管理",
        href: indexUrl + "/keeper.html#/rule/addsource",
        class: "addsource"
    }, {
        name: "素材管理"
    }]; //面包屑;
    $scope.posts={};
    $scope.types = [{"id":'1000','name':'转介绍首页'},{"id":'1001','name':'转介绍任务分享'},{"id":'2001','name':'预定首页'},
    {"id":'3000','name':'分享金首页'},{"id":'3001','name':'分享金红包分享(无现金)'},{"id":'3002','name':'分享金红包分享(有现金)'},
]
    $scope.sendJsons = function () {
        console.log($scope.posts)
        if (!$scope.posts.picUrl) {
            alert("请先上传图片");
            return;
        }
        var json = angular.copy($scope.posts)
        console.log(json);
        var url = "/posters";
        // if ($routeParams.id) {
        //     url += "/" + $routeParams.id;
        // }
        var data = ajaxSendFn(json, url, "POST");
        if (data.code == 200) {
            alert("操作成功");
        } else {
            alert(data.message);
        }
    }
    
}]);

app.controller("editsourceCtr", ["$scope", "$http", '$routeParams', "$filter", "$location",'CouponFactory', function ($scope, $http, $routeParams, $filter, $location,couponFac) {
    $scope.config.breadset = [{ //
        name: "素材管理",
        href: indexUrl + "/keeper.html#/rule/editsource",
        class: "editsource"
    }, {
        name: "素材管理"
    }]; //面包屑;
    $scope.posts={};
    $scope.types = [{"id":'1000','name':'转介绍首页'},{"id":'1001','name':'转介绍任务分享'},{"id":'2001','name':'预定首页'},
    {"id":'3000','name':'分享金首页'},{"id":'3001','name':'分享金红包分享(无现金)'},{"id":'3002','name':'分享金红包分享(有现金)'},
]
    $scope.posts = ajaxSendFn({}, "/posters/"+$routeParams.id, "GET").result;
    $scope.sendJsons = function () {
        if (!$scope.posts.picUrl) {
            alert("请先上传图片");
            return;
        }
        var json = angular.copy($scope.posts)
        console.log(json);
        var url = "/posters/"+$routeParams.id;
        // if ($routeParams.id) {
        //     url += "/" + $routeParams.id;
        // }
        var data = ajaxSendFn(json, url, "PUT");
        if (data.code == 200) {
            alert("操作成功");
            window.history.go(-1)
        } else {
            alert(data.message);
        }
    }
    
}]);
