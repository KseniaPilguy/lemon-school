function sumNumbers(firstNumber, secondNumber) {
    console.log(firstNumber + secondNumber);
}
//sumNumbers(2, 2);
function multiplyNumbers(firstNumber, secondNumber) {
    console.log(firstNumber * secondNumber);
}
//multiplyNumbers(2, 2);
function checkBiggerNumber(firstNumber, secondNumber) {
    if (firstNumber > secondNumber) {
        console.log(firstNumber);
    }
}
//checkBiggerNumber(2, 2);
function checkSmallerNumber(firstNumber, secondNumber) {
    if (firstNumber < secondNumber) {
        console.log(firstNumber);
    }
}
//checkSmallerNumber(2, 2);


function sumNumber() {
    let a = 5;
    let b = 6;
    console.log(a + b);
}
function multiplyNumber() {
    let a = 5;
    let b = 6;
    console.log(a + b);
}
function getYear() {
    console.log(2020);
}

function getNameInConsole() {
    console.log('Ksenia');
}
//getNameInConsole();

function getNameInAlert() {
    alert('Ksenia');
}
//getNameInAlert();

function getNameInConsoleAndAlert() {
    console.log('Ksenia');
    alert('Ksenia');
}
//getNameInConsoleAndAlert();


function sum(number) {
    let sum = 0;
    for (let i = 0; i <= number; i++) {
        if (i % 2 !== 0) {
            sum += i;
        }
    }

    return sum;
}
//console.log(sum(9));

function getMaxNumber(number) {
    let maxNumber = 0;
    for (let i = 0; i <= number; i++) {
        if (i % 2 == 0) {
            maxNumber = i;
        }
    }

    return maxNumber;
}
//console.log(getMaxNumber(15));

function getLastNumber(number) {
    let maxNumber = 0;
    for (let i = 0; i <= number; i++) {
        if (i % 2 !== 0) {
            maxNumber = i;
        }
    }

    return maxNumber;
}
//console.log(getLastNumber(20));

function getMaxNumberOfThird(firstNumber, secondNumber, thirdNumber) {
    let maxNumber = firstNumber;
    if (maxNumber <= secondNumber) {
        maxNumber = secondNumber;
    }
    if (maxNumber <= thirdNumber) {
        maxNumber = thirdNumber;
    }

    return maxNumber;
}
//console.log(getMaxNumberOfThird(20, 400, 160));

function getMinNumber(firstNumber, secondNumber, thirdNumber, fourthNumber, fifthNumber) {
    let arr = [firstNumber, secondNumber, thirdNumber, fourthNumber, fifthNumber];
    let minNumber = firstNumber;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < minNumber) {
            minNumber = arr[i];
        }
    }
    return minNumber;
}
//console.log(getMinNumber(80, 1, 3, 75, 15));

function getType(param) {
    return typeof param;
}
//console.log(getType('Hello'));
//console.log(getType(5));
//console.log(getType(true));

function getDayOfWeek(dayNumber) {
    switch (dayNumber) {
        case 1:
            alert('Понедельник');
            break;
        case 2:
            alert('Вторник');
            break;
        case 3:
            alert('Среда');
            break;
        case 4:
            alert('Четверг');
            break;
        case 5:
            alert('Пятница');
            break;
        case 6:
            alert('Суббота');
            break;
        case 7:
            alert('Воскресенье');
            break;
    }
}
//getDayOfWeek(1);      