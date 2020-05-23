// Custom easing! 
$('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click((function(t) {
    if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
        var e = $(this.hash);
        (e = e.length ? e : $("[name=" + this.hash.slice(1) + "]")).length && (t.preventDefault(), $("html, body").stop(!0, !1).animate({
            scrollTop: e.offset().top
        }, 1e3, "easeInOutCubic", (function() {
            var t = $(e);
            if (t.focus(), t.is(":focus")) return !1;
            t.attr("tabindex", "-1"), t.focus()
        })))
    }
}));
$(window).scroll(function() {
    if ($(window).scrollTop() === 0) {
        $("nav").attr("style", "")
    } else {
        $("nav").attr("style", "height: 40px")
    }
});