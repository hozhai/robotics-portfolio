import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import emoji from "remark-emoji";
import humanizeDuration from "humanize-duration";

export default function BlogDetail({ data }) {
  const params = useParams();
  const blog = data.filter((obj) => obj.id == params.id)[0] || {};

  useEffect(() => {
    document.title = `<${blog.title || "404"} /> | Zhai`;
  }, [params.id]);

  return (
    <>
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
          remarkPlugins={[remarkGfm, emoji]}
        />
      </div>
    </>
  );
}
