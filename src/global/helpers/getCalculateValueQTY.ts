export default (value: number, qtyOrigin: number, qtyCorrection: number) => {
  const valueOrigin = value / qtyOrigin;
  return valueOrigin * qtyCorrection;
};
