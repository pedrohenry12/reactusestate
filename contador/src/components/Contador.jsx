import { useState } from "react";
import styles from "./Contador.module.css"

export default function Contador() {
  
  const [contador, setcontador] = useState(0)

  function incrementar(){
    setcontador(contador +1)
    
  }

  function decrementar(){
    setcontador(contador -1)
    
  }

  function zerar(){
    setcontador(0)
  }
  return(
    <div className={styles.container}>
    <h1 className={styles.titulo}>Contador</h1>
      <div className={styles.contadorDisplay}>
        {contador}
      </div>
      <div className={styles.botaoContainer}>
        <button className={styles.botao}
        onClick={decrementar}>
          -
        </button>
        <button className={styles.botao}
        onClick={incrementar}>
          +
        </button>
      </div>
      <button className={styles.botao}
      onClick={zerar}>
        Reset
      </button>
    </div>
  )
}