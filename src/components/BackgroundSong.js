import React, { useEffect, useState } from "react";

const BackgroundSong = ({ imgIndex }) => {
  const [song, setSong] = useState("");

  useEffect(() => {
    var audio = document.getElementById("bgAudio");
    audio.volume = 0.3;

    const backgroundSongs = [
      "background_songs/peach_castle.mp3",
      "background_songs/mushroom_kingdom.mp3",
      "background_songs/dream_land.mp3",
      "background_songs/kongo_jungle.mp3",
      "background_songs/saffron_city.mp3",
      "background_songs/planet_zebes.mp3",
      "background_songs/sector_z.mp3",
      "background_songs/hyrule_castle.mp3",
      "background_songs/yoshi_island.mp3",
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
