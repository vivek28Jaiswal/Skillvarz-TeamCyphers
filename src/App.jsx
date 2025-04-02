import React from "react";
import LandingPage from "./components/LandingPage";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import Page4 from "./components/Page4";
import ReactLenis, { useLenis } from "lenis/react";
import Page5 from "./components/Page5";
import Page6 from "./components/Page6";
import Footer from "./components/Footer";

const App = () => {
  const lenis = useLenis();
  return (
    <ReactLenis root>
      <div className="w-full h-screen bg-red-950 select-none font-[orbitron]">
        <LandingPage />
        <Page2 />
        <Page3 />
        <Page4 />
        <Page5 />
        <Page6 />
        <Footer />
      </div>
    </ReactLenis>
  );
};

export default App;
