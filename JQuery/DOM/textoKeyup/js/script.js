$(document).ready(function(){
    $('#textoIn').keyup(function(){
        $('#textoOut').val($('#textoIn').val());
    });
});