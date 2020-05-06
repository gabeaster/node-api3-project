const express = require("express");
const server = express();
server.use(express.json());
//invoking custom logger
server.use(logger);
//logger is functional, postman returns h2 and I get update in terminal about request with and path
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
