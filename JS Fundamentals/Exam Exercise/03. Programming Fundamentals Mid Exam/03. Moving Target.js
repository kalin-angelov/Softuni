function movingTarget(arr) {

    let targets = arr.shift().split(' ').map(Number);
    for (let el of arr) {
        if (el === 'End') {
            console.log(`${targets.join('|')}`);
            break;
        }
        el = el.split(' ');
        let command = el[0]
        let indexOfTarget = Number(el[1]);
        let value = Number(el[2]);
        if (command === 'Shoot') {
            if (indexOfTarget <= targets.length - 1 && indexOfTarget >= 0) {
                let targetShoot = Number(targets.splice(indexOfTarget, 1));
                targetShoot -= value;
                if (targetShoot > 0) {
                    targets.splice(indexOfTarget, 0, targetShoot);
                }
            }
        } else if (command === 'Add') {
            if (indexOfTarget <= targets.length - 1 && indexOfTarget >= 0) {
                targets.splice(indexOfTarget, 0, value);
            } else {
                console.log(`Invalid placement!`);
            }
        } else if (command === 'Strike') {
            if ((indexOfTarget + value) <= targets.length - 1 && (indexOfTarget - value) >= 0) {
                let rangeStart = indexOfTarget - value;
                let rangeEnd = (value * 2) + 1 ;
                targets.splice(rangeStart, rangeEnd); 
            } else {
                console.log(`Strike missed!`);
            }
        }
    }
}
movingTarget(["52 74 23 44 96 110","Shoot 5 10","Shoot 1 80","Strike 2 1","Add 22 3","Add 1 5","End"]);
