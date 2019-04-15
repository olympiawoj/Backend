const express = require("express");

const server = express();

const userRouter = require("../routers/users-router.js");

server.use("/api", userRouter);

server.get("/", (req, res) => {
  res.send("testing the server");
});

module.exports = server;
