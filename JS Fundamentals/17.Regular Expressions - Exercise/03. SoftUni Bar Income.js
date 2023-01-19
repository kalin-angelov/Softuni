function softUniBarIncome(input) {

    let regex = /%(?<customerName>[A-Z][a-z]+)%[^|$%.]*?<(?<product>[A-Za-z]+)>[^|$%.]*?\|(?<count>\d+)\|[^|$%.]*?(?<price>\d+.\d+|\d+)\$/gm;
    let totalSum = 0;
    let valid;
    while((valid = regex.exec(input)) !== null) {
        let name = valid.groups['customerName'];
        let product = valid.groups['product'];
        let count = Number(valid.groups['count']);
        let price = Number(valid.groups['price']);
        let priceSum = count * price;
        totalSum += priceSum;
        console.log(`${name}: ${product} - ${priceSum.toFixed(2)}`);
    }
    console.log(`Total income: ${totalSum.toFixed(2)}`);

}
softUniBarIncome([
  '%George%<Croissant>|2|10.3$',
  '%Peter%<Gum>|1|1.3$',
  '%Maria%<Cola>|1|2.4$',
  'end of shift'
]);
