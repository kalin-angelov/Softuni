function palindromeIntegers(arrayOfNumbers) {

    for (let number of arrayOfNumbers) {
        let reversNumber = String(number).split('').reverse().join('');
        if (number == reversNumber) {
            console.log('true');
        } else {
            console.log('false');
        }
    }
}
palindromeIntegers([32,2,232,1010])
