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
        "personalLabel": ["靠谱", "随性"],
        "publishContent": "张宇涛，男，9岁，身高约123cm，于家人找孩子吃饭时不见了孩子，在村里和附近都找遍了也没找到\n\n孩子失踪时身穿蓝色棉袄，浅蓝色裤子，脚穿一双棉鞋。现在家人万分着急！\n\n\n宝贝快回来,你的家人都不会怪你。",
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
        "itisPais": 1,//是否有偿 1是 2否
        "listSize:": 30,
        "list": [{
            usersHead: './images/girl.jpg',
            usersName: 'kiki',
            money: 0.02
        }, {
            usersHead: './images/girl.jpg',
            usersName: 'lili',
            money: 0.01
        }, {
            usersHead: './images/girl.jpg',
            usersName: 'kiki',
            money: 0.02
        }, {
            usersHead: './images/girl.jpg',
            usersName: 'lili',
            money: 0.01
        }, {
            usersHead: './images/girl.jpg',
            usersName: 'kiki',
            money: 0.02
        }, {
            usersHead: './images/girl.jpg',
            usersName: 'lili',
            money: 0.01
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
    if (personLable.length > 1) {
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
    if (/^[0-9A-Za-z]+(\s[0-9A-Za-z]+)*$/.test(helpUserName)) {
        if (helpUserName.length > 7) {
            dataList.helpUserName = helpUserName.slice(0, 7);
        }
    } else {
        if (helpUserName.length > 4) {
            dataList.helpUserName = helpUserName.slice(0, 4) + '...';
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
    if (imgLen > 9) {
        dataList.images.splice(9);
    }
    //最多显示4个人
    if (listLen > 4) {
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

    if (gender == 1) {
        $gender.css('background-color', '#56d8da');
    } else if (gender == 2) {
        $gender.css('background-color', '#fb8e8e');
    }
    //显示有偿
    if (isPais == 1) {
        $pay.show();
    } else {
        $pay.hide();
    }
    //显示帮转红包
    if (isRedbag) {
        $redbag.show();
    } else {
        $redbag.hide();
    }
    var contentHeight = $content.height();
    $footer.css('top', contentHeight - 60);
    var originHeight = $contentImg.height();
    if (imgLen == 0) {
        $contentImg.height(0);
    } else if (imgLen > 3) {
        var num = Math.ceil(imgLen / 3);
        if (num > 3) {
            num = 3;
        }
        $contentImg.height(originHeight * num);
    }
    //领取红包
    $("#redBtn").on('tap', function () {
        window.location = './redbag.html?helpUserName=' + helpUserName;
    });
    //立即帮他
    $("#helpBtn").on('tap', function () {
        window.location = './login.html?helpUserId=' + helpId + '&publishId=' + publishId;
    });
    //点击图片放大
    var imgSwiper = new Swiper('#imgWrap', {
        initialSlide: 0,
        centeredSlides: true,
        loop: false,
        slidesPerView: 1,
        observer: true,
        observeParents: true
    });
    var imgsObj = $('#contentImg li img');//需要放大的图像
    if (imgsObj) {
        for (var i = 0; i < imgsObj.length; i++) {
            (function (index) {
                //图片滑动
                $(imgsObj[index]).on('tap', function () {
                    var offsetHeight = document.body.clientHeight * 1.2;
                    console.log(offsetHeight);
                    imgSwiper.slideTo(index);
                    imgSwiper.on('tap', function () {
                        $("#showMain").scrollTop(offsetHeight);
                        $('.showBigImg').css('display', 'none');
                        $('#showMain').css('display', 'block');
                    });
                    setTimeout(function () {
                        $('.showBigImg').css('display', 'block');
                        $('#showMain').css('display', 'none');
                    }, 300);
                });
            })(i);
        }
    }
    //图片缩放
    var pageX, pageY, initX, initY, isTouch = false;
    var start = [];
    console.log($("#imgWrap"));
    $("#imgWrap").on("touchstart", function (e) {
        //手指按下时的手指所在的X，Y坐标  
        pageX = e.targetTouches[0].pageX;
        pageY = e.targetTouches[0].pageY;
        //初始位置的X，Y 坐标  
        initX = e.target.offsetLeft;
        initY = e.target.offsetTop;

        //记录初始 一组数据 作为缩放使用
        if (e.touches.length >= 2) { //判断是否有两个点在屏幕上
            start = e.touches; //得到第一组两个点
        }

        //表示手指已按下  
        isTouch = true;
    }, false);
    //监听 touchmove 事件 手指 移动时 做的事情
    $("#imgWrap").on("touchmove", function (e) {
        e.preventDefault();
        // 2 根 手指执行 目标元素放大操作
        if (e.touches.length >= 2 && isTouch && e.scale < 2.5) {
            //得到第二组两个点
            var now = e.touches;
            //得到缩放比例， getDistance 是勾股定理的一个方法
            var scale = (getDistance(now[0], now[1]) / getDistance(start[0], start[1]));
            // 对缩放 比例 取整
            e.scale = scale.toFixed(2);
            // 执行目标元素的缩放操作
            e.target.style.transform = "scale(" + scale + ")";
        }
    }, false);
    //监听 手指离开屏幕时 
    $("#imgWrap").on("touchend", function (e) {
        //将 isTouch 修改为false  表示 手指已经离开屏幕
        if (isTouch) {
            isTouch = false;
        }
    }, false);

    //缩放 勾股定理方法
    function getDistance(p1, p2) {
        var x = p2.pageX - p1.pageX,
            y = p2.pageY - p1.pageY;
        return Math.sqrt((x * x) + (y * y));
    }
}


//接口 调取数据
$(function () {
    var reqData = window.location.href.queryURLParameter();
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
            if (!res) return;
            if (res.code !== 200) {
                alert(res.desc);
                return;
            }
            renderDOM(res, reqData.helpUserId, reqData.publishId);
        }
    });
});

