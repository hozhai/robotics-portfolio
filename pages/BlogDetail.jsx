import React from "react";
import { Link, useParams } from "react-router-dom";

import blogsData from "../data/blogsData";

export default function BlogDetail() {
  const params = useParams();

  let blog = blogsData.filter((obj) => obj.id == params.id)[0] || {};

  console.log(blog);

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
        <strong>{`${blog.title || "Not Found"}  (${
          blog.id || "Error"
        })`}</strong>
      </h3>
      <h2 className="title post--title">
        {blog.title}<span className="fake-cursor">_</span>
      </h2>
    </>
  );
}
