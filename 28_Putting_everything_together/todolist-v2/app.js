/** @format */

//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connect("mongodb://0.0.0.0:27017/todolistDB", { useNewUrlParser: true });

// Create an Item schema
const itemsSchema = new mongoose.Schema({
    name: String
});

// Create an item model
const Item = mongoose.model("Item", itemsSchema);

// 3 default items
const item1 = new Item({
    name: "Welcome to your todolist!"
});

const item2 = new Item({
    name: "Hit the + button to add a new item."
});

const item3 = new Item({
    name: "<-- Hit this to delete an item."
});

const defaultItems = [item1, item2, item3];

const listSchema = {
    name: String,
    items: [itemsSchema]
};

const List = mongoose.model("List", listSchema);

app.listen(3000, function () {
    console.log("Server started on port 3000.");
});

app.get("/", function (req, res) {
    Item.find({})
        .then(function (foundItems) {
            if (foundItems == 0) {
                Item.insertMany(defaultItems)
                    .then(function () {
                        console.log("Succesfully saved default items to DB.");
                    })
                    .catch(function (error, docs) {
                        console.log(error);
                    });

                res.redirect("/");
            } else {
                res.render("list", { listTitle: "Today", nextItems: foundItems });
            }
        });
});

app.get("/:customListName", function (req, res) {
    const customListName = req.params.customListName;

    List.findOne({ name: customListName })
        .then(function (foundLists) {
            if (!foundLists) {
                const list = new List({
                    name: customListName,
                    items: defaultItems
                });

                list.save();

                res.redirect("/" + customListName);
            } else {
                res.render("list", { listTitle: foundLists.name, nextItems: foundLists.items });
            }
        });

});

app.post("/", function (req, res) {
    const itemName = req.body.nextItem;
    const listName = req.body.list;


    console.log(listName);
    console.log(itemName);

    const item = new Item({
        name: itemName
    });

    if (listName === "Today") {
        item.save();
        res.redirect("/");
        console.log("Today");
    } else {
        List.findOne({ name: listName })
            .then(function (foundList) {
                foundList.items.push(item);

                foundList.save();

                res.redirect("/" + listName);
            });
    };
});

app.post("/delete", function (req, res) {
    const checkedItemId = req.body.checkbox;

    Item.findByIdAndRemove(checkedItemId)
        .then(function () {
            console.log("Succesfully deleted checked item");
            res.redirect("/");
        })
        .catch(function (err, items) {
            console.log(err);
        });

});



app.get("/about", function (req, res) {
    res.render("about");
});
