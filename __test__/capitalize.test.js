import capitalize from '../lib/capitalize.js';

it('capitalizes one word', () => {
  const originalString = 'someString';
  const capitalizedString = capitalize(originalString);

  expect(capitalizedString).toBe('SomeString');
});

it('capitalizes multiple words in a sentence', () => {
  const originalString = 'firstString secondWord';
  const capitalizedString = capitalize(originalString);

  expect(capitalizedString).toBe('FirstString SecondWord');
});

it('throws an error for non string inputs', () => {
  const badCall = () => {
    const originalString = 1;
    capitalize(originalString);
  };

  expect(badCall).toThrow(new Error('Input is not a string!'));
});
