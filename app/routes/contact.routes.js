const express = require("express");
const contacts = require("../controllers/contact.controller");

module.exports = app => {
    const router = express.Router();

    //Create a new contact
    router.post("/", contacts.create);

    //retrieve all contacts
    router.get("/", contacts.findAll);

    //retrieve all favorite contacts
    router.get("/favorite", contacts.findAllFavorite);

    //retrieve a single contact with id
    router.get("/:id", contacts.findOne);

    //
}