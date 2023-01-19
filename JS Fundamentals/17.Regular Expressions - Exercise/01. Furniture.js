function furniture(input) {

    let data = input.join(' ');
    let regexp = />>(?<furniture>[A-Z][A-z]+)<<(?<price>\d+\.\d+|\d+)!(?<quantity>\d+)/gm;
    let valid;
    let furnitureTotalSum = 0;
    let furnitureList = [];
    while((valid = regexp.exec(data)) !== null) {
        let furnitureName = valid.groups['furniture'];
        let furniturePrice = Number(valid.groups['price']);
        let functionQuantity = Number(valid.groups['quantity']);
        furnitureTotalSum += furniturePrice * functionQuantity;
        furnitureList.push(furnitureName);
    }
    console.log(`Bought furniture:`);
    furnitureList.forEach((el) => {
        console.log(el);
    })
    console.log(`Total money spend: ${furnitureTotalSum.toFixed(2)}`);
}
furniture([
  '>>Laptop<<312.2323!3',
  '>>TV<<300.21314!5',
  '>Invalid<<!5',
  '>>TV<<300.21314!20',
  '>>Invalid<!5',
  '>>TV<<30.21314!5',
  '>>Invalid<<!!5',
  'Purchase
 ']);
