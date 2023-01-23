function muOnline(data) {

    let health = 100;
    let bitcoins = 0;
    let roomCounter = 0;
    let array = data.split('|');
    let youAreDead = false;
    let monster;
    for (let commandInfo of array) {
        let [obstacles, amount] = commandInfo.split(' ');
        if (obstacles === 'potion'){
            roomCounter++;
            health += Number(amount);
            if (health < 100) {
                console.log(`You healed for ${amount} hp.`);
                console.log(`Current health: ${health} hp.`);
            } else {
                health -= amount;
                amount = 100 - health;
                health = 100;
                console.log(`You healed for ${amount} hp.`);
                console.log(`Current health: ${health} hp.`);
            }
            
        } else if (obstacles === 'chest') {
            roomCounter++;
            bitcoins += Number(amount);
            console.log(`You found ${amount} bitcoins.`);
        } else {
            roomCounter++;
            health -= Number(amount);
            if (health <= 0) {
                youAreDead = true;
                monster = obstacles;
                break;
            } else {
                console.log(`You slayed ${obstacles}.`);
            }
        }
    }
    if (!youAreDead) {
        console.log(`You've made it!`);
        console.log(`Bitcoins: ${bitcoins}`);
        console.log(`Health: ${health}`);
    } else {
        console.log(`You died! Killed by ${monster}.`);
        console.log(`Best room: ${roomCounter}`);
    }
}
muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000")
