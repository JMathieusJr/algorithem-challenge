
//Given two numbers, write an algorithm that outputs the sum of all odd
// numbers between those numbers, inclusive.

//Read in two numbers from the user and assign then to startNumber and endNumber


function sumOddNumbers(startNumber, endNumber) {
    let total = 0;

    for (i = startNumber; i <= endNumber; i++) {
        if(i % 2 !== 0) {
            total = total + i;
        }
    }
    return total;
}
console.log (sumOddNumbers(0, 15))