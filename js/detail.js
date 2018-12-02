var str = '我的公司寻租铺面一间，最好在上城区附近的，一楼临街商铺，面积200平米左右，通水电暖天然气，最好交通便利的，' +
    '便于停车装卸货，门口人流量不大的，希望有一块空地，可以方便装车卸货，对环境要求不是很高，' +
    '希望有呢个帮的上忙的朋友联系我，必有重谢,必有重谢,希望有呢个帮的上忙的朋友联系我，必有重谢,必有重谢希望有呢个帮的上忙的朋友联系我，必有重谢,必有重谢,希望有呢个帮的上忙的朋友联系我，必有重谢,必有重谢,希望有呢个帮的上忙的朋友联系我，必有重谢,必有重谢希望有呢个帮的上忙的朋友联系我，必有重谢,必有重谢';
// var detailText = $('#contentDetail').text(); //len=266
// var detailLen = detailText.length;
var showText = str.slice(0, 118);
var len = str.length;
var $showBtn = $("#allBtn");
var $contentDetail = $('#contentDetail');
var $content = $('#content');
var $footer = $('#footer');
var $imageOpen = $('#imageOpen'); //展开图片按钮
var $contentImg = $('#contentImg');
var oLis = $contentImg.children('li');
var imgLen = oLis.length;
var bShow = true;
var imgShow = true;
/*处理是否显示全文*/
var h = $content.height();
console.log(h);
if (len <= 118) {
    $contentDetail.text(str);
    $showBtn.css('display', 'none');
} else {
    $contentDetail.text(showText);
    $showBtn.css('display', 'inline-block');
    //全文按钮的点击事件
    $showBtn.on('tap', function () {
        if (bShow) {
            $contentDetail.css('overflow', 'auto');
            $contentDetail.text(str);
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

/*
if (imgLen <= 3) {
    $imageOpen.css('display', 'none');
} else {
    $imageOpen.css('display', 'inline-block');
    $imageOpen.on('taop', function () {
        if (imgShow) {
            $contentImg.css('overflow', 'auto');
        } else {
            $contentImg.css('overflow', 'hidden');
        }
        h = $content.height();
        $footer.css('top', h - 70);
        imgShow = !imgShow;
        if(imgShow){

        }else{
            $imageOpen.css('transform', 'rotate(180deg)');
        }
    })
}*/
