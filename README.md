# Examen del Curso Nivelador - Full Stack

Este es un examen para el curso nivelador del Master Full Stack. Esta API permite recibir llamadas **GET** y **POST** con finalidad de tomar el parametro de entrada para devolverlo por consola usando la funcion de **cowsay**.

### Nota: ###
- **GET** - usando la ruta **host/cowsay/get** enviando el parametro **cowsay** con el valor que se desea mostrar. *Ejemplo:* **host/cowsay/get?cowsay=holamundo**.

- **GET** - usando la ruta **host/cowsay/get/:cowsay** donde el parametro **cowsay** sera el valor que se desea mostrar. *Ejemplo:* **host/cowsay/get/holamundo**.

- **POST** - usando la ruta **host/cowsay/post** enviando el parametro **cowsay** con el valor que se desea mostrar. *Ejemplo:* **host/cowsay/post**.

- **Content-Type** - usar **application/x-www-form-urlencoded**.

### Requisitos: ###
- Tener instalado lo necesario para correr **NodeJs**.

- Tener instalado lo necesario para correr **Express**.

- Tener instalado lo necesario para correr **Git** / **Github**.

- Tener instalado lo necesario para correr **Docker** (solo en caso que se quiera aplicar la instalacion en Docker).

---

## Instalacion Local ##
1. Crear una carpeta local para el nuevo proyecto. 

2. Desde el **terminal** estando en el path de la carpeta del proyecto, correr **"git init"** para inicializar git.

3. Ir a *https://github.com/jeancjvp/examen-nivelador* y copiar la URL para clonar el proyecto.

4. Desde el **terminal** estando en el path de la carpeta del proyecto, correr **"git clone #url"** (reemplazando *#url* por la URL que se copio del Github) para clonar el proyecto.

5. Desde el **terminal** estando en el path de la carpeta del proyecto, correr **"npm install"** para instalar todos los paquetes necesarios para el buen funcionamiento del proyecto.

6. Solo queda iniciar el servidor, desde el **terminal** estando en el path de la carpeta del proyecto, correr **"npm start"**.

Con estos simples pasos ya puedes empezar a hacer uso de la API haciendo llamadas **GET** y **POST**.

---

## Instalacion Docker ##

1. Crear una carpeta local para el nuevo proyecto. 

2. Desde el **terminal** estando en el path de la carpeta del proyecto, correr **"git init"** para inicializar git.

3. Ir a *https://github.com/jeancjvp/examen-nivelador* y copiar la URL para clonar el proyecto.

4. Desde el **terminal** estando en el path de la carpeta del proyecto, correr **"git clone #url"** (reemplazando *#url* por la URL que se copio del Github) para clonar el proyecto.

5. Crear una imagen en Docker usando el file **Dockerfile** que se encuentra en el path **"/"** del proyecto. Para crear la imagen se puede utilizar el siguiente comando: **"docker build . -t #imageName"** (reemplazando *#imageName* por el nombre que queremos que tenga la imagen) desde el **terminal**. 

**Nota:** Al correr el comando debes tomar el ID de la imagen que se muestra al final de la corrida, de lo contrario lo puedes tomar corriendo el siguiente comando: **"docker images"** desde el **terminal** guiandote por el **tag** (nombre) que le colocaste a la imagen al crearlo.

6. Luego tenemos que crear el/los contenedor(es) usando la imagen antes creada corriendo el siguiente comando: **"docker run -p 3000:3000 #imageId"** (reemplazando *#imageId* por el ID de la imagen) desde el **terminal**.

Con estos simples pasos ya puedes empezar a hacer uso de la API haciendo llamadas **GET** y **POST**.