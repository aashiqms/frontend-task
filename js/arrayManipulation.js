/**
 * This is a function which take array as input and filters by even number and multiplies element each by 2 or return error message if invalid input is passed.
 *
 * @param {number[]} n - A number array param
 * @return {string | array} A string if error or array if valid input is passed
 *
 */
function filterEvenNumbers(arr) {
    if (!Array.isArray(arr)) {
        return "Error: Input is not an array!";
    }
    if (arr.length === 0) {
        return "Empty Array Passed!";
    }
    return arr.filter(num => num % 2 === 0).map(num => num * 2);
}