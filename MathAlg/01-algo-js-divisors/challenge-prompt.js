// Divisors within an array


// This function takes in an array and returns true if any element is evenly divisible 
// by another element and false otherwise

function checkDivisors(arr) {

  // ---------- Your Code Here ----------
// loop through the array and compare one element to another
// check if the first element divided by the second returns a remainder
// we also want to check that the number that is being divided is greater than the divisor
// if we get to the end of the loop and there is none, return false. 

if(arr.length === 0){
  return;
}

// var num;
// var divisor;
// while( num >= divisor){
//   for ( num of arr){
//     for (divisor of arr){
//       if( num % divisor === 0){
//         return true;
//       } else{
//         return false;
//       }
//     }
//   }

for(var i=0; i<arr.length; i++){
  var curr = arr[i]

  for (var j=0; j<arr.length; j++){

    var next = arr[j]

  }
  while(i !== j){
    if(curr % next === 0){
      return true;
    }
    
  }
  
}
return false;

}





  // ----------- End Code Area -----------



// This should console log true
console.log(checkDivisors([4, 35, 3, 9, 22, 10]));

// This should console log true
console.log(checkDivisors([37, 17, 28, 7, 63]));

// This should console log true
console.log(checkDivisors([12, 27, 29, 62, 27]));

// This should console log false
console.log(checkDivisors([81, 7, 33, 20, 12]));

// This should console log false
console.log(checkDivisors([32, 15, 49, 82, 11]));