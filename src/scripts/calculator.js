const calculator = {
  add: (a, b) => {
    if (isNaN(Number(a)) || isNaN(Number(b))) return 'Invalid input';
    if (a === '' || b === '') return 'Invalid input';
    return Number(a) + Number(b);
  },
  subtract: (a, b) => {
    if (isNaN(Number(a)) || isNaN(Number(b))) return 'Invalid input';
    if (a === '' || b === '') return 'Invalid input';
    return a - b;
  },
  divide: (a, b) => {
    if (isNaN(Number(a)) || isNaN(Number(b))) return 'Invalid input';
    if (a === '' || b === '') return 'Invalid input';
    return a / b;
  },
  multiply: (a, b) => {
    if (isNaN(Number(a)) || isNaN(Number(b))) return 'Invalid input';
    if (a === '' || b === '') return 'Invalid input';
    return a * b;
  }
};

export default calculator;