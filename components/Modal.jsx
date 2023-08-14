import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function Modal(props) {
  return (
    <div className="modal">
      <div className="modal--bg"></div>
      <div className="modal--content">
        <h2 className="title modal--title">Hey!</h2>
        <span className="modal--text">
          <ReactMarkdown children={props.content} remarkPlugins={[remarkGfm]} />
        </span>
        <div className="modal--close">X</div>
      </div>
    </div>
  );
}
