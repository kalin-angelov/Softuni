function circleArea(input) {

    let inputType = typeof input;
    if (inputType === 'number') {
        console.log((Math.PI * input * input).toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof input}.`)
    }
}
circleArea(5);
