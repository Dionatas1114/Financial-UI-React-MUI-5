import * as React from 'react';
import { Button, Grid, Paper, Typography, Chip, Toolbar } from '@mui/material';
import { ArrowUpward, ArrowDownward } from '@mui/icons-material';

import Stocks from 'hooks/stocks';

interface Stock {
  symbol: string;
  shortName: string;
  regularMarketPrice: number;
  regularMarketChangePercent: number;
  regularMarketChange: number;
}

export type { Stock };

export default function StocksGrid() {
  const { stocks, fetchStocks: HandleClickShowStocks } = Stocks();

  return (
    <>
      <Button variant="outlined" onClick={HandleClickShowStocks} children={'Stocks'} />
      <Toolbar />
      <Grid container spacing={2}>
        {stocks.map(
          ({
            symbol,
            shortName,
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
                        <Typography gutterBottom variant="subtitle1" component="div">
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
                            label={`R$ ${change} (% ${changePercent})`}
                          />
                        ) : (
                          <Chip
                            color="error"
                            icon={<ArrowDownward />}
                            label={`R$ ${change} (% ${changePercent})`}
                          />
                        )}
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle1" component="div">
                        R$ {price}
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
