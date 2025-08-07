const pool = require("../config/db");

// getAllEmployees
const getAllEmployees = async () => {
  const result = await pool.query("SELECT * FROM employees ORDER BY id ASC");
  return result.rows;
};

// getEmployeeById
const getEmployeeById = async (id) => {
  const result = await pool.query("SELECT * FROM employees WHERE id = $1", [
    id,
  ]);
  return result.rows[0];
};

// createEmployee
const createEmployee = async ({ name, email, department }) => {
  const result = await pool.query(
    "INSERT INTO employees (name, email, department) VALUES ($1, $2, $3) RETURNING *",
    [name, email, department]
  );
  return result.rows[0];
};

// updateEmployee
const updateEmployee = async (id, { name, email, department }) => {
  const result = await pool.query(
    "UPDATE employees SET name = $1, email = $2, department = $3 WHERE id = $4 RETURNING *",
    [name, email, department, id]
  );
  return result.rows[0];
};

// deleteEmployee
const deleteEmployee = async (id) => {
  const result = await pool.query(
    "DELETE FROM employees WHERE id = $1 RETURNING *",
    [id]
  );
  return result.rows[0];
};

// export
module.exports = {
  getAllEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployee,
  deleteEmployee,
};
