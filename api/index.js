const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3001;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
  
});

app.post("/data", (req, res) => {
  res.send(`Received data: ${JSON.stringify(req.body)}`);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
