import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Blogs from "./pages/Blogs";

import Footer from "./components/Footer";
import ScrollBtn from "./components/ScrollBtn";
import BlogDetail from "./pages/BlogDetail";

import data from "./data/blogsData";

export default function App() {
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
    <>
      <ScrollBtn />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home data={blogsData} />} />
          <Route path="/blogs" element={<Blogs data={blogsData} />} />
          <Route path="/blogs/:id" element={<BlogDetail data={blogsData} />} />
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}
