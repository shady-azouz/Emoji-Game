var numOfImages = 3;
var background = 0;

function checkList (element, list)
{
    let margin = 30;
    for(let i = 0;i<list.length;i++){
        if(element < (list[i] + margin) || element > (list[i] - margin))
            return true;
    }
    return false;
}

function insert(idName1, idName2){
    var left = Math.floor((Math.random() * 150) + 1)+"px";
    var top = Math.floor((Math.random() * 150) + 1)+"px";
    let imgName = randImage();
    insertion(idName1, left, top, imgName);
    insertion(idName2, left, top, imgName);
}

function randImage() {
    let r = Math.floor(Math.random() * 3) + 1;
    let retString = "e" + r +".png";
    return retString;
}

function insertion(idName, left, top, imgName)
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

function uniqueInsertion(idName)
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

function incorrectClick(){
    let message = "Level: " + (numOfImages - 2) + " Try Again!";
    document.getElementById("message").innerHTML = message;
}

function correctClick() {
    numOfImages ++;
    let message = "Level: " + (numOfImages - 2);
    document.getElementById("message").innerHTML = message;

    // delete all images
    document.getElementById("gameLeft").innerHTML = "";
    document.getElementById("gameRight").innerHTML = "";
    
    newGame();
}

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