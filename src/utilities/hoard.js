//Collection of code that could be potentially referenced in the future.

export const truncateStr = (str, maxLength) => {
  return str.length > maxLength ? str.slice(0, maxLength - 1) + "..." : str;
};
