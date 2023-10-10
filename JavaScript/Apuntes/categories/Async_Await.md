## JavaScript moderno
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white&labelColor=101010)](https://github.com/Alberto-mt/JavaScript_JQuery/blob/main/JavaScript/Apuntes/index.md)

### Async-Await
[![JavaScript](https://img.shields.io/badge/Async_Await-44c04c?style=for-the-badge&logo=javascript&logoColor=white&labelColor=101010)](https://github.com/Alberto-mt/JavaScript_JQuery/blob/main/JavaScript/Apuntes/categories/Async_Await.md)

#### Try-Catch
Declaración en JavaScript se utiliza para detectar y manejar errores que ocurren durante la ejecución de un bloque de código. Le permite intentar ejecutar un bloque de código y, si ocurre un error, puede detectarlo y manejarlo sin que el programa falle.

Uso para partes criticas, como una consulta a una API, autenticar a un usuario, acciones que nos permitan que en caso de fallar nuestra aplicación continue funcionando pero también obtener un mensaje de error...

```js
// Try-Catch
try {
  holaMundo();
} catch (error) {
  console.log(`error: ${error}`);
}

console.log("La app continua funcionando");
```

#### Async-Await
Permite escribir código asincrónico de una manera más sincrónica y legible. Está construido sobre promesas y proporciona una manera de manejar operaciones asincrónicas utilizando una sintaxis más secuencial y sencilla.

Cómo funciona Async-Await:
Cuando se declara una función con la palabra clave async, se convierte en una función asincrónica. Dentro de esta función, puede utilizar la palabra clave await para pausar la ejecución de la función hasta que se resuelva una promesa. La palabra clave await solo se puede utilizar dentro de una función asincrónica.

```js
// Async-Await

// Promise
function documentoDownload() {
  return new Promise((resolve, reject) => {
    const error = true;

    setTimeout(() => {
      if (!error) {
        resolve("success: Descarga realizada");
      } else {
        reject("error: El documento no se encuentra disponible");
      }
    }, 3000);
  });
}

// Async await
async function descarga() {
  console.log("Esperando");
  try {
    //  Pausar la ejecución de la función hasta que se resuelva una promesa
    const respuesta = await documentoDownload(); 
    console.log(respuesta);
  } catch (error) {
    console.log(error);
  }
}
descarga();

// Este código se continua ejecutando mientras que el await sigue esperando por su respuesta
console.log("La app continua funcionando");
```

#### Ejemplo de Async-Await con Function Declaration
```js
// Async Await con Function Declaration

      // Promise
      function documentoDownload() {
        return new Promise((resolve, reject) => {
          const error = true;

          setTimeout(() => {
            if (!error) {
              resolve("success: Descarga realizada");
            } else {
              reject("error: El documento no se encuentra disponible");
            }
          }, 3000);
        });
      }

      // Async-Await
      const descarga = async() => {
        console.log("Esperando");
        try {
          //  Pausar la ejecución de la función hasta que se resuelva una promesa
          const respuesta = await documentoDownload(); 
          console.log(respuesta);
        } catch (error) {
          console.log(error);
        }
      }
      descarga();

      // Este código se continua ejecutando mientras que el await sigue esperando por su respuesta
      console.log("La app continua funcionando");
```

#### Ejemplo de varias Promise en un Async-Await (Promise.all())
```js
// Async Await con Function Declaration

// Promise
function documentoDownload() {
  return new Promise((resolve) => {
    console.log("Esperando descarga...");
    setTimeout(() => {
      resolve("success: Descarga realizada");
    }, 3000);
  });
}

// Promise
function documentoOpen() {
  return new Promise((resolve) => {
    console.log("Esperando abrir...");
    setTimeout(() => {
      resolve("success: Documento abierto");
    }, 4000);
  });
}

// Async_Await
// const descarga = async () => {
//   try {
//     // Primer await
//     const respuestaDownload = await documentoDownload();
//     console.log(respuestaDownload);
//     // Segundo await
//     const respuestaOpen = await documentoOpen();
//     console.log(respuestaOpen);
//   } catch (error) {
//     console.log(error);
//   }
// };

// La solución, Promise.all();
const descarga = async () => {
  try {
    const respuesta = await Promise.all([
    documentoDownload(),
    documentoOpen(),
    ]);
    console.log(respuesta);
    console.log(respuesta[0]);
    console.log(respuesta[1]);
  } catch (error) {
    console.log(error);
  }
};

descarga();

// Este código se continua ejecutando mientras que el await sigue esperando por su respuesta
console.log("La app continua funcionando");
```

#### Ejemplos de Async-Await a API
```js
// Async-Await a API

document.addEventListener("DOMContentLoaded", getFotosAll);

// function getFotosAll() {
//     fetch('https://picsum.photos/list')
//         .then( respuesta => {
//             return respuesta.json()
//         })
//         .then(resultado => {
//             console.log(resultado)
//         })
// }

// async function getFotosAll() {
//   const resultado = await fetch("https://picsum.photos/list");
//   const respuesta = await resultado.json();
//   console.log(respuesta);
// }

async function getFotosAll() {
  try {
    const resultado = await fetch("https://picsum.photos/list");
    const respuesta = await resultado.json();
    console.log(respuesta);
  } catch (error) {
    console.log(error);
  }
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
    <title>Async Await</title>
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
      <h1>Async-Await</h1>
      <ul style="max-width: 400px; text-align: left">
        <li>Try-Catch</li>
        <li>Async-Await</li>
        <li>Ejemplo de Async-Await con Function Declaration</li>
        <li>Ejemplo de varias Promise en un Async-Await (Promise.all())</li>
        <li>Ejemplos de Async-Await a API</li>
      </ul>
    </center>
    <script>
      
    </script>
  </body>
</html>
```

[![JavaScript](https://img.shields.io/badge/Async_Await-44c04c?style=for-the-badge&label=&#9650;&logoColor=white&labelColor=101010)](https://github.com/Alberto-mt/JavaScript_JQuery/blob/main/JavaScript/Apuntes/categories/Async_Await.md)
