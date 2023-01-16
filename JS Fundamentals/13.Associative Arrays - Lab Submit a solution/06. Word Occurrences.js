function wordOccurrences(arrayOfData) {

    let result = new Map();
    for (let info of arrayOfData) {
        let name = info;
        let counter = 1;
        if (result.has(name)) {
            let num = Number(result.get(name)) + 1;
            result.set(name, num);
        } else {
            result.set(name, counter);
        }
    }
    let resultEntries = Array.from(result.entries());
    let sortResult = resultEntries.sort(([wordA, valueA], [wordB, valueB]) => {
        return valueB - valueA;
    })
    for (let el of sortResult) {
        console.log(`${el[0]} -> ${el[1]} times`);
    }
}
wordOccurrences(["dog", "bye", "city", "dog", "dad", "boys", "ginger"])
