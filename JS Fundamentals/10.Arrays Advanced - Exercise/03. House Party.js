function houseParty(arr) {

    let listNames = [];
    for (let el of arr) {
        let name = el.split(' ');
        if (name.length === 3) {
            if (!listNames.includes(name[0])) {
                listNames.push(name[0]);
            } else {
                console.log(`${name[0]} is already in the list!`);
            }
        } else {
            if (listNames.includes(name[0])) {
                listNames = listNames.filter(x => x !== name[0]);
            } else {
                console.log(`${name[0]} is not in the list!`);
            }
        }
    }
    console.log(listNames.join('\n'));
}
houseParty(['Allie is going!','George is going!','John is not going!','George is not going!'])
