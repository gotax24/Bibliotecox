import biblioteca from "./biblioteca.js";

const miBilioteca = new biblioteca();

const actualizarNombre = () => {
  let usuario = JSON.parse(localStorage.getItem("usuarioActivo"));
  document.getElementById("usuario").innerText = usuario
    ? usuario.nombre
    : "Invitado";

  return (span.innerText = usuario.nombre);
};

//Funcion para crear input en el doom
const creacionInput = (id, placeholder, type, autocomplete) => {
  //Verifico si el id existe en el doom si no existe creo uno
  let input = document.getElementById(id) || document.createElement("input");
  input.id = id;
  input.placeholder = placeholder;
  input.type = type;
  input.autocomplete = autocomplete;

  return input;
};

//Funcion para crear botones en el doom
const creacionButton = (text, id) => {
  //Verifico si ya el id existe si no lo creo
  let button = document.getElementById(id) || document.createElement("button");
  button.textContent = text;
  button.id = id;

  return button;
};

document.getElementById("nombreNuevo").addEventListener("click", (e) => {
  e.preventDefault();

  const form = document.getElementById("contentInputs");
  const p = document.getElementById("resultado");

  //Creo los inputs neceasarios
  const nombreNuevo = creacionInput(
    "nuevoNombre",
    "Nombre Nuevo",
    "text",
    "name"
  );
  const nombreViejo = creacionInput(
    "viejoNombre",
    "Nombre Viejo",
    "text",
    "name"
  );

  //Creo el boton para confimar el cambio
  const button = creacionButton("Confirmar Cambio", "cambiarNombre");

  //Los agrego al doom
  form.appendChild(nombreViejo);
  form.appendChild(nombreNuevo);
  form.appendChild(button);

  button.addEventListener("click", (e) => {
    e.preventDefault();

    //Verifico si los inputs estan vacios
    if (nombreNuevo.value === "" || nombreViejo.value === "") {
      alert("Todos los campos deben estar llenos");
    } else {
      //Ejecuto el metodo para cambiar el nombre
      miBilioteca.cambiarNombre(nombreViejo.value, nombreNuevo.value);
      p.innerText = `El nombre se ha cambiado exitosamente`;

      //Actualizo el nombre en la pantalla
      actualizarNombre();

      //Reseteo los inputs
      nombreNuevo.innerHTML = "";
      nombreViejo.innerHTML = "";
    }
  });
});

//Actualizo el nombre de la pagina
document.addEventListener("DOMContentLoaded", actualizarNombre);

document.getElementById("emailNuevo").addEventListener("click", (e) => {
  e.preventDefault();

  const form = document.getElementById("contentInputs");

  //Creo los inputs necesario
  const emailViejo = creacionInput(
    "viejoEmail",
    "Email Viejo",
    "email",
    "email"
  );
  const emailNuevo = creacionInput(
    "nuevoEmail",
    "Email Nuevo",
    "email",
    "email"
  );

  //Creo el btn para confirmar
  const button = creacionButton("Confirmar Cambio", "cambiarEmail");

  const p = document.getElementById("resultado");

  //Los agrego al doom
  form.appendChild(emailViejo);
  form.appendChild(emailNuevo);
  form.appendChild(button);

  button.addEventListener("click", (e) => {
    e.preventDefault();

    //Verifico si los inputs estan vacios
    if (emailViejo.value === "" || emailNuevo.value === "") {
      alert("Todos los campos deben estar llenos");
    } else if (miBilioteca.verificarEmailRepetido(emailNuevo.value) === true) {
      //Verifico si el email ya existe
      return;
    } else {
      //Ejecuto el metodo para cambiar el email
      miBilioteca.cambiarEmail(emailViejo.value, emailNuevo.value);
      p.innerText = `El email se ha cambiado exitosamente`;

      //Reseteo los inputs
      emailNuevo.innerHTML = "";
      emailViejo.innerHTML = "";
    }
  });
});

document.getElementById("passwordNuevo").addEventListener("click", (e) => {
  //Evito la recarga de la pagina
  e.preventDefault();

  const form = document.getElementById("contentInputs");

  //Creo los inputs necesario
  const passwordVieja = creacionInput(
    "viejoPassword",
    "Contraseña Vieja",
    "password",
    "current-password"
  );
  const passwordNuevo = creacionInput(
    "nuevoPassword",
    "Contraseña Nuevo",
    "password",
    "new-password"
  );

  //Creo el btn para confirmar
  const button = creacionButton("Confirmar Cambio", "cambiarPassword");

  const p = document.getElementById("resultado");

  //Agrego los inputs y btn al doom
  form.appendChild(passwordVieja);
  form.appendChild(passwordNuevo);
  form.appendChild(button);

  button.addEventListener("click", (e) => {
    e.preventDefault();
    //Verifico si los inputs estan vacios
    if (passwordVieja.value === "" || passwordNuevo.value === "") {
      alert("Todos los campos deben estar llenos");
    } else if (miBilioteca.validarPassword(passwordNuevo.value)) {
      //Verifico si la password cumple con los parametros
      return;
    } else {
      //Ejecuto el metodo de cambiar password
      miBilioteca.cambiarPassword(passwordVieja.value, passwordNuevo.value);
      p.innerText = `La contraseña se ha cambiado exitosamente`;

      //Reseteo los inputs
      passwordNuevo.innerHTML = "";
      passwordVieja.innerHTML = "";
    }
  });
});

document.getElementById("eliminarUsuario").addEventListener("click", (e) => {
  e.preventDefault();

  //Elimino el usuario
  if (miBilioteca.eliminarUsuario() === true) {
    //Redirigo al usuario al login
    window.location.href = "login.html";
  } else {
    alert("No se pudo eliminar");
  }
});
