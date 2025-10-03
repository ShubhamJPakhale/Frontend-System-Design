const user = [
  { name: "Shubham", age: 28 },
  { name: "Ankit", age: 30 },
  { name: "Rohit", age: 25 },
  { name: "Aman", age: 27 },
];

function sortByAge() {
  const data = user.sort((a, b) => a.age - b.age);
  return data;
}

console.log(sortByAge());

module.exports = sortByAge;
