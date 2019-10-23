const reverseString = (string) => {
  if (typeof string !== 'string') {
    throw new Error('Input is not a string!');
  }

  let reversed = '';
  [...Array(string.length).keys()].forEach(index => {
    reversed = `${string[index]}${reversed}`;
  });

  return reversed;
}

export default reverseString
