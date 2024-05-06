import { useEffect, useState } from "react";
import { TbMoonStars } from "react-icons/tb/index.js";
import { IoSunnyOutline } from "react-icons/io5/index.js";

const DarkToggle = () => {
  const [theme, setTheme] = useState(window.localStorage.getItem("theme")?? "light");
  const [loaded, setLoaded] = useState(false);

  const handleClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    setLoaded(true)
  }, []);

  if (!loaded) {
  }
  
  return (
    <button className="h-fit" onClick={handleClick} aria-label="Dark Toggle">
      <div className="p-1 rounded-md outline outline-2 hover:bg-slate-800 dark:hover:bg-neutral-400 transition-colors outline-black dark:outline-neutral-400 group">
        {
          loaded ? (theme === "light" ? (
            <TbMoonStars size={"1.5em"} className="stroke-black group-hover:stroke-white transition-colors" />
          ) : (
            <IoSunnyOutline size={"1.5em"} className="stroke-neutral-400 group-hover:stroke-black transition-colors" />
          )) : <div className="h-6 w-6"></div>
        }

      </div>
    </button>
  );
};

export default DarkToggle;
