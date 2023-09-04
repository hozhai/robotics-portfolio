import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import Typewriter from "typewriter-effect";
import ReactMarkdown from "react-markdown";
import humanizeDuration from "humanize-duration";

export default function Blogs({ data }) {
  const [progress, setProgress] = useState(0);

  const [filter, setFilter] = useState({ query: "", order: "", category: "" });

  const [blogsArr, setBlogsArr] = useState(
    data.map((obj) => (
      <Link to={`/blogs/${obj.id}`} className="blog--box" key={obj.id}>
        <div className="blog--img">
          <img
            src={
              obj.thumbnail ||
              "https://place-hold.it/304x171/191919/faf9f6/000&text=NotFound"
            }
            width={304}
            height={171}
          />
        </div>
        <div className="blog--content">
          <div className="blog--name title">
            {obj.title || "404 | Not Found"}
          </div>
          <ReactMarkdown
            className="blog--description text"
            children={
              obj.description ||
              "This post might not exist anymore, or an error has occurred."
            }
          />
        </div>
        <div className="blog--time">
          {humanizeDuration(Date.now() - obj.createdAt, { largest: 1 })} ago
        </div>
      </Link>
    ))
  );

  useEffect(() => {
    document.title = "<Blogs /> | Zhai";
    setProgress(100);
  }, []);

  function updateFilter(event) {
    setFilter((prevFilter) => ({
      ...prevFilter,
      [event.target.name]: event.target.value,
    }));
    console.log(
      data.filter((obj) =>
        JSON.stringify(obj).toLowerCase().includes(filter.query.toLowerCase())
      )
    );
    setBlogsArr()
  }

  // let  = data
  //   .sort((a, b) => b.createdAt - a.createdAt)
  //   ;

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
      <div className="bp--filters">
        <input
          type="text"
          placeholder="Search..."
          name="query"
          onChange={updateFilter}
          autoComplete="off"
        />
      </div>
      <div className="bp--blogs-container">{blogsArr}</div>
    </>
  );
}
