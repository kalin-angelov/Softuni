function yardGreening(input){
  
    let yard = Number(input[0]);
    let allYard = yard *7.61;
    let percent = 18 / 100;
    let discount = allYard * percent;
    let finalPrice = allYard - discount;
    
    console.log(`The final price is: ${finalPrice} lv.`);
    console.log(`The discount is: ${discount} lv.`);

}
yardGreening(["550"])
