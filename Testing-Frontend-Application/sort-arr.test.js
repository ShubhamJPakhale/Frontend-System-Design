const sortByAge = require("./sort-arr");

test("test first name in the sorted array", () => {
  const sortedData = sortByAge();
  expect(sortedData[0].name).toBe("Rohit");
});

it("test length of sorted array", () => {
  const sortedData = sortByAge();
  expect(sortedData).toHaveLength(4);
});

test("sortByAge sorts array of objects by age in ascending order", () => {
  const input = [
    { name: "Shubham", age: 28 },
    { name: "Ankit", age: 30 },
    { name: "Rohit", age: 25 },
    { name: "Aman", age: 27 },
  ];
  const expectedOutput = [
    { name: "Rohit", age: 25 },
    { name: "Aman", age: 27 },
    { name: "Shubham", age: 28 },
    { name: "Ankit", age: 30 },
  ];
  expect(sortByAge(input)).toEqual(expectedOutput);
});
