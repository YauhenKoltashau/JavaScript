// Fix the function isLess to remove the if/else statements.
function theSame(a, b) {
    if (a < b) {
        return true;
    } else {
        return false
    }
}

function isLess(a, b) {
    return a < b; 
}
  
isLess(10, 15);
theSame(10, 15)