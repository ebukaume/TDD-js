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