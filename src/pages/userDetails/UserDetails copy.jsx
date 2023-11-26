// Detalles.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Detalles = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Detalles del Usuario</h2>
      <div className="card">
        <div className="card-body">
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

          {/* Puedes agregar más detalles según tus necesidades */}
          
          <a href={`/`} className="btn btn-primary mt-3">
            Volver a la lista
          </a>
        </div>
      </div>
    </div>
  );
};

export default Detalles;
