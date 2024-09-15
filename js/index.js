import usuario from "./usuario.js";
import biblioteca from "./biblioteca.js";

//Hago una instacia global para usarla en todo el script
const miBilioteca = new biblioteca();

document.getElementById("button-registrar").addEventListener("click", (e) => {
  //Evitando que se recargue la pagina
  e.preventDefault();

  //Obteniendo los valores del fom
  let nombre = document.getElementById("nombre").value;
  let email = document.getElementById("email-r").value;
  let password = document.getElementById("password-r").value;

  //Obtengo la etiqueta del html
  const p = document.getElementById("resultado-user");

  //Verifico si los input estan vacios
  if (nombre === "" || /\d/.test(nombre)) {
    alert("El nombre esta vacio o contiene numeros");
    p.innerText = "El usuario no pudo ser agregado";
  } else if (
    email === "" ||
    miBilioteca.verificarEmailRepetido(email) === true
  ) {
    p.innerText = "El usuario no pudo ser agregado";
  } else if (password === "") {
    alert("La contraseña esta vacia");
    p.innerText = "El usuario no pudo ser agregado";
  } else if (miBilioteca.validarPassword(password) === true) {
    p.innerText = "El usuario no pudo ser agregado";
  } else {
    //Si no lo estan creo el usuario
    const nuevoUser = new usuario(nombre, email, password);

    //Registro el nuevo usuario en la biblioteca
    miBilioteca.registrarUsuarios(nuevoUser);

    //Modifico la etiqueta para decirle al usuario que ya puede ingresar
    p.innerHTML =
      "El usuario fue agregado exitosamente, intente otra vez ingresar";

    //Reseteamos los inputs
    nombre.value = "";
    email.value = "";
    password.value = "";
  }
});

document.getElementById("button-ingresar").addEventListener("click", (e) => {
  //Evitando que se recargue la pagina
  e.preventDefault();

  //Obteniendo los valores del form
  let email = document.getElementById("email-i").value;
  let password = document.getElementById("password-i").value;

  //Verifico si estan vacios los inputs
  if (email === "") {
    alert("El email esta vacio");
  } else if (password === "") {
    alert("La contraseña esta vacia");
  } else {
    //Verifico los datos del usuario
    if (miBilioteca.autentificarUsuarios(email, password)) {
      //Redirigo el usuario al home de la aplicacion web
      window.location.href = "home.html";
    } else {
      alert("El usuario no coincide o no esta registrado");
    }
  }
});
