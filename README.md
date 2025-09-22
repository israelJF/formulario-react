crear el proyecto

Abre Git Bash  y ejecuta:

npx create-react-app formulario-react


Esto crea una carpeta llamada formulario-react con la estructura básica de React.


npx create-react-app@latest formulario-react

2️ Entrar a la carpeta del proyecto
cd formulario-react

3️ Instalar Bootstrap

Para poder usar los estilos:

npm install bootstrap


Esto descargará Bootstrap en tu proyecto.

4️ Instalar web-vitals (si da error como el que viste)
npm install web-vitals


(React usa este paquete para medir rendimiento; a veces no se instala automáticamente).

5️ Modificar archivos principales
a) src/index.js

Agregar la importación de Bootstrap:

import 'bootstrap/dist/css/bootstrap.min.css';



b) src/App.js

Aquí pones el código completo del formulario con validaciones (te lo di en el mensaje anterior).

6️ Ejecutar el proyecto

En la terminal, estando dentro de formulario-react:

npm start


Esto compila el proyecto y abre automáticamente una pestaña en tu navegador 

Cada vez que guardes cambios en App.js, la página se actualizará automáticamente.

