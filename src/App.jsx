import { useRef, useEffect, useState, createContext } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import LocomotiveScroll from "locomotive-scroll";
import Hero from "./Components/Hero/Hero";
import StatPage from "./Components/Stat Page/StatPage";

export const ScrollContext = createContext(null);

function App() {
  const scrollRef = useRef(null);
  const [scroll, setScroll] = useState(null);

  useEffect(() => {
    if (!scrollRef.current) return;

    const locoScroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });

    setScroll(locoScroll);

    return () => {
      if (locoScroll) locoScroll.destroy();
    };
  }, []);

  return (
    <ScrollContext.Provider value={scroll}>
    
      <div ref={scrollRef} data-scroll-container className="w-full h-screen font-[Poppins]">
        <Header />
        <Hero />
        <StatPage />
      </div>
    </ScrollContext.Provider>
  );
}

export default App;
