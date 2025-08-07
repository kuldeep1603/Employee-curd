const express = require("express");
const router = express.Router();
const {
  getEmployees,
  getEmployee,
  addEmployee,
  editEmployee,
  removeEmployee,
} = require("../controllers/employeeController");
const validateEmployee = require("../validators/employeeValidator");

// routes get post put delete
router.get("/", getEmployees);
router.get("/:id", getEmployee);
router.post("/", validateEmployee, addEmployee);
router.put("/:id", validateEmployee, editEmployee);
router.delete("/:id", removeEmployee);

module.exports = router;
