//Componente "Lógico" de Pagos se realiza en el servidor

import styles from "../../Styles/Pagos.module.css"
  
  //getServerSideProprs de la api con los items que se compraron y los retorno
  export async function getItems() {
    const res = await fetch("https://fakestoreapi.com/products");
    const repo = await res.json();
  
    return repo;
  }

async function LPagos() {
    //almaceno en items los items de la api
    const items = await getItems();

    //muestro en una lista los elementos de la varibale items,
    //muestro los primeros 5 items en pagos realizados y los siguientes 5 en pagos por realizar,
    //si tuviese una api con pagos realizados y pagos por realizar los distribuiría de esa manera

    return (
        <div className={styles.main}>
        <h2>Pagos Realizados</h2>
        <div className={styles.contenedorGeneral}>
          <div className={styles.contenedorNombres}>
            <ul>
              {items.map((item) => {
                if (item.id < 5)
                  return <li key={item.id}>Nombre: {item.title}</li>;
              })}
            </ul>
          </div>
          <div className={styles.contenedorPrecios}>
            <ul>
              {items.map((item) => {
                if (item.id < 5)
                  return <li key={item.id}>Precio: {item.price}</li>;
              })}
            </ul>
          </div>
        </div>
        <h2>Pagos Pendientes</h2>
        <div className={styles.contenedorGeneral}>
          <div className={styles.contenedorNombres}>
            <ul>
              {items.map((item) => {
                if (item.id < 5)
                  return <li key={item.id}>Nombre: {item.title}</li>;
              })}
            </ul>
            <div className={styles.contenedorPrecios}>
              <ul>
                {items.map((item) => {
                  if (item.id > 5 && item.id < 10)
                    return <li key={item.id}>Precio: {item.price}</li>;
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
}

export default LPagos;