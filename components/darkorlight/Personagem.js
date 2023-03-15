import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import lightPer from "../../assets/videos/light.mp4";
import darkPer from "../../assets/videos/dark.mp4";

export function Personagem() {
  const { theme } = useTheme();
  const [play, setPlay] = useState(true);

  

  const renderThemeChanger = () => {
    const currentTheme = theme;

    if (currentTheme === "dark") {
      return (
        <video autoPlay loop className="object-contain">
          <source src={darkPer} />
        </video>
      );
    } else {
      return (
        <div>
          <video
            autoPlay
            loop
            className="object-contain"
          >
            <source src={lightPer} />
          </video>
        </div>
      );
    }
  };

  useEffect(() => {
    if (!play) {
      // perform some action when the video is clicked
      console.log("Video clicked");
    }
  }, [play]);

  return <div>{renderThemeChanger()}</div>;
}