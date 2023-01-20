function heroesOfCodeAndLogicVll(input) {

    let heroNumbers = input.shift();
    let heros = input.splice(0, heroNumbers);
    let heroParty = [];
    for (let heroInfo of heros) {
        let [heroName, heroHp, heroMp] = heroInfo.split(' ');
        let hero = {
            heroName:heroName,
            heroHp:heroHp,
            heroMp:heroMp,
        }
        heroParty.push(hero);
    }
    for (let info of input) {
        let commandInfo = info.split(' - ');
        let command = commandInfo[0];
        if (info === 'End') {
            for (let result of heroParty) {
                console.log(result['heroName']);
                console.log(` HP: ${result['heroHp']}`);
                console.log(` MP: ${result['heroMp']}`);
            }
            break;
        } else if (command === 'CastSpell') {
            let name = commandInfo[1];
            let spellMp = Number(commandInfo[2]);
            let spell = commandInfo[3];
            for (let hero of heroParty) {
                if (hero['heroName'] === name) {
                    if (Number(hero['heroMp']) >= spellMp) {
                        hero['heroMp'] = Number(hero['heroMp']) - spellMp;
                        console.log(`${hero['heroName']} has successfully cast ${spell} and now has ${hero['heroMp']} MP!`);
                    } else {
                        console.log(`${hero['heroName']} does not have enough MP to cast ${spell}!`);
                    }
                }
            }
        } else if (command === 'TakeDamage') {
            let name = commandInfo[1];
            let damage = Number(commandInfo[2]);
            let attackingMonster = commandInfo[3];
            for (let i = 0; i < heroParty.length; i++) {
                if (heroParty[i]['heroName'] === name) {
                    if (Number(heroParty[i]['heroHp']) > damage) {
                        heroParty[i]['heroHp'] = Number(heroParty[i]['heroHp']) - damage;
                        console.log(`${heroParty[i]['heroName']} was hit for ${damage} HP by ${attackingMonster} and now has ${heroParty[i]['heroHp']} HP left!`);
                    } else {
                        console.log(`${heroParty[i]['heroName']} has been killed by ${attackingMonster}!`);
                        heroParty.splice(i, 1);
                    }
                }
            }
        } else if (command === 'Recharge') {
            let name = commandInfo[1];
            let rechargeMp = Number(commandInfo[2]);
            for (let hero of heroParty) {
                if (hero['heroName'] === name) {
                    if (Number(hero['heroMp']) + rechargeMp >= 200) {
                        let recoverMp = 200 - Number(hero['heroMp']);
                        hero['heroMp'] = 200;
                        console.log(`${hero['heroName']} recharged for ${recoverMp} MP!`);

                    } else {
                        hero['heroMp'] = Number(hero['heroMp']) + rechargeMp;
                        console.log(`${hero['heroName']} recharged for ${rechargeMp} MP!`);
                    }
                }
            }
        } else if (command === 'Heal') {
            let name = commandInfo[1];
            let increasesHp = Number(commandInfo[2]);
            for (let hero of heroParty) {
                if (hero['heroName'] === name) {
                    if (Number(hero['heroHp']) + increasesHp >= 100) {
                        let recoverHp = 100 - Number(hero['heroHp']);
                        hero['heroHp'] = 100;
                        console.log(`${hero['heroName']} healed for ${recoverHp} HP!`);

                    } else {
                        hero['heroHp'] = Number(hero['heroHp']) + increasesHp;
                        console.log(`${hero['heroName']} healed for ${increasesHp} HP!`);
                    }
                }
            }
        }
    }

}
heroesOfCodeAndLogicVll([
    '4',
    'Adela 90 150',
    'SirMullich 70 40',
    'Ivor 1 111',
    'Tyris 94 61',
    'Heal - SirMullich - 50',
    'Recharge - Adela - 100',
    'CastSpell - Tyris - 1000 - Fireball',
    'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Ivor - 3 - Mosquito',
    'End'
]);
