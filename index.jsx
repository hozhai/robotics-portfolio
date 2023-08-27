import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Blogs from "./pages/Blogs";

import Footer from "./components/Footer";
import ScrollBtn from "./components/ScrollBtn";

function App() {
  const [displayScroll, setDisplayScroll] = useState(false)
  useEffect(() => {
    // if (window.scrollY >= 200) {
    //   setDisplayScroll(true)
    // } else {
    //   setDisplayScroll(false)
    // }
    window.scrollY
  }, [window.scrollY])
  return (
    <React.StrictMode>
      <BrowserRouter>
        <ScrollBtn style={{ display: displayScroll ? "block" : "none" }}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:id" element={<Blogs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </React.StrictMode>
  );
}

createRoot(document.querySelector("#root")).render(<App />);
