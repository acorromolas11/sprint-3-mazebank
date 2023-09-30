//Página de inicio
import Layout from "@/Componentes/Layout";
import LInicio from "@/Componentes/Logicas/LInicio";

export const metadata = {
  title: 'Inicio',
  openGraph: {
    title: 'Inicio',
  },
}

function Index() {
  return (
    <Layout>
      <LInicio />
    </Layout>
  );
}

export default Index;