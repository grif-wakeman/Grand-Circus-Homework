let num = 0;

console.log("Print every number divisible by 3, from 1 to 100");

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}



console.log("Find Largest Number");

const numbers = [3, 7, 2, 9, 4, 5, 8, 1, 10, 6]

function findLargestNumber(array) {

    let largestNumber = array[0];

    array.forEach(number => {
        if (number > largestNumber) {
            largestNumber = number
        }
    })
    return largestNumber;
}


console.log(findLargestNumber(numbers));


console.log("Compute the Total");

const arr_1 = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2].reduce((a, b) => a + b);
const arr_2 = [9, 2, 42, 55, 71, 22, 4, 5, 90, 25, 26].reduce((a, b) => a + b);

console.log(arr_1 + arr_2);

// Declare an array of Objects

console.log("Find Average Score");

const scores = [
    {score: 75},
    {score: 90},
    {score: 100},
    {score: 80}
];


function findAverageScore(array) {
    let total = 0;
    for ( const item of array) {
        total += item.score;
    }
    return total / array.length;
}

console.log(findAverageScore(scores));


// Bonus: Use .map() and .reduce()

console.log("Bonus: Find Average Score - Using .map() and .reduce()");

const bonusAverage = scores.map(score => score.score).reduce((prev, curr) => (prev + curr)) / scores.length;

console.log(bonusAverage);