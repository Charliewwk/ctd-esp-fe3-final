import React from "react";
import { Link } from "react-router-dom";

const UserDetailsDisplay = ({ user, isFirstRecord, isLastRecord, handlePrev, handleNext }) => {
  // Armar la constante userData con title y content
  const userData = [
    { title: 'Username', content: user.username },
    { title: 'eMail', content: user.email },
    { title: 'Address', content: [
      { title: 'Street', content: user.address.street },
      { title: 'Suite', content: user.address.suite },
      { title: 'City', content: user.address.city },
      { title: 'PD', content: user.address.zipcode }
    ]},
    { title: 'eMail', content: user.email },
    { title: 'eMail', content: user.email },
    { title: 'eMail', content: user.email },
    { title: 'eMail', content: user.email },

  ];

  return (
    <div className="container">
      <div className="card">
        <div className="card-header d-flex">
          <div className="col-10">
            <h5 className="card-title">{user.name}</h5>
            <div className="d-flex card-text">
              <p className="col-4">
                <span className="d-flex col-3">Username</span>
                <span className="col-1"></span>
                <strong className="col-8">{user.username}</strong>
              </p>
              <p className="col-8">
                <span className="d-flex col-3">eMail</span>
                <span className="col-1"></span>
                <strong className="col-8">{user.email}</strong>
              </p>
            </div>
          </div>
          <div className="col-2">
            <img src="../../../src/assets/doctor.jpg" className="img-thumbnail" alt="..." />
          </div>
        </div>
        <div className="card-body">
          <p>Personal and Professional information</p>
          <div className="d-flex card-text">
            <p className="col-3">
              <img src="../../../src/assets/ubicacion.png" className="img-thumbnail" alt="..." />
            </p>
            <p className="col-1"/>
            <div className="col-4">
              <div className="">
                <span className="col-3">Street</span>
                <div className="col-1"></div>
                <strong className="col-8">{user.address.street}</strong>
              </div>
              <div className="">
                <span className="col-3">Suite</span>
                <div className="col-1"></div>
                <strong className="col-8">{user.address.suite}</strong>
              </div>
              <div className="">
                <span className="col-3">City</span>
                <div className="col-1"></div>
                <strong className="col-8">{user.address.city}</strong>
              </div>
              <div className="">
                <span className="col-3">Zip Code</span>
                <div className="col-1"></div>
                <strong className="col-8">{user.address.zipcode}</strong>
              </div>
              <div className="">
                <span className="col-3">Phone</span>
                <div className="col-1"></div>
                <strong className="col-8">{user.phone}</strong>
              </div>
            </div>
            <div className="col-4">
              <div className="">
                <span className="col-3">Phone</span>
                <div className="col-1"></div>
                <strong className="col-8">{user.phone}</strong>
              </div>
              <div className="">
                <span className="col-3">Website</span>
                <div className="col-1"></div>
                <strong className="col-8">{user.website}</strong>
              </div>
              <div className="">
                <span className="col-3">Company</span>
                <div className="col-1"></div>
                <strong className="col-8">{user.company.name}</strong>
              </div>
              <div className="">
                <i className="col-3">{user.company.catchPhrase}</i>
                <div className="col-1"></div>
                <i><strong className="col-8">{user.company.bs}</strong></i>
              </div>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <div className="d-flex justify-content-between align-items-center">
            <button className="btn btn-sm btn-secondary" onClick={handlePrev} disabled={isFirstRecord}>Back</button>
            <Link to={`/`} className="btn btn-sm btn-primary">Home</Link>
            <button className="btn btn-sm btn-secondary" onClick={handleNext} disabled={isLastRecord}>Forward</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsDisplay;
