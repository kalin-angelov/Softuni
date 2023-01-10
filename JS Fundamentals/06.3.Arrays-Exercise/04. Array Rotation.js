function arrayRotation(array, rotations) {

    while (rotations > 0) {

        let elementMove = array.shift();
        array.push(elementMove);
        rotations--;
    }

    console.log(array.join(' '));

}
arrayRotation([51, 47, 32, 61, 21], 2)
