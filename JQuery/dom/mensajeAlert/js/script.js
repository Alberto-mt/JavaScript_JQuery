$(document).ready(function(){
    //Comprobar entrada de texto
    $('.btnEnviar').click(function(){
        $(".alert").remove();
        const texto = $("#txtEntrada").val();
        if (texto != ''){
            $('<div class="alert alert-success" role="alert">'
            +'Correcto: mensaje enviado!!</div>').prependTo("form").fadeOut(5000);
        }else{
            $('<div class="alert alert-danger" role="alert">'
            +'Error: mensaje no enviado!!</div>').prependTo("form").fadeOut(5000);
        }
    });
});