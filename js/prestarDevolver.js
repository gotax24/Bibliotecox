//Importo las clases necessarias
import biblioteca from "./biblioteca.js";

//Hago una instancia global
const miBiblioteca = new biblioteca();

let usuario = JSON.parse(localStorage.getItem("usuarioActivo")) || {
  nombre: "Invitado",
};
document.getElementById("usuario").innerHTML = usuario.nombre;

//Una funcion que dibuja la tabla en el html
const dibujarTabla = () => {
  //Guardo el array en una variable nueva
  const libroGuardados = miBiblioteca.libros;

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

const dibujarTablaPrestados = () => {
  //Obtengo los libros prestados del usuario
  const librosPrestados = miBiblioteca.usuarioActivo.librosPrestados;

  //Obtengo la etiqueta del html
  const table = document.getElementById("tablePrestados");

  table.innerHTML = "";

  //Agrego mediante un forEach los datos en la tabla
  librosPrestados.forEach((libro) => {
    table.innerHTML += `<tr>
    <td>${libro.titulo}</td>
    <td>${libro.autor}</td>
    <td>${libro.isbn}</td>
    </tr>`;
  });
};

//Actualizo las tablas
document.addEventListener("DOMContentLoaded", () => {
  dibujarTabla();
  dibujarTablaPrestados();
});

document.getElementById("prestar").addEventListener("click", () => {
  let isbn = parseInt(document.getElementById("isbnPrestar").value);

  //Busco el libro que tenga el mismo isbn
  const libroAPrestar = miBiblioteca.libros.find(
    (libro) => libro.isbn === isbn
  );

  //Verifico el libro
  if (libroAPrestar) {
    // Prestar el libro utilizando el método de la biblioteca
    miBiblioteca.prestarLibro(libroAPrestar);

    // Redibujar la tabla de libros disponibles
    dibujarTabla();

    //Redibujar la tabla de libros prestados
    dibujarTablaPrestados();
  } else {
    alert("No se encontró el libro");
  }
});

document.getElementById("devolver").addEventListener("click", () => {
  let isbn = parseInt(document.getElementById("isbnDevolver").value);

  //Busco el libro entre los prestados por el usuario
  const libroADevolver = miBiblioteca.usuarioActivo.librosPrestados.find(
    (libro) => libro.isbn === isbn
  );

  //Verifico el libro
  if (libroADevolver) {
    //Devuelvo el libro
    miBiblioteca.recibirLibro(libroADevolver);

    //Redibujar la tabla de disponible
    dibujarTabla();

    //Redibujar la tabla de prestado
    dibujarTablaPrestados();
  } else {
    alert("El libro no lo tienes prestado");
  }
});

function cerrarSesion() {
  localStorage.removeItem("usuarioActivo");
  window.location.href = "index.html";
}
