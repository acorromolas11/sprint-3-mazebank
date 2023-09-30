//Componente Footer
import Link from "next/link";
import styles from "../Styles/Footer.module.css";

//Componente del footer del banco

function Footer() {
  return (
    <div className={styles.footer}>
      <section className={styles.cond}>
        <ul>
          <li>
            <Link href="">Terminos y condiciones</Link>
          </li>
          <li>
            <Link href="">Privacidad</Link>
          </li>
          <li>© 2023, Maze Bank, S.A.</li>
        </ul>
      </section>
      <section className={styles.logo}>
        <h1>Maze Bank</h1>
        <figure>
          <img src="images/logo_banco.png" alt="Imagen del logo del banco" />
        </figure>
      </section>
      <section className={styles.redes}>
        <h4>Contactanos</h4>
        <ul>
          <li>
            <Link href="tel:+54936854423">
              <img src="images/whatsapp-icon.svg" alt="logo telefono" />
            </Link>
          </li>
          <li>
            <Link href="https://www.facebook.com/">
              <img src="images/facebook.svg" alt="logo facebook" />
            </Link>
          </li>
          <li>
            <Link href="https://twitter.com/">
              <img src="images/twitter.svg" alt="logo twitter" />
            </Link>
          </li>
          <li>
            <Link href="mailto:mazebank@gmail.com">
              <img src="images/google-gmail.svg" alt="logo gmail" />
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Footer;
