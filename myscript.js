function insert(idName1, idName2){
    var left = Math.floor((Math.random() * 150) + 1)+"px";
    var top = Math.floor((Math.random() * 150) + 1)+"px";
    var r = Math.round(Math.random());
    var imgName = "";
    if (r)
        imgName = "e1.jpg";
    else
        imgName = "e3.png";
    insertion(idName1, left, top, imgName);
    insertion(idName2, left, top, imgName);
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
    imgAdded.onclick="incorrectClick()";
}

function uniqueInsertion(idName)
{
    var imgDestination = document.getElementById(idName);
    var imgAdded = document.createElement("img");
    var r = Math.round(Math.random());
    if(r)
        var imgName = "e1.jpg";
    else    
        var imgName = "e3.png";
    imgAdded.src = imgName;
    imgAdded.width = 30;
    imgAdded.height = 30;
    imgDestination.appendChild(imgAdded);
    imgAdded.style.position = "absolute";
    imgAdded.style.top = Math.floor((Math.random() * 150) + 1)+"px";
    imgAdded.style.left = Math.floor((Math.random() * 150) + 1)+"px";

    imgAdded.id = "correctImg";
    imgAdded.onclick="correctClick()";
}

function incorrectClick(){
    document.getElementById("message").innerHTML = "Try Again!";
}

window.onload = function() {
    for (let i = 0; i < 3; i++) { 
        insert("gameLeft", "gameRight");
    }
    var r = Math.round(Math.random());
    if (r)
        uniqueInsertion("gameLeft");
    else
        uniqueInsertion("gameRight")
}