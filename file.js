$(document).ready(function(){
    $(".product .image").mouseenter(function(){
        $("img").after("<button class='my-button'>Quick View</button>")
    });
    $(".product .image").mouseleave(function(){
        $(".my-button").remove();
    });
    $(".product .image").click(function(){
        $("body").append("<div class='layout'><div>");
        $(".layout").append("<img src='product-05.jpg' />");
        $(".layout").append("<span class='exit'>X</span>")
        $(".exit").click(function(){
            $(this).parent().remove();
        });
    });
    $(".show").click(function(){
        $(".product .info").slideToggle();
    })

});