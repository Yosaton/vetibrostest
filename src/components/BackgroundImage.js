import React, { useEffect, useState } from "react";

const BackgroundImage = ({ imgIndexProp }) => {
  const [bgImg, setbgImg] = useState("");

  useEffect(() => {
    const backgroundImgs = [
      "./mario.jpg",
      "./mario2.png",
      "./kirby.jpg",
      "./donkey_kong.jpg",
      "./pokemon.jpeg",
      "./samus.png",
      "./starfox.jpg",
      "./zelda.png",
      "./yoshi.png",
    ];

    const backgroundImg =
      backgroundImgs[Math.floor(Math.random() * backgroundImgs.length)];

    if (bgImg === "") {
      setbgImg(backgroundImg);
      imgIndexProp(backgroundImgs.indexOf(backgroundImg));
    }

    document.getElementsByClassName("container")[0].style.backgroundImage =
      "url('" + bgImg + "')";
  }, [bgImg]);

  return null;
};

export default BackgroundImage;
