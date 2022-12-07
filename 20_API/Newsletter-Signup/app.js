/** @format */

//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");
const fs = require("fs");
const { options } = require("request");

const rawkeys = fs.readFileSync("keys.json");
const keys = JSON.parse(rawkeys);

const app = express();
// To use css styles
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.listen( process.env.PORT || 3000, function () {
    console.log("Server is running on port 3000");
});

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", function (req, res) {
    console.log(req.body.firstName);
    console.log(req.body.lastName);
    console.log(req.body.email);

    // Payload
    const data = {
        members: [
            {
                email_address: req.body.email,
                status: "subscribed",
                merge_fields: {
                    FNAME: req.body.firstName,
                    LNAME: req.body.lastName,
                },
            },
        ],
    };

    const jsonData = JSON.stringify(data);

    const url = "https://us21.api.mailchimp.com/3.0/lists/" + keys.audience_id;

    const options = {
        method: "POST",
        auth: "idebonis:" + keys.api_key,
    };

    const request = https.request(url, options, function (response) {
        console.log("*************************************************************************");
        console.log(response.statusCode);
        console.log("*************************************************************************");
        

        if (response.statusCode >= 200 && response.statusCode < 300) {
            res.sendFile(__dirname + "/success.html");
        } else {
            res.sendFile(__dirname + "/failure.html");
        }

        response.on("data", function (data) {
            console.log(JSON.parse(data));
        });
    });

    request.write(jsonData);
    request.end();
    //    curl -X POST \
    //  'https://${dc}.api.mailchimp.com/3.0/lists/{list_id}?skip_merge_validation=<SOME_BOOLEAN_VALUE>&skip_duplicate_check=<SOME_BOOLEAN_VALUE>' \
    //  --user "anystring:${apikey}"' \
    //  -d '{"members":[],"sync_tags":false,"update_existing":false}'
});

app.post("/failure", function (req, res) {
    res.redirect("/");
});
