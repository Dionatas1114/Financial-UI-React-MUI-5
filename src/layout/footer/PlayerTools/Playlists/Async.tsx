import React from 'react';
import { TextField, Autocomplete, CircularProgress, styled, lighten, darken } from '@mui/material';
import usePlaylistListing from '../../../../hooks/media/usePlaylistListing';

// colocar num arquivo styles.ts
const GroupHeader = styled('div')(({ theme }) => ({
  position: 'sticky',
  top: '-8px',
  padding: '4px 10px',
  color: theme.palette.primary.main,
  backgroundColor:
    theme.palette.mode === 'light'
      ? lighten(theme.palette.primary.light, 0.85)
      : darken(theme.palette.primary.main, 0.8),
}));

const GroupItems = styled('ul')({
  padding: 0,
});

export default function Asynchronous() {
  const { handlePlaylistListing, playlists } = usePlaylistListing();

  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState<any[]>([]); //tipar isso
  const [selectedOption, setSelectedOption] = React.useState<any>(null); //tipar isso

  const isLoading = open && options.length === 0;

  // criar hook e tipar
  React.useEffect(() => {
    let active = true;

    const fetchPlaylists = async () => {
      await handlePlaylistListing();
      if (active) setOptions(playlists);
    };

    if (isLoading) fetchPlaylists();

    return () => {
      active = false;
    };
  }, [handlePlaylistListing, isLoading]);

  React.useEffect(() => {
    if (!open) setOptions([]);
  }, [open]);

  const handleOptionChange = (_: React.ChangeEvent<{}>, songSelected: any) => {
    console.log('🚀 ~ handleOptionChange ~ songSelected:', songSelected); //tipar isso
    setSelectedOption(songSelected);
    //implementar o play aqui da musica selecionada
  };

  return (
    <Autocomplete
      id="playlists"
      options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
      groupBy={(option) => option.firstLetter}
      getOptionLabel={(option) => option.title}
      sx={{ width: 300 }}
      loading={isLoading}
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      onChange={handleOptionChange}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Playlists"
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {isLoading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
      renderGroup={(params) => (
        <li key={params.key}>
          <GroupHeader>{params.group}</GroupHeader>
          <GroupItems>{params.children}</GroupItems>
        </li>
      )}
    />
  );
}
