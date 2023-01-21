function softUniReception(arr) {

    let firstEmployee = Number(arr.shift());
    let secondEmployee = Number(arr.shift());
    let thirdEmployee = Number(arr.shift());
    let questions = Number(arr.shift());
    let hourCounter = 0;
    while (questions !== 0) {
        hourCounter++;
        if (hourCounter % 4 !== 0) {
            let questionsAnswer = firstEmployee + secondEmployee + thirdEmployee;
            questions -= questionsAnswer;
            if (questions < 0) {
                questions = 0;
            }
        }
    }
    console.log(`Time needed: ${hourCounter}h.`);
}
softUniReception(['3','2','5','40']);
