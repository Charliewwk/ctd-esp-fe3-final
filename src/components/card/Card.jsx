// Card.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useGlobal } from "../../context/GlobalContext";
import "./card.css"

const Card = ({ user }) => {
  const { favoriteUsers, favoriteDispatch } = useGlobal(); // Actualiza para usar el nuevo contexto
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    // Actualizar el estado de isFavorite cuando cambia el estado global
    setIsFavorite(favoriteUsers.some((favoriteUser) => favoriteUser.id === user.id));
  }, [favoriteUsers, user.id]);

  const handleToggleFavorite = () => {
    favoriteDispatch({ type: "TOGGLE_FAVORITE", payload: user }); // Actualizado el dispatch
  };

  return (
    <div className="text-white bg-dark mb-3">
{/*     <div className={`card ${theme.darkMode ? "text-white bg-dark" : "bg-light"} mb-3`}>
 */}      <img className="card-img-top rounded" src="../../../src/assets/doctor.jpg" alt="Card image cap"/>
      <div className="card-body">
        <h5 className="card-title">{user.name}</h5>
        <p className="card-text">{user.email}</p>
        <div className="button mt-2 d-flex flex-row align-items-center">
          <Link to={`/record/${user.id}`} className="btn rounded-5 w-50 btn-outline-info">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-vcard" viewBox="0 0 16 16">
            <path d="M5 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4m4-2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5M9 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4A.5.5 0 0 1 9 8m1 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5"/>
            <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM1 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8.96c.026-.163.04-.33.04-.5C9 10.567 7.21 9 5 9c-2.086 0-3.8 1.398-3.984 3.181A1.006 1.006 0 0 1 1 12z"/>
          </svg><div>Details</div>
          </Link>

          <button className="btn rounded-5 ms-1 w-50" onClick={handleToggleFavorite}>
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill={isFavorite ? "red" : "#b4b4b4" } className="bi bi-heart-fill" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
            </svg>
          </button>


        </div>
      </div>
    </div>
  );
};

export default Card;
