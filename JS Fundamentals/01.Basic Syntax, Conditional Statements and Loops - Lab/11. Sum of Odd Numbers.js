function sumOfOddNumbers (n) {

    let sum = 0;
    let number = 1;

    for (let i = 0; i < n; i++ ) {  
        if (number % 2 !== 0) {
            console.log(number);
        }
        
        sum += number;
        number += 2;
    }

    console.log(`Sum: ${sum}`)
}
sumOfOddNumbers (3)
