function depositCalculator(input){
  
    let deposit = Number(input[0]);
    let termOfDeposit = Number(input[1]);
    let yearInterestPercent = Number(input[2]);
    let percent = yearInterestPercent / 100;

    let sum = deposit + termOfDeposit *((deposit * percent)/12);
    
    console.log(sum)

}
depositCalculator(["200","3","5.7"])
