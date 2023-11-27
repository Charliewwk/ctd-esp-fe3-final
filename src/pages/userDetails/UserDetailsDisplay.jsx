import React from "react";
import { Link } from "react-router-dom";


const UserDetailsDisplay = ({ user, isFirstRecord, isLastRecord, handlePrev, handleNext }) => (
  <div className="container">
    <div className="card">
      <div className="card-body">

        {/* Contenido */}
        <h5 className="card-title">{user.name}</h5>
        <p className="card-text">Username: {user.username}</p>
        <p className="card-text">Email: {user.email}</p>

        <h6 className="mt-4">Dirección:</h6>
        <p className="card-text">Calle: {user.address.street}</p>
        <p className="card-text">Suite: {user.address.suite}</p>
        <p className="card-text">Ciudad: {user.address.city}</p>
        <p className="card-text">Código Postal: {user.address.zipcode}</p>

        <h6 className="mt-4">Información de Contacto:</h6>
        <p className="card-text">Teléfono: {user.phone}</p>
        <p className="card-text">Sitio web: {user.website}</p>

        <h6 className="mt-4">Compañía:</h6>
        <p className="card-text">Nombre: {user.company.name}</p>
        <p className="card-text">Frase clave: {user.company.catchPhrase}</p>
        <p className="card-text">Descripción: {user.company.bs}</p>

        {/* Navegación */}
        <div className="mt-3">
          <button
            className="btn btn-secondary me-2"
            onClick={handlePrev}
            disabled={isFirstRecord}
          >
            Anterior
          </button>
          <button
            className="btn btn-secondary"
            onClick={handleNext}
            disabled={isLastRecord}
          >
            Siguiente
          </button>
        </div>

        {/* Volver */}
        <Link to={`/`} className="btn btn-primary mt-3">
          Volver a la lista
        </Link>
      </div>
    </div>
  </div>
);

export default UserDetailsDisplay;