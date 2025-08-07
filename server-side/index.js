const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const employeeRoutes = require("./routes/employeeRoutes");

dotenv.config();

const app = express();
// port number
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Employee Management API is running");
});

app.use("/api/employees", employeeRoutes);

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
