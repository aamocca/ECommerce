window.addEventListener("load", function () {
  let modoOscuro = document.querySelector("#modoOscuro");
  let bodyEntero = document.querySelector(".bodyEntero");

  load();
  modoOscuro.addEventListener("click", function () {
    /*modoOscuro.innerText = "Modo Oscuro";*/
    bodyEntero.classList.toggle("fondo");
    store(bodyEntero.classList.contains("fondo"));
  });

  function load() {
    let fondo = localStorage.getItem("fondo");
    if (!fondo) {
      store("false");
    } else if (fondo == "true") {
      bodyEntero.classList.add("fondo");

      /*titulo.forEach((tit) => (tit.style.color = "white"));
      puntos.forEach((punto) => (punto.style.color = "white"));
      intereses.forEach((interes) => (interes.style.color = "white"));
      pedidos.forEach((pedido) => (pedido.style.color = "white"));*/
    }
  }
  function store(value) {
    localStorage.setItem("fondo", value);
  }
});
