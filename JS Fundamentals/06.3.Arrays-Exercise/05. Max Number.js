function maxNumber(array) {

    let newArray = [];
    let isBigger = true;
    let arrayL = array.length;

    for (let i = 0; i < arrayL; i++) {

        let maxNum = array[i];

        if (i + 1 === array.length) {

            newArray.push(maxNum);
            break;
        }
        for (let j = i + 1; j < arrayL; j++) {

            if (array[i] > array[j]) {

                isBigger = true;
            } else {

                isBigger = false
                break;
            }
        }
        if (isBigger) {

            newArray.push(maxNum);
        }
    }
    console.log(newArray.join(' '));
}
maxNumber([41, 41, 34, 20])
