import React, { useEffect, useState } from "react";

const BackgroundSong = ({ imgIndex }) => {
  const [song, setSong] = useState("");

  useEffect(() => {
    var audio = document.getElementById("bgAudio");
    audio.volume = 0.3;

    const backgroundSongs = [
      "peach_castle.mp3",
      "mushroom_kingdom.mp3",
      "dream_land.mp3",
      "kongo_jungle.mp3",
      "saffron_city.mp3",
      "planet_zebes.mp3",
      "sector_z.mp3",
      "hyrule_castle.mp3",
      "yoshi_island.mp3",
    ];

    const backgroundSong = backgroundSongs[imgIndex];

    setSong(backgroundSong);
  }, [song]);

  return (
    <audio controls id="bgAudio" autoPlay="autoPlay">
      <source src={song} type="audio/mpeg"></source>
    </audio>
  );
};

export default BackgroundSong;
