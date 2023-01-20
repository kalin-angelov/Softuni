function adAstra(data) {

    let regexp = /([\#|\|])(?<product>[a-zA-Z ]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d+)\1/gm;
    let caloriesSum = 0;
    let reservesList = [];
    let valid;
    while((valid = regexp.exec(data)) !== null) {
        let productInfo = [];
        let product = valid.groups.product;
        let date = valid.groups.date;
        let calories = valid.groups.calories;
        productInfo.push(product, date, calories);
        reservesList.push(productInfo);

    }
    for(let info of reservesList) {
        let calories = Number(info[2]);
        caloriesSum += calories;
    }
    let foodReserve = Math.trunc(caloriesSum / 2000);
    console.log(`You have food to last you for: ${foodReserve} days!`);
    for (let product of reservesList) {
        console.log(`Item: ${product[0]}, Best before: ${product[1]}, Nutrition: ${product[2]}`);
    } 
}
adAstra(['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|']);
