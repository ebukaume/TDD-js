import analyze from '../lib/array_analysis.js';

it('returns an object with the min, max, length and average of the elements', () => {
  const input = [1,2,3,4];

  const expectedObject = {
    min: 1,
    max: 4,
    length: 4,
    average: 2.5
  }
  expect(analyze(input)).toEqual(expectedObject)
});