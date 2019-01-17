var $getCode = $('#getCode');
var $submit = $('#submit');
var bOk = true;
var myReg = /^[1][3|4|5|6|7|8|9][0-9]{9}$/;

var beGray = function(){
    $getCode.css('background', '#e6e6e6');
    $submit.css('background', '#e6e6e6');
    $getCode.css('disabled', true);
    $submit.css('disabled', true);
};

var beNormal = function(){
    $getCode.css('background', '#FCD204');
    $submit.css('background', '#FCD204');
    $getCode.css('disabled', false);
    $submit.css('disabled', false);
};

//get Code
$getCode.on('tap', function () {
    var phoneNum = $('#phoneNum').val();
    if (!phoneNum) {
        alert("请输入手机号码");
        return;
    }
    if (!(myReg.test(phoneNum))) {
        alert("请输入有效的手机号码");
        return;
    }
    beGray();

    // $getCode.css('background', bOk?'#e6e6e6':'#FCD204');
    // $submit.css('background', bOk?'#e6e6e6':'#FCD204');
    // bOk = !bOk;
    //获取验证码接口
    $.ajax({
        type: "post",
        url: "../login/getsmsCode",
        data: JSON.stringify({"phoneNum": phoneNum}),
        success: function (res) {
            console.log(res);
            if (!res) return;
            if (res.code != 200) {
                alert(res.desc);
                return;
            }
            //获取验证码成功
            beNormal();
            // window.location.href = './download.html';
            // bOk = !bOk;
        },
        error: function (err) {
            alert(err);
            beNormal();
        }
    })
});

/*前往帮忙*/
$submit.on('tap', function (e) {
    e.preventDefault();//阻止form表单默认提交
    var helpUserId = 23;
    $("#helpUserId").val(helpUserId);
    console.log($("#formInfo").serialize());
    $.ajax({
        type: "post",
        url: "../login/checkRegister",
        data: $("#formInfo").serialize(),
        success: function (res) {
            console.log(res);
            if(!res) return;
            if(res.code == 600){
                alert('验证码错误！');
                return;
            }else if(res.code == 100){
                alert('验证码已过期！');
                return;
            }else {
                alert(res.desc);
                return;
            }
            //验证成功，启动app，否则跳到下载页面
            window.location.href = './download.html';
        },
        error: function (err) {
            alert(err);
        }
    })
});


