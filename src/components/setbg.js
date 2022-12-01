import React from "react";

function setBg({ color }) {
  return document.documentElement.style.setProperty("--bodyColor", color);
}

export default setBg;
