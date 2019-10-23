const capitalize = (string) => {
  const firstChr = string.charAt(0).toUpperCase();
  const rest = string.slice(1);

  return `${firstChr}${rest}`;
};

export default capitalize;