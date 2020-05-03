import React, { useState } from "react";
import "../style.css";
import classNames from "classnames";

const BackgroundImage = ({ selectImage }) => {
  const [bgImg, setbgImg] = useState("");

  const backgroundImgs = [
    "./1.jpg",
    "./2.jpg",
    "./granite.jpg",
    "./donkey_kong.jpg",
  ];
  const backgroundImg =
    backgroundImgs[Math.floor(Math.random() * backgroundImgs.length)];
  // console.log(backgroundImg, "ifi tdoesnt works");

  if (bgImg === "") {
    selectImage(backgroundImg);
  }

  return <div className="questionBox"> shutup</div>;
};

export default BackgroundImage;
