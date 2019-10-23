import reverseString from '../lib/reverse_string.js';

it('returns the string in the reverse order', () => {
  const originalString = 'straight';
  const reversedString = reverseString(originalString);

  expect(reversedString).toBe('thgiarts');
});

it('throws an error for non string inputs', () => {
  const badCall = () => {
    const originalString = 1;
    reverseString(originalString);
  }
  
  expect(badCall).toThrow(new Error('Input is not a string!'));
});
