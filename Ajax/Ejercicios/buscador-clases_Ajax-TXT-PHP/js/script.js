window.addEventListener("load", () => {
  const buscar = document.querySelector("#btnBuscar");
  const listado = document.querySelector("#listado");
  const mostrar = document.querySelector("#mostrar");
  const inicio = document.querySelector("#txtInicio");
  const fin = document.querySelector("#txtFin");

  buscar.addEventListener("click", (e) => {
    e.preventDefault();
    while (listado.firstChild) {
      listado.removeChild(listado.firstChild);
    }
    let peticion = new XMLHttpRequest();
    peticion.onreadystatechange = function () {
      if (peticion.readyState == 4 && peticion.status == 200) {
        let parseJson = JSON.parse(peticion.response);
        let conteo = parseJson["conteo"];
        let asignaturas = parseJson["asignaturas"];
        for (let i = 0; i < asignaturas.length; i++) {
          let li = document.createElement("li");
          li.innerHTML =
            asignaturas[i]["nombre"] +
            ": " +
            asignaturas[i]["huecos"] +
            " huecos";
          listado.appendChild(li);
        }
        mostrar.innerHTML = "Total de clases disponibles: " + conteo;
      }
    };
    peticion.open(
      "GET",
      "procesado.php?inicio=" + inicio.value + "&fin=" + fin.value,
      true
    );
    peticion.send(null);
  });
});
