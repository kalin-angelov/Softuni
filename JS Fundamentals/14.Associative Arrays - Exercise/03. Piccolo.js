function piccolo(data) {

    let parkingLot = new Set();
    for (let info of data) {
        let [command, carNumber] = info.split(', ');
        switch (command) {
            case 'IN' : parkingLot.add(carNumber); break;
            case 'OUT' : parkingLot.delete(carNumber); break;
        }
    }
    if (parkingLot.size === 0) {
        console.log(`Parking Lot is Empty`);
    } else {
        let list = Array.from(parkingLot);
        let listSort = list.sort();
        for (let el of listSort) {
            console.log(el);
        }
    }
}
piccolo(['IN, CA2844AA','IN, CA1234TA','OUT, CA2844AA','OUT, CA1234TA'])
