export default class usuario {
  constructor(nombre, email, password) {
    this.nombre = nombre;
    this.email = email;
    this.password = password;
    this.librosPrestados = [];
  }

  getNombre() {
    return this.nombre;
  }

  getEmail() {
    return this.email;
  }

  getPassword() {
    return this.password;
  }

  setNombre(nNombre) {
    this.nombre = nNombre;
  }

  setEmail(nEmail) {
    this.nombre = nEmail;
  }

  setPassword(nPassword) {
    this.password = nPassword;
  }
}
