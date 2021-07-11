let numbers = [1, 2, 3];
let numbersArr = [
  [1, 2, 3],
  [2, 2, 4],
  [3, 6, 9],
];

function add(x, y) {
  return x + y;
}

test.each(numbers)("Add 2 to %i ", (myNum) => {
  expect(add(2, myNum)).toBe(myNum + 2);
});

test.each(numbersArr)("Add %i to %i ", (a, b, total) => {
  expect(add(a, b)).toBe(total);
});
