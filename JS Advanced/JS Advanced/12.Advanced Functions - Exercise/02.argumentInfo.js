function argumentInfo(...input) {

    let obj = {};
    for (let info of input) {
        let type = typeof(info);
        console.log(`${type}: ${info}`)
        if (!obj.hasOwnProperty(type)) {
            obj[type] = 1
        } else {
            obj[type] = Number(obj[type]) + 1;
        }
    }
    let result = '';
    Object.entries(obj).forEach((el) => result += (`${el[0]} = ${el[1]}\n`))
    console.log(result);
}
argumentInfo('cat', 42, function () { console.log('Hello world!'); })
