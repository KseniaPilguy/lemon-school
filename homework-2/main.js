// Task 0
function composeTimetable() {
    let num = +prompt('Введите порядковый номер недели');
    if (num === 1) {
        console.log('Вы выбрали понедельник. Сегодня тренировка');
    } else if (num === 2) {
        console.log('Вы выбрали вторник. Сегодня курсы по JS');
    } else if (num === 3) {
        console.log('Вы выбрали среду. Сегодня тренировка');
    } else if (num === 4) {
        console.log('Вы выбрали четверг. Сегодня день уборки');
    } else if (num === 5) {
        console.log('Вы выбрали пятницу. Сегодня тренировка');
    } else if (num === 6) {
        console.log('Вы выбрали субботу. Сегодня курсы по JS');
    } else if (num === 7) {
        console.log('Вы выбрали воскресенье. Сегодня выходной :)');
    } else {
        console.log('В неделе всего 7 дней');
    }
}
// composeTimetable();

// Task 1
function calcPriceTeleCall() {
    let code = +prompt('Введите код города, куда будете звонить');
    if (code === 905) {
        console.log('Выбранный город - Москва. Стоимость 10 минутного звонка составить: ' + 4.15 * 10);
    } else if (code === 194) {
        console.log('Выбранный город - Ростов. Стоимость 10 минутного звонка составить: ' + 1.98 * 10);
    } else if (code === 491) {
        console.log('Выбранный город - Краснодар. Стоимость 10 минутного звонка составить: ' + 2.69 * 10);
    } else if (code === 800) {
        console.log('Выбранный город - Киров. Стоимость 10 минутного звонка составить: ' + 5.00 * 10);
    } else {
        console.log('Извините, информации о таком городе у нас нет');
    }
}
// calcPriceTeleCall();

// Task 2
function checkPartOfHour() {
    let $min = +prompt('Введите число от 0 до 59');
    if ($min >= 0 && $min <= 15) {
        console.log('Это первая чверть часа');
    } else if ($min >= 15 && $min <= 30) {
        console.log('Это вторая чверть часа');
    } else if ($min >= 30 && $min <= 45) {
        console.log('Это третья чверть часа');
    } else {
        console.log('Это четвертая чверть часа');
    }
}
//checkPartOfHour();


// Task 3
function checkYearTime() {
    let $num = prompt('Введите число от 1 до 4');
    let $result;
    if ($num === '1') {
        $result = 'Зима';
        console.log($result);
    } else if ($num === '2') {
        $result = 'Весна';
        console.log($result);
    } else if ($num === '3') {
        $result = 'Лето';
        console.log($result);
    } else if ($num === '4') {
        $result = 'Осень';
        console.log($result);
    } else {
        console.log('Вы ввели неверное значене');
    }
}
//checkYearTime();

// Task 4
function calcRectangleSquare(height, width) {
    let s = height * width;
    console.log(s);
}
//calcRectangleSquare(23, 10);
function calcCylinderVolume(heightC, dC) {
    const pi = 3.1415;
    let radius = dC / 2;
    let v = heightC * pi * radius ** 2;
    console.log(v);
}
//calcCylinderVolume(10, 4);
function calcHypotenuse(n, m) {
    let k = Math.sqrt(n ** 2 + m ** 2);
    console.log(k);
}
//calcHypotenuse(3, 4);
function findNum() {
    let firstNum = 1;
    let secondNum = 0;
    let res = 0;
    for (let i = 0; i <= 12; i++) {
        res += secondNum;
        secondNum = firstNum;
        firstNum = res;
        console.log(res);
    }
}   
//findNum();
function calcPercent() {
    let s = 2000000;
    let p = 0.1;
    let years = 5;
    let perepl = s * p * years;
    console.log(perepl);
}
// calcPercent();


// Task 5
function cycle1() {
    let num = 45;
    while (num <= 67) {
        console.log(num);
        num++;
    }
}
//cycle1();
function cycle2() {
    let num = 45;
    while (num <= 670) {
        num++;
        if (num % 10 === 0) {
            console.log(num);
        }
    }
}
//cycle2();
function cycle3() {
    let num = 45;
    for (let i = num; i < 670; i++) {
        if (i % 10 === 0) {
            console.log(i);
        }
    }
}
//cycle3();


// Task 6
function summNum() {
    let num = prompt('Введите любое целое положительно число');
    let sum = 0;
    for (let i = 0; i <= num; i++) {
        if (i % 2 == 0) {
            sum += i;
        }
    }
    console.log(sum);
}
//summNum();


// Task 7
function calculator() {
    let contin;
    let z;
    while (contin !== 0 || contin === null) {
        let x = +prompt('Введите первое число');
        let y = +prompt('Введите второе число');
        let sign = prompt('Введите один из предоставленных знаков: +, -, *, /');

        if (sign == '+') {
            z = x + y;
        }
        if (sign == '-') {
            z = x - y;
        }
        if (sign == '*') {
            z = x * y;
        }
        if (sign == '/') {
            z = x / y;
        }
        if (y === 0 && sign == '/') {
            z = 'Деление на ноль невозможно';
        }
        if (sign !== '+' && sign !== '-' && sign !== '*' && sign !== '/') {
            z = 'Вы ввели неверный символ'
        }
        alert(z);
        contin = +prompt('Введите подтверждение вычислений: 1 - продолжать, 0 - прекратить');
    }
}
//calculator();

// Task 8
function calcSum() {
    let summ = 0;
    for (let i = 0; i <= 255; i++) {
        if (i % 2 !== 0) {
            summ += i;
        }
    }
    console.log(summ);
}
//calcSum();


// Task 9
function showMultiplicationTable() {
    let result = 3;
    for (let i = 1; i < 11; i++) {
        console.log('3 * ' + i + ' = ' + result);
        result += 3;
    }
}
//showMultiplicationTable();


// Task 10
function findSumm() {
    let num = prompt('Введите любое целое положительно число');
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum += i;
    }
    console.log(sum);
}
//findSumm();


// Task 11
function wishRiddle() {
    for (let i = 0; i < 3; i++) {
        let userAnswer = prompt('Введите ответ');
        if (userAnswer === 'Троллейбус') {
            console.log('Правильно!');
            break;
        } else if (userAnswer === 'Сдаюсь') {
            console.log('Правильный ответ - троллейбус!');
            break;
        } else {
            console.log('Подумай еще');
        }
    }
}
//wishRiddle();


// Task 12
function findSummBetweenTwoNumbers() {
    let startPoint = +prompt('Введите число начала диапазона');
    let endPoint = +prompt('Введите число конца диапазона');
    let summ = 0;
    for (let i = startPoint; i <= endPoint; i++) {
        if (i % 2 !== 0) {
            summ += i;
        }
    } console.log(summ);

}
//findSummBetweenTwoNumbers();


// Task 13
function checkFactorial() {
    let num = prompt('Введите число');
    let factorail = 1;
    for (let i = 1; i <= num; i++) {
        factorail *= i;
    }
    console.log(factorail);
}
// checkFactorial();


// Task 14
function countPower() {
    let power = 1;
    for (let i = 0; i < 10; i++) {
        power *= 2;
    }
    console.log(power);
}
// countPower();