const formatPrice = (amount, code = 'it-IT', currency = 'EUR') => {
  return new Intl.NumberFormat(code, {
    style: 'currency',
    currency,
  }).format(amount);
};

export default formatPrice;
