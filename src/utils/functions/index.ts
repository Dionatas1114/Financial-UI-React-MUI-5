const round = (value: number) => Math.round(value * 100) / 100;

const getRandomNumber = (min: number = 10, max: number = 99, round = true): number => {
  const randomNumber = Math.random() * (max - min + 1) + min;
  return round ? Math.floor(randomNumber) : randomNumber;
};

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

export { round, split, currencyFormat, getRandomNumber };
