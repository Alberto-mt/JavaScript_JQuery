window.addEventListener("load", () =>{
  let check_theme = document.getElementById("ckb-theme");
  check_theme.addEventListener("change", cambiar_tema);

  // Añadir tema
  sessionStorage.setItem("theme", "light");
  document.documentElement.classList.add(sessionStorage.getItem("theme"));
});

function cambiar_tema() {
  var element = document.documentElement;

  if (this.checked) {
    sessionStorage.setItem("theme", "dark");
    element.classList.replace("light", sessionStorage.getItem("theme"));
    check_theme.classList.replace("true", "false");
  } else {
    sessionStorage.setItem("theme", "light");
    element.classList.replace("dark", sessionStorage.getItem("theme"));
    check_theme.classList.replace("false", "true");
  }
}
