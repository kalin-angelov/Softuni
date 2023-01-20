function fancyBarcodes(data) {

    let barcodesNumber = data.shift();
    let list = [];
    let regexp = /([\@][\#]+)(?<validBarcode>[A-Z][a-zA-Z0-9]{4,}[A-Z])([\@][\#]+)/gm;
    for (let code of data) {
        let match = code.match(regexp);
        list.push(match);
    }
    for (let info of list) {
        if (info === null) {
            console.log(`Invalid barcode`);
        } else {
            let num = '';
            let barcode = info[0];
            for (let i = 0; i < barcode.length; i++) {
                if (Number(barcode[i]) >= 0) {
                    num += barcode[i]
                }
            }
            if (num.length === 0) {
                num = `00`;
            }
            console.log(`Product group: ${num}`);
        }
    }
}
fancyBarcodes([
    "6",
    "@###Val1d1teM@###",
    "@#ValidIteM@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#"
]);
