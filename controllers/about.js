const { request, response } = require("express");

const path = require("path");

const getAbout = (req = request, res = response) => {
    const pathAbout = path.join(__dirname, "../public/about.html");
    return res.sendFile(pathAbout);
};

module.exports = {
    getAbout,
};
