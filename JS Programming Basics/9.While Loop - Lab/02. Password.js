function password(input) {

    let username = input[0];
    let realPass = input[1];
    let index = 2;
    let pass = input[index];

    while (realPass !== pass) {

        index++;
        pass = input[index];
    
    }
    console.log(`Welcome ${username}!`)
     
}
password(["Nakov","1234","Pass","1324","1234"])
