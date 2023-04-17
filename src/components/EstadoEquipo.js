import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import {
  crearEstadoEquipo,
  editarEstado,
  getEstadoEquipos,
} from "../Services/serviceestadoEquipo";
import ModalEstado from "./ui/ModalEstado";
import ModalEditEstado from "./ui/ModalEditEstado";

export default function EstadoEquipo() {
  const [estadoEquipo, setEstadoEquipo] = useState([]);
  const [query, setQuery] = useState(true);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [estado, setEstado] = useState({
    nombre: "",
  });

  const [loadinSave, setLoadingSave] = useState(false);

  const [id, setId] = useState("");

  const listEstadoEquipos = async () => {
    try {
      setLoading(true);
      setError(false);
      const { data } = await getEstadoEquipos(query);
      console.log(data);
      setTimeout(() => {
        setLoading(false);
      }, 500);
      setEstadoEquipo(data);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(true);
    }
  };
  useEffect(() => {
    listEstadoEquipos();
  }, [query]);

  const changeSwitch = () => {
    setQuery(!query);
  };
  const handleChange = (e) => {
    setEstado({
      ...estado,
      [e.target.name]: e.target.value,
    });
  };

  const saveEstadoEquipo = async () => {
    try {
      setLoadingSave(true);
      setError(false);
      const { respues } = await crearEstadoEquipo(estado);
      console.log(respues);
      setEstado({ nombre: "" });
      listEstadoEquipos();
      setTimeout(() => {
        setLoadingSave(false);
      }, 500);
    } catch (error) {
      console.log(error);
      setLoadingSave(false);
      setError(true);
    }
  };

  const closeModal = () => {
    setEstado({ nombre: "" });
    if (id) setId("");
  };

  const selectEstados = (evt) => {
    evt.preventDefault();
    setId(evt.target.id);
    const tEq = estadoEquipo.filter((estado) => estado._id === evt.target.id);
    setEstado({ ...tEq[0] });
  };

  const editEstado = async () => {
    try {
      setError(false);
      setLoadingSave(true);
      const response = await editarEstado(id, estado);
      console.log(response);
      setEstadoEquipo({ nombre: "" });
      listEstadoEquipos();
      setTimeout(() => {
        setLoadingSave(false);
      }, 500);
    } catch (e) {
      console.log(e);
      setError(true);
      setLoadingSave(false);
    }
  };

  return (
    <>
      <h1>Estados</h1>

      <ModalEditEstado
        closeModal={closeModal}
        handleChange={handleChange}
        estado={estado}
        loadingSave={loadinSave}
        editEstado={editEstado}
      />
      <ModalEstado
        closeModal={closeModal}
        handleChange={handleChange}
        estado={estado}
        loadinSave={loadinSave}
        saveEstadoEquipo={saveEstadoEquipo}
      />

      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckChecked"
          checked={query}
          onClick={changeSwitch}
        />
        <label className="form-check-label" for="flexSwitchCheckChecked">
          Activos
        </label>
      </div>
      <button
        type="button"
        className="btn btn-outline-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        data-bs-whatever="@mdo"
      >
        Agregar
      </button>
      {error && (
        <div className="alert alert-danger" role="alert">
          Ha ocurrido un error
        </div>
      )}

      <div className="table-responsive">
        {loading ? (
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading</span>
          </div>
        ) : (
          <table className="table table-dark table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">Estado</th>
                <th scope="col">Fecha creacion</th>
                <th scope="col">Fecha Actualizacion</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {estadoEquipo.map((estEquipo, index) => {
                return (
                  <tr key={estadoEquipo._id}>
                    <th scope="row">{index + 1}</th>
                    <td>{estEquipo.nombre}</td>
                    <td>{estEquipo.estado ? "Activo" : "Inactivo"}</td>
                    <td>
                      {dayjs(estEquipo.fechaCreacion).format("DD/MM/YYYY")}
                    </td>
                    <td>
                      {dayjs(estEquipo.fechaActualizacion).format("DD/MM/YYYY")}
                    </td>
                    <td>
                      <button
                        onClick={selectEstados}
                        type="button"
                        className="btn btn-success"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModalEdit"
                        id={estado.id}
                      >
                        Editar
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}
