function townsToJSON( data ) {

    data.shift();
    let townInfo = [];
    for ( let info of data ) {
        
        let objResult = {};
        info = info.split(' | ');
        let town = info.shift().split('| ').pop();
        let latitude = Number(info.shift()).toFixed(2);
        let longitude = Number(info.shift().split(' |').shift()).toFixed(2);
        objResult.Town = town;
        objResult.Latitude = Number(latitude);
        objResult.Longitude = Number(longitude);
        townInfo.push(objResult);
    }
   
    console.log(JSON.stringify(townInfo));
    
}

townsToJSON(['| Town | Latitude | Longitude |',
'| Veliko Turnovo | 43.0757 | 25.6172 |',
'| Monatevideo | 34.50 | 56.11 |']);
