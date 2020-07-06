function arrayIntersection (arr1,arr2){
const map = new Map()
const result = []

for(var i=0; i<arr1.length; i++){
    if(map.has(arr1[i])){
        map.set(arr1[i],map.get(arr1[i]) + 1 )
    } else {
        map.set(arr1[i], 1)
    }
}


for(var j =0; j<arr2.length; j++){
    if(map.has(arr2[i]) && map.get(arr2[i]) > 0){
        result.push(arr2[i])
        map.set(arr1[i], map.get(arr1[i]) - 1 )
    }
   
}


return result







}