function addressBook(data) {

    let addressList = {};
    for (let info of data) {
        let [name, address] = info.split(':');
        addressList[name] = address;
    }
    let entriesAddressList = Object.entries(addressList);
    let sortAddressList = entriesAddressList.sort(([nameA, addressA],[nameB, addressB]) => {
        return nameA.localeCompare(nameB);
    })
    for (let el of sortAddressList) {
        console.log(`${el[0]} -> ${el[1]}`);
    }
}
addressBook(['Bob:Huxley Rd','John:Milwaukee Crossing','Peter:Fordem Ave',
'Bob:Redwing Ave','George:Mesta Crossing','Ted:Gateway Way','Bill:Gateway Way',
'John:Grover Rd','Peter:Huxley Rd','Jeff:Gateway Way','Jeff:Huxley Rd'])
