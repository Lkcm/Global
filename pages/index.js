import { Contador } from "../components/contador/Contador"
import { Slides } from "../components/slides/Slides"
import { Navbar } from "../components/navbar/Navbar"
import { Feet } from "../components/feet/Feet"
import { Personagem } from "../components/darkorlight/Personagem"

import { Pokemons } from "../components/pokemons/Pokemons"





function Home() {


  return (
    <>
    <div className="">
    <Navbar/>
    <div className="container max-w-screen-lg  mx-auto pt-10">
   
    <div className="mx-20">

      <div className="
      flex  
      lg:flex-row 
      sm:flex-col-reverse 
      justify-around 
      lg:items-stretch 
      sm:items-center
      xsm:flex-col-reverse
      "
      
      >
      <div className="
      flex 
      flex-col 
      gap-5 
      mt-20
      xsm:mt-5
      xsm:gap-1
      ">
      <h1 className="
      font-sans 
      lg:text-9xl 
      sm:text-7xl 
      font-black 
      flex 
      gap-10 
      items-center
      xsm:text-2xl
      
      ">
      Lucas Kroger 
      </h1>
      <div className="
      font-sans text-3xl
       text-zinc-400
       xsm:text-sm
       ">This is my personal Landing Page</div>
      <Contador/>
      </div>
        <Personagem/>
      </div>
      <div>
      <h2 className="
      text-4xl
      pt-10
      xsm:text-lg
      xsm:pt-0
      ">Projects :</h2>
      <Slides/>
      <Feet/>
      
      </div>
      </div>
      </div>
      </div>


    </>
  )
}

export default Home