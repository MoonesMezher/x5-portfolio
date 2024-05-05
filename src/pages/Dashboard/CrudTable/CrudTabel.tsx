import React from "react";
import "./CrudTable.css";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
const CrudTabel = ({ rows ,deleteRow,editRow }) => {
  return (
    <div className="table-wrapper">
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th className="expand">Name</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => {
            return (
              <tr key={idx}>
                <td>{row.id}</td>
                <td className="expand">{row.name}</td>
                <td>
                  <span className={`lable lable-${row.category}`}>
                    {row.category}
                  </span>
                </td>
                <td>
                  <span className="actions">
                    <BsFillTrashFill className="delete-btn" onClick={()=>deleteRow(idx)}/>
                    <BsFillPencilFill  onClick={()=>editRow(idx)}/>
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CrudTabel;
