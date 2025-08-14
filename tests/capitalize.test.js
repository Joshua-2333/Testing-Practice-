import capitalize from '../src/capitalize.js';

test('capitalizes the first letter', () => {
  expect(capitalize('hello')).toBe('Hello');
  expect(capitalize('world')).toBe('World');
});

test('returns empty string for empty input', () => {
  expect(capitalize('')).toBe('');
});
