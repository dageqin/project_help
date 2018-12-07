var $getCode = $('#getCode');
var $submit = $('#submit');
var bOk = true;
var myReg=/^[1][3|4|5|6|7|8][0-9]{9}$/;
$getCode.on('tap', function () {
    var phoneNum = $('#phoneNum').val();
    if(!phoneNum){
        alert("请输入手机号码");
        return;
    }
    if (!(myReg.test(phoneNum))) {
        alert("请输入有效的手机号码");
        return;
    }
    $getCode.css('background', bOk?'#e6e6e6':'#FCD204');
    $submit.css('background', bOk?'#e6e6e6':'#FCD204');
    bOk = !bOk;
});

/*前往帮忙*/
$submit.on('tap', function(){
    // event.preventDefault();//阻止form表单默认提交
    $.ajax({
        type: "post",
        url: "/api/user/register",
        data: $submit.serialize(),
        success: function(res){
            console.log(res);
            window.location.href = './download.html';
        },
        error: function(err){
            alert(err);
        }
    })
});

//启动app
var openApp = function(){

};
$(function () {
    var ua = window.navigator.userAgent.toLowerCase();
    //微信
    if(ua.match(/MicroMessenger/i) == 'micromessenger'){
        //微信浏览器绑定事件
        /*$(".app").bind('click', function (event) {
         window.location.href = '';
         })*/
    }else{//非微信浏览器
        if (navigator.userAgent.match(/(iPhone|iPod|iPad);?/i)) {   //iPhone|iPod|iPad浏览器
            $(".app").bind('click', function (event) {
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
            })
        }else if (navigator.userAgent.match(/android/i)) {  //安卓浏览器
            $(".app").bind('click', function (event) {
                var state = null;
                try {
                    window.location = 'appshare://bluemobi.cn.esport'; //调用andriod启动页地址
                    setTimeout(function(){
                        window.location= "download.html"; //android下载页面

                    },500);
                } catch(e) {}
            })
        }

    }
})
