//Print Odds 1-20

for(var i = 1; 1 < 21; i++){
    if(i % 2 !== 0){
        console.log(i)
    }
}

//Decreasing Multiples of 3

for(var i = 100; i >= 0; i--){
    if(i % 3 == 0){
        console.log(i)
    }
}

//Print the sequence

for(var i=4; i>-4; i-=1.5) {
    console.log(i);
}

//Sigma

var sum = 0

for(var i = 1; i < 101; i++){
    if(i < 101){
        var sum = sum + i
    }    
}
    console.log(sum)

//Factorial

var product = 1

for(var i = 1; i < 13; i++){
    if(i < 13){
        product = product * i
    }
}
    console.log(product)

