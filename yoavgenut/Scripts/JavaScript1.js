function navClose() { headerNavOpen = 0; $("#headerNavButton").addClass("closed").removeClass("open"); if ($(window).width() > 1024) { $("#header").stop().animate({ left: -$(window).width() }, navCloseSpeed, "swing") } else { $("#header").stop().animate({ left: -1024 }, navCloseSpeed, "swing") } } function nav() { $("#headerNavButton").bind({ click: function () { if (headerTransition == 0) { if (headerNavOpen == 0) { headerNavOpen = 1; $(this).removeClass("closed").addClass("open"); $("#header").stop().animate({ left: -80 }, 1500, "swing") } else { navCloseSpeed = 750; navClose() } } } }) }

function masonryStart() {
    $("#container").masonry(
        {
            itemSelector: ".post",
            columnWidth: function (a) { return a / 3 },
            isResizable: true,
            isAnimated: !Modernizr.csstransitions,
            animationOptions: { duration: 250, easing: "swing" },
            isAnimatedFromBottom: true
        });
    appendItems()
}
function appendItems() {
    var a = $("#source .post");
    a.addClass("newItem");
    $("#container").append(a).masonry("appended", a, true);
    showItem()
}
function showItem() {
    if (post < 15) {
        if (post == 3) {
            $("#container").masonry("reload")
        }
        if ($(".newItem").eq(post).hasClass("video")) {
            var a = $(".newItem").eq(post).children().height();
            var b = $(".newItem").eq(post).children().width();
            var c = b / a; $(".newItem").eq(post).children().css({
                width: "100%", height: $("#container").width() / 3 / c
            }).end().fadeIn(150, function () {
                showItem()
            })
        } else { $(".newItem").eq(post).fadeIn(150, function () { showItem() }) } post++
    } else { $("#container .newItem").removeClass("newItem"); post = 0; loading = 0 }
} function addMore() { $(window).bind({ scroll: function () { scrollPos = $(window).scrollTop(); bottom = $("#container").height(); windowOffset = $(window).height(); if (bottom - windowOffset < scrollPos & loading == 0) { page++; loading = 1; $("#source").load("/page/" + page + " #source .post", function () { $(".index #source .post").hide(); appendItems() }) } if (scrollPos < 1e3) { $("#backToTop").fadeOut(500) } else { $("#backToTop").fadeIn(500) } if (scrollPos < 1) { $("#header").removeClass("fixScreen") } else { $("#header").addClass("fixScreen") } } }) } function overlay() { $("#sideBarInfoBtn").bind({ click: function () { $("#overlay").fadeIn(500) } }); $("#overlay").bind({ click: function () { $("#overlay").fadeOut(500) } }) } function backToTop() { $("#backToTop").bind({ click: function () { $("html,body").animate({ scrollTop: 0 }, 2e3, "swing") } }) } function resize() { if ($(window).width() > 1024) { if (headerNavOpen == 0) { $("#header").css({ left: -$(window).width() }) } } else { if (headerNavOpen == 0) { $("#header").css({ left: -1024 }) } } } var headerNavOpen = 1; var headerTransition = 0; var navCloseSpeed = 1e3; var scrollDistance = 0; var scrollPos = 0; var page = 1; var post = 0; var bottom = 0; var windowOffset = 0; var loading = 1; $(document).ready(function (a) { nav(); if ($("body").hasClass("permalink")) { headerNavOpen = 0 } else { window.setTimeout(navClose, 500) } masonryStart(); addMore(); overlay(); backToTop(); resize(); $(window).resize(function () { resize() }) })