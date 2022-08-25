const express = require('express');
const dotenv = require('dotenv');
dotenv.config({path: '.env'})








// Crear la app
const app = express();





// Definir un puerto y arrancar el proyecto
const port = process.env.PORT || 2121;
console.log(process.env.PORT)
app.listen(port, () => {
    console.log(`El Servidor está funcionando en el puerto ${port}`)
});