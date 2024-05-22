const express = require("express");
const cors = require("cors");
const { router } = require("./routes");
const db = require("./db");

const app = express();

app.use(cors());

// parse requests of content-type - application/json
app.use(express.json({ limit: "1mb" }));

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true, limit: "1mb" }));
app.set("trust proxy", true);
app.disable("etag");

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, OPTION, DELETE"
  );
  next();
});

// DATABASE
db.sequelize
  .sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

// router
app.use(router);

// simple route
app.get("/", (req, res) => {
  res.json({ message: "DEV V2.1" });
});

app.get("/alter", (req, res) => {
  db.sequelize
    .sync({ alter: true })
    .then(() => {
      res.json({ message: "SYNC DONE" });
    })
    .catch((err) => {
      res.json({ message: "SYNC ERROR" });
    });
});

// set port, listen for requests
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port localhost:${PORT}.`);
});
