const listData = require("../models/todolist");
const userSchema = require("../models/userSchema");
const bcrypt = require("bcrypt");

exports.allTasks = async (req, res) => {
  const allTasks = await listData.find({});
  res.render("allTasks.ejs", { allTasks });
};

exports.getData = async (req, res) => {
  try {
    const list = await listData.find({}).exec();
    res.render("list", {
      lists: list,
    });
  } catch (error) {
    console.log("Error in fetching the data from the database");
    res.redirect("back");
  }
};

exports.createTask = async (req, res) => {
  try {
    // console.log(req.session.user._id);
    const { title, description, category, date } = req.body;
    const taskAdded = await listData.create({
      title,
      description,
      category,
      date,
    });
    console.log(taskAdded);
    res.redirect("back");
  } catch (error) {
    console.log("Error in adding the task", error);
    res.redirect("back");
  }
};

exports.deleteTask = async (req, res) => {
  try {
    let id = req.query.id;
    const deleted = await listData.findByIdAndDelete(id);
    console.log("Task is Successfully deleted", deleted);
    return res.redirect("back");
  } catch (error) {
    console.log("Error in deleting the task", error);
    return res.redirect("back");
  }
};

exports.signup = async (rq, res) => {
  res.render("signup");
};

exports.signin = async (rq, res) => {
  res.render("signin");
};

exports.createUser = async (req, res) => {
  try {
    const { email, name, password } = req.body;
    const existingEmail = await userSchema.findOne({ email });
    if (existingEmail) {
      return res.send(
        "email id is already exists. please try to login with your credentials"
      );
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const userCreated = await userSchema.create({
      email,
      name,
      password: hashedPassword,
    });
    console.log("User Registered Successfully", userCreated);
    return res.redirect("back");
  } catch (err) {
    console.log("error in creating a new user", err);
    return res.redirect("back");
  }
};

exports.verifyLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email, password);
    const existingEmail = await userSchema.findOne({ email });
    if (existingEmail) {
      const passwordMatch = await bcrypt.compare(
        password,
        existingEmail.password
      );
      if (passwordMatch) {
        req.session.user = existingEmail;
        res.send("Login successful");
        // return res.redirect('back');
      } else {
        return res.send("Please enter valid credentials");
      }
    } else {
      res.send("Please register before trying to login");
      // return res.redirect('back');
    }
  } catch (err) {
    console.log("error", err);
    res.redirect("back");
  }
};
