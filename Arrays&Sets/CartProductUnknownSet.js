import cartProduct from "./Cartesianproduct2SETs"

function cartprod(...argSet){

    let tempProd = argSet[0]

    for(var i=1; i<argSet.length; i++){
        tempProd = cartProduct(tempProd, argSet[i])
    }
    return tempProd;

}

//time complexity = O(n^x) where n is the length of the array and x is the number of arrays

