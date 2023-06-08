$(document).ready(function(){
    $('#btn-add-li').click(function(){
        $('<li class="list-group-item list-group-item-action list-group-item-secondary"><a class="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"href="#">Nuevo Elemento</a></li>').appendTo('ul');
    });
});