//Componente "Lógico" (operaciones realizadas en el cliente) de Login
"use client";

import { useState } from "react";
import styles from "../../Styles/Login.module.css"

function LLogin() {
  //confirma que el valor ingresado por el usuario y su contraseña sean correctos y de serlo se dirige al inicio mediante
  //window.location
  //Ademas, la variable de estado incorrecto determina si el valor ingreado por el usuario es incorrecto y de serlo
  //muestra un mensaje que dice contraseña incorrecta
    function loginConfirmation() {
        if (user === "A" && password === "123456789") {
          setIncorrecto(false);
          window.location = "/inicio";
        } else {
          setIncorrecto(true);
        }
      }

    //variables de estado

    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [incorrecto, setIncorrecto] = useState(false);

    return (
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
    );
}

export default LLogin;