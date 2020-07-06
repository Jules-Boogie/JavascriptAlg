var search = function(nums, target) {
    
    if(nums.length === 2){
        if(nums[0] === target){
            return 0
        } else if(nums[1] === target)
            return 1
    }
        
    var start = 0;
    var end = nums.length-1
   
    
   while(start<= end){
       
        var mid = start +  Math.floor((end-start)/2)
        
        if(nums[mid] === target){
            return mid
        } else if(nums[mid] >= nums[start]){
           if(target >= nums[start] && target < nums[mid]){
               end = mid-1
               
            } else {
            start = mid+1
        }
           
       } else {
           if(target <= nums[end] && target > nums[mid]){
               start = mid + 1
           } else{
               end = mid-1
           }
               
       }
    
        
       
        
    };
    
    return -1
    
};