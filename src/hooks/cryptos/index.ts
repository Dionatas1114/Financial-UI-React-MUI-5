import { useState } from 'react';
import { AxiosResponse } from 'axios';

import myCryptos from 'mocks/cryptos';
import { brapiApi, cryptoCompareApi, cryptoCompareBaseURL } from 'services/api';
import { round, split } from 'utils/functions';
import currencies from 'mocks/currencies';

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
  // const { cryptos, fetchCryptos } = Cryptos();

  // const handleClickShowStocks = async () => {
  //   // await fetchStocks(myStocks);
  //   await fetchCryptos();
  // };

  const fetchCryptos = async () => {
    try {
      const { data }: AxiosResponse<any> = await cryptoCompareApi.get('data/pricemultifull', {
        //pricemulti
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

      // const cryptos: Crypto[] = Object.entries(data)?.map(
      //   ([coin, marketPrice]: any, index: number) => ({
      //     id: index + 1,
      //     currency,
      //     coinName: coin,
      //     regularMarketPrice: marketPrice[currency],
      //     // regularMarketChangePercent: round(crypto.regularMarketChangePercent),
      //     // regularMarketChange: round(crypto.regularMarketChange),
      //     // coinImageUrl: crypto.coinImageUrl,
      //   })
      // );

      // const cryptos: Crypto[] = data?.coins?.map((crypto: Crypto, index: number) => ({
      //   id: index + 1,
      //   currency: crypto.currency,
      //   coinName: split(crypto.coinName),
      //   regularMarketPrice: round(crypto.regularMarketPrice),
      //   regularMarketChangePercent: round(crypto.regularMarketChangePercent),
      //   regularMarketChange: round(crypto.regularMarketChange),
      //   coinImageUrl: crypto.coinImageUrl,
      // }));

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
