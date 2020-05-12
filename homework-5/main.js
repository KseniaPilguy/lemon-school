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

function findVowels(str) {
    let vowelsCount = 0;
    let arr = str.split('');

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes('a') || arr[i].includes('e') || arr[i].includes('i') || arr[i].includes('o') || arr[i].includes('u')) {
            vowelsCount++;
        }
    }

    return vowelsCount;
}
//console.log(findVowels('hello word'));

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

function snakeCaseToCamel(str) {
    let arr = str.split('');

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '_') {
            arr[i + 1] = arr[i + 1].toUpperCase();
            arr.splice(arr.indexOf(arr[i]), 1);
        }
    }

    return arr.join('');

}
//console.log(snakeCaseToCamel('var_test_text'));

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

function changeFirstLetterRegister(str) {
    return str.slice(0, 1).toUpperCase() + str.slice(1);
}
//console.log(changeFirstLetterRegister('это начальная строка'));

function capitalize(str) {
    let arr = str.split('');
    for (let i = 0; i < arr.length; i++) {
        arr[0] = arr[0].toUpperCase();
        if (arr[i] === ' ') {
            arr[i + 1] = arr[i + 1].toUpperCase();
        }
    }
    return arr.join('');
}
//console.log(capitalize('это начальная строка'));

function change_register(str) {
    let arr = str.split('');
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i].toLowerCase()) {
            arr[i] = arr[i].toUpperCase();
        } else {
            arr[i] = arr[i].toLowerCase();
        }
    }

    return arr.join('');
}
//console.log(change_register('КаЖдЫй ОхОтНиК'));

function remove_char(str) {
    let reg = /[0-9a-z]+/i;
    let arr = str.split('');
    for (let i = 0; i < arr.length; i++) {
        if (!reg.exec(arr[i])) {
            arr.splice(arr.indexOf(arr[i]), 1);
        }
    }

    return arr.join('');
}
//console.log(remove_char('l!ove1&and#2'));

function insensitive_search(str1, str2) {
    return str1.toLowerCase().match(str2.toLowerCase());
}
//console.log(insensitive_search('густой лес', 'лес'));

function initSnake(str) {
    let arr = str.split('');
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {

        if (arr[i] === arr[i].toUpperCase()) {
            arr[i] = arr[i].toLowerCase();
            newArr = arr.splice(arr.indexOf(arr[i]), 0, '_');
        }

    }
    console.log(newArr);
}
//initSnake('CamelCase');

function repeatStr(str, n) {
    let arr = str.split(' ');
    for (let i = 0; i < n - 1; i++) {
        arr.push(str);
    }
    return arr.join(' ');
}
//console.log(repeatStr('строка', 5));

function path(pathname) {

    return pathname.slice(pathname.lastIndexOf('/') + 1);
}
//console.log(path('/home/user/dir/file.txt'));

function insert(str, substr, pos) {
    let arr = str.split('');
    arr.splice(pos, 0, substr);

    return arr.join('');
}
//console.log(insert('это изначальная строка', 'ХА', 5));

function limitStr(str, n, symb) {
    let result;
    if (symb === undefined) {
        symb = '...';
    }
    if (str.length > n) {
        result = `${str.substr(0, n)}${symb}`;
    } else {
        result = str;
    }
    return result;
}
//console.log(limitStr('это изначальная строка', 2, '='));

function cutStringForPhrases(str, n) {
    let arr = str.split('');
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr.splice(0, n).join(''));
    }
    return newArr.join(' ');
}
//console.log(cutStringForPhrases('Необязательный параметр. Индекс, которым заканчивать извлечение (нумерация начинается с нуля)', 6));

function count(str, stringsearch) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === stringsearch) {
            count++;
        }
    }

    return count;
}
//console.log(count('это изначальная строка', 'а'));

function cutTegs(str) {
    let arr = str.split(' ');
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].startsWith('<')) {
            arr.slice(arr.indexOf(arr[i]));
       }
    }

    console.log(arr);
}
cutTegs('эта строка <p> <h1> содержит теги </br>');


function strip(str) {
    return str.trim();
}
//console.log(strip(' Max is a good boy '));

function cutString(str, n) {
    let arr = str.split(' ');
    let newArr = arr.splice(0, n);
    return newArr.join(' ');
}
//console.log(cutString('это изначальная созданная мною строка', 3));

function unique_letters(str) {
    let arr = str.split('');

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                arr.splice(arr.indexOf(arr[i]), 1);
            }
        }
    }

    return arr.join('');
}
//console.log(unique_letters('21аадлща2д'));

function removeDuplicate(str) {
    let arr = str.split(' ');

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                arr.splice(arr.indexOf(arr[i]), 1);
            }
        }
    }

    return arr.join(' ');
}
//console.log(removeDuplicate('это это изначальная это строка строка'));

function findWord(word, str) {
    return str.toLowerCase().search(word);
}
//console.log(findWord('word', 'hello Word'));

function isUpperCase(str, character) {
    if (str[character] === str[character].toUpperCase()) {
        return true;
    } else {
        return false;
    }
}
//console.log(isUpperCase('этО изначальная строка', 2));

function reverseSrting(str) {
    let arr = [];

    for (let i = str.length - 1; i >= 0; i--) {
        arr.push(str[i]);
    }

    return arr.join('');
}
//console.log(reverseSrting('это изначальная строка'));
