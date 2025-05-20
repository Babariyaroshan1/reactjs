import React from "react";
import TrendingSlider from "./components/TrendingSlider";
import Hero from "./components/Hero";
import ReasonsToJoin from "./components/ReasonsToJoin";
import TelescopeIcon from "./components/TelescopeIcon";
import DownloadIcon from "./components/DownloadIcon";

import "./App.css";
import "./components/IconStyles.css"; 
import TelevisionIcon from "./components/TelevisionIcon";

function App() {
  return (
    <>
      <Hero />
      <TrendingSlider />

      <div>
        <ReasonsToJoin />
      </div>

    
    
    </>
  );
}

export default App;
