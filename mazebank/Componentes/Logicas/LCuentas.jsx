import styles from "../../Styles/Cuentas.module.css"
import Link from "next/link";

export async function getCuentas() {
  const repo = await fetch("https://rickandmortyapi.com/api/character");
  const data = await repo.json();
  const res = data["results"];
  return res;
}

async function LCuentas() {

  const cuentas = await getCuentas();

    return (  
        <main className={styles.main}>
        <h1>
          Bienvenido a la página de cuentas, seleccione una de sus cuentas para
          continuar:{" "}
        </h1>
        <ul>
          {cuentas.map((cuenta) => {
            if (cuenta.name.includes("Rick"))
              return (
                <li key={cuenta.id}>
                  <Link href={`/cuentas/${cuenta.name}`}>{cuenta.name}</Link>
                </li>
              );
          })}
        </ul>
      </main>
    );
}

export default LCuentas;