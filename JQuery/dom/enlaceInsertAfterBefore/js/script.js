$(document).ready(function(){
    //Añadir datos
    $('<li class="list-group-item list-group-item-action list-group-item-secondary">'
    +'<a class="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"'
        +'href="https://www.google.es/" target="_blank">Google insertBefore</a>'
        +'</li>').insertBefore('.list-group-item:first');
    
        $('<li class="list-group-item list-group-item-action list-group-item-secondary">'
        +'<a class="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"'
            +'href="https://www.amazon.es/" target="_blank">Amazon insertAfter</a>'
            +'</li>').insertAfter('.list-group-item:last');
    //Mostrar por consola
    $( ".list-group-item" ).each(function( index ) {
        console.log("(enlace1: midato" + (index+1) + " --- valor:  (" + $( this ).text() + ")" );
    });

    $( ".list-group-item" ).each(function( index ) {
        console.log("(enlace2: midato" + (index+1) + " --- valor:  (" + $( this ).text() + ")" );
    });
});