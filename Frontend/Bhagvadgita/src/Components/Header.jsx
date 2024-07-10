import React, {useState} from 'react'
import DarkMode from "../assets/dark.png";
import LightMode from "../assets/light.png";

function Header() {
    const [icon, setIcon] = useState(DarkMode);

  const toggleTheme = () => {
    console.log("theme changed");
    document.querySelector("html").classList.toggle("dark");
    setIcon((prev) => (prev === DarkMode ? LightMode : DarkMode));
  };

  return (
    <div >
    <div className="flex justify-around flex-row ">
        <div className="p-2 mx-2 font-heading text-4xl text-textPrimary font-bold dark:text-textDark2">
        श्रीमद् भगवद्गीता
        </div>
        <div className="p-2 mx-2 font-title text-textPrimary flex dark:text-textDark ">
          <div className="px-4 mx-4">
            <button onClick={toggleTheme}>
              <img className="w-8 h-8 overflow-hidden" src={icon} alt="Theme Icon" />
            </button>
          </div>
        </div>
      </div>
      </div>
  )
}

export default Header