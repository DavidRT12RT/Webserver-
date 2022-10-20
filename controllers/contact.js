const { request, response } = require("express");
const path = require("path");

const getContact = (req = request, res = response) => {
    const pathContact = path.join(__dirname, "../public/contact.html");
    return res.sendFile(pathContact);
};

module.exports = {
    getContact,
};
