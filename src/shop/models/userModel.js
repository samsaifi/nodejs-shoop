
const { model } = require("mongoose");
const userSchema = require("../schema/userSchema");

const userModel = model("Users", userSchema);


module.exports = userModel