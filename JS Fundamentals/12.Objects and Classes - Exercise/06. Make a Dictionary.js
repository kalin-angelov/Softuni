function makeADictionary(arrayDictionary) {

    let dictionary = [];
    let obj = {};
    for (let el of arrayDictionary) {
        let element = JSON.parse(el);
        let entries = Object.entries(element);
        let key = Object.keys(element);
        if (dictionary.includes(entries[0])) {
            obj[entries[0]] = entries[1];
        } else {
            obj = Object.assign(obj, element);
            dictionary.push(key);
        }
    }
    let terms = Object.keys(obj);
    terms = terms.sort();
    for (let el of terms) {
        console.log(`Term: ${el} => Definition: ${obj[el]}`);
    }
}   
makeADictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}','{"Bus":"Is Hot"}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}', 
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'])
