import caesar from '../lib/caesarCipher';

it('shifts each caharacter by given amount', () => {
  expect(caesar.cipher({ string: 'abcde', shift: 2 })).toBe('cdefg');
});

it('wrapps from z to a', () => {
  expect(caesar.cipher({ string: 'z', shift: 2 })).toBe('b');
});

it('keeps the same case', () => {
  expect(caesar.cipher({ string: 'aBcdE', shift: 2 })).toBe('cDefG');
  expect(caesar.cipher({ string: 'zZ', shift: 2 })).toBe('bB');
});

it('returns non alphapet characters unshifted', () => {
  expect(caesar.cipher({ string: 'a!@#$%^&*()C', shift: 1 })).toBe('b!@#$%^&*()D');
});

it('handles spicial letters as normal letters', () => {
  expect(caesar.cipher({ string: 'abcéèêüöàxyz', shift: 1 })).toBe('bcdfffvpbyza');
});