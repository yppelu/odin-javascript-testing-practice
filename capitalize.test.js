import capitalize from "./capitalize";

test('Capitalize lowercase string', () =>
  expect(capitalize('lowercase string')).toBe('Lowercase string'));

test('Doesn\'t change capitalized string', () =>
  expect('Capitalized string').toBe('Capitalized string'));