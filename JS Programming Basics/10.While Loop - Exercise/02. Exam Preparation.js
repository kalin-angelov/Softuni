function examPreparation(input) {

    let index = 0;
    let unsatisfyingScore = Number(input[index++]);
    let problem = input[index++];
    let sum = 0;
    let lastProblem = "";
    let numberOfProblems = 0;
    let unsatisfying = 0;
    let needBreak = false;

    while(problem !== "Enough") {
        let score = Number(input[index++]);

        numberOfProblems++;
        lastProblem = problem;
        sum += score;

        if (score <= 4) {
            unsatisfying++;
        }
        if (unsatisfying === unsatisfyingScore) {
            console.log(`You need a break, ${unsatisfying} poor grades.`);
            needBreak = true;
            break;
        }
        problem = input[index++];


    } 
    if (!needBreak) {
        let average = sum / numberOfProblems;
        console.log(`Average score: ${average.toFixed(2)}`);
        console.log(`Number of problems: ${numberOfProblems}`);
        console.log(`Last problem: ${lastProblem}`);
        }

}
examPreparation(["3","Money","6","Story","4","Spring Time","5","Bus","6","Enough"])
