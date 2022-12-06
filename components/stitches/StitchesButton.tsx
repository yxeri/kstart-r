import {
  WiMoonAltWaxingCrescent1,
  WiMoonAltWaningGibbous1,
} from "react-icons/wi";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Button } from "./StyledStitches";

const StitchesButton = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const toggleTheme = () => {
    const targetTheme = resolvedTheme === "light" ? "dark" : "light";
    setTheme(targetTheme);
  };

  const renderTheme = () => {
    if (resolvedTheme === "dark") {
      return <WiMoonAltWaningGibbous1 />;
    } else {
      return <WiMoonAltWaxingCrescent1 />;
    }
  };

  return (
    <div style={{ textAlign: "center", marginLeft: "auto", paddingRight: "15px"}}>
      <Button onClick={toggleTheme}>
        {renderTheme()}
        Change Theme
      </Button>
    </div>
  );
};

export default StitchesButton;
