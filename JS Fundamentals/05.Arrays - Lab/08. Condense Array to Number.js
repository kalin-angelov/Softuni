function condenseArrayToNumber(arr) {

    let sumAll = 0;
    let newArr = [];
    let arr1 = [];

    if (arr.length === 1) {
        sumAll += Number(arr);
    } else {
        for (let i = 0; i < arr.length - 1; i++) {
            let sum = 0;
            sum += Number(arr[i]) + Number(arr[i + 1]);
            newArr.push(sum);
            arr1 = newArr;     
        }
        while (arr1.length !== 1) {
            newArr = [];
            for (let k = 0; k < arr1.length - 1; k++) {
                let sum = 0;
                sum += Number(arr1[k]) + Number(arr1[k + 1]);
                newArr.push(sum);
                sumAll = sum;
            }
            arr1 = newArr;
        }
    }
    console.log(sumAll)
}   
condenseArrayToNumber([2,10,3])
