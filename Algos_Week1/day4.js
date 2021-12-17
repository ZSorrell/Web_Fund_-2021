//Arrays - Data Structure

var name = "Zack"

var array = []

//Primitive data types 
// Strings, integers, boolean

//Data structures
//Arrays, information

var first_name = "Zack"
var last_name = "Sorrell"
var age = 30
var location = "Boise"

var user_info = ["Zack", "Sorrell", 30, "Boise"]

console.log(user_info)

console.log(user_info[3])

//Rules
//1. All values in a given arrray should be the same given data type
//2. All values in a given array should be of similar information

var numberArray = [1,2,3,4,5]
var array = ["Boise", "LA", "Dallas"]

//Naming conventons
//Camel Case
//the first word is lowercase and then every other word after the first is capitalized
//ex. nameFirst
//ex. nameLast

//Swapping Values

var orange = "orange"
var apple = "apple"

//Create a temporary variable

var temp = "orange"
orange = apple
apple = temp

//Adding a value to the array
//.push() adds a value to the end of the array
//is a function because of the ()

var numberArray = []

for(var number = 1; number < 256; number++){
    numberArray.push(number)
}

//Removing a value from an array
//.pop() removes the last value in an array
//Also returns the value as well 
//is a function because of the () 

numberArray.pop()

var removedValue = number.pop()
console.log(removedValue)

//Getting the length of the array
//use the .length
// Does not use () so is not considered a function, so do not use ()

numberArray.length

//Reverse an array

//First value in any given array
numberArray[0]

//To get the last value of any given array
numberArray[numberArray.length - 1]

function printArray(array){

//First thing to do is iterate the array
//Iterate is goign to use some sort of loop (for, while)
//Array is considered ordered array

    for(var index = 0; index < array.length; index++){
        console.log(array[index])
    }
}

printArray[a,b,c,d,e]

//Reverse an array(Common interview question)

function reverseArray(array){
    var returnArr = []
    //Iterate through the array backwords
    for(var index = array.length - 1; index > -1; index++){
        returnArr.push(array[index])
    } 
    return returnArr
    //.push the values into the new array
}

console.log(reverseArray)

function reverseArraySwap(array){
    //Iterate through the array
    for(var index = 0; index < array.length; index++){
        //Store one of the variables in temp variable
        var temp = array[index]
        //Replace the stored value
        array[index] = [array.length - 1 - index]
        //Replace the temp value in the other variable
        array[array.length - 1 - index] = temp
    }
    console.log(array.length/2)
    return array
}

console.log(reverseArraySwap([a,b,c,d,e]))
