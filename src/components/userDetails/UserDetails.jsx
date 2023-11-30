import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import UserLoading from "../loading/loading";
import UserNotFound from "../userNotFound/UserNotFound";
import UserDetailsDisplay from "../../pages/userDetails/UserDetailsDisplay";

const getTotalRecords = () => {
  const users = JSON.parse(localStorage.getItem("users"));
  return users ? users.length : 0;
};

const UserDetails = () => {
  const [isFirstRecord, setIsFirstRecord] = useState(false);
  const [isLastRecord, setIsLastRecord] = useState(false);
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setIsFirstRecord(false);
    setIsLastRecord(false);

    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    console.log('Record ID: ', id);
    setIsFirstRecord(parseInt(id, 10) === 1);
    setIsLastRecord(parseInt(id, 10) === getTotalRecords());
  }, [id, getTotalRecords]);

  const handleNext = () => {
    const nextId = parseInt(id, 10) + 1;
    const totalRecords = getTotalRecords();
    if (nextId <= totalRecords) {
      navigate(`/record/${nextId}`);
    }
  };

  const handlePrev = () => {
    const prevId = parseInt(id, 10) - 1;
    if (prevId > 0) {
      navigate(`/record/${prevId}`);
    }
  };

  if (loading) {
    return <UserLoading />;
  }

  if (!user) {
    console.log (`User ID `, id, ` not found: `);
    return <UserNotFound id={id} />;
  }


  return (
    <UserDetailsDisplay
      user={user}
      isFirstRecord={isFirstRecord}
      isLastRecord={isLastRecord}
      handlePrev={handlePrev}
      handleNext={handleNext}
    />
  );
};

export default UserDetails;