const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();
const bodyParser = require("body-parser"); // add body-parser module

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use(bodyParser.urlencoded({ extended: true })); // use body-parser

router.get("/", (req, res) => {
res.render("home");
});
router.get("/login", (req, res) => {
res.render("login");
});

app.post("/login", (req, res) => {
const { name, password } = req.body;

if (name === "admin" && password === "admin") {
res.render("login_success", {
username: name,
});
} else {
res.render("login_failure");
}
});

router.get("/about", (req, res) => {
res.render("about", { title: "Hey", message: "The file is getting rendered" });
});

app.use("/", router);
app.listen(process.env.PORT || 8000, () => {
console.log("Running at Port 8000");
});