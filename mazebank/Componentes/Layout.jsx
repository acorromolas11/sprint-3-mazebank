//Componente Layout
"use client";

import Header from "./Header";
import MenuNav from "./MenuNav";
import styles from "../styles/Layout.module.css";
import { useState } from "react";
import Footer from "./Footer";

function Layout({ children }) {
  //Variable de estado
  const [mostrarMenu, setMostrarMenu] = useState(false);

  //Layout de todas las páginas, se organiza con el componente header,menu,contenido de página,footer.
  //se muestra el menu y la imagen del menu hamburguesa para cerrar siempre que mostrarMenu
  //sea true y su valor cambia cada vez que clickeamos sobre la imagen, si es false, no muestra
  //el menu, y muestra la imagen de menu hamburguesa abierta, el contenido del menu esta encerrado en el componente
  //MenuNav
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
