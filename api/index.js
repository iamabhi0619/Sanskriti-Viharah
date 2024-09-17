const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const memberRouts = require("./routes/member")
const dotenv = require("dotenv");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

async function main() {
  await mongoose.connect(
    process.env.MONGODB_URI
  );
  console.log("Database connected...!");
}
main().catch((err) => {
  console.log(err);
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/memberapi", memberRouts.routes)

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
