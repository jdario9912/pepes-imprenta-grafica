"use client";

import { Switch } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { MdLightMode, MdNightlight } from "react-icons/md";
import { estilosSystemBase } from "../services/estilos-system";

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const containerSystem = document.getElementById("system-object-dom");
    const dark = "dark dark:text-white";
    const light = "";
    const modo = darkMode ? dark : light;
    containerSystem?.setAttribute("class", `${estilosSystemBase} ${modo}`);
  });

  return (
    <Switch
      size="sm"
      color="primary"
      thumbIcon={({ isSelected, className }) =>
        isSelected ? (
          <MdNightlight className={className} />
        ) : (
          <MdLightMode className={className} />
        )
      }
      onChange={handleDarkMode}
    >
      <span>dark mode</span>
    </Switch>
  );
};

export default DarkMode;
