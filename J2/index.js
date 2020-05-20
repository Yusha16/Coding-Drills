function processResult() {
    //Get the row data
    var rowTags = document.getElementsByClassName("squareRow");
    var rows = Array();
    for(var i = 0; i < rowTags.length; i++) {
        rows.push(rowTags[i].value);
    }
    //Debug to see the row data
    //console.log(rows);

    //Store the data in a grid layout
    //[0][0] [0][1] [0][2] [0][3]
    //[1][0] [1][1] [1][2] [1][3]
    //[2][0] [2][1] [2][2] [2][3]
    //[3][0] [3][1] [3][2] [3][3]
    var squareGrid = Array();
    for(var i = 0; i < rows.length; i++) {
        squareGrid.push(rows[i].split(" "));
        //At the same time convert the value to int
        for(var j = 0; j < squareGrid[i].length; j++) {
            squareGrid[i][j] = parseInt(squareGrid[i][j]);
        }
    }
    //Debug to see the grid data
    //console.log(squareGrid);

    //Show the Result
    document.getElementById("result").innerHTML = CheckMagicSqaure(squareGrid);
}

//Function will check if the grid is a Magic Sqaure or not
function CheckMagicSqaure(squareGrid){
    //Get the magic number
    var magicNumber = squareGrid[0][0] + squareGrid[0][1] + squareGrid[0][2] + squareGrid[0][3];

    //We can return "not magic" to end the check

    //Check the row
    for(var i = 1; i < squareGrid.length; i++) { 
        if (magicNumber != squareGrid[i][0] + squareGrid[i][1] + squareGrid[i][2] + squareGrid[i][3]) {
            return "not magic";
        }
    }
    //We passed the row check now check the column
    for(var i = 0; i < squareGrid.length; i++) { 
        if (magicNumber != squareGrid[0][i] + squareGrid[1][i] + squareGrid[2][i] + squareGrid[3][i]) {
            return "not magic";
        }
    }
    //It is a magic square
    return "magic";
}