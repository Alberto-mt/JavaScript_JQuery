$(document).ready(function(){
    const meses = ["Enero","Febrero","Marzo","Abril","Mayo", "Junio", "Julio", "Agosto", 
    "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    //Insertar meses en listado
    meses.forEach(element => {
        $('<li class="list-group-item list-group-item-action list-group-item-secondary">'
        +'<a class="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" href="#">'
        + element +'</a></li>').appendTo('ul');
    });
    //Mostrar por consola
    $( "li" ).each(function( index ) {
        console.log("(Indice: " + index + ") Procesando valor (" + $( this ).text() + ")" );
    });
});