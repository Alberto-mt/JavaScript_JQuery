## JavaScript moderno
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white&labelColor=101010)](https://github.com/Alberto-mt/JavaScript_JQuery/blob/main/JavaScript/Apuntes/index.md)

### POO (Programación Orientada a Objetos)
[![JavaScript](https://img.shields.io/badge/POO-447ac0?style=for-the-badge&logo=javascript&logoColor=white&labelColor=101010)](https://github.com/Alberto-mt/JavaScript_JQuery/blob/main/JavaScript/Apuntes/categories/POO.md)

#### Ejemplo de creación de clases
```js
// Creación de clases
// Debe empezar por mayúscula (CLASS DECLARATION)
// Hay 2 formas de crear clases 

// Creación de clase tipo 1 
class Alumno {
  // Constructor de la clase 
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
}

const Alu01 = new Alumno("Pepe", 18);
console.log(Alu01);

// Creación de clase tipo 2
const Profesor = class {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
};

const pro01 = new Profesor("Luis", 30);
console.log(pro01);
```

#### Ejemplo de métodos de clases
```js
// Métodos de clases
class Alumno {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  // Método que retorna un valor
  mostrarDatos(){
    return `Nombre: ${this.nombre} - Edad: ${this.edad}`;
  }

  // Método que modifica un valor
  edadFinalCurso(años){
    this.edad += años;
  }

  // Método estático (No requiere ser instanciado) 
  static inicioCFGS(){
    return `Inicio: 18/09/2023`;
  }
}

const Alu01 = new Alumno("Pepe", 18);
console.log(Alu01);

console.log(Alu01.mostrarDatos());

Alu01.edadFinalCurso(2);
console.log(Alu01.mostrarDatos());

console.log(Alumno.inicioCFGS());
```

#### Ejemplo de herencia de clases
```js
// Herencia de clases
class Alumno {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  mostrarDatos() {
    return `Nombre: ${this.nombre} - Edad: ${this.edad}`;
  }

  edadFinalCurso(años) {
    this.edad += años;
  }

  static inicioCFGS() {
    return `Inicio: 18/09/2023`;
  }
}

// ***** Herencia *****
class Contacto extends Alumno {
  constructor(nombre, edad, telefono) {
    // Atributos del constructor del padre
    super(nombre, edad);
    // Atributos de la clase que hereda
    this.telefono = telefono;
  }

  mostrarDatosContacto() {
    return `Nombre: ${this.nombre} - Edad: ${this.edad} - Telf: ${this.telefono} - Email: ${this.nombre}@ies.net`;
  }

  static inicioCFGS() {
    // Reescribir un método
    return `Nuevo inicio: 20/09/2023`;
  }
}

const Alu01 = new Alumno("Pepe", 18);
console.log(Alu01);
console.log(Alu01.mostrarDatos());
Alu01.edadFinalCurso(2);
console.log(Alu01.mostrarDatos());
console.log(Alumno.inicioCFGS());
console.log("");

const AluCon01 = new Contacto("Pepe", 18, 654323232);
console.log(AluCon01.mostrarDatosContacto());
console.log(Contacto.inicioCFGS());
```

#### Ejemplo de atributos privados
```js
// Atributos privados
class Alumno {
  #nombre = '';
  constructor(nombre, edad = 18) {
    // "_" no es privado, se puede acceder a el 
    // this._nombre = nombre;
    // "#" es privado, no se puede acceder a el (marcará error)
    this.#nombre = nombre;
    this.edad = edad;
  }

  mostrarDatos() {
    return `Nombre: ${this.#nombre} - Edad: ${this.edad}`;
  }

  edadFinalCurso(años) {
    this.edad += años;
  }
}

const Alu01 = new Alumno("Pepe", 18);
console.log(Alu01);
console.log(Alu01.mostrarDatos());
Alu01.edadFinalCurso(2);
console.log(Alu01.mostrarDatos());
// console.log(Alu01._nombre);
// console.log(Alu01.#nombre);
```

#### Html base
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>POO</title>
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
      <h1>POO</h1>
      <ul style="max-width: 400px; text-align: left">
        <li>Ejemplo de creación de clases</li>
        <li>Ejemplo de métodos de clases</li>
        <li>Ejemplo de herencia de clases</li>
        <li>Ejemplo de atributos privados</li>
      </ul>
    </center>
    <script>
      
    </script>
  </body>
</html>
```
[![JavaScript](https://img.shields.io/badge/POO-447ac0?style=for-the-badge&label=&#9650;&logoColor=white&labelColor=101010)](https://github.com/Alberto-mt/JavaScript_JQuery/blob/main/JavaScript/Apuntes/categories/POO.md)
