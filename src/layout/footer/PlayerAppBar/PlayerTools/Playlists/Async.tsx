import React from 'react';
import { TextField, Autocomplete, CircularProgress } from '@mui/material';

import { GroupHeader, GroupItems } from './styles';
import usePlaylistListing, { FormattedOption } from '../../../../../hooks/media/usePlaylistListing';

export default function Asynchronous() {
  const { handleOpen, isLoading, open, setOpen, playlists } = usePlaylistListing();

  const [selectedOption, setSelectedOption] = React.useState<any>(null); //tipar isso
  // const [open, setOpen] = React.useState(false);
  // const [options, setOptions] = React.useState<FormattedOption[]>([]);

  // const isLoading = open && options.length === 0;

  // // criar hook e tipar
  // React.useEffect(() => {
  //   let active = true;

  //   const fetchPlaylists = async () => {
  //     await handlePlaylistListing();
  //     if (active) setOptions(playlists);
  //   };

  //   if (isLoading) fetchPlaylists();

  //   return () => {
  //     active = false;
  //   };
  // }, [handlePlaylistListing, isLoading]);

  // React.useEffect(() => {
  //   if (!open) setOptions([]);
  // }, [open]);

  const handleOptionChange = (_: React.ChangeEvent<{}>, songSelected: any) => {
    console.log('🚀 ~ handleOptionChange ~ songSelected:', songSelected); //tipar isso
    setSelectedOption(songSelected);
    //implementar o play aqui da musica selecionada
  };

  return (
    <Autocomplete
      id="playlists"
      options={playlists.sort(
        (a: FormattedOption, b: FormattedOption) => -b.firstLetter.localeCompare(a.firstLetter)
      )}
      groupBy={(option) => option.firstLetter}
      getOptionLabel={(option) => option.title}
      sx={{ width: 300 }}
      loading={isLoading}
      open={open}
      onOpen={handleOpen}
      onClose={handleOpen}
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
