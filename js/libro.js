export default class libro {
  constructor(titulo, autor, isbn) {
    (this.titulo = titulo), (this.autor = autor), (this.isbn = isbn);
  }

  getTitulo(){
    return this.titulo
  }

  getAutor(){
    return this.autor
  }

  getIsbn(){
    return this.isbn
  }

  setTitulo(nTitulo){
    this.titulo = nTitulo
  }

  setAutor(nAutor){
    this.autor = nAutor
  }

  setIsbn(nIsbn){
    this.isbn = nIsbn
  }
}
