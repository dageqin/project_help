//ios 安卓下载
$(function () {
    var u = navigator.userAgent;
    var ua = navigator.userAgent.toLowerCase();
    //android终端
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;
    //ios终端
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    $("#go").bind('touchstart', function (e) {
        e ? e.stopPropagation() : event.cancelBubble = true;
        //启动app
        var ua = window.navigator.userAgent.toLowerCase();
        if (navigator.userAgent.match(/(iPhone|iPod|iPad);?/i) || isiOS) {
            //iPhone|iPod|iPad浏览器 or ios终端
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
            window.location = "suyou://";
        } else if (navigator.userAgent.match(/android/i) || isAndroid) {
            //安卓浏览器 or android终端
            try {
                //调用andriod启动页地址
                window.location = "";
                setTimeout(function () {
                    window.location = "https://a.app.qq.com/o/simple.jsp?pkgname=com.app.bgm"; //android下载页面
                }, 50);
            } catch (e) {
            }
        }
    });
});
