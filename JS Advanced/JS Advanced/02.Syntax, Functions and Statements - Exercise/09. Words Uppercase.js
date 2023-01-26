function wordsUppercase(text) {

    let regex = /[\w]+/gm;
    let match = text.match(regex);
    console.log(match.join(', ').toUpperCase());

}
wordsUppercase('Hi, how are you?');
wordsUppercase('hello');
