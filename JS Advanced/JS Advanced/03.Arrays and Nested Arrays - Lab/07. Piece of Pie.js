function pieceOfPie(arr, firstPie, lastPie) {

    const firstIndex = arr.indexOf(firstPie);
    const lastIndex = arr.indexOf(lastPie) + 1;
    const result = arr.slice(firstIndex, lastIndex);
    return result;

}
console.log(pieceOfPie(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'
));
console.log(pieceOfPie(['Apple Crisp',
'Mississippi Mud Pie',
'Pot Pie',
'Steak and Cheese Pie',
'Butter Chicken Pie',
'Smoked Fish Pie'],
'Pot Pie',
'Smoked Fish Pie'
));
