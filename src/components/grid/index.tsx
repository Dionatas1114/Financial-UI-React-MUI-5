import { Grid, Paper, Typography, Avatar } from '@mui/material'; //Chip
// import { ArrowUpward, ArrowDownward } from '@mui/icons-material';
// import { currencyFormat } from 'utils/functions';

// import currencies from 'mocks/currencies';

interface CustomGridPros {
  id: number;
  currency: string;
  price: string | number;
  shortName: string;
  logourl: string;
  // symbol: string;
  // changePercent: number;
  // change: number;
}

export default function CustomGrid(props: CustomGridPros) {
  // currency, symbol, changePercent, change
  const { id, shortName, price, logourl } = props;
  // const chipLabel = `${currencies[currency]} ${change} (% ${changePercent})`;

  return (
    <>
      <Grid item md={4} key={id}>
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
                  {/* <Typography variant="body2" color="text.secondary">
                    {symbol}
                  </Typography> */}
                </Grid>
                {/* <Grid item>
                  {changePercent >= 0 ? (
                    <Chip color="success" icon={<ArrowUpward />} label={chipLabel} />
                  ) : (
                    <Chip color="error" icon={<ArrowDownward />} label={chipLabel} />
                  )}
                </Grid> */}
              </Grid>
              <Grid item>
                <Typography
                  variant="subtitle1"
                  children={price}
                  // children={`${currencies[currency]} ${currencyFormat(price)}`}
                />
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </>
  );
}
