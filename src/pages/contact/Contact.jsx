import React, { useState } from "react";
import "./contact.css"

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
  });

  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setError("");
  };

  const handleFocus = () => {
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const nameRegex = /^[^\s]+(\s[^\s]+)*$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (
      !nameRegex.test(formData.fullName) ||
      formData.fullName.length <= 5 ||
      !emailRegex.test(formData.email)
    ) {
      setError(
        "Please verify your information again."
      );
      setSuccessMessage("");
    } else {
      console.log("Data sent:", formData);

      setSuccessMessage(
        `Thanks ${formData.fullName}, we will contact you soon via email.`
      );
      setError("");
    }
  };

  return (
    <div className="container d-flex justify-content-center">
      <div className="card card-limit">
        <div className="card-header">Contact</div>
        <div className="card-body card-body d-flex flex-column align-items-center">
          <h5 className="card-title">Loren</h5>
          <p className="card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            posuere erat a ante.
          </p>
          <form onSubmit={handleSubmit} className="w-100">
            <div className="mb-3">
              <label className="form-label" htmlFor="fullName">
                Name:
              </label>
              <input
                type="text"
                className="form-control"
                name="fullName"
                id="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                onFocus={handleFocus}
                aria-describedby="nameHelpBlock"
              />
              <small id="nameHelpBlock" className="form-text text-muted">
                Enter more than 5 characters, with no leading spaces or more
                than one space between words.
                </small>
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="email">
                Email:
              </label>
              <input
                type="text"
                className="form-control"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                onFocus={handleFocus}
                aria-describedby="emailHelpBlock"
              />
              <small id="emailHelpBlock" className="form-text text-muted">
                Enter a valid email
                </small>
            </div>
            {error && <p className="text-danger">{error}</p>}
            {successMessage && (
              <p className="text-success">{successMessage}</p>
            )}
            <button type="submit" className="btn btn-primary">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;