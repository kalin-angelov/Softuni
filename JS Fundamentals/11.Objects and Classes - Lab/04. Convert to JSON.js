function convertToJSON(name, lastName, hairColor) {

    let info = {};
    info.name = name;
    info.lastName = lastName;
    info.hairColor = hairColor;

    let personInfo = JSON.stringify(info);
    console.log(personInfo);
    
}
convertToJSON('George', 'Jones', 'Brown')
