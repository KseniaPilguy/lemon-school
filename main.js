let obj = {
    number: 0,
    checkBiggerThan0() {
        if (this.number > 0) return true;
    },
    checkLessThan1000() {
        if (this.number < 1000) return true;
    },
    checkNumberIsOdd() {
        if (this.number % 2 !== 0) return true;
    },
    checkDivideOf3() {
        if (this.number % 3 === 0) return true;
    },
    validation: false
};


obj.number = +prompt('Введите число');
if (obj.checkBiggerThan0() === true && obj.checkLessThan1000() === true && obj.checkNumberIsOdd() === true && obj.checkDivideOf3() === true) {
    obj.validation = true;
}

console.log(obj.validation);









