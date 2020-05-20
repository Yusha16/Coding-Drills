function processResult() {
    var result = -1;

    //Get all the game result

    //var gameResults = Array();
    //Loop to get the 6 games
    //Counter to see how many wins they won
    var winCounter = 0;
    //Tips: Can use a the input tag as a class and grab that class
    for (let i = 1; i < 7; i++) {
        //gameResults.push(document.getElementById("game" + i).value);
        if (document.getElementById("game" + i).value == "W") {
            winCounter++;
        }
    }
    //Debug to see the games result
    //console.log(gameResults);
    
    //Tip: Can use a if instead
    //Determine the tournament result
    switch (winCounter){
        //Group 1
        case 6:
            result = 1;
            break; 
        case 5:
            result = 1;
            break;
        //Group 2
        case 4:
            result = 2;
            break;             
        case 3:
            result = 2;
            break;
        //Group 3
        case 2:
            result = 3;
            break;
        case 1:
            result = 3;
            break;
    }

    //Show the result
    document.getElementById("result").innerHTML = result;

    //Stop it from refreshing
    return false;
}