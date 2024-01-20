const express = require("express");
const path = require("path");
const port = 4000;
const app = express();
const router = require("./routes/listroutes");
const db = require("./config/db");
const ejsMate = require("ejs-mate");

const session = require("express-session");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(
  session({
    secret: "123456789", // Change this to a random secret key
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 3600000,
    },
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "/public")));
app.engine("ejs", ejsMate);

// app.get('/', (req,res) => {
//     res.render('list');
// })

app.use("/", router);

app.listen(port, function (err) {
  if (err) {
    console.log("error in running the server");
  } else {
    console.log(`server is running on the port ${port}`);
  }
});
