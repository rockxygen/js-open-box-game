$().ready(function() {
    if($(".gamcontent")){
        $(document).keypress(function(e){
            var code = (e.keyCode ? e.keyCode : e.which);
            if(code == 13){
                $(".error").css("display","none");
                $(".ready").css("display","block");
            }
            if((code == 49 || code == 50 || code == 51 || code == 52) && ($(".ready").attr("style") != "display: none;")){
                $.playgame(code);
            }
        });
    }

    failbox = $("ul.buttons").find("li:random").text();
    $(".gamecontent li").each(function(boxli){
        $(this).click(function(){
            score = eval($(".score").find("span").text());
            if($(this).text() == failbox){
                $(".score").find("span").html("0");
                $(".error").css("display","block");
                $(".ready").css("display","none");
                failbox = $("ul.buttons").find("li:random").text();
            }else{
                $(".score").find("span").empty().html(score+1);
                failbox = $("ul.buttons").find("li:random").text();
                //console.log(failbox);
            }
        });
    });

    // Tekrar Dene
    $("#btnRetry").click(function(){
        $(".error").css("display","none");
        $(".ready").css("display","block");
    });

    $.playgame = function(kcode){
        score = eval($(".score").find("span").text());
        if(kcode == 49){pushnumber = 1;}
        if(kcode == 50){pushnumber = 2;}
        if(kcode == 51){pushnumber = 3;}
        if(kcode == 52){pushnumber = 4;}
        if(pushnumber == failbox){
            $(".score").find("span").html("0");
            $(".error").css("display","block");
            $(".ready").css("display","none");
            failbox = $("ul.buttons").find("li:random").text();
        }else{
            $(".score").find("span").empty().html(score+1);
            failbox = $("ul.buttons").find("li:random").text();
        }
    }
});