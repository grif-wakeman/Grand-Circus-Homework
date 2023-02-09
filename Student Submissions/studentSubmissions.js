const submissions = [
    {
        name: "Jane",
        score: 95,
        date: "2020-01-24",
        passed: true
    },
    {
        name: "Joe",
        score: 77,
        date: "2018-05-14",
        passed: true
    },
    {
        name: "Jack",
        score: 59,
        date: "2019-07-05",
        passed: false
    },
    {
        name: "Jill",
        score: 88,
        date: "2020-04-22",
        passed: true
    }
]


function addSubmission(array, newName, newScore, newDate) {
    let newObj = {
        name: newName,
        score: newScore,
        date: newDate
    }
    if (newScore >= 60) {
        newObj.passed = true;
    } else {
        newObj.passed = false;
    }
    array.push(newObj);
}

function deleteSubmissionByIndex(array, index) {
    array.splice(index, 1)
}

function deleteSubmissionByName(array, name) {
    const index = array.findIndex(array => array.name === name);
    array.splice(index, 1)
}

function editSubmission(array, index, score) {
   let findMe = array[index];
   findMe.score = score;

   if (score >= 60) {
    findMe.passed = true;
   } else {
    findMe.passed = false;
   }
}

function findSubmissionByName(array, name) {
    const result = array.find(array => array.name === name);
    return result;
}

/* function findLowestScore(array) {
    const min = Math.min(...array.map(array => array.score));
    array.forEach(element => {
        console.log(element);
    });
    return min;
} */

function findLowestScore(array) {

    let lowestScore = array[0];

    array.forEach(submission => {
        if (submission.score < lowestScore.score) {
            lowestScore = submission
        }
    })
    return lowestScore;
}

function findAverageScore(array) {
    let total = 0
    
    
    for (const element of array ) {
        total = total + element.score;
    }
    let average = total / array.length;
    return average;
}

function filterPassing(array) {
    const newArr = array.filter(array => array.passed === true)
    return newArr;
}

function filter90AndAbove(array) {
    const pass90 = array.filter(array => array.score >= 90)
    return pass90;
}

console.log("***************************************");

// Original array

console.log("***Orginal array***");
console.log(submissions);

// Add an object to the array
addSubmission(submissions, "Chris", 40, "2022-06-07");

console.log("***Add an object to the array***");
console.log(submissions);

// Delete an object at specified index
deleteSubmissionByIndex(submissions, 2);

console.log("***Delete an object at specified index***");
console.log(submissions);

// Delete object by name
deleteSubmissionByName(submissions, "Jane");

console.log("***Delete object by name***");
console.log(submissions);

// Update an objects score and set if passed or failed
editSubmission(submissions, 1, 98);

console.log("***Update an objects score and set if passed or failed***");
console.log(submissions);

// Find an object by name and return that object
console.log("***Find an object by name and return that object***");

console.log(findSubmissionByName(submissions, "Joe"))

//Find lowest score
console.log("***Find lowest score***");

console.log(findLowestScore(submissions));

//Find average score
console.log("***Find average score***");

console.log(submissions);
console.log(findAverageScore(submissions));

//Return pass only
console.log("***Return pass only***");

console.log(filterPassing(submissions));

//Return 90+ scores only
console.log("***Return 90+ scores only***");

console.log(filter90AndAbove(submissions));



console.log("***Extended Challenges***");

// Extended challenges

function createRange(start, end) {
    let rangeArray = [];

    if (start < end) {
        for (let i = start; i <= end; i++) {
        rangeArray.push(i);
    }
    } else {
        for (let j = start; j >= end; j--) {
         rangeArray.push(j);
    }
    }
    
    return rangeArray;
}

console.log("***Create a range of numbers in an array with start and end parameters***");

console.log(createRange(1, 25));



function countElements(array) {
    let countArray = array;
    console.log(countArray);
    
    const occurrences = countArray.reduce(function (acc, curr) {
        return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
      }, {});
      
      console.log(occurrences)
}

console.log("***Count how many instances a string appears in an array***");

countElements(["a", "b", "a", "c", "a", "b", "c", "c", "a", "b", "c", "b", "a", "c", "b", "a", "b", "a"]);