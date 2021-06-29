$(document).ready(function () {
    $('.gnb>li').hover(function () {
        $('.submenu').stop().slideDown();
    }, function () {
        $('.submenu').stop().slideUp();
    });

    var idx = 0;
    setInterval(function () {
        $('.slide>a').eq(idx).animate({ left: '-100%' }).animate({
            left: '100%'
        }, 0);
        idx == 6 ? idx = 0 : idx++;
        $('.slide>a').eq(idx).animate({ left: 0 });
    }, 3000);
});