const {
  getAllEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployee,
  deleteEmployee,
} = require("../models/employeeModel");

// get all Employees
exports.getEmployees = async (req, res) => {
  try {
    const employees = await getAllEmployees();
    res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// getEmployee by id

exports.getEmployee = async (req, res) => {
  try {
    const employee = await getEmployeeById(req.params.id);
    res.status(200).json(employee);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// add Employee

exports.addEmployee = async (req, res) => {
  try {
    const employee = await createEmployee(req.body);
    res.status(201).json(employee);
    // res.send("Employee Created Successfully");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// update Employee
exports.editEmployee = async (req, res) => {
  try {
    const employee = await updateEmployee(req.params.id, req.body);
    res.status(200).json(employee);
    // res.send("Employee Updated Successfully");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// delete employee
exports.removeEmployee = async (req, res) => {
  try {
    const employee = await deleteEmployee(req.params.id);
    res.status(200).json(employee);
    // res.send("Employee Deleted Successfully");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
