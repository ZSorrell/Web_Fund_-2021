var numberLikes = 9

function add(){
    var likes = document.querySelector(".number-of-likes-one").innerText
    numberLikes++
    likes = numberLikes + " likes(s)"
    console.log(likes)
    document.querySelector(".number-of-likes-one").innerText = likes
}

var numberLikesTwo = 12

function addtwo(){
    var likestwo = document.querySelector(".number-of-likes-two").innerText
    numberLikesTwo++
    likestwo = numberLikesTwo + " likes(s)"
    console.log(likestwo)
    document.querySelector(".number-of-likes-two").innerText = likestwo
}

var numberLikesThree = 9

function addthree(){
    var likesthree = document.querySelector(".number-of-likes-three").innerText
    numberLikesThree++
    likesthree = numberLikesThree + " likes(s)"
    console.log(likesthree)
    document.querySelector(".number-of-likes-three").innerText = likesthree
}