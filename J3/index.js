function processResult() {
    //Show the Result
    //document.getElementById("result").innerHTML = Palindrome(document.getElementById("word").value);
    document.getElementById("result").innerHTML = Palindrome2(document.getElementById("word").value);
}

//Recursive function that return the longest palindrome
function Palindrome(word) {
    console.log(word);

    //Exit Condition 
    //if the length of the word is 2 or less
    if (word.length < 3) {
        //A single char means it is a 1 length palindrome
        if (word.length == 1) {
            return 1;
        }
        //Are the 2 character the same
        else if (word.slice(0, 1) == word.slice(-1)) {
            return 2;
        }
        //Even for 2 character a not matching they are a palindrome itself the character
        return 1;
        //return 0;
    }
    //Splice out the ends
    var palindromeLength = Palindrome(word.slice(1,-1));
    if (word.length - 2 == palindromeLength && word.slice(0, 1) == word.slice(-1)) {
        return palindromeLength + 2;
    }   
    //return palindromeLength;

    console.log("Front Removed = " + word.slice(1));
    var frontCharRemovedPalindromeLength = Palindrome(word.slice(1));
    console.log("Front Length = " + frontCharRemovedPalindromeLength);
    if (word.length - 2 == frontCharRemovedPalindromeLength && word.slice(1, 2) == word.slice(-1)) {
        frontCharRemovedPalindromeLength += 2;
    }   
    
    console.log("Back Removed = " + word.slice(0, -1));
    var endCharRemovedPalindromeLength = Palindrome(word.slice(0, -1));
    console.log("Back Length = " + endCharRemovedPalindromeLength);
    if (word.length - 2 == endCharRemovedPalindromeLength && word.slice(0, 1) == word.slice(-2, -1)) {
        endCharRemovedPalindromeLength += 2;
    }
    console.log(Math.max(palindromeLength, frontCharRemovedPalindromeLength, endCharRemovedPalindromeLength));
    return Math.max(palindromeLength, frontCharRemovedPalindromeLength, endCharRemovedPalindromeLength);
}

//Different algorithm for the palindrome
//Where each character is the middle of the palindrome
//Ex. banana for character b is 1 while for character a (2nd) is length 5
//Also will use 2 letter check
    //Ex. abba -> where the check is bb as the middle
function Palindrome2(word) {
    var longestPalindromeLength = 1;
    for (var i = 0; i < word.length; i++) {
        var palindromeLength = 1;
        //Single character as the middle
        for (var j = 1; j < word.length / 2; j++) {
            //if we are at the end then break
            if (i - j < 0 || i + j > word.length) {
                break;
            }
            //Check if the character are matching
            else if (word.slice(i - j, i - j + 1) == word.slice(i + j, i + j + 1)) {
                palindromeLength += 2;
            }
            //No match for the character 
            else {
                break;
            }
        }
        if (palindromeLength > longestPalindromeLength) {
            longestPalindromeLength = palindromeLength;
        }
        //2 letter as the middle
        palindromeLength = 0;
        //Will use i as the left side of the 2 character length
        for (var j = 0; j < word.length / 2; j++) {
            //if we are at the end then break
            if (i - j < 0 || i + j + 1 > word.length) {
                break;
            }
            //Check if the character are matching
            else if (word.slice(i - j, i - j + 1) == word.slice(i + j + 1, i + j + 2)) {
                palindromeLength += 2;
            }
            //No match for the character 
            else {
                break;
            }
        }
        if (palindromeLength > longestPalindromeLength) {
            longestPalindromeLength = palindromeLength;
        }
    }
    return longestPalindromeLength;
}
