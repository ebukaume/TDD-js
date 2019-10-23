import calculator from '../lib/calculator';

it('returns the sum of integers', () => {
  expect(calculator.add(10, 455, 20)).toBe(485);
});

it('returns the sum of floats', () => {
  expect(calculator.add(10.0002, 455.00025, 20)).toBeCloseTo(485.00045);
});

it('returns the difference between integers', () => {
  expect(calculator.subtract(10, 455, 20)).toBe(-465);
});

it('returns the difference between  floats', () => {
  expect(calculator.subtract(10.0002, 455.00025, 20)).toBeCloseTo(-465.00005);
});

it('returns the product of integers', () => {
  expect(calculator.divide(455, 10, 5)).toBe(9.1);
});

it('returns the product of floats', () => {
  expect(calculator.divide(120.5, 10, 5)).toBeCloseTo(2.41);
});

it('returns the quotient of integers', () => {
  expect(calculator.multiply(10, 455 * 5)).toBe(22750);
});

it('returns the quotient of floats', () => {
  expect(calculator.multiply(10.2, 100 * 5.5)).toBeCloseTo(5610);
});
