import capitalize from '../lib/capitalize.js';

it('capitalize one word', () => {
  const originalString = 'someString';
  const capitalizedString = capitalize(originalString);

  expect(capitalizedString).toBe('SomeString');
});

it('capitalize multiple words', () => {
  const originalString = 'firstString secondWord';
  const capitalizedString = capitalize(originalString);

  expect(capitalizedString).toBe('FirstString SecondWord');
});