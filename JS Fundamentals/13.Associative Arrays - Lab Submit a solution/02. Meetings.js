function meetings(data) {

    let schedule = {};
    for (let info of data) {
        let [day, name] = info.split(' ');
        if (schedule.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            schedule[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    }
    for (let data in schedule) {
        console.log(data + " -> " + schedule[data]);
    }  
}
meetings(['Friday Bob','Saturday Ted','Monday Bill','Monday John','Wednesday George'])
