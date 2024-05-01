// Incorrect spacing and indentation
const x = 10;

// Function with improper formatting and unused variable
function example(a, b) {
  let unusedVar = 5; // ESLint should catch this

  if (a > b) {
    return a + b; // Missing space and semicolon
  } else {
    return a - b;
  }
}

// Long line that exceeds standard limit
const longString =
  "This is a very long string that should trigger a Prettier reformatting because it's beyond the typical line length limit for Prettier.";

// Code with an undeclared variable
function undeclaredVariableIssue() {
  return undeclaredVar + 10; // ESLint should detect this
}
