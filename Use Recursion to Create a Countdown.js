function countdown(n) {
    if (n <= 0) {
    return [];
    } else if (1 <= n) {
      const countArray = countdown(n - 1);
      countArray.push(n);
      return countArray.reverse();
      }
  }
    
  console.log(countdown(10))

function countdown(n) {
    if (n <= 0) {
    return [];
    } else if (1 <= n) {
        const countArray = countdown(n - 1);
        countArray.push(n);
        return countArray.reverse();
        }
    }