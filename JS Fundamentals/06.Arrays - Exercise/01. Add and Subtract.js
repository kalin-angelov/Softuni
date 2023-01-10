function addAndSubtract(arrays) {

    let sumOfOriginalArray = 0;
    let sumOfModifiedArray = 0;
    let arrayL = arrays.length;
    let modifiedArray = [];

    for (let i = 0; i < arrayL; i++ ) {

        let num = Number(arrays[i]);
        sumOfOriginalArray += num;

        if (num % 2 === 0) {
    
            num += i;
            sumOfModifiedArray += num;
            modifiedArray.push(num);

        } else {

            num -= i;
            sumOfModifiedArray += num;
            modifiedArray.push(num);
        }
    }
    console.log(modifiedArray);
    console.log(sumOfOriginalArray);
    console.log(sumOfModifiedArray);

}
addAndSubtract([-5, 11, 3, 0, 2])
