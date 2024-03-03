import React from "react";
// import { playAudio } from "../util";
import { SongProps } from "components/audio";

// const songSelectHandler = (props) => {
//   const selectedSong = props.songs.filter((state) => state.id === props.id);
//   props.setCurrentSong({ ...selectedSong[0] }); //Set Active in library

//   props.songs.filter((song) =>
//     song.id === props.id
//       ? {
//           ...song,
//           active: true,
//         }
//       : {
//           ...song,
//           active: false,
//         }
//   );
//   props.setSongs(props.songs);

//   playAudio(props.isPlaying, props.audioRef);
// };

const LibrarySong = (props: SongProps) => (
  <div
    // onClick={songSelectHandler}
    className={`library-song ${props.active ? "selected" : ""}`}
  >
    <img src={props.cover} alt="" />
    <div className="song-description">
      <h3>{props.name}</h3>
      <h4>{props.artist}</h4>
    </div>
  </div>
);

export default LibrarySong;
