function encodeAndDecodeMessages() {

    let encodeButton = document.getElementsByTagName("button")[0];
    let decodeButton = document.getElementsByTagName("button")[1];

    encodeButton.addEventListener("click", encodeText);
    decodeButton.addEventListener("click", decodeText);

    function encodeText() {

        let text = document.getElementsByTagName("textarea")[0].value;
        let encodeText = '';

        for(let char of text) {
            let encodeCharNumber = Number(char.charCodeAt()) + 1;
            let encodeChar = String.fromCharCode(encodeCharNumber);
            encodeText += encodeChar;
        }

        document.getElementsByTagName("textarea")[1].value = encodeText;
        document.getElementsByTagName("textarea")[0].value = '';
    }

    function decodeText() {

        let encodeText = document.getElementsByTagName("textarea")[1].value;
        let decodeText = '';

        for(let char of encodeText) {
            let decodeCharNumber = Number(char.charCodeAt()) - 1;
            let decodeChar = String.fromCharCode(decodeCharNumber);
            decodeText += decodeChar;
        }

        document.getElementsByTagName("textarea")[1].value = decodeText;
    }
    // console.log('TODO...')
}
