function bonusScore(input){
  
    let num = Number(input[0]);
     bonus = 0;

    if (num % 10 === 5){
        bonus = bonus + 2;
    } else if(num % 2 ===0){
        bonus = bonus + 1;
        }if (num <= 100){
        bonus = bonus + 5;
        console.log(bonus);
        console.log(num + bonus);
        } else if (num > 1000){
        bonus = (bonus + num * 0.10);
        console.log(bonus);
        console.log(num + bonus);
        }else {
        bonus = (bonus + num * 0.20);
        console.log(bonus);
        console.log(num + bonus);
    }
         
}
bonusScore(["15875"])
