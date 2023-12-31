import React, { useState, useEffect } from "react";
import { useGlobal } from "../../context/GlobalContext";
import Card from "../../components/card/Card";
import UserLoading from "../../components/loading/loading";

const Favorites = () => {
  const { translations, favoriteUsers } = useGlobal();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  if (loading) {
    return <UserLoading />;
  }

  return (
    <div className="container text-center">
      {favoriteUsers.length === 0 ? (
        <h6>{translations.nofavs}</h6>
      ) : (
        <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-4">
          {favoriteUsers.map((user) => (
            <div key={user.id} className="col">
              <Card user={user} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
