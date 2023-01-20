function pirates(input) {

    let listWithTargets = []
    let count = 0;
    for (let target of input) {
        if (target === 'Sail') {
            count++;
            break;
        } else {
            count++;
            let [town, population, gold] = target.split('||');
            let targetInfo = {
                town:town,
                population:population,
                gold:gold,
            }
            if (listWithTargets.length === 0) {
                listWithTargets.push(targetInfo);
            } else {
                let isOk = true;
                for (let target of listWithTargets) {
                    if (target['town'] === town) {
                        target['population'] = Number(target['population']) + Number(population);
                        target['gold'] = Number(target['gold']) + Number(gold);
                        isOk = false;
                    } 
                }
                if (isOk) {
                    listWithTargets.push(targetInfo);
                }
            }
        }
    }
    input.splice(0, count);
    for (let info of input) {
        let events = info.split('=>');
        let command = events[0];
        if (command === 'Plunder') {
            let townName = events[1];
            let peopleKill = Number(events[2]);
            let goldPlunder = Number(events[3]);
            for (let i = 0; i < listWithTargets.length; i++) {
                if (listWithTargets[i]['town'] === townName) {
                    listWithTargets[i]['population'] = Number(listWithTargets[i]['population']) - peopleKill;
                    listWithTargets[i]['gold'] = Number(listWithTargets[i]['gold']) - goldPlunder;
                    if (Number(listWithTargets[i]['population']) <= 0 || Number(listWithTargets[i]['gold']) <= 0) {
                        console.log(`${townName} plundered! ${goldPlunder} gold stolen, ${peopleKill} citizens killed.`)
                        console.log(`${townName} has been wiped off the map!`);
                        listWithTargets.splice(i, 1);
                    } else {
                        console.log(`${townName} plundered! ${goldPlunder} gold stolen, ${peopleKill} citizens killed.`);
                    }
                }
            }
        } else if (command === 'Prosper') {
            let townName = events[1];
            let goldAdd = Number(events[2]);
            for (let townInfo of listWithTargets) {
                if (townInfo['town'] === townName) {
                    if (goldAdd < 0) {
                        console.log(`Gold added cannot be a negative number!`);
                    } else {
                        townInfo['gold'] = Number(townInfo['gold']) + goldAdd;
                        console.log(`${goldAdd} gold added to the city treasury. ${townInfo['town']} now has ${townInfo['gold']} gold.`);
                    }
                }
            }
        } else if (command === 'End') {
            if (listWithTargets.length === 0) {
                console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`);
            } else {
                console.log(`Ahoy, Captain! There are ${listWithTargets.length} wealthy settlements to go to:`);
                listWithTargets.forEach((info) => console.log(`${info['town']} -> Population: ${info['population']} citizens, Gold: ${info['gold']} kg`));
            }
            break;
        }
    }
}
pirates([
    "Tortuga||345000||1250",
    "Santo Domingo||240000||630",
    "Havana||410000||1100",
    "Sail",
    "Plunder=>Tortuga=>75000=>380",
    "Prosper=>Santo Domingo=>180",
    "End"
]);
