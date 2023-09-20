## JavaScript moderno
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white&labelColor=101010)](https://github.com/Alberto-mt/JavaScript_JQuery/blob/main/JavaScript/Apuntes/index.md)

### Eventos
[![JavaScript](https://img.shields.io/badge/Eventos-447ac0?style=for-the-badge&logo=javascript&logoColor=white&labelColor=101010)](https://github.com/Alberto-mt/JavaScript_JQuery/blob/main/JavaScript/Apuntes/categories/Eventos.md)

#### Eventos
| Tipo  | Evento  | Descripción  |
|:-:|:-:|---|
| **Carga documento**  |**DOMContentLoaded**  |  Se activa cuando el documento HTML inicial se ha cargado y analizado por completo  |
| **Mouse**  |**click**  | Se dispara cuando se hace clic en un elemento   |
| **Mouse**  |**dblclick**  | Se dispara cuando se hace doble clic en un elemento   |
| **Mouse**  |**mousedown**  | Se dispara cuando se presiona un botón del ratón mientras el puntero está sobre un elemento   |
| **Mouse**  |**mouseup**  | Se dispara cuando se suelta un botón del ratón después de presionarlo   |
| **Mouse**  |**mousemove**  | Se dispara cuando se mueve el ratón sobre un elemento   |
| **Mouse**  |**mouseover**  | Se dispara cuando el puntero del ratón entra en un elemento   |
| **Mouse**  |**mouseout**  | Se dispara cuando el puntero del ratón sale de un elemento   |
| **Mouse**  |**mouseenter**  | Se dispara cuando el puntero del ratón entra en un elemento, pero no se propaga a los elementos secundarios   |
| **Mouse**  |**mouseleave**  | Se dispara cuando el puntero del ratón sale de un elemento, pero no se propaga a los elementos secundarios   |
| **Teclado**  |**event.key**  | Obtener la tecla pulsada   |
| **Teclado**  |**keydown**  | Se lanza cuando se pulsa una tecla   |
| **Teclado**  |**keyup**  | Se lanza cuando se suelta una tecla   |
| **Teclado**  |**keypress**  | Se lanza cuando se pulsa una tecla que produce un carácter imprimible   |
| **Teclado**  |**blur**  | Se lanza cuando se sale del input (para validaciones)  |
| **Formulario**  |**preventDefault()**  | Se utiliza para cancelar el comportamiento predeterminado de un evento   |
| **Formulario**  |**submit**  | Se dispara cuando se envía un formulario, ya sea haciendo clic en un botón de envío o presionando la tecla "Enter" en un campo de entrada de texto   |
| **Formulario**  |**reset**  | Se dispara cuando se restablece un formulario, ya sea haciendo clic en un botón de reinicio o llamando al método reset() del formulario   |
| **Scroll**  |**scroll**  | Se utilizan para detectar cuando la vista del documento o un elemento se desplaza   |

#### Ejemplo de método para llamar a eventos y DOMContentLoaded
```js
// Método para llamar a eventos
// document.addEventListener;
console.log(document.addEventListener);

// DOMContentLoaded 
console.log(1);
document.addEventListener("DOMContentLoaded", () => {
  console.log(2);
}); // Nota todos los eventos que hay disponibles
console.log(3);
```
#### Ejemplo de eventos de mouse
```js
document.addEventListener("DOMContentLoaded", () => {
  const titulo = document.querySelector("h1");

  titulo.addEventListener("mouseenter", () => {
    console.log("Entrando a título");
  });

  titulo.addEventListener("mouseout", () => {
    console.log("Saliendo de título");
  });
});
```

#### Ejemplo de eventos de teclado
```js
document.addEventListener("keydown", function (event) {
  // Obtener la tecla pulsada
  var tecla = event.key;

  // Ejecutar la acción correspondiente
  if (tecla === "Enter") {
    console.log("Enter");
  } else if (tecla === "Escape") {
    console.log("Escape");
  }
});

// Trabajando sobre input formulario
// const busqueda = document.querySelector(".busqueda");
// busqueda.addEventListener("input", leerInput);

// function leerInput(e) {
  // Información
  // console.log(e);
  // Sobre que elemento se está trabajando
  // console.log(e.type);
  // Input completo
  // console.log(e.target);
  // lo que el usuario escribe
  // console.log(e.target.value);
// }
```

#### Ejemplo de eventos de formulario
```js
const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', function(e) {
  // Información del evento
  console.log(e);
  console.log(e.target.method)
  console.log(e.target.action)
  // Evita que el formulario se envíe y la página se recargue
  e.preventDefault(); 
  // Acciones a realizar con los datos del formulario
  console.log("Enviando datos al servidor...");
});

formulario.addEventListener('reset', function(e) {
  // Evita que el formulario se restablezca a sus valores predeterminados
  e.preventDefault();
  // Acciones a realizar al restablecer el formulario
  console.log("Vuelve a rellenar el formulario");
});
```

#### Ejemplo de evento scroll
```js
window.addEventListener("scroll", () => {
  // Detectar el Scrolling vertical
  // const pxScroll = window.scrollY;
  // console.log(pxScroll);

  // Detectar un elemento al dar scroll...
  const titulo = document.querySelector("h1");
  const ubicacion = titulo.getBoundingClientRect(); 
  // Este método te da el tamaño de un elemento y su ubicación respecto a la ubicación actual..
  // console.log(ubicacion);
  if (ubicacion.top < 100) {
    console.log("Ya esta visible");
  } else {
    console.log("Aún no esta visible..");
  }
});
```

#### Ejemplo de Bubbling (propagación de eventos)
```js
// Event Bubling es cuando presionas en un evento, pero ese evento se propaga por muchos otros dando resultados inesperados

const titulo = document.querySelector("h1");
const lista = document.querySelector("ul");

titulo.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("click titulo");
});
lista.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("click lista");
});
```

#### Html base
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Eventos</title>
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
      <br /><br /><hr /><br /><br />
      <h1 class="tituloPrincipal">Eventos</h1>
      <ul style="max-width: 400px; text-align: left">
        <li>Eventos</li>
        <li>Ejemplo de método para llamar a eventos y DOMContentLoaded</li>
        <li>Ejemplo de eventos de mouse</li>
        <li>Ejemplo de eventos de teclado</li>
        <li>Ejemplo de eventos de formulario</li>
        <li>Ejemplo de evento scroll</li>
        <li>Ejemplo de Bubbling (propagación de eventos)</li>
      </ul>
    </center>
    <script>
      
    </script>
  </body>
</html>
```

[![JavaScript](https://img.shields.io/badge/Eventos-447ac0?style=for-the-badge&label=&#9650;&logoColor=white&labelColor=101010)](https://github.com/Alberto-mt/JavaScript_JQuery/blob/main/JavaScript/Apuntes/categories/Eventos.md)
