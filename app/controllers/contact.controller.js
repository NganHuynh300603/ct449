const req = require("express/lib/request");
const res = require("express/lib/response");

// Create and Save a new Contact 
exports.create = async(req, res) => {
    res.send({ message: "create handler" });
};

// Retrieve all contacts of a user from the database.
exports.findAll = async(req, res) => {
    res.send({ message: "findAll hander" });
};

// Find a single contact with an id
exports.findOne = async(req, res) => {
    res.send({ message: "findOne hadler" });
};

//update a contact by the id in the request
exports.update = async(req, res) => {
    res.send({ message: "update handler" });
};

//Delete a contact with the specified id in the request
exports.delete = async(req, res) => {
    res.send({ message: "deleteAll handler" });
};