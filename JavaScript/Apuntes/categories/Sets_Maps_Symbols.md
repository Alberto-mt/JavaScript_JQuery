## JavaScript moderno
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white&labelColor=101010)](https://github.com/Alberto-mt/JavaScript_JQuery/blob/main/JavaScript/Apuntes/index.md)

### Sets - Maps - Symbols
[![JavaScript](https://img.shields.io/badge/Sets_Maps_Symbols-c044b8?style=for-the-badge&logo=javascript&logoColor=white&labelColor=101010)](https://github.com/Alberto-mt/JavaScript_JQuery/blob/main/JavaScript/Apuntes/categories/Sets_Maps_Symbols.md)

#### Diferencias entre set - map - symbol
| Tipo  | Descripción  |
|:-:|---|
| **Set**  | - Set es una colección ordenada de valores únicos, ya sean primitivos o referencias a objetos<br>- Permite la adición, eliminación y búsqueda eficiente de elementos<br>- Los elementos en un Set se mantienen en el orden de inserción<br>- Los valores duplicados no están permitidos en un Set; si se intenta agregar un valor duplicado, no se realizará ninguna acción<br>- Los valores en un Set pueden ser de cualquier tipo de dato válido en JavaScript  |
| **WeakSet**  | - WeakSet es similar a Set, pero solo puede contener objetos y no valores primitivos<br>- Los elementos en un WeakSet no están ordenados y no se puede acceder a ellos de forma iterativa<br>- Los objetos en un WeakSet se mantienen como referencias débiles, lo que significa que si un objeto no es accesible desde ningún otro lugar en el código, será eliminado automáticamente del WeakSet por el recolector de basura<br>- No se permite la adición de valores primitivos en un WeakSet. Si se intenta agregar un valor primitivo, se lanzará un error  |
| **Map**  | - El objeto Map permite utilizar cualquier tipo de valor como clave, incluyendo objetos, funciones y valores primitivos<br>- Las claves en un Map pueden ser repetidas, lo que significa que se pueden tener múltiples pares clave-valor con la misma clave<br>- Un Map mantiene la referencia a los objetos utilizados como claves, incluso si no hay otras referencias a esos objetos. Esto significa que los objetos utilizados como claves no son eliminados de la memoria mientras exista el Map<br>- Se pueden obtener el tamaño de un Map utilizando el método size<br>- Se puede iterar sobre un Map utilizando los métodos forEach , for...of o entries  |
| **WeakMap**  | - El objeto WeakMap también permite utilizar objetos como claves, pero no permite utilizar valores primitivos o funciones<br>- Las claves en un WeakMap no pueden ser repetidas, lo que significa que solo se puede tener un par clave-valor para cada clave<br>- Un WeakMap no mantiene la referencia a los objetos utilizados como claves si no hay otras referencias a esos objetos. Esto significa que los objetos utilizados como claves pueden ser eliminados de la memoria si no hay otras referencias a ellos<br>- No se puede obtener el tamaño de un WeakMap, ya que la cantidad de pares clave-valor puede cambiar a medida que los objetos utilizados como claves son eliminados de la memoria<br>- No se puede iterar sobre un WeakMap, ya que no existen métodos para obtener las claves o los valores individuales  |
| **Symbol**  | - Son valores únicos e inmutables que se utilizan principalmente como identificadores (claves) de propiedades de objetos<br>- Cada Symbol tiene asociado un valor opcional de tipo String o Undefined que se utiliza como descripción del símbolo, pero esta descripción no afecta a la comparación de los Symbol entre sí  |

#### Ejemplo de Sets
```js
// Set
// Creación de set y agregación de productos
let carrito = new Set();
console.log(".add()");
carrito.add("Producto #1");
carrito.add("Producto #2");
carrito.add("Producto #3");
carrito.add("Producto #3");
console.log(carrito.size);
console.log("");

// Set en un arreglo
console.log(".size");
let numeros = new Set([1,2,2,3,3,3]);
console.log(numeros.size);
console.log("");

let carrito2 = new Set();
carrito2.add("Producto #1");
carrito2.add("Producto #2");
carrito2.add("Producto #3");
carrito2.add("Producto #3");

// Comprobando que un valor existe en el set.
console.log(".has()");
console.log(carrito.has("Producto #2"));
console.log("");

// Eliminando del set
console.log(".delete()");
console.log(carrito.delete("Producto #2"));
console.log(carrito.has("Producto #2"));
console.log(carrito);
console.log("");

// Limpiar un set
console.log(".clear()");
carrito.clear();
console.log(carrito);
console.log("");

// Foreach a un set
console.log(".foreach()");
carrito2.forEach((producto) => {
  console.log(producto);
});
console.log("");

// Foreach a un set
console.log("Foreach a un set");
carrito2.forEach((producto, index, pertenece) => {
  console.log(`${index} : ${producto}`);
  // Nombre de la variable
  console.log(pertenece === carrito); 
});
console.log("");

// Convertir un set a un arreglo
console.log("Set a un arreglo");
const arregloCarrito = [...carrito2];
console.log(arregloCarrito);
```

#### Ejemplo de WeakSets
```js
// WeakSet
// No tienen la propiedad size, length, iterables, keys, values entries ...
// Creación de WeakSet
var ws = new WeakSet();
const alu01 = {
  nombre: "Pepe",
  edad: 19
};

const alu02 = {
  nombre: "Luis",
  edad: 20
};

console.log(".add()");
ws.add(alu01);
ws.add(alu02);
// Solo se pueden agregar objetos
// const nombre = "Jose";
// ws.add(nombre);
console.log("");

console.log(".has()");
console.log(ws.has(alu01));
console.log(ws.has(alu02));
console.log("");

console.log(".delete()");
console.log(ws.delete(alu01));
console.log(ws.has(alu01));
```

#### Ejemplo de Maps
```js
// Maps
// Creación de Map
let alumno = new Map();
console.log(".set()");
alumno.set("nombre", "Pepe");
alumno.set("edad", 19);
console.log(alumno);
console.log("");

// acceder a los valores
console.log(".get()");
console.log(alumno.get("nombre"));
console.log(alumno.get("edad"));

// Métodos al MAP
// Tamaño del MAP
console.log(".size");
console.log(alumno.size);
console.log("");

// Contiene un valor
console.log(".has() - .get()");
console.log(alumno.has("edad"));
console.log(alumno.get("edad"));
console.log("");

// Borrar por clave
console.log(".delete()");
alumno.delete("edad");
console.log(alumno.has("edad"));
console.log(alumno.get("edad"));
console.log(alumno.size);
console.log("");

// Borrar el map
console.log(".clear()");
alumno.clear();
console.log(alumno);
console.log("");

// Inicializar un map con diferentes valores
console.log("Map con diferentes valores");
const profesor = new Map([
  ["nombre", "nombreDefault"],
  ["asignatura", "bbdd"],
]);
profesor.set("nombre", "Jose");
console.log(profesor);
console.log("");

// Foreach a un map
console.log(".foreach()");
profesor.forEach((datos, index) => {
  // console.log(datos);
  console.log(`${index}: ${datos}`);
});
```

#### Ejemplo de WeakMaps
```js
// Weakmap
let key1 = { AluId: 1 };
let key2 = { AluId: 2 };
let wm = new WeakMap();

console.log(".set()");
wm.set(key1, "Pepe");
console.log("");

console.log(".has()");
console.log(wm.has(key1));
console.log(wm.get(key1));
console.log("")

console.log(".delete()");
console.log(wm.delete(key1));
console.log(wm.get(key1));
console.log("");

// Ejemplo
wm.set(key2, "Vicky");
console.log(wm.size);
key2 = undefined;
console.log(wm.get(key2));
```

#### Ejemplo de Symbols
```js
// Symbol
// Symbol es creado y se agrega a una propiedad del objeto.
// new Symbol enviaria un error.
const sym = Symbol('symbol');
const sym2 = Symbol('symbol');

// Los symbolos siempre son diferentes
// console.log( Symbol() === Symbol() );

// Llaves de objetos únicas
let nombre = Symbol();
let edad = Symbol();

// Crear un objeto vacio
let alumno = {};

// Deben tener corchetes
alumno[nombre] = 'Pepe';
alumno[edad] = 19;
console.log(alumno);
console.log(alumno[nombre]);
console.log(alumno[edad]);

// No se puede acceder al Symbol con un for.
for(let i in alumno) {
    console.log(`${i} : ${alumno[i]}`);
}

// Crear descripción del Symbol
let nombreProfesor = Symbol('Nombre del profesor');
let profesor = {};
profesor[nombreProfesor] = 'Luis';

console.log(profesor);
console.log(profesor[nombreProfesor]);
console.log(nombreProfesor);
```

#### Ejemplo de Iterators
```js
// Iterators
function crearIterador(carrito) {
  let i = 0;

  return {
    siguiente: () => {
      let fin = i >= carrito.length;
      let valor = !fin ? carrito[i++] : undefined;

      return {
        fin: fin,
        valor: valor,
      };
    },
  };
}
const Carrito = ["Producto 1", "Producto 2", "Producto 3", "Producto 4"];

const RecorrerCarrito = crearIterador(carrito);

console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
```

#### Ejemplo de Gerenador y yield
```js
// Generador
// Es una funcion que retorna un Iterador.
// Se indican con un asterisco después de  la palabra function

function* crearGenerador() {
  // Yiel: son los valores que podemos utilziar para iterar
  yield 1;
  yield "Nombre";
  yield 3 + 3;
  yield true;
}
// Se llaman como funciones normales pero retornan un iterador
const iterador = crearGenerador();

console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);
console.log("");

// Crear el generador
function* nuevoGenerador(carrito) {
  for (let i = 0; i < carrito.length; i++) {
    yield carrito[i];
  }
}
// Carrito
const carrito = ["Producto 1", "Producto 2", "Producto 3", "Producto 4"];

// Recorrer el iterador
let iterador2 = nuevoGenerador(carrito);

console.log(iterador2.next());
console.log(iterador2.next());
console.log(iterador2.next());
console.log(iterador2.next());
console.log(iterador2.next());
```

#### Ejemplo de Entries Iterator
```js
// Entries Iterator
const ciudades = ["Barcelona", "Madrid", "Sevilla", "Valencia"];
const productos = new Set(["producto 1", "producto 2", "producto 3", "producto 4"]);
const alumnos = new Map();

alumnos.set("202301", "Pepe");
alumnos.set("202302", "Luis");

// Entries 
console.log("Entries");
// Entries a las ciudades
for (let entry of ciudades.entries()) {
  console.log(entry);
}

// Entries a las productos
for (let entry of productos.entries()) {
  console.log(entry);
}

// Entries a los alumnos
for (let entry of alumnos.entries()) {
  console.log(entry);
}
console.log("");

// Values iterator
console.log("Values iterator");
// Values a las ciudades
for (let value of ciudades.values()) {
  console.log(value);
}

// Values a las productos
for (let value of productos.values()) {
  console.log(value);
}

// Values a los alumnos
for (let value of alumnos.values()) {
  console.log(value);
}
console.log("");

// Keys iterator
console.log("Keys iterator");
// keys a las ciudades
for (let keys of ciudades.keys()) {
  console.log(keys);
}

// Keys a las productos
for (let keys of productos.keys()) {
  console.log(keys);
}

// Keys a los alumnos
for (let keys of alumnos.keys()) {
  console.log(keys);
}
console.log("");

// Default
console.log("Default");
for (let ciudad of ciudades) {
  console.log(ciudad);
}

for (let producto of productos) {
  console.log(producto);
}

for (let alumno of alumnos) {
  console.log(alumno);
}
console.log("");

// Iterar en un string
console.log("Iterar en un string");
const mensaje = "Hola Mundo";

// Forma vieja
for (let i = 0; i < mensaje.length; i++) {
  console.log(mensaje[i]);
}

// Forma nueva
for (let letra of mensaje) {
  console.log(letra);
}

console.log("");
// Iterar en un node list
const elementos = document.getElementsByTagName("li");

for (let elemento of elementos) {
  console.log(elemento.innerText);
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
    <title>Set Map Symbol</title>
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
      <h1>Sets - Maps - Symbols</h1>
      <ul style="max-width: 400px; text-align: left">
        <li>Diferencias entre set - map - symbol</li>
        <li>Ejemplo de Sets</li>
        <li>Ejemplo de WeakSets</li>
        <li>Ejemplo de Maps</li>
        <li>Ejemplo de WeakMaps</li>
        <li>Ejemplo de Symbols</li>
        <li>Ejemplo de Iterators</li>
        <li>Ejemplo de Gerenador y yield</li>
        <li>Ejemplo de Entries Iterator</li>
      </ul>
    </center>
    <script>
      
    </script>
  </body>
</html>
```

[![JavaScript](https://img.shields.io/badge/Sets_Maps_Symbols-c044b8?style=for-the-badge&label=&#9650;&logoColor=white&labelColor=101010)](https://github.com/Alberto-mt/JavaScript_JQuery/blob/main/JavaScript/Apuntes/categories/Sets_Maps_Symbols.md)
