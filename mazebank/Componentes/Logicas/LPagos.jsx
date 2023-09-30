import styles from "../../Styles/Pagos.module.css"
  
  export async function getItems() {
    const res = await fetch("https://fakestoreapi.com/products");
    const repo = await res.json();
  
    return repo;
  }

async function LPagos() {
    const items = await getItems();

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