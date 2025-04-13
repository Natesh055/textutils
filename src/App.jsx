import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TextForm from "./components/TextForm";
import Navbar from "./components/Navbar";
import About from "./components/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <BrowserRouter>
      <Navbar heading="TextUtils" mode={mode} togglemode={toggleMode} about = {"About us" }/>
      <div className="container">
        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/" element={<TextForm heading="Enter the text to analyse" mode={mode} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
