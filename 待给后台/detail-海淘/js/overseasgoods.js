//1. 获取元素
var $wrap = $(".wrap");
var $inner = $wrap.find(".inner");
var $imgs = $wrap.find(".inner div img");
var $focusList = $wrap.find(".focusList");
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

// 焦点对齐
function setFocus() {
    $focusList.find("li").each(function (liIndex, li) {
        liIndex == index ? $(li).addClass("cur") : $(li).removeClass("cur");
    });
}


