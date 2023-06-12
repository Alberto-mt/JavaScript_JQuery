$(document).ready(function(){
    //Con toggle
    $('.btnCon').click(function(){
        $(".conToggle").toggleClass("alert-primary");
    });
    //Sin toggle
    $('.btnSin').click(function(){
        if($(".sinToggle").hasClass("alert-primary")){
            $(".sinToggle").removeClass("alert-primary");
        }
        else{
            $(".sinToggle").addClass("alert-primary");
        }
    });
});