"use client"

import Header from "./Header";
import MenuNav from "./MenuNav";
import Footer from "./Footer";
import styles from "../styles/Layout.module.css"
import { useEffect, useState } from "react";

function Layout({children}) {
    const [mostrarMenu,setMostrarMenu] = useState(false);

    return (
        <body>
            <Header />  
            <div className={styles.main}>
                <div style={{display:"inline-block"}} onClick={()=>setMostrarMenu(!mostrarMenu)}>
                    {mostrarMenu?
                    <img  className={styles.abrir} src="/images/cerrar_menu.png"/> :
                    <img  className={styles.cerrar} src="/images/burger_menu.png"/>
                    }
                    {mostrarMenu && <MenuNav />}
                    
                </div>  
                {children} 
            </div>
            <Footer />
        </body>
    );
}

export default Layout;