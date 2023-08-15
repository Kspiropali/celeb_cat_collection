const bcrypt = require("bcrypt");

const User = require("../models/User");
const Token = require("../models/Token");

const getAll = async (req, res) => {
  try {
    return res.send((await User.getAllUsers()).rows);
  } catch (error) {
    return res.status(500).send("Internal Server Error!");
  }
};

const getOne = async (req, res) => {
  try {
    const result = (await User.getById(parseInt(req.params.id))).rows;
    if (result.length === 0) {
      throw new Error("User was not found");
    }
    return res.send(result);
  } catch (error) {
    return res
      .status(404)
      .send("Could not find specified user with specified id!");
  }
};

async function register(req, res) {
  
    const data = req.body;

    // Generate a salt with a specific cost
    const salt = await bcrypt.genSalt(parseInt(process.env.BCRYPT_SALT_ROUNDS));

    // Hash the password
    data["password"] = await bcrypt.hash(data["password"], salt);
    data["isAdmin"] = false;
    const result = await User.create(data);

    return res.status(201).json({result: "Success!"});
 
}

async function login(req, res) {
  const data = req.body;
  
    const user = await User.getOneByUsername(data.username);
    const authenticated = await bcrypt.compare(data.password, user["password"]);

    console.log(authenticated)

    if (!authenticated) {
      throw new Error("Incorrect credentials.");
    } else {
      const token = await Token.create(user.username);
      res.status(200).json({ authenticated: true, token: token.token });
    }
 
}

const deleteOne = async (req, res) => {
  try {
    return res.send((await User.delete(parseInt(req.params.id))).rows);
  } catch (error) {
    return res.status(500).send("Could not add delete user with specified id!");
  }
};

module.exports = { getAll, getOne, register, deleteOne, login };
