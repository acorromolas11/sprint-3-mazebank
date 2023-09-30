//Pagina de cuentas
import Layout from "@/Componentes/Layout";
import LCuentas from "@/Componentes/Logicas/LCuentas";

export const metadata = {
  title: 'Cuentas',
  openGraph: {
    title: 'Cuentas',
  },
}

//obtengo información de la api (getServersideProprs de next13) y se la doy como prop al componente LCuentas

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
