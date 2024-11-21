const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const followUpData = require("./data/follow-up.json")["follow-up"];
const resalesData = require("./data/resales.json").resales;

app.get("/resales", (req, res) => {
  res.send(resalesData);
});

app.get("/follow-up", (req, res) => {
  const id = req.query.id;
  const result = followUpData.filter((followUpItem) => followUpItem.id === id);
  res.send(result);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
