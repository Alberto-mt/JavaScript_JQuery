## JavaScript moderno
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white&labelColor=101010)](https://github.com/Alberto-mt/JavaScript_JQuery/blob/main/JavaScript/Apuntes/index.md)

### Estructuras
[![JavaScript](https://img.shields.io/badge/Estructuras-447ac0?style=for-the-badge&logo=javascript&logoColor=white&labelColor=101010)](https://github.com/Alberto-mt/JavaScript_JQuery/blob/main/JavaScript/Apuntes/categories/Estructuras.md)

#### Ejemplo de condicional if/else
```js
const edad = 67;

// Condicional if/else
if (edad >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.error("Eres menor de edad");
}
```

#### Ejemplo de condicional if/else if/else
```js
const edad = 67;

// Condicional if/else if/else
if (edad >= 67) {
  console.warn("Puedes jubilarte");
} else if (edad >= 18) {
  console.log("Puedes trabajar");
} else {
  console.error("No puedes trabajar");
}
```

#### Ejemplo de condicional ternario
```js
const edad = 17;

// Condicional ternario
let mensaje = edad >= 18 ?
  console.log("Eres mayor de edad")
:
  console.error("Eres menor de edad");
```

#### Ejemplo de switch
```js
const opcion = 3;

switch (opcion) {
  case 1:
    console.log("Login de usuario");
    break;
  case 2:
    console.log("Registro de usuario");
    break;
    case 0:
    console.log("Salir");
    break;
  default:
    console.log("Elige una opción");
    break;
}
```

[![JavaScript](https://img.shields.io/badge/Estructuras-447ac0?style=for-the-badge&label=&#9650;&logoColor=white&labelColor=101010)](https://github.com/Alberto-mt/JavaScript_JQuery/blob/main/JavaScript/Apuntes/categories/Estructuras.md)
