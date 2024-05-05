import { useState } from "react";
import CrudTabel from "./CrudTable/CrudTabel";
import Modal from "./CrudTable/Modal";
import "./Dashboard.css";

const Dashboard = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [rows, setRows] = useState([
    { id: "id 1", name: "this is the first id", category: "test" },
    { id: "id 2", name: "this is the second id", category: "test" },
    { id: "id 3", name: "this is the third id", category: "test" },
  ]);
  const [rowToEdit, setRowToEdit] = useState(null);
  const handleDeleteRow = (targetIndex) => {
    setRows(rows.filter((_, idx) => idx !== targetIndex));
  };
  const handleSubmit = (newRow) => {
    rowToEdit === null
      ? setRows([...rows, newRow])
      : setRows(
          rows.map((curRow, idx) => {
            if (idx !== rowToEdit) return curRow;

            return newRow;
          })
        );
  };
  const handleEditRow = (idx) => {
    setRowToEdit(idx);
    setModalOpen(true);
  };
  return (
    <section className="dashboard page">
      <CrudTabel
        rows={rows}
        deleteRow={handleDeleteRow}
        editRow={handleEditRow}
      />
      <button className="btn" onClick={() => setModalOpen(true)}>
        Add
      </button>
      {modalOpen && (
        <Modal
          closeModal={() => {
            setModalOpen(false);
            setRowToEdit(null);
          }}
          onSubmit={handleSubmit}
          defaultValue={rowToEdit !== null && rows[rowToEdit]}
        />
      )}
    </section>
  );
};

export default Dashboard;
