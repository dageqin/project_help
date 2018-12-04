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
