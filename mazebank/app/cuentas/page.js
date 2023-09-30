import Layout from "@/Componentes/Layout";
import LCuentas from "@/Componentes/Logicas/LCuentas";

export const metadata = {
  title: 'Cuentas',
  openGraph: {
    title: 'Cuentas',
  },
}

export async function getCuentas() {
  const repo = await fetch("https://rickandmortyapi.com/api/character");
  const data = await repo.json();
  const res = data["results"];
  return res;
}

async function Cuentas() {
  const cuentas = await getCuentas()

  return (
    <Layout>
      <LCuentas cuentas={cuentas}/>
    </Layout>
  );
}

export default Cuentas;
