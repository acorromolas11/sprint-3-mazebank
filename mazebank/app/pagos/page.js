import styles from "./Pagos.module.css";

function Pagos() {
  return (
    <>
      <main className={styles.main}>
        <section className={styles.cont}>
          <div className={styles.montoActual}>
            <h1>Monto actual $AR: 9999,99</h1>
            <h1>Monto actual $US: 9,99</h1>
            <h1>Monto actual $EU: 8,99</h1>
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