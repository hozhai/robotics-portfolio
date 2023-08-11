import React from "react";

export default function Loading({ load }) {
  return <>{load && <div className="loading-screen"></div>}</>;
}
