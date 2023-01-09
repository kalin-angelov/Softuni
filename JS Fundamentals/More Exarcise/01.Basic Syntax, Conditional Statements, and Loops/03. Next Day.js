function nextDay(year, month, day) {

    let calendar = new Date (year, month - 1, day + 1);

    console.log(`${calendar.getFullYear()}-${calendar.getMonth() + 1}-${calendar.getDate()}`);
}
nextDay(2016, 9, 30)
