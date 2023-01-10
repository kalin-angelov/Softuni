function reverseInPlace(arr) {

    let revers = '';

    for (let i = arr.length - 1; 0 <= i; i--) {
        revers += arr[i];
        revers += ' ';
    }

    console.log(revers);
}
reverseInPlace(['a', 'b', 'c', 'd', 'e'])
