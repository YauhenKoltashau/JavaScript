//Write a recursive function, sum(arr, n), that returns the sum of the first n elements of an array arr.

function sum(arr, n) {
    if (n <= 0) {
        return 0;
      
      } else {
          return arr[n - 1] + sum(arr, n - 1)
        }
        
      }
console.log(sum([3, 5, 4, 6, 13, 15, 20, 32], 5)  )
// 6 + 4 + 5 + 3

