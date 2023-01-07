function concatenateData(input){
  
    let firstName = input[0];
    let lastName = input[1];
    let age = Number(input[2]);
    let town = input[3];

    console.log(`You are ${input[0]} ${input[1]}, a ${input[2]}-years old person from ${input[3]}.`)
    
}
concatenateData(["Kalin","Angelov",27,"Plovdiv"])
