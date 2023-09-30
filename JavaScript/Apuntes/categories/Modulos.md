## JavaScript moderno
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white&labelColor=101010)](https://github.com/Alberto-mt/JavaScript_JQuery/blob/main/JavaScript/Apuntes/index.md)

### Modulos
[![JavaScript](https://img.shields.io/badge/Modulos-c08a44?style=for-the-badge&logo=javascript&logoColor=white&labelColor=101010)](https://github.com/Alberto-mt/JavaScript_JQuery/blob/main/JavaScript/Apuntes/categories/Modulos.md)

#### IIFE: Expresiones de función ejecutadas inmediatamente
Las IIFE (Immediately Invoked Function Expressions) son expresiones de función que se ejecutan inmediatamente después de ser definidas. Son una forma de encapsular y proteger el alcance de variables y funciones en JavaScript.
Una IIFE se define como una función anónima que se envuelve entre paréntesis y se invoca inmediatamente mediante los paréntesis adicionales al final.
| Ventaja  | Descripción  |
|:-:|---|
| **Protección del alcance**  | Las variables y funciones definidas dentro de una IIFE solo están disponibles dentro de su propio ámbito, evitando así la contaminación del ámbito global. Previene conflictos de nombres y facilita el mantenimiento del código  |
| **Módulos y encapsulación**  | Se utilizan a menudo para crear módulos y encapsular el código . Al definir variables y funciones dentro de una IIFE, se crea un ámbito local donde pueden existir sin interferir con otros componentes del código  |
| **Evitar conflictos**  | Al encapsular el código en una IIFE, se evitan conflictos de nombres con otras bibliotecas o scripts en la página. Es útil en entornos donde se cargan múltiples scripts  |

#### Ejemplo de IIFE
```js
// IIFE 
(function () {
  // Código de la IIFE aquí
  console.log("Dentro de IIFE");
})();

(function () {
  const nombreAlumno = "Pepe";
  let edad = 23;
  console.log(nombreAlumno);
  console.log(edad);

  // Problema de implementar un IIFE:
  // Evita que el código se mezcle con otro, pero  si queremos tener un código más ordenado y separar en distintos archivos sería imposible hacerlo

  // En este caso la forma de hacerlo seria con:
  // window.nombreAlumno =  'Pepe';
  // console.log(window.nombreAlumno);
})();
window.nombreAlumno = "Pepe";
console.log(window.nombreAlumno);
```

#### Módulos de JavaScript
Los módulos en JavaScript son una característica que permite organizar y reutilizar el código de manera más efectiva. Los módulos permiten dividir el código en piezas más pequeñas y manejables, lo que facilita la organización y el mantenimiento del código.

Un módulo en JavaScript es un archivo que contiene código relacionado que puede ser exportado e importado por otros archivos. Los módulos pueden contener variables, funciones, clases u otros elementos que pueden ser utilizados en otros archivos.

- **Archivo square.js**
```js
export class Square {
  constructor(length) {
    this.length = length;
  }

  calculateArea() {
    return this.length * this.length;
  }
}
```

- **Archivo main.js**
```js
import { Square } from './square.js';

const square = new Square(5);
console.log(square.calculateArea()); // Output: 25
```
Se exporta la clase Square desde el archivo square.js utilizando la palabra clave export. Luego, en el archivo main.js, se importa la clase Square utilizando la palabra clave import y se utiliza para crear un objeto square y calcular el área del cuadrado.

#### Ejemplo de módulos 
- **Archivo app.js**
```js
"use strict";
// 1) El Problema
// console.log(nombreCliente);

// 2) Esto nos puede llevar a variables que se mezclen con otras en especial si el código es mantenido por múltiples personas o también si decidimos implementar librerías...

// La solución es agrupar cada archivo en lo que se conoce como un IIFE (irse al otro archivo)
// console.log(window.nombreCliente);

// Para leer ese export utilizamos
import { nombreCliente } from "./cliente.js";

console.log(nombreCliente); // También nos va a marcar un error por lo tanto agregamos type="module"

// Comentar el código anterior
import { nombreCliente, ahorro } from "./cliente.js";

// Y puedes exportar o importar todo, variables, funciones, classes

// 3  ) Exportar e importar funciones
import { nombreCliente, ahorro, mostrarInformacion } from "./cliente.js";

let cliente = mostrarInformacion(nombreCliente, ahorro);
console.log(cliente);

// 4)
import { nombreCliente, ahorro, Cliente } from "./cliente.js";

let cliente = new Cliente(nombreCliente, ahorro);
console.log(cliente.mostrarInformacion());

// 5)
import { Cliente } from "./cliente.js";
import { Empresa } from "./empresa.js";

const nombreCliente = "Juan",
  ahorroCliente = 400;

let cliente = new Cliente(nombreCliente, ahorroCliente);
console.log(cliente.mostrarInformacion());

const nombreEmpresa = "Udemy",
  ahorroEmpresa = 1000000000,
  categoriaEmpresa = "aprendizaje";

let empresa = new Empresa(nombreEmpresa, ahorroEmpresa, categoriaEmpresa);
console.log(empresa.mostrarInformacion());

// 6
import funcion from "./cliente.js";
funcion();
```

- **Archivo cliente.js**
```js
"use strict";

// 1) El Problema...
// const nombreCliente =  'Juan';
// let ahorro = 200;

// 2) Los IIFE son funciones que se ejecutan inmediatamente que son leidas...
// Esta forma evitará que estas variables definidas en este archivo se puedan mezclar con las de otros archivos... y su sintaxis es la siguiente

(function() {
    const nombreCliente =  'Juan';
    let ahorro = 200;

    // El problema es que implementar un IIFE, si evita que nuestro código se mezcle con otro, pero el problema que tendriamos es que si queremos tener un código más ordenado y separar en distintos archivos sería imposible hacerlo
    // window.nombreCliente =  'Juan';
    // Lo cual es una solución, he visto proyectos grandes que están registrados de esa forma para mantener acceso a las funciones y métodos  
})();

// Para ello son muy útiles los modulos y 2 palabras, export e import...
// Veamos un ejemplo de export
export const nombreCliente =  'Juan'; // Esto nos va amarcar un error, nos dirá que los exports solo funcionan en modules...
// Hay que abrir el index.js y declararlo con type="module"

// Importar y exportar multiples valores
// Exportar e importar funciones
// También puedes exportar e importar funciones
export const nombreCliente =  'Juan';
export const ahorro = 200

// 3 ) 
export function mostrarInformacion(nombre, ahorro) {
    return `Cliente: ${nombre} - Ahorro: ${ahorro}`;
}

// 4)
// Exportar una clase
export class Cliente {
    constructor(nombre, ahorro) {
        this.nombre = nombre;
        this.ahorro = ahorro;
    }

    mostrarInformacion() {
        return `Cliente: ${this.nombre} - Ahorro: ${this.ahorro}`;
    }
}

// 6)  EXPORT DEFAULT
// Cada archivo puede tener múltiples exports, pero solo un export default, este export default puede tener un nombre o no...
export default function funcion() {
    console.log('Función por default')
}

export default function () {
    console.log('Función por default')
}
```

- **Archivo empresa.js**
```js
// 5) Heredar una lase exportada...
import { Cliente }  from './cliente.js';

export class Empresa extends Cliente{
    constructor(nombre, ahorro, categoria) {
        super(nombre, ahorro);
        this.categoria = categoria;
    }
    mostrarInformacion() {
        return `Cliente: ${this.nombre} - Ahorro: ${this.ahorro} - Categoria ${this.categoria}`;
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
    <title>Modulos</title>
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
      <h1>Modulos</h1>
      <ul style="max-width: 400px; text-align: left">
        <li>IIFE: Expresiones de función ejecutadas inmediatamente</li>
        <li>Ejemplo de IIFE</li>
        <li>Módulos de JavaScript</li>
        <li>Ejemplo de módulos </li>
      </ul>
    </center>
    <script>
      
    </script>
    <!-- <script src="empresa.js"></script> -->
    <!-- <script src="cliente.js" type="module"></script> -->
    <!-- <script src="app.js" type="module"></script> -->
  </body>
</html>
```

[![JavaScript](https://img.shields.io/badge/Modulos-c08a44?style=for-the-badge&label=&#9650;&logoColor=white&labelColor=101010)](https://github.com/Alberto-mt/JavaScript_JQuery/blob/main/JavaScript/Apuntes/categories/Modulos.md)
