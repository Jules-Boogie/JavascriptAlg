// pseudocode

/*
input is a 2d array
check the current interval and the next interval
and if the next interval's beginning is less than the current interval's end, you have found and interval

if the ending of the current is the same as the beginning of the next then it is a merge
*/
var merge = function(intervals) {
    
    
    if(intervals.length <= 1){
        return intervals
    }
    
    intervals.sort((a,b) => a[0] - b[0])
    
    const output = []
    let curr = intervals[0]
    output.push(curr)
    
    for(let interval of intervals){
       let currBegin = curr[0]
       let currEnd = curr[1]
       let nextBegin = interval[0]
       let nextEnd = interval[1]
       
       if(currEnd >= nextBegin){
           curr[1] = Math.max(currEnd, nextEnd)
       } else {
           curr = interval
           output.push(curr)
       }
    }
    return output
};
