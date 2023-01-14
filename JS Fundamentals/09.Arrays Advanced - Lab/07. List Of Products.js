function listOfProducts(arr) {

    let position = 0;
    arr.sort();
    for (let el of arr) {
        position++;
        console.log(`${position}.${el}`);
    }
}
listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples'])
