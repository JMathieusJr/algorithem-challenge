
//Given two numbers, write an algorithm that outputs the sum of all odd
// numbers between those numbers, inclusive.

function sumOdds (n) {
    let sum = 0

    for (let i = 1; i <= n; i += 2) {
        sum += i
    }

    return sum
}

console.log(sumOdds(15))

