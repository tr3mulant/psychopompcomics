import { useState, useLayoutEffect } from "react";
import { useTheme } from 'styled-components';

export const useMedia = () => {
  
  const theme = useTheme();

  const hasWindow = typeof window !== 'undefined';

  function isMobileSized() {
    const width = hasWindow ? window.innerWidth : null;
    return width < parseInt(theme.breakpoints.sm.replace('px',''));
  }

  const [isMobile, setMobile] = useState(isMobileSized());  

  
  useLayoutEffect(() => {
    const onResize = () => {
      const isMobile = window.innerWidth < parseInt(theme.breakpoints.sm.replace('px',''));
      console.log("theme.breakpoints.sm: ", theme.breakpoints.sm);
      console.log("windows.innerWidth: ", window.innerWidth);
      setMobile(isMobile);
    };
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [theme.breakpoints.sm]);

  return { isMobile };
};
