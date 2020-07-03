// Write code to create a function takes a string and returns a new string with the first letters of each word capitalized

var titleCase = function(str) {
str = str.toLowerCase().split(' ')

// console.log(str)

for(var i=0; i<str.length; i++){
    str[i] = str[i][0].toUpperCase() + str[i].slice(1)
    
}
return str.join(' ')


};


console.log(titleCase("I'm a little tea pot"))