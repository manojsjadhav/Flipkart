import User from "../model/userSchema.js";

export const userSignUp = async (req, res) => {
  try {
    const exist = await User.findOne({ username: req.body.username });
    if (exist) {
      return res.status(401).json("User already exist");
    }
    const user = req.body;
    const newUser = new User(user);
    await newUser.save();

    return res.status(200).json("user is successfully registered");
  } catch (error) {
    console.log("error", error.massege);
  }
};

export const userLoginIn = async (req, res) => {
  try {
    const user = await User.findOne({
      username: req.body.username,
      password: req.body.password,
    });
    if (user) {
      return res.status(200).json(`${req.body.username} login sucessfully`);
    } else {
      return res.status(401).json("Invalid login");
    }
  } catch (error) {
    console.log("Error:", error.massege);
  }
};
