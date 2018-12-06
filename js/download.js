/*ios 安卓跳转*/
$(function(){
    var u = navigator.userAgent;
    var ua = navigator.userAgent.toLowerCase();
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    if(ua.match(/MicroMessenger/i)=="micromessenger") {   //微信内置浏览器+应用宝链接
        /*安卓手机用微信弹框*/
        $(".con").click(function(e) {
            e?e.stopPropagation():event.cancelBubble = true;
        });

        /*点击首页任何地方 有提示框*/
        $(".download").click(function () {
            $(".share").show();
            $(".main").css("overflow-y","hidden");
            $(".con").click(function(e) {
                e?e.stopPropagation():event.cancelBubble = true;
            });

            $(".black").click(function() {
                $(".share").hide();
            });

        });

        $(".black").click(function() {
            $(".share").hide();
        });


        /* $(".openApp").bind('touchstart', function (event) {
         event.preventDefault();
         window.location.href='download.html'
         });*/
        /*$(".go").bind('touchstart', function (event) {
         // window.location.href='http://tstatics.iyuwan.com/files/apk/201605/Iyuwan.apk'
         window.location.href='http://tstatics.iyuwan.com/files/apk/201605/Iyuwan.apk'
         });*/



    }else{
        if(isiOS){
            $(".go").bind('touchstart', function (event) {
                window.location.href='http://itunes.apple.com/app/1219885292'
            });
            //window.location.href='http://itunes.apple.com/app/1219885292'
        }else if(isAndroid){
            $(".go").bind('touchstart', function (event) {
                //window.location.href='http://tstatics.iyuwan.com/files/apk/201605/Iyuwan.apk'
                window.location.href='http://tstatics.iyuwan.com/files/apk/201605/Iyuwan.apk'
            });
        }else{  //PC 端
            $(".go").click(function(){
                // window.location.href='http://tstatics.iyuwan.com/files/apk/201605/Iyuwan.apk'
                window.location.href='http://tstatics.iyuwan.com/files/apk/201605/Iyuwan.apk'
            });
        }

    }

});