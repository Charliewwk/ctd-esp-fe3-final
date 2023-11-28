import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useGlobal } from "../../context/GlobalContext";
import "./card.css";

const Card = ({ user }) => {
  const { favoriteUsers, favoriteDispatch } = useGlobal();
  const [isFavorite, setIsFavorite] = useState(false);
  const { theme } = useGlobal();

  useEffect(() => {
    setIsFavorite(
      favoriteUsers.some((favoriteUser) => favoriteUser.id === user.id)
    );
  }, [favoriteUsers, user.id]);

  const handleToggleFavorite = () => {
    favoriteDispatch({ type: "TOGGLE_FAVORITE", payload: user });
  };

  return (
    <div className="card mb-3 position-relative shadow">
      <img
        className={`card-img-top rounded img-thumbnail ${theme.darkMode ? 'low-brightness' : 'high-brightness'}`}
        src="/src/assets/doctor.jpg"
        alt="">
      </img>
      <div className="fullNameStyle position-absolute top-1 end-0 p-0">
        <h6 className={`fullName ${theme.darkMode ? 'text-white text-shadow-dark' : 'text-muted text-shadow-light'}`}>
          {user.name.length > 21 ? `${user.name.slice(0, 21)}...` : user.name}
        </h6>
      </div>
      <div className="stage position-absolute">
        <div className={`heart ${isFavorite ? 'is-active' : ''}`} onClick={handleToggleFavorite}></div>
      </div>
      <div className="card-body">
        <div className="card-text d-flex justify-content-between align-items-center">
          <Link to={`/record/${user.id}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="#b4b4b4"
              viewBox="0 0 16 16"
            >
              <path d="M5 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4m4-2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5M9 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4A.5.5 0 0 1 9 8m1 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5" />
              <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM1 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8.96c.026-.163.04-.33.04-.5C9 10.567 7.21 9 5 9c-2.086 0-3.8 1.398-3.984 3.181A1.006 1.006 0 0 1 1 12z" />
            </svg>
          </Link>
          <Link to={`/record/${user.id}`}>
            <span className="emailDecoration text-body">{user.email}</span>
          </Link>

        </div>
      </div>
    </div>
  );
};

export default Card;
