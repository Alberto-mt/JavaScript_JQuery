document.addEventListener("DOMContentLoaded", function () {
  const email = {
    email: "",
    asunto: "",
    mensaje: "",
  };

  // Seleccionar los elementos
  const inputEmail = document.querySelector("#email");
  const inputAsunto = document.querySelector("#asunto");
  const inputMensaje = document.querySelector("#mensaje");
  const formulario = document.querySelector("#formulario");
  const btnSubmit = document.querySelector('#formulario button[type="submit"]');
  const btnReset = document.querySelector('#formulario button[type="reset"]');
  const spinner = document.querySelector("#spinner");
  const respuestaEmail = document.querySelector("#respuestaEmail");

  // Asignar eventos
  inputEmail.addEventListener("input", validar);
  inputAsunto.addEventListener("input", validar);
  inputMensaje.addEventListener("input", validar);

  formulario.addEventListener("submit", enviarEmail);

  btnReset.addEventListener("click", function (e) {
    e.preventDefault();
    resetFormulario();
  });

  /**
   * Función de envío de email
   *  - Muestra el spinner 3 segundos
   *  - Envia datos
   *  - Crea una alerta de que se ha enviado el email
   *  - Muestra los datos enviados
   *  - Resetea el formulario
   * @param {*} e
   */
  function enviarEmail(e) {
    e.preventDefault();

    eliminarRespuesta();

    spinner.classList.add("flex");
    spinner.classList.remove("hidden");

    setTimeout(() => {
      spinner.classList.remove("flex");
      spinner.classList.add("hidden");

      emailValue();
      asuntoValue();
      mensajeValue();

      // Crear una alerta
      const alertaExito = document.createElement("P");
      alertaExito.classList.add(
        "bg-green-500",
        "text-white",
        "p-2",
        "text-center",
        "rounded-lg",
        "mt-10",
        "font-bold",
        "text-sm",
        "uppercase"
      );
      alertaExito.textContent = "Mensaje enviado correctamente";

      formulario.appendChild(alertaExito);

      setTimeout(() => {
        alertaExito.remove();
      }, 3000);

      mostrarEmail();
      resetFormulario();
    }, 3000);
  }

  /**
   * Función que valida el formulario
   *  - Crea alerta y comprueba que los campos no esten vacío, ni tengan espacios en blanco
   *  - Comprueba que el email cumpla la expresión regular
   *  - Elimina la alerta si existe
   *  - Asigna el valor de email para ser comprobdo
   * @param {*} e
   * @returns
   */
  function validar(e) {
    if (e.target.value.trim() === "") {
      mostrarAlerta(
        `El Campo ${e.target.id} es obligatorio`,
        e.target.parentElement
      );
      email[e.target.name] = "";
      comprobarEmail();
      return;
    }

    if (e.target.id === "email" && !validarEmail(e.target.value)) {
      mostrarAlerta("El email no es válido", e.target.parentElement);
      email[e.target.name] = "";
      comprobarEmail();
      return;
    }

    limpiarAlerta(e.target.parentElement);

    email[e.target.name] = e.target.value.trim().toLowerCase();

    comprobarEmail();
  }

  /**
   * Función que crea una alerta de error
   *  - Crea alerta
   *  - Agrega la alerta al formulario
   * @param {*} mensaje
   * @param {*} referencia
   */
  function mostrarAlerta(mensaje, referencia) {
    limpiarAlerta(referencia);

    const error = document.createElement("P");
    error.textContent = mensaje;
    error.classList.add("bg-red-600", "text-white", "p-2", "text-center");

    referencia.appendChild(error);
  }

  /**
   * Función que elimina la alerta si existe
   */
  function limpiarAlerta(referencia) {
    const alerta = referencia.querySelector(".bg-red-600");
    if (alerta) {
      alerta.remove();
    }
  }

  /**
   * Función que valida el email con una expresión regular
   * @param {*} email
   * @returns
   */
  function validarEmail(email) {
    const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    const resultado = regex.test(email);
    return resultado;
  }

  /**
   * Función que habilita el boton de enviar
   * @returns
   */
  function comprobarEmail() {
    if (Object.values(email).includes("")) {
      btnSubmit.classList.add("opacity-50");
      btnSubmit.disabled = true;
      return;
    }
    btnSubmit.classList.remove("opacity-50");
    btnSubmit.disabled = false;
  }

  /**
   * Función que elimina el contenido de los campos
   */
  function resetFormulario() {
    email.email = "";
    email.asunto = "";
    email.mensaje = "";

    formulario.reset();
    comprobarEmail();
  }

  /**
   * Función que devuleve el valor de email
   * @returns
   */
  function emailValue() {
    return inputEmail.value;
  }

  /**
   * Función que devuleve el valor de asunto
   * @returns
   */
  function asuntoValue() {
    return inputAsunto.value;
  }

  /**
   * Función que devuleve el valor de mensaje
   * @returns
   */
  function mensajeValue() {
    return inputMensaje.value;
  }

  /**
   * Función que muestra los datos enviados del email
   *  - Crea un contenedor y lo inyecta en el dom
   *  - Crea un parrafo para email, asunto y mensaje
   */
  function mostrarEmail() {
    const emailEnviado = document.createElement("DIV");
    emailEnviado.classList.add("text-gray-700", "p-2", "font-bold", "text-sm");

    const mostrarEmail = document.createElement("P");
    mostrarEmail.classList.add("mt-2", "p-2", "font-bold", "text-sm");
    mostrarEmail.textContent = `Email: ${emailValue()}`;

    const mostrarAsunto = document.createElement("P");
    mostrarAsunto.classList.add("mt-2", "p-2", "font-bold", "text-sm");
    mostrarAsunto.textContent = `Asunto: ${asuntoValue()}`;

    const mostrarMensaje = document.createElement("P");
    mostrarMensaje.classList.add("mt-2", "p-2", "font-bold", "text-sm");
    mostrarMensaje.textContent = `Mensaje: ${mensajeValue()}`;

    emailEnviado.appendChild(mostrarEmail);
    emailEnviado.appendChild(mostrarAsunto);
    emailEnviado.appendChild(mostrarMensaje);

    respuestaEmail.classList.add("flex");
    respuestaEmail.classList.remove("hidden");
    respuestaEmail.appendChild(emailEnviado);
  }

  /**
   * Función que elimina respuesta
   *  - Oculta el contenedor padre
   *  - Elimina todo su contenido
   */
  function eliminarRespuesta(){
    respuestaEmail.classList.add("hidden");
    respuestaEmail.classList.remove("flex");

    while (respuestaEmail.firstChild) {
      respuestaEmail.removeChild(respuestaEmail.firstChild);
    }
  }
});
