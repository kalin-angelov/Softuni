function flightSchedule(array) {

    let flights = array.shift();
    let changedFlights = array.shift();
    let flightsStatus = array.shift();
    let finalList = []
    let list = {}
    for (let flight of flights) {
        let element = flight.split(' ');
        let flightNumber = element[0];
        let destination = flight.split(flightNumber + ' ');
            list = {
                destination:destination[1],
                status:'Ready to fly',
            }
        for (let plane of changedFlights) {
            let element = plane.split(' ');
            let planeNumber = element[0];
            let planeStatus = plane.split(planeNumber + ' ');
            if (flight.includes(planeNumber)) {
                list['status'] = planeStatus[1];
            } 
        }
        finalList.push(list);
    }
    for (let el of finalList) {
        if (el['status'] === flightsStatus[0]) {
            console.log(`{ Destination: '${el['destination']}', Status: '${el['status']}' }`);
        }
    } 
}
flightSchedule([[
  'WN269 Delaware',
  'FL2269 Oregon',
   'WN498 Las Vegas',
   'WN3145 Ohio',
   'WN612 Alabama',
   'WN4010 New York',
   'WN1173 California',
   'DL2120 Texas',
   'KL5744 Illinois',
   'WN678 Pennsylvania'],
   ['DL2120 Cancelled',
   'WN612 Cancelled',
   'WN1173 Cancelled',
   'SK430 Cancelled', 
   'WN612 Ready to fly'],
 ['Ready to fly']]);
