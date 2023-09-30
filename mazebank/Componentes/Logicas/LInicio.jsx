//Componente "Lógico" de inicio en este caso no se corre en el cliente
import Link from "next/link";
import styles from "../../Styles/Index.module.css"

function LInicio() {

  //Creo una página de inicio básica, con informacion y con links hacia: prestamos, transferencias y pagos
  
    return (
        <main className={styles.mainContainer}>
        <h2>Quienes Somos</h2>
        <div className={styles.info}>
          <p>
            Somos <strong>Maze Bank</strong> un banco intenacional. Contamos con
            128 años antiguedad con clientes de todo el mundo. Te ofrecemos con
            nuestro <em>Home-Banking</em> una experiencia distinta a lo
            tradicional. Nuestra atencion se basa en la interacción virtual del
            cliente con su dinero para que puedas manejarlo desde cualquier lado
            del mundo, sin preocupaciones, con tan solo unos cliks
          </p>
          <p>
            Lema de <strong>Maze bank</strong>: <em>"Invertí desde tu casa"</em>{" "}
          </p>
        </div>
        <div className={styles.divManejaTuCuenta}>
          <section className={styles.nave}>
            <h2 className={styles.cardHeader}>Maneja tu cuenta</h2>
            <ul className={styles.cardBody}>
              <li className={styles.botonManejaCuenta}>
                <Link href="/prestamos">Solicita Prestamos</Link>
              </li>
              <li className={styles.botonManejaCuenta}>
                <Link href="/pagos">Ultimos Pagos</Link>
              </li>
              <li className={styles.botonManejaCuenta}>
                <Link href="/transferencias">Realiza tranferencias</Link>
              </li>
            </ul>
          </section>

          <section className={styles.formulario}>
            <form action="" method="post" className={styles.formSolicitarTarjeta}>
              <legend>Solicita tu tarjeta</legend>

              <label>
                Apellido:
                <input type="text" name="ape" className={styles.ape} required />
              </label>

              <label>
                Nombre:
                <input type="text" name="nom" className={styles.nom} required />
              </label>

              <button className={styles.sub} type="submit">
                Solicitar
              </button>
            </form>
          </section>
        </div>

        <section className={styles.contenido}>
          <article>
            <h2>Nuestra Sede</h2>
            <p>
              La sede de la empresa, Maze Bank Tower, está ubicada en Pillbox
              Hill, en el centro de Los Santos. Este rascacielos es el edificio
              más alto de San Andreas y de la costa oeste de los Estados Unidos
              de América. La compañía también patrocina el Maze Bank Arena en La
              Puerta, el estadio principal de la ciudad, y patrocina la película
              Meltdown de Richards Majestic Productions.
            </p>
            <p>
              Es un edificio extremadamente proyectado en la mayoría de
              películas hollywoodenses con temática en la ciudad de Los Santos.
            </p>

            <p>
              Este edificio está construido para soportar los frecuentes
              terremotos, pudiendo soportar uno de hasta 8 grados en la Escala
              de Richter. La torre es coronada por una corona de cristal que se
              ilumina de noche y a veces en celebraciones la corona se ilumina
              de varios colores.
            </p>
          </article>
        </section>
      </main>
    );
}

export default LInicio;