function mathPower(x, y) {

    let result = 1;
    for (let i = y; y > 0; y--) {
        result *= x;
    }

    console.log(result);
}
mathPower(3, 4)
