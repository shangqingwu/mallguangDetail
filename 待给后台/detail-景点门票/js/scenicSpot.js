// 轮播图
var $wrap = $(".wrap");
var $inner = $wrap.find(".inner");
var $imgs = $wrap.find(".inner div img");
var $imgsNum = $wrap.find(".wrap-info .info-num");
var index = 0;
var winHeight= $inner.find("div").eq(0).height();
touch.on( $wrap, "swiperight", "img", function () {
    index --;
    index = index < 0 ? 0 : index;
    $inner.css("top", -index * winHeight);
    setFocus();
});
touch.on( $wrap, "swipeleft", "img", function () {
    index ++;
    index = index > $imgs.length-1 ? $imgs.length-1 : index;
    $inner.css("top", -index * winHeight);
    setFocus();
});
function setFocus() {
    $imgsNum.html(index+1 +"/"+ $imgs.length);
}
// tab
var $titleLis = $(".content .title-list li");
var $contentItems = $(".content .content-list .content-item");
$titleLis.click(function () {
   var liIndex = $titleLis.index(this);
    $(this).addClass("on").siblings().removeClass("on");
    $contentItems.eq(liIndex).addClass("show").siblings().removeClass("show");
});
// tab 粘性布局
var $body = $("body");
var $contentWrap = $(".content .content-wrap");
var $titleList = $(".content .title-list");
var $contentList = $(".content .content-list");
var start;
var end;
// 判断是否支持sticky属性
function isSupportSticky() {
    var prefixTestList = ['', '-webkit-', '-ms-', '-moz-', '-o-'];
    var stickyText = '';
    for (var i = 0; i < prefixTestList.length; i++ ) {
        stickyText += 'position:' + prefixTestList[i] + 'sticky;';
    }
    // 创建一个dom来检查
    var div = document.createElement('div');
    var body = document.body;
    div.style.cssText = 'display:none;' + stickyText;
    body.appendChild(div);
    var isSupport = /sticky/i.test(window.getComputedStyle(div).position);
    body.removeChild(div);
    div = null;
    return isSupport;
}
if (isSupportSticky()){
    $contentWrap.addClass("sticky");
}else {
    touch.on($body,"touchstart",function (e) {
        start = e.changedTouches[0].pageY;
    });
    touch.on($body,"touchmove",function (e) {
        end = e.changedTouches[0].pageY;
        var winScrollY = document.documentElement.scrollTop || document.body.scrollTop ;
        var titleHeight = $titleList.offset().top;
        if (start > end){
            winScrollY >= titleHeight ? $contentWrap.addClass("fixed") : $contentWrap.removeClass("fixed");
        }else {
            var contentHeight = $contentList.offset().top;
            contentHeight >= winScrollY ? $contentWrap.removeClass("fixed") : $contentWrap.addClass("fixed");
        }
    });
}



