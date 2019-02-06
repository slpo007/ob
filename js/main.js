$(function () {
    var doCheck = false;
    var autoCj = false;
    var payTimer = '';
    var order_sn = '';
    var data =  [
        {
        displayName: "花臂Fearless",
        goodsName: "海克斯皮肤礼包",
        createTime: "2018-11-21 14:38:46",
        iconUrl: "https://img-openbox.stm123.com/goods/201809/2018092710470930077.jpg",
        boxesName: null
        },
        {
        displayName: "不用手都秒你",
        goodsName: "三国皮肤礼包",
        createTime: "2018-11-21 15:34:30",
        iconUrl: "https://img-openbox.stm123.com/goods/201809/2018092710513510181.jpg",
        boxesName: null
        },
        {
        displayName: "醒着做梦。",
        goodsName: "K/DA图标任选1款",
        createTime: "2018-11-21 15:40:44",
        iconUrl: "https://img-openbox.stm123.com/goods/201811/2018110515264354976.jpg",
        boxesName: null
        },
        {
        displayName: "金色双马尾赛高",
        goodsName: "2018冠军守卫",
        createTime: "2018-11-21 15:40:26",
        iconUrl: "https://img-openbox.stm123.com/goods/201809/2018093015401076458.jpg",
        boxesName: null
        },
        {
        displayName: "没胸就别跟我凶丶",
        goodsName: "周年限定皮肤礼包",
        createTime: "2018-11-21 14:47:07",
        iconUrl: "https://img-openbox.stm123.com/goods/201809/2018092710505163350.jpg",
        boxesName: null
        },
        {
        displayName: "放弃†",
        goodsName: "2018冠军守卫",
        createTime: "2018-11-21 15:41:05",
        iconUrl: "https://img-openbox.stm123.com/goods/201809/2018093015401076458.jpg",
        boxesName: null
        },
        {
        displayName: "就叫王老师吧！",
        goodsName: "K/DA图标任选1款",
        createTime: "2018-11-21 15:41:49",
        iconUrl: "https://img-openbox.stm123.com/goods/201811/2018110515264354976.jpg",
        boxesName: null
        },
        {
        displayName: "桂鬼3十6",
        goodsName: "2018全球总决赛冠军表情",
        createTime: "2018-11-21 15:41:51",
        iconUrl: "https://img-openbox.stm123.com/goods/201810/2018101115124097875.jpg",
        boxesName: null
        },
        {
        displayName: "安风。",
        goodsName: "K/DA图标任选1款",
        createTime: "2018-11-21 15:38:48",
        iconUrl: "https://img-openbox.stm123.com/goods/201811/2018110515264354976.jpg",
        boxesName: null
        },
        {
        displayName: "擁冇n!⒈輩子",
        goodsName: "K/DA图标任选1款",
        createTime: "2018-11-21 15:38:07",
        iconUrl: "https://img-openbox.stm123.com/goods/201811/2018110515264354976.jpg",
        boxesName: null
        },
        {
        displayName: "风帅哥是我",
        goodsName: "66600LOL点券",
        createTime: "2018-11-21 15:24:21",
        iconUrl: "https://img-openbox.stm123.com/goods/201809/2018092710524750608.jpg",
        boxesName: null
        },
        {
        displayName: "残去『记忆』",
        goodsName: "2018全球总决赛冠军表情",
        createTime: "2018-11-21 15:38:09",
        iconUrl: "https://img-openbox.stm123.com/goods/201810/2018101115124097875.jpg",
        boxesName: null
        },
        {
        displayName: "傻鼻横行不要钱",
        goodsName: "周年限定皮肤礼包",
        createTime: "2018-11-21 14:39:48",
        iconUrl: "https://img-openbox.stm123.com/goods/201809/2018092710505163350.jpg",
        boxesName: null
        },
        {
        displayName: "名字太长不取了",
        goodsName: "2018冠军守卫",
        createTime: "2018-11-21 15:38:09",
        iconUrl: "https://img-openbox.stm123.com/goods/201809/2018093015401076458.jpg",
        boxesName: null
        },
        {
        displayName: "狂人的嗲",
        goodsName: "全球总决赛通行证",
        createTime: "2018-11-21 15:26:17",
        iconUrl: "https://img-openbox.stm123.com/goods/201811/2018111410280409318.jpg",
        boxesName: null
        },
        {
        displayName: "残轩风云",
        goodsName: "2018总决赛出征服",
        createTime: "2018-11-21 14:54:32",
        iconUrl: "https://img-openbox.stm123.com/goods/201810/2018102416025275306.jpg",
        boxesName: null
        },
        {
        displayName: "猎刹中的猛男",
        goodsName: "66600LOL点券",
        createTime: "2018-11-21 15:27:56",
        iconUrl: "https://img-openbox.stm123.com/goods/201809/2018092710524750608.jpg",
        boxesName: null
        },
        {
        displayName: "伟 ๓",
        goodsName: "K/DA图标任选1款",
        createTime: "2018-11-21 15:40:20",
        iconUrl: "https://img-openbox.stm123.com/goods/201811/2018110515264354976.jpg",
        boxesName: null
        },
        {
        displayName: "空。",
        goodsName: "K/DA图标任选1款",
        createTime: "2018-11-21 15:38:47",
        iconUrl: "https://img-openbox.stm123.com/goods/201811/2018110515264354976.jpg",
        boxesName: null
        },
        {
        displayName: "叁哥必胜",
        goodsName: "周年限定皮肤礼包",
        createTime: "2018-11-21 15:35:49",
        iconUrl: "https://img-openbox.stm123.com/goods/201809/2018092710505163350.jpg",
        boxesName: null
        },
        {
        displayName: "独霸丶小奶哥",
        goodsName: "三国皮肤礼包",
        createTime: "2018-11-21 15:06:15",
        iconUrl: "https://img-openbox.stm123.com/goods/201809/2018092710513510181.jpg",
        boxesName: null
        },
        {
        displayName: "回妆染痛颜。︶",
        goodsName: "2018全球总决赛冠军表情",
        createTime: "2018-11-21 15:41:34",
        iconUrl: "https://img-openbox.stm123.com/goods/201810/2018101115124097875.jpg",
        boxesName: null
        },
        {
        displayName: "回妆染痛颜。︶",
        goodsName: "2018全球总决赛冠军表情",
        createTime: "2018-11-21 15:38:30",
        iconUrl: "https://img-openbox.stm123.com/goods/201810/2018101115124097875.jpg",
        boxesName: null
        },
        {
        displayName: "忒二舅",
        goodsName: "摄魂使者 薇恩",
        createTime: "2018-11-21 15:09:45",
        iconUrl: "https://img-openbox.stm123.com/goods/201809/2018092710501033352.jpg",
        boxesName: null
        },
        {
        displayName: "帅哥稀饭",
        goodsName: "K/DA 阿卡丽",
        createTime: "2018-11-21 14:56:40",
        iconUrl: "https://img-openbox.stm123.com/goods/201811/2018110914544161085.png",
        boxesName: null
        },
        {
        displayName: "vip专属熊二",
        goodsName: "66600LOL点券",
        createTime: "2018-11-21 14:56:48",
        iconUrl: "https://img-openbox.stm123.com/goods/201809/2018092710524750608.jpg",
        boxesName: null
        },
        {
        displayName: "杨总",
        goodsName: "2018全球总决赛冠军表情",
        createTime: "2018-11-21 15:41:08",
        iconUrl: "https://img-openbox.stm123.com/goods/201810/2018101115124097875.jpg",
        boxesName: null
        },
        {
        displayName: "456789445",
        goodsName: "全球总决赛通行证",
        createTime: "2018-11-21 15:14:23",
        iconUrl: "https://img-openbox.stm123.com/goods/201811/2018111410280409318.jpg",
        boxesName: null
        },
        {
        displayName: "劳资草拟吗的黑笔",
        goodsName: "66600LOL点券",
        createTime: "2018-11-21 15:09:09",
        iconUrl: "https://img-openbox.stm123.com/goods/201809/2018092710524750608.jpg",
        boxesName: null
        },
        {
        displayName: "꧁༺浪痞༻꧂",
        goodsName: "2018全球总决赛冠军表情",
        createTime: "2018-11-21 15:40:52",
        iconUrl: "https://img-openbox.stm123.com/goods/201810/2018101115124097875.jpg",
        boxesName: null
        },
        {
        displayName: "召唤师丿范er丶",
        goodsName: "2018总决赛出征服",
        createTime: "2018-11-21 15:19:19",
        iconUrl: "https://img-openbox.stm123.com/goods/201810/2018102416025275306.jpg",
        boxesName: null
        }
    ]
    bindEvents();
    // 侧边导航
    window.onscroll=function(){
        var top = $(document).scrollTop();
        if(top <= 400 && top >=0){
            $('.js-move li').removeClass('active');
            $('.js-move li').eq(0).addClass('active');
        }else if(top > 400 && top <= 770){
            $('.js-move li').removeClass('active');
            $('.js-move li').eq(2).addClass('active');
        }else if(top > 770) {
            $('.js-move li').removeClass('active');
            $('.js-move li').eq(3).addClass('active');
        }
    };
    $('.js-move li').each(function(i,v){
        $(v).bind('click',function(){
            // console.log(i)
            if(i === 0){
                $(document).scrollTop(0);
            }else if(i === 2){
                $(document).scrollTop(770);
            }else if(i === 3){
                $(document).scrollTop(900);
            }
        })
        
    });
    function bindEvents() {
        // 登录
        $('.loginbox .loginbtn').unbind().bind("click", function () {
            $('.dilog-iframe').show();
        });

        // 注销
        $('.loginboxout .logout').unbind().bind("click", function () {
            alert4('你确定现在要退出登录吗？',function(){$('.loginbox').show();$('.login-suss').hide()});
        });

        // 每日第一登录送的宝箱相关事件
        $(".first-login .btn-lol2").unbind().bind("click", function () {
            $(".first-login").hide();
        });

        //充值按钮
        $("#czbtn").unbind().bind("click", function () {
            //显示充值界面
            autoCj = false;
            $(".rechargechoosed").removeClass("rechargechoosed");
            $(".rechargecontent_3_2").addClass("rechargechoosed");
            $('#pay_money').val($(".rechargecontent_3_2").attr('data-num'));
            $(".rechargecontent_2").removeClass("rechargecontent_2center");
            $(".rechargecontent_2").html("选中你需要充值的金额：");
            $(".rechargecontent_3").show();
            showRechargeBox();
        });

        //我的背包按钮
        $(".bbbox").unbind().bind("click", function () {
            $(".backpackbox").show();
        });
        $(".wddb_btn").unbind().bind("click", function () {
            renderBackpack();
        });
        $(".backpackboxzzc").unbind().bind("click", function () {
            $(".backpackbox").hide();
        });
        $(".backpackbox_1 .ng-pop-close").unbind().bind("click", function () {
            $(".backpackbox").hide();
        });

        // 轮播
        $('.zy-Slide').zySlide({ speed: 500 }).css({'border':'0px solid blue'});
        $('.zy-Slide .Slide1-li').click(function(){
            var zIndex = parseInt($(this).css('z-index'));
            var left = parseInt($(this).css('left'));
            if(zIndex < 4 && left < 456){
                for(var i = 0; i < 4-zIndex;i++){
                    $('.prev').click();
                }
            }else if(zIndex < 4 && left > 456){
                for(var i = 0; i < 4-zIndex;i++){
                    $('.next').click();
                }
            }
        })
        
        // 我的卡包（点击优惠券）
        $(".czbox .my-coupon").unbind().bind("click", function () {
            $(".my-card").show();
        });
        $(".my-card .ng-pop-close").unbind().bind("click", function () {
            $(".my-card").hide();
        });

        // 点击右边导航我的背包事件
        $(".sub-nav .my-bag").unbind().bind("click", function () {
            $(".backpackbox").show();
        });

        // 玩法
        $('.play-rlues').unbind().bind("click", function () {
            $(document).scrollTop(785);
        });
        $(".card-record").unbind().bind("click", function () {
            $(".backpackbox").show();
        });

        // 充值盒子
        $('.rechargecontent_1_close').unbind().bind("click", function () {
            $(".rechargebox").hide();
        });
        $(".my-balance").unbind().bind("click", function () {
            //显示充值界面
            $('.rechargebox').show();
        });


        $(".czbtn").unbind().bind("click", function () {
            //显示充值界面
            $('.rechargebox').show();
        });
        // 支付切换
        $('.reg-payType .item').unbind().bind("click", function () {
            $('.reg-payType .item').removeClass('active');
            $(this).addClass('active');
        });

        //抽奖事件
        $('.kqbtns').unbind().bind("click", function () {
            $('.buy-card').show();
        })


        // dnf嘉年华
        $('.carnival .carnival-close').unbind().bind("click", function () {
            $('.carnival').addClass('close-carnival');
        })

        // $(".kqbtns").unbind().bind("click", function () {
        //     var data = {
        //         type: $(this).attr('data-id'),
        //         model: $(this).attr('data-model'),
        //         coupon: 0
        //     };
        //     var useMoney = $(this).attr('data-money');
        //     autoCj = true;
        //     //是否有优惠券
        //     if (data.type == 1 && $('.yhj_1y_num').text() > 0) {
        //         //点击抽1次
        //         $('.yhj_5y').hide();
        //         $('.yhj_1y').show();
        //         $('.yhjcontent1_1_3_1_1').show();
        //         $('.yhjcontent1_1_4_1').text('取消');
        //         $("#myyhjbox").show();
        //         $("#yhj_1y_btn").unbind().bind("click", function () {
        //             data.coupon = 1;
        //             doLottery(data, useMoney);
        //         });
        //     } else if (data.type == 2 && $('.yhj_5y_num').text() > 0) {
        //         //点击抽11次
        //         $('.yhj_1y').hide();
        //         $('.yhj_5y').show();
        //         $('.yhjcontent1_1_3_1_1').show();
        //         $('.yhjcontent1_1_4_1').text('取消');
        //         $("#myyhjbox").show();
        //         $("#yhj_5y_btn").unbind().bind("click", function () {
        //             data.coupon = 1;
        //             doLottery(data, useMoney);
        //         });
        //     } else {
        //         doLottery(data, useMoney);
        //     }

        // });

        //充值相关事件
        $(".rechargecontent_3_1").unbind().bind("click", function () {
            $(".rechargechoosed").removeClass("rechargechoosed");
            $(this).addClass("rechargechoosed");
            $('#pay_money').val($(this).attr('data-num'));
            showRechargeBox();
        });
        $(".rechargecontent_3_2").unbind().bind("click", function () {
            $(".rechargechoosed").removeClass("rechargechoosed");
            $(this).addClass("rechargechoosed");
            $('#pay_money').val($(this).attr('data-num'));
            showRechargeBox();
        });
        $(".rechargecontent_5_1").unbind().bind("click", function () {
            $(".rechargecontent_5_choosed").removeClass("rechargecontent_5_choosed");
            $(this).addClass("rechargecontent_5_choosed");
            showRechargeBox();
        });
        $(".rechargecontent_5_2").unbind().bind("click", function () {
            $(".rechargecontent_5_choosed").removeClass("rechargecontent_5_choosed");
            $(this).addClass("rechargecontent_5_choosed");
            showRechargeBox();
        });

        $(".cjcontent1_1_5_1_2").click(function () {
            $(".cjbox1").hide();
            window.location.reload();
        });
        $(".cjcontent2_1_5_1_2").click(function () {
            $(".cjbox2").hide();
            window.location.reload();
        });

        //提示框相关事件
        $(".alertzzc").click(function () {
            $(".alertbox").hide();
        });
        $(".alertbox .alertcontent_1 .ng-pop-close").click(function () {
            $(".alertbox").hide();
        });

        // 购买卡牌相关事件
        $('.buy-card .rechargecontent_1_close').unbind().bind("click", function () {
            $('.buy-card').hide();
        });


        //奖池列表显示隐藏
        $(".cljlbtn").click(function(){
            $(".jclbbox").show();
        });
        // $(".jclbzzc").click(function(){
        //     $(".jclbbox").hide();
        // });
        $(".jclbbox .ng-pop-close").click(function(){
            $(".jclbbox").hide();
        });
        //优惠券相关事件
        // $('.yhspanbtn').click(function () {
        //     $('.yhj_5y,.yhj_1y').show();
        //     $('.yhjcontent1_1_3_1_1').hide();
        //     $('.yhjcontent1_1_4_1').text('确定');
        //     $("#myyhjbox").show();
        // });
        // $("#getyhjbox .yhjcontent1_1_4_1").click(function () {
        //     $("#getyhjbox ").hide();
        // });
        // $("#getyhjbox .yhjzzc").unbind().bind("click", function () {
        //     $(".getyhjbox").hide();
        // });
        // $("#myyhjbox .yhjcontent1_1_4_1").click(function () {
        //     $("#myyhjbox ").hide();
        // });
        // $("#myyhjbox .yhjzzc").unbind().bind("click", function () {
        //     $("#myyhjbox").hide();
        // });
        $('.my-coupon').click(function () {
            // $(".alertbox").hide();
        });

        //背包绑定qq相关事件
        $(".backpackc_1_2_3_1").click(function () {
            $(".backpackc_1_2_2_1").hide();
            $(".backpackc_1_2_2_2").show();
            $(".backpackc_1_2_3_1").hide();
            $(".backpackc_1_2_3_2").show();
        });
        $(".backpackc_1_2_3_2").click(function () {
            var qq = $(".backpackc_1_2_2_2_qq").val();
            if (!/[1-9][0-9]{4,14}/.test(qq)) {
                // alert1("请填写正确QQ号!");
                $('.phone-error').show();
                return;
            }

            // saveQqNum(qq);
        });

        //一键取出
        $(".backpackc_1_2_5").click(function () {
            // var qqNum = $(".backpackc_1_2_2_1").html();
            // if (null == qqNum || "未绑定" == qqNum || "" == qqNum) {
            //     alert1("请先绑定QQ号");
            // } else {
            //     takeOut(1, '', $(this));
            // }
            $(".recharge-qq").show();
        });

        //单个取出
        // $("body").on('click', '.recharge-qb-btn', function () {
        //     var qqNum = $(".backpackc_1_2_2_1").html();
        //     if (null == qqNum || "未绑定" == qqNum || "" == qqNum) {
        //         // alert1("请先绑定QQ号");
        //     } else {
        //         var id = $(this).parents('.btitle').attr('data-id');
        //         takeOut(2, id, $(this));
        //     }
        // });
        //一键折价
        $(".backpackc_1_2_6").click(function () {
            // allSell();
            alert1("你确定要全部折价吗？");
            $('.alertcontent_2').css({'background-position-x': -122,'background-position-y': -502});
        });

        //单件折价
        $('body').on('click', '.single-sell-btn', function () {
            var _that = $(this);
            var data = {id: $(this).parents('.btitle').attr('data-id')};
            $.ajax({
                type: 'post',
                url: '/index/index/discount',
                data: data,
                dataType: 'json',
                success: function (d) {
                    if (d.status == 1) {
                        _that.parents('.btitle').remove();
                        alert(d.msg, "若钱包显示未到账，请刷新页面后重试。", function () {
                            window.location.reload();
                        });
                    } else {
                        alert1(data.msg);
                    }
                }
            });
        });

        // 我的背包一键充值账号输入
        $(".recharge-qq-alertcontent .ng-pop-close").click(function () {
            $(".recharge-qq ").hide();
        });


        // 五元充值成功后的弹框（开一个）事件
        $(".wuyuan .box-open-con-close").click(function () {
            $(".wuyuan ").hide();
        });


        // 抽奖10次
        $(".cjbox2 .box-open-con-close").click(function () {
            $(".cjbox2 ").hide();
        });

        // 弹幕
         danmu();

        // 去填写qq相关事件
        $('.bcontent-write').click(function () {
            $(".write-qq ").show();
        });
        $(".write-qq .ng-pop-close").click(function () {
            $(".write-qq ").hide();
        });
        $('.bind-qq-li').unbind().bind('click',function(){
            $('.bind-qq-li').removeClass("active");
            if($(this).addClass('active').attr('data-index') === '1'){
                $('.bind-qq-con .padding').css('visibility','hidden');;
            }else{
                $('.bind-qq-con .padding').css('visibility','visible');;
            }
        })

        // qq登录弹窗
        $(".dilog-iframe .closeIframe").click(function () {
            $(".dilog-iframe").hide();
        });
    }

    // 弹幕
    function danmu(){
        var str = '<div class="multi-content">恭喜<span class="name">hahha</span>获得<span class="name">heheh</span></div>';
        var tpl = "";
        var width = 500 + (data.length-1)*660;
        var parentWidth = $(".container").width();
        $(".multi-danmu").css({
            width: width
        })
        data.forEach(function(value, key) {
            tpl += '<div class="multi-content">恭喜<span class="name">'+value.displayName+'</span>获得<span class="name">'+value.goodsName+'</span></div>'
        })
        $(".multi-danmu").html(tpl)
        var tmp = 1;
        var timer = setInterval(function() {
            $(".multi-danmu").css({
                left: (1920 - (tmp + 1))
            }) 
            tmp = tmp + 1 
            if( Math.abs(tmp) >= (Math.abs(width) + parentWidth) ) {
                window.clearInterval(timer)
            }
        },8)
    }

    //保存QQ号
    function saveQqNum(qqNum) {
        $.ajax({
            type: 'post',
            url: '/index/index/updateQq',
            dataType: "json",
            async: false,
            data: {
                qq: qqNum
            },
            success: function (data) {
                if (data.status == 1) {
                    alert1(data.msg);
                    $(".backpackc_1_2_2_2").hide();
                    $(".backpackc_1_2_2_1").show();
                    $(".backpackc_1_2_3_2").hide();
                    $(".backpackc_1_2_3_1").show();
                    $(".backpackc_1_2_2_1").html(qqNum);
                } else {
                    alert1(data.msg);
                }
            }
        });
    }

    //执行抽奖
    function doLottery(playtype, money) {
        $('#myyhjbox').hide();
        // 远程活动
        $.ajax({
            type: 'post',
            url: '/index/index/lottery',
            data: playtype,
            dataType: 'json',
            async: false,
            success: function (d) {
                console.log(d);
                if (d.status == 1) {
                    var list = d.msg;
                    if (playtype.type == 1) {
                        //抽1次
                        $(".cjcontent1_1_2_1_2").attr("src", list[0].cover);
                        $(".cjcontent1_1_3").html(list[0].goods_name);
                        $(".cjcontent1_1_4_1").html(list[0].price);
                        $(".cjbox1").show();
                        $(".cjzzc1").unbind().bind("click", function () {
                            $(".cjbox1").hide();
                            window.location.reload();
                        });
                    } else {
                        //抽11次
                        $(".cjbox2").show();
                        $(".cjzzc2").unbind().bind("click", function () {
                            $(".cjbox2").hide();
                            window.location.reload();
                        });
                        for (var i = 0; i < list.length; i++) {
                            $($(".cjcontent2_1_2_1_2")[i]).attr("src", list[i].cover);
                        }
                    }
                } else if (d.status == 3) {
                    //余额不足
                    if (playtype.type == 1) {
                        //抽1次
                        $(".rechargecontent_2").addClass("rechargecontent_2center");
                        $(".rechargecontent_3").hide();
                        if ($('.yhj_1y_num').text() > 0) {
                            $('#pay_money').val(money - 1);
                            $(".rechargecontent_2").html("<span style='color:#f1bb00;'>" + (parseInt(money)-1) + "元</span>");

                        }else{
                            $('#pay_money').val(money);
                            $(".rechargecontent_2").html("<span style='color:#f1bb00;'>" + money + "元</span>");

                        }
                        showRechargeBox();
                    } else {
                        //抽11次

                        $(".rechargecontent_2").addClass("rechargecontent_2center");
                        $(".rechargecontent_3").hide();
                        if ($('.yhj_5y_num').text() > 0) {
                            $('#pay_money').val(money - 5);
                            $(".rechargecontent_2").html("<span style='color:#f1bb00;'>" + (parseInt(money)-5) + "元</span>");
                        }else{
                            $('#pay_money').val(money);
                            $(".rechargecontent_2").html("<span style='color:#f1bb00;'>" + money + "元</span>");
                        }
                        showRechargeBox();
                    }
                } else {
                    alert1(d.msg);
                }
            }
        });
    }

    //渲染背包
    function renderBackpack() {
        $(".backpackbox").show();
        $.ajax({
            type: 'get',
            url: '/index/index/goodsList',
            dataType: 'json',
            async: false,
            success: function (data) {
                if (data.status === 1 && data.msg.length) {
                    var list = data.msg;
                    $(".bcontent").html("");
                    for (var i = 0; i < list.length; i++) {
                        var tone = list[i];
                        var createTime = tone.create_time;
                        var itemName = tone.goods_name;
                        var money = tone.money;


                        var box = '<div class="btitle btr" data-id="' + tone.id + '">' +
                            '<div class="btd_1">' + createTime + '</div>' +
                            '<div class="btd_2">' + itemName + '</div>' +
                            '<div class="btd_3">' + money + '</div>' +
                            '<div class="btd_4"> ' +
                            '-' +
                            // '<a class="btn recharge-qb-btn" href="javascript:;">充值</a>' +
                            // '<a class="btn single-sell-btn" href="javascript:;">出售</a>' +
                            '</div>' +
                            '</div>';
                        $(".bcontent").append(box);
                    }
                }
            }
        });
    }

    //出售
    // function allSell() {
    //     if (!$('.bcontent .btitle').length) {
    //         alert1("背包没有物品");
    //         return false;
    //     }
    //     $.ajax({
    //         type: 'post',
    //         url: '/index/index/discount',
    //         traditional: true,// 这里设置为true
    //         dataType: "json",
    //         success: function (d) {
    //             if (d.status == 1) {
    //                 $('.bcontent .btitle').empty();
    //                 alert(d.msg, "若钱包显示未到账，请刷新页面后重试。", function () {
    //                     window.location.reload();
    //                 });
    //             } else {
    //                 alert1(data.msg);
    //             }
    //         }
    //     });
    // }

    //取出
    // function takeOut(type, id, that) {
    //     if (!$('.bcontent .btitle').length) {
    //         alert1("背包中没有物品待取出");
    //         return false;
    //     }
    //     var data = null;
    //     if (type == 1) {
    //         data = '';
    //     } else {
    //         data = {id: id};
    //     }
    //     $.ajax({
    //         type: 'post',
    //         url: '/tianhong/order/rechangeQb',
    //         traditional: true,// 这里设置为true
    //         data: data,
    //         dataType: "json",
    //         success: function (d) {
    //             if (d.status == 1) {
    //                 if (type == 1) {
    //                     $('.bcontent').empty();
    //                 } else {
    //                     that.parents('.btitle').remove()
    //                 }
    //                 alert(d.msg, "", function () {
    //                     window.location.reload();
    //                 });
    //             } else {
    //                 alert1(d.msg);
    //             }
    //         }
    //     });
    // }

    //显示充值盒子
    function showRechargeBox() {
        $(".rechargebox").show();
        $(".rechargezzc").unbind().bind("click", function () {
            $(".rechargebox").hide();
            doCheck = false;
        });
        $(".rechargebtn").unbind().bind("click", function () {
            $(".rechargebox").hide();
            doCheck = false;
        });
        // rechargeFn();
    }



    //充值请求，生成二维码

    // function rechargeFn() {
    //     var data = {
    //         distributor: $('input[name=distributor]').val(),
    //         game_type: $('input[name=game_type]').val(),
    //         pay_money: $('#pay_money').val(),
    //         type: $('.rechargecontent_5_choosed').attr('data-id')
    //     };
    //     $.ajax({
    //         type: 'post',
    //         url: '/index/pay/index',
    //         data: data,
    //         dataType: 'json',
    //         beforeSend: function () {
    //             $('.code-img').attr('src', '/static/PC/image/index/loading.gif').css('background', '#000');
    //         },
    //         success: function (d) {
    //             if (d) {
    //                 doCheck = true;
    //                 $('.code-img').attr('src', '/index/pay/qrcode/text/' + d.qr_url);
    //                 if (payTimer) {
    //                     clearInterval(payTimer);
    //                 }
    //                 order_sn = d.order_sn;
    //                 if (d.order_sn) {
    //                     payTimer = setInterval(payStatusFn, 1000);
    //                 }
    //             }
    //         }
    //     })
    // }

    //充值状态监测
    // function payStatusFn() {
    //     $.ajax({
    //         type: 'post',
    //         url: '/index/pay/checkOrder',
    //         data: {order_sn: order_sn},
    //         dataType: 'json',
    //         success: function (d) {
    //             if (d.status == 1) {
    //                 $(".rechargebtn").click();
    //                 clearInterval(payTimer);
    //                 alert("充值成功！", "", function () {
    //                     setTimeout(function () {
    //                         window.location.reload();
    //                     }, 1000);
    //                 });

    //             }
    //         }
    //     })
    // }


    function alert1(msg) {
        $(".alertcontent_3").html(msg);
        $(".alertcontent_4").html("");
        $(".alertbox").show();
        $(".alertcontent_5").unbind().bind("click", function () {
            $(".alertbox").hide();
        });
    }

    function alert2(msg, bz) {
        $(".alertcontent_3").html(msg);
        $(".alertcontent_4").html(bz);
        $(".alertbox").show();
        $(".alertcontent_5").unbind().bind("click", function () {
            $(".alertbox").hide();
        });
    }

    function alert(msg, bz, callback) {
        $(".alertcontent_3").html(msg);
        $(".alertcontent_4").html(bz);
        $(".alertbox").show();
        $(".alertcontent_5").unbind().bind("click", function () {
            $(".alertbox").hide();
            callback();
        });
    }
    function alert4(msg,  callback) {
        $('.alertcontent_2').css({'background-position': '-122px -58px'})
        $(".alertcontent_3").html(msg).css({'font-size': '26px','line-height': '1.4'})
        $(".alertcontent_4").html('');
        $(".alertbox").show();
        $(".alertcontent_5").unbind().bind("click", function () {
            $(".alertbox").hide();
            callback();
        });
    }

});