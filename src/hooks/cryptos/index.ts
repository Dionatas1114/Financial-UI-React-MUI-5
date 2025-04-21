import { useState } from 'react';
import { AxiosResponse } from 'axios';

import myCryptos from '../../mocks/cryptos';
import currencies from '../../mocks/currencies';
import { cryptoCompareApi, cryptoCompareBaseURL } from '../../services/api';
// import { round, split } from 'utils/functions';

interface Crypto {
  id: number;
  currency: string;
  coinName: string;
  regularMarketPrice: string;
  // regularMarketChangePercent: number;
  // regularMarketChange: number;
  coinImageUrl: string;
}

export type { Crypto };

const currency = currencies.USD;
const cryptoBaseURL = cryptoCompareBaseURL.replace('min-api', 'www');

export default function useCryptos() {
  const [cryptos, setCryptos] = useState<Crypto[] | []>([]);
  const fetchCryptos = async () => {
    try {
      //pricemulti
      const { data }: AxiosResponse<any> = await cryptoCompareApi.get('data/pricemultifull', {
        params: {
          fsyms: myCryptos.join(','),
          tsyms: currency,
        },
      });

      const cryptos: Crypto[] = Object.entries(data.DISPLAY)?.map(
        ([coin, data]: any, index: number) => ({
          id: index + 1,
          currency,
          coinName: coin,
          regularMarketPrice: data[currency].PRICE,
          // regularMarketChangePercent: round(crypto.regularMarketChangePercent),
          // regularMarketChange: round(crypto.regularMarketChange),
          coinImageUrl: cryptoBaseURL + data[currency].IMAGEURL,
        })
      );

      setCryptos(cryptos);
    } catch (err) {
      console.log('🚀 ~ file: index.ts:34 ~ fetchCryptos ~ err', err);
    }
  };

  const handleClickShowStocks = async () => await fetchCryptos();

  console.log('🚀 ~ file: index.tsx:88 ~ StocksGrid ~ cryptos', cryptos);

  return { handleClickShowStocks, cryptos };
}
