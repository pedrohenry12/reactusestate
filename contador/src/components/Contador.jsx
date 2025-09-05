import styles from "./Contador.module.css"

export default function Contador() {
  console.log(styles)
  return(
    <div className={styles.container}>
    <h1 className={styles.titulo}>Contador</h1>
      <div className={styles.contadorDisplay}>
        0
      </div>
      <div className={styles.botaoContainer}>
        <button className={styles.botao}>
          -
        </button>
        <button className={styles.botao}>
          +
        </button>
      </div>
      <button className={styles.botao}>
        Reset
      </button>
    </div>
  )
}