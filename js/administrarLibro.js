//Importo las clases necessarias
import libro from "./libro.js";
import biblioteca from "./biblioteca.js";

//Hago una instancia global
const miBilioteca = new biblioteca();

//Una funcion que dibuja la tabla en el html
const dibujarTabla = () => {
  //Guardo el array en una variable nueva
  const libroGuardados = miBilioteca.libros;

  //Obtengo la tabla
  const table = document.getElementById("table");

  //Verifico si esta vacia
  table.innerHTML = "";

  //Agrego mediante un forEach los datos a la tabla
  libroGuardados.forEach((libro) => {
    table.innerHTML += `<tr>
    <td>${libro.titulo}</td>
    <td>${libro.autor}</td>
    <td>${libro.isbn}</td>
    </tr>`;
  });
};

//Funcion para crear input en el doom
const creacionInput = (id, placeholder, type) => {
  //Verifico si el id existe en el doom si no existe creo uno
  let input = document.getElementById(id) || document.createElement("input");
  input.id = id;
  input.placeholder = placeholder;
  input.type = type;
  input.classList.add('input')
  input.classList.add('input-separacion')

  return input;
};

//Funcion para crear botones en el doom
const creacionButton = (text, id) => {
  //Verifico si ya el id existe si no lo creo
  let button = document.getElementById(id) || document.createElement("button");
  button.textContent = text;
  button.id = id;
  button.classList.add('button-form')

  return button;
};

//Se dibuja la tabla al cargar el DOOM
document.addEventListener("DOMContentLoaded", dibujarTabla);

document.getElementById("agregarLibro").addEventListener("click", (e) => {
  e.preventDefault();

  //Obtengo los datos del formulario
  let titulo = document.getElementById("titulo").value;
  let autor = document.getElementById("autor").value;
  let isbn = parseInt(document.getElementById("isbn").value);

  //Verifico si los datos estan vacios
  if (titulo === "") {
    alert("El titulo esta vacio");
  } else if (autor === "") {
    alert("El autor esta vacio");
  } else if (isbn === "") {
    alert("El ISBN esta vacio");
  } else {
    //Si no estan vacios se crea la instacia con el libro
    const nuevoLibro = new libro(titulo, autor, isbn);

    //Y se agrega a la biblioteca
    miBilioteca.agregarLibro(nuevoLibro);

    //Se dibuja la tabla
    dibujarTabla();
  }
});

document.getElementById("editarLibro").addEventListener("click", (e) => {
  e.preventDefault();

  //Obtengo la etiqueta del html
  const div = document.getElementById("divForm");

  //Creo los input necesario para editar el libro
  let tituloNuevo = creacionInput("tituloNuevo", "Nuevo titulo", "text");
  let autorNuevo = creacionInput("autorNuevo", "Nuevo autor", "text");
  let isbnNuevo = creacionInput("isbnNuevo", "Nuevo ISBN", "number");
  let isbnViejo = creacionInput("isbnViejo", "El ISBN a cambiar", "number");

  //Creo el boton de confirmacion
  let button = creacionButton("Confirmar Cambio", "confirmarEdicion");

  //Los agrego al doom
  div.appendChild(tituloNuevo);
  div.appendChild(autorNuevo);
  div.appendChild(isbnNuevo);
  div.appendChild(isbnViejo);
  div.appendChild(button);

  button.addEventListener("click", (e) => {
    e.preventDefault();

    //Verificamos si los campos estan vacios
    if (
      tituloNuevo.value === "" ||
      autorNuevo.value === "" ||
      isbnNuevo.value === "" ||
      isbnViejo.value === ""
    ) {
      alert("Todos los campos deben estar completos");
      return;
    }

    //Ejecutar la funcion de edicion
    miBilioteca.editarLibro(
      tituloNuevo.value,
      autorNuevo.value,
      parseInt(isbnNuevo.value),
      parseInt(isbnViejo.value)
    );

    //Actualizamos la tabla
    dibujarTabla();
  });
});

document.getElementById("eliminarLibro").addEventListener("click", (e) => {
  e.preventDefault();

  //Obtengo la etiqueta del html
  const div = document.getElementById("divForm");

  //Creo el input para eliminar el libro
  let isbn = creacionInput(
    "isbnEliminar",
    "El ISBN que quieres eliminar",
    "number"
  );

  //Creo el boton para confirmar
  let button = creacionButton("Confirmar Eliminacion", "confirmarEliminar");

  //Los agrego al doom
  div.appendChild(isbn);
  div.appendChild(button);

  button.addEventListener("click", (e) => {
    e.preventDefault();

    //Verifico si el input esta vacio o tiene letras
    if (isbn.value === "" || isNaN(isbn.value)) {
      alert("El ISBN esta vacio o contiene letras");
      return;
    }

    //Ejecuto la funcion para eliminar el libro
    miBilioteca.eliminarLibro(parseInt(isbn.value));

    //Redibujo la tabla
    dibujarTabla();
  });
});

function cerrarSesion() {
  localStorage.removeItem("usuarioActivo");
  window.location.href = "index.html";
}