function repeatString(str, num) {

    let result = '';
    for (let i = 0; i < num; i++) {
        result += str;
    }
    return result;
}

console.log(repeatString("abc", 3))
