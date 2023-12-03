import calculator from "../scripts/calculator";

test('Add methods does not exist', () =>
  expect(calculator.add).toBeDefined());

test('Subtract methods does not exist', () =>
  expect(calculator.subtract).toBeDefined());

test('Divide methods does not exist', () =>
  expect(calculator.divide).toBeDefined());

test('Multiply methods does not exist', () =>
  expect(calculator.multiply).toBeDefined());

test('Adds up two numbers', () =>
  expect(calculator.add(12, 6)).toBeCloseTo(18));

test('Subtracts one number from another', () =>
  expect(calculator.subtract(12, 6)).toBeCloseTo(6));

test('Divides one number by another', () =>
  expect(calculator.divide(12, 6)).toBeCloseTo(2));

test('Multiplies two numbers', () =>
  expect(calculator.multiply(12, 6)).toBeCloseTo(72));

test('Adds up correctly when any of numbers is a string', () => {
  expect(calculator.add('12', '6')).toBeCloseTo(18);
  expect(calculator.add('12', 67)).toBeCloseTo(79);
});

test('Check for the invalid input datatype', () => {
  expect(calculator.add('a', 6)).toBe('Invalid input');
  expect(calculator.subtract('', '12')).toBe('Invalid input');
  expect(calculator.divide('0', '')).toBe('Invalid input');
  expect(calculator.multiply('a', 6)).toBe('Invalid input');
});
