const req = require("express/lib/request");
const res = require("express/lib/response");
module.exports = {
    create: async(req, ses, next) => {
        res.send({ message: "create handler" });
    },

    // Create and Save a new Contact 

    // Retrieve all contacts of a user from the database.
    findAll: async(req, res) => {
        res.send({ message: "findAll handler" });
    },

    // Find a single contact with an id
    findOne: async(req, res) => {
        res.send({ message: "findOne hadler" });
    },

    //update a contact by the id in the request
    update: async(req, res) => {
        res.send({ message: "update handler" });
    },

    //Delete a contact with the specified id in the request
    delete: async(req, res) => {
        res.send({ message: "deleteAll handler" });
    },
    findAllFavorite: async(req, res) => {
        res.send({ message: "findAllFavorite handler" });
    },
}