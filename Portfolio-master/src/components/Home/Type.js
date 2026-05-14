import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "B.Tech Computer Engineering Student",
          "MERN Stack Developer",
          "AI Enthusiast 🤖",
          "Software Developer 💻",
          "Problem Solver 🚀"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 40,
        delay: 60
      }}
    />
  );
}

export default Type;