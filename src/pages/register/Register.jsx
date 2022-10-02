import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./register.css";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("/auth/register", {
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 7000);
    }
  };
  return (
    <div className="register">
      <span className="registerTitle">Registrar</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label className="labelcolor">Nombre de usuario</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Ingresar Usuario"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label className="labelcolor">Correo</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Ingresar Correo Electronico"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="labelcolor">Contraseña</label>
        <input
          type="password"
          className="registerInput"
          placeholder="Ingresar Contraseña..."
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="registerButton" type="submit">
          Registrar 
        </button>
      </form>
      <button className="registerLoginButton">
        <Link className="link" to="/login">
          Login
        </Link>
      </button>
      {error && <span style={{color:"red", marginTop:"10px"}}>Something went wrong!</span>}
    </div>
  );
}
