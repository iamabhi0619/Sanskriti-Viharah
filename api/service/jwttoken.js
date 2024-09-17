const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const generateToken = (data) => {
  const paylode = {
    id: data.id,
    name: data.email,
    email: data.email,
    role: data.role,
  };
  return jwt.sign(paylode, "1234567", { expiresIn: "24hrs" });
};
module.exports = { generateToken };
