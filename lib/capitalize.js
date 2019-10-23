const capitalize = (string) => {
  if (typeof string !== 'string') {
    throw new Error('Input is not a string!');
  }
  const originalWords = string.split(' ');
  const capitalizedWords = originalWords.map((word) => {
    const firstChr = word.charAt(0).toUpperCase();
    const rest = word.slice(1);

    return `${firstChr}${rest}`;
  });

  return capitalizedWords.join(' ');
};

export default capitalize;
