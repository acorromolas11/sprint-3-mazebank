import Layout from "@/Componentes/Layout";
import LCuentas from "@/Componentes/Logicas/LCuentas";

export const metadata = {
  title: 'Cuentas',
  openGraph: {
    title: 'Cunetas',
  },
}

async function Cuentas() {

  return (
    <Layout>
      <LCuentas />
    </Layout>
  );
}

export default Cuentas;
