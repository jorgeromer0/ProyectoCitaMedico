export { pregistro };
  function pregistro(params) {
    contenido.innerHTML = `

  <header class="py-5 bg-light border-bottom mb-4">
        <div class="container">
            <div class="text-center my-5">
                <h1 class="fw-bolder">Registro
                </h1>

            </div>
        </div>
    </header>

    <div class="container px-5 my-5">
    <form id="fregistre"  >
        <div class="form-floating mb-3">
            <input class="form-control" id="nom" type="text" placeholder="Nom" name="nom" required />
            <label for="nom">Nom</label>

        </div>
        <div class="form-floating mb-3">
            <input class="form-control" id="cognom" type="text" placeholder="Cognom" name="cognom" required />
            <label for="cognom">Cognom</label>

        </div>
        <div class="form-floating mb-3">
            <input class="form-control" id="poblacio" type="text" placeholder="Poblacio" name="poblacio" required />
            <label for="poblacio">Poblacio</label>

        </div>
        <div class="form-floating mb-3">
            <input class="form-control" id="email" type="email" placeholder="Email " name="email" required />
            <label for="email">Email </label>

        </div>

        <div class="form-floating mb-3">
        <input class="form-control" class="contrasenya" type="password" placeholder=" Contrasenya" name="password" minlength="6" required />
        <label for="contrasenya">Contrasenya</label>

    </div>

    <div class="form-floating mb-3">
        <input class="form-control" class="contrasenya" type="password" placeholder=" Contrasenya" name="contrasenya2" minlength="6" required />
        <label for="contrasenya">Contrasenya</label>

    </div>


    <div class="form-floating mb-3">
    <select class="form-select" id="newField8" aria-label="New Field 8" name="tipus">
        <option value="Medico">Medico</option>
        <option value="Paciente">Paciente</option>
    </select>
    <label for="newField8">Tipus d'usuari</label>
</div>


<div class="d-none" id="submitErrorMessage">
<div class="text-center text-danger mb-3">Error sending message!</div>
</div>
<div class="d-grid">

<button id="boto" class="btn btn-primary btn-lg"  > Registrarse </button>

</div>
</form>
<br/>
<div>
<p>
  <span id="logError" class="text-danger" > </span> </p>
  </div>
</div>
</div>
<script src="https://cdn.startbootstrap.com/sb-forms-latest.js"></script>
  


`;

    document.querySelector("#boto").addEventListener("click", registre);
  }


function registre(event) {
  event.preventDefault();
  console.log(this, document.querySelector("#fregistre"));

  let datosFormData = new FormData(document.querySelector("#fregistre"));
  console.log(datosFormData);
  let objecteFormData = Object.fromEntries(datosFormData);
  console.log(objecteFormData);
  objecteFormData.returnSecureToken = true;
  delete objecteFormData.remember;
  let datos = JSON.stringify(objecteFormData);
  console.log(datos);

  fetch(
    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCs-rrqNUM9Dj79KWE2FD-4PEOjb0e9cns",
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
      //  container.innerHTML = JSON.stringify(datos);
      console.log(datos);
    })
    .catch((error) => {
      console.error("Error;", error);
      document.querySelector("#logError").innerHTML = error;

      //  container.innerHTML = error;
    });

  if (validar() == true) {
    fetch("https://projecto-daw21-default-rtdb.firebaseio.com/usuarios.json", {
      method: "post",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: datos,
    })
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
        //  container.innerHTML = JSON.stringify(datos);
        console.log(datos);
      })
      .catch((error) => {
        console.error("Error;", error);
        // document.querySelector("#logError").innerHTML = error;

        //  container.innerHTML = error;
      });
  }
}