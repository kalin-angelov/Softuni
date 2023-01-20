function emojiDetector(input) {

    let regexp = /(?<symbol>[\:]{2}|[\*]{2})(?<emojis>[A-Z][a-z]{2,})\1/gm;
    let regexpNum = /(?<nums>[0-9])/gm;
    let valid;
    let emojiList = [];
    let finalResult = [];
    let coolThresholdSum = 1;
    while((valid = regexp.exec(input)) !== null) {
        let match = valid.groups['emojis'] + valid.groups['symbol']
        emojiList.push(match);
    }
    while((valid = regexpNum.exec(input)) !== null) {
        let num = Number(valid.groups['nums']);
        coolThresholdSum *= num;
    }
    for (let emoji of emojiList) {
        let sum = 0;
        for (let i = 0; i < emoji.length - 2; i++) {
            let letterValue = emoji.charCodeAt(i);
            sum += letterValue;
        }
        if (sum >= coolThresholdSum) {
            finalResult.push(emoji);
        }
    }
    console.log(`Cool threshold: ${coolThresholdSum}`);
    console.log(`${emojiList.length} emojis found in the text. The cool ones are:`);
    for (let result of finalResult) {
        if(result.endsWith('::')) {
            console.log(`::${result}`);
        } else {
            console.log(`**${result}`);
        }
    }
}
emojiDetector(["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."]);
