const round = (value: number) => Math.round(value * 100) / 100;

const currencyFormat = (number: number) =>
  new Intl.NumberFormat('pt-BR', {
    maximumFractionDigits: 2,
  }).format(number);

const split = (value: string) =>
  value
    .trim()
    .replace('ON', '')
    .replace('PN', '')
    .replace('NM', '')
    .replace('N2', '')
    .replace('USD', '');

export { round, split, currencyFormat };
