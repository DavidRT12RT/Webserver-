const { response, request } = require("express");

const path = require("path");

const getHome = async (req = request, res = response) => {
    console.log("Llego peticion!");
    const pathHome = path.join(__dirname, "../public/home.html");
    return res.sendFile(pathHome);
};

module.exports = {
    getHome,
};
