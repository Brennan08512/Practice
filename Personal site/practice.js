function fibGen(n){
    let fib = []
    let sum = 0
    for (let i = 1; i <= n; i++){
        if ( i === 1){
            fib = [0]
        } else if  (i === 2){
            fib = [0, 1]
        } else{
            sum = fib[fib.length - 1] + fib[fib.length - 2]
            fib.push(sum)
        }
    }
    return fib
}

fibGen(5)


function fibonacciGenerator(n) {
    let fib = []
    for (i = 1; i < n; i++){
        if (n === 1) {
            fib = [0]
        } else if (n === 2) {
            fib = [0,1]
        } else {
            fib = [0,1]
            let lastTwoOfArray = fib.slice(-2)
            let sumOfLastTwo = lastTwoOfArray[0]+lastTwoOfArray[1]
            fib.push(sumOfLastTwo)
        }
    }
    console.log(fib)
}