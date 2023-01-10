function mergeArrays(array1, array2) {

    let newArray = [];
    let array1L = array1.length;
    let array2L = array2.length;

    for (let i = 0; i < array1L; i++) {

        for (let j = 0; j < array2L; j++) {

            if (i === j) {
                
                if (i % 2 === 0) {

                    let newNum = Number(array1[i]) + Number(array2[j]);

                    newArray.push(newNum);

                } else {

                    let newString = array1[i] + array2[j];

                    newArray.push(newString)
                }
            }
        }

    }
    console.log(newArray.join(' - '));
}
mergeArrays(['13', '12312', '5', '77', '4'],['22', '333', '5', '122', '44'])
