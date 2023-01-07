function petShop(input){
  
    let dogFood = Number(input[0]);
    let catFood = Number(input[1]);
    let dog = dogFood * 2.50;
    let cat = catFood * 4;
    let sum = dog + cat;
    console.log(sum + " " + "lv.")

}
petShop([5,4])
