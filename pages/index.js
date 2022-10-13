import { useState } from "react"


function Home() {

 const [contador, setContador] = useState(0)

 const Adicionar = () => {
   setContador(++contador)
 }


  return (
    <>
    
    <div>Home</div>

    <div>{contador}</div>
    <button onClick={Adicionar}>Adicionar</button>
    </>
  )
}

export default Home