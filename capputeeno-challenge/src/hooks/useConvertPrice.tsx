export const useConvertPrice = (price_in_cents: number | undefined) => {
  let price = price_in_cents === undefined ? 0 : price_in_cents;
  let priceConverted = price.toString();
  if (price > 0) {
    priceConverted =
      priceConverted.substring(0, Math.floor(priceConverted.length - 2)) +
      "," +
      priceConverted.substring(
        Math.floor(priceConverted.length - 2),
        priceConverted.length
      );
    return priceConverted;
  }
  return "0,00";
};
