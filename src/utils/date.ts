export const formatDate = (date: Date): string => {
  const minTwoDigits = (n: number): string => (n < 10 ? "0" : "") + n;

  return `${minTwoDigits(date.getDate())}.${minTwoDigits(
    date.getMonth() + 1
  )}.${minTwoDigits(date.getFullYear())}`;
};
