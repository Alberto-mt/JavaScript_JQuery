window.onload = function(){

    let enviar=document.querySelector("#btnEnviar");
    let nom=document.querySelector("#txtNombre");
    let tmp=document.querySelector("#temporizador");
    let mostrar=document.querySelector("#mostrar");   

    let cont=0;
    function temporizador() {
        tmp.innerHTML=cont;
        cont++;
    }

    setInterval(temporizador, 1000);

    enviar.onclick = function(e){
        e.preventDefault();
        let peticion = new XMLHttpRequest();
        peticion.onreadystatechange= function(){
            if(peticion.readyState==4 && peticion.status==200){
                // console.log(peticion.responseText);
                mostrar.innerHTML=peticion.responseText;
            }
        }

        // url de la petición. Incluimos la información que queremos mandar por GET.
        var  url = "procesado.php?temporizador="+tmp.innerHTML;

        // información que queremos mandar por POST.
        var datos_post = new FormData();
        datos_post.append('nombre', nom.value);

        // Configuramos la petición como POST
        peticion.open("POST", url, true);

        // Enviamos con send la información a pasar vía POST
        peticion.send(datos_post);
     
    }
}

