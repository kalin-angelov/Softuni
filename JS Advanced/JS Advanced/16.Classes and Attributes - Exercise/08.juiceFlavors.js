function juiceFlavors(array) {

    let allProducts = new Map();
    let result = [];
    for (let info of array) {
        let [juice, quantity] = info.split(' => ');
        if (!allProducts.has(juice)) {
            allProducts.set(juice, quantity);
        } else {
            if (Number(allProducts.get(juice)) < 1000) {
                let newQuantity = Number(allProducts.get(juice)) + Number(quantity);
                allProducts.delete(juice);
                allProducts.set(juice,newQuantity);
            } else {
                let newQuantity = Number(allProducts.get(juice)) + Number(quantity);
                allProducts.set(juice, newQuantity);
            };
            
        };
    };

    for(let product of allProducts) {
        if (product[1] >= 1000) {
            let bottles = Math.trunc(product[1] / 1000);
            console.log(`${product[0]} => ${bottles}`);
        }
    }

}
juiceFlavors(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']
);
