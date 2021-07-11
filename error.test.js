function check() {
  throw new Error("fatal mistake");
}

test("Error", () => {
  expect(check).toThrow();
  expect(check).toThrow(Error);
  expect(check).toThrow("fatal mistake");
  expect(check).toThrow(/mistake/i);
});
