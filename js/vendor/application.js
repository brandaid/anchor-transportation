////////////////////////////////////////////////
// 100% Height Off-Canvas Foundation 5
// http://stackoverflow.com/questions/20484240/100-height-off-canvas-foundation-5/20941659#20941659
////////////////////////////////////////////////
$(function() {
    var timer;
    $(window).resize(function() {
        clearTimeout(timer);
        timer = setTimeout(function() {
            $('.inner-wrap').css("min-height", $(window).height() + "px");
        }, 40);
    }).resize();
});
////////////////////////////////////////////////
// back to top
////////////////////////////////////////////////
/* learn how here >> http://brandaid.it/16kSKCu */
var offset = 220;
var duration = 500;
jQuery(window).scroll(function() {
    if (jQuery(this).scrollTop() > offset) {
        jQuery('#to-top').fadeIn(duration);
    } else {
        jQuery('#to-top').fadeOut(duration);
    }
});
jQuery('#to-top').click(function(event) {
    event.preventDefault();
    jQuery('html, body').animate({
        scrollTop: 0
    }, duration);
    return false;
});
////////////////////////////////////////////////
// hero bxslider
////////////////////////////////////////////////
$(document).ready(function() {
    $('.hero-slider').bxSlider({
        //adaptiveHeight: true,
        mode: 'fade',
        auto: true,
        pause: 8000,
        adaptiveHeight: true,
    });
});
////////////////////////////////////////////////
// testimonial bxslider
////////////////////////////////////////////////
$(document).ready(function() {
    $('.quote-slider').bxSlider({
        //adaptiveHeight: true,
        mode: 'fade',
        auto: true,
        pause: 8000,
        adaptiveHeight: true,
    });
    ////////////////////////////////////////////////
    // testimonial bxslider
    ////////////////////////////////////////////////
    //Set vert tabs height initially ( reset on resize below )
    $(window).width() > 640 ? $('#vertTabs').height($('#vertContent').height()) : '';
});
$(window).resize(function() {
    $(window).width() > 640 ? $('#vertTabs').height($('#vertContent').height()) : '';
});