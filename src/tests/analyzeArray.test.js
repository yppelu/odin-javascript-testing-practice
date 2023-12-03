import analyzeArray from "../scripts/analyzeArray";

test('Takes an array of numbers and returns a required object', () => {
  const array = [1, 8, 3, 4, 2, 6];
  expect(analyzeArray(array))
    .toEqual({ average: 4, min: 1, max: 8, length: 6 });
});

test('Correct output for an array with only one number', () => {
  expect(analyzeArray([0]))
    .toEqual({ average: 0, min: 0, max: 0, length: 1 });
});

test('Treats stringed numbers as valid', () =>
  expect(analyzeArray([1, '2', 3]))
    .toEqual({ average: 2, min: 1, max: 3, length: 3 }));

test('Correct output for an empty array', () => {
  expect(analyzeArray([]))
    .toEqual({ average: null, min: null, max: null, length: 0 });
});

test('Outputs a correct message if an array contains not a valid number', () => {
  expect(analyzeArray([2, 'a', 3]))
    .toEqual('Array contains not valid number(s)');
  expect(analyzeArray([4, null, 7]))
    .toEqual('Array contains not valid number(s)');
  expect(analyzeArray([3, undefined, 12]))
    .toEqual('Array contains not valid number(s)');
  expect(analyzeArray([0, NaN, 5]))
    .toEqual('Array contains not valid number(s)');
  expect(analyzeArray([{ num1: 1, num2: 2, num3: 3 }]))
    .toEqual('Array contains not valid number(s)');
});
