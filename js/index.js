$(function(){
    var lunboindex = 3;
    var lunbotimeindex = 0;
    var lunbotimeout = 3000;//3000为一轮
    var lunbototal = 0;
    var myDate = new Date();
    var hour = myDate.getHours();
    var min = myDate.getMinutes();
    if(min > 5){
        min = min-3;
    }
    var timeStr = "["+hour + ":" + min + "]";
    $(".otheruserone_2_3").html(timeStr);
    getGameItems(goods_data);

    bindQtwjDh();
    //其它玩家信息动画
    function bindQtwjDh(){
        var playindex = 1;
        var playstep = 1;
        var playmaxindex = 4;
        var step = 308;

        doPalyQtwj();
        //执行定时动画
        function doPalyQtwj(){
            setTimeout(function(){
                if(playindex > playmaxindex){
                    playindex = 1;
                }
                $($(".otheruserlist")[0]).animate({
                    marginTop : "-"+step+"px"
                },"normal",function(){
                    var box = $(".otheruserlist[data-index='"+playindex+"']");
                    box.css("margin-top","0px");
                    $(".otheruserinfo").append(box);
                    playindex++;
                    playstep++;
                    doPalyQtwj();
                });
            },3000);

        }
    }
    bindMd();
    //导航锚点平滑过渡效果
    function bindMd(){
        $('a[href*=#],area[href*=#]').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var $target = $(this.hash);
                $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
                if ($target.length) {
                    var targetOffset = $target.offset().top;
                    $('html,body').animate({
                        scrollTop: targetOffset
                    },1000);
                    return false;
                }
            }
        });
        $(".dhbox_x").click(function(){
            $(".active1").removeClass("active1");
            $(".active2").removeClass("active2");
            $(this).find(".dhbox_1_1").addClass("active1");
            $(this).find(".dhbox_1_2").addClass("active2");
        });
    }

    //获取奖励信息
    function getGameItems(list){
        for(var i = 0; i < list.length; i++){
            var obj = list[i];
            var fileUrl = obj.img;
            var addC = "";
            var bgurl = "../images/goods-bg-xl.png";
            if(i == 0){
                addC = "hc3";
            }else if(i == 1){
                addC = "hc2";
            }else if(i == 2){
                addC = "hc1";
                bgurl = "../images/goods-bg-xl.png";
            }else if(i == 3){
                addC = "hc2";
            }else if(i == 4){
                addC = "hc3";
            }
            var showing = "";
            if(i < 5){
                showing = "showing"+(i+1);
            }else{
                showing = "showingr";
            }
            $(".lunbobox").append("<div class='gameitemboxs "+addC+" "+showing+" ' data-index='"+(i+1)+"'><img class='imgbg' alt='' src='"+bgurl+"'><img class='imgfile' alt='' src='"+fileUrl+"'></div>");
            $($(".jclbcontent_2_1_2")[i]).attr("src",fileUrl);
        }
        bindLunbo(list.length);
    }

    //开启轮播事件
    function bindLunbo(total){
        lunbototal = total;
        $(".lastpagebtn").unbind().bind("click",function(){
            tolastlunbo();
        });
        $(".nextpagebtn").unbind().bind("click",function(){
            tonextlunbo();
        });
        //自动轮播
        // autoLunbo();
        //上一页
        function tolastlunbo(){
            lunboindex = dolunbo(lunboindex,-1);
        }
        //下一页
        function tonextlunbo(){
            lunboindex = dolunbo(lunboindex,1);
        }

        //轮播  播放ID,方向   1:向左  -1:向右
        function dolunbo(index,dir){
            lunbotimeindex = 0;
            //需要移除的index
            var removeindex = 0;
            var addindex = 0;
            //需要显示的index
            var showindex;
            if(1 == dir){
                if(index == 2){
                    removeindex = lunbototal;
                }else if(index == 1 ){
                    removeindex = lunbototal - 1;
                }else{
                    removeindex = index - 2;
                }
                if(index == lunbototal){
                    showindex = 1;
                }else{
                    showindex = index + 1;
                }
                $(".gameitemboxs[data-index='"+removeindex+"']").addClass("showingl");
            }else{
                if(index == lunbototal){
                    removeindex = 2;
                }else if(index == lunbototal-1 ){
                    removeindex = 1;
                }else{
                    removeindex = index + 2;
                }
                if(1 == index){
                    showindex = lunbototal;
                }else{
                    showindex = index - 1;
                }
                $(".gameitemboxs[data-index='"+removeindex+"']").addClass("showingr");
            }
            if(1 == dir){
                if(showindex == lunbototal){
                    addindex = 2;
                }else if(showindex == (lunbototal - 1)){
                    addindex = 1;
                }else{
                    addindex = showindex + 2;
                }
            }else{
                if(showindex == 1){
                    addindex = lunbototal-1;
                }else if(showindex == 2){
                    addindex = lunbototal;
                }else{
                    addindex = showindex - 2;
                }
            }
            $(".gameitemboxs[data-index='"+addindex+"']").removeClass("showingl");
            $(".gameitemboxs[data-index='"+addindex+"']").removeClass("showingr");
            var q1 = showindex-1;
            var q2 = showindex - 2;
            var h1 = showindex + 1;
            var h2 = showindex + 2;
            if(showindex == 1){
                q1 = lunbototal;
                q2 = lunbototal-1;
            }else if(showindex == 2){
                q2 = lunbototal;
            }else if(showindex == lunbototal){
                h1 = 1;
                h2 = 2;
            }else if(showindex == (lunbototal-1)){
                h2 = 1;
            }
            $(".hc1").removeClass("hc1");
            $(".hc2").removeClass("hc2");
            $(".hc3").removeClass("hc3");
            $(".showing1").removeClass("showing1");
            $(".showing2").removeClass("showing2");
            $(".showing3").removeClass("showing3");
            $(".showing4").removeClass("showing4");
            $(".showing5").removeClass("showing5");
            $(".gameitemboxs[data-index='"+showindex+"']").addClass("hc1");
            $(".gameitemboxs[data-index='"+q1+"']").addClass("hc2");
            $(".gameitemboxs[data-index='"+h1+"']").addClass("hc2");
            $(".gameitemboxs[data-index='"+q2+"']").addClass("hc3");
            $(".gameitemboxs[data-index='"+h2+"']").addClass("hc3");

            $(".gameitemboxs[data-index='"+q2+"']").addClass("showing1");
            $(".gameitemboxs[data-index='"+q1+"']").addClass("showing2");
            $(".gameitemboxs[data-index='"+showindex+"']").addClass("showing3");
            $(".gameitemboxs[data-index='"+h1+"']").addClass("showing4");
            $(".gameitemboxs[data-index='"+h2+"']").addClass("showing5");
            $(".gameitemboxs").find(".imgbg").attr("src","../images/goods-bg-xl.png");
            $(".gameitemboxs[data-index='"+showindex+"']").find(".imgbg").attr("src","/static/PC/image/lol/goods-bg-l.png");
            return showindex;
        }

        //自动轮播
        function autoLunbo(){
            if(lunbotimeout == lunbotimeindex){
                // $(".nextpagebtn").stopPropagation();
                $(".nextpagebtn").click();
                autoLunbo();
            }else{
                setTimeout(function(){
                    lunbotimeindex += 100;
                    autoLunbo();
                },100);
            }
        }
    }


});