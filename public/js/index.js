$(function(){
    var offset=0;
    var cWidth=parseFloat($(".lecture .cards").css("width"));
    $(".control-next").on("click",function(e){
        e.preventDefault();
        $(this).prev().removeClass("invisible");
        var dir=1;
        offset+=50*dir;
        var c=parseFloat($(this).css("left"));
        if(offset>=cWidth-c){
            offset=cWidth-c;
            $(this).addClass("invisible");
            $(this).off("click");
        }
        $(this).parent().find(".cards").css(
            {right: offset}
        );

    });
    $(".control-prev").on("click",function(e){
        e.preventDefault();
        var  dir=-1;
        offset+=50*dir;
        if(offset<=0){
            offset=0;
            $(this).addClass("invisible");
            $(this).off("click");
        }
        $(this).parent().find(".cards").css(
            {right: offset}
        );
    });
    $(".card").on("mouseenter",function(){
        $(this).css({
            top:-6,
            boxShadow:" 0 0 0.5rem #aaa"
        })
    })
   .on("mouseleave",function(){
        $(this).css({
            top:0,
            boxShadow:"0 0"
        })
    })

})