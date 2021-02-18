// Add three question marks to the string
function addQuestions(string) {
    return string + '???';
}

let resultHello = addQuestions('hello');
resultHello;
let resultWhatEven = addQuestions('what even');
resultWhatEven;

// Add two strings with a space in the middle
function spacedStrings(str1, str2) {
    return str1 + ' ' + str2;
}

let ohHi = spacedStrings('oh', 'hi');
ohHi;
let helloBack = spacedStrings('well', 'hello back');
helloBack;

// Subtract three numbers

function subtractThreeNums(num1, num2, num3) {
    return num1 - num2 - num3;
}

let subtractNums = subtractThreeNums(10, 1, 2);
subtractNums;
let subtractNums2 = subtractThreeNums(8, 3, 5);
subtractNums2;
let subtractNums3 = subtractThreeNums(100, 80, 25);
subtractNums3;

// Subtract three numbers in reverse order
function reverseSubNums(num1, num2, num3) {
    return num3 - num2 - num1;
}

let reverseSub1 = reverseSubNums(10, 1, 2);
reverseSub1;
let reverseSub2 = reverseSubNums(2, 1, 10);
reverseSub2;

// Triple a string

function tripleStrings(string) {
    return string.repeat(3);
}

let tripleCodeImmersives = tripleStrings('codeimmersives');
tripleCodeImmersives;
let tripleTheBest = tripleStrings('is the best');
tripleTheBest;

//Return the square root of a number

function squaredNums(num) {
    return Math.sqrt(num);
}

let squareFirst = squaredNums(16);
squareFirst;
let squareSecond = squaredNums(4);
squareSecond;
let squareThird = squaredNums(9);
squareThird;
