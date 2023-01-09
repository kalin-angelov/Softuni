function englishNameOfTheLastDigit(number) {

    let num = String(number);
    let lastNum = '';
    let finalNum = '';

    for (let i = 0; i < num.length; i++) {

        let newNum = num[i];
        let nextNum = '';
        nextNum += newNum;
        if (i === num.length - 1) {
            lastNum += nextNum;
        }
    }

    switch (lastNum) {
        case '0': finalNum = 'zero'; break;
        case '1': finalNum = 'one'; break;
        case '2': finalNum = 'two'; break;
        case '3': finalNum = 'three'; break;
        case '4': finalNum = 'four'; break;
        case '5': finalNum = 'five'; break;
        case '6': finalNum = 'six'; break;
        case '7': finalNum = 'seven'; break;
        case '8': finalNum = 'eight'; break;
        case '9': finalNum = 'nine'; break;
    }

    console.log(finalNum);
}
englishNameOfTheLastDigit(512)
