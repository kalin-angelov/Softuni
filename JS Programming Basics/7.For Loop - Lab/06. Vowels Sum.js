function vowelsSum(input) {

    let text = input[0];
    let sum = 0;

    for (let i = 0; i < text.length; i++) {
        let character = text.charAt(i);
        switch (character) {
            case "a":
                sum = sum + 1;
                break;
            case "e":
                sum = sum + 2;
                break;
            case "i":
                sum = sum + 3;
                break;
            case "o":
                sum = sum + 4;
                break;
            case "u":
                sum = sum + 5;
                break;
            
        }
    }
    console.log(sum)
}
vowelsSum(["hello"])
