import { useState } from 'react';

import { brapiApi } from 'services/api';
import { round, split } from 'utils/functions';

import { defaultStocks } from 'mocks/stocks';
import { Stock } from './type';

export default function useStocks() {
  const [stocks, setStocks] = useState<Stock[] | []>([]);

  const fetchStocks = async (myStocks: string[] = defaultStocks) => {
    try {
      const { data } = await brapiApi.get(`/api/quote/${myStocks}`, {
        params: {
          range: '1d',
          interval: '1d',
          fundamental: true,
          dividends: true,
        },
        paramsSerializer: {
          indexes: null,
        },
      });

      const stocks: Stock[] = data?.results?.map((stock: Stock, index: number) => ({
        id: index + 1,
        currency: stock.currency,
        symbol: stock.symbol,
        shortName: split(stock.shortName),
        logourl: stock.logourl,
        regularMarketPrice: stock.regularMarketPrice,
        regularMarketChangePercent: round(stock.regularMarketChangePercent),
        regularMarketChange: round(stock.regularMarketChange),
      }));

      console.log('🚀 ~ file: index.ts:55 ~ fetchStocks ~ stocks', stocks);
      setStocks(stocks);
    } catch (err) {
      console.log('🚀 ~ file: index.ts:34 ~ fetchStocks ~ err', err);
    }
  };

  return { stocks, fetchStocks };
}
