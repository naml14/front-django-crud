import { useState, useEffect } from "react";
import axios from "axios";
import Table from "../../components/table/Table";
import Card from "../../components/card/Card";
import "./DataPage.css";

const DataPage = () => {
  const [data, setData] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://django-crud-94q6.onrender.com/cars/api/v1/cars/"
      );
      setData(response.data);
    } catch (error) {
      alert("Error al obtener información");
    }
  };

  const handleRowSelect = (row) => {
    setSelectedRow(row);
  };

  const handleCardSave = (updatedRow) => {
    const updatedData = data.map((item) =>
      item.id === updatedRow.id ? updatedRow : item
    );
    axios
      .put(`http://localhost:8000/cars/api/v1/cars/${updatedRow.id}/`, {
        marca: updatedRow.marca,
        sucursal: updatedRow.sucursal,
        aspirante: updatedRow.aspirante,
      })
      .then(() => {
        setData(updatedData);
      })
      .catch(() => {
        alert("No se pudo actualizar");
      });
    setSelectedRow(null);
  };

  const handleCardCancel = () => {
    setSelectedRow(null);
  };

  return (
    <>
      <div className="app-container">
        <Card
          row={selectedRow}
          onSave={handleCardSave}
          onCancel={handleCardCancel}
          updateData={fetchData}
        />
        <Table
          data={data}
          onRowSelect={handleRowSelect}
          updateData={fetchData}
          row={selectedRow}
        />
      </div>
      <footer className="footer">
        <img
          src="/assets/Imagologotipo_motion.svg"
          alt="logo"
          className="logo-placeholder"
        />
      </footer>
    </>
  );
};

export default DataPage;
