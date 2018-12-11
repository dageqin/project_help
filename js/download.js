/*ios 安卓跳转*/
$(function () {
    var u = navigator.userAgent;
    var ua = navigator.userAgent.toLowerCase();
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    $("#go").bind('touchstart', function (e) {
        e ? e.stopPropagation() : event.cancelBubble = true;
        if (isAndroid) {
            alert("是在安卓手机的微信浏览器里");
            window.location.href = "https://app.autohome.com.cn/app/topic/common/share_wenzhang_top/index.html?pvareaid=3125103";
        } else if (isiOS) {
            alert("是在ios手机里的微信浏览器里");
            window.location.href = "https://a.app.qq.com/o/simple.jsp?pkgname=com.cubic.autohome&amp;ckey=CK1286547003996";
        }
    });



   /* if (ua.match(/MicroMessenger/i) == "micromessenger") {   //微信内置浏览器+应用宝链接
        /!*安卓手机用微信弹框*!/
        $(".con").click(function (e) {
            e ? e.stopPropagation() : event.cancelBubble = true;
        });

        /!*点击首页任何地方 有提示框*!/
        $(".download").click(function () {
            $(".share").show();
            $(".main").css("overflow-y", "hidden");
            $(".con").click(function (e) {
                e ? e.stopPropagation() : event.cancelBubble = true;
            });

            $(".black").click(function () {
                $(".share").hide();
            });

        });

        $(".black").click(function () {
            $(".share").hide();
        });


        /!* $(".openApp").bind('touchstart', function (event) {
         event.preventDefault();
         window.location.href='download.html'
         });*!/
        /!*$(".go").bind('touchstart', function (event) {
         window.location.href='http://tstatics.iyuwan.com/files/apk/201605/Iyuwan.apk'
         });*!/


    } else {
        if (isiOS) {
            $(".go").bind('touchstart', function (event) {
                window.location.href = 'http://itunes.apple.com/app/1219885292'
            });
            //window.location.href='http://itunes.apple.com/app/1219885292'
        } else if (isAndroid) {
            $(".go").bind('touchstart', function (event) {
                //window.location.href='http://tstatics.iyuwan.com/files/apk/201605/Iyuwan.apk'
                window.location.href = 'http://tstatics.iyuwan.com/files/apk/201605/Iyuwan.apk'
            });
        } else {  //PC 端
            $(".go").click(function () {
                // window.location.href='http://tstatics.iyuwan.com/files/apk/201605/Iyuwan.apk'
                window.location.href = 'http://tstatics.iyuwan.com/files/apk/201605/Iyuwan.apk'
            });
        }
    }*/

});

//启动app
$(function () {
    var ua = window.navigator.userAgent.toLowerCase();
    if (navigator.userAgent.match(/(iPhone|iPod|iPad);?/i)) {
        //iPhone|iPod|iPad浏览器
        // $("#go").bind('touchstart', function (event) {
            alert('苹果浏览器');
            var loadDateTime = new Date();
            window.setTimeout(function () {
                var timeOutDateTime = new Date();
                if (timeOutDateTime - loadDateTime < 5000) {
                    window.location = "http://itunes.apple.com/app/1219885292";//ios下载页面
                } else {
                    window.close();
                }
            }, 25);
            window.location = "YuWan://com.YuWan.DianJingPingTai";    //调用ios启动页地址
        // })
    } else if (navigator.userAgent.match(/android/i)) {  //安卓浏览器
        // $("#go").bind('touchstart', function (event) {
            alert('安卓浏览器');
            var state = null;
            try {
                window.location = 'appshare://bluemobi.cn.esport'; //调用andriod启动页地址
                setTimeout(function () {
                    window.location = "download.html"; //android下载页面
                }, 500);
            } catch (e) {
            }
        // })
    }

    //微信
    // if (ua.match(/MicroMessenger/i) == 'micromessenger') {
        //微信浏览器绑定事件
        // $("#go").bind('touchstart', function (event) {
        //     alert('微信内置');
        //     window.location.href = '';
        // })
    // } else {//非微信浏览器
    // }
});