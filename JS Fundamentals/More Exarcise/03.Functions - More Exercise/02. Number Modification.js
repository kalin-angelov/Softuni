function numberModification(number) {

    let arr = String(number).split('');
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += Number(arr[i]);
    }
    while (sum / arr.length < 5) {
        sum += 9;
        arr.push(9);
    }
    console.log(arr.join(''));
}
numberModification(5835);
