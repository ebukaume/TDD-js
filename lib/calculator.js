const calculator = (() => {
  const add = (...args) => args.reduce((acc, curr) => acc + curr);
  const subtract = (...args) => args.reduce((acc, curr) => acc - curr);
  const divide = (...args) => args.reduce((acc, curr) => acc / curr);
  const multiply = (...args) => args.reduce((acc, curr) => acc * curr);

  return {
    add, subtract, divide, multiply,
  };
})();

export default calculator;