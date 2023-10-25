const carrito = document.querySelector("#carrito");
const listaCursos = document.querySelector("#lista-cursos");
const contenedorCarrito = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBtn = document.querySelector("#vaciar-carrito");
let articulosCarrito = [];

window.addEventListener("load", () => {
  // Agregar curso al carrito
  listaCursos.addEventListener("click", addCurso);

  // Cuando se elimina un curso del carrito
  carrito.addEventListener("click", deleteCurso);

  // Al Vaciar el carrito
  vaciarCarritoBtn.addEventListener("click", deleteAllCursos);
});

/**
 * Agregar curso al carrito
 * @param {*} e
 */
function addCurso(e) {
  e.preventDefault();
  if (e.target.classList.contains("agregar-carrito")) {
    const curso = e.target.parentElement.parentElement;
    getDatosCurso(curso);
  }
}

/**
 * Obtener información de curso
 * @param {*} curso
 */
function getDatosCurso(curso) {
  const infoCurso = {
    imagen: curso.querySelector("img").src,
    titulo: curso.querySelector("h4").textContent,
    precio: curso.querySelector(".precio span").textContent,
    id: curso.querySelector("a").getAttribute("data-id"),
    cantidad: 1,
  };

  if (articulosCarrito.some((curso) => curso.id === infoCurso.id)) {
    const cursos = articulosCarrito.map((curso) => {
      if (curso.id === infoCurso.id) {
        curso.cantidad++;
        return curso;
      } else {
        return curso;
      }
    });
    articulosCarrito = [...cursos];
  } else {
    articulosCarrito = [...articulosCarrito, infoCurso];
  }
  carritoHTML();
}

/**
 * Elimina el curso seleccionado del carrito en el DOM
 * @param {*} e
 */
function deleteCurso(e) {
  e.preventDefault();
  if (e.target.classList.contains("borrar-curso")) {
    const cursoId = e.target.getAttribute("data-id");
    // Eliminar del arreglo del carrito
    articulosCarrito = articulosCarrito.filter((curso) => curso.id !== cursoId);
    carritoHTML();
  }
}

/**
 * Mostrar el curso seleccionado en el carrito
 */
function carritoHTML() {
  deleteAllCursos();

  articulosCarrito.forEach((curso) => {
    const row = document.createElement("tr");
    row.innerHTML = `
               <td>  
                    <img src="${curso.imagen}" width=100>
               </td>
               <td>${curso.titulo}</td>
               <td>${curso.precio}</td>
               <td>${curso.cantidad} </td>
               <td>
                    <a href="#" class="borrar-curso" data-id="${curso.id}">X</a>
               </td>
          `;
    contenedorCarrito.appendChild(row);
  });
}

/**
 * Eliminar todos los cursos del carrito en el dom
 */
function deleteAllCursos() {
  while (contenedorCarrito.firstChild) {
    contenedorCarrito.removeChild(contenedorCarrito.firstChild);
  }
}
