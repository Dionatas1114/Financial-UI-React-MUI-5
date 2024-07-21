// import React from 'react';
import { BooleanProps } from './Library';
import { SongProps } from 'components/audio';

const Song = (props: SongProps & BooleanProps) => {
  return (
    <div className="song-container">
      <img className={props.isPlaying ? 'rotateSong' : ''} src={props.cover} alt="" />
      <h2>{props.name}</h2>
      <h3>{props.artist}</h3>
    </div>
  );
};

export default Song;
