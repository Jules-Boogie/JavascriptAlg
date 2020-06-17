# JavascriptAlg


```
 var array = [9, 11, 8, 5, 7, 10]
    function find(arr) {
    // ====================== YOUR WORK HERE ===================
// Given a array of numbers representing the stock prices of a company in chronological order, 
//write a function that calculates the maximum profit you could have made from buying and selling that stock once.
// You must buy before you can sell it.
 // For example, given [9, 11, 8, 5, 7, 10] , you should return 5, since you could buy the stock at 5 dollars and sell it at 10 dollars.
  
 // pseudocode 
//loop through the array and find the biggest difference between two numbers 

var maxDiff = arr[1] - arr[0]
for (var i = 0; i<arr.length; i++){
  for(var j =0; j<arr.length; j++){
    if((i !==j ) && (arr[i] > arr[j])){
      var sub = arr[i] - arr[j]
      if(sub > maxDiff){
        maxDiff = sub
        return arr[j]
      }
    }
  }
}
   


  }




    // =========================================================
    
    console.log(find(array))

```
