function charactersInRange(firstChar, secondChar) {

    let beginning = Math.min(firstChar.charCodeAt(0), secondChar.charCodeAt(0));
    let end = Math.max(firstChar.charCodeAt(0), secondChar.charCodeAt(0));
    let result = [];

    for (let i = beginning + 1; i < end; i++) {
        let codeResult = String.fromCharCode(i);
        result.push(codeResult);
    }
    console.log(result.join(' '));
}
charactersInRange('#',':')
