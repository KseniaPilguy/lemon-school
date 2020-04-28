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

function getSumOfSqrtFromArray() {
    let arr = [1, 2, 3, 4, 5];
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i] ** 2;
    }
    return sum;
}
//console.log(getSumOfSqrtFromArray());

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
    let num2 = +prompt('Введите многозначное число');
    console.log(number);

}
//colonOdd();

function combineArrays() {
    let arr = [1, 6, 6, 6, 3, 3, 2, 6, 6];
 
   
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            console.log(arr[i]);
            console.log(arr[j]);
            if (arr[i] === arr[j]) {
                delete arr[j];
            }
        }
    }
 console.log(arr);

}
//combineArrays();

function compareNumbers(arr) {


    return
}
//console.log(compareNumbers());


function moveElements(from,to) {
    let arr = ['a', 'b', 'c', 'd', 'e'];
    let elem = arr.splice(from, 1);
    arr.splice(to, 0, elem);

    console.log(arr);
    
}
moveElements(1, 3);

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
    for (i = 0; i < arr.length; i++) {
        alert(arr[i]);
    }
}
//alertArray();                ////////////////////////////////////////

function alertElements2() {
    let arr = ['a', 'b', 'c'];
    arr.forEach(element => {
        alert(element);
    });
}
//alertElements2();

function alertString() {
    let arr = ['a', 'b', 'c', 'd'];
    let str = arr.join(',');

    console.log(str.slice(0, 2));

}
//alertString();

function calcArrayElements() {
    let arr = [2, 5, 3, 9];
    let result = arr[0] * arr[1] + arr[2] * arr[3];
    return result;
}
//console.log(calcArrayElements());
