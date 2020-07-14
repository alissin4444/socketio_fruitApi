const express = require("express");

const app = express();

const http = require("http").createServer(app);
const io = require("socket.io")(http);

app.get("/", (req, res) => res.send("Fruit API"));

const fruits = [
  "Apple",
  "Banana",
  "Avocado",
  "Blackberries",
  "Carambola",
  "Water Melon",
  "Melon",
  "Cherries",
  "tomato",
  "orange",
];

io.on("connection", (socket) => {
  setInterval(() => {
    io.to(socket.id).emit("@fruitApi/new_fruit", {
      fruit: fruits[Math.floor(Math.random() * 10)],
    });
  }, 1000);
});

http.listen("3333");
