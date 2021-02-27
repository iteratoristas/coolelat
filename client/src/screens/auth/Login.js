import React, { useState } from "react";
import { useAuthContext } from "../../context/AuthProvider";
import PrimaryButton from "../../components/PrimaryButton";
import Alert from "react-bootstrap/Alert";
import { Link } from "react-router-dom";
import calculator from "../../icons/Calculator.png";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [error, setError] = useState("");
  const auth = useAuthContext();

  const onChangeHandler = (e, handler) => {
    if (showAlert) {
      setShowAlert(false);
      setError("");
    }

    return handler(e.target.value);
  };

  const login = (e) => {
    e.preventDefault();
    setShowAlert(false);

    const data = { email, password };

    fetch(`http://localhost:5000/login`, {
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
      <form className="login-form" method="POST" onSubmit={login}>
        <h1>Login</h1>
        <img src={calculator} alt="" />
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
        <PrimaryButton
          type="submit"
          text="Login"
          style={{ width: "70%", marginTop: "1rem" }}
        />
        <div className="form-switch">
          <p style={{ textAlign: "right", alignSelf: "flex-end" }}>
            Don't have an account? <Link to="/signup">Signup</Link>
          </p>
        </div>
        {showAlert && (
          <Alert
            style={{ width: "70%", marginTop: "1rem" }}
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
