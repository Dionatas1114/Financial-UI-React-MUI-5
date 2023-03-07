import { Button, Grid, Toolbar } from '@mui/material';

import Stocks, { Stock } from 'hooks/stocks';
import Cryptos, { Crypto } from 'hooks/cryptos';

import { myStocks } from 'mocks/stocks';
import Header from 'layout/header';
import CustomGrid from 'components/grid';

export default function Main() {
  const { stocks, fetchStocks } = Stocks();
  const { cryptos, fetchCryptos } = Cryptos();
  console.log('🚀 ~ file: index.tsx:11 ~ StocksGrid ~ cryptos', cryptos);

  const handleClickShowStocks = async () => {
    await fetchStocks(myStocks);
    await fetchCryptos();
  };

  return (
    <>
      <Header>
        <Button variant="contained" onClick={handleClickShowStocks}>
          {'Stocks'}
        </Button>
      </Header>
      <Toolbar />

      {/* Stocks  */}
      <Grid container spacing={2}>
        {stocks.map(
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
      <Toolbar />

      {/* Cryptos  */}
      <Grid container spacing={2}>
        {cryptos.map(
          ({
            id,
            currency,
            coinName: shortName,
            regularMarketPrice: price,
            regularMarketChangePercent: changePercent,
            regularMarketChange: change,
            coinImageUrl: logourl,
          }: Crypto) => (
            <CustomGrid
              {...{
                id,
                currency,
                symbol: shortName,
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
    </>
  );
}
