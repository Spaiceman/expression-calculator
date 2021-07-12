function expressionCalculator(expr) {
  let counter = 0;
  expr = expr.split(' ').join('');

  for (let i = 0; i < expr.length; i++) {
    if (expr[i] === '(') counter++;
    if (expr[i] === ')') counter--;
  }
  if (counter !== 0) throw new Error('ExpressionError: Brackets must be paired');
  if (expr.includes('/0')) throw new Error('TypeError: Division by zero.');

  return new Function(`return ${expr}`)();
}
module.exports = {
  expressionCalculator,
};
