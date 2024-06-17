import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import "./Card.css";

const Card = ({ row, onSave, onCancel, updateData }) => {
  const Icar = "/assets/Icon_vehiculo.svg";
  const Icar1 = "/assets/Icon_vehiculo1.svg";
  const Iubi = "/assets/Icon_puntoubicacion.svg";
  const Iubi1 = "/assets/Icon_puntoubicacion1.svg";
  const Ipersona = "/assets/Icon_persona.svg";
  const Ipersona1 = "/assets/Icon_persona1.svg";
  const [marca, setMarca] = useState("");
  const [sucursal, setSucursal] = useState("");
  const [aspirante, setAspirante] = useState("");
  const [add, setAdd] = useState(false);
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    if (row) {
      setMarca(row.marca);
      setSucursal(row.sucursal);
      setAspirante(row.aspirante);
      setEdit(true);
      if (add) {
        setAdd(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [row]);

  const handleSave = () => {
    setMarca("");
    setSucursal("");
    setAspirante("");
    setEdit(false);
    onSave({ id: row.id, marca, sucursal, aspirante });
  };

  const handleCancel = () => {
    setMarca("");
    setSucursal("");
    setAspirante("");
    setEdit(false);
    onCancel();
  };

  const crear = () => {
    if (edit) {
      setMarca("");
      setSucursal("");
      setAspirante("");
      setEdit(false);
      onCancel();
    }
    setAdd(true);
  };
  const addData = () => {
    axios
      .post("https://django-crud-94q6.onrender.com/cars/api/v1/cars/", {
        marca,
        sucursal,
        aspirante,
      })
      .then(() => {
        setMarca("");
        setSucursal("");
        setAspirante("");
        setAdd(false);
        updateData();
      })
      .catch(() => {
        alert("No se pudo agregar");
        setMarca("");
        setSucursal("");
        setAspirante("");
        setAdd(false);
      });
  };

  return (
    <div className="card">
      <div className="card-header">
        <button className="button-card-add" onClick={crear}>
          <img
            src="/assets/Icon_crear.svg"
            alt="Logo"
            className="card-add-icon"
          />
        </button>
      </div>
      <div className="card-row">
        <label>
          <img
            src={add ? Icar1 : edit ? Icar1 : Icar}
            alt="Marca"
            className="img-center-card"
          />
        </label>
        <input
          disabled={!add && !edit}
          value={marca}
          placeholder="marca"
          onChange={(e) => setMarca(e.target.value)}
        />
      </div>
      <div className="card-row">
        <label>
          <img
            src={add ? Iubi1 : edit ? Iubi1 : Iubi}
            alt="Sucursal"
            className="img-center-card"
          />
        </label>
        <input
          disabled={!add && !edit}
          value={sucursal}
          placeholder="Sucursal"
          onChange={(e) => setSucursal(e.target.value)}
        />
      </div>
      <div className="card-row">
        <label>
          <img
            src={add ? Ipersona1 : edit ? Ipersona1 : Ipersona}
            alt="Aspirante"
            className="img-center-card"
          />
        </label>
        <input
          disabled={!add && !edit}
          value={aspirante}
          placeholder="Aspirante"
          onChange={(e) => setAspirante(e.target.value)}
        />
      </div>
      {add ? (
        <div className="card-actions">
          <button
            className="button-cancel"
            onClick={() => {
              setMarca("");
              setSucursal("");
              setAspirante("");
              setAdd(false);
            }}
          >
            Cancelar
          </button>
          <button onClick={addData} className="button-add">
            Crear
          </button>
        </div>
      ) : null}
      {edit ? (
        <div className="card-actions">
          <button className="button-icon-edit-cancel" onClick={handleCancel}>
            <img
              src="/assets/Icon_cancelar.svg"
              alt="Sucursal"
              className="img-center-card"
            />
          </button>
          <button onClick={handleSave} className="button-icon-edit-ok">
            <img
              src="/assets/Icon_confirmar.svg"
              alt="Sucursal"
              className="img-center-card"
            />
          </button>
        </div>
      ) : null}
    </div>
  );
};

Card.propTypes = {
  row: PropTypes.shape({
    id: PropTypes.number,
    marca: PropTypes.string,
    sucursal: PropTypes.string,
    aspirante: PropTypes.string,
  }),
  onSave: PropTypes.func,
  onCancel: PropTypes.func,
  updateData: PropTypes.func,
};

export default Card;
