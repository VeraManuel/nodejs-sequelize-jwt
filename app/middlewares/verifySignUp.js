'use strict'

var db = require('../models');
var ROLES = db.ROLES;
var User = db.user;

function checkDuplicateUsernameOrEmail(req, res, next) {
    // Username

    User.findOne({
        where: {
            username: req.body.username
        }
    }).then(user => {
        if (user) {
            res.status(400).send({
                message: "The username is already in use!"
            });
            return;
        }

        // Email

        User.findOne({
            where: {
                email: req.body.email
            }
        }).then(email => {
            if (email) {
                res.status(400).send({
                    message: "The email is already in use!"
                });
                return;
            }

            next();
        });
    });
};

function checkRolesExisted(req, res, next) {
    if (req.body.roles) {
        for(let i = 0; i < req.body.roles.length; i++) {
            if (!ROLES.includes(req.body.roles[i])) {
                res.status(400).send({
                    message: "Failed! Roles does not exist = "+ req.body.roles[i]
                });
                return;
            }
        }
    }
    next();
};

var verifySignUp = {
    checkDuplicateUsernameOrEmail : checkDuplicateUsernameOrEmail,
    checkRolesExisted: checkRolesExisted
};

module.exports = verifySignUp;