const passport = require("passport");
const express = require("express");

module.exports = (app) => {

    // use strategy "google" => pick GoogleStrategy above
    app.get("/auth/google", passport.authenticate("google", {
            scope: ["profile", "email"]
        })
    );

    app.get("/auth/google/callback", passport.authenticate("google"),
        (req, res, next) => {
            res.redirect("/surveys");
        }
    );

    app.get("/api/logout", (req, res) => {
       req.logout();
       res.redirect("/");
    });

    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });
}
