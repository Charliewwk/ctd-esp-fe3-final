import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import UserLoading from "./UserLoading";
import UserNotFound from "./UserNotFound";
import UserDetailsDisplay from "./UserDetailsDisplay";

const getTotalRecords = () => {
  const users = JSON.parse(localStorage.getItem("users"));
  return users ? users.length : 0;
};

const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
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

  const isFirstRecord = parseInt(id, 10) === 1;
  const isLastRecord = parseInt(id, 10) === getTotalRecords();

  if (loading) {
    return <UserLoading />;
  }

  if (!user) {
    return <UserNotFound id={id} />;
  }

  return <UserDetailsDisplay user={user} isFirstRecord={isFirstRecord} isLastRecord={isLastRecord} handlePrev={handlePrev} handleNext={handleNext} />;
};

export default UserDetails;