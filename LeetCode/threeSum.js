// brute force 
var threeSum = function(nums) {
    var totalValue = 0;
    var firstSum = nums[0];
   var twoSum = totalValue - firstSum;
    var arr = []
   var finalAn = [arr]
    for(var i=0; i<nums.length; i++){
        firstSum = Math.min(nums[i], firstSum)
        arr.push(firstSum)
       for(var j =0; j<nums.length; j++){
           if((nums[i] + nums[j])=== twoSum ){
               arr.push(nums[i], nums[j])
                return finalAn;
           }
       }
         
    }
   
  
    
};