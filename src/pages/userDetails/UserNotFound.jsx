import React from "react";
import { Link } from "react-router-dom";

const UserNotFound = ({ id }) => (
  <div className="container mt-5">
    <h2 className="mb-4">Detalles del Usuario</h2>
    <div className="card">
      <div className="card-body">
        <p className="card-text">El usuario con el ID {id} no existe.</p>
        <Link to={`/`} className="btn btn-primary mt-3">
          Volver a la lista
        </Link>
      </div>
    </div>
  </div>
);

export default UserNotFound;
