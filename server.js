<<<<<<< HEAD
// Require Dependencies
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors"); // cross origin resource sharing
const Chatkit = require("@pusher/chatkit-server"); // chatkit server SDK

// Init app
const app = express();

// Chatkit Server SDK.
const chatkit = new Chatkit.default({
    instanceLocator: 'v1:us1:8f3e62b9-afbc-48dc-b54f-84574a809062',
    key: '665080cd-601d-4f75-9538-e51268bd8950:3lQD1uX0uG29JB86XdvNmrMi3pu4hySYq8+jPIuWtlA='
});

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Create users route
app.post("/users", (req, res) => {
    const { username } = req.body;
    chatkit
        .createUser({
        id: username,
        name: username
        })
        .then(() => {
        console.log(`User created: ${username}`);
        res.sendStatus(201);
        })
        .catch(err => {
        if (err.error === "services/chatkit/user_already_exists") {
            console.log(`User already exists: ${username}`);
            res.sendStatus(200);
        } else {
            res.status(err.status).json(err);
        }
    });
});

// Create an authenticate endpoint
app.post("/authenticate", (req, res) => {
    const authData = chatkit.authenticate({ userId: req.query.user_id });
    res.status(authData.status).send(authData.body);
});

// Listen on port
const port = 3000;
app.listen(port, err => {
    if (err) {
        console.log(err);
    } else {
        console.log(`Running on port ${port}...`);
    }
=======
// Require Dependencies
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors"); // cross origin resource sharing
const Chatkit = require("@pusher/chatkit-server"); // chatkit server SDK

// Init app
const app = express();

// Chatkit Server SDK
const chatkit = new Chatkit.default({
    instanceLocator: "Your instance locator",
    key: "Your key"
});

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Create users route
app.post("/users", (req, res) => {
    const { username } = req.body;
    chatkit
        .createUser({
        id: username,
        name: username
        })
        .then(() => {
        console.log(`User created: ${username}`);
        res.sendStatus(201);
        })
        .catch(err => {
        if (err.error === "services/chatkit/user_already_exists") {
            console.log(`User already exists: ${username}`);
            res.sendStatus(200);
        } else {
            res.status(err.status).json(err);
        }
    });
});

// Create an authenticate endpoint
app.post("/authenticate", (req, res) => {
    const authData = chatkit.authenticate({ userId: req.query.user_id });
    res.status(authData.status).send(authData.body);
});

// Listen on port
const port = 3000;
app.listen(port, err => {
    if (err) {
        console.log(err);
    } else {
        console.log(`Running on port ${port}...`);
    }
>>>>>>> 343941a61043742ef80c758172bb4368d609c9fa
});