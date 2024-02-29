"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  const disc = b **  2 - 4 * a * c;

  if (disc > 0) {
    const rootOne = (-b + Math.sqrt(disc)) / (2 * a);
    const rootTwo = (-b - Math.sqrt(disc)) / (2 * a);
    arr.push(rootOne, rootTwo);
  } else if (disc === 0) {
    const root = -b / (2 * a);
    arr.push(root);
  } else {
    arr = [];
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  const p = percent / 100 / 12;
  const creditBody = amount - contribution;
  const monthPay = creditBody * (p + (p / (((1 + p) ** countMonths) - 1)));
  const summ = (monthPay * countMonths).toFixed(2);
  return Number(summ)
}