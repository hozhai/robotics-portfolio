import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Home from "./pages/Home";
import Blogs from "./pages/Blogs";

import Footer from "./components/Footer";
import ScrollBtn from "./components/ScrollBtn";
import BlogDetail from "./pages/BlogDetail";

import data from "./data/blogsData";

export default function App() {
  return (
    <>
      <ScrollBtn />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home data={data} />} />
          <Route path="/blogs" element={<Blogs data={data} />} />
          <Route path="/blogs/:id" element={<BlogDetail data={data} />} />
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}
