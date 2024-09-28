# Bibliotecox

**Bibliotecox** es una aplicación web ficticia diseñada para gestionar bibliotecas. Permite a los usuarios agregar libros, gestionar préstamos y devoluciones, y actualizar su información personal de forma sencilla y eficiente. El proyecto está construido con HTML, CSS y JavaScript, utilizando principios modernos de diseño y desarrollo web.

## Características

- **Agregar Libros**: Los usuarios pueden agregar libros proporcionando el título, autor y código ISBN.
- **Gestión de Préstamos y Devoluciones**: Funcionalidad para prestar o devolver libros mediante el código ISBN.
- **Gestión de Usuarios**: Los usuarios pueden:
  - Cambiar su nombre.
  - Actualizar su correo electrónico.
  - Modificar su contraseña.
  - Eliminar su cuenta.
- **Interfaz Minimalista y Centrada**: La UI está diseñada para ser intuitiva y está centrada tanto en dispositivos móviles como en pantallas grandes.
- **Diseño Responsivo**: Optimizada para adaptarse a distintos dispositivos, incluyendo móviles y tablets.
- **Compatibilidad con Navegadores Modernos**: Funciona perfectamente en navegadores populares como Chrome, Firefox, Safari y Edge.

## Tecnologías Utilizadas

- **HTML5**: Para la estructura y contenido de las páginas.
- **CSS3**: Para el estilo, diseño responsivo y personalización visual.
- **JavaScript (ES6+)**: Para manejar la lógica del frontend.
- **Google Fonts**: Tipografía personalizada para mejorar la presentación visual.
- **SVG Icons**: Íconos vectoriales de alta calidad que se adaptan a distintas resoluciones.

## Estructura del Proyecto

```bash
bibliotecox/
│
├── img/                       # Carpeta que contiene imágenes y logos en formato SVG y JPG
│   └── *.svg                  # Archivos SVG usados en la interfaz de usuario
│   └── *.jpg                  # Imágenes adicionales usadas en la página principal
│
├── css/                       # Estilos CSS del proyecto
│   └── index.css              # Estilos CSS para el sistema de login
│   └── style.css              # Estilos CSS principal para la UI
│
├── js/                        # Archivos de JavaScript que controlan la lógica
│   └── administrarUsuario.js  # Lógica para la gestión de usuarios
│   └── administrarLibro.js    # Funcionalidades para agregar, eliminar y editar libros
│   └── Biblioteca.js          # Lógica principal de la biblioteca
│   └── index.js               # Lógica para el manejo del login de usuarios
│   └── libro.js               # Definición del objeto libro
│   └── prestarDevolver.js     # Lógica para gestionar los préstamos y devoluciones
│   └── usuario.js             # Definición del objeto usuario
│
├── index.html                 # Página principal de la aplicación
├── add.html                   # Página para agregar libros a la biblioteca
├── borrow.html                # Página para prestar y devolver libros
├── user.html                  # Página para la administración del perfil de usuario
└── README.md                  # Documentación del proyecto
```

## Instrucciones para la Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/bibliotecox.git
   ```
2. Abre el archivo `index.html` en tu navegador.

## Contribuciones

Si deseas contribuir a este proyecto:

1. Haz un fork del repositorio.
2. Crea una nueva rama:
   ```bash
   git checkout -b feature-nueva-funcionalidad
   ```
3. Haz tus cambios y realiza un commit:
   ```bash
   git commit -m "Agrega nueva funcionalidad"
   ```
4. Sube los cambios:
   ```bash
   git push origin feature-nueva-funcionalidad
   ```
5. Abre un Pull Request.

## Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## Contacto

- **Autor**: Ing. Ernesto Bracho
- **Correo**: [dev.ejbr@gmail.com](mailto:dev.ejbr@gmail.com)
- **GitHub**: [Ernesto Bracho](https://github.com/gotax24)
- **LinkedIn**: [Ernesto Bracho](https://www.linkedin.com/in/ernesto-bracho/)