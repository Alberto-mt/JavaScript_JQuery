if (Cookies.get("aceptaCookies") != "aceptada") {
  $(document).ready();
}

$(document).ready(function () {
  if (Cookies.enabled) {
    $().lanzarAvisoCookies("Acepta las cookies para seguir navegando");
  } else {
    $().lanzarAvisoCookies(
      "El navegador no Acepta Cookies. Actívalo o la página no funcionará correctamente"
    );
  }
});

$.fn.lanzarAvisoCookies = function (mensaje) {
  const elementoCookies = document.createElement("div");
  elementoCookies.innerHTML = "<p>" + mensaje + " <span>Aceptar</span></p>";
  elementoCookies.classList.add("avisoCookies");
  document.body.appendChild(elementoCookies);

  $("span").click(function () {
    Cookies.set("aceptaCookies", "aceptada", { expires: 7776000 }); // Caduca en 3 meses
    $(".avisoCookies").fadeOut(5000);
  });
};
