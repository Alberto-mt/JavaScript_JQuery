document.addEventListener("DOMContentLoaded", () => {
  const obtenerDatos = document.querySelector("#btnEnviar");
  const txt1 = document.querySelector("#texto1");
  const txt2 = document.querySelector("#texto2");

  obtenerDatos.addEventListener("click", () => {
    const url = "procesado.php";
    // Crear un objeto FormData y agregar los datos que deseas enviar
    const formData = new FormData();
    formData.append("mitexto", txt1.innerHTML);

    fetch(url, {
      method: "POST",
      body: formData
    })
      .then(function (response) {
        // Manejar la respuesta del servidor
        if (response.ok) {
          console.log(response.headers.get("Content-Type"));
          console.log(response.status);
          console.log(txt1.innerHTML);
          return response.text();
        } else {
          throw new Error("Error en la petición");
        }
      })
      .then(function (result) {
        // Hacer algo con la respuesta del servidor en formato de texto plano
        txt2.innerHTML = result;
        console.log(result);
      })
      .catch(function (error) {
        // Manejar errores de la petición
        console.error(error);
      });
  });
});
