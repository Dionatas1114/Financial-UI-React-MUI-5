const round = (value: number) => Math.round(value * 100) / 100;

const split = (value: string) =>
  value.replace('ON', '').replace('PN', '').replace('NM', '').replace('N2', '');

export { round, split };
