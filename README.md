# Examen del Curso Nivelador - Full Stack

Este es un examen para el curso nivelador del Master Full Stack. Esta API permite recibir llamadas **GET** y **POST** con finalidad de tomar el parametro de entrada para devolverlo por consola usando la funcion de **cowsay**.

### Nota: ###
- **GET** - usando la ruta *host/cowsay/get* enviando el parametro **cowsay** con el valor que se desea mostrar. *Ejemplo:* *host/cowsay/get?cowsay=holamundo*.

- **GET** - usando la ruta *host/cowsay/get/:cowsay* donde el parametro **cowsay** sera el valor que se desea mostrar. *Ejemplo:* *host/cowsay/get/holamundo*.

- **POST** - usando la ruta *host/cowsay/post* enviando el parametro **cowsay** con el valor que se desea mostrar. *Ejemplo:* *host/cowsay/post*.

- **Content-Type** - usar *application/x-www-form-urlencoded*.

### Requisitos: ###
- Tener instalado lo necesario para correr **NodeJs**.

- Tener instalado lo necesario para correr **Express**.

- Tener instalado lo necesario para correr **Git** / **Github**.

## Instalacion ##
1. Crear una carpeta local para el nuevo proyecto. 

2. Desde el **terminal** estando en el path de la carpeta del proyecto, correr **git init** para inicializar git.

3. Ir a *https://github.com/jeancjvp/examen-nivelador* y copiar la URL para clonar el proyecto.

4. Desde el **terminal** estando en el path de la carpeta del proyecto, correr **git clone #url** (reemplazando *#url* por la URL que se copio del Github) para clonar el proyecto.

5. Desde el **terminal** estando en el path de la carpeta del proyecto, correr **npm install** para instalar todos los paquetes necesarios para el buen funcionamiento del proyecto.

6. Solo queda iniciar el servidor, desde el **terminal** estando en el path de la carpeta del proyecto, correr **npm start**.

Con estos simples pasos ya puedes empezar a hacer uso de la API haciendo llamadas **GET** y **POST**.
