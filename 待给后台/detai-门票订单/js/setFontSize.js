;(function (desW) {
    var winWidth = document.documentElement.clientWidth || document.body.clientWidth, //获取手机屏幕的宽度；
        ratio = winWidth / desW; //计算出手机屏幕与设计稿的比例；
    document.documentElement.style.fontSize = ratio * 100 + "px";
})(720);
