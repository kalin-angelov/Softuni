function aMinerTask(data) {

    let result = new Map();
    for (let i = 0; i < data.length; i += 2) {
        let resources = data[i];
        for (let k = i + 1; k < data.length;) {
            let quantity = data[k];
            if (!result.has(resources)) {
                result.set(resources, quantity);
            } else {
                let newQuantity = Number(result.get(resources)) + Number(quantity);
                result.set(resources, newQuantity);
            }
            break;
        }
    }
    let resultEntries = Array.from(result);
    for (let [resources, quantity] of resultEntries) {
        console.log(`${resources} -> ${quantity}`);
    }
}
aMinerTask(['gold','155','silver','10','copper','17','gold','15'])
