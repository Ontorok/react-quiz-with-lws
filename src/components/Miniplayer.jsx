import React, { useState } from "react";
import ReactPlayer from "react-player";
import classes from "../styles/Miniplayer.module.css";

const Miniplayer = ({ videoId, title }) => {
  const [miniPlayOpen, setMiniPlayOpen] = useState(false);
  const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
  function toggleMiniPlayer() {
    if (miniPlayOpen) {
      setMiniPlayOpen(false);
    } else {
      setMiniPlayOpen(true);
    }
  }
  return (
    <div
      className={`${classes.miniPlayer} ${
        !miniPlayOpen && classes.floatingBtn
      }`}
      onClick={toggleMiniPlayer}
    >
      <span className={`material-icons-outlined ${classes.open}`}>
        play_circle_filled
      </span>
      <span className={`material-icons-outlined ${classes.close}`}>close</span>
      <ReactPlayer
        className={classes.player}
        url={videoUrl}
        width="300px"
        height="168px"
        playing={miniPlayOpen}
        controls
      />
      <p>{title}</p>
    </div>
  );
};

export default Miniplayer;
