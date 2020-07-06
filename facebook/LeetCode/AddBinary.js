//brute force

function  addBinary(a,b){

    return (parseInt(a,2) + parseInt(b,2)).toString(2)
}

// interview expectations 

function addBinaryManual(a,b){
indexA = a.length-1
indexB = b.length-1
sum = ""
carry = 0

while(indexA >=0 || indexB >= 0){
let CurrA = a[indexA] ? a[indexA]: '0'
let currB = b[indexB] ? b[indexB]: '0'

sum = String(CurrA ^ currB ^ carry) + sum

if(CurrA === currB && CurrA !== String(carry)){
    carry = Number(!carry)
}
indexA--
indexB--

}
// XOR (^) same = 0, diff = 1
/*
a,b, c  = s,c
0 0 0  = 0,0
0 0 1 =  1 0 <-  carry diff
1 0 0 = 1 0
1 0 1 = 0 1
1 1 0 = 0 1 <- carry diff
1 1 1 = 1 1

*/
return carry ? (String(carry) + sum) : sum
}