function phoneBook(data) {

    let phonInfo = {};
    for (let info of data) {
        let [name, number] = info.split(' ');
        phonInfo[name] = number;
    }
    for (let name in phonInfo) {
        console.log(`${name} -> ${phonInfo[name]}`);
    }
}
phoneBook(['Tim 0834212554','Peter 0877547887','Bill 0896543112','Tim 0876566344'])
