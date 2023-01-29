function printEveryNthElementFromAnArray(arr, step) {

    let res = [];
    for (let i = 0; i < arr.length; i += step) {
        res.push(arr[i]);
    }
    return res;

}
console.log(printEveryNthElementFromAnArray(['5', '20', '31', '4', '20'], 2));
console.log(printEveryNthElementFromAnArray(['dsa','asd', 'test', 'tset'], 2));
console.log(printEveryNthElementFromAnArray(['1', '2','3', '4', '5'], 6));
