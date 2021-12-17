import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import img1 from "./assets/medico1.jpg";
import img2 from "./assets/medico2.jpg";
import img3 from "./assets/medico3.jpg";

import { loginpa } from "./login.js";

import { pregistro } from "./registro.js";
import { logout } from "./login.js";
// import { login } from "./login.js";


(function () {
  let contenido;
  let palogin;
  let footer;
  let nav;

  document.addEventListener("DOMContentLoaded", function () {
    footer = document.querySelector("#footer");
    renderFooter();
    nav = document.querySelector("#navegador");
    renderNav();
    contenido = document.querySelector(`#contenido`);
    principal();
    document.querySelector("#inicio").addEventListener("click", principal);
    palogin = document.querySelector("#palogin");
    palogin.addEventListener("click", loginpa);

    let registro = document.querySelector("#registro");
    registro.addEventListener("click", pregistro);

    document.querySelector("#logout_link").addEventListener("click", logout);
    document.querySelector("#logout_link").addEventListener("click", principal);

    // let boto = document.querySelector("#boto");

    // console.log(boto);
    // boto.addEventListener("click", () => {

    // });
  });

  function renderFooter() {
    footer.innerHTML = `
  <footer class="py-5 bg-primary">
    <div class="container">
        <p class="m-0 text-center text-white">Copyright &copy; Jorge Romero 2021</p>
    </div>
</footer>`;
  }

  function renderNav() {
    nav.innerHTML = `<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div class="container">
      <a class="navbar-brand" href="#!" id="inicio">Inicio</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
          aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item"><a class="nav-link" href="#" id="palogin"> Login</a></li>
              <li class="nav-item"><a class="nav-link" href="#" id="registro">Registro</a></li>
              <li class="nav-item"><a class="nav-link disabled" href="#" id="user"></a></li>
              <li class="nav-item"><a class="nav-link " id="logout_link" href="#" >Logout</a></li>

          </ul>
      </div>
  </div>
</nav>`;
  }

  function principal() {
    contenido.innerHTML = `
        <header class="py-5 bg-light border-bottom mb-4">
        <div class="container">
            <div class="text-center my-5">
                <h1 class="fw-bolder">Sistema de reserva de citas médicas</h1>

            </div>
        </div>
    </header>
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="${img1}" alt="hola" srcset=""  class="d-block w-100" >
              </div>
              <div class="carousel-item">
                <img src="${img2}" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img src="${img3}" class="d-block w-100" alt="...">
              </div>
            </div>
          </div>
        `;
  }

  function validar() {
    let nombre = document.querySelector("#nom").value;
    console.log(nombre);
    let logerror = document.querySelector("#logError");
    if (nombre.trim() == null || nombre.trim().lenght == 0) {
      logerror.innerHTML += `ERROR EN EL NOMBRE`;
      return false;
    }

    return true;
  }
})();
