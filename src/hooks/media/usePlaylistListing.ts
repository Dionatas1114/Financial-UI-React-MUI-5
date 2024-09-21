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

export type { FormattedOption };

// const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

const STORAGE_MEDIAS = 'storageMedias';
const PLAYLISTS = 'playlists';

export default function usePlaylistListing() {
  const [open, setOpen] = React.useState(false);
  const [playlists, setPlaylists] = React.useState<FormattedOption[]>([]);

  const isLoading = open && playlists.length === 0;
  const handleOpen = () => setOpen((prev) => !prev);

  const handlePlaylistListing = React.useCallback(async () => {
    try {
      const response = await mediaApi.get('/playlists');
      const formattedOptions: FormattedOption[] = [];

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
  }, []);

  React.useEffect(() => {
    let active = true;

    const fetchPlaylists = async () => {
      if (active) await handlePlaylistListing();
    };

    if (isLoading && open) fetchPlaylists();

    return () => {
      active = false;
    };
  }, [isLoading, open, handlePlaylistListing]);

  React.useEffect(() => {
    if (!open) setPlaylists([]);
  }, [open]);

  return {
    playlistCount: playlists.length,
    isLoading,
    open,
    handleOpen,
    setOpen,
    playlists,
  };
}
