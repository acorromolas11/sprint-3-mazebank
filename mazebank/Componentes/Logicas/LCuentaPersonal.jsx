"use client"

import styles from "../../Styles/CuentaPersonal.module.css"
import { useParams,usePathname } from "next/navigation";

function LCuentaPersonal({cuentas}) {
    const params = useParams()
    var cuentaP = null
    
    cuentas.map((cuenta)=>{
        if(cuenta.name.split(' ').join('') === params.name)
        cuentaP = cuenta
    })

    return (
        <div className={styles.main}>
            <h1>Esta es la cuenta de: {params.name.split()}</h1>
                <ul>
                    <li style={{listStyle:"none"}}><img src={cuentaP.image} alt="Foto de cuenta" /></li>
                    <li>CBU: {cuentaP.name.split(" ").join('.') + "." + cuentaP.species + "." + cuentaP.id}</li>
                    <li>Fecha de Nacimiento: {cuentaP.created}</li>
                    <li>Origen: {cuentaP.origin.name}</li>
                </ul> 
        </div>
    );
}

export default LCuentaPersonal;