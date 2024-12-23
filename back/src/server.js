const express = require("express");
const router = require("./routes/router");

const morgan = require("morgan");
const cors = require("cors");

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Server is running!");
});


app.use(router)


module.exports = app;
