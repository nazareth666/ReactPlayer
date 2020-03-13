import React from "react";
import ReactPlayer from "react-player";
import "./responsive-player.css";

const ResponsivePlayer = () => {
  return (
    <div className="player-wrapper">
      <ReactPlayer
        className="react-player"
        url="http://qthttp.apple.com.edgesuite.net/1010qwoeiuryfg/sl.m3u8"
        width="100%"
        height="100%"
      />
    </div>
  );
};
export default ResponsivePlayer;
