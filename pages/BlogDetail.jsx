import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import emoji from "remark-emoji";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import "../global/css/katex.min.css";
import LoadingBar from "react-top-loading-bar";

export default function BlogDetail({ data }) {
  const [progress, setProgress] = useState(0);
  const [readProgress, setReadProgress] = useState(0);
  const params = useParams();
  const blog = data.filter((obj) => obj.id == params.id)[0] || {};

  function progressFunc() {
    let w =
      ((document.body.scrollTop || document.documentElement.scrollTop) /
        (document.documentElement.scrollHeight -
          document.documentElement.clientHeight -
          100)) *
      100;
 
    setReadProgress(w);
  }

  useEffect(() => {
    document.title = `<${blog.title || "404"} /> | Zhai`;
    setProgress(100);
    document.addEventListener("scroll", progressFunc);
    setReadProgress(0)

    return () => {
      document.removeEventListener("scroll", progressFunc);
    };
  }, [params.id]);

  return (
    <>
      <LoadingBar
        color="#61c192"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
        style={{ height: "5px" }}
      />
      <LoadingBar
        color="#55a67b"
        progress={readProgress}
        style={{ height: "7.5px", transition: "all 0s" }}
      />
      <h3 className="path text">
        /&nbsp;
        <Link to="/" className="link">
          HOME
        </Link>
        &nbsp;/&nbsp;
        <Link to="/blogs" className="link">
          BLOGS
        </Link>
        &nbsp;/&nbsp;
        <strong>{blog.title || "Not Found"}</strong>
      </h3>
      <h2 className="title post--title">
        {blog.title || "404 Not Found"}
        <span className="fake-cursor">_</span>
      </h2>

      <div className="post--thumbnail-container">
        <img
          className="post--thumbnail"
          src={
            blog.thumbnail ||
            "https://place-hold.it/1920x1080/191919/faf9f6/000&text=NotFound"
          }
        />
      </div>
      <div className="post--content-container">
        <ReactMarkdown
          className="post--content text"
          children={blog.content || "Could not fetch blog data."}
          remarkPlugins={[remarkGfm, emoji, remarkMath]}
          rehypePlugins={[rehypeKatex]}
        />
      </div>
    </>
  );
}
