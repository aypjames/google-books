export const truncateStr = (str, maxLength) => {
  return str.length > maxLength ? str.slice(0, maxLength - 1) + "..." : str;
};
