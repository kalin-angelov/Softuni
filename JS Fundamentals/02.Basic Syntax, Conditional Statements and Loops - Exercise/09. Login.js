function login(input) {

    let index = 0;
    let counter = 0;
    let username = input[index++];
    let correctPassword = false;

    while (correctPassword !== true) {

        let password = input[index++];
        let usernameReverse = password.split('').reverse().join('');
        counter++;

        if (username === usernameReverse) {
            console.log(`User ${username} logged in.`);
            correctPassword = true;

        } else if (username !== usernameReverse && counter === 4){
            console.log(`User ${username} blocked!`);
            correctPassword = true;

        } else {
            console.log(`Incorrect password. Try again.`);
        }
    }

}
login(['Acer','login','go','let me in','recA'])
