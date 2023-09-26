window.onload = function () {
  const escena = document.querySelector("#escena");
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      recuperaDatos(this);
    }
  };
  xhttp.open("GET", "pelis.xml", true);
  xhttp.send();
  function recuperaDatos(xml) {
    const xmlDatos = xml.responseXML;
    const arrayPersonajes = xmlDatos.getElementsByTagName("personaje");

    for (let i = 0; i < arrayPersonajes.length; i++) {
      let arrayMomentos = arrayPersonajes[i].getElementsByTagName("momento");

      for (let j = 0; j < arrayMomentos.length; j++) {
        let parrafo = document.createElement("p");
        parrafo.innerHTML +=
          "(" +
          arrayMomentos[j].getAttribute("tiempo") +
          ") " +
          arrayMomentos[j].innerHTML;
        escena.appendChild(parrafo);
      }
    }
  }
};
