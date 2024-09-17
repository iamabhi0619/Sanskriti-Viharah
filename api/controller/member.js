const { Member } = require("../model/member.js");
const bcrypt = require("bcrypt");
const { generateToken } = require("../service/jwttoken.js");
const { generatePassword } = require("../service/passwordReset.js");
const { sendEmail } = require("../service/emailpassword.js");

exports.createMember = async (req, res) => {
  try {
    const { id, name, email, password } = req.body;

    // Validate input data
    if (!id || !name || !email || !password) {
      return res
        .status(400)
        .json({ status: "ERROR", message: "Missing required fields" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new member
    const createdMember = new Member({
      id,
      name,
      email,
      password: hashedPassword,
    });
    const savedMember = await createdMember.save();
    res.status(201).json({ status: "OK", user: savedMember });
  } catch (error) {
    console.error("Error creating member:", error);
    res.status(500).json({
      status: "ERROR",
      message: "An error occurred while creating the member",
    });
  }
};

exports.loginMember = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(req.body);
    const memberfound = await Member.findOne({ email });
    if (!memberfound) {
      console.log("User not found");
      return res.json({ status: "error", message: "Invalid Credentials" });
    }
    const ispassword = await bcrypt.compare(password, memberfound.password);
    if (!ispassword) {
      console.log("Incorrect Password");
      return res.json({ status: "error", message: "Invalid Credentials" });
    }
    const token = generateToken(memberfound);
    return res.json({ status: "ok", message: token });
  } catch (error) {
    console.error(error);
    return res.json({ status: "Error", message: "Server Error" });
  }
};

exports.forgetPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const memberfound = await Member.findOne({ email });
    if (!memberfound) {
      return res.json({ status: "error", message: "No user found" });
    }
    const newPassword = generatePassword();
    const hashedNewPassword = await bcrypt.hash(newPassword, 10);

    const updatedData = { password: hashedNewPassword };

    const updatedUser = await Member.findOneAndUpdate(
      { email: email },
      updatedData,
      { new: true }
    );
    if (!updatedUser) {
      return res.json({
        status: "error",
        message: "Not able to change the password",
      });
    }

    sendEmail(updatedUser, newPassword);
    return res.json({
      status: "ok",
      message: "New password has been sent to email",
    });
  } catch (error) {
    console.error(error);
    return res.json({ status: "Error", message: "Server Error" });
  }
};

exports.resetPassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body;
    const id = req.params.id;

    const memberfound = await Member.findOne({ id: id });
    if (!memberfound) {
      return res.json({ status: "error", message: "User not found" });
    }

    const isPasswordCorrect = await bcrypt.compare(
      oldPassword,
      memberfound.password
    );
    if (!isPasswordCorrect) {
      return res.json({ status: "error", message: "Incorrect old password" });
    }

    const hashedNewPassword = await bcrypt.hash(newPassword, 10);
    const updatedData = { password: hashedNewPassword };

    const updatedUser = await Member.findOneAndUpdate({ id: id }, updatedData, {
      new: true,
    });
    return res.json({ status: "ok", message: "Password updated" });
  } catch (error) {
    console.error(error);
    return res.json({ status: "Error", message: "Server error" });
  }
};
