import styles from "./Pagos.module.css";

function Pagos() {
  return (
    <>
      <main className={styles.main}>
        <section className={styles.cont}>
          <div className={styles.montoActual}>
            <p>Monto actual $AR: 9999,99</p>
            <p>Monto actual $US: 9,99</p>
            <p>Monto actual $EU: 8,99</p>
          </div>
          <div></div>
          <div className={styles.container}>
            <h2>PAGOS REALIZADOS</h2>
          </div>
          <section className={styles.info}></section>
          <div className={styles.container}>
            <h2>PAGOS PENDIENTES</h2>
          </div>
          <section className={styles.info}></section>
        </section>
      </main>
    </>
  );
}

export default Pagos;