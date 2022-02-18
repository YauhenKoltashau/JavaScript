// Comparisons with the Logical And Operator
// Replace the two if statements with one statement, using the && operator, which will return the string Yes if val is less than or equal to 50 and greater than or equal to 25. Otherwise, will return the string No.
function testLogicalAnd(val) {
  if (val <= 50 && val >= 25) {
      return "Yes";
    }
  return "No";
}

testLogicalAnd(10);

// Comparisons with the Logical Or Operator
// Combine the two if statements into one statement which returns the string Outside if val is not between 10 and 20, inclusive. Otherwise, return the string Inside.
function testLogicalOr(val) {
  if (val < 10 || val > 20 ) {
    return "Outside";
  }
  return "Inside";
}
testLogicalOr(15);
