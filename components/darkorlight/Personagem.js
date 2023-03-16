import { useTheme } from "next-themes";
import {  useRef } from "react";
import lightPer from "../../assets/videos/light.mp4";
import darkPer from "../../assets/videos/dark.mp4";

export function Personagem() { // receba o estado inicial como um prop
  const { theme } = useTheme();
  const bvideoRef = useRef(null)
  const wvideoRef = useRef(null)

  const renderThemeChanger = () => {
    const currentTheme = theme ; // use o estado inicial se o tema ainda não foi definido

    if (currentTheme === "dark") {
      return (
        <div className=" hover:cursor-pointer"onMouseEnter={() => bvideoRef.current.play()} onMouseLeave={() => bvideoRef.current.pause()}>
        <video
          ref={bvideoRef}
          src={darkPer}
          type="video/mp4"
          loop
          muted
          className="object-contain"
        />
        
      </div>
      );
    } else {
      return (
        <div className="hover:cursor-pointer"onMouseEnter={() => wvideoRef.current.play()} onMouseLeave={() => wvideoRef.current.pause()}>
        <video
          ref={wvideoRef}
          src={lightPer}
          type="video/mp4"
          loop
          muted
          className="object-contain"
        />
        
      </div>
      );
    }
  };

  return <div>{renderThemeChanger()}</div>;
}