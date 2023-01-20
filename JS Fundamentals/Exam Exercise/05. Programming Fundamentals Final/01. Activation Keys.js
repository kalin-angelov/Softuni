function activationKeys(input) {

    let keyCode = input.shift();
    for (let commandInfo of input) {
        let info = commandInfo.split('>>>');
        let command = info[0];
        if (commandInfo === 'Generate') {
            console.log(`Your activation key is: ${keyCode}`);
            break;
        }
        switch (command) {
            case 'Contains':
                let substring = info[1];
                if (keyCode.includes(substring)) {
                    console.log(`${keyCode} contains ${substring}`);
                } else {
                    console.log(`Substring not found!`);
                }
                break;
            case 'Flip':
                let upOrLow = info[1];
                let startIndex = Number(info[2]);
                let endIndex = Number(info[3]);
                let firstPart = keyCode.slice(0,startIndex);
                let lastPart = keyCode.slice(endIndex,);
                let stringFlip = keyCode.slice(startIndex, endIndex);
                if (upOrLow === 'Upper') {
                    stringFlip = stringFlip.toUpperCase();
                    keyCode = firstPart + stringFlip + lastPart;
                } else {
                    stringFlip = stringFlip.toLowerCase();
                    keyCode = firstPart + stringFlip + lastPart;
                }
                console.log(keyCode);
                break;
            case 'Slice':
                let indexStart = Number(info[1]);
                let indexEnd = Number(info[2]);
                let firstPartOfCode = keyCode.slice(0,indexStart);
                let lastPartOfCode = keyCode.slice(indexEnd,);
                keyCode = firstPartOfCode + lastPartOfCode;
                console.log(keyCode);
                break;
        }
    }
}
activationKeys([
    "134softsf5ftuni2020rockz42",
    "Slice>>>3>>>7",
    "Contains>>>-rock",
    "Contains>>>-uni-",
    "Contains>>>-rocks",
    "Flip>>>Upper>>>2>>>8",
    "Flip>>>Lower>>>5>>>11",
    "Generate"
]);
