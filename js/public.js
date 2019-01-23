+function () {
    remLayout();
    function remLayout() {
        var w = document.documentElement.clientWidth;
        w = w > 768 ? 768 : w;
        w = w <= 320 ? 320 : w;
        document.documentElement.style.fontSize = w / 7.5 + 'px';
    }

    window.addEventListener('resize', function () {
        remLayout();
    }, false);
}();

~function (pro) {
    function queryURLParameter() {
        var reg = /([^?&=#]+)=([^?&=#]+)/g,
            obj = {};
        this.replace(reg, function () {
            obj[arguments[1]] = arguments[2];
        });
        reg = /#([^?=&#]+)/;
        this.replace(reg, function () {
            obj['HASH'] = arguments[1];
        });
        return obj;
    }

    pro.queryURLParameter = queryURLParameter;
}(String.prototype);



let $UAjax = function (url, data, type = 'POST', dataType = 'jsonp', options) {
    if (typeof type == 'obejct') {
        options = type;
        type = 'POST';
    }
    if (typeof dataType == 'object') {
        options = dataType;
        dataType = 'jsonp';
    }
    options.url = url;
    options.type = type;
    options.data = data;
    options.dataType = dataType;
    options.contentType = "application/x-www-form-urlencoded";
    options.processData = true;
    $.ajax({
        url: options.url,
        type: options.type,
        data: options.data,
        dataType: dataType,
        contentType: options.contentType,
        processData: options.processData,
        // beforeSend: function (xhr) {
        //     if (accesstoken && username && userid) {
        //         xhr.setRequestHeader("AccessToken",
        //             accesstoken);
        //         xhr.setRequestHeader("username", username);
        //         xhr.setRequestHeader("userid", userid);
        //     }
        // },
        success: function (data) {
            console.log(data);
            if (data && data.code === 500) {
                alert(data.desc);
            }
        },
        error: function (data) {
            alert(data && data.desc)
        }
    });
    // return ajaxPromise(options, true)
};
// function ajaxPromise(options, orgParam = false) {
//     let {
//         url,
//         type = 'GET',
//         data = {},
//         dataType = 'json',
//         contentType = "application/x-www-form-urlencoded",
//         processData = true,
//     } = options;
//     // let {
//     //     accesstoken,
//     //     username,
//     //     userid,
//     // } = $UGetCacheItem('userInfo') || Object.create(null)
//     // if (orgParam === false && contentType !== "application/json") {
//     //     data.userid = data.userid || userid
//     //     data.username = data.username || username
//     //     data.accesstoken = data.accesstoken || accesstoken
//     // }
//     // if (contentType == "application/json") {
//     //     processData = false;
//     //     data = JSON.stringify(data)
//     // }
//     return new Promise((resolve, reject) => {
//         $.ajax({
//             url,
//             type,
//             data,
//             dataType,
//             contentType,
//             processData,
//             // beforeSend: function (xhr) {
//             //     if (accesstoken && username && userid) {
//             //         xhr.setRequestHeader("AccessToken",
//             //             accesstoken);
//             //         xhr.setRequestHeader("username", username);
//             //         xhr.setRequestHeader("userid", userid);
//             //     }
//             // },
//             success: function (data) {
//                 console.log(data);
//                 if (data && data.code === 500) {
//                     alert(data.desc);
//                 }
//                 resolve(data)
//             },
//             error: function (data) {
//                 resolve(data && data.desc)
//             }
//         })
//     })
// }
