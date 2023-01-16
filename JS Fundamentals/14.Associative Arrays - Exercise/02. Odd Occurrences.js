function oddOccurrences(word) {

    let list = new Set();
    let words = word.split(' ');
    for (let word1 = 0; word1 < words.length; word1++) {
        let counter = 0;
        let element1 = words[word1].toLowerCase();
        for (let word2 = 0; word2 < words.length; word2++) {
            let element2 = words[word2].toLowerCase();
            if (element1 === element2) {
                counter++;
            }
        }
        if (!list.has(element1) && counter % 2 !== 0) {
            list.add(element1)
        }
    }
    console.log(Array.from(list).join(' '));
}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')
