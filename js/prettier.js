// Function with improper formatting and unused variable
function example(a, b) {
  let unusedVar = 5; // ESLint should catch this

  if (a > b) {
    return a + b + unusedVar; // Missing space and semicolon
  } else {
    return a - b;
  }
}

// Long line that exceeds standard limit
const longString =
  "This is a very long string that should trigger a Prettier reformatting because it's beyond the typical line length limit for Prettier.";
function example2() {
  return longString;
}

let result = example(10, 5);
console.log(result);
console.log(example2());
