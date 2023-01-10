function commonElements(array1, array2) {

    for (let el1 of array1) {
        
        for (let el2 of array2) {

            if (el1 === el2) {
                console.log(el1);
            }
        }
    }

}
commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
['s', 'o', 'c', 'i', 'a', 'l'])
