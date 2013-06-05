$(document).ready(function() {

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
});