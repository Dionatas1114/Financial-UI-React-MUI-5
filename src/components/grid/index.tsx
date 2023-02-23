import * as React from 'react';
import { Button, Grid, Paper, Typography, Chip, Toolbar, Avatar } from '@mui/material';
import { ArrowUpward, ArrowDownward } from '@mui/icons-material';

import Stocks, { Stock } from 'hooks/stocks';
import Cryptos from 'hooks/cryptos';

import { myStocks } from 'mocks/stocks';
import currencies from 'mocks/currencies';
import Header from 'layout/header';

export default function StocksGrid() {
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
      <Grid container spacing={2}>
        {stocks.map(
          ({
            currency,
            symbol,
            shortName,
            logourl,
            regularMarketPrice: price,
            regularMarketChangePercent: changePercent,
            regularMarketChange: change,
          }: Stock) => (
            <React.Fragment key={symbol}>
              <Paper
                sx={{
                  p: 2,
                  // margin: 'auto',
                  minWidth: 300,
                  maxWidth: 400,
                  flexGrow: 1,
                  backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#1A2027' : '#fff'),
                }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                      <Grid item xs>
                        <Avatar src={logourl} />
                        <Typography variant="subtitle1" gutterBottom>
                          {shortName}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {symbol}
                        </Typography>
                      </Grid>
                      <Grid item>
                        {changePercent >= 0 ? (
                          <Chip
                            color="success"
                            icon={<ArrowUpward />}
                            label={`${currencies[currency]} ${change} (% ${changePercent})`}
                          />
                        ) : (
                          <Chip
                            color="error"
                            icon={<ArrowDownward />}
                            label={`${currencies[currency]} ${change} (% ${changePercent})`}
                          />
                        )}
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle1">
                        {`${currencies[currency]} ${price}`}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </React.Fragment>
          )
        )}
      </Grid>
    </>
  );
}
