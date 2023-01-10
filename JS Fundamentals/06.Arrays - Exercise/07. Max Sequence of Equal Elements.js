function maxSequenceOfEqualElements(array) {

    let newArray = [];
    let arrayL = array.length;

    for (let i = 0; i < arrayL; i++) {

        let sequence = [];

        for (let j = i; j < arrayL ; j++ ) {

            if (array[i] !== array[j]) {
                
                break;
            } else {

                sequence.push(array[i]);
            }
        }
        if (sequence.length > newArray.length) {

            newArray = sequence;
        }
    }
    console.log(newArray.join(' '));
}
maxSequenceOfEqualElements([0, 1, 1, 5, 2, 2, 6, 3, 3])
