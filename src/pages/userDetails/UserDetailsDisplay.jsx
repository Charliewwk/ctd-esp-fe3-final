import React from "react";
import { Link } from "react-router-dom";
import { useGlobal } from "../../context/GlobalContext";

const UserDetailsDisplay = ({
  user,
  isFirstRecord,
  isLastRecord,
  handlePrev,
  handleNext,
}) => {
  const { translations } = useGlobal();

  return (
    <div className="container">
      <div className="card">
        <div className="card-header d-flex">
          <div className="col-10">
            <h5 className="card-title">{user.name}</h5>
            <div className="d-flex card-text">
              <p className="col-4">
                <span className="d-flex col-3">
                  {translations.userDetails.username}
                </span>
                <span className="col-1"></span>
                <strong className="col-8">{user.username}</strong>
              </p>
              <p className="col-8">
                <span className="d-flex col-3">
                  {translations.userDetails.email}
                </span>
                <span className="col-1"></span>
                <strong className="col-8">{user.email}</strong>
              </p>
            </div>
          </div>
          <div className="col-2">
            <img
              src="/src/assets/doctor.jpg"
              className="img-thumbnail"
              alt="..."
            />
          </div>
        </div>
        <div className="card-body">
          <p>{translations.userDetails.titlePersonalProfesional}</p>
          <div className="d-flex card-text">
            <p className="col-3">
              <img
                src="../../../src/assets/ubicacion.png"
                className="img-thumbnail"
                alt="..."
              />
            </p>
            <p className="col-1" />
            <div className="col-4">
              <div className="">
                <span className="col-3">{translations.userDetails.street}</span>
                <div className="col-1"></div>
                <strong className="col-8">{user.address.street}</strong>
              </div>
              <div className="">
                <span className="col-3">{translations.userDetails.suite}</span>
                <div className="col-1"></div>
                <strong className="col-8">{user.address.suite}</strong>
              </div>
              <div className="">
                <span className="col-3">{translations.userDetails.city}</span>
                <div className="col-1"></div>
                <strong className="col-8">{user.address.city}</strong>
              </div>
              <div className="">
                <span className="col-3">{translations.userDetails.zip}</span>
                <div className="col-1"></div>
                <strong className="col-8">{user.address.zipcode}</strong>
              </div>
              <div className="">
                <span className="col-3">{translations.userDetails.phone}</span>
                <div className="col-1"></div>
                <strong className="col-8">{user.phone}</strong>
              </div>
            </div>
            <div className="col-4">
              <div className="">
                <span className="col-3">{translations.userDetails.phone}</span>
                <div className="col-1"></div>
                <strong className="col-8">{user.phone}</strong>
              </div>
              <div className="">
                <span className="col-3">
                  {translations.userDetails.website}
                </span>
                <div className="col-1"></div>
                <strong className="col-8">{user.website}</strong>
              </div>
              <div className="">
                <span className="col-3">
                  {translations.userDetails.company}
                </span>
                <div className="col-1"></div>
                <strong className="col-8">{user.company.name}</strong>
              </div>
              <div className="">
                <i className="col-3">{user.company.catchPhrase}</i>
                <div className="col-1"></div>
                <i>
                  <strong className="col-8">{user.company.bs}</strong>
                </i>
              </div>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <div className="d-flex justify-content-between align-items-center">
            <button
              className="btn btn-sm btn-success"
              onClick={handlePrev}
              disabled={isFirstRecord}
            >
              {translations.userDetails.navBack}
            </button>
            <Link to={`/`} className="btn btn-sm btn-primary">
              {translations.userDetails.navHome}
            </Link>
            <button
              className="btn btn-sm btn-success"
              onClick={handleNext}
              disabled={isLastRecord}
            >
              {translations.userDetails.navForw}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsDisplay;