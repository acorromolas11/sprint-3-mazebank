import Link from "next/link";
import React from "react";
import styles from "../Styles/Header.module.css";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.imagenTitulo}>
        <figure className={styles.figure}>
          <img src="images\logo_banco.png" alt="Imagen del logo del banco" />
        </figure>
        <h1>Maze Bank</h1>
      </div>
      <Link href="/">
        <button className={styles.boton}>Cerrar sesión</button>
      </Link>
    </div>
  );
}

export default Header;
