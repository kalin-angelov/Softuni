function vacation(input) {

    let index = 0;
    let monyNeedForVacation = Number(input[index++]);
    let monyAvailable = Number(input[index++]);
    let days = 0;
    let spend = 0;

    while (true) {
        let action = input[index++];
        let mony = Number(input[index]);

        days++;

        if (action === "spend") {
            monyAvailable -= mony;
            spend++;
                if (monyAvailable < 0) {
                    monyAvailable = 0;
                }
        }   
        if (spend === 5) {
            console.log(`You can't save the money.`);
            console.log(`${days}`);
            break;
        }
        if (action === "save") {
            monyAvailable += mony;
            spend = 0;

        }
        if (monyAvailable >= monyNeedForVacation) {
            console.log(`You saved the money for ${days} days.`);
            break;
        }

        action = input[index++];
    }

}
vacation(["250","150","spend","50","spend","50","save","100","save","100"])
