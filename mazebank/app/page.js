"use client"

import React,{useState} from "react"
import styles from "./Login.module.css"

function Login() {
  const [user,setUser] = useState("")
  const [password,setPassword] = useState("")
  const [incorrecto, setIncorrecto] = useState(false)


  function loginConfirmation() {

    if (user === "A" && password === "123456789") {
      setIncorrecto(false)
      window.location = "/inicio";
    } else {
      setIncorrecto(true)
    }
  }

  return (
    <>
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
          <form action="" className={styles.loginForm} onSubmit={loginConfirmation}>
            <input type="text" className={styles.user} value={Text} placeholder="Usuario" onChange={e=>setUser(e.target.value)}/>
            <br />

            <input type="password" classname="password" value={Text} placeholder="Contraseña" onChange={e=>setPassword(e.target.value)} />
            <br />
          </form>
          <br />
          <button
            type="submit"
            classname={styles.botonIniciarSesion}
            onClick={loginConfirmation}
          >
            <span>Iniciar sesion</span>
          </button>
          {incorrecto && <p>Usuario o contraseña invalida intente de nuevo!</p>}
        </div>
      </div>
    </>
  );
}

export default Login;

