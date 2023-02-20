import { useState } from 'react';

import myStocks from 'mocks/stocks';
import { api } from 'services/api';
import { Stock } from 'components/grid';
import { round, split } from 'utils/functions';

export default function useStocks() {
  const [stocks, setStocks] = useState<Stock[] | []>([]);

  const fetchStocks = async () => {
    try {
      const { data } = await api.get(`/api/quote/${myStocks}`);

      const stocks: Stock[] = data?.results?.map((stock: Stock) => {
        return {
          symbol: stock.symbol,
          shortName: split(stock.shortName),
          regularMarketPrice: stock.regularMarketPrice,
          regularMarketChangePercent: round(stock.regularMarketChangePercent),
          regularMarketChange: round(stock.regularMarketChange),
        };
      });

      setStocks(stocks);
    } catch (err) {
      console.log('🚀 ~ file: index.ts:34 ~ fetchStocks ~ err', err);
    }
  };

  return { stocks, fetchStocks };
}
