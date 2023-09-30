"use client"

import styles from "../../Styles/Cuentas.module.css"
import Link from "next/link";
import { useState } from "react";

function LCuentas({cuentas}) {
    const[userInput,setUserInput] = useState("")

    return (  
        <main className={styles.main}>
        <h1>
          Bienvenido a la página de cuentas, seleccione una de sus cuentas para
          continuar:{" "}
        </h1>
        <label>
          <input type="text" placeholder="Buscar Cuenta" onChange={(e)=>setUserInput(e.target.value)}/>
        </label>
        <ul>
          {cuentas.map((cuenta) => {
            if (cuenta.name.includes(userInput))
              return (
                <li key={cuenta.id}>
                  <Link href={`/cuentas/${cuenta.name.split(" ").join('')}`}>{cuenta.name}</Link>
                </li>
              );
          })}
        </ul>
      </main>
    );
}

export default LCuentas;