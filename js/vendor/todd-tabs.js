//////////////////////////////////////////////////
// vert tab resize on window resize and tab click
//////////////////////////////////////////////////
$(window).resize(function () {
    $(window).width() > 640 ? $('#vertTabs').height($('#vertContent').height()) : $('#vertTabs').height('100%');
});
$('#vertTabs li').click(function () {
    $(window).width() > 640 ? $('#vertTabs').height($('#vertContent').height()) : $('#vertTabs').height('100%');
});


$(document).ready(function () { // BEGIN DOCUMENT READY FUNCTION //

    ////////////////////////////////////////////////
    // TABS HACK
    ////////////////////////////////////////////////
    Set vert tabs height initially ( reset on resize below )
    $(window).width() > 640 ? $('#vertTabs').height($('#vertContent').height()) : $('#vertTabs').height('100%');

}); // END DOCUMENT READY FUNCTION //