"use client";

import Header from "./Header";
import MenuNav from "./MenuNav";
import styles from "../styles/Layout.module.css";
import { useEffect, useState } from "react";
import Footer from "./Footer";

function Layout({ children }) {
  const [mostrarMenu, setMostrarMenu] = useState(false);

  return (
    <div>
      <Header />
      <div className={styles.main}>
        <div className={styles.mostrarMenu}>
          {mostrarMenu ? (
            <img
              className={styles.abrir}
              src="/images/cerrar_menu.png"
              onClick={() => setMostrarMenu(!mostrarMenu)}
            />
          ) : (
            <img
              className={styles.cerrar}
              src="/images/burger_menu.png"
              onClick={() => setMostrarMenu(!mostrarMenu)}
            />
          )}
          {mostrarMenu && <MenuNav />}
        </div>
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
