//Componente "Lógico" (operaciones realizadas en el cliente) de Prestamos
"use client"

import { useEffect, useState } from "react";
import styles from "../../Styles/Prestamos.module.css"

function LPrestamos() {
  //variables de estado
    const [prestamo, setPrestamo] = useState(false);
    const [tipoPrestamo, setTipoPrestamo] = useState(null);
  
  //setea el valor de prestamos a false cada vez que se cambia el valor de tipoPrestamo
  //principalmente sirve para sacar el puntito al elegir otra opción
    useEffect(()=>{
      setPrestamo(false)
    },[tipoPrestamo])

    //Alerta al realizar el prestamo
    function mostrarAviso() {
       
      setPrestamo(window.confirm("Esta seguro que desea realizar el prestamo?"))
      
    }

    //Al apretar el boton cancelar las variables prestamo y tipoPrestamo se vuelven falsas y null,
    //lo que hace que ninguna opción esté marcada
  
    function cancelacion() {
      setPrestamo(false)
      setTipoPrestamo(null)
    }

    return (
      <div className={styles.main}>
        <section className={styles.cuerpo}>
          <div>
            <h2 className={styles.tituloPrestamo}>Nuevo préstamo</h2>
            <div className={styles.titulo}>
              <h3>Selecciona tu tipo de préstamo:</h3>

              <div className={styles.prestamoMenu}>
                <label htmlFor={styles.prestamo}>
                  <br />
                  <h2>
                    Personal
                    <input
                      className={styles.Personal}
                      type="radio"
                      name="prestamo"
                      value="Personal"
                      onClick={(e)=>setTipoPrestamo(e.target.value)}
                    />
                  </h2>
                  <br />
                  <h2>
                    Emprendimiento
                    <input
                      className={styles.Emprendimiento}
                      type="radio"
                      name="prestamo"
                      value="Emprendimiento"
                      onClick={(e)=>setTipoPrestamo(e.target.value)}
                    />
                  </h2>
                  <br />
                  <h2>
                    Capital de trabajo
                    <input
                      className={styles.Capital}
                      type="radio"
                      name="prestamo"
                      value="Capital"
                      onClick={(e)=>setTipoPrestamo(e.target.value)}
                    />
                  </h2>
                </label>
                <br />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores recusandae itaque laboriosam possimus nulla architecto
                  laborum, ut temporibus nemo maxime doloribus animi molestias
                  voluptatum aperiam, id officiis, commodi minus. Aliquid.
                </p>
                <br />
                <h3>
                  <button className={""} type="button" onClick={cancelacion}>
                    Cancelar
                  </button>
                  <button className={""} type="submit" onClick={mostrarAviso}>
                    Continuar
                  </button>
                </h3>
                <p className={styles.confirmacion}></p>
              </div>
              {prestamo ? 
              <h2>se realizo un prestamo del tipo: {tipoPrestamo}</h2> :
              <h2>Todavía no se realizo el prestamo</h2>}
            </div>
          </div>
        </section>
      </div>
    );
}

export default LPrestamos;