/**
 * @author litianyuan
 * @date   2014-12-18
 */

angular.module('app').config(appRouteConfig);

function appRouteConfig($routeProvider) { //路由规则
    $routeProvider
        .when('/final/equipment', {
            templateUrl: "admin/final/equipment.html",
            controller: "FinalCtr"
        }) //终端设备管理
        .when('/final', {
            templateUrl: "admin/final/index.html",
            controller: "FinalCtr"
        }) //终端管理
        .when('/final/qrCode/dynamic', {
            templateUrl: "admin/final/qrCode/dynamic.html",
            controller: "FinalCtr"
        }) //终端管理/活码

        .when('/final/qrCode/promote', {
            templateUrl: "admin/final/qrCode/promote.html",
            controller: "FinalCtr"
        }) //终端管理/推广
        .when('/final/qrCode/activity', {
            templateUrl: "admin/final/qrCode/activity.html",
            controller: "FinalCtr"
        }) //终端管理/活动
        .when('/final/qrCode/pay', {
            templateUrl: "admin/final/qrCode/pay.html",
            controller: "FinalCtr"
        }) //终端管理/买单



        .when('/shops', {
            templateUrl: "admin/shops/index.html",
            controller: "ShopsCtr"
        }) //门店管理
        .when('/brand', {
            templateUrl: "admin/brand/index.html",
            controller: "BrandCtr"
        }) //品牌首页
        .when('/brand/add', {
            templateUrl: "admin/brand/add.html",
            controller: "BrandAddCtr"
        }) //品牌添加
        .when('/shops/add', {
            templateUrl: "admin/shops/add.html",
            controller: "ShopsAddCtr"
        }) //门店添加返回*/
        .when('/shops/add2/:shopId', {
            templateUrl: "admin/shops/add2.html",
            controller: "ShopsAdd2Ctr"
        }) //门店添加2
        .when('/shops/add3/:shopId', {
            templateUrl: "admin/shops/add3.html",
            controller: "ShopsAdd3Ctr"
        }) //门店添加3
        .when('/staff', {
            templateUrl: "admin/Staff/index.html",
            controller: "StaffCtr"
        }) //员工管理
        .when('/staff/:shopId', {
            templateUrl: "admin/Staff/index.html",
            controller: "StaffCtr"
        }) //单店员工管理
        .when('/staff/staffadd/:shopId', {
            templateUrl: "admin/Staff/staffadd.html",
            controller: "StaffAddCtr"
        }) //添加员工
        .when('/staff/keeperadd/:shopId', {
            templateUrl: "admin/Staff/keeperadd.html",
            controller: "StaffAddCtr"
        }) //添加店长
        .when('/staff/staffoperation/:guestid', {
            templateUrl: "admin/Staff/staffoperation.html",
            controller: "Staffoperation"
        }) //权限管理
        .when('/password', {
            templateUrl: "my/password.html",
            controller: "passwordCtr"
        }) //修改密码
        .when('/rule', {
            templateUrl: "admin/rule/index.html",
            controller: "RuleCtr"
        }) //门店活动
        .when('/shopActivity', {
            templateUrl: "admin/rule/shopActivity/index.html",
            controller: "ShopActivityCtr"
        })
        // 添加门店活动
        .when('/shopActivity/add', {
            templateUrl: "admin/rule/shopActivity/add.html",
            controller: "ShopActivityCtr"
        })
        // 修改门店活动
        .when('/shopActivity/add/:id', {
            templateUrl: "admin/rule/shopActivity/add.html",
            controller: "ShopActivityCtr"
        })

        .when('/rule/shareActivity', {

            templateUrl: "admin/rule/shareActivity/index.html",
            controller: "ShareActivityCtr"
        }) //共享活动管理
        .when('/rule/addShareActivity', {
            templateUrl: "admin/rule/shareActivity/add.html",
            controller: "addShareActivityCtr"
        }) //添加共享活动
        .when('/rule/editShareActivity/:activityid', {
            templateUrl: "admin/rule/shareActivity/add.html",
            controller: "addShareActivityCtr"
        }) //修改共享活动


        //活动列表
        .when('/ruleconsume', {
            templateUrl: "admin/rule/index.html",
            controller: "RuleCtr"
        }) //活动列表
        .when('/rule/add', {
            templateUrl: "admin/rule/add.html",
            controller: "RuleAddCtr"
        }) //添加活动第一步
        .when('/rule/addconsume', {
            templateUrl: "admin/rule/addConsume.html",
            controller: "RuleAddCtr"
        }) //添加消费活动第一步
        .when('/rule/add2/:activityid', {
            templateUrl: "admin/rule/add2.html",
            controller: "RuleAdd2Ctr"
        }) //添加活动第二部
        .when('/rule/edit/:activityid', {
            templateUrl: "admin/rule/ruleedit.html",
            controller: "RuleAddCtr"
        }) //修改活动
        .when('/rule/edit2/:activityid', {
            templateUrl: "admin/rule/ruleedit2.html",
            controller: "RuleAdd2Ctr"
        }) //修改活动
        .when('/rule/exhibition/add', {
            templateUrl: "admin/rule/exhibition/add.html",
            controller: "RuleExhibitionAddCtr"
        }) //备注活动
        .when('/rule/exhibition/:activityid', {
            templateUrl: "admin/rule/exhibition/add.html",
            controller: "RuleExhibitionAddCtr"
        }) //备注活动
        .when('/rule/exhibition', {
            templateUrl: "admin/rule/exhibition/index.html",
            controller: "RuleExhibitionShowCtr"
        }) //备注活动
        .when('/rule/member', {
            templateUrl: "admin/rule/member.html",
            controller: "RuleMemberCtr"
        }) //会员规则
        .when('/rule/coupon', {
            templateUrl: "admin/rule/coupon.html",
            controller: "RuleCouponCtr"
        }) //券管理
        .when('/rule/cards', {
            templateUrl: "admin/rule/cards.html",
            controller: "RuleCardsCtr"
        }) //卡管理
        .when('/rule/allocate', {
            templateUrl: "admin/rule/allocate.html",
            controller: "RuleAllocateCtr"
        }) //分账gui管理
        .when('/rule/reward', {
            templateUrl: "admin/rule/reward.html",
            controller: "RuleRewardCtr"
        }) //代用币
        .when('/rule/bargain', {
            templateUrl: "admin/rule/bargain.html",
            controller: "RuleBargainCtr"
        }) //买单砍价
        .when('/rule/grouponadd', {
            templateUrl: "admin/rule/groupon/add.html",
            controller: "RuleGrouponAddCtr"
        }) //在线砍价添加
        .when('/rule/groupon/:id', {
            templateUrl: "admin/rule/groupon/add.html",
            controller: "RuleGrouponAddCtr"
        }) //在线砍价修改
        .when('/rule/groupon', {
            templateUrl: "admin/rule/groupon/index.html",
            controller: "RuleGrouponCtr"
        }) //在线砍价
        .when('/rule/comment', {
            templateUrl: "admin/rule/comment/index.html",
            controller: "RuleCommentCtr"
        }) //霸王餐
        .when('/rule/comment/:id', {
            templateUrl: "admin/rule/comment/add.html?v=131",
            controller: "RuleCommentAddCtr"
        })
        .when('/rule/commentadd', {
            templateUrl: "admin/rule/comment/add.html",
            controller: "RuleCommentAddCtr"
        })
        .when('/rule/lottery', {
            templateUrl: "admin/rule/lottery/index.html",
            controller: "RuleLotteryCtr"
        }) //抽奖
        .when('/rule/lottery/:id', {
            templateUrl: "admin/rule/lottery/add.html",
            controller: "RuleLotteryAddCtr"
        })
        .when('/rule/lotteryadd', {
            templateUrl: "admin/rule/lottery/add.html",
            controller: "RuleLotteryAddCtr"
        })
        .when('/rule/ads', {
            templateUrl: "admin/rule/poster/index.html",
            controller: "RuleAdsCtr"
        }) //广告管理
        .when('/ads/edit/:id', {
            templateUrl: "admin/rule/poster/add.html",
            controller: "RuleAdsAddCtr"
        })
        .when('/rule/ads/add', {
            templateUrl: "admin/rule/poster/add.html",
            controller: "RuleAdsAddCtr"
        }) //
        .when('/rule/gratuities', {
            templateUrl: "admin/rule/gratuities/index.html",
            controller: "RuleGratuitiesCtr"
        }) //打赏
        .when('/rule/gratuity', {
            templateUrl: "admin/rule/gratuity/index.html",
            controller: "RuleGratuityCtr"
        })
        .when('/rule/gratuity/add', {
            templateUrl: "admin/rule/gratuity/add.html",
            controller: "RuleGratuityAddCtr"
        })
        .when('/rule/gratuity/:id', {
            templateUrl: "admin/rule/gratuity/add.html",
            controller: "RuleGratuityAddCtr"
        })
        .when('/rule/tags', {
            templateUrl: "admin/rule/tags/index.html",
            controller: "RuleTagsCtr"
        }) //给服务员的评价标签
        .when('/rule/tasks', {
            templateUrl: "admin/rule/tasks/index.html",
            controller: "tasksCtr"
        }) //任务管理
        .when('/rule/nonParticipation', {
            templateUrl: "admin/rule/nonParticipation/index.html",
            controller: "RuleNonParticipationCtr"
        }) //不参与项
        .when('/rule/front', {
            templateUrl: "admin/rule/front/index.html",
            controller: "RuleFrontCtr"
        }) //首页广告
        // 测试
        .when('/rule/ueditor', {
            templateUrl: "admin/rule/editor.html",
            controller: "RuleuEditorCtr"
        }) //活动组合ueditor编辑器*/
        .when('/rule/material', {
            templateUrl: "admin/rule/material/index.html",
            controller: "RuleMaterialCtr"
        }) //图片管理
        .when('/rule/reserve', {
            templateUrl: "admin/rule/reserve/index.html",
            controller: "ReserveCtr"
        }) //预定
        .when('/rule/reserve/add', {
            templateUrl: "admin/rule/reserve/add.html",
            controller: "ReserveAddCtr"
        })
        .when('/rule/reserve/add/:activityId', {
            templateUrl: "admin/rule/reserve/add.html",
            controller: "ReserveAddCtr"
        }) //门店员工展示
        .when('/rule/redpackets', {
            templateUrl: "admin/rule/redpackets/index.html",
            controller: "redpacketsCtr"
        }) //红包管理
        .when('/rule/source', {
            templateUrl: "admin/rule/source/index.html",
            controller: "sourceCtr"
        }) //素材管理
        .when('/rule/addsource', {
            templateUrl: "admin/rule/source/addsource.html",
            controller: "addsourceCtr"
        }) //素材管理-添加素材
        .when('/rule/video', {
            templateUrl: "admin/rule/video/index.html",
            controller: "videoCtr"
        }) //视频管理
        .when('/rule/addpackets', {
            templateUrl: "admin/rule/redpackets/addpackets.html",
            controller: "addpacketsCtr"
        }) //红包管理-添加红包
        .when('/rule/editpackets/:id', {
            templateUrl: "admin/rule/redpackets/editpackets.html",
            controller: "editpacketsCtr"
        }) //红包管理-修改红包
        .when('/rule/referral', {
            templateUrl: "admin/rule/referral/index.html",
            controller: "referralCtr"
        }) //转介绍管理
        .when('/rule/addreferral', {
            templateUrl: "admin/rule/referral/addreferral.html",
            controller: "addreferralCtr"
        }) //转介绍管理-新增
        .when('/rule/editreferral/:id', {
            templateUrl: "admin/rule/referral/editreferral.html",
            controller: "editreferralCtr"
        }) //转介绍管理-修改
        .when('/rule/share', {
            templateUrl: "admin/rule/share/index.html",
            controller: "shareGoldCtr"
        }) //分享金管理
        .when('/rule/order', {
            templateUrl: "admin/rule/order/index.html",
            controller: "orderCtr"
        }) //代客下单
        .when('/rule/orderAdd', {
            templateUrl: "admin/rule/order/add.html",
            controller: "addOrderCtr"
        }) //代客下单-新增
        .when('/rule/editOrder/:id', {
            templateUrl: "admin/rule/order/edit.html",
            controller: "editOrderCtr"
        }) //代客下单-修改


        .when('/rule/addshare', {
            templateUrl: "admin/rule/share/addshare.html",
            controller: "addshareCtr"
        }) //分享金管理-新增
        .when('/rule/editshare/:id', {
            templateUrl: "admin/rule/share/editshare.html",
            controller: "editshareCtr"
        }) //分享金管理-修改

        .when('/rule/commission', {
            templateUrl: "admin/rule/commission/index.html",
            controller: "commissionCtr"
        }) //返佣管理
        .when('/rule/addcommission', {
            templateUrl: "admin/rule/commission/addcommission.html",
            controller: "addcommissionCtr"
        }) //返佣管理-新增
        .when('/rule/editcommission/:id', {
            templateUrl: "admin/rule/commission/editcommission.html",
            controller: "editcommissionCtr"
        }) //返佣管理-修改
        .when('/rule/reserve/add2/:activityId', {
            templateUrl: "admin/rule/reserve/add2.html",
            controller: "ReserveAdd2Ctr"
        }) //门店员工展示
        .when('/customer/charge/:userId', {
            templateUrl: "admin/customer/charge.html",
            controller: "CustomerChargeCtr"
        }) //会员充值
        .when('/customer/update/:userId', {
            templateUrl: "admin/customer/update.html",
            controller: "CustomerUpdateCtr"
        }) //老会员修改
        .when('/customer/upgrade/:userId', {
            templateUrl: "admin/customer/upgrade.html",
            controller: "CustomerUpgradeCtr"
        }) //会员升级
        .when('/customer/point/:userId', {
            templateUrl: "admin/customer/point.html",
            controller: "CustomerPointCtr"
        }) //顾客积分
        .when('/customer/coupon/:userId', {
            templateUrl: "admin/customer/coupon.html",
            controller: "CustomerCouponCtr"
        }) //顾客发券
        .when('/customer/add', {
            templateUrl: "keeper/customer/add.html",
            controller: "CustomerAddCtr"
        }) //添加顾客
        .when('/customer/details/:userId', {
            templateUrl: "admin/customer/details.html?v=20181105",
            controller: "CustomerDetailsCtr"
        }) //顾客详情
        .when('/customer/search/:userId', {
            templateUrl: "admin/customer/index.html?v=1",
            controller: "CustomerCtr"
        }) //顾客查询
        .when('/customer', {
            templateUrl: "admin/customer/index.html?v=1",
            controller: "CustomerCtr"
        }) //顾客列表
        .when('/customer/import', {
            templateUrl: "admin/customer/import.html",
            controller: "CustomerImportCtr"
        }) //导入老会员
        .when('/customer/tag', {
            templateUrl: "admin/customer/tag.html",
            controller: "CustomerTagCtr"
        }) //群发的标签管理
        .when('/customer/mass', {
            templateUrl: "admin/customer/mass.html",
            controller: "CustomerMassCtr"
        }) //群发列表
        .when('/customer/mass/add', {
            templateUrl: "admin/customer/massAdd.html",
            controller: "CustomerMassAddCtr"
        })
        .when('/customer/record', {
            templateUrl: "admin/customer/record.html",
            controller: "CustomerRecordCtr"
        }) //群发历史
        .when('/customer/trusteeship', {
            templateUrl: "admin/customer/trusteeship.html",
            controller: "CustomerTrusteeshipCtr"
        }) //条件托管
        .when('/customer/trusteeship/add', {
            templateUrl: "admin/customer/trusteeshipAdd.html",
            controller: "CustomerTrusteeshipAddCtr"
        })
        .when('/test', {
            templateUrl: "test.html",
            controller: "TestCtr"
        }) //测试

        .when('/mall/dish', {
            templateUrl: "admin/mall/dish/index.html",
            controller: "DishCtr"
        }) //菜品列表
        .when('/mall/dish/add', {
            templateUrl: "admin/mall/dish/add.html",
            controller: "DishAddCtr"
        }) //菜品添加
        .when('/mall/dish/edit/:dishId', {
            templateUrl: "admin/mall/dish/add.html",
            controller: "DishAddCtr"
        })
        .when('/mall/category', {
            templateUrl: "admin/mall/category/index.html",
            controller: "CategoryCtr"
        })
        .when('/mall/meal', {
            templateUrl: "admin/mall/meal/index.html",
            controller: "MealCtr"
        }) //套餐
        .when('/mall/meal/add', {
            templateUrl: "admin/mall/meal/add.html",
            controller: "MealAddCtr"
        })
        .when('/mall/meal/edit/:mealId', {
            templateUrl: "admin/mall/meal/add.html",
            controller: "MealAddCtr"
        })
        .when('/mall/buy', {
            templateUrl: "admin/mall/buy/index.html",
            controller: "BuyCtr"
        }) //卖券
        .when('/mall/buy/add', {
            templateUrl: "admin/mall/buy/add.html",
            controller: "BuyAddCtr"
        })
        .when('/mall/buy/edit/:id', {
            templateUrl: "admin/mall/buy/add.html",
            controller: "BuyAddCtr"
        })
        .when('/doc', {
            templateUrl: "admin/doc/index.html?v=20181108",
            controller: "DocCtr"
        }) //统计报表列表
        .when('/finance', {
            templateUrl: "admin/finance/index.html",
            controller: "FinanceCtr"
        }) //财务报表列表
        .when('/finance/search', {
            templateUrl: "admin/finance/search.html",
            controller: "FinanceSearchCtr"
        }) //明细
        .when('/notice', {
            templateUrl: "admin/notice/index.html",
            controller: "NoticeCtr"
        }) //消息管理
        .when('/notice/praise', {
            templateUrl: "admin/notice/praise.html",
            controller: "NoticePraiseCtr"
        }) //评赏消息
        .when('/notice/groupon', {
            templateUrl: "admin/notice/groupon.html",
            controller: "NoticeGrouponCtr"
        }) //砍价
        .when('/notice/validate', {
            templateUrl: "admin/notice/validate.html",
            controller: "NoticeValidateCtr"
        }) //验证手机号
        .when('/notice/expired', {
            templateUrl: "admin/notice/expired.html",
            controller: "NoticeExpiredCtr"
        }) //券到期提醒
        .when('/notice/lottery', {
            templateUrl: "admin/notice/lottery.html",
            controller: "NoticeLotteryCtr"
        }) //抽奖
        .when('/notice/subscribe', {
            templateUrl: "admin/notice/subscribe.html",
            controller: "NoticeSubscribeCtr"
        }) //关注提醒
        .when('/notice/pay', {
            templateUrl: "admin/notice/pay.html",
            controller: "NoticePayCtr"
        }) //买单注册弹窗
        .otherwise({
            redirectTo: "/shops"
        }); //其他路径
}

/*------------------------------------------------------------------*/
app.controller('BrandCtr', function ($scope, $location, $http) { //
    $scope.config.breadset = [{ //
        name: "品牌管理",
        href: indexUrl + "/admin.html#/brand"
    }, {
        name: "品牌管理"
    }]; //面包屑

    // 点击左边菜单
    $scope.select = function () {
        // 品牌管理
        $location.path("/shops/" + $scope.active);
    }
    // 点击查询

    $scope.send = function () {
        // 品牌管理
        $location.path("/shops/" + $scope.name);
    }

    $scope.view = {
        pic: ajaxSendFn({}, "/pic/brand", "GET").result || [],
        brand: ajaxSendFn({}, "/brand", "GET").result || [],
        video: ajaxSendFn({
            count: 10
        }, "/videos", "GET").result || [],
        vidgroups: ajaxSendFn({}, "/videos/group", "GET").result || [],
    };
    $scope.tem = {
        uploadTitle: "选择要上传的图片"
    };
    $scope.addIntroduction = function () {
        $("#introduction").modal("show");
    };
    $scope.addpic = function () {
        $scope.tempic = "";
        $scope.view.materials = ajaxSendFn({
            count: 10
        }, "/materials", "GET").result || [];
        $scope.view.groups = ajaxSendFn({}, "/materials/group", "GET").result || [];
        $scope.view.select = -1;
        $scope.view.leftIndex = -2;
        $("#addpic").modal("show");
    };
    /* $scope.temimgshow = function (t) {
     var objUrl = getObjectURL(t.files[0]);
     if (objUrl) {
     $scope.$apply(function () {
     $scope.tempic = objUrl;
     });
     $scope.tem = {
     uploadTitle: "已选择"
     };
     }
     };*/
    $scope.introductionFn = function () {
        var data = ajaxSendFn({
            'content': $scope.view.brand.introduction
        }, "/brand/introduction", "POST");
        if (data.code == 200) {
            $("#introduction").modal("hide");
            alert("修改成功");
        } else {
            errorMsg(data);
        }
    };
    $scope.storyFn = function () {
        var data = ajaxSendFn({
            'content': $scope.view.brand.story
        }, "/brand/story", "POST");
        if (data.code == 200) {
            $("#story").modal("hide");
            alert("修改成功");
        } else {
            errorMsg(data);
        }
    };
    $scope.addStory = function () {
        $("#story").modal("show");
    };
    /*  $scope.sendimg = function (t) { //
     POSTurl = basicUrl + "/pic/brand?";
     options = {
     url: POSTurl + sortUrl(),
     type: "POST",
     success: function (data) {
     if (data.code === 200) {
     $scope.$apply(function () {
     $scope.view.pic.push(data.result);
     });
     $("#addpic").modal("hide");
     } else {
     alert("图片上传失败");
     $scope.tem.uploadTitle = "选择要上传的图片";
     }

     }
     };
     $("#iimgform").ajaxSubmit(options);
     };*/
    /*图片end*/
    $scope.removeImg = function (a) { //
        removere = ajaxSendFn({}, "/pic/" + $scope.view.pic[a].id, "DELETE");
        if (removere.code == 200) { //
            $scope.view.pic.splice(a, 1);
        }
    };
    $scope.setCover = function (picUrl) {
        var result = ajaxSendFn({}, "/pic/" + picUrl + "/cover", "POST");
        if (result.code == 200) {
            alert("设置成功");
            $scope.view.pic = ajaxSendFn({}, "/pic/brand", "GET").result || [];

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
    //    addPic

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
                        $scope.view.materials = ajaxSendFn({
                            count: 10
                        }, "/materials", "GET").result;
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
        $scope.view.materials = ajaxSendFn({
            count: 10
        }, url, "GET").result;
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
        $scope.view.video = ajaxSendFn({
            count: 10
        }, url, "GET").result;
        $scope.view.leftIndex = index;

    }
    $scope.sendGroup = function () {
        var data = ajaxSendFn({
            name: $scope.post.name
        }, "/materials/group", "POST");
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
        var json = {
            page: $scope.view.materials.page,
            count: $scope.view.materials.count
        };
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
                        $scope.view.materials = ajaxSendFn({
                            count: 10
                        }, "/videos", "GET").result;
                        $scope.view.select = 0;
                    });
                } else {
                    alert(data.message);
                }

            }
        };
        $("#iimgform").ajaxSubmit(options);
    };
    $scope.submitFn = function () {
        if ($scope.view.select >= 0) {
            var data = ajaxSendFn({
                id: $scope.view.materials.items[$scope.view.select].id
            }, "/pic/brand", "POST");
            if (data.code == 200) {
                $scope.view.pic.push(data.result);
                $("#addpic").modal("hide");
            } else {
                alert(data.message);
            }
            // $scope.picUrl = $scope.view.materials.items[$scope.view.select].url;
        }
    }
    $scope.submitVidFn = function () {
        $("#addvidpic").modal("hide");
    }


});

// 终端管路
app.controller('FinalCtr', function ($scope, $location, $http, $routeParams, $filter) { //shoplist over
    $scope.config.breadset = [{ //
        name: "终端管理",
        href: indexUrl + "/admin.html#/final"
    }, {
        name: "终端管理"
    }]; //面包屑
    $scope.downloadFn = function (url) {
        var a1 = document.createElement('a');
        //$scope.gettables.length
        a1.setAttribute("href", url);
        a1.setAttribute("download", "");
        var evObj = document.createEvent('MouseEvents');
        evObj.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, true, false, 0, null);
        a1.dispatchEvent(evObj);
    }
    if (sessionStorage.getItem('finalLeft')) {
        $scope.active = sessionStorage.getItem('finalLeft')
    }

    // 左边菜单跳转
    $scope.select = function (code) {
        $scope.active = code;
        sessionStorage.setItem('finalLeft', code)

        if ($scope.active == 1000) {
            $location.path('/final/equipment')
        } else if ($scope.active == 1001) {
            $location.path('/final/qrCode/dynamic')
        } else if ($scope.active == 1002) {
            $location.path('/final/qrCode/activity')
        } else if ($scope.active == 1003) {
            $location.path('/final/qrCode/promote')
        } else if ($scope.active == 1004) {
            $location.path('/final/qrCode/pay')
        }
    }
    // equipment终端设备start-------------------------------------------------
    $scope.equipment = {
        page: 1,
        count: 20,
    };
    $scope.equipmentList = ajaxSendFn($scope.equipment, "/terminals", "GET").result || []

    $scope.pageChangeEquipment = function () {
        $scope.equipmentList = ajaxSendFn($scope.equipment, "/terminals", "GET").result || []
    }


    // equipment终端设备end-------------------------------------------------
    // dynamic动态二维码start---------------------------------------------
    $scope.dynamic = {
        page: 1,
        count: 10,
        type: '',
        bound: 0
    };
    $scope.supply = {
        type: '',
        count: 1
    }
    // 查看绑定业务
    $scope.seeBusiness = function (index) {
        $scope.busModalData = ajaxSendFn({}, "/qrcodes/dynamic/" + $scope.dynamicList.items[index].id, "GET").result || [];
        $scope.fillterActivity = [];
        for (var i in $scope.factors.activites) {
            if (i == $scope.busModalData.business) {
                $scope.fillterActivity = $scope.factors.activites[i]
            }
        }
        $scope.busModalData.expireTime = new Date($scope.busModalData.expireTime);
        $('#busModal').modal('show');
    }
    // 表格数据
    $scope.search = function () {
        let json = $scope.dynamic
        for (var i in json) {
            if (!json[i]) {
                delete json[i]
            }
        }
        $scope.dynamicList = ajaxSendFn(json, "/qrcodes/dynamic", "GET").result || []
    }
    // 查询
    $scope.search();
    $scope.showSupplu = function () {
        $('#supply').modal('show')
    }
    // 提交申请
    $scope.submitSupply = function () {
        var data = ajaxSendFn($scope.supply, "/qrcodes/dynamic", "POST");
        if (data.code == 200) {
            alert("操作成功！");
            $scope.search();
            $('#supply').modal('hide')
        } else {
            alert(data.message)
        }
    }
    // 分页
    $scope.pageChangeDynamic = function () {
        $scope.search();
    };



    // dynamic动态二维码end---------------------------------------------
    // promote推广二维码start---------------------------------------------
    $scope.promote = {
        page: 1,
        count: 10,
        staffId: '',
        business: '',
        shopId: ''
    }
    // 弹窗数据
    $scope.postPromote = {}
    // 弹窗业务改变
    $scope.businessChange = function (business) {
        console.log(business);
        $scope.fillterActivity = [];
        for (var i in $scope.factors.activites) {
            if (i == business) {
                $scope.fillterActivity = $scope.factors.activites[i]
            }
        }
    }
    // 根据门店查询服务员-弹窗
    $scope.fillterPromoteStaff = [];
    $scope.shopsPromoteChange = function (shopId) {
        for (var i in $scope.factors.staffs) {
            if (i == shopId) {
                $scope.fillterPromoteStaff = $scope.factors.staffs[i]
            }
        }

    }
    // 根据门店查询服务员
    $scope.fillterStaff = [];
    $scope.shopsChange = function () {
        for (var i in $scope.factors.staffs) {
            if (i == $scope.promote.shopId) {
                $scope.fillterStaff = $scope.factors.staffs[i]
            }
        }

    }

    // 表格数据
    $scope.searchPromote = function () {
        let json = $scope.promote
        for (var i in json) {
            if (!json[i]) {
                delete json[i]
            }
        }
        $scope.promoteList = ajaxSendFn(json, "/qrcodes/promotes", "GET").result || []
    }
    $scope.factors = ajaxSendFn({}, "/qrcodes/promotes/factors", "GET").result || []
    // 查询
    $scope.searchPromote();
    $scope.pageChangePromote = function () {
        $scope.searchPromote()
    }
    // 添加/修改
    $scope.showPromote = function (index) {

        if (index >= 0) {
            let item = Object.assign({}, $scope.promoteList.items[index]);
            if (item.shopId) {
                $scope.shopsPromoteChange(item.shopId)
            }
            if (item.expireTime) {
                item.expireTime = new Date(item.expireTime);
            }
            if (item.business) {
                for (var i in $scope.factors.activites) {
                    if (i == item.business) {
                        $scope.fillterActivity = $scope.factors.activites[i]
                    }
                }
            }
            $('#linkPicUrl').attr('src', item.linkPicUrl)
            $scope.postPromote = item;

        } else {
            $scope.postPromote = {}
        }

        $('#promote').modal('show')
    }

    // 解绑
    $scope.unBind = function (index) {
        if (confirm("是否确定解绑?")) {
            let id = $scope.promoteList.items[index].id;
            let data = ajaxSendFn({}, "/qrcodes/promotes/" + id, "DELETE");
            if (data.code == 200) {
                alert('解绑成功')
                $scope.searchPromote()
            }
        }

    }

    $scope.linkPicUrl = ''
    //   上传图片
    $scope.promoteImgUpload = function (t) {
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
                    $scope.postPromote.linkPicUrl = data.result.url;
                    $scope.linkPicUrl = data.result.url;
                    $('#linkPicUrl').attr('src', data.result.url)

                } else {
                    alert(data.message);
                }

            }
        };
        $("#iimgform").ajaxSubmit(options);

    };

    // 绑定
    $scope.submitPromote = function () {
        console.log($scope.postPromote)
        let id = '';
        if ($scope.postPromote.id) {
            id = $scope.postPromote.id;
        }
        let json = $scope.postPromote;
        for (var i in json) {
            if (!json[i]) {
                delete json[i]
            }
        }

        json.expireTime = $filter('date')(json.expireTime, "yyyy-MM-dd HH:mm:ss");
        var data;
        if (!$scope.postPromote.id) {
            data = ajaxSendFn(json, "/qrcodes/promotes", "POST");
        } else {
            delete json.id;
            delete json.bindTime;
            delete json.shopName;
            delete json.staffName;
            delete json.code;
            delete json.qrcodeUrl;
            delete json.businessText;
            delete json.$$hashKey;
            data = ajaxSendFn(json, "/qrcodes/promotes/" + id, "PUT");
        }

        if (data.code == 200) {
            alert("操作成功！");
            $scope.searchPromote();
            $('#promote').modal('hide')
        } else {
            alert(data.message)
        }
    }
    // promote推广二维码end


});
// 门店管理
app.controller('ShopsCtr', function ($scope, $location, $http, $routeParams) { //shoplist over
    $scope.config.breadset = [{ //
        name: "门店管理",
        href: indexUrl + "/admin.html#/shops"
    }, {
        name: "门店列表"
    }]; //面包屑
    $scope.bussniessTime = {
        1001: "早市",
        1002: "午市",
        1003: "下午茶",
        1004: "晚市",
        1005: "宵夜"
    };
    $scope.text = {
        1001: "",
        1002: "提交认证时间：",
        1003: "认证通过时间：",
        1004: "提交关闭时间",
        1005: "停用时间"
    }
    $scope.detailShow = -1;
    // 一进页面获取的门店列表start
    let jsonA = {
        count: 10
    }
    if ($routeParams.active && !isNaN($routeParams.active)) {
        jsonA.state = $routeParams.active;
        $scope.active = $routeParams.active
    } else if ($routeParams.active && isNaN($routeParams.active)) {
        jsonA.name = $routeParams.active;
        $scope.active = ""
    } else {
        $scope.active = ""
    }


    var data = ajaxSendFn(jsonA, "/shops/shops", "GET");
    // 一进页面获取的门店列表end
    console.log('active=' + $scope.active)

    if (data.code != 200) $location.path("/shops/add");

    $scope.shops = data.result;
    $scope.select = function () {
        console.log($scope.active)
        if ($scope.active == 'brand') {
            // 品牌管理
            $location.path("/brand");
        } else {
            var json = {};
            $scope.active && (json.state = $scope.active);
            $scope.shops = ajaxSendFn(json, "/shops/shops", "GET").result;
        }

    }
    $scope.$watch('shops.page', function (newVal, oldVal) {
        if (newVal && oldVal && newVal !== oldVal) {
            var json = {
                page: $scope.shops.page,
                count: $scope.shops.count
            };
            $scope.active && (json.state = $scope.active);
            $scope.shops = ajaxSendFn(json, "/shops/shops", "GET").result;
        }
    });
    $scope.send = function () {
        $scope.shops = ajaxSendFn({
            name: $scope.name
        }, "/shops/shops", "GET").result;
    }
    $scope.settingObj = {
        picUrl: '',
        display: false
    }
    $scope.stageCheck = [{
        code: '101',
        text: '展示二维码等待捷账宝扫描'
    }, {
        code: '102',
        text: '用户主动输入金额'
    }];
    $scope.tableCheck = [{
        code: '100',
        text: '点击买单后呼叫捷账宝'
    }, {
        code: '101',
        text: '展示二维码等待捷账宝扫描'
    }, {
        code: '102',
        text: '用户主动输入金额'
    }];
    // 提交买单页配置
    $scope.addSettingPic = function () {
        var data = ajaxSendFn($scope.settingObj, "/shops/shop/" + $scope.shop.id + "/setting", "POST");
        if (data.code == 200) alert("操作成功！");
    }
    // 买单图片是否显示
    $scope.submitSetting = function () {

        let pp = new Promise(function (resolve) {
            let json = $scope.settingObj;
            resolve(json)
        })
        pp.then(function (json) {
            var data = ajaxSendFn($scope.settingObj, "/shops/shop/" + $scope.selectId + '/setting', "POST");
            if (data.code == 200) {
                $scope.settingObj = ajaxSendFn({}, "/shops/shop/" + $scope.selectId + '/setting', "GET").result;
                alert('操作成功')
            } else {
                alert(data.message);
            }
        })
    }
    //addpic
    $scope.changeFn = function (index, item) {
        if ($scope.view.select == index) {
            $scope.view.select = -1;
        } else {
            $scope.view.select = index;
        }
    }
    $scope.changevidFn = function (index, item) {
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
                        $scope.view.materials = ajaxSendFn({
                            count: 10
                        }, "/materials", "GET").result;
                        $scope.view.select = 0;
                    });
                } else {
                    alert(data.message);
                }

            }
        };
        $("#iimgform").ajaxSubmit(options);
    };
    $scope.selectId = '';

    $scope.detail = function (id, index) {
        $scope.selectId = id;
        $scope.settingObj = {};
        $scope.shop = ajaxSendFn({}, "/shops/shop/" + id, "GET", 1).result; //获取门店基本信息
        $scope.detailShow = index;
        // 获取买单页信息
        $scope.settingObj = ajaxSendFn({}, "/shops/shop/" + id + '/setting', "GET", 1).result || {};
        console.log($scope.settingObj)
    }
    $scope.view = {
        materials: [],
        select: 0,
        groups: [],
        leftIndex: 0
    }
    $scope.addpic = function (state) {
        // state==addSetting:添加买单页图片 
        // state==addShopImg:添加本店图片 
        $scope.state = state;
        $scope.view.materials = ajaxSendFn({
            count: 10
        }, "/materials", "GET").result || [];
        $scope.view.groups = ajaxSendFn({}, "/materials/group", "GET").result || [];
        $scope.view.select = -1;
        $scope.view.leftIndex = -2;
        $("#addpic").modal("show");
    };
    // 提交图片
    $scope.submitFn = function () {
        if ($scope.view.select >= 0) {
            if ($scope.state == 'addShopImg') {
                var data = ajaxSendFn({
                    id: $scope.view.materials.items[$scope.view.select].id
                }, "/pic/shop", "POST");
                if (data.code == 200) {
                    $scope.shop.picUrls.push(data.result);
                    $("#addpic").modal("hide");
                } else {
                    alert(data.message);
                }
            } else if ($scope.state == 'addSetting') {
                var data = ajaxSendFn({
                    picUrl: $scope.view.materials.items[$scope.view.select].url,
                    display: $scope.settingObj.display
                }, "/shops/shop/" + $scope.selectId + '/setting', "POST");
                if (data.code == 200) {
                    $scope.settingObj = ajaxSendFn({}, "/shops/shop/" + $scope.selectId + '/setting', "GET").result;
                    $("#addpic").modal("hide");
                    alert('选择成功')
                } else {
                    alert(data.message);
                }
            }
        }
    }
    $scope.qrcodeFn = function () {
        $scope.qrcode = {};
        var data = ajaxSendFn({}, "/shops/shop/" + $scope.shops.items[$scope.detailShow].id + "/qrcode", "GET");
        if (data.code == 200) {
            $scope.qrcode = data.result;
            $("#qrcode").modal("show");
        } else {
            alert("门店还未认证通过");
        }
    }
    $scope.deleteShopFn = function () {
        if (confirm("是否确定申请关闭?")) {
            var data = ajaxSendFn({}, "/shops/" + $scope.shop.id, "POST");
            if (data.code == 200) alert("申请关闭成功！");
            else errorMsg(data);

        }
    }
});
app.controller('ShopsAddCtr', function ($scope, $location) {

    $scope.posts = {};
    $scope.type = [{
        code: 1001,
        text: '支持桌边付'
    }, {
        code: 1002,
        text: '不支持桌边付'
    }];

    $scope.posts.type = $scope.type[0].code;
    $scope.areaJson1 = ajaxSendFn({}, "/dict/area", "GET").result;
    $scope.area1change = function () { //
        $scope.areaJson2 = ajaxSendFn({
            code: $scope.area.area1
        }, "/dict/area", "GET").result || [];
        $scope.area.area2 = $scope.areaJson2[0] && $scope.areaJson2[0].code;
        $scope.areaJson3 = $scope.area.area2 ? (ajaxSendFn({
            code: $scope.area.area2
        }, "/dict/area", "GET").result || []) : false;
        $scope.posts.area = ($scope.areaJson3[0] && $scope.areaJson3[0].code) || ($scope.areaJson2[0] && $scope.areaJson2[0].code) || ($scope.areaJson1[0] && $scope.areaJson1[0].code);
    };
    $scope.area2change = function () { //
        $scope.areaJson3 = ajaxSendFn({
            code: $scope.area.area2
        }, "/dict/area", "GET").result || [];
        $scope.posts.area = ($scope.areaJson3[0] && $scope.areaJson3[0].code) || $scope.area.area2;
    };
    $scope.postSend = function () { //
        // var sendJson = JSON.stringify($scope.posts);
        if (/[(())]/.test($scope.posts.name)) {
            $scope.config.modalContent = "请不要输入带括弧的名称";
            $(".modal").modal("show");
            return;
        }
        var postsend = ajaxSendFn($scope.posts, "/shops", "POST", 1);
        if (postsend.code == 200) {
            $location.path("/shops/add2/" + postsend.result.id);
        } else { //
            $scope.config.modalContent = postsend.message;
            $(".modal").modal("show");
            return;
        }
    };
})
app.controller('ShopsAdd2Ctr', function ($scope, $location, $routeParams) {
    $scope.config.breadset = [{ //
        name: "门店管理",
        href: indexUrl + "/admin.html#/shops/add"
    }, {
        name: "添加店长"
    }]; //面包屑
    $scope.posts = {};
    $scope.postSend = function () { //
        sendJsons = {
            "name": $scope.posts.name,
            "nickname": $scope.posts.nickname,
            "password": hex_md5($scope.posts.password),
            "shopId": $routeParams.shopId,
            "roleType": "K"
        };
        for (var x in sendJsons) {
            if (sendJsons[x] == "" || !sendJsons[x] || sendJsons == null) { //
                delete sendJsons[x];
            }
        }
        sendJson = JSON.stringify(sendJsons);
        postsend = ajaxSendFn(sendJson, constUrlDict["staff"], "POST", 1);
        if (postsend.code == 200) {
            $location.path("/shops/add3/" + $routeParams.shopId);
        } else { //
            alert(postsend.message);
            return;
        }
    };
    $scope.reshpwd = function () {
        console.log($scope.staffadd_form);
        if ($scope.repassword == $scope.posts.password) { //
            $scope.staffadd_form.repassword.$error.pattern = false;
        } else { //
            $scope.staffadd_form.repassword.$error.pattern = true;
        }
    }
})
app.controller('ShopsAdd3Ctr', function ($scope, $location, $routeParams) {
    $scope.config.breadset = [{ //
        name: "门店管理",
        href: indexUrl + "/admin.html#/shops/add"
    }, {
        name: "添加完成"
    }]; //面包屑
    shopsget = ajaxSendFn({}, "/shops/shop/" + $routeParams.shopId, "GET");
    $scope.shopshow = shopsget.code == 200 ? shopsget.result : false;
})
/*------------------------------------------------------------------*/
app.controller('StaffCtr', function ($scope, $routeParams) {
    $scope.config.breadset = [{ //
        name: "员工管理",
        href: indexUrl + "/admin.html#/staff"
    }, {
        name: "员工列表"
    }]; //面包屑
    var data1 = ajaxSendFn({
        count: 10
    }, constUrlDict["staffs-base"], "GET"); //获取门店基本信息
    $scope.staffs = data1.result || [];
    //、、、、、、
    $scope.$watch('staffs.page', function (newVal, oldVal) {
        if (newVal && oldVal && newVal !== oldVal) {
            var json = {
                page: $scope.staffs.page,
                count: $scope.staffs.count
            };
            $scope.staffs = ajaxSendFn(json, constUrlDict["staffs-base"], "GET").result;
        }
    });
    $scope.detail = function (id, index) {
        $scope.staff = ajaxSendFn({
            shopId: id
        }, constUrlDict["staffs-shop"], "GET", 1).result; //获取门店基本信息
        $scope.detailShow = index;
    }
    $scope.modal = function (id, name) {
        $scope.staffget = ajaxSendFn({}, constUrlDict["staff"] + "/" + id, "GET").result;
        $("#" + name).modal('show');
    }
    // 禁用员工
    $scope.stopStaff = function (id, state) { //
        console.log('点击了')
        if (state == '0') {
            // 启用状态,去禁用
            if (!confirm("是否禁用？")) return false;
            var staffDelRe = ajaxSendFn({}, '/staffs/staff/' + id + '/off', "POST");
        } else if (state == '3') {
            if (!confirm("是否启用？")) return false;
            var staffDelRe = ajaxSendFn({}, '/staffs/staff/' + id + '/on', "POST");
        }

        if (staffDelRe.code == 200) { //
            alert("操作成功");
            $scope.staff = ajaxSendFn({
                shopId: $scope.staffs.items[$scope.detailShow].id
            }, constUrlDict["staffs-shop"], "GET").result;
        } else { //
            errorMsg(staffDelRe);
        }
    }
    $scope.delete = function (id) { //
        if (!confirm("一旦删除将不可恢复，是否确认删除？")) return false;
        var staffDelRe = ajaxSendFn({}, constUrlDict["staffs-base"] + "/staff/" + id, "DELETE");
        if (staffDelRe.code == 200) { //
            alert("删除成功");
            $scope.staff = ajaxSendFn({
                shopId: $scope.staffs.items[$scope.detailShow].id
            }, constUrlDict["staffs-shop"], "GET").result;
        } else { //
            errorMsg(staffDelRe);
        }
    }
    $scope.postSend = function () {
        var id = $scope.staffget.id;
        delete $scope.staffget.id;
        result = ajaxSendFn(JSON.stringify($scope.staffget), "/staffs/staff/" + id, "POST", 1);
        if (result.code == 200) { //
            $("#edit").modal('hide');
            $scope.staff = ajaxSendFn({
                shopId: $scope.staffget.shopId
            }, constUrlDict["staffs-shop"], "GET", 1).result;
        } else {
            errorMsg(result);
        }
    };
    $scope.resetPassword = function () { //
        if (!$scope.staffadd_form.$valid) {
            $scope.staffadd_form.submitted = true;
            return;
        } else { ///
            var json = {};
            angular.extend(json, $scope.posts);
            json.password = hex_md5($scope.posts.password);
            result = ajaxSendFn(json, constUrlDict["staffs-password"] + "/" + $scope.staffget.id, "POST");
            if (result.code == 200) { //
                $("#password").modal('hide');
                alert("修改成功");
            } else {
                errorMsg(result);
            }
        }
    }
    if ($routeParams.shopId) {
        for (var i = 0; i < $scope.staffs.items.length; i++) {
            if ($routeParams.shopId == $scope.staffs.items[i].id) {
                $scope.detail($routeParams.shopId, i);
            }
        }
    }


})
/*------------------------------------------------------------------*/
app.controller('StaffAddCtr', function ($scope, $location, $routeParams) {
    $scope.show = {};
    $scope.posts = {};
    $scope.staffadd_form = {};
    $scope.config.breadset = [{ //
        name: "员工管理",
        href: indexUrl + "/admin.html#/staff"
    }, {
        name: "添加员工"
    }]; //面包屑
    $scope.shopsget = ajaxSendFn({}, "/shops/shop/" + $routeParams.shopId, "GET").result;
    $scope.textCheckJson = textCheckJson;
    $scope.textCheckErrorJson = textCheckErrorJson;
    $scope.staffadd_form.submitted = false;
    $scope.posts.gender = 0;
    $scope.shopId = $routeParams.shopId;
    $scope.staffaddsend = function (keeper) { //
        var sendJson = {};
        sendJson = $scope.posts;
        sendJson.shopId = $routeParams.shopId;
        sendJson.roleType = keeper == "keeper" ? "K" : "S";
        //sendJson.password = hex_md5(sendJson.password);
        result = ajaxSendFn(JSON.stringify(sendJson), constUrlDict["staff"], "POST", 1);
        if (result.code == 200) { //
            alert("添加成功");
            $location.path("/staff/" + $routeParams.shopId);
        } else {
            errorMsg(result);
        }
    }
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
    $scope.submit = true;
    $scope.textCheckJson = textCheckJson;
    $scope.textCheckErrorJson = textCheckErrorJson;
    $scope.posts.gender = 0;
    $scope.password = "";
    $scope.authorized = false;
    $scope.switch = false;

    // 退款
    $scope.refund = {
        authorized: false,
        object: {
            901: false,
            902: false,
            909: false,
            920: false,
        }
    }
    // 支付渠道
    $scope.pay = {
        object: {
            1000: false,
            1001: false,
            1005: false,
            1101: false,
        }
    }
    // 服务管理
    $scope.staff = {
        object: {
            "ADD": false,
            "UPDATE": false,
            "QUERY": false,
        }
    }
    // 激活码管理
    $scope.activate = {
        object: {
            "ADD": false,
            "UPDATE": false,
            "QUERY": false,
        }
    }
    // 值班
    $scope.duty = {
        object: {
            "UPDATE": false,
            "QUERY": false,
        }
    }
    // 活动
    $scope.activity = {
        object: {
            6001: false,
            6002: false,
            6004: false,
            6033: false,
        }
    }
    // 预定
    $scope.reserve = {
        object: {
            "ADD": false,
            "UPDATE": false,
            "DELETE": false,
        }
    }
    // 顾客权益
    $scope.benefit = {
        operations: {
            "ADD": false,
            "UPDATE": false,
        },
        object: {
            1014: false,
            1015: false,
            1016: false,
            1017: false,
        }
    }
    // 奖励
    $scope.profits = {
        operations: {
            "ADD": false,
            "UPDATE": false,
        },
        object: {
            8002: false,
            8010: false,
            8011: false,
            8012: false,
        }
    }
    // 会员权益
    $scope.customer = {
        operations: {
            "ADD": false,
            "UPDATE": false,
            "QUERY": false,
        },
        object: {

        }
    }
    // 买单播报
    $scope.check = {
        authorized: false,
        object: {
            "STAGE": false,
            "item.id": false
        }
    }
    $scope.settime = function (a, b) { //
        if (b == 'ADD') {
            $scope.customer.operations[a] = $scope.customer.operations[a] ? null : true
        } else if (b == 'STAGE') {
            $scope.check.object[a] = $scope.check.object[a] ? null : true
        } else {
            $scope.benefit.operations[a] = $scope.benefit.operations[a] ? null : true
        }
    }
    $scope.settime2 = function (a, b) { //
        if (b == 'ADD') {
            $scope.customer.operations[a] = $scope.customer.operations[a] ? null : true
        } else if (b == 'STAGE') {
            $scope.check.object[a] = $scope.check.object[a] ? null : true
        } else {
            $scope.profits.operations[a] = $scope.profits.operations[a] ? null : true
        }
    }
    $scope.grade = ajaxSendFn({}, "/memberGrade", "GET");
    $scope.posts = ajaxSendFn({}, "/staffs/staff/" + $routeParams.guestid + "/permission", "GET");

    // 曾经设置过权限
    if ($scope.posts.code == 200) {
        // 是否设置过密码
        $scope.authorized = $scope.posts.result.authorized
        // 退款
        if ($scope.posts.result.refund) {
            console.log($scope.posts.result.refund);
            $scope.refund.authorized = $scope.posts.result.refund.authorized
            console.log($scope.refund.authorized);
            angular.forEach($scope.posts.result.refund.objects, function (value, key) {
                $scope.refund.object[value] = true
            })
        };
        // 激活码
        // if ($scope.posts.result.activate) {
        //     $scope.activate.authorized = $scope.posts.result.activate.authorized
        //     angular.forEach($scope.posts.result.activate.operations, function (value, key) {
        //         $scope.activate.object[value] = true
        //     })
        // };
        // 活动
        if ($scope.posts.result.activity) {
            $scope.activity.authorized = $scope.posts.result.activity.authorized
            angular.forEach($scope.posts.result.activity.objects, function (value, key) {
                $scope.activity.object[value] = true
            })
        };
        // 支付渠道
        // if ($scope.posts.result.pay) {
        //     angular.forEach($scope.posts.result.pay.objects, function (value, key) {
        //         $scope.pay.object[value] = true
        //     });
        // }
        // 服务管理
        // if ($scope.posts.result.staff) {
        //     $scope.staff.authorized = $scope.posts.result.staff.authorized
        //     angular.forEach($scope.posts.result.staff.operations, function (value, key) {
        //         $scope.staff.object[value] = true
        //     });
        // }
        // 值班
        // if ($scope.posts.result.duty) {
        //     $scope.duty.authorized = $scope.posts.result.duty.authorized
        //     angular.forEach($scope.posts.result.duty.operations, function (value, key) {
        //         $scope.duty.object[value] = true
        //     });
        // }
        // 预定
        // if ($scope.posts.result.reserve) {
        //     $scope.reserve.authorized = $scope.posts.result.reserve.authorized
        //     angular.forEach($scope.posts.result.reserve.operations, function (value, key) {
        //         $scope.reserve.object[value] = true
        //     })
        // };
        // 顾客权益
        if ($scope.posts.result.benefit) {
            $scope.benefit.authorized = $scope.posts.result.benefit.authorized
            angular.forEach($scope.posts.result.benefit.operations, function (value, key) {
                $scope.benefit.operations[value] = true
            });
            angular.forEach($scope.posts.result.benefit.objects, function (value, key) {
                $scope.benefit.object[value] = true
            });
        }
        //奖励
        // if ($scope.posts.result.profits) {
        //     $scope.profits.authorized = $scope.posts.result.profits.authorized
        //     angular.forEach($scope.posts.result.profits.operations, function (value, key) {
        //         $scope.profits.operations[value] = true
        //     });
        //     angular.forEach($scope.posts.result.profits.objects, function (value, key) {
        //         $scope.profits.object[value] = true
        //     });
        // }
        // 会员
        if ($scope.posts.result.customer) {
            $scope.customer.authorized = $scope.posts.result.customer.authorized
            angular.forEach($scope.posts.result.customer.operations, function (value, key) {
                $scope.customer.operations[value] = true
            });
            angular.forEach($scope.posts.result.customer.objects, function (value, key) {
                $scope.customer.object[value] = true
            });
        }
        // 买单播报
        // if ($scope.posts.result.check) angular.forEach($scope.posts.result.check.objects, function (value, key) {
        //     $scope.check.object[value] = true
        // });

    }
    // 验证密码
    $scope.changepassword = function () {
        $scope.switch = !$scope.switch;
        if ($scope.switch) {
            document.getElementById('btn').innerText = '取消修改'
        } else {
            document.getElementById('btn').innerText = '修改密码'
            document.getElementById('newpass').value = $scope.password = '';
        }
    }
    $scope.checklength = function () {
        if (document.getElementById('setpass')) {
            $scope.password = document.getElementById('setpass').value
            if ($scope.password.length > 0 && ($scope.password.length < 8 || $scope.password.length > 20)) {
                $scope.submit = false;
                alert('密码长度应为8-20个字符');
                return;
            } else {
                $scope.submit = true;
            }
        } else if (document.getElementById('newpass') && $scope.switch) {
            $scope.password = document.getElementById('newpass').value
            if ($scope.password.length > 0 && ($scope.password.length < 8 || $scope.password.length > 20)) {
                $scope.submit = false;
                alert('密码长度应为8-20个字符');
                return;
            } else {
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
            password: "",
            refund: {
                objects: [],
                authorized: false
            },
            // pay: {
            //     objects: [],
            //     authorized: ''
            // },
            // staff: {
            //     operations: [],
            //     authorized: ''
            // },
            // activate: {
            //     operations: [],
            //     authorized: ''
            // },
            // duty: {
            //     operations: [],
            //     authorized: ''
            // },
            activity: {
                objects: [],
                authorized: false
            },
            // reserve: {
            //     operations: [],
            //     authorized: ''
            // },
            benefit: {
                operations: [],
                objects: [],
                authorized: false
            },
            // profits: {
            //     operations: [],
            //     objects: [],
            //     authorized: ''
            // },
            customer: {
                operations: [],
                objects: [],
                authorized: false
            },
            // check: {
            //     objects: [],
            //     authorized: ''
            // },
        };
        angular.forEach($scope.refund.object, function (value, key) { // 退款
            if (value) {
                sendJson.refund.objects.push(key)
            }
        });
        if ($scope.refund.authorized) { // 退款
            sendJson.refund.authorized = $scope.refund.authorized
        }
        angular.forEach($scope.pay.object, function (value, key) { //支付渠道
            if (value) {
                sendJson.pay.objects.push(key)
            }
        });
        // angular.forEach($scope.staff.object, function (value, key) { //服务员权限
        //     if (value) {
        //         sendJson.staff.operations.push(key)
        //     }
        // });
        // if ($scope.staff.authorized) { //服务员权限
        //     sendJson.staff.authorized = $scope.staff.authorized
        // }
        // angular.forEach($scope.activate.object, function (value, key) { //激活码
        //     if (value) {
        //         sendJson.activate.operations.push(key)
        //     }
        // });
        // if ($scope.activate.authorized) { //激活码
        //     sendJson.activate.authorized = $scope.activate.authorized
        // }
        // angular.forEach($scope.duty.object, function (value, key) { // 值班
        //     if (value) {
        //         sendJson.duty.operations.push(key)
        //     }
        // });
        // if ($scope.duty.authorized) { // 值班
        //     sendJson.duty.authorized = $scope.duty.authorized
        // }
        angular.forEach($scope.activity.object, function (value, key) { // 活动
            if (value) {
                sendJson.activity.objects.push(key)
            }
        });
        if ($scope.activity.authorized) { // 活动
            sendJson.activity.authorized = $scope.activity.authorized
        }
        // angular.forEach($scope.reserve.object, function (value, key) { // 预定
        //     if (value) {
        //         sendJson.reserve.operations.push(key)
        //     }
        // });
        // if ($scope.reserve.authorized) { // 预定
        //     sendJson.reserve.authorized = $scope.reserve.authorized
        // }
        angular.forEach($scope.benefit.operations, function (value, key) { // 顾客权益
            if (value) {
                sendJson.benefit.operations.push(key)
            }
        });
        if ($scope.benefit.authorized) { // 顾客权益
            sendJson.benefit.authorized = $scope.benefit.authorized
        }
        angular.forEach($scope.benefit.object, function (value, key) { // 顾客权益
            if (value) {
                sendJson.benefit.objects.push(key)
            }
        });
        // angular.forEach($scope.profits.operations, function (value, key) { // 奖励
        //     if (value) {
        //         sendJson.profits.operations.push(key)
        //     }
        // });
        // if ($scope.profits.authorized) { // 奖励
        //     sendJson.profits.authorized = $scope.profits.authorized
        // }
        // angular.forEach($scope.profits.object, function (value, key) { //  ��励
        //     if (value) {
        //         sendJson.profits.objects.push(key)
        //     }
        // });
        angular.forEach($scope.customer.operations, function (value, key) { // 会员权益
            if (value) {
                sendJson.customer.operations.push(key)
            }
        });
        if ($scope.customer.authorized) { // 会员权益
            sendJson.customer.authorized = $scope.customer.authorized
        }
        if ($scope.customer.operations['ADD']) angular.forEach($scope.customer.object, function (value, key) { // 会员权益
            if (value) {
                sendJson.customer.objects.push(key)
            }
        });
        // angular.forEach($scope.check.object, function (value, key) { // 买单
        //     if (value) {
        //         sendJson.check.objects.push(key)
        //     }
        // });
        // if ($scope.check.authorized) { // 买单
        //     sendJson.check.authorized = $scope.check.authorized
        // }
        if (sendJson.benefit.operations.length >= 1 && sendJson.benefit.objects.length < 1) {
            alert('请选择顾客权益类型');
            return
        } else if (sendJson.benefit.operations.length < 1) {
            console.log(sendJson.benefit.operations);
            sendJson.benefit.objects = [];
        }
        // if (sendJson.profits.operations.length >= 1 && sendJson.profits.objects.length < 1) {
        //     alert('请选择奖励类型');
        //     return
        // } else if (sendJson.profits.operations.length < 1) {
        //     console.log(sendJson.profits.operations);
        //     sendJson.profits.objects = [];
        // }
        if ($scope.customer.operations['ADD'] && sendJson.customer.objects.length < 1) {
            alert('请选择会员等级');
            return
        }

        // if(sendJson.refund.objects.length < 1) {
        //     alert('请选择订单类型');
        //     return
        // }
        // sendJson.roleType = keeper == "keeper" ? "K" : "S";
        sendJson.refund.authorized = $scope.refund.authorized;
        // sendJson.activate.authorized = $scope.activate.authorized
        // sendJson.pay.authorized = $scope.pay.authorized
        // sendJson.check.authorized = $scope.check.authorized
        sendJson.customer.authorized = $scope.customer.authorized
        sendJson.benefit.authorized = $scope.benefit.authorized
        // sendJson.profits.authorized = $scope.profits.authorized
        // sendJson.duty.authorized = $scope.duty.authorized
        sendJson.activity.authorized = $scope.activity.authorized
        // sendJson.reserve.authorized = $scope.reserve.authorized

        // 第一次设置密码
        if (!$scope.authorized || $scope.password) {
            sendJson.password = hex_md5($scope.password);
        } else if (!$scope.authorized && !$scope.password) {
            // 选择密码 长度不对
            alert('密码应由长度为8-20个字符');
            return;
        } else {
            // 不修改密码
            delete sendJson.password
        }


        sendJson = JSON.stringify(sendJson);
        result = ajaxSendFn(sendJson, "/staffs/staff/" + $routeParams.guestid + "/permission", "POST", 1);
        if (result.code == 200) { //
            alert("添加成功");
            // $location.path("/staff");
            window.location.reload(true)
        } else {
            errorMsg(result);
        }
    }

})
app.controller("passwordCtr", function ($scope, $location) {
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
            angular.extend(json, $scope.posts);
            json.old = hex_md5($scope.posts.oldPassword);
            json.password = hex_md5($scope.posts.password);
            delete json.oldPassword;
            result = ajaxSendFn(JSON.stringify(json), constUrlDict["staffs-password"], "POST");
            if (result.code == 200) { //
                alert("修改成功");
                $location.path("/");
            } else {
                errorMsg(result);
            }
        };
    }
});
// 门店活动
app.controller('ShopActivityCtr', function ($rootScope, $scope, $location, $filter, $document, $compile, $routeParams) { //shoplist over
    $scope.config.breadset = [{ //
        name: "门店活动",
        href: indexUrl + "/admin.html#/shopActivity",
        class: "shopActivity"
    }, {
        name: "活动列表"
    }]; //面包屑
    // 展示数据
    $scope.view = {
        shops: ajaxSendFn({
            state: 1002
        }, "/shops", "GET").result,
        coupons: ajaxSendFn({}, "/activity/factor", "GET").result.COUPON || [],
        counponType: {
            "OFFSETCASH": "代金券",
            "DISCOUNT": "折扣券",
            "PHYSICAL": "实物券",
            "GIFT": "礼券",
            "new": "新增券"
        },
        rule: $filter("orderBy")(rule, "createTime", true),
        scenes: [{
            /**
             * 捷帐宝
             */
            text: '发布到捷帐宝',
            key: 'CMPP',
            value: false
        }, {
            /**
             * 上宾小栈
             */
            text: '发布到上宾小栈',
            key: 'INNS',
            value: false
        }]
    };
    var lastShow = $rootScope.lastShow;
    $scope.page = 1;
    $scope.count = 10;
    $scope.config.permission = ajaxSendFn({}, "/activity/permission", "GET").result;
    if ($location.$$path == "/shopActivity") {
        var rule = ajaxSendFn({
            page: $scope.page,
            count: $scope.count
        }, "/activity/store", "GET").result || [];
        $scope.config.breadset[0].class = "shopActivity";

        $scope.view.rule = $filter("orderBy")(rule, "createTime", true);
    }
    if (!$routeParams.id) {
        // 添加的时候
        //    提交数据
        $scope.posts = {
            allShop: false,
            name: '',
            benefits: '',
            shops: [],
            additional: ''

        }
    } else {
        $scope.posts = ajaxSendFn({}, "/activity/store/" + $routeParams.id, "GET").result;
        $scope.posts.startDate = new Date($scope.posts.startDate);
        $scope.posts.endDate = new Date($scope.posts.endDate);
        let shops = [];
        $scope.posts.shops.map((i, j) => {
            shops.push($scope.posts.shops[j])
        })
        $scope.posts.shops = shops;
        console.log(shops)
        $scope.posts.scenes.map((k) => {
            $scope.view.scenes.map((i) => {
                console.log(i.key + "===" + k)
                if (k == i.key) {
                    i.value = true;

                }
            })
        });
        $scope.posts.benefits = $scope.posts.benefits.id;
        console.log($scope.view.scenes)

    }
    // 全选门店
    $scope.checkAllShops = function () { //
        console.log($scope.posts.allShop)

        if ($scope.posts.allShop) {
            var shops = [];
            for (var i = 0; i < $scope.view.shops.length; i++) {
                shops.push($scope.view.shops[i].id)
            }
            $scope.posts.shops = shops
        } else { //
            // $scope.view.shops = [];
            $scope.posts.shops = []
        }
    }


    $scope.ruleFn = {
        // 保存
        saveFn: function () {
            let json = {};
            console.log($scope.posts);
            console.log($scope.view.scenes);
            if (!$scope.posts.name) {
                alert('请填写标题');
                return;
            } else {
                json.name = $scope.posts.name
            }
            if (!$scope.posts.startDate) {
                alert('请填写开始时间');
                return;
            } else {
                json.startDate = $filter("date")($scope.posts.startDate, "yyyy-MM-dd hh:mm:ss")
            }
            if (!$scope.posts.endDate) {
                alert('请填写结束时间');
                return;
            } else {
                json.endDate = $filter("date")($scope.posts.endDate, "yyyy-MM-dd hh:mm:ss")
            }

            if ($scope.posts.shops.length <= 0) {
                alert('请选择门店');
                return;
            } else {
                json.shops = $scope.posts.shops
            }
            json.scenes = []
            $scope.view.scenes.map((i) => {
                if (i.value) {
                    json.scenes.push(i.key)
                }
            })
            if (json.scenes.length <= 0) {
                alert('请选择场景');
                return;
            }


            if (!$scope.posts.benefits) {
                alert('请选择券');
                return;
            } else {
                json.benefits = {
                    id: $scope.posts.benefits,
                    category: "COUPON",
                    count: 1
                }
            }
            json.additional = $scope.posts.additional;

            console.log(json);
            var data = null;
            if (!$routeParams.id) {
                // 添加
                data = ajaxSendFn(json, "/activity/store", "POST");
            } else {
                // 修改
                data = ajaxSendFn(json, "/activity/store/" + $routeParams.id, "POST");

            }
            if (data.code == 200) {
                $location.path("/shopActivity");
            } else {
                errorMsg(data);
            }
        },
        // 删除
        deleteItem: function (index) {
            if (!confirm("一旦删除将不可恢复，是否确认删除？")) return false;
            let id = $scope.view.rule.items[index].id;
            var staffDelRe = ajaxSendFn({}, '/activity/store/' + id, "DELETE");

            if (staffDelRe.code == 200) { //
                alert("删除成功");
                $scope.view.rule = ajaxSendFn({
                    page: $scope.page,
                    count: $scope.count
                }, "/activity/store", "GET").result || [];
            } else { //
                errorMsg(staffDelRe);
            }
        },
        // 上线
        online: (index) => {
            let id = $scope.view.rule.items[index].id;
            var staffDelRe = ajaxSendFn({}, '/activity/store/' + id + '/on', "POST");
            if (staffDelRe.code == 200) {
                $scope.view.rule = ajaxSendFn({
                    page: $scope.page,
                    count: $scope.count
                }, "/activity/store", "GET").result || [];
            } else { //
                errorMsg(staffDelRe);
            }
        },
        // 下线
        offline: (index) => {
            let id = $scope.view.rule.items[index].id;
            var staffDelRe = ajaxSendFn({}, '/activity/store/' + id + '/off', "POST");
            if (staffDelRe.code == 200) {
                $scope.view.rule = ajaxSendFn({
                    page: $scope.page,
                    count: $scope.count
                }, "/activity/store", "GET").result || [];
            } else { //
                errorMsg(staffDelRe);
            }
        },



        // 修改
        editItem: function (index) {
            let id = $scope.view.rule.items[index].id;
            $location.path("/shopActivity/add/" + id);
        }
    }



    if (lastShow != null) {
        $scope.view.rule[lastShow].show = 1;
    }
    // 上线新活动
    $scope.addFn = function () {

        $location.path("/shopActivity/add");

    }


    $scope.activityOn = function (id, i) { //上线
        re = ajaxSendFn({}, "/activity/" + id + "/on", "POST");
        if (re.code == 200) $scope.view.rule[i].on = true;
        else errorMsg(re);
    }
    $scope.activityOff = function (id, i) { //下线
        re = ajaxSendFn({}, "/activity/" + id + "/off", "POST");
        if (re.code == 200) $scope.view.rule[i].on = false;
        else console.error(re);
    };
    $scope.activityDel = function (id, i) {
        var a = confirm("确认删除？");
        if (a) {
            re = ajaxSendFn({}, "/activity/" + id, "DELETE");
            if (re.code == 200) {
                $scope.view.rule.splice(i, 1);
            } else alert(re.message);
        }

    };
    $scope.activeFn = function (id, name) {
        re = ajaxSendFn({}, "/activity/" + id + '/' + name, "POST");
        if (re.code == 200) {
            if ($location.$$path == "/shopActivity") {
                var rule = ajaxSendFn({}, "/activity", "GET").result || [];
            } else {
                var rule = ajaxSendFn({
                    isConsume: true
                }, "/activity", "GET").result || [];
            }
            $scope.view.rule = $filter("orderBy")(rule, "createTime", true);
        } else alert(re.message);
    }
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


// 活动管理
app.controller('RuleCtr', function ($rootScope, $scope, $location, $filter, $document, $compile) { //shoplist over
    $scope.config.breadset = [{
        name: "活动管理",
        href: indexUrl + "/admin.html#/rule",
        class: "rule"
    }, {
        name: "活动列表"
    }]; //面包屑
    var lastShow = $rootScope.lastShow;
    /*    $scope.ruleDic = {
     nonParticipations: "不参与活动商品",
     periods: "有效时段",
     time: "时间",
     shops: "分店"
     }; //将key转为中文*/
    $scope.config.permission = ajaxSendFn({}, "/activity/permission", "GET").result;
    if ($location.$$path == "/rule") {
        var rule = ajaxSendFn({}, "/activity", "GET").result || [];
    } else {
        var rule = ajaxSendFn({
            isConsume: true
        }, "/activity", "GET").result || [];
        $scope.config.breadset[0].class = "ruleConsume";
    }
    $scope.view = {};
    $scope.view.rule = $filter("orderBy")(rule, "createTime", true);

    if (lastShow != null) {
        $scope.view.rule[lastShow].show = 1;
    }
    $scope.addFn = function () {
        if ($location.$$path == "/rule") {
            $location.path("/rule/add");
        } else {
            $location.path("/rule/addconsume");
        }
    }

    $scope.pannel = function (nowindex) { //切换显示列表
        // alert($scope.view.rule[nowindex].id)

        if ($scope.view.rule[nowindex].show == 1) {
            $scope.view.rule[nowindex].show = 0;
        } else {
            $.each($scope.view.rule, function (index) {
                $scope.view.rule[index].show = 0;
            });
            $scope.view.rule[nowindex].show = 1;
            $scope.ruleDesc = ajaxSendFn({}, "/activity/" + $scope.view.rule[nowindex].id + '/rule', "GET").result || {};
            console.log($scope.ruleDesc)
        }
    };
    $scope.activityOn = function (id, i) { //上线
        re = ajaxSendFn({}, "/activity/" + id + "/on", "POST");
        if (re.code == 200) $scope.view.rule[i].on = true;
        else errorMsg(re);
    }
    $scope.activityOff = function (id, i) { //下线
        re = ajaxSendFn({}, "/activity/" + id + "/off", "POST");
        if (re.code == 200) $scope.view.rule[i].on = false;
        else console.error(re);
    };
    $scope.activityDel = function (id, i) {
        var a = confirm("确认删除？");
        if (a) {
            re = ajaxSendFn({}, "/activity/" + id, "DELETE");
            if (re.code == 200) {
                $scope.view.rule.splice(i, 1);
            } else alert(re.message);
        }

    };
    $scope.activeFn = function (id, name) {
        re = ajaxSendFn({}, "/activity/" + id + '/' + name, "POST");
        if (re.code == 200) {
            if ($location.$$path == "/rule") {
                var rule = ajaxSendFn({}, "/activity", "GET").result || [];
            } else {
                var rule = ajaxSendFn({
                    isConsume: true
                }, "/activity", "GET").result || [];
            }
            $scope.view.rule = $filter("orderBy")(rule, "createTime", true);
        } else alert(re.message);
    }
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


// 共享活动列表
app.controller('ShareActivityCtr', function ($rootScope, $routeParams, $scope, $location, $filter, $document, $compile) { //shoplist over
    $scope.config.breadset = [{
        name: "共享活动",
        href: indexUrl + "/admin.html#/rule/shareActivity",
        class: "shareActivity"
    }]; //面包屑
    $scope.view = {};
    let shareResult = ajaxSendFn({}, "/activity/share", "GET").result
    $scope.view.rule = shareResult ? shareResult.items : []
    // $scope.view = {
    //     rule: $filter("orderBy")(rule, "createTime", true)
    // };
    console.log($scope.view.rule)
    // 上新共享活动
    $scope.addFn = function () {
        $location.path("/rule/addShareActivity");
    }
    $scope.activityOn = function (id, i) { //上线
        re = ajaxSendFn({}, "/activity/share/" + id + "/on", "POST");
        if (re.code == 200) {
            $scope.view.rule = ajaxSendFn({}, "/activity/share", "GET").result.items || [];
        } else errorMsg(re);

    }
    $scope.activityOff = function (id, i) { //下线
        console.log('点击')
        re = ajaxSendFn({}, "/activity/share/" + id + "/off", "POST");
        if (re.code == 200) {
            $scope.view.rule = ajaxSendFn({}, "/activity/share", "GET").result.items || [];
        } else console.error(re);
    };
    $scope.activityDel = function (id, i) {
        var a = confirm("确认删除？");
        if (a) {
            re = ajaxSendFn({}, "/activity/share/" + id, "DELETE");
            if (re.code == 200) {
                $scope.view.rule = ajaxSendFn({}, "/activity/share", "GET").result.items || [];
            } else alert(re.message);
        }
        $scope.view.rule = ajaxSendFn({}, "/activity/share", "GET").result.items || [];

    };
    $scope.activeFn = function (id, name) {
        re = ajaxSendFn({}, "/activity/share/" + id + '/' + name, "POST");
        if (re.code == 200) {
            if ($location.$$path == "/rule") {
                var rule = ajaxSendFn({}, "/activity", "GET").result || [];
            } else {
                var rule = ajaxSendFn({
                    isConsume: true
                }, "/activity/share", "GET").result || [];
            }
            $scope.view.rule = $filter("orderBy")(rule, "createTime", true);
        } else alert(re.message);
    }

})
// 添加/修改共享活动
app.controller('addShareActivityCtr', function ($rootScope, $routeParams, $scope, $location, $filter, $document, $compile) { //shoplist over
    $scope.config.breadset = [{
        name: "共享活动",
        href: indexUrl + "/admin.html#/rule/addShareActivity",
        class: "shareActivity"
    }]; //面包屑
    $scope.checkshop = {};
    var getShopJson = {
        state: 1002
    }
    // 富文本编辑器
    var editor = new wangEditor('#activity');
    editor.create();


    $scope.view = {
        scenes: [{
            /**("不在系统中展示，只允许通过链接/小程序码访问"),
             * **/
            text: '不在系统中展示，只允许通过链接/小程序码访问',
            key: 'HIDDEN',
            value: false
        }, {
            /**
             * 全部平台
             */
            text: '发布到全平台',
            key: 'ALL',
            value: false
        }, {
            /**
             * 惠买单
             */
            text: '发布到惠买单H5',
            key: 'CHECK',
            value: false
        }, {
            /**
             * 探长探店
             */
            text: '发布到探长探店',
            key: 'SALER',
            value: false
        }, {
            /**
             * 上宾生活
             */
            text: '发布到上宾生活',
            key: 'BING',
            value: false
        }, {
            /**
             * 捷帐宝
             */
            text: '发布到捷帐宝',
            key: 'CMPP',
            value: false
        }, {
            /**
             * 上宾小栈
             */
            text: '发布到上宾小栈',
            key: 'INNS',
            value: false
        }],
        factor: ajaxSendFn({}, "/activity/share/factor", "GET").result || [],
        shops: ajaxSendFn({
            state: 1002
        }, "/shops", "GET").result,
        date: {},
        data: {},
        dateRange: {},

    };
    $scope.set = {
        times: ajaxSendFn({}, "/businesstimes/all", "GET").result,
        list: ajaxSendFn(getShopJson, "/shops", "GET").result,
        list2: [],
        timeType: {
            "1001": "早市",
            "1002": "午市",
            "1003": "下午茶",
            "1004": "晚市",
            "1005": "宵夜"
        },
        periods: []
    };
    $scope.posts = {
        allocates: [{
            id: ''
        }],
        cardId: '',
        allpurpose: false,
        shops: [],
        grows: [{
                subject: 'FIRST',
                timesLimit: 1,
                detail: {
                    'CONSUME': [{
                        amountLimit: 1,
                        value: 1
                    }],
                }
            },
            {
                subject: 'SECOND',
                times: 1,
                timesLimit: 1,
                detail: {
                    'CONSUME': [{
                        amountLimit: 1,
                        value: 1
                    }],
                }
            }
        ],
        benefits: [{
            category: 'COUPON',
            count: 1,
            id: ''
        }],
        participants: [{
            category: 'COUPON',
            id: "",
            count: 1
        }],
    }
    $scope.set.time = getSubtimes($scope.set.times, $scope.set.timeType);
    if (!$scope.set.list) {
        alert("目前还没有添加门店");
        $location.path("/shops");
    }
    $scope.checkAllShops = function () {
        console.log($scope.set.shopAll)
        if (!$scope.set.shopAll) $scope.posts.shops = [];
        else {
            angular.forEach($scope.set.list, function (value, key) {
                this[key] = value.id;
            }, $scope.posts.shops);
            console.log($scope.posts.shops);

        }
    }
    // 添加成长规则
    $scope.addGrows = function (type) {
        if (type == 0) {
            // 主卡
            $scope.posts.grows[0].detail.CONSUME.push({
                amountLimit: 0,
                value: 0
            })
        } else {
            $scope.posts.grows[1].detail.CONSUME.push({
                amountLimit: 0,
                value: 0
            })
        }
    }
    // 移除成长规则
    $scope.removeGrows = function (index, type) {
        if (type == 0) {
            $scope.posts.grows[0].detail.CONSUME.splice(index, 1)
        } else {
            $scope.posts.grows[1].detail.CONSUME.splice(index, 1)
        }
    }
    // 添加券
    $scope.addFn = function (type) {
        let obj = {}
        if (type == 'allocates') {
            obj = {
                id: ''
            }
        } else {
            obj = {
                category: 'COUPON',
                count: 1,
                id: ''
            }
        }
        $scope.posts[type].push(
            obj
        )
    };
    // 移除券
    $scope.removeFn = function (index, type) {

        $scope.posts[type].splice(index, 1)

    };


    if ($routeParams.activityid) {
        $scope.posts = ajaxSendFn({}, "/activity/share/" + $routeParams.activityid, "GET").result;

        if(!$scope.posts.allocates){
            $scope.posts.allocates= [{id: ''}]
        }
        $scope.view.scenes.forEach(i => {
            $scope.posts.scenes.forEach(j => {
                if (j == i.key) {
                    i.value = true;
                }
            })
        })
        var tem = $scope.posts;
        editor.txt.html(tem.additional);
        var temShops = {};
        if (tem.shops) {
            for (var i = 0, j = tem.shops.length || 0; i < j; i++) {
                temShops[tem.shops[i]] = 1;
            }
        };
        let benefits = [];
        let participants = [];
        $scope.posts.benefits.map(i => {
            let obj = {};
            obj.category = i.category;
            obj.id = i.id;
            obj.count = i.count;
            benefits.push(obj)
        })
        $scope.posts.benefits = benefits;
        $scope.posts.participants.map(i => {
            let obj = {};
            obj.category = i.category;
            obj.id = i.id;
            obj.count = i.count;
            participants.push(obj)
        })
        $scope.posts.participants = participants;

        for (var i = 0, j = $scope.set.list.length || 0; i < j; i++) {
            if ($scope.set.list[i].id in temShops) $scope.posts.shops[i] = $scope.set.list[i].id;
        }
        // 有效期start
        $scope.view.data.dateType = tem.dateRangeCategory;
        if (tem.dateRangeCategory === "AROUND_FIX_DATE" || tem.dateRangeCategory === "MONTH_EFFECTIVE") {
            $scope.view.data.dateType = "AROUND_FIX_DATE";
            $scope.view.data.subType = tem.dateRangeCategory;
        }
        $scope.view.data[$scope.view.data.dateType] = {
            dateRange: tem.dateRange
        };
        $scope.view.dateRange = $scope.view.data[$scope.view.data.dateType].dateRange;
        if (tem.dateRange) {
            if (tem.dateRange.selectDates) {
                $scope.view.dateRange.subType = "MANUAL_SELECT";
                $scope.view.dateRange.selectDates = arrayMap($scope.view.dateRange.selectDates, function (data) {
                    return data.split(/\s+/)[0];
                });
            } else if (tem.dateRange.selectDays) {
                $scope.view.dateRange.subType = "MONTH_DAYS";
            } else {
                $scope.view.dateRange.subType = "WEEKLY_DAY";
            }
        }
        // 有效期end
        $scope.view.isEdit = true;

    }
    console.log($scope.posts)

    // 提交共享活动
    $scope.sendShareActivity = function () {
        let json = {
            dateRange: {
                selectCategory: ''
            }
        };
        // 发布场景--start
        var scenesArr = [];
        $scope.view.scenes.map(function (i) {
            if (i.value) {
                scenesArr.push(i.key)
            }
        })
        if (scenesArr.length <= 0) {
            alert("请选择发布场景");
            return;
        }
        json.scenes = scenesArr;
        // 发布场景end
        // 有效期-------------------------------------------------------------start
        if (!$scope.view.data.dateType) {
            alert("还未选择有效期！");
            return;
        }
        var dateRangeCategory = $scope.posts.dateRangeCategory
        $scope.view.date.dateType = dateRangeCategory;
        json.dateRangeCategory = $scope.view.data.dateType;
        if ($scope.view.data.dateType === "BIRTHDAY" && $scope.view.data.subType) {
            json.dateRangeCategory = $scope.view.data.subType;
        }
        //如果开始时间被修改过，并且小于今天，则报错
        if ($scope.view.data.dateType === "CONTINUOUS") {
            if (!$scope.view.dateRange.startDate || !$scope.view.dateRange.endDate) {
                alert("请填写开始和结束日期!");
                return;
            }
            if ($scope.view.dateRange.endDate < $scope.view.dateRange.startDate) {
                alert("结束日期不能小于开始日期!");
                return;
            } else {
                json.dateRange.startDate = $filter("date")($scope.view.dateRange.startDate, "yyyy-MM-dd 00:00:00");
                json.dateRange.endDate = $filter("date")($scope.view.dateRange.endDate, "yyyy-MM-dd 23:59:59");
            }
        } else if ($scope.view.data.dateType === "BIRTHDAY" && $scope.view.data.subType === "AROUND_FIX_DATE") {
            json.dateRange.beforeDays = $scope.view.dateRange.beforeDays || 0;
            json.dateRange.afterDays = $scope.view.dateRange.afterDays || 0;
        }

        json.dateRange.selectCategory = $scope.view.dateRange.selectCategory || 'NONE';
        if ($scope.view.dateRange.subType === "MANUAL_SELECT") {
            var arr = arrayMap(objectKeys($scope.view.dateRange.selectDates), function (data) {
                return data + " 00:00:00";
            });
            if (!isEmptyObject(arr)) {
                json.dateRange.selectDates = arr;
            }
        } else if ($scope.view.dateRange.subType === "MONTH_DAYS") {
            var arr = arrayMap(objectKeys(mapFilter($scope.view.dateRange.selectDays, notNull)), parseInt);
            if (!isEmptyObject(arr)) {
                json.dateRange.selectDays = arr;
            }
        } else if ($scope.view.dateRange.subType === "WEEKLY_DAY") {
            var arr = arrayMap(objectKeys(mapFilter($scope.view.dateRange.selectWeekDays, notNull)), parseInt);
            if (!isEmptyObject(arr)) {
                json.dateRange.selectWeekDays = arr;
            }
        }

        //选择排除，必须要指定排队日期
        if ((json.dateRangeCategory !== "SELECTED_DATES") && (json.dateRange.selectCategory === 'EXCLUDE') && (objectCount(json.dateRange) == 1)) {
            alert("没有指定排除日期！");
            return;
        }

        //'指定日期'类型必须有数据
        if ((json.dateRangeCategory === "SELECTED_DATES") && (objectCount(json.dateRange) == 1)) {
            alert("没有指定日期！");
            return;
        }

        // ----------------------------有效期-----------------------end
        var scenesArr = [];
        $scope.view.scenes.map(function (i) {
            if (i.value) {
                scenesArr.push(i.key)
            }
        })
        if (scenesArr.length <= 0) {
            alert("请选择发布场景");
            return;
        }
        json.scenes = scenesArr;
        json.allocates = $scope.posts.allocates;
        json.benefits = $scope.posts.benefits;
        json.picUrl = $scope.posts.picUrl;
        json.participants = $scope.posts.participants;
        json.name = $scope.posts.name;
        json.orgPrice = $scope.posts.orgPrice;
        json.shops = $scope.posts.shops;
        json.cardId = $scope.posts.cardId;
        json.price = $scope.posts.price;
        json.allpurpose = $scope.posts.allpurpose;
        json.grows = $scope.posts.grows;
        json.personLimit = $scope.posts.personLimit
        json.expiredLimit = $scope.posts.expiredLimit
        json.growLimit = $scope.posts.growLimit;
        json.richMediaId = $scope.posts.richMediaId;
        json.allShop = $scope.set.shopAll;
        json.additional = editor.txt.html();

        if (json.benefits && json.benefits.length) {
            for (var x in json.benefits) {
                delete json.benefits[x].$$hashKey;
            }
        }
        if (json.participants && json.participants.length) {
            for (var x in json.participants) {
                delete json.participants[x].$$hashKey;
            }
        }

        console.log(json);
        sendJson = JSON.stringify(json);
        var sendid = $routeParams.activityid ? $routeParams.activityid : "";
        if ($routeParams.activityid) {
            postsend = ajaxSendFn(sendJson, "/activity/share/" + sendid, "POST", 1);
        } else {
            postsend = ajaxSendFn(sendJson, "/activity/share", "POST", 1);
        }

        if (postsend.code == 200) {
            alert("保存成功");
            history.back();
        } else { //
            errorMsg(postsend);
        }
    }

})

app.controller('RuleAddCtr', function ($scope, $location, $filter, $routeParams) { //shoplist over
    $scope.config.breadset = [{ //
        name: "活动管理",
        href: indexUrl + "/admin.html#/rule"
    }, {
        name: "设置活动范围"
    }]; //面包屑

    $scope.checkshop = {};
    var getShopJson = {
        state: 1002,
        brand: true
    }

    if ($location.$$path == "/rule/add") {
        // 线上活动
        getShopJson.brand = true;

    }
    $scope.set = {
        times: ajaxSendFn({}, "/businesstimes/all", "GET").result,
        list: ajaxSendFn(getShopJson, "/shops", "GET").result,
        list2: [],
        timeType: {
            "1001": "早市",
            "1002": "午市",
            "1003": "下午茶",
            "1004": "晚市",
            "1005": "宵夜"
        },
        periods: []
    };
    $scope.set.time = getSubtimes($scope.set.times, $scope.set.timeType);
    if (!$scope.set.list) {
        alert("目前还没有添加门店");
        $location.path("/shops");
    }
    $scope.set.nonParticipation = ajaxSendFn({}, "/nonParticipation/content", "GET").result; //非参与项
    $scope.checkallstr = 0;

    $scope.posts = {
        periods: [],
        excludeWeekend: false,
        excludeHoliday: false,
        shared: [],
        shops: []
    };
    $scope.view = {
        data: {},
        effectDates: {},
        periods: [],
        zhiding: $scope.config.time,
        scenes: [{
            /**("不在系统中展示，只允许通过链接/小程序码访问"),
             * **/
            text: '不在系统中展示，只允许通过链接/小程序码访问',
            key: 'HIDDEN',
            value: false
        }, {
            /**
             * 全部平台
             */
            text: '发布到全平台',
            key: 'ALL',
            value: false
        }, {
            /**
             * 惠买单
             */
            text: '发布到惠买单H5',
            key: 'CHECK',
            value: false
        }, {
            /**
             * 探长探店
             */
            text: '发布到探长探店',
            key: 'SALER',
            value: false
        }, {
            /**
             * 上宾生活
             */
            text: '发布到上宾生活',
            key: 'BING',
            value: false
        }, {
            /**
             * 捷帐宝
             */
            text: '发布到捷帐宝',
            key: 'CMPP',
            value: false
        }, {
            /**
             * 上宾小栈
             */
            text: '发布到上宾小栈',
            key: 'INNS',
            value: false
        }]
    };
    if ($routeParams.activityid) {
        $scope.view.isEdit = true;
    } else {
        $scope.view.isEdit = false;
    }

    //展示的活动类型
    if ($location.$$path == "/rule/add") {
        // 线上活动
        $scope.ruleCategory = onlineRuleObj;
    } else if ($location.$$path == "/rule/addconsume") {
        // 消费活动
        $scope.ruleCategory = consumeRuleObj;
        console.log('活动类型')
        console.log(consumeRuleObj)
    } else {
        $scope.ruleCategory = ruleCategory;
    }
    $scope.$watch('posts.activityCategory', function (newVal, oldVal) {
        if (newVal && newVal !== oldVal) {
            $scope.shareRuleCategory = getShareCategory(newVal);
        }
    });
    //过滤活动同享数组，去除空元素
    $scope.filterShared = function () {
        return arrayFilter($scope.posts.shared, function (data) {
            return data ? true : false;
        });
    };
    $scope.checkAllCatagory = function () {
        if (!$scope.posts.catagoryAll) $scope.posts.shared = [];
        else {
            angular.forEach(
                $scope.shareRuleCategory,
                function (value, key) {
                    this[key] = value.id;
                }, $scope.posts.shared
            )
        };
    };
    $scope.categoryName = function (category) {
        var result = {};
        if (category) {
            var tmp = category.split('_')[0];
            angular.forEach($scope.ruleCategory, function (data, idx) {
                if (data.id === category) {
                    this.name = data.name;
                }
            }, result);
        };
        return result.name || "类型错误";
    }
    $scope.$watch('set.shopAll', function (newVal, oldVal) {
        if (newVal !== oldVal) {
            if (newVal) {
                angular.forEach($scope.set.list, function (value, key) {
                    this[key] = value.id;
                }, $scope.posts.shops)
            } else {
                $scope.posts.shops = [];
            }
        }
    });
    $scope.settime = function (a, b) { //
        $scope.view.periods[a] = $scope.view.periods[a] ? null : b;
    }


    $scope.sendJsons = function () { //arrRemoveNullFN
        sendtype = $routeParams.activityid ? "EDIT" : "ADD";
        sendid = $routeParams.activityid ? $routeParams.activityid : "";
        $scope.posts.shops = arrRemoveNullFN($scope.posts.shops);
        $scope.posts.periods = arrRemoveNullFN($scope.view.periods);
        var json = {
            dateRange: {}
        };
        json.nonParticipationId = $scope.posts.nonParticipationId;
        if ($scope.posts.way) {
            json.way = $scope.posts.way
        };
        json.shared = uniqArr(arrRemoveNullFN($scope.posts.shared));
        json.name = $scope.posts.name;
        json.descriptor = $scope.posts.descriptor;
        json.activityCategory = $scope.posts.activityCategory;
        json.shops = $scope.posts.shops;
        json.additional = $scope.posts.additional;
        if ($scope.posts.picUrl) json.picUrl = $scope.posts.picUrl;
        if ($scope.posts.allDay) {
            json.allDay = true;
        } else {
            json.periods = $scope.posts.periods;
        }
        json.excludeAmount = $scope.posts.excludeAmount;
        // json.pathway = $scope.posts.pathway;
        // 发布场景--start
        var scenesArr = [];
        $scope.view.scenes.map(function (i) {
            if (i.value) {
                scenesArr.push(i.key)
            }
        })
        if (scenesArr.length <= 0) {
            alert("请选择发布场景");
            return;
        }
        json.scenes = scenesArr;
        // 发布场景end
        json.recommend = $scope.posts.recommend;
        if (json.recommend && json.recommend.way !== 'AUTOMATIC') {
            delete json.recommend.proportion;
        }
        // 有效期-------------------------------------------------------------start
        if (!$scope.view.data.dateType) {
            alert("还未选择有效期！");
            return;
        }
        json.dateRangeCategory = $scope.view.data.dateType;

        if ($scope.view.data.dateType === "BIRTHDAY" && $scope.view.data.subType) {
            json.dateRangeCategory = $scope.view.data.subType;
        }
        //如果开始时间被修改过，并且小于今天，则报错
        if ($scope.view.data.dateType === "CONTINUOUS") {
            if (!$scope.view.dateRange.startDate || !$scope.view.dateRange.endDate) {
                alert("请填写开始和结束日期!");
                return;
            }
            if ($scope.view.dateRange.endDate < $scope.view.dateRange.startDate) {
                alert("结束日期不能小于开始日期!");
                return;
            } else {
                json.dateRange.startDate = $filter("date")($scope.view.dateRange.startDate, "yyyy-MM-dd 00:00:00");
                json.dateRange.endDate = $filter("date")($scope.view.dateRange.endDate, "yyyy-MM-dd 23:59:59");
            }
        } else if ($scope.view.data.dateType === "BIRTHDAY" && $scope.view.data.subType === "AROUND_FIX_DATE") {
            json.dateRange.beforeDays = $scope.view.dateRange.beforeDays || 0;
            json.dateRange.afterDays = $scope.view.dateRange.afterDays || 0;
        }

        json.dateRange.selectCategory = $scope.view.dateRange.selectCategory || 'NONE';
        if ($scope.view.dateRange.subType === "MANUAL_SELECT") {
            var arr = arrayMap(objectKeys($scope.view.dateRange.selectDates), function (data) {
                return data + " 00:00:00";
            });
            if (!isEmptyObject(arr)) {
                json.dateRange.selectDates = arr;
            }
        } else if ($scope.view.dateRange.subType === "MONTH_DAYS") {
            var arr = arrayMap(objectKeys(mapFilter($scope.view.dateRange.selectDays, notNull)), parseInt);
            if (!isEmptyObject(arr)) {
                json.dateRange.selectDays = arr;
            }
        } else if ($scope.view.dateRange.subType === "WEEKLY_DAY") {
            var arr = arrayMap(objectKeys(mapFilter($scope.view.dateRange.selectWeekDays, notNull)), parseInt);
            if (!isEmptyObject(arr)) {
                json.dateRange.selectWeekDays = arr;
            }
        }

        //选择排除，必须要指定排队日期
        if ((json.dateRangeCategory !== "SELECTED_DATES") && (json.dateRange.selectCategory === 'EXCLUDE') && (objectCount(json.dateRange) == 1)) {
            alert("没有指定排除日期！");
            return;
        }

        //'指定日期'类型必须有数据
        if ((json.dateRangeCategory === "SELECTED_DATES") && (objectCount(json.dateRange) == 1)) {
            alert("没有指定日期！");
            return;
        }

        // ----------------------------有效期-----------------------end

        if ($scope.posts.activityCategory == 'FIRSTGIFT') {
            // 选择微信参数二维码
            if (angular.element(document.getElementById('wx'))[0] && angular.element(document.getElementById('wx'))[0].checked) {
                json.followLimit = true
            }
        }

        sendJson = JSON.stringify(json);
        postsend = ajaxSendFn(sendJson, concatUrl(constUrlDict["activity"], sendid), "POST", 1);
        if (postsend.code == 200) { //
            if (sendtype == "ADD") {
                $location.path("/rule/add2/" + postsend.result.id);
            } else {
                alert("保存成功");
                history.back();
            }
        } else { //
            errorMsg(postsend);
        }
    }

    $scope.addNonParticipation = function () {
        $scope.goods = "";
        $("#NonParticipation").modal("show");
    }

    $scope.oldFN = function () { //获取旧的内容
        var tem = ajaxSendFn({}, concatUrl(constUrlDict["activity"], $routeParams.activityid), "GET").result;
        if (!tem) return;
        $scope.posts.name = tem.name;
        $scope.posts.descriptor = tem.descriptor;
        $scope.posts.hasRules = (tem.rules && tem.rules.length > 0) || false;
        $scope.posts.activityCategory = tem.activityCategory;
        $scope.posts.additional = tem.additional;

        if (tem.followLimit) {
            $scope.posts.followLimit = tem.followLimit
        }
        // if (tem.pathway) {
        //     $scope.posts.pathway = tem.pathway;
        // }
        if (tem.scenes) {
            $scope.posts.scenes = tem.scenes;
            tem.scenes.map((i) => {
                $scope.view.scenes.map(k => {
                    if (i == k.key) {
                        k.value = true
                    }
                })
            })

        }
        $scope.posts.recommend = tem.recommend;
        if (tem.way) {
            $scope.posts.way = tem.way;
        }
        if (tem.allDay) {
            $scope.posts.allDay = tem.allDay;
        }
        if (tem.picUrl) {
            $scope.posts.picUrl = tem.picUrl;
        }
        $scope.view.data.dateType = tem.dateRangeCategory;

        if (tem.dateRangeCategory === "AROUND_FIX_DATE" || tem.dateRangeCategory === "MONTH_EFFECTIVE") {
            $scope.view.data.dateType = "AROUND_FIX_DATE";
            $scope.view.data.subType = tem.dateRangeCategory;
        }
        $scope.view.data[$scope.view.data.dateType] = {
            dateRange: tem.dateRange
        };
        $scope.view.dateRange = $scope.view.data[$scope.view.data.dateType].dateRange;
        if (tem.dateRange) {
            if (tem.dateRange.selectDates) {
                $scope.view.dateRange.subType = "MANUAL_SELECT";
                $scope.view.dateRange.selectDates = arrayMap($scope.view.dateRange.selectDates, function (data) {
                    return data.split(/\s+/)[0];
                });
            } else if (tem.dateRange.selectDays) {
                $scope.view.dateRange.subType = "MONTH_DAYS";
            } else {
                $scope.view.dateRange.subType = "WEEKLY_DAY";
            }
        }

        if ($scope.posts.activityCategory) {
            $scope.shareRuleCategory = getShareCategory($scope.posts.activityCategory);
        }
        $scope.posts.excludeAmount = tem.excludeAmount;
        $scope.posts.nonParticipationId = tem.nonParticipationId;
        var temShops = {};
        if (tem.shops) {
            for (var i = 0, j = tem.shops.length || 0; i < j; i++) {
                temShops[tem.shops[i]] = 1;
            }
        };

        for (var i = 0, j = $scope.set.list.length || 0; i < j; i++) {
            if ($scope.set.list[i].id in temShops) $scope.posts.shops[i] = $scope.set.list[i].id;
        }
        angular.forEach($scope.set.time, function (data, idx) {
            this.push(idx);
        }, $scope.view.periods);

        angular.forEach($scope.view.periods, function (data, idx) {
            if (!tem.periods || tem.periods.indexOf(data) == -1) {
                this[idx] = null;
            }
        }, $scope.view.periods);

        angular.forEach($scope.shareRuleCategory, function (data, idx) {
            if (tem.shared && tem.shared.indexOf(data.id) != -1) {
                this[idx] = data.id;
            } else {
                this[idx] = false;
            }
        }, $scope.posts.shared);
    }
    if ($routeParams.activityid) $scope.oldFN();
});
// 纯展示活动
app.controller('RuleExhibitionAddCtr', function ($scope, $location, $filter, $routeParams) { //shoplist over
    $scope.config.breadset = [{ //
        name: "活动管理",
        class: "exhibition",
        href: indexUrl + "/admin.html#/rule/exhibition"
    }, {
        name: "设置活动范围"
    }]; //面包屑
    $scope.set = {
        list: ajaxSendFn({
            state: 1002
        }, "/shops", "GET").result
    }

    $scope.posts = {
        periods: [],
        excludeWeekend: false,
        excludeHoliday: false,
        shared: [],
        shops: []
    };
    $scope.set.shopAll = false;
    $scope.checkAllShops = function () {
        console.log($scope.set.shopAll)
        if (!$scope.set.shopAll) $scope.posts.shops = [];
        else {
            angular.forEach($scope.set.list, function (value, key) {
                this[key] = value.id;
            }, $scope.posts.shops);
            console.log($scope.posts.shops);

        }
    }
    $scope.view = {
        type: [{
                id: "LINEUP",
                name: "排队"
            },
            {
                id: "IRREGULAR",
                name: " 不定期权益"
            },
        ],
        data: {},
        effectDates: {},
        periods: [],
        zhiding: $scope.config.time
    };
    if ($routeParams.activityid) {
        $scope.view.isEdit = true;
    } else {
        $scope.view.isEdit = false;
    }
    $scope.sendJsons = function () {

        sendtype = $routeParams.activityid ? "EDIT" : "ADD";
        var json = {
            dateRange: {}
        };
        json.shops = $scope.posts.shops;
        json.name = $scope.posts.name;
        json.activityCategory = $scope.posts.activityCategory;
        json.additional = $scope.posts.additional;

        if (!$scope.view.data.dateType) {
            alert("还未选择有效期！");
            return;
        }
        json.dateRangeCategory = $scope.view.data.dateType;

        if ($scope.view.data.dateType === "BIRTHDAY" && $scope.view.data.subType) {
            json.dateRangeCategory = $scope.view.data.subType;
        }
        //如果开始时间被修改过，并且小于今天，则报错
        if ($scope.view.data.dateType === "CONTINUOUS") {
            if (!$scope.view.dateRange.startDate || !$scope.view.dateRange.endDate) {
                alert("请填写开始和结束日期!");
                return;
            }
            if ($scope.view.dateRange.endDate < $scope.view.dateRange.startDate) {
                alert("结束日期不能小于开始日期!");
                return;
            } else {
                json.dateRange.startDate = $filter("date")($scope.view.dateRange.startDate, "yyyy-MM-dd 00:00:00");
                json.dateRange.endDate = $filter("date")($scope.view.dateRange.endDate, "yyyy-MM-dd 23:59:59");
            }
        } else if ($scope.view.data.dateType === "BIRTHDAY" && $scope.view.data.subType === "AROUND_FIX_DATE") {
            json.dateRange.beforeDays = $scope.view.dateRange.beforeDays || 0;
            json.dateRange.afterDays = $scope.view.dateRange.afterDays || 0;
        }

        json.dateRange.selectCategory = $scope.view.dateRange.selectCategory || 'NONE';
        if ($scope.view.dateRange.subType === "MANUAL_SELECT") {
            var arr = arrayMap(objectKeys($scope.view.dateRange.selectDates), function (data) {
                return data + " 00:00:00";
            });
            if (!isEmptyObject(arr)) {
                json.dateRange.selectDates = arr;
            }
        } else if ($scope.view.dateRange.subType === "MONTH_DAYS") {
            var arr = arrayMap(objectKeys(mapFilter($scope.view.dateRange.selectDays, notNull)), parseInt);
            if (!isEmptyObject(arr)) {
                json.dateRange.selectDays = arr;
            }
        } else if ($scope.view.dateRange.subType === "WEEKLY_DAY") {
            var arr = arrayMap(objectKeys(mapFilter($scope.view.dateRange.selectWeekDays, notNull)), parseInt);
            if (!isEmptyObject(arr)) {
                json.dateRange.selectWeekDays = arr;
            }
        }

        //选择排除，必须要指定排队日期
        if ((json.dateRangeCategory !== "SELECTED_DATES") && (json.dateRange.selectCategory === 'EXCLUDE') && (objectCount(json.dateRange) == 1)) {
            alert("没有指定排除日期！");
            return;
        }

        //'指定日期'类型必须有数据
        if ((json.dateRangeCategory === "SELECTED_DATES") && (objectCount(json.dateRange) == 1)) {
            alert("没有指定日期！");
            return;
        }
        if (sendtype == "ADD") {
            postsend = ajaxSendFn(json, "/activity/exhibition", "POST", 1);
        } else {
            postsend = ajaxSendFn(json, "/activity/exhibition/" + $routeParams.activityid, "PUT", 1);
        }
        if (postsend.code == 200) { //
            if (sendtype == "ADD") {
                $location.path("activity/exhibition");
            } else {
                alert("保存成功");
                history.back();
            }
        } else { //
            errorMsg(postsend);
        }
    }
    $scope.oldFN = function () { //获取旧的内容
        var tem = ajaxSendFn({}, "/activity/exhibition/" + $routeParams.activityid, "GET").result;
        if (!tem) return;
        $scope.posts.name = tem.name;
        var temShops = {};
        if (tem.shops) {
            for (var i = 0, j = tem.shops.length || 0; i < j; i++) {
                temShops[tem.shops[i]] = 1;
            }
        };

        for (var i = 0, j = $scope.set.list.length || 0; i < j; i++) {
            if ($scope.set.list[i].id in temShops) $scope.posts.shops[i] = $scope.set.list[i].id;
        }
        $scope.posts.activityCategory = tem.activityCategory;
        $scope.posts.additional = tem.additional;
        $scope.view.data.dateType = tem.dateRangeCategory;

        if (tem.dateRangeCategory === "AROUND_FIX_DATE" || tem.dateRangeCategory === "MONTH_EFFECTIVE") {
            $scope.view.data.dateType = "AROUND_FIX_DATE";
            $scope.view.data.subType = tem.dateRangeCategory;
        }
        $scope.view.data[$scope.view.data.dateType] = {
            dateRange: tem.dateRange
        };
        $scope.view.dateRange = $scope.view.data[$scope.view.data.dateType].dateRange;
        if (tem.dateRange) {
            if (tem.dateRange.selectDates) {
                $scope.view.dateRange.subType = "MANUAL_SELECT";
                $scope.view.dateRange.selectDates = arrayMap($scope.view.dateRange.selectDates, function (data) {
                    return data.split(/\s+/)[0];
                });
            } else if (tem.dateRange.selectDays) {
                $scope.view.dateRange.subType = "MONTH_DAYS";
            } else {
                $scope.view.dateRange.subType = "WEEKLY_DAY";
            }
        }
    };
    if ($routeParams.activityid) $scope.oldFN();
});
app.controller('RuleExhibitionShowCtr', function ($scope, $location, $filter, $routeParams) { //shoplist over
    $scope.config.breadset = [{ //
        name: "活动管理",
        class: "exhibition",
        href: indexUrl + "/admin.html#/rule/exhibition"
    }, {
        name: "设置活动范围"
    }]; //面包屑
    $scope.view = {
        exhibition: ajaxSendFn({}, "/activity/exhibition", "GET").result || []
    }
    $scope.removeFn = function (id) {
        var a = confirm("确认删除？");
        if (a) {
            var data = ajaxSendFn({}, "/activity/exhibition/" + id, "DELETE");
            if (data.code == 200) {
                $scope.view.exhibition = ajaxSendFn({}, "/activity/exhibition", "GET").result || [];
            } else {
                alert(data.message);
            }
        }
    };
});
app.controller('RuleMemberCtr', function ($scope, $filter) {
    $scope.config.breadset = [{ //
        name: "活动管理",
        href: indexUrl + "/admin.html#/rule",
        class: "member"
    }, {
        name: "会员规则管理"
    }]; //面包屑
    $scope.plan = {
        add: 0
    };
    // 有效期类型
    $scope.validityType = [{
            key: 'PERMANENT',
            value: '长期有效'
        }, {
            key: 'CONTINUOUS',
            value: '时间范围'

        }, {
            key: 'REMAINING',
            value: '余额存在有效'
        }

    ];
    // validity
    $scope.validity = [{
            key: true,
            value: '使用余额支付才参加'
        }, {
            key: false,
            value: '不适用消费余额也参加'

        }

    ];

    $scope.upgradeType = {
        "CUSTOMER": "CUSTOMER",
        "MEMBER": "MEMBER"
    };
    var temMemberGet = ajaxSendFn({}, "/memberUpgrade", "GET").result || [];

    $scope.view = {
        member: $filter('orderBy')(temMemberGet.strategy, "grade", false) || [],
        state: temMemberGet.on,
        plan: {},
        isUpdate: false,
        maxGrades: 6, //级别数量
        rules: {}, //新增加的字段，升级的每个等级,
        freeAllocateId: ''

    };

    $scope.posts = [];
    $scope.check = {};
    // $('[data-toggle="tooltip"]').tooltip()
    $scope.closeModal = function () {
        $scope.view.member[$scope.view.plan.level - 1].name = $scope.oldGradeName;
        $scope.view.isUpdate = false;
        $("#memberadd").modal("hide");
    }
    $scope.handleClick = function (a) {
        if (!$scope.view.isUpdate) {
            $scope.addplan(a);
        } else {
            $scope.updatePlan(a);
        }
    }
    $scope.validateName = function (a, name) {
        var isInvalid = false;
        angular.forEach($scope.view.member, function (value, idx) {
            if (!isInvalid) {
                if (idx != a - 1 && name === value.toName) {
                    isInvalid = true;
                }
            }
        });
        return isInvalid;
    }
    $scope.addnewFn = function (a) {
        $scope.tem = {};
        $scope.planform.memberName.$touched = false;
        $scope.view.plan.level = $scope.view.member.length + 1;
        $("#memberadd").modal("show");
    };
    $scope.updateFn = function (a) {
        $scope.tem = $scope.view.member[a - 1];
        $scope.oldGradeName = $scope.tem.name;
        $scope.view.isUpdate = true;
        $scope.view.plan.level = a;
        $("#memberadd").modal("show");
    }
    $scope.switchStatus = function (bool) {
        var str = bool === true ? "on" : "off";
        var res = ajaxSendFn({}, "/memberUpgrade/" + str, "POST");
        if (res.code != 200) {
            errorMsg(res);
        } else {
            $scope.view.state = bool;
            var astr = str === "on" ? "启用" : "停用";
            $("#turn" + str).modal("hide");
            //alert("您已成功" + astr + "会员计划");
        }
    }
    $scope.addplan = function (a) {
        send = ajaxSendFn({
            name: $scope.tem.name
        }, "/memberGrade", "POST");
        if (send.code == 200) { //
            $scope.tem.id = send.result;
            if (!$scope.view.member) {

            }
            $scope.view.member[$scope.view.member.length] = {
                toName: $scope.tem.name,
                toId: $scope.tem.id,
                toGrade: $scope.view.member.length + 1
            };
            $scope.view.show = {
                toName: $scope.tem.name,
                toGrade: $scope.view.member.length - 1
            };
            $scope.posts = [];
            $("#memberadd").modal("hide");
            $scope.showFn($scope.view.member.length);
        } else {
            errorMsg(send);
        }
        $scope.plan = {
            add: 1
        };
    }
    $scope.updatePlan = function (a) {
        if ($scope.validateName(a, $scope.tem.name) || $scope.tem.name === $scope.oldGradeName) {
            alert("会员名称已被占用");
            return;
        }
        send = ajaxSendFn({
            name: $scope.tem.name
        }, "/memberGrade/" + $scope.tem.id, "POST");
        if (send.code == 200) {
            $scope.view.member[a - 1].name = $scope.tem.name;
            $("#memberadd").modal("hide");
            $scope.view.isUpdate = false;
        } else {
            $scope.view.member[a - 1].name = $scope.oldGradeName;
            errorMsg(send);
        }
    }
    $scope.closeFn = function (a) {
        $scope.plan[a] = 0;
    };
    $scope.showFn = function (a) { //index
        $scope.view.show = $scope.view.member[a - 1];
        var allocates = ajaxSendFn({}, "/activity/allocate/8011", "GET").result || [];
        $scope.view.show.allocates = allocates;
        $scope.view.show.allocate = '';
        if (!$scope.view.member[a - 1].Upgrade) {
            // 获取已有的规则
            var data = ajaxSendFn({}, "/memberUpgrade/toId/" + $scope.view.member[a - 1].toId, "GET");
            if (data.result.strategies) {
                data.result.strategies.map(function (i) {
                    if (i.type == 'FREE' && i.allocate) {
                        $scope.view.freeAllocateId = i.allocate.id;
                    }
                    if (i.validityType) {
                        $scope.view.validityType = i.validityType;
                    }
                })
            }
            $scope.view.member[a - 1].Upgrade = data.result.strategies || [];
            $scope.rules = data.result;
            $scope.rules.strategies = [];
            $scope.rules.strategies.push({
                fromId: "CUSTOMER",
                fromName: "一般顾客"
            });
            for (var i = 0; i < a - 1; i++) {
                $scope.rules.strategies.push({
                    fromId: $scope.view.member[i].toId,
                    fromName: $scope.view.member[i].toName
                })
            }
        }
        $scope.posts = {
            BUY: [],
            POINT_EXCHANGE: [],
            POINT: [],
            SUM_COST: [],
            CHARGE: [],
            FREE: []
        };
        $scope.check = {};
        for (x in $scope.view.member[a - 1].Upgrade) {

            type = $scope.view.member[a - 1].Upgrade[x].type;
            if (!$scope.posts[type]) {
                $scope.posts[type] = [{}];
            }
            let jsons = {
                fromId: $scope.view.member[a - 1].Upgrade[x].fromId,
                validity: $scope.view.member[a - 1].Upgrade[x].validity,
                validityType: $scope.view.member[a - 1].Upgrade[x].validityType,
                value: $scope.view.member[a - 1].Upgrade[x].value,
                _id: $scope.view.member[a - 1].Upgrade[x]._id,

            }
            if ($scope.view.member[a - 1].Upgrade[x].allocate) {
                jsons.allocate = $scope.view.member[a - 1].Upgrade[x].allocate;
            }
            $scope.posts[type].push(jsons);
            $scope.check[type] = true;
        }
        for (var type in $scope.posts) {
            if ($scope.posts[type].length == 0) {
                $scope.posts[type].push({});
            }
        }
        console.log($scope.posts.FREE)
        $("#memberedit").modal("show");
    }
    $scope.addFn = function (obj) {
        if (obj.length >= $scope.view.show.toGrade) {
            alert("不可继续增加升级规则");
            return;
        }
        obj.push({})
    }
    $scope.removeFn = function (obj, i) {
        obj.splice(i, 1);
    }
    $scope.deleteFn = function (a) {
        if (!confirm("一旦删除将不可恢复，是否确认删除？")) return false;
        //$scope.view.show = $scope.view.member[a - 1];
        var data = ajaxSendFn({}, "/memberGrade/" + $scope.view.member[a].toId, "DELETE");
        if (data.code == 200) {
            //alert("删除成功");
            $scope.view.member.splice(a, 1);
        } else {
            alert(data.message);
        };
    }

    $scope.postSend = function () { //提交表单，添加、修改会员升级规则

        var jsons = {};
        var json = [];
        toid = $scope.view.member[$scope.view.show.toGrade - 1].toId;
        if ($scope.validateName($scope.view.show.toGrade, $scope.view.show.toName)) {
            alert("会员名称已被占用");
            return;
        }
        console.log('$scope.posts')
        console.log($scope.posts)


        for (var x in $scope.posts) {
            if (!$scope.check[x]) {
                continue;
            }
            if (x == 'FREE') {
                let obj = {
                    toId: toid,
                    type: x,
                    fromId: "CUSTOMER"
                }
                if ($scope.view.freeAllocateId) {
                    obj.allocate = {
                        id: $scope.view.freeAllocateId
                    }
                }

                if ($scope.view.validityType) {
                    obj.validityType = $scope.view.validityType
                }
                if ($scope.view.validity) {
                    obj.validity = $scope.view.validity
                }


                json.push(obj)
                continue;
            }

            for (var item in $scope.posts[x]) {
                var send = {
                    toId: toid,
                    type: x,
                    fromId: $scope.posts[x][item].fromId,
                };

                // 购买升级需要设置分规则
                if ($scope.posts[x][item].allocate) {
                    send.allocate = $scope.posts[x][item].allocate
                }
                if ($scope.posts[x][item].validityType) {
                    send.validityType = $scope.posts[x][item].validityType
                }
                if ($scope.posts[x][item].validity) {
                    send.validity = $scope.posts[x][item].validity
                }

                if ($scope.posts[x][item].value) send.value = $scope.posts[x][item].value;
                if ($scope.posts[x][item]._id) send._id = $scope.posts[x][item]._id;
                json.push(send)
            }
        }
        jsons.toId = toid;
        jsons.toName = $scope.view.show.toName;
        jsons.posterUrl = $scope.view.show.posterUrl;
        jsons.cardUrl = $scope.view.show.cardUrl;
        // jsons.validityType = $scope.view.show.validityType;
        // jsons.validity = $scope.view.show.validity;

        jsons.backgroundColor = $scope.view.show.backgroundColor;
        jsons.strategies = json;

        console.log(jsons)
        // console.log($scope.free)
        // return false;
        re = ajaxSendFn(JSON.stringify(jsons), "/memberUpgrade", "POST", 1);
        if (re.code == 200) {
            $scope.view.member = ajaxSendFn({}, "/memberUpgrade", "GET").result.strategy || [];
            $scope.view.state = false;
            $("#memberedit").modal("hide");
            $scope.plan.add = 0;
        } else {
            errorMsg(re);
        }
    }
});
// 活动详情第二步      修改活动详情
app.controller('RuleAdd2Ctr', ['$scope', '$location', '$filter', '$routeParams', 'CouponFactory', function ($scope, $location, $filter, $routeParams, couponFac) { //shoplist over
    $scope.config.breadset = [{ //
        name: "活动管理",
        href: indexUrl + "/admin.html#/rule"
    }, {
        name: "修改活动详情"
    }]; //面包屑;

    $scope.btnDisable = 0;
    $scope.today = $filter('date')(new Date(), "yyyy-MM-dd");
    $scope.tem = {
        rules: {}
    };
    $scope.coupon = {
        shared: [],
        shops: []
    };
    $scope.posts = {
        coupons: {}
    };
    // 红票手机号
    $scope.tel = {
        inviters: ""
    }

    $scope.transferMap = {
        POINT_CONSUME: "POINTCONSUME",
        COUPON_FREE: "COUPONFREE",
        CHARGE_CONSUME: "CHARGECONSUME",
        SPECIAL_PRICE: "SPECIALPRICE",
        LIMIT_REDUCE: "LIMITREDUCE",
        SPEND_AS: "SPENDAS",
        SET_MEAL: "SETMEAL",
        GIVEN_UPGRADE: "GIVENUPGRADE",
        CHARGE_FREE: "CHARGEFREE",
        BIRTH_BENEFIT: "BIRTHBENEFIT",
        FIRST_GIFT: "FIRSTGIFT",
        MEMBER_PRICE: 'MEMBERPRICE',
        COMMENT_REDUCE: 'COMMENTREDUCE'

    };
    $scope.transferMapRev = {
        MEMBERPRICE: 'MEMBER_PRICE',
        POINTCONSUME: "POINT_CONSUME",
        COUPONFREE: "COUPON_FREE",
        CHARGECONSUME: "CHARGE_CONSUME",
        SPECIALPRICE: "SPECIAL_PRICE",
        LIMITREDUCE: "LIMIT_REDUCE",
        SPENDAS: "SPEND_AS",
        SETMEAL: "SET_MEAL",
        GIVENUPGRADE: "GIVEN_UPGRADE",
        CHARGEFREE: "CHARGE_FREE",
        BIRTHBENEFIT: "BIRTH_BENEFIT",
        FIRSTGIFT: "FIRST_GIFT",
        COMMENTREDUCE: "COMMENT_REDUCE"
    };
    $scope.view = {};
    $scope.view1 = {};

    // $scope.isOpenOrClose = true;
    $scope.temcoupons2 = {};
    $scope.temcoupons = [];
    $scope.ruleCategory = consumeRuleObj;
    $scope.ruleCategory1 = onlineRuleObj;
    $scope.obtainRepeatCategory = obtainRepeatCategory;
    $scope.cons = function (key, newkey) {

        console.log(key)
        console.log(newkey)
        $scope.posts.detail[key] = newkey;

    }
    $scope.ruleFn = {
        openOrClose: function () {
            $("#add").modal("show");
            $scope.isOpenOrClose = true;
            console.log("22")
        },
        testAddOk: function () {
            $("#add").modal("hide");
            $scope.isOpenOrClose = false;
            alert("添加成功");

        },
        testAddFail: function (result) {
            errorMsg(result);
            console.log("44")
        },
        getCpouponFn: function () {
            $scope.view1 = ajaxSendFn({}, "/activity/factor", "GET").result || [];
            $scope.view.coupons = $scope.view1.COUPON || [];
            $scope.view.rewards = $scope.view1.REWARD || [];
            console.log("55")
            // $scope.view.allocate = $scope.view1.ALLOCATE || [];
            // $scope.view.coupons = ajaxSendFn({}, "/activity/factor", "GET").result || [];
            // $scope.view.rewards = ajaxSendFn({}, "/activity/factor", "GET").result || [];
        },
        getCouponType: function (id) {
            console.log("66")
            for (var i = 0; $scope.view.coupons && i < $scope.view.coupons.length; i++) {
                if ($scope.view.coupons[i].id === id) {
                    return $scope.view.coupons[i].category;
                }
            }
        },
        changeCoupon: function (value, dv) {
            console.log("77")
            if (dv.id) {
                dv.count = 1;
                for (var i = 0; i < $scope.view.coupons.length; i++) {
                    if ($scope.view.coupons[i].id === dv.id) {
                        dv.name = $scope.view.coupons[i].name;
                        break;
                    }
                }
            }
        },
        oldRuleFn: function () {
            var ruletem = ajaxSendFn({}, "/activity/" + $routeParams.activityid + "/rule", "GET").result;
            console.log(' //从服务器获取目前的规则列表')
            console.log(ruletem)
            if (ruletem.rules && ruletem.rules.reduceType && ruletem.rules.reduceType == "RATIO") {
                ruletem.rules.reduceType = true;
            }
            $scope.view = {
                counponType: {
                    "OFFSETCASH": "代金券",
                    "DISCOUNT": "折扣券",
                    "PHYSICAL": "实物券",
                    "GIFT": "礼券",
                    "new": "新增券"
                }
            };

            $scope.ruleFn.getCpouponFn();
            console.log('ruletem.category')
            console.log(ruletem.category)

            // 如果是充值活动   处理一下分账规则
            // 如果是充值活动   处理一下分账规则
            if (ruletem.category == 'CHARGE') {
                if (ruletem.rules && ruletem.rules.detail) {
                    ruletem.rules.detail.ALL.forEach(function (item) {
                        if (item.allocates && item.allocates.length) {
                            console.log(item.allocates[0].id)
                            item.allocate = item.allocates[0].id;
                        }
                    })
                }

            }
            if (ruletem.category.indexOf('_') > 0) {
                $scope.tem.activityCategory = ruletem.category.split('_')[0];
            } else {
                $scope.tem.activityCategory = ruletem.category;
            }

            switch ($scope.tem.activityCategory) {
                case "MEMBERPRICE":
                    $scope.view.rules = {
                        "MEMBERPRICE": {
                            name: "会员价",
                            uncheck: true,
                            state: "",
                            show: 0,
                            addFunc: $scope.ruleFn.addFn,
                            postFunc: $scope.ruleFn.sendFn,
                            content: {
                                MEMBERPRICE: []
                            }

                        }
                    };
                    break;
                case "DISCOUNT":
                    $scope.view.rules = {
                        "DISCOUNT": {
                            name: "打折",
                            uncheck: true,
                            state: "",
                            show: 0,
                            addFunc: $scope.ruleFn.addFn,
                            postFunc: $scope.ruleFn.sendFn,
                            content: {
                                DISCOUNT: []
                            }
                        }
                    };
                    break;
                case "SPECIALPRICE":
                    $scope.view.rules = {
                        "SPECIALPRICE": {
                            name: "特价",
                            uncheck: true,
                            state: "",
                            show: 0,
                            addFunc: $scope.ruleFn.addCouponFn,
                            dishes: ajaxSendFn({}, "/dishes/usable", "GET").result || [],
                            postFunc: $scope.ruleFn.sendFn,
                            content: {
                                SPECIALPRICE: []
                            }
                        }
                    };
                    break;
                case "POINT":
                    $scope.view.rules = {
                        "POINT": {
                            name: "消费积分",
                            state: "",
                            show: 0,
                            addFunc: $scope.ruleFn.addFn,
                            postFunc: $scope.ruleFn.sendFn,
                            content: {
                                POINT: []
                                // POINT_GIFT: [],
                                // POINT_COUPON: []
                            }
                        }
                    };
                    break;
                case "POINTCONSUME":
                    $scope.view.rules = {
                        "POINTCONSUME": {
                            name: "积分抵现",
                            uncheck: true,
                            state: "",
                            show: 0,
                            addFunc: $scope.ruleFn.addFn,
                            postFunc: $scope.ruleFn.sendFn,
                            content: {
                                POINTCONSUME: []
                            }
                        }
                    };
                    break;
                case "CHARGE":
                    $scope.view.rules = {
                        "CHARGE": {
                            name: "充值",
                            uncheck: true,
                            state: "",
                            show: 0,
                            addFunc: $scope.ruleFn.addCouponFn,
                            postFunc: $scope.ruleFn.sendCouponFn,
                            content: {
                                CHARGE: []
                            },

                        }
                    };
                    break;
                case "GIVENUPGRADE":
                    $scope.view.rules = {
                        "GIVENUPGRADE": {
                            name: "升级",
                            uncheck: true,
                            state: "",
                            show: 0,
                            addFunc: $scope.ruleFn.addCouponFn,
                            postFunc: $scope.ruleFn.sendCouponFn,
                            content: {
                                GIVENUPGRADE: []
                            }
                        }
                    };
                    break;

                case "CHARGECONSUME":
                    $scope.view.rules = {
                        "CHARGECONSUME": {
                            name: "使用充值卡",
                            uncheck: true,
                            state: "",
                            show: 0,
                            addFunc: $scope.ruleFn.addFn,
                            postFunc: $scope.ruleFn.sendChargeConsumeFn,
                            content: {
                                CHARGECONSUME: []
                            }
                        }
                    };
                    break;
                case "COUPON":
                    $scope.view.rules = {
                        "COUPON": {
                            name: "返券活动",
                            uncheck: true,
                            state: "",
                            show: 0,
                            addFunc: $scope.ruleFn.addCouponFn,
                            postFunc: $scope.ruleFn.sendCouponFn,
                            content: {
                                COUPON: []
                            }
                        }
                    };
                    break;
                case "COMMENTREDUCE":
                    $scope.view.rules = {
                        "COMMENTREDUCE": {
                            name: "评价立减",
                            uncheck: true,
                            state: "",
                            show: 0,
                            addFunc: $scope.ruleFn.addFn,
                            postFunc: $scope.ruleFn.sendFn,
                            content: {
                                COMMENTREDUCE: []
                            }
                        }
                    };
                    break;
                case "COUPONFREE":
                    $scope.view.rules = {
                        "COUPONFREE": {
                            name: "送券活动",
                            uncheck: true,
                            state: "",
                            show: 0,
                            addFunc: $scope.ruleFn.addCouponFn,
                            postFunc: $scope.ruleFn.sendCouponFn,
                            content: {
                                COUPONFREE: []
                            }
                        }
                    };
                    break;
                case "FIRSTGIFT":
                    $scope.view.rules = {
                        "FIRSTGIFT": {
                            name: "新人礼",
                            uncheck: true,
                            state: "",
                            show: 0,
                            addFunc: $scope.ruleFn.addCouponFn,
                            postFunc: $scope.ruleFn.sendCouponFn,
                            content: {
                                FIRSTGIFT: []
                            }
                        }
                    };
                    break;
                case "BIRTHBENEFIT":
                    $scope.view.rules = {
                        "BIRTHBENEFIT": {
                            name: "生日送券活动",
                            uncheck: true,
                            state: "",
                            show: 0,
                            addFunc: $scope.ruleFn.addCouponFn,
                            postFunc: $scope.ruleFn.sendCouponFn,
                            content: {
                                BIRTHBENEFIT: []
                            }
                        }
                    };
                    break;
                case "EXCHANGE":
                    $scope.view.rules = {
                        "EXCHANGE": {
                            name: "积分兑换",
                            state: "",
                            show: 0,
                            addFunc: $scope.ruleFn.addCouponFn,
                            postFunc: $scope.ruleFn.sendCouponFn,
                            content: {
                                EXCHANGE: []
                            }
                        }
                    };
                    break;

                case "TICKET":
                    $scope.view.rules = {
                        "TICKET": {
                            name: "红票",
                            uncheck: true,
                            state: "",
                            show: 0,
                            addFunc: $scope.ruleFn.addCouponFn,
                            postFunc: $scope.ruleFn.sendCouponFn,
                            content: {
                                TICKET: []
                            }
                        }
                    };
                    break;
                case "LIMITREDUCE":
                    $scope.view.rules = {
                        "LIMITREDUCE": {
                            name: "满减",
                            uncheck: true,
                            state: "",
                            show: 0,
                            addFunc: $scope.ruleFn.addFn,
                            postFunc: $scope.ruleFn.sendFn,
                            content: {
                                LIMITREDUCE: []
                            }
                        }
                    };
                    break;
                case "SPENDAS":
                    $scope.view.rules = {
                        "SPENDAS": {
                            name: "折扣",
                            uncheck: true,
                            state: "",
                            show: 0,
                            addFunc: $scope.ruleFn.addFn,
                            postFunc: $scope.ruleFn.sendFn,
                            content: {
                                SPENDAS: []
                            }
                        }
                    };
                    break;
                case "SETMEAL":
                    $scope.view.rules = {
                        "SETMEAL": {
                            name: "套餐组合",
                            uncheck: true,
                            state: "",
                            show: 0,
                            meals: ajaxSendFn({}, "/meals/usable", "GET").result || [],
                            addFunc: $scope.ruleFn.addCouponFn,
                            postFunc: $scope.ruleFn.sendFn,
                            content: {
                                SETMEAL: []
                            }
                        }
                    };
                    break;
                case "CHARGEFREE":
                    $scope.view.rules = {
                        "CHARGEFREE": {
                            name: "充值免单",
                            uncheck: true,
                            state: "",
                            show: 0,
                            addFunc: $scope.ruleFn.addFn,
                            postFunc: $scope.ruleFn.sendFn,
                            content: {
                                CHARGEFREE: []
                            }
                        }
                    };
                    break;
                case "FOLLOW":
                    $scope.view.rules = {
                        "FOLLOW": {
                            name: "关注有礼",
                            uncheck: true,
                            state: "",
                            show: 0,
                            addFunc: $scope.ruleFn.addCouponFn,
                            postFunc: $scope.ruleFn.sendCouponFn,
                            content: {
                                FOLLOW_COUPON: []
                            }
                        }
                    };
            }

            $scope.view.shop = ajaxSendFn({
                state: "1002"
            }, "/shops", "GET").result || [];
            $scope.tem.shops = [];
            for (var x in $scope.view.shop) $scope.tem.shops.push($scope.view.shop[x].id);
            if (!ruletem || !ruletem.rules) return;
            $scope.tem.rules = {}
            $scope.tem.rules[$scope.tem.rules.type] = $scope.tem.rules;
            var oldrules = ruletem.rules;
            if (oldrules) { //
                $scope.btnDisable = 1; //假如有旧规则,就不可以添加新规则
                var type = oldrules.type;
                if ($scope.transferMap.hasOwnProperty(type)) {
                    oldrules.type = $scope.transferMap[type];
                }
                $scope.ruleFn.stateFn(oldrules.type, "show", 1, oldrules);
            }
        },
        stateFn: function (a, b, c, d) { //key,state,show,点击添加规则时调用
            var aRe
            // 会员价
            if (a == 'MEMBER_PRICE') {
                aRe = 'MEMBERPRICE';
            } else {
                aRe = a.split("_")[0];
            }
            if (aRe in $scope.view.rules) {
                $scope.view.rules[aRe].state = b;
                $scope.view.rules[aRe].show = c;
            }
            if (b == "add") $scope.ruleFn.buttonFn(a);
            if (!d) { //只让添加一项,就让设定活动内容按钮灰掉,d无值表示是手动点击
                $scope.btnDisable = 1;
                return;
            }
            var tem = d.type;
            if (c) {
                d.celling && (d.celling = d.celling * 100);
                $scope.view.rules[aRe].content[tem] = d
            }
        },
        closeFn: function (a) { //取消按钮
            if ($scope.view.rules[a].state == "edit") { //保存
                $scope.view.rules[a].state = "show";
            } else if ($scope.view.rules[a].state == "add") { //新增
                $scope.view.rules[a].state = "show";
            }
        },
        buttonFn: function (a) { //活动保存按钮
            console.log("99")
            console.log(a) //MEMBERPRICE
            console.log($scope.view.rules[a].state)
            if ($scope.view.rules[a].state == "show") { //修改
                $scope.ruleFn.postFn(a);
                $scope.ruleFn.memberFn();
                $scope.ruleFn.getSeparate();
                $scope.view.rules[a].state = "edit";
            } else if ($scope.view.rules[a].state == "edit") { //保存
                // 哈哈哈哈哈哈哈哈哈哈哈
                var res = $scope.view.rules[a].postFunc(a);
                console.log('res')
                console.log(res)
                if (res) {
                    //$location.path("/rule");
                    $scope.view.rules[a].state = "show";
                }
            } else if ($scope.view.rules[a].state == "add") { //新增
                for (x in $scope.view.rules[a].content) $scope.view.rules[a].addFunc(x);
                $scope.view.rules[a].state = "edit";
                $("#showadd").modal("hide");
            }
        },
        // 获取分账规则
        getSeparate: function () {
            $scope.view.allocates = ajaxSendFn({}, "/activity/allocate/8010", "GET").result || []
        },

        memberFn: function () { //会员获取
            console.log("//会员获取")
            if (!$scope.view.allocates) {
                $scope.ruleFn.getSeparate()
            }

            // $scope.view.member = $scope.tem.member = ajaxSendFn({}, "/memberGrade", "GET").result || [];
            $scope.view.member = $scope.tem.member = $scope.view1.MEMBERGRADE || [];
            $scope.view.member1 = [];
            $scope.view.member = $filter('orderBy')($scope.view.member, 'grade');
            console.log($scope.view.member)
            $scope.view.member1.push({
                id: "ALL",
                name: "全员"
            });
            if ($scope.tem.activityCategory != "MEMBERPRICE") { // 会员价不需要全员
                $scope.view.member.push({
                    id: "ALL",
                    name: "全员"
                });
            }
            $scope.view.member.push({
                id: "MEMBER",
                name: "任一会员"
            });
            if ($scope.tem.activityCategory == "GIVENUPGRADE") {
                $scope.view.member.push({
                    id: "CUSTOMER",
                    name: "非会员"
                });
            }
            if ($scope.tem.activityCategory == "COUPONFREE") {
                $scope.view.member.push({
                    id: "FOLLOWED",
                    name: "微信粉丝"
                });
            }
            $scope.tem.member1 = $scope.view.member;


        },
        postFn: function (a) { //发送数据
            // console.log("11111111111111111111111111111111")
            // console.log(a)
            var tem = $scope.view.rules[a].content;
            // console.log($scope.view.rules)
            $scope.posts[a] = {};
            for (x in tem) {
                var needCheck = true;
                $scope.posts[a][x] = tem[x];
                if (tem[x] instanceof Array) {
                    needCheck = false;
                }
                $scope.posts[a][x].check = needCheck;
                if (!tem[x].detail || !Object.keys(tem[x].detail).length) {
                    $scope.view.rules[a].addFunc(x);
                }
            }

        },
        // 添加评价立减
        addCommnetFn: function (x) {
            $scope.ruleFn.addFn(x, function (a, b) {
                //if (a === "COUPON" || a === "GAME" || b === "COUPON" || x === "COUPONFREE" || x === "SPECIALPRICE") {
                var arr = $scope.posts[a][x].detail.ALL;
                if (arr && arr.length > 0 && !isEmptyObject(arr[0])) {
                    var obj = {};
                    obj.value = [{}];
                    $scope.posts[a][x].detail.ALL.push(obj);
                } else {
                    var obj = $scope.posts[a][x].detail.ALL[0];
                    obj.value = [{}];
                }
                //}
            })
        },
        addCouponFn: function (x) {

            $scope.ruleFn.addFn(x, function (a, b) {
                //if (a === "COUPON" || a === "GAME" || b === "COUPON" || x === "COUPONFREE" || x === "SPECIALPRICE") {
                var arr = $scope.posts[a][x].detail.ALL;
                if (arr && arr.length > 0 && !isEmptyObject(arr[0])) {
                    var obj = {};
                    obj.value = [{}];
                    $scope.posts[a][x].detail.ALL.push(obj);
                } else {
                    var obj = $scope.posts[a][x].detail.ALL[0];
                    obj.value = [{}];
                }
                //}
            })
        },
        addFn: function (x, cb) { //
            console.log("1313")
            console.log(x)
            var cnt = 0;
            var a, b;
            var arr = x.split("_");

            if (arr && arr.length > 0) {
                a = arr[0];
                console.log(a)
            }
            if (arr && arr.length > 1) {
                b = arr[1];
            }
            if (!$scope.posts[a] || !$scope.posts[a][x] || !$scope.posts[a][x].detail || isEmptyObject($scope.posts[a][x].detail)) {
                if (!$scope.posts[a]) $scope.posts[a] = {};
                $scope.posts[a][x] = $scope.view.rules[a].content[x];
                $scope.posts[a][x].detail = {
                    "ALL": [{}]
                };
                if (cb) cb(a, b);
                console.log(!!cb)


                return;
            }

            if ($scope.posts[a][x].detail.ALL) {
                var obj = {};
                if (cb) {
                    cb(a, b);
                } else {
                    $scope.posts[a][x].detail.ALL.push(obj);
                }
            } else {
                $scope.posts[a][x].detail.ALL = [{}];
                if (cb) cb(a, b);
            }

        },
        removeFn: function (x, b, c) {
            console.log("1414")
            var a = x.split("_")[0];
            if ($scope.posts[a][x].detail[b][c]) $scope.posts[a][x].detail[b].splice(c, 1);
        },
        // 检查券id是否重复和券类型是否重复
        checkCouponList: function (values) {
            console.log("1515")
            for (var i = 0; values && i < values.length - 1; i++) {
                for (var j = i + 1; j < values.length; j++) {
                    if (values[i].id === values[j].id) {
                        return true;
                    }
                }
            }
            for (var i = 0; values && i < values.length - 1; i++) {
                var oldtype = $scope.ruleFn.getCouponType(values[i].id);
                for (var j = 1; j < values.length; j++) {
                    var newType = $scope.ruleFn.getCouponType(values[j].id);
                    if (oldtype === newType) {
                        return true;
                    }
                }
            }
            return false;
        },
        //构建使用充值卡的数据
        sendChargeConsumeFn: function (a) {
            console.log("1616")
            return $scope.ruleFn.sendFn(a, undefined, undefined, function (json) {
                var obj = json.detail.ALL[0];

                obj.amount = 1;
                obj.currentAmount = obj.count = 0;
            });
        },
        sendCommentFn: function (a) {
            console.log("1717")
            return $scope.ruleFn.sendFn(a, function (x, tem2) {
                if (x === "COUPON") {
                    for (var key in tem2) {
                        if (tem2[key] && tem2[key].length > 0 && $scope.ruleFn.checkCouponList(tem2[key][0].value)) {
                            return {
                                message: "券或券类型不能重复"
                            };
                        }
                    }
                }
            }, function (b, json) {
                if (b && b === "COUPON") {
                    for (var key in json.detail) {
                        var cache = {};
                        for (var item in json.detail[key]) {
                            if (cache[key] !== json.detail[key][item].value[0].id) {
                                cache[key] = json.detail[key][item].value[0].id;
                            } else {
                                return {
                                    message: "注意：券不能重复"
                                };
                            }
                        }
                    }
                }
            });
        },
        sendCouponFn: function (a) {
            console.log("1717")
            return $scope.ruleFn.sendFn(a, function (x, tem2) {
                if (x === "COUPON") {
                    for (var key in tem2) {
                        if (tem2[key] && tem2[key].length > 0 && $scope.ruleFn.checkCouponList(tem2[key][0].value)) {
                            return {
                                message: "券或券类型不能重复"
                            };
                        }
                    }
                }
            }, function (b, json) {
                if (b && b === "COUPON") {
                    for (var key in json.detail) {
                        var cache = {};
                        for (var item in json.detail[key]) {
                            if (cache[key] !== json.detail[key][item].value[0].id) {
                                cache[key] = json.detail[key][item].value[0].id;
                            } else {
                                return {
                                    message: "注意：券不能重复"
                                };
                            }
                        }
                    }
                }
            });
        },
        sendFn: function (a, beforeValidateFunc, afterValidateFunc, fixFunc) { ///没搞完，发送规则
            var tem = $scope.posts[a];
            console.log('tem')
            console.log(tem)
            //整理，删除不需要的规则
            /*    for (var x in tem) {
             if (!$scope.view.rules[a].uncheck) {
             if (!tem[x].check) {
             if ($scope.tem.rules && $scope.tem.rules[x]) delete $scope.tem.rules[x];
             if ($scope.view.rules[a].content[x]) {
             $scope.view.rules[a].content[x].detail = [];
             $scope.view.rules[a].content[x].check = false;
             }
             }
             }
             }*/
            //遍历有效规则，提交到服务器
            var json = {};
            // $scope.inviters = $scope.inviters.splite(",")
            // console.log();

            for (var x in tem) {
                if (!$scope.view.rules[a].uncheck) {
                    if (!tem[x].check) {
                        continue;
                    }
                }
                if ($scope.transferMapRev.hasOwnProperty(x)) {
                    json.type = $scope.transferMapRev[x];
                } else {
                    json.type = x;
                }
                json.detail = {};
                tem[x]._id && (json._id = tem[x]._id);
                tem[x].amountLimit && (json.amountLimit = tem[x].amountLimit);
                if (tem[x].celling) {
                    json.celling = parseInt(tem[x].celling) / 100;
                    // 仅限首次充值
                    if (tem[x].firstLimit) {
                        json.firstLimit = true;
                    } else {
                        json.firstLimit = false;
                    }
                }
                // 是否支持充值卡余额通用
                if (json.type == "CHARGE_CONSUME") {
                    if (tem[x].allpurpose) {
                        json.allpurpose = true;
                    } else {
                        json.allpurpose = false;
                    }
                    if (tem[x].realIncome) {
                        json.realIncome = true;
                    } else {
                        json.realIncome = false;
                    }

                    if (tem[x].reduceType) {
                        json.reduceType = 'RATIO';
                    } else {
                        json.reduceType = 'PRINCIPAL_FIRST'
                    }
                }
                // 会员价
                if (json.type == "MEMBERPRICE") {
                    json.type = "MEMBER_PRICE"
                }

                typeof tem[x].countLimit == 'number' && (json.countLimit = tem[x].countLimit);
                tem[x].timesLimit && (json.timesLimit = tem[x].timesLimit);
                tem[x].obtainCategory && (json.obtainCategory = tem[x].obtainCategory);

                var tem2 = tem[x].detail;
                //if (beforeValidateFunc && typeof(beforeValidateFunc) === "function") {
                //    var obj = beforeValidateFunc(x, tem2);
                //    if (obj) {
                //        alert(obj.message);
                //        return false;
                //    }
                //}

                var b;
                var arr = x.split("_");
                if (arr && arr.length > 1) {
                    b = arr[1];
                }

                for (z in tem2) {
                    for (w in tem2[z]) {
                        var tem3 = tem2[z][w],
                            json2 = {};
                        (typeof (tem3.amount) == 'number' || tem3.amount) && (json2.amount = tem3.amount);
                        tem3.score && (json2.score = tem3.score);
                        tem3.gradeId && (json2.gradeId = tem3.gradeId);
                        if (tem3.value && tem3.value.length != 0) {
                            json2.value = tem3.value;
                            // 如果有分账规则===========================================================
                            if (tem3.allocate) {
                                json2.allocates = [{
                                    id: tem3.allocate
                                }]

                            }
                            if (json2.value && json2.value.length) {
                                for (var x in json2.value) {
                                    delete json2.value[x].$$hashKey;
                                }
                            }
                        } else if (json.type == "CHARGE_CONSUME") {
                            json2.value = false;
                        }
                        tem3.limit !== undefined && (json2.limit = tem3.limit);
                        tem3.count && (json2.count = tem3.count);
                        tem3.currentAmount && (json2.currentAmount = tem3.currentAmount);
                        // 添加分账规则
                        if (json.detail[tem3.id]) json.detail[tem3.id].push(json2);
                        else json.detail[tem3.id] = [json2];
                    }
                }

                if (json.type == "CHARGE") {

                    angular.forEach(json.detail.ALL, function (each, index) {
                        if (!each.value || !each.value[0].category) {
                            delete each.value
                        }
                    })
                }
                if (afterValidateFunc && typeof (afterValidateFunc) === "function") {
                    obj = afterValidateFunc(b, json);
                    if (obj) {
                        alert(obj.message);
                        return false;
                    }
                }
                if (fixFunc && typeof (fixFunc) === "function") {
                    fixFunc(json);
                }
            }
            // 验证授权邀请码是否正确
            if ($scope.tem.activityCategory == "TICKET") {
                if ($scope.tel.inviters) {
                    json.inviters = $scope.tel.inviters.split(",")
                } else {
                    alert("请输入邀请码");
                    return;
                }
            };
            // 修改活动详情请求
            var rulesend = ajaxSendFn(json, "/activity/" + $routeParams.activityid + "/rule", "POST", 1);
            if (rulesend.code == 200) { //
                $scope.ruleFn.oldRuleFn();
            } else {
                errorMsg(rulesend);
                return false;
            }
            return true;
        },
        addCouponPlanFn: function (a) {
            console.log("1919")
            if (a != "new") return;
            $scope.ruleFn.showCouponPlanFn();
        },
        addRuleFn: function () { //显示添加面板
            console.log("2020")
            $scope.view.modal = {
                title: "添加活动内容",
                html: "addrule"
            };
            $("#showadd").modal("show");
        },
        showCouponPlanFn: function (a) {
            console.log("2121")
            $scope.view.modal = {
                title: "添加券",
                html: "couponNew"
            };
            $("#showadd").modal("show");
        },

        put: function (details, dv) {
            console.log("2222")
            if (!details.value) {
                details.value = [];
            }
            dv = {};
            details.value.push(dv);
        },
        resetCouponCntFn: function (details, dv) {
            console.log("2323")
            angular.forEach(details.value, function (data, idx) {
                if (data && data.id === dv.id) {
                    this.splice(idx, 1);
                }
            }, details.value);
        },
        containsCoupon: function (details, id) {
            console.log("2424")
            var tmpIdx = -1;
            for (var i = 0; details.value && i < details.value.length; i++) {
                if (details.value[i].id === id) {
                    tmpIdx = i;
                    break;
                }
            }
            return tmpIdx;
        }
    };

    $scope.checkout = function () {
        var tel = $scope.tel.inviters.split(",")

        angular.forEach(tel, function (value, index) {
            if (!(/^1[3456789]\d{9}$/.test(value))) {
                alert("手机号码格式有误，请重填");
                return false;
            }
        })

    }

    $scope.ruleFn.oldRuleFn();

    if ($scope.tem.activityCategory == "FOLLOW") {
        $scope.view.member = [{
            id: "FOLLOWING",
            name: "新关注用户"
        }];
    } else {
        $scope.ruleFn.memberFn();
    }


    // $scope.ruleFn.getCpouponFn();
    if ($scope.tem && $scope.tem.activityCategory && isEmptyObject($scope.tem.rules)) {
        $scope.ruleFn.stateFn($scope.tem.activityCategory, 'add', 1)
    }
    $scope.check_all = function () { //
        $scope.checkallstr = !$scope.checkallstr;
        if ($scope.checkallstr) { //
            $scope.coupon.shops = $scope.tem.shops;
        } else { //
            $scope.coupon.shops = [];
        }
    }
}]);
app.controller("RuleCouponCtr", ['$scope', '$http', 'CouponFactory', function ($scope, $http, couponFac) {
    $scope.config.breadset = [{ //
        name: "活动管理",
        href: indexUrl + "/admin.html#/rule",
        class: "coupon"
    }, {
        name: "券管理"
    }]; //面包屑;
    // $scope.set = {
    //     allocate: ajaxSendFn({}, "/activity/allocate/8003", "GET").result || [],
    // };

    $scope.view = {
        allocate: ajaxSendFn({}, "/activity/allocate/8040", "GET").result || [],
        coupons: ajaxSendFn({}, '/coupon', 'GET').result || [],
        type: {
            "901": "代金券",
            "902": "实物券",
            "9021": "套餐券",
            "904": "礼品券",
            "9011": "抵扣券",
            "903": "通用折扣券",
            "9031": "品类折扣券",
            "9012": "满减券"
        },
        state: {
            "4001": "待使用",
            "4002": "已使用",
            "4003": "已过期",
            "4005": "核销中",
            "4009": "退款撤销",
            "4006": "未到有效期"
        },
        details: {
            allocates: []
        }

    };

    // 添加券  规则
    $scope.openOrClose = function () {
        $("#add").modal("show");
        $scope.isOpenOrClose = true;
    };
    $scope.testAddOk = function () {
        $("#add").modal("hide");
        $scope.isOpenOrClose = false;
        alert("添加成功");
        //$scope.isOpenOrClose = false;
        $scope.view.coupons = ajaxSendFn({}, '/coupon', 'GET').result || []
    };
    $scope.testAddFail = function (result) {
        errorMsg(result);
    };
    $scope.detailFn = function (id) {
        delete $scope.coupon;
        $scope.coupon = ajaxSendFn({}, "/coupon/" + id, "GET").result;
        $("#show").modal("show");
    };
    $scope.editFn = function (id) {
        delete $scope.coupon;
        $scope.coupon = ajaxSendFn({}, "/coupon/" + id, "GET").result;
        $("#edit").modal("show");
    };
    $scope.submitFn = function (id) {
        var data = ajaxSendFn($scope.coupon, "/coupon/" + $scope.coupon.id, "PUT");
        if (data.code == 200) {
            $scope.view.coupons = ajaxSendFn({}, '/coupon', 'GET').result || []
        } else {
            alert(data.message);
        }
        $("#edit").modal("hide");
    };
    $scope.couponDelFn = function (index) {
        if (!confirm("一旦删除将不可恢复，是否确认删除？")) return false;
        var data = ajaxSendFn({}, "/coupon/" + $scope.view.coupons.items[index].id, "DELETE");
        if (data.code == 200) { //
            $scope.view.coupons.items.splice(index, 1);
            alert("删除成功");
        } else { //
            alert(data.message)
        }
    }
    $scope.couponTurn = function (index, state) { //券上线，下线
        var data = ajaxSendFn({}, "/coupon/" + $scope.view.coupons.items[index].id + "/" + state, "POST");
        if (data.code == 200) {
            alert("操作成功");
            $scope.view.coupons.items[index].on = !$scope.view.coupons.items[index].on;
        } else {
            alert(data.message)
        }
    }
    $scope.pageChange = function () {
        var json = {
            page: $scope.view.coupons.page,
            count: $scope.view.coupons.count
        };
        $scope.view.coupons = ajaxSendFn(json, "/coupon", "GET").result || [];
    };
}]);

// 卡管理
app.controller("RuleCardsCtr", ['$scope', '$http', 'shopFactory', function ($scope, $http, couponFac, shopFac) {
    $scope.config.breadset = [{ //
        name: "活动管理",
        href: indexUrl + "/admin.html#/rule",
        class: "cards"
    }, {
        name: "卡管理"
    }]; //面包屑;
    $scope.config.permission = ajaxSendFn({}, "/activity/permission", "GET").result;
    $scope.set = {
        times: ajaxSendFn({}, "/businesstimes/all", "GET").result,
        timeType: {
            "1001": "早市",
            "1002": "午市",
            "1003": "下午茶",
            "1004": "晚市",
            "1005": "宵夜"
        },
        periods: []
    };

    $scope.view = {
        cards: ajaxSendFn({}, '/cards', 'GET').result || [],
     
        shared: [],
        periods: []
    };
    $scope.set.time = getSubtimes($scope.set.times, $scope.set.timeType);
    $scope.settime = function (a, b) { //
        $scope.view.periods[a] = $scope.view.periods[a] ? null : b;
    }
    $scope.ruleCategory = consumeRuleObj;
    $scope.ruleCategory1 = onlineRuleObj;
    $scope.couponTimeSel = couponRangeCategory;

    $scope.cards = {
        // "dateRangeCategory": couponRangeCategory,
        "dateRange": {
            "selectCategory": "NONE"
        },
        shared: [],
        type: 1000,
        catagoryAll: false,
        allDay: false

    }
    // 可用门--start
    $scope.shops = ajaxSendFn({
        "state": "1002"
    }, "/shops", "GET").result || []
    $scope.cards.shops = [];
    $scope.checkAllShop = false;
    $scope.checkAllShops = function () {
        if (!$scope.checkAllShop) $scope.cards.shops = [];
        else {
            angular.forEach($scope.shops, function (value, key) {
                this[key] = value.id;
            }, $scope.cards.shops);
            console.log($scope.cards.shops);

        }
    }
    // 可用门--end
    $scope.init = function () {
        var tem = $scope.view;
        // $scope.view.data = {};
        // $scope.view.data.dateType = tem.dateRangeCategory;

        // if (tem.dateRangeCategory === "AROUND_FIX_DATE" || tem.dateRangeCategory === "MONTH_EFFECTIVE") {
        //     $scope.view.data.dateType = "AROUND_FIX_DATE";
        //     $scope.view.data.subType = tem.dateRangeCategory;
        // }
        // $scope.view.data[$scope.view.data.dateType] = {
        //     dateRange: tem.dateRange
        // };
        // $scope.view.dateRange = $scope.view.data[$scope.view.data.dateType].dateRange;
        // if (tem.dateRange) {
        //     if (tem.dateRange.selectDates) {
        //         $scope.view.dateRange.subType = "MANUAL_SELECT";
        //         $scope.view.dateRange.selectDates = arrayMap($scope.view.dateRange.selectDates, function (data) {
        //             return data.split(/\s+/)[0];
        //         });
        //     } else if (tem.dateRange.selectDays) {
        //         $scope.view.dateRange.subType = "MONTH_DAYS";
        //     } else {
        //         $scope.view.dateRange.subType = "WEEKLY_DAY";
        //     }
        // }
    };
    console.log($scope.shareRuleCategory)
    // 同享活动
    angular.forEach($scope.shareRuleCategory, function (data, idx) {
        if (tem.shared && tem.shared.indexOf(data.id) != -1) {
            this[idx] = data.id;
        } else {
            this[idx] = false;
        }
    }, $scope.cards.shared);
    //过滤活动同享数组，去除空元素
    $scope.filterShared = function () {
        return arrayFilter($scope.cards.shared, function (data) {
            return data ? true : false;
        });
    };
    $scope.checkAllCatagory = function () {

        $scope.ruleCategory.map(i => {
            i.checked = $scope.cards.catagoryAll;
        })
        $scope.ruleCategory1.map(i => {
            i.checked = $scope.cards.catagoryAll;
        })
        console.log($scope.ruleCategory)
    };
    $scope.categoryName = function (category) {
        var result = {};
        if (category) {
            var tmp = category.split('_')[0];
            angular.forEach($scope.ruleCategory, function (data, idx) {
                if (data.id === category) {
                    this.name = data.name;
                }
            }, result);
        };
        return result.name || "类型错误";
    }

    // ==========================
    $scope.$watch('set.shopAll', function (newVal, oldVal) {
        if (newVal !== oldVal) {
            if (newVal) {
                angular.forEach($scope.set.list, function (value, key) {
                    this[key] = value.id;
                }, $scope.posts.shops)
            } else {
                $scope.posts.shops = [];
            }
        }
    });
    // 添加卡按钮
    $scope.openOrClose = function () {
        $scope.cards = {
            "dateRangeCategory": "PERMANENT",
            "dateRange": {
                "selectCategory": "NONE"
            }
        }
        $scope.cards.shops = [];
        $("#addCard").modal("show");
       };

    $scope.detailFn = function (id) {
        delete $scope.cards;
        $scope.cards = ajaxSendFn({}, "/cards/" + id, "GET").result;
        $("#show").modal("show");
    };
    $scope.editFn = function (id) {
        delete $scope.cards;
        $scope.cards = ajaxSendFn({}, "/cards/" + id, "GET").result;
        $("#edit").modal("show");
    };
    $scope.editOkFn = function (id) {
        if ($scope.cards.code) {
            delete $scope.cards.code
        }
        var data = ajaxSendFn($scope.cards, "/cards/" + id, "PUT");
        if (data.code == 200) {
            $scope.view.cards = ajaxSendFn({}, '/cards', 'GET').result || []
        } else {
            alert(data.message);
        }
        $("#edit").modal("hide");
    };
    $scope.submitFn = function (id) {
     
        var arr = []
        for (var i = 0; i < $scope.cards.shops.length; i++) {
            if ($scope.cards.shops[i] != '' && $scope.cards.shops[i] != null) {
                arr.push($scope.cards.shops[i])
            }
        }
        $scope.cards.shops = arr;
        $scope.cards.shared = [];
        // console.log($scope.cards);
        // console.log($scope.ruleCategory);
        $scope.ruleCategory.forEach(i => {
            if (i.checked) {
                $scope.cards.shared.push(i.id)
            }
        })
        $scope.ruleCategory1.forEach(i => {
            if (i.checked) {
                $scope.cards.shared.push(i.id)
            }
        })

        $scope.cards.allShop = $scope.checkAllShop;
        console.log($scope.view.periods)
        console.log($scope.cards.periods)

        if ($scope.view.periods.length == 0) {
            $scope.cards.periods = $scope.view.periods;
        }
        if ($scope.cards.allDay) {
            $scope.cards.periods = ["1001", "1002",
                "1003",
                "1004",
                "1005"
            ];
        }

        console.log($scope.cards)
        // 添加卡
        // return;
        delete $scope.cards.catagoryAll;
        delete $scope.cards.allDay;
        delete $scope.cards.data;
        var data = ajaxSendFn($scope.cards, "/cards", "POST");
        console.log(data)
        if (data.code == 200) {
            $scope.view.cards = ajaxSendFn({}, '/cards', 'GET').result || [];
            alert('添加成功')
            $("#addCard").modal("hide");
        } else {
            alert(data.message);
        }

    };
    $scope.cardsDelFn = function (index) {
        if (!confirm("一旦删除将不可恢复，是否确认删除？")) return false;
        var data = ajaxSendFn({}, "/cards/" + $scope.view.cards.items[index].id, "DELETE");
        if (data.code == 200) { //
            $scope.view.cards.items.splice(index, 1);
            alert("删除成功");
        } else { //
            alert(data.message)
        }
    }
    $scope.cardsTurn = function (index, state) { //券上线，下线
        var data = ajaxSendFn({}, "/cards/" + $scope.view.cards.items[index].id + "/" + state, "POST");
        if (data.code == 200) {
            alert("操作成功");
            $scope.view.cards.items[index].on = !$scope.view.cards.items[index].on;
        } else {
            alert(data.message)
        }
    }
    $scope.pageChange = function () {
        var json = {
            page: $scope.view.cards.page,
            count: $scope.view.cards.count
        };
        $scope.view.cards = ajaxSendFn(json, "/cards", "GET").result || [];
    };
}]);
// 分账规则
app.controller("RuleAllocateCtr", ['$scope', '$http', 'shopFactory', 'CouponFactory', function ($scope, shopFac, $http, couponFac) {
    $scope.config.breadset = [{ //
        name: "活动管理",
        href: indexUrl + "/admin.html#/rule",
        class: "allocate"
    }, {
        name: "分账规则"
    }]; //面包屑;
    $scope.view = {
        coupons: ajaxSendFn({}, '/allocate', 'GET').result || [],
        type: {
            "GRATUITY": "打赏",
            "CHARGE": "充值",
            "UPGRADE": "入会",
        },
        state: {
            "ONLINE": "线上",
            "OFFLINE": "线下",
        }

    };

    $scope.posts = {
        shops: [],
        minAmount: 0,
        maxAmount: 0,
        activities: [],
        actions: [],
        name: ''
    };
    $scope.set = {
        list: ajaxSendFn({
            state: 1002
        }, "/shops", "GET").result,
        activities: {
            'GRATUITY': '',
            'CHARGE': '',
            'UPGRADE': ''
        },
        list2: [],
        action: {
            'ONLINE': '',
            'OFFLINE': '',
        },
        shopAll: false,
        rule: ajaxSendFn({}, '/allocate', 'GET').result || [],
    };
    $scope.openOrClose = function () { //点击
        $("#add").modal("show");
        $scope.isOpenOrClose = true;
    };

    $scope.$watch('set.shopAll', function (newVal, oldVal) {
        if (newVal !== oldVal) {
            if (newVal) {
                angular.forEach($scope.set.list, function (value, key) {
                    this[key] = value.id;
                }, $scope.posts.shops)
            } else {
                $scope.posts.shops = [];
            }
        }
    });

    $scope.submitFn1 = function () { //添加
        angular.forEach($scope.set.activities, function (value, key) {
            if (value) {
                $scope.posts.activities.push(key)
            }
        });
        angular.forEach($scope.set.action, function (value, key) {
            if (value) {
                $scope.posts.actions.push(key)
            }
        });
        var newshops = [];
        angular.forEach($scope.posts.shops, function (value, key) {
            if (value == false || value == null || value == undefined) {

            } else {
                newshops.push(value);
            }
        });
        var json = $scope.posts;
        json.shops = newshops;
        if (json.activities.length < 1) {
            alert('至少选择一个活动类型!');
            return;
        }
        if (!json.minAmount) {
            json.minAmount = 0
        }
        if (!json.maxAmount) {
            json.maxAmount = 0
        }
        var data = ajaxSendFn(json, '/allocate', 'POST');
        if (data.code == 200) {
            $("#add").modal("hide");
            $scope.isOpenOrClose = false;
            alert("添加成功");
            location.reload();
            // $scope.view.coupons = ajaxSendFn({}, '/allocate', 'GET').result || []
        }
    };

    // $scope.editFn = function (id) { //修改
    //     delete $scope.coupon;
    //     $scope.coupon = ajaxSendFn({}, "/allocate/" + id, "GET").result;
    //     $("#edit").modal("show");
    // };
    // $scope.submitFn = function (id) { //确认修改
    //     var data = ajaxSendFn($scope.coupon, "/coupon/" + $scope.coupon.id, "PUT");
    //     if (data.code == 200) {
    //         $scope.view.coupons = ajaxSendFn({}, '/coupon', 'GET').result || []
    //     } else {
    //         alert(data.message);
    //     }
    //     $("#edit").modal("hide");
    // };
    $scope.couponDelFn = function (index) { //删除
        if (!confirm("一旦删除将不可恢复，是否确认删除？")) return false;
        var data = ajaxSendFn({}, "/allocate/" + index, "DELETE");
        if (data.code == 200) { //
            $scope.view.coupons = ajaxSendFn({}, '/allocate', 'GET').result || [];
            alert("删除成功");
        } else { //
            alert(data.message)
        }
    }

    $scope.pageChange = function () {
        var json = {
            page: $scope.view.coupons.page,
            count: $scope.view.coupons.count
        };
        $scope.view.coupons = ajaxSendFn(json, "/coupon", "GET").result || [];
    };
}]);
// 代用币管理
app.controller("RuleRewardCtr", ['$scope', '$http', 'CouponFactory', function ($scope, $http, couponFac) {
    $scope.config.breadset = [{ //
        name: "活动管理",
        href: indexUrl + "/admin.html#/rule",
        class: "reward"
    }, {
        name: "代用币管理"
    }]; //面包屑;
    $scope.view = {
        reward: ajaxSendFn({}, '/reward', 'GET').result || []
    };
    $scope.post = {};
    $scope.openOrClose = function () {
        $("#add").modal("show");
        $scope.isOpenOrClose = true;
    };
    $scope.testAddOk = function () {
        $("#add").modal("hide");
        $scope.isOpenOrClose = false;
        alert("添加成功");
        $scope.view.reward = ajaxSendFn({}, '/reward', 'GET').result || []
    };
    $scope.couponDelFn = function (index) {
        if (!confirm("一旦删除将不可恢复，是否确认删除？")) return false;
        var data = ajaxSendFn({}, "/reward/" + $scope.view.reward.items[index].id, "DELETE");
        if (data.code == 200) { //
            $scope.view.reward.items.splice(index, 1);
            alert("删除成功");
        } else { //
            alert(data.message)
        }
    }
    $scope.couponTurn = function (index, state) { //券上线，下线
        var data = ajaxSendFn({}, "/reward/" + $scope.view.reward.items[index].id + "/" + state, "POST");
        if (data.code == 200) {
            alert("操作成功");
            $scope.view.reward.items[index].on = !$scope.view.reward.items[index].on;
        } else {
            alert(data.message)
        }
    }
    $scope.pageChange = function () {
        var json = {
            page: $scope.view.reward.page,
            count: $scope.view.reward.count
        };
        $scope.view.reward = ajaxSendFn(json, "/reward", "GET").result || [];
    };
    $scope.submitFn = function () {
        var data = ajaxSendFn($scope.post, "/reward", "POST");
        if (data.code == 200) {
            $scope.testAddOk();
        } else {
            errorMsg(data);
        }
    }
}]);
// 买单砍价
app.controller("RuleBargainCtr", ["$scope", "$http", "$filter", function ($scope, $http, $filter) {
    $scope.config.breadset = [{ //
        name: "买单砍价",
        href: indexUrl + "/admin.html#/rule/bargain",
        class: "bargain"
    }, {
        name: "买单砍价"
    }]; //面包屑;
    $scope.set = {
        times: ajaxSendFn({}, "/businesstimes/all", "GET").result,
        timeType: {
            "1001": "早市",
            "1002": "午市",
            "1003": "下午茶",
            "1004": "晚市",
            "1005": "宵夜"
        },
        periods: []
    };
    $scope.set.time = getSubtimes($scope.set.times, $scope.set.timeType);
    $scope.init = function () {
        var tem = $scope.view;
        $scope.view.data = {};
        $scope.view.data.dateType = tem.dateRangeCategory;


        if (tem.dateRangeCategory === "AROUND_FIX_DATE" || tem.dateRangeCategory === "MONTH_EFFECTIVE") {
            $scope.view.data.dateType = "AROUND_FIX_DATE";
            $scope.view.data.subType = tem.dateRangeCategory;
        }
        $scope.view.data[$scope.view.data.dateType] = {
            dateRange: tem.dateRange
        };
        $scope.view.dateRange = $scope.view.data[$scope.view.data.dateType].dateRange;
        if (tem.dateRange) {
            if (tem.dateRange.selectDates) {
                $scope.view.dateRange.subType = "MANUAL_SELECT";
                $scope.view.dateRange.selectDates = arrayMap($scope.view.dateRange.selectDates, function (data) {
                    return data.split(/\s+/)[0];
                });
            } else if (tem.dateRange.selectDays) {
                $scope.view.dateRange.subType = "MONTH_DAYS";
            } else {
                $scope.view.dateRange.subType = "WEEKLY_DAY";
            }
        }
    };
    $scope.operate = function (index) {
        if (index) {
            $scope.view.rule.detail.ALL.splice(index, 1);
            return;
        }
        $scope.view.rule.detail.ALL.push({});
    }
    $scope.settime = function (a, b) { //
        $scope.view.periods[a] = $scope.view.periods[a] ? null : b;
    }
    $scope.sendJsons = function () {
        var json = {
            "dateRange": {}
        };
        if ($scope.posts.allDay) {
            json.allDay = true;
        } else {
            json.periods = arrRemoveNullFN(angular.copy($scope.view.periods));
        }
        json.rule = angular.copy($scope.view.rule);
        json.dateRangeCategory = $scope.view.data.dateType;
        json.on = $scope.view.on;
        //有效期
        if (!$scope.view.data.dateType) {
            alert("还未选择有效期！");
            return;
        }

        if ($scope.view.data.dateType === "BIRTHDAY" && $scope.view.data.subType) {
            json.dateRangeCategory = $scope.view.data.subType;
        }
        //如果开始时间被修改过，并且小于今天，则报错
        if ($scope.view.data.dateType === "CONTINUOUS") {
            if (!$scope.view.dateRange.startDate || !$scope.view.dateRange.endDate) {
                alert("请填写开始和结束日期!");
                return;
            }
            if ($scope.view.dateRange.endDate < $scope.view.dateRange.startDate) {
                alert("结束日期不能小于开始日期!");
                return;
            } else {
                json.dateRange.startDate = $filter("date")($scope.view.dateRange.startDate, "yyyy-MM-dd 00:00:00");
                json.dateRange.endDate = $filter("date")($scope.view.dateRange.endDate, "yyyy-MM-dd 23:59:59");
            }
        } else if ($scope.view.data.dateType === "BIRTHDAY" && $scope.view.data.subType === "AROUND_FIX_DATE") {
            json.dateRange.beforeDays = $scope.view.dateRange.beforeDays || 0;
            json.dateRange.afterDays = $scope.view.dateRange.afterDays || 0;
        }

        json.dateRange.selectCategory = $scope.view.dateRange.selectCategory || 'NONE';
        if ($scope.view.dateRange.subType === "MANUAL_SELECT") {
            var arr = arrayMap(objectKeys($scope.view.dateRange.selectDates), function (data) {
                return data + " 00:00:00";
            });
            if (!isEmptyObject(arr)) {
                json.dateRange.selectDates = arr;
            } else {
                delete json.dateRange.selectDates;
            }
        } else if ($scope.view.dateRange.subType === "MONTH_DAYS") {
            var arr = arrayMap(objectKeys(mapFilter($scope.view.dateRange.selectDays, notNull)), parseInt);
            if (!isEmptyObject(arr)) {
                json.dateRange.selectDays = arr;
            } else {
                delete json.dateRange.selectDays;
            }
        } else if ($scope.view.dateRange.subType === "WEEKLY_DAY") {
            var arr = arrayMap(objectKeys(mapFilter($scope.view.dateRange.selectWeekDays, notNull)), parseInt);
            if (!isEmptyObject(arr)) {
                json.dateRange.selectWeekDays = arr;
            } else {
                delete json.dateRange.selectWeekDays;
            }
        }
        if ((json.dateRangeCategory !== "SELECTED_DATES") && (json.dateRange.selectCategory === 'EXCLUDE') && (objectCount(json.dateRange) == 1)) {
            alert("没有指定排除日期！");
            return;
        }

        //'指定日期'类型必须有数据
        if ((json.dateRangeCategory === "SELECTED_DATES") && (objectCount(json.dateRange) == 1)) {
            alert("没有指定日期！");
            return;
        }
        for (var s = 0; s < json.rule.detail.ALL.length; s++) {
            delete json.rule.detail.ALL[s].$$hashKey;
        }
        var data = ajaxSendFn(json, "/activity/bargain", "POST");
        if (data.code == 200) {
            alert("保存成功");
        } else {
            alert(data.message);
        }
    };
    var data = ajaxSendFn({}, "/activity/bargain", "GET");
    if (data.code == 200) {
        $scope.view = data.result;
        $scope.set.periods = angular.copy($scope.view.periods);
        $scope.view.periods = [];
        if ($scope.view.allDay) {
            $scope.view.periods = [];
            $scope.posts = {
                allDay: true
            };

        } else {
            angular.forEach($scope.set.time, function (data, idx) {
                if (!$scope.set.periods || $scope.set.periods.indexOf(idx) == -1) {
                    this.push(null);
                } else {
                    this.push(idx);
                }
            }, $scope.view.periods);
        }
        $scope.init();
    } else {
        $scope.view = {
            data: {},
            rule: {
                "detail": {
                    "ALL": []
                }
            },
            periods: []
        }
        $scope.operate();
    }
}]);
// 在线砍价
app.controller("RuleGrouponAddCtr", ["$scope", "$http", '$routeParams', "$filter", "$location", function ($scope, $http, $routeParams, $filter, $location) {
    $scope.config.breadset = [{ //
        name: "在线砍价",
        href: indexUrl + "/admin.html#/rule/groupon",
        class: "groupon"
    }, {
        name: "在线砍价"
    }]; //面包屑;
    if ($routeParams.id) {
        $scope.post = ajaxSendFn({}, "/activity/groupon/" + $routeParams.id, "GET").result || [];
        $scope.post.startTime = new Date($scope.post.startTime);
        $scope.post.endTime = new Date($scope.post.endTime);
        if ($scope.post.buyMinimum === false) {
            $scope.post.buyMinimum = "false";
        }
    } else {
        $scope.post = {
            buyMinimum: true,
            selfBuy: true,
            rule: {
                value: [{
                    count: 1
                }]
            },
            startTime: new Date(),
            picUrls: [{}]
            //endTime: new Date()
        }
    }
    $scope.view = {
        coupons: ajaxSendFn({}, "/coupon/usable", "GET").result,
        initTime: ($filter('date')(new Date(), "yyyy-MM-dd") + "T00:00"),
    };
    $scope.addFn = function () {
        $scope.post.rule.value.push({
            count: 1
        });
    };
    $scope.removeFn = function (index) {
        $scope.post.rule.value.splice(index, 1);
    };
    $scope.changeCoupon = function (dv) {
        if (dv.id) {
            for (var i = 0; i < $scope.view.coupons.length; i++) {
                if ($scope.view.coupons[i].id === dv.id) {
                    dv.name = $scope.view.coupons[i].name;
                    dv.category = "COUPON";
                    break;
                }
            }
        }
    };
    $scope.sendJsons = function () {
        if (!$scope.post.picUrl) {
            alert("请先上传图片");
            return;
        }
        var json = angular.copy($scope.post);
        var t = json.startTime;
        if (t.setDate(t.getDate() + 30) < json.endTime) {
            alert("时间期限不超过三十天");
            return
        }
        if (!$scope.view.check) {
            delete json.rule.min;
        }
        json.startTime = $filter('date')($scope.post.startTime.setSeconds(0), "yyyy-MM-dd HH:mm:ss");
        json.endTime = $filter('date')($scope.post.endTime.setSeconds(0), "yyyy-MM-dd HH:mm:ss");
        if (json.advertisement && !json.advertisement.id) {
            delete json.advertisement;
        }
        var url = "/activity/groupon";
        if ($routeParams.id) {
            url += "/" + $routeParams.id;
        }
        var data = ajaxSendFn(json, url, "POST");
        if (data.code == 200) {
            alert("操作成功");
            $location.path("/rule/groupon");
        } else {
            alert(data.message);
        }

    }
}]);
// 在线砍价
app.controller("RuleGrouponCtr", ["$scope", "$http", "$filter", "$document", "$compile", "$rootScope", function ($scope, $http, $filter, $document, $compile, $rootScope) {
    $scope.config.breadset = [{ //
        name: "在线砍价",
        href: indexUrl + "/admin.html#/rule/groupon",
        class: "groupon"
    }, {
        name: "在线砍价"
    }]; //面包屑;
    $scope.view = {
        list: ajaxSendFn({}, "/activity/groupon", "GET").result || []
    };
    $scope.stopFn = function (id) {
        var a = confirm("确认停止此活动？");
        if (a) {
            var data = ajaxSendFn({}, "/activity/groupon/" + id + "/stop", "POST");
            if (data.code == 200) {
                $scope.view.list = ajaxSendFn({}, "/activity/groupon", "GET").result || [];
            } else {
                alert(data.message);
            }
        }
    };
    $scope.removeFn = function (id) {
        var a = confirm("确认删除？");
        if (a) {
            var data = ajaxSendFn({}, "/activity/groupon/" + id, "DELETE");
            if (data.code == 200) {
                $scope.view.list = ajaxSendFn({}, "/activity/groupon", "GET").result || [];
            } else {
                alert(data.message);
            }
        }
    };
    $scope.copyFn = function (url) {
        var copyElement = angular.element('<span id="ngClipboardCopyId">' + url + '</span>');
        var body = $document.find('body').eq(0);
        body.append($compile(copyElement)($rootScope));

        var ngClipboardElement = angular.element(document.getElementById('ngClipboardCopyId'));
        console.log(ngClipboardElement);
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

}]);
// 评赏管理
app.controller("RuleCommentAddCtr", ["$scope", "$http", '$routeParams', "$filter", "$location", function ($scope, $http, $routeParams, $filter, $location) {
    $scope.config.breadset = [{ //
        name: "评赏管理",
        href: indexUrl + "/admin.html#/rule/comment",
        class: "comment"
    }, {
        name: "评赏管理"
    }]; //面包屑;
    if ($routeParams.id) {
        $scope.post = ajaxSendFn({}, "/activity/praise/" + $routeParams.id, "GET").result || [];
        $scope.post.startTime = new Date($scope.post.startTime);
        $scope.post.endTime = new Date($scope.post.endTime);
        if (!$scope.post.rule) {
            $scope.post.rule = [{
                participants: [{}],
                value: [{}]
            }];
        } else {
            for (var i = 0; i < $scope.post.rule.length; i++) {
                if ($scope.post.rule[i].limit) {
                    $scope.post.rule[i].limit = "1";
                }
                if (!$scope.post.rule[i].participants) {
                    $scope.post.rule[i].participants = [{}];
                }
                if (!$scope.post.rule[i].value) {
                    $scope.post.rule[i].value = [{}];
                }

            }
        }
        if (!$scope.post.redEnvelopes) {
            $scope.post.redEnvelopes = {
                value: [{}]
            }
        } else {
            if ($scope.post.redEnvelopes.limit) {
                $scope.post.redEnvelopes.limit = "1";
            }
        }
        if (!$scope.post.prize) {
            $scope.post.prize = {
                prizes: [{
                    value: [{}]
                }]
            }
        }
        // if (!$scope.post.defaultDishes) {
        //     $scope.post.defaultDishes = [""];
        // }
    } else {
        $scope.post = {
            //满多少钱赠券
            rule: [{
                participants: [{}],
                value: [{}]
            }],
            prize: {
                prizes: [{
                    value: [{}]
                }]
            },
            redEnvelopes: {
                value: [{}]
            },
            shareDays: 1
            //defaultDishes: [""]
            //startTime: new Date(),
            //endTime: new Date()
        }
    }
    $scope.view = {
        coupons: ajaxSendFn({}, "/coupon/usable", "GET").result || [],
        rewards: ajaxSendFn({}, "/reward/usable", "GET").result || [],
        initTime: $filter('date')(new Date(), "yyyy-MM-dd"),
        category: [],
        adsCategory: [{
            id: 'COUPONFREE',
            name: '免费领券'
        }, {
            id: 'LOTTERY',
            name: '抽奖'
        }]
    };
    if ($scope.view.coupons.length) {
        $scope.view.category.push({
            id: 'COUPON',
            name: "优惠券"
        });
    }
    if ($scope.view.rewards.length) {
        $scope.view.category.push({
            id: 'REWARD',
            name: '代用币'
        });
    }

    $scope.addFn = function (type) {
        if (type) {
            $scope.post.prize.prizes.push({
                value: [{}]
            });
            return;
        }
        $scope.post.rule.push({
            participants: [{}],
            value: [{}]
        });
    };
    $scope.removeFn = function (index, type) {
        if (type) {
            $scope.post.prize.prizes.splice(index, 1);
            return;
        }
        $scope.post.rule.splice(index, 1);
    };
    $scope.addImgFn = function () {
        $scope.post.picUrls.push({});
    };
    $scope.removeImgFn = function (index) {
        $scope.post.picUrls.splice(index, 1);
    };
    $scope.addCouponFn = function (item) {
        item.push({});
    };
    $scope.removeCouponFn = function (item, index) {
        item.splice(index, 1);
    };
    $scope.changeCoupon = function (dv) {
        if (dv.id) {
            for (var i = 0; i < $scope.view.coupons.length; i++) {
                if ($scope.view.coupons[i].id === dv.id) {
                    dv.name = $scope.view.coupons[i].name;
                    dv.category = "COUPON";
                    dv.count = 1;
                    break;
                }
            }
        }
    };
    $scope.changeReward = function (dv) {
        if (dv.id) {
            for (var i = 0; i < $scope.view.rewards.length; i++) {
                if ($scope.view.rewards[i].id === dv.id) {
                    dv.name = $scope.view.rewards[i].name;
                    dv.category = "REWARD";
                    dv.count = 1;
                    break;
                }
            }
        }
    };
    $scope.sendJsons = function () {
        if (!$scope.post.picUrl) {
            alert("请先上传图片");
            return;
        }
        var json = angular.copy($scope.post);
        //var t = json.startTime;
        //if (t.setDate(t.getDate() + 30) < json.endTime) {
        //    alert("时间期限不超过三十天");
        //    return
        //}
        if (JSON.stringify(json.rule) == '[{"participants":[{}],"value":[{}]}]' && JSON.stringify(json.prizes) == '[{"value":[{}]}]' && JSON.stringify(json.redEnvelopes) == '{"value":[{}]}') {
            alert("请先选择赠送的奖励");
            return;
        }
        if (JSON.stringify(json.rule) == '[{"participants":[{}],"value":[{}]}]') {
            delete json.rule;
        } else {
            for (var i = 0; i < $scope.post.rule.length; i++) {
                if (!$scope.post.rule[i].participants[0].count) {
                    delete json.rule[i].participants;
                }
                if (!$scope.post.rule[i].value[0].count) {
                    delete json.rule[i].value;
                }
            }
        }
        if (JSON.stringify(json.prize.prizes) == '[{"value":[{}]}]') {
            delete json.prize;
        }
        if (!$scope.post.all || JSON.stringify(json.redEnvelopes) == '{"value":[{}]}') {
            delete json.redEnvelopes;
        }

        if (json.startTime) json.startTime = ($filter('date')($scope.post.startTime, "yyyy-MM-dd")) + " 00:00:00";
        if (json.endTime) json.endTime = ($filter('date')($scope.post.endTime, "yyyy-MM-dd")) + " 00:00:00";
        if (json.prize) {

        }
        var url = "/activity/praise";
        if ($routeParams.id) {
            url += "/" + $routeParams.id;
        }
        var data = ajaxSendFn(json, url, "POST");
        if (data.code == 200) {
            alert("操作成功");
            $location.path("/rule/comment");
        } else {
            alert(data.message);
        }

    }
}]);
app.controller("RuleCommentCtr", ["$scope", "$http", "$filter", "$document", "$compile", "$rootScope", function ($scope, $http, $filter, $document, $compile, $rootScope) {
    $scope.config.breadset = [{ //
        name: "评赏管理",
        href: indexUrl + "/admin.html#/rule/comment",
        class: "comment"
    }, {
        name: "评赏管理"
    }]; //面包屑;
    $scope.view = {
        list: ajaxSendFn({}, "/activity/praise", "GET").result || [],
    };
    $scope.stopFn = function (id) {
        var a = confirm("确认停止此活动？");
        if (a) {
            var data = ajaxSendFn({}, "/activity/praise/" + id + "/stop", "POST");
            if (data.code == 200) {
                $scope.view.list = ajaxSendFn({}, "/activity/praise", "GET").result || [];
            } else {
                alert(data.message);
            }
        }
    };
    $scope.removeFn = function (id) {
        var a = confirm("确认删除？");
        if (a) {
            var data = ajaxSendFn({}, "/activity/praise/" + id, "DELETE");
            if (data.code == 200) {
                $scope.view.list = ajaxSendFn({}, "/activity/praise", "GET").result || [];
            } else {
                alert(data.message);
            }
        }
    };
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
}]);
app.controller("RuleLotteryAddCtr", ["$scope", "$http", '$routeParams', "$filter", "$location", function ($scope, $http, $routeParams, $filter, $location) {
    $scope.config.breadset = [{ //
        name: "抽奖管理",
        href: indexUrl + "/admin.html#/rule/lottery",
        class: "lottery"
    }, {
        name: "抽奖管理"
    }]; //面包屑;

    $scope.view = {
        coupons: ajaxSendFn({}, "/coupon/usable", "GET").result || [],
        rewards: ajaxSendFn({}, "/reward/usable", "GET").result || [],
        category: [],
        date: {},
        dateRange: {},
        // rules: ajaxSendFn({}, "/activity/ads/category/6004", "GET").result || [],
        type: [{
                id: 'LIMIT',
                name: '满人抽奖',
                text: '* 购买人数达活动要求后，即刻开奖'
            }
            // ,{id: 'LIVING', name: '实时抽奖',text:'* 服务员通过捷账宝实时开奖，服务员控制奖项·奖品及中奖人数'},
            // {id: 'TIMING', name: '定时抽奖',text:'* 由系统在指定时间自动开奖'}
        ]
    };

    if ($routeParams.id) {
        $scope.post = ajaxSendFn({}, "/activity/lottery/" + $routeParams.id, "GET").result || [];
        if (!$scope.post.tags) {
            $scope.post.tags = [];
        }
        $scope.view.date.dateType = $scope.post.dateRangeCategory;
        if ($scope.post.dateRangeCategory === "AROUND_FIX_DATE" || $scope.post.dateRangeCategory === "MONTH_EFFECTIVE") {
            $scope.view.date.dateType = "AROUND_FIX_DATE";
            $scope.view.date.subType = $scope.post.dateRangeCategory;
        }
        $scope.view.date[$scope.view.date.dateType] = {
            dateRange: $scope.post.dateRange
        };
        $scope.view.dateRange = $scope.view.date[$scope.view.date.dateType].dateRange;
        if ($scope.post.dateRange) {
            if ($scope.post.dateRange.selectDates) {
                $scope.view.dateRange.subType = "MANUAL_SELECT";
                $scope.view.dateRange.selectDates = arrayMap($scope.view.dateRange.selectDates, function (date) {
                    return date.split(/\s+/)[0];
                });
            } else if ($scope.post.dateRange.selectDays) {
                $scope.view.dateRange.subType = "MONTH_DAYS";
            } else if ($scope.post.dateRange.selectWeeks) {
                $scope.view.dateRange.subType = "WEEKLY_DAY";
            }
        }

    } else {
        $scope.post = {
            lotteryCategory: 'LIMIT',
            followLimit: true,
            tags: [],
            rule: {
                "detail": {
                    "ALL": [{
                        value: [{}],
                        participants: [{}]
                    }]
                }
            },
            prize: {
                // "awards": [{}],
                "prizes": [{
                    "sequence": 1,
                    "value": [{}]
                }]
            }
        };
    }

    if ($scope.view.coupons.length) {
        $scope.view.category.push({
            id: 'COUPON',
            name: "优惠券"
        });
    }
    if ($scope.view.rewards.length) {
        $scope.view.category.push({
            id: 'REWARD',
            name: '代用币'
        });
    }

    $scope.addFn = function () {
        $scope.post.prize.prizes.push({
            "sequence": $scope.post.prize.prizes.length + 1,
            value: [{}]
        });
    };
    $scope.removeFn = function (index) {
        $scope.post.prize.prizes.splice(index, 1);
    };
    $scope.tagSend = function () {
        if ($scope.view.text.length < 6 && $scope.view.text.length > 2) {
            $scope.post.tags.push($scope.view.text);
            $scope.view.text = "";
            $scope.view.error = "";
        } else {
            $scope.view.error = "三到五个字符之间";
        }
    };
    $scope.addCouponFn = function (item) {
        item.push({});
    };
    $scope.removeCouponFn = function (item, index) {
        item.splice(index, 1);
    };
    $scope.changeCoupon = function (dv) {
        if (dv.id) {
            for (var i = 0; i < $scope.view.coupons.length; i++) {
                if ($scope.view.coupons[i].id === dv.id) {
                    dv.name = $scope.view.coupons[i].name;
                    dv.category = "COUPON";
                    dv.count = 1;
                    break;
                }
            }
        }
    };
    $scope.changeReward = function (dv) {
        if (dv.id) {
            for (var i = 0; i < $scope.view.rewards.length; i++) {
                if ($scope.view.rewards[i].id === dv.id) {
                    dv.name = $scope.view.rewards[i].name;
                    dv.category = "REWARD";
                    dv.count = 1;
                    break;
                }
            }
        }
    };
    $scope.sendJsons = function () {
        if (!$scope.post.picUrl) {
            alert("请先上传图片");
            return;
        }
        var json = angular.copy($scope.post);
        json.dateRange = {};
        json.dateRangeCategory = $scope.view.date.dateType;
        // delete json.date;
        //start
        if ($scope.view.date.dateType === "CONTINUOUS") {
            if (!$scope.view.dateRange.startDate || !$scope.view.dateRange.endDate) {
                alert("请填写开始和结束日期!");
                return;
            }
            if ($scope.view.dateRange.endDate < $scope.view.dateRange.startDate) {
                alert("结束日期不能小于开始日期!");
                return;
            } else {
                json.dateRange.startDate = $filter("date")($scope.view.dateRange.startDate, "yyyy-MM-dd 00:00:00");
                json.dateRange.endDate = $filter("date")($scope.view.dateRange.endDate, "yyyy-MM-dd 23:59:59");
            }
        } else if ($scope.view.date.dateType === "BIRTHDAY" && $scope.view.date.subType === "AROUND_FIX_DATE") {
            json.dateRange.beforeDays = $scope.view.dateRange.beforeDays || 0;
            json.dateRange.afterDays = $scope.view.dateRange.afterDays || 0;
        }

        json.dateRange.selectCategory = $scope.view.dateRange.selectCategory || 'NONE';
        if ($scope.view.dateRange.subType === "MANUAL_SELECT") {
            var arr = arrayMap(objectKeys($scope.view.dateRange.selectDates), function (date) {
                return date + " 00:00:00";
            });
            if (!isEmptyObject(arr)) {
                json.dateRange.selectDates = arr;
            }
        } else if ($scope.view.dateRange.subType === "MONTH_DAYS") {
            var arr = arrayMap(objectKeys(mapFilter($scope.view.dateRange.selectDays, notNull)), parseInt);
            if (!isEmptyObject(arr)) {
                json.dateRange.selectDays = arr;
            }
        } else if ($scope.view.dateRange.subType === "WEEKLY_DAY") {
            var arr = arrayMap(objectKeys(mapFilter($scope.view.dateRange.selectWeekDays, notNull)), parseInt);
            if (!isEmptyObject(arr)) {
                json.dateRange.selectWeekDays = arr;
            }
        }

        //选择排除，必须要指定排队日期
        if ((json.dateRangeCategory !== "SELECTED_DATES") && (json.dateRange.selectCategory === 'EXCLUDE') && (objectCount(json.dateRange) == 1)) {
            alert("没有指定排除日期！");
            return;
        }

        //'指定日期'类型必须有数据
        if ((json.dateRangeCategory === "SELECTED_DATES") && (objectCount(json.dateRange) == 1)) {
            alert("没有指定日期！");
            return;
        }
        //end
        if (JSON.stringify(json.prize.prizes) == '[{ "sequence": 1,"value":[{}]}]') {
            alert("请先选择赠送的奖励");
            return;
        }
        if (json.advertisement && !json.advertisement.id) {
            delete json.advertisement;
        }
        var url = "/activity/lottery";
        if ($routeParams.id) {
            url += "/" + $routeParams.id;
        }
        var data = ajaxSendFn(json, url, "POST");
        if (data.code == 200) {
            alert("操作成功");
            $location.path("/rule/lottery");
        } else {
            alert(data.message);
        }
    }
}]);
app.controller("RuleLotteryCtr", ["$scope", "$http", "$filter", "$document", "$compile", "$rootScope", function ($scope, $http, $filter, $document, $compile, $rootScope) {
    $scope.config.breadset = [{ //
        name: "抽奖管理",
        href: indexUrl + "/admin.html#/rule/lottery",
        class: "lottery"
    }, {
        name: "抽奖管理"
    }]; //面包屑;
    $scope.view = {
        list: ajaxSendFn({}, "/activity/lottery", "GET").result || [],
    };

    $scope.stateFn = function (id, state) {
        var a = confirm("确认停止此活动？");
        if (a) {
            var data = ajaxSendFn({}, "/activity/lottery/" + id + "/" + state, "POST");
            if (data.code == 200) {
                $scope.view.list = ajaxSendFn({}, "/activity/lottery", "GET").result || [];
            } else {
                alert(data.message);
            }
        }
    };
    $scope.removeFn = function (id) {
        var a = confirm("确认删除？");
        if (a) {
            var data = ajaxSendFn({}, "/activity/lottery/" + id, "DELETE");
            if (data.code == 200) {
                $scope.view.list = ajaxSendFn({}, "/activity/lottery", "GET").result || [];
            } else {
                alert(data.message);
            }
        }
    };
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
}]);
app.controller("RuleGratuityAddCtr", ["$scope", "$http", '$routeParams', "$filter", "$location", function ($scope, $http, $routeParams, $filter, $location) {
    $scope.config.breadset = [{ //
        name: "打赏管理",
        href: indexUrl + "/admin.html#/rule/gratuity",
        class: "gratuity"
    }, {
        name: "打赏管理"
    }]; //面包屑;

    $scope.view = {
        gratuities: ajaxSendFn({}, "/activity/gratuity/gratuities", "GET").result,
        shops: ajaxSendFn({
            state: 1002
        }, "/shops", "GET").result,
        factor: ajaxSendFn({}, "/activity/factor", "GET").result,
        allocate: ajaxSendFn({}, "/activity/allocate/8002", "GET").result || [],
        category: [],
        date: {},
        dateRange: {},
    };
    if (!$scope.view.factor) {
        alert("没有可用的券");
        $scope.view.factor = {};
    }
    if (!$scope.view.factor.MEMBERGRADE) {
        $scope.view.factor.MEMBERGRADE = [];
    }
    $scope.view.factor.MEMBERGRADE.push({
        id: "MEMBER",
        name: "任一会员"
    });
    $scope.view.factor.MEMBERGRADE.push({
        id: "ALL",
        name: "全员"
    });
    if ($routeParams.id) {
        $scope.post = ajaxSendFn({}, "/activity/gratuity/" + $routeParams.id, "GET").result || [];
        var detailkey = Object.keys($scope.post.rule.detail)

        $scope.view.date.dateType = $scope.post.dateRangeCategory;
        if ($scope.post.dateRangeCategory === "AROUND_FIX_DATE" || $scope.post.dateRangeCategory === "MONTH_EFFECTIVE") {
            $scope.view.date.dateType = "AROUND_FIX_DATE";
            $scope.view.date.subType = $scope.post.dateRangeCategory;
        }
        $scope.view.date[$scope.view.date.dateType] = {
            dateRange: $scope.post.dateRange
        };
        $scope.view.dateRange = $scope.view.date[$scope.view.date.dateType].dateRange;
        if ($scope.post.dateRange) {
            if ($scope.post.dateRange.selectDates) {
                $scope.view.dateRange.subType = "MANUAL_SELECT";
                $scope.view.dateRange.selectDates = arrayMap($scope.view.dateRange.selectDates, function (date) {
                    return date.split(/\s+/)[0];
                });
            } else if ($scope.post.dateRange.selectDays) {
                $scope.view.dateRange.subType = "MONTH_DAYS";
            } else if ($scope.post.dateRange.selectWeeks) {
                $scope.view.dateRange.subType = "WEEKLY_DAY";
            }
        }
        var details = [];
        if ($scope.post.rule.detail) {
            for (var i in $scope.post.rule.detail) {
                var detail = {};
                detail.id = i;
                detail.value = $scope.post.rule.detail[i][0];
                if (!detail.value.allocates) {
                    detail.value.allocates = [{}]
                }

                details.push(detail)
            }
            $scope.post.rule.detail = details;
        } else {
            $scope.post.rule = {
                "detail": [{
                    id: "ALL",
                    value: {
                        participants: [{}],
                        value: [{}],
                        allocates: [{}]
                    }
                }]
            }


        }
        //    00
        var shop = [];
        for (var i in $scope.view.shops) {
            if ($scope.post.shops.includes($scope.view.shops[i].id)) {
                shop.push($scope.view.shops[i].id);
            } else {
                shop.push(null);

            }
        }
        $scope.post.shops = shop;

    } else {
        $scope.post = {
            rule: {
                "detail": [{
                    id: "ALL",
                    value: {
                        participants: [{}],
                        value: [{}],
                        allocates: [{}]
                    }
                }]
            },
            shops: []
        };
    }
    $scope.$watch('view.shopAll', function (newVal, oldVal) {
        if (newVal !== oldVal) {
            if (newVal) {
                angular.forEach($scope.view.shops, function (value, key) {
                    this[key] = value.id;
                }, $scope.post.shops)
            } else {
                $scope.post.shops = [];
            }
        }
    });
    if ($scope.view.factor.COUPON) {
        $scope.view.category.push({
            id: 'COUPON',
            name: "优惠券"
        });
    }
    if ($scope.view.factor.REWARD) {
        $scope.view.category.push({
            id: 'REWARD',
            name: '代用币'
        });
    }

    $scope.addFn = function () {
        $scope.post.rule.detail.push({
            id: "",
            value: {
                participants: [{}],
                value: [{}]
            }
        });
    };
    $scope.removeFn = function (index) {
        $scope.post.rule.detail.splice(index, 1);
    };
    $scope.addCouponFn = function (item) {
        item.push({});
    };
    $scope.removeCouponFn = function (item, index) {
        item.splice(index, 1);
    };
    $scope.changeCoupon = function (dv) {
        if (dv.id) {
            for (var i = 0; i < $scope.view.factor.COUPON.length; i++) {
                if ($scope.view.factor.COUPON[i].id === dv.id) {
                    dv.name = $scope.view.factor.COUPON[i].name;
                    dv.category = "COUPON";
                    dv.count = 1;
                    break;
                }
            }
        }
    };
    $scope.changeReward = function (dv) {
        if (dv.id) {
            for (var i = 0; i < $scope.view.factor.REWARD.length; i++) {
                if ($scope.view.factor.REWARD[i].id === dv.id) {
                    dv.name = $scope.view.factor.REWARD[i].name;
                    dv.category = "REWARD";
                    dv.count = 1;
                    break;
                }
            }
        }
    };
    $scope.sendJsons = function () {
        var json = angular.copy($scope.post);
        json.dateRange = {};
        json.dateRangeCategory = $scope.view.date.dateType;

        if ($scope.view.date.dateType === "CONTINUOUS") {
            if (!$scope.view.dateRange.startDate || !$scope.view.dateRange.endDate) {
                alert("请填写开始和结束日期!");
                return;
            }
            if ($scope.view.dateRange.endDate < $scope.view.dateRange.startDate) {
                alert("结束日期不能小于开始日期!");
                return;
            } else {
                json.dateRange.startDate = $filter("date")($scope.view.dateRange.startDate, "yyyy-MM-dd 00:00:00");
                json.dateRange.endDate = $filter("date")($scope.view.dateRange.endDate, "yyyy-MM-dd 23:59:59");
            }
        } else if ($scope.view.date.dateType === "BIRTHDAY" && $scope.view.date.subType === "AROUND_FIX_DATE") {
            json.dateRange.beforeDays = $scope.view.dateRange.beforeDays || 0;
            json.dateRange.afterDays = $scope.view.dateRange.afterDays || 0;
        }

        json.dateRange.selectCategory = $scope.view.dateRange.selectCategory || 'NONE';
        if ($scope.view.dateRange.subType === "MANUAL_SELECT") {
            var arr = arrayMap(objectKeys($scope.view.dateRange.selectDates), function (date) {
                return date + " 00:00:00";
            });
            if (!isEmptyObject(arr)) {
                json.dateRange.selectDates = arr;
            }
        } else if ($scope.view.dateRange.subType === "MONTH_DAYS") {
            var arr = arrayMap(objectKeys(mapFilter($scope.view.dateRange.selectDays, notNull)), parseInt);
            if (!isEmptyObject(arr)) {
                json.dateRange.selectDays = arr;
            }
        } else if ($scope.view.dateRange.subType === "WEEKLY_DAY") {
            var arr = arrayMap(objectKeys(mapFilter($scope.view.dateRange.selectWeekDays, notNull)), parseInt);
            if (!isEmptyObject(arr)) {
                json.dateRange.selectWeekDays = arr;
            }
        }

        //选择排除，必须要指定排队日期
        if ((json.dateRangeCategory !== "SELECTED_DATES") && (json.dateRange.selectCategory === 'EXCLUDE') && (objectCount(json.dateRange) == 1)) {
            alert("没有指定排除日期！");
            return;
        }

        //'指定日期'类型必须有数据
        if ((json.dateRangeCategory === "SELECTED_DATES") && (objectCount(json.dateRange) == 1)) {
            alert("没有指定日期！");
            return;
        }
        //end
        var detail = {};
        console.log(json.rule.detail)
        for (var i in json.rule.detail) {
            detail[json.rule.detail[i].id] = [json.rule.detail[i].value];
        }
        json.rule.detail = detail;
        json.shops = arrRemoveNullFN($scope.post.shops);

        var url = "/activity/gratuity";
        if ($routeParams.id) {
            url += "/" + $routeParams.id;
        }
        var data = ajaxSendFn(json, url, "POST");
        if (data.code == 200) {
            alert("操作成功");
            $location.path("/rule/gratuity");
        } else {
            alert(data.message);
        }
    }
}]);
app.controller("RuleGratuityCtr", ["$scope", "$http", "$filter", "$document", "$compile", "$rootScope", function ($scope, $http, $filter, $document, $compile, $rootScope) {
    $scope.config.breadset = [{ //
        name: "打赏管理",
        href: indexUrl + "/admin.html#/rule/gratuity",
        class: "gratuity"
    }, {
        name: "打赏管理"
    }]; //面包屑;
    $scope.view = {
        list: ajaxSendFn({}, "/activity/gratuity", "GET").result || {},
    };

    $scope.stateFn = function (id, state) {
        var a = confirm("确认" + (state == 'on' ? '上线' : '下线') + "此活动？");
        if (a) {
            var data = ajaxSendFn({}, "/activity/gratuity/" + id + "/" + state, "POST");
            if (data.code == 200) {
                $scope.view.list = ajaxSendFn({}, "/activity/gratuity", "GET").result || [];
            } else {
                alert(data.message);
            }
        }
    };
    $scope.removeFn = function (id) {
        var a = confirm("确认删除？");
        if (a) {
            var data = ajaxSendFn({}, "/activity/gratuity/" + id, "DELETE");
            if (data.code == 200) {
                $scope.view.list = ajaxSendFn({}, "/activity/gratuity", "GET").result || [];
            } else {
                alert(data.message);
            }
        }
    };
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
    $scope.pageChange = function () {
        var json = {
            page: $scope.view.list.page,
            count: $scope.view.list.count
        };
        $scope.view.list = ajaxSendFn(json, "/activity/gratuity", "GET").result || {};
    };
}]);
app.controller("RuleAdsCtr", ["$scope", "$http", "$filter", "$document", "$compile", "$rootScope", function ($scope, $http, $filter, $document, $compile, $rootScope) {
    $scope.config.breadset = [{ //
        name: "广告管理",
        href: indexUrl + "/admin.html#/rule/ads",
        class: "ads"
    }, {
        name: "广告管理"
    }]; //面包屑;

    $scope.view = {
        list: ajaxSendFn({}, "/placards", "GET").result || [],
        type: ConsumeTypeCategory
    };
    $scope.pageChange = function () {
        var json = {
            page: $scope.view.list.page,
            count: $scope.view.list.count
        };
        $scope.view.list = ajaxSendFn(json, "/placards", "GET").result || [];
    };
    $scope.remove = function (index) {
        if (!confirm("一旦删除将不可恢复，是否确认删除？")) return false;
        var data = ajaxSendFn({}, "/placards/" + $scope.view.list.items[index].id, "DELETE");
        if (data.code == 200) { //
            $scope.view.list.items.splice(index, 1);
        } else { //
            alert(data.message);
        }
    };

}]);
app.controller("RuleAdsAddCtr", ["$scope", "$http", '$routeParams', "$filter", "$location", function ($scope, $http, $routeParams, $filter, $location) {
    $scope.config.breadset = [{ //
        name: "广告管理",
        href: indexUrl + "/admin.html#/rule/ads",
        class: "ads"
    }, {
        name: "广告管理"
    }]; //面包屑;
    $scope.view = {
        type: {
            '6004': '送券',
            '6015': '套餐',
            '6006': '特价',
            '6012': '抵扣',
            '6014': '满减',
            '6005': '打折',
            // '6040': '凑单',
            '6041': '砍价',
            '6007': '消费返券',
            '6002': '充值',
            '6001': '入会及升级',
            // '6031': '升级赠送',
            '6003': '积分兑换',
            '6050': '评赏',
            '6051': '抽奖'
        }
    };
    if ($routeParams.id) {
        $scope.post = ajaxSendFn({}, "/placards/" + $routeParams.id, "GET").result;
        $scope.view.rules = ajaxSendFn({}, "/placards/activity/category/" + $scope.post.activityCategory, "GET").result || [];
        if ($scope.post.activityId) {
            $scope.view.rules = ajaxSendFn({}, "/placards/activity/category/" + $scope.post.activityCategory, "GET").result || [];
            $scope.view.check = "false";
        } else {
            $scope.view.check = "true";

        }
    }

    $scope.changeFn = function (key) {
        $scope.view.rules = ajaxSendFn({}, "/placards/activity/category/" + key, "GET").result || []
    };
    $scope.sendJsons = function () {
        var json = angular.copy($scope.post);
        if (json.type == '200') {
            delete json.activityId;
            delete json.activityCategory;
        }
        if (!json.transversePicUrl) {
            alert("请先选择图片");
            return;
        }
        if (json.type == '100' && (!json.activityCategory || !json.activityId)) {
            alert("请先选择活动");
            return;
        }
        delete json.$$hashKey;
        if ($routeParams.id) {
            postsend = ajaxSendFn(json, "/placards/" + $scope.post.id, "PUT", 1);
        } else {
            postsend = ajaxSendFn(json, "/placards", "POST", 1);
        }
        if (postsend.code == 200) {
            alert("保存成功");
            $location.path("/rule/ads");
        } else {
            alert(postsend.message);
        }
    }

}]);
app.controller("RuleGratuitiesCtr", ["$scope", "$http", "$filter", "$document", "$compile", "$rootScope", function ($scope, $http, $filter, $document, $compile, $rootScope) {
    $scope.config.breadset = [{ //
        name: "打赏管理",
        href: indexUrl + "/admin.html#/rule/gratuities",
        class: "gratuities"
    }, {
        name: "打赏管理"
    }]; //面包屑;

    $scope.view = {
        list: ajaxSendFn({}, "/gratuities", "GET").result || {},
    };
    $scope.post = {};
    $scope.pageChange = function () {
        var json = {
            page: $scope.view.list.page,
            count: $scope.view.list.count
        };
        $scope.view.list = ajaxSendFn(json, "/gratuities", "GET").result || [];
    };
    $scope.remove = function (index) {
        if (!confirm("一旦删除将不可恢复，是否确认删除？")) return false;
        var data = ajaxSendFn({}, "/gratuities/gratuity/" + $scope.view.list.items[index].id, "DELETE");
        if (data.code == 200) { //
            $scope.view.list.items.splice(index, 1);
        } else { //
            alert(data.message);
        }
    };
    $scope.openFn = function (index) {
        if (typeof (index) === 'number') {
            $scope.post = $scope.view.list.items[index];
        } else {
            $scope.post = {};
        }
        $("#gratuities").modal("show")
    }
    $scope.sendJsons = function () {
        var json = angular.copy($scope.post);
        if (!json.ico) {
            alert("请先选择图片");
            return;
        }
        delete json.$$hashKey;
        if ($scope.post.id) {
            postsend = ajaxSendFn(json, "/gratuities/gratuity/" + $scope.post.id, "PUT", 1);
        } else {
            postsend = ajaxSendFn(json, "/gratuities", "POST", 1);
        }
        if (postsend.code == 200) {
            $("#gratuities").modal("hide");
            $scope.view.list = ajaxSendFn({
                page: $scope.view.list.page,
                count: $scope.view.list.count
            }, "/gratuities", "GET").result || [];
        } else {
            alert(postsend.message);
        }
    }


}]);
app.controller("RuleTagsCtr", ["$scope", "$http", "$filter", "$document", "$compile", "$rootScope", function ($scope, $http, $filter, $document, $compile, $rootScope) {
    $scope.config.breadset = [{ //
        name: "评价标签管理",
        href: indexUrl + "/admin.html#/rule/tags",
        class: "tags"
    }, {
        name: "打赏管理"
    }]; //面包屑;

    $scope.view = {
        list: ajaxSendFn({}, "/comments/tag/902", "GET").result || {},
    };
    if ($scope.view.list.items) {
        $scope.view.list.items = $filter('orderBy')($scope.view.list.items, '-score');
    }
    $scope.post = {};
    $scope.pageChange = function () {
        var json = {
            page: $scope.view.list.page,
            count: $scope.view.list.count
        };
        $scope.view.list = ajaxSendFn(json, "/comments/tag/902", "GET").result || [];
    };
    $scope.remove = function (index) {
        if (!confirm("一旦删除将不可恢复，是否确认删除？")) return false;
        var data = ajaxSendFn({}, "/comments/tag/" + $scope.view.list.items[index].id, "DELETE");
        if (data.code == 200) { //
            $scope.view.list.items.splice(index, 1);
        } else { //
            alert(data.message);
        }
    };
    $scope.openFn = function (index) {
        if (typeof (index) === 'number') {
            $scope.post = $scope.view.list.items[index];
        } else {
            $scope.post = {};
        }
        $("#tags").modal("show")
    }
    $scope.sendJsons = function () {
        var json = angular.copy($scope.post);
        if ($scope.post.id) {
            postsend = ajaxSendFn(json, "/comments/tag/" + $scope.post.id, "PUT", 1);
        } else {
            postsend = ajaxSendFn(json, "/comments/tag/902", "POST", 1);
        }
        if (postsend.code == 200) {
            $("#tags").modal("hide");
            $scope.view.list = ajaxSendFn({}, "/comments/tag/902", "GET").result || [];
        } else {
            alert(postsend.message);
        }
    }


}]);
app.controller("tasksCtr", ["$scope", "$http", "$filter", "$document", "$compile", "$rootScope", function ($scope, $http, $filter, $document, $compile, $rootScope) {
    $scope.config.breadset = [{ //
        name: "任务管理",
        href: indexUrl + "/admin.html#/rule/tasks",
        class: "tasks"
    }, {
        name: "任务管理"
    }]; //面包屑;
    $scope.shops = ajaxSendFn({
        "state": "1002"
    }, "/shops", "GET").result || []
    $scope.view = {
        list: ajaxSendFn({}, "/tasks", "GET").result || {},
        coupons: ''
    };
    $scope.coupons = ajaxSendFn({}, "/coupon/usable", "GET").result || {}
    for (var i = 0; i < $scope.shops.length; i++) {
        for (var k = 0; k < $scope.view.list.length; k++) {
            if ($scope.view.list[k].shopId == $scope.shops[i].id) {
                $scope.view.list[k].shopName = $scope.shops[i].name
            }

        }
    }
    if ($scope.view.list.items) {
        $scope.view.list.items = $filter('orderBy')($scope.view.list.items, '-score');
    }
    $scope.post = {};
    $scope.pageChange = function () {
        var json = {
            page: $scope.view.list.page,
            count: $scope.view.list.count
        };
        $scope.view.list = ajaxSendFn(json, "/comments/tag/902", "GET").result || [];
    };
    $scope.remove = function (index) {
        if (!confirm("一旦删除将不可恢复，是否确认删除？")) return false;
        var data = ajaxSendFn({}, "/tasks/" + $scope.view.list.items[index].id, "DELETE");
        if (data.code == 200) { //
            $scope.view.list.items.splice(index, 1);
        } else { //
            alert(data.message);
        }
    };
    $scope.tasksTurn = function (index, state) { //券上线，下线
        var data = ajaxSendFn({}, "/tasks/" + $scope.view.list.items[index].id + "/" + state, "POST");
        if (data.code == 200) {
            alert("操作成功");
            $scope.view.list.items[index].on = !$scope.view.list.items[index].on;
        } else {
            alert(data.message)
        }
    }
    $scope.openFn = function (index) {
        $("#addtasks").modal("show")
    }
    $scope.editFn = function (item) {
        $scope.post = item
        console.log($scope.post)
        for (var i = 0; i < $scope.coupons.length; i++) {
            if ($scope.coupons[i].id == $scope.post.redEnvelope.benefits[0].id) {
                $scope.view.coupons = $scope.coupons[i]
                console.log($scope.coupons[i])
            }
        }
        console.log($scope.coupons)

        $("#edittasks").modal("show")

        // $scope.posts = ajaxSendFn({}, "/tasks/"+id, "GET").result || []
    }
    $scope.detailFn = function (item) {
        $scope.post = item
        console.log($scope.post)
        for (var i = 0; i < $scope.coupons.length; i++) {
            if ($scope.coupons[i].id == $scope.post.redEnvelope.benefits[0].id) {
                $scope.view.coupons = $scope.coupons[i]
                console.log($scope.coupons[i])
            }
        }
        console.log($scope.coupons)

        $("#detailtasks").modal("show")

        // $scope.posts = ajaxSendFn({}, "/tasks/"+id, "GET").result || []
    }
    $scope.sendJsons = function (id) {
        delete $scope.view.coupons.alias
        delete $scope.view.coupons.code
        $scope.view.coupons.category = "COUPON"
        $scope.view.coupons.count = 1
        $scope.post.redEnvelope = {
            "benefits": [$scope.view.coupons]
        }
        var json = angular.copy($scope.post);
        if (id) {
            var postsend = ajaxSendFn(json, "/tasks/" + id, "PUT");
        } else {
            var postsend = ajaxSendFn(json, "/tasks", "POST");
        }

        if (postsend.code == 200) {
            alert("操作成功");
            $("#addtasks").modal("hide");
            $("#edittasks").modal("hide");
            $scope.view.list = ajaxSendFn({}, "/tasks", "GET").result || [];
        } else {
            alert(postsend.message);
        }
    }


}]);
// 不参与项
app.controller("RuleNonParticipationCtr", ["$scope", "$http", "$filter", "$document", "$compile", "$rootScope", function ($scope, $http, $filter, $document, $compile, $rootScope) {
    $scope.config.breadset = [{ //
        name: "非参与项管理",
        href: indexUrl + "/admin.html#/rule/nonParticipation",
        class: "nonParticipation"
    }, {
        name: "非参与项"
    }]; //面包屑;
    $scope.view = {};
    $scope.kinds = [];
    $scope.view.nonParticipation = ajaxSendFn({}, "/nonParticipation", "GET").result; //非参与项
    if ($scope.view.nonParticipation.items.length > 0) {
        $scope.view.dishes = $scope.view.nonParticipation.items[0].dishes;
        $scope.view.kinds = $scope.view.nonParticipation.items[0].kinds;
        $scope.view.setMeals = $scope.view.nonParticipation.items[0].setMeals;
    }
    // $scope.view.factor = ajaxSendFn({}, "/nonParticipation/factor", "GET").result; //非参与项
    console.log('获取到的数据')
    console.log($scope.view.nonParticipation)

    $scope.view.shops = ajaxSendFn({
        state: 1002
    }, "/shops", "GET").result;
    $scope.view.category = [];
    if ($scope.view.factor) {
        if ($scope.view.factor.CATEGORY) {
            $scope.view.category.push({
                id: 'CATEGORY',
                name: "品类"
            });
        }
        if ($scope.view.factor.DISHES) {
            $scope.view.category.push({
                id: 'DISHES',
                name: '菜品'
            });
        }
        if ($scope.view.factor.SETMEAL) {
            $scope.view.category.push({
                id: 'SETMEAL',
                name: '套餐'
            });
        }
    }
    $scope.edit = function (item) {
        $("#editModal").modal("show");
        // $scope.shopClick(0);
        $scope.editItemArr = [];
        if (item) {
            $scope.editItemArr[0] = item;
        }
        let ccontent = $scope.view.nonParticipation.content;
        $scope.view.nonParticipation = {
            content: ccontent,
            items: $scope.editItemArr
        };
    }

    $scope.openFn = function (item) {
        if ($scope.view.nonParticipation) {
            $scope.post = $scope.view.nonParticipation;
            if ($scope.post.items) {

            } else {
                $scope.post.items = [{}];
            }
        } else {
            $scope.post = {
                items: [{}]
            };
        }
        $("#add").modal("show");

    }
    $scope.addFn = function () {
        $scope.post.items.push({});
    };
    $scope.removeFn = function (i) {
        $scope.post.items.splice(i, 1);
    }
    $scope.sendEditJsons = function () {
        var url = "/nonParticipation";
        var method = "POST";
        var json = {};
        json.content = $scope.post.content;
        json.items = [];
        // 遍历
        console.log($scope.view.nonParticipation.items)
        for (var i = 0, len = $scope.view.nonParticipation.items.length; i < len; i++) {
            let item = {};
            item.shopId = $scope.view.nonParticipation.items[i].shopId;
            item.dishes = [];
            item.kinds = [];
            item.setmeals = []


            // 循环dish
            $('.dishes' + i + " input").each(function () {
                if ($(this).prop("checked")) {
                    item.dishes.push($(this).attr('id'))
                }
            })
            // 循环kinds
            $('.kinds' + i + " input").each(function () {
                if ($(this).prop("checked")) {
                    item.kinds.push($(this).attr('id'))
                }
            })
            // 循环setMeals
            $('.setMeals' + i + " input").each(function () {
                if ($(this).prop("checked")) {
                    item.setmeals.push($(this).attr('id'))
                }
            })
            json.items.push(item)
        }

        console.log(json);

        if (JSON.stringify(json.items) == '[{}]') {
            delete json.items;
        }
        if ($scope.post._id) {
            url += "/" + $scope.post._id;
            method = "PUT";
        }
        var data = ajaxSendFn(json, url, method);
        if (data.code == 200) {
            $scope.view.nonParticipation = ajaxSendFn({}, "/nonParticipation", "GET").result; //非参与项
            alert('操作成功')
            $("#edit").modal("hide");
        } else {
            alert(data.message);
        }
    }
    // 保存不参与项
    $scope.sendJsons = function () {
        var url = "/nonParticipation";
        var method = "POST";
        var json = {};
        json.content = $scope.post.content;
        json.items = [];
        // 遍历
        console.log($scope.view.nonParticipation.items)
        for (var i = 0, len = $scope.view.nonParticipation.items.length; i < len; i++) {
            let item = {};
            item.shopId = $scope.view.nonParticipation.items[i].shopId;
            item.dishes = [];
            item.kinds = [];
            item.setmeals = []
            // 循环dish
            $('.dishes' + i + " input").each(function () {
                if ($(this).prop("checked")) {
                    item.dishes.push($(this).attr('id'))
                }
            })
            // 循环kinds
            $('.kinds' + i + " input").each(function () {
                if ($(this).prop("checked")) {
                    item.kinds.push($(this).attr('id'))
                }
            })
            // 循环setMeals
            $('.setMeals' + i + " input").each(function () {
                if ($(this).prop("checked")) {
                    item.setmeals.push($(this).attr('id'))
                }
            })
            json.items.push(item)
        }
        let usedItems = json.items.filter(function (i) {
            if (i.dishes.length == 0 && i.kinds.length == 0 && i.kinds.length == 0) {
                return false;
            } else {
                return true;
            }
        })
        json.items = usedItems;
        console.log(json);
        // return false;
        if (JSON.stringify(json.items) == '[{}]') {
            delete json.items;
        }
        if ($scope.post._id) {
            url += "/" + $scope.post._id;
            method = "PUT";
        }

        var data = ajaxSendFn(json, url, method);
        if (data.code == 200) {
            $scope.view.nonParticipation = ajaxSendFn({}, "/nonParticipation", "GET").result; //非参与项
            alert('操作成功')
            $("#add").modal("hide");
        } else {
            alert(data.message);
        }
    }

    $scope.remove = function (index) {
        if (!confirm("一旦删除将不可恢复，是否确认删除？")) return false;
        var data = ajaxSendFn({}, "/comments/tag/" + $scope.view.list.items[index].id, "DELETE");
        if (data.code == 200) { //
            $scope.view.list.items.splice(index, 1);
        } else { //
            alert(data.message);
        }
    };
    // 选择门店
    $scope.shopClick = function (index) {
        console.log(index)
        if ($('.shopName' + index).hasClass('shopNameActive')) {
            $('.shopName' + index).removeClass('shopNameActive')
        } else {
            $('.shopName' + index).addClass('shopNameActive')
        }
        // $('.shopName' + index).addClass('shopNameActive').siblings().removeClass('shopNameActive')
        // 记录门店的id
        if ($scope.view.nonParticipation.items.length > 0) {
            $scope.view.shopId = $scope.view.nonParticipation.items[index].shopId;
            console.log(index)

        }

    }
    // 选择品类
    $scope.kindClick = function (e, name) {

        e.preventDefault();
        $('#' + name).addClass('active').siblings().removeClass('active')

        $('#li-' + name).addClass('active').siblings().removeClass('active')

    }

}]);
app.controller("RuleFrontCtr", ["$scope", "$http", "$filter", "$document", "$compile", "$rootScope", function ($scope, $http, $filter, $document, $compile, $rootScope) {
    $scope.config.breadset = [{ //
        name: "广告管理",
        href: indexUrl + "/admin.html#/rule/ads",
        class: "front"
    }, {
        name: "广告管理"
    }]; //面包屑;
    $scope.init = function () {
        $scope.view = {
            list: new Array(5),
        };
        var data = ajaxSendFn({}, "/placards/front", "GET").result || [];
        if (data) {
            for (var i = 0; i < data.length; i++) {
                $scope.view.list[data[i].place - 1] = data[i];
            }
        }
    }
    $scope.init();

    $scope.post = {};
    $scope.removeFn = function (index) {
        if (!confirm("一旦删除将不可恢复，是否确认删除？")) return false;
        var data = ajaxSendFn({}, "/placards/front/" + $scope.view.list[index].id, "DELETE");
        if (data.code == 200) { //
            $scope.view.list[index] = "";
        } else { //
            alert(data.message);
        }
    }
    $scope.openFn = function (index) {
        $("#ad-select").modal("show");
        $scope.view.ads = ajaxSendFn({
            count: 10
        }, "/placards", "GET").result || [];
        $scope.view.index = index;
        $scope.view.select = -1;

    }
    $scope.changeFn = function (index) {
        if ($scope.view.select == index) {
            $scope.view.select = -1;
        } else {
            $scope.view.select = index;
        }
    }
    $scope.coverFn = function (id, type) {
        var data;
        if (type == "on") {
            data = ajaxSendFn({}, "/placards/front/" + id + "/cover", "POST");
        } else {
            data = ajaxSendFn({}, "/placards/front/" + id + "/cover", "DELETE");
        }
        if (data.code == 200) {
            alert("操作成功！");
            $scope.init();
        } else {
            alert(data.message);
        }
    }
    $scope.pageChange = function () {
        var json = {
            page: $scope.view.ads.page,
            count: $scope.view.ads.count
        };
        $scope.view.ads = ajaxSendFn(json, "/placards", "GET").result;
    };
    $scope.submitFn = function () {
        var json = {};
        if ($scope.view.select >= 0) {
            json.adsId = $scope.view.ads.items[$scope.view.select].id;
            json.place = $scope.view.index + 1;
            var data;
            if ($scope.view.list[$scope.view.index]) {
                data = ajaxSendFn(json, "/placards/front/" + $scope.view.list[$scope.view.index].id, "PUT");
            } else {
                data = ajaxSendFn(json, "/placards/front", "POST");
            }
            if (data.code == 200) {
                $scope.init();
            } else {
                alert(data.message)
            }
        }
        $("#ad-select").modal("hide");
        $scope.init();
    }

}]);
app.controller('RuleMaterialCtr', function ($scope, $location, $http) { //shoplist over
    $scope.config.breadset = [{ //
        name: "素材管理",
        href: indexUrl + "/admin.html#/rule/material",
        class: 'material'
    }, {
        name: "素材列表"
    }]; //面包屑
    $scope.post = {};
    $scope.posts = {
        materials: []
    };
    $scope.view = {
        materials: ajaxSendFn({}, "/materials", "GET").result || [],
        groups: ajaxSendFn({}, "/materials/group", "GET").result || [],
        leftIndex: -2
    };
    $scope.submitFn = function () {
        var data = ajaxSendFn({
            name: $scope.post.name
        }, "/materials/group", "POST");
        if (data.code === 200) {
            $scope.view.groups = ajaxSendFn({}, "/materials/group", "GET").result;
            $scope.view.checkName = false;
        } else {
            alert(data.message);
        }
    };
    $scope.groupList = function (index) {
        url = "/materials";
        if (index >= 0) {
            url = "/materials/group/" + $scope.view.groups[index].id + "/materials"
        }
        if (index == -1) {
            url = "/materials/group/materials";
        }
        $scope.view.materials = ajaxSendFn({}, url, "GET").result;
        $scope.view.leftIndex = index;

    }
    $scope.separateGroup = function (index, id) {
        var data = ajaxSendFn({
            ids: id
        }, "/materials/group/" + $scope.view.groups[index].id + "/materials", "PUT");
        if (data.code === 200) {
            alert("操作成功");
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
        var json = {
            page: $scope.view.materials.page,
            count: $scope.view.materials.count
        };
        $scope.view.materials = ajaxSendFn(json, url, "GET").result;
    };
    $scope.temimgshow = function (t) {
        if (t.files[0].size > 5 * 1024 * 1024) {
            alert("图片不得大于5M，图片格式为png,jpg,jpeg,bmp");
            return;
        }
        var url = "/materials";
        if ($scope.view.leftIndex >= 0) {
            url = "/materials/group/" + $scope.view.groups[$scope.view.leftIndex].id + "/material"
        }
        POSTurl = basicUrl + url + "?";
        options = {
            url: POSTurl + sortUrl(),
            type: "POST",
            success: function (data) {
                if (data.code === 200) {

                    $scope.$apply(function () {
                        url = "/materials";
                        if ($scope.view.leftIndex >= 0) {
                            url = "/materials/group/" + $scope.view.groups[$scope.view.leftIndex].id + "/materials"
                        }
                        if ($scope.view.leftIndex == -1) {
                            url = "/materials/group/materials";
                        }
                        $scope.view.materials = ajaxSendFn({
                            count: 10
                        }, url, "GET").result;
                    });
                } else {
                    alert(data.message);
                }

            }
        };
        $("#iimgform").ajaxSubmit(options);
    };

    $scope.remove = function (index) {
        if (!confirm("一旦删除将不可恢复，是否确认删除？")) return false;
        var data = ajaxSendFn({}, "/materials/" + $scope.view.materials.items[index].id, "DELETE");
        if (data.code == 200) { //
            $scope.view.materials.items.splice(index, 1);
        } else { //
            alert(data.message);
        }
    };
    $scope.removeAll = function () {
        if (!$scope.posts.dishes.length) {
            alert("请先选择要删除的图片！");
            return;
        }
        if (!confirm("一旦删除将不可恢复，是否确认删除？")) return false;
        var data = ajaxSendFn($scope.posts.dishes, "/dishes/ids", "DELETE");
        if (data.code == 200) {
            $scope.post = {};
            $scope.view.materials = ajaxSendFn({}, "/material", "GET").result;
        } else {
            alert(data.message);
        }
    };
    $scope.checkAllDishes = function () {
        if ($scope.materialAll) $scope.posts.materials = [];
        else {
            angular.forEach($scope.view.materials.items, function (value, key) {
                this[key] = value.id;
            }, $scope.post);
        }
    }
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
        list: ajaxSendFn({}, "/activity/reserve", "GET").result || {},
    }

    $scope.stateFn = function (id, state) {
        var a = confirm("确认" + (state == 'on' ? '上线' : '下线') + "此活动？");
        if (a) {
            var data = ajaxSendFn({}, "/activity/reserve/" + id + "/" + state, "POST");
            if (data.code == 200) {
                $scope.view.list = ajaxSendFn({}, "/activity/reserve", "GET").result || [];
            } else {
                alert(data.message);
            }
        }
    };
    $scope.removeFn = function (id) {
        var a = confirm("确认删除？");
        if (a) {
            var data = ajaxSendFn({}, "/activity/reserve/" + id, "DELETE");
            if (data.code == 200) {
                $scope.view.list = ajaxSendFn({}, "/activity/reserve", "GET").result || [];
            } else {
                alert(data.message);
            }
        }
    };
    $scope.pageChange = function () {
        var json = {
            page: $scope.view.list.page,
            count: $scope.view.list.count
        };
        $scope.view.list = ajaxSendFn(json, "/activity/reserve", "GET").result || {};
    };
});
app.controller("ReserveAddCtr", ["$scope", "$http", '$routeParams', "$filter", "$location", function ($scope, $http, $routeParams, $filter, $location) {
    $scope.config.breadset = [{ //
        name: "预定管理",
        href: indexUrl + "/keeper.html#/staff/reserve",
        class: 'reserve'
    }, {
        name: "预定设置"
    }]; //面包屑

    $scope.view = {
        times: ajaxSendFn({}, "/businesstimes/all", "GET").result,
        shops: ajaxSendFn({
            state: 1002
        }, "/shops", "GET").result,
        timeType: {
            "1001": "早市",
            "1002": "午市",
            "1003": "下午茶",
            "1004": "晚市",
            "1005": "宵夜"
        },
        date: {},
        dateRange: {}
    };

    if ($routeParams.activityId) {
        $scope.view.id = $routeParams.activityId;
        $scope.post = ajaxSendFn({}, "/activity/reserve/" + $routeParams.activityId, "GET").result || [];
        $scope.view.date.dateType = $scope.post.dateRangeCategory;
        if ($scope.post.dateRangeCategory === "AROUND_FIX_DATE" || $scope.post.dateRangeCategory === "MONTH_EFFECTIVE") {
            $scope.view.date.dateType = "AROUND_FIX_DATE";
            $scope.view.date.subType = $scope.post.dateRangeCategory;
        }
        $scope.view.date[$scope.view.date.dateType] = {
            dateRange: $scope.post.dateRange
        };
        $scope.view.dateRange = $scope.view.date[$scope.view.date.dateType].dateRange;
        if ($scope.post.dateRange) {
            if ($scope.post.dateRange.selectDates) {
                $scope.view.dateRange.subType = "MANUAL_SELECT";
                $scope.view.dateRange.selectDates = arrayMap($scope.view.dateRange.selectDates, function (date) {
                    return date.split(/\s+/)[0];
                });
            } else if ($scope.post.dateRange.selectDays) {
                $scope.view.dateRange.subType = "MONTH_DAYS";
            } else if ($scope.post.dateRange.selectWeeks) {
                $scope.view.dateRange.subType = "WEEKLY_DAY";
            }
        }

        for (var j in $scope.post.reserveTimes) {
            if ($scope.post.reserveTimes[j]) {
                $scope.post.reserveTimes[j] = new Date("1900-01-01 " + $scope.post.reserveTimes[j]);
            }
        }
        var temShops = [];
        if ($scope.view.shops) {
            for (var i = 0; i < $scope.view.shops.length; i++) {
                temShops[$scope.view.shops[i].id] = 1;
            }
        }
        var shops = angular.copy($scope.post.shops);
        $scope.post.shops = [];
        for (var i = 0; i < $scope.view.shops.length; i++) {
            if (shops.includes($scope.view.shops[i].id)) {
                $scope.post.shops[i] = $scope.view.shops[i].id;
            }
        }
    } else {
        $scope.post = {
            dateRange: {},
            reserveTimes: {},
            shops: []
        };
    }
    $scope.$watch('view.shopAll', function (newVal, oldVal) {
        if (newVal !== oldVal) {
            if (newVal) {
                angular.forEach($scope.view.shops, function (value, key) {
                    this[key] = value.id;
                }, $scope.post.shops)
            } else {
                $scope.post.shops = [];
            }
        }
    });

    $scope.settime = function (key) { //
        if ($scope.post.reserveTimes[key]) {
            delete $scope.post.reserveTimes[key];
        } else {
            $scope.post.reserveTimes[key] = "";
        }
    }

    $scope.sendJsons = function () {
        var json = angular.copy($scope.post);
        json.dateRange = {};
        json.dateRangeCategory = $scope.view.date.dateType;
        for (var j in json.reserveTimes) {
            if (json.reserveTimes[j]) {
                json.reserveTimes[j] = $filter("date")(json.reserveTimes[j], "HH:mm");
            }
        }
        json.shops = arrRemoveNullFN(json.shops);

        if ($scope.view.date.dateType === "CONTINUOUS") {
            if (!$scope.view.dateRange.startDate || !$scope.view.dateRange.endDate) {
                alert("请填写开始和结束日期!");
                return;
            }
            if ($scope.view.dateRange.endDate < $scope.view.dateRange.startDate) {
                alert("结束日期不能小于开始日期!");
                return;
            } else {
                json.dateRange.startDate = $filter("date")($scope.view.dateRange.startDate, "yyyy-MM-dd 00:00:00");
                json.dateRange.endDate = $filter("date")($scope.view.dateRange.endDate, "yyyy-MM-dd 23:59:59");
            }
        } else if ($scope.view.date.dateType === "BIRTHDAY" && $scope.view.date.subType === "AROUND_FIX_DATE") {
            json.dateRange.beforeDays = $scope.view.dateRange.beforeDays || 0;
            json.dateRange.afterDays = $scope.view.dateRange.afterDays || 0;
        }

        json.dateRange.selectCategory = $scope.view.dateRange.selectCategory || 'NONE';
        if ($scope.view.dateRange.subType === "MANUAL_SELECT") {
            var arr = arrayMap(objectKeys($scope.view.dateRange.selectDates), function (date) {
                return date + " 00:00:00";
            });
            if (!isEmptyObject(arr)) {
                json.dateRange.selectDates = arr;
            }
        } else if ($scope.view.dateRange.subType === "MONTH_DAYS") {
            var arr = arrayMap(objectKeys(mapFilter($scope.view.dateRange.selectDays, notNull)), parseInt);
            if (!isEmptyObject(arr)) {
                json.dateRange.selectDays = arr;
            }
        } else if ($scope.view.dateRange.subType === "WEEKLY_DAY") {
            var arr = arrayMap(objectKeys(mapFilter($scope.view.dateRange.selectWeekDays, notNull)), parseInt);
            if (!isEmptyObject(arr)) {
                json.dateRange.selectWeekDays = arr;
            }
        }

        //选择排除，必须要指定排队日期
        if ((json.dateRangeCategory !== "SELECTED_DATES") && (json.dateRange.selectCategory === 'EXCLUDE') && (objectCount(json.dateRange) == 1)) {
            alert("没有指定排除日期！");
            return;
        }

        //'指定日期'类型必须有数据
        if ((json.dateRangeCategory === "SELECTED_DATES") && (objectCount(json.dateRange) == 1)) {
            alert("没有指定日期！");
            return;
        }
        var url = "/activity/reserve";
        var method = "POST";
        if ($routeParams.activityId) {
            url += "/" + $routeParams.activityId;
            method = "PUT";
        }
        var data = ajaxSendFn(json, url, method);
        if (data.code == 200) {
            alert("操作成功");
            if (method == "PUT") {
                $location.path("/rule/reserve");
            } else {
                $location.path("/rule/reserve/add2/" + data.result.id);

            }
        } else {
            alert(data.message);
        }
    }
}]);
app.controller("ReserveAdd2Ctr", ["$scope", "$http", '$routeParams', "$filter", "$location", function ($scope, $http, $routeParams, $filter, $location) {
    $scope.config.breadset = [{ //
        name: "预定管理",
        href: indexUrl + "/keeper.html#/staff/reserve",
        class: 'reserve'
    }, {
        name: "预定设置"
    }]; //面包屑

    $scope.view = {
        times: ajaxSendFn({}, "/businesstimes/all", "GET").result,
        factor: ajaxSendFn({}, "/activity/reserve/" + $routeParams.activityId + "/factor", "GET").result,
        category: [], //coupon,reward type
        timeType: {
            "1001": "早市",
            "1002": "午市",
            "1003": "下午茶",
            "1004": "晚市",
            "1005": "宵夜"
        }
    };
    $scope.post = {
        detail: {}
    };
    if ($routeParams.activityId && $scope.view.factor) {
        $scope.view.id = $routeParams.activityId;
        var data = ajaxSendFn({}, "/activity/reserve/" + $routeParams.activityId + "/rule", "GET").result || "";
        if (!data) {
            $scope.post.detail["ALL"] = [{
                value: [{}]
            }];
        } else {
            $scope.post = data;
        }
    } else {
        history.back();
    }
    if ($scope.view.factor.COUPON) {
        $scope.view.category.push({
            id: 'COUPON',
            name: "优惠券"
        });
    }
    if ($scope.view.factor.REWARD) {
        $scope.view.category.push({
            id: 'REWARD',
            name: '代用币'
        });
    }
    $scope.addFn = function (item) {
        item.push({
            value: [{}]
        });
    };
    $scope.addCouponFn = function (item) {
        item.push({});
    };
    $scope.removeCouponFn = function (item, index) {
        item.splice(index, 1);
    };
    $scope.changeCoupon = function (dv) {
        if (dv.id) {
            for (var i = 0; i < $scope.view.factor.COUPON.length; i++) {
                if ($scope.view.factor.COUPON[i].id === dv.id) {
                    dv.name = $scope.view.factor.COUPON[i].name;
                    dv.category = "COUPON";
                    dv.count = 1;
                    break;
                }
            }
        }
    };
    $scope.changeReward = function (dv) {
        if (dv.id) {
            for (var i = 0; i < $scope.view.factor.REWARD.length; i++) {
                if ($scope.view.factor.REWARD[i].id === dv.id) {
                    dv.name = $scope.view.factor.REWARD[i].name;
                    dv.category = "REWARD";
                    dv.count = 1;
                    break;
                }
            }
        }
    };

    $scope.sendJsons = function () {
        var json = angular.copy($scope.post);
        for (var i in json.detail) {
            for (var j in json.detail[i]) {
                if (JSON.stringify(json.detail[i][j].value) == "[{}]") {
                    delete json.detail[i][j].value;
                }
            }
        }
        //end
        var url = "/activity/reserve/" + $scope.view.id + "/rule";
        var method = "POST";
        var data = ajaxSendFn(json, url, method);
        if (data.code == 200) {
            alert("操作成功");
            $location.path("/rule/reserve");

        } else {
            alert(data.message);
        }
    }
}]);
// --------------------------------------------------------------------------

app.controller("redpacketsCtr", ["$scope", "$http", "$filter", "$document", "$compile", "$rootScope", function ($scope, $http, $filter, $document, $compile, $rootScope) {
    $scope.config.breadset = [{ //
        name: "红包管理",
        href: indexUrl + "/admin.html#/rule/redpackets",
        class: "redpackets"
    }, {
        name: "红包管理"
    }]; //面包屑;
    $scope.view = {
        list: ajaxSendFn({}, "/activity/packet", "GET").result || [],
    };

    $scope.offFn = function (id) {
        var a = confirm("确认下线此活动？");
        if (a) {
            var data = ajaxSendFn({}, "/activity/packet/" + id + "/off", "POST");
            if (data.code == 200) {
                $scope.view.list = ajaxSendFn({}, "/activity/packet", "GET").result || [];
            } else {
                alert(data.message);
            }
        }
    };
    $scope.dianjiFn = function (id) {
        var arr = ajaxSendFn({}, "/activity/packet/" + id, "GET").result
        console.log(arr)
    }
    $scope.onFn = function (id) {
        var a = confirm("确认上线此活动？");
        if (a) {
            var data = ajaxSendFn({}, "/activity/packet/" + id + "/on", "POST");
            if (data.code == 200) {
                $scope.view.list = ajaxSendFn({}, "/activity/packet", "GET").result || [];
            } else {
                alert(data.message);
            }
        }
    };
    $scope.removeFn = function (id) {
        var a = confirm("确认删除？");
        if (a) {
            var data = ajaxSendFn({}, "/activity/packet/" + id, "DELETE");
            if (data.code == 200) {
                $scope.view.list = ajaxSendFn({}, "/activity/packet", "GET").result || [];
            } else {
                alert(data.message);
            }
        }
    };

}]);

app.controller("addpacketsCtr", ["$scope", "$http", '$routeParams', "$filter", "$location", 'CouponFactory', function ($scope, $http, $routeParams, $filter, $location, couponFac) {
    $scope.config.breadset = [{ //
        name: "红包管理",
        href: indexUrl + "/admin.html#/rule/addpackets",
        class: "addpackets"
    }, {
        name: "红包管理"
    }]; //面包屑;

    $scope.view = {
        category: []
    };
    $scope.view1 = {};
    $scope.transferMap = {
        POINT_CONSUME: "POINTCONSUME",
        COUPON_FREE: "COUPONFREE",
        CHARGE_CONSUME: "CHARGECONSUME",
        SPECIAL_PRICE: "SPECIALPRICE",
        LIMIT_REDUCE: "LIMITREDUCE",
        SPEND_AS: "SPENDAS",
        SET_MEAL: "SETMEAL",
        GIVEN_UPGRADE: "GIVENUPGRADE",
        CHARGE_FREE: "CHARGEFREE",
        BIRTH_BENEFIT: "BIRTHBENEFIT",
        FIRST_GIFT: "FIRSTGIFT",

    };
    $scope.transferMapRev = {
        POINTCONSUME: "POINT_CONSUME",
        COUPONFREE: "COUPON_FREE",
        CHARGECONSUME: "CHARGE_CONSUME",
        SPECIALPRICE: "SPECIAL_PRICE",
        LIMITREDUCE: "LIMIT_REDUCE",
        SPENDAS: "SPEND_AS",
        SETMEAL: "SET_MEAL",
        GIVENUPGRADE: "GIVEN_UPGRADE",
        CHARGEFREE: "CHARGE_FREE",
        BIRTHBENEFIT: "BIRTH_BENEFIT",
        FIRSTGIFT: "FIRST_GIFT"
    };
    $scope.tem = {
        rules: {}
    };
    $scope.allShop = false
    $scope.set = {
        times: ajaxSendFn({}, "/businesstimes/all", "GET").result,
        list: ajaxSendFn({
            state: 1002
        }, "/shops", "GET").result,
        list2: [],
        shops: []
    };
    if (!$scope.set.list) {
        alert("目前还没有添加门店");
        $location.path("/shops");
    }
    $scope.set.nonParticipation = ajaxSendFn({}, "/nonParticipation/content", "GET").result; //非参与项
    $scope.checkallstr = 0;

    $scope.posts = {
        shops: [],
        allDay: false
    };
    $scope.coupon = {
        shared: [],
        shops: []
    };



    $scope.temcoupons2 = {};
    $scope.temcoupons = [];
    $scope.ruleCategory = consumeRuleObj;
    $scope.ruleCategory1 = onlineRuleObj;
    $scope.obtainRepeatCategory = obtainRepeatCategory;

    $scope.ruleFn = {
        openOrClose: function () {
            $("#add").modal("show");
            $scope.isOpenOrClose = true;
        },
        testAddOk: function () {
            $("#add").modal("hide");
            $scope.isOpenOrClose = false;
            alert("添加成功");
            //$scope.view.coupons = couponFac.getAllCoupon();
        },
        testAddFail: function (result) {
            //console.log("错误编号:" + result.code + ", 错误信息:" + result.message);
            errorMsg(result);
        },
        getCpouponFn: function () {
            console.log($scope.view);
            $scope.view1 = ajaxSendFn({}, "/activity/factor", "GET").result || [];
            $scope.view.coupons = $scope.view1.COUPON || [];
            $scope.view.rewards = $scope.view1.REWARD || [];
            console.log("1111");
            console.log($scope.view);
            // $scope.view.allocate = $scope.view1.ALLOCATE || [];
            // $scope.view.coupons = ajaxSendFn({}, "/activity/factor", "GET").result || [];
            // $scope.view.rewards = ajaxSendFn({}, "/activity/factor", "GET").result || [];
        },
        getCouponType: function (id) {
            for (var i = 0; $scope.view.coupons && i < $scope.view.coupons.length; i++) {
                if ($scope.view.coupons[i].id === id) {
                    return $scope.view.coupons[i].category;
                }
            }
        },
        changeCoupon: function (value, dv) {
            if (dv.id) {
                dv.count = 1;
                for (var i = 0; i < $scope.view.coupons.length; i++) {
                    if ($scope.view.coupons[i].id === dv.id) {
                        dv.name = $scope.view.coupons[i].name;
                        break;
                    }
                }
            }
        },
        oldRuleFn: function () { //从服务器获取目前的规则列表
            $scope.view = {
                counponType: {
                    "OFFSETCASH": "代金券",
                    "DISCOUNT": "折扣券",
                    "PHYSICAL": "实物券",
                    "GIFT": "礼券",
                    "new": "新增券"
                }
            };
            console.log($scope.view);
            $scope.ruleFn.getCpouponFn();
            switch ('CHARGE') {
                case "DISCOUNT":
                    $scope.view.rules = {
                        "DISCOUNT": {
                            name: "打折",
                            uncheck: true,
                            state: "",
                            show: 0,
                            addFunc: $scope.ruleFn.addFn,
                            postFunc: $scope.ruleFn.sendFn,
                            content: {
                                DISCOUNT: []
                            }
                        }
                    };
                    break;
                case "CHARGE":
                    $scope.view.rules = {
                        "CHARGE": {
                            name: "充值",
                            uncheck: true,
                            state: "",
                            show: 0,
                            addFunc: $scope.ruleFn.addCouponFn,
                            postFunc: $scope.ruleFn.sendCouponFn,
                            content: {
                                CHARGE: []
                            }
                        }
                    };
                    break;

            }
            console.log("222222")
            console.log($scope.view.rules)
            $scope.view.shop = ajaxSendFn({
                state: "1002"
            }, "/shops", "GET").result || [];
            $scope.tem.shops = [];
            for (var x in $scope.view.shop) $scope.tem.shops.push($scope.view.shop[x].id);

            $scope.tem.rules = {}
            $scope.tem.rules[$scope.tem.rules.type] = $scope.tem.rules;

        },
        stateFn: function (a, b, c, d) { //key,state,show,点击添加规则时调用
            var aRe = a.split("_")[0];
            if (aRe in $scope.view.rules) {
                $scope.view.rules[aRe].state = b;
                $scope.view.rules[aRe].show = c;
            }
            if (b == "add") $scope.ruleFn.buttonFn(a);
            if (!d) { //只让添加一项,就让设定活动内容按钮灰掉,d无值表示是手动点击
                $scope.btnDisable = 1;
                return;
            }
            var tem = d.type;
            if (c) {
                d.celling && (d.celling = d.celling * 100);
                $scope.view.rules[aRe].content[tem] = d
            }
        },
        closeFn: function (a) { //取消按钮
            if ($scope.view.rules[a].state == "edit") { //保存
                $scope.view.rules[a].state = "show";
            } else if ($scope.view.rules[a].state == "add") { //新增
                $scope.view.rules[a].state = "show";
            }
        },
        buttonFn: function (a) { //活动保存按钮  del

            if ($scope.view.rules[a].state == "show") { //修改
                $scope.ruleFn.postFn(a);
                $scope.ruleFn.memberFn();
                $scope.view.rules[a].state = "edit";
            } else if ($scope.view.rules[a].state == "edit") { //保存
                var res = $scope.ruleFn.sendCouponFn();
                if (res) {
                    //$location.path("/rule");
                    $scope.view.rules[a].state = "show";
                }
            } else if ($scope.view.rules[a].state == "add") { //新增
                for (x in $scope.view.rules[a].content) $scope.view.rules[a].addFunc(x);
                $scope.view.rules[a].state = "edit";
                $("#showadd").modal("hide");
            }
        },
        memberFn: function () { //会员获取
            // $scope.view.member = $scope.tem.member = ajaxSendFn({}, "/memberGrade", "GET").result || [];
            $scope.view.member = $scope.tem.member = $scope.view1.MEMBERGRADE || [];
            $scope.view.member1 = [];
            $scope.view.member = $filter('orderBy')($scope.view.member, 'grade');

            $scope.view.member1.push({
                id: "ALL",
                name: "全员"
            });

            $scope.view.member.push({
                id: "ALL",
                name: "全员"
            });
            $scope.view.member.push({
                id: "MEMBER",
                name: "任一会员"
            });
            if ($scope.tem.activityCategory == "GIVENUPGRADE") {
                $scope.view.member.push({
                    id: "CUSTOMER",
                    name: "非会员"
                });
            }
            if ($scope.tem.activityCategory == "COUPONFREE") {
                $scope.view.member.push({
                    id: "FOLLOWED",
                    name: "微信粉丝"
                });
            }
            $scope.tem.member1 = $scope.view.member;


        },
        postFn: function (a) { //发送数据
            var tem = $scope.view.rules[a].content;
            console.log(tem)
            $scope.posts[a] = {};
            for (x in tem) {
                var needCheck = true;
                $scope.posts[a][x] = tem[x];
                if (tem[x] instanceof Array) {
                    needCheck = false;
                }
                $scope.posts[a][x].check = needCheck;
                if (!tem[x].detail || !Object.keys(tem[x].detail).length) {
                    $scope.view.rules[a].addFunc(x);
                }
            }

        },
        addCouponFn: function (x) {
            $scope.ruleFn.addFn(x, function (a, b) {
                //if (a === "COUPON" || a === "GAME" || b === "COUPON" || x === "COUPONFREE" || x === "SPECIALPRICE") {
                var arr = $scope.posts[a][x].detail.ALL;
                if (arr && arr.length > 0 && !isEmptyObject(arr[0])) {
                    var obj = {};
                    obj.value = [{}];
                    $scope.posts[a][x].detail.ALL.push(obj);
                    console.log("obj1")
                    console.log(obj)
                } else {
                    var obj = $scope.posts[a][x].detail.ALL[0];
                    delete obj.id
                    console.log("obj2")
                    console.log(obj)
                    obj.value = [{}];
                }

                console.log("$$hashKey")
                console.log($scope.posts[a][x].detail.ALL)
                //}
            })

        },
        addFn: function (x, cb) { //
            var cnt = 0;
            var a, b;
            var arr = x.split("_");
            if (arr && arr.length > 0) {
                a = arr[0];
            }
            if (arr && arr.length > 1) {
                b = arr[1];
            }
            if (!$scope.posts[a] || !$scope.posts[a][x] || !$scope.posts[a][x].detail || isEmptyObject($scope.posts[a][x].detail)) {
                if (!$scope.posts[a]) $scope.posts[a] = {};
                $scope.posts[a][x] = $scope.view.rules[a].content[x];
                // if (!$scope.posts[a][x].detail || isEmptyObject($scope.posts[a][x].detail))
                $scope.posts[a][x].detail = {
                    "ALL": [{}]
                };
                if (cb) cb(a, b);
                return;
            }
            if ($scope.posts[a][x].detail.ALL) {
                var obj = {};
                if (cb) {
                    cb(a, b);
                } else {
                    $scope.posts[a][x].detail.ALL.push(obj);
                }
            } else {
                $scope.posts[a][x].detail.ALL = [{}];
                if (cb) cb(a, b);
            }
            console.log("$$hashKey")
            console.log($scope.posts[a][x].detail.ALL)

        },
        removeFn: function (x, b, c) {
            var a = x.split("_")[0];
            if ($scope.posts[a][x].detail[b][c]) $scope.posts[a][x].detail[b].splice(c, 1);
        },
        // 检查券id是否重复和券类型是否重复
        checkCouponList: function (values) {
            for (var i = 0; values && i < values.length - 1; i++) {
                for (var j = i + 1; j < values.length; j++) {
                    if (values[i].id === values[j].id) {
                        return true;
                    }
                }
            }
            for (var i = 0; values && i < values.length - 1; i++) {
                var oldtype = $scope.ruleFn.getCouponType(values[i].id);
                for (var j = 1; j < values.length; j++) {
                    var newType = $scope.ruleFn.getCouponType(values[j].id);
                    if (oldtype === newType) {
                        return true;
                    }
                }
            }
            return false;
        },
        //构建使用充值卡的数据
        sendChargeConsumeFn: function (a) {
            return $scope.ruleFn.sendFn(a, undefined, undefined, function (json) {
                var obj = json.detail.ALL[0];
                // if (obj.value) {
                //    obj.value = false;
                // } else {
                //    obj.value = true;
                // }
                obj.amount = 1;
                obj.currentAmount = obj.count = 0;
            });
        },
        sendCouponFn: function (a) {
            return $scope.ruleFn.sendFn(a, function (x, tem2) {
                if (x === "COUPON") {
                    for (var key in tem2) {
                        if (tem2[key] && tem2[key].length > 0 && $scope.ruleFn.checkCouponList(tem2[key][0].value)) {
                            return {
                                message: "券或券类型不能重复"
                            };
                        }
                    }
                }
            }, function (b, json) {
                if (b && b === "COUPON") {
                    for (var key in json.detail) {
                        var cache = {};
                        for (var item in json.detail[key]) {
                            if (cache[key] !== json.detail[key][item].value[0].id) {
                                cache[key] = json.detail[key][item].value[0].id;
                            } else {
                                return {
                                    message: "注意：券不能重复"
                                };
                            }
                        }
                    }
                }
            });
        },
        sendFn: function (a, beforeValidateFunc, afterValidateFunc, fixFunc) { ///没搞完，发送规则
            var tem = $scope.posts[a];
            //整理，删除不需要的规则
            /*    for (var x in tem) {
             if (!$scope.view.rules[a].uncheck) {
             if (!tem[x].check) {
             if ($scope.tem.rules && $scope.tem.rules[x]) delete $scope.tem.rules[x];
             if ($scope.view.rules[a].content[x]) {
             $scope.view.rules[a].content[x].detail = [];
             $scope.view.rules[a].content[x].check = false;
             }
             }
             }
             }*/
            //遍历有效规则，提交到服务器
            var json = {};

            for (var x in tem) {
                if (!$scope.view.rules[a].uncheck) {
                    if (!tem[x].check) {
                        continue;
                    }
                }
                if ($scope.transferMapRev.hasOwnProperty(x)) {
                    json.type = $scope.transferMapRev[x];
                } else {
                    json.type = x;
                }
                json.detail = {};
                tem[x]._id && (json._id = tem[x]._id);
                tem[x].amountLimit && (json.amountLimit = tem[x].amountLimit);
                if (tem[x].celling) {
                    json.celling = parseInt(tem[x].celling) / 100;
                    // 仅限首次充值
                    if (tem[x].firstLimit) {
                        json.firstLimit = true;
                    } else {
                        json.firstLimit = false;
                    }
                }
                // 是否支持充值卡余额通用
                if (json.type == "CHARGE_CONSUME") {

                    if (tem[x].allpurpose) {
                        json.allpurpose = true;
                    } else {
                        json.allpurpose = false;
                    }

                }

                typeof tem[x].countLimit == 'number' && (json.countLimit = tem[x].countLimit);
                tem[x].timesLimit && (json.timesLimit = tem[x].timesLimit);
                tem[x].obtainCategory && (json.obtainCategory = tem[x].obtainCategory);

                var tem2 = tem[x].detail;
                //if (beforeValidateFunc && typeof(beforeValidateFunc) === "function") {
                //    var obj = beforeValidateFunc(x, tem2);
                //    if (obj) {
                //        alert(obj.message);
                //        return false;
                //    }
                //}

                var b;
                var arr = x.split("_");
                if (arr && arr.length > 1) {
                    b = arr[1];
                }

                for (z in tem2) {
                    console.log(z)
                    for (w in tem2[z]) {
                        var tem3 = tem2[z][w],
                            json2 = {};
                        (typeof (tem3.amount) == 'number' || tem3.amount) && (json2.amount = tem3.amount);
                        tem3.score && (json2.score = tem3.score);
                        tem3.gradeId && (json2.gradeId = tem3.gradeId);
                        if (tem3.value && tem3.value.length != 0) {
                            json2.value = tem3.value;
                            if (json2.value && json2.value.length) {
                                for (var x in json2.value) {
                                    delete json2.value[x].$$hashKey;
                                }
                            }
                        } else if (json.type == "CHARGE_CONSUME") {
                            json2.value = false;
                        }
                        tem3.limit !== undefined && (json2.limit = tem3.limit);
                        tem3.count && (json2.count = tem3.count);
                        tem3.currentAmount && (json2.currentAmount = tem3.currentAmount);
                        // 添加分账规则
                        if (json.detail[tem3.id]) json.detail[tem3.id].push(json2);
                        else json.detail[tem3.id] = [json2];
                    }
                }

                if (json.type == "CHARGE") {

                    angular.forEach(json.detail.ALL, function (each, index) {
                        console.log(each)
                        if (!each.value || !each.value[0].category) {
                            delete each.value
                        }
                    })
                }
                if (afterValidateFunc && typeof (afterValidateFunc) === "function") {
                    obj = afterValidateFunc(b, json);
                    if (obj) {
                        alert(obj.message);
                        return false;
                    }
                }
                if (fixFunc && typeof (fixFunc) === "function") {
                    fixFunc(json);
                }
            }
            // 验证授权邀请码是否正确
            if ($scope.tem.activityCategory == "TICKET") {
                if ($scope.tel.inviters) {
                    json.inviters = $scope.tel.inviters.split(",")
                } else {
                    alert("请输入邀请码");
                    return;
                }
            }

            var rulesend = ajaxSendFn(json, "/activity/" + $routeParams.activityid + "/rule", "POST", 1);
            if (rulesend.code == 200) { //
                $scope.ruleFn.oldRuleFn();
            } else {
                errorMsg(rulesend);
                return false;
            }
            return true;
        },
        addCouponPlanFn: function (a) {
            if (a != "new") return;
            $scope.ruleFn.showCouponPlanFn();
        },
        addRuleFn: function () { //显示添加面板
            $scope.view.modal = {
                title: "添加活动内容",
                html: "addrule"
            };
            $("#showadd").modal("show");
        },
        showCouponPlanFn: function (a) {
            $scope.view.modal = {
                title: "添加券",
                html: "couponNew"
            };
            $("#showadd").modal("show");
        },

        put: function (details, dv) {
            if (!details.value) {
                details.value = [];
            }
            dv = {};
            details.value.push(dv);
        },
        resetCouponCntFn: function (details, dv) {
            angular.forEach(details.value, function (data, idx) {
                if (data && data.id === dv.id) {
                    this.splice(idx, 1);
                }
            }, details.value);
        },
        containsCoupon: function (details, id) {
            var tmpIdx = -1;
            for (var i = 0; details.value && i < details.value.length; i++) {
                if (details.value[i].id === id) {
                    tmpIdx = i;
                    break;
                }
            }
            return tmpIdx;
        }
    };
    console.log($scope.view)
    $scope.ruleFn.oldRuleFn();

    // if ($scope.view.coupons.length) {
    //     $scope.view.category.push({id: 'COUPON', name: "优惠券"});
    // }
    // if ($scope.view.rewards.length) {
    //     $scope.view.category.push({id: 'REWARD', name: '代用币'});
    // }
    $scope.sendJsons = function () {
        console.log($scope.posts)
        if (!$scope.posts.picUrl) {
            alert("请先上传图片");
            return;
        }

        $scope.posts.shops = $scope.set.shops.filter(function (s) {
            return s && s.trim();
        });
        var json = angular.copy($scope.posts);

        delete json.CHARGE;
        json.rule.detail = {}
        var last = angular.copy($scope.posts.CHARGE.CHARGE.detail.ALL)
        for (var i = 0; i < last.length; i++) {
            var vipid = last[i].id
            json.rule.detail[vipid] = [{
                "amount": last[i].amount,
                "value": last[i].value
            }]
        }
        console.log(json);
        json.dateRange = {};
        json.dateRangeCategory = $scope.view.date.dateType;
        // delete json.date;
        //start
        if ($scope.view.date.dateType === "CONTINUOUS") {
            if (!$scope.view.dateRange.startDate || !$scope.view.dateRange.endDate) {
                alert("请填写开始和结束日期!");
                return;
            }
            if ($scope.view.dateRange.endDate < $scope.view.dateRange.startDate) {
                alert("结束日期不能小于开始日期!");
                return;
            } else {
                json.dateRange.startDate = $filter("date")($scope.view.dateRange.startDate, "yyyy-MM-dd 00:00:00");
                json.dateRange.endDate = $filter("date")($scope.view.dateRange.endDate, "yyyy-MM-dd 23:59:59");
            }
        } else if ($scope.view.date.dateType === "BIRTHDAY" && $scope.view.date.subType === "AROUND_FIX_DATE") {
            json.dateRange.beforeDays = $scope.view.dateRange.beforeDays || 0;
            json.dateRange.afterDays = $scope.view.dateRange.afterDays || 0;
        }

        json.dateRange.selectCategory = $scope.view.dateRange.selectCategory || 'NONE';
        if ($scope.view.dateRange.subType === "MANUAL_SELECT") {
            var arr = arrayMap(objectKeys($scope.view.dateRange.selectDates), function (date) {
                return date + " 00:00:00";
            });
            if (!isEmptyObject(arr)) {
                json.dateRange.selectDates = arr;
            }
        } else if ($scope.view.dateRange.subType === "MONTH_DAYS") {
            var arr = arrayMap(objectKeys(mapFilter($scope.view.dateRange.selectDays, notNull)), parseInt);
            if (!isEmptyObject(arr)) {
                json.dateRange.selectDays = arr;
            }
        } else if ($scope.view.dateRange.subType === "WEEKLY_DAY") {
            var arr = arrayMap(objectKeys(mapFilter($scope.view.dateRange.selectWeekDays, notNull)), parseInt);
            if (!isEmptyObject(arr)) {
                json.dateRange.selectWeekDays = arr;
            }
        }

        //选择排除，必须要指定排队日期
        if ((json.dateRangeCategory !== "SELECTED_DATES") && (json.dateRange.selectCategory === 'EXCLUDE') && (objectCount(json.dateRange) == 1)) {
            alert("没有指定排除日期！");
            return;
        }

        //'指定日期'类型必须有数据
        if ((json.dateRangeCategory === "SELECTED_DATES") && (objectCount(json.dateRange) == 1)) {
            alert("没有指定日期！");
            return;
        }
        //end
        if (json.advertisement && !json.advertisement.id) {
            delete json.advertisement;
        }
        console.log(json);
        var url = "/activity/packet";
        // if ($routeParams.id) {
        //     url += "/" + $routeParams.id;
        // }
        var data = ajaxSendFn(json, url, "POST");
        if (data.code == 200) {
            alert("操作成功");
            $location.path("/rule/redpackets");
        } else {
            alert(data.message);
        }
    }
    $scope.ruleFn.memberFn();

    // $scope.ruleFn.buttonFn("CHARGE");
    $scope.ruleFn.postFn("CHARGE");


    // $scope.ruleFn.getCpouponFn();
    if ($scope.tem && $scope.tem.activityCategory && isEmptyObject($scope.tem.rules)) {
        $scope.ruleFn.stateFn($scope.tem.activityCategory, 'add', 1)
    }
    $scope.checkAllShops = function () { //
        console.log($scope.posts.allShop)
        if ($scope.posts.allShop) { //
            var shops = [];
            for (var i = 0; i < $scope.set.list.length; i++) {
                shops.push($scope.set.list[i].id)
            }
            $scope.set.shops = shops
        } else { //
            $scope.set.shops = [];
            $scope.posts.shops = []
        }
    }
    $scope.checkShops = function (key) {
        if (key == false) {
            delete key
            $scope.posts.allShop = false;
        }
        var arr = $scope.set.shops.filter(function (s) {
            return s && s.trim();
        });
        if (arr.length == $scope.set.list.length) {
            $scope.posts.allShop = true
        } else {
            $scope.posts.allShop = false;
        }
    }
}]);

app.controller("editpacketsCtr", ["$scope", "$http", '$routeParams', "$filter", "$location", 'CouponFactory', function ($scope, $http, $routeParams, $filter, $location, couponFac) {
    $scope.config.breadset = [{ //
        name: "红包管理",
        href: indexUrl + "/admin.html#/rule/editpackets",
        class: "editpackets"
    }, {
        name: "红包管理"
    }]; //面包屑;

    $scope.view = {
        category: [],
        date: {}
    };
    $scope.view1 = {};
    $scope.posts = {
        shops: [],
        rule: {
            detail: []
        },
        allDay: false
    };

    $scope.tem = {
        rules: {}
    };
    $scope.allShop = false
    $scope.set = {
        times: ajaxSendFn({}, "/businesstimes/all", "GET").result,
        list: ajaxSendFn({
            state: 1002
        }, "/shops", "GET").result,
        list2: [],
        shops: []
    };
    if (!$scope.set.list) {
        alert("目前还没有添加门店");
        $location.path("/shops");
    }
    $scope.set.nonParticipation = ajaxSendFn({}, "/nonParticipation/content", "GET").result; //非参与项
    $scope.checkallstr = 0;
    $scope.coupon = {
        shared: [],
        shops: []
    };
    $scope.temcoupons2 = {};
    $scope.temcoupons = [];
    $scope.ruleCategory = consumeRuleObj;
    $scope.ruleCategory1 = onlineRuleObj;
    $scope.obtainRepeatCategory = obtainRepeatCategory;

    $scope.ruleFn = {

        getCpouponFn: function () {
            console.log($scope.view);
            $scope.view1 = ajaxSendFn({}, "/activity/factor", "GET").result || [];
            $scope.view.coupons = $scope.view1.COUPON || [];
            $scope.view.rewards = $scope.view1.REWARD || [];
            console.log("1111");
            console.log($scope.view);
        },
        getCouponType: function (id) {
            for (var i = 0; $scope.view.coupons && i < $scope.view.coupons.length; i++) {
                if ($scope.view.coupons[i].id === id) {
                    return $scope.view.coupons[i].category;
                }
            }
        },
        changeCoupon: function (value, dv) {
            if (dv.id) {
                dv.count = 1;
                for (var i = 0; i < $scope.view.coupons.length; i++) {
                    if ($scope.view.coupons[i].id === dv.id) {
                        dv.name = $scope.view.coupons[i].name;
                        break;
                    }
                }
            }
        },
        oldRuleFn: function () { //从服务器获取目前的规则列表
            $scope.view = {
                counponType: {
                    "OFFSETCASH": "代金券",
                    "DISCOUNT": "折扣券",
                    "PHYSICAL": "实物券",
                    "GIFT": "礼券",
                    "new": "新增券"
                }
            };
            console.log($scope.view);
            $scope.ruleFn.getCpouponFn();
            $scope.view.rules = {
                name: "充值",
                uncheck: true,
                state: "",
                show: 0,
                addFunc: $scope.ruleFn.addCouponFn,
                postFunc: $scope.ruleFn.sendCouponFn,
                content: {
                    CHARGE: []
                }
            }


            $scope.view.shop = ajaxSendFn({
                state: "1002"
            }, "/shops", "GET").result || [];
            $scope.tem.shops = [];
            for (var x in $scope.view.shop) {
                $scope.tem.shops.push($scope.view.shop[x].id);
            }



        },
        closeFn: function (a) { //取消按钮
            if ($scope.view.rules[a].state == "edit") { //保存
                $scope.view.rules[a].state = "show";
            } else if ($scope.view.rules[a].state == "add") { //新增
                $scope.view.rules[a].state = "show";
            }
        },
        memberFn: function () { //会员获取
            // $scope.view.member = $scope.tem.member = ajaxSendFn({}, "/memberGrade", "GET").result || [];
            $scope.view.member = $scope.tem.member = $scope.view1.MEMBERGRADE || [];
            $scope.view.member1 = [];
            $scope.view.member = $filter('orderBy')($scope.view.member, 'grade');

            $scope.view.member1.push({
                id: "ALL",
                name: "全员"
            });

            $scope.view.member.push({
                id: "ALL",
                name: "全员"
            });
            $scope.view.member.push({
                id: "MEMBER",
                name: "任一会员"
            });
            if ($scope.tem.activityCategory == "GIVENUPGRADE") {
                $scope.view.member.push({
                    id: "CUSTOMER",
                    name: "非会员"
                });
            }
            if ($scope.tem.activityCategory == "COUPONFREE") {
                $scope.view.member.push({
                    id: "FOLLOWED",
                    name: "微信粉丝"
                });
            }
            $scope.tem.member1 = $scope.view.member;


        },
        postFn: function () { //发送数据
            var tem = $scope.view.rules.content;
            console.log(tem)
            // $scope.posts.rule.detail = {};
            $scope.ruleFn.addCouponFn()

        },
        addCouponFn: function () {
            var obj = {};
            obj.value = [{}];
            if (!$scope.posts.rule.detail || !$scope.posts.rule.detail.ALL) {
                $scope.posts.rule.detail = {
                    'ALL': [{}]
                }
            } else {
                $scope.posts.rule.detail.ALL.push(obj);
            }

            console.log("obj1")
            console.log(obj)
        },

        removeFn: function (b, c) {
            if ($scope.posts.rule.detail[b][c]) $scope.posts.rule.detail[b].splice(c, 1);
        },
        // 检查券id是否重复和券类型是否重复
        checkCouponList: function (values) {
            for (var i = 0; values && i < values.length - 1; i++) {
                for (var j = i + 1; j < values.length; j++) {
                    if (values[i].id === values[j].id) {
                        return true;
                    }
                }
            }
            for (var i = 0; values && i < values.length - 1; i++) {
                var oldtype = $scope.ruleFn.getCouponType(values[i].id);
                for (var j = 1; j < values.length; j++) {
                    var newType = $scope.ruleFn.getCouponType(values[j].id);
                    if (oldtype === newType) {
                        return true;
                    }
                }
            }
            return false;
        },
        //构建使用充值卡的数据
        sendChargeConsumeFn: function (a) {
            return $scope.ruleFn.sendFn(a, undefined, undefined, function (json) {
                var obj = json.detail.ALL[0];
                // if (obj.value) {
                //    obj.value = false;
                // } else {
                //    obj.value = true;
                // }
                obj.amount = 1;
                obj.currentAmount = obj.count = 0;
            });
        },
        sendCouponFn: function (a) {
            return $scope.ruleFn.sendFn(a, function (x, tem2) {
                if (x === "COUPON") {
                    for (var key in tem2) {
                        if (tem2[key] && tem2[key].length > 0 && $scope.ruleFn.checkCouponList(tem2[key][0].value)) {
                            return {
                                message: "券或券类型不能重复"
                            };
                        }
                    }
                }
            }, function (b, json) {
                if (b && b === "COUPON") {
                    for (var key in json.detail) {
                        var cache = {};
                        for (var item in json.detail[key]) {
                            if (cache[key] !== json.detail[key][item].value[0].id) {
                                cache[key] = json.detail[key][item].value[0].id;
                            } else {
                                return {
                                    message: "注意：券不能重复"
                                };
                            }
                        }
                    }
                }
            });
        },
        sendFn: function (a, beforeValidateFunc, afterValidateFunc, fixFunc) { ///没搞完，发送规则
            var tem = $scope.posts[a];
            //整理，删除不需要的规则
            /*    for (var x in tem) {
             if (!$scope.view.rules[a].uncheck) {
             if (!tem[x].check) {
             if ($scope.tem.rules && $scope.tem.rules[x]) delete $scope.tem.rules[x];
             if ($scope.view.rules[a].content[x]) {
             $scope.view.rules[a].content[x].detail = [];
             $scope.view.rules[a].content[x].check = false;
             }
             }
             }
             }*/
            //遍历有效规则，提交到服务器
            var json = {};
            // $scope.inviters = $scope.inviters.splite(",")
            // console.log();

            for (var x in tem) {
                if (!$scope.view.rules[a].uncheck) {
                    if (!tem[x].check) {
                        continue;
                    }
                }
                if ($scope.transferMapRev.hasOwnProperty(x)) {
                    json.type = $scope.transferMapRev[x];
                } else {
                    json.type = x;
                }
                json.detail = {};
                tem[x]._id && (json._id = tem[x]._id);
                tem[x].amountLimit && (json.amountLimit = tem[x].amountLimit);
                if (tem[x].celling) {
                    json.celling = parseInt(tem[x].celling) / 100;
                    // 仅限首次充值
                    if (tem[x].firstLimit) {
                        json.firstLimit = true;
                    } else {
                        json.firstLimit = false;
                    }
                }
                // 是否支持充值卡余额通用
                if (json.type == "CHARGE_CONSUME") {
                    if (tem[x].allpurpose) {
                        json.allpurpose = true;
                    } else {
                        json.allpurpose = false;
                    }

                }

                typeof tem[x].countLimit == 'number' && (json.countLimit = tem[x].countLimit);
                tem[x].timesLimit && (json.timesLimit = tem[x].timesLimit);
                tem[x].obtainCategory && (json.obtainCategory = tem[x].obtainCategory);

                var tem2 = tem[x].detail;
                //if (beforeValidateFunc && typeof(beforeValidateFunc) === "function") {
                //    var obj = beforeValidateFunc(x, tem2);
                //    if (obj) {
                //        alert(obj.message);
                //        return false;
                //    }
                //}

                var b;
                var arr = x.split("_");
                if (arr && arr.length > 1) {
                    b = arr[1];
                }

                for (z in tem2) {
                    for (w in tem2[z]) {
                        var tem3 = tem2[z][w],
                            json2 = {};
                        (typeof (tem3.amount) == 'number' || tem3.amount) && (json2.amount = tem3.amount);
                        tem3.score && (json2.score = tem3.score);
                        tem3.gradeId && (json2.gradeId = tem3.gradeId);
                        if (tem3.value && tem3.value.length != 0) {
                            json2.value = tem3.value;
                            if (json2.value && json2.value.length) {
                                for (var x in json2.value) {
                                    delete json2.value[x].$$hashKey;
                                }
                            }
                        } else if (json.type == "CHARGE_CONSUME") {
                            json2.value = false;
                        }
                        tem3.limit !== undefined && (json2.limit = tem3.limit);
                        tem3.count && (json2.count = tem3.count);
                        tem3.currentAmount && (json2.currentAmount = tem3.currentAmount);
                        // 添加分账规则
                        if (json.detail[tem3.id]) json.detail[tem3.id].push(json2);
                        else json.detail[tem3.id] = [json2];
                    }
                }

                if (json.type == "CHARGE") {
                    angular.forEach(json.detail.ALL, function (each, index) {
                        if (!each.value || !each.value[0].category) {
                            delete each.value
                        }
                    })
                }
                if (afterValidateFunc && typeof (afterValidateFunc) === "function") {
                    obj = afterValidateFunc(b, json);
                    if (obj) {
                        alert(obj.message);
                        return false;
                    }
                }
                if (fixFunc && typeof (fixFunc) === "function") {
                    fixFunc(json);
                }
            }
            // 验证授权邀请码是否正确
            if ($scope.tem.activityCategory == "TICKET") {
                if ($scope.tel.inviters) {
                    json.inviters = $scope.tel.inviters.split(",")
                } else {
                    alert("请输入邀请码");
                    return;
                }
            }

            // if (json.type == "CHARGE_CONSUME") {
            //     delete json.detail;
            // }

            var rulesend = ajaxSendFn(json, "/activity/" + $routeParams.activityid + "/rule", "POST", 1);
            if (rulesend.code == 200) { //
                $scope.ruleFn.oldRuleFn();
            } else {
                errorMsg(rulesend);
                return false;
            }
            return true;
        },
        addCouponPlanFn: function (a) {
            if (a != "new") return;
            $scope.ruleFn.showCouponPlanFn();
        },
        addRuleFn: function () { //显示添加面板
            $scope.view.modal = {
                title: "添加活动内容",
                html: "addrule"
            };
            $("#showadd").modal("show");
        },
        showCouponPlanFn: function (a) {
            $scope.view.modal = {
                title: "添加券",
                html: "couponNew"
            };
            $("#showadd").modal("show");
        },

        put: function (details, dv) {
            if (!details.value) {
                details.value = [];
            }
            dv = {};
            details.value.push(dv);
        },
        resetCouponCntFn: function (details, dv) {
            angular.forEach(details.value, function (data, idx) {
                if (data && data.id === dv.id) {
                    this.splice(idx, 1);
                }
            }, details.value);
        },
        containsCoupon: function (details, id) {
            var tmpIdx = -1;
            for (var i = 0; details.value && i < details.value.length; i++) {
                if (details.value[i].id === id) {
                    tmpIdx = i;
                    break;
                }
            }
            return tmpIdx;
        }
    };
    $scope.ruleFn.oldRuleFn();
    $scope.ruleFn.memberFn();

    $scope.ruleFn.postFn("CHARGE");

    $scope.cbdata = ajaxSendFn({}, "/activity/packet/" + $routeParams.id, "GET").result;
    $scope.posts = angular.copy($scope.cbdata)
    delete $scope.posts.createTime
    delete $scope.posts.id
    delete $scope.posts.offTime
    delete $scope.posts.onTime
    delete $scope.posts.dateRange
    delete $scope.posts.text
    delete $scope.posts.rule.detail.ALL.text
    for (var i = 0; i < $scope.set.list.length; i++) {
        for (var k = 0; k < $scope.posts.shops.length; k++) {
            if ($scope.set.list[i].id == $scope.posts.shops[k]) {
                $scope.set.shops[i] = $scope.posts.shops[k]
            }
        }
    }


    $scope.posts.rule.detail = {}
    $scope.posts.rule.detail.ALL = []
    var datadetail = $scope.cbdata.rule.detail;
    var detailkey = Object.keys(datadetail)
    for (var i = 0; i < detailkey.length; i++) {
        var key = detailkey[i]
        delete datadetail[key][0].text
        $scope.posts.rule.detail.ALL.push(datadetail[key][0])
        console.log(datadetail[key])
    }
    console.log("$scope.posts")
    console.log($scope.posts)
    $scope.view.date = {}
    $scope.view.dateRange = $scope.cbdata.dateRange;
    var dateRangeCategory = $scope.posts.dateRangeCategory
    $scope.view.date[dateRangeCategory] = $scope.cbdata.dateRange
    $scope.view.date.dateType = dateRangeCategory
    console.log($scope.view)



    // if ($scope.view.coupons.length) {
    //     $scope.view.category.push({id: 'COUPON', name: "优惠券"});
    // }
    // if ($scope.view.rewards.length) {
    //     $scope.view.category.push({id: 'REWARD', name: '代用币'});
    // }
    $scope.sendJsons = function () {
        console.log($scope.posts)
        if (!$scope.posts.picUrl) {
            alert("请先上传图片");
            return;
        }

        $scope.posts.shops = $scope.set.shops.filter(function (s) {
            return s && s.trim();
        });
        var json = angular.copy($scope.posts);

        json.rule.detail = {}
        var last = angular.copy($scope.posts.rule.detail.ALL)
        for (var i = 0; i < last.length; i++) {
            var vipid = last[i].id
            json.rule.detail[vipid] = [{
                "amount": last[i].amount,
                "value": last[i].value
            }]
        }
        console.log(json);
        json.dateRange = {};
        json.dateRangeCategory = $scope.view.date.dateType;
        // delete json.date;
        //start
        if ($scope.view.date.dateType === "CONTINUOUS") {
            if (!$scope.view.dateRange.startDate || !$scope.view.dateRange.endDate) {
                alert("请填写开始和结束日期!");
                return;
            }
            if ($scope.view.dateRange.endDate < $scope.view.dateRange.startDate) {
                alert("结束日期不能小于开始日期!");
                return;
            } else {
                json.dateRange.startDate = $filter("date")($scope.view.dateRange.startDate, "yyyy-MM-dd 00:00:00");
                json.dateRange.endDate = $filter("date")($scope.view.dateRange.endDate, "yyyy-MM-dd 23:59:59");
            }
        } else if ($scope.view.date.dateType === "BIRTHDAY" && $scope.view.date.subType === "AROUND_FIX_DATE") {
            json.dateRange.beforeDays = $scope.view.dateRange.beforeDays || 0;
            json.dateRange.afterDays = $scope.view.dateRange.afterDays || 0;
        }

        json.dateRange.selectCategory = $scope.view.dateRange.selectCategory || 'NONE';
        if ($scope.view.dateRange.subType === "MANUAL_SELECT") {
            var arr = arrayMap(objectKeys($scope.view.dateRange.selectDates), function (date) {
                return date + " 00:00:00";
            });
            if (!isEmptyObject(arr)) {
                json.dateRange.selectDates = arr;
            }
        } else if ($scope.view.dateRange.subType === "MONTH_DAYS") {
            var arr = arrayMap(objectKeys(mapFilter($scope.view.dateRange.selectDays, notNull)), parseInt);
            if (!isEmptyObject(arr)) {
                json.dateRange.selectDays = arr;
            }
        } else if ($scope.view.dateRange.subType === "WEEKLY_DAY") {
            var arr = arrayMap(objectKeys(mapFilter($scope.view.dateRange.selectWeekDays, notNull)), parseInt);
            if (!isEmptyObject(arr)) {
                json.dateRange.selectWeekDays = arr;
            }
        }

        //选择排除，必须要指定排队日期
        if ((json.dateRangeCategory !== "SELECTED_DATES") && (json.dateRange.selectCategory === 'EXCLUDE') && (objectCount(json.dateRange) == 1)) {
            alert("没有指定排除日期！");
            return;
        }

        //'指定日期'类型必须有数据
        if ((json.dateRangeCategory === "SELECTED_DATES") && (objectCount(json.dateRange) == 1)) {
            alert("没有指定日期！");
            return;
        }
        //end
        if (json.advertisement && !json.advertisement.id) {
            delete json.advertisement;
        }
        console.log(json);
        var url = "/activity/packet/" + $routeParams.id;
        // if ($routeParams.id) {
        //     url += "/" + $routeParams.id;
        // }
        var data = ajaxSendFn(json, url, "POST");
        if (data.code == 200) {
            alert("操作成功");
            window.history.back(-1)
        } else {
            alert(data.message);
        }
    }

    // $scope.ruleFn.buttonFn("CHARGE");

    /*
     * memberFn*/

    // $scope.ruleFn.getCpouponFn();
    $scope.checkAllShops = function () { //
        console.log($scope.posts.allShop)

        if ($scope.posts.allShop) {
            var shops = [];
            for (var i = 0; i < $scope.set.list.length; i++) {
                shops.push($scope.set.list[i].id)
            }
            $scope.set.shops = shops
        } else { //
            $scope.set.shops = [];
            $scope.posts.shops = []
        }
    }
    $scope.checkShops = function (key) {
        if (key == false) {
            delete key
            $scope.posts.allShop = false;
        }
        var arr = $scope.set.shops.filter(function (s) {
            return s && s.trim();
        });
        if (arr.length == $scope.set.list.length) {
            $scope.posts.allShop = true
        } else {
            $scope.posts.allShop = false;
        }
    }
}]);

app.controller("commissionCtr", ["$scope", "$http", "$filter", "$document", "$compile", "$rootScope", function ($scope, $http, $filter, $document, $compile, $rootScope) {
    $scope.config.breadset = [{ //
        name: "返佣管理",
        href: indexUrl + "/admin.html#/rule/commission",
        class: "commission"
    }, {
        name: "返佣管理"
    }]; //面包屑;
    $scope.view = {
        list: ajaxSendFn({}, "/activity/commision", "GET").result || [],
    };

    $scope.offFn = function (id) {
        var a = confirm("确认下线此活动？");
        if (a) {
            var data = ajaxSendFn({}, "/activity/commision/" + id + "/off", "POST");
            if (data.code == 200) {
                $scope.view.list = ajaxSendFn({}, "/activity/commision", "GET").result || [];
            } else {
                alert(data.message);
            }
        }
    };

    $scope.onFn = function (id) {
        var a = confirm("确认上线此活动？");
        if (a) {
            var data = ajaxSendFn({}, "/activity/commision/" + id + "/on", "POST");
            if (data.code == 200) {
                $scope.view.list = ajaxSendFn({}, "/activity/commision", "GET").result || [];
            } else {
                alert(data.message);
            }
        }
    };
    $scope.removeFn = function (id) {
        var a = confirm("确认删除？");
        if (a) {
            var data = ajaxSendFn({}, "/activity/commision/" + id, "DELETE");
            if (data.code == 200) {
                $scope.view.list = ajaxSendFn({}, "/activity/commision", "GET").result || [];
            } else {
                alert(data.message);
            }
        }
    };

}]);

app.controller("addcommissionCtr", ["$scope", "$http", '$routeParams', "$filter", "$location", 'CouponFactory', function ($scope, $http, $routeParams, $filter, $location, couponFac) {
    $scope.config.breadset = [{ //
        name: "返佣管理",
        href: indexUrl + "/admin.html#/rule/addcommission",
        class: "addcommission"
    }, {
        name: "返佣管理"
    }]; //面包屑;

    $scope.view = {
        category: []
    };
    $scope.view1 = {};
    $scope.transferMap = {
        POINT_CONSUME: "POINTCONSUME",
        COUPON_FREE: "COUPONFREE",
        CHARGE_CONSUME: "CHARGECONSUME",
        SPECIAL_PRICE: "SPECIALPRICE",
        LIMIT_REDUCE: "LIMITREDUCE",
        SPEND_AS: "SPENDAS",
        SET_MEAL: "SETMEAL",
        GIVEN_UPGRADE: "GIVENUPGRADE",
        CHARGE_FREE: "CHARGEFREE",
        BIRTH_BENEFIT: "BIRTHBENEFIT",
        FIRST_GIFT: "FIRSTGIFT",

    };
    $scope.transferMapRev = {
        POINTCONSUME: "POINT_CONSUME",
        COUPONFREE: "COUPON_FREE",
        CHARGECONSUME: "CHARGE_CONSUME",
        SPECIALPRICE: "SPECIAL_PRICE",
        LIMITREDUCE: "LIMIT_REDUCE",
        SPENDAS: "SPEND_AS",
        SETMEAL: "SET_MEAL",
        GIVENUPGRADE: "GIVEN_UPGRADE",
        CHARGEFREE: "CHARGE_FREE",
        BIRTHBENEFIT: "BIRTH_BENEFIT",
        FIRSTGIFT: "FIRST_GIFT"
    };
    $scope.tem = {
        rules: {}
    };
    $scope.allShop = false
    $scope.set = {
        times: ajaxSendFn({}, "/businesstimes/all", "GET").result,
        list: ajaxSendFn({
            state: 1002
        }, "/shops", "GET").result,
        allocate: ajaxSendFn({}, "/activity/allocate/8003", "GET").result || [],
        allocates: [],
        shops: []
    };
    console.log($scope.set.times)
    if (!$scope.set.list) {
        alert("目前还没有添加门店");
        $location.path("/shops");
    }

    $scope.set.nonParticipation = ajaxSendFn({}, "/nonParticipation/content", "GET").result; //非参与项
    $scope.checkallstr = 0;

    $scope.posts = {
        shops: []
    };
    $scope.coupon = {
        shared: [],
        shops: []
    };
    $scope.cons = function (val) {
        console.log("highest")
        console.log(val)
    }



    $scope.temcoupons2 = {};
    $scope.temcoupons = [];
    $scope.ruleCategory = consumeRuleObj;
    $scope.ruleCategory1 = onlineRuleObj;
    $scope.obtainRepeatCategory = obtainRepeatCategory;

    $scope.ruleFn = {
        openOrClose: function () {
            $("#add").modal("show");
            $scope.isOpenOrClose = true;
        },
        testAddOk: function () {
            $("#add").modal("hide");
            $scope.isOpenOrClose = false;
            alert("添加成功");
            //$scope.view.coupons = couponFac.getAllCoupon();
        },
        testAddFail: function (result) {
            //console.log("错误编号:" + result.code + ", 错误信息:" + result.message);
            errorMsg(result);
        },
        getCpouponFn: function () {
            console.log($scope.view);
            $scope.view1 = ajaxSendFn({}, "/activity/factor", "GET").result || [];
            $scope.view.coupons = $scope.view1.COUPON || [];
            $scope.view.rewards = $scope.view1.REWARD || [];
            console.log("1111");
            console.log($scope.view);
            // $scope.view.allocate = $scope.view1.ALLOCATE || [];
            // $scope.view.coupons = ajaxSendFn({}, "/activity/factor", "GET").result || [];
            // $scope.view.rewards = ajaxSendFn({}, "/activity/factor", "GET").result || [];
        },
        getCouponType: function (id) {
            for (var i = 0; $scope.view.coupons && i < $scope.view.coupons.length; i++) {
                if ($scope.view.coupons[i].id === id) {
                    return $scope.view.coupons[i].category;
                }
            }
        },
        changeCoupon: function (value, dv) {
            if (dv.id) {
                dv.count = 1;
                for (var i = 0; i < $scope.view.coupons.length; i++) {
                    if ($scope.view.coupons[i].id === dv.id) {
                        dv.name = $scope.view.coupons[i].name;
                        break;
                    }
                }
            }
        },
        oldRuleFn: function () { //从服务器获取目前的规则列表

            $scope.ruleFn.getCpouponFn();
            switch ('CHARGE') {
                case "DISCOUNT":
                    $scope.view.rules = {
                        "DISCOUNT": {
                            name: "打折",
                            uncheck: true,
                            state: "",
                            show: 0,
                            addFunc: $scope.ruleFn.addFn,
                            postFunc: $scope.ruleFn.sendFn,
                            content: {
                                DISCOUNT: []
                            }
                        }
                    };
                    break;
                case "CHARGE":
                    $scope.view.rules = {
                        "CHARGE": {
                            name: "充值",
                            uncheck: true,
                            state: "",
                            show: 0,
                            addFunc: $scope.ruleFn.addCouponFn,
                            postFunc: $scope.ruleFn.sendCouponFn,
                            content: {
                                CHARGE: []
                            }
                        }
                    };
                    break;

            }
            console.log("222222")
            console.log($scope.view.rules)
            $scope.view.shop = ajaxSendFn({
                state: "1002"
            }, "/shops", "GET").result || [];
            $scope.tem.shops = [];
            for (var x in $scope.view.shop) $scope.tem.shops.push($scope.view.shop[x].id);

            $scope.tem.rules = {}
            $scope.tem.rules[$scope.tem.rules.type] = $scope.tem.rules;

        },
        stateFn: function (a, b, c, d) { //key,state,show,点击添加规则时调用
            var aRe = a.split("_")[0];
            if (aRe in $scope.view.rules) {
                $scope.view.rules[aRe].state = b;
                $scope.view.rules[aRe].show = c;
            }
            if (b == "add") $scope.ruleFn.buttonFn(a);
            if (!d) { //只让添加一项,就让设定活动内容按钮灰掉,d无值表示是手动点击
                $scope.btnDisable = 1;
                return;
            }
            var tem = d.type;
            if (c) {
                d.celling && (d.celling = d.celling * 100);
                $scope.view.rules[aRe].content[tem] = d
            }
        },
        closeFn: function (a) { //取消按钮
            if ($scope.view.rules[a].state == "edit") { //保存
                $scope.view.rules[a].state = "show";
            } else if ($scope.view.rules[a].state == "add") { //新增
                $scope.view.rules[a].state = "show";
            }
        },
        buttonFn: function (a) { //活动保存按钮  del
            if ($scope.view.rules[a].state == "show") { //修改
                $scope.ruleFn.postFn(a);
                $scope.ruleFn.memberFn();
                $scope.ruleFn.getSeparate()
                $scope.view.rules[a].state = "edit";
            } else if ($scope.view.rules[a].state == "edit") { //保存
                var res = $scope.ruleFn.sendCouponFn();
                if (res) {
                    //$location.path("/rule");
                    $scope.view.rules[a].state = "show";
                }
            } else if ($scope.view.rules[a].state == "add") { //新增
                for (x in $scope.view.rules[a].content) $scope.view.rules[a].addFunc(x);
                $scope.view.rules[a].state = "edit";
                $("#showadd").modal("hide");
            }
        },

        postFn: function (a) { //发送数据
            var tem = $scope.view.rules[a].content;
            console.log(tem)
            $scope.posts[a] = {};
            for (x in tem) {
                var needCheck = true;
                $scope.posts[a][x] = tem[x];
                if (tem[x] instanceof Array) {
                    needCheck = false;
                }
                $scope.posts[a][x].check = needCheck;
                if (!tem[x].detail || !Object.keys(tem[x].detail).length) {
                    $scope.view.rules[a].addFunc(x);
                }
            }

        },
        addCouponFn: function (x) {
            $scope.ruleFn.addFn(x, function (a, b) {
                //if (a === "COUPON" || a === "GAME" || b === "COUPON" || x === "COUPONFREE" || x === "SPECIALPRICE") {
                if ($scope.posts[a][x].detail != undefined) {
                    if ($scope.posts[a][x].detail.ALL != undefined) {
                        var arr = $scope.posts[a][x].detail.ALL;
                    } else {
                        $scope.posts[a][x].detail.ALL = []
                    }
                } else {
                    $scope.posts[a][x].detail = {}
                    $scope.posts[a][x].detail.ALL = []
                }

                if (arr && arr.length > 0 && !isEmptyObject(arr[0])) {
                    var obj = {};
                    obj.value = {};
                    obj.allocates = []
                    for (var i = 0; i < $scope.set.list.length; i++) {
                        obj.allocates[i] = {
                            'highest': 'false',
                            'id': ''
                        }
                    }
                    $scope.posts[a][x].detail.ALL.push(obj);
                    console.log("obj1")
                    console.log(obj)
                } else {
                    var obj = {}
                    obj.value = {};
                    obj.allocates = []
                    for (var i = 0; i < $scope.set.list.length; i++) {
                        obj.allocates[i] = {
                            'highest': 'false',
                            'id': ''
                        }
                    }
                    $scope.posts[a][x].detail.ALL.push(obj);
                    console.log("obj2")
                    console.log(obj)
                }

                console.log("$$hashKey")
                console.log($scope.posts[a][x].detail.ALL)
                //}
            })

        },
        addFn: function (x, cb) { //
            var cnt = 0;
            var a, b;
            var arr = x.split("_");
            if (arr && arr.length > 0) {
                a = arr[0];
            }
            if (arr && arr.length > 1) {
                b = arr[1];
            }
            if (!$scope.posts[a] || !$scope.posts[a][x] || !$scope.posts[a][x].detail || isEmptyObject($scope.posts[a][x].detail)) {
                if (!$scope.posts[a]) $scope.posts[a] = {};
                $scope.posts[a][x] = $scope.view.rules[a].content[x];
                // var obj = {};
                // obj.allocates=[]
                // for(var i=0;i<$scope.set.list.length;i++){           
                //     obj.allocates[i]={
                //         'highest':'false',
                //         'id':''
                //     }
                // }

                // $scope.posts[a][x].detail = {
                //     "ALL": [obj]
                // };
                if (cb) cb(a, b);
                return;
            }
            if ($scope.posts[a][x].detail.ALL) {
                // var obj = {};
                // obj.allocates=[]
                // for(var i=0;i<$scope.set.list.length;i++){           
                //     obj.allocates[i]={
                //         'highest':'false',
                //         'id':''
                //     }
                // }
                if (cb) {
                    cb(a, b);
                } else {
                    // $scope.posts[a][x].detail.ALL.push(obj);
                }
            } else {
                // var obj = {};
                // obj.allocates=[]
                // for(var i=0;i<$scope.set.list.length;i++){           
                //     obj.allocates[i]={
                //         'highest':'false',
                //         'id':''
                //     }
                // }
                // $scope.posts[a][x].detail.ALL = [obj];
                if (cb) cb(a, b);
            }
            console.log("$$hashKey")
            console.log($scope.posts[a][x].detail.ALL)

        },
        removeFn: function (x, b, c) {
            var a = x.split("_")[0];
            if ($scope.posts[a][x].detail[b][c]) $scope.posts[a][x].detail[b].splice(c, 1);
        },
        //构建使用充值卡的数据
        sendChargeConsumeFn: function (a) {
            return $scope.ruleFn.sendFn(a, undefined, undefined, function (json) {
                var obj = json.detail.ALL[0];
                // if (obj.value) {
                //    obj.value = false;
                // } else {
                //    obj.value = true;
                // }
                obj.amount = 1;
                obj.currentAmount = obj.count = 0;
            });
        },
        sendFn: function (a, beforeValidateFunc, afterValidateFunc, fixFunc) { ///没搞完，发送规则
            var tem = $scope.posts[a];
            //整理，删除不需要的规则
            /*    for (var x in tem) {
             if (!$scope.view.rules[a].uncheck) {
             if (!tem[x].check) {
             if ($scope.tem.rules && $scope.tem.rules[x]) delete $scope.tem.rules[x];
             if ($scope.view.rules[a].content[x]) {
             $scope.view.rules[a].content[x].detail = [];
             $scope.view.rules[a].content[x].check = false;
             }
             }
             }
             }*/
            //遍历有效规则，提交到服务器
            var json = {};
            // $scope.inviters = $scope.inviters.splite(",")
            // console.log();

            for (var x in tem) {
                if (!$scope.view.rules[a].uncheck) {
                    if (!tem[x].check) {
                        continue;
                    }
                }
                if ($scope.transferMapRev.hasOwnProperty(x)) {
                    json.type = $scope.transferMapRev[x];
                } else {
                    json.type = x;
                }
                json.detail = {};
                tem[x]._id && (json._id = tem[x]._id);
                tem[x].amountLimit && (json.amountLimit = tem[x].amountLimit);
                if (tem[x].celling) {
                    json.celling = parseInt(tem[x].celling) / 100;
                    // 仅限首次充值
                    if (tem[x].firstLimit) {
                        json.firstLimit = true;
                    } else {
                        json.firstLimit = false;
                    }
                }
                // 是否支持充值卡余额通用
                if (json.type == "CHARGE_CONSUME") {
                    if (tem[x].allpurpose) {
                        json.allpurpose = true;
                    } else {
                        json.allpurpose = false;
                    }
                }

                typeof tem[x].countLimit == 'number' && (json.countLimit = tem[x].countLimit);
                tem[x].timesLimit && (json.timesLimit = tem[x].timesLimit);
                tem[x].obtainCategory && (json.obtainCategory = tem[x].obtainCategory);

                var tem2 = tem[x].detail;
                //if (beforeValidateFunc && typeof(beforeValidateFunc) === "function") {
                //    var obj = beforeValidateFunc(x, tem2);
                //    if (obj) {
                //        alert(obj.message);
                //        return false;
                //    }
                //}

                var b;
                var arr = x.split("_");
                if (arr && arr.length > 1) {
                    b = arr[1];
                }

                for (z in tem2) {
                    for (w in tem2[z]) {
                        var tem3 = tem2[z][w],
                            json2 = {};
                        (typeof (tem3.amount) == 'number' || tem3.amount) && (json2.amount = tem3.amount);
                        tem3.score && (json2.score = tem3.score);
                        tem3.gradeId && (json2.gradeId = tem3.gradeId);
                        if (tem3.value && tem3.value.length != 0) {
                            json2.value = tem3.value;
                            if (json2.value && json2.value.length) {
                                for (var x in json2.value) {
                                    delete json2.value[x].$$hashKey;
                                }
                            }
                        } else if (json.type == "CHARGE_CONSUME") {
                            json2.value = false;
                        }
                        tem3.limit !== undefined && (json2.limit = tem3.limit);
                        tem3.count && (json2.count = tem3.count);
                        tem3.currentAmount && (json2.currentAmount = tem3.currentAmount);
                        // 添加分账规则
                        if (json.detail[tem3.id]) json.detail[tem3.id].push(json2);
                        else json.detail[tem3.id] = [json2];
                    }
                }

                if (json.type == "CHARGE") {
                    angular.forEach(json.detail.ALL, function (each, index) {
                        if (!each.value || !each.value[0].category) {
                            delete each.value
                        }
                    })
                }
                if (afterValidateFunc && typeof (afterValidateFunc) === "function") {
                    obj = afterValidateFunc(b, json);
                    if (obj) {
                        alert(obj.message);
                        return false;
                    }
                }
                if (fixFunc && typeof (fixFunc) === "function") {
                    fixFunc(json);
                }
            }
            // 验证授权邀请码是否正确
            if ($scope.tem.activityCategory == "TICKET") {
                if ($scope.tel.inviters) {
                    json.inviters = $scope.tel.inviters.split(",")
                } else {
                    alert("请输入邀请码");
                    return;
                }
            }

            // if (json.type == "CHARGE_CONSUME") {
            //     delete json.detail;
            // }

            var rulesend = ajaxSendFn(json, "/activity/" + $routeParams.activityid + "/rule", "POST", 1);
            if (rulesend.code == 200) { //
                $scope.ruleFn.oldRuleFn();
            } else {
                errorMsg(rulesend);
                return false;
            }
            return true;
        },
        addRuleFn: function () { //显示添加面板
            $scope.view.modal = {
                title: "添加活动内容",
                html: "addrule"
            };
            $("#showadd").modal("show");
        },

        put: function (details, dv) {
            if (!details.value) {
                details.value = {};
            }
            dv = {};
            details.value.push(dv);
        },
        resetCouponCntFn: function (details, dv) {
            angular.forEach(details.value, function (data, idx) {
                if (data && data.id === dv.id) {
                    this.splice(idx, 1);
                }
            }, details.value);
        },
        containsCoupon: function (details, id) {
            var tmpIdx = -1;
            for (var i = 0; details.value && i < details.value.length; i++) {
                if (details.value[i].id === id) {
                    tmpIdx = i;
                    break;
                }
            }
            return tmpIdx;
        }
    };
    $scope.ruleFn.oldRuleFn();



    // if ($scope.view.coupons.length) {
    //     $scope.view.category.push({id: 'COUPON', name: "优惠券"});
    // }
    // if ($scope.view.rewards.length) {
    //     $scope.view.category.push({id: 'REWARD', name: '代用币'});
    // }
    $scope.sendJsons = function () {
        console.log($scope.posts)
        if (!$scope.posts.picUrl) {
            alert("请先上传图片");
            return;
        }


        $scope.posts.shops = $scope.set.shops.filter(function (s) {
            return s && s.trim();
        });

        var json = angular.copy($scope.posts);

        delete json.CHARGE;
        json.rule = {}
        json.rule.detail = angular.copy($scope.posts.CHARGE.CHARGE.detail)

        for (var k = 0; k < $scope.posts.CHARGE.CHARGE.detail.ALL.length; k++) {
            var allocates = $scope.posts.CHARGE.CHARGE.detail.ALL[k].allocates
            json.rule.detail.ALL[k].allocates = []
            for (var i = 0; i < allocates.length; i++) {
                if (allocates[i].id) {
                    json.rule.detail.ALL[k].allocates.push(allocates[i])
                }
            }
        }

        console.log(json);
        json.dateRange = {};
        json.dateRangeCategory = $scope.view.date.dateType;
        // delete json.date;
        //start
        if ($scope.view.date.dateType === "CONTINUOUS") {
            if (!$scope.view.dateRange.startDate || !$scope.view.dateRange.endDate) {
                alert("请填写开始和结束日期!");
                return;
            }
            if ($scope.view.dateRange.endDate < $scope.view.dateRange.startDate) {
                alert("结束日期不能小于开始日期!");
                return;
            } else {
                json.dateRange.startDate = $filter("date")($scope.view.dateRange.startDate, "yyyy-MM-dd 00:00:00");
                json.dateRange.endDate = $filter("date")($scope.view.dateRange.endDate, "yyyy-MM-dd 23:59:59");
            }
        } else if ($scope.view.date.dateType === "BIRTHDAY" && $scope.view.date.subType === "AROUND_FIX_DATE") {
            json.dateRange.beforeDays = $scope.view.dateRange.beforeDays || 0;
            json.dateRange.afterDays = $scope.view.dateRange.afterDays || 0;
        }

        json.dateRange.selectCategory = $scope.view.dateRange.selectCategory || 'NONE';
        if ($scope.view.dateRange.subType === "MANUAL_SELECT") {
            var arr = arrayMap(objectKeys($scope.view.dateRange.selectDates), function (date) {
                return date + " 00:00:00";
            });
            if (!isEmptyObject(arr)) {
                json.dateRange.selectDates = arr;
            }
        } else if ($scope.view.dateRange.subType === "MONTH_DAYS") {
            var arr = arrayMap(objectKeys(mapFilter($scope.view.dateRange.selectDays, notNull)), parseInt);
            if (!isEmptyObject(arr)) {
                json.dateRange.selectDays = arr;
            }
        } else if ($scope.view.dateRange.subType === "WEEKLY_DAY") {
            var arr = arrayMap(objectKeys(mapFilter($scope.view.dateRange.selectWeekDays, notNull)), parseInt);
            if (!isEmptyObject(arr)) {
                json.dateRange.selectWeekDays = arr;
            }
        }

        //选择排除，必须要指定排队日期
        if ((json.dateRangeCategory !== "SELECTED_DATES") && (json.dateRange.selectCategory === 'EXCLUDE') && (objectCount(json.dateRange) == 1)) {
            alert("没有指定排除日期！");
            return;
        }

        //'指定日期'类型必须有数据
        if ((json.dateRangeCategory === "SELECTED_DATES") && (objectCount(json.dateRange) == 1)) {
            alert("没有指定日期！");
            return;
        }
        //end
        if (json.advertisement && !json.advertisement.id) {
            delete json.advertisement;
        }
        console.log(json);
        var url = "/activity/commision";
        // if ($routeParams.id) {
        //     url += "/" + $routeParams.id;
        // }
        var data = ajaxSendFn(json, url, "POST");
        if (data.code == 200) {
            alert("操作成功");
            $location.path("/rule/addcommission");
        } else {
            alert(data.message);
        }
    }
    // $scope.ruleFn.buttonFn("CHARGE");
    $scope.ruleFn.postFn("CHARGE");
    // for(var k=0;k<$scope.posts.CHARGE.CHARGE.detail.ALL.length;k++){
    //     $scope.set.allocates[k]={}
    //     $scope.set.allocates[k].allocates=[]
    //     for(var i=0;i<$scope.set.list.length;i++){           
    //         $scope.set.allocates[k].allocates[i]={
    //             'highest':'false',
    //             'id':''
    //         }
    //     }
    // }
    /*
     * memberFn*/

    // $scope.ruleFn.getCpouponFn();
    if ($scope.tem && $scope.tem.activityCategory && isEmptyObject($scope.tem.rules)) {
        $scope.ruleFn.stateFn($scope.tem.activityCategory, 'add', 1)
    }
    $scope.checkAllShops = function () { //
        console.log($scope.posts.allShop)

        if ($scope.posts.allShop) { //
            var shops = [];
            for (var i = 0; i < $scope.set.list.length; i++) {
                shops.push($scope.set.list[i].id)
            }
            $scope.set.shops = shops
        } else { //
            $scope.set.shops = [];
            $scope.posts.shops = []
        }
    }
    $scope.checkShops = function (key) {
        if (key == false) {
            delete key
            $scope.posts.allShop = false;
        }
        var arr = $scope.set.shops.filter(function (s) {
            return s && s.trim();
        });
        if (arr.length == $scope.set.list.length) {
            $scope.posts.allShop = true
        } else {
            $scope.posts.allShop = false;
        }
    }
}]);

app.controller("editcommissionCtr", ["$scope", "$http", '$routeParams', "$filter", "$location", 'CouponFactory', function ($scope, $http, $routeParams, $filter, $location, couponFac) {
    $scope.config.breadset = [{ //
        name: "返佣管理",
        href: indexUrl + "/admin.html#/rule/editcommission",
        class: "editcommission"
    }, {
        name: "返佣管理"
    }]; //面包屑;

    $scope.view = {
        category: []
    };
    $scope.view1 = {};
    $scope.transferMap = {
        POINT_CONSUME: "POINTCONSUME",
        COUPON_FREE: "COUPONFREE",
        CHARGE_CONSUME: "CHARGECONSUME",
        SPECIAL_PRICE: "SPECIALPRICE",
        LIMIT_REDUCE: "LIMITREDUCE",
        SPEND_AS: "SPENDAS",
        SET_MEAL: "SETMEAL",
        GIVEN_UPGRADE: "GIVENUPGRADE",
        CHARGE_FREE: "CHARGEFREE",
        BIRTH_BENEFIT: "BIRTHBENEFIT",
        FIRST_GIFT: "FIRSTGIFT",

    };
    $scope.transferMapRev = {
        POINTCONSUME: "POINT_CONSUME",
        COUPONFREE: "COUPON_FREE",
        CHARGECONSUME: "CHARGE_CONSUME",
        SPECIALPRICE: "SPECIAL_PRICE",
        LIMITREDUCE: "LIMIT_REDUCE",
        SPENDAS: "SPEND_AS",
        SETMEAL: "SET_MEAL",
        GIVENUPGRADE: "GIVEN_UPGRADE",
        CHARGEFREE: "CHARGE_FREE",
        BIRTHBENEFIT: "BIRTH_BENEFIT",
        FIRSTGIFT: "FIRST_GIFT"
    };
    $scope.tem = {
        rules: {}
    };
    $scope.allShop = false
    $scope.set = {
        times: ajaxSendFn({}, "/businesstimes/all", "GET").result,
        list: ajaxSendFn({
            state: 1002
        }, "/shops", "GET").result,
        allocate: ajaxSendFn({}, "/activity/allocate/8003", "GET").result || [],
        allocates: [],
        shops: []
    };
    console.log($scope.set.times)
    if (!$scope.set.list) {
        alert("目前还没有添加门店");
        $location.path("/shops");
    }
    $scope.set.nonParticipation = ajaxSendFn({}, "/nonParticipation/content", "GET").result; //非参与项
    $scope.checkallstr = 0;

    $scope.posts = {
        shops: [],
        rule: {
            detail: []
        },
        allDay: false
    };
    $scope.coupon = {
        shared: [],
        shops: []
    };


    $scope.temcoupons2 = {};
    $scope.temcoupons = [];
    $scope.ruleCategory = consumeRuleObj;
    $scope.ruleCategory1 = onlineRuleObj;
    $scope.obtainRepeatCategory = obtainRepeatCategory;

    $scope.ruleFn = {
        getCpouponFn: function () {
            console.log($scope.view);
            $scope.view1 = ajaxSendFn({}, "/activity/factor", "GET").result || [];
            $scope.view.coupons = $scope.view1.COUPON || [];
            $scope.view.rewards = $scope.view1.REWARD || [];
            console.log("1111");
            console.log($scope.view);
            // $scope.view.allocate = $scope.view1.ALLOCATE || [];
            // $scope.view.coupons = ajaxSendFn({}, "/activity/factor", "GET").result || [];
            // $scope.view.rewards = ajaxSendFn({}, "/activity/factor", "GET").result || [];
        },
        getCouponType: function (id) {
            for (var i = 0; $scope.view.coupons && i < $scope.view.coupons.length; i++) {
                if ($scope.view.coupons[i].id === id) {
                    return $scope.view.coupons[i].category;
                }
            }
        },
        changeCoupon: function (value, dv) {
            if (dv.id) {
                dv.count = 1;
                for (var i = 0; i < $scope.view.coupons.length; i++) {
                    if ($scope.view.coupons[i].id === dv.id) {
                        dv.name = $scope.view.coupons[i].name;
                        break;
                    }
                }
            }
        },
        oldRuleFn: function () { //从服务器获取目前的规则列表

            $scope.ruleFn.getCpouponFn();

            $scope.view.rules = {
                name: "充值",
                uncheck: true,
                state: "",
                show: 0,
                addFunc: $scope.ruleFn.addCouponFn,
                postFunc: $scope.ruleFn.sendCouponFn,
                content: {
                    CHARGE: []
                }
            };
            console.log("222222")
            console.log($scope.view.rules)
            $scope.view.shop = ajaxSendFn({
                state: "1002"
            }, "/shops", "GET").result || [];
            $scope.tem.shops = [];
            for (var x in $scope.view.shop) $scope.tem.shops.push($scope.view.shop[x].id);

        },
        closeFn: function (a) { //取消按钮
            if ($scope.view.rules[a].state == "edit") { //保存
                $scope.view.rules[a].state = "show";
            } else if ($scope.view.rules[a].state == "add") { //新增
                $scope.view.rules[a].state = "show";
            }
        },
        postFn: function () { //发送数据
            var tem = $scope.view.rules.content;
            console.log(tem)
            $scope.ruleFn.addCouponFn()
        },
        addCouponFn: function () {
            var obj = {};
            obj.value = {};
            obj.allocates = [];
            for (var i = 0; i < $scope.set.list.length; i++) {
                obj.allocates[i] = {
                    'highest': 'false',
                    'id': ''
                }
            }
            if (!$scope.posts.rule.detail || !$scope.posts.rule.detail.ALL) {
                $scope.posts.rule.detail = {
                    'ALL': [obj]
                }
            } else {
                $scope.posts.rule.detail.ALL.push(obj);
            }
        },

        removeFn: function (x, b, c) {
            if ($scope.posts.rule.detail[b][c]) $scope.posts.rule.detail[b].splice(c, 1);
        },
        //构建使用充值卡的数据
        sendChargeConsumeFn: function (a) {
            return $scope.ruleFn.sendFn(a, undefined, undefined, function (json) {
                var obj = json.detail.ALL[0];
                // if (obj.value) {
                //    obj.value = false;
                // } else {
                //    obj.value = true;
                // }
                obj.amount = 1;
                obj.currentAmount = obj.count = 0;
            });
        },
        sendFn: function (a, beforeValidateFunc, afterValidateFunc, fixFunc) { ///没搞完，发送规则
            var tem = $scope.posts[a];
            //整理，删除不需要的规则
            /*    for (var x in tem) {
             if (!$scope.view.rules[a].uncheck) {
             if (!tem[x].check) {
             if ($scope.tem.rules && $scope.tem.rules[x]) delete $scope.tem.rules[x];
             if ($scope.view.rules[a].content[x]) {
             $scope.view.rules[a].content[x].detail = [];
             $scope.view.rules[a].content[x].check = false;
             }
             }
             }
             }*/
            //遍历有效规则，提交到服务器
            var json = {};
            // $scope.inviters = $scope.inviters.splite(",")
            // console.log();

            for (var x in tem) {
                if (!$scope.view.rules[a].uncheck) {
                    if (!tem[x].check) {
                        continue;
                    }
                }
                if ($scope.transferMapRev.hasOwnProperty(x)) {
                    json.type = $scope.transferMapRev[x];
                } else {
                    json.type = x;
                }
                json.detail = {};
                tem[x]._id && (json._id = tem[x]._id);
                tem[x].amountLimit && (json.amountLimit = tem[x].amountLimit);
                if (tem[x].celling) {
                    json.celling = parseInt(tem[x].celling) / 100;
                    // 仅限首次充值
                    if (tem[x].firstLimit) {
                        json.firstLimit = true;
                    } else {
                        json.firstLimit = false;
                    }
                }
                // 是否支持充值卡余额通用
                if (json.type == "CHARGE_CONSUME") {
                    if (tem[x].allpurpose) {
                        json.allpurpose = true;
                    } else {
                        json.allpurpose = false;
                    }
                }

                typeof tem[x].countLimit == 'number' && (json.countLimit = tem[x].countLimit);
                tem[x].timesLimit && (json.timesLimit = tem[x].timesLimit);
                tem[x].obtainCategory && (json.obtainCategory = tem[x].obtainCategory);

                var tem2 = tem[x].detail;
                //if (beforeValidateFunc && typeof(beforeValidateFunc) === "function") {
                //    var obj = beforeValidateFunc(x, tem2);
                //    if (obj) {
                //        alert(obj.message);
                //        return false;
                //    }
                //}

                var b;
                var arr = x.split("_");
                if (arr && arr.length > 1) {
                    b = arr[1];
                }

                for (z in tem2) {
                    for (w in tem2[z]) {
                        var tem3 = tem2[z][w],
                            json2 = {};
                        (typeof (tem3.amount) == 'number' || tem3.amount) && (json2.amount = tem3.amount);
                        tem3.score && (json2.score = tem3.score);
                        tem3.gradeId && (json2.gradeId = tem3.gradeId);
                        if (tem3.value && tem3.value.length != 0) {
                            json2.value = tem3.value;
                            if (json2.value && json2.value.length) {
                                for (var x in json2.value) {
                                    delete json2.value[x].$$hashKey;
                                }
                            }
                        } else if (json.type == "CHARGE_CONSUME") {
                            json2.value = false;
                        }
                        tem3.limit !== undefined && (json2.limit = tem3.limit);
                        tem3.count && (json2.count = tem3.count);
                        tem3.currentAmount && (json2.currentAmount = tem3.currentAmount);
                        // 添加分账规则
                        if (json.detail[tem3.id]) json.detail[tem3.id].push(json2);
                        else json.detail[tem3.id] = [json2];
                    }
                }

                if (json.type == "CHARGE") {
                    angular.forEach(json.detail.ALL, function (each, index) {
                        if (!each.value || !each.value[0].category) {
                            delete each.value
                        }
                    })
                }
                if (afterValidateFunc && typeof (afterValidateFunc) === "function") {
                    obj = afterValidateFunc(b, json);
                    if (obj) {
                        alert(obj.message);
                        return false;
                    }
                }
                if (fixFunc && typeof (fixFunc) === "function") {
                    fixFunc(json);
                }
            }
            // 验证授权邀请码是否正确
            if ($scope.tem.activityCategory == "TICKET") {
                if ($scope.tel.inviters) {
                    json.inviters = $scope.tel.inviters.split(",")
                } else {
                    alert("请输入邀请码");
                    return;
                }
            }

            // if (json.type == "CHARGE_CONSUME") {
            //     delete json.detail;
            // }

            var rulesend = ajaxSendFn(json, "/activity/" + $routeParams.activityid + "/rule", "POST", 1);
            if (rulesend.code == 200) { //
                $scope.ruleFn.oldRuleFn();
            } else {
                errorMsg(rulesend);
                return false;
            }
            return true;
        },
        addRuleFn: function () { //显示添加面板
            $scope.view.modal = {
                title: "添加活动内容",
                html: "addrule"
            };
            $("#showadd").modal("show");
        },

        put: function (details, dv) {
            if (!details.value) {
                details.value = {};
            }
            dv = {};
            details.value.push(dv);
        },
        resetCouponCntFn: function (details, dv) {
            angular.forEach(details.value, function (data, idx) {
                if (data && data.id === dv.id) {
                    this.splice(idx, 1);
                }
            }, details.value);
        },
        containsCoupon: function (details, id) {
            var tmpIdx = -1;
            for (var i = 0; details.value && i < details.value.length; i++) {
                if (details.value[i].id === id) {
                    tmpIdx = i;
                    break;
                }
            }
            return tmpIdx;
        }
    };

    $scope.ruleFn.oldRuleFn();
    $scope.ruleFn.postFn("CHARGE");

    $scope.cbdata = ajaxSendFn({}, "/activity/commision/" + $routeParams.id, "GET").result;
    $scope.posts = angular.copy($scope.cbdata)
    delete $scope.posts.createTime
    delete $scope.posts.id
    delete $scope.posts.offTime
    delete $scope.posts.onTime
    delete $scope.posts.dateRange
    delete $scope.posts.text
    delete $scope.posts.rule.detail.ALL.text
    for (var i = 0; i < $scope.set.list.length; i++) {
        for (var k = 0; k < $scope.posts.shops.length; k++) {
            if ($scope.set.list[i].id == $scope.posts.shops[k]) {
                $scope.set.shops[i] = $scope.posts.shops[k]
            }
        }
    }
    for (var i = 0; i < $scope.cbdata.rule.detail.ALL.length; i++) {
        var allocates = $scope.cbdata.rule.detail.ALL[i].allocates
        var allocate = []
        for (var k = 0; k < allocates.length; k++) {
            for (var j = 0; j < $scope.set.allocate.length; j++) {
                if (allocates[k].id == $scope.set.allocate[j].id) {
                    allocate[j] = {}
                    allocate[j].id = allocates[k].id
                    if (allocates[k].highest == false) {
                        allocate[j].highest = 'false'
                    } else {
                        allocate[j].highest = 'true'
                    }

                }
            }
        }
        for (var k = 0; k < allocate.length; k++) {
            if (allocate[k] == null) {
                allocate[k] = {}
            }
        }
        $scope.posts.rule.detail.ALL[i].allocates = allocate
    }
    console.log("$scope.posts")
    console.log($scope.posts)
    $scope.view.date = {}
    $scope.view.dateRange = $scope.cbdata.dateRange;
    var dateRangeCategory = $scope.posts.dateRangeCategory
    $scope.view.date[dateRangeCategory] = $scope.cbdata.dateRange
    $scope.view.date.dateType = dateRangeCategory
    console.log($scope.view)

    $scope.sendJsons = function () {
        console.log($scope.posts)
        if (!$scope.posts.picUrl) {
            alert("请先上传图片");
            return;
        }


        $scope.posts.shops = $scope.set.shops.filter(function (s) {
            return s && s.trim();
        });

        var json = angular.copy($scope.posts);

        delete json.CHARGE;
        json.rule = {}
        json.rule.detail = angular.copy($scope.posts.rule.detail)
        // json.rule.detail.ALL=angular.copy($scope.posts.rule.detail.ALL)
        for (var i = 0; i < $scope.posts.rule.detail.ALL.length; i++) {
            delete json.rule.detail.ALL[i].text
            for (var j = 0; j < json.rule.detail.ALL[i].allocates.length; j++) {
                if (json.rule.detail.ALL[i].allocates[j].id == 'false' || json.rule.detail.ALL[i].allocates[j].id == '') {
                    json.rule.detail.ALL[i].allocates.splice(j, 1)
                }
            }


        }
        console.log(json);
        json.dateRange = {};
        json.dateRangeCategory = $scope.view.date.dateType;
        // delete json.date;
        //start
        if ($scope.view.date.dateType === "CONTINUOUS") {
            if (!$scope.view.dateRange.startDate || !$scope.view.dateRange.endDate) {
                alert("请填写开始和结束日期!");
                return;
            }
            if ($scope.view.dateRange.endDate < $scope.view.dateRange.startDate) {
                alert("结束日期不能小于开始日期!");
                return;
            } else {
                json.dateRange.startDate = $filter("date")($scope.view.dateRange.startDate, "yyyy-MM-dd 00:00:00");
                json.dateRange.endDate = $filter("date")($scope.view.dateRange.endDate, "yyyy-MM-dd 23:59:59");
            }
        } else if ($scope.view.date.dateType === "BIRTHDAY" && $scope.view.date.subType === "AROUND_FIX_DATE") {
            json.dateRange.beforeDays = $scope.view.dateRange.beforeDays || 0;
            json.dateRange.afterDays = $scope.view.dateRange.afterDays || 0;
        }

        json.dateRange.selectCategory = $scope.view.dateRange.selectCategory || 'NONE';
        if ($scope.view.dateRange.subType === "MANUAL_SELECT") {
            var arr = arrayMap(objectKeys($scope.view.dateRange.selectDates), function (date) {
                return date + " 00:00:00";
            });
            if (!isEmptyObject(arr)) {
                json.dateRange.selectDates = arr;
            }
        } else if ($scope.view.dateRange.subType === "MONTH_DAYS") {
            var arr = arrayMap(objectKeys(mapFilter($scope.view.dateRange.selectDays, notNull)), parseInt);
            if (!isEmptyObject(arr)) {
                json.dateRange.selectDays = arr;
            }
        } else if ($scope.view.dateRange.subType === "WEEKLY_DAY") {
            var arr = arrayMap(objectKeys(mapFilter($scope.view.dateRange.selectWeekDays, notNull)), parseInt);
            if (!isEmptyObject(arr)) {
                json.dateRange.selectWeekDays = arr;
            }
        }

        //选择排除，必须要指定排队日期
        if ((json.dateRangeCategory !== "SELECTED_DATES") && (json.dateRange.selectCategory === 'EXCLUDE') && (objectCount(json.dateRange) == 1)) {
            alert("没有指定排除日期！");
            return;
        }

        //'指定日期'类型必须有数据
        if ((json.dateRangeCategory === "SELECTED_DATES") && (objectCount(json.dateRange) == 1)) {
            alert("没有指定日期！");
            return;
        }
        //end
        if (json.advertisement && !json.advertisement.id) {
            delete json.advertisement;
        }
        console.log(json);
        var url = "/activity/commision/" + $routeParams.id;
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

    if ($scope.tem && $scope.tem.activityCategory && isEmptyObject($scope.tem.rules)) {
        $scope.ruleFn.stateFn($scope.tem.activityCategory, 'add', 1)
    }
    $scope.checkAllShops = function () { //
        console.log($scope.posts.allShop)

        if ($scope.posts.allShop) { //
            var shops = [];
            for (var i = 0; i < $scope.set.list.length; i++) {
                shops.push($scope.set.list[i].id)
            }
            $scope.set.shops = shops
        } else { //
            $scope.set.shops = [];
            $scope.posts.shops = []
        }
    }
    $scope.checkShops = function (key) {
        if (key == false) {
            delete key
            $scope.posts.allShop = false;
        }
        var arr = $scope.set.shops.filter(function (s) {
            return s && s.trim();
        });
        if (arr.length == $scope.set.list.length) {
            $scope.posts.allShop = true
        } else {
            $scope.posts.allShop = false;
        }
    }
}]);

app.controller('videoCtr', function ($scope, $sce, $location, $http) { //shoplist over
    $scope.config.breadset = [{ //
        name: "视频管理",
        href: indexUrl + "/admin.html#/rule/video",
        class: 'video'
    }, {
        name: "视频列表"
    }]; //面包屑
    $scope.post = {};
    $scope.posts = {
        materials: []
    };
    $scope.view = {
        materials: ajaxSendFn({}, "/videos", "GET").result || [],
        groups: ajaxSendFn({}, "/videos/group", "GET").result || [],
        leftIndex: -2
    };
    $scope.videoUrlFun = function (url) {
        var urlFun = $sce.trustAsResourceUrl(url);
        return urlFun;
    };
    $scope.submitFn = function () {
        var data = ajaxSendFn({
            name: $scope.post.name
        }, "/videos/group", "POST");
        if (data.code === 200) {
            $scope.view.groups = ajaxSendFn({}, "/videos/group", "GET").result;
            $scope.view.checkName = false;
        } else {
            alert(data.message);
        }
    };
    $scope.closepop = function () {
        $scope.add = false
    }
    $scope.groupList = function (index) {
        url = "/videos";
        if (index >= 0) {
            url = "/videos/group/" + $scope.view.groups[index].id + "/videos"
        }
        if (index == -1) {
            url = "/videos/group/videos";
        }
        $scope.view.materials = ajaxSendFn({}, url, "GET").result;
        $scope.view.leftIndex = index;

    }
    $scope.separateGroup = function (index, id) {
        var data = ajaxSendFn({
            ids: id
        }, "/videos/group/" + $scope.view.groups[index].id + "/videos", "PUT");
        if (data.code === 200) {
            alert("操作成功");
        } else {
            alert(data.message);
        }
    }
    $scope.pageChange = function () {
        url = "/videos";
        if ($scope.view.leftIndex >= 0) {
            url = "/videos/group/" + $scope.view.groups[$scope.view.leftIndex].id + "/videos"
        }
        if ($scope.view.leftIndex == -1) {
            url = "/videos/group/videos";
        }
        var json = {
            page: $scope.view.materials.page,
            count: $scope.view.materials.count
        };
        $scope.view.materials = ajaxSendFn(json, url, "GET").result;
    };
    $scope.temimgshow = function (t) {
        console.log("点击")
        // if (t.files[0].size > 5 * 1024 * 1024) {
        //     alert("图片不得大于5M，图片格式为png,jpg,jpeg,bmp");
        //     return;
        // }
        var form = document.getElementById("videoform");
        var formData = new FormData(form);
        formData.append("cover", $scope.picUrl);
        formData.append("title", $scope.title);
        formData.append("description", $scope.description);
        var url = "/videos";
        if ($scope.view.leftIndex >= 0) {
            url = "/videos/group/" + $scope.view.groups[$scope.view.leftIndex].id + "/video"
        }
        POSTurl = basicUrl + url + "?";
        options = {
            url: POSTurl + sortUrl(),
            type: "POST",
            success: function (data) {
                if (data.code === 200) {
                    alert("操作成功");
                    $scope.add = false
                    $scope.$apply(function () {
                        url = "/videos";
                        if ($scope.view.leftIndex >= 0) {
                            url = "/videos/group/" + $scope.view.groups[$scope.view.leftIndex].id + "/videos"
                        }
                        if ($scope.view.leftIndex == -1) {
                            url = "/videos/group/videos";
                        }
                        $scope.view.materials = ajaxSendFn({
                            count: 10
                        }, url, "GET").result;
                    });
                } else {
                    alert(data.message);
                }

            }
        };
        $("#videoform").ajaxSubmit(options);
    };

    $scope.remove = function (index) {
        if (!confirm("一旦删除将不可恢复，是否确认删除？")) return false;
        var data = ajaxSendFn({}, "/videos/" + $scope.view.materials.items[index].id, "DELETE");
        if (data.code == 200) { //
            $scope.view.materials.items.splice(index, 1);
        } else { //
            alert(data.message);
        }
    };
    $scope.removeAll = function () {
        if (!$scope.posts.dishes.length) {
            alert("请先选择要删除的图片！");
            return;
        }
        if (!confirm("一旦删除将不可恢复，是否确认删除？")) return false;
        var data = ajaxSendFn($scope.posts.dishes, "/dishes/ids", "DELETE");
        if (data.code == 200) {
            $scope.post = {};
            $scope.view.materials = ajaxSendFn({}, "/material", "GET").result;
        } else {
            alert(data.message);
        }
    };
    $scope.checkAllDishes = function () {
        if ($scope.materialAll) $scope.posts.materials = [];
        else {
            angular.forEach($scope.view.materials.items, function (value, key) {
                this[key] = value.id;
            }, $scope.post);
        }
    }

});


// 代客下单--列表
app.controller("orderCtr", ["$scope", "$http", "$filter", "$document", "$compile", "$rootScope", function ($scope, $http, $filter, $document, $compile, $rootScope) {
    $scope.config.breadset = [{ //
        name: "代客下单",
        href: indexUrl + "/admin.html#/rule/order",
        class: "order"
    }, {
        name: "代客下单"
    }]; //面包屑;
    $scope.shops = ajaxSendFn({
        state: 1002
    }, "/shops", "GET").result;

    $scope.list = ajaxSendFn({}, "/activity/takeout", "GET").result;
    // 获取店铺对应的文字
    $scope.filterfn = function (id) {
        for (var i = 0; i < $scope.shops.length; i++) {
            if ($scope.shops[i].id == id) {
                return $scope.shops[i].name
            }
        }
    }
    // 处理配送信息
    $scope.list.items.map(function (item) {
        let str = '';
        for (var i in item.deliver) {
            str += i + "公里:";
            item.deliver[i].map(function (k) {
                str += '订单金额' + k.amount + '元,收取配送费' + k.value + '元'
            })
        }
        item.deliverText = str;

    })
    // 上线
    $scope.onFn = function (id) {
        let url = '/activity/takeout/' + id + '/on'
        var res = ajaxSendFn({}, url, "POST");
        if (res.code.code == 200) {
            alert('上线成功')
            $scope.list = ajaxSendFn({}, "/activity/takeout", "GET").result;
        } else {
            alert(res.message)
        }
    };
    // 下线
    $scope.offFn = function (id) {
        let url = '/activity/takeout/' + id + '/off'
        var res = ajaxSendFn({}, url, "POST");
        if (res.code.code == 200) {
            alert('下线成功')
            $scope.list = ajaxSendFn({}, "/activity/takeout", "GET").result;
        } else {
            alert(res.message)
        }
    };
    // 删除
    $scope.removeFn = function (id) {
        let url = '/activity/takeout/' + id;
        var a = confirm("确认删除？");
        if (a) {
            var res = ajaxSendFn({}, url, "DELETE");
            if (res.code.code == 200) {
                alert('删除成功')
                $scope.list = ajaxSendFn({}, "/activity/takeout", "GET").result;
            } else {
                alert(res.message)
            }
        }

    }

}]);
// 代客下单--修改
app.controller("editOrderCtr", ["$scope", "$http", '$routeParams', "$filter", "$location", 'CouponFactory', function ($scope, $http, $routeParams, $filter, $location, couponFac) {
    $scope.config.breadset = [{ //
        name: "代客下单",
        href: indexUrl + "/admin.html#/rule/editOrder",
        class: "edit"
    }, {
        name: "代客下单"
    }]; //面包屑;

    $scope.view = {
        date: {
            dateType: ''
        },

        category: []
    };
    $scope.view1 = {};
    $scope.transferMap = {
        POINT_CONSUME: "POINTCONSUME",
        COUPON_FREE: "COUPONFREE",
        CHARGE_CONSUME: "CHARGECONSUME",
        SPECIAL_PRICE: "SPECIALPRICE",
        LIMIT_REDUCE: "LIMITREDUCE",
        SPEND_AS: "SPENDAS",
        SET_MEAL: "SETMEAL",
        GIVEN_UPGRADE: "GIVENUPGRADE",
        CHARGE_FREE: "CHARGEFREE",
        BIRTH_BENEFIT: "BIRTHBENEFIT",
        FIRST_GIFT: "FIRSTGIFT",

    };
    $scope.transferMapRev = {
        POINTCONSUME: "POINT_CONSUME",
        COUPONFREE: "COUPON_FREE",
        CHARGECONSUME: "CHARGE_CONSUME",
        SPECIALPRICE: "SPECIAL_PRICE",
        LIMITREDUCE: "LIMIT_REDUCE",
        SPENDAS: "SPEND_AS",
        SETMEAL: "SET_MEAL",
        GIVENUPGRADE: "GIVEN_UPGRADE",
        CHARGEFREE: "CHARGE_FREE",
        BIRTHBENEFIT: "BIRTH_BENEFIT",
        FIRSTGIFT: "FIRST_GIFT"
    };
    $scope.tem = {
        rules: {}
    };
    $scope.allShop = false;
    $scope.posts = ajaxSendFn({}, "/activity/takeout/" + $routeParams.id, "GET").result;

    $scope.view.dateRange = $scope.posts.dateRange;
    var dateRangeCategory = $scope.posts.dateRangeCategory;

    // $scope.view.date[dateRangeCategory] = $scope.posts.dateRange
    $scope.view.date.dateType = dateRangeCategory

    $scope.set = {
        times: ajaxSendFn({}, "/businesstimes/all", "GET").result,
        list: ajaxSendFn({
            state: 1002
        }, "/shops", "GET").result,
        allocate: ajaxSendFn({}, "/activity/allocate/8015", "GET").result || [],
        // 业务提成
        allocates: [{
            key: '',
            value: ''
        }],
        // 配送
        deliver: [],
        list2: [],
        timeType: {
            "1001": "早市",
            "1002": "午市",
            "1003": "下午茶",
            "1004": "晚市",
            "1005": "宵夜"
        },
        // shops: [],
        personLimitDetail: [{
            'amount': '',
            "count": ''
        }],
        countLimit: 0,
        shops: $scope.posts.shops,
        pathways: $scope.posts.pathways
    };

    // 处理一下提成
    if ($scope.posts.allocates) {

    } else {
        $scope.posts.allocates = {}
    }


    // 处理一下配送费
    if ($scope.posts.deliver) {
        for (var item in $scope.posts.deliver) {
            let obj = {};
            obj.key = item - 0;
            obj.values = $scope.posts.deliver[item];
            $scope.set.deliver.push(obj);
        }
    }
    console.log('获取配送')
    console.log($scope.set.deliver)

    // 添加一个业务提成
    $scope.addAllocates = function () {
        $scope.set.allocates.push({
            key: '',
            value: ''
        })
    }
    // 添加配送费
    $scope.addDeliverData = function () {
        $scope.set.deliver.push({
            key: 0,
            values: [{
                "amount": 0,
                "value": 0
            }]
        })
    }
    $scope.addEachMile = function (index) {
        $scope.set.deliver[index].values.push({
                "amount": 0,
                "value": 0
            }

        )
    }

    // 添加配送费---end

    $scope.set.time = getSubtimes($scope.set.times, $scope.set.timeType);
    if (!$scope.set.list) {
        alert("目前还没有添加门店");
        $location.path("/shops");
    }
    $scope.checkallstr = 0;

    $scope.coupon = {
        shared: [],
        shops: []
    };
    $scope.cons = function (val) {
        console.log("highest")
        console.log(val)
    }
    console.log($scope.vidUrl)

    $scope.temcoupons2 = {};
    $scope.temcoupons = [];
    $scope.ruleCategory = consumeRuleObj;
    $scope.ruleCategory1 = onlineRuleObj;
    $scope.obtainRepeatCategory = obtainRepeatCategory;

    $scope.ruleFn = {
        openOrClose: function () {
            $("#add").modal("show");
            $scope.isOpenOrClose = true;
        },
        testAddOk: function () {
            $("#add").modal("hide");
            $scope.isOpenOrClose = false;
            alert("添加成功");
            //$scope.view.coupons = couponFac.getAllCoupon();
        },
        testAddFail: function (result) {
            //console.log("错误编号:" + result.code + ", 错误信息:" + result.message);
            errorMsg(result);
        },
        getCpouponFn: function () {
            console.log($scope.view);
            $scope.view1 = ajaxSendFn({}, "/activity/factor", "GET").result || [];
            $scope.view.coupons = $scope.view1.COUPON || [];
            $scope.view.rewards = $scope.view1.REWARD || [];
            console.log("1111");
            console.log($scope.view);
            // $scope.view.allocate = $scope.view1.ALLOCATE || [];
            // $scope.view.coupons = ajaxSendFn({}, "/activity/factor", "GET").result || [];
            // $scope.view.rewards = ajaxSendFn({}, "/activity/factor", "GET").result || [];
        },
        getCouponType: function (id) {
            for (var i = 0; $scope.view.coupons && i < $scope.view.coupons.length; i++) {
                if ($scope.view.coupons[i].id === id) {
                    return $scope.view.coupons[i].category;
                }
            }
        },
        changeCoupon: function (value, dv) {
            if (dv.id) {
                dv.count = 1;
                for (var i = 0; i < $scope.view.coupons.length; i++) {
                    if ($scope.view.coupons[i].id === dv.id) {
                        dv.name = $scope.view.coupons[i].name;
                        break;
                    }
                }
            }
        },
        oldRuleFn: function () { //从服务器获取目前的规则列表

            $scope.ruleFn.getCpouponFn();
            switch ('CHARGE') {
                case "DISCOUNT":
                    $scope.view.rules = {
                        "DISCOUNT": {
                            name: "打折",
                            uncheck: true,
                            state: "",
                            show: 0,
                            addFunc: $scope.ruleFn.addFn,
                            postFunc: $scope.ruleFn.sendFn,
                            content: {
                                DISCOUNT: []
                            }
                        }
                    };
                    break;
                case "CHARGE":
                    $scope.view.rules = {
                        "CHARGE": {
                            name: "充值",
                            uncheck: true,
                            state: "",
                            show: 0,
                            addFunc: $scope.ruleFn.addCouponFn,
                            postFunc: $scope.ruleFn.sendCouponFn,
                            content: {
                                CHARGE: []
                            }
                        }
                    };
                    break;

            }

            console.log($scope.view.rules)
            $scope.view.shop = ajaxSendFn({
                state: "1002"
            }, "/shops", "GET").result || [];
            $scope.tem.shops = [];
            for (var x in $scope.view.shop) $scope.tem.shops.push($scope.view.shop[x].id);

            $scope.tem.rules = {}
            $scope.tem.rules[$scope.tem.rules.type] = $scope.tem.rules;

        },
        stateFn: function (a, b, c, d) { //key,state,show,点击添加规则时调用
            var aRe = a.split("_")[0];
            if (aRe in $scope.view.rules) {
                $scope.view.rules[aRe].state = b;
                $scope.view.rules[aRe].show = c;
            }
            if (b == "add") $scope.ruleFn.buttonFn(a);
            if (!d) { //只让添加一项,就让设定活动内容按钮灰掉,d无值表示是手动点击
                $scope.btnDisable = 1;
                return;
            }
            var tem = d.type;
            if (c) {
                d.celling && (d.celling = d.celling * 100);
                $scope.view.rules[aRe].content[tem] = d
            }
        },
        closeFn: function (a) { //取消按钮
            if ($scope.view.rules[a].state == "edit") { //保存
                $scope.view.rules[a].state = "show";
            } else if ($scope.view.rules[a].state == "add") { //新增
                $scope.view.rules[a].state = "show";
            }
        },
        buttonFn: function (a) { //活动保存按钮  del
            if ($scope.view.rules[a].state == "show") { //修改
                $scope.ruleFn.postFn(a);
                $scope.ruleFn.memberFn();
                $scope.view.rules[a].state = "edit";
            } else if ($scope.view.rules[a].state == "edit") { //保存
                var res = $scope.ruleFn.sendCouponFn();
                if (res) {
                    //$location.path("/rule");
                    $scope.view.rules[a].state = "show";
                }
            } else if ($scope.view.rules[a].state == "add") { //新增
                for (x in $scope.view.rules[a].content) $scope.view.rules[a].addFunc(x);
                $scope.view.rules[a].state = "edit";
                $("#showadd").modal("hide");
            }
        },

        postFn: function (a) { //发送数据
            var tem = $scope.view.rules[a].content;
            console.log(tem)
            $scope.posts[a] = {};
            for (x in tem) {
                var needCheck = true;
                $scope.posts[a][x] = tem[x];
                if (tem[x] instanceof Array) {
                    needCheck = false;
                }
                $scope.posts[a][x].check = needCheck;
                if (!tem[x].detail || !Object.keys(tem[x].detail).length) {
                    $scope.view.rules[a].addFunc(x);
                }
            }

        },
        addCouponFn: function (x) {
            $scope.ruleFn.addFn(x, function (a, b) {
                //if (a === "COUPON" || a === "GAME" || b === "COUPON" || x === "COUPONFREE" || x === "SPECIALPRICE") {
                if ($scope.posts[a][x].detail != undefined) {
                    if ($scope.posts[a][x].detail.ALL != undefined) {
                        var arr = $scope.posts[a][x].detail.ALL;
                    } else {
                        $scope.posts[a][x].detail.ALL = []
                    }
                } else {
                    $scope.posts[a][x].detail = {}
                    $scope.posts[a][x].detail.ALL = []
                }

                if (arr && arr.length > 0 && !isEmptyObject(arr[0])) {
                    var obj = {};
                    obj.value = {};
                    obj.allocates = []
                    for (var i = 0; i < $scope.set.list.length; i++) {
                        obj.allocates[i] = {
                            'highest': 'false',
                            'id': ''
                        }
                    }
                    $scope.posts[a][x].detail.ALL.push(obj);
                    console.log("obj1")
                    console.log(obj)
                } else {
                    var obj = {}
                    obj.value = {};
                    obj.allocates = []
                    for (var i = 0; i < $scope.set.list.length; i++) {
                        obj.allocates[i] = {
                            'highest': 'false',
                            'id': ''
                        }
                    }
                    $scope.posts[a][x].detail.ALL.push(obj);
                    console.log("obj2")
                    console.log(obj)
                }

                console.log("$$hashKey")
                console.log($scope.posts[a][x].detail.ALL)
                //}
            })

        },

        addFn: function (x, cb) { //
            var cnt = 0;
            var a, b;
            var arr = x.split("_");
            if (arr && arr.length > 0) {
                a = arr[0];
            }
            if (arr && arr.length > 1) {
                b = arr[1];
            }
            if (!$scope.posts[a] || !$scope.posts[a][x] || !$scope.posts[a][x].detail || isEmptyObject($scope.posts[a][x].detail)) {
                if (!$scope.posts[a]) $scope.posts[a] = {};
                $scope.posts[a][x] = $scope.view.rules[a].content[x];
                // if (!$scope.posts[a][x].detail || isEmptyObject($scope.posts[a][x].detail))
                // $scope.posts[a][x].detail = {
                //     "ALL": [{}]
                // };
                if (cb) cb(a, b);
                return;
            }
            if ($scope.posts[a][x].detail.ALL) {
                // var obj = {};
                if (cb) {
                    cb(a, b);
                } else {
                    // $scope.posts[a][x].detail.ALL.push(obj);
                }
            } else {
                // $scope.posts[a][x].detail.ALL = [{}];
                if (cb) cb(a, b);
            }
            console.log("$$hashKey")
            console.log($scope.posts[a][x].detail.ALL)

        },
        removeFn: function (x, b, c) {
            var a = x.split("_")[0];
            if ($scope.posts[a][x].detail[b][c]) $scope.posts[a][x].detail[b].splice(c, 1);
        },
        //构建使用充值卡的数据
        sendChargeConsumeFn: function (a) {
            return $scope.ruleFn.sendFn(a, undefined, undefined, function (json) {
                var obj = json.detail.ALL[0];

                obj.amount = 1;
                obj.currentAmount = obj.count = 0;
            });
        },
        sendFn: function (a, beforeValidateFunc, afterValidateFunc, fixFunc) { ///没搞完，发送规则
            var tem = $scope.posts[a];
            var json = {};
            for (var x in tem) {
                if (!$scope.view.rules[a].uncheck) {
                    if (!tem[x].check) {
                        continue;
                    }
                }
                if ($scope.transferMapRev.hasOwnProperty(x)) {
                    json.type = $scope.transferMapRev[x];
                } else {
                    json.type = x;
                }
                json.detail = {};
                tem[x]._id && (json._id = tem[x]._id);
                tem[x].amountLimit && (json.amountLimit = tem[x].amountLimit);
                if (tem[x].celling) {
                    json.celling = parseInt(tem[x].celling) / 100;
                    // 仅限首次充值
                    if (tem[x].firstLimit) {
                        json.firstLimit = true;
                    } else {
                        json.firstLimit = false;
                    }
                }
                // 是否支持充值卡余额通用
                if (json.type == "CHARGE_CONSUME") {
                    if (tem[x].allpurpose) {
                        json.allpurpose = true;
                    } else {
                        json.allpurpose = false;
                    }
                }

                typeof tem[x].countLimit == 'number' && (json.countLimit = tem[x].countLimit);
                tem[x].timesLimit && (json.timesLimit = tem[x].timesLimit);
                tem[x].obtainCategory && (json.obtainCategory = tem[x].obtainCategory);

                var tem2 = tem[x].detail;

                var b;
                var arr = x.split("_");
                if (arr && arr.length > 1) {
                    b = arr[1];
                }

                for (z in tem2) {
                    for (w in tem2[z]) {
                        var tem3 = tem2[z][w],
                            json2 = {};
                        (typeof (tem3.amount) == 'number' || tem3.amount) && (json2.amount = tem3.amount);
                        tem3.score && (json2.score = tem3.score);
                        tem3.gradeId && (json2.gradeId = tem3.gradeId);
                        if (tem3.value && tem3.value.length != 0) {
                            json2.value = tem3.value;
                            if (json2.value && json2.value.length) {
                                for (var x in json2.value) {
                                    delete json2.value[x].$$hashKey;
                                }
                            }
                        } else if (json.type == "CHARGE_CONSUME") {
                            json2.value = false;
                        }
                        tem3.limit !== undefined && (json2.limit = tem3.limit);
                        tem3.count && (json2.count = tem3.count);
                        tem3.currentAmount && (json2.currentAmount = tem3.currentAmount);
                        // 添加分账规则
                        if (json.detail[tem3.id]) json.detail[tem3.id].push(json2);
                        else json.detail[tem3.id] = [json2];
                    }
                }

                if (json.type == "CHARGE") {
                    angular.forEach(json.detail.ALL, function (each, index) {
                        if (!each.value || !each.value[0].category) {
                            delete each.value
                        }
                    })
                }
                if (afterValidateFunc && typeof (afterValidateFunc) === "function") {
                    obj = afterValidateFunc(b, json);
                    if (obj) {
                        alert(obj.message);
                        return false;
                    }
                }
                if (fixFunc && typeof (fixFunc) === "function") {
                    fixFunc(json);
                }
            }
            // 验证授权邀请码是否正确
            if ($scope.tem.activityCategory == "TICKET") {
                if ($scope.tel.inviters) {
                    json.inviters = $scope.tel.inviters.split(",")
                } else {
                    alert("请输入邀请码");
                    return;
                }
            }
            var rulesend = ajaxSendFn(json, "/activity/" + $routeParams.activityid + "/rule", "POST", 1);
            if (rulesend.code == 200) { //
                $scope.ruleFn.oldRuleFn();
            } else {
                errorMsg(rulesend);
                return false;
            }
            return true;
        },
        addRuleFn: function () { //显示添加面板
            $scope.view.modal = {
                title: "添加活动内容",
                html: "addrule"
            };
            $("#showadd").modal("show");
        },

        put: function (details, dv) {
            if (!details.value) {
                details.value = {};
            }
            dv = {};
            details.value.push(dv);
        },
        resetCouponCntFn: function (details, dv) {
            angular.forEach(details.value, function (data, idx) {
                if (data && data.id === dv.id) {
                    this.splice(idx, 1);
                }
            }, details.value);
        },
        containsCoupon: function (details, id) {
            var tmpIdx = -1;
            for (var i = 0; details.value && i < details.value.length; i++) {
                if (details.value[i].id === id) {
                    tmpIdx = i;
                    break;
                }
            }
            return tmpIdx;
        }
    };
    $scope.addPepFn = function () {
        if ($scope.set.personLimitDetail) {
            $scope.set.personLimitDetail.push({
                'amount': '',
                "count": ''
            })
        }
    };
    $scope.removePepFn = function (b) {
        if ($scope.set.personLimitDetail[b]) $scope.set.personLimitDetail.splice(b, 1);
    };
    $scope.ruleFn.oldRuleFn();
    $scope.sendJsons1 = function () {


        $scope.posts.shops = $scope.set.shops.filter(function (s) {
            return s && s.trim();
        });

        var json = angular.copy($scope.posts);

        delete json.CHARGE;

        console.log(json);
        json.dateRange = {};
        json.dateRangeCategory = $scope.view.date.dateType;

        if ($scope.view.date.dateType === "CONTINUOUS") {
            if (!$scope.view.dateRange.startDate || !$scope.view.dateRange.endDate) {
                alert("请填写开始和结束日期!");
                return;
            }
            if ($scope.view.dateRange.endDate < $scope.view.dateRange.startDate) {
                alert("结束日期不能小于开始日期!");
                return;
            } else {
                json.dateRange.startDate = $filter("date")($scope.view.dateRange.startDate, "yyyy-MM-dd 00:00:00");
                json.dateRange.endDate = $filter("date")($scope.view.dateRange.endDate, "yyyy-MM-dd 23:59:59");
            }
        } else if ($scope.view.date.dateType === "BIRTHDAY" && $scope.view.date.subType === "AROUND_FIX_DATE") {
            json.dateRange.beforeDays = $scope.view.dateRange.beforeDays || 0;
            json.dateRange.afterDays = $scope.view.dateRange.afterDays || 0;
        }

        json.dateRange.selectCategory = $scope.view.dateRange.selectCategory || 'NONE';
        if ($scope.view.dateRange.subType === "MANUAL_SELECT") {
            var arr = arrayMap(objectKeys($scope.view.dateRange.selectDates), function (date) {
                return date + " 00:00:00";
            });
            if (!isEmptyObject(arr)) {
                json.dateRange.selectDates = arr;
            }
        } else if ($scope.view.dateRange.subType === "MONTH_DAYS") {
            var arr = arrayMap(objectKeys(mapFilter($scope.view.dateRange.selectDays, notNull)), parseInt);
            if (!isEmptyObject(arr)) {
                json.dateRange.selectDays = arr;
            }
        } else if ($scope.view.dateRange.subType === "WEEKLY_DAY") {
            var arr = arrayMap(objectKeys(mapFilter($scope.view.dateRange.selectWeekDays, notNull)), parseInt);
            if (!isEmptyObject(arr)) {
                json.dateRange.selectWeekDays = arr;
            }
        }

        //选择排除，必须要指定排队日期
        if ((json.dateRangeCategory !== "SELECTED_DATES") && (json.dateRange.selectCategory === 'EXCLUDE') && (objectCount(json.dateRange) == 1)) {
            alert("没有指定排除日期！");
            return;
        }

        //'指定日期'类型必须有数据
        if ((json.dateRangeCategory === "SELECTED_DATES") && (objectCount(json.dateRange) == 1)) {
            alert("没有指定日期！");
            return;
        }
        //end
        if (json.advertisement && !json.advertisement.id) {
            delete json.advertisement;
        }

        var url = "/activity/takeout/" + $routeParams.id;
        json.deliver = {}
        $scope.set.deliver.map(function (item) {
            console.log(item)
            let key = item.key;
            let value = item.values;
            for (var x in item.values) {
                delete item.values[x].$$hashKey;
            }
            json.deliver[key] = value

        })
        if (json.packetActId) {
            delete json.packetActId
        }
        var data = ajaxSendFn(json, url, "POST");
        if (data.code == 200) {
            alert("操作成功");
            $location.path("/rule/order");
        } else {
            alert(data.message);
        }
    }
    // $scope.ruleFn.buttonFn("CHARGE");
    $scope.ruleFn.postFn("CHARGE");

    // $scope.ruleFn.getCpouponFn();
    if ($scope.tem && $scope.tem.activityCategory && isEmptyObject($scope.tem.rules)) {
        $scope.ruleFn.stateFn($scope.tem.activityCategory, 'add', 1)
    }
    $scope.checkAllShops = function () { //
        console.log($scope.posts.allShop)

        if ($scope.posts.allShop) { //
            var shops = [];
            for (var i = 0; i < $scope.set.list.length; i++) {
                shops.push($scope.set.list[i].id)
            }
            $scope.set.shops = shops
        } else { //
            $scope.set.shops = [];
            $scope.posts.shops = []
        }
    }
    $scope.checkShops = function (key) {
        if (key == false) {
            delete key
            $scope.posts.allShop = false;
        }
        var arr = $scope.set.shops.filter(function (s) {
            return s && s.trim();
        });
        if (arr.length == $scope.set.list.length) {
            $scope.posts.allShop = true
        } else {
            $scope.posts.allShop = false;
        }
    }
}]);
// 代客下单--添加
app.controller("addOrderCtr", ["$scope", "$http", '$routeParams', "$filter", "$location", 'CouponFactory', function ($scope, $http, $routeParams, $filter, $location, couponFac) {
    $scope.config.breadset = [{ //
        name: "代客下单",
        href: indexUrl + "/admin.html#/rule/orderAdd",
        class: "add"
    }, {
        name: "代客下单"
    }]; //面包屑;

    $scope.view = {
        category: []
    };
    $scope.view1 = {};
    $scope.transferMap = {
        POINT_CONSUME: "POINTCONSUME",
        COUPON_FREE: "COUPONFREE",
        CHARGE_CONSUME: "CHARGECONSUME",
        SPECIAL_PRICE: "SPECIALPRICE",
        LIMIT_REDUCE: "LIMITREDUCE",
        SPEND_AS: "SPENDAS",
        SET_MEAL: "SETMEAL",
        GIVEN_UPGRADE: "GIVENUPGRADE",
        CHARGE_FREE: "CHARGEFREE",
        BIRTH_BENEFIT: "BIRTHBENEFIT",
        FIRST_GIFT: "FIRSTGIFT",

    };
    $scope.transferMapRev = {
        POINTCONSUME: "POINT_CONSUME",
        COUPONFREE: "COUPON_FREE",
        CHARGECONSUME: "CHARGE_CONSUME",
        SPECIALPRICE: "SPECIAL_PRICE",
        LIMITREDUCE: "LIMIT_REDUCE",
        SPENDAS: "SPEND_AS",
        SETMEAL: "SET_MEAL",
        GIVENUPGRADE: "GIVEN_UPGRADE",
        CHARGEFREE: "CHARGE_FREE",
        BIRTHBENEFIT: "BIRTH_BENEFIT",
        FIRSTGIFT: "FIRST_GIFT"
    };
    $scope.tem = {
        rules: {}
    };
    $scope.allShop = false
    $scope.set = {
        times: ajaxSendFn({}, "/businesstimes/all", "GET").result,
        list: ajaxSendFn({
            state: 1002
        }, "/shops", "GET").result,
        allocate: ajaxSendFn({}, "/activity/allocate/8015", "GET").result || [],
        // 业务提成
        allocates: [{
            key: '',
            value: ''
        }],
        // 配送
        deliver: [{
                key: 0,
                values: [{
                    "amount": 0,
                    "value": 0
                }]
            }

        ],
        // packet: ajaxSendFn({}, "/activity/packet/usable", "GET").result || [],
        // commision: ajaxSendFn({}, "/activity/commision/usable", "GET").result || [],
        list2: [],
        timeType: {
            "1001": "早市",
            "1002": "午市",
            "1003": "下午茶",
            "1004": "晚市",
            "1005": "宵夜"
        },
        shops: [],
        personLimitDetail: [{
            'amount': '',
            "count": ''
        }],
        countLimit: 0
    };
    // 添加一个业务提成
    $scope.addAllocates = function () {
        $scope.set.allocates.push({
            key: '',
            value: ''
        })
    }
    // 添加配送费
    $scope.addDeliverData = function () {
        $scope.set.deliver.push({
            key: 0,
            values: [{
                "amount": 0,
                "value": 0
            }]
        })
    }
    $scope.addEachMile = function (index) {
        $scope.set.deliver[index].values.push({
                "amount": 0,
                "value": 0
            }

        )
    }

    // 添加配送费---end

    $scope.set.time = getSubtimes($scope.set.times, $scope.set.timeType);
    if (!$scope.set.list) {
        alert("目前还没有添加门店");
        $location.path("/shops");
    }
    $scope.checkallstr = 0;

    $scope.posts = {
        shops: [],
    };
    $scope.coupon = {
        shared: [],
        shops: []
    };
    $scope.cons = function (val) {
        console.log("highest")
        console.log(val)
    }
    console.log($scope.vidUrl)

    $scope.temcoupons2 = {};
    $scope.temcoupons = [];
    $scope.ruleCategory = consumeRuleObj;
    $scope.ruleCategory1 = onlineRuleObj;
    $scope.obtainRepeatCategory = obtainRepeatCategory;

    $scope.ruleFn = {
        openOrClose: function () {
            $("#add").modal("show");
            $scope.isOpenOrClose = true;
        },
        testAddOk: function () {
            $("#add").modal("hide");
            $scope.isOpenOrClose = false;
            alert("添加成功");
            //$scope.view.coupons = couponFac.getAllCoupon();
        },
        testAddFail: function (result) {
            //console.log("错误编号:" + result.code + ", 错误信息:" + result.message);
            errorMsg(result);
        },
        getCpouponFn: function () {
            console.log($scope.view);
            $scope.view1 = ajaxSendFn({}, "/activity/factor", "GET").result || [];
            $scope.view.coupons = $scope.view1.COUPON || [];
            $scope.view.rewards = $scope.view1.REWARD || [];
            console.log("1111");
            console.log($scope.view);
            // $scope.view.allocate = $scope.view1.ALLOCATE || [];
            // $scope.view.coupons = ajaxSendFn({}, "/activity/factor", "GET").result || [];
            // $scope.view.rewards = ajaxSendFn({}, "/activity/factor", "GET").result || [];
        },
        getCouponType: function (id) {
            for (var i = 0; $scope.view.coupons && i < $scope.view.coupons.length; i++) {
                if ($scope.view.coupons[i].id === id) {
                    return $scope.view.coupons[i].category;
                }
            }
        },
        changeCoupon: function (value, dv) {
            if (dv.id) {
                dv.count = 1;
                for (var i = 0; i < $scope.view.coupons.length; i++) {
                    if ($scope.view.coupons[i].id === dv.id) {
                        dv.name = $scope.view.coupons[i].name;
                        break;
                    }
                }
            }
        },
        oldRuleFn: function () { //从服务器获取目前的规则列表

            $scope.ruleFn.getCpouponFn();
            switch ('CHARGE') {
                case "DISCOUNT":
                    $scope.view.rules = {
                        "DISCOUNT": {
                            name: "打折",
                            uncheck: true,
                            state: "",
                            show: 0,
                            addFunc: $scope.ruleFn.addFn,
                            postFunc: $scope.ruleFn.sendFn,
                            content: {
                                DISCOUNT: []
                            }
                        }
                    };
                    break;
                case "CHARGE":
                    $scope.view.rules = {
                        "CHARGE": {
                            name: "充值",
                            uncheck: true,
                            state: "",
                            show: 0,
                            addFunc: $scope.ruleFn.addCouponFn,
                            postFunc: $scope.ruleFn.sendCouponFn,
                            content: {
                                CHARGE: []
                            }
                        }
                    };
                    break;

            }

            console.log($scope.view.rules)
            $scope.view.shop = ajaxSendFn({
                state: "1002"
            }, "/shops", "GET").result || [];
            $scope.tem.shops = [];
            for (var x in $scope.view.shop) $scope.tem.shops.push($scope.view.shop[x].id);

            $scope.tem.rules = {}
            $scope.tem.rules[$scope.tem.rules.type] = $scope.tem.rules;

        },
        stateFn: function (a, b, c, d) { //key,state,show,点击添加规则时调用
            var aRe = a.split("_")[0];
            if (aRe in $scope.view.rules) {
                $scope.view.rules[aRe].state = b;
                $scope.view.rules[aRe].show = c;
            }
            if (b == "add") $scope.ruleFn.buttonFn(a);
            if (!d) { //只让添加一项,就让设定活动内容按钮灰掉,d无值表示是手动点击
                $scope.btnDisable = 1;
                return;
            }
            var tem = d.type;
            if (c) {
                d.celling && (d.celling = d.celling * 100);
                $scope.view.rules[aRe].content[tem] = d
            }
        },
        closeFn: function (a) { //取消按钮
            if ($scope.view.rules[a].state == "edit") { //保存
                $scope.view.rules[a].state = "show";
            } else if ($scope.view.rules[a].state == "add") { //新增
                $scope.view.rules[a].state = "show";
            }
        },
        buttonFn: function (a) { //活动保存按钮  del
            if ($scope.view.rules[a].state == "show") { //修改
                $scope.ruleFn.postFn(a);
                $scope.ruleFn.memberFn();
                $scope.view.rules[a].state = "edit";
            } else if ($scope.view.rules[a].state == "edit") { //保存
                var res = $scope.ruleFn.sendCouponFn();
                if (res) {
                    //$location.path("/rule");
                    $scope.view.rules[a].state = "show";
                }
            } else if ($scope.view.rules[a].state == "add") { //新增
                for (x in $scope.view.rules[a].content) $scope.view.rules[a].addFunc(x);
                $scope.view.rules[a].state = "edit";
                $("#showadd").modal("hide");
            }
        },

        postFn: function (a) { //发送数据
            var tem = $scope.view.rules[a].content;
            console.log(tem)
            $scope.posts[a] = {};
            for (x in tem) {
                var needCheck = true;
                $scope.posts[a][x] = tem[x];
                if (tem[x] instanceof Array) {
                    needCheck = false;
                }
                $scope.posts[a][x].check = needCheck;
                if (!tem[x].detail || !Object.keys(tem[x].detail).length) {
                    $scope.view.rules[a].addFunc(x);
                }
            }

        },
        addCouponFn: function (x) {
            $scope.ruleFn.addFn(x, function (a, b) {
                //if (a === "COUPON" || a === "GAME" || b === "COUPON" || x === "COUPONFREE" || x === "SPECIALPRICE") {
                if ($scope.posts[a][x].detail != undefined) {
                    if ($scope.posts[a][x].detail.ALL != undefined) {
                        var arr = $scope.posts[a][x].detail.ALL;
                    } else {
                        $scope.posts[a][x].detail.ALL = []
                    }
                } else {
                    $scope.posts[a][x].detail = {}
                    $scope.posts[a][x].detail.ALL = []
                }

                if (arr && arr.length > 0 && !isEmptyObject(arr[0])) {
                    var obj = {};
                    obj.value = {};
                    obj.allocates = []
                    for (var i = 0; i < $scope.set.list.length; i++) {
                        obj.allocates[i] = {
                            'highest': 'false',
                            'id': ''
                        }
                    }
                    $scope.posts[a][x].detail.ALL.push(obj);
                    console.log("obj1")
                    console.log(obj)
                } else {
                    var obj = {}
                    obj.value = {};
                    obj.allocates = []
                    for (var i = 0; i < $scope.set.list.length; i++) {
                        obj.allocates[i] = {
                            'highest': 'false',
                            'id': ''
                        }
                    }
                    $scope.posts[a][x].detail.ALL.push(obj);
                    console.log("obj2")
                    console.log(obj)
                }

                console.log("$$hashKey")
                console.log($scope.posts[a][x].detail.ALL)
                //}
            })

        },

        addFn: function (x, cb) { //
            var cnt = 0;
            var a, b;
            var arr = x.split("_");
            if (arr && arr.length > 0) {
                a = arr[0];
            }
            if (arr && arr.length > 1) {
                b = arr[1];
            }
            if (!$scope.posts[a] || !$scope.posts[a][x] || !$scope.posts[a][x].detail || isEmptyObject($scope.posts[a][x].detail)) {
                if (!$scope.posts[a]) $scope.posts[a] = {};
                $scope.posts[a][x] = $scope.view.rules[a].content[x];
                // if (!$scope.posts[a][x].detail || isEmptyObject($scope.posts[a][x].detail))
                // $scope.posts[a][x].detail = {
                //     "ALL": [{}]
                // };
                if (cb) cb(a, b);
                return;
            }
            if ($scope.posts[a][x].detail.ALL) {
                // var obj = {};
                if (cb) {
                    cb(a, b);
                } else {
                    // $scope.posts[a][x].detail.ALL.push(obj);
                }
            } else {
                // $scope.posts[a][x].detail.ALL = [{}];
                if (cb) cb(a, b);
            }
            console.log("$$hashKey")
            console.log($scope.posts[a][x].detail.ALL)

        },
        removeFn: function (x, b, c) {
            var a = x.split("_")[0];
            if ($scope.posts[a][x].detail[b][c]) $scope.posts[a][x].detail[b].splice(c, 1);
        },
        //构建使用充值卡的数据
        sendChargeConsumeFn: function (a) {
            return $scope.ruleFn.sendFn(a, undefined, undefined, function (json) {
                var obj = json.detail.ALL[0];

                obj.amount = 1;
                obj.currentAmount = obj.count = 0;
            });
        },
        sendFn: function (a, beforeValidateFunc, afterValidateFunc, fixFunc) { ///没搞完，发送规则
            var tem = $scope.posts[a];
            var json = {};
            for (var x in tem) {
                if (!$scope.view.rules[a].uncheck) {
                    if (!tem[x].check) {
                        continue;
                    }
                }
                if ($scope.transferMapRev.hasOwnProperty(x)) {
                    json.type = $scope.transferMapRev[x];
                } else {
                    json.type = x;
                }
                json.detail = {};
                tem[x]._id && (json._id = tem[x]._id);
                tem[x].amountLimit && (json.amountLimit = tem[x].amountLimit);
                if (tem[x].celling) {
                    json.celling = parseInt(tem[x].celling) / 100;
                    // 仅限首次充值
                    if (tem[x].firstLimit) {
                        json.firstLimit = true;
                    } else {
                        json.firstLimit = false;
                    }
                }
                // 是否支持充值卡余额通用
                if (json.type == "CHARGE_CONSUME") {
                    if (tem[x].allpurpose) {
                        json.allpurpose = true;
                    } else {
                        json.allpurpose = false;
                    }
                }

                typeof tem[x].countLimit == 'number' && (json.countLimit = tem[x].countLimit);
                tem[x].timesLimit && (json.timesLimit = tem[x].timesLimit);
                tem[x].obtainCategory && (json.obtainCategory = tem[x].obtainCategory);

                var tem2 = tem[x].detail;

                var b;
                var arr = x.split("_");
                if (arr && arr.length > 1) {
                    b = arr[1];
                }

                for (z in tem2) {
                    for (w in tem2[z]) {
                        var tem3 = tem2[z][w],
                            json2 = {};
                        (typeof (tem3.amount) == 'number' || tem3.amount) && (json2.amount = tem3.amount);
                        tem3.score && (json2.score = tem3.score);
                        tem3.gradeId && (json2.gradeId = tem3.gradeId);
                        if (tem3.value && tem3.value.length != 0) {
                            json2.value = tem3.value;
                            if (json2.value && json2.value.length) {
                                for (var x in json2.value) {
                                    delete json2.value[x].$$hashKey;
                                }
                            }
                        } else if (json.type == "CHARGE_CONSUME") {
                            json2.value = false;
                        }
                        tem3.limit !== undefined && (json2.limit = tem3.limit);
                        tem3.count && (json2.count = tem3.count);
                        tem3.currentAmount && (json2.currentAmount = tem3.currentAmount);
                        // 添加分账规则
                        if (json.detail[tem3.id]) json.detail[tem3.id].push(json2);
                        else json.detail[tem3.id] = [json2];
                    }
                }

                if (json.type == "CHARGE") {
                    angular.forEach(json.detail.ALL, function (each, index) {
                        if (!each.value || !each.value[0].category) {
                            delete each.value
                        }
                    })
                }
                if (afterValidateFunc && typeof (afterValidateFunc) === "function") {
                    obj = afterValidateFunc(b, json);
                    if (obj) {
                        alert(obj.message);
                        return false;
                    }
                }
                if (fixFunc && typeof (fixFunc) === "function") {
                    fixFunc(json);
                }
            }
            // 验证授权邀请码是否正确
            if ($scope.tem.activityCategory == "TICKET") {
                if ($scope.tel.inviters) {
                    json.inviters = $scope.tel.inviters.split(",")
                } else {
                    alert("请输入邀请码");
                    return;
                }
            }
            var rulesend = ajaxSendFn(json, "/activity/" + $routeParams.activityid + "/rule", "POST", 1);
            if (rulesend.code == 200) { //
                $scope.ruleFn.oldRuleFn();
            } else {
                errorMsg(rulesend);
                return false;
            }
            return true;
        },
        addRuleFn: function () { //显示添加面板
            $scope.view.modal = {
                title: "添加活动内容",
                html: "addrule"
            };
            $("#showadd").modal("show");
        },

        put: function (details, dv) {
            if (!details.value) {
                details.value = {};
            }
            dv = {};
            details.value.push(dv);
        },
        resetCouponCntFn: function (details, dv) {
            angular.forEach(details.value, function (data, idx) {
                if (data && data.id === dv.id) {
                    this.splice(idx, 1);
                }
            }, details.value);
        },
        containsCoupon: function (details, id) {
            var tmpIdx = -1;
            for (var i = 0; details.value && i < details.value.length; i++) {
                if (details.value[i].id === id) {
                    tmpIdx = i;
                    break;
                }
            }
            return tmpIdx;
        }
    };
    $scope.addPepFn = function () {
        if ($scope.set.personLimitDetail) {
            $scope.set.personLimitDetail.push({
                'amount': '',
                "count": ''
            })
        }
    };
    $scope.removePepFn = function (b) {
        if ($scope.set.personLimitDetail[b]) $scope.set.personLimitDetail.splice(b, 1);
    };
    $scope.ruleFn.oldRuleFn();
    $scope.sendJsons = function () {


        $scope.posts.shops = $scope.set.shops.filter(function (s) {
            return s && s.trim();
        });

        var json = angular.copy($scope.posts);

        delete json.CHARGE;
        console.log(json);
        json.dateRange = {};
        json.dateRangeCategory = $scope.view.date.dateType;

        if ($scope.view.date.dateType === "CONTINUOUS") {
            if (!$scope.view.dateRange.startDate || !$scope.view.dateRange.endDate) {
                alert("请填写开始和结束日期!");
                return;
            }
            if ($scope.view.dateRange.endDate < $scope.view.dateRange.startDate) {
                alert("结束日期不能小于开始日期!");
                return;
            } else {
                json.dateRange.startDate = $filter("date")($scope.view.dateRange.startDate, "yyyy-MM-dd 00:00:00");
                json.dateRange.endDate = $filter("date")($scope.view.dateRange.endDate, "yyyy-MM-dd 23:59:59");
            }
        } else if ($scope.view.date.dateType === "BIRTHDAY" && $scope.view.date.subType === "AROUND_FIX_DATE") {
            json.dateRange.beforeDays = $scope.view.dateRange.beforeDays || 0;
            json.dateRange.afterDays = $scope.view.dateRange.afterDays || 0;
        }

        json.dateRange.selectCategory = $scope.view.dateRange.selectCategory || 'NONE';
        if ($scope.view.dateRange.subType === "MANUAL_SELECT") {
            var arr = arrayMap(objectKeys($scope.view.dateRange.selectDates), function (date) {
                return date + " 00:00:00";
            });
            if (!isEmptyObject(arr)) {
                json.dateRange.selectDates = arr;
            }
        } else if ($scope.view.dateRange.subType === "MONTH_DAYS") {
            var arr = arrayMap(objectKeys(mapFilter($scope.view.dateRange.selectDays, notNull)), parseInt);
            if (!isEmptyObject(arr)) {
                json.dateRange.selectDays = arr;
            }
        } else if ($scope.view.dateRange.subType === "WEEKLY_DAY") {
            var arr = arrayMap(objectKeys(mapFilter($scope.view.dateRange.selectWeekDays, notNull)), parseInt);
            if (!isEmptyObject(arr)) {
                json.dateRange.selectWeekDays = arr;
            }
        }

        //选择排除，必须要指定排队日期
        if ((json.dateRangeCategory !== "SELECTED_DATES") && (json.dateRange.selectCategory === 'EXCLUDE') && (objectCount(json.dateRange) == 1)) {
            alert("没有指定排除日期！");
            return;
        }

        //'指定日期'类型必须有数据
        if ((json.dateRangeCategory === "SELECTED_DATES") && (objectCount(json.dateRange) == 1)) {
            alert("没有指定日期！");
            return;
        }
        //end
        if (json.advertisement && !json.advertisement.id) {
            delete json.advertisement;
        }

        var url = "/activity/takeout/";
        // if ($routeParams.id) {
        //     url += "/" + $routeParams.id;
        // }
        json.allocates = {}
        // $scope.set.allocates.map(function(item){
        //     let key=item.key;
        //     let value=item.value;
        //     json.allocates[key]=value

        // })
        json.deliver = {}
        $scope.set.deliver.map(function (item) {
            console.log(item)
            let key = item.key;
            let value = item.values;
            for (var x in item.values) {
                delete item.values[x].$$hashKey;
            }
            json.deliver[key] = value

        })
        if (json.packetActId) {
            delete json.packetActId
        }

        console.log('----------------------------------------')
        console.log(json);
        // console.log($scope.post)
        // console.log($scope.set)


        // return false;
        var data = ajaxSendFn(json, url, "POST");
        if (data.code == 200) {
            alert("操作成功");
            $location.path("/rule/order");
        } else {
            alert(data.message);
        }
    }
    // $scope.ruleFn.buttonFn("CHARGE");
    $scope.ruleFn.postFn("CHARGE");

    // $scope.ruleFn.getCpouponFn();
    if ($scope.tem && $scope.tem.activityCategory && isEmptyObject($scope.tem.rules)) {
        $scope.ruleFn.stateFn($scope.tem.activityCategory, 'add', 1)
    }
    $scope.checkAllShops = function () { //
        console.log($scope.posts.allShop)

        if ($scope.posts.allShop) { //
            var shops = [];
            for (var i = 0; i < $scope.set.list.length; i++) {
                shops.push($scope.set.list[i].id)
            }
            $scope.set.shops = shops
        } else { //
            $scope.set.shops = [];
            $scope.posts.shops = []
        }
    }
    $scope.checkShops = function (key) {
        if (key == false) {
            delete key
            $scope.posts.allShop = false;
        }
        var arr = $scope.set.shops.filter(function (s) {
            return s && s.trim();
        });
        if (arr.length == $scope.set.list.length) {
            $scope.posts.allShop = true
        } else {
            $scope.posts.allShop = false;
        }
    }
}]);
//  代客下单---end
// 分享金 Control----start
app.controller("shareGoldCtr", ["$scope", "$http", "$filter", "$document", "$compile", "$rootScope", function ($scope, $http, $filter, $document, $compile, $rootScope) {
    $scope.config.breadset = [{ //
        name: "分享金管理",
        href: indexUrl + "/admin.html#/rule/share",
        class: "share"
    }, {
        name: "分享金管理"
    }]; //面包屑;
    $scope.view = {
        list: ajaxSendFn({}, "/activity/rebate", "GET").result || [],
    };

    $scope.offFn = function (id) {
        var a = confirm("确认下线此活动？");
        if (a) {
            var data = ajaxSendFn({}, "/activity/rebate/" + id + "/off", "POST");
            if (data.code == 200) {
                $scope.view.list = ajaxSendFn({}, "/activity/rebate", "GET").result || [];
            } else {
                alert(data.message);
            }
        }
    };

    $scope.onFn = function (id) {
        var a = confirm("确认上线此活动？");
        if (a) {
            var data = ajaxSendFn({}, "/activity/rebate/" + id + "/on", "POST");
            if (data.code == 200) {
                $scope.view.list = ajaxSendFn({}, "/activity/rebate", "GET").result || [];
            } else {
                alert(data.message);
            }
        }
    };
    $scope.removeFn = function (id) {
        var a = confirm("确认删除？");
        if (a) {
            var data = ajaxSendFn({}, "/activity/rebate/" + id, "DELETE");
            if (data.code == 200) {
                $scope.view.list = ajaxSendFn({}, "/activity/rebate", "GET").result || [];
            } else {
                alert(data.message);
            }
        }
    };

}]);

app.controller("addshareCtr", ["$scope", "$http", '$routeParams', "$filter", "$location", 'CouponFactory', function ($scope, $http, $routeParams, $filter, $location, couponFac) {
    $scope.config.breadset = [{ //
        name: "分享金管理",
        href: indexUrl + "/admin.html#/rule/addshare",
        class: "addshare"
    }, {
        name: "分享金管理"
    }]; //面包屑;

    $scope.view = {
        category: []
    };
    $scope.view1 = {};
    $scope.transferMap = {
        POINT_CONSUME: "POINTCONSUME",
        COUPON_FREE: "COUPONFREE",
        CHARGE_CONSUME: "CHARGECONSUME",
        SPECIAL_PRICE: "SPECIALPRICE",
        LIMIT_REDUCE: "LIMITREDUCE",
        SPEND_AS: "SPENDAS",
        SET_MEAL: "SETMEAL",
        GIVEN_UPGRADE: "GIVENUPGRADE",
        CHARGE_FREE: "CHARGEFREE",
        BIRTH_BENEFIT: "BIRTHBENEFIT",
        FIRST_GIFT: "FIRSTGIFT",

    };
    $scope.transferMapRev = {
        POINTCONSUME: "POINT_CONSUME",
        COUPONFREE: "COUPON_FREE",
        CHARGECONSUME: "CHARGE_CONSUME",
        SPECIALPRICE: "SPECIAL_PRICE",
        LIMITREDUCE: "LIMIT_REDUCE",
        SPENDAS: "SPEND_AS",
        SETMEAL: "SET_MEAL",
        GIVENUPGRADE: "GIVEN_UPGRADE",
        CHARGEFREE: "CHARGE_FREE",
        BIRTHBENEFIT: "BIRTH_BENEFIT",
        FIRSTGIFT: "FIRST_GIFT"
    };
    $scope.tem = {
        rules: {}
    };
    $scope.allShop = false
    $scope.set = {
        times: ajaxSendFn({}, "/businesstimes/all", "GET").result,
        list: ajaxSendFn({
            state: 1002
        }, "/shops", "GET").result,
        allocate: ajaxSendFn({}, "/activity/allocate/8003", "GET").result || [],
        allocates: [],
        packet: ajaxSendFn({}, "/activity/packet/usable", "GET").result || [],
        commision: ajaxSendFn({}, "/activity/commision/usable", "GET").result || [],
        list2: [],
        timeType: {
            "1001": "早市",
            "1002": "午市",
            "1003": "下午茶",
            "1004": "晚市",
            "1005": "宵夜"
        },
        shops: [],
        personLimitDetail: [{
            'amount': '',
            "count": ''
        }],
        countLimit: 0
    };
    console.log($scope.set.packet)
    console.log($scope.set.commision)
    $scope.set.time = getSubtimes($scope.set.times, $scope.set.timeType);
    if (!$scope.set.list) {
        alert("目前还没有添加门店");
        $location.path("/shops");
    }
    $scope.checkallstr = 0;

    $scope.posts = {
        shops: [],
        // video:{},
        packetActId: ''
    };
    $scope.coupon = {
        shared: [],
        shops: []
    };
    $scope.cons = function (val) {
        console.log("highest")
        console.log(val)
    }
    console.log($scope.vidUrl)

    $scope.temcoupons2 = {};
    $scope.temcoupons = [];
    $scope.ruleCategory = consumeRuleObj;
    $scope.ruleCategory1 = onlineRuleObj;
    $scope.obtainRepeatCategory = obtainRepeatCategory;

    $scope.ruleFn = {
        openOrClose: function () {
            $("#add").modal("show");
            $scope.isOpenOrClose = true;
        },
        testAddOk: function () {
            $("#add").modal("hide");
            $scope.isOpenOrClose = false;
            alert("添加成功");
            //$scope.view.coupons = couponFac.getAllCoupon();
        },
        testAddFail: function (result) {
            //console.log("错误编号:" + result.code + ", 错误信息:" + result.message);
            errorMsg(result);
        },
        getCpouponFn: function () {
            console.log($scope.view);
            $scope.view1 = ajaxSendFn({}, "/activity/factor", "GET").result || [];
            $scope.view.coupons = $scope.view1.COUPON || [];
            $scope.view.rewards = $scope.view1.REWARD || [];
            console.log("1111");
            console.log($scope.view);
            // $scope.view.allocate = $scope.view1.ALLOCATE || [];
            // $scope.view.coupons = ajaxSendFn({}, "/activity/factor", "GET").result || [];
            // $scope.view.rewards = ajaxSendFn({}, "/activity/factor", "GET").result || [];
        },
        getCouponType: function (id) {
            for (var i = 0; $scope.view.coupons && i < $scope.view.coupons.length; i++) {
                if ($scope.view.coupons[i].id === id) {
                    return $scope.view.coupons[i].category;
                }
            }
        },
        changeCoupon: function (value, dv) {
            if (dv.id) {
                dv.count = 1;
                for (var i = 0; i < $scope.view.coupons.length; i++) {
                    if ($scope.view.coupons[i].id === dv.id) {
                        dv.name = $scope.view.coupons[i].name;
                        break;
                    }
                }
            }
        },
        oldRuleFn: function () { //从服务器获取目前的规则列表

            $scope.ruleFn.getCpouponFn();
            switch ('CHARGE') {
                case "DISCOUNT":
                    $scope.view.rules = {
                        "DISCOUNT": {
                            name: "打折",
                            uncheck: true,
                            state: "",
                            show: 0,
                            addFunc: $scope.ruleFn.addFn,
                            postFunc: $scope.ruleFn.sendFn,
                            content: {
                                DISCOUNT: []
                            }
                        }
                    };
                    break;
                case "CHARGE":
                    $scope.view.rules = {
                        "CHARGE": {
                            name: "充值",
                            uncheck: true,
                            state: "",
                            show: 0,
                            addFunc: $scope.ruleFn.addCouponFn,
                            postFunc: $scope.ruleFn.sendCouponFn,
                            content: {
                                CHARGE: []
                            }
                        }
                    };
                    break;

            }

            console.log($scope.view.rules)
            $scope.view.shop = ajaxSendFn({
                state: "1002"
            }, "/shops", "GET").result || [];
            $scope.tem.shops = [];
            for (var x in $scope.view.shop) $scope.tem.shops.push($scope.view.shop[x].id);

            $scope.tem.rules = {}
            $scope.tem.rules[$scope.tem.rules.type] = $scope.tem.rules;

        },
        stateFn: function (a, b, c, d) { //key,state,show,点击添加规则时调用
            var aRe = a.split("_")[0];
            if (aRe in $scope.view.rules) {
                $scope.view.rules[aRe].state = b;
                $scope.view.rules[aRe].show = c;
            }
            if (b == "add") $scope.ruleFn.buttonFn(a);
            if (!d) { //只让添加一项,就让设定活动内容按钮灰掉,d无值表示是手动点击
                $scope.btnDisable = 1;
                return;
            }
            var tem = d.type;
            if (c) {
                d.celling && (d.celling = d.celling * 100);
                $scope.view.rules[aRe].content[tem] = d
            }
        },
        closeFn: function (a) { //取消按钮
            if ($scope.view.rules[a].state == "edit") { //保存
                $scope.view.rules[a].state = "show";
            } else if ($scope.view.rules[a].state == "add") { //新增
                $scope.view.rules[a].state = "show";
            }
        },
        buttonFn: function (a) { //活动保存按钮  del
            if ($scope.view.rules[a].state == "show") { //修改
                $scope.ruleFn.postFn(a);
                $scope.ruleFn.memberFn();
                $scope.view.rules[a].state = "edit";
            } else if ($scope.view.rules[a].state == "edit") { //保存
                var res = $scope.ruleFn.sendCouponFn();
                if (res) {
                    //$location.path("/rule");
                    $scope.view.rules[a].state = "show";
                }
            } else if ($scope.view.rules[a].state == "add") { //新增
                for (x in $scope.view.rules[a].content) $scope.view.rules[a].addFunc(x);
                $scope.view.rules[a].state = "edit";
                $("#showadd").modal("hide");
            }
        },

        postFn: function (a) { //发送数据
            var tem = $scope.view.rules[a].content;
            console.log(tem)
            $scope.posts[a] = {};
            for (x in tem) {
                var needCheck = true;
                $scope.posts[a][x] = tem[x];
                if (tem[x] instanceof Array) {
                    needCheck = false;
                }
                $scope.posts[a][x].check = needCheck;
                if (!tem[x].detail || !Object.keys(tem[x].detail).length) {
                    $scope.view.rules[a].addFunc(x);
                }
            }

        },
        addCouponFn: function (x) {
            $scope.ruleFn.addFn(x, function (a, b) {
                //if (a === "COUPON" || a === "GAME" || b === "COUPON" || x === "COUPONFREE" || x === "SPECIALPRICE") {
                if ($scope.posts[a][x].detail != undefined) {
                    if ($scope.posts[a][x].detail.ALL != undefined) {
                        var arr = $scope.posts[a][x].detail.ALL;
                    } else {
                        $scope.posts[a][x].detail.ALL = []
                    }
                } else {
                    $scope.posts[a][x].detail = {}
                    $scope.posts[a][x].detail.ALL = []
                }

                if (arr && arr.length > 0 && !isEmptyObject(arr[0])) {
                    var obj = {};
                    obj.value = {};
                    obj.allocates = []
                    for (var i = 0; i < $scope.set.list.length; i++) {
                        obj.allocates[i] = {
                            'highest': 'false',
                            'id': ''
                        }
                    }
                    $scope.posts[a][x].detail.ALL.push(obj);
                    console.log("obj1")
                    console.log(obj)
                } else {
                    var obj = {}
                    obj.value = {};
                    obj.allocates = []
                    for (var i = 0; i < $scope.set.list.length; i++) {
                        obj.allocates[i] = {
                            'highest': 'false',
                            'id': ''
                        }
                    }
                    $scope.posts[a][x].detail.ALL.push(obj);
                    console.log("obj2")
                    console.log(obj)
                }

                console.log("$$hashKey")
                console.log($scope.posts[a][x].detail.ALL)
                //}
            })

        },

        addFn: function (x, cb) { //
            var cnt = 0;
            var a, b;
            var arr = x.split("_");
            if (arr && arr.length > 0) {
                a = arr[0];
            }
            if (arr && arr.length > 1) {
                b = arr[1];
            }
            if (!$scope.posts[a] || !$scope.posts[a][x] || !$scope.posts[a][x].detail || isEmptyObject($scope.posts[a][x].detail)) {
                if (!$scope.posts[a]) $scope.posts[a] = {};
                $scope.posts[a][x] = $scope.view.rules[a].content[x];
                // if (!$scope.posts[a][x].detail || isEmptyObject($scope.posts[a][x].detail))
                // $scope.posts[a][x].detail = {
                //     "ALL": [{}]
                // };
                if (cb) cb(a, b);
                return;
            }
            if ($scope.posts[a][x].detail.ALL) {
                // var obj = {};
                if (cb) {
                    cb(a, b);
                } else {
                    // $scope.posts[a][x].detail.ALL.push(obj);
                }
            } else {
                // $scope.posts[a][x].detail.ALL = [{}];
                if (cb) cb(a, b);
            }
            console.log("$$hashKey")
            console.log($scope.posts[a][x].detail.ALL)

        },
        removeFn: function (x, b, c) {
            var a = x.split("_")[0];
            if ($scope.posts[a][x].detail[b][c]) $scope.posts[a][x].detail[b].splice(c, 1);
        },
        //构建使用充值卡的数据
        sendChargeConsumeFn: function (a) {
            return $scope.ruleFn.sendFn(a, undefined, undefined, function (json) {
                var obj = json.detail.ALL[0];
                // if (obj.value) {
                //    obj.value = false;
                // } else {
                //    obj.value = true;
                // }
                obj.amount = 1;
                obj.currentAmount = obj.count = 0;
            });
        },
        sendFn: function (a, beforeValidateFunc, afterValidateFunc, fixFunc) { ///没搞完，发送规则
            var tem = $scope.posts[a];
            //整理，删除不需要的规则
            /*    for (var x in tem) {
             if (!$scope.view.rules[a].uncheck) {
             if (!tem[x].check) {
             if ($scope.tem.rules && $scope.tem.rules[x]) delete $scope.tem.rules[x];
             if ($scope.view.rules[a].content[x]) {
             $scope.view.rules[a].content[x].detail = [];
             $scope.view.rules[a].content[x].check = false;
             }
             }
             }
             }*/
            //遍历有效规则，提交到服务器
            var json = {};
            // $scope.inviters = $scope.inviters.splite(",")
            // console.log();

            for (var x in tem) {
                if (!$scope.view.rules[a].uncheck) {
                    if (!tem[x].check) {
                        continue;
                    }
                }
                if ($scope.transferMapRev.hasOwnProperty(x)) {
                    json.type = $scope.transferMapRev[x];
                } else {
                    json.type = x;
                }
                json.detail = {};
                tem[x]._id && (json._id = tem[x]._id);
                tem[x].amountLimit && (json.amountLimit = tem[x].amountLimit);
                if (tem[x].celling) {
                    json.celling = parseInt(tem[x].celling) / 100;
                    // 仅限首次充值
                    if (tem[x].firstLimit) {
                        json.firstLimit = true;
                    } else {
                        json.firstLimit = false;
                    }
                }
                // 是否支持充值卡余额通用
                if (json.type == "CHARGE_CONSUME") {
                    if (tem[x].allpurpose) {
                        json.allpurpose = true;
                    } else {
                        json.allpurpose = false;
                    }
                }

                typeof tem[x].countLimit == 'number' && (json.countLimit = tem[x].countLimit);
                tem[x].timesLimit && (json.timesLimit = tem[x].timesLimit);
                tem[x].obtainCategory && (json.obtainCategory = tem[x].obtainCategory);

                var tem2 = tem[x].detail;
                //if (beforeValidateFunc && typeof(beforeValidateFunc) === "function") {
                //    var obj = beforeValidateFunc(x, tem2);
                //    if (obj) {
                //        alert(obj.message);
                //        return false;
                //    }
                //}

                var b;
                var arr = x.split("_");
                if (arr && arr.length > 1) {
                    b = arr[1];
                }

                for (z in tem2) {
                    for (w in tem2[z]) {
                        var tem3 = tem2[z][w],
                            json2 = {};
                        (typeof (tem3.amount) == 'number' || tem3.amount) && (json2.amount = tem3.amount);
                        tem3.score && (json2.score = tem3.score);
                        tem3.gradeId && (json2.gradeId = tem3.gradeId);
                        if (tem3.value && tem3.value.length != 0) {
                            json2.value = tem3.value;
                            if (json2.value && json2.value.length) {
                                for (var x in json2.value) {
                                    delete json2.value[x].$$hashKey;
                                }
                            }
                        } else if (json.type == "CHARGE_CONSUME") {
                            json2.value = false;
                        }
                        tem3.limit !== undefined && (json2.limit = tem3.limit);
                        tem3.count && (json2.count = tem3.count);
                        tem3.currentAmount && (json2.currentAmount = tem3.currentAmount);
                        // 添加分账规则
                        if (json.detail[tem3.id]) json.detail[tem3.id].push(json2);
                        else json.detail[tem3.id] = [json2];
                    }
                }

                if (json.type == "CHARGE") {
                    angular.forEach(json.detail.ALL, function (each, index) {
                        if (!each.value || !each.value[0].category) {
                            delete each.value
                        }
                    })
                }
                if (afterValidateFunc && typeof (afterValidateFunc) === "function") {
                    obj = afterValidateFunc(b, json);
                    if (obj) {
                        alert(obj.message);
                        return false;
                    }
                }
                if (fixFunc && typeof (fixFunc) === "function") {
                    fixFunc(json);
                }
            }
            // 验证授权邀请码是否正确
            if ($scope.tem.activityCategory == "TICKET") {
                if ($scope.tel.inviters) {
                    json.inviters = $scope.tel.inviters.split(",")
                } else {
                    alert("请输入邀请码");
                    return;
                }
            }

            // if (json.type == "CHARGE_CONSUME") {
            //     delete json.detail;
            // }

            var rulesend = ajaxSendFn(json, "/activity/" + $routeParams.activityid + "/rule", "POST", 1);
            if (rulesend.code == 200) { //
                $scope.ruleFn.oldRuleFn();
            } else {
                errorMsg(rulesend);
                return false;
            }
            return true;
        },
        addRuleFn: function () { //显示添加面板
            $scope.view.modal = {
                title: "添加活动内容",
                html: "addrule"
            };
            $("#showadd").modal("show");
        },

        put: function (details, dv) {
            if (!details.value) {
                details.value = {};
            }
            dv = {};
            details.value.push(dv);
        },
        resetCouponCntFn: function (details, dv) {
            angular.forEach(details.value, function (data, idx) {
                if (data && data.id === dv.id) {
                    this.splice(idx, 1);
                }
            }, details.value);
        },
        containsCoupon: function (details, id) {
            var tmpIdx = -1;
            for (var i = 0; details.value && i < details.value.length; i++) {
                if (details.value[i].id === id) {
                    tmpIdx = i;
                    break;
                }
            }
            return tmpIdx;
        }
    };
    $scope.addPepFn = function () {
        if ($scope.set.personLimitDetail) {
            $scope.set.personLimitDetail.push({
                'amount': '',
                "count": ''
            })
        }
    };
    $scope.removePepFn = function (b) {
        if ($scope.set.personLimitDetail[b]) $scope.set.personLimitDetail.splice(b, 1);
    };
    $scope.ruleFn.oldRuleFn();

    // if ($scope.view.coupons.length) {
    //     $scope.view.category.push({id: 'COUPON', name: "优惠券"});
    // }
    // if ($scope.view.rewards.length) {
    //     $scope.view.category.push({id: 'REWARD', name: '代用币'});
    // }
    $scope.sendJsons = function () {
        console.log($scope.posts)
        if (!$scope.posts.picUrl) {
            alert("请先上传图片");
            return;
        }

        $scope.posts.shops = $scope.set.shops.filter(function (s) {
            return s && s.trim();
        });

        var json = angular.copy($scope.posts);

        delete json.CHARGE;
        json.rule = {}
        json.rule.expiredLimit = $scope.set.expiredLimit
        json.rule.personLimit = $scope.set.personLimit
        json.rule.timesLimit = $scope.set.timesLimit
        json.rule.countLimit = $scope.set.countLimit
        json.rule.distanceLimit = $scope.set.distanceLimit
        json.rule.allpurpose = $scope.set.allpurpose
        json.rule.personLimitDetail = angular.copy($scope.set.personLimitDetail)
        json.rule.detail = angular.copy($scope.posts.CHARGE.CHARGE.detail)
        for (var k = 0; k < $scope.posts.CHARGE.CHARGE.detail.ALL.length; k++) {
            var allocates = $scope.posts.CHARGE.CHARGE.detail.ALL[k].allocates
            json.rule.detail.ALL[k].allocates = []
            for (var i = 0; i < allocates.length; i++) {
                if (allocates[i].id) {
                    json.rule.detail.ALL[k].allocates.push(allocates[i])
                }
            }
        }
        console.log(json);
        json.dateRange = {};
        json.dateRangeCategory = $scope.view.date.dateType;
        // delete json.date;
        //start
        if ($scope.view.date.dateType === "CONTINUOUS") {
            if (!$scope.view.dateRange.startDate || !$scope.view.dateRange.endDate) {
                alert("请填写开始和结束日期!");
                return;
            }
            if ($scope.view.dateRange.endDate < $scope.view.dateRange.startDate) {
                alert("结束日期不能小于开始日期!");
                return;
            } else {
                json.dateRange.startDate = $filter("date")($scope.view.dateRange.startDate, "yyyy-MM-dd 00:00:00");
                json.dateRange.endDate = $filter("date")($scope.view.dateRange.endDate, "yyyy-MM-dd 23:59:59");
            }
        } else if ($scope.view.date.dateType === "BIRTHDAY" && $scope.view.date.subType === "AROUND_FIX_DATE") {
            json.dateRange.beforeDays = $scope.view.dateRange.beforeDays || 0;
            json.dateRange.afterDays = $scope.view.dateRange.afterDays || 0;
        }

        json.dateRange.selectCategory = $scope.view.dateRange.selectCategory || 'NONE';
        if ($scope.view.dateRange.subType === "MANUAL_SELECT") {
            var arr = arrayMap(objectKeys($scope.view.dateRange.selectDates), function (date) {
                return date + " 00:00:00";
            });
            if (!isEmptyObject(arr)) {
                json.dateRange.selectDates = arr;
            }
        } else if ($scope.view.dateRange.subType === "MONTH_DAYS") {
            var arr = arrayMap(objectKeys(mapFilter($scope.view.dateRange.selectDays, notNull)), parseInt);
            if (!isEmptyObject(arr)) {
                json.dateRange.selectDays = arr;
            }
        } else if ($scope.view.dateRange.subType === "WEEKLY_DAY") {
            var arr = arrayMap(objectKeys(mapFilter($scope.view.dateRange.selectWeekDays, notNull)), parseInt);
            if (!isEmptyObject(arr)) {
                json.dateRange.selectWeekDays = arr;
            }
        }

        //选择排除，必须要指定排队日期
        if ((json.dateRangeCategory !== "SELECTED_DATES") && (json.dateRange.selectCategory === 'EXCLUDE') && (objectCount(json.dateRange) == 1)) {
            alert("没有指定排除日期！");
            return;
        }

        //'指定日期'类型必须有数据
        if ((json.dateRangeCategory === "SELECTED_DATES") && (objectCount(json.dateRange) == 1)) {
            alert("没有指定日期！");
            return;
        }
        //end
        if (json.advertisement && !json.advertisement.id) {
            delete json.advertisement;
        }
        console.log(json);
        var url = "/activity/rebate";

        var data = ajaxSendFn(json, url, "POST");
        if (data.code == 200) {
            alert("操作成功");
            $location.path("/rule/share");
        } else {
            alert(data.message);
        }
    }
    // $scope.ruleFn.buttonFn("CHARGE");
    $scope.ruleFn.postFn("CHARGE");

    // $scope.ruleFn.getCpouponFn();
    if ($scope.tem && $scope.tem.activityCategory && isEmptyObject($scope.tem.rules)) {
        $scope.ruleFn.stateFn($scope.tem.activityCategory, 'add', 1)
    }
    $scope.checkAllShops = function () { //
        console.log($scope.posts.allShop)

        if ($scope.posts.allShop) { //
            var shops = [];
            for (var i = 0; i < $scope.set.list.length; i++) {
                shops.push($scope.set.list[i].id)
            }
            $scope.set.shops = shops
        } else { //
            $scope.set.shops = [];
            $scope.posts.shops = []
        }
    }
    $scope.checkShops = function (key) {
        if (key == false) {
            delete key
            $scope.posts.allShop = false;
        }
        var arr = $scope.set.shops.filter(function (s) {
            return s && s.trim();
        });
        if (arr.length == $scope.set.list.length) {
            $scope.posts.allShop = true
        } else {
            $scope.posts.allShop = false;
        }
    }
}]);

// 分享金编辑
app.controller("editshareCtr", ["$scope", "$http", '$routeParams', "$filter", "$location", 'CouponFactory', function ($scope, $http, $routeParams, $filter, $location, couponFac) {
    $scope.config.breadset = [{ //
        name: "分享金管理",
        href: indexUrl + "/admin.html#/rule/editshare",
        class: "editshare"
    }, {
        name: "分享金管理"
    }]; //面包屑;

    $scope.view = {
        category: []
    };
    $scope.view1 = {};
    $scope.transferMap = {
        POINT_CONSUME: "POINTCONSUME",
        COUPON_FREE: "COUPONFREE",
        CHARGE_CONSUME: "CHARGECONSUME",
        SPECIAL_PRICE: "SPECIALPRICE",
        LIMIT_REDUCE: "LIMITREDUCE",
        SPEND_AS: "SPENDAS",
        SET_MEAL: "SETMEAL",
        GIVEN_UPGRADE: "GIVENUPGRADE",
        CHARGE_FREE: "CHARGEFREE",
        BIRTH_BENEFIT: "BIRTHBENEFIT",
        FIRST_GIFT: "FIRSTGIFT",

    };
    $scope.transferMapRev = {
        POINTCONSUME: "POINT_CONSUME",
        COUPONFREE: "COUPON_FREE",
        CHARGECONSUME: "CHARGE_CONSUME",
        SPECIALPRICE: "SPECIAL_PRICE",
        LIMITREDUCE: "LIMIT_REDUCE",
        SPENDAS: "SPEND_AS",
        SETMEAL: "SET_MEAL",
        GIVENUPGRADE: "GIVEN_UPGRADE",
        CHARGEFREE: "CHARGE_FREE",
        BIRTHBENEFIT: "BIRTH_BENEFIT",
        FIRSTGIFT: "FIRST_GIFT"
    };
    $scope.tem = {
        rules: {}
    };
    $scope.allShop = false
    $scope.set = {
        times: ajaxSendFn({}, "/businesstimes/all", "GET").result,
        list: ajaxSendFn({
            state: 1002
        }, "/shops", "GET").result,
        allocate: ajaxSendFn({}, "/activity/allocate/8003", "GET").result || [],
        packet: ajaxSendFn({}, "/activity/packet/usable", "GET").result || [],
        commision: ajaxSendFn({}, "/activity/commision/usable", "GET").result || [],
        allocates: [],
        shops: [],
        personLimitDetail: [{
            'amount': '',
            "count": ''
        }],
        countLimit: 0
    };
    console.log($scope.set.times)
    if (!$scope.set.list) {
        alert("目前还没有添加门店");
        $location.path("/shops");
    }
    $scope.checkallstr = 0;

    $scope.posts = {
        shops: [],
        rule: {
            detail: []
        },
        video: {},
        packetActId: ''
    };
    $scope.coupon = {
        shared: [],
        shops: []
    };


    $scope.temcoupons2 = {};
    $scope.temcoupons = [];
    $scope.ruleCategory = consumeRuleObj;
    $scope.ruleCategory1 = onlineRuleObj;
    $scope.obtainRepeatCategory = obtainRepeatCategory;

    $scope.ruleFn = {
        getCpouponFn: function () {
            console.log($scope.view);
            $scope.view1 = ajaxSendFn({}, "/activity/factor", "GET").result || [];
            $scope.view.coupons = $scope.view1.COUPON || [];
            $scope.view.rewards = $scope.view1.REWARD || [];
            console.log("1111");
            console.log($scope.view);
            // $scope.view.allocate = $scope.view1.ALLOCATE || [];
            // $scope.view.coupons = ajaxSendFn({}, "/activity/factor", "GET").result || [];
            // $scope.view.rewards = ajaxSendFn({}, "/activity/factor", "GET").result || [];
        },
        getCouponType: function (id) {
            for (var i = 0; $scope.view.coupons && i < $scope.view.coupons.length; i++) {
                if ($scope.view.coupons[i].id === id) {
                    return $scope.view.coupons[i].category;
                }
            }
        },
        changeCoupon: function (value, dv) {
            if (dv.id) {
                dv.count = 1;
                for (var i = 0; i < $scope.view.coupons.length; i++) {
                    if ($scope.view.coupons[i].id === dv.id) {
                        dv.name = $scope.view.coupons[i].name;
                        break;
                    }
                }
            }
        },
        oldRuleFn: function () { //从服务器获取目前的规则列表

            $scope.ruleFn.getCpouponFn();

            $scope.view.rules = {
                name: "充值",
                uncheck: true,
                state: "",
                show: 0,
                addFunc: $scope.ruleFn.addCouponFn,
                postFunc: $scope.ruleFn.sendCouponFn,
                content: {
                    CHARGE: []
                }
            };
            console.log($scope.view.rules)
            $scope.view.shop = ajaxSendFn({
                state: "1002"
            }, "/shops", "GET").result || [];
            $scope.tem.shops = [];
            for (var x in $scope.view.shop) $scope.tem.shops.push($scope.view.shop[x].id);

        },
        closeFn: function (a) { //取消按钮
            if ($scope.view.rules[a].state == "edit") { //保存
                $scope.view.rules[a].state = "show";
            } else if ($scope.view.rules[a].state == "add") { //新增
                $scope.view.rules[a].state = "show";
            }
        },
        postFn: function () { //发送数据
            var tem = $scope.view.rules.content;
            console.log(tem)
            $scope.ruleFn.addCouponFn()
        },
        addCouponFn: function () {
            var obj = {};
            obj.value = {};
            obj.allocates = [];
            for (var i = 0; i < $scope.set.list.length; i++) {
                obj.allocates[i] = {
                    'highest': 'false',
                    'id': ''
                }
            }
            // if(!$scope.posts.rule.detail || !$scope.posts.rule.detail.ALL){
            //     $scope.posts.rule.detail={
            //         'ALL':[obj]
            //     }
            // }else{               
            //     $scope.posts.rule.detail.ALL.push(obj);
            // }
        },

        removeFn: function (x, b, c) {
            // if ($scope.posts.rule.detail[b][c]) $scope.posts.rule.detail[b].splice(c, 1);
        },
        //构建使用充值卡的数据
        sendChargeConsumeFn: function (a) {
            return $scope.ruleFn.sendFn(a, undefined, undefined, function (json) {
                var obj = json.detail.ALL[0];
                // if (obj.value) {
                //    obj.value = false;
                // } else {
                //    obj.value = true;
                // }
                obj.amount = 1;
                obj.currentAmount = obj.count = 0;
            });
        },
        sendFn: function (a, beforeValidateFunc, afterValidateFunc, fixFunc) { ///没搞完，发送规则
            var tem = $scope.posts[a];
            //整理，删除不需要的规则
            /*    for (var x in tem) {
             if (!$scope.view.rules[a].uncheck) {
             if (!tem[x].check) {
             if ($scope.tem.rules && $scope.tem.rules[x]) delete $scope.tem.rules[x];
             if ($scope.view.rules[a].content[x]) {
             $scope.view.rules[a].content[x].detail = [];
             $scope.view.rules[a].content[x].check = false;
             }
             }
             }
             }*/
            //遍历有效规则，提交到服务器
            var json = {};
            // $scope.inviters = $scope.inviters.splite(",")
            // console.log();

            for (var x in tem) {
                if (!$scope.view.rules[a].uncheck) {
                    if (!tem[x].check) {
                        continue;
                    }
                }
                if ($scope.transferMapRev.hasOwnProperty(x)) {
                    json.type = $scope.transferMapRev[x];
                } else {
                    json.type = x;
                }
                json.detail = {};
                tem[x]._id && (json._id = tem[x]._id);
                tem[x].amountLimit && (json.amountLimit = tem[x].amountLimit);
                if (tem[x].celling) {
                    json.celling = parseInt(tem[x].celling) / 100;
                    // 仅限首次充值
                    if (tem[x].firstLimit) {
                        json.firstLimit = true;
                    } else {
                        json.firstLimit = false;
                    }
                }
                // 是否支持充值卡余额通用
                if (json.type == "CHARGE_CONSUME") {
                    if (tem[x].allpurpose) {
                        json.allpurpose = true;
                    } else {
                        json.allpurpose = false;
                    }
                }

                typeof tem[x].countLimit == 'number' && (json.countLimit = tem[x].countLimit);
                tem[x].timesLimit && (json.timesLimit = tem[x].timesLimit);
                tem[x].obtainCategory && (json.obtainCategory = tem[x].obtainCategory);

                var tem2 = tem[x].detail;
                //if (beforeValidateFunc && typeof(beforeValidateFunc) === "function") {
                //    var obj = beforeValidateFunc(x, tem2);
                //    if (obj) {
                //        alert(obj.message);
                //        return false;
                //    }
                //}

                var b;
                var arr = x.split("_");
                if (arr && arr.length > 1) {
                    b = arr[1];
                }

                for (z in tem2) {
                    for (w in tem2[z]) {
                        var tem3 = tem2[z][w],
                            json2 = {};
                        (typeof (tem3.amount) == 'number' || tem3.amount) && (json2.amount = tem3.amount);
                        tem3.score && (json2.score = tem3.score);
                        tem3.gradeId && (json2.gradeId = tem3.gradeId);
                        if (tem3.value && tem3.value.length != 0) {
                            json2.value = tem3.value;
                            if (json2.value && json2.value.length) {
                                for (var x in json2.value) {
                                    delete json2.value[x].$$hashKey;
                                }
                            }
                        } else if (json.type == "CHARGE_CONSUME") {
                            json2.value = false;
                        }
                        tem3.limit !== undefined && (json2.limit = tem3.limit);
                        tem3.count && (json2.count = tem3.count);
                        tem3.currentAmount && (json2.currentAmount = tem3.currentAmount);
                        // 添加分账规则
                        if (json.detail[tem3.id]) json.detail[tem3.id].push(json2);
                        else json.detail[tem3.id] = [json2];
                    }
                }

                if (json.type == "CHARGE") {
                    angular.forEach(json.detail.ALL, function (each, index) {
                        if (!each.value || !each.value[0].category) {
                            delete each.value
                        }
                    })
                }
                if (afterValidateFunc && typeof (afterValidateFunc) === "function") {
                    obj = afterValidateFunc(b, json);
                    if (obj) {
                        alert(obj.message);
                        return false;
                    }
                }
                if (fixFunc && typeof (fixFunc) === "function") {
                    fixFunc(json);
                }
            }
            // 验证授权邀请码是否正确
            if ($scope.tem.activityCategory == "TICKET") {
                if ($scope.tel.inviters) {
                    json.inviters = $scope.tel.inviters.split(",")
                } else {
                    alert("请输入邀请码");
                    return;
                }
            }

            // if (json.type == "CHARGE_CONSUME") {
            //     delete json.detail;
            // }

            var rulesend = ajaxSendFn(json, "/activity/" + $routeParams.activityid + "/rule", "POST", 1);
            if (rulesend.code == 200) { //
                $scope.ruleFn.oldRuleFn();
            } else {
                errorMsg(rulesend);
                return false;
            }
            return true;
        },
        addRuleFn: function () { //显示添加面板
            $scope.view.modal = {
                title: "添加活动内容",
                html: "addrule"
            };
            $("#showadd").modal("show");
        },

        put: function (details, dv) {
            if (!details.value) {
                details.value = {};
            }
            dv = {};
            details.value.push(dv);
        },
        resetCouponCntFn: function (details, dv) {
            angular.forEach(details.value, function (data, idx) {
                if (data && data.id === dv.id) {
                    this.splice(idx, 1);
                }
            }, details.value);
        },
        containsCoupon: function (details, id) {
            var tmpIdx = -1;
            for (var i = 0; details.value && i < details.value.length; i++) {
                if (details.value[i].id === id) {
                    tmpIdx = i;
                    break;
                }
            }
            return tmpIdx;
        }
    };

    $scope.ruleFn.oldRuleFn();
    $scope.ruleFn.postFn("CHARGE");

    $scope.cbdata = ajaxSendFn({}, "/activity/rebate/" + $routeParams.id, "GET").result;
    $scope.posts = angular.copy($scope.cbdata)
    $scope.set.expiredLimit = $scope.posts.rule.expiredLimit
    $scope.set.countLimit = $scope.posts.rule.countLimit
    $scope.set.personLimit = $scope.posts.rule.personLimit
    $scope.set.allpurpose = $scope.posts.rule.allpurpose + ''
    $scope.set.timesLimit = $scope.posts.rule.timesLimit
    $scope.set.distanceLimit = $scope.posts.rule.distanceLimit

    $scope.set.personLimitDetail = $scope.posts.rule.personLimitDetail
    delete $scope.posts.createTime
    delete $scope.posts.id
    delete $scope.posts.offTime
    delete $scope.posts.onTime
    delete $scope.posts.dateRange
    delete $scope.posts.text
    // delete $scope.posts.rule.detail.ALL.text
    for (var i = 0; i < $scope.set.list.length; i++) {
        for (var k = 0; k < $scope.posts.shops.length; k++) {
            if ($scope.set.list[i].id == $scope.posts.shops[k]) {
                $scope.set.shops[i] = $scope.posts.shops[k]
            }
        }
    }
    // for(var i=0;i<$scope.cbdata.rule.detail.ALL.length;i++){
    //     var allocates = $scope.cbdata.rule.detail.ALL[i].allocates
    //     var allocate = []
    //     for(var k=0;k<allocates.length;k++){
    //        for(var j=0;j<$scope.set.allocate.length;j++){
    //            if(allocates[k].id==$scope.set.allocate[j].id){
    //                 allocate[j]={}
    //                 allocate[j].id = allocates[k].id
    //                 if(allocates[k].highest == false){
    //                     allocate[j].highest = 'false'
    //                 }else{
    //                     allocate[j].highest = 'true'
    //                 }

    //            }
    //        }
    //     }
    //     for(var k=0;k<allocate.length;k++){
    //         if(allocate[k]==null){
    //             allocate[k]={}
    //         }
    //     }
    //     $scope.posts.rule.detail.ALL[i].allocates = allocate
    // }
    console.log("$scope.posts")
    console.log($scope.posts)
    $scope.view.date = {}
    $scope.view.dateRange = $scope.cbdata.dateRange;
    var dateRangeCategory = $scope.posts.dateRangeCategory
    $scope.view.date[dateRangeCategory] = $scope.cbdata.dateRange
    $scope.view.date.dateType = dateRangeCategory
    console.log($scope.view)
    $scope.addPepFn = function () {
        if ($scope.set.personLimitDetail) {
            $scope.set.personLimitDetail.push({
                'amount': '',
                "count": ''
            })
        }
    };
    $scope.removePepFn = function (b) {
        if ($scope.set.personLimitDetail[b]) $scope.set.personLimitDetail.splice(b, 1);
    };
    $scope.sendJsons = function () {
        console.log($scope.posts)
        if (!$scope.posts.picUrl) {
            alert("请先上传图片");
            return;
        }


        $scope.posts.shops = $scope.set.shops.filter(function (s) {
            return s && s.trim();
        });

        var json = angular.copy($scope.posts);

        delete json.CHARGE;
        json.rule = {}
        json.rule.expiredLimit = $scope.set.expiredLimit
        json.rule.personLimit = $scope.set.personLimit
        json.rule.timesLimit = $scope.set.timesLimit
        json.rule.distanceLimit = $scope.set.distanceLimit
        json.rule.countLimit = $scope.set.countLimit
        json.rule.allpurpose = $scope.set.allpurpose
        json.rule.personLimitDetail = angular.copy($scope.set.personLimitDetail)
        // json.rule.detail = angular.copy($scope.posts.rule.detail)
        // json.rule.detail.ALL=angular.copy($scope.posts.rule.detail.ALL)
        // for(var i=0;i<$scope.posts.rule.detail.ALL.length;i++){
        //    delete json.rule.detail.ALL[i].text
        //    for(var j=0;j<json.rule.detail.ALL[i].allocates.length;j++){
        //       if(json.rule.detail.ALL[i].allocates[j].id == 'false' || json.rule.detail.ALL[i].allocates[j].id == ''){
        //          json.rule.detail.ALL[i].allocates.splice(j,1)
        //       }
        //    }


        // }
        console.log(json);
        json.dateRange = {};
        json.dateRangeCategory = $scope.view.date.dateType;
        // delete json.date;
        //start
        if ($scope.view.date.dateType === "CONTINUOUS") {
            if (!$scope.view.dateRange.startDate || !$scope.view.dateRange.endDate) {
                alert("请填写开始和结束日期!");
                return;
            }
            if ($scope.view.dateRange.endDate < $scope.view.dateRange.startDate) {
                alert("结束日期不能小于开始日期!");
                return;
            } else {
                json.dateRange.startDate = $filter("date")($scope.view.dateRange.startDate, "yyyy-MM-dd 00:00:00");
                json.dateRange.endDate = $filter("date")($scope.view.dateRange.endDate, "yyyy-MM-dd 23:59:59");
            }
        } else if ($scope.view.date.dateType === "BIRTHDAY" && $scope.view.date.subType === "AROUND_FIX_DATE") {
            json.dateRange.beforeDays = $scope.view.dateRange.beforeDays || 0;
            json.dateRange.afterDays = $scope.view.dateRange.afterDays || 0;
        }

        json.dateRange.selectCategory = $scope.view.dateRange.selectCategory || 'NONE';
        if ($scope.view.dateRange.subType === "MANUAL_SELECT") {
            var arr = arrayMap(objectKeys($scope.view.dateRange.selectDates), function (date) {
                return date + " 00:00:00";
            });
            if (!isEmptyObject(arr)) {
                json.dateRange.selectDates = arr;
            }
        } else if ($scope.view.dateRange.subType === "MONTH_DAYS") {
            var arr = arrayMap(objectKeys(mapFilter($scope.view.dateRange.selectDays, notNull)), parseInt);
            if (!isEmptyObject(arr)) {
                json.dateRange.selectDays = arr;
            }
        } else if ($scope.view.dateRange.subType === "WEEKLY_DAY") {
            var arr = arrayMap(objectKeys(mapFilter($scope.view.dateRange.selectWeekDays, notNull)), parseInt);
            if (!isEmptyObject(arr)) {
                json.dateRange.selectWeekDays = arr;
            }
        }

        //选择排除，必须要指定排队日期
        if ((json.dateRangeCategory !== "SELECTED_DATES") && (json.dateRange.selectCategory === 'EXCLUDE') && (objectCount(json.dateRange) == 1)) {
            alert("没有指定排除日期！");
            return;
        }

        //'指定日期'类型必须有数据
        if ((json.dateRangeCategory === "SELECTED_DATES") && (objectCount(json.dateRange) == 1)) {
            alert("没有指定日期！");
            return;
        }
        //end
        if (json.advertisement && !json.advertisement.id) {
            delete json.advertisement;
        }
        console.log(json);
        var url = "/activity/rebate/" + $routeParams.id;
        // if ($routeParams.id) {
        //     url += "/" + $routeParams.id;
        // }
        var data = ajaxSendFn(json, url, "POST");
        if (data.code == 200) {
            alert("操作成功");
            window.history.back(-1)
        } else {
            alert(data.message);
        }
    }

    if ($scope.tem && $scope.tem.activityCategory && isEmptyObject($scope.tem.rules)) {
        $scope.ruleFn.stateFn($scope.tem.activityCategory, 'add', 1)
    }
    $scope.checkAllShops = function () { //
        console.log($scope.posts.allShop)

        if ($scope.posts.allShop) { //
            var shops = [];
            for (var i = 0; i < $scope.set.list.length; i++) {
                shops.push($scope.set.list[i].id)
            }
            $scope.set.shops = shops
        } else { //
            $scope.set.shops = [];
            $scope.posts.shops = []
        }
    }
    $scope.checkShops = function (key) {
        if (key == false) {
            delete key
            $scope.posts.allShop = false;
        }
        var arr = $scope.set.shops.filter(function (s) {
            return s && s.trim();
        });
        if (arr.length == $scope.set.list.length) {
            $scope.posts.allShop = true
        } else {
            $scope.posts.allShop = false;
        }
    }
}]);


//  分享金 Control----end
// 转介绍管理---start
app.controller("referralCtr", ["$scope", "$http", "$filter", "$document", "$compile", "$rootScope", function ($scope, $http, $filter, $document, $compile, $rootScope) {
    $scope.config.breadset = [{ //
        name: "转介绍管理",
        href: indexUrl + "/admin.html#/rule/referral",
        class: "referral"
    }, {
        name: "转介绍管理"
    }]; //面包屑;
    $scope.view = {
        list: ajaxSendFn({}, "/activity/saler", "GET").result || [],
    };

    $scope.offFn = function (id) {
        var a = confirm("确认下线此活动？");
        if (a) {
            var data = ajaxSendFn({}, "/activity/saler/" + id + "/off", "POST");
            if (data.code == 200) {
                $scope.view.list = ajaxSendFn({}, "/activity/saler", "GET").result || [];
            } else {
                alert(data.message);
            }
        }
    };

    $scope.onFn = function (id) {
        var a = confirm("确认上线此活动？");
        if (a) {
            var data = ajaxSendFn({}, "/activity/saler/" + id + "/on", "POST");
            if (data.code == 200) {
                $scope.view.list = ajaxSendFn({}, "/activity/saler", "GET").result || [];
            } else {
                alert(data.message);
            }
        }
    };
    $scope.removeFn = function (id) {
        var a = confirm("确认删除？");
        if (a) {
            var data = ajaxSendFn({}, "/activity/saler/" + id, "DELETE");
            if (data.code == 200) {
                $scope.view.list = ajaxSendFn({}, "/activity/saler", "GET").result || [];
            } else {
                alert(data.message);
            }
        }
    };

}]);

app.controller("addreferralCtr", ["$scope", "$http", '$routeParams', "$filter", "$location", 'CouponFactory', function ($scope, $http, $routeParams, $filter, $location, couponFac) {
    $scope.config.breadset = [{ //
        name: "转介绍管理",
        href: indexUrl + "/admin.html#/rule/addreferral",
        class: "addreferral"
    }, {
        name: "转介绍管理"
    }]; //面包屑;

    $scope.view = {
        category: []
    };
    $scope.view1 = {};
    $scope.transferMap = {
        POINT_CONSUME: "POINTCONSUME",
        COUPON_FREE: "COUPONFREE",
        CHARGE_CONSUME: "CHARGECONSUME",
        SPECIAL_PRICE: "SPECIALPRICE",
        LIMIT_REDUCE: "LIMITREDUCE",
        SPEND_AS: "SPENDAS",
        SET_MEAL: "SETMEAL",
        GIVEN_UPGRADE: "GIVENUPGRADE",
        CHARGE_FREE: "CHARGEFREE",
        BIRTH_BENEFIT: "BIRTHBENEFIT",
        FIRST_GIFT: "FIRSTGIFT",

    };
    $scope.transferMapRev = {
        POINTCONSUME: "POINT_CONSUME",
        COUPONFREE: "COUPON_FREE",
        CHARGECONSUME: "CHARGE_CONSUME",
        SPECIALPRICE: "SPECIAL_PRICE",
        LIMITREDUCE: "LIMIT_REDUCE",
        SPENDAS: "SPEND_AS",
        SETMEAL: "SET_MEAL",
        GIVENUPGRADE: "GIVEN_UPGRADE",
        CHARGEFREE: "CHARGE_FREE",
        BIRTHBENEFIT: "BIRTH_BENEFIT",
        FIRSTGIFT: "FIRST_GIFT"
    };
    $scope.tem = {
        rules: {}
    };
    $scope.allShop = false
    $scope.set = {
        times: ajaxSendFn({}, "/businesstimes/all", "GET").result,
        list: ajaxSendFn({
            state: 1002
        }, "/shops", "GET").result,
        allocate: ajaxSendFn({}, "/activity/allocate/8003", "GET").result || [],
        allocates: [],
        packet: ajaxSendFn({}, "/activity/packet/usable", "GET").result || [],
        commision: ajaxSendFn({}, "/activity/commision/usable", "GET").result || [],
        list2: [],
        timeType: {
            "1001": "早市",
            "1002": "午市",
            "1003": "下午茶",
            "1004": "晚市",
            "1005": "宵夜"
        },
        shops: [],
        personLimitDetail: [{
            'amount': '',
            "count": ''
        }]
    };
    console.log($scope.set.packet)
    console.log($scope.set.commision)
    $scope.set.time = getSubtimes($scope.set.times, $scope.set.timeType);
    if (!$scope.set.list) {
        alert("目前还没有添加门店");
        $location.path("/shops");
    }
    $scope.checkallstr = 0;

    $scope.posts = {
        shops: [],
        video: {},
        packetActId: ''
    };
    $scope.coupon = {
        shared: [],
        shops: []
    };
    $scope.cons = function (val) {
        console.log("highest")
        console.log(val)
    }
    console.log($scope.vidUrl)

    $scope.temcoupons2 = {};
    $scope.temcoupons = [];
    $scope.ruleCategory = consumeRuleObj;
    $scope.ruleCategory1 = onlineRuleObj;
    $scope.obtainRepeatCategory = obtainRepeatCategory;

    $scope.ruleFn = {
        openOrClose: function () {
            $("#add").modal("show");
            $scope.isOpenOrClose = true;
        },
        testAddOk: function () {
            $("#add").modal("hide");
            $scope.isOpenOrClose = false;
            alert("添加成功");
            //$scope.view.coupons = couponFac.getAllCoupon();
        },
        testAddFail: function (result) {
            //console.log("错误编号:" + result.code + ", 错误信息:" + result.message);
            errorMsg(result);
        },
        getCpouponFn: function () {
            console.log($scope.view);
            $scope.view1 = ajaxSendFn({}, "/activity/factor", "GET").result || [];
            $scope.view.coupons = $scope.view1.COUPON || [];
            $scope.view.rewards = $scope.view1.REWARD || [];
            console.log("1111");
            console.log($scope.view);
            // $scope.view.allocate = $scope.view1.ALLOCATE || [];
            // $scope.view.coupons = ajaxSendFn({}, "/activity/factor", "GET").result || [];
            // $scope.view.rewards = ajaxSendFn({}, "/activity/factor", "GET").result || [];
        },
        getCouponType: function (id) {
            for (var i = 0; $scope.view.coupons && i < $scope.view.coupons.length; i++) {
                if ($scope.view.coupons[i].id === id) {
                    return $scope.view.coupons[i].category;
                }
            }
        },
        changeCoupon: function (value, dv) {
            if (dv.id) {
                dv.count = 1;
                for (var i = 0; i < $scope.view.coupons.length; i++) {
                    if ($scope.view.coupons[i].id === dv.id) {
                        dv.name = $scope.view.coupons[i].name;
                        break;
                    }
                }
            }
        },
        oldRuleFn: function () { //从服务器获取目前的规则列表

            $scope.ruleFn.getCpouponFn();
            switch ('CHARGE') {
                case "DISCOUNT":
                    $scope.view.rules = {
                        "DISCOUNT": {
                            name: "打折",
                            uncheck: true,
                            state: "",
                            show: 0,
                            addFunc: $scope.ruleFn.addFn,
                            postFunc: $scope.ruleFn.sendFn,
                            content: {
                                DISCOUNT: []
                            }
                        }
                    };
                    break;
                case "CHARGE":
                    $scope.view.rules = {
                        "CHARGE": {
                            name: "充值",
                            uncheck: true,
                            state: "",
                            show: 0,
                            addFunc: $scope.ruleFn.addCouponFn,
                            postFunc: $scope.ruleFn.sendCouponFn,
                            content: {
                                CHARGE: []
                            }
                        }
                    };
                    break;

            }

            console.log($scope.view.rules)
            $scope.view.shop = ajaxSendFn({
                state: "1002"
            }, "/shops", "GET").result || [];
            $scope.tem.shops = [];
            for (var x in $scope.view.shop) $scope.tem.shops.push($scope.view.shop[x].id);

            $scope.tem.rules = {}
            $scope.tem.rules[$scope.tem.rules.type] = $scope.tem.rules;

        },
        stateFn: function (a, b, c, d) { //key,state,show,点击添加规则时调用
            var aRe = a.split("_")[0];
            if (aRe in $scope.view.rules) {
                $scope.view.rules[aRe].state = b;
                $scope.view.rules[aRe].show = c;
            }
            if (b == "add") $scope.ruleFn.buttonFn(a);
            if (!d) { //只让添加一项,就让设定活动内容按钮灰掉,d无值表示是手动点击
                $scope.btnDisable = 1;
                return;
            }
            var tem = d.type;
            if (c) {
                d.celling && (d.celling = d.celling * 100);
                $scope.view.rules[aRe].content[tem] = d
            }
        },
        closeFn: function (a) { //取消按钮
            if ($scope.view.rules[a].state == "edit") { //保存
                $scope.view.rules[a].state = "show";
            } else if ($scope.view.rules[a].state == "add") { //新增
                $scope.view.rules[a].state = "show";
            }
        },
        buttonFn: function (a) { //活动保存按钮  del
            if ($scope.view.rules[a].state == "show") { //修改
                $scope.ruleFn.postFn(a);
                $scope.ruleFn.memberFn();
                $scope.view.rules[a].state = "edit";
            } else if ($scope.view.rules[a].state == "edit") { //保存
                var res = $scope.ruleFn.sendCouponFn();
                if (res) {
                    //$location.path("/rule");
                    $scope.view.rules[a].state = "show";
                }
            } else if ($scope.view.rules[a].state == "add") { //新增
                for (x in $scope.view.rules[a].content) $scope.view.rules[a].addFunc(x);
                $scope.view.rules[a].state = "edit";
                $("#showadd").modal("hide");
            }
        },

        postFn: function (a) { //发送数据
            var tem = $scope.view.rules[a].content;
            console.log(tem)
            $scope.posts[a] = {};
            for (x in tem) {
                var needCheck = true;
                $scope.posts[a][x] = tem[x];
                if (tem[x] instanceof Array) {
                    needCheck = false;
                }
                $scope.posts[a][x].check = needCheck;
                if (!tem[x].detail || !Object.keys(tem[x].detail).length) {
                    $scope.view.rules[a].addFunc(x);
                }
            }

        },
        addCouponFn: function (x) {
            $scope.ruleFn.addFn(x, function (a, b) {
                //if (a === "COUPON" || a === "GAME" || b === "COUPON" || x === "COUPONFREE" || x === "SPECIALPRICE") {
                if ($scope.posts[a][x].detail != undefined) {
                    if ($scope.posts[a][x].detail.ALL != undefined) {
                        var arr = $scope.posts[a][x].detail.ALL;
                    } else {
                        $scope.posts[a][x].detail.ALL = []
                    }
                } else {
                    $scope.posts[a][x].detail = {}
                    $scope.posts[a][x].detail.ALL = []
                }

                if (arr && arr.length > 0 && !isEmptyObject(arr[0])) {
                    var obj = {};
                    obj.value = {};
                    obj.allocates = []
                    for (var i = 0; i < $scope.set.list.length; i++) {
                        obj.allocates[i] = {
                            'highest': 'false',
                            'id': ''
                        }
                    }
                    $scope.posts[a][x].detail.ALL.push(obj);
                    console.log("obj1")
                    console.log(obj)
                } else {
                    var obj = {}
                    obj.value = {};
                    obj.allocates = []
                    for (var i = 0; i < $scope.set.list.length; i++) {
                        obj.allocates[i] = {
                            'highest': 'false',
                            'id': ''
                        }
                    }
                    $scope.posts[a][x].detail.ALL.push(obj);
                    console.log("obj2")
                    console.log(obj)
                }

                console.log("$$hashKey")
                console.log($scope.posts[a][x].detail.ALL)
                //}
            })

        },

        addFn: function (x, cb) { //
            var cnt = 0;
            var a, b;
            var arr = x.split("_");
            if (arr && arr.length > 0) {
                a = arr[0];
            }
            if (arr && arr.length > 1) {
                b = arr[1];
            }
            if (!$scope.posts[a] || !$scope.posts[a][x] || !$scope.posts[a][x].detail || isEmptyObject($scope.posts[a][x].detail)) {
                if (!$scope.posts[a]) $scope.posts[a] = {};
                $scope.posts[a][x] = $scope.view.rules[a].content[x];
                // if (!$scope.posts[a][x].detail || isEmptyObject($scope.posts[a][x].detail))
                // $scope.posts[a][x].detail = {
                //     "ALL": [{}]
                // };
                if (cb) cb(a, b);
                return;
            }
            if ($scope.posts[a][x].detail.ALL) {
                // var obj = {};
                if (cb) {
                    cb(a, b);
                } else {
                    // $scope.posts[a][x].detail.ALL.push(obj);
                }
            } else {
                // $scope.posts[a][x].detail.ALL = [{}];
                if (cb) cb(a, b);
            }
            console.log("$$hashKey")
            console.log($scope.posts[a][x].detail.ALL)

        },
        removeFn: function (x, b, c) {
            var a = x.split("_")[0];
            if ($scope.posts[a][x].detail[b][c]) $scope.posts[a][x].detail[b].splice(c, 1);
        },
        //构建使用充值卡的数据
        sendChargeConsumeFn: function (a) {
            return $scope.ruleFn.sendFn(a, undefined, undefined, function (json) {
                var obj = json.detail.ALL[0];
                // if (obj.value) {
                //    obj.value = false;
                // } else {
                //    obj.value = true;
                // }
                obj.amount = 1;
                obj.currentAmount = obj.count = 0;
            });
        },
        sendFn: function (a, beforeValidateFunc, afterValidateFunc, fixFunc) { ///没搞完，发送规则
            var tem = $scope.posts[a];
            //整理，删除不需要的规则
            /*    for (var x in tem) {
             if (!$scope.view.rules[a].uncheck) {
             if (!tem[x].check) {
             if ($scope.tem.rules && $scope.tem.rules[x]) delete $scope.tem.rules[x];
             if ($scope.view.rules[a].content[x]) {
             $scope.view.rules[a].content[x].detail = [];
             $scope.view.rules[a].content[x].check = false;
             }
             }
             }
             }*/
            //遍历有效规则，提交到服务器
            var json = {};
            // $scope.inviters = $scope.inviters.splite(",")
            // console.log();

            for (var x in tem) {
                if (!$scope.view.rules[a].uncheck) {
                    if (!tem[x].check) {
                        continue;
                    }
                }
                if ($scope.transferMapRev.hasOwnProperty(x)) {
                    json.type = $scope.transferMapRev[x];
                } else {
                    json.type = x;
                }
                json.detail = {};
                tem[x]._id && (json._id = tem[x]._id);
                tem[x].amountLimit && (json.amountLimit = tem[x].amountLimit);
                if (tem[x].celling) {
                    json.celling = parseInt(tem[x].celling) / 100;
                    // 仅限首次充值
                    if (tem[x].firstLimit) {
                        json.firstLimit = true;
                    } else {
                        json.firstLimit = false;
                    }
                }
                // 是否支持充值卡余额通用
                if (json.type == "CHARGE_CONSUME") {
                    if (tem[x].allpurpose) {
                        json.allpurpose = true;
                    } else {
                        json.allpurpose = false;
                    }
                }

                typeof tem[x].countLimit == 'number' && (json.countLimit = tem[x].countLimit);
                tem[x].timesLimit && (json.timesLimit = tem[x].timesLimit);
                tem[x].obtainCategory && (json.obtainCategory = tem[x].obtainCategory);

                var tem2 = tem[x].detail;
                //if (beforeValidateFunc && typeof(beforeValidateFunc) === "function") {
                //    var obj = beforeValidateFunc(x, tem2);
                //    if (obj) {
                //        alert(obj.message);
                //        return false;
                //    }
                //}

                var b;
                var arr = x.split("_");
                if (arr && arr.length > 1) {
                    b = arr[1];
                }

                for (z in tem2) {
                    for (w in tem2[z]) {
                        var tem3 = tem2[z][w],
                            json2 = {};
                        (typeof (tem3.amount) == 'number' || tem3.amount) && (json2.amount = tem3.amount);
                        tem3.score && (json2.score = tem3.score);
                        tem3.gradeId && (json2.gradeId = tem3.gradeId);
                        if (tem3.value && tem3.value.length != 0) {
                            json2.value = tem3.value;
                            if (json2.value && json2.value.length) {
                                for (var x in json2.value) {
                                    delete json2.value[x].$$hashKey;
                                }
                            }
                        } else if (json.type == "CHARGE_CONSUME") {
                            json2.value = false;
                        }
                        tem3.limit !== undefined && (json2.limit = tem3.limit);
                        tem3.count && (json2.count = tem3.count);
                        tem3.currentAmount && (json2.currentAmount = tem3.currentAmount);
                        // 添加分账规则
                        if (json.detail[tem3.id]) json.detail[tem3.id].push(json2);
                        else json.detail[tem3.id] = [json2];
                    }
                }

                if (json.type == "CHARGE") {
                    angular.forEach(json.detail.ALL, function (each, index) {
                        if (!each.value || !each.value[0].category) {
                            delete each.value
                        }
                    })
                }
                if (afterValidateFunc && typeof (afterValidateFunc) === "function") {
                    obj = afterValidateFunc(b, json);
                    if (obj) {
                        alert(obj.message);
                        return false;
                    }
                }
                if (fixFunc && typeof (fixFunc) === "function") {
                    fixFunc(json);
                }
            }
            // 验证授权邀请码是否正确
            if ($scope.tem.activityCategory == "TICKET") {
                if ($scope.tel.inviters) {
                    json.inviters = $scope.tel.inviters.split(",")
                } else {
                    alert("请输入邀请码");
                    return;
                }
            }

            // if (json.type == "CHARGE_CONSUME") {
            //     delete json.detail;
            // }

            var rulesend = ajaxSendFn(json, "/activity/" + $routeParams.activityid + "/rule", "POST", 1);
            if (rulesend.code == 200) { //
                $scope.ruleFn.oldRuleFn();
            } else {
                errorMsg(rulesend);
                return false;
            }
            return true;
        },
        addRuleFn: function () { //显示添加面板
            $scope.view.modal = {
                title: "添加活动内容",
                html: "addrule"
            };
            $("#showadd").modal("show");
        },

        put: function (details, dv) {
            if (!details.value) {
                details.value = {};
            }
            dv = {};
            details.value.push(dv);
        },
        resetCouponCntFn: function (details, dv) {
            angular.forEach(details.value, function (data, idx) {
                if (data && data.id === dv.id) {
                    this.splice(idx, 1);
                }
            }, details.value);
        },
        containsCoupon: function (details, id) {
            var tmpIdx = -1;
            for (var i = 0; details.value && i < details.value.length; i++) {
                if (details.value[i].id === id) {
                    tmpIdx = i;
                    break;
                }
            }
            return tmpIdx;
        }
    };
    $scope.addPepFn = function () {
        if ($scope.set.personLimitDetail) {
            $scope.set.personLimitDetail.push({
                'amount': '',
                "count": ''
            })
        }
    };
    $scope.removePepFn = function (b) {
        if ($scope.set.personLimitDetail[b]) $scope.set.personLimitDetail.splice(b, 1);
    };
    $scope.ruleFn.oldRuleFn();

    // if ($scope.view.coupons.length) {
    //     $scope.view.category.push({id: 'COUPON', name: "优惠券"});
    // }
    // if ($scope.view.rewards.length) {
    //     $scope.view.category.push({id: 'REWARD', name: '代用币'});
    // }
    $scope.sendJsons = function () {
        console.log($scope.posts)
        if (!$scope.posts.picUrl) {
            alert("请先上传图片");
            return;
        }

        $scope.posts.shops = $scope.set.shops.filter(function (s) {
            return s && s.trim();
        });

        var json = angular.copy($scope.posts);

        delete json.CHARGE;
        json.rule = {}
        json.rule.expiredLimit = $scope.set.expiredLimit
        json.rule.personLimit = $scope.set.personLimit
        json.rule.timesLimit = $scope.set.timesLimit
        json.rule.distanceLimit = $scope.set.distanceLimit
        json.rule.allpurpose = $scope.set.allpurpose
        json.rule.personLimitDetail = angular.copy($scope.set.personLimitDetail)
        json.rule.detail = angular.copy($scope.posts.CHARGE.CHARGE.detail)
        for (var k = 0; k < $scope.posts.CHARGE.CHARGE.detail.ALL.length; k++) {
            var allocates = $scope.posts.CHARGE.CHARGE.detail.ALL[k].allocates
            json.rule.detail.ALL[k].allocates = []
            for (var i = 0; i < allocates.length; i++) {
                if (allocates[i].id) {
                    json.rule.detail.ALL[k].allocates.push(allocates[i])
                }
            }
        }
        console.log(json);
        json.dateRange = {};
        json.dateRangeCategory = $scope.view.date.dateType;
        // delete json.date;
        //start
        if ($scope.view.date.dateType === "CONTINUOUS") {
            if (!$scope.view.dateRange.startDate || !$scope.view.dateRange.endDate) {
                alert("请填写开始和结束日期!");
                return;
            }
            if ($scope.view.dateRange.endDate < $scope.view.dateRange.startDate) {
                alert("结束日期不能小于开始日期!");
                return;
            } else {
                json.dateRange.startDate = $filter("date")($scope.view.dateRange.startDate, "yyyy-MM-dd 00:00:00");
                json.dateRange.endDate = $filter("date")($scope.view.dateRange.endDate, "yyyy-MM-dd 23:59:59");
            }
        } else if ($scope.view.date.dateType === "BIRTHDAY" && $scope.view.date.subType === "AROUND_FIX_DATE") {
            json.dateRange.beforeDays = $scope.view.dateRange.beforeDays || 0;
            json.dateRange.afterDays = $scope.view.dateRange.afterDays || 0;
        }

        json.dateRange.selectCategory = $scope.view.dateRange.selectCategory || 'NONE';
        if ($scope.view.dateRange.subType === "MANUAL_SELECT") {
            var arr = arrayMap(objectKeys($scope.view.dateRange.selectDates), function (date) {
                return date + " 00:00:00";
            });
            if (!isEmptyObject(arr)) {
                json.dateRange.selectDates = arr;
            }
        } else if ($scope.view.dateRange.subType === "MONTH_DAYS") {
            var arr = arrayMap(objectKeys(mapFilter($scope.view.dateRange.selectDays, notNull)), parseInt);
            if (!isEmptyObject(arr)) {
                json.dateRange.selectDays = arr;
            }
        } else if ($scope.view.dateRange.subType === "WEEKLY_DAY") {
            var arr = arrayMap(objectKeys(mapFilter($scope.view.dateRange.selectWeekDays, notNull)), parseInt);
            if (!isEmptyObject(arr)) {
                json.dateRange.selectWeekDays = arr;
            }
        }

        //选择排除，必须要指定排队日期
        if ((json.dateRangeCategory !== "SELECTED_DATES") && (json.dateRange.selectCategory === 'EXCLUDE') && (objectCount(json.dateRange) == 1)) {
            alert("没有指定排除日期！");
            return;
        }

        //'指定日期'类型必须有数据
        if ((json.dateRangeCategory === "SELECTED_DATES") && (objectCount(json.dateRange) == 1)) {
            alert("没有指定日期！");
            return;
        }
        //end
        if (json.advertisement && !json.advertisement.id) {
            delete json.advertisement;
        }
        console.log(json);
        var url = "/activity/saler";
        // if ($routeParams.id) {
        //     url += "/" + $routeParams.id;
        // }
        var data = ajaxSendFn(json, url, "POST");
        if (data.code == 200) {
            alert("操作成功");
            $location.path("/rule/addcommission");
        } else {
            alert(data.message);
        }
    }
    // $scope.ruleFn.buttonFn("CHARGE");
    $scope.ruleFn.postFn("CHARGE");
    /*
     * memberFn*/

    // $scope.ruleFn.getCpouponFn();
    if ($scope.tem && $scope.tem.activityCategory && isEmptyObject($scope.tem.rules)) {
        $scope.ruleFn.stateFn($scope.tem.activityCategory, 'add', 1)
    }
    $scope.checkAllShops = function () { //
        console.log($scope.posts.allShop)

        if ($scope.posts.allShop) { //
            var shops = [];
            for (var i = 0; i < $scope.set.list.length; i++) {
                shops.push($scope.set.list[i].id)
            }
            $scope.set.shops = shops
        } else { //
            $scope.set.shops = [];
            $scope.posts.shops = []
        }
    }
    $scope.checkShops = function (key) {
        if (key == false) {
            delete key
            $scope.posts.allShop = false;
        }
        var arr = $scope.set.shops.filter(function (s) {
            return s && s.trim();
        });
        if (arr.length == $scope.set.list.length) {
            $scope.posts.allShop = true
        } else {
            $scope.posts.allShop = false;
        }
    }
}]);

app.controller("editreferralCtr", ["$scope", "$http", '$routeParams', "$filter", "$location", 'CouponFactory', function ($scope, $http, $routeParams, $filter, $location, couponFac) {
    $scope.config.breadset = [{ //
        name: "转介绍管理",
        href: indexUrl + "/admin.html#/rule/editreferral",
        class: "editreferral"
    }, {
        name: "转介绍管理"
    }]; //面包屑;

    $scope.view = {
        category: []
    };
    $scope.view1 = {};
    $scope.transferMap = {
        POINT_CONSUME: "POINTCONSUME",
        COUPON_FREE: "COUPONFREE",
        CHARGE_CONSUME: "CHARGECONSUME",
        SPECIAL_PRICE: "SPECIALPRICE",
        LIMIT_REDUCE: "LIMITREDUCE",
        SPEND_AS: "SPENDAS",
        SET_MEAL: "SETMEAL",
        GIVEN_UPGRADE: "GIVENUPGRADE",
        CHARGE_FREE: "CHARGEFREE",
        BIRTH_BENEFIT: "BIRTHBENEFIT",
        FIRST_GIFT: "FIRSTGIFT",

    };
    $scope.transferMapRev = {
        POINTCONSUME: "POINT_CONSUME",
        COUPONFREE: "COUPON_FREE",
        CHARGECONSUME: "CHARGE_CONSUME",
        SPECIALPRICE: "SPECIAL_PRICE",
        LIMITREDUCE: "LIMIT_REDUCE",
        SPENDAS: "SPEND_AS",
        SETMEAL: "SET_MEAL",
        GIVENUPGRADE: "GIVEN_UPGRADE",
        CHARGEFREE: "CHARGE_FREE",
        BIRTHBENEFIT: "BIRTH_BENEFIT",
        FIRSTGIFT: "FIRST_GIFT"
    };
    $scope.tem = {
        rules: {}
    };
    $scope.allShop = false
    $scope.set = {
        times: ajaxSendFn({}, "/businesstimes/all", "GET").result,
        list: ajaxSendFn({
            state: 1002
        }, "/shops", "GET").result,
        allocate: ajaxSendFn({}, "/activity/allocate/8003", "GET").result || [],
        packet: ajaxSendFn({}, "/activity/packet/usable", "GET").result || [],
        commision: ajaxSendFn({}, "/activity/commision/usable", "GET").result || [],
        allocates: [],
        shops: [],
        personLimitDetail: [{
            'amount': '',
            "count": ''
        }]
    };
    console.log($scope.set.times)
    if (!$scope.set.list) {
        alert("目前还没有添加门店");
        $location.path("/shops");
    }
    $scope.checkallstr = 0;

    $scope.posts = {
        shops: [],
        rule: {
            detail: []
        },
        video: {},
        packetActId: ''
    };
    $scope.coupon = {
        shared: [],
        shops: []
    };


    $scope.temcoupons2 = {};
    $scope.temcoupons = [];
    $scope.ruleCategory = consumeRuleObj;
    $scope.ruleCategory1 = onlineRuleObj;
    $scope.obtainRepeatCategory = obtainRepeatCategory;

    $scope.ruleFn = {
        getCpouponFn: function () {
            console.log($scope.view);
            $scope.view1 = ajaxSendFn({}, "/activity/factor", "GET").result || [];
            $scope.view.coupons = $scope.view1.COUPON || [];
            $scope.view.rewards = $scope.view1.REWARD || [];
            console.log("1111");
            console.log($scope.view);
            // $scope.view.allocate = $scope.view1.ALLOCATE || [];
            // $scope.view.coupons = ajaxSendFn({}, "/activity/factor", "GET").result || [];
            // $scope.view.rewards = ajaxSendFn({}, "/activity/factor", "GET").result || [];
        },
        getCouponType: function (id) {
            for (var i = 0; $scope.view.coupons && i < $scope.view.coupons.length; i++) {
                if ($scope.view.coupons[i].id === id) {
                    return $scope.view.coupons[i].category;
                }
            }
        },
        changeCoupon: function (value, dv) {
            if (dv.id) {
                dv.count = 1;
                for (var i = 0; i < $scope.view.coupons.length; i++) {
                    if ($scope.view.coupons[i].id === dv.id) {
                        dv.name = $scope.view.coupons[i].name;
                        break;
                    }
                }
            }
        },
        oldRuleFn: function () { //从服务器获取目前的规则列表

            $scope.ruleFn.getCpouponFn();
            alert('执行')
            $scope.view.rules = {
                name: "充值",
                uncheck: true,
                state: "",
                show: 0,
                addFunc: $scope.ruleFn.addCouponFn,
                postFunc: $scope.ruleFn.sendCouponFn,
                content: {
                    CHARGE: []
                },

            };
            $scope.view.allocates = ajaxSendFn({}, "/activity/allocate/8010", "GET").result || []

            console.log($scope.view.allocate)
            $scope.view.shop = ajaxSendFn({
                state: "1002"
            }, "/shops", "GET").result || [];
            $scope.tem.shops = [];
            for (var x in $scope.view.shop) $scope.tem.shops.push($scope.view.shop[x].id);

        },
        closeFn: function (a) { //取消按钮
            if ($scope.view.rules[a].state == "edit") { //保存
                $scope.view.rules[a].state = "show";
            } else if ($scope.view.rules[a].state == "add") { //新增
                $scope.view.rules[a].state = "show";
            }
        },
        postFn: function () { //发送数据
            var tem = $scope.view.rules.content;
            console.log(tem)
            $scope.ruleFn.addCouponFn()
        },
        addCouponFn: function () {
            var obj = {};
            obj.value = {};
            obj.allocates = [];
            for (var i = 0; i < $scope.set.list.length; i++) {
                obj.allocates[i] = {
                    'highest': 'false',
                    'id': ''
                }
            }
            if (!$scope.posts.rule.detail || !$scope.posts.rule.detail.ALL) {
                $scope.posts.rule.detail = {
                    'ALL': [obj]
                }
            } else {
                $scope.posts.rule.detail.ALL.push(obj);
            }
        },

        removeFn: function (x, b, c) {
            if ($scope.posts.rule.detail[b][c]) $scope.posts.rule.detail[b].splice(c, 1);
        },
        //构建使用充值卡的数据
        sendChargeConsumeFn: function (a) {
            return $scope.ruleFn.sendFn(a, undefined, undefined, function (json) {
                var obj = json.detail.ALL[0];
                // if (obj.value) {
                //    obj.value = false;
                // } else {
                //    obj.value = true;
                // }
                obj.amount = 1;
                obj.currentAmount = obj.count = 0;
            });
        },
        sendFn: function (a, beforeValidateFunc, afterValidateFunc, fixFunc) { ///没搞完，发送规则
            var tem = $scope.posts[a];
            //整理，删除不需要的规则
            /*    for (var x in tem) {
             if (!$scope.view.rules[a].uncheck) {
             if (!tem[x].check) {
             if ($scope.tem.rules && $scope.tem.rules[x]) delete $scope.tem.rules[x];
             if ($scope.view.rules[a].content[x]) {
             $scope.view.rules[a].content[x].detail = [];
             $scope.view.rules[a].content[x].check = false;
             }
             }
             }
             }*/
            //遍历有效规则，提交到服务器
            var json = {};
            // $scope.inviters = $scope.inviters.splite(",")
            // console.log();

            for (var x in tem) {
                if (!$scope.view.rules[a].uncheck) {
                    if (!tem[x].check) {
                        continue;
                    }
                }
                if ($scope.transferMapRev.hasOwnProperty(x)) {
                    json.type = $scope.transferMapRev[x];
                } else {
                    json.type = x;
                }
                json.detail = {};
                tem[x]._id && (json._id = tem[x]._id);
                tem[x].amountLimit && (json.amountLimit = tem[x].amountLimit);
                if (tem[x].celling) {
                    json.celling = parseInt(tem[x].celling) / 100;
                    // 仅限首次充值
                    if (tem[x].firstLimit) {
                        json.firstLimit = true;
                    } else {
                        json.firstLimit = false;
                    }
                }
                // 是否支持充值卡余额通用
                if (json.type == "CHARGE_CONSUME") {
                    if (tem[x].allpurpose) {
                        json.allpurpose = true;
                    } else {
                        json.allpurpose = false;
                    }
                }

                typeof tem[x].countLimit == 'number' && (json.countLimit = tem[x].countLimit);
                tem[x].timesLimit && (json.timesLimit = tem[x].timesLimit);
                tem[x].obtainCategory && (json.obtainCategory = tem[x].obtainCategory);

                var tem2 = tem[x].detail;
                //if (beforeValidateFunc && typeof(beforeValidateFunc) === "function") {
                //    var obj = beforeValidateFunc(x, tem2);
                //    if (obj) {
                //        alert(obj.message);
                //        return false;
                //    }
                //}

                var b;
                var arr = x.split("_");
                if (arr && arr.length > 1) {
                    b = arr[1];
                }

                for (z in tem2) {
                    for (w in tem2[z]) {
                        var tem3 = tem2[z][w],
                            json2 = {};
                        (typeof (tem3.amount) == 'number' || tem3.amount) && (json2.amount = tem3.amount);
                        tem3.score && (json2.score = tem3.score);
                        tem3.gradeId && (json2.gradeId = tem3.gradeId);
                        if (tem3.value && tem3.value.length != 0) {
                            json2.value = tem3.value;
                            if (json2.value && json2.value.length) {
                                for (var x in json2.value) {
                                    delete json2.value[x].$$hashKey;
                                }
                            }
                        } else if (json.type == "CHARGE_CONSUME") {
                            json2.value = false;
                        }
                        tem3.limit !== undefined && (json2.limit = tem3.limit);
                        tem3.count && (json2.count = tem3.count);
                        tem3.currentAmount && (json2.currentAmount = tem3.currentAmount);
                        // 添加分账规则
                        if (json.detail[tem3.id]) json.detail[tem3.id].push(json2);
                        else json.detail[tem3.id] = [json2];
                    }
                }

                if (json.type == "CHARGE") {
                    angular.forEach(json.detail.ALL, function (each, index) {
                        if (!each.value || !each.value[0].category) {
                            delete each.value
                        }
                    })
                }
                if (afterValidateFunc && typeof (afterValidateFunc) === "function") {
                    obj = afterValidateFunc(b, json);
                    if (obj) {
                        alert(obj.message);
                        return false;
                    }
                }
                if (fixFunc && typeof (fixFunc) === "function") {
                    fixFunc(json);
                }
            }
            // 验证授权邀请码是否正确
            if ($scope.tem.activityCategory == "TICKET") {
                if ($scope.tel.inviters) {
                    json.inviters = $scope.tel.inviters.split(",")
                } else {
                    alert("请输入邀请码");
                    return;
                }
            }

            // if (json.type == "CHARGE_CONSUME") {
            //     delete json.detail;
            // }

            var rulesend = ajaxSendFn(json, "/activity/" + $routeParams.activityid + "/rule", "POST", 1);
            if (rulesend.code == 200) { //
                $scope.ruleFn.oldRuleFn();
            } else {
                errorMsg(rulesend);
                return false;
            }
            return true;
        },
        addRuleFn: function () { //显示添加面板
            $scope.view.modal = {
                title: "添加活动内容",
                html: "addrule"
            };
            $("#showadd").modal("show");
        },

        put: function (details, dv) {
            if (!details.value) {
                details.value = {};
            }
            dv = {};
            details.value.push(dv);
        },
        resetCouponCntFn: function (details, dv) {
            angular.forEach(details.value, function (data, idx) {
                if (data && data.id === dv.id) {
                    this.splice(idx, 1);
                }
            }, details.value);
        },
        containsCoupon: function (details, id) {
            var tmpIdx = -1;
            for (var i = 0; details.value && i < details.value.length; i++) {
                if (details.value[i].id === id) {
                    tmpIdx = i;
                    break;
                }
            }
            return tmpIdx;
        }
    };

    $scope.ruleFn.oldRuleFn();
    $scope.ruleFn.postFn("CHARGE");

    $scope.cbdata = ajaxSendFn({}, "/activity/saler/" + $routeParams.id, "GET").result;
    $scope.posts = angular.copy($scope.cbdata)
    $scope.set.expiredLimit = $scope.posts.rule.expiredLimit
    $scope.set.personLimit = $scope.posts.rule.personLimit
    $scope.set.allpurpose = $scope.posts.rule.allpurpose + ''
    $scope.set.timesLimit = $scope.posts.rule.timesLimit
    $scope.set.distanceLimit = $scope.posts.rule.distanceLimit
    $scope.set.personLimitDetail = $scope.posts.rule.personLimitDetail
    delete $scope.posts.createTime
    delete $scope.posts.id
    delete $scope.posts.offTime
    delete $scope.posts.onTime
    delete $scope.posts.dateRange
    delete $scope.posts.text
    delete $scope.posts.rule.detail.ALL.text
    for (var i = 0; i < $scope.set.list.length; i++) {
        for (var k = 0; k < $scope.posts.shops.length; k++) {
            if ($scope.set.list[i].id == $scope.posts.shops[k]) {
                $scope.set.shops[i] = $scope.posts.shops[k]
            }
        }
    }
    for (var i = 0; i < $scope.cbdata.rule.detail.ALL.length; i++) {
        var allocates = $scope.cbdata.rule.detail.ALL[i].allocates
        var allocate = []
        for (var k = 0; k < allocates.length; k++) {
            for (var j = 0; j < $scope.set.allocate.length; j++) {
                if (allocates[k].id == $scope.set.allocate[j].id) {
                    allocate[j] = {}
                    allocate[j].id = allocates[k].id
                    if (allocates[k].highest == false) {
                        allocate[j].highest = 'false'
                    } else {
                        allocate[j].highest = 'true'
                    }

                }
            }
        }
        for (var k = 0; k < allocate.length; k++) {
            if (allocate[k] == null) {
                allocate[k] = {}
            }
        }
        $scope.posts.rule.detail.ALL[i].allocates = allocate
    }
    $scope.view.date = {}
    $scope.view.dateRange = $scope.cbdata.dateRange;
    var dateRangeCategory = $scope.posts.dateRangeCategory
    $scope.view.date[dateRangeCategory] = $scope.cbdata.dateRange
    $scope.view.date.dateType = dateRangeCategory
    console.log($scope.view)
    $scope.addPepFn = function () {
        if ($scope.set.personLimitDetail) {
            $scope.set.personLimitDetail.push({
                'amount': '',
                "count": ''
            })
        }
    };
    $scope.removePepFn = function (b) {
        if ($scope.set.personLimitDetail[b]) $scope.set.personLimitDetail.splice(b, 1);
    };
    $scope.sendJsons = function () {
        console.log($scope.posts)
        if (!$scope.posts.picUrl) {
            alert("请先上传图片");
            return;
        }


        $scope.posts.shops = $scope.set.shops.filter(function (s) {
            return s && s.trim();
        });

        var json = angular.copy($scope.posts);

        delete json.CHARGE;
        json.rule = {}
        json.rule.expiredLimit = $scope.set.expiredLimit
        json.rule.personLimit = $scope.set.personLimit
        json.rule.timesLimit = $scope.set.timesLimit
        json.rule.distanceLimit = $scope.set.distanceLimit
        json.rule.allpurpose = $scope.set.allpurpose
        json.rule.personLimitDetail = angular.copy($scope.set.personLimitDetail)
        json.rule.detail = angular.copy($scope.posts.rule.detail)
        // json.rule.detail.ALL=angular.copy($scope.posts.rule.detail.ALL)
        for (var i = 0; i < $scope.posts.rule.detail.ALL.length; i++) {
            delete json.rule.detail.ALL[i].text
            for (var j = 0; j < json.rule.detail.ALL[i].allocates.length; j++) {
                if (json.rule.detail.ALL[i].allocates[j].id == 'false' || json.rule.detail.ALL[i].allocates[j].id == '') {
                    json.rule.detail.ALL[i].allocates.splice(j, 1)
                }
            }


        }
        console.log(json);
        json.dateRange = {};
        json.dateRangeCategory = $scope.view.date.dateType;
        // delete json.date;
        //start
        if ($scope.view.date.dateType === "CONTINUOUS") {
            if (!$scope.view.dateRange.startDate || !$scope.view.dateRange.endDate) {
                alert("请填写开始和结束日期!");
                return;
            }
            if ($scope.view.dateRange.endDate < $scope.view.dateRange.startDate) {
                alert("结束日期不能小于开始日期!");
                return;
            } else {
                json.dateRange.startDate = $filter("date")($scope.view.dateRange.startDate, "yyyy-MM-dd 00:00:00");
                json.dateRange.endDate = $filter("date")($scope.view.dateRange.endDate, "yyyy-MM-dd 23:59:59");
            }
        } else if ($scope.view.date.dateType === "BIRTHDAY" && $scope.view.date.subType === "AROUND_FIX_DATE") {
            json.dateRange.beforeDays = $scope.view.dateRange.beforeDays || 0;
            json.dateRange.afterDays = $scope.view.dateRange.afterDays || 0;
        }

        json.dateRange.selectCategory = $scope.view.dateRange.selectCategory || 'NONE';
        if ($scope.view.dateRange.subType === "MANUAL_SELECT") {
            var arr = arrayMap(objectKeys($scope.view.dateRange.selectDates), function (date) {
                return date + " 00:00:00";
            });
            if (!isEmptyObject(arr)) {
                json.dateRange.selectDates = arr;
            }
        } else if ($scope.view.dateRange.subType === "MONTH_DAYS") {
            var arr = arrayMap(objectKeys(mapFilter($scope.view.dateRange.selectDays, notNull)), parseInt);
            if (!isEmptyObject(arr)) {
                json.dateRange.selectDays = arr;
            }
        } else if ($scope.view.dateRange.subType === "WEEKLY_DAY") {
            var arr = arrayMap(objectKeys(mapFilter($scope.view.dateRange.selectWeekDays, notNull)), parseInt);
            if (!isEmptyObject(arr)) {
                json.dateRange.selectWeekDays = arr;
            }
        }

        //选择排除，必须要指定排队日期
        if ((json.dateRangeCategory !== "SELECTED_DATES") && (json.dateRange.selectCategory === 'EXCLUDE') && (objectCount(json.dateRange) == 1)) {
            alert("没有指定排除日期！");
            return;
        }

        //'指定日期'类型必须有数据
        if ((json.dateRangeCategory === "SELECTED_DATES") && (objectCount(json.dateRange) == 1)) {
            alert("没有指定日期！");
            return;
        }
        //end
        if (json.advertisement && !json.advertisement.id) {
            delete json.advertisement;
        }
        console.log(json);
        var url = "/activity/saler/" + $routeParams.id;
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

    if ($scope.tem && $scope.tem.activityCategory && isEmptyObject($scope.tem.rules)) {
        $scope.ruleFn.stateFn($scope.tem.activityCategory, 'add', 1)
    }
    $scope.checkAllShops = function () { //
        console.log($scope.posts.allShop)

        if ($scope.posts.allShop) { //
            var shops = [];
            for (var i = 0; i < $scope.set.list.length; i++) {
                shops.push($scope.set.list[i].id)
            }
            $scope.set.shops = shops
        } else { //
            $scope.set.shops = [];
            $scope.posts.shops = []
        }
    }
    $scope.checkShops = function (key) {
        if (key == false) {
            delete key
            $scope.posts.allShop = false;
        }
        var arr = $scope.set.shops.filter(function (s) {
            return s && s.trim();
        });
        if (arr.length == $scope.set.list.length) {
            $scope.posts.allShop = true
        } else {
            $scope.posts.allShop = false;
        }
    }
}]);

// 转介绍管理---eng






app.controller("sourceCtr", ["$scope", "$http", '$routeParams', "$filter", "$location", 'CouponFactory', function ($scope, $http, $routeParams, $filter, $location, couponFac) {
    $scope.config.breadset = [{ //
        name: "素材管理",
        href: indexUrl + "/admin.html#/rule/source",
        class: "source"
    }, {
        name: "素材管理"
    }]; //面包屑;
    $scope.posts = {};

}]);

app.controller("addsourceCtr", ["$scope", "$http", '$routeParams', "$filter", "$location", 'CouponFactory', function ($scope, $http, $routeParams, $filter, $location, couponFac) {
    $scope.config.breadset = [{ //
        name: "素材管理",
        href: indexUrl + "/admin.html#/rule/addsource",
        class: "addsource"
    }, {
        name: "素材管理"
    }]; //面包屑;
    $scope.posts = {};
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


// 图文管理
app.controller('RuleuEditorCtr', ['$rootScope', '$scope', function ($rootScope, $scope) { //shoplist over
    $scope.config.breadset = [{
        class: "ueditor"
    }];
    $scope.view = {
        materials: []
    }
    var editor = new wangEditor('#div1');
    editor.create();
    // editor.config.uploadImgUrl = '/pic';

    // 配置自定义参数（举例）
    // editor.config.uploadParams = {};
    // editor.config.uploadImgFileName = "file";
    // // 设置 headers（举例）
    // editor.config.uploadHeaders = {};
    // 自定义load事件
    // editor.config.uploadImgFns.onload = function (resultText, xhr) {
    //     // 上传图片时，已经将图片的名字存在 editor.uploadImgOriginalName
    //     var originalName = editor.uploadImgOriginalName || '';
    //     var answer = confirm("设置为背景图片?");
    //     if (answer) {
    //         editor.$txt.css("background-image", "url(" + JSON.parse(resultText).result.url + ")");
    //         editor.$txt.css("background-repeat", "no-repeat");
    //         editor.$txt.css("background-size", "cover");
    //     } else {
    //         // 如果 resultText 是图片的url地址，可以这样插入图片：
    //         editor.command(null, 'insertHtml', '<img src="' + JSON.parse(resultText).result.url + '" alt="' + originalName + '" style="max-width:100%;"/>');
    //     }
    // };
    // editor.config.menus = $.map(wangEditor.config.menus, function (item, key) {
    //     if (item === 'video') {
    //         return null;
    //     }
    //     if (item === 'location') {
    //         return null;
    //     }
    //     return item;
    // });


    function init() {
        var data1 = ajaxSendFn({}, "/medials", "GET");
        if (data1.code == 200) {
            $scope.view = data1.result;
        }
        var data2 = ajaxSendFn({}, "/materials/group", "GET") || [];
        $scope.groups = [];
        if (data2.code == 200) {
            $scope.groups = data2.result;
        }
        $scope.view.materials = ajaxSendFn({}, "/materials", "GET").result || [];
    }
    $scope.copyLink = function (index, url) {
        var Url2 = document.getElementById("biao" + index);
        Url2.select(); // 选择对象  
        document.execCommand("Copy"); // 执行浏览器复制命令  
        alert("已复制好，可贴粘。");
    }
    $scope.tabChange = function (index) {
        url = "/materials";
        if (index >= 0) {
            url = "/materials/group/" + $scope.groups[index].id + "/materials";
        }
        if (index == -1) {
            url = "/materials/group/materials";
        }
        $scope.view.materials = ajaxSendFn({}, url, "GET").result;
        // $scope.view.leftIndex = index;
        $scope.activeGrope = $scope.groups[index].id

    }
    // 切换图片分组

    //阻止a标签跳转
    $scope.preventDefault = function (e) {
        if (e && e.preventDefault) {
            e.preventDefault();
        } else {
            window.event.returnValue = false;
        }

    }

    $scope.post = {};
    init();
    $scope.pageChange = function () {
        url = "/materials";
        if ($scope.view.leftIndex >= 0) {
            url = "/materials/group/" + $scope.view.groups[$scope.view.leftIndex].id + "/materials"
        }
        if ($scope.view.leftIndex == -1) {
            url = "/materials/group/materials";
        }
        var json = {
            page: $scope.view.materials.page,
            count: $scope.view.materials.count
        };
        $scope.view.materials = ajaxSendFn(json, url, "GET").result;
    };
    $scope.temimgshow = function (t) {
        if (t.files[0].size > 5 * 1024 * 1024) {
            alert("图片不得大于5M，图片格式为png,jpg,jpeg,bmp");
            return;
        }
        var url = "/materials";
        if ($scope.view.leftIndex >= 0) {
            url = "/materials/group/" + $scope.view.groups[$scope.view.leftIndex].id + "/material"
        }
        POSTurl = basicUrl + url + "?";
        options = {
            url: POSTurl + sortUrl(),
            type: "POST",
            success: function (data) {
                if (data.code === 200) {

                    $scope.$apply(function () {
                        url = "/materials";
                        if ($scope.view.leftIndex >= 0) {
                            url = "/materials/group/" + $scope.view.groups[$scope.view.leftIndex].id + "/materials"
                        }
                        if ($scope.view.leftIndex == -1) {
                            url = "/materials/group/materials";
                        }
                        $scope.view.materials = ajaxSendFn({
                            count: 10
                        }, url, "GET").result;
                    });
                } else {
                    alert(data.message);
                }

            }
        };
        $("#iimgform").ajaxSubmit(options);
    };

    $scope.add = function (index) {
        $scope.editFlag = false;
        $('#modal').modal('show');
        $scope.index = index ? index : "";
    };
    $scope.send = function () {
        var json = {};
        json.title = $scope.post.title;
        json.content = "<div style='" + $("#div1").attr("style").substr(33) + "'>" + editor.txt.html() + "</div>";

        if ($scope.editFlag) {
            $scope.editFlag = false;
            var data = ajaxSendFn(json, "/medials/" + $scope.view.items[$scope.index].id, "POST");
        } else {
            var data = ajaxSendFn(json, "/medials", "POST");
        }
        if (data.code == 200) {
            $scope.post.title = "";
            $("#modal").modal("hide");
            alert("保存成功");
            init();
        } else {
            alert(data.message);
        }
    }
    $scope.editFlag = false;
    $scope.edit = function (index) {
        $scope.editFlag = true;
        $scope.index = index;
        $scope.post.title = $scope.view.items[index].title;
        editor.txt.html($scope.view.items[index].content);
        $('#modal').modal('show');
    }
    $scope.remove = function (index) {
        if (!confirm("一旦删除将不可恢复，是否确认删除？")) return false;
        var data = ajaxSendFn({}, "/medials/" + $scope.view.items[index].id, "DELETE");
        if (data.code == 200) { //
            $scope.view.items.splice(index, 1);
        } else { //
            alert(data.message);
        }
    };
}]);

/*------------------------------------------------------------------*/
app.controller('CustomerCtr', function ($scope, tyFnFactory, $http, $location, $filter, $routeParams) { //
    $scope.config.breadset = [{ //
        name: "顾客管理",
        href: indexUrl + "/admin.html#/customer",
        class: 'search'
    }, {
        name: "顾客列表"
    }]; //面包屑
    // $scope.shopId='';
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
        var data = ajaxSendFn({
            param: $routeParams.userId
        }, "/customer/search", "GET").result;
        $scope.view.customer = {
            items: data,
            page: 1,
            total: data.length
        };
    } else {
        $scope.view.customer = ajaxSendFn({
            count: 50
        }, "/customer", "GET").result || [];
    }
    $scope.shopList = ajaxSendFn({
        page: 1,
        count: 999
    }, "/shops/shops", "GET").result || [];
    $scope.view.memberGrades = ajaxSendFn({}, constUrlDict["memberGrade"], "GET").result || [];
    $scope.view.member = [];
    $scope.search = {
        count: 50
    };
    $scope.post = {
        genders: [],
        memberGradeIds: []
    };
    $scope.tag = {
        name: '',
        user: []
    };
    $scope.postSend = function () {
        console.log(1111);
        $scope.view.check = "";
        if ($scope.search.param) {
            $scope.view.customer.items = ajaxSendFn($scope.search, "/customer/search", "GET").result || [];
            $scope.view.customer.total = $scope.view.customer.items.length;

        } else {
            $scope.view.customer = ajaxSendFn({
                count: 50
            }, "/customer", "GET").result || {
                count: $scope.view.customer.count,
                page: 0,
                total: 0
            };
        }
    };
    $scope.refer = function (url) {
        window.open("admin.html#/" + url, '_blank');
    };

    $scope.searchFn = function (page) {
        $scope.view.check = false;
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
                if (i == 'joinStartDate') {
                    json[i] = $filter("date")(json[i], "yyyy-MM-dd 00:00:00");

                }
                if (i == 'joinEndDate') {
                    json[i] = $filter("date")(json[i], "yyyy-MM-dd 23:59:59");
                }
                if (i == 'birthdayStart') {
                    json[i] = $filter("date")(json[i], "yyyy-MM-dd 00:00:00");
                }
                if (i == 'birthdayEnd') {
                    json[i] = $filter("date")(json[i], "yyyy-MM-dd 23:59:59");
                }
            }
            if (!json[i] && typeof json[i] != "number") {
                delete json[i];
            }
        }
        if (page) json.page = page;
        json.count = $scope.view.customer.count || 50;
        // json.shopId=$scope.shopId;
        $scope.view.customer = ajaxSendFn(json, "/customer", "GET").result || [];
    };
    $scope.$watch('view.check', function (newVal, oldVal) {
        if (newVal !== oldVal) {
            if (newVal) {
                angular.forEach($scope.view.customer.items, function (value, key) {
                    this[key] = value.id;
                }, $scope.tag.user)
            } else {
                $scope.tag.user = [];
            }
        }
    });
    $scope.tagName = function () {
        $scope.view.tagName = ajaxSendFn({}, "/tags/name", "GET").result || [];
        $('#tagName').modal('show');
    };
    $scope.tagFn = function () {
        if (!$scope.tag.user.length) {
            alert("请先选择顾客");
            return
        }
        var url = "/tags";
        if ($scope.tag.name) {

        } else if ($scope.view.checkName) {
            url += "/" + $scope.view.checkName;
        } else {
            alert("请先选择标签");
            return;
        }
        var json = angular.copy($scope.tag);
        for (var i in json.user) {
            if (!json.user[i]) {
                json.user.splice(i, 1);
            }
        }
        var data = ajaxSendFn(json, url, "POST");
        if (data.code == 200) {
            $("#tagName").modal("hide");
            alert("操作成功");
        } else {
            alert(data.message);
        }
    };
    $scope.pageChange = function () {
        $scope.view.check = false;
        $scope.searchFn($scope.view.customer.page);
    };
});
app.controller('CustomerImportCtr', function ($scope, tyFnFactory, $http, $location, $filter, $routeParams) { //
    $scope.config.breadset = [{ //
        name: "顾客管理",
        href: indexUrl + "/admin.html#/customer",
        class: 'import'
    }, {
        name: "新会员列表"
    }]; //面包屑
    $scope.view = {
        index: [],
        state: {
            '301': '未同步',
            '302': '已同步'
        }
    };
    $scope.show = {
        state: {
            '未同步': '301',
            '已同步': '302',
            '所有': ''
        }
    };
    $scope.posts = {
        state: '',
        smsText: ''
    };
    $scope.tem = "选择EXCEL文件";

    $scope.view.customer = ajaxSendFn({
        count: 100
    }, "/customer/import", "GET").result || [];
    $scope.view.memberGrades = ajaxSendFn({}, constUrlDict["memberGrade"], "GET").result || [];
    $scope.view.member = [];
    $scope.search = {
        count: 100
    };
    $scope.pageChange = function () {
        var json = {
            page: $scope.view.customer.page,
            count: $scope.view.customer.count
        };
        $scope.view.customer = ajaxSendFn(json, "/customer/import", "GET").result || [];

    };
    // 显示短信框
    $scope.openOrClose = function () {
            $("#add").modal("show");
            $scope.isOpenOrClose = true;
        },
        // 发送短信
        $scope.sendMessage = function () {
            // var json;
            // if($scope.show.state[$scope.posts.state]) {
            //     json = {state : $scope.show.state[$scope.posts.state] , content : $scope.posts.smsText };
            // }else {
            //     json = {content : $scope.posts.smsText };
            // }
            if (!$scope.posts.state) {
                alert('请选择状态');
                return;
            }
            var json = {
                state: $scope.show.state[$scope.posts.state],
                content: $scope.posts.smsText
            };
            console.log(json);
            var data = ajaxSendFn(json, "/customer/import/remind", "POST");
            if (data.code == 200) {
                alert('设置成功')
            } else(
                alert('data.message')
            )

        },
        // 短信内容不能超过200个字
        $scope.checkOut = function () {
            if ($scope.posts.smsText.length > 200) {
                alert('短信内容不能超过200个字');
                $scope.posts.smsText = $scope.posts.smsText.substring(0, $scope.posts.smsText.length - 1);
                return;
            }
        },
        $scope.temimgshow = function (t) {
            var objUrl = getObjectURL(t.files[0]);
            if (objUrl) {
                $scope.$apply(function () {
                    $scope.tem = "已选择"
                });
            }
        };

    $scope.importFn = function () {
        POSTurl = basicUrl + "/customer/import?";
        options = {
            url: POSTurl + sortUrl(),
            type: "POST",
            success: function (data) {
                if (data.code === 200) {
                    alert("文件上传成功");
                } else {
                    alert(data.message);
                }
            }
        };
        $("#fileForm").ajaxSubmit(options);
    }
    // 查询手机号
    $scope.postSend = function () {

        if ($scope.search.phone) {
            var json = [];
            var data = ajaxSendFn($scope.search, "/customer/import/search", "GET");
            if (data.code == 200) {
                json[0] = data.result
            }
            $scope.view.customer.items = json;
            $scope.view.customer.total = $scope.view.customer.items.length;
            console.log($scope.view.customer.items);
        } else {
            $scope.view.customer = ajaxSendFn({
                count: 100
            }, "/customer/import", "GET").result || {
                count: $scope.view.customer.count,
                page: 0,
                total: 0
            };
        }
    };
    $scope.filter = function () {
        var json = {
            state: $scope.show.state[$scope.posts.status]
        };
        console.log(json.state);
        if (json.state) {
            $scope.view.customer = ajaxSendFn(json, "/customer/import", "GET").result || [];
        } else {
            $scope.view.customer = ajaxSendFn({}, "/customer/import", "GET").result || [];
        }
    }

});
app.controller('CustomerTagCtr', function ($scope, tyFnFactory, $http, $location, $filter) { //
    $scope.config.breadset = [{ //
        name: "顾客管理",
        href: indexUrl + "/admin.html#/customer",
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
        window.open("admin.html#/customer/search/" + $scope.search.param, '_blank');
    };
    $scope.deleteFn = function () {
        var a = confirm("确认删除此标签？");
        if (a) {
            var data = ajaxSendFn({}, "/tags/" + $scope.view.id, "DELETE");
            if (data.code == 200) {
                alert("操作成功");
                $scope.view.tag = ajaxSendFn({}, "/tags", "GET").result || [];
                $scope.view.detail = "";
            } else {
                alert(data.message);
            }
        }
    };
    $scope.deleteUser = function () {
        var json = {
            "user": $scope.tag.user
        };
        var data = ajaxSendFn(json, "/tags/" + $scope.view.id + "/customer", "POST");
        if (data.code == 200) {
            $scope.view.detail = ajaxSendFn({}, "/tags/" + $scope.view.id, "GET").result || "";
            $scope.view.tag = ajaxSendFn({}, "/tags", "GET").result || [];
            alert("操作成功");
        } else {
            alert(data.message);
        }
    };
    $scope.tagName = function () {
        $scope.view.tagName = ajaxSendFn({}, "/tags/name", "GET").result || [];
        $('#tagName').modal('show');
    };
    $scope.tagFn = function () {
        if (!$scope.tag.user.length) {
            alert("请先选择顾客");
            return
        }
        var url = "/tags";
        if ($scope.tag.name) {

        } else if ($scope.view.checkName) {
            url += "/" + $scope.view.checkName;
        }
        var json = angular.copy($scope.tag);
        for (var i in json.user) {
            if (!json.user[i]) {
                json.user.splice(i, 1);
            }
        }
        var data = ajaxSendFn(json, url, "POST");
        if (data.code == 200) {
            $("#tagName").modal("hide");
            alert("操作成功");
            $scope.view.tag = ajaxSendFn({}, "/tags", "GET").result || []
        } else {
            alert(data.message);
        }
    };
    $scope.detailFn = function (index) {
        $scope.view.index = index;
        $scope.view.id = $scope.view.tag.items[index].id;
        $scope.view.detail = ajaxSendFn({}, "/tags/" + $scope.view.tag.items[index].id, "GET").result || []
    };
    $scope.pageChange = function () {
        var json = {
            page: $scope.view.tag.page,
            count: $scope.view.tag.count
        };
        $scope.view.tag = ajaxSendFn(json, "/tags", "GET").result || [];
    };
    $scope.pageUserChange = function () {
        var json = {
            page: $scope.view.detail.page,
            count: $scope.view.detail.count
        };
        $scope.view.detail = ajaxSendFn(json, "/tags/" + $scope.view.tag.items[$scope.view.index].id, "GET").result || [];
        $scope.tag.user = [];
    };
});
app.controller('CustomerMassCtr', function ($scope, tyFnFactory, $http, $location, $filter) { //
    $scope.config.breadset = [{ //
        name: "顾客管理",
        href: indexUrl + "/admin.html#/customer",
        class: 'mass'
    }, {
        name: "顾客列表"
    }]; //面包屑
    $scope.view = {
        mass: ajaxSendFn({
            count: 10
        }, "/mass/tag", "GET").result || [],
        type: {
            "POINT": "积分",
            "CHARGE": "充值",
            "COUPON": "优惠券"
        },
        coupons: ajaxSendFn({}, constUrlDict["coupon"], "GET").result || []
    };
    $scope.setCouponFn = function () {
        $scope.post.coupon = angular.copy($scope.view.coupons);
        for (var i = 0; i < $scope.post.coupon.length; i++) {
            $scope.post.coupon[i].value = $scope.post.coupon[i].id;
            delete $scope.post.coupon[i].id;
            $scope.post.coupon[i].category = "COUPON";
            $scope.post.coupon[i].checked = false;
        }
    }
    // $scope.showModal = function () {
    //     $scope.view.tagName = ajaxSendFn({}, "/tags/name", "GET").result || [];
    //     $scope.setCouponFn();
    //     $scope.view.id = "";
    //     $("#new").modal("show");
    // };
    $scope.search = {};
    $scope.post = {};
    $scope.setCouponFn();

    // $scope.post.coupon = $scope.view.coupons;
    $scope.single = {};
    $scope.tag = {
        name: '',
        user: []
    };
    $scope.addRuleFn = function () {
        $scope.post.picUrls.push({});
    }
    $scope.removeRuleFn = function (index) {
        $scope.post.picUrls.splice(index, 1);

    }
    $scope.postSend = function () {
        window.open("admin.html#/customer/search/" + $scope.search.param, '_blank');
    };
    $scope.detailFn = function (id, index) {
        $scope.view.id = id;
        var data = ajaxSendFn({}, "/mass/" + id, "GET").result || [];
        if (data.completion || data.timeCategory == 'IMMEDIATELY') {
            $scope.usable = true;
        } else {
            $scope.usable = false;

        }
        $scope.view.detail = data;

        $scope.view.checked = $scope.view.mass.items[index];
        //修改
        $scope.single.timeCategory = $scope.view.detail.timeCategory;
        if ($scope.view.detail.timeCategory == "TIMING") {
            $scope.single.date = new Date($scope.view.detail.executionTime);
            $scope.single.time = new Date($scope.view.detail.executionTime);
        }
        $scope.post.coupon = angular.copy($scope.view.coupons);
        for (var j = 0; j < $scope.view.detail.contents.length; j++) {
            var content = $scope.view.detail.contents[j];
            if (content.category == "COUPON") {
                for (var s = 0; s < $scope.view.coupons.length; s++) {
                    if (content.value == $scope.view.coupons[s].id) {
                        $scope.post.coupon[s].value = $scope.post.coupon[s].id;
                        delete $scope.post.coupon[s].id;
                        $scope.post.coupon[s].count = 1;
                        $scope.post.coupon[s].checked = true;
                        $scope.post.coupon[s].category = "COUPON";
                    }
                }
            } else {
                content.category = content.category.toLowerCase();
                $scope.post[content.category] = content;
            }
        }
        $scope.post.path = $scope.view.detail.path;
        $scope.post.title = $scope.view.detail.title;
        $scope.post.content = $scope.view.detail.content;
        $scope.post.picUrls = $scope.view.detail.picUrls || [];
        if ($scope.post.picUrls.length) {
            $scope.view.check = 'false';
        } else {
            $scope.post.picUrls = [{}];
        }
        if ($scope.post.externalLinks) {
            $scope.view.check = 'true';
        }
    };
    /*  $scope.change = function () {
     if ($scope.message && $scope.wx) {
     $scope.post.path = "102";
     } else if ($scope.message) {
     $scope.post.path = "104";
     } else if ($scope.wx) {
     $scope.post.path = "103";
     } else {
     $scope.post.path = "";
     }
     };
     $scope.$watch("post.path", function () {
     if ($scope.post.path == "101") {
     $scope.hand_click = "";
     $scope.wx = false;
     $scope.message = false;
     } else if ($scope.post.path == "102") {
     $scope.hand_click = true;
     $scope.wx = true;
     $scope.message = true;
     } else if ($scope.post.path == "103") {
     $scope.hand_click = true;
     $scope.wx = true;
     $scope.message = false;
     } else if ($scope.post.path == "104")  {
     $scope.hand_click = true;
     $scope.message = true;
     $scope.wx = false;
     }
     });*/
    $scope.add = function (type) {
        if ($scope.post[type]) {
            delete $scope.post[type];
        } else {
            $scope.post[type] = {};
            if (type == "coupon") {
                $scope.setCouponFn();
            }
        }
    };
    // 提交
    $scope.sendJson = function () {
        var json1 = {
            timeCategory: $scope.single.timeCategory,
            contents: [],
            path: $scope.post.path
        };
        if ($scope.single.timeCategory === "TIMING") {
            if ($scope.single.time && $scope.single.date) {
                $scope.single.date.setHours($scope.single.time.getHours());
                $scope.single.date.setMinutes($scope.single.time.getMinutes());
                json1.executionTime = $filter('date')($scope.single.date, "yyyy-MM-dd HH:mm:ss");
            } else {
                alert("请先设置发送时间");
                return;
            }
        }
        var json = angular.copy($scope.post);
        json1.contents = [];
        json1.smsText = json.smsText;
        json1.templateText = json.templateText;

        for (var j in json) {
            if (j == "coupon") {
                for (var i = 0; i < json.coupon.length; i++) {
                    if (!isEmptyObject(json.coupon[i]) && json.coupon[i].count) {
                        delete json.coupon[i].checked;
                        delete json.coupon[i].code;
                        delete json.coupon[i].alias;
                        json1.contents.push(json.coupon[i]);
                    }
                }
            }
            if (j == "path") {
                if (json[j].value) {
                    json[j].category = j.toUpperCase();
                    json1.contents.push(json[j]);
                }
            }
        }
        if (!json1.contents.length) {
            alert("请先设置活动");
            return;
        }
        if (!$scope.view.id) {
            alert("请先选择标签");
            return;
        }
        if ($scope.view.check == 'true' && json.externalLinks) {
            json1.externalLinks = json.externalLinks;
        } else if ($scope.view.check == 'false') {
            json1.picUrls = json.picUrls;
            for (var i = 0; i < json1.picUrls.length; i++) {
                for (item in json1.picUrls[i]) {
                    if (!json1.picUrls[i][item]) {
                        delete json1.picUrls[i][item]
                    }
                }
            }
        }
        if (json.content) json1.content = json.content;
        if (json.title) json1.title = json.title;
        var data = ajaxSendFn(json1, "/mass/" + $scope.view.id, "PUT");
        if (data.code == 200) {
            alert("操作成功");
            $("#new").modal('hide');
            $scope.view.mass = ajaxSendFn({}, "/mass/tag", "GET").result || []
        } else {
            alert(data.message);
        }
    };
    /*  $scope.updateJson = function () {
     var json1 = {timeCategory: $scope.single.timeCategory, contents: [], path: $scope.post.path};
     if ($scope.single.timeCategory === "TIMING") {
     if ($scope.single.time && $scope.single.date) {
     $scope.single.date.setHours($scope.single.time.getHours());
     $scope.single.date.setMinutes($scope.single.time.getMinutes());
     json1.executionTime = $filter('date')($scope.single.date, "yyyy-MM-dd HH:mm:ss");
     } else {
     alert("请先设置发送时间");
     return;
     }
     }
     var json = angular.copy($scope.post);
     for (var j in json) {
     if (j == "coupon") {
     for (var i = 0; i < json.coupon.length; i++) {
     if (!isEmptyObject(json.coupon[i]) && json.coupon[i].count) {
     delete json.coupon[i].checked;
     delete json.coupon[i].code;
     delete json.coupon[i].alias;
     json1.contents.push(json.coupon[i]);
     }
     }
     }
     }
     json1.path = json.path;
     json1.smsText = json.smsText;
     json1.templateText = json.templateText;
     if (!json1.contents.length) {
     alert("请先设置活动");
     return;
     }
     if ($scope.view.check == 'true' && json.externalLinks) {
     json1.externalLinks = json.externalLinks;
     } else if ($scope.view.check == 'false') {
     json1.picUrls = json.picUrls;
     for (var i = 0; i < json1.picUrls.length; i++) {
     for (item in json1.picUrls[i]) {
     if (!json1.picUrls[i][item]) {
     delete json1.picUrls[i][item]
     }
     }
     }
     }
     if (json.content) json1.content = json.content;
     if (json.title) json1.title = json.title;
     var data = ajaxSendFn(json1, "/mass/" + $scope.view.detail.id, "PUT");
     if (data.code == 200) {
     alert("操作成功");
     $("#new").modal('hide');
     $scope.view.mass = ajaxSendFn({}, "/mass/tag", "GET").result || []
     } else {
     alert(data.message);
     }
     };*/

    $scope.pageChange = function () {
        var json = {
            page: $scope.view.mass.page,
            count: $scope.view.mass.count
        };
        $scope.view.mass = ajaxSendFn(json, "/mass/tag", "GET").result || [];
    };
});
app.controller('CustomerMassAddCtr', function ($scope, tyFnFactory, $http, $location, $filter) { //
    $scope.config.breadset = [{ //
        name: "顾客管理",
        href: indexUrl + "/admin.html#/customer",
        class: 'mass'
    }, {
        name: "顾客列表"
    }]; //面包屑
    $scope.view = {
        tagName: ajaxSendFn({}, "/tags/name", "GET").result || [],
        coupons: ajaxSendFn({}, constUrlDict["coupon"], "GET").result || [],
        id: ""
    };
    $scope.setCouponFn = function () {
        $scope.post.coupon = angular.copy($scope.view.coupons);
        for (var i = 0; i < $scope.post.coupon.length; i++) {
            $scope.post.coupon[i].value = $scope.post.coupon[i].id;
            delete $scope.post.coupon[i].id;
            $scope.post.coupon[i].category = "COUPON";
            $scope.post.coupon[i].checked = false;
        }
    }
    $scope.post = {
        picUrls: [{}]
    };
    $scope.setCouponFn();

    $scope.single = {};
    // $scope.change = function () {
    //     if ($scope.message && $scope.wx) {
    //         $scope.post.path = "102";
    //     } else if ($scope.message) {
    //         $scope.post.path = "104";
    //     } else if ($scope.wx) {
    //         $scope.post.path = "103";
    //     } else {
    //         $scope.post.path = "";
    //     }
    // };
    // $scope.$watch("post.path", function () {
    //     if ($scope.post.path == "101") {
    //         $scope.hand_click = "";
    //     } else if ($scope.post.path == "102") {
    //         $scope.hand_click = true;
    //         $scope.wx = true;
    //         $scope.message = true;
    //     } else if ($scope.post.path == "103") {
    //         $scope.hand_click = true;
    //         $scope.wx = true;
    //     } else if ($scope.post.path == "104") {
    //         $scope.hand_click = true;
    //         $scope.message = true;
    //     }
    // });
    $scope.add = function (type) {
        if ($scope.post[type]) {
            delete $scope.post[type];
        } else {
            $scope.post[type] = {};
            if (type == "coupon") {
                $scope.setCouponFn();
            }
        }
    };
    $scope.addRuleFn = function () {
        $scope.post.picUrls.push({});
    }
    $scope.removeRuleFn = function (index) {
        $scope.post.picUrls.splice(index, 1);

    }

    $scope.checkOut = function () {
        if ($scope.post.smsText.indexOf("【") != -1 || $scope.post.smsText.indexOf("】") != -1) {
            alert('短信内容不可包含"【" 和 "】"');
            $scope.post.smsText = $scope.post.smsText.substring(0, $scope.post.smsText.length - 1);
            return;
        }
    }

    $scope.sendJson = function () {
        var json1 = {
            timeCategory: $scope.single.timeCategory,
            contents: [],
            path: $scope.post.path
        };
        if ($scope.single.timeCategory === "TIMING") {
            if ($scope.single.time && $scope.single.date) {
                $scope.single.date.setHours($scope.single.time.getHours());
                $scope.single.date.setMinutes($scope.single.time.getMinutes());
                json1.executionTime = $filter('date')($scope.single.date, "yyyy-MM-dd HH:mm:ss");
            } else {
                alert("请先设置发送时间");
                return;
            }
        }
        var json = angular.copy($scope.post);
        json1.contents = [];
        json1.smsText = json.smsText;
        json1.templateText = json.templateText;

        for (var j in json) {
            if (j == "coupon") {
                for (var i = 0; i < json.coupon.length; i++) {
                    if (!isEmptyObject(json.coupon[i]) && json.coupon[i].count) {
                        delete json.coupon[i].checked;
                        delete json.coupon[i].code;
                        delete json.coupon[i].alias;
                        json1.contents.push(json.coupon[i]);
                    }
                }
            }
            if (j !== "path") {
                if (json[j].value) {
                    json[j].category = j.toUpperCase();
                    json1.contents.push(json[j]);
                }
            }
        }
        if (!json1.contents.length) {
            alert("请先设置活动");
            return;
        }
        if (!$scope.view.id) {
            alert("请先选择标签");
            return;
        }
        if ($scope.view.check == 'true' && json.externalLinks) {
            json1.externalLinks = json.externalLinks;
        } else if ($scope.view.check == 'false') {
            json1.picUrls = json.picUrls;
            for (var i = 0; i < json1.picUrls.length; i++) {
                for (item in json1.picUrls[i]) {
                    if (!json1.picUrls[i][item]) {
                        delete json1.picUrls[i][item]
                    }
                }
            }
        }
        if (json.content) json1.content = json.content;
        if (json.title) json1.title = json.title;
        var data = ajaxSendFn(json1, "/mass/" + $scope.view.id, "POST");
        if (data.code == 200) {
            alert("操作成功");
            $location.path("/customer/mass");

        } else {
            alert(data.message);
        }
    };
});
app.controller('CustomerTrusteeshipCtr', function ($scope, tyFnFactory, $http, $location, $filter) { //
    $scope.config.breadset = [{ //
        name: "顾客管理",
        href: indexUrl + "/admin.html#/customer",
        class: 'trusteeship'
    }, {
        name: "顾客列表"
    }]; //面包屑
    $scope.view = {
        memberGrades: ajaxSendFn({}, constUrlDict["memberGrade"], "GET").result || [],
        mass: ajaxSendFn({}, "/mass", "GET").result || [],
        type: {
            "POINT": "积分",
            "CHARGE": "充值",
            "COUPON": "优惠券"
        },
        coupons: ajaxSendFn({}, constUrlDict["coupon"], "GET").result || []
    };
    $scope.setCouponFn = function () {
        $scope.post.coupon = angular.copy($scope.view.coupons);
        for (var i = 0; i < $scope.post.coupon.length; i++) {
            $scope.post.coupon[i].value = $scope.post.coupon[i].id;
            delete $scope.post.coupon[i].id;
            $scope.post.coupon[i].category = "COUPON";
            $scope.post.coupon[i].checked = false;
        }
    }
    /* $scope.showModal = function () {
     $scope.single = {};
     $scope.view.id = "";
     $scope.post = {
     condition: {
     genders: [],
     memberGradeIds: []
     }
     };
     $scope.view.checked = false;
     $("#new").modal("show");
     };*/
    $scope.search = {};
    $scope.post = {};
    $scope.setCouponFn();
    $scope.single = {};
    $scope.postSend = function () {
        window.open("admin.html#/customer/search/" + $scope.search.param, '_blank');
    };
    $scope.detailFn = function (id, index) {
        $scope.view.id = id;
        var data = ajaxSendFn({}, "/mass/" + id, "GET").result || [];
        if (data.completion) {
            alert("群发已结束，无法修改");
            return;
        } else {
            $scope.view.detail = data;
        }
        $scope.view.checked = $scope.view.mass.items[index];
        $scope.view.coupons = ajaxSendFn({}, constUrlDict["coupon"], "GET").result || [];
        //修改
        $scope.post = angular.copy($scope.view.detail);
        delete $scope.post.contents;
        $scope.post.condition = angular.copy($scope.view.detail.conditions);
        $scope.post.path = $scope.view.detail.path;
        $scope.single.timeCategory = $scope.view.detail.timeCategory;
        //gender
        if ($scope.view.detail.conditions.genders) {
            var gender = ["M", "F", "N"];
            $scope.post.condition.genders = [];
            $.each(gender, function (e, v) {
                if (in_array(v, $scope.view.detail.conditions.genders)) {
                    $scope.post.condition.genders.push(v);
                } else {
                    $scope.post.condition.genders.push("");
                }
            })
        }
        //gradeid
        if ($scope.view.detail.conditions.memberGradeIds) {
            $scope.post.condition.memberGradeIds = [];
            $.each($scope.view.memberGrades, function (e, v) {
                if (in_array(v.id, $scope.view.detail.conditions.memberGradeIds)) {
                    $scope.post.condition.memberGradeIds.push(v.id);
                } else {
                    $scope.post.condition.memberGradeIds.push("");
                }
            })
        }
        //geadeid
        //detail
        $scope.post.coupon = angular.copy($scope.view.coupons);
        for (var j = 0; j < $scope.view.detail.contents.length; j++) {
            var content = $scope.view.detail.contents[j];
            if (content.category == "COUPON") {
                for (var s = 0; s < $scope.view.coupons.length; s++) {
                    if (content.value == $scope.view.coupons[s].id) {
                        $scope.post.coupon[s].count = 1;
                        $scope.post.coupon[s].checked = true;
                    }
                }
                //$scope.post.coupon.push(content);
            } else {
                content.category = content.category.toLowerCase();
                $scope.post[content.category] = content;
            }
        }
        //广告
        $scope.post.picUrls = $scope.view.detail.picUrls || [];
        if ($scope.post.picUrls.length) {
            $scope.view.check = 'false';
        } else {
            $scope.post.picUrls = [{}];
        }
        if ($scope.post.externalLinks) {
            $scope.view.check = 'true';
        }
    };
    /*  $scope.change = function () {
     if ($scope.single.message && $scope.single.wx) {
     $scope.post.path = "102";
     } else if ($scope.single.message) {
     $scope.post.path = "104";
     } else if ($scope.single.wx) {
     $scope.post.path = "103";
     } else {
     $scope.post.path = "";
     }
     };
     $scope.$watch("post.path", function () {
     if ($scope.post.path == "101") {
     $scope.hand_click = "";
     }
     });*/
    $scope.add = function (type) {
        if ($scope.post[type]) {
            delete $scope.post[type];
        } else {
            $scope.post[type] = {};
            if (type == "coupon") {
                $scope.setCouponFn();
            }
        }
    };
    $scope.sendJson = function () {
        var condition = angular.copy($scope.post.condition);
        if (condition.type != '9001') {
            delete condition.memberGradeIds;
        }
        for (var i in condition) {
            if (i == 'memberGradeIds') {
                condition.memberGradeIds = arrRemoveNullFN(condition.memberGradeIds);
                if (!condition.memberGradeIds.length) {
                    delete condition.memberGradeIds;
                }
            }
            if (i == "genders") {
                condition.genders = arrRemoveNullFN(condition.genders);
                if (!condition.genders.length) {
                    delete condition.genders;
                }
            }
            if (condition[i] instanceof Date) {
                condition[i] = $filter("date")(condition[i], "yyyy-MM-dd");
            }
            if (!condition[i] && typeof condition[i] != "number") {
                delete condition[i];
            }
        }

        var json1 = {
            conditions: condition,
            timeCategory: $scope.single.timeCategory,
            contents: [],
            path: $scope.post.path,
            day: $scope.post.day
        };
        var json = angular.copy($scope.post);
        delete json.condition;
        for (var j in json) {
            if (j == "coupon") {
                for (var i = 0; i < json.coupon.length; i++) {
                    if (!isEmptyObject(json.coupon[i]) && json.coupon[i].count) {
                        delete json.coupon[i].checked;
                        delete json.coupon[i].code;
                        delete json.coupon[i].alias;
                        json1.contents.push(json.coupon[i]);
                    }
                }
            } else if (j !== "path") {
                if (json[j].value) {
                    json[j].category = j.toUpperCase();
                    json1.contents.push(json[j]);
                }
            }
        }
        if (!json1.contents.length) {
            alert("请先设置活动");
            return;
        }
        var url = "/mass";
        //if ($scope.view.id) {
        //    url += "/" + $scope.view.id;
        //}
        var data = ajaxSendFn(json1, url, "POST");
        if (data.code == 200) {
            alert("操作成功");
            $("#new").modal('hide');
            $scope.view.mass = ajaxSendFn({}, "/mass", "GET").result || []
        } else {
            alert(data.message);
        }
    };
    $scope.pageChange = function () {
        var json = {
            page: $scope.view.mass.page,
            count: $scope.view.mass.count
        };
        $scope.view.mass = ajaxSendFn(json, "/mass", "GET").result || [];
    };
});
app.controller('CustomerTrusteeshipAddCtr', function ($scope, tyFnFactory, $http, $location, $filter) { //
    $scope.config.breadset = [{ //
        name: "顾客管理",
        href: indexUrl + "/admin.html#/customer",
        class: 'trusteeship'
    }, {
        name: "顾客列表"
    }]; //面包屑
    $scope.view = {
        memberGrades: ajaxSendFn({}, constUrlDict["memberGrade"], "GET").result || [],
        type: {
            "POINT": "积分",
            "CHARGE": "充值",
            "COUPON": "优惠券"
        },
        coupons: ajaxSendFn({}, constUrlDict["coupon"], "GET").result || []
    };
    $scope.setCouponFn = function () {
        $scope.post.coupon = angular.copy($scope.view.coupons);
        for (var i = 0; i < $scope.post.coupon.length; i++) {
            $scope.post.coupon[i].value = $scope.post.coupon[i].id;
            delete $scope.post.coupon[i].id;
            $scope.post.coupon[i].category = "COUPON";
            $scope.post.coupon[i].checked = false;
        }
    }
    $scope.search = {};
    $scope.post = {};
    $scope.post.condition = {}
    $scope.post.condition.memberGradeIds = []
    $scope.setCouponFn();
    $scope.single = {};
    $scope.add = function (type) {
        if ($scope.post[type]) {
            delete $scope.post[type];
        } else {
            $scope.post[type] = {};
            if (type == "coupon") {
                $scope.setCouponFn();
            }
        }
    };
    $scope.sendJson = function () {
        var condition = angular.copy($scope.post.condition);
        if (condition.type != '9001') {
            delete condition.memberGradeIds;
        }
        for (var i in condition) {
            if (i == 'memberGradeIds') {
                condition.memberGradeIds = arrRemoveNullFN(condition.memberGradeIds);
                if (!condition.memberGradeIds.length) {
                    delete condition.memberGradeIds;
                }
            }
            if (i == "genders") {
                condition.genders = arrRemoveNullFN(condition.genders);
                if (!condition.genders.length) {
                    delete condition.genders;
                }
            }
            if (condition[i] instanceof Date) {
                condition[i] = $filter("date")(condition[i], "yyyy-MM-dd");
            }
            if (!condition[i] && typeof condition[i] != "number") {
                delete condition[i];
            }
        }

        var json1 = {
            conditions: condition,
            timeCategory: $scope.single.timeCategory,
            contents: [],
            path: $scope.post.path,
            day: $scope.post.day
        };
        var json = angular.copy($scope.post);
        delete json.condition;
        for (var j in json) {
            if (j == "coupon") {
                for (var i = 0; i < json.coupon.length; i++) {
                    if (!isEmptyObject(json.coupon[i]) && json.coupon[i].count) {
                        delete json.coupon[i].checked;
                        delete json.coupon[i].code;
                        delete json.coupon[i].alias;
                        json1.contents.push(json.coupon[i]);
                    }
                }
            } else if (j !== "path") {
                if (json[j].value) {
                    json[j].category = j.toUpperCase();
                    json1.contents.push(json[j]);
                }
            }
        }
        if (!json1.contents.length) {
            alert("请先设置活动");
            return;
        }
        if ($scope.view.check == 'true' && json.externalLinks) {
            json1.externalLinks = json.externalLinks;
        } else if ($scope.view.check == 'false') {
            json1.picUrls = json.picUrls;
            for (var i = 0; i < json1.picUrls.length; i++) {
                for (item in json1.picUrls[i]) {
                    if (!json1.picUrls[i][item]) {
                        delete json1.picUrls[i][item]
                    }
                }
            }
        }
        if (json.content) json1.content = json.content;
        if (json.title) json1.title = json.title;
        var url = "/mass";
        //if ($scope.view.id) {
        //    url += "/" + $scope.view.id;
        //}
        var data = ajaxSendFn(json1, url, "POST");
        if (data.code == 200) {
            alert("操作成功");
            $location.path("/customer/trusteeship");
        } else {
            alert(data.message);
        }
    };
    $scope.pageChange = function () {
        var json = {
            page: $scope.view.mass.page,
            count: $scope.view.mass.count
        };
        $scope.view.mass = ajaxSendFn(json, "/mass", "GET").result || [];
    };
});
app.controller('CustomerRecordCtr', function ($scope, tyFnFactory, $http, $location, $filter) { //
    $scope.config.breadset = [{ //
        name: "顾客管理",
        href: indexUrl + "/admin.html#/customer",
        class: 'record'
    }, {
        name: "顾客列表"
    }]; //面包屑
    $scope.view = {
        mass: ajaxSendFn({}, "/mass/record", "GET").result || [],
        type: {
            "POINT": "积分",
            "CHARGE": "充值",
            "COUPON": "优惠券"
        }
    };
    $scope.search = {};
    $scope.postSend = function () {
        if ($scope.search.param) {
            $scope.view.customer.total = 0;
            $scope.view.customer.items = ajaxSendFn($scope.search, "/customer/search", "GET").result || [];
        } else {
            $scope.view.customer = ajaxSendFn({}, "/customer", "GET").result || [];
        }
    };
    $scope.pageChange = function () {
        var json = {
            page: $scope.view.mass.page,
            count: $scope.view.mass.count
        };
        $scope.view.mass = ajaxSendFn(json, "/mass/record", "GET").result || [];
    };
})

app.controller('CustomerChargeCtr', function ($scope, $routeParams, $filter, $http) { //
    $scope.config.breadset = [{ //
        name: "顾客管理",
        href: indexUrl + "/admin.html#/customer"
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
        json.reason = $scope.posts.reason
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
app.controller('CustomerUpdateCtr', function ($scope, $routeParams, $filter, $http) { //
    $scope.config.breadset = [{ //
        name: "顾客管理",
        href: indexUrl + "/admin.html#/customer"
    }, {
        name: "会员修改"
    }]; //面包屑
    $scope.view = {
        user: {
            phone: '',
            currentPoints: '',
            currentCharge: ''
        }
    }
    $scope.posts = {
        grade: '',
        // oldGrade : ''
    }

    $scope.view = {};
    $scope.view.member = ajaxSendFn({}, "/memberGrade", "GET").result || []; //会员等级
    $scope.view.user = ajaxSendFn({}, "/customer/import/" + $routeParams.userId, "GET").result || []; //个人信息
    $scope.phone = $scope.view.user.phone;
    $scope.send = function () {
        var json = {};
        // 手机号
        if ($scope.view.user.phone !== $scope.phone) {
            if (!(/^1[3456789]\d{9}$/.test($scope.view.user.phone))) {
                console.log($scope.view.user.phone);
                alert("手机号码有误，请重填");
                return false;
            }
        }
        if ($scope.view.user.phone !== $scope.phone) {
            json.phone = $scope.view.user.phone
        }
        json.grade = $scope.posts.grade;
        json.points = $scope.view.user.points;
        json.chargePrincipal = $scope.view.user.chargePrincipal;
        json.chargeGiven = $scope.view.user.chargeGiven;
        console.log(json);

        re = ajaxSendFn(JSON.stringify(json), "/customer/import/" + $routeParams.userId, "PUT", 1);
        if (re.code == 200) {
            alert("修改成功");
            location.reload();
        } else {
            alert(re.message);
        }
    }
});
app.controller('CustomerUpgradeCtr', function ($scope, $routeParams, $filter, $http) { //
    $scope.config.breadset = [{ //
        name: "顾客管理",
        href: indexUrl + "/admin.html#/customer"
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
        json.userId = $routeParams.userId;
        json.reason = $scope.posts.reason;
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
app.controller('CustomerPointCtr', function ($scope, $routeParams) { //
    $scope.config.breadset = [{ //
        name: "顾客管理",
        href: indexUrl + "/admin.html#/customer"
    }, {
        name: "顾客发积分"
    }]; //面包屑
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
        json.userId = $routeParams.userId;
        json.amount = $scope.posts.amount;
        json.reason = $scope.posts.reason;
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
        };
    }
});
app.controller('CustomerCouponCtr', function ($scope, $routeParams) {
    $scope.config.breadset = [{ //
        name: "顾客管理",
        href: indexUrl + "/admin.html#/customer"
    }, {
        name: "顾客发券"
    }]; //面包屑
    $scope.view = {
        user: ajaxSendFn({}, constUrlDict["customer"] + "/" + $routeParams.userId, "GET").result || []
    };
    $scope.posts = {};
    $scope.view.coupons = ajaxSendFn({}, constUrlDict["coupon"], "GET").result || [];
    if ($scope.view.coupons.length > 0) {
        $scope.posts.coupons = [{
            id: $scope.view.coupons[0].id,
            count: 1
        }];
    }
    $scope.add = function () {
        if ($scope.view.coupons.length > 0) {
            $scope.posts.coupons.push({
                id: $scope.view.coupons[0].id,
                count: 1
            });
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
        json.userId = $routeParams.userId;
        json.reason = $scope.posts.reason
        if ($scope.posts.coupons && $scope.posts.coupons.length > 0) {
            json.coupons = $scope.posts.coupons;
            for (var i in json.coupons) {
                delete json.coupons[i].$$hashKey
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
app.controller('CustomerAddCtr', function ($interval, $scope, $location, $filter) { //
    $scope.config.breadset = [{ //
        name: "顾客管理",
        href: indexUrl + "/admin.html#/customer"
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
            re = ajaxSendFn({
                "phone": $scope.posts.phone
            }, "/customer/validate", "POST");
            if (re.code == 200) {
                console.log("验证码发送成功");
            } else {
                alert(re.message);

                $location.path("/customer");

            }
        }
    }
    $scope.send = function () {
        if (!$scope.posts.birthday) {
            delete $scope.posts.birthday
        } else {
            $scope.posts.birthday = $filter("date")($scope.posts.birthday, "yyyy-MM-dd");
        }

        re = ajaxSendFn($scope.posts, "/customer", "POST");
        if (re.code == 200) {
            alert("添加成功");
            $location.path("/customer");
        } else {
            errorMsg(re);
        }
    }
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
            credits: {
                enabled: false
            },
            chart: {
                type: "line"
            },
            tooltip: {},
            xAxis: {},
            yAxis: {}
        },
        series: []
    };
    $scope.consumeFn = function (index) {
        $scope.view.tab = 'consume';
        $scope.view.consume = ajaxSendFn({
            page: index || 1
        }, "/benefit/" + $routeParams.userId + $scope.view.type[$scope.view.tab], "GET").result || [];
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
        $scope.view.charts.series = [{
            name: "原价",
            color: "#FF9655",
            data: y,
            step: "left"
        }, {
            name: "实付",
            color: "red",
            data: y1,
            step: "left"
        }];
    };
    $scope.chargeFn = function (index) {
        $scope.view.tab = 'charge';
        $scope.view.charge = ajaxSendFn({
            page: index || 1
        }, "/benefit/" + $routeParams.userId + $scope.view.type[$scope.view.tab], "GET").result || [];
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
        $scope.view.charts.series = [{
            name: "获得",
            color: "#FF9655",
            data: y
        }, {
            name: "使用",
            color: "red",
            data: y1
        }];
    };
    $scope.rewardFn = function (index) {
        $scope.view.tab = 'reward';
        $scope.view.reward = ajaxSendFn({
            page: index || 1
        }, "/benefit/" + $routeParams.userId + $scope.view.type[$scope.view.tab], "GET").result || [];
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
        $scope.view.charts.series = [{
            name: "获得",
            color: "#FF9655",
            data: y
        }, {
            name: "使用",
            color: "red",
            data: y1
        }];
    };
    $scope.pointFn = function (index) {
        $scope.view.tab = 'point';
        $scope.view.point = ajaxSendFn({
            page: index || 1
        }, "/benefit/" + $routeParams.userId + $scope.view.type[$scope.view.tab], "GET").result || [];
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
        $scope.view.charts.series = [{
            name: "获得",
            color: "#FF9655",
            data: y,
            step: "left"
        }, {
            name: "使用",
            color: "red",
            data: y1,
            step: "left"
        }];
    };
    $scope.consumeFn();
    $scope.couponFn = function (index) {
        $scope.view.tab = 'coupon';
        $scope.view.coupon = ajaxSendFn({
            page: index || 1
        }, "/benefit/" + $routeParams.userId + $scope.view.type[$scope.view.tab], "GET").result || []
    };
    $scope.pageChange = function () {
        eval("$scope." + $scope.view.tab + "Fn(" + $scope.view[$scope.view.tab].page + ")");
        //var json = {page: $scope.view[$scope.view.tab].page, count: $scope.view[$scope.view.tab].count};
        //$scope.view[$scope.view.tab] = ajaxSendFn(json, "/benefit/" + $routeParams.userId +  $scope.view.type[$scope.view.tab], "GET").result || [];
    };
});
/*------------------------------------------------------------------*/

/*菜品管理*/
app.controller('DishCtr', function ($scope, $location, $http) { //shoplist over
    $scope.config.breadset = [{ //
        name: "菜品管理",
        href: indexUrl + "/admin.html#/mall/dish",
        class: 'dish'
    }, {
        name: "菜品列表"
    }]; //面包屑
    var data = ajaxSendFn({}, "/dishes", "GET");
    // if (data.code != 200) $location.path("/mall/dish/add");
    $scope.posts = {
        dishes: []
    };
    $scope.view = {
        groups: ajaxSendFn({}, "/dishes/kinds", "GET").result || [],
        leftIndex: -2
    }
    $scope.dishes = {
        list: data.result
    };
    $scope.groupList = function (index) {

        var json = {};
        if (index >= 0) {
            json.categoryId = $scope.view.groups[index].id;
        }
        $scope.dishes.list = ajaxSendFn(json, "/dishes", "GET").result;
        $scope.view.leftIndex = index;

    }
    $scope.remove = function (index) {
        if (!confirm("一旦删除将不可恢复，是否确认删除？")) return false;
        var data = ajaxSendFn({}, "/dishes/" + $scope.dishes.list.items[index].id, "DELETE");
        if (data.code == 200) { //
            $scope.dishes.list.items.splice(index, 1);
            alert("删除成功");
        } else { //
            alert(data.message);
        }
    };
    $scope.removeAll = function () {
        if (!$scope.posts.dishes.length) {
            alert("请先选择要删除的菜品！");
            return;
        }
        if (!confirm("一旦删除将不可恢复，是否确认删除？")) return false;
        var data = ajaxSendFn($scope.posts.dishes, "/dishes/ids", "DELETE");
        if (data.code == 200) {
            $scope.posts.dishes = [];
            $scope.dishes.list = ajaxSendFn({}, "/dishes", "GET").result;
        } else {
            alert(data.message);
        }
    };
    $scope.checkAllDishes = function () {
        if ($scope.dishesAll) $scope.posts.dishes = [];
        else {
            angular.forEach($scope.dishes.list.items, function (value, key) {
                this[key] = value.id;
            }, $scope.posts.dishes);
        }
    }

    $scope.pageChange = function () {
        var json = {
            page: $scope.dishes.list.page,
            count: $scope.dishes.list.count
        };
        if ($scope.view.leftIndex >= 0) {
            json.categoryId = $scope.view.groups[$scope.view.leftIndex].id;
        }
        $scope.dishes.list = ajaxSendFn(json, "/dishes", "GET").result || [];
    };
});
app.controller('DishAddCtr', function ($scope, $location, $http, $routeParams) { //shoplist over
    $scope.config.breadset = [{ //
        name: "菜品管理",
        href: indexUrl + "/admin.html#/mall/dish",
        class: 'dish'
    }, {
        name: "菜品列表"
    }]; //面包屑
    //$scope.tem = {
    //    uploadTitle: "选择图片"
    //};
    $scope.posts = {};
    $scope.view = {
        groups: ajaxSendFn({}, "/dishes/kinds", "GET").result || []
    }
    if ($routeParams.dishId) {
        var data = ajaxSendFn({}, "/dishes/" + $routeParams.dishId, "GET");
        if (data.code != 200) $location.path("/mall/dish");
        $scope.posts = data.result;
        delete $scope.posts.orgPicUrl;
    }
    $scope.send = function () { //
        sendJson = angular.copy($scope.posts);
        if (!sendJson.kindId) {
            delete sendJson.kindId;
        }
        if ($scope.posts.id) {
            postsend = ajaxSendFn(sendJson, "/dishes/" + $scope.posts.id, "PUT", 1);
        } else {
            postsend = ajaxSendFn(sendJson, "/dishes", "POST", 1);
        }
        if (postsend.code == 200) {
            alert("保存成功");
            $location.path("/mall/dish");
        } else {
            alert(postsend.message);
        }
    };
});
app.controller('BuyCtr', function ($scope, $location, $http, $filter) { //shoplist over
    $scope.config.breadset = [{ //
        name: "商城管理",
        href: indexUrl + "/admin.html#/mall/buy",
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
        var json = {
            page: $scope.view.mall.page,
            count: view.mall.count
        };
        $scope.view.mall = ajaxSendFn(json, "/mall", "GET").result || [];
    };
});
app.controller('BuyAddCtr', function ($scope, $location, $http, $filter, $routeParams) { //shoplist over
    $scope.config.breadset = [{ //
        name: "商城管理",
        href: indexUrl + "/admin.html#/mall/buy",
        class: 'buy'
    }, {
        name: "添加商品"
    }]; //面包屑
    var editor = new wangEditor('#div1');
    editor.create();

    $scope.obtainRepeatCategory = obtainRepeatCategory;
    $scope.view = {
        initTime: '',
        mall: ajaxSendFn({}, "/mall", "GET").result || {},
        coupons: ajaxSendFn({}, "/coupon/usable", "GET").result || [],
        allocates: ajaxSendFn({}, "/activity/allocate/8012", "GET").result,
        scenes: [{
            /**("不在系统中展示，只允许通过链接/小程序码访问"),
             * **/
            text: '不在系统中展示，只允许通过链接/小程序码访问',
            key: 'HIDDEN',
            value: false
        }, {
            /**
             * 全部平台
             */
            text: '发布到全平台',
            key: 'ALL',
            value: false
        }, {
            /**
             * 惠买单
             */
            text: '发布到惠买单H5',
            key: 'CHECK',
            value: false
        }, {
            /**
             * 探长探店
             */
            text: '发布到探长探店',
            key: 'SALER',
            value: false
        }, {
            /**
             * 上宾生活
             */
            text: '发布到上宾生活',
            key: 'BING',
            value: false
        }, {
            /**
             * 捷帐宝
             */
            text: '发布到捷帐宝',
            key: 'CMPP',
            value: false
        }, {
            /**
             * 上宾小栈
             */
            text: '发布到上宾小栈',
            key: 'INNS',
            value: false
        }]
    };

    if ($routeParams.id) {
        // 修改
        $scope.posts = ajaxSendFn({}, "/mall/" + $routeParams.id, "GET").result;
        editor.txt.html($scope.posts.additional)
        $scope.posts.startDate = new Date($scope.posts.startDate);
        $scope.posts.endDate = new Date($scope.posts.endDate);
        $scope.posts.details = [];
        if (!$scope.posts.allocates) {
            $scope.posts.allocates = [{}];
        }
        for (var i in $scope.posts.detail) {
            $scope.posts.details.push({
                id: i,
                value: $scope.posts.detail[i]
            });
        }
        delete $scope.posts.detail;
        // 遍历场景
        $scope.view.scenes.map((v) => {
            $scope.posts.scenes.map((p) => {
                console.log(p + '==' + v.key)
                if (p == v.key) {
                    v.value = true
                }
            })
        })
        console.log($scope.view.scenes)

    } else {
        // 添加
        $scope.posts = {
            details: [{}],
            category: "BOUGHT",
            picUrls: [{}],
            goods: [{}],
            allocates: [{}],
            startDate: '',
            endDate: '',
            allShop: false,
            scenes: [],
            shops: []
        };
        $scope.initTimeFn = function () {
            var date = new Date();
            date.setHours(23);
            date.setMinutes(59);
            date.setSeconds(59);
            $scope.posts.endDate = date;
            var date1 = new Date();
            date1.setHours(0);
            date1.setMinutes(0);
            date1.setSeconds(0);
            date1.setDate(date.getDate() - 30);
            $scope.posts.startDate = date1;
            $scope.view.initTime = ($filter('date')(new Date(), "yyyy-MM-dd") + "T59:59")
        };
        $scope.initTimeFn();

    }

    $scope.allShop = false;
    $scope.set = {
        list: ajaxSendFn({
            state: 1002
        }, "/shops", "GET").result,
        shopAll: false,
        shops: []
    };
    $scope.$watch('set.shopAll', function (newVal, oldVal) {
        if (newVal !== oldVal) {
            if (newVal) {
                angular.forEach($scope.set.list, function (value, key) {
                    this[key] = value.id;
                }, $scope.posts.shops)
            } else {
                $scope.posts.shops = [];
            }
        }
    });

    // 全选门店
    $scope.checkAllShops = function () { //
        console.log($scope.posts.allShop)

        if ($scope.posts.allShop) {
            var shops = [];
            for (var i = 0; i < $scope.set.list.length; i++) {
                shops.push($scope.set.list[i].id)
            }
            $scope.set.shops = shops
        } else { //
            $scope.set.shops = [];
            $scope.posts.shops = []
        }
    }
    $scope.checkShops = function (key) {
        if (key == false) {
            delete key
            $scope.posts.allShop = false;
        }
        var arr = $scope.set.shops.filter(function (s) {
            return s && s.trim();
        });
        if (arr.length == $scope.set.list.length) {
            $scope.posts.allShop = true
        } else {
            $scope.posts.allShop = false;
        }
    }
    // 勾选门店--end

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
    // 添加价格
    $scope.addFn = function () {
        $scope.posts.details.push({});
    };
    // 删除价格
    $scope.removeFn = function (i) {
        $scope.posts.details.splice(i, 1);
    }

    // 添加商品
    $scope.addGoodsFn = function () {
        $scope.posts.goods.push({});
    };
    // 删除商品
    $scope.removeGoodsFn = function (i) {
        $scope.posts.goods.splice(i, 1);
    }
    // 提交数据
    $scope.postSend = function () {
        // console.log($scope.posts)
        // return;
        if (!$scope.posts.picUrl) {
            alert("请先选择图片");
            return;
        }

        // 遍历场景
        var scenesArr = [];
        $scope.view.scenes.map(function (i) {
            if (i.value) {
                scenesArr.push(i.key)
            }
        })
        $scope.posts.scenes = scenesArr;
        if (scenesArr.length <= 0) {
            alert("请选择发布场景");
            return;
        }


        // 遍历商品
        $scope.posts.goods.map((i) => {
            i.category = 'COUPON'
        })
        // 富文本
        $scope.posts.additional = editor.txt.html()
        var json = angular.copy($scope.posts);
        json.detail = {};
        for (var i in json.details) {
            json.detail[json.details[i].id] = json.details[i].value;
        }
        delete json.details;
        if (!json.allocates[0].id) {
            delete json.allocates
        }
        if (JSON.stringify(json.picUrls) == "[{}]") {
            delete json.picUrls;
        }
        for (var j in $scope.view.coupons) {
            if ($scope.posts.goods.id = $scope.view.coupons[j].id) {
                json.goods.name = $scope.view.coupons[j].name;
                json.goods.category = "COUPON";
            }
        }
        json.startDate = $filter('date')(json.startDate, "yyyy-MM-dd HH:mm:ss");
        json.endDate = $filter('date')(json.endDate, "yyyy-MM-dd HH:mm:ss");

        if ($routeParams.id) {
            postsend = ajaxSendFn(json, "/mall/" + $routeParams.id, "PUT", 1);
        } else {
            postsend = ajaxSendFn(json, "/mall", "POST", 1);
        }
        if (postsend.code == 200) {
            alert("操作成功");
            $location.path("/mall/buy");
        } else {
            alert(postsend.message);
        }
    }
});
app.controller('CategoryCtr', function ($scope, $location, $http) { //shoplist over
    $scope.config.breadset = [{ //
        name: "品类管理",
        href: indexUrl + "/admin.html#/mall/category",
        class: 'category'
    }, {
        name: "品类管理"
    }]; //面包屑
    $scope.view = {
        list: ajaxSendFn({}, "/dishes/kinds", "GET").result || ""
    };
    $scope.openFn = function (id) {
        if (id) {
            $scope.posts = ajaxSendFn({}, "/dishes/kinds/" + id, "GET").result || {};
        } else {
            $scope.posts = {};
        }
        $("#add").modal("show");
    }
    $scope.submitFn = function () { //
        if ($scope.posts.id) {
            postsend = ajaxSendFn($scope.posts, "/dishes/kinds/" + $scope.posts.id, "PUT", 1);
        } else {
            postsend = ajaxSendFn($scope.posts, "/dishes/kinds", "POST", 1);
        }
        if (postsend.code == 200) {
            $("#add").modal("hide");
            $scope.view.list = ajaxSendFn({}, "/dishes/kinds", "GET").result || "";
        } else {
            alert("重试");
        }
    };
    $scope.remove = function (index) {
        if (!confirm("一旦删除将不可恢复，是否确认删除？")) return false;
        var data = ajaxSendFn({}, "/dishes/kinds/" + $scope.view.list[index].id, "DELETE");
        if (data.code == 200) { //
            $scope.view.list.splice(index, 1);
        } else {
            alert(data.message);
        }
    };
});
app.controller('MealCtr', function ($scope, $location, $http) { //shoplist over
    $scope.config.breadset = [{ //
        name: "套餐管理",
        href: indexUrl + "/admin.html#/mall/meal",
        class: 'meal'
    }, {
        name: "套餐列表"
    }]; //面包屑
    var data = ajaxSendFn({}, "/meals", "GET");
    if (data.code != 200) $location.path("/mall/meal/add");
    $scope.posts = {
        meals: []
    };
    $scope.view = data.result;
    $scope.remove = function (index) {
        if (!confirm("一旦删除将不可恢复，是否确认删除？")) return false;
        var data = ajaxSendFn({}, "/meals/" + $scope.view.items[index].id, "DELETE");
        if (data.code == 200) { //
            $scope.view.items.splice(index, 1);
            alert("删除成功");
        } else { //
            alert(data.message);
        }
    };
    $scope.removeAll = function () {
        if (!$scope.posts.meals.length) {
            alert("请先选择要删除的套餐！");
            return;
        }
        if (!confirm("一旦删除将不可恢复，是否确认删除？")) return false;
        var data = ajaxSendFn($scope.posts.meals, "/meals/ids", "DELETE");
        if (data.code == 200) {
            $scope.posts.meals = [];
            $scope.view = ajaxSendFn({}, "/meals", "GET").result;
        } else {
            alert(data.message);
        }
    };
    $scope.checkAllDishes = function () {
        if ($scope.dishesAll) $scope.posts.meals = [];
        else {
            angular.forEach($scope.view.items, function (value, key) {
                this[key] = value.id;
            }, $scope.posts.meals);
        }
    }
    $scope.detailFn = function (index) {
        $scope.meal = $scope.view.items[index]
        $("#show").modal("show");
    }
    $scope.pageChange = function () {
        var json = {
            page: $scope.view.page,
            count: $scope.view.count
        };
        $scope.view = ajaxSendFn(json, "/meals", "GET").result || [];
    };
});
app.controller('MealAddCtr', function ($scope, $location, $http, $routeParams) { //shoplist over
    $scope.config.breadset = [{ //
        name: "套餐管理",
        href: indexUrl + "/admin.html#/mall/meal",
        class: 'meal'
    }, {
        name: "套餐列表"
    }]; //面包屑
    //$scope.tem = {
    //    uploadTitle: "选择图片"
    //};
    $scope.view = ajaxSendFn({}, "/dishes/usable", "GET").result;

    $scope.posts = {
        dishess: [{
            count: 1
        }]
    };
    if ($routeParams.mealId) {
        var data = ajaxSendFn({}, "/meals/" + $routeParams.mealId, "GET");
        if (data.code != 200) $location.path("/mall/meal");
        $scope.posts = data.result;
        delete $scope.posts.orgPicUrl;
        for (var i in $scope.posts.dishess) {
            delete $scope.posts.dishess[i].orgPicUrl;
        }
    }
    $scope.addFn = function () {
        $scope.posts.dishess.push({
            count: 1
        });
    };
    $scope.removeFn = function (i) {
        $scope.posts.dishess.splice(i, 1);
    }
    $scope.send = function (a) { //
        for (var i in $scope.posts.dishess) {
            delete $scope.posts.dishess[i].$$hashKey;
        }
        sendJson = JSON.stringify($scope.posts);
        if ($scope.posts.id) {
            postsend = ajaxSendFn(sendJson, "/meals/" + $scope.posts.id, "POST", 1);
        } else {
            postsend = ajaxSendFn(sendJson, "/meals", "POST", 1);
        }
        if (postsend.code == 200) {
            alert("保存成功");
            $location.path("/mall/meal");
        } else {
            alert(data.message);
        }
    };
});
/*------------------------统计报表------------------------------------------*/

app.controller('DocCtr', ['$rootScope', '$scope', '$location', 'shopFactory', function ($rootScope, $scope, $location, shopFac) { //shoplist over
    $scope.config.class = "doc";
    $scope.posts = {};
    $scope.view = {
        shops: shopFac.getAllShops(),

        STATISTICS_TEXT: ["当前总消费数（笔）", "当前总收款数（笔）", "当前总余额（元）", "当前会员总人数（人）", "累计金额（元）", "累计金额（元）", "累计金额（元）", "累计金额（元）", "当前总余量（分）", "当前总余量（张）", "当前总余额（元）", "短信余额（条）"],
        //TYPE: ["consumption", "receivables", "recharge", "upgrade", "point", "coupon", "shortmessage"],
        buttons: ["惠买单消费报表", "快速收款报表", "充值报表", "充值卡门店结算", "会员升级报表", "打赏购买", "砍价购买", "抽奖购买", "商城购买", "积分报表", "优惠券报表", '代用币报表', "短信使用报表", "服务员收益", "营销支出", "探店储值卡", '业务推广报表'],
        coupons: ajaxSendFn({}, "/reports/coupon/coupons", "GET").result || [],
        staff: ajaxSendFn({}, "/reports/profits/staffs", "GET").result || [],
        business: [{
            id: "8001",
            name: "费率分成"
        }, {
            id: "8002",
            name: "打赏小红花"
        }, {
            id: "8003",
            name: "用户分销赏金"
        }, {
            id: "8004",
            name: "用户分销佣金"
        }],
        card: ajaxSendFn({}, "/reports/card/cards", "GET").result || []
    };

    $scope.sendOrder = function () {
        window.open("admin.html#/doc/detail/" + $scope.posts.order, '_blank');
    };

}]);



app.controller('FinanceCtr', ['$rootScope', '$scope', '$location', 'shopFactory', "$filter", function ($rootScope, $scope, $location, shopFac, $filter) { //shoplist over
    $scope.config.class = "doc";
    $scope.posts = {
        selector: " "
    };
    $scope.view = {
        channels: [{
            "id": " ",
            "name": "全部"
        }],
        types: [{
                "id": "901",
                "name": "惠买单消费"
            },
            {
                "id": "902",
                "name": "充值"
            },
            {
                "id": "904",
                "name": "会员升级"
            },
            {
                "id": "905",
                "name": "砍价购买"
            },
            {
                "id": "906",
                "name": "抽奖购买"
            },
            {
                "id": "907",
                "name": "打赏"
            },
            {
                "id": "903",
                "name": "商城购买"
            }
        ]
        //staticNumber:ajaxSendFn({}, "/finance/stat", "GET").result
    };
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
    $scope.searchFn = function (id) {
        if (id) $scope.posts.selector = id;
        if (($scope.posts.endTime - $scope.posts.startTime) / (1000 * 60 * 60 * 24) > 31) {
            alert("起止时间不能超过31天");
            return;
        }
        var param = {};
        param.startTime = $filter('date')($scope.posts.startTime, "yyyy-MM-dd HH:mm:ss");
        param.endTime = $filter('date')($scope.posts.endTime, "yyyy-MM-dd HH:mm:ss");
        if ($scope.posts.selector) {
            param.reason = $scope.posts.selector;
        }
        var data = ajaxSendFn(param, "/finance", "GET");
        $scope.view.result = data.result || [];
    };
    $scope.detailFn = function (shop, channel) { //店，渠道
        var param = {};
        param.startTime = $filter('date')($scope.posts.startTime, "yyyy-MM-dd HH:mm:ss");
        param.endTime = $filter('date')($scope.posts.endTime, "yyyy-MM-dd HH:mm:ss");
        if ($scope.posts.selector) {
            param.reason = $scope.posts.selector;
        }
        if (shop) {
            param.shopId = shop;
        }
        if (channel) {
            param.channel = channel;
        }
        var str = "";
        for (var i in param) {
            str += i + "=" + param[i] + "&";
        }
        str = str.substring(0, str.length - 1);
        window.open("admin.html#/finance/search?" + str, '_blank');
    }

}]);
app.controller('FinanceSearchCtr', ['$rootScope', '$scope', '$location', 'shopFactory', function ($rootScope, $scope, $location, shopFac) { //shoplist over
    $scope.config.class = "doc";
    $scope.view = {};
    var json = $location.search();
    $scope.view = ajaxSendFn(json, "/finance/detail", "GET").result;
    $scope.$watch('view.page', function (newVal, oldVal) {
        if (newVal && oldVal && newVal !== oldVal) {
            json.page = $scope.view.page;
            json.count = $scope.view.count;
            $scope.view = ajaxSendFn(json, "/finance/detail", "GET").result;
        }
    });
}]);

/*--------------------------------notice----------------------------------*/
app.controller('NoticeCtr', ['$rootScope', '$scope', '$location', 'shopFactory', function ($rootScope, $scope, $location, shopFac) { //shoplist over
    $scope.config.class = "notice";
    $scope.view = ajaxSendFn({}, "/remind/message/NOTIFY", "GET").result || [];
    $scope.post = [];
    $scope.posts = {
        "102": {
            category: "102",
            path: "",
            enabled: false
        },
        "103": {
            category: "103",
            path: "",
            enabled: false
        },
        "104": {
            category: "104",
            path: "",
            enabled: false
        },
        "105": {
            category: "105",
            path: "",
            enabled: false
        },
        "106": {
            category: "106",
            path: "",
            enabled: false
        },
        "107": {
            category: "107",
            path: "",
            enabled: false
        },
        "108": {
            category: "108",
            path: "",
            enabled: false
        },
        "109": {
            category: "109",
            path: "",
            enabled: false
        },
        "113": {
            category: "113",
            path: "",
            enabled: false
        },
        "114": {
            category: "114",
            path: "",
            enabled: false
        }
    };

    $scope.init = function () {
        for (var i = 0; i < $scope.view.length; i++) {
            $scope.posts[$scope.view[i].category] = $scope.view[i];
        }
    };
    $scope.init();
    $scope.reverse = function () {
        var json = [];
        for (var j in $scope.posts) {
            if ($scope.posts[j].path) {
                $scope.posts[j].enabled = true;
                json.push($scope.posts[j]);
            }
        }
        return json;
    };
    $scope.postSend = function () {
        var data = ajaxSendFn($scope.reverse(), "/remind/message/NOTIFY", "POST");
        if (data.code == 200) {
            alert("保存成功");
        } else {
            alert(data.message);
        }
    };
}]);
app.controller('NoticePraiseCtr', ['$rootScope', '$scope', '$location', 'shopFactory', function ($rootScope, $scope, $location, shopFac) { //shoplist over
    $scope.config.class = "praise";
    $scope.view = ajaxSendFn({}, "/remind/message/PRAISE", "GET").result || [];
    $scope.post = [];
    $scope.posts = {
        "161": {
            category: "161",
            path: "",
            enabled: false
        },
        "163": {
            category: "163",
            path: "",
            enabled: false
        },
        "165": {
            category: "165",
            path: "",
            enabled: false
        }
    };

    $scope.init = function () {
        for (var i = 0; i < $scope.view.length; i++) {
            $scope.posts[$scope.view[i].category] = $scope.view[i];
        }
    };
    $scope.init();
    $scope.reverse = function () {
        var json = [];
        for (var j in $scope.posts) {
            if ($scope.posts[j].path) {
                $scope.posts[j].enabled = true;
                json.push($scope.posts[j]);
            }
        }
        return json;
    };
    $scope.postSend = function () {
        var data = ajaxSendFn($scope.reverse(), "/remind/message/PRAISE", "POST");
        if (data.code == 200) {
            alert("保存成功");
        } else {
            alert(data.message);
        }
    };
}]);
app.controller('NoticeGrouponCtr', ['$rootScope', '$scope', '$location', 'shopFactory', function ($rootScope, $scope, $location, shopFac) { //shoplist over
    $scope.config.class = "groupon";
    $scope.view = ajaxSendFn({}, "/remind/message/GROUPON", "GET").result || [];
    $scope.post = [];
    $scope.posts = {
        "151": {
            category: "151",
            path: "",
            enabled: false
        },
        "152": {
            category: "152",
            path: "",
            enabled: false
        }
    };

    $scope.init = function () {
        for (var i = 0; i < $scope.view.length; i++) {
            $scope.posts[$scope.view[i].category] = $scope.view[i];
        }
    };
    $scope.init();
    $scope.reverse = function () {
        var json = [];
        for (var j in $scope.posts) {
            if ($scope.posts[j].path) {
                $scope.posts[j].enabled = true;
                json.push($scope.posts[j]);
            }
        }
        return json;
    };
    $scope.postSend = function () {
        var data = ajaxSendFn($scope.reverse(), "/remind/message/GROUPON", "POST");
        if (data.code == 200) {
            alert("保存成功");
        } else {
            alert(data.message);
        }
    };
}]);
app.controller('NoticeLotteryCtr', ['$rootScope', '$scope', '$location', 'shopFactory', function ($rootScope, $scope, $location, shopFac) { //shoplist over
    $scope.config.class = "lottery";
    $scope.view = ajaxSendFn({}, "/remind/message/RAFFLE", "GET").result || [];
    $scope.post = [];
    $scope.posts = {
        "170": {
            category: "170",
            path: "",
            enabled: false
        },
        "171": {
            category: "171",
            path: "",
            enabled: false
        }
    };

    $scope.init = function () {
        for (var i = 0; i < $scope.view.length; i++) {
            $scope.posts[$scope.view[i].category] = $scope.view[i];
        }
    };
    $scope.init();
    $scope.reverse = function () {
        var json = [];
        for (var j in $scope.posts) {
            if ($scope.posts[j].path) {
                $scope.posts[j].enabled = true;
                json.push($scope.posts[j]);
            }
        }
        return json;
    };
    $scope.postSend = function () {
        var data = ajaxSendFn($scope.reverse(), "/remind/message/RAFFLE", "POST");
        if (data.code == 200) {
            alert("保存成功");
        } else {
            alert(data.message);
        }
    };
}]);
app.controller('NoticeValidateCtr', ['$rootScope', '$scope', '$location', 'shopFactory', function ($rootScope, $scope, $location, shopFac) { //shoplist over
    $scope.config.class = "validate";
    $scope.posts = {};
    var data = ajaxSendFn({}, "/remind/short", "GET");
    if (data.code == 200) {
        $scope.posts = data.result;
    }
    $scope.postSend = function () {
        var json = $scope.posts;
        for (var s in json) {
            if (!json[s]) {
                delete json[s];
            }
        }
        var data = ajaxSendFn(json, "/remind/short", "POST");
        if (data.code == 200) {
            alert("保存成功");
        } else {
            alert(data.message);
        }
    };
}]);
app.controller('NoticeExpiredCtr', ['$rootScope', '$scope', '$location', 'shopFactory', function ($rootScope, $scope, $location, shopFac) { //shoplist over
    $scope.config.class = "expired";
    var data = ajaxSendFn({}, "/remind/expired", "GET");
    if (data.code == 200) {
        $scope.post = data.result;
        switch ($scope.post.path) {
            case "102":
                $scope.hand_click = true;
                $scope.message = true;
                $scope.wx = true;
                break;
            case "104":
                $scope.hand_click = true;
                $scope.message = true;
                break;
            case "103":
                $scope.hand_click = true;
                $scope.wx = true;
                break;
        }
    } else {
        $scope.post = {
            category: "120",
            path: "",
            enabled: false,
            times: ""
        };
    }
    $scope.postSend = function () {
        if ($scope.post.path) {
            if (!$scope.post.times) {
                alert("请先选择天数！");
                return;
            }
            $scope.post.enabled = true;
        }
        var data = ajaxSendFn($scope.post, "/remind/expired", "POST");
        if (data.code == 200) {
            alert("保存成功");
        } else {
            alert(data.message);
        }
    };
    $scope.change = function () {
        if ($scope.message && $scope.wx) {
            $scope.post.path = "102";
        } else if ($scope.message) {
            $scope.post.path = "104";
        } else if ($scope.wx) {
            $scope.post.path = "103";
        } else {
            $scope.post.path = "";
        }
    };
    $scope.$watch("post.path", function () {
        if ($scope.post.path == "101") {
            $scope.hand_click = "";
        }
    })
}]);
app.controller('NoticeSubscribeCtr', ['$rootScope', '$scope', '$location', 'shopFactory', function ($rootScope, $scope, $location, shopFac) { //shoplist over
    $scope.config.class = "subscribe";
    $scope.posts = {
        "130": {
            category: "130",
            path: "103",
            enabled: false
        },
        "131": {
            category: "131",
            path: "103",
            enabled: false
        },
        "132": {
            category: "132",
            path: "103",
            enabled: false
        }
    };
    $scope.view = ajaxSendFn({}, "/remind/subscribe", "GET").result || [];
    $scope.init = function () {
        for (var i = 0; i < $scope.view.length; i++) {
            $scope.posts[$scope.view[i].category] = $scope.view[i];
        }
    };
    $scope.init();
    $scope.postSend = function () {
        var json = [];
        for (var s in $scope.posts) {
            if ($scope.posts[s].enabled) {
                json.push($scope.posts[s]);
            }
        }
        var data = ajaxSendFn(json, "/remind/subscribe", "POST");
        if (data.code == 200) {
            alert("保存成功");
        } else {
            alert(data.message);
        }
    };
}]);
app.controller('NoticePayCtr', ['$rootScope', '$scope', '$location', 'shopFactory', function ($rootScope, $scope, $location, shopFac) { //shoplist over
    $scope.config.class = "pay";
    $scope.posts = ajaxSendFn({}, "/remind/remind", "GET").result || {
        category: "190",
        enabled: false
    };
    $scope.postSend = function () {
        var data = ajaxSendFn($scope.posts, "/remind/remind", "POST");
        if (data.code == 200) {
            alert("保存成功");
        } else {
            alert(data.message);
        }
    };
}]);

/*------------------------------------------------------------------*/
function getObjectURL(file) { //返回图片的URL
    var url = null;
    if (window.createObjectURL != undefined) { //basic
        url = window.createObjectURL(file);
    } else if (window.URL != undefined) { //mozilla(firefox)
        url = window.URL.createObjectURL(file);
    } else if (window.webkitURL != undefined) { //webkitorchrome
        url = window.webkitURL.createObjectURL(file);
    }
    return url;
}