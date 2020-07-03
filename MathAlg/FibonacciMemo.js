var fib = function(N, memo) {
    if( N === 1 || N === 0){
        return N;
    }
   return fib(N-1, memo)+fib(N-2, memo)
};