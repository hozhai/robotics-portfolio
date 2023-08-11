import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoadScreen from "./components/Loading";

import Main from "./pages/Main.jsx";

function App() {
  const [loading, setLoading] = useState(false);

  return (
    <React.StrictMode>
      <BrowserRouter>
        <LoadScreen />
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

createRoot(document.querySelector("#root")).render(<App />);
