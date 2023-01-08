function trainTheTrainers(input) {

    let judge = Number(input[0]);
    let index = 1;
    let command = input[index++];
    let scores = 0;
    let sumAllScores = 0;

    while (command !== "Finish") {
        
        let presentationName = command;
        let sum = 0;

       for (let i = 0; i < judge; i++){  
            let score = Number(input[index++]);
            scores++;
            sum += score;
            sumAllScores += score;
       }
       let avgScore = sum / judge;
       console.log(`${presentationName} - ${avgScore.toFixed(2)}.`)
       command = input[index++];
    }
    let finalAssessment = sumAllScores / scores;
    console.log(`Student's final assessment is ${finalAssessment.toFixed(2)}.`)

}
trainTheTrainers(["3","Arrays","4.53","5.23","5.00","Lists","5.83","6.00","5.42","Finish"])
