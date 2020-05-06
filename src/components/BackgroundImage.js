import React, { useEffect, useState } from "react";

const BackgroundImage = ({ imgIndexProp }) => {
  const [bgImg, setbgImg] = useState("");

  useEffect(() => {
    const backgroundImgs = [
      "background_images/mario.jpg",
      "background_images/mario2.png",
      "background_images/kirby.jpg",
      "background_images/donkey_kong.jpg",
      "background_images/pokemon.jpeg",
      "background_images/samus.png",
      "background_images/starfox.jpg",
      "background_images/zelda.png",
      "background_images/yoshi.png",
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
