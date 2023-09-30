import Layout from "@/Componentes/Layout";
import LPagos from "@/Componentes/Logicas/LPagos"

export const metadata = {
  title: 'Pagos',
  openGraph: {
    title: 'Pagos',
  },
}

function Pagos() {
  return (
    <Layout>
      <LPagos />
    </Layout>
  );
}

export default Pagos;
