function plantDiscovery(input) {

    let allPlantsNum = input.shift();
    let allPlants = input.splice(0, allPlantsNum);
    let plantList = new Map();
    let list = [];
    for (let information of allPlants) {
        let [plant, rarity] = information.split('<->');
        if (!plantList.has(plant)) {
            plantList.set(plant, rarity);
        } else {
            let rarityUpdate = rarity;
            plantList.set(plant, rarityUpdate);
        }
    }
    for (let plantInfo of plantList) {
        let plants = {
            plantName:plantInfo[0],
            plantRarity:plantInfo[1],
            plantRating:'0',
        }
        list.push(plants);
    }
    for (let commandInfo of input) {
        let info = commandInfo.split(': ');
        let command = info[0];
        if (command === 'Rate') {
            let [name, rating] = info[1].split(' - ');
            let plantNotInLIst = true;
            for (let plantInfo of list) {
                if (name === plantInfo['plantName']) {
                    plantInfo['plantRating'] = plantInfo['plantRating'] + ',' + rating;
                    plantNotInLIst = false;
                } 
            }
            if (plantNotInLIst) {
                console.log(`error`);
            }
        } else if (command === 'Update') {
            let [name, rarity] = info[1].split(' - ');
            let plantNotInLIst = true;
            for (let plantInfo of list) {
                if (name === plantInfo['plantName']) {
                    plantInfo['plantRarity'] = rarity;
                    plantNotInLIst = false;
                }
            }
            if (plantNotInLIst) {
                console.log(`error`);
            }
        } else if (command === 'Reset') {
            let plantInformation = info[1].split(' - ');
            let name = plantInformation[0];
            let plantNotInLIst = true;
            for (let plantInfo of list) {
                if (name === plantInfo['plantName']) {
                    plantInfo['plantRating'] = '0';
                    plantNotInLIst = false;
                }
            }
            if (plantNotInLIst) {
                console.log(`error`);
            }
        } else if (command === 'Exhibition') {
            console.log(`Plants for the exhibition:`);
            for (let plant of list) {
                let plantRating = plant['plantRating'].split(',');
                let rating = plantRating.reduce((a,b) => Number(a) + Number(b));
                let averageRating;
                if (plantRating.length > 1) {
                   averageRating = rating / Number(plantRating.length - 1); 
                } else {
                    averageRating = rating / Number(plantRating.length);
                }
                console.log(`- ${plant['plantName']}; Rarity: ${plant['plantRarity']}; Rating: ${Number(averageRating).toFixed(2)}`);
            }
            break;
        }
    }
}
plantDiscovery([
    "2",
    "Candelabra<->10",
    "Oahu<->10",
    "Rate: Oahu - 7",
    "Rate: Candelabra - 6",
    "Exhibition"
]);
