export { App };
import "./main.css";

class App {
  constructor() {
    this.renderApp();
  }

  renderApp() {
    const container = document.querySelector("#contenido");
    container.innerHTML = `    <main class="main-content">
                  <div class="crud-container">
                      <div class="crud-header">
                          <h1>Pacientes Registrados</h1>
                          <button class="button is-success" id="openRegister"><i class="fas fa-plus"></i><span> Nuevo
                                  Paciente</span></button>
                      </div>
                      <table class="table">
                          <thead>
                              <th>*</th>
                              <th>Nombre</th>
                              <th>Apellidos</th>
                              <th>Telefono</th>
                              <th>Email</th>
                              <th>Fecha </th>
                              <th>Hora </th>
                              <th>Opciones</th>
                          </thead>
              
                          <tbody id="pacientes-table">
                              <tr>
                                  <th>1</th>
                                  <td>Samuel</td>
                                  <td>Giner Urbano</td>
                                  <td>635657466</td>
                                  <td>samuelg@gmail.com</td>
                                  <td>1-3-22</td>
                                  <td>22:34</td>
                                  <td>
                                      <button class="button is-warning">
                                          <li class="fas fa-pencil-alt"></li>
                                      </button>
                                      <button class="button is-danger">
                                          <li class="fas fa-trash"></li>
                                      </button>
              
                                  </td>
                              </tr>
              
                          </tbody>
                      </table>
                  </div>
              </main>
              
              <!-- Registrar -->
              <div class="modal" id="modal">
                  <div class="modal-background"></div>
                  <div class="modal-card">
                      <header class="modal-card-head">
                          <p class="modal-card-title">Registrar Nuevo Paciente</p>
                          <button class="delete" aria-label="close" id="cerrarRegistro"></button>
                      </header>
                      <section class="modal-card-body">
              
                          <form id="register-form">
                              <div class="field">
                                  <label class="label">Nombre</label>
                                  <div class="control">
                                      <input class="input" name="nombre" type="text" placeholder="Introduce tu nombre">
                                  </div>
                              </div>
              
                              <div class="field">
                                  <label class="label">Apellidos</label>
                                  <div class="control">
                                      <input class="input" type="text" name="apellidos" placeholder="Introduce tus apellidos">
                                  </div>
                              </div>
              
                              <div class="field">
                                  <label class="label">Telefono</label>
                                  <div class="control has-icons-left ">
                                      <input class="input is-success" type="tel" name="telefono"
                                          placeholder="Introduce tu telefono">
                                      <span class="icon is-small is-left">
                                          <i class="fas fa-phone"></i>
                                      </span>
              
                                  </div>
              
                                  <div class="field">
                                      <label class="label">Correo</label>
                                      <p class="control has-icons-left has-icons-right">
                                          <input class="input" type="email" name="correo" placeholder="Correo">
                                          <span class="icon is-small is-left">
                                              <i class="fas fa-envelope"></i>
                                          </span>
                                          <span class="icon is-small is-right">
                                              <i class="fas fa-check"></i>
                                          </span>
                                      </p>
                                  </div>
              
                                  <div class="field">
                                      <label class="label">Fecha</label>
                                      <div class="control has-icons-left ">
                                          <input class="input is-success" type="date" name="fecha"
                                              placeholder="Introduce tu fecha">
              
                                          </span>
              
                                      </div>
              
                                      <div class="field">
                                          <label class="label">Hora</label>
                                          <div class="control has-icons-left ">
                                              <input class="input is-success" type="time" name="hora"
                                                  placeholder="Introduce tu hora">
              
                                              </span>
              
                                          </div>
              
                                          <div class="field">
                                              <label class="label">Descripcion del asunto: </label>
                                              <div class="control">
                                                  <textarea class="textarea" name="descripcion" placeholder="Textarea"></textarea>
                                              </div>
                                          </div>
                          
                      </section>
                      <footer type="submit" class="modal-card-foot">
                          <button class="button is-success">
                              <li class="fas fa-save"></li>
                              <span>Registrar</span>
                          </button>
                          <button class="button">Cancel</button>
                      </form>
                      </footer>
              
                  </div>
              
              
              
              </div>
              <!-- Actualiza -->
              <div class="modal" id="modal-update">
                  <div class="modal-background"></div>
                  <div class="modal-card">
                      <header class="modal-card-head">
                          <p class="modal-card-title">Actualizar  Paciente</p>
                          <button class="delete" aria-label="close" id="cerrarUpdateRegistro"></button>
                      </header>
                      <section class="modal-card-body">
              
                          <form id="update-form">
                              <div class="field">
                                  <label class="label">Nombre</label>
                                  <div class="control">
                                      <input class="input" name="nombre" type="text" placeholder="Introduce tu nombre">
                                  </div>
                              </div>
              
                              <div class="field">
                                  <label class="label">Apellidos</label>
                                  <div class="control">
                                      <input class="input" type="text" name="apellidos" placeholder="Introduce tus apellidos">
                                  </div>
                              </div>
              
                              <div class="field">
                                  <label class="label">Telefono</label>
                                  <div class="control has-icons-left ">
                                      <input class="input is-success" type="tel" name="telefono"
                                          placeholder="Introduce tu telefono">
                                      <span class="icon is-small is-left">
                                          <i class="fas fa-phone"></i>
                                      </span>
              
                                  </div>
              
                                  <div class="field">
                                      <label class="label">Correo</label>
                                      <p class="control has-icons-left has-icons-right">
                                          <input class="input" type="email" name="correo" placeholder="Correo">
                                          <span class="icon is-small is-left">
                                              <i class="fas fa-envelope"></i>
                                          </span>
                                          <span class="icon is-small is-right">
                                              <i class="fas fa-check"></i>
                                          </span>
                                      </p>
                                  </div>
              
                                  <div class="field">
                                      <label class="label">Fecha</label>
                                      <div class="control has-icons-left ">
                                          <input class="input is-success" type="date" name="fecha"
                                              placeholder="Introduce tu fecha">
              
                                          </span>
              
                                      </div>
              
                                      <div class="field">
                                          <label class="label">Hora</label>
                                          <div class="control has-icons-left ">
                                              <input class="input is-success" type="time" name="hora"
                                                  placeholder="Introduce tu hora">
              
                                              </span>
              
                                          </div>
              
                                          <div class="field">
                                              <label class="label">Descripcion del asunto: </label>
                                              <div class="control">
                                                  <textarea class="textarea" name="descripcion" placeholder="Textarea"></textarea>
                                              </div>
                                          </div>
                          
                      </section>
                      <footer type="submit" class="modal-card-foot">
                          <button class="button is-success">
                              <li class="fas fa-save"></li>
                              <span>Actualizar</span>
                          </button>
                          <button class="button">Cancel</button>
                      </form>
                      </footer>
              
                  </div>
              
              
              
              </div>
              
                <script src="src/app.js"></script>
                <script src="https://www.gstatic.com/firebasejs/8.2.9/firebase-app.js"></script>
  <script src="https://www.gstatic.com/firebasejs/8.2.9/firebase-database.js"></script>

              </body>`;
  }
}

