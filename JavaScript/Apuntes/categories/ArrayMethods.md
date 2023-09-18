## JavaScript moderno
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white&labelColor=101010)](https://github.com/Alberto-mt/JavaScript_JQuery/blob/main/JavaScript/Apuntes/index.md)

### ArrayMethods
[![JavaScript](https://img.shields.io/badge/ArrayMethods-c08a44?style=for-the-badge&logo=javascript&logoColor=white&labelColor=101010)](https://github.com/Alberto-mt/JavaScript_JQuery/blob/main/JavaScript/Apuntes/categories/ArrayMethods.md)

#### Métodos de arrays
| Método  | Descripción  |
|:-:|---|
| **.length**  | Número de elementos de un array  |
| **.push(\[elemento\])**  | Añadir elemento al array <br>Añadir elemento al final del array  |
| **.unshift(\[elemento\])**  | Añadir elemento al inicio del array  |
| **.pop()**  | Eliminar el ultimo elemento  |
| **.shift()**  | Eliminar el primer elemento  |
| **.includes(\[elemento\])**  | Comprueba si un array contiene un determinado elemento y devuelve true o false.  |
| **.sort()**  | Ordena los elementos de un array en su lugar y devuelve el array ordenado  |
| **.reverse()**  | Invierte el orden de los elementos de un array en su lugar  |
| **.at(\[índice\])**  | Devuelve el elemento indicado por su índice  |
| **.slice(\[índice\])**  | Devuelve una copia superficial de una porción de un array en un nuevo array  |
| **filter(\[condición\])<br>ej: filter((num) => num > 2)**  | Crea un nuevo array con todos los elementos que cumplan una condición proporcionada por una función  |
| **find(\[condición\])<br>ej: find((num) => num > 2)**  | Devuelve el primer elemento de un array que cumple una condición proporcionada por una función  |
| **every(\[condición\])<br>ej: every((num) => num > 2)**  | Comprueba si todos los elementos del array cumplen una condición proporcionada por una función  |
| **some(\[condición\])<br>ej: some((num) => num > 2)**  | Comprueba si al menos un elemento del array cumple una condición proporcionada por una función  |
| **.splice(\[indice\], \[nº de elementos\])**  | Eliminar por índice un número de elementos  |
| **array2 = [...\[array1\], \[elemento\]];**  | Añadir elemento al array con Spread Operator<br>Añadir elemento al final del array  |
| **array2 = [\[elemento\], ...\[array1\]];**  | Añadir elemento al inicio del array con Spread Operator |

#### Ejemplo de métodos de array
```js
console.log(".length");
const arr = [1, 2, 3, 4];
console.log(arr);
console.log(arr.length);
console.log(""); // 4

console.log("push(elemento)");
const arr2 = [1, 2, 3, 4];
console.log(arr2);
arr2.push(0);
console.log(arr2); // [1, 2, 3, 4, 0]
console.log("");

console.log("unshift(elemento)");
const arr3 = [1, 2, 3, 4];
console.log(arr3);
arr3.unshift(0)
console.log(arr3); // (5) [0, 1, 2, 3, 4]
console.log("");

console.log("pop()");
const arr4 = [1, 2, 3, 4];
console.log(arr4);
arr4.pop();
console.log(arr4); // (3) [1, 2, 3]
console.log("");

//   shift()
console.log("shift()");
const arr5 = [1, 2, 3, 4];
console.log(arr5);
arr5.shift();
console.log(arr5); // (3) [2, 3, 4]
console.log("");

//   includes(1)
console.log("includes(1)");
const arr6 = [1, 2, 1, 4];
console.log(arr6);
console.log(arr6.includes(1)); // true
console.log(""); 

//   sort()
console.log("reverse()");
const arr7 = [1, 9, 6, 4];
console.log(arr7);
arr7.sort();
console.log(arr7); // ) [4, 3, 2, 1]
console.log("");

//   reverse()
console.log("reverse()");
const arr8 = [1, 2, 3, 4];
console.log(arr8);
arr8.reverse();
console.log(arr8); // ) [4, 3, 2, 1]
console.log("");

//   at(2)
console.log("at(2)");
const arr9 = [1, 2, 3, 4];
console.log(arr9);
console.log(arr9.at(2));
console.log(""); // 3

//   slice(2)
console.log("slice(2)");
const arr10 = [1, 2, 3, 4];
console.log(arr10);
console.log(arr10.slice(2));
console.log(""); // (2) [3, 4]

//   filter((num) => num > 2)
console.log("filter((num) => num > 2)");
const arr11 = [1, 2, 3, 4];
console.log(arr11);
let rFilter = arr11.filter((num) => num > 2);
console.log(rFilter);
console.log(""); // (2) [3, 4]

//   find((num) => num === 2)
console.log("find((num) => num === 2)");
const arr12 = [1, 2, 3, 4];
console.log(arr12);
let rFind = arr12.find((num) => num === 2);
console.log(rFind); // 2
console.log("");

//   every((num) => num === 2)
console.log("every((num) => num === 2)");
const arr13 = [1, 2, 3, 4];
console.log(arr13);
let rEvery = arr13.every((num) => num === 2);
console.log(rEvery); // false
console.log("");

//   some((num) => num === 2)
console.log("some((num) => num === 2)");
const arr14 = [1, 2, 3, 4];
console.log(arr14);
let rsome = arr14.some((num) => num === 2);
console.log(rsome); // true
console.log("");

//   splice(1, 1)
console.log("splice(1, 1)");
const arr15 = [1, 2, 3, 4];
console.log(arr15);
arr15.splice(1, 1);
console.log(arr15); // (3) [1, 3, 4]
console.log("");

//   arr16 = [...arr15, 9]
console.log("const arr2 = [...arr1, 1]");
const arr16 = [1, 2, 3, 4];
console.log(arr16);
const arr17 = [...arr16, 9];
console.log(arr17); // (5) [1, 2, 3, 4, 9]
console.log("");

//   arr18 = [9, ...arr17]
console.log("const arr2 = [1, ...arr1]");
const arr18 = [1, 2, 3, 4];
console.log(arr18);
const arr19 = [9, ...arr18];
console.log(arr19); // (5) [9, 1, 2, 3, 4]
console.log("");
```

#### Html base
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>ArayMethods</title>
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
      <br /><br />
      <hr />
      <br /><br />
      <h1>ArayMethods</h1>
      <ul style="max-width: 400px; text-align: left">
        <li>Métodos de arrays</li>
        <li>Ejemplo de métodos de array</li>
      </ul>
    </center>
  </body>
</html>
```

[![JavaScript](https://img.shields.io/badge/ArrayMethods-c08a44?style=for-the-badge&label=&#9650;&logoColor=white&labelColor=101010)](https://github.com/Alberto-mt/JavaScript_JQuery/blob/main/JavaScript/Apuntes/categories/ArrayMethods.md)
