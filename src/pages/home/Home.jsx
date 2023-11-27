// Home.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../../components/card/Card";
import { Link } from "react-router-dom";
import { useGlobal } from "../../context/GlobalContext";

const Home = () => {
  const { favoriteUsers, theme } = useGlobal(); // Actualiza para usar el nuevo contexto
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        setUsers(response.data);
        // Guardar en localStorage
        localStorage.setItem("users", JSON.stringify(response.data));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={`container ${theme.darkMode ? "dark" : "light"}`}>
      <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-4 g-4">
        {users.map((user) => (
          <div key={user.id} className="col">
            <Card user={user} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
