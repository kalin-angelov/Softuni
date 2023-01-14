function passwordValidator(password) {

    let passwordL = password.length;
    let passwordElements = String(password).split('');
    let letterArray = [];
    let digitCounter = 0;
    let passwordLength;
    let passwordDigit;
    let passwordLetter;


    if (passwordL >= 6 && passwordL <= 10) {
        passwordLength = true;
    } else {
        passwordLength = false;
    }
    for (let element = 0; element < passwordElements.length; element++) {
        let chekiangIfElementIsDigit = Number(passwordElements[element]);
        if (chekiangIfElementIsDigit >= 0) {
            digitCounter++;
        } else {
            chekiangIfElementIsDigit = String(passwordElements[element]);
            letterArray.push(chekiangIfElementIsDigit);
        }
        if(digitCounter < 2) {
            passwordDigit = false;
        } else {
            passwordDigit = true;
        }
    }
    for (let el of letterArray) {
        if(/^[a-zA-Z]+$/.test(el)) {
        passwordLetter = true;
        } else {
            passwordLetter = false;
            break;
        }
    }
    if (passwordLength && passwordDigit && passwordLetter) {
        console.log(`Password is valid`);
    } 
    if (!passwordLength) {
        console.log(`Password must be between 6 and 10 characters`);
    }
    if (!passwordLetter) {
        console.log(`Password must consist only of letters and digits`);
    }
    if (!passwordDigit) {
        console.log(`Password must have at least 2 digits`);
    }
}
passwordValidator('Pa$s$s')
