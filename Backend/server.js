const express = require("express");
const cors = require("cors");
const databaseConnection = require("./config/dbConnection");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const port = process.env.PORT || 8090;

app.use(express.json());
app.use(
  cors({
    origin: ["https://nasa-api-af-assignment-2-frontend.vercel.app"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
  })
);
// Add this middleware to set the Access-Control-Allow-Origin header
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://nasa-api-af-assignment-2-frontend.vercel.app");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.header("Access-Control-Allow-Credentials", "true"); // make sure to include this line
  next();
});
app.use("/api/users", require("./routes/userRoutes"));

app.use("/", (req, res) => {
  res.send("Hello");
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  databaseConnection();
});

module.exports = app;
