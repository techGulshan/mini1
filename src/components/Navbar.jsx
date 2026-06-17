import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <h2>🎲 Emoji App</h2>

      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/emoji">Generator</Link> |{" "}
        <Link to="/about">About</Link>
      </nav>

      <hr />
    </div>
  );
}