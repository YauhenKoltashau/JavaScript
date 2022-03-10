function rangeOfNumbers(startNum, endNum) {
    if (endNum >= startNum) {
      const rangeOfNum = rangeOfNumbers(startNum, endNum - 1);
      rangeOfNum.push(endNum);
      return rangeOfNum;
      } else {
        return[]
      }
  }
  
  console.log(rangeOfNumbers(6, 9))
  