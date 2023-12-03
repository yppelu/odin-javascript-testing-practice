export default function analyzeArray(array) {
  if (array.length === 0) {
    return { average: null, min: null, max: null, length: 0 };
  }

  const object = {
    length: array.length,
    average: 0,
    min: Infinity,
    max: -Infinity
  };

  for (let i = 0; i < array.length; i++) {
    if (isNaN(Number(array[i])) || array[i] === null)
      return 'Array contains not valid number(s)';

    const current = Number(array[i]);
    object.average += current;
    object.min = Math.min(object.min, current);
    object.max = Math.max(object.max, current);
  }
  object.average = object.average / object.length;

  return object;
}