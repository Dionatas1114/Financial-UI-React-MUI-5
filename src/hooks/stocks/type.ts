interface Stock {
  id: number;
  currency: string;
  symbol: string;
  shortName: string;
  logourl: string;
  regularMarketPrice: number;
  regularMarketChangePercent: number;
  regularMarketChange: number;
}

export type { Stock };
