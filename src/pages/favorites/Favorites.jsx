import React from "react";
import { useGlobal } from "../../context/GlobalContext";
import Card from "../../components/card/Card";

const Favorites = () => {
  const { favoriteUsers } = useGlobal();

  return (
    <div className="container">
      <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-4">
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

