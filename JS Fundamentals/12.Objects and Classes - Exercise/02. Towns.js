function towns(arrayWithTownInfo) {

    for (let el of arrayWithTownInfo) {
        let element = el.split(' | ');
        let townInfo = {};
        townInfo.town = element[0];
        townInfo.latitude = Number(element[1]).toFixed(2);
        townInfo.longitude = Number(element[2]).toFixed(2);
        console.log(townInfo);
    }
}
towns(['Sofia | 42.696552 | 23.32601','Beijing | 39.913818 | 116.363625'])
