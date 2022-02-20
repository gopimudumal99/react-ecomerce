import React, { useState, useContext } from "react";
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/LoginProvider";
import axios from "axios";
import Login from './Login';
let init = {
  username: "",
  email: "",
  password: "",
};

function Register() {
  const [formData, setFormData] = useState(init);
  const { isAuth, Tokenfun, token, toggleAuth } = useContext(AuthContext);
  const { username, email, password } = formData;

  const formHandle = (e) => {
    const { value, name } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    Tokenfun(formData);
    localStorage.setItem("formData", JSON.stringify(formData));
    setFormData(init);
    toggleAuth();
  };

  return isAuth ? (
  "products"
  ) : (
    <div>
      <form onSubmit={(e) => formSubmit(e)} className="input-group">
        <input
          required
          onChange={(e) => formHandle(e)}
          value={username}
          type="text"
          name="username"
          placeholder="userName"
        />
        <input
          required
          onChange={(e) => formHandle(e)}
          type="email"
          value={email}
          name="email"
          placeholder="email"
        />
        <input
          required
          onChange={(e) => formHandle(e)}
          type="password"
          value={password}
          name="password"
          placeholder="password"
        />
        <button type="submit" className="button">
          Register
        </button> 

      </form>
      <div></div>
    </div>
  );
}

export default Register;
