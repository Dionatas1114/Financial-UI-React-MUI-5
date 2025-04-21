import { Grid } from '@mui/material';

import CustomGrid from '../../../components/grid';

import Cryptos, { Crypto } from '../../../hooks/cryptos';

export default function () {
  const { cryptos } = Cryptos();
  return (
    <Grid container spacing={2}>
      {cryptos?.map(
        ({
          id,
          currency,
          coinName: shortName,
          regularMarketPrice: price,
          // regularMarketChangePercent: changePercent,
          // regularMarketChange: change,
          coinImageUrl: logourl,
        }: Crypto) => (
          <CustomGrid
            key={id}
            {...{
              id,
              currency,
              symbol: shortName,
              shortName,
              price,
              logourl,
              // changePercent,
              // change,
            }}
          />
        )
      )}
    </Grid>
  );
}
