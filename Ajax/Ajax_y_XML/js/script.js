window.addEventListener("load", () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      recuperaDatos(this);
    }
  };
  xhttp.open("GET", "xml/tiempo.xml", true);
  xhttp.send();
});

function recuperaDatos(xml) {
  let xmlDatos = xml.responseXML;
  let arrayCiudades = xmlDatos.getElementsByTagName("ciudad");

  for (let i = 0; i < arrayCiudades.length; i++) {
    let arrayMaxima = arrayCiudades[i].getElementsByTagName("maxima");

    let li = document.createElement("li");
    li.innerHTML += arrayCiudades[i].getAttribute("nombre");

    for (let j = 0; j < arrayMaxima.length; j++) {
      if (arrayMaxima[j].innerHTML < 10) {
        li.innerHTML += "<img src='img/frio.gif'>";
      } else if (
        (arrayMaxima[j].innerHTML = 10 || arrayMaxima[j].innerHTM < 22)
      ) {
        li.innerHTML += "<img src='img/templado.gif'>";
      } else if (arrayMaxima[j].innerHTML >= 22) {
        li.innerHTML += "<img src='img/calor.gif'>";
      }
    }
    document.getElementById("prevision").appendChild(li);
  }
}
