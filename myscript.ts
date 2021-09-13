//local variables
var numOfImages = 3;
var background = 0;

//insert random image into both squares (right and left)
function insert(idName1: string, idName2: string){
    var left = Math.floor((Math.random() * 150) + 1)+"px";
    var top = Math.floor((Math.random() * 150) + 1)+"px";
    let imgName = randImage();
    insertion(idName1, left, top, imgName);
    insertion(idName2, left, top, imgName);
}

//generate string reference to random image
function randImage() {
    let r = Math.floor(Math.random() * 3) + 1;
    let retString = "e" + r +".png";
    return retString;
}

//insert individual image (called in insert() function)
function insertion(idName: string, left: string, top: string, imgName: string)
{
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
function uniqueInsertion(idName: string)
{
    var imgDestination = document.getElementById(idName);
    var imgAdded = document.createElement("img");
    let imgName = randImage();
    imgAdded.src = imgName;
    imgAdded.width = 30;
    imgAdded.height = 30;
    imgDestination.appendChild(imgAdded);
    imgAdded.style.position = "absolute";

    imgAdded.style.top = Math.floor((Math.random() * 150) + 1)+"px";
    imgAdded.style.left = Math.floor((Math.random() * 150) + 1)+"px";

    imgAdded.id = "correctImg";
    imgAdded.onclick = correctClick;
}

// onClick for repeated images
function incorrectClick(){
    let message = "Level: " + (numOfImages - 2) + " Try Again!";
    document.getElementById("message").innerHTML = message;
}

// onClick for correct answer
function correctClick() {
    numOfImages ++;
    let message = "Level: " + (numOfImages - 2);
    document.getElementById("message").innerHTML = message;

    // delete all images
    document.getElementById("gameLeft").innerHTML = "";
    document.getElementById("gameRight").innerHTML = "";
    
    newGame();
}

//create new game with incremented number of images
function newGame() {
    for(let i=0; i<numOfImages;i++) {
        insert("gameLeft", "gameRight");
    }
    var r = Math.round(Math.random());
    if (r)
        uniqueInsertion("gameLeft");
    else
        uniqueInsertion("gameRight")
    toggleBackground();
}

//toggle background color between yellow and red
function toggleBackground() {
    let game = document.getElementById("game");
    if(background == 0){
        game.style.backgroundColor = "rgb(170, 50, 48)";
        background = 1;
    }
    else{
        game.style.backgroundColor = "rgb(237, 183, 72)";
        background = 0;
    }
}

window.onload = function() {
    document.getElementById("message").innerHTML = "Level: 1";
    for(let i=0; i<numOfImages;i++) {
        insert("gameLeft", "gameRight");
    }
    var r = Math.round(Math.random());
    if (r)
        uniqueInsertion("gameLeft");
    else
        uniqueInsertion("gameRight")
}