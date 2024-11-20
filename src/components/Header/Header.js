import React from "react";
import "./HeaderStyle.css";
import ProgressBar from "../ProgressBar/ProgressBar";

export default function Header({ sliderStep }) {
  return (
    <div className="header">
      <ProgressBar />
      <div>Header {sliderStep}</div>
    </div>
  );
}
