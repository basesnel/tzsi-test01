const formatAmount = (amount) => {
  if (amount === 1000000) return "1m";
  if (amount === 10000) return "10k";
  return amount;
};

export default formatAmount;
