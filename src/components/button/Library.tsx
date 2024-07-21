import React from 'react';

// import LibrarySong from './LibrarySong';
import { SongProps } from 'components/audio';

interface RefProps {
  audioRef?: React.LegacyRef<HTMLAudioElement> | undefined;
}

interface BooleanProps extends RefProps {
  isPlaying: boolean;
  libraryStatus?: boolean;
}

interface LibraryProps extends BooleanProps {
  songs: SongProps[];
  setCurrentSong: (value: React.SetStateAction<{ songs: SongProps[] }>) => void;
  setSongs: (value: React.SetStateAction<{ songs: SongProps[] }>) => void;
}

export type { LibraryProps, BooleanProps, RefProps };

const Library = (props: LibraryProps) => {
//   return (
//     <div className={`library ${props.libraryStatus ? 'active-library' : ' '}`}>
//       <h2>Library</h2>
//       <div className="library-songs">
//         {props.songs.map((song) => (
//           <LibrarySong
//             songs={props.songs}
//             cover={song.cover}
//             name={song.name}
//             artist={song.artist}
//             active={song.active}
//             key={song.id}
//             id={song.id}
//             setCurrentSong={props.setCurrentSong}
//             audioRef={props.audioRef}
//             isPlaying={props.isPlaying}
//             setSongs={props.setSongs}
//           />
//         ))}
//       </div>
//     </div>
//   );
};

export default Library;
