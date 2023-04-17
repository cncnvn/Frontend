import React from 'react'
import dayjs from "dayjs";
export default function ModalEditUsuario({
    closeModal,
    handleChange,
    inventario,
    loadingSave,
    editInventario,
  
}) {
  return (
    <div className="modal fade" id="exampleModalEdit" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <button 
            type="button" 
            className="btn-close" 
            data-bs-dismiss="modal" 
            aria-label="Close"
            onClick={closeModal}
          >
          </button>
        </div>
        <div className="modal-body">
          <form>
            <div className="mb-3">
              <label htmlFor="recipient-name" 
              className="col-form-label">
                Serial:
              </label>
              <input 
                type="text" 
                className="form-control" 
                id="recipient-name"
                name="Serial"
                onChange={handleChange}
                value={inventario.serial}
                
              />
            </div>
            <div className="mb-3">
              <label htmlFor="recipient-name" 
              className="col-form-label">
                Modelo:
              </label>
              <input 
                type="text" 
                className="form-control" 
                id="recipient-name"
                name="Modelo"
                onChange={handleChange}
                value={inventario.Modelo}
                
              />
            </div><div className="mb-3">
              <label htmlFor="recipient-name" 
              className="col-form-label">
                Descripcion:
              </label>
              <input 
                type="text" 
                className="form-control" 
                id="recipient-name"
                name="Descripcion"
                onChange={handleChange}
                value={inventario.Descripcion}
                
              />
            </div><div className="mb-3">
              <label htmlFor="recipient-name" 
              className="col-form-label">
                FotoEquipo:
              </label>
              <input 
                type="text" 
                className="form-control" 
                id="recipient-name"
                name="FotoEquipo"
                onChange={handleChange}
                value={inventario.FotoEquipo}
                
              />
            </div><div className="mb-3">
              <label htmlFor="recipient-name" 
              className="col-form-label">
                Color:
              </label>
              <input 
                type="text" 
                className="form-control" 
                id="recipient-name"
                name="Color"
                onChange={handleChange}
                value={inventario.color}
                
              />
            </div><div className="mb-3">
              <label htmlFor="recipient-name" 
              className="col-form-label">
                FechaCompra:
              </label>
              <input 
                type="Date" 
                className="form-control" 
                id="recipient-name"
                name="FechaCompra"
                onChange={handleChange}
                value={inventario.FechaCompra}
                
              />
            </div><div className="mb-3">
              <label htmlFor="recipient-name" 
              className="col-form-label">
                precio:
              </label>
              <input 
                type="text" 
                className="form-control" 
                id="recipient-name"
                name="precio"
                onChange={handleChange}
                value={inventario.precio}
                
              />
            </div><div className="mb-3">
              <label htmlFor="recipient-name" 
              className="col-form-label">
                Usuario:
              </label>
              <input 
                type="text" 
                className="form-control" 
                id="recipient-name"
                name="Usuario"
                onChange={handleChange}
                value={inventario.usuario}
                
              />
            </div><div className="mb-3">
              <label htmlFor="recipient-name" 
              className="col-form-label">
                Marca:
              </label>
              <input 
                type="text" 
                className="form-control" 
                id="recipient-name"
                name="Marca"
                onChange={handleChange}
                value={inventario.marca}
                
              />
            </div><div className="mb-3">
              <label htmlFor="recipient-name" 
              className="col-form-label">
                Estado:
              </label>
              <input 
                type="text" 
                className="form-control" 
                id="recipient-name"
                name="Estado"
                onChange={handleChange}
                value={inventario.estado}
                
              />
            </div>

            <div className="mb-3">
              <label htmlFor="recipient-name" 
              className="col-form-label">
                TipoEquipo:
              </label>
              <input 
                type="text" 
                className="form-control" 
                id="recipient-name"
                name="TipoEquipo"
                onChange={handleChange}
                value={inventario.tipoEquipo}
                
              />
            </div>
            
            
            

            <div className="mb-3">
              <label htmlFor="status" 
              className="col-form-label">
                Estado:
              </label>
              <select 
                    className="form-control" 
                    id="status"
                    name="estado"
                    onChange={handleChange}
                    value={inventario.estado}
                >
                <option value={false}>Inactivo</option>
                <option value={true}>Activo</option>
              </select>
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <button 
            type="button" 
            className="btn btn-secondary" 
            data-bs-dismiss="modal"
            onClick={closeModal}
          >
            Cerrar
          </button>
          {
            loadingSave 
            ? 
            (
            <button 
              className="btn btn-primary" 
              type="button" disabled
            >
              <span 
                className="spinner-grow spinner-grow-sm" 
                role="status" 
                aria-hidden="true"
              >
              </span>
                Guardando...
            </button>
            ) : 
            (
            <button 
              type="button" 
              className="btn btn-primary"
              onClick={editInventario}
              disabled={inventario.serial}
            >
            Enviar
            </button>
            )
          }
        </div>
        <div className="modal-footer">
          <button 
            type="button" 
            className="btn btn-secondary" 
            data-bs-dismiss="modal"
            onClick={closeModal}
          >
            Cerrar
          </button>
          {
            loadingSave 
            ? 
            (
            <button 
              className="btn btn-primary" 
              type="button" disabled
            >
              <span 
                className="spinner-grow spinner-grow-sm" 
                role="status" 
                aria-hidden="true"
              >
              </span>
                Guardando...
            </button>
            ) : 
            (
            <button 
              type="button" 
              className="btn btn-primary"
              onClick={editInventario}
              disabled={inventario.Modelo}
            >
            Enviar
            </button>
            )
          }
        </div>
        <div className="modal-footer">
          <button 
            type="button" 
            className="btn btn-secondary" 
            data-bs-dismiss="modal"
            onClick={closeModal}
          >
            Cerrar
          </button>
          {
            loadingSave 
            ? 
            (
            <button 
              className="btn btn-primary" 
              type="button" disabled
            >
              <span 
                className="spinner-grow spinner-grow-sm" 
                role="status" 
                aria-hidden="true"
              >
              </span>
                Guardando...
            </button>
            ) : 
            (
            <button 
              type="button" 
              className="btn btn-primary"
              onClick={editInventario}
              disabled={inventario.Descripcion}
            >
            Enviar
            </button>
            )
          }
        </div>
        <div className="modal-footer">
          <button 
            type="button" 
            className="btn btn-secondary" 
            data-bs-dismiss="modal"
            onClick={closeModal}
          >
            Cerrar
          </button>
          {
            loadingSave 
            ? 
            (
            <button 
              className="btn btn-primary" 
              type="button" disabled
            >
              <span 
                className="spinner-grow spinner-grow-sm" 
                role="status" 
                aria-hidden="true"
              >
              </span>
                Guardando...
            </button>
            ) : 
            (
            <button 
              type="button" 
              className="btn btn-primary"
              onClick={editInventario}
              disabled={inventario.FotoEquipo}
            >
            Enviar
            </button>
            )
          }
        </div>
        <div className="modal-footer">
          <button 
            type="button" 
            className="btn btn-secondary" 
            data-bs-dismiss="modal"
            onClick={closeModal}
          >
            Cerrar
          </button>
          {
            loadingSave 
            ? 
            (
            <button 
              className="btn btn-primary" 
              type="button" disabled
            >
              <span 
                className="spinner-grow spinner-grow-sm" 
                role="status" 
                aria-hidden="true"
              >
              </span>
                Guardando...
            </button>
            ) : 
            (
            <button 
              type="button" 
              className="btn btn-primary"
              onClick={editInventario}
              disabled={inventario.color}
            >
            Enviar
            </button>
            )
          }
        </div>
        <div className="modal-footer">
          <button 
            type="button" 
            className="btn btn-secondary" 
            data-bs-dismiss="modal"
            onClick={closeModal}
          >
            Cerrar
          </button>
          {
            loadingSave 
            ? 
            (
            <button 
              className="btn btn-primary" 
              type="button" disabled
            >
              <span 
                className="spinner-grow spinner-grow-sm" 
                role="status" 
                aria-hidden="true"
              >
              </span>
                Guardando...
            </button>
            ) : 
            (
            <button 
              type="button" 
              className="btn btn-primary"
              onClick={editInventario}
              disabled={inventario.FechaCompra}
            >
            Enviar
            </button>
            )
          }
        </div>
        <div className="modal-footer">
          <button 
            type="button" 
            className="btn btn-secondary" 
            data-bs-dismiss="modal"
            onClick={closeModal}
          >
            Cerrar
          </button>
          {
            loadingSave 
            ? 
            (
            <button 
              className="btn btn-primary" 
              type="button" disabled
            >
              <span 
                className="spinner-grow spinner-grow-sm" 
                role="status" 
                aria-hidden="true"
              >
              </span>
                Guardando...
            </button>
            ) : 
            (
            <button 
              type="button" 
              className="btn btn-primary"
              onClick={editInventario}
              disabled={inventario.precio}
            >
            Enviar
            </button>
            )
          }
        </div>
        <div className="modal-footer">
          <button 
            type="button" 
            className="btn btn-secondary" 
            data-bs-dismiss="modal"
            onClick={closeModal}
          >
            Cerrar
          </button>
          {
            loadingSave 
            ? 
            (
            <button 
              className="btn btn-primary" 
              type="button" disabled
            >
              <span 
                className="spinner-grow spinner-grow-sm" 
                role="status" 
                aria-hidden="true"
              >
              </span>
                Guardando...
            </button>
            ) : 
            (
            <button 
              type="button" 
              className="btn btn-primary"
              onClick={editInventario}
              disabled={inventario.usuario}
            >
            Enviar
            </button>
            )
          }
        </div>
        <div className="modal-footer">
          <button 
            type="button" 
            className="btn btn-secondary" 
            data-bs-dismiss="modal"
            onClick={closeModal}
          >
            Cerrar
          </button>
          {
            loadingSave 
            ? 
            (
            <button 
              className="btn btn-primary" 
              type="button" disabled
            >
              <span 
                className="spinner-grow spinner-grow-sm" 
                role="status" 
                aria-hidden="true"
              >
              </span>
                Guardando...
            </button>
            ) : 
            (
            <button 
              type="button" 
              className="btn btn-primary"
              onClick={editInventario}
              disabled={inventario.marca}
            >
            Enviar
            </button>
            )
          }
        </div>
        <div className="modal-footer">
          <button 
            type="button" 
            className="btn btn-secondary" 
            data-bs-dismiss="modal"
            onClick={closeModal}
          >
            Cerrar
          </button>
          {
            loadingSave 
            ? 
            (
            <button 
              className="btn btn-primary" 
              type="button" disabled
            >
              <span 
                className="spinner-grow spinner-grow-sm" 
                role="status" 
                aria-hidden="true"
              >
              </span>
                Guardando...
            </button>
            ) : 
            (
            <button 
              type="button" 
              className="btn btn-primary"
              onClick={editInventario}
              disabled={inventario.estado}
            >
            Enviar
            </button>
            )
          }
        </div>
        <div className="modal-footer">
          <button 
            type="button" 
            className="btn btn-secondary" 
            data-bs-dismiss="modal"
            onClick={closeModal}
          >
            Cerrar
          </button>
          {
            loadingSave 
            ? 
            (
            <button 
              className="btn btn-primary" 
              type="button" disabled
            >
              <span 
                className="spinner-grow spinner-grow-sm" 
                role="status" 
                aria-hidden="true"
              >
              </span>
                Guardando...
            </button>
            ) : 
            (
            <button 
              type="button" 
              className="btn btn-primary"
              onClick={editInventario}
              disabled={inventario.tipoEquipo}
            >
            Enviar
            </button>
            )
          }
        </div>
      </div>
    </div>
  </div>

  
  )
}



