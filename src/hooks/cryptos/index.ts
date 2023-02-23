import { useState } from 'react';

import myCryptos from 'mocks/cryptos';
import { api } from 'services/api';
import { round } from 'utils/functions';

interface Crypto {
  coinName: string;
  regularMarketPrice: number;
  regularMarketChangePercent: number;
  regularMarketChange: number;
  coinImageUrl: string;
}

export type { Crypto };

export default function useCryptos() {
  const [cryptos, setCryptos] = useState<Crypto[] | []>([]);

  const fetchCryptos = async () => {
    try {
      const { data } = await api.get('/api/v2/crypto', {
        params: {
          coin: myCryptos,
          currency: 'BRL',
        },
        paramsSerializer: {
          indexes: null,
        },
      });
      console.log('🚀 ~ file: index.ts:23 ~ fetchCryptos ~ data', data);

      const cryptos: Crypto[] = data?.coins?.map((crypto: Crypto) => {
        return {
          coinName: crypto.coinName,
          regularMarketPrice: round(crypto.regularMarketPrice),
          regularMarketChangePercent: round(crypto.regularMarketChangePercent),
          regularMarketChange: round(crypto.regularMarketChange),
          coinImageUrl: crypto.coinImageUrl,
        };
      });

      setCryptos(cryptos);
    } catch (err) {
      console.log('🚀 ~ file: index.ts:34 ~ fetchCryptos ~ err', err);
    }
  };

  return { cryptos, fetchCryptos };
}
