import userModel from "../Models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const createUser = async (req, res) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new userModel({
      ...req.body,
      password: hash,
    });
    await newUser.save();
    res.status(201).send("New User is created");
  } catch (error) {
    res.status(405).send(error);
    console.error("error");
  }
};

export const loginUser = async (req, res) => {
  try {
    const user = await userModel.findOne({ email: req.body.email });
    //siuo atveju naudojam name nes drugModel name yra unique (normaliai pagal userius butu email)
    if (!user) {
      return res.status(405).send("Wrong user or password");
    }

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect) {
      return res.status(405).send("Wrong user or password");
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1 day",
    });
    //setting a cookie to session var token
    return res
      .cookie("session_token", token, { httpOnly: true })
      .status(201)
      .send(`Successfully logged in`);
  } catch (error) {
    console.error("error");
  }
};
