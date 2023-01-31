function lowestPricesInCities(input) {

    let result = {};

    for (let info of input) {
        let [town, product, price] = info.split(' | ');
        price = Number(price);

        if (result.hasOwnProperty(product)) {
            let productPrice = result[product]['price'];
            if (productPrice > price) {
                result[product] = {town, price}
            }
        } else {
            result[product] = {town, price} 
        }
    } 

    for (let [product, value] of Object.entries(result)) {
        console.log(`${product} -> ${value.price} (${value.town})`)
    }

}
lowestPricesInCities(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']);
