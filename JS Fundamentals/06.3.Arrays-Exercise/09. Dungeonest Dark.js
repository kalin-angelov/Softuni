function dungeonestDark(array) {

    let health = 100;
    let coins = 0;
    let roomCounter = 0;
    let yourOk = true;
    let str = array[0];

    for (let el of str) {
        if (el === '|') {
            str = str.replace('|', ' ');
        }
    }

    let newArray = str.split(' ');
    let index = 0;

    while (yourOk) {

        let roomObstacleOrBonus = String(newArray[index++]);
        let healthDroopOrReward = Number(newArray[index]);
        roomCounter++;

        if (roomObstacleOrBonus === 'chest') {
            coins += healthDroopOrReward;
            console.log(`You found ${healthDroopOrReward} coins.`);
        
        } else if (roomObstacleOrBonus === 'potion') {
            health += healthDroopOrReward;
            if (health > 100) {
                healthDroopOrReward = 100 - (health - healthDroopOrReward);
                health = 100;
            }
            console.log(`You healed for ${healthDroopOrReward} hp.`);
            console.log(`Current health: ${health} hp.`);

        } else {
            health -= healthDroopOrReward;
            if (health <= 0) {
                console.log(`You died! Killed by ${roomObstacleOrBonus}.`)
                console.log(`Best room: ${roomCounter}`);
                yourOk = false;
            } else {
                console.log(`You slayed ${roomObstacleOrBonus}.`);
            }
        }

        index++;
        if (index === newArray.length && health > 0) {
            yourOk = false;
            console.log(`You've made it!`);
            console.log(`Coins: ${coins}`);
            console.log(`Health: ${health}`);
        }
    }
}
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"])
