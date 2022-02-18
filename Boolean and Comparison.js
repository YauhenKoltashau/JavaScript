  function boolReturnValue() {
    return true
  }
  
  // Use Conditional Logic with If Statements
  function trueOrFalse(wasThatTrue) {
    if (wasThatTrue === true) {
      return "Yes, that was true"
    }
    return "No, that was false"
  }
  
  // Comparison with the Equality Operator
  // Add the equality operator to the indicated line so that the function will return the string Equal when val is equivalent to 12.
  function testEqual(val) {
    if (val == 12) { 
      return "Equal";
    }
    return "Not Equal";
  }
  testEqual(10);
  
  // Comparison with the Strict Equality Operator
  // Use the strict equality operator in the if statement so the function will return the string Equal when val is strictly equal to 7.
  function testStrict(val) {
    if (val === 7) {
      return "Equal";
    }
    return "Not Equal";
  }
  
  // Practice comparing different values
  // The compareEquality function in the editor compares two values using the equality operator. Modify the function so that it returns the string Equal only when the values are strictly equal.
  function compareEquality(a, b) {
    if (a === b) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  compareEquality(10, "10");
    
    // Comparison with the Inequality Operator
    // Add the inequality operator != in the if statement so that the function will return the string Not Equal when val is not equivalent to 99.
    function testNotEqual(val) {
      if (val != 99) {
        return "Not Equal";
      }
      return "Equal";
    }
    testNotEqual(10);
    
     // Comparison with the Strict Inequality Operator
    // Add the strict inequality operator to the if statement so the function will return the string Not Equal when val is not strictly equal to 17
    function testStrictNotEqual(val) {
      if (val !== 17) { // Change this line
        return "Not Equal";
      }
      return "Equal";
    }
    
    // Comparison with the Greater Than Operator
    // Add the greater than operator to the indicated lines so that the return statements make sense.
    function testGreaterThan(val) {
      if (val > 100) { 
        return "Over 100";
      }

      if (val > 10) { 
        return "Over 10";
      }

      return "10 or Under";
    }

    testGreaterThan(10);
    
    // Comparison with the Greater Than Or Equal To Operator
    // Add the greater than or equal to operator to the indicated lines so that the return statements make sense.
    function testGreaterOrEqual(val) {
      if (val >= 20) { 
        return "20 or Over";
      }

      if (val >= 10) { 
        return "10 or Over";
      }

      return "Less than 10";
    }

    testGreaterOrEqual(10);
    
    // Comparison with the Less Than Operator
    //Add the less than operator to the indicated lines so that the return statements make sense.
    function testLessThan(val) {
      if (val < 25) {
        return "Under 25";
      }

      if (val < 55) {
        return "Under 55";
      }

      return "55 or Over";
    }

    testLessThan(10);
    
    // Comparison with the Less Than Or Equal To Operator
    function testLessOrEqual(val) {
      if (val <= 12) {  // Change this line
        return "Smaller Than or Equal to 12";
      }

      if (val <= 24) {  // Change this line
        return "Smaller Than or Equal to 24";
      }

      return "More Than 24";
    }

    testLessOrEqual(10);

    

