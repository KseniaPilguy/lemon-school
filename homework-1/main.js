// Task 0
var user = 'Stas'
var age = 21;
var fruit = 'apple';
let num = 10;
let str = '10';
let bool = true;
const color = 'white';
const country = 'Ukraine';
const ip = '192.168.0.221';

// Task 1
function compareNumbers() {
    let numberOne = prompt('Введите любое число');
    let numberTwo = prompt('Введите число другой четности');

    if (numberOne % 2 !== 0) {
        alert('Нечетное число: ' + numberOne);
    } else {
        alert('Нечетное число: ' + numberTwo);
    }
}
compareNumbers();

// Task 2
function checkYear() {
    let year = prompt('Введите год');

    if (year % 4 == 0 && year % 400 !== 0) {
        alert('В году 366 дней');
    } else {
        alert('В году 365 дней');
    }
}
//checkYear();

// Task 3
function averageNumber() {
    let numberOne = +prompt('Введите первое число');
    let numberTwo = +prompt('Введите второе число');
    let numberThree = +prompt('Введите третье число');
    let averageNumber = 0;

    if ((numberOne > numberTwo && numberOne < numberThree) || (numberOne < numberTwo && numberOne > numberThree)) {
        averageNumber = numberOne;
    } else if
        ((numberTwo > numberOne && numberTwo < numberThree) || (numberTwo < numberOne && numberTwo > numberThree)) {
        averageNumber = numberTwo;
    } else {
        averageNumber = numberThree;
    }
    alert('Среднее число: ' + averageNumber);
}
//averageNumber();

// Task 4
function findMaxNumber() {
    let numberOne = +prompt('Введите первое целое число');
    let numberTwo = +prompt('Введите второе целое число');
    let numberThree = +prompt('Введите третье целое число');
    let maxNumber = numberOne;

    if (numberTwo > numberOne) {
        maxNumber = numberTwo;
    }

    if (numberThree > numberTwo) {
        maxNumber = numberThree;
    }

    alert('Максимальное число: ' + maxNumber);
}
//findMaxNumber();

// Task 5
//let userName = 'Pavel'
/*let userSurname = 'Popov'
let userAge = 34;
let userLocation = 'Kharkiv';
let userVipStatus = false; */
