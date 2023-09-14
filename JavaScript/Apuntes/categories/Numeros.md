## JavaScript moderno
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white&labelColor=101010)](https://github.com/Alberto-mt/JavaScript_JQuery/blob/main/JavaScript/Apuntes/index.md)

### Números
[![JavaScript](https://img.shields.io/badge/Numeros-c08a44?style=for-the-badge&logo=javascript&logoColor=white&labelColor=101010)](https://github.com/Alberto-mt/JavaScript_JQuery/blob/main/JavaScript/Apuntes/categories/Numeros.md)

#### Métodos de números
| Método  | Descripción  |
|:-:|---|
| **Math.PI**  | Numero PI  |
| **Math.round(1.5)**  | Redondeo de un número  |
| **Math.ceil(1.7)**  | Redondeo superior de un número  |
| **Math.floor(1.3)**  | Redondeo inferior de un número  |
| **Math.sqrt(24)**  | Raiz cuadrada de un número  |
| **Math.abs(-100)**  | Absoluto de un número  |
| **Math.pow(2, 3)**  | Potencia de un número  |
| **Math.min(1,2,4,2,1,0,9)**  | Número de mínimo valor de números  |
| **Math.max(1,2,4,2,1,0,9)**  | Número de máximo valor de números  |
| **Math.random()**  | Número aleatorio  |
| **Math.floor( Math.random() * 10 )**  | Número aleatorio dentro de un rango  |
| **Number.parseInt(num)**  | Convertir número String a número entero  |
| **Number.parseFloat(num)**  | Convertir número String a número decimal  |
| **Number.isInteger(num)**  | Saber si número es entero  |
| **num.toString()**  | Convertir número en String  |
| **numDecimal.toFixed(2)**  | Redondear número decimal a 2 decimales  |

#### Ejemplo de creación de números
```js
// Diferencia entre número y string
const num1 = 30;
const num2 = "30";
console.log(num1);
console.log(num2);

// Crear Números
const num3 = 10;
const num4 = 20;
const num5 = 14.16;
const num6 = 0.10125;
const num7 = -10;
console.log(num3);
console.log(num4);
console.log(num5);
console.log(num6);
console.log(num7);

// Creación de objeto número
const num8 = new Number(20);
console.log(num8);
```



#### Ejemplo de métodos Math de números
```js
// El objeto Math de JavaScript le permite realizar tareas matemáticas con números
let resultado;

// Math.PI
resultado = Math.PI;
console.log(resultado);

// Math.round(n)
resultado = Math.round(1.5);
console.log(resultado);

// Math.ceil(n)
resultado = Math.ceil(1.7);
console.log(resultado);

// Math.floor(n)
resultado = Math.floor(1.3);
console.log(resultado);

// Math.sqrt(n)
resultado = Math.sqrt(24);
console.log(resultado);

// Math.abs(n)
resultado = Math.abs(-100);
console.log(resultado);

// Math.pow(n, n)
resultado = Math.pow(2, 3);
console.log(resultado);

// Math.min(n,n,n)
resultado = Math.min(1,2,4,2,1,0,9);
console.log(resultado);

// Math.max(n,n,n)
resultado = Math.max(1,2,4,2,1,0,9);
console.log(resultado);

// Math.random()
resultado = Math.random();
console.log(resultado);

// Math.floor( Math.random() * n )
resultado = Math.floor( Math.random() * 10 );
console.log(resultado);
```

#### Ejemplo de conversión de números (parsear)
```js
const num1 = "9";
const num2 = "Nueve";
const num3 = "9.5";
const num4 = 9;
console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);

// Convertir de String a Número
console.log(Number.parseInt(num1));
console.log(Number.parseInt(num3));

// Convertir a número con decimales
console.log(Number.parseFloat(num3));

// Saber si un número es entero o no
console.log(Number.isInteger(num4));
console.log(Number.isInteger(num2));

// Convertir número en String
console.log(num4.toString());
```

#### Html base
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Numeros</title>
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
      <h1>Números</h1>
      <br />
      <h2>Números - Math - Number</h2>
    </center>
  </body>
</html>
```

[![JavaScript](https://img.shields.io/badge/Numeros-c08a44?style=for-the-badge&label=&#9650;&logoColor=white&labelColor=101010)](https://github.com/Alberto-mt/JavaScript_JQuery/blob/main/JavaScript/Apuntes/categories/Numeros.md)
