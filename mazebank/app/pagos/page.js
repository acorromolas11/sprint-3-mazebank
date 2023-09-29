import styles from "./Pagos.module.css";

// export async function getStaticPaths() {
//   return {
//     paths: [
//       {
//         params: {
//           name: 'next.js',
//         },
//       }, // See the "paths" section below
//     ],
//     fallback: true, // false or "blocking"
//   }
// }

// export async function getServerSideProps() {
//   const res = await fetch('https://open.er-api.com/v6/latest/USD')
//   const ratio = await res.json()
//   return { props: { ratio } }
// }

// export async function getStaticProps() {
//   const res = await fetch('https://rickandmortyapi.com/api/character')
//   const cuentas = await res.json()
//   return { props: { cuentas } }
// }

function Pagos() {
  return (
    <div className={styles.main}>
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
    </div>
  );
}

export default Pagos;