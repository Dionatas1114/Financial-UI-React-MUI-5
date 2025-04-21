import { Grid } from '@mui/material';
import CustomGrid from '../../../components/grid';
import useStocks from '../../../hooks/stocks';
import { Stock } from '../../../hooks/stocks/type';

const Stocks = () => {
  const { stocks, fetchStocks } = useStocks();
  return (
    <Grid container spacing={2}>
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
  );
};

export default Stocks;
