//Componente de MenuNav
import Link from "next/link";
import styles from "../Styles/MenuNav.module.css";

//Es un componente del menu de navegación que contiene los contenidos del menu de navegación de la página

function MenuNav() {
  return (
    <div>
      <section className={styles.menu}>
        <nav className={styles.contenedorEnlaces}>
          <ul>
            <li className={styles.inicio}>
              <Link href="/inicio">INICIO</Link>
            </li>
            <li className={styles.cuentas}>
              <Link href="/cuentas">CUENTAS</Link>
            </li>
            <li className={styles.transf}>
              <Link href="/transferencias">TRANSFERENCIAS</Link>
            </li>
            <li className={styles.pagos}>
              <Link href="/pagos">PAGOS</Link>
            </li>
            <li className={styles.prestamos}>
              <Link href="/prestamos">PRESTAMOS</Link>
            </li>
          </ul>
        </nav>
      </section>
    </div>
  );
}

export default MenuNav;
