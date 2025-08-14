import calculator from '../src/calculator.js';

test('adds numbers', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('subtracts numbers', () => {
  expect(calculator.subtract(5, 2)).toBe(3);
});

test('divides numbers', () => {
  expect(calculator.divide(6, 2)).toBe(3);
});

test('multiplies numbers', () => {
  expect(calculator.multiply(3, 4)).toBe(12);
});
