const express = require('express')
const path = require("path");
const mongoose = require('mongoose')
const app = express()
const port = 3000


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "view_pages", "layouts"));

route(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });