function convertToObject(information) {

    let personInfo = JSON.parse(information);
    for (let key of Object.keys(personInfo)) {
        console.log(`${key}: ${personInfo[key]}`);
    }
}
convertToObject('{"name": "George", "age": 40, "town": "Sofia"}')
