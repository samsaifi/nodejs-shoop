require("dotenv").config();
const express = require('express')
const bodyParser = require("body-parser");
const path = require('path');


const rotues = require("./routes");
const db = require("./dirvers/mongoose");
const models = require("./models");




const app = express()
const port = process.env.PORT || 3000;


// app.set("view engine", "pug");
app.set("view engine", "ejs");
app.set("views", "src/shop/views");

// const rootDir = require("./helper/path");
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));





app.use(rotues);
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port http://localhost:${port}`))


