export function addCommasToRupees(amount) {
  // Convert the number to a string
  let amountString = amount?.toString();
  // Split the string into integer and decimal parts
  const parts = amountString?.split(".");
  // Add commas to the integer part
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  // Join the integer and decimal parts with a dot
  const formattedAmount = parts.join(".");
  return formattedAmount;
}
export function sortString(inputString, maxLength) {
  if (inputString?.length > maxLength) {
    return inputString?.substring(0, maxLength - 3) + "...";
  } else {
    return inputString;
  }
}

export const estimateData = [
  {
    title: "Buy",
    number: 76,
  },
  {
    title: "Sell",
    number: 16,
  },
  {
    title: "Hold",
    number: 56,
  },
];
