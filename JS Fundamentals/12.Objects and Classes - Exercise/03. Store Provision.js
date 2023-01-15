function storeProvision(stockInStor, stockOrder) {

    let list = {};
    for (let i = 0; i < stockInStor.length; i += 2) {
        let element = stockInStor[i];
        list[element] = stockInStor[i + 1];
    }
    for (let i = 0; i < stockOrder.length; i += 2) {
        let element = stockOrder[i];
        if (!list.hasOwnProperty(element)) {
            list[element] = 0
        }
        list[element] = stockOrder[i + 1];
    }
    for (let el in list) {
        console.log(`${el} -> ${list[el]}`);
    }
}
storeProvision(
    ['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'])
