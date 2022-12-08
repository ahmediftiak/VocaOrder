import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import ErrorAlert from "../components/ErrorAlert";

function SignupPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const firstNameContentChange = (event) => {
    setFirstName(event.target.value);
  };
  const lastNameContentChange = (event) => {
    setLastName(event.target.value);
  };
  const emailContentChange = (event) => {
    setEmail(event.target.value);
  };
  const passwordContentChange = (event) => {
    setPassword(event.target.value);
  };

  //signup page hint
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      let response = await fetch("/api/auth/signup", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
        }),
      });

      if (response.ok) {
        setSuccess(true);
      } else {
        setError(true);
      }
    } catch (error) {
      console.error("Server error while creating a new micro post", error);
      setError(true);
    }
  };

  if (success) return <Navigate to="/login" />;

  return (
    <div className="col-10 col-md-8 col-lg-7">
      {error && <ErrorAlert details={"Failed to save the content"} />}
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Enter your first name..."
            value={firstName}
            className="form-control"
            onChange={firstNameContentChange}
            autoFocus
          />
          <br></br>
          <input
            type="text"
            placeholder="Enter your last name..."
            value={lastName}
            className="form-control"
            onChange={lastNameContentChange}
            autoFocus
          />
          <br></br>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            className="form-control"
            onChange={emailContentChange}
            autoFocus
          />
          <br></br>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            className="form-control"
            onChange={passwordContentChange}
            autoFocus
          />
          <br></br>
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignupPage;