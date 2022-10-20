const express = require("express");
const cors = require("cors");

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.paths = {
            home: "/home",
            about: "/about",
            contact: "/contact",
        };
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(cors()); //CORS
        this.app.use(express.json());
        this.app.use(express.static("public"));
    }

    //Definiendo las rutas del servidor!
    routes() {
        this.app.use(this.paths.home, require("../routes/home"));
        this.app.use(this.paths.about, require("../routes/about"));
        this.app.use(this.paths.contact, require("../routes/contact"));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log("Corriendo servidor en el puerto", this.port);
        });
    }
}

module.exports = Server;
