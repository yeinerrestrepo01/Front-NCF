export default (value: number): string => {
  if (value && value > 0) {
    const options = { style: 'currency', currency: 'COP', minimumFractionDigits: 0 };
    const newValue = new Intl.NumberFormat('es-CO', options).format(value);
    const formatValue = newValue.split('$');
    return formatValue[1];
  }
  return value.toString();
};
