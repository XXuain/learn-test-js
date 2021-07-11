let myValue = 5;
let name = "yellow";
let animals = ["lion", "zebra", "snake"];

test("Matchers", () => {
  expect(myValue).toBe(5);
  expect(myValue).toEqual(5);

  expect(myValue).toBeGreaterThan(4); // > 4
  expect(myValue).toBeLessThan(10); // < 10

  expect(myValue).toBeGreaterThanOrEqual(4); // >= 4
  expect(myValue).toBeLessThanOrEqual(10); // <= 10

  expect(name).toMatch(/ye/i);

  expect(animals).toContain("lion");
  expect(animals).not.toContain("tiger");
});

// truthy falsy

let p = null;

test("TruThy or Falsy", () => {
  expect(p).toBeNull();

  expect(p).toBeDefined();
  expect(p).not.toBeUndefined();

  expect(p).toBeFalsy();
  expect(p).not.toBeTruthy();
});
