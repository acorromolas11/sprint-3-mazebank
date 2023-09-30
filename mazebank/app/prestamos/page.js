import Layout from "@/Componentes/Layout";
import LPrestamos from "@/Componentes/Logicas/LPrestamos";

export const metadata = {
  title: 'Prestamos',
  openGraph: {
    title: 'Prestamos',
  },
}

function Prestamos() {

  return (
    <Layout>
      <LPrestamos />
    </Layout>
  );
}

export default Prestamos;