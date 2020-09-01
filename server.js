'use strict'

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();

var db = require('./app/models');
const { role } = require('./app/models');
var Role = db.role;

// Cors

var corsOption = {
    origin: "http://localhost:3801"
};

app.use(cors(corsOption));

// Parse request 'Content-Type' - 'application/json'

app.use(bodyParser.json());

// Parse request 'Content-Type' . 'application/x-www-form-urlencoded'

app.use(bodyParser.urlencoded({ extended: true }));

// Simple route

app.get('/', (req, res) => {
    res.json({
        message: "Application running"
    });
});

// Routes

require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);

// Set PORT and listen request

var PORT = process.env.PORT || 3800;
app.listen(PORT, () => {
    console.log(`Server running in port ${PORT}.`);
});

// Sync

/**
 * In Prod
 * db.sequelize.sync();
 */

 // Dev

 db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and Resync DB");
    initial();
 });

 function initial() {
    Role.create({
        id: 1,
        name: "user"
    });

    Role.create({
        id: 2,
        name: "moderator"
    });

    Role.create({
        id: 3,
        name: "admin"
    });
 }
