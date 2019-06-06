var res = {
    "code": 200,
    "desc": null,
    "data": {
        "birthday": 24,
        "commentSize": 0,
        "publishTime": "20小时前",
        "publishTitle": "急寻失踪的河南9岁男童",
        "images": ["http://yaobangma.com/1_1559637504_iosPush.png",
            "https://bgm-1258164185.cos.ap-shanghai.myqcloud.com/bgm/1547552204450542336",
            "https://bgm-1258164185.cos.ap-shanghai.myqcloud.com/bgm/1547552248472145767",
            "https://bgm-1258164185.cos.ap-shanghai.myqcloud.com/bgm/1547552248472145767",
            "https://bgm-1258164185.cos.ap-shanghai.myqcloud.com/bgm/1547552248472145767",
            "https://bgm-1258164185.cos.ap-shanghai.myqcloud.com/bgm/1547552248472145767",
            "https://bgm-1258164185.cos.ap-shanghai.myqcloud.com/bgm/1547552248472145767",
            "https://bgm-1258164185.cos.ap-shanghai.myqcloud.com/bgm/1547552248472145767",
            "https://bgm-1258164185.cos.ap-shanghai.myqcloud.com/bgm/1547552248472145767",
            "https://bgm-1258164185.cos.ap-shanghai.myqcloud.com/bgm/1547552248472145767"],
        "personalLabel": ["靠谱","随性"],
        "publishContent": "张宇涛，男，9岁，身高约123cm，于2018年12月10日在河南省安阳市都里镇李珍村失踪。孩子出生在李珍村，智力有些问题，未上学，平时不爱说话。2018年12月10日下午3点左右，孩子独自出门去外面玩，到了吃晚饭时间（大概下午5-6点左右）家人找孩子吃饭时不见了孩子，在村里和附近都找遍了也没找到\n\n孩子失踪时身穿蓝色棉袄，浅蓝色裤子，脚穿一双棉鞋。现在家人万分着急！\n\n\n宝贝快回来,你的家人都不会怪你。有孩子任何消息的知情者可以在线联系我们提供线索，或者拨打宝贝回家求助站电话：0435-3338090（吉林通化）\n\n如果有陌生人收留他。有什么要求也可以直接联系我们。只要孩子安全回来，一切可以既往不咎。\n\n你的随手一转，也许就是这家人团圆的希望\n恳请大家帮忙转发一下，让这家人在新的一年能够团圆过年。",
        "industry": "技术员",
        "userName": "宝贝回家",
        "userId": "26b374079fa1400e8377726883a99011",
        "publishId": "971d959d9ddc4cbdbf2885372cb1b549",
        "publishCity": "河南",
        "userHead": "https://bgm-1258164185.cos.ap-shanghai.myqcloud.com/bgm/1547463546150814773",
        "cityName": "吉林市",
        "publishForwordCount": 1,
        "gender": 2,
        "publishTypeIcon": 9,
        "helpUserHead": "./images/girl.jpg",
        "helpUserName": "kiki ge",
        "pstate": false, //是否公益
        "followSize": 10, //公益次数
        "itisRedMoney": true, //显示红包
        "itisPais":1,//是否有偿 1是 2否
        "listSize:":30,
        "list":[{
            usersHead:'./images/girl.jpg',
            usersName:'kiki',
            money:0.02
        },{
            usersHead:'./images/girl.jpg',
            usersName:'lili',
            money:0.01
        },{
            usersHead:'./images/girl.jpg',
            usersName:'kiki',
            money:0.02
        },{
            usersHead:'./images/girl.jpg',
            usersName:'lili',
            money:0.01
        },{
            usersHead:'./images/girl.jpg',
            usersName:'kiki',
            money:0.02
        },{
            usersHead:'./images/girl.jpg',
            usersName:'lili',
            money:0.01
        }]
    }
};
renderDOM(res);


