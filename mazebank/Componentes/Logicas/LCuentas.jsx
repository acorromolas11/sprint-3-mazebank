//Componente "Lógico" (operaciones realizadas en el cliente) de cuentas
"use client"

import styles from "../../Styles/Cuentas.module.css"
import Link from "next/link";
import { useState } from "react";

//Realizo una lista con los valores almacenados en cuentas (contiene los valores de la api)
//Ofrezco un input al usuario que permita buscar con mayor facilidad una cuenta en la lista
//Uso una variable de estado para almacenar el valor almacenado por el usuario y cambio su valor con un onChange en el input
//De esta manera el usuario verá en tiempo real las cuentas que quiere buscar

function LCuentas({cuentas}) {
    const[userInput,setUserInput] = useState("")

    return (  
        <main className={styles.main}>
        <h1>
          Bienvenido a la página de cuentas, seleccione una de sus cuentas para
          continuar:{" "}
        </h1>
        <label>
          <input type="text" placeholder="Buscar Cuenta" onChange={(e)=>setUserInput(e.target.value.toLowerCase())}/>
        </label>
        <ul>
          {cuentas.map((cuenta) => {
            if (cuenta.name.toLowerCase().includes(userInput))
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