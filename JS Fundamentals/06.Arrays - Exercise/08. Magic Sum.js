function magicSum(array, number) {

    let arrayL = array.length;
    let newArray = [];
    let space = '';

    for (let i = 0; i < arrayL; i ++) {

        for (let j = i + 1; j < arrayL; j++) {

            if (array[i] + array[j] === number) {
                space = `${array[i]} ${array[j]}`;
                newArray.push(space);
            } 
        }
    }
    console.log(newArray.join('\n'));
}
magicSum([1, 2, 3, 4, 5, 6],6)
