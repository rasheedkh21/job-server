const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const morgan = require("morgan");
const path = require("path");
const cors = require("cors");
var colors = require("colors");

//set color
colors.enable();

//set Dotenv
dotenv.config();

// connected DB

connectDB();

// App instance
const app = express();

//Data File
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

if (process.env.NOD_ENV === "development") {
  app.use(morgan("dev"));
}

app.use("/api/v1/jobs", require("./routes/job.route"));

const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`.bgBlue.bold);
});
