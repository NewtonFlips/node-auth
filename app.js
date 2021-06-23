const express = require("express");
const homeRoutes = require("./routes/home");
const authRoutes = require("./routes/auth");

const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", homeRoutes);
app.use("/auth", authRoutes);

module.exports = app;
