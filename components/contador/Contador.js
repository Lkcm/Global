import { useState } from 'react'

export function Contador () {

const [contador, setContador] = useState(0)

const Adicionar = () => {
  setContador(++contador)
}
  return (
      <>
   <div>{contador}</div>
   <button onClick={Adicionar}>Adicionar</button>
   </>
  )
}
