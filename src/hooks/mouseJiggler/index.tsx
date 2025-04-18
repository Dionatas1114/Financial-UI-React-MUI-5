import { useState } from 'react';
import { Switch, FormGroup, FormControlLabel, FormControl } from '@mui/material';
import { mediaBaseURL } from '../../services/api';

export function MouseJiggler() {
  const [isActive, setIsActive] = useState(false);

  const toggleJiggler = async () => {
    try {
      const res = await fetch(import.meta.env.VITE_MEDIA_API_URL + '/toggle', {
        method: 'POST',
      });
      const json = await res.json();
      setIsActive(json.status === 'started');
    } catch (err) {
      console.error('Erro ao comunicar com backend:', err);
    }

    // try {
    //   const { data } = await mediaBaseURL.post('/toggle');
    //   setIsActive(data.status === 'started');
    // } catch (error) {
    //   console.error('Erro ao comunicar com backend:', error);
    // }
  };

  return (
    <FormControl component="fieldset">
      <FormGroup aria-label="position" row>
        <FormControlLabel
          value="end"
          control={<Switch color="primary" />}
          label={'Ativar Jiggler'}
          labelPlacement="end"
          onChange={toggleJiggler}
          checked={isActive}
        />
      </FormGroup>
    </FormControl>
  );
}
