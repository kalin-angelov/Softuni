function wordTracker(array) {

    let result = new Map();
    let word = array.shift().split(' ');
    for (let info of word) {
        let count = 0;
        result.set(info, count);
        for (let el of array) {
            if (info === el) {
                count++;
                result.set(info, count);
            }
        }
    }
    let entries = Array.from(result.entries());
    let sort = entries.sort(([worA, timesA],[worB, timesB]) => {
        return timesB - timesA;
    })
    for (let el of sort) {
        console.log(`${el[0]} - ${el[1]}`);
    }
}
wordTracker(['is the', 'first', 'sentence', 'Here', 'is',
 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence'])
