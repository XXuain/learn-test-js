let myValue = 1;

function add(x, y) {
  return x + y;
}

test("First ", () => {
  expect(add(2, 8)).toBe(10);
  expect(add(2, 5)).toBe(7);
});
