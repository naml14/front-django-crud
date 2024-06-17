import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import "./Table.css";

const Table = ({ data, onRowSelect, updateData, row }) => {
  const Iedit = "/assets/Icon_editar.svg";
  const Iedit1 = "/assets/Icon_editar1.svg";
  const Idelete = "/assets/Icon_eliminar.svg";
  const Idelete1 = "/assets/Icon_eliminar1.svg";

  const [selectedRow, setSelectedRow] = useState(null);
  useEffect(() => {
    if (row === null) {
      setSelectedRow(null);
    }
  }, [row]);

  const deleteRow = (id) => {
    setSelectedRow(null);
    axios
      .delete(`https://django-crud-94q6.onrender.com/cars/api/v1/cars/${id}/`)
      .then(() => {
        updateData();
      })
      .catch(() => {
        alert("No se pudo eliminar");
      });
  };
  return (
    <table className="custom-table">
      <thead>
        <tr>
          <th>Marca</th>
          <th>Sucursal</th>
          <th colSpan={3}>Aspirante</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            <td>{row.marca}</td>
            <td>{row.sucursal}</td>
            <td>{row.aspirante}</td>
            <td className="auto-width">
              <button
                disabled={
                  selectedRow === null
                    ? false
                    : selectedRow === row.id
                    ? false
                    : true
                }
                onClick={() => {
                  setSelectedRow(row.id);
                  onRowSelect(row);
                }}
              >
                <img
                  src={
                    selectedRow === null
                      ? Iedit1
                      : selectedRow === row.id
                      ? Iedit1
                      : Iedit
                  }
                  alt="Edit"
                />
              </button>
            </td>
            <td className="auto-width">
              <button
                disabled={
                  selectedRow === null
                    ? false
                    : selectedRow === row.id
                    ? false
                    : true
                }
                onClick={() => deleteRow(row.id)}
              >
                <img
                  src={
                    selectedRow === null
                      ? Idelete1
                      : selectedRow === row.id
                      ? Idelete1
                      : Idelete
                  }
                  alt="Delete"
                />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

Table.propTypes = {
  data: PropTypes.array.isRequired,
  onRowSelect: PropTypes.func.isRequired,
  updateData: PropTypes.func.isRequired,
  row: PropTypes.object,
};

export default Table;
