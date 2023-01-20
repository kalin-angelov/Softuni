function mirrorWords(text) {

    let regexp = /([\@|\#])(?<matches>[a-zA-Z]{3,}\1\1[a-zA-Z]{3,})\1/gm;
    let counter = 0;
    let valid;
    let list = [];
    let result = [];
    while((valid = regexp.exec(text)) !== null) {
        let match = valid.groups['matches'];
        list.push(match);
        counter++;
    }
    for (let info of list) {
        if (info.includes('#')) {
            let words = info.split('##');
            let wordReverse = words[1].split('').reverse().join('');
            if (words[0] === wordReverse) {
                words = words.join(' <=> ');
                result.push(words);
            }
        } else if (info.includes('@')) {
            let words = info.split('@@');
            let wordReverse = words[1].split('').reverse().join('');
            if (words[0] === wordReverse) {
                words = words.join(' <=> ');
                result.push(words);
            }
        }
    }
    if (list.length === 0) {
        console.log(`No word pairs found!`);
    } else {
        console.log(`${counter} word pairs found!`);
    }
    if (result.length === 0) {
        console.log(`No mirror words!`);
    } else {
        console.log(`The mirror words are:`);
        console.log(result.join(', '));
    }
}
mirrorWords([ '#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#' ]);
