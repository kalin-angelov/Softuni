function race(input) {

    let list = new Map();
    let racersNameList = input.shift().split(', ');
    let regexName = /[A-Za-z]+/gm;
    let regexDistance = /\d/gm;
    let distanceScore = 0;
    let name;
    racersNameList.forEach(name => {
        list.set(name, distanceScore);
    })
    for (let info of input) {
        if (info === 'end of race') {
            break;
        }
        let nameResult = info.match(regexName).join('');
        let distanceResult = info.match(regexDistance).reduce((a,b) => {
            return Number(a) + Number(b);
        });
        if (list.has(nameResult)) {
           let finalDistanceScore = list.get(nameResult);
           finalDistanceScore += distanceResult;
           list.set(nameResult,finalDistanceScore);
        }
    }
    let listSort = Array.from(list).sort((a,b) => b[1] - a[1]) 
    let top3 = listSort.splice(0,3);
    console.log(`1st place: ${top3[0][0]}`);
    console.log(`2nd place: ${top3[1][0]}`);
    console.log(`3rd place: ${top3[2][0]}`);
}
race([
  'Ronald, Bill, Tom, Timmy, Maggie, Michonne',
  'Mi*&^%$ch123o!#$%#nne787) ',
  '%$$B(*&&)i89ll)*&) ',
  'R**(on%^&ald992) ',
  'T(*^^%immy77) ',
  'Ma10**$#g0g0g0i0e',
  'end of race'
]);
