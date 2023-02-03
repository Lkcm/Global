import Image from "next/image"
import { useTheme } from "next-themes";
import personagemSol from "../../assets/themeChange/PersonagemSoll.png"
import personagemLua from "../../assets/themeChange/PersonagemLua.png"

export function  Personagem () {

  const { theme, setTheme } = useTheme()

  const renderThemeChanger = () => {

    const currentTheme = theme ;

    if(currentTheme ==="dark") {
      
      return (        
        <Image src={personagemLua} className="object-contain"/>
      )
    }

    else {
      
      return (
        <Image src={personagemSol} className="object-contain"/>
      )
    }
  }
  
  return (
    <div>
      {renderThemeChanger()}
    </div>
  )
}
