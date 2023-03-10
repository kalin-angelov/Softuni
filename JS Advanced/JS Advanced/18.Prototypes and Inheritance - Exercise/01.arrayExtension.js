(function arrayExtension() {

    Array.prototype.last = function () {
        return this[this.length - 1];
    }

    Array.prototype.skip = function (num) {
        return this.slice(num);
    }

    Array.prototype.take = function (num) {
        return this.slice(0, num);
    }

    Array.prototype.sum = function () {
        return this.reduce((firstNum, secondNum) => firstNum + secondNum)
    }

    Array.prototype.average = function () {
        return array.sum() / this.length;
    }
    
})();
