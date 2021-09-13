//local variables
var numOfImages = 3;
var background = 0;
var levelNum = 1;
var dificulty = 0;
function sliderChange(value) {
    dificulty = value;
}
//insert random image into both squares (right and left)
function insert(idName1, idName2) {
    var left = Math.floor((Math.random() * 150) + 1) + "px";
    var top = Math.floor((Math.random() * 150) + 1) + "px";
    var imgName = randImage();
    insertion(idName1, left, top, imgName);
    insertion(idName2, left, top, imgName);
}
//generate string reference to random image
function randImage() {
    var r = Math.floor(Math.random() * 3) + 1;
    return "e" + r + ".png";
}
//insert individual image (called in insert() function)
function insertion(idName, left, top, imgName) {
    var imgDestination = document.getElementById(idName);
    var imgAdded = document.createElement("img");
    imgAdded.src = imgName;
    imgAdded.width = 30;
    imgAdded.height = 30;
    imgDestination.appendChild(imgAdded);
    imgAdded.style.position = "absolute";
    imgAdded.style.top = top;
    imgAdded.style.left = left;
    imgAdded.id = "falseImg";
    imgAdded.onclick = incorrectClick;
}
//insert function for correct answer image (difference is onClick)
function uniqueInsertion(idName) {
    var imgDestination = document.getElementById(idName);
    var imgAdded = document.createElement("img");
    var imgName = randImage();
    imgAdded.src = imgName;
    imgAdded.width = 30;
    imgAdded.height = 30;
    imgDestination.appendChild(imgAdded);
    imgAdded.style.position = "absolute";
    imgAdded.style.top = Math.floor((Math.random() * 150) + 1) + "px";
    imgAdded.style.left = Math.floor((Math.random() * 150) + 1) + "px";
    imgAdded.id = "correctImg";
    imgAdded.onclick = correctClick;
}
// onClick for repeated images
function incorrectClick() {
    var message = "Level: " + levelNum + " Try Again!";
    document.getElementById("message").innerHTML = message;
}
// onClick for correct answer
function correctClick() {
    console.log(dificulty);
    switch (Number(dificulty)) {
        case 0: {
            numOfImages++;
            break;
        }
        case 1: {
            numOfImages += levelNum;
            break;
        }
        case 2: {
            numOfImages *= 2;
            break;
        }
        default: {
            break;
        }
    }
    // numOfImages *= 2;
    levelNum++;
    var message = "Level: " + levelNum;
    document.getElementById("message").innerHTML = message;
    // delete all images
    document.getElementById("gameLeft").innerHTML = "";
    document.getElementById("gameRight").innerHTML = "";
    newGame();
}
//create new game with incremented number of images
function newGame() {
    for (var i = 0; i < numOfImages; i++) {
        insert("gameLeft", "gameRight");
    }
    var r = Math.round(Math.random());
    if (r)
        uniqueInsertion("gameLeft");
    else
        uniqueInsertion("gameRight");
    toggleBackground();
}
//toggle background color between yellow and red
function toggleBackground() {
    var game = document.getElementById("game");
    if (background == 0) {
        game.style.backgroundColor = "rgb(170, 50, 48)";
        background = 1;
    }
    else {
        game.style.backgroundColor = "rgb(237, 183, 72)";
        background = 0;
    }
}
window.onload = function () {
    document.getElementById("message").innerHTML = "Level: 1";
    for (var i = 0; i < numOfImages; i++) {
        insert("gameLeft", "gameRight");
    }
    var r = Math.round(Math.random());
    if (r)
        uniqueInsertion("gameLeft");
    else
        uniqueInsertion("gameRight");
};
