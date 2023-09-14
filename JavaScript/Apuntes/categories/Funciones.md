## JavaScript moderno
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white&labelColor=101010)](https://github.com/Alberto-mt/JavaScript_JQuery/blob/main/JavaScript/Apuntes/index.md)

### Funciones
[![JavaScript](https://img.shields.io/badge/Funciones-44c04c?style=for-the-badge&logo=javascript&logoColor=white&labelColor=101010)](https://github.com/Alberto-mt/JavaScript_JQuery/blob/main/JavaScript/Apuntes/categories/Funciones.md)

#### Funciones del core
| Función  | Descripción  |
|:-:|---|
| **alert("¡Hola Mundo!")**  | Muestra un mensaje en una ventana emergente en el navegador  |
| **prompt("Escribe tu nombre")**  | Muestra una ventana emergente con un campo de entrada donde el usuario puede ingresar datos  |
| **document.write("¡Hola Mundo!")**  | Se utiliza para escribir contenido en el documento HTML  |

#### Métodos de consola
| Método  | Descripción  |
|:-:|---|
| **console.log()**  | Imprime mensajes de registro en la consola  |
| **console.warn()**  | Imprime un mensaje de advertencia en la consola  |
| **console.error()**  | Imprime un mensaje de error en la consola  |
| **console.table()**  | Muestra una tabla en la consola con los datos proporcionados (array/objeto como argumento)  |
| **console.time()<br>console.timeEnd()**  | Mide el tiempo de ejecución de un bloque de código  |

#### Ejemplo de creación de funciones
```js
// Mediante function
function saludo() {
  console.log("Hola Mundo");
}
// Llamada a función
saludo();

// Mediante expresión de función (se asigna como si fuera una variable)
const despedida = function () {
  console.log("Hasta pronto");
};
// Llamada a función
despedida();

// Funciones con parametros
function saludoPersonalizado(nombre, apellido) {
  console.log("Hola " + nombre + " " + apellido);
  console.log(`Hola ${nombre} ${apellido}`);
}
// LLamada a función con argumentos
saludoPersonalizado("Pepe", "Ruiz");

// Funciones de retorno
function sumar(a, b) {
  return a + b;
}
const resultado = sumar(2.75, 4.95);
console.log(resultado);

// Funciones de retorno 2
let total = 0;
function pedido(precio) {
  return (total += precio);
}

function precioterraza(total) {
  return 1.05 * total;
}

total = pedido(2.75);
total = pedido(3.5);
total = pedido(10.95);
console.log(`Total:  ${total}`);

const totalPagar = precioterraza(total);
console.log(`Total con suplemento terraza:  ${totalPagar}`); 
```

#### Ejemplo de Hoisting
```js
// JavaScript se ejecuta digamos en 2 vueltas - Eso se le conoce como Hoisting 
// La primera vuelta registra todas las funciones y determina las variables, esta etapa se le llama de creación
// La segunda pasada es la que executa el codigo, se llama de ejecución

// Llamada a función 
saludo();
// Mediante function 
function saludo() {
  console.log("Hola Mundo");
}

// Despedida debe ser primero inicializada y despues llamada
// Llamada a función
despedida(); 
// Mediante expresión de función (se asigna como si fuera una variable)
const despedida = function () {
  console.log("Hasta pronto");
};
```

#### Ejemplo de diferencia entre función y método
```js
const num1 = 2023;
const num2 = "2023";

// Función
console.log(parseInt(num2));
console.log(typeof num2);
console.log("");

// Método
console.log(num1.toString());
console.log(typeof num1);
```
#### Ejemplo de funciones del core
```js
// Mostrar mensaje en ventana
alert("¡Hola Mundo!");

// Pedir entrada de datos
var nombre = prompt("Escribe tu nombre");
alert("Hola " + nombre + "!");

// Escribir en el documento html
document.write("¡Hola Mundo!");
```

#### Ejemplo de métodos de consola
```js
// console.log()
console.log("Hola, mundo!");

// console.warn()
console.warn("Advertencia: has olvidado la contraseña");

// console.error()
console.error("Error: 500");

// console.table()
const dias = [
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
  "Domingo",
];
console.table(dias);

// console.time() / console.timeEnd()
console.time("miTemporizador");
// Bloque de código que deseas medir el tiempo de ejecución
for (let i = 0; i < 1000000; i++) {
  // Hacer algo
}
console.timeEnd("miTemporizador");
```

#### Ejemplo de comunicación entre funciones
```js
app();

function app() {
  console.log("Iniciando App");
  conexionDB();
}

function conexionDB() {
  console.log("success:   Conexión realizada");
  actualización("success:   Actualización realizada");
}

function actualización(msg) {
  console.log(msg);
  console.log("Conexión finalizada");
}
```

#### Ejemplo de comunicación entre funciones
```js
// Métodos de propiedad
const reproductor = {
  reproducir: function (id) {
    console.log(`start: ${id}`);
  },
  pausar: function (id) {
    console.log(`pause: ${id}`);
  }
};

// Métodos fuera de la constante
reproductor.parar = function(id) {
  console.log(`stop: ${id}`);
}

reproductor.reproducir(9);
reproductor.pausar(9);
reproductor.parar(9);
```

#### Ejemplo de Arrow functions (funciones flecha)
```js
// Functions
const reproducir = function () {
  console.log("start");
};

// Arrow functions
const pausar = () => {
  console.log("pause");
};

// Una linea no requiere llaves
const parar = () => console.log("stop");

// Retornar un valor
const siguiente = () => "next >>";

// Llamada a funciones
reproducir();
pausar();
parar();
console.log(siguiente());

// Parametros en Arrow Function...

// Parametros
const id = (num) => console.log(`track: ${num}`);
id(1);

// si es un solo parmetro no ponemos el parentesis
const idUltimo = num => console.log(`track: ${num}`);
idUltimo(10);

// Multiples parametros si requieren parentesis
const cancion = (id, nombre) =>
  console.log(`${id}: ${nombre}`);
  cancion(2, "Rallando el sol");
```

#### Html base
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Funciones</title>
    <script>
      
    </script>
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
      <h1>Funciones</h1>
      <br />
      <h2>Funciones</h2>
    </center>
  </body>
</html>
```

[![JavaScript](https://img.shields.io/badge/Funciones-44c04c?style=for-the-badge&label=&#9650;&logoColor=white&labelColor=101010)](https://github.com/Alberto-mt/JavaScript_JQuery/blob/main/JavaScript/Apuntes/categories/Funciones.md)
