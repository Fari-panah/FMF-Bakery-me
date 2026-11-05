import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { REACT_APP_API_URL } from "../apiConfig";
import "./LogIn.css"

const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${REACT_APP_API_URL}/api/login`, {
      method: "POST",
      body: JSON.stringify({
          email,
          password
        }),
      headers: {
        "Content-Type": "application/json",
      }
    })
     const json = await response.json();
      if (!response.ok) {
        console.log("Error:", json);
        return;
      }
      if (response.ok) {
        localStorage.setItem("user", JSON.stringify(json));
        setEmail("")
        setPassword("")
        navigate("/")
      }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleFormSubmit}>
          <label>Email:</label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <label>Password:</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <button type="submit">Login</button>
        </form>
        <p>
          No account? <Link to="/signup" className="signup-link">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
