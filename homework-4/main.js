function copyArr() {
    let arr = [10, 2, 13, 4, 25, 6, 7];
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i]);
    }

    return newArr;
}
//console.log(copyArr());


function transformArray() {
    let arr = [10, 2, 13, 4, 25, 6, 7];
    let str = arr.join(',');
    let str2;
    for (let i = 0; i < arr.length; i++) {
        str2 = str2 + arr[i] + ',';
    }
    return str2;
}
//console.log(transformArray());

function fillArrayWithSymbolX() {
    let arr = [];
    arr.length = 10;
    let newArr = arr.fill('x', 0, 10);
    return newArr;
}
//console.log(fillArrayWithSymbolX());

function fillArrayWithNumbers() {
    let arr = [];
    for (let i = 1; i <= 10; i++) {
        arr.push(i);
    }
    return arr;
}
//console.log(fillArrayWithNumbers());

function fillArrayWithRandomFractions() {
    let arr = [];
    for (let i = 0; i < 10; i++) {
        let randomNumber = Math.random() * (0 - 1) + 1;
        arr.push(randomNumber);
    }
    return arr;
}
//console.log(fillArrayWithRandomFractions());


function fillArrayWithRandomNumbers() {
    let arr = [];
    for (let i = 0; i < 10; i++) {
        let randomNumber = Math.floor(Math.random() * (11 - 1)) + 1;
        arr.push(randomNumber);
    }
    return arr;
}
//console.log(fillArrayWithRandomNumbers());

function putElementFromArrayToConsole() {
    let arr = [100, 15, 3, 4, 77, 89, 0, 32, 4, 7];
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > 0 && arr[i] < 10) {
            console.log(arr[i]);
        }
    }
}
//putElementFromArrayToConsole();

function findElementFromArray() {
    let arr = [100, 15, 3, 4, 5, 89, 0, 32, 4, 7];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 5) {
            return 'Есть';
            break;
        }
    }
}
//console.log(findElementFromArray());

function getSumFromArray() {
    let arr = [1, 2, 3, 4, 5];
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
//console.log(getSumFromArray());

function sumOfSquares(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i] ** 2;
    }
    return sum;
}
//console.log(sumOfSquares([1, 2, 3, 4, 5]));

function getAverageFromArray() {
    let arr = [1, 2, 3, 4, 5];
    let sum = 0;
    let average = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    average = sum / arr.length;
    return average;
}
//console.log(getAverageFromArray());

function colonOdd(num) {
    let str = num.toString();
    let result = [str[0]];
    for (var i = 1; i < str.length; i++) {
        if ((str[i - 1] % 2 !== 0) && (str[i] % 2 !== 0)) {
            result.push(':', str[i]);
        }
        else {
            result.push(str[i]);
        }
    }
    return result.join('');
}
//console.log(colonOdd(55639217));

function getFirst(arr, n) {
    let newArr = arr.splice(0, n);
    return newArr;
}
//console.log(getFirst([1, 2, 3, 4, 5, 6, 7, 8, 9], 5));

function sumTwoArrays(arr1, arr2) {
    let arr = [];
    for (let i = 0; i < arr1.length; i++) {
        arr.push(arr1[i] + arr2[i]);
    }

    return arr;
}
//console.log(sumTwoArrays([1, 2, 6, 3], [5, 2, 0, 3]));

function union(arr1, arr2) {
    let arr = arr1.concat(arr2);

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                arr.splice(arr.indexOf(arr[i]), 1);
            }
        }
    }

    return arr;
}
//console.log(union([1, 2, 6, 3], [5, 2, 0, 3]));

function compareNumbers(arr) {
    arr.sort(function (a, b) {
        return b - a;
    });

    return arr;
}
//console.log(compareNumbers([1, 2, 6, 1, 3]));

function moveElements(from, to) {
    let arr = ['a', 'b', 'c', 'd', 'e'];
    let elem = arr.splice(from, 1);
    arr.splice(to, 0, elem);

    console.log(arr);

}
//moveElements(1, 3);

function generateNumbers(start, len) {
    let arr = [];
    for (let i = start; i < start + len; i++) {
        arr.push(i);
    }

    return arr;
}
//console.log(generateNumbers(1,5));

function addElementsToEnd() {
    let arr = ['a', 'b', 'c'];
    arr.push(1, 2, 3);
    return arr;
}
//console.log(addElementsToEnd());

function reverseArray() {
    let arr = [1, 2, 3];
    return arr.reverse();
}
//console.log(reverseArray());

function addElementsToStart() {
    let arr = [1, 2, 3];
    arr.unshift(4, 5, 6);
    return arr;
}
//console.log(addElementsToStart());

function putLastElementToConsole() {
    let arr = ['js', 'css', 'jq'];
    console.log(arr[arr.length - 1]);
}
//putLastElementToConsole();

function sliceElements() {
    let arr = [1, 2, 3, 4, 5];
    let newArr = arr.slice(3, 5);
    return newArr;
}
//console.log(sliceElements());

function rewriteArray() {
    let arr = [1, 2, 3, 4, 5];
    arr.splice(1, 2);
    return arr;
}
//console.log(rewriteArray());

function createNewArray() {
    let arr = [1, 2, 3, 4, 5];
    let newArr = arr.splice(1, 3);
    return newArr;
}
//console.log(createNewArray());

function getElementFromArray() {
    let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    return arr[1][0];
}
//console.log(getElementFromArray());

function showElementFromObject() {
    let obj = {
        js: ['jQuery', 'Angular'],
        php: 'hello', css: 'world'
    }

    return obj.js[0];
}
//console.log(showElementFromObject());

function alertArray() {
    let arr = ['a', 'b', 'c'];
    alert(arr);
}
//alertArray();

function alertElements2() {
    let arr = ['a', 'b', 'c'];
    arr.forEach(element => {
        alert(element);
    });
}
//alertElements2();

function rewriteArrayWithPlus() {
    let arr = ['a', 'b', 'c', 'd'];
    return `${arr[0]}+${arr[1]},${arr[2]}+${arr[3]}`;
}
//console.log(rewriteArrayWithPlus());


function calcArrayElements() {
    let arr = [2, 5, 3, 9];
    let result = arr[0] * arr[1] + arr[2] * arr[3];
    return result;
}
//console.log(calcArrayElements());
