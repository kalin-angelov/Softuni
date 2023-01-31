function calorieObject(data) {

    let result = {};
    for (let i = 0; i < data.length; i += 2) {
        let product = data[i];
        if (!result.hasOwnProperty(product)) {
            result[product] = Number(data[i + 1]);
        } 
    }

    console.log(result);
}
calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);
