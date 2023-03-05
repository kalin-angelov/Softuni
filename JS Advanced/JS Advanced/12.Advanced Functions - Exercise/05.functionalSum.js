function functionalSum(a) {
    let sum = a;

    function result (b) {
        sum += b;
        return result
    }

    result.toString = function() {
        return sum
    }

    return result
}
console.log(functionalSum(1)(6)(-3).toString());
