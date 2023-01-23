import { useEffect, useState } from "react";
import { TbMoonStars } from "react-icons/tb/index.js";
import { IoSunnyOutline } from "react-icons/io5/index.js";

const DarkToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "light");
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
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    setLoaded(true)
  }, []);

  if (!loaded) {
  }
  
  return (
    <button className="h-fit" onClick={handleClick}>
      <div className="p-1 rounded-md bg-stone-300 dark:bg-stone-700 hover:outline outline-2 outline-black dark:outline-neutral-400">
        {
          loaded ? (theme === "light" ? (
            <TbMoonStars size={"1.5em"} className="stroke-black" />
          ) : (
            <IoSunnyOutline size={"1.5em"} className="stroke-neutral-400" />
          )) : <div className="h-6 w-6"></div>
        }

      </div>
    </button>
  );
};

export default DarkToggle;
