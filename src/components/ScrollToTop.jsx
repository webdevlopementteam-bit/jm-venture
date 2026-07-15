import { useEffect } from "react";
import { useLocation } from "../router";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // always top
  }, [pathname]);

  return null;
};

export default ScrollToTop;