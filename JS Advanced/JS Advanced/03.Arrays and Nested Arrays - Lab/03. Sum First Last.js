function sumFirstLast(input) {

    let firstNum = Number(input.shift());
    let lastNum = Number(input.pop());
    console.log(firstNum + lastNum);
    
}
sumFirstLast(['20', '30', '40']);
sumFirstLast(['5', '10']);
