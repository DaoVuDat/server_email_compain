const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");

// Create Models - Create Schema first. Then we could use mongoose.model("name") to create an instance
require("./models/User");

// To execute the passport.js code
require("./services/passport");

const keys = require("./config/keys");

// CONFIGURATION
mongoose.connect(keys.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const app = express();

app.use(express.json());

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
        keys: [keys.cookieKey]
    })
);


app.use(passport.initialize());
app.use(passport.session());

// add route
require("./routes/authRoutes")(app);
require("./routes/billingRoutes")(app);


// when authRoutes and billdingRoutes could not serve specific routes
// do some route in react-router
if(process.env.NODE_ENV === "production") {
    // Express will serve up production assets
    // like our main.js file, or main.css file!
    app.use(express.static('/client/build'))

    // Express will servce up the index.html file
    // if it doesn't recognize the routes
    const path = require("path");
    app.get("/*", (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

const PORT = process.env.PORT || 5000;

app.listen(PORT);
