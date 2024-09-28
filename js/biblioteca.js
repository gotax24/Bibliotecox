export default class biblioteca {
  constructor() {
    this.usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    this.libros = JSON.parse(localStorage.getItem("libros")) || [];
    this.usuarioActivo =
      JSON.parse(localStorage.getItem("usuarioActivo")) || [];
  }

  agregarLibro(libro) {
    // Guardo el libro en el array
    this.libros.push(libro);

    // Guardo el array con el nuevo libro en el local storage
    localStorage.setItem("libros", JSON.stringify(this.libros));
  }

  editarLibro(nuevoTitulo, nuevoAutor, nuevoIsbn, isbn) {
    //Busco el index del libro a editar
    const libroIndex = this.libros.findIndex((libro) => libro.isbn === isbn);

    //Verifico si el libro existe
    if (libroIndex !== -1) {
      //Cambio los datos del libro
      this.libros[libroIndex].titulo = nuevoTitulo;
      this.libros[libroIndex].autor = nuevoAutor;
      this.libros[libroIndex].isbn = nuevoIsbn;

      //Actualizo el local storage
      localStorage.setItem("libros", JSON.stringify(this.libros));
    } else {
      alert("Libro no encontrado");
    }
  }

  eliminarLibro(isbn) {
    //Busco el index del libro a eliminar
    const libroIndex = this.libros.findIndex((index) => index.isbn === isbn);

    //Verifico si el libro existe
    if (libroIndex !== -1) {
      //Elimino el libro elegido
      this.libros.splice(libroIndex, 1);

      //Actualizo el local storage
      localStorage.setItem("libros", JSON.stringify(this.libros));
    } else {
      alert("Libro no encontrado");
    }
  }

  registrarUsuarios(usuario, email) {
    if (this.verificarEmailRepetido(email)) {
      return;
    } else {
      //Agrego el usuario al array del objeto
      this.usuarios.push(usuario);

      //Guardo el usuario en el local storage
      localStorage.setItem("usuarios", JSON.stringify(this.usuarios));
    }
  }

  verificarEmailRepetido(email) {
    //Busco el usuario
    const usuarioExistente = this.usuarios.find(
      (usuario) => usuario.email === email
    );

    //Verifico si el email ya esta registrado
    if (usuarioExistente) {
      alert("El email ya existe");
      return true;
    } else {
      return false;
    }
  }

  cambiarNombre(nombreViejo, nombreNuevo) {
    //Busco el index del usuario
    const usuarioIndex = this.usuarios.findIndex(
      (usuario) => usuario.nombre === nombreViejo
    );

    //Verifico el usuario
    if (usuarioIndex !== -1) {
      //Cambio el nombre del usuario
      this.usuarios[usuarioIndex].nombre = nombreNuevo;

      //Actualizo el local storage
      localStorage.setItem("usuarios", JSON.stringify(this.usuarios));
      localStorage.setItem(
        "usuarioActivo",
        JSON.stringify(this.usuarios[usuarioIndex])
      );
    } else {
      alert("Nombre no encontrado");
    }
  }

  cambiarEmail(emailViejo, emailNuevo) {
    //Busco el index del usuario
    const usuarioIndex = this.usuarios.findIndex(
      (usuario) => usuario.email === emailViejo
    );

    //Verifico el usuario
    if (usuarioIndex === -1) {
      //Cambio el email del usuario
      this.usuarios[usuarioIndex].email = emailNuevo;
      
      //Actualizamos el local storage
      localStorage.setItem("usuarios", JSON.stringify(this.usuarios));
      localStorage.setItem(
        "usuarioActivo",
        JSON.stringify(this.usuarios[usuarioIndex])
      );
    } else {
      alert("Email no encontrado");
    }
  }

  validarPassword(password) {
    //Establecemos el minimo de carecteres
    const cantidadMin = 8;

    //Establecemos los parametros 
    const tieneMayusculas = /[A-Z]/.test(password);
    const tieneMinusculas = /[a-z]/.test(password);
    const tieneNumeros = /\d/.test(password);
    const tieneEspeciales = /[!@#$%^&*(),/?":{}|<>]/.test(password);

    // Verificar si cumple con todos los parámetros
    if (password.length < cantidadMin) {
      alert(
        "La contraseña debe tener al menos " + cantidadMin + " caracteres."
      );
      return true;
    } else if (!tieneMayusculas) {
      alert("La contraseña debe tener al menos una letra mayúscula.");
      return true;
    } else if (!tieneMinusculas) {
      alert("La contraseña debe tener al menos una letra minúscula.");
      return true;
    } else if (!tieneNumeros) {
      alert("La contraseña debe tener al menos un número.");
      return true;
    } else if (!tieneEspeciales) {
      alert(
        "La contraseña debe tener al menos un carácter especial de estos (! ? / - _ * +  , # $ % &)."
      );
      return true;
    } else {
      return false;
    }
  }

  cambiarPassword(passwordViejo, passwordNuevo) {
    //Busco el index del usuario
    const usuarioIndex = this.usuarios.findIndex(
      (usuario) => usuario.password === passwordViejo
    );

    //Verifico el usuario
    if (usuarioIndex !== -1) {
      //Cambiamos la contraseña del usuario
      this.usuarios[usuarioIndex].password = passwordNuevo;
      
      //Actualizamos el local storage
      localStorage.setItem("usuarios", JSON.stringify(this.usuarios));
      localStorage.setItem(
        "usuarioActivo",
        JSON.stringify(this.usuarios[usuarioIndex])
      );
    } else {
      alert("Password no encontrado");
    }
  }

  eliminarUsuario() {
    const usuarioIndex = this.usuarios.findIndex(
      (usuario) => usuario.email === this.usuarioActivo.email
    );

    if (usuarioIndex !== -1) {
      //Eliminamos el usuario
      this.usuarios.splice(usuarioIndex, 1);

      //Actualizo el local storage
      localStorage.setItem("usuarios", JSON.stringify(this.usuarios));

      return true;
    } else {
      alert("Usuario no encontrado");

      return false;
    }
  }

  autentificarUsuarios(emailLogin, passwordLogin) {
    //busco el usuario que tenga la misma clave y contraseña
    const usuario = this.usuarios.find(
      (usuario) =>
        usuario.email === emailLogin && usuario.password === passwordLogin
    );

    //Verifico el usuario existente
    if (usuario) {
      //Agrego el usuario al local storage para usarlo en diferentes partes del sistema
      localStorage.setItem("usuarioActivo", JSON.stringify(usuario));

      return true;
    } else {
      console.log(
        `El user con el email ${emailLogin} no coincide o la contrasena`
      );
      return false;
    }
  }

  prestarLibro(libro) {
    //Busco el index del libro a prestar
    const libroIndex = this.libros.findIndex(
      (index) => index.isbn === libro.isbn
    );

    if (libroIndex !== -1) {
      // Remover el libro del array de la biblioteca
      this.libros.splice(libroIndex, 1);

      //Actualizamos el local storoage
      localStorage.setItem("libros", JSON.stringify(this.libros));

      // El usuario presta el libro
      this.usuarioActivo.librosPrestados.push(libro);

      // Actualizar el usuario activo en la lista de usuarios
      const usuarioIndex = this.usuarios.findIndex(
        (u) => u.email === this.usuarioActivo.email
      );

      //Verifico el usuario
      if (usuarioIndex !== -1) {
        //Actualizo el array del usuario
        this.usuarios[usuarioIndex] = this.usuarioActivo;

        //Actualizo el local storage
        localStorage.setItem("usuarios", JSON.stringify(this.usuarios));
        localStorage.setItem(
          "usuarioActivo",
          JSON.stringify(this.usuarioActivo)
        );
      }
    } else {
      alert("Libro no encontrado");
    }
  }

  recibirLibro(libro) {
    //Elimino el libro prestado
    this.usuarioActivo.librosPrestados =
      this.usuarioActivo.librosPrestados.filter(
        (codigo) => codigo.isbn !== libro.isbn
      );

    //Busco el index del usuario
    const usuarioIndex = this.usuarios.findIndex(
      (u) => u.email === this.usuarioActivo.email
    );

    //Verifico el usuario
    if (usuarioIndex !== -1) {
      //Actualizo el usuario
      this.usuarios[usuarioIndex] = this.usuarioActivo;

      //Actualizo el local storage
      localStorage.setItem("usuarios", JSON.stringify(this.usuarios));
      localStorage.setItem("usuarioActivo", JSON.stringify(this.usuarioActivo));
    }

    //Lo agrego a la biblioteca
    this.agregarLibro(libro);
  }
}
