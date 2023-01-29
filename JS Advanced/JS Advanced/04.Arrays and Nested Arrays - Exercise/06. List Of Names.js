function listOfNames(arr) {

    arr.sort((a,b) => a.localeCompare(b));
    arr.forEach((name, i) => console.log(`${1 + i}.${name}`))
    
}
listOfNames(["John", "Bob", "Christina", "Ema"]);
