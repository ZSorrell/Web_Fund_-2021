function hideOne(){
var declineButtonOne = document.querySelector(".top-connection-person-picture-name");
var acceptButtonOne = document.querySelector(".top-connection-person-picture-name");
declineButtonOne.remove();
acceptButtonOne.remove();
}

function hideTwo(){
    var declineButtonTwo = document.querySelector(".bottom-connection-person-picture-name");
    var acceptButtonTwo = document.querySelector(".bottom-connection-person-picture-name");
    declineButtonTwo.remove();
    acceptButtonTwo.remove();
}

function changeName(){
    var profileName = document.querySelector(".bottom-info-box-profile-full-name");
    profileName.innerText = "Zack Sorrell"
}