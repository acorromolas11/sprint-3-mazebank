import Layout from "@/Componentes/Layout";
import LTransferencias from "@/Componentes/Logicas/LTransferencias";

export const metadata = {
  title: 'Transferencias',
  openGraph: {
    title: 'Transferencias',
  },
}

export async function getRates(){
  const resp = await fetch("https://open.er-api.com/v6/latest/USD")
  const api = await resp.json()
  const data = api["rates"]
  return data
}

async function Transferencias() {
  const rates = await getRates()

  return (
    <Layout>
      <LTransferencias rates={rates}/>
    </Layout>
  );
}

export default Transferencias;
