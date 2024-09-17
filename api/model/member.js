const mongoose = require("mongoose");
const { Schema } = mongoose;

const memberSchema = new Schema({
  id: {
    type: String,
    unique: true,
  },
  name: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
});

const Member = mongoose.model("members", memberSchema);

module.exports = { Member };
