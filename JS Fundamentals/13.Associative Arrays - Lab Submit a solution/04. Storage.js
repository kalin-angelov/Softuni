function storage(data) {

    let list = new Map();
    for (let info of data) {
        let [product, quantity] = info.split(' ');
        if (list.has(product)) {
            let productQuantity = Number(list.get(product)) + Number(quantity);
            list.set(product, productQuantity);
        } else {
            list.set(product, quantity);
        }
    }
    for (let [key, value] of list) {
        console.log(`${key} -> ${value}`);
    }
}
storage(['apple 50','apple 61','coffee 115','coffee 40'])
