export { loginpa };
export { logout }; 
import { App } from "./app.js";
//  import { logout } from "login.js";
// export { login };


function loginpa() {
  contenido.innerHTML = `

  <header class="py-5 bg-light border-bottom mb-4">
        <div class="container">
            <div class="text-center my-5">
                <h1 class="fw-bolder"> Login
                </h1>

            </div>
        </div>
    </header>

  <div class="container px-5 my-5">
  <div class="container px-5 my-5">
  <form id="formLogin" >
      <div class="mb-3">
          <label class="form-label" for="usuario">Email</label>
          <input class="form-control" id="email" type="email" name="email" placeholder="Email" />
      </div>
      <div class="mb-3">
          <label class="form-label" for="password">Password</label>
          <input class="form-control" id="password" type="password" placeholder="Password" name="password" />
      </div>
      <div class="mb-3">
          <label class="form-label" for="tipo">Tipo</label>
          <select class="form-select" id="tipo" aria-label="Tipo">
              <option value="Paciente">Paciente</option>
              <option value="Medico">Medico</option>
          </select>
      </div>
      
    
      <div class="d-grid">
          <button class="btn btn-primary btn-lg "  id="boto" type="submit">Submit</button>
      </div>

    
  </form>
</br>
  <div>
<p>
  <span id="logError" class="text-danger" > </span> </p>
  </div>
</div>
<script src="https://cdn.startbootstrap.com/sb-forms-latest.js"></script>

  `;

  document.querySelector("#boto").addEventListener("click", login);
}

function login() {
  console.log("a");
  document
    .querySelector("#formLogin")
    .addEventListener("submit", function (event) {
      // Primer a formData, despres a objecte i despres a JSON
      // fromEntries funciona perquè formData és un iterable
      let datosFormData = new FormData(document.querySelector("#formLogin"));
      let objecteFormData = Object.fromEntries(datosFormData);
      objecteFormData.returnSecureToken = true;
      delete objecteFormData.remember;
      let datos = JSON.stringify(objecteFormData);
      console.log(datos);
      event.preventDefault();
      //console.log(this);
      fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCs-rrqNUM9Dj79KWE2FD-4PEOjb0e9cns",
        {
          method: "post",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
          body: datos,
        }
      )
        .then((response) => {
          if (response.ok) return response.json();
          // else throw Error(response.statusText);
          else {
            return response.json().then((text) => {
              console.log(text);
              throw new Error(text.error.message);
            });
          }
        })
        .then((datos) => {
          // resultats.innerHTML = JSON.stringify(datos);
          // document.querySelector("#user").innerHTML = `${datos.email}`;
          document.querySelector("#logError").innerHTML = "";

          localStorage.setItem("idToken", datos.idToken);
          localStorage.setItem("email", datos.email);
          // principal();

          console.log(datos.email);
          document.querySelector("#user").innerHTML = `${datos.email}`;
          new App();
          console.log(datos);
        })
        .catch((error) => {
          document.querySelector("#logError").innerHTML = error;
          console.error("Error;", error);
          // resultats.innerHTML = error;
        });
    });
}


function logout() {
    // renderNav();
    // renderFooter();
    // principal();
    document.querySelector("#user").innerHTML = "";
    localStorage.clear();
    // window.location.href = "/#";
  }
  