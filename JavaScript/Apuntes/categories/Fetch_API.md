## JavaScript moderno
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white&labelColor=101010)](https://github.com/Alberto-mt/JavaScript_JQuery/blob/main/JavaScript/Apuntes/index.md)

### FetchAPI
[![JavaScript](https://img.shields.io/badge/Fetch_API-c08a44?style=for-the-badge&logo=javascript&logoColor=white&labelColor=101010)](https://github.com/Alberto-mt/JavaScript_JQuery/blob/main/JavaScript/Apuntes/categories/Fetch_API.md)

#### Consumir datos desde un archivo de texto .txt
```js
// Fetch API 
// Consumir datos desde un archivo de texto .txt
const cargarTxtBtn = document.querySelector("#cargarTxt");
cargarTxtBtn.addEventListener("click", obtenerDatos);

function obtenerDatos() {
  // URL de la ubicación del archivo
  fetch("data.txt") 
    .then((respuesta) => {
      // Información de respuesta completa 
      console.log(respuesta);
      // Content-Type
      console.log(respuesta.headers.get("Content-Type"));
      // Estado
      console.log(respuesta.status); 
      // Estado en ingles
      console.log(respuesta.statusText);
      // URL a la que se consulta
      console.log(respuesta.url); 
      // Tipo de consulta
      console.log(respuesta.type);

      return respuesta.text();
    })
    .then((datos) => {
      // Contenido de información del archivo 
      console.log(datos);
    })
    .catch((error) => {
      console.log(error);
    });
}
```

#### Consumir datos desde un JSON (Objeto)
```js
// Fetch API 
// Fetch API desde un JSON (Objeto)
const cargarJSONBtn = document.querySelector("#cargarJSON");
cargarJSONBtn.addEventListener("click", obtenerDatos);

function obtenerDatos() {
  fetch("empleado.json")
    .then((respuesta) => {
      return respuesta.json();
    })
    .then((resultado) => {
      mostrarHTML(resultado);
      console.log(resultado);
    });
}

function mostrarHTML({ id, nombre, departamento }) {
  const contenido = document.querySelector("#contenido");

  contenido.innerHTML = `
  <p>ID: ${id} </p>
  <p>Nombre: ${nombre} </p>
  <p>Departamento: ${departamento} </p>`;
}
```

#### Consumir datos desde un JSON (Array de objetos)
```js
// Fetch API
// Fetch API desde un JSON (Array de objetos)
const cargarJSONArrayBtn = document.querySelector("#cargarJSONArray");
cargarJSONArrayBtn.addEventListener("click", obtenerDatos);

function obtenerDatos() {
  fetch("empleados.json")
    .then((respuesta) => {
      return respuesta.json();
    })
    .then((resultado) => {
      mostrarHTML(resultado);
      console.log(resultado);
    });
}

function mostrarHTML(empleados) {
  const contenido = document.querySelector("#contenido");

  let html = "";

  empleados.forEach((empleado) => {
    const {id, nombre, departamento} = empleado;

    html += `
      <p>ID: ${id} </p>
      <p>Nombre: ${nombre} </p>
      <p>Departamento: ${departamento} </p>
  `;
  });

  contenido.innerHTML = html;
}
```

#### Consumir datos desde un API
```js
// Fetch API a una API
const cargarAPIBtn = document.querySelector("#cargarAPI");
cargarAPIBtn.addEventListener("click", obtenerDatos);

function obtenerDatos() {
  fetch("https://picsum.photos/list")
    .then((respuesta) => {
      return respuesta.json();
    })
    .then((resultado) => {
      mostrarHTML(resultado);
      console.log(resultado);
    });
}

function mostrarHTML(datos) {
  const contenido = document.querySelector("#contenido");

  let html = "";

  datos.forEach((perfil) => {
    const { author, post_url } = perfil;

    html += `
      <p>Autor: ${author} </p>
      <a href="${post_url}" target="_blank">Ver Imagen</a>
  `;
  });

  contenido.innerHTML = html;
}
```
#### Html base
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>FetchAPI</title>
  </head>
  <body bgcolor="#F7DF1E">
    <center>
      <svg
        fill="#000000"
        width="256px"
        height="256px"
        viewBox="-51.2 -51.2 614.40 614.40"
      >
        <path
          d="M1.008,0.5C0.438,0.583,0.48,1.27,0.521,1.958 c0,169.668,0,339.31,0,508.974c169.364,1.135,340.808,0.162,510.979,0.486c0-170.309,0-340.61,0-510.918 C341.342,0.5,171.167,0.5,1.008,0.5z M259.893,452.167c-11.822,11.919-30.478,18.938-53.429,18.938 c-37.643,0-58.543-18.34-71.884-43.711c12.842-8.2,25.966-16.122,39.344-23.795c5.456,15.262,23.886,32.42,44.683,21.857 c13.183-6.699,11.661-27.01,11.661-49.054c0-45.773,0-98.578,0-139.872c-0.042-0.688-0.083-1.375,0.482-1.458 c15.707,0,31.413,0,47.116,0c0,36.788,0,78.402,0,117.529C277.866,395.199,280.91,430.988,259.893,452.167z M470.696,409.917 c-2.674,39.884-35.243,61.063-79.17,61.188c-43.062,0.124-70.624-19.013-87.433-48.567c12.085-8.317,25.778-15.017,38.375-22.822 c10.08,15.761,27.537,30.91,53.429,28.652c16.131-1.406,34.856-14.555,24.285-34.482c-5.127-9.66-17.516-14.567-28.656-19.425 c-35.352-15.424-76.828-29.571-72.861-84.992c1.327-18.514,9.852-31.525,20.889-40.796c11.311-9.5,26.46-15.867,46.629-16.511 c36.629-1.173,56.723,15.12,70.429,37.884c-11.664,8.891-24.514,16.608-37.401,24.281c-4.229-12.995-24.644-25.658-41.772-17.969 c-7.789,3.493-14.788,13.761-10.684,26.224c3.66,11.115,18.589,17.199,30.599,22.344 C433.706,340.486,474.331,355.693,470.696,409.917z"
        ></path>
      </svg>
      <br /><br />
      <hr />
      <br /><br />
      <h1>FetchAPI</h1>
      <ul style="max-width: 400px; text-align: left">
        <li>Consumir datos desde un archivo de texto .txt</li>
        <li>Consumir datos desde un JSON (Objeto)</li>
        <li>Consumir datos desde un JSON (Array de objetos)</li>
        <li>Consumir datos desde una API</li>
      </ul>

      <div id="contenido"></div>

      <button type="button" id="cargarTxt">Obtener desde TXT</button>
      <button type="button" id="cargarJSON">Cargar JSON - Objeto</button>
      <button type="button" id="cargarJSONArray">Cargar JSON - Array</button>
      <button type="button" id="cargarAPI">Cargar API</button>
    </center>
    <script>
      
    </script>
  </body>
</html>
```

#### Recursos
- **datos.txt**
```txt
Informacion desde un archivo .txt
```
- **empleado.json**
```json
{
     "id" : 1,
     "nombre" : "Pepe",
     "departamento" : "Desarrollo Web"
}
```
- **empleados.json**
```json
[
     {
          "id" : 1,
          "nombre" : "Pepe",
          "departamento" : "Desarrollo Web"
     },
     {
          "id" : 2,
          "nombre" : "Luis",
          "departamento" : "Diseño Web"
     },
     {
          "id" : 3,
          "nombre" : "María",
          "departamento" : "Marketing"
     },
     {
          "id" : 4,
          "nombre" : "Eva",
          "departamento" : "RRHH"
     }
]
```

[![JavaScript](https://img.shields.io/badge/Fetch_API-c08a44?style=for-the-badge&label=&#9650;&logoColor=white&labelColor=101010)](https://github.com/Alberto-mt/JavaScript_JQuery/blob/main/JavaScript/Apuntes/categories/Fetch_API.md)
