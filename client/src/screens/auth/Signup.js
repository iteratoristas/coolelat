import React, { useState } from "react";
import { useAuthContext } from "../../context/AuthProvider";
import PrimaryButton from "../../components/PrimaryButton";
import Alert from "react-bootstrap/Alert";
import { Link } from "react-router-dom";
import board from '../../icons/Presentation.png';

// TODO: Refactor iff assigned member does not produce output
export default function Signup() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [error, setError] = useState("");
  const auth = useAuthContext();

  const onChangeHandler = (e, handler, target = e.target.value) => {
    if (showAlert) {
      setShowAlert(false);
      setError("");
    }

    return handler(target);
  };

  const signup = (e) => {
    e.preventDefault();
    setShowAlert(false);

    const typeValue = type ? 'teacher' : 'student';
    const data = { firstName, lastName, email, password, type: typeValue };

    fetch(`http://localhost:5000/signup`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.success) {
          localStorage.setItem("coolelat_token", json.token);
          auth.setUser(json.user);
          auth.setAuthenticated(true);
        } else {
          setError(json.message);
          setShowAlert(true);
        }
      });
  };

  return (
    <div className="form-container">
      <form className="login-form" method="POST" onSubmit={signup}>
        <h1>Signup</h1>
        <img src={board} alt=""/>
        <div className="input-field">
          <label htmlFor="email">First name:</label>
          <input
            type="text"
            id="firstName"
            placeholder="First name"
            value={firstName}
            onChange={(e) => onChangeHandler(e, setFirstName)}
          />
        </div>
        <div className="input-field">
          <label htmlFor="email">Last name:</label>
          <input
            type="text"
            id="lastName"
            placeholder="Last name"
            value={lastName}
            onChange={(e) => onChangeHandler(e, setLastName)}
          />
        </div>
        <div className="input-field">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => onChangeHandler(e, setEmail)}
          />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => onChangeHandler(e, setPassword)}
          />
        </div>
        <div className="input-field" style={{flexDirection: "row", alignItems: "baseline"}}>
           <input type="checkbox" name="type" checked={type} onChange={(e) => onChangeHandler(e, setType, e.target.checked)}/>
           <p style={{paddingLeft: ".2rem"}}>I am a teacher.</p>
        </div>
        <PrimaryButton
          type="submit"
          text="Signup"
          style={{ width: "70%", marginTop: ".8rem" }}
        />
        <div className="form-switch">
          <p style={{ textAlign: "right", fontSize: "1.5vh", alignSelf: "flex-end" }}>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
        {showAlert && (
          <Alert
          style={{width: "70%", marginTop: "1rem"}}
            variant="danger"
            dismissible
            onClose={() => setShowAlert(false)}
          >
            {error}
          </Alert>
        )}
      </form>
    </div>
  );
}
