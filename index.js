const express = require("express");

const app = express();

const fruits = [
  "Apple",
  "Banana",
  "Avocado",
  "Blackberries",
  "Carambola",
  "Water Melon",
  "Melon",
  "Cherries",
];

app.get("/", (req, res) => res.send("Fruit API"));

app.listen("3333");
