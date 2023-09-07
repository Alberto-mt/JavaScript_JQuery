## JavaScript moderno
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white&labelColor=101010)](https://github.com/Alberto-mt/JavaScript_JQuery/blob/main/JavaScript/Apuntes/index.md)

### Strings - Cadenas de caracteres
[![JavaScript](https://img.shields.io/badge/Strings-c044b8?style=for-the-badge&logo=javascript&logoColor=white&labelColor=101010)](https://github.com/Alberto-mt/JavaScript_JQuery/blob/main/JavaScript/Apuntes/categories/Strings.md)

#### Métodos de Strings
| Método  | Descripción  |
|:-:|---|
| **.length**  | Longitud de cadena de texto  |
| **.indexOf()**  | Posición que tiene el texto en caso de encontrarlo<br>-1 Significa que no lo pudo encontrar  |
| **.includes()**  | Conocer si un texto existe<br>Existe >> true<br>No existe >> false  |
| **.concat()**  | Concatenar strings o variables  |
| **.trimStart()**  | Elimina todos los espacios en blancos del inicio  |
| **.trimEnd()**  | Elimina todos los espacios en blancos del final  |
| **.trim()**  | Elimina todos los espacios en blancos del inicio y el final  |
| **.replace('a', 'b')**  | Remplazar strings  |
| **.slice(0,1)**  | Extraer una parte de una cadena<br>No el número es mayor al segundo, va a cortar hacia atras (voltear los números)  |
| **.substring(0,1)**  | Extraer una parte de una cadena<br>Si el número es mayor al segundo, va a cortar hacia atras (voltear los números)|
| **.charAt(0)**  | Mostrar primer caracter de un string  |
| **.repeat(0)**  | Repetir un string un numero de veces  |
| **.split('')**  | Dividir un string en un array por el string indicado  |
| **.toUpperCase()**  | Cambiar todos los caracteres a mayusculas  |
| **.toLowerCase()**  | Cambiar todos los caracteres a mayusculas  |
| **.toString()**  | Convertir a string (parsear)  |

#### Ejemplo creación de cadenas
```js
// Existen tres formas de crear una cadena
const usuario1 = 'Pepe Lopez';
const usuario2 = String('Pepe Lopez');
// Creación de objeto cadena
const usuario3 = new String('Pepe Lopez');
console.log(usuario1);
console.log(usuario2);
console.log(usuario3);

// Reglas para crear los strings
// Utiliza comillas sencillas
const usuario4 = 'Pepe Lopez';
// Utiliza comillas o dobles
const usuario5 = "Pepe Lopez";
console.log(usuario4);
console.log(usuario5);

// Ejemplo de uso de comillas
const hora = '12 horas 20\' 35\"';
console.log(hora);
```

#### Ejemplo de métodos de Strings
```js
const usuario = 'Pepe Lopez';
const edad = " 24 años";
const _usuario_ = "       Pepe Lopez      ";
const numero = 1500;

// .length
console.log(usuario.length);

// .indexOf('')
console.log(usuario.indexOf("Lopez")); 
console.log(usuario.indexOf("Ruiz")); 

// .includes('')
console.log(usuario.includes("Pepe")); 
console.log(usuario.includes("pepe"));

// .concat()
// Concactenar un string
console.log(usuario.concat(" Martinez"));
// Concactenar una variable
console.log(usuario.concat(edad)); 
// Otras formas de concatenar:
console.log(usuario + edad);
console.log(usuario + " con un edad de: " + edad);
console.log("El usuario: " + usuario + " tiene la edad de: " + edad);
console.log("El usuario:", usuario, "tiene la edad de:", edad);
// ES6 concatenar con Template String
console.log(`El usuario: ${usuario} tiene la edad de: ${edad}`);

// .trimStart()
console.log(_usuario_.trimStart());
console.log(_usuario_.trimStart().length);

// .trimEnd()
console.log(_usuario_.trimEnd());
console.log(_usuario_.trimEnd().length);

// .trim()
console.log(_usuario_.trim());
console.log(_usuario_.trim().length);

// .replace("a", "b")
console.log(usuario.replace("Pepe", "Luis"));

// .slice(0, 1)
// Iniciar en 0 y 4
console.log(usuario.slice(0, 4)); 
// Cortar desde el 5 hasta el fin
console.log(usuario.slice(5));
// cortar desde 5 hasta el 8
console.log(usuario.slice(5, 8));
// Si el primer número es mayor, no va a cortar hacia atras
console.log(usuario.slice(10, 5));

// .substring(0, 1)
// Iniciar en 0 y 4
console.log(usuario.substring(0, 4));
// Si el número es mayor al segundo, va a cortar hacia atras (voltear los números)
console.log(usuario.substring(10, 5)); 

// .charAt(0)
console.log(usuario.charAt(0));

// .repeat(0)
console.log(usuario.repeat(3));
// Redondear a entero
console.log(usuario.repeat(2.2)); 

// .split('')
console.log(usuario.split(" "));
console.log(usuario.split("e"));

// .toUpperCase() 
console.log(usuario.toUpperCase());

// .toLowerCase()
console.log(usuario.toLowerCase());

// .toString()
console.log(numero);
console.log(numero.toString());

```

#### Html base
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Strings</title>
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
      <h1>Strings</h1>
      <br />
      <h2>Strings - Cadenas de caracteres</h2>
    </center>
  </body>
</html>
```

[![JavaScript](https://img.shields.io/badge/Strings-c044b8?style=for-the-badge&label=&#9650;&logoColor=white&labelColor=101010)](https://github.com/Alberto-mt/JavaScript_JQuery/blob/main/JavaScript/Apuntes/categories/Strings.md)
