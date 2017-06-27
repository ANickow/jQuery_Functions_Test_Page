$(document).ready(function(){
    
    // hide
    $("#hide-show p").click(function(){
        $(this).hide("slow");
    });
    
    // show
    $("#hide-show button").click(function(){
        $("#hide-show p").show("slow");
    });
    
    // toggle
    $("#toggle button").click(function(){
        $("#toggle p").toggle("slow");
    });

    // slideUp
    $("#slideUp").click(function(){
        $("#slide-down-up a").slideUp("slow");
    });

    // slideDown
    $("#slideDown").click(function(){
        $("#slide-down-up a").slideDown("slow");
    });

    // slideToggle
    $("#slideToggle button").click(function(){
        $("#slideToggle a").slideToggle("slow");
    });

    // fadeIn
    $("#fade-in-out button").click(function(){
        $("#fade-in-out a").fadeIn("slow");
    });

    // fadeOut
    $("#fade-in-out a").hover(function(){
        $(this).fadeOut("slow");
    });

    // addClass
    $("#add-class span").click(function(){
        $(this).addClass("highlight");
    });

    // removeClass
    $("#add-class button").click(function(){
        $("#add-class span").removeClass("highlight");
    });
});