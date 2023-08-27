import React from "react";
import { Link, useParams } from "react-router-dom";

export default function BlogDetail() {
  const params = useParams();
  return (
    <>
      <h3 className="path text">
        / <Link to="/">HOME</Link> / <Link to="/blogs">BLOGS</Link> / <strong></strong>
      </h3>
      <h1>{JSON.stringify(params)}</h1>
    </>
  );
}
