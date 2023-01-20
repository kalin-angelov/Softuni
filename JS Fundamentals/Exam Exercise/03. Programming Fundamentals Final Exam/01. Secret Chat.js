function secretChat(input) {

    let text = input.shift();
    for (let commandInfo of input) {
        let info = commandInfo.split(':|:');
        let command = info[0];
        if (command === 'Reveal') {
            console.log(`You have a new text message: ${text}`);
            break;
        }
        switch (command) {
            case 'InsertSpace':
                let index = Number(info[1]);
                let firstPart = text.slice(0, index);
                let lastPart = text.slice(index, );
                text = firstPart + ' ' + lastPart;
                console.log(text);
                break;
            case 'Reverse':
                let substring = info[1];
                if (text.includes(substring)) {
                    let newSubstring = substring.split('').reverse().join('');
                    text = text.replace(substring, '');
                    text += newSubstring;
                    console.log(text);
                } else {
                    console.log('error');
                }
                break;
            case 'ChangeAll':
                let oldString = info[1];
                let newString = info[2];
                while (text.includes(oldString)) {
                    text = text.replace(oldString, newString);
                }
                console.log(text);
                break;
        } 
    }
}
secretChat([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
  ]);
