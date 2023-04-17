//jshint esversion:6

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const ejs = require("ejs");

mongoose.connect("mongodb://0.0.0.0:27017/wikiDB", { useNewUrlParser: true });

const articleSchema = new mongoose.Schema({
    title: String,
    content: String
});

const Article = new mongoose.model("Article", articleSchema);

Article.find({})
    .then(docs => {
        docs.forEach(doc => {
            console.log(doc);
        });
    })
