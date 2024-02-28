"use client";

import { Switch } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { MdLightMode, MdNightlight } from "react-icons/md";

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const containerSystem = document.getElementById("system-object-dom");
    const dark = "flex min-h-screen max-h-screen dark";
    const light = "flex min-h-screen max-h-screen";
    const modo = darkMode ? dark : light;
    containerSystem?.setAttribute("class", modo);
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
