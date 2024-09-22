import { Button, Grid, Toolbar } from '@mui/material';

// import Stocks from 'hooks/stocks';
// import { Stock } from 'hooks/stocks/type';
import Cryptos, { Crypto } from '../../hooks/cryptos';

// import { myStocks } from 'mocks/stocks';
import Header from '../../layout/header';
import CustomGrid from '../../components/grid';
import PlayerAppBar from '../footer';

export default function Main() {
  const { handleClickShowStocks, cryptos } = Cryptos();
  // const { stocks, fetchStocks } = Stocks();

  return (
    <>
      <Header>
        <Button variant="contained" onClick={handleClickShowStocks} children={'Stocks'} />
      </Header>
      <Toolbar />

      {/* Stocks  */}
      {/* <Grid container spacing={2}>
        {stocks?.map(
          ({
            id,
            currency,
            symbol,
            shortName,
            logourl,
            regularMarketPrice: price,
            regularMarketChangePercent: changePercent,
            regularMarketChange: change,
          }: Stock) => (
            <CustomGrid
              {...{
                id,
                currency,
                symbol,
                shortName,
                logourl,
                price,
                changePercent,
                change,
              }}
            />
          )
        )}
      </Grid>
      <Toolbar /> */}

      {/* Cryptos  */}
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
      <Toolbar />
      <PlayerAppBar />
    </>
  );
}
