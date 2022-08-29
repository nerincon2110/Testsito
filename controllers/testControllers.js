//<------ Modulos ------>
//const Solicitudes = require('../models/Solicitudes');

const dotenv = require('dotenv');
dotenv.config({path: '.env'});
var fetch = require("fetch");   

//<------ Varibles ------>

const google_client_id = process.env.GOOGLE_CLIENT_ID
const google_client_secret = process.env.GOOGLE_CLIENT_SECRET
const google_redirecturl = "http://localhost:2100/test/login/google/callback"

exports.testIndex = (req, res) => {
    const msg = "<--------------Testsito-------------->"
    console.log(msg);
    res.json({mgs: "Inicio"})
}

    //GOOGLE

exports.testGoogle = (req, res) =>{
    console.log("<--------------GOOGLE-------------->") 
    res.json({msg: "Google"})
}

exports.testGoogleCallback = (req, res) =>{
    console.log("<--------------GOOGLE CALLBACK-------------->")
    res.json({msg: "Google Callback"})
    return ("GOOGLE CALLBACK")
}
