var $getCode = $('#getCode');
var $submit = $('#submit');
var bOk = true;
var myReg = /^[1][3|4|5|6|7|8|9][0-9]{9}$/;
var countdown = 60;

//倒计时
function setTime() {
    if (countdown == 0) {
        $getCode.css('disabled', false);
        $getCode.css('background', '#FCD204');
        $getCode.text('获取验证码');
        countdown = 60;
        return false;
    } else {
        $getCode.css('background', '#e6e6e6');
        $getCode.css('disabled', true);
        $getCode.text("重新发送(" + countdown + ")");
        countdown--;
    }
    setTimeout(function() {
        setTime();
    },1000);
}
//get Code
$getCode.on('tap', function () {
    var phoneNum = $('#phoneNum').val();
    if (!phoneNum) {
        alert("请输入手机号码!");
        return;
    }
    if (!(myReg.test(phoneNum))) {
        alert("请输入有效的手机号码!");
        return;
    }
    setTime();
    //获取验证码接口
    $.ajax({
        type: "post",
        url: "/login/getsmsCode",
        data: {"phoneNum": phoneNum},
        dataType: 'json',
        contentType: 'application/json',
        success: function (res) {
            console.log(res);
            if (!res) return;
            if (res.code != 200) {
                alert(res.desc);
                return;
            }
        },
        error: function (err) {
            alert(err);
        }
    })
});

/*领取红包*/
var isSubmit = false;
$submit.on('tap', function (e) {
    e.preventDefault();//阻止form表单默认提交
    var name = $.trim($("#userName").val());
    if(!isNotNull(name)){
        alert('请填写用户名!');
         return;
    }
    var reqData = window.location.href.queryURLParameter();
    var helpUserId = reqData.helpUserId;
    $("#helpUserId").val(helpUserId);
    $submit.css('background', '#e6e6e6');
    if(!isSubmit){
        isSubmit = true;
        $.ajax({
            type: "post",
            url: "/h5/h5Regester",
            data: $("#formInfo").serialize(),
            dataType: 'json',
            contentType: 'application/json',
            success: function (res) {
                console.log(res);
                if(!res) return;
                if(res.code == 600){
                    alert('验证码错误！');
                    isSubmit = false;
                    $submit.css('background', '#FCD204');
                    return;
                }else if(res.code == 100){
                    alert('验证码已过期！');
                    isSubmit = false;
                    $submit.css('background', '#FCD204');
                    return;
                }else {
                    if(res.data == '0.0'){
                        $('#repeat').css('display','block');
                        $('#first').css('display','none');
                    }else{
                        $('#repeat').css('display','none');
                        $('#first').css('display','block');
                        $("#money").html(res.data);
                    }
                    $('#redbag_area').css('display','block');
                    setTimeout(function(){
                        //验证成功，启动app，否则跳到下载页面
                        window.location.href = './download.html';
                    },5000);
                }
            },
            error: function (err) {
                alert(err);
                isSubmit = false;
                $submit.css('background', '#FCD204');
            }
        })
    }else{
        $submit.css('background', '#e6e6e6');
        return false;
    }

});

//获取名字
var $phone = $("#phoneNum");
var $userName = $("#userName");
$phone.on('keyup', function(e){
    e = e || window.event;
    var val = this.value;
    if(val.length == 11){
        $.ajax({
            type: "post",
            url: "/h5/getUsersName",
            data: {
                "phoneNumber": val
            },
            dataType: 'json',
            contentType: 'application/json',
            success: function (res) {
                console.log(res);
                if(!res || !res.users || !res.users.name) {
                    $userName.val('');
                    $userName.removeAttr('readonly');
                    return;
                }
                var name = res && res.users && res.users.name;
                $userName.val(name);
                $userName.attr('readonly', true);
            },
            error: function (err) {
                alert(err);
            }
        })
    }
});

$(function(){
    var reqData = window.location.href.queryURLParameter();
    console.log(reqData);
    var helpUserName = decodeURI(reqData.helpUserName);
    if(helpUserName){
        $("#helpUserName").html(helpUserName);
    }
});

function isNotNull(input) {
    if(input !='' && input != null && input != undefined){
        return true;
    }else{
        return false;
    }
}



