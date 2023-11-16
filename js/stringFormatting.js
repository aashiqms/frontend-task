/**
 * This is a function takes a string and capitalizes first letter and lowercases remaining letters and returns the string
 *
 * @param {string} n - A string is given as input
 * @return {string} Modified string is returned as output
 *
 */
function stringFormatting(str) {
    if(typeof str !== 'string') {
        return "Give valid string input"
    }
    str = str.toLowerCase();
    let strArr = str.split("");
    console.log("strArr", strArr);
    let firstWord = strArr[0];
    firstWord = firstWord.toUpperCase();
    console.log("firstWord", firstWord);

    strArr[0] = firstWord;
    return strArr.join("");
}

stringFormatting();
