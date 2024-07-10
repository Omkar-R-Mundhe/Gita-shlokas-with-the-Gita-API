import React, { useState } from "react";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Bg from "./assets/Background.png";
import './App.css'

function App() {
  return (
    <div className="bg-primaryLight w-full min-h-screen dark:bg-primaryDark">
      <img
        src={Bg}
        alt="Home"
        className="w-full min-h-screen opacity-20 object-cover"
      />
      <div className="absolute w-full min-h-screen top-10">
      <Header />
      <Home />
      </div>
    </div>
  );
}

export default App;
