function destinationMapper(code) {

    let regexp = /([\=|\/])(?<destination>[A-Z][a-zA-Z]{2,})\1/gm;
    let valid;
    let list = [];
    let travelPoints = 0;
    while((valid = regexp.exec(code)) !== null) {
        let place = valid.groups['destination']
        list.push(place)
    }
    for (let destination of list) {
        let destinationPoints = destination.length;
        travelPoints += destinationPoints;
    }
    console.log(`Destinations: ${list.join(', ')}`);
    console.log(`Travel Points: ${travelPoints}`);
}
destinationMapper("ThisIs some InvalidInput");
