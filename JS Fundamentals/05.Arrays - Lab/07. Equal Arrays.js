function equalArrays(arr1, arr2) {

    let sum = 0;
    let index = 0;
    let identical = true;

    for (let i = 0; i < arr1.length; i++) {

        if (arr1[i] === arr2[i]) {
            index++;
            sum += Number(arr1[i]);
        } else {
            console.log(`Arrays are not identical. Found difference at ${index} index`);
            identical = false;
            break;
        }
    }

    if (identical) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
    
}
equalArrays(['10','20','30'], ['10','20','30'])
