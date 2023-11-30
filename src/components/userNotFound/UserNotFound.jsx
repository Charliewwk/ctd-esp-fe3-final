import React from "react";
import { Link } from "react-router-dom";

const UserNotFound = ({ id, translations }) => (

  <div className="container">
    <h2 className="mb-4">{translations.notFound.title}</h2>
    <div className="card">
      <div className="card-body">
        <p className="card-text">{translations.notFound.text}</p>
        <Link to={`/`} className="btn btn-primary mt-3">
        {translations.notFound.button}
        </Link>
      </div>
    </div>
  </div>

);

export default UserNotFound;
