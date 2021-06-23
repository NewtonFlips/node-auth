const User = require("./../models/userModel");

exports.login = (req, res) => {
  res.render("login");
};

exports.getUser = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      throw Error();
    }

    if (req.body.password === user.password) {
      res.render("secret");
    } else {
      throw Error();
    }
  } catch (error) {
    console.log(error);
  }
};

exports.signup = (req, res) => {
  res.render("signup");
};

exports.createUser = async (req, res) => {
  try {
    console.log("sign post hit");
    const user = await User.create(req.body);

    res.render("secret");
  } catch (err) {
    console.log(error);
  }
};
