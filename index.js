// Express middlewares are wired up to express using app.use. 
const cookieSession = require("cookie-session"); // Express middleware
const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport"); // Express middleware
const bodyParser = require("body-parser"); // Express middleware used whenever there is a POST/PUT/PATCH request from the frontend or anything else that has a req.body
const keys = require("./config/keys");
require("./models/User");
require("./models/Survey");
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
require("./routes/surveyRoutes")(app);

if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  // like our main.js file, or main.css file!
  app.use(express.static('client/build'));

  // Express will serve up the index.html file
  // if it doesn't recognize the route
  const path = require('path'); // catch all case if request not found in authRoutes, billingRoutes, or some specific file 
  //in 'client/build' 
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, function() {
  console.log("express is working on port " + PORT);
});
