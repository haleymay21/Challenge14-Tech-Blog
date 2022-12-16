const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const routes = require("./controllers/index");

const sessionSettings = {
  secret: "786878y8",
  cookie: {},
  resave: false,
  saveUnintitalized: true,
};
const PORT = process.env.PORT || 3001;
const app = express();
const hbs = exphbs.create();

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(session(sessionSettings));

app.use(routes);

app.listen(PORT, () => {
  console.log("server is running");
});
