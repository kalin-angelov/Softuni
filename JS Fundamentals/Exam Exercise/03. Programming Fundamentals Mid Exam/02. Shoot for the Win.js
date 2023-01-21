function shootForTheWin(arr) {

    let targets = arr.shift().split(' ').map(Number);
    let targetCounter = 0;
    for (let el of arr) {
        let targetIndex = el;
        if (el === 'End') {
            console.log(`Shot targets: ${targetCounter} -> ${targets.join(' ')}`);
            break;
        }
        let target = targets[targetIndex];
        let numEl = Number(el);
        if (numEl <= targets.length - 1 && numEl >= 0) {
            if (target !== -1) {
                let shotTarget = Number(targets.splice(Number(targetIndex), 1));
                targets.splice(Number(targetIndex), 0, -1);
                for (let el of targets) {
                    if (el !== -1) {
                        if (el > shotTarget) {
                            let indexOfEl = targets.indexOf(el);
                            targets.splice(indexOfEl, 1);
                            el -= shotTarget;
                            targets.splice(indexOfEl, 0, el);
                        } else if (el <= shotTarget) {
                            let indexOfEl = targets.indexOf(el);
                            targets.splice(indexOfEl, 1);
                            el += shotTarget;
                            targets.splice(indexOfEl, 0, el);
                        }
                    } 
                }
                targetCounter++
            }
        }
    }
}
shootForTheWin((["30 30 12 60 54 66","End"]));
