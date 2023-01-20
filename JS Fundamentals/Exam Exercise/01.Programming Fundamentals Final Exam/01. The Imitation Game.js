function theImitationGame(input) {

    let code = input.shift();
    for (let commandInfo of input) {
        let info = commandInfo.split("|");
        let command = info[0];
        switch (command) {
            case 'Move':
                let lettersNum = info[1];
                let firstPartOfCode = code.slice(lettersNum,);
                let lastPartOfcpde = code.slice(0,lettersNum);
                code = firstPartOfCode + lastPartOfcpde;
                break;
            case 'Insert':
                let index = info[1];
                let letter = info[2];
                let firstPart = code.slice(0,index);
                let lastPart = code.slice(index,);
                code = firstPart + letter + lastPart;
                break;
            case 'ChangeAll':
                let substring = info[1];
                let replace = info[2];
                while (code.includes(substring)) {
                    code = code.replace(substring, replace);
                }
                break;
            default:
                break;
        }
    }
    console.log(`The decrypted message is: ${code}`);
}
theImitationGame(['owyouh','Move|2','Move|3','Insert|3|are','Insert|9|?','Decode',]);
