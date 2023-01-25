function stringLength(first, second, last) {

    let firstWord = first.length;
    let secondWord = second.length;
    let lastWord = last.length;

    console.log(firstWord + secondWord + lastWord);
    console.log(Math.floor((firstWord + secondWord + lastWord) / 3))
}
stringLength('chocolate', 'ice cream', 'cake');
