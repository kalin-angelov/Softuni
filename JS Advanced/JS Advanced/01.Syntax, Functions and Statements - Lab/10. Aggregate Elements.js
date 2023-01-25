function aggregateElements(array) {

    let sum = 0;
    let sumInverse = 0;
    let sumConcat = '';
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
        sumInverse += (1 / array[i]);
        sumConcat += array[i];
    }
    console.log(sum);
    console.log(sumInverse);
    console.log(sumConcat);
    
}
aggregateElements([2, 4, 8, 16]);
