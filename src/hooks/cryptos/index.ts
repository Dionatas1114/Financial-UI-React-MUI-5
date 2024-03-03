import { useState } from 'react';

import myCryptos from 'mocks/cryptos';
import { brapiApi } from 'services/api';
import { round, split } from 'utils/functions';

interface Crypto {
  id: number;
  currency: string;
  coinName: string;
  regularMarketPrice: number;
  regularMarketChangePercent: number;
  regularMarketChange: number;
  coinImageUrl: string;
}

export type { Crypto };

export default function useCryptos() {
  const [cryptos, setCryptos] = useState<Crypto[] | []>([]);
  // const { cryptos, fetchCryptos } = Cryptos();

  // const handleClickShowStocks = async () => {
  //   // await fetchStocks(myStocks);
  //   await fetchCryptos();
  // };

  const fetchCryptos = async () => {
    try {
      const { data } = await brapiApi.get('/api/v2/crypto', {
        params: {
          coin: myCryptos,
          currency: 'USD',
        },
        paramsSerializer: {
          indexes: null,
        },
      });
      console.log('🚀 ~ file: index.ts:23 ~ fetchCryptos ~ data', data.coins);

      const cryptos: Crypto[] = data?.coins?.map((crypto: Crypto, index: number) => ({
        id: index + 1,
        currency: crypto.currency,
        coinName: split(crypto.coinName),
        regularMarketPrice: round(crypto.regularMarketPrice),
        regularMarketChangePercent: round(crypto.regularMarketChangePercent),
        regularMarketChange: round(crypto.regularMarketChange),
        coinImageUrl: crypto.coinImageUrl,
      }));

      setCryptos(cryptos);
    } catch (err) {
      console.log('🚀 ~ file: index.ts:34 ~ fetchCryptos ~ err', err);
    }
  };

  const handleClickShowStocks = async () => {
    // await fetchStocks(myStocks);
    await fetchCryptos();
  };

  console.log('🚀 ~ file: index.tsx:11 ~ StocksGrid ~ cryptos', cryptos);

  return { handleClickShowStocks, cryptos };
}
