/**
 * Created by dell on 2019/4/11.
 */
//ios 安卓下载
$(function () {
    var u = navigator.userAgent;
    var ua = navigator.userAgent.toLowerCase();
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    $("#go").bind('touchstart', function (e) {
        console.log('go!!!!!!!!!!!!');
        e ? e.stopPropagation() : event.cancelBubble = true;
        /*下载*/
        /*if (isAndroid) {
         console.log("是在安卓手机的微信浏览器里");
         window.location.href = "https://a.app.qq.com/o/simple.jsp?pkgname=com.app.bgm";
         } else if (isiOS) {
         console.log("是在ios手机里的微信浏览器里");
         window.location.href = "https://itunes.apple.com/cn/app/%E7%B4%A0%E5%8F%8B/id1445127501?mt=8";
         }*/
        //启动app
        var ua = window.navigator.userAgent.toLowerCase();
        if (navigator.userAgent.match(/(iPhone|iPod|iPad);?/i) || isiOS) {
            //iPhone|iPod|iPad浏览器
            var loadDateTime = new Date();
            window.setTimeout(function () {
                var timeOutDateTime = new Date();
                if (timeOutDateTime - loadDateTime < 5000) {
                    //ios下载页面
                    window.location = "https://itunes.apple.com/cn/app/%E7%B4%A0%E5%8F%8B/id1445127501?mt=8";
                } else {
                    window.close();
                }
            }, 25);
            //调用ios启动页地址
            window.location = "YuWan://com.YuWan.DianJingPingTai";
        } else if (navigator.userAgent.match(/android/i) || isAndroid) {  //安卓浏览器
            try {
                //调用andriod启动页地址
                window.location = "";
                console.log('an启动');
                setTimeout(function () {
                    console.log('an下载！！！！！');
                    window.location = "https://a.app.qq.com/o/simple.jsp?pkgname=com.app.bgm"; //android下载页面
                }, 50);
            } catch (e) {
            }
        }
    });
});

//启动app
/*
 $(function () {
 var ua = window.navigator.userAgent.toLowerCase();
 if (navigator.userAgent.match(/(iPhone|iPod|iPad);?/i)) {
 //iPhone|iPod|iPad浏览器
 var loadDateTime = new Date();
 window.setTimeout(function () {
 var timeOutDateTime = new Date();
 if (timeOutDateTime - loadDateTime < 5000) {
 //ios下载页面
 window.location = "https://itunes.apple.com/cn/app/%E7%B4%A0%E5%8F%8B/id1445127501?mt=8";
 } else {
 window.close();
 }
 }, 25);
 //调用ios启动页地址
 window.location = "YuWan://com.YuWan.DianJingPingTai";
 } else if (navigator.userAgent.match(/android/i)) {  //安卓浏览器
 try {
 //调用andriod启动页地址
 window.location = "";
 setTimeout(function () {
 window.location = ""; //android下载页面
 }, 500);
 } catch (e) {
 }
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
 });*/

