# Bibliotecox

**Bibliotecox** es una página web ficticia que permite gestionar una biblioteca. Los usuarios pueden agregar libros, prestar o devolver libros y actualizar su información personal (nombre, correo electrónico, contraseña) mediante una interfaz fácil de usar. Este proyecto utiliza HTML, CSS y JavaScript para su funcionamiento.

## Características

- **Agregar Libros**: Permite agregar libros con detalles como título, autor y código ISBN.
- **Prestar y Devolver Libros**: Los usuarios pueden gestionar el préstamo y devolución de libros usando el código ISBN.
- **Gestión de Usuarios**: Los usuarios pueden actualizar su nombre, correo electrónico y contraseña, o eliminar su cuenta.
- **Interfaz de Usuario Centrada**: La página está diseñada con un enfoque minimalista, con elementos centrados y un diseño responsivo para adaptarse a diferentes tamaños de pantalla.
- **Diseño Responsivo**: La interfaz está optimizada para dispositivos móviles y pantallas de escritorio.
- **Compatibilidad con Navegadores**: La página es compatible con los navegadores modernos.

## Tecnologías Utilizadas

- **HTML5**: Estructura de la página web.
- **CSS3**: Estilos y diseño responsivo.
- **JavaScript (ES6+)**: Manejo de la lógica del frontend.
- **Google Fonts**: Tipografía personalizada.
- **SVG Icons**: Iconos en formato SVG para una mejor calidad visual.

## Estructura del Proyecto

```bash
bibliotecox/
│
├── img/                    # Carpeta de imágenes y logos
│   └── *.svg                # Archivos SVG usados en la interfaz
├── css/
│   └── style.css            # Archivo de estilos CSS principal
├── js/
│   └── administrarUsuario.js # Lógica de JavaScript para la gestión de usuarios
├── index.html               # Página principal
├── add.html                 # Página para agregar libros
├── borrow.html             # Página para prestar y devolver libros
├── user.html               # Pagina para administrar el usuario
└── README.md                # Documentación del proyecto
