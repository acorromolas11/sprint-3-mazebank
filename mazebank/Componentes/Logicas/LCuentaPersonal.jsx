//Parte "Logica" (se realiza en el cliente) de Cuentas Personales
"use client"

import styles from "../../Styles/CuentaPersonal.module.css"
import { useParams } from "next/navigation";

function LCuentaPersonal({cuentas}) {
    const params = useParams()
    var cuentaP = null
    
    //Verifico que la Cuenta Personal coincida con el nombre de la página y los guardo en la variable cuentaP
    cuentas.map((cuenta)=>{
        if(cuenta.name.split(' ').join('') === params.name)
        cuentaP = cuenta
    })

    //Creo una lista con los datos almacenados en la cuentaP
    return (
        <div className={styles.main}>
            <div className={styles.contenedor}>
                <h1>Esta es la cuenta de: {params.name.split()}</h1>
                    <ul>
                        <li style={{listStyle:"none"}}><img src={cuentaP.image} alt="Foto de cuenta" /></li>
                        <li>CBU: {cuentaP.name.split(" ").join('.') + "." + cuentaP.species + "." + cuentaP.id}</li>
                        <li>Fecha de Nacimiento: {cuentaP.created}</li>
                        <li>Origen: {cuentaP.origin.name}</li>
                    </ul> 
            </div>
        </div>
    );
}

export default LCuentaPersonal;