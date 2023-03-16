import Image from "next/image"
import { useTheme } from "next-themes";
import {useState, useEffect} from "react";
import Sol from "../../assets/themeChange/Sol.png"
import Lua from "../../assets/themeChange/Lua.png"


export function  ThemeChanger () {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme()

  useEffect(() =>{
    setMounted(true);
  },[])


  const renderThemeChanger = () => {

    if(!mounted) return null;

    const currentTheme = theme;

    if(currentTheme ==="dark") {
      
      return (        
        <Image src={Lua} className="hover:cursor-pointer" onClick={() => setTheme('light')}/>
      )
    }

    else {
      
      return (
        <Image src={Sol} className="hover:cursor-pointer " onClick={() => setTheme('dark')}/>
      )
    }
  }
  


  return (
    <div>
      {renderThemeChanger()}
    </div>
  )
}
