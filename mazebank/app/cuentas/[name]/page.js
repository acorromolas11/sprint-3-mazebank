import Layout from "@/Componentes/Layout";
import LCuentaPersonal from "@/Componentes/Logicas/LCuentaPersonal";
import { getCuentas } from "../page";
import { useParams } from "next/navigation";

export const metadata = {
    title: "Cuenta Personal",
    openGraph: {
      title: 'Cuenta Personal',
    },
  }

async function Cuenta() {
    const cuentas = await getCuentas()
    console.log(cuentas)
    return (
        <Layout>
            <LCuentaPersonal cuentas={cuentas}/>
        </Layout>
    );
}

export default Cuenta;