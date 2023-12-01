import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../../components/card/Card";
import UserLoading from "../../components/loading/loading";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(response.data);
        localStorage.setItem("users", JSON.stringify(response.data));
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <UserLoading />;
  }

  return (
    <div className="container">
      <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-4">
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
