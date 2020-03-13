import React from "react";
import "./styles.css";
import ReactPlayer from "react-player";
import "./responsive-player.css";

export default function App() {
  return (
    <div className="App ">
      <div className="player-wrapper">
        <ReactPlayer
          className="react-player"
          url="https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8"
          playing
          volume="0"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
}
