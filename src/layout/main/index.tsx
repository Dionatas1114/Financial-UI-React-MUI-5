import { Button, Toolbar, Grid } from '@mui/material';

import Header from '../../layout/header';
import PlayerAppBar from '../footer/PlayerAppBar';
// import Stocks from './stocks';
// import CryptoComponent from './cryptoComponent';

import CustomGrid from '../../components/grid';

import { JamendoPlayerProvider } from '../../context/JamendoPlayerProvider';
import Cryptos, { Crypto } from '../../hooks/cryptos';
// import useStocks from '../../hooks/stocks';

export default function Main() {
  const { cryptos, handleClickShowStocks } = Cryptos();
  // const { stocks, fetchStocks } = useStocks();

  return (
    <JamendoPlayerProvider>
      <>
        <Header>
          <Button variant="contained" onClick={handleClickShowStocks}>
            {'Stocks'}
          </Button>
        </Header>
        {/* <Toolbar /> */}
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
        {/* <CryptoComponent /> */}
        {/* <Stocks /> */}
        <Toolbar />
        <PlayerAppBar /> {/* Footer */}
      </>
    </JamendoPlayerProvider>
  );
}
