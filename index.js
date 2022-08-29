const express = require('express');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config({path: '.env'})

const testIndex = require('./routes/testRoutes.js');

// Crear la app
const app = express();

app.use(cors());

// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

// Routing
app.use('/test', testIndex);

// Definir un puerto y arrancar el proyecto
const port = process.env.PORT || 2121;
app.listen(port, () => {
    console.log(`El Servidor está funcionando en el puerto ${port}`)
});