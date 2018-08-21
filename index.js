// Express middlewares are wired up to express using app.use
const cookieSession = require("cookie-session"); // Express middleware
const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport"); // Express middleware
const bodyParser = require("body-parser"); // Express middleware
const keys = require("./config/keys");
require("./models/User");
require("./services/passport"); /*condensed because we don't need to assign anything from passport.js, 
we just need to make sure it runs */

mongoose.connect(
  keys.mongoURI,
  { useNewUrlParser: true }
);

const app = express();

app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
    secure: false
  })
);
app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);
require("./routes/billingRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, function() {
  console.log("express is working on port " + PORT);
});
