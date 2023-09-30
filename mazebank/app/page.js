"use client";

import React, { useState } from "react";
import styles from "./Login.module.css";
import Head from "next/head";

function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [incorrecto, setIncorrecto] = useState(false);

  function loginConfirmation() {
    if (user === "A" && password === "123456789") {
      setIncorrecto(false);
      window.location = "/inicio";
    } else {
      setIncorrecto(true);
    }
  }

  return (
    <div>
      <div className={styles.main}>
        <div className={styles.login}>
          <div className={styles.bankLogo}>
            <img src="images/logo_banco.png" alt="bank_logo" />
          </div>
          <h1 className={styles.bankName}>MAZE BANK</h1> <br />
          <br />
          <br />
          <br />
          <h1 className={styles.title}>Inicio de sesión</h1>
          <br />
          <br />
          <form className={styles.loginForm}>
            <input
              name="user"
              type="text"
              className={styles.user}
              placeholder="Usuario"
              onChange={(e) => setUser(e.target.value)}
            />
            <br />

            <input
              name="password"
              type="password"
              className="password"
              placeholder="Contraseña"
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
          </form>
          <br />
          <button
            type="submit"
            className={styles.botonIniciarSesion}
            onClick={loginConfirmation}
          >
            <span>Iniciar sesion</span>
          </button>
          {incorrecto && <p>Usuario o contraseña invalida intente de nuevo!</p>}
        </div>
      </div>
      {console.log(user)}
      {console.log(password)}
      <h2>usuario: {user}</h2>
      <h2>contraseña: {password}</h2>
    </div>
  );
}

export default Login;
