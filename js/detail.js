var res = {
    "code": 200,
    "desc": null,
    "data": {
        "birthday": 24,
        "commentSize": 0,
        "publishTime": "20小时前",
        "publishTitle": "急寻失踪的河南9岁男童",
        "images": ["https://bgm-1258164185.cos.ap-shanghai.myqcloud.com/bgm/1547552248472145767", "https://bgm-1258164185.cos.ap-shanghai.myqcloud.com/bgm/1547552204450542336", "https://bgm-1258164185.cos.ap-shanghai.myqcloud.com/bgm/1547552248472145767", "https://bgm-1258164185.cos.ap-shanghai.myqcloud.com/bgm/1547552248472145767"],
        "personalLabel": "",
        "publishContent": "张宇涛，男，9岁，身高约123cm，于2018年12月10日在河南省安阳市都里镇李珍村失踪。孩子出生在李珍村，智力有些问题，未上学，平时不爱说话。2018年12月10日下午3点左右，孩子独自出门去外面玩，到了吃晚饭时间（大概下午5-6点左右）家人找孩子吃饭时不见了孩子，在村里和附近都找遍了也没找到\n\n孩子失踪时身穿蓝色棉袄，浅蓝色裤子，脚穿一双棉鞋。现在家人万分着急！\n\n\n宝贝快回来,你的家人都不会怪你。有孩子任何消息的知情者可以在线联系我们提供线索，或者拨打宝贝回家求助站电话：0435-3338090（吉林通化）\n\n如果有陌生人收留他。有什么要求也可以直接联系我们。只要孩子安全回来，一切可以既往不咎。\n\n你的随手一转，也许就是这家人团圆的希望\n恳请大家帮忙转发一下，让这家人在新的一年能够团圆过年。",
        "industry": "",
        "userName": "宝贝回家",
        "userId": "26b374079fa1400e8377726883a99011",
        "publishId": "971d959d9ddc4cbdbf2885372cb1b549",
        "publishCity": "河南",
        "userHead": "https://bgm-1258164185.cos.ap-shanghai.myqcloud.com/bgm/1547463546150814773",
        "cityName": "吉林市",
        "publishForwordCount": 1,
        "gender":2,
        "publishTypeIcon":8,
        "helpUserHead":"./images/girl.jpg",
        "helpUserName":"张三"
    }
};
renderDOM(res);

function renderDOM(res) {
    var dataList = res && res.data;
    var content = dataList.publishContent;
    var contentLen = content.length;
    var imgLen = dataList.images && dataList.images.length;
    if (contentLen > 118) {
        var showText = content.slice(0, 118);
        dataList.publishContent = showText;
    }
    //对应的标题图标
    var icon = dataList.publishTypeIcon;
    switch (icon){
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
        default:
            dataList.publishTypeIconURL = './images/8qita.png';
    }
    //渲染男女图标
    var gender = dataList.gender;
    switch (gender){
        case 1: //男
            dataList.gender='./images/nan.png';
            break;
        case 2: //女
            dataList.gender='./images/nv.png';
            break;
        default:
            dataList.gender='./images/nv.png';
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
    var bShow = true;
    var imgShow = true;

    //控制全文显示
    if (contentLen <= 118) {
        $showBtn.css('display', 'none');
    } else {
        $showBtn.css('display', 'inline-block');
        var showText = content.slice(0, 118);
        //全文按钮的点击事件
        $showBtn.on('tap', function () {
            if (bShow) {
                $contentDetail.css('overflow', 'auto');
                $contentDetail.text(content);
            } else {
                $contentDetail.css('overflow', 'hidden');
                $contentDetail.text(showText);
            }
            h = $content.height();
            $footer.css('top', h - 70);
            bShow = !bShow;
            $showBtn.text(bShow ? '全文' : '收起');
        });
    }

    /*图片的展开、收起*/
    var $imageOpen = $('#imageOpen'); //展开图片按钮
    if (imgLen <= 3) {
        $imageOpen.css('display', 'none');
    } else {
        $imageOpen.css('display', 'inline-block');
        var originHeight = $contentImg.height();
        $imageOpen.on('tap', function () {
            if (imgShow) {
                $contentImg.css('overflow', 'auto');
                var num = Math.ceil(imgLen/3);
                $contentImg.height(originHeight*num);
            } else {
                $contentImg.height(originHeight);
                $contentImg.css('overflow', 'hidden');
            }
            var h = $content.height();
            $footer.css('top', h - 70);
            imgShow = !imgShow;
            /*控制按钮箭头方向*/
            if (imgShow) {
                $imageOpen.css('transform', '');
            } else {
                $imageOpen.css('transform', 'rotate(180deg)');
            }
        })
    }

    //删除无数据tag的标签
    $('.tag').forEach(function(item){
        if (item.innerText == '') {
            $('.header_person')[0].removeChild(item);
        }
    });
    //立即帮他
    $("#helpBtn").click(function(){
        window.location = './login.html';
    });
}

//接口 调取数据
/*$(function () {
    var url = 'https://www.yaobangma.com/h5/getH5PublishDetail';
    var data = [{publishId: '971d959d9ddc4cbdbf2885372cb1b549', usersId: '62528e1d79a94ea8a2614b27f6e77e2d',helpType: 3}];
    $.ajax({
        url: url,
        data: data,
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json',
        success: function (res) {
            console.log(res);
            if(!res) return;
            if(res.code !== 200){
                alert(res.desc);
                return;
            }
            renderDOM(res);
        }
    });
});*/

