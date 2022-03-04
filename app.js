const express = require("express");
const cors = require("cors");


const setupContactRoutes = require("./app/routes/contact.routes");

const { BadRequestError, errorHandler } = require("./app/errors");

const app = express();
app.use(cors());

// parese requests of content-type - application/json
app.use(express.json());

// parse repuests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

//simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to contact book application." });
});

setupContactRoutes(app);

// handle 404 response
app.use((req, res, next) => {
    //Code o day se chay khi khong co route duoc dinh nghia nao
    //khop voi yeu cau. Goi next() de chuyen sang middleware xu ly loi
    next(new BadRequestError(404, "Resource not found"));
});

//define error-handling middleware last, after other app.use() and routes calls
app.use((err, req, res, next) => {
    // middleware xu ly loi tap trung
    //Trong cac doan code xu ly o cac route, goi next(error)
    // se chuyen ve middleware xu ly loi nay
    errorHandler.handleError(err, res);
});

module.exports = app;