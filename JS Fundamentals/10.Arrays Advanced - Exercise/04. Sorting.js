function sorting(arr) {

    let arrayOfMaxNum = [...arr].sort((a, b) => b - a);
    let arrayOfMinNum = [...arr].sort((a, b) => a - b);
    let finalArray = [];
    let arrL = arr.length;

    while (finalArray.length !== arrL) {
        finalArray.push(arrayOfMaxNum.shift());
        arrayOfMinNum.pop();
        finalArray.push(arrayOfMinNum.shift());
        arrayOfMaxNum.pop()
    }
    console.log(finalArray.join(' '));
}
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47])
