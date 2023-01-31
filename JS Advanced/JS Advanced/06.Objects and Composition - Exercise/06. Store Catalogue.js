function storeCatalogue(list) {

    list.sort((a,b) => a.localeCompare(b));
    let group = list[0][0];
    console.log(group);
    for (let item of list) {
        let [ product, price ] = item.split(' : ');
        if (product[0] === group) {
            console.log('  ' + `${product}: ${price}`)
        } else {
            group = product[0];
            console.log(group);
            console.log('  ' + `${product}: ${price}`);
        }
    }
}
storeCatalogue(['Banana : 2',
"Rubic's Cube : 5",
'Raspberry P : 4999',
'Rolex : 100000',
'Rollon : 10',
'Rali Car : 2000000',
'Pesho : 0.000001',
'Barrel : 10']);
