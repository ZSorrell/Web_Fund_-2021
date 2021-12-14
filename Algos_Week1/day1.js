//variables
var full_name = "Zack Sorrell"

//1. Declaring a variable
var age 
//2. Initialize a value for the variable
age = "31"

//integers are for numerical values
age = age + 1
age += 1
age++ //increment by 1 only

age = age - 1
age -= 1
age-- //decrement by 1 only

age = age * 1
age *= 1

age = age / 1
age /= 1

//Modulus = %
5 % 2 
// dividing (using modulud) by 2 helps to find even or odd numbers
// if the number you are giving the modulus to is smaller than the modulus it returns that number
//ex. 1 % 5 = 1
//ex. 4 % 7 = 4

//Boolean is a true or false
var is_raining = true
var is_sunny = false

//Double is decimals
var price = 30.22

var string_age = "31"
string_age += 1 //in a string it adds to the string 
console.log(string_age) //prints the information to the terminal
= "311"

//Loops

//For Loops

console.log("Before Loop")
for(var number = 0; number < 51; number++){
    
    console.log(number)

}
console.log("After Loop")
console.log(number)

//Predict The Output

var a = 25;
a = a - 13;
console.log(a/2);

a = "hello";
console.log(a + "hello")

//Predict the Output
for(var i = 0; i<10; i++){
console.log(i);
i = i + 3;
}
console.log("outside of the loop" + i)

//Write a For Loop that Prints From 50 to 1
for(var number = 50; number > 0; number--){
    console.log(number)
}