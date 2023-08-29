import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import Typewriter from "typewriter-effect";

export default function Blogs() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    document.title = "<Blogs /> | Zhai";
    setProgress(100);
  }, []);

  return (
    <>
      <LoadingBar
        color="#61c192"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
        style={{ height: "5px" }}
      />
      <h3 className="path text">
        /&nbsp;
        <Link to="/" className="link">
          HOME
        </Link>
        &nbsp;/&nbsp;<strong>BLOGS</strong>&nbsp;/
      </h3>
      <h2 className="bp--title title">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("Blogs")
              .pauseFor(1000)
              .deleteChars(5)
              .typeString("Posts")
              .pauseFor(1000)
              .deleteChars(5)
              .typeString("Uploads")
              .pauseFor(1000)
              .deleteChars(7)
              .typeString("News")
              .pauseFor(1000)
              .deleteChars(4)
              .typeString("Journals")
              .pauseFor(1000)
              .start();
          }}
          options={{
            cursor: "_",
            loop: true,
          }}
        />
      </h2>
    </>
  );
}
