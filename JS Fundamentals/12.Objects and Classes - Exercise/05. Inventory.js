function inventory(heroArray) {

    let heroList = [];
    for (let hero of heroArray) {
        let [name, level, item] = hero.split(' / ');
        heroList.push({name:name, level:level, item:item})
    }
    let sortHeros = heroList.sort((a,b) => {
        return a.level - b.level
    })
    for (let hero of sortHeros) {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.item}`);
    }
}
inventory(['Isacc / 25 / Apple, GravityGun','Derek / 12 / BarrelVest, DestructionSword','Hes / 1 / Desolator, Sentinel, Antara'])
