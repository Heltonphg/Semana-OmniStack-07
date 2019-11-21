const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes');

class App {
    constructor(){
        this.express = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.express.use(express.urlencoded({ extended: false })); // permite o envio de arquivo
        this.express.use(cors()); //permite que aplicacoes externas acessem nossa api
        this.express.use(bodyParser.json ({limit: '5mb', extended: true}));
        this.express.use(bodyParser.urlencoded({limit: '5mb', extended: true}));
    }

    routes(){
        this.express.use(routes);
    }
}

module.exports = new App().express;