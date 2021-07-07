let myValue = 1;
let timer = 10000;

function add(x, y) {
  return x + y;
}

// test.only -> just run it
// test.skip -> just skip it

jest.setTimeout(1500000); // global timeout

test(
  "First ",
  () => {
    expect(add(2, 8)).toBe(10);
    myValue++;
    console.log("Inside my first test");
  },
  timer
);

test(
  "Second ",
  () => {
    expect(myValue).toBe(2);
    console.log("Inside my second test");
  },
  timer
);

test("Third ", () => {
  expect(add(2, 8)).toBe(10);
  myValue++;
  console.log("Inside my third test");
});
