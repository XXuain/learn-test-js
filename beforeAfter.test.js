let myValue = 1;

function add(x, y) {
  return x + y;
}

// before each test
beforeEach(() => {
  console.log("Before test func");
  myValue = 1;
});

// after each test
afterEach(() => {
  console.log("After test func");
});

// before all test
beforeAll(() => {
  console.log("Before all test func");
  myValue = 1;
});

// after all test
afterAll(() => {
  console.log("After all test func");
});

test("First ", () => {
  expect(add(2, 8)).toBe(10);
  myValue++;
  console.log("Inside my first test");
});

test("Second ", () => {
  expect(myValue).toBe(1);
  console.log("Inside my second test");
});
