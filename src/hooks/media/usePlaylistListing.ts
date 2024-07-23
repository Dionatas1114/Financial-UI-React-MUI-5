import React from 'react';

import { mediaApi } from '../../services/api';

interface Song {
  id: number;
  title: string;
  url?: string;
}

interface PlayList {
  id: number;
  title: string;
  songs: Song[];
  genre?: string;
  creator?: {
    name: string;
    email: string;
  };
  createdAt?: string;
  updatedAt?: string;
  isFavorite?: boolean;
}

interface PlaylistEntry {
  storageMedias?: PlayList[];
  playlists?: PlayList[];
}

interface FormattedOption {
  title: string;
  firstLetter: string;
}

// const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

const STORAGE_MEDIAS = 'storageMedias';
const PLAYLISTS = 'playlists';

export default function usePlaylistListing() {
  const [playlists, setPlaylists] = React.useState<FormattedOption[]>([]);

  const handlePlaylistListing = async () => {
    try {
      const response = await mediaApi.get('/playlists');
      const formattedOptions: React.SetStateAction<FormattedOption[]> = [];

      response.data.forEach((playlistEntry: PlaylistEntry) => {
        if (STORAGE_MEDIAS in playlistEntry) {
          playlistEntry?.storageMedias?.forEach((song: Song) => {
            formattedOptions.push({
              title: song.title,
              firstLetter: STORAGE_MEDIAS.toUpperCase(),
            });
          });
        } else if (PLAYLISTS in playlistEntry) {
          playlistEntry?.playlists?.forEach((playlist: PlayList) => {
            playlist.songs.forEach((song: Song) => {
              formattedOptions.push({
                title: song.title,
                firstLetter: playlist.title.toUpperCase(),
              });
            });
          });
        }
      });

      setPlaylists(formattedOptions);
    } catch (error) {
      console.error('Erro ao carregar playlists:', error);
    }
  };

  return { handlePlaylistListing, playlists, playlistCount: playlists.length };
}
