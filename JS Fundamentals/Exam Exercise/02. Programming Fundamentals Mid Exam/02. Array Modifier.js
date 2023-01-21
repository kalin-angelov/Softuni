function arrayModifier(arr) {

    let arrayOfNum = arr.shift().split(' ');
    for (let el of arr) {
        let elements = el.split(' ');
        let command = elements[0]
        let firstIndex = elements[1];
        let secondIndex = elements[2];
        let max = Math.max(firstIndex, secondIndex);
        let min = Math.min(firstIndex, secondIndex);
        if (command === 'swap') {
            let swapFirstEl = arrayOfNum.splice(min, 1);
            arrayOfNum.splice(max, 0, swapFirstEl);
            let swapSecondEl = arrayOfNum.splice(max - 1, 1);
            arrayOfNum.splice(min, 0, swapSecondEl);
        } else if (command === 'multiply') {
            let multiplyEl = arrayOfNum[firstIndex] * arrayOfNum[secondIndex];
            arrayOfNum.splice(firstIndex, 1);
            arrayOfNum.splice(firstIndex, 0, multiplyEl);
        } else if (command === 'decrease') {
            arrayOfNum = arrayOfNum.map(x => x - 1);
        } else {
            break;
        }
    }
    console.log(arrayOfNum.join(', '));
}
arrayModifier(['1 2 3 4','swap 0 1','swap 1 2','swap 2 3','multiply 1 2','decrease','end']);
