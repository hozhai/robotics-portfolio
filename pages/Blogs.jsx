import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default function Blogs() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    document.title = "<Blogs /> | Zhai";
    setProgress(100)
  }, []);

  return (
    <>
      <LoadingBar
        color="#61c192"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
        style={{ height: "5px" }}
      />
      <h3 className="path text">/ <Link to="/">HOME</Link> / <strong>BLOGS</strong></h3>
    </>
  );
}
