
import { useState } from 'react'

export default function ContadorHabitos() {
  const [contador, setContador] = useState(0)
  const [nomeHabito, setNomeHabito] = useState('')

  function aumentar() {
    setContador((prev) => prev + 1)
  }

  function diminuir() {
    setContador((prev) => Math.max(0, prev - 1))
  }

  return (
    <div>
      <h1>Contador de Hábitos</h1>

      <label htmlFor="nomeHabito">Nome do hábito:</label>

      <input
        id="nomeHabito"
        type="text"
        value={nomeHabito}
        onChange={(event) => setNomeHabito(event.target.value)}
        placeholder="Digite o nome do hábito"
      />

      <h2>{nomeHabito || 'Meu hábito'}</h2>

      <p>Contagem: {contador}</p>

      <button onClick={aumentar}>Aumentar</button>

      <button onClick={diminuir}>Diminuir</button>
    </div>
  )
}
