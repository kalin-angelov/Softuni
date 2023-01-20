function passwordReset(input) {

    let code = input.shift();
    for (let info of input) {
        let infoCommands = info.split(' ');
        let command = infoCommands[0];
        if (info === 'Done') {
            console.log(`Your password is: ${code}`);
            break;
        }
        switch (command) {
            case 'TakeOdd':
                let newCode = [];
                for (let i = 0; i < code.length; i++) {
                    if (i % 2 !== 0) {
                        newCode.push(code[i]);
                    }
                }
                code = newCode.join('');
                console.log(code);
                break;
            case 'Cut':
                let index = infoCommands[1];
                let length = infoCommands[2];
                code = code.split('');
                code.splice(index, length);
                code = code.join('');
                console.log(code);
                break;
            case 'Substitute':
                let thereIsNewSubstitute = false;
                let substitute = infoCommands[2];
                let substring = infoCommands[1];
                while(code.includes(substring)) {
                    code = code.replace(substring, substitute);
                    thereIsNewSubstitute = true;
                }
                if (!thereIsNewSubstitute) {
                    console.log(`Nothing to replace!`);
                } else {
                    console.log(code);
                }
                break;
        
        }
    }
}
passwordReset([
    "up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
    "TakeOdd",
    "Cut 18 2",
    "Substitute ! ***",
    "Substitute ? .!.",
    "Done"
]);
