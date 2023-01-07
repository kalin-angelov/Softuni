function salary(input) {

    let index = 0;
    let tabs = Number(input[index]);
    index++;
    let mony = Number(input[index]);
    index++;

    for(i = 1; i <= tabs; i++) {
        let site = input[index];
        index++;
        switch (site) {
            case "Facebook":
                mony -= 150;
                break;
            case "Instagram":
                mony -= 100;
                break;
            case "Reddit":
                mony -= 50;
                break;
        }
    }
    if (mony <= 0) {
        console.log(`You have lost your salary.`)
    } else {
        console.log(mony)
    }

}
salary(["3","500","Facebook","Stackoverflow.com","softuni.bg"])
