for(i = 1; i < 101; i++){
    if(i % 3 == 0){
        console.log("Fizz")
    }

    if(i % 5 == 0){
        console.log("Buzz")
    }

    if(i % 3 == 0 && i % 5 == 0){
        console.log("FizzBuzz")
    }

    console.log(i)
}