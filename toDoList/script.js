var lis = $("li");

function greyLine(){
    for(i=0; i<lis.length; i++){
        if(i % 2 == 1){
            lis[i].classList.add("grey");
        }else{
            lis[i].classList.remove("grey");
        }
    }
}

$("ul").on("click", "li div.trash", function(){
    $(this).closest("li").fadeOut(500, function(){
        $(this).remove();
        lis = $("li");
        greyLine();
    });
})

$("input").on("keypress", function(){
    if(event.which === 13 && $("input").val() != ""){
        var val = $("input").val();
        $("ul").append("<li><div class=\"trash\"><i class=\"fas fa-trash\"></i></div><div class=\"todo\">" + val + "</div></li>");
        $("input").val("");
        lis = $("li");
        greyLine();
    }
})

$("i.fas.fa-plus").on("click", function(){
    $("input").slideToggle(300);
})

greyLine();

$("ul").on("click", "li", function(){
    $(this).children("div.todo").toggleClass("strike");
});
