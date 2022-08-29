const express = require('express');
const router =  express.Router();
//const db = require('../config/db');

// importar controlador
const testsitos = require('../controllers/testControllers');

    //Index
    router.get('/', testsitos.testIndex)

    //Ruta Pública
    //router.get('/vistapublica', testsitos.testPu);
    
    //Ruta Privada
    //router.get('/vistaprivada', testsitos.testPri);

    //
    router.get('/login/google', testsitos.testGoogle);
    
    //
    router.get('/login/google/callback', testsitos.testGoogleCallback);

    //
    //router.get('/login/github', testsitos.testGithub);
    
    //
    //router.get('/login/github/callback', testsitos.testGithubCallback);

    module.exports = router;