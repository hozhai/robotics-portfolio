import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Blogs from "./pages/Blogs";

import Footer from "./components/Footer";
import ScrollBtn from "./components/ScrollBtn";
import BlogDetail from "./pages/BlogDetail";

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <ScrollBtn />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:id" element={<BlogDetail />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </React.StrictMode>
  );
}

createRoot(document.querySelector("#root")).render(<App />);
