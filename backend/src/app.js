const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("node:path");

const app = express();
app.use(express.json());
app.use(cookieParser());

const cors = require("cors");
app.use(
  cors({
    origin: process.env.FRONTEND_URL ?? "http://localhost:3000",
    optionsSuccessStatus: 200,
  })
);

const router = require("./router");

app.use(router);

app.use(express.static(path.join(__dirname, "../public")));

module.exports = app;
