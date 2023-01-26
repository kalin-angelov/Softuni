function previousDay(year, month, day) {

    let wontedDate = new Date(year, month - 1, day);
    wontedDate.setDate(wontedDate.getDate() - 1);
    console.log(`${wontedDate.getFullYear()}-${wontedDate.getMonth() + 1}-${wontedDate.getDate()}`);
}
previousDay(2016, 9, 30);
previousDay(2016, 10, 1);
