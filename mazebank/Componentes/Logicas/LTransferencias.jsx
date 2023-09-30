"use client"

import styles from "../../Styles/Transferencias.module.css";
import { useState, useEffect } from "react";

function LTransferencias({rates}) {
    const [userInput, setUserInput] = useState(0);
    const [moneda, setMoneda] = useState(null);
    const [saldoActual, setSaldoActual] = useState(1000);
    const [monto, setMonto] = useState(0);
  
    useEffect(() => {
      if (moneda == null) {
        setMonto(0);
      }
      if (moneda === "Pesos") {
        setMonto(userInput);
      } else if (moneda === "Dolares") {
        setMonto(rates["ARS"] * rates["USD"] * userInput);
      } else if (moneda === "Euro") {
        setMonto(userInput * rates["EUR"] * rates["ARS"]);
      }
    }, [moneda, userInput]);
  
    function realizar() {
      monto > 0 && monto < saldoActual
        ? setSaldoActual(saldoActual - monto)
        : window.alert("Transferencia cancelada, monto invalido");
    }

    return (
        <div className={styles.main}>
        <form
          name="form"
          className={styles.menuTransacciones}
          method="post"
          autoComplete="off"
        >
          <div className={styles.titulo}>
            <h2>TRANSFERENCIAS</h2>
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex at
            obcaecati nihil unde ratione maxime delectus laudantium
            necessitatibus, magni veniam? Ipsum nostrum iste culpa magnam nihil
            nemo magni blanditiis facilis. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Doloremque rem rerum suscipit esse
            atque nihil maiores iste laudantium et, fugiat, repellat cupiditate
            earum reprehenderit velit. Nostrum voluptatem eaque dignissimos
            modi. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Nostrum laborum quam sapiente autem itaque? Odit est, cum velit at,
            optio quis dolore id libero vitae quae, nulla nemo neque tempore?
          </div>
          <br />
          <div className={styles.remitente}>
            <ul>
              <li>De BN $ 123456/5464/0</li>

              <li>Fecha de Ejecución 24/8/2023</li>

              <li>Plazo de Acreditación: En el acto</li>

              <li>Su saldo actual es de: ${saldoActual}</li>
            </ul>
          </div>
          <br />
          <div className={styles.importes}>
            <div className={styles.elegirMoneda}>
              <label>
                Importe En
                <select
                  id="moneda"
                  className={styles.Importes}
                  onChange={(e) => {
                    setMoneda(e.target.value);
                  }}
                >
                  <option name="-" value="-">
                    -
                  </option>
                  <option name="Pesos" value="Pesos">
                    Pesos
                  </option>
                  <option name="Dolares" value="Dolares">
                    Dolares
                  </option>
                  <option name="Euro" value="Euro">
                    Euros
                  </option>
                </select>
              </label>
            </div>
            <div className={styles.monedas}>
              <h3>Las monedas actuales son: </h3>
              <ul>
                <li>Euro: {rates["EUR"]}</li>
                <li>Dolar: {rates["USD"]}</li>
                <li>Peso Argentino: {rates["ARS"]}</li>
              </ul>
            </div>
          </div>
          <br />
          <br />
          <div className={styles.montoIngresar}>
            <label>
              Monto a ingresar
              <input
                type="number"
                name="monto"
                className={styles.monto}
                onChange={(e) => setUserInput(e.target.value)}
              />
            </label>
          </div>
          <div className={styles.conversionMonto}>
            <h3>Converción del monto:</h3>
            <table style={{ borderCollapse: "separate" }}>
              <tbody>
                <tr>
                  <th>Moneda</th>
                  <th>Monto</th>
                </tr>

                <tr>
                  <th>{moneda}</th>
                  <th>{monto}</th>
                </tr>
              </tbody>
            </table>
          </div>
          <br />
          <br />
          <div className={styles.receptor}>
            <label>
              Para
              <input type="text" name="receptor" />
            </label>
          </div>
          <br />
          <br />

          <div className={styles.metodo}>
            <label>
              Concepto
              <select name="concepto">
                <option value="-">-</option>
                <option value="Cuota">Cuota</option>
                <option value="Factura">Factura</option>
                <option value="Inmobiliarias">Inmobiliarias</option>
                <option value="Prestamo">Préstamo</option>
                <option value="Seguro">Seguro</option>
                <option value="Varios">Varios</option>
              </select>
            </label>
          </div>
          <br />
          <br />
          <div className={styles.botonContinuar}>
            <label>
              <button
                type="button"
                className={styles.continuar}
                onClick={realizar}
              >
                Continuar
              </button>
            </label>
          </div>
        </form>
      </div>
    );
}

export default LTransferencias;