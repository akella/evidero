window.onload = function() {
    var body = $("body");
    //if (body.width <= 920) {
        window.dima = baron({
            scroller: '.js-baron .scroller',
            bar: '.scroller__bar',
            barOnCls: 'baron'
        });
    //}
}
$(document).ready(function() {


    WebFontConfig = {
        google: { families: [ 'Raleway:400,700,600,500:latin' ] }
    };
    (function() {
        var wf = document.createElement('script');
        wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
          '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
        wf.type = 'text/javascript';
        wf.async = 'true';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(wf, s);
    });

    var body = $("body");
    var masonry_list = $('.js-masonry');
    var sidebar = $(".js-sidebar");
    var map_key = $(".js-map-key");
    var map = $(".js-map");
    var slider = $(".js-slider");
    var step_1 = 920;
    var step_2 = 600;
    
    function masonry_init() {
        if (body.width() >= step_1) {
            masonry_list.masonry({
                itemSelector : '.js-masonry-post',
                isResizable: true,
                columnWidth: function( containerWidth ) {
                    return containerWidth / 2;
                }
            });
        }
        else if (body.width() > step_2 && body.width() <= step_1) {
            masonry_list.masonry({
                itemSelector : '.post',
                isResizable: true,
                columnWidth: function( containerWidth ) {
                    return containerWidth / 3;
                }
            });
        }
        else if (body.width() <= step_2) {
            masonry_list.masonry({
                itemSelector : '.post',
                isResizable: true,
                columnWidth: function( containerWidth ) {
                    return containerWidth / 2;
                }
            });
        }
    }
    masonry_init();

    $(window).resize(function(){
        masonry_init();
        if (body.width <= 920) {
        window.dima = baron({
            scroller: '.js-baron .scroller',
            bar: '.scroller__bar',
            barOnCls: 'baron'
        });
    }
    });
    
// tabs
    $(".js-tab1").show();
    $(".tab li:first-child").addClass("is-active");
    $(".tab li").click(function(){
        if ($(this).hasClass("is-active")) {
            
        }
        else {
            $(this).parent().find("li").removeClass("is-active");
            $(this).addClass("is-active");
            var index = $(this).attr("data-tab");
            $(".tab-cont").slideUp("fast");
            $(index).slideDown("fast");
        }
        
    });

// drop-list
    var list = $(".drop-list__head").parent();
    var list_body = $(".js-drop-body");
    list_body.hide();
    $(".js-drop-list").click(function(){
        var this_list_body = $(this).parent().find(".js-drop-body");
        if ($(this).parent().hasClass("is-active")) {
            $(this).parent().removeClass("is-active");
            this_list_body.slideUp("fast");
        }
        else {
            list.removeClass("is-active");
            list_body.slideUp("fast");

            $(this).parent().addClass("is-active");
            this_list_body.slideDown("fast");
        }
    });

// show contact form 
    $(".js-form").hide();
    $(".js-link-form").click(function(){
        $(this).toggleClass('is-active');
        var index = $(this).attr("data-show");
        $(index).slideToggle("fast");
        return false;
    });

// show menu 
    $(".js-menu-key").click(function(){
        $(this).next().slideToggle("fast");
        return false;
    });
// show search
    $(".js-search-key").click(function(){
        $(this).next().slideToggle("fast");
        return false;
    });
// show sidebar
    $(".js-sidebar-key").click(function(){
        if ($(this).hasClass("js-active")) {
            $(this).removeClass("js-active");
            sidebar.css("right", -340);
            $(".js-border").hide();
        }
        else {
            $(this).addClass("js-active");
            sidebar.css("right", 0);
            $(".js-border").fadeIn("slow");
        }
    });

// show map
    map_key.click(function(){
        $(this).toggleClass("is-active");
        map.slideToggle("fast");
        slider.slideToggle("fast");
        return false;
    });

});