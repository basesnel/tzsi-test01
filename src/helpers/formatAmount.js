const formatAmount = (amount) => {
  if (!amount) return `$ ${amount}`;
  if (!(amount % 1000000)) return `$ ${amount / 1000000}m`;
  if (!(amount % 1000)) return `$ ${amount / 1000}k`;
  return `$ ${amount}`;
};

export default formatAmount;
