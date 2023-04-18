//jshint esversion:6

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static("public"));

mongoose.connect("mongodb://0.0.0.0:27017/wikiDB", { useNewUrlParser: true });

const articleSchema = new mongoose.Schema({
    title: String,
    content: String
});

const Article = new mongoose.model("Article", articleSchema);

app.listen(3000, function () {
    console.log("Server started on port 3000");
});

app.route("/articles")

    .get(function (req, res) {
        Article.find({})
            .then(foundArticles => {
                res.send(foundArticles);
            })
            .catch(error => {
                res.send(error);
            });
    })

    .post(function (req, res) {
        console.log(req.body.title);
        console.log(req.body.content);

        const newArticle = new Article({
            title: req.body.title,
            content: req.body.content
        })

        newArticle.save()
            .then(function () {
                res.send("Succesfully added a new article.");
            })
            .catch(error => {
                res.send(error);
            });
    })
    .delete(function (req, res) {
        Article.deleteMany()
            .then(function () {
                res.send("Succesfully deleted all the articles.");
            })
            .catch(error => {
                res.send(error);
            });
    });



