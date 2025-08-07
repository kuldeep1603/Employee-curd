import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchEmployees,
  addEmployee,
  deleteEmployee,
  updateEmployee,
} from "../redux/slice/employeeSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaTrash, FaEdit } from "react-icons/fa";
import Modal from "../components/Modal";
import Input from "../components/Input";
import Button from "../components/Button";

const EmployeeList = () => {
  const dispatch = useDispatch();
  const { employees, loading, error } = useSelector(
    (state) => state.employees
  );

  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", department: "" });
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.department) {
      toast.warning("Please fill in all fields");
      return;
    }

    if (editMode) {
      dispatch(updateEmployee(form))
        .unwrap()
        .then(() => {
          toast.success("Employee updated successfully");
          setForm({ name: "", email: "", department: "" });
          setEditMode(false);
          setShowModal(false);
        });
    } else {
      dispatch(addEmployee(form))
        .unwrap()
        .then(() => {
          toast.success("Employee added successfully");
          setForm({ name: "", email: "", department: "" });
          setShowModal(false);
        });
    }
  };

  const handleEdit = (emp) => {
    setForm(emp);
    setEditMode(true);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      dispatch(deleteEmployee(id))
        .unwrap()
        .then(() => toast.success("Employee deleted"));
    }
  };

  return (
    <div className="Container">
      <div className="grid grid-cols-1">
        <div className="flex justify-between flex-wrap items-center">
          <h1 className="text-2xl font-bold mb-4">Employee Management</h1>
          <Button
            text="Add Employee"
            className="bg-blue-600 text-white mb-4 px-4 py-2 rounded"
            onClick={() => {
              setEditMode(false);
              setForm({ name: "", email: "", department: "" });
              setShowModal(true);
            }}
          />
        </div>

        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}

        <div className="py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Department
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {employees.map((emp) => (
                  <tr key={emp.id}>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      {emp.name}
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      {emp.email}
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      {emp.department}
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm flex gap-2">
                      <button onClick={() => handleEdit(emp)} className="text-yellow-600">
                        <FaEdit />
                      </button>
                      <button onClick={() => handleDelete(emp.id)} className="text-red-600">
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <form onSubmit={handleSubmit} className="p-4">
              <Input
                label="Name"
                type="text"
                name="name"
                value={form.name}
                placeholder="Enter name"
                onChange={handleChange}
              />
              <Input
                label="Email"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter email"
              />
              <Input
                label="Department"
                type="text"
                name="department"
                value={form.department}
                onChange={handleChange}
                placeholder="Enter department"
              />
              <div className="flex justify-end mt-4">
                <Button
                  text={editMode ? "Update" : "Create"}
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded"
                />
              </div>
            </form>
          </Modal>
        )}
      </div>
    </div>
  );
};

export default EmployeeList;