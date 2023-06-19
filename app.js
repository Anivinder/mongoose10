const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

const errorController = require("./controllers/error");

const User = require("./models/user");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  User.findById("647b3eb099c4dda9c856ab0c")
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => console.log(err));
});

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

mongoose
  .connect(
    "mongodb+srv://anivinderreddy16:o6znLL5SDJBFtpFb@cluster0.zskjvtf.mongodb.net/shop2?retryWrites=true&w=majority"
  )
  .then((result) => {
    console.log('hello')
    User.findOne().then((user) => {
      if (!user) {
        const user = new User({
          name: "Anivi",
          email: "anivi@email.com",
          cart: {
            items: [],
          },
        });
        user.save();
      }
    });
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
