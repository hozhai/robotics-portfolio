import React, { useState, useEffect, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Blogs from "./pages/Blogs";

import Footer from "./components/Footer";
import ScrollBtn from "./components/ScrollBtn";
import BlogDetail from "./pages/BlogDetail";

import data from "./data/blogsData";

function App() {
  const [blogsData, setBlogsData] = useState(data);

  useEffect(() => {
    const timeout = setInterval(() => {
      setBlogsData(data);
    }, 30000);

    return () => {
      clearInterval(timeout);
    };
  }, []);

  return (
    <BrowserRouter>
      <ScrollBtn />
      <Routes>
        <Route path="/" element={<Home data={blogsData} />} />
        <Route path="/blogs" element={<Blogs data={blogsData} />} />
        <Route path="/blogs/:id" element={<BlogDetail data={blogsData} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

createRoot(document.querySelector("#root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
