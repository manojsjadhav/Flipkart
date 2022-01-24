import express from "express";
import DefaultData from "./default.js";
import bodyParser from "body-parser";
import cors from "cors";

// component

import connection from "./database/db.js";
import router from "./routes/route.js";

const app = express();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/", router);

const PORT = 8000;

connection();

app.listen(PORT, () =>
  console.log(`Server is succesfully runing on port ${PORT}`)
);

//DefaultData data to database

DefaultData();
