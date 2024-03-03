import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faPlay,
//   faAngleLeft,
//   faAngleRight,
//   faPause,
//   faVolumeDown,
// } from "@fortawesome/free-solid-svg-icons";

// import { playAudio } from "../util";

const Player = ({
  isPlaying,
  setIsPlaying,
  audioRef,
  songInfo,
  setSongInfo,
  currentSong,
  songs,
  setCurrentSong,
  setSongs,
}: any) => {
  // const [activeVolume, setActiveVolume] = useState(false);

  // const activeLibraryHandler = (nextPrev) => {
  //   //UseEffect Update List
  //   songs.filter((song) =>
  //     song.id === nextPrev.id
  //       ? {
  //           ...song,
  //           active: true,
  //         }
  //       : {
  //           ...song,
  //           active: false,
  //         }
  //   );

  //   setSongs(songs);
  // };

  // const background = `linear-gradient(to right, ${currentSong.color[0]},${currentSong.color[1]})`;
  // const transform = `translateX(${songInfo.animationPercentage}%)`; //trackAnim

  // //Event Handlers
  // const getTime = (time) =>
  //   Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2);

  // const changeVolume = (e) => {
  //   let value = e.target.value;
  //   audioRef.current.volume = value;
  //   setSongInfo({ ...songInfo, volume: value });
  // };

  // const dragHandler = (e) => {
  //   audioRef.current.currentTime = e.target.value;
  //   setSongInfo({ ...songInfo, currentTime: e.target.value });
  // };

  // const playSongHandler = () => {
  //   if (isPlaying) {
  //     audioRef.current.pause();
  //     setIsPlaying(!isPlaying);
  //   } else {
  //     audioRef.current.play();
  //     setIsPlaying(!isPlaying);
  //   }
  // };

  // const skipTrackHandler = async (direction) => {
  //   let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
  //   let newIndex;

  //   if (direction === "skip-forward") {
  //     newIndex = (currentIndex + 1) % songs.length;
  //   } else if (direction === "skip-back") {
  //     newIndex = (currentIndex - 1 + songs.length) % songs.length;
  //   }

  //   await setCurrentSong(songs[newIndex]);
  //   activeLibraryHandler(songs[newIndex]);

  //   if (direction === "skip-back" && currentIndex === 0) {
  //     playAudio(isPlaying, audioRef);
  //   } else if (isPlaying) {
  //     audioRef.current.play();
  //   }
  // };

  // return (
  //   <div className="player">
  //     <div className="time-control">
  //       <p>{getTime(songInfo.currentTime)}</p>
  //       <div style={{ background }} className="track">
  //         <input
  //           value={songInfo.currentTime}
  //           type="range"
  //           max={songInfo.duration || 0}
  //           min={0}
  //           onChange={dragHandler}
  //         />
  //         <div style={{ transform }} className="animate-track" />
  //       </div>
  //       <p>{songInfo.duration ? getTime(songInfo.duration) : "0:00"}</p>
  //     </div>
  //     <div className="play-control">
  //       <FontAwesomeIcon
  //         onClick={() => skipTrackHandler("skip-back")}
  //         className="skip-back"
  //         size="2x"
  //         icon={faAngleLeft}
  //       />
  //       <FontAwesomeIcon
  //         onClick={playSongHandler}
  //         className="play"
  //         size="2x"
  //         icon={isPlaying ? faPause : faPlay}
  //       />
  //       <FontAwesomeIcon
  //         className="skip-forward"
  //         size="2x"
  //         icon={faAngleRight}
  //         onClick={() => skipTrackHandler("skip-forward")}
  //       />
  //       <FontAwesomeIcon
  //         onClick={() => setActiveVolume(!activeVolume)}
  //         icon={faVolumeDown}
  //       />
  //       {activeVolume && (
  //         <input
  //           onChange={changeVolume}
  //           value={songInfo.volume}
  //           max="1"
  //           min="0"
  //           step="0.01"
  //           type="range"
  //         />
  //       )}
  //     </div>
  //   </div>
  // );
};

export default Player;
