const express = require("express");
const server = express();
server.use(express.json());
//invoking custom logger
server.use(logger);

server.get("/", (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

//custom middleware

function logger(req, res, next) {
  const today = new Date().toISOString();
  console.log(`[${today}] ${req.method} to ${req.url}`);
  next();
}

module.exports = server;
