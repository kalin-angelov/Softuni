function rotateArray(arr, rotation) {

    for (let i = 0; i < rotation; i++) {
        let spin = arr.pop();
        arr.unshift(spin);
    }
    console.log(arr.join(' '));

}
rotateArray(['1', '2', '3', '4'], 2);
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple'], 15);
