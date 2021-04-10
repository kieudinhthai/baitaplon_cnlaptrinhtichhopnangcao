const express = require('express')
const path = require("path");
const app = express()
const port = 3000

const route = require('./routes')

app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());
app.use(methordOverride("_method"));
app.use(
  express.urlencoded({
    extended: true,
  })
);


route(app)


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "view_pages", "layouts"));

//route(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });