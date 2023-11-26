// Detalles.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";

const Detalles = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setUser(null); // Setear a null si el usuario no existe
      }
    };

    fetchData();
  }, [id]);

  const handleNext = () => {
    const nextId = parseInt(id, 10) + 1;
    navigate(`/record/${nextId}`);
  };

  const handlePrev = () => {
    const prevId = parseInt(id, 10) - 1;
    if (prevId > 0) {
      navigate(`/record/${prevId}`);
    }
  };

  if (!user) {
    return (
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
  }

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Detalles del Usuario</h2>
      <div className="card">
        <div className="card-body">
          {/* ... (resto del contenido) */}

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



          {/* Botones de navegación */}
          <div className="mt-3">
            <button className="btn btn-secondary me-2" onClick={handlePrev}>
              Anterior
            </button>
            <button className="btn btn-secondary" onClick={handleNext}>
              Siguiente
            </button>
          </div>
          
          {/* Botón para volver a la lista */}
          <Link to={`/`} className="btn btn-primary mt-3">
            Volver a la lista
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Detalles;
