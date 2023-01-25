function daysInAMonth(month, year) {

    let day = new Date(year, month, 0);
    console.log(day.getDate());

}
daysInAMonth(2, 2021);
