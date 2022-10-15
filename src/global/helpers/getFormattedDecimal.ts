export default (value: number): number => {
  const valueDecimal = Number((Math.abs(value) * 100).toPrecision(15));
  return (Math.round(valueDecimal) / 100) * Math.sign(value);
};
