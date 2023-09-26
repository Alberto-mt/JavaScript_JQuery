window.onload = function(){
    let mostrar = document.querySelector("#mostrar");
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            recuperaDatos(this);
        }
    };
    xhttp.open("GET", "tests.xml", true);
    xhttp.send();
    function recuperaDatos(xml) {
        let xmlDatos = xml.responseXML;
        let arrayAlumnos = xmlDatos.getElementsByTagName("alumno"); 

        for (let i = 0; i < arrayAlumnos.length; i++) {   

            let arrayRespuestas = arrayAlumnos[i].getElementsByTagName("respuestas");            
            // console.log(arrayRespuestas);
            // console.log(arrayRespuestas.length);
            let nombre = arrayAlumnos[i].getAttribute("nombre");
            let asignatura = arrayAlumnos[i].getAttribute("asignatura");
            let ul = document.createElement("ul");

            for (let j = 0; j < arrayRespuestas.length; j++) {
                // console.log(arrayRespuestas[j].innerHTML);
                let respuesta = arrayRespuestas[j].innerHTML;
                // console.log(respuesta.length);
                let letras = respuesta.split('');
                // console.log(letras);
                let contA=0;
                let contB=0;
                let contSin=0;
                for (let x = 0; x < respuesta.length; x++) {
                    
                   if((letras[x].indexOf("A") != -1)||(letras[x].indexOf("a") != -1)){contA++}
                   else if((letras[x].indexOf("B") != -1)||(letras[x].indexOf("b") != -1)){contB++}
                   else if(letras[x].indexOf("-") != -1){contSin++}  
                }
  
                // console.log(contA +' - '+ contB +' - '+ contSin);
                let li = document.createElement("li");
                li.innerHTML +=  nombre + ': ' + asignatura + ' ('+ contA +' As)' + ' ('+ contB +' Bs)'
                        + ' ('+ contSin +' Sín Contestar)'; 

                ul.appendChild(li);
                mostrar.appendChild(ul);
            }
        }       
    } 
}

