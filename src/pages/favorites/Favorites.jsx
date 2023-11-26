// Favorites.jsx
import React from "react";
import { useGlobal } from "../../context/GlobalContext";
import Card from "../../components/card/Card";

const Favorites = () => {
  const { favoriteUsers } = useGlobal(); // Actualiza para usar el nuevo contexto

  return (
    <div className="container">
      <h2 className="mt-3">Favorites</h2>
      <div className="row row-cols-2 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
        {favoriteUsers.map((user) => (
          <div key={user.id} className="col">
            <Card user={user} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
