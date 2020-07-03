export default function cartProduct(setA, setB){
    let product = []

    for(var seTAel of setA){
        if(!Array.isArray(seTAel)){
            seTAel = [seTAel]
        }
        for(var setBel of setB){
            
            product.push([...seTAel,setBel])
        }
    }
    return product;
}


//time complexity O(n*m)
// space complexity O(n*m.)