function renderDOM(res, helpId, publishId) {
    var dataList = res && res.data;
    var content = dataList.publishContent;
    var contentLen = content.length;
    var imgLen = dataList.images && dataList.images.length;
    var listLen = dataList.list && dataList.list.length;
    var personLable = dataList.personalLabel;
    //多个个人标签显示一个 数组
    if(personLable.length > 1){
        dataList.personalLabel = dataList.personalLabel[0];
    }
    //对应的标题图标
    var icon = dataList.publishTypeIcon;
    switch (icon) {
        case 1://找人
            dataList.publishTypeIconURL = './images/1zhaoren.png';
            break;
        case 2://办事
            dataList.publishTypeIconURL = './images/2banshi.png';
            break;
        case 3://代买
            dataList.publishTypeIconURL = './images/3daimai.png';
            break;
        case 4://救急
            dataList.publishTypeIconURL = './images/4jiuji.png';
            break;
        case 5://转让
            dataList.publishTypeIconURL = './images/5zhuanrang.png';
            break;
        case 6://搭车
            dataList.publishTypeIconURL = './images/6dache.png';
            break;
        case 7://提问
            dataList.publishTypeIconURL = './images/7tiwen.png';
            break;
        case 8://其他
            dataList.publishTypeIconURL = './images/8qita.png';
            break;
        case 9://生命抽
            dataList.publishTypeIconURL = './images/9shengmingchou.png';
            break;
        case 10://寻亲
            dataList.publishTypeIconURL = './images/10xunqin.png';
            break;
        case 11://助学
            dataList.publishTypeIconURL = './images/11zhuxue.png';
            break;
        // default:
    }
    //渲染男女图标
    var gender = dataList.gender;
    var isPais = dataList.itisPais;
    var isRedbag = dataList.itisRedMoney;
    var helpUserName = dataList.helpUserName;
    //名称取前三个
    //英文,数字,空格
    if(/^[0-9A-Za-z]+(\s[0-9A-Za-z]+)*$/.test(helpUserName)){
        if(helpUserName.length > 7){
            dataList.helpUserName = helpUserName.slice(0, 7);
        }
    }else{
        if(helpUserName.length > 3){
            dataList.helpUserName = helpUserName.slice(0, 3);
        }
    }

    switch (gender) {
        case 1: //男
            dataList.gender = './images/nan.png';
            break;
        case 2: //女
            dataList.gender = './images/nv.png';
            break;
        default:
            dataList.gender = './images/nv.png';
    }
    //最多显示9张图
    if(imgLen > 9){
        dataList.images.splice(9);
    }
    //最多显示4个人
    if(listLen > 4){
        dataList.list.splice(4);
    }

    var template = $('#matchTemplate').html();
    var result = ejs.render(template, {dataList: dataList});
    $(".main").html(result);


    //渲染之后才会出现dom元素
    var $showBtn = $("#allBtn");
    var $contentDetail = $('#contentDetail');
    var $content = $('#content');
    var $footer = $('#footer');
    var $contentImg = $('#contentImg');
    var $gender = $('#gender');
    var $pay = $("#pay");
    var $redbag = $("#redbag");
    var bShow = true;
    var imgShow = true;

    if(gender == 1){
        $gender.css('background-color','#56d8da');
    }else if(gender == 2){
        $gender.css('background-color','#fb8e8e');
    }
    //显示有偿
    if(isPais == 1){
        $pay.show();
    }else {
        $pay.hide();
    }
    //显示帮转红包
    if(isRedbag){
        $redbag.show();
    }else {
        $redbag.hide();
    }
    var contentHeight = $content.height();
    console.log(contentHeight);
    $footer.css('top', contentHeight - 60);
    var originHeight = $contentImg.height();
    if(imgLen == 0){
        $contentImg.height(0);
    }else if(imgLen > 3){
        var num = Math.ceil(imgLen / 3);
        if(num > 3){
            num = 3;
        }
        $contentImg.height(originHeight * num);
    }

    //控制全文显示
    // if (contentLen <= 118) {
    //     $showBtn.css('display', 'none');
    // } else {
    //     $showBtn.css('display', 'inline-block');
    //     var showText = content.slice(0, 118);
    //     //全文按钮的点击事件
    //     $showBtn.on('tap', function () {
    //         if (bShow) {
    //             $contentDetail.css('overflow', 'auto');
    //             $contentDetail.text(content);
    //         } else {
    //             $contentDetail.css('overflow', 'hidden');
    //             $contentDetail.text(showText);
    //         }
    //         h = $content.height();
    //         $footer.css('top', h - 70);
    //         bShow = !bShow;
    //         $showBtn.text(bShow ? '全文' : '收起');
    //     });
    // }

    /*图片的展开、收起*/
    // var $imageOpen = $('#imageOpen'); //展开图片按钮
    // if (imgLen <= 3) {
    //     $imageOpen.css('display', 'none');
    // } else {
    //     $imageOpen.css('display', 'inline-block');
    //     var originHeight = $contentImg.height();
    //     $imageOpen.on('tap', function () {
    //         if (imgShow) {
    //             $contentImg.css('overflow', 'auto');
    //             var num = Math.ceil(imgLen / 3);
    //             $contentImg.height(originHeight * num);
    //         } else {
    //             $contentImg.height(originHeight);
    //             $contentImg.css('overflow', 'hidden');
    //         }
    //         var h = $content.height();
    //         $footer.css('top', h - 70);
    //         imgShow = !imgShow;
    //         /*控制按钮箭头方向*/
    //         if (imgShow) {
    //             $imageOpen.css('transform', '');
    //         } else {
    //             $imageOpen.css('transform', 'rotate(180deg)');
    //         }
    //     })
    // }

    //删除无数据tag的标签
    $('.tag').forEach(function (item) {
        if (item.innerText == '') {
            $('.header_person')[0].removeChild(item);
        }
    });
    //领取红包
    $("#redBtn").on('tap', function () {
        window.location = './redbag.html?helpUserName=' + helpUserName;
    });
    //立即帮他
    $("#helpBtn").on('tap',function () {
        window.location = './login.html?helpUserId=' + helpId + '&publishId='+publishId;
    });
    //点击图片放大
    var imgsObj = $('#contentImg li img');//需要放大的图像
    console.log(imgsObj);
    if(imgsObj){
        $.each(imgsObj,function(){
            $(this).on('tap',function(){
                var imgSrc = $(this).attr('src');
                $("#bigImg").attr('src', imgSrc);
                $('.showBigImg').css('display', 'block');
                $('#showMain').css('display', 'none');
                var h = $("#bigImg").css('height');
                h = parseInt(h.slice(0,6));
                var wH = document.body.clientHeight;
                if(h >= wH){
                    $("#bigImg").css('margin-top', 0);
                }else{
                    $("#bigImg").css('margin-top', (wH - h)/2);
                }
            });
        })
    }
    $('.showBigImg').on('tap', function(){
        $('.showBigImg').css('display', 'none');
        $('#showMain').css('display', 'block');
    })
}


//接口 调取数据
$(function () {
    var reqData = window.location.href.queryURLParameter();
    console.log(reqData);
    var url = '/h5/getH5PublishDetail';
    var data = {
        publishId: reqData.publishId,
        helpUserId: reqData.helpUserId,
        helpType: reqData.helpType,
    };
    $.ajax({
        url: url,
        data: data,
        type: 'GET',
        dataType: 'json',
        contentType: 'application/json',
        success: function (res) {
            console.log(res);
            if (!res) return;
            if (res.code !== 200) {
                alert(res.desc);
                return;
            }
            renderDOM(res, reqData.helpUserId, reqData.publishId);
        }
    });
});

