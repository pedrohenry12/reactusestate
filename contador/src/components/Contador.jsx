import { useState } from "react";
import styles from "./Contador.module.css"

export default function Contador() {
  
  const [stap, setStap] = useState(1)
  const [contador, setcontador] = useState(0)

  function incrementar(){
    setcontador(contador + stap)
    
  }

  function decrementar(){
    setcontador(contador - stap)
    
  }

  function zerar(){
    setcontador(0)
  }
  return(
    <div className={styles.container}>
    <h1 className={styles.titulo}>Contador</h1>
    <input id="stap"
           type="number"
           onChange={(e) => setStap(parseInt(e.target.value) || 1)}
           placeholder="Escolha um stap para o contador"
           />
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