// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. 
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

describe("arrayShuffler", () => {
    it("takes in an array, removes the first item from the array and shuffles the remaining content", () => {
        expect(arrayShuffler(colors1)).toEqual(expect.arrayContaining(["yellow", "blue", "pink", "green"]))
        expect(arrayShuffler(colors2)).toEqual(expect.arrayContaining(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]))
    })
})


// b) Create the function that makes the test pass.

//Pseudo Code
// Create a function that takes in an array
//write logic that removes the first index of that array
//write logic that shuffles the values of an array
//assign an empty array then push the contents onto it
//output is the new array with the shuffled values

const arrayShuffler = (array) => {
array.shift()
let newArray = []
 return newArray.push(array.splice(Math.floor(Math.random () * array.length)))
}

//After doing some research on shuffling arrays, I found out about the fisher yates algorithm, which seems to be a basis for shuffling arrays in JavaScript. Since my original arrayShuffler wasn't working, I decided to try again using that, but I'm going to leave my original one there so you can see my original blocker. I was trying to first use.shift to get rid of the first value in the array, then assign a new array that i can push the rest of the values to. Then, I tried to use the splice method to remove and replace the values at different indexes at random using the math.floor and math.random functions, times the array length so that it always does it the amount of times as the length of the array.

//Here is my next iteration after doing more research.

const arrayShuffler = (array) => {
    array.shift()
    for(let i = array.length - 1; i > 0; i--) {
        let random = Math.floor(Math.random()) * (i + 1);
        let newArr = array[i]
        array[i] = array[random];
        array[random] = newArr;
        return array
    }
}

//From what I can see, the main differences between this and what I was doing is the for loop. Here I'm iterating through the array, taking a random value from the array, then replacing that with whatever is at that index in the original array. I can understand why this works, but I don't think I would've been able to come up with it on my own if not for looking it up and having a reference with the code. 

// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the net total of votes.

// a) Create a test with expect statements for each of the variables provided.

const votes1 = {upVotes: 13, downVotes: 2}
// Expected output: 11
const votes2 = {upVotes: 2, downVotes: 33}
// Expected output: -31

describe("allVotes", () => {
    it("takes in an object that contains up votes and down votes and returns the net total of votes.", () => {
        expect(allVotes(votes1)).toEqual(11)
        expect(allVotes(votes2)).toEqual(-31)
    })
})

// b) Create the function that makes the test pass.

//Pseudo Code
// Create a function that takes in an object
// write logic that subtracts the first key value pair to the second key value pair for the total number of votes
//output a number with the net total of votes.

const allVotes = (object) => {
    return object.upVotes - object.downVotes
}


// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

describe("arrayCombiner", () => {
    it("takes in two arrays as arguments and returns one array with no duplicate values.", () => {
        expect(arrayCombiner(dataArray1 + dataArray2)).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])
        
    })
})


const dataArray1 = ["array", "object", "number", "string", "Boolean"]
const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
// Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]


// b) Create the function that makes the test pass.

//Pseudo Code
//Create a function that takes in two arrays as arguments
//write logic that combines the two arrays
//iterate over the array and use conditionals to find out if the value at any given index is the same as another value at a different index
//output an array with the two arrays combined, with no duplicates. 

const arrayCombiner = (arr1, arr2) => {
    newArr = arr1.concat(arr2)
    arrayNoDuplicates = newArr.filter((value, index) => {
        if (value[i] === value[i-1])
        return arrayNoDuplicates - value[i]
    })
    return arrayNoDuplicates
}


// I'm trying to figure out a way to say "If the value at the index is strictly equal to the value at any other index, delete one of those values, then return the new array." Im getting the error that newArr.filter is not a function, and I'm not sure why that is. Higher order functions have always been a bit of a hard subject for me, so I'm trying to work through them. 

// I tried taking another look at it, and removing the .filter method to use a regular for loop, and came up with this. Now, I'm getting the output of one. I feel like if i can find a way to use.filter this problem will be a lot easier.

const arrayCombiner = (arr1, arr2) => {
    let newArr = arr1.concat(arr2)
    let arrayNoDuplicates = []
    for(let i = 0; i < newArr.length; i++)
        if(newArr.indexOf(newArr[i])=== i) 
    return arrayNoDuplicates.push(newArr[i])
}
