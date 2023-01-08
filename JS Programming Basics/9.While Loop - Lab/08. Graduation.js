function graduation(input) {

    let name = input[0];
    let index = 1;
    let score = Number(input[index]);
    let grade = 1;
    let average = 0;
    let fail = 0;
    while (true) {

        if (score < 4.00) {
            fail++;
        }
        if (fail >= 2) {
            grade -= 1;
            console.log(`${name} has been excluded at ${grade} grade`);
            break;
        }
        grade++;
        average += score;
        index++;
        score = Number(input[index]);
        
        if (grade === 13) {
            let averageScore = average / 12;
            console.log(`${name} graduated. Average grade: ${averageScore.toFixed(2)}`)
            break;
        }
        
    }
    
}
graduation(["Gosho", "5","5.5","6","5.43","5.5","6","5.55","5","6","6","5.43","5"])
