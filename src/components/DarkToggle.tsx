import { useEffect, useRef, useState } from "react";
import { TbMoonStars } from "react-icons/tb/index.js";
import { IoSunnyOutline } from "react-icons/io5/index.js";


const DarkToggle = () => {
  const [theme, setTheme] = useState<"dark" | "light">("light");
  const [loaded, setLoaded] = useState(false);

  const handleClick = () => {
    document.body.style.transition = 'color .1s, background-color .3s';
    if (theme === "dark") {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setTheme("light")
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setTheme("dark")
    }
  };

  // useEffect(() => {
  //   if (theme === "dark") {
  //     document.documentElement.classList.add("dark");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //   }
  // }, [theme]);

  useEffect(() => {
    setTheme(document.documentElement.classList.contains("dark") ? "dark" : "light")
    setLoaded(true)
  }, []);

  if (!loaded) {
  }
  
  return (
    <button className="" onClick={handleClick} aria-label="Dark Toggle">
    <div className="p-2 h-7 w-7 rounded-md outline outline-2 hover:bg-neutral-400 dark:hover:bg-neutral-400 transition-colors outline-black dark:outline-neutral-400 group dark:bg-[url('/sun.svg')] bg-[url('/moon.svg')] bg-center bg-no-repeat bg-[size:1.5rem]">
       
      </div>
    </button>
  );
};

export default DarkToggle;
