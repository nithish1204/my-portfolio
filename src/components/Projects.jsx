import React from "react";
import Header2 from "./Header2";
import working from "../images/working.gif";

function projects() {
  return (
    <div>
    <section id="projects">
    <Header2/>
      <h2>Working on it</h2>
      <div class="project-gif">
        <img src={working} alt="" />
      </div>
    </section>
    </div>
  );
}

export default projects;