const firebaseConfig = {
  apiKey: "AIzaSyCs-rrqNUM9Dj79KWE2FD-4PEOjb0e9cns",
  authDomain: "projecto-daw21.firebaseapp.com",
  databaseURL: "https://projecto-daw21-default-rtdb.firebaseio.com",
  projectId: "projecto-daw21",
  storageBucket: "projecto-daw21.appspot.com",
  messagingSenderId: "639148845231",
  appId: "1:639148845231:web:bca3b00e72a806fd4b8c5a",
};

document.addEventListener("DOMContentLoaded", () => {
  console.log("hola");
  //   aplicacio();
  const openModal = document.getElementById("openRegister");
  //   console.log(openModal);
  const modal = document.getElementById("modal");
  const updateModal = document.getElementById("modal-update");
  const updateForm = document.getElementById("update-form");
  const closeUpdateModal = document.getElementById("cerrarUpdateRegistro");
  const closeModal = document.getElementById("cerrarRegistro");
  const registerForm = document.getElementById("register-form");
  const pacientesTable = document.getElementById("pacientes-table");
  firebase.initializeApp(firebaseConfig);
  const pacientRef = firebase.database().ref("pacientes");

  const showRegister = () => {
    modal.classList.toggle("is-active");
  };

  openModal.addEventListener("click", () => {
    showRegister();
  });

  closeModal.addEventListener("click", () => {
    showRegister();
  });

  const deletePaciente = (uid) => {
    firebase.database().ref(`pacientes/${uid}`).remove();
  };

  const showUpdateModal = () => {
    updateModal.classList.toggle("is-active");
  };

  closeUpdateModal.addEventListener("click", () => {
    showUpdateModal();
  });

  window.addEventListener("DOMContentLoaded", async (e) => {
    await pacientRef.on("value", (pacientes) => {
      pacientesTable.innerHTML = "";
      // console.log(pacientes);
      pacientes.forEach((pacientes) => {
        let pacienteData = pacientes.val();

        //  console.log(pacienteData.Nombre);
        pacientesTable.innerHTML += `
          <tr>
                          <th>1</th>
                          <td>${pacienteData.Nombre}</td>
                          <td>${pacienteData.Apellidos}</td>
                          <td>${pacienteData.Telefono}</td>
                          <td>${pacienteData.Correo}</</td>
                          <td>${pacienteData.Fecha}</</td>
                          <td>${pacienteData.Hora}</</td>
                          <td>
                              <button class="button is-warning" data-id="${pacienteData.Uid}">
                                  <li class="fas fa-pencil-alt"></li>
                              </button>
                              <button class="button is-danger" data-id="${pacienteData.Uid}">
                                  <li class="fas fa-trash"></li>
                              </button>
  
                          </td>
                      </tr>`;

        const updatebuttons = document.querySelectorAll(".is-warning");

        updatebuttons.forEach((button) => {
          button.addEventListener("click", (e) => {
            // console.log(e.target.dataset.id);
            showUpdateModal();
            firebase
              .database()
              .ref(`pacientes/${e.target.dataset.id}`)
              .once("value")
              .then((paciente) => {
                const data = paciente.val();
                // console.log(data);
                updateForm["nombre"].value = data.Nombre;
                updateForm["apellidos"].value = data.Apellidos;
                updateForm["telefono"].value = data.Telefono;
                updateForm["correo"].value = data.Correo;
                updateForm["fecha"].value = data.Fecha;
                updateForm["hora"].value = data.Hora;
                updateForm["descripcion"].value = data.Descripcion;
              });
            const uid = e.target.dataset.id;
            updateForm.addEventListener("submit", (e) => {
              e.preventDefault();
              const nombre = updateForm["nombre"].value;
              const apellidos = updateForm["apellidos"].value;
              const telefono = updateForm["telefono"].value;
              const correo = updateForm["correo"].value;
              const fecha = updateForm["fecha"].value;
              const hora = updateForm["hora"].value;
              const descripcion = updateForm["descripcion"].value;
              firebase.database().ref(`pacientes/${uid}`).update({
                Nombre: nombre,
                Apellidos: apellidos,
                Telefono: telefono,
                Correo: correo,
                Fecha: fecha,
                Hora: hora,
                Descripcion: descripcion,
              });
              showUpdateModal();
            });
          });
        });
        const deletebuttons = document.querySelectorAll(".is-danger");
        deletebuttons.forEach((button) => {
          button.addEventListener("click", (e) => {
            // console.log(e.target.dataset.id);
            deletePaciente(e.target.dataset.id);
          });
        });
      });
    });
  });

  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = registerForm["nombre"].value;

    console.log(nombre);
    const apellidos = registerForm["apellidos"].value;
    const telefono = registerForm["telefono"].value;
    const correo = registerForm["correo"].value;
    const fecha = registerForm["fecha"].value;
    const hora = registerForm["hora"].value;
    const descripcion = registerForm["descripcion"].value;
    const registerPacient = pacientRef.push();
    console.log(registerPacient);
    console.log(registerPacient.path.pieces_[1]);
    registerPacient.set({
      Uid: registerPacient.path.pieces_[1],
      Nombre: nombre,
      Apellidos: apellidos,
      Telefono: telefono,
      Correo: correo,
      Fecha: fecha,
      Hora: hora,
      Descripcion: descripcion,
    });
    showRegister();
  });
});
