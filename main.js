let obj = {
    num: +prompt('Введите число'),
    result: false,
    checkBiggerThan0() {
        if (this.num > 0) return true;
    },
    checkLessThan1000() {
        if (this.num < 1000) return true;
    },
    checkNumberIsOdd() {э
        
        if (this.num % 2 !== 0) return true;
    },
    checkDivideOf3() {
        if (this.num % 3 === 0) return true;
    },
    validation() {
        if (this.checkBiggerThan0() && this.checkLessThan1000() && this.checkNumberIsOdd() && this.checkDivideOf3()) {
            this.result = true;
        }
        return this.result;
    }
};
console.log(obj.validation());










