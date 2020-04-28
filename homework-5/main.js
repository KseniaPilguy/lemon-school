function checkPalindrome() {
    let str = prompt('Введите слово').toLowerCase();
    let newStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }

    if (str === newStr) {
        return true;
    } else {
        return false;
    }
}

//console.log(checkPalindrome());

function checkAnagramm() {
    let str1 = prompt('Введите первое слово').toLowerCase();
    let str2 = prompt('Введите второе слово').toLowerCase();


}

//console.log(checkAnagramm());

function cutText1() {
    let str = 'aaa bbb ccc';
    return str.slice(4, 7);
}
//console.log(cutText1());
function cutText2() {
    let str = 'aaa bbb ccc';
    return str.substr(4, 3);
}
//console.log(cutText2());
function cutText3() {
    let str = 'aaa bbb ccc';
    return str.substring(4, 7);
}
//console.log(cutText3());

function changeFormat() {
    let str = '2025-12-31';
    let arr = str.split('-');
    let newStr = arr.join('/');
    return newStr;
}
//console.log(changeFormat());

function changeWordsCase() {
    let str1 = 'js';
    let str2 = 'JS';

    return `${str1.toUpperCase()} ${str2.toLowerCase()}`;
}
//console.log(changeWordsCase());

function checkStringLength() {
    let str = 'я учу javascript!';
    return str.length;
}
//console.log(checkStringLength());

function cutPhrase() {
    let str = 'я учу javascript!';
    return str.slice(2, 17);
}
//console.log(cutPhrase());
function cutPhrase2() {
    let str = 'я учу javascript!';
    return str.substr(2, 15);
}
//console.log(cutPhrase2());
function cutPhrase3() {
    let str = 'я учу javascript!';
    return str.substring(2, 17);
}
//console.log(cutPhrase3());

function checkWordPosition() {
    let str = 'я учу javascript!';
    return str.indexOf('учу');
}
//console.log(checkWordPosition());

function cutLenghtOfSting(n) {
    let str = 'Метод indexOf осуществляет поиск подстроки (указывается первым параметром) в строке.';
    let result;
    if (str.length > n) {
        result = `${str.substr(0, n)}...`;
    } else {
        result = str;
    }
    return result;
}
//console.log(cutLenghtOfSting(30));

function createArrayFromString() {
    let str = 'я учу javascript!';
    return str.split(' ');
}
//console.log(createArrayFromString());

function createArrayFromString2() {
    let str = 'я учу javascript!';
    return str.split('');
}
//console.log(createArrayFromString2());

function changeDate() {
    let str = '2025-12-31';
    let arr = str.split('-');
    arr.reverse();

    return arr.join('.');
}
//console.log(changeDate());

function changeStringFromArray() {
    let arr = ['я', 'учу', 'javascript', '!'];
    return arr.join('+');
}
//console.log(changeStringFromArray());

function changeFirstLetter() {
    let str = 'hello world';
    return str[0].toUpperCase() + str.slice(1);
}
//console.log(changeFirstLetter());

function changeEachFirstLetter() {
    let str = 'hello world';
    let arr = str.split(' ')
    let out = ''
    for (let i = 0; i < arr.length; i++) {
        if (i == arr.length - 1) {
            out += arr[i].firstLetterCaps();
        } else {
            out += arr[i].firstLetterCaps() + ' ';
        }
    }
}
//console.log(changeEachFirstLetter());

function stringToarray(str) {
    let arr = str.split(' ');

    return arr;
}
//console.log(stringToarray('hello word'));

function delete_characters(str, length) {
    return str.substr(0, length);
}
//console.log(delete_characters('hello this beautiful word', 10));

function insert_dash(str) {
    let arr = str.split(' ');
    return arr.join('-').toUpperCase();
}
//console.log(insert_dash('hello this beautiful word'));

