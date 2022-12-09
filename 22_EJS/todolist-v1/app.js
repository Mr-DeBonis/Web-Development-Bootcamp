/** @format */

//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const items = [];
const workItems = [];

app.listen(3000, function () {
    console.log("Server started on port 3000.");
});

app.get("/", function (req, res) {
    const day = date.getDate();

    res.render("list", { listTitle: day, nextItems: items });
});

app.post("/", function (req, res) {
    if (req.body.list == "Work") {
        workItems.push(req.body.nextItem);
        res.redirect("/work");
    } else {
        items.push(req.body.nextItem);
        res.redirect("/");
    }
});

app.get("/work", function (req, res) {
    const header = "Work List";

    res.render = res.render("list", {
        listTitle: header,
        nextItems: workItems,
    });
});


app.get("/about", function (req, res) {
    res.render("about");
});
