function reverseString(char) {

    let word = String(char);
    let newWord = char.split('').reverse().join('');
    console.log(newWord);
}
reverseString('Hello')
