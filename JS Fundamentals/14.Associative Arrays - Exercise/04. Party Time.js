function partyTime(data) {

    let vip = [];
    let normalGest = [];
    let gestComing = false;
    for (let gest of data) {
        if (gest === 'PARTY') {
            gestComing = true;
        }
        if (!gestComing) {
            if (Number(gest[0]) >= 0) {
                vip.push(gest);
            } else {
                normalGest.push(gest)
            }
        } else if (gestComing && gest !== 'PARTY') {
            if (Number(gest[0]) >= 0) {
                let index = vip.indexOf(gest);
                vip.splice(index, 1);
            } else {
                let index = normalGest.indexOf(gest);
                normalGest.splice(index, 1);
            }
        }
    }
    let gestAbsent = Number(vip.length) + Number(normalGest.length);
    console.log(gestAbsent);
    for (let gest of vip) {
        console.log(gest);
    }
    for (let gest of normalGest) {
        console.log(gest);
    }
}
partyTime(['7IK9Yo0h','9NoBUajQ','Ce8vwPmE','SVQXQCbc','tSzE5t0p','PARTY','9NoBUajQ','Ce8vwPmE','SVQXQCbc'])
